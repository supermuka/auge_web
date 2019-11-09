// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/services/auge_api_service.dart';

import 'package:auge_server/model/work/work.dart';
import 'package:auge_server/model/work/work_stage.dart';

import 'package:auge_server/src/protos/generated/google/protobuf/wrappers.pb.dart' as wrappers_pb;
import 'package:auge_server/src/protos/generated/work/work_work_item.pbgrpc.dart' as work_work_item_pbgrpc;
import 'package:auge_server/src/protos/generated/work/work_stage.pbgrpc.dart' as work_stage_pbgrpc;

@Injectable()
class WorkService {
  final AuthService _authService;
  final AugeApiService _augeApiService;

  work_work_item_pbgrpc.WorkServiceClient _workServiceClient;
  work_stage_pbgrpc.WorkStageServiceClient _workStageServiceClient;


  WorkService(this._authService, this._augeApiService) {
    _workServiceClient =
        work_work_item_pbgrpc.WorkServiceClient(_augeApiService.channel);
    _workStageServiceClient =
        work_stage_pbgrpc.WorkStageServiceClient(_augeApiService.channel);
  }

  get authService => _authService;

  /// Return a list of [Work]
  Future<List<Work>> getWorks(String organizationId, {String objectiveId, bool withWorkItems = false, bool withProfile = false}) async {
    //-- return await _augeApiService.workAugeApi.getWorks(organizationId, objectiveId: objectiveId, withWorkItems: withWorkItems);
    work_work_item_pbgrpc.WorkGetRequest workGetRequest = work_work_item_pbgrpc.WorkGetRequest();
    workGetRequest.organizationId = organizationId;
    if (objectiveId != null) {
      workGetRequest.objectiveId = objectiveId;
    }
    workGetRequest.withWorkItems = withWorkItems;
    workGetRequest.withUserProfile = withProfile;

    Map<String, dynamic> cache = {};
    return (await _workServiceClient.getWorks(workGetRequest)).works.map((i) =>
    Work()
      ..readFromProtoBuf(i, cache)).toList();
  }

  /// Return [User] list by Organization [id]
  Future<Work> getWork(String id, {bool withWorkItems = false, bool withUserProfile = false}) async {
    // return _augeApiService.augeApi.getUsers(organizationId, withProfile: withProfile);
    return Work()..readFromProtoBuf((await _workServiceClient.getWork(
        work_work_item_pbgrpc.WorkGetRequest()
          ..id = id
          ..withWorkItems = withWorkItems
          ..withUserProfile = withUserProfile)), {});
  }

  /// Return a list of [Stage]
  Future<List<WorkStage>> getWorkStages(String workId) async {
    return (await _workStageServiceClient.getWorkStages(work_stage_pbgrpc.WorkStageGetRequest()..workId = workId)).workStages.map((s) =>
    WorkStage()
      ..readFromProtoBuf(s)).toList();
  }

  /// Return [WorkStage] by Work [id]
  Future<WorkStage> getWorkStage(String id) async {
    // return _augeApiService.augeApi.getUsers(organizationId, withProfile: withProfile);
    return WorkStage()..readFromProtoBuf((await _workStageServiceClient.getWorkStage(
        work_stage_pbgrpc.WorkStageGetRequest()
          ..id = id)));
  }
/*
  /// Return a list of [State]
  Future<List<State>> getStates() async {
    //-- return _augeApiService.workAugeApi.getStates()
    return (await _stateServiceClient.getStates(empty_pb.Empty())).states.map((s) =>
    State()
      ..readFromProtoBuf(s)).toList();
  }
*/
  /// Save (create or update)an [Work]
  Future<String> saveWork(Work work) async {
    try {

      work_work_item_pbgrpc.WorkRequest workRequest = work_work_item_pbgrpc.WorkRequest()
        ..work = work.writeToProtoBuf()
        ..authUserId = _authService.authenticatedUser.id
        ..authOrganizationId = _authService.authorizedOrganization.id;


      if (work.id == null) {
        wrappers_pb.StringValue idResponse = await _workServiceClient
            .createWork(workRequest);

        // ID - primary key generated on server-side.
        work.id = idResponse?.value;
      } else {
        await _workServiceClient.updateWork(workRequest);
      }
    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
    return work.id;
  }


  /// Delete an [Work]
  void deleteWork(Work work) async {
    try {

      work_work_item_pbgrpc.WorkDeleteRequest workDeleteRequest = work_work_item_pbgrpc.WorkDeleteRequest()
        ..workId = work.id
        ..workVersion = work.version
        ..authOrganizationId = _authService.authorizedOrganization.id
        ..authUserId = _authService.authenticatedUser.id;

      await _workServiceClient.deleteWork(workDeleteRequest);
    } catch (e) {
      rethrow;
    }
  }

  /// Save (create or update)an [Stage]
  Future<String> saveStage(String workId, WorkStage workStage) async {
    try {

      work_stage_pbgrpc.WorkStageRequest workStageRequest = work_stage_pbgrpc.WorkStageRequest()
        ..workId = workId
        ..workStage = workStage.writeToProtoBuf()
        ..authUserId = _authService.authenticatedUser.id
        ..authOrganizationId = _authService.authorizedOrganization.id;


      if (workStage.id == null) {
        wrappers_pb.StringValue idResponse = await _workStageServiceClient
            .createWorkStage(workStageRequest);

        // ID - primary key generated on server-side.
        workStage.id = idResponse?.value;
      } else {
        await _workStageServiceClient.updateWorkStage(workStageRequest);
      }
    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
    return workStage.id;
  }

  /// Delete a [WorkStage]
  void deleteWorkStage(WorkStage workStage) async {
    try {

      work_stage_pbgrpc.WorkStageDeleteRequest workStageDeleteRequest = work_stage_pbgrpc.WorkStageDeleteRequest()
        ..workStageId = workStage.id
        ..workStageVersion = workStage.version
        ..authOrganizationId = _authService.authorizedOrganization.id
        ..authUserId = _authService.authenticatedUser.id;

      await _workStageServiceClient.deleteWorkStage(workStageDeleteRequest);
    } catch (e) {
      rethrow;
    }
  }


  static String getStateHslColor(State state) {
    String hslColor;
    if (state == State.notStarted) {
      hslColor = '0, 0%, 90%';
    } else if (state == State.inProgress) {
      hslColor = '90, 100%, 90%';
    } else if (state == State.completed) {
      hslColor = '200, 100%, 90%';
    }
    return hslColor;
  }
}
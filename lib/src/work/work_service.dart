// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/services/auge_api_service.dart';

import 'package:auge_shared/domain/work/work.dart';
import 'package:auge_shared/domain/work/work_stage.dart';

import 'package:auge_shared/protos/generated/google/protobuf/wrappers.pb.dart' as wrappers_pb;
import 'package:auge_shared/protos/generated/work/work_work_item.pbgrpc.dart' as work_work_item_pbgrpc;

@Injectable()
class WorkService {
  final AuthService _authService;
  final AugeApiService _augeApiService;

  work_work_item_pbgrpc.WorkServiceClient _workServiceClient;
  work_work_item_pbgrpc.WorkStageServiceClient _workStageServiceClient;

  WorksFilterOrder worksFilterOrder;

  WorkService(this._authService, this._augeApiService) {
    _workServiceClient =
        work_work_item_pbgrpc.WorkServiceClient(_augeApiService.channel);
    _workStageServiceClient =
        work_work_item_pbgrpc.WorkStageServiceClient(_augeApiService.channel);
    worksFilterOrder = WorksFilterOrder();
  }

  get authService => _authService;

  /// Return a list of [Work]
  Future<List<Work>> getWorks(String organizationId, {String objectiveId, bool withWorkItems = false, bool withProfile = false, bool withArchived = false, List<String> groupIds, List<String> leaderUserIds}) async {
    //-- return await _augeApiService.workAugeApi.getWorks(organizationId, objectiveId: objectiveId, withWorkItems: withWorkItems);
    work_work_item_pbgrpc.WorkGetRequest workGetRequest = work_work_item_pbgrpc.WorkGetRequest();
    workGetRequest.organizationId = organizationId;
    if (objectiveId != null) {
      workGetRequest.objectiveId = objectiveId;
    }
    workGetRequest.withWorkItems = withWorkItems;
    workGetRequest.withUserProfile = withProfile;
    if (withArchived != null) workGetRequest.withArchived = withArchived;
    if (groupIds != null && groupIds.isNotEmpty) workGetRequest.groupIds.addAll(groupIds);
    if (leaderUserIds != null && leaderUserIds.isNotEmpty) workGetRequest.leaderUserIds.addAll(leaderUserIds);

    Map<String, dynamic> cache = {};
    return (await _workServiceClient.getWorks(workGetRequest)).works.map((i) =>
    WorkHelper.readFromProtoBuf(i, cache)).toList();
  }

  /// Return [User] list by Organization [id]
  Future<Work> getWork(String id, {bool withWorkItems = false,
    bool withUserProfile = false,
    bool withArchived = false,
    Set<String> leaderUserIds,
    Set<String> groupIds,
    bool workItemWithArchived = false,
    Set<String> workItemAssignedToIds}) async {
    // return _augeApiService.augeApi.getUsers(organizationId, withProfile: withProfile);
    work_work_item_pbgrpc.WorkGetRequest workGetRequest = work_work_item_pbgrpc.WorkGetRequest();

    workGetRequest.id = id;
    workGetRequest.withWorkItems = withWorkItems;
    workGetRequest.withUserProfile = withUserProfile;
    workGetRequest.withArchived = withArchived;
    if (leaderUserIds != null && leaderUserIds.isNotEmpty) workGetRequest.leaderUserIds.addAll(leaderUserIds);
    if (groupIds != null && groupIds.isNotEmpty) workGetRequest.groupIds.addAll(groupIds);
    workGetRequest.workItemWithArchived = workItemWithArchived;
    if (workItemAssignedToIds != null && workItemAssignedToIds.isNotEmpty) workGetRequest.workItemAssignedToIds.addAll(workItemAssignedToIds);

    return WorkHelper.readFromProtoBuf(await _workServiceClient.getWork(workGetRequest), {});
  }

  /// Return a list of [Stage]
  Future<List<WorkStage>> getWorkStages(String workId) async {
    Map<String, dynamic> cache = {};
    return (await _workStageServiceClient.getWorkStages(work_work_item_pbgrpc.WorkStageGetRequest()..workId = workId)).workStages.map((s) =>
    WorkStageHelper.readFromProtoBuf(s, cache)).toList();
  }

  /// Return [WorkStage] by Work [id]
  Future<WorkStage> getWorkStage(String id) async {
    // return _augeApiService.augeApi.getUsers(organizationId, withProfile: withProfile);
    Map<String, dynamic> cache = {};
    return WorkStageHelper.readFromProtoBuf((await _workStageServiceClient.getWorkStage(
        work_work_item_pbgrpc.WorkStageGetRequest()
          ..id = id)), cache);
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
        ..work = WorkHelper.writeToProtoBuf(work)
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

      work_work_item_pbgrpc.WorkStageRequest workStageRequest = work_work_item_pbgrpc.WorkStageRequest()
        ..workId = workId
        ..workStage = WorkStageHelper.writeToProtoBuf(workStage)
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

      work_work_item_pbgrpc.WorkStageDeleteRequest workStageDeleteRequest = work_work_item_pbgrpc.WorkStageDeleteRequest()
        ..workStageId = workStage.id
        ..workStageVersion = workStage.version
        ..authOrganizationId = _authService.authorizedOrganization.id
        ..authUserId = _authService.authenticatedUser.id;

      await _workStageServiceClient.deleteWorkStage(workStageDeleteRequest);
    } catch (e) {
      rethrow;
    }
  }


  static String getStateHslColor(int stateIndex) {
    String hslColor;
    if (stateIndex == State.notStarted.index) {
      // hslColor = '0, 0%, 90%';
      hslColor = '0, 0%, 88%'; //$mat-gray-300
    } else if (stateIndex == State.inProgress.index) {
      //hslColor = '90, 100%, 90%';
      hslColor = '88, 50%, 67%'; //$mat-light-green-300
    } else if (stateIndex == State.completed.index) {
     // hslColor = '200, 100%, 90%';
      hslColor = '199, 91%, 64%'; //$mat-light-blue-300
    }
    return hslColor;
  }
}

/// Used to change data between [Works] Component and Filter
class WorksFilterOrder {

  // Filter
  Set<String> groupIds = {};
  Set<String> leaderUserIds = {};
  bool archived = false;

  // Filtered Items
  int filteredItems;

  //Ordered by
  String orderedBy;

}

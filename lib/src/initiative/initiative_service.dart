// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/services/auge_api_service.dart';

import 'package:auge_server/model/initiative/initiative.dart';
import 'package:auge_server/model/initiative/stage.dart';
import 'package:auge_server/model/initiative/state.dart';

import 'package:auge_server/src/protos/generated/google/protobuf/empty.pb.dart' as empty_pb;
import 'package:auge_server/src/protos/generated/general/common.pb.dart' as common_pb;
import 'package:auge_server/src/protos/generated/initiative/initiative.pbgrpc.dart' as initiative_pbgrpc;
import 'package:auge_server/src/protos/generated/initiative/stage.pbgrpc.dart' as stage_pbgrpc;
import 'package:auge_server/src/protos/generated/initiative/state.pbgrpc.dart' as state_pbgrpc;

@Injectable()
class InitiativeService {
  final AuthService _authService;
  final AugeApiService _augeApiService;

  initiative_pbgrpc.InitiativeServiceClient _initiativeServiceClient;
  stage_pbgrpc.StageServiceClient _stageServiceClient;
  state_pbgrpc.StateServiceClient _stateServiceClient;

  InitiativeService(this._authService, this._augeApiService) {
    _initiativeServiceClient =
        initiative_pbgrpc.InitiativeServiceClient(_augeApiService.channel);
    _stageServiceClient =
        stage_pbgrpc.StageServiceClient(_augeApiService.channel);
    _stateServiceClient =
        state_pbgrpc.StateServiceClient(_augeApiService.channel);
  }

  get authService => _authService;

  /// Return a list of [Initiative]
  Future<List<Initiative>> getInitiatives(String organizationId, {String objectiveId, bool withWorkItems = false, bool withProfile = false}) async {
    //-- return await _augeApiService.initiativeAugeApi.getInitiatives(organizationId, objectiveId: objectiveId, withWorkItems: withWorkItems);
    initiative_pbgrpc.InitiativeGetRequest initiativeGetRequest = initiative_pbgrpc.InitiativeGetRequest();
    initiativeGetRequest.organizationId = organizationId;
    if (objectiveId != null) {
      initiativeGetRequest.objectiveId = objectiveId;
    }
    initiativeGetRequest.withWorkItems = withWorkItems;
    initiativeGetRequest.withProfile = withProfile;

    return (await _initiativeServiceClient.getInitiatives(initiativeGetRequest)).initiatives.map((i) =>
    Initiative()
      ..readFromProtoBuf(i)).toList();
  }

  /// Return [User] list by Organization [id]
  Future<Initiative> getInitiative(String id, {bool withWorkItems = false, bool withProfile = false}) async {
    // return _augeApiService.augeApi.getUsers(organizationId, withProfile: withProfile);
    return Initiative()..readFromProtoBuf((await _initiativeServiceClient.getInitiative(
        initiative_pbgrpc.InitiativeGetRequest()
          ..id = id
          ..withWorkItems = withWorkItems
          ..withProfile = withProfile)));
  }

  /// Return a list of [Stage]
  Future<List<Stage>> getStages(String initiativeId) async {
    return (await _stageServiceClient.getStages(stage_pbgrpc.StageGetRequest()..initiativeId = initiativeId)).stages.map((s) =>
    Stage()
      ..readFromProtoBuf(s)).toList();
  }

  /// Return [Stage] by Initiative [id]
  Future<Stage> getStage(String id) async {
    // return _augeApiService.augeApi.getUsers(organizationId, withProfile: withProfile);
    return Stage()..readFromProtoBuf((await _stageServiceClient.getStage(
        stage_pbgrpc.StageGetRequest()
          ..id = id)));
  }

  /// Return a list of [State]
  Future<List<State>> getStates() async {
    //-- return _augeApiService.initiativeAugeApi.getStates()
    return (await _stateServiceClient.getStates(empty_pb.Empty())).states.map((s) =>
    State()
      ..readFromProtoBuf(s)).toList();
  }

  /// Save (create or update)an [Initiative]
  Future<String> saveInitiative(Initiative initiative) async {
    try {

      initiative_pbgrpc.InitiativeRequest initiativeRequest = initiative_pbgrpc.InitiativeRequest()
        ..initiative = initiative.writeToProtoBuf()
        ..authenticatedUserId = _authService.authenticatedUser.id
        ..authenticatedOrganizationId = _authService.authorizedOrganization.id;


      if (initiative.id == null) {
        common_pb.IdResponse idResponse = await _initiativeServiceClient
            .createInitiative(initiativeRequest);

        // ID - primary key generated on server-side.
        initiative.id = idResponse?.id;
      } else {
        await _initiativeServiceClient.updateInitiative(initiativeRequest);
      }
    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
    return initiative.id;
  }



  /// Delete an [Initiative]
  void deleteInitiative(Initiative initiative) async {
    try {

      initiative_pbgrpc.InitiativeDeleteRequest initiativeDeleteRequest = initiative_pbgrpc.InitiativeDeleteRequest()
        ..initiativeId = initiative.id
        ..initiativeVersion = initiative.version
        ..authenticatedOrganizationId = _authService.authorizedOrganization.id
        ..authenticatedUserId = _authService.authenticatedUser.id;

      await _initiativeServiceClient.deleteInitiative(initiativeDeleteRequest);
    } catch (e) {
      rethrow;
    }
  }

  /// Save (create or update)an [Stage]
  Future<String> saveStage(String initiativeId, Stage stage) async {
    try {

      stage_pbgrpc.StageRequest stageRequest = stage_pbgrpc.StageRequest()
        ..initiativeId = initiativeId
        ..stage = stage.writeToProtoBuf()
        ..authenticatedUserId = _authService.authenticatedUser.id
        ..authenticatedOrganizationId = _authService.authorizedOrganization.id;


      if (stage.id == null) {
        common_pb.IdResponse idResponse = await _stageServiceClient
            .createStage(stageRequest);

        // ID - primary key generated on server-side.
        stage.id = idResponse?.id;
      } else {
        await _stageServiceClient.updateStage(stageRequest);
      }
    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
    return stage.id;
  }

  /// Delete a [Stage]
  void deleteStage(Stage stage) async {
    try {

      stage_pbgrpc.StageDeleteRequest stageDeleteRequest = stage_pbgrpc.StageDeleteRequest()
        ..stageId = stage.id
        ..stageVersion = stage.version
        ..authenticatedOrganizationId = _authService.authorizedOrganization.id
        ..authenticatedUserId = _authService.authenticatedUser.id;

      await _stageServiceClient.deleteStage(stageDeleteRequest);
    } catch (e) {
      rethrow;
    }
  }
}
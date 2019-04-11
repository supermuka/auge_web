// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_server/model/initiative/initiative.dart';
import 'package:auge_server/model/initiative/state.dart';

import 'package:auge_web/services/auge_api_service.dart';

import 'package:auge_server/src/protos/generated/google/protobuf/empty.pb.dart' as empty_pb;
import 'package:auge_server/src/protos/generated/general/common.pb.dart' as common_pb;
import 'package:auge_server/src/protos/generated/initiative/initiative.pbgrpc.dart' as initiative_pbgrpc;
import 'package:auge_server/src/protos/generated/initiative/state.pbgrpc.dart' as state_pbgrpc;

@Injectable()
class InitiativeService {

  final AugeApiService _augeApiService;
  initiative_pbgrpc.InitiativeServiceClient _initiativeServiceClient;
  state_pbgrpc.StateServiceClient _stateServiceClient;

  InitiativeService(this._augeApiService) {
    _initiativeServiceClient =
        initiative_pbgrpc.InitiativeServiceClient(_augeApiService.channel);
    _stateServiceClient =
        state_pbgrpc.StateServiceClient(_augeApiService.channel);
  }

  /// Return a list of [Initiative]
  Future<List<Initiative>> getInitiatives(String organizationId, {String objectiveId, bool withWorkItems, bool withProfile}) async {
    //-- return await _augeApiService.initiativeAugeApi.getInitiatives(organizationId, objectiveId: objectiveId, withWorkItems: withWorkItems);
    return (await _initiativeServiceClient.getInitiatives(
        initiative_pbgrpc.InitiativeGetRequest()
          ..organizationId = organizationId
          ..objectiveId = objectiveId
          ..withWorkItems = withWorkItems
          ..withProfile = withProfile)).initiatives.map((i) =>
    Initiative()
      ..readFromProtoBuf(i)).toList();
  }

  /// Delete an [Initiative]
  void deleteInitiative(String id) async {
    try {
      //TODO pass initiative instead id to log history, when it implemented.
      await _initiativeServiceClient.deleteInitiative(initiative_pbgrpc.Initiative()..id = id);
    } catch (e) {
      rethrow;
    }
  }

  /// Return a list of [State]
  Future<List<State>> getStates() async {
    //-- return _augeApiService.initiativeAugeApi.getStates()
    return (await _stateServiceClient.getStates(empty_pb.Empty())).states.map((s) =>
    State()
      ..readFromProtoBuf(s)).toList();
  }

  /// Save (create or update)an [Initiative]
  void saveInitiative(Initiative initiative) async {
    try {
      if (initiative.id == null) {
        common_pb.IdResponse idResponse = await _initiativeServiceClient
            .createInitiative(initiative.writeToProtoBuf());

        // ID - primary key generated on server-side.
        initiative.id = idResponse?.id;
      } else {
        await _initiativeServiceClient.updateInitiative(initiative.writeToProtoBuf());
      }
    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
  }
}
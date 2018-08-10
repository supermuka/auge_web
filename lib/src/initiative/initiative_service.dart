// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_server/model/initiative/initiative.dart';
import 'package:auge_server/model/initiative/state.dart';
import 'package:auge_server/message_type/id_message.dart';

import 'package:auge_web/services/augeapi_service.dart';

@Injectable()
class InitiativeService {

  final AugeApiService _augeApiService;

  InitiativeService(this._augeApiService);

  /// Return a list of [Initiative]
  Future<List<Initiative>> getInitiatives(String organizationId, {String objectiveId, bool withWorkItems}) async {
    return await _augeApiService.initiativeAugeApi.getInitiatives(organizationId, objectiveId: objectiveId, withWorkItems: withWorkItems);
  }

  /// Return a list of [Initiative] by Id
  Future<Initiative> getInitiativeById(String id, {bool withWorkItems}) async {
    return await _augeApiService.initiativeAugeApi.getInitiativeById(id, withWorkItems: withWorkItems);
  }

  /// Delete an [Initiative]
  Future deleteInitiative(String id) async {
    await _augeApiService.initiativeAugeApi.deleteInitiative(id);
  }

  /// Return a list of [State]
  Future<List<State>> getStates() async {
    return await _augeApiService.initiativeAugeApi.getStates();
  }

  /// Save (create or update)an [Initiative]
  void saveInitiative(Initiative initiative) async {
    if (initiative.id == null)  {
      IdMessage idMessage = await _augeApiService.initiativeAugeApi.createInitiative(initiative);

      // ID - primary key generated on server-side.
      initiative.id = idMessage?.id;
    } else {
      await _augeApiService.initiativeAugeApi.updateInitiative(initiative);
    }
  }
}
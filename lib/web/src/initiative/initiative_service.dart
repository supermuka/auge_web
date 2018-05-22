// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge/shared/model/initiative/initiative.dart';
import 'package:auge/shared/model/initiative/state.dart';

import 'package:auge/web/services/augeapi_service.dart';

@Injectable()
class InitiativeService {

  final AugeApiService _augeApiService;

  InitiativeService(this._augeApiService);

  /// Return a list of [Initiative]
  Future<List<Initiative>> getInitiatives(String organization_id, {bool withWorkItems}) async {
    return await _augeApiService.initiativeAugeApi.getInitiatives(organization_id, withWorkItems: withWorkItems);
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
  void saveInitiative(Initiative initiative) {
    if (initiative.id == null) {
      _augeApiService.initiativeAugeApi.createInitiative(initiative);
    } else {
      _augeApiService.initiativeAugeApi.updateInitiative(initiative);
    }
  }
}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_web/services/auge_api_service.dart';

import 'package:auge_server/model/objective/objective.dart';

import 'package:auge_server/src/protos/generated/objective/objective.pbgrpc.dart' as objective_pbgrpc;

@Injectable()
class MapService {

  final AugeApiService _augeApiService;
  objective_pbgrpc.ObjectiveServiceClient _objectiveServiceClient;

  MapService(this._augeApiService) {
    _objectiveServiceClient = objective_pbgrpc.ObjectiveServiceClient(_augeApiService.channel);
  }

  /// Return a list of the [Objectives] in hierarchy form with yours children
  Future<List<Objective>> getObjectivesMap(String organizationId) async {

    objective_pbgrpc.ObjectivesResponse objectivesResponse = await _objectiveServiceClient.getObjectives(
        objective_pbgrpc.ObjectiveGetRequest()
          ..organizationId = organizationId
          ..treeAlignedWithChildren = true
          ..withProfile = true
          ..withMeasures = true);

    return objectivesResponse.objectives.map((o) =>
    Objective()..readFromProtoBuf(o)).toList();
  }
}
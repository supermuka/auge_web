import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_web/services/auge_api_service.dart';

import 'package:auge_server/model/objective/objective.dart';

import 'package:auge_server/src/protos/generated/objective/objective.pbgrpc.dart' as objective_pbgrpc;

@Injectable()
class GanttService {
  final AugeApiService _augeApiService;
  objective_pbgrpc.ObjectiveServiceClient _objectiveServiceClient;

  GanttService(this._augeApiService) {

    _objectiveServiceClient =
        objective_pbgrpc.ObjectiveServiceClient(_augeApiService.channel);
  }

  /// Return a list of the [Objectives] in hierarchy form with yours children
  Future<List<Objective>> getObjectivesGantt(String organizationId) async {
      //--return  _augeApiService.objectiveAugeApi.getObjectives(
      //--    organizationId, withMeasures: true, withProfile: true);
    objective_pbgrpc.ObjectivesResponse objectivesResponse = await _objectiveServiceClient.getObjectives(objective_pbgrpc.ObjectiveGetRequest()
      ..organizationId = organizationId
      ..withMeasures = true
      ..withProfile = true);

    // Create model from protobuf equivalent
    return objectivesResponse.objectives.map((o) => Objective()..readFromProtoBuf(o)).toList();
  }
}
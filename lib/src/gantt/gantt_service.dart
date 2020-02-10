import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_web/services/auge_api_service.dart';

import 'package:auge_shared/domain/objective/objective.dart';

import 'package:auge_shared/protos/generated/objective/objective_measure.pbgrpc.dart' as objective_measure_pbgrpc;

@Injectable()
class GanttService {
  final AugeApiService _augeApiService;
  objective_measure_pbgrpc.ObjectiveServiceClient _objectiveServiceClient;

  GanttService(this._augeApiService) {

    _objectiveServiceClient =
        objective_measure_pbgrpc.ObjectiveServiceClient(_augeApiService.channel);
  }

  /// Return a list of the [Objectives] in hierarchy form with yours children
  Future<List<Objective>> getObjectivesGantt(String organizationId) async {
      //--return  _augeApiService.objectiveAugeApi.getObjectives(
      //--    organizationId, withMeasures: true, withProfile: true);
    objective_measure_pbgrpc.ObjectivesResponse objectivesResponse = await _objectiveServiceClient.getObjectives(objective_measure_pbgrpc.ObjectiveGetRequest()
      ..organizationId = organizationId
      ..withMeasures = true
      ..withUserProfile = true);

    Map<String, dynamic> cache = {};
    // Create model from protobuf equivalent
    return objectivesResponse.objectives.map((o) => Objective()..readFromProtoBuf(o, cache)).toList();
  }
}
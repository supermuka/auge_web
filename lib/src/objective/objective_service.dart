import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_web/services/augeapi_service.dart';

import 'package:auge_shared/model/objective/objective.dart';

@Injectable()
class ObjectiveService {


  final AugeApiService _augeApiService;

  ObjectiveService(this._augeApiService);

  /// Return a list of [Objective]
  Future<List<Objective>> getObjectives(String organizationId, {bool withMeasures}) async {
    return await _augeApiService.objectiveAugeApi.getObjectives(organizationId, withMeasures: withMeasures);
  }

  /// Return an [Objective] by Id
  Future<Objective> getObjectiveById(String id, {bool withMeasures}) async {
    return await _augeApiService.objectiveAugeApi.getObjectiveById(id, withMeasures: withMeasures);
  }


  /// Delete an [Objective]
  Future deleteObjective(String id) async {
    await _augeApiService.objectiveAugeApi.deleteObjective(id);
  }

  /// Save (create or update) an [Objective]
  void saveObjective(Objective objective) {
    if (objective.id == null) {
      _augeApiService.objectiveAugeApi.createObjective(objective);
    } else {
      _augeApiService.objectiveAugeApi.updateObjective(objective);
    }
  }
}
import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_web/services/augeapi_service.dart';

import 'package:auge_server/model/objective/objective.dart';

@Injectable()
class GanttService {


  final AugeApiService _augeApiService;

  GanttService(this._augeApiService);

  /// Return a list of the [Objectives] in hierarchy form with yours children
  Future<List<Objective>> getObjectivesGantt(String organizationId) async {
      return  _augeApiService.objectiveAugeApi.getObjectives(
          organizationId, withMeasures: true, withProfile: true);
  }
}
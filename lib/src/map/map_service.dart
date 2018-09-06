import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_web/services/augeapi_service.dart';

import 'package:auge_server/model/objective/objective.dart';

@Injectable()
class MapService {


  final AugeApiService _augeApiService;

  MapService(this._augeApiService);

  /// Return a list of the [Objectives] in hierarchy form with yours children
  Future<List<Objective>> getObjectivesMap(String organizationId) async {
      return  _augeApiService.objectiveAugeApi.getObjectives(
          organizationId, treeAlignedWithChildren: true, withProfile: true);


  }
}
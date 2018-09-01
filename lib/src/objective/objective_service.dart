import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_web/services/augeapi_service.dart';

import 'package:auge_server/message_type/id_message.dart';
import 'package:auge_server/model/objective/objective.dart';

@Injectable()
class ObjectiveService {

  final AugeApiService _augeApiService;

  ObjectiveService(this._augeApiService);

  /// Return a list of [Objective]
  Future<List<Objective>> getObjectives(String organizationId, {bool withMeasures = false, bool withProfile = false}) async {
    // return await _augeApiService.objectiveAugeApi.getObjectives(organizationId, withMeasures: withMeasures);

    return await _augeApiService.objectiveAugeApi.getObjectives(organizationId, withMeasures: withMeasures, withProfile: withProfile);

  }

  /// Return an [Objective] by Id
  Future<Objective> getObjectiveById(String id, {bool withMeasures = false}) async {
    try {
      return await _augeApiService.objectiveAugeApi.getObjectiveById(id, withMeasures: withMeasures);
    } on DetailedApiRequestError catch (e) {
      if (e.status == 404 && e.errors.firstWhere((ed) => ed.reason == RpcErrorDetailMessage.objectiveDataNotFoundReason, orElse: null ) != null)
        return null;
      else {
        rethrow;
      }
    }

    // return await _augeApiService.objectiveAugeApi.getObjectives(organizationId, id: id, withMeasures: withMeasures);
  }


  /// Delete an [Objective]
  Future deleteObjective(String id) async {
    try {
      await _augeApiService.objectiveAugeApi.deleteObjective(id);
    } catch (e) {
      rethrow;
    }
  }

  /// Save (create or update) an [Objective]
  void saveObjective(Objective objective) async {
    try {
      if (objective.id == null) {
        IdMessage idMessage = await _augeApiService.objectiveAugeApi
            .createObjective(objective);

        // ID - primary key generated on server-side.
        objective.id = idMessage?.id;
      } else {
        await _augeApiService.objectiveAugeApi.updateObjective(objective);
      }
    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
  }
}

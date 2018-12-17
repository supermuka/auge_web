import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_web/services/augeapi_service.dart';

import 'package:auge_server/message/created_message.dart';
import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_server/model/history_item.dart';

@Injectable()
class ObjectiveService {

  final AugeApiService _augeApiService;

  DateTime currentDateTime;

  ObjectiveService(this._augeApiService);

  /// Return a list of [Objective]
  Future<List<Objective>> getObjectives(String organizationId, {bool withMeasures = false, bool withProfile = false, bool withHistory = false}) async {
    // return await _augeApiService.objectiveAugeApi.getObjectives(organizationId, withMeasures: withMeasures);

    List<Objective> objectives = await _augeApiService.objectiveAugeApi.getObjectives(organizationId, withMeasures: withMeasures, withProfile: withProfile, withHistory: withHistory);

   // currentDateTime ??= await getDateTime();

    return objectives;

  }

  /// Return an [Objective] by Id
  Future<Objective> getObjectiveById(String id, {bool withMeasures = false, bool withProfile = false, bool withHistory = false}) async {
    try {

      Objective objective = await _augeApiService.objectiveAugeApi.getObjectiveById(id, withMeasures: withMeasures, withProfile: withProfile, withHistory: withHistory);

     // currentDateTime ??= await getDateTime();

      return objective;

    } on DetailedApiRequestError catch (e) {
      if (e.status == 204 && e.errors.firstWhere((ed) => ed.reason == RpcErrorDetailMessage.objectiveDataNotFoundReason, orElse: null ) != null)
        return null;
      else {
        rethrow;
      }
    }

    // return await _augeApiService.objectiveAugeApi.getObjectives(organizationId, id: id, withMeasures: withMeasures);
  }


  /// Delete an [Objective]
  /*
  Future deleteObjective(String id) async {

    try {

      await _augeApiService.objectiveAugeApi.deleteObjective(id);
    //  currentDateTime = await getDateTime();
    } catch (e) {
      rethrow;
    }
  }
  */

  /// Save (create or update) an [Objective]
  void saveObjective(Objective objective) async {
    try {
      if (objective.id == null) {

        IdMessage idMessage = await _augeApiService.objectiveAugeApi
            .createObjective( objective );

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



  Future<DateTime> getDateTime() async {
    return (await _augeApiService.augeApi.getDateTime(isUtc: true))?.dateTime;
  }

  /// Return a list of [TimelineItem]
  Future<List<HistoryItem>> getHistory(String objectiveId) async {

    List<HistoryItem> timeline = await _augeApiService.objectiveAugeApi.getHistory(objectiveId);

    currentDateTime = await getDateTime();

    return timeline;

  }

}

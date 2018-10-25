import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_web/services/augeapi_service.dart';

import 'package:auge_server/message_type/created_message.dart';
import 'package:auge_server/message_type/datetime_message.dart';
import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_server/model/objective/timeline_item.dart';

@Injectable()
class ObjectiveService {

  final AugeApiService _augeApiService;

  ObjectiveService(this._augeApiService);

  /// Return a list of [Objective]
  Future<List<Objective>> getObjectives(String organizationId, {bool withMeasures = false, bool withProfile = false, bool withTimeline = false}) async {
    // return await _augeApiService.objectiveAugeApi.getObjectives(organizationId, withMeasures: withMeasures);

    return await _augeApiService.objectiveAugeApi.getObjectives(organizationId, withMeasures: withMeasures, withProfile: withProfile, withTimeline: withTimeline);

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
        CreatedMessage createdMessage = await _augeApiService.objectiveAugeApi
            .createObjective(objective);

        // ID - primary key generated on server-side.
        objective.id = createdMessage?.id;
      } else {
        await _augeApiService.objectiveAugeApi.updateObjective(objective);
      }


    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
  }

  /// Save (create) an [TimelineItem] of the [Objective]
  void saveTimelineItem(String objectiveId, TimelineItem timelineItem) async {
    try {
      CreatedMessage createdMessage = await _augeApiService.objectiveAugeApi
          .createTimelineItem(timelineItem, objectiveId);

      // ID - primary key generated on server-side.
      timelineItem.id = createdMessage?.id;
      timelineItem.dateTime = createdMessage?.dataTime;


    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
  }

  /// Return DateTime from Application Server
  Future<DateTime> getDateTime(bool isUtc) async {
    try {
      DateTimeMessage dateTimeMessage =  await _augeApiService.augeApi.getDateTime(isUtc: isUtc);
      return dateTimeMessage.dateTime;
    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
  }
}

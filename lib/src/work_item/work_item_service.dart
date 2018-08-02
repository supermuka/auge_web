import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_server/model/initiative/initiative.dart';
import 'package:auge_server/model/initiative/work_item.dart';
import 'package:auge_server/message_type/id_message.dart';

import 'package:auge_web/services/augeapi_service.dart';

@Injectable()
class WorkItemService {

  final AugeApiService _augeApiService;

  WorkItemService(this._augeApiService);

  /// Return a list of [Initiative] by Id
  Future<WorkItem> getWorkItemById(String id) async {
    return await _augeApiService.initiativeAugeApi.getWorkItemById(id);
  }

  /// Delete a [WorkItem]
  Future deleteWorkItem(String id) async {
    await _augeApiService.initiativeAugeApi.deleteWorkItem(id);
  }

  /// Save (create or update) a [WorkItem]
  void saveWorkItem(String initiativeId, WorkItem workItem) async {
    if (workItem.id == null) {
      IdMessage idMessage = await _augeApiService.initiativeAugeApi.createWorkItem(workItem, initiativeId);

      workItem.id = idMessage?.id;
    } else {
      await _augeApiService.initiativeAugeApi.updateWorkItem(workItem, initiativeId);
    }
  }


}
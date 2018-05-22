import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge/shared/model/initiative/initiative.dart';
import 'package:auge/shared/model/initiative/work_item.dart';

import 'package:auge/web/services/augeapi_service.dart';


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
  void saveWorkItem(String initiativeId, WorkItem workItem) {
    if (workItem.id == null) {
      _augeApiService.initiativeAugeApi.createWorkItem(workItem, initiativeId);
    } else {
      _augeApiService.initiativeAugeApi.updateWorkItem(workItem, initiativeId);
    }
  }


}
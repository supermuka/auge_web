import 'package:angular/core.dart';

import 'package:auge_server/model/initiative/work_item.dart';
import 'package:auge_server/message_type/created_message.dart';

import 'package:auge_web/services/augeapi_service.dart';

@Injectable()
class WorkItemService {

  final AugeApiService _augeApiService;

  WorkItemService(this._augeApiService);

  /*
  /// Return a list of [Initiative] by Id
  Future<WorkItem> getWorkItemById(String id) async {
    return await _augeApiService.initiativeAugeApi.getWorkItemById(id);
  }
*/

  /// Delete a [WorkItem]
  void deleteWorkItem(String id) async {
    try {
      await _augeApiService.initiativeAugeApi.deleteWorkItem(id);
    } catch (e) {

      rethrow;
    }
  }

  /// Save (create or update) a [WorkItem]
  void saveWorkItem(String initiativeId, WorkItem workItem) async {
    try {
      if (workItem.id == null) {
        CreatedMessage createdMessage = await _augeApiService.initiativeAugeApi
            .createWorkItem(workItem, initiativeId);

        workItem.id = createdMessage?.id;
      } else {
        await _augeApiService.initiativeAugeApi.updateWorkItem(
            workItem, initiativeId);
      }
    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
  }


}
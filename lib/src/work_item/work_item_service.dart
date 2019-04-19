import 'package:angular/core.dart';

import 'package:auge_server/model/initiative/work_item.dart';

import 'package:auge_web/services/auge_api_service.dart';

import 'package:auge_server/src/protos/generated/general/common.pbgrpc.dart' as common_pbgrpc;
import 'package:auge_server/src/protos/generated/initiative/work_item.pbgrpc.dart' as work_item_pbgrpc;

@Injectable()
class WorkItemService {

  final AugeApiService _augeApiService;
  work_item_pbgrpc.WorkItemServiceClient _workItemServiceClient;

  WorkItemService(this._augeApiService) {
    _workItemServiceClient = work_item_pbgrpc.WorkItemServiceClient(_augeApiService.channel);

  }

  /// Delete a [WorkItem]
  void deleteWorkItem(String initiativeId, WorkItem workItem) async {
    try {
      await _workItemServiceClient.deleteWorkItem(workItem.writeToProtoBuf()..initiativeId = initiativeId);
    } catch (e) {

      rethrow;
    }
  }

  /// Save (create or update) a [WorkItem]
  void saveWorkItem(String initiativeId, WorkItem workItem) async {
    try {
      if (workItem.id == null) {
        common_pbgrpc.IdResponse idResponse = await _workItemServiceClient
            .createWorkItem(workItem.writeToProtoBuf()..initiativeId = initiativeId);

        workItem.id = idResponse.id;
      } else {
        await _workItemServiceClient.updateWorkItem(
            workItem.writeToProtoBuf()..initiativeId = initiativeId);
      }
    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
  }
}
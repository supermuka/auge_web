import 'package:angular/core.dart';

import 'package:auge_web/src/auth/auth_service.dart';

import 'package:auge_server/model/work/work_item.dart';

import 'package:auge_web/services/auge_api_service.dart';

import 'package:auge_server/src/protos/generated/google/protobuf/wrappers.pb.dart' as wrappers_pb;
import 'package:auge_server/src/protos/generated/work/work_work_item.pbgrpc.dart' as work_work_item_pbgrpc;

@Injectable()
class WorkItemService {
  final AuthService _authService;
  final AugeApiService _augeApiService;
  work_work_item_pbgrpc.WorkItemServiceClient _workItemServiceClient;

  WorkItemService(this._authService, this._augeApiService) {
    _workItemServiceClient = work_work_item_pbgrpc.WorkItemServiceClient(_augeApiService.channel);

  }

  AuthService get authService => _authService;

  /// Delete a [WorkItem]
  void deleteWorkItem(WorkItem workItem) async {

    work_work_item_pbgrpc.WorkItemDeleteRequest workItemDeleteRequest = work_work_item_pbgrpc.WorkItemDeleteRequest()
      ..workItemId = workItem.id
      ..workItemVersion = workItem.version
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id;

    try {
      await _workItemServiceClient.deleteWorkItem(workItemDeleteRequest);
    } catch (e) {

      rethrow;
    }
  }

  /// Save (create or update) a [WorkItem]
  Future<String> saveWorkItem(String workId, WorkItem workItem) async {

    work_work_item_pbgrpc.WorkItemRequest workItemRequest = work_work_item_pbgrpc.WorkItemRequest()
      ..workItem = workItem.writeToProtoBuf()
      ..workId = workId
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id;

    try {
      if (workItem.id == null) {
        wrappers_pb.StringValue idResponse = await _workItemServiceClient
            .createWorkItem(workItemRequest);

        workItem.id = idResponse.value;
      } else {
        await _workItemServiceClient.updateWorkItem(workItemRequest);
      }
    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
    return workItem.id;
  }

  /// Return [Workitem] by id
  Future<WorkItem> getWorkItem(String id) async {
    // return _augeApiService.augeApi.getUsers(organizationId, withProfile: withProfile);
    return WorkItem()..readFromProtoBuf((await _workItemServiceClient.getWorkItem(
        work_work_item_pbgrpc.WorkItemGetRequest()..id = id)));
  }

  /// Return [Workitem] by id
  Future<WorkItem> getWorkItemAttachment(String id) async {
    // return _augeApiService.augeApi.getUsers(organizationId, withProfile: withProfile);
    return WorkItem()..readFromProtoBuf((await _workItemServiceClient.getWorkItemAttachment(
        work_work_item_pbgrpc.WorkItemAttachmentGetRequest()..id = id)));
  }

}
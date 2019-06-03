import 'package:angular/core.dart';

import 'package:auge_web/src/auth/auth_service.dart';

import 'package:auge_server/model/initiative/work_item.dart';

import 'package:auge_web/services/auge_api_service.dart';

import 'package:auge_server/src/protos/generated/general/common.pbgrpc.dart' as common_pbgrpc;
import 'package:auge_server/src/protos/generated/initiative/work_item.pbgrpc.dart' as work_item_pbgrpc;

@Injectable()
class WorkItemService {
  final AuthService _authService;
  final AugeApiService _augeApiService;
  work_item_pbgrpc.WorkItemServiceClient _workItemServiceClient;

  WorkItemService(this._authService, this._augeApiService) {
    _workItemServiceClient = work_item_pbgrpc.WorkItemServiceClient(_augeApiService.channel);

  }

  AuthService get authService => _authService;

  /// Delete a [WorkItem]
  void deleteWorkItem(WorkItem workItem) async {

    work_item_pbgrpc.WorkItemDeleteRequest workItemDeleteRequest = work_item_pbgrpc.WorkItemDeleteRequest()
      ..workItemId = workItem.id
      ..workItemVersion = workItem.version
      ..authenticatedOrganizationId = _authService.authorizedOrganization.id
      ..authenticatedUserId = _authService.authenticatedUser.id;

    try {
      await _workItemServiceClient.deleteWorkItem(workItemDeleteRequest);
    } catch (e) {

      rethrow;
    }
  }

  /// Save (create or update) a [WorkItem]
  Future<String> saveWorkItem(String initiativeId, WorkItem workItem) async {

    work_item_pbgrpc.WorkItemRequest workItemRequest = work_item_pbgrpc.WorkItemRequest()
      ..workItem = workItem.writeToProtoBuf()
      ..initiativeId = initiativeId
      ..authenticatedOrganizationId = _authService.authorizedOrganization.id
      ..authenticatedUserId = _authService.authenticatedUser.id;

    try {
      if (workItem.id == null) {
        common_pbgrpc.IdResponse idResponse = await _workItemServiceClient
            .createWorkItem(workItemRequest);

        workItem.id = idResponse.id;
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
        work_item_pbgrpc.WorkItemGetRequest()..id = id)));
  }

}
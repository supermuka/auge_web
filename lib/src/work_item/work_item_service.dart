import 'package:angular/core.dart';

import 'package:auge_web/src/auth/auth_service.dart';

import 'package:auge_shared/domain/work/work.dart';
import 'package:auge_shared/domain/work/work_item.dart';
import 'package:auge_shared/domain/general/unit_of_measurement.dart';

import 'package:auge_web/services/auge_api_service.dart';
import 'package:auge_shared/message/messages.dart';

import 'package:auge_shared/protos/generated/google/protobuf/empty.pb.dart' as empty_pb;
import 'package:auge_shared/protos/generated/google/protobuf/wrappers.pb.dart' as wrappers_pb;
import 'package:auge_shared/protos/generated/work/work_work_item.pbgrpc.dart' as work_work_item_pbgrpc;
import 'package:auge_shared/protos/generated/general/unit_of_measurement.pbgrpc.dart' as unit_of_measurement_pbgrpc;

//import 'package:grpc/grpc_web.dart';

enum RestrictWorkItem {none}

@Injectable()
class WorkItemService {
  final AuthService _authService;
  final AugeApiService _augeApiService;
  work_work_item_pbgrpc.WorkItemServiceClient _workItemServiceClient;
  unit_of_measurement_pbgrpc.UnitOfMeasurementServiceClient _unitOfMeasurementServiceClient;

  WorkItemsFilterOrder workItemsFilterOrder;

  WorkItemService(this._authService, this._augeApiService) {
    _workItemServiceClient = work_work_item_pbgrpc.WorkItemServiceClient(_augeApiService.channel);
    _unitOfMeasurementServiceClient = unit_of_measurement_pbgrpc.UnitOfMeasurementServiceClient(_augeApiService.channel);

    workItemsFilterOrder = WorkItemsFilterOrder();
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
  Future<String> saveWorkItem(WorkItem workItem) async {

    work_work_item_pbgrpc.WorkItemRequest workItemRequest = work_work_item_pbgrpc.WorkItemRequest()
      ..workItem = WorkItemHelper.writeToProtoBuf(workItem)
      //..workItem.work = WorkHelper.writeToProtoBuf(work)
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

  /// Return [WorkItem] by id
  Future<WorkItem> getWorkItem(String id) async {
    // return _augeApiService.augeApi.getUsers(organizationId, withProfile: withProfile);

    return WorkItemHelper.readFromProtoBuf((await _workItemServiceClient.getWorkItems(work_work_item_pbgrpc.WorkItemGetRequest()..id = id)).workItems.first, {});
  }

  /// Return a list of [WorkItem]
  Future<List<WorkItem>> getWorkItems({String workId, Set<String> assignedToIds,  bool withArchived = false}) async {
    // return _augeApiService.augeApi.getUsers(organizationId, withProfile: withProfile);
    work_work_item_pbgrpc.WorkItemGetRequest workItemGetRequest = work_work_item_pbgrpc.WorkItemGetRequest();
    workItemGetRequest.organizationId = _authService.authorizedOrganization.id;
    if (workId != null) workItemGetRequest.workId = workId;
    workItemGetRequest.withArchived = withArchived;
    if (assignedToIds != null) workItemGetRequest.assignedToIds.addAll(assignedToIds);
    // return WorkItem()..readFromProtoBuf((await _workItemServiceClient.getWorkItems(workItemGetRequest)), {});

    Map<String, dynamic> cache = {};
    return (await _workItemServiceClient.getWorkItems(workItemGetRequest)).workItems.map((i) =>
    WorkItemHelper.readFromProtoBuf(i, cache)).toList();
  }

  /// Return [WorkItemAttachment] by id
  Future<WorkItemAttachment> getWorkItemAttachment(String id) async {
    // return _augeApiService.augeApi.getUsers(organizationId, withProfile: withProfile);
    return WorkItemAttachmentHelper.readFromProtoBuf((await _workItemServiceClient.getWorkItemAttachment(
        work_work_item_pbgrpc.WorkItemAttachmentGetRequest()..id = id..withContent = true)));
  }

  /// Return [unitOfMeasurement] list
  Future<List<UnitOfMeasurement>> getUnitsOfMeasurement() async {

    // List<UnitOfMeasurement> measureUnits = await _augeApiService.objectiveAugeApi.getMeasureUnits();
    unit_of_measurement_pbgrpc.UnitsOfMeasurementResponse unitsOfMeasurementResponsePb = await _unitOfMeasurementServiceClient
        .getUnitsOfMeasurement(empty_pb.Empty());

    List<UnitOfMeasurement> unitsOfMeasurement =  unitsOfMeasurementResponsePb.unitsOfMeasurement.map((m) =>
    UnitOfMeasurementHelper.readFromProtoBuf(m)).toList();

    //List<MeasureUnit> measureUnits =  await _augeApiService.objectiveAugeApi.getMeasureUnits();

    // Translate name
    unitsOfMeasurement.forEach((f) => f.name = UnitOfMeasurementMsg.unitNameLabel('${f.name}Label'));
    return unitsOfMeasurement;

    // Translate name
    // measureUnits.forEach((f) => f.name = MeasureMessage.measureUnitLabel(f.name));
  }

  /// Return an [WorkItemValue]
  Future<List<WorkItemValue>> getWorkItemValues({String workItemId, String workItemValueId, int customWorkItemValue}) async {

    work_work_item_pbgrpc.WorkItemValueGetRequest workItemValueGetRequest = work_work_item_pbgrpc.WorkItemValueGetRequest();

    if (workItemValueId != null) {
      workItemValueGetRequest.id = workItemValueId;
    }
    if (workItemId != null) {
      workItemValueGetRequest.workItemId = workItemId;
    }

    if (customWorkItemValue != null) {
      workItemValueGetRequest.customWorkItemValue = work_work_item_pbgrpc.CustomWorkItemValue.valueOf(customWorkItemValue);
    }

    work_work_item_pbgrpc
        .WorkItemValuesResponse workItemValuesResponsePb = await _workItemServiceClient
        .getWorkItemValues(workItemValueGetRequest);

    Map<String, dynamic> cache = {};
    return workItemValuesResponsePb.workItemValues.map((m) =>
    WorkItemValueHelper.readFromProtoBuf(m, cache)).toList();
  }

  /// Return an [WorkItemValue]
  Future<List<WorkItemValue>> getWorkItemValuesWithoutWorkItem(String workItemId) async {

    return getWorkItemValues(workItemId: workItemId, customWorkItemValue: work_work_item_pbgrpc.CustomWorkItemValue.workItemValueWithoutWorkItem.value);
  }

  /// Return an [WorkItemValue] by id [WorkItemValue.id]
  Future<WorkItemValue> getWorkItemValueWithoutWorkItem(String workItemValueId) async {
    return (await getWorkItemValues(workItemValueId: workItemValueId, customWorkItemValue: work_work_item_pbgrpc.CustomWorkItemValue.workItemValueWithoutWorkItem.value)).first;
    /*
    work_work_item_pbgrpc.WorkItemValue workItemValuePb;
    try {
      workItemValuePb = await _workItemServiceClient
          .getWorkItemValue(work_work_item_pbgrpc.WorkItemValueGetRequest()..id = workItemValueId..customWorkItemValue = );

    } on GrpcError {

    }
    return WorkItemValueHelper.readFromProtoBuf(workItemValuePb, {});

     */
  }

  Future<WorkItemValue> getWorkItemValue(String workItemValueId) async {
    return (await getWorkItemValues(workItemValueId: workItemValueId)).first;
    /*
    work_work_item_pbgrpc.WorkItemValue workItemValuePb;
    try {
      workItemValuePb = await _workItemServiceClient
          .getWorkItemValue(work_work_item_pbgrpc.WorkItemValueGetRequest()..id = workItemValueId..customWorkItemValue = );

    } on GrpcError {

    }
    return WorkItemValueHelper.readFromProtoBuf(workItemValuePb, {});

     */
  }

  /// Save (create) a [WorkItemValue]
  Future<String> saveWorkItemValue(/*String workItemId*/ WorkItemValue workItemValue) async {

    work_work_item_pbgrpc.WorkItemValueRequest workItemValueRequest = work_work_item_pbgrpc.WorkItemValueRequest()
      ..workItemValue = WorkItemValueHelper.writeToProtoBuf(workItemValue)
      // By default, the workitem isn't associate to the workItemValue. It made in protobuf, to not change the default object.
      //..workItemValue.workItem = WorkItemHelper.writeToProtoBuf(workItem)
      //..workItemId = workItemId
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id;

    try {

      if (workItemValue.id == null) {
        wrappers_pb.StringValue idResponse = await _workItemServiceClient
            .createWorkItemValue(workItemValueRequest);

        // ID - primary key generated on server-side.
        return idResponse?.value;
      } else {

        await _workItemServiceClient
            .updateWorkItemValue(workItemValueRequest);

        return workItemValueRequest.workItemValue.id;
      }

    } catch (e) {
      rethrow;
    }
  }

  /*
  /// Save (update) a [WorkItemValue]
  void updateWorkItemValue(String workItemId, WorkItemValue workItemValue) async {

    work_work_item_pbgrpc.WorkItemValueRequest workItemValueRequest = work_work_item_pbgrpc.WorkItemValueRequest()
      ..workItemValue = WorkItemValueHelper.writeToProtoBuf(workItemValue)
      ..workItemId = workItemId
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id;

    try {
      await _workItemServiceClient
          .updateWorkItemValue(workItemValueRequest);

    } catch (e) {
      rethrow;
    }
  }
*/

  /// Delete a [WorkItemValue]
  void deleteWorkItemValue(WorkItemValue workItemValue) async {

    work_work_item_pbgrpc.WorkItemValueDeleteRequest workItemValueDeleteRequest = work_work_item_pbgrpc.WorkItemValueDeleteRequest()
      ..workItemValueId = workItemValue.id
      ..workItemValueVersion = workItemValue.version
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id;
    try {
      await _workItemServiceClient.deleteWorkItemValue(workItemValueDeleteRequest);
    } catch (e) {
      rethrow;
    }
  }
}

/// Used to change data between Work Item Component and Filter
class WorkItemsFilterOrder {

  // Filter
  Set<String> assignedToUserIds = {};
  String workId;
  bool archived = false;

  // Filtered Items
  int get filteredItems {
    return assignedToUserIds.length + (workId != null ? 1 : 0) + (archived ? 1 : 0);
  }

  //Ordered by
  String orderedBy;

}

import 'package:angular/core.dart';

import 'package:auge_web/src/auth/auth_service.dart';

import 'package:auge_shared/domain/work/work_item.dart';
import 'package:auge_shared/domain/general/unit_of_measurement.dart';

import 'package:auge_web/services/auge_api_service.dart';
import 'package:auge_shared/message/messages.dart';

import 'package:auge_shared/protos/generated/google/protobuf/empty.pb.dart' as empty_pb;
import 'package:auge_shared/protos/generated/google/protobuf/wrappers.pb.dart' as wrappers_pb;
import 'package:auge_shared/protos/generated/work/work_work_item.pbgrpc.dart' as work_work_item_pbgrpc;
import 'package:auge_shared/protos/generated/general/unit_of_measurement.pbgrpc.dart' as unit_of_measurement_pbgrpc;

import 'package:grpc/grpc_web.dart';

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

  /// Return [WorkItem] by id
  Future<WorkItem> getWorkItem(String id) async {
    // return _augeApiService.augeApi.getUsers(organizationId, withProfile: withProfile);
    return WorkItem()..readFromProtoBuf((await _workItemServiceClient.getWorkItem(
        work_work_item_pbgrpc.WorkItemGetRequest()..id = id)), {});
  }

  /// Return [WorkItemAttachment] by id
  Future<WorkItemAttachment> getWorkItemAttachment(String id) async {
    // return _augeApiService.augeApi.getUsers(organizationId, withProfile: withProfile);
    return WorkItemAttachment()..readFromProtoBuf((await _workItemServiceClient.getWorkItemAttachment(
        work_work_item_pbgrpc.WorkItemAttachmentGetRequest()..id = id..withContent = true)));
  }

  /// Return [unitOfMeasurement] list
  Future<List<UnitOfMeasurement>> getUnitsOfMeasurement() async {

    // List<UnitOfMeasurement> measureUnits = await _augeApiService.objectiveAugeApi.getMeasureUnits();
    unit_of_measurement_pbgrpc.UnitsOfMeasurementResponse unitsOfMeasurementResponsePb = await _unitOfMeasurementServiceClient
        .getUnitsOfMeasurement(empty_pb.Empty());

    List<UnitOfMeasurement> unitsOfMeasurement =  unitsOfMeasurementResponsePb.unitsOfMeasurement.map((m) =>
    UnitOfMeasurement()
      ..readFromProtoBuf(m)).toList();

    //List<MeasureUnit> measureUnits =  await _augeApiService.objectiveAugeApi.getMeasureUnits();

    // Translate name
    unitsOfMeasurement.forEach((f) => f.name = UnitOfMeasurementMsg.unitNameLabel('${f.name}Label'));
    return unitsOfMeasurement;

    // Translate name
    // measureUnits.forEach((f) => f.name = MeasureMessage.measureUnitLabel(f.name));
  }

  /// Return an [WorkItemValue]
  Future<List<WorkItemValue>> getWorkItemValues(String workItemId, {bool withWorkItem = false}) async {

    work_work_item_pbgrpc
        .WorkItemValuesResponse workItemValuesResponsePb = await _workItemServiceClient
        .getWorkItemValues(work_work_item_pbgrpc.WorkItemValueGetRequest()
      ..workItemId = workItemId..withWorkItem = withWorkItem);
    Map<String, dynamic> cache = {};
    return workItemValuesResponsePb.workItemValues.map((m) =>
    WorkItemValue()
      ..readFromProtoBuf(m, cache)).toList();
  }

  /// Return an [WorkItemValue] by id [WorkItemValue.id]
  Future<WorkItemValue> getWorkItemValue(String workItemValueId) async {
    work_work_item_pbgrpc.WorkItemValue workItemValuePb;
    try {
      workItemValuePb = await _workItemServiceClient
          .getWorkItemValue(work_work_item_pbgrpc.WorkItemValueGetRequest()..id = workItemValueId);

    } on GrpcError {
      /*--
      } on DetailedApiRequestError catch (e) {
        if (e.status == 204 && e.errors.firstWhere((ed) => ed.reason == RpcErrorDetailMessage.unitOfMeasurementsDataNotFoundReason, orElse: null ) != null)
          return null;
        else {
          rethrow;
        }

         */
    }
    return WorkItemValue()..readFromProtoBuf(workItemValuePb, {});
  }

  /// Save (create) a [WorkItemValue]
  Future<String> saveWorkItemValue(String workItemId, WorkItemValue workItemValue) async {

    work_work_item_pbgrpc.WorkItemValueRequest workItemValueRequest = work_work_item_pbgrpc.WorkItemValueRequest()
      ..workItemValue = workItemValue.writeToProtoBuf()
      ..workItemId = workItemId
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

  /// Save (update) a [WorkItemValue]
  void updateWorkItemValue(String workItemId, WorkItemValue workItemValue) async {

    work_work_item_pbgrpc.WorkItemValueRequest workItemValueRequest = work_work_item_pbgrpc.WorkItemValueRequest()
      ..workItemValue = workItemValue.writeToProtoBuf()
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
  bool archived = false;

  // Filtered Items
  int filteredItems;

  //Ordered by
  String orderedBy;

}

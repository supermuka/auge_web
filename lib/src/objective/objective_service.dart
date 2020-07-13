import 'dart:async';

import 'package:angular/core.dart';
import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_shared/domain/objective/objective.dart';

import 'package:auge_web/services/auge_api_service.dart';

import 'package:auge_shared/protos/generated/google/protobuf/wrappers.pb.dart' as wrappers_pb;
import 'package:auge_shared/protos/generated/objective/objective_measure.pbgrpc.dart' as objective_measure_pbgrpc;
// import 'package:auge_shared/protos/generated/objective/objective_measure.pbenum.dart' as objective_measure_pbenum;

import 'package:grpc/grpc_web.dart';

enum RestrictOrganization {none, idName}

@Injectable()
class ObjectiveService {
  final AuthService _authService;
  final AugeApiService _augeApiService;
  objective_measure_pbgrpc.ObjectiveServiceClient _objectiveServiceClient;

  DateTime currentDateTime;

  ObjectivesFilterOrder objectivesFilterOrder;

  ObjectiveService(this._authService, this._augeApiService) {
    _objectiveServiceClient = objective_measure_pbgrpc.ObjectiveServiceClient(_augeApiService.channel);
    objectivesFilterOrder = ObjectivesFilterOrder();
  }

  get authService => _authService;


  /// Return a list of [Objective]
  Future<List<Objective>> getObjectives(String organizationId, {String objectiveId, int customObjectiveIndex, bool withArchived = false, List<String> groupIds, List<String> leaderUserIds}) async {

    objective_measure_pbgrpc.ObjectiveGetRequest objectiveGetRequest = objective_measure_pbgrpc.ObjectiveGetRequest();
    objectiveGetRequest.organizationId = organizationId;
    if (objectiveId != null)  objectiveGetRequest.id = objectiveId;

    if (customObjectiveIndex != null) {
      objectiveGetRequest.customObjective = objective_measure_pbgrpc.CustomObjective.valueOf(customObjectiveIndex);
    }

    if (withArchived != null) objectiveGetRequest.withArchived = withArchived;
    if (groupIds != null && groupIds.isNotEmpty) objectiveGetRequest.groupIds.addAll(groupIds);
    if (leaderUserIds != null && leaderUserIds.isNotEmpty) objectiveGetRequest.leaderUserIds.addAll(leaderUserIds);

    objective_measure_pbgrpc.ObjectivesResponse or = await _objectiveServiceClient.getObjectives(
        objectiveGetRequest);

    Map<String, dynamic> cache = {};
    List<Objective> o = or.objectives.map((m) =>

    ObjectiveHelper.readFromProtoBuf(m, cache)).toList();

    return o;
  }

  Future<List<Objective>> getObjectivesTree(String organizationId, {String objectiveId, bool withArchived = false, List<String> groupIds, List<String> leaderUserIds}) async {
    return getObjectives(organizationId,
        objectiveId: objectiveId,
        customObjectiveIndex: objective_measure_pbgrpc.CustomObjective.objectiveTreeAlignedTo.value,
        withArchived: withArchived,
        groupIds: groupIds,
        leaderUserIds: leaderUserIds);
  }

  Future<List<Objective>> getObjectivesOnlyWithMeasure(String organizationId, {String objectiveId, bool withArchived = false, List<String> groupIds, List<String> leaderUserIds}) async {
    return getObjectives(organizationId,
        objectiveId: objectiveId,
        customObjectiveIndex: objective_measure_pbgrpc.CustomObjective.objectiveOnlyWithMeasure.value,
        withArchived: withArchived,
        groupIds: groupIds,
        leaderUserIds: leaderUserIds);
  }


  Future<List<Objective>> getObjectivesOnlySpecification(String organizationId, {String objectiveId, bool withArchived = false, List<String> groupIds, List<String> leaderUserIds}) async {
    return getObjectives(organizationId,
        objectiveId: objectiveId,
        customObjectiveIndex: objective_measure_pbgrpc.CustomObjective.objectiveOnlySpecification.value,
        withArchived: withArchived,
        groupIds: groupIds,
        leaderUserIds: leaderUserIds);
  }

  /// Return an [Objective] by Id
  Future<Objective> getObjective(String id) async {
    try {

      // Objective objective = await _augeApiService.objectiveAugeApi.getObjectiveById(id, withMeasures: withMeasures, withProfile: withProfile, withHistory: withHistory);

      objective_measure_pbgrpc.ObjectiveGetRequest objectiveGetRequest = objective_measure_pbgrpc.ObjectiveGetRequest();
      objectiveGetRequest.id = id;
      
      objective_measure_pbgrpc.Objective objective = (await _objectiveServiceClient.getObjectives(objectiveGetRequest)).objectives.first;

      return ObjectiveHelper.readFromProtoBuf(objective, {});

     // currentDateTime ??= await getDateTime();

      // return objective;

    } on GrpcError catch (e) {
      /*TODO melhorar tratamento, se necessário
      if (e.status == 204 && e.errors.firstWhere((ed) => ed.reason == RpcErrorDetailMessage.objectiveDataNotFoundReason, orElse: null ) != null)
        return null;
      else {
        rethrow;
      }

       */
      print(e);
      rethrow;
    }
  }

  /// Save (create or update) an [Objective]
  Future<String> saveObjective(Objective objective) async {

    objective_measure_pbgrpc.ObjectiveRequest objectiveRequest = (objective_measure_pbgrpc.ObjectiveRequest()
      ..objective = ObjectiveHelper.writeToProtoBuf(objective)
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id);

    try {
      if (objective.id == null) {

        wrappers_pb.StringValue idResponse= await _objectiveServiceClient
            .createObjective(objectiveRequest);

        // ID - primary key generated on server-side.
        objective.id = idResponse?.value;

      } else {
        await _objectiveServiceClient.updateObjective(objectiveRequest);
      }

    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
    return objective.id;
  }


  /// Delete an [Objective]
  void deleteObjective(Objective objective) async {
    try {
      await _objectiveServiceClient.deleteObjective(objective_measure_pbgrpc.ObjectiveDeleteRequest()
        ..objectiveId = objective.id
        ..objectiveVersion = objective.version
        ..authUserId = _authService.authenticatedUser.id
        ..authOrganizationId = _authService.authorizedOrganization.id);
    } catch (e) {
      rethrow;
    }
  }
}

/// Used to change data between Objectives Component and Filter
class ObjectivesFilterOrder {

  // Filter
  Set<String> groupIds = {};
  Set<String> leaderUserIds = {};
  bool archived = false;

  // Filtered Items
  int filteredItems;

  //Ordered by
  String orderedBy;

}

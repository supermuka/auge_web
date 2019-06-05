import 'dart:async';

import 'package:angular/core.dart';
import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_server/model/objective/objective.dart';

import 'package:auge_web/services/auge_api_service.dart';

import 'package:auge_server/src/protos/generated/general/common.pbgrpc.dart' as common_pbgrpc;
import 'package:auge_server/src/protos/generated/objective/objective.pbgrpc.dart' as objective_pbgrpc;

import 'package:grpc/grpc_web.dart';

@Injectable()
class ObjectiveService {
  final AuthService _authService;
  final AugeApiService _augeApiService;
  objective_pbgrpc.ObjectiveServiceClient _objectiveServiceClient;

  DateTime currentDateTime;

  ObjectiveService(this._authService, this._augeApiService) {
    _objectiveServiceClient = objective_pbgrpc.ObjectiveServiceClient(_augeApiService.channel);
  }

  get authService => _authService;


  /// Return a list of [Objective]
  Future<List<Objective>> getObjectives(String organizationId, {bool withMeasures = false, bool withProfile = false}) async {
    return (await _objectiveServiceClient.getObjectives(
        objective_pbgrpc.ObjectiveGetRequest()
          ..organizationId = organizationId
          ..withMeasures = withMeasures
          ..withProfile = withProfile)).objectives.map((m) =>
    Objective()
      ..readFromProtoBuf(m)).toList();

  }

  /// Return an [Objective] by Id
  Future<Objective> getObjective(String id, {bool withMeasures = false, bool withProfile = false}) async {
    try {

      // Objective objective = await _augeApiService.objectiveAugeApi.getObjectiveById(id, withMeasures: withMeasures, withProfile: withProfile, withHistory: withHistory);

      objective_pbgrpc.Objective objective = await _objectiveServiceClient.getObjective(
          objective_pbgrpc.ObjectiveGetRequest()
            ..id = id
            ..withMeasures = withMeasures
            ..withProfile = withProfile);

      return Objective()..readFromProtoBuf(objective);

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

    objective_pbgrpc.ObjectiveRequest objectiveRequest = (objective_pbgrpc.ObjectiveRequest()
      ..objective = objective.writeToProtoBuf()
      ..authenticatedOrganizationId = _authService.authorizedOrganization.id
      ..authenticatedUserId = _authService.authenticatedUser.id);

    try {
      if (objective.id == null) {

        common_pbgrpc.IdResponse idResponse= await _objectiveServiceClient
            .createObjective(objectiveRequest);

        // ID - primary key generated on server-side.
        objective.id = idResponse?.id;

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
      await _objectiveServiceClient.deleteObjective(objective_pbgrpc.ObjectiveDeleteRequest()
        ..objectiveId = objective.id
        ..objectiveVersion = objective.version
        ..authenticatedUserId = _authService.authenticatedUser.id
        ..authenticatedOrganizationId = _authService.authorizedOrganization.id);
    } catch (e) {
      rethrow;
    }
  }
}
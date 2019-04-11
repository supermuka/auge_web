import 'dart:async';

import 'package:angular/core.dart';
import 'package:auge_server/model/general/history_item.dart' as prefix0;

import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_server/model/general/history_item.dart';
import 'package:auge_server/model/general/authorization.dart';

import 'package:auge_web/services/auge_api_service.dart';

import 'package:auge_server/src/protos/generated/google/protobuf/empty.pb.dart' as empty_pb;
import 'package:auge_server/src/protos/generated/general/common.pbgrpc.dart' as common_pbgrpc;
import 'package:auge_server/src/protos/generated/general/history_item.pbgrpc.dart' as history_item_pbgrpc;
import 'package:auge_server/src/protos/generated/objective/objective.pbgrpc.dart' as objective_pbgrpc;

import 'package:grpc/grpc_web.dart';

@Injectable()
class ObjectiveService {

  final AugeApiService _augeApiService;
  objective_pbgrpc.ObjectiveServiceClient _objectiveServiceClient;
  common_pbgrpc.CommonServiceClient _commonServiceClient;
  history_item_pbgrpc.HistoryItemServiceClient _historyItemServiceClient;

  DateTime currentDateTime;

  ObjectiveService(this._augeApiService) {
    _objectiveServiceClient = objective_pbgrpc.ObjectiveServiceClient(_augeApiService.channel);
    _commonServiceClient = common_pbgrpc.CommonServiceClient(_augeApiService.channel);
    _historyItemServiceClient = history_item_pbgrpc.HistoryItemServiceClient(_augeApiService.channel);
  }



  /// Return a list of [Objective]
  Future<List<Objective>> getObjectives(String organizationId, {bool withMeasures = false, bool withProfile = false, bool withHistory = false}) async {

    //List<Objective> objectives = await _augeApiService.objectiveAugeApi.getObjectives(organizationId, withMeasures: withMeasures, withProfile: withProfile, withHistory: withHistory);
    return (await _objectiveServiceClient.getObjectives(
        objective_pbgrpc.ObjectiveGetRequest()
          ..organizationId = organizationId
          ..withMeasures = withMeasures
          ..withProfile = withProfile
          ..withHistory = withHistory)).objectives.map((m) =>
    Objective()
      ..readFromProtoBuf(m)).toList();

  }

  /// Return an [Objective] by Id
  Future<Objective> getObjectiveById(String id, {bool withMeasures = false, bool withProfile = false, bool withHistory = false}) async {
    try {

      // Objective objective = await _augeApiService.objectiveAugeApi.getObjectiveById(id, withMeasures: withMeasures, withProfile: withProfile, withHistory: withHistory);

      objective_pbgrpc.Objective objective = await _objectiveServiceClient.getObjective(
          objective_pbgrpc.ObjectiveGetRequest()
            ..id = id);

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
  void saveObjective(Objective objective) async {
    try {
      if (objective.id == null) {

        common_pbgrpc.IdResponse idResponse= await _objectiveServiceClient
            .createObjective((objective.writeToProtoBuf()));

        // ID - primary key generated on server-side.
        objective.id = idResponse?.id;

      } else {
        await _objectiveServiceClient.updateObjective(objective.writeToProtoBuf());
      }

    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
  }

  Future<DateTime> getDateTime() async {
    common_pbgrpc.DateTimeResponse dateTimeResponse = await _commonServiceClient.getDateTime(common_pbgrpc.DateTimeGetRequest()..isUtc = true);

    // Convert Protobuf timestamp to Dart DateTime
    return DateTime.fromMicrosecondsSinceEpoch(
        dateTimeResponse.dateTime.seconds.toInt() * 1000000 +
            dateTimeResponse.dateTime.nanos ~/ 1000);

  }

  /// Return a list of [TimelineItem]
  Future<List<HistoryItem>> getHistory(String objectiveId) async {
    currentDateTime = await getDateTime();

    history_item_pbgrpc.HistoryResponse historyResponse = await _historyItemServiceClient.getHistory(history_item_pbgrpc.HistoryItemGetRequest()..systemModuleIndex = SystemModule.objectives.index );


    return ( await _historyItemServiceClient.getHistory(history_item_pbgrpc.HistoryItemGetRequest()..systemModuleIndex = SystemModule.objectives.index )).history.map((m) =>
    HistoryItem()
      ..readFromProtoBuf(m)).toList();

  }
}
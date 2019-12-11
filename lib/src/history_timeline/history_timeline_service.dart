import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_server/domain/general/history_item.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/services/auge_api_service.dart';

import 'package:auge_server/src/protos/generated/general/common.pbgrpc.dart' as common_pbgrpc;
import 'package:auge_server/src/protos/generated/general/history_item.pbgrpc.dart' as history_item_pbgrpc;

@Injectable()
class HistoryTimelineService {

  final AuthService _authService;
  final AugeApiService _augeApiService;

  common_pbgrpc.CommonServiceClient _commonServiceClient;
  history_item_pbgrpc.HistoryItemServiceClient _historyItemServiceClient;

  // Shared history on components related
  List<HistoryItem> history;

  DateTime currentDateTime;

  HistoryTimelineService(this._authService, this._augeApiService) {
    _commonServiceClient = common_pbgrpc.CommonServiceClient(_augeApiService.channel);
    _historyItemServiceClient = history_item_pbgrpc.HistoryItemServiceClient(_augeApiService.channel);
  }

  // get authService => _authService;

  void refreshHistory(int systemModuleIndex) async {
    history = await _getHistory(systemModuleIndex);
  }

  /// Return a list of [TimelineItem]
  Future<List<HistoryItem>> _getHistory(int systemModuleIndex) async {
    
    //history_item_pbgrpc.HistoryResponse historyResponse = await _historyItemServiceClient.getHistory(history_item_pbgrpc.HistoryItemGetRequest()..systemModuleIndex = SystemModule.objectives.index );
    currentDateTime = await getDateTime();

    Map<String, dynamic> cache = {};
    return ( await _historyItemServiceClient.getHistory(history_item_pbgrpc.HistoryItemGetRequest()..organizationId = _authService.authorizedOrganization.id ..systemModuleIndex = systemModuleIndex)).history.map((m) =>
    HistoryItem()
      ..readFromProtoBuf(m, cache)).toList();

  }

  Future<DateTime> getDateTime() async {
    common_pbgrpc.DateTimeResponse dateTimeResponse = await _commonServiceClient.getDateTime(common_pbgrpc.DateTimeGetRequest()..isUtc = true);

    // Convert Protobuf timestamp to Dart DateTime
    return /* CommonUtils.dateTimeFromTimestamp(dateTimeResponse.dateTime) */ dateTimeResponse.dateTime.toDateTime();

    /*
    DateTime.fromMicrosecondsSinceEpoch(
        dateTimeResponse.dateTime.seconds.toInt() * 1000000 +
            dateTimeResponse.dateTime.nanos ~/ 1000);
*/
  }
}


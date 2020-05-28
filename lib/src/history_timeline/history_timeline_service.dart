import 'dart:async';

import 'package:angular/core.dart';
import 'package:angular_components/model/date/date.dart';

import 'package:auge_shared/domain/general/history_item.dart';
import 'package:auge_shared/src/util/common_utils.dart';

import 'package:auge_web/services/auge_api_service.dart';
import 'package:auge_web/src/auth/auth_service.dart';


import 'package:auge_shared/protos/generated/general/common.pbgrpc.dart' as common_pbgrpc;
import 'package:auge_shared/protos/generated/general/history_item.pbgrpc.dart' as history_item_pbgrpc;

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

  /// Return a list of [TimelineItem]
  Future<List<HistoryItem>> getHistory({int systemModuleIndex, DateTime fromDateTime, int rowsLimit}) async {
    
    //history_item_pbgrpc.HistoryResponse historyResponse = await _historyItemServiceClient.getHistory(history_item_pbgrpc.HistoryItemGetRequest()..systemModuleIndex = SystemModule.objectives.index );
    currentDateTime = await getDateTime();

    Map<String, dynamic> cache = {};

    history_item_pbgrpc.HistoryItemGetRequest historyItemGetRequest = history_item_pbgrpc.HistoryItemGetRequest();
    historyItemGetRequest.organizationId = _authService.authorizedOrganization.id;
    if (systemModuleIndex != null) {
      historyItemGetRequest.systemModuleIndex = systemModuleIndex;
    }
    if (fromDateTime != null) {
      historyItemGetRequest.fromDateTime = CommonUtils.timestampFromDateTime(fromDateTime);
    }
    if (rowsLimit != null) {
      historyItemGetRequest.rowsLimit = rowsLimit;
    }

    return ( await _historyItemServiceClient.getHistory(historyItemGetRequest)).history.map((m) =>
    HistoryItem()
      ..readFromProtoBuf(m, cache)).toList();

  }

  Future<DateTime> getDateTime() async {
    common_pbgrpc.DateTimeResponse dateTimeResponse = await _commonServiceClient.getDateTime(common_pbgrpc.DateTimeGetRequest()..isUtc = true);

    // Convert Protobuf timestamp to Dart DateTime
    return /* CommonUtils.dateTimeFromTimestamp(dateTimeResponse.dateTime) */ dateTimeResponse.dateTime.toDateTime();

  }

}


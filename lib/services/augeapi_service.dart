// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel

import 'dart:html';
import 'dart:async';

import 'package:angular/core.dart';

import 'package:http/browser_client.dart';
import 'package:http/src/streamed_response.dart';
import 'package:http/src/base_request.dart';

import 'package:auge_server/client/augeapi.dart';
import 'package:auge_server/client/objectiveaugeapi.dart';
import 'package:auge_server/client/initiativeaugeapi.dart';

export 'package:_discoveryapis_commons/_discoveryapis_commons.dart'
    show ApiRequestError, DetailedApiRequestError;
export 'package:auge_server/shared/rpc_error_message.dart' show RpcErrorMessage, RpcErrorDetailMessage;


/// Provide services for Server APIs access
@Injectable()
class AugeApiService {

  final BrowserClientAuth _client;

  final String _protocol = window.location.protocol;
  //final String _protocol = 'https:';

  //final String _serverUrl = '127.0.0.1:8091/'; // Local;

  // final String _serverUrl = 'localhost:8091/'; // Local;

  // final String _serverUrl = '35.227.38.148:8091/'; // GCloud


 // final String _serverUrl = 'auge.levius.com.br:8091/';

  final String _serverUrl = window.location.hostname + ':8091/'; // Api Port

  AugeApi _augeApi;
  InitiativeAugeApi _initiativeAugeApi;
  ObjectiveAugeApi _objectiveAugeApi;

  AugeApiService(this._client) {
    // _client.withCredentials = true;
  }

  AugeApi get augeApi {

    if (_augeApi == null) {
      _augeApi = new AugeApi(_client, rootUrl: '$_protocol//$_serverUrl');
    }
    return _augeApi;

  }

  InitiativeAugeApi get initiativeAugeApi {

    if (_initiativeAugeApi == null) {
      _initiativeAugeApi = new InitiativeAugeApi(_client, rootUrl: '$_protocol//$_serverUrl');
    }
    return _initiativeAugeApi;

  }

  ObjectiveAugeApi get objectiveAugeApi {

    if (_objectiveAugeApi == null) {
      _objectiveAugeApi = new ObjectiveAugeApi(_client, rootUrl: '$_protocol//$_serverUrl');
    }
    return _objectiveAugeApi;
  }

}

/// Extends to remove message on client about user-agent and content-length and treat authorization
class BrowserClientAuth extends BrowserClient {

  BrowserClientAuth();

  Future<StreamedResponse> send(BaseRequest request) async {

    //request.headers['authorization'] = 'Bearer ${this.key}';
    //request.headers['Cookie'] = null;

    // request.headers.putIfAbsent('authorization',() => AugeConf.basicAuth);

    request.headers.remove('user-agent');
    request.headers.remove('content-length');

    return super.send(request);

  }
}
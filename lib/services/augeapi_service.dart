// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel

import 'dart:html';
import 'dart:async';

import 'package:angular/core.dart';

import 'package:http/browser_client.dart';
import 'package:http/src/streamed_response.dart';
import 'package:http/src/base_request.dart';

import 'package:auge_server/augeconf.dart';
import 'package:auge_server/client/augeapi.dart';
import 'package:auge_server/client/objectiveaugeapi.dart';
import 'package:auge_server/client/initiativeaugeapi.dart';


/// Provide services for Server APIs access
@Injectable()
class AugeApiService {

  final BrowserClientAuth _client;

  final String _protocol = window.location.protocol;
  //final String _serverUrl = '35.196.72.249:8091/'; // GCloud

  //final String _serverUrl = '10.142.0.2:8091/'; // GCloud IP Local;
  //final String _serverUrl = '127.0.0.1:8091/'; // Local;
  final String _serverUrl = 'localhost:8091/'; // Local;
  //final String _serverUrl = '35.231.201.73:8091/'; // GCloud

  AugeApi _augeApi;
  InitiativeAugeApi _initiativeAugeApi;
  ObjectiveAugeApi _objectiveAugeApi;

  AugeApiService(this._client);

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

    request.headers.putIfAbsent('authorization',() => AugeConf.basicAuth);

    request.headers.remove('user-agent');
    request.headers.remove('content-length');

    return super.send(request);

  }
}
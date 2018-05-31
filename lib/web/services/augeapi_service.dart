// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel

import 'dart:html';

import 'package:angular/core.dart';

import 'package:http/browser_client.dart';
import 'package:auge/client/augeapi.dart';
import 'package:auge/client/initiativeaugeapi.dart';
import 'package:auge/client/objectiveaugeapi.dart';

/// Provide services for Server APIs access
@Injectable()
class AugeApiService {

  final BrowserClient _client;

  final String _protocol = window.location.protocol;
  //final String _serverUrl = '35.196.72.249:8091/'; // GCloud
 // final String _serverUrl = '35.231.201.73:8091/'; // GCloud
  //final String _serverUrl = '10.142.0.2:8091/'; // GCloud IP Local;
  //final String _serverUrl = '127.0.0.1:8091/'; // Local;
  final String _serverUrl = 'localhost:8091/'; // Local;

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
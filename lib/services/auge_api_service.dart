// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel

import 'dart:html';
import 'dart:async';

import 'package:angular/core.dart';

import 'package:grpc/grpc_web.dart';

//--import 'package:http/browser_client.dart';
//--import 'package:http/src/streamed_response.dart';
//--import 'package:http/src/base_request.dart';

//--import 'package:auge_server/client/augeapi.dart';
//--import 'package:auge_server/client/objectiveaugeapi.dart';
//--import 'package:auge_server/client/initiativeaugeapi.dart';

//--export 'package:_discoveryapis_commons/_discoveryapis_commons.dart'
//--    show ApiRequestError, DetailedApiRequestError;

export 'package:auge_server/shared/rpc_error_message.dart' show RpcErrorMessage, RpcErrorDetailMessage;

/// Provide services for Server APIs access
@Injectable()
class AugeApiService {

  //final BrowserClientAuth _client;


  //final String _protocol = 'https:';

  //final String _serverUrl = '127.0.0.1:8091/'; // Local;

  // final String _serverUrl = 'localhost:8091/'; // Local;

  // final String _serverUrl = '35.227.38.148:8091/'; // GCloud


 // final String _serverUrl = 'auge.levius.com.br:8091/';



  final String _uriChannel = 'http://localhost:8080';

  GrpcWebClientChannel _channel;

  AugeApiService(this._channel) {
    // _client.withCredentials = true;
    _channel = GrpcWebClientChannel.xhr(Uri.parse(_uriChannel));
  }

  GrpcWebClientChannel get channel {

    return _channel;
  }
}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel

import 'package:angular/core.dart';

import 'package:grpc/grpc_web.dart';

export 'package:auge_server/shared/rpc_error_message.dart' show RpcErrorMessage, RpcErrorDetailMessage;

/// Provide services for Server APIs access
@Injectable()
class AugeApiService {

  final String _uriChannel = 'http://localhost:8080';

  GrpcWebClientChannel _channel;

  AugeApiService(this._channel) {
    _channel = GrpcWebClientChannel.xhr(Uri.parse(_uriChannel));
  }

  GrpcWebClientChannel get channel {

    return _channel;
  }
}
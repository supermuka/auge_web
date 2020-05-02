// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'auge_api_service.dart';
export 'auge_api_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/core.template.dart' as _ref0;
import 'package:grpc/src/client/web_channel.dart' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(AugeApiService, (_i1.GrpcWebClientChannel p0) => AugeApiService(p0));
  _ngRef.registerDependencies(AugeApiService, const [
    [_i1.GrpcWebClientChannel]
  ]);
  _ref0.initReflector();
}

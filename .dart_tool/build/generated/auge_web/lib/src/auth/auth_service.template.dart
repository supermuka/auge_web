// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'auth_service.dart';
export 'auth_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/core.template.dart' as _ref0;
import 'package:auge_web/services/auge_api_service.template.dart' as _ref1;
import 'package:auge_web/services/auge_api_service.dart' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(AuthService, (_i1.AugeApiService p0) => AuthService(p0));
  _ngRef.registerDependencies(AuthService, const [
    [_i1.AugeApiService]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
}

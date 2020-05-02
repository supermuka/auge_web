// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'group_service.dart';
export 'group_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/core.template.dart' as _ref0;
import 'package:auge_web/services/auge_api_service.template.dart' as _ref1;
import 'package:auge_web/src/auth/auth_service.template.dart' as _ref2;
import 'package:auge_web/src/auth/auth_service.dart' as _i1;
import 'package:auge_web/services/auge_api_service.dart' as _i2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(GroupService, (_i1.AuthService p0, _i2.AugeApiService p1) => GroupService(p0, p1));
  _ngRef.registerDependencies(GroupService, const [
    [_i1.AuthService],
    [_i2.AugeApiService]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}

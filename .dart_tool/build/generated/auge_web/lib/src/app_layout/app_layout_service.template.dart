// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'app_layout_service.dart';
export 'app_layout_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/core.template.dart' as _ref0;
import 'package:auge_web/services/common_service.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(AppLayoutService, () => AppLayoutService());
  _ref0.initReflector();
  _ref1.initReflector();
}

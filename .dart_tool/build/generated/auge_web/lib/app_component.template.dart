// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_router/angular_router.template.dart' as _ref1;
import 'package:auge_web/route/app_routes.template.dart' as _ref2;
import 'package:auge_web/services/auge_api_service.template.dart' as _ref3;
import 'package:auge_web/src/app_layout/app_layout_component.template.dart' as _ref4;
import 'package:auge_web/src/auth/auth_component.template.dart' as _ref5;
import 'package:auge_web/src/auth/auth_service.template.dart' as _ref6;
import 'package:auge_web/app_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'app_component.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular_router/src/directives/router_outlet_directive.dart' as import4;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/views/view.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/src/di/errors.dart' as import11;
import 'package:angular_router/src/router/router_outlet_token.dart' as import12;
import 'package:angular_router/src/router/router.dart' as import13;
import 'package:angular_router/src/router_hook.dart' as import14;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import16;
import 'src/auth/auth_service.dart' as import17;
import 'package:angular/src/di/injector/injector.dart' as import18;
import 'services/auge_api_service.dart' as import19;
import 'package:grpc/src/client/web_channel.dart' as import20;

final List<dynamic> styles$AppComponent = [import0.styles];

// View for component AppComponent in asset:auge_web/lib/app_component.dart (changeDetection: Default)
class ViewAppComponent0 extends import1.ComponentView<import2.AppComponent> {
  ViewContainer _appEl_0;
  import4.RouterOutlet _RouterOutlet_0_8;
  static import5.ComponentStyles _componentStyles;
  ViewAppComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('auge-app-component');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:auge_web/lib/app_component.dart' : null);
  }

  @override
  void build() {
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import8.document;
    final _el_0 = import10.appendElement(doc, parentRenderNode, 'router-outlet');
    this.addShimE(_el_0);
    this._appEl_0 = ViewContainer(0, null, this, _el_0);
    this._RouterOutlet_0_8 = (import9.isDevMode
        ? import11.debugInjectorWrap(import4.RouterOutlet, () {
            return import4.RouterOutlet(this.parentView.injectorGetOptional(import12.RouterOutletToken, this.parentIndex), this._appEl_0, this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGetOptional(import14.RouterHook, this.parentIndex));
          })
        : import4.RouterOutlet(this.parentView.injectorGetOptional(import12.RouterOutletToken, this.parentIndex), this._appEl_0, this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGetOptional(import14.RouterHook, this.parentIndex)));
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      if (!identical(_ctx.routes, null)) {
        (this._RouterOutlet_0_8.routes = _ctx.routes);
      }
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._RouterOutlet_0_8.ngOnInit();
    }
    this._appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._RouterOutlet_0_8.ngOnDestroy();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$AppComponent, _debugComponentUrl))));
    }
    this.componentStyles = styles;
  }
}

const ComponentFactory<import2.AppComponent> _AppComponentNgFactory = const ComponentFactory('auge-app-component', viewFactory_AppComponentHost0);
ComponentFactory<import2.AppComponent> get AppComponentNgFactory {
  return _AppComponentNgFactory;
}

final List<dynamic> styles$AppComponentHost = const [];

// Host for component AppComponent in asset:auge_web/lib/app_component.dart (changeDetection: Default)
class _ViewAppComponentHost0 extends import16.HostView<import2.AppComponent> {
  dynamic __AugeApiService_0_6;
  import17.AuthService __AuthService_0_7;
  _ViewAppComponentHost0(import18.Injector injector) : super(injector);
  dynamic get _AugeApiService_0_6 {
    if ((this.__AugeApiService_0_6 == null)) {
      (this.__AugeApiService_0_6 = (import9.isDevMode
          ? import11.debugInjectorWrap(import19.AugeApiService, () {
              return import19.AugeApiService(this.injectorGet(import20.GrpcWebClientChannel, this.parentIndex));
            })
          : import19.AugeApiService(this.injectorGet(import20.GrpcWebClientChannel, this.parentIndex))));
    }
    return this.__AugeApiService_0_6;
  }

  import17.AuthService get _AuthService_0_7 {
    if ((this.__AuthService_0_7 == null)) {
      (this.__AuthService_0_7 = import17.AuthService(this._AugeApiService_0_6));
    }
    return this.__AuthService_0_7;
  }

  @override
  void build() {
    // Child component AppComponent in asset:auge_web/lib/app_component.dart (changeDetection: Default)
    this.componentView = ViewAppComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.AppComponent();
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import19.AugeApiService)) {
        return this._AugeApiService_0_6;
      }
      if (identical(token, import17.AuthService)) {
        return this._AuthService_0_7;
      }
    }
    return notFoundResult;
  }
}

import16.HostView<import2.AppComponent> viewFactory_AppComponentHost0(import18.Injector injector) {
  return _ViewAppComponentHost0(injector);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}

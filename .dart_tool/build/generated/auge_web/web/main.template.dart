// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'main.dart';
export 'main.dart';
import 'main.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/angular_components.template.dart' as _ref2;
import 'package:angular_router/angular_router.template.dart' as _ref3;
import 'package:auge_web/app_component.template.dart' as _ref4;
import 'package:angular/src/di/injector/injector.dart' as _i1;
import 'package:angular/src/di/injector/hierarchical.dart' as _i2;
import 'package:grpc/src/client/web_channel.dart' as _i3;
import 'package:angular_router/src/location/hash_location_strategy.dart' as _i4;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as _i5;
import 'package:angular_components/laminate/overlay/zindexer.dart' as _i6;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as _i7;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as _i8;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as _i9;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as _i10;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as _i11;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as _i12;
import 'package:angular_router/src/router/router_impl.dart' as _i13;
import 'package:angular_router/src/location/location.dart' as _i14;
import 'package:angular_router/src/location/browser_platform_location.dart' as _i15;
import 'package:angular_router/src/location/platform_location.dart' as _i16;
import 'package:angular/src/core/di/opaque_token.dart' as _i17;
import 'package:quiver/time.dart' as _i18;
import 'package:angular_components/laminate/enums/alignment.dart' as _i19;
import 'package:angular/src/core/zone/ng_zone.dart' as _i20;
import 'dart:html' as _i21;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as _i22;
import 'package:angular_components/model/math/box.dart' as _i23;
import 'package:angular_components/laminate/overlay/module.dart' as _i24;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as _i25;
import 'package:angular_components/utils/disposer/disposer.dart' as _i26;
import 'package:angular/src/core/linker/component_loader.dart' as _i27;
import 'package:angular_components/utils/browser/window/module.dart' as _i28;
import 'package:angular_router/src/router_hook.dart' as _i29;
import 'package:angular_router/src/location/location_strategy.dart' as _i30;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as _i31;
import 'package:angular_router/src/router/router.dart' as _i32;

_i1.Injector rootInjector$Injector([_i1.Injector parent]) => _Injector$rootInjector._(parent);

class _Injector$rootInjector extends _i2.HierarchicalInjector {
  _Injector$rootInjector._([_i1.Injector parent]) : super(parent);

  Uri _field0;

  _i3.GrpcWebClientChannel _field1;

  _i4.HashLocationStrategy _field2;

  _i5.DomPopupSourceFactory _field6;

  _i6.ZIndexer _field8;

  _i7.OverlayService _field9;

  _i8.OverlayStyleConfig _field10;

  _i9.OverlayDomRenderService _field11;

  dynamic _field15;

  dynamic _field16;

  dynamic _field17;

  _i10.Angular2ManagedZone _field18;

  dynamic _field19;

  _i11.DomRuler _field20;

  _i12.AcxImperativeViewUtils _field21;

  dynamic _field22;

  dynamic _field23;

  dynamic _field24;

  _i13.RouterImpl _field25;

  _i14.Location _field26;

  _i15.BrowserPlatformLocation _field27;

  Uri _getUri$0() => _field0 ??= Uri();
  _i3.GrpcWebClientChannel _getGrpcWebClientChannel$1() => _field1 ??= _i3.GrpcWebClientChannel.xhr(this.get(Uri));
  _i4.HashLocationStrategy _getHashLocationStrategy$2() => _field2 ??= _i4.HashLocationStrategy(this.get(_i16.PlatformLocation), provideUntyped(const _i17.OpaqueToken<String>('appBaseHref'), null));
  dynamic _getdynamic$3() => r'/';
  dynamic _getExisting$4() => this.get(_i18.Clock);
  dynamic _getdynamic$5() => const _i18.Clock();
  _i5.DomPopupSourceFactory _getDomPopupSourceFactory$6() => _field6 ??= _i5.DomPopupSourceFactory(this.get(_i11.DomRuler));
  List<_i19.RelativePosition> _getList$7() => const [_i19.RelativePosition.InlineBottom, _i19.RelativePosition.InlineBottomLeft, _i19.RelativePosition.InlineBottomRight, _i19.RelativePosition.InlineTop, _i19.RelativePosition.InlineTopLeft, _i19.RelativePosition.InlineTopRight];
  _i6.ZIndexer _getZIndexer$8() => _field8 ??= _i6.ZIndexer();
  _i7.OverlayService _getOverlayService$9() => _field9 ??= _i7.OverlayService(this.get(_i20.NgZone), this.get(const _i17.OpaqueToken<dynamic>('overlaySyncDom')), this.get(_i9.OverlayDomRenderService), injectFromAncestryOptional(_i7.OverlayService, null));
  _i8.OverlayStyleConfig _getOverlayStyleConfig$10() => _field10 ??= _i8.OverlayStyleConfig(this.get(_i21.Document));
  _i9.OverlayDomRenderService _getOverlayDomRenderService$11() => _field11 ??= _i9.OverlayDomRenderService(this.get(_i8.OverlayStyleConfig), this.get(const _i17.OpaqueToken<dynamic>('overlayContainer')), this.get(const _i17.OpaqueToken<dynamic>('overlayContainerName')), this.get(_i11.DomRuler), this.get(_i22.DomService), this.get(_i12.AcxImperativeViewUtils), this.get(const _i17.OpaqueToken<dynamic>('overlaySyncDom')), this.get(const _i17.OpaqueToken<dynamic>('overlayRepositionLoop')), this.get(_i6.ZIndexer));
  dynamic _getdynamic$12() => const _i23.Box();
  dynamic _getdynamic$13() => true;
  dynamic _getdynamic$14() => true;
  dynamic _getdynamic$15() => _field15 ??= _i24.getOverlayContainerParent(this.get(_i21.Document), injectFromAncestryOptional(const _i17.OpaqueToken<dynamic>('overlayContainerParent'), null));
  dynamic _getdynamic$16() => _field16 ??= _i24.getDefaultContainer(this.get(const _i17.OpaqueToken<dynamic>('overlayContainerName')), this.get(const _i17.OpaqueToken<dynamic>('overlayContainerParent')), injectFromAncestryOptional(const _i17.OpaqueToken<dynamic>('overlayContainer'), null));
  dynamic _getdynamic$17() => _field17 ??= _i24.getDefaultContainerName(injectFromAncestryOptional(const _i17.OpaqueToken<dynamic>('overlayContainerName'), null));
  _i10.Angular2ManagedZone _getAngular2ManagedZone$18() => _field18 ??= _i10.Angular2ManagedZone(this.get(_i20.NgZone));
  dynamic _getdynamic$19() => _field19 ??= _i25.createDomService(injectFromAncestryOptional(_i22.DomService, null), provideUntyped(_i26.Disposer, null), this.get(_i20.NgZone), this.get(_i21.Window));
  _i11.DomRuler _getDomRuler$20() => _field20 ??= _i11.DomRuler(this.get(_i21.Document), this.get(_i22.DomService));
  _i12.AcxImperativeViewUtils _getAcxImperativeViewUtils$21() => _field21 ??= _i12.AcxImperativeViewUtils(this.get(_i27.ComponentLoader), this.get(_i22.DomService));
  dynamic _getdynamic$22() => _field22 ??= _i28.getWindow();
  dynamic _getdynamic$23() => _field23 ??= _i28.getDocument();
  dynamic _getdynamic$24() => _field24 ??= _i28.getDocument();
  _i13.RouterImpl _getRouterImpl$25() => _field25 ??= _i13.RouterImpl(this.get(_i14.Location), provideUntyped(_i29.RouterHook, null));
  _i14.Location _getLocation$26() => _field26 ??= _i14.Location(this.get(_i30.LocationStrategy));
  _i15.BrowserPlatformLocation _getBrowserPlatformLocation$27() => _field27 ??= _i15.BrowserPlatformLocation();
  _i1.Injector _getInjector$28() => this;
  @override
  Object injectFromSelfOptional(Object token, [Object orElse = _i1.throwIfNotFound]) {
    if (identical(token, Uri)) {
      return _getUri$0();
    }
    if (identical(token, _i3.GrpcWebClientChannel)) {
      return _getGrpcWebClientChannel$1();
    }
    if (identical(token, _i30.LocationStrategy)) {
      return _getHashLocationStrategy$2();
    }
    if (identical(token, const _i17.OpaqueToken<String>('appBaseHref'))) {
      return _getdynamic$3();
    }
    if (identical(token, const _i17.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'))) {
      return _getExisting$4();
    }
    if (identical(token, _i18.Clock)) {
      return _getdynamic$5();
    }
    if (identical(token, _i5.DomPopupSourceFactory)) {
      return _getDomPopupSourceFactory$6();
    }
    if (identical(token, const _i17.OpaqueToken<List<_i19.RelativePosition>>('defaultPopupPositions'))) {
      return _getList$7();
    }
    if (identical(token, _i6.ZIndexer)) {
      return _getZIndexer$8();
    }
    if (identical(token, _i7.OverlayService)) {
      return _getOverlayService$9();
    }
    if (identical(token, _i8.OverlayStyleConfig)) {
      return _getOverlayStyleConfig$10();
    }
    if (identical(token, _i9.OverlayDomRenderService)) {
      return _getOverlayDomRenderService$11();
    }
    if (identical(token, const _i17.OpaqueToken<dynamic>('overlayViewportBoundaries'))) {
      return _getdynamic$12();
    }
    if (identical(token, const _i17.OpaqueToken<dynamic>('overlayRepositionLoop'))) {
      return _getdynamic$13();
    }
    if (identical(token, const _i17.OpaqueToken<dynamic>('overlaySyncDom'))) {
      return _getdynamic$14();
    }
    if (identical(token, const _i17.OpaqueToken<dynamic>('overlayContainerParent'))) {
      return _getdynamic$15();
    }
    if (identical(token, const _i17.OpaqueToken<dynamic>('overlayContainer'))) {
      return _getdynamic$16();
    }
    if (identical(token, const _i17.OpaqueToken<dynamic>('overlayContainerName'))) {
      return _getdynamic$17();
    }
    if (identical(token, _i31.ManagedZone)) {
      return _getAngular2ManagedZone$18();
    }
    if (identical(token, _i22.DomService)) {
      return _getdynamic$19();
    }
    if (identical(token, _i11.DomRuler)) {
      return _getDomRuler$20();
    }
    if (identical(token, _i12.AcxImperativeViewUtils)) {
      return _getAcxImperativeViewUtils$21();
    }
    if (identical(token, _i21.Window)) {
      return _getdynamic$22();
    }
    if (identical(token, _i21.HtmlDocument)) {
      return _getdynamic$23();
    }
    if (identical(token, _i21.Document)) {
      return _getdynamic$24();
    }
    if (identical(token, _i32.Router)) {
      return _getRouterImpl$25();
    }
    if (identical(token, _i14.Location)) {
      return _getLocation$26();
    }
    if (identical(token, _i16.PlatformLocation)) {
      return _getBrowserPlatformLocation$27();
    }
    if (identical(token, _i1.Injector)) {
      return _getInjector$28();
    }
    return orElse;
  }
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}

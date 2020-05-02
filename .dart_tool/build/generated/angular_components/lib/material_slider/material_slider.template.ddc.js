define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_slider/material_slider', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/material_slider/material_slider.scss.css.shim'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__angular__src__runtime__interpolate, packages__angular_components__material_slider__material_slider, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__interfaces__has_disabled, packages__angular__angular$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__material_slider__material_slider$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__change_detection.src__runtime__check_binding;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const injector = packages__angular__src__core__change_detection__change_detection.src__di__injector__injector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_slider = packages__angular_components__material_slider__material_slider.material_slider__material_slider;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const material_slider$46scss$46css$46shim = packages__angular_components__material_slider__material_slider$46scss$46css$46shim.material_slider__material_slider$46scss$46css$46shim;
  const material_slider$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  let EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  let RenderViewAndintToEmbeddedViewOfvoid = () => (RenderViewAndintToEmbeddedViewOfvoid = dart.constFn(dart.fnType(EmbeddedViewOfvoid(), [render_view.RenderView, core.int])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let VoidToMaterialSliderComponent = () => (VoidToMaterialSliderComponent = dart.constFn(dart.fnType(material_slider.MaterialSliderComponent, [])))();
  let ComponentFactoryOfMaterialSliderComponent = () => (ComponentFactoryOfMaterialSliderComponent = dart.constFn(component_factory.ComponentFactory$(material_slider.MaterialSliderComponent)))();
  let HostViewOfMaterialSliderComponent = () => (HostViewOfMaterialSliderComponent = dart.constFn(host_view.HostView$(material_slider.MaterialSliderComponent)))();
  let InjectorToHostViewOfMaterialSliderComponent = () => (InjectorToHostViewOfMaterialSliderComponent = dart.constFn(dart.fnType(HostViewOfMaterialSliderComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_slider$46template.viewFactory_MaterialSliderComponent1, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C2() {
      return C2 = dart.fn(material_slider$46template.viewFactory_MaterialSliderComponentHost0, InjectorToHostViewOfMaterialSliderComponent());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ComponentFactoryOfMaterialSliderComponent().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-slider"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  });
  const _appEl_1 = dart.privateName(material_slider$46template, "_appEl_1");
  const _NgIf_1_9 = dart.privateName(material_slider$46template, "_NgIf_1_9");
  const _expr_0 = dart.privateName(material_slider$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_slider$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_slider$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_slider$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_slider$46template, "_expr_4");
  const _expr_5 = dart.privateName(material_slider$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_slider$46template, "_expr_6");
  const _expr_7 = dart.privateName(material_slider$46template, "_expr_7");
  const _expr_8 = dart.privateName(material_slider$46template, "_expr_8");
  const _expr_9 = dart.privateName(material_slider$46template, "_expr_9");
  const _expr_10 = dart.privateName(material_slider$46template, "_expr_10");
  const _expr_11 = dart.privateName(material_slider$46template, "_expr_11");
  const _el_0 = dart.privateName(material_slider$46template, "_el_0");
  const _el_2 = dart.privateName(material_slider$46template, "_el_2");
  const _el_4 = dart.privateName(material_slider$46template, "_el_4");
  const _el_7 = dart.privateName(material_slider$46template, "_el_7");
  const _el_8 = dart.privateName(material_slider$46template, "_el_8");
  let C0;
  const _handleEvent_0 = dart.privateName(material_slider$46template, "_handleEvent_0");
  const _handleEvent_1 = dart.privateName(material_slider$46template, "_handleEvent_1");
  material_slider$46template.ViewMaterialSliderComponent0 = class ViewMaterialSliderComponent0 extends component_view.ComponentView$(material_slider.MaterialSliderComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_slider/material_slider.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "container");
      this.addShimC(this[_el_0]);
      let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this[_el_2] = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_2], "track-container left-track-container");
      this.addShimC(this[_el_2]);
      let _el_3 = dom_helpers.appendDiv(doc, this[_el_2]);
      this.updateChildClass(_el_3, "track");
      this.addShimC(_el_3);
      this[_el_4] = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_4], "right-knob knob");
      dom_helpers.setAttribute(this[_el_4], "role", "slider");
      this.addShimC(this[_el_4]);
      let _el_5 = dom_helpers.appendDiv(doc, this[_el_4]);
      this.updateChildClass(_el_5, "knob-real");
      this.addShimC(_el_5);
      let _el_6 = dom_helpers.appendDiv(doc, this[_el_4]);
      this.updateChildClass(_el_6, "knob-hover-shadow");
      this.addShimC(_el_6);
      this[_el_7] = dom_helpers.appendDiv(doc, this[_el_4]);
      this.updateChildClass(this[_el_7], "knob-drag-shadow");
      this.addShimC(this[_el_7]);
      this[_el_8] = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_8], "track-container right-track-container");
      this.addShimC(this[_el_8]);
      let _el_9 = dom_helpers.appendDiv(doc, this[_el_8]);
      this.updateChildClass(_el_9, "track");
      this.addShimC(_el_9);
      this[_el_0][$addEventListener]("mousedown", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'mouseDown')));
      this[_el_0][$addEventListener]("touchstart", this.eventHandler1(html.Event, html.TouchEvent, dart.bind(_ctx, 'touchStart')));
      this[_el_4][$addEventListener]("mousedown", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_0)));
      this[_el_4][$addEventListener]("touchstart", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_1)));
      this[_el_4][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'knobKeyDown')));
      _ctx.container = this[_el_0];
    }
    detectChangesInternal() {
      let t0, t0$, t0$0, t0$1;
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = _ctx.isTwoSided;
      this[_appEl_1].detectChangesInNestedViews();
      let currVal_0 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "disabled", ""))) {
        dom_helpers.updateClassBinding(this[_el_0], "is-disabled", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = dart.notNull(_ctx.progressPercent) - dart.notNull(_ctx.leftProgressPercent);
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "progressPercent - leftProgressPercent", ""))) {
        this[_el_2].style[$setProperty]("width", currVal_1 === null ? null : currVal_1[$toString]() + "%");
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = dart.test(_ctx.disabled) ? 0 - 1 : 0;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "disabled ? -1 : 0", ""))) {
        dom_helpers.updateAttribute(this[_el_4], "tabindex", (t0 = currVal_2, t0 === null ? null : t0[$toString]()));
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = dart.test(_ctx.isRtl) ? 0 : 0 - 8;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "isRtl ? 0 : -8", ""))) {
        this[_el_4].style[$setProperty]("left", currVal_3 === null ? null : currVal_3[$toString]() + "px");
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = dart.test(_ctx.isRtl) ? 0 - 8 : 0;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "isRtl ? -8 : 0", ""))) {
        this[_el_4].style[$setProperty]("right", currVal_4 === null ? null : currVal_4[$toString]() + "px");
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.min;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "min", ""))) {
        dom_helpers.updateAttribute(this[_el_4], "aria-valuemin", (t0$ = currVal_5, t0$ == null ? null : dart.toString(t0$)));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.max;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "max", ""))) {
        dom_helpers.updateAttribute(this[_el_4], "aria-valuemax", (t0$0 = currVal_6, t0$0 == null ? null : dart.toString(t0$0)));
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.value;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "value", ""))) {
        dom_helpers.updateAttribute(this[_el_4], "aria-valuenow", (t0$1 = currVal_7, t0$1 == null ? null : dart.toString(t0$1)));
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.isDragging;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "isDragging", ""))) {
        dom_helpers.updateClassBinding(this[_el_7], "is-dragging", currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = interpolate.interpolate1("calc(", 100 - dart.notNull(_ctx.progressPercent), "%)");
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "calc({{100-progressPercent}}%)", ""))) {
        this[_el_8].style[$setProperty]("width", currVal_9);
        this[_expr_9] = currVal_9;
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.isRightKnobSelected = true;
    }
    [_handleEvent_1]($36event) {
      let _ctx = this.ctx;
      _ctx.isRightKnobSelected = true;
    }
    detectHostChanges(firstCheck) {
      let t0;
      let _ctx = this.ctx;
      let currVal_10 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "aria-disabled", (t0 = currVal_10, t0 == null ? null : dart.toString(t0)));
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_11], currVal_11, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "is-disabled", currVal_11);
        this[_expr_11] = currVal_11;
      }
    }
    initComponentStyles() {
      let styles = material_slider$46template.ViewMaterialSliderComponent0._componentStyles;
      if (styles == null) {
        material_slider$46template.ViewMaterialSliderComponent0._componentStyles = styles = material_slider$46template.ViewMaterialSliderComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_slider$46template.styles$MaterialSliderComponent, material_slider$46template.ViewMaterialSliderComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_slider$46template.ViewMaterialSliderComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_el_0] = null;
    this[_el_2] = null;
    this[_el_4] = null;
    this[_el_7] = null;
    this[_el_8] = null;
    material_slider$46template.ViewMaterialSliderComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-slider"));
  }).prototype = material_slider$46template.ViewMaterialSliderComponent0.prototype;
  dart.addTypeTests(material_slider$46template.ViewMaterialSliderComponent0);
  dart.setMethodSignature(material_slider$46template.ViewMaterialSliderComponent0, () => ({
    __proto__: dart.getMethods(material_slider$46template.ViewMaterialSliderComponent0.__proto__),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_slider$46template.ViewMaterialSliderComponent0, "package:angular_components/material_slider/material_slider.template.dart");
  dart.setFieldSignature(material_slider$46template.ViewMaterialSliderComponent0, () => ({
    __proto__: dart.getFields(material_slider$46template.ViewMaterialSliderComponent0.__proto__),
    [_appEl_1]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_4]: dart.fieldType(html.DivElement),
    [_el_7]: dart.fieldType(html.DivElement),
    [_el_8]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(material_slider$46template.ViewMaterialSliderComponent0, {
    /*material_slider$46template.ViewMaterialSliderComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _el_5 = dart.privateName(material_slider$46template, "_el_5");
  const _handleEvent_2 = dart.privateName(material_slider$46template, "_handleEvent_2");
  material_slider$46template._ViewMaterialSliderComponent1 = class _ViewMaterialSliderComponent1 extends embedded_view.EmbeddedView$(material_slider.MaterialSliderComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "track-container double-sided-left-track-container");
      this.addShimC(this[_el_0]);
      let _el_1 = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_1, "track");
      this.addShimC(_el_1);
      this[_el_2] = html.DivElement._check(doc[$createElement]("div"));
      this.updateChildClass(this[_el_2], "left-knob knob");
      dom_helpers.setAttribute(this[_el_2], "role", "slider");
      this.addShimC(this[_el_2]);
      let _el_3 = dom_helpers.appendDiv(doc, this[_el_2]);
      this.updateChildClass(_el_3, "knob-real");
      this.addShimC(_el_3);
      let _el_4 = dom_helpers.appendDiv(doc, this[_el_2]);
      this.updateChildClass(_el_4, "knob-hover-shadow");
      this.addShimC(_el_4);
      this[_el_5] = dom_helpers.appendDiv(doc, this[_el_2]);
      this.updateChildClass(this[_el_5], "knob-drag-shadow");
      this.addShimC(this[_el_5]);
      this[_el_2][$addEventListener]("mousedown", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_0)));
      this[_el_2][$addEventListener]("touchstart", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_1)));
      this[_el_2][$addEventListener]("keydown", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_2)));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([this[_el_0], this[_el_2]]), null);
    }
    detectChangesInternal() {
      let t0, t0$, t0$0, t0$1;
      let _ctx = this.ctx;
      let currVal_0 = interpolate.interpolate1("calc(", _ctx.leftProgressPercent, "%)");
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "calc({{leftProgressPercent}}%)", ""))) {
        this[_el_0].style[$setProperty]("width", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = dart.test(_ctx.disabled) ? 0 - 1 : 0;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "disabled ? -1 : 0", ""))) {
        dom_helpers.updateAttribute(this[_el_2], "tabindex", (t0 = currVal_1, t0 === null ? null : t0[$toString]()));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = dart.test(_ctx.isRtl) ? 0 : 0 - 8;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "isRtl ? 0 : -8", ""))) {
        this[_el_2].style[$setProperty]("left", currVal_2 === null ? null : currVal_2[$toString]() + "px");
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = dart.test(_ctx.isRtl) ? 0 - 8 : 0;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "isRtl ? -8 : 0", ""))) {
        this[_el_2].style[$setProperty]("right", currVal_3 === null ? null : currVal_3[$toString]() + "px");
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.min;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "min", ""))) {
        dom_helpers.updateAttribute(this[_el_2], "aria-valuemin", (t0$ = currVal_4, t0$ == null ? null : dart.toString(t0$)));
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.max;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "max", ""))) {
        dom_helpers.updateAttribute(this[_el_2], "aria-valuemax", (t0$0 = currVal_5, t0$0 == null ? null : dart.toString(t0$0)));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.leftValue;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "leftValue", ""))) {
        dom_helpers.updateAttribute(this[_el_2], "aria-valuenow", (t0$1 = currVal_6, t0$1 == null ? null : dart.toString(t0$1)));
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.isDragging;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "isDragging", ""))) {
        dom_helpers.updateClassBinding(this[_el_5], "is-dragging", currVal_7);
        this[_expr_7] = currVal_7;
      }
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.isLeftKnobSelected = true;
    }
    [_handleEvent_1]($36event) {
      let _ctx = this.ctx;
      _ctx.isLeftKnobSelected = true;
    }
    [_handleEvent_2]($36event) {
      let _ctx = this.ctx;
      _ctx.knobKeyDown(html.KeyboardEvent._check($36event), {isLeftKnobPressed: true});
    }
  };
  (material_slider$46template._ViewMaterialSliderComponent1.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_el_0] = null;
    this[_el_2] = null;
    this[_el_5] = null;
    material_slider$46template._ViewMaterialSliderComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_slider$46template._ViewMaterialSliderComponent1.prototype;
  dart.addTypeTests(material_slider$46template._ViewMaterialSliderComponent1);
  dart.setMethodSignature(material_slider$46template._ViewMaterialSliderComponent1, () => ({
    __proto__: dart.getMethods(material_slider$46template._ViewMaterialSliderComponent1.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_slider$46template._ViewMaterialSliderComponent1, "package:angular_components/material_slider/material_slider.template.dart");
  dart.setFieldSignature(material_slider$46template._ViewMaterialSliderComponent1, () => ({
    __proto__: dart.getFields(material_slider$46template._ViewMaterialSliderComponent1.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_5]: dart.fieldType(html.DivElement)
  }));
  material_slider$46template._ViewMaterialSliderComponentHost0 = class _ViewMaterialSliderComponentHost0 extends host_view.HostView$(material_slider.MaterialSliderComponent) {
    build() {
      this.componentView = new material_slider$46template.ViewMaterialSliderComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_slider.MaterialSliderComponent, dart.wrapType(material_slider.MaterialSliderComponent), dart.fn(() => new material_slider.MaterialSliderComponent.new(this.componentView, dom_service.DomService._check(this.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex))), VoidToMaterialSliderComponent())) : new material_slider.MaterialSliderComponent.new(this.componentView, dom_service.DomService._check(this.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)));
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_slider.MaterialSliderComponent) || token === dart.wrapType(has_disabled.HasDisabled)) && 0 === nodeIndex) {
        return this.component;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      this.componentView.detectHostChanges(firstCheck);
      this.componentView.detectChanges();
    }
  };
  (material_slider$46template._ViewMaterialSliderComponentHost0.new = function(injector) {
    material_slider$46template._ViewMaterialSliderComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = material_slider$46template._ViewMaterialSliderComponentHost0.prototype;
  dart.addTypeTests(material_slider$46template._ViewMaterialSliderComponentHost0);
  dart.setMethodSignature(material_slider$46template._ViewMaterialSliderComponentHost0, () => ({
    __proto__: dart.getMethods(material_slider$46template._ViewMaterialSliderComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_slider$46template._ViewMaterialSliderComponentHost0, "package:angular_components/material_slider/material_slider.template.dart");
  material_slider$46template.viewFactory_MaterialSliderComponent1 = function viewFactory_MaterialSliderComponent1(parentView, parentIndex) {
    return new material_slider$46template._ViewMaterialSliderComponent1.new(parentView, parentIndex);
  };
  material_slider$46template.viewFactory_MaterialSliderComponentHost0 = function viewFactory_MaterialSliderComponentHost0(injector) {
    return new material_slider$46template._ViewMaterialSliderComponentHost0.new(injector);
  };
  material_slider$46template.initReflector = function initReflector() {
    if (dart.test(material_slider$46template._visited)) {
      return;
    }
    material_slider$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_slider.MaterialSliderComponent), material_slider$46template.MaterialSliderComponentNgFactory);
    angular$46template.initReflector();
    has_disabled$46template.initReflector();
    dom_service$46template.initReflector();
  };
  dart.copyProperties(material_slider$46template, {
    get MaterialSliderComponentNgFactory() {
      return material_slider$46template._MaterialSliderComponentNgFactory;
    }
  });
  let C2;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C1;
  let C3;
  dart.defineLazy(material_slider$46template, {
    /*material_slider$46template.styles$MaterialSliderComponent*/get styles$MaterialSliderComponent() {
      return [material_slider$46scss$46css$46shim.styles];
    },
    /*material_slider$46template._MaterialSliderComponentNgFactory*/get _MaterialSliderComponentNgFactory() {
      return C1 || CT.C1;
    },
    /*material_slider$46template.styles$MaterialSliderComponentHost*/get styles$MaterialSliderComponentHost() {
      return C3 || CT.C3;
    },
    /*material_slider$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_slider/material_slider.template", {
    "package:angular_components/material_slider/material_slider.template.dart": material_slider$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_slider.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6DI,uBAAgB,2BAAY,sEAAsE;IACpG;;AAIQ,iBAAY;AACQ,6BAAmB,AAAK;AAC5C,gBAAc;AACkC,MAAjD,cAAQ,sBAAmB,GAAG,EAAE,gBAAgB;AACP,MAA9C,AAAK,sBAAsB,aAAO;AACT,MAAzB,AAAK,cAAc;AACb,sBAAY,yBAA2B;AACO,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AACL,MAA3C,cAAQ,sBAAmB,GAAG,EAAO;AAC+B,MAAzE,AAAK,sBAAsB,aAAO;AACT,MAAzB,AAAK,cAAc;AACb,kBAAQ,sBAAmB,GAAG,EAAO;AACN,MAArC,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AAC6B,MAA3C,cAAQ,sBAAmB,GAAG,EAAO;AACU,MAApD,AAAK,sBAAsB,aAAO;AACiB,MAAnD,yBAA2B,aAAO,QAAQ;AACjB,MAAzB,AAAK,cAAc;AACb,kBAAQ,sBAAmB,GAAG,EAAO;AACF,MAAzC,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACb,kBAAQ,sBAAmB,GAAG,EAAO;AACM,MAAjD,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AAC6B,MAA3C,cAAQ,sBAAmB,GAAG,EAAO;AACW,MAArD,AAAK,sBAAsB,aAAO;AACT,MAAzB,AAAK,cAAc;AAC6B,MAA3C,cAAQ,sBAAmB,GAAG,EAAO;AACgC,MAA1E,AAAK,sBAAsB,aAAO;AACT,MAAzB,AAAK,cAAc;AACb,kBAAQ,sBAAmB,GAAG,EAAO;AACN,MAArC,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACyD,MAAvE,AAAM,+BAAiB,aAAa,AAAK,gDAAmB,UAAL,IAAI;AACc,MAAzE,AAAM,+BAAiB,cAAc,AAAK,gDAAmB,UAAL,IAAI;AACgB,MAA5E,AAAM,+BAAiB,aAAa,AAAK,qDAAmB;AACiB,MAA7E,AAAM,+BAAiB,cAAc,AAAK,qDAAmB;AACU,MAAvE,AAAM,+BAAiB,WAAW,AAAK,mDAAmB,UAAL,IAAI;AACnC,MAA3B,AAAK,IAAD,aAAkB;IACxB;;;AAIQ,iBAAY;AACmB,MAAhC,AAAU,uBAAO,AAAK,IAAD;AACgB,MAArC,AAAS;AACR,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,YAAY;AACK,QAAjE,+BAAiC,aAAO,eAAe,SAAS;AACxC,QAAnB,gBAAU,SAAS;;AAEpB,sBAAkC,aAArB,AAAK,IAAD,iCAAmB,AAAK,IAAD;AAC9C,oBAAI,2BAA0B,eAAS,SAAS,EAAE,yCAAyC;AACS,QAA7F,AAAM,AAAM,gCAAY,SAAW,AAAU,SAAD,KAAI,OAAQ,OAAQ,AAAU,AAAW,SAAZ,gBAAc;AACpE,QAAnB,gBAAU,SAAS;;AAEpB,gCAAa,AAAK,IAAD,aAAa,AAAE,IAAE,IAAK;AAC7C,oBAAI,2BAA0B,eAAS,SAAS,EAAE,qBAAqB;AACE,QAAvE,4BAA8B,aAAO,kBAAY,SAAS,gBAAT,OAAW;AACpC,QAAnB,gBAAU,SAAS;;AAEpB,gCAAa,AAAK,IAAD,UAAS,IAAK,AAAE,IAAE;AACzC,oBAAI,2BAA0B,eAAS,SAAS,EAAE,kBAAkB;AACgC,QAA7F,AAAM,AAAM,gCAAY,QAAU,AAAU,SAAD,KAAI,OAAQ,OAAQ,AAAU,AAAW,SAAZ,gBAAc;AACnE,QAAnB,gBAAU,SAAS;;AAEpB,gCAAa,AAAK,IAAD,UAAU,AAAE,IAAE,IAAK;AAC1C,oBAAI,2BAA0B,eAAS,SAAS,EAAE,kBAAkB;AACiC,QAA9F,AAAM,AAAM,gCAAY,SAAW,AAAU,SAAD,KAAI,OAAQ,OAAQ,AAAU,AAAW,SAAZ,gBAAc;AACpE,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,OAAO;AACqB,QAA5E,4BAA8B,aAAO,wBAAiB,SAAS,gBAAT,OAAW;AACzC,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,OAAO;AACqB,QAA5E,4BAA8B,aAAO,yBAAiB,SAAS,iBAAT,OAAW;AACzC,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,SAAS;AACmB,QAA5E,4BAA8B,aAAO,yBAAiB,SAAS,iBAAT,OAAW;AACzC,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,cAAc;AACG,QAAjE,+BAAiC,aAAO,eAAe,SAAS;AACxC,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,yBAAsB,SAAU,AAAI,mBAAE,AAAK,IAAD,mBAAmB;AAC/E,oBAAI,2BAA0B,eAAS,SAAS,EAAE,kCAAkC;AAClC,QAA3C,AAAM,AAAM,gCAAY,SAAS,SAAS;AACvB,QAAnB,gBAAU,SAAS;;IAE5B;;AAIoC,MAA7B,AAAS;IAChB;qBAEoB;AACZ,iBAAY;AACa,MAA/B,AAAK,IAAD,uBAAuB;IAC7B;qBAEoB;AACZ,iBAAY;AACa,MAA/B,AAAK,IAAD,uBAAuB;IAC7B;sBAE4B;;AACpB,iBAAY;AACZ,uBAAa,AAAK,IAAD;AACvB,oBAAI,2BAA0B,gBAAU,UAAU,EAAE,MAAM;AAC2B,QAAnF,4BAA8B,kBAAa,uBAAiB,UAAU,eAAV,OAAY;AAC9C,QAArB,iBAAW,UAAU;;AAEtB,uBAAa,AAAK,IAAD;AACvB,oBAAI,2BAA0B,gBAAU,UAAU,EAAE,MAAM;AACuB,QAA/E,sCAAwC,kBAAa,eAAe,UAAU;AACpD,QAArB,iBAAW,UAAU;;IAE9B;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACmH,QAAtI,2EAAoB,SAAU,2EAA2C,2CAAO,2DAAgC;;AAEtF,MAAxB,uBAAkB,MAAM;IAC/B;;0EAlJ0C,YAAgB;IApB5C;IACT;IACA;IACD;IACA;IACA;IACA;IACA;IACA;IACA;IACC;IACD;IACA;IACC;IACc;IACA;IACA;IACA;IACA;AAEsD,qFAAM,UAAU,EAAE,WAAW;AAC1E,IAA1B,AAAK;AAC+D,uBAA/D,wBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAJ+B,wEAAgB;;;;;;;;;AA0KvC,gBAAc;AACiB,oBAAhC,uBAAQ,AAAI,GAAD,iBAAe;AACuD,MAAtF,AAAK,sBAAsB,aAAO;AACT,MAAzB,AAAK,cAAc;AACb,kBAAQ,sBAAmB,GAAG,EAAO;AACN,MAArC,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACkB,oBAAhC,uBAAQ,AAAI,GAAD,iBAAe;AACoB,MAAnD,AAAK,sBAAsB,aAAO;AACiB,MAAnD,yBAA2B,aAAO,QAAQ;AACjB,MAAzB,AAAK,cAAc;AACb,kBAAQ,sBAAmB,GAAG,EAAO;AACF,MAAzC,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACb,kBAAQ,sBAAmB,GAAG,EAAO;AACM,MAAjD,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AAC6B,MAA3C,cAAQ,sBAAmB,GAAG,EAAO;AACW,MAArD,AAAK,sBAAsB,aAAO;AACT,MAAzB,AAAK,cAAc;AAC8D,MAA5E,AAAM,+BAAiB,aAAa,AAAK,qDAAmB;AACiB,MAA7E,AAAM,+BAAiB,cAAc,AAAK,qDAAmB;AACa,MAA1E,AAAM,+BAAiB,WAAW,AAAK,qDAAmB;AACG,MAAlE,AAAK,mCAA8B,sBAAM,aAAY,eAAQ;IAC/D;;;AAIQ,iBAAY;AACZ,sBAAY,yBAAsB,SAAS,AAAK,IAAD,sBAAsB;AAC3E,oBAAI,2BAA0B,eAAS,SAAS,EAAE,kCAAkC;AAClC,QAA3C,AAAM,AAAM,gCAAY,SAAS,SAAS;AACvB,QAAnB,gBAAU,SAAS;;AAEpB,gCAAa,AAAK,IAAD,aAAa,AAAE,IAAE,IAAK;AAC7C,oBAAI,2BAA0B,eAAS,SAAS,EAAE,qBAAqB;AACE,QAAvE,4BAA8B,aAAO,kBAAY,SAAS,gBAAT,OAAW;AACpC,QAAnB,gBAAU,SAAS;;AAEpB,gCAAa,AAAK,IAAD,UAAS,IAAK,AAAE,IAAE;AACzC,oBAAI,2BAA0B,eAAS,SAAS,EAAE,kBAAkB;AACgC,QAA7F,AAAM,AAAM,gCAAY,QAAU,AAAU,SAAD,KAAI,OAAQ,OAAQ,AAAU,AAAW,SAAZ,gBAAc;AACnE,QAAnB,gBAAU,SAAS;;AAEpB,gCAAa,AAAK,IAAD,UAAU,AAAE,IAAE,IAAK;AAC1C,oBAAI,2BAA0B,eAAS,SAAS,EAAE,kBAAkB;AACiC,QAA9F,AAAM,AAAM,gCAAY,SAAW,AAAU,SAAD,KAAI,OAAQ,OAAQ,AAAU,AAAW,SAAZ,gBAAc;AACpE,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,OAAO;AACqB,QAA5E,4BAA8B,aAAO,wBAAiB,SAAS,gBAAT,OAAW;AACzC,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,OAAO;AACqB,QAA5E,4BAA8B,aAAO,yBAAiB,SAAS,iBAAT,OAAW;AACzC,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,aAAa;AACe,QAA5E,4BAA8B,aAAO,yBAAiB,SAAS,iBAAT,OAAW;AACzC,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,cAAc;AACG,QAAjE,+BAAiC,aAAO,eAAe,SAAS;AACxC,QAAnB,gBAAU,SAAS;;IAE5B;qBAEoB;AACZ,iBAAY;AACY,MAA9B,AAAK,IAAD,sBAAsB;IAC5B;qBAEoB;AACZ,iBAAY;AACY,MAA9B,AAAK,IAAD,sBAAsB;IAC5B;qBAEoB;AACZ,iBAAY;AAIjB,MAHD,AAAK,IAAD,uCACF,+BACmB;IAEvB;;2EA1FkD,YAAgB;IAX9D;IACA;IACA;IACA;IACA;IACA;IACA;IACC;IACc;IACA;IACA;AAC8D,sFAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;AAyGnD,MAArD,qBAAgB,gEAA6B,MAAM;AAClD,kBAAa,AAAc;AAKkF,MAJ9G,2BAAqB,2BACpB,kEAAmC,wDAAyB,cAC3C,gDAA6B,kDAAe,AAAK,iBAAqB,uCAAiB,yDAEhG,gDAA6B,kDAAe,AAAK,iBAAqB,uCAAiB;AAC7E,MAAxB,AAAK,kBAAa,KAAK;IACzB;wBAGoC,OAAW,WAAmB;AAChE,WAAM,AAAU,KAAK,KAAU,0DAA4B,AAAU,KAAK,KAAW,4CAAkB,AAAE,MAAG,SAAS;AACnH,cAAY;;AAEd,YAAO,eAAc;IACvB;;AAIO,oBAAU;AACV,uBAAkB;AACvB,UAAI,OAAO;AAC2B,QAA/B,AAAc;;AAE2B,MAA3C,AAAc,qCAAkB,UAAU;AACb,MAA7B,AAAc;IACrB;;+EA/BoD;AAAY,0FAAM,QAAQ;;EAAC;;;;;;;;kHARI,YAAgB;AACnG,UAAO,kEAA8B,UAAU,EAAE,WAAW;EAC9D;0HAwC8G;AAC5G,UAAO,sEAAkC,QAAQ;EACnD;;AAIE,kBAAI;AACF;;AAEa,IAAf,sCAAW;AAEwE,IAAnF,4BAAyB,wDAAyB;AAC7B,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AArKE,YAAO;IACT;;;;;;;;MAhLoB,yDAA8B;YAAG,EAAS;;MA6KN,4DAAiC;;;MAkHrE,6DAAkC;;;MA0ClD,mCAAQ;YAAG","file":"material_slider.template.ddc.js"}');
  // Exports:
  return {
    material_slider__material_slider$46template: material_slider$46template
  };
});

//# sourceMappingURL=material_slider.template.ddc.js.map

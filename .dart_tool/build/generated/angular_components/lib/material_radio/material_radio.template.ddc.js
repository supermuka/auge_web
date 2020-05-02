define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/material_radio/material_radio', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/ui/icon.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_forms/angular_forms.template', 'packages/angular_components/material_radio/material_radio.scss.css.shim', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/material_radio/material_radio_group.scss.css.shim'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular_components__material_radio__material_radio, packages__angular_components__material_ripple__material_ripple$46template, packages__angular_components__material_ripple__material_ripple, packages__angular_components__interfaces__has_disabled, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__focus__focus$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__model__ui__icon$46template, packages__angular_components__utils__browser__events__events$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_forms__angular_forms$46template, packages__angular_components__material_radio__material_radio$46scss$46css$46shim, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__material_radio__material_radio_group$46scss$46css$46shim) {
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
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
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
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const material_radio = packages__angular_components__material_radio__material_radio.material_radio__material_radio;
  const material_radio_group = packages__angular_components__material_radio__material_radio.material_radio__material_radio_group;
  const material_ripple$46template = packages__angular_components__material_ripple__material_ripple$46template.material_ripple__material_ripple$46template;
  const material_ripple = packages__angular_components__material_ripple__material_ripple.material_ripple__material_ripple;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const icon$46template = packages__angular_components__model__ui__icon$46template.model__ui__icon$46template;
  const events$46template = packages__angular_components__utils__browser__events__events$46template.utils__browser__events__events$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const angular_forms$46template = packages__angular_forms__angular_forms$46template.angular_forms$46template;
  const material_radio$46scss$46css$46shim = packages__angular_components__material_radio__material_radio$46scss$46css$46shim.material_radio__material_radio$46scss$46css$46shim;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const material_radio_group$46scss$46css$46shim = packages__angular_components__material_radio__material_radio_group$46scss$46css$46shim.material_radio__material_radio_group$46scss$46css$46shim;
  const material_radio$46template = Object.create(dart.library);
  const material_radio_group$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  let EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  let RenderViewAndintToEmbeddedViewOfvoid = () => (RenderViewAndintToEmbeddedViewOfvoid = dart.constFn(dart.fnType(EmbeddedViewOfvoid(), [render_view.RenderView, core.int])))();
  let VoidToMaterialRadioComponent = () => (VoidToMaterialRadioComponent = dart.constFn(dart.fnType(material_radio.MaterialRadioComponent, [])))();
  let ComponentFactoryOfMaterialRadioComponent = () => (ComponentFactoryOfMaterialRadioComponent = dart.constFn(component_factory.ComponentFactory$(material_radio.MaterialRadioComponent)))();
  let HostViewOfMaterialRadioComponent = () => (HostViewOfMaterialRadioComponent = dart.constFn(host_view.HostView$(material_radio.MaterialRadioComponent)))();
  let InjectorToHostViewOfMaterialRadioComponent = () => (InjectorToHostViewOfMaterialRadioComponent = dart.constFn(dart.fnType(HostViewOfMaterialRadioComponent(), [injector.Injector])))();
  let VoidToMaterialRadioGroupComponent = () => (VoidToMaterialRadioGroupComponent = dart.constFn(dart.fnType(material_radio_group.MaterialRadioGroupComponent, [])))();
  let JSArrayOfMaterialRadioComponent = () => (JSArrayOfMaterialRadioComponent = dart.constFn(_interceptors.JSArray$(material_radio.MaterialRadioComponent)))();
  let ComponentFactoryOfMaterialRadioGroupComponent = () => (ComponentFactoryOfMaterialRadioGroupComponent = dart.constFn(component_factory.ComponentFactory$(material_radio_group.MaterialRadioGroupComponent)))();
  let HostViewOfMaterialRadioGroupComponent = () => (HostViewOfMaterialRadioGroupComponent = dart.constFn(host_view.HostView$(material_radio_group.MaterialRadioGroupComponent)))();
  let InjectorToHostViewOfMaterialRadioGroupComponent = () => (InjectorToHostViewOfMaterialRadioGroupComponent = dart.constFn(dart.fnType(HostViewOfMaterialRadioGroupComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_radio$46template.viewFactory_MaterialRadioComponent1, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C2() {
      return C2 = dart.fn(material_radio$46template.viewFactory_MaterialRadioComponentHost0, InjectorToHostViewOfMaterialRadioComponent());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ComponentFactoryOfMaterialRadioComponent().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-radio"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    },
    get C5() {
      return C5 = dart.fn(material_radio_group$46template.viewFactory_MaterialRadioGroupComponentHost0, InjectorToHostViewOfMaterialRadioGroupComponent());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ComponentFactoryOfMaterialRadioGroupComponent().prototype,
        [ComponentFactory__viewFactory]: C5 || CT.C5,
        [ComponentFactory_selector]: "material-radio-group"
      });
    }
  });
  const _compView_1 = dart.privateName(material_radio$46template, "_compView_1");
  const _MaterialIconComponent_1_5 = dart.privateName(material_radio$46template, "_MaterialIconComponent_1_5");
  const _appEl_2 = dart.privateName(material_radio$46template, "_appEl_2");
  const _NgIf_2_9 = dart.privateName(material_radio$46template, "_NgIf_2_9");
  const _expr_0 = dart.privateName(material_radio$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_radio$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_radio$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_radio$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_radio$46template, "_expr_4");
  const _expr_5 = dart.privateName(material_radio$46template, "_expr_5");
  const _expr_7 = dart.privateName(material_radio$46template, "_expr_7");
  const _expr_8 = dart.privateName(material_radio$46template, "_expr_8");
  const _el_0 = dart.privateName(material_radio$46template, "_el_0");
  let C0;
  material_radio$46template.ViewMaterialRadioComponent0 = class ViewMaterialRadioComponent0 extends component_view.ComponentView$(material_radio.MaterialRadioComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_radio/material_radio.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "icon-container");
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      this[_el_0][$append](_el_1);
      dom_helpers.setAttribute(_el_1, "aria-hidden", "true");
      this.updateChildClassNonHtml(_el_1, "icon");
      this.addShimC(_el_1);
      this[_MaterialIconComponent_1_5] = new material_icon.MaterialIconComponent.new(_el_1);
      this[_compView_1].create(this[_MaterialIconComponent_1_5]);
      let _anchor_2 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C0 || CT.C0);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _el_3 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_3, "content");
      this.addShimC(_el_3);
      this.project(_el_3, 0);
      parentRenderNode[$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyDown')));
      parentRenderNode[$addEventListener]("keyup", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyUp')));
      parentRenderNode[$addEventListener]("focus", this.eventHandler0(html.Event, dart.bind(_ctx, 'onFocus')));
      parentRenderNode[$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(_ctx, 'onBlur')));
      parentRenderNode[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'handleClick')));
      parentRenderNode[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_3 = _ctx.icon;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "icon", ""))) {
        this[_MaterialIconComponent_1_5].icon = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.disabled);
      this[_appEl_2].detectChangesInNestedViews();
      let currVal_0 = _ctx.showFocus;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "showFocus", ""))) {
        dom_helpers.updateClassBinding(this[_el_0], "focus", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.checked;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "checked", ""))) {
        dom_helpers.updateClassBinding(this[_el_0], "checked", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "disabled", ""))) {
        dom_helpers.updateClassBinding(this[_el_0], "disabled", currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_compView_1].destroyInternalState();
    }
    detectHostChanges(firstCheck) {
      let t0, t0$, t0$0;
      let _ctx = this.ctx;
      if (dart.test(firstCheck)) {
        if (_ctx.role != null) {
          dom_helpers.updateAttribute(this.rootElement, "role", _ctx.role);
        }
      }
      let currVal_4 = _ctx.checked;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "aria-checked", (t0 = currVal_4, t0 == null ? null : dart.toString(t0)));
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.tabIndex;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "tabindex", (t0$ = currVal_5, t0$ == null ? null : dart.toString(t0$)));
        this[_expr_5] = currVal_5;
      }
      let currVal_7 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "disabled", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "aria-disabled", (t0$0 = currVal_8, t0$0 == null ? null : dart.toString(t0$0)));
        this[_expr_8] = currVal_8;
      }
    }
    initComponentStyles() {
      let styles = material_radio$46template.ViewMaterialRadioComponent0._componentStyles;
      if (styles == null) {
        material_radio$46template.ViewMaterialRadioComponent0._componentStyles = styles = material_radio$46template.ViewMaterialRadioComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_radio$46template.styles$MaterialRadioComponent, material_radio$46template.ViewMaterialRadioComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_radio$46template.ViewMaterialRadioComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_el_0] = null;
    material_radio$46template.ViewMaterialRadioComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-radio"));
    this.updateChildClassNonHtml(this.rootElement, "themeable");
  }).prototype = material_radio$46template.ViewMaterialRadioComponent0.prototype;
  dart.addTypeTests(material_radio$46template.ViewMaterialRadioComponent0);
  dart.setMethodSignature(material_radio$46template.ViewMaterialRadioComponent0, () => ({
    __proto__: dart.getMethods(material_radio$46template.ViewMaterialRadioComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_radio$46template.ViewMaterialRadioComponent0, "package:angular_components/material_radio/material_radio.template.dart");
  dart.setFieldSignature(material_radio$46template.ViewMaterialRadioComponent0, () => ({
    __proto__: dart.getFields(material_radio$46template.ViewMaterialRadioComponent0.__proto__),
    [_compView_1]: dart.fieldType(material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon.MaterialIconComponent),
    [_appEl_2]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(material_radio$46template.ViewMaterialRadioComponent0, {
    /*material_radio$46template.ViewMaterialRadioComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _compView_0 = dart.privateName(material_radio$46template, "_compView_0");
  const _MaterialRippleComponent_0_5 = dart.privateName(material_radio$46template, "_MaterialRippleComponent_0_5");
  material_radio$46template._ViewMaterialRadioComponent1 = class _ViewMaterialRadioComponent1 extends embedded_view.EmbeddedView$(material_radio.MaterialRadioComponent) {
    build() {
      this[_compView_0] = new material_ripple$46template.ViewMaterialRippleComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(_el_0, "ripple");
      this.addShimC(_el_0);
      this[_MaterialRippleComponent_0_5] = new material_ripple.MaterialRippleComponent.new(_el_0);
      this[_compView_0].create(this[_MaterialRippleComponent_0_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialRippleComponent_0_5].ngOnDestroy();
    }
  };
  (material_radio$46template._ViewMaterialRadioComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialRippleComponent_0_5] = null;
    material_radio$46template._ViewMaterialRadioComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_radio$46template._ViewMaterialRadioComponent1.prototype;
  dart.addTypeTests(material_radio$46template._ViewMaterialRadioComponent1);
  dart.setMethodSignature(material_radio$46template._ViewMaterialRadioComponent1, () => ({
    __proto__: dart.getMethods(material_radio$46template._ViewMaterialRadioComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_radio$46template._ViewMaterialRadioComponent1, "package:angular_components/material_radio/material_radio.template.dart");
  dart.setFieldSignature(material_radio$46template._ViewMaterialRadioComponent1, () => ({
    __proto__: dart.getFields(material_radio$46template._ViewMaterialRadioComponent1.__proto__),
    [_compView_0]: dart.fieldType(material_ripple$46template.ViewMaterialRippleComponent0),
    [_MaterialRippleComponent_0_5]: dart.fieldType(material_ripple.MaterialRippleComponent)
  }));
  material_radio$46template._ViewMaterialRadioComponentHost0 = class _ViewMaterialRadioComponentHost0 extends host_view.HostView$(material_radio.MaterialRadioComponent) {
    build() {
      this.componentView = new material_radio$46template.ViewMaterialRadioComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_radio.MaterialRadioComponent, dart.wrapType(material_radio.MaterialRadioComponent), dart.fn(() => new material_radio.MaterialRadioComponent.new(_el_0, this.componentView, material_radio_group.MaterialRadioGroupComponent._check(this.injectorGetOptional(dart.wrapType(material_radio_group.MaterialRadioGroupComponent), this.parentIndex)), null, null), VoidToMaterialRadioComponent())) : new material_radio.MaterialRadioComponent.new(_el_0, this.componentView, material_radio_group.MaterialRadioGroupComponent._check(this.injectorGetOptional(dart.wrapType(material_radio_group.MaterialRadioGroupComponent), this.parentIndex)), null, null);
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(has_disabled.HasDisabled) && 0 === nodeIndex) {
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
    destroyInternal() {
      this.componentView.destroyInternalState();
      this.component.ngOnDestroy();
    }
  };
  (material_radio$46template._ViewMaterialRadioComponentHost0.new = function(injector) {
    material_radio$46template._ViewMaterialRadioComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = material_radio$46template._ViewMaterialRadioComponentHost0.prototype;
  dart.addTypeTests(material_radio$46template._ViewMaterialRadioComponentHost0);
  dart.setMethodSignature(material_radio$46template._ViewMaterialRadioComponentHost0, () => ({
    __proto__: dart.getMethods(material_radio$46template._ViewMaterialRadioComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_radio$46template._ViewMaterialRadioComponentHost0, "package:angular_components/material_radio/material_radio.template.dart");
  material_radio$46template.viewFactory_MaterialRadioComponent1 = function viewFactory_MaterialRadioComponent1(parentView, parentIndex) {
    return new material_radio$46template._ViewMaterialRadioComponent1.new(parentView, parentIndex);
  };
  material_radio$46template.viewFactory_MaterialRadioComponentHost0 = function viewFactory_MaterialRadioComponentHost0(injector) {
    return new material_radio$46template._ViewMaterialRadioComponentHost0.new(injector);
  };
  material_radio$46template.initReflector = function initReflector() {
    if (dart.test(material_radio$46template._visited)) {
      return;
    }
    material_radio$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_radio.MaterialRadioComponent), material_radio$46template.MaterialRadioComponentNgFactory);
    angular$46template.initReflector();
    meta$46template.initReflector();
    focus$46template.initReflector();
    has_disabled$46template.initReflector();
    material_icon$46template.initReflector();
    material_radio_group$46template.initReflector();
    material_ripple$46template.initReflector();
    icon$46template.initReflector();
    events$46template.initReflector();
    disposer$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.copyProperties(material_radio$46template, {
    get MaterialRadioComponentNgFactory() {
      return material_radio$46template._MaterialRadioComponentNgFactory;
    }
  });
  let C2;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C1;
  let C3;
  dart.defineLazy(material_radio$46template, {
    /*material_radio$46template.styles$MaterialRadioComponent*/get styles$MaterialRadioComponent() {
      return [material_radio$46scss$46css$46shim.styles];
    },
    /*material_radio$46template._MaterialRadioComponentNgFactory*/get _MaterialRadioComponentNgFactory() {
      return C1 || CT.C1;
    },
    /*material_radio$46template.styles$MaterialRadioComponentHost*/get styles$MaterialRadioComponentHost() {
      return C3 || CT.C3;
    },
    /*material_radio$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_radio_group$46template.ViewMaterialRadioGroupComponent0 = class ViewMaterialRadioGroupComponent0 extends component_view.ComponentView$(material_radio_group.MaterialRadioGroupComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_radio/material_radio_group.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      this.project(parentRenderNode, 0);
    }
    initComponentStyles() {
      let styles = material_radio_group$46template.ViewMaterialRadioGroupComponent0._componentStyles;
      if (styles == null) {
        material_radio_group$46template.ViewMaterialRadioGroupComponent0._componentStyles = styles = material_radio_group$46template.ViewMaterialRadioGroupComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_radio_group$46template.styles$MaterialRadioGroupComponent, material_radio_group$46template.ViewMaterialRadioGroupComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_radio_group$46template.ViewMaterialRadioGroupComponent0.new = function(parentView, parentIndex) {
    material_radio_group$46template.ViewMaterialRadioGroupComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-radio-group"));
    dom_helpers.updateAttribute(this.rootElement, "role", "radiogroup");
    this.rootElement.tabIndex = -1;
  }).prototype = material_radio_group$46template.ViewMaterialRadioGroupComponent0.prototype;
  dart.addTypeTests(material_radio_group$46template.ViewMaterialRadioGroupComponent0);
  dart.setMethodSignature(material_radio_group$46template.ViewMaterialRadioGroupComponent0, () => ({
    __proto__: dart.getMethods(material_radio_group$46template.ViewMaterialRadioGroupComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_radio_group$46template.ViewMaterialRadioGroupComponent0, "package:angular_components/material_radio/material_radio_group.template.dart");
  dart.defineLazy(material_radio_group$46template.ViewMaterialRadioGroupComponent0, {
    /*material_radio_group$46template.ViewMaterialRadioGroupComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  material_radio_group$46template._ViewMaterialRadioGroupComponentHost0 = class _ViewMaterialRadioGroupComponentHost0 extends host_view.HostView$(material_radio_group.MaterialRadioGroupComponent) {
    build() {
      this.componentView = new material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_radio_group.MaterialRadioGroupComponent, dart.wrapType(material_radio_group.MaterialRadioGroupComponent), dart.fn(() => new material_radio_group.MaterialRadioGroupComponent.new(ng_zone.NgZone._check(this.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), null), VoidToMaterialRadioGroupComponent())) : new material_radio_group.MaterialRadioGroupComponent.new(ng_zone.NgZone._check(this.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), null);
      this.component.radioComponents = JSArrayOfMaterialRadioComponent().of([]);
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_radio_group.MaterialRadioGroupComponent) && 0 === nodeIndex) {
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
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this.component.ngAfterContentInit();
        }
      }
      this.componentView.detectChanges();
    }
    destroyInternal() {
      this.componentView.destroyInternalState();
      this.component.ngOnDestroy();
    }
  };
  (material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.new = function(injector) {
    material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.prototype;
  dart.addTypeTests(material_radio_group$46template._ViewMaterialRadioGroupComponentHost0);
  dart.setMethodSignature(material_radio_group$46template._ViewMaterialRadioGroupComponentHost0, () => ({
    __proto__: dart.getMethods(material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_radio_group$46template._ViewMaterialRadioGroupComponentHost0, "package:angular_components/material_radio/material_radio_group.template.dart");
  material_radio_group$46template.viewFactory_MaterialRadioGroupComponentHost0 = function viewFactory_MaterialRadioGroupComponentHost0(injector) {
    return new material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.new(injector);
  };
  material_radio_group$46template.initReflector = function initReflector$() {
    if (dart.test(material_radio_group$46template._visited)) {
      return;
    }
    material_radio_group$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_radio_group.MaterialRadioGroupComponent), material_radio_group$46template.MaterialRadioGroupComponentNgFactory);
    angular$46template.initReflector();
    focus$46template.initReflector();
    material_radio$46template.initReflector();
    selection_model$46template.initReflector();
    disposer$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.copyProperties(material_radio_group$46template, {
    get MaterialRadioGroupComponentNgFactory() {
      return material_radio_group$46template._MaterialRadioGroupComponentNgFactory;
    }
  });
  let C5;
  let C4;
  dart.defineLazy(material_radio_group$46template, {
    /*material_radio_group$46template.styles$MaterialRadioGroupComponent*/get styles$MaterialRadioGroupComponent() {
      return [material_radio_group$46scss$46css$46shim.styles];
    },
    /*material_radio_group$46template._MaterialRadioGroupComponentNgFactory*/get _MaterialRadioGroupComponentNgFactory() {
      return C4 || CT.C4;
    },
    /*material_radio_group$46template.styles$MaterialRadioGroupComponentHost*/get styles$MaterialRadioGroupComponentHost() {
      return C3 || CT.C3;
    },
    /*material_radio_group$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_radio/material_radio.template", {
    "package:angular_components/material_radio/material_radio.template.dart": material_radio$46template,
    "package:angular_components/material_radio/material_radio_group.template.dart": material_radio_group$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_radio.template.dart","material_radio_group.template.dart"],"names":[],"mappings":"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","file":"material_radio.template.ddc.js"}');
  // Exports:
  return {
    material_radio__material_radio$46template: material_radio$46template,
    material_radio__material_radio_group$46template: material_radio_group$46template
  };
});

//# sourceMappingURL=material_radio.template.ddc.js.map

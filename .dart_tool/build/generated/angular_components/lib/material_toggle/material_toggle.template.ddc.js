define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_toggle/material_toggle', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_forms/angular_forms.template', 'packages/angular_components/material_toggle/material_toggle.scss.css.shim'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__angular__src__runtime__interpolate, packages__angular_components__material_toggle__material_toggle, packages__angular__src__runtime__text_binding, packages__angular_components__interfaces__has_disabled, packages__angular__angular$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__utils__browser__events__events$46template, packages__angular_forms__angular_forms$46template, packages__angular_components__material_toggle__material_toggle$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__change_detection.src__runtime__check_binding;
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
  const material_toggle = packages__angular_components__material_toggle__material_toggle.material_toggle__material_toggle;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const events$46template = packages__angular_components__utils__browser__events__events$46template.utils__browser__events__events$46template;
  const angular_forms$46template = packages__angular_forms__angular_forms$46template.angular_forms$46template;
  const material_toggle$46scss$46css$46shim = packages__angular_components__material_toggle__material_toggle$46scss$46css$46shim.material_toggle__material_toggle$46scss$46css$46shim;
  const material_toggle$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $append = dartx.append;
  let EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  let RenderViewAndintToEmbeddedViewOfvoid = () => (RenderViewAndintToEmbeddedViewOfvoid = dart.constFn(dart.fnType(EmbeddedViewOfvoid(), [render_view.RenderView, core.int])))();
  let ComponentFactoryOfMaterialToggleComponent = () => (ComponentFactoryOfMaterialToggleComponent = dart.constFn(component_factory.ComponentFactory$(material_toggle.MaterialToggleComponent)))();
  let HostViewOfMaterialToggleComponent = () => (HostViewOfMaterialToggleComponent = dart.constFn(host_view.HostView$(material_toggle.MaterialToggleComponent)))();
  let InjectorToHostViewOfMaterialToggleComponent = () => (InjectorToHostViewOfMaterialToggleComponent = dart.constFn(dart.fnType(HostViewOfMaterialToggleComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_toggle$46template.viewFactory_MaterialToggleComponent1, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C2() {
      return C2 = dart.fn(material_toggle$46template.viewFactory_MaterialToggleComponentHost0, InjectorToHostViewOfMaterialToggleComponent());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ComponentFactoryOfMaterialToggleComponent().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-toggle"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  });
  const _appEl_1 = dart.privateName(material_toggle$46template, "_appEl_1");
  const _NgIf_1_9 = dart.privateName(material_toggle$46template, "_NgIf_1_9");
  const _expr_0 = dart.privateName(material_toggle$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_toggle$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_toggle$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_toggle$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_toggle$46template, "_expr_4");
  const _expr_5 = dart.privateName(material_toggle$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_toggle$46template, "_expr_6");
  const _expr_7 = dart.privateName(material_toggle$46template, "_expr_7");
  const _expr_8 = dart.privateName(material_toggle$46template, "_expr_8");
  const _el_0 = dart.privateName(material_toggle$46template, "_el_0");
  const _el_3 = dart.privateName(material_toggle$46template, "_el_3");
  const _el_5 = dart.privateName(material_toggle$46template, "_el_5");
  const _el_6 = dart.privateName(material_toggle$46template, "_el_6");
  let C0;
  const _handleEvent_0 = dart.privateName(material_toggle$46template, "_handleEvent_0");
  const _handleEvent_1 = dart.privateName(material_toggle$46template, "_handleEvent_1");
  const _handleEvent_2 = dart.privateName(material_toggle$46template, "_handleEvent_2");
  const _handleEvent_3 = dart.privateName(material_toggle$46template, "_handleEvent_3");
  material_toggle$46template.ViewMaterialToggleComponent0 = class ViewMaterialToggleComponent0 extends component_view.ComponentView$(material_toggle.MaterialToggleComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_toggle/material_toggle.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "material-toggle");
      dom_helpers.setAttribute(this[_el_0], "role", "button");
      this.addShimC(this[_el_0]);
      let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _el_2 = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_2, "tgl-container");
      this.addShimC(_el_2);
      this[_el_3] = dom_helpers.appendDiv(doc, _el_2);
      dom_helpers.setAttribute(this[_el_3], "animated", "");
      this.updateChildClass(this[_el_3], "tgl-bar");
      this.addShimC(this[_el_3]);
      let _el_4 = dom_helpers.appendDiv(doc, _el_2);
      this.updateChildClass(_el_4, "tgl-btn-container");
      this.addShimC(_el_4);
      this[_el_5] = dom_helpers.appendDiv(doc, _el_4);
      this.updateChildClass(this[_el_5], "tgl-btn-underlay");
      this.addShimC(this[_el_5]);
      this[_el_6] = dom_helpers.appendDiv(doc, this[_el_5]);
      dom_helpers.setAttribute(this[_el_6], "animated", "");
      this.updateChildClass(this[_el_6], "tgl-btn");
      this.addShimC(this[_el_6]);
      this.project(this[_el_6], 0);
      this[_el_0][$addEventListener]("blur", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_0)));
      this[_el_0][$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_1)));
      this[_el_0][$addEventListener]("mouseenter", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_2)));
      this[_el_0][$addEventListener]("mouseleave", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_3)));
      _ctx.toggleElement = this[_el_0];
      parentRenderNode[$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'handleClick')));
      parentRenderNode[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
    }
    detectChangesInternal() {
      let t0;
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = _ctx.hasLabel;
      this[_appEl_1].detectChangesInNestedViews();
      let currVal_0 = _ctx.checked;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "checked", ""))) {
        dom_helpers.updateClassBinding(this[_el_0], "checked", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "disabled", ""))) {
        dom_helpers.updateClassBinding(this[_el_0], "disabled", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = dart.test(_ctx.disabled) ? "-1" : "0";
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "disabled ? '-1': '0'", ""))) {
        dom_helpers.updateAttribute(this[_el_0], "tabindex", (t0 = currVal_2, t0 === null ? null : t0[$toString]()));
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = interpolate.interpolate0(_ctx.disabled);
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "{{disabled}}", ""))) {
        dom_helpers.setAttribute(this[_el_0], "aria-disabled", core.String._check(currVal_3));
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = interpolate.interpolateString0(_ctx.ariaLabel);
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "{{ariaLabel}}", ""))) {
        dom_helpers.setAttribute(this[_el_0], "aria-label", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = interpolate.interpolate0(_ctx.shadow_z);
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "{{shadow_z}}", ""))) {
        dom_helpers.setAttribute(this[_el_3], "elevation", core.String._check(currVal_5));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.checked;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "checked", ""))) {
        dom_helpers.updateClassBinding(this[_el_5], "under-checked", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.hasFocus;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "hasFocus", ""))) {
        dom_helpers.updateClassBinding(this[_el_5], "under-focus", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = interpolate.interpolate0(_ctx.shadow_z);
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "{{shadow_z}}", ""))) {
        dom_helpers.setAttribute(this[_el_6], "elevation", core.String._check(currVal_8));
        this[_expr_8] = currVal_8;
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.hasFocus = false;
    }
    [_handleEvent_1]($36event) {
      let _ctx = this.ctx;
      _ctx.hasFocus = true;
    }
    [_handleEvent_2]($36event) {
      let _ctx = this.ctx;
      _ctx.isHovered = true;
    }
    [_handleEvent_3]($36event) {
      let _ctx = this.ctx;
      _ctx.isHovered = false;
    }
    initComponentStyles() {
      let styles = material_toggle$46template.ViewMaterialToggleComponent0._componentStyles;
      if (styles == null) {
        material_toggle$46template.ViewMaterialToggleComponent0._componentStyles = styles = material_toggle$46template.ViewMaterialToggleComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_toggle$46template.styles$MaterialToggleComponent, material_toggle$46template.ViewMaterialToggleComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_toggle$46template.ViewMaterialToggleComponent0.new = function(parentView, parentIndex) {
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
    this[_el_0] = null;
    this[_el_3] = null;
    this[_el_5] = null;
    this[_el_6] = null;
    material_toggle$46template.ViewMaterialToggleComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-toggle"));
    this.updateChildClassNonHtml(this.rootElement, "themeable");
  }).prototype = material_toggle$46template.ViewMaterialToggleComponent0.prototype;
  dart.addTypeTests(material_toggle$46template.ViewMaterialToggleComponent0);
  dart.setMethodSignature(material_toggle$46template.ViewMaterialToggleComponent0, () => ({
    __proto__: dart.getMethods(material_toggle$46template.ViewMaterialToggleComponent0.__proto__),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_2]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_3]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_toggle$46template.ViewMaterialToggleComponent0, "package:angular_components/material_toggle/material_toggle.template.dart");
  dart.setFieldSignature(material_toggle$46template.ViewMaterialToggleComponent0, () => ({
    __proto__: dart.getFields(material_toggle$46template.ViewMaterialToggleComponent0.__proto__),
    [_appEl_1]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.DivElement),
    [_el_5]: dart.fieldType(html.DivElement),
    [_el_6]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(material_toggle$46template.ViewMaterialToggleComponent0, {
    /*material_toggle$46template.ViewMaterialToggleComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _textBinding_1 = dart.privateName(material_toggle$46template, "_textBinding_1");
  material_toggle$46template._ViewMaterialToggleComponent1 = class _ViewMaterialToggleComponent1 extends embedded_view.EmbeddedView$(material_toggle.MaterialToggleComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "tgl-lbl");
      this.addShimC(html.HtmlElement._check(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.label));
    }
  };
  (material_toggle$46template._ViewMaterialToggleComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_toggle$46template._ViewMaterialToggleComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_toggle$46template._ViewMaterialToggleComponent1.prototype;
  dart.addTypeTests(material_toggle$46template._ViewMaterialToggleComponent1);
  dart.setMethodSignature(material_toggle$46template._ViewMaterialToggleComponent1, () => ({
    __proto__: dart.getMethods(material_toggle$46template._ViewMaterialToggleComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_toggle$46template._ViewMaterialToggleComponent1, "package:angular_components/material_toggle/material_toggle.template.dart");
  dart.setFieldSignature(material_toggle$46template._ViewMaterialToggleComponent1, () => ({
    __proto__: dart.getFields(material_toggle$46template._ViewMaterialToggleComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(text_binding.TextBinding)
  }));
  material_toggle$46template._ViewMaterialToggleComponentHost0 = class _ViewMaterialToggleComponentHost0 extends host_view.HostView$(material_toggle.MaterialToggleComponent) {
    build() {
      this.componentView = new material_toggle$46template.ViewMaterialToggleComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new material_toggle.MaterialToggleComponent.new(this.componentView, null);
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
      this.componentView.detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this.component.ngAfterViewInit();
        }
      }
    }
  };
  (material_toggle$46template._ViewMaterialToggleComponentHost0.new = function(injector) {
    material_toggle$46template._ViewMaterialToggleComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = material_toggle$46template._ViewMaterialToggleComponentHost0.prototype;
  dart.addTypeTests(material_toggle$46template._ViewMaterialToggleComponentHost0);
  dart.setMethodSignature(material_toggle$46template._ViewMaterialToggleComponentHost0, () => ({
    __proto__: dart.getMethods(material_toggle$46template._ViewMaterialToggleComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_toggle$46template._ViewMaterialToggleComponentHost0, "package:angular_components/material_toggle/material_toggle.template.dart");
  material_toggle$46template.viewFactory_MaterialToggleComponent1 = function viewFactory_MaterialToggleComponent1(parentView, parentIndex) {
    return new material_toggle$46template._ViewMaterialToggleComponent1.new(parentView, parentIndex);
  };
  material_toggle$46template.viewFactory_MaterialToggleComponentHost0 = function viewFactory_MaterialToggleComponentHost0(injector) {
    return new material_toggle$46template._ViewMaterialToggleComponentHost0.new(injector);
  };
  material_toggle$46template.initReflector = function initReflector() {
    if (dart.test(material_toggle$46template._visited)) {
      return;
    }
    material_toggle$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_toggle.MaterialToggleComponent), material_toggle$46template.MaterialToggleComponentNgFactory);
    angular$46template.initReflector();
    has_disabled$46template.initReflector();
    events$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.copyProperties(material_toggle$46template, {
    get MaterialToggleComponentNgFactory() {
      return material_toggle$46template._MaterialToggleComponentNgFactory;
    }
  });
  let C2;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C1;
  let C3;
  dart.defineLazy(material_toggle$46template, {
    /*material_toggle$46template.styles$MaterialToggleComponent*/get styles$MaterialToggleComponent() {
      return [material_toggle$46scss$46css$46shim.styles];
    },
    /*material_toggle$46template._MaterialToggleComponentNgFactory*/get _MaterialToggleComponentNgFactory() {
      return C1 || CT.C1;
    },
    /*material_toggle$46template.styles$MaterialToggleComponentHost*/get styles$MaterialToggleComponentHost() {
      return C3 || CT.C3;
    },
    /*material_toggle$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_toggle/material_toggle.template", {
    "package:angular_components/material_toggle/material_toggle.template.dart": material_toggle$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_toggle.template.dart"],"names":[],"mappings":"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","file":"material_toggle.template.ddc.js"}');
  // Exports:
  return {
    material_toggle__material_toggle$46template: material_toggle$46template
  };
});

//# sourceMappingURL=material_toggle.template.ddc.js.map

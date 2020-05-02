define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_tab/tab_button', 'packages/angular/angular.template', 'packages/angular_components/material_button/material_button_base.template', 'packages/angular_components/material_tab/tab_mixin.template', 'packages/angular_components/material_tab/tab_button.scss.css.shim'], function(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__angular_components__material_ripple__material_ripple$46template, packages__angular_components__material_ripple__material_ripple, packages__angular__src__runtime__interpolate, packages__angular_components__material_tab__tab_button, packages__angular__angular$46template, packages__angular_components__material_button__material_button_base$46template, packages__angular_components__material_tab__tab_mixin$46template, packages__angular_components__material_tab__tab_button$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__change_detection.src__runtime__check_binding;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const injector = packages__angular__src__core__change_detection__change_detection.src__di__injector__injector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_ripple$46template = packages__angular_components__material_ripple__material_ripple$46template.material_ripple__material_ripple$46template;
  const material_ripple = packages__angular_components__material_ripple__material_ripple.material_ripple__material_ripple;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const tab_button = packages__angular_components__material_tab__tab_button.material_tab__tab_button;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const material_button_base$46template = packages__angular_components__material_button__material_button_base$46template.material_button__material_button_base$46template;
  const tab_mixin$46template = packages__angular_components__material_tab__tab_mixin$46template.material_tab__tab_mixin$46template;
  const tab_button$46scss$46css$46shim = packages__angular_components__material_tab__tab_button$46scss$46css$46shim.material_tab__tab_button$46scss$46css$46shim;
  const tab_button$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  let ComponentFactoryOfTabButtonComponent = () => (ComponentFactoryOfTabButtonComponent = dart.constFn(component_factory.ComponentFactory$(tab_button.TabButtonComponent)))();
  let HostViewOfTabButtonComponent = () => (HostViewOfTabButtonComponent = dart.constFn(host_view.HostView$(tab_button.TabButtonComponent)))();
  let InjectorToHostViewOfTabButtonComponent = () => (InjectorToHostViewOfTabButtonComponent = dart.constFn(dart.fnType(HostViewOfTabButtonComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(tab_button$46template.viewFactory_TabButtonComponentHost0, InjectorToHostViewOfTabButtonComponent());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfTabButtonComponent().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "tab-button"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  });
  const _textBinding_1 = dart.privateName(tab_button$46template, "_textBinding_1");
  const _compView_2 = dart.privateName(tab_button$46template, "_compView_2");
  const _MaterialRippleComponent_2_5 = dart.privateName(tab_button$46template, "_MaterialRippleComponent_2_5");
  const _expr_0 = dart.privateName(tab_button$46template, "_expr_0");
  const _expr_1 = dart.privateName(tab_button$46template, "_expr_1");
  const _expr_2 = dart.privateName(tab_button$46template, "_expr_2");
  const _expr_3 = dart.privateName(tab_button$46template, "_expr_3");
  const _expr_4 = dart.privateName(tab_button$46template, "_expr_4");
  const _expr_5 = dart.privateName(tab_button$46template, "_expr_5");
  const _expr_6 = dart.privateName(tab_button$46template, "_expr_6");
  tab_button$46template.ViewTabButtonComponent0 = class ViewTabButtonComponent0 extends component_view.ComponentView$(tab_button.TabButtonComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_tab/tab_button.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "content");
      this.addShimC(_el_0);
      _el_0[$append](this[_textBinding_1].element);
      this[_compView_2] = new material_ripple$46template.ViewMaterialRippleComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootElement;
      parentRenderNode[$append](_el_2);
      this.addShimC(_el_2);
      this[_MaterialRippleComponent_2_5] = new material_ripple.MaterialRippleComponent.new(_el_2);
      this[_compView_2].create(this[_MaterialRippleComponent_2_5]);
      parentRenderNode[$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'handleClick')));
      parentRenderNode[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
      parentRenderNode[$addEventListener]("mousedown", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'onMouseDown')));
      parentRenderNode[$addEventListener]("mouseup", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'onMouseUp')));
      parentRenderNode[$addEventListener]("focus", this.eventHandler1(html.Event, html.UIEvent, dart.bind(_ctx, 'onFocus')));
      parentRenderNode[$addEventListener]("blur", this.eventHandler1(html.Event, html.UIEvent, dart.bind(_ctx, 'onBlur')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.label));
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      this[_compView_2].destroyInternalState();
      this[_MaterialRippleComponent_2_5].ngOnDestroy();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.tabIndex;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "tabindex", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.ariaRole;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "role", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabledStr;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "aria-disabled", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "is-disabled", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.hostClassFocus;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "focus", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.hostClassActive;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "active", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.hostDisabled;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "disabled", currVal_6);
        this[_expr_6] = currVal_6;
      }
    }
    initComponentStyles() {
      let styles = tab_button$46template.ViewTabButtonComponent0._componentStyles;
      if (styles == null) {
        tab_button$46template.ViewTabButtonComponent0._componentStyles = styles = tab_button$46template.ViewTabButtonComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(tab_button$46template.styles$TabButtonComponent, tab_button$46template.ViewTabButtonComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (tab_button$46template.ViewTabButtonComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_compView_2] = null;
    this[_MaterialRippleComponent_2_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    tab_button$46template.ViewTabButtonComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("tab-button"));
  }).prototype = tab_button$46template.ViewTabButtonComponent0.prototype;
  dart.addTypeTests(tab_button$46template.ViewTabButtonComponent0);
  dart.setMethodSignature(tab_button$46template.ViewTabButtonComponent0, () => ({
    __proto__: dart.getMethods(tab_button$46template.ViewTabButtonComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(tab_button$46template.ViewTabButtonComponent0, "package:angular_components/material_tab/tab_button.template.dart");
  dart.setFieldSignature(tab_button$46template.ViewTabButtonComponent0, () => ({
    __proto__: dart.getFields(tab_button$46template.ViewTabButtonComponent0.__proto__),
    [_textBinding_1]: dart.finalFieldType(text_binding.TextBinding),
    [_compView_2]: dart.fieldType(material_ripple$46template.ViewMaterialRippleComponent0),
    [_MaterialRippleComponent_2_5]: dart.fieldType(material_ripple.MaterialRippleComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(tab_button$46template.ViewTabButtonComponent0, {
    /*tab_button$46template.ViewTabButtonComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  tab_button$46template._ViewTabButtonComponentHost0 = class _ViewTabButtonComponentHost0 extends host_view.HostView$(tab_button.TabButtonComponent) {
    build() {
      this.componentView = new tab_button$46template.ViewTabButtonComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new tab_button.TabButtonComponent.new(_el_0);
      this.initRootNode(_el_0);
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
  (tab_button$46template._ViewTabButtonComponentHost0.new = function(injector) {
    tab_button$46template._ViewTabButtonComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = tab_button$46template._ViewTabButtonComponentHost0.prototype;
  dart.addTypeTests(tab_button$46template._ViewTabButtonComponentHost0);
  dart.setMethodSignature(tab_button$46template._ViewTabButtonComponentHost0, () => ({
    __proto__: dart.getMethods(tab_button$46template._ViewTabButtonComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(tab_button$46template._ViewTabButtonComponentHost0, "package:angular_components/material_tab/tab_button.template.dart");
  tab_button$46template.viewFactory_TabButtonComponentHost0 = function viewFactory_TabButtonComponentHost0(injector) {
    return new tab_button$46template._ViewTabButtonComponentHost0.new(injector);
  };
  tab_button$46template.initReflector = function initReflector() {
    if (dart.test(tab_button$46template._visited)) {
      return;
    }
    tab_button$46template._visited = true;
    reflector.registerComponent(dart.wrapType(tab_button.TabButtonComponent), tab_button$46template.TabButtonComponentNgFactory);
    angular$46template.initReflector();
    material_button_base$46template.initReflector();
    material_ripple$46template.initReflector();
    tab_mixin$46template.initReflector();
  };
  dart.copyProperties(tab_button$46template, {
    get TabButtonComponentNgFactory() {
      return tab_button$46template._TabButtonComponentNgFactory;
    }
  });
  let C1;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C0;
  let C2;
  dart.defineLazy(tab_button$46template, {
    /*tab_button$46template.styles$TabButtonComponent*/get styles$TabButtonComponent() {
      return [tab_button$46scss$46css$46shim.styles];
    },
    /*tab_button$46template._TabButtonComponentNgFactory*/get _TabButtonComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*tab_button$46template.styles$TabButtonComponentHost*/get styles$TabButtonComponentHost() {
      return C2 || CT.C2;
    },
    /*tab_button$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_tab/tab_button.template", {
    "package:angular_components/material_tab/tab_button.template.dart": tab_button$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tab_button.template.dart"],"names":[],"mappings":"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","file":"tab_button.template.ddc.js"}');
  // Exports:
  return {
    material_tab__tab_button$46template: tab_button$46template
  };
});

//# sourceMappingURL=tab_button.template.ddc.js.map

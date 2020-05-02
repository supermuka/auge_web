define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_datepicker/next_prev_buttons', 'packages/angular/angular.template', 'packages/angular_components/src/material_datepicker/sequential.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/material_datepicker/next_prev_buttons.scss.css.shim'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular__src__runtime__interpolate, packages__angular_components__material_datepicker__next_prev_buttons, packages__angular__angular$46template, packages__angular_components__src__material_datepicker__sequential$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__material_datepicker__next_prev_buttons$46scss$46css$46shim) {
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
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const next_prev_buttons = packages__angular_components__material_datepicker__next_prev_buttons.material_datepicker__next_prev_buttons;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const sequential$46template = packages__angular_components__src__material_datepicker__sequential$46template.src__material_datepicker__sequential$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const next_prev_buttons$46scss$46css$46shim = packages__angular_components__material_datepicker__next_prev_buttons$46scss$46css$46shim.material_datepicker__next_prev_buttons$46scss$46css$46shim;
  const next_prev_buttons$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  let ComponentFactoryOfNextPrevComponent = () => (ComponentFactoryOfNextPrevComponent = dart.constFn(component_factory.ComponentFactory$(next_prev_buttons.NextPrevComponent)))();
  let HostViewOfNextPrevComponent = () => (HostViewOfNextPrevComponent = dart.constFn(host_view.HostView$(next_prev_buttons.NextPrevComponent)))();
  let InjectorToHostViewOfNextPrevComponent = () => (InjectorToHostViewOfNextPrevComponent = dart.constFn(dart.fnType(HostViewOfNextPrevComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(next_prev_buttons$46template.viewFactory_NextPrevComponentHost0, InjectorToHostViewOfNextPrevComponent());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfNextPrevComponent().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "next-prev-buttons"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  });
  const _compView_1 = dart.privateName(next_prev_buttons$46template, "_compView_1");
  const _MaterialIconComponent_1_5 = dart.privateName(next_prev_buttons$46template, "_MaterialIconComponent_1_5");
  const _compView_4 = dart.privateName(next_prev_buttons$46template, "_compView_4");
  const _MaterialIconComponent_4_5 = dart.privateName(next_prev_buttons$46template, "_MaterialIconComponent_4_5");
  const _expr_0 = dart.privateName(next_prev_buttons$46template, "_expr_0");
  const _expr_1 = dart.privateName(next_prev_buttons$46template, "_expr_1");
  const _expr_2 = dart.privateName(next_prev_buttons$46template, "_expr_2");
  const _expr_3 = dart.privateName(next_prev_buttons$46template, "_expr_3");
  const _expr_5 = dart.privateName(next_prev_buttons$46template, "_expr_5");
  const _expr_6 = dart.privateName(next_prev_buttons$46template, "_expr_6");
  const _expr_7 = dart.privateName(next_prev_buttons$46template, "_expr_7");
  const _expr_8 = dart.privateName(next_prev_buttons$46template, "_expr_8");
  const _el_0 = dart.privateName(next_prev_buttons$46template, "_el_0");
  const _el_1 = dart.privateName(next_prev_buttons$46template, "_el_1");
  const _el_3 = dart.privateName(next_prev_buttons$46template, "_el_3");
  const _el_4 = dart.privateName(next_prev_buttons$46template, "_el_4");
  next_prev_buttons$46template.ViewNextPrevComponent0 = class ViewNextPrevComponent0 extends component_view.ComponentView$(next_prev_buttons.NextPrevComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/next_prev_buttons.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = html.ButtonElement._check(dom_helpers.appendElement(doc, parentRenderNode, "button"));
      this.updateChildClass(this[_el_0], "prev");
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootElement;
      this[_el_0][$append](this[_el_1]);
      dom_helpers.setAttribute(this[_el_1], "icon", "navigate_before");
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_compView_1].create(this[_MaterialIconComponent_1_5]);
      let _text_2 = dom_helpers.appendText(parentRenderNode, "\n");
      this[_el_3] = html.ButtonElement._check(dom_helpers.appendElement(doc, parentRenderNode, "button"));
      this.updateChildClass(this[_el_3], "next");
      this.addShimC(this[_el_3]);
      this[_compView_4] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootElement;
      this[_el_3][$append](this[_el_4]);
      dom_helpers.setAttribute(this[_el_4], "icon", "navigate_next");
      this.addShimC(html.HtmlElement._check(this[_el_4]));
      this[_MaterialIconComponent_4_5] = new material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_4]));
      this[_compView_4].create(this[_MaterialIconComponent_4_5]);
      this[_el_0][$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'prev')));
      this[_el_3][$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'next')));
      parentRenderNode[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'stopPropagation')));
      parentRenderNode[$addEventListener]("keypress", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'stopPropagation')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialIconComponent_1_5].icon = "navigate_before";
        changed = true;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialIconComponent_4_5].icon = "navigate_next";
        changed = true;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      let currVal_0 = _ctx.isPrevDisabled;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "isPrevDisabled", ""))) {
        dom_helpers.updateClassBinding(this[_el_0], "disabled", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = interpolate.interpolate0(_ctx.isPrevDisabled);
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "{{isPrevDisabled}}", ""))) {
        dom_helpers.setAttribute(this[_el_0], "aria-disabled", core.String._check(currVal_1));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = interpolate.interpolate0(dart.test(_ctx.isPrevDisabled) ? 0 - 1 : 0);
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "{{isPrevDisabled ? -1 : 0}}", ""))) {
        dom_helpers.setAttribute(this[_el_0], "tabindex", core.String._check(currVal_2));
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.prevLabel;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "prevLabel", ""))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-label", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_5 = _ctx.isNextDisabled;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "isNextDisabled", ""))) {
        dom_helpers.updateClassBinding(this[_el_3], "disabled", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = interpolate.interpolate0(_ctx.isNextDisabled);
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "{{isNextDisabled}}", ""))) {
        dom_helpers.setAttribute(this[_el_3], "aria-disabled", core.String._check(currVal_6));
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = interpolate.interpolate0(dart.test(_ctx.isNextDisabled) ? 0 - 1 : 0);
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "{{isNextDisabled ? -1 : 0}}", ""))) {
        dom_helpers.setAttribute(this[_el_3], "tabindex", core.String._check(currVal_7));
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.nextLabel;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "nextLabel", ""))) {
        dom_helpers.updateAttribute(this[_el_4], "aria-label", currVal_8);
        this[_expr_8] = currVal_8;
      }
      this[_compView_1].detectChanges();
      this[_compView_4].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
      this[_compView_4].destroyInternalState();
    }
    initComponentStyles() {
      let styles = next_prev_buttons$46template.ViewNextPrevComponent0._componentStyles;
      if (styles == null) {
        next_prev_buttons$46template.ViewNextPrevComponent0._componentStyles = styles = next_prev_buttons$46template.ViewNextPrevComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(next_prev_buttons$46template.styles$NextPrevComponent, next_prev_buttons$46template.ViewNextPrevComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (next_prev_buttons$46template.ViewNextPrevComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_compView_4] = null;
    this[_MaterialIconComponent_4_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    this[_el_4] = null;
    next_prev_buttons$46template.ViewNextPrevComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("next-prev-buttons"));
  }).prototype = next_prev_buttons$46template.ViewNextPrevComponent0.prototype;
  dart.addTypeTests(next_prev_buttons$46template.ViewNextPrevComponent0);
  dart.setMethodSignature(next_prev_buttons$46template.ViewNextPrevComponent0, () => ({
    __proto__: dart.getMethods(next_prev_buttons$46template.ViewNextPrevComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(next_prev_buttons$46template.ViewNextPrevComponent0, "package:angular_components/material_datepicker/next_prev_buttons.template.dart");
  dart.setFieldSignature(next_prev_buttons$46template.ViewNextPrevComponent0, () => ({
    __proto__: dart.getFields(next_prev_buttons$46template.ViewNextPrevComponent0.__proto__),
    [_compView_1]: dart.fieldType(material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon.MaterialIconComponent),
    [_compView_4]: dart.fieldType(material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_4_5]: dart.fieldType(material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.ButtonElement),
    [_el_1]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.ButtonElement),
    [_el_4]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(next_prev_buttons$46template.ViewNextPrevComponent0, {
    /*next_prev_buttons$46template.ViewNextPrevComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  next_prev_buttons$46template._ViewNextPrevComponentHost0 = class _ViewNextPrevComponentHost0 extends host_view.HostView$(next_prev_buttons.NextPrevComponent) {
    build() {
      this.componentView = new next_prev_buttons$46template.ViewNextPrevComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new next_prev_buttons.NextPrevComponent.new(this.componentView);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      this.componentView.detectChanges();
    }
    destroyInternal() {
      this.componentView.destroyInternalState();
      this.component.ngOnDestroy();
    }
  };
  (next_prev_buttons$46template._ViewNextPrevComponentHost0.new = function(injector) {
    next_prev_buttons$46template._ViewNextPrevComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = next_prev_buttons$46template._ViewNextPrevComponentHost0.prototype;
  dart.addTypeTests(next_prev_buttons$46template._ViewNextPrevComponentHost0);
  dart.setMethodSignature(next_prev_buttons$46template._ViewNextPrevComponentHost0, () => ({
    __proto__: dart.getMethods(next_prev_buttons$46template._ViewNextPrevComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(next_prev_buttons$46template._ViewNextPrevComponentHost0, "package:angular_components/material_datepicker/next_prev_buttons.template.dart");
  next_prev_buttons$46template.viewFactory_NextPrevComponentHost0 = function viewFactory_NextPrevComponentHost0(injector) {
    return new next_prev_buttons$46template._ViewNextPrevComponentHost0.new(injector);
  };
  next_prev_buttons$46template.initReflector = function initReflector() {
    if (dart.test(next_prev_buttons$46template._visited)) {
      return;
    }
    next_prev_buttons$46template._visited = true;
    reflector.registerComponent(dart.wrapType(next_prev_buttons.NextPrevComponent), next_prev_buttons$46template.NextPrevComponentNgFactory);
    angular$46template.initReflector();
    material_icon$46template.initReflector();
    sequential$46template.initReflector();
    sequential$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(next_prev_buttons$46template, {
    get NextPrevComponentNgFactory() {
      return next_prev_buttons$46template._NextPrevComponentNgFactory;
    }
  });
  let C1;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C0;
  let C2;
  dart.defineLazy(next_prev_buttons$46template, {
    /*next_prev_buttons$46template.styles$NextPrevComponent*/get styles$NextPrevComponent() {
      return [next_prev_buttons$46scss$46css$46shim.styles];
    },
    /*next_prev_buttons$46template._NextPrevComponentNgFactory*/get _NextPrevComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*next_prev_buttons$46template.styles$NextPrevComponentHost*/get styles$NextPrevComponentHost() {
      return C2 || CT.C2;
    },
    /*next_prev_buttons$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_datepicker/next_prev_buttons.template", {
    "package:angular_components/material_datepicker/next_prev_buttons.template.dart": next_prev_buttons$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["next_prev_buttons.template.dart"],"names":[],"mappings":"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","file":"next_prev_buttons.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__next_prev_buttons$46template: next_prev_buttons$46template
  };
});

//# sourceMappingURL=next_prev_buttons.template.ddc.js.map

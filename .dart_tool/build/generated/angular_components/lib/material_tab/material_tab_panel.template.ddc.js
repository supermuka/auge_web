define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_tab/fixed_material_tab_strip.template', 'packages/angular_components/material_tab/fixed_material_tab_strip', 'packages/angular_components/material_tab/tab_change_event', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_tab/material_tab_panel', 'packages/angular_components/material_tab/material_tab', 'packages/angular/angular.template', 'packages/angular_components/material_tab/material_tab.template', 'packages/angular_components/material_tab/tab_change_event.template', 'packages/angular_components/material_tab/material_tab_panel.scss.css.shim'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_tab__fixed_material_tab_strip$46template, packages__angular_components__material_tab__fixed_material_tab_strip, packages__angular_components__material_tab__tab_change_event, packages__angular__src__bootstrap__modules, packages__angular_components__material_tab__material_tab_panel, packages__angular_components__material_tab__material_tab, packages__angular__angular$46template, packages__angular_components__material_tab__material_tab$46template, packages__angular_components__material_tab__tab_change_event$46template, packages__angular_components__material_tab__material_tab_panel$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const check_binding = packages__angular__src__core__change_detection__change_detection.src__runtime__check_binding;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const injector = packages__angular__src__core__change_detection__change_detection.src__di__injector__injector;
  const fixed_material_tab_strip$46template = packages__angular_components__material_tab__fixed_material_tab_strip$46template.material_tab__fixed_material_tab_strip$46template;
  const fixed_material_tab_strip = packages__angular_components__material_tab__fixed_material_tab_strip.material_tab__fixed_material_tab_strip;
  const tab_change_event = packages__angular_components__material_tab__tab_change_event.material_tab__tab_change_event;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_tab_panel = packages__angular_components__material_tab__material_tab_panel.material_tab__material_tab_panel;
  const material_tab = packages__angular_components__material_tab__material_tab.material_tab__material_tab;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const material_tab$46template = packages__angular_components__material_tab__material_tab$46template.material_tab__material_tab$46template;
  const tab_change_event$46template = packages__angular_components__material_tab__tab_change_event$46template.material_tab__tab_change_event$46template;
  const material_tab_panel$46scss$46css$46shim = packages__angular_components__material_tab__material_tab_panel$46scss$46css$46shim.material_tab__material_tab_panel$46scss$46css$46shim;
  const material_tab_panel$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let VoidToFixedMaterialTabStripComponent = () => (VoidToFixedMaterialTabStripComponent = dart.constFn(dart.fnType(fixed_material_tab_strip.FixedMaterialTabStripComponent, [])))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let JSArrayOfTab = () => (JSArrayOfTab = dart.constFn(_interceptors.JSArray$(material_tab.Tab)))();
  let ComponentFactoryOfMaterialTabPanelComponent = () => (ComponentFactoryOfMaterialTabPanelComponent = dart.constFn(component_factory.ComponentFactory$(material_tab_panel.MaterialTabPanelComponent)))();
  let HostViewOfMaterialTabPanelComponent = () => (HostViewOfMaterialTabPanelComponent = dart.constFn(host_view.HostView$(material_tab_panel.MaterialTabPanelComponent)))();
  let InjectorToHostViewOfMaterialTabPanelComponent = () => (InjectorToHostViewOfMaterialTabPanelComponent = dart.constFn(dart.fnType(HostViewOfMaterialTabPanelComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "isRtl"
      });
    },
    get C2() {
      return C2 = dart.fn(material_tab_panel$46template.viewFactory_MaterialTabPanelComponentHost0, InjectorToHostViewOfMaterialTabPanelComponent());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ComponentFactoryOfMaterialTabPanelComponent().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-tab-panel"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(material_tab_panel$46template, "_compView_0");
  const _FixedMaterialTabStripComponent_0_5 = dart.privateName(material_tab_panel$46template, "_FixedMaterialTabStripComponent_0_5");
  const _expr_0 = dart.privateName(material_tab_panel$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_tab_panel$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_tab_panel$46template, "_expr_2");
  const OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  let C0;
  material_tab_panel$46template.ViewMaterialTabPanelComponent0 = class ViewMaterialTabPanelComponent0 extends component_view.ComponentView$(material_tab_panel.MaterialTabPanelComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_tab/material_tab_panel.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      this[_compView_0] = new fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_FixedMaterialTabStripComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(fixed_material_tab_strip.FixedMaterialTabStripComponent, dart.wrapType(fixed_material_tab_strip.FixedMaterialTabStripComponent), dart.fn(() => new fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this[_compView_0], core.bool._check(this.parentView.injectorGetOptional(C0 || CT.C0, this.parentIndex)), ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex))), VoidToFixedMaterialTabStripComponent())) : new fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this[_compView_0], core.bool._check(this.parentView.injectorGetOptional(C0 || CT.C0, this.parentIndex)), ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)));
      this[_compView_0].create(this[_FixedMaterialTabStripComponent_0_5]);
      this.project(parentRenderNode, 0);
      let subscription_0 = this[_FixedMaterialTabStripComponent_0_5].beforeTabChange.listen(this.eventHandler1(tab_change_event.TabChangeEvent, tab_change_event.TabChangeEvent, dart.bind(_ctx, 'onBeforeTabChange')));
      let subscription_1 = this[_FixedMaterialTabStripComponent_0_5].tabChange.listen(this.eventHandler1(tab_change_event.TabChangeEvent, tab_change_event.TabChangeEvent, dart.bind(_ctx, 'onTabChange')));
      this.initSubscriptions(JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      let currVal_0 = _ctx.tabIds;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "tabIds", ""))) {
        this[_FixedMaterialTabStripComponent_0_5].tabIds = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.activeTabIndex;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "activeTabIndex", ""))) {
        this[_FixedMaterialTabStripComponent_0_5].activeTabIndex = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.tabLabels;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "tabLabels", ""))) {
        this[_FixedMaterialTabStripComponent_0_5].tabLabels = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_FixedMaterialTabStripComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
    initComponentStyles() {
      let styles = material_tab_panel$46template.ViewMaterialTabPanelComponent0._componentStyles;
      if (styles == null) {
        material_tab_panel$46template.ViewMaterialTabPanelComponent0._componentStyles = styles = material_tab_panel$46template.ViewMaterialTabPanelComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_tab_panel$46template.styles$MaterialTabPanelComponent, material_tab_panel$46template.ViewMaterialTabPanelComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_tab_panel$46template.ViewMaterialTabPanelComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FixedMaterialTabStripComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    material_tab_panel$46template.ViewMaterialTabPanelComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-tab-panel"));
    this.updateChildClassNonHtml(this.rootElement, "themeable");
  }).prototype = material_tab_panel$46template.ViewMaterialTabPanelComponent0.prototype;
  dart.addTypeTests(material_tab_panel$46template.ViewMaterialTabPanelComponent0);
  dart.setMethodSignature(material_tab_panel$46template.ViewMaterialTabPanelComponent0, () => ({
    __proto__: dart.getMethods(material_tab_panel$46template.ViewMaterialTabPanelComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_tab_panel$46template.ViewMaterialTabPanelComponent0, "package:angular_components/material_tab/material_tab_panel.template.dart");
  dart.setFieldSignature(material_tab_panel$46template.ViewMaterialTabPanelComponent0, () => ({
    __proto__: dart.getFields(material_tab_panel$46template.ViewMaterialTabPanelComponent0.__proto__),
    [_compView_0]: dart.fieldType(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0),
    [_FixedMaterialTabStripComponent_0_5]: dart.fieldType(fixed_material_tab_strip.FixedMaterialTabStripComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.int),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_tab_panel$46template.ViewMaterialTabPanelComponent0, {
    /*material_tab_panel$46template.ViewMaterialTabPanelComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  material_tab_panel$46template._ViewMaterialTabPanelComponentHost0 = class _ViewMaterialTabPanelComponentHost0 extends host_view.HostView$(material_tab_panel.MaterialTabPanelComponent) {
    build() {
      this.componentView = new material_tab_panel$46template.ViewMaterialTabPanelComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new material_tab_panel.MaterialTabPanelComponent.new(this.componentView);
      this.component.tabs = JSArrayOfTab().of([]);
      this.initRootNode(_el_0);
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
  };
  (material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.new = function(injector) {
    material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.prototype;
  dart.addTypeTests(material_tab_panel$46template._ViewMaterialTabPanelComponentHost0);
  dart.setMethodSignature(material_tab_panel$46template._ViewMaterialTabPanelComponentHost0, () => ({
    __proto__: dart.getMethods(material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_tab_panel$46template._ViewMaterialTabPanelComponentHost0, "package:angular_components/material_tab/material_tab_panel.template.dart");
  material_tab_panel$46template.viewFactory_MaterialTabPanelComponentHost0 = function viewFactory_MaterialTabPanelComponentHost0(injector) {
    return new material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.new(injector);
  };
  material_tab_panel$46template.initReflector = function initReflector() {
    if (dart.test(material_tab_panel$46template._visited)) {
      return;
    }
    material_tab_panel$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_tab_panel.MaterialTabPanelComponent), material_tab_panel$46template.MaterialTabPanelComponentNgFactory);
    angular$46template.initReflector();
    fixed_material_tab_strip$46template.initReflector();
    material_tab$46template.initReflector();
    tab_change_event$46template.initReflector();
  };
  dart.copyProperties(material_tab_panel$46template, {
    get MaterialTabPanelComponentNgFactory() {
      return material_tab_panel$46template._MaterialTabPanelComponentNgFactory;
    }
  });
  let C2;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C1;
  let C3;
  dart.defineLazy(material_tab_panel$46template, {
    /*material_tab_panel$46template.styles$MaterialTabPanelComponent*/get styles$MaterialTabPanelComponent() {
      return [material_tab_panel$46scss$46css$46shim.styles];
    },
    /*material_tab_panel$46template._MaterialTabPanelComponentNgFactory*/get _MaterialTabPanelComponentNgFactory() {
      return C1 || CT.C1;
    },
    /*material_tab_panel$46template.styles$MaterialTabPanelComponentHost*/get styles$MaterialTabPanelComponentHost() {
      return C3 || CT.C3;
    },
    /*material_tab_panel$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_tab/material_tab_panel.template", {
    "package:angular_components/material_tab/material_tab_panel.template.dart": material_tab_panel$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_tab_panel.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4CI,uBAAgB,2BAAY,sEAAsE;IACpG;;AAIQ,iBAAY;AACQ,6BAAmB,AAAK;AAEqB,MAAlE,oBAAsB,gFAAoC,MAAM;AAC/D,kBAAa,AAAY;AACD,MAA9B,AAAiB,gBAAD,UAAQ,KAAK;AACT,MAApB,AAAK,cAAS,KAAK;AAKiN,MAJ/N,sDAA+C,2BAC9C,kFAAmC,wEAAgC,cAClD,gEAAoC,oCAAkB,AAAW,iDAAuE,0CAAmB,AAAW,4BAAqB,+BAAa,gEAEjN,gEAAoC,oCAAkB,AAAW,iDAAuE,0CAAmB,AAAW,4BAAqB,+BAAa;AACrJ,MAA5D,AAAY,yBAAY;AACI,MAAjC,AAAK,aAAQ,gBAAgB,EAAE;AACzB,2BAAsB,AAAoC,AAAgB,iEAAO,AAAK,qFAAmB,UAAL,IAAI;AACxG,2BAAsB,AAAoC,AAAU,2DAAO,AAAK,qFAAmB,UAAL,IAAI;AAChD,MAAxD,AAAK,uBAAkB,wCAAC,cAAc,EAAE,cAAc;IACxD;;AAIQ,iBAAY;AACb,oBAAU;AACV,uBAAkB;AACR,MAAf,UAAU;AACJ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,UAAU;AACC,QAAtD,AAAoC,mDAAS,SAAS;AAC7C,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,kBAAkB;AACC,QAA9D,AAAoC,2DAAiB,SAAS;AACrD,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,aAAa;AACC,QAAzD,AAAoC,sDAAY,SAAS;AAChD,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEa,MAA3B,AAAY;AACjB,qBAAc;AACZ,sBAAI,UAAU;AAC8C,UAArD,AAAoC;;;IAG/C;;AAIyC,MAAlC,AAAY;IACnB;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACqH,QAAxI,gFAAoB,SAAU,gFAA2C,2CAAO,gEAAkC;;AAExF,MAAxB,uBAAkB,MAAM;IAC/B;;+EA7E4C,YAAgB;IANhB;IACL;IACnC;IACA;IACA;AAEuE,0FAAM,UAAU,EAAE,WAAW;AAC5E,IAA1B,AAAK;AACkE,uBAAlE,wBAAsB,AAAS,8BAAc;AACyC,IAA3F,AAAK,6BAA6B;EACpC;;;;;;;;;;;;;;;;MAL+B,6EAAgB;;;;;;;AA8Fe,MAAvD,qBAAgB,qEAA+B,MAAM;AACpD,kBAAa,AAAc;AACqC,MAAjE,iBAAoB,qDAA+B;AAChC,MAAnB,AAAU,sBAAO;AACE,MAAxB,AAAK,kBAAa,KAAK;IACzB;;AAIO,oBAAU;AACV,uBAAkB;AACvB,UAAI,OAAO;AAC2B,QAA/B,AAAc;;AAErB,qBAAc;AACZ,sBAAI,UAAU;AACuB,UAA9B,AAAU;;;AAGe,MAA7B,AAAc;IACrB;;oFAxBsD;AAAY,+FAAM,QAAQ;;EAAC;;;;;;;iIA2B+B;AAChH,UAAO,2EAAoC,QAAQ;EACrD;;AAIE,kBAAI;AACF;;AAEa,IAAf,yCAAW;AAE4E,IAAvF,4BAAyB,6DAA2B;AAC/B,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AAlDE,YAAO;IACT;;;;;;;;MA7FoB,8DAAgC;YAAG,EAAS;;MA0FN,iEAAmC;;;MAKzE,kEAAoC;;;MAmCpD,sCAAQ;YAAG","file":"material_tab_panel.template.ddc.js"}');
  // Exports:
  return {
    material_tab__material_tab_panel$46template: material_tab_panel$46template
  };
});

//# sourceMappingURL=material_tab_panel.template.ddc.js.map

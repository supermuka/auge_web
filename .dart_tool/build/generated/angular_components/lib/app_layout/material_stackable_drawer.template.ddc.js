define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/app_layout/material_stackable_drawer', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/angular.template', 'packages/angular_components/app_layout/material_temporary_drawer.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/app_layout/material_stackable_drawer.scss.css.shim'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__angular_components__app_layout__material_stackable_drawer, packages__angular_components__content__deferred_content_aware, packages__angular__angular$46template, packages__angular_components__app_layout__material_temporary_drawer$46template, packages__angular_components__content__deferred_content_aware$46template, packages__angular_components__app_layout__material_stackable_drawer$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__change_detection.src__runtime__check_binding;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const injector = packages__angular__src__core__change_detection__change_detection.src__di__injector__injector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_stackable_drawer = packages__angular_components__app_layout__material_stackable_drawer.app_layout__material_stackable_drawer;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const material_temporary_drawer$46template = packages__angular_components__app_layout__material_temporary_drawer$46template.app_layout__material_temporary_drawer$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  const material_stackable_drawer$46scss$46css$46shim = packages__angular_components__app_layout__material_stackable_drawer$46scss$46css$46shim.app_layout__material_stackable_drawer$46scss$46css$46shim;
  const material_stackable_drawer$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  let VoidToMaterialStackableDrawerComponent = () => (VoidToMaterialStackableDrawerComponent = dart.constFn(dart.fnType(material_stackable_drawer.MaterialStackableDrawerComponent, [])))();
  let ComponentFactoryOfMaterialStackableDrawerComponent = () => (ComponentFactoryOfMaterialStackableDrawerComponent = dart.constFn(component_factory.ComponentFactory$(material_stackable_drawer.MaterialStackableDrawerComponent)))();
  let HostViewOfMaterialStackableDrawerComponent = () => (HostViewOfMaterialStackableDrawerComponent = dart.constFn(host_view.HostView$(material_stackable_drawer.MaterialStackableDrawerComponent)))();
  let InjectorToHostViewOfMaterialStackableDrawerComponent = () => (InjectorToHostViewOfMaterialStackableDrawerComponent = dart.constFn(dart.fnType(HostViewOfMaterialStackableDrawerComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(material_stackable_drawer$46template.viewFactory_MaterialStackableDrawerComponentHost0, InjectorToHostViewOfMaterialStackableDrawerComponent());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfMaterialStackableDrawerComponent().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-drawer[stackable]"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  });
  const _expr_0 = dart.privateName(material_stackable_drawer$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_stackable_drawer$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_stackable_drawer$46template, "_expr_2");
  const _el_0 = dart.privateName(material_stackable_drawer$46template, "_el_0");
  const _handleEvent_0 = dart.privateName(material_stackable_drawer$46template, "_handleEvent_0");
  material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0 = class ViewMaterialStackableDrawerComponent0 extends component_view.ComponentView$(material_stackable_drawer.MaterialStackableDrawerComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/app_layout/material_stackable_drawer.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "drawer-content");
      this.addShimC(this[_el_0]);
      this.project(this[_el_0], 0);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_0)));
      parentRenderNode[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'toggle')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.isExpanded;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "isExpanded", ""))) {
        dom_helpers.updateClassBinding(this[_el_0], "drawer-content-expanded", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    [_handleEvent_0]($36event) {
      dart.dsend($36event, 'stopPropagation', []);
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.hostMatDrawerCollapsed;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "mat-drawer-collapsed", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.hostMatDrawerExpanded;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "mat-drawer-expanded", currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    initComponentStyles() {
      let styles = material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._componentStyles;
      if (styles == null) {
        material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._componentStyles = styles = material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_stackable_drawer$46template.styles$MaterialStackableDrawerComponent, material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-drawer"));
  }).prototype = material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.prototype;
  dart.addTypeTests(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0);
  dart.setMethodSignature(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0, () => ({
    __proto__: dart.getMethods(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.__proto__),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0, "package:angular_components/app_layout/material_stackable_drawer.template.dart");
  dart.setFieldSignature(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0, () => ({
    __proto__: dart.getFields(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.__proto__),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0, {
    /*material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0 = class _ViewMaterialStackableDrawerComponentHost0 extends host_view.HostView$(material_stackable_drawer.MaterialStackableDrawerComponent) {
    build() {
      this.componentView = new material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_stackable_drawer.MaterialStackableDrawerComponent, dart.wrapType(material_stackable_drawer.MaterialStackableDrawerComponent), dart.fn(() => new material_stackable_drawer.MaterialStackableDrawerComponent.new(material_stackable_drawer.MaterialStackableDrawerComponent._check(this.injectorGetOptional(dart.wrapType(material_stackable_drawer.MaterialStackableDrawerComponent), this.parentIndex))), VoidToMaterialStackableDrawerComponent())) : new material_stackable_drawer.MaterialStackableDrawerComponent.new(material_stackable_drawer.MaterialStackableDrawerComponent._check(this.injectorGetOptional(dart.wrapType(material_stackable_drawer.MaterialStackableDrawerComponent), this.parentIndex)));
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_stackable_drawer.MaterialStackableDrawerComponent) || token === dart.wrapType(deferred_content_aware.DeferredContentAware)) && 0 === nodeIndex) {
        return this.component;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this.component.ngOnInit();
      }
      this.componentView.detectHostChanges(firstCheck);
      this.componentView.detectChanges();
    }
  };
  (material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.new = function(injector) {
    material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.prototype;
  dart.addTypeTests(material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0);
  dart.setMethodSignature(material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0, () => ({
    __proto__: dart.getMethods(material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0, "package:angular_components/app_layout/material_stackable_drawer.template.dart");
  material_stackable_drawer$46template.viewFactory_MaterialStackableDrawerComponentHost0 = function viewFactory_MaterialStackableDrawerComponentHost0(injector) {
    return new material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.new(injector);
  };
  material_stackable_drawer$46template.initReflector = function initReflector() {
    if (dart.test(material_stackable_drawer$46template._visited)) {
      return;
    }
    material_stackable_drawer$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_stackable_drawer.MaterialStackableDrawerComponent), material_stackable_drawer$46template.MaterialStackableDrawerComponentNgFactory);
    angular$46template.initReflector();
    material_temporary_drawer$46template.initReflector();
    deferred_content_aware$46template.initReflector();
  };
  dart.copyProperties(material_stackable_drawer$46template, {
    get MaterialStackableDrawerComponentNgFactory() {
      return material_stackable_drawer$46template._MaterialStackableDrawerComponentNgFactory;
    }
  });
  let C1;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C0;
  let C2;
  dart.defineLazy(material_stackable_drawer$46template, {
    /*material_stackable_drawer$46template.styles$MaterialStackableDrawerComponent*/get styles$MaterialStackableDrawerComponent() {
      return [material_stackable_drawer$46scss$46css$46shim.styles];
    },
    /*material_stackable_drawer$46template._MaterialStackableDrawerComponentNgFactory*/get _MaterialStackableDrawerComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*material_stackable_drawer$46template.styles$MaterialStackableDrawerComponentHost*/get styles$MaterialStackableDrawerComponentHost() {
      return C2 || CT.C2;
    },
    /*material_stackable_drawer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/app_layout/material_stackable_drawer.template", {
    "package:angular_components/app_layout/material_stackable_drawer.template.dart": material_stackable_drawer$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_stackable_drawer.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAuCI,uBAAgB,2BAAY,2EAA2E;IACzG;;AAIQ,iBAAY;AACQ,6BAAmB,AAAK;AAC5C,gBAAc;AACiC,MAAhD,cAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACD,MAAnD,AAAK,sBAAsB,aAAO;AACT,MAAzB,AAAK,cAAc;AACQ,MAA3B,AAAK,aAAa,aAAO;AACoD,MAAxE,AAAM,+BAAiB,SAAS,AAAK,qDAAmB;AACc,MAA3E,AAAiB,gBAAD,oBAAkB,SAAS,AAAK,+BAAmB,UAAL,IAAI;IACpE;;AAIQ,iBAAY;AACZ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,cAAc;AACc,QAA5E,+BAAgC,aAAO,2BAA2B,SAAS;AACnD,QAAnB,gBAAU,SAAS;;IAE5B;qBAEoB;AACM,MAAjB,WAAP;IACF;sBAE4B;AACpB,iBAAY;AACZ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACgC,QAAtF,sCAAuC,kBAAa,wBAAwB,SAAS;AAC7D,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AAC+B,QAArF,sCAAuC,kBAAa,uBAAuB,SAAS;AAC5D,QAAnB,gBAAU,SAAS;;IAE5B;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC4H,QAA/I,8FAAoB,SAAU,8FAA2C,2CAAO,8EAAyC;;AAE/F,MAAxB,uBAAkB,MAAM;IAC/B;;6FAxDmD,YAAgB;IAL9D;IACA;IACA;IACc;AAE+D,wGAAM,UAAU,EAAE,WAAW;AACnF,IAA1B,AAAK;AAC+D,uBAA/D,wBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;;;;MAJ+B,2FAAgB;;;;;;;AAyEsB,MAA9D,qBAAgB,mFAAsC,MAAM;AAC3D,kBAAa,AAAc;AAKoG,MAJhI,2BAAqB,2BACpB,qFAAmC,2EAAkC,cACpD,qIAAiC,AAAK,yBAA4B,2EAAuC,kEAElH,qIAAiC,AAAK,yBAA4B,2EAAuC;AAC/F,MAAxB,AAAK,kBAAa,KAAK;IACzB;wBAGoC,OAAW,WAAmB;AAChE,WAAM,AAAU,KAAK,KAAU,6EAAqC,AAAU,KAAK,KAAW,+DAA2B,AAAE,MAAG,SAAS;AACrI,cAAY;;AAEd,YAAO,eAAc;IACvB;;AAIO,uBAAkB;AACvB,qBAAe,gDAAwB,UAAU;AACtB,QAApB,AAAU;;AAE+B,MAA3C,AAAc,qCAAkB,UAAU;AACb,MAA7B,AAAc;IACrB;;kGA9B6D;AAAY,6GAAM,QAAQ;;EAAC;;;;;;;;sJAiCsC;AAC9H,UAAO,yFAA2C,QAAQ;EAC5D;;AAIE,kBAAI;AACF;;AAEa,IAAf,gDAAW;AAE0F,IAArG,4BAAyB,2EAAkC;AACtC,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AAvDE,YAAO;IACT;;;;;;;;MAvEoB,4EAAuC;YAAG,EAAS;;MAoEN,+EAA0C;;;MAKvF,gFAA2C;;;MAyC3D,6CAAQ;YAAG","file":"material_stackable_drawer.template.ddc.js"}');
  // Exports:
  return {
    app_layout__material_stackable_drawer$46template: material_stackable_drawer$46template
  };
});

//# sourceMappingURL=material_stackable_drawer.template.ddc.js.map

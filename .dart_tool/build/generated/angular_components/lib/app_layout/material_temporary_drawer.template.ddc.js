define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/app_layout/material_temporary_drawer', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/app_layout/material_drawer_base.template', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/app_layout/material_temporary_drawer.scss.css.shim'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__angular_components__app_layout__material_temporary_drawer, packages__angular_components__content__deferred_content_aware, packages__angular_components__app_layout__material_drawer_base$46template, packages__angular__angular$46template, packages__angular_components__content__deferred_content_aware$46template, packages__angular_components__app_layout__material_temporary_drawer$46scss$46css$46shim) {
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
  const material_temporary_drawer = packages__angular_components__app_layout__material_temporary_drawer.app_layout__material_temporary_drawer;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_drawer_base$46template = packages__angular_components__app_layout__material_drawer_base$46template.app_layout__material_drawer_base$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  const material_temporary_drawer$46scss$46css$46shim = packages__angular_components__app_layout__material_temporary_drawer$46scss$46css$46shim.app_layout__material_temporary_drawer$46scss$46css$46shim;
  const material_temporary_drawer$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  let ComponentFactoryOfMaterialTemporaryDrawerComponent = () => (ComponentFactoryOfMaterialTemporaryDrawerComponent = dart.constFn(component_factory.ComponentFactory$(material_temporary_drawer.MaterialTemporaryDrawerComponent)))();
  let HostViewOfMaterialTemporaryDrawerComponent = () => (HostViewOfMaterialTemporaryDrawerComponent = dart.constFn(host_view.HostView$(material_temporary_drawer.MaterialTemporaryDrawerComponent)))();
  let InjectorToHostViewOfMaterialTemporaryDrawerComponent = () => (InjectorToHostViewOfMaterialTemporaryDrawerComponent = dart.constFn(dart.fnType(HostViewOfMaterialTemporaryDrawerComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(material_temporary_drawer$46template.viewFactory_MaterialTemporaryDrawerComponentHost0, InjectorToHostViewOfMaterialTemporaryDrawerComponent());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfMaterialTemporaryDrawerComponent().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-drawer[temporary]"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  });
  const _expr_0 = dart.privateName(material_temporary_drawer$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_temporary_drawer$46template, "_expr_1");
  const _handleEvent_0 = dart.privateName(material_temporary_drawer$46template, "_handleEvent_0");
  material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0 = class ViewMaterialTemporaryDrawerComponent0 extends component_view.ComponentView$(material_temporary_drawer.MaterialTemporaryDrawerComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/app_layout/material_temporary_drawer.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "drawer-content");
      this.addShimC(_el_0);
      this.project(_el_0, 0);
      _el_0[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_0)));
      parentRenderNode[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'toggle')));
    }
    [_handleEvent_0]($36event) {
      dart.dsend($36event, 'stopPropagation', []);
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.hostMatDrawerCollapsed;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "mat-drawer-collapsed", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.hostMatDrawerExpanded;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "mat-drawer-expanded", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    initComponentStyles() {
      let styles = material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._componentStyles;
      if (styles == null) {
        material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._componentStyles = styles = material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_temporary_drawer$46template.styles$MaterialTemporaryDrawerComponent, material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-drawer"));
  }).prototype = material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.prototype;
  dart.addTypeTests(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0);
  dart.setMethodSignature(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0, () => ({
    __proto__: dart.getMethods(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.__proto__),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0, "package:angular_components/app_layout/material_temporary_drawer.template.dart");
  dart.setFieldSignature(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0, () => ({
    __proto__: dart.getFields(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.__proto__),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0, {
    /*material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0 = class _ViewMaterialTemporaryDrawerComponentHost0 extends host_view.HostView$(material_temporary_drawer.MaterialTemporaryDrawerComponent) {
    build() {
      this.componentView = new material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new material_temporary_drawer.MaterialTemporaryDrawerComponent.new();
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_temporary_drawer.MaterialTemporaryDrawerComponent) || token === dart.wrapType(deferred_content_aware.DeferredContentAware)) && 0 === nodeIndex) {
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
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this.component.ngOnInit();
      }
      this.componentView.detectHostChanges(firstCheck);
      this.componentView.detectChanges();
    }
  };
  (material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.new = function(injector) {
    material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.prototype;
  dart.addTypeTests(material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0);
  dart.setMethodSignature(material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0, () => ({
    __proto__: dart.getMethods(material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0, "package:angular_components/app_layout/material_temporary_drawer.template.dart");
  material_temporary_drawer$46template.viewFactory_MaterialTemporaryDrawerComponentHost0 = function viewFactory_MaterialTemporaryDrawerComponentHost0(injector) {
    return new material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.new(injector);
  };
  material_temporary_drawer$46template.initReflector = function initReflector() {
    if (dart.test(material_temporary_drawer$46template._visited)) {
      return;
    }
    material_temporary_drawer$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_temporary_drawer.MaterialTemporaryDrawerComponent), material_temporary_drawer$46template.MaterialTemporaryDrawerComponentNgFactory);
    material_drawer_base$46template.initReflector();
    angular$46template.initReflector();
    deferred_content_aware$46template.initReflector();
  };
  dart.copyProperties(material_temporary_drawer$46template, {
    get MaterialTemporaryDrawerComponentNgFactory() {
      return material_temporary_drawer$46template._MaterialTemporaryDrawerComponentNgFactory;
    }
  });
  let C1;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C0;
  let C2;
  dart.defineLazy(material_temporary_drawer$46template, {
    /*material_temporary_drawer$46template.styles$MaterialTemporaryDrawerComponent*/get styles$MaterialTemporaryDrawerComponent() {
      return [material_temporary_drawer$46scss$46css$46shim.styles];
    },
    /*material_temporary_drawer$46template._MaterialTemporaryDrawerComponentNgFactory*/get _MaterialTemporaryDrawerComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*material_temporary_drawer$46template.styles$MaterialTemporaryDrawerComponentHost*/get styles$MaterialTemporaryDrawerComponentHost() {
      return C2 || CT.C2;
    },
    /*material_temporary_drawer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/app_layout/material_temporary_drawer.template", {
    "package:angular_components/app_layout/material_temporary_drawer.template.dart": material_temporary_drawer$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_temporary_drawer.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoCI,uBAAgB,2BAAY,2EAA2E;IACzG;;AAIQ,iBAAY;AACQ,6BAAmB,AAAK;AAC5C,gBAAc;AACd,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACP,MAA9C,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACG,MAAtB,AAAK,aAAQ,KAAK,EAAE;AACoD,MAAxE,AAAM,KAAD,oBAAkB,SAAS,AAAK,qDAAmB;AACmB,MAA3E,AAAiB,gBAAD,oBAAkB,SAAS,AAAK,+BAAmB,UAAL,IAAI;IACpE;qBAEoB;AACM,MAAjB,WAAP;IACF;sBAE4B;AACpB,iBAAY;AACZ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACgC,QAAtF,sCAAuC,kBAAa,wBAAwB,SAAS;AAC7D,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AAC+B,QAArF,sCAAuC,kBAAa,uBAAuB,SAAS;AAC5D,QAAnB,gBAAU,SAAS;;IAE5B;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC4H,QAA/I,8FAAoB,SAAU,8FAA2C,2CAAO,8EAAyC;;AAE/F,MAAxB,uBAAkB,MAAM;IAC/B;;6FA9CmD,YAAgB;IAH9D;IACA;AAE6E,wGAAM,UAAU,EAAE,WAAW;AACnF,IAA1B,AAAK;AAC+D,uBAA/D,wBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;;MAJ+B,2FAAgB;;;;;;;AA+DsB,MAA9D,qBAAgB,mFAAsC,MAAM;AAC3D,kBAAa,AAAc;AAC0B,MAAtD,iBAAoB;AACD,MAAxB,AAAK,kBAAa,KAAK;IACzB;wBAGoC,OAAW,WAAmB;AAChE,WAAM,AAAU,KAAK,KAAU,6EAAqC,AAAU,KAAK,KAAW,+DAA2B,AAAE,MAAG,SAAS;AACrI,cAAY;;AAEd,YAAO,eAAc;IACvB;;AAIO,oBAAU;AACV,uBAAkB;AACvB,UAAI,OAAO;AAC2B,QAA/B,AAAc;;AAErB,qBAAe,gDAAwB,UAAU;AACtB,QAApB,AAAU;;AAE+B,MAA3C,AAAc,qCAAkB,UAAU;AACb,MAA7B,AAAc;IACrB;;kGA9B6D;AAAY,6GAAM,QAAQ;;EAAC;;;;;;;;sJAiCsC;AAC9H,UAAO,yFAA2C,QAAQ;EAC5D;;AAIE,kBAAI;AACF;;AAEa,IAAf,gDAAW;AAE0F,IAArG,4BAAyB,2EAAkC;AACtC,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AAvDE,YAAO;IACT;;;;;;;;MA3DoB,4EAAuC;YAAG,EAAS;;MAwDN,+EAA0C;;;MAKvF,gFAA2C;;;MAyC3D,6CAAQ;YAAG","file":"material_temporary_drawer.template.ddc.js"}');
  // Exports:
  return {
    app_layout__material_temporary_drawer$46template: material_temporary_drawer$46template
  };
});

//# sourceMappingURL=material_temporary_drawer.template.ddc.js.map

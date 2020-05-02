define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/reorder_list/reorder_list', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular/angular.template', 'packages/angular_components/reorder_list/reorder_events.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/utils/keyboard/keyboard.template', 'packages/angular_components/reorder_list/reorder_list.scss.css.shim'], function(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__reorder_list__reorder_list, packages__angular__src__core__change_detection__directive_change_detector, packages__angular__angular$46template, packages__angular_components__reorder_list__reorder_events$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__utils__keyboard__keyboard$46template, packages__angular_components__reorder_list__reorder_list$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__change_detection.src__runtime__check_binding;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const injector = packages__angular__src__core__change_detection__change_detection.src__di__injector__injector;
  const reorder_list = packages__angular_components__reorder_list__reorder_list.reorder_list__reorder_list;
  const directive_change_detector = packages__angular__src__core__change_detection__directive_change_detector.src__core__change_detection__directive_change_detector;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const reorder_events$46template = packages__angular_components__reorder_list__reorder_events$46template.reorder_list__reorder_events$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const keyboard$46template = packages__angular_components__utils__keyboard__keyboard$46template.utils__keyboard__keyboard$46template;
  const reorder_list$46scss$46css$46shim = packages__angular_components__reorder_list__reorder_list$46scss$46css$46shim.reorder_list__reorder_list$46scss$46css$46shim;
  const reorder_list$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  let VoidToReorderListComponent = () => (VoidToReorderListComponent = dart.constFn(dart.fnType(reorder_list.ReorderListComponent, [])))();
  let JSArrayOfReorderItemDirective = () => (JSArrayOfReorderItemDirective = dart.constFn(_interceptors.JSArray$(reorder_list.ReorderItemDirective)))();
  let ComponentFactoryOfReorderListComponent = () => (ComponentFactoryOfReorderListComponent = dart.constFn(component_factory.ComponentFactory$(reorder_list.ReorderListComponent)))();
  let HostViewOfReorderListComponent = () => (HostViewOfReorderListComponent = dart.constFn(host_view.HostView$(reorder_list.ReorderListComponent)))();
  let InjectorToHostViewOfReorderListComponent = () => (InjectorToHostViewOfReorderListComponent = dart.constFn(dart.fnType(HostViewOfReorderListComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(reorder_list$46template.viewFactory_ReorderListComponentHost0, InjectorToHostViewOfReorderListComponent());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfReorderListComponent().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "reorder-list"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  });
  const _expr_0 = dart.privateName(reorder_list$46template, "_expr_0");
  const _expr_1 = dart.privateName(reorder_list$46template, "_expr_1");
  const _expr_2 = dart.privateName(reorder_list$46template, "_expr_2");
  const _el_1 = dart.privateName(reorder_list$46template, "_el_1");
  reorder_list$46template.ViewReorderListComponent0 = class ViewReorderListComponent0 extends component_view.ComponentView$(reorder_list.ReorderListComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/reorder_list/reorder_list.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      this.project(parentRenderNode, 0);
      let doc = html.document;
      this[_el_1] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_1], "placeholder");
      this.addShimC(this[_el_1]);
      this.project(this[_el_1], 1);
      _ctx.placeholder = this[_el_1];
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = !dart.test(_ctx.showPlaceholder);
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "!showPlaceholder", ""))) {
        dom_helpers.updateClassBinding(this[_el_1], "hidden", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.verticalItems;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "vertical", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.multiSelect;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "multiselect", currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    initComponentStyles() {
      let styles = reorder_list$46template.ViewReorderListComponent0._componentStyles;
      if (styles == null) {
        reorder_list$46template.ViewReorderListComponent0._componentStyles = styles = reorder_list$46template.ViewReorderListComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(reorder_list$46template.styles$ReorderListComponent, reorder_list$46template.ViewReorderListComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (reorder_list$46template.ViewReorderListComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_1] = null;
    reorder_list$46template.ViewReorderListComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("reorder-list"));
    this.updateChildClassNonHtml(this.rootElement, "themeable");
    dom_helpers.updateAttribute(this.rootElement, "role", "list");
  }).prototype = reorder_list$46template.ViewReorderListComponent0.prototype;
  dart.addTypeTests(reorder_list$46template.ViewReorderListComponent0);
  dart.setMethodSignature(reorder_list$46template.ViewReorderListComponent0, () => ({
    __proto__: dart.getMethods(reorder_list$46template.ViewReorderListComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(reorder_list$46template.ViewReorderListComponent0, "package:angular_components/reorder_list/reorder_list.template.dart");
  dart.setFieldSignature(reorder_list$46template.ViewReorderListComponent0, () => ({
    __proto__: dart.getFields(reorder_list$46template.ViewReorderListComponent0.__proto__),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_el_1]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(reorder_list$46template.ViewReorderListComponent0, {
    /*reorder_list$46template.ViewReorderListComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  reorder_list$46template._ViewReorderListComponentHost0 = class _ViewReorderListComponentHost0 extends host_view.HostView$(reorder_list.ReorderListComponent) {
    build() {
      this.componentView = new reorder_list$46template.ViewReorderListComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(reorder_list.ReorderListComponent, dart.wrapType(reorder_list.ReorderListComponent), dart.fn(() => new reorder_list.ReorderListComponent.new(ng_zone.NgZone._check(this.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex))), VoidToReorderListComponent())) : new reorder_list.ReorderListComponent.new(ng_zone.NgZone._check(this.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)));
      this.component.items = JSArrayOfReorderItemDirective().of([]);
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(reorder_list.ReorderListComponent) && 0 === nodeIndex) {
        return this.component;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      this.componentView.detectHostChanges(firstCheck);
      this.componentView.detectChanges();
    }
    destroyInternal() {
      this.componentView.destroyInternalState();
      this.component.ngOnDestroy();
    }
  };
  (reorder_list$46template._ViewReorderListComponentHost0.new = function(injector) {
    reorder_list$46template._ViewReorderListComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = reorder_list$46template._ViewReorderListComponentHost0.prototype;
  dart.addTypeTests(reorder_list$46template._ViewReorderListComponentHost0);
  dart.setMethodSignature(reorder_list$46template._ViewReorderListComponentHost0, () => ({
    __proto__: dart.getMethods(reorder_list$46template._ViewReorderListComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(reorder_list$46template._ViewReorderListComponentHost0, "package:angular_components/reorder_list/reorder_list.template.dart");
  const instance$ = dart.privateName(reorder_list$46template, "ReorderItemDirectiveNgCd.instance");
  reorder_list$46template.ReorderItemDirectiveNgCd = class ReorderItemDirectiveNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.hostDraggable;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, null, null))) {
        dom_helpers.updateAttribute(el, "draggable", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (reorder_list$46template.ReorderItemDirectiveNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$] = instance;
    ;
  }).prototype = reorder_list$46template.ReorderItemDirectiveNgCd.prototype;
  dart.addTypeTests(reorder_list$46template.ReorderItemDirectiveNgCd);
  dart.setMethodSignature(reorder_list$46template.ReorderItemDirectiveNgCd, () => ({
    __proto__: dart.getMethods(reorder_list$46template.ReorderItemDirectiveNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [render_view.RenderView, html.Element])
  }));
  dart.setLibraryUri(reorder_list$46template.ReorderItemDirectiveNgCd, "package:angular_components/reorder_list/reorder_list.template.dart");
  dart.setFieldSignature(reorder_list$46template.ReorderItemDirectiveNgCd, () => ({
    __proto__: dart.getFields(reorder_list$46template.ReorderItemDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(reorder_list.ReorderItemDirective),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  reorder_list$46template.viewFactory_ReorderListComponentHost0 = function viewFactory_ReorderListComponentHost0(injector) {
    return new reorder_list$46template._ViewReorderListComponentHost0.new(injector);
  };
  reorder_list$46template.initReflector = function initReflector() {
    if (dart.test(reorder_list$46template._visited)) {
      return;
    }
    reorder_list$46template._visited = true;
    reflector.registerComponent(dart.wrapType(reorder_list.ReorderListComponent), reorder_list$46template.ReorderListComponentNgFactory);
    angular$46template.initReflector();
    reorder_events$46template.initReflector();
    disposer$46template.initReflector();
    keyboard$46template.initReflector();
    reorder_events$46template.initReflector();
  };
  dart.copyProperties(reorder_list$46template, {
    get ReorderListComponentNgFactory() {
      return reorder_list$46template._ReorderListComponentNgFactory;
    }
  });
  let C1;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C0;
  let C2;
  dart.defineLazy(reorder_list$46template, {
    /*reorder_list$46template.styles$ReorderListComponent*/get styles$ReorderListComponent() {
      return [reorder_list$46scss$46css$46shim.styles];
    },
    /*reorder_list$46template._ReorderListComponentNgFactory*/get _ReorderListComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*reorder_list$46template.styles$ReorderListComponentHost*/get styles$ReorderListComponentHost() {
      return C2 || CT.C2;
    },
    /*reorder_list$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/reorder_list/reorder_list.template", {
    "package:angular_components/reorder_list/reorder_list.template.dart": reorder_list$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["reorder_list.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6CI,uBAAgB,2BAAY,gEAAgE;IAC9F;;AAIQ,iBAAY;AACQ,6BAAmB,AAAK;AAC5C,oBAAU,uBAAmB,gBAAgB,EAAE;AACpB,MAAjC,AAAK,aAAQ,gBAAgB,EAAE;AACzB,gBAAc;AACiC,MAAhD,cAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACJ,MAAhD,AAAK,sBAAsB,aAAO;AACT,MAAzB,AAAK,cAAc;AACQ,MAA3B,AAAK,aAAa,aAAO;AACI,MAA7B,AAAK,IAAD,eAAoB;IAC1B;;AAIQ,iBAAY;AACP,sBAAa,WAAC,AAAK,IAAD;AAC7B,oBAAI,2BAA0B,eAAS,SAAS,EAAE,oBAAoB;AACT,QAA3D,+BAAgC,aAAO,UAAU,SAAS;AAClC,QAAnB,gBAAU,SAAS;;IAE5B;sBAE4B;AACpB,iBAAY;AACZ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACoB,QAA1E,sCAAuC,kBAAa,YAAY,SAAS;AACjD,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACuB,QAA7E,sCAAuC,kBAAa,eAAe,SAAS;AACpD,QAAnB,gBAAU,SAAS;;IAE5B;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACgH,QAAnI,qEAAoB,SAAU,qEAA2C,2CAAO,qDAA6B;;AAEnF,MAAxB,uBAAkB,MAAM;IAC/B;;oEAvDuC,YAAgB;IALlD;IACA;IACA;IACc;AAEmD,+EAAM,UAAU,EAAE,WAAW;AACvE,IAA1B,AAAK;AAC4D,uBAA5D,wBAAsB,AAAS,8BAAc;AACoC,IAAtF,AAAK,6BAA6B;AACsD,IAAxF,4BAA6B,kBAAa;EAC5C;;;;;;;;;;;;;;;MAN+B,kEAAgB;;;;;;;AAwEU,MAAlD,qBAAgB,0DAA0B,MAAM;AAC/C,kBAAa,AAAc;AAKuD,MAJnF,2BAAqB,2BACpB,4DAAmC,kDAAsB,cACxC,gEAAqB,AAAK,iBAAqB,+BAAa,sDAErE,gEAAqB,AAAK,iBAAqB,+BAAa;AACjD,MAApB,AAAU,uBAAQ;AACC,MAAxB,AAAK,kBAAa,KAAK;IACzB;wBAGoC,OAAW,WAAmB;AAChE,UAAK,AAAU,KAAK,KAAU,oDAA0B,AAAE,MAAG,SAAS;AACpE,cAAY;;AAEd,YAAO,eAAc;IACvB;;AAIO,uBAAkB;AACyB,MAA3C,AAAc,qCAAkB,UAAU;AACb,MAA7B,AAAc;IACrB;;AAI2C,MAApC,AAAc;AACS,MAAvB,AAAU;IACjB;;yEAlCiD;AAAY,oFAAM,QAAQ;;EAAC;;;;;;;;;;IA0CzC;;;;;;sBAGQ,MAAsB;AACzD,sBAAiB,AAAS;AAChC,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACH,QAAnD,4BAAwB,EAAE,EAAE,aAAa,SAAS;AAC1B,QAAnB,gBAAU,SAAS;;IAE5B;;mEAP8B;IAD1B;IAC0B;;EAAS;;;;;;;;;;;;iHAP+D;AACtG,UAAO,gEAA+B,QAAQ;EAChD;;AAiBE,kBAAI;AACF;;AAEa,IAAf,mCAAW;AAEkE,IAA7E,4BAAyB,kDAAsB;AAC1B,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AA1EE,YAAO;IACT;;;;;;;;MAtEoB,mDAA2B;YAAG,EAAS;;MAmEN,sDAA8B;;;MAK/D,uDAA+B;;;MA0D/C,gCAAQ;YAAG","file":"reorder_list.template.ddc.js"}');
  // Exports:
  return {
    reorder_list__reorder_list$46template: reorder_list$46template
  };
});

//# sourceMappingURL=reorder_list.template.ddc.js.map

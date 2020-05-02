define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_datepicker/material_month_picker', 'packages/quiver/time', 'packages/angular_components/src/material_datepicker/calendar_listener.template', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/material_datepicker/material_month_picker.scss.css.shim'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__angular_components__material_datepicker__material_month_picker, packages__quiver__time, packages__angular_components__src__material_datepicker__calendar_listener$46template, packages__angular__angular$46template, packages__angular_components__material_datepicker__calendar$46template, packages__angular_components__material_datepicker__module$46template, packages__angular_components__model__date__date$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__material_datepicker__material_month_picker$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const check_binding = packages__angular__src__core__change_detection__change_detection.src__runtime__check_binding;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const injector = packages__angular__src__core__change_detection__change_detection.src__di__injector__injector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_month_picker = packages__angular_components__material_datepicker__material_month_picker.material_datepicker__material_month_picker;
  const time = packages__quiver__time.time;
  const calendar_listener$46template = packages__angular_components__src__material_datepicker__calendar_listener$46template.src__material_datepicker__calendar_listener$46template;
  const enum_parsing$46template = packages__angular_components__src__material_datepicker__calendar_listener$46template.src__material_datepicker__enum_parsing$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const calendar$46template = packages__angular_components__material_datepicker__calendar$46template.material_datepicker__calendar$46template;
  const module$46template = packages__angular_components__material_datepicker__module$46template.material_datepicker__module$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const material_month_picker$46scss$46css$46shim = packages__angular_components__material_datepicker__material_month_picker$46scss$46css$46shim.material_datepicker__material_month_picker$46scss$46css$46shim;
  const material_month_picker$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  let VoidToMaterialMonthPickerComponent = () => (VoidToMaterialMonthPickerComponent = dart.constFn(dart.fnType(material_month_picker.MaterialMonthPickerComponent, [])))();
  let ComponentFactoryOfMaterialMonthPickerComponent = () => (ComponentFactoryOfMaterialMonthPickerComponent = dart.constFn(component_factory.ComponentFactory$(material_month_picker.MaterialMonthPickerComponent)))();
  let HostViewOfMaterialMonthPickerComponent = () => (HostViewOfMaterialMonthPickerComponent = dart.constFn(host_view.HostView$(material_month_picker.MaterialMonthPickerComponent)))();
  let InjectorToHostViewOfMaterialMonthPickerComponent = () => (InjectorToHostViewOfMaterialMonthPickerComponent = dart.constFn(dart.fnType(HostViewOfMaterialMonthPickerComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C2() {
      return C2 = dart.fn(material_month_picker$46template.viewFactory_MaterialMonthPickerComponentHost0, InjectorToHostViewOfMaterialMonthPickerComponent());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ComponentFactoryOfMaterialMonthPickerComponent().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-month-picker"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  });
  material_month_picker$46template.ViewMaterialMonthPickerComponent0 = class ViewMaterialMonthPickerComponent0 extends component_view.ComponentView$(material_month_picker.MaterialMonthPickerComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_month_picker.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "scroll-container");
      this.addShimC(_el_0);
      let _el_1 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "calendar-container");
      this.addShimC(_el_1);
      _ctx.container = _el_1;
    }
    initComponentStyles() {
      let styles = material_month_picker$46template.ViewMaterialMonthPickerComponent0._componentStyles;
      if (styles == null) {
        material_month_picker$46template.ViewMaterialMonthPickerComponent0._componentStyles = styles = material_month_picker$46template.ViewMaterialMonthPickerComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_month_picker$46template.styles$MaterialMonthPickerComponent, material_month_picker$46template.ViewMaterialMonthPickerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_month_picker$46template.ViewMaterialMonthPickerComponent0.new = function(parentView, parentIndex) {
    material_month_picker$46template.ViewMaterialMonthPickerComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-month-picker"));
  }).prototype = material_month_picker$46template.ViewMaterialMonthPickerComponent0.prototype;
  dart.addTypeTests(material_month_picker$46template.ViewMaterialMonthPickerComponent0);
  dart.setMethodSignature(material_month_picker$46template.ViewMaterialMonthPickerComponent0, () => ({
    __proto__: dart.getMethods(material_month_picker$46template.ViewMaterialMonthPickerComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_month_picker$46template.ViewMaterialMonthPickerComponent0, "package:angular_components/material_datepicker/material_month_picker.template.dart");
  dart.defineLazy(material_month_picker$46template.ViewMaterialMonthPickerComponent0, {
    /*material_month_picker$46template.ViewMaterialMonthPickerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  let C0;
  material_month_picker$46template._ViewMaterialMonthPickerComponentHost0 = class _ViewMaterialMonthPickerComponentHost0 extends host_view.HostView$(material_month_picker.MaterialMonthPickerComponent) {
    build() {
      this.componentView = new material_month_picker$46template.ViewMaterialMonthPickerComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_month_picker.MaterialMonthPickerComponent, dart.wrapType(material_month_picker.MaterialMonthPickerComponent), dart.fn(() => new material_month_picker.MaterialMonthPickerComponent.new(time.Clock._check(this.injectorGetOptional(C0 || CT.C0, this.parentIndex)), null), VoidToMaterialMonthPickerComponent())) : new material_month_picker.MaterialMonthPickerComponent.new(time.Clock._check(this.injectorGetOptional(C0 || CT.C0, this.parentIndex)), null);
      this.initRootNode(_el_0);
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
      this.componentView.detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this.component.ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this.componentView.destroyInternalState();
      this.component.ngOnDestroy();
    }
  };
  (material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.new = function(injector) {
    material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.prototype;
  dart.addTypeTests(material_month_picker$46template._ViewMaterialMonthPickerComponentHost0);
  dart.setMethodSignature(material_month_picker$46template._ViewMaterialMonthPickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_month_picker$46template._ViewMaterialMonthPickerComponentHost0, "package:angular_components/material_datepicker/material_month_picker.template.dart");
  material_month_picker$46template.viewFactory_MaterialMonthPickerComponentHost0 = function viewFactory_MaterialMonthPickerComponentHost0(injector) {
    return new material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.new(injector);
  };
  material_month_picker$46template.initReflector = function initReflector() {
    if (dart.test(material_month_picker$46template._visited)) {
      return;
    }
    material_month_picker$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_month_picker.MaterialMonthPickerComponent), material_month_picker$46template.MaterialMonthPickerComponentNgFactory);
    calendar_listener$46template.initReflector();
    enum_parsing$46template.initReflector();
    angular$46template.initReflector();
    calendar$46template.initReflector();
    module$46template.initReflector();
    date$46template.initReflector();
    observable$46template.initReflector();
  };
  dart.copyProperties(material_month_picker$46template, {
    get MaterialMonthPickerComponentNgFactory() {
      return material_month_picker$46template._MaterialMonthPickerComponentNgFactory;
    }
  });
  let C2;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C1;
  let C3;
  dart.defineLazy(material_month_picker$46template, {
    /*material_month_picker$46template.styles$MaterialMonthPickerComponent*/get styles$MaterialMonthPickerComponent() {
      return [material_month_picker$46scss$46css$46shim.styles];
    },
    /*material_month_picker$46template._MaterialMonthPickerComponentNgFactory*/get _MaterialMonthPickerComponentNgFactory() {
      return C1 || CT.C1;
    },
    /*material_month_picker$46template.styles$MaterialMonthPickerComponentHost*/get styles$MaterialMonthPickerComponentHost() {
      return C3 || CT.C3;
    },
    /*material_month_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_datepicker/material_month_picker.template", {
    "package:angular_components/material_datepicker/material_month_picker.template.dart": material_month_picker$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_month_picker.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAuCI,uBAAgB,2BAAY,gFAAgF;IAC9G;;AAIQ,iBAAY;AACQ,6BAAmB,AAAK;AAC5C,gBAAc;AACd,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACL,MAAhD,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACb,kBAAQ,sBAAkB,GAAG,EAAE,KAAK;AACQ,MAAlD,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACG,MAAtB,AAAK,IAAD,aAAa,KAAK;IACxB;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACwH,QAA3I,sFAAoB,SAAU,sFAA2C,2CAAO,sEAAqC;;AAE3F,MAAxB,uBAAkB,MAAM;IAC/B;;qFA7B+C,YAAgB;AAAe,gGAAM,UAAU,EAAE,WAAW;AAC/E,IAA1B,AAAK;AACqE,uBAArE,wBAAsB,AAAS,8BAAc;EACpD;;;;;;;;MAJ+B,mFAAgB;;;;;;;;;AA8CkB,MAA1D,qBAAgB,2EAAkC,MAAM;AACvD,kBAAa,AAAc;AAKiK,MAJ7L,2BAAqB,2BACpB,6EAAmC,mEAA8B,cAChD,6EAA6B,AAAK,sCAA8H,oBAAc,gDAEvL,6EAA6B,AAAK,sCAA8H,oBAAc;AACpK,MAAxB,AAAK,kBAAa,KAAK;IACzB;;AAIO,oBAAU;AACV,uBAAkB;AACvB,UAAI,OAAO;AAC2B,QAA/B,AAAc;;AAErB,qBAAe,gDAAwB,UAAU;AACtB,QAApB,AAAU;;AAEiB,MAA7B,AAAc;AACnB,qBAAc;AACZ,sBAAI,UAAU;AACoB,UAA3B,AAAU;;;IAGrB;;AAI2C,MAApC,AAAc;AACS,MAAvB,AAAU;IACjB;;0FApCyD;AAAY,qGAAM,QAAQ;;EAAC;;;;;;;0IAuCkC;AACtH,UAAO,iFAAuC,QAAQ;EACxD;;AAIE,kBAAI;AACF;;AAEa,IAAf,4CAAW;AAEkF,IAA7F,4BAAyB,mEAA8B;AAClC,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AAjEE,YAAO;IACT;;;;;;;;MAxCoB,oEAAmC;YAAG,EAAS;;MAqCN,uEAAsC;;;MAK/E,wEAAuC;;;MA+CvD,yCAAQ;YAAG","file":"material_month_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_month_picker$46template: material_month_picker$46template
  };
});

//# sourceMappingURL=material_month_picker.template.ddc.js.map

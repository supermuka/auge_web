define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_datepicker/material_calendar_picker', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/quiver/time', 'packages/angular_components/src/material_datepicker/calendar_listener.template', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template', 'packages/angular_components/material_datepicker/material_calendar_picker.scss.css.shim'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__angular_components__material_datepicker__material_calendar_picker, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__quiver__time, packages__angular_components__src__material_datepicker__calendar_listener$46template, packages__angular__angular$46template, packages__angular_components__material_datepicker__calendar$46template, packages__angular_components__material_datepicker__module$46template, packages__angular_components__model__date__date$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__utils__browser__feature_detector__feature_detector$46template, packages__angular_components__material_datepicker__material_calendar_picker$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__change_detection.src__runtime__check_binding;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const injector = packages__angular__src__core__change_detection__change_detection.src__di__injector__injector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_calendar_picker = packages__angular_components__material_datepicker__material_calendar_picker.material_datepicker__material_calendar_picker;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const time = packages__quiver__time.time;
  const calendar_listener$46template = packages__angular_components__src__material_datepicker__calendar_listener$46template.src__material_datepicker__calendar_listener$46template;
  const enum_parsing$46template = packages__angular_components__src__material_datepicker__calendar_listener$46template.src__material_datepicker__enum_parsing$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const calendar$46template = packages__angular_components__material_datepicker__calendar$46template.material_datepicker__calendar$46template;
  const module$46template = packages__angular_components__material_datepicker__module$46template.material_datepicker__module$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const feature_detector$46template = packages__angular_components__utils__browser__feature_detector__feature_detector$46template.utils__browser__feature_detector__feature_detector$46template;
  const material_calendar_picker$46scss$46css$46shim = packages__angular_components__material_datepicker__material_calendar_picker$46scss$46css$46shim.material_datepicker__material_calendar_picker$46scss$46css$46shim;
  const material_calendar_picker$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  let EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  let RenderViewAndintToEmbeddedViewOfvoid = () => (RenderViewAndintToEmbeddedViewOfvoid = dart.constFn(dart.fnType(EmbeddedViewOfvoid(), [render_view.RenderView, core.int])))();
  let VoidToMaterialCalendarPickerComponent = () => (VoidToMaterialCalendarPickerComponent = dart.constFn(dart.fnType(material_calendar_picker.MaterialCalendarPickerComponent, [])))();
  let ComponentFactoryOfMaterialCalendarPickerComponent = () => (ComponentFactoryOfMaterialCalendarPickerComponent = dart.constFn(component_factory.ComponentFactory$(material_calendar_picker.MaterialCalendarPickerComponent)))();
  let HostViewOfMaterialCalendarPickerComponent = () => (HostViewOfMaterialCalendarPickerComponent = dart.constFn(host_view.HostView$(material_calendar_picker.MaterialCalendarPickerComponent)))();
  let InjectorToHostViewOfMaterialCalendarPickerComponent = () => (InjectorToHostViewOfMaterialCalendarPickerComponent = dart.constFn(dart.fnType(HostViewOfMaterialCalendarPickerComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponent1, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C3() {
      return C3 = dart.fn(material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponentHost0, InjectorToHostViewOfMaterialCalendarPickerComponent());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfMaterialCalendarPickerComponent().prototype,
        [ComponentFactory__viewFactory]: C3 || CT.C3,
        [ComponentFactory_selector]: "material-calendar-picker"
      });
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    }
  });
  const _appEl_1 = dart.privateName(material_calendar_picker$46template, "_appEl_1");
  const _NgFor_1_9 = dart.privateName(material_calendar_picker$46template, "_NgFor_1_9");
  const _expr_0 = dart.privateName(material_calendar_picker$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_calendar_picker$46template, "_expr_1");
  let C0;
  material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0 = class ViewMaterialCalendarPickerComponent0 extends component_view.ComponentView$(material_calendar_picker.MaterialCalendarPickerComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_calendar_picker.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendElement(doc, parentRenderNode, "header");
      this.updateChildClass(html.HtmlElement._check(_el_0), "header");
      this.addShimE(_el_0);
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      let _el_2 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_2, "scroll-container");
      this.addShimC(_el_2);
      let _el_3 = dom_helpers.appendDiv(doc, _el_2);
      this.updateChildClass(_el_3, "calendar-container");
      this.addShimC(_el_3);
      _ctx.container = _el_3;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.dayNames;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "dayNames", ""))) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.compact;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "compact", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    initComponentStyles() {
      let styles = material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._componentStyles;
      if (styles == null) {
        material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._componentStyles = styles = material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_calendar_picker$46template.styles$MaterialCalendarPickerComponent, material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-calendar-picker"));
  }).prototype = material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.prototype;
  dart.addTypeTests(material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0);
  dart.setMethodSignature(material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0, () => ({
    __proto__: dart.getMethods(material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0, "package:angular_components/material_datepicker/material_calendar_picker.template.dart");
  dart.setFieldSignature(material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0, () => ({
    __proto__: dart.getFields(material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.__proto__),
    [_appEl_1]: dart.fieldType(view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0, {
    /*material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _textBinding_1 = dart.privateName(material_calendar_picker$46template, "_textBinding_1");
  material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1 = class _ViewMaterialCalendarPickerComponent1 extends embedded_view.EmbeddedView$(material_calendar_picker.MaterialCalendarPickerComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "header-day");
      this.addShimC(html.HtmlElement._check(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_name = optimizations.unsafeCast(core.String, this.locals[$_get]("$implicit"));
      this[_textBinding_1].updateText(interpolate.interpolateString0(local_name));
    }
  };
  (material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.prototype;
  dart.addTypeTests(material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1);
  dart.setMethodSignature(material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1, () => ({
    __proto__: dart.getMethods(material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1, "package:angular_components/material_datepicker/material_calendar_picker.template.dart");
  dart.setFieldSignature(material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1, () => ({
    __proto__: dart.getFields(material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(text_binding.TextBinding)
  }));
  const OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  let C1;
  material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0 = class _ViewMaterialCalendarPickerComponentHost0 extends host_view.HostView$(material_calendar_picker.MaterialCalendarPickerComponent) {
    build() {
      this.componentView = new material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_calendar_picker.MaterialCalendarPickerComponent, dart.wrapType(material_calendar_picker.MaterialCalendarPickerComponent), dart.fn(() => new material_calendar_picker.MaterialCalendarPickerComponent.new(time.Clock._check(this.injectorGetOptional(C1 || CT.C1, this.parentIndex)), time.Clock._check(this.injectorGet(dart.wrapType(time.Clock), this.parentIndex)), null), VoidToMaterialCalendarPickerComponent())) : new material_calendar_picker.MaterialCalendarPickerComponent.new(time.Clock._check(this.injectorGetOptional(C1 || CT.C1, this.parentIndex)), time.Clock._check(this.injectorGet(dart.wrapType(time.Clock), this.parentIndex)), null);
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
      this.componentView.detectHostChanges(firstCheck);
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
  (material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.new = function(injector) {
    material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.prototype;
  dart.addTypeTests(material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0);
  dart.setMethodSignature(material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0, "package:angular_components/material_datepicker/material_calendar_picker.template.dart");
  material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponent1 = function viewFactory_MaterialCalendarPickerComponent1(parentView, parentIndex) {
    return new material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.new(parentView, parentIndex);
  };
  material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponentHost0 = function viewFactory_MaterialCalendarPickerComponentHost0(injector) {
    return new material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.new(injector);
  };
  material_calendar_picker$46template.initReflector = function initReflector() {
    if (dart.test(material_calendar_picker$46template._visited)) {
      return;
    }
    material_calendar_picker$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_calendar_picker.MaterialCalendarPickerComponent), material_calendar_picker$46template.MaterialCalendarPickerComponentNgFactory);
    calendar_listener$46template.initReflector();
    enum_parsing$46template.initReflector();
    angular$46template.initReflector();
    calendar$46template.initReflector();
    module$46template.initReflector();
    date$46template.initReflector();
    observable$46template.initReflector();
    feature_detector$46template.initReflector();
  };
  dart.copyProperties(material_calendar_picker$46template, {
    get MaterialCalendarPickerComponentNgFactory() {
      return material_calendar_picker$46template._MaterialCalendarPickerComponentNgFactory;
    }
  });
  let C3;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C2;
  let C4;
  dart.defineLazy(material_calendar_picker$46template, {
    /*material_calendar_picker$46template.styles$MaterialCalendarPickerComponent*/get styles$MaterialCalendarPickerComponent() {
      return [material_calendar_picker$46scss$46css$46shim.styles];
    },
    /*material_calendar_picker$46template._MaterialCalendarPickerComponentNgFactory*/get _MaterialCalendarPickerComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*material_calendar_picker$46template.styles$MaterialCalendarPickerComponentHost*/get styles$MaterialCalendarPickerComponentHost() {
      return C4 || CT.C4;
    },
    /*material_calendar_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_datepicker/material_calendar_picker.template", {
    "package:angular_components/material_datepicker/material_calendar_picker.template.dart": material_calendar_picker$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_calendar_picker.template.dart"],"names":[],"mappings":"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","file":"material_calendar_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_calendar_picker$46template: material_calendar_picker$46template
  };
});

//# sourceMappingURL=material_calendar_picker.template.ddc.js.map

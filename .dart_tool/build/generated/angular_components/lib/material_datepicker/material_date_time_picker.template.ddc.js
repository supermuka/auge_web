define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_datepicker/material_datepicker.template', 'packages/angular_components/material_datepicker/material_datepicker', 'packages/quiver/time', 'packages/angular_components/material_datepicker/material_time_picker.template', 'packages/angular_components/material_datepicker/material_time_picker', 'packages/angular_components/model/date/date', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_datepicker/material_date_time_picker', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/material_datepicker/material_date_time_picker.scss.css.shim'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_datepicker__material_datepicker$46template, packages__angular_components__material_datepicker__material_datepicker, packages__quiver__time, packages__angular_components__material_datepicker__material_time_picker$46template, packages__angular_components__material_datepicker__material_time_picker, packages__angular_components__model__date__date, packages__angular_components__interfaces__has_disabled, packages__angular__src__bootstrap__modules, packages__angular_components__material_datepicker__material_date_time_picker, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__material_datepicker__module$46template, packages__angular_components__material_input__material_input$46template, packages__angular_components__model__date__date$46template, packages__angular_components__material_datepicker__material_date_time_picker$46scss$46css$46shim) {
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
  const check_binding = packages__angular__src__core__change_detection__change_detection.src__runtime__check_binding;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const injector = packages__angular__src__core__change_detection__change_detection.src__di__injector__injector;
  const material_datepicker$46template = packages__angular_components__material_datepicker__material_datepicker$46template.material_datepicker__material_datepicker$46template;
  const material_datepicker = packages__angular_components__material_datepicker__material_datepicker.material_datepicker__material_datepicker;
  const time = packages__quiver__time.time;
  const material_time_picker$46template = packages__angular_components__material_datepicker__material_time_picker$46template.material_datepicker__material_time_picker$46template;
  const material_time_picker = packages__angular_components__material_datepicker__material_time_picker.material_datepicker__material_time_picker;
  const date = packages__angular_components__model__date__date.model__date__date;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_date_time_picker = packages__angular_components__material_datepicker__material_date_time_picker.material_datepicker__material_date_time_picker;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const module$46template = packages__angular_components__material_datepicker__module$46template.material_datepicker__module$46template;
  const material_input$46template = packages__angular_components__material_input__material_input$46template.material_input__material_input$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const material_date_time_picker$46scss$46css$46shim = packages__angular_components__material_datepicker__material_date_time_picker$46scss$46css$46shim.material_datepicker__material_date_time_picker$46scss$46css$46shim;
  const material_date_time_picker$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let VoidToMaterialDatepickerComponent = () => (VoidToMaterialDatepickerComponent = dart.constFn(dart.fnType(material_datepicker.MaterialDatepickerComponent, [])))();
  let VoidToMaterialTimePickerComponent = () => (VoidToMaterialTimePickerComponent = dart.constFn(dart.fnType(material_time_picker.MaterialTimePickerComponent, [])))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let VoidToMaterialDateTimePickerComponent = () => (VoidToMaterialDateTimePickerComponent = dart.constFn(dart.fnType(material_date_time_picker.MaterialDateTimePickerComponent, [])))();
  let ComponentFactoryOfMaterialDateTimePickerComponent = () => (ComponentFactoryOfMaterialDateTimePickerComponent = dart.constFn(component_factory.ComponentFactory$(material_date_time_picker.MaterialDateTimePickerComponent)))();
  let HostViewOfMaterialDateTimePickerComponent = () => (HostViewOfMaterialDateTimePickerComponent = dart.constFn(host_view.HostView$(material_date_time_picker.MaterialDateTimePickerComponent)))();
  let InjectorToHostViewOfMaterialDateTimePickerComponent = () => (InjectorToHostViewOfMaterialDateTimePickerComponent = dart.constFn(dart.fnType(HostViewOfMaterialDateTimePickerComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C2() {
      return C2 = dart.fn(material_date_time_picker$46template.viewFactory_MaterialDateTimePickerComponentHost0, InjectorToHostViewOfMaterialDateTimePickerComponent());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ComponentFactoryOfMaterialDateTimePickerComponent().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-date-time-picker"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(material_date_time_picker$46template, "_compView_0");
  const _MaterialDatepickerComponent_0_5 = dart.privateName(material_date_time_picker$46template, "_MaterialDatepickerComponent_0_5");
  const _compView_1 = dart.privateName(material_date_time_picker$46template, "_compView_1");
  const _MaterialTimePickerComponent_1_5 = dart.privateName(material_date_time_picker$46template, "_MaterialTimePickerComponent_1_5");
  const _expr_0 = dart.privateName(material_date_time_picker$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_date_time_picker$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_date_time_picker$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_date_time_picker$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_date_time_picker$46template, "_expr_4");
  const _expr_5 = dart.privateName(material_date_time_picker$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_date_time_picker$46template, "_expr_6");
  const _expr_7 = dart.privateName(material_date_time_picker$46template, "_expr_7");
  const _expr_8 = dart.privateName(material_date_time_picker$46template, "_expr_8");
  const _expr_9 = dart.privateName(material_date_time_picker$46template, "_expr_9");
  const _expr_10 = dart.privateName(material_date_time_picker$46template, "_expr_10");
  const _expr_11 = dart.privateName(material_date_time_picker$46template, "_expr_11");
  const _expr_12 = dart.privateName(material_date_time_picker$46template, "_expr_12");
  const _expr_13 = dart.privateName(material_date_time_picker$46template, "_expr_13");
  const OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  let C0;
  const _handleEvent_0 = dart.privateName(material_date_time_picker$46template, "_handleEvent_0");
  const _handleEvent_1 = dart.privateName(material_date_time_picker$46template, "_handleEvent_1");
  material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0 = class ViewMaterialDateTimePickerComponent0 extends component_view.ComponentView$(material_date_time_picker.MaterialDateTimePickerComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_date_time_picker.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      this[_compView_0] = new material_datepicker$46template.ViewMaterialDatepickerComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_MaterialDatepickerComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_datepicker.MaterialDatepickerComponent, dart.wrapType(material_datepicker.MaterialDatepickerComponent), dart.fn(() => new material_datepicker.MaterialDatepickerComponent.new(_el_0, null, time.Clock._check(this.parentView.injectorGetOptional(C0 || CT.C0, this.parentIndex))), VoidToMaterialDatepickerComponent())) : new material_datepicker.MaterialDatepickerComponent.new(_el_0, null, time.Clock._check(this.parentView.injectorGetOptional(C0 || CT.C0, this.parentIndex)));
      this[_compView_0].create(this[_MaterialDatepickerComponent_0_5]);
      this[_compView_1] = new material_time_picker$46template.ViewMaterialTimePickerComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      parentRenderNode[$append](_el_1);
      this.addShimC(_el_1);
      this[_MaterialTimePickerComponent_1_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_time_picker.MaterialTimePickerComponent, dart.wrapType(material_time_picker.MaterialTimePickerComponent), dart.fn(() => new material_time_picker.MaterialTimePickerComponent.new(time.Clock._check(this.parentView.injectorGet(C0 || CT.C0, this.parentIndex))), VoidToMaterialTimePickerComponent())) : new material_time_picker.MaterialTimePickerComponent.new(time.Clock._check(this.parentView.injectorGet(C0 || CT.C0, this.parentIndex)));
      this[_compView_1].create(this[_MaterialTimePickerComponent_1_5]);
      let subscription_0 = this[_MaterialDatepickerComponent_0_5].dateChange.listen(this.eventHandler1(date.Date, date.Date, dart.bind(this, _handleEvent_0)));
      let subscription_1 = this[_MaterialTimePickerComponent_1_5].timeChange.listen(this.eventHandler1(core.DateTime, core.DateTime, dart.bind(this, _handleEvent_1)));
      this.initSubscriptions(JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(has_disabled.HasDisabled) && 0 === nodeIndex) {
        return this[_MaterialDatepickerComponent_0_5];
      }
      if (token === dart.wrapType(has_disabled.HasDisabled) && 1 === nodeIndex) {
        return this[_MaterialTimePickerComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let currVal_0 = _ctx.outputDateFormat;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "outputDateFormat", ""))) {
        this[_MaterialDatepickerComponent_0_5].outputFormat = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.maxDate;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "maxDate", ""))) {
        this[_MaterialDatepickerComponent_0_5].maxDate = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.minDate;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "minDate", ""))) {
        this[_MaterialDatepickerComponent_0_5].minDate = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.required;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "required", ""))) {
        this[_MaterialDatepickerComponent_0_5].required = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.date;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "date", ""))) {
        this[_MaterialDatepickerComponent_0_5].date = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "disabled", ""))) {
        this[_MaterialDatepickerComponent_0_5].disabled = currVal_5;
        this[_expr_5] = currVal_5;
      }
      changed = false;
      let currVal_6 = _ctx.outputTimeFormat;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "outputTimeFormat", ""))) {
        this[_MaterialTimePickerComponent_1_5].outputFormat = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "disabled", ""))) {
        this[_MaterialTimePickerComponent_1_5].disabled = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.required;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "required", ""))) {
        this[_MaterialTimePickerComponent_1_5].required = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.time;
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "time", ""))) {
        this[_MaterialTimePickerComponent_1_5].time = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.utc;
      if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, "utc", ""))) {
        this[_MaterialTimePickerComponent_1_5].utc = currVal_10;
        changed = true;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.maxTime;
      if (dart.test(check_binding.checkBinding(this[_expr_11], currVal_11, "maxTime", ""))) {
        this[_MaterialTimePickerComponent_1_5].maxTime = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.minTime;
      if (dart.test(check_binding.checkBinding(this[_expr_12], currVal_12, "minTime", ""))) {
        this[_MaterialTimePickerComponent_1_5].minTime = currVal_12;
        changed = true;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.increment;
      if (dart.test(check_binding.checkBinding(this[_expr_13], currVal_13, "increment", ""))) {
        this[_MaterialTimePickerComponent_1_5].increment = currVal_13;
        changed = true;
        this[_expr_13] = currVal_13;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MaterialTimePickerComponent_1_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialDatepickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_1].destroyInternalState();
      this[_MaterialTimePickerComponent_1_5].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.date = date.Date._check($36event);
    }
    [_handleEvent_1]($36event) {
      let _ctx = this.ctx;
      _ctx.time = core.DateTime._check($36event);
    }
    initComponentStyles() {
      let styles = material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0._componentStyles;
      if (styles == null) {
        material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0._componentStyles = styles = material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_date_time_picker$46template.styles$MaterialDateTimePickerComponent, material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDatepickerComponent_0_5] = null;
    this[_compView_1] = null;
    this[_MaterialTimePickerComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-date-time-picker"));
    this.rootElement.tabIndex = -1;
  }).prototype = material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.prototype;
  dart.addTypeTests(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0);
  dart.setMethodSignature(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0, () => ({
    __proto__: dart.getMethods(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0, "package:angular_components/material_datepicker/material_date_time_picker.template.dart");
  dart.setFieldSignature(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0, () => ({
    __proto__: dart.getFields(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker$46template.ViewMaterialDatepickerComponent0),
    [_MaterialDatepickerComponent_0_5]: dart.fieldType(material_datepicker.MaterialDatepickerComponent),
    [_compView_1]: dart.fieldType(material_time_picker$46template.ViewMaterialTimePickerComponent0),
    [_MaterialTimePickerComponent_1_5]: dart.fieldType(material_time_picker.MaterialTimePickerComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(core.bool),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(core.int)
  }));
  dart.defineLazy(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0, {
    /*material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0 = class _ViewMaterialDateTimePickerComponentHost0 extends host_view.HostView$(material_date_time_picker.MaterialDateTimePickerComponent) {
    build() {
      this.componentView = new material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_date_time_picker.MaterialDateTimePickerComponent, dart.wrapType(material_date_time_picker.MaterialDateTimePickerComponent), dart.fn(() => new material_date_time_picker.MaterialDateTimePickerComponent.new(time.Clock._check(this.injectorGet(C0 || CT.C0, this.parentIndex))), VoidToMaterialDateTimePickerComponent())) : new material_date_time_picker.MaterialDateTimePickerComponent.new(time.Clock._check(this.injectorGet(C0 || CT.C0, this.parentIndex)));
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
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      this.componentView.detectChanges();
    }
  };
  (material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.new = function(injector) {
    material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.prototype;
  dart.addTypeTests(material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0);
  dart.setMethodSignature(material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0, "package:angular_components/material_datepicker/material_date_time_picker.template.dart");
  material_date_time_picker$46template.viewFactory_MaterialDateTimePickerComponentHost0 = function viewFactory_MaterialDateTimePickerComponentHost0(injector) {
    return new material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.new(injector);
  };
  material_date_time_picker$46template.initReflector = function initReflector() {
    if (dart.test(material_date_time_picker$46template._visited)) {
      return;
    }
    material_date_time_picker$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_date_time_picker.MaterialDateTimePickerComponent), material_date_time_picker$46template.MaterialDateTimePickerComponentNgFactory);
    angular$46template.initReflector();
    meta$46template.initReflector();
    has_disabled$46template.initReflector();
    material_datepicker$46template.initReflector();
    material_time_picker$46template.initReflector();
    module$46template.initReflector();
    material_input$46template.initReflector();
    date$46template.initReflector();
  };
  dart.copyProperties(material_date_time_picker$46template, {
    get MaterialDateTimePickerComponentNgFactory() {
      return material_date_time_picker$46template._MaterialDateTimePickerComponentNgFactory;
    }
  });
  let C2;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C1;
  let C3;
  dart.defineLazy(material_date_time_picker$46template, {
    /*material_date_time_picker$46template.styles$MaterialDateTimePickerComponent*/get styles$MaterialDateTimePickerComponent() {
      return [material_date_time_picker$46scss$46css$46shim.styles];
    },
    /*material_date_time_picker$46template._MaterialDateTimePickerComponentNgFactory*/get _MaterialDateTimePickerComponentNgFactory() {
      return C1 || CT.C1;
    },
    /*material_date_time_picker$46template.styles$MaterialDateTimePickerComponentHost*/get styles$MaterialDateTimePickerComponentHost() {
      return C3 || CT.C3;
    },
    /*material_date_time_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_datepicker/material_date_time_picker.template", {
    "package:angular_components/material_datepicker/material_date_time_picker.template.dart": material_date_time_picker$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_date_time_picker.template.dart"],"names":[],"mappings":"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","file":"material_date_time_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_date_time_picker$46template: material_date_time_picker$46template
  };
});

//# sourceMappingURL=material_date_time_picker.template.ddc.js.map

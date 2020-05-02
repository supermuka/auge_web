define(['dart_sdk', 'packages/angular_components/material_select/material_dropdown_select', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_select/material_dropdown_select.template', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/a11y/active_item', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/material_datepicker/material_time_picker', 'packages/quiver/time', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/string_selection_options.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/material_datepicker/material_time_picker.scss.css.shim'], function(dart_sdk, packages__angular_components__material_select__material_dropdown_select, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_select__material_dropdown_select$46template, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular__src__bootstrap__modules, packages__angular_components__material_input__material_input$46template, packages__angular_components__material_input__deferred_validator, packages__angular_forms__src__directives, packages__angular_components__material_input__material_input, packages__angular_components__material_input__material_input_default_value_accessor, packages__angular_components__material_input__base_material_input, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__interfaces__has_disabled, packages__angular_components__model__a11y__active_item, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__model__ui__has_renderer, packages__angular_components__content__deferred_content_aware, packages__angular_components__model__selection__selection_container, packages__angular_components__material_select__activation_handler, packages__angular_components__material_datepicker__material_time_picker, packages__quiver__time, packages__angular__angular$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__material_datepicker__module$46template, packages__angular_components__model__a11y__keyboard_handler_mixin$46template, packages__angular_components__model__selection__select$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__selection__string_selection_options$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__material_datepicker__material_time_picker$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_dropdown_select = packages__angular_components__material_select__material_dropdown_select.material_select__material_dropdown_select;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const check_binding = packages__angular__src__core__change_detection__change_detection.src__runtime__check_binding;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const injector = packages__angular__src__core__change_detection__change_detection.src__di__injector__injector;
  const material_dropdown_select$46template = packages__angular_components__material_select__material_dropdown_select$46template.material_select__material_dropdown_select$46template;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_input$46template = packages__angular_components__material_input__material_input$46template.material_input__material_input$46template;
  const deferred_validator = packages__angular_components__material_input__deferred_validator.material_input__deferred_validator;
  const ng_model = packages__angular_forms__src__directives.src__directives__ng_model;
  const ng_control = packages__angular_forms__src__directives.src__directives__ng_control;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  const material_input_default_value_accessor = packages__angular_components__material_input__material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const base_material_input = packages__angular_components__material_input__base_material_input.material_input__base_material_input;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const active_item = packages__angular_components__model__a11y__active_item.model__a11y__active_item;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const material_time_picker = packages__angular_components__material_datepicker__material_time_picker.material_datepicker__material_time_picker;
  const time = packages__quiver__time.time;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const module$46template = packages__angular_components__material_datepicker__module$46template.material_datepicker__module$46template;
  const keyboard_handler_mixin$46template = packages__angular_components__model__a11y__keyboard_handler_mixin$46template.model__a11y__keyboard_handler_mixin$46template;
  const select$46template = packages__angular_components__model__selection__select$46template.model__selection__select$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const string_selection_options$46template = packages__angular_components__model__selection__string_selection_options$46template.model__selection__string_selection_options$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const material_time_picker$46scss$46css$46shim = packages__angular_components__material_datepicker__material_time_picker$46scss$46css$46shim.material_datepicker__material_time_picker$46scss$46css$46shim;
  const material_time_picker$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  let ViewMaterialDropdownSelectComponent0OfDateTime = () => (ViewMaterialDropdownSelectComponent0OfDateTime = dart.constFn(material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0$(core.DateTime)))();
  let MaterialDropdownSelectComponentOfDateTime = () => (MaterialDropdownSelectComponentOfDateTime = dart.constFn(material_dropdown_select.MaterialDropdownSelectComponent$(core.DateTime)))();
  let VoidToMaterialDropdownSelectComponentOfDateTime = () => (VoidToMaterialDropdownSelectComponentOfDateTime = dart.constFn(dart.fnType(MaterialDropdownSelectComponentOfDateTime(), [])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let VoidToMaterialTimePickerComponent = () => (VoidToMaterialTimePickerComponent = dart.constFn(dart.fnType(material_time_picker.MaterialTimePickerComponent, [])))();
  let ComponentFactoryOfMaterialTimePickerComponent = () => (ComponentFactoryOfMaterialTimePickerComponent = dart.constFn(component_factory.ComponentFactory$(material_time_picker.MaterialTimePickerComponent)))();
  let HostViewOfMaterialTimePickerComponent = () => (HostViewOfMaterialTimePickerComponent = dart.constFn(host_view.HostView$(material_time_picker.MaterialTimePickerComponent)))();
  let InjectorToHostViewOfMaterialTimePickerComponent = () => (InjectorToHostViewOfMaterialTimePickerComponent = dart.constFn(dart.fnType(HostViewOfMaterialTimePickerComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "isRtl"
      });
    },
    get C1() {
      return C1 = dart.constList([], dart.dynamic);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: opaque_token.MultiToken.prototype,
        [OpaqueToken__uniqueName]: "NgValidators"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C5() {
      return C5 = dart.fn(material_time_picker$46template.viewFactory_MaterialTimePickerComponentHost0, InjectorToHostViewOfMaterialTimePickerComponent());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ComponentFactoryOfMaterialTimePickerComponent().prototype,
        [ComponentFactory__viewFactory]: C5 || CT.C5,
        [ComponentFactory_selector]: "material-time-picker"
      });
    }
  });
  const _compView_0 = dart.privateName(material_time_picker$46template, "_compView_0");
  const _MaterialDropdownSelectComponent_0_5 = dart.privateName(material_time_picker$46template, "_MaterialDropdownSelectComponent_0_5");
  const __ActiveItemModel_0_13 = dart.privateName(material_time_picker$46template, "__ActiveItemModel_0_13");
  const _compView_3 = dart.privateName(material_time_picker$46template, "_compView_3");
  const _DeferredValidator_3_5 = dart.privateName(material_time_picker$46template, "_DeferredValidator_3_5");
  const _NgValidators_3_6 = dart.privateName(material_time_picker$46template, "_NgValidators_3_6");
  const _NgModel_3_7 = dart.privateName(material_time_picker$46template, "_NgModel_3_7");
  const _MaterialInputComponent_3_9 = dart.privateName(material_time_picker$46template, "_MaterialInputComponent_3_9");
  const _MaterialInputDefaultValueAccessor_3_11 = dart.privateName(material_time_picker$46template, "_MaterialInputDefaultValueAccessor_3_11");
  const _expr_0 = dart.privateName(material_time_picker$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_time_picker$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_time_picker$46template, "_expr_2");
  const _expr_5 = dart.privateName(material_time_picker$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_time_picker$46template, "_expr_6");
  const _expr_8 = dart.privateName(material_time_picker$46template, "_expr_8");
  const _expr_9 = dart.privateName(material_time_picker$46template, "_expr_9");
  const _expr_11 = dart.privateName(material_time_picker$46template, "_expr_11");
  const _expr_12 = dart.privateName(material_time_picker$46template, "_expr_12");
  const _expr_14 = dart.privateName(material_time_picker$46template, "_expr_14");
  const _expr_15 = dart.privateName(material_time_picker$46template, "_expr_15");
  const _ActiveItemModel_0_13 = dart.privateName(material_time_picker$46template, "_ActiveItemModel_0_13");
  const OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  let C0;
  let C1;
  const _handleEvent_0 = dart.privateName(material_time_picker$46template, "_handleEvent_0");
  const _handleEvent_1 = dart.privateName(material_time_picker$46template, "_handleEvent_1");
  let C2;
  material_time_picker$46template.ViewMaterialTimePickerComponent0 = class ViewMaterialTimePickerComponent0 extends component_view.ComponentView$(material_time_picker.MaterialTimePickerComponent) {
    get [_ActiveItemModel_0_13]() {
      if (this[__ActiveItemModel_0_13] == null) {
        this[__ActiveItemModel_0_13] = material_dropdown_select.fromDropdown(this[_MaterialDropdownSelectComponent_0_5]);
      }
      return this[__ActiveItemModel_0_13];
    }
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_time_picker.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      this[_compView_0] = new (ViewMaterialDropdownSelectComponent0OfDateTime()).new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_MaterialDropdownSelectComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialDropdownSelectComponentOfDateTime(), dart.wrapType(material_dropdown_select.MaterialDropdownSelectComponent), dart.fn(() => new (MaterialDropdownSelectComponentOfDateTime()).new(id_generator.IdGenerator._check(this.parentView.injectorGetOptional(dart.wrapType(id_generator.IdGenerator), this.parentIndex)), popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGetOptional(dart.wrapType(popup_size_provider.PopupSizeProvider), this.parentIndex)), core.bool._check(this.parentView.injectorGetOptional(C0 || CT.C0, this.parentIndex)), null, null, this[_compView_0], _el_0), VoidToMaterialDropdownSelectComponentOfDateTime())) : new (MaterialDropdownSelectComponentOfDateTime()).new(id_generator.IdGenerator._check(this.parentView.injectorGetOptional(dart.wrapType(id_generator.IdGenerator), this.parentIndex)), popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGetOptional(dart.wrapType(popup_size_provider.PopupSizeProvider), this.parentIndex)), core.bool._check(this.parentView.injectorGetOptional(C0 || CT.C0, this.parentIndex)), null, null, this[_compView_0], _el_0);
      let doc = html.document;
      let _el_1 = doc[$createElement]("div");
      dom_helpers.setAttribute(_el_1, "header", "");
      this.addShimC(html.HtmlElement._check(_el_1));
      let _el_2 = dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(_el_2, "time-input-box");
      this.addShimC(_el_2);
      this[_compView_3] = new material_input$46template.ViewMaterialInputComponent0.new(this, 3);
      let _el_3 = this[_compView_3].rootElement;
      _el_2[$append](_el_3);
      dom_helpers.setAttribute(_el_3, "type", "text");
      this.addShimC(_el_3);
      this[_DeferredValidator_3_5] = new deferred_validator.DeferredValidator.new();
      this[_NgValidators_3_6] = [this[_DeferredValidator_3_5]];
      this[_NgModel_3_7] = new ng_model.NgModel.new(this[_NgValidators_3_6], null);
      this[_MaterialInputComponent_3_9] = new material_input.MaterialInputComponent.new("text", null, this[_NgModel_3_7], this[_compView_3], this[_DeferredValidator_3_5]);
      this[_MaterialInputDefaultValueAccessor_3_11] = new material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_3_9], this[_NgModel_3_7]);
      this[_compView_3].createAndProject(this[_MaterialInputComponent_3_9], JSArrayOfObject().of([C1 || CT.C1, C1 || CT.C1]));
      this[_compView_0].createAndProject(this[_MaterialDropdownSelectComponent_0_5], JSArrayOfObject().of([C1 || CT.C1, JSArrayOfElement().of([_el_1]), C1 || CT.C1, C1 || CT.C1, C1 || CT.C1, C1 || CT.C1]));
      let subscription_0 = this[_MaterialDropdownSelectComponent_0_5].visibleStream.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handleEvent_0)));
      _el_1[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'onKeyPress')));
      _el_1[$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'onInputBoxKeyDown')));
      let subscription_1 = this[_NgModel_3_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_1)));
      let subscription_2 = this[_MaterialInputComponent_3_9].onKeypress.listen(this.eventHandler1(core.String, core.String, dart.bind(_ctx, 'onTextChange')));
      let subscription_3 = this[_MaterialInputComponent_3_9].onBlur.listen(this.eventHandler0(html.FocusEvent, dart.bind(_ctx, 'onBlur')));
      this.initSubscriptions(JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1, subscription_2, subscription_3]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 3) {
        if (3 === nodeIndex) {
          if (token === dart.wrapType(deferred_validator.DeferredValidator)) {
            return this[_DeferredValidator_3_5];
          }
          if (token === (C2 || CT.C2)) {
            return this[_NgValidators_3_6];
          }
          if (token === dart.wrapType(ng_model.NgModel) || token === dart.wrapType(ng_control.NgControl)) {
            return this[_NgModel_3_7];
          }
          if (token === dart.wrapType(material_input.MaterialInputComponent) || token === dart.wrapType(base_material_input.BaseMaterialInput) || token === dart.wrapType(reference.ReferenceDirective) || token === dart.wrapType(focus_interface.Focusable) || token === dart.wrapType(has_disabled.HasDisabled)) {
            return this[_MaterialInputComponent_3_9];
          }
        }
        if (token === dart.wrapType(active_item.ActiveItemModel) && 0 === nodeIndex) {
          return this[_ActiveItemModel_0_13];
        }
        if (token === dart.wrapType(material_dropdown_select.MaterialDropdownSelectComponent) || token === dart.wrapType(material_dropdown_base.DropdownHandle) || token === dart.wrapType(has_disabled.HasDisabled) || token === dart.wrapType(has_renderer.HasRenderer) || token === dart.wrapType(deferred_content_aware.DeferredContentAware) || token === dart.wrapType(selection_container.SelectionContainer) || token === dart.wrapType(popup_size_provider.PopupSizeProvider) || token === dart.wrapType(activation_handler.ActivationHandler)) {
          return this[_MaterialDropdownSelectComponent_0_5];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialDropdownSelectComponent_0_5].popupMatchInputWidth = false;
        changed = true;
        this[_MaterialDropdownSelectComponent_0_5].slide = "y";
        changed = true;
        if (dart.bind(_ctx, 'renderTime') !== null) {
          this[_MaterialDropdownSelectComponent_0_5].itemRenderer = dart.bind(_ctx, 'renderTime');
          changed = true;
        }
      }
      let currVal_0 = _ctx.dropdownText;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "dropdownText", ""))) {
        this[_MaterialDropdownSelectComponent_0_5].buttonText = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "disabled", ""))) {
        this[_MaterialDropdownSelectComponent_0_5].disabled = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.selectedTime;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "selectedTime", ""))) {
        this[_MaterialDropdownSelectComponent_0_5].selectionInput = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_5 = _ctx.popupVisible;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "popupVisible", ""))) {
        this[_MaterialDropdownSelectComponent_0_5].visible = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.error;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "error", ""))) {
        this[_MaterialDropdownSelectComponent_0_5].error = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_8 = _ctx.timeOptions;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "timeOptions", ""))) {
        this[_MaterialDropdownSelectComponent_0_5].optionsInput = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_MaterialDropdownSelectComponent_0_5].ngAfterChanges();
      }
      changed = false;
      let currVal_9 = _ctx.timeInputText;
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "timeInputText", ""))) {
        this[_NgModel_3_7].model = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      if (changed) {
        this[_NgModel_3_7].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_3_7].ngOnInit();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        if (material_time_picker.MaterialTimePickerComponent.inputPlaceholderMsg != null) {
          this[_MaterialInputComponent_3_9].label = material_time_picker.MaterialTimePickerComponent.inputPlaceholderMsg;
          changed = true;
        }
        if (material_time_picker.MaterialTimePickerComponent.inputPlaceholderMsg != null) {
          this[_MaterialInputComponent_3_9].requiredErrorMsg = material_time_picker.MaterialTimePickerComponent.inputPlaceholderMsg;
          changed = true;
        }
      }
      let currVal_11 = _ctx.displayErrorPanel;
      if (dart.test(check_binding.checkBinding(this[_expr_11], currVal_11, "displayErrorPanel", ""))) {
        this[_MaterialInputComponent_3_9].displayBottomPanel = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.inputError;
      if (dart.test(check_binding.checkBinding(this[_expr_12], currVal_12, "inputError", ""))) {
        this[_MaterialInputComponent_3_9].error = currVal_12;
        changed = true;
        this[_expr_12] = currVal_12;
      }
      let currVal_14 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_14], currVal_14, "disabled", ""))) {
        this[_MaterialInputComponent_3_9].disabled = currVal_14;
        changed = true;
        this[_expr_14] = currVal_14;
      }
      let currVal_15 = _ctx.required;
      if (dart.test(check_binding.checkBinding(this[_expr_15], currVal_15, "required", ""))) {
        this[_MaterialInputComponent_3_9].required = currVal_15;
        changed = true;
        this[_expr_15] = currVal_15;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      this[_compView_3].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialInputComponent_3_9].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_3].destroyInternalState();
      this[_MaterialInputComponent_3_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_3_11].ngOnDestroy();
      this[_MaterialDropdownSelectComponent_0_5].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.popupVisible = core.bool._check($36event);
    }
    [_handleEvent_1]($36event) {
      let _ctx = this.ctx;
      _ctx.timeInputText = core.String._check($36event);
    }
    initComponentStyles() {
      let styles = material_time_picker$46template.ViewMaterialTimePickerComponent0._componentStyles;
      if (styles == null) {
        material_time_picker$46template.ViewMaterialTimePickerComponent0._componentStyles = styles = material_time_picker$46template.ViewMaterialTimePickerComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_time_picker$46template.styles$MaterialTimePickerComponent, material_time_picker$46template.ViewMaterialTimePickerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_time_picker$46template.ViewMaterialTimePickerComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDropdownSelectComponent_0_5] = null;
    this[__ActiveItemModel_0_13] = null;
    this[_compView_3] = null;
    this[_DeferredValidator_3_5] = null;
    this[_NgValidators_3_6] = null;
    this[_NgModel_3_7] = null;
    this[_MaterialInputComponent_3_9] = null;
    this[_MaterialInputDefaultValueAccessor_3_11] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_14] = null;
    this[_expr_15] = null;
    material_time_picker$46template.ViewMaterialTimePickerComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-time-picker"));
  }).prototype = material_time_picker$46template.ViewMaterialTimePickerComponent0.prototype;
  dart.addTypeTests(material_time_picker$46template.ViewMaterialTimePickerComponent0);
  dart.setMethodSignature(material_time_picker$46template.ViewMaterialTimePickerComponent0, () => ({
    __proto__: dart.getMethods(material_time_picker$46template.ViewMaterialTimePickerComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_time_picker$46template.ViewMaterialTimePickerComponent0, () => ({
    __proto__: dart.getGetters(material_time_picker$46template.ViewMaterialTimePickerComponent0.__proto__),
    [_ActiveItemModel_0_13]: active_item.ActiveItemModel
  }));
  dart.setLibraryUri(material_time_picker$46template.ViewMaterialTimePickerComponent0, "package:angular_components/material_datepicker/material_time_picker.template.dart");
  dart.setFieldSignature(material_time_picker$46template.ViewMaterialTimePickerComponent0, () => ({
    __proto__: dart.getFields(material_time_picker$46template.ViewMaterialTimePickerComponent0.__proto__),
    [_compView_0]: dart.fieldType(material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0$(core.DateTime)),
    [_MaterialDropdownSelectComponent_0_5]: dart.fieldType(material_dropdown_select.MaterialDropdownSelectComponent$(core.DateTime)),
    [__ActiveItemModel_0_13]: dart.fieldType(active_item.ActiveItemModel),
    [_compView_3]: dart.fieldType(material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_3_5]: dart.fieldType(deferred_validator.DeferredValidator),
    [_NgValidators_3_6]: dart.fieldType(core.List),
    [_NgModel_3_7]: dart.fieldType(ng_model.NgModel),
    [_MaterialInputComponent_3_9]: dart.fieldType(material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_3_11]: dart.fieldType(material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(core.String),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(core.String),
    [_expr_14]: dart.fieldType(core.bool),
    [_expr_15]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_time_picker$46template.ViewMaterialTimePickerComponent0, {
    /*material_time_picker$46template.ViewMaterialTimePickerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  let C3;
  material_time_picker$46template._ViewMaterialTimePickerComponentHost0 = class _ViewMaterialTimePickerComponentHost0 extends host_view.HostView$(material_time_picker.MaterialTimePickerComponent) {
    build() {
      this.componentView = new material_time_picker$46template.ViewMaterialTimePickerComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_time_picker.MaterialTimePickerComponent, dart.wrapType(material_time_picker.MaterialTimePickerComponent), dart.fn(() => new material_time_picker.MaterialTimePickerComponent.new(time.Clock._check(this.injectorGet(C3 || CT.C3, this.parentIndex))), VoidToMaterialTimePickerComponent())) : new material_time_picker.MaterialTimePickerComponent.new(time.Clock._check(this.injectorGet(C3 || CT.C3, this.parentIndex)));
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
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this.component.ngOnInit();
      }
      this.componentView.detectChanges();
    }
    destroyInternal() {
      this.componentView.destroyInternalState();
      this.component.ngOnDestroy();
    }
  };
  (material_time_picker$46template._ViewMaterialTimePickerComponentHost0.new = function(injector) {
    material_time_picker$46template._ViewMaterialTimePickerComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = material_time_picker$46template._ViewMaterialTimePickerComponentHost0.prototype;
  dart.addTypeTests(material_time_picker$46template._ViewMaterialTimePickerComponentHost0);
  dart.setMethodSignature(material_time_picker$46template._ViewMaterialTimePickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_time_picker$46template._ViewMaterialTimePickerComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_time_picker$46template._ViewMaterialTimePickerComponentHost0, "package:angular_components/material_datepicker/material_time_picker.template.dart");
  material_time_picker$46template.viewFactory_MaterialTimePickerComponentHost0 = function viewFactory_MaterialTimePickerComponentHost0(injector) {
    return new material_time_picker$46template._ViewMaterialTimePickerComponentHost0.new(injector);
  };
  material_time_picker$46template.initReflector = function initReflector() {
    if (dart.test(material_time_picker$46template._visited)) {
      return;
    }
    material_time_picker$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_time_picker.MaterialTimePickerComponent), material_time_picker$46template.MaterialTimePickerComponentNgFactory);
    angular$46template.initReflector();
    has_disabled$46template.initReflector();
    module$46template.initReflector();
    material_input$46template.initReflector();
    material_dropdown_select$46template.initReflector();
    keyboard_handler_mixin$46template.initReflector();
    select$46template.initReflector();
    selection_model$46template.initReflector();
    string_selection_options$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(material_time_picker$46template, {
    get MaterialTimePickerComponentNgFactory() {
      return material_time_picker$46template._MaterialTimePickerComponentNgFactory;
    }
  });
  let C5;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C4;
  dart.defineLazy(material_time_picker$46template, {
    /*material_time_picker$46template.styles$MaterialTimePickerComponent*/get styles$MaterialTimePickerComponent() {
      return [material_time_picker$46scss$46css$46shim.styles];
    },
    /*material_time_picker$46template._MaterialTimePickerComponentNgFactory*/get _MaterialTimePickerComponentNgFactory() {
      return C4 || CT.C4;
    },
    /*material_time_picker$46template.styles$MaterialTimePickerComponentHost*/get styles$MaterialTimePickerComponentHost() {
      return C1 || CT.C1;
    },
    /*material_time_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_datepicker/material_time_picker.template", {
    "package:angular_components/material_datepicker/material_time_picker.template.dart": material_time_picker$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_time_picker.template.dart"],"names":[],"mappings":"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","file":"material_time_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_time_picker$46template: material_time_picker$46template
  };
});

//# sourceMappingURL=material_time_picker.template.ddc.js.map

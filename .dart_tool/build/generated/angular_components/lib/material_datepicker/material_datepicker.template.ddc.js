define(['dart_sdk', 'packages/angular_components/material_popup/material_popup', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_select/dropdown_button.template', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular_components/content/deferred_content', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular/src/runtime/queries', 'packages/angular_components/focus/focus', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_datepicker/material_datepicker', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/material_datepicker/date_input', 'packages/quiver/time', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_datepicker/material_calendar_picker.template', 'packages/angular_components/material_datepicker/material_calendar_picker', 'packages/angular_components/model/date/date', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/material_datepicker/range', 'packages/angular/angular.template', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/date_input.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/material_list/material_list_item.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/material_datepicker/material_datepicker.scss.css.shim'], function(dart_sdk, packages__angular_components__material_popup__material_popup, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__material_select__dropdown_button$46template, packages__angular_components__material_select__dropdown_button, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__focus__focus_trap$46template, packages__angular_components__focus__focus_trap, packages__angular_components__content__deferred_content, packages__angular_components__interfaces__has_disabled, packages__angular_components__content__deferred_content_aware, packages__angular_components__mixins__material_dropdown_base, packages__angular__src__runtime__queries, packages__angular_components__focus__focus, packages__angular_components__material_input__material_input, packages__angular_components__material_datepicker__material_datepicker, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__angular_components__material_input__material_input$46template, packages__angular_components__material_input__deferred_validator, packages__angular_components__laminate__components__modal__modal, packages__angular_components__material_datepicker__date_input, packages__quiver__time, packages__angular_components__material_input__material_input_default_value_accessor, packages__angular_components__material_datepicker__material_calendar_picker$46template, packages__angular_components__material_datepicker__material_calendar_picker, packages__angular_components__model__date__date, packages__angular_components__material_datepicker__calendar, packages__angular_components__material_input__base_material_input, packages__angular_components__material_select__material_select_item$46template, packages__angular_components__material_select__material_select_item, packages__angular_components__material_select__activation_handler, packages__angular_components__model__selection__selection_container, packages__angular_components__model__ui__has_renderer, packages__angular_components__material_datepicker__range, packages__angular__angular$46template, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__content__deferred_content$46template, packages__angular_components__focus__focus$46template, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__material_datepicker__calendar$46template, packages__angular_components__material_datepicker__date_input$46template, packages__angular_components__material_datepicker__module$46template, packages__angular_components__material_datepicker__range$46template, packages__angular_components__material_list__material_list_item$46template, packages__angular_components__mixins__focusable_mixin$46template, packages__angular_components__model__a11y__keyboard_handler_mixin$46template, packages__angular_components__model__date__date$46template, packages__angular_components__utils__angular__css__css$46template, packages__angular_components__material_datepicker__material_datepicker$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const check_binding = packages__angular__src__core__change_detection__change_detection.src__runtime__check_binding;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const injector = packages__angular__src__core__change_detection__change_detection.src__di__injector__injector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const ng_class = packages__angular__src__bootstrap__modules.src__common__directives__ng_class;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const dropdown_button$46template = packages__angular_components__material_select__dropdown_button$46template.material_select__dropdown_button$46template;
  const dropdown_button = packages__angular_components__material_select__dropdown_button.material_select__dropdown_button;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const focus_trap$46template = packages__angular_components__focus__focus_trap$46template.focus__focus_trap$46template;
  const focus_trap = packages__angular_components__focus__focus_trap.focus__focus_trap;
  const deferred_content = packages__angular_components__content__deferred_content.content__deferred_content;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const queries = packages__angular__src__runtime__queries.src__runtime__queries;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  const material_datepicker = packages__angular_components__material_datepicker__material_datepicker.material_datepicker__material_datepicker;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_input$46template = packages__angular_components__material_input__material_input$46template.material_input__material_input$46template;
  const deferred_validator = packages__angular_components__material_input__deferred_validator.material_input__deferred_validator;
  const modal = packages__angular_components__laminate__components__modal__modal.laminate__components__modal__modal;
  const date_input = packages__angular_components__material_datepicker__date_input.material_datepicker__date_input;
  const time = packages__quiver__time.time;
  const material_input_default_value_accessor = packages__angular_components__material_input__material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const material_calendar_picker$46template = packages__angular_components__material_datepicker__material_calendar_picker$46template.material_datepicker__material_calendar_picker$46template;
  const material_calendar_picker = packages__angular_components__material_datepicker__material_calendar_picker.material_datepicker__material_calendar_picker;
  const date = packages__angular_components__model__date__date.model__date__date;
  const calendar = packages__angular_components__material_datepicker__calendar.material_datepicker__calendar;
  const base_material_input = packages__angular_components__material_input__base_material_input.material_input__base_material_input;
  const material_select_item$46template = packages__angular_components__material_select__material_select_item$46template.material_select__material_select_item$46template;
  const material_select_item = packages__angular_components__material_select__material_select_item.material_select__material_select_item;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const range = packages__angular_components__material_datepicker__range.material_datepicker__range;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const calendar$46template = packages__angular_components__material_datepicker__calendar$46template.material_datepicker__calendar$46template;
  const date_input$46template = packages__angular_components__material_datepicker__date_input$46template.material_datepicker__date_input$46template;
  const module$46template = packages__angular_components__material_datepicker__module$46template.material_datepicker__module$46template;
  const range$46template = packages__angular_components__material_datepicker__range$46template.material_datepicker__range$46template;
  const material_list_item$46template = packages__angular_components__material_list__material_list_item$46template.material_list__material_list_item$46template;
  const focusable_mixin$46template = packages__angular_components__mixins__focusable_mixin$46template.mixins__focusable_mixin$46template;
  const keyboard_handler_mixin$46template = packages__angular_components__model__a11y__keyboard_handler_mixin$46template.model__a11y__keyboard_handler_mixin$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const css$46template = packages__angular_components__utils__angular__css__css$46template.utils__angular__css__css$46template;
  const material_datepicker$46scss$46css$46shim = packages__angular_components__material_datepicker__material_datepicker$46scss$46css$46shim.material_datepicker__material_datepicker$46scss$46css$46shim;
  const material_datepicker$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $isNotEmpty = dartx.isNotEmpty;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  let VoidToPopupSourceDirective = () => (VoidToPopupSourceDirective = dart.constFn(dart.fnType(popup_source_directive.PopupSourceDirective, [])))();
  let EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  let RenderViewAndintToEmbeddedViewOfvoid = () => (RenderViewAndintToEmbeddedViewOfvoid = dart.constFn(dart.fnType(EmbeddedViewOfvoid(), [render_view.RenderView, core.int])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let VoidToMaterialPopupComponent = () => (VoidToMaterialPopupComponent = dart.constFn(dart.fnType(material_popup.MaterialPopupComponent, [])))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(view_container.ViewContainer)))();
  let JSArrayOfHtmlElement = () => (JSArrayOfHtmlElement = dart.constFn(_interceptors.JSArray$(html.HtmlElement)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let JSArrayOfAutoFocusDirective = () => (JSArrayOfAutoFocusDirective = dart.constFn(_interceptors.JSArray$(focus.AutoFocusDirective)))();
  let ListOfAutoFocusDirective = () => (ListOfAutoFocusDirective = dart.constFn(core.List$(focus.AutoFocusDirective)))();
  let _ViewMaterialDatepickerComponent2ToListOfAutoFocusDirective = () => (_ViewMaterialDatepickerComponent2ToListOfAutoFocusDirective = dart.constFn(dart.fnType(ListOfAutoFocusDirective(), [material_datepicker$46template._ViewMaterialDatepickerComponent2])))();
  let JSArrayOfMaterialInputComponent = () => (JSArrayOfMaterialInputComponent = dart.constFn(_interceptors.JSArray$(material_input.MaterialInputComponent)))();
  let ListOfMaterialInputComponent = () => (ListOfMaterialInputComponent = dart.constFn(core.List$(material_input.MaterialInputComponent)))();
  let _ViewMaterialDatepickerComponent2ToListOfMaterialInputComponent = () => (_ViewMaterialDatepickerComponent2ToListOfMaterialInputComponent = dart.constFn(dart.fnType(ListOfMaterialInputComponent(), [material_datepicker$46template._ViewMaterialDatepickerComponent2])))();
  let VoidToAutoFocusDirective = () => (VoidToAutoFocusDirective = dart.constFn(dart.fnType(focus.AutoFocusDirective, [])))();
  let VoidToDateInputDirective = () => (VoidToDateInputDirective = dart.constFn(dart.fnType(date_input.DateInputDirective, [])))();
  let VoidToMaterialCalendarPickerComponent = () => (VoidToMaterialCalendarPickerComponent = dart.constFn(dart.fnType(material_calendar_picker.MaterialCalendarPickerComponent, [])))();
  let VoidToMaterialSelectItemComponent = () => (VoidToMaterialSelectItemComponent = dart.constFn(dart.fnType(material_select_item.MaterialSelectItemComponent, [])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let VoidToMaterialDatepickerComponent = () => (VoidToMaterialDatepickerComponent = dart.constFn(dart.fnType(material_datepicker.MaterialDatepickerComponent, [])))();
  let ComponentFactoryOfMaterialDatepickerComponent = () => (ComponentFactoryOfMaterialDatepickerComponent = dart.constFn(component_factory.ComponentFactory$(material_datepicker.MaterialDatepickerComponent)))();
  let HostViewOfMaterialDatepickerComponent = () => (HostViewOfMaterialDatepickerComponent = dart.constFn(host_view.HostView$(material_datepicker.MaterialDatepickerComponent)))();
  let InjectorToHostViewOfMaterialDatepickerComponent = () => (InjectorToHostViewOfMaterialDatepickerComponent = dart.constFn(dart.fnType(HostViewOfMaterialDatepickerComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_datepicker$46template.viewFactory_MaterialDatepickerComponent1, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C1() {
      return C1 = dart.constList([], dart.dynamic);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: OpaqueTokenOfListOfRelativePosition().prototype,
        [OpaqueToken__uniqueName]: "defaultPopupPositions"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayViewportBoundaries"
      });
    },
    get C5() {
      return C5 = dart.fn(material_datepicker$46template.viewFactory_MaterialDatepickerComponent2, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C6() {
      return C6 = dart.fn(material_datepicker$46template.viewFactory_MaterialDatepickerComponent3, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C8() {
      return C8 = dart.fn(material_datepicker$46template.viewFactory_MaterialDatepickerComponent4, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: opaque_token.MultiToken.prototype,
        [OpaqueToken__uniqueName]: "NgValidators"
      });
    },
    get C10() {
      return C10 = dart.fn(material_datepicker$46template.viewFactory_MaterialDatepickerComponent5, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C12() {
      return C12 = dart.fn(material_datepicker$46template.viewFactory_MaterialDatepickerComponentHost0, InjectorToHostViewOfMaterialDatepickerComponent());
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ComponentFactoryOfMaterialDatepickerComponent().prototype,
        [ComponentFactory__viewFactory]: C12 || CT.C12,
        [ComponentFactory_selector]: "material-datepicker"
      });
    }
  });
  const _viewQuery_MaterialInputComponent_1_isDirty = dart.privateName(material_datepicker$46template, "_viewQuery_MaterialInputComponent_1_isDirty");
  const _query_AutoFocusDirective_4_0_isDirty = dart.privateName(material_datepicker$46template, "_query_AutoFocusDirective_4_0_isDirty");
  const _PopupSourceDirective_0_5 = dart.privateName(material_datepicker$46template, "_PopupSourceDirective_0_5");
  const _appEl_1 = dart.privateName(material_datepicker$46template, "_appEl_1");
  const _NgIf_1_9 = dart.privateName(material_datepicker$46template, "_NgIf_1_9");
  const _compView_2 = dart.privateName(material_datepicker$46template, "_compView_2");
  const _DropdownButtonComponent_2_5 = dart.privateName(material_datepicker$46template, "_DropdownButtonComponent_2_5");
  const _compView_3 = dart.privateName(material_datepicker$46template, "_compView_3");
  const _appEl_3 = dart.privateName(material_datepicker$46template, "_appEl_3");
  const _MaterialPopupComponent_3_8 = dart.privateName(material_datepicker$46template, "_MaterialPopupComponent_3_8");
  const __PopupRef_3_10 = dart.privateName(material_datepicker$46template, "__PopupRef_3_10");
  const __PopupHierarchy_3_12 = dart.privateName(material_datepicker$46template, "__PopupHierarchy_3_12");
  const _compView_4 = dart.privateName(material_datepicker$46template, "_compView_4");
  const _FocusTrapComponent_4_5 = dart.privateName(material_datepicker$46template, "_FocusTrapComponent_4_5");
  const _appEl_5 = dart.privateName(material_datepicker$46template, "_appEl_5");
  const _DeferredContentDirective_5_9 = dart.privateName(material_datepicker$46template, "_DeferredContentDirective_5_9");
  const _expr_0 = dart.privateName(material_datepicker$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_datepicker$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_datepicker$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_datepicker$46template, "_expr_3");
  const _expr_6 = dart.privateName(material_datepicker$46template, "_expr_6");
  const _expr_7 = dart.privateName(material_datepicker$46template, "_expr_7");
  const _expr_8 = dart.privateName(material_datepicker$46template, "_expr_8");
  const _expr_10 = dart.privateName(material_datepicker$46template, "_expr_10");
  const _el_2 = dart.privateName(material_datepicker$46template, "_el_2");
  const _el_3 = dart.privateName(material_datepicker$46template, "_el_3");
  const _PopupRef_3_10 = dart.privateName(material_datepicker$46template, "_PopupRef_3_10");
  const _PopupHierarchy_3_12 = dart.privateName(material_datepicker$46template, "_PopupHierarchy_3_12");
  let C0;
  let C1;
  const OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  let C2;
  let C3;
  let C4;
  let C5;
  const _handleEvent_0 = dart.privateName(material_datepicker$46template, "_handleEvent_0");
  const _AutoFocusDirective_4_8 = dart.privateName(material_datepicker$46template, "_AutoFocusDirective_4_8");
  const _MaterialInputComponent_4_6 = dart.privateName(material_datepicker$46template, "_MaterialInputComponent_4_6");
  material_datepicker$46template.ViewMaterialDatepickerComponent0 = class ViewMaterialDatepickerComponent0 extends component_view.ComponentView$(material_datepicker.MaterialDatepickerComponent) {
    get [_PopupRef_3_10]() {
      if (this[__PopupRef_3_10] == null) {
        this[__PopupRef_3_10] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_3_8]);
      }
      return this[__PopupRef_3_10];
    }
    get [_PopupHierarchy_3_12]() {
      if (this[__PopupHierarchy_3_12] == null) {
        this[__PopupHierarchy_3_12] = material_popup.getHierarchy(this[_MaterialPopupComponent_3_8]);
      }
      return this[__PopupHierarchy_3_12];
    }
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_datepicker.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "main-content");
      dom_helpers.setAttribute(_el_0, "popupSource", "");
      this.addShimC(_el_0);
      this[_PopupSourceDirective_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(popup_source_directive.PopupSourceDirective, dart.wrapType(popup_source_directive.PopupSourceDirective), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentIndex)), _el_0, reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(reference.ReferenceDirective), this.parentIndex)), focus_interface.Focusable._check(this.parentView.injectorGetOptional(dart.wrapType(focus_interface.Focusable), this.parentIndex)), null), VoidToPopupSourceDirective())) : new popup_source_directive.PopupSourceDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentIndex)), _el_0, reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(reference.ReferenceDirective), this.parentIndex)), focus_interface.Focusable._check(this.parentView.injectorGetOptional(dart.wrapType(focus_interface.Focusable), this.parentIndex)), null);
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this[_compView_2] = new dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootElement;
      _el_0[$append](this[_el_2]);
      this.updateChildClassNonHtml(this[_el_2], "menu-lookalike primary-range");
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_DropdownButtonComponent_2_5] = new dropdown_button.DropdownButtonComponent.new();
      this[_compView_2].createAndProject(this[_DropdownButtonComponent_2_5], JSArrayOfObject().of([C1 || CT.C1]));
      this[_compView_3] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootElement;
      parentRenderNode[$append](this[_el_3]);
      dom_helpers.setAttribute(this[_el_3], "enforceSpaceConstraints", "");
      this.addShimC(html.HtmlElement._check(this[_el_3]));
      this[_appEl_3] = new view_container.ViewContainer.new(3, null, this, this[_el_3]);
      this[_MaterialPopupComponent_3_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_popup.MaterialPopupComponent, dart.wrapType(material_popup.MaterialPopupComponent), dart.fn(() => new material_popup.MaterialPopupComponent.new(popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGetOptional(dart.wrapType(popup_hierarchy.PopupHierarchy), this.parentIndex)), material_popup.MaterialPopupComponent._check(this.parentView.injectorGetOptional(dart.wrapType(material_popup.MaterialPopupComponent), this.parentIndex)), null, ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(overlay_service.OverlayService), this.parentIndex)), dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(zindexer.ZIndexer), this.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(C2 || CT.C2, this.parentIndex)), core.bool._check(this.parentView.injectorGet(C3 || CT.C3, this.parentIndex)), box.Box._check(this.parentView.injectorGet(C4 || CT.C4, this.parentIndex)), popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGetOptional(dart.wrapType(popup_size_provider.PopupSizeProvider), this.parentIndex)), this[_compView_3], this[_appEl_3], new element_ref.ElementRef.new(this[_el_3])), VoidToMaterialPopupComponent())) : new material_popup.MaterialPopupComponent.new(popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGetOptional(dart.wrapType(popup_hierarchy.PopupHierarchy), this.parentIndex)), material_popup.MaterialPopupComponent._check(this.parentView.injectorGetOptional(dart.wrapType(material_popup.MaterialPopupComponent), this.parentIndex)), null, ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(overlay_service.OverlayService), this.parentIndex)), dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(zindexer.ZIndexer), this.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(C2 || CT.C2, this.parentIndex)), core.bool._check(this.parentView.injectorGet(C3 || CT.C3, this.parentIndex)), box.Box._check(this.parentView.injectorGet(C4 || CT.C4, this.parentIndex)), popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGetOptional(dart.wrapType(popup_size_provider.PopupSizeProvider), this.parentIndex)), this[_compView_3], this[_appEl_3], new element_ref.ElementRef.new(this[_el_3]));
      this[_compView_4] = new focus_trap$46template.ViewFocusTrapComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootElement;
      this.addShimC(_el_4);
      this[_FocusTrapComponent_4_5] = new focus_trap.FocusTrapComponent.new();
      let _anchor_5 = dom_helpers.createAnchor();
      this[_appEl_5] = new view_container.ViewContainer.new(5, 4, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C5 || CT.C5);
      this[_DeferredContentDirective_5_9] = new deferred_content.DeferredContentDirective.new(this[_appEl_5], _TemplateRef_5_8, this[_MaterialPopupComponent_3_8], this);
      this[_compView_4].createAndProject(this[_FocusTrapComponent_4_5], JSArrayOfObject().of([JSArrayOfViewContainer().of([this[_appEl_5]])]));
      this[_compView_3].createAndProject(this[_MaterialPopupComponent_3_8], JSArrayOfObject().of([C1 || CT.C1, JSArrayOfHtmlElement().of([_el_4]), C1 || CT.C1]));
      let subscription_0 = this[_DropdownButtonComponent_2_5].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(_ctx, 'onTrigger')));
      let subscription_1 = this[_MaterialPopupComponent_3_8].onVisible.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handleEvent_0)));
      _ctx.dropdownButton = this[_DropdownButtonComponent_2_5];
      this.initSubscriptions(JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(has_disabled.HasDisabled) || token === dart.wrapType(focus_interface.Focusable)) && 2 === nodeIndex) {
        return this[_DropdownButtonComponent_2_5];
      }
      if (3 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        if (token === dart.wrapType(material_popup.MaterialPopupComponent) || token === dart.wrapType(deferred_content_aware.DeferredContentAware) || token === dart.wrapType(material_dropdown_base.DropdownHandle)) {
          return this[_MaterialPopupComponent_3_8];
        }
        if (token === dart.wrapType(popup_ref.PopupRef)) {
          return this[_PopupRef_3_10];
        }
        if (token === dart.wrapType(popup_hierarchy.PopupHierarchy)) {
          return this[_PopupHierarchy_3_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_container = this[_PopupSourceDirective_0_5];
      this[_NgIf_1_9].ngIf = _ctx.presetDates[$isNotEmpty];
      changed = false;
      let currVal_1 = _ctx.formattedDate;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "formattedDate", ""))) {
        this[_DropdownButtonComponent_2_5].buttonText = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "disabled", ""))) {
        this[_DropdownButtonComponent_2_5].disabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.error;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "error", ""))) {
        this[_DropdownButtonComponent_2_5].error = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_DropdownButtonComponent_2_5].ngOnInit();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialPopupComponent_3_8].enforceSpaceConstraints = true;
        changed = true;
      }
      let currVal_6 = _ctx.preferredPositions;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "preferredPositions", ""))) {
        this[_MaterialPopupComponent_3_8].preferredPositions = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = local_container;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "container", ""))) {
        this[_MaterialPopupComponent_3_8].source = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.popupVisible;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "popupVisible", ""))) {
        this[_MaterialPopupComponent_3_8].visible = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        this[_DeferredContentDirective_5_9].preserveDimensions = true;
      }
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(this[_query_AutoFocusDirective_4_0_isDirty])) {
          this[_FocusTrapComponent_4_5].autoFocus = queries.firstOrNull(focus.AutoFocusDirective, this[_appEl_5].mapNestedViews(focus.AutoFocusDirective, material_datepicker$46template._ViewMaterialDatepickerComponent2, dart.fn(nestedView => JSArrayOfAutoFocusDirective().of([nestedView[_AutoFocusDirective_4_8]]), _ViewMaterialDatepickerComponent2ToListOfAutoFocusDirective())));
          this[_query_AutoFocusDirective_4_0_isDirty] = false;
        }
        if (dart.test(this[_viewQuery_MaterialInputComponent_1_isDirty])) {
          _ctx.textInput = queries.firstOrNull(material_input.MaterialInputComponent, this[_appEl_5].mapNestedViews(material_input.MaterialInputComponent, material_datepicker$46template._ViewMaterialDatepickerComponent2, dart.fn(nestedView => JSArrayOfMaterialInputComponent().of([nestedView[_MaterialInputComponent_4_6]]), _ViewMaterialDatepickerComponent2ToListOfMaterialInputComponent())));
          this[_viewQuery_MaterialInputComponent_1_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.ariaLabelForDropdownButton;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "ariaLabelForDropdownButton", ""))) {
        dom_helpers.updateAttribute(this[_el_2], "aria-label", currVal_0);
        this[_expr_0] = currVal_0;
      }
      if (dart.test(firstCheck)) {
        if (_ctx.popupClassName != null) {
          this[_compView_3].updateChildClassNonHtml(this[_el_3], _ctx.popupClassName);
        }
      }
      this[_compView_3].detectHostChanges(firstCheck);
      this[_compView_2].detectChanges();
      this[_compView_3].detectChanges();
      this[_compView_4].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_PopupSourceDirective_0_5].ngAfterViewInit();
          this[_MaterialPopupComponent_3_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_compView_2].destroyInternalState();
      this[_compView_3].destroyInternalState();
      this[_compView_4].destroyInternalState();
      this[_PopupSourceDirective_0_5].ngOnDestroy();
      this[_DeferredContentDirective_5_9].ngOnDestroy();
      this[_FocusTrapComponent_4_5].ngOnDestroy();
      this[_MaterialPopupComponent_3_8].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.popupVisible = core.bool._check($36event);
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_10 = _ctx.compact;
      if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "compact", currVal_10);
        this[_expr_10] = currVal_10;
      }
    }
    initComponentStyles() {
      let styles = material_datepicker$46template.ViewMaterialDatepickerComponent0._componentStyles;
      if (styles == null) {
        material_datepicker$46template.ViewMaterialDatepickerComponent0._componentStyles = styles = material_datepicker$46template.ViewMaterialDatepickerComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_datepicker$46template.styles$MaterialDatepickerComponent, material_datepicker$46template.ViewMaterialDatepickerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_datepicker$46template.ViewMaterialDatepickerComponent0.new = function(parentView, parentIndex) {
    this[_viewQuery_MaterialInputComponent_1_isDirty] = true;
    this[_query_AutoFocusDirective_4_0_isDirty] = true;
    this[_PopupSourceDirective_0_5] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_compView_2] = null;
    this[_DropdownButtonComponent_2_5] = null;
    this[_compView_3] = null;
    this[_appEl_3] = null;
    this[_MaterialPopupComponent_3_8] = null;
    this[__PopupRef_3_10] = null;
    this[__PopupHierarchy_3_12] = null;
    this[_compView_4] = null;
    this[_FocusTrapComponent_4_5] = null;
    this[_appEl_5] = null;
    this[_DeferredContentDirective_5_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_10] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    material_datepicker$46template.ViewMaterialDatepickerComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-datepicker"));
  }).prototype = material_datepicker$46template.ViewMaterialDatepickerComponent0.prototype;
  dart.addTypeTests(material_datepicker$46template.ViewMaterialDatepickerComponent0);
  dart.setMethodSignature(material_datepicker$46template.ViewMaterialDatepickerComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker$46template.ViewMaterialDatepickerComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_datepicker$46template.ViewMaterialDatepickerComponent0, () => ({
    __proto__: dart.getGetters(material_datepicker$46template.ViewMaterialDatepickerComponent0.__proto__),
    [_PopupRef_3_10]: dart.dynamic,
    [_PopupHierarchy_3_12]: dart.dynamic
  }));
  dart.setLibraryUri(material_datepicker$46template.ViewMaterialDatepickerComponent0, "package:angular_components/material_datepicker/material_datepicker.template.dart");
  dart.setFieldSignature(material_datepicker$46template.ViewMaterialDatepickerComponent0, () => ({
    __proto__: dart.getFields(material_datepicker$46template.ViewMaterialDatepickerComponent0.__proto__),
    [_viewQuery_MaterialInputComponent_1_isDirty]: dart.fieldType(core.bool),
    [_query_AutoFocusDirective_4_0_isDirty]: dart.fieldType(core.bool),
    [_PopupSourceDirective_0_5]: dart.fieldType(popup_source_directive.PopupSourceDirective),
    [_appEl_1]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(ng_if.NgIf),
    [_compView_2]: dart.fieldType(dropdown_button$46template.ViewDropdownButtonComponent0),
    [_DropdownButtonComponent_2_5]: dart.fieldType(dropdown_button.DropdownButtonComponent),
    [_compView_3]: dart.fieldType(material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_3]: dart.fieldType(view_container.ViewContainer),
    [_MaterialPopupComponent_3_8]: dart.fieldType(material_popup.MaterialPopupComponent),
    [__PopupRef_3_10]: dart.fieldType(dart.dynamic),
    [__PopupHierarchy_3_12]: dart.fieldType(dart.dynamic),
    [_compView_4]: dart.fieldType(focus_trap$46template.ViewFocusTrapComponent0),
    [_FocusTrapComponent_4_5]: dart.fieldType(focus_trap.FocusTrapComponent),
    [_appEl_5]: dart.fieldType(view_container.ViewContainer),
    [_DeferredContentDirective_5_9]: dart.fieldType(deferred_content.DeferredContentDirective),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.String),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_10]: dart.fieldType(core.bool),
    [_el_2]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(material_datepicker$46template.ViewMaterialDatepickerComponent0, {
    /*material_datepicker$46template.ViewMaterialDatepickerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _textBinding_1 = dart.privateName(material_datepicker$46template, "_textBinding_1");
  material_datepicker$46template._ViewMaterialDatepickerComponent1 = class _ViewMaterialDatepickerComponent1 extends embedded_view.EmbeddedView$(material_datepicker.MaterialDatepickerComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "primary-label");
      this.addShimC(html.HtmlElement._check(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.labelMsg));
    }
  };
  (material_datepicker$46template._ViewMaterialDatepickerComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_datepicker$46template._ViewMaterialDatepickerComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_datepicker$46template._ViewMaterialDatepickerComponent1.prototype;
  dart.addTypeTests(material_datepicker$46template._ViewMaterialDatepickerComponent1);
  dart.setMethodSignature(material_datepicker$46template._ViewMaterialDatepickerComponent1, () => ({
    __proto__: dart.getMethods(material_datepicker$46template._ViewMaterialDatepickerComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_datepicker$46template._ViewMaterialDatepickerComponent1, "package:angular_components/material_datepicker/material_datepicker.template.dart");
  dart.setFieldSignature(material_datepicker$46template._ViewMaterialDatepickerComponent1, () => ({
    __proto__: dart.getFields(material_datepicker$46template._ViewMaterialDatepickerComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(text_binding.TextBinding)
  }));
  const _appEl_2 = dart.privateName(material_datepicker$46template, "_appEl_2");
  const _NgIf_2_9 = dart.privateName(material_datepicker$46template, "_NgIf_2_9");
  const _DeferredValidator_4_5 = dart.privateName(material_datepicker$46template, "_DeferredValidator_4_5");
  const _DateInputDirective_4_9 = dart.privateName(material_datepicker$46template, "_DateInputDirective_4_9");
  const _MaterialInputDefaultValueAccessor_4_11 = dart.privateName(material_datepicker$46template, "_MaterialInputDefaultValueAccessor_4_11");
  const __NgValidators_4_12 = dart.privateName(material_datepicker$46template, "__NgValidators_4_12");
  const _NgIf_5_9 = dart.privateName(material_datepicker$46template, "_NgIf_5_9");
  const _compView_6 = dart.privateName(material_datepicker$46template, "_compView_6");
  const _MaterialCalendarPickerComponent_6_5 = dart.privateName(material_datepicker$46template, "_MaterialCalendarPickerComponent_6_5");
  const _NgClass_6_6 = dart.privateName(material_datepicker$46template, "_NgClass_6_6");
  const _expr_4 = dart.privateName(material_datepicker$46template, "_expr_4");
  const _expr_5 = dart.privateName(material_datepicker$46template, "_expr_5");
  const _expr_9 = dart.privateName(material_datepicker$46template, "_expr_9");
  const _expr_11 = dart.privateName(material_datepicker$46template, "_expr_11");
  const _expr_13 = dart.privateName(material_datepicker$46template, "_expr_13");
  const _el_0 = dart.privateName(material_datepicker$46template, "_el_0");
  const _NgValidators_4_12 = dart.privateName(material_datepicker$46template, "_NgValidators_4_12");
  let C6;
  let C7;
  let C8;
  let C9;
  material_datepicker$46template._ViewMaterialDatepickerComponent2 = class _ViewMaterialDatepickerComponent2 extends embedded_view.EmbeddedView$(material_datepicker.MaterialDatepickerComponent) {
    get [_NgValidators_4_12]() {
      if (this[__NgValidators_4_12] == null) {
        this[__NgValidators_4_12] = [this[_DeferredValidator_4_5]];
      }
      return this[__NgValidators_4_12];
    }
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "popup-content");
      this.addShimC(this[_el_0]);
      let _el_1 = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_1, "inner-label-wrapper");
      this.addShimC(_el_1);
      let _anchor_2 = dom_helpers.appendAnchor(_el_1);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C6 || CT.C6);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _el_3 = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_3, "date-input");
      this.addShimC(_el_3);
      this[_compView_4] = new material_input$46template.ViewMaterialInputComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootElement;
      _el_3[$append](_el_4);
      dom_helpers.setAttribute(_el_4, "autoFocus", "");
      dom_helpers.setAttribute(_el_4, "dateParsing", "");
      dom_helpers.setAttribute(_el_4, "type", "text");
      this.addShimC(_el_4);
      this[_DeferredValidator_4_5] = new deferred_validator.DeferredValidator.new();
      this[_MaterialInputComponent_4_6] = new material_input.MaterialInputComponent.new("text", null, null, this[_compView_4], this[_DeferredValidator_4_5]);
      this[_AutoFocusDirective_4_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(focus.AutoFocusDirective, dart.wrapType(focus.AutoFocusDirective), dart.fn(() => new focus.AutoFocusDirective.new(_el_4, dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentIndex)), this[_MaterialInputComponent_4_6], modal.ModalComponent._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(modal.ModalComponent), this.parentView.parentIndex)), popup_ref.PopupRef._check(optimizations.unsafeCast(material_datepicker$46template.ViewMaterialDatepickerComponent0, this.parentView)[_PopupRef_3_10])), VoidToAutoFocusDirective())) : new focus.AutoFocusDirective.new(_el_4, dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentIndex)), this[_MaterialInputComponent_4_6], modal.ModalComponent._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(modal.ModalComponent), this.parentView.parentIndex)), popup_ref.PopupRef._check(optimizations.unsafeCast(material_datepicker$46template.ViewMaterialDatepickerComponent0, this.parentView)[_PopupRef_3_10]));
      this[_DateInputDirective_4_9] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(date_input.DateInputDirective, dart.wrapType(date_input.DateInputDirective), dart.fn(() => new date_input.DateInputDirective.new(time.Clock._check(this.parentView.parentView.injectorGetOptional(C7 || CT.C7, this.parentView.parentIndex)), time.Clock._check(this.parentView.parentView.injectorGet(dart.wrapType(time.Clock), this.parentView.parentIndex)), this[_MaterialInputComponent_4_6]), VoidToDateInputDirective())) : new date_input.DateInputDirective.new(time.Clock._check(this.parentView.parentView.injectorGetOptional(C7 || CT.C7, this.parentView.parentIndex)), time.Clock._check(this.parentView.parentView.injectorGet(dart.wrapType(time.Clock), this.parentView.parentIndex)), this[_MaterialInputComponent_4_6]);
      this[_MaterialInputDefaultValueAccessor_4_11] = new material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_4_6], null);
      this[_compView_4].createAndProject(this[_MaterialInputComponent_4_6], JSArrayOfObject().of([C1 || CT.C1, C1 || CT.C1]));
      let _anchor_5 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_5] = new view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C8 || CT.C8);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      this[_compView_6] = new material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new(this, 6);
      let _el_6 = this[_compView_6].rootElement;
      this[_el_0][$append](_el_6);
      dom_helpers.setAttribute(_el_6, "aria-hidden", "true");
      this.updateChildClassNonHtml(_el_6, "calendar-picker");
      dom_helpers.setAttribute(_el_6, "mode", "single-date");
      this.addShimC(_el_6);
      this[_MaterialCalendarPickerComponent_6_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_calendar_picker.MaterialCalendarPickerComponent, dart.wrapType(material_calendar_picker.MaterialCalendarPickerComponent), dart.fn(() => new material_calendar_picker.MaterialCalendarPickerComponent.new(time.Clock._check(this.parentView.parentView.injectorGetOptional(C7 || CT.C7, this.parentView.parentIndex)), time.Clock._check(this.parentView.parentView.injectorGet(dart.wrapType(time.Clock), this.parentView.parentIndex)), "single-date"), VoidToMaterialCalendarPickerComponent())) : new material_calendar_picker.MaterialCalendarPickerComponent.new(time.Clock._check(this.parentView.parentView.injectorGetOptional(C7 || CT.C7, this.parentView.parentIndex)), time.Clock._check(this.parentView.parentView.injectorGet(dart.wrapType(time.Clock), this.parentView.parentIndex)), "single-date");
      this[_NgClass_6_6] = new ng_class.NgClass.new(_el_6);
      this[_compView_6].create(this[_MaterialCalendarPickerComponent_6_5]);
      this[_el_0][$addEventListener]("keyup", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'onKeyUp')));
      let subscription_0 = this[_DateInputDirective_4_9].dateChange.listen(this.eventHandler1(date.Date, date.Date, dart.bind(_ctx, 'setDateFromInput')));
      let subscription_1 = this[_MaterialCalendarPickerComponent_6_5].stateChange.listen(this.eventHandler1(calendar.CalendarState, calendar.CalendarState, dart.bind(this, _handleEvent_0)));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([this[_el_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (4 === nodeIndex) {
        if (token === dart.wrapType(deferred_validator.DeferredValidator)) {
          return this[_DeferredValidator_4_5];
        }
        if (token === dart.wrapType(material_input.MaterialInputComponent) || token === dart.wrapType(focus_interface.Focusable) || token === dart.wrapType(base_material_input.BaseMaterialInput) || token === dart.wrapType(reference.ReferenceDirective) || token === dart.wrapType(has_disabled.HasDisabled)) {
          return this[_MaterialInputComponent_4_6];
        }
        if (token === (C9 || CT.C9)) {
          return this[_NgValidators_4_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      this[_NgIf_2_9].ngIf = _ctx.presetDates[$isNotEmpty];
      changed = false;
      let currVal_1 = _ctx.placeholderMsg;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "placeholderMsg", ""))) {
        this[_MaterialInputComponent_4_6].label = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.required;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "required", ""))) {
        this[_MaterialInputComponent_4_6].required = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        this[_AutoFocusDirective_4_8].autoFocus = true;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_AutoFocusDirective_4_8].ngOnInit();
      }
      let currVal_4 = _ctx.outputFormat;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "outputFormat", ""))) {
        this[_DateInputDirective_4_9].dateFormat = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.maxDate;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "maxDate", ""))) {
        this[_DateInputDirective_4_9].maxDate = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.minDate;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "minDate", ""))) {
        this[_DateInputDirective_4_9].minDate = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.date;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "date", ""))) {
        this[_DateInputDirective_4_9].date = currVal_7;
        this[_expr_7] = currVal_7;
      }
      this[_NgIf_5_9].ngIf = _ctx.presetDates[$isNotEmpty];
      changed = false;
      let currVal_8 = _ctx.calendar;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "calendar", ""))) {
        this[_MaterialCalendarPickerComponent_6_5].state = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.minDate;
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "minDate", ""))) {
        this[_MaterialCalendarPickerComponent_6_5].minDate = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.maxDate;
      if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, "maxDate", ""))) {
        this[_MaterialCalendarPickerComponent_6_5].maxDate = currVal_10;
        changed = true;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.compact;
      if (dart.test(check_binding.checkBinding(this[_expr_11], currVal_11, "compact", ""))) {
        this[_MaterialCalendarPickerComponent_6_5].compact = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      if (changed) {
        this[_MaterialCalendarPickerComponent_6_5].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MaterialCalendarPickerComponent_6_5].ngOnInit();
      }
      if (dart.test(firstCheck)) {
        this[_NgClass_6_6].initialClasses = "calendar-picker";
      }
      let currVal_13 = _ctx.calendarWeekRowsStyle;
      if (dart.test(check_binding.checkBinding(this[_expr_13], currVal_13, "calendarWeekRowsStyle", ""))) {
        this[_NgClass_6_6].rawClass = currVal_13;
        this[_expr_13] = currVal_13;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgClass_6_6].ngDoCheck();
      }
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      let currVal_0 = _ctx.compact;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "compact", ""))) {
        dom_helpers.updateClassBinding(this[_el_0], "compact", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_6].detectHostChanges(firstCheck);
      this[_compView_4].detectChanges();
      this[_compView_6].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialInputComponent_4_6].ngAfterViewInit();
          this[_MaterialCalendarPickerComponent_6_5].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(material_datepicker$46template.ViewMaterialDatepickerComponent0, this.parentView)[_viewQuery_MaterialInputComponent_1_isDirty] = true;
      optimizations.unsafeCast(material_datepicker$46template.ViewMaterialDatepickerComponent0, this.parentView)[_query_AutoFocusDirective_4_0_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_compView_4].destroyInternalState();
      this[_compView_6].destroyInternalState();
      this[_MaterialInputComponent_4_6].ngOnDestroy();
      this[_AutoFocusDirective_4_8].ngOnDestroy();
      this[_DateInputDirective_4_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_4_11].ngOnDestroy();
      this[_MaterialCalendarPickerComponent_6_5].ngOnDestroy();
      this[_NgClass_6_6].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.calendar = calendar.CalendarState._check($36event);
    }
  };
  (material_datepicker$46template._ViewMaterialDatepickerComponent2.new = function(parentView, parentIndex) {
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_compView_4] = null;
    this[_DeferredValidator_4_5] = null;
    this[_MaterialInputComponent_4_6] = null;
    this[_AutoFocusDirective_4_8] = null;
    this[_DateInputDirective_4_9] = null;
    this[_MaterialInputDefaultValueAccessor_4_11] = null;
    this[__NgValidators_4_12] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_compView_6] = null;
    this[_MaterialCalendarPickerComponent_6_5] = null;
    this[_NgClass_6_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_13] = null;
    this[_el_0] = null;
    material_datepicker$46template._ViewMaterialDatepickerComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_datepicker$46template._ViewMaterialDatepickerComponent2.prototype;
  dart.addTypeTests(material_datepicker$46template._ViewMaterialDatepickerComponent2);
  dart.setMethodSignature(material_datepicker$46template._ViewMaterialDatepickerComponent2, () => ({
    __proto__: dart.getMethods(material_datepicker$46template._ViewMaterialDatepickerComponent2.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker$46template._ViewMaterialDatepickerComponent2, () => ({
    __proto__: dart.getGetters(material_datepicker$46template._ViewMaterialDatepickerComponent2.__proto__),
    [_NgValidators_4_12]: core.List
  }));
  dart.setLibraryUri(material_datepicker$46template._ViewMaterialDatepickerComponent2, "package:angular_components/material_datepicker/material_datepicker.template.dart");
  dart.setFieldSignature(material_datepicker$46template._ViewMaterialDatepickerComponent2, () => ({
    __proto__: dart.getFields(material_datepicker$46template._ViewMaterialDatepickerComponent2.__proto__),
    [_appEl_2]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(ng_if.NgIf),
    [_compView_4]: dart.fieldType(material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_4_5]: dart.fieldType(deferred_validator.DeferredValidator),
    [_MaterialInputComponent_4_6]: dart.fieldType(material_input.MaterialInputComponent),
    [_AutoFocusDirective_4_8]: dart.fieldType(focus.AutoFocusDirective),
    [_DateInputDirective_4_9]: dart.fieldType(date_input.DateInputDirective),
    [_MaterialInputDefaultValueAccessor_4_11]: dart.fieldType(material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [__NgValidators_4_12]: dart.fieldType(core.List),
    [_appEl_5]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(ng_if.NgIf),
    [_compView_6]: dart.fieldType(material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0),
    [_MaterialCalendarPickerComponent_6_5]: dart.fieldType(material_calendar_picker.MaterialCalendarPickerComponent),
    [_NgClass_6_6]: dart.fieldType(ng_class.NgClass),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(core.bool),
    [_expr_13]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  material_datepicker$46template._ViewMaterialDatepickerComponent3 = class _ViewMaterialDatepickerComponent3 extends embedded_view.EmbeddedView$(material_datepicker.MaterialDatepickerComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(html.HtmlElement._check(_el_0), "inner-label");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.labelMsg));
    }
  };
  (material_datepicker$46template._ViewMaterialDatepickerComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_datepicker$46template._ViewMaterialDatepickerComponent3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_datepicker$46template._ViewMaterialDatepickerComponent3.prototype;
  dart.addTypeTests(material_datepicker$46template._ViewMaterialDatepickerComponent3);
  dart.setMethodSignature(material_datepicker$46template._ViewMaterialDatepickerComponent3, () => ({
    __proto__: dart.getMethods(material_datepicker$46template._ViewMaterialDatepickerComponent3.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_datepicker$46template._ViewMaterialDatepickerComponent3, "package:angular_components/material_datepicker/material_datepicker.template.dart");
  dart.setFieldSignature(material_datepicker$46template._ViewMaterialDatepickerComponent3, () => ({
    __proto__: dart.getFields(material_datepicker$46template._ViewMaterialDatepickerComponent3.__proto__),
    [_textBinding_1]: dart.finalFieldType(text_binding.TextBinding)
  }));
  const _NgFor_1_9 = dart.privateName(material_datepicker$46template, "_NgFor_1_9");
  let C10;
  material_datepicker$46template._ViewMaterialDatepickerComponent4 = class _ViewMaterialDatepickerComponent4 extends embedded_view.EmbeddedView$(material_datepicker.MaterialDatepickerComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "preset-dates-wrapper");
      dom_helpers.setAttribute(_el_0, "role", "listbox");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C10 || CT.C10);
      this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.presetDates;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "presetDates", ""))) {
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
  };
  (material_datepicker$46template._ViewMaterialDatepickerComponent4.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    material_datepicker$46template._ViewMaterialDatepickerComponent4.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_datepicker$46template._ViewMaterialDatepickerComponent4.prototype;
  dart.addTypeTests(material_datepicker$46template._ViewMaterialDatepickerComponent4);
  dart.setMethodSignature(material_datepicker$46template._ViewMaterialDatepickerComponent4, () => ({
    __proto__: dart.getMethods(material_datepicker$46template._ViewMaterialDatepickerComponent4.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_datepicker$46template._ViewMaterialDatepickerComponent4, "package:angular_components/material_datepicker/material_datepicker.template.dart");
  dart.setFieldSignature(material_datepicker$46template._ViewMaterialDatepickerComponent4, () => ({
    __proto__: dart.getFields(material_datepicker$46template._ViewMaterialDatepickerComponent4.__proto__),
    [_appEl_1]: dart.fieldType(view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  const _compView_0 = dart.privateName(material_datepicker$46template, "_compView_0");
  const _MaterialSelectItemComponent_0_5 = dart.privateName(material_datepicker$46template, "_MaterialSelectItemComponent_0_5");
  material_datepicker$46template._ViewMaterialDatepickerComponent5 = class _ViewMaterialDatepickerComponent5 extends embedded_view.EmbeddedView$(material_datepicker.MaterialDatepickerComponent) {
    build() {
      this[_compView_0] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.addShimC(_el_0);
      this[_MaterialSelectItemComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_select_item.MaterialSelectItemComponent, dart.wrapType(material_select_item.MaterialSelectItemComponent), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(_el_0, optimizations.unsafeCast(material_datepicker$46template.ViewMaterialDatepickerComponent0, this.parentView.parentView.parentView)[_MaterialPopupComponent_3_8], activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentIndex)), this[_compView_0], null), VoidToMaterialSelectItemComponent())) : new material_select_item.MaterialSelectItemComponent.new(_el_0, optimizations.unsafeCast(material_datepicker$46template.ViewMaterialDatepickerComponent0, this.parentView.parentView.parentView)[_MaterialPopupComponent_3_8], activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentIndex)), this[_compView_0], null);
      this[_compView_0].createAndProject(this[_MaterialSelectItemComponent_0_5], JSArrayOfObject().of([JSArrayOfText().of([this[_textBinding_1].element])]));
      let subscription_0 = this[_MaterialSelectItemComponent_0_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handleEvent_0)));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(selection_container.SelectionItem) || token === dart.wrapType(has_disabled.HasDisabled) || token === dart.wrapType(has_renderer.HasRenderer)) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialSelectItemComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      let local_presetDate = optimizations.unsafeCast(range.SingleDayRange, this.locals[$_get]("$implicit"));
      if (dart.test(firstCheck)) {
        this[_MaterialSelectItemComponent_0_5].closeOnActivate = false;
      }
      let currVal_0 = _ctx.isPresetDateSelected(local_presetDate);
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "isPresetDateSelected(presetDate)", ""))) {
        this[_MaterialSelectItemComponent_0_5].selected = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_textBinding_1].updateText(interpolate.interpolateString0(local_presetDate.title));
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialSelectItemComponent_0_5].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let local_presetDate = optimizations.unsafeCast(range.SingleDayRange, this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.onPresetClicked(local_presetDate);
    }
  };
  (material_datepicker$46template._ViewMaterialDatepickerComponent5.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_MaterialSelectItemComponent_0_5] = null;
    this[_expr_0] = null;
    material_datepicker$46template._ViewMaterialDatepickerComponent5.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_datepicker$46template._ViewMaterialDatepickerComponent5.prototype;
  dart.addTypeTests(material_datepicker$46template._ViewMaterialDatepickerComponent5);
  dart.setMethodSignature(material_datepicker$46template._ViewMaterialDatepickerComponent5, () => ({
    __proto__: dart.getMethods(material_datepicker$46template._ViewMaterialDatepickerComponent5.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_datepicker$46template._ViewMaterialDatepickerComponent5, "package:angular_components/material_datepicker/material_datepicker.template.dart");
  dart.setFieldSignature(material_datepicker$46template._ViewMaterialDatepickerComponent5, () => ({
    __proto__: dart.getFields(material_datepicker$46template._ViewMaterialDatepickerComponent5.__proto__),
    [_textBinding_1]: dart.finalFieldType(text_binding.TextBinding),
    [_compView_0]: dart.fieldType(material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_0_5]: dart.fieldType(material_select_item.MaterialSelectItemComponent),
    [_expr_0]: dart.fieldType(core.bool)
  }));
  material_datepicker$46template._ViewMaterialDatepickerComponentHost0 = class _ViewMaterialDatepickerComponentHost0 extends host_view.HostView$(material_datepicker.MaterialDatepickerComponent) {
    build() {
      this.componentView = new material_datepicker$46template.ViewMaterialDatepickerComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_datepicker.MaterialDatepickerComponent, dart.wrapType(material_datepicker.MaterialDatepickerComponent), dart.fn(() => new material_datepicker.MaterialDatepickerComponent.new(_el_0, null, time.Clock._check(this.injectorGetOptional(C7 || CT.C7, this.parentIndex))), VoidToMaterialDatepickerComponent())) : new material_datepicker.MaterialDatepickerComponent.new(_el_0, null, time.Clock._check(this.injectorGetOptional(C7 || CT.C7, this.parentIndex)));
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(has_disabled.HasDisabled) && 0 === nodeIndex) {
        return this.component;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      this.componentView.detectHostChanges(firstCheck);
      this.componentView.detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this.component.ngAfterViewInit();
        }
      }
    }
  };
  (material_datepicker$46template._ViewMaterialDatepickerComponentHost0.new = function(injector) {
    material_datepicker$46template._ViewMaterialDatepickerComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = material_datepicker$46template._ViewMaterialDatepickerComponentHost0.prototype;
  dart.addTypeTests(material_datepicker$46template._ViewMaterialDatepickerComponentHost0);
  dart.setMethodSignature(material_datepicker$46template._ViewMaterialDatepickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker$46template._ViewMaterialDatepickerComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_datepicker$46template._ViewMaterialDatepickerComponentHost0, "package:angular_components/material_datepicker/material_datepicker.template.dart");
  material_datepicker$46template.viewFactory_MaterialDatepickerComponent1 = function viewFactory_MaterialDatepickerComponent1(parentView, parentIndex) {
    return new material_datepicker$46template._ViewMaterialDatepickerComponent1.new(parentView, parentIndex);
  };
  material_datepicker$46template.viewFactory_MaterialDatepickerComponent2 = function viewFactory_MaterialDatepickerComponent2(parentView, parentIndex) {
    return new material_datepicker$46template._ViewMaterialDatepickerComponent2.new(parentView, parentIndex);
  };
  material_datepicker$46template.viewFactory_MaterialDatepickerComponent3 = function viewFactory_MaterialDatepickerComponent3(parentView, parentIndex) {
    return new material_datepicker$46template._ViewMaterialDatepickerComponent3.new(parentView, parentIndex);
  };
  material_datepicker$46template.viewFactory_MaterialDatepickerComponent4 = function viewFactory_MaterialDatepickerComponent4(parentView, parentIndex) {
    return new material_datepicker$46template._ViewMaterialDatepickerComponent4.new(parentView, parentIndex);
  };
  material_datepicker$46template.viewFactory_MaterialDatepickerComponent5 = function viewFactory_MaterialDatepickerComponent5(parentView, parentIndex) {
    return new material_datepicker$46template._ViewMaterialDatepickerComponent5.new(parentView, parentIndex);
  };
  material_datepicker$46template.viewFactory_MaterialDatepickerComponentHost0 = function viewFactory_MaterialDatepickerComponentHost0(injector) {
    return new material_datepicker$46template._ViewMaterialDatepickerComponentHost0.new(injector);
  };
  material_datepicker$46template.initReflector = function initReflector() {
    if (dart.test(material_datepicker$46template._visited)) {
      return;
    }
    material_datepicker$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_datepicker.MaterialDatepickerComponent), material_datepicker$46template.MaterialDatepickerComponentNgFactory);
    angular$46template.initReflector();
    button_decorator$46template.initReflector();
    deferred_content$46template.initReflector();
    focus$46template.initReflector();
    focus_trap$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    has_disabled$46template.initReflector();
    alignment$46template.initReflector();
    popup$46template.initReflector();
    calendar$46template.initReflector();
    date_input$46template.initReflector();
    material_calendar_picker$46template.initReflector();
    module$46template.initReflector();
    range$46template.initReflector();
    material_input$46template.initReflector();
    material_list_item$46template.initReflector();
    material_popup$46template.initReflector();
    dropdown_button$46template.initReflector();
    material_select_item$46template.initReflector();
    focusable_mixin$46template.initReflector();
    keyboard_handler_mixin$46template.initReflector();
    date$46template.initReflector();
    css$46template.initReflector();
  };
  dart.copyProperties(material_datepicker$46template, {
    get MaterialDatepickerComponentNgFactory() {
      return material_datepicker$46template._MaterialDatepickerComponentNgFactory;
    }
  });
  let C12;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C11;
  dart.defineLazy(material_datepicker$46template, {
    /*material_datepicker$46template.styles$MaterialDatepickerComponent*/get styles$MaterialDatepickerComponent() {
      return [material_datepicker$46scss$46css$46shim.styles];
    },
    /*material_datepicker$46template._MaterialDatepickerComponentNgFactory*/get _MaterialDatepickerComponentNgFactory() {
      return C11 || CT.C11;
    },
    /*material_datepicker$46template.styles$MaterialDatepickerComponentHost*/get styles$MaterialDatepickerComponentHost() {
      return C1 || CT.C1;
    },
    /*material_datepicker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_datepicker/material_datepicker.template", {
    "package:angular_components/material_datepicker/material_datepicker.template.dart": material_datepicker$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_datepicker.template.dart"],"names":[],"mappings":"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","file":"material_datepicker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_datepicker$46template: material_datepicker$46template
  };
});

//# sourceMappingURL=material_datepicker.template.ddc.js.map

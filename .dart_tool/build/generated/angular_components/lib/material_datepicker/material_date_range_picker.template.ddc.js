define(['dart_sdk', 'packages/angular_components/material_popup/material_popup', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_select/dropdown_button.template', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular/src/runtime/queries', 'packages/angular_components/material_datepicker/material_date_range_picker', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_datepicker/next_prev_buttons.template', 'packages/angular_components/material_datepicker/next_prev_buttons', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular_components/material_datepicker/date_range_editor.template', 'packages/angular_components/material_datepicker/date_range_editor', 'packages/angular_components/material_datepicker/date_range_editor_host', 'packages/quiver/time', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_datepicker/config', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_datepicker/comparison.template', 'packages/angular_components/material_datepicker/comparison_option.template', 'packages/angular_components/material_datepicker/config.template', 'packages/angular_components/material_datepicker/date_range_editor_host.template', 'packages/angular_components/material_datepicker/model.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/material_datepicker/preset.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/date/date_formatter.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/material_datepicker/material_date_range_picker.scss.css.shim'], function(dart_sdk, packages__angular_components__material_popup__material_popup, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__button_decorator__button_decorator, packages__angular_components__focus__keyboard_only_focus_indicator, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__material_select__dropdown_button$46template, packages__angular_components__material_select__dropdown_button, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__interfaces__has_disabled, packages__angular_components__content__deferred_content_aware, packages__angular_components__mixins__material_dropdown_base, packages__angular__src__runtime__queries, packages__angular_components__material_datepicker__material_date_range_picker, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__angular_components__material_datepicker__next_prev_buttons$46template, packages__angular_components__material_datepicker__next_prev_buttons, packages__angular_components__focus__focus_trap$46template, packages__angular_components__focus__focus_trap, packages__angular_components__material_datepicker__date_range_editor$46template, packages__angular_components__material_datepicker__date_range_editor, packages__angular_components__material_datepicker__date_range_editor_host, packages__quiver__time, packages__angular_components__material_button__material_button$46template, packages__angular_components__theme__dark_theme, packages__angular_components__material_button__material_button, packages__angular_components__material_datepicker__config, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__content__deferred_content$46template, packages__angular_components__focus__focus$46template, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__material_datepicker__comparison$46template, packages__angular_components__material_datepicker__comparison_option$46template, packages__angular_components__material_datepicker__config$46template, packages__angular_components__material_datepicker__date_range_editor_host$46template, packages__angular_components__material_datepicker__model$46template, packages__angular_components__material_datepicker__module$46template, packages__angular_components__material_datepicker__preset$46template, packages__angular_components__material_datepicker__range$46template, packages__angular_components__mixins__focusable_mixin$46template, packages__angular_components__model__date__date$46template, packages__angular_components__model__date__date_formatter$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__utils__angular__css__css$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__material_datepicker__material_date_range_picker$46scss$46css$46shim) {
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
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const keyboard_only_focus_indicator = packages__angular_components__focus__keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
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
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const queries = packages__angular__src__runtime__queries.src__runtime__queries;
  const material_date_range_picker = packages__angular_components__material_datepicker__material_date_range_picker.material_datepicker__material_date_range_picker;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const next_prev_buttons$46template = packages__angular_components__material_datepicker__next_prev_buttons$46template.material_datepicker__next_prev_buttons$46template;
  const next_prev_buttons = packages__angular_components__material_datepicker__next_prev_buttons.material_datepicker__next_prev_buttons;
  const focus_trap$46template = packages__angular_components__focus__focus_trap$46template.focus__focus_trap$46template;
  const focus_trap = packages__angular_components__focus__focus_trap.focus__focus_trap;
  const date_range_editor$46template = packages__angular_components__material_datepicker__date_range_editor$46template.material_datepicker__date_range_editor$46template;
  const date_range_editor = packages__angular_components__material_datepicker__date_range_editor.material_datepicker__date_range_editor;
  const date_range_editor_host = packages__angular_components__material_datepicker__date_range_editor_host.material_datepicker__date_range_editor_host;
  const time = packages__quiver__time.time;
  const material_button$46template = packages__angular_components__material_button__material_button$46template.material_button__material_button$46template;
  const dark_theme = packages__angular_components__theme__dark_theme.theme__dark_theme;
  const material_button = packages__angular_components__material_button__material_button.material_button__material_button;
  const config = packages__angular_components__material_datepicker__config.material_datepicker__config;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const comparison$46template = packages__angular_components__material_datepicker__comparison$46template.material_datepicker__comparison$46template;
  const comparison_option$46template = packages__angular_components__material_datepicker__comparison_option$46template.material_datepicker__comparison_option$46template;
  const config$46template = packages__angular_components__material_datepicker__config$46template.material_datepicker__config$46template;
  const date_range_editor_host$46template = packages__angular_components__material_datepicker__date_range_editor_host$46template.material_datepicker__date_range_editor_host$46template;
  const model$46template = packages__angular_components__material_datepicker__model$46template.material_datepicker__model$46template;
  const module$46template = packages__angular_components__material_datepicker__module$46template.material_datepicker__module$46template;
  const preset$46template = packages__angular_components__material_datepicker__preset$46template.material_datepicker__preset$46template;
  const range$46template = packages__angular_components__material_datepicker__range$46template.material_datepicker__range$46template;
  const focusable_mixin$46template = packages__angular_components__mixins__focusable_mixin$46template.mixins__focusable_mixin$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const date_formatter$46template = packages__angular_components__model__date__date_formatter$46template.model__date__date_formatter$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const css$46template = packages__angular_components__utils__angular__css__css$46template.utils__angular__css__css$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const material_date_range_picker$46scss$46css$46shim = packages__angular_components__material_datepicker__material_date_range_picker$46scss$46css$46shim.material_datepicker__material_date_range_picker$46scss$46css$46shim;
  const material_date_range_picker$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $isNotEmpty = dartx.isNotEmpty;
  let VoidToKeyboardOnlyFocusIndicatorDirective = () => (VoidToKeyboardOnlyFocusIndicatorDirective = dart.constFn(dart.fnType(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, [])))();
  let VoidToPopupSourceDirective = () => (VoidToPopupSourceDirective = dart.constFn(dart.fnType(popup_source_directive.PopupSourceDirective, [])))();
  let EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  let RenderViewAndintToEmbeddedViewOfvoid = () => (RenderViewAndintToEmbeddedViewOfvoid = dart.constFn(dart.fnType(EmbeddedViewOfvoid(), [render_view.RenderView, core.int])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let VoidToMaterialPopupComponent = () => (VoidToMaterialPopupComponent = dart.constFn(dart.fnType(material_popup.MaterialPopupComponent, [])))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(view_container.ViewContainer)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let JSArrayOfButtonDirective = () => (JSArrayOfButtonDirective = dart.constFn(_interceptors.JSArray$(button_decorator.ButtonDirective)))();
  let ListOfButtonDirective = () => (ListOfButtonDirective = dart.constFn(core.List$(button_decorator.ButtonDirective)))();
  let _ViewMaterialDateRangePickerComponent4ToListOfButtonDirective = () => (_ViewMaterialDateRangePickerComponent4ToListOfButtonDirective = dart.constFn(dart.fnType(ListOfButtonDirective(), [material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4])))();
  let JSArrayOfListOfButtonDirective = () => (JSArrayOfListOfButtonDirective = dart.constFn(_interceptors.JSArray$(ListOfButtonDirective())))();
  let VoidToDateRangeEditorComponent = () => (VoidToDateRangeEditorComponent = dart.constFn(dart.fnType(date_range_editor.DateRangeEditorComponent, [])))();
  let VoidToAcxDarkTheme = () => (VoidToAcxDarkTheme = dart.constFn(dart.fnType(dark_theme.AcxDarkTheme, [])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let VoidToMaterialDateRangePickerComponent = () => (VoidToMaterialDateRangePickerComponent = dart.constFn(dart.fnType(material_date_range_picker.MaterialDateRangePickerComponent, [])))();
  let ComponentFactoryOfMaterialDateRangePickerComponent = () => (ComponentFactoryOfMaterialDateRangePickerComponent = dart.constFn(component_factory.ComponentFactory$(material_date_range_picker.MaterialDateRangePickerComponent)))();
  let HostViewOfMaterialDateRangePickerComponent = () => (HostViewOfMaterialDateRangePickerComponent = dart.constFn(host_view.HostView$(material_date_range_picker.MaterialDateRangePickerComponent)))();
  let InjectorToHostViewOfMaterialDateRangePickerComponent = () => (InjectorToHostViewOfMaterialDateRangePickerComponent = dart.constFn(dart.fnType(HostViewOfMaterialDateRangePickerComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent1, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C1() {
      return C1 = dart.constList([], dart.dynamic);
    },
    get C2() {
      return C2 = dart.fn(material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent2, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C3() {
      return C3 = dart.fn(material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent3, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: OpaqueTokenOfListOfRelativePosition().prototype,
        [OpaqueToken__uniqueName]: "defaultPopupPositions"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayViewportBoundaries"
      });
    },
    get C7() {
      return C7 = dart.fn(material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent4, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C8() {
      return C8 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "acxDarkTheme"
      });
    },
    get C11() {
      return C11 = dart.fn(material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponentHost0, InjectorToHostViewOfMaterialDateRangePickerComponent());
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ComponentFactoryOfMaterialDateRangePickerComponent().prototype,
        [ComponentFactory__viewFactory]: C11 || CT.C11,
        [ComponentFactory_selector]: "material-date-range-picker"
      });
    }
  });
  const _viewQuery_ButtonDirective_0_isDirty = dart.privateName(material_date_range_picker$46template, "_viewQuery_ButtonDirective_0_isDirty");
  const _ButtonDirective_0_5 = dart.privateName(material_date_range_picker$46template, "_ButtonDirective_0_5");
  const _KeyboardOnlyFocusIndicatorDirective_0_6 = dart.privateName(material_date_range_picker$46template, "_KeyboardOnlyFocusIndicatorDirective_0_6");
  const _PopupSourceDirective_0_7 = dart.privateName(material_date_range_picker$46template, "_PopupSourceDirective_0_7");
  const _appEl_1 = dart.privateName(material_date_range_picker$46template, "_appEl_1");
  const _NgIf_1_9 = dart.privateName(material_date_range_picker$46template, "_NgIf_1_9");
  const _compView_4 = dart.privateName(material_date_range_picker$46template, "_compView_4");
  const _DropdownButtonComponent_4_5 = dart.privateName(material_date_range_picker$46template, "_DropdownButtonComponent_4_5");
  const _appEl_5 = dart.privateName(material_date_range_picker$46template, "_appEl_5");
  const _NgIf_5_9 = dart.privateName(material_date_range_picker$46template, "_NgIf_5_9");
  const _appEl_6 = dart.privateName(material_date_range_picker$46template, "_appEl_6");
  const _NgIf_6_9 = dart.privateName(material_date_range_picker$46template, "_NgIf_6_9");
  const _compView_7 = dart.privateName(material_date_range_picker$46template, "_compView_7");
  const _appEl_7 = dart.privateName(material_date_range_picker$46template, "_appEl_7");
  const _MaterialPopupComponent_7_8 = dart.privateName(material_date_range_picker$46template, "_MaterialPopupComponent_7_8");
  const __PopupHierarchy_7_11 = dart.privateName(material_date_range_picker$46template, "__PopupHierarchy_7_11");
  const __PopupRef_7_12 = dart.privateName(material_date_range_picker$46template, "__PopupRef_7_12");
  const _appEl_8 = dart.privateName(material_date_range_picker$46template, "_appEl_8");
  const _NgIf_8_9 = dart.privateName(material_date_range_picker$46template, "_NgIf_8_9");
  const _expr_0 = dart.privateName(material_date_range_picker$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_date_range_picker$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_date_range_picker$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_date_range_picker$46template, "_expr_3");
  const _expr_7 = dart.privateName(material_date_range_picker$46template, "_expr_7");
  const _expr_8 = dart.privateName(material_date_range_picker$46template, "_expr_8");
  const _expr_9 = dart.privateName(material_date_range_picker$46template, "_expr_9");
  const _expr_10 = dart.privateName(material_date_range_picker$46template, "_expr_10");
  const _el_0 = dart.privateName(material_date_range_picker$46template, "_el_0");
  const _el_7 = dart.privateName(material_date_range_picker$46template, "_el_7");
  const _PopupHierarchy_7_11 = dart.privateName(material_date_range_picker$46template, "_PopupHierarchy_7_11");
  const _PopupRef_7_12 = dart.privateName(material_date_range_picker$46template, "_PopupRef_7_12");
  let C0;
  let C1;
  let C2;
  let C3;
  const OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  let C4;
  let C5;
  let C6;
  let C7;
  const _handleEvent_0 = dart.privateName(material_date_range_picker$46template, "_handleEvent_0");
  const _handleEvent_1 = dart.privateName(material_date_range_picker$46template, "_handleEvent_1");
  const _MaterialButtonComponent_6_6 = dart.privateName(material_date_range_picker$46template, "_MaterialButtonComponent_6_6");
  const _MaterialButtonComponent_8_6 = dart.privateName(material_date_range_picker$46template, "_MaterialButtonComponent_8_6");
  material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0 = class ViewMaterialDateRangePickerComponent0 extends component_view.ComponentView$(material_date_range_picker.MaterialDateRangePickerComponent) {
    get [_PopupHierarchy_7_11]() {
      if (this[__PopupHierarchy_7_11] == null) {
        this[__PopupHierarchy_7_11] = material_popup.getHierarchy(this[_MaterialPopupComponent_7_8]);
      }
      return this[__PopupHierarchy_7_11];
    }
    get [_PopupRef_7_12]() {
      if (this[__PopupRef_7_12] == null) {
        this[__PopupRef_7_12] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_7_8]);
      }
      return this[__PopupRef_7_12];
    }
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_date_range_picker.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClass(this[_el_0], "main-content");
      dom_helpers.setAttribute(this[_el_0], "keyboardOnlyFocusIndicator", "");
      dom_helpers.setAttribute(this[_el_0], "popupSource", "");
      this.addShimC(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, dart.wrapType(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirective())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)));
      this[_PopupSourceDirective_0_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(popup_source_directive.PopupSourceDirective, dart.wrapType(popup_source_directive.PopupSourceDirective), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentIndex)), this[_el_0], reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(reference.ReferenceDirective), this.parentIndex)), focus_interface.Focusable._check(this.parentView.injectorGetOptional(dart.wrapType(focus_interface.Focusable), this.parentIndex)), null), VoidToPopupSourceDirective())) : new popup_source_directive.PopupSourceDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentIndex)), this[_el_0], reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(reference.ReferenceDirective), this.parentIndex)), focus_interface.Focusable._check(this.parentView.injectorGetOptional(dart.wrapType(focus_interface.Focusable), this.parentIndex)), null);
      let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _el_2 = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_2, "dropdown-and-comparison");
      this.addShimC(_el_2);
      let _el_3 = dom_helpers.appendSpan(doc, _el_2);
      this.updateChildClass(_el_3, "main-line");
      this.addShimE(_el_3);
      this[_compView_4] = new dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootElement;
      _el_3[$append](_el_4);
      this.updateChildClassNonHtml(_el_4, "menu-lookalike primary-range");
      this.addShimC(_el_4);
      this[_DropdownButtonComponent_4_5] = new dropdown_button.DropdownButtonComponent.new();
      this[_compView_4].createAndProject(this[_DropdownButtonComponent_4_5], JSArrayOfObject().of([C1 || CT.C1]));
      let _anchor_5 = dom_helpers.appendAnchor(_el_3);
      this[_appEl_5] = new view_container.ViewContainer.new(5, 3, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C2 || CT.C2);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = dom_helpers.appendAnchor(_el_2);
      this[_appEl_6] = new view_container.ViewContainer.new(6, 2, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C3 || CT.C3);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      this[_compView_7] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 7);
      this[_el_7] = this[_compView_7].rootElement;
      parentRenderNode[$append](this[_el_7]);
      dom_helpers.setAttribute(this[_el_7], "enforceSpaceConstraints", "");
      this.addShimC(html.HtmlElement._check(this[_el_7]));
      this[_appEl_7] = new view_container.ViewContainer.new(7, null, this, this[_el_7]);
      this[_MaterialPopupComponent_7_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_popup.MaterialPopupComponent, dart.wrapType(material_popup.MaterialPopupComponent), dart.fn(() => new material_popup.MaterialPopupComponent.new(popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGetOptional(dart.wrapType(popup_hierarchy.PopupHierarchy), this.parentIndex)), material_popup.MaterialPopupComponent._check(this.parentView.injectorGetOptional(dart.wrapType(material_popup.MaterialPopupComponent), this.parentIndex)), null, ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(overlay_service.OverlayService), this.parentIndex)), dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(zindexer.ZIndexer), this.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(C4 || CT.C4, this.parentIndex)), core.bool._check(this.parentView.injectorGet(C5 || CT.C5, this.parentIndex)), box.Box._check(this.parentView.injectorGet(C6 || CT.C6, this.parentIndex)), popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGetOptional(dart.wrapType(popup_size_provider.PopupSizeProvider), this.parentIndex)), this[_compView_7], this[_appEl_7], new element_ref.ElementRef.new(this[_el_7])), VoidToMaterialPopupComponent())) : new material_popup.MaterialPopupComponent.new(popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGetOptional(dart.wrapType(popup_hierarchy.PopupHierarchy), this.parentIndex)), material_popup.MaterialPopupComponent._check(this.parentView.injectorGetOptional(dart.wrapType(material_popup.MaterialPopupComponent), this.parentIndex)), null, ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(overlay_service.OverlayService), this.parentIndex)), dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(zindexer.ZIndexer), this.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(C4 || CT.C4, this.parentIndex)), core.bool._check(this.parentView.injectorGet(C5 || CT.C5, this.parentIndex)), box.Box._check(this.parentView.injectorGet(C6 || CT.C6, this.parentIndex)), popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGetOptional(dart.wrapType(popup_size_provider.PopupSizeProvider), this.parentIndex)), this[_compView_7], this[_appEl_7], new element_ref.ElementRef.new(this[_el_7]));
      let _anchor_8 = dom_helpers.createAnchor();
      this[_appEl_8] = new view_container.ViewContainer.new(8, 7, this, _anchor_8);
      let _TemplateRef_8_8 = new template_ref.TemplateRef.new(this[_appEl_8], C7 || CT.C7);
      this[_NgIf_8_9] = new ng_if.NgIf.new(this[_appEl_8], _TemplateRef_8_8);
      this[_compView_7].createAndProject(this[_MaterialPopupComponent_7_8], JSArrayOfObject().of([C1 || CT.C1, JSArrayOfViewContainer().of([this[_appEl_8]]), C1 || CT.C1]));
      this[_el_0][$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_0)));
      this[_el_0][$addEventListener]("mouseenter", this.eventHandler0(html.Event, dart.bind(_ctx, 'initEditor')));
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_1)));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'keydown')));
      this[_el_0][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
      this[_el_0][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'onMouseInteraction')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(_ctx, 'open')));
      let subscription_1 = this[_MaterialPopupComponent_7_8].onOpen.listen(this.eventHandler0(dart.void, dart.bind(_ctx, 'open')));
      let subscription_2 = this[_MaterialPopupComponent_7_8].onClose.listen(this.eventHandler0(dart.void, dart.bind(_ctx, 'close')));
      _ctx.focusOnClose = this[_KeyboardOnlyFocusIndicatorDirective_0_6];
      _ctx.popup = this[_MaterialPopupComponent_7_8];
      this.initSubscriptions(JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1, subscription_2]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 6) {
        if ((token === dart.wrapType(has_disabled.HasDisabled) || token === dart.wrapType(focus_interface.Focusable)) && 4 === nodeIndex) {
          return this[_DropdownButtonComponent_4_5];
        }
        if (token === dart.wrapType(button_decorator.ButtonDirective)) {
          return this[_ButtonDirective_0_5].instance;
        }
      }
      if (7 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        if (token === dart.wrapType(material_popup.MaterialPopupComponent) || token === dart.wrapType(deferred_content_aware.DeferredContentAware) || token === dart.wrapType(material_dropdown_base.DropdownHandle)) {
          return this[_MaterialPopupComponent_7_8];
        }
        if (token === dart.wrapType(popup_hierarchy.PopupHierarchy)) {
          return this[_PopupHierarchy_7_11];
        }
        if (token === dart.wrapType(popup_ref.PopupRef)) {
          return this[_PopupRef_7_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_button = this[_PopupSourceDirective_0_7];
      this[_NgIf_1_9].ngIf = dart.test(_ctx.hasTitle) && dart.test(_ctx.presets[$isNotEmpty]);
      changed = false;
      if (dart.test(firstCheck)) {
        this[_DropdownButtonComponent_4_5].tabbable = false;
        changed = true;
      }
      let currVal_0 = _ctx.formattedRange;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "formattedRange", ""))) {
        this[_DropdownButtonComponent_4_5].buttonText = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.dropdownButtonAriaLabel;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "dropdownButtonAriaLabel", ""))) {
        this[_DropdownButtonComponent_4_5].buttonAriaLabel = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "disabled", ""))) {
        this[_DropdownButtonComponent_4_5].disabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.error;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "error", ""))) {
        this[_DropdownButtonComponent_4_5].error = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_DropdownButtonComponent_4_5].ngOnInit();
      }
      this[_NgIf_5_9].ngIf = _ctx.showNextPrevButtons;
      this[_NgIf_6_9].ngIf = _ctx.hasComparison;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialPopupComponent_7_8].enforceSpaceConstraints = true;
        changed = true;
      }
      let currVal_7 = _ctx.preferredPositions;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "preferredPositions", ""))) {
        this[_MaterialPopupComponent_7_8].preferredPositions = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = local_button;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "button", ""))) {
        this[_MaterialPopupComponent_7_8].source = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_7].markAsCheckOnce();
      }
      this[_NgIf_8_9].ngIf = _ctx.isEditorCreated;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_8].detectChangesInNestedViews();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(this[_viewQuery_ButtonDirective_0_isDirty])) {
          _ctx.focusableElement = queries.firstOrNull(button_decorator.ButtonDirective, queries.flattenNodes(button_decorator.ButtonDirective, JSArrayOfListOfButtonDirective().of([JSArrayOfButtonDirective().of([this[_ButtonDirective_0_5].instance]), this[_appEl_8].mapNestedViews(button_decorator.ButtonDirective, material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4, dart.fn(nestedView => JSArrayOfButtonDirective().of([nestedView[_MaterialButtonComponent_6_6], nestedView[_MaterialButtonComponent_8_6]]), _ViewMaterialDateRangePickerComponent4ToListOfButtonDirective()))])));
          this[_viewQuery_ButtonDirective_0_isDirty] = false;
        }
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      if (dart.test(firstCheck)) {
        if (_ctx.popupClassName != null) {
          this[_compView_7].updateChildClassNonHtml(this[_el_7], _ctx.popupClassName);
        }
      }
      this[_compView_7].detectHostChanges(firstCheck);
      this[_compView_4].detectChanges();
      this[_compView_7].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_PopupSourceDirective_0_7].ngAfterViewInit();
          this[_MaterialPopupComponent_7_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_appEl_8].destroyNestedViews();
      this[_compView_4].destroyInternalState();
      this[_compView_7].destroyInternalState();
      this[_PopupSourceDirective_0_7].ngOnDestroy();
      this[_MaterialPopupComponent_7_8].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.initEditor();
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].onFocus(html.Event._check($36event));
    }
    [_handleEvent_1]($36event) {
      this[_ButtonDirective_0_5].instance.handleClick(html.MouseEvent._check($36event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].onMouseInteraction();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_9 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "disabled", currVal_9);
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.compact;
      if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "compact", currVal_10);
        this[_expr_10] = currVal_10;
      }
    }
    initComponentStyles() {
      let styles = material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._componentStyles;
      if (styles == null) {
        material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._componentStyles = styles = material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_date_range_picker$46template.styles$MaterialDateRangePickerComponent, material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.new = function(parentView, parentIndex) {
    this[_viewQuery_ButtonDirective_0_isDirty] = true;
    this[_ButtonDirective_0_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
    this[_PopupSourceDirective_0_7] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_compView_4] = null;
    this[_DropdownButtonComponent_4_5] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_compView_7] = null;
    this[_appEl_7] = null;
    this[_MaterialPopupComponent_7_8] = null;
    this[__PopupHierarchy_7_11] = null;
    this[__PopupRef_7_12] = null;
    this[_appEl_8] = null;
    this[_NgIf_8_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_el_0] = null;
    this[_el_7] = null;
    material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-date-range-picker"));
  }).prototype = material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.prototype;
  dart.addTypeTests(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0);
  dart.setMethodSignature(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, () => ({
    __proto__: dart.getMethods(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, () => ({
    __proto__: dart.getGetters(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__),
    [_PopupHierarchy_7_11]: dart.dynamic,
    [_PopupRef_7_12]: dart.dynamic
  }));
  dart.setLibraryUri(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, "package:angular_components/material_datepicker/material_date_range_picker.template.dart");
  dart.setFieldSignature(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, () => ({
    __proto__: dart.getFields(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__),
    [_viewQuery_ButtonDirective_0_isDirty]: dart.fieldType(core.bool),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator$46template.ButtonDirectiveNgCd),
    [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_PopupSourceDirective_0_7]: dart.fieldType(popup_source_directive.PopupSourceDirective),
    [_appEl_1]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(ng_if.NgIf),
    [_compView_4]: dart.fieldType(dropdown_button$46template.ViewDropdownButtonComponent0),
    [_DropdownButtonComponent_4_5]: dart.fieldType(dropdown_button.DropdownButtonComponent),
    [_appEl_5]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_6]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(ng_if.NgIf),
    [_compView_7]: dart.fieldType(material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_7]: dart.fieldType(view_container.ViewContainer),
    [_MaterialPopupComponent_7_8]: dart.fieldType(material_popup.MaterialPopupComponent),
    [__PopupHierarchy_7_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_7_12]: dart.fieldType(dart.dynamic),
    [_appEl_8]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_8_9]: dart.fieldType(ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.String),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(core.bool),
    [_expr_10]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_7]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, {
    /*material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _textBinding_1 = dart.privateName(material_date_range_picker$46template, "_textBinding_1");
  material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1 = class _ViewMaterialDateRangePickerComponent1 extends embedded_view.EmbeddedView$(material_date_range_picker.MaterialDateRangePickerComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "range-title");
      this.addShimC(html.HtmlElement._check(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.rangeTitle));
    }
  };
  (material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.prototype;
  dart.addTypeTests(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1);
  dart.setMethodSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1, () => ({
    __proto__: dart.getMethods(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1, "package:angular_components/material_datepicker/material_date_range_picker.template.dart");
  dart.setFieldSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1, () => ({
    __proto__: dart.getFields(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(text_binding.TextBinding)
  }));
  const _compView_0 = dart.privateName(material_date_range_picker$46template, "_compView_0");
  const _NextPrevComponent_0_5 = dart.privateName(material_date_range_picker$46template, "_NextPrevComponent_0_5");
  material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2 = class _ViewMaterialDateRangePickerComponent2 extends embedded_view.EmbeddedView$(material_date_range_picker.MaterialDateRangePickerComponent) {
    build() {
      this[_compView_0] = new next_prev_buttons$46template.ViewNextPrevComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(_el_0, "next-prev-buttons");
      this.addShimC(_el_0);
      this[_NextPrevComponent_0_5] = new next_prev_buttons.NextPrevComponent.new(this[_compView_0]);
      this[_compView_0].create(this[_NextPrevComponent_0_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        if (_ctx.model != null) {
          this[_NextPrevComponent_0_5].model = _ctx.model;
          changed = true;
        }
      }
      let currVal_0 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "disabled", ""))) {
        this[_NextPrevComponent_0_5].disabled = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_NextPrevComponent_0_5].ngOnDestroy();
    }
  };
  (material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_NextPrevComponent_0_5] = null;
    this[_expr_0] = null;
    material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.prototype;
  dart.addTypeTests(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2);
  dart.setMethodSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2, () => ({
    __proto__: dart.getMethods(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2, "package:angular_components/material_datepicker/material_date_range_picker.template.dart");
  dart.setFieldSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2, () => ({
    __proto__: dart.getFields(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.__proto__),
    [_compView_0]: dart.fieldType(next_prev_buttons$46template.ViewNextPrevComponent0),
    [_NextPrevComponent_0_5]: dart.fieldType(next_prev_buttons.NextPrevComponent),
    [_expr_0]: dart.fieldType(core.bool)
  }));
  material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3 = class _ViewMaterialDateRangePickerComponent3 extends embedded_view.EmbeddedView$(material_date_range_picker.MaterialDateRangePickerComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "comparison-title");
      this.addShimC(html.HtmlElement._check(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.formattedComparison));
    }
  };
  (material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.prototype;
  dart.addTypeTests(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3);
  dart.setMethodSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3, () => ({
    __proto__: dart.getMethods(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3, "package:angular_components/material_datepicker/material_date_range_picker.template.dart");
  dart.setFieldSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3, () => ({
    __proto__: dart.getFields(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.__proto__),
    [_textBinding_1]: dart.finalFieldType(text_binding.TextBinding)
  }));
  const _textBinding_9 = dart.privateName(material_date_range_picker$46template, "_textBinding_9");
  const _FocusTrapComponent_0_5 = dart.privateName(material_date_range_picker$46template, "_FocusTrapComponent_0_5");
  const _compView_2 = dart.privateName(material_date_range_picker$46template, "_compView_2");
  const _DateRangeEditorComponent_2_5 = dart.privateName(material_date_range_picker$46template, "_DateRangeEditorComponent_2_5");
  const _compView_6 = dart.privateName(material_date_range_picker$46template, "_compView_6");
  const _AcxDarkTheme_6_5 = dart.privateName(material_date_range_picker$46template, "_AcxDarkTheme_6_5");
  const _compView_8 = dart.privateName(material_date_range_picker$46template, "_compView_8");
  const _AcxDarkTheme_8_5 = dart.privateName(material_date_range_picker$46template, "_AcxDarkTheme_8_5");
  const _expr_4 = dart.privateName(material_date_range_picker$46template, "_expr_4");
  const _expr_5 = dart.privateName(material_date_range_picker$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_date_range_picker$46template, "_expr_6");
  const _expr_11 = dart.privateName(material_date_range_picker$46template, "_expr_11");
  const _expr_12 = dart.privateName(material_date_range_picker$46template, "_expr_12");
  const _expr_13 = dart.privateName(material_date_range_picker$46template, "_expr_13");
  const _expr_14 = dart.privateName(material_date_range_picker$46template, "_expr_14");
  const _expr_15 = dart.privateName(material_date_range_picker$46template, "_expr_15");
  const _expr_16 = dart.privateName(material_date_range_picker$46template, "_expr_16");
  const _expr_17 = dart.privateName(material_date_range_picker$46template, "_expr_17");
  const _el_3 = dart.privateName(material_date_range_picker$46template, "_el_3");
  let C8;
  let C9;
  material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4 = class _ViewMaterialDateRangePickerComponent4 extends embedded_view.EmbeddedView$(material_date_range_picker.MaterialDateRangePickerComponent) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new focus_trap$46template.ViewFocusTrapComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(this[_el_0], "popup-contents");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_FocusTrapComponent_0_5] = new focus_trap.FocusTrapComponent.new();
      let doc = html.document;
      let _el_1 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_1), "wrapper");
      this.addShimC(html.HtmlElement._check(_el_1));
      this[_compView_2] = new date_range_editor$46template.ViewDateRangeEditorComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootElement;
      _el_1[$append](_el_2);
      this.addShimC(_el_2);
      this[_DateRangeEditorComponent_2_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(date_range_editor.DateRangeEditorComponent, dart.wrapType(date_range_editor.DateRangeEditorComponent), dart.fn(() => new date_range_editor.DateRangeEditorComponent.new(_el_2, dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentIndex)), ng_zone.NgZone._check(this.parentView.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentView.parentIndex)), date_range_editor_host.DateRangeEditorHost._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(date_range_editor_host.DateRangeEditorHost), this.parentView.parentIndex)), time.Clock._check(this.parentView.parentView.injectorGetOptional(C8 || CT.C8, this.parentView.parentIndex)), time.Clock._check(this.parentView.parentView.injectorGet(dart.wrapType(time.Clock), this.parentView.parentIndex))), VoidToDateRangeEditorComponent())) : new date_range_editor.DateRangeEditorComponent.new(_el_2, dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentIndex)), ng_zone.NgZone._check(this.parentView.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentView.parentIndex)), date_range_editor_host.DateRangeEditorHost._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(date_range_editor_host.DateRangeEditorHost), this.parentView.parentIndex)), time.Clock._check(this.parentView.parentView.injectorGetOptional(C8 || CT.C8, this.parentView.parentIndex)), time.Clock._check(this.parentView.parentView.injectorGet(dart.wrapType(time.Clock), this.parentView.parentIndex)));
      this[_compView_2].create(this[_DateRangeEditorComponent_2_5]);
      this.project(_el_1, 0);
      this[_el_3] = dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(this[_el_3], "apply-bar");
      this.addShimC(this[_el_3]);
      let _el_4 = dom_helpers.appendDiv(doc, this[_el_3]);
      this.updateChildClass(_el_4, "separator");
      this.addShimC(_el_4);
      let _text_5 = dom_helpers.appendText(_el_4, " ");
      this[_compView_6] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 6);
      let _el_6 = this[_compView_6].rootElement;
      this[_el_3][$append](_el_6);
      this.updateChildClassNonHtml(_el_6, "cancel");
      this.addShimC(_el_6);
      this[_AcxDarkTheme_6_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(dark_theme.AcxDarkTheme, dart.wrapType(dark_theme.AcxDarkTheme), dart.fn(() => new dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGetOptional(C9 || CT.C9, this.parentView.parentIndex))), VoidToAcxDarkTheme())) : new dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGetOptional(C9 || CT.C9, this.parentView.parentIndex)));
      this[_MaterialButtonComponent_6_6] = new material_button.MaterialButtonComponent.new(_el_6, dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_6_5]), this[_compView_6], null);
      let _text_7 = dom_helpers.createText(interpolate.interpolateString0(material_date_range_picker.MaterialDateRangePickerComponent.cancelButtonMsg));
      this[_compView_6].createAndProject(this[_MaterialButtonComponent_6_6], JSArrayOfObject().of([JSArrayOfText().of([_text_7])]));
      this[_compView_8] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 8);
      let _el_8 = this[_compView_8].rootElement;
      this[_el_3][$append](_el_8);
      this.updateChildClassNonHtml(_el_8, "apply");
      this.addShimC(_el_8);
      this[_AcxDarkTheme_8_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(dark_theme.AcxDarkTheme, dart.wrapType(dark_theme.AcxDarkTheme), dart.fn(() => new dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGetOptional(C9 || CT.C9, this.parentView.parentIndex))), VoidToAcxDarkTheme())) : new dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGetOptional(C9 || CT.C9, this.parentView.parentIndex)));
      this[_MaterialButtonComponent_8_6] = new material_button.MaterialButtonComponent.new(_el_8, dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_8_5]), this[_compView_8], null);
      this[_compView_8].createAndProject(this[_MaterialButtonComponent_8_6], JSArrayOfObject().of([JSArrayOfText().of([this[_textBinding_9].element])]));
      this[_compView_0].createAndProject(this[_FocusTrapComponent_0_5], JSArrayOfObject().of([JSArrayOfElement().of([_el_1])]));
      let subscription_0 = this[_DateRangeEditorComponent_2_5].presetRangeSelected.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(_ctx, 'onRangeClicked')));
      let subscription_1 = this[_MaterialButtonComponent_6_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(_ctx, 'cancelAndPreventDefault')));
      let subscription_2 = this[_MaterialButtonComponent_8_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(_ctx, 'applyAndPreventDefault')));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([this[_el_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1, subscription_2]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (6 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        if (token === dart.wrapType(dark_theme.AcxDarkTheme)) {
          return this[_AcxDarkTheme_6_5];
        }
        if (token === dart.wrapType(material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator.ButtonDirective) || token === dart.wrapType(has_disabled.HasDisabled)) {
          return this[_MaterialButtonComponent_6_6];
        }
      }
      if (8 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 9) {
        if (token === dart.wrapType(dark_theme.AcxDarkTheme)) {
          return this[_AcxDarkTheme_8_5];
        }
        if (token === dart.wrapType(material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator.ButtonDirective) || token === dart.wrapType(has_disabled.HasDisabled)) {
          return this[_MaterialButtonComponent_8_6];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        if (_ctx.model != null) {
          this[_DateRangeEditorComponent_2_5].model = _ctx.model;
        }
      }
      let currVal_2 = _ctx.allowHighlightUpdates;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "allowHighlightUpdates", ""))) {
        this[_DateRangeEditorComponent_2_5].allowHighlightUpdates = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.supportsComparison;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "supportsComparison", ""))) {
        this[_DateRangeEditorComponent_2_5].supportsComparison = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.compact;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "compact", ""))) {
        this[_DateRangeEditorComponent_2_5].compact = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.movingStartMaintainsLength;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "movingStartMaintainsLength", ""))) {
        this[_DateRangeEditorComponent_2_5].movingStartMaintainsLength = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.supportsDaysInputs;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "supportsDaysInputs", ""))) {
        this[_DateRangeEditorComponent_2_5].supportsDaysInputs = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.dateFormat;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "dateFormat", ""))) {
        this[_DateRangeEditorComponent_2_5].dateFormat = currVal_7;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.activeDateFormat;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "activeDateFormat", ""))) {
        this[_DateRangeEditorComponent_2_5].activeDateFormat = currVal_8;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.supportsClearRange;
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "supportsClearRange", ""))) {
        this[_DateRangeEditorComponent_2_5].supportsClearRange = currVal_9;
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.supportsCustomRange;
      if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, "supportsCustomRange", ""))) {
        this[_DateRangeEditorComponent_2_5].supportsCustomRange = currVal_10;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.relativeDaysToToday;
      if (dart.test(check_binding.checkBinding(this[_expr_11], currVal_11, "relativeDaysToToday", ""))) {
        this[_DateRangeEditorComponent_2_5].relativeDaysToToday = currVal_11;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.useMenuForPresets;
      if (dart.test(check_binding.checkBinding(this[_expr_12], currVal_12, "useMenuForPresets", ""))) {
        this[_DateRangeEditorComponent_2_5].useMenuForPresets = currVal_12;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.presets;
      if (dart.test(check_binding.checkBinding(this[_expr_13], currVal_13, "presets", ""))) {
        this[_DateRangeEditorComponent_2_5].presets = currVal_13;
        this[_expr_13] = currVal_13;
      }
      let currVal_14 = _ctx.minDate;
      if (dart.test(check_binding.checkBinding(this[_expr_14], currVal_14, "minDate", ""))) {
        this[_DateRangeEditorComponent_2_5].minDate = currVal_14;
        this[_expr_14] = currVal_14;
      }
      let currVal_15 = _ctx.maxDate;
      if (dart.test(check_binding.checkBinding(this[_expr_15], currVal_15, "maxDate", ""))) {
        this[_DateRangeEditorComponent_2_5].maxDate = currVal_15;
        this[_expr_15] = currVal_15;
      }
      let currVal_16 = _ctx.isCalendarCreated;
      if (dart.test(check_binding.checkBinding(this[_expr_16], currVal_16, "isCalendarCreated", ""))) {
        this[_DateRangeEditorComponent_2_5].isCalendarCreated = currVal_16;
        this[_expr_16] = currVal_16;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_DateRangeEditorComponent_2_5].ngOnInit();
      }
      changed = false;
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_8].markAsCheckOnce();
      }
      let currVal_0 = _ctx.compact;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "compact", ""))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0], "compact", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_2].detectHostChanges(firstCheck);
      let currVal_17 = _ctx.applyBarVisible;
      if (dart.test(check_binding.checkBinding(this[_expr_17], currVal_17, "applyBarVisible", ""))) {
        dom_helpers.updateClassBinding(this[_el_3], "visible", currVal_17);
        this[_expr_17] = currVal_17;
      }
      this[_compView_6].detectHostChanges(firstCheck);
      this[_compView_8].detectHostChanges(firstCheck);
      this[_textBinding_9].updateText(interpolate.interpolateString0(_ctx.applyButtonMsg));
      this[_compView_0].detectChanges();
      this[_compView_2].detectChanges();
      this[_compView_6].detectChanges();
      this[_compView_8].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_DateRangeEditorComponent_2_5].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, this.parentView)[_viewQuery_ButtonDirective_0_isDirty] = true;
      optimizations.unsafeCast(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, this.parentView)[_viewQuery_ButtonDirective_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_2].destroyInternalState();
      this[_compView_6].destroyInternalState();
      this[_compView_8].destroyInternalState();
      this[_FocusTrapComponent_0_5].ngOnDestroy();
    }
  };
  (material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.new = function(parentView, parentIndex) {
    this[_textBinding_9] = new text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_FocusTrapComponent_0_5] = null;
    this[_compView_2] = null;
    this[_DateRangeEditorComponent_2_5] = null;
    this[_compView_6] = null;
    this[_AcxDarkTheme_6_5] = null;
    this[_MaterialButtonComponent_6_6] = null;
    this[_compView_8] = null;
    this[_AcxDarkTheme_8_5] = null;
    this[_MaterialButtonComponent_8_6] = null;
    this[_expr_0] = null;
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
    this[_expr_14] = null;
    this[_expr_15] = null;
    this[_expr_16] = null;
    this[_expr_17] = null;
    this[_el_0] = null;
    this[_el_3] = null;
    material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.prototype;
  dart.addTypeTests(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4);
  dart.setMethodSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4, () => ({
    __proto__: dart.getMethods(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4, "package:angular_components/material_datepicker/material_date_range_picker.template.dart");
  dart.setFieldSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4, () => ({
    __proto__: dart.getFields(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.__proto__),
    [_textBinding_9]: dart.finalFieldType(text_binding.TextBinding),
    [_compView_0]: dart.fieldType(focus_trap$46template.ViewFocusTrapComponent0),
    [_FocusTrapComponent_0_5]: dart.fieldType(focus_trap.FocusTrapComponent),
    [_compView_2]: dart.fieldType(date_range_editor$46template.ViewDateRangeEditorComponent0),
    [_DateRangeEditorComponent_2_5]: dart.fieldType(date_range_editor.DateRangeEditorComponent),
    [_compView_6]: dart.fieldType(material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_6_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_6_6]: dart.fieldType(material_button.MaterialButtonComponent),
    [_compView_8]: dart.fieldType(material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_8_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_8_6]: dart.fieldType(material_button.MaterialButtonComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(core.bool),
    [_expr_10]: dart.fieldType(core.bool),
    [_expr_11]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(core.bool),
    [_expr_13]: dart.fieldType(dart.dynamic),
    [_expr_14]: dart.fieldType(dart.dynamic),
    [_expr_15]: dart.fieldType(dart.dynamic),
    [_expr_16]: dart.fieldType(core.bool),
    [_expr_17]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.DivElement)
  }));
  material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0 = class _ViewMaterialDateRangePickerComponentHost0 extends host_view.HostView$(material_date_range_picker.MaterialDateRangePickerComponent) {
    build() {
      this.componentView = new material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_date_range_picker.MaterialDateRangePickerComponent, dart.wrapType(material_date_range_picker.MaterialDateRangePickerComponent), dart.fn(() => new material_date_range_picker.MaterialDateRangePickerComponent.new(time.Clock._check(this.injectorGetOptional(C8 || CT.C8, this.parentIndex)), time.Clock._check(this.injectorGet(dart.wrapType(time.Clock), this.parentIndex)), config.DatepickerConfig._check(this.injectorGetOptional(dart.wrapType(config.DatepickerConfig), this.parentIndex)), null, popup_size_provider.PopupSizeProvider._check(this.injectorGetOptional(dart.wrapType(popup_size_provider.PopupSizeProvider), this.parentIndex)), _el_0, dom_service.DomService._check(this.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), ng_zone.NgZone._check(this.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex))), VoidToMaterialDateRangePickerComponent())) : new material_date_range_picker.MaterialDateRangePickerComponent.new(time.Clock._check(this.injectorGetOptional(C8 || CT.C8, this.parentIndex)), time.Clock._check(this.injectorGet(dart.wrapType(time.Clock), this.parentIndex)), config.DatepickerConfig._check(this.injectorGetOptional(dart.wrapType(config.DatepickerConfig), this.parentIndex)), null, popup_size_provider.PopupSizeProvider._check(this.injectorGetOptional(dart.wrapType(popup_size_provider.PopupSizeProvider), this.parentIndex)), _el_0, dom_service.DomService._check(this.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), ng_zone.NgZone._check(this.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)));
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(date_range_editor_host.DateRangeEditorHost) || token === dart.wrapType(focus_interface.Focusable) || token === dart.wrapType(has_disabled.HasDisabled) || token === dart.wrapType(popup_size_provider.PopupSizeProvider)) && 0 === nodeIndex) {
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
    destroyInternal() {
      this.componentView.destroyInternalState();
      this.component.ngOnDestroy();
    }
  };
  (material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.new = function(injector) {
    material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.prototype;
  dart.addTypeTests(material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0);
  dart.setMethodSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0, "package:angular_components/material_datepicker/material_date_range_picker.template.dart");
  material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent1 = function viewFactory_MaterialDateRangePickerComponent1(parentView, parentIndex) {
    return new material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.new(parentView, parentIndex);
  };
  material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent2 = function viewFactory_MaterialDateRangePickerComponent2(parentView, parentIndex) {
    return new material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.new(parentView, parentIndex);
  };
  material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent3 = function viewFactory_MaterialDateRangePickerComponent3(parentView, parentIndex) {
    return new material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.new(parentView, parentIndex);
  };
  material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent4 = function viewFactory_MaterialDateRangePickerComponent4(parentView, parentIndex) {
    return new material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.new(parentView, parentIndex);
  };
  material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponentHost0 = function viewFactory_MaterialDateRangePickerComponentHost0(injector) {
    return new material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.new(injector);
  };
  material_date_range_picker$46template.initReflector = function initReflector() {
    if (dart.test(material_date_range_picker$46template._visited)) {
      return;
    }
    material_date_range_picker$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_date_range_picker.MaterialDateRangePickerComponent), material_date_range_picker$46template.MaterialDateRangePickerComponentNgFactory);
    angular$46template.initReflector();
    meta$46template.initReflector();
    button_decorator$46template.initReflector();
    deferred_content$46template.initReflector();
    focus$46template.initReflector();
    focus_trap$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    has_disabled$46template.initReflector();
    alignment$46template.initReflector();
    popup$46template.initReflector();
    material_button$46template.initReflector();
    comparison$46template.initReflector();
    comparison_option$46template.initReflector();
    config$46template.initReflector();
    date_range_editor$46template.initReflector();
    date_range_editor_host$46template.initReflector();
    model$46template.initReflector();
    module$46template.initReflector();
    next_prev_buttons$46template.initReflector();
    preset$46template.initReflector();
    range$46template.initReflector();
    material_popup$46template.initReflector();
    dropdown_button$46template.initReflector();
    focusable_mixin$46template.initReflector();
    date$46template.initReflector();
    date_formatter$46template.initReflector();
    observable$46template.initReflector();
    css$46template.initReflector();
    dom_service$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(material_date_range_picker$46template, {
    get MaterialDateRangePickerComponentNgFactory() {
      return material_date_range_picker$46template._MaterialDateRangePickerComponentNgFactory;
    }
  });
  let C11;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C10;
  dart.defineLazy(material_date_range_picker$46template, {
    /*material_date_range_picker$46template.styles$MaterialDateRangePickerComponent*/get styles$MaterialDateRangePickerComponent() {
      return [material_date_range_picker$46scss$46css$46shim.styles];
    },
    /*material_date_range_picker$46template._MaterialDateRangePickerComponentNgFactory*/get _MaterialDateRangePickerComponentNgFactory() {
      return C10 || CT.C10;
    },
    /*material_date_range_picker$46template.styles$MaterialDateRangePickerComponentHost*/get styles$MaterialDateRangePickerComponentHost() {
      return C1 || CT.C1;
    },
    /*material_date_range_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_datepicker/material_date_range_picker.template", {
    "package:angular_components/material_datepicker/material_date_range_picker.template.dart": material_date_range_picker$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_date_range_picker.template.dart"],"names":[],"mappings":"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","file":"material_date_range_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_date_range_picker$46template: material_date_range_picker$46template
  };
});

//# sourceMappingURL=material_date_range_picker.template.ddc.js.map

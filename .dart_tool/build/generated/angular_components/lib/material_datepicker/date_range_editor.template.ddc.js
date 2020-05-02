define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/runtime/queries', 'packages/angular_components/material_datepicker/material_calendar_picker', 'packages/angular_components/material_datepicker/material_month_picker', 'packages/angular_components/material_datepicker/date_range_editor', 'packages/angular_components/material_select/material_select.template', 'packages/angular_components/focus/focus_list.template', 'packages/angular_components/focus/focus_list', 'packages/angular_components/material_select/material_select', 'packages/quiver/time', 'packages/angular_components/utils/angular/scroll_host/interface', 'packages/angular_components/utils/angular/scroll_host/angular_2', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface', 'packages/angular_components/focus/focus', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/focus/focus_item.template', 'packages/angular_components/focus/focus_item', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular/src/runtime/interpolate', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/material_datepicker/preset', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/material_menu/material_menu.template', 'packages/angular_components/material_menu/common/menu_root', 'packages/angular_components/material_menu/material_menu', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim', 'packages/angular_components/src/material_datepicker/comparison_range_editor', 'packages/angular_components/material_datepicker/date_range_input.template', 'packages/angular_components/material_datepicker/date_range_input', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/model/date/date', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/material_datepicker/next_prev_buttons.template', 'packages/angular_components/material_datepicker/next_prev_buttons', 'packages/angular_components/material_datepicker/material_calendar_picker.template', 'packages/angular_components/utils/showhide/showhide', 'packages/angular_components/material_datepicker/material_month_picker.template', 'packages/angular_components/material_datepicker/date_range_editor_host', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/date_range_editor_host.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/material_datepicker/preset.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/material_menu/common/menu_root.template', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_tooltip/material_tooltip.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/date/date_formatter.template', 'packages/angular_components/model/menu/menu.template', 'packages/angular_components/model/menu/selectable_menu.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/utils/angular/scroll_host/angular_2.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/showhide/showhide.template', 'packages/angular_components/material_datepicker/date_range_editor.scss.css.shim'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__angular__src__runtime__queries, packages__angular_components__material_datepicker__material_calendar_picker, packages__angular_components__material_datepicker__material_month_picker, packages__angular_components__material_datepicker__date_range_editor, packages__angular_components__material_select__material_select$46template, packages__angular_components__focus__focus_list$46template, packages__angular_components__focus__focus_list, packages__angular_components__material_select__material_select, packages__quiver__time, packages__angular_components__utils__angular__scroll_host__interface, packages__angular_components__utils__angular__scroll_host__angular_2, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__interfaces__has_disabled, packages__angular_components__model__ui__has_renderer, packages__angular_components__model__selection__selection_container, packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface, packages__angular_components__focus__focus, packages__angular_components__material_select__material_select_item$46template, packages__angular_components__focus__focus_item$46template, packages__angular_components__focus__focus_item, packages__angular_components__material_select__material_select_item, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__material_select__activation_handler, packages__angular__src__runtime__interpolate, packages__angular__src__runtime__text_binding, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__button_decorator__button_decorator, packages__angular_components__material_icon__material_icon, packages__angular_components__src__material_tooltip__tooltip_controller, packages__angular_components__material_tooltip__module, packages__angular_components__utils__disposer__disposer, packages__angular_components__src__material_tooltip__icon_tooltip, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__material_datepicker__preset, packages__angular_components__material_popup__material_popup, packages__angular_components__material_button__material_button$46template, packages__angular_components__theme__dark_theme, packages__angular_components__material_button__material_button, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__content__deferred_content_aware, packages__angular_components__material_menu__material_menu$46template, packages__angular_components__material_menu__common__menu_root, packages__angular_components__material_menu__material_menu, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__material_input__material_input$46template, packages__angular_components__material_input__deferred_validator, packages__angular_forms__src__directives, packages__angular_components__material_input__material_input, packages__angular_components__material_input__material_input_default_value_accessor, packages__angular_components__material_input__base_material_input, packages__angular_components__src__material_datepicker__comparison_range_editor$46scss$46css$46shim, packages__angular_components__src__material_datepicker__comparison_range_editor, packages__angular_components__material_datepicker__date_range_input$46template, packages__angular_components__material_datepicker__date_range_input, packages__angular_components__material_datepicker__calendar, packages__angular_components__model__date__date, packages__angular_components__focus__keyboard_only_focus_indicator, packages__angular_components__material_datepicker__next_prev_buttons$46template, packages__angular_components__material_datepicker__next_prev_buttons, packages__angular_components__material_datepicker__material_calendar_picker$46template, packages__angular_components__utils__showhide__showhide, packages__angular_components__material_datepicker__material_month_picker$46template, packages__angular_components__material_datepicker__date_range_editor_host, packages__angular__angular$46template, packages__angular_components__focus__focus$46template, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__material_datepicker__calendar$46template, packages__angular_components__material_datepicker__date_range_editor_host$46template, packages__angular_components__material_datepicker__module$46template, packages__angular_components__material_datepicker__preset$46template, packages__angular_components__material_datepicker__range$46template, packages__angular_components__material_menu__common__menu_root$46template, packages__angular_components__material_ripple__material_ripple$46template, packages__angular_components__material_tooltip__material_tooltip$46template, packages__angular_components__model__date__date$46template, packages__angular_components__model__date__date_formatter$46template, packages__angular_components__model__menu__menu$46template, packages__angular_components__model__menu__selectable_menu$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__model__selection__select$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__utils__angular__scroll_host__angular_2$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__utils__showhide__showhide$46template, packages__angular_components__material_datepicker__date_range_editor$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__change_detection.src__runtime__check_binding;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const injector = packages__angular__src__core__change_detection__change_detection.src__di__injector__injector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const queries = packages__angular__src__runtime__queries.src__runtime__queries;
  const material_calendar_picker = packages__angular_components__material_datepicker__material_calendar_picker.material_datepicker__material_calendar_picker;
  const material_month_picker = packages__angular_components__material_datepicker__material_month_picker.material_datepicker__material_month_picker;
  const date_range_editor = packages__angular_components__material_datepicker__date_range_editor.material_datepicker__date_range_editor;
  const material_select$46template = packages__angular_components__material_select__material_select$46template.material_select__material_select$46template;
  const focus_list$46template = packages__angular_components__focus__focus_list$46template.focus__focus_list$46template;
  const focus_list = packages__angular_components__focus__focus_list.focus__focus_list;
  const material_select = packages__angular_components__material_select__material_select.material_select__material_select;
  const time = packages__quiver__time.time;
  const gestures = packages__angular_components__utils__angular__scroll_host__interface.src__utils__angular__scroll_host__gestures;
  const angular_2 = packages__angular_components__utils__angular__scroll_host__angular_2.utils__angular__scroll_host__angular_2;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const scroll_host_interface = packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const material_select_item$46template = packages__angular_components__material_select__material_select_item$46template.material_select__material_select_item$46template;
  const focus_item$46template = packages__angular_components__focus__focus_item$46template.focus__focus_item$46template;
  const focus_item = packages__angular_components__focus__focus_item.focus__focus_item;
  const material_select_item = packages__angular_components__material_select__material_select_item.material_select__material_select_item;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const tooltip_controller = packages__angular_components__src__material_tooltip__tooltip_controller.src__material_tooltip__tooltip_controller;
  const module = packages__angular_components__material_tooltip__module.material_tooltip__module;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const tooltip = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const preset = packages__angular_components__material_datepicker__preset.material_datepicker__preset;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const material_button$46template = packages__angular_components__material_button__material_button$46template.material_button__material_button$46template;
  const dark_theme = packages__angular_components__theme__dark_theme.theme__dark_theme;
  const material_button = packages__angular_components__material_button__material_button.material_button__material_button;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const menu_item_groups$46template = packages__angular_components__material_menu__material_menu$46template.material_menu__menu_item_groups$46template;
  const menu_root = packages__angular_components__material_menu__common__menu_root.material_menu__common__menu_root;
  const menu_item_groups = packages__angular_components__material_menu__material_menu.material_menu__menu_item_groups;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const material_input$46template = packages__angular_components__material_input__material_input$46template.material_input__material_input$46template;
  const deferred_validator = packages__angular_components__material_input__deferred_validator.material_input__deferred_validator;
  const ng_model = packages__angular_forms__src__directives.src__directives__ng_model;
  const ng_control = packages__angular_forms__src__directives.src__directives__ng_control;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  const material_input_default_value_accessor = packages__angular_components__material_input__material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const base_material_input = packages__angular_components__material_input__base_material_input.material_input__base_material_input;
  const comparison_range_editor$46template = packages__angular_components__src__material_datepicker__comparison_range_editor$46scss$46css$46shim.src__material_datepicker__comparison_range_editor$46template;
  const date_range_editor_model$46template = packages__angular_components__src__material_datepicker__comparison_range_editor$46scss$46css$46shim.src__material_datepicker__date_range_editor_model$46template;
  const comparison_range_editor = packages__angular_components__src__material_datepicker__comparison_range_editor.src__material_datepicker__comparison_range_editor;
  const date_range_input$46template = packages__angular_components__material_datepicker__date_range_input$46template.material_datepicker__date_range_input$46template;
  const date_range_input = packages__angular_components__material_datepicker__date_range_input.material_datepicker__date_range_input;
  const calendar = packages__angular_components__material_datepicker__calendar.material_datepicker__calendar;
  const date = packages__angular_components__model__date__date.model__date__date;
  const keyboard_only_focus_indicator = packages__angular_components__focus__keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const next_prev_buttons$46template = packages__angular_components__material_datepicker__next_prev_buttons$46template.material_datepicker__next_prev_buttons$46template;
  const next_prev_buttons = packages__angular_components__material_datepicker__next_prev_buttons.material_datepicker__next_prev_buttons;
  const material_calendar_picker$46template = packages__angular_components__material_datepicker__material_calendar_picker$46template.material_datepicker__material_calendar_picker$46template;
  const showhide = packages__angular_components__utils__showhide__showhide.utils__showhide__showhide;
  const material_month_picker$46template = packages__angular_components__material_datepicker__material_month_picker$46template.material_datepicker__material_month_picker$46template;
  const date_range_editor_host = packages__angular_components__material_datepicker__date_range_editor_host.material_datepicker__date_range_editor_host;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const calendar$46template = packages__angular_components__material_datepicker__calendar$46template.material_datepicker__calendar$46template;
  const date_range_editor_host$46template = packages__angular_components__material_datepicker__date_range_editor_host$46template.material_datepicker__date_range_editor_host$46template;
  const module$46template = packages__angular_components__material_datepicker__module$46template.material_datepicker__module$46template;
  const preset$46template = packages__angular_components__material_datepicker__preset$46template.material_datepicker__preset$46template;
  const range$46template = packages__angular_components__material_datepicker__range$46template.material_datepicker__range$46template;
  const menu_root$46template = packages__angular_components__material_menu__common__menu_root$46template.material_menu__common__menu_root$46template;
  const material_ripple$46template = packages__angular_components__material_ripple__material_ripple$46template.material_ripple__material_ripple$46template;
  const material_tooltip$46template = packages__angular_components__material_tooltip__material_tooltip$46template.material_tooltip__material_tooltip$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const date_formatter$46template = packages__angular_components__model__date__date_formatter$46template.model__date__date_formatter$46template;
  const menu$46template = packages__angular_components__model__menu__menu$46template.model__menu__menu$46template;
  const selectable_menu$46template = packages__angular_components__model__menu__selectable_menu$46template.model__menu__selectable_menu$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const select$46template = packages__angular_components__model__selection__select$46template.model__selection__select$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const angular_2$46template = packages__angular_components__utils__angular__scroll_host__angular_2$46template.utils__angular__scroll_host__angular_2$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const showhide$46template = packages__angular_components__utils__showhide__showhide$46template.utils__showhide__showhide$46template;
  const date_range_editor$46scss$46css$46shim = packages__angular_components__material_datepicker__date_range_editor$46scss$46css$46shim.material_datepicker__date_range_editor$46scss$46css$46shim;
  const date_range_editor$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $isNotEmpty = dartx.isNotEmpty;
  let EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  let RenderViewAndintToEmbeddedViewOfvoid = () => (RenderViewAndintToEmbeddedViewOfvoid = dart.constFn(dart.fnType(EmbeddedViewOfvoid(), [render_view.RenderView, core.int])))();
  let JSArrayOfMaterialCalendarPickerComponent = () => (JSArrayOfMaterialCalendarPickerComponent = dart.constFn(_interceptors.JSArray$(material_calendar_picker.MaterialCalendarPickerComponent)))();
  let ListOfMaterialCalendarPickerComponent = () => (ListOfMaterialCalendarPickerComponent = dart.constFn(core.List$(material_calendar_picker.MaterialCalendarPickerComponent)))();
  let _ViewDateRangeEditorComponent20ToListOfMaterialCalendarPickerComponent = () => (_ViewDateRangeEditorComponent20ToListOfMaterialCalendarPickerComponent = dart.constFn(dart.fnType(ListOfMaterialCalendarPickerComponent(), [date_range_editor$46template._ViewDateRangeEditorComponent20])))();
  let _ViewDateRangeEditorComponent13ToListOfMaterialCalendarPickerComponent = () => (_ViewDateRangeEditorComponent13ToListOfMaterialCalendarPickerComponent = dart.constFn(dart.fnType(ListOfMaterialCalendarPickerComponent(), [date_range_editor$46template._ViewDateRangeEditorComponent13])))();
  let JSArrayOfMaterialMonthPickerComponent = () => (JSArrayOfMaterialMonthPickerComponent = dart.constFn(_interceptors.JSArray$(material_month_picker.MaterialMonthPickerComponent)))();
  let ListOfMaterialMonthPickerComponent = () => (ListOfMaterialMonthPickerComponent = dart.constFn(core.List$(material_month_picker.MaterialMonthPickerComponent)))();
  let _ViewDateRangeEditorComponent21ToListOfMaterialMonthPickerComponent = () => (_ViewDateRangeEditorComponent21ToListOfMaterialMonthPickerComponent = dart.constFn(dart.fnType(ListOfMaterialMonthPickerComponent(), [date_range_editor$46template._ViewDateRangeEditorComponent21])))();
  let _ViewDateRangeEditorComponent13ToListOfMaterialMonthPickerComponent = () => (_ViewDateRangeEditorComponent13ToListOfMaterialMonthPickerComponent = dart.constFn(dart.fnType(ListOfMaterialMonthPickerComponent(), [date_range_editor$46template._ViewDateRangeEditorComponent13])))();
  let VoidToFocusListDirective = () => (VoidToFocusListDirective = dart.constFn(dart.fnType(focus_list.FocusListDirective, [])))();
  let VoidToDateTime = () => (VoidToDateTime = dart.constFn(dart.fnType(core.DateTime, [])))();
  let VoidToElementScrollHost = () => (VoidToElementScrollHost = dart.constFn(dart.fnType(angular_2.ElementScrollHost, [])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let JSArrayOfFocusableItem = () => (JSArrayOfFocusableItem = dart.constFn(_interceptors.JSArray$(focus.FocusableItem)))();
  let ListOfFocusableItem = () => (ListOfFocusableItem = dart.constFn(core.List$(focus.FocusableItem)))();
  let _ViewDateRangeEditorComponent2ToListOfFocusableItem = () => (_ViewDateRangeEditorComponent2ToListOfFocusableItem = dart.constFn(dart.fnType(ListOfFocusableItem(), [date_range_editor$46template._ViewDateRangeEditorComponent2])))();
  let _ViewDateRangeEditorComponent3ToListOfFocusableItem = () => (_ViewDateRangeEditorComponent3ToListOfFocusableItem = dart.constFn(dart.fnType(ListOfFocusableItem(), [date_range_editor$46template._ViewDateRangeEditorComponent3])))();
  let _ViewDateRangeEditorComponent7ToListOfFocusableItem = () => (_ViewDateRangeEditorComponent7ToListOfFocusableItem = dart.constFn(dart.fnType(ListOfFocusableItem(), [date_range_editor$46template._ViewDateRangeEditorComponent7])))();
  let _ViewDateRangeEditorComponent6ToListOfFocusableItem = () => (_ViewDateRangeEditorComponent6ToListOfFocusableItem = dart.constFn(dart.fnType(ListOfFocusableItem(), [date_range_editor$46template._ViewDateRangeEditorComponent6])))();
  let JSArrayOfListOfFocusableItem = () => (JSArrayOfListOfFocusableItem = dart.constFn(_interceptors.JSArray$(ListOfFocusableItem())))();
  let JSArrayOfSelectionItem = () => (JSArrayOfSelectionItem = dart.constFn(_interceptors.JSArray$(selection_container.SelectionItem)))();
  let ListOfSelectionItem = () => (ListOfSelectionItem = dart.constFn(core.List$(selection_container.SelectionItem)))();
  let _ViewDateRangeEditorComponent2ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent2ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [date_range_editor$46template._ViewDateRangeEditorComponent2])))();
  let _ViewDateRangeEditorComponent3ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent3ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [date_range_editor$46template._ViewDateRangeEditorComponent3])))();
  let _ViewDateRangeEditorComponent9ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent9ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [date_range_editor$46template._ViewDateRangeEditorComponent9])))();
  let _ViewDateRangeEditorComponent8ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent8ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [date_range_editor$46template._ViewDateRangeEditorComponent8])))();
  let JSArrayOfListOfSelectionItem = () => (JSArrayOfListOfSelectionItem = dart.constFn(_interceptors.JSArray$(ListOfSelectionItem())))();
  let _ViewDateRangeEditorComponent7ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent7ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [date_range_editor$46template._ViewDateRangeEditorComponent7])))();
  let _ViewDateRangeEditorComponent6ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent6ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [date_range_editor$46template._ViewDateRangeEditorComponent6])))();
  let _ViewDateRangeEditorComponent11ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent11ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [date_range_editor$46template._ViewDateRangeEditorComponent11])))();
  let VoidToMaterialSelectItemComponent = () => (VoidToMaterialSelectItemComponent = dart.constFn(dart.fnType(material_select_item.MaterialSelectItemComponent, [])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let VoidToTooltipController = () => (VoidToTooltipController = dart.constFn(dart.fnType(tooltip_controller.TooltipController, [])))();
  let VoidToMaterialTooltipDirective = () => (VoidToMaterialTooltipDirective = dart.constFn(dart.fnType(tooltip.MaterialTooltipDirective, [])))();
  let VoidToAcxDarkTheme = () => (VoidToAcxDarkTheme = dart.constFn(dart.fnType(dark_theme.AcxDarkTheme, [])))();
  let VoidToPopupSourceDirective = () => (VoidToPopupSourceDirective = dart.constFn(dart.fnType(popup_source_directive.PopupSourceDirective, [])))();
  let JSArrayOfHtmlElement = () => (JSArrayOfHtmlElement = dart.constFn(_interceptors.JSArray$(html.HtmlElement)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let VoidToMaterialPopupComponent = () => (VoidToMaterialPopupComponent = dart.constFn(dart.fnType(material_popup.MaterialPopupComponent, [])))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(view_container.ViewContainer)))();
  let VoidToMenuRootDirective = () => (VoidToMenuRootDirective = dart.constFn(dart.fnType(menu_root.MenuRootDirective, [])))();
  let VoidToMenuItemGroupsComponent = () => (VoidToMenuItemGroupsComponent = dart.constFn(dart.fnType(menu_item_groups.MenuItemGroupsComponent, [])))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let VoidToComparisonRangeEditorComponent = () => (VoidToComparisonRangeEditorComponent = dart.constFn(dart.fnType(comparison_range_editor.ComparisonRangeEditorComponent, [])))();
  let VoidToKeyboardOnlyFocusIndicatorDirective = () => (VoidToKeyboardOnlyFocusIndicatorDirective = dart.constFn(dart.fnType(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, [])))();
  let VoidToMaterialCalendarPickerComponent = () => (VoidToMaterialCalendarPickerComponent = dart.constFn(dart.fnType(material_calendar_picker.MaterialCalendarPickerComponent, [])))();
  let VoidToShowHideDirective = () => (VoidToShowHideDirective = dart.constFn(dart.fnType(showhide.ShowHideDirective, [])))();
  let VoidToMaterialMonthPickerComponent = () => (VoidToMaterialMonthPickerComponent = dart.constFn(dart.fnType(material_month_picker.MaterialMonthPickerComponent, [])))();
  let VoidToDateRangeEditorComponent = () => (VoidToDateRangeEditorComponent = dart.constFn(dart.fnType(date_range_editor.DateRangeEditorComponent, [])))();
  let ComponentFactoryOfDateRangeEditorComponent = () => (ComponentFactoryOfDateRangeEditorComponent = dart.constFn(component_factory.ComponentFactory$(date_range_editor.DateRangeEditorComponent)))();
  let HostViewOfDateRangeEditorComponent = () => (HostViewOfDateRangeEditorComponent = dart.constFn(host_view.HostView$(date_range_editor.DateRangeEditorComponent)))();
  let InjectorToHostViewOfDateRangeEditorComponent = () => (InjectorToHostViewOfDateRangeEditorComponent = dart.constFn(dart.fnType(HostViewOfDateRangeEditorComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent1, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C1() {
      return C1 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent13, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C3() {
      return C3 = dart.fn(time.systemTime, VoidToDateTime());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: time.Clock.prototype,
        [Clock__time]: C3 || CT.C3
      });
    },
    get C4() {
      return C4 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent2, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C5() {
      return C5 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent3, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C6() {
      return C6 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent6, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C7() {
      return C7 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent10, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C8() {
      return C8 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent11, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C9() {
      return C9 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent12, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C10() {
      return C10 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent4, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C11() {
      return C11 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent5, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C12() {
      return C12 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent7, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C13() {
      return C13 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent8, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C14() {
      return C14 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "acxDarkTheme"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: OpaqueTokenOfListOfRelativePosition().prototype,
        [OpaqueToken__uniqueName]: "defaultPopupPositions"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayViewportBoundaries"
      });
    },
    get C18() {
      return C18 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent9, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C19() {
      return C19 = dart.constList([], dart.dynamic);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: opaque_token.MultiToken.prototype,
        [OpaqueToken__uniqueName]: "NgValidators"
      });
    },
    get C21() {
      return C21 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent14, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C22() {
      return C22 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent15, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C23() {
      return C23 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent16, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C24() {
      return C24 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent17, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C25() {
      return C25 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent18, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C26() {
      return C26 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent19, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C27() {
      return C27 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent20, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C28() {
      return C28 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent21, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C29() {
      return C29 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C31() {
      return C31 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponentHost0, InjectorToHostViewOfDateRangeEditorComponent());
    },
    get C30() {
      return C30 = dart.const({
        __proto__: ComponentFactoryOfDateRangeEditorComponent().prototype,
        [ComponentFactory__viewFactory]: C31 || CT.C31,
        [ComponentFactory_selector]: "date-range-editor"
      });
    }
  });
  const _viewQuery_MaterialCalendarPickerComponent_0_isDirty = dart.privateName(date_range_editor$46template, "_viewQuery_MaterialCalendarPickerComponent_0_isDirty");
  const _viewQuery_MaterialMonthPickerComponent_1_isDirty = dart.privateName(date_range_editor$46template, "_viewQuery_MaterialMonthPickerComponent_1_isDirty");
  const _appEl_0 = dart.privateName(date_range_editor$46template, "_appEl_0");
  const _NgIf_0_9 = dart.privateName(date_range_editor$46template, "_NgIf_0_9");
  const _appEl_1 = dart.privateName(date_range_editor$46template, "_appEl_1");
  const _NgIf_1_9 = dart.privateName(date_range_editor$46template, "_NgIf_1_9");
  const _expr_0 = dart.privateName(date_range_editor$46template, "_expr_0");
  let C0;
  let C1;
  const _appEl_10 = dart.privateName(date_range_editor$46template, "_appEl_10");
  const _MaterialCalendarPickerComponent_0_5 = dart.privateName(date_range_editor$46template, "_MaterialCalendarPickerComponent_0_5");
  const _appEl_11 = dart.privateName(date_range_editor$46template, "_appEl_11");
  const _MaterialMonthPickerComponent_0_5 = dart.privateName(date_range_editor$46template, "_MaterialMonthPickerComponent_0_5");
  date_range_editor$46template.ViewDateRangeEditorComponent0 = class ViewDateRangeEditorComponent0 extends component_view.ComponentView$(date_range_editor.DateRangeEditorComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/date_range_editor.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C0 || CT.C0);
      this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _anchor_1 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C1 || CT.C1);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.shouldShowPredefinedList;
      this[_NgIf_1_9].ngIf = dart.test(_ctx.supportsCustomRange) && dart.test(_ctx.shouldShowCustomDateRangeColumn);
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1].detectChangesInNestedViews();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(this[_viewQuery_MaterialCalendarPickerComponent_0_isDirty])) {
          _ctx.calendarPicker = queries.firstOrNull(material_calendar_picker.MaterialCalendarPickerComponent, this[_appEl_1].mapNestedViews(material_calendar_picker.MaterialCalendarPickerComponent, date_range_editor$46template._ViewDateRangeEditorComponent13, dart.fn(nestedView => nestedView[_appEl_10].mapNestedViews(material_calendar_picker.MaterialCalendarPickerComponent, date_range_editor$46template._ViewDateRangeEditorComponent20, dart.fn(nestedView => JSArrayOfMaterialCalendarPickerComponent().of([nestedView[_MaterialCalendarPickerComponent_0_5]]), _ViewDateRangeEditorComponent20ToListOfMaterialCalendarPickerComponent())), _ViewDateRangeEditorComponent13ToListOfMaterialCalendarPickerComponent())));
          this[_viewQuery_MaterialCalendarPickerComponent_0_isDirty] = false;
        }
        if (dart.test(this[_viewQuery_MaterialMonthPickerComponent_1_isDirty])) {
          _ctx.monthSelector = queries.firstOrNull(material_month_picker.MaterialMonthPickerComponent, this[_appEl_1].mapNestedViews(material_month_picker.MaterialMonthPickerComponent, date_range_editor$46template._ViewDateRangeEditorComponent13, dart.fn(nestedView => nestedView[_appEl_11].mapNestedViews(material_month_picker.MaterialMonthPickerComponent, date_range_editor$46template._ViewDateRangeEditorComponent21, dart.fn(nestedView => JSArrayOfMaterialMonthPickerComponent().of([nestedView[_MaterialMonthPickerComponent_0_5]]), _ViewDateRangeEditorComponent21ToListOfMaterialMonthPickerComponent())), _ViewDateRangeEditorComponent13ToListOfMaterialMonthPickerComponent())));
          this[_viewQuery_MaterialMonthPickerComponent_1_isDirty] = false;
        }
      }
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_1].destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.compact;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "compact", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    initComponentStyles() {
      let styles = date_range_editor$46template.ViewDateRangeEditorComponent0._componentStyles;
      if (styles == null) {
        date_range_editor$46template.ViewDateRangeEditorComponent0._componentStyles = styles = date_range_editor$46template.ViewDateRangeEditorComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(date_range_editor$46template.styles$DateRangeEditorComponent, date_range_editor$46template.ViewDateRangeEditorComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (date_range_editor$46template.ViewDateRangeEditorComponent0.new = function(parentView, parentIndex) {
    this[_viewQuery_MaterialCalendarPickerComponent_0_isDirty] = true;
    this[_viewQuery_MaterialMonthPickerComponent_1_isDirty] = true;
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_expr_0] = null;
    date_range_editor$46template.ViewDateRangeEditorComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("date-range-editor"));
  }).prototype = date_range_editor$46template.ViewDateRangeEditorComponent0.prototype;
  dart.addTypeTests(date_range_editor$46template.ViewDateRangeEditorComponent0);
  dart.setMethodSignature(date_range_editor$46template.ViewDateRangeEditorComponent0, () => ({
    __proto__: dart.getMethods(date_range_editor$46template.ViewDateRangeEditorComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(date_range_editor$46template.ViewDateRangeEditorComponent0, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(date_range_editor$46template.ViewDateRangeEditorComponent0, () => ({
    __proto__: dart.getFields(date_range_editor$46template.ViewDateRangeEditorComponent0.__proto__),
    [_viewQuery_MaterialCalendarPickerComponent_0_isDirty]: dart.fieldType(core.bool),
    [_viewQuery_MaterialMonthPickerComponent_1_isDirty]: dart.fieldType(core.bool),
    [_appEl_0]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_1]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(date_range_editor$46template.ViewDateRangeEditorComponent0, {
    /*date_range_editor$46template.ViewDateRangeEditorComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _query_SelectionItem_0_1_isDirty = dart.privateName(date_range_editor$46template, "_query_SelectionItem_0_1_isDirty");
  const _query_FocusableItem_0_0_isDirty = dart.privateName(date_range_editor$46template, "_query_FocusableItem_0_0_isDirty");
  const _compView_0 = dart.privateName(date_range_editor$46template, "_compView_0");
  const _FocusListDirective_0_5 = dart.privateName(date_range_editor$46template, "_FocusListDirective_0_5");
  const _MaterialSelectComponent_0_6 = dart.privateName(date_range_editor$46template, "_MaterialSelectComponent_0_6");
  const _Clock_0_7 = dart.privateName(date_range_editor$46template, "_Clock_0_7");
  const _GestureListenerFactory_0_8 = dart.privateName(date_range_editor$46template, "_GestureListenerFactory_0_8");
  const _ElementScrollHost_0_9 = dart.privateName(date_range_editor$46template, "_ElementScrollHost_0_9");
  const _appEl_2 = dart.privateName(date_range_editor$46template, "_appEl_2");
  const _NgIf_2_9 = dart.privateName(date_range_editor$46template, "_NgIf_2_9");
  const _appEl_4 = dart.privateName(date_range_editor$46template, "_appEl_4");
  const _NgIf_4_9 = dart.privateName(date_range_editor$46template, "_NgIf_4_9");
  const _appEl_5 = dart.privateName(date_range_editor$46template, "_appEl_5");
  const _NgIf_5_9 = dart.privateName(date_range_editor$46template, "_NgIf_5_9");
  const _appEl_6 = dart.privateName(date_range_editor$46template, "_appEl_6");
  const _NgIf_6_9 = dart.privateName(date_range_editor$46template, "_NgIf_6_9");
  const _appEl_7 = dart.privateName(date_range_editor$46template, "_appEl_7");
  const _NgIf_7_9 = dart.privateName(date_range_editor$46template, "_NgIf_7_9");
  const _el_0 = dart.privateName(date_range_editor$46template, "_el_0");
  let C3;
  const Clock__time = dart.privateName(time, "Clock._time");
  let C2;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  const _FocusItemDirective_1_5 = dart.privateName(date_range_editor$46template, "_FocusItemDirective_1_5");
  const _FocusItemDirective_0_8 = dart.privateName(date_range_editor$46template, "_FocusItemDirective_0_8");
  const _MaterialSelectItemComponent_1_6 = dart.privateName(date_range_editor$46template, "_MaterialSelectItemComponent_1_6");
  const _MaterialSelectItemComponent_0_9 = dart.privateName(date_range_editor$46template, "_MaterialSelectItemComponent_0_9");
  const _appEl_3 = dart.privateName(date_range_editor$46template, "_appEl_3");
  const _MaterialSelectItemComponent_0_8 = dart.privateName(date_range_editor$46template, "_MaterialSelectItemComponent_0_8");
  const _MaterialSelectItemComponent_1_5 = dart.privateName(date_range_editor$46template, "_MaterialSelectItemComponent_1_5");
  const _MaterialSelectItemComponent_5_5 = dart.privateName(date_range_editor$46template, "_MaterialSelectItemComponent_5_5");
  date_range_editor$46template._ViewDateRangeEditorComponent1 = class _ViewDateRangeEditorComponent1 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    build() {
      this[_compView_0] = new material_select$46template.ViewMaterialSelectComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      dom_helpers.setAttribute(this[_el_0], "acxScrollHost", "");
      this.updateChildClassNonHtml(this[_el_0], "preset-list");
      dom_helpers.setAttribute(this[_el_0], "focusList", "");
      dom_helpers.setAttribute(this[_el_0], "role", "listbox");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_FocusListDirective_0_5] = new focus_list$46template.FocusListDirectiveNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(focus_list.FocusListDirective, dart.wrapType(focus_list.FocusListDirective), dart.fn(() => new focus_list.FocusListDirective.new(ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), "listbox", null), VoidToFocusListDirective())) : new focus_list.FocusListDirective.new(ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), "listbox", null));
      this[_MaterialSelectComponent_0_6] = new material_select.MaterialSelectComponent.new();
      this[_Clock_0_7] = C2 || CT.C2;
      this[_GestureListenerFactory_0_8] = new gestures.GestureListenerFactory.new(this[_Clock_0_7]);
      this[_ElementScrollHost_0_9] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(angular_2.ElementScrollHost, dart.wrapType(angular_2.ElementScrollHost), dart.fn(() => new angular_2.ElementScrollHost.new(dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), this[_GestureListenerFactory_0_8], html.HtmlElement._check(this[_el_0])), VoidToElementScrollHost())) : new angular_2.ElementScrollHost.new(dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), this[_GestureListenerFactory_0_8], html.HtmlElement._check(this[_el_0]));
      let _anchor_1 = dom_helpers.createAnchor();
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C4 || CT.C4);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = dom_helpers.createAnchor();
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C5 || CT.C5);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let doc = html.document;
      let _el_3 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_3), "group");
      dom_helpers.setAttribute(_el_3, "role", "listbox");
      this.addShimC(html.HtmlElement._check(_el_3));
      let _anchor_4 = dom_helpers.appendAnchor(_el_3);
      this[_appEl_4] = new view_container.ViewContainer.new(4, 3, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C6 || CT.C6);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _anchor_5 = dom_helpers.appendAnchor(_el_3);
      this[_appEl_5] = new view_container.ViewContainer.new(5, 3, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C7 || CT.C7);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = dom_helpers.createAnchor();
      this[_appEl_6] = new view_container.ViewContainer.new(6, 0, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C8 || CT.C8);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _anchor_7 = dom_helpers.createAnchor();
      this[_appEl_7] = new view_container.ViewContainer.new(7, 0, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7], C9 || CT.C9);
      this[_NgIf_7_9] = new ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      this[_compView_0].createAndProject(this[_MaterialSelectComponent_0_6], JSArrayOfObject().of([JSArrayOfObject().of([this[_appEl_1], this[_appEl_2], _el_3, this[_appEl_6], this[_appEl_7]])]));
      this.initRootNode(this[_el_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 7) {
        if (token === dart.wrapType(has_disabled.HasDisabled) || token === dart.wrapType(has_renderer.HasRenderer) || token === dart.wrapType(selection_container.SelectionContainer)) {
          return this[_MaterialSelectComponent_0_6];
        }
        if (token === dart.wrapType(time.Clock)) {
          return this[_Clock_0_7];
        }
        if (token === dart.wrapType(gestures.GestureListenerFactory)) {
          return this[_GestureListenerFactory_0_8];
        }
        if (token === dart.wrapType(angular_2.ElementScrollHost) || token === dart.wrapType(scroll_host_interface.ScrollHost)) {
          return this[_ElementScrollHost_0_9];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_MaterialSelectComponent_0_6].width = 0;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MaterialSelectComponent_0_6].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_ElementScrollHost_0_9].ngOnInit();
      }
      this[_NgIf_1_9].ngIf = _ctx.supportsClearRange;
      this[_NgIf_2_9].ngIf = _ctx.supportsCustomRange;
      this[_NgIf_4_9].ngIf = !dart.test(_ctx.useMenuForPresets);
      this[_NgIf_5_9].ngIf = _ctx.useMenuForPresets;
      this[_NgIf_6_9].ngIf = _ctx.supportsDaysInputs;
      this[_NgIf_7_9].ngIf = _ctx.supportsComparison;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(this[_query_FocusableItem_0_0_isDirty])) {
          this[_FocusListDirective_0_5].instance.listItems = queries.flattenNodes(focus.FocusableItem, JSArrayOfListOfFocusableItem().of([this[_appEl_1].mapNestedViews(focus.FocusableItem, date_range_editor$46template._ViewDateRangeEditorComponent2, dart.fn(nestedView => JSArrayOfFocusableItem().of([nestedView[_FocusItemDirective_1_5].instance]), _ViewDateRangeEditorComponent2ToListOfFocusableItem())), this[_appEl_2].mapNestedViews(focus.FocusableItem, date_range_editor$46template._ViewDateRangeEditorComponent3, dart.fn(nestedView => JSArrayOfFocusableItem().of([nestedView[_FocusItemDirective_1_5].instance]), _ViewDateRangeEditorComponent3ToListOfFocusableItem())), this[_appEl_4].mapNestedViews(focus.FocusableItem, date_range_editor$46template._ViewDateRangeEditorComponent6, dart.fn(nestedView => nestedView[_appEl_0].mapNestedViews(focus.FocusableItem, date_range_editor$46template._ViewDateRangeEditorComponent7, dart.fn(nestedView => JSArrayOfFocusableItem().of([nestedView[_FocusItemDirective_0_8].instance]), _ViewDateRangeEditorComponent7ToListOfFocusableItem())), _ViewDateRangeEditorComponent6ToListOfFocusableItem()))]));
          this[_query_FocusableItem_0_0_isDirty] = false;
        }
        if (dart.test(this[_query_SelectionItem_0_1_isDirty])) {
          this[_MaterialSelectComponent_0_6].selectItems = queries.flattenNodes(selection_container.SelectionItem, JSArrayOfListOfSelectionItem().of([this[_appEl_1].mapNestedViews(selection_container.SelectionItem, date_range_editor$46template._ViewDateRangeEditorComponent2, dart.fn(nestedView => JSArrayOfSelectionItem().of([nestedView[_MaterialSelectItemComponent_1_6]]), _ViewDateRangeEditorComponent2ToListOfSelectionItem())), this[_appEl_2].mapNestedViews(selection_container.SelectionItem, date_range_editor$46template._ViewDateRangeEditorComponent3, dart.fn(nestedView => JSArrayOfSelectionItem().of([nestedView[_MaterialSelectItemComponent_1_6]]), _ViewDateRangeEditorComponent3ToListOfSelectionItem())), this[_appEl_4].mapNestedViews(selection_container.SelectionItem, date_range_editor$46template._ViewDateRangeEditorComponent6, dart.fn(nestedView => nestedView[_appEl_0].mapNestedViews(selection_container.SelectionItem, date_range_editor$46template._ViewDateRangeEditorComponent7, dart.fn(nestedView => queries.flattenNodes(selection_container.SelectionItem, JSArrayOfListOfSelectionItem().of([JSArrayOfSelectionItem().of([nestedView[_MaterialSelectItemComponent_0_9]]), nestedView[_appEl_2].mapNestedViews(selection_container.SelectionItem, date_range_editor$46template._ViewDateRangeEditorComponent8, dart.fn(nestedView => nestedView[_appEl_3].mapNestedViews(selection_container.SelectionItem, date_range_editor$46template._ViewDateRangeEditorComponent9, dart.fn(nestedView => JSArrayOfSelectionItem().of([nestedView[_MaterialSelectItemComponent_0_8]]), _ViewDateRangeEditorComponent9ToListOfSelectionItem())), _ViewDateRangeEditorComponent8ToListOfSelectionItem()))])), _ViewDateRangeEditorComponent7ToListOfSelectionItem())), _ViewDateRangeEditorComponent6ToListOfSelectionItem())), this[_appEl_6].mapNestedViews(selection_container.SelectionItem, date_range_editor$46template._ViewDateRangeEditorComponent11, dart.fn(nestedView => JSArrayOfSelectionItem().of([nestedView[_MaterialSelectItemComponent_1_5], nestedView[_MaterialSelectItemComponent_5_5]]), _ViewDateRangeEditorComponent11ToListOfSelectionItem()))]));
          this[_query_SelectionItem_0_1_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.isBasic;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "isBasic", ""))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0], "basic-preset-list", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_FocusListDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_FocusListDirective_0_5].instance.ngOnDestroy();
      this[_ElementScrollHost_0_9].ngOnDestroy();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent1.new = function(parentView, parentIndex) {
    this[_query_SelectionItem_0_1_isDirty] = true;
    this[_query_FocusableItem_0_0_isDirty] = true;
    this[_compView_0] = null;
    this[_FocusListDirective_0_5] = null;
    this[_MaterialSelectComponent_0_6] = null;
    this[_Clock_0_7] = null;
    this[_GestureListenerFactory_0_8] = null;
    this[_ElementScrollHost_0_9] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_expr_0] = null;
    this[_el_0] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent1.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent1);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent1, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent1.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent1, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent1, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent1.__proto__),
    [_query_SelectionItem_0_1_isDirty]: dart.fieldType(core.bool),
    [_query_FocusableItem_0_0_isDirty]: dart.fieldType(core.bool),
    [_compView_0]: dart.fieldType(material_select$46template.ViewMaterialSelectComponent0),
    [_FocusListDirective_0_5]: dart.fieldType(focus_list$46template.FocusListDirectiveNgCd),
    [_MaterialSelectComponent_0_6]: dart.fieldType(material_select.MaterialSelectComponent),
    [_Clock_0_7]: dart.fieldType(time.Clock),
    [_GestureListenerFactory_0_8]: dart.fieldType(gestures.GestureListenerFactory),
    [_ElementScrollHost_0_9]: dart.fieldType(angular_2.ElementScrollHost),
    [_appEl_1]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_2]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_4]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_5]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_6]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_7]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.Element)
  }));
  const _compView_1 = dart.privateName(date_range_editor$46template, "_compView_1");
  const _el_1 = dart.privateName(date_range_editor$46template, "_el_1");
  date_range_editor$46template._ViewDateRangeEditorComponent2 = class _ViewDateRangeEditorComponent2 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "group");
      this.addShimC(html.HtmlElement._check(_el_0));
      this[_compView_1] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootElement;
      _el_0[$append](this[_el_1]);
      dom_helpers.setAttribute(this[_el_1], "focusItem", "");
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_FocusItemDirective_1_5] = new focus_item$46template.FocusItemDirectiveNgCd.new(new focus_item.FocusItemDirective.new(html.HtmlElement._check(this[_el_1]), this[_compView_1], null));
      this[_MaterialSelectItemComponent_1_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_select_item.MaterialSelectItemComponent, dart.wrapType(material_select_item.MaterialSelectItemComponent), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_1]), material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentIndex)), activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(activation_handler.ActivationHandler), this.parentView.parentIndex)), this[_compView_1], null), VoidToMaterialSelectItemComponent())) : new material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_1]), material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentIndex)), activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(activation_handler.ActivationHandler), this.parentView.parentIndex)), this[_compView_1], null);
      let _text_2 = dom_helpers.createText(interpolate.interpolateString0(date_range_editor.DateRangeEditorComponent.clearRangeMsg));
      this[_compView_1].createAndProject(this[_MaterialSelectItemComponent_1_6], JSArrayOfObject().of([JSArrayOfText().of([_text_2])]));
      this[_el_1][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_FocusItemDirective_1_5].instance, 'keydown')));
      let subscription_0 = this[_MaterialSelectItemComponent_1_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(_ctx, 'onClearRangeClicked')));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        if (token === dart.wrapType(focus.FocusableItem)) {
          return this[_FocusItemDirective_1_5].instance;
        }
        if (token === dart.wrapType(selection_container.SelectionItem) || token === dart.wrapType(has_disabled.HasDisabled) || token === dart.wrapType(has_renderer.HasRenderer)) {
          return this[_MaterialSelectItemComponent_1_6];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      this[_FocusItemDirective_1_5].detectHostChanges(this[_compView_1], this[_el_1]);
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView)[_query_SelectionItem_0_1_isDirty] = true;
      optimizations.unsafeCast(date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView)[_query_FocusableItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
      this[_MaterialSelectItemComponent_1_6].ngOnDestroy();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent2.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_FocusItemDirective_1_5] = null;
    this[_MaterialSelectItemComponent_1_6] = null;
    this[_el_1] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent2.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent2);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent2, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent2.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent2, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent2, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent2.__proto__),
    [_compView_1]: dart.fieldType(material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_FocusItemDirective_1_5]: dart.fieldType(focus_item$46template.FocusItemDirectiveNgCd),
    [_MaterialSelectItemComponent_1_6]: dart.fieldType(material_select_item.MaterialSelectItemComponent),
    [_el_1]: dart.fieldType(html.Element)
  }));
  const _expr_2 = dart.privateName(date_range_editor$46template, "_expr_2");
  const _expr_3 = dart.privateName(date_range_editor$46template, "_expr_3");
  const _el_2 = dart.privateName(date_range_editor$46template, "_el_2");
  let C10;
  let C11;
  date_range_editor$46template._ViewDateRangeEditorComponent3 = class _ViewDateRangeEditorComponent3 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "group");
      this.addShimC(html.HtmlElement._check(_el_0));
      this[_compView_1] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootElement;
      _el_0[$append](this[_el_1]);
      dom_helpers.setAttribute(this[_el_1], "focusItem", "");
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_FocusItemDirective_1_5] = new focus_item$46template.FocusItemDirectiveNgCd.new(new focus_item.FocusItemDirective.new(html.HtmlElement._check(this[_el_1]), this[_compView_1], null));
      this[_MaterialSelectItemComponent_1_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_select_item.MaterialSelectItemComponent, dart.wrapType(material_select_item.MaterialSelectItemComponent), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_1]), material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentIndex)), activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(activation_handler.ActivationHandler), this.parentView.parentIndex)), this[_compView_1], null), VoidToMaterialSelectItemComponent())) : new material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_1]), material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentIndex)), activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(activation_handler.ActivationHandler), this.parentView.parentIndex)), this[_compView_1], null);
      this[_el_2] = html.DivElement._check(doc[$createElement]("div"));
      this.addShimC(this[_el_2]);
      let _text_3 = dom_helpers.appendText(this[_el_2], interpolate.interpolateString0(date_range_editor.DateRangeEditorComponent.customRangeMsg));
      let _anchor_4 = dom_helpers.appendAnchor(this[_el_2]);
      this[_appEl_4] = new view_container.ViewContainer.new(4, 2, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C10 || CT.C10);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _anchor_5 = dom_helpers.createAnchor();
      this[_appEl_5] = new view_container.ViewContainer.new(5, 1, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C11 || CT.C11);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      this[_compView_1].createAndProject(this[_MaterialSelectItemComponent_1_6], JSArrayOfObject().of([JSArrayOfObject().of([this[_el_2], this[_appEl_5]])]));
      this[_el_1][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_FocusItemDirective_1_5].instance, 'keydown')));
      let subscription_0 = this[_MaterialSelectItemComponent_1_6].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(_ctx, 'onCustomClicked')));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        if (token === dart.wrapType(focus.FocusableItem)) {
          return this[_FocusItemDirective_1_5].instance;
        }
        if (token === dart.wrapType(selection_container.SelectionItem) || token === dart.wrapType(has_disabled.HasDisabled) || token === dart.wrapType(has_renderer.HasRenderer)) {
          return this[_MaterialSelectItemComponent_1_6];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_MaterialSelectItemComponent_1_6].closeOnActivate = false;
      }
      let currVal_0 = _ctx.isCustomRangeSelected;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "isCustomRangeSelected", ""))) {
        this[_MaterialSelectItemComponent_1_6].selected = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgIf_4_9].ngIf = dart.test(_ctx.isBasic) && dart.test(_ctx.isCustomRangeSelected);
      this[_NgIf_5_9].ngIf = _ctx.isBasic;
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_FocusItemDirective_1_5].detectHostChanges(this[_compView_1], this[_el_1]);
      this[_compView_1].detectHostChanges(firstCheck);
      let currVal_2 = dart.test(_ctx.isBasic) && !dart.test(_ctx.isCustomRangeSelected);
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "isBasic && !isCustomRangeSelected", ""))) {
        dom_helpers.updateClassBinding(this[_el_2], "custom-tab-left", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = dart.test(_ctx.isBasic) && dart.test(_ctx.isCustomRangeSelected);
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "isBasic && isCustomRangeSelected", ""))) {
        dom_helpers.updateClassBinding(this[_el_2], "custom_tab-left-selected", currVal_3);
        this[_expr_3] = currVal_3;
      }
      this[_compView_1].detectChanges();
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView)[_query_SelectionItem_0_1_isDirty] = true;
      optimizations.unsafeCast(date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView)[_query_FocusableItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_4].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_compView_1].destroyInternalState();
      this[_MaterialSelectItemComponent_1_6].ngOnDestroy();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent3.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_FocusItemDirective_1_5] = null;
    this[_MaterialSelectItemComponent_1_6] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent3.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent3);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent3, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent3.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent3, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent3, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent3.__proto__),
    [_compView_1]: dart.fieldType(material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_FocusItemDirective_1_5]: dart.fieldType(focus_item$46template.FocusItemDirectiveNgCd),
    [_MaterialSelectItemComponent_1_6]: dart.fieldType(material_select_item.MaterialSelectItemComponent),
    [_appEl_4]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_5]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_el_1]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.DivElement)
  }));
  const _textBinding_1 = dart.privateName(date_range_editor$46template, "_textBinding_1");
  date_range_editor$46template._ViewDateRangeEditorComponent4 = class _ViewDateRangeEditorComponent4 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "custom_range_desc");
      this.addShimC(html.HtmlElement._check(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.customRangeDescription));
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent4.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    date_range_editor$46template._ViewDateRangeEditorComponent4.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent4.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent4);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent4, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent4.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent4, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent4, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent4.__proto__),
    [_textBinding_1]: dart.finalFieldType(text_binding.TextBinding)
  }));
  const _ButtonDirective_0_5 = dart.privateName(date_range_editor$46template, "_ButtonDirective_0_5");
  const _MaterialIconComponent_0_6 = dart.privateName(date_range_editor$46template, "_MaterialIconComponent_0_6");
  date_range_editor$46template._ViewDateRangeEditorComponent5 = class _ViewDateRangeEditorComponent5 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    build() {
      this[_compView_0] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClassNonHtml(this[_el_0], "expend-more");
      dom_helpers.setAttribute(this[_el_0], "icon", "expand_more");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_MaterialIconComponent_0_6] = new material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create(this[_MaterialIconComponent_0_6]);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this.initRootNode(this[_el_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator.ButtonDirective) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialIconComponent_0_6].icon = "expand_more";
        changed = true;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent5.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_el_0] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent5.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent5.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent5);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent5, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent5.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent5, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent5, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent5.__proto__),
    [_compView_0]: dart.fieldType(material_icon$46template.ViewMaterialIconComponent0),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator$46template.ButtonDirectiveNgCd),
    [_MaterialIconComponent_0_6]: dart.fieldType(material_icon.MaterialIconComponent),
    [_el_0]: dart.fieldType(html.Element)
  }));
  const _NgFor_0_9 = dart.privateName(date_range_editor$46template, "_NgFor_0_9");
  let C12;
  date_range_editor$46template._ViewDateRangeEditorComponent6 = class _ViewDateRangeEditorComponent6 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    build() {
      let _anchor_0 = dom_helpers.createAnchor();
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C12 || CT.C12);
      this[_NgFor_0_9] = new ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
      this.initRootNode(this[_appEl_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.presets;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "presets", ""))) {
        this[_NgFor_0_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_0_9].ngDoCheck();
      }
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent6.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent6.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent6);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent6, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent6, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent6, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__),
    [_appEl_0]: dart.fieldType(view_container.ViewContainer),
    [_NgFor_0_9]: dart.fieldType(ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  const _MaterialTooltipDirective_0_10 = dart.privateName(date_range_editor$46template, "_MaterialTooltipDirective_0_10");
  const __TooltipController_0_13 = dart.privateName(date_range_editor$46template, "__TooltipController_0_13");
  const _expr_1 = dart.privateName(date_range_editor$46template, "_expr_1");
  const _expr_4 = dart.privateName(date_range_editor$46template, "_expr_4");
  const _TooltipController_0_13 = dart.privateName(date_range_editor$46template, "_TooltipController_0_13");
  let C13;
  const _handleEvent_0 = dart.privateName(date_range_editor$46template, "_handleEvent_0");
  date_range_editor$46template._ViewDateRangeEditorComponent7 = class _ViewDateRangeEditorComponent7 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    get [_TooltipController_0_13]() {
      if (this[__TooltipController_0_13] == null) {
        this[__TooltipController_0_13] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(tooltip_controller.TooltipController, dart.wrapType(tooltip_controller.TooltipController), dart.fn(() => module.createTooltipController(tooltip_controller.TooltipController._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(tooltip_controller.TooltipController), this.parentView.parentView.parentIndex)), disposer.Disposer._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(disposer.Disposer), this.parentView.parentView.parentIndex))), VoidToTooltipController())) : module.createTooltipController(tooltip_controller.TooltipController._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(tooltip_controller.TooltipController), this.parentView.parentView.parentIndex)), disposer.Disposer._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(disposer.Disposer), this.parentView.parentView.parentIndex)));
      }
      return this[__TooltipController_0_13];
    }
    build() {
      this[_compView_0] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      dom_helpers.setAttribute(this[_el_0], "focusItem", "");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_FocusItemDirective_0_8] = new focus_item$46template.FocusItemDirectiveNgCd.new(new focus_item.FocusItemDirective.new(html.HtmlElement._check(this[_el_0]), this[_compView_0], null));
      this[_MaterialSelectItemComponent_0_9] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_select_item.MaterialSelectItemComponent, dart.wrapType(material_select_item.MaterialSelectItemComponent), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_0]), material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentView.parentIndex)), activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(activation_handler.ActivationHandler), this.parentView.parentView.parentIndex)), this[_compView_0], null), VoidToMaterialSelectItemComponent())) : new material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_0]), material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentView.parentIndex)), activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(activation_handler.ActivationHandler), this.parentView.parentView.parentIndex)), this[_compView_0], null);
      this[_MaterialTooltipDirective_0_10] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(tooltip.MaterialTooltipDirective, dart.wrapType(tooltip.MaterialTooltipDirective), dart.fn(() => new tooltip.MaterialTooltipDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.parentIndex)), this[_appEl_0], html.HtmlElement._check(this[_el_0]), this[_appEl_0], this[_compView_0], html.Window._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(html.Window), this.parentView.parentView.parentIndex)), null, null), VoidToMaterialTooltipDirective())) : new tooltip.MaterialTooltipDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.parentIndex)), this[_appEl_0], html.HtmlElement._check(this[_el_0]), this[_appEl_0], this[_compView_0], html.Window._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(html.Window), this.parentView.parentView.parentIndex)), null, null);
      let _anchor_2 = dom_helpers.createAnchor();
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C13 || CT.C13);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_compView_0].createAndProject(this[_MaterialSelectItemComponent_0_9], JSArrayOfObject().of([JSArrayOfObject().of([this[_textBinding_1].element, this[_appEl_2]])]));
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_FocusItemDirective_0_8].instance, 'keydown')));
      let subscription_0 = this[_MaterialSelectItemComponent_0_9].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handleEvent_0)));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([this[_appEl_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 2) {
        if (token === dart.wrapType(focus.FocusableItem)) {
          return this[_FocusItemDirective_0_8].instance;
        }
        if (token === dart.wrapType(selection_container.SelectionItem) || token === dart.wrapType(has_disabled.HasDisabled) || token === dart.wrapType(has_renderer.HasRenderer)) {
          return this[_MaterialSelectItemComponent_0_9];
        }
        if (token === dart.wrapType(tooltip_controller.TooltipController)) {
          return this[_TooltipController_0_13];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      let local_preset = optimizations.unsafeCast(preset.DatepickerPreset, this.locals[$_get]("$implicit"));
      if (dart.test(firstCheck)) {
        this[_MaterialSelectItemComponent_0_9].closeOnActivate = false;
      }
      let currVal_0 = !dart.test(_ctx.isValid(local_preset));
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "!isValid(preset)", ""))) {
        this[_MaterialSelectItemComponent_0_9].disabled = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isSelected(local_preset.range);
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "isSelected(preset.range)", ""))) {
        this[_MaterialSelectItemComponent_0_9].selected = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (dart.test(firstCheck)) {
        if (date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip != null) {
          this[_MaterialTooltipDirective_0_10].text = date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip;
        }
      }
      let currVal_4 = !dart.test(_ctx.isValid(local_preset));
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "!isValid(preset)", ""))) {
        this[_MaterialTooltipDirective_0_10].canShow = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MaterialTooltipDirective_0_10].ngOnInit();
      }
      this[_NgIf_2_9].ngIf = local_preset.alternatives != null && dart.test(local_preset.alternatives[$isNotEmpty]);
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_FocusItemDirective_0_8].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectHostChanges(firstCheck);
      this[_textBinding_1].updateText(interpolate.interpolateString0(local_preset.title));
      this[_compView_0].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialTooltipDirective_0_10].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView.parentView)[_query_SelectionItem_0_1_isDirty] = true;
      optimizations.unsafeCast(date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView.parentView)[_query_FocusableItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_MaterialSelectItemComponent_0_9].ngOnDestroy();
      this[_MaterialTooltipDirective_0_10].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let local_preset = optimizations.unsafeCast(preset.DatepickerPreset, this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.onRangeClicked(html.UIEvent._check($36event), local_preset.range);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent7.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_FocusItemDirective_0_8] = null;
    this[_MaterialSelectItemComponent_0_9] = null;
    this[_MaterialTooltipDirective_0_10] = null;
    this[__TooltipController_0_13] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_4] = null;
    this[_el_0] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent7.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent7);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent7, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(date_range_editor$46template._ViewDateRangeEditorComponent7, () => ({
    __proto__: dart.getGetters(date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__),
    [_TooltipController_0_13]: dart.dynamic
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent7, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent7, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__),
    [_textBinding_1]: dart.finalFieldType(text_binding.TextBinding),
    [_compView_0]: dart.fieldType(material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_appEl_0]: dart.fieldType(view_container.ViewContainer),
    [_FocusItemDirective_0_8]: dart.fieldType(focus_item$46template.FocusItemDirectiveNgCd),
    [_MaterialSelectItemComponent_0_9]: dart.fieldType(material_select_item.MaterialSelectItemComponent),
    [_MaterialTooltipDirective_0_10]: dart.fieldType(tooltip.MaterialTooltipDirective),
    [__TooltipController_0_13]: dart.fieldType(dart.dynamic),
    [_appEl_2]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.Element)
  }));
  const _AcxDarkTheme_0_5 = dart.privateName(date_range_editor$46template, "_AcxDarkTheme_0_5");
  const _MaterialButtonComponent_0_6 = dart.privateName(date_range_editor$46template, "_MaterialButtonComponent_0_6");
  const _PopupSourceDirective_0_7 = dart.privateName(date_range_editor$46template, "_PopupSourceDirective_0_7");
  const _MaterialIconComponent_1_5 = dart.privateName(date_range_editor$46template, "_MaterialIconComponent_1_5");
  const _compView_2 = dart.privateName(date_range_editor$46template, "_compView_2");
  const _MaterialPopupComponent_2_8 = dart.privateName(date_range_editor$46template, "_MaterialPopupComponent_2_8");
  const __PopupHierarchy_2_11 = dart.privateName(date_range_editor$46template, "__PopupHierarchy_2_11");
  const __PopupRef_2_12 = dart.privateName(date_range_editor$46template, "__PopupRef_2_12");
  const _NgFor_3_9 = dart.privateName(date_range_editor$46template, "_NgFor_3_9");
  const _expr_5 = dart.privateName(date_range_editor$46template, "_expr_5");
  const _expr_6 = dart.privateName(date_range_editor$46template, "_expr_6");
  const _PopupHierarchy_2_11 = dart.privateName(date_range_editor$46template, "_PopupHierarchy_2_11");
  const _PopupRef_2_12 = dart.privateName(date_range_editor$46template, "_PopupRef_2_12");
  const OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  let C14;
  let C15;
  let C16;
  let C17;
  let C18;
  let C19;
  const _handleEvent_1 = dart.privateName(date_range_editor$46template, "_handleEvent_1");
  const _handleEvent_2 = dart.privateName(date_range_editor$46template, "_handleEvent_2");
  date_range_editor$46template._ViewDateRangeEditorComponent8 = class _ViewDateRangeEditorComponent8 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    get [_PopupHierarchy_2_11]() {
      if (this[__PopupHierarchy_2_11] == null) {
        this[__PopupHierarchy_2_11] = material_popup.getHierarchy(this[_MaterialPopupComponent_2_8]);
      }
      return this[__PopupHierarchy_2_11];
    }
    get [_PopupRef_2_12]() {
      if (this[__PopupRef_2_12] == null) {
        this[__PopupRef_2_12] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_2_8]);
      }
      return this[__PopupRef_2_12];
    }
    build() {
      this[_compView_0] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      dom_helpers.setAttribute(_el_0, "alignPositionX", "after");
      dom_helpers.setAttribute(_el_0, "alignPositionY", "start");
      this.updateChildClassNonHtml(_el_0, "preset-dropdown-button");
      dom_helpers.setAttribute(_el_0, "icon", "");
      dom_helpers.setAttribute(_el_0, "popupSource", "");
      this.addShimC(_el_0);
      this[_AcxDarkTheme_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(dark_theme.AcxDarkTheme, dart.wrapType(dark_theme.AcxDarkTheme), dart.fn(() => new dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(C14 || CT.C14, this.parentView.parentView.parentView.parentIndex))), VoidToAcxDarkTheme())) : new dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(C14 || CT.C14, this.parentView.parentView.parentView.parentIndex)));
      this[_MaterialButtonComponent_0_6] = new material_button.MaterialButtonComponent.new(_el_0, dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_0_5]), this[_compView_0], null);
      this[_PopupSourceDirective_0_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(popup_source_directive.PopupSourceDirective, dart.wrapType(popup_source_directive.PopupSourceDirective), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.parentView.parentIndex)), _el_0, reference.ReferenceDirective._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(reference.ReferenceDirective), this.parentView.parentView.parentView.parentIndex)), focus_interface.Focusable._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(focus_interface.Focusable), this.parentView.parentView.parentView.parentIndex)), null), VoidToPopupSourceDirective())) : new popup_source_directive.PopupSourceDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.parentView.parentIndex)), _el_0, reference.ReferenceDirective._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(reference.ReferenceDirective), this.parentView.parentView.parentView.parentIndex)), focus_interface.Focusable._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(focus_interface.Focusable), this.parentView.parentView.parentView.parentIndex)), null);
      this[_compView_1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      dom_helpers.setAttribute(_el_1, "icon", "arrow_drop_down");
      this.addShimC(_el_1);
      this[_MaterialIconComponent_1_5] = new material_icon.MaterialIconComponent.new(_el_1);
      this[_compView_1].create(this[_MaterialIconComponent_1_5]);
      this[_compView_0].createAndProject(this[_MaterialButtonComponent_0_6], JSArrayOfObject().of([JSArrayOfHtmlElement().of([_el_1])]));
      this[_compView_2] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootElement;
      this.addShimC(_el_2);
      this[_appEl_2] = new view_container.ViewContainer.new(2, null, this, _el_2);
      this[_MaterialPopupComponent_2_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_popup.MaterialPopupComponent, dart.wrapType(material_popup.MaterialPopupComponent), dart.fn(() => new material_popup.MaterialPopupComponent.new(popup_hierarchy.PopupHierarchy._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(popup_hierarchy.PopupHierarchy), this.parentView.parentView.parentView.parentIndex)), material_popup.MaterialPopupComponent._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(material_popup.MaterialPopupComponent), this.parentView.parentView.parentView.parentIndex)), null, ng_zone.NgZone._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentView.parentView.parentView.parentIndex)), overlay_service.OverlayService._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(overlay_service.OverlayService), this.parentView.parentView.parentView.parentIndex)), dom_service.DomService._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentView.parentView.parentIndex)), zindexer.ZIndexer._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(zindexer.ZIndexer), this.parentView.parentView.parentView.parentIndex)), ListOfRelativePosition()._check(this.parentView.parentView.parentView.parentView.injectorGet(C15 || CT.C15, this.parentView.parentView.parentView.parentIndex)), core.bool._check(this.parentView.parentView.parentView.parentView.injectorGet(C16 || CT.C16, this.parentView.parentView.parentView.parentIndex)), box.Box._check(this.parentView.parentView.parentView.parentView.injectorGet(C17 || CT.C17, this.parentView.parentView.parentView.parentIndex)), popup_size_provider.PopupSizeProvider._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(popup_size_provider.PopupSizeProvider), this.parentView.parentView.parentView.parentIndex)), this[_compView_2], this[_appEl_2], new element_ref.ElementRef.new(_el_2)), VoidToMaterialPopupComponent())) : new material_popup.MaterialPopupComponent.new(popup_hierarchy.PopupHierarchy._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(popup_hierarchy.PopupHierarchy), this.parentView.parentView.parentView.parentIndex)), material_popup.MaterialPopupComponent._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(material_popup.MaterialPopupComponent), this.parentView.parentView.parentView.parentIndex)), null, ng_zone.NgZone._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentView.parentView.parentView.parentIndex)), overlay_service.OverlayService._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(overlay_service.OverlayService), this.parentView.parentView.parentView.parentIndex)), dom_service.DomService._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentView.parentView.parentIndex)), zindexer.ZIndexer._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(zindexer.ZIndexer), this.parentView.parentView.parentView.parentIndex)), ListOfRelativePosition()._check(this.parentView.parentView.parentView.parentView.injectorGet(C15 || CT.C15, this.parentView.parentView.parentView.parentIndex)), core.bool._check(this.parentView.parentView.parentView.parentView.injectorGet(C16 || CT.C16, this.parentView.parentView.parentView.parentIndex)), box.Box._check(this.parentView.parentView.parentView.parentView.injectorGet(C17 || CT.C17, this.parentView.parentView.parentView.parentIndex)), popup_size_provider.PopupSizeProvider._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(popup_size_provider.PopupSizeProvider), this.parentView.parentView.parentView.parentIndex)), this[_compView_2], this[_appEl_2], new element_ref.ElementRef.new(_el_2));
      let _anchor_3 = dom_helpers.createAnchor();
      this[_appEl_3] = new view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C18 || CT.C18);
      this[_NgFor_3_9] = new ng_for.NgFor.new(this[_appEl_3], _TemplateRef_3_8);
      this[_compView_2].createAndProject(this[_MaterialPopupComponent_2_8], JSArrayOfObject().of([C19 || CT.C19, JSArrayOfViewContainer().of([this[_appEl_3]]), C19 || CT.C19]));
      _el_0[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_0)));
      _el_0[$addEventListener]("keypress", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_1)));
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handleEvent_2)));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([_el_0, this[_appEl_2]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(dark_theme.AcxDarkTheme)) {
          return this[_AcxDarkTheme_0_5];
        }
        if (token === dart.wrapType(material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator.ButtonDirective) || token === dart.wrapType(has_disabled.HasDisabled)) {
          return this[_MaterialButtonComponent_0_6];
        }
      }
      if (2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        if (token === dart.wrapType(material_popup.MaterialPopupComponent) || token === dart.wrapType(material_dropdown_base.DropdownHandle) || token === dart.wrapType(deferred_content_aware.DeferredContentAware)) {
          return this[_MaterialPopupComponent_2_8];
        }
        if (token === dart.wrapType(popup_hierarchy.PopupHierarchy)) {
          return this[_PopupHierarchy_2_11];
        }
        if (token === dart.wrapType(popup_ref.PopupRef)) {
          return this[_PopupRef_2_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_menuSource = this[_PopupSourceDirective_0_7];
      let local_preset = optimizations.unsafeCast(preset.DatepickerPreset, optimizations.unsafeCast(date_range_editor$46template._ViewDateRangeEditorComponent7, this.parentView).locals[$_get]("$implicit"));
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        this[_PopupSourceDirective_0_7].alignX = "after";
        this[_PopupSourceDirective_0_7].alignY = "start";
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialIconComponent_1_5].icon = "arrow_drop_down";
        changed = true;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialPopupComponent_2_8].offsetX = 9;
        changed = true;
        if (0 - 4 !== null) {
          this[_MaterialPopupComponent_2_8].offsetY = 0 - 4;
          changed = true;
        }
      }
      let currVal_5 = local_menuSource;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "menuSource", ""))) {
        this[_MaterialPopupComponent_2_8].source = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      let currVal_6 = local_preset.alternatives;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "preset.alternatives", ""))) {
        this[_NgFor_3_9].ngForOf = currVal_6;
        this[_expr_6] = currVal_6;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_3_9].ngDoCheck();
      }
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_2].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
      this[_compView_2].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_PopupSourceDirective_0_7].ngAfterViewInit();
          this[_MaterialPopupComponent_2_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_compView_1].destroyInternalState();
      this[_compView_2].destroyInternalState();
      this[_PopupSourceDirective_0_7].ngOnDestroy();
      this[_MaterialPopupComponent_2_8].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      dart.dsend($36event, 'stopPropagation', []);
    }
    [_handleEvent_1]($36event) {
      dart.dsend($36event, 'stopPropagation', []);
    }
    [_handleEvent_2]($36event) {
      let local_popup = this[_MaterialPopupComponent_2_8];
      local_popup.toggle();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent8.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_PopupSourceDirective_0_7] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_compView_2] = null;
    this[_appEl_2] = null;
    this[_MaterialPopupComponent_2_8] = null;
    this[__PopupHierarchy_2_11] = null;
    this[__PopupRef_2_12] = null;
    this[_appEl_3] = null;
    this[_NgFor_3_9] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent8.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent8);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent8, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(date_range_editor$46template._ViewDateRangeEditorComponent8, () => ({
    __proto__: dart.getGetters(date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__),
    [_PopupHierarchy_2_11]: dart.dynamic,
    [_PopupRef_2_12]: dart.dynamic
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent8, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent8, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__),
    [_compView_0]: dart.fieldType(material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button.MaterialButtonComponent),
    [_PopupSourceDirective_0_7]: dart.fieldType(popup_source_directive.PopupSourceDirective),
    [_compView_1]: dart.fieldType(material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon.MaterialIconComponent),
    [_compView_2]: dart.fieldType(material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_2]: dart.fieldType(view_container.ViewContainer),
    [_MaterialPopupComponent_2_8]: dart.fieldType(material_popup.MaterialPopupComponent),
    [__PopupHierarchy_2_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_2_12]: dart.fieldType(dart.dynamic),
    [_appEl_3]: dart.fieldType(view_container.ViewContainer),
    [_NgFor_3_9]: dart.fieldType(ng_for.NgFor),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic)
  }));
  const _MaterialTooltipDirective_0_9 = dart.privateName(date_range_editor$46template, "_MaterialTooltipDirective_0_9");
  date_range_editor$46template._ViewDateRangeEditorComponent9 = class _ViewDateRangeEditorComponent9 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    get [_TooltipController_0_13]() {
      if (this[__TooltipController_0_13] == null) {
        this[__TooltipController_0_13] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(tooltip_controller.TooltipController, dart.wrapType(tooltip_controller.TooltipController), dart.fn(() => module.createTooltipController(tooltip_controller.TooltipController._check(optimizations.unsafeCast(date_range_editor$46template._ViewDateRangeEditorComponent7, this.parentView.parentView)[_TooltipController_0_13]), disposer.Disposer._check(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(disposer.Disposer), this.parentView.parentView.parentView.parentView.parentIndex))), VoidToTooltipController())) : module.createTooltipController(tooltip_controller.TooltipController._check(optimizations.unsafeCast(date_range_editor$46template._ViewDateRangeEditorComponent7, this.parentView.parentView)[_TooltipController_0_13]), disposer.Disposer._check(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(disposer.Disposer), this.parentView.parentView.parentView.parentView.parentIndex)));
      }
      return this[__TooltipController_0_13];
    }
    build() {
      this[_compView_0] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(_el_0, interpolate.interpolateString2("", "preset-dropdown-item", " ", "item", ""));
      this.addShimC(_el_0);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _el_0);
      this[_MaterialSelectItemComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_select_item.MaterialSelectItemComponent, dart.wrapType(material_select_item.MaterialSelectItemComponent), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(_el_0, optimizations.unsafeCast(date_range_editor$46template._ViewDateRangeEditorComponent8, this.parentView)[_MaterialPopupComponent_2_8], activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.parentIndex)), this[_compView_0], null), VoidToMaterialSelectItemComponent())) : new material_select_item.MaterialSelectItemComponent.new(_el_0, optimizations.unsafeCast(date_range_editor$46template._ViewDateRangeEditorComponent8, this.parentView)[_MaterialPopupComponent_2_8], activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.parentIndex)), this[_compView_0], null);
      this[_MaterialTooltipDirective_0_9] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(tooltip.MaterialTooltipDirective, dart.wrapType(tooltip.MaterialTooltipDirective), dart.fn(() => new tooltip.MaterialTooltipDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.parentView.parentView.parentIndex)), this[_appEl_0], _el_0, this[_appEl_0], this[_compView_0], html.Window._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(html.Window), this.parentView.parentView.parentView.parentView.parentIndex)), null, null), VoidToMaterialTooltipDirective())) : new tooltip.MaterialTooltipDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.parentView.parentView.parentIndex)), this[_appEl_0], _el_0, this[_appEl_0], this[_compView_0], html.Window._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(html.Window), this.parentView.parentView.parentView.parentView.parentIndex)), null, null);
      this[_compView_0].createAndProject(this[_MaterialSelectItemComponent_0_8], JSArrayOfObject().of([JSArrayOfText().of([this[_textBinding_1].element])]));
      let subscription_0 = this[_MaterialSelectItemComponent_0_8].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handleEvent_0)));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([this[_appEl_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(selection_container.SelectionItem) || token === dart.wrapType(has_disabled.HasDisabled) || token === dart.wrapType(has_renderer.HasRenderer)) {
          return this[_MaterialSelectItemComponent_0_8];
        }
        if (token === dart.wrapType(tooltip_controller.TooltipController)) {
          return this[_TooltipController_0_13];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      let local_alternative = optimizations.unsafeCast(preset.DatepickerPreset, this.locals[$_get]("$implicit"));
      if (dart.test(firstCheck)) {
        this[_MaterialSelectItemComponent_0_8].closeOnActivate = false;
      }
      let currVal_0 = !dart.test(_ctx.isValid(local_alternative));
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "!isValid(alternative)", ""))) {
        this[_MaterialSelectItemComponent_0_8].disabled = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isAlternativePresetSelected(local_alternative);
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "isAlternativePresetSelected(alternative)", ""))) {
        this[_MaterialSelectItemComponent_0_8].selected = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (dart.test(firstCheck)) {
        if (date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip != null) {
          this[_MaterialTooltipDirective_0_9].text = date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip;
        }
      }
      let currVal_4 = !dart.test(_ctx.isValid(local_alternative));
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "!isValid(alternative)", ""))) {
        this[_MaterialTooltipDirective_0_9].canShow = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MaterialTooltipDirective_0_9].ngOnInit();
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_textBinding_1].updateText(interpolate.interpolateString0(local_alternative.shortTitle));
      this[_compView_0].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialTooltipDirective_0_9].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView.parentView.parentView.parentView)[_query_SelectionItem_0_1_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_MaterialSelectItemComponent_0_8].ngOnDestroy();
      this[_MaterialTooltipDirective_0_9].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let local_preset = optimizations.unsafeCast(preset.DatepickerPreset, optimizations.unsafeCast(date_range_editor$46template._ViewDateRangeEditorComponent7, this.parentView.parentView).locals[$_get]("$implicit"));
      let local_alternative = optimizations.unsafeCast(preset.DatepickerPreset, this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.onAlternativePresetClicked(html.UIEvent._check($36event), local_preset, local_alternative);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent9.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialSelectItemComponent_0_8] = null;
    this[_MaterialTooltipDirective_0_9] = null;
    this[__TooltipController_0_13] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_4] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent9.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent9.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent9);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent9, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent9.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(date_range_editor$46template._ViewDateRangeEditorComponent9, () => ({
    __proto__: dart.getGetters(date_range_editor$46template._ViewDateRangeEditorComponent9.__proto__),
    [_TooltipController_0_13]: dart.dynamic
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent9, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent9, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent9.__proto__),
    [_textBinding_1]: dart.finalFieldType(text_binding.TextBinding),
    [_compView_0]: dart.fieldType(material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_appEl_0]: dart.fieldType(view_container.ViewContainer),
    [_MaterialSelectItemComponent_0_8]: dart.fieldType(material_select_item.MaterialSelectItemComponent),
    [_MaterialTooltipDirective_0_9]: dart.fieldType(tooltip.MaterialTooltipDirective),
    [__TooltipController_0_13]: dart.fieldType(dart.dynamic),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool)
  }));
  const _MenuRootDirective_0_5 = dart.privateName(date_range_editor$46template, "_MenuRootDirective_0_5");
  const _MenuItemGroupsComponent_0_7 = dart.privateName(date_range_editor$46template, "_MenuItemGroupsComponent_0_7");
  date_range_editor$46template._ViewDateRangeEditorComponent10 = class _ViewDateRangeEditorComponent10 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    build() {
      this[_compView_0] = new menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      dom_helpers.setAttribute(_el_0, "menu-root", "");
      dom_helpers.setAttribute(_el_0, "preventCloseOnPressLeft", "");
      this.addShimC(_el_0);
      this[_MenuRootDirective_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(menu_root.MenuRootDirective, dart.wrapType(menu_root.MenuRootDirective), dart.fn(() => new menu_root.MenuRootDirective.new(material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentIndex))), VoidToMenuRootDirective())) : new menu_root.MenuRootDirective.new(material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentIndex)));
      this[_MenuItemGroupsComponent_0_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(menu_item_groups.MenuItemGroupsComponent, dart.wrapType(menu_item_groups.MenuItemGroupsComponent), dart.fn(() => menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRootDirective_0_5], this[_compView_0], material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentIndex)), id_generator.IdGenerator._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(id_generator.IdGenerator), this.parentView.parentIndex))), VoidToMenuItemGroupsComponent())) : menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRootDirective_0_5], this[_compView_0], material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentIndex)), id_generator.IdGenerator._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(id_generator.IdGenerator), this.parentView.parentIndex)));
      this[_compView_0].create(this[_MenuItemGroupsComponent_0_7]);
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(menu_root.MenuRoot) && 0 === nodeIndex) {
        return this[_MenuRootDirective_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MenuItemGroupsComponent_0_7].preventCloseOnPressLeft = true;
        changed = true;
      }
      let currVal_0 = _ctx.presetsMenu;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "presetsMenu", ""))) {
        this[_MenuItemGroupsComponent_0_7].menu = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MenuItemGroupsComponent_0_7].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MenuItemGroupsComponent_0_7].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MenuItemGroupsComponent_0_7].ngOnDestroy();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent10.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MenuRootDirective_0_5] = null;
    this[_MenuItemGroupsComponent_0_7] = null;
    this[_expr_0] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent10.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent10.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent10);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent10, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent10.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent10, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent10, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent10.__proto__),
    [_compView_0]: dart.fieldType(menu_item_groups$46template.ViewMenuItemGroupsComponent0),
    [_MenuRootDirective_0_5]: dart.fieldType(menu_root.MenuRootDirective),
    [_MenuItemGroupsComponent_0_7]: dart.fieldType(menu_item_groups.MenuItemGroupsComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  const _DeferredValidator_2_5 = dart.privateName(date_range_editor$46template, "_DeferredValidator_2_5");
  const _NgValidators_2_6 = dart.privateName(date_range_editor$46template, "_NgValidators_2_6");
  const _NgModel_2_7 = dart.privateName(date_range_editor$46template, "_NgModel_2_7");
  const _MaterialInputComponent_2_9 = dart.privateName(date_range_editor$46template, "_MaterialInputComponent_2_9");
  const _MaterialInputDefaultValueAccessor_2_11 = dart.privateName(date_range_editor$46template, "_MaterialInputDefaultValueAccessor_2_11");
  const _compView_5 = dart.privateName(date_range_editor$46template, "_compView_5");
  const _compView_6 = dart.privateName(date_range_editor$46template, "_compView_6");
  const _DeferredValidator_6_5 = dart.privateName(date_range_editor$46template, "_DeferredValidator_6_5");
  const _NgValidators_6_6 = dart.privateName(date_range_editor$46template, "_NgValidators_6_6");
  const _NgModel_6_7 = dart.privateName(date_range_editor$46template, "_NgModel_6_7");
  const _MaterialInputComponent_6_9 = dart.privateName(date_range_editor$46template, "_MaterialInputComponent_6_9");
  const _MaterialInputDefaultValueAccessor_6_11 = dart.privateName(date_range_editor$46template, "_MaterialInputDefaultValueAccessor_6_11");
  const _expr_7 = dart.privateName(date_range_editor$46template, "_expr_7");
  const _expr_8 = dart.privateName(date_range_editor$46template, "_expr_8");
  const _handleEvent_3 = dart.privateName(date_range_editor$46template, "_handleEvent_3");
  const _handleEvent_4 = dart.privateName(date_range_editor$46template, "_handleEvent_4");
  const _handleEvent_5 = dart.privateName(date_range_editor$46template, "_handleEvent_5");
  let C20;
  date_range_editor$46template._ViewDateRangeEditorComponent11 = class _ViewDateRangeEditorComponent11 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "days group");
      this.addShimC(html.HtmlElement._check(_el_0));
      this[_compView_1] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      _el_0[$append](_el_1);
      this.updateChildClassNonHtml(_el_1, interpolate.interpolateString2("", "days-input days-to-today", " ", "item", ""));
      this.addShimC(_el_1);
      this[_MaterialSelectItemComponent_1_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_select_item.MaterialSelectItemComponent, dart.wrapType(material_select_item.MaterialSelectItemComponent), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(_el_1, material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentIndex)), activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(activation_handler.ActivationHandler), this.parentView.parentIndex)), this[_compView_1], null), VoidToMaterialSelectItemComponent())) : new material_select_item.MaterialSelectItemComponent.new(_el_1, material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentIndex)), activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(activation_handler.ActivationHandler), this.parentView.parentIndex)), this[_compView_1], null);
      this[_compView_2] = new material_input$46template.ViewMaterialInputComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootElement;
      this.addShimC(_el_2);
      this[_DeferredValidator_2_5] = new deferred_validator.DeferredValidator.new();
      this[_NgValidators_2_6] = [this[_DeferredValidator_2_5]];
      this[_NgModel_2_7] = new ng_model.NgModel.new(this[_NgValidators_2_6], null);
      this[_MaterialInputComponent_2_9] = new material_input.MaterialInputComponent.new(null, null, this[_NgModel_2_7], this[_compView_2], this[_DeferredValidator_2_5]);
      this[_MaterialInputDefaultValueAccessor_2_11] = new material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_2_9], this[_NgModel_2_7]);
      this[_compView_2].createAndProject(this[_MaterialInputComponent_2_9], JSArrayOfObject().of([C19 || CT.C19, C19 || CT.C19]));
      let _el_3 = doc[$createElement]("span");
      this.addShimE(_el_3);
      let _text_4 = dom_helpers.appendText(_el_3, interpolate.interpolateString0(date_range_editor.DateRangeEditorComponent.daysToTodayMsg));
      this[_compView_1].createAndProject(this[_MaterialSelectItemComponent_1_5], JSArrayOfObject().of([JSArrayOfElement().of([_el_2, _el_3])]));
      this[_compView_5] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 5);
      let _el_5 = this[_compView_5].rootElement;
      _el_0[$append](_el_5);
      this.updateChildClassNonHtml(_el_5, interpolate.interpolateString2("", "days-input days-to-yesterday", " ", "item", ""));
      this.addShimC(_el_5);
      this[_MaterialSelectItemComponent_5_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_select_item.MaterialSelectItemComponent, dart.wrapType(material_select_item.MaterialSelectItemComponent), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(_el_5, material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentIndex)), activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(activation_handler.ActivationHandler), this.parentView.parentIndex)), this[_compView_5], null), VoidToMaterialSelectItemComponent())) : new material_select_item.MaterialSelectItemComponent.new(_el_5, material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentIndex)), activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(activation_handler.ActivationHandler), this.parentView.parentIndex)), this[_compView_5], null);
      this[_compView_6] = new material_input$46template.ViewMaterialInputComponent0.new(this, 6);
      let _el_6 = this[_compView_6].rootElement;
      this.addShimC(_el_6);
      this[_DeferredValidator_6_5] = new deferred_validator.DeferredValidator.new();
      this[_NgValidators_6_6] = [this[_DeferredValidator_6_5]];
      this[_NgModel_6_7] = new ng_model.NgModel.new(this[_NgValidators_6_6], null);
      this[_MaterialInputComponent_6_9] = new material_input.MaterialInputComponent.new(null, null, this[_NgModel_6_7], this[_compView_6], this[_DeferredValidator_6_5]);
      this[_MaterialInputDefaultValueAccessor_6_11] = new material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_6_9], this[_NgModel_6_7]);
      this[_compView_6].createAndProject(this[_MaterialInputComponent_6_9], JSArrayOfObject().of([C19 || CT.C19, C19 || CT.C19]));
      let _el_7 = doc[$createElement]("span");
      this.addShimE(_el_7);
      let _text_8 = dom_helpers.appendText(_el_7, interpolate.interpolateString0(date_range_editor.DateRangeEditorComponent.daysToYesterdayMsg));
      this[_compView_5].createAndProject(this[_MaterialSelectItemComponent_5_5], JSArrayOfObject().of([JSArrayOfElement().of([_el_6, _el_7])]));
      let subscription_0 = this[_MaterialSelectItemComponent_1_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handleEvent_0)));
      _el_2[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_1)));
      let subscription_1 = this[_NgModel_2_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_2)));
      let subscription_2 = this[_MaterialSelectItemComponent_5_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handleEvent_3)));
      _el_6[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_4)));
      let subscription_3 = this[_NgModel_6_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_5)));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1, subscription_2, subscription_3]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        if (2 === nodeIndex) {
          if (token === dart.wrapType(deferred_validator.DeferredValidator)) {
            return this[_DeferredValidator_2_5];
          }
          if (token === (C20 || CT.C20)) {
            return this[_NgValidators_2_6];
          }
          if (token === dart.wrapType(ng_model.NgModel) || token === dart.wrapType(ng_control.NgControl)) {
            return this[_NgModel_2_7];
          }
          if (token === dart.wrapType(material_input.MaterialInputComponent) || token === dart.wrapType(base_material_input.BaseMaterialInput) || token === dart.wrapType(reference.ReferenceDirective) || token === dart.wrapType(focus_interface.Focusable) || token === dart.wrapType(has_disabled.HasDisabled)) {
            return this[_MaterialInputComponent_2_9];
          }
        }
        if (token === dart.wrapType(selection_container.SelectionItem) || token === dart.wrapType(has_disabled.HasDisabled) || token === dart.wrapType(has_renderer.HasRenderer)) {
          return this[_MaterialSelectItemComponent_1_5];
        }
      }
      if (5 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        if (6 === nodeIndex) {
          if (token === dart.wrapType(deferred_validator.DeferredValidator)) {
            return this[_DeferredValidator_6_5];
          }
          if (token === (C20 || CT.C20)) {
            return this[_NgValidators_6_6];
          }
          if (token === dart.wrapType(ng_model.NgModel) || token === dart.wrapType(ng_control.NgControl)) {
            return this[_NgModel_6_7];
          }
          if (token === dart.wrapType(material_input.MaterialInputComponent) || token === dart.wrapType(base_material_input.BaseMaterialInput) || token === dart.wrapType(reference.ReferenceDirective) || token === dart.wrapType(focus_interface.Focusable) || token === dart.wrapType(has_disabled.HasDisabled)) {
            return this[_MaterialInputComponent_6_9];
          }
        }
        if (token === dart.wrapType(selection_container.SelectionItem) || token === dart.wrapType(has_disabled.HasDisabled) || token === dart.wrapType(has_renderer.HasRenderer)) {
          return this[_MaterialSelectItemComponent_5_5];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_MaterialSelectItemComponent_1_5].closeOnActivate = false;
      }
      let currVal_0 = _ctx.isSelected(_ctx.daysToTodayRange);
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "isSelected(daysToTodayRange)", ""))) {
        this[_MaterialSelectItemComponent_1_5].selected = currVal_0;
        this[_expr_0] = currVal_0;
      }
      changed = false;
      let currVal_2 = _ctx.daysToToday;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "daysToToday", ""))) {
        this[_NgModel_2_7].model = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_NgModel_2_7].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_2_7].ngOnInit();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialInputComponent_2_9].displayBottomPanel = false;
        changed = true;
      }
      let currVal_3 = _ctx.maxDaysInputLength;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "maxDaysInputLength", ""))) {
        this[_MaterialInputComponent_2_9].maxCount = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        this[_MaterialSelectItemComponent_5_5].closeOnActivate = false;
      }
      let currVal_5 = _ctx.isSelected(_ctx.daysToYesterdayRange);
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "isSelected(daysToYesterdayRange)", ""))) {
        this[_MaterialSelectItemComponent_5_5].selected = currVal_5;
        this[_expr_5] = currVal_5;
      }
      changed = false;
      let currVal_7 = _ctx.daysToYesterday;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "daysToYesterday", ""))) {
        this[_NgModel_6_7].model = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      if (changed) {
        this[_NgModel_6_7].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_6_7].ngOnInit();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialInputComponent_6_9].displayBottomPanel = false;
        changed = true;
      }
      let currVal_8 = _ctx.maxDaysInputLength;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "maxDaysInputLength", ""))) {
        this[_MaterialInputComponent_6_9].maxCount = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_5].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
      this[_compView_2].detectChanges();
      this[_compView_5].detectChanges();
      this[_compView_6].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialInputComponent_2_9].ngAfterViewInit();
          this[_MaterialInputComponent_6_9].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView)[_query_SelectionItem_0_1_isDirty] = true;
      optimizations.unsafeCast(date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView)[_query_SelectionItem_0_1_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
      this[_compView_2].destroyInternalState();
      this[_compView_5].destroyInternalState();
      this[_compView_6].destroyInternalState();
      this[_MaterialInputComponent_2_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_2_11].ngOnDestroy();
      this[_MaterialSelectItemComponent_1_5].ngOnDestroy();
      this[_MaterialInputComponent_6_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_6_11].ngOnDestroy();
      this[_MaterialSelectItemComponent_5_5].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.onRangeClicked(html.UIEvent._check($36event), _ctx.daysToTodayRange);
    }
    [_handleEvent_1]($36event) {
      dart.dsend($36event, 'stopPropagation', []);
    }
    [_handleEvent_2]($36event) {
      let _ctx = this.ctx;
      _ctx.daysToToday = core.String._check($36event);
    }
    [_handleEvent_3]($36event) {
      let _ctx = this.ctx;
      _ctx.onRangeClicked(html.UIEvent._check($36event), _ctx.daysToYesterdayRange);
    }
    [_handleEvent_4]($36event) {
      dart.dsend($36event, 'stopPropagation', []);
    }
    [_handleEvent_5]($36event) {
      let _ctx = this.ctx;
      _ctx.daysToYesterday = core.String._check($36event);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent11.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialSelectItemComponent_1_5] = null;
    this[_compView_2] = null;
    this[_DeferredValidator_2_5] = null;
    this[_NgValidators_2_6] = null;
    this[_NgModel_2_7] = null;
    this[_MaterialInputComponent_2_9] = null;
    this[_MaterialInputDefaultValueAccessor_2_11] = null;
    this[_compView_5] = null;
    this[_MaterialSelectItemComponent_5_5] = null;
    this[_compView_6] = null;
    this[_DeferredValidator_6_5] = null;
    this[_NgValidators_6_6] = null;
    this[_NgModel_6_7] = null;
    this[_MaterialInputComponent_6_9] = null;
    this[_MaterialInputDefaultValueAccessor_6_11] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent11.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent11.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent11);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent11, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent11.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_2]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_3]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_4]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_5]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent11, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent11, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent11.__proto__),
    [_compView_1]: dart.fieldType(material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_1_5]: dart.fieldType(material_select_item.MaterialSelectItemComponent),
    [_compView_2]: dart.fieldType(material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_2_5]: dart.fieldType(deferred_validator.DeferredValidator),
    [_NgValidators_2_6]: dart.fieldType(core.List),
    [_NgModel_2_7]: dart.fieldType(ng_model.NgModel),
    [_MaterialInputComponent_2_9]: dart.fieldType(material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_2_11]: dart.fieldType(material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_compView_5]: dart.fieldType(material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_5_5]: dart.fieldType(material_select_item.MaterialSelectItemComponent),
    [_compView_6]: dart.fieldType(material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_6_5]: dart.fieldType(deferred_validator.DeferredValidator),
    [_NgValidators_6_6]: dart.fieldType(core.List),
    [_NgModel_6_7]: dart.fieldType(ng_model.NgModel),
    [_MaterialInputComponent_6_9]: dart.fieldType(material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_6_11]: dart.fieldType(material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.int),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.int)
  }));
  const _ComparisonRangeEditorComponent_1_5 = dart.privateName(date_range_editor$46template, "_ComparisonRangeEditorComponent_1_5");
  date_range_editor$46template._ViewDateRangeEditorComponent12 = class _ViewDateRangeEditorComponent12 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "comparison group");
      this.addShimC(html.HtmlElement._check(_el_0));
      this[_compView_1] = new comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_ComparisonRangeEditorComponent_1_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(comparison_range_editor.ComparisonRangeEditorComponent, dart.wrapType(comparison_range_editor.ComparisonRangeEditorComponent), dart.fn(() => new comparison_range_editor.ComparisonRangeEditorComponent.new(ng_zone.NgZone._check(this.parentView.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentView.parentIndex)), optimizations.unsafeCast(date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView)[_ElementScrollHost_0_9]), VoidToComparisonRangeEditorComponent())) : new comparison_range_editor.ComparisonRangeEditorComponent.new(ng_zone.NgZone._check(this.parentView.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentView.parentIndex)), optimizations.unsafeCast(date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView)[_ElementScrollHost_0_9]);
      this[_compView_1].create(this[_ComparisonRangeEditorComponent_1_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.model;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "model", ""))) {
        this[_ComparisonRangeEditorComponent_1_5].model = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent12.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_ComparisonRangeEditorComponent_1_5] = null;
    this[_expr_0] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent12.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent12.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent12);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent12, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent12.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent12, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent12, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent12.__proto__),
    [_compView_1]: dart.fieldType(comparison_range_editor$46template.ViewComparisonRangeEditorComponent0),
    [_ComparisonRangeEditorComponent_1_5]: dart.fieldType(comparison_range_editor.ComparisonRangeEditorComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  const _compView_4 = dart.privateName(date_range_editor$46template, "_compView_4");
  const _DateRangeInputComponent_4_5 = dart.privateName(date_range_editor$46template, "_DateRangeInputComponent_4_5");
  const _appEl_8 = dart.privateName(date_range_editor$46template, "_appEl_8");
  const _NgIf_8_9 = dart.privateName(date_range_editor$46template, "_NgIf_8_9");
  const _NgIf_10_9 = dart.privateName(date_range_editor$46template, "_NgIf_10_9");
  const _NgIf_11_9 = dart.privateName(date_range_editor$46template, "_NgIf_11_9");
  const _el_9 = dart.privateName(date_range_editor$46template, "_el_9");
  let C21;
  let C22;
  let C23;
  let C24;
  let C25;
  let C26;
  let C27;
  let C28;
  date_range_editor$46template._ViewDateRangeEditorComponent13 = class _ViewDateRangeEditorComponent13 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "right-column");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C21 || CT.C21);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C22 || CT.C22);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _el_3 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_3, "range-input");
      this.addShimC(_el_3);
      this[_compView_4] = new date_range_input$46template.ViewDateRangeInputComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootElement;
      _el_3[$append](_el_4);
      this.updateChildClassNonHtml(_el_4, "range");
      this.addShimC(_el_4);
      this[_DateRangeInputComponent_4_5] = new date_range_input.DateRangeInputComponent.new(this[_compView_4]);
      this[_compView_4].create(this[_DateRangeInputComponent_4_5]);
      let _anchor_5 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_5] = new view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C23 || CT.C23);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_6] = new view_container.ViewContainer.new(6, 0, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C24 || CT.C24);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _anchor_7 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_7] = new view_container.ViewContainer.new(7, 0, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7], C25 || CT.C25);
      this[_NgIf_7_9] = new ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _anchor_8 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_8] = new view_container.ViewContainer.new(8, 0, this, _anchor_8);
      let _TemplateRef_8_8 = new template_ref.TemplateRef.new(this[_appEl_8], C26 || CT.C26);
      this[_NgIf_8_9] = new ng_if.NgIf.new(this[_appEl_8], _TemplateRef_8_8);
      this[_el_9] = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(this[_el_9], "picker-container");
      this.addShimC(this[_el_9]);
      let _anchor_10 = dom_helpers.appendAnchor(this[_el_9]);
      this[_appEl_10] = new view_container.ViewContainer.new(10, 9, this, _anchor_10);
      let _TemplateRef_10_8 = new template_ref.TemplateRef.new(this[_appEl_10], C27 || CT.C27);
      this[_NgIf_10_9] = new ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
      let _anchor_11 = dom_helpers.appendAnchor(this[_el_9]);
      this[_appEl_11] = new view_container.ViewContainer.new(11, 9, this, _anchor_11);
      let _TemplateRef_11_8 = new template_ref.TemplateRef.new(this[_appEl_11], C28 || CT.C28);
      this[_NgIf_11_9] = new ng_if.NgIf.new(this[_appEl_11], _TemplateRef_11_8);
      let subscription_0 = this[_DateRangeInputComponent_4_5].stateChange.listen(this.eventHandler1(calendar.CalendarState, calendar.CalendarState, dart.bind(this, _handleEvent_0)));
      let subscription_1 = this[_DateRangeInputComponent_4_5].rangeChange.listen(this.eventHandler1(date.DateRange, date.DateRange, dart.bind(this, _handleEvent_1)));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      this[_NgIf_1_9].ngIf = _ctx.isBasic;
      this[_NgIf_2_9].ngIf = _ctx.isBasic;
      changed = false;
      let currVal_0 = _ctx.model.rangeId;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "model.rangeId", ""))) {
        this[_DateRangeInputComponent_4_5].rangeId = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.dateFormat;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "dateFormat", ""))) {
        this[_DateRangeInputComponent_4_5].dateFormat = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.activeDateFormat;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "activeDateFormat", ""))) {
        this[_DateRangeInputComponent_4_5].activeDateFormat = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.maxDate;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "maxDate", ""))) {
        this[_DateRangeInputComponent_4_5].maxDate = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.minDate;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "minDate", ""))) {
        this[_DateRangeInputComponent_4_5].minDate = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.model.range.value;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "model.range.value", ""))) {
        this[_DateRangeInputComponent_4_5].range = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.isClearRangeSelected;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "isClearRangeSelected", ""))) {
        this[_DateRangeInputComponent_4_5].isClearRangeSelected = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.model.calendar.value;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "model.calendar.value", ""))) {
        this[_DateRangeInputComponent_4_5].state = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_DateRangeInputComponent_4_5].ngOnInit();
      }
      this[_NgIf_5_9].ngIf = _ctx.model.comparisonEnabled;
      this[_NgIf_6_9].ngIf = _ctx.model.comparisonEnabled;
      this[_NgIf_7_9].ngIf = _ctx.supportsMonthSelector;
      this[_NgIf_8_9].ngIf = !dart.test(_ctx.isCalendarCreated);
      this[_NgIf_10_9].ngIf = _ctx.isCalendarCreated;
      this[_NgIf_11_9].ngIf = _ctx.supportsMonthSelector;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_8].detectChangesInNestedViews();
      this[_appEl_10].detectChangesInNestedViews();
      this[_appEl_11].detectChangesInNestedViews();
      let currVal_8 = _ctx.compact;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "compact", ""))) {
        dom_helpers.updateClassBinding(this[_el_9], "compact", currVal_8);
        this[_expr_8] = currVal_8;
      }
      this[_compView_4].detectChanges();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_appEl_8].destroyNestedViews();
      this[_appEl_10].destroyNestedViews();
      this[_appEl_11].destroyNestedViews();
      this[_compView_4].destroyInternalState();
      this[_DateRangeInputComponent_4_5].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.model.calendar.value = calendar.CalendarState._check($36event);
    }
    [_handleEvent_1]($36event) {
      let _ctx = this.ctx;
      _ctx.model.range.value = date.DateRange._check($36event);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent13.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_compView_4] = null;
    this[_DateRangeInputComponent_4_5] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_8] = null;
    this[_NgIf_8_9] = null;
    this[_appEl_10] = null;
    this[_NgIf_10_9] = null;
    this[_appEl_11] = null;
    this[_NgIf_11_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_el_9] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent13.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent13.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent13);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent13, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent13.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent13, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent13, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent13.__proto__),
    [_appEl_1]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_2]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(ng_if.NgIf),
    [_compView_4]: dart.fieldType(date_range_input$46template.ViewDateRangeInputComponent0),
    [_DateRangeInputComponent_4_5]: dart.fieldType(date_range_input.DateRangeInputComponent),
    [_appEl_5]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_6]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_7]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_8]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_8_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_10]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_10_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_11]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_11_9]: dart.fieldType(ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.bool),
    [_el_9]: dart.fieldType(html.DivElement)
  }));
  const _compView_3 = dart.privateName(date_range_editor$46template, "_compView_3");
  const _MaterialIconComponent_3_5 = dart.privateName(date_range_editor$46template, "_MaterialIconComponent_3_5");
  date_range_editor$46template._ViewDateRangeEditorComponent14 = class _ViewDateRangeEditorComponent14 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClass(this[_el_0], "button-decorator");
      this.addShimC(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0], null));
      let _el_1 = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_1, "custom-tab-right");
      this.addShimC(_el_1);
      let _text_2 = dom_helpers.appendText(_el_1, interpolate.interpolateString0(date_range_editor.DateRangeEditorComponent.customRangeMsg));
      this[_compView_3] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 3);
      let _el_3 = this[_compView_3].rootElement;
      this[_el_0][$append](_el_3);
      this.updateChildClassNonHtml(_el_3, "expand-less");
      dom_helpers.setAttribute(_el_3, "icon", "expand_less");
      this.addShimC(_el_3);
      this[_MaterialIconComponent_3_5] = new material_icon.MaterialIconComponent.new(_el_3);
      this[_compView_3].create(this[_MaterialIconComponent_3_5]);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(_ctx, 'disableCustomMode')));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([this[_el_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator.ButtonDirective) && dart.notNull(nodeIndex) <= 3) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialIconComponent_3_5].icon = "expand_less";
        changed = true;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      this[_compView_3].detectChanges();
    }
    destroyInternal() {
      this[_compView_3].destroyInternalState();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent14.new = function(parentView, parentIndex) {
    this[_ButtonDirective_0_5] = null;
    this[_compView_3] = null;
    this[_MaterialIconComponent_3_5] = null;
    this[_el_0] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent14.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent14.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent14);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent14, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent14.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent14, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent14, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent14.__proto__),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator$46template.ButtonDirectiveNgCd),
    [_compView_3]: dart.fieldType(material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_3_5]: dart.fieldType(material_icon.MaterialIconComponent),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  date_range_editor$46template._ViewDateRangeEditorComponent15 = class _ViewDateRangeEditorComponent15 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "content-separator");
      this.addShimC(html.HtmlElement._check(_el_0));
      this.initRootNode(_el_0);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent15.new = function(parentView, parentIndex) {
    date_range_editor$46template._ViewDateRangeEditorComponent15.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent15.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent15);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent15, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent15.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent15, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  date_range_editor$46template._ViewDateRangeEditorComponent16 = class _ViewDateRangeEditorComponent16 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "range-title");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _text_1 = dom_helpers.appendText(_el_0, interpolate.interpolateString0(date_range_editor.DateRangeEditorComponent.comparisonHeaderMsg));
      this.initRootNode(_el_0);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent16.new = function(parentView, parentIndex) {
    date_range_editor$46template._ViewDateRangeEditorComponent16.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent16.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent16);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent16, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent16.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent16, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  const _DateRangeInputComponent_1_5 = dart.privateName(date_range_editor$46template, "_DateRangeInputComponent_1_5");
  date_range_editor$46template._ViewDateRangeEditorComponent17 = class _ViewDateRangeEditorComponent17 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "range-input");
      this.addShimC(html.HtmlElement._check(_el_0));
      this[_compView_1] = new date_range_input$46template.ViewDateRangeInputComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      _el_0[$append](_el_1);
      this.updateChildClassNonHtml(_el_1, "comparison inputs");
      this.addShimC(_el_1);
      this[_DateRangeInputComponent_1_5] = new date_range_input.DateRangeInputComponent.new(this[_compView_1]);
      this[_compView_1].create(this[_DateRangeInputComponent_1_5]);
      let subscription_0 = this[_DateRangeInputComponent_1_5].stateChange.listen(this.eventHandler1(calendar.CalendarState, calendar.CalendarState, dart.bind(this, _handleEvent_0)));
      let subscription_1 = this[_DateRangeInputComponent_1_5].rangeChange.listen(this.eventHandler1(date.DateRange, date.DateRange, dart.bind(this, _handleEvent_1)));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      let currVal_0 = !dart.test(_ctx.isCustomComparisonValid);
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "!isCustomComparisonValid", ""))) {
        this[_DateRangeInputComponent_1_5].disabled = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.model.comparisonId;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "model.comparisonId", ""))) {
        this[_DateRangeInputComponent_1_5].rangeId = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.dateFormat;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "dateFormat", ""))) {
        this[_DateRangeInputComponent_1_5].dateFormat = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.activeDateFormat;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "activeDateFormat", ""))) {
        this[_DateRangeInputComponent_1_5].activeDateFormat = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.model.maxDate;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "model.maxDate", ""))) {
        this[_DateRangeInputComponent_1_5].maxDate = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.model.minDate;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "model.minDate", ""))) {
        this[_DateRangeInputComponent_1_5].minDate = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.model.comparison.value;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "model.comparison.value", ""))) {
        this[_DateRangeInputComponent_1_5].range = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.isClearRangeSelected;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "isClearRangeSelected", ""))) {
        this[_DateRangeInputComponent_1_5].isClearRangeSelected = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.model.calendar.value;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "model.calendar.value", ""))) {
        this[_DateRangeInputComponent_1_5].state = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_DateRangeInputComponent_1_5].ngOnInit();
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
      this[_DateRangeInputComponent_1_5].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.model.calendar.value = calendar.CalendarState._check($36event);
    }
    [_handleEvent_1]($36event) {
      let _ctx = this.ctx;
      _ctx.model.comparison.value = date.DateRange._check($36event);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent17.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_DateRangeInputComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent17.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent17.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent17);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent17, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent17.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent17, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent17, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent17.__proto__),
    [_compView_1]: dart.fieldType(date_range_input$46template.ViewDateRangeInputComponent0),
    [_DateRangeInputComponent_1_5]: dart.fieldType(date_range_input.DateRangeInputComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(dart.dynamic)
  }));
  const _textBinding_3 = dart.privateName(date_range_editor$46template, "_textBinding_3");
  const _ButtonDirective_1_5 = dart.privateName(date_range_editor$46template, "_ButtonDirective_1_5");
  const _KeyboardOnlyFocusIndicatorDirective_1_6 = dart.privateName(date_range_editor$46template, "_KeyboardOnlyFocusIndicatorDirective_1_6");
  const _MaterialIconComponent_4_5 = dart.privateName(date_range_editor$46template, "_MaterialIconComponent_4_5");
  const _NextPrevComponent_5_5 = dart.privateName(date_range_editor$46template, "_NextPrevComponent_5_5");
  const _el_4 = dart.privateName(date_range_editor$46template, "_el_4");
  date_range_editor$46template._ViewDateRangeEditorComponent18 = class _ViewDateRangeEditorComponent18 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "month-selector-toolbar");
      this.addShimC(html.HtmlElement._check(_el_0));
      this[_el_1] = dom_helpers.appendDiv(doc, _el_0);
      dom_helpers.setAttribute(this[_el_1], "buttonDecorator", "");
      this.updateChildClass(this[_el_1], "month-selector-dropdown");
      dom_helpers.setAttribute(this[_el_1], "keyboardOnlyFocusIndicator", "");
      this.addShimC(this[_el_1]);
      this[_ButtonDirective_1_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_1], null));
      this[_KeyboardOnlyFocusIndicatorDirective_1_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, dart.wrapType(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_1], dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirective())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_1], dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentIndex)));
      let _el_2 = dom_helpers.appendSpan(doc, this[_el_1]);
      this.updateChildClass(_el_2, "visible-month");
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3].element);
      this[_compView_4] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootElement;
      this[_el_1][$append](this[_el_4]);
      this.updateChildClassNonHtml(this[_el_4], "month-selector-dropdown-icon");
      dom_helpers.setAttribute(this[_el_4], "icon", "arrow_drop_down");
      this.addShimC(html.HtmlElement._check(this[_el_4]));
      this[_MaterialIconComponent_4_5] = new material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_4]));
      this[_compView_4].create(this[_MaterialIconComponent_4_5]);
      this[_compView_5] = new next_prev_buttons$46template.ViewNextPrevComponent0.new(this, 5);
      let _el_5 = this[_compView_5].rootElement;
      _el_0[$append](_el_5);
      this.updateChildClassNonHtml(_el_5, "next-prev-range");
      this.addShimC(_el_5);
      this[_NextPrevComponent_5_5] = new next_prev_buttons.NextPrevComponent.new(this[_compView_5]);
      this[_compView_5].create(this[_NextPrevComponent_5_5]);
      this[_el_1][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_0)));
      this[_el_1][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_1_5].instance, 'handleKeyPress')));
      this[_el_1][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'keydown')));
      this[_el_1][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'resetOutline')));
      this[_el_1][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'onMouseInteraction')));
      this[_el_1][$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'onFocus')));
      let subscription_0 = this[_ButtonDirective_1_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(_ctx, 'onMonthSelectorDropdownClicked')));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator.ButtonDirective) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_ButtonDirective_1_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialIconComponent_4_5].icon = "arrow_drop_down";
        changed = true;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      changed = false;
      let currVal_2 = _ctx.nextPrevModel;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "nextPrevModel", ""))) {
        this[_NextPrevComponent_5_5].model = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_5].markAsCheckOnce();
      }
      this[_ButtonDirective_1_5].detectHostChanges(this, this[_el_1]);
      this[_textBinding_3].updateText(interpolate.interpolateString0(_ctx.visibleMonthName));
      let currVal_0 = _ctx.showMonthSelector;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "showMonthSelector", ""))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_4], "flipped", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_4].detectChanges();
      this[_compView_5].detectChanges();
    }
    destroyInternal() {
      this[_compView_4].destroyInternalState();
      this[_compView_5].destroyInternalState();
      this[_NextPrevComponent_5_5].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      this[_ButtonDirective_1_5].instance.handleClick(html.MouseEvent._check($36event));
      this[_KeyboardOnlyFocusIndicatorDirective_1_6].onMouseInteraction();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent18.new = function(parentView, parentIndex) {
    this[_textBinding_3] = new text_binding.TextBinding.new();
    this[_ButtonDirective_1_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_1_6] = null;
    this[_compView_4] = null;
    this[_MaterialIconComponent_4_5] = null;
    this[_compView_5] = null;
    this[_NextPrevComponent_5_5] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_el_1] = null;
    this[_el_4] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent18.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent18.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent18);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent18, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent18.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent18, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent18, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent18.__proto__),
    [_textBinding_3]: dart.finalFieldType(text_binding.TextBinding),
    [_ButtonDirective_1_5]: dart.fieldType(button_decorator$46template.ButtonDirectiveNgCd),
    [_KeyboardOnlyFocusIndicatorDirective_1_6]: dart.fieldType(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_compView_4]: dart.fieldType(material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_4_5]: dart.fieldType(material_icon.MaterialIconComponent),
    [_compView_5]: dart.fieldType(next_prev_buttons$46template.ViewNextPrevComponent0),
    [_NextPrevComponent_5_5]: dart.fieldType(next_prev_buttons.NextPrevComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_4]: dart.fieldType(html.Element)
  }));
  date_range_editor$46template._ViewDateRangeEditorComponent19 = class _ViewDateRangeEditorComponent19 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "calendar-placeholder");
      this.addShimC(html.HtmlElement._check(_el_0));
      this.initRootNode(_el_0);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent19.new = function(parentView, parentIndex) {
    date_range_editor$46template._ViewDateRangeEditorComponent19.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent19.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent19);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent19, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent19.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent19, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  const _ShowHideDirective_0_6 = dart.privateName(date_range_editor$46template, "_ShowHideDirective_0_6");
  let C29;
  date_range_editor$46template._ViewDateRangeEditorComponent20 = class _ViewDateRangeEditorComponent20 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(this[_el_0], "picker calendar");
      dom_helpers.setAttribute(this[_el_0], "mode", "date-range");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialCalendarPickerComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_calendar_picker.MaterialCalendarPickerComponent, dart.wrapType(material_calendar_picker.MaterialCalendarPickerComponent), dart.fn(() => new material_calendar_picker.MaterialCalendarPickerComponent.new(time.Clock._check(this.parentView.parentView.injectorGetOptional(C29 || CT.C29, this.parentView.parentIndex)), time.Clock._check(this.parentView.parentView.injectorGet(dart.wrapType(time.Clock), this.parentView.parentIndex)), "date-range"), VoidToMaterialCalendarPickerComponent())) : new material_calendar_picker.MaterialCalendarPickerComponent.new(time.Clock._check(this.parentView.parentView.injectorGetOptional(C29 || CT.C29, this.parentView.parentIndex)), time.Clock._check(this.parentView.parentView.injectorGet(dart.wrapType(time.Clock), this.parentView.parentIndex)), "date-range");
      this[_ShowHideDirective_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(showhide.ShowHideDirective, dart.wrapType(showhide.ShowHideDirective), dart.fn(() => new showhide.ShowHideDirective.new(this[_el_0], dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentIndex))), VoidToShowHideDirective())) : new showhide.ShowHideDirective.new(this[_el_0], dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentIndex)));
      this[_compView_0].create(this[_MaterialCalendarPickerComponent_0_5]);
      let subscription_0 = this[_MaterialCalendarPickerComponent_0_5].visibleMonth.listen(this.eventHandler1(date.Date, date.Date, dart.bind(_ctx, 'onVisibleMonthChange')));
      let subscription_1 = this[_MaterialCalendarPickerComponent_0_5].stateChange.listen(this.eventHandler1(calendar.CalendarState, calendar.CalendarState, dart.bind(this, _handleEvent_0)));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([this[_el_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      let currVal_1 = _ctx.model.calendar.value;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "model.calendar.value", ""))) {
        this[_MaterialCalendarPickerComponent_0_5].state = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.allowHighlightUpdates;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "allowHighlightUpdates", ""))) {
        this[_MaterialCalendarPickerComponent_0_5].allowHighlightUpdates = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.minDate;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "minDate", ""))) {
        this[_MaterialCalendarPickerComponent_0_5].minDate = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.maxDate;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "maxDate", ""))) {
        this[_MaterialCalendarPickerComponent_0_5].maxDate = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.compact;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "compact", ""))) {
        this[_MaterialCalendarPickerComponent_0_5].compact = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.movingStartMaintainsLength;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "movingStartMaintainsLength", ""))) {
        this[_MaterialCalendarPickerComponent_0_5].movingStartMaintainsLength = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (changed) {
        this[_MaterialCalendarPickerComponent_0_5].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MaterialCalendarPickerComponent_0_5].ngOnInit();
      }
      let currVal_7 = !dart.test(_ctx.showMonthSelector);
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "!showMonthSelector", ""))) {
        this[_ShowHideDirective_0_6].visible = currVal_7;
        this[_expr_7] = currVal_7;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_ShowHideDirective_0_6].ngOnInit();
      }
      let currVal_0 = _ctx.popupHandle;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "popupHandle", ""))) {
        dom_helpers.setProperty(this[_el_0], "popupHandle", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialCalendarPickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(date_range_editor$46template.ViewDateRangeEditorComponent0, this.parentView.parentView)[_viewQuery_MaterialCalendarPickerComponent_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialCalendarPickerComponent_0_5].ngOnDestroy();
      this[_ShowHideDirective_0_6].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.model.calendar.value = calendar.CalendarState._check($36event);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent20.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialCalendarPickerComponent_0_5] = null;
    this[_ShowHideDirective_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_el_0] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent20.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent20.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent20);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent20, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent20.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent20, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent20, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent20.__proto__),
    [_compView_0]: dart.fieldType(material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0),
    [_MaterialCalendarPickerComponent_0_5]: dart.fieldType(material_calendar_picker.MaterialCalendarPickerComponent),
    [_ShowHideDirective_0_6]: dart.fieldType(showhide.ShowHideDirective),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.Element)
  }));
  date_range_editor$46template._ViewDateRangeEditorComponent21 = class _ViewDateRangeEditorComponent21 extends embedded_view.EmbeddedView$(date_range_editor.DateRangeEditorComponent) {
    build() {
      this[_compView_0] = new material_month_picker$46template.ViewMaterialMonthPickerComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(_el_0, "picker month-selector");
      dom_helpers.setAttribute(_el_0, "mode", "single-date");
      this.addShimC(_el_0);
      this[_MaterialMonthPickerComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_month_picker.MaterialMonthPickerComponent, dart.wrapType(material_month_picker.MaterialMonthPickerComponent), dart.fn(() => new material_month_picker.MaterialMonthPickerComponent.new(time.Clock._check(this.parentView.parentView.injectorGetOptional(C29 || CT.C29, this.parentView.parentIndex)), "single-date"), VoidToMaterialMonthPickerComponent())) : new material_month_picker.MaterialMonthPickerComponent.new(time.Clock._check(this.parentView.parentView.injectorGetOptional(C29 || CT.C29, this.parentView.parentIndex)), "single-date");
      this[_ShowHideDirective_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(showhide.ShowHideDirective, dart.wrapType(showhide.ShowHideDirective), dart.fn(() => new showhide.ShowHideDirective.new(_el_0, dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentIndex))), VoidToShowHideDirective())) : new showhide.ShowHideDirective.new(_el_0, dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentIndex)));
      this[_compView_0].create(this[_MaterialMonthPickerComponent_0_5]);
      let subscription_0 = this[_MaterialMonthPickerComponent_0_5].stateChange.listen(this.eventHandler1(calendar.CalendarState, calendar.CalendarState, dart.bind(this, _handleEvent_0)));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      let currVal_0 = _ctx.monthSelectorState;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "monthSelectorState", ""))) {
        this[_MaterialMonthPickerComponent_0_5].state = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.minDate;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "minDate", ""))) {
        this[_MaterialMonthPickerComponent_0_5].minDate = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.maxDate;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "maxDate", ""))) {
        this[_MaterialMonthPickerComponent_0_5].maxDate = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (changed) {
        this[_MaterialMonthPickerComponent_0_5].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MaterialMonthPickerComponent_0_5].ngOnInit();
      }
      let currVal_3 = _ctx.showMonthSelector;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "showMonthSelector", ""))) {
        this[_ShowHideDirective_0_6].visible = currVal_3;
        this[_expr_3] = currVal_3;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_ShowHideDirective_0_6].ngOnInit();
      }
      this[_compView_0].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialMonthPickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(date_range_editor$46template.ViewDateRangeEditorComponent0, this.parentView.parentView)[_viewQuery_MaterialMonthPickerComponent_1_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialMonthPickerComponent_0_5].ngOnDestroy();
      this[_ShowHideDirective_0_6].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.monthSelectorState = calendar.CalendarState._check($36event);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent21.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialMonthPickerComponent_0_5] = null;
    this[_ShowHideDirective_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent21.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent21.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent21);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent21, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent21.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent21, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent21, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent21.__proto__),
    [_compView_0]: dart.fieldType(material_month_picker$46template.ViewMaterialMonthPickerComponent0),
    [_MaterialMonthPickerComponent_0_5]: dart.fieldType(material_month_picker.MaterialMonthPickerComponent),
    [_ShowHideDirective_0_6]: dart.fieldType(showhide.ShowHideDirective),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool)
  }));
  date_range_editor$46template._ViewDateRangeEditorComponentHost0 = class _ViewDateRangeEditorComponentHost0 extends host_view.HostView$(date_range_editor.DateRangeEditorComponent) {
    build() {
      this.componentView = new date_range_editor$46template.ViewDateRangeEditorComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(date_range_editor.DateRangeEditorComponent, dart.wrapType(date_range_editor.DateRangeEditorComponent), dart.fn(() => new date_range_editor.DateRangeEditorComponent.new(_el_0, dom_service.DomService._check(this.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), ng_zone.NgZone._check(this.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), date_range_editor_host.DateRangeEditorHost._check(this.injectorGetOptional(dart.wrapType(date_range_editor_host.DateRangeEditorHost), this.parentIndex)), time.Clock._check(this.injectorGetOptional(C29 || CT.C29, this.parentIndex)), time.Clock._check(this.injectorGet(dart.wrapType(time.Clock), this.parentIndex))), VoidToDateRangeEditorComponent())) : new date_range_editor.DateRangeEditorComponent.new(_el_0, dom_service.DomService._check(this.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), ng_zone.NgZone._check(this.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), date_range_editor_host.DateRangeEditorHost._check(this.injectorGetOptional(dart.wrapType(date_range_editor_host.DateRangeEditorHost), this.parentIndex)), time.Clock._check(this.injectorGetOptional(C29 || CT.C29, this.parentIndex)), time.Clock._check(this.injectorGet(dart.wrapType(time.Clock), this.parentIndex)));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
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
  };
  (date_range_editor$46template._ViewDateRangeEditorComponentHost0.new = function(injector) {
    date_range_editor$46template._ViewDateRangeEditorComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponentHost0.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponentHost0);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponentHost0, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponentHost0, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  date_range_editor$46template.viewFactory_DateRangeEditorComponent1 = function viewFactory_DateRangeEditorComponent1(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent1.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent2 = function viewFactory_DateRangeEditorComponent2(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent2.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent3 = function viewFactory_DateRangeEditorComponent3(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent3.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent4 = function viewFactory_DateRangeEditorComponent4(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent4.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent5 = function viewFactory_DateRangeEditorComponent5(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent5.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent6 = function viewFactory_DateRangeEditorComponent6(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent6.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent7 = function viewFactory_DateRangeEditorComponent7(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent7.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent8 = function viewFactory_DateRangeEditorComponent8(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent8.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent9 = function viewFactory_DateRangeEditorComponent9(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent9.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent10 = function viewFactory_DateRangeEditorComponent10(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent10.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent11 = function viewFactory_DateRangeEditorComponent11(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent11.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent12 = function viewFactory_DateRangeEditorComponent12(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent12.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent13 = function viewFactory_DateRangeEditorComponent13(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent13.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent14 = function viewFactory_DateRangeEditorComponent14(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent14.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent15 = function viewFactory_DateRangeEditorComponent15(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent15.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent16 = function viewFactory_DateRangeEditorComponent16(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent16.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent17 = function viewFactory_DateRangeEditorComponent17(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent17.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent18 = function viewFactory_DateRangeEditorComponent18(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent18.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent19 = function viewFactory_DateRangeEditorComponent19(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent19.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent20 = function viewFactory_DateRangeEditorComponent20(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent20.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent21 = function viewFactory_DateRangeEditorComponent21(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent21.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponentHost0 = function viewFactory_DateRangeEditorComponentHost0(injector) {
    return new date_range_editor$46template._ViewDateRangeEditorComponentHost0.new(injector);
  };
  date_range_editor$46template.initReflector = function initReflector() {
    if (dart.test(date_range_editor$46template._visited)) {
      return;
    }
    date_range_editor$46template._visited = true;
    reflector.registerComponent(dart.wrapType(date_range_editor.DateRangeEditorComponent), date_range_editor$46template.DateRangeEditorComponentNgFactory);
    angular$46template.initReflector();
    button_decorator$46template.initReflector();
    focus$46template.initReflector();
    focus_item$46template.initReflector();
    focus_list$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    popup$46template.initReflector();
    material_button$46template.initReflector();
    calendar$46template.initReflector();
    date_range_editor_host$46template.initReflector();
    date_range_input$46template.initReflector();
    material_calendar_picker$46template.initReflector();
    material_month_picker$46template.initReflector();
    module$46template.initReflector();
    next_prev_buttons$46template.initReflector();
    preset$46template.initReflector();
    range$46template.initReflector();
    material_icon$46template.initReflector();
    material_input$46template.initReflector();
    menu_root$46template.initReflector();
    menu_item_groups$46template.initReflector();
    material_popup$46template.initReflector();
    material_ripple$46template.initReflector();
    material_select$46template.initReflector();
    material_select_item$46template.initReflector();
    material_tooltip$46template.initReflector();
    date$46template.initReflector();
    date_formatter$46template.initReflector();
    menu$46template.initReflector();
    selectable_menu$46template.initReflector();
    observable$46template.initReflector();
    select$46template.initReflector();
    selection_model$46template.initReflector();
    comparison_range_editor$46template.initReflector();
    date_range_editor_model$46template.initReflector();
    date_range_editor_model$46template.initReflector();
    angular_2$46template.initReflector();
    dom_service$46template.initReflector();
    showhide$46template.initReflector();
  };
  dart.copyProperties(date_range_editor$46template, {
    get DateRangeEditorComponentNgFactory() {
      return date_range_editor$46template._DateRangeEditorComponentNgFactory;
    }
  });
  let C31;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C30;
  dart.defineLazy(date_range_editor$46template, {
    /*date_range_editor$46template.styles$DateRangeEditorComponent*/get styles$DateRangeEditorComponent() {
      return [date_range_editor$46scss$46css$46shim.styles];
    },
    /*date_range_editor$46template._DateRangeEditorComponentNgFactory*/get _DateRangeEditorComponentNgFactory() {
      return C30 || CT.C30;
    },
    /*date_range_editor$46template.styles$DateRangeEditorComponentHost*/get styles$DateRangeEditorComponentHost() {
      return C19 || CT.C19;
    },
    /*date_range_editor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_datepicker/date_range_editor.template", {
    "package:angular_components/material_datepicker/date_range_editor.template.dart": date_range_editor$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_range_editor.template.dart"],"names":[],"mappings":"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","file":"date_range_editor.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__date_range_editor$46template: date_range_editor$46template
  };
});

//# sourceMappingURL=date_range_editor.template.ddc.js.map

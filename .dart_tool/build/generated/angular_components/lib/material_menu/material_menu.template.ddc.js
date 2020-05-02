define(['dart_sdk', 'packages/angular_components/material_popup/material_popup', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular/src/runtime/queries', 'packages/angular_components/focus/focus', 'packages/angular_components/material_menu/material_menu', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/material_list/material_list', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/material_menu/common/menu_root', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_menu/menu_popup_wrapper.template', 'packages/angular_components/material_menu/menu_root.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/model/menu/menu.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/material_menu/menu_popup.scss.css.shim', 'packages/angular_components/focus/focus_activable_item', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/model/menu/menu', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/model/a11y/active_item_directive.template', 'packages/angular_components/model/a11y/active_item_directive', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/highlighted_text/highlighted_text.template', 'packages/angular_components/highlighted_text/highlighted_text', 'packages/angular_components/material_menu/menu_item_affix_list.template', 'packages/angular_components/material_menu/menu_item_affix_list', 'packages/observable/observable', 'packages/angular_components/model/menu/menu_item_affix', 'packages/angular/meta.template', 'packages/angular_components/focus/focus_activable_item.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/material_tooltip/material_tooltip.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/a11y/active_item.template', 'packages/angular_components/model/action/delayed_action.template', 'packages/angular_components/model/menu/selectable_menu.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/ui/highlighted_text_model.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_components/material_menu/menu_item_groups.scss.css.shim', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_menu/menu_popup_wrapper', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template'], function(dart_sdk, packages__angular_components__material_popup__material_popup, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_popup__material_popup$46template, packages__angular__src__bootstrap__modules, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__focus__focus_trap$46template, packages__angular_components__focus__focus_trap, packages__angular_components__content__deferred_content, packages__angular_components__content__deferred_content_aware, packages__angular_components__mixins__material_dropdown_base, packages__angular__src__runtime__queries, packages__angular_components__focus__focus, packages__angular_components__material_menu__material_menu, packages__angular_components__material_list__material_list$46template, packages__angular_components__material_list__material_list, packages__angular_components__laminate__components__modal__modal, packages__angular_components__material_menu__common__menu_root, packages__angular_components__utils__id_generator__id_generator, packages__angular__angular$46template, packages__angular_components__content__deferred_content$46template, packages__angular_components__focus__focus$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__material_menu__menu_popup_wrapper$46template, packages__angular_components__material_menu__menu_root$46template, packages__angular_components__mixins__focusable_mixin$46template, packages__angular_components__model__menu__menu$46template, packages__angular_components__utils__angular__css__css$46template, packages__angular_components__material_menu__menu_popup$46scss$46css$46shim, packages__angular_components__focus__focus_activable_item, packages__angular__src__runtime__text_binding, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__button_decorator__button_decorator, packages__angular__src__runtime__interpolate, packages__angular_components__model__menu__menu, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular_components__src__material_tooltip__tooltip_controller, packages__angular_components__material_tooltip__module, packages__angular_components__utils__disposer__disposer, packages__angular_components__material_select__material_select_item$46template, packages__angular_components__model__a11y__active_item_directive$46template, packages__angular_components__model__a11y__active_item_directive, packages__angular_components__src__material_tooltip__icon_tooltip, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__material_select__material_select_item, packages__angular_components__material_select__activation_handler, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__model__selection__selection_container, packages__angular_components__interfaces__has_disabled, packages__angular_components__model__ui__has_renderer, packages__angular_components__highlighted_text__highlighted_text$46template, packages__angular_components__highlighted_text__highlighted_text, packages__angular_components__material_menu__menu_item_affix_list$46template, packages__angular_components__material_menu__menu_item_affix_list, packages__observable__observable, packages__angular_components__model__menu__menu_item_affix, packages__angular__meta$46template, packages__angular_components__focus__focus_activable_item$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__material_tooltip__material_tooltip$46template, packages__angular_components__mixins__material_dropdown_base$46template, packages__angular_components__model__a11y__active_item$46template, packages__angular_components__model__action__delayed_action$46template, packages__angular_components__model__menu__selectable_menu$46template, packages__angular_components__model__selection__select$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__ui__highlighted_text_model$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_components__material_menu__menu_item_groups$46scss$46css$46shim, packages__angular_components__material_button__material_button$46template, packages__angular_components__theme__dark_theme, packages__angular_components__material_button__material_button, packages__angular_components__material_menu__menu_popup_wrapper, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__model__a11y__keyboard_handler_mixin$46template) {
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
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const ng_class = packages__angular__src__bootstrap__modules.src__common__directives__ng_class;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const focus_trap$46template = packages__angular_components__focus__focus_trap$46template.focus__focus_trap$46template;
  const focus_trap = packages__angular_components__focus__focus_trap.focus__focus_trap;
  const deferred_content = packages__angular_components__content__deferred_content.content__deferred_content;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const queries = packages__angular__src__runtime__queries.src__runtime__queries;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const menu_item_groups = packages__angular_components__material_menu__material_menu.material_menu__menu_item_groups;
  const menu_popup = packages__angular_components__material_menu__material_menu.material_menu__menu_popup;
  const material_menu = packages__angular_components__material_menu__material_menu.material_menu__material_menu;
  const material_list$46template = packages__angular_components__material_list__material_list$46template.material_list__material_list$46template;
  const material_list = packages__angular_components__material_list__material_list.material_list__material_list;
  const modal = packages__angular_components__laminate__components__modal__modal.laminate__components__modal__modal;
  const menu_root = packages__angular_components__material_menu__common__menu_root.material_menu__common__menu_root;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const menu_popup_wrapper$46template = packages__angular_components__material_menu__menu_popup_wrapper$46template.material_menu__menu_popup_wrapper$46template;
  const menu_root$46template = packages__angular_components__material_menu__menu_root$46template.material_menu__menu_root$46template;
  const focusable_mixin$46template = packages__angular_components__mixins__focusable_mixin$46template.mixins__focusable_mixin$46template;
  const menu$46template = packages__angular_components__model__menu__menu$46template.model__menu__menu$46template;
  const css$46template = packages__angular_components__utils__angular__css__css$46template.utils__angular__css__css$46template;
  const menu_popup$46scss$46css$46shim = packages__angular_components__material_menu__menu_popup$46scss$46css$46shim.material_menu__menu_popup$46scss$46css$46shim;
  const focus_activable_item = packages__angular_components__focus__focus_activable_item.focus__focus_activable_item;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const menu = packages__angular_components__model__menu__menu.model__menu__menu;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const tooltip_controller = packages__angular_components__src__material_tooltip__tooltip_controller.src__material_tooltip__tooltip_controller;
  const module = packages__angular_components__material_tooltip__module.material_tooltip__module;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const material_select_item$46template = packages__angular_components__material_select__material_select_item$46template.material_select__material_select_item$46template;
  const active_item_directive$46template = packages__angular_components__model__a11y__active_item_directive$46template.model__a11y__active_item_directive$46template;
  const active_item_directive = packages__angular_components__model__a11y__active_item_directive.model__a11y__active_item_directive;
  const tooltip = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const material_select_item = packages__angular_components__material_select__material_select_item.material_select__material_select_item;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const highlighted_text$46template = packages__angular_components__highlighted_text__highlighted_text$46template.highlighted_text__highlighted_text$46template;
  const highlighted_text = packages__angular_components__highlighted_text__highlighted_text.highlighted_text__highlighted_text;
  const menu_item_affix_list$46template = packages__angular_components__material_menu__menu_item_affix_list$46template.material_menu__menu_item_affix_list$46template;
  const menu_item_affix_list = packages__angular_components__material_menu__menu_item_affix_list.material_menu__menu_item_affix_list;
  const observable_list = packages__observable__observable.src__observable_list;
  const menu_item_affix = packages__angular_components__model__menu__menu_item_affix.model__menu__menu_item_affix;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const focus_activable_item$46template = packages__angular_components__focus__focus_activable_item$46template.focus__focus_activable_item$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const material_tooltip$46template = packages__angular_components__material_tooltip__material_tooltip$46template.material_tooltip__material_tooltip$46template;
  const material_dropdown_base$46template = packages__angular_components__mixins__material_dropdown_base$46template.mixins__material_dropdown_base$46template;
  const active_item$46template = packages__angular_components__model__a11y__active_item$46template.model__a11y__active_item$46template;
  const delayed_action$46template = packages__angular_components__model__action__delayed_action$46template.model__action__delayed_action$46template;
  const selectable_menu$46template = packages__angular_components__model__menu__selectable_menu$46template.model__menu__selectable_menu$46template;
  const select$46template = packages__angular_components__model__selection__select$46template.model__selection__select$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const highlighted_text_model$46template = packages__angular_components__model__ui__highlighted_text_model$46template.model__ui__highlighted_text_model$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const menu_item_groups$46scss$46css$46shim = packages__angular_components__material_menu__menu_item_groups$46scss$46css$46shim.material_menu__menu_item_groups$46scss$46css$46shim;
  const material_button$46template = packages__angular_components__material_button__material_button$46template.material_button__material_button$46template;
  const dark_theme = packages__angular_components__theme__dark_theme.theme__dark_theme;
  const material_button = packages__angular_components__material_button__material_button.material_button__material_button;
  const menu_popup_wrapper = packages__angular_components__material_menu__menu_popup_wrapper.material_menu__menu_popup_wrapper;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const keyboard_handler_mixin$46template = packages__angular_components__model__a11y__keyboard_handler_mixin$46template.model__a11y__keyboard_handler_mixin$46template;
  const menu_popup$46template = Object.create(dart.library);
  const menu_item_groups$46template = Object.create(dart.library);
  const material_menu$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let VoidToMaterialPopupComponent = () => (VoidToMaterialPopupComponent = dart.constFn(dart.fnType(material_popup.MaterialPopupComponent, [])))();
  let EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  let RenderViewAndintToEmbeddedViewOfvoid = () => (RenderViewAndintToEmbeddedViewOfvoid = dart.constFn(dart.fnType(EmbeddedViewOfvoid(), [render_view.RenderView, core.int])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let JSArrayOfHtmlElement = () => (JSArrayOfHtmlElement = dart.constFn(_interceptors.JSArray$(html.HtmlElement)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let JSArrayOfAutoFocusDirective = () => (JSArrayOfAutoFocusDirective = dart.constFn(_interceptors.JSArray$(focus.AutoFocusDirective)))();
  let ListOfAutoFocusDirective = () => (ListOfAutoFocusDirective = dart.constFn(core.List$(focus.AutoFocusDirective)))();
  let _ViewMenuPopupComponent1ToListOfAutoFocusDirective = () => (_ViewMenuPopupComponent1ToListOfAutoFocusDirective = dart.constFn(dart.fnType(ListOfAutoFocusDirective(), [menu_popup$46template._ViewMenuPopupComponent1])))();
  let JSArrayOfMenuItemGroupsComponent = () => (JSArrayOfMenuItemGroupsComponent = dart.constFn(_interceptors.JSArray$(menu_item_groups.MenuItemGroupsComponent)))();
  let ListOfMenuItemGroupsComponent = () => (ListOfMenuItemGroupsComponent = dart.constFn(core.List$(menu_item_groups.MenuItemGroupsComponent)))();
  let _ViewMenuPopupComponent1ToListOfMenuItemGroupsComponent = () => (_ViewMenuPopupComponent1ToListOfMenuItemGroupsComponent = dart.constFn(dart.fnType(ListOfMenuItemGroupsComponent(), [menu_popup$46template._ViewMenuPopupComponent1])))();
  let VoidToAutoFocusDirective = () => (VoidToAutoFocusDirective = dart.constFn(dart.fnType(focus.AutoFocusDirective, [])))();
  let VoidToMenuItemGroupsComponent = () => (VoidToMenuItemGroupsComponent = dart.constFn(dart.fnType(menu_item_groups.MenuItemGroupsComponent, [])))();
  let ComponentFactoryOfMenuPopupComponent = () => (ComponentFactoryOfMenuPopupComponent = dart.constFn(component_factory.ComponentFactory$(menu_popup.MenuPopupComponent)))();
  let HostViewOfMenuPopupComponent = () => (HostViewOfMenuPopupComponent = dart.constFn(host_view.HostView$(menu_popup.MenuPopupComponent)))();
  let InjectorToHostViewOfMenuPopupComponent = () => (InjectorToHostViewOfMenuPopupComponent = dart.constFn(dart.fnType(HostViewOfMenuPopupComponent(), [injector.Injector])))();
  let JSArrayOfFocusableActivateItem = () => (JSArrayOfFocusableActivateItem = dart.constFn(_interceptors.JSArray$(focus_activable_item.FocusableActivateItem)))();
  let ListOfFocusableActivateItem = () => (ListOfFocusableActivateItem = dart.constFn(core.List$(focus_activable_item.FocusableActivateItem)))();
  let _ViewMenuItemGroupsComponent6ToListOfFocusableActivateItem = () => (_ViewMenuItemGroupsComponent6ToListOfFocusableActivateItem = dart.constFn(dart.fnType(ListOfFocusableActivateItem(), [menu_item_groups$46template._ViewMenuItemGroupsComponent6])))();
  let _ViewMenuItemGroupsComponent5ToListOfFocusableActivateItem = () => (_ViewMenuItemGroupsComponent5ToListOfFocusableActivateItem = dart.constFn(dart.fnType(ListOfFocusableActivateItem(), [menu_item_groups$46template._ViewMenuItemGroupsComponent5])))();
  let _ViewMenuItemGroupsComponent4ToListOfFocusableActivateItem = () => (_ViewMenuItemGroupsComponent4ToListOfFocusableActivateItem = dart.constFn(dart.fnType(ListOfFocusableActivateItem(), [menu_item_groups$46template._ViewMenuItemGroupsComponent4])))();
  let _ViewMenuItemGroupsComponent1ToListOfFocusableActivateItem = () => (_ViewMenuItemGroupsComponent1ToListOfFocusableActivateItem = dart.constFn(dart.fnType(ListOfFocusableActivateItem(), [menu_item_groups$46template._ViewMenuItemGroupsComponent1])))();
  let IterableOfObject = () => (IterableOfObject = dart.constFn(core.Iterable$(core.Object)))();
  let VoidToTooltipController = () => (VoidToTooltipController = dart.constFn(dart.fnType(tooltip_controller.TooltipController, [])))();
  let VoidToActiveItemDirective = () => (VoidToActiveItemDirective = dart.constFn(dart.fnType(active_item_directive.ActiveItemDirective, [])))();
  let VoidToMaterialTooltipDirective = () => (VoidToMaterialTooltipDirective = dart.constFn(dart.fnType(tooltip.MaterialTooltipDirective, [])))();
  let VoidToMaterialSelectItemComponent = () => (VoidToMaterialSelectItemComponent = dart.constFn(dart.fnType(material_select_item.MaterialSelectItemComponent, [])))();
  let VoidToPopupSourceDirective = () => (VoidToPopupSourceDirective = dart.constFn(dart.fnType(popup_source_directive.PopupSourceDirective, [])))();
  let ObservableListOfMenuItemAffix = () => (ObservableListOfMenuItemAffix = dart.constFn(observable_list.ObservableList$(menu_item_affix.MenuItemAffix)))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let _ViewMenuItemGroupsComponent16ToListOfAutoFocusDirective = () => (_ViewMenuItemGroupsComponent16ToListOfAutoFocusDirective = dart.constFn(dart.fnType(ListOfAutoFocusDirective(), [menu_item_groups$46template._ViewMenuItemGroupsComponent16])))();
  let ComponentFactoryOfMenuItemGroupsComponent = () => (ComponentFactoryOfMenuItemGroupsComponent = dart.constFn(component_factory.ComponentFactory$(menu_item_groups.MenuItemGroupsComponent)))();
  let HostViewOfMenuItemGroupsComponent = () => (HostViewOfMenuItemGroupsComponent = dart.constFn(host_view.HostView$(menu_item_groups.MenuItemGroupsComponent)))();
  let InjectorToHostViewOfMenuItemGroupsComponent = () => (InjectorToHostViewOfMenuItemGroupsComponent = dart.constFn(dart.fnType(HostViewOfMenuItemGroupsComponent(), [injector.Injector])))();
  let VoidToAcxDarkTheme = () => (VoidToAcxDarkTheme = dart.constFn(dart.fnType(dark_theme.AcxDarkTheme, [])))();
  let JSArrayOfMenuPopupComponent = () => (JSArrayOfMenuPopupComponent = dart.constFn(_interceptors.JSArray$(menu_popup.MenuPopupComponent)))();
  let ListOfMenuPopupComponent = () => (ListOfMenuPopupComponent = dart.constFn(core.List$(menu_popup.MenuPopupComponent)))();
  let _ViewMaterialMenuComponent3ToListOfMenuPopupComponent = () => (_ViewMaterialMenuComponent3ToListOfMenuPopupComponent = dart.constFn(dart.fnType(ListOfMenuPopupComponent(), [material_menu$46template._ViewMaterialMenuComponent3])))();
  let ComponentFactoryOfMaterialMenuComponent = () => (ComponentFactoryOfMaterialMenuComponent = dart.constFn(component_factory.ComponentFactory$(material_menu.MaterialMenuComponent)))();
  let HostViewOfMaterialMenuComponent = () => (HostViewOfMaterialMenuComponent = dart.constFn(host_view.HostView$(material_menu.MaterialMenuComponent)))();
  let InjectorToHostViewOfMaterialMenuComponent = () => (InjectorToHostViewOfMaterialMenuComponent = dart.constFn(dart.fnType(HostViewOfMaterialMenuComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: OpaqueTokenOfListOfRelativePosition().prototype,
        [OpaqueToken__uniqueName]: "defaultPopupPositions"
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayViewportBoundaries"
      });
    },
    get C3() {
      return C3 = dart.fn(menu_popup$46template.viewFactory_MenuPopupComponent1, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    },
    get C6() {
      return C6 = dart.fn(menu_popup$46template.viewFactory_MenuPopupComponentHost0, InjectorToHostViewOfMenuPopupComponent());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ComponentFactoryOfMenuPopupComponent().prototype,
        [ComponentFactory__viewFactory]: C6 || CT.C6,
        [ComponentFactory_selector]: "menu-popup"
      });
    },
    get C7() {
      return C7 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent1, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C8() {
      return C8 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent2, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C9() {
      return C9 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent4, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C10() {
      return C10 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent3, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C11() {
      return C11 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent5, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C12() {
      return C12 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent6, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C13() {
      return C13 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent7, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C14() {
      return C14 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent8, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C15() {
      return C15 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent10, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C16() {
      return C16 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent12, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C17() {
      return C17 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent13, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C18() {
      return C18 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent14, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C19() {
      return C19 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent15, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C20() {
      return C20 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent9, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C21() {
      return C21 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent11, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C22() {
      return C22 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent16, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C24() {
      return C24 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponentHost0, InjectorToHostViewOfMenuItemGroupsComponent());
    },
    get C23() {
      return C23 = dart.const({
        __proto__: ComponentFactoryOfMenuItemGroupsComponent().prototype,
        [ComponentFactory__viewFactory]: C24 || CT.C24,
        [ComponentFactory_selector]: "menu-item-groups"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "acxDarkTheme"
      });
    },
    get C26() {
      return C26 = dart.fn(material_menu$46template.viewFactory_MaterialMenuComponent1, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C27() {
      return C27 = dart.fn(material_menu$46template.viewFactory_MaterialMenuComponent2, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C28() {
      return C28 = dart.fn(material_menu$46template.viewFactory_MaterialMenuComponent3, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C30() {
      return C30 = dart.fn(material_menu$46template.viewFactory_MaterialMenuComponentHost0, InjectorToHostViewOfMaterialMenuComponent());
    },
    get C29() {
      return C29 = dart.const({
        __proto__: ComponentFactoryOfMaterialMenuComponent().prototype,
        [ComponentFactory__viewFactory]: C30 || CT.C30,
        [ComponentFactory_selector]: "material-menu"
      });
    }
  });
  const _query_AutoFocusDirective_1_0_isDirty = dart.privateName(menu_popup$46template, "_query_AutoFocusDirective_1_0_isDirty");
  const _viewQuery_MenuItemGroupsComponent_0_isDirty = dart.privateName(menu_popup$46template, "_viewQuery_MenuItemGroupsComponent_0_isDirty");
  const _compView_0 = dart.privateName(menu_popup$46template, "_compView_0");
  const _appEl_0 = dart.privateName(menu_popup$46template, "_appEl_0");
  const _MaterialPopupComponent_0_8 = dart.privateName(menu_popup$46template, "_MaterialPopupComponent_0_8");
  const __PopupRef_0_10 = dart.privateName(menu_popup$46template, "__PopupRef_0_10");
  const __PopupHierarchy_0_12 = dart.privateName(menu_popup$46template, "__PopupHierarchy_0_12");
  const _compView_1 = dart.privateName(menu_popup$46template, "_compView_1");
  const _FocusTrapComponent_1_5 = dart.privateName(menu_popup$46template, "_FocusTrapComponent_1_5");
  const _appEl_2 = dart.privateName(menu_popup$46template, "_appEl_2");
  const _DeferredContentDirective_2_9 = dart.privateName(menu_popup$46template, "_DeferredContentDirective_2_9");
  const _expr_0 = dart.privateName(menu_popup$46template, "_expr_0");
  const _expr_2 = dart.privateName(menu_popup$46template, "_expr_2");
  const _expr_3 = dart.privateName(menu_popup$46template, "_expr_3");
  const _expr_4 = dart.privateName(menu_popup$46template, "_expr_4");
  const _el_0 = dart.privateName(menu_popup$46template, "_el_0");
  const _PopupRef_0_10 = dart.privateName(menu_popup$46template, "_PopupRef_0_10");
  const _PopupHierarchy_0_12 = dart.privateName(menu_popup$46template, "_PopupHierarchy_0_12");
  const OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  const _handleEvent_0 = dart.privateName(menu_popup$46template, "_handleEvent_0");
  const _AutoFocusDirective_1_5 = dart.privateName(menu_popup$46template, "_AutoFocusDirective_1_5");
  const _MenuItemGroupsComponent_1_8 = dart.privateName(menu_popup$46template, "_MenuItemGroupsComponent_1_8");
  menu_popup$46template.ViewMenuPopupComponent0 = class ViewMenuPopupComponent0 extends component_view.ComponentView$(menu_popup.MenuPopupComponent) {
    get [_PopupRef_0_10]() {
      if (this[__PopupRef_0_10] == null) {
        this[__PopupRef_0_10] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupRef_0_10];
    }
    get [_PopupHierarchy_0_12]() {
      if (this[__PopupHierarchy_0_12] == null) {
        this[__PopupHierarchy_0_12] = material_popup.getHierarchy(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupHierarchy_0_12];
    }
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/menu_popup.dart" : null;
    }
    build() {
      let t0;
      let parentRenderNode = this.initViewRoot();
      this[_compView_0] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      parentRenderNode[$append](this[_el_0]);
      dom_helpers.setAttribute(this[_el_0], "enforceSpaceConstraints", "");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_MaterialPopupComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_popup.MaterialPopupComponent, dart.wrapType(material_popup.MaterialPopupComponent), dart.fn(() => new material_popup.MaterialPopupComponent.new(popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGetOptional(dart.wrapType(popup_hierarchy.PopupHierarchy), this.parentIndex)), material_popup.MaterialPopupComponent._check(this.parentView.injectorGetOptional(dart.wrapType(material_popup.MaterialPopupComponent), this.parentIndex)), null, ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(overlay_service.OverlayService), this.parentIndex)), dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(zindexer.ZIndexer), this.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(C0 || CT.C0, this.parentIndex)), core.bool._check(this.parentView.injectorGet(C1 || CT.C1, this.parentIndex)), box.Box._check(this.parentView.injectorGet(C2 || CT.C2, this.parentIndex)), popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGetOptional(dart.wrapType(popup_size_provider.PopupSizeProvider), this.parentIndex)), this[_compView_0], this[_appEl_0], new element_ref.ElementRef.new(this[_el_0])), VoidToMaterialPopupComponent())) : new material_popup.MaterialPopupComponent.new(popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGetOptional(dart.wrapType(popup_hierarchy.PopupHierarchy), this.parentIndex)), material_popup.MaterialPopupComponent._check(this.parentView.injectorGetOptional(dart.wrapType(material_popup.MaterialPopupComponent), this.parentIndex)), null, ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(overlay_service.OverlayService), this.parentIndex)), dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(zindexer.ZIndexer), this.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(C0 || CT.C0, this.parentIndex)), core.bool._check(this.parentView.injectorGet(C1 || CT.C1, this.parentIndex)), box.Box._check(this.parentView.injectorGet(C2 || CT.C2, this.parentIndex)), popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGetOptional(dart.wrapType(popup_size_provider.PopupSizeProvider), this.parentIndex)), this[_compView_0], this[_appEl_0], new element_ref.ElementRef.new(this[_el_0]));
      this[_compView_1] = new focus_trap$46template.ViewFocusTrapComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      this.addShimC(_el_1);
      this[_FocusTrapComponent_1_5] = new focus_trap.FocusTrapComponent.new();
      let _anchor_2 = dom_helpers.createAnchor();
      this[_appEl_2] = new view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C3 || CT.C3);
      this[_DeferredContentDirective_2_9] = new deferred_content.DeferredContentDirective.new(this[_appEl_2], _TemplateRef_2_8, this[_MaterialPopupComponent_0_8], this);
      this[_compView_1].createAndProject(this[_FocusTrapComponent_1_5], JSArrayOfObject().of([(t0 = [this.projectedNodes[$_get](0)], t0[$addAll]([this[_appEl_2]]), t0)]));
      this[_compView_0].createAndProject(this[_MaterialPopupComponent_0_8], JSArrayOfObject().of([C4 || CT.C4, JSArrayOfHtmlElement().of([_el_1]), C4 || CT.C4]));
      let subscription_0 = this[_MaterialPopupComponent_0_8].onVisible.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handleEvent_0)));
      this.initSubscriptions(JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 2) {
        if (token === dart.wrapType(material_popup.MaterialPopupComponent) || token === dart.wrapType(deferred_content_aware.DeferredContentAware) || token === dart.wrapType(material_dropdown_base.DropdownHandle)) {
          return this[_MaterialPopupComponent_0_8];
        }
        if (token === dart.wrapType(popup_ref.PopupRef)) {
          return this[_PopupRef_0_10];
        }
        if (token === dart.wrapType(popup_hierarchy.PopupHierarchy)) {
          return this[_PopupHierarchy_0_12];
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
        this[_MaterialPopupComponent_0_8].enforceSpaceConstraints = true;
        changed = true;
      }
      let currVal_2 = _ctx.preferredPositions;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "preferredPositions", ""))) {
        this[_MaterialPopupComponent_0_8].preferredPositions = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.popupSource;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "popupSource", ""))) {
        this[_MaterialPopupComponent_0_8].source = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.isExpanded;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "isExpanded", ""))) {
        this[_MaterialPopupComponent_0_8].visible = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        this[_DeferredContentDirective_2_9].preserveDimensions = true;
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(this[_query_AutoFocusDirective_1_0_isDirty])) {
          this[_FocusTrapComponent_1_5].autoFocus = queries.firstOrNull(focus.AutoFocusDirective, this[_appEl_2].mapNestedViews(focus.AutoFocusDirective, menu_popup$46template._ViewMenuPopupComponent1, dart.fn(nestedView => JSArrayOfAutoFocusDirective().of([nestedView[_AutoFocusDirective_1_5]]), _ViewMenuPopupComponent1ToListOfAutoFocusDirective())));
          this[_query_AutoFocusDirective_1_0_isDirty] = false;
        }
        if (dart.test(this[_viewQuery_MenuItemGroupsComponent_0_isDirty])) {
          _ctx.menuItemGroups = queries.firstOrNull(menu_item_groups.MenuItemGroupsComponent, this[_appEl_2].mapNestedViews(menu_item_groups.MenuItemGroupsComponent, menu_popup$46template._ViewMenuPopupComponent1, dart.fn(nestedView => JSArrayOfMenuItemGroupsComponent().of([nestedView[_MenuItemGroupsComponent_1_8]]), _ViewMenuPopupComponent1ToListOfMenuItemGroupsComponent())));
          this[_viewQuery_MenuItemGroupsComponent_0_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.popupClass;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "popupClass", ""))) {
        this[_compView_0].updateChildClassNonHtml(this[_el_0], currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialPopupComponent_0_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_compView_1].destroyInternalState();
      this[_DeferredContentDirective_2_9].ngOnDestroy();
      this[_FocusTrapComponent_1_5].ngOnDestroy();
      this[_MaterialPopupComponent_0_8].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.isExpanded = core.bool._check($36event);
    }
    initComponentStyles() {
      let styles = menu_popup$46template.ViewMenuPopupComponent0._componentStyles;
      if (styles == null) {
        menu_popup$46template.ViewMenuPopupComponent0._componentStyles = styles = menu_popup$46template.ViewMenuPopupComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(menu_popup$46template.styles$MenuPopupComponent, menu_popup$46template.ViewMenuPopupComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (menu_popup$46template.ViewMenuPopupComponent0.new = function(parentView, parentIndex) {
    this[_query_AutoFocusDirective_1_0_isDirty] = true;
    this[_viewQuery_MenuItemGroupsComponent_0_isDirty] = true;
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[__PopupRef_0_10] = null;
    this[__PopupHierarchy_0_12] = null;
    this[_compView_1] = null;
    this[_FocusTrapComponent_1_5] = null;
    this[_appEl_2] = null;
    this[_DeferredContentDirective_2_9] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_el_0] = null;
    menu_popup$46template.ViewMenuPopupComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("menu-popup"));
  }).prototype = menu_popup$46template.ViewMenuPopupComponent0.prototype;
  dart.addTypeTests(menu_popup$46template.ViewMenuPopupComponent0);
  dart.setMethodSignature(menu_popup$46template.ViewMenuPopupComponent0, () => ({
    __proto__: dart.getMethods(menu_popup$46template.ViewMenuPopupComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(menu_popup$46template.ViewMenuPopupComponent0, () => ({
    __proto__: dart.getGetters(menu_popup$46template.ViewMenuPopupComponent0.__proto__),
    [_PopupRef_0_10]: dart.dynamic,
    [_PopupHierarchy_0_12]: dart.dynamic
  }));
  dart.setLibraryUri(menu_popup$46template.ViewMenuPopupComponent0, "package:angular_components/material_menu/menu_popup.template.dart");
  dart.setFieldSignature(menu_popup$46template.ViewMenuPopupComponent0, () => ({
    __proto__: dart.getFields(menu_popup$46template.ViewMenuPopupComponent0.__proto__),
    [_query_AutoFocusDirective_1_0_isDirty]: dart.fieldType(core.bool),
    [_viewQuery_MenuItemGroupsComponent_0_isDirty]: dart.fieldType(core.bool),
    [_compView_0]: dart.fieldType(material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_0]: dart.fieldType(view_container.ViewContainer),
    [_MaterialPopupComponent_0_8]: dart.fieldType(material_popup.MaterialPopupComponent),
    [__PopupRef_0_10]: dart.fieldType(dart.dynamic),
    [__PopupHierarchy_0_12]: dart.fieldType(dart.dynamic),
    [_compView_1]: dart.fieldType(focus_trap$46template.ViewFocusTrapComponent0),
    [_FocusTrapComponent_1_5]: dart.fieldType(focus_trap.FocusTrapComponent),
    [_appEl_2]: dart.fieldType(view_container.ViewContainer),
    [_DeferredContentDirective_2_9]: dart.fieldType(deferred_content.DeferredContentDirective),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(menu_popup$46template.ViewMenuPopupComponent0, {
    /*menu_popup$46template.ViewMenuPopupComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _MaterialListComponent_0_5 = dart.privateName(menu_popup$46template, "_MaterialListComponent_0_5");
  const _MenuRootDirective_1_6 = dart.privateName(menu_popup$46template, "_MenuRootDirective_1_6");
  const _expr_1 = dart.privateName(menu_popup$46template, "_expr_1");
  const _expr_5 = dart.privateName(menu_popup$46template, "_expr_5");
  const _expr_6 = dart.privateName(menu_popup$46template, "_expr_6");
  menu_popup$46template._ViewMenuPopupComponent1 = class _ViewMenuPopupComponent1 extends embedded_view.EmbeddedView$(menu_popup.MenuPopupComponent) {
    build() {
      this[_compView_0] = new material_list$46template.ViewMaterialListComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(_el_0, "item-group-list");
      dom_helpers.setAttribute(_el_0, "role", "none");
      this.addShimC(_el_0);
      this[_MaterialListComponent_0_5] = new material_list.MaterialListComponent.new();
      this[_compView_1] = new menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      dom_helpers.setAttribute(_el_1, "autoFocus", "");
      dom_helpers.setAttribute(_el_1, "menu-root", "");
      dom_helpers.setAttribute(_el_1, "preventCloseOnPressLeft", "");
      this.addShimC(_el_1);
      this[_AutoFocusDirective_1_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(focus.AutoFocusDirective, dart.wrapType(focus.AutoFocusDirective), dart.fn(() => new focus.AutoFocusDirective.new(_el_1, dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentIndex)), null, modal.ModalComponent._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(modal.ModalComponent), this.parentView.parentIndex)), popup_ref.PopupRef._check(optimizations.unsafeCast(menu_popup$46template.ViewMenuPopupComponent0, this.parentView)[_PopupRef_0_10])), VoidToAutoFocusDirective())) : new focus.AutoFocusDirective.new(_el_1, dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentIndex)), null, modal.ModalComponent._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(modal.ModalComponent), this.parentView.parentIndex)), popup_ref.PopupRef._check(optimizations.unsafeCast(menu_popup$46template.ViewMenuPopupComponent0, this.parentView)[_PopupRef_0_10]));
      this[_MenuRootDirective_1_6] = new menu_root.MenuRootDirective.new(optimizations.unsafeCast(menu_popup$46template.ViewMenuPopupComponent0, this.parentView)[_MaterialPopupComponent_0_8]);
      this[_MenuItemGroupsComponent_1_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(menu_item_groups.MenuItemGroupsComponent, dart.wrapType(menu_item_groups.MenuItemGroupsComponent), dart.fn(() => menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRootDirective_1_6], this[_compView_1], optimizations.unsafeCast(menu_popup$46template.ViewMenuPopupComponent0, this.parentView)[_MaterialPopupComponent_0_8], id_generator.IdGenerator._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(id_generator.IdGenerator), this.parentView.parentIndex))), VoidToMenuItemGroupsComponent())) : menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRootDirective_1_6], this[_compView_1], optimizations.unsafeCast(menu_popup$46template.ViewMenuPopupComponent0, this.parentView)[_MaterialPopupComponent_0_8], id_generator.IdGenerator._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(id_generator.IdGenerator), this.parentView.parentIndex)));
      this[_compView_1].create(this[_MenuItemGroupsComponent_1_8]);
      this[_compView_0].createAndProject(this[_MaterialListComponent_0_5], JSArrayOfObject().of([JSArrayOfHtmlElement().of([_el_1])]));
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(menu_root.MenuRoot) && 1 === nodeIndex) {
        return this[_MenuRootDirective_1_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialListComponent_0_5].role = "none";
        changed = true;
      }
      let currVal_1 = _ctx.width;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "width", ""))) {
        this[_MaterialListComponent_0_5].width = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        this[_AutoFocusDirective_1_5].autoFocus = true;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_AutoFocusDirective_1_5].ngOnInit();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MenuItemGroupsComponent_1_8].preventCloseOnPressLeft = true;
        changed = true;
      }
      let currVal_3 = _ctx.activateFirstItemOnExpand;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "activateFirstItemOnExpand", ""))) {
        this[_MenuItemGroupsComponent_1_8].activateFirstItemOnInit = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.activateLastItemOnExpand;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "activateLastItemOnExpand", ""))) {
        this[_MenuItemGroupsComponent_1_8].activateLastItemOnInit = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.popupClass;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "popupClass", ""))) {
        this[_MenuItemGroupsComponent_1_8].popupClass = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.menu;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "menu", ""))) {
        this[_MenuItemGroupsComponent_1_8].menu = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MenuItemGroupsComponent_1_8].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MenuItemGroupsComponent_1_8].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(menu_popup$46template.ViewMenuPopupComponent0, this.parentView)[_query_AutoFocusDirective_1_0_isDirty] = true;
      optimizations.unsafeCast(menu_popup$46template.ViewMenuPopupComponent0, this.parentView)[_viewQuery_MenuItemGroupsComponent_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_1].destroyInternalState();
      this[_AutoFocusDirective_1_5].ngOnDestroy();
      this[_MenuItemGroupsComponent_1_8].ngOnDestroy();
    }
  };
  (menu_popup$46template._ViewMenuPopupComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialListComponent_0_5] = null;
    this[_compView_1] = null;
    this[_AutoFocusDirective_1_5] = null;
    this[_MenuRootDirective_1_6] = null;
    this[_MenuItemGroupsComponent_1_8] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    menu_popup$46template._ViewMenuPopupComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_popup$46template._ViewMenuPopupComponent1.prototype;
  dart.addTypeTests(menu_popup$46template._ViewMenuPopupComponent1);
  dart.setMethodSignature(menu_popup$46template._ViewMenuPopupComponent1, () => ({
    __proto__: dart.getMethods(menu_popup$46template._ViewMenuPopupComponent1.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(menu_popup$46template._ViewMenuPopupComponent1, "package:angular_components/material_menu/menu_popup.template.dart");
  dart.setFieldSignature(menu_popup$46template._ViewMenuPopupComponent1, () => ({
    __proto__: dart.getFields(menu_popup$46template._ViewMenuPopupComponent1.__proto__),
    [_compView_0]: dart.fieldType(material_list$46template.ViewMaterialListComponent0),
    [_MaterialListComponent_0_5]: dart.fieldType(material_list.MaterialListComponent),
    [_compView_1]: dart.fieldType(menu_item_groups$46template.ViewMenuItemGroupsComponent0),
    [_AutoFocusDirective_1_5]: dart.fieldType(focus.AutoFocusDirective),
    [_MenuRootDirective_1_6]: dart.fieldType(menu_root.MenuRootDirective),
    [_MenuItemGroupsComponent_1_8]: dart.fieldType(menu_item_groups.MenuItemGroupsComponent),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.String),
    [_expr_6]: dart.fieldType(dart.dynamic)
  }));
  menu_popup$46template._ViewMenuPopupComponentHost0 = class _ViewMenuPopupComponentHost0 extends host_view.HostView$(menu_popup.MenuPopupComponent) {
    build() {
      this.componentView = new menu_popup$46template.ViewMenuPopupComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new menu_popup.MenuPopupComponent.new(_el_0);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      this.componentView.detectChanges();
    }
  };
  (menu_popup$46template._ViewMenuPopupComponentHost0.new = function(injector) {
    menu_popup$46template._ViewMenuPopupComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = menu_popup$46template._ViewMenuPopupComponentHost0.prototype;
  dart.addTypeTests(menu_popup$46template._ViewMenuPopupComponentHost0);
  dart.setMethodSignature(menu_popup$46template._ViewMenuPopupComponentHost0, () => ({
    __proto__: dart.getMethods(menu_popup$46template._ViewMenuPopupComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_popup$46template._ViewMenuPopupComponentHost0, "package:angular_components/material_menu/menu_popup.template.dart");
  menu_popup$46template.viewFactory_MenuPopupComponent1 = function viewFactory_MenuPopupComponent1(parentView, parentIndex) {
    return new menu_popup$46template._ViewMenuPopupComponent1.new(parentView, parentIndex);
  };
  menu_popup$46template.viewFactory_MenuPopupComponentHost0 = function viewFactory_MenuPopupComponentHost0(injector) {
    return new menu_popup$46template._ViewMenuPopupComponentHost0.new(injector);
  };
  menu_popup$46template.initReflector = function initReflector() {
    if (dart.test(menu_popup$46template._visited)) {
      return;
    }
    menu_popup$46template._visited = true;
    reflector.registerComponent(dart.wrapType(menu_popup.MenuPopupComponent), menu_popup$46template.MenuPopupComponentNgFactory);
    angular$46template.initReflector();
    deferred_content$46template.initReflector();
    focus$46template.initReflector();
    focus_trap$46template.initReflector();
    popup$46template.initReflector();
    material_list$46template.initReflector();
    menu_item_groups$46template.initReflector();
    menu_popup_wrapper$46template.initReflector();
    menu_root$46template.initReflector();
    material_popup$46template.initReflector();
    focusable_mixin$46template.initReflector();
    menu$46template.initReflector();
    css$46template.initReflector();
  };
  dart.copyProperties(menu_popup$46template, {
    get MenuPopupComponentNgFactory() {
      return menu_popup$46template._MenuPopupComponentNgFactory;
    }
  });
  let C6;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C5;
  dart.defineLazy(menu_popup$46template, {
    /*menu_popup$46template.styles$MenuPopupComponent*/get styles$MenuPopupComponent() {
      return [menu_popup$46scss$46css$46shim.styles];
    },
    /*menu_popup$46template._MenuPopupComponentNgFactory*/get _MenuPopupComponentNgFactory() {
      return C5 || CT.C5;
    },
    /*menu_popup$46template.styles$MenuPopupComponentHost*/get styles$MenuPopupComponentHost() {
      return C4 || CT.C4;
    },
    /*menu_popup$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  const _viewQuery_FocusableActivateItem_0_isDirty = dart.privateName(menu_item_groups$46template, "_viewQuery_FocusableActivateItem_0_isDirty");
  const _appEl_1 = dart.privateName(menu_item_groups$46template, "_appEl_1");
  const _NgFor_1_9 = dart.privateName(menu_item_groups$46template, "_NgFor_1_9");
  const _expr_0$ = dart.privateName(menu_item_groups$46template, "_expr_0");
  const _expr_1$ = dart.privateName(menu_item_groups$46template, "_expr_1");
  const _expr_2$ = dart.privateName(menu_item_groups$46template, "_expr_2");
  let C7;
  const _appEl_4 = dart.privateName(menu_item_groups$46template, "_appEl_4");
  const _FocusActivableItemDirective_1_10 = dart.privateName(menu_item_groups$46template, "_FocusActivableItemDirective_1_10");
  menu_item_groups$46template.ViewMenuItemGroupsComponent0 = class ViewMenuItemGroupsComponent0 extends component_view.ComponentView$(menu_item_groups.MenuItemGroupsComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/menu_item_groups.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_1 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C7 || CT.C7);
      this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = dom_helpers.appendText(parentRenderNode, "\n");
      parentRenderNode[$addEventListener]("mouseover", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'onMouseOver')));
      parentRenderNode[$addEventListener]("mouseout", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'onMouseOut')));
      parentRenderNode[$addEventListener]("mousemove", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'onMouseMove')));
      parentRenderNode[$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeydown')));
      parentRenderNode[$addEventListener]("focus", this.eventHandler1(html.Event, html.FocusEvent, dart.bind(_ctx, 'onFocus')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.menu.itemGroups;
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "menu.itemGroups", ""))) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0$] = currVal_0;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1].detectChangesInNestedViews();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(this[_viewQuery_FocusableActivateItem_0_isDirty])) {
          _ctx.focusableItems = this[_appEl_1].mapNestedViews(focus_activable_item.FocusableActivateItem, menu_item_groups$46template._ViewMenuItemGroupsComponent1, dart.fn(nestedView => nestedView[_appEl_4].mapNestedViews(focus_activable_item.FocusableActivateItem, menu_item_groups$46template._ViewMenuItemGroupsComponent4, dart.fn(nestedView => nestedView[_appEl_1].mapNestedViews(focus_activable_item.FocusableActivateItem, menu_item_groups$46template._ViewMenuItemGroupsComponent5, dart.fn(nestedView => nestedView[_appEl_1].mapNestedViews(focus_activable_item.FocusableActivateItem, menu_item_groups$46template._ViewMenuItemGroupsComponent6, dart.fn(nestedView => JSArrayOfFocusableActivateItem().of([nestedView[_FocusActivableItemDirective_1_10]]), _ViewMenuItemGroupsComponent6ToListOfFocusableActivateItem())), _ViewMenuItemGroupsComponent5ToListOfFocusableActivateItem())), _ViewMenuItemGroupsComponent4ToListOfFocusableActivateItem())), _ViewMenuItemGroupsComponent1ToListOfFocusableActivateItem()));
          this[_viewQuery_FocusableActivateItem_0_isDirty] = false;
        }
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.isMouseDriven;
      if (dart.test(check_binding.checkBinding(this[_expr_1$], currVal_1, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "mouse-driven", currVal_1);
        this[_expr_1$] = currVal_1;
      }
      let currVal_2 = _ctx.isKeyboardDriven;
      if (dart.test(check_binding.checkBinding(this[_expr_2$], currVal_2, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "keyboard-driven", currVal_2);
        this[_expr_2$] = currVal_2;
      }
    }
    initComponentStyles() {
      let styles = menu_item_groups$46template.ViewMenuItemGroupsComponent0._componentStyles;
      if (styles == null) {
        menu_item_groups$46template.ViewMenuItemGroupsComponent0._componentStyles = styles = menu_item_groups$46template.ViewMenuItemGroupsComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(menu_item_groups$46template.styles$MenuItemGroupsComponent, menu_item_groups$46template.ViewMenuItemGroupsComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (menu_item_groups$46template.ViewMenuItemGroupsComponent0.new = function(parentView, parentIndex) {
    this[_viewQuery_FocusableActivateItem_0_isDirty] = true;
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    menu_item_groups$46template.ViewMenuItemGroupsComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("menu-item-groups"));
  }).prototype = menu_item_groups$46template.ViewMenuItemGroupsComponent0.prototype;
  dart.addTypeTests(menu_item_groups$46template.ViewMenuItemGroupsComponent0);
  dart.setMethodSignature(menu_item_groups$46template.ViewMenuItemGroupsComponent0, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template.ViewMenuItemGroupsComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template.ViewMenuItemGroupsComponent0, "package:angular_components/material_menu/menu_item_groups.template.dart");
  dart.setFieldSignature(menu_item_groups$46template.ViewMenuItemGroupsComponent0, () => ({
    __proto__: dart.getFields(menu_item_groups$46template.ViewMenuItemGroupsComponent0.__proto__),
    [_viewQuery_FocusableActivateItem_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_1]: dart.fieldType(view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(ng_for.NgFor),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(core.bool),
    [_expr_2$]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(menu_item_groups$46template.ViewMenuItemGroupsComponent0, {
    /*menu_item_groups$46template.ViewMenuItemGroupsComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _appEl_2$ = dart.privateName(menu_item_groups$46template, "_appEl_2");
  const _NgIf_2_9 = dart.privateName(menu_item_groups$46template, "_NgIf_2_9");
  const _NgIf_4_9 = dart.privateName(menu_item_groups$46template, "_NgIf_4_9");
  const _el_0$ = dart.privateName(menu_item_groups$46template, "_el_0");
  let C8;
  let C9;
  menu_item_groups$46template._ViewMenuItemGroupsComponent1 = class _ViewMenuItemGroupsComponent1 extends embedded_view.EmbeddedView$(menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let doc = html.document;
      this[_el_0$] = html.DivElement._check(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0$], "group");
      dom_helpers.setAttribute(this[_el_0$], "group", "");
      dom_helpers.setAttribute(this[_el_0$], "role", "menu");
      this.addShimC(this[_el_0$]);
      let _text_1 = dom_helpers.appendText(this[_el_0$], "\n  ");
      let _anchor_2 = dom_helpers.appendAnchor(this[_el_0$]);
      this[_appEl_2$] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$], C8 || CT.C8);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
      let _text_3 = dom_helpers.appendText(this[_el_0$], "\n  ");
      let _anchor_4 = dom_helpers.appendAnchor(this[_el_0$]);
      this[_appEl_4] = new view_container.ViewContainer.new(4, 0, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C9 || CT.C9);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _text_5 = dom_helpers.appendText(this[_el_0$], "\n");
      this.initRootNode(this[_el_0$]);
    }
    detectChangesInternal() {
      let local_group = this.locals[$_get]("$implicit");
      this[_NgIf_2_9].ngIf = core.bool._check(dart.dload(local_group, 'hasLabel'));
      this[_NgIf_4_9].ngIf = !dart.dtest(dart.dload(local_group, 'isCollapsible')) || dart.dtest(dart.dload(local_group, 'isExpanded'));
      this[_appEl_2$].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      let currVal_0 = dart.dload(local_group, 'hasSeparator');
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "group.hasSeparator", ""))) {
        dom_helpers.updateClassBinding(this[_el_0$], "has-separator", core.bool._check(currVal_0));
        this[_expr_0$] = core.bool._check(currVal_0);
      }
      let currVal_1 = dart.dload(local_group, 'hasLabel');
      if (dart.test(check_binding.checkBinding(this[_expr_1$], currVal_1, "group.hasLabel", ""))) {
        dom_helpers.updateClassBinding(this[_el_0$], "has-label", core.bool._check(currVal_1));
        this[_expr_1$] = core.bool._check(currVal_1);
      }
    }
    destroyInternal() {
      this[_appEl_2$].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent1.new = function(parentView, parentIndex) {
    this[_appEl_2$] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_el_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent1.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent1);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent1, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent1, "package:angular_components/material_menu/menu_item_groups.template.dart");
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent1, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent1.__proto__),
    [_appEl_2$]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_4]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(ng_if.NgIf),
    [_expr_0$]: dart.fieldType(core.bool),
    [_expr_1$]: dart.fieldType(core.bool),
    [_el_0$]: dart.fieldType(html.DivElement)
  }));
  const _textBinding_4 = dart.privateName(menu_item_groups$46template, "_textBinding_4");
  const _ButtonDirective_0_5 = dart.privateName(menu_item_groups$46template, "_ButtonDirective_0_5");
  const _appEl_7 = dart.privateName(menu_item_groups$46template, "_appEl_7");
  const _NgIf_7_9 = dart.privateName(menu_item_groups$46template, "_NgIf_7_9");
  let C10;
  const _handleEvent_0$ = dart.privateName(menu_item_groups$46template, "_handleEvent_0");
  menu_item_groups$46template._ViewMenuItemGroupsComponent2 = class _ViewMenuItemGroupsComponent2 extends embedded_view.EmbeddedView$(menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let doc = html.document;
      this[_el_0$] = html.DivElement._check(doc[$createElement]("div"));
      dom_helpers.setAttribute(this[_el_0$], "buttonDecorator", "");
      this.updateChildClass(this[_el_0$], "group-header");
      this.addShimC(this[_el_0$]);
      this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0$], null));
      let _text_1 = dom_helpers.appendText(this[_el_0$], "\n    ");
      let _el_2 = dom_helpers.appendDiv(doc, this[_el_0$]);
      this.updateChildClass(_el_2, "group-label");
      this.addShimC(_el_2);
      let _text_3 = dom_helpers.appendText(_el_2, "\n      ");
      _el_2[$append](this[_textBinding_4].element);
      let _text_5 = dom_helpers.appendText(_el_2, "\n    ");
      let _text_6 = dom_helpers.appendText(this[_el_0$], "\n    ");
      let _anchor_7 = dom_helpers.appendAnchor(this[_el_0$]);
      this[_appEl_7] = new view_container.ViewContainer.new(7, 0, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7], C10 || CT.C10);
      this[_NgIf_7_9] = new ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _text_8 = dom_helpers.appendText(this[_el_0$], "\n  ");
      this[_el_0$][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0$][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handleEvent_0$)));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([this[_el_0$]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator.ButtonDirective) && dart.notNull(nodeIndex) <= 8) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let t0;
      let local_group = optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent1, this.parentView).locals[$_get]("$implicit");
      let currVal_2 = dart.dtest(dart.dload(local_group, 'isCollapsible')) ? "button" : "none";
      if (dart.test(check_binding.checkBinding(this[_expr_2$], currVal_2, "group.isCollapsible ? 'button' : 'none'", ""))) {
        this[_ButtonDirective_0_5].instance.role = currVal_2;
        this[_expr_2$] = currVal_2;
      }
      this[_NgIf_7_9].ngIf = core.bool._check(dart.dload(local_group, 'isCollapsible'));
      this[_appEl_7].detectChangesInNestedViews();
      let currVal_0 = dart.dtest(dart.dload(local_group, 'isCollapsible')) ? dart.toString(dart.dload(local_group, 'isExpanded')) : null;
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "group.isCollapsible ? group.isExpanded.toString() : null", ""))) {
        dom_helpers.updateAttribute(this[_el_0$], "aria-expanded", (t0 = currVal_0, t0 == null ? null : dart.toString(t0)));
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = dart.dload(local_group, 'isCollapsible');
      if (dart.test(check_binding.checkBinding(this[_expr_1$], currVal_1, "group.isCollapsible", ""))) {
        dom_helpers.updateClassBinding(this[_el_0$], "is-collapsible", core.bool._check(currVal_1));
        this[_expr_1$] = core.bool._check(currVal_1);
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0$]);
      this[_textBinding_4].updateText(core.String._check(interpolate.interpolate0(dart.dload(local_group, 'uiDisplayName'))));
    }
    destroyInternal() {
      this[_appEl_7].destroyNestedViews();
    }
    [_handleEvent_0$]($36event) {
      let local_group = optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent1, this.parentView).locals[$_get]("$implicit");
      let _ctx = this.ctx;
      _ctx.toggleExpansionIfCollapsible(menu.MenuItemGroup._check(local_group));
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_4] = new text_binding.TextBinding.new();
    this[_ButtonDirective_0_5] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    this[_el_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent2.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent2);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent2, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent2.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handleEvent_0$]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent2, "package:angular_components/material_menu/menu_item_groups.template.dart");
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent2, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent2.__proto__),
    [_textBinding_4]: dart.finalFieldType(text_binding.TextBinding),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator$46template.ButtonDirectiveNgCd),
    [_appEl_7]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(ng_if.NgIf),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(core.bool),
    [_expr_2$]: dart.fieldType(core.String),
    [_el_0$]: dart.fieldType(html.DivElement)
  }));
  const _compView_0$ = dart.privateName(menu_item_groups$46template, "_compView_0");
  const _MaterialIconComponent_0_5 = dart.privateName(menu_item_groups$46template, "_MaterialIconComponent_0_5");
  menu_item_groups$46template._ViewMenuItemGroupsComponent3 = class _ViewMenuItemGroupsComponent3 extends embedded_view.EmbeddedView$(menu_item_groups.MenuItemGroupsComponent) {
    build() {
      this[_compView_0$] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootElement;
      this.updateChildClassNonHtml(this[_el_0$], "expansion-icon");
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_MaterialIconComponent_0_5] = new material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0$]));
      this[_compView_0$].create(this[_MaterialIconComponent_0_5]);
      this.initRootNode(this[_el_0$]);
    }
    detectChangesInternal() {
      let changed = false;
      let local_group = optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent1, this.parentView.parentView).locals[$_get]("$implicit");
      changed = false;
      let currVal_1 = dart.dtest(dart.dload(local_group, 'isExpanded')) ? "expand_less" : "expand_more";
      if (dart.test(check_binding.checkBinding(this[_expr_1$], currVal_1, "group.isExpanded ? 'expand_less' : 'expand_more'", ""))) {
        this[_MaterialIconComponent_0_5].icon = currVal_1;
        changed = true;
        this[_expr_1$] = currVal_1;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      let currVal_0 = dart.dload(local_group, 'isExpanded');
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "group.isExpanded", ""))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0$], "expanded", core.bool._check(currVal_0));
        this[_expr_0$] = core.bool._check(currVal_0);
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent3.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialIconComponent_0_5] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_el_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent3.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent3);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent3, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent3.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent3, "package:angular_components/material_menu/menu_item_groups.template.dart");
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent3, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent3.__proto__),
    [_compView_0$]: dart.fieldType(material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5]: dart.fieldType(material_icon.MaterialIconComponent),
    [_expr_0$]: dart.fieldType(core.bool),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_el_0$]: dart.fieldType(html.Element)
  }));
  let C11;
  menu_item_groups$46template._ViewMenuItemGroupsComponent4 = class _ViewMenuItemGroupsComponent4 extends embedded_view.EmbeddedView$(menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let _text_0 = dom_helpers.createText("\n    ");
      let _anchor_1 = dom_helpers.createAnchor();
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C11 || CT.C11);
      this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = dom_helpers.createText("\n  ");
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([_text_0, this[_appEl_1], _text_2]), null);
    }
    detectChangesInternal() {
      let local_group = optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent1, this.parentView).locals[$_get]("$implicit");
      let currVal_0 = local_group;
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "group", ""))) {
        this[_NgFor_1_9].ngForOf = IterableOfObject()._check(currVal_0);
        this[_expr_0$] = currVal_0;
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
  (menu_item_groups$46template._ViewMenuItemGroupsComponent4.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent4.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent4.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent4);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent4, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent4.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent4, "package:angular_components/material_menu/menu_item_groups.template.dart");
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent4, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent4.__proto__),
    [_appEl_1]: dart.fieldType(view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(ng_for.NgFor),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  const _NgIf_1_9 = dart.privateName(menu_item_groups$46template, "_NgIf_1_9");
  let C12;
  menu_item_groups$46template._ViewMenuItemGroupsComponent5 = class _ViewMenuItemGroupsComponent5 extends embedded_view.EmbeddedView$(menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let _text_0 = dom_helpers.createText("\n      ");
      let _anchor_1 = dom_helpers.createAnchor();
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C12 || CT.C12);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = dom_helpers.createText("\n    ");
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([_text_0, this[_appEl_1], _text_2]), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_item = this.locals[$_get]("$implicit");
      this[_NgIf_1_9].ngIf = _ctx.isItemVisible(menu.MenuItem._check(local_item));
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent5.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent5.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent5.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent5);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent5, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent5.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent5, "package:angular_components/material_menu/menu_item_groups.template.dart");
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent5, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent5.__proto__),
    [_appEl_1]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(ng_if.NgIf)
  }));
  const _compView_1$ = dart.privateName(menu_item_groups$46template, "_compView_1");
  const _ActiveItemDirective_1_8 = dart.privateName(menu_item_groups$46template, "_ActiveItemDirective_1_8");
  const _AutoFocusDirective_1_9 = dart.privateName(menu_item_groups$46template, "_AutoFocusDirective_1_9");
  const _MaterialTooltipDirective_1_11 = dart.privateName(menu_item_groups$46template, "_MaterialTooltipDirective_1_11");
  const _MaterialSelectItemComponent_1_12 = dart.privateName(menu_item_groups$46template, "_MaterialSelectItemComponent_1_12");
  const _NgClass_1_13 = dart.privateName(menu_item_groups$46template, "_NgClass_1_13");
  const _PopupSourceDirective_1_14 = dart.privateName(menu_item_groups$46template, "_PopupSourceDirective_1_14");
  const __TooltipController_1_19 = dart.privateName(menu_item_groups$46template, "__TooltipController_1_19");
  const _appEl_3 = dart.privateName(menu_item_groups$46template, "_appEl_3");
  const _NgIf_3_9 = dart.privateName(menu_item_groups$46template, "_NgIf_3_9");
  const _appEl_9 = dart.privateName(menu_item_groups$46template, "_appEl_9");
  const _NgIf_9_9 = dart.privateName(menu_item_groups$46template, "_NgIf_9_9");
  const _appEl_11 = dart.privateName(menu_item_groups$46template, "_appEl_11");
  const _NgIf_11_9 = dart.privateName(menu_item_groups$46template, "_NgIf_11_9");
  const _appEl_14 = dart.privateName(menu_item_groups$46template, "_appEl_14");
  const _NgIf_14_9 = dart.privateName(menu_item_groups$46template, "_NgIf_14_9");
  const _appEl_16 = dart.privateName(menu_item_groups$46template, "_appEl_16");
  const _NgIf_16_9 = dart.privateName(menu_item_groups$46template, "_NgIf_16_9");
  const _appEl_19 = dart.privateName(menu_item_groups$46template, "_appEl_19");
  const _NgIf_19_9 = dart.privateName(menu_item_groups$46template, "_NgIf_19_9");
  const _expr_3$ = dart.privateName(menu_item_groups$46template, "_expr_3");
  const _expr_4$ = dart.privateName(menu_item_groups$46template, "_expr_4");
  const _expr_5$ = dart.privateName(menu_item_groups$46template, "_expr_5");
  const _expr_6$ = dart.privateName(menu_item_groups$46template, "_expr_6");
  const _expr_7 = dart.privateName(menu_item_groups$46template, "_expr_7");
  const _expr_8 = dart.privateName(menu_item_groups$46template, "_expr_8");
  const _expr_9 = dart.privateName(menu_item_groups$46template, "_expr_9");
  const _expr_10 = dart.privateName(menu_item_groups$46template, "_expr_10");
  const _expr_11 = dart.privateName(menu_item_groups$46template, "_expr_11");
  const _expr_12 = dart.privateName(menu_item_groups$46template, "_expr_12");
  const _expr_13 = dart.privateName(menu_item_groups$46template, "_expr_13");
  const _expr_14 = dart.privateName(menu_item_groups$46template, "_expr_14");
  const _expr_15 = dart.privateName(menu_item_groups$46template, "_expr_15");
  const _expr_16 = dart.privateName(menu_item_groups$46template, "_expr_16");
  const _expr_17 = dart.privateName(menu_item_groups$46template, "_expr_17");
  const _expr_20 = dart.privateName(menu_item_groups$46template, "_expr_20");
  const _expr_21 = dart.privateName(menu_item_groups$46template, "_expr_21");
  const _expr_23 = dart.privateName(menu_item_groups$46template, "_expr_23");
  const _el_1 = dart.privateName(menu_item_groups$46template, "_el_1");
  const _TooltipController_1_19 = dart.privateName(menu_item_groups$46template, "_TooltipController_1_19");
  let C13;
  let C14;
  let C15;
  let C16;
  let C17;
  let C18;
  let C19;
  menu_item_groups$46template._ViewMenuItemGroupsComponent6 = class _ViewMenuItemGroupsComponent6 extends embedded_view.EmbeddedView$(menu_item_groups.MenuItemGroupsComponent) {
    get [_TooltipController_1_19]() {
      if (this[__TooltipController_1_19] == null) {
        this[__TooltipController_1_19] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(tooltip_controller.TooltipController, dart.wrapType(tooltip_controller.TooltipController), dart.fn(() => module.createTooltipController(tooltip_controller.TooltipController._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(tooltip_controller.TooltipController), this.parentView.parentView.parentView.parentIndex)), disposer.Disposer._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(disposer.Disposer), this.parentView.parentView.parentView.parentIndex))), VoidToTooltipController())) : module.createTooltipController(tooltip_controller.TooltipController._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(tooltip_controller.TooltipController), this.parentView.parentView.parentView.parentIndex)), disposer.Disposer._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(disposer.Disposer), this.parentView.parentView.parentView.parentIndex)));
      }
      return this[__TooltipController_1_19];
    }
    build() {
      let _text_0 = dom_helpers.createText("\n        ");
      this[_compView_1$] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      this[_el_1] = this[_compView_1$].rootElement;
      this.updateChildClassNonHtml(this[_el_1], interpolate.interpolateString2("", "menu-item", " ", "item", ""));
      dom_helpers.setAttribute(this[_el_1], "popupSource", "");
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, this[_el_1]);
      this[_ActiveItemDirective_1_8] = new active_item_directive$46template.ActiveItemDirectiveNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(active_item_directive.ActiveItemDirective, dart.wrapType(active_item_directive.ActiveItemDirective), dart.fn(() => new active_item_directive.ActiveItemDirective.new(html.HtmlElement._check(this[_el_1]), dom_service.DomService._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentView.parentView.parentIndex)), modal.Modal._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(modal.Modal), this.parentView.parentView.parentView.parentIndex)), popup_ref.PopupRef._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(popup_ref.PopupRef), this.parentView.parentView.parentView.parentIndex))), VoidToActiveItemDirective())) : new active_item_directive.ActiveItemDirective.new(html.HtmlElement._check(this[_el_1]), dom_service.DomService._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentView.parentView.parentIndex)), modal.Modal._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(modal.Modal), this.parentView.parentView.parentView.parentIndex)), popup_ref.PopupRef._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(popup_ref.PopupRef), this.parentView.parentView.parentView.parentIndex))));
      this[_AutoFocusDirective_1_9] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(focus.AutoFocusDirective, dart.wrapType(focus.AutoFocusDirective), dart.fn(() => new focus.AutoFocusDirective.new(html.HtmlElement._check(this[_el_1]), dom_service.DomService._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentView.parentView.parentIndex)), null, modal.ModalComponent._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(modal.ModalComponent), this.parentView.parentView.parentView.parentIndex)), popup_ref.PopupRef._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(popup_ref.PopupRef), this.parentView.parentView.parentView.parentIndex))), VoidToAutoFocusDirective())) : new focus.AutoFocusDirective.new(html.HtmlElement._check(this[_el_1]), dom_service.DomService._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentView.parentView.parentIndex)), null, modal.ModalComponent._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(modal.ModalComponent), this.parentView.parentView.parentView.parentIndex)), popup_ref.PopupRef._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(popup_ref.PopupRef), this.parentView.parentView.parentView.parentIndex)));
      this[_FocusActivableItemDirective_1_10] = new focus_activable_item.FocusActivableItemDirective.new(html.HtmlElement._check(this[_el_1]));
      this[_MaterialTooltipDirective_1_11] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(tooltip.MaterialTooltipDirective, dart.wrapType(tooltip.MaterialTooltipDirective), dart.fn(() => new tooltip.MaterialTooltipDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.parentView.parentIndex)), this[_appEl_1], html.HtmlElement._check(this[_el_1]), this[_appEl_1], this[_compView_1$], html.Window._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(html.Window), this.parentView.parentView.parentView.parentIndex)), null, null), VoidToMaterialTooltipDirective())) : new tooltip.MaterialTooltipDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.parentView.parentIndex)), this[_appEl_1], html.HtmlElement._check(this[_el_1]), this[_appEl_1], this[_compView_1$], html.Window._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(html.Window), this.parentView.parentView.parentView.parentIndex)), null, null);
      this[_MaterialSelectItemComponent_1_12] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_select_item.MaterialSelectItemComponent, dart.wrapType(material_select_item.MaterialSelectItemComponent), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_1]), material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentView.parentView.parentIndex)), activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentIndex)), this[_compView_1$], null), VoidToMaterialSelectItemComponent())) : new material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_1]), material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentView.parentView.parentIndex)), activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentIndex)), this[_compView_1$], null);
      this[_NgClass_1_13] = new ng_class.NgClass.new(this[_el_1]);
      this[_PopupSourceDirective_1_14] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(popup_source_directive.PopupSourceDirective, dart.wrapType(popup_source_directive.PopupSourceDirective), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.parentView.parentIndex)), html.HtmlElement._check(this[_el_1]), reference.ReferenceDirective._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(reference.ReferenceDirective), this.parentView.parentView.parentView.parentIndex)), focus_interface.Focusable._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(focus_interface.Focusable), this.parentView.parentView.parentView.parentIndex)), null), VoidToPopupSourceDirective())) : new popup_source_directive.PopupSourceDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.parentView.parentIndex)), html.HtmlElement._check(this[_el_1]), reference.ReferenceDirective._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(reference.ReferenceDirective), this.parentView.parentView.parentView.parentIndex)), focus_interface.Focusable._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(focus_interface.Focusable), this.parentView.parentView.parentView.parentIndex)), null);
      let _text_2 = dom_helpers.createText("\n          ");
      let _anchor_3 = dom_helpers.createAnchor();
      this[_appEl_3] = new view_container.ViewContainer.new(3, 1, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C13 || CT.C13);
      this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _text_4 = dom_helpers.createText("\n          ");
      let doc = html.document;
      let _el_5 = doc[$createElement]("span");
      this.updateChildClass(html.HtmlElement._check(_el_5), "menu-item-label-section");
      this.addShimE(_el_5);
      let _text_6 = dom_helpers.appendText(_el_5, "\n            ");
      let _anchor_7 = dom_helpers.appendAnchor(_el_5);
      this[_appEl_7] = new view_container.ViewContainer.new(7, 5, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7], C14 || CT.C14);
      this[_NgIf_7_9] = new ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _text_8 = dom_helpers.appendText(_el_5, "\n            ");
      let _anchor_9 = dom_helpers.appendAnchor(_el_5);
      this[_appEl_9] = new view_container.ViewContainer.new(9, 5, this, _anchor_9);
      let _TemplateRef_9_8 = new template_ref.TemplateRef.new(this[_appEl_9], C15 || CT.C15);
      this[_NgIf_9_9] = new ng_if.NgIf.new(this[_appEl_9], _TemplateRef_9_8);
      let _text_10 = dom_helpers.appendText(_el_5, "\n            ");
      let _anchor_11 = dom_helpers.appendAnchor(_el_5);
      this[_appEl_11] = new view_container.ViewContainer.new(11, 5, this, _anchor_11);
      let _TemplateRef_11_8 = new template_ref.TemplateRef.new(this[_appEl_11], C16 || CT.C16);
      this[_NgIf_11_9] = new ng_if.NgIf.new(this[_appEl_11], _TemplateRef_11_8);
      let _text_12 = dom_helpers.appendText(_el_5, "\n          ");
      let _text_13 = dom_helpers.createText("\n          ");
      let _anchor_14 = dom_helpers.createAnchor();
      this[_appEl_14] = new view_container.ViewContainer.new(14, 1, this, _anchor_14);
      let _TemplateRef_14_8 = new template_ref.TemplateRef.new(this[_appEl_14], C17 || CT.C17);
      this[_NgIf_14_9] = new ng_if.NgIf.new(this[_appEl_14], _TemplateRef_14_8);
      let _text_15 = dom_helpers.createText("\n          ");
      let _anchor_16 = dom_helpers.createAnchor();
      this[_appEl_16] = new view_container.ViewContainer.new(16, 1, this, _anchor_16);
      let _TemplateRef_16_8 = new template_ref.TemplateRef.new(this[_appEl_16], C18 || CT.C18);
      this[_NgIf_16_9] = new ng_if.NgIf.new(this[_appEl_16], _TemplateRef_16_8);
      let _text_17 = dom_helpers.createText("\n        ");
      this[_compView_1$].createAndProject(this[_MaterialSelectItemComponent_1_12], JSArrayOfObject().of([JSArrayOfObject().of([_text_2, this[_appEl_3], _text_4, _el_5, _text_13, this[_appEl_14], _text_15, this[_appEl_16], _text_17])]));
      let _text_18 = dom_helpers.createText("\n        ");
      let _anchor_19 = dom_helpers.createAnchor();
      this[_appEl_19] = new view_container.ViewContainer.new(19, null, this, _anchor_19);
      let _TemplateRef_19_8 = new template_ref.TemplateRef.new(this[_appEl_19], C19 || CT.C19);
      this[_NgIf_19_9] = new ng_if.NgIf.new(this[_appEl_19], _TemplateRef_19_8);
      let _text_20 = dom_helpers.createText("\n      ");
      this[_el_1][$addEventListener]("mouseenter", this.eventHandler0(html.Event, dart.bind(this[_ActiveItemDirective_1_8].instance, 'onMouseEnter')));
      this[_el_1][$addEventListener]("mouseleave", this.eventHandler0(html.Event, dart.bind(this[_ActiveItemDirective_1_8].instance, 'onMouseLeave')));
      let subscription_0 = this[_MaterialSelectItemComponent_1_12].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handleEvent_0$)));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([_text_0, this[_appEl_1], _text_18, this[_appEl_19], _text_20]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 17) {
        if (token === dart.wrapType(focus_activable_item.FocusableActivateItem)) {
          return this[_FocusActivableItemDirective_1_10];
        }
        if (token === dart.wrapType(selection_container.SelectionItem) || token === dart.wrapType(has_disabled.HasDisabled) || token === dart.wrapType(has_renderer.HasRenderer)) {
          return this[_MaterialSelectItemComponent_1_12];
        }
        if (token === dart.wrapType(tooltip_controller.TooltipController)) {
          return this[_TooltipController_1_19];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      let local_i = optimizations.unsafeCast(core.int, optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent1, this.parentView.parentView.parentView).locals[$_get]("index"));
      let local_j = optimizations.unsafeCast(core.int, optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent5, this.parentView).locals[$_get]("index"));
      let local_item = optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent5, this.parentView).locals[$_get]("$implicit");
      let local_group = optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent1, this.parentView.parentView.parentView).locals[$_get]("$implicit");
      let currVal_9 = _ctx.isItemActive(menu.MenuItem._check(local_item));
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "isItemActive(item)", ""))) {
        this[_ActiveItemDirective_1_8].instance.itemActive = currVal_9;
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.hasAutoFocus(_ctx.activeModel == null ? null : _ctx.activeModel.id(local_item));
      if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, "hasAutoFocus(activeModel?.id(item))", ""))) {
        this[_AutoFocusDirective_1_9].autoFocus = currVal_10;
        this[_expr_10] = currVal_10;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_AutoFocusDirective_1_9].ngOnInit();
      }
      let currVal_11 = _ctx.activeModel == null ? null : _ctx.activeModel.id(local_item);
      if (dart.test(check_binding.checkBinding(this[_expr_11], currVal_11, "activeModel?.id(item)", ""))) {
        this[_FocusActivableItemDirective_1_10].key = currVal_11;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.tooltipPositions;
      if (dart.test(check_binding.checkBinding(this[_expr_12], currVal_12, "tooltipPositions", ""))) {
        this[_MaterialTooltipDirective_1_11].positions = currVal_12;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = dart.dload(local_item, 'tooltip');
      if (dart.test(check_binding.checkBinding(this[_expr_13], currVal_13, "item.tooltip", ""))) {
        this[_MaterialTooltipDirective_1_11].text = core.String._check(currVal_13);
        this[_expr_13] = core.String._check(currVal_13);
      }
      let currVal_14 = dart.dload(local_item, 'showTooltip');
      if (dart.test(check_binding.checkBinding(this[_expr_14], currVal_14, "item.showTooltip", ""))) {
        this[_MaterialTooltipDirective_1_11].canShow = core.bool._check(currVal_14);
        this[_expr_14] = core.bool._check(currVal_14);
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MaterialTooltipDirective_1_11].ngOnInit();
      }
      if (dart.test(firstCheck)) {
        this[_MaterialSelectItemComponent_1_12].useCheckMarks = true;
        this[_MaterialSelectItemComponent_1_12].closeOnActivate = false;
      }
      let currVal_15 = interpolate.interpolate0(dart.dload(local_group, 'itemsRole'));
      if (dart.test(check_binding.checkBinding(this[_expr_15], currVal_15, "{{group.itemsRole}}", ""))) {
        this[_MaterialSelectItemComponent_1_12].role = core.String._check(currVal_15);
        this[_expr_15] = core.String._check(currVal_15);
      }
      let currVal_16 = !dart.dtest(dart.dload(local_item, 'enabled'));
      if (dart.test(check_binding.checkBinding(this[_expr_16], currVal_16, "!item.enabled", ""))) {
        this[_MaterialSelectItemComponent_1_12].disabled = currVal_16;
        this[_expr_16] = currVal_16;
      }
      let currVal_17 = _ctx.getItemValue(menu.MenuItem._check(local_item));
      if (dart.test(check_binding.checkBinding(this[_expr_17], currVal_17, "getItemValue(item)", ""))) {
        this[_MaterialSelectItemComponent_1_12].value = currVal_17;
        this[_expr_17] = currVal_17;
      }
      let currVal_20 = _ctx.shouldSelectItemOnClick(menu.MenuItem._check(local_item));
      if (dart.test(check_binding.checkBinding(this[_expr_20], currVal_20, "shouldSelectItemOnClick(item)", ""))) {
        this[_MaterialSelectItemComponent_1_12].selectOnActivate = currVal_20;
        this[_expr_20] = currVal_20;
      }
      let currVal_21 = _ctx.getSelectionModel(menu.MenuItemGroup._check(local_group));
      if (dart.test(check_binding.checkBinding(this[_expr_21], currVal_21, "getSelectionModel(group)", ""))) {
        this[_MaterialSelectItemComponent_1_12].selection = currVal_21;
        this[_expr_21] = currVal_21;
      }
      if (dart.test(firstCheck)) {
        this[_NgClass_1_13].initialClasses = "menu-item";
      }
      let currVal_23 = dart.dload(local_item, 'cssClasses');
      if (dart.test(check_binding.checkBinding(this[_expr_23], currVal_23, "item.cssClasses", ""))) {
        this[_NgClass_1_13].rawClass = currVal_23;
        this[_expr_23] = currVal_23;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgClass_1_13].ngDoCheck();
      }
      this[_NgIf_3_9].ngIf = core.bool._check(dart.dload(local_item, 'hasIcon'));
      this[_NgIf_7_9].ngIf = _ctx.hasHighlight;
      this[_NgIf_9_9].ngIf = !dart.test(_ctx.hasHighlight);
      this[_NgIf_11_9].ngIf = core.bool._check(dart.dload(local_item, 'hasSecondaryLabel'));
      this[_NgIf_14_9].ngIf = core.bool._check(dart.dload(dart.dload(local_item, 'itemSuffixes'), 'isNotEmpty'));
      this[_NgIf_16_9].ngIf = core.bool._check(dart.dload(local_item, 'hasSubMenu'));
      this[_NgIf_19_9].ngIf = core.bool._check(dart.dload(local_item, 'hasSubMenu'));
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_9].detectChangesInNestedViews();
      this[_appEl_11].detectChangesInNestedViews();
      this[_appEl_14].detectChangesInNestedViews();
      this[_appEl_16].detectChangesInNestedViews();
      this[_appEl_19].detectChangesInNestedViews();
      let currVal_0 = local_i;
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "i", ""))) {
        dom_helpers.updateAttribute(this[_el_1], "data-group-index", (t0 = currVal_0, t0 == null ? null : dart.toString(t0)));
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = local_j;
      if (dart.test(check_binding.checkBinding(this[_expr_1$], currVal_1, "j", ""))) {
        dom_helpers.updateAttribute(this[_el_1], "data-item-index", (t0$ = currVal_1, t0$ == null ? null : dart.toString(t0$)));
        this[_expr_1$] = currVal_1;
      }
      let currVal_2 = _ctx.activeModel == null ? null : _ctx.activeModel.id(local_item);
      if (dart.test(check_binding.checkBinding(this[_expr_2$], currVal_2, "activeModel?.id(item)", ""))) {
        dom_helpers.updateAttribute(this[_el_1], "id", currVal_2);
        this[_expr_2$] = currVal_2;
      }
      let currVal_3 = _ctx.isSubMenuVisible(menu.MenuItem._check(local_item));
      if (dart.test(check_binding.checkBinding(this[_expr_3$], currVal_3, "isSubMenuVisible(item)", ""))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_1], "is-menu-parent", currVal_3);
        this[_expr_3$] = currVal_3;
      }
      let currVal_4 = dart.dload(local_item, 'ariaLabel');
      if (dart.test(check_binding.checkBinding(this[_expr_4$], currVal_4, "item.ariaLabel", ""))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-label", (t0$0 = currVal_4, t0$0 == null ? null : dart.toString(t0$0)));
        this[_expr_4$] = currVal_4;
      }
      let currVal_5 = !dart.dtest(dart.dload(local_item, 'enabled'));
      if (dart.test(check_binding.checkBinding(this[_expr_5$], currVal_5, "!item.enabled", ""))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-disabled", (t0$1 = currVal_5, t0$1 === null ? null : t0$1[$toString]()));
        this[_expr_5$] = currVal_5;
      }
      let currVal_6 = dart.dload(local_item, 'hasSubMenu');
      if (dart.test(check_binding.checkBinding(this[_expr_6$], currVal_6, "item.hasSubMenu", ""))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-haspopup", (t0$2 = currVal_6, t0$2 == null ? null : dart.toString(t0$2)));
        this[_expr_6$] = currVal_6;
      }
      let currVal_7 = dart.dtest(dart.dload(local_item, 'hasSubMenu')) ? _ctx.isSubMenuVisible(menu.MenuItem._check(local_item)) : null;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "item.hasSubMenu ? isSubMenuVisible(item) : null", ""))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-expanded", (t0$3 = currVal_7, t0$3 == null ? null : dart.toString(t0$3)));
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.itemAriaChecked(menu.MenuItem._check(local_item));
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "itemAriaChecked(item)", ""))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-checked", currVal_8);
        this[_expr_8] = currVal_8;
      }
      this[_ActiveItemDirective_1_8].detectHostChanges(this[_compView_1$], this[_el_1]);
      this[_compView_1$].detectHostChanges(firstCheck);
      this[_compView_1$].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_ActiveItemDirective_1_8].instance.ngAfterViewInit();
          this[_MaterialTooltipDirective_1_11].ngAfterViewInit();
          this[_PopupSourceDirective_1_14].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(menu_item_groups$46template.ViewMenuItemGroupsComponent0, this.parentView.parentView.parentView.parentView)[_viewQuery_FocusableActivateItem_0_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_appEl_9].destroyNestedViews();
      this[_appEl_11].destroyNestedViews();
      this[_appEl_14].destroyNestedViews();
      this[_appEl_16].destroyNestedViews();
      this[_appEl_19].destroyNestedViews();
      this[_compView_1$].destroyInternalState();
      this[_ActiveItemDirective_1_8].instance.ngOnDestroy();
      this[_AutoFocusDirective_1_9].ngOnDestroy();
      this[_MaterialTooltipDirective_1_11].ngOnDestroy();
      this[_MaterialSelectItemComponent_1_12].ngOnDestroy();
      this[_NgClass_1_13].ngOnDestroy();
      this[_PopupSourceDirective_1_14].ngOnDestroy();
    }
    [_handleEvent_0$]($36event) {
      let local_item = optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent5, this.parentView).locals[$_get]("$implicit");
      let local_group = optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent1, this.parentView.parentView.parentView).locals[$_get]("$implicit");
      let _ctx = this.ctx;
      _ctx.handleSelectItemTrigger(menu.MenuItem._check(local_item), menu.MenuItemGroup._check(local_group), html.UIEvent._check($36event));
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent6.new = function(parentView, parentIndex) {
    this[_compView_1$] = null;
    this[_appEl_1] = null;
    this[_ActiveItemDirective_1_8] = null;
    this[_AutoFocusDirective_1_9] = null;
    this[_FocusActivableItemDirective_1_10] = null;
    this[_MaterialTooltipDirective_1_11] = null;
    this[_MaterialSelectItemComponent_1_12] = null;
    this[_NgClass_1_13] = null;
    this[_PopupSourceDirective_1_14] = null;
    this[__TooltipController_1_19] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_9] = null;
    this[_NgIf_9_9] = null;
    this[_appEl_11] = null;
    this[_NgIf_11_9] = null;
    this[_appEl_14] = null;
    this[_NgIf_14_9] = null;
    this[_appEl_16] = null;
    this[_NgIf_16_9] = null;
    this[_appEl_19] = null;
    this[_NgIf_19_9] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    this[_expr_3$] = null;
    this[_expr_4$] = null;
    this[_expr_5$] = null;
    this[_expr_6$] = null;
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
    this[_expr_20] = null;
    this[_expr_21] = null;
    this[_expr_23] = null;
    this[_el_1] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent6.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent6.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent6);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent6, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent6.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handleEvent_0$]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent6, () => ({
    __proto__: dart.getGetters(menu_item_groups$46template._ViewMenuItemGroupsComponent6.__proto__),
    [_TooltipController_1_19]: dart.dynamic
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent6, "package:angular_components/material_menu/menu_item_groups.template.dart");
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent6, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent6.__proto__),
    [_compView_1$]: dart.fieldType(material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_appEl_1]: dart.fieldType(view_container.ViewContainer),
    [_ActiveItemDirective_1_8]: dart.fieldType(active_item_directive$46template.ActiveItemDirectiveNgCd),
    [_AutoFocusDirective_1_9]: dart.fieldType(focus.AutoFocusDirective),
    [_FocusActivableItemDirective_1_10]: dart.fieldType(focus_activable_item.FocusActivableItemDirective),
    [_MaterialTooltipDirective_1_11]: dart.fieldType(tooltip.MaterialTooltipDirective),
    [_MaterialSelectItemComponent_1_12]: dart.fieldType(material_select_item.MaterialSelectItemComponent),
    [_NgClass_1_13]: dart.fieldType(ng_class.NgClass),
    [_PopupSourceDirective_1_14]: dart.fieldType(popup_source_directive.PopupSourceDirective),
    [__TooltipController_1_19]: dart.fieldType(dart.dynamic),
    [_appEl_3]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_7]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_9]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_9_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_11]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_11_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_14]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_14_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_16]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_16_9]: dart.fieldType(ng_if.NgIf),
    [_appEl_19]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_19_9]: dart.fieldType(ng_if.NgIf),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_expr_2$]: dart.fieldType(dart.dynamic),
    [_expr_3$]: dart.fieldType(core.bool),
    [_expr_4$]: dart.fieldType(dart.dynamic),
    [_expr_5$]: dart.fieldType(dart.dynamic),
    [_expr_6$]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(core.bool),
    [_expr_10]: dart.fieldType(core.bool),
    [_expr_11]: dart.fieldType(core.String),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(core.String),
    [_expr_14]: dart.fieldType(core.bool),
    [_expr_15]: dart.fieldType(core.String),
    [_expr_16]: dart.fieldType(core.bool),
    [_expr_17]: dart.fieldType(dart.dynamic),
    [_expr_20]: dart.fieldType(core.bool),
    [_expr_21]: dart.fieldType(dart.dynamic),
    [_expr_23]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(html.Element)
  }));
  menu_item_groups$46template._ViewMenuItemGroupsComponent7 = class _ViewMenuItemGroupsComponent7 extends embedded_view.EmbeddedView$(menu_item_groups.MenuItemGroupsComponent) {
    build() {
      this[_compView_0$] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      let _el_0 = this[_compView_0$].rootElement;
      this.updateChildClassNonHtml(_el_0, "material-list-item-primary");
      this.addShimC(_el_0);
      this[_MaterialIconComponent_0_5] = new material_icon.MaterialIconComponent.new(_el_0);
      this[_compView_0$].create(this[_MaterialIconComponent_0_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      let local_item = optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent5, this.parentView.parentView).locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = dart.dload(local_item, 'icon');
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "item.icon", ""))) {
        this[_MaterialIconComponent_0_5].icon = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent7.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialIconComponent_0_5] = null;
    this[_expr_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent7.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent7.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent7);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent7, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent7.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent7, "package:angular_components/material_menu/menu_item_groups.template.dart");
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent7, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent7.__proto__),
    [_compView_0$]: dart.fieldType(material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5]: dart.fieldType(material_icon.MaterialIconComponent),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  const _compView_2 = dart.privateName(menu_item_groups$46template, "_compView_2");
  const _HighlightedTextComponent_2_5 = dart.privateName(menu_item_groups$46template, "_HighlightedTextComponent_2_5");
  const _appEl_5 = dart.privateName(menu_item_groups$46template, "_appEl_5");
  const _NgIf_5_9 = dart.privateName(menu_item_groups$46template, "_NgIf_5_9");
  let C20;
  menu_item_groups$46template._ViewMenuItemGroupsComponent8 = class _ViewMenuItemGroupsComponent8 extends embedded_view.EmbeddedView$(menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(html.HtmlElement._check(_el_0), "menu-item-label");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "\n              ");
      this[_compView_2] = new highlighted_text$46template.ViewHighlightedTextComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootElement;
      _el_0[$append](_el_2);
      this.addShimC(_el_2);
      this[_HighlightedTextComponent_2_5] = new highlighted_text.HighlightedTextComponent.new();
      this[_compView_2].create(this[_HighlightedTextComponent_2_5]);
      let _text_4 = dom_helpers.appendText(_el_0, "\n              ");
      let _anchor_5 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_5] = new view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C20 || CT.C20);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _text_6 = dom_helpers.appendText(_el_0, "\n            ");
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_item = optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent5, this.parentView.parentView).locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = _ctx.highlighted(core.String._check(dart.dload(local_item, 'uiDisplayName')));
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "highlighted(item.uiDisplayName)", ""))) {
        this[_HighlightedTextComponent_2_5].segments = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_NgIf_5_9].ngIf = dart.dload(local_item, 'labelAnnotation') != null && dart.dtest(dart.dload(dart.dload(local_item, 'labelAnnotation'), 'isNotEmpty'));
      this[_appEl_5].detectChangesInNestedViews();
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      this[_appEl_5].destroyNestedViews();
      this[_compView_2].destroyInternalState();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent8.new = function(parentView, parentIndex) {
    this[_compView_2] = null;
    this[_HighlightedTextComponent_2_5] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_expr_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent8.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent8.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent8);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent8, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent8.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent8, "package:angular_components/material_menu/menu_item_groups.template.dart");
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent8, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent8.__proto__),
    [_compView_2]: dart.fieldType(highlighted_text$46template.ViewHighlightedTextComponent0),
    [_HighlightedTextComponent_2_5]: dart.fieldType(highlighted_text.HighlightedTextComponent),
    [_appEl_5]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(ng_if.NgIf),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  const _textBinding_2 = dart.privateName(menu_item_groups$46template, "_textBinding_2");
  menu_item_groups$46template._ViewMenuItemGroupsComponent9 = class _ViewMenuItemGroupsComponent9 extends embedded_view.EmbeddedView$(menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("sup");
      this.updateChildClass(html.HtmlElement._check(_el_0), "label-annotation");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "\n              ");
      _el_0[$append](this[_textBinding_2].element);
      let _text_3 = dom_helpers.appendText(_el_0, "\n            ");
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_item = optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent5, this.parentView.parentView.parentView).locals[$_get]("$implicit");
      this[_textBinding_2].updateText(core.String._check(interpolate.interpolate0(dart.dload(local_item, 'labelAnnotation'))));
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent9.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    menu_item_groups$46template._ViewMenuItemGroupsComponent9.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent9.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent9);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent9, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent9.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent9, "package:angular_components/material_menu/menu_item_groups.template.dart");
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent9, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent9.__proto__),
    [_textBinding_2]: dart.finalFieldType(text_binding.TextBinding)
  }));
  let C21;
  menu_item_groups$46template._ViewMenuItemGroupsComponent10 = class _ViewMenuItemGroupsComponent10 extends embedded_view.EmbeddedView$(menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(html.HtmlElement._check(_el_0), "menu-item-label");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "\n              ");
      _el_0[$append](this[_textBinding_2].element);
      let _text_3 = dom_helpers.appendText(_el_0, "\n              ");
      let _anchor_4 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_4] = new view_container.ViewContainer.new(4, 0, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C21 || CT.C21);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _text_5 = dom_helpers.appendText(_el_0, "\n            ");
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_item = optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent5, this.parentView.parentView).locals[$_get]("$implicit");
      this[_NgIf_4_9].ngIf = dart.dload(local_item, 'labelAnnotation') != null && dart.dtest(dart.dload(dart.dload(local_item, 'labelAnnotation'), 'isNotEmpty'));
      this[_appEl_4].detectChangesInNestedViews();
      this[_textBinding_2].updateText(core.String._check(interpolate.interpolate0(dart.dload(local_item, 'uiDisplayName'))));
    }
    destroyInternal() {
      this[_appEl_4].destroyNestedViews();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent10.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent10.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent10.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent10);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent10, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent10.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent10, "package:angular_components/material_menu/menu_item_groups.template.dart");
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent10, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent10.__proto__),
    [_textBinding_2]: dart.finalFieldType(text_binding.TextBinding),
    [_appEl_4]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(ng_if.NgIf)
  }));
  menu_item_groups$46template._ViewMenuItemGroupsComponent11 = class _ViewMenuItemGroupsComponent11 extends embedded_view.EmbeddedView$(menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("sup");
      this.updateChildClass(html.HtmlElement._check(_el_0), "label-annotation");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "\n              ");
      _el_0[$append](this[_textBinding_2].element);
      let _text_3 = dom_helpers.appendText(_el_0, "\n              ");
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_item = optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent5, this.parentView.parentView.parentView).locals[$_get]("$implicit");
      this[_textBinding_2].updateText(core.String._check(interpolate.interpolate0(dart.dload(local_item, 'labelAnnotation'))));
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent11.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    menu_item_groups$46template._ViewMenuItemGroupsComponent11.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent11.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent11);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent11, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent11.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent11, "package:angular_components/material_menu/menu_item_groups.template.dart");
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent11, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent11.__proto__),
    [_textBinding_2]: dart.finalFieldType(text_binding.TextBinding)
  }));
  menu_item_groups$46template._ViewMenuItemGroupsComponent12 = class _ViewMenuItemGroupsComponent12 extends embedded_view.EmbeddedView$(menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(html.HtmlElement._check(_el_0), "menu-item-secondary-label");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "\n              ");
      _el_0[$append](this[_textBinding_2].element);
      let _text_3 = dom_helpers.appendText(_el_0, "\n            ");
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_item = optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent5, this.parentView.parentView).locals[$_get]("$implicit");
      this[_textBinding_2].updateText(core.String._check(interpolate.interpolate0(dart.dload(local_item, 'secondaryLabel'))));
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent12.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    menu_item_groups$46template._ViewMenuItemGroupsComponent12.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent12.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent12);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent12, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent12.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent12, "package:angular_components/material_menu/menu_item_groups.template.dart");
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent12, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent12.__proto__),
    [_textBinding_2]: dart.finalFieldType(text_binding.TextBinding)
  }));
  const _MenuItemAffixListComponent_0_5 = dart.privateName(menu_item_groups$46template, "_MenuItemAffixListComponent_0_5");
  menu_item_groups$46template._ViewMenuItemGroupsComponent13 = class _ViewMenuItemGroupsComponent13 extends embedded_view.EmbeddedView$(menu_item_groups.MenuItemGroupsComponent) {
    build() {
      this[_compView_0$] = new menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.new(this, 0);
      let _el_0 = this[_compView_0$].rootElement;
      this.updateChildClassNonHtml(_el_0, "suffix-list");
      this.addShimC(_el_0);
      this[_MenuItemAffixListComponent_0_5] = new menu_item_affix_list.MenuItemAffixListComponent.new(this[_compView_0$]);
      this[_compView_0$].create(this[_MenuItemAffixListComponent_0_5]);
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(has_disabled.HasDisabled) && dart.notNull(nodeIndex) <= 1) {
        return this[_MenuItemAffixListComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let local_item = optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent5, this.parentView.parentView).locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = !dart.dtest(dart.dload(local_item, 'enabled'));
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "!item.enabled", ""))) {
        this[_MenuItemAffixListComponent_0_5].disabled = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = dart.dload(local_item, 'itemSuffixes');
      if (dart.test(check_binding.checkBinding(this[_expr_1$], currVal_1, "item.itemSuffixes", ""))) {
        this[_MenuItemAffixListComponent_0_5].items = ObservableListOfMenuItemAffix()._check(currVal_1);
        changed = true;
        this[_expr_1$] = currVal_1;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
      this[_MenuItemAffixListComponent_0_5].ngOnDestroy();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent13.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MenuItemAffixListComponent_0_5] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent13.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent13.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent13);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent13, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent13.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent13, "package:angular_components/material_menu/menu_item_groups.template.dart");
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent13, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent13.__proto__),
    [_compView_0$]: dart.fieldType(menu_item_affix_list$46template.ViewMenuItemAffixListComponent0),
    [_MenuItemAffixListComponent_0_5]: dart.fieldType(menu_item_affix_list.MenuItemAffixListComponent),
    [_expr_0$]: dart.fieldType(core.bool),
    [_expr_1$]: dart.fieldType(dart.dynamic)
  }));
  menu_item_groups$46template._ViewMenuItemGroupsComponent14 = class _ViewMenuItemGroupsComponent14 extends embedded_view.EmbeddedView$(menu_item_groups.MenuItemGroupsComponent) {
    build() {
      this[_compView_0$] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      let _el_0 = this[_compView_0$].rootElement;
      this.updateChildClassNonHtml(_el_0, "material-list-item-secondary submenu-icon");
      dom_helpers.setAttribute(_el_0, "icon", "arrow_drop_down");
      this.addShimC(_el_0);
      this[_MaterialIconComponent_0_5] = new material_icon.MaterialIconComponent.new(_el_0);
      this[_compView_0$].create(this[_MaterialIconComponent_0_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialIconComponent_0_5].icon = "arrow_drop_down";
        changed = true;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent14.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialIconComponent_0_5] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent14.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent14.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent14);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent14, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent14.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent14, "package:angular_components/material_menu/menu_item_groups.template.dart");
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent14, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent14.__proto__),
    [_compView_0$]: dart.fieldType(material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5]: dart.fieldType(material_icon.MaterialIconComponent)
  }));
  const _query_AutoFocusDirective_2_0_isDirty = dart.privateName(menu_item_groups$46template, "_query_AutoFocusDirective_2_0_isDirty");
  const _appEl_0$ = dart.privateName(menu_item_groups$46template, "_appEl_0");
  const _MaterialPopupComponent_0_8$ = dart.privateName(menu_item_groups$46template, "_MaterialPopupComponent_0_8");
  const __PopupRef_0_10$ = dart.privateName(menu_item_groups$46template, "__PopupRef_0_10");
  const __PopupHierarchy_0_12$ = dart.privateName(menu_item_groups$46template, "__PopupHierarchy_0_12");
  const _FocusTrapComponent_2_5 = dart.privateName(menu_item_groups$46template, "_FocusTrapComponent_2_5");
  const _DeferredContentDirective_4_9 = dart.privateName(menu_item_groups$46template, "_DeferredContentDirective_4_9");
  const _PopupRef_0_10$ = dart.privateName(menu_item_groups$46template, "_PopupRef_0_10");
  const _PopupHierarchy_0_12$ = dart.privateName(menu_item_groups$46template, "_PopupHierarchy_0_12");
  let C22;
  const _AutoFocusDirective_2_5 = dart.privateName(menu_item_groups$46template, "_AutoFocusDirective_2_5");
  menu_item_groups$46template._ViewMenuItemGroupsComponent15 = class _ViewMenuItemGroupsComponent15 extends embedded_view.EmbeddedView$(menu_item_groups.MenuItemGroupsComponent) {
    get [_PopupRef_0_10$]() {
      if (this[__PopupRef_0_10$] == null) {
        this[__PopupRef_0_10$] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8$]);
      }
      return this[__PopupRef_0_10$];
    }
    get [_PopupHierarchy_0_12$]() {
      if (this[__PopupHierarchy_0_12$] == null) {
        this[__PopupHierarchy_0_12$] = material_popup.getHierarchy(this[_MaterialPopupComponent_0_8$]);
      }
      return this[__PopupHierarchy_0_12$];
    }
    build() {
      this[_compView_0$] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootElement;
      dom_helpers.setAttribute(this[_el_0$], "enforceSpaceConstraints", "");
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_appEl_0$] = new view_container.ViewContainer.new(0, null, this, this[_el_0$]);
      this[_MaterialPopupComponent_0_8$] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_popup.MaterialPopupComponent, dart.wrapType(material_popup.MaterialPopupComponent), dart.fn(() => new material_popup.MaterialPopupComponent.new(popup_hierarchy.PopupHierarchy._check(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(popup_hierarchy.PopupHierarchy), this.parentView.parentView.parentView.parentView.parentIndex)), material_popup.MaterialPopupComponent._check(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(material_popup.MaterialPopupComponent), this.parentView.parentView.parentView.parentView.parentIndex)), null, ng_zone.NgZone._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentView.parentView.parentView.parentView.parentIndex)), overlay_service.OverlayService._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(overlay_service.OverlayService), this.parentView.parentView.parentView.parentView.parentIndex)), dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentView.parentView.parentView.parentIndex)), zindexer.ZIndexer._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(zindexer.ZIndexer), this.parentView.parentView.parentView.parentView.parentIndex)), ListOfRelativePosition()._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(C0 || CT.C0, this.parentView.parentView.parentView.parentView.parentIndex)), core.bool._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(C1 || CT.C1, this.parentView.parentView.parentView.parentView.parentIndex)), box.Box._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(C2 || CT.C2, this.parentView.parentView.parentView.parentView.parentIndex)), popup_size_provider.PopupSizeProvider._check(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(popup_size_provider.PopupSizeProvider), this.parentView.parentView.parentView.parentView.parentIndex)), this[_compView_0$], this[_appEl_0$], new element_ref.ElementRef.new(this[_el_0$])), VoidToMaterialPopupComponent())) : new material_popup.MaterialPopupComponent.new(popup_hierarchy.PopupHierarchy._check(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(popup_hierarchy.PopupHierarchy), this.parentView.parentView.parentView.parentView.parentIndex)), material_popup.MaterialPopupComponent._check(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(material_popup.MaterialPopupComponent), this.parentView.parentView.parentView.parentView.parentIndex)), null, ng_zone.NgZone._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentView.parentView.parentView.parentView.parentIndex)), overlay_service.OverlayService._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(overlay_service.OverlayService), this.parentView.parentView.parentView.parentView.parentIndex)), dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentView.parentView.parentView.parentIndex)), zindexer.ZIndexer._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(zindexer.ZIndexer), this.parentView.parentView.parentView.parentView.parentIndex)), ListOfRelativePosition()._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(C0 || CT.C0, this.parentView.parentView.parentView.parentView.parentIndex)), core.bool._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(C1 || CT.C1, this.parentView.parentView.parentView.parentView.parentIndex)), box.Box._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(C2 || CT.C2, this.parentView.parentView.parentView.parentView.parentIndex)), popup_size_provider.PopupSizeProvider._check(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(popup_size_provider.PopupSizeProvider), this.parentView.parentView.parentView.parentView.parentIndex)), this[_compView_0$], this[_appEl_0$], new element_ref.ElementRef.new(this[_el_0$]));
      let _text_1 = dom_helpers.createText("\n          ");
      this[_compView_2] = new focus_trap$46template.ViewFocusTrapComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootElement;
      this.addShimC(_el_2);
      this[_FocusTrapComponent_2_5] = new focus_trap.FocusTrapComponent.new();
      let _text_3 = dom_helpers.createText("\n            ");
      let _anchor_4 = dom_helpers.createAnchor();
      this[_appEl_4] = new view_container.ViewContainer.new(4, 2, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C22 || CT.C22);
      this[_DeferredContentDirective_4_9] = new deferred_content.DeferredContentDirective.new(this[_appEl_4], _TemplateRef_4_8, this[_MaterialPopupComponent_0_8$], this);
      let _text_5 = dom_helpers.createText("\n          ");
      this[_compView_2].createAndProject(this[_FocusTrapComponent_2_5], JSArrayOfObject().of([JSArrayOfObject().of([_text_3, this[_appEl_4], _text_5])]));
      let _text_6 = dom_helpers.createText("\n        ");
      this[_compView_0$].createAndProject(this[_MaterialPopupComponent_0_8$], JSArrayOfObject().of([C4 || CT.C4, JSArrayOfNode().of([_text_1, _el_2, _text_6]), C4 || CT.C4]));
      let subscription_0 = this[_MaterialPopupComponent_0_8$].onVisible.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handleEvent_0$)));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([this[_appEl_0$]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 6) {
        if (token === dart.wrapType(material_popup.MaterialPopupComponent) || token === dart.wrapType(deferred_content_aware.DeferredContentAware) || token === dart.wrapType(material_dropdown_base.DropdownHandle)) {
          return this[_MaterialPopupComponent_0_8$];
        }
        if (token === dart.wrapType(popup_ref.PopupRef)) {
          return this[_PopupRef_0_10$];
        }
        if (token === dart.wrapType(popup_hierarchy.PopupHierarchy)) {
          return this[_PopupHierarchy_0_12$];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_subMenuSource = optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent6, this.parentView)[_PopupSourceDirective_1_14];
      let local_item = optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent5, this.parentView.parentView).locals[$_get]("$implicit");
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialPopupComponent_0_8$].autoDismiss = false;
        changed = true;
        this[_MaterialPopupComponent_0_8$].enforceSpaceConstraints = true;
        changed = true;
      }
      let currVal_3 = _ctx.preferredSubMenuPositions;
      if (dart.test(check_binding.checkBinding(this[_expr_3$], currVal_3, "preferredSubMenuPositions", ""))) {
        this[_MaterialPopupComponent_0_8$].preferredPositions = currVal_3;
        changed = true;
        this[_expr_3$] = currVal_3;
      }
      let currVal_4 = local_subMenuSource;
      if (dart.test(check_binding.checkBinding(this[_expr_4$], currVal_4, "subMenuSource", ""))) {
        this[_MaterialPopupComponent_0_8$].source = currVal_4;
        changed = true;
        this[_expr_4$] = currVal_4;
      }
      let currVal_5 = _ctx.isSubMenuVisible(menu.MenuItem._check(local_item));
      if (dart.test(check_binding.checkBinding(this[_expr_5$], currVal_5, "isSubMenuVisible(item)", ""))) {
        this[_MaterialPopupComponent_0_8$].visible = currVal_5;
        changed = true;
        this[_expr_5$] = currVal_5;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        this[_DeferredContentDirective_4_9].preserveDimensions = true;
      }
      this[_appEl_0$].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(this[_query_AutoFocusDirective_2_0_isDirty])) {
          this[_FocusTrapComponent_2_5].autoFocus = queries.firstOrNull(focus.AutoFocusDirective, this[_appEl_4].mapNestedViews(focus.AutoFocusDirective, menu_item_groups$46template._ViewMenuItemGroupsComponent16, dart.fn(nestedView => JSArrayOfAutoFocusDirective().of([nestedView[_AutoFocusDirective_2_5]]), _ViewMenuItemGroupsComponent16ToListOfAutoFocusDirective())));
          this[_query_AutoFocusDirective_2_0_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.popupClass;
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "popupClass", ""))) {
        this[_compView_0$].updateChildClassNonHtml(this[_el_0$], currVal_0);
        this[_expr_0$] = currVal_0;
      }
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
      this[_compView_2].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialPopupComponent_0_8$].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_0$].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
      this[_compView_0$].destroyInternalState();
      this[_compView_2].destroyInternalState();
      this[_DeferredContentDirective_4_9].ngOnDestroy();
      this[_FocusTrapComponent_2_5].ngOnDestroy();
      this[_MaterialPopupComponent_0_8$].ngOnDestroy();
    }
    [_handleEvent_0$]($36event) {
      let local_item = optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent5, this.parentView.parentView).locals[$_get]("$implicit");
      let _ctx = this.ctx;
      _ctx.onSubMenuVisibilityChanged(menu.MenuItem._check(local_item), core.bool._check($36event));
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent15.new = function(parentView, parentIndex) {
    this[_query_AutoFocusDirective_2_0_isDirty] = true;
    this[_compView_0$] = null;
    this[_appEl_0$] = null;
    this[_MaterialPopupComponent_0_8$] = null;
    this[__PopupRef_0_10$] = null;
    this[__PopupHierarchy_0_12$] = null;
    this[_compView_2] = null;
    this[_FocusTrapComponent_2_5] = null;
    this[_appEl_4] = null;
    this[_DeferredContentDirective_4_9] = null;
    this[_expr_0$] = null;
    this[_expr_3$] = null;
    this[_expr_4$] = null;
    this[_expr_5$] = null;
    this[_el_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent15.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent15.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent15);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent15, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent15.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handleEvent_0$]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent15, () => ({
    __proto__: dart.getGetters(menu_item_groups$46template._ViewMenuItemGroupsComponent15.__proto__),
    [_PopupRef_0_10$]: dart.dynamic,
    [_PopupHierarchy_0_12$]: dart.dynamic
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent15, "package:angular_components/material_menu/menu_item_groups.template.dart");
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent15, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent15.__proto__),
    [_query_AutoFocusDirective_2_0_isDirty]: dart.fieldType(core.bool),
    [_compView_0$]: dart.fieldType(material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_0$]: dart.fieldType(view_container.ViewContainer),
    [_MaterialPopupComponent_0_8$]: dart.fieldType(material_popup.MaterialPopupComponent),
    [__PopupRef_0_10$]: dart.fieldType(dart.dynamic),
    [__PopupHierarchy_0_12$]: dart.fieldType(dart.dynamic),
    [_compView_2]: dart.fieldType(focus_trap$46template.ViewFocusTrapComponent0),
    [_FocusTrapComponent_2_5]: dart.fieldType(focus_trap.FocusTrapComponent),
    [_appEl_4]: dart.fieldType(view_container.ViewContainer),
    [_DeferredContentDirective_4_9]: dart.fieldType(deferred_content.DeferredContentDirective),
    [_expr_0$]: dart.fieldType(core.String),
    [_expr_3$]: dart.fieldType(dart.dynamic),
    [_expr_4$]: dart.fieldType(dart.dynamic),
    [_expr_5$]: dart.fieldType(core.bool),
    [_el_0$]: dart.fieldType(html.Element)
  }));
  const _MaterialListComponent_0_5$ = dart.privateName(menu_item_groups$46template, "_MaterialListComponent_0_5");
  const _MenuItemGroupsComponent_2_6 = dart.privateName(menu_item_groups$46template, "_MenuItemGroupsComponent_2_6");
  menu_item_groups$46template._ViewMenuItemGroupsComponent16 = class _ViewMenuItemGroupsComponent16 extends embedded_view.EmbeddedView$(menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0$] = new material_list$46template.ViewMaterialListComponent0.new(this, 0);
      let _el_0 = this[_compView_0$].rootElement;
      this.updateChildClassNonHtml(_el_0, "item-group-list");
      dom_helpers.setAttribute(_el_0, "role", "none");
      this.addShimC(_el_0);
      this[_MaterialListComponent_0_5$] = new material_list.MaterialListComponent.new();
      let _text_1 = dom_helpers.createText("\n              ");
      this[_compView_2] = new menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootElement;
      dom_helpers.setAttribute(_el_2, "autoFocus", "");
      this.addShimC(_el_2);
      this[_AutoFocusDirective_2_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(focus.AutoFocusDirective, dart.wrapType(focus.AutoFocusDirective), dart.fn(() => new focus.AutoFocusDirective.new(_el_2, dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentView.parentView.parentView.parentView.parentIndex)), null, modal.ModalComponent._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(modal.ModalComponent), this.parentView.parentView.parentView.parentView.parentView.parentIndex)), popup_ref.PopupRef._check(optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent15, this.parentView)[_PopupRef_0_10$])), VoidToAutoFocusDirective())) : new focus.AutoFocusDirective.new(_el_2, dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentView.parentView.parentView.parentView.parentIndex)), null, modal.ModalComponent._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(modal.ModalComponent), this.parentView.parentView.parentView.parentView.parentView.parentIndex)), popup_ref.PopupRef._check(optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent15, this.parentView)[_PopupRef_0_10$]));
      this[_MenuItemGroupsComponent_2_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(menu_item_groups.MenuItemGroupsComponent, dart.wrapType(menu_item_groups.MenuItemGroupsComponent), dart.fn(() => menu_item_groups.MenuItemGroupsComponent.new(menu_root.MenuRoot._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(menu_root.MenuRoot), this.parentView.parentView.parentView.parentView.parentView.parentIndex)), this[_compView_2], optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent15, this.parentView)[_MaterialPopupComponent_0_8$], id_generator.IdGenerator._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(id_generator.IdGenerator), this.parentView.parentView.parentView.parentView.parentView.parentIndex))), VoidToMenuItemGroupsComponent())) : menu_item_groups.MenuItemGroupsComponent.new(menu_root.MenuRoot._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(menu_root.MenuRoot), this.parentView.parentView.parentView.parentView.parentView.parentIndex)), this[_compView_2], optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent15, this.parentView)[_MaterialPopupComponent_0_8$], id_generator.IdGenerator._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(id_generator.IdGenerator), this.parentView.parentView.parentView.parentView.parentView.parentIndex)));
      this[_compView_2].create(this[_MenuItemGroupsComponent_2_6]);
      let _text_4 = dom_helpers.createText("\n            ");
      this[_compView_0$].createAndProject(this[_MaterialListComponent_0_5$], JSArrayOfObject().of([JSArrayOfNode().of([_text_1, _el_2, _text_4])]));
      let subscription_0 = this[_MenuItemGroupsComponent_2_6].selected.listen(this.eventHandler1(menu.MenuItem, menu.MenuItem, dart.bind(_ctx, 'onSubMenuItemSelected')));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_item = optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent5, this.parentView.parentView.parentView).locals[$_get]("$implicit");
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialListComponent_0_5$].role = "none";
        changed = true;
      }
      let currVal_1 = dart.dload(dart.dload(local_item, 'subMenu'), 'width');
      if (dart.test(check_binding.checkBinding(this[_expr_1$], currVal_1, "item.subMenu.width", ""))) {
        this[_MaterialListComponent_0_5$].width = currVal_1;
        changed = true;
        this[_expr_1$] = currVal_1;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        this[_AutoFocusDirective_2_5].autoFocus = true;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_AutoFocusDirective_2_5].ngOnInit();
      }
      changed = false;
      let currVal_3 = _ctx.isKeyboardOpenedSubmenu;
      if (dart.test(check_binding.checkBinding(this[_expr_3$], currVal_3, "isKeyboardOpenedSubmenu", ""))) {
        this[_MenuItemGroupsComponent_2_6].activateFirstItemOnInit = currVal_3;
        changed = true;
        this[_expr_3$] = currVal_3;
      }
      let currVal_4 = _ctx.popupClass;
      if (dart.test(check_binding.checkBinding(this[_expr_4$], currVal_4, "popupClass", ""))) {
        this[_MenuItemGroupsComponent_2_6].popupClass = currVal_4;
        changed = true;
        this[_expr_4$] = currVal_4;
      }
      let currVal_5 = dart.dload(local_item, 'subMenu');
      if (dart.test(check_binding.checkBinding(this[_expr_5$], currVal_5, "item.subMenu", ""))) {
        this[_MenuItemGroupsComponent_2_6].menu = menu.MenuModel._check(currVal_5);
        changed = true;
        this[_expr_5$] = currVal_5;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MenuItemGroupsComponent_2_6].ngOnInit();
      }
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_2].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
      this[_compView_2].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MenuItemGroupsComponent_2_6].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(menu_item_groups$46template._ViewMenuItemGroupsComponent15, this.parentView)[_query_AutoFocusDirective_2_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
      this[_compView_2].destroyInternalState();
      this[_AutoFocusDirective_2_5].ngOnDestroy();
      this[_MenuItemGroupsComponent_2_6].ngOnDestroy();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent16.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialListComponent_0_5$] = null;
    this[_compView_2] = null;
    this[_AutoFocusDirective_2_5] = null;
    this[_MenuItemGroupsComponent_2_6] = null;
    this[_expr_1$] = null;
    this[_expr_3$] = null;
    this[_expr_4$] = null;
    this[_expr_5$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent16.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent16.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent16);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent16, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent16.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent16, "package:angular_components/material_menu/menu_item_groups.template.dart");
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent16, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent16.__proto__),
    [_compView_0$]: dart.fieldType(material_list$46template.ViewMaterialListComponent0),
    [_MaterialListComponent_0_5$]: dart.fieldType(material_list.MaterialListComponent),
    [_compView_2]: dart.fieldType(menu_item_groups$46template.ViewMenuItemGroupsComponent0),
    [_AutoFocusDirective_2_5]: dart.fieldType(focus.AutoFocusDirective),
    [_MenuItemGroupsComponent_2_6]: dart.fieldType(menu_item_groups.MenuItemGroupsComponent),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_expr_3$]: dart.fieldType(core.bool),
    [_expr_4$]: dart.fieldType(core.String),
    [_expr_5$]: dart.fieldType(dart.dynamic)
  }));
  menu_item_groups$46template._ViewMenuItemGroupsComponentHost0 = class _ViewMenuItemGroupsComponentHost0 extends host_view.HostView$(menu_item_groups.MenuItemGroupsComponent) {
    build() {
      this.componentView = new menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(menu_item_groups.MenuItemGroupsComponent, dart.wrapType(menu_item_groups.MenuItemGroupsComponent), dart.fn(() => menu_item_groups.MenuItemGroupsComponent.new(menu_root.MenuRoot._check(this.injectorGet(dart.wrapType(menu_root.MenuRoot), this.parentIndex)), this.componentView, material_dropdown_base.DropdownHandle._check(this.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentIndex)), id_generator.IdGenerator._check(this.injectorGetOptional(dart.wrapType(id_generator.IdGenerator), this.parentIndex))), VoidToMenuItemGroupsComponent())) : menu_item_groups.MenuItemGroupsComponent.new(menu_root.MenuRoot._check(this.injectorGet(dart.wrapType(menu_root.MenuRoot), this.parentIndex)), this.componentView, material_dropdown_base.DropdownHandle._check(this.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentIndex)), id_generator.IdGenerator._check(this.injectorGetOptional(dart.wrapType(id_generator.IdGenerator), this.parentIndex)));
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
  (menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.new = function(injector) {
    menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponentHost0);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponentHost0, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponentHost0, "package:angular_components/material_menu/menu_item_groups.template.dart");
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent1 = function viewFactory_MenuItemGroupsComponent1(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent1.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent2 = function viewFactory_MenuItemGroupsComponent2(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent2.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent3 = function viewFactory_MenuItemGroupsComponent3(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent3.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent4 = function viewFactory_MenuItemGroupsComponent4(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent4.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent5 = function viewFactory_MenuItemGroupsComponent5(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent5.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent6 = function viewFactory_MenuItemGroupsComponent6(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent6.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent7 = function viewFactory_MenuItemGroupsComponent7(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent7.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent8 = function viewFactory_MenuItemGroupsComponent8(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent8.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent9 = function viewFactory_MenuItemGroupsComponent9(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent9.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent10 = function viewFactory_MenuItemGroupsComponent10(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent10.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent11 = function viewFactory_MenuItemGroupsComponent11(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent11.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent12 = function viewFactory_MenuItemGroupsComponent12(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent12.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent13 = function viewFactory_MenuItemGroupsComponent13(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent13.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent14 = function viewFactory_MenuItemGroupsComponent14(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent14.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent15 = function viewFactory_MenuItemGroupsComponent15(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent15.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent16 = function viewFactory_MenuItemGroupsComponent16(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent16.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponentHost0 = function viewFactory_MenuItemGroupsComponentHost0(injector) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.new(injector);
  };
  menu_item_groups$46template.initReflector = function initReflector$() {
    if (dart.test(menu_item_groups$46template._visited)) {
      return;
    }
    menu_item_groups$46template._visited = true;
    reflector.registerComponent(dart.wrapType(menu_item_groups.MenuItemGroupsComponent), menu_item_groups$46template.MenuItemGroupsComponentNgFactory);
    angular$46template.initReflector();
    meta$46template.initReflector();
    button_decorator$46template.initReflector();
    deferred_content$46template.initReflector();
    focus$46template.initReflector();
    focus_activable_item$46template.initReflector();
    focus_trap$46template.initReflector();
    highlighted_text$46template.initReflector();
    alignment$46template.initReflector();
    material_icon$46template.initReflector();
    material_list$46template.initReflector();
    material_menu$46template.initReflector();
    menu_item_affix_list$46template.initReflector();
    menu_root$46template.initReflector();
    material_popup$46template.initReflector();
    material_select_item$46template.initReflector();
    material_tooltip$46template.initReflector();
    material_dropdown_base$46template.initReflector();
    active_item$46template.initReflector();
    active_item_directive$46template.initReflector();
    delayed_action$46template.initReflector();
    menu$46template.initReflector();
    selectable_menu$46template.initReflector();
    select$46template.initReflector();
    selection_model$46template.initReflector();
    highlighted_text_model$46template.initReflector();
    disposer$46template.initReflector();
    id_generator$46template.initReflector();
  };
  dart.copyProperties(menu_item_groups$46template, {
    get MenuItemGroupsComponentNgFactory() {
      return menu_item_groups$46template._MenuItemGroupsComponentNgFactory;
    }
  });
  let C24;
  let C23;
  dart.defineLazy(menu_item_groups$46template, {
    /*menu_item_groups$46template.styles$MenuItemGroupsComponent*/get styles$MenuItemGroupsComponent() {
      return [menu_item_groups$46scss$46css$46shim.styles];
    },
    /*menu_item_groups$46template._MenuItemGroupsComponentNgFactory*/get _MenuItemGroupsComponentNgFactory() {
      return C23 || CT.C23;
    },
    /*menu_item_groups$46template.styles$MenuItemGroupsComponentHost*/get styles$MenuItemGroupsComponentHost() {
      return C4 || CT.C4;
    },
    /*menu_item_groups$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  const _viewQuery_MenuPopupComponent_1_isDirty = dart.privateName(material_menu$46template, "_viewQuery_MenuPopupComponent_1_isDirty");
  const _compView_0$0 = dart.privateName(material_menu$46template, "_compView_0");
  const _appEl_0$0 = dart.privateName(material_menu$46template, "_appEl_0");
  const _AcxDarkTheme_0_8 = dart.privateName(material_menu$46template, "_AcxDarkTheme_0_8");
  const _MaterialButtonComponent_0_9 = dart.privateName(material_menu$46template, "_MaterialButtonComponent_0_9");
  const _MaterialTooltipDirective_0_10 = dart.privateName(material_menu$46template, "_MaterialTooltipDirective_0_10");
  const _PopupSourceDirective_0_11 = dart.privateName(material_menu$46template, "_PopupSourceDirective_0_11");
  const __TooltipController_0_14 = dart.privateName(material_menu$46template, "__TooltipController_0_14");
  const _appEl_1$ = dart.privateName(material_menu$46template, "_appEl_1");
  const _NgIf_1_9$ = dart.privateName(material_menu$46template, "_NgIf_1_9");
  const _appEl_2$0 = dart.privateName(material_menu$46template, "_appEl_2");
  const _NgIf_2_9$ = dart.privateName(material_menu$46template, "_NgIf_2_9");
  const _appEl_4$ = dart.privateName(material_menu$46template, "_appEl_4");
  const _NgIf_4_9$ = dart.privateName(material_menu$46template, "_NgIf_4_9");
  const _expr_0$0 = dart.privateName(material_menu$46template, "_expr_0");
  const _expr_1$0 = dart.privateName(material_menu$46template, "_expr_1");
  const _expr_2$0 = dart.privateName(material_menu$46template, "_expr_2");
  const _expr_3$0 = dart.privateName(material_menu$46template, "_expr_3");
  const _expr_4$0 = dart.privateName(material_menu$46template, "_expr_4");
  const _expr_5$0 = dart.privateName(material_menu$46template, "_expr_5");
  const _el_0$0 = dart.privateName(material_menu$46template, "_el_0");
  const _TooltipController_0_14 = dart.privateName(material_menu$46template, "_TooltipController_0_14");
  let C25;
  let C26;
  let C27;
  let C28;
  const _MenuPopupComponent_0_5 = dart.privateName(material_menu$46template, "_MenuPopupComponent_0_5");
  material_menu$46template.ViewMaterialMenuComponent0 = class ViewMaterialMenuComponent0 extends component_view.ComponentView$(material_menu.MaterialMenuComponent) {
    get [_TooltipController_0_14]() {
      if (this[__TooltipController_0_14] == null) {
        this[__TooltipController_0_14] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(tooltip_controller.TooltipController, dart.wrapType(tooltip_controller.TooltipController), dart.fn(() => module.createTooltipController(tooltip_controller.TooltipController._check(this.parentView.injectorGetOptional(dart.wrapType(tooltip_controller.TooltipController), this.parentIndex)), disposer.Disposer._check(this.parentView.injectorGetOptional(dart.wrapType(disposer.Disposer), this.parentIndex))), VoidToTooltipController())) : module.createTooltipController(tooltip_controller.TooltipController._check(this.parentView.injectorGetOptional(dart.wrapType(tooltip_controller.TooltipController), this.parentIndex)), disposer.Disposer._check(this.parentView.injectorGetOptional(dart.wrapType(disposer.Disposer), this.parentIndex)));
      }
      return this[__TooltipController_0_14];
    }
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/material_menu.dart" : null;
    }
    build() {
      let t0;
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      this[_compView_0$0] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0$0] = this[_compView_0$0].rootElement;
      parentRenderNode[$append](this[_el_0$0]);
      this.updateChildClassNonHtml(this[_el_0$0], "trigger-button");
      dom_helpers.setAttribute(this[_el_0$0], "popupSource", "");
      this[_appEl_0$0] = new view_container.ViewContainer.new(0, null, this, this[_el_0$0]);
      this[_AcxDarkTheme_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(dark_theme.AcxDarkTheme, dart.wrapType(dark_theme.AcxDarkTheme), dart.fn(() => new dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGetOptional(C25 || CT.C25, this.parentIndex))), VoidToAcxDarkTheme())) : new dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGetOptional(C25 || CT.C25, this.parentIndex)));
      this[_MaterialButtonComponent_0_9] = new material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_0$0]), dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_0_8]), this[_compView_0$0], null);
      this[_MaterialTooltipDirective_0_10] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(tooltip.MaterialTooltipDirective, dart.wrapType(tooltip.MaterialTooltipDirective), dart.fn(() => new tooltip.MaterialTooltipDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentIndex)), this[_appEl_0$0], html.HtmlElement._check(this[_el_0$0]), this[_appEl_0$0], this[_compView_0$0], html.Window._check(this.parentView.injectorGet(dart.wrapType(html.Window), this.parentIndex)), null, null), VoidToMaterialTooltipDirective())) : new tooltip.MaterialTooltipDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentIndex)), this[_appEl_0$0], html.HtmlElement._check(this[_el_0$0]), this[_appEl_0$0], this[_compView_0$0], html.Window._check(this.parentView.injectorGet(dart.wrapType(html.Window), this.parentIndex)), null, null);
      this[_PopupSourceDirective_0_11] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(popup_source_directive.PopupSourceDirective, dart.wrapType(popup_source_directive.PopupSourceDirective), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentIndex)), html.HtmlElement._check(this[_el_0$0]), reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(reference.ReferenceDirective), this.parentIndex)), focus_interface.Focusable._check(this.parentView.injectorGetOptional(dart.wrapType(focus_interface.Focusable), this.parentIndex)), null), VoidToPopupSourceDirective())) : new popup_source_directive.PopupSourceDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentIndex)), html.HtmlElement._check(this[_el_0$0]), reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(reference.ReferenceDirective), this.parentIndex)), focus_interface.Focusable._check(this.parentView.injectorGetOptional(dart.wrapType(focus_interface.Focusable), this.parentIndex)), null);
      let _anchor_1 = dom_helpers.createAnchor();
      this[_appEl_1$] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$], C26 || CT.C26);
      this[_NgIf_1_9$] = new ng_if.NgIf.new(this[_appEl_1$], _TemplateRef_1_8);
      let _anchor_2 = dom_helpers.createAnchor();
      this[_appEl_2$0] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$0], C27 || CT.C27);
      this[_NgIf_2_9$] = new ng_if.NgIf.new(this[_appEl_2$0], _TemplateRef_2_8);
      let _text_3 = dom_helpers.createText(" ");
      this[_compView_0$0].createAndProject(this[_MaterialButtonComponent_0_9], JSArrayOfObject().of([(t0 = [this[_appEl_1$], this[_appEl_2$0], _text_3], t0[$addAll](core.Iterable._check(this.projectedNodes[$_get](0))), t0)]));
      let _anchor_4 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_4$] = new view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4$], C28 || CT.C28);
      this[_NgIf_4_9$] = new ng_if.NgIf.new(this[_appEl_4$], _TemplateRef_4_8);
      this[_el_0$0][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'onKeyDown')));
      let subscription_0 = this[_MaterialButtonComponent_0_9].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(_ctx, 'handlePopupTriggerAction')));
      _ctx.button = this[_MaterialButtonComponent_0_9];
      this.initSubscriptions(JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 3) {
        if (token === dart.wrapType(dark_theme.AcxDarkTheme)) {
          return this[_AcxDarkTheme_0_8];
        }
        if (token === dart.wrapType(material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator.ButtonDirective) || token === dart.wrapType(has_disabled.HasDisabled)) {
          return this[_MaterialButtonComponent_0_9];
        }
        if (token === dart.wrapType(tooltip_controller.TooltipController)) {
          return this[_TooltipController_0_14];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      let currVal_2 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_2$0], currVal_2, "disabled", ""))) {
        this[_MaterialButtonComponent_0_9].disabled = currVal_2;
        changed = true;
        this[_expr_2$0] = currVal_2;
      }
      let currVal_3 = _ctx.tabbable;
      if (dart.test(check_binding.checkBinding(this[_expr_3$0], currVal_3, "tabbable", ""))) {
        this[_MaterialButtonComponent_0_9].tabbable = currVal_3;
        changed = true;
        this[_expr_3$0] = currVal_3;
      }
      if (changed) {
        this[_compView_0$0].markAsCheckOnce();
      }
      let currVal_4 = _ctx.tooltipText;
      if (dart.test(check_binding.checkBinding(this[_expr_4$0], currVal_4, "tooltipText", ""))) {
        this[_MaterialTooltipDirective_0_10].text = currVal_4;
        this[_expr_4$0] = currVal_4;
      }
      let currVal_5 = _ctx.hasTooltip;
      if (dart.test(check_binding.checkBinding(this[_expr_5$0], currVal_5, "hasTooltip", ""))) {
        this[_MaterialTooltipDirective_0_10].canShow = currVal_5;
        this[_expr_5$0] = currVal_5;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MaterialTooltipDirective_0_10].ngOnInit();
      }
      this[_NgIf_1_9$].ngIf = _ctx.hasIcon;
      this[_NgIf_2_9$].ngIf = _ctx.buttonText != null;
      this[_NgIf_4_9$].ngIf = _ctx.hasSubmenu;
      this[_appEl_0$0].detectChangesInNestedViews();
      this[_appEl_1$].detectChangesInNestedViews();
      this[_appEl_2$0].detectChangesInNestedViews();
      this[_appEl_4$].detectChangesInNestedViews();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(this[_viewQuery_MenuPopupComponent_1_isDirty])) {
          _ctx.menuPopup = queries.firstOrNull(menu_popup.MenuPopupComponent, this[_appEl_4$].mapNestedViews(menu_popup.MenuPopupComponent, material_menu$46template._ViewMaterialMenuComponent3, dart.fn(nestedView => JSArrayOfMenuPopupComponent().of([nestedView[_MenuPopupComponent_0_5]]), _ViewMaterialMenuComponent3ToListOfMenuPopupComponent())));
          this[_viewQuery_MenuPopupComponent_1_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.ariaLabel;
      if (dart.test(check_binding.checkBinding(this[_expr_0$0], currVal_0, "ariaLabel", ""))) {
        dom_helpers.updateAttribute(this[_el_0$0], "aria-label", currVal_0);
        this[_expr_0$0] = currVal_0;
      }
      let currVal_1 = _ctx.hasIcon;
      if (dart.test(check_binding.checkBinding(this[_expr_1$0], currVal_1, "hasIcon", ""))) {
        dom_helpers.updateAttribute(this[_el_0$0], "icon", dart.test(currVal_1) ? "" : null);
        this[_expr_1$0] = currVal_1;
      }
      this[_compView_0$0].detectHostChanges(firstCheck);
      this[_compView_0$0].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialTooltipDirective_0_10].ngAfterViewInit();
          this[_PopupSourceDirective_0_11].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_0$0].destroyNestedViews();
      this[_appEl_1$].destroyNestedViews();
      this[_appEl_2$0].destroyNestedViews();
      this[_appEl_4$].destroyNestedViews();
      this[_compView_0$0].destroyInternalState();
      this[_MaterialTooltipDirective_0_10].ngOnDestroy();
      this[_PopupSourceDirective_0_11].ngOnDestroy();
    }
    initComponentStyles() {
      let styles = material_menu$46template.ViewMaterialMenuComponent0._componentStyles;
      if (styles == null) {
        material_menu$46template.ViewMaterialMenuComponent0._componentStyles = styles = material_menu$46template.ViewMaterialMenuComponent0._componentStyles = new style_encapsulation._UnscopedComponentStyles.new(material_menu$46template.styles$MaterialMenuComponent, material_menu$46template.ViewMaterialMenuComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_menu$46template.ViewMaterialMenuComponent0.new = function(parentView, parentIndex) {
    this[_viewQuery_MenuPopupComponent_1_isDirty] = true;
    this[_compView_0$0] = null;
    this[_appEl_0$0] = null;
    this[_AcxDarkTheme_0_8] = null;
    this[_MaterialButtonComponent_0_9] = null;
    this[_MaterialTooltipDirective_0_10] = null;
    this[_PopupSourceDirective_0_11] = null;
    this[__TooltipController_0_14] = null;
    this[_appEl_1$] = null;
    this[_NgIf_1_9$] = null;
    this[_appEl_2$0] = null;
    this[_NgIf_2_9$] = null;
    this[_appEl_4$] = null;
    this[_NgIf_4_9$] = null;
    this[_expr_0$0] = null;
    this[_expr_1$0] = null;
    this[_expr_2$0] = null;
    this[_expr_3$0] = null;
    this[_expr_4$0] = null;
    this[_expr_5$0] = null;
    this[_el_0$0] = null;
    material_menu$46template.ViewMaterialMenuComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-menu"));
  }).prototype = material_menu$46template.ViewMaterialMenuComponent0.prototype;
  dart.addTypeTests(material_menu$46template.ViewMaterialMenuComponent0);
  dart.setMethodSignature(material_menu$46template.ViewMaterialMenuComponent0, () => ({
    __proto__: dart.getMethods(material_menu$46template.ViewMaterialMenuComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_menu$46template.ViewMaterialMenuComponent0, () => ({
    __proto__: dart.getGetters(material_menu$46template.ViewMaterialMenuComponent0.__proto__),
    [_TooltipController_0_14]: dart.dynamic
  }));
  dart.setLibraryUri(material_menu$46template.ViewMaterialMenuComponent0, "package:angular_components/material_menu/material_menu.template.dart");
  dart.setFieldSignature(material_menu$46template.ViewMaterialMenuComponent0, () => ({
    __proto__: dart.getFields(material_menu$46template.ViewMaterialMenuComponent0.__proto__),
    [_viewQuery_MenuPopupComponent_1_isDirty]: dart.fieldType(core.bool),
    [_compView_0$0]: dart.fieldType(material_button$46template.ViewMaterialButtonComponent0),
    [_appEl_0$0]: dart.fieldType(view_container.ViewContainer),
    [_AcxDarkTheme_0_8]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_9]: dart.fieldType(material_button.MaterialButtonComponent),
    [_MaterialTooltipDirective_0_10]: dart.fieldType(tooltip.MaterialTooltipDirective),
    [_PopupSourceDirective_0_11]: dart.fieldType(popup_source_directive.PopupSourceDirective),
    [__TooltipController_0_14]: dart.fieldType(dart.dynamic),
    [_appEl_1$]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_1_9$]: dart.fieldType(ng_if.NgIf),
    [_appEl_2$0]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_2_9$]: dart.fieldType(ng_if.NgIf),
    [_appEl_4$]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_4_9$]: dart.fieldType(ng_if.NgIf),
    [_expr_0$0]: dart.fieldType(dart.dynamic),
    [_expr_1$0]: dart.fieldType(dart.dynamic),
    [_expr_2$0]: dart.fieldType(core.bool),
    [_expr_3$0]: dart.fieldType(core.bool),
    [_expr_4$0]: dart.fieldType(core.String),
    [_expr_5$0]: dart.fieldType(core.bool),
    [_el_0$0]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(material_menu$46template.ViewMaterialMenuComponent0, {
    /*material_menu$46template.ViewMaterialMenuComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _MaterialIconComponent_0_5$ = dart.privateName(material_menu$46template, "_MaterialIconComponent_0_5");
  material_menu$46template._ViewMaterialMenuComponent1 = class _ViewMaterialMenuComponent1 extends embedded_view.EmbeddedView$(material_menu.MaterialMenuComponent) {
    build() {
      this[_compView_0$0] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      let _el_0 = this[_compView_0$0].rootElement;
      this[_MaterialIconComponent_0_5$] = new material_icon.MaterialIconComponent.new(_el_0);
      this[_compView_0$0].create(this[_MaterialIconComponent_0_5$]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.menu.uiIcon;
      if (dart.test(check_binding.checkBinding(this[_expr_0$0], currVal_0, "menu.uiIcon", ""))) {
        this[_MaterialIconComponent_0_5$].icon = currVal_0;
        changed = true;
        this[_expr_0$0] = currVal_0;
      }
      if (changed) {
        this[_compView_0$0].markAsCheckOnce();
      }
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$0].destroyInternalState();
    }
  };
  (material_menu$46template._ViewMaterialMenuComponent1.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_MaterialIconComponent_0_5$] = null;
    this[_expr_0$0] = null;
    material_menu$46template._ViewMaterialMenuComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_menu$46template._ViewMaterialMenuComponent1.prototype;
  dart.addTypeTests(material_menu$46template._ViewMaterialMenuComponent1);
  dart.setMethodSignature(material_menu$46template._ViewMaterialMenuComponent1, () => ({
    __proto__: dart.getMethods(material_menu$46template._ViewMaterialMenuComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_menu$46template._ViewMaterialMenuComponent1, "package:angular_components/material_menu/material_menu.template.dart");
  dart.setFieldSignature(material_menu$46template._ViewMaterialMenuComponent1, () => ({
    __proto__: dart.getFields(material_menu$46template._ViewMaterialMenuComponent1.__proto__),
    [_compView_0$0]: dart.fieldType(material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5$]: dart.fieldType(material_icon.MaterialIconComponent),
    [_expr_0$0]: dart.fieldType(dart.dynamic)
  }));
  const _textBinding_1 = dart.privateName(material_menu$46template, "_textBinding_1");
  material_menu$46template._ViewMaterialMenuComponent2 = class _ViewMaterialMenuComponent2 extends embedded_view.EmbeddedView$(material_menu.MaterialMenuComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      _el_0[$append](this[_textBinding_1].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.buttonText));
    }
  };
  (material_menu$46template._ViewMaterialMenuComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_menu$46template._ViewMaterialMenuComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_menu$46template._ViewMaterialMenuComponent2.prototype;
  dart.addTypeTests(material_menu$46template._ViewMaterialMenuComponent2);
  dart.setMethodSignature(material_menu$46template._ViewMaterialMenuComponent2, () => ({
    __proto__: dart.getMethods(material_menu$46template._ViewMaterialMenuComponent2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_menu$46template._ViewMaterialMenuComponent2, "package:angular_components/material_menu/material_menu.template.dart");
  dart.setFieldSignature(material_menu$46template._ViewMaterialMenuComponent2, () => ({
    __proto__: dart.getFields(material_menu$46template._ViewMaterialMenuComponent2.__proto__),
    [_textBinding_1]: dart.finalFieldType(text_binding.TextBinding)
  }));
  const _PopupSourceDirective_0_6 = dart.privateName(material_menu$46template, "_PopupSourceDirective_0_6");
  const _handleEvent_0$0 = dart.privateName(material_menu$46template, "_handleEvent_0");
  material_menu$46template._ViewMaterialMenuComponent3 = class _ViewMaterialMenuComponent3 extends embedded_view.EmbeddedView$(material_menu.MaterialMenuComponent) {
    build() {
      this[_compView_0$0] = new menu_popup$46template.ViewMenuPopupComponent0.new(this, 0);
      let _el_0 = this[_compView_0$0].rootElement;
      this[_MenuPopupComponent_0_5] = new menu_popup.MenuPopupComponent.new(_el_0);
      this[_PopupSourceDirective_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(popup_source_directive.PopupSourceDirective, dart.wrapType(popup_source_directive.PopupSourceDirective), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentIndex)), _el_0, reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(reference.ReferenceDirective), this.parentIndex)), focus_interface.Focusable._check(this.parentView.injectorGetOptional(dart.wrapType(focus_interface.Focusable), this.parentIndex)), null), VoidToPopupSourceDirective())) : new popup_source_directive.PopupSourceDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentIndex)), _el_0, reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(reference.ReferenceDirective), this.parentIndex)), focus_interface.Focusable._check(this.parentView.injectorGetOptional(dart.wrapType(focus_interface.Focusable), this.parentIndex)), null);
      this[_compView_0$0].createAndProject(this[_MenuPopupComponent_0_5], JSArrayOfObject().of([this.projectedNodes[$_get](1)]));
      let subscription_0 = this[_MenuPopupComponent_0_5].expandActionChange.listen(this.eventHandler1(menu_popup_wrapper.ExpandAction, menu_popup_wrapper.ExpandAction, dart.bind(this, _handleEvent_0$0)));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_toggle = optimizations.unsafeCast(material_menu$46template.ViewMaterialMenuComponent0, this.parentView)[_PopupSourceDirective_0_11];
      changed = false;
      let currVal_0 = _ctx.menu;
      if (dart.test(check_binding.checkBinding(this[_expr_0$0], currVal_0, "menu", ""))) {
        this[_MenuPopupComponent_0_5].menu = currVal_0;
        changed = true;
        this[_expr_0$0] = currVal_0;
      }
      let currVal_1 = _ctx.preferredPositions;
      if (dart.test(check_binding.checkBinding(this[_expr_1$0], currVal_1, "preferredPositions", ""))) {
        this[_MenuPopupComponent_0_5].preferredPositions = currVal_1;
        changed = true;
        this[_expr_1$0] = currVal_1;
      }
      let currVal_2 = _ctx.expandAction;
      if (dart.test(check_binding.checkBinding(this[_expr_2$0], currVal_2, "expandAction", ""))) {
        this[_MenuPopupComponent_0_5].expandAction = currVal_2;
        changed = true;
        this[_expr_2$0] = currVal_2;
      }
      let currVal_3 = _ctx.width;
      if (dart.test(check_binding.checkBinding(this[_expr_3$0], currVal_3, "width", ""))) {
        this[_MenuPopupComponent_0_5].width = currVal_3;
        changed = true;
        this[_expr_3$0] = currVal_3;
      }
      let currVal_4 = local_toggle;
      if (dart.test(check_binding.checkBinding(this[_expr_4$0], currVal_4, "toggle", ""))) {
        this[_MenuPopupComponent_0_5].popupSource = currVal_4;
        changed = true;
        this[_expr_4$0] = currVal_4;
      }
      let currVal_5 = _ctx.popupClass;
      if (dart.test(check_binding.checkBinding(this[_expr_5$0], currVal_5, "popupClass", ""))) {
        this[_MenuPopupComponent_0_5].popupClass = currVal_5;
        changed = true;
        this[_expr_5$0] = currVal_5;
      }
      if (changed) {
        this[_compView_0$0].markAsCheckOnce();
      }
      this[_compView_0$0].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_PopupSourceDirective_0_6].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(material_menu$46template.ViewMaterialMenuComponent0, this.parentView)[_viewQuery_MenuPopupComponent_1_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0$0].destroyInternalState();
      this[_PopupSourceDirective_0_6].ngOnDestroy();
    }
    [_handleEvent_0$0]($36event) {
      let _ctx = this.ctx;
      _ctx.expandAction = menu_popup_wrapper.ExpandAction._check($36event);
    }
  };
  (material_menu$46template._ViewMaterialMenuComponent3.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_MenuPopupComponent_0_5] = null;
    this[_PopupSourceDirective_0_6] = null;
    this[_expr_0$0] = null;
    this[_expr_1$0] = null;
    this[_expr_2$0] = null;
    this[_expr_3$0] = null;
    this[_expr_4$0] = null;
    this[_expr_5$0] = null;
    material_menu$46template._ViewMaterialMenuComponent3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_menu$46template._ViewMaterialMenuComponent3.prototype;
  dart.addTypeTests(material_menu$46template._ViewMaterialMenuComponent3);
  dart.setMethodSignature(material_menu$46template._ViewMaterialMenuComponent3, () => ({
    __proto__: dart.getMethods(material_menu$46template._ViewMaterialMenuComponent3.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0$0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_menu$46template._ViewMaterialMenuComponent3, "package:angular_components/material_menu/material_menu.template.dart");
  dart.setFieldSignature(material_menu$46template._ViewMaterialMenuComponent3, () => ({
    __proto__: dart.getFields(material_menu$46template._ViewMaterialMenuComponent3.__proto__),
    [_compView_0$0]: dart.fieldType(menu_popup$46template.ViewMenuPopupComponent0),
    [_MenuPopupComponent_0_5]: dart.fieldType(menu_popup.MenuPopupComponent),
    [_PopupSourceDirective_0_6]: dart.fieldType(popup_source_directive.PopupSourceDirective),
    [_expr_0$0]: dart.fieldType(dart.dynamic),
    [_expr_1$0]: dart.fieldType(dart.dynamic),
    [_expr_2$0]: dart.fieldType(dart.dynamic),
    [_expr_3$0]: dart.fieldType(dart.dynamic),
    [_expr_4$0]: dart.fieldType(dart.dynamic),
    [_expr_5$0]: dart.fieldType(core.String)
  }));
  material_menu$46template._ViewMaterialMenuComponentHost0 = class _ViewMaterialMenuComponentHost0 extends host_view.HostView$(material_menu.MaterialMenuComponent) {
    build() {
      this.componentView = new material_menu$46template.ViewMaterialMenuComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new material_menu.MaterialMenuComponent.new(_el_0);
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
  (material_menu$46template._ViewMaterialMenuComponentHost0.new = function(injector) {
    material_menu$46template._ViewMaterialMenuComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = material_menu$46template._ViewMaterialMenuComponentHost0.prototype;
  dart.addTypeTests(material_menu$46template._ViewMaterialMenuComponentHost0);
  dart.setMethodSignature(material_menu$46template._ViewMaterialMenuComponentHost0, () => ({
    __proto__: dart.getMethods(material_menu$46template._ViewMaterialMenuComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_menu$46template._ViewMaterialMenuComponentHost0, "package:angular_components/material_menu/material_menu.template.dart");
  material_menu$46template.viewFactory_MaterialMenuComponent1 = function viewFactory_MaterialMenuComponent1(parentView, parentIndex) {
    return new material_menu$46template._ViewMaterialMenuComponent1.new(parentView, parentIndex);
  };
  material_menu$46template.viewFactory_MaterialMenuComponent2 = function viewFactory_MaterialMenuComponent2(parentView, parentIndex) {
    return new material_menu$46template._ViewMaterialMenuComponent2.new(parentView, parentIndex);
  };
  material_menu$46template.viewFactory_MaterialMenuComponent3 = function viewFactory_MaterialMenuComponent3(parentView, parentIndex) {
    return new material_menu$46template._ViewMaterialMenuComponent3.new(parentView, parentIndex);
  };
  material_menu$46template.viewFactory_MaterialMenuComponentHost0 = function viewFactory_MaterialMenuComponentHost0(injector) {
    return new material_menu$46template._ViewMaterialMenuComponentHost0.new(injector);
  };
  material_menu$46template.initReflector = function initReflector$0() {
    if (dart.test(material_menu$46template._visited)) {
      return;
    }
    material_menu$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_menu.MaterialMenuComponent), material_menu$46template.MaterialMenuComponentNgFactory);
    angular$46template.initReflector();
    focus$46template.initReflector();
    has_disabled$46template.initReflector();
    material_button$46template.initReflector();
    material_icon$46template.initReflector();
    menu_popup$46template.initReflector();
    menu_popup_wrapper$46template.initReflector();
    material_popup$46template.initReflector();
    material_tooltip$46template.initReflector();
    focusable_mixin$46template.initReflector();
    keyboard_handler_mixin$46template.initReflector();
    menu$46template.initReflector();
    css$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(material_menu$46template, {
    get MaterialMenuComponentNgFactory() {
      return material_menu$46template._MaterialMenuComponentNgFactory;
    }
  });
  let C30;
  let C29;
  dart.defineLazy(material_menu$46template, {
    /*material_menu$46template.styles$MaterialMenuComponent*/get styles$MaterialMenuComponent() {
      return C4 || CT.C4;
    },
    /*material_menu$46template._MaterialMenuComponentNgFactory*/get _MaterialMenuComponentNgFactory() {
      return C29 || CT.C29;
    },
    /*material_menu$46template.styles$MaterialMenuComponentHost*/get styles$MaterialMenuComponentHost() {
      return C4 || CT.C4;
    },
    /*material_menu$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_menu/material_menu.template", {
    "package:angular_components/material_menu/menu_popup.template.dart": menu_popup$46template,
    "package:angular_components/material_menu/menu_item_groups.template.dart": menu_item_groups$46template,
    "package:angular_components/material_menu/material_menu.template.dart": material_menu$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["menu_popup.template.dart","menu_item_groups.template.dart","material_menu.template.dart"],"names":[],"mappings":"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","file":"material_menu.template.ddc.js"}');
  // Exports:
  return {
    material_menu__menu_popup$46template: menu_popup$46template,
    material_menu__menu_item_groups$46template: menu_item_groups$46template,
    material_menu__material_menu$46template: material_menu$46template
  };
});

//# sourceMappingURL=material_menu.template.ddc.js.map

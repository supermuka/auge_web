define(['dart_sdk', 'packages/angular_components/material_popup/material_popup', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular/src/runtime/queries', 'packages/angular_components/src/material_tree/group/material_tree_group', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular_components/material_radio/material_radio.template', 'packages/angular_components/material_radio/material_radio', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_checkbox/material_checkbox.template', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/utils/async/async.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_input/base_material_input'], function(dart_sdk, packages__angular_components__material_popup__material_popup, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__angular_components__focus__keyboard_only_focus_indicator, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__content__deferred_content, packages__angular_components__content__deferred_content_aware, packages__angular_components__mixins__material_dropdown_base, packages__angular__src__runtime__queries, packages__angular_components__src__material_tree__group__material_tree_group, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular__angular$46template, packages__angular_components__content__deferred_content$46template, packages__angular_components__focus__focus$46template, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__mixins__material_dropdown_base$46template, packages__angular_components__model__selection__select$46template, packages__angular_components__model__selection__selection_container$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__selection__selection_options$46template, packages__angular_components__model__ui__has_factory$46template, packages__angular_components__model__ui__has_renderer$46template, packages__angular_components__utils__angular__css__css$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__model__selection__selection_options, packages__angular_components__dynamic_component__dynamic_component$46template, packages__angular_components__dynamic_component__dynamic_component, packages__angular_components__material_radio__material_radio$46template, packages__angular_components__material_radio__material_radio, packages__angular_components__interfaces__has_disabled, packages__angular_components__material_checkbox__material_checkbox$46template, packages__angular_components__material_checkbox__material_checkbox, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__utils__async__async$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__button_decorator__button_decorator, packages__angular_components__material_input__material_input, packages__angular_components__material_input__material_input$46template, packages__angular_components__material_input__deferred_validator, packages__angular_forms__src__directives, packages__angular_components__material_input__material_input_default_value_accessor, packages__angular_components__material_input__base_material_input) {
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
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const dynamic_component_loader = packages__angular__src__bootstrap__modules.src__core__linker__dynamic_component_loader;
  const keyboard_only_focus_indicator = packages__angular_components__focus__keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const deferred_content = packages__angular_components__content__deferred_content.content__deferred_content;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const queries = packages__angular__src__runtime__queries.src__runtime__queries;
  const material_tree_filter = packages__angular_components__src__material_tree__group__material_tree_group.src__material_tree__material_tree_filter;
  const material_tree_dropdown = packages__angular_components__src__material_tree__group__material_tree_group.src__material_tree__material_tree_dropdown;
  const material_tree_root = packages__angular_components__src__material_tree__group__material_tree_group.src__material_tree__material_tree_root;
  const material_tree_impl = packages__angular_components__src__material_tree__group__material_tree_group.src__material_tree__material_tree_impl;
  const material_tree_group = packages__angular_components__src__material_tree__group__material_tree_group.src__material_tree__group__material_tree_group;
  const material_tree_group_flat = packages__angular_components__src__material_tree__group__material_tree_group.src__material_tree__group__material_tree_group_flat;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const material_dropdown_base$46template = packages__angular_components__mixins__material_dropdown_base$46template.mixins__material_dropdown_base$46template;
  const select$46template = packages__angular_components__model__selection__select$46template.model__selection__select$46template;
  const selection_container$46template = packages__angular_components__model__selection__selection_container$46template.model__selection__selection_container$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const selection_options$46template = packages__angular_components__model__selection__selection_options$46template.model__selection__selection_options$46template;
  const has_factory$46template = packages__angular_components__model__ui__has_factory$46template.model__ui__has_factory$46template;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  const css$46template = packages__angular_components__utils__angular__css__css$46template.utils__angular__css__css$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const selection_options = packages__angular_components__model__selection__selection_options.model__selection__selection_options;
  const dynamic_component$46template = packages__angular_components__dynamic_component__dynamic_component$46template.dynamic_component__dynamic_component$46template;
  const dynamic_component = packages__angular_components__dynamic_component__dynamic_component.dynamic_component__dynamic_component;
  const material_radio_group$46template = packages__angular_components__material_radio__material_radio$46template.material_radio__material_radio_group$46template;
  const material_radio$46template = packages__angular_components__material_radio__material_radio$46template.material_radio__material_radio$46template;
  const material_radio_group = packages__angular_components__material_radio__material_radio.material_radio__material_radio_group;
  const material_radio = packages__angular_components__material_radio__material_radio.material_radio__material_radio;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const material_checkbox$46template = packages__angular_components__material_checkbox__material_checkbox$46template.material_checkbox__material_checkbox$46template;
  const material_checkbox = packages__angular_components__material_checkbox__material_checkbox.material_checkbox__material_checkbox;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const async$46template = packages__angular_components__utils__async__async$46template.utils__async__async$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  const material_input$46template = packages__angular_components__material_input__material_input$46template.material_input__material_input$46template;
  const deferred_validator = packages__angular_components__material_input__deferred_validator.material_input__deferred_validator;
  const ng_model = packages__angular_forms__src__directives.src__directives__ng_model;
  const ng_control = packages__angular_forms__src__directives.src__directives__ng_control;
  const material_input_default_value_accessor = packages__angular_components__material_input__material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const base_material_input = packages__angular_components__material_input__base_material_input.material_input__base_material_input;
  const material_tree_dropdown$46template = Object.create(dart.library);
  const material_tree_impl$46template = Object.create(dart.library);
  const material_tree_group_flat$46template = Object.create(dart.library);
  const material_tree_group_flat_check$46scss$46css$46shim = Object.create(dart.library);
  const material_tree_group_flat_radio$46scss$46css$46shim = Object.create(dart.library);
  const material_tree_group_flat_list$46scss$46css$46shim = Object.create(dart.library);
  const material_tree_root$46template = Object.create(dart.library);
  const material_tree_node$46template = Object.create(dart.library);
  const material_tree_expand_state$46template = Object.create(dart.library);
  const material_tree_group$46template = Object.create(dart.library);
  const material_tree_group$46scss$46css$46shim = Object.create(dart.library);
  const material_tree_rendering_options$46template = Object.create(dart.library);
  const material_tree_filter$46template = Object.create(dart.library);
  const material_tree_dropdown$46scss$46css$46shim = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $addEventListener = dartx.addEventListener;
  const $setProperty = dartx.setProperty;
  let VoidToKeyboardOnlyFocusIndicatorDirective = () => (VoidToKeyboardOnlyFocusIndicatorDirective = dart.constFn(dart.fnType(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, [])))();
  let VoidToPopupSourceDirective = () => (VoidToPopupSourceDirective = dart.constFn(dart.fnType(popup_source_directive.PopupSourceDirective, [])))();
  let EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  let RenderViewAndintToEmbeddedViewOfvoid = () => (RenderViewAndintToEmbeddedViewOfvoid = dart.constFn(dart.fnType(EmbeddedViewOfvoid(), [render_view.RenderView, core.int])))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let VoidToMaterialPopupComponent = () => (VoidToMaterialPopupComponent = dart.constFn(dart.fnType(material_popup.MaterialPopupComponent, [])))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let JSArrayOfMaterialTreeFilterComponent = () => (JSArrayOfMaterialTreeFilterComponent = dart.constFn(_interceptors.JSArray$(material_tree_filter.MaterialTreeFilterComponent)))();
  let ListOfMaterialTreeFilterComponent = () => (ListOfMaterialTreeFilterComponent = dart.constFn(core.List$(material_tree_filter.MaterialTreeFilterComponent)))();
  let _ViewMaterialTreeDropdownComponent3ToListOfMaterialTreeFilterComponent = () => (_ViewMaterialTreeDropdownComponent3ToListOfMaterialTreeFilterComponent = dart.constFn(dart.fnType(ListOfMaterialTreeFilterComponent(), [material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3])))();
  let _ViewMaterialTreeDropdownComponent4ToListOfMaterialTreeFilterComponent = () => (_ViewMaterialTreeDropdownComponent4ToListOfMaterialTreeFilterComponent = dart.constFn(dart.fnType(ListOfMaterialTreeFilterComponent(), [material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4])))();
  let JSArrayOfListOfMaterialTreeFilterComponent = () => (JSArrayOfListOfMaterialTreeFilterComponent = dart.constFn(_interceptors.JSArray$(ListOfMaterialTreeFilterComponent())))();
  let VoidToMaterialTreeFilterComponent = () => (VoidToMaterialTreeFilterComponent = dart.constFn(dart.fnType(material_tree_filter.MaterialTreeFilterComponent, [])))();
  let ComponentFactoryOfMaterialTreeDropdownComponent = () => (ComponentFactoryOfMaterialTreeDropdownComponent = dart.constFn(component_factory.ComponentFactory$(material_tree_dropdown.MaterialTreeDropdownComponent)))();
  let InjectorToHostViewOfMaterialTreeDropdownComponentOfT = () => (InjectorToHostViewOfMaterialTreeDropdownComponentOfT = dart.constFn(dart.gFnType(T => [host_view.HostView$(material_tree_dropdown.MaterialTreeDropdownComponent$(T)), [injector.Injector]])))();
  let JSArrayOfMaterialTreeGroupComponent = () => (JSArrayOfMaterialTreeGroupComponent = dart.constFn(_interceptors.JSArray$(material_tree_group.MaterialTreeGroupComponent)))();
  let ListOfMaterialTreeGroupComponent = () => (ListOfMaterialTreeGroupComponent = dart.constFn(core.List$(material_tree_group.MaterialTreeGroupComponent)))();
  let _ViewMaterialTreeComponent2ToListOfMaterialTreeGroupComponent = () => (_ViewMaterialTreeComponent2ToListOfMaterialTreeGroupComponent = dart.constFn(dart.fnType(ListOfMaterialTreeGroupComponent(), [material_tree_impl$46template._ViewMaterialTreeComponent2])))();
  let _ViewMaterialTreeComponent1ToListOfMaterialTreeGroupComponent = () => (_ViewMaterialTreeComponent1ToListOfMaterialTreeGroupComponent = dart.constFn(dart.fnType(ListOfMaterialTreeGroupComponent(), [material_tree_impl$46template._ViewMaterialTreeComponent1])))();
  let ComponentFactoryOfMaterialTreeComponent = () => (ComponentFactoryOfMaterialTreeComponent = dart.constFn(component_factory.ComponentFactory$(material_tree_impl.MaterialTreeComponent)))();
  let InjectorToHostViewOfMaterialTreeComponentOfT = () => (InjectorToHostViewOfMaterialTreeComponentOfT = dart.constFn(dart.gFnType(T => [host_view.HostView$(material_tree_impl.MaterialTreeComponent$(T)), [injector.Injector]])))();
  let VoidToDynamicComponent = () => (VoidToDynamicComponent = dart.constFn(dart.fnType(dynamic_component.DynamicComponent, [])))();
  let VoidToMaterialRadioGroupComponent = () => (VoidToMaterialRadioGroupComponent = dart.constFn(dart.fnType(material_radio_group.MaterialRadioGroupComponent, [])))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(view_container.ViewContainer)))();
  let JSArrayOfMaterialRadioComponent = () => (JSArrayOfMaterialRadioComponent = dart.constFn(_interceptors.JSArray$(material_radio.MaterialRadioComponent)))();
  let ListOfMaterialRadioComponent = () => (ListOfMaterialRadioComponent = dart.constFn(core.List$(material_radio.MaterialRadioComponent)))();
  let _ViewMaterialTreeGroupFlatRadioComponent1ToListOfMaterialRadioComponent = () => (_ViewMaterialTreeGroupFlatRadioComponent1ToListOfMaterialRadioComponent = dart.constFn(dart.fnType(ListOfMaterialRadioComponent(), [material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1])))();
  let ComponentFactoryOfMaterialTreeGroupFlatListComponent = () => (ComponentFactoryOfMaterialTreeGroupFlatListComponent = dart.constFn(component_factory.ComponentFactory$(material_tree_group_flat.MaterialTreeGroupFlatListComponent)))();
  let InjectorToHostViewOfMaterialTreeGroupFlatListComponentOfT = () => (InjectorToHostViewOfMaterialTreeGroupFlatListComponentOfT = dart.constFn(dart.gFnType(T => [host_view.HostView$(material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)), [injector.Injector]])))();
  let ComponentFactoryOfMaterialTreeGroupFlatRadioComponent = () => (ComponentFactoryOfMaterialTreeGroupFlatRadioComponent = dart.constFn(component_factory.ComponentFactory$(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent)))();
  let InjectorToHostViewOfMaterialTreeGroupFlatRadioComponentOfT = () => (InjectorToHostViewOfMaterialTreeGroupFlatRadioComponentOfT = dart.constFn(dart.gFnType(T => [host_view.HostView$(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)), [injector.Injector]])))();
  let ComponentFactoryOfMaterialTreeGroupFlatCheckComponent = () => (ComponentFactoryOfMaterialTreeGroupFlatCheckComponent = dart.constFn(component_factory.ComponentFactory$(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent)))();
  let InjectorToHostViewOfMaterialTreeGroupFlatCheckComponentOfT = () => (InjectorToHostViewOfMaterialTreeGroupFlatCheckComponentOfT = dart.constFn(dart.gFnType(T => [host_view.HostView$(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)), [injector.Injector]])))();
  let ComponentFactoryOfMaterialTreeGroupComponent = () => (ComponentFactoryOfMaterialTreeGroupComponent = dart.constFn(component_factory.ComponentFactory$(material_tree_group.MaterialTreeGroupComponent)))();
  let InjectorToHostViewOfMaterialTreeGroupComponentOfT = () => (InjectorToHostViewOfMaterialTreeGroupComponentOfT = dart.constFn(dart.gFnType(T => [host_view.HostView$(material_tree_group.MaterialTreeGroupComponent$(T)), [injector.Injector]])))();
  let JSArrayOfMaterialInputComponent = () => (JSArrayOfMaterialInputComponent = dart.constFn(_interceptors.JSArray$(material_input.MaterialInputComponent)))();
  let ListOfMaterialInputComponent = () => (ListOfMaterialInputComponent = dart.constFn(core.List$(material_input.MaterialInputComponent)))();
  let _ViewMaterialTreeFilterComponent1ToListOfMaterialInputComponent = () => (_ViewMaterialTreeFilterComponent1ToListOfMaterialInputComponent = dart.constFn(dart.fnType(ListOfMaterialInputComponent(), [material_tree_filter$46template._ViewMaterialTreeFilterComponent1])))();
  let ComponentFactoryOfMaterialTreeFilterComponent = () => (ComponentFactoryOfMaterialTreeFilterComponent = dart.constFn(component_factory.ComponentFactory$(material_tree_filter.MaterialTreeFilterComponent)))();
  let HostViewOfMaterialTreeFilterComponent = () => (HostViewOfMaterialTreeFilterComponent = dart.constFn(host_view.HostView$(material_tree_filter.MaterialTreeFilterComponent)))();
  let InjectorToHostViewOfMaterialTreeFilterComponent = () => (InjectorToHostViewOfMaterialTreeFilterComponent = dart.constFn(dart.fnType(HostViewOfMaterialTreeFilterComponent(), [injector.Injector])))();
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
      return C3 = dart.constList([], dart.dynamic);
    },
    get C6() {
      return C6 = dart.fn(material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponentHost0, InjectorToHostViewOfMaterialTreeDropdownComponentOfT());
    },
    get C5() {
      return C5 = dart.const(dart.gbind(C6 || CT.C6, dart.dynamic));
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ComponentFactoryOfMaterialTreeDropdownComponent().prototype,
        [ComponentFactory__viewFactory]: C5 || CT.C5,
        [ComponentFactory_selector]: "material-tree-dropdown"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "MaterialTreeGroupComponent_materialTreeLeftPaddingToken"
      });
    },
    get C10() {
      return C10 = dart.fn(material_tree_impl$46template.viewFactory_MaterialTreeComponentHost0, InjectorToHostViewOfMaterialTreeComponentOfT());
    },
    get C9() {
      return C9 = dart.const(dart.gbind(C10 || CT.C10, dart.dynamic));
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ComponentFactoryOfMaterialTreeComponent().prototype,
        [ComponentFactory__viewFactory]: C9 || CT.C9,
        [ComponentFactory_selector]: "material-tree"
      });
    },
    get C13() {
      return C13 = dart.fn(material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponentHost0, InjectorToHostViewOfMaterialTreeGroupFlatListComponentOfT());
    },
    get C12() {
      return C12 = dart.const(dart.gbind(C13 || CT.C13, dart.dynamic));
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ComponentFactoryOfMaterialTreeGroupFlatListComponent().prototype,
        [ComponentFactory__viewFactory]: C12 || CT.C12,
        [ComponentFactory_selector]: "material-tree-group-flat-list"
      });
    },
    get C16() {
      return C16 = dart.fn(material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponentHost0, InjectorToHostViewOfMaterialTreeGroupFlatRadioComponentOfT());
    },
    get C15() {
      return C15 = dart.const(dart.gbind(C16 || CT.C16, dart.dynamic));
    },
    get C14() {
      return C14 = dart.const({
        __proto__: ComponentFactoryOfMaterialTreeGroupFlatRadioComponent().prototype,
        [ComponentFactory__viewFactory]: C15 || CT.C15,
        [ComponentFactory_selector]: "material-tree-group-flat-radio"
      });
    },
    get C19() {
      return C19 = dart.fn(material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponentHost0, InjectorToHostViewOfMaterialTreeGroupFlatCheckComponentOfT());
    },
    get C18() {
      return C18 = dart.const(dart.gbind(C19 || CT.C19, dart.dynamic));
    },
    get C17() {
      return C17 = dart.const({
        __proto__: ComponentFactoryOfMaterialTreeGroupFlatCheckComponent().prototype,
        [ComponentFactory__viewFactory]: C18 || CT.C18,
        [ComponentFactory_selector]: "material-tree-group-flat-check"
      });
    },
    get C22() {
      return C22 = dart.fn(material_tree_group$46template.viewFactory_MaterialTreeGroupComponentHost0, InjectorToHostViewOfMaterialTreeGroupComponentOfT());
    },
    get C21() {
      return C21 = dart.const(dart.gbind(C22 || CT.C22, dart.dynamic));
    },
    get C20() {
      return C20 = dart.const({
        __proto__: ComponentFactoryOfMaterialTreeGroupComponent().prototype,
        [ComponentFactory__viewFactory]: C21 || CT.C21,
        [ComponentFactory_selector]: "material-tree-group"
      });
    },
    get C23() {
      return C23 = dart.fn(material_tree_filter$46template.viewFactory_MaterialTreeFilterComponent1, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C24() {
      return C24 = dart.const({
        __proto__: opaque_token.MultiToken.prototype,
        [OpaqueToken__uniqueName]: "NgValidators"
      });
    },
    get C26() {
      return C26 = dart.fn(material_tree_filter$46template.viewFactory_MaterialTreeFilterComponentHost0, InjectorToHostViewOfMaterialTreeFilterComponent());
    },
    get C25() {
      return C25 = dart.const({
        __proto__: ComponentFactoryOfMaterialTreeFilterComponent().prototype,
        [ComponentFactory__viewFactory]: C26 || CT.C26,
        [ComponentFactory_selector]: "material-tree-filter"
      });
    }
  });
  const _viewQuery_MaterialTreeFilterComponent_0_isDirty = dart.privateName(material_tree_dropdown$46template, "_viewQuery_MaterialTreeFilterComponent_0_isDirty");
  const _KeyboardOnlyFocusIndicatorDirective_0_5 = dart.privateName(material_tree_dropdown$46template, "_KeyboardOnlyFocusIndicatorDirective_0_5");
  const _PopupSourceDirective_0_6 = dart.privateName(material_tree_dropdown$46template, "_PopupSourceDirective_0_6");
  const _appEl_1 = dart.privateName(material_tree_dropdown$46template, "_appEl_1");
  const _NgIf_1_9 = dart.privateName(material_tree_dropdown$46template, "_NgIf_1_9");
  const _appEl_2 = dart.privateName(material_tree_dropdown$46template, "_appEl_2");
  const _NgIf_2_9 = dart.privateName(material_tree_dropdown$46template, "_NgIf_2_9");
  const _appEl_3 = dart.privateName(material_tree_dropdown$46template, "_appEl_3");
  const _NgIf_3_9 = dart.privateName(material_tree_dropdown$46template, "_NgIf_3_9");
  const _compView_4 = dart.privateName(material_tree_dropdown$46template, "_compView_4");
  const _appEl_4 = dart.privateName(material_tree_dropdown$46template, "_appEl_4");
  const _MaterialPopupComponent_4_8 = dart.privateName(material_tree_dropdown$46template, "_MaterialPopupComponent_4_8");
  const __PopupHierarchy_4_11 = dart.privateName(material_tree_dropdown$46template, "__PopupHierarchy_4_11");
  const __PopupRef_4_12 = dart.privateName(material_tree_dropdown$46template, "__PopupRef_4_12");
  const _appEl_6 = dart.privateName(material_tree_dropdown$46template, "_appEl_6");
  const _NgIf_6_9 = dart.privateName(material_tree_dropdown$46template, "_NgIf_6_9");
  const _appEl_7 = dart.privateName(material_tree_dropdown$46template, "_appEl_7");
  const _DeferredContentDirective_7_9 = dart.privateName(material_tree_dropdown$46template, "_DeferredContentDirective_7_9");
  const _expr_0 = dart.privateName(material_tree_dropdown$46template, "_expr_0");
  const _expr_3 = dart.privateName(material_tree_dropdown$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_tree_dropdown$46template, "_expr_4");
  const _expr_6 = dart.privateName(material_tree_dropdown$46template, "_expr_6");
  const _el_0 = dart.privateName(material_tree_dropdown$46template, "_el_0");
  const _el_4 = dart.privateName(material_tree_dropdown$46template, "_el_4");
  const _PopupHierarchy_4_11 = dart.privateName(material_tree_dropdown$46template, "_PopupHierarchy_4_11");
  const _PopupRef_4_12 = dart.privateName(material_tree_dropdown$46template, "_PopupRef_4_12");
  const OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  let C0;
  let C1;
  let C2;
  let C3;
  const _handleEvent_0 = dart.privateName(material_tree_dropdown$46template, "_handleEvent_0");
  const _handleEvent_1 = dart.privateName(material_tree_dropdown$46template, "_handleEvent_1");
  const _handleEvent_2 = dart.privateName(material_tree_dropdown$46template, "_handleEvent_2");
  const _MaterialTreeFilterComponent_0_5 = dart.privateName(material_tree_dropdown$46template, "_MaterialTreeFilterComponent_0_5");
  const _is_ViewMaterialTreeDropdownComponent0_default = Symbol('_is_ViewMaterialTreeDropdownComponent0_default');
  material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0$ = dart.generic(T => {
    class ViewMaterialTreeDropdownComponent0 extends component_view.ComponentView$(material_tree_dropdown.MaterialTreeDropdownComponent$(T)) {
      get [_PopupHierarchy_4_11]() {
        if (this[__PopupHierarchy_4_11] == null) {
          this[__PopupHierarchy_4_11] = material_popup.getHierarchy(this[_MaterialPopupComponent_4_8]);
        }
        return this[__PopupHierarchy_4_11];
      }
      get [_PopupRef_4_12]() {
        if (this[__PopupRef_4_12] == null) {
          this[__PopupRef_4_12] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_4_8]);
        }
        return this[__PopupRef_4_12];
      }
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/material_tree_dropdown.dart" : null;
      }
      build() {
        let t0;
        let _ctx = this.ctx;
        let parentRenderNode = this.initViewRoot();
        let doc = html.document;
        this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
        this.updateChildClass(this[_el_0], "button");
        dom_helpers.setAttribute(this[_el_0], "keyboardOnlyFocusIndicator", "");
        dom_helpers.setAttribute(this[_el_0], "popupSource", "");
        this.addShimC(this[_el_0]);
        this[_KeyboardOnlyFocusIndicatorDirective_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, dart.wrapType(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirective())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)));
        this[_PopupSourceDirective_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(popup_source_directive.PopupSourceDirective, dart.wrapType(popup_source_directive.PopupSourceDirective), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentIndex)), this[_el_0], reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(reference.ReferenceDirective), this.parentIndex)), focus_interface.Focusable._check(this.parentView.injectorGetOptional(dart.wrapType(focus_interface.Focusable), this.parentIndex)), null), VoidToPopupSourceDirective())) : new popup_source_directive.PopupSourceDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentIndex)), this[_el_0], reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(reference.ReferenceDirective), this.parentIndex)), focus_interface.Focusable._check(this.parentView.injectorGetOptional(dart.wrapType(focus_interface.Focusable), this.parentIndex)), null);
        let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
        this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent1(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        let _anchor_2 = dom_helpers.appendAnchor(this[_el_0]);
        this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent2(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        let _anchor_3 = dom_helpers.appendAnchor(this[_el_0]);
        this[_appEl_3] = new view_container.ViewContainer.new(3, 0, this, _anchor_3);
        let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], dart.fn((parentView, parentIndex) => material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent3(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
        this[_compView_4] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 4);
        this[_el_4] = this[_compView_4].rootElement;
        parentRenderNode[$append](this[_el_4]);
        dom_helpers.setAttribute(this[_el_4], "enforceSpaceConstraints", "");
        dom_helpers.setAttribute(this[_el_4], "trackLayoutChanges", "");
        this.addShimC(html.HtmlElement._check(this[_el_4]));
        this[_appEl_4] = new view_container.ViewContainer.new(4, null, this, this[_el_4]);
        this[_MaterialPopupComponent_4_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_popup.MaterialPopupComponent, dart.wrapType(material_popup.MaterialPopupComponent), dart.fn(() => new material_popup.MaterialPopupComponent.new(popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGetOptional(dart.wrapType(popup_hierarchy.PopupHierarchy), this.parentIndex)), material_popup.MaterialPopupComponent._check(this.parentView.injectorGetOptional(dart.wrapType(material_popup.MaterialPopupComponent), this.parentIndex)), null, ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(overlay_service.OverlayService), this.parentIndex)), dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(zindexer.ZIndexer), this.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(C0 || CT.C0, this.parentIndex)), core.bool._check(this.parentView.injectorGet(C1 || CT.C1, this.parentIndex)), box.Box._check(this.parentView.injectorGet(C2 || CT.C2, this.parentIndex)), popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGetOptional(dart.wrapType(popup_size_provider.PopupSizeProvider), this.parentIndex)), this[_compView_4], this[_appEl_4], new element_ref.ElementRef.new(this[_el_4])), VoidToMaterialPopupComponent())) : new material_popup.MaterialPopupComponent.new(popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGetOptional(dart.wrapType(popup_hierarchy.PopupHierarchy), this.parentIndex)), material_popup.MaterialPopupComponent._check(this.parentView.injectorGetOptional(dart.wrapType(material_popup.MaterialPopupComponent), this.parentIndex)), null, ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(overlay_service.OverlayService), this.parentIndex)), dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(zindexer.ZIndexer), this.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(C0 || CT.C0, this.parentIndex)), core.bool._check(this.parentView.injectorGet(C1 || CT.C1, this.parentIndex)), box.Box._check(this.parentView.injectorGet(C2 || CT.C2, this.parentIndex)), popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGetOptional(dart.wrapType(popup_size_provider.PopupSizeProvider), this.parentIndex)), this[_compView_4], this[_appEl_4], new element_ref.ElementRef.new(this[_el_4]));
        let _el_5 = doc[$createElement]("div");
        dom_helpers.setAttribute(_el_5, "header", "");
        this.addShimC(html.HtmlElement._check(_el_5));
        this.project(_el_5, 0);
        let _anchor_6 = dom_helpers.appendAnchor(_el_5);
        this[_appEl_6] = new view_container.ViewContainer.new(6, 5, this, _anchor_6);
        let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], dart.fn((parentView, parentIndex) => material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent4(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
        let _anchor_7 = dom_helpers.createAnchor();
        this[_appEl_7] = new view_container.ViewContainer.new(7, 4, this, _anchor_7);
        let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7], dart.fn((parentView, parentIndex) => material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent5(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_DeferredContentDirective_7_9] = new deferred_content.DeferredContentDirective.new(this[_appEl_7], _TemplateRef_7_8, this[_MaterialPopupComponent_4_8], this);
        this[_compView_4].createAndProject(this[_MaterialPopupComponent_4_8], JSArrayOfObject().of([JSArrayOfElement().of([_el_5]), (t0 = [this.projectedNodes[$_get](1)], t0[$addAll]([this[_appEl_7]]), t0), C3 || CT.C3]));
        this[_el_0][$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_0)));
        this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_1)));
        this[_el_0][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'keydown')));
        this[_el_0][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
        this[_el_0][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'onMouseInteraction')));
        let subscription_0 = this[_MaterialPopupComponent_4_8].onOpened.listen(this.eventHandler0(dart.void, dart.bind(_ctx, 'focus')));
        let subscription_1 = this[_MaterialPopupComponent_4_8].onVisible.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handleEvent_2)));
        this.initSubscriptions(JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
          if (token === dart.wrapType(material_popup.MaterialPopupComponent) || token === dart.wrapType(deferred_content_aware.DeferredContentAware) || token === dart.wrapType(material_dropdown_base.DropdownHandle)) {
            return this[_MaterialPopupComponent_4_8];
          }
          if (token === dart.wrapType(popup_hierarchy.PopupHierarchy)) {
            return this[_PopupHierarchy_4_11];
          }
          if (token === dart.wrapType(popup_ref.PopupRef)) {
            return this[_PopupRef_4_12];
          }
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.firstCheck;
        let local_button = this[_PopupSourceDirective_0_6];
        this[_NgIf_1_9].ngIf = !dart.test(_ctx.showFilterInsideButton);
        this[_NgIf_2_9].ngIf = !dart.test(_ctx.showFilterInsideButton);
        this[_NgIf_3_9].ngIf = _ctx.showFilterInsideButton;
        changed = false;
        if (dart.test(firstCheck)) {
          this[_MaterialPopupComponent_4_8].enforceSpaceConstraints = true;
          changed = true;
          this[_MaterialPopupComponent_4_8].trackLayoutChanges = true;
          changed = true;
        }
        let currVal_3 = _ctx.popupPositions;
        if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "popupPositions", ""))) {
          this[_MaterialPopupComponent_4_8].preferredPositions = currVal_3;
          changed = true;
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = local_button;
        if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "button", ""))) {
          this[_MaterialPopupComponent_4_8].source = currVal_4;
          changed = true;
          this[_expr_4] = currVal_4;
        }
        let currVal_6 = _ctx.visible;
        if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "visible", ""))) {
          this[_MaterialPopupComponent_4_8].visible = currVal_6;
          changed = true;
          this[_expr_6] = currVal_6;
        }
        if (changed) {
          this[_compView_4].markAsCheckOnce();
        }
        this[_NgIf_6_9].ngIf = dart.test(_ctx.supportsFiltering) && dart.test(_ctx.showFilterInsidePopup);
        if (dart.test(firstCheck)) {
          this[_DeferredContentDirective_7_9].preserveDimensions = true;
        }
        this[_appEl_1].detectChangesInNestedViews();
        this[_appEl_2].detectChangesInNestedViews();
        this[_appEl_3].detectChangesInNestedViews();
        this[_appEl_4].detectChangesInNestedViews();
        this[_appEl_6].detectChangesInNestedViews();
        this[_appEl_7].detectChangesInNestedViews();
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          if (dart.test(this[_viewQuery_MaterialTreeFilterComponent_0_isDirty])) {
            _ctx.materialTreeFilterComponent = queries.firstOrNull(material_tree_filter.MaterialTreeFilterComponent, queries.flattenNodes(material_tree_filter.MaterialTreeFilterComponent, JSArrayOfListOfMaterialTreeFilterComponent().of([this[_appEl_3].mapNestedViews(material_tree_filter.MaterialTreeFilterComponent, material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3, dart.fn(nestedView => JSArrayOfMaterialTreeFilterComponent().of([nestedView[_MaterialTreeFilterComponent_0_5]]), _ViewMaterialTreeDropdownComponent3ToListOfMaterialTreeFilterComponent())), this[_appEl_6].mapNestedViews(material_tree_filter.MaterialTreeFilterComponent, material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4, dart.fn(nestedView => JSArrayOfMaterialTreeFilterComponent().of([nestedView[_MaterialTreeFilterComponent_0_5]]), _ViewMaterialTreeDropdownComponent4ToListOfMaterialTreeFilterComponent()))])));
            this[_viewQuery_MaterialTreeFilterComponent_0_isDirty] = false;
          }
        }
        let currVal_0 = !dart.test(_ctx.showFilterInsideButton);
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "!showFilterInsideButton", ""))) {
          dom_helpers.updateClassBinding(this[_el_0], "border", currVal_0);
          this[_expr_0] = currVal_0;
        }
        if (dart.test(firstCheck)) {
          if (_ctx.popupClassName != null) {
            this[_compView_4].updateChildClassNonHtml(this[_el_4], _ctx.popupClassName);
          }
        }
        this[_compView_4].detectHostChanges(firstCheck);
        this[_compView_4].detectChanges();
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          if (dart.test(firstCheck)) {
            this[_PopupSourceDirective_0_6].ngAfterViewInit();
            this[_MaterialPopupComponent_4_8].ngAfterViewInit();
          }
        }
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
        this[_appEl_2].destroyNestedViews();
        this[_appEl_3].destroyNestedViews();
        this[_appEl_4].destroyNestedViews();
        this[_appEl_6].destroyNestedViews();
        this[_appEl_7].destroyNestedViews();
        this[_compView_4].destroyInternalState();
        this[_PopupSourceDirective_0_6].ngOnDestroy();
        this[_DeferredContentDirective_7_9].ngOnDestroy();
        this[_MaterialPopupComponent_4_8].ngOnDestroy();
      }
      [_handleEvent_0]($36event) {
        let _ctx = this.ctx;
        _ctx.visible = true;
        this[_KeyboardOnlyFocusIndicatorDirective_0_5].onFocus(html.Event._check($36event));
      }
      [_handleEvent_1]($36event) {
        let _ctx = this.ctx;
        _ctx.visible = !dart.test(_ctx.visible);
        this[_KeyboardOnlyFocusIndicatorDirective_0_5].onMouseInteraction();
      }
      [_handleEvent_2]($36event) {
        let _ctx = this.ctx;
        _ctx.visible = core.bool._check($36event);
      }
      initComponentStyles() {
        let styles = material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._componentStyles;
        if (styles == null) {
          material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._componentStyles = styles = material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_tree_dropdown$46template.styles$MaterialTreeDropdownComponent, material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialTreeDropdownComponent0.new = function(parentView, parentIndex) {
      this[_viewQuery_MaterialTreeFilterComponent_0_isDirty] = true;
      this[_KeyboardOnlyFocusIndicatorDirective_0_5] = null;
      this[_PopupSourceDirective_0_6] = null;
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      this[_appEl_3] = null;
      this[_NgIf_3_9] = null;
      this[_compView_4] = null;
      this[_appEl_4] = null;
      this[_MaterialPopupComponent_4_8] = null;
      this[__PopupHierarchy_4_11] = null;
      this[__PopupRef_4_12] = null;
      this[_appEl_6] = null;
      this[_NgIf_6_9] = null;
      this[_appEl_7] = null;
      this[_DeferredContentDirective_7_9] = null;
      this[_expr_0] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_expr_6] = null;
      this[_el_0] = null;
      this[_el_4] = null;
      ViewMaterialTreeDropdownComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
      this.initComponentStyles();
      this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-tree-dropdown"));
    }).prototype = ViewMaterialTreeDropdownComponent0.prototype;
    dart.addTypeTests(ViewMaterialTreeDropdownComponent0);
    ViewMaterialTreeDropdownComponent0.prototype[_is_ViewMaterialTreeDropdownComponent0_default] = true;
    dart.setMethodSignature(ViewMaterialTreeDropdownComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialTreeDropdownComponent0.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
      [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic]),
      [_handleEvent_2]: dart.fnType(dart.void, [dart.dynamic]),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(ViewMaterialTreeDropdownComponent0, () => ({
      __proto__: dart.getGetters(ViewMaterialTreeDropdownComponent0.__proto__),
      [_PopupHierarchy_4_11]: dart.dynamic,
      [_PopupRef_4_12]: dart.dynamic
    }));
    dart.setLibraryUri(ViewMaterialTreeDropdownComponent0, "package:angular_components/src/material_tree/material_tree_dropdown.template.dart");
    dart.setFieldSignature(ViewMaterialTreeDropdownComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialTreeDropdownComponent0.__proto__),
      [_viewQuery_MaterialTreeFilterComponent_0_isDirty]: dart.fieldType(core.bool),
      [_KeyboardOnlyFocusIndicatorDirective_0_5]: dart.fieldType(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
      [_PopupSourceDirective_0_6]: dart.fieldType(popup_source_directive.PopupSourceDirective),
      [_appEl_1]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_1_9]: dart.fieldType(ng_if.NgIf),
      [_appEl_2]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_2_9]: dart.fieldType(ng_if.NgIf),
      [_appEl_3]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_3_9]: dart.fieldType(ng_if.NgIf),
      [_compView_4]: dart.fieldType(material_popup$46template.ViewMaterialPopupComponent0),
      [_appEl_4]: dart.fieldType(view_container.ViewContainer),
      [_MaterialPopupComponent_4_8]: dart.fieldType(material_popup.MaterialPopupComponent),
      [__PopupHierarchy_4_11]: dart.fieldType(dart.dynamic),
      [__PopupRef_4_12]: dart.fieldType(dart.dynamic),
      [_appEl_6]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_6_9]: dart.fieldType(ng_if.NgIf),
      [_appEl_7]: dart.fieldType(view_container.ViewContainer),
      [_DeferredContentDirective_7_9]: dart.fieldType(deferred_content.DeferredContentDirective),
      [_expr_0]: dart.fieldType(core.bool),
      [_expr_3]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_6]: dart.fieldType(core.bool),
      [_el_0]: dart.fieldType(html.DivElement),
      [_el_4]: dart.fieldType(html.Element)
    }));
    return ViewMaterialTreeDropdownComponent0;
  });
  material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0 = material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0$();
  dart.defineLazy(material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, {
    /*material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.addTypeTests(material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, _is_ViewMaterialTreeDropdownComponent0_default);
  const _textBinding_1 = dart.privateName(material_tree_dropdown$46template, "_textBinding_1");
  const _is__ViewMaterialTreeDropdownComponent1_default = Symbol('_is__ViewMaterialTreeDropdownComponent1_default');
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1$ = dart.generic(T => {
    class _ViewMaterialTreeDropdownComponent1 extends embedded_view.EmbeddedView$(material_tree_dropdown.MaterialTreeDropdownComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        this.updateChildClass(html.HtmlElement._check(_el_0), "button-text");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1].element);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.placeholder));
      }
    }
    (_ViewMaterialTreeDropdownComponent1.new = function(parentView, parentIndex) {
      this[_textBinding_1] = new text_binding.TextBinding.new();
      _ViewMaterialTreeDropdownComponent1.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeDropdownComponent1.prototype;
    dart.addTypeTests(_ViewMaterialTreeDropdownComponent1);
    _ViewMaterialTreeDropdownComponent1.prototype[_is__ViewMaterialTreeDropdownComponent1_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeDropdownComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeDropdownComponent1.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeDropdownComponent1, "package:angular_components/src/material_tree/material_tree_dropdown.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeDropdownComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeDropdownComponent1.__proto__),
      [_textBinding_1]: dart.finalFieldType(text_binding.TextBinding)
    }));
    return _ViewMaterialTreeDropdownComponent1;
  });
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1 = material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1$();
  dart.addTypeTests(material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1, _is__ViewMaterialTreeDropdownComponent1_default);
  const _compView_0 = dart.privateName(material_tree_dropdown$46template, "_compView_0");
  const _MaterialIconComponent_0_5 = dart.privateName(material_tree_dropdown$46template, "_MaterialIconComponent_0_5");
  const _is__ViewMaterialTreeDropdownComponent2_default = Symbol('_is__ViewMaterialTreeDropdownComponent2_default');
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2$ = dart.generic(T => {
    class _ViewMaterialTreeDropdownComponent2 extends embedded_view.EmbeddedView$(material_tree_dropdown.MaterialTreeDropdownComponent$(T)) {
      build() {
        this[_compView_0] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootElement;
        this.updateChildClassNonHtml(_el_0, "icon");
        dom_helpers.setAttribute(_el_0, "icon", "arrow_drop_down");
        this.addShimC(_el_0);
        this[_MaterialIconComponent_0_5] = new material_icon.MaterialIconComponent.new(_el_0);
        this[_compView_0].create(this[_MaterialIconComponent_0_5]);
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
          this[_compView_0].markAsCheckOnce();
        }
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
      }
    }
    (_ViewMaterialTreeDropdownComponent2.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialIconComponent_0_5] = null;
      _ViewMaterialTreeDropdownComponent2.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeDropdownComponent2.prototype;
    dart.addTypeTests(_ViewMaterialTreeDropdownComponent2);
    _ViewMaterialTreeDropdownComponent2.prototype[_is__ViewMaterialTreeDropdownComponent2_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeDropdownComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeDropdownComponent2.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeDropdownComponent2, "package:angular_components/src/material_tree/material_tree_dropdown.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeDropdownComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeDropdownComponent2.__proto__),
      [_compView_0]: dart.fieldType(material_icon$46template.ViewMaterialIconComponent0),
      [_MaterialIconComponent_0_5]: dart.fieldType(material_icon.MaterialIconComponent)
    }));
    return _ViewMaterialTreeDropdownComponent2;
  });
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2 = material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2$();
  dart.addTypeTests(material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2, _is__ViewMaterialTreeDropdownComponent2_default);
  const _expr_1 = dart.privateName(material_tree_dropdown$46template, "_expr_1");
  const _is__ViewMaterialTreeDropdownComponent3_default = Symbol('_is__ViewMaterialTreeDropdownComponent3_default');
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3$ = dart.generic(T => {
    class _ViewMaterialTreeDropdownComponent3 extends embedded_view.EmbeddedView$(material_tree_dropdown.MaterialTreeDropdownComponent$(T)) {
      build() {
        this[_compView_0] = new material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootElement;
        this.addShimC(_el_0);
        this[_MaterialTreeFilterComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_tree_filter.MaterialTreeFilterComponent, dart.wrapType(material_tree_filter.MaterialTreeFilterComponent), dart.fn(() => new material_tree_filter.MaterialTreeFilterComponent.new(material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentView.parentIndex))), VoidToMaterialTreeFilterComponent())) : new material_tree_filter.MaterialTreeFilterComponent.new(material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentView.parentIndex)));
        this[_compView_0].create(this[_MaterialTreeFilterComponent_0_5]);
        let subscription_0 = this[_MaterialTreeFilterComponent_0_5].onFiltered.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_0)));
        this.initRootNodesAndSubscriptions(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.placeholder;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "placeholder", ""))) {
          this[_MaterialTreeFilterComponent_0_5].placeholder = currVal_0;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.filterableOptions;
        if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "filterableOptions", ""))) {
          this[_MaterialTreeFilterComponent_0_5].filterable = currVal_1;
          this[_expr_1] = currVal_1;
        }
        this[_compView_0].detectChanges();
      }
      dirtyParentQueriesInternal() {
        optimizations.unsafeCast(material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, this.parentView)[_viewQuery_MaterialTreeFilterComponent_0_isDirty] = true;
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
      }
      [_handleEvent_0]($36event) {
        let _ctx = this.ctx;
        _ctx.visible = true;
      }
    }
    (_ViewMaterialTreeDropdownComponent3.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialTreeFilterComponent_0_5] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      _ViewMaterialTreeDropdownComponent3.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeDropdownComponent3.prototype;
    dart.addTypeTests(_ViewMaterialTreeDropdownComponent3);
    _ViewMaterialTreeDropdownComponent3.prototype[_is__ViewMaterialTreeDropdownComponent3_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeDropdownComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeDropdownComponent3.__proto__),
      build: dart.fnType(dart.void, []),
      [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialTreeDropdownComponent3, "package:angular_components/src/material_tree/material_tree_dropdown.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeDropdownComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeDropdownComponent3.__proto__),
      [_compView_0]: dart.fieldType(material_tree_filter$46template.ViewMaterialTreeFilterComponent0),
      [_MaterialTreeFilterComponent_0_5]: dart.fieldType(material_tree_filter.MaterialTreeFilterComponent),
      [_expr_0]: dart.fieldType(core.String),
      [_expr_1]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeDropdownComponent3;
  });
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3 = material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3$();
  dart.addTypeTests(material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3, _is__ViewMaterialTreeDropdownComponent3_default);
  const _expr_2 = dart.privateName(material_tree_dropdown$46template, "_expr_2");
  const _is__ViewMaterialTreeDropdownComponent4_default = Symbol('_is__ViewMaterialTreeDropdownComponent4_default');
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4$ = dart.generic(T => {
    class _ViewMaterialTreeDropdownComponent4 extends embedded_view.EmbeddedView$(material_tree_dropdown.MaterialTreeDropdownComponent$(T)) {
      build() {
        this[_compView_0] = new material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootElement;
        this.updateChildClassNonHtml(_el_0, "search-box");
        dom_helpers.setAttribute(_el_0, "leadingGlyph", "search");
        this.addShimC(_el_0);
        this[_MaterialTreeFilterComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_tree_filter.MaterialTreeFilterComponent, dart.wrapType(material_tree_filter.MaterialTreeFilterComponent), dart.fn(() => new material_tree_filter.MaterialTreeFilterComponent.new(material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentView.parentIndex))), VoidToMaterialTreeFilterComponent())) : new material_tree_filter.MaterialTreeFilterComponent.new(material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentView.parentIndex)));
        this[_compView_0].create(this[_MaterialTreeFilterComponent_0_5]);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.firstCheck;
        if (dart.test(firstCheck)) {
          this[_MaterialTreeFilterComponent_0_5].leadingGlyph = "search";
        }
        let currVal_1 = _ctx.placeholder;
        if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "placeholder", ""))) {
          this[_MaterialTreeFilterComponent_0_5].placeholder = currVal_1;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = _ctx.filterableOptions;
        if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "filterableOptions", ""))) {
          this[_MaterialTreeFilterComponent_0_5].filterable = currVal_2;
          this[_expr_2] = currVal_2;
        }
        this[_compView_0].detectChanges();
      }
      dirtyParentQueriesInternal() {
        optimizations.unsafeCast(material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, this.parentView)[_viewQuery_MaterialTreeFilterComponent_0_isDirty] = true;
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
      }
    }
    (_ViewMaterialTreeDropdownComponent4.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialTreeFilterComponent_0_5] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      _ViewMaterialTreeDropdownComponent4.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeDropdownComponent4.prototype;
    dart.addTypeTests(_ViewMaterialTreeDropdownComponent4);
    _ViewMaterialTreeDropdownComponent4.prototype[_is__ViewMaterialTreeDropdownComponent4_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeDropdownComponent4, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeDropdownComponent4.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeDropdownComponent4, "package:angular_components/src/material_tree/material_tree_dropdown.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeDropdownComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeDropdownComponent4.__proto__),
      [_compView_0]: dart.fieldType(material_tree_filter$46template.ViewMaterialTreeFilterComponent0),
      [_MaterialTreeFilterComponent_0_5]: dart.fieldType(material_tree_filter.MaterialTreeFilterComponent),
      [_expr_1]: dart.fieldType(core.String),
      [_expr_2]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeDropdownComponent4;
  });
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4 = material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4$();
  dart.addTypeTests(material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4, _is__ViewMaterialTreeDropdownComponent4_default);
  const _MaterialTreeComponent_0_5 = dart.privateName(material_tree_dropdown$46template, "_MaterialTreeComponent_0_5");
  const _expr_5 = dart.privateName(material_tree_dropdown$46template, "_expr_5");
  const _expr_7 = dart.privateName(material_tree_dropdown$46template, "_expr_7");
  const _is__ViewMaterialTreeDropdownComponent5_default = Symbol('_is__ViewMaterialTreeDropdownComponent5_default');
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5$ = dart.generic(T => {
    let ViewMaterialTreeComponent0OfT = () => (ViewMaterialTreeComponent0OfT = dart.constFn(material_tree_impl$46template.ViewMaterialTreeComponent0$(T)))();
    let MaterialTreeComponentOfT = () => (MaterialTreeComponentOfT = dart.constFn(material_tree_impl.MaterialTreeComponent$(T)))();
    let VoidToMaterialTreeComponentOfT = () => (VoidToMaterialTreeComponentOfT = dart.constFn(dart.fnType(MaterialTreeComponentOfT(), [])))();
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    class _ViewMaterialTreeDropdownComponent5 extends embedded_view.EmbeddedView$(material_tree_dropdown.MaterialTreeDropdownComponent$(T)) {
      build() {
        this[_compView_0] = new (ViewMaterialTreeComponent0OfT()).new(this, 0);
        let _el_0 = this[_compView_0].rootElement;
        this.addShimC(_el_0);
        this[_MaterialTreeComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeComponentOfT(), dart.wrapType(material_tree_impl.MaterialTreeComponent), dart.fn(() => new (MaterialTreeComponentOfT()).new(material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentView.parentIndex)), null), VoidToMaterialTreeComponentOfT())) : new (MaterialTreeComponentOfT()).new(material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentView.parentIndex)), null);
        this[_compView_0].create(this[_MaterialTreeComponent_0_5]);
        this.initRootNode(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(material_tree_root.MaterialTreeRoot) && 0 === nodeIndex) {
          return this[_MaterialTreeComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.firstCheck;
        let currVal_0 = _ctx.expandAll;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "expandAll", ""))) {
          this[_MaterialTreeComponent_0_5].expandAll = currVal_0;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.allowParentSingleSelection;
        if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "allowParentSingleSelection", ""))) {
          this[_MaterialTreeComponent_0_5].allowParentSingleSelection = currVal_1;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = _ctx.allowParentMultiSelection;
        if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "allowParentMultiSelection", ""))) {
          this[_MaterialTreeComponent_0_5].allowParentMultiSelection = currVal_2;
          this[_expr_2] = currVal_2;
        }
        let currVal_3 = _ctx.allowDeselectInHierarchy;
        if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "allowDeselectInHierarchy", ""))) {
          this[_MaterialTreeComponent_0_5].allowDeselectInHierarchy = currVal_3;
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = _ctx.componentRenderer;
        if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "componentRenderer", ""))) {
          this[_MaterialTreeComponent_0_5].componentRenderer = currVal_4;
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = TToString()._check(_ctx.itemRenderer);
        if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "itemRenderer", ""))) {
          this[_MaterialTreeComponent_0_5].itemRenderer = currVal_5;
          this[_expr_5] = currVal_5;
        }
        let currVal_6 = _ctx.options;
        if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "options", ""))) {
          this[_MaterialTreeComponent_0_5].options = currVal_6;
          this[_expr_6] = currVal_6;
        }
        let currVal_7 = _ctx.selection;
        if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "selection", ""))) {
          this[_MaterialTreeComponent_0_5].selection = currVal_7;
          this[_expr_7] = currVal_7;
        }
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
      }
    }
    (_ViewMaterialTreeDropdownComponent5.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialTreeComponent_0_5] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      this[_expr_6] = null;
      this[_expr_7] = null;
      _ViewMaterialTreeDropdownComponent5.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeDropdownComponent5.prototype;
    dart.addTypeTests(_ViewMaterialTreeDropdownComponent5);
    _ViewMaterialTreeDropdownComponent5.prototype[_is__ViewMaterialTreeDropdownComponent5_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeDropdownComponent5, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeDropdownComponent5.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialTreeDropdownComponent5, "package:angular_components/src/material_tree/material_tree_dropdown.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeDropdownComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeDropdownComponent5.__proto__),
      [_compView_0]: dart.fieldType(material_tree_impl$46template.ViewMaterialTreeComponent0$(T)),
      [_MaterialTreeComponent_0_5]: dart.fieldType(material_tree_impl.MaterialTreeComponent$(T)),
      [_expr_0]: dart.fieldType(core.bool),
      [_expr_1]: dart.fieldType(core.bool),
      [_expr_2]: dart.fieldType(core.bool),
      [_expr_3]: dart.fieldType(core.bool),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(dart.dynamic),
      [_expr_6]: dart.fieldType(dart.dynamic),
      [_expr_7]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeDropdownComponent5;
  });
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5 = material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5$();
  dart.addTypeTests(material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5, _is__ViewMaterialTreeDropdownComponent5_default);
  const _is__ViewMaterialTreeDropdownComponentHost0_default = Symbol('_is__ViewMaterialTreeDropdownComponentHost0_default');
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0$ = dart.generic(T => {
    let ViewMaterialTreeDropdownComponent0OfT = () => (ViewMaterialTreeDropdownComponent0OfT = dart.constFn(material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0$(T)))();
    let MaterialTreeDropdownComponentOfT = () => (MaterialTreeDropdownComponentOfT = dart.constFn(material_tree_dropdown.MaterialTreeDropdownComponent$(T)))();
    let VoidToMaterialTreeDropdownComponentOfT = () => (VoidToMaterialTreeDropdownComponentOfT = dart.constFn(dart.fnType(MaterialTreeDropdownComponentOfT(), [])))();
    class _ViewMaterialTreeDropdownComponentHost0 extends host_view.HostView$(material_tree_dropdown.MaterialTreeDropdownComponent$(T)) {
      build() {
        this.componentView = new (ViewMaterialTreeDropdownComponent0OfT()).new(this, 0);
        let _el_0 = this.componentView.rootElement;
        this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeDropdownComponentOfT(), dart.wrapType(material_tree_dropdown.MaterialTreeDropdownComponent), dart.fn(() => new (MaterialTreeDropdownComponentOfT()).new(dom_service.DomService._check(this.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), null, _el_0), VoidToMaterialTreeDropdownComponentOfT())) : new (MaterialTreeDropdownComponentOfT()).new(dom_service.DomService._check(this.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), null, _el_0);
        this.initRootNode(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(material_tree_dropdown.MaterialTreeDropdownComponent) || token === dart.wrapType(focus_interface.Focusable) || token === dart.wrapType(material_tree_root.MaterialTreeRoot)) && 0 === nodeIndex) {
          return this.component;
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let firstCheck = this.firstCheck;
        if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
          this.component.ngOnInit();
        }
        this.componentView.detectChanges();
      }
    }
    (_ViewMaterialTreeDropdownComponentHost0.new = function(injector) {
      _ViewMaterialTreeDropdownComponentHost0.__proto__.new.call(this, injector);
      ;
    }).prototype = _ViewMaterialTreeDropdownComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialTreeDropdownComponentHost0);
    _ViewMaterialTreeDropdownComponentHost0.prototype[_is__ViewMaterialTreeDropdownComponentHost0_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeDropdownComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeDropdownComponentHost0.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialTreeDropdownComponentHost0, "package:angular_components/src/material_tree/material_tree_dropdown.template.dart");
    return _ViewMaterialTreeDropdownComponentHost0;
  });
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0 = material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0$();
  dart.addTypeTests(material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0, _is__ViewMaterialTreeDropdownComponentHost0_default);
  material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent1 = function viewFactory_MaterialTreeDropdownComponent1(T, parentView, parentIndex) {
    return new (material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1$(T)).new(parentView, parentIndex);
  };
  material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent2 = function viewFactory_MaterialTreeDropdownComponent2(T, parentView, parentIndex) {
    return new (material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2$(T)).new(parentView, parentIndex);
  };
  material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent3 = function viewFactory_MaterialTreeDropdownComponent3(T, parentView, parentIndex) {
    return new (material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3$(T)).new(parentView, parentIndex);
  };
  material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent4 = function viewFactory_MaterialTreeDropdownComponent4(T, parentView, parentIndex) {
    return new (material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4$(T)).new(parentView, parentIndex);
  };
  material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent5 = function viewFactory_MaterialTreeDropdownComponent5(T, parentView, parentIndex) {
    return new (material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5$(T)).new(parentView, parentIndex);
  };
  material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponentHost0 = function viewFactory_MaterialTreeDropdownComponentHost0(T, injector) {
    return new (material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0$(T)).new(injector);
  };
  material_tree_dropdown$46template.initReflector = function initReflector() {
    if (dart.test(material_tree_dropdown$46template._visited)) {
      return;
    }
    material_tree_dropdown$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_tree_dropdown.MaterialTreeDropdownComponent), material_tree_dropdown$46template.MaterialTreeDropdownComponentNgFactory);
    material_tree_impl$46template.initReflector();
    angular$46template.initReflector();
    deferred_content$46template.initReflector();
    focus$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    alignment$46template.initReflector();
    material_icon$46template.initReflector();
    material_popup$46template.initReflector();
    material_dropdown_base$46template.initReflector();
    select$46template.initReflector();
    selection_container$46template.initReflector();
    selection_model$46template.initReflector();
    selection_options$46template.initReflector();
    has_factory$46template.initReflector();
    has_renderer$46template.initReflector();
    material_tree_filter$46template.initReflector();
    material_tree_root$46template.initReflector();
    css$46template.initReflector();
    dom_service$46template.initReflector();
  };
  dart.copyProperties(material_tree_dropdown$46template, {
    get MaterialTreeDropdownComponentNgFactory() {
      return material_tree_dropdown$46template._MaterialTreeDropdownComponentNgFactory;
    }
  });
  let C6;
  let C5;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C4;
  dart.defineLazy(material_tree_dropdown$46template, {
    /*material_tree_dropdown$46template.styles$MaterialTreeDropdownComponent*/get styles$MaterialTreeDropdownComponent() {
      return [material_tree_dropdown$46scss$46css$46shim.styles];
    },
    /*material_tree_dropdown$46template._MaterialTreeDropdownComponentNgFactory*/get _MaterialTreeDropdownComponentNgFactory() {
      return C4 || CT.C4;
    },
    /*material_tree_dropdown$46template.styles$MaterialTreeDropdownComponentHost*/get styles$MaterialTreeDropdownComponentHost() {
      return C3 || CT.C3;
    },
    /*material_tree_dropdown$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  const _viewQuery_MaterialTreeGroupComponent_0_isDirty = dart.privateName(material_tree_impl$46template, "_viewQuery_MaterialTreeGroupComponent_0_isDirty");
  const _appEl_0 = dart.privateName(material_tree_impl$46template, "_appEl_0");
  const _NgIf_0_9 = dart.privateName(material_tree_impl$46template, "_NgIf_0_9");
  const _appEl_1$ = dart.privateName(material_tree_impl$46template, "_appEl_1");
  const _NgIf_1_9$ = dart.privateName(material_tree_impl$46template, "_NgIf_1_9");
  const _expr_0$ = dart.privateName(material_tree_impl$46template, "_expr_0");
  const _expr_1$ = dart.privateName(material_tree_impl$46template, "_expr_1");
  const _expr_2$ = dart.privateName(material_tree_impl$46template, "_expr_2");
  const _MaterialTreeGroupComponent_0_5 = dart.privateName(material_tree_impl$46template, "_MaterialTreeGroupComponent_0_5");
  const _is_ViewMaterialTreeComponent0_default = Symbol('_is_ViewMaterialTreeComponent0_default');
  material_tree_impl$46template.ViewMaterialTreeComponent0$ = dart.generic(T => {
    class ViewMaterialTreeComponent0 extends component_view.ComponentView$(material_tree_impl.MaterialTreeComponent$(T)) {
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/material_tree_impl.dart" : null;
      }
      build() {
        let parentRenderNode = this.initViewRoot();
        let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_tree_impl$46template.viewFactory_MaterialTreeComponent1(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let _anchor_1 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_1$] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$], dart.fn((parentView, parentIndex) => material_tree_impl$46template.viewFactory_MaterialTreeComponent3(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_1_9$] = new ng_if.NgIf.new(this[_appEl_1$], _TemplateRef_1_8);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_0_9].ngIf = _ctx.supportsHierarchy;
        this[_NgIf_1_9$].ngIf = !dart.test(_ctx.supportsHierarchy);
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_1$].detectChangesInNestedViews();
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          if (dart.test(this[_viewQuery_MaterialTreeGroupComponent_0_isDirty])) {
            _ctx.treeGroupNodes = this[_appEl_0].mapNestedViews(material_tree_group.MaterialTreeGroupComponent, material_tree_impl$46template._ViewMaterialTreeComponent1, dart.fn(nestedView => nestedView[_appEl_0].mapNestedViews(material_tree_group.MaterialTreeGroupComponent, material_tree_impl$46template._ViewMaterialTreeComponent2, dart.fn(nestedView => JSArrayOfMaterialTreeGroupComponent().of([nestedView[_MaterialTreeGroupComponent_0_5]]), _ViewMaterialTreeComponent2ToListOfMaterialTreeGroupComponent())), _ViewMaterialTreeComponent1ToListOfMaterialTreeGroupComponent()));
            this[_viewQuery_MaterialTreeGroupComponent_0_isDirty] = false;
          }
        }
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_appEl_1$].destroyNestedViews();
      }
      detectHostChanges(firstCheck) {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.role;
        if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, null, null))) {
          dom_helpers.updateAttribute(this.rootElement, "role", currVal_0);
          this[_expr_0$] = currVal_0;
        }
        let currVal_1 = _ctx.hostMultiselectable;
        if (dart.test(check_binding.checkBinding(this[_expr_1$], currVal_1, null, null))) {
          dom_helpers.updateAttribute(this.rootElement, "aria-multiselectable", currVal_1);
          this[_expr_1$] = currVal_1;
        }
        let currVal_2 = _ctx.hostReadonly;
        if (dart.test(check_binding.checkBinding(this[_expr_2$], currVal_2, null, null))) {
          dom_helpers.updateAttribute(this.rootElement, "aria-readonly", currVal_2);
          this[_expr_2$] = currVal_2;
        }
      }
      initComponentStyles() {
        let styles = material_tree_impl$46template.ViewMaterialTreeComponent0._componentStyles;
        if (styles == null) {
          material_tree_impl$46template.ViewMaterialTreeComponent0._componentStyles = styles = material_tree_impl$46template.ViewMaterialTreeComponent0._componentStyles = new style_encapsulation._UnscopedComponentStyles.new(material_tree_impl$46template.styles$MaterialTreeComponent, material_tree_impl$46template.ViewMaterialTreeComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialTreeComponent0.new = function(parentView, parentIndex) {
      this[_viewQuery_MaterialTreeGroupComponent_0_isDirty] = true;
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_1$] = null;
      this[_NgIf_1_9$] = null;
      this[_expr_0$] = null;
      this[_expr_1$] = null;
      this[_expr_2$] = null;
      ViewMaterialTreeComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
      this.initComponentStyles();
      this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-tree"));
    }).prototype = ViewMaterialTreeComponent0.prototype;
    dart.addTypeTests(ViewMaterialTreeComponent0);
    ViewMaterialTreeComponent0.prototype[_is_ViewMaterialTreeComponent0_default] = true;
    dart.setMethodSignature(ViewMaterialTreeComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialTreeComponent0.__proto__),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(ViewMaterialTreeComponent0, "package:angular_components/src/material_tree/material_tree_impl.template.dart");
    dart.setFieldSignature(ViewMaterialTreeComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialTreeComponent0.__proto__),
      [_viewQuery_MaterialTreeGroupComponent_0_isDirty]: dart.fieldType(core.bool),
      [_appEl_0]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_0_9]: dart.fieldType(ng_if.NgIf),
      [_appEl_1$]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_1_9$]: dart.fieldType(ng_if.NgIf),
      [_expr_0$]: dart.fieldType(dart.dynamic),
      [_expr_1$]: dart.fieldType(dart.dynamic),
      [_expr_2$]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialTreeComponent0;
  });
  material_tree_impl$46template.ViewMaterialTreeComponent0 = material_tree_impl$46template.ViewMaterialTreeComponent0$();
  dart.defineLazy(material_tree_impl$46template.ViewMaterialTreeComponent0, {
    /*material_tree_impl$46template.ViewMaterialTreeComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.addTypeTests(material_tree_impl$46template.ViewMaterialTreeComponent0, _is_ViewMaterialTreeComponent0_default);
  const _NgFor_0_9 = dart.privateName(material_tree_impl$46template, "_NgFor_0_9");
  const _is__ViewMaterialTreeComponent1_default = Symbol('_is__ViewMaterialTreeComponent1_default');
  material_tree_impl$46template._ViewMaterialTreeComponent1$ = dart.generic(T => {
    class _ViewMaterialTreeComponent1 extends embedded_view.EmbeddedView$(material_tree_impl.MaterialTreeComponent$(T)) {
      build() {
        let _anchor_0 = dom_helpers.createAnchor();
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_tree_impl$46template.viewFactory_MaterialTreeComponent2(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgFor_0_9] = new ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
        this.initRootNode(this[_appEl_0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.options.optionGroups;
        if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "options.optionGroups", ""))) {
          this[_NgFor_0_9].ngForOf = currVal_0;
          this[_expr_0$] = currVal_0;
        }
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          this[_NgFor_0_9].ngDoCheck();
        }
        this[_appEl_0].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeComponent1.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgFor_0_9] = null;
      this[_expr_0$] = null;
      _ViewMaterialTreeComponent1.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeComponent1.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent1);
    _ViewMaterialTreeComponent1.prototype[_is__ViewMaterialTreeComponent1_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponent1.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeComponent1, "package:angular_components/src/material_tree/material_tree_impl.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent1.__proto__),
      [_appEl_0]: dart.fieldType(view_container.ViewContainer),
      [_NgFor_0_9]: dart.fieldType(ng_for.NgFor),
      [_expr_0$]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent1;
  });
  material_tree_impl$46template._ViewMaterialTreeComponent1 = material_tree_impl$46template._ViewMaterialTreeComponent1$();
  dart.addTypeTests(material_tree_impl$46template._ViewMaterialTreeComponent1, _is__ViewMaterialTreeComponent1_default);
  const _compView_0$ = dart.privateName(material_tree_impl$46template, "_compView_0");
  const _expr_3$ = dart.privateName(material_tree_impl$46template, "_expr_3");
  const _expr_4$ = dart.privateName(material_tree_impl$46template, "_expr_4");
  const _expr_5$ = dart.privateName(material_tree_impl$46template, "_expr_5");
  let C7;
  const _is__ViewMaterialTreeComponent2_default = Symbol('_is__ViewMaterialTreeComponent2_default');
  material_tree_impl$46template._ViewMaterialTreeComponent2$ = dart.generic(T => {
    let ViewMaterialTreeGroupComponent0OfT = () => (ViewMaterialTreeGroupComponent0OfT = dart.constFn(material_tree_group$46template.ViewMaterialTreeGroupComponent0$(T)))();
    let MaterialTreeGroupComponentOfT = () => (MaterialTreeGroupComponentOfT = dart.constFn(material_tree_group.MaterialTreeGroupComponent$(T)))();
    let VoidToMaterialTreeGroupComponentOfT = () => (VoidToMaterialTreeGroupComponentOfT = dart.constFn(dart.fnType(MaterialTreeGroupComponentOfT(), [])))();
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(selection_options.OptionGroup$(T)))();
    class _ViewMaterialTreeComponent2 extends embedded_view.EmbeddedView$(material_tree_impl.MaterialTreeComponent$(T)) {
      build() {
        this[_compView_0$] = new (ViewMaterialTreeGroupComponent0OfT()).new(this, 0);
        let _el_0 = this[_compView_0$].rootElement;
        this[_MaterialTreeGroupComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeGroupComponentOfT(), dart.wrapType(material_tree_group.MaterialTreeGroupComponent), dart.fn(() => new (MaterialTreeGroupComponentOfT()).new(material_tree_root.MaterialTreeRoot._check(this.parentView.injectorGet(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentIndex)), this[_compView_0$], material_dropdown_base.DropdownHandle._check(this.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentIndex)), core.int._check(this.parentView.injectorGetOptional(C7 || CT.C7, this.parentIndex))), VoidToMaterialTreeGroupComponentOfT())) : new (MaterialTreeGroupComponentOfT()).new(material_tree_root.MaterialTreeRoot._check(this.parentView.injectorGet(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentIndex)), this[_compView_0$], material_dropdown_base.DropdownHandle._check(this.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentIndex)), core.int._check(this.parentView.injectorGetOptional(C7 || CT.C7, this.parentIndex)));
        this[_compView_0$].create(this[_MaterialTreeGroupComponent_0_5]);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.firstCheck;
        let local_group = optimizations.unsafeCast(OptionGroupOfT(), this.locals[$_get]("$implicit"));
        let local_optionIndex = optimizations.unsafeCast(core.int, this.locals[$_get]("index"));
        let currVal_0 = _ctx.shouldExpand(local_group, local_optionIndex);
        if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "shouldExpand(group, optionIndex)", ""))) {
          this[_MaterialTreeGroupComponent_0_5].expandAll = currVal_0;
          this[_expr_0$] = currVal_0;
        }
        let currVal_1 = local_group;
        if (dart.test(check_binding.checkBinding(this[_expr_1$], currVal_1, "group", ""))) {
          this[_MaterialTreeGroupComponent_0_5].group = currVal_1;
          this[_expr_1$] = currVal_1;
        }
        let currVal_2 = _ctx.allowParentSingleSelection;
        if (dart.test(check_binding.checkBinding(this[_expr_2$], currVal_2, "allowParentSingleSelection", ""))) {
          this[_MaterialTreeGroupComponent_0_5].allowParentSingleSelection = currVal_2;
          this[_expr_2$] = currVal_2;
        }
        let currVal_3 = _ctx.allowParentMultiSelection;
        if (dart.test(check_binding.checkBinding(this[_expr_3$], currVal_3, "allowParentMultiSelection", ""))) {
          this[_MaterialTreeGroupComponent_0_5].allowParentMultiSelection = currVal_3;
          this[_expr_3$] = currVal_3;
        }
        let currVal_4 = _ctx.allowDeselectInHierarchy;
        if (dart.test(check_binding.checkBinding(this[_expr_4$], currVal_4, "allowDeselectInHierarchy", ""))) {
          this[_MaterialTreeGroupComponent_0_5].deselectOnTrigger = currVal_4;
          this[_expr_4$] = currVal_4;
        }
        let currVal_5 = _ctx.maxInitialOptionsShown(local_group, local_optionIndex);
        if (dart.test(check_binding.checkBinding(this[_expr_5$], currVal_5, "maxInitialOptionsShown(group, optionIndex)", ""))) {
          this[_MaterialTreeGroupComponent_0_5].maxInitialOptionsShown = currVal_5;
          this[_expr_5$] = currVal_5;
        }
        this[_compView_0$].detectHostChanges(firstCheck);
        this[_compView_0$].detectChanges();
      }
      dirtyParentQueriesInternal() {
        optimizations.unsafeCast(material_tree_impl$46template.ViewMaterialTreeComponent0, this.parentView.parentView)[_viewQuery_MaterialTreeGroupComponent_0_isDirty] = true;
      }
      destroyInternal() {
        this[_compView_0$].destroyInternalState();
        this[_MaterialTreeGroupComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeComponent2.new = function(parentView, parentIndex) {
      this[_compView_0$] = null;
      this[_MaterialTreeGroupComponent_0_5] = null;
      this[_expr_0$] = null;
      this[_expr_1$] = null;
      this[_expr_2$] = null;
      this[_expr_3$] = null;
      this[_expr_4$] = null;
      this[_expr_5$] = null;
      _ViewMaterialTreeComponent2.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeComponent2.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent2);
    _ViewMaterialTreeComponent2.prototype[_is__ViewMaterialTreeComponent2_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponent2.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeComponent2, "package:angular_components/src/material_tree/material_tree_impl.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent2.__proto__),
      [_compView_0$]: dart.fieldType(material_tree_group$46template.ViewMaterialTreeGroupComponent0$(T)),
      [_MaterialTreeGroupComponent_0_5]: dart.fieldType(material_tree_group.MaterialTreeGroupComponent$(T)),
      [_expr_0$]: dart.fieldType(core.bool),
      [_expr_1$]: dart.fieldType(dart.dynamic),
      [_expr_2$]: dart.fieldType(core.bool),
      [_expr_3$]: dart.fieldType(core.bool),
      [_expr_4$]: dart.fieldType(core.bool),
      [_expr_5$]: dart.fieldType(core.int)
    }));
    return _ViewMaterialTreeComponent2;
  });
  material_tree_impl$46template._ViewMaterialTreeComponent2 = material_tree_impl$46template._ViewMaterialTreeComponent2$();
  dart.addTypeTests(material_tree_impl$46template._ViewMaterialTreeComponent2, _is__ViewMaterialTreeComponent2_default);
  const _appEl_2$ = dart.privateName(material_tree_impl$46template, "_appEl_2");
  const _NgIf_2_9$ = dart.privateName(material_tree_impl$46template, "_NgIf_2_9");
  const _is__ViewMaterialTreeComponent3_default = Symbol('_is__ViewMaterialTreeComponent3_default');
  material_tree_impl$46template._ViewMaterialTreeComponent3$ = dart.generic(T => {
    class _ViewMaterialTreeComponent3 extends embedded_view.EmbeddedView$(material_tree_impl.MaterialTreeComponent$(T)) {
      build() {
        let _anchor_0 = dom_helpers.createAnchor();
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_tree_impl$46template.viewFactory_MaterialTreeComponent4(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let _anchor_1 = dom_helpers.createAnchor();
        this[_appEl_1$] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$], dart.fn((parentView, parentIndex) => material_tree_impl$46template.viewFactory_MaterialTreeComponent6(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_1_9$] = new ng_if.NgIf.new(this[_appEl_1$], _TemplateRef_1_8);
        let _anchor_2 = dom_helpers.createAnchor();
        this[_appEl_2$] = new view_container.ViewContainer.new(2, null, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$], dart.fn((parentView, parentIndex) => material_tree_impl$46template.viewFactory_MaterialTreeComponent8(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_2_9$] = new ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
        this.initRootNodesAndSubscriptions(JSArrayOfObject().of([this[_appEl_0], this[_appEl_1$], this[_appEl_2$]]), null);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_0_9].ngIf = _ctx.showFlatList;
        this[_NgIf_1_9$].ngIf = _ctx.showFlatRadio;
        this[_NgIf_2_9$].ngIf = _ctx.showFlatCheck;
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_1$].detectChangesInNestedViews();
        this[_appEl_2$].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_appEl_1$].destroyNestedViews();
        this[_appEl_2$].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeComponent3.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_1$] = null;
      this[_NgIf_1_9$] = null;
      this[_appEl_2$] = null;
      this[_NgIf_2_9$] = null;
      _ViewMaterialTreeComponent3.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeComponent3.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent3);
    _ViewMaterialTreeComponent3.prototype[_is__ViewMaterialTreeComponent3_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponent3.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeComponent3, "package:angular_components/src/material_tree/material_tree_impl.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent3.__proto__),
      [_appEl_0]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_0_9]: dart.fieldType(ng_if.NgIf),
      [_appEl_1$]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_1_9$]: dart.fieldType(ng_if.NgIf),
      [_appEl_2$]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_2_9$]: dart.fieldType(ng_if.NgIf)
    }));
    return _ViewMaterialTreeComponent3;
  });
  material_tree_impl$46template._ViewMaterialTreeComponent3 = material_tree_impl$46template._ViewMaterialTreeComponent3$();
  dart.addTypeTests(material_tree_impl$46template._ViewMaterialTreeComponent3, _is__ViewMaterialTreeComponent3_default);
  const _is__ViewMaterialTreeComponent4_default = Symbol('_is__ViewMaterialTreeComponent4_default');
  material_tree_impl$46template._ViewMaterialTreeComponent4$ = dart.generic(T => {
    class _ViewMaterialTreeComponent4 extends embedded_view.EmbeddedView$(material_tree_impl.MaterialTreeComponent$(T)) {
      build() {
        let _anchor_0 = dom_helpers.createAnchor();
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_tree_impl$46template.viewFactory_MaterialTreeComponent5(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgFor_0_9] = new ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
        this.initRootNode(this[_appEl_0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.options.optionGroups;
        if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "options.optionGroups", ""))) {
          this[_NgFor_0_9].ngForOf = currVal_0;
          this[_expr_0$] = currVal_0;
        }
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          this[_NgFor_0_9].ngDoCheck();
        }
        this[_appEl_0].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeComponent4.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgFor_0_9] = null;
      this[_expr_0$] = null;
      _ViewMaterialTreeComponent4.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeComponent4.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent4);
    _ViewMaterialTreeComponent4.prototype[_is__ViewMaterialTreeComponent4_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeComponent4, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponent4.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeComponent4, "package:angular_components/src/material_tree/material_tree_impl.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent4.__proto__),
      [_appEl_0]: dart.fieldType(view_container.ViewContainer),
      [_NgFor_0_9]: dart.fieldType(ng_for.NgFor),
      [_expr_0$]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent4;
  });
  material_tree_impl$46template._ViewMaterialTreeComponent4 = material_tree_impl$46template._ViewMaterialTreeComponent4$();
  dart.addTypeTests(material_tree_impl$46template._ViewMaterialTreeComponent4, _is__ViewMaterialTreeComponent4_default);
  const _MaterialTreeGroupFlatListComponent_0_5 = dart.privateName(material_tree_impl$46template, "_MaterialTreeGroupFlatListComponent_0_5");
  const _is__ViewMaterialTreeComponent5_default = Symbol('_is__ViewMaterialTreeComponent5_default');
  material_tree_impl$46template._ViewMaterialTreeComponent5$ = dart.generic(T => {
    let ViewMaterialTreeGroupFlatListComponent0OfT = () => (ViewMaterialTreeGroupFlatListComponent0OfT = dart.constFn(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0$(T)))();
    let MaterialTreeGroupFlatListComponentOfT = () => (MaterialTreeGroupFlatListComponentOfT = dart.constFn(material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)))();
    let MaterialTreeRootOfT = () => (MaterialTreeRootOfT = dart.constFn(material_tree_root.MaterialTreeRoot$(T)))();
    let VoidToMaterialTreeGroupFlatListComponentOfT = () => (VoidToMaterialTreeGroupFlatListComponentOfT = dart.constFn(dart.fnType(MaterialTreeGroupFlatListComponentOfT(), [])))();
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(selection_options.OptionGroup$(T)))();
    class _ViewMaterialTreeComponent5 extends embedded_view.EmbeddedView$(material_tree_impl.MaterialTreeComponent$(T)) {
      build() {
        this[_compView_0$] = new (ViewMaterialTreeGroupFlatListComponent0OfT()).new(this, 0);
        let _el_0 = this[_compView_0$].rootElement;
        this[_MaterialTreeGroupFlatListComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeGroupFlatListComponentOfT(), dart.wrapType(material_tree_group_flat.MaterialTreeGroupFlatListComponent), dart.fn(() => new (MaterialTreeGroupFlatListComponentOfT()).new(MaterialTreeRootOfT()._check(this.parentView.injectorGet(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentIndex)), this[_compView_0$]), VoidToMaterialTreeGroupFlatListComponentOfT())) : new (MaterialTreeGroupFlatListComponentOfT()).new(MaterialTreeRootOfT()._check(this.parentView.injectorGet(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentIndex)), this[_compView_0$]);
        this[_compView_0$].create(this[_MaterialTreeGroupFlatListComponent_0_5]);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let firstCheck = this.firstCheck;
        let local_group = optimizations.unsafeCast(OptionGroupOfT(), this.locals[$_get]("$implicit"));
        let currVal_0 = local_group;
        if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "group", ""))) {
          this[_MaterialTreeGroupFlatListComponent_0_5].group = currVal_0;
          this[_expr_0$] = currVal_0;
        }
        this[_compView_0$].detectHostChanges(firstCheck);
        this[_compView_0$].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$].destroyInternalState();
      }
    }
    (_ViewMaterialTreeComponent5.new = function(parentView, parentIndex) {
      this[_compView_0$] = null;
      this[_MaterialTreeGroupFlatListComponent_0_5] = null;
      this[_expr_0$] = null;
      _ViewMaterialTreeComponent5.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeComponent5.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent5);
    _ViewMaterialTreeComponent5.prototype[_is__ViewMaterialTreeComponent5_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeComponent5, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponent5.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeComponent5, "package:angular_components/src/material_tree/material_tree_impl.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent5.__proto__),
      [_compView_0$]: dart.fieldType(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0$(T)),
      [_MaterialTreeGroupFlatListComponent_0_5]: dart.fieldType(material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)),
      [_expr_0$]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent5;
  });
  material_tree_impl$46template._ViewMaterialTreeComponent5 = material_tree_impl$46template._ViewMaterialTreeComponent5$();
  dart.addTypeTests(material_tree_impl$46template._ViewMaterialTreeComponent5, _is__ViewMaterialTreeComponent5_default);
  const _is__ViewMaterialTreeComponent6_default = Symbol('_is__ViewMaterialTreeComponent6_default');
  material_tree_impl$46template._ViewMaterialTreeComponent6$ = dart.generic(T => {
    class _ViewMaterialTreeComponent6 extends embedded_view.EmbeddedView$(material_tree_impl.MaterialTreeComponent$(T)) {
      build() {
        let _anchor_0 = dom_helpers.createAnchor();
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_tree_impl$46template.viewFactory_MaterialTreeComponent7(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgFor_0_9] = new ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
        this.initRootNode(this[_appEl_0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.options.optionGroups;
        if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "options.optionGroups", ""))) {
          this[_NgFor_0_9].ngForOf = currVal_0;
          this[_expr_0$] = currVal_0;
        }
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          this[_NgFor_0_9].ngDoCheck();
        }
        this[_appEl_0].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeComponent6.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgFor_0_9] = null;
      this[_expr_0$] = null;
      _ViewMaterialTreeComponent6.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeComponent6.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent6);
    _ViewMaterialTreeComponent6.prototype[_is__ViewMaterialTreeComponent6_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeComponent6, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponent6.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeComponent6, "package:angular_components/src/material_tree/material_tree_impl.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeComponent6, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent6.__proto__),
      [_appEl_0]: dart.fieldType(view_container.ViewContainer),
      [_NgFor_0_9]: dart.fieldType(ng_for.NgFor),
      [_expr_0$]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent6;
  });
  material_tree_impl$46template._ViewMaterialTreeComponent6 = material_tree_impl$46template._ViewMaterialTreeComponent6$();
  dart.addTypeTests(material_tree_impl$46template._ViewMaterialTreeComponent6, _is__ViewMaterialTreeComponent6_default);
  const _MaterialTreeGroupFlatRadioComponent_0_5 = dart.privateName(material_tree_impl$46template, "_MaterialTreeGroupFlatRadioComponent_0_5");
  const _is__ViewMaterialTreeComponent7_default = Symbol('_is__ViewMaterialTreeComponent7_default');
  material_tree_impl$46template._ViewMaterialTreeComponent7$ = dart.generic(T => {
    let ViewMaterialTreeGroupFlatRadioComponent0OfT = () => (ViewMaterialTreeGroupFlatRadioComponent0OfT = dart.constFn(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0$(T)))();
    let MaterialTreeGroupFlatRadioComponentOfT = () => (MaterialTreeGroupFlatRadioComponentOfT = dart.constFn(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)))();
    let MaterialTreeRootOfT = () => (MaterialTreeRootOfT = dart.constFn(material_tree_root.MaterialTreeRoot$(T)))();
    let VoidToMaterialTreeGroupFlatRadioComponentOfT = () => (VoidToMaterialTreeGroupFlatRadioComponentOfT = dart.constFn(dart.fnType(MaterialTreeGroupFlatRadioComponentOfT(), [])))();
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(selection_options.OptionGroup$(T)))();
    class _ViewMaterialTreeComponent7 extends embedded_view.EmbeddedView$(material_tree_impl.MaterialTreeComponent$(T)) {
      build() {
        this[_compView_0$] = new (ViewMaterialTreeGroupFlatRadioComponent0OfT()).new(this, 0);
        let _el_0 = this[_compView_0$].rootElement;
        this[_MaterialTreeGroupFlatRadioComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeGroupFlatRadioComponentOfT(), dart.wrapType(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), dart.fn(() => new (MaterialTreeGroupFlatRadioComponentOfT()).new(MaterialTreeRootOfT()._check(this.parentView.injectorGet(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentIndex)), this[_compView_0$], material_dropdown_base.DropdownHandle._check(this.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentIndex))), VoidToMaterialTreeGroupFlatRadioComponentOfT())) : new (MaterialTreeGroupFlatRadioComponentOfT()).new(MaterialTreeRootOfT()._check(this.parentView.injectorGet(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentIndex)), this[_compView_0$], material_dropdown_base.DropdownHandle._check(this.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentIndex)));
        this[_compView_0$].create(this[_MaterialTreeGroupFlatRadioComponent_0_5]);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let firstCheck = this.firstCheck;
        let local_group = optimizations.unsafeCast(OptionGroupOfT(), this.locals[$_get]("$implicit"));
        let currVal_0 = local_group;
        if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "group", ""))) {
          this[_MaterialTreeGroupFlatRadioComponent_0_5].group = currVal_0;
          this[_expr_0$] = currVal_0;
        }
        this[_compView_0$].detectHostChanges(firstCheck);
        this[_compView_0$].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$].destroyInternalState();
      }
    }
    (_ViewMaterialTreeComponent7.new = function(parentView, parentIndex) {
      this[_compView_0$] = null;
      this[_MaterialTreeGroupFlatRadioComponent_0_5] = null;
      this[_expr_0$] = null;
      _ViewMaterialTreeComponent7.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeComponent7.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent7);
    _ViewMaterialTreeComponent7.prototype[_is__ViewMaterialTreeComponent7_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeComponent7, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponent7.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeComponent7, "package:angular_components/src/material_tree/material_tree_impl.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeComponent7, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent7.__proto__),
      [_compView_0$]: dart.fieldType(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0$(T)),
      [_MaterialTreeGroupFlatRadioComponent_0_5]: dart.fieldType(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)),
      [_expr_0$]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent7;
  });
  material_tree_impl$46template._ViewMaterialTreeComponent7 = material_tree_impl$46template._ViewMaterialTreeComponent7$();
  dart.addTypeTests(material_tree_impl$46template._ViewMaterialTreeComponent7, _is__ViewMaterialTreeComponent7_default);
  const _is__ViewMaterialTreeComponent8_default = Symbol('_is__ViewMaterialTreeComponent8_default');
  material_tree_impl$46template._ViewMaterialTreeComponent8$ = dart.generic(T => {
    class _ViewMaterialTreeComponent8 extends embedded_view.EmbeddedView$(material_tree_impl.MaterialTreeComponent$(T)) {
      build() {
        let _anchor_0 = dom_helpers.createAnchor();
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_tree_impl$46template.viewFactory_MaterialTreeComponent9(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgFor_0_9] = new ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
        this.initRootNode(this[_appEl_0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.options.optionGroups;
        if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "options.optionGroups", ""))) {
          this[_NgFor_0_9].ngForOf = currVal_0;
          this[_expr_0$] = currVal_0;
        }
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          this[_NgFor_0_9].ngDoCheck();
        }
        this[_appEl_0].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeComponent8.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgFor_0_9] = null;
      this[_expr_0$] = null;
      _ViewMaterialTreeComponent8.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeComponent8.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent8);
    _ViewMaterialTreeComponent8.prototype[_is__ViewMaterialTreeComponent8_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeComponent8, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponent8.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeComponent8, "package:angular_components/src/material_tree/material_tree_impl.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeComponent8, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent8.__proto__),
      [_appEl_0]: dart.fieldType(view_container.ViewContainer),
      [_NgFor_0_9]: dart.fieldType(ng_for.NgFor),
      [_expr_0$]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent8;
  });
  material_tree_impl$46template._ViewMaterialTreeComponent8 = material_tree_impl$46template._ViewMaterialTreeComponent8$();
  dart.addTypeTests(material_tree_impl$46template._ViewMaterialTreeComponent8, _is__ViewMaterialTreeComponent8_default);
  const _MaterialTreeGroupFlatCheckComponent_0_5 = dart.privateName(material_tree_impl$46template, "_MaterialTreeGroupFlatCheckComponent_0_5");
  const _is__ViewMaterialTreeComponent9_default = Symbol('_is__ViewMaterialTreeComponent9_default');
  material_tree_impl$46template._ViewMaterialTreeComponent9$ = dart.generic(T => {
    let ViewMaterialTreeGroupFlatCheckComponent0OfT = () => (ViewMaterialTreeGroupFlatCheckComponent0OfT = dart.constFn(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0$(T)))();
    let MaterialTreeGroupFlatCheckComponentOfT = () => (MaterialTreeGroupFlatCheckComponentOfT = dart.constFn(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)))();
    let MaterialTreeRootOfT = () => (MaterialTreeRootOfT = dart.constFn(material_tree_root.MaterialTreeRoot$(T)))();
    let VoidToMaterialTreeGroupFlatCheckComponentOfT = () => (VoidToMaterialTreeGroupFlatCheckComponentOfT = dart.constFn(dart.fnType(MaterialTreeGroupFlatCheckComponentOfT(), [])))();
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(selection_options.OptionGroup$(T)))();
    class _ViewMaterialTreeComponent9 extends embedded_view.EmbeddedView$(material_tree_impl.MaterialTreeComponent$(T)) {
      build() {
        this[_compView_0$] = new (ViewMaterialTreeGroupFlatCheckComponent0OfT()).new(this, 0);
        let _el_0 = this[_compView_0$].rootElement;
        this[_MaterialTreeGroupFlatCheckComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeGroupFlatCheckComponentOfT(), dart.wrapType(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), dart.fn(() => new (MaterialTreeGroupFlatCheckComponentOfT()).new(MaterialTreeRootOfT()._check(this.parentView.injectorGet(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentIndex)), this[_compView_0$], material_dropdown_base.DropdownHandle._check(this.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentIndex))), VoidToMaterialTreeGroupFlatCheckComponentOfT())) : new (MaterialTreeGroupFlatCheckComponentOfT()).new(MaterialTreeRootOfT()._check(this.parentView.injectorGet(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentIndex)), this[_compView_0$], material_dropdown_base.DropdownHandle._check(this.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentIndex)));
        this[_compView_0$].create(this[_MaterialTreeGroupFlatCheckComponent_0_5]);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let firstCheck = this.firstCheck;
        let local_group = optimizations.unsafeCast(OptionGroupOfT(), this.locals[$_get]("$implicit"));
        let currVal_0 = local_group;
        if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "group", ""))) {
          this[_MaterialTreeGroupFlatCheckComponent_0_5].group = currVal_0;
          this[_expr_0$] = currVal_0;
        }
        this[_compView_0$].detectHostChanges(firstCheck);
        this[_compView_0$].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$].destroyInternalState();
      }
    }
    (_ViewMaterialTreeComponent9.new = function(parentView, parentIndex) {
      this[_compView_0$] = null;
      this[_MaterialTreeGroupFlatCheckComponent_0_5] = null;
      this[_expr_0$] = null;
      _ViewMaterialTreeComponent9.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeComponent9.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent9);
    _ViewMaterialTreeComponent9.prototype[_is__ViewMaterialTreeComponent9_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeComponent9, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponent9.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeComponent9, "package:angular_components/src/material_tree/material_tree_impl.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeComponent9, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent9.__proto__),
      [_compView_0$]: dart.fieldType(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0$(T)),
      [_MaterialTreeGroupFlatCheckComponent_0_5]: dart.fieldType(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)),
      [_expr_0$]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent9;
  });
  material_tree_impl$46template._ViewMaterialTreeComponent9 = material_tree_impl$46template._ViewMaterialTreeComponent9$();
  dart.addTypeTests(material_tree_impl$46template._ViewMaterialTreeComponent9, _is__ViewMaterialTreeComponent9_default);
  const _is__ViewMaterialTreeComponentHost0_default = Symbol('_is__ViewMaterialTreeComponentHost0_default');
  material_tree_impl$46template._ViewMaterialTreeComponentHost0$ = dart.generic(T => {
    let ViewMaterialTreeComponent0OfT = () => (ViewMaterialTreeComponent0OfT = dart.constFn(material_tree_impl$46template.ViewMaterialTreeComponent0$(T)))();
    let MaterialTreeComponentOfT = () => (MaterialTreeComponentOfT = dart.constFn(material_tree_impl.MaterialTreeComponent$(T)))();
    let VoidToMaterialTreeComponentOfT = () => (VoidToMaterialTreeComponentOfT = dart.constFn(dart.fnType(MaterialTreeComponentOfT(), [])))();
    class _ViewMaterialTreeComponentHost0 extends host_view.HostView$(material_tree_impl.MaterialTreeComponent$(T)) {
      build() {
        this.componentView = new (ViewMaterialTreeComponent0OfT()).new(this, 0);
        let _el_0 = this.componentView.rootElement;
        this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeComponentOfT(), dart.wrapType(material_tree_impl.MaterialTreeComponent), dart.fn(() => new (MaterialTreeComponentOfT()).new(material_tree_root.MaterialTreeRoot._check(this.injectorGetOptional(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentIndex)), null), VoidToMaterialTreeComponentOfT())) : new (MaterialTreeComponentOfT()).new(material_tree_root.MaterialTreeRoot._check(this.injectorGetOptional(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentIndex)), null);
        this.initRootNode(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(material_tree_root.MaterialTreeRoot) && 0 === nodeIndex) {
          return this.component;
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let firstCheck = this.firstCheck;
        this.componentView.detectHostChanges(firstCheck);
        this.componentView.detectChanges();
      }
    }
    (_ViewMaterialTreeComponentHost0.new = function(injector) {
      _ViewMaterialTreeComponentHost0.__proto__.new.call(this, injector);
      ;
    }).prototype = _ViewMaterialTreeComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponentHost0);
    _ViewMaterialTreeComponentHost0.prototype[_is__ViewMaterialTreeComponentHost0_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponentHost0.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialTreeComponentHost0, "package:angular_components/src/material_tree/material_tree_impl.template.dart");
    return _ViewMaterialTreeComponentHost0;
  });
  material_tree_impl$46template._ViewMaterialTreeComponentHost0 = material_tree_impl$46template._ViewMaterialTreeComponentHost0$();
  dart.addTypeTests(material_tree_impl$46template._ViewMaterialTreeComponentHost0, _is__ViewMaterialTreeComponentHost0_default);
  material_tree_impl$46template.viewFactory_MaterialTreeComponent1 = function viewFactory_MaterialTreeComponent1(T, parentView, parentIndex) {
    return new (material_tree_impl$46template._ViewMaterialTreeComponent1$(T)).new(parentView, parentIndex);
  };
  material_tree_impl$46template.viewFactory_MaterialTreeComponent2 = function viewFactory_MaterialTreeComponent2(T, parentView, parentIndex) {
    return new (material_tree_impl$46template._ViewMaterialTreeComponent2$(T)).new(parentView, parentIndex);
  };
  material_tree_impl$46template.viewFactory_MaterialTreeComponent3 = function viewFactory_MaterialTreeComponent3(T, parentView, parentIndex) {
    return new (material_tree_impl$46template._ViewMaterialTreeComponent3$(T)).new(parentView, parentIndex);
  };
  material_tree_impl$46template.viewFactory_MaterialTreeComponent4 = function viewFactory_MaterialTreeComponent4(T, parentView, parentIndex) {
    return new (material_tree_impl$46template._ViewMaterialTreeComponent4$(T)).new(parentView, parentIndex);
  };
  material_tree_impl$46template.viewFactory_MaterialTreeComponent5 = function viewFactory_MaterialTreeComponent5(T, parentView, parentIndex) {
    return new (material_tree_impl$46template._ViewMaterialTreeComponent5$(T)).new(parentView, parentIndex);
  };
  material_tree_impl$46template.viewFactory_MaterialTreeComponent6 = function viewFactory_MaterialTreeComponent6(T, parentView, parentIndex) {
    return new (material_tree_impl$46template._ViewMaterialTreeComponent6$(T)).new(parentView, parentIndex);
  };
  material_tree_impl$46template.viewFactory_MaterialTreeComponent7 = function viewFactory_MaterialTreeComponent7(T, parentView, parentIndex) {
    return new (material_tree_impl$46template._ViewMaterialTreeComponent7$(T)).new(parentView, parentIndex);
  };
  material_tree_impl$46template.viewFactory_MaterialTreeComponent8 = function viewFactory_MaterialTreeComponent8(T, parentView, parentIndex) {
    return new (material_tree_impl$46template._ViewMaterialTreeComponent8$(T)).new(parentView, parentIndex);
  };
  material_tree_impl$46template.viewFactory_MaterialTreeComponent9 = function viewFactory_MaterialTreeComponent9(T, parentView, parentIndex) {
    return new (material_tree_impl$46template._ViewMaterialTreeComponent9$(T)).new(parentView, parentIndex);
  };
  material_tree_impl$46template.viewFactory_MaterialTreeComponentHost0 = function viewFactory_MaterialTreeComponentHost0(T, injector) {
    return new (material_tree_impl$46template._ViewMaterialTreeComponentHost0$(T)).new(injector);
  };
  material_tree_impl$46template.initReflector = function initReflector$() {
    if (dart.test(material_tree_impl$46template._visited)) {
      return;
    }
    material_tree_impl$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_tree_impl.MaterialTreeComponent), material_tree_impl$46template.MaterialTreeComponentNgFactory);
    material_tree_group$46template.initReflector();
    material_tree_group_flat$46template.initReflector();
    material_tree_rendering_options$46template.initReflector();
    material_tree_root$46template.initReflector();
    angular$46template.initReflector();
    select$46template.initReflector();
    selection_container$46template.initReflector();
    selection_model$46template.initReflector();
    selection_options$46template.initReflector();
    has_factory$46template.initReflector();
  };
  dart.copyProperties(material_tree_impl$46template, {
    get MaterialTreeComponentNgFactory() {
      return material_tree_impl$46template._MaterialTreeComponentNgFactory;
    }
  });
  let C10;
  let C9;
  let C8;
  dart.defineLazy(material_tree_impl$46template, {
    /*material_tree_impl$46template.styles$MaterialTreeComponent*/get styles$MaterialTreeComponent() {
      return C3 || CT.C3;
    },
    /*material_tree_impl$46template._MaterialTreeComponentNgFactory*/get _MaterialTreeComponentNgFactory() {
      return C8 || CT.C8;
    },
    /*material_tree_impl$46template.styles$MaterialTreeComponentHost*/get styles$MaterialTreeComponentHost() {
      return C3 || CT.C3;
    },
    /*material_tree_impl$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  const _appEl_0$ = dart.privateName(material_tree_group_flat$46template, "_appEl_0");
  const _NgFor_0_9$ = dart.privateName(material_tree_group_flat$46template, "_NgFor_0_9");
  const _expr_0$0 = dart.privateName(material_tree_group_flat$46template, "_expr_0");
  const _is_ViewMaterialTreeGroupFlatListComponent0_default = Symbol('_is_ViewMaterialTreeGroupFlatListComponent0_default');
  material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0$ = dart.generic(T => {
    class ViewMaterialTreeGroupFlatListComponent0 extends component_view.ComponentView$(material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)) {
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/group/material_tree_group_flat.dart" : null;
      }
      build() {
        let parentRenderNode = this.initViewRoot();
        let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_0$] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0$], dart.fn((parentView, parentIndex) => material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent1(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgFor_0_9$] = new ng_for.NgFor.new(this[_appEl_0$], _TemplateRef_0_8);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.group;
        if (dart.test(check_binding.checkBinding(this[_expr_0$0], currVal_0, "group", ""))) {
          this[_NgFor_0_9$].ngForOf = currVal_0;
          this[_expr_0$0] = currVal_0;
        }
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          this[_NgFor_0_9$].ngDoCheck();
        }
        this[_appEl_0$].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0$].destroyNestedViews();
      }
      detectHostChanges(firstCheck) {
        let _ctx = this.ctx;
        if (dart.test(firstCheck)) {
          if (_ctx.isMaterialTreeGroup != null) {
            dom_helpers.updateClassBindingNonHtml(this.rootElement, "material-tree-group", _ctx.isMaterialTreeGroup);
          }
        }
      }
      initComponentStyles() {
        let styles = material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._componentStyles;
        if (styles == null) {
          material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._componentStyles = styles = material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_tree_group_flat$46template.styles$MaterialTreeGroupFlatListComponent, material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialTreeGroupFlatListComponent0.new = function(parentView, parentIndex) {
      this[_appEl_0$] = null;
      this[_NgFor_0_9$] = null;
      this[_expr_0$0] = null;
      ViewMaterialTreeGroupFlatListComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
      this.initComponentStyles();
      this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-tree-group-flat-list"));
    }).prototype = ViewMaterialTreeGroupFlatListComponent0.prototype;
    dart.addTypeTests(ViewMaterialTreeGroupFlatListComponent0);
    ViewMaterialTreeGroupFlatListComponent0.prototype[_is_ViewMaterialTreeGroupFlatListComponent0_default] = true;
    dart.setMethodSignature(ViewMaterialTreeGroupFlatListComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialTreeGroupFlatListComponent0.__proto__),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(ViewMaterialTreeGroupFlatListComponent0, "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart");
    dart.setFieldSignature(ViewMaterialTreeGroupFlatListComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialTreeGroupFlatListComponent0.__proto__),
      [_appEl_0$]: dart.fieldType(view_container.ViewContainer),
      [_NgFor_0_9$]: dart.fieldType(ng_for.NgFor),
      [_expr_0$0]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialTreeGroupFlatListComponent0;
  });
  material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0 = material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0$();
  dart.defineLazy(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0, {
    /*material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.addTypeTests(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0, _is_ViewMaterialTreeGroupFlatListComponent0_default);
  const _appEl_1$0 = dart.privateName(material_tree_group_flat$46template, "_appEl_1");
  const _NgIf_1_9$0 = dart.privateName(material_tree_group_flat$46template, "_NgIf_1_9");
  const _appEl_2$0 = dart.privateName(material_tree_group_flat$46template, "_appEl_2");
  const _NgIf_2_9$0 = dart.privateName(material_tree_group_flat$46template, "_NgIf_2_9");
  const _is__ViewMaterialTreeGroupFlatListComponent1_default = Symbol('_is__ViewMaterialTreeGroupFlatListComponent1_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1$ = dart.generic(T => {
    class _ViewMaterialTreeGroupFlatListComponent1 extends embedded_view.EmbeddedView$(material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("div");
        this.updateChildClass(html.HtmlElement._check(_el_0), "material-tree-option");
        this.addShimC(html.HtmlElement._check(_el_0));
        let _anchor_1 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_1$0] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$0], dart.fn((parentView, parentIndex) => material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent2(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_1_9$0] = new ng_if.NgIf.new(this[_appEl_1$0], _TemplateRef_1_8);
        let _anchor_2 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_2$0] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$0], dart.fn((parentView, parentIndex) => material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent3(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_2_9$0] = new ng_if.NgIf.new(this[_appEl_2$0], _TemplateRef_2_8);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_1_9$0].ngIf = _ctx.useComponentRenderer;
        this[_NgIf_2_9$0].ngIf = !dart.test(_ctx.useComponentRenderer);
        this[_appEl_1$0].detectChangesInNestedViews();
        this[_appEl_2$0].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_1$0].destroyNestedViews();
        this[_appEl_2$0].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeGroupFlatListComponent1.new = function(parentView, parentIndex) {
      this[_appEl_1$0] = null;
      this[_NgIf_1_9$0] = null;
      this[_appEl_2$0] = null;
      this[_NgIf_2_9$0] = null;
      _ViewMaterialTreeGroupFlatListComponent1.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeGroupFlatListComponent1.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatListComponent1);
    _ViewMaterialTreeGroupFlatListComponent1.prototype[_is__ViewMaterialTreeGroupFlatListComponent1_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatListComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatListComponent1.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatListComponent1, "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatListComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatListComponent1.__proto__),
      [_appEl_1$0]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_1_9$0]: dart.fieldType(ng_if.NgIf),
      [_appEl_2$0]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_2_9$0]: dart.fieldType(ng_if.NgIf)
    }));
    return _ViewMaterialTreeGroupFlatListComponent1;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1, _is__ViewMaterialTreeGroupFlatListComponent1_default);
  const _compView_0$0 = dart.privateName(material_tree_group_flat$46template, "_compView_0");
  const _DynamicComponent_0_8 = dart.privateName(material_tree_group_flat$46template, "_DynamicComponent_0_8");
  const _expr_1$0 = dart.privateName(material_tree_group_flat$46template, "_expr_1");
  const _expr_2$0 = dart.privateName(material_tree_group_flat$46template, "_expr_2");
  const _is__ViewMaterialTreeGroupFlatListComponent2_default = Symbol('_is__ViewMaterialTreeGroupFlatListComponent2_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2$ = dart.generic(T => {
    class _ViewMaterialTreeGroupFlatListComponent2 extends embedded_view.EmbeddedView$(material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)) {
      build() {
        this[_compView_0$0] = new dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
        let _el_0 = this[_compView_0$0].rootElement;
        this.updateChildClassNonHtml(_el_0, "item component");
        this.addShimC(_el_0);
        this[_appEl_0$] = new view_container.ViewContainer.new(0, null, this, _el_0);
        this[_DynamicComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(dynamic_component.DynamicComponent, dart.wrapType(dynamic_component.DynamicComponent), dart.fn(() => new dynamic_component.DynamicComponent.new(dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.injectorGet(dart.wrapType(dynamic_component_loader.SlowComponentLoader), this.parentView.parentIndex)), this[_appEl_0$]), VoidToDynamicComponent())) : new dynamic_component.DynamicComponent.new(dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.injectorGet(dart.wrapType(dynamic_component_loader.SlowComponentLoader), this.parentView.parentIndex)), this[_appEl_0$]);
        this[_compView_0$0].create(this[_DynamicComponent_0_8]);
        this.initRootNode(this[_appEl_0$]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let local_option = optimizations.unsafeCast(T, optimizations.unsafeCast(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1, this.parentView).locals[$_get]("$implicit"));
        changed = false;
        let currVal_0 = _ctx.getComponentType(local_option);
        if (dart.test(check_binding.checkBinding(this[_expr_0$0], currVal_0, "getComponentType(option)", ""))) {
          this[_DynamicComponent_0_8].componentType = currVal_0;
          changed = true;
          this[_expr_0$0] = currVal_0;
        }
        let currVal_1 = _ctx.getComponentFactory(local_option);
        if (dart.test(check_binding.checkBinding(this[_expr_1$0], currVal_1, "getComponentFactory(option)", ""))) {
          this[_DynamicComponent_0_8].componentFactory = currVal_1;
          changed = true;
          this[_expr_1$0] = currVal_1;
        }
        let currVal_2 = local_option;
        if (dart.test(check_binding.checkBinding(this[_expr_2$0], currVal_2, "option", ""))) {
          this[_DynamicComponent_0_8].value = currVal_2;
          changed = true;
          this[_expr_2$0] = currVal_2;
        }
        if (changed) {
          this[_compView_0$0].markAsCheckOnce();
        }
        if (changed) {
          this[_DynamicComponent_0_8].ngAfterChanges();
        }
        this[_appEl_0$].detectChangesInNestedViews();
        this[_compView_0$0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_0$].destroyNestedViews();
        this[_compView_0$0].destroyInternalState();
        this[_DynamicComponent_0_8].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupFlatListComponent2.new = function(parentView, parentIndex) {
      this[_compView_0$0] = null;
      this[_appEl_0$] = null;
      this[_DynamicComponent_0_8] = null;
      this[_expr_0$0] = null;
      this[_expr_1$0] = null;
      this[_expr_2$0] = null;
      _ViewMaterialTreeGroupFlatListComponent2.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeGroupFlatListComponent2.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatListComponent2);
    _ViewMaterialTreeGroupFlatListComponent2.prototype[_is__ViewMaterialTreeGroupFlatListComponent2_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatListComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatListComponent2.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatListComponent2, "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatListComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatListComponent2.__proto__),
      [_compView_0$0]: dart.fieldType(dynamic_component$46template.ViewDynamicComponent0),
      [_appEl_0$]: dart.fieldType(view_container.ViewContainer),
      [_DynamicComponent_0_8]: dart.fieldType(dynamic_component.DynamicComponent),
      [_expr_0$0]: dart.fieldType(dart.dynamic),
      [_expr_1$0]: dart.fieldType(dart.dynamic),
      [_expr_2$0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeGroupFlatListComponent2;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2, _is__ViewMaterialTreeGroupFlatListComponent2_default);
  const _textBinding_1$ = dart.privateName(material_tree_group_flat$46template, "_textBinding_1");
  const _is__ViewMaterialTreeGroupFlatListComponent3_default = Symbol('_is__ViewMaterialTreeGroupFlatListComponent3_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3$ = dart.generic(T => {
    class _ViewMaterialTreeGroupFlatListComponent3 extends embedded_view.EmbeddedView$(material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        this.updateChildClass(html.HtmlElement._check(_el_0), "item text");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1$].element);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let local_option = optimizations.unsafeCast(T, optimizations.unsafeCast(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1, this.parentView).locals[$_get]("$implicit"));
        this[_textBinding_1$].updateText(interpolate.interpolateString0(_ctx.getOptionAsText(local_option)));
      }
    }
    (_ViewMaterialTreeGroupFlatListComponent3.new = function(parentView, parentIndex) {
      this[_textBinding_1$] = new text_binding.TextBinding.new();
      _ViewMaterialTreeGroupFlatListComponent3.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeGroupFlatListComponent3.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatListComponent3);
    _ViewMaterialTreeGroupFlatListComponent3.prototype[_is__ViewMaterialTreeGroupFlatListComponent3_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatListComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatListComponent3.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatListComponent3, "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatListComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatListComponent3.__proto__),
      [_textBinding_1$]: dart.finalFieldType(text_binding.TextBinding)
    }));
    return _ViewMaterialTreeGroupFlatListComponent3;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3, _is__ViewMaterialTreeGroupFlatListComponent3_default);
  const _is__ViewMaterialTreeGroupFlatListComponentHost0_default = Symbol('_is__ViewMaterialTreeGroupFlatListComponentHost0_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0$ = dart.generic(T => {
    let ViewMaterialTreeGroupFlatListComponent0OfT = () => (ViewMaterialTreeGroupFlatListComponent0OfT = dart.constFn(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0$(T)))();
    let MaterialTreeGroupFlatListComponentOfT = () => (MaterialTreeGroupFlatListComponentOfT = dart.constFn(material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)))();
    let MaterialTreeRootOfT = () => (MaterialTreeRootOfT = dart.constFn(material_tree_root.MaterialTreeRoot$(T)))();
    let VoidToMaterialTreeGroupFlatListComponentOfT = () => (VoidToMaterialTreeGroupFlatListComponentOfT = dart.constFn(dart.fnType(MaterialTreeGroupFlatListComponentOfT(), [])))();
    class _ViewMaterialTreeGroupFlatListComponentHost0 extends host_view.HostView$(material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)) {
      build() {
        this.componentView = new (ViewMaterialTreeGroupFlatListComponent0OfT()).new(this, 0);
        let _el_0 = this.componentView.rootElement;
        this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeGroupFlatListComponentOfT(), dart.wrapType(material_tree_group_flat.MaterialTreeGroupFlatListComponent), dart.fn(() => new (MaterialTreeGroupFlatListComponentOfT()).new(MaterialTreeRootOfT()._check(this.injectorGet(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentIndex)), this.componentView), VoidToMaterialTreeGroupFlatListComponentOfT())) : new (MaterialTreeGroupFlatListComponentOfT()).new(MaterialTreeRootOfT()._check(this.injectorGet(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentIndex)), this.componentView);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let firstCheck = this.firstCheck;
        this.componentView.detectHostChanges(firstCheck);
        this.componentView.detectChanges();
      }
    }
    (_ViewMaterialTreeGroupFlatListComponentHost0.new = function(injector) {
      _ViewMaterialTreeGroupFlatListComponentHost0.__proto__.new.call(this, injector);
      ;
    }).prototype = _ViewMaterialTreeGroupFlatListComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatListComponentHost0);
    _ViewMaterialTreeGroupFlatListComponentHost0.prototype[_is__ViewMaterialTreeGroupFlatListComponentHost0_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatListComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatListComponentHost0.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatListComponentHost0, "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart");
    return _ViewMaterialTreeGroupFlatListComponentHost0;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0, _is__ViewMaterialTreeGroupFlatListComponentHost0_default);
  const _query_MaterialRadioComponent_0_0_isDirty = dart.privateName(material_tree_group_flat$46template, "_query_MaterialRadioComponent_0_0_isDirty");
  const _MaterialRadioGroupComponent_0_5 = dart.privateName(material_tree_group_flat$46template, "_MaterialRadioGroupComponent_0_5");
  const _NgFor_1_9 = dart.privateName(material_tree_group_flat$46template, "_NgFor_1_9");
  const _MaterialRadioComponent_0_5 = dart.privateName(material_tree_group_flat$46template, "_MaterialRadioComponent_0_5");
  const _is_ViewMaterialTreeGroupFlatRadioComponent0_default = Symbol('_is_ViewMaterialTreeGroupFlatRadioComponent0_default');
  material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0$ = dart.generic(T => {
    class ViewMaterialTreeGroupFlatRadioComponent0 extends component_view.ComponentView$(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)) {
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/group/material_tree_group_flat.dart" : null;
      }
      build() {
        let parentRenderNode = this.initViewRoot();
        this[_compView_0$0] = new material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 0);
        let _el_0 = this[_compView_0$0].rootElement;
        parentRenderNode[$append](_el_0);
        this.addShimC(_el_0);
        this[_MaterialRadioGroupComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_radio_group.MaterialRadioGroupComponent, dart.wrapType(material_radio_group.MaterialRadioGroupComponent), dart.fn(() => new material_radio_group.MaterialRadioGroupComponent.new(ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), null), VoidToMaterialRadioGroupComponent())) : new material_radio_group.MaterialRadioGroupComponent.new(ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), null);
        let _anchor_1 = dom_helpers.createAnchor();
        this[_appEl_1$0] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$0], dart.fn((parentView, parentIndex) => material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent1(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1$0], _TemplateRef_1_8);
        this[_compView_0$0].createAndProject(this[_MaterialRadioGroupComponent_0_5], JSArrayOfObject().of([JSArrayOfViewContainer().of([this[_appEl_1$0]])]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(material_radio_group.MaterialRadioGroupComponent) && dart.notNull(nodeIndex) <= 1) {
          return this[_MaterialRadioGroupComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.firstCheck;
        changed = false;
        if (dart.test(firstCheck)) {
          if (_ctx.selectionModel != null) {
            this[_MaterialRadioGroupComponent_0_5].valueSelection = _ctx.selectionModel;
            changed = true;
          }
        }
        if (changed) {
          this[_compView_0$0].markAsCheckOnce();
        }
        let currVal_1 = _ctx.group;
        if (dart.test(check_binding.checkBinding(this[_expr_1$0], currVal_1, "group", ""))) {
          this[_NgFor_1_9].ngForOf = currVal_1;
          this[_expr_1$0] = currVal_1;
        }
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          this[_NgFor_1_9].ngDoCheck();
        }
        this[_appEl_1$0].detectChangesInNestedViews();
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          if (dart.test(this[_query_MaterialRadioComponent_0_0_isDirty])) {
            this[_MaterialRadioGroupComponent_0_5].radioComponents = this[_appEl_1$0].mapNestedViews(material_radio.MaterialRadioComponent, material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1, dart.fn(nestedView => JSArrayOfMaterialRadioComponent().of([nestedView[_MaterialRadioComponent_0_5]]), _ViewMaterialTreeGroupFlatRadioComponent1ToListOfMaterialRadioComponent()));
            this[_query_MaterialRadioComponent_0_0_isDirty] = false;
          }
          if (dart.test(firstCheck)) {
            this[_MaterialRadioGroupComponent_0_5].ngAfterContentInit();
          }
        }
        this[_compView_0$0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_1$0].destroyNestedViews();
        this[_compView_0$0].destroyInternalState();
        this[_MaterialRadioGroupComponent_0_5].ngOnDestroy();
      }
      detectHostChanges(firstCheck) {
        let _ctx = this.ctx;
        if (dart.test(firstCheck)) {
          if (_ctx.isMaterialTreeGroup != null) {
            dom_helpers.updateClassBindingNonHtml(this.rootElement, "material-tree-group", _ctx.isMaterialTreeGroup);
          }
        }
      }
      initComponentStyles() {
        let styles = material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._componentStyles;
        if (styles == null) {
          material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._componentStyles = styles = material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_tree_group_flat$46template.styles$MaterialTreeGroupFlatRadioComponent, material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialTreeGroupFlatRadioComponent0.new = function(parentView, parentIndex) {
      this[_query_MaterialRadioComponent_0_0_isDirty] = true;
      this[_compView_0$0] = null;
      this[_MaterialRadioGroupComponent_0_5] = null;
      this[_appEl_1$0] = null;
      this[_NgFor_1_9] = null;
      this[_expr_1$0] = null;
      ViewMaterialTreeGroupFlatRadioComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
      this.initComponentStyles();
      this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-tree-group-flat-radio"));
    }).prototype = ViewMaterialTreeGroupFlatRadioComponent0.prototype;
    dart.addTypeTests(ViewMaterialTreeGroupFlatRadioComponent0);
    ViewMaterialTreeGroupFlatRadioComponent0.prototype[_is_ViewMaterialTreeGroupFlatRadioComponent0_default] = true;
    dart.setMethodSignature(ViewMaterialTreeGroupFlatRadioComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialTreeGroupFlatRadioComponent0.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(ViewMaterialTreeGroupFlatRadioComponent0, "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart");
    dart.setFieldSignature(ViewMaterialTreeGroupFlatRadioComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialTreeGroupFlatRadioComponent0.__proto__),
      [_query_MaterialRadioComponent_0_0_isDirty]: dart.fieldType(core.bool),
      [_compView_0$0]: dart.fieldType(material_radio_group$46template.ViewMaterialRadioGroupComponent0),
      [_MaterialRadioGroupComponent_0_5]: dart.fieldType(material_radio_group.MaterialRadioGroupComponent),
      [_appEl_1$0]: dart.fieldType(view_container.ViewContainer),
      [_NgFor_1_9]: dart.fieldType(ng_for.NgFor),
      [_expr_1$0]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialTreeGroupFlatRadioComponent0;
  });
  material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0 = material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0$();
  dart.defineLazy(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, {
    /*material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.addTypeTests(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, _is_ViewMaterialTreeGroupFlatRadioComponent0_default);
  const _expr_3$0 = dart.privateName(material_tree_group_flat$46template, "_expr_3");
  const _el_0$ = dart.privateName(material_tree_group_flat$46template, "_el_0");
  const _is__ViewMaterialTreeGroupFlatRadioComponent1_default = Symbol('_is__ViewMaterialTreeGroupFlatRadioComponent1_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1$ = dart.generic(T => {
    class _ViewMaterialTreeGroupFlatRadioComponent1 extends embedded_view.EmbeddedView$(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)) {
      build() {
        this[_compView_0$0] = new material_radio$46template.ViewMaterialRadioComponent0.new(this, 0);
        this[_el_0$] = this[_compView_0$0].rootElement;
        this.updateChildClassNonHtml(this[_el_0$], interpolate.interpolateString2("", "material-tree-option tree-selection-state", " ", "themeable", ""));
        dom_helpers.setAttribute(this[_el_0$], "role", "option");
        this.addShimC(html.HtmlElement._check(this[_el_0$]));
        this[_MaterialRadioComponent_0_5] = new material_radio.MaterialRadioComponent.new(html.HtmlElement._check(this[_el_0$]), this[_compView_0$0], optimizations.unsafeCast(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, this.parentView)[_MaterialRadioGroupComponent_0_5], null, "option");
        let _anchor_1 = dom_helpers.createAnchor();
        this[_appEl_1$0] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$0], dart.fn((parentView, parentIndex) => material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent2(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_1_9$0] = new ng_if.NgIf.new(this[_appEl_1$0], _TemplateRef_1_8);
        let _anchor_2 = dom_helpers.createAnchor();
        this[_appEl_2$0] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$0], dart.fn((parentView, parentIndex) => material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent3(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_2_9$0] = new ng_if.NgIf.new(this[_appEl_2$0], _TemplateRef_2_8);
        this[_compView_0$0].createAndProject(this[_MaterialRadioComponent_0_5], JSArrayOfObject().of([JSArrayOfViewContainer().of([this[_appEl_1$0], this[_appEl_2$0]])]));
        this.initRootNode(this[_el_0$]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(has_disabled.HasDisabled) && dart.notNull(nodeIndex) <= 2) {
          return this[_MaterialRadioComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.firstCheck;
        let local_option = optimizations.unsafeCast(T, this.locals[$_get]("$implicit"));
        changed = false;
        let currVal_2 = local_option;
        if (dart.test(check_binding.checkBinding(this[_expr_2$0], currVal_2, "option", ""))) {
          this[_MaterialRadioComponent_0_5].value = currVal_2;
          changed = true;
          this[_expr_2$0] = currVal_2;
        }
        let currVal_3 = _ctx.isReadOnly;
        if (dart.test(check_binding.checkBinding(this[_expr_3$0], currVal_3, "isReadOnly", ""))) {
          this[_MaterialRadioComponent_0_5].disabled = currVal_3;
          changed = true;
          this[_expr_3$0] = currVal_3;
        }
        if (changed) {
          this[_compView_0$0].markAsCheckOnce();
        }
        this[_NgIf_1_9$0].ngIf = _ctx.useComponentRenderer;
        this[_NgIf_2_9$0].ngIf = !dart.test(_ctx.useComponentRenderer);
        this[_appEl_1$0].detectChangesInNestedViews();
        this[_appEl_2$0].detectChangesInNestedViews();
        let currVal_0 = _ctx.isSelected(local_option);
        if (dart.test(check_binding.checkBinding(this[_expr_0$0], currVal_0, "isSelected(option)", ""))) {
          dom_helpers.updateClassBindingNonHtml(this[_el_0$], "selected", currVal_0);
          this[_expr_0$0] = currVal_0;
        }
        let currVal_1 = _ctx.isSelectable(local_option);
        if (dart.test(check_binding.checkBinding(this[_expr_1$0], currVal_1, "isSelectable(option)", ""))) {
          dom_helpers.updateClassBindingNonHtml(this[_el_0$], "selectable", currVal_1);
          this[_expr_1$0] = currVal_1;
        }
        this[_compView_0$0].detectHostChanges(firstCheck);
        this[_compView_0$0].detectChanges();
      }
      dirtyParentQueriesInternal() {
        optimizations.unsafeCast(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, this.parentView)[_query_MaterialRadioComponent_0_0_isDirty] = true;
      }
      destroyInternal() {
        this[_appEl_1$0].destroyNestedViews();
        this[_appEl_2$0].destroyNestedViews();
        this[_compView_0$0].destroyInternalState();
        this[_MaterialRadioComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupFlatRadioComponent1.new = function(parentView, parentIndex) {
      this[_compView_0$0] = null;
      this[_MaterialRadioComponent_0_5] = null;
      this[_appEl_1$0] = null;
      this[_NgIf_1_9$0] = null;
      this[_appEl_2$0] = null;
      this[_NgIf_2_9$0] = null;
      this[_expr_0$0] = null;
      this[_expr_1$0] = null;
      this[_expr_2$0] = null;
      this[_expr_3$0] = null;
      this[_el_0$] = null;
      _ViewMaterialTreeGroupFlatRadioComponent1.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeGroupFlatRadioComponent1.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatRadioComponent1);
    _ViewMaterialTreeGroupFlatRadioComponent1.prototype[_is__ViewMaterialTreeGroupFlatRadioComponent1_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatRadioComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatRadioComponent1.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatRadioComponent1, "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatRadioComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatRadioComponent1.__proto__),
      [_compView_0$0]: dart.fieldType(material_radio$46template.ViewMaterialRadioComponent0),
      [_MaterialRadioComponent_0_5]: dart.fieldType(material_radio.MaterialRadioComponent),
      [_appEl_1$0]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_1_9$0]: dart.fieldType(ng_if.NgIf),
      [_appEl_2$0]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_2_9$0]: dart.fieldType(ng_if.NgIf),
      [_expr_0$0]: dart.fieldType(core.bool),
      [_expr_1$0]: dart.fieldType(core.bool),
      [_expr_2$0]: dart.fieldType(dart.dynamic),
      [_expr_3$0]: dart.fieldType(core.bool),
      [_el_0$]: dart.fieldType(html.Element)
    }));
    return _ViewMaterialTreeGroupFlatRadioComponent1;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1, _is__ViewMaterialTreeGroupFlatRadioComponent1_default);
  const _is__ViewMaterialTreeGroupFlatRadioComponent2_default = Symbol('_is__ViewMaterialTreeGroupFlatRadioComponent2_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2$ = dart.generic(T => {
    class _ViewMaterialTreeGroupFlatRadioComponent2 extends embedded_view.EmbeddedView$(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)) {
      build() {
        this[_compView_0$0] = new dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
        let _el_0 = this[_compView_0$0].rootElement;
        this.updateChildClassNonHtml(_el_0, "item component");
        this.addShimC(_el_0);
        this[_appEl_0$] = new view_container.ViewContainer.new(0, null, this, _el_0);
        this[_DynamicComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(dynamic_component.DynamicComponent, dart.wrapType(dynamic_component.DynamicComponent), dart.fn(() => new dynamic_component.DynamicComponent.new(dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(dynamic_component_loader.SlowComponentLoader), this.parentView.parentView.parentIndex)), this[_appEl_0$]), VoidToDynamicComponent())) : new dynamic_component.DynamicComponent.new(dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(dynamic_component_loader.SlowComponentLoader), this.parentView.parentView.parentIndex)), this[_appEl_0$]);
        this[_compView_0$0].create(this[_DynamicComponent_0_8]);
        this.initRootNode(this[_appEl_0$]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let local_option = optimizations.unsafeCast(T, optimizations.unsafeCast(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1, this.parentView).locals[$_get]("$implicit"));
        changed = false;
        let currVal_0 = _ctx.getComponentType(local_option);
        if (dart.test(check_binding.checkBinding(this[_expr_0$0], currVal_0, "getComponentType(option)", ""))) {
          this[_DynamicComponent_0_8].componentType = currVal_0;
          changed = true;
          this[_expr_0$0] = currVal_0;
        }
        let currVal_1 = _ctx.getComponentFactory(local_option);
        if (dart.test(check_binding.checkBinding(this[_expr_1$0], currVal_1, "getComponentFactory(option)", ""))) {
          this[_DynamicComponent_0_8].componentFactory = currVal_1;
          changed = true;
          this[_expr_1$0] = currVal_1;
        }
        let currVal_2 = local_option;
        if (dart.test(check_binding.checkBinding(this[_expr_2$0], currVal_2, "option", ""))) {
          this[_DynamicComponent_0_8].value = currVal_2;
          changed = true;
          this[_expr_2$0] = currVal_2;
        }
        if (changed) {
          this[_compView_0$0].markAsCheckOnce();
        }
        if (changed) {
          this[_DynamicComponent_0_8].ngAfterChanges();
        }
        this[_appEl_0$].detectChangesInNestedViews();
        this[_compView_0$0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_0$].destroyNestedViews();
        this[_compView_0$0].destroyInternalState();
        this[_DynamicComponent_0_8].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupFlatRadioComponent2.new = function(parentView, parentIndex) {
      this[_compView_0$0] = null;
      this[_appEl_0$] = null;
      this[_DynamicComponent_0_8] = null;
      this[_expr_0$0] = null;
      this[_expr_1$0] = null;
      this[_expr_2$0] = null;
      _ViewMaterialTreeGroupFlatRadioComponent2.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeGroupFlatRadioComponent2.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatRadioComponent2);
    _ViewMaterialTreeGroupFlatRadioComponent2.prototype[_is__ViewMaterialTreeGroupFlatRadioComponent2_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatRadioComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatRadioComponent2.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatRadioComponent2, "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatRadioComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatRadioComponent2.__proto__),
      [_compView_0$0]: dart.fieldType(dynamic_component$46template.ViewDynamicComponent0),
      [_appEl_0$]: dart.fieldType(view_container.ViewContainer),
      [_DynamicComponent_0_8]: dart.fieldType(dynamic_component.DynamicComponent),
      [_expr_0$0]: dart.fieldType(dart.dynamic),
      [_expr_1$0]: dart.fieldType(dart.dynamic),
      [_expr_2$0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeGroupFlatRadioComponent2;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2, _is__ViewMaterialTreeGroupFlatRadioComponent2_default);
  const _is__ViewMaterialTreeGroupFlatRadioComponent3_default = Symbol('_is__ViewMaterialTreeGroupFlatRadioComponent3_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3$ = dart.generic(T => {
    class _ViewMaterialTreeGroupFlatRadioComponent3 extends embedded_view.EmbeddedView$(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        this.updateChildClass(html.HtmlElement._check(_el_0), "item text");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1$].element);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let local_option = optimizations.unsafeCast(T, optimizations.unsafeCast(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1, this.parentView).locals[$_get]("$implicit"));
        this[_textBinding_1$].updateText(interpolate.interpolateString0(_ctx.getOptionAsText(local_option)));
      }
    }
    (_ViewMaterialTreeGroupFlatRadioComponent3.new = function(parentView, parentIndex) {
      this[_textBinding_1$] = new text_binding.TextBinding.new();
      _ViewMaterialTreeGroupFlatRadioComponent3.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeGroupFlatRadioComponent3.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatRadioComponent3);
    _ViewMaterialTreeGroupFlatRadioComponent3.prototype[_is__ViewMaterialTreeGroupFlatRadioComponent3_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatRadioComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatRadioComponent3.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatRadioComponent3, "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatRadioComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatRadioComponent3.__proto__),
      [_textBinding_1$]: dart.finalFieldType(text_binding.TextBinding)
    }));
    return _ViewMaterialTreeGroupFlatRadioComponent3;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3, _is__ViewMaterialTreeGroupFlatRadioComponent3_default);
  const _is__ViewMaterialTreeGroupFlatRadioComponentHost0_default = Symbol('_is__ViewMaterialTreeGroupFlatRadioComponentHost0_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0$ = dart.generic(T => {
    let ViewMaterialTreeGroupFlatRadioComponent0OfT = () => (ViewMaterialTreeGroupFlatRadioComponent0OfT = dart.constFn(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0$(T)))();
    let MaterialTreeGroupFlatRadioComponentOfT = () => (MaterialTreeGroupFlatRadioComponentOfT = dart.constFn(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)))();
    let MaterialTreeRootOfT = () => (MaterialTreeRootOfT = dart.constFn(material_tree_root.MaterialTreeRoot$(T)))();
    let VoidToMaterialTreeGroupFlatRadioComponentOfT = () => (VoidToMaterialTreeGroupFlatRadioComponentOfT = dart.constFn(dart.fnType(MaterialTreeGroupFlatRadioComponentOfT(), [])))();
    class _ViewMaterialTreeGroupFlatRadioComponentHost0 extends host_view.HostView$(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)) {
      build() {
        this.componentView = new (ViewMaterialTreeGroupFlatRadioComponent0OfT()).new(this, 0);
        let _el_0 = this.componentView.rootElement;
        this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeGroupFlatRadioComponentOfT(), dart.wrapType(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), dart.fn(() => new (MaterialTreeGroupFlatRadioComponentOfT()).new(MaterialTreeRootOfT()._check(this.injectorGet(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentIndex)), this.componentView, material_dropdown_base.DropdownHandle._check(this.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentIndex))), VoidToMaterialTreeGroupFlatRadioComponentOfT())) : new (MaterialTreeGroupFlatRadioComponentOfT()).new(MaterialTreeRootOfT()._check(this.injectorGet(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentIndex)), this.componentView, material_dropdown_base.DropdownHandle._check(this.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentIndex)));
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let firstCheck = this.firstCheck;
        this.componentView.detectHostChanges(firstCheck);
        this.componentView.detectChanges();
      }
    }
    (_ViewMaterialTreeGroupFlatRadioComponentHost0.new = function(injector) {
      _ViewMaterialTreeGroupFlatRadioComponentHost0.__proto__.new.call(this, injector);
      ;
    }).prototype = _ViewMaterialTreeGroupFlatRadioComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatRadioComponentHost0);
    _ViewMaterialTreeGroupFlatRadioComponentHost0.prototype[_is__ViewMaterialTreeGroupFlatRadioComponentHost0_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatRadioComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatRadioComponentHost0.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatRadioComponentHost0, "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart");
    return _ViewMaterialTreeGroupFlatRadioComponentHost0;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0, _is__ViewMaterialTreeGroupFlatRadioComponentHost0_default);
  const _is_ViewMaterialTreeGroupFlatCheckComponent0_default = Symbol('_is_ViewMaterialTreeGroupFlatCheckComponent0_default');
  material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0$ = dart.generic(T => {
    class ViewMaterialTreeGroupFlatCheckComponent0 extends component_view.ComponentView$(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)) {
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/group/material_tree_group_flat.dart" : null;
      }
      build() {
        let parentRenderNode = this.initViewRoot();
        let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_0$] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0$], dart.fn((parentView, parentIndex) => material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent1(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgFor_0_9$] = new ng_for.NgFor.new(this[_appEl_0$], _TemplateRef_0_8);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.group;
        if (dart.test(check_binding.checkBinding(this[_expr_0$0], currVal_0, "group", ""))) {
          this[_NgFor_0_9$].ngForOf = currVal_0;
          this[_expr_0$0] = currVal_0;
        }
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          this[_NgFor_0_9$].ngDoCheck();
        }
        this[_appEl_0$].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0$].destroyNestedViews();
      }
      detectHostChanges(firstCheck) {
        let _ctx = this.ctx;
        if (dart.test(firstCheck)) {
          if (_ctx.isMaterialTreeGroup != null) {
            dom_helpers.updateClassBindingNonHtml(this.rootElement, "material-tree-group", _ctx.isMaterialTreeGroup);
          }
        }
      }
      initComponentStyles() {
        let styles = material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._componentStyles;
        if (styles == null) {
          material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._componentStyles = styles = material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_tree_group_flat$46template.styles$MaterialTreeGroupFlatCheckComponent, material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialTreeGroupFlatCheckComponent0.new = function(parentView, parentIndex) {
      this[_appEl_0$] = null;
      this[_NgFor_0_9$] = null;
      this[_expr_0$0] = null;
      ViewMaterialTreeGroupFlatCheckComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
      this.initComponentStyles();
      this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-tree-group-flat-check"));
    }).prototype = ViewMaterialTreeGroupFlatCheckComponent0.prototype;
    dart.addTypeTests(ViewMaterialTreeGroupFlatCheckComponent0);
    ViewMaterialTreeGroupFlatCheckComponent0.prototype[_is_ViewMaterialTreeGroupFlatCheckComponent0_default] = true;
    dart.setMethodSignature(ViewMaterialTreeGroupFlatCheckComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialTreeGroupFlatCheckComponent0.__proto__),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(ViewMaterialTreeGroupFlatCheckComponent0, "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart");
    dart.setFieldSignature(ViewMaterialTreeGroupFlatCheckComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialTreeGroupFlatCheckComponent0.__proto__),
      [_appEl_0$]: dart.fieldType(view_container.ViewContainer),
      [_NgFor_0_9$]: dart.fieldType(ng_for.NgFor),
      [_expr_0$0]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialTreeGroupFlatCheckComponent0;
  });
  material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0 = material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0$();
  dart.defineLazy(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0, {
    /*material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.addTypeTests(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0, _is_ViewMaterialTreeGroupFlatCheckComponent0_default);
  const _MaterialCheckboxComponent_0_5 = dart.privateName(material_tree_group_flat$46template, "_MaterialCheckboxComponent_0_5");
  const _handleEvent_0$ = dart.privateName(material_tree_group_flat$46template, "_handleEvent_0");
  const _is__ViewMaterialTreeGroupFlatCheckComponent1_default = Symbol('_is__ViewMaterialTreeGroupFlatCheckComponent1_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1$ = dart.generic(T => {
    class _ViewMaterialTreeGroupFlatCheckComponent1 extends embedded_view.EmbeddedView$(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)) {
      build() {
        this[_compView_0$0] = new material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
        this[_el_0$] = this[_compView_0$0].rootElement;
        this.updateChildClassNonHtml(this[_el_0$], interpolate.interpolateString2("", "material-tree-option tree-selection-state", " ", "themeable", ""));
        dom_helpers.setAttribute(this[_el_0$], "role", "option");
        this.addShimC(html.HtmlElement._check(this[_el_0$]));
        this[_MaterialCheckboxComponent_0_5] = new material_checkbox.MaterialCheckboxComponent.new(html.HtmlElement._check(this[_el_0$]), this[_compView_0$0], null, null, "option");
        let _anchor_1 = dom_helpers.createAnchor();
        this[_appEl_1$0] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$0], dart.fn((parentView, parentIndex) => material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent2(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_1_9$0] = new ng_if.NgIf.new(this[_appEl_1$0], _TemplateRef_1_8);
        let _anchor_2 = dom_helpers.createAnchor();
        this[_appEl_2$0] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$0], dart.fn((parentView, parentIndex) => material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent3(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_2_9$0] = new ng_if.NgIf.new(this[_appEl_2$0], _TemplateRef_2_8);
        this[_compView_0$0].createAndProject(this[_MaterialCheckboxComponent_0_5], JSArrayOfObject().of([JSArrayOfViewContainer().of([this[_appEl_1$0], this[_appEl_2$0]])]));
        let subscription_0 = this[_MaterialCheckboxComponent_0_5].onChecked.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handleEvent_0$)));
        this.initRootNodesAndSubscriptions(JSArrayOfObject().of([this[_el_0$]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(has_disabled.HasDisabled) && dart.notNull(nodeIndex) <= 2) {
          return this[_MaterialCheckboxComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.firstCheck;
        let local_option = optimizations.unsafeCast(T, this.locals[$_get]("$implicit"));
        changed = false;
        let currVal_2 = dart.test(_ctx.isReadOnly) || dart.test(_ctx.showDisabledCheckbox(local_option));
        if (dart.test(check_binding.checkBinding(this[_expr_2$0], currVal_2, "isReadOnly || showDisabledCheckbox(option)", ""))) {
          this[_MaterialCheckboxComponent_0_5].disabled = currVal_2;
          changed = true;
          this[_expr_2$0] = currVal_2;
        }
        let currVal_3 = _ctx.isSelected(local_option);
        if (dart.test(check_binding.checkBinding(this[_expr_3$0], currVal_3, "isSelected(option)", ""))) {
          this[_MaterialCheckboxComponent_0_5].checked = currVal_3;
          changed = true;
          this[_expr_3$0] = currVal_3;
        }
        if (changed) {
          this[_compView_0$0].markAsCheckOnce();
        }
        this[_NgIf_1_9$0].ngIf = _ctx.useComponentRenderer;
        this[_NgIf_2_9$0].ngIf = !dart.test(_ctx.useComponentRenderer);
        this[_appEl_1$0].detectChangesInNestedViews();
        this[_appEl_2$0].detectChangesInNestedViews();
        let currVal_0 = _ctx.isSelected(local_option);
        if (dart.test(check_binding.checkBinding(this[_expr_0$0], currVal_0, "isSelected(option)", ""))) {
          dom_helpers.updateClassBindingNonHtml(this[_el_0$], "selected", currVal_0);
          this[_expr_0$0] = currVal_0;
        }
        let currVal_1 = _ctx.isSelectable(local_option);
        if (dart.test(check_binding.checkBinding(this[_expr_1$0], currVal_1, "isSelectable(option)", ""))) {
          dom_helpers.updateClassBindingNonHtml(this[_el_0$], "selectable", currVal_1);
          this[_expr_1$0] = currVal_1;
        }
        this[_compView_0$0].detectHostChanges(firstCheck);
        this[_compView_0$0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_1$0].destroyNestedViews();
        this[_appEl_2$0].destroyNestedViews();
        this[_compView_0$0].destroyInternalState();
        this[_MaterialCheckboxComponent_0_5].ngOnDestroy();
      }
      [_handleEvent_0$]($36event) {
        let local_option = optimizations.unsafeCast(T, this.locals[$_get]("$implicit"));
        let _ctx = this.ctx;
        _ctx.setSelectionState(local_option, core.bool._check($36event));
      }
    }
    (_ViewMaterialTreeGroupFlatCheckComponent1.new = function(parentView, parentIndex) {
      this[_compView_0$0] = null;
      this[_MaterialCheckboxComponent_0_5] = null;
      this[_appEl_1$0] = null;
      this[_NgIf_1_9$0] = null;
      this[_appEl_2$0] = null;
      this[_NgIf_2_9$0] = null;
      this[_expr_0$0] = null;
      this[_expr_1$0] = null;
      this[_expr_2$0] = null;
      this[_expr_3$0] = null;
      this[_el_0$] = null;
      _ViewMaterialTreeGroupFlatCheckComponent1.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeGroupFlatCheckComponent1.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatCheckComponent1);
    _ViewMaterialTreeGroupFlatCheckComponent1.prototype[_is__ViewMaterialTreeGroupFlatCheckComponent1_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatCheckComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatCheckComponent1.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      [_handleEvent_0$]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatCheckComponent1, "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatCheckComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatCheckComponent1.__proto__),
      [_compView_0$0]: dart.fieldType(material_checkbox$46template.ViewMaterialCheckboxComponent0),
      [_MaterialCheckboxComponent_0_5]: dart.fieldType(material_checkbox.MaterialCheckboxComponent),
      [_appEl_1$0]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_1_9$0]: dart.fieldType(ng_if.NgIf),
      [_appEl_2$0]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_2_9$0]: dart.fieldType(ng_if.NgIf),
      [_expr_0$0]: dart.fieldType(core.bool),
      [_expr_1$0]: dart.fieldType(core.bool),
      [_expr_2$0]: dart.fieldType(core.bool),
      [_expr_3$0]: dart.fieldType(core.bool),
      [_el_0$]: dart.fieldType(html.Element)
    }));
    return _ViewMaterialTreeGroupFlatCheckComponent1;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1, _is__ViewMaterialTreeGroupFlatCheckComponent1_default);
  const _is__ViewMaterialTreeGroupFlatCheckComponent2_default = Symbol('_is__ViewMaterialTreeGroupFlatCheckComponent2_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2$ = dart.generic(T => {
    class _ViewMaterialTreeGroupFlatCheckComponent2 extends embedded_view.EmbeddedView$(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)) {
      build() {
        this[_compView_0$0] = new dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
        let _el_0 = this[_compView_0$0].rootElement;
        this.updateChildClassNonHtml(_el_0, "item component");
        this.addShimC(_el_0);
        this[_appEl_0$] = new view_container.ViewContainer.new(0, null, this, _el_0);
        this[_DynamicComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(dynamic_component.DynamicComponent, dart.wrapType(dynamic_component.DynamicComponent), dart.fn(() => new dynamic_component.DynamicComponent.new(dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.injectorGet(dart.wrapType(dynamic_component_loader.SlowComponentLoader), this.parentView.parentIndex)), this[_appEl_0$]), VoidToDynamicComponent())) : new dynamic_component.DynamicComponent.new(dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.injectorGet(dart.wrapType(dynamic_component_loader.SlowComponentLoader), this.parentView.parentIndex)), this[_appEl_0$]);
        this[_compView_0$0].create(this[_DynamicComponent_0_8]);
        this.initRootNode(this[_appEl_0$]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let local_option = optimizations.unsafeCast(T, optimizations.unsafeCast(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1, this.parentView).locals[$_get]("$implicit"));
        changed = false;
        let currVal_0 = _ctx.getComponentType(local_option);
        if (dart.test(check_binding.checkBinding(this[_expr_0$0], currVal_0, "getComponentType(option)", ""))) {
          this[_DynamicComponent_0_8].componentType = currVal_0;
          changed = true;
          this[_expr_0$0] = currVal_0;
        }
        let currVal_1 = _ctx.getComponentFactory(local_option);
        if (dart.test(check_binding.checkBinding(this[_expr_1$0], currVal_1, "getComponentFactory(option)", ""))) {
          this[_DynamicComponent_0_8].componentFactory = currVal_1;
          changed = true;
          this[_expr_1$0] = currVal_1;
        }
        let currVal_2 = local_option;
        if (dart.test(check_binding.checkBinding(this[_expr_2$0], currVal_2, "option", ""))) {
          this[_DynamicComponent_0_8].value = currVal_2;
          changed = true;
          this[_expr_2$0] = currVal_2;
        }
        if (changed) {
          this[_compView_0$0].markAsCheckOnce();
        }
        if (changed) {
          this[_DynamicComponent_0_8].ngAfterChanges();
        }
        this[_appEl_0$].detectChangesInNestedViews();
        this[_compView_0$0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_0$].destroyNestedViews();
        this[_compView_0$0].destroyInternalState();
        this[_DynamicComponent_0_8].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupFlatCheckComponent2.new = function(parentView, parentIndex) {
      this[_compView_0$0] = null;
      this[_appEl_0$] = null;
      this[_DynamicComponent_0_8] = null;
      this[_expr_0$0] = null;
      this[_expr_1$0] = null;
      this[_expr_2$0] = null;
      _ViewMaterialTreeGroupFlatCheckComponent2.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeGroupFlatCheckComponent2.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatCheckComponent2);
    _ViewMaterialTreeGroupFlatCheckComponent2.prototype[_is__ViewMaterialTreeGroupFlatCheckComponent2_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatCheckComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatCheckComponent2.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatCheckComponent2, "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatCheckComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatCheckComponent2.__proto__),
      [_compView_0$0]: dart.fieldType(dynamic_component$46template.ViewDynamicComponent0),
      [_appEl_0$]: dart.fieldType(view_container.ViewContainer),
      [_DynamicComponent_0_8]: dart.fieldType(dynamic_component.DynamicComponent),
      [_expr_0$0]: dart.fieldType(dart.dynamic),
      [_expr_1$0]: dart.fieldType(dart.dynamic),
      [_expr_2$0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeGroupFlatCheckComponent2;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2, _is__ViewMaterialTreeGroupFlatCheckComponent2_default);
  const _is__ViewMaterialTreeGroupFlatCheckComponent3_default = Symbol('_is__ViewMaterialTreeGroupFlatCheckComponent3_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3$ = dart.generic(T => {
    class _ViewMaterialTreeGroupFlatCheckComponent3 extends embedded_view.EmbeddedView$(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        this.updateChildClass(html.HtmlElement._check(_el_0), "item text");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1$].element);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let local_option = optimizations.unsafeCast(T, optimizations.unsafeCast(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1, this.parentView).locals[$_get]("$implicit"));
        this[_textBinding_1$].updateText(interpolate.interpolateString0(_ctx.getOptionAsText(local_option)));
      }
    }
    (_ViewMaterialTreeGroupFlatCheckComponent3.new = function(parentView, parentIndex) {
      this[_textBinding_1$] = new text_binding.TextBinding.new();
      _ViewMaterialTreeGroupFlatCheckComponent3.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeGroupFlatCheckComponent3.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatCheckComponent3);
    _ViewMaterialTreeGroupFlatCheckComponent3.prototype[_is__ViewMaterialTreeGroupFlatCheckComponent3_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatCheckComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatCheckComponent3.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatCheckComponent3, "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatCheckComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatCheckComponent3.__proto__),
      [_textBinding_1$]: dart.finalFieldType(text_binding.TextBinding)
    }));
    return _ViewMaterialTreeGroupFlatCheckComponent3;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3, _is__ViewMaterialTreeGroupFlatCheckComponent3_default);
  const _is__ViewMaterialTreeGroupFlatCheckComponentHost0_default = Symbol('_is__ViewMaterialTreeGroupFlatCheckComponentHost0_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0$ = dart.generic(T => {
    let ViewMaterialTreeGroupFlatCheckComponent0OfT = () => (ViewMaterialTreeGroupFlatCheckComponent0OfT = dart.constFn(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0$(T)))();
    let MaterialTreeGroupFlatCheckComponentOfT = () => (MaterialTreeGroupFlatCheckComponentOfT = dart.constFn(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)))();
    let MaterialTreeRootOfT = () => (MaterialTreeRootOfT = dart.constFn(material_tree_root.MaterialTreeRoot$(T)))();
    let VoidToMaterialTreeGroupFlatCheckComponentOfT = () => (VoidToMaterialTreeGroupFlatCheckComponentOfT = dart.constFn(dart.fnType(MaterialTreeGroupFlatCheckComponentOfT(), [])))();
    class _ViewMaterialTreeGroupFlatCheckComponentHost0 extends host_view.HostView$(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)) {
      build() {
        this.componentView = new (ViewMaterialTreeGroupFlatCheckComponent0OfT()).new(this, 0);
        let _el_0 = this.componentView.rootElement;
        this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeGroupFlatCheckComponentOfT(), dart.wrapType(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), dart.fn(() => new (MaterialTreeGroupFlatCheckComponentOfT()).new(MaterialTreeRootOfT()._check(this.injectorGet(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentIndex)), this.componentView, material_dropdown_base.DropdownHandle._check(this.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentIndex))), VoidToMaterialTreeGroupFlatCheckComponentOfT())) : new (MaterialTreeGroupFlatCheckComponentOfT()).new(MaterialTreeRootOfT()._check(this.injectorGet(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentIndex)), this.componentView, material_dropdown_base.DropdownHandle._check(this.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentIndex)));
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let firstCheck = this.firstCheck;
        this.componentView.detectHostChanges(firstCheck);
        this.componentView.detectChanges();
      }
    }
    (_ViewMaterialTreeGroupFlatCheckComponentHost0.new = function(injector) {
      _ViewMaterialTreeGroupFlatCheckComponentHost0.__proto__.new.call(this, injector);
      ;
    }).prototype = _ViewMaterialTreeGroupFlatCheckComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatCheckComponentHost0);
    _ViewMaterialTreeGroupFlatCheckComponentHost0.prototype[_is__ViewMaterialTreeGroupFlatCheckComponentHost0_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatCheckComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatCheckComponentHost0.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatCheckComponentHost0, "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart");
    return _ViewMaterialTreeGroupFlatCheckComponentHost0;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0, _is__ViewMaterialTreeGroupFlatCheckComponentHost0_default);
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent1 = function viewFactory_MaterialTreeGroupFlatListComponent1(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1$(T)).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent2 = function viewFactory_MaterialTreeGroupFlatListComponent2(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2$(T)).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent3 = function viewFactory_MaterialTreeGroupFlatListComponent3(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3$(T)).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponentHost0 = function viewFactory_MaterialTreeGroupFlatListComponentHost0(T, injector) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0$(T)).new(injector);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent1 = function viewFactory_MaterialTreeGroupFlatRadioComponent1(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1$(T)).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent2 = function viewFactory_MaterialTreeGroupFlatRadioComponent2(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2$(T)).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent3 = function viewFactory_MaterialTreeGroupFlatRadioComponent3(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3$(T)).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponentHost0 = function viewFactory_MaterialTreeGroupFlatRadioComponentHost0(T, injector) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0$(T)).new(injector);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent1 = function viewFactory_MaterialTreeGroupFlatCheckComponent1(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1$(T)).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent2 = function viewFactory_MaterialTreeGroupFlatCheckComponent2(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2$(T)).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent3 = function viewFactory_MaterialTreeGroupFlatCheckComponent3(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3$(T)).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponentHost0 = function viewFactory_MaterialTreeGroupFlatCheckComponentHost0(T, injector) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0$(T)).new(injector);
  };
  material_tree_group_flat$46template.initReflector = function initReflector$0() {
    if (dart.test(material_tree_group_flat$46template._visited)) {
      return;
    }
    material_tree_group_flat$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_tree_group_flat.MaterialTreeGroupFlatListComponent), material_tree_group_flat$46template.MaterialTreeGroupFlatListComponentNgFactory);
    reflector.registerComponent(dart.wrapType(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), material_tree_group_flat$46template.MaterialTreeGroupFlatRadioComponentNgFactory);
    reflector.registerComponent(dart.wrapType(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), material_tree_group_flat$46template.MaterialTreeGroupFlatCheckComponentNgFactory);
    angular$46template.initReflector();
    button_decorator$46template.initReflector();
    dynamic_component$46template.initReflector();
    material_checkbox$46template.initReflector();
    material_radio$46template.initReflector();
    material_radio_group$46template.initReflector();
    material_dropdown_base$46template.initReflector();
    selection_model$46template.initReflector();
    material_tree_node$46template.initReflector();
    material_tree_root$46template.initReflector();
  };
  dart.copyProperties(material_tree_group_flat$46template, {
    get MaterialTreeGroupFlatListComponentNgFactory() {
      return material_tree_group_flat$46template._MaterialTreeGroupFlatListComponentNgFactory;
    },
    get MaterialTreeGroupFlatRadioComponentNgFactory() {
      return material_tree_group_flat$46template._MaterialTreeGroupFlatRadioComponentNgFactory;
    },
    get MaterialTreeGroupFlatCheckComponentNgFactory() {
      return material_tree_group_flat$46template._MaterialTreeGroupFlatCheckComponentNgFactory;
    }
  });
  let C13;
  let C12;
  let C11;
  let C16;
  let C15;
  let C14;
  let C19;
  let C18;
  let C17;
  dart.defineLazy(material_tree_group_flat$46template, {
    /*material_tree_group_flat$46template.styles$MaterialTreeGroupFlatListComponent*/get styles$MaterialTreeGroupFlatListComponent() {
      return [material_tree_group_flat_list$46scss$46css$46shim.styles];
    },
    /*material_tree_group_flat$46template._MaterialTreeGroupFlatListComponentNgFactory*/get _MaterialTreeGroupFlatListComponentNgFactory() {
      return C11 || CT.C11;
    },
    /*material_tree_group_flat$46template.styles$MaterialTreeGroupFlatListComponentHost*/get styles$MaterialTreeGroupFlatListComponentHost() {
      return C3 || CT.C3;
    },
    /*material_tree_group_flat$46template.styles$MaterialTreeGroupFlatRadioComponent*/get styles$MaterialTreeGroupFlatRadioComponent() {
      return [material_tree_group_flat_radio$46scss$46css$46shim.styles];
    },
    /*material_tree_group_flat$46template._MaterialTreeGroupFlatRadioComponentNgFactory*/get _MaterialTreeGroupFlatRadioComponentNgFactory() {
      return C14 || CT.C14;
    },
    /*material_tree_group_flat$46template.styles$MaterialTreeGroupFlatRadioComponentHost*/get styles$MaterialTreeGroupFlatRadioComponentHost() {
      return C3 || CT.C3;
    },
    /*material_tree_group_flat$46template.styles$MaterialTreeGroupFlatCheckComponent*/get styles$MaterialTreeGroupFlatCheckComponent() {
      return [material_tree_group_flat_check$46scss$46css$46shim.styles];
    },
    /*material_tree_group_flat$46template._MaterialTreeGroupFlatCheckComponentNgFactory*/get _MaterialTreeGroupFlatCheckComponentNgFactory() {
      return C17 || CT.C17;
    },
    /*material_tree_group_flat$46template.styles$MaterialTreeGroupFlatCheckComponentHost*/get styles$MaterialTreeGroupFlatCheckComponentHost() {
      return C3 || CT.C3;
    },
    /*material_tree_group_flat$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.defineLazy(material_tree_group_flat_check$46scss$46css$46shim, {
    /*material_tree_group_flat_check$46scss$46css$46shim.styles*/get styles() {
      return ["material-checkbox._ngcontent-%ID%{display:block;font-family:inherit;font-size:15px;line-height:32px;padding:0 24px;position:relative;white-space:nowrap;display:flex;align-items:center;color:rgba(0,0,0,0.87);cursor:pointer}material-checkbox.disabled._ngcontent-%ID%{pointer-events:none}material-checkbox._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.54);width:40px}material-checkbox.disabled._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.38)}material-checkbox._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.54);margin-left:auto}material-checkbox.disabled._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.38)}material-checkbox._ngcontent-%ID%  .submenu-icon{transform:rotate(-90deg)}material-checkbox:not([separator=present]):hover._ngcontent-%ID%,material-checkbox:not([separator=present]):focus._ngcontent-%ID%,material-checkbox:not([separator=present]).active._ngcontent-%ID%{background:#eee}material-checkbox:not([separator=present]).disabled._ngcontent-%ID%{background:none;color:rgba(0,0,0,0.38);cursor:default;pointer-events:all}"];
    }
  });
  dart.defineLazy(material_tree_group_flat_radio$46scss$46css$46shim, {
    /*material_tree_group_flat_radio$46scss$46css$46shim.styles*/get styles() {
      return ["material-radio._ngcontent-%ID%{display:block;font-family:inherit;font-size:15px;line-height:32px;padding:0 24px;position:relative;white-space:nowrap;display:flex;align-items:center;color:rgba(0,0,0,0.87);cursor:pointer;align-items:flex-start}material-radio.disabled._ngcontent-%ID%{pointer-events:none}material-radio._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.54);width:40px}material-radio.disabled._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.38)}material-radio._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.54);margin-left:auto}material-radio.disabled._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.38)}material-radio._ngcontent-%ID%  .submenu-icon{transform:rotate(-90deg)}material-radio:not([separator=present]):hover._ngcontent-%ID%,material-radio:not([separator=present]):focus._ngcontent-%ID%,material-radio:not([separator=present]).active._ngcontent-%ID%{background:#eee}material-radio:not([separator=present]).disabled._ngcontent-%ID%{background:none;color:rgba(0,0,0,0.38);cursor:default;pointer-events:all}"];
    }
  });
  dart.defineLazy(material_tree_group_flat_list$46scss$46css$46shim, {
    /*material_tree_group_flat_list$46scss$46css$46shim.styles*/get styles() {
      return ["div._ngcontent-%ID%{display:block;font-family:inherit;font-size:15px;line-height:32px;padding:0 24px;position:relative;white-space:nowrap}div.disabled._ngcontent-%ID%{pointer-events:none}div._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.54);width:40px}div.disabled._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.38)}div._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.54);margin-left:auto}div.disabled._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.38)}div._ngcontent-%ID%  .submenu-icon{transform:rotate(-90deg)}"];
    }
  });
  material_tree_root$46template.initReflector = function initReflector$1() {
    if (dart.test(material_tree_root$46template._visited)) {
      return;
    }
    material_tree_root$46template._visited = true;
    select$46template.initReflector();
    selection_container$46template.initReflector();
    has_factory$46template.initReflector();
  };
  dart.defineLazy(material_tree_root$46template, {
    /*material_tree_root$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_tree_node$46template.initReflector = function initReflector$2() {
    if (dart.test(material_tree_node$46template._visited)) {
      return;
    }
    material_tree_node$46template._visited = true;
    angular$46template.initReflector();
    select$46template.initReflector();
    selection_model$46template.initReflector();
    selection_options$46template.initReflector();
    has_factory$46template.initReflector();
    material_tree_expand_state$46template.initReflector();
    material_tree_root$46template.initReflector();
    async$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.defineLazy(material_tree_node$46template, {
    /*material_tree_node$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_tree_expand_state$46template.initReflector = function initReflector$3() {
  };
  const _appEl_1$1 = dart.privateName(material_tree_group$46template, "_appEl_1");
  const _NgFor_1_9$ = dart.privateName(material_tree_group$46template, "_NgFor_1_9");
  const _appEl_2$1 = dart.privateName(material_tree_group$46template, "_appEl_2");
  const _NgIf_2_9$1 = dart.privateName(material_tree_group$46template, "_NgIf_2_9");
  const _expr_0$1 = dart.privateName(material_tree_group$46template, "_expr_0");
  const _is_ViewMaterialTreeGroupComponent0_default = Symbol('_is_ViewMaterialTreeGroupComponent0_default');
  material_tree_group$46template.ViewMaterialTreeGroupComponent0$ = dart.generic(T => {
    class ViewMaterialTreeGroupComponent0 extends component_view.ComponentView$(material_tree_group.MaterialTreeGroupComponent$(T)) {
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/group/material_tree_group.dart" : null;
      }
      build() {
        let parentRenderNode = this.initViewRoot();
        let doc = html.document;
        let _el_0 = dom_helpers.appendElement(doc, parentRenderNode, "ul");
        this.addShimC(html.HtmlElement._check(_el_0));
        let _anchor_1 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_1$1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$1], dart.fn((parentView, parentIndex) => material_tree_group$46template.viewFactory_MaterialTreeGroupComponent1(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgFor_1_9$] = new ng_for.NgFor.new(this[_appEl_1$1], _TemplateRef_1_8);
        let _anchor_2 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_2$1] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$1], dart.fn((parentView, parentIndex) => material_tree_group$46template.viewFactory_MaterialTreeGroupComponent9(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_2_9$1] = new ng_if.NgIf.new(this[_appEl_2$1], _TemplateRef_2_8);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.visibleGroup;
        if (dart.test(check_binding.checkBinding(this[_expr_0$1], currVal_0, "visibleGroup", ""))) {
          this[_NgFor_1_9$].ngForOf = currVal_0;
          this[_expr_0$1] = currVal_0;
        }
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          this[_NgFor_1_9$].ngDoCheck();
        }
        this[_NgIf_2_9$1].ngIf = _ctx.viewMoreLinkVisible;
        this[_appEl_1$1].detectChangesInNestedViews();
        this[_appEl_2$1].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_1$1].destroyNestedViews();
        this[_appEl_2$1].destroyNestedViews();
      }
      detectHostChanges(firstCheck) {
        let _ctx = this.ctx;
        if (dart.test(firstCheck)) {
          if (_ctx.isMaterialTreeGroup != null) {
            dom_helpers.updateClassBindingNonHtml(this.rootElement, "material-tree-group", _ctx.isMaterialTreeGroup);
          }
        }
      }
      initComponentStyles() {
        let styles = material_tree_group$46template.ViewMaterialTreeGroupComponent0._componentStyles;
        if (styles == null) {
          material_tree_group$46template.ViewMaterialTreeGroupComponent0._componentStyles = styles = material_tree_group$46template.ViewMaterialTreeGroupComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_tree_group$46template.styles$MaterialTreeGroupComponent, material_tree_group$46template.ViewMaterialTreeGroupComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialTreeGroupComponent0.new = function(parentView, parentIndex) {
      this[_appEl_1$1] = null;
      this[_NgFor_1_9$] = null;
      this[_appEl_2$1] = null;
      this[_NgIf_2_9$1] = null;
      this[_expr_0$1] = null;
      ViewMaterialTreeGroupComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
      this.initComponentStyles();
      this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-tree-group"));
      dom_helpers.updateAttribute(this.rootElement, "role", "group");
    }).prototype = ViewMaterialTreeGroupComponent0.prototype;
    dart.addTypeTests(ViewMaterialTreeGroupComponent0);
    ViewMaterialTreeGroupComponent0.prototype[_is_ViewMaterialTreeGroupComponent0_default] = true;
    dart.setMethodSignature(ViewMaterialTreeGroupComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialTreeGroupComponent0.__proto__),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(ViewMaterialTreeGroupComponent0, "package:angular_components/src/material_tree/group/material_tree_group.template.dart");
    dart.setFieldSignature(ViewMaterialTreeGroupComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialTreeGroupComponent0.__proto__),
      [_appEl_1$1]: dart.fieldType(view_container.ViewContainer),
      [_NgFor_1_9$]: dart.fieldType(ng_for.NgFor),
      [_appEl_2$1]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_2_9$1]: dart.fieldType(ng_if.NgIf),
      [_expr_0$1]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialTreeGroupComponent0;
  });
  material_tree_group$46template.ViewMaterialTreeGroupComponent0 = material_tree_group$46template.ViewMaterialTreeGroupComponent0$();
  dart.defineLazy(material_tree_group$46template.ViewMaterialTreeGroupComponent0, {
    /*material_tree_group$46template.ViewMaterialTreeGroupComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.addTypeTests(material_tree_group$46template.ViewMaterialTreeGroupComponent0, _is_ViewMaterialTreeGroupComponent0_default);
  const _ButtonDirective_0_5 = dart.privateName(material_tree_group$46template, "_ButtonDirective_0_5");
  const _KeyboardOnlyFocusIndicatorDirective_0_6 = dart.privateName(material_tree_group$46template, "_KeyboardOnlyFocusIndicatorDirective_0_6");
  const _appEl_3$ = dart.privateName(material_tree_group$46template, "_appEl_3");
  const _NgIf_3_9$ = dart.privateName(material_tree_group$46template, "_NgIf_3_9");
  const _appEl_6$ = dart.privateName(material_tree_group$46template, "_appEl_6");
  const _NgIf_6_9$ = dart.privateName(material_tree_group$46template, "_NgIf_6_9");
  const _appEl_7$ = dart.privateName(material_tree_group$46template, "_appEl_7");
  const _NgIf_7_9 = dart.privateName(material_tree_group$46template, "_NgIf_7_9");
  const _appEl_10 = dart.privateName(material_tree_group$46template, "_appEl_10");
  const _NgIf_10_9 = dart.privateName(material_tree_group$46template, "_NgIf_10_9");
  const _appEl_12 = dart.privateName(material_tree_group$46template, "_appEl_12");
  const _NgFor_12_9 = dart.privateName(material_tree_group$46template, "_NgFor_12_9");
  const _expr_1$1 = dart.privateName(material_tree_group$46template, "_expr_1");
  const _expr_2$1 = dart.privateName(material_tree_group$46template, "_expr_2");
  const _expr_3$1 = dart.privateName(material_tree_group$46template, "_expr_3");
  const _expr_5$0 = dart.privateName(material_tree_group$46template, "_expr_5");
  const _expr_6$ = dart.privateName(material_tree_group$46template, "_expr_6");
  const _expr_7$ = dart.privateName(material_tree_group$46template, "_expr_7");
  const _expr_8 = dart.privateName(material_tree_group$46template, "_expr_8");
  const _el_0$0 = dart.privateName(material_tree_group$46template, "_el_0");
  const _el_1 = dart.privateName(material_tree_group$46template, "_el_1");
  const _el_2 = dart.privateName(material_tree_group$46template, "_el_2");
  const _el_4$ = dart.privateName(material_tree_group$46template, "_el_4");
  const _handleEvent_0$0 = dart.privateName(material_tree_group$46template, "_handleEvent_0");
  const _handleEvent_1$ = dart.privateName(material_tree_group$46template, "_handleEvent_1");
  const _is__ViewMaterialTreeGroupComponent1_default = Symbol('_is__ViewMaterialTreeGroupComponent1_default');
  material_tree_group$46template._ViewMaterialTreeGroupComponent1$ = dart.generic(T => {
    class _ViewMaterialTreeGroupComponent1 extends embedded_view.EmbeddedView$(material_tree_group.MaterialTreeGroupComponent$(T)) {
      build() {
        let doc = html.document;
        this[_el_0$0] = doc[$createElement]("li");
        dom_helpers.setAttribute(this[_el_0$0], "buttonDecorator", "");
        this.updateChildClass(html.HtmlElement._check(this[_el_0$0]), "material-tree-option");
        dom_helpers.setAttribute(this[_el_0$0], "keyboardOnlyFocusIndicator", "");
        this.addShimE(this[_el_0$0]);
        this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0$0], null));
        this[_KeyboardOnlyFocusIndicatorDirective_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, dart.wrapType(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0$0]), dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirective())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0$0]), dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentView.parentIndex)));
        this[_el_1] = dom_helpers.appendDiv(doc, this[_el_0$0]);
        this.updateChildClass(this[_el_1], "material-tree-item");
        dom_helpers.setAttribute(this[_el_1], "role", "treeitem");
        this.addShimC(this[_el_1]);
        this[_el_2] = dom_helpers.appendDiv(doc, this[_el_1]);
        this.updateChildClass(this[_el_2], "material-tree-shift");
        this.addShimC(this[_el_2]);
        let _anchor_3 = dom_helpers.appendAnchor(this[_el_2]);
        this[_appEl_3$] = new view_container.ViewContainer.new(3, 2, this, _anchor_3);
        let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3$], dart.fn((parentView, parentIndex) => material_tree_group$46template.viewFactory_MaterialTreeGroupComponent2(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_3_9$] = new ng_if.NgIf.new(this[_appEl_3$], _TemplateRef_3_8);
        this[_el_4$] = dom_helpers.appendDiv(doc, this[_el_2]);
        this.updateChildClass(this[_el_4$], "material-tree-border");
        this.addShimC(this[_el_4$]);
        let _text_5 = dom_helpers.appendText(this[_el_2], " ");
        let _anchor_6 = dom_helpers.appendAnchor(this[_el_2]);
        this[_appEl_6$] = new view_container.ViewContainer.new(6, 2, this, _anchor_6);
        let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6$], dart.fn((parentView, parentIndex) => material_tree_group$46template.viewFactory_MaterialTreeGroupComponent5(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_6_9$] = new ng_if.NgIf.new(this[_appEl_6$], _TemplateRef_6_8);
        let _anchor_7 = dom_helpers.appendAnchor(this[_el_2]);
        this[_appEl_7$] = new view_container.ViewContainer.new(7, 2, this, _anchor_7);
        let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7$], dart.fn((parentView, parentIndex) => material_tree_group$46template.viewFactory_MaterialTreeGroupComponent6(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_7_9] = new ng_if.NgIf.new(this[_appEl_7$], _TemplateRef_7_8);
        let _text_8 = dom_helpers.appendText(this[_el_2], " ");
        let _text_9 = dom_helpers.appendText(this[_el_2], " ");
        let _anchor_10 = dom_helpers.appendAnchor(this[_el_2]);
        this[_appEl_10] = new view_container.ViewContainer.new(10, 2, this, _anchor_10);
        let _TemplateRef_10_8 = new template_ref.TemplateRef.new(this[_appEl_10], dart.fn((parentView, parentIndex) => material_tree_group$46template.viewFactory_MaterialTreeGroupComponent7(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_10_9] = new ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
        let _text_11 = dom_helpers.appendText(this[_el_0$0], " ");
        let _anchor_12 = dom_helpers.appendAnchor(this[_el_0$0]);
        this[_appEl_12] = new view_container.ViewContainer.new(12, 0, this, _anchor_12);
        let _TemplateRef_12_8 = new template_ref.TemplateRef.new(this[_appEl_12], dart.fn((parentView, parentIndex) => material_tree_group$46template.viewFactory_MaterialTreeGroupComponent8(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgFor_12_9] = new ng_for.NgFor.new(this[_appEl_12], _TemplateRef_12_8);
        this[_el_0$0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handleEvent_0$0)));
        this[_el_0$0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
        this[_el_0$0][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'keydown')));
        this[_el_0$0][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
        this[_el_0$0][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'onMouseInteraction')));
        this[_el_0$0][$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'onFocus')));
        let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handleEvent_1$)));
        this.initRootNodesAndSubscriptions(JSArrayOfObject().of([this[_el_0$0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(button_decorator.ButtonDirective) && dart.notNull(nodeIndex) <= 12) {
          return this[_ButtonDirective_0_5].instance;
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.firstCheck;
        let local_option = this.locals[$_get]("$implicit");
        this[_NgIf_3_9$].ngIf = _ctx.showCheckbox(local_option);
        this[_NgIf_6_9$].ngIf = _ctx.useComponentRenderer;
        this[_NgIf_7_9].ngIf = !dart.test(_ctx.useComponentRenderer);
        this[_NgIf_10_9].ngIf = _ctx.hasChildren(T._check(local_option));
        let currVal_8 = _ctx.getChildGroups(local_option);
        if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "getChildGroups(option)", ""))) {
          this[_NgFor_12_9].ngForOf = currVal_8;
          this[_expr_8] = currVal_8;
        }
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          this[_NgFor_12_9].ngDoCheck();
        }
        this[_appEl_3$].detectChangesInNestedViews();
        this[_appEl_6$].detectChangesInNestedViews();
        this[_appEl_7$].detectChangesInNestedViews();
        this[_appEl_10].detectChangesInNestedViews();
        this[_appEl_12].detectChangesInNestedViews();
        let currVal_0 = _ctx.isSelected(T._check(local_option));
        if (dart.test(check_binding.checkBinding(this[_expr_0$1], currVal_0, "isSelected(option)", ""))) {
          dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_0$0]), "selected", currVal_0);
          this[_expr_0$1] = currVal_0;
        }
        let currVal_1 = _ctx.isSelectable(T._check(local_option));
        if (dart.test(check_binding.checkBinding(this[_expr_1$1], currVal_1, "isSelectable(option)", ""))) {
          dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_0$0]), "selectable", currVal_1);
          this[_expr_1$1] = currVal_1;
        }
        this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0$0]);
        let currVal_2 = _ctx.getIndent(local_option);
        if (dart.test(check_binding.checkBinding(this[_expr_2$1], currVal_2, "getIndent(option)", ""))) {
          this[_el_1].style[$setProperty]("padding-left", currVal_2);
          this[_expr_2$1] = currVal_2;
        }
        let currVal_3 = interpolate.interpolate0(_ctx.isSelected(T._check(local_option)));
        if (dart.test(check_binding.checkBinding(this[_expr_3$1], currVal_3, "{{isSelected(option)}}", ""))) {
          dom_helpers.setAttribute(this[_el_1], "aria-selected", core.String._check(currVal_3));
          this[_expr_3$1] = currVal_3;
        }
        if (dart.test(firstCheck)) {
          if (_ctx.fixedPadding != null) {
            this[_el_2].style[$setProperty]("padding-left", _ctx.fixedPadding);
          }
        }
        let currVal_5 = _ctx.hasChildren(T._check(local_option));
        if (dart.test(check_binding.checkBinding(this[_expr_5$0], currVal_5, "hasChildren(option)", ""))) {
          dom_helpers.updateClassBinding(this[_el_4$], "is-parent", currVal_5);
          this[_expr_5$0] = currVal_5;
        }
        let currVal_6 = _ctx.isExpanded(T._check(local_option));
        if (dart.test(check_binding.checkBinding(this[_expr_6$], currVal_6, "isExpanded(option)", ""))) {
          dom_helpers.updateClassBinding(this[_el_4$], "is-expanded", currVal_6);
          this[_expr_6$] = currVal_6;
        }
        let currVal_7 = _ctx.level === 0;
        if (dart.test(check_binding.checkBinding(this[_expr_7$], currVal_7, "level==0", ""))) {
          dom_helpers.updateClassBinding(this[_el_4$], "root-border", currVal_7);
          this[_expr_7$] = currVal_7;
        }
      }
      destroyInternal() {
        this[_appEl_3$].destroyNestedViews();
        this[_appEl_6$].destroyNestedViews();
        this[_appEl_7$].destroyNestedViews();
        this[_appEl_10].destroyNestedViews();
        this[_appEl_12].destroyNestedViews();
      }
      [_handleEvent_0$0]($36event) {
        this[_ButtonDirective_0_5].instance.handleClick(html.MouseEvent._check($36event));
        this[_KeyboardOnlyFocusIndicatorDirective_0_6].onMouseInteraction();
      }
      [_handleEvent_1$]($36event) {
        let local_option = this.locals[$_get]("$implicit");
        let _ctx = this.ctx;
        _ctx.handleSelectionOrExpansion(html.Event._check($36event), local_option);
      }
    }
    (_ViewMaterialTreeGroupComponent1.new = function(parentView, parentIndex) {
      this[_ButtonDirective_0_5] = null;
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
      this[_appEl_3$] = null;
      this[_NgIf_3_9$] = null;
      this[_appEl_6$] = null;
      this[_NgIf_6_9$] = null;
      this[_appEl_7$] = null;
      this[_NgIf_7_9] = null;
      this[_appEl_10] = null;
      this[_NgIf_10_9] = null;
      this[_appEl_12] = null;
      this[_NgFor_12_9] = null;
      this[_expr_0$1] = null;
      this[_expr_1$1] = null;
      this[_expr_2$1] = null;
      this[_expr_3$1] = null;
      this[_expr_5$0] = null;
      this[_expr_6$] = null;
      this[_expr_7$] = null;
      this[_expr_8] = null;
      this[_el_0$0] = null;
      this[_el_1] = null;
      this[_el_2] = null;
      this[_el_4$] = null;
      _ViewMaterialTreeGroupComponent1.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeGroupComponent1.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent1);
    _ViewMaterialTreeGroupComponent1.prototype[_is__ViewMaterialTreeGroupComponent1_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent1.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      [_handleEvent_0$0]: dart.fnType(dart.void, [dart.dynamic]),
      [_handleEvent_1$]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupComponent1, "package:angular_components/src/material_tree/group/material_tree_group.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent1.__proto__),
      [_ButtonDirective_0_5]: dart.fieldType(button_decorator$46template.ButtonDirectiveNgCd),
      [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
      [_appEl_3$]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_3_9$]: dart.fieldType(ng_if.NgIf),
      [_appEl_6$]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_6_9$]: dart.fieldType(ng_if.NgIf),
      [_appEl_7$]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_7_9]: dart.fieldType(ng_if.NgIf),
      [_appEl_10]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_10_9]: dart.fieldType(ng_if.NgIf),
      [_appEl_12]: dart.fieldType(view_container.ViewContainer),
      [_NgFor_12_9]: dart.fieldType(ng_for.NgFor),
      [_expr_0$1]: dart.fieldType(core.bool),
      [_expr_1$1]: dart.fieldType(core.bool),
      [_expr_2$1]: dart.fieldType(dart.dynamic),
      [_expr_3$1]: dart.fieldType(dart.dynamic),
      [_expr_5$0]: dart.fieldType(core.bool),
      [_expr_6$]: dart.fieldType(core.bool),
      [_expr_7$]: dart.fieldType(core.bool),
      [_expr_8]: dart.fieldType(dart.dynamic),
      [_el_0$0]: dart.fieldType(html.Element),
      [_el_1]: dart.fieldType(html.DivElement),
      [_el_2]: dart.fieldType(html.DivElement),
      [_el_4$]: dart.fieldType(html.DivElement)
    }));
    return _ViewMaterialTreeGroupComponent1;
  });
  material_tree_group$46template._ViewMaterialTreeGroupComponent1 = material_tree_group$46template._ViewMaterialTreeGroupComponent1$();
  dart.addTypeTests(material_tree_group$46template._ViewMaterialTreeGroupComponent1, _is__ViewMaterialTreeGroupComponent1_default);
  const _NgIf_1_9$1 = dart.privateName(material_tree_group$46template, "_NgIf_1_9");
  const _is__ViewMaterialTreeGroupComponent2_default = Symbol('_is__ViewMaterialTreeGroupComponent2_default');
  material_tree_group$46template._ViewMaterialTreeGroupComponent2$ = dart.generic(T => {
    class _ViewMaterialTreeGroupComponent2 extends embedded_view.EmbeddedView$(material_tree_group.MaterialTreeGroupComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("div");
        this.updateChildClass(html.HtmlElement._check(_el_0), "tree-selection-state");
        this.addShimC(html.HtmlElement._check(_el_0));
        let _anchor_1 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_1$1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$1], dart.fn((parentView, parentIndex) => material_tree_group$46template.viewFactory_MaterialTreeGroupComponent3(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_1_9$1] = new ng_if.NgIf.new(this[_appEl_1$1], _TemplateRef_1_8);
        let _anchor_2 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_2$1] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$1], dart.fn((parentView, parentIndex) => material_tree_group$46template.viewFactory_MaterialTreeGroupComponent4(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_2_9$1] = new ng_if.NgIf.new(this[_appEl_2$1], _TemplateRef_2_8);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let local_option = optimizations.unsafeCast(material_tree_group$46template._ViewMaterialTreeGroupComponent1, this.parentView).locals[$_get]("$implicit");
        this[_NgIf_1_9$1].ngIf = _ctx.isMultiSelect;
        this[_NgIf_2_9$1].ngIf = !dart.test(_ctx.isMultiSelect) && dart.test(_ctx.isSelected(T._check(local_option)));
        this[_appEl_1$1].detectChangesInNestedViews();
        this[_appEl_2$1].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_1$1].destroyNestedViews();
        this[_appEl_2$1].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeGroupComponent2.new = function(parentView, parentIndex) {
      this[_appEl_1$1] = null;
      this[_NgIf_1_9$1] = null;
      this[_appEl_2$1] = null;
      this[_NgIf_2_9$1] = null;
      _ViewMaterialTreeGroupComponent2.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeGroupComponent2.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent2);
    _ViewMaterialTreeGroupComponent2.prototype[_is__ViewMaterialTreeGroupComponent2_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent2.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupComponent2, "package:angular_components/src/material_tree/group/material_tree_group.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent2.__proto__),
      [_appEl_1$1]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_1_9$1]: dart.fieldType(ng_if.NgIf),
      [_appEl_2$1]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_2_9$1]: dart.fieldType(ng_if.NgIf)
    }));
    return _ViewMaterialTreeGroupComponent2;
  });
  material_tree_group$46template._ViewMaterialTreeGroupComponent2 = material_tree_group$46template._ViewMaterialTreeGroupComponent2$();
  dart.addTypeTests(material_tree_group$46template._ViewMaterialTreeGroupComponent2, _is__ViewMaterialTreeGroupComponent2_default);
  const _compView_0$1 = dart.privateName(material_tree_group$46template, "_compView_0");
  const _MaterialCheckboxComponent_0_5$ = dart.privateName(material_tree_group$46template, "_MaterialCheckboxComponent_0_5");
  const _is__ViewMaterialTreeGroupComponent3_default = Symbol('_is__ViewMaterialTreeGroupComponent3_default');
  material_tree_group$46template._ViewMaterialTreeGroupComponent3$ = dart.generic(T => {
    class _ViewMaterialTreeGroupComponent3 extends embedded_view.EmbeddedView$(material_tree_group.MaterialTreeGroupComponent$(T)) {
      build() {
        this[_compView_0$1] = new material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
        let _el_0 = this[_compView_0$1].rootElement;
        this.updateChildClassNonHtml(_el_0, interpolate.interpolateString2("", "tree-selection-state", " ", "themeable", ""));
        this.addShimC(_el_0);
        this[_MaterialCheckboxComponent_0_5$] = new material_checkbox.MaterialCheckboxComponent.new(_el_0, this[_compView_0$1], null, null, null);
        this[_compView_0$1].createAndProject(this[_MaterialCheckboxComponent_0_5$], JSArrayOfObject().of([C3 || CT.C3]));
        this.initRootNode(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(has_disabled.HasDisabled) && 0 === nodeIndex) {
          return this[_MaterialCheckboxComponent_0_5$];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.firstCheck;
        let local_option = optimizations.unsafeCast(material_tree_group$46template._ViewMaterialTreeGroupComponent1, this.parentView.parentView).locals[$_get]("$implicit");
        changed = false;
        if (dart.test(firstCheck)) {
          this[_MaterialCheckboxComponent_0_5$].readOnly = true;
          changed = true;
        }
        let currVal_0 = dart.test(_ctx.isReadOnly) || dart.test(_ctx.showDisabledCheckbox(local_option));
        if (dart.test(check_binding.checkBinding(this[_expr_0$1], currVal_0, "isReadOnly || showDisabledCheckbox(option)", ""))) {
          this[_MaterialCheckboxComponent_0_5$].disabled = currVal_0;
          changed = true;
          this[_expr_0$1] = currVal_0;
        }
        let currVal_2 = _ctx.isSelected(T._check(local_option));
        if (dart.test(check_binding.checkBinding(this[_expr_2$1], currVal_2, "isSelected(option)", ""))) {
          this[_MaterialCheckboxComponent_0_5$].checked = currVal_2;
          changed = true;
          this[_expr_2$1] = currVal_2;
        }
        if (changed) {
          this[_compView_0$1].markAsCheckOnce();
        }
        this[_compView_0$1].detectHostChanges(firstCheck);
        this[_compView_0$1].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$1].destroyInternalState();
        this[_MaterialCheckboxComponent_0_5$].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupComponent3.new = function(parentView, parentIndex) {
      this[_compView_0$1] = null;
      this[_MaterialCheckboxComponent_0_5$] = null;
      this[_expr_0$1] = null;
      this[_expr_2$1] = null;
      _ViewMaterialTreeGroupComponent3.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeGroupComponent3.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent3);
    _ViewMaterialTreeGroupComponent3.prototype[_is__ViewMaterialTreeGroupComponent3_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent3.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupComponent3, "package:angular_components/src/material_tree/group/material_tree_group.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent3.__proto__),
      [_compView_0$1]: dart.fieldType(material_checkbox$46template.ViewMaterialCheckboxComponent0),
      [_MaterialCheckboxComponent_0_5$]: dart.fieldType(material_checkbox.MaterialCheckboxComponent),
      [_expr_0$1]: dart.fieldType(core.bool),
      [_expr_2$1]: dart.fieldType(core.bool)
    }));
    return _ViewMaterialTreeGroupComponent3;
  });
  material_tree_group$46template._ViewMaterialTreeGroupComponent3 = material_tree_group$46template._ViewMaterialTreeGroupComponent3$();
  dart.addTypeTests(material_tree_group$46template._ViewMaterialTreeGroupComponent3, _is__ViewMaterialTreeGroupComponent3_default);
  const _MaterialIconComponent_0_5$ = dart.privateName(material_tree_group$46template, "_MaterialIconComponent_0_5");
  const _is__ViewMaterialTreeGroupComponent4_default = Symbol('_is__ViewMaterialTreeGroupComponent4_default');
  material_tree_group$46template._ViewMaterialTreeGroupComponent4$ = dart.generic(T => {
    class _ViewMaterialTreeGroupComponent4 extends embedded_view.EmbeddedView$(material_tree_group.MaterialTreeGroupComponent$(T)) {
      build() {
        this[_compView_0$1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
        let _el_0 = this[_compView_0$1].rootElement;
        this.updateChildClassNonHtml(_el_0, "tree-selection-state");
        dom_helpers.setAttribute(_el_0, "icon", "check");
        this.addShimC(_el_0);
        this[_MaterialIconComponent_0_5$] = new material_icon.MaterialIconComponent.new(_el_0);
        this[_compView_0$1].create(this[_MaterialIconComponent_0_5$]);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let changed = false;
        let firstCheck = this.firstCheck;
        changed = false;
        if (dart.test(firstCheck)) {
          this[_MaterialIconComponent_0_5$].icon = "check";
          changed = true;
        }
        if (changed) {
          this[_compView_0$1].markAsCheckOnce();
        }
        this[_compView_0$1].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$1].destroyInternalState();
      }
    }
    (_ViewMaterialTreeGroupComponent4.new = function(parentView, parentIndex) {
      this[_compView_0$1] = null;
      this[_MaterialIconComponent_0_5$] = null;
      _ViewMaterialTreeGroupComponent4.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeGroupComponent4.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent4);
    _ViewMaterialTreeGroupComponent4.prototype[_is__ViewMaterialTreeGroupComponent4_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent4, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent4.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupComponent4, "package:angular_components/src/material_tree/group/material_tree_group.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent4.__proto__),
      [_compView_0$1]: dart.fieldType(material_icon$46template.ViewMaterialIconComponent0),
      [_MaterialIconComponent_0_5$]: dart.fieldType(material_icon.MaterialIconComponent)
    }));
    return _ViewMaterialTreeGroupComponent4;
  });
  material_tree_group$46template._ViewMaterialTreeGroupComponent4 = material_tree_group$46template._ViewMaterialTreeGroupComponent4$();
  dart.addTypeTests(material_tree_group$46template._ViewMaterialTreeGroupComponent4, _is__ViewMaterialTreeGroupComponent4_default);
  const _appEl_0$0 = dart.privateName(material_tree_group$46template, "_appEl_0");
  const _DynamicComponent_0_8$ = dart.privateName(material_tree_group$46template, "_DynamicComponent_0_8");
  const _is__ViewMaterialTreeGroupComponent5_default = Symbol('_is__ViewMaterialTreeGroupComponent5_default');
  material_tree_group$46template._ViewMaterialTreeGroupComponent5$ = dart.generic(T => {
    class _ViewMaterialTreeGroupComponent5 extends embedded_view.EmbeddedView$(material_tree_group.MaterialTreeGroupComponent$(T)) {
      build() {
        this[_compView_0$1] = new dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
        let _el_0 = this[_compView_0$1].rootElement;
        this.updateChildClassNonHtml(_el_0, "item component");
        this.addShimC(_el_0);
        this[_appEl_0$0] = new view_container.ViewContainer.new(0, null, this, _el_0);
        this[_DynamicComponent_0_8$] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(dynamic_component.DynamicComponent, dart.wrapType(dynamic_component.DynamicComponent), dart.fn(() => new dynamic_component.DynamicComponent.new(dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(dynamic_component_loader.SlowComponentLoader), this.parentView.parentView.parentIndex)), this[_appEl_0$0]), VoidToDynamicComponent())) : new dynamic_component.DynamicComponent.new(dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(dynamic_component_loader.SlowComponentLoader), this.parentView.parentView.parentIndex)), this[_appEl_0$0]);
        this[_compView_0$1].create(this[_DynamicComponent_0_8$]);
        this.initRootNode(this[_appEl_0$0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let local_option = optimizations.unsafeCast(material_tree_group$46template._ViewMaterialTreeGroupComponent1, this.parentView).locals[$_get]("$implicit");
        changed = false;
        let currVal_0 = _ctx.getComponentType(local_option);
        if (dart.test(check_binding.checkBinding(this[_expr_0$1], currVal_0, "getComponentType(option)", ""))) {
          this[_DynamicComponent_0_8$].componentType = currVal_0;
          changed = true;
          this[_expr_0$1] = currVal_0;
        }
        let currVal_1 = _ctx.getComponentFactory(local_option);
        if (dart.test(check_binding.checkBinding(this[_expr_1$1], currVal_1, "getComponentFactory(option)", ""))) {
          this[_DynamicComponent_0_8$].componentFactory = currVal_1;
          changed = true;
          this[_expr_1$1] = currVal_1;
        }
        let currVal_2 = local_option;
        if (dart.test(check_binding.checkBinding(this[_expr_2$1], currVal_2, "option", ""))) {
          this[_DynamicComponent_0_8$].value = currVal_2;
          changed = true;
          this[_expr_2$1] = currVal_2;
        }
        if (changed) {
          this[_compView_0$1].markAsCheckOnce();
        }
        if (changed) {
          this[_DynamicComponent_0_8$].ngAfterChanges();
        }
        this[_appEl_0$0].detectChangesInNestedViews();
        this[_compView_0$1].detectChanges();
      }
      destroyInternal() {
        this[_appEl_0$0].destroyNestedViews();
        this[_compView_0$1].destroyInternalState();
        this[_DynamicComponent_0_8$].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupComponent5.new = function(parentView, parentIndex) {
      this[_compView_0$1] = null;
      this[_appEl_0$0] = null;
      this[_DynamicComponent_0_8$] = null;
      this[_expr_0$1] = null;
      this[_expr_1$1] = null;
      this[_expr_2$1] = null;
      _ViewMaterialTreeGroupComponent5.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeGroupComponent5.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent5);
    _ViewMaterialTreeGroupComponent5.prototype[_is__ViewMaterialTreeGroupComponent5_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent5, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent5.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupComponent5, "package:angular_components/src/material_tree/group/material_tree_group.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent5.__proto__),
      [_compView_0$1]: dart.fieldType(dynamic_component$46template.ViewDynamicComponent0),
      [_appEl_0$0]: dart.fieldType(view_container.ViewContainer),
      [_DynamicComponent_0_8$]: dart.fieldType(dynamic_component.DynamicComponent),
      [_expr_0$1]: dart.fieldType(dart.dynamic),
      [_expr_1$1]: dart.fieldType(dart.dynamic),
      [_expr_2$1]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeGroupComponent5;
  });
  material_tree_group$46template._ViewMaterialTreeGroupComponent5 = material_tree_group$46template._ViewMaterialTreeGroupComponent5$();
  dart.addTypeTests(material_tree_group$46template._ViewMaterialTreeGroupComponent5, _is__ViewMaterialTreeGroupComponent5_default);
  const _textBinding_1$0 = dart.privateName(material_tree_group$46template, "_textBinding_1");
  const _is__ViewMaterialTreeGroupComponent6_default = Symbol('_is__ViewMaterialTreeGroupComponent6_default');
  material_tree_group$46template._ViewMaterialTreeGroupComponent6$ = dart.generic(T => {
    class _ViewMaterialTreeGroupComponent6 extends embedded_view.EmbeddedView$(material_tree_group.MaterialTreeGroupComponent$(T)) {
      build() {
        let doc = html.document;
        this[_el_0$0] = doc[$createElement]("span");
        this.updateChildClass(html.HtmlElement._check(this[_el_0$0]), "text");
        this.addShimE(this[_el_0$0]);
        this[_el_0$0][$append](this[_textBinding_1$0].element);
        this.initRootNode(this[_el_0$0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let local_option = optimizations.unsafeCast(material_tree_group$46template._ViewMaterialTreeGroupComponent1, this.parentView).locals[$_get]("$implicit");
        let currVal_0 = !dart.test(_ctx.showDisabledCheckbox(local_option));
        if (dart.test(check_binding.checkBinding(this[_expr_0$1], currVal_0, "!showDisabledCheckbox(option)", ""))) {
          dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_0$0]), "item", currVal_0);
          this[_expr_0$1] = currVal_0;
        }
        let currVal_1 = _ctx.showDisabledCheckbox(local_option);
        if (dart.test(check_binding.checkBinding(this[_expr_1$1], currVal_1, "showDisabledCheckbox(option)", ""))) {
          dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_0$0]), "disabled-item", currVal_1);
          this[_expr_1$1] = currVal_1;
        }
        this[_textBinding_1$0].updateText(interpolate.interpolateString0(_ctx.getOptionAsText(T._check(local_option))));
      }
    }
    (_ViewMaterialTreeGroupComponent6.new = function(parentView, parentIndex) {
      this[_textBinding_1$0] = new text_binding.TextBinding.new();
      this[_expr_0$1] = null;
      this[_expr_1$1] = null;
      this[_el_0$0] = null;
      _ViewMaterialTreeGroupComponent6.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeGroupComponent6.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent6);
    _ViewMaterialTreeGroupComponent6.prototype[_is__ViewMaterialTreeGroupComponent6_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent6, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent6.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupComponent6, "package:angular_components/src/material_tree/group/material_tree_group.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent6, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent6.__proto__),
      [_textBinding_1$0]: dart.finalFieldType(text_binding.TextBinding),
      [_expr_0$1]: dart.fieldType(core.bool),
      [_expr_1$1]: dart.fieldType(core.bool),
      [_el_0$0]: dart.fieldType(html.Element)
    }));
    return _ViewMaterialTreeGroupComponent6;
  });
  material_tree_group$46template._ViewMaterialTreeGroupComponent6 = material_tree_group$46template._ViewMaterialTreeGroupComponent6$();
  dart.addTypeTests(material_tree_group$46template._ViewMaterialTreeGroupComponent6, _is__ViewMaterialTreeGroupComponent6_default);
  const _MaterialIconComponent_0_6 = dart.privateName(material_tree_group$46template, "_MaterialIconComponent_0_6");
  const _is__ViewMaterialTreeGroupComponent7_default = Symbol('_is__ViewMaterialTreeGroupComponent7_default');
  material_tree_group$46template._ViewMaterialTreeGroupComponent7$ = dart.generic(T => {
    class _ViewMaterialTreeGroupComponent7 extends embedded_view.EmbeddedView$(material_tree_group.MaterialTreeGroupComponent$(T)) {
      build() {
        this[_compView_0$1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
        this[_el_0$0] = this[_compView_0$1].rootElement;
        dom_helpers.setAttribute(this[_el_0$0], "buttonDecorator", "");
        this.updateChildClassNonHtml(this[_el_0$0], "tree-expansion-state");
        this.addShimC(html.HtmlElement._check(this[_el_0$0]));
        this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0$0], null));
        this[_MaterialIconComponent_0_6] = new material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0$0]));
        this[_compView_0$1].create(this[_MaterialIconComponent_0_6]);
        this[_el_0$0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
        this[_el_0$0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
        let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handleEvent_0$0)));
        this.initRootNodesAndSubscriptions(JSArrayOfObject().of([this[_el_0$0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(button_decorator.ButtonDirective) && 0 === nodeIndex) {
          return this[_ButtonDirective_0_5].instance;
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let local_option = optimizations.unsafeCast(material_tree_group$46template._ViewMaterialTreeGroupComponent1, this.parentView).locals[$_get]("$implicit");
        changed = false;
        let currVal_1 = dart.test(_ctx.isExpanded(T._check(local_option))) ? "expand_less" : "expand_more";
        if (dart.test(check_binding.checkBinding(this[_expr_1$1], currVal_1, "isExpanded(option) ? 'expand_less' : 'expand_more'", ""))) {
          this[_MaterialIconComponent_0_6].icon = currVal_1;
          changed = true;
          this[_expr_1$1] = currVal_1;
        }
        if (changed) {
          this[_compView_0$1].markAsCheckOnce();
        }
        let currVal_0 = _ctx.isExpanded(T._check(local_option));
        if (dart.test(check_binding.checkBinding(this[_expr_0$1], currVal_0, "isExpanded(option)", ""))) {
          dom_helpers.updateClassBindingNonHtml(this[_el_0$0], "expanded", currVal_0);
          this[_expr_0$1] = currVal_0;
        }
        this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0$1], this[_el_0$0]);
        this[_compView_0$1].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$1].destroyInternalState();
      }
      [_handleEvent_0$0]($36event) {
        let local_option = optimizations.unsafeCast(material_tree_group$46template._ViewMaterialTreeGroupComponent1, this.parentView).locals[$_get]("$implicit");
        let _ctx = this.ctx;
        _ctx.handleExpansion(html.Event._check($36event), local_option);
      }
    }
    (_ViewMaterialTreeGroupComponent7.new = function(parentView, parentIndex) {
      this[_compView_0$1] = null;
      this[_ButtonDirective_0_5] = null;
      this[_MaterialIconComponent_0_6] = null;
      this[_expr_0$1] = null;
      this[_expr_1$1] = null;
      this[_el_0$0] = null;
      _ViewMaterialTreeGroupComponent7.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeGroupComponent7.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent7);
    _ViewMaterialTreeGroupComponent7.prototype[_is__ViewMaterialTreeGroupComponent7_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent7, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent7.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      [_handleEvent_0$0]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupComponent7, "package:angular_components/src/material_tree/group/material_tree_group.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent7, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent7.__proto__),
      [_compView_0$1]: dart.fieldType(material_icon$46template.ViewMaterialIconComponent0),
      [_ButtonDirective_0_5]: dart.fieldType(button_decorator$46template.ButtonDirectiveNgCd),
      [_MaterialIconComponent_0_6]: dart.fieldType(material_icon.MaterialIconComponent),
      [_expr_0$1]: dart.fieldType(core.bool),
      [_expr_1$1]: dart.fieldType(dart.dynamic),
      [_el_0$0]: dart.fieldType(html.Element)
    }));
    return _ViewMaterialTreeGroupComponent7;
  });
  material_tree_group$46template._ViewMaterialTreeGroupComponent7 = material_tree_group$46template._ViewMaterialTreeGroupComponent7$();
  dart.addTypeTests(material_tree_group$46template._ViewMaterialTreeGroupComponent7, _is__ViewMaterialTreeGroupComponent7_default);
  const _MaterialTreeGroupComponent_0_5$ = dart.privateName(material_tree_group$46template, "_MaterialTreeGroupComponent_0_5");
  const _expr_4$0 = dart.privateName(material_tree_group$46template, "_expr_4");
  const _is__ViewMaterialTreeGroupComponent8_default = Symbol('_is__ViewMaterialTreeGroupComponent8_default');
  material_tree_group$46template._ViewMaterialTreeGroupComponent8$ = dart.generic(T => {
    let ViewMaterialTreeGroupComponent0OfT = () => (ViewMaterialTreeGroupComponent0OfT = dart.constFn(material_tree_group$46template.ViewMaterialTreeGroupComponent0$(T)))();
    let MaterialTreeGroupComponentOfT = () => (MaterialTreeGroupComponentOfT = dart.constFn(material_tree_group.MaterialTreeGroupComponent$(T)))();
    let VoidToMaterialTreeGroupComponentOfT = () => (VoidToMaterialTreeGroupComponentOfT = dart.constFn(dart.fnType(MaterialTreeGroupComponentOfT(), [])))();
    class _ViewMaterialTreeGroupComponent8 extends embedded_view.EmbeddedView$(material_tree_group.MaterialTreeGroupComponent$(T)) {
      build() {
        this[_compView_0$1] = new (ViewMaterialTreeGroupComponent0OfT()).new(this, 0);
        let _el_0 = this[_compView_0$1].rootElement;
        this.updateChildClassNonHtml(_el_0, "child-tree");
        this.addShimC(_el_0);
        this[_MaterialTreeGroupComponent_0_5$] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeGroupComponentOfT(), dart.wrapType(material_tree_group.MaterialTreeGroupComponent), dart.fn(() => new (MaterialTreeGroupComponentOfT()).new(material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentView.parentView.parentIndex)), this[_compView_0$1], material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentView.parentIndex)), core.int._check(this.parentView.parentView.parentView.injectorGetOptional(C7 || CT.C7, this.parentView.parentView.parentIndex))), VoidToMaterialTreeGroupComponentOfT())) : new (MaterialTreeGroupComponentOfT()).new(material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentView.parentView.parentIndex)), this[_compView_0$1], material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentView.parentIndex)), core.int._check(this.parentView.parentView.parentView.injectorGetOptional(C7 || CT.C7, this.parentView.parentView.parentIndex)));
        this[_compView_0$1].create(this[_MaterialTreeGroupComponent_0_5$]);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.firstCheck;
        let local_subGroup = optimizations.unsafeCast(selection_options.OptionGroup, this.locals[$_get]("$implicit"));
        let local_option = optimizations.unsafeCast(material_tree_group$46template._ViewMaterialTreeGroupComponent1, this.parentView).locals[$_get]("$implicit");
        let currVal_0 = _ctx.expandAll;
        if (dart.test(check_binding.checkBinding(this[_expr_0$1], currVal_0, "expandAll", ""))) {
          this[_MaterialTreeGroupComponent_0_5$].expandAll = currVal_0;
          this[_expr_0$1] = currVal_0;
        }
        let currVal_1 = local_subGroup;
        if (dart.test(check_binding.checkBinding(this[_expr_1$1], currVal_1, "subGroup", ""))) {
          this[_MaterialTreeGroupComponent_0_5$].group = currVal_1;
          this[_expr_1$1] = currVal_1;
        }
        let currVal_2 = dart.notNull(_ctx.level) + 1;
        if (dart.test(check_binding.checkBinding(this[_expr_2$1], currVal_2, "level + 1", ""))) {
          this[_MaterialTreeGroupComponent_0_5$].level = currVal_2;
          this[_expr_2$1] = currVal_2;
        }
        let currVal_3 = _ctx.showCheckbox(local_option);
        if (dart.test(check_binding.checkBinding(this[_expr_3$1], currVal_3, "showCheckbox(option)", ""))) {
          this[_MaterialTreeGroupComponent_0_5$].parentHasCheckbox = currVal_3;
          this[_expr_3$1] = currVal_3;
        }
        let currVal_4 = _ctx.allowParentSingleSelection;
        if (dart.test(check_binding.checkBinding(this[_expr_4$0], currVal_4, "allowParentSingleSelection", ""))) {
          this[_MaterialTreeGroupComponent_0_5$].allowParentSingleSelection = currVal_4;
          this[_expr_4$0] = currVal_4;
        }
        let currVal_5 = _ctx.allowParentMultiSelection;
        if (dart.test(check_binding.checkBinding(this[_expr_5$0], currVal_5, "allowParentMultiSelection", ""))) {
          this[_MaterialTreeGroupComponent_0_5$].allowParentMultiSelection = currVal_5;
          this[_expr_5$0] = currVal_5;
        }
        let currVal_6 = _ctx.deselectOnTrigger;
        if (dart.test(check_binding.checkBinding(this[_expr_6$], currVal_6, "deselectOnTrigger", ""))) {
          this[_MaterialTreeGroupComponent_0_5$].deselectOnTrigger = currVal_6;
          this[_expr_6$] = currVal_6;
        }
        let currVal_7 = _ctx.maxInitialOptionsShown;
        if (dart.test(check_binding.checkBinding(this[_expr_7$], currVal_7, "maxInitialOptionsShown", ""))) {
          this[_MaterialTreeGroupComponent_0_5$].maxInitialOptionsShown = currVal_7;
          this[_expr_7$] = currVal_7;
        }
        this[_compView_0$1].detectHostChanges(firstCheck);
        this[_compView_0$1].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$1].destroyInternalState();
        this[_MaterialTreeGroupComponent_0_5$].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupComponent8.new = function(parentView, parentIndex) {
      this[_compView_0$1] = null;
      this[_MaterialTreeGroupComponent_0_5$] = null;
      this[_expr_0$1] = null;
      this[_expr_1$1] = null;
      this[_expr_2$1] = null;
      this[_expr_3$1] = null;
      this[_expr_4$0] = null;
      this[_expr_5$0] = null;
      this[_expr_6$] = null;
      this[_expr_7$] = null;
      _ViewMaterialTreeGroupComponent8.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeGroupComponent8.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent8);
    _ViewMaterialTreeGroupComponent8.prototype[_is__ViewMaterialTreeGroupComponent8_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent8, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent8.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupComponent8, "package:angular_components/src/material_tree/group/material_tree_group.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent8, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent8.__proto__),
      [_compView_0$1]: dart.fieldType(material_tree_group$46template.ViewMaterialTreeGroupComponent0$(T)),
      [_MaterialTreeGroupComponent_0_5$]: dart.fieldType(material_tree_group.MaterialTreeGroupComponent$(T)),
      [_expr_0$1]: dart.fieldType(core.bool),
      [_expr_1$1]: dart.fieldType(dart.dynamic),
      [_expr_2$1]: dart.fieldType(core.int),
      [_expr_3$1]: dart.fieldType(core.bool),
      [_expr_4$0]: dart.fieldType(core.bool),
      [_expr_5$0]: dart.fieldType(core.bool),
      [_expr_6$]: dart.fieldType(core.bool),
      [_expr_7$]: dart.fieldType(core.int)
    }));
    return _ViewMaterialTreeGroupComponent8;
  });
  material_tree_group$46template._ViewMaterialTreeGroupComponent8 = material_tree_group$46template._ViewMaterialTreeGroupComponent8$();
  dart.addTypeTests(material_tree_group$46template._ViewMaterialTreeGroupComponent8, _is__ViewMaterialTreeGroupComponent8_default);
  const _ButtonDirective_3_5 = dart.privateName(material_tree_group$46template, "_ButtonDirective_3_5");
  const _el_3 = dart.privateName(material_tree_group$46template, "_el_3");
  const _is__ViewMaterialTreeGroupComponent9_default = Symbol('_is__ViewMaterialTreeGroupComponent9_default');
  material_tree_group$46template._ViewMaterialTreeGroupComponent9$ = dart.generic(T => {
    class _ViewMaterialTreeGroupComponent9 extends embedded_view.EmbeddedView$(material_tree_group.MaterialTreeGroupComponent$(T)) {
      build() {
        let _ctx = this.ctx;
        let doc = html.document;
        let _el_0 = doc[$createElement]("li");
        this.addShimE(_el_0);
        this[_el_1] = dom_helpers.appendDiv(doc, _el_0);
        this.updateChildClass(this[_el_1], "view-more-link-item");
        this.addShimC(this[_el_1]);
        this[_el_2] = dom_helpers.appendDiv(doc, this[_el_1]);
        this.updateChildClass(this[_el_2], "material-tree-shift");
        this.addShimC(this[_el_2]);
        this[_el_3] = html.AnchorElement._check(dom_helpers.appendElement(doc, this[_el_2], "a"));
        dom_helpers.setAttribute(this[_el_3], "buttonDecorator", "");
        this.updateChildClass(this[_el_3], "view-more-link");
        dom_helpers.setAttribute(this[_el_3], "href", "#");
        this.addShimC(this[_el_3]);
        this[_ButtonDirective_3_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_3], null));
        let _text_4 = dom_helpers.appendText(this[_el_3], interpolate.interpolateString0(material_tree_group.MaterialTreeGroupComponent.viewMoreMsg));
        this[_el_3][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_3_5].instance, 'handleClick')));
        this[_el_3][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_3_5].instance, 'handleKeyPress')));
        let subscription_0 = this[_ButtonDirective_3_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(_ctx, 'viewMoreOptions')));
        this.initRootNodesAndSubscriptions(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(button_decorator.ButtonDirective) && 3 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
          return this[_ButtonDirective_3_5].instance;
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.firstCheck;
        let currVal_0 = _ctx.getIndent(_ctx.visibleGroup.last);
        if (dart.test(check_binding.checkBinding(this[_expr_0$1], currVal_0, "getIndent(visibleGroup.last)", ""))) {
          this[_el_1].style[$setProperty]("padding-left", currVal_0);
          this[_expr_0$1] = currVal_0;
        }
        if (dart.test(firstCheck)) {
          if (_ctx.fixedPadding != null) {
            this[_el_2].style[$setProperty]("padding-left", _ctx.fixedPadding);
          }
        }
        this[_ButtonDirective_3_5].detectHostChanges(this, this[_el_3]);
      }
    }
    (_ViewMaterialTreeGroupComponent9.new = function(parentView, parentIndex) {
      this[_ButtonDirective_3_5] = null;
      this[_expr_0$1] = null;
      this[_el_1] = null;
      this[_el_2] = null;
      this[_el_3] = null;
      _ViewMaterialTreeGroupComponent9.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialTreeGroupComponent9.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent9);
    _ViewMaterialTreeGroupComponent9.prototype[_is__ViewMaterialTreeGroupComponent9_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent9, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent9.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupComponent9, "package:angular_components/src/material_tree/group/material_tree_group.template.dart");
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent9, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent9.__proto__),
      [_ButtonDirective_3_5]: dart.fieldType(button_decorator$46template.ButtonDirectiveNgCd),
      [_expr_0$1]: dart.fieldType(dart.dynamic),
      [_el_1]: dart.fieldType(html.DivElement),
      [_el_2]: dart.fieldType(html.DivElement),
      [_el_3]: dart.fieldType(html.AnchorElement)
    }));
    return _ViewMaterialTreeGroupComponent9;
  });
  material_tree_group$46template._ViewMaterialTreeGroupComponent9 = material_tree_group$46template._ViewMaterialTreeGroupComponent9$();
  dart.addTypeTests(material_tree_group$46template._ViewMaterialTreeGroupComponent9, _is__ViewMaterialTreeGroupComponent9_default);
  const _is__ViewMaterialTreeGroupComponentHost0_default = Symbol('_is__ViewMaterialTreeGroupComponentHost0_default');
  material_tree_group$46template._ViewMaterialTreeGroupComponentHost0$ = dart.generic(T => {
    let ViewMaterialTreeGroupComponent0OfT = () => (ViewMaterialTreeGroupComponent0OfT = dart.constFn(material_tree_group$46template.ViewMaterialTreeGroupComponent0$(T)))();
    let MaterialTreeGroupComponentOfT = () => (MaterialTreeGroupComponentOfT = dart.constFn(material_tree_group.MaterialTreeGroupComponent$(T)))();
    let VoidToMaterialTreeGroupComponentOfT = () => (VoidToMaterialTreeGroupComponentOfT = dart.constFn(dart.fnType(MaterialTreeGroupComponentOfT(), [])))();
    class _ViewMaterialTreeGroupComponentHost0 extends host_view.HostView$(material_tree_group.MaterialTreeGroupComponent$(T)) {
      build() {
        this.componentView = new (ViewMaterialTreeGroupComponent0OfT()).new(this, 0);
        let _el_0 = this.componentView.rootElement;
        this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeGroupComponentOfT(), dart.wrapType(material_tree_group.MaterialTreeGroupComponent), dart.fn(() => new (MaterialTreeGroupComponentOfT()).new(material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentIndex)), this.componentView, material_dropdown_base.DropdownHandle._check(this.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentIndex)), core.int._check(this.injectorGetOptional(C7 || CT.C7, this.parentIndex))), VoidToMaterialTreeGroupComponentOfT())) : new (MaterialTreeGroupComponentOfT()).new(material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentIndex)), this.componentView, material_dropdown_base.DropdownHandle._check(this.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentIndex)), core.int._check(this.injectorGetOptional(C7 || CT.C7, this.parentIndex)));
        this.initRootNode(_el_0);
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
    }
    (_ViewMaterialTreeGroupComponentHost0.new = function(injector) {
      _ViewMaterialTreeGroupComponentHost0.__proto__.new.call(this, injector);
      ;
    }).prototype = _ViewMaterialTreeGroupComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponentHost0);
    _ViewMaterialTreeGroupComponentHost0.prototype[_is__ViewMaterialTreeGroupComponentHost0_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponentHost0.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupComponentHost0, "package:angular_components/src/material_tree/group/material_tree_group.template.dart");
    return _ViewMaterialTreeGroupComponentHost0;
  });
  material_tree_group$46template._ViewMaterialTreeGroupComponentHost0 = material_tree_group$46template._ViewMaterialTreeGroupComponentHost0$();
  dart.addTypeTests(material_tree_group$46template._ViewMaterialTreeGroupComponentHost0, _is__ViewMaterialTreeGroupComponentHost0_default);
  material_tree_group$46template.viewFactory_MaterialTreeGroupComponent1 = function viewFactory_MaterialTreeGroupComponent1(T, parentView, parentIndex) {
    return new (material_tree_group$46template._ViewMaterialTreeGroupComponent1$(T)).new(parentView, parentIndex);
  };
  material_tree_group$46template.viewFactory_MaterialTreeGroupComponent2 = function viewFactory_MaterialTreeGroupComponent2(T, parentView, parentIndex) {
    return new (material_tree_group$46template._ViewMaterialTreeGroupComponent2$(T)).new(parentView, parentIndex);
  };
  material_tree_group$46template.viewFactory_MaterialTreeGroupComponent3 = function viewFactory_MaterialTreeGroupComponent3(T, parentView, parentIndex) {
    return new (material_tree_group$46template._ViewMaterialTreeGroupComponent3$(T)).new(parentView, parentIndex);
  };
  material_tree_group$46template.viewFactory_MaterialTreeGroupComponent4 = function viewFactory_MaterialTreeGroupComponent4(T, parentView, parentIndex) {
    return new (material_tree_group$46template._ViewMaterialTreeGroupComponent4$(T)).new(parentView, parentIndex);
  };
  material_tree_group$46template.viewFactory_MaterialTreeGroupComponent5 = function viewFactory_MaterialTreeGroupComponent5(T, parentView, parentIndex) {
    return new (material_tree_group$46template._ViewMaterialTreeGroupComponent5$(T)).new(parentView, parentIndex);
  };
  material_tree_group$46template.viewFactory_MaterialTreeGroupComponent6 = function viewFactory_MaterialTreeGroupComponent6(T, parentView, parentIndex) {
    return new (material_tree_group$46template._ViewMaterialTreeGroupComponent6$(T)).new(parentView, parentIndex);
  };
  material_tree_group$46template.viewFactory_MaterialTreeGroupComponent7 = function viewFactory_MaterialTreeGroupComponent7(T, parentView, parentIndex) {
    return new (material_tree_group$46template._ViewMaterialTreeGroupComponent7$(T)).new(parentView, parentIndex);
  };
  material_tree_group$46template.viewFactory_MaterialTreeGroupComponent8 = function viewFactory_MaterialTreeGroupComponent8(T, parentView, parentIndex) {
    return new (material_tree_group$46template._ViewMaterialTreeGroupComponent8$(T)).new(parentView, parentIndex);
  };
  material_tree_group$46template.viewFactory_MaterialTreeGroupComponent9 = function viewFactory_MaterialTreeGroupComponent9(T, parentView, parentIndex) {
    return new (material_tree_group$46template._ViewMaterialTreeGroupComponent9$(T)).new(parentView, parentIndex);
  };
  material_tree_group$46template.viewFactory_MaterialTreeGroupComponentHost0 = function viewFactory_MaterialTreeGroupComponentHost0(T, injector) {
    return new (material_tree_group$46template._ViewMaterialTreeGroupComponentHost0$(T)).new(injector);
  };
  material_tree_group$46template.initReflector = function initReflector$4() {
    if (dart.test(material_tree_group$46template._visited)) {
      return;
    }
    material_tree_group$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_tree_group.MaterialTreeGroupComponent), material_tree_group$46template.MaterialTreeGroupComponentNgFactory);
    angular$46template.initReflector();
    button_decorator$46template.initReflector();
    dynamic_component$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    material_checkbox$46template.initReflector();
    material_icon$46template.initReflector();
    material_dropdown_base$46template.initReflector();
    selection_options$46template.initReflector();
    material_tree_node$46template.initReflector();
    material_tree_root$46template.initReflector();
  };
  dart.copyProperties(material_tree_group$46template, {
    get MaterialTreeGroupComponentNgFactory() {
      return material_tree_group$46template._MaterialTreeGroupComponentNgFactory;
    }
  });
  let C22;
  let C21;
  let C20;
  dart.defineLazy(material_tree_group$46template, {
    /*material_tree_group$46template.styles$MaterialTreeGroupComponent*/get styles$MaterialTreeGroupComponent() {
      return [material_tree_group$46scss$46css$46shim.styles];
    },
    /*material_tree_group$46template._MaterialTreeGroupComponentNgFactory*/get _MaterialTreeGroupComponentNgFactory() {
      return C20 || CT.C20;
    },
    /*material_tree_group$46template.styles$MaterialTreeGroupComponentHost*/get styles$MaterialTreeGroupComponentHost() {
      return C3 || CT.C3;
    },
    /*material_tree_group$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.defineLazy(material_tree_group$46scss$46css$46shim, {
    /*material_tree_group$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%:first-of-type li:first-of-type._ngcontent-%ID% .root-border._ngcontent-%ID%{opacity:0}.material-tree-border._ngcontent-%ID%{background:#e0e0e0;display:none;height:1px;left:0;pointer-events:none;position:absolute;right:0;top:0}ul._ngcontent-%ID%{list-style:none;margin:0;padding:0}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID%{display:block;font-family:inherit;font-size:15px;line-height:32px;padding:0 24px;position:relative;white-space:nowrap;display:flex;align-items:center;color:rgba(0,0,0,0.87);cursor:pointer;padding-right:16px}ul._ngcontent-%ID% .material-tree-item.disabled._ngcontent-%ID%{pointer-events:none}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.54);width:40px}ul._ngcontent-%ID% .material-tree-item.disabled._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.38)}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.54);margin-left:auto}ul._ngcontent-%ID% .material-tree-item.disabled._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.38)}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID%  .submenu-icon{transform:rotate(-90deg)}ul._ngcontent-%ID% .material-tree-item:not([separator=present]):hover._ngcontent-%ID%,ul._ngcontent-%ID% .material-tree-item:not([separator=present]):focus._ngcontent-%ID%,ul._ngcontent-%ID% .material-tree-item:not([separator=present]).active._ngcontent-%ID%{background:#eee}ul._ngcontent-%ID% .material-tree-item:not([separator=present]).disabled._ngcontent-%ID%{background:none;color:rgba(0,0,0,0.38);cursor:default;pointer-events:all}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% > .material-tree-shift._ngcontent-%ID%{position:relative;flex-grow:1;display:flex;align-items:center}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% > .material-tree-shift._ngcontent-%ID% > *._ngcontent-%ID%{flex-shrink:0}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% > .material-tree-shift._ngcontent-%ID% .tree-selection-state._ngcontent-%ID% + .material-tree-border._ngcontent-%ID%{left:40px}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% .tree-expansion-state._ngcontent-%ID%{display:inline-flex;margin-left:auto}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% .tree-selection-state._ngcontent-%ID%{display:inline-flex;vertical-align:middle;width:40px}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% .disabled-item._ngcontent-%ID%{color:#9e9e9e}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% material-icon._ngcontent-%ID%{opacity:0.54}.view-more-link-item._ngcontent-%ID%{padding:8px 0}.view-more-link._ngcontent-%ID%{color:#4285f4;text-decoration:none}"];
    }
  });
  material_tree_rendering_options$46template.initReflector = function initReflector$5() {
    if (dart.test(material_tree_rendering_options$46template._visited)) {
      return;
    }
    material_tree_rendering_options$46template._visited = true;
    selection_options$46template.initReflector();
  };
  dart.defineLazy(material_tree_rendering_options$46template, {
    /*material_tree_rendering_options$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  const _viewQuery_materialInput_0_isDirty = dart.privateName(material_tree_filter$46template, "_viewQuery_materialInput_0_isDirty");
  const _appEl_0$1 = dart.privateName(material_tree_filter$46template, "_appEl_0");
  const _NgIf_0_9$ = dart.privateName(material_tree_filter$46template, "_NgIf_0_9");
  let C23;
  const _MaterialInputComponent_0_9 = dart.privateName(material_tree_filter$46template, "_MaterialInputComponent_0_9");
  material_tree_filter$46template.ViewMaterialTreeFilterComponent0 = class ViewMaterialTreeFilterComponent0 extends component_view.ComponentView$(material_tree_filter.MaterialTreeFilterComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/material_tree_filter.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0$1] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0$1], C23 || CT.C23);
      this[_NgIf_0_9$] = new ng_if.NgIf.new(this[_appEl_0$1], _TemplateRef_0_8);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9$].ngIf = _ctx.hasFilterable;
      this[_appEl_0$1].detectChangesInNestedViews();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(this[_viewQuery_materialInput_0_isDirty])) {
          _ctx.materialInput = queries.firstOrNull(material_input.MaterialInputComponent, this[_appEl_0$1].mapNestedViews(material_input.MaterialInputComponent, material_tree_filter$46template._ViewMaterialTreeFilterComponent1, dart.fn(nestedView => JSArrayOfMaterialInputComponent().of([nestedView[_MaterialInputComponent_0_9]]), _ViewMaterialTreeFilterComponent1ToListOfMaterialInputComponent())));
          this[_viewQuery_materialInput_0_isDirty] = false;
        }
      }
    }
    destroyInternal() {
      this[_appEl_0$1].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = material_tree_filter$46template.ViewMaterialTreeFilterComponent0._componentStyles;
      if (styles == null) {
        material_tree_filter$46template.ViewMaterialTreeFilterComponent0._componentStyles = styles = material_tree_filter$46template.ViewMaterialTreeFilterComponent0._componentStyles = new style_encapsulation._UnscopedComponentStyles.new(material_tree_filter$46template.styles$MaterialTreeFilterComponent, material_tree_filter$46template.ViewMaterialTreeFilterComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new = function(parentView, parentIndex) {
    this[_viewQuery_materialInput_0_isDirty] = true;
    this[_appEl_0$1] = null;
    this[_NgIf_0_9$] = null;
    material_tree_filter$46template.ViewMaterialTreeFilterComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-tree-filter"));
  }).prototype = material_tree_filter$46template.ViewMaterialTreeFilterComponent0.prototype;
  dart.addTypeTests(material_tree_filter$46template.ViewMaterialTreeFilterComponent0);
  dart.setMethodSignature(material_tree_filter$46template.ViewMaterialTreeFilterComponent0, () => ({
    __proto__: dart.getMethods(material_tree_filter$46template.ViewMaterialTreeFilterComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_tree_filter$46template.ViewMaterialTreeFilterComponent0, "package:angular_components/src/material_tree/material_tree_filter.template.dart");
  dart.setFieldSignature(material_tree_filter$46template.ViewMaterialTreeFilterComponent0, () => ({
    __proto__: dart.getFields(material_tree_filter$46template.ViewMaterialTreeFilterComponent0.__proto__),
    [_viewQuery_materialInput_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_0$1]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_0_9$]: dart.fieldType(ng_if.NgIf)
  }));
  dart.defineLazy(material_tree_filter$46template.ViewMaterialTreeFilterComponent0, {
    /*material_tree_filter$46template.ViewMaterialTreeFilterComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _compView_0$2 = dart.privateName(material_tree_filter$46template, "_compView_0");
  const _DeferredValidator_0_5 = dart.privateName(material_tree_filter$46template, "_DeferredValidator_0_5");
  const _NgValidators_0_6 = dart.privateName(material_tree_filter$46template, "_NgValidators_0_6");
  const _NgModel_0_7 = dart.privateName(material_tree_filter$46template, "_NgModel_0_7");
  const _MaterialInputDefaultValueAccessor_0_11 = dart.privateName(material_tree_filter$46template, "_MaterialInputDefaultValueAccessor_0_11");
  const _expr_0$2 = dart.privateName(material_tree_filter$46template, "_expr_0");
  const _expr_1$2 = dart.privateName(material_tree_filter$46template, "_expr_1");
  const _expr_3$2 = dart.privateName(material_tree_filter$46template, "_expr_3");
  const _handleEvent_0$1 = dart.privateName(material_tree_filter$46template, "_handleEvent_0");
  let C24;
  material_tree_filter$46template._ViewMaterialTreeFilterComponent1 = class _ViewMaterialTreeFilterComponent1 extends embedded_view.EmbeddedView$(material_tree_filter.MaterialTreeFilterComponent) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0$2] = new material_input$46template.ViewMaterialInputComponent0.new(this, 0);
      let _el_0 = this[_compView_0$2].rootElement;
      dom_helpers.setAttribute(_el_0, "style", "width: 100%;");
      this[_DeferredValidator_0_5] = new deferred_validator.DeferredValidator.new();
      this[_NgValidators_0_6] = [this[_DeferredValidator_0_5]];
      this[_NgModel_0_7] = new ng_model.NgModel.new(this[_NgValidators_0_6], null);
      this[_MaterialInputComponent_0_9] = new material_input.MaterialInputComponent.new(null, null, this[_NgModel_0_7], this[_compView_0$2], this[_DeferredValidator_0_5]);
      this[_MaterialInputDefaultValueAccessor_0_11] = new material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_0_9], this[_NgModel_0_7]);
      this[_compView_0$2].createAndProject(this[_MaterialInputComponent_0_9], JSArrayOfObject().of([C3 || CT.C3, C3 || CT.C3]));
      let subscription_0 = this[_MaterialInputComponent_0_9].onFocus.listen(this.eventHandler0(html.FocusEvent, dart.bind(_ctx, 'handleFocus')));
      let subscription_1 = this[_MaterialInputComponent_0_9].onKeypress.listen(this.eventHandler1(core.String, core.String, dart.bind(this, _handleEvent_0$1)));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(deferred_validator.DeferredValidator)) {
          return this[_DeferredValidator_0_5];
        }
        if (token === (C24 || CT.C24)) {
          return this[_NgValidators_0_6];
        }
        if (token === dart.wrapType(ng_model.NgModel) || token === dart.wrapType(ng_control.NgControl)) {
          return this[_NgModel_0_7];
        }
        if (token === dart.wrapType(material_input.MaterialInputComponent) || token === dart.wrapType(base_material_input.BaseMaterialInput) || token === dart.wrapType(reference.ReferenceDirective) || token === dart.wrapType(focus_interface.Focusable) || token === dart.wrapType(has_disabled.HasDisabled)) {
          return this[_MaterialInputComponent_0_9];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      let currVal_0 = _ctx.inputText;
      if (dart.test(check_binding.checkBinding(this[_expr_0$2], currVal_0, "inputText", ""))) {
        this[_NgModel_0_7].model = currVal_0;
        changed = true;
        this[_expr_0$2] = currVal_0;
      }
      if (changed) {
        this[_NgModel_0_7].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_0_7].ngOnInit();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialInputComponent_0_9].displayBottomPanel = false;
        changed = true;
      }
      let currVal_1 = _ctx.placeholder;
      if (dart.test(check_binding.checkBinding(this[_expr_1$2], currVal_1, "placeholder", ""))) {
        this[_MaterialInputComponent_0_9].label = currVal_1;
        changed = true;
        this[_expr_1$2] = currVal_1;
      }
      let currVal_3 = _ctx.leadingGlyph;
      if (dart.test(check_binding.checkBinding(this[_expr_3$2], currVal_3, "leadingGlyph", ""))) {
        this[_MaterialInputComponent_0_9].leadingGlyph = currVal_3;
        changed = true;
        this[_expr_3$2] = currVal_3;
      }
      if (changed) {
        this[_compView_0$2].markAsCheckOnce();
      }
      this[_compView_0$2].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialInputComponent_0_9].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(material_tree_filter$46template.ViewMaterialTreeFilterComponent0, this.parentView)[_viewQuery_materialInput_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0$2].destroyInternalState();
      this[_MaterialInputComponent_0_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_0_11].ngOnDestroy();
    }
    [_handleEvent_0$1]($36event) {
      let _ctx = this.ctx;
      _ctx.inputText = core.String._check($36event);
    }
  };
  (material_tree_filter$46template._ViewMaterialTreeFilterComponent1.new = function(parentView, parentIndex) {
    this[_compView_0$2] = null;
    this[_DeferredValidator_0_5] = null;
    this[_NgValidators_0_6] = null;
    this[_NgModel_0_7] = null;
    this[_MaterialInputComponent_0_9] = null;
    this[_MaterialInputDefaultValueAccessor_0_11] = null;
    this[_expr_0$2] = null;
    this[_expr_1$2] = null;
    this[_expr_3$2] = null;
    material_tree_filter$46template._ViewMaterialTreeFilterComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_tree_filter$46template._ViewMaterialTreeFilterComponent1.prototype;
  dart.addTypeTests(material_tree_filter$46template._ViewMaterialTreeFilterComponent1);
  dart.setMethodSignature(material_tree_filter$46template._ViewMaterialTreeFilterComponent1, () => ({
    __proto__: dart.getMethods(material_tree_filter$46template._ViewMaterialTreeFilterComponent1.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handleEvent_0$1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_tree_filter$46template._ViewMaterialTreeFilterComponent1, "package:angular_components/src/material_tree/material_tree_filter.template.dart");
  dart.setFieldSignature(material_tree_filter$46template._ViewMaterialTreeFilterComponent1, () => ({
    __proto__: dart.getFields(material_tree_filter$46template._ViewMaterialTreeFilterComponent1.__proto__),
    [_compView_0$2]: dart.fieldType(material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_0_5]: dart.fieldType(deferred_validator.DeferredValidator),
    [_NgValidators_0_6]: dart.fieldType(core.List),
    [_NgModel_0_7]: dart.fieldType(ng_model.NgModel),
    [_MaterialInputComponent_0_9]: dart.fieldType(material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_0_11]: dart.fieldType(material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_expr_0$2]: dart.fieldType(dart.dynamic),
    [_expr_1$2]: dart.fieldType(core.String),
    [_expr_3$2]: dart.fieldType(core.String)
  }));
  material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0 = class _ViewMaterialTreeFilterComponentHost0 extends host_view.HostView$(material_tree_filter.MaterialTreeFilterComponent) {
    build() {
      this.componentView = new material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_tree_filter.MaterialTreeFilterComponent, dart.wrapType(material_tree_filter.MaterialTreeFilterComponent), dart.fn(() => new material_tree_filter.MaterialTreeFilterComponent.new(material_tree_root.MaterialTreeRoot._check(this.injectorGetOptional(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentIndex))), VoidToMaterialTreeFilterComponent())) : new material_tree_filter.MaterialTreeFilterComponent.new(material_tree_root.MaterialTreeRoot._check(this.injectorGetOptional(dart.wrapType(material_tree_root.MaterialTreeRoot), this.parentIndex)));
      this.initRootNode(_el_0);
    }
  };
  (material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.new = function(injector) {
    material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.prototype;
  dart.addTypeTests(material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0);
  dart.setMethodSignature(material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0, () => ({
    __proto__: dart.getMethods(material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0, "package:angular_components/src/material_tree/material_tree_filter.template.dart");
  material_tree_filter$46template.viewFactory_MaterialTreeFilterComponent1 = function viewFactory_MaterialTreeFilterComponent1(parentView, parentIndex) {
    return new material_tree_filter$46template._ViewMaterialTreeFilterComponent1.new(parentView, parentIndex);
  };
  material_tree_filter$46template.viewFactory_MaterialTreeFilterComponentHost0 = function viewFactory_MaterialTreeFilterComponentHost0(injector) {
    return new material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.new(injector);
  };
  material_tree_filter$46template.initReflector = function initReflector$6() {
    if (dart.test(material_tree_filter$46template._visited)) {
      return;
    }
    material_tree_filter$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_tree_filter.MaterialTreeFilterComponent), material_tree_filter$46template.MaterialTreeFilterComponentNgFactory);
    angular$46template.initReflector();
    material_input$46template.initReflector();
    select$46template.initReflector();
    material_tree_root$46template.initReflector();
    async$46template.initReflector();
  };
  dart.copyProperties(material_tree_filter$46template, {
    get MaterialTreeFilterComponentNgFactory() {
      return material_tree_filter$46template._MaterialTreeFilterComponentNgFactory;
    }
  });
  let C26;
  let C25;
  dart.defineLazy(material_tree_filter$46template, {
    /*material_tree_filter$46template.styles$MaterialTreeFilterComponent*/get styles$MaterialTreeFilterComponent() {
      return C3 || CT.C3;
    },
    /*material_tree_filter$46template._MaterialTreeFilterComponentNgFactory*/get _MaterialTreeFilterComponentNgFactory() {
      return C25 || CT.C25;
    },
    /*material_tree_filter$46template.styles$MaterialTreeFilterComponentHost*/get styles$MaterialTreeFilterComponentHost() {
      return C3 || CT.C3;
    },
    /*material_tree_filter$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.defineLazy(material_tree_dropdown$46scss$46css$46shim, {
    /*material_tree_dropdown$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{display:inline-flex}.button._ngcontent-%ID%{display:flex;align-items:center;flex-grow:1;cursor:pointer;padding-right:48px;position:relative}.button.border._ngcontent-%ID%{border-bottom:1px solid rgba(0,0,0,0.12);padding-bottom:1px}.icon._ngcontent-%ID%{opacity:0.54;position:absolute;right:0;top:calc(50% - 13px)}.search-box._ngcontent-%ID%{width:100%}"];
    }
  });
  dart.trackLibraries("packages/angular_components/src/material_tree/group/material_tree_group.scss.css.shim", {
    "package:angular_components/src/material_tree/material_tree_dropdown.template.dart": material_tree_dropdown$46template,
    "package:angular_components/src/material_tree/material_tree_impl.template.dart": material_tree_impl$46template,
    "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart": material_tree_group_flat$46template,
    "package:angular_components/src/material_tree/group/material_tree_group_flat_check.scss.css.shim.dart": material_tree_group_flat_check$46scss$46css$46shim,
    "package:angular_components/src/material_tree/group/material_tree_group_flat_radio.scss.css.shim.dart": material_tree_group_flat_radio$46scss$46css$46shim,
    "package:angular_components/src/material_tree/group/material_tree_group_flat_list.scss.css.shim.dart": material_tree_group_flat_list$46scss$46css$46shim,
    "package:angular_components/src/material_tree/material_tree_root.template.dart": material_tree_root$46template,
    "package:angular_components/src/material_tree/material_tree_node.template.dart": material_tree_node$46template,
    "package:angular_components/src/material_tree/material_tree_expand_state.template.dart": material_tree_expand_state$46template,
    "package:angular_components/src/material_tree/group/material_tree_group.template.dart": material_tree_group$46template,
    "package:angular_components/src/material_tree/group/material_tree_group.scss.css.shim.dart": material_tree_group$46scss$46css$46shim,
    "package:angular_components/src/material_tree/material_tree_rendering_options.template.dart": material_tree_rendering_options$46template,
    "package:angular_components/src/material_tree/material_tree_filter.template.dart": material_tree_filter$46template,
    "package:angular_components/src/material_tree/material_tree_dropdown.scss.css.shim.dart": material_tree_dropdown$46scss$46css$46shim
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../material_tree_dropdown.template.dart","../material_tree_impl.template.dart","material_tree_group_flat.template.dart","material_tree_group_flat_check.scss.css.shim.dart","material_tree_group_flat_radio.scss.css.shim.dart","material_tree_group_flat_list.scss.css.shim.dart","../material_tree_root.template.dart","../material_tree_node.template.dart","../material_tree_expand_state.template.dart","material_tree_group.template.dart","material_tree_group.scss.css.shim.dart","../material_tree_rendering_options.template.dart","../material_tree_filter.template.dart","../material_tree_dropdown.scss.css.shim.dart"],"names":[],"mappings":"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","file":"material_tree_group.scss.css.shim.ddc.js"}');
  // Exports:
  return {
    src__material_tree__material_tree_dropdown$46template: material_tree_dropdown$46template,
    src__material_tree__material_tree_impl$46template: material_tree_impl$46template,
    src__material_tree__group__material_tree_group_flat$46template: material_tree_group_flat$46template,
    src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim: material_tree_group_flat_check$46scss$46css$46shim,
    src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim: material_tree_group_flat_radio$46scss$46css$46shim,
    src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim: material_tree_group_flat_list$46scss$46css$46shim,
    src__material_tree__material_tree_root$46template: material_tree_root$46template,
    src__material_tree__material_tree_node$46template: material_tree_node$46template,
    src__material_tree__material_tree_expand_state$46template: material_tree_expand_state$46template,
    src__material_tree__group__material_tree_group$46template: material_tree_group$46template,
    src__material_tree__group__material_tree_group$46scss$46css$46shim: material_tree_group$46scss$46css$46shim,
    src__material_tree__material_tree_rendering_options$46template: material_tree_rendering_options$46template,
    src__material_tree__material_tree_filter$46template: material_tree_filter$46template,
    src__material_tree__material_tree_dropdown$46scss$46css$46shim: material_tree_dropdown$46scss$46css$46shim
  };
});

//# sourceMappingURL=material_tree_group.scss.css.shim.ddc.js.map

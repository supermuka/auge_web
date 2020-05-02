define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_button/material_fab.template', 'packages/angular_components/material_button/material_fab', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/material_menu/material_fab_menu', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular_components/material_list/material_list_item.template', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_list/material_list_item', 'packages/angular_components/material_menu/material_menu.template', 'packages/angular_components/material_menu/common/menu_root', 'packages/angular_components/material_menu/material_menu', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_menu/menu_root.template', 'packages/angular_components/material_tooltip/material_tooltip.template', 'packages/angular_components/mixins/track_layout_changes.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/model/menu/menu.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/material_menu/material_fab_menu.scss.css.shim'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular_components__src__material_tooltip__tooltip_controller, packages__angular_components__material_tooltip__module, packages__angular_components__utils__disposer__disposer, packages__angular__src__bootstrap__modules, packages__angular_components__material_button__material_fab$46template, packages__angular_components__material_button__material_fab, packages__angular_components__src__material_tooltip__icon_tooltip, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular_components__material_menu__material_fab_menu, packages__angular_components__material_popup__material_popup, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__content__deferred_content, packages__angular_components__content__deferred_content_aware, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__focus__focus_trap$46template, packages__angular_components__focus__focus_trap, packages__angular_components__material_list__material_list_item$46template, packages__angular__src__runtime__interpolate, packages__angular_components__material_list__material_list_item, packages__angular_components__material_menu__material_menu$46template, packages__angular_components__material_menu__common__menu_root, packages__angular_components__material_menu__material_menu, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__interfaces__has_disabled, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__content__deferred_content$46template, packages__angular_components__focus__focus$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__material_menu__menu_root$46template, packages__angular_components__material_tooltip__material_tooltip$46template, packages__angular_components__mixins__track_layout_changes$46template, packages__angular_components__model__a11y__keyboard_handler_mixin$46template, packages__angular_components__model__menu__menu$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__material_menu__material_fab_menu$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const check_binding = packages__angular__src__core__change_detection__change_detection.src__runtime__check_binding;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const injector = packages__angular__src__core__change_detection__change_detection.src__di__injector__injector;
  const tooltip_controller = packages__angular_components__src__material_tooltip__tooltip_controller.src__material_tooltip__tooltip_controller;
  const module = packages__angular_components__material_tooltip__module.material_tooltip__module;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_fab$46template = packages__angular_components__material_button__material_fab$46template.material_button__material_fab$46template;
  const material_fab = packages__angular_components__material_button__material_fab.material_button__material_fab;
  const tooltip = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const material_fab_menu = packages__angular_components__material_menu__material_fab_menu.material_menu__material_fab_menu;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const deferred_content = packages__angular_components__content__deferred_content.content__deferred_content;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const focus_trap$46template = packages__angular_components__focus__focus_trap$46template.focus__focus_trap$46template;
  const focus_trap = packages__angular_components__focus__focus_trap.focus__focus_trap;
  const material_list_item$46template = packages__angular_components__material_list__material_list_item$46template.material_list__material_list_item$46template;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_list_item = packages__angular_components__material_list__material_list_item.material_list__material_list_item;
  const menu_item_groups$46template = packages__angular_components__material_menu__material_menu$46template.material_menu__menu_item_groups$46template;
  const menu_root = packages__angular_components__material_menu__common__menu_root.material_menu__common__menu_root;
  const menu_item_groups = packages__angular_components__material_menu__material_menu.material_menu__menu_item_groups;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const menu_root$46template = packages__angular_components__material_menu__menu_root$46template.material_menu__menu_root$46template;
  const material_tooltip$46template = packages__angular_components__material_tooltip__material_tooltip$46template.material_tooltip__material_tooltip$46template;
  const track_layout_changes$46template = packages__angular_components__mixins__track_layout_changes$46template.mixins__track_layout_changes$46template;
  const keyboard_handler_mixin$46template = packages__angular_components__model__a11y__keyboard_handler_mixin$46template.model__a11y__keyboard_handler_mixin$46template;
  const menu$46template = packages__angular_components__model__menu__menu$46template.model__menu__menu$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const material_fab_menu$46scss$46css$46shim = packages__angular_components__material_menu__material_fab_menu$46scss$46css$46shim.material_menu__material_fab_menu$46scss$46css$46shim;
  const material_fab_menu$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  let VoidToTooltipController = () => (VoidToTooltipController = dart.constFn(dart.fnType(tooltip_controller.TooltipController, [])))();
  let VoidToMaterialTooltipDirective = () => (VoidToMaterialTooltipDirective = dart.constFn(dart.fnType(tooltip.MaterialTooltipDirective, [])))();
  let VoidToPopupSourceDirective = () => (VoidToPopupSourceDirective = dart.constFn(dart.fnType(popup_source_directive.PopupSourceDirective, [])))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  let RenderViewAndintToEmbeddedViewOfvoid = () => (RenderViewAndintToEmbeddedViewOfvoid = dart.constFn(dart.fnType(EmbeddedViewOfvoid(), [render_view.RenderView, core.int])))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let VoidToMaterialPopupComponent = () => (VoidToMaterialPopupComponent = dart.constFn(dart.fnType(material_popup.MaterialPopupComponent, [])))();
  let VoidToMenuItemGroupsComponent = () => (VoidToMenuItemGroupsComponent = dart.constFn(dart.fnType(menu_item_groups.MenuItemGroupsComponent, [])))();
  let ComponentFactoryOfMaterialFabMenuComponent = () => (ComponentFactoryOfMaterialFabMenuComponent = dart.constFn(component_factory.ComponentFactory$(material_fab_menu.MaterialFabMenuComponent)))();
  let HostViewOfMaterialFabMenuComponent = () => (HostViewOfMaterialFabMenuComponent = dart.constFn(host_view.HostView$(material_fab_menu.MaterialFabMenuComponent)))();
  let InjectorToHostViewOfMaterialFabMenuComponent = () => (InjectorToHostViewOfMaterialFabMenuComponent = dart.constFn(dart.fnType(HostViewOfMaterialFabMenuComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_fab_menu$46template.viewFactory_MaterialFabMenuComponent1, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: OpaqueTokenOfListOfRelativePosition().prototype,
        [OpaqueToken__uniqueName]: "defaultPopupPositions"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayViewportBoundaries"
      });
    },
    get C4() {
      return C4 = dart.fn(material_fab_menu$46template.viewFactory_MaterialFabMenuComponent2, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C5() {
      return C5 = dart.constList([], dart.dynamic);
    },
    get C7() {
      return C7 = dart.fn(material_fab_menu$46template.viewFactory_MaterialFabMenuComponentHost0, InjectorToHostViewOfMaterialFabMenuComponent());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ComponentFactoryOfMaterialFabMenuComponent().prototype,
        [ComponentFactory__viewFactory]: C7 || CT.C7,
        [ComponentFactory_selector]: "material-fab-menu"
      });
    }
  });
  const _compView_1 = dart.privateName(material_fab_menu$46template, "_compView_1");
  const _appEl_1 = dart.privateName(material_fab_menu$46template, "_appEl_1");
  const _MaterialFabComponent_1_8 = dart.privateName(material_fab_menu$46template, "_MaterialFabComponent_1_8");
  const _MaterialTooltipDirective_1_9 = dart.privateName(material_fab_menu$46template, "_MaterialTooltipDirective_1_9");
  const _PopupSourceDirective_1_10 = dart.privateName(material_fab_menu$46template, "_PopupSourceDirective_1_10");
  const __TooltipController_1_11 = dart.privateName(material_fab_menu$46template, "__TooltipController_1_11");
  const _compView_3 = dart.privateName(material_fab_menu$46template, "_compView_3");
  const _MaterialIconComponent_3_5 = dart.privateName(material_fab_menu$46template, "_MaterialIconComponent_3_5");
  const _appEl_6 = dart.privateName(material_fab_menu$46template, "_appEl_6");
  const _NgIf_6_9 = dart.privateName(material_fab_menu$46template, "_NgIf_6_9");
  const _expr_0 = dart.privateName(material_fab_menu$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_fab_menu$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_fab_menu$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_fab_menu$46template, "_expr_3");
  const _expr_6 = dart.privateName(material_fab_menu$46template, "_expr_6");
  const _expr_7 = dart.privateName(material_fab_menu$46template, "_expr_7");
  const _expr_8 = dart.privateName(material_fab_menu$46template, "_expr_8");
  const _el_1 = dart.privateName(material_fab_menu$46template, "_el_1");
  const _TooltipController_1_11 = dart.privateName(material_fab_menu$46template, "_TooltipController_1_11");
  let C0;
  material_fab_menu$46template.ViewMaterialFabMenuComponent0 = class ViewMaterialFabMenuComponent0 extends component_view.ComponentView$(material_fab_menu.MaterialFabMenuComponent) {
    get [_TooltipController_1_11]() {
      if (this[__TooltipController_1_11] == null) {
        this[__TooltipController_1_11] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(tooltip_controller.TooltipController, dart.wrapType(tooltip_controller.TooltipController), dart.fn(() => module.createTooltipController(tooltip_controller.TooltipController._check(this.parentView.injectorGetOptional(dart.wrapType(tooltip_controller.TooltipController), this.parentIndex)), disposer.Disposer._check(this.parentView.injectorGetOptional(dart.wrapType(disposer.Disposer), this.parentIndex))), VoidToTooltipController())) : module.createTooltipController(tooltip_controller.TooltipController._check(this.parentView.injectorGetOptional(dart.wrapType(tooltip_controller.TooltipController), this.parentIndex)), disposer.Disposer._check(this.parentView.injectorGetOptional(dart.wrapType(disposer.Disposer), this.parentIndex)));
      }
      return this[__TooltipController_1_11];
    }
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/material_fab_menu.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      this[_compView_1] = new material_fab$46template.ViewMaterialFabComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootElement;
      parentRenderNode[$append](this[_el_1]);
      dom_helpers.setAttribute(this[_el_1], "popupSource", "");
      dom_helpers.setAttribute(this[_el_1], "raised", "");
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, this[_el_1]);
      this[_MaterialFabComponent_1_8] = new material_fab.MaterialFabComponent.new(html.HtmlElement._check(this[_el_1]), this[_compView_1]);
      this[_MaterialTooltipDirective_1_9] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(tooltip.MaterialTooltipDirective, dart.wrapType(tooltip.MaterialTooltipDirective), dart.fn(() => new tooltip.MaterialTooltipDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentIndex)), this[_appEl_1], html.HtmlElement._check(this[_el_1]), this[_appEl_1], this[_compView_1], html.Window._check(this.parentView.injectorGet(dart.wrapType(html.Window), this.parentIndex)), null, null), VoidToMaterialTooltipDirective())) : new tooltip.MaterialTooltipDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentIndex)), this[_appEl_1], html.HtmlElement._check(this[_el_1]), this[_appEl_1], this[_compView_1], html.Window._check(this.parentView.injectorGet(dart.wrapType(html.Window), this.parentIndex)), null, null);
      this[_PopupSourceDirective_1_10] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(popup_source_directive.PopupSourceDirective, dart.wrapType(popup_source_directive.PopupSourceDirective), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentIndex)), html.HtmlElement._check(this[_el_1]), reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(reference.ReferenceDirective), this.parentIndex)), focus_interface.Focusable._check(this.parentView.injectorGetOptional(dart.wrapType(focus_interface.Focusable), this.parentIndex)), null), VoidToPopupSourceDirective())) : new popup_source_directive.PopupSourceDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentIndex)), html.HtmlElement._check(this[_el_1]), reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(reference.ReferenceDirective), this.parentIndex)), focus_interface.Focusable._check(this.parentView.injectorGetOptional(dart.wrapType(focus_interface.Focusable), this.parentIndex)), null);
      let _text_2 = dom_helpers.createText("\n  ");
      this[_compView_3] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 3);
      let _el_3 = this[_compView_3].rootElement;
      this.addShimC(_el_3);
      this[_MaterialIconComponent_3_5] = new material_icon.MaterialIconComponent.new(_el_3);
      this[_compView_3].create(this[_MaterialIconComponent_3_5]);
      let _text_4 = dom_helpers.createText("\n");
      this[_compView_1].createAndProject(this[_MaterialFabComponent_1_8], JSArrayOfObject().of([JSArrayOfNode().of([_text_2, _el_3, _text_4])]));
      let _text_5 = dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_6 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_6] = new view_container.ViewContainer.new(6, null, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C0 || CT.C0);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _text_7 = dom_helpers.appendText(parentRenderNode, "\n");
      this[_el_1][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'onKeyDown')));
      let subscription_0 = this[_MaterialFabComponent_1_8].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(_ctx, 'trigger')));
      this.initSubscriptions(JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(tooltip_controller.TooltipController) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_TooltipController_1_11];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialFabComponent_1_8].raised = true;
        changed = true;
      }
      let currVal_3 = !dart.test(_ctx.isFabEnabled);
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "!isFabEnabled", ""))) {
        this[_MaterialFabComponent_1_8].disabled = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        if (_ctx.tooltipPositions != null) {
          this[_MaterialTooltipDirective_1_9].positions = _ctx.tooltipPositions;
        }
      }
      let currVal_6 = _ctx.tooltip;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "tooltip", ""))) {
        this[_MaterialTooltipDirective_1_9].text = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.hasTooltip;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "hasTooltip", ""))) {
        this[_MaterialTooltipDirective_1_9].canShow = currVal_7;
        this[_expr_7] = currVal_7;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MaterialTooltipDirective_1_9].ngOnInit();
      }
      changed = false;
      let currVal_8 = _ctx.glyph;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "glyph", ""))) {
        this[_MaterialIconComponent_3_5].icon = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_NgIf_6_9].ngIf = _ctx.hasMenu;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      let currVal_0 = _ctx.isFabHidden;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "isFabHidden", ""))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_1], "invisible", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.ariaLabel;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "ariaLabel", ""))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-label", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.naviId;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "naviId", ""))) {
        dom_helpers.updateAttribute(this[_el_1], "navi-id", currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
      this[_compView_3].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialTooltipDirective_1_9].ngAfterViewInit();
          this[_PopupSourceDirective_1_10].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_compView_1].destroyInternalState();
      this[_compView_3].destroyInternalState();
      this[_MaterialTooltipDirective_1_9].ngOnDestroy();
      this[_PopupSourceDirective_1_10].ngOnDestroy();
    }
    initComponentStyles() {
      let styles = material_fab_menu$46template.ViewMaterialFabMenuComponent0._componentStyles;
      if (styles == null) {
        material_fab_menu$46template.ViewMaterialFabMenuComponent0._componentStyles = styles = material_fab_menu$46template.ViewMaterialFabMenuComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_fab_menu$46template.styles$MaterialFabMenuComponent, material_fab_menu$46template.ViewMaterialFabMenuComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_fab_menu$46template.ViewMaterialFabMenuComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_appEl_1] = null;
    this[_MaterialFabComponent_1_8] = null;
    this[_MaterialTooltipDirective_1_9] = null;
    this[_PopupSourceDirective_1_10] = null;
    this[__TooltipController_1_11] = null;
    this[_compView_3] = null;
    this[_MaterialIconComponent_3_5] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_el_1] = null;
    material_fab_menu$46template.ViewMaterialFabMenuComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-fab-menu"));
  }).prototype = material_fab_menu$46template.ViewMaterialFabMenuComponent0.prototype;
  dart.addTypeTests(material_fab_menu$46template.ViewMaterialFabMenuComponent0);
  dart.setMethodSignature(material_fab_menu$46template.ViewMaterialFabMenuComponent0, () => ({
    __proto__: dart.getMethods(material_fab_menu$46template.ViewMaterialFabMenuComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_fab_menu$46template.ViewMaterialFabMenuComponent0, () => ({
    __proto__: dart.getGetters(material_fab_menu$46template.ViewMaterialFabMenuComponent0.__proto__),
    [_TooltipController_1_11]: dart.dynamic
  }));
  dart.setLibraryUri(material_fab_menu$46template.ViewMaterialFabMenuComponent0, "package:angular_components/material_menu/material_fab_menu.template.dart");
  dart.setFieldSignature(material_fab_menu$46template.ViewMaterialFabMenuComponent0, () => ({
    __proto__: dart.getFields(material_fab_menu$46template.ViewMaterialFabMenuComponent0.__proto__),
    [_compView_1]: dart.fieldType(material_fab$46template.ViewMaterialFabComponent0),
    [_appEl_1]: dart.fieldType(view_container.ViewContainer),
    [_MaterialFabComponent_1_8]: dart.fieldType(material_fab.MaterialFabComponent),
    [_MaterialTooltipDirective_1_9]: dart.fieldType(tooltip.MaterialTooltipDirective),
    [_PopupSourceDirective_1_10]: dart.fieldType(popup_source_directive.PopupSourceDirective),
    [__TooltipController_1_11]: dart.fieldType(dart.dynamic),
    [_compView_3]: dart.fieldType(material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_3_5]: dart.fieldType(material_icon.MaterialIconComponent),
    [_appEl_6]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(core.String),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(material_fab_menu$46template.ViewMaterialFabMenuComponent0, {
    /*material_fab_menu$46template.ViewMaterialFabMenuComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _compView_0 = dart.privateName(material_fab_menu$46template, "_compView_0");
  const _appEl_0 = dart.privateName(material_fab_menu$46template, "_appEl_0");
  const _MaterialPopupComponent_0_8 = dart.privateName(material_fab_menu$46template, "_MaterialPopupComponent_0_8");
  const __PopupHierarchy_0_11 = dart.privateName(material_fab_menu$46template, "__PopupHierarchy_0_11");
  const __PopupRef_0_12 = dart.privateName(material_fab_menu$46template, "__PopupRef_0_12");
  const _appEl_2 = dart.privateName(material_fab_menu$46template, "_appEl_2");
  const _DeferredContentDirective_2_9 = dart.privateName(material_fab_menu$46template, "_DeferredContentDirective_2_9");
  const _expr_4 = dart.privateName(material_fab_menu$46template, "_expr_4");
  const _expr_5 = dart.privateName(material_fab_menu$46template, "_expr_5");
  const _PopupHierarchy_0_11 = dart.privateName(material_fab_menu$46template, "_PopupHierarchy_0_11");
  const _PopupRef_0_12 = dart.privateName(material_fab_menu$46template, "_PopupRef_0_12");
  const OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  material_fab_menu$46template._ViewMaterialFabMenuComponent1 = class _ViewMaterialFabMenuComponent1 extends embedded_view.EmbeddedView$(material_fab_menu.MaterialFabMenuComponent) {
    get [_PopupHierarchy_0_11]() {
      if (this[__PopupHierarchy_0_11] == null) {
        this[__PopupHierarchy_0_11] = material_popup.getHierarchy(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupHierarchy_0_11];
    }
    get [_PopupRef_0_12]() {
      if (this[__PopupRef_0_12] == null) {
        this[__PopupRef_0_12] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupRef_0_12];
    }
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      dom_helpers.setAttribute(_el_0, "autoDismiss", "");
      dom_helpers.setAttribute(_el_0, "enforceSpaceConstraints", "");
      this.addShimC(_el_0);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _el_0);
      this[_MaterialPopupComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_popup.MaterialPopupComponent, dart.wrapType(material_popup.MaterialPopupComponent), dart.fn(() => new material_popup.MaterialPopupComponent.new(popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGetOptional(dart.wrapType(popup_hierarchy.PopupHierarchy), this.parentIndex)), material_popup.MaterialPopupComponent._check(this.parentView.injectorGetOptional(dart.wrapType(material_popup.MaterialPopupComponent), this.parentIndex)), null, ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(overlay_service.OverlayService), this.parentIndex)), dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(zindexer.ZIndexer), this.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(C1 || CT.C1, this.parentIndex)), core.bool._check(this.parentView.injectorGet(C2 || CT.C2, this.parentIndex)), box.Box._check(this.parentView.injectorGet(C3 || CT.C3, this.parentIndex)), popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGetOptional(dart.wrapType(popup_size_provider.PopupSizeProvider), this.parentIndex)), this[_compView_0], this[_appEl_0], new element_ref.ElementRef.new(_el_0)), VoidToMaterialPopupComponent())) : new material_popup.MaterialPopupComponent.new(popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGetOptional(dart.wrapType(popup_hierarchy.PopupHierarchy), this.parentIndex)), material_popup.MaterialPopupComponent._check(this.parentView.injectorGetOptional(dart.wrapType(material_popup.MaterialPopupComponent), this.parentIndex)), null, ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(overlay_service.OverlayService), this.parentIndex)), dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(zindexer.ZIndexer), this.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(C1 || CT.C1, this.parentIndex)), core.bool._check(this.parentView.injectorGet(C2 || CT.C2, this.parentIndex)), box.Box._check(this.parentView.injectorGet(C3 || CT.C3, this.parentIndex)), popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGetOptional(dart.wrapType(popup_size_provider.PopupSizeProvider), this.parentIndex)), this[_compView_0], this[_appEl_0], new element_ref.ElementRef.new(_el_0));
      let _text_1 = dom_helpers.createText("\n  ");
      let _anchor_2 = dom_helpers.createAnchor();
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C4 || CT.C4);
      this[_DeferredContentDirective_2_9] = new deferred_content.DeferredContentDirective.new(this[_appEl_2], _TemplateRef_2_8, this[_MaterialPopupComponent_0_8], this);
      let _text_3 = dom_helpers.createText("\n");
      this[_compView_0].createAndProject(this[_MaterialPopupComponent_0_8], JSArrayOfObject().of([C5 || CT.C5, JSArrayOfObject().of([_text_1, this[_appEl_2], _text_3]), C5 || CT.C5]));
      let subscription_0 = this[_MaterialPopupComponent_0_8].onOpened.listen(this.eventHandler0(dart.void, dart.bind(_ctx, 'onPopupOpened')));
      let subscription_1 = this[_MaterialPopupComponent_0_8].onClose.listen(this.eventHandler0(dart.void, dart.bind(_ctx, 'onPopupClosed')));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([this[_appEl_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 3) {
        if (token === dart.wrapType(material_popup.MaterialPopupComponent) || token === dart.wrapType(deferred_content_aware.DeferredContentAware) || token === dart.wrapType(material_dropdown_base.DropdownHandle)) {
          return this[_MaterialPopupComponent_0_8];
        }
        if (token === dart.wrapType(popup_hierarchy.PopupHierarchy)) {
          return this[_PopupHierarchy_0_11];
        }
        if (token === dart.wrapType(popup_ref.PopupRef)) {
          return this[_PopupRef_0_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_source = optimizations.unsafeCast(material_fab_menu$46template.ViewMaterialFabMenuComponent0, this.parentView)[_PopupSourceDirective_1_10];
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialPopupComponent_0_8].autoDismiss = true;
        changed = true;
        this[_MaterialPopupComponent_0_8].enforceSpaceConstraints = true;
        changed = true;
        this[_MaterialPopupComponent_0_8].hasBox = false;
        changed = true;
      }
      let currVal_2 = _ctx.preferredPopupPositions;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "preferredPopupPositions", ""))) {
        this[_MaterialPopupComponent_0_8].preferredPositions = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = local_source;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "source", ""))) {
        this[_MaterialPopupComponent_0_8].source = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.trackLayoutChanges;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "trackLayoutChanges", ""))) {
        this[_MaterialPopupComponent_0_8].trackLayoutChanges = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.showPopup;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "showPopup", ""))) {
        this[_MaterialPopupComponent_0_8].visible = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (dart.test(firstCheck)) {
        this[_DeferredContentDirective_2_9].preserveDimensions = true;
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
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
      this[_DeferredContentDirective_2_9].ngOnDestroy();
      this[_MaterialPopupComponent_0_8].ngOnDestroy();
    }
  };
  (material_fab_menu$46template._ViewMaterialFabMenuComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[__PopupHierarchy_0_11] = null;
    this[__PopupRef_0_12] = null;
    this[_appEl_2] = null;
    this[_DeferredContentDirective_2_9] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_fab_menu$46template._ViewMaterialFabMenuComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_fab_menu$46template._ViewMaterialFabMenuComponent1.prototype;
  dart.addTypeTests(material_fab_menu$46template._ViewMaterialFabMenuComponent1);
  dart.setMethodSignature(material_fab_menu$46template._ViewMaterialFabMenuComponent1, () => ({
    __proto__: dart.getMethods(material_fab_menu$46template._ViewMaterialFabMenuComponent1.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setGetterSignature(material_fab_menu$46template._ViewMaterialFabMenuComponent1, () => ({
    __proto__: dart.getGetters(material_fab_menu$46template._ViewMaterialFabMenuComponent1.__proto__),
    [_PopupHierarchy_0_11]: dart.dynamic,
    [_PopupRef_0_12]: dart.dynamic
  }));
  dart.setLibraryUri(material_fab_menu$46template._ViewMaterialFabMenuComponent1, "package:angular_components/material_menu/material_fab_menu.template.dart");
  dart.setFieldSignature(material_fab_menu$46template._ViewMaterialFabMenuComponent1, () => ({
    __proto__: dart.getFields(material_fab_menu$46template._ViewMaterialFabMenuComponent1.__proto__),
    [_compView_0]: dart.fieldType(material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_0]: dart.fieldType(view_container.ViewContainer),
    [_MaterialPopupComponent_0_8]: dart.fieldType(material_popup.MaterialPopupComponent),
    [__PopupHierarchy_0_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_0_12]: dart.fieldType(dart.dynamic),
    [_appEl_2]: dart.fieldType(view_container.ViewContainer),
    [_DeferredContentDirective_2_9]: dart.fieldType(deferred_content.DeferredContentDirective),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool)
  }));
  const _compView_4 = dart.privateName(material_fab_menu$46template, "_compView_4");
  const _FocusTrapComponent_4_5 = dart.privateName(material_fab_menu$46template, "_FocusTrapComponent_4_5");
  const _compView_6 = dart.privateName(material_fab_menu$46template, "_compView_6");
  const _MaterialListItemComponent_6_5 = dart.privateName(material_fab_menu$46template, "_MaterialListItemComponent_6_5");
  const _compView_8 = dart.privateName(material_fab_menu$46template, "_compView_8");
  const _MaterialIconComponent_8_5 = dart.privateName(material_fab_menu$46template, "_MaterialIconComponent_8_5");
  const _compView_11 = dart.privateName(material_fab_menu$46template, "_compView_11");
  const _MenuRootDirective_11_5 = dart.privateName(material_fab_menu$46template, "_MenuRootDirective_11_5");
  const _MenuItemGroupsComponent_11_7 = dart.privateName(material_fab_menu$46template, "_MenuItemGroupsComponent_11_7");
  const _expr_9 = dart.privateName(material_fab_menu$46template, "_expr_9");
  const _el_0 = dart.privateName(material_fab_menu$46template, "_el_0");
  const _el_2 = dart.privateName(material_fab_menu$46template, "_el_2");
  material_fab_menu$46template._ViewMaterialFabMenuComponent2 = class _ViewMaterialFabMenuComponent2 extends embedded_view.EmbeddedView$(material_fab_menu.MaterialFabMenuComponent) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "menu-content");
      dom_helpers.setAttribute(this[_el_0], "elevation", "2");
      this.addShimC(this[_el_0]);
      let _text_1 = dom_helpers.appendText(this[_el_0], "\n    ");
      this[_el_2] = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_2], "content-wrapper");
      this.addShimC(this[_el_2]);
      let _text_3 = dom_helpers.appendText(this[_el_2], "\n      ");
      this[_compView_4] = new focus_trap$46template.ViewFocusTrapComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootElement;
      this[_el_2][$append](_el_4);
      this.addShimC(_el_4);
      this[_FocusTrapComponent_4_5] = new focus_trap.FocusTrapComponent.new();
      let _text_5 = dom_helpers.createText("\n        ");
      this[_compView_6] = new material_list_item$46template.ViewMaterialListItemComponent0.new(this, 6);
      let _el_6 = this[_compView_6].rootElement;
      this.updateChildClassNonHtml(_el_6, interpolate.interpolateString2("", "close-menu", " ", "item", ""));
      this.addShimC(_el_6);
      this[_MaterialListItemComponent_6_5] = new material_list_item.MaterialListItemComponent.new(_el_6, optimizations.unsafeCast(material_fab_menu$46template._ViewMaterialFabMenuComponent1, this.parentView)[_MaterialPopupComponent_0_8], null, null);
      let _text_7 = dom_helpers.createText("\n          ");
      this[_compView_8] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 8);
      let _el_8 = this[_compView_8].rootElement;
      this.updateChildClassNonHtml(_el_8, "close-icon material-list-item-primary");
      dom_helpers.setAttribute(_el_8, "icon", "close");
      this.addShimC(_el_8);
      this[_MaterialIconComponent_8_5] = new material_icon.MaterialIconComponent.new(_el_8);
      this[_compView_8].create(this[_MaterialIconComponent_8_5]);
      let _text_9 = dom_helpers.createText("\n        ");
      this[_compView_6].createAndProject(this[_MaterialListItemComponent_6_5], JSArrayOfObject().of([JSArrayOfNode().of([_text_7, _el_8, _text_9])]));
      let _text_10 = dom_helpers.createText("\n        ");
      this[_compView_11] = new menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 11);
      let _el_11 = this[_compView_11].rootElement;
      this.updateChildClassNonHtml(_el_11, "menu-groups");
      dom_helpers.setAttribute(_el_11, "menu-root", "");
      dom_helpers.setAttribute(_el_11, "preventCloseOnPressLeft", "");
      this.addShimC(_el_11);
      this[_MenuRootDirective_11_5] = new menu_root.MenuRootDirective.new(optimizations.unsafeCast(material_fab_menu$46template._ViewMaterialFabMenuComponent1, this.parentView)[_MaterialPopupComponent_0_8]);
      this[_MenuItemGroupsComponent_11_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(menu_item_groups.MenuItemGroupsComponent, dart.wrapType(menu_item_groups.MenuItemGroupsComponent), dart.fn(() => menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRootDirective_11_5], this[_compView_11], optimizations.unsafeCast(material_fab_menu$46template._ViewMaterialFabMenuComponent1, this.parentView)[_MaterialPopupComponent_0_8], id_generator.IdGenerator._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(id_generator.IdGenerator), this.parentView.parentIndex))), VoidToMenuItemGroupsComponent())) : menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRootDirective_11_5], this[_compView_11], optimizations.unsafeCast(material_fab_menu$46template._ViewMaterialFabMenuComponent1, this.parentView)[_MaterialPopupComponent_0_8], id_generator.IdGenerator._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(id_generator.IdGenerator), this.parentView.parentIndex)));
      this[_compView_11].create(this[_MenuItemGroupsComponent_11_7]);
      let _text_13 = dom_helpers.createText("\n      ");
      this[_compView_4].createAndProject(this[_FocusTrapComponent_4_5], JSArrayOfObject().of([JSArrayOfNode().of([_text_5, _el_6, _text_10, _el_11, _text_13])]));
      let _text_14 = dom_helpers.appendText(this[_el_2], "\n    ");
      let _text_15 = dom_helpers.appendText(this[_el_0], "\n  ");
      let subscription_0 = this[_MaterialListItemComponent_6_5].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(_ctx, 'hideMenu')));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([this[_el_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(has_disabled.HasDisabled) && 6 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 9) {
        return this[_MaterialListItemComponent_6_5];
      }
      if (token === dart.wrapType(menu_root.MenuRoot) && 11 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 12) {
        return this[_MenuRootDirective_11_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialListItemComponent_6_5].closeOnActivate = false;
        changed = true;
      }
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialIconComponent_8_5].icon = "close";
        changed = true;
      }
      if (changed) {
        this[_compView_8].markAsCheckOnce();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MenuItemGroupsComponent_11_7].preventCloseOnPressLeft = true;
        changed = true;
      }
      let currVal_7 = _ctx.activateFirstItemOnInit;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "activateFirstItemOnInit", ""))) {
        this[_MenuItemGroupsComponent_11_7].activateFirstItemOnInit = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.activateLastItemOnInit;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "activateLastItemOnInit", ""))) {
        this[_MenuItemGroupsComponent_11_7].activateLastItemOnInit = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.menuItem.subMenu;
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "menuItem.subMenu", ""))) {
        this[_MenuItemGroupsComponent_11_7].menu = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      if (changed) {
        this[_compView_11].markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MenuItemGroupsComponent_11_7].ngOnInit();
      }
      let currVal_0 = _ctx.menuVisible;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "menuVisible", ""))) {
        dom_helpers.updateClassBinding(this[_el_0], "visible", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.closing;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "closing", ""))) {
        dom_helpers.updateClassBinding(this[_el_0], "closing", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.hasIcons;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "hasIcons", ""))) {
        dom_helpers.updateClassBinding(this[_el_0], "has-icons", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.menuVisible;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "menuVisible", ""))) {
        dom_helpers.updateClassBinding(this[_el_2], "visible", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.closing;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "closing", ""))) {
        dom_helpers.updateClassBinding(this[_el_2], "closing", currVal_4);
        this[_expr_4] = currVal_4;
      }
      this[_compView_6].detectHostChanges(firstCheck);
      this[_compView_11].detectHostChanges(firstCheck);
      this[_compView_4].detectChanges();
      this[_compView_6].detectChanges();
      this[_compView_8].detectChanges();
      this[_compView_11].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MenuItemGroupsComponent_11_7].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_4].destroyInternalState();
      this[_compView_6].destroyInternalState();
      this[_compView_8].destroyInternalState();
      this[_compView_11].destroyInternalState();
      this[_MaterialListItemComponent_6_5].ngOnDestroy();
      this[_MenuItemGroupsComponent_11_7].ngOnDestroy();
      this[_FocusTrapComponent_4_5].ngOnDestroy();
    }
  };
  (material_fab_menu$46template._ViewMaterialFabMenuComponent2.new = function(parentView, parentIndex) {
    this[_compView_4] = null;
    this[_FocusTrapComponent_4_5] = null;
    this[_compView_6] = null;
    this[_MaterialListItemComponent_6_5] = null;
    this[_compView_8] = null;
    this[_MaterialIconComponent_8_5] = null;
    this[_compView_11] = null;
    this[_MenuRootDirective_11_5] = null;
    this[_MenuItemGroupsComponent_11_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_el_0] = null;
    this[_el_2] = null;
    material_fab_menu$46template._ViewMaterialFabMenuComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_fab_menu$46template._ViewMaterialFabMenuComponent2.prototype;
  dart.addTypeTests(material_fab_menu$46template._ViewMaterialFabMenuComponent2);
  dart.setMethodSignature(material_fab_menu$46template._ViewMaterialFabMenuComponent2, () => ({
    __proto__: dart.getMethods(material_fab_menu$46template._ViewMaterialFabMenuComponent2.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_fab_menu$46template._ViewMaterialFabMenuComponent2, "package:angular_components/material_menu/material_fab_menu.template.dart");
  dart.setFieldSignature(material_fab_menu$46template._ViewMaterialFabMenuComponent2, () => ({
    __proto__: dart.getFields(material_fab_menu$46template._ViewMaterialFabMenuComponent2.__proto__),
    [_compView_4]: dart.fieldType(focus_trap$46template.ViewFocusTrapComponent0),
    [_FocusTrapComponent_4_5]: dart.fieldType(focus_trap.FocusTrapComponent),
    [_compView_6]: dart.fieldType(material_list_item$46template.ViewMaterialListItemComponent0),
    [_MaterialListItemComponent_6_5]: dart.fieldType(material_list_item.MaterialListItemComponent),
    [_compView_8]: dart.fieldType(material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_8_5]: dart.fieldType(material_icon.MaterialIconComponent),
    [_compView_11]: dart.fieldType(menu_item_groups$46template.ViewMenuItemGroupsComponent0),
    [_MenuRootDirective_11_5]: dart.fieldType(menu_root.MenuRootDirective),
    [_MenuItemGroupsComponent_11_7]: dart.fieldType(menu_item_groups.MenuItemGroupsComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.DivElement)
  }));
  material_fab_menu$46template._ViewMaterialFabMenuComponentHost0 = class _ViewMaterialFabMenuComponentHost0 extends host_view.HostView$(material_fab_menu.MaterialFabMenuComponent) {
    build() {
      this.componentView = new material_fab_menu$46template.ViewMaterialFabMenuComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new material_fab_menu.MaterialFabMenuComponent.new(this.componentView);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      this.componentView.detectChanges();
    }
    destroyInternal() {
      this.componentView.destroyInternalState();
      this.component.ngOnDestroy();
    }
  };
  (material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.new = function(injector) {
    material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.prototype;
  dart.addTypeTests(material_fab_menu$46template._ViewMaterialFabMenuComponentHost0);
  dart.setMethodSignature(material_fab_menu$46template._ViewMaterialFabMenuComponentHost0, () => ({
    __proto__: dart.getMethods(material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_fab_menu$46template._ViewMaterialFabMenuComponentHost0, "package:angular_components/material_menu/material_fab_menu.template.dart");
  material_fab_menu$46template.viewFactory_MaterialFabMenuComponent1 = function viewFactory_MaterialFabMenuComponent1(parentView, parentIndex) {
    return new material_fab_menu$46template._ViewMaterialFabMenuComponent1.new(parentView, parentIndex);
  };
  material_fab_menu$46template.viewFactory_MaterialFabMenuComponent2 = function viewFactory_MaterialFabMenuComponent2(parentView, parentIndex) {
    return new material_fab_menu$46template._ViewMaterialFabMenuComponent2.new(parentView, parentIndex);
  };
  material_fab_menu$46template.viewFactory_MaterialFabMenuComponentHost0 = function viewFactory_MaterialFabMenuComponentHost0(injector) {
    return new material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.new(injector);
  };
  material_fab_menu$46template.initReflector = function initReflector() {
    if (dart.test(material_fab_menu$46template._visited)) {
      return;
    }
    material_fab_menu$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_fab_menu.MaterialFabMenuComponent), material_fab_menu$46template.MaterialFabMenuComponentNgFactory);
    menu_item_groups$46template.initReflector();
    angular$46template.initReflector();
    meta$46template.initReflector();
    deferred_content$46template.initReflector();
    focus$46template.initReflector();
    focus_trap$46template.initReflector();
    alignment$46template.initReflector();
    popup$46template.initReflector();
    material_fab$46template.initReflector();
    material_icon$46template.initReflector();
    material_list_item$46template.initReflector();
    menu_root$46template.initReflector();
    material_popup$46template.initReflector();
    material_tooltip$46template.initReflector();
    track_layout_changes$46template.initReflector();
    keyboard_handler_mixin$46template.initReflector();
    menu$46template.initReflector();
    observable$46template.initReflector();
  };
  dart.copyProperties(material_fab_menu$46template, {
    get MaterialFabMenuComponentNgFactory() {
      return material_fab_menu$46template._MaterialFabMenuComponentNgFactory;
    }
  });
  let C7;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C6;
  dart.defineLazy(material_fab_menu$46template, {
    /*material_fab_menu$46template.styles$MaterialFabMenuComponent*/get styles$MaterialFabMenuComponent() {
      return [material_fab_menu$46scss$46css$46shim.styles];
    },
    /*material_fab_menu$46template._MaterialFabMenuComponentNgFactory*/get _MaterialFabMenuComponentNgFactory() {
      return C6 || CT.C6;
    },
    /*material_fab_menu$46template.styles$MaterialFabMenuComponentHost*/get styles$MaterialFabMenuComponentHost() {
      return C5 || CT.C5;
    },
    /*material_fab_menu$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_menu/material_fab_menu.template", {
    "package:angular_components/material_menu/material_fab_menu.template.dart": material_fab_menu$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_fab_menu.template.dart"],"names":[],"mappings":"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","file":"material_fab_menu.template.ddc.js"}');
  // Exports:
  return {
    material_menu__material_fab_menu$46template: material_fab_menu$46template
  };
});

//# sourceMappingURL=material_fab_menu.template.ddc.js.map

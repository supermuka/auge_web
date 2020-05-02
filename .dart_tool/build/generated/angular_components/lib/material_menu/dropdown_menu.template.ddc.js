define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_select/dropdown_button.template', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/material_menu/material_menu.template', 'packages/angular_components/material_menu/material_menu', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_menu/menu_popup_wrapper', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_menu/dropdown_menu', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/material_menu/menu_popup_wrapper.template', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__angular_components__material_select__dropdown_button$46template, packages__angular_components__material_select__dropdown_button, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__utils__angular__reference__reference, packages__angular_components__material_menu__material_menu$46template, packages__angular_components__material_menu__material_menu, packages__angular_components__focus__focus_interface, packages__angular_components__material_menu__menu_popup_wrapper, packages__angular_components__interfaces__has_disabled, packages__angular_components__material_menu__dropdown_menu, packages__angular__angular$46template, packages__angular_components__focus__focus$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__material_menu__menu_popup_wrapper$46template, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__mixins__focusable_mixin$46template, packages__angular_components__model__a11y__keyboard_handler_mixin$46template, packages__angular_components__utils__angular__css__css$46template, packages__angular_components__utils__disposer__disposer$46template) {
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
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const injector = packages__angular__src__core__change_detection__change_detection.src__di__injector__injector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const dropdown_button$46template = packages__angular_components__material_select__dropdown_button$46template.material_select__dropdown_button$46template;
  const dropdown_button = packages__angular_components__material_select__dropdown_button.material_select__dropdown_button;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const menu_popup$46template = packages__angular_components__material_menu__material_menu$46template.material_menu__menu_popup$46template;
  const menu_popup = packages__angular_components__material_menu__material_menu.material_menu__menu_popup;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const menu_popup_wrapper = packages__angular_components__material_menu__menu_popup_wrapper.material_menu__menu_popup_wrapper;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const dropdown_menu = packages__angular_components__material_menu__dropdown_menu.material_menu__dropdown_menu;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const menu_popup_wrapper$46template = packages__angular_components__material_menu__menu_popup_wrapper$46template.material_menu__menu_popup_wrapper$46template;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const focusable_mixin$46template = packages__angular_components__mixins__focusable_mixin$46template.mixins__focusable_mixin$46template;
  const keyboard_handler_mixin$46template = packages__angular_components__model__a11y__keyboard_handler_mixin$46template.model__a11y__keyboard_handler_mixin$46template;
  const css$46template = packages__angular_components__utils__angular__css__css$46template.utils__angular__css__css$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const dropdown_menu$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $addEventListener = dartx.addEventListener;
  let VoidToPopupSourceDirective = () => (VoidToPopupSourceDirective = dart.constFn(dart.fnType(popup_source_directive.PopupSourceDirective, [])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let ComponentFactoryOfDropdownMenuComponent = () => (ComponentFactoryOfDropdownMenuComponent = dart.constFn(component_factory.ComponentFactory$(dropdown_menu.DropdownMenuComponent)))();
  let HostViewOfDropdownMenuComponent = () => (HostViewOfDropdownMenuComponent = dart.constFn(host_view.HostView$(dropdown_menu.DropdownMenuComponent)))();
  let InjectorToHostViewOfDropdownMenuComponent = () => (InjectorToHostViewOfDropdownMenuComponent = dart.constFn(dart.fnType(HostViewOfDropdownMenuComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], dart.dynamic);
    },
    get C2() {
      return C2 = dart.fn(dropdown_menu$46template.viewFactory_DropdownMenuComponentHost0, InjectorToHostViewOfDropdownMenuComponent());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ComponentFactoryOfDropdownMenuComponent().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "dropdown-menu"
      });
    }
  });
  const _compView_1 = dart.privateName(dropdown_menu$46template, "_compView_1");
  const _DropdownButtonComponent_1_5 = dart.privateName(dropdown_menu$46template, "_DropdownButtonComponent_1_5");
  const _PopupSourceDirective_1_7 = dart.privateName(dropdown_menu$46template, "_PopupSourceDirective_1_7");
  const _compView_5 = dart.privateName(dropdown_menu$46template, "_compView_5");
  const _MenuPopupComponent_5_5 = dart.privateName(dropdown_menu$46template, "_MenuPopupComponent_5_5");
  const _PopupSourceDirective_5_6 = dart.privateName(dropdown_menu$46template, "_PopupSourceDirective_5_6");
  const _expr_0 = dart.privateName(dropdown_menu$46template, "_expr_0");
  const _expr_1 = dart.privateName(dropdown_menu$46template, "_expr_1");
  const _expr_2 = dart.privateName(dropdown_menu$46template, "_expr_2");
  const _expr_3 = dart.privateName(dropdown_menu$46template, "_expr_3");
  const _expr_4 = dart.privateName(dropdown_menu$46template, "_expr_4");
  const _expr_5 = dart.privateName(dropdown_menu$46template, "_expr_5");
  const _expr_6 = dart.privateName(dropdown_menu$46template, "_expr_6");
  const _expr_7 = dart.privateName(dropdown_menu$46template, "_expr_7");
  const _expr_8 = dart.privateName(dropdown_menu$46template, "_expr_8");
  const _expr_9 = dart.privateName(dropdown_menu$46template, "_expr_9");
  const _expr_10 = dart.privateName(dropdown_menu$46template, "_expr_10");
  const _handleEvent_0 = dart.privateName(dropdown_menu$46template, "_handleEvent_0");
  dropdown_menu$46template.ViewDropdownMenuComponent0 = class ViewDropdownMenuComponent0 extends component_view.ComponentView$(dropdown_menu.DropdownMenuComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/dropdown_menu.dart" : null;
    }
    build() {
      let t0, t0$;
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      this[_compView_1] = new dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      parentRenderNode[$append](_el_1);
      dom_helpers.setAttribute(_el_1, "popupSource", "");
      this[_DropdownButtonComponent_1_5] = new dropdown_button.DropdownButtonComponent.new();
      this[_PopupSourceDirective_1_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(popup_source_directive.PopupSourceDirective, dart.wrapType(popup_source_directive.PopupSourceDirective), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentIndex)), _el_1, reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(reference.ReferenceDirective), this.parentIndex)), this[_DropdownButtonComponent_1_5], null), VoidToPopupSourceDirective())) : new popup_source_directive.PopupSourceDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentIndex)), _el_1, reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(reference.ReferenceDirective), this.parentIndex)), this[_DropdownButtonComponent_1_5], null);
      let _text_2 = dom_helpers.createText("\n  ");
      let _text_3 = dom_helpers.createText("\n");
      this[_compView_1].createAndProject(this[_DropdownButtonComponent_1_5], JSArrayOfObject().of([(t0 = [_text_2], t0[$addAll](core.Iterable._check(this.projectedNodes[$_get](0))), t0[$addAll]([_text_3]), t0)]));
      let _text_4 = dom_helpers.appendText(parentRenderNode, "\n");
      this[_compView_5] = new menu_popup$46template.ViewMenuPopupComponent0.new(this, 5);
      let _el_5 = this[_compView_5].rootElement;
      parentRenderNode[$append](_el_5);
      this[_MenuPopupComponent_5_5] = new menu_popup.MenuPopupComponent.new(_el_5);
      this[_PopupSourceDirective_5_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(popup_source_directive.PopupSourceDirective, dart.wrapType(popup_source_directive.PopupSourceDirective), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentIndex)), _el_5, reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(reference.ReferenceDirective), this.parentIndex)), focus_interface.Focusable._check(this.parentView.injectorGetOptional(dart.wrapType(focus_interface.Focusable), this.parentIndex)), null), VoidToPopupSourceDirective())) : new popup_source_directive.PopupSourceDirective.new(dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(dom_popup_source.DomPopupSourceFactory), this.parentIndex)), _el_5, reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(reference.ReferenceDirective), this.parentIndex)), focus_interface.Focusable._check(this.parentView.injectorGetOptional(dart.wrapType(focus_interface.Focusable), this.parentIndex)), null);
      let _text_6 = dom_helpers.createText("\n  ");
      let _text_7 = dom_helpers.createText("\n");
      this[_compView_5].createAndProject(this[_MenuPopupComponent_5_5], JSArrayOfObject().of([(t0$ = [_text_6], t0$[$addAll](core.Iterable._check(this.projectedNodes[$_get](1))), t0$[$addAll]([_text_7]), t0$)]));
      let _text_8 = dom_helpers.appendText(parentRenderNode, "\n");
      _el_1[$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'onKeyDown')));
      let subscription_0 = this[_DropdownButtonComponent_1_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(_ctx, 'handlePopupTriggerAction')));
      let subscription_1 = this[_MenuPopupComponent_5_5].expandActionChange.listen(this.eventHandler1(menu_popup_wrapper.ExpandAction, menu_popup_wrapper.ExpandAction, dart.bind(this, _handleEvent_0)));
      _ctx.dropdownButton = this[_DropdownButtonComponent_1_5];
      _ctx.menuPopup = this[_MenuPopupComponent_5_5];
      this.initSubscriptions(JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(focus_interface.Focusable) || token === dart.wrapType(has_disabled.HasDisabled)) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_DropdownButtonComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_toggle = this[_PopupSourceDirective_1_7];
      changed = false;
      let currVal_0 = _ctx.buttonText;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "buttonText", ""))) {
        this[_DropdownButtonComponent_1_5].buttonText = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "disabled", ""))) {
        this[_DropdownButtonComponent_1_5].disabled = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.buttonAriaDescribedBy;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "buttonAriaDescribedBy", ""))) {
        this[_DropdownButtonComponent_1_5].ariaDescribedBy = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.tabbable;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "tabbable", ""))) {
        this[_DropdownButtonComponent_1_5].tabbable = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.buttonAriaLabelledBy;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "buttonAriaLabelledBy", ""))) {
        this[_DropdownButtonComponent_1_5].ariaLabelledBy = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_DropdownButtonComponent_1_5].ngOnInit();
      }
      changed = false;
      let currVal_5 = _ctx.menu;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "menu", ""))) {
        this[_MenuPopupComponent_5_5].menu = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.preferredPositions;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "preferredPositions", ""))) {
        this[_MenuPopupComponent_5_5].preferredPositions = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.expandAction;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "expandAction", ""))) {
        this[_MenuPopupComponent_5_5].expandAction = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.width;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "width", ""))) {
        this[_MenuPopupComponent_5_5].width = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = local_toggle;
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "toggle", ""))) {
        this[_MenuPopupComponent_5_5].popupSource = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.popupClass;
      if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, "popupClass", ""))) {
        this[_MenuPopupComponent_5_5].popupClass = currVal_10;
        changed = true;
        this[_expr_10] = currVal_10;
      }
      if (changed) {
        this[_compView_5].markAsCheckOnce();
      }
      this[_compView_1].detectChanges();
      this[_compView_5].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_PopupSourceDirective_1_7].ngAfterViewInit();
          this[_PopupSourceDirective_5_6].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
      this[_compView_5].destroyInternalState();
      this[_PopupSourceDirective_1_7].ngOnDestroy();
      this[_PopupSourceDirective_5_6].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.expandAction = menu_popup_wrapper.ExpandAction._check($36event);
    }
    initComponentStyles() {
      let styles = dropdown_menu$46template.ViewDropdownMenuComponent0._componentStyles;
      if (styles == null) {
        dropdown_menu$46template.ViewDropdownMenuComponent0._componentStyles = styles = dropdown_menu$46template.ViewDropdownMenuComponent0._componentStyles = new style_encapsulation._UnscopedComponentStyles.new(dropdown_menu$46template.styles$DropdownMenuComponent, dropdown_menu$46template.ViewDropdownMenuComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (dropdown_menu$46template.ViewDropdownMenuComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_DropdownButtonComponent_1_5] = null;
    this[_PopupSourceDirective_1_7] = null;
    this[_compView_5] = null;
    this[_MenuPopupComponent_5_5] = null;
    this[_PopupSourceDirective_5_6] = null;
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
    dropdown_menu$46template.ViewDropdownMenuComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("dropdown-menu"));
  }).prototype = dropdown_menu$46template.ViewDropdownMenuComponent0.prototype;
  dart.addTypeTests(dropdown_menu$46template.ViewDropdownMenuComponent0);
  dart.setMethodSignature(dropdown_menu$46template.ViewDropdownMenuComponent0, () => ({
    __proto__: dart.getMethods(dropdown_menu$46template.ViewDropdownMenuComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(dropdown_menu$46template.ViewDropdownMenuComponent0, "package:angular_components/material_menu/dropdown_menu.template.dart");
  dart.setFieldSignature(dropdown_menu$46template.ViewDropdownMenuComponent0, () => ({
    __proto__: dart.getFields(dropdown_menu$46template.ViewDropdownMenuComponent0.__proto__),
    [_compView_1]: dart.fieldType(dropdown_button$46template.ViewDropdownButtonComponent0),
    [_DropdownButtonComponent_1_5]: dart.fieldType(dropdown_button.DropdownButtonComponent),
    [_PopupSourceDirective_1_7]: dart.fieldType(popup_source_directive.PopupSourceDirective),
    [_compView_5]: dart.fieldType(menu_popup$46template.ViewMenuPopupComponent0),
    [_MenuPopupComponent_5_5]: dart.fieldType(menu_popup.MenuPopupComponent),
    [_PopupSourceDirective_5_6]: dart.fieldType(popup_source_directive.PopupSourceDirective),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.String),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.String),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(core.String)
  }));
  dart.defineLazy(dropdown_menu$46template.ViewDropdownMenuComponent0, {
    /*dropdown_menu$46template.ViewDropdownMenuComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dropdown_menu$46template._ViewDropdownMenuComponentHost0 = class _ViewDropdownMenuComponentHost0 extends host_view.HostView$(dropdown_menu.DropdownMenuComponent) {
    build() {
      this.componentView = new dropdown_menu$46template.ViewDropdownMenuComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new dropdown_menu.DropdownMenuComponent.new(this.componentView, _el_0);
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
  (dropdown_menu$46template._ViewDropdownMenuComponentHost0.new = function(injector) {
    dropdown_menu$46template._ViewDropdownMenuComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = dropdown_menu$46template._ViewDropdownMenuComponentHost0.prototype;
  dart.addTypeTests(dropdown_menu$46template._ViewDropdownMenuComponentHost0);
  dart.setMethodSignature(dropdown_menu$46template._ViewDropdownMenuComponentHost0, () => ({
    __proto__: dart.getMethods(dropdown_menu$46template._ViewDropdownMenuComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(dropdown_menu$46template._ViewDropdownMenuComponentHost0, "package:angular_components/material_menu/dropdown_menu.template.dart");
  dropdown_menu$46template.viewFactory_DropdownMenuComponentHost0 = function viewFactory_DropdownMenuComponentHost0(injector) {
    return new dropdown_menu$46template._ViewDropdownMenuComponentHost0.new(injector);
  };
  dropdown_menu$46template.initReflector = function initReflector() {
    if (dart.test(dropdown_menu$46template._visited)) {
      return;
    }
    dropdown_menu$46template._visited = true;
    reflector.registerComponent(dart.wrapType(dropdown_menu.DropdownMenuComponent), dropdown_menu$46template.DropdownMenuComponentNgFactory);
    angular$46template.initReflector();
    focus$46template.initReflector();
    has_disabled$46template.initReflector();
    menu_popup$46template.initReflector();
    menu_popup_wrapper$46template.initReflector();
    material_popup$46template.initReflector();
    dropdown_button$46template.initReflector();
    focusable_mixin$46template.initReflector();
    keyboard_handler_mixin$46template.initReflector();
    css$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(dropdown_menu$46template, {
    get DropdownMenuComponentNgFactory() {
      return dropdown_menu$46template._DropdownMenuComponentNgFactory;
    }
  });
  let C0;
  let C2;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C1;
  dart.defineLazy(dropdown_menu$46template, {
    /*dropdown_menu$46template.styles$DropdownMenuComponent*/get styles$DropdownMenuComponent() {
      return C0 || CT.C0;
    },
    /*dropdown_menu$46template._DropdownMenuComponentNgFactory*/get _DropdownMenuComponentNgFactory() {
      return C1 || CT.C1;
    },
    /*dropdown_menu$46template.styles$DropdownMenuComponentHost*/get styles$DropdownMenuComponentHost() {
      return C0 || CT.C0;
    },
    /*dropdown_menu$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_menu/dropdown_menu.template", {
    "package:angular_components/material_menu/dropdown_menu.template.dart": dropdown_menu$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dropdown_menu.template.dart"],"names":[],"mappings":"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","file":"dropdown_menu.template.ddc.js"}');
  // Exports:
  return {
    material_menu__dropdown_menu$46template: dropdown_menu$46template
  };
});

//# sourceMappingURL=dropdown_menu.template.ddc.js.map

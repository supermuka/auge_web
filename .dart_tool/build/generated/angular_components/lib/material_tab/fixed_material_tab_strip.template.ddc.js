define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/focus/focus_list.template', 'packages/angular_components/focus/focus_list', 'packages/angular_components/focus/focus', 'packages/angular_components/material_tab/fixed_material_tab_strip', 'packages/angular_components/material_tab/tab_button.template', 'packages/angular_components/focus/focus_item.template', 'packages/angular_components/focus/focus_item', 'packages/angular_components/material_tab/tab_button', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/annotations/rtl_annotation.template', 'packages/angular_components/material_tab/tab_change_event.template', 'packages/angular_components/material_tab/fixed_material_tab_strip.scss.css.shim'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__angular_components__focus__focus_list$46template, packages__angular_components__focus__focus_list, packages__angular_components__focus__focus, packages__angular_components__material_tab__fixed_material_tab_strip, packages__angular_components__material_tab__tab_button$46template, packages__angular_components__focus__focus_item$46template, packages__angular_components__focus__focus_item, packages__angular_components__material_tab__tab_button, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__annotations__rtl_annotation$46template, packages__angular_components__material_tab__tab_change_event$46template, packages__angular_components__material_tab__fixed_material_tab_strip$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const check_binding = packages__angular__src__core__change_detection__change_detection.src__runtime__check_binding;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const injector = packages__angular__src__core__change_detection__change_detection.src__di__injector__injector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const focus_list$46template = packages__angular_components__focus__focus_list$46template.focus__focus_list$46template;
  const focus_list = packages__angular_components__focus__focus_list.focus__focus_list;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const fixed_material_tab_strip = packages__angular_components__material_tab__fixed_material_tab_strip.material_tab__fixed_material_tab_strip;
  const tab_button$46template = packages__angular_components__material_tab__tab_button$46template.material_tab__tab_button$46template;
  const focus_item$46template = packages__angular_components__focus__focus_item$46template.focus__focus_item$46template;
  const focus_item = packages__angular_components__focus__focus_item.focus__focus_item;
  const tab_button = packages__angular_components__material_tab__tab_button.material_tab__tab_button;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const rtl_annotation$46template = packages__angular_components__annotations__rtl_annotation$46template.annotations__rtl_annotation$46template;
  const tab_change_event$46template = packages__angular_components__material_tab__tab_change_event$46template.material_tab__tab_change_event$46template;
  const fixed_material_tab_strip$46scss$46css$46shim = packages__angular_components__material_tab__fixed_material_tab_strip$46scss$46css$46shim.material_tab__fixed_material_tab_strip$46scss$46css$46shim;
  const fixed_material_tab_strip$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $setProperty = dartx.setProperty;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  let VoidToFocusListDirective = () => (VoidToFocusListDirective = dart.constFn(dart.fnType(focus_list.FocusListDirective, [])))();
  let EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  let RenderViewAndintToEmbeddedViewOfvoid = () => (RenderViewAndintToEmbeddedViewOfvoid = dart.constFn(dart.fnType(EmbeddedViewOfvoid(), [render_view.RenderView, core.int])))();
  let JSArrayOfFocusableItem = () => (JSArrayOfFocusableItem = dart.constFn(_interceptors.JSArray$(focus.FocusableItem)))();
  let ListOfFocusableItem = () => (ListOfFocusableItem = dart.constFn(core.List$(focus.FocusableItem)))();
  let _ViewFixedMaterialTabStripComponent1ToListOfFocusableItem = () => (_ViewFixedMaterialTabStripComponent1ToListOfFocusableItem = dart.constFn(dart.fnType(ListOfFocusableItem(), [fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let VoidToFixedMaterialTabStripComponent = () => (VoidToFixedMaterialTabStripComponent = dart.constFn(dart.fnType(fixed_material_tab_strip.FixedMaterialTabStripComponent, [])))();
  let ComponentFactoryOfFixedMaterialTabStripComponent = () => (ComponentFactoryOfFixedMaterialTabStripComponent = dart.constFn(component_factory.ComponentFactory$(fixed_material_tab_strip.FixedMaterialTabStripComponent)))();
  let HostViewOfFixedMaterialTabStripComponent = () => (HostViewOfFixedMaterialTabStripComponent = dart.constFn(host_view.HostView$(fixed_material_tab_strip.FixedMaterialTabStripComponent)))();
  let InjectorToHostViewOfFixedMaterialTabStripComponent = () => (InjectorToHostViewOfFixedMaterialTabStripComponent = dart.constFn(dart.fnType(HostViewOfFixedMaterialTabStripComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponent1, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "isRtl"
      });
    },
    get C3() {
      return C3 = dart.fn(fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponentHost0, InjectorToHostViewOfFixedMaterialTabStripComponent());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfFixedMaterialTabStripComponent().prototype,
        [ComponentFactory__viewFactory]: C3 || CT.C3,
        [ComponentFactory_selector]: "material-tab-strip"
      });
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    }
  });
  const _query_FocusableItem_0_0_isDirty = dart.privateName(fixed_material_tab_strip$46template, "_query_FocusableItem_0_0_isDirty");
  const _FocusListDirective_0_5 = dart.privateName(fixed_material_tab_strip$46template, "_FocusListDirective_0_5");
  const _appEl_2 = dart.privateName(fixed_material_tab_strip$46template, "_appEl_2");
  const _NgFor_2_9 = dart.privateName(fixed_material_tab_strip$46template, "_NgFor_2_9");
  const _expr_1 = dart.privateName(fixed_material_tab_strip$46template, "_expr_1");
  const _expr_2 = dart.privateName(fixed_material_tab_strip$46template, "_expr_2");
  const _el_0 = dart.privateName(fixed_material_tab_strip$46template, "_el_0");
  const _el_1 = dart.privateName(fixed_material_tab_strip$46template, "_el_1");
  let C0;
  const _FocusItemDirective_0_5 = dart.privateName(fixed_material_tab_strip$46template, "_FocusItemDirective_0_5");
  fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0 = class ViewFixedMaterialTabStripComponent0 extends component_view.ComponentView$(fixed_material_tab_strip.FixedMaterialTabStripComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_tab/fixed_material_tab_strip.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "navi-bar");
      dom_helpers.setAttribute(this[_el_0], "focusList", "");
      dom_helpers.setAttribute(this[_el_0], "ignoreUpAndDown", "");
      dom_helpers.setAttribute(this[_el_0], "loop", "");
      dom_helpers.setAttribute(this[_el_0], "role", "tablist");
      this.addShimC(this[_el_0]);
      this[_FocusListDirective_0_5] = new focus_list$46template.FocusListDirectiveNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(focus_list.FocusListDirective, dart.wrapType(focus_list.FocusListDirective), dart.fn(() => new focus_list.FocusListDirective.new(ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), "tablist", ""), VoidToFocusListDirective())) : new focus_list.FocusListDirective.new(ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), "tablist", ""));
      this[_el_1] = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_1], "tab-indicator");
      this.addShimC(this[_el_1]);
      let _anchor_2 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C0 || CT.C0);
      this[_NgFor_2_9] = new ng_for.NgFor.new(this[_appEl_2], _TemplateRef_2_8);
      _ctx.focusController = this[_FocusListDirective_0_5].instance;
      _ctx.naviBar = this[_el_0];
      app_view_utils.appViewUtils.eventManager.addEventListener(parentRenderNode, "focusout", this.eventHandler1(core.Object, html.FocusEvent, dart.bind(_ctx, 'focusOutHandler')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_FocusListDirective_0_5].instance.loop = true;
      }
      let currVal_2 = _ctx.tabLabels;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "tabLabels", ""))) {
        this[_NgFor_2_9].ngForOf = currVal_2;
        this[_expr_2] = currVal_2;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_2_9].ngDoCheck();
      }
      this[_appEl_2].detectChangesInNestedViews();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(this[_query_FocusableItem_0_0_isDirty])) {
          this[_FocusListDirective_0_5].instance.listItems = this[_appEl_2].mapNestedViews(focus.FocusableItem, fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1, dart.fn(nestedView => JSArrayOfFocusableItem().of([nestedView[_FocusItemDirective_0_5].instance]), _ViewFixedMaterialTabStripComponent1ToListOfFocusableItem()));
          this[_query_FocusableItem_0_0_isDirty] = false;
        }
      }
      this[_FocusListDirective_0_5].detectHostChanges(this, this[_el_0]);
      let currVal_1 = _ctx.tabIndicatorTransform;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "tabIndicatorTransform", ""))) {
        this[_el_1].style[$setProperty]("transform", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_FocusListDirective_0_5].instance.ngOnDestroy();
    }
    initComponentStyles() {
      let styles = fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._componentStyles;
      if (styles == null) {
        fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._componentStyles = styles = fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(fixed_material_tab_strip$46template.styles$FixedMaterialTabStripComponent, fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.new = function(parentView, parentIndex) {
    this[_query_FocusableItem_0_0_isDirty] = true;
    this[_FocusListDirective_0_5] = null;
    this[_appEl_2] = null;
    this[_NgFor_2_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-tab-strip"));
    this.updateChildClassNonHtml(this.rootElement, "themeable");
  }).prototype = fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.prototype;
  dart.addTypeTests(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0);
  dart.setMethodSignature(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0, () => ({
    __proto__: dart.getMethods(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0, "package:angular_components/material_tab/fixed_material_tab_strip.template.dart");
  dart.setFieldSignature(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0, () => ({
    __proto__: dart.getFields(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.__proto__),
    [_query_FocusableItem_0_0_isDirty]: dart.fieldType(core.bool),
    [_FocusListDirective_0_5]: dart.fieldType(focus_list$46template.FocusListDirectiveNgCd),
    [_appEl_2]: dart.fieldType(view_container.ViewContainer),
    [_NgFor_2_9]: dart.fieldType(ng_for.NgFor),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0, {
    /*fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _compView_0 = dart.privateName(fixed_material_tab_strip$46template, "_compView_0");
  const _TabButtonComponent_0_6 = dart.privateName(fixed_material_tab_strip$46template, "_TabButtonComponent_0_6");
  const _expr_0 = dart.privateName(fixed_material_tab_strip$46template, "_expr_0");
  const _expr_3 = dart.privateName(fixed_material_tab_strip$46template, "_expr_3");
  const _expr_4 = dart.privateName(fixed_material_tab_strip$46template, "_expr_4");
  const _handleEvent_0 = dart.privateName(fixed_material_tab_strip$46template, "_handleEvent_0");
  fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1 = class _ViewFixedMaterialTabStripComponent1 extends embedded_view.EmbeddedView$(fixed_material_tab_strip.FixedMaterialTabStripComponent) {
    build() {
      this[_compView_0] = new tab_button$46template.ViewTabButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(this[_el_0], "tab-button");
      dom_helpers.setAttribute(this[_el_0], "focusItem", "");
      dom_helpers.setAttribute(this[_el_0], "role", "tab");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_FocusItemDirective_0_5] = new focus_item$46template.FocusItemDirectiveNgCd.new(new focus_item.FocusItemDirective.new(html.HtmlElement._check(this[_el_0]), this[_compView_0], "tab"));
      this[_TabButtonComponent_0_6] = new tab_button.TabButtonComponent.new(this[_el_0]);
      this[_compView_0].create(this[_TabButtonComponent_0_6]);
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_FocusItemDirective_0_5].instance, 'keydown')));
      let subscription_0 = this[_TabButtonComponent_0_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handleEvent_0)));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([this[_el_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(focus.FocusableItem) && 0 === nodeIndex) {
        return this[_FocusItemDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_idx = optimizations.unsafeCast(core.int, this.locals[$_get]("index"));
      let local_tabLabel = optimizations.unsafeCast(core.String, this.locals[$_get]("$implicit"));
      changed = false;
      if (dart.test(firstCheck)) {
        this[_TabButtonComponent_0_6].role = "tab";
        changed = true;
      }
      let currVal_3 = local_tabLabel;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "tabLabel", ""))) {
        this[_TabButtonComponent_0_6].label = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.activeTabIndex == local_idx;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "activeTabIndex == idx", ""))) {
        this[_TabButtonComponent_0_6].isActive = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.tabId(local_idx);
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "tabId(idx)", ""))) {
        dom_helpers.setProperty(this[_el_0], "id", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.activeStr(local_idx);
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "activeStr(idx)", ""))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-selected", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_FocusItemDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0, this.parentView)[_query_FocusableItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
    [_handleEvent_0]($36event) {
      let local_idx = optimizations.unsafeCast(core.int, this.locals[$_get]("index"));
      let _ctx = this.ctx;
      _ctx.switchTo(local_idx);
    }
  };
  (fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FocusItemDirective_0_5] = null;
    this[_TabButtonComponent_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_el_0] = null;
    fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.prototype;
  dart.addTypeTests(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1);
  dart.setMethodSignature(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1, () => ({
    __proto__: dart.getMethods(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1, "package:angular_components/material_tab/fixed_material_tab_strip.template.dart");
  dart.setFieldSignature(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1, () => ({
    __proto__: dart.getFields(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.__proto__),
    [_compView_0]: dart.fieldType(tab_button$46template.ViewTabButtonComponent0),
    [_FocusItemDirective_0_5]: dart.fieldType(focus_item$46template.FocusItemDirectiveNgCd),
    [_TabButtonComponent_0_6]: dart.fieldType(tab_button.TabButtonComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.String),
    [_expr_4]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.Element)
  }));
  const OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  let C1;
  fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0 = class _ViewFixedMaterialTabStripComponentHost0 extends host_view.HostView$(fixed_material_tab_strip.FixedMaterialTabStripComponent) {
    build() {
      this.componentView = new fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(fixed_material_tab_strip.FixedMaterialTabStripComponent, dart.wrapType(fixed_material_tab_strip.FixedMaterialTabStripComponent), dart.fn(() => new fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this.componentView, core.bool._check(this.injectorGetOptional(C1 || CT.C1, this.parentIndex)), ng_zone.NgZone._check(this.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex))), VoidToFixedMaterialTabStripComponent())) : new fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this.componentView, core.bool._check(this.injectorGetOptional(C1 || CT.C1, this.parentIndex)), ng_zone.NgZone._check(this.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)));
      this.initRootNode(_el_0);
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
  };
  (fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.new = function(injector) {
    fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.prototype;
  dart.addTypeTests(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0);
  dart.setMethodSignature(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0, () => ({
    __proto__: dart.getMethods(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0, "package:angular_components/material_tab/fixed_material_tab_strip.template.dart");
  fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponent1 = function viewFactory_FixedMaterialTabStripComponent1(parentView, parentIndex) {
    return new fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.new(parentView, parentIndex);
  };
  fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponentHost0 = function viewFactory_FixedMaterialTabStripComponentHost0(injector) {
    return new fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.new(injector);
  };
  fixed_material_tab_strip$46template.initReflector = function initReflector() {
    if (dart.test(fixed_material_tab_strip$46template._visited)) {
      return;
    }
    fixed_material_tab_strip$46template._visited = true;
    reflector.registerComponent(dart.wrapType(fixed_material_tab_strip.FixedMaterialTabStripComponent), fixed_material_tab_strip$46template.FixedMaterialTabStripComponentNgFactory);
    angular$46template.initReflector();
    meta$46template.initReflector();
    rtl_annotation$46template.initReflector();
    focus_item$46template.initReflector();
    focus_list$46template.initReflector();
    tab_button$46template.initReflector();
    tab_change_event$46template.initReflector();
  };
  dart.copyProperties(fixed_material_tab_strip$46template, {
    get FixedMaterialTabStripComponentNgFactory() {
      return fixed_material_tab_strip$46template._FixedMaterialTabStripComponentNgFactory;
    }
  });
  let C3;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C2;
  let C4;
  dart.defineLazy(fixed_material_tab_strip$46template, {
    /*fixed_material_tab_strip$46template.styles$FixedMaterialTabStripComponent*/get styles$FixedMaterialTabStripComponent() {
      return [fixed_material_tab_strip$46scss$46css$46shim.styles];
    },
    /*fixed_material_tab_strip$46template._FixedMaterialTabStripComponentNgFactory*/get _FixedMaterialTabStripComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*fixed_material_tab_strip$46template.styles$FixedMaterialTabStripComponentHost*/get styles$FixedMaterialTabStripComponentHost() {
      return C4 || CT.C4;
    },
    /*fixed_material_tab_strip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_tab/fixed_material_tab_strip.template", {
    "package:angular_components/material_tab/fixed_material_tab_strip.template.dart": fixed_material_tab_strip$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fixed_material_tab_strip.template.dart"],"names":[],"mappings":"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","file":"fixed_material_tab_strip.template.ddc.js"}');
  // Exports:
  return {
    material_tab__fixed_material_tab_strip$46template: fixed_material_tab_strip$46template
  };
});

//# sourceMappingURL=fixed_material_tab_strip.template.ddc.js.map

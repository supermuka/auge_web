define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_toggle/material_toggle.template', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_toggle/material_toggle', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/src/material_datepicker/comparison_range_editor', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/material_datepicker/comparison_option', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/comparison_option.template', 'packages/angular_components/material_datepicker/date_range_input.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/material_list/material_list_item.template', 'packages/angular_components/material_select/material_dropdown_select.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/utils/angular/scroll_host/angular_2.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/comparison.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/src/material_datepicker/sequential.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__angular_components__material_toggle__material_toggle$46template, packages__angular__src__runtime__interpolate, packages__angular_components__material_toggle__material_toggle, packages__angular_components__interfaces__has_disabled, packages__angular_components__src__material_datepicker__comparison_range_editor, packages__angular__src__runtime__text_binding, packages__angular_components__material_select__material_select_item$46template, packages__angular_components__material_select__material_select_item, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__material_select__activation_handler, packages__angular_components__model__selection__selection_container, packages__angular_components__model__ui__has_renderer, packages__angular_components__material_datepicker__comparison_option, packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface, packages__angular__angular$46template, packages__angular_components__material_datepicker__comparison_option$46template, packages__angular_components__material_datepicker__date_range_input$46template, packages__angular_components__material_datepicker__range$46template, packages__angular_components__material_list__material_list$46template, packages__angular_components__material_list__material_list_item$46template, packages__angular_components__material_select__material_dropdown_select$46template, packages__angular_components__model__date__date$46template, packages__angular_components__utils__angular__scroll_host__angular_2$46template, packages__angular_components__material_datepicker__calendar$46template, packages__angular_components__material_datepicker__comparison$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__src__material_datepicker__sequential$46template, packages__angular_components__utils__disposer__disposer$46template) {
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
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_toggle$46template = packages__angular_components__material_toggle__material_toggle$46template.material_toggle__material_toggle$46template;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_toggle = packages__angular_components__material_toggle__material_toggle.material_toggle__material_toggle;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const comparison_range_editor = packages__angular_components__src__material_datepicker__comparison_range_editor.src__material_datepicker__comparison_range_editor;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const material_select_item$46template = packages__angular_components__material_select__material_select_item$46template.material_select__material_select_item$46template;
  const material_select_item = packages__angular_components__material_select__material_select_item.material_select__material_select_item;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const comparison_option = packages__angular_components__material_datepicker__comparison_option.material_datepicker__comparison_option;
  const scroll_host_interface = packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const comparison_option$46template = packages__angular_components__material_datepicker__comparison_option$46template.material_datepicker__comparison_option$46template;
  const date_range_input$46template = packages__angular_components__material_datepicker__date_range_input$46template.material_datepicker__date_range_input$46template;
  const range$46template = packages__angular_components__material_datepicker__range$46template.material_datepicker__range$46template;
  const material_list$46template = packages__angular_components__material_list__material_list$46template.material_list__material_list$46template;
  const material_list_item$46template = packages__angular_components__material_list__material_list_item$46template.material_list__material_list_item$46template;
  const material_dropdown_select$46template = packages__angular_components__material_select__material_dropdown_select$46template.material_select__material_dropdown_select$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const angular_2$46template = packages__angular_components__utils__angular__scroll_host__angular_2$46template.utils__angular__scroll_host__angular_2$46template;
  const calendar$46template = packages__angular_components__material_datepicker__calendar$46template.material_datepicker__calendar$46template;
  const comparison$46template = packages__angular_components__material_datepicker__comparison$46template.material_datepicker__comparison$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const sequential$46template = packages__angular_components__src__material_datepicker__sequential$46template.src__material_datepicker__sequential$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const comparison_range_editor$46template = Object.create(dart.library);
  const comparison_range_editor$46scss$46css$46shim = Object.create(dart.library);
  const date_range_editor_model$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  let RenderViewAndintToEmbeddedViewOfvoid = () => (RenderViewAndintToEmbeddedViewOfvoid = dart.constFn(dart.fnType(EmbeddedViewOfvoid(), [render_view.RenderView, core.int])))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let VoidToMaterialSelectItemComponent = () => (VoidToMaterialSelectItemComponent = dart.constFn(dart.fnType(material_select_item.MaterialSelectItemComponent, [])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let VoidToComparisonRangeEditorComponent = () => (VoidToComparisonRangeEditorComponent = dart.constFn(dart.fnType(comparison_range_editor.ComparisonRangeEditorComponent, [])))();
  let ComponentFactoryOfComparisonRangeEditorComponent = () => (ComponentFactoryOfComparisonRangeEditorComponent = dart.constFn(component_factory.ComponentFactory$(comparison_range_editor.ComparisonRangeEditorComponent)))();
  let HostViewOfComparisonRangeEditorComponent = () => (HostViewOfComparisonRangeEditorComponent = dart.constFn(host_view.HostView$(comparison_range_editor.ComparisonRangeEditorComponent)))();
  let InjectorToHostViewOfComparisonRangeEditorComponent = () => (InjectorToHostViewOfComparisonRangeEditorComponent = dart.constFn(dart.fnType(HostViewOfComparisonRangeEditorComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], dart.dynamic);
    },
    get C1() {
      return C1 = dart.fn(comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent1, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C2() {
      return C2 = dart.fn(comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent2, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C4() {
      return C4 = dart.fn(comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponentHost0, InjectorToHostViewOfComparisonRangeEditorComponent());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ComponentFactoryOfComparisonRangeEditorComponent().prototype,
        [ComponentFactory__viewFactory]: C4 || CT.C4,
        [ComponentFactory_selector]: "comparison-range-editor"
      });
    }
  });
  const _compView_1 = dart.privateName(comparison_range_editor$46template, "_compView_1");
  const _MaterialToggleComponent_1_5 = dart.privateName(comparison_range_editor$46template, "_MaterialToggleComponent_1_5");
  const _appEl_2 = dart.privateName(comparison_range_editor$46template, "_appEl_2");
  const _NgIf_2_9 = dart.privateName(comparison_range_editor$46template, "_NgIf_2_9");
  const _expr_0 = dart.privateName(comparison_range_editor$46template, "_expr_0");
  const _expr_2 = dart.privateName(comparison_range_editor$46template, "_expr_2");
  let C0;
  let C1;
  const _handleEvent_0 = dart.privateName(comparison_range_editor$46template, "_handleEvent_0");
  comparison_range_editor$46template.ViewComparisonRangeEditorComponent0 = class ViewComparisonRangeEditorComponent0 extends component_view.ComponentView$(comparison_range_editor.ComparisonRangeEditorComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_datepicker/comparison_range_editor.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "comparison-toggle-section");
      this.addShimC(_el_0);
      this[_compView_1] = new material_toggle$46template.ViewMaterialToggleComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      _el_0[$append](_el_1);
      this.updateChildClassNonHtml(_el_1, interpolate.interpolateString2("", "comparison-toggle", " ", "themeable", ""));
      this.addShimC(_el_1);
      this[_MaterialToggleComponent_1_5] = new material_toggle.MaterialToggleComponent.new(this[_compView_1], null);
      this[_compView_1].createAndProject(this[_MaterialToggleComponent_1_5], JSArrayOfObject().of([C0 || CT.C0]));
      let _anchor_2 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_2] = new view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C1 || CT.C1);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let subscription_0 = this[_MaterialToggleComponent_1_5].onChecked.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handleEvent_0)));
      this.initSubscriptions(JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(has_disabled.HasDisabled) && 1 === nodeIndex) {
        return this[_MaterialToggleComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        if (comparison_range_editor.ComparisonRangeEditorComponent.comparisonHeaderMsg != null) {
          this[_MaterialToggleComponent_1_5].label = comparison_range_editor.ComparisonRangeEditorComponent.comparisonHeaderMsg;
          changed = true;
        }
      }
      let currVal_0 = !dart.test(_ctx.model.comparisonSupported);
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "!model.comparisonSupported", ""))) {
        this[_MaterialToggleComponent_1_5].disabled = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_2 = _ctx.comparisonEnabled;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "comparisonEnabled", ""))) {
        this[_MaterialToggleComponent_1_5].checked = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      this[_NgIf_2_9].ngIf = _ctx.model.comparisonEnabled;
      this[_appEl_2].detectChangesInNestedViews();
      this[_compView_1].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialToggleComponent_1_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_compView_1].destroyInternalState();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.comparisonEnabled = core.bool._check($36event);
    }
    initComponentStyles() {
      let styles = comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._componentStyles;
      if (styles == null) {
        comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._componentStyles = styles = comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(comparison_range_editor$46template.styles$ComparisonRangeEditorComponent, comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialToggleComponent_1_5] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("comparison-range-editor"));
  }).prototype = comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.prototype;
  dart.addTypeTests(comparison_range_editor$46template.ViewComparisonRangeEditorComponent0);
  dart.setMethodSignature(comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, () => ({
    __proto__: dart.getMethods(comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, "package:angular_components/src/material_datepicker/comparison_range_editor.template.dart");
  dart.setFieldSignature(comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, () => ({
    __proto__: dart.getFields(comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.__proto__),
    [_compView_1]: dart.fieldType(material_toggle$46template.ViewMaterialToggleComponent0),
    [_MaterialToggleComponent_1_5]: dart.fieldType(material_toggle.MaterialToggleComponent),
    [_appEl_2]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, {
    /*comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _appEl_1 = dart.privateName(comparison_range_editor$46template, "_appEl_1");
  const _NgFor_1_9 = dart.privateName(comparison_range_editor$46template, "_NgFor_1_9");
  let C2;
  comparison_range_editor$46template._ViewComparisonRangeEditorComponent1 = class _ViewComparisonRangeEditorComponent1 extends embedded_view.EmbeddedView$(comparison_range_editor.ComparisonRangeEditorComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C2 || CT.C2);
      this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.model.validComparisonOptions;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "model.validComparisonOptions", ""))) {
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
  (comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.prototype;
  dart.addTypeTests(comparison_range_editor$46template._ViewComparisonRangeEditorComponent1);
  dart.setMethodSignature(comparison_range_editor$46template._ViewComparisonRangeEditorComponent1, () => ({
    __proto__: dart.getMethods(comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(comparison_range_editor$46template._ViewComparisonRangeEditorComponent1, "package:angular_components/src/material_datepicker/comparison_range_editor.template.dart");
  dart.setFieldSignature(comparison_range_editor$46template._ViewComparisonRangeEditorComponent1, () => ({
    __proto__: dart.getFields(comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.__proto__),
    [_appEl_1]: dart.fieldType(view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  const _textBinding_1 = dart.privateName(comparison_range_editor$46template, "_textBinding_1");
  const _compView_0 = dart.privateName(comparison_range_editor$46template, "_compView_0");
  const _MaterialSelectItemComponent_0_5 = dart.privateName(comparison_range_editor$46template, "_MaterialSelectItemComponent_0_5");
  comparison_range_editor$46template._ViewComparisonRangeEditorComponent2 = class _ViewComparisonRangeEditorComponent2 extends embedded_view.EmbeddedView$(comparison_range_editor.ComparisonRangeEditorComponent) {
    build() {
      this[_compView_0] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.addShimC(_el_0);
      this[_MaterialSelectItemComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(material_select_item.MaterialSelectItemComponent, dart.wrapType(material_select_item.MaterialSelectItemComponent), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(_el_0, material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentIndex)), activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(activation_handler.ActivationHandler), this.parentView.parentIndex)), this[_compView_0], null), VoidToMaterialSelectItemComponent())) : new material_select_item.MaterialSelectItemComponent.new(_el_0, material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentIndex)), activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(activation_handler.ActivationHandler), this.parentView.parentIndex)), this[_compView_0], null);
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
      let local_option = optimizations.unsafeCast(comparison_option.ComparisonOption, this.locals[$_get]("$implicit"));
      if (dart.test(firstCheck)) {
        this[_MaterialSelectItemComponent_0_5].closeOnActivate = false;
      }
      let currVal_0 = dart.equals(_ctx.model.comparisonOption, local_option);
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "model.comparisonOption == option", ""))) {
        this[_MaterialSelectItemComponent_0_5].selected = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.comparisonOptionMsg(local_option)));
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialSelectItemComponent_0_5].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let local_option = optimizations.unsafeCast(comparison_option.ComparisonOption, this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.model.comparisonOption = local_option;
    }
  };
  (comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_MaterialSelectItemComponent_0_5] = null;
    this[_expr_0] = null;
    comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.prototype;
  dart.addTypeTests(comparison_range_editor$46template._ViewComparisonRangeEditorComponent2);
  dart.setMethodSignature(comparison_range_editor$46template._ViewComparisonRangeEditorComponent2, () => ({
    __proto__: dart.getMethods(comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(comparison_range_editor$46template._ViewComparisonRangeEditorComponent2, "package:angular_components/src/material_datepicker/comparison_range_editor.template.dart");
  dart.setFieldSignature(comparison_range_editor$46template._ViewComparisonRangeEditorComponent2, () => ({
    __proto__: dart.getFields(comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.__proto__),
    [_textBinding_1]: dart.finalFieldType(text_binding.TextBinding),
    [_compView_0]: dart.fieldType(material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_0_5]: dart.fieldType(material_select_item.MaterialSelectItemComponent),
    [_expr_0]: dart.fieldType(core.bool)
  }));
  comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0 = class _ViewComparisonRangeEditorComponentHost0 extends host_view.HostView$(comparison_range_editor.ComparisonRangeEditorComponent) {
    build() {
      this.componentView = new comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(comparison_range_editor.ComparisonRangeEditorComponent, dart.wrapType(comparison_range_editor.ComparisonRangeEditorComponent), dart.fn(() => new comparison_range_editor.ComparisonRangeEditorComponent.new(ng_zone.NgZone._check(this.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), scroll_host_interface.ScrollHost._check(this.injectorGetOptional(dart.wrapType(scroll_host_interface.ScrollHost), this.parentIndex))), VoidToComparisonRangeEditorComponent())) : new comparison_range_editor.ComparisonRangeEditorComponent.new(ng_zone.NgZone._check(this.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), scroll_host_interface.ScrollHost._check(this.injectorGetOptional(dart.wrapType(scroll_host_interface.ScrollHost), this.parentIndex)));
      this.initRootNode(_el_0);
    }
  };
  (comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.new = function(injector) {
    comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.prototype;
  dart.addTypeTests(comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0);
  dart.setMethodSignature(comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0, () => ({
    __proto__: dart.getMethods(comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0, "package:angular_components/src/material_datepicker/comparison_range_editor.template.dart");
  comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent1 = function viewFactory_ComparisonRangeEditorComponent1(parentView, parentIndex) {
    return new comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.new(parentView, parentIndex);
  };
  comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent2 = function viewFactory_ComparisonRangeEditorComponent2(parentView, parentIndex) {
    return new comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.new(parentView, parentIndex);
  };
  comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponentHost0 = function viewFactory_ComparisonRangeEditorComponentHost0(injector) {
    return new comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.new(injector);
  };
  comparison_range_editor$46template.initReflector = function initReflector() {
    if (dart.test(comparison_range_editor$46template._visited)) {
      return;
    }
    comparison_range_editor$46template._visited = true;
    reflector.registerComponent(dart.wrapType(comparison_range_editor.ComparisonRangeEditorComponent), comparison_range_editor$46template.ComparisonRangeEditorComponentNgFactory);
    angular$46template.initReflector();
    comparison_option$46template.initReflector();
    date_range_input$46template.initReflector();
    range$46template.initReflector();
    material_list$46template.initReflector();
    material_list_item$46template.initReflector();
    material_dropdown_select$46template.initReflector();
    material_select_item$46template.initReflector();
    material_toggle$46template.initReflector();
    date$46template.initReflector();
    date_range_editor_model$46template.initReflector();
    angular_2$46template.initReflector();
  };
  dart.copyProperties(comparison_range_editor$46template, {
    get ComparisonRangeEditorComponentNgFactory() {
      return comparison_range_editor$46template._ComparisonRangeEditorComponentNgFactory;
    }
  });
  let C4;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C3;
  dart.defineLazy(comparison_range_editor$46template, {
    /*comparison_range_editor$46template.styles$ComparisonRangeEditorComponent*/get styles$ComparisonRangeEditorComponent() {
      return [comparison_range_editor$46scss$46css$46shim.styles];
    },
    /*comparison_range_editor$46template._ComparisonRangeEditorComponentNgFactory*/get _ComparisonRangeEditorComponentNgFactory() {
      return C3 || CT.C3;
    },
    /*comparison_range_editor$46template.styles$ComparisonRangeEditorComponentHost*/get styles$ComparisonRangeEditorComponentHost() {
      return C0 || CT.C0;
    },
    /*comparison_range_editor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.defineLazy(comparison_range_editor$46scss$46css$46shim, {
    /*comparison_range_editor$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{display:flex;flex-direction:column}.comparison-toggle-section._ngcontent-%ID%{display:flex;justify-content:space-between;align-items:center;flex-grow:1;height:32px;padding:0 16px}.comparison-toggle._ngcontent-%ID%{display:inline-flex;width:100%}.comparison-option-dropdown._ngcontent-%ID%{flex-grow:1;display:inline-block;padding:0 8px;position:relative}material-select-item._ngcontent-%ID%{font-size:inherit}.fake-popup._ngcontent-%ID%{background-color:#fff;left:0;position:absolute;top:0;z-index:1}"];
    }
  });
  date_range_editor_model$46template.initReflector = function initReflector$() {
    if (dart.test(date_range_editor_model$46template._visited)) {
      return;
    }
    date_range_editor_model$46template._visited = true;
    calendar$46template.initReflector();
    comparison$46template.initReflector();
    comparison_option$46template.initReflector();
    range$46template.initReflector();
    date$46template.initReflector();
    observable$46template.initReflector();
    sequential$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.defineLazy(date_range_editor_model$46template, {
    /*date_range_editor_model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim", {
    "package:angular_components/src/material_datepicker/comparison_range_editor.template.dart": comparison_range_editor$46template,
    "package:angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim.dart": comparison_range_editor$46scss$46css$46shim,
    "package:angular_components/src/material_datepicker/date_range_editor_model.template.dart": date_range_editor_model$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["comparison_range_editor.template.dart","comparison_range_editor.scss.css.shim.dart","date_range_editor_model.template.dart"],"names":[],"mappings":"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","file":"comparison_range_editor.scss.css.shim.ddc.js"}');
  // Exports:
  return {
    src__material_datepicker__comparison_range_editor$46template: comparison_range_editor$46template,
    src__material_datepicker__comparison_range_editor$46scss$46css$46shim: comparison_range_editor$46scss$46css$46shim,
    src__material_datepicker__date_range_editor_model$46template: date_range_editor_model$46template
  };
});

//# sourceMappingURL=comparison_range_editor.scss.css.shim.ddc.js.map

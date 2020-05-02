define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/focus/focus_list.template', 'packages/angular_components/focus/focus_list', 'packages/angular_components/material_list/material_list', 'packages/angular_components/focus/focus', 'packages/angular_components/material_select/material_select', 'packages/angular_components/model/selection/selection_options', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/focus/focus_item.template', 'packages/angular_components/focus/focus_item', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/material_select/material_select_base.template', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/model/ui/template_support.template', 'packages/angular_components/material_select/material_select.scss.css.shim'], function(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_list__material_list$46template, packages__angular_components__focus__focus_list$46template, packages__angular_components__focus__focus_list, packages__angular_components__material_list__material_list, packages__angular_components__focus__focus, packages__angular_components__material_select__material_select, packages__angular_components__model__selection__selection_options, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__angular_components__material_select__material_select_item$46template, packages__angular_components__focus__focus_item$46template, packages__angular_components__focus__focus_item, packages__angular_components__material_select__material_select_item, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__material_select__activation_handler, packages__angular_components__model__selection__selection_container, packages__angular_components__interfaces__has_disabled, packages__angular_components__model__ui__has_renderer, packages__angular_components__material_select__material_select_base$46template, packages__angular__angular$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__model__selection__select$46template, packages__angular_components__model__selection__selection_container$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__selection__selection_options$46template, packages__angular_components__model__ui__has_factory$46template, packages__angular_components__model__ui__has_renderer$46template, packages__angular_components__model__ui__template_support$46template, packages__angular_components__material_select__material_select$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const check_binding = packages__angular__src__core__change_detection__change_detection.src__runtime__check_binding;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const injector = packages__angular__src__core__change_detection__change_detection.src__di__injector__injector;
  const material_list$46template = packages__angular_components__material_list__material_list$46template.material_list__material_list$46template;
  const focus_list$46template = packages__angular_components__focus__focus_list$46template.focus__focus_list$46template;
  const focus_list = packages__angular_components__focus__focus_list.focus__focus_list;
  const material_list = packages__angular_components__material_list__material_list.material_list__material_list;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const material_select = packages__angular_components__material_select__material_select.material_select__material_select;
  const selection_options = packages__angular_components__model__selection__selection_options.model__selection__selection_options;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_select_item$46template = packages__angular_components__material_select__material_select_item$46template.material_select__material_select_item$46template;
  const focus_item$46template = packages__angular_components__focus__focus_item$46template.focus__focus_item$46template;
  const focus_item = packages__angular_components__focus__focus_item.focus__focus_item;
  const material_select_item = packages__angular_components__material_select__material_select_item.material_select__material_select_item;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const material_select_base$46template = packages__angular_components__material_select__material_select_base$46template.material_select__material_select_base$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const select$46template = packages__angular_components__model__selection__select$46template.model__selection__select$46template;
  const selection_container$46template = packages__angular_components__model__selection__selection_container$46template.model__selection__selection_container$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const selection_options$46template = packages__angular_components__model__selection__selection_options$46template.model__selection__selection_options$46template;
  const has_factory$46template = packages__angular_components__model__ui__has_factory$46template.model__ui__has_factory$46template;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  const template_support$46template = packages__angular_components__model__ui__template_support$46template.model__ui__template_support$46template;
  const material_select$46scss$46css$46shim = packages__angular_components__material_select__material_select$46scss$46css$46shim.material_select__material_select$46scss$46css$46shim;
  const material_select$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $toString = dartx.toString;
  const $addEventListener = dartx.addEventListener;
  let VoidToFocusListDirective = () => (VoidToFocusListDirective = dart.constFn(dart.fnType(focus_list.FocusListDirective, [])))();
  let EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  let RenderViewAndintToEmbeddedViewOfvoid = () => (RenderViewAndintToEmbeddedViewOfvoid = dart.constFn(dart.fnType(EmbeddedViewOfvoid(), [render_view.RenderView, core.int])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let JSArrayOfFocusableItem = () => (JSArrayOfFocusableItem = dart.constFn(_interceptors.JSArray$(focus.FocusableItem)))();
  let ListOfFocusableItem = () => (ListOfFocusableItem = dart.constFn(core.List$(focus.FocusableItem)))();
  let _ViewMaterialSelectComponent5ToListOfFocusableItem = () => (_ViewMaterialSelectComponent5ToListOfFocusableItem = dart.constFn(dart.fnType(ListOfFocusableItem(), [material_select$46template._ViewMaterialSelectComponent5])))();
  let _ViewMaterialSelectComponent3ToListOfFocusableItem = () => (_ViewMaterialSelectComponent3ToListOfFocusableItem = dart.constFn(dart.fnType(ListOfFocusableItem(), [material_select$46template._ViewMaterialSelectComponent3])))();
  let _ViewMaterialSelectComponent2ToListOfFocusableItem = () => (_ViewMaterialSelectComponent2ToListOfFocusableItem = dart.constFn(dart.fnType(ListOfFocusableItem(), [material_select$46template._ViewMaterialSelectComponent2])))();
  let _ViewMaterialSelectComponent1ToListOfFocusableItem = () => (_ViewMaterialSelectComponent1ToListOfFocusableItem = dart.constFn(dart.fnType(ListOfFocusableItem(), [material_select$46template._ViewMaterialSelectComponent1])))();
  let intAnddynamicToObject = () => (intAnddynamicToObject = dart.constFn(dart.fnType(core.Object, [core.int, dart.dynamic])))();
  let ComponentFactoryOfMaterialSelectComponent = () => (ComponentFactoryOfMaterialSelectComponent = dart.constFn(component_factory.ComponentFactory$(material_select.MaterialSelectComponent)))();
  let InjectorToHostViewOfMaterialSelectComponentOfT = () => (InjectorToHostViewOfMaterialSelectComponentOfT = dart.constFn(dart.gFnType(T => [host_view.HostView$(material_select.MaterialSelectComponent$(T)), [injector.Injector]])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], dart.dynamic);
    },
    get C3() {
      return C3 = dart.fn(material_select$46template.viewFactory_MaterialSelectComponentHost0, InjectorToHostViewOfMaterialSelectComponentOfT());
    },
    get C2() {
      return C2 = dart.const(dart.gbind(C3 || CT.C3, dart.dynamic));
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ComponentFactoryOfMaterialSelectComponent().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-select"
      });
    }
  });
  const _query_FocusableItem_0_0_isDirty = dart.privateName(material_select$46template, "_query_FocusableItem_0_0_isDirty");
  const _compView_0 = dart.privateName(material_select$46template, "_compView_0");
  const _FocusListDirective_0_5 = dart.privateName(material_select$46template, "_FocusListDirective_0_5");
  const _MaterialListComponent_0_6 = dart.privateName(material_select$46template, "_MaterialListComponent_0_6");
  const _appEl_1 = dart.privateName(material_select$46template, "_appEl_1");
  const _NgIf_1_9 = dart.privateName(material_select$46template, "_NgIf_1_9");
  const _expr_0 = dart.privateName(material_select$46template, "_expr_0");
  const _expr_2 = dart.privateName(material_select$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_select$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_select$46template, "_expr_4");
  const _el_0 = dart.privateName(material_select$46template, "_el_0");
  const _FocusItemDirective_0_5 = dart.privateName(material_select$46template, "_FocusItemDirective_0_5");
  const _is_ViewMaterialSelectComponent0_default = Symbol('_is_ViewMaterialSelectComponent0_default');
  material_select$46template.ViewMaterialSelectComponent0$ = dart.generic(T => {
    class ViewMaterialSelectComponent0 extends component_view.ComponentView$(material_select.MaterialSelectComponent$(T)) {
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_select/material_select.dart" : null;
      }
      build() {
        let t0;
        let parentRenderNode = this.initViewRoot();
        this[_compView_0] = new material_list$46template.ViewMaterialListComponent0.new(this, 0);
        this[_el_0] = this[_compView_0].rootElement;
        parentRenderNode[$append](this[_el_0]);
        dom_helpers.setAttribute(this[_el_0], "focusList", "");
        dom_helpers.setAttribute(this[_el_0], "role", "none");
        this.addShimC(html.HtmlElement._check(this[_el_0]));
        this[_FocusListDirective_0_5] = new focus_list$46template.FocusListDirectiveNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(focus_list.FocusListDirective, dart.wrapType(focus_list.FocusListDirective), dart.fn(() => new focus_list.FocusListDirective.new(ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), "none", null), VoidToFocusListDirective())) : new focus_list.FocusListDirective.new(ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(ng_zone.NgZone), this.parentIndex)), "none", null));
        this[_MaterialListComponent_0_6] = new material_list.MaterialListComponent.new();
        let _anchor_1 = dom_helpers.createAnchor();
        this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select$46template.viewFactory_MaterialSelectComponent1(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        this[_compView_0].createAndProject(this[_MaterialListComponent_0_6], JSArrayOfObject().of([(t0 = [this.projectedNodes[$_get](0)], t0[$addAll]([this[_appEl_1]]), t0)]));
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.firstCheck;
        let currVal_0 = _ctx.autoFocusIndex;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "autoFocusIndex", ""))) {
          this[_FocusListDirective_0_5].instance.autoFocusIndex = currVal_0;
          this[_expr_0] = currVal_0;
        }
        changed = false;
        if (dart.test(firstCheck)) {
          this[_MaterialListComponent_0_6].role = "none";
          changed = true;
        }
        let currVal_2 = _ctx.width;
        if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "width", ""))) {
          this[_MaterialListComponent_0_6].width = currVal_2;
          changed = true;
          this[_expr_2] = currVal_2;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_NgIf_1_9].ngIf = _ctx.options != null;
        this[_appEl_1].detectChangesInNestedViews();
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          if (dart.test(this[_query_FocusableItem_0_0_isDirty])) {
            this[_FocusListDirective_0_5].instance.listItems = this[_appEl_1].mapNestedViews(focus.FocusableItem, material_select$46template._ViewMaterialSelectComponent1, dart.fn(nestedView => nestedView[_appEl_1].mapNestedViews(focus.FocusableItem, material_select$46template._ViewMaterialSelectComponent2, dart.fn(nestedView => nestedView[_appEl_1].mapNestedViews(focus.FocusableItem, material_select$46template._ViewMaterialSelectComponent3, dart.fn(nestedView => nestedView[_appEl_1].mapNestedViews(focus.FocusableItem, material_select$46template._ViewMaterialSelectComponent5, dart.fn(nestedView => JSArrayOfFocusableItem().of([nestedView[_FocusItemDirective_0_5].instance]), _ViewMaterialSelectComponent5ToListOfFocusableItem())), _ViewMaterialSelectComponent3ToListOfFocusableItem())), _ViewMaterialSelectComponent2ToListOfFocusableItem())), _ViewMaterialSelectComponent1ToListOfFocusableItem()));
            this[_query_FocusableItem_0_0_isDirty] = false;
          }
        }
        this[_FocusListDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
        this[_compView_0].destroyInternalState();
        this[_FocusListDirective_0_5].instance.ngOnDestroy();
      }
      detectHostChanges(firstCheck) {
        let t0;
        let _ctx = this.ctx;
        let currVal_3 = _ctx.isMultiSelect;
        if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, null, null))) {
          dom_helpers.updateAttribute(this.rootElement, "aria-multiselectable", (t0 = currVal_3, t0 == null ? null : dart.toString(t0)));
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = _ctx.disabledStr;
        if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, null, null))) {
          dom_helpers.updateAttribute(this.rootElement, "aria-disabled", currVal_4);
          this[_expr_4] = currVal_4;
        }
      }
      initComponentStyles() {
        let styles = material_select$46template.ViewMaterialSelectComponent0._componentStyles;
        if (styles == null) {
          material_select$46template.ViewMaterialSelectComponent0._componentStyles = styles = material_select$46template.ViewMaterialSelectComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_select$46template.styles$MaterialSelectComponent, material_select$46template.ViewMaterialSelectComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialSelectComponent0.new = function(parentView, parentIndex) {
      this[_query_FocusableItem_0_0_isDirty] = true;
      this[_compView_0] = null;
      this[_FocusListDirective_0_5] = null;
      this[_MaterialListComponent_0_6] = null;
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_expr_0] = null;
      this[_expr_2] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_el_0] = null;
      ViewMaterialSelectComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
      this.initComponentStyles();
      this.rootElement = html.HtmlElement._check(html.document[$createElement]("material-select"));
      dom_helpers.updateAttribute(this.rootElement, "role", "listbox");
    }).prototype = ViewMaterialSelectComponent0.prototype;
    dart.addTypeTests(ViewMaterialSelectComponent0);
    ViewMaterialSelectComponent0.prototype[_is_ViewMaterialSelectComponent0_default] = true;
    dart.setMethodSignature(ViewMaterialSelectComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialSelectComponent0.__proto__),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(ViewMaterialSelectComponent0, "package:angular_components/material_select/material_select.template.dart");
    dart.setFieldSignature(ViewMaterialSelectComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialSelectComponent0.__proto__),
      [_query_FocusableItem_0_0_isDirty]: dart.fieldType(core.bool),
      [_compView_0]: dart.fieldType(material_list$46template.ViewMaterialListComponent0),
      [_FocusListDirective_0_5]: dart.fieldType(focus_list$46template.FocusListDirectiveNgCd),
      [_MaterialListComponent_0_6]: dart.fieldType(material_list.MaterialListComponent),
      [_appEl_1]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_1_9]: dart.fieldType(ng_if.NgIf),
      [_expr_0]: dart.fieldType(core.int),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_expr_3]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(html.Element)
    }));
    return ViewMaterialSelectComponent0;
  });
  material_select$46template.ViewMaterialSelectComponent0 = material_select$46template.ViewMaterialSelectComponent0$();
  dart.defineLazy(material_select$46template.ViewMaterialSelectComponent0, {
    /*material_select$46template.ViewMaterialSelectComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.addTypeTests(material_select$46template.ViewMaterialSelectComponent0, _is_ViewMaterialSelectComponent0_default);
  const _NgFor_1_9 = dart.privateName(material_select$46template, "_NgFor_1_9");
  const _expr_1 = dart.privateName(material_select$46template, "_expr_1");
  const _is__ViewMaterialSelectComponent1_default = Symbol('_is__ViewMaterialSelectComponent1_default');
  material_select$46template._ViewMaterialSelectComponent1$ = dart.generic(T => {
    class _ViewMaterialSelectComponent1 extends embedded_view.EmbeddedView$(material_select.MaterialSelectComponent$(T)) {
      build() {
        let doc = html.document;
        this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
        this.updateChildClass(this[_el_0], "options-wrapper");
        dom_helpers.setAttribute(this[_el_0], "role", "group");
        this.addShimC(this[_el_0]);
        let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
        this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select$46template.viewFactory_MaterialSelectComponent2(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
        this.initRootNode(this[_el_0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.firstCheck;
        if (dart.test(firstCheck)) {
          if (_ctx.trackByIndexFn != null) {
            this[_NgFor_1_9].ngForTrackBy = intAnddynamicToObject()._check(_ctx.trackByIndexFn);
          }
        }
        let currVal_2 = _ctx.options.optionGroups;
        if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "options.optionGroups", ""))) {
          this[_NgFor_1_9].ngForOf = currVal_2;
          this[_expr_2] = currVal_2;
        }
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          this[_NgFor_1_9].ngDoCheck();
        }
        this[_appEl_1].detectChangesInNestedViews();
        let currVal_0 = _ctx.ariaLabelledBy;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "ariaLabelledBy", ""))) {
          dom_helpers.updateAttribute(this[_el_0], "aria-labelledby", currVal_0);
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.ariaDescribedBy;
        if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "ariaDescribedBy", ""))) {
          dom_helpers.updateAttribute(this[_el_0], "aria-describedby", currVal_1);
          this[_expr_1] = currVal_1;
        }
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
      }
    }
    (_ViewMaterialSelectComponent1.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgFor_1_9] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_el_0] = null;
      _ViewMaterialSelectComponent1.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialSelectComponent1.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent1);
    _ViewMaterialSelectComponent1.prototype[_is__ViewMaterialSelectComponent1_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent1.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectComponent1, "package:angular_components/material_select/material_select.template.dart");
    dart.setFieldSignature(_ViewMaterialSelectComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent1.__proto__),
      [_appEl_1]: dart.fieldType(view_container.ViewContainer),
      [_NgFor_1_9]: dart.fieldType(ng_for.NgFor),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(html.DivElement)
    }));
    return _ViewMaterialSelectComponent1;
  });
  material_select$46template._ViewMaterialSelectComponent1 = material_select$46template._ViewMaterialSelectComponent1$();
  dart.addTypeTests(material_select$46template._ViewMaterialSelectComponent1, _is__ViewMaterialSelectComponent1_default);
  const _is__ViewMaterialSelectComponent2_default = Symbol('_is__ViewMaterialSelectComponent2_default');
  material_select$46template._ViewMaterialSelectComponent2$ = dart.generic(T => {
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(selection_options.OptionGroup$(T)))();
    class _ViewMaterialSelectComponent2 extends embedded_view.EmbeddedView$(material_select.MaterialSelectComponent$(T)) {
      build() {
        let doc = html.document;
        this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
        dom_helpers.setAttribute(this[_el_0], "group", "");
        this.addShimC(this[_el_0]);
        let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
        this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select$46template.viewFactory_MaterialSelectComponent3(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        this.initRootNode(this[_el_0]);
      }
      detectChangesInternal() {
        let local_group = optimizations.unsafeCast(OptionGroupOfT(), this.locals[$_get]("$implicit"));
        this[_NgIf_1_9].ngIf = local_group.isNotEmpty;
        this[_appEl_1].detectChangesInNestedViews();
        let currVal_0 = local_group.isEmpty;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "group.isEmpty", ""))) {
          dom_helpers.updateClassBinding(this[_el_0], "empty", currVal_0);
          this[_expr_0] = currVal_0;
        }
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
      }
    }
    (_ViewMaterialSelectComponent2.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_expr_0] = null;
      this[_el_0] = null;
      _ViewMaterialSelectComponent2.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialSelectComponent2.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent2);
    _ViewMaterialSelectComponent2.prototype[_is__ViewMaterialSelectComponent2_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent2.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectComponent2, "package:angular_components/material_select/material_select.template.dart");
    dart.setFieldSignature(_ViewMaterialSelectComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent2.__proto__),
      [_appEl_1]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_1_9]: dart.fieldType(ng_if.NgIf),
      [_expr_0]: dart.fieldType(core.bool),
      [_el_0]: dart.fieldType(html.DivElement)
    }));
    return _ViewMaterialSelectComponent2;
  });
  material_select$46template._ViewMaterialSelectComponent2 = material_select$46template._ViewMaterialSelectComponent2$();
  dart.addTypeTests(material_select$46template._ViewMaterialSelectComponent2, _is__ViewMaterialSelectComponent2_default);
  const _appEl_0 = dart.privateName(material_select$46template, "_appEl_0");
  const _NgIf_0_9 = dart.privateName(material_select$46template, "_NgIf_0_9");
  const _is__ViewMaterialSelectComponent3_default = Symbol('_is__ViewMaterialSelectComponent3_default');
  material_select$46template._ViewMaterialSelectComponent3$ = dart.generic(T => {
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(selection_options.OptionGroup$(T)))();
    class _ViewMaterialSelectComponent3 extends embedded_view.EmbeddedView$(material_select.MaterialSelectComponent$(T)) {
      build() {
        let _anchor_0 = dom_helpers.createAnchor();
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_select$46template.viewFactory_MaterialSelectComponent4(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let _anchor_1 = dom_helpers.createAnchor();
        this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select$46template.viewFactory_MaterialSelectComponent5(T, parentView, parentIndex), RenderViewAndintToEmbeddedViewOfvoid()));
        this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
        this.initRootNodesAndSubscriptions(JSArrayOfObject().of([this[_appEl_0], this[_appEl_1]]), null);
      }
      detectChangesInternal() {
        let local_group = optimizations.unsafeCast(OptionGroupOfT(), optimizations.unsafeCast(material_select$46template._ViewMaterialSelectComponent2, this.parentView).locals[$_get]("$implicit"));
        this[_NgIf_0_9].ngIf = local_group.hasLabel;
        let currVal_0 = local_group;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "group", ""))) {
          this[_NgFor_1_9].ngForOf = currVal_0;
          this[_expr_0] = currVal_0;
        }
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          this[_NgFor_1_9].ngDoCheck();
        }
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_1].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_appEl_1].destroyNestedViews();
      }
    }
    (_ViewMaterialSelectComponent3.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_1] = null;
      this[_NgFor_1_9] = null;
      this[_expr_0] = null;
      _ViewMaterialSelectComponent3.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialSelectComponent3.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent3);
    _ViewMaterialSelectComponent3.prototype[_is__ViewMaterialSelectComponent3_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent3.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectComponent3, "package:angular_components/material_select/material_select.template.dart");
    dart.setFieldSignature(_ViewMaterialSelectComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent3.__proto__),
      [_appEl_0]: dart.fieldType(view_container.ViewContainer),
      [_NgIf_0_9]: dart.fieldType(ng_if.NgIf),
      [_appEl_1]: dart.fieldType(view_container.ViewContainer),
      [_NgFor_1_9]: dart.fieldType(ng_for.NgFor),
      [_expr_0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialSelectComponent3;
  });
  material_select$46template._ViewMaterialSelectComponent3 = material_select$46template._ViewMaterialSelectComponent3$();
  dart.addTypeTests(material_select$46template._ViewMaterialSelectComponent3, _is__ViewMaterialSelectComponent3_default);
  const _textBinding_1 = dart.privateName(material_select$46template, "_textBinding_1");
  const _is__ViewMaterialSelectComponent4_default = Symbol('_is__ViewMaterialSelectComponent4_default');
  material_select$46template._ViewMaterialSelectComponent4$ = dart.generic(T => {
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(selection_options.OptionGroup$(T)))();
    class _ViewMaterialSelectComponent4 extends embedded_view.EmbeddedView$(material_select.MaterialSelectComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        dom_helpers.setAttribute(_el_0, "label", "");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1].element);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let local_group = optimizations.unsafeCast(OptionGroupOfT(), optimizations.unsafeCast(material_select$46template._ViewMaterialSelectComponent2, this.parentView.parentView).locals[$_get]("$implicit"));
        this[_textBinding_1].updateText(interpolate.interpolateString0(local_group.uiDisplayName));
      }
    }
    (_ViewMaterialSelectComponent4.new = function(parentView, parentIndex) {
      this[_textBinding_1] = new text_binding.TextBinding.new();
      _ViewMaterialSelectComponent4.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialSelectComponent4.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent4);
    _ViewMaterialSelectComponent4.prototype[_is__ViewMaterialSelectComponent4_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectComponent4, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent4.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectComponent4, "package:angular_components/material_select/material_select.template.dart");
    dart.setFieldSignature(_ViewMaterialSelectComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent4.__proto__),
      [_textBinding_1]: dart.finalFieldType(text_binding.TextBinding)
    }));
    return _ViewMaterialSelectComponent4;
  });
  material_select$46template._ViewMaterialSelectComponent4 = material_select$46template._ViewMaterialSelectComponent4$();
  dart.addTypeTests(material_select$46template._ViewMaterialSelectComponent4, _is__ViewMaterialSelectComponent4_default);
  const _MaterialSelectItemComponent_0_6 = dart.privateName(material_select$46template, "_MaterialSelectItemComponent_0_6");
  const _expr_5 = dart.privateName(material_select$46template, "_expr_5");
  let C0;
  const _is__ViewMaterialSelectComponent5_default = Symbol('_is__ViewMaterialSelectComponent5_default');
  material_select$46template._ViewMaterialSelectComponent5$ = dart.generic(T => {
    let ViewMaterialSelectItemComponent0OfT = () => (ViewMaterialSelectItemComponent0OfT = dart.constFn(material_select_item$46template.ViewMaterialSelectItemComponent0$(T)))();
    let MaterialSelectItemComponentOfT = () => (MaterialSelectItemComponentOfT = dart.constFn(material_select_item.MaterialSelectItemComponent$(T)))();
    let VoidToMaterialSelectItemComponentOfT = () => (VoidToMaterialSelectItemComponentOfT = dart.constFn(dart.fnType(MaterialSelectItemComponentOfT(), [])))();
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    let TToComponentFactory = () => (TToComponentFactory = dart.constFn(dart.fnType(component_factory.ComponentFactory, [T])))();
    class _ViewMaterialSelectComponent5 extends embedded_view.EmbeddedView$(material_select.MaterialSelectComponent$(T)) {
      build() {
        this[_compView_0] = new (ViewMaterialSelectItemComponent0OfT()).new(this, 0);
        this[_el_0] = this[_compView_0].rootElement;
        dom_helpers.setAttribute(this[_el_0], "focusItem", "");
        this.addShimC(html.HtmlElement._check(this[_el_0]));
        this[_FocusItemDirective_0_5] = new focus_item$46template.FocusItemDirectiveNgCd.new(new focus_item.FocusItemDirective.new(html.HtmlElement._check(this[_el_0]), this[_compView_0], null));
        this[_MaterialSelectItemComponent_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectItemComponentOfT(), dart.wrapType(material_select_item.MaterialSelectItemComponent), dart.fn(() => new (MaterialSelectItemComponentOfT()).new(html.HtmlElement._check(this[_el_0]), material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentView.parentView.parentView.parentIndex)), activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.parentIndex)), this[_compView_0], null), VoidToMaterialSelectItemComponentOfT())) : new (MaterialSelectItemComponentOfT()).new(html.HtmlElement._check(this[_el_0]), material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(material_dropdown_base.DropdownHandle), this.parentView.parentView.parentView.parentView.parentIndex)), activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.parentIndex)), this[_compView_0], null);
        this[_compView_0].createAndProject(this[_MaterialSelectItemComponent_0_6], JSArrayOfObject().of([C0 || CT.C0]));
        this[_el_0][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_FocusItemDirective_0_5].instance, 'keydown')));
        this.initRootNode(this[_el_0]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (0 === nodeIndex) {
          if (token === dart.wrapType(focus.FocusableItem)) {
            return this[_FocusItemDirective_0_5].instance;
          }
          if (token === dart.wrapType(selection_container.SelectionItem) || token === dart.wrapType(has_disabled.HasDisabled) || token === dart.wrapType(has_renderer.HasRenderer)) {
            return this[_MaterialSelectItemComponent_0_6];
          }
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.firstCheck;
        let local_item = optimizations.unsafeCast(T, this.locals[$_get]("$implicit"));
        let currVal_0 = dart.test(_ctx.disabled) || dart.test(_ctx.isOptionDisabled(local_item));
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "disabled || isOptionDisabled(item)", ""))) {
          this[_MaterialSelectItemComponent_0_6].disabled = currVal_0;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = local_item;
        if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "item", ""))) {
          this[_MaterialSelectItemComponent_0_6].value = currVal_1;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = TToString()._check(_ctx.itemRenderer);
        if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "itemRenderer", ""))) {
          this[_MaterialSelectItemComponent_0_6].itemRenderer = currVal_2;
          this[_expr_2] = currVal_2;
        }
        let currVal_3 = _ctx.componentRenderer;
        if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "componentRenderer", ""))) {
          this[_MaterialSelectItemComponent_0_6].componentRenderer = currVal_3;
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = TToComponentFactory()._check(_ctx.factoryRenderer);
        if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "factoryRenderer", ""))) {
          this[_MaterialSelectItemComponent_0_6].factoryRenderer = currVal_4;
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.selection;
        if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "selection", ""))) {
          this[_MaterialSelectItemComponent_0_6].selection = currVal_5;
          this[_expr_5] = currVal_5;
        }
        this[_FocusItemDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      dirtyParentQueriesInternal() {
        optimizations.unsafeCast(material_select$46template.ViewMaterialSelectComponent0, this.parentView.parentView.parentView.parentView)[_query_FocusableItem_0_0_isDirty] = true;
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
        this[_MaterialSelectItemComponent_0_6].ngOnDestroy();
      }
    }
    (_ViewMaterialSelectComponent5.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_FocusItemDirective_0_5] = null;
      this[_MaterialSelectItemComponent_0_6] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      this[_el_0] = null;
      _ViewMaterialSelectComponent5.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialSelectComponent5.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent5);
    _ViewMaterialSelectComponent5.prototype[_is__ViewMaterialSelectComponent5_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectComponent5, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent5.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialSelectComponent5, "package:angular_components/material_select/material_select.template.dart");
    dart.setFieldSignature(_ViewMaterialSelectComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent5.__proto__),
      [_compView_0]: dart.fieldType(material_select_item$46template.ViewMaterialSelectItemComponent0$(T)),
      [_FocusItemDirective_0_5]: dart.fieldType(focus_item$46template.FocusItemDirectiveNgCd),
      [_MaterialSelectItemComponent_0_6]: dart.fieldType(material_select_item.MaterialSelectItemComponent$(T)),
      [_expr_0]: dart.fieldType(core.bool),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_expr_3]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(html.Element)
    }));
    return _ViewMaterialSelectComponent5;
  });
  material_select$46template._ViewMaterialSelectComponent5 = material_select$46template._ViewMaterialSelectComponent5$();
  dart.addTypeTests(material_select$46template._ViewMaterialSelectComponent5, _is__ViewMaterialSelectComponent5_default);
  const _is__ViewMaterialSelectComponentHost0_default = Symbol('_is__ViewMaterialSelectComponentHost0_default');
  material_select$46template._ViewMaterialSelectComponentHost0$ = dart.generic(T => {
    let ViewMaterialSelectComponent0OfT = () => (ViewMaterialSelectComponent0OfT = dart.constFn(material_select$46template.ViewMaterialSelectComponent0$(T)))();
    let MaterialSelectComponentOfT = () => (MaterialSelectComponentOfT = dart.constFn(material_select.MaterialSelectComponent$(T)))();
    let SelectionItemOfT = () => (SelectionItemOfT = dart.constFn(selection_container.SelectionItem$(T)))();
    let JSArrayOfSelectionItemOfT = () => (JSArrayOfSelectionItemOfT = dart.constFn(_interceptors.JSArray$(SelectionItemOfT())))();
    class _ViewMaterialSelectComponentHost0 extends host_view.HostView$(material_select.MaterialSelectComponent$(T)) {
      build() {
        this.componentView = new (ViewMaterialSelectComponent0OfT()).new(this, 0);
        let _el_0 = this.componentView.rootElement;
        this.component = new (MaterialSelectComponentOfT()).new();
        this.component.selectItems = JSArrayOfSelectionItemOfT().of([]);
        this.initRootNode(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(has_disabled.HasDisabled) || token === dart.wrapType(has_renderer.HasRenderer) || token === dart.wrapType(selection_container.SelectionContainer)) && 0 === nodeIndex) {
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
    }
    (_ViewMaterialSelectComponentHost0.new = function(injector) {
      _ViewMaterialSelectComponentHost0.__proto__.new.call(this, injector);
      ;
    }).prototype = _ViewMaterialSelectComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponentHost0);
    _ViewMaterialSelectComponentHost0.prototype[_is__ViewMaterialSelectComponentHost0_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponentHost0.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialSelectComponentHost0, "package:angular_components/material_select/material_select.template.dart");
    return _ViewMaterialSelectComponentHost0;
  });
  material_select$46template._ViewMaterialSelectComponentHost0 = material_select$46template._ViewMaterialSelectComponentHost0$();
  dart.addTypeTests(material_select$46template._ViewMaterialSelectComponentHost0, _is__ViewMaterialSelectComponentHost0_default);
  material_select$46template.viewFactory_MaterialSelectComponent1 = function viewFactory_MaterialSelectComponent1(T, parentView, parentIndex) {
    return new (material_select$46template._ViewMaterialSelectComponent1$(T)).new(parentView, parentIndex);
  };
  material_select$46template.viewFactory_MaterialSelectComponent2 = function viewFactory_MaterialSelectComponent2(T, parentView, parentIndex) {
    return new (material_select$46template._ViewMaterialSelectComponent2$(T)).new(parentView, parentIndex);
  };
  material_select$46template.viewFactory_MaterialSelectComponent3 = function viewFactory_MaterialSelectComponent3(T, parentView, parentIndex) {
    return new (material_select$46template._ViewMaterialSelectComponent3$(T)).new(parentView, parentIndex);
  };
  material_select$46template.viewFactory_MaterialSelectComponent4 = function viewFactory_MaterialSelectComponent4(T, parentView, parentIndex) {
    return new (material_select$46template._ViewMaterialSelectComponent4$(T)).new(parentView, parentIndex);
  };
  material_select$46template.viewFactory_MaterialSelectComponent5 = function viewFactory_MaterialSelectComponent5(T, parentView, parentIndex) {
    return new (material_select$46template._ViewMaterialSelectComponent5$(T)).new(parentView, parentIndex);
  };
  material_select$46template.viewFactory_MaterialSelectComponentHost0 = function viewFactory_MaterialSelectComponentHost0(T, injector) {
    return new (material_select$46template._ViewMaterialSelectComponentHost0$(T)).new(injector);
  };
  material_select$46template.initReflector = function initReflector() {
    if (dart.test(material_select$46template._visited)) {
      return;
    }
    material_select$46template._visited = true;
    reflector.registerComponent(dart.wrapType(material_select.MaterialSelectComponent), material_select$46template.MaterialSelectComponentNgFactory);
    material_select_base$46template.initReflector();
    material_select_item$46template.initReflector();
    angular$46template.initReflector();
    focus_item$46template.initReflector();
    focus_list$46template.initReflector();
    has_disabled$46template.initReflector();
    material_list$46template.initReflector();
    select$46template.initReflector();
    selection_container$46template.initReflector();
    selection_model$46template.initReflector();
    selection_options$46template.initReflector();
    has_factory$46template.initReflector();
    has_renderer$46template.initReflector();
    template_support$46template.initReflector();
  };
  dart.copyProperties(material_select$46template, {
    get MaterialSelectComponentNgFactory() {
      return material_select$46template._MaterialSelectComponentNgFactory;
    }
  });
  let C3;
  let C2;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C1;
  dart.defineLazy(material_select$46template, {
    /*material_select$46template.styles$MaterialSelectComponent*/get styles$MaterialSelectComponent() {
      return [material_select$46scss$46css$46shim.styles];
    },
    /*material_select$46template._MaterialSelectComponentNgFactory*/get _MaterialSelectComponentNgFactory() {
      return C1 || CT.C1;
    },
    /*material_select$46template.styles$MaterialSelectComponentHost*/get styles$MaterialSelectComponentHost() {
      return C0 || CT.C0;
    },
    /*material_select$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_select/material_select.template", {
    "package:angular_components/material_select/material_select.template.dart": material_select$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_select.template.dart"],"names":[],"mappings":"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","file":"material_select.template.ddc.js"}');
  // Exports:
  return {
    material_select__material_select$46template: material_select$46template
  };
});

//# sourceMappingURL=material_select.template.ddc.js.map

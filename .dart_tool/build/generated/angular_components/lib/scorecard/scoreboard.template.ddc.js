define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/scorecard/scorecard_bar', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/scorecard/scoreboard', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/scorecard/scorecard', 'packages/angular/angular.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/utils/browser/dom_service/angular_2.template', 'packages/angular_components/utils/color/material_chart_colors.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/scorecard/scorecard.template', 'packages/angular_components/scorecard/scorecard_bar.template', 'packages/angular_components/scorecard/scoreboard.scss.css.shim'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__angular_components__scorecard__scorecard_bar, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__scorecard__scoreboard, packages__angular_components__material_button__material_button$46template, packages__angular_components__theme__dark_theme, packages__angular_components__material_button__material_button, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular_components__button_decorator__button_decorator, packages__angular_components__interfaces__has_disabled, packages__angular_components__scorecard__scorecard, packages__angular__angular$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__utils__browser__dom_service__angular_2$46template, packages__angular_components__utils__color__material_chart_colors$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__scorecard__scorecard$46template, packages__angular_components__scorecard__scorecard_bar$46template, packages__angular_components__scorecard__scoreboard$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
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
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const scorecard_bar = packages__angular_components__scorecard__scorecard_bar.scorecard__scorecard_bar;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const scoreboard = packages__angular_components__scorecard__scoreboard.scorecard__scoreboard;
  const material_button$46template = packages__angular_components__material_button__material_button$46template.material_button__material_button$46template;
  const dark_theme = packages__angular_components__theme__dark_theme.theme__dark_theme;
  const material_button = packages__angular_components__material_button__material_button.material_button__material_button;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const scorecard = packages__angular_components__scorecard__scorecard.scorecard__scorecard;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const angular_2$46template = packages__angular_components__utils__browser__dom_service__angular_2$46template.utils__browser__dom_service__angular_2$46template;
  const material_chart_colors$46template = packages__angular_components__utils__color__material_chart_colors$46template.utils__color__material_chart_colors$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const scorecard$46template = packages__angular_components__scorecard__scorecard$46template.scorecard__scorecard$46template;
  const scorecard_bar$46template = packages__angular_components__scorecard__scorecard_bar$46template.scorecard__scorecard_bar$46template;
  const scoreboard$46scss$46css$46shim = packages__angular_components__scorecard__scoreboard$46scss$46css$46shim.scorecard__scoreboard$46scss$46css$46shim;
  const scoreboard$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  let EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  let RenderViewAndintToEmbeddedViewOfvoid = () => (RenderViewAndintToEmbeddedViewOfvoid = dart.constFn(dart.fnType(EmbeddedViewOfvoid(), [render_view.RenderView, core.int])))();
  let VoidToScorecardBarDirective = () => (VoidToScorecardBarDirective = dart.constFn(dart.fnType(scorecard_bar.ScorecardBarDirective, [])))();
  let VoidToAcxDarkTheme = () => (VoidToAcxDarkTheme = dart.constFn(dart.fnType(dark_theme.AcxDarkTheme, [])))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let VoidToScoreboardComponent = () => (VoidToScoreboardComponent = dart.constFn(dart.fnType(scoreboard.ScoreboardComponent, [])))();
  let JSArrayOfScorecardComponent = () => (JSArrayOfScorecardComponent = dart.constFn(_interceptors.JSArray$(scorecard.ScorecardComponent)))();
  let ComponentFactoryOfScoreboardComponent = () => (ComponentFactoryOfScoreboardComponent = dart.constFn(component_factory.ComponentFactory$(scoreboard.ScoreboardComponent)))();
  let HostViewOfScoreboardComponent = () => (HostViewOfScoreboardComponent = dart.constFn(host_view.HostView$(scoreboard.ScoreboardComponent)))();
  let InjectorToHostViewOfScoreboardComponent = () => (InjectorToHostViewOfScoreboardComponent = dart.constFn(dart.fnType(HostViewOfScoreboardComponent(), [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(scoreboard$46template.viewFactory_ScoreboardComponent1, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "isRtl"
      });
    },
    get C2() {
      return C2 = dart.fn(scoreboard$46template.viewFactory_ScoreboardComponent2, RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "acxDarkTheme"
      });
    },
    get C5() {
      return C5 = dart.fn(scoreboard$46template.viewFactory_ScoreboardComponentHost0, InjectorToHostViewOfScoreboardComponent());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ComponentFactoryOfScoreboardComponent().prototype,
        [ComponentFactory__viewFactory]: C5 || CT.C5,
        [ComponentFactory_selector]: "acx-scoreboard"
      });
    },
    get C6() {
      return C6 = dart.constList([], dart.dynamic);
    }
  });
  const _appEl_1 = dart.privateName(scoreboard$46template, "_appEl_1");
  const _NgIf_1_9 = dart.privateName(scoreboard$46template, "_NgIf_1_9");
  const _ScorecardBarDirective_2_5 = dart.privateName(scoreboard$46template, "_ScorecardBarDirective_2_5");
  const _appEl_3 = dart.privateName(scoreboard$46template, "_appEl_3");
  const _NgIf_3_9 = dart.privateName(scoreboard$46template, "_NgIf_3_9");
  const _expr_0 = dart.privateName(scoreboard$46template, "_expr_0");
  const _expr_1 = dart.privateName(scoreboard$46template, "_expr_1");
  const _expr_2 = dart.privateName(scoreboard$46template, "_expr_2");
  const _el_0 = dart.privateName(scoreboard$46template, "_el_0");
  let C0;
  const OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  let C1;
  let C2;
  scoreboard$46template.ViewScoreboardComponent0 = class ViewScoreboardComponent0 extends component_view.ComponentView$(scoreboard.ScoreboardComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/scorecard/scoreboard.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "acx-scoreboard");
      this.addShimC(this[_el_0]);
      let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _el_2 = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_2, "scorecard-bar");
      dom_helpers.setAttribute(_el_2, "scorecardBar", "");
      this.addShimC(_el_2);
      this[_ScorecardBarDirective_2_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(scorecard_bar.ScorecardBarDirective, dart.wrapType(scorecard_bar.ScorecardBarDirective), dart.fn(() => new scorecard_bar.ScorecardBarDirective.new(dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), _el_2, core.bool._check(this.parentView.injectorGetOptional(C1 || CT.C1, this.parentIndex))), VoidToScorecardBarDirective())) : new scorecard_bar.ScorecardBarDirective.new(dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), _el_2, core.bool._check(this.parentView.injectorGetOptional(C1 || CT.C1, this.parentIndex)));
      this.project(_el_2, 0);
      let _anchor_3 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_3] = new view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C2 || CT.C2);
      this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      _ctx.scorecardBar = this[_ScorecardBarDirective_2_5];
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      this[_NgIf_1_9].ngIf = _ctx.isScrollable;
      let currVal_2 = _ctx.isVertical;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "isVertical", ""))) {
        this[_ScorecardBarDirective_2_5].isVertical = currVal_2;
        this[_expr_2] = currVal_2;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_ScorecardBarDirective_2_5].ngOnInit();
      }
      this[_NgIf_3_9].ngIf = _ctx.isScrollable;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      let currVal_0 = !dart.test(_ctx.isVertical);
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "!isVertical", ""))) {
        dom_helpers.updateClassBinding(this[_el_0], "acx-scoreboard-horizontal", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isVertical;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "isVertical", ""))) {
        dom_helpers.updateClassBinding(this[_el_0], "acx-scoreboard-vertical", currVal_1);
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_ScorecardBarDirective_2_5].ngAfterViewChecked();
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
      this[_ScorecardBarDirective_2_5].ngOnDestroy();
    }
    initComponentStyles() {
      let styles = scoreboard$46template.ViewScoreboardComponent0._componentStyles;
      if (styles == null) {
        scoreboard$46template.ViewScoreboardComponent0._componentStyles = styles = scoreboard$46template.ViewScoreboardComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(scoreboard$46template.styles$ScoreboardComponent, scoreboard$46template.ViewScoreboardComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (scoreboard$46template.ViewScoreboardComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_ScorecardBarDirective_2_5] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    scoreboard$46template.ViewScoreboardComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = html.HtmlElement._check(html.document[$createElement]("acx-scoreboard"));
  }).prototype = scoreboard$46template.ViewScoreboardComponent0.prototype;
  dart.addTypeTests(scoreboard$46template.ViewScoreboardComponent0);
  dart.setMethodSignature(scoreboard$46template.ViewScoreboardComponent0, () => ({
    __proto__: dart.getMethods(scoreboard$46template.ViewScoreboardComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(scoreboard$46template.ViewScoreboardComponent0, "package:angular_components/scorecard/scoreboard.template.dart");
  dart.setFieldSignature(scoreboard$46template.ViewScoreboardComponent0, () => ({
    __proto__: dart.getFields(scoreboard$46template.ViewScoreboardComponent0.__proto__),
    [_appEl_1]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(ng_if.NgIf),
    [_ScorecardBarDirective_2_5]: dart.fieldType(scorecard_bar.ScorecardBarDirective),
    [_appEl_3]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(scoreboard$46template.ViewScoreboardComponent0, {
    /*scoreboard$46template.ViewScoreboardComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _compView_0 = dart.privateName(scoreboard$46template, "_compView_0");
  const _AcxDarkTheme_0_5 = dart.privateName(scoreboard$46template, "_AcxDarkTheme_0_5");
  const _MaterialButtonComponent_0_6 = dart.privateName(scoreboard$46template, "_MaterialButtonComponent_0_6");
  const _compView_1 = dart.privateName(scoreboard$46template, "_compView_1");
  const _MaterialIconComponent_1_5 = dart.privateName(scoreboard$46template, "_MaterialIconComponent_1_5");
  const _el_1 = dart.privateName(scoreboard$46template, "_el_1");
  let C3;
  scoreboard$46template._ViewScoreboardComponent1 = class _ViewScoreboardComponent1 extends embedded_view.EmbeddedView$(scoreboard.ScoreboardComponent) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(this[_el_0], "scroll-button scroll-back-button");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_AcxDarkTheme_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(dark_theme.AcxDarkTheme, dart.wrapType(dark_theme.AcxDarkTheme), dart.fn(() => new dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGetOptional(C3 || CT.C3, this.parentView.parentIndex))), VoidToAcxDarkTheme())) : new dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGetOptional(C3 || CT.C3, this.parentView.parentIndex)));
      this[_MaterialButtonComponent_0_6] = new material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_0]), dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_0_5]), this[_compView_0], null);
      this[_compView_1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootElement;
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_compView_1].create(this[_MaterialIconComponent_1_5]);
      this[_compView_0].createAndProject(this[_MaterialButtonComponent_0_6], JSArrayOfObject().of([JSArrayOfElement().of([this[_el_1]])]));
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(_ctx, 'scrollBack')));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([this[_el_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
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
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      changed = false;
      let currVal_2 = _ctx.backIconType;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "backIconType", ""))) {
        this[_MaterialIconComponent_1_5].icon = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      let currVal_0 = _ctx.atScorecardBarStart;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "atScorecardBarStart", ""))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0], "hide", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      if (dart.test(firstCheck)) {
        if (scoreboard.ScoreboardComponent.scrollScorecardBarBack != null) {
          dom_helpers.updateAttribute(this[_el_1], "aria-label", scoreboard.ScoreboardComponent.scrollScorecardBarBack);
        }
      }
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_1].destroyInternalState();
    }
  };
  (scoreboard$46template._ViewScoreboardComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    scoreboard$46template._ViewScoreboardComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = scoreboard$46template._ViewScoreboardComponent1.prototype;
  dart.addTypeTests(scoreboard$46template._ViewScoreboardComponent1);
  dart.setMethodSignature(scoreboard$46template._ViewScoreboardComponent1, () => ({
    __proto__: dart.getMethods(scoreboard$46template._ViewScoreboardComponent1.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(scoreboard$46template._ViewScoreboardComponent1, "package:angular_components/scorecard/scoreboard.template.dart");
  dart.setFieldSignature(scoreboard$46template._ViewScoreboardComponent1, () => ({
    __proto__: dart.getFields(scoreboard$46template._ViewScoreboardComponent1.__proto__),
    [_compView_0]: dart.fieldType(material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button.MaterialButtonComponent),
    [_compView_1]: dart.fieldType(material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.Element)
  }));
  scoreboard$46template._ViewScoreboardComponent2 = class _ViewScoreboardComponent2 extends embedded_view.EmbeddedView$(scoreboard.ScoreboardComponent) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(this[_el_0], "scroll-button scroll-forward-button");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_AcxDarkTheme_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(dark_theme.AcxDarkTheme, dart.wrapType(dark_theme.AcxDarkTheme), dart.fn(() => new dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGetOptional(C3 || CT.C3, this.parentView.parentIndex))), VoidToAcxDarkTheme())) : new dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGetOptional(C3 || CT.C3, this.parentView.parentIndex)));
      this[_MaterialButtonComponent_0_6] = new material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_0]), dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_0_5]), this[_compView_0], null);
      this[_compView_1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootElement;
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_compView_1].create(this[_MaterialIconComponent_1_5]);
      this[_compView_0].createAndProject(this[_MaterialButtonComponent_0_6], JSArrayOfObject().of([JSArrayOfElement().of([this[_el_1]])]));
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(_ctx, 'scrollForward')));
      this.initRootNodesAndSubscriptions(JSArrayOfObject().of([this[_el_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
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
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      changed = false;
      let currVal_2 = _ctx.forwardIconType;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "forwardIconType", ""))) {
        this[_MaterialIconComponent_1_5].icon = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      let currVal_0 = _ctx.atScorecardBarEnd;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "atScorecardBarEnd", ""))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0], "hide", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      if (dart.test(firstCheck)) {
        if (scoreboard.ScoreboardComponent.scrollScorecardBarForward != null) {
          dom_helpers.updateAttribute(this[_el_1], "aria-label", scoreboard.ScoreboardComponent.scrollScorecardBarForward);
        }
      }
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_1].destroyInternalState();
    }
  };
  (scoreboard$46template._ViewScoreboardComponent2.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    scoreboard$46template._ViewScoreboardComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = scoreboard$46template._ViewScoreboardComponent2.prototype;
  dart.addTypeTests(scoreboard$46template._ViewScoreboardComponent2);
  dart.setMethodSignature(scoreboard$46template._ViewScoreboardComponent2, () => ({
    __proto__: dart.getMethods(scoreboard$46template._ViewScoreboardComponent2.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(scoreboard$46template._ViewScoreboardComponent2, "package:angular_components/scorecard/scoreboard.template.dart");
  dart.setFieldSignature(scoreboard$46template._ViewScoreboardComponent2, () => ({
    __proto__: dart.getFields(scoreboard$46template._ViewScoreboardComponent2.__proto__),
    [_compView_0]: dart.fieldType(material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button.MaterialButtonComponent),
    [_compView_1]: dart.fieldType(material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.Element)
  }));
  scoreboard$46template._ViewScoreboardComponentHost0 = class _ViewScoreboardComponentHost0 extends host_view.HostView$(scoreboard.ScoreboardComponent) {
    build() {
      this.componentView = new scoreboard$46template.ViewScoreboardComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(scoreboard.ScoreboardComponent, dart.wrapType(scoreboard.ScoreboardComponent), dart.fn(() => new scoreboard.ScoreboardComponent.new(null, dom_service.DomService._check(this.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), this.componentView), VoidToScoreboardComponent())) : new scoreboard.ScoreboardComponent.new(null, dom_service.DomService._check(this.injectorGet(dart.wrapType(dom_service.DomService), this.parentIndex)), this.componentView);
      this.component.scoreCards = JSArrayOfScorecardComponent().of([]);
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
      this.componentView.detectChanges();
    }
    destroyInternal() {
      this.componentView.destroyInternalState();
      this.component.ngOnDestroy();
    }
  };
  (scoreboard$46template._ViewScoreboardComponentHost0.new = function(injector) {
    scoreboard$46template._ViewScoreboardComponentHost0.__proto__.new.call(this, injector);
    ;
  }).prototype = scoreboard$46template._ViewScoreboardComponentHost0.prototype;
  dart.addTypeTests(scoreboard$46template._ViewScoreboardComponentHost0);
  dart.setMethodSignature(scoreboard$46template._ViewScoreboardComponentHost0, () => ({
    __proto__: dart.getMethods(scoreboard$46template._ViewScoreboardComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(scoreboard$46template._ViewScoreboardComponentHost0, "package:angular_components/scorecard/scoreboard.template.dart");
  scoreboard$46template.viewFactory_ScoreboardComponent1 = function viewFactory_ScoreboardComponent1(parentView, parentIndex) {
    return new scoreboard$46template._ViewScoreboardComponent1.new(parentView, parentIndex);
  };
  scoreboard$46template.viewFactory_ScoreboardComponent2 = function viewFactory_ScoreboardComponent2(parentView, parentIndex) {
    return new scoreboard$46template._ViewScoreboardComponent2.new(parentView, parentIndex);
  };
  scoreboard$46template.viewFactory_ScoreboardComponentHost0 = function viewFactory_ScoreboardComponentHost0(injector) {
    return new scoreboard$46template._ViewScoreboardComponentHost0.new(injector);
  };
  scoreboard$46template.initReflector = function initReflector() {
    if (dart.test(scoreboard$46template._visited)) {
      return;
    }
    scoreboard$46template._visited = true;
    reflector.registerComponent(dart.wrapType(scoreboard.ScoreboardComponent), scoreboard$46template.ScoreboardComponentNgFactory);
    angular$46template.initReflector();
    material_button$46template.initReflector();
    material_icon$46template.initReflector();
    selection_model$46template.initReflector();
    angular_2$46template.initReflector();
    material_chart_colors$46template.initReflector();
    disposer$46template.initReflector();
    scorecard$46template.initReflector();
    scorecard_bar$46template.initReflector();
  };
  dart.copyProperties(scoreboard$46template, {
    get ScoreboardComponentNgFactory() {
      return scoreboard$46template._ScoreboardComponentNgFactory;
    }
  });
  let C5;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C4;
  let C6;
  dart.defineLazy(scoreboard$46template, {
    /*scoreboard$46template.styles$ScoreboardComponent*/get styles$ScoreboardComponent() {
      return [scoreboard$46scss$46css$46shim.styles];
    },
    /*scoreboard$46template._ScoreboardComponentNgFactory*/get _ScoreboardComponentNgFactory() {
      return C4 || CT.C4;
    },
    /*scoreboard$46template.styles$ScoreboardComponentHost*/get styles$ScoreboardComponentHost() {
      return C6 || CT.C6;
    },
    /*scoreboard$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/scorecard/scoreboard.template", {
    "package:angular_components/scorecard/scoreboard.template.dart": scoreboard$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scoreboard.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgEI,uBAAiB,2BAAY,2DAA2D;IAC1F;;AAIQ,iBAAY;AACQ,6BAAmB,AAAK;AAC5C,gBAAc;AACkC,MAAjD,cAAQ,sBAAmB,GAAG,EAAE,gBAAgB;AACF,MAAnD,AAAK,sBAAsB,aAAO;AACT,MAAzB,AAAK,cAAc;AACb,sBAAY,yBAA2B;AACO,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AAC/C,kBAAQ,sBAAmB,GAAG,EAAO;AACE,MAA7C,AAAK,sBAAiB,KAAK,EAAE;AACmB,MAAhD,yBAAsB,KAAK,EAAE,gBAAgB;AACzB,MAApB,AAAK,cAAS,KAAK;AAKiM,MAJ/M,6CAAuC,2BACtC,8DAAmC,oDAAuB,cACzC,0EAA2B,AAAW,4BAAqB,uCAAiB,oBAAc,KAAK,mBAAO,AAAW,iDAAuE,uDAEjM,0EAA2B,AAAW,4BAAqB,uCAAiB,oBAAc,KAAK,mBAAO,AAAW,iDAAuE;AAChL,MAAtB,AAAK,aAAQ,KAAK,EAAE;AACd,sBAAY,yBAA2B;AACO,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AACF,MAAnD,AAAK,IAAD,gBAAqB;IAC3B;;AAIQ,iBAAY;AACb,uBAAkB;AACgB,MAAlC,AAAU,uBAAO,AAAK,IAAD;AACpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA2B,eAAS,SAAS,EAAE,cAAc;AACT,QAAjD,AAA2B,8CAAa,SAAS;AAC9B,QAAnB,gBAAU,SAAS;;AAE1B,qBAAgB,gDAAwB,UAAU;AACN,QAArC,AAA2B;;AAEK,MAAlC,AAAU,uBAAO,AAAK,IAAD;AACgB,MAArC,AAAS;AAC4B,MAArC,AAAS;AACH,sBAAa,WAAC,AAAK,IAAD;AAC7B,oBAAI,2BAA2B,eAAS,SAAS,EAAE,eAAe;AACe,QAA/E,+BAAiC,aAAO,6BAA6B,SAAS;AACtD,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA2B,eAAS,SAAS,EAAE,cAAc;AACc,QAA7E,+BAAiC,aAAO,2BAA2B,SAAS;AACpD,QAAnB,gBAAU,SAAS;;AAE1B,qBAAe;AACuC,QAA/C,AAA2B;;IAEpC;;AAIoC,MAA7B,AAAS;AACoB,MAA7B,AAAS;AAC+B,MAAxC,AAA2B;IAClC;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC+G,QAAlI,kEAAoB,SAAU,kEAA2C,2CAAO,kDAA4B;;AAElF,MAAxB,uBAAkB,MAAM;IAC/B;;iEAlFsC,YAAgB;IAVxC;IACT;IACyB;IAChB;IACT;IACA;IACA;IACD;IACe;AAEkD,4EAAM,UAAU,EAAE,WAAW;AACtE,IAA1B,AAAK;AAC8D,uBAA9D,wBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;;;;;;;;MAJ+B,+DAAgB;;;;;;;;;;;;;;AAwGvC,iBAAY;AAE+C,MAA5D,oBAAuB,gEAA6B,MAAM;AACtB,MAApC,cAAa,AAAY;AAC8C,MAA5E,AAAK,6BAA6B,aAAO;AAChB,MAAzB,AAAK,sCAAc;AAK2I,MAJzJ,oCAA8B,2BAC7B,kDAAoC,wCAAc,cAChC,iDAAkB,AAAW,AAAW,4DAA8E,AAAW,yDAE1I,iDAAkB,AAAW,AAAW,4DAA8E,AAAW;AAChB,MAA3H,qCAAwC,wEAA6B,6CAAY,0BAAwB,mBAAa;AAE5D,MAA1D,oBAAuB,4DAA2B,MAAM;AACpB,MAApC,cAAa,AAAY;AACL,MAAzB,AAAK,sCAAc;AACyD,MAAvE,mCAAsC,oEAA2B;AACd,MAAnD,AAAY,yBAAY;AAG3B,MAFG,AAAY,mCAAsB,oCAA8B,sBACnE,uBAAM;AAEF,2BAAsB,AAA6B,AAAQ,kDAAO,AAAK,iCAAmB,UAAL,IAAI;AAC7B,MAAlE,AAAK,mCAA8B,sBAAM,eAAQ,wCAAC,cAAc;IAClE;wBAGoC,OAAW,WAAmB;AAChE,UAAe,aAAV,SAAS,KAAI;AAChB,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAY;;AAEd,YAAM,AAAU,KAAK,KAAW,0DAA4B,AAAU,KAAK,KAAW,mDAAqB,AAAU,KAAK,KAAW;AACnI,gBAAY;;;AAGhB,YAAO,eAAc;IACvB;;AAIQ,iBAAY;AACb,oBAAU;AACV,uBAAkB;AACR,MAAf,UAAU;AACV,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEJ,MAAf,UAAU;AACJ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA2B,eAAS,SAAS,EAAE,gBAAgB;AACjB,QAA3C,AAA2B,wCAAO,SAAS;AAClC,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEb,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA2B,eAAS,SAAS,EAAE,uBAAuB;AACP,QAAjE,sCAAwC,aAAO,QAAQ,SAAS;AACxC,QAAnB,gBAAU,SAAS;;AAEoB,MAAzC,AAAY,oCAAkB,UAAU;AAC7C,oBAAI,UAAU;AACZ,YAA2C,yDAAwB;AACqC,UAAtG,4BAA8B,aAAO,cAA0C;;;AAGnD,MAA3B,AAAY;AACe,MAA3B,AAAY;IACnB;;AAIyC,MAAlC,AAAY;AACsB,MAAlC,AAAY;IACnB;;kEA/E8C,YAAgB;IATxB;IAC9B;IACyB;IACG;IACL;IAC1B;IACD;IACY;IACA;AAC6D,6EAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;;;AAmGnG,iBAAY;AAE+C,MAA5D,oBAAuB,gEAA6B,MAAM;AACtB,MAApC,cAAa,AAAY;AACiD,MAA/E,AAAK,6BAA6B,aAAO;AAChB,MAAzB,AAAK,sCAAc;AAK2I,MAJzJ,oCAA8B,2BAC7B,kDAAoC,wCAAc,cAChC,iDAAkB,AAAW,AAAW,4DAA8E,AAAW,yDAE1I,iDAAkB,AAAW,AAAW,4DAA8E,AAAW;AAChB,MAA3H,qCAAwC,wEAA6B,6CAAY,0BAAwB,mBAAa;AAE5D,MAA1D,oBAAuB,4DAA2B,MAAM;AACpB,MAApC,cAAa,AAAY;AACL,MAAzB,AAAK,sCAAc;AACyD,MAAvE,mCAAsC,oEAA2B;AACd,MAAnD,AAAY,yBAAY;AAG3B,MAFG,AAAY,mCAAsB,oCAA8B,sBACnE,uBAAM;AAEF,2BAAsB,AAA6B,AAAQ,kDAAO,AAAK,iCAAmB,UAAL,IAAI;AAC7B,MAAlE,AAAK,mCAA8B,sBAAM,eAAQ,wCAAC,cAAc;IAClE;wBAGoC,OAAW,WAAmB;AAChE,UAAe,aAAV,SAAS,KAAI;AAChB,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAY;;AAEd,YAAM,AAAU,KAAK,KAAW,0DAA4B,AAAU,KAAK,KAAW,mDAAqB,AAAU,KAAK,KAAW;AACnI,gBAAY;;;AAGhB,YAAO,eAAc;IACvB;;AAIQ,iBAAY;AACb,oBAAU;AACV,uBAAkB;AACR,MAAf,UAAU;AACV,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEJ,MAAf,UAAU;AACJ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA2B,eAAS,SAAS,EAAE,mBAAmB;AACpB,QAA3C,AAA2B,wCAAO,SAAS;AAClC,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEb,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA2B,eAAS,SAAS,EAAE,qBAAqB;AACL,QAAjE,sCAAwC,aAAO,QAAQ,SAAS;AACxC,QAAnB,gBAAU,SAAS;;AAEoB,MAAzC,AAAY,oCAAkB,UAAU;AAC7C,oBAAI,UAAU;AACZ,YAA2C,4DAA2B;AACqC,UAAzG,4BAA8B,aAAO,cAA0C;;;AAGnD,MAA3B,AAAY;AACe,MAA3B,AAAY;IACnB;;AAIyC,MAAlC,AAAY;AACsB,MAAlC,AAAY;IACnB;;kEA/E8C,YAAgB;IATxB;IAC9B;IACyB;IACG;IACL;IAC1B;IACD;IACY;IACA;AAC6D,6EAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;;;AA8FnD,MAAjD,qBAAgB,uDAAyB,MAAM;AAC9C,kBAAa,AAAc;AAKoF,MAJhH,2BAAsB,2BACrB,yDAAmC,+CAAqB,cACvC,uCAAoB,oCAAM,AAAK,iBAAqB,uCAAiB,oBAAmB,qDAEjG,uCAAoB,oCAAM,AAAK,iBAAqB,uCAAiB,oBAAmB;AACxE,MAAzB,AAAU,4BAAa;AACJ,MAAxB,AAAK,kBAAa,KAAK;IACzB;;AAIO,oBAAU;AACV,uBAAkB;AACvB,UAAI,OAAO;AAC2B,QAA/B,AAAc;;AAErB,qBAAgB,gDAAwB,UAAU;AACvB,QAApB,AAAU;;AAEiB,MAA7B,AAAc;IACrB;;AAI2C,MAApC,AAAc;AACS,MAAvB,AAAU;IACjB;;sEAhCgD;AAAY,iFAAM,QAAQ;;EAAC;;;;;;;qGAxGI,YAAgB;AAC/F,UAAO,yDAA0B,UAAU,EAAE,WAAW;EAC1D;qGA8FiF,YAAgB;AAC/F,UAAO,yDAA0B,UAAU,EAAE,WAAW;EAC1D;6GAyCsG;AACpG,UAAO,6DAA8B,QAAQ;EAC/C;;AAIE,kBAAI;AACF;;AAEa,IAAf,iCAAW;AAEgE,IAA3E,4BAAyB,+CAAqB;AACzB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AA/PE,YAAO;IACT;;;;;;;;MAtGoB,gDAA0B;YAAG,EAAS;;MAmGN,mDAA6B;;;MAqM7D,oDAA8B;;;MA2C9C,8BAAQ;YAAG","file":"scoreboard.template.ddc.js"}');
  // Exports:
  return {
    scorecard__scoreboard$46template: scoreboard$46template
  };
});

//# sourceMappingURL=scoreboard.template.ddc.js.map

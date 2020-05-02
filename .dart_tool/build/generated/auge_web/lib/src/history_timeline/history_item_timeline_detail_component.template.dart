// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'history_item_timeline_detail_component.dart';
export 'history_item_timeline_detail_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/content/deferred_content.template.dart' as _ref1;
import 'package:angular_components/material_button/material_button.template.dart' as _ref2;
import 'package:angular_components/material_expansionpanel/material_expansionpanel.template.dart' as _ref3;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref4;
import 'package:auge_web/services/common_service.template.dart' as _ref5;
import 'package:auge_web/src/history_timeline/history_item_timeline_detail_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'history_item_timeline_detail_component.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/common/pipes/date_pipe.dart' as import5;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import6;
import 'package:angular/src/core/linker/views/view.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import14;
import 'package:angular/src/runtime/text_binding.dart' as import15;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/views/render_view.dart' as import17;
import 'dart:core';
import 'package:angular/src/runtime/interpolate.dart' as import19;
import 'package:angular/src/runtime/proxies.dart' as import20;
import 'package:angular/src/core/linker/views/host_view.dart' as import21;
import 'package:angular/src/di/injector/injector.dart' as import22;

final List<dynamic> styles$HistoryItemTimelineDetailComponent = [import0.styles];

// View for component HistoryItemTimelineDetailComponent in asset:auge_web/lib/src/history_timeline/history_item_timeline_detail_component.dart (changeDetection: Default)
class ViewHistoryItemTimelineDetailComponent0 extends import1.ComponentView<import2.HistoryItemTimelineDetailComponent> {
  ViewContainer _appEl_0;
  import4.NgFor _NgFor_0_9;
  var _expr_0;
  import5.DatePipe _pipe_date_0;
  static import6.ComponentStyles _componentStyles;
  ViewHistoryItemTimelineDetailComponent0(import7.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import9.document.createElement('auge-history-item-timeline-detail');
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:auge_web/lib/src/history_timeline/history_item_timeline_detail_component.dart' : null);
  }

  @override
  void build() {
    final import9.HtmlElement parentRenderNode = this.initViewRoot();
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, viewFactory_HistoryItemTimelineDetailComponent1);
    this._NgFor_0_9 = import4.NgFor(this._appEl_0, _TemplateRef_0_8);
    this._pipe_date_0 = import5.DatePipe();
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = ((_ctx.fieldsChangedValues == null) ? null : _ctx.fieldsChangedValues.keys);
    if (import10.checkBinding(this._expr_0, currVal_0, 'fieldsChangedValues?.keys', '')) {
      this._NgFor_0_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import10.debugThrowIfChanged)) {
      this._NgFor_0_9.ngDoCheck();
    }
    this._appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import6.ComponentStyles.scoped(styles$HistoryItemTimelineDetailComponent, _debugComponentUrl))));
    }
    this.componentStyles = styles;
  }
}

const ComponentFactory<import2.HistoryItemTimelineDetailComponent> _HistoryItemTimelineDetailComponentNgFactory = const ComponentFactory('auge-history-item-timeline-detail', viewFactory_HistoryItemTimelineDetailComponentHost0);
ComponentFactory<import2.HistoryItemTimelineDetailComponent> get HistoryItemTimelineDetailComponentNgFactory {
  return _HistoryItemTimelineDetailComponentNgFactory;
}

class _ViewHistoryItemTimelineDetailComponent1 extends import14.EmbeddedView<import2.HistoryItemTimelineDetailComponent> {
  final import15.TextBinding _textBinding_2 = import15.TextBinding();
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  ViewContainer _appEl_8;
  NgIf _NgIf_8_9;
  _ViewHistoryItemTimelineDetailComponent1(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import9.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'font-size-small');
    this.addShimC(_el_0);
    final _el_1 = import11.appendSpan(doc, _el_0);
    this.addShimE(_el_1);
    _el_1.append(this._textBinding_2.element);
    final _text_3 = import11.appendText(_el_0, ' ');
    final _anchor_4 = import11.appendAnchor(_el_0);
    this._appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_HistoryItemTimelineDetailComponent2);
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    final _text_5 = import11.appendText(_el_0, ' ');
    final _anchor_6 = import11.appendAnchor(_el_0);
    this._appEl_6 = ViewContainer(6, 0, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(this._appEl_6, viewFactory_HistoryItemTimelineDetailComponent7);
    this._NgIf_6_9 = NgIf(this._appEl_6, _TemplateRef_6_8);
    final _text_7 = import11.appendText(_el_0, ' ');
    final _anchor_8 = import11.appendAnchor(_el_0);
    this._appEl_8 = ViewContainer(8, 0, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = TemplateRef(this._appEl_8, viewFactory_HistoryItemTimelineDetailComponent12);
    this._NgIf_8_9 = NgIf(this._appEl_8, _TemplateRef_8_8);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_key = import10.unsafeCast<String>(this.locals['\$implicit']);
    this._NgIf_4_9.ngIf = (_ctx.fieldsChangedValues[local_key][_ctx.typeToViewKey] == _ctx.typeToViewText);
    this._NgIf_6_9.ngIf = (_ctx.fieldsChangedValues[local_key][_ctx.typeToViewKey] == _ctx.typeToViewImageAvatar);
    this._NgIf_8_9.ngIf = (_ctx.fieldsChangedValues[local_key][_ctx.typeToViewKey] == _ctx.typeToViewDateTime);
    this._appEl_4.detectChangesInNestedViews();
    this._appEl_6.detectChangesInNestedViews();
    this._appEl_8.detectChangesInNestedViews();
    this._textBinding_2.updateText(import19.interpolate0(_ctx.fieldsChangedValues[local_key][_ctx.fieldDescriptionKey]));
  }

  @override
  void destroyInternal() {
    this._appEl_4.destroyNestedViews();
    this._appEl_6.destroyNestedViews();
    this._appEl_8.destroyNestedViews();
  }
}

import14.EmbeddedView<void> viewFactory_HistoryItemTimelineDetailComponent1(import17.RenderView parentView, int parentIndex) {
  return _ViewHistoryItemTimelineDetailComponent1(parentView, parentIndex);
}

class _ViewHistoryItemTimelineDetailComponent2 extends import14.EmbeddedView<import2.HistoryItemTimelineDetailComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  _ViewHistoryItemTimelineDetailComponent2(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import9.document;
    final _el_0 = doc.createElement('span');
    this.addShimE(_el_0);
    final _anchor_1 = import11.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_HistoryItemTimelineDetailComponent3);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _text_2 = import11.appendText(_el_0, ' ');
    final _anchor_3 = import11.appendAnchor(_el_0);
    this._appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_HistoryItemTimelineDetailComponent4);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_key = import10.unsafeCast<String>(import10.unsafeCast<_ViewHistoryItemTimelineDetailComponent1>(this.parentView).locals['\$implicit']);
    this._NgIf_1_9.ngIf = (_ctx.fieldsChangedValues[local_key][_ctx.cKey] != null);
    this._NgIf_3_9.ngIf = (_ctx.fieldsChangedValues[local_key][_ctx.pKey] != null);
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
  }
}

import14.EmbeddedView<void> viewFactory_HistoryItemTimelineDetailComponent2(import17.RenderView parentView, int parentIndex) {
  return _ViewHistoryItemTimelineDetailComponent2(parentView, parentIndex);
}

class _ViewHistoryItemTimelineDetailComponent3 extends import14.EmbeddedView<import2.HistoryItemTimelineDetailComponent> {
  final import15.TextBinding _textBinding_2 = import15.TextBinding();
  _ViewHistoryItemTimelineDetailComponent3(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import9.document;
    final _el_0 = doc.createElement('span');
    this.addShimE(_el_0);
    final _el_1 = import11.appendElement(doc, _el_0, 'strong');
    this.addShimE(_el_1);
    _el_1.append(this._textBinding_2.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_key = import10.unsafeCast<String>(import10.unsafeCast<_ViewHistoryItemTimelineDetailComponent1>(this.parentView.parentView).locals['\$implicit']);
    this._textBinding_2.updateText(import19.interpolate0(_ctx.fieldsChangedValues[local_key][_ctx.cKey]));
  }
}

import14.EmbeddedView<void> viewFactory_HistoryItemTimelineDetailComponent3(import17.RenderView parentView, int parentIndex) {
  return _ViewHistoryItemTimelineDetailComponent3(parentView, parentIndex);
}

class _ViewHistoryItemTimelineDetailComponent4 extends import14.EmbeddedView<import2.HistoryItemTimelineDetailComponent> {
  final import15.TextBinding _textBinding_7 = import15.TextBinding();
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  _ViewHistoryItemTimelineDetailComponent4(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import9.document;
    final _el_0 = doc.createElement('span');
    this.addShimE(_el_0);
    final _anchor_1 = import11.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_HistoryItemTimelineDetailComponent5);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _text_2 = import11.appendText(_el_0, ' ');
    final _anchor_3 = import11.appendAnchor(_el_0);
    this._appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_HistoryItemTimelineDetailComponent6);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    final _text_4 = import11.appendText(_el_0, ' ');
    final _el_5 = import11.appendSpan(doc, _el_0);
    this.addShimE(_el_5);
    final _el_6 = import11.appendElement(doc, _el_5, 'strong');
    this.addShimE(_el_6);
    _el_6.append(this._textBinding_7.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_key = import10.unsafeCast<String>(import10.unsafeCast<_ViewHistoryItemTimelineDetailComponent1>(this.parentView.parentView).locals['\$implicit']);
    this._NgIf_1_9.ngIf = (_ctx.fieldsChangedValues[local_key][_ctx.cKey] != null);
    this._NgIf_3_9.ngIf = (_ctx.fieldsChangedValues[local_key][_ctx.cKey] == null);
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
    this._textBinding_7.updateText(import19.interpolate0(_ctx.fieldsChangedValues[local_key][_ctx.pKey]));
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
  }
}

import14.EmbeddedView<void> viewFactory_HistoryItemTimelineDetailComponent4(import17.RenderView parentView, int parentIndex) {
  return _ViewHistoryItemTimelineDetailComponent4(parentView, parentIndex);
}

class _ViewHistoryItemTimelineDetailComponent5 extends import14.EmbeddedView<import2.HistoryItemTimelineDetailComponent> {
  _ViewHistoryItemTimelineDetailComponent5(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import9.document;
    final _el_0 = doc.createElement('span');
    this.addShimE(_el_0);
    final _text_1 = import11.appendText(_el_0, import19.interpolateString0(import2.HistoryItemTimelineDetailComponent.changedFromLabel));
    this.initRootNode(_el_0);
  }
}

import14.EmbeddedView<void> viewFactory_HistoryItemTimelineDetailComponent5(import17.RenderView parentView, int parentIndex) {
  return _ViewHistoryItemTimelineDetailComponent5(parentView, parentIndex);
}

class _ViewHistoryItemTimelineDetailComponent6 extends import14.EmbeddedView<import2.HistoryItemTimelineDetailComponent> {
  _ViewHistoryItemTimelineDetailComponent6(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import9.document;
    final _el_0 = doc.createElement('span');
    this.addShimE(_el_0);
    final _text_1 = import11.appendText(_el_0, import19.interpolateString0(import2.HistoryItemTimelineDetailComponent.wasLabel));
    this.initRootNode(_el_0);
  }
}

import14.EmbeddedView<void> viewFactory_HistoryItemTimelineDetailComponent6(import17.RenderView parentView, int parentIndex) {
  return _ViewHistoryItemTimelineDetailComponent6(parentView, parentIndex);
}

class _ViewHistoryItemTimelineDetailComponent7 extends import14.EmbeddedView<import2.HistoryItemTimelineDetailComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  _ViewHistoryItemTimelineDetailComponent7(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import9.document;
    final _el_0 = doc.createElement('span');
    this.addShimE(_el_0);
    final _anchor_1 = import11.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_HistoryItemTimelineDetailComponent8);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _text_2 = import11.appendText(_el_0, ' ');
    final _anchor_3 = import11.appendAnchor(_el_0);
    this._appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_HistoryItemTimelineDetailComponent9);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_key = import10.unsafeCast<String>(import10.unsafeCast<_ViewHistoryItemTimelineDetailComponent1>(this.parentView).locals['\$implicit']);
    this._NgIf_1_9.ngIf = (_ctx.fieldsChangedValues[local_key][_ctx.cKey] != null);
    this._NgIf_3_9.ngIf = (_ctx.fieldsChangedValues[local_key][_ctx.pKey] != null);
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
  }
}

import14.EmbeddedView<void> viewFactory_HistoryItemTimelineDetailComponent7(import17.RenderView parentView, int parentIndex) {
  return _ViewHistoryItemTimelineDetailComponent7(parentView, parentIndex);
}

class _ViewHistoryItemTimelineDetailComponent8 extends import14.EmbeddedView<import2.HistoryItemTimelineDetailComponent> {
  var _expr_0;
  import9.Element _el_0;
  _ViewHistoryItemTimelineDetailComponent8(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import9.document;
    this._el_0 = doc.createElement('span');
    this.updateChildClass(this._el_0, 'avatar');
    this.addShimE(this._el_0);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_key = import10.unsafeCast<String>(import10.unsafeCast<_ViewHistoryItemTimelineDetailComponent1>(this.parentView.parentView).locals['\$implicit']);
    final currVal_0 = (('url(' + _ctx.userUrlImage(_ctx.fieldsChangedValues[local_key][_ctx.cKey])) + ')');
    if (import10.checkBinding(this._expr_0, currVal_0, '\'url(\' + userUrlImage(fieldsChangedValues[key][cKey]) + \')\'', '')) {
      this._el_0.style.setProperty('background-image', currVal_0);
      this._expr_0 = currVal_0;
    }
  }
}

import14.EmbeddedView<void> viewFactory_HistoryItemTimelineDetailComponent8(import17.RenderView parentView, int parentIndex) {
  return _ViewHistoryItemTimelineDetailComponent8(parentView, parentIndex);
}

class _ViewHistoryItemTimelineDetailComponent9 extends import14.EmbeddedView<import2.HistoryItemTimelineDetailComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  var _expr_0;
  import9.Element _el_5;
  _ViewHistoryItemTimelineDetailComponent9(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import9.document;
    final _el_0 = doc.createElement('span');
    this.addShimE(_el_0);
    final _anchor_1 = import11.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_HistoryItemTimelineDetailComponent10);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _text_2 = import11.appendText(_el_0, ' ');
    final _anchor_3 = import11.appendAnchor(_el_0);
    this._appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_HistoryItemTimelineDetailComponent11);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    final _text_4 = import11.appendText(_el_0, ' ');
    this._el_5 = import11.appendSpan(doc, _el_0);
    this.updateChildClass(this._el_5, 'avatar');
    this.addShimE(this._el_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_key = import10.unsafeCast<String>(import10.unsafeCast<_ViewHistoryItemTimelineDetailComponent1>(this.parentView.parentView).locals['\$implicit']);
    this._NgIf_1_9.ngIf = (_ctx.fieldsChangedValues[local_key][_ctx.cKey] != null);
    this._NgIf_3_9.ngIf = (_ctx.fieldsChangedValues[local_key][_ctx.cKey] == null);
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
    final currVal_0 = (('url(' + _ctx.userUrlImage(_ctx.fieldsChangedValues[local_key][_ctx.pKey])) + ')');
    if (import10.checkBinding(this._expr_0, currVal_0, '\'url(\' + userUrlImage(fieldsChangedValues[key][pKey]) + \')\'', '')) {
      this._el_5.style.setProperty('background-image', currVal_0);
      this._expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
  }
}

import14.EmbeddedView<void> viewFactory_HistoryItemTimelineDetailComponent9(import17.RenderView parentView, int parentIndex) {
  return _ViewHistoryItemTimelineDetailComponent9(parentView, parentIndex);
}

class _ViewHistoryItemTimelineDetailComponent10 extends import14.EmbeddedView<import2.HistoryItemTimelineDetailComponent> {
  _ViewHistoryItemTimelineDetailComponent10(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import9.document;
    final _el_0 = doc.createElement('span');
    this.addShimE(_el_0);
    final _text_1 = import11.appendText(_el_0, import19.interpolateString0(import2.HistoryItemTimelineDetailComponent.changedFromLabel));
    this.initRootNode(_el_0);
  }
}

import14.EmbeddedView<void> viewFactory_HistoryItemTimelineDetailComponent10(import17.RenderView parentView, int parentIndex) {
  return _ViewHistoryItemTimelineDetailComponent10(parentView, parentIndex);
}

class _ViewHistoryItemTimelineDetailComponent11 extends import14.EmbeddedView<import2.HistoryItemTimelineDetailComponent> {
  _ViewHistoryItemTimelineDetailComponent11(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import9.document;
    final _el_0 = doc.createElement('span');
    this.addShimE(_el_0);
    final _text_1 = import11.appendText(_el_0, import19.interpolateString0(import2.HistoryItemTimelineDetailComponent.wasLabel));
    this.initRootNode(_el_0);
  }
}

import14.EmbeddedView<void> viewFactory_HistoryItemTimelineDetailComponent11(import17.RenderView parentView, int parentIndex) {
  return _ViewHistoryItemTimelineDetailComponent11(parentView, parentIndex);
}

class _ViewHistoryItemTimelineDetailComponent12 extends import14.EmbeddedView<import2.HistoryItemTimelineDetailComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  _ViewHistoryItemTimelineDetailComponent12(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import9.document;
    final _el_0 = doc.createElement('span');
    this.addShimE(_el_0);
    final _anchor_1 = import11.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_HistoryItemTimelineDetailComponent13);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _text_2 = import11.appendText(_el_0, ' ');
    final _anchor_3 = import11.appendAnchor(_el_0);
    this._appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_HistoryItemTimelineDetailComponent14);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_key = import10.unsafeCast<String>(import10.unsafeCast<_ViewHistoryItemTimelineDetailComponent1>(this.parentView).locals['\$implicit']);
    this._NgIf_1_9.ngIf = (_ctx.fieldsChangedValues[local_key][_ctx.cKey] != null);
    this._NgIf_3_9.ngIf = (_ctx.fieldsChangedValues[local_key][_ctx.pKey] != null);
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
  }
}

import14.EmbeddedView<void> viewFactory_HistoryItemTimelineDetailComponent12(import17.RenderView parentView, int parentIndex) {
  return _ViewHistoryItemTimelineDetailComponent12(parentView, parentIndex);
}

class _ViewHistoryItemTimelineDetailComponent13 extends import14.EmbeddedView<import2.HistoryItemTimelineDetailComponent> {
  final import15.TextBinding _textBinding_2 = import15.TextBinding();
  String Function(dynamic) _pipe_date_0_0;
  _ViewHistoryItemTimelineDetailComponent13(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import9.document;
    final _el_0 = doc.createElement('span');
    this.addShimE(_el_0);
    final _el_1 = import11.appendElement(doc, _el_0, 'strong');
    this.addShimE(_el_1);
    _el_1.append(this._textBinding_2.element);
    this._pipe_date_0_0 = import20.pureProxy1(import10.unsafeCast<ViewHistoryItemTimelineDetailComponent0>(this.parentView.parentView.parentView)._pipe_date_0.transform);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_key = import10.unsafeCast<String>(import10.unsafeCast<_ViewHistoryItemTimelineDetailComponent1>(this.parentView.parentView).locals['\$implicit']);
    this._textBinding_2.updateText(import19.interpolate0(this._pipe_date_0_0(_ctx.fieldsChangedValues[local_key][_ctx.cKey])));
  }
}

import14.EmbeddedView<void> viewFactory_HistoryItemTimelineDetailComponent13(import17.RenderView parentView, int parentIndex) {
  return _ViewHistoryItemTimelineDetailComponent13(parentView, parentIndex);
}

class _ViewHistoryItemTimelineDetailComponent14 extends import14.EmbeddedView<import2.HistoryItemTimelineDetailComponent> {
  final import15.TextBinding _textBinding_7 = import15.TextBinding();
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  String Function(dynamic) _pipe_date_0_1;
  _ViewHistoryItemTimelineDetailComponent14(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import9.document;
    final _el_0 = doc.createElement('span');
    this.addShimE(_el_0);
    final _anchor_1 = import11.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_HistoryItemTimelineDetailComponent15);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _text_2 = import11.appendText(_el_0, ' ');
    final _anchor_3 = import11.appendAnchor(_el_0);
    this._appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_HistoryItemTimelineDetailComponent16);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    final _text_4 = import11.appendText(_el_0, ' ');
    final _el_5 = import11.appendSpan(doc, _el_0);
    this.addShimE(_el_5);
    final _el_6 = import11.appendElement(doc, _el_5, 'strong');
    this.addShimE(_el_6);
    _el_6.append(this._textBinding_7.element);
    this._pipe_date_0_1 = import20.pureProxy1(import10.unsafeCast<ViewHistoryItemTimelineDetailComponent0>(this.parentView.parentView.parentView)._pipe_date_0.transform);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_key = import10.unsafeCast<String>(import10.unsafeCast<_ViewHistoryItemTimelineDetailComponent1>(this.parentView.parentView).locals['\$implicit']);
    this._NgIf_1_9.ngIf = (_ctx.fieldsChangedValues[local_key][_ctx.cKey] != null);
    this._NgIf_3_9.ngIf = (_ctx.fieldsChangedValues[local_key][_ctx.cKey] == null);
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
    this._textBinding_7.updateText(import19.interpolate0(this._pipe_date_0_1(_ctx.fieldsChangedValues[local_key][_ctx.pKey])));
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
  }
}

import14.EmbeddedView<void> viewFactory_HistoryItemTimelineDetailComponent14(import17.RenderView parentView, int parentIndex) {
  return _ViewHistoryItemTimelineDetailComponent14(parentView, parentIndex);
}

class _ViewHistoryItemTimelineDetailComponent15 extends import14.EmbeddedView<import2.HistoryItemTimelineDetailComponent> {
  _ViewHistoryItemTimelineDetailComponent15(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import9.document;
    final _el_0 = doc.createElement('span');
    this.addShimE(_el_0);
    final _text_1 = import11.appendText(_el_0, import19.interpolateString0(import2.HistoryItemTimelineDetailComponent.changedFromLabel));
    this.initRootNode(_el_0);
  }
}

import14.EmbeddedView<void> viewFactory_HistoryItemTimelineDetailComponent15(import17.RenderView parentView, int parentIndex) {
  return _ViewHistoryItemTimelineDetailComponent15(parentView, parentIndex);
}

class _ViewHistoryItemTimelineDetailComponent16 extends import14.EmbeddedView<import2.HistoryItemTimelineDetailComponent> {
  _ViewHistoryItemTimelineDetailComponent16(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import9.document;
    final _el_0 = doc.createElement('span');
    this.addShimE(_el_0);
    final _text_1 = import11.appendText(_el_0, import19.interpolateString0(import2.HistoryItemTimelineDetailComponent.wasLabel));
    this.initRootNode(_el_0);
  }
}

import14.EmbeddedView<void> viewFactory_HistoryItemTimelineDetailComponent16(import17.RenderView parentView, int parentIndex) {
  return _ViewHistoryItemTimelineDetailComponent16(parentView, parentIndex);
}

final List<dynamic> styles$HistoryItemTimelineDetailComponentHost = const [];

// Host for component HistoryItemTimelineDetailComponent in asset:auge_web/lib/src/history_timeline/history_item_timeline_detail_component.dart (changeDetection: Default)
class _ViewHistoryItemTimelineDetailComponentHost0 extends import21.HostView<import2.HistoryItemTimelineDetailComponent> {
  _ViewHistoryItemTimelineDetailComponentHost0(import22.Injector injector) : super(injector);
  @override
  void build() {
    // Child component HistoryItemTimelineDetailComponent in asset:auge_web/lib/src/history_timeline/history_item_timeline_detail_component.dart (changeDetection: Default)
    this.componentView = ViewHistoryItemTimelineDetailComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.HistoryItemTimelineDetailComponent();
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (((!import10.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectChanges();
  }
}

import21.HostView<import2.HistoryItemTimelineDetailComponent> viewFactory_HistoryItemTimelineDetailComponentHost0(import22.Injector injector) {
  return _ViewHistoryItemTimelineDetailComponentHost0(injector);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HistoryItemTimelineDetailComponent, HistoryItemTimelineDetailComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}

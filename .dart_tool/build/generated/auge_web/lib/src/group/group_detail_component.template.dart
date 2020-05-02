// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'group_detail_component.dart';
export 'group_detail_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'group_detail_component.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/focus/focus.template.dart' as _ref2;
import 'package:angular_components/laminate/components/modal/modal.template.dart' as _ref3;
import 'package:angular_components/laminate/overlay/module.template.dart' as _ref4;
import 'package:angular_components/material_button/material_button.template.dart' as _ref5;
import 'package:angular_components/material_checkbox/material_checkbox.template.dart' as _ref6;
import 'package:angular_components/material_chips/material_chip.template.dart' as _ref7;
import 'package:angular_components/material_chips/material_chips.template.dart' as _ref8;
import 'package:angular_components/material_dialog/material_dialog.template.dart' as _ref9;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref10;
import 'package:angular_components/material_input/material_auto_suggest_input.template.dart' as _ref11;
import 'package:angular_components/material_input/material_input.template.dart' as _ref12;
import 'package:angular_components/material_radio/material_radio.template.dart' as _ref13;
import 'package:angular_components/material_radio/material_radio_group.template.dart' as _ref14;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref15;
import 'package:angular_components/model/selection/selection_options.template.dart' as _ref16;
import 'package:angular_components/model/selection/string_selection_options.template.dart' as _ref17;
import 'package:angular_components/model/ui/has_factory.template.dart' as _ref18;
import 'package:angular_router/angular_router.template.dart' as _ref19;
import 'package:auge_web/route/app_routes.template.dart' as _ref20;
import 'package:auge_web/services/common_service.template.dart' as _ref21;
import 'package:auge_web/src/group/group_service.template.dart' as _ref22;
import 'package:auge_web/src/user/user_service.template.dart' as _ref23;
import 'package:auge_web/src/group/group_detail_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'group_detail_component.dart' as import2;
import 'package:angular_components/laminate/components/modal/modal.template.dart' as import3;
import 'package:angular_components/laminate/components/modal/modal.dart' as import4;
import 'package:angular_components/material_dialog/material_dialog.template.dart' as import5;
import 'package:angular_components/material_dialog/material_dialog.dart' as import6;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular_components/material_input/material_input.template.dart' as import9;
import 'package:angular_components/material_input/deferred_validator.dart' as import10;
import 'package:angular_forms/src/directives/ng_model.dart' as import11;
import 'package:angular_components/material_input/material_input.dart' as import12;
import 'package:angular_components/material_input/material_input_default_value_accessor.dart' as import13;
import 'package:angular_components/material_radio/material_radio_group.template.dart' as import14;
import 'package:angular_components/material_radio/material_radio_group.dart' as import15;
import 'package:angular/src/common/directives/ng_for.dart' as import16;
import 'package:angular_components/material_input/material_auto_suggest_input.template.dart' as import17;
import 'package:angular_components/material_input/material_auto_suggest_input.dart' as import18;
import 'package:angular_components/material_checkbox/material_checkbox.template.dart' as import19;
import 'package:angular_components/material_checkbox/material_checkbox.dart' as import20;
import 'package:angular_components/material_button/material_button.template.dart' as import21;
import 'package:angular_components/material_button/material_button.dart' as import22;
import 'package:angular_components/focus/focus.dart' as import23;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import24;
import 'package:angular/src/core/linker/views/view.dart' as import25;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import27;
import 'package:angular/src/runtime.dart' as import28;
import 'package:angular/src/di/errors.dart' as import29;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import30;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import31;
import 'package:angular/src/runtime/dom_helpers.dart' as import32;
import 'package:angular/src/core/zone/ng_zone.dart' as import33;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/runtime/interpolate.dart' as import35;
import 'package:angular_components/utils/id_generator/id_generator.dart' as import36;
import 'package:angular_components/src/laminate/popup/popup_size_provider.dart' as import37;
import 'package:angular_components/theme/dark_theme.dart' as import38;
import 'package:angular/src/core/di/opaque_token.dart' as import39;
import 'package:angular_components/src/laminate/popup/popup_ref.dart' as import40;
import 'package:angular_forms/src/directives/ng_control.dart' as import41;
import 'package:angular_components/material_input/base_material_input.dart' as import42;
import 'package:angular_components/utils/angular/reference/reference.dart' as import43;
import 'package:angular_components/focus/focus_interface.dart' as import44;
import 'package:angular_components/interfaces/has_disabled.dart' as import45;
import 'package:angular_components/model/ui/has_renderer.dart' as import46;
import 'package:angular_components/model/selection/selection_container.dart' as import47;
import 'package:angular_components/model/ui/highlight_provider.dart' as import48;
import 'package:angular_components/mixins/material_dropdown_base.dart' as import49;
import 'package:angular_components/model/ui/has_factory.dart' as import50;
import 'package:angular_components/button_decorator/button_decorator.dart' as import51;
import 'package:angular_components/content/deferred_content_aware.dart' as import52;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import54;
import 'package:angular/src/core/linker/views/render_view.dart' as import55;
import 'package:angular/src/runtime/text_binding.dart' as import56;
import 'package:angular_components/material_radio/material_radio.template.dart' as import57;
import 'package:angular_components/material_radio/material_radio.dart' as import58;
import 'package:auge_shared/domain/general/group.dart' as import59;
import 'package:angular_components/material_chips/material_chips.template.dart' as import60;
import 'package:angular_components/material_chips/material_chips.dart' as import61;
import 'package:angular_components/material_chips/material_chip.template.dart' as import62;
import 'package:angular_components/material_chips/material_chip.dart' as import63;
import 'package:auge_shared/domain/general/user.dart' as import64;
import 'package:angular/src/core/linker/views/host_view.dart' as import65;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import66;
import 'package:angular_components/model/math/box.dart' as import67;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import68;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import69;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import70;
import 'package:angular/src/di/injector/injector.dart' as import71;
import 'package:angular_components/utils/browser/window/module.dart' as import72;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import73;
import 'package:angular_components/utils/disposer/disposer.dart' as import74;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import75;
import 'package:angular/src/core/linker/component_loader.dart' as import76;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import77;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import78;
import 'package:angular_components/laminate/overlay/module.dart' as import79;
import '../user/user_service.dart' as import80;
import '../auth/auth_service.dart' as import81;
import '../../services/auge_api_service.dart' as import82;
import 'group_service.dart' as import83;
import 'package:angular_router/src/location/location.dart' as import84;

final List<dynamic> styles$GroupDetailComponent = [import0.styles];

// View for component GroupDetailComponent in asset:auge_web/lib/src/group/group_detail_component.dart (changeDetection: Default)
class ViewGroupDetailComponent0 extends import1.ComponentView<import2.GroupDetailComponent> {
  bool _query_MaterialRadioComponent_11_0_isDirty = true;
  import3.ViewModalComponent0 _compView_0;
  import4.ModalComponent _ModalComponent_0_5;
  import5.ViewMaterialDialogComponent0 _compView_1;
  import6.MaterialDialogComponent _MaterialDialogComponent_1_5;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  import9.ViewMaterialInputComponent0 _compView_6;
  import10.DeferredValidator _DeferredValidator_6_5;
  List<dynamic> _NgValidators_6_6;
  import11.NgModel _NgModel_6_7;
  import12.MaterialInputComponent _MaterialInputComponent_6_9;
  import13.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_6_11;
  import14.ViewMaterialRadioGroupComponent0 _compView_11;
  import11.NgModel _NgModel_11_5;
  import15.MaterialRadioGroupComponent _MaterialRadioGroupComponent_11_7;
  ViewContainer _appEl_12;
  import16.NgFor _NgFor_12_9;
  import17.ViewMaterialAutoSuggestInputComponent0 _compView_14;
  import18.MaterialAutoSuggestInputComponent _MaterialAutoSuggestInputComponent_14_5;
  import17.ViewMaterialAutoSuggestInputComponent0 _compView_16;
  import18.MaterialAutoSuggestInputComponent _MaterialAutoSuggestInputComponent_16_5;
  import17.ViewMaterialAutoSuggestInputComponent0 _compView_18;
  import18.MaterialAutoSuggestInputComponent _MaterialAutoSuggestInputComponent_18_5;
  ViewContainer _appEl_20;
  import16.NgFor _NgFor_20_9;
  import19.ViewMaterialCheckboxComponent0 _compView_21;
  import11.NgModel _NgModel_21_5;
  import20.MaterialCheckboxComponent _MaterialCheckboxComponent_21_7;
  import21.ViewMaterialButtonComponent0 _compView_23;
  dynamic _AcxDarkTheme_23_5;
  import22.MaterialButtonComponent _MaterialButtonComponent_23_6;
  import21.ViewMaterialButtonComponent0 _compView_26;
  import23.AutoFocusDirective _AutoFocusDirective_26_5;
  dynamic _AcxDarkTheme_26_6;
  import22.MaterialButtonComponent _MaterialButtonComponent_26_7;
  bool _expr_0;
  String _expr_1;
  var _expr_2;
  var _expr_7;
  var _expr_8;
  String _expr_12;
  var _expr_13;
  var _expr_18;
  var _expr_19;
  String _expr_24;
  var _expr_25;
  var _expr_30;
  var _expr_31;
  var _expr_32;
  String _expr_36;
  var _expr_37;
  var _expr_42;
  var _expr_43;
  var _expr_44;
  var _expr_46;
  var _expr_47;
  bool _expr_49;
  static import24.ComponentStyles _componentStyles;
  ViewGroupDetailComponent0(import25.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import27.document.createElement('auge-group-detail');
  }
  static String get _debugComponentUrl {
    return (import28.isDevMode ? 'asset:auge_web/lib/src/group/group_detail_component.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import27.HtmlElement parentRenderNode = this.initViewRoot();
    // Child component ModalComponent in asset:angular_components/lib/laminate/components/modal/modal.dart (changeDetection: OnPush)
    this._compView_0 = import3.ViewModalComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    parentRenderNode.append(_el_0);
    this.addShimC(_el_0);
    this._ModalComponent_0_5 = (import28.isDevMode
        ? import29.debugInjectorWrap(import4.ModalComponent, () {
            return import4.ModalComponent(this.parentView.injectorGet(import30.OverlayService, this.parentIndex), _el_0, this.parentView.injectorGet(import31.DomService, this.parentIndex), this.parentView.injectorGetOptional(import4.Modal, this.parentIndex), this.parentView.injectorGetOptional(import4.GlobalModalStack, this.parentIndex));
          })
        : import4.ModalComponent(this.parentView.injectorGet(import30.OverlayService, this.parentIndex), _el_0, this.parentView.injectorGet(import31.DomService, this.parentIndex), this.parentView.injectorGetOptional(import4.Modal, this.parentIndex), this.parentView.injectorGetOptional(import4.GlobalModalStack, this.parentIndex)));
    // Child component MaterialDialogComponent in asset:angular_components/lib/material_dialog/material_dialog.dart (changeDetection: OnPush)
    this._compView_1 = import5.ViewMaterialDialogComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    import32.setAttribute(_el_1, 'headered', '');
    this.addShimC(_el_1);
    this._MaterialDialogComponent_1_5 = (import28.isDevMode
        ? import29.debugInjectorWrap(import6.MaterialDialogComponent, () {
            return import6.MaterialDialogComponent(_el_1, this.parentView.injectorGet(import31.DomService, this.parentIndex), this._compView_1, this.parentView.injectorGet(import33.NgZone, this.parentIndex), this._ModalComponent_0_5);
          })
        : import6.MaterialDialogComponent(_el_1, this.parentView.injectorGet(import31.DomService, this.parentIndex), this._compView_1, this.parentView.injectorGet(import33.NgZone, this.parentIndex), this._ModalComponent_0_5));
    final doc = import27.document;
    final _el_2 = doc.createElement('div');
    import32.setAttribute(_el_2, 'header', '');
    this.addShimC(_el_2);
    final _anchor_3 = import32.appendAnchor(_el_2);
    this._appEl_3 = ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_GroupDetailComponent1);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    final _anchor_4 = import32.appendAnchor(_el_2);
    this._appEl_4 = ViewContainer(4, 2, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_GroupDetailComponent2);
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    final _el_5 = doc.createElement('div');
    this.updateChildClass(_el_5, 'w3-row');
    this.addShimC(_el_5);
    // Child component MaterialInputComponent in asset:angular_components/lib/material_input/material_input.dart (changeDetection: OnPush)
    this._compView_6 = import9.ViewMaterialInputComponent0(this, 6);
    final _el_6 = this._compView_6.rootElement;
    _el_5.append(_el_6);
    this.updateChildClassNonHtml(_el_6, import35.interpolateString2('', 'w3-col l12', ' ', import12.MaterialInputComponent.hostClass, ''));
    import32.setAttribute(_el_6, 'floatingLabel', '');
    import32.setAttribute(_el_6, 'required', '');
    this.addShimC(_el_6);
    this._DeferredValidator_6_5 = import10.DeferredValidator();
    this._NgValidators_6_6 = [this._DeferredValidator_6_5];
    this._NgModel_6_7 = import11.NgModel(this._NgValidators_6_6, null);
    this._MaterialInputComponent_6_9 = import12.MaterialInputComponent(null, null, this._NgModel_6_7, this._compView_6, this._DeferredValidator_6_5);
    this._MaterialInputDefaultValueAccessor_6_11 = import13.MaterialInputDefaultValueAccessor(this._MaterialInputComponent_6_9, this._NgModel_6_7);
    this._compView_6.createAndProject(this._MaterialInputComponent_6_9, [const [], const []]);
    final _el_7 = doc.createElement('div');
    this.updateChildClass(_el_7, 'w3-row');
    this.addShimC(_el_7);
    final _el_8 = import32.appendElement(doc, _el_7, 'label');
    this.updateChildClass(_el_8, 'w3-col l12');
    this.addShimE(_el_8);
    final _text_9 = import32.appendText(_el_8, import35.interpolateString0(import2.GroupDetailComponent.groupTypeLabel));
    final _el_10 = doc.createElement('div');
    this.updateChildClass(_el_10, 'w3-row');
    this.addShimC(_el_10);
    // Child component MaterialRadioGroupComponent in asset:angular_components/lib/material_radio/material_radio_group.dart (changeDetection: OnPush)
    this._compView_11 = import14.ViewMaterialRadioGroupComponent0(this, 11);
    final _el_11 = this._compView_11.rootElement;
    _el_10.append(_el_11);
    this.updateChildClassNonHtml(_el_11, 'w3-col l12');
    this.addShimC(_el_11);
    this._NgModel_11_5 = import11.NgModel(null, null);
    this._MaterialRadioGroupComponent_11_7 = (import28.isDevMode
        ? import29.debugInjectorWrap(import15.MaterialRadioGroupComponent, () {
            return import15.MaterialRadioGroupComponent(this.parentView.injectorGet(import33.NgZone, this.parentIndex), this._NgModel_11_5);
          })
        : import15.MaterialRadioGroupComponent(this.parentView.injectorGet(import33.NgZone, this.parentIndex), this._NgModel_11_5));
    final _anchor_12 = import32.createAnchor();
    this._appEl_12 = ViewContainer(12, 11, this, _anchor_12);
    TemplateRef _TemplateRef_12_8 = TemplateRef(this._appEl_12, viewFactory_GroupDetailComponent3);
    this._NgFor_12_9 = import16.NgFor(this._appEl_12, _TemplateRef_12_8);
    this._compView_11.createAndProject(this._MaterialRadioGroupComponent_11_7, [
      [this._appEl_12]
    ]);
    final _el_13 = doc.createElement('div');
    this.updateChildClass(_el_13, 'w3-row');
    this.addShimC(_el_13);
    // Child component MaterialAutoSuggestInputComponent in asset:angular_components/lib/material_input/material_auto_suggest_input.dart (changeDetection: Default)
    this._compView_14 = import17.ViewMaterialAutoSuggestInputComponent0(this, 14);
    final _el_14 = this._compView_14.rootElement;
    _el_13.append(_el_14);
    this.updateChildClassNonHtml(_el_14, 'w3-col l12');
    this.addShimC(_el_14);
    this._MaterialAutoSuggestInputComponent_14_5 = (import28.isDevMode
        ? import29.debugInjectorWrap(import18.MaterialAutoSuggestInputComponent, () {
            return import18.MaterialAutoSuggestInputComponent(null, this.parentView.injectorGetOptional(import36.IdGenerator, this.parentIndex), this._compView_14, this.parentView.injectorGetOptional(import37.PopupSizeProvider, this.parentIndex));
          })
        : import18.MaterialAutoSuggestInputComponent(null, this.parentView.injectorGetOptional(import36.IdGenerator, this.parentIndex), this._compView_14, this.parentView.injectorGetOptional(import37.PopupSizeProvider, this.parentIndex)));
    this._compView_14.createAndProject(this._MaterialAutoSuggestInputComponent_14_5, [const [], const [], const []]);
    final _el_15 = doc.createElement('div');
    this.updateChildClass(_el_15, 'w3-row');
    this.addShimC(_el_15);
    // Child component MaterialAutoSuggestInputComponent in asset:angular_components/lib/material_input/material_auto_suggest_input.dart (changeDetection: Default)
    this._compView_16 = import17.ViewMaterialAutoSuggestInputComponent0(this, 16);
    final _el_16 = this._compView_16.rootElement;
    _el_15.append(_el_16);
    this.updateChildClassNonHtml(_el_16, 'w3-col l12');
    this.addShimC(_el_16);
    this._MaterialAutoSuggestInputComponent_16_5 = (import28.isDevMode
        ? import29.debugInjectorWrap(import18.MaterialAutoSuggestInputComponent, () {
            return import18.MaterialAutoSuggestInputComponent(null, this.parentView.injectorGetOptional(import36.IdGenerator, this.parentIndex), this._compView_16, this.parentView.injectorGetOptional(import37.PopupSizeProvider, this.parentIndex));
          })
        : import18.MaterialAutoSuggestInputComponent(null, this.parentView.injectorGetOptional(import36.IdGenerator, this.parentIndex), this._compView_16, this.parentView.injectorGetOptional(import37.PopupSizeProvider, this.parentIndex)));
    this._compView_16.createAndProject(this._MaterialAutoSuggestInputComponent_16_5, [const [], const [], const []]);
    final _el_17 = doc.createElement('div');
    this.updateChildClass(_el_17, 'w3-row');
    this.addShimC(_el_17);
    // Child component MaterialAutoSuggestInputComponent in asset:angular_components/lib/material_input/material_auto_suggest_input.dart (changeDetection: Default)
    this._compView_18 = import17.ViewMaterialAutoSuggestInputComponent0(this, 18);
    final _el_18 = this._compView_18.rootElement;
    _el_17.append(_el_18);
    import32.setAttribute(_el_18, 'style', 'width: 100%');
    this.addShimC(_el_18);
    this._MaterialAutoSuggestInputComponent_18_5 = (import28.isDevMode
        ? import29.debugInjectorWrap(import18.MaterialAutoSuggestInputComponent, () {
            return import18.MaterialAutoSuggestInputComponent(null, this.parentView.injectorGetOptional(import36.IdGenerator, this.parentIndex), this._compView_18, this.parentView.injectorGetOptional(import37.PopupSizeProvider, this.parentIndex));
          })
        : import18.MaterialAutoSuggestInputComponent(null, this.parentView.injectorGetOptional(import36.IdGenerator, this.parentIndex), this._compView_18, this.parentView.injectorGetOptional(import37.PopupSizeProvider, this.parentIndex)));
    this._compView_18.createAndProject(this._MaterialAutoSuggestInputComponent_18_5, [const [], const [], const []]);
    final _el_19 = doc.createElement('div');
    this.updateChildClass(_el_19, 'w3-row');
    this.addShimC(_el_19);
    final _anchor_20 = import32.appendAnchor(_el_19);
    this._appEl_20 = ViewContainer(20, 19, this, _anchor_20);
    TemplateRef _TemplateRef_20_8 = TemplateRef(this._appEl_20, viewFactory_GroupDetailComponent4);
    this._NgFor_20_9 = import16.NgFor(this._appEl_20, _TemplateRef_20_8);
    // Child component MaterialCheckboxComponent in asset:angular_components/lib/material_checkbox/material_checkbox.dart (changeDetection: OnPush)
    this._compView_21 = import19.ViewMaterialCheckboxComponent0(this, 21);
    final _el_21 = this._compView_21.rootElement;
    this.addShimC(_el_21);
    this._NgModel_21_5 = import11.NgModel(null, null);
    this._MaterialCheckboxComponent_21_7 = import20.MaterialCheckboxComponent(_el_21, this._compView_21, this._NgModel_21_5, null, null);
    this._compView_21.createAndProject(this._MaterialCheckboxComponent_21_7, [const []]);
    final _el_22 = doc.createElement('div');
    import32.setAttribute(_el_22, 'footer', '');
    this.addShimC(_el_22);
    // Child component MaterialButtonComponent in asset:angular_components/lib/material_button/material_button.dart (changeDetection: OnPush)
    this._compView_23 = import21.ViewMaterialButtonComponent0(this, 23);
    final _el_23 = this._compView_23.rootElement;
    _el_22.append(_el_23);
    this.addShimC(_el_23);
    this._AcxDarkTheme_23_5 = (import28.isDevMode
        ? import29.debugInjectorWrap(import38.AcxDarkTheme, () {
            return import38.AcxDarkTheme(this.parentView.injectorGetOptional(const import39.OpaqueToken<dynamic>('acxDarkTheme'), this.parentIndex));
          })
        : import38.AcxDarkTheme(this.parentView.injectorGetOptional(const import39.OpaqueToken<dynamic>('acxDarkTheme'), this.parentIndex)));
    this._MaterialButtonComponent_23_6 = import22.MaterialButtonComponent(_el_23, this._AcxDarkTheme_23_5, this._compView_23, null);
    final _text_24 = import32.createText(import35.interpolateString0(import2.GroupDetailComponent.saveButtonLabel));
    final _text_25 = import32.createText(' ');
    this._compView_23.createAndProject(this._MaterialButtonComponent_23_6, [
      [_text_24, _text_25]
    ]);
    // Child component MaterialButtonComponent in asset:angular_components/lib/material_button/material_button.dart (changeDetection: OnPush)
    this._compView_26 = import21.ViewMaterialButtonComponent0(this, 26);
    final _el_26 = this._compView_26.rootElement;
    _el_22.append(_el_26);
    import32.setAttribute(_el_26, 'autoFocus', '');
    this.addShimC(_el_26);
    this._AutoFocusDirective_26_5 = (import28.isDevMode
        ? import29.debugInjectorWrap(import23.AutoFocusDirective, () {
            return import23.AutoFocusDirective(_el_26, this.parentView.injectorGet(import31.DomService, this.parentIndex), null, this._ModalComponent_0_5, this.parentView.injectorGetOptional(import40.PopupRef, this.parentIndex));
          })
        : import23.AutoFocusDirective(_el_26, this.parentView.injectorGet(import31.DomService, this.parentIndex), null, this._ModalComponent_0_5, this.parentView.injectorGetOptional(import40.PopupRef, this.parentIndex)));
    this._AcxDarkTheme_26_6 = (import28.isDevMode
        ? import29.debugInjectorWrap(import38.AcxDarkTheme, () {
            return import38.AcxDarkTheme(this.parentView.injectorGetOptional(const import39.OpaqueToken<dynamic>('acxDarkTheme'), this.parentIndex));
          })
        : import38.AcxDarkTheme(this.parentView.injectorGetOptional(const import39.OpaqueToken<dynamic>('acxDarkTheme'), this.parentIndex)));
    this._MaterialButtonComponent_26_7 = import22.MaterialButtonComponent(_el_26, this._AcxDarkTheme_26_6, this._compView_26, null);
    final _text_27 = import32.createText(import35.interpolateString0(import2.GroupDetailComponent.closeButtonLabel));
    final _text_28 = import32.createText(' ');
    this._compView_26.createAndProject(this._MaterialButtonComponent_26_7, [
      [_text_27, _text_28]
    ]);
    this._compView_1.createAndProject(this._MaterialDialogComponent_1_5, [
      [_el_2],
      [_el_5, _el_7, _el_10, _el_13, _el_15, _el_17, _el_19, _el_21],
      [_el_22]
    ]);
    this._compView_0.createAndProject(this._ModalComponent_0_5, [
      [_el_1]
    ]);
    final subscription_0 = this._NgModel_6_7.update.listen(this.eventHandler1(this._handleEvent_0));
    final subscription_1 = this._NgModel_11_5.update.listen(this.eventHandler1(this._handleEvent_1));
    final subscription_2 = this._MaterialAutoSuggestInputComponent_14_5.textChanged.listen(this.eventHandler1(this._handleEvent_2));
    final subscription_3 = this._MaterialAutoSuggestInputComponent_16_5.textChanged.listen(this.eventHandler1(this._handleEvent_3));
    final subscription_4 = this._MaterialAutoSuggestInputComponent_18_5.textChanged.listen(this.eventHandler1(this._handleEvent_4));
    final subscription_5 = this._NgModel_21_5.update.listen(this.eventHandler1(this._handleEvent_5));
    final subscription_6 = this._MaterialButtonComponent_23_6.trigger.listen(this.eventHandler0(_ctx.saveGroup));
    final subscription_7 = this._MaterialButtonComponent_26_7.trigger.listen(this.eventHandler0(_ctx.closeDetail));
    this.initSubscriptions([subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5, subscription_6, subscription_7]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 28)) {
      if ((6 == nodeIndex)) {
        if (identical(token, import10.DeferredValidator)) {
          return this._DeferredValidator_6_5;
        }
        if (identical(token, const import39.MultiToken<dynamic>('NgValidators'))) {
          return this._NgValidators_6_6;
        }
        if ((identical(token, import11.NgModel) || identical(token, import41.NgControl))) {
          return this._NgModel_6_7;
        }
        if (((((identical(token, import12.MaterialInputComponent) || identical(token, import42.BaseMaterialInput)) || identical(token, import43.ReferenceDirective)) || identical(token, import44.Focusable)) || identical(token, import45.HasDisabled))) {
          return this._MaterialInputComponent_6_9;
        }
      }
      if (((11 <= nodeIndex) && (nodeIndex <= 12))) {
        if ((identical(token, import11.NgModel) || identical(token, import41.NgControl))) {
          return this._NgModel_11_5;
        }
        if (identical(token, import15.MaterialRadioGroupComponent)) {
          return this._MaterialRadioGroupComponent_11_7;
        }
      }
      if (((((((((((identical(token, import18.MaterialAutoSuggestInputComponent) || identical(token, import45.HasDisabled)) || identical(token, import46.HasRenderer)) || identical(token, import47.SelectionContainer)) || identical(token, import48.HighlightProvider)) || identical(token, import49.DropdownHandle)) || identical(token, import46.HasComponentRenderer)) || identical(token, import50.HasFactoryRenderer)) || identical(token, import44.Focusable)) || identical(token, import37.PopupSizeProvider)) && (14 == nodeIndex))) {
        return this._MaterialAutoSuggestInputComponent_14_5;
      }
      if (((((((((((identical(token, import18.MaterialAutoSuggestInputComponent) || identical(token, import45.HasDisabled)) || identical(token, import46.HasRenderer)) || identical(token, import47.SelectionContainer)) || identical(token, import48.HighlightProvider)) || identical(token, import49.DropdownHandle)) || identical(token, import46.HasComponentRenderer)) || identical(token, import50.HasFactoryRenderer)) || identical(token, import44.Focusable)) || identical(token, import37.PopupSizeProvider)) && (16 == nodeIndex))) {
        return this._MaterialAutoSuggestInputComponent_16_5;
      }
      if (((((((((((identical(token, import18.MaterialAutoSuggestInputComponent) || identical(token, import45.HasDisabled)) || identical(token, import46.HasRenderer)) || identical(token, import47.SelectionContainer)) || identical(token, import48.HighlightProvider)) || identical(token, import49.DropdownHandle)) || identical(token, import46.HasComponentRenderer)) || identical(token, import50.HasFactoryRenderer)) || identical(token, import44.Focusable)) || identical(token, import37.PopupSizeProvider)) && (18 == nodeIndex))) {
        return this._MaterialAutoSuggestInputComponent_18_5;
      }
      if ((21 == nodeIndex)) {
        if ((identical(token, import11.NgModel) || identical(token, import41.NgControl))) {
          return this._NgModel_21_5;
        }
        if (identical(token, import45.HasDisabled)) {
          return this._MaterialCheckboxComponent_21_7;
        }
      }
      if (((23 <= nodeIndex) && (nodeIndex <= 25))) {
        if (identical(token, import38.AcxDarkTheme)) {
          return this._AcxDarkTheme_23_5;
        }
        if (((identical(token, import22.MaterialButtonComponent) || identical(token, import51.ButtonDirective)) || identical(token, import45.HasDisabled))) {
          return this._MaterialButtonComponent_23_6;
        }
      }
      if ((26 <= nodeIndex)) {
        if (identical(token, import38.AcxDarkTheme)) {
          return this._AcxDarkTheme_26_6;
        }
        if (((identical(token, import22.MaterialButtonComponent) || identical(token, import51.ButtonDirective)) || identical(token, import45.HasDisabled))) {
          return this._MaterialButtonComponent_26_7;
        }
      }
      if (((identical(token, import4.ModalComponent) || identical(token, import52.DeferredContentAware)) || identical(token, import4.Modal))) {
        return this._ModalComponent_0_5;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    final currVal_0 = _ctx.modalVisible;
    if (import28.checkBinding(this._expr_0, currVal_0, 'modalVisible', '')) {
      this._ModalComponent_0_5.visible = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    changed = false;
    final currVal_1 = _ctx.dialogError;
    if (import28.checkBinding(this._expr_1, currVal_1, 'dialogError', '')) {
      this._MaterialDialogComponent_1_5.error = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._compView_1.markAsCheckOnce();
    }
    this._NgIf_3_9.ngIf = (_ctx.group.id == null);
    this._NgIf_4_9.ngIf = (_ctx.group.id != null);
    changed = false;
    final currVal_2 = _ctx.group.name;
    if (import28.checkBinding(this._expr_2, currVal_2, 'group.name', '')) {
      this._NgModel_6_7.model = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    if (changed) {
      this._NgModel_6_7.ngAfterChanges();
    }
    if (((!import28.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_6_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      if (!identical(import2.GroupDetailComponent.nameLabel, null)) {
        this._MaterialInputComponent_6_9.label = import2.GroupDetailComponent.nameLabel;
        changed = true;
      }
      this._MaterialInputComponent_6_9.floatingLabel = true;
      changed = true;
      if (!identical(import2.GroupDetailComponent.requiredValueMsg, null)) {
        this._MaterialInputComponent_6_9.requiredErrorMsg = import2.GroupDetailComponent.requiredValueMsg;
        changed = true;
      }
      this._MaterialInputComponent_6_9.required = true;
      changed = true;
    }
    if (changed) {
      this._compView_6.markAsCheckOnce();
    }
    changed = false;
    final currVal_7 = _ctx.group.groupType;
    if (import28.checkBinding(this._expr_7, currVal_7, 'group.groupType', '')) {
      this._NgModel_11_5.model = currVal_7;
      changed = true;
      this._expr_7 = currVal_7;
    }
    if (changed) {
      this._NgModel_11_5.ngAfterChanges();
    }
    if (((!import28.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_11_5.ngOnInit();
    }
    changed = false;
    if (changed) {
      this._compView_11.markAsCheckOnce();
    }
    final currVal_8 = _ctx.groupTypes;
    if (import28.checkBinding(this._expr_8, currVal_8, 'groupTypes', '')) {
      this._NgFor_12_9.ngForOf = currVal_8;
      this._expr_8 = currVal_8;
    }
    if ((!import28.debugThrowIfChanged)) {
      this._NgFor_12_9.ngDoCheck();
    }
    changed = false;
    if (firstCheck) {
      this._MaterialAutoSuggestInputComponent_14_5.floatingLabel = true;
      changed = true;
      this._MaterialAutoSuggestInputComponent_14_5.trailingGlyph = 'search';
      changed = true;
      if (!identical(import2.GroupDetailComponent.superGroupLabel, null)) {
        this._MaterialAutoSuggestInputComponent_14_5.label = import2.GroupDetailComponent.superGroupLabel;
        changed = true;
      }
      this._MaterialAutoSuggestInputComponent_14_5.filterSuggestions = true;
      changed = true;
      this._MaterialAutoSuggestInputComponent_14_5.popupMatchInputWidth = true;
      changed = true;
      this._MaterialAutoSuggestInputComponent_14_5.showClearIcon = true;
      changed = true;
      if (!identical(import2.GroupDetailComponent.noMatchLabel, null)) {
        this._MaterialAutoSuggestInputComponent_14_5.emptyPlaceholder = import2.GroupDetailComponent.noMatchLabel;
        changed = true;
      }
      this._MaterialAutoSuggestInputComponent_14_5.limit = 10;
      changed = true;
    }
    final currVal_12 = _ctx.superGroupInputText;
    if (import28.checkBinding(this._expr_12, currVal_12, 'superGroupInputText', '')) {
      this._MaterialAutoSuggestInputComponent_14_5.inputText = currVal_12;
      changed = true;
      this._expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.superGroupSingleSelectModel;
    if (import28.checkBinding(this._expr_13, currVal_13, 'superGroupSingleSelectModel', '')) {
      this._MaterialAutoSuggestInputComponent_14_5.selectionInput = currVal_13;
      changed = true;
      this._expr_13 = currVal_13;
    }
    final currVal_18 = _ctx.superGroupItemRenderer;
    if (import28.checkBinding(this._expr_18, currVal_18, 'superGroupItemRenderer', '')) {
      this._MaterialAutoSuggestInputComponent_14_5.itemRenderer = currVal_18;
      changed = true;
      this._expr_18 = currVal_18;
    }
    final currVal_19 = _ctx.superGroupOptions;
    if (import28.checkBinding(this._expr_19, currVal_19, 'superGroupOptions', '')) {
      this._MaterialAutoSuggestInputComponent_14_5.optionsInput = currVal_19;
      changed = true;
      this._expr_19 = currVal_19;
    }
    if (changed) {
      this._MaterialAutoSuggestInputComponent_14_5.ngAfterChanges();
    }
    if (((!import28.debugThrowIfChanged) && firstCheck)) {
      this._MaterialAutoSuggestInputComponent_14_5.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      this._MaterialAutoSuggestInputComponent_16_5.floatingLabel = true;
      changed = true;
      this._MaterialAutoSuggestInputComponent_16_5.trailingGlyph = 'search';
      changed = true;
      if (!identical(import2.GroupDetailComponent.leaderLabel, null)) {
        this._MaterialAutoSuggestInputComponent_16_5.label = import2.GroupDetailComponent.leaderLabel;
        changed = true;
      }
      this._MaterialAutoSuggestInputComponent_16_5.filterSuggestions = true;
      changed = true;
      this._MaterialAutoSuggestInputComponent_16_5.popupMatchInputWidth = true;
      changed = true;
      this._MaterialAutoSuggestInputComponent_16_5.showClearIcon = true;
      changed = true;
      if (!identical(import2.GroupDetailComponent.noMatchLabel, null)) {
        this._MaterialAutoSuggestInputComponent_16_5.emptyPlaceholder = import2.GroupDetailComponent.noMatchLabel;
        changed = true;
      }
      this._MaterialAutoSuggestInputComponent_16_5.limit = 10;
      changed = true;
    }
    final currVal_24 = _ctx.leaderInputText;
    if (import28.checkBinding(this._expr_24, currVal_24, 'leaderInputText', '')) {
      this._MaterialAutoSuggestInputComponent_16_5.inputText = currVal_24;
      changed = true;
      this._expr_24 = currVal_24;
    }
    final currVal_25 = _ctx.leaderSingleSelectModel;
    if (import28.checkBinding(this._expr_25, currVal_25, 'leaderSingleSelectModel', '')) {
      this._MaterialAutoSuggestInputComponent_16_5.selectionInput = currVal_25;
      changed = true;
      this._expr_25 = currVal_25;
    }
    final currVal_30 = _ctx.leaderItemRenderer;
    if (import28.checkBinding(this._expr_30, currVal_30, 'leaderItemRenderer', '')) {
      this._MaterialAutoSuggestInputComponent_16_5.itemRenderer = currVal_30;
      changed = true;
      this._expr_30 = currVal_30;
    }
    final currVal_31 = _ctx.leaderFactoryRenderer;
    if (import28.checkBinding(this._expr_31, currVal_31, 'leaderFactoryRenderer', '')) {
      this._MaterialAutoSuggestInputComponent_16_5.factoryRenderer = currVal_31;
      changed = true;
      this._expr_31 = currVal_31;
    }
    final currVal_32 = _ctx.leaderOptions;
    if (import28.checkBinding(this._expr_32, currVal_32, 'leaderOptions', '')) {
      this._MaterialAutoSuggestInputComponent_16_5.optionsInput = currVal_32;
      changed = true;
      this._expr_32 = currVal_32;
    }
    if (changed) {
      this._MaterialAutoSuggestInputComponent_16_5.ngAfterChanges();
    }
    if (((!import28.debugThrowIfChanged) && firstCheck)) {
      this._MaterialAutoSuggestInputComponent_16_5.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      this._MaterialAutoSuggestInputComponent_18_5.trailingGlyph = 'search';
      changed = true;
      if (!identical(import2.GroupDetailComponent.membersLabel, null)) {
        this._MaterialAutoSuggestInputComponent_18_5.label = import2.GroupDetailComponent.membersLabel;
        changed = true;
      }
      this._MaterialAutoSuggestInputComponent_18_5.filterSuggestions = true;
      changed = true;
      this._MaterialAutoSuggestInputComponent_18_5.popupMatchInputWidth = true;
      changed = true;
      this._MaterialAutoSuggestInputComponent_18_5.showClearIcon = true;
      changed = true;
      if (!identical(import2.GroupDetailComponent.noMatchLabel, null)) {
        this._MaterialAutoSuggestInputComponent_18_5.emptyPlaceholder = import2.GroupDetailComponent.noMatchLabel;
        changed = true;
      }
      this._MaterialAutoSuggestInputComponent_18_5.limit = 10;
      changed = true;
    }
    final currVal_36 = _ctx.memberInputText;
    if (import28.checkBinding(this._expr_36, currVal_36, 'memberInputText', '')) {
      this._MaterialAutoSuggestInputComponent_18_5.inputText = currVal_36;
      changed = true;
      this._expr_36 = currVal_36;
    }
    final currVal_37 = _ctx.memberSingleSelectModel;
    if (import28.checkBinding(this._expr_37, currVal_37, 'memberSingleSelectModel', '')) {
      this._MaterialAutoSuggestInputComponent_18_5.selectionInput = currVal_37;
      changed = true;
      this._expr_37 = currVal_37;
    }
    final currVal_42 = _ctx.memberItemRenderer;
    if (import28.checkBinding(this._expr_42, currVal_42, 'memberItemRenderer', '')) {
      this._MaterialAutoSuggestInputComponent_18_5.itemRenderer = currVal_42;
      changed = true;
      this._expr_42 = currVal_42;
    }
    final currVal_43 = _ctx.factoryRenderer;
    if (import28.checkBinding(this._expr_43, currVal_43, 'factoryRenderer', '')) {
      this._MaterialAutoSuggestInputComponent_18_5.factoryRenderer = currVal_43;
      changed = true;
      this._expr_43 = currVal_43;
    }
    final currVal_44 = _ctx.memberOptions;
    if (import28.checkBinding(this._expr_44, currVal_44, 'memberOptions', '')) {
      this._MaterialAutoSuggestInputComponent_18_5.optionsInput = currVal_44;
      changed = true;
      this._expr_44 = currVal_44;
    }
    if (changed) {
      this._MaterialAutoSuggestInputComponent_18_5.ngAfterChanges();
    }
    if (((!import28.debugThrowIfChanged) && firstCheck)) {
      this._MaterialAutoSuggestInputComponent_18_5.ngOnInit();
    }
    final currVal_46 = ((_ctx.group == null) ? null : _ctx.group.members);
    if (import28.checkBinding(this._expr_46, currVal_46, 'group?.members', '')) {
      this._NgFor_20_9.ngForOf = currVal_46;
      this._expr_46 = currVal_46;
    }
    if ((!import28.debugThrowIfChanged)) {
      this._NgFor_20_9.ngDoCheck();
    }
    changed = false;
    final currVal_47 = _ctx.group.inactive;
    if (import28.checkBinding(this._expr_47, currVal_47, 'group.inactive', '')) {
      this._NgModel_21_5.model = currVal_47;
      changed = true;
      this._expr_47 = currVal_47;
    }
    if (changed) {
      this._NgModel_21_5.ngAfterChanges();
    }
    if (((!import28.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_21_5.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      if (!identical(import2.GroupDetailComponent.inactiveLabel, null)) {
        this._MaterialCheckboxComponent_21_7.label = import2.GroupDetailComponent.inactiveLabel;
        changed = true;
      }
    }
    if (changed) {
      this._compView_21.markAsCheckOnce();
    }
    changed = false;
    final bool currVal_49 = (!_ctx.validInput);
    if (import28.checkBinding(this._expr_49, currVal_49, '!validInput', '')) {
      this._MaterialButtonComponent_23_6.disabled = currVal_49;
      changed = true;
      this._expr_49 = currVal_49;
    }
    if (changed) {
      this._compView_23.markAsCheckOnce();
    }
    if (firstCheck) {
      (this._AutoFocusDirective_26_5.autoFocus = true);
    }
    if (((!import28.debugThrowIfChanged) && firstCheck)) {
      this._AutoFocusDirective_26_5.ngOnInit();
    }
    changed = false;
    if (changed) {
      this._compView_26.markAsCheckOnce();
    }
    this._appEl_3.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
    this._appEl_12.detectChangesInNestedViews();
    this._appEl_20.detectChangesInNestedViews();
    if ((!import28.debugThrowIfChanged)) {
      if (this._query_MaterialRadioComponent_11_0_isDirty) {
        this._MaterialRadioGroupComponent_11_7.radioComponents = this._appEl_12.mapNestedViews((_ViewGroupDetailComponent3 nestedView) {
          return [nestedView._MaterialRadioComponent_0_5];
        });
        this._query_MaterialRadioComponent_11_0_isDirty = false;
      }
      if (firstCheck) {
        this._MaterialRadioGroupComponent_11_7.ngAfterContentInit();
      }
      this._MaterialDialogComponent_1_5.ngAfterContentChecked();
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_1.detectHostChanges(firstCheck);
    this._compView_21.detectHostChanges(firstCheck);
    this._compView_23.detectHostChanges(firstCheck);
    this._compView_26.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
    this._compView_1.detectChanges();
    this._compView_6.detectChanges();
    this._compView_11.detectChanges();
    this._compView_14.detectChanges();
    this._compView_16.detectChanges();
    this._compView_18.detectChanges();
    this._compView_21.detectChanges();
    this._compView_23.detectChanges();
    this._compView_26.detectChanges();
    if ((!import28.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MaterialInputComponent_6_9.ngAfterViewInit();
        this._ModalComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_3.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
    this._appEl_12.destroyNestedViews();
    this._appEl_20.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._compView_1.destroyInternalState();
    this._compView_6.destroyInternalState();
    this._compView_11.destroyInternalState();
    this._compView_14.destroyInternalState();
    this._compView_16.destroyInternalState();
    this._compView_18.destroyInternalState();
    this._compView_21.destroyInternalState();
    this._compView_23.destroyInternalState();
    this._compView_26.destroyInternalState();
    this._MaterialInputComponent_6_9.ngOnDestroy();
    this._MaterialInputDefaultValueAccessor_6_11.ngOnDestroy();
    this._MaterialRadioGroupComponent_11_7.ngOnDestroy();
    this._MaterialAutoSuggestInputComponent_14_5.ngOnDestroy();
    this._MaterialAutoSuggestInputComponent_16_5.ngOnDestroy();
    this._MaterialAutoSuggestInputComponent_18_5.ngOnDestroy();
    this._MaterialCheckboxComponent_21_7.ngOnDestroy();
    this._AutoFocusDirective_26_5.ngOnDestroy();
    this._MaterialDialogComponent_1_5.ngOnDestroy();
    this._ModalComponent_0_5.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.group.name = $event;
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.group.groupType = $event;
  }

  void _handleEvent_2($event) {
    final _ctx = this.ctx;
    _ctx.superGroupInputText = $event;
  }

  void _handleEvent_3($event) {
    final _ctx = this.ctx;
    _ctx.leaderInputText = $event;
  }

  void _handleEvent_4($event) {
    final _ctx = this.ctx;
    _ctx.memberInputText = $event;
  }

  void _handleEvent_5($event) {
    final _ctx = this.ctx;
    _ctx.group.inactive = $event;
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import24.ComponentStyles.scoped(styles$GroupDetailComponent, _debugComponentUrl))));
    }
    this.componentStyles = styles;
  }
}

const ComponentFactory<import2.GroupDetailComponent> _GroupDetailComponentNgFactory = const ComponentFactory('auge-group-detail', viewFactory_GroupDetailComponentHost0);
ComponentFactory<import2.GroupDetailComponent> get GroupDetailComponentNgFactory {
  return _GroupDetailComponentNgFactory;
}

class _ViewGroupDetailComponent1 extends import54.EmbeddedView<import2.GroupDetailComponent> {
  _ViewGroupDetailComponent1(import55.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import27.document;
    final _el_0 = doc.createElement('h3');
    this.addShimE(_el_0);
    final _text_1 = import32.appendText(_el_0, import35.interpolateString0(import2.GroupDetailComponent.addGroupLabel));
    this.initRootNode(_el_0);
  }
}

import54.EmbeddedView<void> viewFactory_GroupDetailComponent1(import55.RenderView parentView, int parentIndex) {
  return _ViewGroupDetailComponent1(parentView, parentIndex);
}

class _ViewGroupDetailComponent2 extends import54.EmbeddedView<import2.GroupDetailComponent> {
  _ViewGroupDetailComponent2(import55.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import27.document;
    final _el_0 = doc.createElement('h3');
    this.addShimE(_el_0);
    final _text_1 = import32.appendText(_el_0, import35.interpolateString0(import2.GroupDetailComponent.editGroupLabel));
    this.initRootNode(_el_0);
  }
}

import54.EmbeddedView<void> viewFactory_GroupDetailComponent2(import55.RenderView parentView, int parentIndex) {
  return _ViewGroupDetailComponent2(parentView, parentIndex);
}

class _ViewGroupDetailComponent3 extends import54.EmbeddedView<import2.GroupDetailComponent> {
  final import56.TextBinding _textBinding_1 = import56.TextBinding();
  import57.ViewMaterialRadioComponent0 _compView_0;
  import58.MaterialRadioComponent _MaterialRadioComponent_0_5;
  var _expr_0;
  bool _expr_1;
  _ViewGroupDetailComponent3(import55.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    // Child component MaterialRadioComponent in asset:angular_components/lib/material_radio/material_radio.dart (changeDetection: OnPush)
    this._compView_0 = import57.ViewMaterialRadioComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._MaterialRadioComponent_0_5 = import58.MaterialRadioComponent(_el_0, this._compView_0, import28.unsafeCast<ViewGroupDetailComponent0>(this.parentView)._MaterialRadioGroupComponent_11_7, null, null);
    this._compView_0.createAndProject(this._MaterialRadioComponent_0_5, [
      [this._textBinding_1.element]
    ]);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import45.HasDisabled) && (nodeIndex <= 1))) {
      return this._MaterialRadioComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_iGroupType = import28.unsafeCast<import59.GroupType>(this.locals['\$implicit']);
    changed = false;
    final currVal_0 = local_iGroupType;
    if (import28.checkBinding(this._expr_0, currVal_0, 'iGroupType', '')) {
      this._MaterialRadioComponent_0_5.value = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = (((_ctx.group.groupType == null) ? null : _ctx.group.groupType.index) == ((local_iGroupType == null) ? null : local_iGroupType.index));
    if (import28.checkBinding(this._expr_1, currVal_1, 'group.groupType?.index == iGroupType?.index', '')) {
      this._MaterialRadioComponent_0_5.checked = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._textBinding_1.updateText(import35.interpolateString0(_ctx.groupTypeName(local_iGroupType.toString())));
    this._compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import28.unsafeCast<ViewGroupDetailComponent0>(this.parentView)._query_MaterialRadioComponent_11_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._MaterialRadioComponent_0_5.ngOnDestroy();
  }
}

import54.EmbeddedView<void> viewFactory_GroupDetailComponent3(import55.RenderView parentView, int parentIndex) {
  return _ViewGroupDetailComponent3(parentView, parentIndex);
}

class _ViewGroupDetailComponent4 extends import54.EmbeddedView<import2.GroupDetailComponent> {
  final import56.TextBinding _textBinding_3 = import56.TextBinding();
  import60.ViewMaterialChipsComponent0 _compView_0;
  import61.MaterialChipsComponent _MaterialChipsComponent_0_5;
  import62.ViewMaterialChipComponent0 _compView_1;
  import63.MaterialChipComponent _MaterialChipComponent_1_5;
  var _expr_1;
  import27.DivElement _el_2;
  _ViewGroupDetailComponent4(import55.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    // Child component MaterialChipsComponent in asset:angular_components/lib/material_chips/material_chips.dart (changeDetection: OnPush)
    this._compView_0 = import60.ViewMaterialChipsComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._MaterialChipsComponent_0_5 = import61.MaterialChipsComponent(this._compView_0);
    // Child component MaterialChipComponent in asset:angular_components/lib/material_chips/material_chip.dart (changeDetection: OnPush)
    this._compView_1 = import62.ViewMaterialChipComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    this.addShimC(_el_1);
    this._MaterialChipComponent_1_5 = import63.MaterialChipComponent(_el_1);
    final doc = import27.document;
    this._el_2 = doc.createElement('div');
    this.updateChildClass(this._el_2, 'avatar');
    import32.setAttribute(this._el_2, 'left-icon', '');
    this.addShimC(this._el_2);
    this._compView_1.createAndProject(this._MaterialChipComponent_1_5, [
      [this._el_2],
      [this._textBinding_3.element]
    ]);
    this._compView_0.createAndProject(this._MaterialChipsComponent_0_5, [
      [_el_1]
    ]);
    final subscription_0 = this._MaterialChipComponent_1_5.remove.listen(this.eventHandler1(this._handleEvent_0));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 3)) {
      if ((identical(token, import46.HasRenderer) && (1 <= nodeIndex))) {
        return this._MaterialChipComponent_1_5;
      }
      if (identical(token, import46.HasRenderer)) {
        return this._MaterialChipsComponent_0_5;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_member = import28.unsafeCast<import64.User>(this.locals['\$implicit']);
    changed = false;
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      this._MaterialChipComponent_1_5.hasLeftIcon = true;
      changed = true;
    }
    if (changed) {
      this._compView_1.markAsCheckOnce();
    }
    final currVal_1 = (('url(' + _ctx.userUrlImage(local_member)) + ')');
    if (import28.checkBinding(this._expr_1, currVal_1, '\'url(\' +  userUrlImage(member)  + \')\'', '')) {
      this._el_2.style.setProperty('background-image', currVal_1);
      this._expr_1 = currVal_1;
    }
    this._textBinding_3.updateText(import35.interpolateString0(((local_member == null) ? null : local_member.name)));
    this._compView_0.detectChanges();
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._compView_1.destroyInternalState();
    this._MaterialChipsComponent_0_5.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final local_member = import28.unsafeCast<import64.User>(this.locals['\$implicit']);
    final _ctx = this.ctx;
    _ctx.removeMember(local_member);
  }
}

import54.EmbeddedView<void> viewFactory_GroupDetailComponent4(import55.RenderView parentView, int parentIndex) {
  return _ViewGroupDetailComponent4(parentView, parentIndex);
}

final List<dynamic> styles$GroupDetailComponentHost = const [];

// Host for component GroupDetailComponent in asset:auge_web/lib/src/group/group_detail_component.dart (changeDetection: Default)
class _ViewGroupDetailComponentHost0 extends import65.HostView<import2.GroupDetailComponent> {
  dynamic _UserService_0_5;
  dynamic __Document_0_7;
  dynamic __HtmlDocument_0_8;
  dynamic __Window_0_9;
  dynamic __DomService_0_10;
  dynamic __AcxImperativeViewUtils_0_11;
  import66.DomRuler __DomRuler_0_12;
  dynamic __ManagedZone_0_13;
  dynamic __overlayContainerName_0_14;
  dynamic __overlayContainerParent_0_15;
  dynamic __overlayContainer_0_16;
  bool __overlaySyncDom_0_17;
  bool __overlayRepositionLoop_0_18;
  import67.Box __overlayViewportBoundaries_0_19;
  import68.OverlayStyleConfig __OverlayStyleConfig_0_20;
  import69.ZIndexer __ZIndexer_0_21;
  import70.OverlayDomRenderService __OverlayDomRenderService_0_22;
  dynamic __OverlayService_0_23;
  _ViewGroupDetailComponentHost0(import71.Injector injector) : super(injector);
  dynamic get _Document_0_7 {
    if ((this.__Document_0_7 == null)) {
      (this.__Document_0_7 = import72.getDocument());
    }
    return this.__Document_0_7;
  }

  dynamic get _HtmlDocument_0_8 {
    if ((this.__HtmlDocument_0_8 == null)) {
      (this.__HtmlDocument_0_8 = import72.getDocument());
    }
    return this.__HtmlDocument_0_8;
  }

  dynamic get _Window_0_9 {
    if ((this.__Window_0_9 == null)) {
      (this.__Window_0_9 = import72.getWindow());
    }
    return this.__Window_0_9;
  }

  dynamic get _DomService_0_10 {
    if ((this.__DomService_0_10 == null)) {
      (this.__DomService_0_10 = (import28.isDevMode
          ? import29.debugInjectorWrap(import31.DomService, () {
              return import73.createDomService(this.injectorGetOptional(import31.DomService, this.parentIndex), this.injectorGetOptional(import74.Disposer, this.parentIndex), this.injectorGet(import33.NgZone, this.parentIndex), this._Window_0_9);
            })
          : import73.createDomService(this.injectorGetOptional(import31.DomService, this.parentIndex), this.injectorGetOptional(import74.Disposer, this.parentIndex), this.injectorGet(import33.NgZone, this.parentIndex), this._Window_0_9)));
    }
    return this.__DomService_0_10;
  }

  dynamic get _AcxImperativeViewUtils_0_11 {
    if ((this.__AcxImperativeViewUtils_0_11 == null)) {
      (this.__AcxImperativeViewUtils_0_11 = (import28.isDevMode
          ? import29.debugInjectorWrap(import75.AcxImperativeViewUtils, () {
              return import75.AcxImperativeViewUtils(this.injectorGet(import76.ComponentLoader, this.parentIndex), this._DomService_0_10);
            })
          : import75.AcxImperativeViewUtils(this.injectorGet(import76.ComponentLoader, this.parentIndex), this._DomService_0_10)));
    }
    return this.__AcxImperativeViewUtils_0_11;
  }

  import66.DomRuler get _DomRuler_0_12 {
    if ((this.__DomRuler_0_12 == null)) {
      (this.__DomRuler_0_12 = import66.DomRuler(this._Document_0_7, this._DomService_0_10));
    }
    return this.__DomRuler_0_12;
  }

  dynamic get _ManagedZone_0_13 {
    if ((this.__ManagedZone_0_13 == null)) {
      (this.__ManagedZone_0_13 = (import28.isDevMode
          ? import29.debugInjectorWrap(import77.ManagedZone, () {
              return import78.Angular2ManagedZone(this.injectorGet(import33.NgZone, this.parentIndex));
            })
          : import78.Angular2ManagedZone(this.injectorGet(import33.NgZone, this.parentIndex))));
    }
    return this.__ManagedZone_0_13;
  }

  dynamic get _overlayContainerName_0_14 {
    if ((this.__overlayContainerName_0_14 == null)) {
      (this.__overlayContainerName_0_14 = (import28.isDevMode
          ? import29.debugInjectorWrap(const import39.OpaqueToken<dynamic>('overlayContainerName'), () {
              return import79.getDefaultContainerName(this.injectorGetOptional(const import39.OpaqueToken<dynamic>('overlayContainerName'), this.parentIndex));
            })
          : import79.getDefaultContainerName(this.injectorGetOptional(const import39.OpaqueToken<dynamic>('overlayContainerName'), this.parentIndex))));
    }
    return this.__overlayContainerName_0_14;
  }

  dynamic get _overlayContainerParent_0_15 {
    if ((this.__overlayContainerParent_0_15 == null)) {
      (this.__overlayContainerParent_0_15 = (import28.isDevMode
          ? import29.debugInjectorWrap(const import39.OpaqueToken<dynamic>('overlayContainerParent'), () {
              return import79.getOverlayContainerParent(this._Document_0_7, this.injectorGetOptional(const import39.OpaqueToken<dynamic>('overlayContainerParent'), this.parentIndex));
            })
          : import79.getOverlayContainerParent(this._Document_0_7, this.injectorGetOptional(const import39.OpaqueToken<dynamic>('overlayContainerParent'), this.parentIndex))));
    }
    return this.__overlayContainerParent_0_15;
  }

  dynamic get _overlayContainer_0_16 {
    if ((this.__overlayContainer_0_16 == null)) {
      (this.__overlayContainer_0_16 = (import28.isDevMode
          ? import29.debugInjectorWrap(const import39.OpaqueToken<dynamic>('overlayContainer'), () {
              return import79.getDefaultContainer(this._overlayContainerName_0_14, this._overlayContainerParent_0_15, this.injectorGetOptional(const import39.OpaqueToken<dynamic>('overlayContainer'), this.parentIndex));
            })
          : import79.getDefaultContainer(this._overlayContainerName_0_14, this._overlayContainerParent_0_15, this.injectorGetOptional(const import39.OpaqueToken<dynamic>('overlayContainer'), this.parentIndex))));
    }
    return this.__overlayContainer_0_16;
  }

  bool get _overlaySyncDom_0_17 {
    if ((this.__overlaySyncDom_0_17 == null)) {
      (this.__overlaySyncDom_0_17 = true);
    }
    return this.__overlaySyncDom_0_17;
  }

  bool get _overlayRepositionLoop_0_18 {
    if ((this.__overlayRepositionLoop_0_18 == null)) {
      (this.__overlayRepositionLoop_0_18 = true);
    }
    return this.__overlayRepositionLoop_0_18;
  }

  import67.Box get _overlayViewportBoundaries_0_19 {
    if ((this.__overlayViewportBoundaries_0_19 == null)) {
      (this.__overlayViewportBoundaries_0_19 = const import67.Box());
    }
    return this.__overlayViewportBoundaries_0_19;
  }

  import68.OverlayStyleConfig get _OverlayStyleConfig_0_20 {
    if ((this.__OverlayStyleConfig_0_20 == null)) {
      (this.__OverlayStyleConfig_0_20 = import68.OverlayStyleConfig(this._Document_0_7));
    }
    return this.__OverlayStyleConfig_0_20;
  }

  import69.ZIndexer get _ZIndexer_0_21 {
    if ((this.__ZIndexer_0_21 == null)) {
      (this.__ZIndexer_0_21 = import69.ZIndexer());
    }
    return this.__ZIndexer_0_21;
  }

  import70.OverlayDomRenderService get _OverlayDomRenderService_0_22 {
    if ((this.__OverlayDomRenderService_0_22 == null)) {
      (this.__OverlayDomRenderService_0_22 = import70.OverlayDomRenderService(this._OverlayStyleConfig_0_20, this._overlayContainer_0_16, this._overlayContainerName_0_14, this._DomRuler_0_12, this._DomService_0_10, this._AcxImperativeViewUtils_0_11, this._overlaySyncDom_0_17, this._overlayRepositionLoop_0_18, this._ZIndexer_0_21));
    }
    return this.__OverlayDomRenderService_0_22;
  }

  dynamic get _OverlayService_0_23 {
    if ((this.__OverlayService_0_23 == null)) {
      (this.__OverlayService_0_23 = (import28.isDevMode
          ? import29.debugInjectorWrap(import30.OverlayService, () {
              return import30.OverlayService(this.injectorGet(import33.NgZone, this.parentIndex), this._overlaySyncDom_0_17, this._OverlayDomRenderService_0_22, this.injectorGetOptional(import30.OverlayService, this.parentIndex));
            })
          : import30.OverlayService(this.injectorGet(import33.NgZone, this.parentIndex), this._overlaySyncDom_0_17, this._OverlayDomRenderService_0_22, this.injectorGetOptional(import30.OverlayService, this.parentIndex))));
    }
    return this.__OverlayService_0_23;
  }

  @override
  void build() {
    // Child component GroupDetailComponent in asset:auge_web/lib/src/group/group_detail_component.dart (changeDetection: Default)
    this.componentView = ViewGroupDetailComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this._UserService_0_5 = (import28.isDevMode
        ? import29.debugInjectorWrap(import80.UserService, () {
            return import80.UserService(this.injectorGet(import81.AuthService, this.parentIndex), this.injectorGet(import82.AugeApiService, this.parentIndex));
          })
        : import80.UserService(this.injectorGet(import81.AuthService, this.parentIndex), this.injectorGet(import82.AugeApiService, this.parentIndex)));
    this.component = (import28.isDevMode
        ? import29.debugInjectorWrap(import2.GroupDetailComponent, () {
            return import2.GroupDetailComponent(this._UserService_0_5, this.injectorGet(import83.GroupService, this.parentIndex), this.injectorGet(import84.Location, this.parentIndex));
          })
        : import2.GroupDetailComponent(this._UserService_0_5, this.injectorGet(import83.GroupService, this.parentIndex), this.injectorGet(import84.Location, this.parentIndex)));
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import80.UserService)) {
        return this._UserService_0_5;
      }
      if (identical(token, import27.Document)) {
        return this._Document_0_7;
      }
      if (identical(token, import27.HtmlDocument)) {
        return this._HtmlDocument_0_8;
      }
      if (identical(token, import27.Window)) {
        return this._Window_0_9;
      }
      if (identical(token, import31.DomService)) {
        return this._DomService_0_10;
      }
      if (identical(token, import75.AcxImperativeViewUtils)) {
        return this._AcxImperativeViewUtils_0_11;
      }
      if (identical(token, import66.DomRuler)) {
        return this._DomRuler_0_12;
      }
      if (identical(token, import77.ManagedZone)) {
        return this._ManagedZone_0_13;
      }
      if (identical(token, const import39.OpaqueToken<dynamic>('overlayContainerName'))) {
        return this._overlayContainerName_0_14;
      }
      if (identical(token, const import39.OpaqueToken<dynamic>('overlayContainerParent'))) {
        return this._overlayContainerParent_0_15;
      }
      if (identical(token, const import39.OpaqueToken<dynamic>('overlayContainer'))) {
        return this._overlayContainer_0_16;
      }
      if (identical(token, const import39.OpaqueToken<dynamic>('overlaySyncDom'))) {
        return this._overlaySyncDom_0_17;
      }
      if (identical(token, const import39.OpaqueToken<dynamic>('overlayRepositionLoop'))) {
        return this._overlayRepositionLoop_0_18;
      }
      if (identical(token, const import39.OpaqueToken<dynamic>('overlayViewportBoundaries'))) {
        return this._overlayViewportBoundaries_0_19;
      }
      if (identical(token, import68.OverlayStyleConfig)) {
        return this._OverlayStyleConfig_0_20;
      }
      if (identical(token, import69.ZIndexer)) {
        return this._ZIndexer_0_21;
      }
      if (identical(token, import70.OverlayDomRenderService)) {
        return this._OverlayDomRenderService_0_22;
      }
      if (identical(token, import30.OverlayService)) {
        return this._OverlayService_0_23;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (((!import28.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectChanges();
  }
}

import65.HostView<import2.GroupDetailComponent> viewFactory_GroupDetailComponentHost0(import71.Injector injector) {
  return _ViewGroupDetailComponentHost0(injector);
}

final List<dynamic> styles$UserRendererComponent = [''];

// View for component UserRendererComponent in asset:auge_web/lib/src/group/group_detail_component.dart (changeDetection: Default)
class ViewUserRendererComponent0 extends import1.ComponentView<import2.UserRendererComponent> {
  final import56.TextBinding _textBinding_1 = import56.TextBinding();
  var _expr_0;
  import27.DivElement _el_0;
  static import24.ComponentStyles _componentStyles;
  ViewUserRendererComponent0(import25.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import27.document.createElement('user-renderer');
  }
  static String get _debugComponentUrl {
    return (import28.isDevMode ? 'asset:auge_web/lib/src/group/group_detail_component.dart' : null);
  }

  @override
  void build() {
    final import27.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import27.document;
    this._el_0 = import32.appendDiv(doc, parentRenderNode);
    this.updateChildClass(this._el_0, 'avatar-icon');
    import32.setAttribute(this._el_0, 'left-icon', '');
    this.addShimC(this._el_0);
    parentRenderNode.append(this._textBinding_1.element);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.disPlayurl;
    if (import28.checkBinding(this._expr_0, currVal_0, 'disPlayurl', '')) {
      this._el_0.style.setProperty('background-image', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._textBinding_1.updateText(import35.interpolateString0(_ctx.disPlayName));
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import24.ComponentStyles.scoped(styles$UserRendererComponent, _debugComponentUrl))));
    }
    this.componentStyles = styles;
  }
}

const ComponentFactory<import2.UserRendererComponent> _UserRendererComponentNgFactory = const ComponentFactory('user-renderer', viewFactory_UserRendererComponentHost0);
ComponentFactory<import2.UserRendererComponent> get UserRendererComponentNgFactory {
  return _UserRendererComponentNgFactory;
}

final List<dynamic> styles$UserRendererComponentHost = const [];

// Host for component UserRendererComponent in asset:auge_web/lib/src/group/group_detail_component.dart (changeDetection: Default)
class _ViewUserRendererComponentHost0 extends import65.HostView<import2.UserRendererComponent> {
  _ViewUserRendererComponentHost0(import71.Injector injector) : super(injector);
  @override
  void build() {
    // Child component UserRendererComponent in asset:auge_web/lib/src/group/group_detail_component.dart (changeDetection: Default)
    this.componentView = ViewUserRendererComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.UserRendererComponent();
    this.initRootNode(_el_0);
  }
}

import65.HostView<import2.UserRendererComponent> viewFactory_UserRendererComponentHost0(import71.Injector injector) {
  return _ViewUserRendererComponentHost0(injector);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(GroupDetailComponent, GroupDetailComponentNgFactory);
  _ngRef.registerComponent(UserRendererComponent, UserRendererComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
  _ref10.initReflector();
  _ref11.initReflector();
  _ref12.initReflector();
  _ref13.initReflector();
  _ref14.initReflector();
  _ref15.initReflector();
  _ref16.initReflector();
  _ref17.initReflector();
  _ref18.initReflector();
  _ref19.initReflector();
  _ref20.initReflector();
  _ref21.initReflector();
  _ref22.initReflector();
  _ref23.initReflector();
}

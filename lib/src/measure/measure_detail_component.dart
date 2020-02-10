// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/model/ui/has_factory.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_input/material_number_accessor.dart';
import 'package:angular_components/material_select/material_dropdown_select.dart';
import 'package:angular_components/material_select/material_dropdown_select_accessor.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/model/ui/has_renderer.dart';

import 'package:auge_shared/domain/objective/measure.dart';

import 'package:auge_shared/message/messages.dart';
import 'package:auge_shared/message/domain_messages.dart';

import 'package:auge_web/src/measure/measure_service.dart';

import 'package:auge_web/route/app_routes.dart';

@Component(
    selector: 'auge-measure-detail',
    providers: [overlayBindings, MeasureService],
    templateUrl: 'measure_detail_component.html',
    styleUrls: const [
      'measure_detail_component.css'
    ],
    directives: const [
      coreDirectives,
      materialInputDirectives,
      materialNumberInputDirectives,
      AutoFocusDirective,
      MaterialDialogComponent,
      ModalComponent,
      MaterialDropdownSelectComponent,
      DropdownSelectValueAccessor,
      MaterialButtonComponent,
      MaterialIconComponent,
    ])

class MeasureDetailComponent implements OnInit, OnActivate, OnDeactivate  {

  final MeasureService _measureService;
  final Location _location;

  bool modalVisible = false;

  String objectiveId;
  Measure measure;

  List<MeasureUnit> _measureUnits = [];
  SelectionOptions measureUnitOptions;
  SelectionModel measureUnitSingleSelectModel;

  /// When it exists, the error/exception message is presented into dialog view.
  String dialogError;
  String showStartValueErrorMsg;
  String showCurrentValueErrorMsg;
  String showEndValueErrorMsg;
  String showDecimalsNumberErrorMsg;

 // List errorControl = [];
 // bool validInput = false;

  MeasureDetailComponent(this._measureService, this._location) {
    measureUnitSingleSelectModel = SelectionModel.single();
  }

  // Define messages and labels
  static final String saveButtonLabel = CommonMsg.buttonLabel(CommonMsg.saveButtonLabel);
  static final String closeButtonLabel = CommonMsg.buttonLabel(CommonMsg.closeButtonLabel);
  static final String requiredValueMsg = CommonMsg.requiredValueMsg();

  static final String valueErrorMsg =  MeasureMsg.valueErrorMsg();
  static final String decimalNumberErrorMsg = MeasureMsg.decimalNumberErrorMsg();

  static final String addMeasureLabel =  MeasureMsg.label(MeasureMsg.addMeasureLabel);
  static final String editMeasureLabel =  MeasureMsg.label(MeasureMsg.editMeasureLabel);

  static final String nameLabel = MeasureDomainMsg.fieldLabel(Measure.nameField);
  static final String descriptionLabel =  MeasureDomainMsg.fieldLabel(Measure.descriptionField); //FieldMsg.label('${Measure.className}.${Measure.}');
  static final String metricLabel =  MeasureDomainMsg.fieldLabel(Measure.metricField); //FieldMsg.label('${Measure.className}.${Measure.metricField}');
  static final String unitLabel = MeasureDomainMsg.fieldLabel(Measure.measureUnitField); // FieldMsg.label('${Measure.className}.${Measure.measureUnitField}');
  static final String decimalsNumberLabel = MeasureDomainMsg.fieldLabel(Measure.decimalsNumberField); //FieldMsg.label('${Measure.className}.${Measure.decimalsNumberField}');
  static final String startValueLabel =  MeasureDomainMsg.fieldLabel(Measure.startValueField); // FieldMsg.label('${Measure.className}.${Measure.startValueField}');
  static final String currentValueLabel =  MeasureDomainMsg.fieldLabel(Measure.currentValueField); //FieldMsg.label('${Measure.className}.${Measure.currentValueField}');
  static final String endValueLabel =  MeasureDomainMsg.fieldLabel(Measure.endValueField); // FieldMsg.label('${Measure.className}.${Measure.endValueField}');

  @override
  void ngOnInit() async {
    //created as new here, even if it is later replaced by a query, because the query may take a while and the Angular will continue to process, causing an exception if the object does not exist
    measure = Measure();
  }

  @override
  void onActivate(RouterState previous, RouterState current) async {
    modalVisible = true;

    if (current.parameters.containsKey(AppRoutesParam.objectiveIdParameter)) {
      objectiveId= current.parameters[AppRoutesParam.objectiveIdParameter];
    } else {
      throw Exception('Objective Id not found.');
    }

    String id;
    if (current.parameters.containsKey(AppRoutesParam.measureIdParameter)) {
      id = current.parameters[AppRoutesParam.measureIdParameter];
    }

    if (id != null) {
      measure = await _measureService.getMeasure(id);
    } else {
      measure.decimalsNumber = 0;
    }

    try {
      _measureUnits = await _measureService.getMeasureUnits();
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }

    measureUnitOptions = new SelectionOptions.fromList(_measureUnits);

    measureUnitSingleSelectModel.selectionChanges.listen((unit) {
        if (unit.isNotEmpty && unit.first.added != null && unit.first.added.length != 0 && unit.first.added?.first != null) {
          measure.measureUnit = unit.first.added.first;
        }
      });

    if (measure.measureUnit != null) {
      measureUnitSingleSelectModel.select(measure.measureUnit);
    } else if (measureUnitOptions.optionsList.isNotEmpty) {
      measureUnitSingleSelectModel.select(measureUnitOptions.optionsList.first);
    }
  }

  @override
  void onDeactivate(RouterState current, RouterState next) {
    modalVisible = false;
  }

  void saveMeasure() async {
    try {

      //--measure.lastHistoryItem.setClientSideValues(user: _authService.authenticatedUser, description: measure.name, changedValues: MeasureFacilities.differenceToJson(measure, selectedMeasure));

      await _measureService.saveMeasure(objectiveId, measure);

      //_saveController.add(measure.id);
      closeDetail();
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }
  }

  void closeDetail() {
    _location.back();
 //   _closedController.add(null);
  }

  // Label for the button for single selection.
  String get measureUnitSingleSelectLabel {
    String nameLabel;
    if ((measureUnitSingleSelectModel != null) &&
        (measureUnitSingleSelectModel.selectedValues != null) &&
        (measureUnitSingleSelectModel.selectedValues.length > 0)) {

      nameLabel = measureUnitSingleSelectModel.selectedValues.first.name;
    }
    return nameLabel ;
  }

  ItemRenderer get measureUnitItemRenderer => (dynamic unit) => unit.name + (unit.symbol == null || unit.symbol.trim().length == 0 ? '' : ' (' + unit.symbol + ')');

  bool validValue(double startValue, double currentValue, double endValue) {
    if (startValue != null && endValue != null && startValue == endValue) {
      return false;
    } else if (startValue != null && currentValue != null && endValue != null) {
        if (startValue < endValue) {
        if (currentValue < startValue ||
            currentValue > endValue) {
          return false;
        }
      } else if (startValue > endValue) {
        if (currentValue > startValue ||
            currentValue < endValue) {
          return false;
        }
      }
    }
    return true;
  }

  void changedStartValue(String startValue) {
    if (!validValue(double.tryParse(startValue), measure.currentValue, measure.endValue)) {
   //   errorControl.add(validStartValue);
      showStartValueErrorMsg = valueErrorMsg;
    } else {
  //    errorControl.remove(validStartValue);
      showStartValueErrorMsg = null;
    }
//    validInput = errorControl.isEmpty;
  }

  void changedCurrentValue(String currentValue) {
    if (!validValue(measure.startValue, double.tryParse(currentValue), measure.endValue)) {
     // errorControl.add(validCurrentValue);
      showCurrentValueErrorMsg = valueErrorMsg;
    } else {
    //  errorControl.remove(validCurrentValue);
      showCurrentValueErrorMsg = null;
    }
 //   validInput = errorControl.isEmpty;
  }

  void changedEndValue(String endValue) {
    if (!validValue(measure.startValue, measure.currentValue, double.tryParse(endValue))) {
//      errorControl.add(validEndValue);
      showEndValueErrorMsg = valueErrorMsg;
    } else {
 //     errorControl.remove(validEndValue);
      showEndValueErrorMsg = null;
    }
 //   validInput = errorControl.isEmpty;
  }

  void changedDecimalsNumber(String decimalsNumber) {
      if (!validDecimalsNumber(int.tryParse(decimalsNumber))) {
        showDecimalsNumberErrorMsg = decimalNumberErrorMsg;
      } else {
        showDecimalsNumberErrorMsg = null;
      }
  }

  bool validDecimalsNumber(int decimalsNumber) {
    if (decimalsNumber == null || decimalsNumber < 0 || decimalsNumber > 5) {
      return false;
    } else {
      return true;
    }
    //   validInput = errorControl.isEmpty;
  }

  bool get validInput {
    if ((measure.name != null && measure.name.isEmpty)
        || !validValue(measure.startValue, measure.currentValue, measure.endValue)
    || !validDecimalsNumber(measure.decimalsNumber)) {
      return false;
    } else {
      return true;
    }

  }

  // String get unitLeadingText => measure?.measureUnit == null ? null : measure.measureUnit.symbol;
  String get unitLeadingText => measure?.measureUnit?.symbol == null ? null : measure.measureUnit.symbol.contains(r'$') ? measure.measureUnit.symbol : null;

  //String get unitTrailingText => measure?.measureUnit == null ? null :  measure.measureUnit.symbol;
  String get unitTrailingText => measure?.measureUnit?.symbol == null ? null : !measure.measureUnit.symbol.contains(r'$') ? measure.measureUnit.symbol : null;
}
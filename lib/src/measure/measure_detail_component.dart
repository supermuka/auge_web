// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';
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

import 'package:auge_server/model/objective/measure.dart';
import 'package:auge_server/model/authorization.dart';
import 'package:auge_server/model/objective/timeline_item.dart';


import 'package:auge_web/message/messages.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/measure/measure_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';

@Component(
    selector: 'auge-measure-detail',
    providers: [overlayBindings],
    directives: const [
      coreDirectives,
      //formDirectives,
      materialInputDirectives,
      materialNumberInputDirectives,
      AutoFocusDirective,
      MaterialDialogComponent,
      ModalComponent,
      MaterialDropdownSelectComponent,
      DropdownSelectValueAccessor,
      MaterialButtonComponent,
      MaterialIconComponent,

      /* materialDirectives, */
    ],
    templateUrl: 'measure_detail_component.html',
    styleUrls: const [
      'measure_detail_component.css'
    ])

class MeasureDetailComponent extends Object implements OnInit {

  final AuthService _authService;
  final MeasureService _measureService;

  @Input()
  String objectiveId;

  @Input()
  Measure selectedMeasure;

  final _closeController = new StreamController<void>.broadcast(sync: true);

  /// Publishes events when close.
  @Output()
  Stream<void> get close => _closeController.stream;

  final _saveController = new StreamController<String>.broadcast(sync: true);

  /// Publishes events when save.
  @Output()
  Stream<String> get save => _saveController.stream;

  Measure measure = Measure();

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

  MeasureDetailComponent(this._authService, this._measureService) {
    measureUnitSingleSelectModel = SelectionModel.single();
  }

  // Define messages and labels
  static final String requiredValueMsg = CommonMsg.requiredValueMsg();
  static final String valueErrorMsg =  MeasureMsg.valueErrorMsg();
  static final String decimalNumberErrorMsg = MeasureMsg.decimalNumberErrorMsg();

  static final String addMeasureLabel =  MeasureMsg.label('Add Measure');
  static final String editMeasureLabel =  MeasureMsg.label('Edit Measure');
  static final String nameLabel =  MeasureMsg.label('Name');
  static final String descriptionLabel =  MeasureMsg.label('Description');
  static final String metricLabel =  MeasureMsg.label('Metric');
  static final String decimalsNumberLabel = MeasureMsg.label('Decimals');
  static final String startValueLabel =  MeasureMsg.label('Start Value');
  static final String currentValueLabel =  MeasureMsg.label('Current Value');
  static final String endValueLabel =  MeasureMsg.label('End Value');

  static final String saveButtonLabel = CommonMsg.buttonLabel('Save');
  static final String closeButtonLabel = CommonMsg.buttonLabel('Close');

  @override
  void ngOnInit() async {

    if (selectedMeasure != null) {
      measure = selectedMeasure.clone();
    } else {
      measure = new Measure();
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

    if (measure.measureUnit != null)
      measureUnitSingleSelectModel.select(measure.measureUnit);
    else if (measureUnitOptions.optionsList.isNotEmpty) {
      measureUnitSingleSelectModel.select(measureUnitOptions.optionsList.first);
    }
  }

  void saveMeasure() async {
    try {

      int functionIndex;
      if (measure.id == null) {
         functionIndex = SystemFunction.create.index;
         measure.audit.createdBy = _authService.authenticatedUser;

      } else {
         functionIndex =  SystemFunction.update.index;
         measure.audit.updatedBy = _authService.authenticatedUser;
      }
      measure.isDeleted = false;

      // Timeline item definition
      measure.lastTimelineItem = TimelineItem()
        ..user = _authService.authenticatedUser
      // ..dateTime = DateTime.now() // Keep the server update data time to utc
        ..systemFunctionIndex = functionIndex
        ..className = measure.runtimeType.toString()
        ..description = measure.name
        ..changedData = MeasureFacilities.differenceToJson(measure, selectedMeasure);

      await _measureService.saveMeasure(objectiveId, measure);

      _saveController.add(measure.id);
      closeDetail();
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }
  }

  void closeDetail() {
    _closeController.add(null);
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
  /*
  double lowerBound() {
    print('lowerBound()');
    print(measure?.startValue);
    print(measure?.endValue);
    if (measure?.startValue == null || measure?.endValue == null) return measure?.currentValue;
    if (measure.startValue < measure.endValue) {
      return measure.startValue;
    } else {
      return measure.endValue;
    }
  }

  double upperBound() {
    print('upperBound()');
    print(measure?.startValue);
    print(measure?.endValue);
    if (measure?.startValue == null || measure?.endValue == null) return measure?.currentValue;
    if (measure.startValue > measure.endValue) {
      return measure.startValue;
    } else {
      return measure.endValue;
    }
  }
  */


  bool validValue(double startValue, double currentValue, double endValue) {
    if (startValue != null && currentValue != null && endValue != null) {
      if (startValue <= endValue) {
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
    if (!validValue(double.tryParse(startValue), measure?.currentValue, measure?.endValue)) {
   //   errorControl.add(validStartValue);
      showStartValueErrorMsg = valueErrorMsg;
    } else {
  //    errorControl.remove(validStartValue);
      showStartValueErrorMsg = null;
    }
//    validInput = errorControl.isEmpty;
  }

  void changedCurrentValue(String currentValue) {
    if (!validValue(measure?.startValue, double.tryParse(currentValue), measure?.endValue)) {
     // errorControl.add(validCurrentValue);
      showCurrentValueErrorMsg = valueErrorMsg;
    } else {
    //  errorControl.remove(validCurrentValue);
      showCurrentValueErrorMsg = null;
    }
 //   validInput = errorControl.isEmpty;
  }

  void changedEndValue(String endValue) {
    if (!validValue(measure?.startValue, measure?.currentValue, double.tryParse(endValue))) {
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

  /*
  void validName(var value) {

    if (value.isEmpty) {
      errorControl.add(validName);
    } else {
      errorControl.remove(validName);
    }
    validInput = errorControl.isEmpty;

  }
  */

  bool get validInput {
    if ((measure?.name != null && measure.name.isEmpty)
        || !validValue(measure?.startValue, measure?.currentValue, measure?.endValue)
    || !validDecimalsNumber(measure.decimalsNumber)) {
      return false;
    } else {
      return true;
    }

  }

  String get unitLeadingText => measure?.measureUnit == null ? null : measure.measureUnit.symbol.contains(r'$') ? measure.measureUnit.symbol : null;

  String get unitTrailingText => measure?.measureUnit == null ? null : !measure.measureUnit.symbol.contains(r'$') ? measure.measureUnit.symbol : null;

}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_components/model/ui/has_factory.dart';

import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_server/model/objective/measure.dart';

import 'package:auge_web/message/messages.dart';

import 'package:auge_web/src/measure/measure_service.dart';

@Component(
    selector: 'auge-measure-detail',
    directives: const [
      coreDirectives,
      materialDirectives,
    ],
    templateUrl: 'measure_detail_component.html',
    styleUrls: const [
      'measure_detail_component.css'
    ])

class MeasureDetailComponent extends Object implements OnInit {

  final MeasureService _measureService;

  @Input()
  Objective objective;

  @Input()
  Measure selectedMeasure;

  final _closeController = new StreamController<void>.broadcast(sync: true);

  /// Publishes events when close.
  @Output()
  Stream<void> get close => _closeController.stream;

  final _saveController = new StreamController<Measure>.broadcast(sync: true);

  /// Publishes events when save.
  @Output()
  Stream<Measure> get save => _saveController.stream;

  Measure measure;

  List<MeasureUnit> _measureUnits = [];
  SelectionOptions measureUnitOptions;
  SelectionModel measureUnitSingleSelectModel;

  /// When it exists, the error/exception message is presented into dialog view.
  String dialogError;
  String showStartValueErrorMsg;
  String showCurrentValueErrorMsg;
  String showEndValueErrorMsg;

 // List errorControl = [];
 // bool validInput = false;

  MeasureDetailComponent(this._measureService) {
    measureUnitSingleSelectModel = SelectionModel.single();
  }

  // Define messages and labels
  static final String requiredValueMsg = CommonMessage.requiredValueMsg();
  static final String valueErrorMsg =  MeasureMessage.valueErrorMsg();

  static final String addMeasureLabel =  MeasureMessage.label('Add Measure');
  static final String editMeasureLabel =  MeasureMessage.label('Edit Measure');
  static final String nameLabel =  MeasureMessage.label('Name');
  static final String descriptionLabel =  MeasureMessage.label('Description');
  static final String metricLabel =  MeasureMessage.label('Metric');
  static final String decimalsNumberLabel = MeasureMessage.label('Decimals');
  static final String startValueLabel =  MeasureMessage.label('Start Value');
  static final String currentValueLabel =  MeasureMessage.label('Current Value');
  static final String endValueLabel =  MeasureMessage.label('End Value');

  static final String saveButtonLabel = CommonMessage.buttonLabel('Save');
  static final String closeButtonLabel = CommonMessage.buttonLabel('Close');

  @override
  void ngOnInit() async {

    if (selectedMeasure != null) {
      measure = selectedMeasure.clone();
    } else {
      measure = new Measure();
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

  void saveMeasure() {
    try {
      _measureService.saveMeasure(objective.id, measure);
      _saveController.add(measure);
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

  void validStartValue(String startValue) {
    if (!validValue(double.tryParse(startValue), measure?.currentValue, measure?.endValue)) {
   //   errorControl.add(validStartValue);
      showStartValueErrorMsg = valueErrorMsg;
    } else {
  //    errorControl.remove(validStartValue);
      showStartValueErrorMsg = null;
    }
//    validInput = errorControl.isEmpty;
  }

  void validCurrentValue(String currentValue) {
    if (!validValue(measure?.startValue, double.tryParse(currentValue), measure?.endValue)) {
     // errorControl.add(validCurrentValue);
      showCurrentValueErrorMsg = valueErrorMsg;
    } else {
    //  errorControl.remove(validCurrentValue);
      showCurrentValueErrorMsg = null;
    }
 //   validInput = errorControl.isEmpty;
  }

  void validEndValue(String endValue) {
    if (!validValue(measure?.startValue, measure?.currentValue, double.tryParse(endValue))) {
//      errorControl.add(validEndValue);
      showEndValueErrorMsg = valueErrorMsg;
    } else {
 //     errorControl.remove(validEndValue);
      showEndValueErrorMsg = null;
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
        || !validValue(measure?.startValue, measure?.currentValue, measure?.endValue)) {
      return false;
    } else {
      return true;
    }

  }


  String get unitLeadingText => measure?.measureUnit == null ? null : measure.measureUnit.symbol.contains(r'$') ? measure.measureUnit.symbol : null;

  String get unitTrailingText => measure?.measureUnit == null ? null : !measure.measureUnit.symbol.contains(r'$') ? measure.measureUnit.symbol : null;

}
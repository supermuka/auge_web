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

  Measure measure = new Measure();

  List<MeasureUnit> _measureUnits = [];
  SelectionOptions measureUnitOptions;
  SelectionModel measureUnitSingleSelectModel;

  MeasureDetailComponent(this._measureService);

    void initialization() async {
    _measureUnits = await _measureService.getMeasureUnits();

  }
  // Define messages and labels
  static final String requiredValueMsg = CommonMessage.requiredValueMsg();
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
  void ngOnInit() {

    if (selectedMeasure != null) {
      measure = selectedMeasure.clone();
    } else {
      // measure = new Measure();

    }

    measureUnitOptions = new SelectionOptions.fromList(_measureUnits);

    measureUnitSingleSelectModel =
    new SelectionModel.single()
      ..selectionChanges.listen((unit) {

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
    _measureService.saveMeasure(objective.id, measure);
    _saveController.add(measure);
    closeDetail();
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

  double lowerBound() {
    if (measure?.startValue == null || measure?.endValue == null) return measure?.startValue;
    if (measure.startValue < measure.endValue) {
      return measure.startValue;
    } else {
      return measure.endValue;
    }
  }

  double upperBound() {
    if (measure?.startValue == null || measure?.endValue == null) return measure?.endValue;
    if (measure.startValue > measure.endValue) {
      return measure.startValue;
    } else {
      return measure.endValue;
    }
  }

  bool get validInput {
    if (measure?.currentValue != null && (lowerBound() != null && measure.currentValue < lowerBound() || upperBound() != null && measure.currentValue > upperBound())) {
      return false;
    } else {
      return true;
    }

  }

  String get unitLeadingText => measure?.measureUnit == null ? null : measure.measureUnit.symbol.contains(r'$') ? measure.measureUnit.symbol : null;

  String get unitTrailingText => measure?.measureUnit == null ? null : !measure.measureUnit.symbol.contains(r'$') ? measure.measureUnit.symbol : null;

}
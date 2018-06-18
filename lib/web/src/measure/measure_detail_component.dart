// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_router/angular_router.dart';

import 'package:auge/shared/model/objective/objective.dart';
import 'package:auge/shared/model/objective/measure.dart';
import 'package:auge/shared/message/messages.dart';

import 'package:auge/web/src/objective/objective_service.dart';
import 'package:auge/web/src/measure/measure_service.dart';

import 'package:auge/web/src/auth/auth_service.dart';
import 'package:auge/web/services/app_routes.dart';

@Component(
    selector: 'auge-measure-detail',
    directives: const [
      coreDirectives,
      routerDirectives,
      materialDirectives,
    ],
    templateUrl: 'measure_detail_component.html',
    styleUrls: const [
      'measure_detail_component.css'
    ])

class MeasureDetailComponent implements OnActivate {

  final AuthService _authService;
  final ObjectiveService _objectiveService;
  final MeasureService _measureService;
  final Location _location;
  final Router _router;

  Objective objective;
  Measure measure = new Measure();

  List<MeasureUnit> measureUnits = new List();
  SelectionOptions measureUnitOptions;
  SelectionModel measureUnitSingleSelectModel;

  MeasureDetailComponent(this._authService, this._objectiveService, this._measureService, this._location, this._router);

  // Define messages and labels
  static final String requiredValueMsg = CommonMessage.requiredValueMsg();
  static final String addMeasureLabel =  MeasureMessage.label('Add Measure');
  static final String editMeasureLabel =  MeasureMessage.label('Edit Measure');
  static final String nameLabel =  MeasureMessage.label('Name');
  static final String descriptionLabel =  MeasureMessage.label('Description');
  static final String metricLabel =  MeasureMessage.label('Metric');
  static final String startValueLabel =  MeasureMessage.label('Start Value');
  static final String currentValueLabel =  MeasureMessage.label('Current Value');
  static final String endValueLabel =  MeasureMessage.label('End Value');

  static final String saveButtonLabel = CommonMessage.buttonLabel('Save');
  static final String backButtonLabel = CommonMessage.buttonLabel('Back');

  @override
  Future onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {
    if (this._authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
    }


    String objectiveId = _router.current.parameters[AppRoutes
        .objectiveIdParameter];


    if (objectiveId != null) {
      objective = await _objectiveService.getObjectiveById(objectiveId, withMeasures: false);
    }

    String id = routerStateCurrent.parameters[AppRoutes.measureIdParameter];

    if (id != null && id.isNotEmpty) {
      measure = await _measureService.getMeasureById(id);
    }

    measureUnits = await _measureService.getMeasureUnits();

    measureUnitOptions = new SelectionOptions.fromList(measureUnits);

    measureUnitSingleSelectModel =
    new SelectionModel.single();

    if (measureUnitOptions.optionsList.isNotEmpty) {
      measureUnitSingleSelectModel.select(measureUnitOptions.optionsList.first);
    }
  }

  void saveMeasure() {
    _measureService.saveMeasure(objective.id, measure);
    goBack();
  }

  void goBack() {
    _location.back();
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

  ItemRenderer get measureUnitItemRenderer => (dynamic unit) => unit.name + '(' + unit.symbol + ')';

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
    if (measure?.currentValue != null && (measure.currentValue < lowerBound() || measure.currentValue > upperBound())) {
      return false;
    } else {
      return true;
    }
  }
}
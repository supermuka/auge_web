// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_router/angular_router.dart';

import 'package:auge/shared/model/objective/objective.dart';
import 'package:auge/shared/model/objective/measure.dart';
import 'package:auge/shared/model/objective/measure_unit.dart';
import 'package:auge/shared/message/messages.dart';

import 'package:auge/web/src/objective/objective_service.dart';
import 'package:auge/web/src/measure/measure_service.dart';

import 'package:auge/web/src/auth/auth_service.dart';
import 'package:auge/web/services/app_routes.dart';

@Component(
    selector: 'auge-measure-detail',
//    providers: const [IniciativaService],
    directives: const [
      coreDirectives,
      routerDirectives,
      AutoFocusDirective,
      materialDirectives,
      MaterialInputComponent,
      MaterialButtonComponent,
      MaterialFabComponent,
      MaterialIconComponent,
      MaterialDialogComponent,
      MaterialListComponent,
      MaterialListItemComponent,
      MaterialExpansionPanel,
      ModalComponent,
     // MaterialSliderComponent,
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
  String requiredValueMsg() => CommonMessage.requiredValueMsg();
  String label(String label) =>  MeasureMessage.label(label);
  String buttonLabel(String label) => CommonMessage.buttonLabel(label);

  @override
  Future onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {

    String objectiveId = _router.current.parameters[AppRoutes
        .objectiveIdParameter];


    if (objectiveId != null) {
      objective = await _objectiveService.getObjectiveById(_authService.selectedOrganization.id, objectiveId, withMeasures: false);
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
    String nomeLabel;
    if ((measureUnitSingleSelectModel != null) &&
        (measureUnitSingleSelectModel.selectedValues != null) &&
        (measureUnitSingleSelectModel.selectedValues.length > 0)) {

      nomeLabel = measureUnitSingleSelectModel.selectedValues.first.nome;
    }
    return nomeLabel ;
  }

  ItemRenderer get measureUnitItemRenderer => (dynamic unit) => unit.simbol;
}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'package:angular_components/material_slider/material_slider.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_menu/material_menu.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/model/ui/icon.dart';
import 'package:angular_components/model/menu/menu.dart';
import 'package:angular_components/content/deferred_content.dart';

import 'package:auge_shared/domain/objective/objective.dart';
import 'package:auge_shared/domain/objective/measure.dart';

import 'package:auge_web/route/app_routes.dart';

import 'package:auge_shared/message/messages.dart';
import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/measure/measure_detail_component.dart';
import 'package:auge_web/src/measure/measure_progress_component.dart';
import 'package:auge_web/src/measure/measure_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';

@Component(
    selector: 'auge-measures',
    providers: [MeasureService],
    templateUrl: 'measures_component.html',
    styleUrls: const [
      'measures_component.css'
    ],
    directives: const [
      coreDirectives,
      materialInputDirectives,
      MaterialSliderComponent,
      MaterialExpansionPanel,
      MaterialExpansionPanelSet,
      MaterialIconComponent,
      MaterialMenuComponent,
      MaterialTooltipDirective,
      MaterialButtonComponent,
      ModalComponent,
      NgModel,
      DeferredContentDirective,
      MeasureDetailComponent,
      MeasureProgressComponent,
    ],
    pipes: const [commonPipes])

class MeasuresComponent with CanReuse {

  final AppLayoutService _appLayoutService;
  final MeasureService _measureService;
  final Router _router;

  @Input()
  Objective objective;

  Measure selectedMeasure;

  MenuModel<MenuItem> menuModel;

  static final editButtonLabel = CommonMsg.buttonLabel(CommonMsg.editButtonLabel);
  static final deleteButtonLabel = CommonMsg.buttonLabel(CommonMsg.deleteButtonLabel);

  // Define messages and labels
  static final String measuresLabel = MeasureMsg.label(MeasureMsg.measuresLabel);
  static final String progressLabel =  MeasureMsg.label(MeasureMsg.progressLabel);
  static final String startValueLabel =  MeasureMsg.label(MeasureMsg.startValueLabel);
  static final String currentValueLabel =  MeasureMsg.label(MeasureMsg.currentValueLabel);
  static final String endValueLabel =  MeasureMsg.label(MeasureMsg.endValueLabel);

  MeasuresComponent(this._appLayoutService, this._measureService, this._router) {
    menuModel = MenuModel([MenuItemGroup(
        [MenuItem(editButtonLabel, icon: Icon('edit') , actionWithContext: (_) => goToDetail()),
        MenuItem(deleteButtonLabel, icon: Icon('delete'), actionWithContext: (_) => delete()),
        MenuItem(progressLabel, icon: Icon('show_chart'), actionWithContext: (_) => goToProgress(false)) ])], icon: Icon('menu'));
  }

  void selectMeasure(Measure measure) {
    selectedMeasure = measure;
  }

  /// Call a soft (logic) delete
  void delete() async {
    try {

      await _measureService.deleteMeasure(selectedMeasure);
      objective.measures.remove(selectedMeasure);

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  int progress(Measure measure) {
    return measure == null || measure.currentValue == null || measure.currentValue == 0 ? 0 :  (measure.currentValue ~/ (measure.startValue + measure.endValue) * 100);
  }

  void changeCurrentValue(Measure measure, num value) {
    // measure.currentValue = value;

    // Treat invert slider value, when applied;
    if (measure.startValue != null || measure?.endValue != null) {
      measure.startValue <= measure.endValue
          ? measure.currentValue = value
          : measure.currentValue =
          measure.startValue + measure.endValue - value;
     // _measureService.saveMeasure(objective.id, measure);
    }
  }

  toInt(double value) => value?.toInt();

  List<Measure> get measures {
    return objective?.measures;
  }

  void refreshMeasures() async {
      objective.measures = await _measureService.getMeasures(objective.id);
  }

  void closeProgress() async {
    // recovery the actual measure;
    if (selectedMeasure != null) {
      measures[measures.indexOf(selectedMeasure)] = await _measureService.getMeasure(selectedMeasure.id);
    }
  }

  void goToDetail() {
    if (selectedMeasure == null) {
      _router.navigate(AppRoutes.measureAddRoute.toUrl(parameters: { AppRoutesParam.objectiveIdParameter: objective.id }));
    } else {
      _router.navigate(AppRoutes.measureEditRoute.toUrl(parameters: { AppRoutesParam.objectiveIdParameter: objective.id, AppRoutesParam.measureIdParameter: selectedMeasure.id }));
    }
  }

  void goToProgress(bool addCurrentValue) {

    _router.navigate(AppRoutes.measureProgressesAddRoute.toUrl(parameters: {
        AppRoutesParam.objectiveIdParameter: objective.id,
        AppRoutesParam.measureIdParameter: selectedMeasure.id }), NavigationParams(queryParameters: {

        if (selectedMeasure.currentValue != null && addCurrentValue) AppRoutesQueryParam.measureCurrentValueQueryParameter: selectedMeasure.currentValue.toString(),

        if (objective.startDate != null) AppRoutesQueryParam.objectiveStartDateQueryParameter: objective.startDate.toIso8601String(),
        if (objective.endDate != null) AppRoutesQueryParam.objectiveEndDateQueryParameter: objective.endDate.toIso8601String()}));
  }
}

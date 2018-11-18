// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
// import 'package:angular_components/angular_components.dart';

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
import 'package:angular_components/model/action/async_action.dart';

import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_server/model/objective/measure.dart';

import 'package:auge_web/message/messages.dart';

import 'package:auge_web/src/measure/measure_detail_component.dart';
import 'package:auge_web/src/measure/measure_chart_component.dart';

import 'package:auge_web/src/measure/measure_service.dart';

import 'package:auge_web/services/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/measure/measure_chart_component.template.dart' as measure_chart_component;

@Component(
    selector: 'auge-measures',
    providers: [MeasureService],
    directives: const [
      coreDirectives,
      materialInputDirectives,
      // materialDirectives,
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
      MeasureChartComponent,
    ],
    pipes: const [commonPipes],
    templateUrl: 'measures_component.html',
    styleUrls: const [
      'measures_component.css'
    ])

class MeasuresComponent extends Object {

  final MeasureService _measureService;
  final Router _router;

  @Input()
  Objective objective;

  Measure selectedMeasure;

  bool detailVisible;
  bool chartVisible;
  Map<Measure, bool> expandedControl = Map();

  MenuModel<MenuItem> menuModel;
  MeasuresComponent(this._measureService, this._router) {
    menuModel = new MenuModel([new MenuItemGroup(
        [new MenuItem(CommonMsg.buttonLabel('Edit'), icon: new Icon('edit') , action: () => detailVisible = true),
        new MenuItem(CommonMsg.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete()),
        new MenuItem('History Chart', icon: new Icon('show_chart'), action: () { print(chartVisible); chartVisible = true;}) ])], icon: new Icon('menu'));
  }

  // Define messages and labels
  static final String progressLabel =  MeasureMsg.label('Progress');
  static final String startValueLabel =  MeasureMsg.label('Start Value');
  static final String currentValueLabel =  MeasureMsg.label('Current Value');
  static final String endValueLabel =  MeasureMsg.label('End Value');

  void selectMeasure(Measure measure) {
    selectedMeasure = measure;
  }

  void delete() async {
    try {
      await _measureService.deleteMeasure(selectedMeasure.id);
      objective.measures.remove(selectedMeasure);
    } catch (e) {
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

  void cancelCurrentValue(Measure measure, AsyncAction event, int i) async {

      try {

        Measure measureNew = await _measureService.getMeasureById(measure.id);
        expandedControl.remove(measure);

        measure = measureNew;
        measures[i] = measureNew;

      } on Exception {
        event.cancel();
      }

  }

  void saveCurrentValue(Measure measure,  AsyncAction event) {
    try {
      if (measure.startValue != null || measure?.endValue != null) {
        measure.startValue <= measure.endValue
            ? measure.currentValue = measure.currentValue
            : measure.currentValue =
            measure.startValue + measure.endValue - measure.currentValue;

        MeasureProgress measureProgress = MeasureProgress();
        measureProgress.currentValue = measure.currentValue;
        _measureService.saveMeasureProgress(measure.id, measureProgress);
        expandedControl[measure] = false;
      }
    } on Exception {
      event.cancel();
    }

  }


  void saveMeasureProgress(Measure measure, num value) {
    // measure.currentValue = value;


     // Treat invert slider value, when applied;

     if (measure.startValue != null || measure?.endValue != null) {
      measure.startValue <= measure.endValue
          ? measure.currentValue = value
          : measure.currentValue =
          measure.startValue + measure.endValue - value;

      MeasureProgress measureProgress = MeasureProgress();
      measureProgress.currentValue = measure.currentValue;
      _measureService.saveMeasureProgress(measure.id, measureProgress);
    }

  }

  toInt(double value) => value?.toInt();

  List<Measure> get measures {
    return objective?.measures;
  }

  void changeListItem(Measure measure) {
    if (selectedMeasure == null) {
      measures.add(measure);
    } else {
      measure.cloneTo(measures[measures.indexOf(selectedMeasure)]);
    }
  }

}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';

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

import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_server/model/objective/measure.dart';

import 'package:auge_web/message/messages.dart';

import 'package:auge_web/src/measure/measure_detail_component.dart';
import 'package:auge_web/src/measure/measure_progress_component.dart';

import 'package:auge_web/src/measure/measure_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/src/auth/auth_service.dart';


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
      MeasureProgressComponent,
    ],
    pipes: const [commonPipes],
    templateUrl: 'measures_component.html',
    styleUrls: const [
      'measures_component.css'
    ])

class MeasuresComponent extends Object {

  final AuthService _authService;
  final MeasureService _measureService;
  final ObjectiveService _objectiveService;

  @Input()
  Objective objective;

  Measure selectedMeasure;


  bool detailVisible;
  bool progressVisible;
  bool addMeasureProgress;
  //Map<Measure, bool> expandedControl = Map();

  MenuModel<MenuItem> menuModel;
  MeasuresComponent(this._authService, this._measureService, this._objectiveService) {
    menuModel = new MenuModel([new MenuItemGroup(
        [new MenuItem(CommonMsg.buttonLabel('Edit'), icon: new Icon('edit') , action: () => detailVisible = true),
        new MenuItem(CommonMsg.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete()),
        new MenuItem('Progress History', icon: new Icon('show_chart'), action: () { progressVisible = true; addMeasureProgress = false;}) ])], icon: new Icon('menu'));
  }

  // Define messages and labels
  static final String progressLabel =  MeasureMsg.label('Progress');
  static final String startValueLabel =  MeasureMsg.label('Start Value');
  static final String currentValueLabel =  MeasureMsg.label('Current Value');
  static final String endValueLabel =  MeasureMsg.label('End Value');

  void selectMeasure(Measure measure) {
    selectedMeasure = measure;
  }

  /// Call a soft (logic) delete
  void delete() async {
    try {

      // Created just to pass instance from TimelineItem. No addition data is need, just [id, isDeleted and deletedBy].
      Measure measureDeleted = new Measure();
      measureDeleted.id = selectedMeasure.id;
      measureDeleted.isDeleted = true;

      measureDeleted.lastHistoryItem.setClientSideValues(user: _authService.authenticatedUser, changedValues: MeasureFacilities.differenceToJson(measureDeleted, selectedMeasure));

      await _measureService.saveMeasure(objective.id, measureDeleted);
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

  toInt(double value) => value?.toInt();

  List<Measure> get measures {
    return objective?.measures;
  }

  void changeListItem(String measureId) async {

    Measure newMeasure = await _measureService.getMeasureById(measureId);

    if (selectedMeasure == null) {
      measures.add(newMeasure);
    } else {
      measures[measures.indexOf(selectedMeasure)] = newMeasure;
      //measure.cloneTo(measures[measures.indexOf(selectedMeasure)]);
    }


  }

  void closeProgress() async {
    progressVisible = false;

    // recovery the actual measture;
    measures[measures.indexOf(selectedMeasure)] = await _measureService.getMeasureById(selectedMeasure.id);
  }

}
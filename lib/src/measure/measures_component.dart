// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';
// import 'package:angular_components/angular_components.dart';

import 'package:angular_components/material_slider/material_slider.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/model/ui/icon.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_menu/material_menu.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';


import 'package:angular_components/model/menu/menu.dart';

import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_server/model/objective/measure.dart';

import 'package:auge_web/message/messages.dart';

import 'package:auge_web/src/measure/measure_detail_component.dart';

import 'package:auge_web/src/measure/measure_service.dart';

@Component(
    selector: 'auge-measures',
    providers: [MeasureService],
    directives: const [
      coreDirectives,
      // materialDirectives,
      MaterialSliderComponent,
      MaterialExpansionPanel,
      MaterialExpansionPanelSet,
      MaterialIconComponent,
      MaterialMenuComponent,
      MaterialTooltipDirective,
      ModalComponent,
      NgModel,
      MeasureDetailComponent,
    ],
    pipes: const [commonPipes],
    templateUrl: 'measures_component.html',
    styleUrls: const [
      'measures_component.css'
    ])

class MeasuresComponent extends Object {

  final MeasureService _measureService;

  @Input()
  Objective objective;

  Measure selectedMeasure;

  bool detailVisible;

  MenuModel<MenuItem> menuModel;
  MeasuresComponent(this._measureService) {

    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMessage.buttonLabel('Edit'), icon: new Icon('edit') , action: () => detailVisible = true), new MenuItem(CommonMessage.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete())])], icon: new Icon('menu'));
  }

  // Define messages and labels
  static final String progressLabel =  MeasureMessage.label('Progress');
  static final String startValueLabel =  MeasureMessage.label('Start Value');
  static final String currentValueLabel =  MeasureMessage.label('Current Value');
  static final String endValueLabel =  MeasureMessage.label('End Value');

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
    return measure?.currentValue == null || measure?.currentValue == 0 ? 0 :  (measure?.currentValue / (measure?.startValue + measure?.endValue) * 100).toInt() ;
  }

  void updateMeasure(Measure measure, num value) {
   // measure.currentValue = value;
    measure.startValue <= measure.endValue ? measure.currentValue = value : measure.currentValue = measure.startValue + measure.endValue - value;
    _measureService.saveMeasure(objective.id, measure);
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
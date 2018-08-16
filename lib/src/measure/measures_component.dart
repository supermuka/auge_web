// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';
import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
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
      materialDirectives,
      MeasureDetailComponent,
    ],
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
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
  }

  int progress(Measure measure) {
    return measure?.currentValue == null || measure?.currentValue == 0 ? 0 :  (measure?.currentValue / (measure?.startValue + measure?.endValue) * 100).toInt() ;
  }

  void updateMeasure(Measure measure, num value) {
    measure.currentValue = value;
    _measureService.saveMeasure(objective.id, measure);
  }

  toInt(double value) => value?.toInt();

  List<Measure> get measures {
    return objective?.measures;
  }

  void changeListItemDetail(Measure measure) {
    if (selectedMeasure == null) {
      measures.add(measure);
    } else {
      measure.cloneTo(measures[measures.indexOf(selectedMeasure)]);
    }
  }
}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';
import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_components/model/menu/menu.dart';

import 'package:auge_shared/model/objective/objective.dart';
import 'package:auge_shared/model/objective/measure.dart';
import 'package:auge_shared/message/messages.dart';

import 'package:auge_web/src/measure/measure_detail_component.dart';

import 'package:auge_web/src/search/search_service.dart';
import 'package:auge_web/src/measure/measure_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';

import 'package:auge_web/services/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/app_layout/app_layout_home.template.dart' as app_layout_home;
import 'package:auge_web/src/measure/measure_detail_component.template.dart' as measure_detail_component;

@Component(
    selector: 'auge-measures',
    providers: const [MeasureService],
    directives: const [
      coreDirectives,
      materialDirectives,
      MeasureDetailComponent,
    ],
    templateUrl: 'measures_component.html',
    styleUrls: const [
      'measures_component.css'
    ])

class MeasuresComponent extends Object implements OnInit {

  final MeasureService _measureService;
  final SearchService _searchService;
  final Router _router;

  @Input()
  Objective objective;

  Measure selectedMeasure;

  bool detailVisible;

  MenuModel<MenuItem> menuModel;
  MeasuresComponent(/* this._authService, this._appLayoutService, this._objectiveService, */ this._measureService, this._searchService, this._router) {

    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMessage.buttonLabel('Edit'), icon: new Icon('edit') , action: () => detailVisible = true), new MenuItem(CommonMessage.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete())])], icon: new Icon('menu'));
  }

  // Define messages and labels
  static final String progressLabel =  MeasureMessage.label('Progress');
  static final String startValueLabel =  MeasureMessage.label('Start Value');
  static final String currentValueLabel =  MeasureMessage.label('Current Value');
  static final String endValueLabel =  MeasureMessage.label('End Value');

  @override
  void ngOnInit() {


  }

  void selectMeasure(Measure measure) {
    selectedMeasure = measure;
  }

  Future<Null> delete() async {
    try {
      await _measureService.deleteMeasure(selectedMeasure.id);
      objective.measures.remove(selectedMeasure);
    } catch(e) {
      print(e);
    }
  }

  void goToDetail(Measure measure) {

    if (measure == null) {
      _router.navigate(AppRoutes.measureDetailAddRoute.toUrl(parameters: {AppRoutes.objectiveIdParameter:objective.id}));
    } else {
      _router.navigate(AppRoutes.measureDetailRoute.toUrl(parameters: {
        AppRoutes.objectiveIdParameter: objective.id,
        AppRoutes.measureIdParameter: measure != null ? measure.id : null
      }));
    }
  }

  void goToDetailFromObjective(Measure measure) {
    if (measure == null) {
      _router.navigate(AppRoutes.measureDetailAddRouteFromObjective.toUrl(parameters: {AppRoutes.objectiveIdParameter:objective.id}));
    } else {
      _router.navigate(AppRoutes.measureDetailRouteFromObjective.toUrl(parameters: {
        AppRoutes.objectiveIdParameter: objective.id,
        AppRoutes.measureIdParameter: measure != null ? measure.id : null
      }));
    }
  }

  int progress(Measure measure) {
    return measure?.currentValue == null || measure?.currentValue == 0 ? 0 :  (measure?.currentValue / (measure?.startValue + measure?.endValue) * 100).toInt() ;
  }

  void updateMeasure(Measure measure) {
    _measureService.saveMeasure(objective.id, measure);
  }

  toInt(double value) => value?.toInt();

  @override
  Future<bool> canReuse(RouterState current, RouterState next) async {
    return true;
  }

  List<Measure> get measures {
    return _searchService?.searchTerm.toString().isEmpty ? objective?.measures : objective?.measures?.where((t) => t.name.contains(_searchService.searchTerm)).toList();
  }

  void stopPropagation(MouseEvent me) {
    me.stopPropagation();
  }

  void changeListItemDetail(Measure measure) {
    if (selectedMeasure == null) {
      measures.add(measure);
    } else {
      measure.cloneTo(measures[measures.indexOf(selectedMeasure)]);
    }
  }

}
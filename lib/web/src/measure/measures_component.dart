// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_components/model/menu/menu.dart';
import 'package:auge/shared/model/objective/objective.dart';
import 'package:auge/shared/model/objective/measure.dart';
import 'package:auge/shared/message/messages.dart';

import 'package:auge/web/src/search/search_service.dart';
import 'package:auge/web/src/auth/auth_service.dart';
import 'package:auge/web/src/app_layout/app_layout_service.dart';
import 'package:auge/web/src/measure/measure_service.dart';
import 'package:auge/web/src/objective/objective_service.dart';

import 'package:auge/web/services/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge/web/src/app_layout/app_layout_home.template.dart' as app_layout_home;
import 'package:auge/web/src/measure/measure_detail_component.template.dart' as measure_detail_component;

@Component(
    selector: 'auge-measures',
    providers: const [ObjectiveService, MeasureService],
    directives: const [
      coreDirectives,
      routerDirectives,
      materialDirectives,
    ],
    templateUrl: 'measures_component.html',
    styleUrls: const [
      'measures_component.css'
    ])

class MeasuresComponent extends Object with CanReuse implements OnActivate, OnDestroy {

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final ObjectiveService _objectiveService;
  final MeasureService _measureService;
  final SearchService _searchService;
  final Router _router;


  Objective objective;

  Measure _selectedMeasure;

  final List<RouteDefinition> routes = [

    new RouteDefinition(
        routePath: AppRoutes.appLayoutHomeRoute,
        component: app_layout_home.AppLayoutHomeComponentNgFactory,
        useAsDefault: true,
       ),

    new RouteDefinition(
      routePath: AppRoutes.measureDetailAddRoute,
      component: measure_detail_component.MeasureDetailComponentNgFactory,
      // useAsDefault: true
    ),

    new RouteDefinition(
      routePath: AppRoutes.measureDetailRoute,
      component: measure_detail_component.MeasureDetailComponentNgFactory,

     // useAsDefault: true
    ),
  ];

  MenuModel<MenuItem> menuModel;
  MeasuresComponent(this._authService, this._appLayoutService, this._objectiveService, this._measureService, this._searchService, this._router) {

    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMessage.buttonLabel('Edit'), icon: new Icon('edit') , action: () => goToDetail(_selectedMeasure)), new MenuItem(CommonMessage.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete(_selectedMeasure))])], icon: new Icon('menu'));
  }

  // Define messages and labels
  static final String progressLabel =  MeasureMessage.label('Progress');
  static final String startValueLabel =  MeasureMessage.label('Start Value');
  static final String currentValueLabel =  MeasureMessage.label('Current Value');
  static final String endValueLabel =  MeasureMessage.label('End Value');

  @override
  Future onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {

    if (this._authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
    }

    _appLayoutService.headerTitle = MeasureMessage.label('Measures');

    String id = routerStateCurrent.parameters[AppRoutes.objectiveIdParameter];

    if (id != null && id.isNotEmpty) {
      objective =  await _objectiveService.getObjectiveById(id, withMeasures: true);
    }

    _appLayoutService.searchEnabled = true;
  }

  @override
  ngOnDestroy() async {
    _appLayoutService.searchEnabled = false;

  }

  void selectMeasure(Measure measure) {

    _selectedMeasure = measure;

  }

  Future<Null> delete(Measure measure) async {
    try {
      await _measureService.deleteMeasure(measure.id);
      objective.measures.remove(measure);
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

  //List<Measure> get measures => measures;

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



}
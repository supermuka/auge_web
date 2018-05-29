// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:html';
import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_components/material_menu/material_menu.dart';
import 'package:angular_components/model/menu/menu.dart';

import 'package:auge/shared/model/objective/objective.dart';
import 'package:auge/shared/message/messages.dart';

import 'package:auge/web/src/objective/objective_service.dart';
import 'package:auge/web/src/search/search_service.dart';
import 'package:auge/web/src/auth/auth_service.dart';
import 'package:auge/web/src/app_layout/app_layout_service.dart';

import 'package:auge/web/utils/levius_progress_circle.dart';

import 'package:auge/web/services/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge/web/src/app_layout/app_layout_home.template.dart' as app_layout_home;
import 'package:auge/web/src/objective/objective_detail_component.template.dart' as objective_detail_component;

@Component(
    selector: 'auge-objective',
    providers: const [ObjectiveService],
    directives: const [
      coreDirectives,
      NgStyle,
      routerDirectives,
      AutoFocusDirective,
      materialDirectives,
      MaterialInputComponent,
      MaterialFabComponent,
      MaterialButtonComponent,
      MaterialIconComponent,
      MaterialDialogComponent,
      MaterialMenuComponent,
      ClickableTooltipTargetDirective,
      DarkThemeDirective,
      MaterialIconComponent,
      MaterialButtonComponent,
      MaterialIconTooltipComponent,
      MaterialInkTooltipComponent,
      MaterialPaperTooltipComponent,
      MaterialPopupComponent,
      MaterialTooltipDirective,
      MaterialTooltipTargetDirective,
      MaterialTooltipSourceDirective,
      ModalComponent,
      LeviusProgressCircleComponent,
    ],
    templateUrl: 'objectives_component.html',
    styleUrls: const [
      'objectives_component.css'
    ])

class ObjectivesComponent extends Object with CanReuse implements OnActivate, OnDestroy {

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final ObjectiveService _objectiveService;
  final SearchService _searchService;
  final Router _router;

  List<Objective> _objectives = new List();
  Objective _selectedObjective;

  final List<RouteDefinition> routes = [

    new RouteDefinition(
        routePath: AppRoutes.appLayoutHomeRoute,
        component: app_layout_home.AppLayoutHomeComponentNgFactory,
        useAsDefault: true,
       ),

    new RouteDefinition(
      routePath: AppRoutes.objetivoDetalheAdicionarRoute,
      component: objective_detail_component.ObjectiveDetailComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.objetivoDetalheRoute,
      component: objective_detail_component.ObjectiveDetailComponentNgFactory,
    ),
  ];

  MenuModel<MenuItem> menuModel;

  ObjectivesComponent(this._authService, this._appLayoutService, this._objectiveService, this._searchService, this._router) {
    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMessage.buttonLabel('Edit'), icon: new Icon('edit') , action: () => goToDetail(_selectedObjective)), new MenuItem(CommonMessage.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete(_selectedObjective))])], icon: new Icon('menu'));
  }

  @override
  Future onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {

    _appLayoutService.headerTitle = ObjectiveMessage.label('Objectives');

    _objectives = await _objectiveService.getObjectives(_authService.selectedOrganization.id, withMeasures: true);

    _appLayoutService.searchEnabled = true;

  }

  List<Objective> get objectives {
    return _searchService?.searchTerm.toString().isEmpty ? _objectives : _objectives.where((t) => t.name.contains(_searchService.searchTerm)).toList();
  }

  @override
  ngOnDestroy() async {
    _appLayoutService.searchEnabled = false;

  }

  void goToDetail(Objective objective) {
    if (objective == null) {
      _router.navigate(AppRoutes.objetivoDetalheAdicionarRoute.toUrl());
    } else {
      _router.navigate(AppRoutes.objetivoDetalheRoute.toUrl(parameters: {
        AppRoutes.objectiveIdParameter: objective != null ? objective.id : null
      }));
    }
  }

  void selectObjective(Objective objective) {
    _selectedObjective = objective;
  }

  Future<Null> delete(Objective objective) async {
    try {
      await _objectiveService.deleteObjective(objective.id);
      objectives.remove(objective);
    } catch(e) {
      print(e);
    }
  }

  void goToMeasure(Objective objective) {
    _router.navigate(AppRoutes.measuresRoute.toUrl(parameters: { AppRoutes.objectiveIdParameter: objective.id }));
  }

  void stopPropagation(MouseEvent me) {
    me.stopPropagation();
  }
}
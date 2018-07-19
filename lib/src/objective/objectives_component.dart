// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:html';
import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
//import 'package:angular_components/angular_components.dart';
import 'package:angular_components/material_button/material_fab.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_menu/material_menu.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/model/menu/menu.dart';
import 'package:angular_components/model/ui/icon.dart';
import 'package:angular_components/model/action/async_action.dart';

import 'package:angular_components/laminate/components/modal/modal.dart';

import 'package:auge_shared/model/objective/objective.dart';
import 'package:auge_shared/message/messages.dart';

import 'package:auge_web/src/objective/objective_detail_component.dart';
import 'package:auge_web/src/measure/measures_component.dart';

import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/src/search/search_service.dart';
import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';

import 'package:auge_web/services/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
// import 'package:auge_web/src/app_layout/app_layout_home.template.dart' as app_layout_home;
// import 'package:auge_web/src/objective/objective_detail_component.template.dart' as objective_detail_component;
// import 'package:auge_web/src/measure/measure_detail_component.template.dart' as measure_detail_component;

@Component(
    selector: 'auge-objectives',
    providers: const [ObjectiveService],
    directives: const [
      coreDirectives,
      routerDirectives,
      NgFor,
      NgIf,
      MaterialFabComponent,
      MaterialIconComponent,
      MaterialExpansionPanelSet,
      MaterialExpansionPanel,
      MaterialMenuComponent,
      ModalComponent,
      MeasuresComponent,
      ObjectiveDetailComponent,
    ],
    templateUrl: 'objectives_component.html',
    styleUrls: const [
      'objectives_component.css'
    ])

class ObjectivesComponent extends Object /* with CanReuse  */ implements OnInit, OnActivate, OnDestroy {

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final ObjectiveService _objectiveService;
  final SearchService _searchService;
  final Router _router;

  List<Objective> _objectives = new List();

  Objective selectedObjective;

  bool detailVisible = false;

  MenuModel<MenuItem> menuModel;

  ObjectivesComponent(this._authService, this._appLayoutService, this._objectiveService, this._searchService, this._router) {
    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMessage.buttonLabel('Edit'), icon: new Icon('edit') , action: () => viewDetail()), new MenuItem(CommonMessage.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete())])], icon: new Icon('menu'));
  }

  @override
  Future onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {


    if (this._authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
    }

    _appLayoutService.headerTitle = ObjectiveMessage.label('Objectives');

    _objectives = await _objectiveService.getObjectives(_authService.selectedOrganization.id, withMeasures: true);

    _appLayoutService.searchEnabled = true;

  }

  @override
  void ngOnInit() {
   // expanded = false;
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
      _router.navigate(AppRoutes.objectiveDetailAddRoute.toUrl());
    } else {
      _router.navigate(AppRoutes.objectiveDetailRoute.toUrl(parameters: {
        AppRoutes.objectiveIdParameter: objective != null ? objective.id : null
      }));
    }
  }

  void viewDetail() {
     detailVisible = true;
  }

  void selectObjective(Objective objective) {
    selectedObjective = objective;
  }

  Future<Null> delete() async {
    try {
      await _objectiveService.deleteObjective(selectedObjective.id);
      objectives.remove(selectedObjective);
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

  @override
  Future<bool> canReuse(RouterState current, RouterState next) async {
    return true;
  }

  void changeListDetail(Objective objetive) {

    if (selectedObjective == null) {
      objectives.add(objetive);
    } else {
      objetive.cloneTo(objectives[objectives.indexOf(selectedObjective)]);
    }
  }
/*
  void xx(AsyncAction event) {
    print('xx');
    event.cancel();
  }
  */
}
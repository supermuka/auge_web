// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'package:angular_components/material_button/material_fab.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_slider/material_slider.dart';
import 'package:angular_components/material_menu/material_menu.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/model/menu/menu.dart';
import 'package:angular_components/model/ui/icon.dart';

import 'package:angular_components/laminate/components/modal/modal.dart';

import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_web/message/messages.dart';

import 'package:auge_web/src/objective/objective_detail_component.dart';
import 'package:auge_web/src/measure/measures_component.dart';
import 'package:auge_web/src/initiative/initiatives_summary_component.dart';

import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/src/search/search_service.dart';
import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';

import 'package:auge_web/services/app_routes.dart';

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
      MaterialSliderComponent,
      ModalComponent,
      ObjectiveDetailComponent,
      MeasuresComponent,
      InitiativesSummaryComponent,
    ],
    templateUrl: 'objectives_component.html',
    styleUrls: const [
      'objectives_component.css'
    ])

class ObjectivesComponent extends Object implements OnActivate, OnDestroy {

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final ObjectiveService _objectiveService;
  final SearchService _searchService;
  final Router _router;

  List<Objective> _objectives = new List();

  Objective selectedObjective;
  String initialObjectiveId;

  bool detailVisible = false;

  MenuModel<MenuItem> menuModel;

  ObjectivesComponent(this._authService, this._appLayoutService, this._objectiveService, this._searchService, this._router) {
    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMessage.buttonLabel('Edit'), icon: new Icon('edit') , action: () => detailVisible = true), new MenuItem(CommonMessage.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete())])], icon: new Icon('menu'));
  }

  @override
  Future onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {

    if (this._authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
    }

    _appLayoutService.headerTitle = ObjectiveMessage.label('Objectives');
    _objectives = await _objectiveService.getObjectives(_authService.selectedOrganization.id, withMeasures: true);
    _appLayoutService.searchEnabled = true;

    // Expand panel whether [Id] objective is informed.
    if (routerStateCurrent.queryParameters.containsKey(AppRoutes.objectiveIdParameter)) {
      initialObjectiveId = routerStateCurrent.queryParameters[AppRoutes.objectiveIdParameter];
    }
  }

  List<Objective> get objectives {
    return _searchService?.searchTerm.toString().isEmpty ? _objectives : _objectives.where((t) => t.name.contains(_searchService.searchTerm)).toList();
  }

  @override
  ngOnDestroy() async {
    _appLayoutService.searchEnabled = false;
  }

  void selectObjective(Objective objective) {
    selectedObjective = objective;
  }

  void delete() async {
    try {
      await _objectiveService.deleteObjective(selectedObjective.id);
      objectives.remove(selectedObjective);
    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
  }

  void changeListItemDetail(Objective objetive) {

    if (selectedObjective == null) {
      objectives.add(objetive);
    } else {
      objetive.cloneTo(objectives[objectives.indexOf(selectedObjective)]);
    }
  }

  void viewDetail(bool detailVisible) {
    this.detailVisible = detailVisible;
  }

  bool expandedInitial(iObjective) {
    if (iObjective.id == initialObjectiveId) {
      return true;
    } else {
      return false;
    }
  }
}
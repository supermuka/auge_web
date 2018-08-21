// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';
import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_components/model/menu/menu.dart';

import 'package:auge_web/message/messages.dart';

import 'package:auge_server/model/initiative/initiative.dart';
import 'package:auge_server/model/objective/objective.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/initiative/initiative_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/src/search/search_service.dart';

import 'package:auge_web/src/initiative/initiatives_filter_component.dart';
import 'package:auge_web/src/initiative/initiative_summary_component.dart';
import 'package:auge_web/src/initiative/initiative_detail_component.dart';

import 'package:auge_web/src/work_item/work_items_component.dart';
import 'package:auge_web/src/work_item/work_items_list_component.dart';

import 'package:auge_web/src/app_layout/app_layout_service.dart';


import 'package:auge_web/services/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
/*
import 'package:auge_web/src/app_layout/app_layout_home.template.dart' as app_layout_home;
import 'package:auge_web/src/initiative/initiative_detail_component.template.dart' as initiative_detail_component;
*/


@Component(
    selector: 'auge-initiatives',
    providers: const [InitiativeService, ObjectiveService],
    directives: const [
      coreDirectives,
      routerDirectives,
      materialDirectives,
      InitiativesFilterComponent,
      InitiativeSummaryComponent,
      InitiativeDetailComponent,
      WorkItemsComponent,
      WorkItemsListComponent,

    ],
    templateUrl: 'initiatives_component.html',
    styleUrls: const [
      'initiatives_component.css'
    ])

class InitiativesComponent extends Object with CanReuse implements /* OnInit, */ OnActivate, OnDestroy {

  final InitiativeService _initiativeService;
  final ObjectiveService _objectiveService;
  final SearchService _searchService;
  final Router _router;
  final AppLayoutService _appLayoutService;
  final AuthService _authService;

  InitiativesFilterParam initiativesFilterParam;

  bool detailVisible = false;
  List<Initiative> _initiatives = new List();
  Initiative selectedInitiative;

  bool expanded = false;
  List<bool> wideControl = new List();
  List<bool> expandedControl = new List();

  MenuModel<MenuItem> menuModel;
  InitiativesComponent(this._authService, this._appLayoutService, this._initiativeService, this._objectiveService, this._searchService, this._router) {
    initiativesFilterParam = InitiativesFilterParam();
    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMessage.buttonLabel('Edit'), icon: new Icon('edit') , action: () => viewDetail(true)), new MenuItem(CommonMessage.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete())])], icon: new Icon('menu'));
  }

  @override
  Future onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {

    if (this._authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
    }
    
    _appLayoutService.headerTitle = InitiativeMessage.label('Initiatives');

    if (routerStateCurrent.parameters.containsKey(AppRoutes.objectiveIdParameter)) {
        String objectiveId = routerStateCurrent.parameters[AppRoutes
            .objectiveIdParameter];

        try {
          if (objectiveId != null || objectiveId.isNotEmpty) {
              initiativesFilterParam.objective = await _objectiveService.getObjectiveById(objectiveId, withMeasures: false);
          }
          _initiatives = await _initiativeService.getInitiatives(_authService.selectedOrganization?.id, withWorkItems: true);
       } catch (e) {
        _appLayoutService.error = e.toString();
        rethrow;
      }
    }

    wideControl = new List<bool>.filled(_initiatives.length, false);
    expandedControl = new List<bool>.filled(_initiatives.length, false);

    _appLayoutService.enabledSearch = true;
  }

  get visibleFilter => _searchService.visibleFilter;

  set visibleFilter(bool visibleFilter) {
    _searchService.visibleFilter = visibleFilter;
  }

  List<Initiative> get initiatives {

    List<Initiative> initiativesFilter;
    initiativesFilter = initiativesFilterParam.objective == null ? _initiatives : _initiatives.where((t) => t.objective != null && t.objective.id == initiativesFilterParam.objective.id).toList();

    return _searchService?.searchTerm.toString().isEmpty ? initiativesFilter : initiativesFilter.where((t) => t.name.contains(_searchService.searchTerm)).toList();
  }

  @override
  ngOnDestroy() async {
    _appLayoutService.enabledSearch = false;

  }

  void goToWorkItem(Initiative initiative) {
    _router.navigate(AppRoutes.workItemsRoute.toUrl(parameters: { AppRoutes.initiativeIdParameter: initiative.id }));
  }

  void stopPropagation(MouseEvent me) {
    me.stopPropagation();
  }

  void selectInitiative(Initiative item) {
    selectedInitiative = item;
  }

  void delete() async {
    try {
      await _initiativeService.deleteInitiative(selectedInitiative.id);
      initiatives.remove(selectedInitiative);
    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  void viewDetail(bool detailVisible) {
    this.detailVisible = detailVisible;
  }

  void changeListItemWithDetail(Initiative initiative) {
    if (selectedInitiative == null) {
      initiatives.add(initiative);
    } else {
      initiative.cloneTo(initiatives[initiatives.indexOf(selectedInitiative)]);
    }
  }

  @override
  Future<bool> canReuse(RouterState current, RouterState next) async {
    return true;
  }
}


// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';
import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

/* import 'package:angular_components/angular_components.dart'; */
import 'package:angular_components/material_button/material_fab.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_menu/material_menu.dart';
import 'package:angular_components/model/ui/icon.dart';
import 'package:angular_components/model/menu/menu.dart';

import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';

import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_web/message/messages.dart';

import 'package:auge_web/src/objective/objective_detail_component.dart';
import 'package:auge_web/src/objective/objective_timeline_component.dart';

import 'package:auge_web/src/measure/measures_component.dart';
import 'package:auge_web/src/initiative/initiatives_summary_component.dart';

import 'package:auge_web/services/common_service.dart' as common_service;
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
      /* materialDirectives, */
      MaterialFabComponent,
      MaterialIconComponent,
      MaterialExpansionPanel,
      MaterialExpansionPanelSet,
      MaterialTooltipDirective,
      MaterialMenuComponent,
      ObjectiveDetailComponent,
      ObjectiveTimelineComponent,
      MeasuresComponent,
      InitiativesSummaryComponent,
    ],
    pipes: const [commonPipes],
    templateUrl: 'objectives_component.html',
    styleUrls: const [
      'objectives_component.css'
    ])

class ObjectivesComponent extends Object implements AfterViewInit, OnActivate, OnDestroy {

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final ObjectiveService _objectiveService;
  final SearchService _searchService;
  final Router _router;

  List<Objective> _objectives = List();
  Map<Objective, bool> expandedControl = Map();

  Objective selectedObjective;
  String initialObjectiveId;

  bool detailVisible = false;

  MenuModel<MenuItem> menuModel;

  // Define messages and labels
  static final String alignedToLabel =  ObjectiveMsg.label('Aligned To');
  static final String leaderLabel =  ObjectiveMsg.label('Leader');
  static final String groupLabel =  ObjectiveMsg.label('Group');

  ObjectivesComponent(this._authService, this._appLayoutService, this._objectiveService, this._searchService, this._router) {
    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMsg.buttonLabel('Edit'), icon: new Icon('edit') , action: () => detailVisible = true), new MenuItem(CommonMsg.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete())])], icon: new Icon('menu'));
  }


  void onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {

    if (_authService.selectedOrganization == null || _authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }

    _appLayoutService.headerTitle = ObjectiveMsg.label('Objectives');

    _appLayoutService.enabledSearch = true;

    // Expand panel whether [Id] objective is informed.
    if (routerStateCurrent.queryParameters.containsKey(AppRoutes.objectiveIdParameter)) {
      initialObjectiveId = routerStateCurrent.queryParameters[AppRoutes.objectiveIdParameter];
    }

    try {
      List<Objective> objectivesAux =  await _objectiveService.getObjectives(
          _authService.selectedOrganization.id, withMeasures: true, withProfile: true /*, withTimeline: true */);
      _sortObjectivesOrderByGroup(objectivesAux);

      _objectives = objectivesAux;

      if (initialObjectiveId != null) {
        Objective initialObjective = _objectives.singleWhere((o) => o.id == initialObjectiveId);
        expandedControl[initialObjective] = true;


      }
    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  void ngAfterViewInit() {
    if (initialObjectiveId != null) {
    Element e = document.querySelector('#initial-objective');
    if (e != null)
    e.scrollIntoView(ScrollAlignment.TOP);
    }
  }


  List<Objective> get objectives {
    return _searchService?.searchTerm.toString().isEmpty ? _objectives : _objectives.where((t) => t.name.contains(_searchService.searchTerm)).toList();
  }

  @override
  ngOnDestroy() async {
    _appLayoutService.enabledSearch = false;
  }

  void selectObjective(Objective objective) {
    selectedObjective = objective;
  }

  void delete() async {
    try {
      await _objectiveService.deleteObjective(selectedObjective.id);

      expandedControl.remove(selectedObjective);
      objectives.remove(selectedObjective);

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  void changeListItem(String objetiveId) async {

    Objective newObjective = await _objectiveService.getObjectiveById(objetiveId, withMeasures: true, withProfile: true /*, withTimeline: true */);

    if (selectedObjective == null && !newObjective.archived) {
      objectives.add(newObjective);
      expandedControl[newObjective] = true;

    } else {
      if (newObjective.archived) {
        expandedControl.remove(selectedObjective);
        objectives.remove(selectedObjective);
      } else {
        expandedControl[newObjective] = true;
        objectives[objectives.indexOf(selectedObjective)] = newObjective;
      //  newObjective.cloneTo(objectives[objectives.indexOf(selectedObjective)]);
      }
    }
    _sortObjectivesOrderByGroup(objectives);
  }

  void viewDetail(bool detailVisible) {
    this.detailVisible = detailVisible;
  }

  String userUrlImage(String userProfileImage) {
    return common_service.userUrlImage(userProfileImage);
  }

  String colorFromUuid(String id) {
    return common_service.colorFromUuid(id);
  }

  String firstLetter(String name) {
    return common_service.firstLetter(name);
  }

  // Order by to group
  void _sortObjectivesOrderByGroup(List<Objective> objectives) {
    objectives.sort((a, b) => a?.group == null || b?.group == null ? -1 : a.group.name.compareTo(b.group.name));
  }

  void scrollInit(bool event, HtmlElement element) {
    if (event && initialObjectiveId != null) {
      if (element != null) {

        // Modal, needs to await the dom elements creation.
        new Future.delayed(Duration.zero, () {

            element.scrollIntoView(ScrollAlignment.TOP);
            initialObjectiveId = null;

        });
        /*
        common_service.startTimeoutTimer(() {
          // Needs include timer to wait angular componentes to render the components before to scroll.
          element.scrollIntoView(ScrollAlignment.TOP);
          initialObjectiveId = null;
          }, 300);
          */

      }
    }
  }



}
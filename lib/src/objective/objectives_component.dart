// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';
import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'package:angular_components/material_button/material_fab.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_menu/material_menu.dart';
import 'package:angular_components/model/ui/icon.dart';
import 'package:angular_components/model/menu/menu.dart';
import 'package:angular_components/material_select/material_dropdown_select.dart';
import 'package:angular_components/material_toggle/material_toggle.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';

import 'package:auge_server/model/general/authorization.dart';
import 'package:auge_server/model/objective/objective.dart';

import 'package:auge_web/message/messages.dart';
import 'package:auge_web/src/objective/objective_detail_component.dart';
import 'package:auge_web/src/history_timeline/history_timeline_component.dart';
import 'package:auge_web/src/measure/measures_component.dart';
import 'package:auge_web/src/initiative/initiatives_summary_component.dart';
import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/src/search/search_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/services/app_routes.dart';

@Component(
    selector: 'auge-objectives',
    providers: const [ObjectiveService, HistoryTimelineService],
    directives: const [
      coreDirectives,
      routerDirectives,
      MaterialFabComponent,
      MaterialIconComponent,
      MaterialDropdownSelectComponent,
      MaterialToggleComponent,
      MaterialExpansionPanel,
      MaterialExpansionPanelSet,
      MaterialTooltipDirective,
      MaterialMenuComponent,
      ObjectiveDetailComponent,
      HistoryTimelineComponent,
      MeasuresComponent,
      InitiativesSummaryComponent,
    ],
    pipes: const [commonPipes],
    templateUrl: 'objectives_component.html',
    styleUrls: const [
      'objectives_component.css'
    ])

class ObjectivesComponent extends Object implements AfterViewInit, OnActivate, OnDestroy {

  final AppLayoutService _appLayoutService;
  final ObjectiveService _objectiveService;
  final SearchService _searchService;
  final HistoryTimelineService _historyTimelineService;
  final Router _router;

  List<Objective> _objectives = List();

  // Map<Objective, bool> expandedControl = Map();
  String expandedObjectiveId;
  Objective selectedObjective;
  String initialObjectiveId;

  bool detailVisible = false;
  String mainColWidth = '100%';
  bool _timelineVisible = false;


  MenuModel<MenuItem> menuModel;

    // Define messages and labels
  static final String sortedByLabel = ObjectiveMsg.label('Sorted By');
  static final String nameLabel = ObjectiveMsg.label('Name');
  static final String alignedToLabel =  ObjectiveMsg.label('Aligned To');
  static final String leaderLabel =  ObjectiveMsg.label('Leader');
  static final String groupLabel =  ObjectiveMsg.label('Group');
  static final String startDateLabel =  ObjectiveMsg.label('Start Date');
  static final String endDateLabel =  ObjectiveMsg.label('End Date');

  final objectivesSortedByOptions = [nameLabel, groupLabel, leaderLabel, startDateLabel, endDateLabel];

  String _sortedBy = nameLabel;

  ObjectivesComponent(this._appLayoutService, this._objectiveService, this._searchService, this._historyTimelineService, this._router) {
    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMsg.buttonLabel('Edit'), icon: new Icon('edit') , action: () => detailVisible = true), new MenuItem(CommonMsg.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete())])], icon: new Icon('menu'));
  }

  set sortedBy(String sortedBy) {
    _sortedBy = sortedBy;
    _sortObjectives();
  }

  get sortedBy => _sortedBy;


  bool get timelineVisible {
    return _timelineVisible;
  }
  set timelineVisible(bool visible) {
    _timelineVisible = visible;
    if (_timelineVisible) {
      mainColWidth = '75%';
      _historyTimelineService.refreshHistory(SystemModule.objectives.index);
    } else {
      mainColWidth = '100%';
    }
    // (!_timelineVisible) ?mainColWidth = '100%' : mainColWidth = '75%';
  }

  void onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {

    if (_objectiveService.authService.selectedOrganization == null || _objectiveService.authService.authenticatedUser == null) {
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
      _objectives = await getObjetives();
      _sortObjectives();

      if (initialObjectiveId != null) {
        Objective initialObjective = _objectives.singleWhere((o) => o.id == initialObjectiveId);

        expandedObjectiveId = initialObjective.id;

        //expandedControl[initialObjective] = true;
      }
    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  Future<List<Objective>> getObjetives() async {
    List<Objective> objectivesAux =  await _objectiveService.getObjectives(
        _objectiveService.authService.selectedOrganization.id, withMeasures: true, withProfile: true);
   // _sortObjectives(objectivesAux );
    return objectivesAux;
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

  /// Call delete
  void delete() async {
    try {

      await _objectiveService.deleteObjective(selectedObjective);
      objectives.remove(selectedObjective);
      //objectives.timeline = await _objectiveService.getTimeline(objective.id);
      _historyTimelineService.refreshHistory(SystemModule.objectives.index);

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  void refreshList() async {

    _objectives = await getObjetives();
    _sortObjectives();

    if (expandedObjectiveId != null) {
      Objective expandedObjective = _objectives.singleWhere((o) => o.id == expandedObjectiveId, orElse: null);
      if (expandedObjective != null) {
        _historyTimelineService.refreshHistory(SystemModule.objectives.index);
      }
    }

    _historyTimelineService.getHistory(SystemModule.objectives.index);
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

  // Sorted by
  void _sortObjectives() {
    if (_sortedBy == nameLabel) {
      _objectives.sort((a, b) => a?.name == null || b?.name == null ? -1 : a.name.compareTo(b.name));
    } else if (_sortedBy == groupLabel) {
      _objectives.sort((a, b) => a?.group == null || b?.group == null ? -1 : a.group.name.compareTo(b.group.name));
    } else if (_sortedBy == leaderLabel) {
      _objectives.sort((a, b) => a?.leader == null || b?.leader == null ? -1 : a.leader.name.compareTo(b.leader.name));
    } else if (_sortedBy == startDateLabel) {
      _objectives.sort((a, b) => a?.startDate == null || b?.startDate == null ? -1 : a.startDate.compareTo(b.startDate));
    } else if (_sortedBy == endDateLabel) {
      _objectives.sort((a, b) =>
      a?.endDate == null || b?.endDate == null
          ? -1
          : a.endDate.compareTo(b.endDate));
    }
  }

  void scrollInit(bool event, HtmlElement element) {
    if (event && initialObjectiveId != null) {
      if (element != null) {

        // Modal, needs to await the dom elements creation.
        new Future.delayed(Duration.zero, () {

            element.scrollIntoView(ScrollAlignment.TOP);
            initialObjectiveId = null;

        });
      }
    }
  }

  setExpandedObjectiveId(String objectiveId, bool expanded) {
    if (expanded) {
      expandedObjectiveId = objectiveId;
    } else {
      expandedObjectiveId = null;
    }
  }

  composeTooltip(String label, String name) {
    return label + ' ' + ((name == null) ? '(-)' : name);
  }

}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';
import 'dart:html';

import 'package:angular/angular.dart';

import 'package:angular_router/angular_router.dart';

import 'package:angular_components/material_button/material_fab.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_menu/material_menu.dart';
import 'package:angular_components/model/ui/icon.dart';
import 'package:angular_components/model/menu/menu.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_toggle/material_toggle.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:angular_components/material_select/material_dropdown_select.dart';
import 'package:angular_components/scorecard/scoreboard.dart';

import 'package:auge_shared/domain/work/work.dart';
import 'package:auge_shared/domain/general/authorization.dart';

import 'package:auge_shared/message/messages.dart';
import 'package:auge_shared/message/domain_messages.dart';

import 'package:auge_web/src/work/work_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/history_timeline/history_timeline_service.dart';
import 'package:auge_web/src/work/work_summary_component.dart';
import 'package:auge_web/src/history_timeline/history_timeline_component.dart';
import 'package:auge_web/src/work/work_detail_component.dart';
//import 'package:auge_web/src/work/work_stages_component.dart';
import 'package:auge_web/src/work_item/work_items_component.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/route/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/work/work_detail_component.template.dart' as work_detail_component;
import 'package:auge_web/src/work/work_stages_component.template.dart' as work_stages_component;
import 'package:auge_web/src/work_item/work_items_kanban_component.template.dart' as work_items_kanban_component;
import 'package:auge_web/src/work_item/work_item_detail_component.template.dart' as work_item_detail_component;

import 'package:auge_web/src/filter/filter_component.dart';

@Component(
    selector: 'auge-works',
    providers: const [WorkService, ObjectiveService, HistoryTimelineService],
    templateUrl: 'works_component.html',
    styleUrls: const [
      'works_component.css'
    ],
    directives: const [
      coreDirectives,
      routerDirectives,
      MaterialFabComponent,
      MaterialButtonComponent,
      MaterialIconComponent,
      MaterialDropdownSelectComponent,
      MaterialTooltipDirective,
      MaterialExpansionPanel,
      MaterialExpansionPanelSet,
      MaterialToggleComponent,
      MaterialMenuComponent,
      WorkSummaryComponent,
      WorkDetailComponent,
      WorkItemsComponent,
      HistoryTimelineComponent,
      ScoreboardComponent,
      FilterComponent,
      //WorkStagesComponent,
    ])

class WorksComponent with CanReuse implements OnInit, OnActivate, OnDestroy {

  final WorkService _workService;
  final HistoryTimelineService _historyTimelineService;
  final AppLayoutService _appLayoutService;
  final Router _router;
 // final AuthService _authService;

  final List<RouteDefinition> routes = [
    RouteDefinition(
      routePath: AppRoutes.workAddRoute,
      component: work_detail_component.WorkDetailComponentNgFactory,
    ),
    RouteDefinition(
      routePath: AppRoutes.workEditRoute,
      component: work_detail_component.WorkDetailComponentNgFactory,
    ),
    RouteDefinition(
      routePath: AppRoutes.workItemsKanbanRoute,
      component: work_items_kanban_component.WorkItemsKanbanComponentNgFactory,
    ),
    RouteDefinition(
      routePath: AppRoutes.workStagesRoute,
      component: work_stages_component.WorkStagesComponentNgFactory,
    ),
    RouteDefinition(
      routePath: AppRoutes.workItemAddRoute,
      component: work_item_detail_component.WorkItemDetailComponentNgFactory,
    ),
    RouteDefinition(
      routePath: AppRoutes.workItemEditRoute,
      component: work_item_detail_component.WorkItemDetailComponentNgFactory,
    ),
  ];

  String mainColWidth = '100%';
  bool _timelineVisible = false;

  List<Work> _works = List();
  Work selectedWork;
  String initialWorkId;
  String expandedWorkId;
 // bool hasFilter = false;

  List<FilterOption> workFilterOptions;
  List<FilterOption> groupFilterOptions;
  List<FilterOption> leaderFilterOptions;

  List<String> initialWorksIdSelectedToFilter;
  List<String> worksIdSelectedToFilter = [];
  List<String> groupsIdSelectedToFilter = [];
  List<String> leadersIdSelectedToFilter = [];

  // Just used to default and controler when dispatcher ´set´
  List<String> initialFilterOptionsIdsSelected;

  // To control workItem [list or [kanban]
  //SelectionView workItemSelectionView;

  // List<bool> wideControl = new List();
  // List<bool> expandedControl = new List();
  //Map<Work, bool> wideControl = Map();

  MenuModel<MenuItem> menuModel;

  // Define messages and labels

  static final String editButtonLabel = CommonMsg.buttonLabel(CommonMsg.editButtonLabel);
  static final String deleteButtonLabel = CommonMsg.buttonLabel(CommonMsg.deleteButtonLabel);

  static final String timelineLabel = TimelineItemdMsg.label(TimelineItemdMsg.timelineLabel);

  static final String sortedByLabel = WorkMsg.label(WorkMsg.sortedByLabel);
  static final String objectiveLabel =  WorkMsg.label(WorkMsg.objectiveLabel);
  static final String workLabel =  WorkMsg.label(WorkMsg.workLabel);
  static final String worksLabel =  WorkMsg.label(WorkMsg.worksLabel);

  static final String nameLabel = WorkDomainMsg.fieldLabel(Work.nameField);
  static final String groupLabel = WorkDomainMsg.fieldLabel(Work.groupField);
  static final String leaderLabel = WorkDomainMsg.fieldLabel(Work.leaderField);
  static final String stagesLabel = WorkDomainMsg.fieldLabel(Work.workStagesField);

  static final String headerTitle = WorkMsg.label( WorkMsg.worksLabel);

  final worksSortedByOptions = [nameLabel, groupLabel, leaderLabel];

  String _sortedBy = nameLabel;

  WorksComponent(this._appLayoutService, this._workService, this._historyTimelineService, this._router) {

    menuModel = new MenuModel([MenuItemGroup([
      MenuItem(editButtonLabel, icon: Icon('edit') , actionWithContext: (_) => goToDetail() /* viewDetail(true) */),
      MenuItem(deleteButtonLabel, icon: Icon('delete'), actionWithContext: (_) => delete()),
      MenuItem(stagesLabel, icon: Icon('view_week'), actionWithContext: (_) => goToStages(selectedWork)) ])], icon: Icon('menu'));
  }

  @override
  void ngOnInit() async {
   // workItemSelectionView = SelectionView();
  }

  set sortedBy(String sortedBy) {
    _sortedBy = sortedBy;
    _sortWorks(_works);
  }

  get sortedBy => _sortedBy;

  bool get timelineVisible {
    return _timelineVisible;
  }
  set timelineVisible(bool visible) {
    _timelineVisible = visible;
    if (_timelineVisible) {
      mainColWidth = '75%';
      _historyTimelineService.refreshHistory(SystemModule.works.index);
    } else {
      mainColWidth = '100%';
    }
    // (!_timelineVisible) ?mainColWidth = '100%' : mainColWidth = '75%';
  }
/*
  @override
  Future<bool> canReuse(RouterState current, RouterState next) async {
    // To treat CanReuse. Just define cache 'true' when this component is called from/to yours children
    if (current.routePath?.path == next.routePath?.parent?.path || current.routePath?.parent?.path == next.routePath?.path) {
      return true;
    } else {
      return false;
    }
  }

 */

  void onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {

    if (_workService.authService.authorizedOrganization == null || _workService.authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }
/*
    if (routerStatePrevious.toUrl() == AppRoutes.worksRoute.toUrl() ||
        (routerStatePrevious.toUrl() == AppRoutes.workAddRoute.toUrl() && !routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.workIdQueryParameter) ||
         routerStatePrevious.toUrl() == AppRoutes.workEditRoute.toUrl() && !routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.workIdQueryParameter) ||
         routerStatePrevious.toUrl() == AppRoutes.workItemAddRoute.toUrl() && !routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.workItemIdQueryParameter) ||
         routerStatePrevious.toUrl() == AppRoutes.workItemEditRoute.toUrl() && !routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.workItemIdQueryParameter))
    ) return;
*/

    // Expand panel whether [Id] objective is informed.
    if (routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.workIdQueryParameter)) {
      initialWorkId = routerStateCurrent.queryParameters[AppRoutesQueryParam.workIdQueryParameter];

      // Filter ids informed.
/*
      if (routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.filter)) {
        hasFilter = (routerStateCurrent.queryParameters[AppRoutesQueryParam.filter].toLowerCase() == 'true');
      }
*/
      // Used just first time, to remove queryParam initialObjectiveId.
      /*
      _router.navigate(routerStateCurrent.path, NavigationParams(queryParameters: Map.from(routerStateCurrent.queryParameters)..remove(AppRoutesQueryParam.objectiveIdQueryParameter)..remove(AppRoutesQueryParam.filter), replace: true));
      return;
   */
    }

    _appLayoutService.headerTitle = headerTitle;


    try {

      /*
      if (routerStateCurrent.parameters.containsKey(AppRoutesParam.objectiveIdParameter)) {
          String objectiveId = routerStateCurrent.parameters[AppRoutesParam
              .objectiveIdParameter];

          if (objectiveId != null || objectiveId.isNotEmpty) {
              worksFilterParam.objective = await _objectiveService.getObjective(objectiveId, withMeasures: false);
          }
      }
      */

      List<Work> worksAux = await getWorks();

      if (initialWorkId != null) {

     //   if (hasFilter) {
          initialWorksIdSelectedToFilter = [initialWorkId];
       //   hasFilter = false;
        } else {
          initialWorksIdSelectedToFilter = null;

/*
        if (hasFilter) {
          initialWorksIdSelectedToFilter = [initialWorkId];
          hasFilter = false;
        } else {
          initialWorksIdSelectedToFilter = null;
        }
*/
        //expandedObjectiveId = initialObjectiveId;
        setExpandedWorkId(initialWorkId, true);

      }
/*
      if (routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.workIdQueryParameter)) {
        setExpandedWorkId(routerStateCurrent.queryParameters[AppRoutesQueryParam
            .workIdQueryParameter], true);
      }
*/
      // Select options to filter.
      Map<String, FilterOption> works = {};
      Map<String, FilterOption> groups = {};
      Map<String, FilterOption> leaders = {};
      for (int i = 0;i<worksAux.length;i++) {
        works.putIfAbsent(worksAux[i].id, () => FilterOption(worksAux[i].id, worksAux[i].name));
        groups.putIfAbsent(worksAux[i].group?.id, () => FilterOption(worksAux[i].group?.id, worksAux[i].group?.name));
        leaders.putIfAbsent(worksAux[i].leader?.id, () => FilterOption(worksAux[i].leader?.id, worksAux[i].leader?.name));
      }
      List<FilterOption> objectiveFilterOptionsAux = works.values.toList();
      if (objectiveFilterOptionsAux.length > 1)  objectiveFilterOptionsAux.sort((a, b) => a.name == null ? 1 : b.name == null ? -1 : a.name.compareTo(b.name));

      List<FilterOption> groupFilterOptionsAux = groups.values.toList();
      if (groupFilterOptionsAux.length > 1)  groupFilterOptionsAux.sort((a, b) => a.name == null ? 1 : b.name == null ? -1 : a.name.compareTo(b.name));

      List<FilterOption> leaderFilterOptionsAux = leaders.values.toList();
      if (leaderFilterOptionsAux.length > 1)  leaderFilterOptionsAux.sort((a, b) => a.name == null ? 1 : b.name == null ? -1 : a.name.compareTo(b.name));

      workFilterOptions =  objectiveFilterOptionsAux;
      groupFilterOptions = groupFilterOptionsAux;
      leaderFilterOptions = leaderFilterOptionsAux;

      initialFilterOptionsIdsSelected = [];

      // If not have initial id, set field to empty list `[]` to dispatch angular behaviour
      if (initialWorksIdSelectedToFilter == null) initialWorksIdSelectedToFilter = [];

      _works = worksAux;

      if (timelineVisible) _historyTimelineService.refreshHistory(SystemModule.works.index);

   //   workItemSelectionView.selected = workItemSelectionView.selected ?? 'list';

      _appLayoutService.enabledSearch = true;

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }


  List<Work> get works {

    List<Work> workFilered;

    workFilered = (worksIdSelectedToFilter.isEmpty || groupsIdSelectedToFilter.isEmpty || leadersIdSelectedToFilter.isEmpty) ? [] : _works.where(
            (t) => worksIdSelectedToFilter.contains(t.id)
            && (groupsIdSelectedToFilter.contains(t.group?.id))
            && (leadersIdSelectedToFilter.contains(t.leader?.id))).toList();

    return workFilered;

    // return _works;

    /*
    List<Work> worksFilter;
    worksFilter = worksFilterParam.objective == null ? _works : _works.where((t) => t.objective != null && t.objective.id == worksFilterParam.objective.id).toList();

    return _searchService?.searchTerm.toString().isEmpty ? worksFilter : worksFilter.where((t) => t.name.contains(_searchService.searchTerm)).toList();
     */
  }

  Future<List<Work>> getWorks() async {
    List<Work> worksAux = await _workService.getWorks(_workService.authService.authorizedOrganization.id, withWorkItems: true, withProfile: true);

    _sortWorks(worksAux);

    return worksAux;
  }

  @override
  ngOnDestroy() async {
    _appLayoutService.enabledSearch = false;
  }

  void goToDetail() {
    if (selectedWork == null) {
      _router.navigate(AppRoutes.workAddRoute.toUrl(), NavigationParams(replace:  true));

    } else {
      _router.navigate(AppRoutes.workEditRoute.toUrl(parameters: { AppRoutesParam.workIdParameter: selectedWork.id }), NavigationParams(replace:  true));
    }
  }

  void goToStages(Work work) {
    if (work != null) {
      _router.navigate(AppRoutes.workStagesRoute.toUrl(parameters: { AppRoutesParam.workIdParameter: work.id }) /*, NavigationParams(replace:  true) */);
    }
  }

  goToWorkKanban(Work work) {
    _router.navigate(AppRoutes.workItemsKanbanRoute.toUrl(parameters: { AppRoutesParam.workIdParameter: work.id }));
  }

  void stopPropagation(MouseEvent me) {
    me.stopPropagation();
  }

  void selectWork(Work item) {
    selectedWork = item;
  }

  void delete() async {
    try {

      await _workService.deleteWork(selectedWork);
      _works.remove(selectedWork);

      if (timelineVisible) _historyTimelineService.refreshHistory(SystemModule.works.index);

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  String colorFromUuid(String id) {

    // return id == null ? '#ffffff' : '#' + id.substring(0, 6);
    return common_service.colorFromUuid(id);
  }

  String firstLetter(String name) {
    // return name == null ? 'G' : name.substring(0, 1).toUpperCase();
    return common_service.firstLetter(name);
  }

  // Order by to group
  void _sortWorks(List<Work> worksToSort) {

    if (_sortedBy == nameLabel) {
      worksToSort.sort((a, b) => a?.name == null || b?.name == null ? -1 : a.name.compareTo(b.name));
    } else if (_sortedBy == groupLabel) {
      worksToSort.sort((a, b) => a?.group == null || b?.group == null ? -1 : a.group.name.compareTo(b.group.name));
    } else if (_sortedBy == leaderLabel) {
      worksToSort.sort((a, b) =>
      a?.leader == null || b?.leader == null
          ? -1
          : a.leader.name.compareTo(b.leader.name));
    }
  }

  String userUrlImage(String userProfileImage) {
    return common_service.userUrlImage(userProfileImage);
  }

  String composeTooltip(String label, String name) {
    return '${label} ${name}';
  }

  setExpandedWorkId(String workId, bool expanded) {
    if (expanded) {
      expandedWorkId = workId;
    } else {
      expandedWorkId = null;
    }
  }

  workChangeSelection(List<String> worksIdSelected) {
    worksIdSelectedToFilter = worksIdSelected;
  }

  groupChangeSelection(List<String> groupsIdSelected) {
    groupsIdSelectedToFilter = groupsIdSelected;
  }

  leaderChangeSelection(List<String> leadersIdSelected) {
    leadersIdSelectedToFilter = leadersIdSelected;
  }

}
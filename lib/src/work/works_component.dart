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

import 'package:auge_server/model/work/work.dart';
import 'package:auge_server/model/general/authorization.dart';

import 'package:auge_server/shared/message/messages.dart';
import 'package:auge_server/shared/message/model_messages.dart';

import 'package:auge_web/src/work/work_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/src/search/search_service.dart';
import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/history_timeline/history_timeline_service.dart';
import 'package:auge_web/src/work/works_filter_component.dart';
import 'package:auge_web/src/work/work_summary_component.dart';
import 'package:auge_web/src/history_timeline/history_timeline_component.dart';
import 'package:auge_web/src/work/work_detail_component.dart';
//import 'package:auge_web/src/work/work_stages_component.dart';
import 'package:auge_web/src/work_item/work_items_component.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/services/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/work/work_detail_component.template.dart' as work_detail_component;
import 'package:auge_web/src/work/work_stages_component.template.dart' as work_stages_component;
import 'package:auge_web/src/work_item/work_items_kanban_component.template.dart' as work_items_kanban_component;
import 'package:auge_web/src/work_item/work_item_detail_component.template.dart' as work_item_detail_component;

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
      WorksFilterComponent,
      WorkSummaryComponent,
      WorkDetailComponent,
      WorkItemsComponent,
      HistoryTimelineComponent,
      //WorkStagesComponent,
    ])

class WorksComponent with CanReuse implements OnInit, OnActivate, OnDestroy {

  final WorkService _workService;
  final ObjectiveService _objectiveService;
  final SearchService _searchService;
  final HistoryTimelineService _historyTimelineService;
  final AppLayoutService _appLayoutService;
  final Router _router;
 // final AuthService _authService;

  final List<RouteDefinition> routes = [
    new RouteDefinition(
      routePath: AppRoutes.workAddRoute,
      component: work_detail_component.WorkDetailComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.workEditRoute,
      component: work_detail_component.WorkDetailComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.workItemsKanbanRoute,
      component: work_items_kanban_component.WorkItemsKanbanComponentNgFactory,
    ),

    new RouteDefinition(
      routePath: AppRoutes.workStagesRoute,
      component: work_stages_component.WorkStagesComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.workItemAddRoute,
      component: work_item_detail_component.WorkItemDetailComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.workItemEditRoute,
      component: work_item_detail_component.WorkItemDetailComponentNgFactory,
    ),
  ];

  WorksFilterParam worksFilterParam;

  String mainColWidth = '100%';
  bool _timelineVisible = false;

  List<Work> _works = List();
  Work selectedWork;
  String expandedWorkId;
  // To control workItem [list or [kanban]
  //SelectionView workItemSelectionView;

  // List<bool> wideControl = new List();
  // List<bool> expandedControl = new List();
  //Map<Work, bool> wideControl = Map();

  MenuModel<MenuItem> menuModel;

  // Define messages and labels
  static final String sortedByLabel = WorkMsg.label('Sorted By');
  static final String objectiveLabel =  WorkMsg.label('Objective');

  static final String nameLabel =  FieldMsg.label('${Work.className}.${Work.nameField}');
  static final String groupLabel = FieldMsg.label('${Work.className}.${Work.groupField}');
  static final String leaderLabel =  FieldMsg.label('${Work.className}.${Work.leaderField}');
  static final String stagesLabel =  FieldMsg.label('${Work.className}.${Work.workStagesField}');

  final worksSortedByOptions = [nameLabel, groupLabel, leaderLabel];

  String _sortedBy = nameLabel;

  WorksComponent(this._appLayoutService, this._workService, this._objectiveService, this._searchService, this._historyTimelineService, this._router) {
    worksFilterParam = WorksFilterParam();
    menuModel = new MenuModel([new MenuItemGroup([
      new MenuItem(CommonMsg.buttonLabel('Edit'), icon: new Icon('edit') , actionWithContext: (_) => goToDetail() /* viewDetail(true) */),
      new MenuItem(CommonMsg.buttonLabel('Delete'), icon: new Icon('delete'), actionWithContext: (_) => delete()),
      new MenuItem(stagesLabel, icon: new Icon('view_week'), actionWithContext: (_) => goToStages(selectedWork)) ])], icon: new Icon('menu'));

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

  void onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {

    if (_workService.authService.authorizedOrganization == null || _workService.authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }

    if (routerStatePrevious.toUrl() == AppRoutes.worksRoute.toUrl() ||
        (routerStatePrevious.toUrl() == AppRoutes.workAddRoute.toUrl() && !routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.workIdQueryParameter) ||
         routerStatePrevious.toUrl() == AppRoutes.workEditRoute.toUrl() && !routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.workIdQueryParameter) ||
         routerStatePrevious.toUrl() == AppRoutes.workItemAddRoute.toUrl() && !routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.workItemIdQueryParameter) ||
         routerStatePrevious.toUrl() == AppRoutes.workItemEditRoute.toUrl() && !routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.workItemIdQueryParameter))
    ) return;

    _appLayoutService.headerTitle = WorkMsg.label('Works');

    try {

      if (routerStateCurrent.parameters.containsKey(AppRoutesParam.objectiveIdParameter)) {
          String objectiveId = routerStateCurrent.parameters[AppRoutesParam
              .objectiveIdParameter];

          if (objectiveId != null || objectiveId.isNotEmpty) {
              worksFilterParam.objective = await _objectiveService.getObjective(objectiveId, withMeasures: false);
          }
      }

      _works = await getWorks();

      if (timelineVisible) _historyTimelineService.refreshHistory(SystemModule.works.index);

      if (routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.workIdQueryParameter)) {
        setExpandedWorkId(routerStateCurrent.queryParameters[AppRoutesQueryParam
            .workIdQueryParameter], true);
      }

   //   workItemSelectionView.selected = workItemSelectionView.selected ?? 'list';

      _appLayoutService.enabledSearch = true;

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  get visibleFilter => _searchService.visibleFilter;

  set visibleFilter(bool visibleFilter) {
    _searchService.visibleFilter = visibleFilter;
  }

  List<Work> get works {

    return _works;

    /*TODO

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
      _router.navigate(AppRoutes.workAddRoute.toUrl());

    } else {
      _router.navigate(AppRoutes.workEditRoute.toUrl(parameters: { AppRoutesParam.workIdParameter: selectedWork.id }));
    }
  }

  void goToStages(Work work) {
    if (work != null) {
      _router.navigate(AppRoutes.workStagesRoute.toUrl(parameters: { AppRoutesParam.workIdParameter: work.id }));
    }
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
      works.remove(selectedWork);

      if (timelineVisible) _historyTimelineService.refreshHistory(SystemModule.works.index);

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  String colorFromUuid(String id) {
    return id == null ? '#ffffff' : '#' + id.substring(0, 6);
  }

  String firstLetter(String name) {
    return name == null ? 'G' : name.substring(0, 1).toUpperCase();
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
    return label + ' ' + ((name == null) ? '(-)' : name);
  }

  setExpandedWorkId(String workId, bool expanded) {
    if (expanded) {
      expandedWorkId = workId;
    } else {
      expandedWorkId = null;
    }
  }

  goToWorkKanban(Work work) {
    print('DEBUG 000');
    print(AppRoutes.workItemsKanbanRoute.toUrl(parameters: { AppRoutesParam.workIdParameter: work.id }));
      _router.navigate(AppRoutes.workItemsKanbanRoute.toUrl(parameters: { AppRoutesParam.workIdParameter: work.id }));
  }
}
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

import 'package:auge_web/src/search_filter/search_filter_service.dart';
import 'package:auge_web/src/work/work_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/work/work_summary_component.dart';
import 'package:auge_web/src/work/work_detail_component.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/route/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/work/works_filter_component.template.dart' as works_filter_component;
import 'package:auge_web/src/work/work_detail_component.template.dart' as work_detail_component;
import 'package:auge_web/src/work/work_stages_component.template.dart' as work_stages_component;
import 'package:auge_web/src/work_item/work_items_kanban_component.template.dart' as work_items_kanban_component;
import 'package:auge_web/src/work_item/work_item_detail_component.template.dart' as work_item_detail_component;

@Component(
    selector: 'auge-works',
    providers: const [WorkService, ObjectiveService],
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
     // WorkItemsComponent,
      ScoreboardComponent,
      //WorkStagesComponent,
    ])

class WorksComponent with CanReuse implements OnActivate /*, OnDestroy */ {

  final AppLayoutService _appLayoutService;
  final WorkService _workService;
  final SearchFilterService _searchFilterService;
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
    RouteDefinition(
      routePath: AppRoutes.worksFilterRoute,
      component: works_filter_component.WorksFilterComponentNgFactory,
    ),
  ];

  List<Work> _works = List();
  Work selectedWork;
  String initialWorkId;
  bool filterIds = false;
 // String expandedWorkId;

  List<String> worksIdSelectedToFilter = [];
  List<String> groupsIdSelectedToFilter = [];
  List<String> leadersIdSelectedToFilter = [];

  // Just used to default and controler when dispatcher ´set´
  List<String> initialFilterOptionsIdsSelectedWorks;

  MenuModel<MenuItem> menuModel;

  // Define messages and labels

  static final String editButtonLabel = CommonMsg.buttonLabel(CommonMsg.editButtonLabel);
  static final String deleteButtonLabel = CommonMsg.buttonLabel(CommonMsg.deleteButtonLabel);

  static final String descriptionLabel = WorkDomainMsg.fieldLabel(Work.descriptionField);
  static final String objectiveLabel =  WorkMsg.label(WorkMsg.objectiveLabel);
  static final String workLabel =  WorkMsg.label(WorkMsg.workLabel);
  static final String worksLabel =  WorkMsg.label(WorkMsg.worksLabel);


  static final String nameLabel = WorkDomainMsg.fieldLabel(Work.nameField);
  static final String groupLabel = WorkDomainMsg.fieldLabel(Work.groupField);
  static final String leaderLabel = WorkDomainMsg.fieldLabel(Work.leaderField);
  static final String stagesLabel = WorkDomainMsg.fieldLabel(Work.workStagesField);

  static final String headerTitle = WorkMsg.label( WorkMsg.worksLabel);

  final worksSortedByOptions = [nameLabel, groupLabel, leaderLabel];


  WorksComponent(this._appLayoutService, this._searchFilterService, this._workService, this._router) {

    menuModel = new MenuModel([MenuItemGroup([
      MenuItem(editButtonLabel, icon: Icon('edit') , actionWithContext: (_) => goToDetail() /* viewDetail(true) */),
      MenuItem(deleteButtonLabel, icon: Icon('delete'), actionWithContext: (_) => delete()),
      MenuItem(stagesLabel, icon: Icon('view_week'), actionWithContext: (_) => goToStages(selectedWork)) ])], icon: Icon('menu'));
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

    // If previous path equal current parent path, doent´s need to call this again. I.e. add or edit detail.
    if (routerStatePrevious.routePath.path == routerStateCurrent.routePath.parent.path) return;


    // Expand panel whether [Id] objective is informed.
    if (routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.workIdQueryParameter)) {
      initialWorkId = routerStateCurrent.queryParameters[AppRoutesQueryParam.workIdQueryParameter];

    }

    _appLayoutService.headerTitle = headerTitle;
    _appLayoutService.systemModuleIndex = SystemModule.works.index;

    // Enabled search and filter
    _searchFilterService.enableSearch = true;
    _searchFilterService.enableFilter = true;
    _searchFilterService.filterRouteUrl = AppRoutes.worksFilterRoute.toUrl();

    _searchFilterService.filteredItems = _workService.worksFilterOrder.filteredItems;

    try {

      List<Work> worksAux = await _workService.getWorks(_workService.authService.authorizedOrganization.id,
          withWorkItems: true,
          withProfile: true,
          withArchived: _workService.worksFilterOrder.archived,
          groupIds: _workService.worksFilterOrder.groupIds?.toList(),
          leaderUserIds: _workService.worksFilterOrder.leaderUserIds?.toList());

      _orderWorks(_works, _workService.worksFilterOrder.orderedBy);

      _works = worksAux;

   //   workItemSelectionView.selected = workItemSelectionView.selected ?? 'list';

     // _appLayoutService.enabledSearch = true;

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }


  List<Work> get works {

    return (_searchFilterService.searchTerm == null || _searchFilterService.searchTerm.isEmpty) ? _works : _works.where((test) => test.name.contains(_searchFilterService.searchTerm)).toList();

    /*
    List<Work> workFilered;

    workFilered = (worksIdSelectedToFilter.isEmpty || groupsIdSelectedToFilter.isEmpty || leadersIdSelectedToFilter.isEmpty) ? [] : _works.where(
            (t) => worksIdSelectedToFilter.contains(t.id)
            && (groupsIdSelectedToFilter.contains(t.group?.id))
            && (leadersIdSelectedToFilter.contains(t.leader?.id))).toList();

    return workFilered;

     */

  }

  Future<List<Work>> getWorks() async {
    List<Work> worksAux = await _workService.getWorks(_workService.authService.authorizedOrganization.id, withWorkItems: true, withProfile: true);

    return worksAux;
  }
/*
  @override
  ngOnDestroy() async {
//    _appLayoutService.enabledSearch = false;
  }
*/
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

  // Order by
  void _orderWorks(List<Work> worksToOrder, String orderBy) {

    if (orderBy == nameLabel) {
      worksToOrder.sort((a, b) => a?.name == null || b?.name == null ? -1 : a.name.compareTo(b.name));
    } else if (orderBy == groupLabel) {
      worksToOrder.sort((a, b) => a?.group == null || b?.group == null ? -1 : a.group.name.compareTo(b.group.name));
    } else if (orderBy == leaderLabel) {
      worksToOrder.sort((a, b) =>
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
/*
  setExpandedWorkId(String workId, bool expanded) {
    if (expanded) {
      expandedWorkId = workId;
    } else {
      expandedWorkId = null;
    }
  }
*/
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
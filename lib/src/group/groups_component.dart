// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/material_button/material_fab.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_menu/material_menu.dart';
import 'package:angular_components/model/ui/icon.dart';
import 'package:angular_components/model/menu/menu.dart';

import 'package:angular_components/material_toggle/material_toggle.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';

import 'package:auge_server/model/general/authorization.dart';
import 'package:auge_server/model/general/group.dart';

import 'package:auge_server/shared/message/messages.dart';
import 'package:auge_web/src/group/group_service.dart';
import 'package:auge_web/src/search/search_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/history_timeline/history_timeline_component.dart';

import 'package:auge_web/services/app_routes.dart';
import 'package:auge_web/services/common_service.dart' as common_service;

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/group/group_detail_component.template.dart' as group_detail_component;

@Component(
    selector: 'auge-groups',
    templateUrl: 'groups_component.html',
    styleUrls: const [
      'groups_component.css'
    ],
    providers: const [GroupService, HistoryTimelineService],
    directives: const [
      coreDirectives,
      routerDirectives,
      MaterialFabComponent,
      MaterialIconComponent,
      MaterialExpansionPanel,
      MaterialExpansionPanelSet,
      MaterialToggleComponent,
      MaterialMenuComponent,
      HistoryTimelineComponent,
    ])

class GroupsComponent with CanReuse implements OnActivate, OnDestroy {
//  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final GroupService _groupService;
  final SearchService _searchService;
  final HistoryTimelineService _historyTimelineService;
  final Router _router;

  final List<RouteDefinition> routes = [
    new RouteDefinition(
      routePath: AppRoutes.groupAddRoute,
      component: group_detail_component.GroupDetailComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.groupEditRoute,
      component: group_detail_component.GroupDetailComponentNgFactory,
    ),
  ];

  List<Group> _groups = new List();
  Group selectedGroup;

  String mainColWidth = '100%';
  bool _timelineVisible = false;

  MenuModel<MenuItem> menuModel;

  GroupsComponent(/* this._authService, */ this._appLayoutService, this._groupService, this._searchService, this._historyTimelineService, this._router) {
    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMsg.buttonLabel('Edit'), icon: new Icon('edit') , actionWithContext: (_) => goToDetail()), new MenuItem(CommonMsg.buttonLabel('Delete'), icon: new Icon('delete'), actionWithContext: (_) => delete())])], icon: new Icon('menu'));
  }

  bool get timelineVisible {
    return _timelineVisible;
  }
  set timelineVisible(bool visible) {
    _timelineVisible = visible;
    if (_timelineVisible) {
      mainColWidth = '75%';
      _historyTimelineService.refreshHistory(SystemModule.groups.index);
    } else {
      mainColWidth = '100%';
    }
    // (!_timelineVisible) ?mainColWidth = '100%' : mainColWidth = '75%';
  }

  void onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {

//TODO será que precisa isto mesmo, para evitar chamar novamente quando navega-se para outra rota?
    //if (routerStatePrevious.toUrl() == AppRoutes.groupsRoute.toUrl()) return;

    if (_groupService.authService.authorizedOrganization == null || _groupService.authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }

    _appLayoutService.headerTitle = GroupMsg.label('Groups');

    _appLayoutService.enabledSearch = true;

    try {
      _groups = await _groupService.getGroups(_groupService.authService.authorizedOrganization.id);

      if (timelineVisible) _historyTimelineService.refreshHistory(SystemModule.groups.index);
    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  List<Group> get groups {
    return _searchService?.searchTerm.toString().isEmpty ? _groups : _groups.where((t) => t.name.contains(_searchService.searchTerm)).toList();
  }

  @override
  ngOnDestroy() async {
    _appLayoutService.enabledSearch = false;
  }

  void selectGroup(Group group) {
    selectedGroup = group;
  }

  void delete() async {
    try {
      await _groupService.deleteGroup(selectedGroup);
      groups.remove(selectedGroup);
      _historyTimelineService.refreshHistory(SystemModule.groups.index);
    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  String colorFromUuid(String id) {
    return common_service.colorFromUuid(id);
  }

  String firstLetter(String name) {
    return common_service.firstLetter(name);
  }

  String groupActiveInactive(Group group) {
    return group.inactive ? GroupMsg.label('Inactive') : GroupMsg.label('Active');
  }

  void goToDetail() {
    if (selectedGroup == null) {
      _router.navigate(AppRoutes.groupAddRoute.toUrl());

    } else {
      _router.navigate(AppRoutes.groupEditRoute.toUrl(parameters: { AppRoutesParam.groupIdParameter: selectedGroup.id }) );
    }
  }
}
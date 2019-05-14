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

import 'package:auge_web/message/messages.dart';
import 'package:auge_web/src/group/group_detail_component.dart';
import 'package:auge_web/src/group/group_service.dart';
import 'package:auge_web/src/search/search_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/history_timeline/history_timeline_component.dart';

import 'package:auge_web/services/app_routes.dart';

@Component(
    selector: 'auge-groups',
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
      GroupDetailComponent,
      HistoryTimelineComponent,
    ],
    templateUrl: 'groups_component.html',
    styleUrls: const [
      'groups_component.css'
    ])

class GroupsComponent extends Object /* with CanReuse */ implements OnActivate, OnDestroy {
//  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final GroupService _groupService;
  final SearchService _searchService;
  final HistoryTimelineService _historyTimelineService;
  final Router _router;

  List<Group> _groups = new List();
  Group selectedGroup;

  bool detailVisible;

  String mainColWidth = '100%';
  bool _timelineVisible = false;

  MenuModel<MenuItem> menuModel;

  GroupsComponent(/* this._authService, */ this._appLayoutService, this._groupService, this._searchService, this._historyTimelineService, this._router) {
    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMsg.buttonLabel('Edit'), icon: new Icon('edit') , action: () => viewDetail(true)), new MenuItem(CommonMsg.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete())])], icon: new Icon('menu'));
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

    if (_groupService.authService.selectedOrganization == null || _groupService.authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }

    _appLayoutService.headerTitle = GroupMsg.label('Groups');

    _appLayoutService.enabledSearch = true;

    try {
      _groups = await _groupService.getGroups(_groupService.authService.selectedOrganization.id);
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
    return id == null ? '#ffffff' : '#' + id.substring(0, 6);
  }

  String firstLetter(String name) {
    return name == null ? 'G' : name.substring(0, 1).toUpperCase();
  }

  void viewDetail(bool detailVisible) {
    this.detailVisible = detailVisible;
  }

  void changeListItemWithDetail(String groupId) async {
    if (selectedGroup == null) {
      groups.add( await _groupService.getGroup(groupId) );
    } else {
      groups[groups.indexOf(selectedGroup)] = await _groupService.getGroup(groupId);
    }
    _historyTimelineService.refreshHistory(SystemModule.groups.index);
  }

  String groupActiveInactive(Group group) {
    return group.active ? GroupMsg.label('Active') : GroupMsg.label('Inactive');
  }
}
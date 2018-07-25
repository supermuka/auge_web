// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_components/model/menu/menu.dart';

import 'package:auge_server/model/group.dart';
import 'package:auge_web/message/messages.dart';

import 'package:auge_web/src/group/group_detail_component.dart';

import 'package:auge_web/src/group/group_service.dart';
import 'package:auge_web/src/search/search_service.dart';
import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';

import 'package:auge_web/services/app_routes.dart';

@Component(
    selector: 'auge-groups',
    providers: const [GroupService],
    directives: const [
      coreDirectives,
      routerDirectives,
      materialDirectives,
      GroupDetailComponent,
    ],
    templateUrl: 'groups_component.html',
    styleUrls: const [
      'groups_component.css'
    ])

class GroupsComponent extends Object /* with CanReuse */ implements OnActivate, OnDestroy {

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final GroupService _groupService;
  final SearchService _searchService;
  final Router _router;

  List<Group> _groups = new List();
  Group selectedGroup;

  bool detailVisible;

  MenuModel<MenuItem> menuModel;

  GroupsComponent(this._authService, this._appLayoutService, this._groupService, this._searchService, this._router) {
    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMessage.buttonLabel('Edit'), icon: new Icon('edit') , action: () => viewDetail(true)), new MenuItem(CommonMessage.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete())])], icon: new Icon('menu'));
  }

  @override
  Future onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {

    if (this._authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
    }

    _appLayoutService.headerTitle = GroupMessage.label('Groups');

    _groups = await _groupService.getGroups(_authService.selectedOrganization.id);

    _appLayoutService.searchEnabled = true;

  }

  List<Group> get groups {
    return _searchService?.searchTerm.toString().isEmpty ? _groups : _groups.where((t) => t.name.contains(_searchService.searchTerm)).toList();
  }

  @override
  ngOnDestroy() async {
    _appLayoutService.searchEnabled = false;

  }

  void selectGroup(Group group) {
    selectedGroup = group;
  }

  void delete() async {
    await _groupService.deleteGroup(selectedGroup.id);
    groups.remove(selectedGroup);
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

  void changeListItemWithDetail(Group group) {
    if (selectedGroup == null) {
      groups.add(group);
    } else {
      group.cloneTo(groups[groups.indexOf(selectedGroup)]);
    }
  }

  String groupActiveInactive(Group group) {
    return group.active ? GroupMessage.label('Active') : GroupMessage.label('Inactive');
  }

}
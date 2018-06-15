// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_components/material_menu/material_menu.dart';
import 'package:angular_components/model/menu/menu.dart';

import 'package:auge/shared/model/group.dart';
import 'package:auge/shared/message/messages.dart';

import 'package:auge/web/src/group/group_service.dart';
import 'package:auge/web/src/search/search_service.dart';
import 'package:auge/web/src/auth/auth_service.dart';
import 'package:auge/web/src/app_layout/app_layout_service.dart';

import 'package:auge/web/services/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge/web/src/app_layout/app_layout_home.template.dart' as app_layout_home;
import 'package:auge/web/src/group/group_detail_component.template.dart' as group_detail_component;

@Component(
    selector: 'auge-groups',
    providers: const [GroupService],
    directives: const [
      coreDirectives,
      routerDirectives,
      materialDirectives,
    ],
    templateUrl: 'groups_component.html',
    styleUrls: const [
      'groups_component.css'
    ])

class GroupsComponent extends Object with CanReuse implements OnActivate, OnDestroy {

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final GroupService _groupService;
  final SearchService _searchService;
  final Router _router;

  List<Group> _groups = new List();
  Group _selectedGroup;

  final List<RouteDefinition> routes = [

    new RouteDefinition(
        routePath: AppRoutes.appLayoutHomeRoute,
        component: app_layout_home.AppLayoutHomeComponentNgFactory,
        useAsDefault: true,
    ),
    new RouteDefinition(
      routePath: AppRoutes.groupDetailAddRoute,
      component: group_detail_component.GroupDetailComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.groupDetailRoute,
      component: group_detail_component.GroupDetailComponentNgFactory,
    ),
  ];

  MenuModel<MenuItem> menuModel;

  GroupsComponent(this._authService, this._appLayoutService, this._groupService, this._searchService, this._router) {
    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMessage.buttonLabel('Edit'), icon: new Icon('edit') , action: () => goToDetail(_selectedGroup)), new MenuItem(CommonMessage.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete(_selectedGroup))])], icon: new Icon('menu'));
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

  void goToDetail(Group group) {

    if (group == null) {
      _router.navigate(AppRoutes.groupDetailAddRoute.toUrl());
    } else {
      _router.navigate(AppRoutes.groupDetailRoute.toUrl(parameters: {
        AppRoutes.groupIdParameter: group != null ? group.id : null
      }));
    }
  }

  void selectGroup(Group group) {
    _selectedGroup = group;
  }

  Future<Null> delete(Group group) async {
    try {
      await _groupService.deleteGroup(group.id);
      groups.remove(group);
    } catch(e) {
      print(e);
    }
  }

  @override
  Future<bool> canReuse(RouterState current, RouterState next) async {
    return true;
  }

  String colorFromUuid(String id) {

    return id == null ? '#ffffff' : '#' + id.substring(0, 6);

  }

  String firstLetter(String name) {

    return name == null ? 'G' : name.substring(0, 1).toUpperCase();

  }
}
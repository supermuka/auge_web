// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

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

import 'package:auge_server/model/user.dart';
import 'package:auge_web/message/messages.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/search/search_service.dart';
import 'package:auge_web/src/user/user_detail_component.dart';

import 'package:auge_web/services/app_routes.dart';
import 'package:auge_web/services/common_service.dart' as common_service;

@Component(
    selector: 'auge-users',
    providers: const [UserService],
    directives: const [
      coreDirectives,
      routerDirectives,
      /* materialDirectives, */
      MaterialFabComponent,
      MaterialIconComponent,
      MaterialExpansionPanel,
      MaterialExpansionPanelSet,
      MaterialMenuComponent,

      UserDetailComponent,
    ],
    templateUrl: 'users_component.html',
    styleUrls: const [
      'users_component.css'
    ])

class UsersComponent extends Object /* with CanReuse */ implements OnActivate {

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final SearchService _searchService;
  final UserService _userService;
  final Router _router;

  // Errors, exceptions shows up
  String error;

  List<User> _users;

  User selectedUser;

  bool detailVisible;

  MenuModel<MenuItem> menuModel;

  UsersComponent(this._authService, this._appLayoutService, this._searchService, this._userService, this._router) {
    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMessage.buttonLabel('Edit'), icon: new Icon('edit') , action: () => viewDetail(true)), new MenuItem(CommonMessage.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete())])], icon: new Icon('menu'));
  }

  @override
  Future onActivate(routeStateprevious, routeStatecurrent) async {
    if (this._authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
    }
    _appLayoutService.headerTitle = UserMessage.label('Users');
    _appLayoutService.enabledSearch = true;

    try {
      _users = await _userService.getUsers(_authService.selectedOrganization?.id, withProfile: true);
    } catch (e) {
      error = e.toString();
    }
  }

  List<User> get users {

    return _searchService?.searchTerm.toString().isEmpty ? _users : _users.where((t) => t.name.contains(_searchService.searchTerm)).toList();
  }

  void delete() {
    try {
      _userService.deleteUserProfileOrganizationByUserId(selectedUser.id);

      _userService.deleteUser(selectedUser.id);
      users.remove(selectedUser);
    } catch (e) {
     // print('${e.runtimeType}, ${e}');
      error = e.toString();
      rethrow;
    }
  }

  void selectUser(User user) {
    selectedUser = user;
  }

  String userUrlImage(User user) {
    return common_service.userUrlImage(user?.userProfile?.image);
  }

  void viewDetail(bool detailVisible) {
    this.detailVisible = detailVisible;
  }

  void changeListItemDetail(User user) {
    if (selectedUser == null) {
      _users.add(user);
    } else {
      user.cloneTo(_users[_users.indexOf(selectedUser)]);
    }
  }
}
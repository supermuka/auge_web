// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';

import 'package:angular_components/model/menu/menu.dart';

import 'package:auge_server/model/user.dart';
import 'package:auge_web/message/messages.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/user/user_detail_component.dart';

import 'package:auge_web/services/app_routes.dart';
import 'package:auge_web/services/common_service.dart' as common_service;

@Component(
    selector: 'auge-users',
    providers: const [UserService],
    directives: const [
      coreDirectives,
      routerDirectives,
      materialDirectives,
      UserDetailComponent,
    ],
    templateUrl: 'users_component.html',
    styleUrls: const [
      'users_component.css'
    ])

class UsersComponent extends Object /* with CanReuse */ implements OnActivate {

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final UserService _userService;
  final Router _router;

  List<User> users;

  User selectedUser;

  bool detailVisible;

  MenuModel<MenuItem> menuModel;

  UsersComponent(this._authService, this._appLayoutService,  this._userService, this._router) {
    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMessage.buttonLabel('Edit'), icon: new Icon('edit') , action: () => viewDetail(true)), new MenuItem(CommonMessage.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete())])], icon: new Icon('menu'));
  }

  @override
  Future onActivate(routeStateprevious, routeStatecurrent) async {

    if (this._authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
    }
    _appLayoutService.headerTitle = UserMessage.label('Users');

    users = await _userService.getUsers(withProfile: true);
  }


  void delete() {
      _userService.deleteUser(selectedUser);
      users.remove(selectedUser);
  }

  void selectUser(User user) {
    selectedUser = user;

    print(user.name);
  }

  String userUrlImage(User user) {
    return common_service.userUrlImage(user);
  }

  void viewDetail(bool detailVisible) {
    this.detailVisible = detailVisible;
  }

  void changeListItemDetail(User user) {
    if (selectedUser == null) {
      users.add(user);
    } else {
      user.cloneTo(users[users.indexOf(selectedUser)]);
    }
  }
}
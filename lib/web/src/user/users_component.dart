// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_components/material_menu/material_menu.dart';
import 'package:angular_components/model/menu/menu.dart';

import 'package:auge/shared/model/user.dart';
import 'package:auge/shared/message/messages.dart';

import 'package:auge/web/src/auth/auth_service.dart';
import 'package:auge/web/src/user/user_service.dart';
import 'package:auge/web/src/app_layout/app_layout_service.dart';

import 'package:auge/web/services/app_routes.dart';
import 'package:auge/web/services/common_service.dart' as common_service;

// ignore_for_file: uri_has_not_been_generated
import 'package:auge/web/src/app_layout/app_layout_home.template.dart' as app_layout_home;
import 'package:auge/web/src/user/user_detail_component.template.dart' as user_detail_component;

@Component(
    selector: 'auge-users',
    providers: const [UserService],
    directives: const [
      coreDirectives,
      routerDirectives,
      materialDirectives,
    ],
    templateUrl: 'users_component.html',
    styleUrls: const [
      'users_component.css'
    ])

class UsersComponent extends Object with CanReuse implements OnActivate {

  final List<RouteDefinition> rotas = [

    new RouteDefinition(
        routePath: AppRoutes.appLayoutHomeRoute,
        component: app_layout_home.AppLayoutHomeComponentNgFactory,
        useAsDefault: true
    ),
    new RouteDefinition(
      routePath: AppRoutes.userDetailAddRoute,
      component: user_detail_component.UserDetailComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.userDetailRoute,
      component: user_detail_component.UserDetailComponentNgFactory,
    ),
  ];

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final UserService _userService;
  final Router _router;

  List<User> users;

  User userSelected;

  MenuModel<MenuItem> menuModel;

  UsersComponent(this._authService, this._appLayoutService,  this._userService, this._router) {
    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMessage.buttonLabel('Edit'), icon: new Icon('edit') , action: () => goToDetail(userSelected)), new MenuItem(CommonMessage.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete(userSelected))])], icon: new Icon('menu'));
  }

  @override
  Future onActivate(routeStateprevious, routeStatecurrent) async {

    if (this._authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
    }


    _appLayoutService.headerTitle = UserMessage.label('Users');

    users = await _userService.getUsers(withProfile: true);
  }

  void goToDetail(User user) {
    String url;
    if (user == null) {
      url = AppRoutes.userDetailAddRoute.toUrl();
    } else {
      url = AppRoutes.userDetailRoute.toUrl(parameters: {
        AppRoutes.userIdParameter: user.id
      });
    }
    _router.navigate(url);
  }

  void delete(User user) {
    try {
      _userService.deleteUser(user);
      users.remove(user);
    } catch(e) {
      print(e);
    }
  }

  void selectUser(User user) {
    userSelected = user;
  }

  String userUrlImage(User user) {
    return common_service.userUrlImage(user);
  }

  @override
  Future<bool> canReuse(RouterState current, RouterState next) async {
    return true;
  }
}
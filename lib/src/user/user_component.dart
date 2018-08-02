// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';

import 'package:auge_server/model/user.dart';

import 'package:auge_web/message/messages.dart';

import 'package:auge_web/src/user/user_detail_component.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/services/app_routes.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';


@Component(
  selector: 'auge-user',
  providers: const <dynamic>[UserService],
  directives: const [
    coreDirectives,
    routerDirectives,
    materialDirectives,
    UserDetailComponent,
  ],
  templateUrl: 'user_component.html',
)

class UserComponent extends Object with CanReuse implements OnActivate {

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final UserService _userService;
  final Router _router;

  final Location _location;

  bool detailVisible = false;

  User selectedUser;

  UserComponent(this._authService, this._appLayoutService,
      this._userService, this._location, this._router) {
  }

  @override
  onActivate(RouterState routeStatePrevious, RouterState routeStateCurrent) async {
    if (this._authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
    }

    _appLayoutService.headerTitle =
        UserMessage.label('User');
/*
    if (routeStateCurrent.parameters.isNotEmpty) {
      var uuid = routeStateCurrent.parameters[AppRoutes.organizationIdParameter];
      if (uuid != null && uuid.isNotEmpty) {
        selectedUser = await _userService.getUserById(uuid, false);
      }
    }
*/
    selectedUser = _authService.authenticatedUser;
    viewDetail(true);

  }

  void changeUserDetail(User user) {
      user.cloneTo(_authService.authenticatedUser);
  }

  void viewDetail(bool detailVisible) {
    this.detailVisible = detailVisible;
    if (detailVisible == false)
       _location.back();
  }

}
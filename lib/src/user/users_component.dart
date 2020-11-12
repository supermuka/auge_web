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

// import 'package:angular_components/content/deferred_content.dart';

import 'package:auge_shared/domain/general/user.dart';

import 'package:auge_shared/message/messages.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/src/search_filter/search_filter_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
//import 'package:auge_web/src/search/search_service.dart';

import 'package:auge_web/route/app_routes.dart';
import 'package:auge_web/services/common_service.dart' as common_service;

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/user/user_detail_component.template.dart' as user_detail_component;

@Component(
    selector: 'auge-users',
    providers: const [UserService],
    templateUrl: 'users_component.html',
    styleUrls: const [
      'users_component.css'
    ],
    directives: const [
      coreDirectives,
      routerDirectives,
      MaterialFabComponent,
      MaterialIconComponent,
      MaterialExpansionPanel,
      MaterialExpansionPanelSet,
      MaterialMenuComponent,
      MaterialToggleComponent,
    ])

class UsersComponent with CanReuse implements OnActivate {

  final AppLayoutService _appLayoutService;
 // final SearchService _searchService;
  final SearchFilterService _searchFilterService;
  final UserService _userService;
  final Router _router;

  final List<RouteDefinition> routes = [
    new RouteDefinition(
      routePath: AppRoutes.userAddRoute,
      component: user_detail_component.UserDetailComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.userEditRoute,
      component: user_detail_component.UserDetailComponentNgFactory,
    ),
  ];

  // Errors, exceptions shows up
 // String error;

  //List<User> _users;
  List<User> _users;

  User selectedUser;

  MenuModel<MenuItem> menuModel;

  static final String editButtonLabel = CommonMsg.buttonLabel(CommonMsg.editButtonLabel);
  static final String deleteButtonlabel = CommonMsg.buttonLabel(CommonMsg.deleteButtonLabel);

  static final String headerTitle = UserMsg.label(UserMsg.userLabel);

  UsersComponent(this._appLayoutService, this._searchFilterService, this._userService, this._router) {
    menuModel = MenuModel([MenuItemGroup([MenuItem(editButtonLabel, icon: Icon('edit') , actionWithContext: (_) => goToDetail()), MenuItem(deleteButtonlabel, icon: Icon('delete'), actionWithContext: (_) => delete())])], icon: Icon('menu'));
  }

  void onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {
    if (_userService.authService.authorizedOrganization == null || _userService.authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }
    _appLayoutService.headerTitle = headerTitle;
//    _appLayoutService.enabledSearch = true;
  //  _appLayoutService.systemModuleIndex = SystemModule.users.index;

    _searchFilterService.enableSearch = true;
    _searchFilterService.enableFilter = false;
    _searchFilterService.enableExport = false;

    try {
      // _users = await _userService.getUsers(_userService.authService.selectedOrganization?.id, withProfile: true);
      _users = await _userService.getUsers(_userService.authService.authorizedOrganization.id);

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  List<User> get users {
    return _searchFilterService?.searchTerm.toString().isEmpty ? _users : _users.where((t) => t.name.toLowerCase().contains(_searchFilterService.searchTerm.toLowerCase())).toList();
    //return _users;
  }

  void delete() async {
    try {
      // Delete user
      await _userService.deleteUser(selectedUser);

      //users.remove(selectedUser);

      _router.navigateByUrl(_router.current.toUrl(), reload: true);

    } catch (e) {
     // print('${e.runtimeType}, ${e}');
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  void selectUser(User user) async {
    selectedUser = user;
  }

  String userUrlImage(User user) {
    return common_service.userUrlImage(user?.userProfile?.image);
  }

  void goToDetail([bool withSelectedUser = true]) {
    if (!withSelectedUser || selectedUser == null) {
      _router.navigate(AppRoutes.userAddRoute.toUrl());
    } else {
      _router.navigate(AppRoutes.userEditRoute.toUrl(parameters: { AppRoutesParam.userIdParameter: selectedUser.id }));
    }
  }
}
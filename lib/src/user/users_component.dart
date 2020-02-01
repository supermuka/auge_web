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

import 'package:auge_server/domain/general/authorization.dart';
import 'package:auge_server/domain/general/user.dart';

import 'package:auge_server/shared/message/messages.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/search/search_service.dart';
import 'package:auge_web/src/history_timeline/history_timeline_component.dart';

import 'package:auge_web/services/app_routes.dart';
import 'package:auge_web/services/common_service.dart' as common_service;

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/user/user_detail_component.template.dart' as user_detail_component;

@Component(
    selector: 'auge-users',
    providers: const [UserService, HistoryTimelineService],
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
      HistoryTimelineComponent,
    ])

class UsersComponent with CanReuse implements OnActivate {

  final AppLayoutService _appLayoutService;
  final SearchService _searchService;
  final UserService _userService;
  final HistoryTimelineService _historyTimelineService;
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

  String mainColWidth = '100%';
  bool _timelineVisible = false;

  MenuModel<MenuItem> menuModel;

  static final String editButtonLabel = CommonMsg.buttonLabel(CommonMsg.editButtonLabel);
  static final String deleteButtonlabel = CommonMsg.buttonLabel(CommonMsg.deleteButtonLabel);

  static final timelineLabel = TimelineItemdMsg.label(TimelineItemdMsg.timelineLabel);

  static final String headerTitle = UserMsg.label(UserMsg.userLabel);

  UsersComponent(this._appLayoutService, this._searchService, this._userService, this._historyTimelineService, this._router) {
    menuModel = MenuModel([MenuItemGroup([MenuItem(editButtonLabel, icon: Icon('edit') , actionWithContext: (_) => goToDetail()), MenuItem(deleteButtonlabel, icon: Icon('delete'), actionWithContext: (_) => delete())])], icon: Icon('menu'));
  }

  bool get timelineVisible {
    return _timelineVisible;
  }
  set timelineVisible(bool visible) {
    _timelineVisible = visible;
    if (_timelineVisible) {
      mainColWidth = '75%';
      _historyTimelineService.refreshHistory(SystemModule.users.index);
    } else {
      mainColWidth = '100%';
    }
    // (!_timelineVisible) ?mainColWidth = '100%' : mainColWidth = '75%';
  }

  void onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {
    if (_userService.authService.authorizedOrganization == null || _userService.authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }
    _appLayoutService.headerTitle = headerTitle;
    _appLayoutService.enabledSearch = true;

    try {
      // _users = await _userService.getUsers(_userService.authService.selectedOrganization?.id, withProfile: true);
      _users = await _userService.getUsers(_userService.authService.authorizedOrganization?.id, withUserProfile: true);

      if (timelineVisible) _historyTimelineService.refreshHistory(SystemModule.users.index);
    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  List<User> get users {
    return _searchService?.searchTerm.toString().isEmpty ? _users : _users.where((t) => t.name.toLowerCase().contains(_searchService.searchTerm.toLowerCase())).toList();
  }

  void delete() async {
    try {
      // Delete user
      await _userService.deleteUser(selectedUser);

      users.remove(selectedUser);
      if (timelineVisible) _historyTimelineService.refreshHistory(SystemModule.users.index);

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

  void goToDetail() {
    if (selectedUser == null) {
      _router.navigate(AppRoutes.userAddRoute.toUrl());
    } else {
      _router.navigate(AppRoutes.userEditRoute.toUrl(parameters: { AppRoutesParam.userIdParameter: selectedUser.id }));
    }
  }
}
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

import 'package:angular_components/content/deferred_content.dart';

import 'package:auge_server/model/general/authorization.dart';
import 'package:auge_server/model/general/user.dart';

import 'package:auge_web/message/messages.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/search/search_service.dart';
import 'package:auge_web/src/user/user_detail_component.dart';
import 'package:auge_web/src/history_timeline/history_timeline_component.dart';

import 'package:auge_web/services/app_routes.dart';
import 'package:auge_web/services/common_service.dart' as common_service;


@Component(
    selector: 'auge-users',
    providers: const [DeferredContentDirective, UserService, HistoryTimelineService],
    directives: const [
      coreDirectives,
      routerDirectives,
      MaterialFabComponent,
      MaterialIconComponent,
      MaterialExpansionPanel,
      MaterialExpansionPanelSet,
      MaterialMenuComponent,
      MaterialToggleComponent,
      UserDetailComponent,
      HistoryTimelineComponent,
    ],
    templateUrl: 'users_component.html',
    styleUrls: const [
      'users_component.css'
    ])

class UsersComponent extends Object /* with CanReuse */ implements OnActivate {

  final AppLayoutService _appLayoutService;
  final SearchService _searchService;
  final UserService _userService;
  final HistoryTimelineService _historyTimelineService;
  final Router _router;

  // Errors, exceptions shows up
 // String error;

  List<User> _users;

  User selectedUser;

  bool detailVisible = false;

  String mainColWidth = '100%';
  bool _timelineVisible = false;

  MenuModel<MenuItem> menuModel;


  UsersComponent(this._appLayoutService, this._searchService, this._userService, this._historyTimelineService, this._router) {
    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMsg.buttonLabel('Edit'), icon: new Icon('edit') , action: () => viewDetail(true)), new MenuItem(CommonMsg.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete())])], icon: new Icon('menu'));
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
    if (_userService.authService.selectedOrganization == null || _userService.authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }
    _appLayoutService.headerTitle = UserMsg.label('Users');
    _appLayoutService.enabledSearch = true;

    try {
      _users = await _userService.getUsers(_userService.authService.selectedOrganization?.id, withProfile: true);
    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  List<User> get users {
    return _searchService?.searchTerm.toString().isEmpty ? _users : _users.where((t) => t.name.contains(_searchService.searchTerm)).toList();
  }

  void delete() async {
    try {
      // Delete user
      //TODO futuramente avaliar este delete em uma única transação. Observar as limitações do .proto de recursividade.
      await _userService.deleteUserProfileOrganization(await _userService.getUserProfileOrganization(selectedUser.id, _userService.authService.selectedOrganization.id));

      await _userService.deleteUser(selectedUser);

      users.remove(selectedUser);
      _historyTimelineService.refreshHistory(SystemModule.users.index);

    } catch (e) {
     // print('${e.runtimeType}, ${e}');
      _appLayoutService.error = e.toString();
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

  void refreshListItemDetail(String userId) async {
    User user = await _userService.getUser(userId, withProfile: true);
    if (selectedUser == null) {
      _users.add(user);
    } else {
      _users[_users.indexOf(selectedUser)] = user;
   //   user.cloneTo(_users[_users.indexOf(selectedUser)]);
    }
    _historyTimelineService.refreshHistory(SystemModule.users.index);
  }
}
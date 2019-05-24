// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_forms/angular_forms.dart';

import 'package:angular_components/app_layout/material_persistent_drawer.dart';
import 'package:angular_components/app_layout/material_temporary_drawer.dart';
import 'package:angular_components/content/deferred_content.dart';

import 'package:angular_components/material_list/material_list.dart';
import 'package:angular_components/material_list/material_list_item.dart';

import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';

import 'package:angular_components/material_select/material_dropdown_select.dart';
import 'package:angular_components/material_select/material_dropdown_select_accessor.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/model/ui/has_factory.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/search/search_component.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/search/search_service.dart';
import 'package:auge_web/src/user/user_detail_component.dart';

import 'package:auge_web/services/app_routes.dart';
import 'package:auge_web/services/common_service.dart' as common_service;

import 'package:auge_web/message/messages.dart';

import 'package:auge_server/model/general/authorization.dart';
import 'package:auge_server/model/general/user.dart';
import 'package:auge_server/model/general/organization.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/app_layout/app_layout_component.template.dart' as app_layout_component;
import 'package:auge_web/src/insight/insights_component.template.dart' as insights_component;
import 'package:auge_web/src/organization/organizations_component.template.dart' as organizations_component;
import 'package:auge_web/src/organization/organization_component.template.dart' as organization_component;
import 'package:auge_web/src/user/users_component.template.dart' as users_component;
import 'package:auge_web/src/initiative/initiatives_component.template.dart' as initiatives_component;
import 'package:auge_web/src/work_item/work_items_component.template.dart' as work_items_component;
import 'package:auge_web/src/map/map_component.template.dart' as map_component;
import 'package:auge_web/src/gantt/gantt_component.template.dart' as gantt_component;
import 'package:auge_web/src/objective/objectives_component.template.dart' as objectives_component;
import 'package:auge_web/src/group/groups_component.template.dart' as groups_component;

@Component(
    selector: 'auge-layout',
    providers: const <dynamic>[AppLayoutService, SearchService],
    directives: const [
      coreDirectives,
      routerDirectives,
      formDirectives,
      DeferredContentDirective,
      MaterialButtonComponent,
      MaterialIconComponent,
      MaterialPersistentDrawerDirective,
      MaterialTemporaryDrawerComponent,
      MaterialListComponent,
      MaterialListItemComponent,
      MaterialDropdownSelectComponent,
      DropdownSelectValueAccessor,
      SearchComponent,
      UserDetailComponent,
    ],
    templateUrl: 'app_layout_component.html',
    styleUrls: const [
      'app_layout_component.css',
      'package:angular_components/app_layout/layout.scss.css',
    ])

class AppLayoutComponent /* extends Object */ with CanReuse implements OnActivate {
  bool userDetailVisible = false;


  String get insightsRouteUrl => AppRoutes.insightslRoute.toUrl();
  String get mapRouteUrl => AppRoutes.mapRoute.toUrl();
  String get ganttRouteUrl => AppRoutes.ganttRoute.toUrl();
  String get objectivesRouteUrl => AppRoutes.objectivesRoute.toUrl();
  String get initiativesRouteUrl => AppRoutes.initiativesRoute.toUrl();
  String get organizationRouteUrl =>  AppRoutes.organizationRoute.toUrl(parameters: { AppRoutesParam.organizationIdParameter: this._authService.selectedOrganization.id });
  String get organizationsRouteUrl => AppRoutes.organizationsRoute.toUrl();
  String get usersRouteUrl => AppRoutes.usersRoute.toUrl();
  String get groupsRouteUrl => AppRoutes.groupsRoute.toUrl();

  final List<RouteDefinition> routes = [
    new RouteDefinition(
      routePath: AppRoutes.appLayoutRoute,
      component: app_layout_component.AppLayoutComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.insightslRoute,
      component: insights_component.InsightsComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.organizationsRoute,
      component: organizations_component.OrganizationsComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.organizationRoute,
      component: organization_component.OrganizationComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.usersRoute,
      component: users_component.UsersComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.initiativesRoute,
      component: initiatives_component.InitiativesComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.initiativesByObjectiveRoute,
      component: initiatives_component.InitiativesComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.workItemsRoute,
      component: work_items_component.WorkItemsComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.mapRoute,
      component: map_component.MapComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.ganttRoute,
      component: gantt_component.GanttComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.objectivesRoute,
      component: objectives_component.ObjectivesComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.groupsRoute,
      component: groups_component.GroupsComponentNgFactory,
    ),
  ];

  final AppLayoutService _appLayoutService;
  final AuthService _authService;
  Router _router;

  // Dropdown Select to User Profile and Logout
  List<OptionGroup<AppLayoutSettingSelectOption>> userProfileLogoutGroupOptions = new List();
  SelectionOptions userProfileLogoutOptions;
  SelectionModel userProfileLogoutSingleSelectModel;

  /// Return [true] is authenticated role can access Users
  bool isAuthorizedToAccessUsers;

  /// Return [true] is authenticated role can access Organizations
  bool isAuthorizedToAccessOrganizationProfile;

  /// Return [true] is authenticated role can access Groups
  bool isAuthorizedToAccessGroups;

  AppLayoutComponent(this._appLayoutService, this._authService, this._router) {

  }

  // Define messages and labels
  String label(String label) =>  AppLayoutMsg.label(label);

  /// Messages and labels
  static final String insightsLabel = AppLayoutMsg.label('Insights');
  static final String objectivesMapLabel = AppLayoutMsg.label('Objectives Map');
  static final String objectivesGanttLabel = AppLayoutMsg.label('Objectives Gantt');
  static final String objectivesLabel = AppLayoutMsg.label('Objectives');
  static final String initiativesLabel = AppLayoutMsg.label('Initiatives');
  static final String organizationLabel = AppLayoutMsg.label('Organization');
  static final String usersLabel = AppLayoutMsg.label('Users');
  static final String adminLabel = AppLayoutMsg.label('Admin');
  static final String groupsLabel = AppLayoutMsg.label('Groups');


  void onActivate(RouterState previous, RouterState current)  {

    if (_authService.selectedOrganization == null || _authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }

    isAuthorizedToAccessUsers =_authService.isAuthorizedForAtuhorizatedRole(SystemModule.users);
    isAuthorizedToAccessOrganizationProfile =_authService.isAuthorizedForAtuhorizatedRole(SystemModule.organization_profile);
    isAuthorizedToAccessGroups = _authService.isAuthorizedForAtuhorizatedRole(SystemModule.groups);


    _appLayoutService.enabledSearch = false;

    // RIGHT - SETTINGS *** Dropdown select to User Profile and Logout ***
    userProfileLogoutGroupOptions.clear();

    // User Options
    List<AppLayoutSettingSelectOption> userDetailOptions = new List();
    userDetailOptions.add(new AppLayoutSettingSelectOption()
      ..group = null
      ..name = AppLayoutMsg.label('User Detail')
      ..viewComponent = (bool userDetailVisible) { this.userDetailVisible = userDetailVisible; }
      ..routeUrl = null

    );

    userProfileLogoutGroupOptions.add(new OptionGroup.withLabel(userDetailOptions, null));

    // User Logout
    List<AppLayoutSettingSelectOption> logout = new List();
    logout.add(new AppLayoutSettingSelectOption()
      ..group = null
      ..name = AppLayoutMsg.label('Logout')
      ..routeUrl = AppRoutes.authRoute.toUrl());

    userProfileLogoutGroupOptions.add(new OptionGroup.withLabel(logout, null));

    userProfileLogoutOptions = new SelectionOptions.withOptionGroups(userProfileLogoutGroupOptions);

    // Model Listening
    userProfileLogoutSingleSelectModel =
    new SelectionModel.single()..selectionChanges.listen((d) async {
      if (d != null && d.isNotEmpty && d.first.added.isNotEmpty) {
        if (d.first?.added?.first?.routeUrl != null) {
          await goTo(d.first.added.first.routeUrl, reload: true);
        } else if (d?.first?.added?.first?.viewComponent != null) {
          d?.first?.added?.first?.viewComponent(true);
        }
      }
      userProfileLogoutSingleSelectModel.clear();
  });
  }

  bool get isAdmin {
    return _authService?.isAdmin;
  }

  String get headerTitle {
    return _appLayoutService.headerTitle;
  }

  String get error {
    return _appLayoutService.error;
  }

  bool isAuthenticated() {
    return (_authService.authenticatedUser != null);
  }

  void close() {
    _authService.close();
  }

  void goTo(String url, {bool reload = false}) {
    if (url != null)
      _router.navigate(url, NavigationParams(reload: reload));
  }

  void viewComponent(bool viewComponent) async {
    // viewComponent
  }

  bool get hasSelectedOrganization {
    return _authService.selectedOrganization != null;
  }

  ItemRenderer get itemRenderer => (dynamic item) => item.name;

  bool get enabledSearch {
    return _appLayoutService.enabledSearch;
  }

   userUrlImage() {
    return common_service.userUrlImage(_authService.authenticatedUser?.userProfile?.image);
  }

  void changeUserDetail(String userId) {
    _authService.refreshAuthenticatedUserById(userId);
    // user.cloneTo(_authService.authenticatedUser);
  }

  User get authenticatedUser {
    return _authService.authenticatedUser;
  }

  Organization get selectedOrganization {
    return _authService.selectedOrganization;
  }

  viewUserDetail(bool userDetailVisible) {
    this.userDetailVisible = userDetailVisible;
  }
}

class AppLayoutSettingSelectOption {
  String group;
  String name;
  // Organization organization;
  String routeUrl;
  Function viewComponent;
}
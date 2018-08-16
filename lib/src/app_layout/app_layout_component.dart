// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.


import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_forms/angular_forms.dart';

import 'package:angular_components/angular_components.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/search/search_component.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/search/search_service.dart';
import 'package:auge_web/src/user/user_detail_component.dart';

import 'package:auge_web/services/app_routes.dart';
import 'package:auge_web/services/common_service.dart' as common_service;

import 'package:auge_web/message/messages.dart';

import 'package:auge_server/model/user.dart';
import 'package:auge_server/model/organization.dart';
import 'package:auge_server/model/user_profile_organization.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/insight/insights_component.template.dart' as insights_component;
import 'package:auge_web/src/organization/organizations_component.template.dart' as organizations_component;
import 'package:auge_web/src/organization/organization_component.template.dart' as organization_component;
import 'package:auge_web/src/user/users_component.template.dart' as users_component;
import 'package:auge_web/src/initiative/initiatives_component.template.dart' as initiatives_component;
import 'package:auge_web/src/work_item/work_items_component.template.dart' as work_items_component;
import 'package:auge_web/src/map/map_component.template.dart' as map_component;
import 'package:auge_web/src/objective/objectives_component.template.dart' as objectives_component;
import 'package:auge_web/src/measure/measures_component.template.dart' as measures_component;
import 'package:auge_web/src/group/groups_component.template.dart' as groups_component;

@Component(
    selector: 'auge-layout',
    providers: const <dynamic>[AppLayoutService, SearchService],
    directives: const [
      coreDirectives,
      routerDirectives,
      materialDirectives,
      formDirectives,
      SearchComponent,
      UserDetailComponent,
    ],
    templateUrl: 'app_layout_component.html',
    styleUrls: const [
      'app_layout_component.css',
      'package:angular_components/app_layout/layout.scss.css',
    ])

class AppLayoutComponent extends Object with CanReuse implements OnActivate {

  bool userDetailVisible = false;

  String get insightsRouteUrl => AppRoutes.insightslRoute.toUrl();
  String get mapRouteUrl => AppRoutes.mapRoute.toUrl();
  String get objectivesRouteUrl => AppRoutes.objectivesRoute.toUrl();
  String get initiativesRouteUrl => AppRoutes.initiativesRoute.toUrl();
  String get organizationRouteUrl =>  AppRoutes.organizationRoute.toUrl(parameters: { AppRoutes.organizationIdParameter: this._authService.selectedOrganization?.id });
  String get organizationsRouteUrl => AppRoutes.organizationsRoute.toUrl();
  String get usersRouteUrl => AppRoutes.usersRoute.toUrl();
  String get groupsRouteUrl => AppRoutes.groupsRoute.toUrl();

  final List<RouteDefinition> routes = [
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
      routePath: AppRoutes.objectivesRoute,
      component: objectives_component.ObjectivesComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.measuresRoute,
      component: measures_component.MeasuresComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.groupsRoute,
      component: groups_component.GroupsComponentNgFactory,
    ),
  ];

  final AppLayoutService _appLayoutService;
  final AuthService _authService;
  Router _router;

  // Dropdown Select to Organization and SuperAdmin
  List<OptionGroup<AppLayoutSelectOption>> organizationGroupOptions = new List();
  SelectionOptions organizationOptions;
  SelectionModel organizationSingleSelectModel;

  // Dropdown Select to User Profile and Logout
  List<OptionGroup<AppLayoutSelectOption>> userProfileLogoutGroupOptions = new List();
  SelectionOptions userProfileLogoutOptions;
  SelectionModel userProfileLogoutSingleSelectModel;

  String organizationSingleSelectLabel = AppLayoutMessage.label('Select');

  AppLayoutComponent(this._appLayoutService, this._authService, this._router);

  // Define messages and labels
  String label(String label) =>  AppLayoutMessage.label(label);

  @override
  onActivate(previous, current) async {
    if (this._authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
    }


    _appLayoutService.searchEnabled = false;

    // *** Dropdown select to Organizations and Super Admin ***
    organizationGroupOptions.clear();

    // Organizations
    List<AppLayoutSelectOption> orgs = new List();

    String orgGroupLabel = AppLayoutMessage.label('Organization');

    if (_authService.authorizatedOrganizations != null && _authService.authorizatedOrganizations.isNotEmpty) {
      _authService.authorizatedOrganizations.forEach((e) =>
          orgs.add(new AppLayoutSelectOption()
            ..group = orgGroupLabel
            ..name = e.organization.name
            ..organization = e?.organization
            ..routeUrl = null));
    }
    organizationGroupOptions.add(new OptionGroup.withLabel(orgs, orgGroupLabel));

    // Super Administration

    List<AppLayoutSelectOption> adms = new List();

    String admGroupLabel = AppLayoutMessage.label('Super Admin');

    if (isSuperAdmin) {
      adms.add(new AppLayoutSelectOption()
        ..group = admGroupLabel
        ..name = AppLayoutMessage.label('All Organizations')
        ..organization = null
        ..routeUrl = null);

      organizationGroupOptions.add(new OptionGroup.withLabel(adms, admGroupLabel));
    }

    organizationOptions = new SelectionOptions.withOptionGroups(organizationGroupOptions);

    // Model Listening
    organizationSingleSelectModel =
      new SelectionModel.single()..selectionChanges.listen((d) async {

        _authService.selectedOrganization = d?.first?.added?.first?.organization;

        if (d?.first?.added?.first?.routeUrl != null) {
          await goTo(d.first.added.first.routeUrl);
        }
        organizationSingleSelectLabel = d?.first?.added?.first?.name ?? AppLayoutMessage.label('Select');
      });

    organizationSingleSelectModel.select(organizationOptions.optionsList.first);
    _authService.selectedOrganization = organizationSingleSelectModel.selectedValues.first.organization;

    // *** Dropdown select to User Profile and Logout ***
    userProfileLogoutGroupOptions.clear();

    // User Options
    List<AppLayoutSelectOption> userDetailOptions = new List();
    userDetailOptions.add(new AppLayoutSelectOption()
      ..group = null
      ..name = AppLayoutMessage.label('User Detail')
      ..viewComponent = (bool userDetailVisible) { this.userDetailVisible = userDetailVisible; }
      ..routeUrl = null
      /*
      ..routeUrl = AppRoutes.userSelectedDetailRoute.toUrl(parameters: {
        AppRoutes.userIdParameter: _authService.authenticatedUser.id
      })
      */
    );

    userProfileLogoutGroupOptions.add(new OptionGroup.withLabel(userDetailOptions, null));

    // User Logout
    List<AppLayoutSelectOption> logout = new List();
    logout.add(new AppLayoutSelectOption()
      ..group = null
      ..name = AppLayoutMessage.label('Logout')
      ..routeUrl = AppRoutes.authRoute.toUrl());

    userProfileLogoutGroupOptions.add(new OptionGroup.withLabel(logout, null));

    userProfileLogoutOptions = new SelectionOptions.withOptionGroups(userProfileLogoutGroupOptions);

    // Model Listening
    userProfileLogoutSingleSelectModel =
    new SelectionModel.single()..selectionChanges.listen((d) async {
      if (d?.isNotEmpty && d.first.added.isNotEmpty) {
        if (d?.first?.added?.first?.routeUrl != null) {
          await goTo(d.first.added.first.routeUrl);
        } else if (d?.first?.added?.first?.viewComponent != null) {
          d?.first?.added?.first?.viewComponent(true);
        }
      }
      userProfileLogoutSingleSelectModel.clear();
  });
  }

  bool get isSuperAdmin {
    return (_authService?.authenticatedUser?.userProfile?.isSuperAdmin == true);
  }

  bool get isAdmin {
    UserProfileOrganization userOrganization = _authService.authorizatedOrganizations?.firstWhere((o) => o.organization.id == _authService?.selectedOrganization?.id, orElse: () => null);
    return _authService?.authorizatedOrganizations != null && _authService?.selectedOrganization != null && userOrganization != null && userOrganization?.authorizationLevel == UserAuthorization.admin.index;
  }

  String get headerTitle {
    return _appLayoutService.headerTitle;
  }

  bool isAuthenticated() {
    return (_authService.authenticatedUser != null);
  }

  void close() {
    _authService.close();
  }

  void goTo(String url) async {
    if (url != null)
      await _router.navigate(url);
  }

  void viewComponent(bool viewComponent) async {
    // viewComponent
  }



  bool get hasSelectedOrganization {
    return _authService.selectedOrganization != null;
  }

  ItemRenderer get itemRenderer => (dynamic item) => item.name;

  get searchEnabled {
    return _appLayoutService.searchEnabled;
  }

  String userUrlImage() {
    return common_service.userUrlImage(_authService.authenticatedUser);
  }

  void changeUserDetail(User user) {
    user.cloneTo(_authService.authenticatedUser);
  }

  User get authenticatedUser {
    return _authService.authenticatedUser;
  }

  viewUserDetail(bool userDetailVisible) {
    print('viewUserDetail');
    this.userDetailVisible = userDetailVisible;
  }
}

class AppLayoutSelectOption {
  String group;
  String name;
  Organization organization;
  String routeUrl;
  Function viewComponent;

}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_components/material_menu/material_menu.dart';
import 'package:angular_components/model/menu/menu.dart';

import 'package:auge/shared/model/organization.dart';
import 'package:auge/shared/message/messages.dart';

import 'package:auge/web/src/organization/organization_service.dart';
import 'package:auge/web/services/app_routes.dart';

import 'package:auge/web/src/auth/auth_service.dart';
import 'package:auge/web/src/app_layout/app_layout_service.dart';
import 'package:auge/web/src/search/search_service.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge/web/src/app_layout/app_layout_home.template.dart' as app_layout_home;
import 'package:auge/web/src/organization/organization_detail_component.template.dart' as organization_detail;

@Component(
    selector: 'auge-organizations',
    providers: const <dynamic>[OrganizationService],
    directives: const [
      coreDirectives,
      routerDirectives,
      materialDirectives,
    ],
    templateUrl: 'organizations_component.html',
    styleUrls: const [
      'organizations_component.css'
    ])

class OrganizationsComponent extends Object with CanReuse implements OnActivate, OnDestroy  {

  final List<RouteDefinition> routes = [
    new RouteDefinition(
        routePath: AppRoutes.appLayoutHomeRoute,
        component: app_layout_home.AppLayoutHomeComponentNgFactory,
        useAsDefault: true
    ),
    new RouteDefinition(
        routePath: AppRoutes.organizationDetailRoute,
        component: organization_detail.OrganizationDetailComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: AppRoutes.organizationDetailAddRoute,
      component: organization_detail.OrganizationDetailComponentNgFactory,
    ),
  ];

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final OrganizationService _organizationService;
  final SearchService _searchService;
  final Router _router;

  List<Organization> _organizations;

  Organization organizationSelected;

  MenuModel<MenuItem> menuModel;

  OrganizationsComponent(this._authService, this._appLayoutService, this._organizationService, this._searchService, this._router) {

    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMessage.buttonLabel('Edit'), icon: new Icon('edit') , action: () => goToDetail(organizationSelected)), new MenuItem(CommonMessage.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete(organizationSelected))])], icon: new Icon('menu'));
  }

  @override
  onActivate(RouterState previous, RouterState current) async {

    if (this._authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
    }


    _appLayoutService.headerTitle =
         OrganizationMessage.label('Organizations');
    _organizations = await _organizationService.getOrganizations();

    // Enable Input Search on Header App
    _appLayoutService.searchEnabled = true;

  }

  @override
  ngOnDestroy() async {
    _appLayoutService.searchEnabled = false;

  }

  /// Return [Organizations] that corresponds to Search Term
  List<Organization> get organizations {
    return _searchService?.searchTerm.toString().isEmpty ? _organizations : _organizations.where((t) => t.name.contains(_searchService.searchTerm)).toList();
  }

  void selectOrganization(Organization organization) {
    organizationSelected = organization;
  }

  void goToDetail(Organization organization) {
    if (organization == null) {
      _router.navigate(AppRoutes.organizationDetailAddRoute.toUrl());
    } else {
      _router.navigate(AppRoutes.organizationDetailRoute.toUrl(parameters: {
        AppRoutes.organizationIdParameter: organization != null ? organization.id : null
      }));
    }
  }

  void delete(Organization organization) {
    try {
      _organizationService.deleteOrganization(organization);
      _organizations.remove(organization);
    } catch(e) {
      print(e);
    }
  }

  @override
  Future<bool> canReuse(RouterState current, RouterState next) async {
    return true;
  }

}
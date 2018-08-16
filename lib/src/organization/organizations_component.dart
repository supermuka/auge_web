// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_components/model/menu/menu.dart';

import 'package:auge_server/model/organization.dart';
import 'package:auge_web/message/messages.dart';

import 'package:auge_web/src/organization/organization_detail_component.dart';
import 'package:auge_web/src/organization/organization_service.dart';
import 'package:auge_web/services/app_routes.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/search/search_service.dart';

@Component(
    selector: 'auge-organizations',
    providers: const <dynamic>[OrganizationService],
    directives: const [
      coreDirectives,
      routerDirectives,
      materialDirectives,
      OrganizationDetailComponent,
    ],
    templateUrl: 'organizations_component.html',
    styleUrls: const [
      'organizations_component.css'
    ])

class OrganizationsComponent extends Object implements OnActivate, OnDestroy  {

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final OrganizationService _organizationService;
  final SearchService _searchService;
  final Router _router;

  bool detailVisible = false;

  List<Organization> _organizations;

  Organization selectedOrganization;

  MenuModel<MenuItem> menuModel;


  OrganizationsComponent(this._authService, this._appLayoutService, this._organizationService, this._searchService, this._router) {

    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMessage.buttonLabel('Edit'), icon: new Icon('edit') , action: () => viewDetail(true)), new MenuItem(CommonMessage.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete())])], icon: new Icon('menu'));
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
  void ngOnDestroy() {
    _appLayoutService.searchEnabled = false;

  }

  /// Return [Organizations] that corresponds to Search Term
  List<Organization> get organizations {
    return _searchService?.searchTerm.toString().isEmpty ? _organizations : _organizations.where((t) => t.name.contains(_searchService.searchTerm)).toList();
  }

  void selectOrganization(Organization organization) {
    selectedOrganization = organization;
  }

  void delete() {
    try {
      _organizationService.deleteOrganization(selectedOrganization.id);
      _organizations.remove(selectedOrganization);
    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
  }

  void viewDetail(bool detailVisible) {
    this.detailVisible = detailVisible;
  }

  void changeListItemDetail(Organization organization) {
    if (selectedOrganization == null) {
      organizations.add(organization);
    } else {
      organization.cloneTo(organizations[organizations.indexOf(selectedOrganization)]);
    }
  }
}
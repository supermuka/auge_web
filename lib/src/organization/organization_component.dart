// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'package:auge_server/model/general/organization.dart';

import 'package:auge_web/message/messages.dart';
import 'package:auge_web/src/organization/organization_detail_component.dart';
import 'package:auge_web/src/organization/organization_service.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';

import 'package:auge_web/services/app_routes.dart';

@Component(
  selector: 'auge-organization',
  providers: const <dynamic>[OrganizationService],
  directives: const [
    coreDirectives,
    routerDirectives,
    OrganizationDetailComponent,
  ],
  templateUrl: 'organization_component.html',
)

class OrganizationComponent extends Object with CanReuse implements OnActivate {

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final OrganizationService _organizationService;
  final Router _router;

  final Location _location;

  bool detailVisible = false;

  Organization selectedOrganization;

  OrganizationComponent(this._authService, this._appLayoutService, this._organizationService,
       this._location, this._router) {
  }

  void onActivate(RouterState routeStatePrevious, RouterState routeStateCurrent) async {
    if (_authService.selectedOrganization == null || _authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }

    _appLayoutService.headerTitle =
        OrganizationMsg.label('Organization');
    selectedOrganization = _authService.selectedOrganization;

    viewDetail(true);
  }

  void changeOrganizationDetail(String organizationId) async {
    print('****');
    print(organizationId);
    selectedOrganization = await _organizationService.getOrganization(organizationId);
    print(selectedOrganization);
    viewDetail(false);
  }

  void viewDetail(bool detailVisible) {
    this.detailVisible = detailVisible;
    if (detailVisible == false)
       _location.back();

  }
}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
/* import 'package:angular_components/angular_components.dart'; */

import 'package:auge_server/model/organization.dart';

import 'package:auge_web/message/messages.dart';

import 'package:auge_web/src/organization/organization_detail_component.dart';
import 'package:auge_web/src/organization/organization_service.dart';
import 'package:auge_web/services/app_routes.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';


@Component(
  selector: 'auge-organization',
  providers: const <dynamic>[OrganizationService],
  directives: const [
    coreDirectives,
    routerDirectives,
    /* materialDirectives, */
    OrganizationDetailComponent,
  ],
  templateUrl: 'organization_component.html',
)

class OrganizationComponent extends Object with CanReuse implements OnActivate {

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final Router _router;

  final Location _location;

  bool detailVisible = false;

  Organization selectedOrganization;

  OrganizationComponent(this._authService, this._appLayoutService,
       this._location, this._router) {
  }

  @override
  onActivate(RouterState routeStatePrevious, RouterState routeStateCurrent) async {
    if (this._authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
    }

    _appLayoutService.headerTitle =
        OrganizationMessage.label('Organization');
/*
    if (routeStateCurrent.parameters.isNotEmpty) {
      var uuid = routeStateCurrent.parameters[AppRoutes.organizationIdParameter];
      if (uuid != null && uuid.isNotEmpty) {
        selectedOrganization = await _organizationService.getOrganizationById(uuid);
      }
    }
*/
    selectedOrganization = _authService.selectedOrganization;

    viewDetail(true);

  }

  void changeOrganizationDetail(Organization organization) {
    if (selectedOrganization == null) {
      selectedOrganization = organization;
    } else {
      organization.cloneTo(selectedOrganization);
    }
  }

  void viewDetail(bool detailVisible) {
    this.detailVisible = detailVisible;
    if (detailVisible == false)
       _location.back();
  }

}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_router/angular_router.dart';

import 'package:auge/shared/model/organization.dart';
import 'package:auge/shared/message/messages.dart';

import 'package:auge/web/src/organization/organization_service.dart';
import 'package:auge/web/services/app_routes.dart';

@Component(
    selector: 'auge-organization-detail',
    providers: const <dynamic>[materialProviders],
    directives: const [
    coreDirectives,
    routerDirectives,
    AutoFocusDirective,
    ModalComponent,
    materialDirectives,
    MaterialInputComponent,
    MaterialButtonComponent,
    MaterialIconComponent,
    MaterialDialogComponent,],
    templateUrl: 'organization_detail_component.html',
    styleUrls: const [
      'organization_detail_component.css'
    ])

  class OrganizationDetailComponent implements OnActivate {

    final OrganizationService _organizationService;
    final Location _location;
    final Router _router;

    Organization organization = new Organization();

    OrganizationDetailComponent(this._organizationService,  this._router, this._location);


    // Define messages and labels
    String requiredValueMsg() => CommonMessage.requiredValueMsg();
    String label(String label) =>  OrganizationMessage.label(label);
    String buttonLabel(String label) =>  CommonMessage.buttonLabel(label);

    @override
    Future onActivate(routeStatePrevious, routeStateCurrent) async {
      if (routeStateCurrent.parameters.isNotEmpty) {
        var uuid = routeStateCurrent.parameters[AppRoutes.organizationIdParameter];
        if (uuid != null && uuid.isNotEmpty) {
          organization = await _organizationService.getOrganizationById(uuid);
        }
      }
    }

    void saveOrganization() {
      _organizationService.saveOrganization(organization);
      goBack();
    }

    void goBack() {
      _location.back();
    }
}
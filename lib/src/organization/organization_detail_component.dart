// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_router/angular_router.dart';

import 'package:auge_server/model/organization.dart';
import 'package:auge_web/message/messages.dart';

import 'package:auge_web/src/organization/organization_service.dart';

@Component(
  selector: 'auge-organization-detail',
  providers: const <dynamic>[materialProviders, OrganizationService],
  directives: const [
    coreDirectives,
    routerDirectives,
    materialDirectives,
  ],
  templateUrl: 'organization_detail_component.html',
  styleUrls: const [
    'organization_detail_component.css'
  ])

class OrganizationDetailComponent extends Object implements OnInit {

  @Input()
  Organization selectedOrganization;

  final OrganizationService _organizationService;

  Organization organization = new Organization();

  final _closeController = new StreamController<void>.broadcast(sync: true);

  /// Publishes events when close.
  @Output()
  Stream<void> get close => _closeController.stream;

  final _saveController = new StreamController<Organization>.broadcast(sync: true);

  /// Publishes events when save.
  @Output()
  Stream<Organization> get save => _saveController.stream;

  /// When it exists, the error/exception message is presented into dialog view.
  String dialogError;

  OrganizationDetailComponent(this._organizationService);

  // Define messages and labels
  static final String requiredValueMsg = CommonMessage.requiredValueMsg();
  static final String addOrganizationLabel =  OrganizationMessage.label('Add Organization');
  static final String editOrganizationLabel =  OrganizationMessage.label('Edit Organization');

  static final String nameLabel =  OrganizationMessage.label('Name');
  static final String codeLabel =  OrganizationMessage.label('Code');

  static final String saveButtonLabel = CommonMessage.buttonLabel('Save');
  static final String closeButtonLabel = CommonMessage.buttonLabel('Close');

  @override
  void ngOnInit() {
    if (selectedOrganization != null) {
      // Clone objective
      organization = selectedOrganization.clone();

    } else {
      // objective.organization = _authService.selectedOrganization;
    }
  }

  void saveOrganization() {
    try {
      _organizationService.saveOrganization(organization);
      _saveController.add(organization);
      closeDetail();
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }
  }

  bool get validInput {
    return organization.name?.trim()?.isNotEmpty ?? false;
  }

  void closeDetail() {
    _closeController.add(null);
  }

}
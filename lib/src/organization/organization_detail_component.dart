// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_input/material_input.dart';

import 'package:auge_server/model/general/organization.dart';

import 'package:auge_web/message/messages.dart';
import 'package:auge_web/src/organization/organization_service.dart';

@Component(
  selector: 'auge-organization-detail',
  providers: const <dynamic>[overlayBindings, OrganizationService],
  directives: const [
    coreDirectives,
    routerDirectives,
    materialInputDirectives,
    AutoFocusDirective,
    MaterialDialogComponent,
    ModalComponent,
    MaterialIconComponent,
    MaterialButtonComponent,
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
  Stream<void> get closed => _closeController.stream;

  final _saveController = new StreamController<String>.broadcast(sync: true);

  /// Publishes events when save.
  @Output()
  Stream<String> get saved => _saveController.stream;

  /// When it exists, the error/exception message is presented into dialog view.
  String dialogError;

  OrganizationDetailComponent(this._organizationService);

  // Define messages and labels
  static final String requiredValueMsg = CommonMsg.requiredValueMsg();
  static final String addOrganizationLabel =  OrganizationMsg.label('Add Organization');
  static final String editOrganizationLabel =  OrganizationMsg.label('Edit Organization');

  static final String nameLabel =  OrganizationMsg.label('Name');
  static final String codeLabel =  OrganizationMsg.label('Code');

  static final String saveButtonLabel = CommonMsg.buttonLabel('Save');
  static final String closeButtonLabel = CommonMsg.buttonLabel('Close');

  @override
  void ngOnInit() async {
    if (selectedOrganization != null)  {
      // Clone objective
      // organization = selectedOrganization.clone();
      organization = await _organizationService.getOrganization(selectedOrganization.id);
    }
  }

  void saveOrganization() {
    try {
      _organizationService.saveOrganization(organization);
      _saveController.add(organization.id);
      //closeDetail();
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
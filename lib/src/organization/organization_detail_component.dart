// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:auge_web/services/app_routes.dart';

import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_input/material_input.dart';

import 'package:auge_server/model/general/organization.dart';

import 'package:auge_web/message/messages.dart';
import 'package:auge_web/message/model_messages.dart';

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

class OrganizationDetailComponent implements OnInit, OnActivate, OnDeactivate {

  final OrganizationService _organizationService;
  final Location _location;

  bool modalVisible = false;

  Organization organization;

  /// When it exists, the error/exception message is presented into dialog view.
  String dialogError;

  OrganizationDetailComponent(this._organizationService, this._location);

  // Define messages and labels
  static final String requiredValueMsg = CommonMsg.requiredValueMsg();
  static final String saveButtonLabel = CommonMsg.buttonLabel('Save');
  static final String closeButtonLabel = CommonMsg.buttonLabel('Close');

  static final String addOrganizationLabel =  OrganizationMsg.label('Add Organization');
  static final String editOrganizationLabel =  OrganizationMsg.label('Edit Organization');

  static final String nameLabel =  FieldMsg.label('${Organization.className}.${Organization.nameField}');
  static final String codeLabel =  FieldMsg.label('${Organization.className}.${Organization.codeField}');

  @override
  void ngOnInit() async {

    organization = Organization();
  }

  @override
  void onActivate(RouterState previous, RouterState current) async {
    modalVisible = true;

    String id;
    if (current.parameters.containsKey(AppRoutesParam.organizationIdParameter)) {
      id = current.parameters[AppRoutesParam.organizationIdParameter];
    }

    if (id != null) {
      organization =
      await _organizationService.getOrganization(id);
    }
  }

  @override
  void onDeactivate(RouterState current, RouterState next) {
    modalVisible = false;
  }

  void saveOrganization() {
    try {
      _organizationService.saveOrganization(organization);
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
    _location.back();
  }
}
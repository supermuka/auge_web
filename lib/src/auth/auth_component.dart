// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:platform_detect/platform_detect.dart';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_stepper/material_step.dart';
import 'package:angular_components/material_stepper/material_stepper.dart';
import 'package:angular_components/model/action/async_action.dart';
import 'package:angular_components/utils/angular/scroll_host/angular_2.dart';
import 'package:angular_components/material_select/material_dropdown_select.dart';
import 'package:angular_components/material_select/material_dropdown_select_accessor.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/model/ui/has_renderer.dart';

import 'auth_service.dart';
import 'package:auge_web/services/common_service.dart' as common_service;

import 'package:auge_server/model/user.dart';
import 'package:auge_server/model/organization.dart';

import 'package:auge_web/message/messages.dart';

import 'package:auge_web/services/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
// import 'package:auge_web/src/app_layout/app_layout_component.template.dart' as app_layout_component;

@Component(
  selector: 'auge-auth',
  providers: const [scrollHostProviders],
  directives: const [
    coreDirectives,
    routerDirectives,
    materialInputDirectives,
    MaterialDialogComponent,
    MaterialStepperComponent,
    StepDirective,
    SummaryDirective,
    MaterialButtonComponent,

    MaterialDropdownSelectComponent,
    DropdownSelectValueAccessor,
    /* DropdownButtonComponent, */

    /* materialDirectives, */
  ],
  styleUrls: const ['auth_component.css'],
  templateUrl: 'auth_component.html',
)

class AuthComponent extends Object with OnActivate  {

  String appLayoutRoute = AppRoutes.appLayoutRoute.toUrl();

  final AuthService _authService;

  String eMail = "demo@levius.com.br";
  String passwordStr = "1234567";
  String dialogError;

  // Dropdown Select to Organization and SuperAdmin
  List<OptionGroup<AppLayoutOrganizationSelectOption>> organizationGroupOptions = new List();
  SelectionOptions organizationOptions;
  SelectionModel organizationSingleSelectModel;

  Router _router;

  AuthComponent(this._authService, this._router);

  /// Messages and labels
  static final String headerTitleLabel = CommonMessage.label('AUGE');
  static final String headerSubtitleLabel = CommonMessage.label('Objectives and Initiatives');
  static final String loginButtonLabel = CommonMessage.buttonLabel('Login');
  static final String requiredValueMsg = CommonMessage.requiredValueMsg();

  static final String eMailLabel = AuthMessage.label('eMail');
  static final String passwordLabel = AuthMessage.label('Password');

  static String organizationSingleSelectLabel = AuthMessage.label('Select');

  void onActivate(RouterState previous, RouterState current) {

    // Needs to set auth attributes again
    _authService.authenticatedUser = null;
    _authService.selectedOrganization = null;
    _authService.authorizedOrganizations = null;
    _authService.authorizedSystemRole = null;

    if (!browser.isChrome) {
      dialogError = AuthMessage.browserCompatibleErrorMsg();
    }

  }

  void authenticateAuthorizate(AsyncAction<bool> action) async {

    action.cancelIf( Future.sync(
            () async  {
      if (eMail.isEmpty || passwordStr.isEmpty) {
        dialogError = AuthMessage.informEMailPasswordCorrectlyMsg();
      } else {
        try {

          _authService.authenticatedUser =
              await _authService.getAuthenticatedUserWithEmail(eMail, passwordStr);
          if (_authService.authenticatedUser == null) {
            dialogError = AuthMessage.userNotFoundMsg();
          } else {

        
            _authService.authorizedOrganizations =
            await _authService.getAuthorizedOrganizationsByUserId(
                _authService.authenticatedUser.id);
            // (TODO) Treating the super admin
            if (_authService.authorizedOrganizations == null ||
                _authService.authorizedOrganizations.length == 0) {
              dialogError = AuthMessage.organizationNotFoundMsg();
            } else {

              configOrganizationSeletion();
              // Don't cancel
              return false;
            }
          }
        } catch (e) {
          dialogError = AuthMessage.serverApiErrorMsg();
          rethrow;
        }
      }
      return true;
    }));
  }

  User get authenticatedUser {
    return _authService?.authenticatedUser;
  }

  Organization get authorizedAndSelectedOrganization {
    return _authService?.selectedOrganization;
  }


  void configOrganizationSeletion() {

    // MENU LEFT *** Dropdown select to Organizations and Super Admin ***
    organizationGroupOptions.clear();

    // Organizations
    List<AppLayoutOrganizationSelectOption> orgs = new List();

    String orgGroupLabel = AuthMessage.label('Organization');

    if (_authService.authorizedOrganizations != null &&
        _authService.authorizedOrganizations.isNotEmpty) {
      _authService.authorizedOrganizations.forEach((e) =>
          orgs.add(new AppLayoutOrganizationSelectOption()
            ..group = orgGroupLabel
            ..name = e.organization.name
            ..organization = e?.organization));
    }
    organizationGroupOptions.add(
        new OptionGroup.withLabel(orgs, orgGroupLabel));

    // Super Administration
    List<AppLayoutOrganizationSelectOption> adms = new List();

    String admGroupLabel = AuthMessage.label('Super Admin');

    organizationOptions =
    new SelectionOptions.withOptionGroups(organizationGroupOptions);

    // Model Listening
    organizationSingleSelectModel =
    new SelectionModel.single()
      ..selectionChanges.listen((d) async {
        if (d != null && d.isNotEmpty && d.first != null && d.first.added != null && d.first.added.isNotEmpty) {
          if (_authService.selectedOrganization !=
              d.first?.added.first.organization) {

              _authService.selectedOrganization =
                  d.first.added.first.organization;

              organizationSingleSelectLabel =
                d.first.added.first.name ??
                  AuthMessage.label('Select');
          }
        }
      });


    if (organizationSingleSelectModel.isEmpty && organizationOptions.optionsList.isNotEmpty) {
      organizationSingleSelectModel.select(organizationOptions.optionsList.first);
    }
  }

  String userUrlImage(User user) {
    return common_service.userUrlImage(user?.userProfile?.image);
  }

  goToAppLayout(AsyncAction<bool> action) {
    action.cancelIf(Future.sync(() {
      _router.navigate(AppRoutes.appLayoutRoute.toUrl(), NavigationParams(reload: true));

      // Don't cancel
      return false;
    }));
  }

  bool get validInput {
    return (eMail != null && eMail.trim().isNotEmpty
        && passwordStr != null && passwordStr.trim().isNotEmpty) ?? false;
  }

  ItemRenderer get itemRenderer => (dynamic item) => item.name;
}

class AppLayoutOrganizationSelectOption {
  String group;
  String name;
  Organization organization;
}
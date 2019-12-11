// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';
//import 'dart:html' as html;
import 'package:intl/intl.dart';

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

import 'package:auge_server/domain/general/user.dart';
import 'package:auge_server/domain/general/organization.dart';
import 'package:auge_server/domain/general/user_access.dart';

import 'package:auge_server/shared/message/messages.dart';

import 'package:auge_web/services/app_routes.dart';

// import 'package:auge_web/messages/i18n/intl_messages_all.dart';

@Component(
  selector: 'auge-auth',
  templateUrl: 'auth_component.html',
  styleUrls: const ['auth_component.css'],
  providers: const [scrollHostProviders],
  directives: const [
    routerDirectives,
    materialInputDirectives,
    MaterialDialogComponent,
    MaterialStepperComponent,
    StepDirective,
    SummaryDirective,
    MaterialButtonComponent,
    MaterialDropdownSelectComponent,
    DropdownSelectValueAccessor,
  ]
)


class AuthComponent implements OnActivate  {

  String appLayoutRoute = AppRoutes.appLayoutRoute.toUrl();

  final AuthService _authService;

  final Router _router;

  String identification = AuthMsg.label(AuthMsg.identificationLabel);
  String passwordStr = "1234567";
  String _dialogError;

  String get dialogError => _dialogError;

  set dialogError(String dialogError) {
    _dialogError = dialogError;

    // Start a timeout to after to clear the error.
    // The error is presented just some seconds.
    common_service.startTimeoutTimer(() { _dialogError = null; });
  }

  List<UserAccess> authorizedUserAccesses;

  // Dropdown Select to Organization and SuperAdmin
  List<OptionGroup<AppLayoutOrganizationSelectOption>> organizationGroupOptions = new List();
  SelectionOptions organizationOptions;
  SelectionModel organizationSingleSelectModel;

  AuthComponent(this._authService, this._router);

  /// Messages and labels
  static final String headerTitleLabel =  CommonMsg.label(CommonMsg.augeLabel);
  static final String headerSubtitleLabel = Intl.message('Objectives and Works', name: 'AuthComponent_headerSubtitleLabel'); // CommonMsg.label('Objectives and Works');
  static final String loginButtonLabel = Intl.message('Login', name: 'AuthComponent_loginButtonLabel'); // CommonMsg.buttonLabel('Login');
  static final String requiredValueMsg = Intl.message('Enter with a required value', name: 'AuthComponent_requiredValueMsg'); // CommonMsg.requiredValueMsg();

  static final String identificationLabel = Intl.message('Identification', name: 'AuthComponent_identificationLabel'); // AuthMsg.label('Identification');
  static final String passwordLabel = Intl.message('Password', name: 'AuthComponent_passwordLabel'); //AuthMsg.label('Password');

  static String organizationSingleSelectLabel = Intl.message('Select', name: 'AuthComponent_organizationSingleSelectLabel'); // AuthMsg.label('Select');

  void onActivate(RouterState previous, RouterState current) {

    // Needs to set auth attributes again
   // _authService.authenticatedUser = null;
    //_authService.selectedOrganization = null;
    //_authService.authorizedOrganizations = null;

    // Needs to set auth attributes again
    _authService.authUserAccess = UserAccess();

    // _authService.authorizedSystemRole = null;

    if (!browser.isChrome) {
      dialogError = Intl.message('Browser Compatible: Chrome', name: 'AuthComponent_browserCompatible');
    }

  }

  void authenticateAuthorizate(AsyncAction<bool> action) async {
/*
    action.cancelIf(Future<bool>.delayed(const Duration(seconds: 1), () {
      // Don't cancel
      return false;
    }));
*/
    action.cancelIf( Future<bool>.sync(
            () async  {
      if (identification.isEmpty || passwordStr.isEmpty) {
        //dialogError = AuthMsg.informIdentificationPasswordCorrectlyMsg();
        dialogError = Intl.message('Inform an identification and password correctly.', name: 'AuthComponent_informIdentificationPasswordCorrectlyMsg');
      } else {
        try {
          _authService.authUserAccess.user =
          await _authService.getAuthenticatedUser(identification, passwordStr);
          if (_authService.authUserAccess.user == null) {
            //dialogError = AuthMsg.userNotFoundMsg();
            dialogError = Intl.message('User not found.', name: 'AuthComponent_userNotFoundMsg');
          } else {
            authorizedUserAccesses =
            await _authService.getAuthorizedUserAccesses(
                _authService.authUserAccess.user.id);
            if (authorizedUserAccesses == null ||
                authorizedUserAccesses.length == 0) {
              //dialogError = AuthMsg.organizationNotFoundMsg();
              dialogError = Intl.message('Organization not found.', name: 'AuthComponent_organizationNotFoundMsg');
            } else {
              configOrganizationSelection();
              // Don't cancel
              return false;
            }
          }

        } catch (e) {
          //dialogError = AuthMsg.serverApiErrorMsg();
          dialogError = Intl.message('Server Api Error.', name: 'AuthComponent_serverApiErrorMsg');
          return true;
          //rethrow;
        }
      }
      return true;
    }));
  }

  goToAppLayout(AsyncAction<bool> action) {

    action.cancelIf(Future<bool>.sync(() {
      _router.navigate(AppRoutes.appLayoutRoute.toUrl(), NavigationParams(reload: true));

      // Don't cancel
      return false;
    }));
  }

  User get authenticatedUser {
    return _authService.authenticatedUser;
  }

  Organization get authorizedOrganization {
    return _authService.authorizedOrganization;
  }

  void configOrganizationSelection() {

    // MENU LEFT *** Dropdown select to Organizations and Super Admin ***
    organizationGroupOptions.clear();

    // Organizations
    List<AppLayoutOrganizationSelectOption> orgs = new List();

    //String orgGroupLabel = AuthMsg.label('Organization');
    String orgGroupLabel = Intl.message('Organization.', name: 'AuthComponent_orgGroupLabel');

    if (authorizedUserAccesses != null &&
        authorizedUserAccesses.isNotEmpty) {
      authorizedUserAccesses.forEach((e) =>
          orgs.add(new AppLayoutOrganizationSelectOption()
            ..group = orgGroupLabel
            ..name = e.organization.name
            ..userAccess  = e));
    }
    organizationGroupOptions.add(
        new OptionGroup.withLabel(orgs, orgGroupLabel));

    // Super Administration
    //-- List<AppLayoutOrganizationSelectOption> adms = new List();

    //--String admGroupLabel = AuthMsg.label('Super Admin');

    organizationOptions =
    new SelectionOptions.withOptionGroups(organizationGroupOptions);

    // Model Listening
    organizationSingleSelectModel =
    new SelectionModel.single()
      ..selectionChanges.listen((d) async {
        if (d != null && d.isNotEmpty && d.first != null && d.first.added != null && d.first.added.isNotEmpty) {

          if (_authService.authUserAccess !=
              d.first.added.first.userAccess) {

              _authService.authUserAccess =
                  d.first.added.first.userAccess;

              organizationSingleSelectLabel =
                d.first.added.first.userAccess.organization.name ??
                    Intl.message('Select.', name: 'AuthComponent_select'); //AuthMsg.label('Select');
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
/*
  bool validIdentificationPattern(html.FocusEvent focusEvent) {
    if (identification != null && identification.trim().isNotEmpty) {
      bool isEmailPattern = common_service.isEmailPattern(identification);
      if (!isEmailPattern) {
        focusEvent.stopPropagation();
      }
      return isEmailPattern;
    } else {
      return true;
    }
  }
 */

  bool validInput() {
    return (identification != null && identification.trim().isNotEmpty
        && passwordStr != null && passwordStr.trim().isNotEmpty) ?? false;
  }

  ItemRenderer get itemRenderer => (dynamic item) => item.name;
}

class AppLayoutOrganizationSelectOption {
  String group;
  String name;
  UserAccess userAccess;
}
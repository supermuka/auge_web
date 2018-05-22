// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
import 'auth_service.dart';

import 'package:auge/shared/message/messages.dart';

import 'package:auge/web/services/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge/web/src/app_layout/app_layout_component.template.dart' as app_layout_component;

@Component(
  selector: 'auge-auth',
  //providers: const [materialProviders],
  directives: const [
    coreDirectives,
    routerDirectives,
    ModalComponent,
    MaterialDialogComponent,
    materialDirectives,
    MaterialInputComponent,
  ],
  styleUrls: const ['auth_component.css'],
  templateUrl: 'auth_component.html',
)

class AuthComponent {

  String appLayoutRoute = AppRoutes.appLayoutRoute.toUrl();

  final AuthService _authService;

  String eMail = "samuel.schwebel@gmail.com";
  String passwordStr = "1234567";
  String error;

  Router _router;

  AuthComponent(this._authService, this._router);

  /// Messages and labels
  String get headerTitleLabel => CommonMessage.label('AUGE');
  String get headerSubtitleLabel => CommonMessage.label('Objectives and Initiatives');
  String get loginButtonLabel =>  CommonMessage.buttonLabel('Login');
  String get requiredValueMsg =>  CommonMessage.requiredValueMsg();

  String get eMailLabel => AuthMessage.label("eMail");
  String get passwordLabel => AuthMessage.label("Password");

  Future<Null> authenticateAuthorizate(String email, String password) async {

    if (email.isEmpty || password.isEmpty) {
      error = AuthMessage.informEMailPasswordCorrectlyMsg();
    } else {

      _authService.authenticatedUser =
      await _authService.getAuthenticatedUserWithEmail(email, password);

      if (_authService.authenticatedUser == null) {
        error = AuthMessage.userNotFoundMsg();
      } else {
        _authService.authorizatedOrganizations =
        await _authService.getAuthorizatedOrganizationsByUserId(
            _authService.authenticatedUser.id);

        if (_authService.authorizatedOrganizations == null) {
          error = AuthMessage.organizationNotFoundMsg();
        } else {
          goToAppLayout();
        }
      }
    }
  }

  goToAppLayout() {
    _router.navigate(AppRoutes.appLayoutRoute.toUrl());
  }
}
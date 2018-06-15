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
    materialDirectives,
  ],
  styleUrls: const ['auth_component.css'],
  templateUrl: 'auth_component.html',
)

class AuthComponent {

  String appLayoutRoute = AppRoutes.appLayoutRoute.toUrl();

  final AuthService _authService;

  String eMail = "samuel.schwebel@gmail.com";
  String passwordStr = "1234567";
  static String error;

  Router _router;

  AuthComponent(this._authService, this._router);

  /// Messages and labels
  static final String headerTitleLabel = CommonMessage.label('AUGE');
  static final String headerSubtitleLabel = CommonMessage.label('Objectives and Initiatives');
  static final String loginButtonLabel = CommonMessage.buttonLabel('Login');
  static final String requiredValueMsg = CommonMessage.requiredValueMsg();

  static final String eMailLabel = AuthMessage.label("eMail");
  static final String passwordLabel = AuthMessage.label("Password");

  Future<Null> authenticateAuthorizate(String email, String password) async {

    if (email.isEmpty || password.isEmpty) {
      error = AuthMessage.informEMailPasswordCorrectlyMsg();
    } else {

     try {

       _authService.authenticatedUser =
       await _authService.getAuthenticatedUserWithEmail(email, password);

        if (_authService.authenticatedUser == null) {
          error = AuthMessage.userNotFoundMsg();
        } else {
          _authService.authorizatedOrganizations =
          await _authService.getAuthorizatedOrganizationsByUserId(
             _authService.authenticatedUser.id);

          if (_authService.authorizatedOrganizations == null || _authService.authorizatedOrganizations.length == 0) {
            error = AuthMessage.organizationNotFoundMsg();
          } else {
            goToAppLayout();
          }
        }
      } catch (e) {
        error = AuthMessage.serverApiErrorMsg();
        print(e);
      }
    }
  }

  goToAppLayout() {
    _router.navigate(AppRoutes.appLayoutRoute.toUrl());
  }

  bool get validInput {
    return (eMail?.trim()?.isNotEmpty
        && passwordStr?.trim()?.isNotEmpty) ?? false;
  }
}
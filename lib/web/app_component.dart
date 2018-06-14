// Copyright (c) 2017, Levius.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';

import 'package:intl/intl.dart';
import 'package:auge/shared/i18n/messages_all.dart';

import 'package:auge/web/services/app_routes.dart';

import 'package:auge/web/services/augeapi_service.dart';
import 'package:auge/web/src/auth/auth_service.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge/web/src/auth/auth_component.template.dart' as auth_component;
import 'package:auge/web/src/app_layout/app_layout_component.template.dart' as app_layout_component;

@Component(
    selector: 'auge-app-component',
    providers: const <dynamic>[materialProviders, AugeApiService, AuthService],
    directives: const [
      coreDirectives,
      routerDirectives,
    ],
    templateUrl: 'app_component.html',
    styleUrls: const [
      'app_component.css',
    ])

class AppComponent extends Object with CanReuse {

  final Router _router;

  final List<RouteDefinition> routes = [
    new RouteDefinition(
      routePath: AppRoutes.authRoute,
      component: auth_component.AuthComponentNgFactory,
      useAsDefault: true
    ),
    new RouteDefinition(
      routePath: AppRoutes.appLayoutRoute,
      component: app_layout_component.AppLayoutComponentNgFactory,
    ),
  ];

  AppComponent(this._router) {
    Intl.defaultLocale = 'en_US';
    initializeMessages(Intl.defaultLocale);
  }
}


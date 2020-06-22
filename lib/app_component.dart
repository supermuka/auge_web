// Copyright (c) 2017, Levius.

import 'package:angular/angular.dart';

import 'package:angular_router/angular_router.dart';

import 'package:auge_web/route/app_routes.dart';
import 'package:auge_web/services/auge_api_service.dart';
import 'package:auge_web/src/auth/auth_service.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/auth/auth_component.template.dart' as auth_component;
import 'package:auge_web/src/app_layout/app_layout_component.template.dart' as app_layout_component;

@Component(
    selector: 'auge-app-component',
    templateUrl: 'app_component.html',
    styleUrls: const [
    'app_component.css',
    ],
    providers: const <dynamic>[AugeApiService,
      AuthService],
      directives: const [
      coreDirectives,
      routerDirectives,
    ])

class AppComponent with CanReuse  {

  final List<RouteDefinition> routes = [
    RouteDefinition(
      routePath: AppRoutes.authRoute,
      component: auth_component.AuthComponentNgFactory,
      useAsDefault: true
    ),
    RouteDefinition(
      routePath: AppRoutes.appLayoutRoute,
      component: app_layout_component.AppLayoutComponentNgFactory,
    ),
  ];

  AppComponent();

}
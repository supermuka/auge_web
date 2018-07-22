// Copyright (c) 2017, Administrador. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:http/browser_client.dart';

// ignore_for_file: uri_has_not_been_generated
import 'main.template.dart' as ng;
import 'package:auge_web/app_component.template.dart' as app_component;

@GenerateInjector([
   routerProviders,
   const Provider(appBaseHref, useValue: '/'),

   // Remove next line in production
  const ClassProvider(LocationStrategy, useClass: HashLocationStrategy),

  const ClassProvider(BrowserClient, useClass: BrowserClient),
])

final InjectorFactory rootInjector = ng.rootInjector$Injector;

void main() {

  runApp(app_component.AppComponentNgFactory, createInjector: rootInjector);

}



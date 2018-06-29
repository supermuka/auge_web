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

 // const FactoryProvider.forToken(WindowToken, constWindow),
  const ClassProvider(BrowserClient, useClass: BrowserClient),

 //const FactoryProvider.forToken(BrowserClientToken, constBrowserClient),

  //new Provider(Window, useValue: window),
 // provide(BrowserClient, useFactory: () => new BrowserClient(), deps: [])
])

final InjectorFactory rootInjector = ng.rootInjector$Injector;

void main() {

  runApp(app_component.AppComponentNgFactory, createInjector: rootInjector);
 // runApp(app_component.AppComponentNgFactory);
/*
  bootstrapStatic(AppComponent, [
    routerProviders,
    // We use this instead of <base href="/" /> to make local development
    // nicer (i.e. load "styles.css" relatively).
    const Provider(appBaseHref, useValue: '/'),
    new Provider(Window, useValue: window),
    // Remove next line in production
    provide(LocationStrategy, useClass: HashLocationStrategy),
    provide(BrowserClient, useFactory: () => new BrowserClient(), deps: [])],  ng.initReflector );

*/
}



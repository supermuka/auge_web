// Copyright (c) 2017, Administrador. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_router/angular_router.dart';
import 'package:grpc/grpc_web.dart';

// ignore_for_file: uri_has_not_been_generated
import 'main.template.dart' as ng;
import 'package:auge_web/app_component.template.dart' as app_component;

@GenerateInjector([
   routerProviders,
   materialProviders,
   const Provider(appBaseHref, useValue: '/'),

   // Remove next line in production
   const ClassProvider(LocationStrategy, useClass: HashLocationStrategy),

   //--const ClassProvider(BrowserClientAuth, useClass: BrowserClientAuth),

   const ClassProvider(GrpcWebClientChannel, useClass: GrpcWebClientChannel),
   const ClassProvider(Uri, useClass: Uri),
])

final InjectorFactory rootInjector = ng.rootInjector$Injector;

void main() {

  runApp(app_component.AppComponentNgFactory, createInjector: rootInjector);

}



// Copyright (c) 2017, Administrador. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_router/angular_router.dart';
import 'package:grpc/grpc_web.dart';
import 'package:intl/intl_browser.dart';
import 'package:intl/intl.dart';
import 'package:intl/date_symbol_data_local.dart';

// ignore_for_file: uri_has_not_been_generated
import 'main.template.dart' as ng;
import 'package:auge_web/app_component.template.dart' as app_component;
import 'package:auge_shared/message/i18n/messages_all.dart';

@GenerateInjector([
   routerProviders,
   materialProviders,
   const Provider(appBaseHref, useValue: '/'),

   // Should be removed next line in production -
   // But Important: For while, would be used old style with "#", because webdev serve not working with deep link (html 5 pushstate)
   const ClassProvider(LocationStrategy, useClass: HashLocationStrategy),
   //const ClassProvider(LocationStrategy, useClass: PathLocationStrategy),

   //--const ClassProvider(BrowserClientAuth, useClass: BrowserClientAuth),

   const ClassProvider(GrpcWebClientChannel, useClass: GrpcWebClientChannel),
   const ClassProvider(Uri, useClass: Uri),
])

final InjectorFactory rootInjector = ng.rootInjector$Injector;

void main() async {

   Intl.defaultLocale =  await findSystemLocale();
   await initializeMessages(Intl.defaultLocale);
   initializeDateFormatting(Intl.defaultLocale);

   runApp(app_component.AppComponentNgFactory, createInjector: rootInjector);
}



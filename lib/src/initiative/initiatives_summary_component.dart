// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';

import 'package:auge_server/model/initiative/initiative.dart';
import 'package:auge_server/model/objective/objective.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/initiative/initiative_service.dart';

import 'package:auge_web/src/initiative/initiative_summary_component.dart';

import 'package:auge_web/services/app_routes.dart';

@Component(
    selector: 'auge-initiatives-summary',
    providers: const [InitiativeService],
    directives: const [
      coreDirectives,
      routerDirectives,
      materialDirectives,
      InitiativeSummaryComponent,
    ],
    templateUrl: 'initiatives_summary_component.html',
    styleUrls: const [
      'initiatives_summary_component.css'
    ])

class InitiativesSummaryComponent extends Object implements OnInit {

  final InitiativeService _initiativeService;
  final Router _router;
  final AuthService _authService;

  @Input()
  Objective objective;

  List<Initiative> initiatives = new List();

/*
  final List<RouteDefinition> routes = [
    new RouteDefinition(
        routePath: AppRoutes.appLayoutHomeRoute,
        component: app_layout_home.AppLayoutHomeComponentNgFactory,
        useAsDefault: true,
       ),
    new RouteDefinition(
      routePath: AppRoutes.initiativeDetailAddRoute,
      component: initiative_detail_component.InitiativeDetailComponentNgFactory,
      // useAsDefault: true
    ),
    new RouteDefinition(
      routePath: AppRoutes.initiativeDetailRoute,
      component: initiative_detail_component.InitiativeDetailComponentNgFactory,

     // useAsDefault: true
    ),


  ];
*/

  InitiativesSummaryComponent(this._authService, this._initiativeService,  this._router) {

  }

  @override
  ngOnInit() async {

    initiatives = await _initiativeService.getInitiatives(_authService.selectedOrganization?.id, objectiveId: objective?.id, withWorkItems: true);

  }

  void goToInitiatives() {
    _router.navigate(AppRoutes.initiativesRoute.toUrl());
  }

}


// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';

import 'package:auge_server/model/initiative/initiative.dart';
import 'package:auge_server/model/objective/objective.dart';

import 'package:auge_web/message/messages.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/initiative/initiative_service.dart';
import 'package:auge_web/services/common_service.dart' as common_service;

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
  final AppLayoutService _appLayoutService;

  @Input()
  Objective objective;

  List<Initiative> initiatives = [];

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

  InitiativesSummaryComponent( this._authService, this._appLayoutService, this._initiativeService,  this._router) {

  }

  static final String groupLabel =  InitiativeMessage.label('Group');
  static final String leaderLabel =  InitiativeMessage.label('Leader');

  @override
  ngOnInit() async {
    try {
      if (objective?.id != null) {
        initiatives = await _initiativeService.getInitiatives(
            _authService.selectedOrganization?.id, objectiveId: objective.id,
            withWorkItems: true, withProfile: true);
      }
    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  void goToInitiatives() {
    _router.navigate(AppRoutes.initiativesByObjectiveRoute.toUrl(parameters: { AppRoutes.objectiveIdParameter: objective.id}));
  }

  String userUrlImage(String userProfileImage) {
    return common_service.userUrlImage(userProfileImage);
  }


}


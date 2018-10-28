import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
/* import 'package:angular_components/angular_components.dart'; */

import 'package:angular_components/material_tooltip/material_tooltip.dart';

import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_server/model/user.dart';

import 'package:auge_web/message/messages.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';

import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/map/map_service.dart';

import 'package:auge_web/services/app_routes.dart';

@Component(
  selector: 'auge-map',
  providers: const [MapService, ObjectiveService],
  styleUrls: const ['map_component.css'],
  templateUrl: 'map_component.html',

  directives: const [
    coreDirectives,
    routerDirectives,
    MaterialTooltipDirective,

    /* materialDirectives, */
  ],
)

class MapComponent implements OnActivate {

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final MapService _mapService;
  final Router _router;

  List<Objective> objectivesMap = new List();

  MapComponent(this._authService, this._appLayoutService, this._mapService, this._router);

  @override
  Future onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {
    if (this._authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
    }

    _appLayoutService.headerTitle = ObjectiveHierarchyMessage.label('Objectives Map');

    _appLayoutService.enabledSearch = false;

    try {
      objectivesMap = await _mapService.getObjectivesMap(_authService.selectedOrganization.id);

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }

  }

  String userUrlImage(User userMember) {
    return common_service.userUrlImage(userMember?.userProfile?.image);
  }

  void goToObjectives(Objective objective) async {
    _router.navigateByUrl(AppRoutes.objectivesRoute.toUrl(queryParameters: { AppRoutes.objectiveIdParameter: objective.id }));

  }
}
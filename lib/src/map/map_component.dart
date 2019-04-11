// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:angular_components/focus/keyboard_only_focus_indicator.dart';
import 'package:angular_components/laminate/enums/alignment.dart';

import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_server/model/general/user.dart';

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
  pipes: [commonPipes],

  directives: const [
    coreDirectives,
    routerDirectives,
    MaterialTooltipDirective,
    ClickableTooltipTargetDirective,
    KeyboardOnlyFocusIndicatorDirective,
    MaterialPaperTooltipComponent,
  ],
)

class MapComponent implements OnActivate {

  final preferredTooltipPositions = const [RelativePosition.OffsetBottomLeft, RelativePosition.OffsetBottomRight];

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final MapService _mapService;
  final Router _router;

  List<Objective> objectivesMap = new List();

  MapComponent(this._authService, this._appLayoutService, this._mapService, this._router);

  // Define messages and labels
  static final String leaderLabel =  MapMsg.label('Leader');
  static final String groupLabel =  MapMsg.label('Group');
  static final String startDateLabel =  MapMsg.label('Start Date');
  static final String endDateLabel =  MapMsg.label('End Date');

  void onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {

    if (_authService.selectedOrganization == null || _authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }

    _appLayoutService.headerTitle = ObjectiveViewsMsg.label('Objectives Map');

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

  String colorFromUuid(String id) {
    return common_service.colorFromUuid(id);
  }

  String firstLetter(String name) {
    return common_service.firstLetter(name);
  }
}
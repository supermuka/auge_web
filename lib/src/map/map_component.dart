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
import 'package:auge_web/message/model_messages.dart';

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

class MapComponent with CanReuse implements OnActivate {

  final preferredTooltipPositions = const [RelativePosition.OffsetBottomLeft, RelativePosition.OffsetBottomRight];

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final MapService _mapService;
  final Router _router;

  List<Objective> objectivesMap = new List();

  MapComponent(this._authService, this._appLayoutService, this._mapService, this._router);

  // Define messages and labels
  static final String leaderLabel =  FieldMsg.label('${Objective.className}.${Objective.leaderField}');
  static final String groupLabel =  FieldMsg.label('${Objective.className}.${Objective.groupField}');
  static final String startDateLabel =  FieldMsg.label('${Objective.className}.${Objective.startDateField}');
  static final String endDateLabel =  FieldMsg.label('${Objective.className}.${Objective.endDateField}');

  @override
  void onActivate(RouterState previous, RouterState current) async {

    if (_authService.authorizedOrganization == null || _authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }

    _appLayoutService.headerTitle = MapMsg.label('Objectives Map');

    _appLayoutService.enabledSearch = false;

    try {
      objectivesMap = await _mapService.getObjectivesMap(_authService.authorizedOrganization.id);
      /*
      objectivesMap.forEach((o) {
        print('root');
        print(o.name);
        o.alignedWithChildren.forEach((f) {
          print('children');
          print(f.name);
        });
      });
      */

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  String userUrlImage(User userMember) {
    return common_service.userUrlImage(userMember?.userProfile?.image);
  }

  void goToObjectives(Objective objective) async {
    _router.navigateByUrl(AppRoutes.objectivesRoute.toUrl(queryParameters: { AppRoutesParam.objectiveIdParameter: objective.id }));

  }

  String colorFromUuid(String id) {
    return common_service.colorFromUuid(id);
  }

  String firstLetter(String name) {
    return common_service.firstLetter(name);
  }
}
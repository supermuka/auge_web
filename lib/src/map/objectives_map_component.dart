// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';
import 'dart:html' as html;

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_router/angular_router.dart';

import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:angular_components/focus/keyboard_only_focus_indicator.dart';
import 'package:angular_components/laminate/enums/alignment.dart';

import 'package:auge_shared/domain/objective/objective.dart';
import 'package:auge_shared/domain/general/user.dart';

import 'package:auge_shared/message/messages.dart';
import 'package:auge_shared/message/domain_messages.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/search_filter/search_filter_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';

import 'package:auge_web/services/common_service.dart' as common_service;

import 'package:auge_web/route/app_routes.dart';

import 'package:angular_components/laminate/popup/module.dart';
import 'package:angular_components/material_tooltip/module.dart';

@Component(
  selector: 'auge-objectives-map',
  providers: const [ObjectiveService,
    popupBindings,
    materialTooltipBindings],
  templateUrl: 'objectives_map_component.html',
  styleUrls: const ['objectives_map_component.css'],
  pipes: [commonPipes],

  directives: const [
    coreDirectives,
    routerDirectives,
    MaterialButtonComponent,
    MaterialIconComponent,
    MaterialTooltipDirective,
    ClickableTooltipTargetDirective,
    KeyboardOnlyFocusIndicatorDirective,
    MaterialPaperTooltipComponent,
  ],
)

class ObjectivesMapComponent with CanReuse /*  COMENTADO POIS SE USAR, O TOOLTIP NÃO DESAPARECE QUANDO SE NAVEGA PARA OUTRA PÁGINA */ implements OnActivate {

  int zoomInOut = 100;

  final preferredTooltipPositions = const [RelativePosition.OffsetBottomLeft, RelativePosition.OffsetBottomRight];

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final SearchFilterService _searchFilterService;
  //final MapService _mapService;
  final ObjectiveService _objectiveService;
  final Router _router;
/*
  final List<RouteDefinition> routes = [
    RouteDefinition(
    routePath: AppRoutes.objectivesMapFilterRoute,
    component: objectives_filter_component.ObjectivesFilterComponentNgFactory,
    ),
  ];
*/
  List<Objective> objectivesMap = List();

  Set<Objective> objectivesCollapesed = Set();

  ObjectivesMapComponent(this._authService, this._appLayoutService, this._searchFilterService, this._objectiveService, /* this._mapService, */ this._router);

  // Define messages and labels
  static final String notInformedMsg = MapMsg.notInformedMsg();

  static final String leaderLabel =  ObjectiveDomainMsg.fieldLabel(Objective.leaderField);
  static final String groupLabel =  ObjectiveDomainMsg.fieldLabel(Objective.groupField);
  static final String startDateLabel =  ObjectiveDomainMsg.fieldLabel(Objective.startDateField);
  static final String endDateLabel =  ObjectiveDomainMsg.fieldLabel(Objective.endDateField);

  static final String objectivesLabel =  ObjectiveMsg.label(ObjectiveMsg.objectivesLabel);

  // Just workaround  to force paper tooltip close.
  @ViewChildren(ClickableTooltipTargetDirective)
  List<ClickableTooltipTargetDirective> children;


  @override
  void onActivate(RouterState previous, RouterState current) async {

    if (_authService.authorizedOrganization == null || _authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }

    _appLayoutService.headerTitle = MapMsg.label(MapMsg.objectivesMapLabel);
//    _appLayoutService.enabledSearch = false;
    _appLayoutService.systemModuleIndex =  null;

    // Enabled search and filter
    _searchFilterService.enableSearch = false;
    _searchFilterService.enableFilter = false;
    _searchFilterService.enableExport = false;
    /*
    _searchFilterService.filterRouteUrl = AppRoutes.objectivesMapFilterRoute.toUrl();
    _searchFilterService.filteredItems = _objectiveService.objectivesFilterOrder.filteredItems;
*/

    try {
      objectivesMap = await _objectiveService.getObjectivesWithMeasureAndTree(_authService.authorizedOrganization.id,
          groupIds: _objectiveService.objectivesFilterOrder.groupIds?.toList(),
          leaderUserIds: _objectiveService.objectivesFilterOrder.leaderUserIds?.toList());

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  String userUrlImage(User userMember) {
    return common_service.userUrlImage(userMember?.userProfile?.image);
  }

  void goToObjective(Objective objective, [html.Event event]) async {

    event.stopPropagation();
   // event.stopImmediatePropagation();

    children.forEach((f) {
      // f.hideTooltip(immediate: true);
      f.hideTooltip(immediate: true);
    });

  //  x.hideTooltip(immediate: true);

    // Just workaround  to force paper tooltip close.
/*
    Timer.run(() {
    print('DEBUG ${onlyFocus.toString()}');
   // onlyFocus.focus();

    onlyFocus.hideTooltip(immediate: true);

    mtc.deactivate(immediate: true);

*/

    // Workaround need to a time to close tool tip. The problem occurs when is used CanReuse
    Timer.run(() {
      _router.navigateByUrl(AppRoutes.objectivesRoute.toUrl(queryParameters: {
        AppRoutesQueryParam.objectiveIdQueryParameter: objective.id,
        AppRoutesQueryParam.search: 'true'
      }));
    });

  }

  String colorFromUuid(String id) {
    return common_service.colorFromUuid(id);
  }

  String firstLetter(String name) {
    return common_service.firstLetter(name);
  }

  String groupName(String name) {
    return name ?? notInformedMsg;
  }

  collapseExpand(html.Event event, Objective objective) {
    event.preventDefault();
    event.stopPropagation();
    if (objectivesCollapesed.contains(objective))
      objectivesCollapesed.remove(objective);
    else
      objectivesCollapesed.add(objective);
  }

  void zoomIn() {
    if (zoomInOut < 100) zoomInOut = zoomInOut + 10;
  }

  void zoomOut() {
    if (zoomInOut > 10) zoomInOut = zoomInOut - 10;
  }
}

// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';
//import 'package:intl/intl.dart';
//import 'package:intl/date_symbol_data_local.dart';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
import 'package:auge/shared/model/initiative/initiative.dart';
import 'package:auge/shared/message/messages.dart';

import 'package:auge/web/src/auth/auth_service.dart';
import 'package:auge/web/src/app_layout/app_layout_service.dart';
import 'package:auge/web/src/work_item/work_item_service.dart';
import 'package:auge/web/src/initiative/initiative_service.dart';

import 'package:auge/web/src/work_item/work_items_kanban_component.dart';
import 'package:auge/web/src/work_item/work_items_list_component.dart';

import 'package:auge/web/services/app_routes.dart';

@Component(
    selector: 'auge-work-items',
    providers: const [InitiativeService, WorkItemService],
    directives: const [
      coreDirectives,
      routerDirectives,
      AutoFocusDirective,
      materialDirectives,
      NgStyle,
      MaterialInputComponent,
      MaterialFabComponent,
      MaterialButtonComponent,
      MaterialIconComponent,
      MaterialDialogComponent,
      MaterialProgressComponent,
      MaterialTooltipDirective,
      MaterialIconTooltipComponent,
      MaterialInkTooltipComponent,
      MaterialPaperTooltipComponent,
      MaterialPopupComponent,
      MaterialTooltipDirective,
      MaterialTooltipTargetDirective,
      MaterialTooltipSourceDirective,
      MaterialListComponent,
      MaterialListItemComponent,
      WorkItemsListComponent,
      WorkItemsKanbanComponent,
    ],
    pipes: const [commonPipes],
    templateUrl: 'work_items_component.html',
    styleUrls: const [
      'work_items_component.css'
    ])

class WorkItemsComponent extends Object with CanReuse implements OnActivate {

  String selectedView = 'list';

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final InitiativeService _initiativeService;
  final Router _router;
  String _selectedInitiativeId;

  Initiative initiative = new Initiative();

  WorkItemsComponent(this._authService, this._appLayoutService, this._initiativeService, this._router) {
   // initializeDateFormatting(Intl.defaultLocale);
  }

  String label(String label) =>  InitiativeMessage.label(label);

  @override
  Future onActivate(RouterState routerStateprevious, RouterState routerStateCurrent) async {

    _appLayoutService.headerTitle = WorkItemMessage.label('Work Items');

    _selectedInitiativeId = routerStateCurrent.parameters[AppRoutes.initiativeIdParameter];

    if (_selectedInitiativeId != null && _selectedInitiativeId.isNotEmpty) {

      initiative = await _initiativeService.getInitiativeById(_selectedInitiativeId, withWorkItems: true);

    }
  }

  String circleColor(Initiative initiative)  {
    String color;
    int workItemsOverDueCount =  initiative.workItemsOverDueCount;
    int workItemsCount =  initiative.workItemsCount;

    if (workItemsOverDueCount == 0) {
      color = 'hsl(120, 100%, 50%)';
    } else if (workItemsOverDueCount < workItemsCount)
      color = 'hsl(45, 100%, 50%)';
    else {
      color = 'hsl(0, 100%, 50%)';
    }
    return color;
  }

  String widthState(int workItemsCount, int stateWorkItemsCount, int withTotal) {
    return (stateWorkItemsCount / workItemsCount * withTotal).toString();
  }

  void selectView(String view) {
    selectedView = view;
  }

  @override
  Future<bool> canReuse(RouterState current, RouterState next) async {
    return true;
  }
}
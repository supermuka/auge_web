// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.


import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
import 'package:auge_server/model/initiative/initiative.dart';
import 'package:auge_web/message/messages.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/work_item/work_item_service.dart';
import 'package:auge_web/src/initiative/initiative_service.dart';

import 'package:auge_web/src/work_item/work_items_kanban_component.dart';
import 'package:auge_web/src/work_item/work_items_list_component.dart';


@Component(
    selector: 'auge-work-items',
    providers: const [WorkItemService],
    directives: const [
      coreDirectives,
      routerDirectives,
      materialDirectives,
      WorkItemsListComponent,
      WorkItemsKanbanComponent,
    ],
    pipes: const [commonPipes],
    templateUrl: 'work_items_component.html',
    styleUrls: const [
      'work_items_component.css'
    ])

class WorkItemsComponent extends Object /* with CanReuse implements OnActivate  */{

  @Input()
  Initiative initiative;

  bool fowardAddWorkItem;
/*
  final List<RouteDefinition> routes = [

  new RouteDefinition(
  routePath: AppRoutes.appLayoutHomeRoute,
  component: app_layout_home.AppLayoutHomeComponentNgFactory,
  useAsDefault: true
  ),

  new RouteDefinition(
  routePath: AppRoutes.workItemsListRoute,
  component: work_items_list_component.WorkItemsListComponentNgFactory,
  // useAsDefault: true
  ),

  new RouteDefinition(
  routePath: AppRoutes.workItemsKanbanRoute,
  component: work_items_kanban_component.WorkItemsKanbanComponentNgFactory,
  // useAsDefault: true
  )];
*/
  String selectedView = 'list';

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final InitiativeService _initiativeService;


  String _selectedInitiativeId;

  // Initiative initiative = new Initiative();

  WorkItemsComponent(this._authService, this._appLayoutService, this._initiativeService)  {
   // initializeDateFormatting(Intl.defaultLocale);
  }
/*
  void ngOnInit() {
    print('ngOnInit - initiative');
    print(initiative.name);

  }

  */

  String label(String label) =>  InitiativeMessage.label(label);

  /*
  @override
  Future onActivate(RouterState routerStateprevious, RouterState routerStateCurrent) async {
    if (this._authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
    }

    _appLayoutService.headerTitle = WorkItemMessage.label('Work Items');

    _selectedInitiativeId = routerStateCurrent.parameters[AppRoutes.initiativeIdParameter];

    if (_selectedInitiativeId != null && _selectedInitiativeId.isNotEmpty) {
      initiative = await _initiativeService.getInitiativeById(_selectedInitiativeId, withWorkItems: true);
    }
  }
  */

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

  /*
  void goTo()  {
    String url;
    print('****');
    print(selectedView);

    if (selectedView == 'list') {
      url = AppRoutes.workItemsListRoute.toUrl(parameters: {
        AppRoutes.initiativeIdParameter: initiative.id
      });
    } else {
      url = AppRoutes.workItemsKanbanRoute.toUrl(parameters: {
        AppRoutes.initiativeIdParameter: initiative.id
      });
    }

    print(url);

    _router.navigate(url);
  }
*/

  void viewFowardDetail(bool fowardAddWorkItem) {
    this.fowardAddWorkItem = fowardAddWorkItem;
  }

  /*
  @override
  void onActivate(RouterState previous, RouterState current) {
  }


  @override
  Future<bool> canReuse(RouterState current, RouterState next) async {
    return true;
  }
  */

}
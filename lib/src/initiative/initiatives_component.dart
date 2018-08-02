// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';
import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_components/model/menu/menu.dart';

import 'package:auge_web/message/messages.dart';

import 'package:auge_server/model/initiative/initiative.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/initiative/initiative_service.dart';
import 'package:auge_web/src/search/search_service.dart';
import 'package:auge_web/src/initiative/initiative_detail_component.dart';

import 'package:auge_web/src/work_item/work_items_component.dart';
import 'package:auge_web/src/work_item/work_items_list_component.dart';

import 'package:auge_web/src/app_layout/app_layout_service.dart';

import 'package:auge_web/services/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/app_layout/app_layout_home.template.dart' as app_layout_home;
import 'package:auge_web/src/initiative/initiative_detail_component.template.dart' as initiative_detail_component;
import 'package:auge_web/src/work_item/work_items_list_component.template.dart' as work_items_list_component;


@Component(
    selector: 'auge-initiatives',
    providers: const [InitiativeService],
    directives: const [
      coreDirectives,
      routerDirectives,
      materialDirectives,
      InitiativeDetailComponent,
      WorkItemsComponent,
      WorkItemsListComponent,
    ],
    templateUrl: 'initiatives_component.html',
    styleUrls: const [
      'initiatives_component.css'
    ])

class InitiativesComponent extends Object with CanReuse implements OnActivate, OnDestroy {

  final InitiativeService _initiativeService;
  final SearchService _searchService;
  final Router _router;
  final AppLayoutService _appLayoutService;
  final AuthService _authService;

  static final int progressBarWidth = 360;

  bool detailVisible = false;
  List<Initiative> _initiatives = new List();
  Initiative selectedInitiative;

  bool expanded = false;
  List<bool> wideControl = new List();
  List<bool> expandedControl = new List();

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

  MenuModel<MenuItem> menuModel;
  InitiativesComponent(this._initiativeService, this._appLayoutService, this._authService, this._searchService, this._router) {
    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMessage.buttonLabel('Edit'), icon: new Icon('edit') , action: () => viewDetail(true)), new MenuItem(CommonMessage.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete())])], icon: new Icon('menu'));
  }

  // Define messages and labels
  static final String workItemsOverDueLabel =  InitiativeMessage.label('Work Items Over Due');

  @override
  Future onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {

    if (this._authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
    }
    
    _appLayoutService.headerTitle = InitiativeMessage.label('Initiatives');

    _initiatives = await _initiativeService.getInitiatives(_authService.selectedOrganization?.id, withWorkItems: true);

    wideControl = new List<bool>.filled(_initiatives.length, false);
    expandedControl = new List<bool>.filled(_initiatives.length, false);

    _appLayoutService.searchEnabled = true;

  }

  List<Initiative> get initiatives {
    return _searchService?.searchTerm.toString().isEmpty ? _initiatives : _initiatives.where((t) => t.name.contains(_searchService.searchTerm)).toList();
  }

  @override
  ngOnDestroy() async {
    _appLayoutService.searchEnabled = false;

  }

  void goToWorkItem(Initiative initiative) {
    _router.navigate(AppRoutes.workItemsRoute.toUrl(parameters: { AppRoutes.initiativeIdParameter: initiative.id }));
  }

  void stopPropagation(MouseEvent me) {
    me.stopPropagation();
  }

  void selectInitiative(Initiative item) {
    selectedInitiative = item;
  }

  void delete() async {
    await _initiativeService.deleteInitiative(selectedInitiative.id);
    initiatives.remove(selectedInitiative);
  }

  String circleColor(Initiative initiative)  {
    String color;
    int workItemsOverDueCount = initiative.workItemsOverDueCount;
    int workItemsCount = initiative.workItemsCount;

    if (workItemsOverDueCount == 0) {
      color = 'hsl(120, 100%, 50%)';
    } else if (workItemsOverDueCount < workItemsCount)
      color = 'hsl(45, 100%, 50%)';
    else {
      color = 'hsl(0, 100%, 50%)';
    }
    return color;
  }

  String widthState(int workItemsCount, int stateWorkItemsCount, int widthTotal) {
    return (stateWorkItemsCount / workItemsCount * widthTotal).toString();
  }

  void viewDetail(bool detailVisible) {
    this.detailVisible = detailVisible;
  }

  void changeListItemWithDetail(Initiative initiative) {
    if (selectedInitiative == null) {
      initiatives.add(initiative);
    } else {
      initiative.cloneTo(initiatives[initiatives.indexOf(selectedInitiative)]);
    }
  }

  @override
  Future<bool> canReuse(RouterState current, RouterState next) async {
    return true;
  }
}

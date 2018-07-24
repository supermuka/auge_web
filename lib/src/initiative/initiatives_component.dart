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

import 'package:auge_web/src/app_layout/app_layout_service.dart';

import 'package:auge_web/services/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/app_layout/app_layout_home.template.dart' as app_layout_home;
import 'package:auge_web/src/initiative/initiative_detail_component.template.dart' as initiative_detail_component;


@Component(
    selector: 'auge-initiatives',
    providers: const [InitiativeService],
    directives: const [
      coreDirectives,
      routerDirectives,
      materialDirectives,
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

  List<Initiative> _initiatives = new List();
  Initiative _initiativeSelected;

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
    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMessage.buttonLabel('Edit'), icon: new Icon('edit') , action: () => goToDetail(_initiativeSelected)), new MenuItem(CommonMessage.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete(_initiativeSelected))])], icon: new Icon('menu'));
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

  void goToDetail(Initiative initiative) {
    if (initiative == null) {
      _router.navigate(AppRoutes.initiativeDetailAddRoute.toUrl());
    } else {
      _router.navigate(AppRoutes.initiativeDetailRoute.toUrl(parameters: {
        AppRoutes.initiativeIdParameter: initiative != null ? initiative.id : null
      }));
    }
  }

  void selectInitiative(Initiative item) {
    _initiativeSelected = item;
  }

  Future<Null> delete(Initiative initiative) async {
    try {
      await _initiativeService.deleteInitiative(initiative.id);
      initiatives.remove(initiative);
    } catch(e) {
      print(e);
    }
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

  @override
  Future<bool> canReuse(RouterState current, RouterState next) async {
     return true;
  }

}


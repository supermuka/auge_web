import 'package:angular_router/angular_router.dart';

class AppRoutesParam {
  //Params
  static const organizationIdParameter = 'organization_id';
  static const initiativeIdParameter = 'initiative_id';
  static const objectiveIdParameter = 'objective_id';
}

class AppRoutes {

  static final authRoute = new RoutePath(
    path: 'auth',
  );

  static final appLayoutRoute = new RoutePath(
    path: 'app_layout',
  );

  static final insightslRoute = new RoutePath(
    path: 'insights',
    parent: appLayoutRoute,
    useAsDefault: true,
  );
  static final organizationsRoute = new RoutePath(
    path: 'organizations',
    parent: appLayoutRoute
  );
  static final usersRoute = new RoutePath(
    path: 'users',
    parent: appLayoutRoute
  );
  static final mapRoute = new RoutePath(
      path: 'map',
      parent: appLayoutRoute
  );
  static final ganttRoute = new RoutePath(
      path: 'gantt',
      parent: appLayoutRoute
  );
  static final initiativesRoute = new RoutePath(
    path: 'initiatives',
    parent: appLayoutRoute
  );
  static final initiativeAddRoute = new RoutePath(
      path: 'initiative',
      parent: initiativesRoute
  );
  static final initiativeEditRoute = new RoutePath(
      path: 'initiative/:$AppRoutesParam.initiativeIdParameter',
      parent: initiativesRoute
  );

  static final initiativesByObjectiveRoute = new RoutePath(
      path: 'initiatives/:$AppRoutesParam.objectiveIdParameter',
      parent: appLayoutRoute
  );
  static final objectivesRoute = new RoutePath(
    path: 'objectives',
    parent: appLayoutRoute
  );

  static final workItemsRoute = new RoutePath(
    path: 'initiative/:$AppRoutesParam.initiativeIdParameter/work_items',
    parent: appLayoutRoute
  );

  static final workItemsListRoute = new RoutePath(
      path: 'initiative/:$AppRoutesParam.initiativeIdParameter/work_items_list',
      parent: appLayoutRoute,
     /* useAsDefault: true, */
  );

  static final workItemsKanbanRoute = new RoutePath(
    path: 'initiative/:$AppRoutesParam.initiativeIdParameter/work_items_kanban',
    parent: workItemsRoute
  );
  static final measuresRoute = new RoutePath(
      path: 'objetivo/:$AppRoutesParam.objectiveIdParameter/medidas',
      parent: appLayoutRoute
  );
  static final organizationRoute = new RoutePath(
     path: 'organization/:$AppRoutesParam.organizationIdParameter',
     parent: appLayoutRoute
  );
  static final groupsRoute = new RoutePath(
      path: 'groups',
      parent: appLayoutRoute
  );

}


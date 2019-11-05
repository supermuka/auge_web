import 'package:angular_router/angular_router.dart';

class AppRoutesParam {
  //Params
  static const organizationIdParameter = 'organization_id';
  static const userIdParameter = 'user_id';
  static const groupIdParameter = 'group_id';
  static const measureIdParameter = 'measure_id';
  static const workIdParameter = 'work_id';
  static const workItemIdParameter = 'work_item_id';
  static const objectiveIdParameter = 'objective_id';

}

class AppRoutesQueryParam {

  //QueryParam
  static const organizationIdQueryParameter = 'organization_id';
  static const workIdQueryParameter = 'work_id';
  static const workItemIdQueryParameter = 'work_item_id';
  static const stageIdQueryParameter = 'stage_id';
  static const objectiveIdQueryParameter = 'objective_id';
  static const objectiveStartDateQueryParameter = 'start_date';
  static const objectiveEndDateQueryParameter = 'end_date';
  static const measureCurrentValueQueryParameter = 'current_value';
}

class AppRoutes {

  static final authRoute = new RoutePath(
    path: 'auth',
  );
  static final appLayoutRoute = new RoutePath(
    path: 'app',
  );
  static final insightslRoute = new RoutePath(
    path: 'insights',
    parent: appLayoutRoute,
    useAsDefault: true,
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
  static final worksRoute = new RoutePath(
    path: 'works',
    parent: appLayoutRoute
  );
  static final workAddRoute = new RoutePath(
      path: 'add',
      parent: worksRoute
  );
  static final workEditRoute = new RoutePath(
      path: ':${AppRoutesParam.workIdParameter}/edit',
      parent: worksRoute
  );
  static final workItemsKanbanRoute = new RoutePath(
      path: 'works/:${AppRoutesParam.workIdParameter}/kanban_work_items',
      parent: appLayoutRoute
  );
  static final workStagesRoute = new RoutePath(
      path: ':${AppRoutesParam.workIdParameter}/stages',
      parent: worksRoute
  );

  static final worksByObjectiveRoute = new RoutePath(
      path: 'works/:${AppRoutesParam.objectiveIdParameter}',
      parent: appLayoutRoute
  );
  static final objectivesRoute = new RoutePath(
    path: 'objectives',
    parent: appLayoutRoute
  );
/*
  static final objectiveRoute = new RoutePath(
      path: 'objectives/:${AppRoutesParam.objectiveIdParameter}',
      parent: appLayoutRoute
  );
*/
  static final measuresRoute = new RoutePath(
      path: 'objectives/:${AppRoutesParam.objectiveIdParameter}/measures',
      parent: objectivesRoute
  );
  static final organizationRoute = new RoutePath(
     path: 'organizations/:${AppRoutesParam.organizationIdParameter}',
     parent: appLayoutRoute
  );
  static final groupsRoute = new RoutePath(
      path: 'groups',
      parent: appLayoutRoute
  );
  static final groupAddRoute = new RoutePath(
      path: 'add',
      parent: groupsRoute
  );
  static final groupEditRoute = new RoutePath(
      path: ':${AppRoutesParam.groupIdParameter}/edit',
      parent: groupsRoute
  );
  static final measureAddRoute = new RoutePath(
      path: ':${AppRoutesParam.objectiveIdParameter}/measures/add',
      parent: objectivesRoute
  );
  static final measureEditRoute = new RoutePath(
      path: ':${AppRoutesParam.objectiveIdParameter}/measures/:${AppRoutesParam.measureIdParameter}/edit',
      parent: objectivesRoute
  );
  static final measureProgressesRoute = new RoutePath(
      path: ':${AppRoutesParam.objectiveIdParameter}/measures/:${AppRoutesParam.measureIdParameter}/progresses',
      parent: objectivesRoute
  );
  static final measureProgressesAddRoute = new RoutePath(
      path: ':${AppRoutesParam.objectiveIdParameter}/measures/:${AppRoutesParam.measureIdParameter}/progresses/add',
      parent: objectivesRoute
  );
  static final objectiveAddRoute = new RoutePath(
      path: 'add',
      parent: objectivesRoute
  );
  static final objectiveEditRoute = new RoutePath(
      path: ':${AppRoutesParam.objectiveIdParameter}/edit',
      parent: objectivesRoute
  );
  static final workItemAddRoute = new RoutePath(
      path: ':${AppRoutesParam.workIdParameter}/work_items/add',
      parent: worksRoute
  );
  static final workItemEditRoute = new RoutePath(
      path: ':${AppRoutesParam.workIdParameter}/work_items/:${AppRoutesParam.workItemIdParameter}/edit',
      parent: worksRoute
  );
  static final workItemKanbanAddRoute = new RoutePath(
      path: 'add',
      parent: workItemsKanbanRoute
  );
  static final workItemKanbanEditRoute = new RoutePath(
      path: ':${AppRoutesParam.workItemIdParameter}/edit',
      parent: workItemsKanbanRoute
  );
  static final userAddRoute = new RoutePath(
      path: 'add',
      parent: usersRoute
  );
  static final userEditRoute = new RoutePath(
      path: ':${AppRoutesParam.userIdParameter}/edit',
      parent: usersRoute
  );
  static final userEditWithAppLayoutParentRoute = new RoutePath(
      path: 'users/:${AppRoutesParam.userIdParameter}/auth/edit',
      parent: appLayoutRoute
  );
}
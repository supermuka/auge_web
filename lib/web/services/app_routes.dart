import 'package:angular_router/angular_router.dart';

class AppRoutes {

  //Parametros
  //static const idParameter = 'id';

  static const organizationIdParameter = 'organization_id';
  static const initiativeIdParameter = 'initiative_id';
  static const workItemIdParameter = 'workItem_id';
  static const userIdParameter = 'user_id';
  static const objectiveIdParameter = 'objective_id';
  static const measureIdParameter = 'measure_id';

  static final appRoute = new RoutePath(
    path: 'app',
  );

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
  static final initiativesRoute = new RoutePath(
    path: 'initiatives',
    parent: appLayoutRoute
  );

  static final initiativeDetailAddRoute = new RoutePath(
    path: 'initiative',
    parent: initiativesRoute
  );
  static final initiativeDetailRoute = new RoutePath(
    path: 'iniciativa/:$initiativeIdParameter',
    parent: initiativesRoute
  );
  static final objectivesRoute = new RoutePath(
    path: 'objetivos',
    parent: appLayoutRoute
  );

  static final objetivoDetalheAdicionarRoute = new RoutePath(
    path: 'objetivo',
    parent: objectivesRoute
  );
  static final objetivoDetalheRoute = new RoutePath(
    path: 'objetivo/:$objectiveIdParameter',
    parent: objectivesRoute
  );


  static final workItemsRoute = new RoutePath(
    path: 'initiative/:$initiativeIdParameter/work_items',
    parent: appLayoutRoute
  );

  static final itensTrabalhoListaRoute = new RoutePath(
      path: 'initiative/:$initiativeIdParameter/itens_trabalho_lista',
      parent: workItemsRoute,
      useAsDefault: true,
  );

  static final itensTrabalhoKanbanRoute = new RoutePath(
    path: 'initiative/:$initiativeIdParameter/itens_trabalho_kanban',
    parent: workItemsRoute
  );

  static final itemTrabalhoDetalheAdicionarRoute = new RoutePath(
    path: 'item_trabalho',
    parent:  workItemsRoute,
  );

  static final itemTrabalhoDetalheRoute = new RoutePath(
    path: 'item_trabalho/:$workItemIdParameter',
    parent:  workItemsRoute,
  );

  static final measuresRoute = new RoutePath(
      path: 'objetivo/:$objectiveIdParameter/medidas',
      parent: appLayoutRoute
  );

  static final measureDetailAddRoute = new RoutePath(
    path: 'medida',
    parent:  measuresRoute,
  );

  static final measureDetailRoute = new RoutePath(
    path: 'medida/:$measureIdParameter',
    parent:  measuresRoute,
  );

  static final userDetailAddRoute = new RoutePath(
    path: 'user',
    parent:  usersRoute,
  );

  static final userDetailRoute = new RoutePath(
    path: 'user/:$userIdParameter',
    parent:  usersRoute,

  );

  static final userSelectedDetailRoute = new RoutePath(
    path: 'user/:$userIdParameter',
    parent:  appLayoutRoute,

  );

  static final appLayoutHomeRoute = new RoutePath(
    path: '',
    useAsDefault: true,
  );


  static final organizationDetailAddRoute = new RoutePath(
    path: 'organization',
    parent: organizationsRoute
  );

  static final organizationDetailRoute = new RoutePath(
    path: 'organization/:$organizationIdParameter',
    parent: organizationsRoute
  );
}
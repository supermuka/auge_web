// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:html' as html;
import 'dart:async';

import 'package:intl/intl.dart';
import 'package:intl/date_symbol_data_local.dart';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_components/model/menu/menu.dart';

import 'package:auge_shared/model/user.dart';
import 'package:auge_shared/model/initiative/initiative.dart';
import 'package:auge_shared/model/initiative/work_item.dart';
import 'package:auge_shared/model/initiative/stage.dart';
import 'package:auge_shared/message/messages.dart';

import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/work_item/work_item_service.dart';

import 'package:auge_web/services/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/app_layout/app_layout_home.template.dart' as app_layout_home;
import 'package:auge_web/src/work_item/work_item_detail_component.template.dart' as work_item_detail_component;

@Component(
    selector: 'auge-work-items-kanban',
    providers: const [WorkItemService],
    directives: const [
      coreDirectives,
      routerDirectives,
      materialDirectives,
    ],
    pipes: const [commonPipes],
    templateUrl: 'work_items_kanban_component.html',
    styleUrls: const [
      'work_items_kanban_component.css'
    ])

class WorkItemsKanbanComponent extends Object /* with CanReuse */ implements OnInit {

  final List<RouteDefinition> routes = [

    new RouteDefinition(
        routePath: AppRoutes.appLayoutHomeRoute,
        component: app_layout_home.AppLayoutHomeComponentNgFactory,
        useAsDefault: true
    ),

    new RouteDefinition(
      routePath: AppRoutes.itemTrabalhoDetalheAdicionarRoute,
      component: work_item_detail_component.WorkItemDetailComponentNgFactory,
      // useAsDefault: true
    ),

    new RouteDefinition(
      routePath: AppRoutes.itemTrabalhoDetalheRoute,
      component: work_item_detail_component.WorkItemDetailComponentNgFactory,
      // useAsDefault: true
    ),
  ];

  final WorkItemService _workItemService;
  final Router _router;
  String _chaveIniciativaSelecionada;

  @Input()
  Initiative initiative;

  List<KanbanColumn> kanbanColumns;

  WorkItem workItemDnD;
  WorkItem selectedWorkItem;

  KanbanColumn kanbanColumnDnD;

  MenuModel<MenuItem> menuModel;


  WorkItemsKanbanComponent(this._workItemService, this._router) {
    initializeDateFormatting(Intl.defaultLocale);

    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMessage.buttonLabel('Edit'), icon: new Icon('edit') , action: () => goToDetail(selectedWorkItem)), new MenuItem(CommonMessage.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete(selectedWorkItem))])], icon: new Icon('menu'));
  }

  String label(String label) =>  WorkItemMessage.label(label);

  @override
  ngOnInit() async {
    kanbanColumns = new List();

    // Define os estados com base no que está na iniciativa
    initiative.stages.forEach((es) { kanbanColumns.add(new KanbanColumn()..stage = es);
    } );

    // Distribui os itens de trabalho para cada coluna (estágio)
    initiative.workItems.forEach((it) {
      if (it.stage != null)
        kanbanColumns.singleWhere((ik) => ik.stage.id == it.stage.id).columnWorkItems.add(it);
    });
  }

  void goTo(WorkItem workItem) {
    String url;
    if (workItem == null) {
      url = AppRoutes.itemTrabalhoDetalheAdicionarRoute.toUrl(parameters: {
        AppRoutes.initiativeIdParameter: initiative.id
      });
    } else {
      url = AppRoutes.itemTrabalhoDetalheRoute.toUrl(parameters: {
        AppRoutes.initiativeIdParameter: initiative.id,
        AppRoutes.workItemIdParameter: workItem.id
      });
    }

    _router.navigate(url);

  }

  Future goToDetail(WorkItem workItem) async {
    String url;
    if (workItem == null) {
      url = AppRoutes.itemTrabalhoDetalheAdicionarRoute.toUrl(parameters: {
        AppRoutes.initiativeIdParameter: initiative.id
      });
    } else {
      url = AppRoutes.itemTrabalhoDetalheRoute.toUrl(parameters: {
        AppRoutes.initiativeIdParameter: initiative.id,
        AppRoutes.workItemIdParameter: workItem.id
      });
    }
    _router.navigate(url);
  }


  void drag(html.MouseEvent ev, KanbanColumn kanbanColumn, WorkItem workItem) {
    kanbanColumnDnD = kanbanColumn;
    workItemDnD = workItem;
  }

  void allowDrop(html.MouseEvent  ev) {
    ev.preventDefault();
  }


  drop(ev, KanbanColumn kanbanColumnDrop) {
    ev.preventDefault();

    kanbanColumnDnD.columnWorkItems.remove(workItemDnD);
    workItemDnD.stage = kanbanColumnDrop.stage;

    _workItemService.saveWorkItem(initiative.id, workItemDnD);

    kanbanColumnDrop.columnWorkItems.add(workItemDnD);

    kanbanColumnDnD = null;
    workItemDnD = null;
  }

  Future<Null> delete(WorkItem workItem) async {
    try {
      await _workItemService.deleteWorkItem(workItem.id);
      initiative.workItems.remove(workItem);
    } catch(e) {
      print(e);
    }
  }

  void selectWorkItem(WorkItem workItem) => this.selectedWorkItem = workItem;

  String dueDateColor(WorkItem workItem) {
    return workItem.isOverdue ? 'hsl(0, 100%, 50%)' : null;
  }

  String userUrlImage(User userMember) {
    return common_service.userUrlImage(userMember);
  }

  void updateWorkItem(WorkItem workItem) {
    _workItemService.saveWorkItem(initiative.id, workItem);
  }

}

class KanbanColumn {
  Stage stage;
  List<WorkItem> columnWorkItems;

  KanbanColumn() {
    columnWorkItems = new List();
  }
}
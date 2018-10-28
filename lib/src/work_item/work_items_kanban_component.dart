// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:html' as html;
import 'dart:async';

import 'package:intl/intl.dart';
import 'package:intl/date_symbol_data_local.dart';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
/* import 'package:angular_components/angular_components.dart'; */
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:angular_components/material_slider/material_slider.dart';
import 'package:angular_components/material_checkbox/material_checkbox.dart';
import 'package:angular_components/model/menu/menu.dart';
import 'package:angular_components/model/ui/icon.dart';
import 'package:angular_components/content/deferred_content.dart';
import 'package:angular_components/material_menu/material_menu.dart';

import 'package:auge_server/model/user.dart';
import 'package:auge_server/model/initiative/initiative.dart';
import 'package:auge_server/model/initiative/work_item.dart';
import 'package:auge_server/model/initiative/stage.dart';

import 'package:auge_web/message/messages.dart';

import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/work_item/work_item_service.dart';

import 'package:auge_web/src/work_item/work_item_detail_component.dart';

@Component(
    selector: 'auge-work-items-kanban',
    providers: const [WorkItemService],
    directives: const [
      coreDirectives,
      routerDirectives,
      /* materialDirectives, */
      MaterialExpansionPanelSet,
      MaterialExpansionPanel,
      MaterialTooltipDirective,
      MaterialSliderComponent,
      MaterialCheckboxComponent,
      DeferredContentDirective,
      MaterialMenuComponent,
      WorkItemDetailComponent,
    ],
    pipes: const [commonPipes],
    templateUrl: 'work_items_kanban_component.html',
    styleUrls: const [
      'work_items_kanban_component.css'
    ])

class WorkItemsKanbanComponent extends Object implements OnInit {

  final WorkItemService _workItemService;

  @Input()
  Initiative initiative;

  @Input()
  set fowardAddWorkItem(bool fowardAddWorkItem) {
    viewDetail(fowardAddWorkItem);
  }

  final _closeController = new StreamController<void>.broadcast(sync: true);

  /// Publishes events when close.
  @Output()
  Stream<void> get closeDetail => _closeController.stream;

  bool detailVisible  = false;

  WorkItem selectedWorkItem;
  List<KanbanColumn> kanbanColumns;

  WorkItem workItemDnD;

  KanbanColumn kanbanColumnDnD;

  MenuModel<MenuItem> menuModel;


  WorkItemsKanbanComponent(this._workItemService) {
    initializeDateFormatting(Intl.defaultLocale);

    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMessage.buttonLabel('Edit'), icon: new Icon('edit') , action: () => viewDetail(true)), new MenuItem(CommonMessage.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete())])], icon: new Icon('menu'));
  }

  String label(String label) =>  WorkItemMessage.label(label);

  @override
  ngOnInit() {
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

  void delete() async {
    try {
      await _workItemService.deleteWorkItem(selectedWorkItem.id);
      initiative.workItems.remove(selectedWorkItem);
    } catch (e) {
      rethrow;
    }
  }

  void selectWorkItem(WorkItem workItem) => this.selectedWorkItem = workItem;

  String dueDateColor(WorkItem workItem) {
    return workItem.isOverdue ? 'hsl(0, 100%, 50%)' : null;
  }

  String userUrlImage(User userMember) {
    return common_service.userUrlImage(userMember?.userProfile?.image);
  }

  void updateWorkItem(WorkItem workItem) {
    _workItemService.saveWorkItem(initiative.id, workItem);
  }

  void viewDetail(bool detailVisible) {

    if (this.detailVisible && !detailVisible) {
      _closeController.add(null);
    }

    this.detailVisible = detailVisible;
  }

  void changeListItemDetail(WorkItem workItem) {
    if (selectedWorkItem == null) {
      kanbanColumns.singleWhere((ik) => ik.stage.id == workItem.stage.id).columnWorkItems.add(workItem);
    } else {
      List<WorkItem> workItems = kanbanColumns.singleWhere((ik) => ik.stage.id == workItem.stage.id).columnWorkItems;
      workItem.cloneTo(workItems[workItems.indexOf(selectedWorkItem)]);
    }
  }
}

class KanbanColumn {
  Stage stage;
  List<WorkItem> columnWorkItems;

  KanbanColumn() {
    columnWorkItems = new List();
  }
}
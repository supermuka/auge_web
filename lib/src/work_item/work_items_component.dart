// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';

import 'package:angular_router/angular_router.dart';

import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';

import 'package:auge_server/model/initiative/initiative.dart';

import 'package:auge_web/message/messages.dart';
import 'package:auge_web/src/work_item/work_item_service.dart';
import 'package:auge_web/src/work_item/work_items_kanban_component.dart';
import 'package:auge_web/src/work_item/work_items_list_component.dart';

@Component(
    selector: 'auge-work-items',
    providers: const [WorkItemService],
    directives: const [
      coreDirectives,
      routerDirectives,
      MaterialExpansionPanel,
      MaterialButtonComponent,
      MaterialIconComponent,
      WorkItemsListComponent,
      WorkItemsKanbanComponent,
    ],
    pipes: const [commonPipes],
    templateUrl: 'work_items_component.html',
    styleUrls: const [
      'work_items_component.css'
    ])

class WorkItemsComponent extends Object {

  @Input()
  Initiative initiative;

  bool fowardAddWorkItem;

  String selectedView = 'list';

  WorkItemsComponent();

  String label(String label) =>  InitiativeMsg.label(label);

  String widthState(int workItemsCount, int stateWorkItemsCount, int withTotal) {
    return (stateWorkItemsCount / workItemsCount * withTotal).toString();
  }

  void selectView(String view) {
    selectedView = view;
  }

  void viewFowardDetail(bool fowardAddWorkItem) {
    this.fowardAddWorkItem = fowardAddWorkItem;
  }
}
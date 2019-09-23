// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';

import 'package:auge_server/model/initiative/initiative.dart';

import 'package:auge_server/shared/message/messages.dart';
import 'package:auge_web/src/work_item/work_item_service.dart';
import 'package:auge_web/src/work_item/work_items_kanban_component.dart';
import 'package:auge_web/src/work_item/work_items_list_component.dart';

import 'package:auge_web/services/app_routes.dart';

@Component(
    selector: 'auge-work-items',
    providers: const [WorkItemService],
    templateUrl: 'work_items_component.html',
    styleUrls: const [
      'work_items_component.css'
    ],
    directives: const [
      coreDirectives,
      routerDirectives,
      MaterialExpansionPanel,
      MaterialButtonComponent,
      MaterialIconComponent,
      WorkItemsListComponent,
      WorkItemsKanbanComponent,
    ],
    pipes: const [commonPipes])

class WorkItemsComponent with CanReuse {

  final Router _router;

  @Input()
  Initiative initiative;

  @Input()
  SelectionView selectionView;

  static final String workItemsLabel =  WorkItemMsg.label('Work Items');

  WorkItemsComponent(this._router) {

  }


  String widthState(int workItemsCount, int stateWorkItemsCount, int withTotal) {
    return (stateWorkItemsCount / workItemsCount * withTotal).toString();
  }

  // Add here, edit is handled on sub componented list and kanban
  void goToDetail() {
    _router.navigate(AppRoutes.workItemAddRoute.toUrl(parameters: { AppRoutesParam.initiativeIdParameter: initiative.id }));
  }
}

//TODO Just used to stores last view selection, because this components are created again, even using CanReuse (Needs to investigate better)
class SelectionView {
  String selected;
}
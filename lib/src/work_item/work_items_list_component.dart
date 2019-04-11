// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:intl/intl.dart';
import 'package:intl/date_symbol_data_local.dart';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:angular_components/material_slider/material_slider.dart';
import 'package:angular_components/material_checkbox/material_checkbox.dart';
import 'package:angular_components/model/menu/menu.dart';
import 'package:angular_components/model/ui/icon.dart';
import 'package:angular_components/content/deferred_content.dart';
import 'package:angular_components/material_menu/material_menu.dart';

import 'package:auge_server/model/general/user.dart';
import 'package:auge_server/model/initiative/initiative.dart';
import 'package:auge_server/model/initiative/work_item.dart';

import 'package:auge_web/message/messages.dart';
import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/work_item/work_item_service.dart';
import 'package:auge_web/src/initiative/initiative_service.dart';
import 'package:auge_web/src/work_item/work_item_detail_component.dart';

@Component(
    selector: 'auge-work-items-list',
    providers: const [InitiativeService, WorkItemService],
    directives: const [
      coreDirectives,
      routerDirectives,
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
    templateUrl: 'work_items_list_component.html',
    styleUrls: const [
      'work_items_list_component.css'
    ])
class WorkItemsListComponent extends Object /* with CanReuse implements OnActivate  */ {

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

  bool detailVisible = false;

  WorkItem selectedWorkItem;

  MenuModel<MenuItem> menuModel;

  WorkItemsListComponent(this._workItemService) {
    initializeDateFormatting(Intl.defaultLocale);

    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMsg.buttonLabel('Edit'), icon: new Icon('edit') , action: () => viewDetail(true)), new MenuItem(CommonMsg.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete())])], icon: new Icon('menu'));
  }

  String label(String label) =>  WorkItemMsg.label(label);

  void selectWorkItem(WorkItem workItem) => this.selectedWorkItem = workItem;

  void delete() async {
    try {
      await _workItemService.deleteWorkItem(selectedWorkItem);
      initiative.workItems.remove(selectedWorkItem);
    } catch (e) {
      rethrow;
    }
  }

  String dueDateColor(WorkItem workItem) {
    return workItem.isOverdue ? 'hsl(0, 100%, 50%)' : null;
  }

  void updateWorkItem(WorkItem workItem) {
    try {
      _workItemService.saveWorkItem(initiative.id, workItem);
    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
  }

  List<WorkItem> get workItems => initiative?.workItems;

  String userUrlImage(User userMember) {
    return common_service.userUrlImage(userMember?.userProfile?.image);
  }

  void viewDetail(bool detailVisible) {

    if (this.detailVisible && !detailVisible) {
      _closeController.add(null);
    }

    this.detailVisible = detailVisible;
  }

  void changeListItemDetail(WorkItem workItem) {
    if (selectedWorkItem == null) {
      workItems.add(workItem);
    } else {
      workItem.cloneTo(workItems[workItems.indexOf(selectedWorkItem)]);
    }
  }
}
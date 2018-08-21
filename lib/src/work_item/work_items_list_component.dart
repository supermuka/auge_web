// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:intl/intl.dart';
import 'package:intl/date_symbol_data_local.dart';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_components/model/menu/menu.dart';

import 'package:auge_server/model/user.dart';
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
      materialDirectives,
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

  bool detailVisible;

  WorkItem selectedWorkItem;

  MenuModel<MenuItem> menuModel;

  WorkItemsListComponent(this._workItemService) {
    initializeDateFormatting(Intl.defaultLocale);

    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMessage.buttonLabel('Edit'), icon: new Icon('edit') , action: () => viewDetail(true)), new MenuItem(CommonMessage.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete())])], icon: new Icon('menu'));
  }

  String label(String label) =>  WorkItemMessage.label(label);

  void selectWorkItem(WorkItem workItem) => this.selectedWorkItem = workItem;

  void delete() async {
    try {
      await _workItemService.deleteWorkItem(selectedWorkItem.id);
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
    return common_service.userUrlImage(userMember);
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

/*
  @override
  Future<bool> canReuse(RouterState current, RouterState next) async {
    return true;
  }
*/
}
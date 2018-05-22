// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:intl/intl.dart';
import 'package:intl/date_symbol_data_local.dart';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_components/material_menu/material_menu.dart';
import 'package:angular_components/model/menu/menu.dart';

import 'package:auge/shared/model/user.dart';
import 'package:auge/shared/model/initiative/initiative.dart';
import 'package:auge/shared/model/initiative/work_item.dart';
import 'package:auge/shared/message/messages.dart';

import 'package:auge/web/services/common_service.dart' as common_service;
import 'package:auge/web/src/work_item/work_item_service.dart';

import 'package:auge/web/services/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge/web/src/app_layout/app_layout_home.template.dart' as app_layout_home;
import 'package:auge/web/src/work_item/work_item_detail_component.template.dart' as work_item_detail_component;

@Component(
    selector: 'auge-work-items-list',
    providers: const [WorkItemService],
    directives: const [
      coreDirectives,
      routerDirectives,
      AutoFocusDirective,
      materialDirectives,
      NgStyle,
      MaterialInputComponent,
      MaterialFabComponent,
      MaterialButtonComponent,
      MaterialIconComponent,
      MaterialDialogComponent,
      MaterialProgressComponent,
      MaterialTooltipDirective,
      ModalComponent,
      MaterialMenuComponent,
      MaterialSliderComponent,
      MaterialExpansionPanel,
      MaterialCheckboxComponent,
    ],
    pipes: const [commonPipes],
    templateUrl: 'work_items_list_component.html',
    styleUrls: const [
      'work_items_list_component.css'
    ])

class WorkItemsListComponent extends Object /* with CanReuse */ {

  final List<RouteDefinition> routes = [
    new RouteDefinition(
        routePath: AppRoutes.appLayoutHomeRoute,
        component: app_layout_home.AppLayoutHomeComponentNgFactory,
        useAsDefault: true
    ),

    new RouteDefinition(
      routePath: AppRoutes.itemTrabalhoDetalheAdicionarRoute,
      component: work_item_detail_component.WorkItemDetailComponentNgFactory,
    ),

    new RouteDefinition(
      routePath: AppRoutes.itemTrabalhoDetalheRoute,
      component: work_item_detail_component.WorkItemDetailComponentNgFactory,
    ),
  ];

  final WorkItemService _workItemService;
  final Router _router;

  @Input()
  Initiative initiative;

  WorkItem selectedWorkItem;

  MenuModel<MenuItem> menuModel;

  WorkItemsListComponent(this._workItemService, this._router) {
    initializeDateFormatting(Intl.defaultLocale);

    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMessage.buttonLabel('Edit'), icon: new Icon('edit') , action: () => goToDetail(selectedWorkItem)), new MenuItem(CommonMessage.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete(selectedWorkItem))])], icon: new Icon('menu'));

  }

  String label(String label) =>  WorkItemMessage.label(label);

  void selectWorkItem(WorkItem workItem) => this.selectedWorkItem = workItem;

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

  Future<Null> delete(WorkItem workItem) async {
    try {
      await _workItemService.deleteWorkItem(workItem.id);
      initiative.workItems.remove(workItem);
    } catch(e) {
      print(e);
    }
  }

  String dueDateColor(WorkItem workItem) {
    return workItem.isOverdue ? 'hsl(0, 100%, 50%)' : null;
  }

  void updateWorkItem(WorkItem workItem) {
    _workItemService.saveWorkItem(initiative.id, workItem);
  }

  List<WorkItem> get workItems => initiative?.workItems;

  String userUrlImage(User userMember) {
    return common_service.userUrlImage(userMember);
  }
}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:html' as html;

import 'package:auge_web/src/app_layout/app_layout_service.dart';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_forms/angular_forms.dart';

import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:angular_components/material_slider/material_slider.dart';
import 'package:angular_components/material_checkbox/material_checkbox.dart';
import 'package:angular_components/material_toggle/material_toggle.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_menu/material_menu.dart';
import 'package:angular_components/model/menu/menu.dart';
import 'package:angular_components/model/ui/icon.dart';

import 'package:angular_components/content/deferred_content.dart';

import 'package:auge_web/src/work/work_summary_component.dart';

import 'package:auge_shared/domain/general/authorization.dart';
import 'package:auge_shared/domain/general/user.dart';
import 'package:auge_shared/domain/work/work.dart';
import 'package:auge_shared/domain/work/work_item.dart';
import 'package:auge_shared/domain/work/work_stage.dart';

import 'package:auge_shared/message/messages.dart';
import 'package:auge_shared/message/domain_messages.dart';

import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/work_item/work_item_service.dart';
import 'package:auge_web/src/work/work_service.dart';
import 'package:auge_web/src/history_timeline/history_timeline_service.dart';

import 'package:auge_web/src/history_timeline/history_timeline_component.dart';
import 'package:auge_web/src/work_item/work_item_detail_component.dart';

import 'package:auge_web/route/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/work_item/work_item_detail_component.template.dart' as work_item_detail_component;
import 'package:auge_web/src/work_item/work_item_values_component.template.dart' as work_item_values_component;

@Component(
    selector: 'auge-work-items-kanban',
    providers: const [WorkService, WorkItemService, HistoryTimelineService],
      templateUrl: 'work_items_kanban_component.html',
      styleUrls: const [
      'work_items_kanban_component.css'
    ],
    directives: const [
      coreDirectives,
      routerDirectives,
      MaterialExpansionPanelSet,
      MaterialExpansionPanel,
      MaterialToggleComponent,
      MaterialTooltipDirective,
      MaterialSliderComponent,
      MaterialCheckboxComponent,
      DeferredContentDirective,
      MaterialMenuComponent,
      WorkItemDetailComponent,
      NgModel,
      WorkSummaryComponent,
      MaterialButtonComponent,
      MaterialIconComponent,
      HistoryTimelineComponent,
    ],
    pipes: const [commonPipes])

class WorkItemsKanbanComponent with CanReuse implements OnInit, OnActivate, OnDestroy {

  final AppLayoutService _appLayoutService;
  final WorkService _workService;
  final WorkItemService _workItemService;
  final HistoryTimelineService _historyTimelineService;
  final Router _router;

  String mainColWidth = '100%';
  bool _timelineVisible = false;

  Work work;

  WorkItem selectedWorkItem;
  List<KanbanColumn> kanbanColumns;

  WorkItem workItemDnD;

  KanbanColumn kanbanColumnDnD;

  MenuModel<MenuItem> menuModel;

  Map<String, bool> checkItensExpandedControl = {};

  static final String editButtonLabel = CommonMsg.buttonLabel(CommonMsg.editButtonLabel);
  static final String deleteButtonLabel = CommonMsg.buttonLabel(CommonMsg.deleteButtonLabel);

  static final timelineLabel = TimelineItemdMsg.label(TimelineItemdMsg.timelineLabel);

  static final String groupLabel = WorkDomainMsg.fieldLabel(Work.groupField);
  static final String leaderLabel =  WorkDomainMsg.fieldLabel(Work.leaderField);

  static final String dueDateLabel =  WorkItemDomainMsg.fieldLabel(WorkItem.dueDateField);
  static final String actualValueLabel =  WorkItemDomainMsg.fieldLabel(WorkItem.actualValueField);
  static final String checkItemsLabel =  WorkItemDomainMsg.fieldLabel(WorkItem.checkItemsField);

  static final String headerTitle = WorkItemMsg.label(WorkItemMsg.workKanbanLabel);

  final List<RouteDefinition> routes = [
    RouteDefinition(
      routePath: AppRoutes.workItemKanbanAddRoute,
      component: work_item_detail_component.WorkItemDetailComponentNgFactory,
    ),
    RouteDefinition(
      routePath: AppRoutes.workItemKanbanEditRoute,
      component: work_item_detail_component.WorkItemDetailComponentNgFactory,
    ),
    RouteDefinition(
      routePath: AppRoutes.workItemKanbanValuesRoute,
      component: work_item_values_component.WorkItemValuesComponentNgFactory,
    ),

  ];

  bool whileUpdatingDisabled = false;

  WorkItemsKanbanComponent(this._appLayoutService, this._workService, this._workItemService, this._historyTimelineService, this._router) {
    // initializeDateFormatting(Intl.defaultLocale);

    menuModel = MenuModel([MenuItemGroup([MenuItem(editButtonLabel, icon: Icon('edit') , actionWithContext: (_) => goToDetail()), MenuItem(deleteButtonLabel, icon: Icon('delete'), actionWithContext: (_) => delete())])], icon: Icon('menu'));
  }

  @override
  void ngOnInit() {
    work = Work();
  }
/*
  @override
  Future<bool> canReuse(RouterState current, RouterState next) async {
    // To treat CanReuse. Just define cache 'true' when this component is called from/to yours children
    if (current.routePath?.path == next.routePath?.parent?.path || current.routePath?.parent?.path == next.routePath?.path) {
      return true;
    } else {
      return false;
    }
  }

 */

  @override
  void onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {
    if (_workItemService.authService.authorizedOrganization == null ||
        _workItemService.authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }

    try {

      if (routerStateCurrent.parameters.containsKey(AppRoutesParam.workIdParameter)) {
        String workId = routerStateCurrent.parameters[AppRoutesParam
            .workIdParameter];

        if (workId != null || workId.isNotEmpty) {
          print('DEBUG AAA ${workId}');
          work = await _workService.getWork(workId, withWorkItems: true);
          print('DEBUG BBB ${workId}');
        }
      }

      _appLayoutService.headerTitle = headerTitle;

      if (timelineVisible) _historyTimelineService.refreshHistory(SystemModule.works.index);

      _appLayoutService.enabledSearch = true;

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }

    kanbanColumns = List();

    // Define os estados com base no que está na iniciativa
    work.workStages.forEach((es) { kanbanColumns.add(new KanbanColumn()..workStage = es);
    } );

    // Distribui os itens de trabalho para cada coluna (estágio)
    work.workItems.forEach((it) {
      if (it.workStage != null)
        kanbanColumns.singleWhere((ik) => ik.workStage.id == it.workStage.id).columnWorkItems.add(it);
    });

  }

  @override
  ngOnDestroy() async {
    _appLayoutService.enabledSearch = false;
  }

  bool get timelineVisible {
    return _timelineVisible;
  }
  set timelineVisible(bool visible) {
    _timelineVisible = visible;
    if (_timelineVisible) {
      mainColWidth = '75%';
      _historyTimelineService.refreshHistory(SystemModule.works.index);
    } else {
      mainColWidth = '100%';
    }
  }

  void drag(html.MouseEvent ev, KanbanColumn kanbanColumn, WorkItem workItem) {
    kanbanColumnDnD = kanbanColumn;
    workItemDnD = workItem;
  }

  void allowDrop(html.MouseEvent  ev) {
    ev.preventDefault();
  }

  drop(ev, KanbanColumn kanbanColumnDrop) async {
    ev.preventDefault();

    kanbanColumnDnD.columnWorkItems.remove(workItemDnD);
    workItemDnD.workStage = kanbanColumnDrop.workStage;

    await _workItemService.saveWorkItem(work.id, workItemDnD);

    //TODO, por causa de performance, talvez o save precisaria retornar o ID + Version
    WorkItem workItemUpdated = await _workItemService.getWorkItem(workItemDnD.id);
    if (workItemUpdated != null) kanbanColumnDrop.columnWorkItems.add(workItemUpdated);

    kanbanColumnDnD = null;
    workItemDnD = null;
  }

  void delete() async {
    try {
      await _workItemService.deleteWorkItem(selectedWorkItem);

      work.workItems.remove(selectedWorkItem);

      KanbanColumn kanbanColumnDelete;
      WorkItem workItemKanban;
      for (var kcStage in kanbanColumns) {
        for (var cWI in kcStage.columnWorkItems) {
          if (cWI.id == selectedWorkItem.id) {
            kanbanColumnDelete = kcStage;
            workItemKanban = cWI;
            break;
          }
        }
        if (kanbanColumnDelete != null) break;
      }

      kanbanColumnDelete.columnWorkItems.remove(workItemKanban);


    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  void selectWorkItem(WorkItem workItem) {

    this.selectedWorkItem = workItem;

  }

  String dueDateColor(WorkItem workItem) {
    return workItem.isOverdue ? 'hsl(0, 100%, 50%)' : null;
  }

  String userUrlImage(User userMember) {
    return common_service.userUrlImage(userMember?.userProfile?.image);
  }

  void updateWorkItem(WorkItem workItem) async {

    if (whileUpdatingDisabled) return;

    whileUpdatingDisabled = true;

    try {

      await _workItemService.saveWorkItem(work.id, workItem);

      //TODO maybe this needs to be updated with parent onActivate.
      workItem = await _workItemService.getWorkItem(workItem.id);

      int i = work.workItems.indexWhere((it) => it.id == workItem.id);

      if (i != -1) {
        work.workItems[i] = workItem;

        KanbanColumn kanbanColumnUpdate;
        int indexWorkItemKanban;
        for (var kcStage in kanbanColumns) {
          for (indexWorkItemKanban = 0;indexWorkItemKanban<kcStage.columnWorkItems.length;indexWorkItemKanban++) {
            if (kcStage.columnWorkItems[indexWorkItemKanban].id == workItem.id) {
              kanbanColumnUpdate = kcStage;
              break;
            }
          }
          if (kanbanColumnUpdate != null) break;
        }

        if (kanbanColumnUpdate != null && indexWorkItemKanban != null) kanbanColumnUpdate.columnWorkItems[indexWorkItemKanban] = workItem;

        _historyTimelineService.refreshHistory(SystemModule.works.index);

      }
    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    } finally {
      whileUpdatingDisabled = false;
    }
  }

  void goToDetail([String stageId]) {
    if (selectedWorkItem == null) {
      _router.navigate(AppRoutes.workItemKanbanAddRoute.toUrl(parameters: {
        AppRoutesParam.workIdParameter: work.id }), NavigationParams(replace:  true));

    } else {
      _router.navigate(AppRoutes.workItemKanbanEditRoute.toUrl(parameters: {AppRoutesParam.workIdParameter: work.id,
        AppRoutesParam.workItemIdParameter: selectedWorkItem.id }), NavigationParams(replace:  true));
    }
  }

  void goToValues(String workItemId) {
    _router.navigate(AppRoutes.workItemKanbanValuesRoute.toUrl(parameters: {
      AppRoutesParam.workIdParameter: work.id, AppRoutesParam.workItemIdParameter: workItemId }), NavigationParams(replace:  true));
  }

  String stateHslColor(State state) => WorkService.getStateHslColor(state);

  String composeTooltip(String label, String name) {
    return  '${label} ${name}';
  }

  String colorFromUuid(String id) {
    return common_service.colorFromUuid(id);
  }

  String firstLetter(String name) {
    return common_service.firstLetter(name);
  }

  double remainingValue(double planned, double actual) {
    return planned == null || actual == null ? null : planned - actual;
  }

}

class KanbanColumn {
  WorkStage workStage;
  List<WorkItem> columnWorkItems;

  KanbanColumn() {
    columnWorkItems = List();
  }
}
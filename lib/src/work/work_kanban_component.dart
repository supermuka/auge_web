// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:html' as html;

import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:intl/intl.dart';
import 'package:intl/date_symbol_data_local.dart';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_forms/angular_forms.dart';

import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:angular_components/material_slider/material_slider.dart';
import 'package:angular_components/material_checkbox/material_checkbox.dart';
import 'package:angular_components/material_toggle/material_toggle.dart';
import 'package:angular_components/model/menu/menu.dart';
import 'package:angular_components/model/ui/icon.dart';
import 'package:angular_components/content/deferred_content.dart';
import 'package:angular_components/material_menu/material_menu.dart';
import 'package:auge_web/src/work/work_summary_component.dart';

import 'package:auge_server/model/general/authorization.dart';
import 'package:auge_server/model/general/user.dart';
import 'package:auge_server/model/work/work.dart';
import 'package:auge_server/model/work/work_item.dart';
import 'package:auge_server/model/work/work_stage.dart';

import 'package:auge_server/shared/message/messages.dart';
import 'package:auge_server/shared/message/model_messages.dart';

import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/work_item/work_item_service.dart';
import 'package:auge_web/src/work/work_service.dart';
import 'package:auge_web/src/history_timeline/history_timeline_service.dart';

import 'package:auge_web/src/work_item/work_item_detail_component.dart';

import 'package:auge_web/services/app_routes.dart';

@Component(
    selector: 'auge-work-kanban',
    providers: const [WorkService, WorkItemService, HistoryTimelineService],
      templateUrl: 'work_kanban_component.html',
      styleUrls: const [
      'work_kanban_component.css'
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
    ],
    pipes: const [commonPipes])

class WorkKanbanComponent with CanReuse implements OnInit, OnActivate, OnDestroy {

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


  static final String groupLabel = FieldMsg.label('${Work.className}.${Work.groupField}');
  static final String leaderLabel =  FieldMsg.label('${Work.className}.${Work.leaderField}');

  static final String dueDateLabel =  FieldMsg.label('${WorkItem.className}.${WorkItem.dueDateField}');
  static final String completedLabel =  FieldMsg.label('${WorkItem.className}.${WorkItem.completedField}');
  static final String checkItemsLabel =  FieldMsg.label('${WorkItem.className}.${WorkItem.checkItemsField}');


  WorkKanbanComponent(this._appLayoutService, this._workService, this._workItemService, this._historyTimelineService, this._router) {
    initializeDateFormatting(Intl.defaultLocale);

    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMsg.buttonLabel('Edit'), icon: new Icon('edit') , actionWithContext: (_) => goToDetail()), new MenuItem(CommonMsg.buttonLabel('Delete'), icon: new Icon('delete'), actionWithContext: (_) => delete())])], icon: new Icon('menu'));
  }

  @override
  void ngOnInit() {
    work = Work();
  }


  @override
  void onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {
    if (_workItemService.authService.authorizedOrganization == null ||
        _workItemService.authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }

    _appLayoutService.headerTitle = WorkMsg.label('Work Items');

    try {

      if (routerStateCurrent.parameters.containsKey(AppRoutesParam.workIdParameter)) {
        String workId = routerStateCurrent.parameters[AppRoutesParam
            .workIdParameter];

        if (workId != null || workId.isNotEmpty) {
          work = await _workService.getWork(workId, withWorkItems: true);
        }
      }

      if (timelineVisible) _historyTimelineService.refreshHistory(SystemModule.works.index);

      _appLayoutService.enabledSearch = true;

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }

    kanbanColumns = new List();

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

  drop(ev, KanbanColumn kanbanColumnDrop) {
    ev.preventDefault();

    kanbanColumnDnD.columnWorkItems.remove(workItemDnD);
    workItemDnD.workStage = kanbanColumnDrop.workStage;

    _workItemService.saveWorkItem(work.id, workItemDnD);

    kanbanColumnDrop.columnWorkItems.add(workItemDnD);

    kanbanColumnDnD = null;
    workItemDnD = null;
  }

  void delete() async {
    try {
      await _workItemService.deleteWorkItem(selectedWorkItem);
      work.workItems.remove(selectedWorkItem);
    } catch (e) {
      _appLayoutService.error = e.toString();
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

  void updateWorkItem(WorkItem workItem) async {
    try {

      await _workItemService.saveWorkItem(work.id, workItem);

      //TODO maybe this needs to be updated with parent onActivate.
      workItem = await _workItemService.getWorkItem(workItem.id);
      int i = work.workItems.indexWhere((it) => it.id == workItem.id);
      if (i != -1) {
        work.workItems[i] = workItem;
        _historyTimelineService.refreshHistory(SystemModule.works.index);
      }
    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  void goToDetail() {
      _router.navigate(AppRoutes.workItemEditRoute.toUrl(parameters: {
        AppRoutesParam.workIdParameter: work.id,
        AppRoutesParam.workItemIdParameter: selectedWorkItem.id }));
  }

  String stateHslColor(State state) => WorkService.getStateHslColor(state);

  String composeTooltip(String label, String name) {
    return label + ' ' + ((name == null) ? '(-)' : name);
  }

  String colorFromUuid(String id) {
    return id == null ? '#ffffff' : '#' + id.substring(0, 6);
  }

  String firstLetter(String name) {
    return name == null ? 'G' : name.substring(0, 1).toUpperCase();
  }
}

class KanbanColumn {
  WorkStage workStage;
  List<WorkItem> columnWorkItems;

  KanbanColumn() {
    columnWorkItems = List();
  }
}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

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
import 'package:angular_components/model/menu/menu.dart';
import 'package:angular_components/model/ui/icon.dart';
import 'package:angular_components/content/deferred_content.dart';
import 'package:angular_components/material_menu/material_menu.dart';

import 'package:auge_server/model/general/authorization.dart';
import 'package:auge_server/model/general/user.dart';
import 'package:auge_server/model/initiative/initiative.dart';
import 'package:auge_server/model/initiative/work_item.dart';

import 'package:auge_web/message/messages.dart';
import 'package:auge_web/message/model_messages.dart';

import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/work_item/work_item_service.dart';
import 'package:auge_web/src/initiative/initiative_service.dart';
import 'package:auge_web/src/history_timeline/history_timeline_service.dart';
import 'package:auge_web/src/work_item/work_item_detail_component.dart';

import 'package:auge_web/services/app_routes.dart';

@Component(
    selector: 'auge-work-items-list',
    providers: const [InitiativeService, WorkItemService],
    templateUrl: 'work_items_list_component.html',
    styleUrls: const [
      'work_items_list_component.css'
    ],
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
      NgModel,
    ],
    pipes: const [commonPipes])
class WorkItemsListComponent with CanReuse /* with CanReuse implements OnActivate  */ {

  final AppLayoutService _appLayoutService;
  final WorkItemService _workItemService;
  final HistoryTimelineService _historyTimelineService;
  final Router _router;

  @Input()
  Initiative initiative;

  WorkItem selectedWorkItem;

  MenuModel<MenuItem> menuModel;


  static final String dueDateLabel =  FieldMsg.label('${WorkItem.className}.${WorkItem.dueDateField}');
  static final String stageLabel =  FieldMsg.label('${WorkItem.className}.${WorkItem.stageField}');
  static final String completedLabel =  FieldMsg.label('${WorkItem.className}.${WorkItem.completedField}');
  static final String checkItemsLabel =  FieldMsg.label('${WorkItem.className}.${WorkItem.checkItemsField}');

  WorkItemsListComponent(this._appLayoutService, this._workItemService, this._historyTimelineService, this._router) {
    initializeDateFormatting(Intl.defaultLocale);

    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMsg.buttonLabel('Edit'), icon: new Icon('edit') , actionWithContext: (_) => goToDetail()), new MenuItem(CommonMsg.buttonLabel('Delete'), icon: new Icon('delete'), actionWithContext: (_) => delete())])], icon: new Icon('menu'));
  }

  void selectWorkItem(WorkItem workItem) => this.selectedWorkItem = workItem;

  void delete() async {
    try {
      await _workItemService.deleteWorkItem(selectedWorkItem);
      initiative.workItems.remove(selectedWorkItem);
    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  String dueDateColor(WorkItem workItem) {
    return workItem.isOverdue ? 'hsl(0, 100%, 50%)' : null;
  }

  void updateWorkItem(WorkItem workItem) async {
    try {

      await _workItemService.saveWorkItem(initiative.id, workItem);

      //TODO maybe this needs to be updated with parent onActivate.
      workItem = await _workItemService.getWorkItem(workItem.id);
      int i = initiative.workItems.indexWhere((it) => it.id == workItem.id);
      if (i != -1) {
        initiative.workItems[i] = workItem;
        _historyTimelineService.refreshHistory(SystemModule.initiatives.index);
      }
    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  List<WorkItem> get workItems => initiative.workItems;

  String userUrlImage(User userMember) {
    return common_service.userUrlImage(userMember.userProfile?.image);
  }

  // Just edit, because de add is called on super component.
  void goToDetail() {
      _router.navigate(AppRoutes.workItemEditRoute.toUrl(parameters: {
        AppRoutesParam.initiativeIdParameter: initiative.id,
        AppRoutesParam.workItemIdParameter: selectedWorkItem.id }));
  }
}
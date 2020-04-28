// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:auge_web/src/app_layout/app_layout_service.dart';

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
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';

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
import 'package:auge_web/src/work_item/work_item_detail_component.dart';

import 'package:auge_web/route/app_routes.dart';

@Component(
    selector: 'auge-work-items',
    providers: const [WorkService, WorkItemService],
    templateUrl: 'work_items_component.html',
    styleUrls: const [
      'work_items_component.css'
    ],
    directives: const [
      coreDirectives,
      routerDirectives,
      MaterialButtonComponent,
      MaterialIconComponent,
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
class WorkItemsComponent with CanReuse /* with CanReuse implements OnActivate  */ {

  final AppLayoutService _appLayoutService;
  final WorkItemService _workItemService;
  final HistoryTimelineService _historyTimelineService;
  final Router _router;

  @Input()
  Work work;

  WorkItem selectedWorkItem;

  MenuModel<MenuItem> menuModel;

  static final String editButtonLabel = CommonMsg.buttonLabel(CommonMsg.editButtonLabel);
  static final String deleteButtonLabel = CommonMsg.buttonLabel(CommonMsg.deleteButtonLabel);

  static final String workItemsLabel = WorkItemMsg.label(WorkItemMsg.workItemsLabel);

  static final String dueDateLabel =  WorkItemDomainMsg.fieldLabel(WorkItem.dueDateField);
  static final String stageLabel =  WorkItemDomainMsg.fieldLabel(WorkItem.workStageField);
  static final String actualValueLabel =  WorkItemDomainMsg.fieldLabel(WorkItem.actualValueField);
  static final String checkItemsLabel =  WorkItemDomainMsg.fieldLabel(WorkItem.checkItemsField);

  WorkItemsComponent(this._appLayoutService, this._workItemService, this._historyTimelineService, this._router) {
    // initializeDateFormatting(Intl.defaultLocale);

    menuModel = MenuModel([MenuItemGroup([MenuItem(editButtonLabel, icon: Icon('edit') , actionWithContext: (_) => goToDetail()), MenuItem(deleteButtonLabel, icon: Icon('delete'), actionWithContext: (_) => delete())])], icon: Icon('menu'));
  }

  void selectWorkItem(WorkItem workItem) => this.selectedWorkItem = workItem;

  void delete() async {
    try {
      await _workItemService.deleteWorkItem(selectedWorkItem);
      work.workItems.remove(selectedWorkItem);
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

  List<WorkItem> get workItems => work.workItems;

  String userUrlImage(User userMember) {
    return common_service.userUrlImage(userMember.userProfile?.image);
  }

  // Just edit, because de add is called on super component.
  void goToDetail() {
    if (selectedWorkItem == null) {
      _router.navigate(AppRoutes.workItemAddRoute.toUrl(parameters: {
        AppRoutesParam.workIdParameter: work.id }), NavigationParams(replace:  true));
    } else {
      _router.navigate(AppRoutes.workItemEditRoute.toUrl(parameters: {
        AppRoutesParam.workIdParameter: work.id,
        AppRoutesParam.workItemIdParameter: selectedWorkItem.id }), NavigationParams(replace:  true));
    }

  }

  String stateHslColor(State state) => WorkService.getStateHslColor(state);
}
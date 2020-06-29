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
import 'package:angular_components/material_toggle/material_toggle.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';

import 'package:angular_components/content/deferred_content.dart';

import 'package:auge_web/src/work/work_summary_component.dart';

import 'package:auge_shared/domain/general/authorization.dart';
import 'package:auge_shared/domain/general/user.dart';
import 'package:auge_shared/domain/work/work.dart';
import 'package:auge_shared/domain/work/work_item.dart';
import 'package:auge_shared/domain/work/work_stage.dart';

import 'package:auge_shared/message/messages.dart';
import 'package:auge_shared/message/domain_messages.dart';

import 'package:auge_web/src/search_filter/search_filter_service.dart';
import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/work_item/work_item_service.dart';
import 'package:auge_web/src/work/work_service.dart';
import 'package:auge_web/src/work_item/work_item_detail_component.dart';

import 'package:auge_web/route/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/work_item/work_items_filter_component.template.dart' as work_items_filter_component;

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
      MaterialExpansionPanelSet,
      MaterialExpansionPanel,
      MaterialToggleComponent,
      MaterialTooltipDirective,
      MaterialSliderComponent,
      MaterialCheckboxComponent,
      DeferredContentDirective,
      WorkItemDetailComponent,
      NgModel,
      WorkSummaryComponent,
      MaterialButtonComponent,
      MaterialIconComponent,
    ],
    pipes: const [commonPipes])

class WorkItemsComponent with CanReuse implements OnActivate /*, OnDestroy */ {

  final AppLayoutService _appLayoutService;
//  final WorkService _workService;
  final WorkItemService _workItemService;
  final SearchFilterService _searchFilterService;
  final Router _router;

  List<WorkItem> workItems;

  Map<String, bool> checkItensExpandedControl = {};

  static final String groupLabel = WorkDomainMsg.fieldLabel(Work.groupField);
  static final String leaderLabel =  WorkDomainMsg.fieldLabel(Work.leaderField);

  static final String workLabel = WorkItemDomainMsg.fieldLabel(WorkItem.workField);
  static final String nameLabel = WorkItemDomainMsg.fieldLabel(WorkItem.nameField);
  static final String dueDateLabel =  WorkItemDomainMsg.fieldLabel(WorkItem.dueDateField);
  static final String actualValueLabel =  WorkItemDomainMsg.fieldLabel(WorkItem.actualValueField);
  static final String checkItemsLabel =  WorkItemDomainMsg.fieldLabel(WorkItem.checkItemsField);

  static final String headerTitle = WorkItemMsg.label(WorkItemMsg.workItemsLabel);

  final List<RouteDefinition> routes = [
    RouteDefinition(
      routePath: AppRoutes.workItemsFilterRoute,
      component: work_items_filter_component.WorkItemsFilterComponentNgFactory,
    ),
  ];


  WorkItemsComponent(this._appLayoutService, this._searchFilterService, this._workItemService, this._router) {
    // initializeDateFormatting(Intl.defaultLocale);
   }


  @override
  void onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {
    if (_workItemService.authService.authorizedOrganization == null ||
        _workItemService.authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }

    try {

      if (routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.assignedToUserIdQueryParameter)) {
        String userId = routerStateCurrent.queryParameters[AppRoutesQueryParam
            .assignedToUserIdQueryParameter];

        _workItemService.workItemsFilterOrder.assignedToUserIds = {userId};

        //TODO encontrar outra forma de retirar o queryparam.
        _router.navigateByUrl(routerStateCurrent.path, replace: true);

      }

      _appLayoutService.headerTitle = headerTitle;
      _appLayoutService.systemModuleIndex = SystemModule.works.index;

      _searchFilterService.enableSearch = true;
      _searchFilterService.enableFilter = true;

      _searchFilterService.filterRouteUrl = AppRoutes.workItemsFilterRoute.toUrl();

      _searchFilterService.filteredItems = _workItemService.workItemsFilterOrder.filteredItems;

      workItems = await _workItemService.getWorkItems(assignedToIds: _workItemService.workItemsFilterOrder.assignedToUserIds, withWork: true, withArchived: _workItemService.workItemsFilterOrder.archived);
      if (workItems != null) _orderWorkItems(workItems, _workItemService.workItemsFilterOrder.orderedBy);

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  String dueDateColor(WorkItem workItem) {
    return workItem.isOverdue ? 'hsl(0, 100%, 50%)' : null;
  }

  String userUrlImage(User userMember) {
    return common_service.userUrlImage(userMember?.userProfile?.image);
  }


 // String stateHslColor(int stateIndex) => WorkService.getStateHslColor(stateIndex);

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

  bool hasPlannedOrActual(WorkItem workItem) {
    return workItem != null && (workItem.plannedValue != null ||  workItem.actualValue != null);
  }

  // Order by
  void _orderWorkItems(List<WorkItem> workItemsToOrder, String orderBy) {
    if (orderBy == nameLabel) {
      workItemsToOrder.sort((a, b) => a?.name == null || b?.name == null ? -1 : a.name.compareTo(b.name));
      // if orderBy == null, default order.
    } else if (orderBy == null || orderBy == dueDateLabel) {
      workItemsToOrder.sort((a, b) => a?.dueDate == null || b?.dueDate == null ? -1 : a.dueDate.compareTo(b.dueDate));
    }
  }

  void goToKanban(WorkItem workItem) {
     _router.navigateByUrl(AppRoutes.workItemsKanbanRoute.toUrl(parameters: {
       AppRoutesParam.workIdParameter: workItem.work.id}, queryParameters: {AppRoutesQueryParam.workItemIdQueryParameter: workItem.id}));
  }
}



import 'package:intl/intl.dart';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:angular_components/focus/keyboard_only_focus_indicator.dart';
import 'package:angular_components/laminate/enums/alignment.dart';

import 'package:auge_shared/domain/work/work_item.dart';
import 'package:auge_shared/domain/general/user.dart';
import 'package:auge_shared/message/messages.dart';
import 'package:auge_shared/message/domain_messages.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/work_item/work_item_service.dart';
import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/route/app_routes.dart';
import 'package:auge_web/src/search_filter/search_filter_service.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/work_item/work_items_filter_component.template.dart' as work_items_filter_component;

@Component(
  selector: 'auge-work-items-gantt',
  providers: const [WorkItemService],
  templateUrl: 'work_items_gantt_component.html',
  styleUrls: const ['gantt_component.css', 'work_items_gantt_component.css'],
  directives: const [
    coreDirectives,
    routerDirectives,
    MaterialButtonComponent,
    MaterialIconComponent,
    MaterialTooltipDirective,
    ClickableTooltipTargetDirective,
    KeyboardOnlyFocusIndicatorDirective,
    MaterialPaperTooltipComponent,
  ],
  pipes: const [commonPipes],
)

class WorkItemsGanttComponent with CanReuse implements OnActivate {
  final preferredTooltipPositions = const [RelativePosition.OffsetBottomLeft, RelativePosition.OffsetBottomRight];

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final WorkItemService _workItemService;
  final SearchFilterService _searchFilterService;
  final Router _router;

  List<WorkItem> _workItems = [];
  List<int> yearsInterval = [];
  List<YearMonth> yearsMonthsInterval = [];
  //Map<String, List<WorkItem>> workItemsByGroup;

  DateTime currentDate;

  String selectedYear;

  final List<RouteDefinition> routes = [
  RouteDefinition(
    routePath: AppRoutes.workItemsGanttFilterRoute,
    component: work_items_filter_component.WorkItemsFilterComponentNgFactory,
  )];

  WorkItemsGanttComponent(this._authService, this._appLayoutService, this._workItemService, this._searchFilterService, this._router) {
    // initializeDateFormatting(Intl.defaultLocale , null);
  }

  // Define messages and labels
  static final String notInformedMsg = MapMsg.notInformedMsg();

  static final String headerTitle = WorkItemMsg.label(WorkItemMsg.workItemsGanttLabel);
  static final String nameLabel = WorkItemDomainMsg.fieldLabel(WorkItem.nameField);
  static final String assignedToLabel = WorkItemDomainMsg.fieldLabel(WorkItem.assignedToField);
  static final String workItemLabel =  WorkItemMsg.label(WorkItemMsg.workItemsLabel);
  static final String dueDateLabel = WorkItemDomainMsg.fieldLabel(WorkItem.dueDateField);
  static final String workLabel =  WorkItemDomainMsg.fieldLabel(WorkItem.workField);

  void onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {
    if (_authService.authorizedOrganization == null || _authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }

    _appLayoutService.headerTitle = headerTitle;
    _appLayoutService.systemModuleIndex = SystemModule.works.index;

    _searchFilterService.enableSearch = true;
    _searchFilterService.enableFilter = true;

    _searchFilterService.filterRouteUrl = AppRoutes.workItemsGanttFilterRoute.toUrl();

    _searchFilterService.filteredItems = _workItemService.workItemsFilterOrder.filteredItems;

    DateTime currentDateTime = DateTime.now();

    currentDate = DateTime(currentDateTime.year, currentDateTime.month, currentDateTime.day);

    try {

      _workItems = await _workItemService.getWorkItems(assignedToIds: _workItemService.workItemsFilterOrder.assignedToUserIds, withArchived: _workItemService.workItemsFilterOrder.archived);
      if (_workItems != null) _orderWorkItems(_workItems, _workItemService.workItemsFilterOrder.orderedBy);

       yearsInterval = getYearsInterval();
       yearsMonthsInterval = getYearsMonthsInterval();

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  String userUrlImage(User userMember) {
    return common_service.userUrlImage(userMember?.userProfile?.image);
  }

  void goToWorkItemsKanban(WorkItem workItem) {
    _router.navigate(AppRoutes.workItemsKanbanRoute.toUrl(parameters: { AppRoutesParam.workIdParameter: workItem.id }));
  }

  getYearsInterval() {
    // Scan for min and max date
    DateTime minStartDateTime, maxEndDateTime;
    for (int i = 0; i<workItems.length; i++) {
      if (workItems[i].dueDate != null) {
        if (minStartDateTime == null ||
            workItems[i].dueDate.compareTo(minStartDateTime) < 0) {
          minStartDateTime = workItems[i].dueDate;
        }
        if (maxEndDateTime == null ||
            workItems[i].dueDate.compareTo(maxEndDateTime) > 0) {
          maxEndDateTime = workItems[i].dueDate;
        }
      }
    }

    int yearsCount = 1;
    if (minStartDateTime != null && maxEndDateTime != null && minStartDateTime?.year != maxEndDateTime?.year)
      yearsCount = yearsCount + maxEndDateTime?.year - minStartDateTime?.year;

    int firstYear = minStartDateTime?.year ?? maxEndDateTime?.year ?? DateTime.now().year;

    List<int> _yearsInterval = [];
    for (int iYear = 0;iYear<yearsCount;iYear++) {
      _yearsInterval.add((firstYear + iYear));
    }

    return _yearsInterval;
  }

  getYearsMonthsInterval() {

    List<YearMonth> _yearsMonthsInterval = [];

    DateTime currentDateTime = DateTime.now();
    int currentYear = currentDateTime.year;
    int currentMonth = currentDateTime.month;


    for (int iYear = 0;iYear<yearsInterval.length;iYear++) {
      for (int iMonth = 0; iMonth < DateTime.monthsPerYear; iMonth++) {
        _yearsMonthsInterval.add(YearMonth()..year = yearsInterval[iYear]
            ..month =  iMonth+1
            ..monthName = DateFormat.MMM().format(DateTime(yearsInterval[iYear], iMonth + 1))
            ..isCurrent =  yearsInterval[iYear] == currentYear && iMonth+1 == currentMonth);
      }
    }

    return _yearsMonthsInterval;
  }

  String gridColumnFromStartAndEndDate(WorkItem workItem) {
    int month = 0;
    if (workItem.dueDate != null) {
      int yearDiff = workItem.dueDate.year -
          yearsMonthsInterval.first.year;
      int monthDiff = workItem.dueDate.month -
          yearsMonthsInterval.first.month;

      month = yearDiff * 12 + monthDiff;
    }

    const int initOffset = 1;
    const int finalOffset = 2;

    return '${month+initOffset}/${month+finalOffset}';
  }

  String barColor(WorkItem workItem) {
   // return objective.progress < 30 ? '#db4437' : '#0f9d58'; // Material Color - $mat-red / $mat-green

    String color;
    if (workItem.dueDate == null)
      color = '#9e9e9e';
    else if ( DateTime(workItem.dueDate.year, workItem.dueDate.month, workItem.dueDate.day).isAfter(currentDate) )
      color =  '#0f9d58'; // $mat-green-500: #0f9d58; // 'hsl(120, 100%, 50%)';
    else if (DateTime(workItem.dueDate.year, workItem.dueDate.month, workItem.dueDate.day).isBefore(currentDate))
      color = '#db4437'; // $mat-red-500: #db4437; // 'hsl(0, 100%, 50%)';
     else
      color = '#ffc107'; // $mat-amber-500: #ffc107; // 'hsl(45, 100%, 50%)';


    return color;
  }

  String colorFromUuid(String id) {
    return common_service.colorFromUuid(id);
  }

  String firstLetter(String name) {
    return common_service.firstLetter(name);
  }

  String groupName(String name) {
    return name ?? notInformedMsg;
  }

  bool hasDueDate(WorkItem workItem) {
    return (workItem.dueDate != null);
  }

  List<WorkItem> get workItems {
    return (_searchFilterService.searchTerm == null ||
        _searchFilterService.searchTerm.isEmpty) ? _workItems : _workItems.where((
        test) => test.name.contains(_searchFilterService.searchTerm)).toList();
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
}

class YearMonth {
  int year;
  int month;
  String monthName;
  bool isCurrent;
}
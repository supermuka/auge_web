import 'package:intl/intl.dart';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:angular_components/focus/keyboard_only_focus_indicator.dart';
import 'package:angular_components/laminate/enums/alignment.dart';

import 'package:auge_shared/domain/objective/objective.dart';
import 'package:auge_shared/domain/general/user.dart';
import 'package:auge_shared/message/messages.dart';
import 'package:auge_shared/message/domain_messages.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/route/app_routes.dart';
import 'package:auge_web/src/search_filter/search_filter_service.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/objective/objectives_filter_component.template.dart' as objectives_filter_component;

@Component(
  selector: 'auge-objectives-gantt',
  providers: const [ObjectiveService],
  templateUrl: 'objectives_gantt_component.html',
  styleUrls: const ['gantt_component.css', 'objectives_gantt_component.css'],
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

class ObjectivesGanttComponent with CanReuse implements OnActivate {
  final preferredTooltipPositions = const [RelativePosition.OffsetBottomLeft, RelativePosition.OffsetBottomRight];

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final ObjectiveService _objectiveService;
  final SearchFilterService _searchFilterService;
  final Router _router;

  List<Objective> _objectives = [];
  List<int> yearsInterval = [];
  List<YearMonth> yearsMonthsInterval = [];
 // Map<String, List<Objective>> objectivesByGroup;
  DateTime currentDateTime;

  String selectedYear;

  final List<RouteDefinition> routes = [
  RouteDefinition(
    routePath: AppRoutes.objectivesGanttFilterRoute,
    component: objectives_filter_component.ObjectivesFilterComponentNgFactory,
  )];

  ObjectivesGanttComponent(this._authService, this._appLayoutService, this._objectiveService, this._searchFilterService, this._router) {
    // initializeDateFormatting(Intl.defaultLocale , null);
  }

  // Define messages and labels
  static final String notInformedMsg = MapMsg.notInformedMsg();

  static final String headerTitle = ObjectiveMsg.label(ObjectiveMsg.objectivesGanttLabel);
  static final String leaderLabel = ObjectiveDomainMsg.fieldLabel(Objective.leaderField); // FieldMsg.label('${Objective.className}.${Objective.leaderField}');
  static final String groupLabel = ObjectiveDomainMsg.fieldLabel(Objective.groupField);
  static final String objectiveLabel =  ObjectiveMsg.label(ObjectiveMsg.objectiveLabel); //FieldMsg.label('${Objective.className}.${Objective.groupField}');
  static final String startDateLabel = ObjectiveDomainMsg.fieldLabel(Objective.startDateField); // FieldMsg.label('${Objective.className}.${Objective.startDateField}');
  static final String endDateLabel =  ObjectiveDomainMsg.fieldLabel(Objective.endDateField); //FieldMsg.label('${Objective.className}.${Objective.endDateField}');

  void onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {
    if (_authService.authorizedOrganization == null || _authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }

    _appLayoutService.headerTitle = headerTitle;
 //   _appLayoutService.enabledSearch = false;
    _appLayoutService.systemModuleIndex =  null;

    // Enabled search and filter
    _searchFilterService.enableSearch = true;
    _searchFilterService.enableFilter = true;
    _searchFilterService.filterRouteUrl = AppRoutes.objectivesGanttFilterRoute.toUrl();

    _searchFilterService.filteredItems = _objectiveService.objectivesFilterOrder.filteredItems;

    currentDateTime = DateTime.now();

    try {
       _objectives = await _objectiveService.getObjectives(
           organizationId: _objectiveService.authService.authorizedOrganization.id,
           withArchived: _objectiveService.objectivesFilterOrder.archived,
           groupIds: _objectiveService.objectivesFilterOrder.groupIds?.toList(),
           leaderUserIds: _objectiveService.objectivesFilterOrder.leaderUserIds?.toList());

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

  void goToObjective(Objective objective) async {
    _router.navigateByUrl(AppRoutes.objectivesRoute.toUrl(queryParameters: {
      AppRoutesQueryParam.objectiveIdQueryParameter: objective.id,
      AppRoutesQueryParam.search: 'true'
    }));
  //  _router.navigateByUrl(AppRoutes.objectivesRoute.toUrl(queryParameters: { AppRoutesParam.objectiveIdParameter: objective.id }) /*, reload: true, replace: true */);
  }

  getYearsInterval() {
    // Scan for min and max date
    DateTime minStartDateTime, maxEndDateTime;
    for (int i = 0; i<objectives.length; i++) {
      if (objectives[i].startDate != null && (minStartDateTime == null || objectives[i].startDate.compareTo(minStartDateTime) < 0)) {
        minStartDateTime = objectives[i].startDate;
      }
      if (objectives[i].endDate != null && (maxEndDateTime == null || objectives[i].endDate.compareTo(maxEndDateTime) > 0)) {
        maxEndDateTime = objectives[i].endDate;
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

  String gridColumnFromStartAndEndDate(Objective objective) {
    int startMonth = 0;
    if (objective.startDate != null) {
      int startYearDiff = objective.startDate.year -
          yearsMonthsInterval.first.year;
      int startMonthDiff = objective.startDate.month -
          yearsMonthsInterval.first.month;

      startMonth = startYearDiff * 12 + startMonthDiff;
    }

    int endMonth = yearsMonthsInterval.length - 1;
    if (objective.endDate != null) {
      int endYearDiff = objective.endDate.year - yearsMonthsInterval.first.year;
      int endMonthDiff = objective.endDate.month -
          yearsMonthsInterval.first.month;

      endMonth = endYearDiff * 12 + endMonthDiff;
    }

    const int initOffset = 1;
    const int finalOffset = 2;

    return '${startMonth+initOffset}/${endMonth+finalOffset}';
  }

  String barColor(Objective objective) {
   // return objective.progress < 30 ? '#db4437' : '#0f9d58'; // Material Color - $mat-red / $mat-green

    currentDateTime.millisecondsSinceEpoch;
    int expectedProgressInTime;
    if (objective.startDate != null && objective.endDate != null) {
      if (objective.startDate.millisecondsSinceEpoch > currentDateTime.millisecondsSinceEpoch) {
        expectedProgressInTime = 0;
      } else if (objective.endDate.millisecondsSinceEpoch < currentDateTime.millisecondsSinceEpoch) {
        expectedProgressInTime = 100;
      } else {
        expectedProgressInTime = (currentDateTime.millisecondsSinceEpoch -
            objective.startDate.millisecondsSinceEpoch) * 100 ~/(objective.endDate.millisecondsSinceEpoch -
            objective.startDate.millisecondsSinceEpoch);
      }
    }

    String color;
    if (expectedProgressInTime == null)
      color = '#9e9e9e';
    else if ( objective.progress / expectedProgressInTime >= 0.7)
      color =  '#0f9d58'; // $mat-green-500: #0f9d58; // 'hsl(120, 100%, 50%)';
    else if (objective.progress / expectedProgressInTime >= 0.3)
      color = '#ffc107'; // $mat-amber-500: #ffc107; // 'hsl(45, 100%, 50%)';
     else
      color = '#db4437'; // $mat-red-500: #db4437; // 'hsl(0, 100%, 50%)';

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

  bool hasStarOrEndDate(Objective objective) {
    return (objective.startDate != null || objective.endDate != null);
  }

  List<Objective> get objectives {
    if (_searchFilterService.searchTerm == null || _searchFilterService.searchTerm.isEmpty) {
      return _objectives;
    }
    else {
      return  _objectives.where((test) => test.name.contains(_searchFilterService.searchTerm)).toList();
    }
  }

}

class YearMonth {
  int year;
  int month;
  String monthName;
  bool isCurrent;
}
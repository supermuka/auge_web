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
import 'package:auge_web/src/gantt/gantt_service.dart';
import 'package:auge_web/route/app_routes.dart';

@Component(
  selector: 'auge-gantt',
  providers: const [GanttService, ObjectiveService],
  templateUrl: 'gantt_component.html',
  styleUrls: const ['gantt_component.css'],
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

class GanttComponent with CanReuse implements OnActivate {
  final preferredTooltipPositions = const [RelativePosition.OffsetBottomLeft, RelativePosition.OffsetBottomRight];

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final GanttService _ganttService;
  final Router _router;

  List<Objective> objectives = [];
  List<int> yearsInterval = [];
  List<YearMonth> yearsMonthsInterval = [];
  Map<String, List<Objective>> objectivesByGroup;

  String selectedYear;

  GanttComponent(this._authService, this._appLayoutService, this._ganttService, this._router) {
    // initializeDateFormatting(Intl.defaultLocale , null);
  }

  // Define messages and labels
  static final String notInformedMsg = MapMsg.notInformedMsg();

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

    _appLayoutService.headerTitle = GanttMsg.label(GanttMsg.objectivesGanttLabel);
 //   _appLayoutService.enabledSearch = false;
    _appLayoutService.systemModuleIndex =  null;

    try {
       objectives = await _ganttService.getObjectivesGantt(_authService.authorizedOrganization.id);

       yearsInterval = getYearsInterval();
       yearsMonthsInterval = getYearsMonthsInterval();
       objectivesByGroup = getObjectivesByGroup();

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  String userUrlImage(User userMember) {
    return common_service.userUrlImage(userMember?.userProfile?.image);
  }

  void goToObjective(Objective objective) async {
    _router.navigateByUrl(AppRoutes.objectivesRoute.toUrl(queryParameters: { AppRoutesParam.objectiveIdParameter: objective.id }) /*, reload: true, replace: true */);
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

  Map<String, List<Objective>> getObjectivesByGroup() {
    Map<String, List<Objective>> _objectivesByGroup = {};
    for (int i = 0;i<objectives.length;i++) {
      if (!_objectivesByGroup.containsKey(objectives[i].group?.id)) {
        _objectivesByGroup[objectives[i].group?.id] = List();
      }
      _objectivesByGroup[objectives[i].group?.id].add(objectives[i]);
    }
    return _objectivesByGroup;
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
    DateTime currentDateTime = DateTime.now();

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
    else if ( objective.progress > expectedProgressInTime * 0.7)
      color =  '#0f9d58'; // $mat-green-500: #0f9d58; // 'hsl(120, 100%, 50%)';
    else if (objective.progress < expectedProgressInTime * 0.3)
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

  bool hasStarOrEndDate(Objective objective) {
    return (objective.startDate != null || objective.endDate != null);
  }

}

class YearMonth {
  int year;
  int month;
  String monthName;
  bool isCurrent;
}
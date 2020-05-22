// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.ExampleSelectionOptions

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'package:angular_components/scorecard/scoreboard.dart';
import 'package:angular_components/scorecard/scorecard.dart';

import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';

import 'package:auge_shared/domain/objective/objective.dart';
import 'package:auge_shared/domain/work/work.dart';
import 'package:auge_shared/domain/work/work_stage.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/search_filter/search_filter_service.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/src/group/group_service.dart';
//import 'package:auge_web/src/filter/filter_component.dart';

import 'package:auge_web/src/insight/insight_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/src/work/work_service.dart';
import 'package:auge_web/route/app_routes.dart';
//import 'package:auge_web/src/search_filter/search_filter_component.dart';

import 'package:auge_shared/message/messages.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/insight/insights_filter_component.template.dart' as insights_filter_component;


@Component(
  selector: 'auge-insights',
  providers: const [InsightService, ObjectiveService, WorkService, GroupService, UserService],
    styleUrls: const ['insights_component.css'],
    templateUrl: 'insights_component.html',
  directives: const [
    coreDirectives,
    routerDirectives,
    ScoreboardComponent,
    ScorecardComponent,
    MaterialButtonComponent,
    MaterialIconComponent,
  ])

class InsightsComponent with CanReuse implements OnActivate  {

  final ScoreboardType selectable = ScoreboardType.selectable;

  final AuthService _authService;
  final AppLayoutService _appLayoutService;
  final InsightService _insightService;
  final SearchFilterService _searchFilterService;
  final ObjectiveService _objectiveService;
  final WorkService _workService;
  final Router _router;

  final List<RouteDefinition> routes = [
    RouteDefinition(
      routePath: AppRoutes.insightsFilterRoute,
      component: insights_filter_component.InsightsFilterComponentNgFactory,
    ),
/*
    RouteDefinition(
      routePath: AppRoutes.objectivesFilterRoute,
      component: insights_filter_component.InsightsFilterComponentNgFactory, /* objectives_filter_component.ObjectivesFilterComponentNgFactory, */
    ),
  */
  ];

  /// Return overall progress
  String overallProgress;

  /// Return a total number of objectives
  String objectivesNumber;

  /// Return a total number of achieved objectives with progress over 70%
  String achievedObjectivesNumber;

  /// Return a total number of objectives with progress less that 30%
  String requiringAttentionObjectivesNumber;

  /// Return a total number of measures
  String measuresNumber;

  /// Return a total number of achieved measures with progress over 70%
  String achievedMeasuresNumber;

  /// Return a total number of measures with progress less that 30%
  String requiringAttentionMeasuresNumber;

  /// Return a total number of works
  String worksNumber;

  /// Return a total number of works completed = all work items completed
  String completedWorksNumber;

  /// Return a total number of works with over due work items
  String overDueWorksNumber;

  /// Return a total number of measures
  String workItemsNumber;

  /// Return a total number of completed work items with progress equal 100%
  String completedWorkItemsNumber;

  /// Return a total number of over due work items
  String overDueWorkItemsNumber;

  List<Objective> objectives = [];
  List<Work> works = [];

 // List<FilterOption> groupFilterOptions;
  List<String> groupsIdSelectedToFilter = [];
 // List<FilterOption> leaderFilterOptions;
  List<String> usersIdSelectedToFilter = [];

  List<String> initialFilterOptionsIdsSelected = [];

  InsightsComponent(this._authService, this._appLayoutService, this._insightService, this._objectiveService, this._workService, this._searchFilterService, this._router);

  // Define messages and labels
  static final String leaderLabel = InsightMsg.label(InsightMsg.leaderLabel);
  static final String groupLabel = InsightMsg.label(InsightMsg.groupLabel);

  static final String objectivesOverallLabel = InsightMsg.label(InsightMsg.objectivesOverallLabel);
  static final String objectivesMeasuresLabel = InsightMsg.label(InsightMsg.objectivesMeasuresLabel);
  static final String worksWorkItemsLabel = InsightMsg.label(InsightMsg.worksWorkItemsLabel);

  static final String objectivesLabel =  InsightMsg.label(InsightMsg.objectivesLabel);
  static final String objectivesDescriptionLabel =  InsightMsg.label(InsightMsg.objectivesDescriptionLabel);

  static final String objectivesAchievedLabel =  InsightMsg.label(InsightMsg.objectivesAchievedLabel);
  static final String objectivesAchievedDescriptionLabel =  InsightMsg.label(InsightMsg.objectivesAchievedDescriptionLabel);

  static final String objectivesRequiringAttentionLabel =  InsightMsg.label(InsightMsg.objectivesRequiringAttentionLabel);
  static final String objectivesRequiringAttentionDescriptionLabel =  InsightMsg.label(InsightMsg.objectivesRequiringAttentionDescriptionLabel);

  static final String measuresLabel =  InsightMsg.label(InsightMsg.measuresLabel);
  static final String measuresDescriptionLabel =  InsightMsg.label(InsightMsg.measuresDescriptionLabel);

  static final String measuresAchievedLabel =  InsightMsg.label(InsightMsg.measuresAchievedLabel);
  static final String measuresAchievedDescriptionLabel =  InsightMsg.label(InsightMsg.measuresAchievedDescriptionLabel);

  static final String measuresRequiringAttentionLabel =  InsightMsg.label(InsightMsg.measuresRequiringAttentionLabel);
  static final String measuresRequiringAttentionDescriptionLabel =  InsightMsg.label(InsightMsg.measuresRequiringAttentionDescriptionLabel);

  static final String worksLabel =  InsightMsg.label(InsightMsg.worksLabel);
  static final String worksDescriptionLabel =  InsightMsg.label(InsightMsg.worksDescriptionLabel);

  static final String worksCompletedLabel =  InsightMsg.label(InsightMsg.worksCompletedLabel);
  static final String worksCompletedDescriptionLabel =  InsightMsg.label(InsightMsg.worksCompletedDescriptionLabel);

  static final String worksRequiringAttentionLabel =  InsightMsg.label(InsightMsg.worksRequiringAttentionLabel);
  static final String worksRequiringAttentionDescriptionLabel =  InsightMsg.label(InsightMsg.worksRequiringAttentionDescriptionLabel);

  static final String workItemsLabel =  InsightMsg.label(InsightMsg.workItemsLabel);
  static final String workItemsDescriptionLabel =  InsightMsg.label(InsightMsg.workItemsDescriptionLabel);

  static final String workItemsCompletedLabel =  InsightMsg.label(InsightMsg.workItemsCompletedLabel);
  static final String workItemsCompletedDescriptionLabel =  InsightMsg.label(InsightMsg.workItemsDescriptionLabel);

  static final String workItemsRequiringAttentionLabel =  InsightMsg.label(InsightMsg.workItemsRequiringAttentionLabel);
  static final String workItemsRequiringAttentionDescriptionLabel =  InsightMsg.label(InsightMsg.workItemsRequiringAttentionDescriptionLabel);

  @override
  void onActivate(RouterState previous, RouterState current) async {

    if (_authService.authorizedOrganization == null || _authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }

    _appLayoutService.headerTitle = InsightMsg.label(InsightMsg.insightsLabel);
   // _appLayoutService.enabledSearch = false;
    _appLayoutService.systemModuleIndex = null;

    _searchFilterService.enableSearch = false;
    _searchFilterService.enableFilter = true;
    _searchFilterService.filterRouteUrl = AppRoutes.insightsFilterRoute.toUrl();

    _searchFilterService.filteredItems = _insightService.insightsFilterOrder.filteredItems;


    try {
      if (_authService.authorizedOrganization != null) {

        // Objectives
       // List<Objective> objectivesAux;

        objectives = await _objectiveService.getObjectives(
            _objectiveService.authService.authorizedOrganization.id,
            withMeasures: true,
            groupIds:  _insightService.insightsFilterOrder.groupIds?.toList(),
            leaderUserIds: _insightService.insightsFilterOrder.leaderUserIds?.toList());

        print(_insightService.insightsFilterOrder.groupIds?.toList());

        // Works
        //TODO include groups and leaders
        works = await _workService.getWorks(
            _authService.authorizedOrganization.id,
            withWorkItems: true,
            groupIds:  _insightService.insightsFilterOrder.groupIds?.toList(),
            leaderUserIds: _insightService.insightsFilterOrder.leaderUserIds?.toList());

        aggregateObjectivesMeasurement();
        aggregateWorksMeasurement();

      }
    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  aggregateObjectivesMeasurement() async {

      int _objectivesNumber = objectives.length;
      int _sumOverallProgress = 0;
      int _achievedObjectivesNumber = 0;
      int _requiringAttentionObjectivesNumber = 0;
      int _measuresNumber = 0;
      int _achievedMeasuresNumber = 0;
      int _requiringAttentionMeasuresNumber = 0;

      for (int i=0;i<_objectivesNumber;i++) {
        _sumOverallProgress = _sumOverallProgress + objectives[i].progress ?? 0;

        if (objectives[i].progress > 70) {
          _achievedObjectivesNumber++;
        }

        if (objectives[i].progress < 30) {
          _requiringAttentionObjectivesNumber++;
        }

        _measuresNumber = _measuresNumber + objectives[i].measures.length;

        for (int ii=0;ii<objectives[i].measures.length;ii++) {
          if (objectives[i].measures[ii].progress > 70) {
            _achievedMeasuresNumber++;
          }

          if (objectives[i].measures[ii].progress < 30) {
            _requiringAttentionMeasuresNumber++;
          }

          if (objectives[i].measures[ii].progress < 30) {
            _requiringAttentionMeasuresNumber++;
          }
        }
      }

      /// Return overall progress
      overallProgress =  _objectivesNumber > 0 && _sumOverallProgress > 0 ? (_sumOverallProgress ~/ _objectivesNumber).toString() : '0';

      /// Return a total number of objectives
      objectivesNumber =  _objectivesNumber?.toString() ?? '0';

      /// Return a total number of achieved objectives with progress over 70%
      achievedObjectivesNumber = _achievedObjectivesNumber?.toString() ?? '0';

      /// Return a total number of objectives with progress less that 30%
      requiringAttentionObjectivesNumber = _requiringAttentionObjectivesNumber?.toString() ?? '0';

      /// Return a total number of measures
      measuresNumber = _measuresNumber?.toString() ?? '0';

      /// Return a total number of achieved measures with progress over 70%
      achievedMeasuresNumber = _achievedMeasuresNumber?.toString() ?? '0';

      /// Return a total number of measures with progress less that 30%
      requiringAttentionMeasuresNumber =  _requiringAttentionMeasuresNumber?.toString() ?? '0';

      /// Return a total number of measures with progress less that 30%
      requiringAttentionMeasuresNumber =  _requiringAttentionMeasuresNumber?.toString() ?? '0';

  }

  aggregateWorksMeasurement() async {

    int _worksNumber = works.length;
    int _completedWorksNumber = 0;
    int _overDueWorksNumber = 0;
    int _workItemsNumber = 0;
    int _completedWorkWorkItemsNumber = 0;
    int _overDueWorkItemsNumber = 0;

    for (int i=0;i<works.length;i++) {
      int _completedWorkWorkItemsNumber = 0;

      _workItemsNumber = _workItemsNumber + works[i].workItems.length;

      if (works[i].workItems.length != 0 && works[i].workItems.length == _completedWorkWorkItemsNumber) {
        _completedWorksNumber++;
      }

      for (int ii=0;ii<works[i].workItems.length;ii++) {
        //if (works[i].workItems[ii].completed == 100) {
        if (works[i].workItems[ii].workStage.index == State.completed.index) {
          _completedWorkWorkItemsNumber++;
        }
        if (works[i].workItemsOverDueCount > 0) {
          _overDueWorksNumber++;
        }
        if (works[i].workItems[ii].isOverdue) {
          _overDueWorkItemsNumber++;
        }
      }
    }

    /// Return a total number of works
    worksNumber = _worksNumber?.toString() ?? '0';

    /// Return a total number of works completed = all work items completed
    completedWorksNumber = _completedWorksNumber?.toString() ?? '0';

    /// Return a total number of works with over due work items
    overDueWorksNumber = _overDueWorksNumber?.toString() ?? '0';

    /// Return a total number of measures
    workItemsNumber = _workItemsNumber?.toString() ?? '0';

    /// Return a total number of completed work items with progress equal 100%
    completedWorkItemsNumber = _completedWorkWorkItemsNumber?.toString() ?? '0';

    /// Return a total number of over due work items
    overDueWorkItemsNumber = _overDueWorkItemsNumber?.toString() ?? '0';

  }
}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.


import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'package:angular_components/scorecard/scoreboard.dart';
import 'package:angular_components/scorecard/scorecard.dart';

import 'package:auge_web/message/messages.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/src/initiative/initiative_service.dart';

import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_server/model/initiative/initiative.dart';

import 'package:auge_web/services/app_routes.dart';

@Component(
  selector: 'auge-insights',
  providers: const [ObjectiveService, InitiativeService],
  directives: const [
    coreDirectives,
    ScoreboardComponent,
    ScorecardComponent,
  ],
  styleUrls: const ['insights_component.css'],
  templateUrl: 'insights_component.html',
)

class InsightsComponent implements OnActivate  {

  final ScoreboardType selectable = ScoreboardType.selectable;

  AuthService _authService;
  AppLayoutService _appLayoutService;
  ObjectiveService _objectiveService;
  InitiativeService _initiativeService;
  final Router _router;

  List<Objective> objectives = new List();
  List<Initiative> initiatives = new List();

  InsightsComponent(this._authService, this._appLayoutService, this._objectiveService, this._initiativeService, this._router);

  // Define messages and labels
  static final String objectivesOverallLabel = InsightMessage.label('Objectives Overall');
  static final String objectivesLabel =  InsightMessage.label('Objectives');
  static final String objectivesAchievedLabel =  InsightMessage.label('Objectives Achieved');
  static final String objectivesRequiringAttentionLabel =  InsightMessage.label('Objectives Requiring Attention');
  static final String measuresLabel =  InsightMessage.label('Measures');
  static final String measuresAchievedLabel =  InsightMessage.label('Measures Achieved');
  static final String measuresRequiringAttentionLabel =  InsightMessage.label('Measures Requiring Attention');
  static final String initiativesLabel =  InsightMessage.label('Initiatives');
  static final String initiativesCompletedLabel =  InsightMessage.label('Initiatives Completed');
  static final String initiativesRequiringAttentionLabel =  InsightMessage.label('Initiatives Requiring Attention');
  static final String workItemsLabel =  InsightMessage.label('Work Items');
  static final String workItemsCompletedLabel =  InsightMessage.label('Work Items Completed');
  static final String workItemsRequiringAttentionLabel =  InsightMessage.label('Work Items Requiring Attention');

  @override
  void onActivate(RouterState previous, RouterState current) async {

    if (this._authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
    }

    _appLayoutService.enabledSearch = false;
    _appLayoutService.headerTitle = AppLayoutMessage.label('Insights');

    try {
      if (_authService.selectedOrganization != null) {
        objectives = await _objectiveService.getObjectives(
            _authService.selectedOrganization.id, withMeasures: true);
        initiatives = await _initiativeService.getInitiatives(
            _authService.selectedOrganization.id, withWorkItems: true);
      }
    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }

  }

  /// Return overall progress
  int get overallProgress {
    int _sumOverallProgress = 0;
    for (int i=0;i<objectives.length;i++) {
      _sumOverallProgress = _sumOverallProgress + objectives[i].progress ?? 0;
    }
    return objectives.length > 0 && _sumOverallProgress > 0 ? (_sumOverallProgress ~/ objectives.length) : 0;
  }

  /// Return a total number of objectives
  String get objectivesNumber {
    return objectives?.length?.toString() ?? '0';
  }

  /// Return a total number of achieved objectives with progress over 70%
  String get achievedObjectivesNumber {
    int _achievedObjectivesNumber = 0;
    for (int i=0;i<objectives.length;i++) {
      if (objectives[i].progress > 70) {
        _achievedObjectivesNumber++;
      }
    }
    return _achievedObjectivesNumber?.toString() ?? '0';
  }

  /// Return a total number of objectives with progress less that 30%
  String get requiringAttentionObjectivesNumber {
    int _requiringAttentionObjectivesNumber = 0;
    for (int i=0;i<objectives.length;i++) {
      if (objectives[i].progress < 30) {
        _requiringAttentionObjectivesNumber++;
      }
    }
    return _requiringAttentionObjectivesNumber?.toString() ?? '0';
  }

  /// Return a total number of measures
  String get measuresNumber {
    int _measuresNumber = 0;
    for (int i=0;i<objectives.length;i++) {
      _measuresNumber = _measuresNumber + objectives[i].measures.length;
    }
    return _measuresNumber?.toString() ?? '0';
  }

  /// Return a total number of achieved measures with progress over 70%
  String get achievedMeasuresNumber {
    int _achievedMeasuresNumber = 0;
    for (int i=0;i<objectives.length;i++) {
      for (int ii=0;ii<objectives[i].measures.length;ii++) {
        if (objectives[i].measures[ii].progress > 70) {
          _achievedMeasuresNumber++;
        }
      }
    }
    return _achievedMeasuresNumber?.toString() ?? '0';
  }

  /// Return a total number of measures with progress less that 30%
  String get requiringAttentionMeasuresNumber {
    int _requiringAttentionMeasuresNumber = 0;
    for (int i=0;i<objectives.length;i++) {
      for (int ii=0;ii<objectives[i].measures.length;ii++) {
        if (objectives[i].measures[ii].progress < 30) {
          _requiringAttentionMeasuresNumber++;
        }
      }
    }
    return _requiringAttentionMeasuresNumber?.toString() ?? '0';
  }

  /// Return a total number of initiatives
  String get initiativesNumber {
    return initiatives.length?.toString() ?? '0';
  }

  /// Return a total number of initiatives completed = all work items completed
  String get completedInitiativesNumber {

    int _completedInitiativesNumber = 0;

    for (int i=0;i<initiatives.length;i++) {
      int _completedInitiaveWorkItemsNumber = 0;
      for (int ii=0;ii<initiatives[i].workItems.length;ii++) {
        if (initiatives[i].workItems[ii].completed == 100) {
          _completedInitiaveWorkItemsNumber++;
        }
      }
      if (initiatives[i].workItems.length != 0 && initiatives[i].workItems.length == _completedInitiaveWorkItemsNumber) {
        _completedInitiativesNumber++;
      }
    }
    return _completedInitiativesNumber?.toString() ?? '0';
  }

  /// Return a total number of initiatives with over due work items
  String get overDueInitiativesNumber {
    int _overDueInitiativesNumber = 0;
    for (int i=0;i<initiatives.length;i++) {
      if (initiatives[i].workItemsOverDueCount > 0) {
        _overDueInitiativesNumber++;
      }
    }
    return _overDueInitiativesNumber?.toString() ?? '0';
  }

  /// Return a total number of measures
  String get workItemsNumber {
    int _workItemsNumber = 0;
    for (int i=0;i<initiatives.length;i++) {
      _workItemsNumber = _workItemsNumber + initiatives[i].workItems.length;
    }
    return _workItemsNumber?.toString() ?? '0';
  }

  /// Return a total number of completed work items with progress equal 100%
  String get completedWorkItemsNumber {
    int _completedWorkItemsNumber = 0;
    for (int i=0;i<initiatives.length;i++) {
      for (int ii=0;ii<initiatives[i].workItems.length;ii++) {
        if (initiatives[i].workItems[ii].completed == 100) {
          _completedWorkItemsNumber++;
        }
      }
    }
    return _completedWorkItemsNumber?.toString() ?? '0';
  }

  /// Return a total number of over due work items
  String get overDueWorkItemsNumber {
    int _overDueWorkItemsNumber = 0;
    for (int i=0;i<initiatives.length;i++) {
      for (int ii=0;ii<initiatives[i].workItems.length;ii++) {
        if (initiatives[i].workItems[ii].isOverdue) {
          _overDueWorkItemsNumber++;
        }
      }
    }
    return _overDueWorkItemsNumber?.toString() ?? '0';
  }
}
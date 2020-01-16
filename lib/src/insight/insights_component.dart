// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.ExampleSelectionOptions

import 'package:angular/angular.dart';

import 'package:angular_router/angular_router.dart';

import 'package:angular_components/scorecard/scoreboard.dart';
import 'package:angular_components/scorecard/scorecard.dart';

import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';

import 'package:auge_server/domain/objective/objective.dart';
import 'package:auge_server/domain/work/work.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/src/group/group_service.dart';
import 'package:auge_web/src/filter/filter_component.dart';
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/src/work/work_service.dart';
import 'package:auge_web/services/app_routes.dart';

import 'package:auge_server/shared/message/messages.dart';

@Component(
  selector: 'auge-insights',
  providers: const [ObjectiveService, WorkService, GroupService, UserService],
    styleUrls: const ['insights_component.css'],
    templateUrl: 'insights_component.html',
  directives: const [
    coreDirectives,
    ScoreboardComponent,
    ScorecardComponent,
    MaterialButtonComponent,
    MaterialIconComponent,
    FilterComponent,
  ])

class InsightsComponent with CanReuse implements OnActivate  {

  final ScoreboardType selectable = ScoreboardType.selectable;

  AuthService _authService;
  AppLayoutService _appLayoutService;
  final ObjectiveService _objectiveService;
  final WorkService _workService;
  final Router _router;

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

  List<Objective> _objectives = [];
  List<Work> _works = [];
  List<FilterOption> groupFilterOptions;
  List<String> groupsIdSelectedToFilter = [];
  List<FilterOption> leaderFilterOptions;
  List<String> usersIdSelectedToFilter = [];

  List<String> initialFilterOptionsIdsSelected = [];

  InsightsComponent(this._authService, this._appLayoutService, this._objectiveService, this._workService, this._router);

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

    _appLayoutService.enabledSearch = false;
    _appLayoutService.headerTitle = InsightMsg.label(InsightMsg.insightsLabel);

    try {
      if (_authService.authorizedOrganization != null) {
        // Groups to filter
        //groupsToFilter = await _groupService.getGroups(_groupService.authService.authorizedOrganization.id);

        // Users to filter
        //usersToFilter = await _userService.getUsers(_userService.authService.authorizedOrganization.id);

        // Objectives
        List<Objective> objectivesAux;

        objectivesAux = await _objectiveService.getObjectives(
            _authService.authorizedOrganization.id, withMeasures: true);

        // Works
        List<Work> worksAux;
        worksAux = await _workService.getWorks(
            _authService.authorizedOrganization.id, withWorkItems: true);

        // Select options to filter.
        Map<String, FilterOption> groups = {};
        Map<String, FilterOption> leaders = {};
        for (int i = 0;i<objectivesAux.length;i++) {
          groups.putIfAbsent(objectivesAux[i].group?.id, () => FilterOption(objectivesAux[i].group?.id, objectivesAux[i].group?.name));
          leaders.putIfAbsent(objectivesAux[i].leader?.id, () => FilterOption(objectivesAux[i].leader?.id, objectivesAux[i].leader?.name));
        }
        for (int i = 0;i<worksAux.length;i++) {
          groups.putIfAbsent(worksAux[i].group?.id, () => FilterOption(worksAux[i].group?.id, worksAux[i].group?.name));
          leaders.putIfAbsent(worksAux[i].leader?.id, () => FilterOption(worksAux[i].leader?.id, worksAux[i].leader?.name));
        }

        List<FilterOption> groupFilterOptionsAux = groups.values.toList();
        if (groupFilterOptionsAux.length > 1)  groupFilterOptionsAux.sort((a, b) => a.name == null ? 1 : b.name == null ? -1 : a.name.compareTo(b.name));

        List<FilterOption> leaderFilterOptionsAux = leaders.values.toList();
        if (leaderFilterOptionsAux.length > 1)  leaderFilterOptionsAux.sort((a, b) => a.name == null ? 1 : b.name == null ? -1 : a.name.compareTo(b.name));

        groupFilterOptions = groupFilterOptionsAux;
        leaderFilterOptions = leaderFilterOptionsAux;

        // Select all with empty list
        initialFilterOptionsIdsSelected = [];

        _objectives = objectivesAux;
        _works = worksAux;

      }

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  aggregateObjectivesMeasurement() {

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

  aggregateWorksMeasurement() {

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
        if (works[i].workItems[ii].completed == 100) {
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


  List<Objective> get objectives {
    List<Objective> objectiveFiltred;

    objectiveFiltred = (usersIdSelectedToFilter.isEmpty) || groupsIdSelectedToFilter.isEmpty ? [] : _objectives.where(
            (t) => (groupsIdSelectedToFilter.contains(t.group?.id))
            && (usersIdSelectedToFilter.contains(t.leader?.id)) ).toList();

    return objectiveFiltred;
  }

  List<Work> get works {
    List<Work> workFiltred;

    workFiltred = (usersIdSelectedToFilter.isEmpty) || groupsIdSelectedToFilter.isEmpty ? [] : _works.where(
            (t) => (groupsIdSelectedToFilter.contains(t.group?.id))
            && (usersIdSelectedToFilter.contains(t.leader?.id)) ).toList();

    return workFiltred;
  }



/*
  /// Return overall progress
  int get overallProgress {
    int _sumOverallProgress = 0;
    for (int i=0;i<objectives.length;i++) {
      _sumOverallProgress = _sumOverallProgress + objectives[i].progress ?? 0;
    }
    return objectives.length > 0 && _sumOverallProgress > 0 ? (_sumOverallProgress ~/ objectives.length) : 0;
  }
*/

/*
  /// Return a total number of objectives
  String get objectivesNumber {
    return objectives?.length?.toString() ?? '0';
  }
*/

/*
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

 */

/*
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

 */

/*
  /// Return a total number of measures
  String get measuresNumber {
    int _measuresNumber = 0;
    for (int i=0;i<objectives.length;i++) {
      _measuresNumber = _measuresNumber + objectives[i].measures.length;
    }
    return _measuresNumber?.toString() ?? '0';
  }

 */
/*
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
*/
/*
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
*/

/*
  /// Return a total number of works
  String get worksNumber {
    return works.length?.toString() ?? '0';
  }
 */
/*
  /// Return a total number of works completed = all work items completed
  String get completedWorksNumber {

    int _completedWorksNumber = 0;

    for (int i=0;i<works.length;i++) {
      int _completedWorkWorkItemsNumber = 0;
      for (int ii=0;ii<works[i].workItems.length;ii++) {
        if (works[i].workItems[ii].completed == 100) {
          _completedWorkWorkItemsNumber++;
        }
      }
      if (works[i].workItems.length != 0 && works[i].workItems.length == _completedWorkWorkItemsNumber) {
        _completedWorksNumber++;
      }
    }
    return _completedWorksNumber?.toString() ?? '0';
  }
*/

/*
  /// Return a total number of works with over due work items
  String get overDueWorksNumber {
    int _overDueWorksNumber = 0;
    for (int i=0;i<works.length;i++) {
      if (works[i].workItemsOverDueCount > 0) {
        _overDueWorksNumber++;
      }
    }
    return _overDueWorksNumber?.toString() ?? '0';
  }

 */

/*
  /// Return a total number of measures
  String get workItemsNumber {
    int _workItemsNumber = 0;
    for (int i=0;i<works.length;i++) {
      _workItemsNumber = _workItemsNumber + works[i].workItems.length;
    }
    return _workItemsNumber?.toString() ?? '0';
  }

 */

/*
  /// Return a total number of completed work items with progress equal 100%
  String get completedWorkItemsNumber {
    int _completedWorkItemsNumber = 0;
    for (int i=0;i<works.length;i++) {
      for (int ii=0;ii<works[i].workItems.length;ii++) {
        if (works[i].workItems[ii].completed == 100) {
          _completedWorkItemsNumber++;
        }
      }
    }
    return _completedWorkItemsNumber?.toString() ?? '0';
  }

 */

  /// Return a total number of over due work items
/*
  String get overDueWorkItemsNumber {
    int _overDueWorkItemsNumber = 0;
    for (int i=0;i<works.length;i++) {
      for (int ii=0;ii<works[i].workItems.length;ii++) {
        if (works[i].workItems[ii].isOverdue) {
          _overDueWorkItemsNumber++;
        }
      }
    }
    return _overDueWorkItemsNumber?.toString() ?? '0';
  }
 */


  groupChangeSelection(List<String> groupsIdSelected) {
    groupsIdSelectedToFilter = groupsIdSelected;

    aggregateObjectivesMeasurement();
    aggregateWorksMeasurement();
  }

  userChangeSelection(List<String> usersIdSelected) {
    usersIdSelectedToFilter = usersIdSelected;

    aggregateObjectivesMeasurement();
    aggregateWorksMeasurement();
  }


}
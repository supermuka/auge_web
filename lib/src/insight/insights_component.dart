// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.ExampleSelectionOptions

import 'package:angular/angular.dart';

import 'package:angular_router/angular_router.dart';

import 'package:angular_components/scorecard/scoreboard.dart';
import 'package:angular_components/scorecard/scorecard.dart';

import 'package:angular_components/material_icon/material_icon.dart';

import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_server/model/work/work.dart';
import 'package:auge_server/model/general/user.dart';
import 'package:auge_server/model/general/group.dart';

import 'package:auge_server/shared/message/messages.dart';
import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/src/group/group_service.dart';
import 'package:auge_web/src/user/user_filter_component.dart';
import 'package:auge_web/src/group/group_filter_component.dart';
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/src/work/work_service.dart';
import 'package:auge_web/services/app_routes.dart';

@Component(
  selector: 'auge-insights',
  providers: const [UserService, GroupService, ObjectiveService, WorkService],
    styleUrls: const ['insights_component.css'],
    templateUrl: 'insights_component.html',
  directives: const [
    coreDirectives,
    ScoreboardComponent,
    ScorecardComponent,
    MaterialIconComponent,
    GroupFilterComponent,
    UserFilterComponent,
  ])

class InsightsComponent with CanReuse implements OnActivate  {

  final ScoreboardType selectable = ScoreboardType.selectable;

  AuthService _authService;
  AppLayoutService _appLayoutService;
  final ObjectiveService _objectiveService;
  final WorkService _workService;
  final Router _router;

  List<Objective> _objectives = List();
  List<Work> works = List();
  List<Group> groupsSelectedToFilter = [];
  List<User> usersSelectedToFilter = [];

  InsightsComponent(this._authService, this._appLayoutService, this._objectiveService, this._workService, this._router);

  // Define messages and labels
  static final String objectivesOverallLabel = InsightMsg.label('Objectives Overall');
  static final String objectivesMeasuresLabel = InsightMsg.label('Objectives and Measures');
  static final String worksWorkItemsLabel = InsightMsg.label('Works and Work Items');

  static final String objectivesLabel =  InsightMsg.label('Objectives');
  static final String objectivesDescriptionLabel =  InsightMsg.label('Number total of objectives');

  static final String objectivesAchievedLabel =  InsightMsg.label('Objectives Achieved');
  static final String objectivesAchievedDescriptionLabel =  InsightMsg.label('Objectives over 70% progress');

  static final String objectivesRequiringAttentionLabel =  InsightMsg.label('Objectives Requiring Attention');
  static final String objectivesRequiringAttentionDescriptionLabel =  InsightMsg.label('Objectives below 30% progress');

  static final String measuresLabel =  InsightMsg.label('Measures');
  static final String measuresDescriptionLabel =  InsightMsg.label('Number total of measures');

  static final String measuresAchievedLabel =  InsightMsg.label('Measures Achieved');
  static final String measuresAchievedDescriptionLabel =  InsightMsg.label('Measures over 70% progress');

  static final String measuresRequiringAttentionLabel =  InsightMsg.label('Measures Requiring Attention');
  static final String measuresRequiringAttentionDescriptionLabel =  InsightMsg.label('Measures below 30% progress');

  static final String worksLabel =  InsightMsg.label('Works');
  static final String worksDescriptionLabel =  InsightMsg.label('Number total of works');

  static final String worksCompletedLabel =  InsightMsg.label('Works Completed');
  static final String worksCompletedDescriptionLabel =  InsightMsg.label('Works with 100% work items completed');

  static final String worksRequiringAttentionLabel =  InsightMsg.label('Works Requiring Attention');
  static final String worksRequiringAttentionDescriptionLabel =  InsightMsg.label('Works with over due work items');

  static final String workItemsLabel =  InsightMsg.label('Work Items');
  static final String workItemsDescriptionLabel =  InsightMsg.label('Number total of work items');

  static final String workItemsCompletedLabel =  InsightMsg.label('Work Items Completed');
  static final String workItemsCompletedDescriptionLabel =  InsightMsg.label('Work items with 100% progress');

  static final String workItemsRequiringAttentionLabel =  InsightMsg.label('Work Items Requiring Attention');
  static final String workItemsRequiringAttentionDescriptionLabel =  InsightMsg.label('Over due work items');

  @override
  void onActivate(RouterState previous, RouterState current) async {

    if (_authService.authorizedOrganization == null || _authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }

    _appLayoutService.enabledSearch = false;
    _appLayoutService.headerTitle = AppLayoutMsg.label('Insights');

    try {
      if (_authService.authorizedOrganization != null) {
        _objectives = await _objectiveService.getObjectives(
            _authService.authorizedOrganization.id, withMeasures: true);
        works = await _workService.getWorks(
            _authService.authorizedOrganization.id, withWorkItems: true);
      }


    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  // StringSelectionOptions<Group> get groupOptions =>  GroupSelectionOptions(_groups);

  List<Objective> get objectives {
    List<Objective> objectiveFiltred;

    objectiveFiltred = (groupsSelectedToFilter.isEmpty) ? [] : _objectives.where((t) => groupsSelectedToFilter.any((tg) => tg.id == t.group.id)  ).toList();

    objectiveFiltred = (usersSelectedToFilter.isEmpty) ? [] : objectiveFiltred.where((t) => usersSelectedToFilter.any((tg) => tg.id == t.leader.id)  ).toList();

    return objectiveFiltred;
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

  /// Return a total number of works
  String get worksNumber {
    return works.length?.toString() ?? '0';
  }

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

  /// Return a total number of measures
  String get workItemsNumber {
    int _workItemsNumber = 0;
    for (int i=0;i<works.length;i++) {
      _workItemsNumber = _workItemsNumber + works[i].workItems.length;
    }
    return _workItemsNumber?.toString() ?? '0';
  }

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

  /// Return a total number of over due work items
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

  groupChangeSelection(List<Group> groupsSeleted) {
    groupsSelectedToFilter = groupsSeleted;
  }

  userChangeSelection(List<User> usersSeleted) {
    usersSelectedToFilter = usersSeleted;
  }

}
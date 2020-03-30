// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';
import 'dart:html' as html;

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'package:angular_components/laminate/enums/alignment.dart';

import 'package:angular_components/material_button/material_fab.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_menu/material_menu.dart';
import 'package:angular_components/model/ui/icon.dart';
import 'package:angular_components/model/menu/menu.dart';
import 'package:angular_components/material_select/material_dropdown_select.dart';
import 'package:angular_components/material_toggle/material_toggle.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:angular_components/scorecard/scoreboard.dart';

import 'package:auge_shared/domain/general/authorization.dart';
import 'package:auge_shared/domain/objective/objective.dart';

import 'package:auge_shared/message/messages.dart';
import 'package:auge_shared/message/domain_messages.dart';

import 'package:auge_web/src/history_timeline/history_timeline_component.dart';
import 'package:auge_web/src/measure/measures_component.dart';
import 'package:auge_web/src/work/works_summary_component.dart';
import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/group/group_service.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/route/app_routes.dart';

import 'package:auge_web/src/filter/filter_component.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/objective/objective_detail_component.template.dart' as objective_detail_component;
import 'package:auge_web/src/measure/measure_detail_component.template.dart' as measure_detail_component;
import 'package:auge_web/src/measure/measure_progress_component.template.dart' as measure_progress_component;


@Component(
    selector: 'auge-objectives',
    providers: const [ObjectiveService, GroupService, UserService, HistoryTimelineService],
    templateUrl: 'objectives_component.html',
    styleUrls: const [
      'objectives_component.css'
    ],
    directives: const [
      coreDirectives,
      routerDirectives,
      MaterialFabComponent,
      MaterialIconComponent,
      MaterialDropdownSelectComponent,
      MaterialToggleComponent,
      MaterialExpansionPanel,
      MaterialExpansionPanelSet,
      MaterialTooltipDirective,
      MaterialMenuComponent,
      HistoryTimelineComponent,
      WorksSummaryComponent,
      MeasuresComponent,
      FilterComponent,
      ScoreboardComponent,
    ],
    pipes: const [commonPipes])

class ObjectivesComponent with CanReuse implements /*  AfterViewInit, */  OnActivate, OnDestroy {

  final AppLayoutService _appLayoutService;
  final ObjectiveService _objectiveService;
  //final SearchService _searchService;
  final HistoryTimelineService _historyTimelineService;
  final Router _router;

  final List<RouteDefinition> routes = [
    RouteDefinition(
      routePath: AppRoutes.objectiveAddRoute,
      component: objective_detail_component.ObjectiveDetailComponentNgFactory,
    ),
    RouteDefinition(
      routePath: AppRoutes.objectiveEditRoute,
      component: objective_detail_component.ObjectiveDetailComponentNgFactory,
    ),
    RouteDefinition(
      routePath: AppRoutes.measureAddRoute,
      component: measure_detail_component.MeasureDetailComponentNgFactory,
    ),
    RouteDefinition(
      routePath: AppRoutes.measureEditRoute,
      component: measure_detail_component.MeasureDetailComponentNgFactory,
    ),
    RouteDefinition(
      routePath: AppRoutes.measureProgressesRoute,
      component: measure_progress_component.MeasureProgressComponentNgFactory,
    ),
    RouteDefinition(
      routePath: AppRoutes.measureProgressesAddRoute,
      component: measure_progress_component.MeasureProgressComponentNgFactory,
    ),

  ];

 // Map<String, String> queryParametersToFoward;

  List<Objective> _objectives = [];
 // List<Objective> get objectiveFilterOptions => _objectives;
  List<FilterOption> objectiveFilterOptions;
  List<FilterOption> groupFilterOptions;
  List<FilterOption> leaderFilterOptions;

  List<String> objectivesIdSelectedToFilter = [];
  List<String> groupsIdSelectedToFilter = [];
  List<String> leadersIdSelectedToFilter = [];

  // Just used to default and controler when dispatcher ´set´
  List<String> initialFilterOptionsIdsSelected;
  List<String> initialFilterOptionsIdsSelectedObjectives;

  // Map<Objective, bool> expandedControl = Map();
  String expandedObjectiveId;
  Objective selectedObjective;
  String initialObjectiveId;
  bool hasFilter = false;
  //String specificObjectiveId;
  String selectedView = 'list';
  TimelineParam timelineParam = TimelineParam();

  String mainColWidth = '100%';
  // Just to pass information about timeline visible to sub-components
  bool _timelineVisible = false;

  MenuModel<MenuItem> menuModel;

    // Define messages and labels
  static final String objectiveLabel = ObjectiveMsg.label(ObjectiveMsg.objectiveLabel);
  static final String sortedByLabel = ObjectiveMsg.label(ObjectiveMsg.sortedByLabel);

  static final String editButtonLabel = CommonMsg.buttonLabel(CommonMsg.editButtonLabel);
  static final String deleteButtonLabel = CommonMsg.buttonLabel(CommonMsg.deleteButtonLabel);

  static final String timelineLabel = TimelineItemdMsg.label(TimelineItemdMsg.timelineLabel);

  static final String ultimateObjectiveLabel = ObjectiveMsg.label(ObjectiveMsg.ultimateObjectiveLabel);

  static final String nameLabel = ObjectiveDomainMsg.fieldLabel(Objective.nameField);
  static final String alignedToLabel = ObjectiveDomainMsg.fieldLabel(Objective.alignedToField); // FieldMsg.label('${Objective.className}.${Objective.alignedToField}');
  static final String leaderLabel =  ObjectiveDomainMsg.fieldLabel(Objective.leaderField); //FieldMsg.label('${Objective.className}.${Objective.leaderField}');
  static final String groupLabel =  ObjectiveDomainMsg.fieldLabel(Objective.groupField); //FieldMsg.label('${Objective.className}.${Objective.groupField}');
  static final String startDateLabel = ObjectiveDomainMsg.fieldLabel(Objective.startDateField); // FieldMsg.label('${Objective.className}.${Objective.startDateField}');
  static final String endDateLabel =  ObjectiveDomainMsg.fieldLabel(Objective.endDateField); // FieldMsg.label('${Objective.className}.${Objective.endDateField}');
  static final String headerTitle = ObjectiveMsg.label(ObjectiveMsg.objectivesLabel);

  final objectivesSortedByOptions = [nameLabel, groupLabel, leaderLabel, startDateLabel, endDateLabel];

  String _sortedBy = nameLabel;

  final preferredTooltipPositions = const [RelativePosition.AdjacentLeft, RelativePosition.OffsetBottomLeft, /* RelativePosition.OffsetBottomRight */];

  ObjectivesComponent(this._appLayoutService, this._objectiveService, /* this._searchService, */ this._historyTimelineService, this._router) {
    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(editButtonLabel, icon: new Icon('edit') , actionWithContext: (_) => goToDetail()), new MenuItem(deleteButtonLabel, icon: new Icon('delete'), actionWithContext: (_) => delete())])], icon: new Icon('menu'));
  }

  set sortedBy(String sortedBy) {
    _sortedBy = sortedBy;
    _sortObjectives(_objectives);
  }

  get sortedBy => _sortedBy;

  bool get timelineVisible {
    return _timelineVisible;
  }
  set timelineVisible(bool visible) {
    _timelineVisible = visible;
    timelineParam.timelineVisible = _timelineVisible;
    if (_timelineVisible) {
      mainColWidth = '75%';
      _historyTimelineService.refreshHistory(SystemModule.objectives.index);
    } else {
      mainColWidth = '100%';
    }
  }

  void onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {

    if (_objectiveService.authService.authorizedOrganization == null || _objectiveService.authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }

    //queryParametersToFoward = routerStateCurrent.queryParameters;

    //initialFilterOptionsIdsSelected = null;
    //initialFilterOptionsIdsSelectedObjectives = null;
/*
    if (routerStatePrevious.toUrl() == AppRoutes.objectivesRoute.toUrl() ||
        (routerStatePrevious.toUrl() == AppRoutes.objectiveAddRoute.toUrl() && !routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.objectiveIdQueryParameter) ||
            routerStatePrevious.toUrl() == AppRoutes.objectiveEditRoute.toUrl()) && !routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.objectiveIdQueryParameter)) return;
*/
    // Expand panel whether [Id] objective is informed.
    if (routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.objectiveIdQueryParameter)) {
      initialObjectiveId = routerStateCurrent.queryParameters[AppRoutesQueryParam.objectiveIdQueryParameter];

      // Filter ids informed.
      /*
      if (routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.filter)) {
        hasFilter = (routerStateCurrent.queryParameters[AppRoutesQueryParam.filter].toLowerCase() == 'true');
      }
       */

      // Used just first time, to remove queryParam initialObjectiveId.
  /*
      _router.navigate(routerStateCurrent.path, NavigationParams(queryParameters: Map.from(routerStateCurrent.queryParameters)..remove(AppRoutesQueryParam.objectiveIdQueryParameter)..remove(AppRoutesQueryParam.filter), replace: true));
      return;
   */
    }


    _appLayoutService.headerTitle = headerTitle;

    // _appLayoutService.enabledSearch = true;

    try {
      // Groups to filter
    //  groupsToFilter = await _groupService.getGroups(_groupService.authService.authorizedOrganization.id);

      // Users to filter
    //  usersToFilter = await _userService.getUsers(_userService.authService.authorizedOrganization.id);

      List<Objective> objectivesAux = [];
      objectivesAux = await getObjetives( /*specificObjectiveId */);
     // _sortObjectives();



      // Select options to filter.
      Map<String, FilterOption> objectives = {};
      Map<String, FilterOption> groups = {};
      Map<String, FilterOption> leaders = {};
      for (int i = 0;i<objectivesAux.length;i++) {
        objectives.putIfAbsent(objectivesAux[i].id, () => FilterOption(objectivesAux[i].id, objectivesAux[i].name));
        groups.putIfAbsent(objectivesAux[i].group?.id, () => FilterOption(objectivesAux[i].group?.id, objectivesAux[i].group?.name));
        leaders.putIfAbsent(objectivesAux[i].leader?.id, () => FilterOption(objectivesAux[i].leader?.id, objectivesAux[i].leader?.name));
      }
      List<FilterOption> objectiveFilterOptionsAux = objectives.values.toList();
      if (objectiveFilterOptionsAux.length > 1)  objectiveFilterOptionsAux.sort((a, b) => a.name == null ? 1 : b.name == null ? -1 : a.name.compareTo(b.name));

      List<FilterOption> groupFilterOptionsAux = groups.values.toList();
      if (groupFilterOptionsAux.length > 1)  groupFilterOptionsAux.sort((a, b) => a.name == null ? 1 : b.name == null ? -1 : a.name.compareTo(b.name));

      List<FilterOption> leaderFilterOptionsAux = leaders.values.toList();
      if (leaderFilterOptionsAux.length > 1)  leaderFilterOptionsAux.sort((a, b) => a.name == null ? 1 : b.name == null ? -1 : a.name.compareTo(b.name));

      objectiveFilterOptions =  objectiveFilterOptionsAux;
      groupFilterOptions = groupFilterOptionsAux;
      leaderFilterOptions = leaderFilterOptionsAux;

      // If not have initial id, set field to empty list `[]` to dispatch angular behaviour
      initialFilterOptionsIdsSelected = [];

      if (initialObjectiveId != null) {
        initialFilterOptionsIdsSelectedObjectives = [initialObjectiveId];

     /*   if (hasFilter) {
          initialFilterOptionsIdsSelectedObjectives = [initialObjectiveId];

        } else {
          initialFilterOptionsIdsSelectedObjectives = null;
        }
*/
      //expandedObjectiveId = initialObjectiveId;
  //    } else {
     //   initialFilterOptionsIdsSelectedObjectives = [];
      } else {
          if (initialFilterOptionsIdsSelectedObjectives == null || initialFilterOptionsIdsSelectedObjectives.isEmpty) {
            initialFilterOptionsIdsSelectedObjectives = [];
          } else {
            // Need to make to dispatcher angular input
            List<String> l = initialFilterOptionsIdsSelectedObjectives;
            initialFilterOptionsIdsSelectedObjectives = []..addAll(l);


          }

       }


      _objectives = objectivesAux;

      if (timelineVisible) _historyTimelineService.refreshHistory(SystemModule.objectives.index);

    //  if (routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.objectiveIdQueryParameter)) {
    //    setExpandedObjectiveId(initialObjectiveId, true);
    //  }
/*

      // TODO: Needs to find a better way to set null to `expandedObjectiveId`
      if (expandedObjectiveId != null && !(routerStatePrevious.routePath.path == routerStateCurrent.routePath.parent.path || routerStateCurrent.routePath.path == routerStatePrevious.routePath.parent.path)) {
        expandedObjectiveId = null;
      } else {
        */
        if (initialObjectiveId != null) {
          setExpandedObjectiveId(initialObjectiveId, true);
        }
    //  }

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }
/*
  Future<bool> canReuse(RouterState current, RouterState next) async {

    // To treat CanReuse. Just define cache 'true' when this component is called from/to yours children
    if (current.routePath?.path == next.routePath?.parent?.path || current.routePath?.parent?.path == next.routePath?.path) {
      return true;
    } else {
      return false;
    }

  }
*/

  Future<List<Objective>> getObjetives([String objectiveId]) async {
    List<Objective> objectivesAux =  await _objectiveService.getObjectives(
        _objectiveService.authService.authorizedOrganization.id, objectiveId: objectiveId, withMeasures: true, withProfile: true);

    _sortObjectives(objectivesAux);
    return objectivesAux;
  }

  List<Objective> get objectives {

    List<Objective> objectiveFilered;

    objectiveFilered = (objectivesIdSelectedToFilter.isEmpty || groupsIdSelectedToFilter.isEmpty || leadersIdSelectedToFilter.isEmpty) ? [] : _objectives.where(
            (t) => objectivesIdSelectedToFilter.contains(t.id)
                  && (groupsIdSelectedToFilter.contains(t.group?.id))
                  && (leadersIdSelectedToFilter.contains(t.leader?.id))).toList();

    return objectiveFilered;
  }

  // This is necessary, to control when this component is recalled when navagate to
  /*
  @override
  void onDeactivate(RouterState current, RouterState next) {
    initialObjectivesIdSelectedToFilter = null;
    expandedObjectiveId = null;
  }
*/

  @override
  ngOnDestroy() async {
    _appLayoutService.enabledSearch = false;
  }

  void selectObjective(Objective objective) {
    selectedObjective = objective;
  }

  /// Call delete
  void delete() async {
    try {

      await _objectiveService.deleteObjective(selectedObjective);
      _objectives.remove(selectedObjective);
      //objectives.timeline = await _objectiveService.getTimeline(objective.id);
      _historyTimelineService.refreshHistory(SystemModule.objectives.index);

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  String userUrlImage(String userProfileImage) {
    return common_service.userUrlImage(userProfileImage);
  }

  String colorFromUuid(String id) {
    return common_service.colorFromUuid(id);
  }

  String firstLetter(String name) {
    return common_service.firstLetter(name);
  }

  // Sorted by
  void _sortObjectives(List<Objective> objectivesToSort) {
    if (_sortedBy == nameLabel) {
      objectivesToSort.sort((a, b) => a?.name == null || b?.name == null ? -1 : a.name.compareTo(b.name));
    } else if (_sortedBy == groupLabel) {
      objectivesToSort.sort((a, b) => a?.group == null || b?.group == null ? -1 : a.group.name.compareTo(b.group.name));
    } else if (_sortedBy == leaderLabel) {
      objectivesToSort.sort((a, b) => a?.leader == null || b?.leader == null ? -1 : a.leader.name.compareTo(b.leader.name));
    } else if (_sortedBy == startDateLabel) {
      objectivesToSort.sort((a, b) => a?.startDate == null || b?.startDate == null ? -1 : a.startDate.compareTo(b.startDate));
    } else if (_sortedBy == endDateLabel) {
      objectivesToSort.sort((a, b) =>
      a?.endDate == null || b?.endDate == null
          ? -1
          : a.endDate.compareTo(b.endDate));
    }
  }

  void scrollInit(bool event, html.HtmlElement element) {
    if (event &&  initialObjectiveId != null) {

      if (element != null) {

        //element.scrollIntoView(html.ScrollAlignment.TOP);
        // Modal, needs to await the dom elements creation.

        Future.delayed(Duration.zero, () {

            element.scrollIntoView(html.ScrollAlignment.TOP);
            initialObjectiveId = null;

        });
      }
    }
  }

  setExpandedObjectiveId(String objectiveId, bool expanded) {
    if (expanded) {
      expandedObjectiveId = objectiveId;
    } else {
      expandedObjectiveId = null;
    }
  }

  String composeTooltip(String label, String name) {
    return '${label} ${name}';
  }

  void goToDetail() {
    if (selectedObjective == null) {
      _router.navigate(AppRoutes.objectiveAddRoute.toUrl(), NavigationParams(replace:  true));

    } else {
      _router.navigate(AppRoutes.objectiveEditRoute.toUrl(parameters: { AppRoutesParam.objectiveIdParameter: selectedObjective.id }), NavigationParams(replace:  true));
    }
  }

  objectiveChangeSelection(List<String> objectivesIdSelected) {
    objectivesIdSelectedToFilter = objectivesIdSelected;
  }

  groupChangeSelection(List<String> groupsIdSelected) {
    groupsIdSelectedToFilter = groupsIdSelected;
  }

  leaderChangeSelection(List<String> leadersIdSelected) {
    leadersIdSelectedToFilter = leadersIdSelected;
  }
}
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

import 'package:angular_components/material_toggle/material_toggle.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:angular_components/scorecard/scoreboard.dart';
import 'package:angular_components/material_checkbox/material_checkbox.dart';

import 'package:auge_shared/domain/general/authorization.dart';
import 'package:auge_shared/domain/objective/objective.dart';

import 'package:auge_shared/message/messages.dart';
import 'package:auge_shared/message/domain_messages.dart';

import 'package:auge_web/src/measure/measures_component.dart';
import 'package:auge_web/src/work/works_summary_component.dart';
import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/search_filter/search_filter_service.dart';
import 'package:auge_web/route/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge_web/src/objective/objectives_filter_component.template.dart' as objectives_filter_component;
import 'package:auge_web/src/objective/objective_detail_component.template.dart' as objective_detail_component;
import 'package:auge_web/src/measure/measure_detail_component.template.dart' as measure_detail_component;
import 'package:auge_web/src/measure/measure_progress_component.template.dart' as measure_progress_component;


@Component(
    selector: 'auge-objectives',
    providers: const [ObjectiveService /*, GroupService, UserService*/],
    templateUrl: 'objectives_component.html',
    styleUrls: const [
      'objectives_component.css'
    ],
    directives: const [
      coreDirectives,
      routerDirectives,
      MaterialFabComponent,
      MaterialIconComponent,
      MaterialToggleComponent,
      MaterialExpansionPanel,
      MaterialExpansionPanelSet,
      MaterialTooltipDirective,
      MaterialMenuComponent,
      WorksSummaryComponent,
      MeasuresComponent,
      ScoreboardComponent,
      MaterialCheckboxComponent,
    ],
    pipes: const [commonPipes])

class ObjectivesComponent with CanReuse implements /*  AfterViewInit, */ OnActivate /*, OnDestroy */ {

  final AppLayoutService _appLayoutService;
  final ObjectiveService _objectiveService;
  final SearchFilterService _searchFilterService;
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
    RouteDefinition(
      routePath: AppRoutes.objectivesFilterRoute,
      component: objectives_filter_component.ObjectivesFilterComponentNgFactory,
    ),
  ];

 // Map<String, String> queryParametersToFoward;

  List<Objective> _objectives = [];
 // List<Objective> get objectiveFilterOptions => _objectives;
  List<String> objectivesIdSelectedToFilter = [];
  List<String> groupsIdSelectedToFilter = [];
  List<String> leadersIdSelectedToFilter = [];

  //List<String> initialFilterOptionsIdsSelected;
  List<String> initialFilterOptionsIdsSelectedObjectives;

  // Map<Objective, bool> expandedControl = Map();
  String expandedObjectiveId;
  Objective selectedObjective;
  String initialObjectiveId;
  bool filterIds = false;
  //String specificObjectiveId;

  MenuModel<MenuItem> menuModel;

    // Define messages and labels
  static final String objectiveLabel = ObjectiveMsg.label(ObjectiveMsg.objectiveLabel);


  static final String editButtonLabel = CommonMsg.buttonLabel(CommonMsg.editButtonLabel);
  static final String deleteButtonLabel = CommonMsg.buttonLabel(CommonMsg.deleteButtonLabel);

  static final String ultimateObjectiveLabel = ObjectiveMsg.label(ObjectiveMsg.ultimateObjectiveLabel);

  static final String nameLabel = ObjectiveDomainMsg.fieldLabel(Objective.nameField);
  static final String alignedToLabel = ObjectiveDomainMsg.fieldLabel(Objective.alignedToField); // FieldMsg.label('${Objective.className}.${Objective.alignedToField}');
  static final String leaderLabel =  ObjectiveDomainMsg.fieldLabel(Objective.leaderField); //FieldMsg.label('${Objective.className}.${Objective.leaderField}');
  static final String groupLabel =  ObjectiveDomainMsg.fieldLabel(Objective.groupField); //FieldMsg.label('${Objective.className}.${Objective.groupField}');
  static final String startDateLabel = ObjectiveDomainMsg.fieldLabel(Objective.startDateField); // FieldMsg.label('${Objective.className}.${Objective.startDateField}');
  static final String endDateLabel =  ObjectiveDomainMsg.fieldLabel(Objective.endDateField); // FieldMsg.label('${Objective.className}.${Objective.endDateField}');
  static final String headerTitle = ObjectiveMsg.label(ObjectiveMsg.objectivesLabel);
  static final String archivedLabel = ObjectiveDomainMsg.fieldLabel(Objective.archivedField); // FieldMsg.label('${Objective.className}.${Objective.archivedField}');

  final preferredTooltipPositions = const [RelativePosition.AdjacentLeft, RelativePosition.OffsetBottomLeft, /* RelativePosition.OffsetBottomRight */];

  ObjectivesComponent(this._appLayoutService, this._objectiveService, this._searchFilterService, this._router) {
    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(editButtonLabel, icon: new Icon('edit') , actionWithContext: (_) => goToDetail()), new MenuItem(deleteButtonLabel, icon: new Icon('delete'), actionWithContext: (_) => delete())])], icon: new Icon('menu'));
  }

  @override
  void onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {

    if (_objectiveService.authService.authorizedOrganization == null || _objectiveService.authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }

    // If previous path equal current parent path, doent´s need to call this again. I.e. add or edit detail.
    if (routerStatePrevious.routePath.path == routerStateCurrent.routePath.parent.path) return;

    // Expand panel whether [Id] objective is informed.
    if (routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.objectiveIdQueryParameter)) {
      initialObjectiveId = routerStateCurrent.queryParameters[AppRoutesQueryParam.objectiveIdQueryParameter];

      // Filter ids informed.
      if (routerStateCurrent.queryParameters.containsKey(AppRoutesQueryParam.filter)) {
        filterIds = (routerStateCurrent.queryParameters[AppRoutesQueryParam.filter].toLowerCase() == 'true');
      }

      // Used just first time, to remove queryParam initialObjectiveId.
    }

    _appLayoutService.headerTitle = headerTitle;
    _appLayoutService.systemModuleIndex = SystemModule.objectives.index;

    // Enabled search and filter
    _searchFilterService.enableSearch = true;
    _searchFilterService.enableFilter = true;
    _searchFilterService.filterRouteUrl = AppRoutes.objectivesFilterRoute.toUrl();

    _searchFilterService.filteredItems = _objectiveService.objectivesFilterOrder.filteredItems;



    if (initialObjectiveId != null && filterIds) {
      initialFilterOptionsIdsSelectedObjectives = [initialObjectiveId];
    } else if (!filterIds) {
      initialFilterOptionsIdsSelectedObjectives = null;
    }

    try {

      List<Objective> objectivesAux = [];
      objectivesAux = await _objectiveService.getObjectives(
          _objectiveService.authService.authorizedOrganization.id,
          objectiveId: initialObjectiveId,
          withMeasures: true,
          withProfile: true,
          withArchived: _objectiveService.objectivesFilterOrder.archived,
          groupIds: _objectiveService.objectivesFilterOrder.groupIds?.toList(),
          leaderUserIds: _objectiveService.objectivesFilterOrder.leaderUserIds?.toList());
      /*
      objectivesAux = await getObjetives(withArchived: _objectiveService.objectiveFilterOrder.archived,
          groupIds: _objectiveService.objectiveFilterOrder.groupIds,
          leaderUserIds: _objectiveService.objectiveFilterOrder.leaderUserIds);
*/
      _orderObjectives(objectivesAux, _objectiveService.objectivesFilterOrder.orderedBy);

      _objectives = objectivesAux;

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }

    if (initialObjectiveId != null) {
      setExpandedObjectiveId(initialObjectiveId, true);
    }

  }

  void getData() async {

  }
/*
  Future<List<Objective>> getObjetives({String objectiveId, bool withArchived, Set<String> groupIds, Set<String> leaderUserIds}) async {
    List<Objective> objectivesAux =  await _objectiveService.getObjectives(
        _objectiveService.authService.authorizedOrganization.id,
        objectiveId: objectiveId,
        withMeasures: true,
        withProfile: true,
        withArchived: withArchived,
        groupIds: groupIds?.toList(),
        leaderUserIds: leaderUserIds?.toList());

    return objectivesAux;
  }
*/


  List<Objective> get objectives {
    return (_searchFilterService.searchTerm == null || _searchFilterService.searchTerm.isEmpty) ? _objectives : _objectives.where((test) => test.name.contains(_searchFilterService.searchTerm)).toList();

    /*
    List<Objective> objectiveFilered;

    objectiveFilered = (objectivesIdSelectedToFilter.isEmpty || groupsIdSelectedToFilter.isEmpty || leadersIdSelectedToFilter.isEmpty) ? [] : _objectives.where(
            (t) => objectivesIdSelectedToFilter.contains(t.id)
                  && (groupsIdSelectedToFilter.contains(t.group?.id))
                  && (leadersIdSelectedToFilter.contains(t.leader?.id))).toList();

    return objectiveFilered;
    */

  }

  // This is necessary, to control when this component is recalled when navagate to
  /*
  @override
  void onDeactivate(RouterState current, RouterState next) {
    initialObjectivesIdSelectedToFilter = null;
    expandedObjectiveId = null;
  }
*/
/*
  @override
  ngOnDestroy() async {
    _appLayoutService.enabledSearch = false;
  }

 */

  void selectObjective(Objective objective) {
    selectedObjective = objective;
  }

  /// Call delete
  void delete() async {
    try {

      await _objectiveService.deleteObjective(selectedObjective);
      _objectives.remove(selectedObjective);

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

  // Ordered by
  void _orderObjectives(List<Objective> objectivesToOrder, String orderedBy) {
    if (orderedBy == nameLabel) {
      objectivesToOrder.sort((a, b) => a?.name == null || b?.name == null ? -1 : a.name.compareTo(b.name));
    } else if (orderedBy == groupLabel) {
      objectivesToOrder.sort((a, b) => a?.group == null || b?.group == null ? -1 : a.group.name.compareTo(b.group.name));
    } else if (orderedBy == leaderLabel) {
      objectivesToOrder.sort((a, b) => a?.leader == null || b?.leader == null ? -1 : a.leader.name.compareTo(b.leader.name));
    } else if (orderedBy == startDateLabel) {
      objectivesToOrder.sort((a, b) => a?.startDate == null || b?.startDate == null ? -1 : a.startDate.compareTo(b.startDate));
    } else if (orderedBy == endDateLabel) {
      objectivesToOrder.sort((a, b) =>
      a?.endDate == null || b?.endDate == null
          ? -1
          : a.endDate.compareTo(b.endDate));
    }
  }

}
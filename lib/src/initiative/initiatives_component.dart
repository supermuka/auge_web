// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';
import 'dart:html';

import 'package:angular/angular.dart';

import 'package:angular_router/angular_router.dart';

import 'package:angular_components/material_button/material_fab.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_menu/material_menu.dart';
import 'package:angular_components/model/ui/icon.dart';
import 'package:angular_components/model/menu/menu.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_toggle/material_toggle.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:angular_components/material_select/material_dropdown_select.dart';

import 'package:auge_server/model/initiative/initiative.dart';
import 'package:auge_server/model/general/authorization.dart';

import 'package:auge_web/message/messages.dart';
import 'package:auge_web/message/model_messages.dart';
//import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/initiative/initiative_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/src/search/search_service.dart';
import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/history_timeline/history_timeline_service.dart';
import 'package:auge_web/src/initiative/initiatives_filter_component.dart';
import 'package:auge_web/src/initiative/initiative_summary_component.dart';
import 'package:auge_web/src/history_timeline/history_timeline_component.dart';
import 'package:auge_web/src/initiative/initiative_detail_component.dart';
import 'package:auge_web/src/work_item/work_items_component.dart';
import 'package:auge_web/src/work_item/work_items_list_component.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/services/app_routes.dart';

@Component(
    selector: 'auge-initiatives',
    providers: const [InitiativeService, ObjectiveService, HistoryTimelineService],
    directives: const [
      coreDirectives,
      routerDirectives,
      MaterialFabComponent,
      MaterialIconComponent,
      MaterialDropdownSelectComponent,
      MaterialTooltipDirective,
      MaterialExpansionPanel,
      MaterialExpansionPanelSet,
      MaterialToggleComponent,
      MaterialMenuComponent,
      InitiativesFilterComponent,
      InitiativeSummaryComponent,
      InitiativeDetailComponent,
      WorkItemsComponent,
      WorkItemsListComponent,
      HistoryTimelineComponent,
    ],
    templateUrl: 'initiatives_component.html',
    styleUrls: const [
      'initiatives_component.css'
    ])

class InitiativesComponent extends Object with CanReuse implements /* OnInit, */ OnActivate, OnDestroy {

  final InitiativeService _initiativeService;
  final ObjectiveService _objectiveService;
  final SearchService _searchService;
  final HistoryTimelineService _historyTimelineService;
  final Router _router;
  final AppLayoutService _appLayoutService;
 // final AuthService _authService;

  InitiativesFilterParam initiativesFilterParam;

  bool detailVisible = false;
  String mainColWidth = '100%';
  bool _timelineVisible = false;

  List<Initiative> _initiatives = new List();
  Initiative selectedInitiative;
  String expandedInitiativeId;

  // List<bool> wideControl = new List();
  // List<bool> expandedControl = new List();
  //Map<Initiative, bool> wideControl = Map();

  MenuModel<MenuItem> menuModel;

  // Define messages and labels
  static final String sortedByLabel = InitiativeMsg.label('Sorted By');
  static final String objectiveLabel =  InitiativeMsg.label('Objective');

  static final String nameLabel =  FieldMsg.label('${Initiative.className}.${Initiative.nameField}');
  static final String groupLabel = FieldMsg.label('${Initiative.className}.${Initiative.groupField}');
  static final String leaderLabel =  FieldMsg.label('${Initiative.className}.${Initiative.leaderField}');


  final objectivesSortedByOptions = [nameLabel, groupLabel, leaderLabel];

  String _sortedBy = nameLabel;

  InitiativesComponent(this._appLayoutService, this._initiativeService, this._objectiveService, this._searchService, this._historyTimelineService, this._router) {
    initiativesFilterParam = InitiativesFilterParam();
    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMsg.buttonLabel('Edit'), icon: new Icon('edit') , action: () => viewDetail(true)), new MenuItem(CommonMsg.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete())])], icon: new Icon('menu'));

  }

  set sortedBy(String sortedBy) {
    _sortedBy = sortedBy;
    _sortInitiatives(_initiatives);
  }

  get sortedBy => _sortedBy;


  bool get timelineVisible {
    return _timelineVisible;
  }
  set timelineVisible(bool visible) {
    _timelineVisible = visible;
    if (_timelineVisible) {
      mainColWidth = '75%';
      _historyTimelineService.refreshHistory(SystemModule.initiatives.index);
    } else {
      mainColWidth = '100%';
    }
    // (!_timelineVisible) ?mainColWidth = '100%' : mainColWidth = '75%';
  }

  void onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {

    if (_initiativeService.authService.selectedOrganization == null || _initiativeService.authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }
    
    _appLayoutService.headerTitle = InitiativeMsg.label('Initiatives');

    if (routerStateCurrent.parameters.containsKey(AppRoutes.objectiveIdParameter)) {
        String objectiveId = routerStateCurrent.parameters[AppRoutes
            .objectiveIdParameter];

        try {
          if (objectiveId != null || objectiveId.isNotEmpty) {
              initiativesFilterParam.objective = await _objectiveService.getObjective(objectiveId, withMeasures: false);
          }

       } catch (e) {
        _appLayoutService.error = e.toString();
        rethrow;
      }
    }


    _initiatives = await getInitiatives();

    // wideControl = new List<bool>.filled(_initiatives.length, false);
   // expandedControl = new List<bool>.filled(_initiatives.length, false);

    _appLayoutService.enabledSearch = true;
  }

  get visibleFilter => _searchService.visibleFilter;

  set visibleFilter(bool visibleFilter) {
    _searchService.visibleFilter = visibleFilter;
  }

  List<Initiative> get initiatives {

    List<Initiative> initiativesFilter;
    initiativesFilter = initiativesFilterParam.objective == null ? _initiatives : _initiatives.where((t) => t.objective != null && t.objective.id == initiativesFilterParam.objective.id).toList();

    return _searchService?.searchTerm.toString().isEmpty ? initiativesFilter : initiativesFilter.where((t) => t.name.contains(_searchService.searchTerm)).toList();
  }

  Future<List<Initiative>> getInitiatives() async {
    List<Initiative> initiativesAux = await _initiativeService.getInitiatives(_initiativeService.authService.selectedOrganization.id, withWorkItems: true, withProfile: true);

    _sortInitiatives(initiativesAux);
    return initiativesAux;
  }

  @override
  ngOnDestroy() async {
    _appLayoutService.enabledSearch = false;

  }

  void goToWorkItem(Initiative initiative) {
    _router.navigate(AppRoutes.workItemsRoute.toUrl(parameters: { AppRoutes.initiativeIdParameter: initiative.id }));
  }

  void stopPropagation(MouseEvent me) {
    me.stopPropagation();
  }

  void selectInitiative(Initiative item) {
    selectedInitiative = item;
  }

  void delete() async {
    try {

      await _initiativeService.deleteInitiative(selectedInitiative);
      initiatives.remove(selectedInitiative);

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  void viewDetail(bool detailVisible) {
    this.detailVisible = detailVisible;
  }

  void refreshList(String initiativeId) async {
/*

    if (selectedInitiative == null) {
      initiatives.add(initiative);
      expandedControl[initiative] = true;
    } else {
      // initiative.cloneTo(initiatives[initiatives.indexOf(selectedInitiative)]);
    }
    _sortInitiativesOrderByGroup(initiatives);
*/

 //   _initiatives = await getInitiatives();

    Initiative initiative = await _initiativeService.getInitiative(initiativeId, withWorkItems: true, withProfile: true);

    if (selectedInitiative == null) {
      _initiatives.add( initiative );
    } else {
      _initiatives[_initiatives.indexOf(selectedInitiative)] = initiative;
    }

    _sortInitiatives(_initiatives);

  //  _sortObjectives();
    _historyTimelineService.refreshHistory(SystemModule.objectives.index);

   // _historyTimelineService.getHistory(SystemModule.objectives.index);

  }

  @override
  Future<bool> canReuse(RouterState current, RouterState next) async {
    return true;
  }

  String colorFromUuid(String id) {
    return id == null ? '#ffffff' : '#' + id.substring(0, 6);
  }

  String firstLetter(String name) {
    return name == null ? 'G' : name.substring(0, 1).toUpperCase();
  }

  // Order by to group
  void _sortInitiatives(List<Initiative> initiativesToSort) {

    if (_sortedBy == nameLabel) {
      initiativesToSort.sort((a, b) => a?.name == null || b?.name == null ? -1 : a.name.compareTo(b.name));
    } else if (_sortedBy == groupLabel) {
      initiativesToSort.sort((a, b) => a?.group == null || b?.group == null ? -1 : a.group.name.compareTo(b.group.name));
    } else if (_sortedBy == leaderLabel) {
      initiativesToSort.sort((a, b) =>
      a?.leader == null || b?.leader == null
          ? -1
          : a.leader.name.compareTo(b.leader.name));
    }
  }

  String userUrlImage(String userProfileImage) {
    return common_service.userUrlImage(userProfileImage);
  }

  String composeTooltip(String label, String name) {
    return label + ' ' + ((name == null) ? '(-)' : name);
  }



  setExpandedInitiativeId(String initiativeId, bool expanded) {
    if (expanded) {
      expandedInitiativeId = initiativeId;
    } else {
      expandedInitiativeId = null;
    }
  }
}
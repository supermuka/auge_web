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

import 'package:auge_server/model/initiative/initiative.dart';

import 'package:auge_web/message/messages.dart';
import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/initiative/initiative_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/src/search/search_service.dart';
import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/initiative/initiatives_filter_component.dart';
import 'package:auge_web/src/initiative/initiative_summary_component.dart';
import 'package:auge_web/src/initiative/initiative_detail_component.dart';
import 'package:auge_web/src/work_item/work_items_component.dart';
import 'package:auge_web/src/work_item/work_items_list_component.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/services/app_routes.dart';

@Component(
    selector: 'auge-initiatives',
    providers: const [InitiativeService, ObjectiveService],
    directives: const [
      coreDirectives,
      routerDirectives,
      MaterialFabComponent,
      MaterialIconComponent,
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
    ],
    templateUrl: 'initiatives_component.html',
    styleUrls: const [
      'initiatives_component.css'
    ])

class InitiativesComponent extends Object with CanReuse implements /* OnInit, */ OnActivate, OnDestroy {

  final InitiativeService _initiativeService;
  final ObjectiveService _objectiveService;
  final SearchService _searchService;
  final Router _router;
  final AppLayoutService _appLayoutService;
  final AuthService _authService;

  InitiativesFilterParam initiativesFilterParam;

  bool detailVisible = false;
  List<Initiative> _initiatives = new List();
  Initiative selectedInitiative;

  bool expanded = false;
  // List<bool> wideControl = new List();
  // List<bool> expandedControl = new List();
  Map<Initiative, bool> wideControl = Map();
  Map<Initiative, bool> expandedControl = Map();

  MenuModel<MenuItem> menuModel;
  InitiativesComponent(this._authService, this._appLayoutService, this._initiativeService, this._objectiveService, this._searchService, this._router) {
    initiativesFilterParam = InitiativesFilterParam();
    menuModel = new MenuModel([new MenuItemGroup([new MenuItem(CommonMsg.buttonLabel('Edit'), icon: new Icon('edit') , action: () => viewDetail(true)), new MenuItem(CommonMsg.buttonLabel('Delete'), icon: new Icon('delete'), action: () => delete())])], icon: new Icon('menu'));
  }

  // Define messages and labels
  static final String objectiveLabel =  InitiativeMsg.label('Objective');
  static final String groupLabel =  InitiativeMsg.label('Group');
  static final String leaderLabel =  InitiativeMsg.label('Leader');

  void onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {

    if (_authService.selectedOrganization == null || _authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
      return;
    }
    
    _appLayoutService.headerTitle = InitiativeMsg.label('Initiatives');

    if (routerStateCurrent.parameters.containsKey(AppRoutes.objectiveIdParameter)) {
        String objectiveId = routerStateCurrent.parameters[AppRoutes
            .objectiveIdParameter];

        try {
          if (objectiveId != null || objectiveId.isNotEmpty) {
              initiativesFilterParam.objective = await _objectiveService.getObjectiveById(objectiveId, withMeasures: false);
          }

       } catch (e) {
        _appLayoutService.error = e.toString();
        rethrow;
      }
    }

    List<Initiative> initiativesAux = await _initiativeService.getInitiatives(_authService.selectedOrganization?.id, withWorkItems: true, withProfile: true);

    _sortInitiativesOrderByGroup(initiativesAux);

    _initiatives = initiativesAux;

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
      await _initiativeService.deleteInitiative(selectedInitiative.id);
      expandedControl.remove(selectedInitiative);
      initiatives.remove(selectedInitiative);

    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  void viewDetail(bool detailVisible) {
    this.detailVisible = detailVisible;
  }

  void changeListItem(Initiative initiative) {
    if (selectedInitiative == null) {
      initiatives.add(initiative);
      expandedControl[initiative] = true;
    } else {
      // initiative.cloneTo(initiatives[initiatives.indexOf(selectedInitiative)]);
    }
    _sortInitiativesOrderByGroup(initiatives);
  }

  void expandedChange(Initiative initiative, bool expanded) {
    expandedControl[initiative] = expanded;
    if (!expanded) {
      wideControl[initiative] = false;
    }
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
  void _sortInitiativesOrderByGroup(List<Initiative> initiatives) {
    initiatives.sort((a, b) => a?.group == null || b?.group == null ? -1 : a.group.name.compareTo(b.group.name));
  }

  String userUrlImage(String userProfileImage) {
    return common_service.userUrlImage(userProfileImage);
  }
}
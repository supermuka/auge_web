// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_router/angular_router.dart';

import 'package:auge/shared/model/user.dart';
import 'package:auge/shared/model/initiative/initiative.dart';
import 'package:auge/shared/model/initiative/stage.dart';
import 'package:auge/shared/model/initiative/state.dart';
import 'package:auge/shared/model/objective/objective.dart';
import 'package:auge/shared/message/messages.dart';

import 'package:auge/web/services/common_service.dart' as common_service;
import 'package:auge/web/src/auth/auth_service.dart';
import 'package:auge/web/src/user/user_service.dart';
import 'package:auge/web/src/initiative/initiative_service.dart';
import 'package:auge/web/src/objective/objective_service.dart';

import 'package:angular_components/model/ui/has_factory.dart';

import 'package:auge/web/services/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
import 'initiative_detail_component.template.dart' as initiative_detail_component;

@Component(
    selector: 'auge-initiative-detail',
    providers: const [ObjectiveService, UserService],
    directives: const [
      coreDirectives,
      routerDirectives,
      AutoFocusDirective,
      materialDirectives,
      MaterialInputComponent,
      MaterialButtonComponent,
      MaterialFabComponent,
      MaterialIconComponent,
      MaterialDialogComponent,
      MaterialListComponent,
      MaterialListItemComponent,
      MaterialExpansionPanel,
      ModalComponent,
    ],
    templateUrl: 'initiative_detail_component.html',
    styleUrls: const [
      'initiative_detail_component.css'
    ])
class InitiativeDetailComponent implements OnActivate {

  final AuthService _authService;
  final InitiativeService _initiativeService;
  final ObjectiveService _objectiveService;
  final UserService _userService;
  final Location _location;
  final Router _router;


  Initiative initiative = new Initiative();
  String stageEntry;
  Stage selectedStage = null;
  List<State> states;
  SelectionOptions stateOptions;
  SelectionModel stateSingleSelectModel;

  String leaderInputText = '';
  String objectiveInputText = '';
  SelectionOptions leaderOptions;
  SelectionOptions objectiveOptions;
  SelectionModel leaderSingleSelectModel;
  SelectionModel objectiveSingleSelectModel;
  String glyph = 'search';
  String leaderLabel = 'Leader';
  String objectiveLabel = 'Objective';
  String emptyPlaceholder = 'No match';

  InitiativeDetailComponent(this._authService, this._initiativeService, this._objectiveService,  this._userService, this._location, this._router);

  // Define messages and labels
  String requiredValueMsg() => CommonMessage.requiredValueMsg();
  String label(String label) =>  InitiativeMessage.label(label);
  String buttonLabel(String label) =>  CommonMessage.buttonLabel(label);

  @override
  Future onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {

    if (this._authService.authenticatedUser == null) {
      _router.navigate(AppRoutes.authRoute.toUrl());
    }


    String id = routerStateCurrent.parameters[AppRoutes.initiativeIdParameter];

    if (id != null && id.isNotEmpty) {
      initiative = await _initiativeService.getInitiativeById(id);
    } else {
      initiative.organization = _authService.selectedOrganization;
    }

    states = await _initiativeService.getStates();

    stateOptions = new SelectionOptions.fromList(states);

    stateSingleSelectModel = new SelectionModel.single();

    if (stateOptions.optionsList.isNotEmpty)
      stateSingleSelectModel.select(stateOptions.optionsList.first);

    // Leader
    List<User> users = await _userService.getUsersByOrganizationId(_authService.selectedOrganization.id, withProfile: true);

    leaderOptions = new StringSelectionOptions<User>(
        users, toFilterableString: (User user) => user.name);

    // Objective
    List<Objective> objectives = await _objectiveService.getObjectives(_authService.selectedOrganization.id, withMeasures: false);

    objectiveOptions = new StringSelectionOptions<Objective>(
        objectives, toFilterableString: (Objective objective) => objective.name);

    // Leader Select Model
    leaderSingleSelectModel =
    new SelectionModel.single()
      ..selectionChanges.listen((leader) {

        if (leader.isNotEmpty && leader.first.added != null && leader.first.added.length != 0 && leader.first.added?.first != null) {
            initiative.leader = leader.first.added.first;
        }
      });

    if (initiative.leader != null)
      leaderSingleSelectModel.select(initiative.leader);


    // Objective Select Model
    objectiveSingleSelectModel =
    new SelectionModel.single()
      ..selectionChanges.listen((objective) {

        if (objective.isNotEmpty && objective.first.added != null && objective.first.added.length != 0 && objective.first.added?.first != null) {
          initiative.objective = objective.first.added.first;
        }
      });

    if (initiative.objective != null)
      objectiveSingleSelectModel.select(initiative.objective);
  }

  void saveInitiative() {
    _initiativeService.saveInitiative(initiative);
    goBack();
  }

  void goBack() {
    _location.back();
  }

  String get leaderLabelRenderer {
    String nameLabel;
    if ((leaderSingleSelectModel != null &&
        leaderSingleSelectModel.selectedValues != null &&
        leaderSingleSelectModel.selectedValues.length != null)) {

      nameLabel = leaderSingleSelectModel.selectedValues.first.name;
    }

    return nameLabel;
  }

  String get objectiveLabelRenderer {
    String nameLabel;
    if ((objectiveSingleSelectModel != null &&
        objectiveSingleSelectModel.selectedValues != null &&
        objectiveSingleSelectModel.selectedValues.length != null)) {

      nameLabel = objectiveSingleSelectModel.selectedValues.first.name;
    }

    return nameLabel;
  }

  ItemRenderer get leaderItemRenderer => (dynamic user) => user.name;

  ItemRenderer get objectiveItemRenderer => (dynamic objective) => objective.name;

  Future<Null> goToList() async {
    _router.navigate(AppRoutes.initiativesRoute.toUrl());

  }

  FactoryRenderer get leaderFactoryRenderer => (_) => initiative_detail_component.LeaderRendererComponentNgFactory;

  void selectStage(Stage e) {
    selectedStage = e;
    stageEntry = e.name;

    if (e.state != null)
      stateSingleSelectModel.select(e.state);
  }

  void addStage() {
    if (stateSingleSelectModel?.selectedValues?.isNotEmpty) {
      initiative.stages.add(new Stage()
        ..name = stageEntry
        ..state = stateSingleSelectModel.selectedValues?.first);
      initiative.stages.sort((a, b) =>
          a?.state?.index?.compareTo(b?.state?.index));
    }
    stageEntry = '';
  }

  void removeStage(Stage e) {
    initiative.stages.remove(e);
  }

  void updateStage(Stage e) {
    if (stateSingleSelectModel?.selectedValues?.isNotEmpty) {
      initiative.stages.elementAt(initiative.stages.indexOf(e))
        ..name = stageEntry
        ..state = stateSingleSelectModel.selectedValues?.first;
      initiative.stages.sort((a, b) =>
          a?.state?.index?.compareTo(b?.state?.index));
    }
  }

  FactoryRenderer get stateFactoryRenderer => (_) => initiative_detail_component.StateRendererComponentNgFactory;

  // Label for the button for single selection.
  String get stateSingleSelectLabel {
    String nameLabel;
    if ((stateSingleSelectModel != null) &&
        (stateSingleSelectModel.selectedValues != null) &&
        (stateSingleSelectModel.selectedValues.length > 0)) {
      nameLabel = stateSingleSelectModel.selectedValues.first?.name;
    }
    return nameLabel;
  }

  ItemRenderer get stateItemRenderer => (dynamic state) => state?.name;

}

@Component(
    selector: 'state-renderer',
    //  template: '<material-icon icon="language"></material-icon>{{disPlayName}}',
    template: '<div><span [style.background-color]="disPlayCor">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;{{disPlayName}}</div>',
    styles: const [
      ''
    ],
    directives: const [
      MaterialIconComponent
    ])
class StateRendererComponent implements RendersValue {
  String disPlayName = '';
  String disPlayCor;

  @override
  set value(newValue) {
    disPlayName = (newValue as State).name;
    disPlayCor = 'hsl(' + (newValue as State).colorHue + ', ' + (newValue as State).colorSaturation + '%, ' + (newValue as State).colorLightness + '%)';
  }
}

@Component(
    selector: 'leader-renderer',
    //  template: '<material-icon icon="language"></material-icon>{{disPlayName}}',
    template: '<div left-icon class="avatar-icon" [style.background-image]="disPlayurl"></div>{{disPlayName}}',

    styles: const [
      ''
    ],
    directives: const [
      MaterialIconComponent
    ])
class LeaderRendererComponent implements RendersValue {
  String disPlayName = '';
  String disPlayurl;

  @override
  set value(newValue) {
    disPlayName = (newValue as User).name;
    disPlayurl = 'url(' + common_service.userUrlImage((newValue as User))  + ')';
  }
}
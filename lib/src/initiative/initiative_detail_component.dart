// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_router/angular_router.dart';

import 'package:auge_server/model/user.dart';
import 'package:auge_server/model/initiative/initiative.dart';
import 'package:auge_server/model/initiative/stage.dart';
import 'package:auge_server/model/initiative/state.dart';
import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_server/model/group.dart';

import 'package:auge_web/message/messages.dart';

import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/src/initiative/initiative_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/src/group/group_service.dart';

import 'package:angular_components/model/ui/has_factory.dart';

// ignore_for_file: uri_has_not_been_generated
import 'initiative_detail_component.template.dart' as initiative_detail_component;

@Component(
  selector: 'auge-initiative-detail',
  providers: const [ObjectiveService, UserService, GroupService],
  directives: const [
    coreDirectives,
    routerDirectives,
    materialDirectives,
    /*
    materialInputDirectives,
    MaterialDropdownSelectComponent,
    DropdownSelectValueAccessor, */
  ],
  templateUrl: 'initiative_detail_component.html',
  styleUrls: const [
    'initiative_detail_component.css'
  ])
class InitiativeDetailComponent implements OnInit {

  /// Entry to edit data. If new, this should be null
  @Input()
  Initiative selectedInitiative;

  final _closeController = new StreamController<void>.broadcast(sync: true);

  /// Publishes events when close.
  @Output()
  Stream<void> get close => _closeController.stream;

  final _saveController = new StreamController<Initiative>.broadcast(sync: true);

  /// Publishes events when save.
  @Output()
  Stream<Initiative> get save => _saveController.stream;

  final AuthService _authService;
  final InitiativeService _initiativeService;
  final ObjectiveService _objectiveService;
  final UserService _userService;
  final GroupService _groupService;

  Initiative initiative;
  String stageEntry;
  Stage selectedStage = null;

  String groupInputText = '';
  String leaderInputText = '';
  String objectiveInputText = '';

  SelectionOptions stateOptions;
  SelectionModel<State> stateSingleSelectModel;
  SelectionOptions leaderOptions;
  SelectionModel<User> leaderSingleSelectModel;
  SelectionOptions objectiveOptions;
  SelectionModel<Objective> objectiveSingleSelectModel;
  SelectionOptions groupOptions;
  SelectionModel<Group> groupSingleSelectModel;

  List<State> _states;
  List<User> _users;
  List<Objective> _objectives;
  List<Group> _groups;

  /// When it exists, the error/exception message presented into dialog view.
  String dialogError;

  InitiativeDetailComponent(this._authService, this._initiativeService, this._objectiveService,  this._userService, this._groupService)  {
    stateSingleSelectModel = SelectionModel.single();
    leaderSingleSelectModel = SelectionModel.single();
    objectiveSingleSelectModel = SelectionModel.single();
    groupSingleSelectModel = SelectionModel.single();
  }

  // Define messages and labels
  static final String requiredValueMsg = CommonMessage.requiredValueMsg();

  static final String addInitiativeLabel =  InitiativeMessage.label('Add Initiative');
  static final String editInitiativeLabel =  InitiativeMessage.label('Edit Initiative');
  static final String nameLabel =  InitiativeMessage.label('Name');
  static final String descriptionLabel =  InitiativeMessage.label('Description');
  static final String groupLabel =  InitiativeMessage.label('Group');
  static final String noMatchLabel =  InitiativeMessage.label('No Match');
  static final String leaderLabel =  InitiativeMessage.label('Leader');
  static final String stageLabel =  InitiativeMessage.label('Stage');
  static final String objectiveLabel =  InitiativeMessage.label('Objective');
  static final String selectLabel =  InitiativeMessage.label('Select');

  static final String saveButtonLabel = CommonMessage.buttonLabel('Save');
  static final String closeButtonLabel = CommonMessage.buttonLabel('Close');

  @override
  void ngOnInit() async {
    if (selectedInitiative != null) {
      // Clone objective
      initiative = selectedInitiative.clone();
    } else {
      initiative = Initiative();
      initiative.organization = _authService.selectedOrganization;
    }

    try {
      _states =  await _initiativeService.getStates();
      _users = await _userService.getUsers(_authService.selectedOrganization.id, withProfile: true);
      _objectives = await _objectiveService.getObjectives(_authService.selectedOrganization.id, withMeasures: false);
      _groups = await _groupService.getGroups(_authService.selectedOrganization.id);

    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }

   // List<State> states =  await _initiativeService.getStates();
    // stateOptions = new SelectionOptions.fromList(_states);
    stateOptions = new StringSelectionOptions<State>(
        _states, toFilterableString: (State state) => state.name);
/*
    if (stateOptions.optionsList.isNotEmpty) {
       stateSingleSelectModel.select(stateOptions.optionsList.first);
    }
    */


    // Leader
   // List<User> users = await _userService.getUsers(_authService.selectedOrganization.id, withProfile: true);
    leaderOptions = new StringSelectionOptions<User>(
        _users, toFilterableString: (User user) => user.name);

    // Objective
    // List<Objective> objectives = await _objectiveService.getObjectives(_authService.selectedOrganization.id, withMeasures: false);
    objectiveOptions = new StringSelectionOptions<Objective>(
        _objectives, toFilterableString: (Objective objective) => objective.name);

    // List<Group> groups = await _groupService.getGroups(_authService.selectedOrganization.id);

    groupOptions = new StringSelectionOptions<Group>(
        _groups, toFilterableString: (Group gru) => gru.name);

    // Leader Select Model
    //leaderSingleSelectModel = initiative.leader == null ? SelectionModel.single() : SelectionModel.single<User>(selected: initiative.leader);
    /*
    new SelectionModel.single(selected: initiative?.leader)
      ..selectionChanges.listen((leader) {
        if (leader.isNotEmpty && leader.first.added != null && leader.first.added.length != 0 && leader.first.added?.first != null) {
          initiative.leader = leader.first.added.first;
        }
      });
    */
    leaderSingleSelectModel.selectionChanges.listen((leader) {
      if (leader.isNotEmpty && leader.first.added != null && leader.first.added.length != 0 && leader.first.added?.first != null) {
        initiative.leader = leader.first.added.first;
      }
    });

    if (initiative.leader != null) {
     // leaderSingleSelectModel.select(initiative.leader);
      leaderSingleSelectModel.select(leaderOptions.optionsList.singleWhere((l) => l.id == initiative.leader.id));
    }

    // Objective Select Model
    objectiveSingleSelectModel.selectionChanges.listen((objective) {
        if (objective.isNotEmpty && objective.first.added != null && objective.first.added.length != 0 && objective.first.added?.first != null) {
          initiative.objective = objective.first.added.first;
        }
      });

    if (initiative.objective != null) {
      objectiveSingleSelectModel.select(objectiveOptions.optionsList.singleWhere((o) => o.id == initiative.objective.id));
      //objectiveSingleSelectModel.select(initiative.objective);

    }

    // Group
    groupSingleSelectModel.selectionChanges.listen((groupEvent) {
        if (groupEvent.isNotEmpty && groupEvent.first.added != null && groupEvent.first.added.length != 0 && groupEvent.first.added?.first != null) {
          initiative.group = groupEvent.first.added.first;
        }
      });

    if (initiative.group != null) {
      groupSingleSelectModel.select(groupOptions.optionsList.singleWhere((g) => g.id == initiative.group.id));
    //  groupSingleSelectModel.select(initiative.group);
    }
  }

  void saveInitiative() {
    try {
      _initiativeService.saveInitiative(initiative);
      _saveController.add(initiative);
      closeDetail();
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }
  }

  void closeDetail() {
    _closeController.add(null);
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

  FactoryRenderer get leaderFactoryRenderer => (_) => initiative_detail_component.LeaderRendererComponentNgFactory;

  void selectStage(Stage e) {

    selectedStage = e;
    stageEntry = e.name;
/*
    if (e.state != null) {
      stateSingleSelectModel.select(
          stateOptions.optionsList.singleWhere((s) => s.id == e.state.id));
    }

*/
  }

  void addStage() {
    if (stateSingleSelectModel != null && stateSingleSelectModel.selectedValues.isNotEmpty) {
      initiative.stages.add(new Stage()
        ..name = stageEntry
        ..state = stateSingleSelectModel.selectedValues?.first
        ..index = initiative.stages.length);


      initiative.stages.sort((a, b) =>
          a?.state?.index?.compareTo(b?.state?.index));
    }
    stageEntry = '';
  }

  void removeStage(Stage e) {
    initiative.stages.remove(e);
  }

  void updateStage(Stage e) {
    if (stateSingleSelectModel != null && stateSingleSelectModel.selectedValues.isNotEmpty) {
      initiative.stages.elementAt(initiative.stages.indexOf(e))
        ..name = stageEntry
        ..state = stateSingleSelectModel.selectedValues?.first;
      initiative.stages.sort((a, b) =>
          a?.state?.index?.compareTo(b?.state?.index));
      selectedStage = null;
      stageEntry = '';
    }

  }



  // Label for the button for single selection.
  String get stateSingleSelectLabel {
    String nameLabel;
    if ((stateSingleSelectModel != null) &&
        (stateSingleSelectModel.selectedValues != null) &&
        (stateSingleSelectModel.selectedValues.length > 0)) {
      nameLabel = stateSingleSelectModel.selectedValues.first?.name;
    } else {
      nameLabel = selectLabel;
    }
    return nameLabel;
  }

  ItemRenderer get stateItemRenderer => (dynamic state) => state.name;

  FactoryRenderer get stateFactoryRenderer => (_) => initiative_detail_component.StateRendererComponentNgFactory;

  String get groupLabelRenderer {
    String nameLabel;
    if ((groupSingleSelectModel != null &&
        groupSingleSelectModel.selectedValues != null &&
        groupSingleSelectModel.selectedValues.length != null)) {

      nameLabel = groupSingleSelectModel.selectedValues.first.name;
    }

    return nameLabel;
  }

  ItemRenderer get groupItemRenderer => (dynamic gru) => gru.name;

  bool get validInput {
    return initiative.name?.trim()?.isNotEmpty ?? false;
  }

  bool get validStageInput {
    return (stageEntry != null && stageEntry.isNotEmpty && stateSingleSelectModel != null && stateSingleSelectModel.selectedValues.isNotEmpty && stateSingleSelectModel.selectedValues.first.index != null);
  }

  void moveUpStage(Stage stage) {
    int i = initiative.stages.indexOf(stage);

    if (i > 0) {

      // Receive state equals previous stage, because can be different that the actual
      stage.state = initiative.stages[i-1].state;

      initiative.stages.removeAt(i);
      initiative.stages.insert(i-1, stage);
    }
  }

  void moveDownStage(Stage stage) {
    int i = initiative.stages.indexOf(stage);
    if (i < initiative.stages.length-1) {

      // Receive state equals previous stage, because can be different that the actual
      stage.state = initiative.stages[i+1].state;

      initiative.stages.removeAt(i);

      initiative.stages.insert(i+1, stage);
    }
  }

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
    disPlayurl = 'url(' + common_service.userUrlImage((newValue as User)?.userProfile?.image)  + ')';
  }
}
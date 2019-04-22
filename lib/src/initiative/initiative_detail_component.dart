// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_input/material_auto_suggest_input.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_select/material_dropdown_select.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/model/selection/string_selection_options.dart';
import 'package:angular_components/material_select/dropdown_button.dart';
import 'package:angular_components/material_select/material_dropdown_select_accessor.dart';
import 'package:angular_components/focus/focus_item.dart';
import 'package:angular_components/focus/focus_list.dart';
import 'package:angular_components/material_list/material_list.dart';
import 'package:angular_components/material_list/material_list_item.dart';
import 'package:angular_components/material_select/material_select_item.dart';
import 'package:angular_components/model/ui/has_factory.dart';

import 'package:auge_server/model/general/user.dart';
import 'package:auge_server/model/initiative/initiative.dart';
import 'package:auge_server/model/initiative/stage.dart';
import 'package:auge_server/model/initiative/state.dart';
import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_server/model/general/group.dart';

import 'package:auge_web/message/messages.dart';
import 'package:auge_web/services/common_service.dart' as common_service;
//import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/src/initiative/initiative_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/src/group/group_service.dart';

// ignore_for_file: uri_has_not_been_generated
import 'initiative_detail_component.template.dart' as initiative_detail_component;

@Component(
  selector: 'auge-initiative-detail',
  providers: const [overlayBindings, ObjectiveService, UserService, GroupService],
  directives: const [
    coreDirectives,
    routerDirectives,
    materialInputDirectives,
    AutoFocusDirective,
    MaterialDialogComponent,
    ModalComponent,
    MaterialIconComponent,
    MaterialButtonComponent,
    MaterialAutoSuggestInputComponent,
    MaterialDropdownSelectComponent,
    DropdownSelectValueAccessor,
    DropdownButtonComponent,
    FocusItemDirective,
    FocusListDirective,
    MaterialListComponent,
    MaterialListItemComponent,
    MaterialSelectItemComponent,
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

 // final AuthService _authService;
  final InitiativeService _initiativeService;
  final ObjectiveService _objectiveService;
  final UserService _userService;
  final GroupService _groupService;

  Initiative initiative;

  Map<String, dynamic> initiativeValuesPrevious;
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

  InitiativeDetailComponent(this._initiativeService, this._objectiveService,  this._userService, this._groupService)  {
    stateSingleSelectModel = SelectionModel.single();
    leaderSingleSelectModel = SelectionModel.single();
    objectiveSingleSelectModel = SelectionModel.single();
    groupSingleSelectModel = SelectionModel.single();
  }

  // Define messages and labels
  static final String requiredValueMsg = CommonMsg.requiredValueMsg();

  static final String addInitiativeLabel =  InitiativeMsg.label('Add Initiative');
  static final String editInitiativeLabel =  InitiativeMsg.label('Edit Initiative');
  static final String nameLabel =  InitiativeMsg.label('Name');
  static final String descriptionLabel =  InitiativeMsg.label('Description');
  static final String groupLabel =  InitiativeMsg.label('Group');
  static final String noMatchLabel =  InitiativeMsg.label('No Match');
  static final String leaderLabel =  InitiativeMsg.label('Leader');
  static final String stageLabel =  InitiativeMsg.label('Stage');
  static final String objectiveLabel =  InitiativeMsg.label('Objective');
  static final String selectLabel =  InitiativeMsg.label('Select');

  static final String saveButtonLabel = CommonMsg.buttonLabel('Save');
  static final String closeButtonLabel = CommonMsg.buttonLabel('Close');

  @override
  void ngOnInit() async {
    if (selectedInitiative != null) {
      // Clone objective
      // initiative = selectedInitiative.clone();

      initiative = await _initiativeService.getInitiative(selectedInitiative.id);

    } else {
      initiative = Initiative();

      initiative.organization = _initiativeService.authService.selectedOrganization;
    }

    try {
      _states =  await _initiativeService.getStates();
      _users = await _userService.getUsers(_initiativeService.authService.selectedOrganization.id, withProfile: true);
      _objectives = await _objectiveService.getObjectives(_initiativeService.authService.selectedOrganization.id, withMeasures: false);
      _groups = await _groupService.getGroups(_initiativeService.authService.selectedOrganization.selectedOrganization.id);

    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }

   // List<State> states =  await _initiativeService.getStates();
    // stateOptions = new SelectionOptions.fromList(_states);
    stateOptions = new StringSelectionOptions<State>(
        _states, toFilterableString: (State state) => state.name);

    if (stateOptions.optionsList.isNotEmpty) {
       stateSingleSelectModel.select(stateOptions.optionsList.first);
    }

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

    if (e.state != null) {
      stateSingleSelectModel.select(
          stateOptions.optionsList.singleWhere((s) => s.id == e.state.id));
    }
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
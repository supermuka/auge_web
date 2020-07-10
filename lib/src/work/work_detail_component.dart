// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:auge_web/route/app_routes.dart';

import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_input/material_auto_suggest_input.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_select/material_dropdown_select.dart';
import 'package:angular_components/material_select/dropdown_button.dart';
import 'package:angular_components/material_select/material_dropdown_select_accessor.dart';
import 'package:angular_components/material_checkbox/material_checkbox.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/model/selection/string_selection_options.dart';
import 'package:angular_components/model/ui/has_factory.dart';

import 'package:auge_shared/domain/general/user.dart';
import 'package:auge_shared/domain/work/work.dart';
import 'package:auge_shared/domain/objective/objective.dart';
import 'package:auge_shared/domain/general/group.dart';

import 'package:auge_shared/message/messages.dart';
import 'package:auge_shared/message/domain_messages.dart';

import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/measure/measure_service.dart';
//import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/src/work/work_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/src/group/group_service.dart';

// ignore_for_file: uri_has_not_been_generated
import 'work_detail_component.template.dart' as work_detail_component;

@Component(
  selector: 'auge-work-detail',
  providers: const [overlayBindings, ObjectiveService, UserService, GroupService],
  templateUrl: 'work_detail_component.html',
  styleUrls: const [
  'work_detail_component.css'
  ],
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
    MaterialCheckboxComponent,
  ])
class WorkDetailComponent implements OnInit, OnActivate, OnDeactivate {

  bool modalVisible = false;

 // final AuthService _authService;
  final WorkService _workService;
  final ObjectiveService _objectiveService;
  final UserService _userService;
  final GroupService _groupService;
  final Router _router;
  // final Location _location;

  Work work;

  Map<String, dynamic> workValuesPrevious;
//  Stage selectedStage = null;

  String groupInputText = '';
  String leaderInputText = '';
  String objectiveInputText = '';

 // SelectionOptions stateOptions;
 // SelectionModel<State> stateSingleSelectModel;

  SelectionOptions leaderOptions;
  SelectionModel<User> leaderSingleSelectModel;
  SelectionOptions objectiveOptions;
  SelectionModel<Objective> objectiveSingleSelectModel;
  SelectionOptions groupOptions;
  SelectionModel<Group> groupSingleSelectModel;

  //List<State> _states;
  List<User> _users;
  List<Objective> _objectives;
  List<Group> _groups;

  /// When it exists, the error/exception message presented into dialog view.
  String dialogError;
  String previousPath;

  WorkDetailComponent(this._workService, this._objectiveService,  this._userService, this._groupService, this._router /*, this._location */)  {
   // stateSingleSelectModel = SelectionModel.single();
    leaderSingleSelectModel = SelectionModel.single();
    objectiveSingleSelectModel = SelectionModel.single();
    groupSingleSelectModel = SelectionModel.single();
  }

  // Define messages and labels
  static final String saveButtonLabel = CommonMsg.buttonLabel(CommonMsg.saveButtonLabel);
  static final String closeButtonLabel = CommonMsg.buttonLabel(CommonMsg.closeButtonLabel);
  static final String requiredValueMsg = CommonMsg.requiredValueMsg();
  static final String noMatchLabel =  CommonMsg.label(CommonMsg.noMatchLabel);
  static final String selectLabel =  CommonMsg.label(CommonMsg.selectLabel);

  static final String addWorkLabel =  WorkMsg.label(WorkMsg.addWorkLabel);
  static final String editWorkLabel =  WorkMsg.label(WorkMsg.editWorkLabel);


  static final String nameLabel =  WorkDomainMsg.fieldLabel(Work.nameField);
  static final String descriptionLabel = WorkDomainMsg.fieldLabel(Work.descriptionField);
  static final String groupLabel =  WorkDomainMsg.fieldLabel(Work.groupField);
  static final String leaderLabel =  WorkDomainMsg.fieldLabel(Work.leaderField);
  static final String objectiveLabel =  WorkDomainMsg.fieldLabel(Work.objectiveField);
  static final String archivedLabel =  WorkDomainMsg.fieldLabel(Work.archivedField);
//  static final String stageLabel =  FieldMsg.label('${Stage.className}.${Stage.nameField}');

  @override
  void onActivate(RouterState previous, RouterState current) async {

    modalVisible = true;

    previousPath = previous.path;

   // work = Work(); // Needs to create new here, even if it can be replaced later, because if get method to delay, Angular throws an error.
    String workId;
    if (current.parameters.containsKey(AppRoutesParam.workIdParameter)) {
      workId = current.parameters[AppRoutesParam.workIdParameter];
    }

    if (workId != null) {
      // Clone objective
      // work = selectedWork.clone();

      work = await _workService.getWork(workId);

    } else {

      work.organization = _workService.authService.authorizedOrganization;
    }

    try {
    //  _states =  await _workService.getStates();
     // _states = State.values;
      _users = await _userService.getUsers(_workService.authService.authorizedOrganization.id, restrictUser: RestrictUser.specification, restrictUserProfile: RestrictUserProfile.image);
      _objectives = await _objectiveService.getObjectives(_workService.authService.authorizedOrganization.id,
          restrictOrganization: RestrictOrganization.none,
          restrictMeasure: RestrictMeasure.none);
      _groups = await _groupService.getGroups(_workService.authService.authorizedOrganization.id);


    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }

    // List<State> states =  await _workService.getStates();
    // stateOptions = new SelectionOptions.fromList(_states);

 /*
    stateOptions = new StringSelectionOptions<State>(
        _states, toFilterableString: (State state) =>
          StateMsg.label(state?.toString()));



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

    leaderSingleSelectModel.selectionChanges.listen((leader) {
      if (leader.isNotEmpty && leader.first.added != null && leader.first.added.length != 0 && leader.first.added?.first != null) {
        work.leader = leader.first.added.first;
      }
    });

    if (work.leader != null) {
      // leaderSingleSelectModel.select(work.leader);
      leaderSingleSelectModel.select(leaderOptions.optionsList.singleWhere((l) => l.id == work.leader.id));
    }

    // Objective Select Model
    objectiveSingleSelectModel.selectionChanges.listen((objective) {
      if (objective.isNotEmpty && objective.first.added != null && objective.first.added.length != 0 && objective.first.added?.first != null) {
        work.objective = objective.first.added.first;
      }
    });

    if (work.objective != null) {
      objectiveSingleSelectModel.select(objectiveOptions.optionsList.singleWhere((o) => o.id == work.objective.id));
      //objectiveSingleSelectModel.select(work.objective);

    }

    // Group
    groupSingleSelectModel.selectionChanges.listen((groupEvent) {
      if (groupEvent.isNotEmpty && groupEvent.first.added != null && groupEvent.first.added.length != 0 && groupEvent.first.added?.first != null) {
        work.group = groupEvent.first.added.first;
      }
    });

    if (work.group != null) {
      groupSingleSelectModel.select(groupOptions.optionsList.singleWhere((g) => g.id == work.group.id));
      //  groupSingleSelectModel.select(work.group);
    }

  }

  @override
  void onDeactivate(RouterState current, RouterState next) {
    modalVisible = false;
  }

  @override
  void ngOnInit() async {

    work = Work(); // Needs to create new here, even if it can be replaced later, because if get method to delay, Angular throws an error.
  }

  void saveWork() async {
    try {
      work.id = await _workService.saveWork(work);
      closeDetail(work.id);
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }
  }

  void closeDetail([String workId]) {
    //_location.back();
     _router.navigate(previousPath, (workId != null) ? NavigationParams(queryParameters: {AppRoutesQueryParam.workIdQueryParameter: workId}, replace: true) : NavigationParams(replace:  true));
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

  FactoryRenderer get leaderFactoryRenderer => (_) => work_detail_component.LeaderRendererComponentNgFactory;

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
    return work.name?.trim()?.isNotEmpty ?? false;
  }
}
/*
@Component(
    selector: 'state-renderer',
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
    disPlayName = StateMsg.label((newValue as State).toString());
   // disPlayCor = 'hsl(' + (newValue as State).colorHue + ', ' + (newValue as State).colorSaturation + '%, ' + (newValue as State).colorLightness + '%)';

    disPlayCor = 'hsl(${_workService.getStateHslColor((newValue as State))})';

  }
}
*/
@Component(
    selector: 'leader-renderer',
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
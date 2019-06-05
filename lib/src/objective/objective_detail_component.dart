// Copyright (c) 2017, Levius.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:auge_web/services/app_routes.dart';

import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/model/ui/has_factory.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_input/material_auto_suggest_input.dart';
import 'package:angular_components/material_select/material_dropdown_select.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/model/selection/string_selection_options.dart';
import 'package:angular_components/material_datepicker/module.dart';
import 'package:angular_components/model/date/date.dart';
// import 'package:angular_components/utils/browser/window/module.dart';
import 'package:angular_components/material_datepicker/material_datepicker.dart';
import 'package:angular_components/material_checkbox/material_checkbox.dart';

import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_server/model/general/user.dart';
import 'package:auge_server/model/general/group.dart';

import 'package:auge_web/message/messages.dart';
import 'package:auge_web/message/model_messages.dart';

import 'package:auge_web/services/common_service.dart' as common_service;
//import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/src/group/group_service.dart';

// ignore_for_file: uri_has_not_been_generated
import 'objective_detail_component.template.dart' as objective_detail_component;

@Component(
    selector: 'auge-objective-detail',
    providers: const [overlayBindings, datepickerBindings, UserService, GroupService],
    directives: const [
      coreDirectives,
      materialInputDirectives,
      AutoFocusDirective,
      MaterialDialogComponent,
      MaterialAutoSuggestInputComponent,
      MaterialDropdownSelectComponent,
      ModalComponent,
      MaterialButtonComponent,
      MaterialIconComponent,
      MaterialCheckboxComponent,
      MaterialDatepickerComponent,
    ],
    templateUrl: 'objective_detail_component.html',
    styleUrls: const [
      'objective_detail_component.css'
    ])

class ObjectiveDetailComponent implements OnInit, OnActivate, OnDeactivate {

  final UserService _userService;
  final ObjectiveService _objectiveService;
  final GroupService _groupService;
  final Router _router;
  //final Location _location;

  bool modalVisible = false;

  Objective objective;

  String groupInputText = '';
  String alignedToInputText = '';
  String leaderInputText = '';

  SelectionOptions groupOptions;
  SelectionModel groupSingleSelectModel;

  SelectionOptions alignedToOptions;
  SelectionModel alignedToSingleSelectModel;

  SelectionOptions leaderOptions;
  SelectionModel leaderSingleSelectModel;

  String leadingGlyph = 'search';

  DateRange limitToDateRange =
  new DateRange(new Date.today().add(years: -1), new Date.today().add(years: 10));

  List<Objective> _alignedToObjectives;
  List<User> _users;
  List<Group> _groups;

  /// When it exists, the error/exception message presented into dialog view.
  String dialogError;
  String previousPath;

  ObjectiveDetailComponent(this._userService, this._objectiveService, this._groupService, this._router) {
    groupSingleSelectModel = SelectionModel.single();
    alignedToSingleSelectModel = SelectionModel.single();
    leaderSingleSelectModel = SelectionModel.single();
  }

  // Define messages and labels
  static final String requiredValueMsg = CommonMsg.requiredValueMsg();
  static final String closeButtonLabel = CommonMsg.buttonLabel('Close');
  static final String saveButtonLabel = CommonMsg.buttonLabel('Save');

  static final String addObjectiveLabel =  ObjectiveMsg.label('Add Objective');
  static final String editObjectiveLabel =  ObjectiveMsg.label('Edit Objective');
  static final String noMatchLabel =  ObjectiveMsg.label('No Match');

  static final String nameLabel =  FieldMsg.label('${Objective.className}.${Objective.nameField}');
  static final String descriptionLabel =  FieldMsg.label('${Objective.className}.${Objective.descriptionField}');
  static final String groupLabel =  FieldMsg.label('${Objective.className}.${Objective.groupField}');
  static final String leaderLabel =  FieldMsg.label('${Objective.className}.${Objective.leaderField}');
  static final String startDateLabel =  FieldMsg.label('${Objective.className}.${Objective.startDateField}');
  static final String endDateLabel =  FieldMsg.label('${Objective.className}.${Objective.endDateField}');
  static final String alignedToLabel =  FieldMsg.label('${Objective.className}.${Objective.alignedToField}');
  static final String archivedLabel =  FieldMsg.label('${Objective.className}.${Objective.archivedField}');

  @override
  void ngOnInit() async {
    // It's needed to create an object before, even if later to get from server side. As server side as on the server side the response takes time, angular/html render first and the object doesn't to get null.
    objective = Objective();
  }

  @override
  void onActivate(RouterState previous, RouterState current) async {
    modalVisible = true;

    previousPath = previous.path;

    String id;
    if (current.parameters.containsKey(AppRoutesParam.objectiveIdParameter)) {
      id = current.parameters[AppRoutesParam.objectiveIdParameter];
    }

    if (id != null) {
      // Clone objective
     // objective = selectedObjective.clone();
       objective = await _objectiveService.getObjective(id);
      //objective = selectedObjective.clone();

    } else {
      objective.organization = _objectiveService.authService.authorizedOrganization;
      objective.archived = false;
    }

    try {
      _alignedToObjectives = await _objectiveService.getObjectives(_objectiveService.authService.authorizedOrganization.id);
      _users = await _userService.getUsers(_objectiveService.authService.authorizedOrganization.id, withProfile: true);
      _groups = await _groupService.getGroups(_objectiveService.authService.authorizedOrganization.id);

    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }

    // Aligned to Objectives
    // Remove the current object

    _alignedToObjectives.removeWhere((testObjective) => objective != null && testObjective.id == objective.id);

    alignedToOptions = new StringSelectionOptions<Objective>(
        _alignedToObjectives, toFilterableString: (Objective obj) => obj.name);

    alignedToSingleSelectModel.selectionChanges.listen((alignedTo) {

      if (alignedTo.isNotEmpty && alignedTo.first.added != null && alignedTo.first.added.length != 0 && alignedTo.first.added?.first != null) {
        objective.alignedTo = alignedTo.first.added.first;
      } else {
        objective.alignedTo = null;
      }
    });

    if (objective.alignedTo != null)
      alignedToSingleSelectModel.select(objective.alignedTo);

    // Leader
    // List<User> users = await _userService.getUsers(_authService.selectedOrganization.id, withProfile: true);

    if (objective.leader != null)
      leaderSingleSelectModel.select(objective.leader);

    leaderSingleSelectModel.selectionChanges.listen((leader) {

    if (leader.isNotEmpty && leader.first.added != null && leader.first.added.length != 0 && leader.first.added?.first != null) {
      objective.leader = leader.first.added.first;
    }
    });

    leaderOptions = new StringSelectionOptions<User>(
        _users, toFilterableString: (User user) => user.name);

    // Group
    // List<Group> groups = await _groupService.getGroups(_authService.selectedOrganization.id);
    groupOptions = new StringSelectionOptions<Group>(
        _groups, toFilterableString: (Group gru) => gru.name);

    groupSingleSelectModel.selectionChanges.listen((groupEvent) {

        if (groupEvent.isNotEmpty && groupEvent.first.added != null && groupEvent.first.added.length != 0 && groupEvent.first.added?.first != null) {
          objective.group = groupEvent.first.added.first;
        }
      });

    if (objective.group != null)
      groupSingleSelectModel.select(objective.group);
  }

  @override
  void onDeactivate(RouterState current, RouterState next) {
    modalVisible = false;
  }

  void saveObjective() async {
    try {

      // History item definition
      objective.id = await _objectiveService.saveObjective(objective);
      closeDetail(objective.id);

    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }
  }

  void closeDetail([String objectiveId]) {
    _router.navigate(previousPath, (objectiveId != null) ? NavigationParams(queryParameters: {AppRoutesQueryParam.objectiveIdQueryParameter: objectiveId}) : null);
  //  _location.back();
  }

  String get alignedToLabelRenderer {
    String nameLabel;
    if ((alignedToSingleSelectModel != null &&
        alignedToSingleSelectModel.selectedValues != null &&
        alignedToSingleSelectModel.selectedValues.length != null)) {

      nameLabel = alignedToSingleSelectModel.selectedValues.first.name;
    }

    return nameLabel;
  }

  ItemRenderer get alignedToItemRenderer => (dynamic obj) => obj.name;

  String get leaderLabelRenderer {
    String nameLabel;
    if ((leaderSingleSelectModel != null &&
        leaderSingleSelectModel.selectedValues != null &&
        leaderSingleSelectModel.selectedValues.length != null)) {

      nameLabel = leaderSingleSelectModel.selectedValues.first.name;
    }

    return nameLabel;
  }

  ItemRenderer get leaderItemRenderer => (dynamic user) => user.name;

  FactoryRenderer get leaderFactoryRenderer => (_) => objective_detail_component.LeaderRendererComponentNgFactory;

  Date get startDate {
    Date _startDate;
    if (objective.startDate != null) {
      _startDate = new Date.fromTime(objective.startDate);
    }
    return _startDate;
  }

  set startDate(Date _startDate)  {
    if (_startDate == null) {
      objective.startDate = null;
    } else {
      objective.startDate = _startDate.asUtcTime();
    }
  }

  Date get endDate {
    Date _endDate;
    if (objective.endDate != null) {
      _endDate = new Date.fromTime(objective.endDate);
    }
    return _endDate;
  }

  set endDate(Date _endDate) {
    if (_endDate == null) {
      objective.endDate = null;
    } else {
      objective.endDate = _endDate.asUtcTime();
    }
  }

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
    return objective.name?.trim()?.isNotEmpty ?? false;
  }
}

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
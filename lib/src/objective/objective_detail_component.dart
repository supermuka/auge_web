// Copyright (c) 2017, Levius.

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_components/model/ui/has_factory.dart';

import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_server/model/user.dart';
import 'package:auge_server/model/group.dart';

import 'package:auge_web/message/messages.dart';

import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/src/group/group_service.dart';

// ignore_for_file: uri_has_not_been_generated
import 'objective_detail_component.template.dart' as objective_detail_component;

@Component(
    selector: 'auge-objective-detail',
    providers: const [UserService, GroupService],
    directives: const [
      coreDirectives,
      materialDirectives,
    ],
    templateUrl: 'objective_detail_component.html',
    styleUrls: const [
      'objective_detail_component.css'
    ])

class ObjectiveDetailComponent extends Object implements OnInit /* with CanReuse implements OnActivate */ {

  final AuthService _authService;
  final UserService _userService;
  final ObjectiveService _objectiveService;
  final GroupService _groupService;

  @Input()
  Objective selectedObjective;

  final _closeController = new StreamController<void>.broadcast(sync: true);

  /// Publishes events when close.
  @Output()
  Stream<void> get close => _closeController.stream;

  final _saveController = new StreamController<Objective>.broadcast(sync: true);

  /// Publishes events when save.
  @Output()
  Stream<Objective> get save => _saveController.stream;

  Objective objective = new Objective();

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
  new DateRange(new Date.today().add(years: -1), new Date.today().add(years: 1));

  ObjectiveDetailComponent(this._authService, this._userService, this._objectiveService, this._groupService) {

  }

  // Define messages and labels
  static final String requiredValueMsg = CommonMessage.requiredValueMsg();

  static final String addObjectiveLabel =  ObjectiveMessage.label('Add Objective');
  static final String editObjectiveLabel =  ObjectiveMessage.label('Edit Objective');
  static final String nameLabel =  ObjectiveMessage.label('Name');
  static final String descriptionLabel =  ObjectiveMessage.label('Description');
  static final String groupLabel =  ObjectiveMessage.label('Group');
  static final String noMatchLabel =  ObjectiveMessage.label('No Match');
  static final String leaderLabel =  ObjectiveMessage.label('Leader');
  static final String stageLabel =  ObjectiveMessage.label('Stage');
  static final String objectiveLabel =  ObjectiveMessage.label('Objective');

  static final String startDateLabel =  ObjectiveMessage.label('Start Date');
  static final String endDateLabel =  ObjectiveMessage.label('End Date');
  static final String alignedToLabel =  ObjectiveMessage.label('Aligned To');

  static final String saveButtonLabel = CommonMessage.buttonLabel('Save');
  static final String closeButtonLabel = CommonMessage.buttonLabel('Close');

  @override
  void ngOnInit() async {

    if (selectedObjective != null) {
      // Clone objective
      objective = selectedObjective.clone();

    } else {
      objective.organization = _authService.selectedOrganization;
    }

    // Aligned to Objectives
    List<Objective> alignedToObjectives = await _objectiveService.getObjectives(_authService.selectedOrganization.id);

    // Remove the current object
    if (objective.id != null)
      alignedToObjectives.removeWhere((testObjective) => testObjective.id == objective.id);


    alignedToOptions = new StringSelectionOptions<Objective>(
        alignedToObjectives, toFilterableString: (Objective obj) => obj.name);

    alignedToSingleSelectModel =
    new SelectionModel.single()
      ..selectionChanges.listen((alignedTo) {

        if (alignedTo.isNotEmpty && alignedTo.first.added != null && alignedTo.first.added.length != 0 && alignedTo.first.added?.first != null) {
          objective.alignedTo = alignedTo.first.added.first;
        }
      });

    if (objective.alignedTo != null)
      alignedToSingleSelectModel.select(objective.alignedTo);

    // Leader
    List<User> users = await _userService.getUsersByOrganizationId(_authService.selectedOrganization.id, withProfile: true);

    leaderSingleSelectModel =
    new SelectionModel.single()
      ..selectionChanges.listen((leader) {

        if (leader.isNotEmpty && leader.first.added != null && leader.first.added.length != 0 && leader.first.added?.first != null) {
          objective.leader = leader.first.added.first;
        }
      });

    if (objective.leader != null)
      leaderSingleSelectModel.select(objective.leader);

    leaderOptions = new StringSelectionOptions<User>(
        users, toFilterableString: (User user) => user.name);

    // Group
    List<Group> groups = await _groupService.getGroups(_authService.selectedOrganization.id);

    groupOptions = new StringSelectionOptions<Group>(
        groups, toFilterableString: (Group gru) => gru.name);

    groupSingleSelectModel =
    new SelectionModel.single()
      ..selectionChanges.listen((groupEvent) {

        if (groupEvent.isNotEmpty && groupEvent.first.added != null && groupEvent.first.added.length != 0 && groupEvent.first.added?.first != null) {
          objective.group = groupEvent.first.added.first;
        }
      });

    if (objective.group != null)
      groupSingleSelectModel.select(objective.group);
  }

  void saveObjective() async {

    await _objectiveService.saveObjective(objective);
    _saveController.add(objective);
    closeDetail();

  }

  void closeDetail() {
     _closeController.add(null);
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

  set startDate(Date _startDate) {
    objective.startDate = _startDate.asUtcTime();
  }

  Date get endDate {
    Date _endDate;
    if (objective.endDate != null) {
      _endDate = new Date.fromTime(objective.endDate);
    }
    return _endDate;
  }

  set endDate(Date _endDate) {
    objective.endDate = _endDate.asUtcTime();
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
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_router/angular_router.dart';
import 'package:auge_server/model/group.dart';
import 'package:auge_server/model/user.dart';

import 'package:auge_web/message/messages.dart';

import 'package:angular_components/model/ui/has_factory.dart';

import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/src/group/group_service.dart';

// ignore_for_file: uri_has_not_been_generated
import 'group_detail_component.template.dart' as group_detail_component;

@Component(
    selector: 'auge-group-detail',
    providers: const [UserService],
    directives: const [
      coreDirectives,
      materialDirectives,
    ],
    templateUrl: 'group_detail_component.html',
    styleUrls: const [
      'group_detail_component.css'
    ])

class GroupDetailComponent extends Object implements OnInit {

  /// Entry to edit data. If new, this should be null
  @Input()
  Group selectedGroup;

  final _closeController = new StreamController<void>.broadcast(sync: true);

  /// Publishes events when close.
  @Output()
  Stream<void> get close => _closeController.stream;

  final _saveController = new StreamController<Group>.broadcast(sync: true);

  /// Publishes events when save.
  @Output()
  Stream<Group> get save => _saveController.stream;

  final AuthService _authService;
  final UserService _userService;
  final GroupService _groupService;

  final Location _location;
  final Router _router;

  Group group = new Group();
  List<GroupType> groupTypes = new List();

  String superGroupInputText = '';
  String leaderInputText = '';

  SelectionOptions superGroupOptions;
  SelectionModel superGroupSingleSelectModel;
  SelectionOptions leaderOptions;
  SelectionModel leaderSingleSelectModel;

  GroupDetailComponent(this._authService, this._userService, this._groupService, this._location, this._router) {
  }

  // Define messages and labels
  static final String requiredValueMsg =  CommonMessage.requiredValueMsg();
  static final String addGroupLabel =  GroupMessage.label('Add Group');
  static final String editGroupLabel =  GroupMessage.label('Edit Group');
  static final String nameLabel =  GroupMessage.label('Name');
  static final String superGroupLabel =  GroupMessage.label('Super Group');
  static final String groupTypeLabel = GroupMessage.label('Group Type');
  static final String leaderLabel =  GroupMessage.label('Leader');
  static final String activeLabel =  GroupMessage.label('Active');
  static final String noMatchLabel =  GroupMessage.label('No Match');

  static final String saveButtonLabel = CommonMessage.buttonLabel('Save');
  static final String closeButtonLabel = CommonMessage.buttonLabel('Close');


  @override
  void ngOnInit() async {

    print('ngOnInit');
    print(selectedGroup);

    if (selectedGroup != null) {
      // Clone objective
      group = selectedGroup.clone();
    } else {
      group.organization = _authService.selectedOrganization;
      group.active = true;

    }

    // Super Group
    List<Group> superGroups = await _groupService.getGroups(_authService.selectedOrganization.id);

    // Remove the current object
    if (group.id != null)
      superGroups.removeWhere((testGroup) => testGroup.id == group.id);


    superGroupOptions = new StringSelectionOptions<Group>(
        superGroups, toFilterableString: (Group gru) => gru.name);

    superGroupSingleSelectModel =
    new SelectionModel.single()
      ..selectionChanges.listen((superGroupEvent) {

        if (superGroupEvent.isNotEmpty && superGroupEvent.first.added != null && superGroupEvent.first.added.length != 0 && superGroupEvent.first.added?.first != null) {
          group.superGroup = superGroupEvent.first.added.first;
        }
      });

    if (group.superGroup != null)
      superGroupSingleSelectModel.select(group.superGroup);

    // Leader
    List<User> users = await _userService.getUsersByOrganizationId(_authService.selectedOrganization.id, withProfile: true);

    leaderSingleSelectModel =
    new SelectionModel.single()
      ..selectionChanges.listen((leaderEvent) {

        if (leaderEvent.isNotEmpty && leaderEvent.first.added != null && leaderEvent.first.added.length != 0 && leaderEvent.first.added?.first != null) {
          group.leader = leaderEvent.first.added.first;
        }
      });

    if (group.leader != null)
      leaderSingleSelectModel.select(group.leader);

    leaderOptions = new StringSelectionOptions<User>(
        users, toFilterableString: (User user) => user.name);

    groupTypes = await _groupService.getGroupTypes();

    if (group.groupType == null) {
      group.groupType = groupTypes?.last;
    }
  }

  void saveGroup() async {

    print('*** saveGroup ***');
    print('organization');
    print(group.organization.id);
    print('groupType');
    print(group.groupType.id);
    print('leader');
    print(group.leader.id);
    print('super group');
    print(group.superGroup.id);

    await _groupService.saveObjective(group);
    _saveController.add(group);
    closeDetail();
  }

  closeDetail() {
    _closeController.add(null);
  }

  String get superGroupLabelRenderer {
    String nameLabel;
    if ((superGroupSingleSelectModel != null &&
        superGroupSingleSelectModel.selectedValues != null &&
        superGroupSingleSelectModel.selectedValues.length != null)) {

      nameLabel = superGroupSingleSelectModel.selectedValues.first.name;
    }

    return nameLabel;
  }

  ItemRenderer get superGroupItemRenderer => (dynamic gru) => gru.name;

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

  FactoryRenderer get leaderFactoryRenderer => (_) => group_detail_component.LeaderRendererComponentNgFactory;

  bool get validInput {
    return group.name?.trim()?.isNotEmpty ?? false;
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
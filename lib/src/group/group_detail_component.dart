// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';

import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_checkbox/material_checkbox.dart';
import 'package:angular_components/material_input/material_auto_suggest_input.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/model/selection/string_selection_options.dart';
import 'package:angular_components/model/ui/has_factory.dart';
import 'package:angular_components/material_chips/material_chip.dart';
import 'package:angular_components/material_chips/material_chips.dart';
import 'package:angular_components/material_radio/material_radio.dart';
import 'package:angular_components/material_radio/material_radio_group.dart';

import 'package:auge_server/model/general/group.dart';
import 'package:auge_server/model/general/user.dart';

import 'package:auge_web/message/messages.dart';
import 'package:auge_web/message/model_messages.dart';

import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/src/group/group_service.dart';

// ignore_for_file: uri_has_not_been_generated
import 'group_detail_component.template.dart' as group_detail_component;

@Component(
    selector: 'auge-group-detail',
    providers: const [overlayBindings, UserService],
    directives: const [
      coreDirectives,
      materialInputDirectives,
      AutoFocusDirective,
      MaterialDialogComponent,
      ModalComponent,
      MaterialIconComponent,
      MaterialButtonComponent,
      MaterialAutoSuggestInputComponent,
      MaterialButtonComponent,
      MaterialCheckboxComponent,
      MaterialRadioComponent,
      MaterialRadioGroupComponent,
      MaterialChipsComponent,
      MaterialChipComponent,
    ],
    templateUrl: 'group_detail_component.html',
    styleUrls: const [
      'group_detail_component.css'
    ])

class GroupDetailComponent extends Object implements OnInit {
  /// Entry to edit data. If new, this should be null
  @Input()
  Group selectedGroup;

  final _closedController = new StreamController<void>.broadcast(sync: true);

  /// Publishes events when close.
  @Output()
  Stream<void> get closed => _closedController.stream;

  final _savedController = new StreamController<String>.broadcast(sync: true);

  /// Publishes events when save.
  @Output()
  Stream<String> get saved => _savedController.stream;

  //final AuthService _authService;
  final UserService _userService;
  final GroupService _groupService;

  Group group;
  List<GroupType> groupTypes = [];

  String superGroupInputText = '';
  String leaderInputText = '';
  String memberInputText = '';

  SelectionOptions superGroupOptions;
  SelectionModel superGroupSingleSelectModel;

  SelectionOptions leaderOptions;
  SelectionModel leaderSingleSelectModel;

  SelectionOptions memberOptions;
  SelectionModel memberSingleSelectModel;

  List<Group> _superGroups;
  List<User> _users;
  List<User> memberUsers = new List();

  /// When it exists, the error/exception message presented into dialog view.
  String dialogError;

  GroupDetailComponent(/*this._authService,*/ this._userService, this._groupService) {
    superGroupSingleSelectModel = SelectionModel.single();
    leaderSingleSelectModel = SelectionModel.single();
    memberSingleSelectModel = SelectionModel.single();
  }

  // Define messages and labels
  static final String saveButtonLabel = CommonMsg.buttonLabel('Save');
  static final String closeButtonLabel = CommonMsg.buttonLabel('Close');

  static final String requiredValueMsg =  CommonMsg.requiredValueMsg();
  static final String addGroupLabel =  GroupMsg.label('Add Group');
  static final String editGroupLabel =  GroupMsg.label('Edit Group');
  static final String noMatchLabel =  GroupMsg.label('No Match');

  static final String nameLabel =  GroupFieldMsg.label(Group.nameField);
  static final String superGroupLabel =  GroupFieldMsg.label(Group.superGroupField);
  static final String groupTypeLabel = GroupFieldMsg.label(Group.groupTypeField);
  static final String leaderLabel =  GroupFieldMsg.label(Group.leaderField);
  static final String activeLabel =  GroupFieldMsg.label(Group.activeField);
  static final String membersLabel =  GroupFieldMsg.label(Group.membersField);

  @override
  void ngOnInit() async {
    //created as new here, even if it is later replaced by a query, because the query may take a while and the Angular will continue to process, causing an exception if the object does not exist
    group = Group();
    if (selectedGroup != null) {
      // Clone objective
      // group = selectedGroup.clone();
      group = await _groupService.getGroup(selectedGroup.id);
    } else {
      group.organization = _groupService.authService.selectedOrganization;
      group.active = true;
    }

    try {
      _superGroups = await _groupService.getGroups(_groupService.authService.selectedOrganization.id);
      _users = await _userService.getUsers(_groupService.authService.selectedOrganization.id, withProfile: true);
      groupTypes = await _groupService.getGroupTypes();
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }



    // Super Group
   //  List<Group> superGroups = await _groupService.getGroups(_authService.selectedOrganization.id);

    // Remove the current object
    if (group.id != null)
      _superGroups.removeWhere((testGroup) => testGroup.id == group.id);


    superGroupOptions = new StringSelectionOptions<Group>(
        _superGroups, toFilterableString: (Group gru) => gru.name);

    superGroupSingleSelectModel.selectionChanges.listen((superGroupEvent) {

        if (superGroupEvent.isNotEmpty && superGroupEvent.first.added != null && superGroupEvent.first.added.length != 0 && superGroupEvent.first.added?.first != null) {
          group.superGroup = superGroupEvent.first.added.first;
        } else {
          group.superGroup = null;
        }
      });

    if (group.superGroup != null)
      superGroupSingleSelectModel.select(group.superGroup);

    // Leader
    // List<User> users = await _userService.getUsers(_authService.selectedOrganization.id, withProfile: true);


    leaderSingleSelectModel.selectionChanges.listen((leaderEvent) {

        if (leaderEvent.isNotEmpty && leaderEvent.first.added != null && leaderEvent.first.added.length != 0 && leaderEvent.first.added?.first != null) {
          group.leader = leaderEvent.first.added.first;
        } else {
          group.leader = null;
        }
      });

    if (group.leader != null)
      leaderSingleSelectModel.select(group.leader);

    leaderOptions = new StringSelectionOptions<User>(
        _users, toFilterableString: (User user) => user.name);

      memberOptions = new StringSelectionOptions<User>(
          _users, toFilterableString: (User user) => user.name);


      memberSingleSelectModel.selectionChanges.listen((member) {

        if (member.isNotEmpty && member.first.added != null && member.first.added.length != 0 && member.first.added?.first != null) {
          if (!group.members.contains(member.first.added.first)) {
            group.members.add(member.first.added.first as User);
          }
        }
      });

    // groupTypes = await _groupService.getGroupTypes();

    if (group.groupType == null) {
      group.groupType = groupTypes?.last;
    }
  }

  void saveGroup() async {
    try {
      await _groupService.saveGroup(group);
      _savedController.add(group.id);
      closeDetail();
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }
  }

  void closeDetail() {
    _closedController.add(null);
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

  FactoryRenderer get leaderFactoryRenderer => (_) => group_detail_component.UserRendererComponentNgFactory;

  removeMember(User user) {
    group.members.remove(user);
  }

  String get memberLabelRenderer {
    String nameLabel;
    if ((memberSingleSelectModel != null &&
        memberSingleSelectModel.selectedValues != null &&
        memberSingleSelectModel.selectedValues.length != null)) {

      nameLabel = memberSingleSelectModel.selectedValues.first?.name;
    }

    return nameLabel;
  }

  ItemRenderer get memberItemRenderer => (dynamic user) => user.name;

  FactoryRenderer get factoryRenderer => (_) => group_detail_component.UserRendererComponentNgFactory;

  String userUrlImage(User userMember) {
    return common_service.userUrlImage(userMember?.userProfile?.image);
  }

  bool get validInput {
    return group.name?.trim()?.isNotEmpty ?? false;
  }
}

@Component(
    selector: 'user-renderer',
    template: '<div left-icon class="avatar-icon" [style.background-image]="disPlayurl"></div>{{disPlayName}}',

    styles: const [
      ''
    ],
    directives: const [
      MaterialIconComponent
    ])
class UserRendererComponent implements RendersValue {
  String disPlayName = '';
  String disPlayurl;

  @override
  set value(newValue) {
    disPlayName = (newValue as User).name;
    disPlayurl = 'url(' + common_service.userUrlImage((newValue as User)?.userProfile?.image)  + ')';
  }
}
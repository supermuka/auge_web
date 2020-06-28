// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

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
import 'package:angular_components/material_select/material_dropdown_select.dart';

import 'package:auge_shared/domain/general/group.dart';
import 'package:auge_shared/domain/general/user.dart';
import 'package:auge_shared/domain/objective/objective.dart';

import 'package:auge_shared/message/messages.dart';
import 'package:auge_shared/message/domain_messages.dart';

import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/src/group/group_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';

// ignore_for_file: uri_has_not_been_generated
import 'objectives_filter_component.template.dart' as objectives_filter_component;

@Component(
    selector: 'auge-objectives-filter',
    providers: const [overlayBindings, GroupService, UserService],
    templateUrl: 'objectives_filter_component.html',
    styleUrls: const [
      'objectives_filter_component.css'
    ],
    directives: const [
      coreDirectives,
      materialInputDirectives,
      AutoFocusDirective,
      MaterialDialogComponent,
      ModalComponent,
      MaterialDropdownSelectComponent,
      MaterialIconComponent,
      MaterialButtonComponent,
      MaterialAutoSuggestInputComponent,
      MaterialButtonComponent,
      MaterialCheckboxComponent,
    ])
class ObjectivesFilterComponent with CanReuse implements OnActivate, OnDeactivate {

  final ObjectiveService _objectiveService;
  final UserService _userService;
  final GroupService _groupService;
 // final Router _router;
  final Location _location;

  bool modalVisible = false;

  String groupInputText = '';
  String leaderInputText = '';

  SelectionOptions groupOptions;
  SelectionModel groupMultiSelectModel;

  SelectionOptions leaderOptions;
  SelectionModel leaderMultiSelectModel;

  bool archived = false;

  /// When it exists, the error/exception message presented into dialog view.
  String dialogError;

  // Define messages and labels
  static final String searchLabel =  CommonMsg.label(CommonMsg.searchLabel);
  static final String filterLabel = CommonMsg.label(CommonMsg.filterLabel);
  static final String moreLabel = CommonMsg.label(CommonMsg.moreLabel);
  static final String noMatchLabel =  CommonMsg.label(CommonMsg.noMatchLabel);

  static final String applyButtonLabel = CommonMsg.buttonLabel(CommonMsg.applyButtonLabel);
  static final String closeButtonLabel = CommonMsg.buttonLabel(CommonMsg.closeButtonLabel);

  static final String orderedByLabel = ObjectiveMsg.label(ObjectiveMsg.orderedByLabel);
  static final String requiredValueMsg = CommonMsg.requiredValueMsg();

  static final String objectivesFilterLabel = ObjectiveMsg.label(ObjectiveMsg.objectivesFilterLabel);

  // Define labels from fields.
  static final String nameLabel = ObjectiveDomainMsg.fieldLabel(Objective.nameField);
  static final String startDateLabel = ObjectiveDomainMsg.fieldLabel(Objective.startDateField); // FieldMsg.label('${Objective.className}.${Objective.startDateField}');
  static final String endDateLabel =  ObjectiveDomainMsg.fieldLabel(Objective.endDateField); // FieldMsg.label('${Objective.className}.${Objective.endDateField}');
  static final String archivedLabel = ObjectiveDomainMsg.fieldLabel(Objective.archivedField);
  static final String groupLabel =  ObjectiveDomainMsg.fieldLabel(Objective.groupField); // FieldMsg.label('${Group.className}.${Group.superGroupField}');
  static final String leaderLabel = ObjectiveDomainMsg.fieldLabel(Group.leaderField);  // FieldMsg.label('${Group.className}.${Group.leaderField}');

  final objectivesOrderedByOptions = [nameLabel, groupLabel, leaderLabel, startDateLabel, endDateLabel];

  String orderedBy = nameLabel;

  ObjectivesFilterComponent(this._objectiveService, this._userService, this._groupService, this._location) {
  //  groupMultiSelectModel = SelectionModel.multi();
  //  leaderMultiSelectModel = SelectionModel.multi();
  }

  @override
  void onActivate(RouterState previous, RouterState current) async {
    modalVisible = true;

    List<Group> _groups;
    List<User> _users;
    try {
      _groups = await _groupService.getGroups(_groupService.authService.authorizedOrganization.id, onlyIdAndName: true);
      _users = await _userService.getUsers(_groupService.authService.authorizedOrganization.id, onlyIdAndName: true, withUserProfile: true);
    //  groupTypes = await _groupService.getGroupTypes();
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }

    groupOptions = StringSelectionOptions<Group>(
        _groups, toFilterableString: (Group gru) => gru.name);

    leaderOptions = StringSelectionOptions<User>(
        _users, toFilterableString: (User user) => user.name);

    groupMultiSelectModel = SelectionModel.multi();
    leaderMultiSelectModel = SelectionModel.multi();

    // groupOptions.optionsList.
    int i;
    for (String id in _objectiveService.objectivesFilterOrder.groupIds) {
      i = groupOptions.optionsList.indexWhere((item) => item.id == id);
      if (i != -1) groupMultiSelectModel.select(groupOptions.optionsList[i]);
    }

    for (String id in _objectiveService.objectivesFilterOrder.leaderUserIds) {
      i = leaderOptions.optionsList.indexWhere((item) => item.id == id);
      if (i != -1) leaderMultiSelectModel.select(leaderOptions.optionsList[i]);
    }
  }

  @override
  void onDeactivate(RouterState current, RouterState next) {
    modalVisible = false;
  }

  void applyFilter() async {

    _objectiveService.objectivesFilterOrder.filteredItems = 0;

    _objectiveService.objectivesFilterOrder.groupIds = groupMultiSelectModel.selectedValues.map((f) => f.id).toSet().cast();
    _objectiveService.objectivesFilterOrder.filteredItems += _objectiveService.objectivesFilterOrder.groupIds.length;
    _objectiveService.objectivesFilterOrder.leaderUserIds = leaderMultiSelectModel.selectedValues.map((f) => f.id).toSet().cast();
    _objectiveService.objectivesFilterOrder.filteredItems += _objectiveService.objectivesFilterOrder.leaderUserIds.length;
    _objectiveService.objectivesFilterOrder.archived = archived;
    _objectiveService.objectivesFilterOrder.filteredItems += (archived) ? 1 : 0;
    _objectiveService.objectivesFilterOrder.orderedBy = orderedBy;

    closeFilter();
  }

  void closeFilter() {
    _location.back();
  }

  void showPopupChangeGroup(bool event) {
    if (event == false) {
      var selectedValues = groupMultiSelectModel?.selectedValues;
      if (selectedValues != null && selectedValues.isNotEmpty) {
        if (selectedValues.length == 1) {
          groupInputText = groupItemRenderer(selectedValues.first);
        } else {
          groupInputText =
          "${groupItemRenderer(selectedValues.first)} + ${selectedValues
              .length - 1} ${moreLabel}";
        }
      }
    }
  }

  void showPopupChangeLeader(bool event) {
    if (event == false) {
      var selectedValues = leaderMultiSelectModel?.selectedValues;
      if (selectedValues != null && selectedValues.isNotEmpty) {
        if (selectedValues.length == 1) {
          leaderInputText = leaderItemRenderer(selectedValues.first);
        } else {
          leaderInputText =
          "${leaderItemRenderer(selectedValues.first)} + ${selectedValues
              .length - 1} ${moreLabel}";
        }
      }
    }
  }

  void clearGroup() {

    List<dynamic> groupsSelected = groupMultiSelectModel.selectedValues.toList();

    groupsSelected.forEach((item) => groupMultiSelectModel.deselect(item));
    groupInputText = '';

  }

  void clearLeader() {

    List<dynamic> leadersSelected = leaderMultiSelectModel.selectedValues.toList();

    leadersSelected.forEach((item) => leaderMultiSelectModel.deselect(item));
    leaderInputText = '';

  }

  ItemRenderer get groupItemRenderer => (dynamic gru) => gru.name;

  String get leaderLabelRenderer {
    String nameLabel;
    if ((leaderMultiSelectModel != null &&
        leaderMultiSelectModel.selectedValues != null &&
        leaderMultiSelectModel.selectedValues.length != null)) {

      nameLabel = leaderMultiSelectModel.selectedValues.first.name;
    }

    return nameLabel;
  }

  ItemRenderer get leaderItemRenderer => (dynamic user) => user.name;

  FactoryRenderer get leaderFactoryRenderer => (_) => objectives_filter_component.UserRendererComponentNgFactory;

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
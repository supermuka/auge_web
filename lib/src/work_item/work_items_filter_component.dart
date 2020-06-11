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

import 'package:auge_shared/domain/general/user.dart';
import 'package:auge_shared/domain/work/work_item.dart';

import 'package:auge_shared/message/messages.dart';
import 'package:auge_shared/message/domain_messages.dart';

import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/src/work_item/work_item_service.dart';

// ignore_for_file: uri_has_not_been_generated
import 'work_items_filter_component.template.dart' as work_items_filter_component;

@Component(
    selector: 'auge-work-items-filter',
    providers: const [overlayBindings, UserService],
    templateUrl: 'work_items_filter_component.html',
    styleUrls: const [
      'work_items_filter_component.css'
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
class WorkItemsFilterComponent with CanReuse implements OnActivate, OnDeactivate {

  final WorkItemService _workItemService;
  final UserService _userService;
 // final Router _router;
  final Location _location;

  bool modalVisible = false;

  String assignedToInputText = '';

  SelectionOptions assignedToOptions;
  SelectionModel assignedToMultiSelectModel;



  bool archived = false;

  /// When it exists, the error/exception message presented into dialog view.
  String dialogError;

  // Define messages and labels
  static final String searchLabel =  CommonMsg.label(CommonMsg.searchLabel);
  static final String filterLabel = CommonMsg.label(CommonMsg.filterLabel);
  static final String moreLabel = CommonMsg.label(CommonMsg.moreLabel);
  static final String requiredValueMsg = CommonMsg.requiredValueMsg();
  static final String noMatchLabel =  CommonMsg.label(CommonMsg.noMatchLabel);
  static final String applyButtonLabel = CommonMsg.buttonLabel(CommonMsg.applyButtonLabel);
  static final String closeButtonLabel = CommonMsg.buttonLabel(CommonMsg.closeButtonLabel);

  static final String orderedByLabel = WorkItemMsg.label(WorkItemMsg.orderedByLabel);

  static final String workItemsFilterLabel = WorkItemMsg.label(WorkItemMsg.workItemsFilterLabel);

  // Define labels from fields.
  static final String nameLabel = WorkItemDomainMsg.fieldLabel(WorkItem.nameField);
  static final String dueDateLabel = WorkItemDomainMsg.fieldLabel(WorkItem.dueDateField);
  static final String archivedLabel = WorkItemDomainMsg.fieldLabel(WorkItem.archivedField);
  static final String assignedToLabel = WorkItemDomainMsg.fieldLabel(WorkItem.assignedToField);

  final workItemsOrderedByOptions = [dueDateLabel, nameLabel];

  String orderedBy = dueDateLabel;

  WorkItemsFilterComponent(this._workItemService, this._userService, this._location);

  @override
  void onActivate(RouterState previous, RouterState current) async {
    modalVisible = true;

    List<User> _users;
    try {
      _users = await _userService.getUsers(_workItemService.authService.authorizedOrganization.id, withUserProfile: true);
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }

    assignedToOptions = StringSelectionOptions<User>(
        _users, toFilterableString: (User user) => user.name);

    assignedToMultiSelectModel = SelectionModel.multi();

    // groupOptions.optionsList.
    int i;
    for (String id in _workItemService.workItemsFilterOrder.assignedToUserIds) {
      i = assignedToOptions.optionsList.indexWhere((item) => item.id == id);
      if (i != -1) assignedToMultiSelectModel.select(assignedToOptions.optionsList[i]);
    }
  }

  @override
  void onDeactivate(RouterState current, RouterState next) {
    modalVisible = false;
  }

  void applyFilter() async {

    //_workItemService.workItemsFilterOrder.filteredItems = 0;

    _workItemService.workItemsFilterOrder.assignedToUserIds = assignedToMultiSelectModel.selectedValues.map((f) => f.id).toSet().cast();
    //_workItemService.workItemsFilterOrder.filteredItems += _workItemService.workItemsFilterOrder.assignedToUserIds.length;
    _workItemService.workItemsFilterOrder.archived = archived;
    //_workItemService.workItemsFilterOrder.filteredItems += (archived) ? 1 : 0;
    _workItemService.workItemsFilterOrder.orderedBy = orderedBy;

    closeFilter();
  }

  void closeFilter() {
    _location.back();
  }

  void showPopupChangeAssignedTo(bool event) {
    if (event == false) {
      var selectedValues = assignedToMultiSelectModel?.selectedValues;
      if (selectedValues != null && selectedValues.isNotEmpty) {
        if (selectedValues.length == 1) {
          assignedToInputText = assignedToItemRenderer(selectedValues.first);
        } else {
          assignedToInputText =
          "${assignedToItemRenderer(selectedValues.first)} + ${selectedValues
              .length - 1} ${moreLabel}";
        }
      }
    }
  }

  void clearAssignedTo() {

    List<dynamic> assignedToSelected = assignedToMultiSelectModel.selectedValues.toList();

    assignedToSelected.forEach((item) => assignedToMultiSelectModel.deselect(item));
    assignedToInputText = '';

  }

  ItemRenderer get groupItemRenderer => (dynamic gru) => gru.name;

  String get assignedToLabelRenderer {
    String nameLabel;
    if ((assignedToMultiSelectModel != null &&
        assignedToMultiSelectModel.selectedValues != null &&
        assignedToMultiSelectModel.selectedValues.length != null)) {

      nameLabel = assignedToMultiSelectModel.selectedValues.first.name;
    }

    return nameLabel;
  }

  ItemRenderer get assignedToItemRenderer => (dynamic user) => user.name;

  FactoryRenderer get assignedToFactoryRenderer => (_) => work_items_filter_component.UserRendererComponentNgFactory;

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
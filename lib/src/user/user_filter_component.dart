// Copyright (c) 2019, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.ExampleSelectionOptions

import 'dart:async';

import 'package:angular/angular.dart';

import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_select/material_dropdown_select.dart';
import 'package:angular_components/material_select/dropdown_button.dart';
import 'package:angular_components/material_select/material_dropdown_select_accessor.dart';
import 'package:angular_components/material_select/material_select_searchbox.dart';
import 'package:angular_components/material_select/material_select_dropdown_item.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';

import 'package:angular_components/model/selection/select.dart';
import 'package:angular_components/model/selection/string_selection_options.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/ui/has_factory.dart';


import 'package:auge_server/model/general/user.dart';
import 'package:auge_server/shared/message/messages.dart';

@Component(
  selector: 'auge-user-filter',
  // providers: const [UserService],
  styleUrls: const ['user_filter_component.css'],
  templateUrl: 'user_filter_component.html',
  directives: const [
    coreDirectives,
    MaterialTooltipDirective,
    MaterialDropdownSelectComponent,
    DropdownSelectValueAccessor,
    MultiDropdownSelectValueAccessor,
    DropdownButtonComponent,
    MaterialSelectDropdownItemComponent,
    MaterialSelectSearchboxComponent,
    MaterialIconComponent,
  ])

class UserFilterComponent implements AfterChanges  {

 // final AppLayoutService _appLayoutService;
 //final UserService _userService;

  List<User> _users;

  @Input()
  set users(List<User> us) => _users = us;

  @Input()
  String userLabel;

  StringSelectionOptions<User> userOptions;
  SelectionModel<User> userMultiSelectModel;

  final _usersIdSelection = StreamController<Set<String>>();
  @Output()
  Stream<Set<String>> get changeSelection => _usersIdSelection.stream;

  UserFilterComponent(/* this._appLayoutService, this._userService */) {

    userMultiSelectModel = SelectionModel<User>.multi();

    userMultiSelectModel.selectionChanges.listen((_) {

      _usersIdSelection.add(userMultiSelectModel.selectedValues.map((u) => u.id).toSet());

    });

  }

  static final String userOriginalLabel = InsightMsg.label('Leader');
  static final String searchLabel = CommonMsg.label('Search');

  // Define messages and labels
  @override
  void ngAfterChanges() {

    if (_users != null) {

      // Deselect, if exists something.
      for (var user in userMultiSelectModel.selectedValues.toList()) {
        userMultiSelectModel.deselect(user);
      }

      userOptions = UserSelectionOptions(_users);

      selectAllUsers();
    }

  }

  /// Label for the button for multi selection.
  String get multiSelectUserLabel {
    var selectedValues = userMultiSelectModel?.selectedValues;
    if (selectedValues == null || selectedValues.isEmpty) {
      return "Select ${userLabel ?? userOriginalLabel}";
    } else if (selectedValues.length == 1) {
      return userItemRenderer(selectedValues.first);
    } else {
      return "${userItemRenderer(selectedValues.first)} + ${selectedValues.length - 1} more";
    }
  }

  ItemRenderer get userItemRenderer => (dynamic user) => user.id != null ? user.name : '(empty)';

  @ViewChild(MaterialSelectSearchboxComponent)
  MaterialSelectSearchboxComponent searchbox;

  void onDropdownVisibleChange(bool visible) {
    if (visible) {
      // TODO(google): Avoid using Timer.run.
      Timer.run(() {
        searchbox.focus();
      });
    }
  }

  void selectAllUsers() {
    for (User user in _users) {
      userMultiSelectModel.select(user);
    }
  }

  void clearAllUsers() {
    for (User user in _users) {
      userMultiSelectModel.deselect(user);
    }
  }
}

/// If the option does not support toString() that shows the label, the
/// toFilterableString parameter must be passed to StringSelectionOptions.
class UserSelectionOptions extends StringSelectionOptions<User>
    implements Selectable<User> {
  UserSelectionOptions(List<User> options)
      : super(options,
      toFilterableString: (User option) => option.id != null ? option.name.toString() : '(empty)');

  @override
  SelectableOption getSelectable(User item) => SelectableOption.Selectable;
}
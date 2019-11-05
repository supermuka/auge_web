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

import 'package:auge_server/model/general/group.dart';
import 'package:auge_server/shared/message/messages.dart';

@Component(
  selector: 'auge-group-filter',
 // providers: const [GroupService],
  styleUrls: const ['group_filter_component.css'],
  templateUrl: 'group_filter_component.html',
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

class GroupFilterComponent implements AfterChanges {

 // final AppLayoutService _appLayoutService;
 // final GroupService _groupService;

  List<Group> _groups;

  // SelectionOptions groupOptions;
  StringSelectionOptions<Group> groupOptions;
  SelectionModel<Group> groupMultiSelectModel;

  @Input()
  set groups(List<Group> g) => _groups = g;

  final _groupSelection = StreamController<List<Group>>();
  @Output()
  Stream<List<Group>> get changeSelection => _groupSelection.stream;

  GroupFilterComponent(/* this._appLayoutService, this._groupService */) {

    groupMultiSelectModel = SelectionModel<Group>.multi();

    groupMultiSelectModel.selectionChanges.listen((_) {

      _groupSelection.add(groupMultiSelectModel.selectedValues.toList());

    });

  }

  static final String groupLabel = InsightMsg.label('Group');
  static final String searchLabel = CommonMsg.label('Search');

  @override
  void ngAfterChanges() async {

      if (_groups != null) {

        // Deselect, if exists something.
        for (var group in groupMultiSelectModel.selectedValues.toList()) {
          groupMultiSelectModel.deselect(group);
        }

        groupOptions = GroupSelectionOptions(_groups);

        selectAllGroups();
     }
  }


  /// Label for the button for multi selection.
  String get multiSelectGroupLabel {
    var selectedValues = groupMultiSelectModel?.selectedValues;
    if (selectedValues == null || selectedValues.isEmpty) {
      return "Select Group";
    } else if (selectedValues.length == 1) {
      return groupItemRenderer(selectedValues.first);
    } else {
      return "${groupItemRenderer(selectedValues.first)} + ${selectedValues.length - 1} more";
    }
  }

  ItemRenderer get groupItemRenderer => (dynamic group) => group.name;

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

  void selectAllGroups() {
    for (Group group in _groups) {
      groupMultiSelectModel.select(group);
    }
  }

  void clearAllGroups() {
    for (Group group in _groups) {
      groupMultiSelectModel.deselect(group);
    }
  }
}

/// If the option does not support toString() that shows the label, the
/// toFilterableString parameter must be passed to StringSelectionOptions.
class GroupSelectionOptions extends StringSelectionOptions<Group>
    implements Selectable<Group> {
  GroupSelectionOptions(List<Group> options)
      : super(options,
      toFilterableString: (Group option) => option.name.toString());

  @override
  SelectableOption getSelectable(Group item) => SelectableOption.Selectable;
}
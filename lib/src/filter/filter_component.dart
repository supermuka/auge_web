// Copyright (c) 2019, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.ExampleSelectionOptions

import 'dart:async';

import 'package:angular/angular.dart';

import 'package:angular_components/material_button/material_button.dart';
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

import 'package:auge_server/shared/message/messages.dart';

@Component(
  selector: 'auge-filter',
 // providers: const [GroupService],
  styleUrls: const ['filter_component.css'],
  templateUrl: 'filter_component.html',
  directives: const [
    coreDirectives,
    MaterialTooltipDirective,
    MaterialDropdownSelectComponent,
    DropdownSelectValueAccessor,
    MultiDropdownSelectValueAccessor,
    DropdownButtonComponent,
    MaterialSelectDropdownItemComponent,
    MaterialSelectSearchboxComponent,
    MaterialButtonComponent,
    MaterialIconComponent,
  ])

class FilterComponent  /* implements AfterChanges */ {

 // List<FilterOption> _filterOptions;

  // SelectionOptions groupOptions;
  StringSelectionOptions<FilterOption> filterStringSelectionOptions;
  SelectionModel<FilterOption> filterOptionMultiSelectModel;

  @Input()
  String filterNameLabel;

  @Input()
  set filterOptions(List<FilterOption> _filterOptions) {

    if (_filterOptions != null) {

      // Deselect, if exists something.
     // for (FilterOption option in filterOptionMultiSelectModel.selectedValues) {
     //   filterOptionMultiSelectModel.deselect(option);
     // }
      filterOptionMultiSelectModel = SelectionModel<FilterOption>.multi();

      filterOptionMultiSelectModel.selectionChanges.listen((_) {

        _filterOptionsIdSelection.add( filterOptionMultiSelectModel.selectedValues.map((m) => m?.id).toList());

      });

      filterStringSelectionOptions = FilterSelectionOptions(_filterOptions);

      // By default, select all
      selectAll();

    }

  }

  @Input()
  set initialFilterOptionsIdsSelected(List<String> _initialFilterOptionsIdsSelected) {
    if (_initialFilterOptionsIdsSelected != null) {
    selectSpecific(_initialFilterOptionsIdsSelected);
    } else {
    selectAll();
    }
  }

  final _filterOptionsIdSelection = StreamController<List<String>>();
  @Output()
  Stream<List<String>> get changeSelection => _filterOptionsIdSelection.stream;

  FilterComponent() {



  }

  static final String searchLabel = CommonMsg.label('Search');
  static final String filterLabel = CommonMsg.label('Filter');
  static final String moreLabel = CommonMsg.label('more');
  static final String emptyLabel = CommonMsg.label('empty');



/*
  @override
  void ngAfterChanges()  {

      if (_filterOptions != null) {

        // Deselect, if exists something.
        for (FilterOption option in filterOptionMultiSelectModel.selectedValues) {
          filterOptionMultiSelectModel.deselect(option);
        }

        filterStringSelectionOptions = FilterSelectionOptions(_filterOptions);

        if (initialFilterOptionsIdsSelected != null) {
          selectSpecific(initialFilterOptionsIdsSelected);
        } else {
          selectAll();
        }
     }
  }
  */


  /// Label for the button for multi selection.
  String get multiSelectFilterLabel {
    var selectedValues = filterOptionMultiSelectModel?.selectedValues;
    if (selectedValues == null || selectedValues.isEmpty) {
      return "${searchLabel} ${filterLabel}";
    } else if (selectedValues.length == 1) {
      return filterItemRenderer(selectedValues.first);
    } else {
      return "${filterItemRenderer(selectedValues.first)} + ${selectedValues.length - 1} ${moreLabel}";
    }
  }

  ItemRenderer get filterItemRenderer => (dynamic filter) => filter?.id != null ? filter.name.toString() : '(${emptyLabel})';

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

  void selectSpecific(List<String> filterOptionsIdToSelection) {
   // clearAll();

    List<FilterOption> specificFilterOptions = filterStringSelectionOptions.optionsList.where((o) => filterOptionsIdToSelection.contains(o.id));

    for (FilterOption filterOption in specificFilterOptions) {
      filterOptionMultiSelectModel.select(filterOption);
    }
  }

  void selectAll() {
    for (FilterOption filterOpetion in filterStringSelectionOptions.optionsList) {
      filterOptionMultiSelectModel.select(filterOpetion);
    }
  }

  void clearAll() {
    for (FilterOption filterOption in filterStringSelectionOptions.optionsList) {
      filterOptionMultiSelectModel.deselect(filterOption);
    }
  }
}

/// If the option does not support toString() that shows the label, the
/// toFilterableString parameter must be passed to StringSelectionOptions.
class FilterSelectionOptions extends StringSelectionOptions<FilterOption>
    implements Selectable<FilterOption> {

  static final String emptyLabel = CommonMsg.label('empty');

  FilterSelectionOptions(List<FilterOption> options)
      : super(options,
      toFilterableString: (FilterOption filterOption) =>  filterOption?.id != null ? filterOption.name.toString() : '(${emptyLabel})');

  @override
  SelectableOption getSelectable(FilterOption item) => SelectableOption.Selectable;
}

class FilterOption {
  final String id;
  final String name;

  FilterOption(this.id, this.name);
}
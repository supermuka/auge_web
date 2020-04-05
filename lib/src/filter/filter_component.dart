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

import 'package:auge_shared/message/messages.dart';

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

class FilterComponent /* implements  implements AfterChanges */ {

 // List<FilterOption> _filterOptions;

  // SelectionOptions groupOptions;
  StringSelectionOptions<FilterOption> filterStringSelectionOptions;
  SelectionModel<FilterOption> filterOptionMultiSelectModel;

 // bool optionsNullAndInitialCalled = false;
 // List<String> _initialFilterOptionsIdsSelected;


  @Input()
  String filterNameLabel;

  @Input()
  set filter(Filter _filter) {
    filterStringSelectionOptions = FilterSelectionOptions(_filter.filterOptions);

    List<FilterOption> selectedValues;
    if (_filter.initialIdsToFilter == null) {
      selectedValues = null;
    } else if (_filter.initialIdsToFilter.isEmpty)  {
      selectedValues = [];
    } else if (_filter.initialIdsToFilter.isNotEmpty) {
      selectedValues = _filter.filterOptions.where((test) => _filter.initialIdsToFilter.indexWhere((testOld) => testOld == test.id) != -1).toList();

    // To preserve selected values whether exists for new options.
    } else if (filterOptionMultiSelectModel != null && filterOptionMultiSelectModel.selectedValues.length != 0) {
      List<FilterOption> selectedValuesOld = filterOptionMultiSelectModel.selectedValues.toList();

      selectedValues = _filter.filterOptions.where((test) => selectedValuesOld.indexWhere((testOld) => testOld.id == test.id) != -1).toList();
    }
    filterOptionMultiSelectModel = SelectionModel<FilterOption>.multi();

    filterOptionMultiSelectModel.selectionChanges.listen((_) {
      _filterOptionsIdSelection.add( filterOptionMultiSelectModel.selectedValues.map((m) => m?.id).toList());
    });

    if (selectedValues == null) {
      selectAll();
    } else if (selectedValues != null && selectedValues.length > 0) {
      selectSpecifics(selectedValues);
    }
  }

  @Input()
  set filterOptions(List<FilterOption> _filterOptions) {

    if (_filterOptions != null) {

      // Deselect, if exists something.
     // for (FilterOption option in filterOptionMultiSelectModel.selectedValues) {
     //   filterOptionMultiSelectModel.deselect(option);
     // }

      filterStringSelectionOptions = FilterSelectionOptions(_filterOptions);

      // To preserve selected values whether exists for new options.
      /*
      List<FilterOption> selectedValues;
      if (filterOptionMultiSelectModel != null && filterOptionMultiSelectModel.selectedValues.length != 0) {
        List<FilterOption> selectedValuesOld = filterOptionMultiSelectModel.selectedValues.toList();

        selectedValues = _filterOptions.where((test) => selectedValuesOld.indexWhere((testOld) => testOld.id == test.id) != -1).toList();
      }

      if (selectedValues != null && selectedValues.length > 0)  {
        filterOptionMultiSelectModel = SelectionModel<FilterOption>.multi(selectedValues: selectedValues);
      } else {
       */
        filterOptionMultiSelectModel = SelectionModel<FilterOption>.multi();
       /*
      }
*/
      filterOptionMultiSelectModel.selectionChanges.listen((_) {

        _filterOptionsIdSelection.add( filterOptionMultiSelectModel.selectedValues.map((m) => m?.id).toList());

      });

      // Call again when options was null and initial already called
      /*
      if (optionsNullAndInitialCalled) {
        if (this._initialFilterOptionsIdsSelected != null && this._initialFilterOptionsIdsSelected.isNotEmpty) {
          selectSpecific(this._initialFilterOptionsIdsSelected);
        } else {
          selectAll();
        }
      }

       */

    }
  }

  /// Put ids to select specific or empty list `[]` to select all. If null, nothing is selected.
  @Input()
  set initialFilterOptionsIdsSelected(List<String> _initialFilterOptionsIdsSelected) {

     // if _initialFilterOptionsIdsSelected == [] all is selected.  This [] is used to dispatch this `set` and as we don't used empty filter on initial screen, this alternative was used to this finality.
    if (filterStringSelectionOptions != null) {
      if (_initialFilterOptionsIdsSelected != null &&
          _initialFilterOptionsIdsSelected.isNotEmpty) {
        selectSpecific(_initialFilterOptionsIdsSelected);
      } else {
        selectAll();
      }
    }
  }


  final _filterOptionsIdSelection = StreamController<List<String>>();
  @Output()
  Stream<List<String>> get changeSelection => _filterOptionsIdSelection.stream;

  FilterComponent();

  static final String searchLabel =  CommonMsg.label(CommonMsg.searchLabel);
  static final String filterLabel = CommonMsg.label(CommonMsg.filterLabel);
  static final String moreLabel = CommonMsg.label(CommonMsg.moreLabel);
  static final String emptyLabel = CommonMsg.label(CommonMsg.emptyLabel);

  get filterComposeLabel => '${filterLabel} ${filterNameLabel}';

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

  void selectSpecifics(List<FilterOption> filterOptionsIdToSelection) {
    // clearAll();
    for (FilterOption filterOption in filterOptionsIdToSelection) {
      filterOptionMultiSelectModel.select(filterOption);
    }
  }

  void selectSpecific(List<String> filterOptionsIdToSelection) {
   // clearAll();
    List<FilterOption> specificFilterOptions = filterStringSelectionOptions.optionsList.where((o) => filterOptionsIdToSelection.contains(o.id)).toList();

    for (FilterOption filterOption in specificFilterOptions) {

      filterOptionMultiSelectModel.select(filterOption);
    }
  }


  void selectAll() {

    for (FilterOption filterOption in filterStringSelectionOptions
        .optionsList) {
      filterOptionMultiSelectModel.select(filterOption);
    }
  }

  void clearAll() {
    for (FilterOption filterOption in filterStringSelectionOptions.optionsList) {
      filterOptionMultiSelectModel.deselect(filterOption);
    }
  }

  ///
/*
  @Input()
  set filter(Filter filter) {
    if (filter.filterOptions != null) {
      filterStringSelectionOptions =
          FilterSelectionOptions(filter.filterOptions);

      filterOptionMultiSelectModel = SelectionModel<FilterOption>.multi();

      filterOptionMultiSelectModel.selectionChanges.listen((_) {
        _filterOptionsIdSelection.add(
            filterOptionMultiSelectModel.selectedValues.map((m) => m?.id)
                .toList());
      });

      if (filter.initialIdsToFilter == null) {
        selectAll();
      } else {
        selectSpecific(filter.initialIdsToFilter);
      }
    }
  }
*/
}

/// If the option does not support toString() that shows the label, the
/// toFilterableString parameter must be passed to StringSelectionOptions.
class FilterSelectionOptions extends StringSelectionOptions<FilterOption>
    implements Selectable<FilterOption> {

  static final String emptyLabel = CommonMsg.label(CommonMsg.emptyLabel);

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

class Filter {
  List<FilterOption> filterOptions;
  List<String> initialIdsToFilter;

  Filter(this.filterOptions, this.initialIdsToFilter);

}
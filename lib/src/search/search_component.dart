// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'package:angular_components/material_input/material_auto_suggest_input.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';


import 'search_service.dart';

@Component(
  selector: 'auge-search',
  styleUrls: const ['search_component.css'],
  templateUrl: 'search_component.html',
  directives: const [
    coreDirectives,
    routerDirectives,
    MaterialButtonComponent,
    MaterialIconComponent,
    MaterialAutoSuggestInputComponent,
  ],
)
class SearchComponent with CanReuse {

  final SearchService _searchService;

  SelectionOptions searchOptions = SelectionOptions.fromList([]);
  SelectionModel searchSingleSelectModel = SelectionModel.single();
  String searchLeadingGlyph = 'search';
  String searchLabel = 'Search...';
  String searchEmptyPlaceholder = 'No correspondence';

  SearchComponent(this._searchService);

  get searchTerm {
    return _searchService.searchTerm;
  }

  set searchTerm(String term) {
    _searchService.searchTerm = term;
  }

  void viewFilter() {
    _searchService.visibleFilter = !_searchService.visibleFilter;
  }

  /// When null, the filter button does not appear
  bool get visibleFilter {
    return _searchService.visibleFilter;
  }
}
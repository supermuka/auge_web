// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'package:angular_components/material_input/material_auto_suggest_input.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';

import 'package:auge_shared/message/messages.dart';

import 'search_filter_service.dart';

@Component(
  selector: 'auge-search-filter',
  templateUrl: 'search_filter_component.html',
  styleUrls: const ['search_filter_component.css'],
 // providers: const [],
  directives: const [
    coreDirectives,
    routerDirectives,
    MaterialButtonComponent,
    MaterialIconComponent,
    MaterialAutoSuggestInputComponent,
  ],
)
class SearchFilterComponent with CanReuse {

  final SearchFilterService _searchFilterService;
  final Router _router;

  SelectionOptions searchOptions = SelectionOptions.fromList([]);
  SelectionModel searchSingleSelectModel = SelectionModel.single();

  String searchLeadingGlyph = 'search';
  String searchLabel = '${CommonMsg.label(CommonMsg.searchLabel)}...';


  SearchFilterComponent(this._searchFilterService, this._router);

  get filteredItems => this._searchFilterService.filteredItems;

  get searchTerm {
    return _searchFilterService.searchTerm;
  }

  set searchTerm(String term) {
    _searchFilterService.searchTerm = term;
  }

  bool enableSearch() => (_searchFilterService.enableSearch);

  bool enableFilter() => (_searchFilterService.enableFilter);

  void goToFilter() {
    _router.navigate(_searchFilterService.filterRouteUrl /*, NavigationParams(replace:  true)*/);
  }
}
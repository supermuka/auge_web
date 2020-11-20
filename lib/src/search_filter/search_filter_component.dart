// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.


import 'dart:html' as html;
import 'dart:convert';

import 'package:csv/csv.dart';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'package:angular_components/material_input/material_auto_suggest_input.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';

import 'package:auge_shared/message/messages.dart';

import 'search_filter_service.dart';

@Component(
  selector: 'auge-search-filter',
  templateUrl: 'search_filter_component.html',
  styleUrls: const ['search_filter_component.css'],
  //providers: const [SearchFilterService],
  directives: const [
    coreDirectives,
    routerDirectives,
    MaterialTooltipDirective,
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

  final String searchLeadingGlyph = 'search';
  final String searchLabel = '${CommonMsg.label(CommonMsg.searchLabel)}...';
  final String filterLabel = CommonMsg.label(CommonMsg.filterLabel);
  final String exportLabel = CommonMsg.label(CommonMsg.exportLabel);

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

  bool enableExport() => (_searchFilterService.enableExport);

  void goToFilter() async {
    await _router.navigate(_searchFilterService.filterRouteUrl /*, NavigationParams(replace:  true)*/);
  }

  void exportToCsv() async {

    final exportation = await _searchFilterService.listExport();

    String csv = const ListToCsvConverter().convert(exportation, fieldDelimiter: ';', );

     final bytes = latin1.encode(csv);

    final blob = html.Blob([bytes], "text/csv");
    final url = html.Url.createObjectUrlFromBlob(blob);
    final anchor = html.document.createElement('a') as html.AnchorElement
      ..href = url
      ..style.display = 'none'
      ..download = 'auge_objectives.csv';
    html.document.body.children.add(anchor);

    anchor.click();

    html.document.body.children.remove(anchor);
    html.Url.revokeObjectUrl(url);
  }
}
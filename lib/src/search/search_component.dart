import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_components/angular_components.dart';

import 'search_service.dart';

@Component(
  selector: 'auge-search',
  styleUrls: const ['search_component.css'],
  templateUrl: 'search_component.html',
  directives: const [
    coreDirectives,
    materialDirectives,
    formDirectives,
  ],
)
class SearchComponent {

  final SearchService _searchService;

  //String searchInputText = '';
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
}
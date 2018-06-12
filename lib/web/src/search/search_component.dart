import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_components/angular_components.dart';

import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/model/selection/string_selection_options.dart';
import 'package:angular_components/model/ui/has_factory.dart';

import 'search_service.dart';

// ignore_for_file: uri_has_not_been_generated
import 'package:auge/web/src/search/search_component.template.dart' as search_component;

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

class SearchComponent implements OnInit {

  final SearchService _searchService;
  //String searchInputText = '';
  //SelectionOptions searchOptions;
  //SelectionModel searchSingleSelectModel;
  String searchLeadingGlyph = 'search';
  String searchLabel = 'Search...';
  String searchEmptyPlaceholder = 'No correspondence';

  SearchComponent(this._searchService);

  @override
  Future<Null> ngOnInit() async {
    // AutenticacaoService.inicializarFireBase();
  }

  get searchTerm {
    return _searchService.searchTerm;
  }

  set searchTerm(String term) {
    _searchService.searchTerm = term;
  }

  ItemRenderer get searchItemRenderer => (dynamic conta) => conta.nome;

 // FactoryRenderer get searchFactoryRenderer => (_) => search_component.SearchRendererComponentNgFactory;
}

/*
class SearchRendererComponent implements RendersValue {
  String disPlayName = '';
  String disPlayurl;

  @override
  set value(newValue) {
    disPlayName = (newValue as Conta).nome;
    disPlayurl = 'url(' + (newValue as Conta).urlFoto + ')';
  }
}
*/
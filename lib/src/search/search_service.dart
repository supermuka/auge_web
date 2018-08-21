import 'package:angular/core.dart';

@Injectable()
class SearchService {

  String _searchTerm = '';
  bool visibleFilter;

  // var _filterView;

  String get searchTerm {
    return _searchTerm;
  }

  set searchTerm(String term) {
    _searchTerm = term;
  }
/*
  set filterView(Function filterView) {
    _filterView = filterView;
  }

  Function get filterView {
    return _filterView;
  }
  */

}
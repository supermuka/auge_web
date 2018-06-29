import 'package:angular/core.dart';

@Injectable()
class SearchService {

  String _searchTerm = '';

  String get searchTerm {
    return _searchTerm;
  }

  set searchTerm(String term) {
    _searchTerm = term;
  }

}
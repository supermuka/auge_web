// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/core.dart';

@Injectable()
class SearchService {

  String _searchTerm = '';
  bool visibleFilter;

  String get searchTerm {
    return _searchTerm;
  }

  set searchTerm(String term) {
    _searchTerm = term;
  }
}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/core.dart';

@Injectable()
class SearchFilterService {

  // If true, it  appear the input search
  bool enableSearch = false;
  String searchTerm = '';
  // If true, it  appear the filter button.
  bool enableFilter = false;
  String filterRouteUrl;
  int filteredItems;
 // bool visibleFilter = false;

}
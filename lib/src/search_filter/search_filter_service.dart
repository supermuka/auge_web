// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/core.dart';

@Injectable()
class SearchFilterService {

  // If null, it does not appear the input search
  String searchTerm;
  // If null, it does not appear the filter button.
  String filterRouteUrl;
  int filteredItems;
 // bool visibleFilter = false;

}
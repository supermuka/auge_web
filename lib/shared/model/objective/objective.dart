// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel

import 'package:auge/shared/model/organization.dart';
import 'package:auge/shared/model/user.dart';
import 'package:auge/shared/model/objective/measure.dart';

import 'package:intl/intl.dart';
import 'package:intl/date_symbol_data_local.dart';

/// Domain model class to represent an objective (
class Objective {

  String id;

  String name;
  String description;
  DateTime startDate;
  DateTime endDate;

  Organization organization;
  Objective alignedTo;
  List<Objective> alignedWithChildren;
  User leader;

  List<Measure> measures;

  Objective() {
    initializeDateFormatting(Intl.defaultLocale);

    alignedWithChildren = new List<Objective>();
    measures = new List();
  }

  int get progress {

    double progress = 0.0;

    for (int i = 0;i < measures?.length;i++) {
      if ( ((measures[i]?.startValue ?? 0) + (measures[i]?.endValue ?? 0))!= 0) {
        progress = progress +
            measures[i].currentValue /  ((measures[i]?.startValue ?? 0) + (measures[i]?.endValue ?? 0));
      }
    }

    return measures.length == 0 ? 0 : ((progress * 100) / measures.length ).toInt();
  }
}
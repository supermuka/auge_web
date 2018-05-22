// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel

import 'package:auge/shared/model/initiative/stage.dart';
import 'package:auge/shared/model/initiative/work_item_check_item.dart';
import 'package:auge/shared/model/user.dart';

import 'package:intl/intl.dart';
import 'package:intl/date_symbol_data_local.dart';

/// Domain model class to represent an initiative item work (task, issue, feature, etc.)
class WorkItem {
  String id;

  String name;
  String description;
  DateTime dueDate;
  int completed;
  Stage stage;
  List<User> assignedTo;
  List<WorkItemCheckItem> checkItems;

  WorkItem() {
    initializeDateFormatting(Intl.defaultLocale);

    assignedTo = new List<User>();
    checkItems = new List<WorkItemCheckItem>();

  }

  bool get isOverdue {
    if (dueDate != null) {
      DateFormat formatador = new DateFormat('yMd');
      return ( formatador.format(dueDate).compareTo(formatador.format(new DateTime.now())) < 0 );
    } else {
      return false;
    }
  }

}
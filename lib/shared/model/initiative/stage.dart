// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel

import 'state.dart';

/// Domain model class to represent an initiative stage (activies, bucket or swimlanes)
class Stage extends Object {
  String id;

  String name;
  State state;

  // Define initiative state order
  int index;


}
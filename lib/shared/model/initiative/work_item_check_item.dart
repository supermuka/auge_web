// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel

/// Domain model class to represent an check item for a work item
class WorkItemCheckItem extends Object {
  String id;

  String name;
  bool finished;

  // Define check item order
  int index;

}
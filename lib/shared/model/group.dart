// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel

import 'package:auge/shared/model/organization.dart';
import 'package:auge/shared/model/user.dart';

/// Domain model class to represent a group
class Group {

  String id;
  String name;

  Organization organization;
  GroupType groupType;
  Group superGroup;
  User leader;
  bool active;

}

/// Domain model class to represent a group type
class GroupType {

  String id;
  String name;

}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel

import 'package:auge/shared/model/user.dart';
import 'package:auge/shared/model/organization.dart';

/// Domain model class to represent a relationshipt between users and organizations
class UserProfileOrganization extends Object  {

  UserProfile userProfile;
  Organization organization;
  int authorizationLevel;

}
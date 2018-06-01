// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel

/// Domain model class to represent an user account

enum UserAuthorization { admin, leader, standard }

class User extends Object  {
  String id;
  String name;
  String eMail;

  // sha-256
  String password;

  // Profile
  UserProfile userProfile;

  User() {
    userProfile = new UserProfile();
  }
}

/// Domain model class to represent an user account profile
class UserProfile extends Object  {

  User user;

  // Super Admin does not need authorization. It is SAAS administration and has access to full data and functions
  bool isSuperAdmin;

  // base64
  String image;

  // pt_BR, en es_ES
  String idiomLocale;

}

// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:rpc/rpc.dart';
import 'package:postgres/postgres.dart';
import 'package:uuid/uuid.dart';
import 'package:auge/server/augeconnection.dart';
import 'package:auge/shared/model/organization.dart';
import 'package:auge/shared/model/user.dart';
import 'package:auge/shared/model/user_profile_organization.dart';

/// Api for Shared Domain
@ApiClass(version: 'v1')
class AugeApi {

  AugeApi() {
    AugeConnection.createConnection();
  }

  /// Close a database connection
  @ApiMethod( method: 'PUT', path: 'close')
  Future<VoidMessage> closeConnection(VoidMessage _) async {
    try {
      if (!await AugeConnection
          .getConnection()
          .isClosed) {
        await AugeConnection.getConnection().close();
      }
    } on PostgreSQLException catch (e) {
      throw new ApplicationError(e);
    }
  }

  // *** ORGANIZATIONS ***
  Future<List<Organization>> _queryGetOrganizations({String id}) async {
    //List<List> results;
    var results;

    String queryStatement;

    queryStatement = "SELECT organization.id::VARCHAR, organization.name, organization.code FROM auge.organizations organization";
    if (id != null) {
      queryStatement += " WHERE organization.id = '${id}'";
    }

    results =  await AugeConnection.getConnection().query(queryStatement);

    List<Organization> organizations = new List();
    for (var row in results) {
      Organization organization = new Organization()
        ..id = row[0]
        ..name = row[1]
        ..code = row[2];
      organizations.add(organization);
    }
    return organizations;
  }

  /// Return all organizations
  @ApiMethod( method: 'GET', path: 'organizations')
  Future<List<Organization>> getOrganizations() async {
    try {
      return _queryGetOrganizations();
    } on PostgreSQLException catch (e) {
      throw new ApplicationError(e);
    }
  }

  /// Return an organization by UUID
  @ApiMethod( method: 'GET', path: 'organizations/{id}')
  Future<Organization> getOrganizationById(String id) async {
    try {
      List<Organization> organizations = await _queryGetOrganizations(id: id);

      return organizations.first;
    } on PostgreSQLException catch (e) {
      throw new ApplicationError(e);
    }
  }

  /// Create (insert) a new organization
  @ApiMethod( method: 'POST', path: 'organizations')
  Future<VoidMessage> createOrganization(Organization organization) async {

    organization.id = new Uuid().v4();
    try {
      await AugeConnection.getConnection().query(
          "INSERT INTO auge.organizations(id, name, code) VALUES"
              "(@id,"
              "@name,"
              "@code)"
          , substitutionValues: {
        "id": organization.id,
        "name": organization.name,
        "code": organization.code});
    } on PostgreSQLException catch (e) {
      throw new ApplicationError(e);
    }
  }

  /// Update an organization passing an instance of [Organization]
  @ApiMethod( method: 'PUT', path: 'organizations')
  Future<VoidMessage> updateOrganization(Organization organization) async {
    try {
      await AugeConnection.getConnection().query(
          "UPDATE auge.organizations organization SET organization.name = @name,"
              "organization.code = @code"
              "WHERE id = @id "
          , substitutionValues: {
        "id": organization.id,
        "name": organization.name,
        "code": organization.code});
    } on PostgreSQLException catch (e) {
      throw new ApplicationError(e);
    }
  }

  /// Delete an organization by [id]
  @ApiMethod( method: 'DELETE', path: 'organizations/{id}')
  Future<VoidMessage> deleteOrganization(String id) async {
    try {
      await AugeConnection.getConnection().query(
          "DELETE FROM auge.organizations organization WHERE organization.id = ${PostgreSQLFormat
              .id("id")}"
          , substitutionValues: {
        "id": id});
    } on PostgreSQLException catch (e) {
      throw new ApplicationError(e);
    }
  }

  // *** USERS ***
  Future<List<User>> _queryGetUsers({String id, String eMail, String password, String organizationId, bool withProfile = false}) async {
    List<List> results;

    String queryStatement = '';
    if (withProfile == false) {
      queryStatement = "SELECT u.id::VARCHAR, u.name, u.email, u.password "
          "FROM auge.users u";
    }
    else {
      queryStatement = "SELECT u.id::VARCHAR, u.name, u.email, u.password, "
          " user_profile.image, "
          " user_profile.is_super_admin, "
          " user_profile.idiom_locale "
          " FROM auge.users u "
          " JOIN auge.users_profile user_profile on user_profile.user_id = u.id";
    }

    Map<String, dynamic> _substitutionValues;

    if (id != null) {
       queryStatement = queryStatement + " WHERE u.id = @id";
       _substitutionValues = {
         "id": id
       };
    } else if (eMail != null && password != null) {
      queryStatement = queryStatement +
          " WHERE u.email = @email AND u.password = @password";

      _substitutionValues = {
        "email": eMail,
        "password": password
      };
    } else if (organizationId != null) {
      queryStatement = queryStatement + " JOIN auge.users_profile_organizations user_profile_organization ON user_profile_organization.user_id = u.id";
          queryStatement = queryStatement + " WHERE user_profile_organization.organization_id = @organization_id";
      _substitutionValues = {
        "organization_id": organizationId
      };
    }

    results =  await AugeConnection.getConnection().query(queryStatement, substitutionValues: _substitutionValues);

    List<User> users = new List();
    for (var row in results) {
      User user = new User()
        ..id = row[0]
        ..name = row[1]
        ..eMail = row[2]
        ..password = row[3];

      if (withProfile != null && withProfile) {
        user.userProfile = new UserProfile()
          ..image = row[4]
          ..isSuperAdmin = row[5]
          ..idiomLocale = row[6];
      }
      users.add(user);
    }
    return users;
  }

  /// Return [User] list. Whether `withProfile` arg is `true`, it is returned profile information like (avatar image, etc.)
  @ApiMethod( method: 'GET', path: 'users')
  Future<List<User>> getUsers({bool withProfile}) async {
    try {
      return _queryGetUsers(withProfile: withProfile);
    } on PostgreSQLException catch (e) {
      throw new ApplicationError(e);
    }
  }

  /// Return a [User] by Id key. Whether `withProfile` arg is `true`, it is returned profile information like (avatar image, etc.)
  @ApiMethod( method: 'GET', path: 'users/{id}')
  Future<User> getUserById(String id, {bool withProfile}) async {
    try {
      List<User> users;
      users = await _queryGetUsers(id: id, withProfile: withProfile);
      return users.first;
    } on PostgreSQLException catch (e) {
      throw new ApplicationError(e);
    }
  }

  /// Return a [User] authenticated by eMail and password key. Whether `withProfile` arg is `true`, it is returned profile information like (avatar image, etc.)
  @ApiMethod( method: 'GET', path: 'users/{eMail}/{password}')
  Future<User> getAuthenticatedUserWithEmail(String eMail, String password, {bool withProfile}) async {

    try {
      List<User> users;
      users = await _queryGetUsers(
          eMail: eMail, password: password, withProfile: withProfile);

      return users.first;
    } on PostgreSQLException catch (e) {
      throw new ApplicationError(e);
    }
  }

  /// Return [User] list by Id Organization
  @ApiMethod( method: 'GET', path: 'organizations/{organizationId}/users')
  Future<List<User>> getUsersByOrganizationId(String organizationId, {bool withProfile}) async {
    try {
      return await _queryGetUsers(
          organizationId: organizationId, withProfile: withProfile);
    } on PostgreSQLException catch (e) {
      throw new ApplicationError(e);
    }
  }

  /// Create (insert) a new user
  @ApiMethod( method: 'POST', path: 'users')
  Future<VoidMessage> createUser(User user) async {

    user.id = new Uuid().v4();

    await AugeConnection.getConnection().transaction((ctx) async {
      try {
        await ctx.query(
            "INSERT INTO auge.users(id, name, email, password) VALUES("
            "@id,"
            "@name,"
            "@email,"
            "@password)"
            , substitutionValues: {
            "id": user.id,
            "name": user.name,
            "email": user.eMail,
            "password": user.password});
            /*
                "'${user.id}',"
                "'${user.name}',"
                "'${user.eMail}',"
                "'${user.password}')");
*/
        if (user.userProfile != null)
          await ctx.query(
              "INSERT INTO auge.users_profile(user_id, image, is_super_admin, idiom_locale) VALUES("
                  "@id,"
                  "@image,"
                  "@is_super_admin,"
                  "@idiom_locale)", substitutionValues: {
            "id": user.id,
            "image": user.userProfile.image,
            "is_super_admin": user.userProfile.isSuperAdmin,
            "idiom_locale": user.userProfile.idiomLocale});
      } on PostgreSQLException catch (e) {
        throw new ApplicationError(e);
      }
    });

    return null;

  }

  /// Update a [User]
  @ApiMethod( method: 'PUT', path: 'users')
  Future<VoidMessage> updateUser(User user) async {

    await AugeConnection.getConnection().transaction((ctx) async {
      try {
        await ctx.query(
            "UPDATE auge.users "
                "SET name = @name,"
                "email = @email,"
                "password = @password "
                "WHERE id = '${user.id}'", substitutionValues: {
          "name": user.name,
          "email": user.eMail,
          "password": user.password});

        await ctx.query(
            "UPDATE auge.users_profile "
                "SET image = @image, "
                "is_super_admin = @is_super_admin, "
                "idiom_locale = @idiom_locale "
                "WHERE user_id = '${user.id}'"
            , substitutionValues: {
          "image": user.userProfile.image,
          "is_super_admin": user.userProfile.isSuperAdmin,
          "idiom_locale": user.userProfile.idiomLocale});
      } on PostgreSQLException catch (e) {
        throw new ApplicationError(e);
      }
    });
  }

  /// Delete a user by [id]
  @ApiMethod( method: 'DELETE', path: 'users/{id}')
  Future<VoidMessage> deleteUser(String id) async {

    await AugeConnection.getConnection().transaction((ctx) async {
      try {
        await ctx.query(
            "DELETE FROM auge.users_profile user_profile WHERE user_profile.user_id = ${PostgreSQLFormat
                .id(
                "user_id")}"
            , substitutionValues: {
          "user_id": id});

        await ctx.query(
            "DELETE FROM auge.users u WHERE u.id = ${PostgreSQLFormat.id(
                "id")}"
            , substitutionValues: {
          "id": id});
      } on PostgreSQLException catch (e) {
        throw new ApplicationError(e);
      }

    });
  }

  // *** USERS AND ORGANIZATIONS  ***
  Future<List<UserProfileOrganization>> _queryAuthorizatedOrganizationsByUserId(String user_id) async {

   List<List> results;

    String queryStatement = '';
    queryStatement = "SELECT uo.organization_id::VARCHAR, uo.authorization_level "
        "FROM auge.users_profile_organizations uo ";

   Map<String, dynamic> _substitutionValues;

    if (user_id != null) {
      queryStatement = queryStatement + "WHERE uo.user_id = @id";
      _substitutionValues = {"id": user_id};

    }

    results =  await AugeConnection.getConnection().query(queryStatement, substitutionValues: _substitutionValues);

    List<UserProfileOrganization> usersOrganizations = new List();

    if (results.isNotEmpty) {
      User user = await getUserById(user_id);

      for (var row in results) {

        UserProfileOrganization userOrganization = new UserProfileOrganization();

        userOrganization.userProfile = user.userProfile;
        userOrganization.organization = await getOrganizationById(row[0]);
        userOrganization.authorizationLevel = row[1];

        usersOrganizations.add(userOrganization);
      }
    }

    return usersOrganizations;
  }

  /// Return an [Organizations] authorizated by User Id
  @ApiMethod( method: 'GET', path: 'users_profile_organizations/{user_id}')
  Future<List<UserProfileOrganization>> getAuthorizatedOrganizationsByUserId(String user_id) async {

    try {
      List<UserProfileOrganization> usersOrganizations;
      usersOrganizations =
      await _queryAuthorizatedOrganizationsByUserId(user_id);
      return usersOrganizations;
    } on PostgreSQLException catch (e) {
      throw new ApplicationError(e);
    }

  }

}


// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';
import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_server/model/general/user.dart';
import 'package:auge_server/model/general/user_identity.dart';
import 'package:auge_server/model/general/user_access.dart';

import 'package:auge_web/services/auge_api_service.dart';
import 'package:auge_server/src/protos/generated/google/protobuf/wrappers.pb.dart' as wrappers_pb;
import 'package:auge_server/src/protos/generated/general/user.pbgrpc.dart' as user_pbgrpc;
import 'package:auge_server/src/protos/generated/general/user_identity.pbgrpc.dart' as user_identity_pbgrpc;
import 'package:auge_server/src/protos/generated/general/user_access.pbgrpc.dart' as user_access_pbgrpc;

@Injectable()
class UserService {
  final AuthService _authService;
  final AugeApiService _augeApiService;

  user_pbgrpc.UserServiceClient _userServiceClient;
  user_identity_pbgrpc.UserIdentityServiceClient _userIdentityServiceClient;
  user_access_pbgrpc.UserAccessServiceClient _userAccessServiceClient;

  UserService(this._authService, this._augeApiService) {
    _userServiceClient = user_pbgrpc.UserServiceClient(_augeApiService.channel);
    _userIdentityServiceClient = user_identity_pbgrpc.UserIdentityServiceClient(_augeApiService.channel);
    _userAccessServiceClient = user_access_pbgrpc.UserAccessServiceClient(_augeApiService.channel);
  }

  AuthService get authService => _authService;

  /// Return [User] list by Organization [id]
  Future<List<User>> getUsers(String organizationId, {bool withUserProfile = false}) async {
    // return _augeApiService.augeApi.getUsers(organizationId, withProfile: withProfile);
    return (await _userServiceClient.getUsers(
        user_pbgrpc.UserGetRequest()..managedByOrganizationIdOrAccessedByOrganizationId = organizationId..withUserProfile = withUserProfile)).users.map((m) =>
    User()
      ..readFromProtoBuf(m)).toList();
  }

  /// Return [User] list by Organization [id]
  Future<User> getUser(String id, {bool withUserProfile = false}) async {
    // return _augeApiService.augeApi.getUsers(organizationId, withProfile: withProfile);
    return User()..readFromProtoBuf((await _userServiceClient.getUser(
        user_pbgrpc.UserGetRequest()..id = id..withUserProfile = withUserProfile)));
  }

  Future<UserIdentity> getUserIdentity(String id) async {
    try {
      //  return await _augeApiService.augeApi.getUsersProfileOrganizations(
      //      userId: userId, organizationId: organizationId);
      user_identity_pbgrpc.UserIdentityGetRequest userIdentityGetRequest =  user_identity_pbgrpc.UserIdentityGetRequest();
      if (id != null) userIdentityGetRequest.id = id;
      return UserIdentity()..readFromProtoBuf((await _userIdentityServiceClient.getUserIdentity(userIdentityGetRequest)));
    } catch (e) {
      rethrow;
    }
  }

  Future<List<UserIdentity>> getUserIdentities(String userId) async {
    try {
    //  return await _augeApiService.augeApi.getUsersProfileOrganizations(
    //      userId: userId, organizationId: organizationId);
      user_identity_pbgrpc.UserIdentityGetRequest userIdentityGetRequest =  user_identity_pbgrpc.UserIdentityGetRequest();
      if (userId != null) userIdentityGetRequest.userId = userId;
      return (await _userIdentityServiceClient.getUserIdentities(userIdentityGetRequest)).userIdentities.map((m) =>
      UserIdentity()
        ..readFromProtoBuf(m)).toList();
    } catch (e) {
      rethrow;
    }
  }

  Future<UserAccess> getUserAccess(String id) async {
    try {
      //  return await _augeApiService.augeApi.getUsersProfileOrganizations(
      //      userId: userId, organizationId: organizationId);
      user_access_pbgrpc.UserAccessGetRequest userAccessGetRequest =  user_access_pbgrpc.UserAccessGetRequest();
      if (id != null) userAccessGetRequest.id = id;
      return UserAccess()..readFromProtoBuf((await _userAccessServiceClient.getUserAccess(userAccessGetRequest)));
    } catch (e) {
      rethrow;
    }
  }

  Future<List<UserAccess>> getUserAccesses(String userId) async {
    try {
      //  return await _augeApiService.augeApi.getUsersProfileOrganizations(
      //      userId: userId, organizationId: organizationId);
      user_access_pbgrpc.UserAccessGetRequest userAccessGetRequest =  user_access_pbgrpc.UserAccessGetRequest();
      if (userId != null) userAccessGetRequest.userId = userId;

      return (await _userAccessServiceClient.getUserAccesses(userAccessGetRequest)).userAccesses.map((m) =>
      UserAccess()
        ..readFromProtoBuf(m)).toList();

    } catch (e) {
      rethrow;
    }
  }

  /*
  /// Save (create or update) an [User]
  void saveUser(User user) async {

    user_pbgrpc.UserRequest userRequest = user_pbgrpc.UserRequest()
      ..user = user.writeToProtoBuf()
      ..authUserId = _authService.authenticatedUser.id;

    try {
      if (user.id == null) {
        common_pbgrpc.IdResponse idResponse = await _userServiceClient.createUser(userRequest);

        // ID - primary key generated on server-side.
        user.id = idResponse.id;
      } else {
        await _userServiceClient.updateUser(userRequest);
      }
    } catch (e) {
      rethrow;
    }
  }
*/

  /// Save (create or update) an [User]
  void saveUser(User user) async {

    user_pbgrpc.UserRequest userRequest = (user_pbgrpc.UserRequest()
      ..user = user.writeToProtoBuf()
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id);
    try {
      if (user.id == null) {
        wrappers_pb.StringValue responseId = await _userServiceClient
            .createUser(userRequest);

        user.id = responseId.value;
      } else {
        await _userServiceClient.updateUser(
            userRequest);
      }
    } catch (e) {
      print(e);
      rethrow;
    }
  }

  /// Save (create or update) an [UserIdentity]
  void saveUserIdentity(UserIdentity userIdentity) async {

    user_identity_pbgrpc.UserIdentityRequest userIdentityRequest = (user_identity_pbgrpc.UserIdentityRequest()
      ..userIdentity = userIdentity.writeToProtoBuf()
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id);

    try {
      if (userIdentity.id == null) {
        wrappers_pb.StringValue responseId = await _userIdentityServiceClient
            .createUserIdentity(userIdentityRequest);

        userIdentity.id = responseId.value;
      } else {
        await _userIdentityServiceClient.updateUserIdentity(
            userIdentityRequest);
      }
    } catch (e) {
      print(e);
      rethrow;
    }
  }

  /// Save (create or update) an [UserAccess]
  void saveUserAccess(UserAccess userAccess) async {

    user_access_pbgrpc.UserAccessRequest userAccessRequest = (user_access_pbgrpc.UserAccessRequest()
      ..userAccess = userAccess.writeToProtoBuf()
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id);
    try {
      if (userAccess.id == null) {
        wrappers_pb.StringValue responseId = await _userAccessServiceClient
            .createUserAccess(userAccessRequest);

        userAccess.id = responseId.value;
      } else {
        await _userAccessServiceClient.updateUserAccess(
            userAccessRequest);
      }
    } catch (e) {
      print(e);
      rethrow;
    }
  }

  /// Delete (create or update) an [User]
  void deleteUser(User user) async {

    user_pbgrpc.UserDeleteRequest userDeleteRequest = user_pbgrpc.UserDeleteRequest()
      ..userId = user.id
      ..userVersion = user.version
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id;
    try {
      await _userServiceClient
          .deleteUser(userDeleteRequest);

    } catch (e) {
      print(e);
      rethrow;
    }
  }

  /// Delete (create or update) an [UserIdentity]
  void deleteUserIdentity(UserIdentity userIdentity) async {

    user_identity_pbgrpc.UserIdentityDeleteRequest userIdentityDeleteRequest = user_identity_pbgrpc.UserIdentityDeleteRequest()
      ..userIdentityId = userIdentity.id
      ..userIdentityVersion = userIdentity.version
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id;
    try {

      await _userIdentityServiceClient
          .deleteUserIdentity(userIdentityDeleteRequest);

    } catch (e) {
      print(e);
      rethrow;
    }
  }

  /// Delete (create or update) an [UserAccess]
  void deleteUserAccess(UserAccess userAccess) async {

    user_access_pbgrpc.UserAccessDeleteRequest userAccessDeleteRequest = user_access_pbgrpc.UserAccessDeleteRequest()
      ..userAccessId = userAccess.id
      ..userAccessVersion = userAccess.version
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id;
    try {

        await _userAccessServiceClient
            .deleteUserAccess(userAccessDeleteRequest);

    } catch (e) {
      print(e);
      rethrow;
    }
  }

  List<UserIdentityProvider> getUserIdentityProviders() {
    return UserIdentityProvider.values;
  }

}
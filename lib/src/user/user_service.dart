// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';
import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_server/model/general/user.dart';
import 'package:auge_server/model/general/user_profile_organization.dart';

import 'package:auge_web/services/auge_api_service.dart';
import 'package:auge_server/src/protos/generated/general/common.pbgrpc.dart' as common_pbgrpc;
import 'package:auge_server/src/protos/generated/general/user.pbgrpc.dart' as user_pbgrpc;
import 'package:auge_server/src/protos/generated/general/user_profile_organization.pbgrpc.dart' as user_profile_organization_pbgrpc;

@Injectable()
class UserService {
  final AuthService _authService;
  final AugeApiService _augeApiService;
  user_pbgrpc.UserServiceClient _userServiceClient;
  user_profile_organization_pbgrpc.UserProfileOrganizationServiceClient _userProfileOrganizationServiceClient;

  UserService(this._authService, this._augeApiService) {
    _userServiceClient = user_pbgrpc.UserServiceClient(_augeApiService.channel);
    _userProfileOrganizationServiceClient = user_profile_organization_pbgrpc.UserProfileOrganizationServiceClient(_augeApiService.channel);
  }

  AuthService get authService => _authService;


  /// Return [User] list by Organization [id]
  Future<List<User>> getUsers(String organizationId, {bool withProfile = false}) async {
    // return _augeApiService.augeApi.getUsers(organizationId, withProfile: withProfile);
    return (await _userServiceClient.getUsers(
        user_pbgrpc.UserGetRequest()..organizationId = organizationId..withProfile = withProfile)).users.map((m) =>
    User()
      ..readFromProtoBuf(m)).toList();
  }

  /// Return [User] list by Organization [id]
  Future<User> getUser(String id, {bool withProfile = false}) async {
    // return _augeApiService.augeApi.getUsers(organizationId, withProfile: withProfile);
    return User()..readFromProtoBuf((await _userServiceClient.getUser(
        user_pbgrpc.UserGetRequest()..id = id..withProfile = withProfile)));
  }

  Future<List<UserProfileOrganization>> getUsersProfileOrganizations(String organizationId, {String userId, bool withUserProfile}) async {
    try {
    //  return await _augeApiService.augeApi.getUsersProfileOrganizations(
    //      userId: userId, organizationId: organizationId);
      user_profile_organization_pbgrpc.UserProfileOrganizationGetRequest userProfileOrganizationGetRequest =  user_profile_organization_pbgrpc.UserProfileOrganizationGetRequest();
      if (userId != null) userProfileOrganizationGetRequest.userId = userId;
      if (organizationId != null) userProfileOrganizationGetRequest.organizationId = organizationId;
      if (withUserProfile != null) userProfileOrganizationGetRequest.withUserProfile = withUserProfile;
      return (await _userProfileOrganizationServiceClient.getUsersProfileOrganizations(userProfileOrganizationGetRequest)).usersProfileOrganizations.map((m) =>
      UserProfileOrganization()
        ..readFromProtoBuf(m)).toList();
    } catch (e) {
      rethrow;
    }
  }

  Future<UserProfileOrganization> getUserProfileOrganization(String id, {String userId, String organizationId, bool withProfile = false}) async {
    try {
      //  return await _augeApiService.augeApi.getUsersProfileOrganizations(
      //      userId: userId, organizationId: organizationId);
      user_profile_organization_pbgrpc.UserProfileOrganizationGetRequest userProfileOrganizationGetRequest =  user_profile_organization_pbgrpc.UserProfileOrganizationGetRequest();
      if (id != null) userProfileOrganizationGetRequest.id = id;
      if (userId != null) userProfileOrganizationGetRequest.userId = userId;
      if (organizationId != null) userProfileOrganizationGetRequest.organizationId = organizationId;

      return UserProfileOrganization()..readFromProtoBuf(await _userProfileOrganizationServiceClient.getUserProfileOrganization(userProfileOrganizationGetRequest));
    } catch (e) {
      rethrow;
    }
  }

  /// Save (create or update) an [User]
  void saveUser(User user) async {

    user_pbgrpc.UserRequest userRequest = user_pbgrpc.UserRequest()
      ..user = user.writeToProtoBuf()
      ..authenticatedUser = _authService.authenticatedUser.writeToProtoBuf();

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

  /// Save (create or update) an [UserProfileOrganization]
  void saveUserProfileOrganization(UserProfileOrganization userProfileOrganization) async {

    user_profile_organization_pbgrpc.UserProfileOrganizationRequest userProfileOrganizationRequest = (user_profile_organization_pbgrpc.UserProfileOrganizationRequest()
      ..userProfileOrganization = userProfileOrganization.writeToProtoBuf()..authenticatedUser = _authService.authenticatedUser.writeToProtoBuf()..withUserProfile = true);
    try {
      if (userProfileOrganization.id == null) {
        common_pbgrpc.IdResponse idResponse = await _userProfileOrganizationServiceClient
            .createUserProfileOrganization(userProfileOrganizationRequest);

        userProfileOrganization.id = idResponse.id;
      } else {
        await _userProfileOrganizationServiceClient.updateUserProfileOrganization(
            userProfileOrganizationRequest);
      }
    } catch (e) {
      print(e);
      rethrow;
    }
  }

  /// Delete (create or update) an [UserProfileOrganization]
  void deleteUserProfileOrganization(UserProfileOrganization userProfileOrganization) async {

    user_profile_organization_pbgrpc.UserProfileOrganizationRequest userProfileOrganizationRequest = user_profile_organization_pbgrpc.UserProfileOrganizationRequest()
      ..userProfileOrganization = userProfileOrganization.writeToProtoBuf()..authenticatedUser = _authService.authenticatedUser.writeToProtoBuf();
    try {

        await _userProfileOrganizationServiceClient
            .deleteUserProfileOrganization(userProfileOrganizationRequest);

    } catch (e) {
      print(e);
      rethrow;
    }
  }

  /// Soft Delete an [User]
  void deleteUser(User user) async {

    user_pbgrpc.UserRequest userRequest = user_pbgrpc.UserRequest()..user = user.writeToProtoBuf()..authenticatedUser = _authService.authenticatedUser.writeToProtoBuf();

    try {
        await _userServiceClient.deleteUser(userRequest);
    } catch (e) {
      rethrow;
    }
  }


}
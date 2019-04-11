// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_server/model/general/user.dart';
import 'package:auge_server/model/general/user_profile_organization.dart';
import 'package:auge_server/message/created_message.dart';

import 'package:auge_web/services/auge_api_service.dart';
import 'package:auge_server/src/protos/generated/general/common.pbgrpc.dart' as common_pbgrpc;
import 'package:auge_server/src/protos/generated/general/user.pbgrpc.dart' as user_pbgrpc;
import 'package:auge_server/src/protos/generated/general/user_profile_organization.pbgrpc.dart' as user_profile_organization_pbgrpc;

@Injectable()
class UserService {

  final AugeApiService _augeApiService;
  user_pbgrpc.UserServiceClient _userServiceClient;
  user_profile_organization_pbgrpc.UserProfileOrganizationServiceClient _userProfileOrganizationServiceClient;

  UserService(this._augeApiService) {
    _userServiceClient = user_pbgrpc.UserServiceClient(_augeApiService.channel);
    _userProfileOrganizationServiceClient = user_profile_organization_pbgrpc.UserProfileOrganizationServiceClient(_augeApiService.channel);
  }

  /// Return [User] list by Organization [id]
  Future<List<User>> getUsers(String organizationId, {bool withProfile}) async {
    // return _augeApiService.augeApi.getUsers(organizationId, withProfile: withProfile);
    return (await _userServiceClient.getUsers(
        user_pbgrpc.UserGetRequest()..organizationId = organizationId..withProfile = withProfile)).users.map((m) =>
    User()
      ..readFromProtoBuf(m)).toList();
  }

  Future<List<UserProfileOrganization>> getUsersProfileOrganizations(String userId, String organizationId) async {
    try {
    //  return await _augeApiService.augeApi.getUsersProfileOrganizations(
    //      userId: userId, organizationId: organizationId);
      return (await _userProfileOrganizationServiceClient.getUsersProfileOrganizations(
          user_profile_organization_pbgrpc.UserProfileOrganizationGetRequest()..userId = userId..organizationId = organizationId)).usersProfileOrganizations.map((m) =>
      UserProfileOrganization()
        ..readFromProtoBuf(m)).toList();
    } catch (e) {
      rethrow;
    }
  }

  /// Save (create or update) an [User]
  void saveUser(User user) async {

    try {
      if (user.id == null) {
        common_pbgrpc.IdResponse idResponse = await _userServiceClient.createUser(user.writeToProtoBuf());

        // ID - primary key generated on server-side.
        user.id = idResponse.id;
      } else {
        await _userServiceClient.updateUser(user.writeToProtoBuf());
      }
    } catch (e) {
      rethrow;
    }
  }

  /// Save (create or update) an [UserProfileOrganization]
  void saveUserProfileOrganization(UserProfileOrganization userProfileOrganization) async {
    try {
      if (userProfileOrganization.id == null) {
        common_pbgrpc.IdResponse idResponse = await _userProfileOrganizationServiceClient
            .createUserProfileOrganization(userProfileOrganization.writeToProtoBuf());

        userProfileOrganization.id = idResponse.id;
      } else {
        await _userProfileOrganizationServiceClient.updateUserProfileOrganization(
            userProfileOrganization.writeToProtoBuf());
      }
    } catch (e) {
      print(e);
      rethrow;
    }
  }

  /// Delete an [User]
  void deleteUser(User user) async {
    try {
      await _userServiceClient.deleteUser(user.writeToProtoBuf());
    } catch (e) {
      rethrow;
    }
  }

  /// Delete an [UserProfileOrganization]
  void deleteUserProfileOrganization(UserProfileOrganization userProfileOrganization) async {
    try {
      await _userProfileOrganizationServiceClient.deleteUserProfileOrganization(userProfileOrganization.writeToProtoBuf());
    } catch (e) {
      rethrow;
    }
  }

  /// Delete an [UserProfileOrganization]
  void deleteUserProfileOrganizationByUserId(String userId) async {
    try {
      //TODO é realmente necessário ser por usuário?
      //await _augeApiService.augeApi.deleteUserProfileOrganizationByUserId(userId);
    } catch (e) {
      rethrow;
    }
  }
}
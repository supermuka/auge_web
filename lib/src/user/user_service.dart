// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_server/model/user.dart';
import 'package:auge_server/model/user_profile_organization.dart';
import 'package:auge_server/message/created_message.dart';

import 'package:auge_web/services/augeapi_service.dart';

@Injectable()
class UserService {

  final AugeApiService _augeApiService;

  UserService(this._augeApiService);

  /// Return [User] list by Organization [id]
  Future<List<User>> getUsers(String organizationId, {bool withProfile}) async {
    return _augeApiService.augeApi.getUsers(organizationId, withProfile: withProfile);
  }

  Future<List<UserProfileOrganization>> getUsersProfileOrganizations(String userId, String organizationId) async {
    try {
      return await _augeApiService.augeApi.getUsersProfileOrganizations(
          userId: userId, organizationId: organizationId);
    } catch (e) {
      rethrow;
    }
  }

  /// Save (create or update) an [User]
  void saveUser(User user) async {

    try {
      if (user.id == null) {
        IdMessage idMessage = await _augeApiService.augeApi.createUser(user);

        // ID - primary key generated on server-side.
        user.id = idMessage?.id;
      } else {
        await _augeApiService.augeApi.updateUser(user);
      }
    } catch (e) {
      rethrow;
    }
  }

  /// Save (create or update) an [UserProfileOrganization]
  void saveUserProfileOrganization(UserProfileOrganization userProfileOrganization) async {
    try {
      if (userProfileOrganization.id == null) {
        IdMessage idMessage = await _augeApiService.augeApi
            .createUserProfileOrganization(userProfileOrganization);

        userProfileOrganization.id = idMessage.id;
      } else {
        await _augeApiService.augeApi.updateUserProfileOrganization(
            userProfileOrganization);
      }
    } catch (e) {
      print(e);
      rethrow;
    }
  }

  /// Delete an [User]
  void deleteUser(String id) async {
    try {
      await _augeApiService.augeApi.deleteUser(id);
    } catch (e) {
      rethrow;
    }
  }

  /// Delete an [UserProfileOrganization]
  void deleteUserProfileOrganization(String id) async {
    try {
      await _augeApiService.augeApi.deleteUserProfileOrganization(id);
    } catch (e) {
      rethrow;
    }
  }

  /// Delete an [UserProfileOrganization]
  void deleteUserProfileOrganizationByUserId(String userId) async {
    try {
      await _augeApiService.augeApi.deleteUserProfileOrganizationByUserId(userId);
    } catch (e) {
      rethrow;
    }
  }
}



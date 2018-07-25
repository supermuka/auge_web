// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_server/model/user.dart';
import 'package:auge_server/message_type/id_message.dart';

import 'package:auge_web/services/augeapi_service.dart';

@Injectable()
class UserService {

  final AugeApiService _augeApiService;

  UserService(this._augeApiService);

  /// Return a list of [User]
  Future<List<User>> getUsers({bool withProfile}) async {

    return await _augeApiService.augeApi.getUsers(withProfile: withProfile);

  }

  /// Return an [User] by [id]
  Future<User> getUserById(String id, bool withProfile) async {

    return await _augeApiService.augeApi.getUserById(id, withProfile: withProfile);

  }

  /// Return [User] list by Organization [id]
  Future<List<User>> getUsersByOrganizationId(String organizationId, {bool withProfile}) async {

    return await _augeApiService.augeApi.getUsersByOrganizationId(organizationId, withProfile: withProfile);

  }

  /// Save (create or update) an [User]
  void saveUser(User user) async {

    if (user.id == null) {

      IdMessage idMessage = await _augeApiService.augeApi.createUser(user);

      // ID - primary key generated on server-side.
      user.id = idMessage?.id;

    } else {
      await _augeApiService.augeApi.updateUser(user);
    }
  }

  /// Delete an [User]
  void deleteUser(User user) async {
    await _augeApiService.augeApi.deleteUser(user.id);
  }

  /// Return an image uri
  //String userUrlImage(User user) {
  //  if (user?.userProfile?.image == null)
  //    return '/packages/auge_web/assets/images/no_avatar.png';
  //  else
  //    return 'data:image/*;base64,' + user?.userProfile?.image;
  //}

}



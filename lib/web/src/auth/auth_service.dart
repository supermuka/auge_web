import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge/shared/model/user.dart';
import 'package:auge/shared/model/organization.dart';
import 'package:auge/shared/model/user_profile_organization.dart';

import 'package:auge/web/services/augeapi_service.dart';
import 'dart:convert' show base64;
// import 'dart:typed_data' show Uint8List, ByteBuffer;
import 'package:crypto/crypto.dart' show sha256;


@Injectable()
class AuthService  {

 // static bool ehAdministrador = false;

  User authenticatedUser;
  List<UserProfileOrganization> authorizatedOrganizations;
  Organization selectedOrganization;

  final AugeApiService _augeApiService;

  AuthService(this._augeApiService);

    /// Return an [Organization] list for an eMail.
  Future<Null> getAuthorizatedOrganizationsByUserId(String id) async {
    List<UserProfileOrganization> usersOrganizations;
    if (id.isNotEmpty)
      usersOrganizations = await _augeApiService.augeApi.getAuthorizatedOrganizationsByUserId(id);
    return usersOrganizations;
  }

  close() async {
    await _augeApiService.augeApi.closeConnection();
    authenticatedUser = null;
    authorizatedOrganizations = null;
  }

  Future<User> getAuthenticatedUserWithEmail(String email, String passwordStr) async {
    User user;
    if (!email.isEmpty || !passwordStr.isEmpty) {
      //try {

        String password = base64.encode(sha256
            .convert(passwordStr.codeUnits)
            .bytes);
        user = await _augeApiService.augeApi.getAuthenticatedUserWithEmail(
             email, password, withProfile: true);
        /*
      } catch (e) {
        print(e);
      }
      */
    }
    return user;
  }
}

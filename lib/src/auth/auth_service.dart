import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_server/model/user.dart';
import 'package:auge_server/model/organization.dart';
import 'package:auge_server/model/user_profile_organization.dart';

import 'package:auge_web/services/augeapi_service.dart';
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
  Future<List<UserProfileOrganization>> getAuthorizatedOrganizationsByUserId(String id) async {
    List<UserProfileOrganization> usersOrganizations;
    if (id.isNotEmpty)
      usersOrganizations = await _augeApiService.augeApi.getAuthorizatedOrganizationsByUserId(id);
    return usersOrganizations;
  }

  void close() async {
    await _augeApiService.augeApi.closeConnection();
    authenticatedUser = null;
    authorizatedOrganizations = null;
  }

  Future<User> getAuthenticatedUserWithEmail(String eMail, String passwordStr) async {
    User user;
    if (!eMail.isEmpty || !passwordStr.isEmpty) {
      String password = base64.encode(sha256
          .convert(passwordStr.codeUnits)
          .bytes);
        try {
          user = await _augeApiService.augeApi.getAuthenticatedUserWithEmail(
              eMail, password, withProfile: true);
        } on DetailedApiRequestError catch (e) {
          if (e.status == 404 && e.errors.firstWhere((ed) => ed.reason == RpcErrorDetailMessage.userDataNotFoundReason, orElse: null ) != null)
            user = null;
          else {
            rethrow;
          }
        }
      }
    return user;
  }
}
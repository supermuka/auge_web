import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_server/model/user.dart';
import 'package:auge_server/model/organization.dart';
import 'package:auge_server/model/user_profile_organization.dart';

import 'package:auge_server/shared/authorization_policy.dart';
import 'package:auge_server/model/authorization.dart';
export 'package:auge_server/model/authorization.dart';

import 'package:auge_web/services/augeapi_service.dart';
import 'dart:convert' show base64;
import 'package:crypto/crypto.dart' show sha256;


@Injectable()
class AuthService  {

 // static bool ehAdministrador = false;

  User authenticatedUser;
  List<UserProfileOrganization> authorizedOrganizations;
  AuthorizationPolicy _generalAuthorizationPolicy;
  Organization _selectedOrganization;
  SystemRole authorizedSystemRole;

  final AugeApiService _augeApiService;

  AuthService(this._augeApiService) {
    _generalAuthorizationPolicy = GeneralAuthorizationPolicy();
  }

  /// Return an [Organization] list for an eMail.
  Future<List<UserProfileOrganization>> getAuthorizedOrganizationsByUserId(String id) async {
    List<UserProfileOrganization> usersOrganizations;
    if (id.isNotEmpty)
      usersOrganizations = await _augeApiService.augeApi.getAuthorizedOrganizationsByUserId(id);
    return usersOrganizations;
  }

  void close() async {
    await _augeApiService.augeApi.closeConnection();
    authenticatedUser = null;
    authorizedOrganizations = null;
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

  Organization get selectedOrganization => _selectedOrganization;

  set selectedOrganization(Organization organization) {

    _selectedOrganization = organization;

    if (authenticatedUser != null) {
      if (authenticatedUser.userProfile?.isSuperAdmin) {
        authorizedSystemRole = SystemRole.superAdmin;
      } else {
        authorizedSystemRole =
        SystemRole.values[authorizedOrganizations
            .singleWhere((o) => o.organization.id == selectedOrganization.id)
            .authorizationRole];
      }
    }
  }

  bool isAuthorizedForAtuhorizatedRole(SystemModule systemModule, {dynamic systemFunction, dynamic systemConstraint}) {
    if (_generalAuthorizationPolicy != null) {
      return _generalAuthorizationPolicy.isAuthorized(authorizedSystemRole, systemModule, systemFunction: systemFunction, systemConstraint: systemConstraint);
    } else {
      return false;
    }
  }

  bool get isSuperAdmin {
    return (authenticatedUser?.userProfile?.isSuperAdmin == true);
  }

  bool get isAdmin {
    UserProfileOrganization userOrganization = authorizedOrganizations?.firstWhere((o) => o.organization.id == selectedOrganization?.id, orElse: () => null);
    return authorizedOrganizations != null && selectedOrganization != null && userOrganization != null && userOrganization?.authorizationRole == SystemRole.admin.index;
  }
}
import 'dart:async';
import 'dart:convert' show base64;

import 'package:angular/core.dart';
import 'package:crypto/crypto.dart' show sha256;

import 'package:auge_server/model/general/user.dart';
import 'package:auge_server/model/general/organization.dart';
import 'package:auge_server/model/general/user_profile_organization.dart';
import 'package:auge_server/shared/authorization_policy.dart';
import 'package:auge_server/model/general/authorization.dart';
export 'package:auge_server/model/general/authorization.dart';

import 'package:auge_server/src/protos/generated/general/user_profile_organization.pbgrpc.dart' as user_profile_organization_pbgrpc;
// import 'package:auge_server/src/protos/generated/general/user.pbgrpc.dart' as user_pbgrpc;

import 'package:auge_web/services/auge_api_service.dart';

import 'package:grpc/grpc_web.dart';

@Injectable()
class AuthService  {
  // User authenticatedUser;
  // List<UserProfileOrganization> authorizedOrganizations;
  AuthorizationPolicy _generalAuthorizationPolicy;
  // Organization _selectedOrganization;
  UserProfileOrganization authUserProfileOrganization;
 // SystemRole authorizedSystemRole;

  final AugeApiService _augeApiService;
  user_profile_organization_pbgrpc.UserProfileOrganizationServiceClient _userProfileOrganizationServiceClient;
  //user_pbgrpc.UserServiceClient _userServiceClient;

  AuthService(this._augeApiService)  {
    _generalAuthorizationPolicy = GeneralAuthorizationPolicy();
 //   ClientConnection cc = await _augeApiService.channel.getConnection();

    _userProfileOrganizationServiceClient =
        user_profile_organization_pbgrpc.UserProfileOrganizationServiceClient(this._augeApiService.channel);

   // _userServiceClient =
   //     user_pbgrpc.UserServiceClient(this._augeApiService.channel);
  }

  /// User authenticated
  User get authenticatedUser  => authUserProfileOrganization?.user;
  /// Organization authorized (selected) from a list (if exists) of authorized organizations
  Organization get authorizedOrganization  => authUserProfileOrganization?.organization;


  /// Return an [Organization] list for an eMail.
  Future<List<UserProfileOrganization>> getAuthorizedUsersProfileOrganizations(String userId) async {
    List<UserProfileOrganization> usersOrganizations;
    if (userId.isNotEmpty) {

      // Return a protobuf via grpc
      user_profile_organization_pbgrpc
          .UsersProfileOrganizationsResponse usersProfileOrganizationsResponse = await _userProfileOrganizationServiceClient
          .getUsersProfileOrganizations(
          user_profile_organization_pbgrpc.UserProfileOrganizationGetRequest()
            ..userId = userId);

      // Create model from protobuf equivalent
      usersOrganizations = usersProfileOrganizationsResponse.usersProfileOrganizations.map((upo) => UserProfileOrganization()..readFromProtoBuf(upo)).toList();

      //this.measureProgress = measurePb.measureProgress.map((u) => MeasureProgress()..readFromProtoBuf(u)).toList();
    }

     //-- usersOrganizations = await _augeApiService.augeApi.getAuthorizedOrganizationsByUserId(id);
    return usersOrganizations;
  }

  /*
  void close() async {
    // await _augeApiService.augeApi.closeConnection();
    authenticatedUser = null;
    authorizedOrganizations = null;
  }

   */

  Future<User> getAuthenticatedUserWithEmail(String eMail, String passwordStr) async {
    User user;
    if (!eMail.isEmpty || !passwordStr.isEmpty) {
      String password = base64.encode(sha256
          .convert(passwordStr.codeUnits)
          .bytes);

     try {
       user_profile_organization_pbgrpc
           .UserProfileOrganization userProfileOrganization = await _userProfileOrganizationServiceClient
           .getUserProfileOrganization(
           user_profile_organization_pbgrpc.UserProfileOrganizationGetRequest()
             ..eMail = eMail
             ..password = password);

       if (userProfileOrganization != null) {
         user = User()
           ..readFromProtoBuf(userProfileOrganization.user);
       }
     } on GrpcError catch (e) {
       print(e);
       rethrow;
     }

      /*--
        try {
          user = await _augeApiService.augeApi.getAuthenticatedUserWithEmail(
              eMail, password, withProfile: true);
        } on DetailedApiRequestError catch (e) {
          if (e.status == 204 && e.errors.firstWhere((ed) => ed.reason == RpcErrorDetailMessage.userDataNotFoundReason, orElse: null ) != null)
            user = null;
          else {
            rethrow;
          }
        }
        */

      }
    return user;
  }
/*
  void refreshAuthenticatedUserById(String userId) async {
    authenticatedUser = User()..readFromProtoBuf(await _userServiceClient.getUser(user_pbgrpc.UserGetRequest()..id = userId..withProfile = true));
  }
*/
 // Organization get selectedOrganization => _selectedOrganization;
/*
  set selectedOrganization(Organization organization) {

    authorizedUserProfileOrganization.organization = organization;
   // _selectedOrganization = organization;

    if (authorizedUserProfileOrganization.user != null && /*authorizedOrganizations != null && */ organization != null) {
        authorizedSystemRole =
        SystemRole.values[authorizedOrganizations
            .singleWhere((o) => o.organization.id == _selectedOrganization.id)
            .authorizationRole];
    }
  }

 */

  bool isAuthorizedForAtuhorizatedRole(SystemModule systemModule, {dynamic systemFunction, dynamic systemConstraint}) {
    if (_generalAuthorizationPolicy != null) {
      return _generalAuthorizationPolicy.isAuthorized(SystemRole.values[authUserProfileOrganization.authorizationRole], systemModule, systemFunction: systemFunction, systemConstraint: systemConstraint);
    } else {
      return false;
    }
  }

  bool get isAdmin {
    return authUserProfileOrganization?.authorizationRole == SystemRole.admin.index;
    /*
    UserProfileOrganization userOrganization = authorizedOrganizations?.firstWhere((o) => o.organization.id == selectedOrganization?.id, orElse: () => null);
    return authorizedOrganizations != null && selectedOrganization != null && userOrganization != null && userOrganization?.authorizationRole == SystemRole.admin.index;
  */
  }

  bool get isSuperAdmin {
    return authUserProfileOrganization?.authorizationRole == SystemRole.superAdmin.index;
    /*
    UserProfileOrganization userOrganization = authorizedOrganizations?.firstWhere((o) => o.organization.id == selectedOrganization?.id, orElse: () => null);
    return authorizedOrganizations != null && selectedOrganization != null && userOrganization != null && userOrganization?.authorizationRole == SystemRole.admin.index;
  */
  }
  // bool get isAuthenticatedUserAndSelectedOrganization => authenticatedUser != null && selectedOrganization != null;
}
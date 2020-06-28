import 'dart:async';

import 'package:angular/core.dart';
import 'package:auge_shared/domain/general/user.dart';
import 'package:auge_shared/domain/general/organization.dart';
import 'package:auge_shared/domain/general/user_access.dart';
import 'package:auge_shared/auth/authorization_policy.dart';
import 'package:auge_shared/domain/general/authorization.dart';
export 'package:auge_shared/domain/general/authorization.dart';

import 'package:auge_shared/protos/generated/general/user_access.pbgrpc.dart' as user_access_pbgrpc;
import 'package:auge_shared/protos/generated/general/user_identity.pbgrpc.dart' as user_identity_pbgrpc;
// import 'package:auge_shared/protos/generated/general/user.pbgrpc.dart' as user_pbgrpc;

import 'package:auge_web/services/auge_api_service.dart';

import 'package:grpc/grpc_web.dart';

@Injectable()
class AuthService  {
  // User authenticatedUser;
  // List<UserAccess> authorizedOrganizations;
  AuthorizationPolicy _generalAuthorizationPolicy;
  // Organization _selectedOrganization;
  UserAccess authUserAccess;

 // SystemRole authorizedSystemRole;

  final AugeApiService _augeApiService;
  user_access_pbgrpc.UserAccessServiceClient _userAccessServiceClient;
  user_identity_pbgrpc.UserIdentityServiceClient _userIdentityServiceClient;

  AuthService(this._augeApiService)  {
    _generalAuthorizationPolicy = GeneralAuthorizationPolicy();

    _userIdentityServiceClient =
        user_identity_pbgrpc.UserIdentityServiceClient(this._augeApiService.channel);

    _userAccessServiceClient =
        user_access_pbgrpc.UserAccessServiceClient(this._augeApiService.channel);
  }

  /// User authenticated
  User get authenticatedUser  => authUserAccess?.user;
  /// Organization authorized (selected) from a list (if exists) of authorized organizations
  Organization get authorizedOrganization  => authUserAccess?.organization;


  /// Return an [Organization] list for an eMail.
  Future<List<UserAccess>> getAuthorizedUserAccesses(String userId) async {
    List<UserAccess> userAccesses;
    if (userId.isNotEmpty) {

      // Return a protobuf via grpc
      user_access_pbgrpc
          .UserAccessesResponse userAccessesResponse = await _userAccessServiceClient
          .getUserAccesses(
          user_access_pbgrpc.UserAccessGetRequest()
            ..userId = userId);

      // Create model from protobuf equivalent
      Map<String, dynamic> cache = {};
      userAccesses = userAccessesResponse.userAccesses.map((upo) => UserAccessHelper.readFromProtoBuf(upo, cache)).toList();

      //this.measureProgress = measurePb.measureProgress.map((u) => MeasureProgress()..readFromProtoBuf(u)).toList();
    }

     //-- usersOrganizations = await _augeApiService.augeApi.getAuthorizedOrganizationsByUserId(id);
    return userAccesses;
  }

  Future<User> getAuthenticatedUser(String identification, String password) async {
    User user;
    if (!identification.isEmpty || !password.isEmpty) {
      try {

        user_identity_pbgrpc
            .UserIdentity userIdentity = await _userIdentityServiceClient
            .getUserIdentity(
            user_identity_pbgrpc.UserIdentityGetRequest()
              ..identification = identification
              ..password = password);

        if (userIdentity != null) {
          Map<String, dynamic> cache = {};
          user = UserHelper.readFromProtoBuf(userIdentity.user, cache);
        }

      } on GrpcError catch (e) {
        if (e.code == StatusCode.notFound) {
          return null;
        } else {
          print(e);
          rethrow;
        }
      } catch (e) {
        print(e);
        rethrow;
      }
    }
    return user;
  }

  bool isAuthorizedForAccessRole(SystemModule systemModule, {dynamic systemFunction, dynamic systemConstraint}) {
    if (_generalAuthorizationPolicy != null) {

      return _generalAuthorizationPolicy.isAuthorized(SystemRole.values[authUserAccess.accessRole], systemModule, systemFunction: systemFunction, systemConstraint: systemConstraint);
    } else {
      return false;
    }
  }

  bool get isAdmin {
    return authUserAccess?.accessRole == SystemRole.admin.index;
  }

  bool get isSuperAdmin {
    return authUserAccess?.accessRole == SystemRole.superAdmin.index;
  }

  Future<NewPasswordCodeEMail> generateNewPasswordCodeAndSendEmail(String identification) async {
    String code;
    String eMail;
    if (identification.isNotEmpty) {
      try {

        user_identity_pbgrpc.NewPasswordCodeResponse newPasswordCodeResponse = await _userIdentityServiceClient
            .generateNewPasswordCodeAndSendEmail(
            user_identity_pbgrpc.NewPasswordCodeRequest()
              ..identification = identification);

        if (newPasswordCodeResponse != null && newPasswordCodeResponse.hasCode()) {

          code = newPasswordCodeResponse.code;
          eMail = newPasswordCodeResponse.eMail;

        }

      } on GrpcError catch (e) {
        if (e.code == StatusCode.notFound) {
          return null;
        } else {
          print(e);
          rethrow;
        }
      } catch (e) {
        print(e);
        rethrow;
      }
    }
    return NewPasswordCodeEMail()..code = code..eMail = eMail;
  }

  Future<void> saveNewPassword(String identification, String password) async {

    try {
      await _userIdentityServiceClient.updateUserIdentityPassword(user_identity_pbgrpc.UserIdentityPasswordRequest()..identification = identification..password = password);
    } catch (e) {
      print(e);
      rethrow;
    }

  }

}

class NewPasswordCodeEMail {
  String code;
  String eMail;
}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';
import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_server/model/general/organization.dart';

import 'package:auge_web/services/auge_api_service.dart';
import 'package:auge_server/src/protos/generated/general/common.pbgrpc.dart' as common_pbgrpc;
import 'package:auge_server/src/protos/generated/general/organization.pbgrpc.dart' as organization_pbgrpc;

@Injectable()
class OrganizationService {
  final AuthService _authService;
  final AugeApiService _augeApiService;
  organization_pbgrpc.OrganizationServiceClient _organizationServiceClient;

  OrganizationService(this._authService, this._augeApiService) {
    _organizationServiceClient = organization_pbgrpc.OrganizationServiceClient(_augeApiService.channel);
  }

  AuthService get authService => _authService;

  /// Return an [Organization]
  Future<Organization> getOrganization(String organizationId) async {
    //return _augeApiService.augeApi.getOrganizations();
    return (Organization()..readFromProtoBuf(await _organizationServiceClient.getOrganization(
        organization_pbgrpc.OrganizationGetRequest()..id = organizationId)));
  }

  /// Return a list of [Organization]
  Future<List<Organization>> getOrganizations() async {
    //return _augeApiService.augeApi.getOrganizations();
    return (await _organizationServiceClient.getOrganizations(
        organization_pbgrpc.OrganizationGetRequest())).organizations.map((m) =>
    Organization()
      ..readFromProtoBuf(m)).toList();
  }

  /// Save (create or update)an [Organization]
  void saveOrganization(Organization organization) async {

    organization_pbgrpc.OrganizationRequest organizationRequest = organization_pbgrpc.OrganizationRequest()
      ..organization = organization.writeToProtoBuf()
      ..authenticatedOrganizationId = _authService.authorizedOrganization.id
      ..authenticatedUserId = _authService.authenticatedUser.id;

    try {
      if (organization.id == null) {

        common_pbgrpc.IdResponse idResponse= await _organizationServiceClient
            .createOrganization(organizationRequest);

        organization.id = idResponse.id;

      } else {
        await _organizationServiceClient.updateOrganization(organizationRequest);
      }
    } catch (e) {
      rethrow;
    }
  }

  /// Delete an [Organization]
  void deleteOrganization(Organization organization) async {

    organization_pbgrpc.OrganizationDeleteRequest organizationDeleteRequest = organization_pbgrpc.OrganizationDeleteRequest()
      ..organizationId = organization.id
      ..organizationVersion = organization.version
      ..authenticatedOrganizationId = _authService.authorizedOrganization.id
      ..authenticatedUserId = _authService.authenticatedUser.id;

    try {
      await _organizationServiceClient.deleteOrganization(organizationDeleteRequest);
    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
  }

  /*
  /// Delete an [Organization]
  void deleteOrganization(Organization organization) async {
    try {
      await _organizationServiceClient.deleteOrganization(organization.writeToProtoBuf());
    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
  }
  */
}
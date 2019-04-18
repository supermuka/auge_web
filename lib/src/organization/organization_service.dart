// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_server/model/general/organization.dart';

import 'package:auge_web/services/auge_api_service.dart';
import 'package:auge_server/src/protos/generated/general/common.pbgrpc.dart' as common_pbgrpc;
import 'package:auge_server/src/protos/generated/general/organization.pbgrpc.dart' as organization_pbgrpc;

@Injectable()
class OrganizationService {

  final AugeApiService _augeApiService;
  organization_pbgrpc.OrganizationServiceClient _organizationServiceClient;

  OrganizationService(this._augeApiService) {
    _organizationServiceClient = organization_pbgrpc.OrganizationServiceClient(_augeApiService.channel);
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
    try {
      if (organization.id == null) {

      //  organization = await _augeApiService.augeApi.createOrganization(
        //    organization);

        common_pbgrpc.IdResponse idResponse= await _organizationServiceClient
            .createOrganization((organization.writeToProtoBuf()));

        organization.id = idResponse.id;

      } else {
        await _organizationServiceClient.updateOrganization((organization.writeToProtoBuf()));
      }
    } catch (e) {
      rethrow;
    }
  }

  /// Soft Delete an [Organization]
  void softDeleteOrganization(Organization organization) async {
    try {
      await _organizationServiceClient.softDeleteOrganization(organization.writeToProtoBuf());
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
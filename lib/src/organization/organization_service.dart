// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_server/model/organization.dart';

import 'package:auge_web/services/augeapi_service.dart';

@Injectable()
class OrganizationService {

  final AugeApiService _augeApiService;

  OrganizationService(this._augeApiService);

  /// Return a list of [Organization]
  Future<List<Organization>> getOrganizations() async {

    return await _augeApiService.augeApi.getOrganizations();

  }

  /// Return an Organization by [id]
  Future<Organization> getOrganizationById(String id) async {

    return await _augeApiService.augeApi.getOrganizationById(id);

  }

  /// Save (create or update)an [Organization]
  void saveOrganization(Organization organization) async {
    if (organization.id == null) {
      organization.id = await _augeApiService.augeApi.createOrganization(organization);
    } else {
      await _augeApiService.augeApi.updateOrganization(organization);
    }
  }

  /// Delete an [Organization]
  void deleteOrganization(Organization organization) {
    _augeApiService.augeApi.deleteOrganization(organization.id);

  }
}
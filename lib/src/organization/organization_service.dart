// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_server/message/created_message.dart';
import 'package:auge_server/model/organization.dart';

import 'package:auge_web/services/augeapi_service.dart';

@Injectable()
class OrganizationService {

  final AugeApiService _augeApiService;

  OrganizationService(this._augeApiService);

  /// Return a list of [Organization]
  Future<List<Organization>> getOrganizations() async {
    return _augeApiService.augeApi.getOrganizations();
  }

  /// Save (create or update)an [Organization]
  void saveOrganization(Organization organization) async {
    try {
      if (organization.id == null) {
        IdMessage idMessage = await _augeApiService.augeApi.createOrganization(
            organization);

        // ID - primary key generated on server-side.
        organization.id = idMessage?.id;
      } else {
        await _augeApiService.augeApi.updateOrganization(organization);
      }
    } catch (e) {
      rethrow;
    }
  }

  /// Delete an [Organization]
  void deleteOrganization(String id) async {
    try {
      await _augeApiService.augeApi.deleteOrganization(id);
    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
  }
}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';
import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_server/model/general/organization_configuration.dart';

import 'package:auge_web/services/auge_api_service.dart';
import 'package:auge_server/src/protos/generated/google/protobuf/wrappers.pb.dart' as wrappers_pb;
import 'package:auge_server/src/protos/generated/general/organization_configuration.pbgrpc.dart' as organization_configuration_pbgrpc;
import 'package:grpc/grpc_web.dart';

@Injectable()
class ConfigurationService {
  final AuthService _authService;
  final AugeApiService _augeApiService;
  organization_configuration_pbgrpc.OrganizationConfigurationServiceClient _organizationConfigurationServiceClient;

  ConfigurationService(this._authService, this._augeApiService) {
    _organizationConfigurationServiceClient = organization_configuration_pbgrpc.OrganizationConfigurationServiceClient(_augeApiService.channel);
  }

  AuthService get authService => _authService;

  /// Return a [OrganizationConfiguration]
  Future<OrganizationConfiguration> getOrganizationConfiguration(String organizationId) async {
    OrganizationConfiguration organizationConfiguration;
    try {

      organizationConfiguration = OrganizationConfiguration()
        ..readFromProtoBuf(await _organizationConfigurationServiceClient
            .getOrganizationConfiguration(
            organization_configuration_pbgrpc
                .OrganizationConfigurationGetRequest()
              ..organizationId = organizationId));

    } on GrpcError catch (e) {

      if (e.code == StatusCode.notFound) {
        return null;
      } else {
        print(e.toString());
        rethrow;
      }
    } catch (e) {
      print(e.toString());
      rethrow;
    }
    return organizationConfiguration;
  }

  /// Save (create or update) a [Configuration]
  void saveOrganizationConfiguration(OrganizationConfiguration organizationConfiguration) async {

    organization_configuration_pbgrpc.OrganizationConfigurationRequest organizationConfigurationRequest = organization_configuration_pbgrpc.OrganizationConfigurationRequest()
      ..organizationConfiguration = organizationConfiguration.writeToProtoBuf()
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id;

    try {
      if (organizationConfiguration.organizationId == null) {

          wrappers_pb.StringValue stringValueId = await _organizationConfigurationServiceClient
              .createOrganizationConfiguration(organizationConfigurationRequest);

          organizationConfiguration.organizationId = stringValueId.value;

      } else {
        await _organizationConfigurationServiceClient
            .updateOrganizationConfiguration(organizationConfigurationRequest);
      }
    } catch (e) {
      rethrow;
    }

  }

  Future<int> testDirectoryService(OrganizationConfiguration organizationConfiguration) async {
    try {

      organization_configuration_pbgrpc.OrganizationConfigurationRequest configurationRequest = organization_configuration_pbgrpc.OrganizationConfigurationRequest()
        ..organizationConfiguration = organizationConfiguration.writeToProtoBuf();

      configurationRequest.authOrganizationId = _authService.authorizedOrganization.id;
      configurationRequest.authUserId = _authService.authenticatedUser.id;

      wrappers_pb.Int32Value int32value = await _organizationConfigurationServiceClient.testDirectoryService(configurationRequest);

      return int32value.value;
    } catch (e) {
      rethrow;
    }
  }

  Future<int> syncDirectoryService(OrganizationConfiguration organizationConfiguration) async {
    try {

      organization_configuration_pbgrpc.OrganizationConfigurationRequest configurationRequest = organization_configuration_pbgrpc.OrganizationConfigurationRequest()
        ..organizationConfiguration = organizationConfiguration.writeToProtoBuf();

      configurationRequest.authOrganizationId = _authService.authorizedOrganization.id;
      configurationRequest.authUserId = _authService.authenticatedUser.id;

      wrappers_pb.Int32Value int32value = await _organizationConfigurationServiceClient.syncDirectoryService(configurationRequest);

      return int32value.value;
    } catch (e) {
      rethrow;
    }
  }

}
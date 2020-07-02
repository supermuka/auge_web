// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';
import 'package:auge_shared/domain/general/organization_directory_service.dart';
import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_shared/domain/general/organization.dart';
import 'package:auge_shared/domain/general/organization_configuration.dart';

import 'package:auge_web/services/auge_api_service.dart';
import 'package:auge_shared/protos/generated/google/protobuf/wrappers.pb.dart' as wrappers_pb;
import 'package:auge_shared/protos/generated/general/organization.pbgrpc.dart' as organization_pbgrpc;
import 'package:auge_shared/protos/generated/general/organization_configuration.pbgrpc.dart' as organization_configuration_pbgrpc;
import 'package:auge_shared/protos/generated/general/organization_directory_service.pbgrpc.dart' as organization_directory_service_pbgrpc;
import 'package:grpc/grpc_web.dart';

@Injectable()
class OrganizationService {
  final AuthService _authService;
  final AugeApiService _augeApiService;
  organization_pbgrpc.OrganizationServiceClient _organizationServiceClient;
  organization_configuration_pbgrpc.OrganizationConfigurationServiceClient _organizationConfigurationServiceClient;
  organization_directory_service_pbgrpc.OrganizationDirectoryServiceServiceClient _organizationDirectoryServiceServiceClient;

  OrganizationService(this._authService, this._augeApiService) {
    _organizationServiceClient = organization_pbgrpc.OrganizationServiceClient(_augeApiService.channel);
    _organizationConfigurationServiceClient = organization_configuration_pbgrpc.OrganizationConfigurationServiceClient(_augeApiService.channel);
    _organizationDirectoryServiceServiceClient = organization_directory_service_pbgrpc.OrganizationDirectoryServiceServiceClient(_augeApiService.channel);
  }

  AuthService get authService => _authService;

  // Organization

  /// Return an [Organization]
  Future<Organization> getOrganization(String organizationId) async {
    //return _augeApiService.augeApi.getOrganizations();
    return (OrganizationHelper.readFromProtoBuf((await _organizationServiceClient.getOrganizations(
        organization_pbgrpc.OrganizationGetRequest()..id = organizationId)).organizations.first));
  }

  /// Return a list of [Organization]
  Future<List<Organization>> getOrganizations() async {
    //return _augeApiService.augeApi.getOrganizations();
    return (await _organizationServiceClient.getOrganizations(
        organization_pbgrpc.OrganizationGetRequest())).organizations.map((m) =>
    OrganizationHelper.readFromProtoBuf(m)).toList();
  }

  /// Save (create or update)an [Organization]
  void saveOrganization(Organization organization) async {

    organization_pbgrpc.OrganizationRequest organizationRequest = organization_pbgrpc.OrganizationRequest()
      ..organization = OrganizationHelper.writeToProtoBuf(organization)
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id;

    try {
      if (organization.id == null) {

        wrappers_pb.StringValue idResponse= await _organizationServiceClient
            .createOrganization(organizationRequest);

        organization.id = idResponse.value;

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
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id;

    try {
      await _organizationServiceClient.deleteOrganization(organizationDeleteRequest);
    } catch (e) {
      print('${e.runtimeType}, ${e}');
      rethrow;
    }
  }


  // OrganizationConfiguration

  /// Return a [OrganizationConfiguration]
  Future<OrganizationConfiguration> getOrganizationConfiguration({String organizationConfigurationId, String organizationId}) async {
    OrganizationConfiguration organizationConfiguration;
    try {

      organization_configuration_pbgrpc
          .OrganizationConfigurationGetRequest organizationConfigurationGetRequest = organization_configuration_pbgrpc
          .OrganizationConfigurationGetRequest();

      if (organizationConfigurationId != null)
         organizationConfigurationGetRequest.id = organizationConfigurationId;
      if (organizationId != null)
         organizationConfigurationGetRequest.organizationId = organizationId;

      organizationConfiguration = OrganizationConfigurationHelper.readFromProtoBuf(await _organizationConfigurationServiceClient
            .getOrganizationConfiguration(organizationConfigurationGetRequest));

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
      ..organizationConfiguration = OrganizationConfigurationHelper.writeToProtoBuf(organizationConfiguration)
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id;

    try {
      if (organizationConfiguration.id == null) {

          wrappers_pb.StringValue stringValueId = await _organizationConfigurationServiceClient
              .createOrganizationConfiguration(organizationConfigurationRequest);

          organizationConfiguration.id = stringValueId.value;

      } else {
        await _organizationConfigurationServiceClient
            .updateOrganizationConfiguration(organizationConfigurationRequest);
      }
    } catch (e) {
      rethrow;
    }

  }

  // OrganizationDirectoryService

  /// Return a [OrganizationDirectoryService]
  Future<OrganizationDirectoryService> getOrganizationDirectoryService({String organizationDirectoryServiceId, String organizationId}) async {
    OrganizationDirectoryService organizationDirectoryService;
    try {


      organization_directory_service_pbgrpc
          .OrganizationDirectoryServiceGetRequest organizationDirectoryServiceGetRequest = organization_directory_service_pbgrpc
          .OrganizationDirectoryServiceGetRequest();

      if (organizationDirectoryServiceId != null)
        organizationDirectoryServiceGetRequest.id = organizationDirectoryServiceId;
      if (organizationId != null)
        organizationDirectoryServiceGetRequest.organizationId = organizationId;

      organizationDirectoryService = OrganizationDirectoryServiceHelper.readFromProtoBuf(await _organizationDirectoryServiceServiceClient
            .getOrganizationDirectoryService(organizationDirectoryServiceGetRequest));

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
    return organizationDirectoryService;
  }

  /// Save (create or update) a [Configuration]
  void saveOrganizationDirectoryService(OrganizationDirectoryService organizationDirectoryService) async {

    organization_directory_service_pbgrpc.OrganizationDirectoryServiceRequest organizationDirectoryServiceRequest = organization_directory_service_pbgrpc.OrganizationDirectoryServiceRequest()
      ..organizationDirectoryService = OrganizationDirectoryServiceHelper.writeToProtoBuf(organizationDirectoryService)
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id;

    try {
      if (organizationDirectoryService.id == null) {

        wrappers_pb.StringValue stringValueId = await _organizationDirectoryServiceServiceClient
            .createOrganizationDirectoryService(organizationDirectoryServiceRequest);

        organizationDirectoryService.id = stringValueId.value;

      } else {
        await _organizationDirectoryServiceServiceClient
            .updateOrganizationDirectoryService(organizationDirectoryServiceRequest);
      }
    } catch (e) {
      rethrow;
    }
  }

  Future<int> testOrganizationDirectoryService(OrganizationDirectoryService organizationDirectoryService) async {
    try {

      organization_directory_service_pbgrpc.OrganizationDirectoryServiceRequest organizationDirectoryServiceRequest = organization_directory_service_pbgrpc.OrganizationDirectoryServiceRequest()
        ..organizationDirectoryService = OrganizationDirectoryServiceHelper.writeToProtoBuf(organizationDirectoryService);

      organizationDirectoryServiceRequest.authOrganizationId = _authService.authorizedOrganization.id;
      organizationDirectoryServiceRequest.authUserId = _authService.authenticatedUser.id;

      wrappers_pb.Int32Value int32value = await _organizationDirectoryServiceServiceClient.testOrganizationDirectoryService(organizationDirectoryServiceRequest);

      return int32value.value;
    } catch (e) {
      rethrow;
    }
  }

  Future<int> syncOrganizationDirectoryService(OrganizationDirectoryService organizationDirectoryService) async {
    try {

      organization_directory_service_pbgrpc.OrganizationDirectoryServiceRequest organizationDirectoryServiceRequest = organization_directory_service_pbgrpc.OrganizationDirectoryServiceRequest()
        ..organizationDirectoryService = OrganizationDirectoryServiceHelper.writeToProtoBuf(organizationDirectoryService);

      organizationDirectoryServiceRequest.authOrganizationId = _authService.authorizedOrganization.id;
      organizationDirectoryServiceRequest.authUserId = _authService.authenticatedUser.id;

      wrappers_pb.Int32Value int32value = await _organizationDirectoryServiceServiceClient.syncOrganizationDirectoryService(organizationDirectoryServiceRequest);

      return int32value.value;
    } catch (e) {
      rethrow;
    }
  }

}
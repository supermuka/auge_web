// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_web/src/auth/auth_service.dart';

import 'package:auge_web/services/auge_api_service.dart';

import 'package:auge_shared/domain/general/group.dart';

import 'package:auge_shared/protos/generated/google/protobuf/wrappers.pb.dart' as wrappers_pb;

import 'package:auge_shared/protos/generated/general/group.pbgrpc.dart' as group_pbgrpc;

@Injectable()
class GroupService {
  final AuthService _authService;
  final AugeApiService _augeApiService;
  group_pbgrpc.GroupServiceClient _groupServiceClient;

  GroupService(this._authService, this._augeApiService)  {
    _groupServiceClient =
        group_pbgrpc.GroupServiceClient(_augeApiService.channel);
  }

  get authService => _authService;

  /// Return a list of [Group]
  Future<Group> getGroup(String groupId) async {
    //--return _augeApiService.augeApi.getGroups(organizationId);

    // Return a protobuf via grpc
    group_pbgrpc
        .Group groupPb = await _groupServiceClient
        .getGroup(
        group_pbgrpc.GroupGetRequest()
          ..id = groupId);

    // Create model from protobuf equivalent
    Map<String, dynamic> cache = {};
    return Group()..readFromProtoBuf(groupPb, cache);
  }

  /// Return a list of [Group]
  Future<List<Group>> getGroups(String organizationId) async {
   //--return _augeApiService.augeApi.getGroups(organizationId);

    // Return a protobuf via grpc
    group_pbgrpc
        .GroupsResponse groupsResponse = await _groupServiceClient
        .getGroups(
        group_pbgrpc.GroupGetRequest()
          ..organizationId = organizationId);

    // Create model from protobuf equivalent
    Map<String, dynamic> cache = {};
    return groupsResponse.groups.map((g) => Group()..readFromProtoBuf(g, cache)).toList();
  }

  /// Delete an [Group]
  Future deleteGroup(Group group) async {
    try {

      group_pbgrpc.GroupDeleteRequest groupDeleteRequest = group_pbgrpc.GroupDeleteRequest()
        ..groupId = group.id
        ..groupVersion = group.version
        ..authOrganizationId = _authService.authorizedOrganization.id
        ..authUserId = _authService.authenticatedUser.id;

      await _groupServiceClient.deleteGroup(groupDeleteRequest);
    } catch (e) {
      rethrow;
    }
  }

  /// Save (create or update) an [Group]
  void saveGroup(Group group) async {
    try {
      group_pbgrpc.GroupRequest groupRequest = group_pbgrpc.GroupRequest()
        ..group = group.writeToProtoBuf()
        ..authOrganizationId = _authService.authorizedOrganization.id
        ..authUserId = _authService.authenticatedUser.id;


      //= group.writeToProtoBuf()..authenticatedUser = _authService.authenticatedUser.writeToProtoBuf();

      if (group.id == null) {

        wrappers_pb.StringValue idResponse = await _groupServiceClient.createGroup(groupRequest);

        // ID - primary key generated on server-side.
        group.id = idResponse?.value;
      } else {
        await _groupServiceClient.updateGroup(groupRequest);
      }
    } catch (e) {
      rethrow;
    }
  }

  /*
  /// Return a list of [GroupType]
  Future<List<GroupType>> getGroupTypes() async {
    List<GroupType> groupTypes =  (await _groupServiceClient.getGroupTypes(empty_pb.Empty())).groupTypes.map((upo) => GroupType()..readFromProtoBuf(upo)).toList();
    // Translate
    GroupType.values .forEach((f) => f.toString() = GroupMsg.groupTypeLabel(f.name));

    return groupTypes;
  }

   */
}
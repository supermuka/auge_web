// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_web/services/auge_api_service.dart';
import 'package:auge_web/message/messages.dart';


import 'package:auge_server/model/general/group.dart';

import 'package:auge_server/src/protos/generated/google/protobuf/empty.pb.dart' as empty_pb;
import 'package:auge_server/src/protos/generated/general/common.pb.dart' as common_pb;
import 'package:auge_server/src/protos/generated/general/group.pbgrpc.dart' as group_pbgrpc;

@Injectable()
class GroupService {
  final AugeApiService _augeApiService;
  group_pbgrpc.GroupServiceClient _groupServiceClient;

  GroupService(this._augeApiService) {

    _groupServiceClient =
        group_pbgrpc.GroupServiceClient(_augeApiService.channel);

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
    return groupsResponse.groups.map((g) => Group()..readFromProtoBuf(g)).toList();
  }

  /// Delete an [Group]
  Future softDeleteGroup(Group group) async {
    try {
      await _groupServiceClient.softDeleteGroup(group.writeToProtoBuf());
    } catch (e) {
      rethrow;
    }
  }

  /// Delete an [Group]
/*
  Future deleteGroup(String id) async {
    try {
      //TODO need to pass group data to log history, when it will be implemented.
      await _groupServiceClient.deleteGroup(group_pbgrpc.Group()..id = id);
    } catch (e) {
      rethrow;
    }
  }
 */

  /// Save (create or update) an [Group]
  void saveGroup(Group group) async {
    try {

      if (group.id == null) {

        //print(GroupMessageFactory.toJson(GroupFacilities.messageFrom(group)));
/*
        GroupPersistent gp = GroupPersistent();
        gp.id = group.id;
        gp.name = group.name;
        gp.leader = group.leader;
        gp.groupType = group.groupType;
        gp.active = group.active;
        gp.members.addAll(group.members);
        gp.organization = group.organization;
        gp.superGroup = group.superGroup;
*/
        common_pb.IdResponse idResponse = await _groupServiceClient.createGroup(group.writeToProtoBuf());

        // ID - primary key generated on server-side.
        group.id = idResponse?.id;
      } else {
        await _groupServiceClient.updateGroup(group.writeToProtoBuf());
      }
    } catch (e) {
      rethrow;
    }
  }

  /// Return a list of [GroupType]
  Future<List<GroupType>> getGroupTypes() async {
    List<GroupType> groupTypes =  (await _groupServiceClient.getGroupTypes(empty_pb.Empty())).groupTypes.map((upo) => GroupType()..readFromProtoBuf(upo)).toList();
    // Translate
    groupTypes.forEach((f) => f.name = GroupMsg.groupTypeLabel(f.name));

    return groupTypes;
  }
}
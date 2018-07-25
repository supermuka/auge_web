import 'dart:async';

import 'package:angular/core.dart';
import 'package:auge_web/services/augeapi_service.dart';

import 'package:auge_server/message_type/id_message.dart';
import 'package:auge_server/model/group.dart';

import 'package:auge_web/message/messages.dart';


@Injectable()
class GroupService {

  final AugeApiService _augeApiService;

  GroupService(this._augeApiService);

  /// Return a list of [Group]
  Future<List<Group>> getGroups(String organizationId) async {
    return await _augeApiService.augeApi.getGroups(organizationId);
  }

  /// Return an [Group] by Id
  Future<Group> getGroupById(String id) async {
    return await _augeApiService.augeApi.getGroupById(id);
  }

  /// Delete an [Group]
  Future deleteGroup(String id) async {
    await _augeApiService.augeApi.deleteGroup(id);
  }

  /// Save (create or update) an [Group]
  void saveObjective(Group group) async {
    if (group.id == null) {
      IdMessage idMessage = await _augeApiService.augeApi.createGroup(group);

      // ID - primary key generated on server-side.
      group.id = idMessage?.id;
    } else {
      await _augeApiService.augeApi.updateGroup(group);
    }
  }

  /// Return a list of [GroupType]
  Future<List<GroupType>> getGroupTypes() async {
    List<GroupType> groupTypes = await _augeApiService.augeApi.getGroupTypes();

    // Translate
    groupTypes.forEach((f) => f.name = GroupMessage.groupTypeLabel(f.name));

    return groupTypes;
  }
}
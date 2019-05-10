// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:intl/intl.dart';
import 'package:intl/date_symbol_data_local.dart';

import 'package:angular/angular.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/content/deferred_content.dart';

import 'package:auge_server/model/general/user.dart';
import 'package:auge_server/model/general/user_profile_organization.dart';
import 'package:auge_server/model/general/group.dart';

import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/message/messages.dart';
import 'package:auge_web/message/model_messages.dart';

// Const to format html types
const _typeToViewTextLeft = '0';
const _typeToViewTextRight = '1';
const _typeToViewImageAvatar = '2';

// Const index to formated changed values
const _typeToViewKey = 't';
const _fieldDescriptionKey = 'd';
const _pKey = 'p';
const _cKey = 'c';

@Component(
    selector: 'auge-history-item-timeline-detail',
    providers: const [],
    directives: const [
      coreDirectives,
      MaterialExpansionPanel,
      MaterialButtonComponent,
      MaterialIconComponent,
      DeferredContentDirective,
    ],
   /* pipes:   const [DatePipe], */
    templateUrl: 'history_item_timeline_detail_component.html',

    styleUrls: const [
      'history_item_timeline_detail_component.css'
    ])
class HistoryItemTimelineDetailComponent /* extends Object */ implements OnInit {


  @Input()
  String objectClassName;

  @Input()
  Map<String, dynamic> changedValues;

  // List with String representation, formated when necessary, to present on web.
  Map<String, Map<dynamic, dynamic>> fieldsChangedValues;

  HistoryItemTimelineDetailComponent() {
    initializeDateFormatting(Intl.defaultLocale , null);
  }

  static final String timelineLabel = TimelineItemdMsg.label('Timeline');
  static final String theLabel = TimelineItemdMsg.label('the');
  static final String valueLabel =  TimelineItemdMsg.label('value');
  static final String changedFromLabel =  TimelineItemdMsg.label('changed from');
  static final String wasLabel =  TimelineItemdMsg.label('was');

  final typeToViewTextLeft =  _typeToViewTextLeft;
  final typeToViewTextRight = _typeToViewTextRight;
  final typeToViewImageAvatar = _typeToViewImageAvatar;

  final typeToViewKey = _typeToViewKey;
  final fieldDescriptionKey = _fieldDescriptionKey;
  final pKey = _pKey;
  final cKey = _cKey;

  void ngOnInit() async {

    fieldsChangedValues = getViewToChangedValues(objectClassName, changedValues);

  }

  // List<TimelineItem> get timeline => objective.timeline;
  String userUrlImage(String userProfileImage) {
    return common_service.userUrlImage(userProfileImage);
  }

  dynamic formatValue(dynamic value) {

    if (value is DateTime) {
      //return DateFormat.yMMMd().add_Hms().format(data);
      return DateFormat.yMMMd().format(value);
    } else {
      return value.toString();
    }
  }

  // Format data type to web presentation
  Map<String, Map<dynamic, dynamic>> getViewToChangedValues(String objectClassName, Map<String, dynamic> changedValues) {
    Map<String, Map<dynamic, dynamic>> viewToChangedValues;
    if (objectClassName == UserProfileOrganization.className) {
      viewToChangedValues = UserProfileOrganizationChangedValues().getViewToChangedValues(changedValues);
    } else if (objectClassName == Group.className) {
      viewToChangedValues = GroupChangedValues().getViewToChangedValues(changedValues);
    }
    return viewToChangedValues;
  }

}

class BaseChangedValues {
  Map<String, Map<dynamic, dynamic>> getViewToChangedValues(Map<String, dynamic> changedValues) {
    Map<String, Map<dynamic, dynamic>> _fieldsChangedValues = {};

    constructViewToFieldsChangedValues(_fieldsChangedValues, changedValues);

    return _fieldsChangedValues;
  }

  constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {}
}

/// USERS
class UserChangedValues extends BaseChangedValues {

  @override
  constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {
    changedValues?.forEach((k, v) {
      if (k != User.idField && k != User.versionField) {
        if (k == User.userProfileField) {
            UserProfileChangedValues().constructViewToFieldsChangedValues(
               fieldsChangedValues, v);
        } else if (k == User.passwordField) {
          fieldsChangedValues.putIfAbsent('${User.className}.${k}', () =>
          { _typeToViewKey: _typeToViewTextLeft,
            _fieldDescriptionKey: UserFieldMsg.label(k)});
          if (v.containsKey(_pKey)) fieldsChangedValues['${User.className}.${k}'][_pKey] = '***';
          if (v.containsKey(_cKey)) fieldsChangedValues['${User.className}.${k}'][_cKey] = '***';
        } else if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
          fieldsChangedValues.putIfAbsent('${User.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewTextLeft,
            _fieldDescriptionKey: UserFieldMsg.label(k)});

          if (v.containsKey(_pKey)) {
            fieldsChangedValues['${User.className}.${k}'][_pKey] =
            v[_pKey];
          }

          if (v.containsKey(_cKey)) {
            fieldsChangedValues['${User.className}.${k}'][_cKey] =
            v[_cKey];
          }
        }
      }
    });
    return fieldsChangedValues;
  }
}

class UserProfileChangedValues extends BaseChangedValues {

  @override
  Map<String, Map<dynamic, dynamic>> constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {
    changedValues?.forEach((k, v) {
      if (k == UserProfile.idiomLocaleField) {
        fieldsChangedValues.putIfAbsent('${UserProfile.className}.${k}', () =>
        {
          _typeToViewKey: _typeToViewTextLeft,
          _fieldDescriptionKey: UserProfileFieldMsg.label(k)});
        if (v.containsKey(_pKey))
          fieldsChangedValues['${UserProfile.className}.${k}'][_pKey] =
          UserProfileFieldMsg.valueLabel(v[_pKey]);
        if (v.containsKey(_cKey))
          fieldsChangedValues['${UserProfile.className}.${k}'][_cKey] =
          UserProfileFieldMsg.valueLabel(v[_cKey]);

      } else if (k == UserProfile.imageField) {
        fieldsChangedValues.putIfAbsent('${UserProfile.className}.${k}', () =>
        {
          _typeToViewKey: _typeToViewImageAvatar,
          _fieldDescriptionKey: UserProfileFieldMsg.label(k)});
        if (v.containsKey(_pKey)) fieldsChangedValues['${UserProfile.className}.${k}'][_pKey] = v[_pKey];
        if (v.containsKey(_cKey)) fieldsChangedValues['${UserProfile.className}.${k}'][_cKey] = v[_cKey];
      }
      else if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
        fieldsChangedValues.putIfAbsent('${UserProfile.className}.${k}', () =>
        {
          _typeToViewKey: _typeToViewTextLeft,
          _fieldDescriptionKey: UserProfileFieldMsg.label(k)});
        if (v.containsKey(_pKey))
          fieldsChangedValues['${UserProfile.className}.${k}'][_pKey] =
          v[_pKey];
        if (v.containsKey(_cKey))
          fieldsChangedValues['${UserProfile.className}.${k}'][_cKey] =
          v[_cKey];
      }
    });
    return fieldsChangedValues;
  }
}

class UserProfileOrganizationChangedValues extends BaseChangedValues {

  @override
  Map<String, Map<dynamic, dynamic>> constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {
    changedValues?.forEach((k, v) {
      if (k != UserProfileOrganization.idField && k != UserProfileOrganization.versionField) {
        if (k == UserProfileOrganization.userField) {
          UserChangedValues().constructViewToFieldsChangedValues(
              fieldsChangedValues, v);
        } else if (k == UserProfileOrganization.organizationField) {
         // OrganizationChangedValues().constructViewToFieldsChangedValues(
         //     fieldsChangedValues, v);
        }
        else if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
          fieldsChangedValues.putIfAbsent('${UserProfileOrganization.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewTextLeft,
            _fieldDescriptionKey: UserProfileFieldMsg.label(k)});
          if (v.containsKey(_pKey))
            fieldsChangedValues['${UserProfileOrganization.className}.${k}'][_pKey] =
            v[_pKey];
          if (v.containsKey(_cKey))
            fieldsChangedValues['${UserProfileOrganization.className}.${k}'][_cKey] =
            v[_cKey];
        }
      }
    });
    return fieldsChangedValues;
  }
}

/// GROUPS
class GroupChangedValues extends BaseChangedValues {

  @override
  Map<String, Map<dynamic, dynamic>> constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {
    changedValues?.forEach((k, v) {
      if (k != Group.idField && k != Group.versionField) {
        if (k == Group.activeField) {
          fieldsChangedValues.putIfAbsent(
              '${Group.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewTextLeft,
            _fieldDescriptionKey: GroupFieldMsg.label(k)
          });
          if (v.containsKey(_pKey))
            fieldsChangedValues['${Group.className}.${k}'][_pKey] =
                CommonFieldAndValuesMsg.labelAndValue(v[_pKey]);
          if (v.containsKey(_cKey))
            fieldsChangedValues['${Group.className}.${k}'][_cKey] =
                CommonFieldAndValuesMsg.labelAndValue(v[_cKey]);
        } else if (k == Group.leaderField) {
          fieldsChangedValues.putIfAbsent(
              '${Group.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewTextLeft,
            _fieldDescriptionKey: GroupFieldMsg.label(k)
          });

          if (v.containsKey(User.nameField) &&
              v[User.nameField].containsKey(_pKey))
            fieldsChangedValues['${Group.className}.${k}'][_pKey] =
            v[User.nameField][_pKey];
          if (v.containsKey(User.nameField) &&
              v[User.nameField].containsKey(_cKey))
            fieldsChangedValues['${Group.className}.${k}'][_cKey] =
            v[User.nameField][_cKey];

          // UserChangedValues().constructViewToFieldsChangedValues(fieldsChangedValues, v);

        } else if (k == Group.groupTypeField) {
          //TODO  GroupTypeChangedValues().constructViewToFieldsChangedValues(fieldsChangedValues, v, iPreviousCurrent);
        } else if (k == Group.superGroupField) {
          GroupChangedValues().constructViewToFieldsChangedValues(
              fieldsChangedValues, v);
        } else if (k == Group.membersField) {
          fieldsChangedValues.putIfAbsent(
              '${Group.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewTextLeft,
            _fieldDescriptionKey: GroupFieldMsg.label(k)
          });

          if (v.containsKey(_pKey) && v[_pKey] is List) {
            StringBuffer sb = new StringBuffer();
            v[_pKey].forEach((l) {
              if (sb.isNotEmpty) sb.write(', ');
              sb.write(l[User.nameField]);
            });
            fieldsChangedValues['${Group.className}.${k}'][_pKey] = sb.toString();
          }
          if (v.containsKey(_cKey) && v[_cKey] is List) {
            StringBuffer sb = new StringBuffer();
            v[_cKey].forEach((l) {
              if (sb.isNotEmpty) sb.write(', ');;
              sb.write(l[User.nameField]);
            });
            fieldsChangedValues['${Group.className}.${k}'][_cKey] = sb.toString();
          }
        }
        else if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
          fieldsChangedValues.putIfAbsent('${Group.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewTextLeft,
            _fieldDescriptionKey: GroupFieldMsg.label(k)});
          if (v.containsKey(_pKey))
            fieldsChangedValues['${Group.className}.${k}'][_pKey] =
            v[_pKey];
          if (v.containsKey(_cKey))
            fieldsChangedValues['${Group.className}.${k}'][_cKey] =
            v[_cKey];
        }
      }
    });
    return fieldsChangedValues;
  }

}


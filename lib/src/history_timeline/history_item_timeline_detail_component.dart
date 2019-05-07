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
import 'package:auge_server/model/general/group.dart';

import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/message/messages.dart';
import 'package:auge_web/message/field_messages.dart';

// Const to format html types
const _typeToViewTextLeft = '0';
const _typeToViewTextRight = '1';
const _typeToViewImageAvatar = '2';

// Const index to formated changed values
const _typeToViewKey = 't';
const _fieldDescriptionKey = 'd';
const _previousKey = 'p';
const _currentKey = 'c';

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
  final previousKey = _previousKey;
  final currentKey = _currentKey;

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
    if (objectClassName == 'User') {
      viewToChangedValues = UserChangedValues().getViewToChangedValues(changedValues);
    } else if (objectClassName == 'Group') {
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

  static const className = 'User';

  @override
  constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {
    changedValues?.forEach((k, v) {
      if (k != User.idField && k != User.versionField) {
        if (k == User.userProfileField) {
            UserProfileChangedValues().constructViewToFieldsChangedValues(
               fieldsChangedValues, v);
        } else if (k == User.passwordField) {
          fieldsChangedValues.putIfAbsent('${className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewTextLeft,
            _fieldDescriptionKey: UserFieldMsg.label(k)});
          if (v.containsKey(_previousKey)) fieldsChangedValues['${className}.${k}'][_previousKey] = '***';
          if (v.containsKey(_currentKey)) fieldsChangedValues['${className}.${k}'][_currentKey] = '***';
        } else if (v is Map && (v.containsKey(_previousKey) || v.containsKey(_currentKey))) {
          fieldsChangedValues.putIfAbsent('${className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewTextLeft,
            _fieldDescriptionKey: UserFieldMsg.label(k)});
          if (v.containsKey(_previousKey))
            fieldsChangedValues['${className}.${k}'][_previousKey] =
            v[_previousKey];
          if (v.containsKey(_currentKey))
            fieldsChangedValues['${className}.${k}'][_currentKey] =
            v[_currentKey];
        }
      }
    });
    return fieldsChangedValues;
  }
}

class UserProfileChangedValues extends BaseChangedValues {

  static const className = 'UserProfile';

  @override
  Map<String, Map<dynamic, dynamic>> constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {
    changedValues?.forEach((k, v) {
      if (k != User.idField) {
        if (k == UserProfile.idiomLocaleField) {
          fieldsChangedValues.putIfAbsent('${className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewTextLeft,
            _fieldDescriptionKey: UserProfileFieldMsg.label(k)});
          if (v.containsKey(_previousKey))
            fieldsChangedValues['${className}.${k}'][_previousKey] =
            UserProfileFieldMsg.valueLabel(v[_previousKey]);
          if (v.containsKey(_currentKey))
            fieldsChangedValues['${className}.${k}'][_currentKey] =
            UserProfileFieldMsg.valueLabel(v[_currentKey]);

        } else if (k == UserProfile.imageField) {
          fieldsChangedValues.putIfAbsent('${className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewImageAvatar,
            _fieldDescriptionKey: UserProfileFieldMsg.label(k)});
          if (v.containsKey(_previousKey)) fieldsChangedValues['${className}.${k}'][_previousKey] = v[_previousKey];
          if (v.containsKey(_currentKey)) fieldsChangedValues['${className}.${k}'][_currentKey] = v[_currentKey];
        }
        else if (v is Map && (v.containsKey(_previousKey) || v.containsKey(_currentKey))) {
          fieldsChangedValues.putIfAbsent('${className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewTextLeft,
            _fieldDescriptionKey: UserProfileFieldMsg.label(k)});
          if (v.containsKey(_previousKey))
            fieldsChangedValues['${className}.${k}'][_previousKey] =
            v[_previousKey];
          if (v.containsKey(_currentKey))
            fieldsChangedValues['${className}.${k}'][_currentKey] =
            v[_currentKey];
        }
      }
    });
    return fieldsChangedValues;
  }
}

/// GROUPS
class GroupChangedValues extends BaseChangedValues {

  static const className = 'Group';

  @override
  Map<String, Map<dynamic, dynamic>> constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {
    changedValues?.forEach((k, v) {
      if (k != Group.idField) {
        if (k == Group.activeField) {
          fieldsChangedValues.putIfAbsent(
              '${className}.${k}', () => {_typeToViewKey: _typeToViewTextLeft, _fieldDescriptionKey: GroupFieldMsg.label(k)});
          fieldsChangedValues['${className}.${k}'][_previousKey] = CommonFieldAndValuesMsg.labelAndValue(v[_previousKey]);
          fieldsChangedValues['${className}.${k}'][_currentKey] = CommonFieldAndValuesMsg.labelAndValue(v[_currentKey]);
        } else if (k == Group.leaderField) {
          fieldsChangedValues.putIfAbsent(
              '${className}.${k}', () => {_typeToViewKey: _typeToViewTextLeft, _fieldDescriptionKey: GroupFieldMsg.label(k)});
          UserChangedValues().constructViewToFieldsChangedValues(fieldsChangedValues, v);
        } else if (k == Group.groupTypeField) {
          //TODO  GroupTypeChangedValues().constructViewToFieldsChangedValues(fieldsChangedValues, v, iPreviousCurrent);
        } else if (k == Group.superGroupField) {
          GroupChangedValues().constructViewToFieldsChangedValues(fieldsChangedValues, v);
        } else if (k == Group.membersField && v is List && v.isNotEmpty) {
          v.forEach((v) => UserChangedValues().constructViewToFieldsChangedValues(
              fieldsChangedValues, v));
        } else if (v is Map && (v.containsKey(_previousKey) || v.containsKey(_currentKey))) {
          fieldsChangedValues.putIfAbsent('${className}.${k}', () => {
            _typeToViewKey: _typeToViewTextLeft,
            _fieldDescriptionKey: UserProfileFieldMsg.label(k)});
          if (v.containsKey(_previousKey))
            fieldsChangedValues['${className}.${k}'][_previousKey] =
            v[_previousKey];
          if (v.containsKey(_currentKey))
            fieldsChangedValues['${className}.${k}'][_currentKey] =
            v[_currentKey];
        }
      }
    });
    return fieldsChangedValues;
  }

}


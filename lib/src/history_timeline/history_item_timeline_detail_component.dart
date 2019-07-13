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
import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_server/model/objective/measure.dart';
import 'package:auge_server/model/initiative/initiative.dart';
import 'package:auge_server/model/initiative/stage.dart';
import 'package:auge_server/model/initiative/state.dart';
import 'package:auge_server/model/initiative/work_item.dart';

import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/message/messages.dart';
import 'package:auge_web/message/model_messages.dart';

// Const to format html types
const _typeToViewText = '0';
const _typeToViewImageAvatar = '1';
const _typeToViewDateTime = '2';

// Const index to formated changed values
const _typeToViewKey = 't';
const _fieldDescriptionKey = 'd';
const _pKey = 'p';
const _cKey = 'c';

@Component(
    selector: 'auge-history-item-timeline-detail',
    providers: const [],
    templateUrl: 'history_item_timeline_detail_component.html',
    styleUrls: const [
    'history_item_timeline_detail_component.css'
    ],
    directives: const [
      coreDirectives,
      MaterialExpansionPanel,
      MaterialButtonComponent,
      MaterialIconComponent,
      DeferredContentDirective,
    ],
    pipes: const [commonPipes])
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

  final typeToViewText =  _typeToViewText;
  final typeToViewImageAvatar = _typeToViewImageAvatar;
  final typeToViewDateTime = _typeToViewDateTime;

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

  // Format data type to web presentation
  Map<String, Map<dynamic, dynamic>> getViewToChangedValues(String objectClassName, Map<String, dynamic> changedValues) {

    Map<String, Map<dynamic, dynamic>> fieldsChangedValues = {};
    if (objectClassName == UserProfileOrganization.className) {
      UserProfileOrganizationChangedValues.constructViewToFieldsChangedValues(fieldsChangedValues, changedValues);
    } else if (objectClassName == Group.className) {
      GroupChangedValues.constructViewToFieldsChangedValues(fieldsChangedValues, changedValues);
    } else if (objectClassName == Objective.className) {
      ObjectiveChangedValues.constructViewToFieldsChangedValues(fieldsChangedValues, changedValues);
    } else if (objectClassName == Measure.className) {
      MeasureChangedValues.constructViewToFieldsChangedValues(fieldsChangedValues, changedValues);
    } else if (objectClassName == Initiative.className) {
      InitiativeChangedValues.constructViewToFieldsChangedValues(fieldsChangedValues, changedValues);
    } else if (objectClassName == Stage.className) {
      StageChangedValues.constructViewToFieldsChangedValues(fieldsChangedValues, changedValues);
    } else if (objectClassName == WorkItem.className) {
      WorkItemChangedValues.constructViewToFieldsChangedValues(fieldsChangedValues, changedValues);
    }
    return fieldsChangedValues;
  }
}

/*
class BaseChangedValues {
  Map<String, Map<dynamic, dynamic>> getViewToChangedValues(Map<String, dynamic> changedValues) {
    Map<String, Map<dynamic, dynamic>> _fieldsChangedValues = {};

    constructViewToFieldsChangedValues(_fieldsChangedValues, changedValues);

    return _fieldsChangedValues;
  }

  void constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {}
}
*/

/// USERS
class UserChangedValues {

  static void constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {
    changedValues?.forEach((k, v) {
      if (k != User.idField && k != User.versionField) {
        if (k == User.userProfileField) {
            UserProfileChangedValues.constructViewToFieldsChangedValues(
               fieldsChangedValues, v);
        } else if (k == UserProfile.passwordField) {
          fieldsChangedValues.putIfAbsent('${User.className}.${k}', () =>
          { _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${User.className}.${k}')});
          if (v.containsKey(_pKey)) fieldsChangedValues['${User.className}.${k}'][_pKey] = '***';
          if (v.containsKey(_cKey)) fieldsChangedValues['${User.className}.${k}'][_cKey] = '***';
        } else if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
          fieldsChangedValues.putIfAbsent('${User.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${User.className}.${k}')});

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
  }
}

class UserProfileChangedValues  {

  static void constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {
    changedValues?.forEach((k, v) {
      if (k == UserProfile.idiomLocaleField) {
        fieldsChangedValues.putIfAbsent('${UserProfile.className}.${k}', () =>
        {
          _typeToViewKey: _typeToViewText,
          _fieldDescriptionKey: FieldMsg.label('${UserProfile.className}.${k}')});
        if (v.containsKey(_pKey))
          fieldsChangedValues['${UserProfile.className}.${k}'][_pKey] =
          UserProfileValueMsg.label(v[_pKey]);
        if (v.containsKey(_cKey))
          fieldsChangedValues['${UserProfile.className}.${k}'][_cKey] =
           UserProfileValueMsg.label(v[_cKey]);

      } else if (k == UserProfile.imageField) {
        fieldsChangedValues.putIfAbsent('${UserProfile.className}.${k}', () =>
        {
          _typeToViewKey: _typeToViewImageAvatar,
          _fieldDescriptionKey: FieldMsg.label('${UserProfile.className}.${k}')});
        if (v.containsKey(_pKey)) fieldsChangedValues['${UserProfile.className}.${k}'][_pKey] = v[_pKey];
        if (v.containsKey(_cKey)) fieldsChangedValues['${UserProfile.className}.${k}'][_cKey] = v[_cKey];
      }
      else if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
        fieldsChangedValues.putIfAbsent('${UserProfile.className}.${k}', () =>
        {
          _typeToViewKey: _typeToViewText,
          _fieldDescriptionKey: FieldMsg.label('${UserProfile.className}.${k}')});
        if (v.containsKey(_pKey))
          fieldsChangedValues['${UserProfile.className}.${k}'][_pKey] =
          v[_pKey];
        if (v.containsKey(_cKey))
          fieldsChangedValues['${UserProfile.className}.${k}'][_cKey] =
          v[_cKey];
      }
    });
  }
}

class UserProfileOrganizationChangedValues  {

  static void constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {
    changedValues?.forEach((k, v) {
      if (k != UserProfileOrganization.idField && k != UserProfileOrganization.versionField) {
        if (k == UserProfileOrganization.userField) {
          UserChangedValues.constructViewToFieldsChangedValues(
              fieldsChangedValues, v);
        } else if (k == UserProfileOrganization.organizationField) {
         // OrganizationChangedValues().constructViewToFieldsChangedValues(
         //     fieldsChangedValues, v);
        }
        else if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
          fieldsChangedValues.putIfAbsent('${UserProfileOrganization.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${UserProfileOrganization.className}.${k}')});
          if (v.containsKey(_pKey))
            fieldsChangedValues['${UserProfileOrganization.className}.${k}'][_pKey] =
            v[_pKey];
          if (v.containsKey(_cKey))
            fieldsChangedValues['${UserProfileOrganization.className}.${k}'][_cKey] =
            v[_cKey];
        }
      }
    });
  }
}

/// GROUPS
class GroupChangedValues {

  static void constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {
    changedValues?.forEach((k, v) {
      if (k != Group.idField && k != Group.versionField) {
        if (k == Group.activeField) {
          fieldsChangedValues.putIfAbsent(
              '${Group.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${Group.className}.${k}')
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
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${Group.className}.${k}')
          });

          if (v.containsKey(User.nameField) &&
              v[User.nameField].containsKey(_pKey))
            fieldsChangedValues['${Group.className}.${k}'][_pKey] =
            v[User.nameField][_pKey];
          if (v.containsKey(User.nameField) &&
              v[User.nameField].containsKey(_cKey))
            fieldsChangedValues['${Group.className}.${k}'][_cKey] =
            v[User.nameField][_cKey];


        } else if (k == Group.superGroupField ) {

          fieldsChangedValues.putIfAbsent(
              '${Group.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${Group.className}.${k}')
          });

          if (v.containsKey(Group.nameField) &&
              v[Group.nameField].containsKey(_pKey))
            fieldsChangedValues['${Group.className}.${k}'][_pKey] =
            v[Group.nameField][_pKey];
          if (v.containsKey(Group.nameField) &&
              v[Group.nameField].containsKey(_cKey))
            fieldsChangedValues['${Group.className}.${k}'][_cKey] =
            v[Group.nameField][_cKey];

        } else if (k == Group.groupTypeField) {

          GroupTypeChangedValues.constructViewToFieldsChangedValues(
              fieldsChangedValues, {Group.groupTypeField: v});

        } else if (k == Group.membersField) {
          fieldsChangedValues.putIfAbsent(
              '${Group.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${Group.className}.${k}')
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
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${Group.className}.${k}')});
          if (v.containsKey(_pKey))
            fieldsChangedValues['${Group.className}.${k}'][_pKey] =
            v[_pKey];
          if (v.containsKey(_cKey))
            fieldsChangedValues['${Group.className}.${k}'][_cKey] =
            v[_cKey];
        }
      }
    });
  }
}

class GroupTypeChangedValues {

  static void constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {
    changedValues?.forEach((k, v) {
     // if (k != Group.idField && k != Group.versionField) {
      if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
        fieldsChangedValues.putIfAbsent('${GroupType.className}.${k}', () =>
        {
          _typeToViewKey: _typeToViewText,
          _fieldDescriptionKey: FieldMsg.label(k)});
        if (v.containsKey(_pKey))
          fieldsChangedValues['${GroupType.className}.${k}'][_pKey] =
          v[_pKey];
        if (v.containsKey(_cKey))
          fieldsChangedValues['${GroupType.className}.${k}'][_cKey] =
          v[_cKey];
      }
     // }
    });
  }
}

//OBJECTIVE
class ObjectiveChangedValues {

  static void constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {

    changedValues?.forEach((k, v) {
      if (k != Objective.idField && k != Objective.versionField) {
        if (k == Objective.startDateField || k == Objective.endDateField) {
          fieldsChangedValues.putIfAbsent('${Objective.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewDateTime,
            _fieldDescriptionKey: FieldMsg.label('${Objective.className}.${k}')});
          if (v.containsKey(_pKey))
            fieldsChangedValues['${Objective.className}.${k}'][_pKey] = DateTime.parse(v[_pKey]);
          if (v.containsKey(_cKey))
            fieldsChangedValues['${Objective.className}.${k}'][_cKey] = DateTime.parse(v[_cKey]);

        } else if (k == Objective.leaderField) {
          fieldsChangedValues.putIfAbsent(
              '${Objective.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${Objective.className}.${k}')
          });

          if (v.containsKey(User.nameField) &&
              v[User.nameField].containsKey(_pKey))
            fieldsChangedValues['${Objective.className}.${k}'][_pKey] =
            v[User.nameField][_pKey];
          if (v.containsKey(User.nameField) &&
              v[User.nameField].containsKey(_cKey))
            fieldsChangedValues['${Objective.className}.${k}'][_cKey] =
            v[User.nameField][_cKey];

        } else if (k == Objective.groupField ) {

          fieldsChangedValues.putIfAbsent(
              '${Objective.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${Objective.className}.${k}')
          });

          if (v.containsKey(Group.nameField) &&
              v[Group.nameField].containsKey(_pKey))
            fieldsChangedValues['${Objective.className}.${k}'][_pKey] =
            v[Group.nameField][_pKey];
          if (v.containsKey(Group.nameField) &&
              v[Group.nameField].containsKey(_cKey))
            fieldsChangedValues['${Objective.className}.${k}'][_cKey] =
            v[Group.nameField][_cKey];

        } else if (k == Objective.alignedToField ) {

          fieldsChangedValues.putIfAbsent(
              '${Objective.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${Objective.className}.${k}')
          });

          if (v.containsKey(Objective.nameField) &&
              v[Objective.nameField].containsKey(_pKey))
            fieldsChangedValues['${Objective.className}.${k}'][_pKey] =
            v[Objective.nameField][_pKey];
          if (v.containsKey(Objective.nameField) &&
              v[Objective.nameField].containsKey(_cKey))
            fieldsChangedValues['${Objective.className}.${k}'][_cKey] =
            v[Objective.nameField][_cKey];

        } else if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
          fieldsChangedValues.putIfAbsent('${Objective.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${Objective.className}.${k}')});
          if (v.containsKey(_pKey))
            fieldsChangedValues['${Objective.className}.${k}'][_pKey] =
            v[_pKey];
          if (v.containsKey(_cKey))
            fieldsChangedValues['${Objective.className}.${k}'][_cKey] =
            v[_cKey];
        }
      }
    });
  }
}

// MEASURE UNIT
class MeasureUnitChangedValues {

  static void constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {
    changedValues?.forEach((k, v) {
      // if (k != Group.idField && k != Group.versionField) {
      if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
        fieldsChangedValues.putIfAbsent('${MeasureUnit.className}.${k}', () =>
        {
          _typeToViewKey: _typeToViewText,
          _fieldDescriptionKey: FieldMsg.label(k)});
        if (v.containsKey(_pKey))
          fieldsChangedValues['${MeasureUnit.className}.${k}'][_pKey] =
          v[_pKey];
        if (v.containsKey(_cKey))
          fieldsChangedValues['${MeasureUnit.className}.${k}'][_cKey] =
          v[_cKey];
      }
      // }
    });
  }
}


//MEASURE
class MeasureChangedValues {

  static void constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {

    changedValues?.forEach((k, v) {
      if (k != Measure.idField && k != Measure.versionField) {
        if (k == Measure.measureUnitField) {
          fieldsChangedValues.putIfAbsent(
              '${Measure.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${Measure.className}.${k}')
          });

          if (v.containsKey(MeasureUnit.nameField) &&
              v[MeasureUnit.nameField].containsKey(_pKey))
            fieldsChangedValues['${Measure.className}.${k}'][_pKey] =
            v[MeasureUnit.nameField][_pKey];
          if (v.containsKey(MeasureUnit.nameField) &&
              v[MeasureUnit.nameField].containsKey(_cKey))
            fieldsChangedValues['${Measure.className}.${k}'][_cKey] =
            v[MeasureUnit.nameField][_cKey];
        }
        else if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
          fieldsChangedValues.putIfAbsent('${Measure.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${Measure.className}.${k}')});
          if (v.containsKey(_pKey))
            fieldsChangedValues['${Measure.className}.${k}'][_pKey] =
            v[_pKey];
          if (v.containsKey(_cKey))
            fieldsChangedValues['${Measure.className}.${k}'][_cKey] =
            v[_cKey];
        }
      }
    });
  }
}

//INITIATIVE
class InitiativeChangedValues {

  static void constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {

    changedValues?.forEach((k, v) {

    if (k != Initiative.idField && k != Initiative.versionField) {
      if (k == Initiative.stagesField) {
        fieldsChangedValues.putIfAbsent(
            '${Initiative.className}.${k}', () =>
        {
          _typeToViewKey: _typeToViewText,
          _fieldDescriptionKey: FieldMsg.label('${Initiative.className}.${k}')
        });

        if (v.containsKey(_pKey) && v[_pKey] is List) {
          StringBuffer sb = new StringBuffer();
          v[_pKey].forEach((l) {
            if (sb.isNotEmpty) sb.write(', ');
            sb.write(l[Stage.nameField]);
          });
          fieldsChangedValues['${Initiative.className}.${k}'][_pKey] =
              sb.toString();
        }
        if (v.containsKey(_cKey) && v[_cKey] is List) {
          StringBuffer sb = new StringBuffer();
          v[_cKey].forEach((l) {
            if (sb.isNotEmpty) sb.write(', ');;
            sb.write(l[Stage.nameField]);
          });
          fieldsChangedValues['${Initiative.className}.${k}'][_cKey] =
              sb.toString();
        }
      } else if (k == Initiative.groupField) {

        fieldsChangedValues.putIfAbsent('${Initiative.className}.${k}', () =>
        {
          _typeToViewKey: _typeToViewText,
          _fieldDescriptionKey: FieldMsg.label('${Initiative.className}.${k}')});

        if (v.containsKey(Group.nameField) && v[Group.nameField].containsKey(_pKey))
          fieldsChangedValues['${Initiative.className}.${k}'][_pKey] = v[Group.nameField][_pKey];
        if (v.containsKey(Group.nameField) && v[Group.nameField].containsKey(_cKey))
          fieldsChangedValues['${Initiative.className}.${k}'][_cKey] = v[Group.nameField][_cKey];

      } else if (k == Initiative.leaderField) {

        fieldsChangedValues.putIfAbsent('${Initiative.className}.${k}', () =>
        {
          _typeToViewKey: _typeToViewText,
          _fieldDescriptionKey: FieldMsg.label('${Initiative.className}.${k}')});

        if (v.containsKey(User.nameField) && v[User.nameField].containsKey(_pKey))
          fieldsChangedValues['${Initiative.className}.${k}'][_pKey] = v[User.nameField][_pKey];
        if (v.containsKey(User.nameField) && v[User.nameField].containsKey(_cKey))
          fieldsChangedValues['${Initiative.className}.${k}'][_cKey] = v[User.nameField][_cKey];

      } else if (k == Initiative.objectiveField) {

        fieldsChangedValues.putIfAbsent('${Initiative.className}.${k}', () =>
        {
          _typeToViewKey: _typeToViewText,
          _fieldDescriptionKey: FieldMsg.label('${Initiative.className}.${k}')});

        if (v.containsKey(Objective.nameField) && v[Objective.nameField].containsKey(_pKey))
          fieldsChangedValues['${Initiative.className}.${k}'][_pKey] = v[User.nameField][_pKey];
        if (v.containsKey(Objective.nameField) && v[Objective.nameField].containsKey(_cKey))
          fieldsChangedValues['${Initiative.className}.${k}'][_cKey] = v[Objective.nameField][_cKey];

      } else if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
          fieldsChangedValues.putIfAbsent('${Initiative.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${Initiative.className}.${k}')});
          if (v.containsKey(_pKey))
            fieldsChangedValues['${Initiative.className}.${k}'][_pKey] =
            v[_pKey];
          if (v.containsKey(_cKey))
            fieldsChangedValues['${Initiative.className}.${k}'][_cKey] =
            v[_cKey];
        }
      }
    });
  }
}

//STAGE
class StageChangedValues {

  static void constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {

    changedValues?.forEach((k, v) {
      if (k != Stage.idField && k != Stage.versionField && k != Stage.indexField) {
        if (k == Stage.stateField) {
          fieldsChangedValues.putIfAbsent(
              '${Stage.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${Stage.className}.${k}')
          });

          if (v.containsKey(State.nameField) &&
              v[State.nameField].containsKey(_pKey))
            fieldsChangedValues['${Stage.className}.${k}'][_pKey] =
            v[State.nameField][_pKey];
          if (v.containsKey(MeasureUnit.nameField) &&
              v[State.nameField].containsKey(_cKey))
            fieldsChangedValues['${Stage.className}.${k}'][_cKey] =
            v[State.nameField][_cKey];
        }
        else if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
          fieldsChangedValues.putIfAbsent('${Stage.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${Stage.className}.${k}')});
          if (v.containsKey(_pKey))
            fieldsChangedValues['${Stage.className}.${k}'][_pKey] =
            v[_pKey];
          if (v.containsKey(_cKey))
            fieldsChangedValues['${Stage.className}.${k}'][_cKey] =
            v[_cKey];
        }
      }
    });
  }
}

//WORKITEM
class WorkItemChangedValues {

  static void constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {

    changedValues?.forEach((k, v) {
      if (k != WorkItem.idField && k != WorkItem.versionField) {
        if (k == WorkItem.stageField) {
          fieldsChangedValues.putIfAbsent(
              '${WorkItem.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${WorkItem.className}.${k}')
          });

          if (v.containsKey(Stage.nameField) &&
              v[Stage.nameField].containsKey(_pKey))
            fieldsChangedValues['${WorkItem.className}.${k}'][_pKey] =
            v[Stage.nameField][_pKey];
          if (v.containsKey(Stage.nameField) &&
              v[Stage.nameField].containsKey(_cKey))
            fieldsChangedValues['${WorkItem.className}.${k}'][_cKey] =
            v[Stage.nameField][_cKey];
        } else if (k == WorkItem.assignedToField) {
          fieldsChangedValues.putIfAbsent(
              '${WorkItem.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${WorkItem.className}.${k}')
          });

          if (v.containsKey(_pKey) && v[_pKey] is List) {
            StringBuffer sb = new StringBuffer();
            v[_pKey].forEach((l) {
              if (sb.isNotEmpty) sb.write(', ');
              sb.write(l[User.nameField]);
            });
            fieldsChangedValues['${WorkItem.className}.${k}'][_pKey] = sb.toString();
          }
          if (v.containsKey(_cKey) && v[_cKey] is List) {
            StringBuffer sb = new StringBuffer();
            v[_cKey].forEach((l) {
              if (sb.isNotEmpty) sb.write(', ');;
              sb.write(l[User.nameField]);
            });
            fieldsChangedValues['${WorkItem.className}.${k}'][_cKey] = sb.toString();
          }
        } else if (k == WorkItem.checkItemsField) {
          fieldsChangedValues.putIfAbsent(
              '${WorkItem.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${WorkItem.className}.${k}')
          });

          if (v.containsKey(_pKey) && v[_pKey] is List) {
            StringBuffer sb = new StringBuffer();
            v[_pKey].forEach((l) {
              if (sb.isNotEmpty) sb.write(', ');
              sb.write(l[WorkItemCheckItem.nameField]);
            });
            fieldsChangedValues['${WorkItem.className}.${k}'][_pKey] = sb.toString();
          }
          if (v.containsKey(_cKey) && v[_cKey] is List) {
            StringBuffer sb = new StringBuffer();
            v[_cKey].forEach((l) {
              if (sb.isNotEmpty) sb.write(', ');;
              sb.write(l[WorkItemCheckItem.nameField]);
            });
            fieldsChangedValues['${WorkItem.className}.${k}'][_cKey] = sb.toString();
          }
        } else if (k == WorkItem.completedField) {
          fieldsChangedValues.putIfAbsent('${WorkItem.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${WorkItem.className}.${k}')});
          if (v.containsKey(_pKey))
            fieldsChangedValues['${WorkItem.className}.${k}'][_pKey] = '${v[_pKey]}%';
          if (v.containsKey(_cKey))
            fieldsChangedValues['${WorkItem.className}.${k}'][_cKey] = '${v[_cKey]}%';
        } else if (k == WorkItem.dueDateField) {
          fieldsChangedValues.putIfAbsent('${WorkItem.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewDateTime,
            _fieldDescriptionKey: FieldMsg.label('${WorkItem.className}.${k}')});
          if (v.containsKey(_pKey))
            fieldsChangedValues['${WorkItem.className}.${k}'][_pKey] = DateTime.parse(v[_pKey]);
          if (v.containsKey(_cKey))
            fieldsChangedValues['${WorkItem.className}.${k}'][_cKey] = DateTime.parse(v[_cKey]);
        } else if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
          fieldsChangedValues.putIfAbsent('${WorkItem.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${WorkItem.className}.${k}')});
          if (v.containsKey(_pKey))
            fieldsChangedValues['${WorkItem.className}.${k}'][_pKey] =
            v[_pKey];
          if (v.containsKey(_cKey))
            fieldsChangedValues['${WorkItem.className}.${k}'][_cKey] =
            v[_cKey];
        }
      }
    });
  }
}
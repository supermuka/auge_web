// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:intl/intl.dart';
import 'package:intl/date_symbol_data_local.dart';

import 'package:angular/angular.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/content/deferred_content.dart';

import 'package:auge_server/domain/general/user.dart';
import 'package:auge_server/domain/general/user_access.dart';
import 'package:auge_server/domain/general/group.dart';
import 'package:auge_server/domain/objective/objective.dart';
import 'package:auge_server/domain/objective/measure.dart';
import 'package:auge_server/domain/work/work.dart';
import 'package:auge_server/domain/work/work_stage.dart';
import 'package:auge_server/domain/work/work_item.dart';

import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_server/shared/message/messages.dart';
import 'package:auge_server/shared/message/domain_messages.dart';

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

  static final String timelineLabel = TimelineItemdMsg.label(TimelineItemdMsg.timelineLabel);
  static final String valueLabel = TimelineItemdMsg.label(TimelineItemdMsg.valueLabel);
  static final String changedFromLabel =  TimelineItemdMsg.label(TimelineItemdMsg.changedFromLabel);
  static final String wasLabel = TimelineItemdMsg.label(TimelineItemdMsg.wasLabel);

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
    if (objectClassName == UserAccess.className) {
      UserAccessChangedValues.constructViewToFieldsChangedValues(fieldsChangedValues, changedValues);
    } else if (objectClassName == Group.className) {
      GroupChangedValues.constructViewToFieldsChangedValues(fieldsChangedValues, changedValues);
    } else if (objectClassName == Objective.className) {
      ObjectiveChangedValues.constructViewToFieldsChangedValues(fieldsChangedValues, changedValues);
    } else if (objectClassName == Measure.className) {
      MeasureChangedValues.constructViewToFieldsChangedValues(fieldsChangedValues, changedValues);
    } else if (objectClassName == MeasureProgress.className) {
      MeasureProgressChangedValues.constructViewToFieldsChangedValues(fieldsChangedValues, changedValues);
    } else if (objectClassName == Work.className) {
      WorkChangedValues.constructViewToFieldsChangedValues(fieldsChangedValues, changedValues);
    } else if (objectClassName == WorkStage.className) {
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
     /*   } else if (k == UserProfile.passwordField) {
          fieldsChangedValues.putIfAbsent('${User.className}.${k}', () =>
          { _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: FieldMsg.label('${User.className}.${k}')});
          if (v.containsKey(_pKey)) fieldsChangedValues['${User.className}.${k}'][_pKey] = '***';
          if (v.containsKey(_cKey)) fieldsChangedValues['${User.className}.${k}'][_cKey] = '***';*/
        } else if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
          fieldsChangedValues.putIfAbsent('${User.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: UserDomainMsg.fieldLabel(k)});

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
          _fieldDescriptionKey: UserProfileDomainMsg.fieldLabel(k)});
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
          _fieldDescriptionKey: UserProfileDomainMsg.fieldLabel(k)});
        if (v.containsKey(_pKey)) fieldsChangedValues['${UserProfile.className}.${k}'][_pKey] = v[_pKey];
        if (v.containsKey(_cKey)) fieldsChangedValues['${UserProfile.className}.${k}'][_cKey] = v[_cKey];
      }
      else if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
        fieldsChangedValues.putIfAbsent('${UserProfile.className}.${k}', () =>
        {
          _typeToViewKey: _typeToViewText,
          _fieldDescriptionKey: UserProfileDomainMsg.fieldLabel(k)});
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

class UserAccessChangedValues  {

  static void constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {
    changedValues?.forEach((k, v) {
      if (k != UserAccess.idField && k != UserAccess.versionField) {
        if (k == UserAccess.userField) {
          UserChangedValues.constructViewToFieldsChangedValues(
              fieldsChangedValues, v);
        } else if (k == UserAccess.organizationField) {
         // OrganizationChangedValues().constructViewToFieldsChangedValues(
         //     fieldsChangedValues, v);
        }
        else if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
          fieldsChangedValues.putIfAbsent('${UserAccess.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: UserAccessDomainMsg.fieldLabel(k)});
          if (v.containsKey(_pKey))
            fieldsChangedValues['${UserAccess.className}.${k}'][_pKey] =
            v[_pKey];
          if (v.containsKey(_cKey))
            fieldsChangedValues['${UserAccess.className}.${k}'][_cKey] =
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
        if (k == Group.inactiveField) {
          fieldsChangedValues.putIfAbsent(
              '${Group.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: GroupDomainMsg.fieldLabel(k)
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
            _fieldDescriptionKey: GroupDomainMsg.fieldLabel(k)
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
            _fieldDescriptionKey: GroupDomainMsg.fieldLabel(k)
          });

          if (v.containsKey(Group.nameField) &&
              v[Group.nameField].containsKey(_pKey))
            fieldsChangedValues['${Group.className}.${k}'][_pKey] =
            v[Group.nameField][_pKey];
          if (v.containsKey(Group.nameField) &&
              v[Group.nameField].containsKey(_cKey))
            fieldsChangedValues['${Group.className}.${k}'][_cKey] =
            v[Group.nameField][_cKey];

        } else if (k == Group.membersField) {
          fieldsChangedValues.putIfAbsent(
              '${Group.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: GroupDomainMsg.fieldLabel(k)
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
            _fieldDescriptionKey: GroupDomainMsg.fieldLabel(k)});
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

//OBJECTIVE
class ObjectiveChangedValues {

  static void constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {

    changedValues?.forEach((k, v) {
      if (k != Objective.idField && k != Objective.versionField) {
        if (k == Objective.startDateField || k == Objective.endDateField) {
          fieldsChangedValues.putIfAbsent('${Objective.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewDateTime,
            _fieldDescriptionKey: ObjectiveDomainMsg.fieldLabel(k)});
          if (v.containsKey(_pKey))
            fieldsChangedValues['${Objective.className}.${k}'][_pKey] = DateTime.parse(v[_pKey]);
          if (v.containsKey(_cKey))
            fieldsChangedValues['${Objective.className}.${k}'][_cKey] = DateTime.parse(v[_cKey]);

        } else if (k == Objective.leaderField) {
          fieldsChangedValues.putIfAbsent(
              '${Objective.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: ObjectiveDomainMsg.fieldLabel(k)
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
            _fieldDescriptionKey: ObjectiveDomainMsg.fieldLabel(k)
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
            _fieldDescriptionKey: ObjectiveDomainMsg.fieldLabel(k)
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
            _fieldDescriptionKey: ObjectiveDomainMsg.fieldLabel(k)});
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
          _fieldDescriptionKey: MeasureUnitDomainMsg.fieldLabel(k)});
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
            _fieldDescriptionKey: MeasureDomainMsg.fieldLabel(k)
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
            _fieldDescriptionKey: MeasureDomainMsg.fieldLabel(k)});
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

//MEASURE PROGRESS
class MeasureProgressChangedValues {

  static void constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {

    changedValues?.forEach((k, v) {
      if (k != MeasureProgress.idField && k != MeasureProgress.versionField) {
        if (k == MeasureProgress.dateField) {
          fieldsChangedValues.putIfAbsent('${MeasureProgress.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewDateTime,
            _fieldDescriptionKey: MeasureProgressDomainMsg.fieldLabel(k)});
          if (v.containsKey(_pKey))
            fieldsChangedValues['${MeasureProgress.className}.${k}'][_pKey] = DateTime.parse(v[_pKey]);
          if (v.containsKey(_cKey))
            fieldsChangedValues['${MeasureProgress.className}.${k}'][_cKey] = DateTime.parse(v[_cKey]);

        } else if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
          fieldsChangedValues.putIfAbsent('${MeasureProgress.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: MeasureProgressDomainMsg.fieldLabel(k)});
          if (v.containsKey(_pKey))
            fieldsChangedValues['${MeasureProgress.className}.${k}'][_pKey] =
            v[_pKey];
          if (v.containsKey(_cKey))
            fieldsChangedValues['${MeasureProgress.className}.${k}'][_cKey] =
            v[_cKey];
        }
      }
    });
  }
}

//WORK
class WorkChangedValues {

  static void constructViewToFieldsChangedValues(Map<String, Map<dynamic, dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues) {

    changedValues?.forEach((k, v) {

    if (k != Work.idField && k != Work.versionField) {
      if (k == Work.workStagesField) {
        fieldsChangedValues.putIfAbsent(
            '${Work.className}.${k}', () =>
        {
          _typeToViewKey: _typeToViewText,
          _fieldDescriptionKey: WorkDomainMsg.fieldLabel(k)
        });

        if (v.containsKey(_pKey) && v[_pKey] is List) {
          StringBuffer sb = new StringBuffer();
          v[_pKey].forEach((l) {
            if (sb.isNotEmpty) sb.write(', ');
            sb.write(l[WorkStage.nameField]);
          });
          fieldsChangedValues['${Work.className}.${k}'][_pKey] =
              sb.toString();
        }
        if (v.containsKey(_cKey) && v[_cKey] is List) {
          StringBuffer sb = new StringBuffer();
          v[_cKey].forEach((l) {
            if (sb.isNotEmpty) sb.write(', ');;
            sb.write(l[WorkStage.nameField]);
          });
          fieldsChangedValues['${Work.className}.${k}'][_cKey] =
              sb.toString();
        }
      } else if (k == Work.groupField) {

        fieldsChangedValues.putIfAbsent('${Work.className}.${k}', () =>
        {
          _typeToViewKey: _typeToViewText,
          _fieldDescriptionKey: WorkDomainMsg.fieldLabel(k)});

        if (v.containsKey(Group.nameField) && v[Group.nameField].containsKey(_pKey))
          fieldsChangedValues['${Work.className}.${k}'][_pKey] = v[Group.nameField][_pKey];
        if (v.containsKey(Group.nameField) && v[Group.nameField].containsKey(_cKey))
          fieldsChangedValues['${Work.className}.${k}'][_cKey] = v[Group.nameField][_cKey];

      } else if (k == Work.leaderField) {

        fieldsChangedValues.putIfAbsent('${Work.className}.${k}', () =>
        {
          _typeToViewKey: _typeToViewText,
          _fieldDescriptionKey: WorkDomainMsg.fieldLabel(k)});

        if (v.containsKey(User.nameField) && v[User.nameField].containsKey(_pKey))
          fieldsChangedValues['${Work.className}.${k}'][_pKey] = v[User.nameField][_pKey];
        if (v.containsKey(User.nameField) && v[User.nameField].containsKey(_cKey))
          fieldsChangedValues['${Work.className}.${k}'][_cKey] = v[User.nameField][_cKey];

      } else if (k == Work.objectiveField) {

        fieldsChangedValues.putIfAbsent('${Work.className}.${k}', () =>
        {
          _typeToViewKey: _typeToViewText,
          _fieldDescriptionKey: WorkDomainMsg.fieldLabel(k)});

        if (v.containsKey(Objective.nameField) && v[Objective.nameField].containsKey(_pKey))
          fieldsChangedValues['${Work.className}.${k}'][_pKey] = v[User.nameField][_pKey];
        if (v.containsKey(Objective.nameField) && v[Objective.nameField].containsKey(_cKey))
          fieldsChangedValues['${Work.className}.${k}'][_cKey] = v[Objective.nameField][_cKey];

      } else if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
          fieldsChangedValues.putIfAbsent('${Work.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: WorkDomainMsg.fieldLabel(k)});
          if (v.containsKey(_pKey))
            fieldsChangedValues['${Work.className}.${k}'][_pKey] =
            v[_pKey];
          if (v.containsKey(_cKey))
            fieldsChangedValues['${Work.className}.${k}'][_cKey] =
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
      if (k != WorkStage.idField && k != WorkStage.versionField && k != WorkStage.indexField) {
       if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
          fieldsChangedValues.putIfAbsent('${WorkStage.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: WorkStageDomainMsg.fieldLabel(k)});
          if (v.containsKey(_pKey))
            fieldsChangedValues['${WorkStage.className}.${k}'][_pKey] =
            v[_pKey];
          if (v.containsKey(_cKey))
            fieldsChangedValues['${WorkStage.className}.${k}'][_cKey] =
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
        if (k == WorkItem.workStageField) {
          fieldsChangedValues.putIfAbsent(
              '${WorkItem.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: WorkItemDomainMsg.fieldLabel(k)
          });

          if (v.containsKey(WorkStage.nameField) &&
              v[WorkStage.nameField].containsKey(_pKey))
            fieldsChangedValues['${WorkItem.className}.${k}'][_pKey] =
            v[WorkStage.nameField][_pKey];
          if (v.containsKey(WorkStage.nameField) &&
              v[WorkStage.nameField].containsKey(_cKey))
            fieldsChangedValues['${WorkItem.className}.${k}'][_cKey] =
            v[WorkStage.nameField][_cKey];
        } else if (k == WorkItem.assignedToField) {
          fieldsChangedValues.putIfAbsent(
              '${WorkItem.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: WorkItemDomainMsg.fieldLabel(k)
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
            _fieldDescriptionKey: WorkItemDomainMsg.fieldLabel(k)
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
            _fieldDescriptionKey: WorkItemDomainMsg.fieldLabel(k)});
          if (v.containsKey(_pKey))
            fieldsChangedValues['${WorkItem.className}.${k}'][_pKey] = '${v[_pKey]}%';
          if (v.containsKey(_cKey))
            fieldsChangedValues['${WorkItem.className}.${k}'][_cKey] = '${v[_cKey]}%';
        } else if (k == WorkItem.dueDateField) {
          fieldsChangedValues.putIfAbsent('${WorkItem.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewDateTime,
            _fieldDescriptionKey: WorkItemDomainMsg.fieldLabel(k)});
          if (v.containsKey(_pKey))
            fieldsChangedValues['${WorkItem.className}.${k}'][_pKey] = DateTime.parse(v[_pKey]);
          if (v.containsKey(_cKey))
            fieldsChangedValues['${WorkItem.className}.${k}'][_cKey] = DateTime.parse(v[_cKey]);
        } else if (v is Map && (v.containsKey(_pKey) || v.containsKey(_cKey))) {
          fieldsChangedValues.putIfAbsent('${WorkItem.className}.${k}', () =>
          {
            _typeToViewKey: _typeToViewText,
            _fieldDescriptionKey: WorkItemDomainMsg.fieldLabel(k)});
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
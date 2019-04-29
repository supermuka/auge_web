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

import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/message/messages.dart';
import 'package:auge_web/message/field_messages.dart';

// Const to format html types
const _typeToViewTextLeft = 0;
const _typeToViewTextRight = 1;
const _typeToViewImageAvatar = 2;

// Const index to formated changed values
const _iTypeToView = 0;
const _iFieldDescription = 1;
const _iChangedValuesPrevious = 2;
const _iChangedValuesCurrent = 3;

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
  dynamic changedValuesPrevious;

  @Input()
  dynamic changedValuesCurrent;


  // List with String representation, formated when necessary, to present on web.
  Map<String, List<dynamic>> fieldsChangedValues;

  HistoryItemTimelineDetailComponent() {
    initializeDateFormatting(Intl.defaultLocale , null);
  }

  static final String timelineLabel = TimelineItemdMsg.label('Timeline');
  static final String theLabel = TimelineItemdMsg.label('the');
  static final String valueLabel =  TimelineItemdMsg.label('value');
  static final String changedFromLabel =  TimelineItemdMsg.label('changed from');

  void ngOnInit() async {

    fieldsChangedValues = getViewToChangedValues(objectClassName, changedValuesPrevious, changedValuesCurrent);

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
  Map<String, List<dynamic>> getViewToChangedValues(String objectClassName, Map<String, dynamic> changedValuesPrevious, Map<String, dynamic> changedValuesCurrent) {
    Map<String, List<dynamic>> viewToChangedValues;
    if (objectClassName == 'User') {
      viewToChangedValues = UserChangedValues.getViewToChangedValues(objectClassName, changedValuesPrevious, changedValuesCurrent);
    }
    return viewToChangedValues;
  }

  int get typeToViewTextLeft => _typeToViewTextLeft;
  int get typeToViewTextRight => _typeToViewTextRight;
  int get typeToViewImageAvatar => _typeToViewImageAvatar;

  int get iTypeToView => _iTypeToView;
  int get iFieldDescription => _iFieldDescription;
  int get iChangedValuesPrevious => _iChangedValuesPrevious;
  int get iChangedValuesCurrent => _iChangedValuesCurrent;

}

class UserChangedValues {

  static constructViewToFieldsChangedValues(Map<String, List<dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues, int iPreviousCurrent) {

    changedValues?.forEach((k, v) {
      if (k == User.userProfileField) {
        UserProfileChangedValues.constructViewToFieldsChangedValues(fieldsChangedValues, v, iPreviousCurrent);
      } else if (k == User.passwordField) {
        fieldsChangedValues.putIfAbsent(k, () => [_typeToViewTextLeft, UserFieldMsg.label(k), null, null]);
        fieldsChangedValues[k][iPreviousCurrent] = '***';
      } else {
        if (k != User.idField && k != User.versionField) {
          fieldsChangedValues.putIfAbsent(k, () => [_typeToViewTextLeft, UserFieldMsg.label(k), null, null]);
          fieldsChangedValues[k][iPreviousCurrent] = v;
        }
      }
    });

    return fieldsChangedValues;
  }

  static Map<String, List<dynamic>> getViewToChangedValues(String objectClassName, Map<String, dynamic> changedValuesPrevious, Map<String, dynamic> changedValuesCurrent) {
    Map<String, List<dynamic>> fieldsChangedValues = {};

    constructViewToFieldsChangedValues(fieldsChangedValues, changedValuesPrevious, _iChangedValuesPrevious);
    constructViewToFieldsChangedValues(fieldsChangedValues, changedValuesCurrent, _iChangedValuesCurrent);

    return fieldsChangedValues;
  }
}

class UserProfileChangedValues {

  static Map<String, List<dynamic>>  constructViewToFieldsChangedValues(Map<String, List<dynamic>> fieldsChangedValues, Map<String, dynamic> changedValues, int iPreviousCurrent) {

    changedValues?.forEach((k, v) {
      if (k == UserProfile.idiomLocaleField) {

      } else if (k == UserProfile.imageField) {
        fieldsChangedValues.putIfAbsent(k, () => [_typeToViewImageAvatar, UserProfileFieldMsg.label(k), null, null]);
        fieldsChangedValues[k][iPreviousCurrent] = v;
      }
      else {
        if (k != User.idField) {
          fieldsChangedValues.putIfAbsent(k, () => [_typeToViewTextLeft, UserProfileFieldMsg.label(k), null, null]);
          fieldsChangedValues[k][iPreviousCurrent] = v;
        }
      }
    });

    return fieldsChangedValues;
  }

  static Map<String, List<dynamic>> getViewToChangedValues(String objectClassName, Map<String, dynamic> changedValuesPrevious, Map<String, dynamic> changedValuesCurrent) {
    Map<String, List<dynamic>> fieldsChangedValues = {};

    constructViewToFieldsChangedValues(fieldsChangedValues, changedValuesPrevious, _iChangedValuesPrevious);
    constructViewToFieldsChangedValues(fieldsChangedValues, changedValuesCurrent, _iChangedValuesCurrent);

    return fieldsChangedValues;
  }
}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:intl/intl.dart';
import 'package:intl/date_symbol_data_local.dart';

import 'package:angular/angular.dart';
/* import 'package:angular_forms/angular_forms.dart'; */
/* import 'package:angular_components/angular_components.dart'; */
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/content/deferred_content.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';

import 'package:auge_server/model/user.dart';
import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_server/model/objective/timeline_item.dart';
import 'package:auge_server/model/authorization.dart';

import 'package:auge_web/services/common_service.dart' as common_service;

import 'package:auge_web/message/messages.dart';

@Component(
    selector: 'auge-objective-timeline',
    providers: const [],
    directives: const [
      coreDirectives,
      /* materialDirectives, */
      MaterialExpansionPanel,
      MaterialButtonComponent,
      MaterialIconComponent,
      DeferredContentDirective,
    ],
    pipes:   const [DatePipe],
    templateUrl: 'objective_timeline_component.html',

    styleUrls: const [
      'objective_timeline_component.css'
    ])

class ObjectiveTimelineComponent extends Object {

  final ObjectiveService _objectiveService;

  @Input()
  Objective objective;

  Map<TimelineItem, bool> expandedControl = Map();

  ObjectiveTimelineComponent(this._objectiveService) {
    initializeDateFormatting(Intl.defaultLocale , null);
  }

  static final String dayAgoLabel =  TimelineItemdMessage.label('day ago');
  static final String daysAgoLabel =  TimelineItemdMessage.label('days ago');
  static final String hourAgoLabel =  TimelineItemdMessage.label('hour ago');
  static final String hoursAgoLabel =  TimelineItemdMessage.label('hours ago');
  static final String minuteAgoLabel =  TimelineItemdMessage.label('minute ago');
  static final String minutesAgoLabel =  TimelineItemdMessage.label('minutes ago');
  static final String secondAgoLabel =  TimelineItemdMessage.label('second ago');
  static final String secondsAgoLabel =  TimelineItemdMessage.label('seconds ago');

  // List<TimelineItem> get timeline => objective.timeline;

  String objectiveFieldLabel(String fieldName) => ObjectiveFieldMessage.label(fieldName);

  // List<TimelineItem> get timeline => objective.timeline;

  String userUrlImage(User user) {
    return common_service.userUrlImage(user?.userProfile?.image);
  }

  String systemFunctionInPastLabel(int systemFunctionIndex) {
    return SystemFunctionMessage.InPastLabel(SystemFunction.values[systemFunctionIndex].toString());
  }

  DateTime get currentDateTime => _objectiveService.currentDateTime;

  String elapsedTime(DateTime timelineItemDateTime, DateTime currentDateTime) {
    String elapsedTime;
    if (timelineItemDateTime != null && currentDateTime != null) {
      Duration duration = currentDateTime.difference(timelineItemDateTime);

      if (duration.inDays != 0) {
        if (duration.inDays == 1) {
          elapsedTime = '${duration.inDays.toString()} ${dayAgoLabel}';
        } else {
          elapsedTime = '${duration.inDays.toString()} ${daysAgoLabel}';
        }
      } else if (duration.inHours != 0) {
        if (duration.inHours == 1) {
          elapsedTime = '${duration.inHours.toString()} ${hourAgoLabel}';
        } else {
          elapsedTime = '${duration.inHours.toString()} ${hoursAgoLabel}';
        }
      } else if (duration.inMinutes != 0) {
        if (duration.inMinutes == 1) {
          elapsedTime = '${duration.inMinutes.toString()} ${minuteAgoLabel}';
        } else {
          elapsedTime = '${duration.inMinutes.toString()} ${minutesAgoLabel}';
        }
      } else  {
        if (duration.inSeconds <= 1) {
          elapsedTime = '${duration.inSeconds.toString()} ${secondAgoLabel}';
        } else {
          elapsedTime = '${duration.inSeconds.toString()} ${secondsAgoLabel}';
        }
      }
    }
    return elapsedTime;
  }
/*
  String formatChangedData(TimelineItem timelineItem) {

    Map mapChangedData = json.decode(timelineItem.changedData);

    StringBuffer formatChangedData = StringBuffer();

    mapChangedData.forEach((k, v) {
      formatChangedData.write(k);
      formatChangedData.write(': ');
      formatChangedData.write('<strong>');
      formatChangedData.write(v.values.first);
      formatChangedData.write('</strong>');
      if (v.values.length > 1) {
        formatChangedData.write(' to ');
        formatChangedData.write(v.values.last);
      }
      formatChangedData.writeln();
    });

    return formatChangedData.toString();

  }
*/
  void collapseExpandControl(TimelineItem timelineItem) {
    expandedControl[timelineItem] = expandedControl[timelineItem] == null ? true :  !expandedControl[timelineItem];
  }

  String formatData(dynamic data) {
    if (data is DateTime) {
      //return DateFormat.yMMMd().add_Hms().format(data);
      return DateFormat.yMMMd().format(data);
    } else {
      return data;
    }
  }

}
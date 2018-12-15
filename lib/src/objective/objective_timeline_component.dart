// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:intl/intl.dart';
import 'package:intl/date_symbol_data_local.dart';

import 'package:angular/angular.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/content/deferred_content.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';

import 'package:auge_server/model/user.dart';
import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_server/model/history_item.dart';
import 'package:auge_server/model/authorization.dart';

import 'package:auge_web/services/common_service.dart' as common_service;

import 'package:auge_web/message/messages.dart';
import 'package:auge_web/message/field_messages.dart';

@Component(
    selector: 'auge-objective-timeline',
    providers: const [],
    directives: const [
      coreDirectives,
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

class ObjectiveTimelineComponent extends Object implements OnInit {

  final ObjectiveService _objectiveService;

  @Input()
  Objective objective;

  Map<HistoryItem, bool> expandedControl = Map();

  ObjectiveTimelineComponent(this._objectiveService) {
    initializeDateFormatting(Intl.defaultLocale , null);
  }

  static final String timelineLabel = TimelineItemdMsg.label('Timeline');
  static final String dayAgoLabel =  TimelineItemdMsg.label('day ago');
  static final String daysAgoLabel =  TimelineItemdMsg.label('days ago');
  static final String hourAgoLabel =  TimelineItemdMsg.label('hour ago');
  static final String hoursAgoLabel =  TimelineItemdMsg.label('hours ago');
  static final String minuteAgoLabel =  TimelineItemdMsg.label('minute ago');
  static final String minutesAgoLabel =  TimelineItemdMsg.label('minutes ago');
  static final String secondAgoLabel =  TimelineItemdMsg.label('second ago');
  static final String secondsAgoLabel =  TimelineItemdMsg.label('seconds ago');
  static final String theLabel = TimelineItemdMsg.label('the');
  static final String valueLabel =  TimelineItemdMsg.label('value');
  static final String changedFromLabel =  TimelineItemdMsg.label('changed from');

  void ngOnInit() async {
    if (objective.id != null) {
      objective.history = await _objectiveService.getHistory(objective.id);
    } else {
      objective.history = null;
    }
  }

  // List<TimelineItem> get timeline => objective.timeline;

  String fieldLabel(String className, String fieldName) {
    if (className == 'Objective')  {
      return ObjectiveFieldMsg.label(fieldName);
    }
    else if (className == 'Measure') {
      return MeasuereFieldMsg.label(fieldName);
    }
  }
    // List<TimelineItem> get timeline => objective.timeline;

  String userUrlImage(User user) {
    return common_service.userUrlImage(user?.userProfile?.image);
  }

  String systemFunctionInPastLabel(int systemFunctionIndex) {
    return SystemFunctionMsg.InPastLabel(SystemFunction.values[systemFunctionIndex].toString());
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

  void collapseExpandControl(HistoryItem historyItem) {
    expandedControl[historyItem] = expandedControl[historyItem] == null ? true :  !expandedControl[historyItem];
  }

  dynamic formatValue(dynamic value) {
    if (value is DateTime) {
      //return DateFormat.yMMMd().add_Hms().format(data);
      return DateFormat.yMMMd().format(value);
    } else {
      return value;
    }
  }
}

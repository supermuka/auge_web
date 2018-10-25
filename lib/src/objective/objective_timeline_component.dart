// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:convert';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';

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
      DatePipe,
      DeferredContentDirective,
    ],
    pipes:   const [DatePipe],
    templateUrl: 'objective_timeline_component.html',

    styleUrls: const [
      'objective_timeline_component.css'
    ])

class ObjectiveTimelineComponent extends Object with OnInit {


  final ObjectiveService _objectiveService;

  DateTime currentDateTime;

  ObjectiveTimelineComponent(this._objectiveService);

  @Input()
  Objective objective;

  Map<TimelineItem, bool> expandedControl = Map();

  @override
  void ngOnInit() async {

    currentDateTime = await _objectiveService.getDateTime(true);

  }

  List<TimelineItem> get timeline => objective.timeline;

  String userUrlImage(User user) {
    return common_service.userUrlImage(user?.userProfile?.image);
  }

  String systemFunctionInPastLabel(int systemFunctionIndex) {
    return SystemFunctionMessage.InPastLabel(SystemFunction.values[systemFunctionIndex].toString());
  }

  String elapsedTime(DateTime timelineItemDateTime) {
    String elapsedTime;
    if (timelineItemDateTime != null && currentDateTime != null) {
      Duration duration = currentDateTime.difference(timelineItemDateTime);

      if (duration.inDays != 0) {
        if (duration.inDays == 1) {
          elapsedTime = duration.inDays.toString() + ' day ago';
        } else {
          elapsedTime = duration.inDays.toString() + ' days ago';
        }
      } else if (duration.inHours != 0) {
        if (duration.inHours == 1) {
          elapsedTime = duration.inHours.toString() + ' hour ago';
        } else {
          elapsedTime = duration.inHours.toString() + ' hours ago';
        }
      } else if (duration.inMinutes != 0) {
        if (duration.inMinutes == 1) {
          elapsedTime = duration.inMinutes.toString() + ' minute ago';
        } else {
          elapsedTime = duration.inMinutes.toString() + ' minutes ago';
        }
      } else if (duration.inSeconds != 0) {
        if (duration.inSeconds == 1) {
          elapsedTime = duration.inSeconds.toString() + ' second ago';
        } else {
          elapsedTime = duration.inSeconds.toString() + ' seconds ago';
        }
      }
    }
    return elapsedTime;
  }

  String formatChangedData(TimelineItem timelineItem) {

    Map mapChangedData = json.decode(timelineItem.changedData);

    StringBuffer formatChangedData = StringBuffer();

    mapChangedData.forEach((k, v) {
      formatChangedData.write(k);
      formatChangedData.write(': ');
      formatChangedData.write(v.values.first);
      if (v.values.length > 1) {
        formatChangedData.write(' to ');
        formatChangedData.write(v.values.last);
      }
      formatChangedData.writeln();
    });

    return formatChangedData.toString();

  }

  void collapseExpandControl(TimelineItem timelineItem) {
    expandedControl[timelineItem] = expandedControl[timelineItem] == null ? true :  !expandedControl[timelineItem];
  }

}
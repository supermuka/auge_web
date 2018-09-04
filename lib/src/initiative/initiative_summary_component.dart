// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';

import 'package:auge_web/message/messages.dart';

import 'package:auge_server/model/initiative/initiative.dart';

import 'package:auge_web/services/common_service.dart' as common_service;

@Component(
    selector: 'auge-initiative-summary',
    directives: const [
      coreDirectives,
      materialDirectives,
    ],
    templateUrl: 'initiative_summary_component.html',
    styleUrls: const [
      'initiative_summary_component.css'
    ])
class InitiativeSummaryComponent extends Object {

  static final int progressBarWidth = 360;

  @Input()
  Initiative initiative;

  // Define messages and labels
  static final String workItemsOverDueLabel =  InitiativeMessage.label('Work Items Over Due');
  static final String leaderLabel =  InitiativeMessage.label('Leader');

  String circleColor(Initiative initiative)  {
    String color;
    int workItemsOverDueCount = initiative.workItemsOverDueCount;
    int workItemsCount = initiative.workItemsCount;

    if (workItemsOverDueCount == 0) {
      color = 'hsl(120, 100%, 50%)';
    } else if (workItemsOverDueCount < workItemsCount)
      color = 'hsl(45, 100%, 50%)';
    else {
      color = 'hsl(0, 100%, 50%)';
    }
    return color;
  }

  String widthState(int workItemsCount, int stateWorkItemsCount, int widthTotal) {
    return (stateWorkItemsCount / workItemsCount * widthTotal).toString();
  }

  String userUrlImage(String userProfileImage) {
    return common_service.userUrlImage(userProfileImage);
  }



}
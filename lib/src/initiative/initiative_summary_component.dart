// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';

import 'package:angular_components/focus/keyboard_only_focus_indicator.dart';
import 'package:angular_components/laminate/enums/alignment.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';

import 'package:auge_server/model/initiative/initiative.dart';

import 'package:auge_web/message/messages.dart';

@Component(
    selector: 'auge-initiative-summary',
    templateUrl: 'initiative_summary_component.html',
    styleUrls: const [
      'initiative_summary_component.css'
    ],
    directives: const [
      coreDirectives,
      ClickableTooltipTargetDirective,
      KeyboardOnlyFocusIndicatorDirective,
      MaterialTooltipDirective,
      MaterialPaperTooltipComponent,
    ])
class InitiativeSummaryComponent {

  static final int progressBarWidth = 360;
  final preferredTooltipPositions = const [RelativePosition.OffsetBottomLeft, RelativePosition.OffsetBottomRight];

  @Input()
  Initiative initiative;

  // Define messages and labels
  static final String workItemsOverDueLabel =  InitiativeMsg.label('Work Items Over Due');

  String circleColor(Initiative initiative)  {
    String color;
    int workItemsOverDueCount = initiative.workItemsOverDueCount;
    int workItemsCount = initiative.workItemsCount;

    if (workItemsOverDueCount == 0) {
      color =  '#0f9d58'; // $mat-green-500: #0f9d58; // 'hsl(120, 100%, 50%)';
    } else if (workItemsOverDueCount < workItemsCount)
      color = '#ffc107'; // $mat-amber-500: #ffc107; // 'hsl(45, 100%, 50%)';
    else {
      color = '#db4437'; // $mat-red-500: #db4437; // 'hsl(0, 100%, 50%)';
    }
    return color;
  }

  String widthState(int workItemsCount, int stateWorkItemsCount, int widthTotal) {
    return (stateWorkItemsCount / workItemsCount * widthTotal).toString();
  }
}
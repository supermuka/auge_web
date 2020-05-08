// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
//import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
//import 'package:angular_components/content/deferred_content.dart';
import 'package:angular_components/material_select/material_dropdown_select.dart';
import 'package:angular_components/material_select/material_dropdown_select_accessor.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/model/ui/has_renderer.dart';

import 'package:auge_shared/domain/general/user.dart';
import 'package:auge_shared/domain/general/history_item.dart';
import 'package:auge_shared/domain/general/authorization.dart';

//import 'package:auge_web/route/app_routes.dart';
import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_shared/message/messages.dart';
import 'package:auge_shared/message/domain_messages.dart';

import 'package:auge_web/src/history_timeline/history_item_timeline_detail_component.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/history_timeline/history_timeline_service.dart';
// export 'package:auge_web/src/history_timeline/history_timeline_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';

@Component(
    selector: 'auge-history-timeline',
    templateUrl: 'history_timeline_component.html',
    styleUrls: const [
      'history_timeline_component.css'
    ],
    providers: const [HistoryTimelineService],
    directives: const [
      coreDirectives,
      MaterialDialogComponent,
      ModalComponent,
     // MaterialExpansionPanel,
      MaterialButtonComponent,
      MaterialIconComponent,
    //  DeferredContentDirective,
      HistoryItemTimelineDetailComponent,
      MaterialDropdownSelectComponent,
      DropdownSelectValueAccessor,
    ],
    pipes:   const [DatePipe],)

class HistoryTimelineComponent implements OnActivate /* extends Object implements OnInit  */ {

  final AppLayoutService _appLayoutService;
  final HistoryTimelineService _historyTimelineService;
  final Location _location;

  Map<HistoryItem, bool> expandedControl = Map();

  bool modalVisible = false;

  List<HistoryItem> history;

  SelectionOptions systemModuleOptions;
  SelectionModel systemModuleSingleSelectModel;

  int systemModuleIndex;

  static final String closeButtonLabel = CommonMsg.buttonLabel(CommonMsg.closeButtonLabel);

  static final String timelineLabel = TimelineMsg.label(TimelineMsg.timelineLabel);
  static final String dayAgoLabel =  TimelineMsg.label(TimelineMsg.dayAgoLabel);
  static final String daysAgoLabel =  TimelineMsg.label(TimelineMsg.daysAgoLabel);
  static final String hourAgoLabel =  TimelineMsg.label(TimelineMsg.hourAgoLabel);
  static final String hoursAgoLabel =  TimelineMsg.label(TimelineMsg.hoursAgoLabel);
  static final String minuteAgoLabel =  TimelineMsg.label(TimelineMsg.minuteAgoLabel);
  static final String minutesAgoLabel =  TimelineMsg.label(TimelineMsg.minutesAgoLabel);
  static final String secondAgoLabel =  TimelineMsg.label(TimelineMsg.secondAgoLabel);
  static final String secondsAgoLabel =  TimelineMsg.label(TimelineMsg.secondsAgoLabel);

  static String selectModuleSingleSelectLabel = TimelineMsg.label(TimelineMsg.selectModuleLabel);

  HistoryTimelineComponent(this._historyTimelineService, this._location, this._appLayoutService) {
    // initializeDateFormatting(Intl.defaultLocale , null);
  }

  @override
  void onActivate(RouterState previous, RouterState current) async {

    modalVisible = true;

    // first in Set is index, last in Set is the label.
    List<Set> options = [{null, TimelineMsg.label(TimelineMsg.allLabel)}];

    for (int i = 0;i<SystemModule.values.length;i++) {
      options.add({i, SystemModuleMsg.label(SystemModule.values[i].toString().split('.').last)});
    }

    systemModuleOptions = SelectionOptions.fromList(options);

    print('DEBUG-A ${_appLayoutService.systemModuleIndex}');
    // Model Listening
    systemModuleIndex = _appLayoutService.systemModuleIndex;
    systemModuleSingleSelectModel = SelectionModel.single()
      ..selectionChanges.listen((d) async {
        print('DEBUG-D');

        if (d != null && d.isNotEmpty) {
          if (d.first.removed.isNotEmpty && d.first.added.isEmpty) {
            //systemModuleSingleSelectModel.deselect(systemModuleSingleSelectModel.selectedValues.first);
            selectModuleSingleSelectLabel = TimelineMsg.label(TimelineMsg.selectModuleLabel);
            history = null;
          } else if (d.first.removed.isEmpty && d.first.added.isNotEmpty || d.first.removed.first.first != d.first.added.first.first) {
          /*
          if (systemModuleIndex !=
              d.first.added.first.first) {
*/
            print('DEBUG-F');
            systemModuleIndex =
                d.first.added.first.first;

            selectModuleSingleSelectLabel =
                d.first.added.first.last ??
                    TimelineMsg.label(TimelineMsg.selectModuleLabel);
            history = await _historyTimelineService.getHistory(systemModuleIndex);

          }
        }
      });

    if (systemModuleSingleSelectModel.isEmpty && systemModuleOptions.optionsList.isNotEmpty) {
      int optionIndex = systemModuleOptions.optionsList.indexWhere((test) => test.first == systemModuleIndex);
      print('DEBUG-C ${optionIndex}');
      if (optionIndex == -1) {
        systemModuleSingleSelectModel.select(systemModuleOptions.optionsList.first);
      } else {
        print('DEBUG-CC ${systemModuleOptions.optionsList[optionIndex]} ${systemModuleOptions.optionsList[optionIndex]?.first}');
        systemModuleSingleSelectModel.select(systemModuleOptions.optionsList[optionIndex]);
      }
    }
  }

  //get history => _historyTimelineService.history;

  // List<TimelineItem> get timeline => objective.timeline;
  String userUrlImage(User user) {
    return common_service.userUrlImage(user.userProfile?.image);
  }

  String systemFunctionInPastLabel(int systemFunctionIndex) {
    return SystemFunctionMsg.inPastLabel(SystemFunction.values[systemFunctionIndex].toString().split('.').last);
  }

  String classNameLabel(String className) {
    return ClassNameMsg.label(className);
  }

  DateTime get currentDateTime => _historyTimelineService.currentDateTime;

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

  void closeDetail() {
    _location.back();
  }

  ItemRenderer get itemRenderer => (dynamic item) => item.last;

}

// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:auge_web/route/app_routes.dart';

import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';

import 'package:auge_web/src/app_layout/app_layout_service.dart';

import 'history_timeline_service.dart';

@Component(
  selector: 'auge-history',
  templateUrl: 'history_component.html',
  styleUrls: const ['history_component.css'],
  providers: const [/* HistoryTimelineService */],
  directives: const [
    coreDirectives,
    routerDirectives,
    MaterialButtonComponent,
    MaterialIconComponent,
  ],
)
class HistoryComponent extends CanReuse  {

  final HistoryTimelineService _historyTimelineService;
  final Router _router;

  HistoryComponent(this._historyTimelineService, this._router);

  get historyCount => this._historyTimelineService.historyCount;

  void goToHistoryTimeline() async {
    await _router.navigate(AppRoutes.historyTimelineRoute.toUrl());
  }

}
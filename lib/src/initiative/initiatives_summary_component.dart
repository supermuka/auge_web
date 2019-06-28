// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';

import 'package:angular_router/angular_router.dart';

import 'package:angular_components/content/deferred_content.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';

import 'package:auge_server/model/initiative/initiative.dart';

import 'package:auge_web/message/messages.dart';
// import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/app_layout/app_layout_service.dart';
import 'package:auge_web/src/initiative/initiative_service.dart';
import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/initiative/initiative_summary_component.dart';
import 'package:auge_web/services/app_routes.dart';

@Component(
    selector: 'auge-initiatives-summary',
    providers: const [InitiativeService],
    templateUrl: 'initiatives_summary_component.html',
    styleUrls: const [
      'initiatives_summary_component.css'
    ],
    directives: const [
      coreDirectives,
      routerDirectives,
      DeferredContentDirective,
      MaterialButtonComponent,
      MaterialIconComponent,
      MaterialTooltipDirective,
      MaterialExpansionPanelSet,
      MaterialExpansionPanel,
      InitiativeSummaryComponent,
    ])

class InitiativesSummaryComponent with CanReuse implements OnInit {

  final InitiativeService _initiativeService;
  final Router _router;
 // final AuthService _authService;
  final AppLayoutService _appLayoutService;

  @Input()
  String objectiveId;

  List<Initiative> initiatives = [];

  InitiativesSummaryComponent(this._appLayoutService, this._initiativeService,  this._router);

  static final String initiativesLabel =  InitiativeMsg.label('Initiatives');
  static final String groupLabel =  InitiativeMsg.label('Group');
  static final String leaderLabel =  InitiativeMsg.label('Leader');

  @override
  ngOnInit() async {
    try {
      if (objectiveId != null) {
        initiatives = await _initiativeService.getInitiatives(
            this._initiativeService.authService.authorizedOrganization.id, objectiveId: objectiveId,
            withWorkItems: true, withProfile: true);
      }
    } catch (e) {
      _appLayoutService.error = e.toString();
      rethrow;
    }
  }

  void goToInitiatives() {
    _router.navigate(AppRoutes.initiativesByObjectiveRoute.toUrl(parameters: { AppRoutesParam.objectiveIdParameter:objectiveId}));
  }

  String userUrlImage(String userProfileImage) {
    return common_service.userUrlImage(userProfileImage);
  }
}
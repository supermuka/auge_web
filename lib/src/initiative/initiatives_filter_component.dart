// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';

import 'package:angular_router/angular_router.dart';

import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_input/material_auto_suggest_input.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/model/selection/string_selection_options.dart';
import 'package:angular_components/model/ui/has_factory.dart';

import 'package:auge_server/model/objective/objective.dart';

import 'package:auge_server/shared/message/messages.dart';
//import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/src/objective/objective_service.dart';
import 'package:auge_web/src/group/group_service.dart';

@Component(
  selector: 'auge-initiatives-filter',
  providers: const [overlayBindings, ObjectiveService, UserService, GroupService],
  templateUrl: 'initiatives_filter_component.html',
  styleUrls: const [
    'initiatives_filter_component.css'
  ],
  directives: const [
    coreDirectives,
    routerDirectives,
    AutoFocusDirective,
    MaterialDialogComponent,
    ModalComponent,
    MaterialIconComponent,
    MaterialButtonComponent,
    MaterialAutoSuggestInputComponent,
  ])
class InitiativesFilterComponent implements OnInit {

  /// When it exists, the error/exception message presented into dialog view.
  String dialogError;

  /// If empty, no filter. Otherwide, filter initiatives with [Objective] informed.
  @Input()
  InitiativesFilterParam initiativesFilterParam;

  Objective objective;

  final _closeController = new StreamController<void>.broadcast(sync: true);

  /// Publishes events when close.
  @Output()
  Stream<void> get close => _closeController.stream;

  //final AuthService _authService;
  final ObjectiveService _objectiveService;

  String objectiveInputText = '';

  SelectionOptions objectiveOptions;

  SelectionModel objectiveSingleSelectModel;

  InitiativesFilterComponent(this._objectiveService);

  // Define messages and labels

  static final String filterInitiativesLabel =  InitiativeMsg.label('Filter Initiatives');
  static final String noMatchLabel =  InitiativeMsg.label('No Match');
  static final String objectiveLabel =  InitiativeMsg.label('Objective');
  static final String clearButtonLabel = CommonMsg.buttonLabel('Clear');
  static final String applyButtonLabel = CommonMsg.buttonLabel('Apply');

  @override
  void ngOnInit() async {

    try {
      // Objective
      List<Objective> objectives = await _objectiveService.getObjectives(
          _objectiveService.authService.authorizedOrganization.id, withMeasures: false);

      objectiveOptions = new StringSelectionOptions<Objective>(
          objectives, toFilterableString: (Objective objective) => objective.name);
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }

    // Objective Select Model
    objectiveSingleSelectModel =
    new SelectionModel.single()
      ..selectionChanges.listen((objective) {
        if (objective.isNotEmpty && objective.first.added != null && objective.first.added.length != 0 && objective.first.added?.first != null) {
          objective = objective.first.added.first;
        }
      });

  }

  void clear() {
   objective = null;
   objectiveSingleSelectModel.clear();
  }

  void applyCloseFilter() {
    initiativesFilterParam.objective = objective;
    _closeController.add(null);
  }

  String get objectiveLabelRenderer {
    String nameLabel;
    if ((objectiveSingleSelectModel != null &&
        objectiveSingleSelectModel.selectedValues != null &&
        objectiveSingleSelectModel.selectedValues.length != null)) {

      nameLabel = objectiveSingleSelectModel.selectedValues.first.name;
    }

    return nameLabel;
  }

  ItemRenderer get objectiveItemRenderer => (dynamic objective) => objective.name;
}

class InitiativesFilterParam {
  Objective objective;
}
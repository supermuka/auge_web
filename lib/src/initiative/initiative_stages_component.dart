// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:auge_web/services/app_routes.dart';

import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_input/material_input.dart';

import 'package:angular_components/model/menu/menu.dart';
import 'package:angular_components/material_menu/material_menu.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/model/action/async_action.dart';
import 'package:angular_components/material_select/material_dropdown_select.dart';
import 'package:angular_components/material_select/dropdown_button.dart';
import 'package:angular_components/material_select/material_dropdown_select_accessor.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/model/selection/string_selection_options.dart';
import 'package:angular_components/model/ui/has_factory.dart';

import 'package:auge_server/model/initiative/stage.dart';
import 'package:auge_server/model/initiative/state.dart';

import 'package:auge_web/services/common_service.dart';
import 'package:auge_web/src/initiative/initiative_service.dart';

import 'package:auge_web/message/messages.dart';
import 'package:auge_web/message/model_messages.dart';

// ignore_for_file: uri_has_not_been_generated
import 'initiative_stages_component.template.dart' as initiative_stages_component;

@Component(
    selector: 'auge-initiative-stages',
    providers: [overlayBindings, InitiativeService],
    directives: const [
      coreDirectives,
      materialInputDirectives,
      AutoFocusDirective,
      ModalComponent,
      MaterialDialogComponent,
      MaterialExpansionPanel,
      MaterialExpansionPanelSet,
      MaterialIconComponent,
      MaterialButtonComponent,
      MaterialMenuComponent,
      MaterialDropdownSelectComponent,
      DropdownSelectValueAccessor,
      DropdownButtonComponent,
    ],
  /*  pipes: const [commonPipes], */
    templateUrl: 'initiative_stages_component.html',
    styleUrls: const [
      'initiative_stages_component.css'
    ])

class InitiativeStagesComponent implements /* OnInit, */ OnActivate, OnDeactivate {

  final InitiativeService _initiativeService;
  final Location _location;

  bool modalVisible = false;



  String initiativeId;
  List<Stage> stages;

  bool editable;

  Stage selectedStage;

  String showStartValueErrorMsg;
  String showCurrentValueErrorMsg;
  String showEndValueErrorMsg;

  MenuModel<MenuItem> menuModel;

  SelectionOptions stateOptions;
  SelectionModel<State> stateSingleSelectModel;

  List<State> _states;

  InitiativeStagesComponent(this._initiativeService, this._location) {
   // initializeDateFormatting(Intl.defaultLocale , null);

    stateSingleSelectModel = SelectionModel.single()
      ..selectionChanges.listen((es) {
        if (selectedStage != null && es.isNotEmpty && es.first.added != null &&
            es.first.added.length != 0 && es.first.added.first != null) {
          selectedStage.state = es.first.added.first;
        }
      });
  }

  // Define messages and labels
  static final String initiativeStagesLabel = StageMsg.label('Initiative Stages');
  static final String selectLabel =  StageMsg.label('Select');
  static final String stageLabel =  StageMsg.label('Stage');

  static final String saveButtonLabel = CommonMsg.buttonLabel('Save');
  static final String cancelButtonLabel = CommonMsg.buttonLabel('Cancel');
  static final String closeButtonLabel = CommonMsg.buttonLabel('Close');

  static final String nameLabel =  FieldMsg.label('${Stage.className}.${Stage.nameField}');

  static final String stateNotInfomedMsg =  StageMsg.stateNotInfomedMsg();

  @override
  void onActivate(RouterState previous, RouterState current) async {
    modalVisible = true;

    if (current.parameters.containsKey(AppRoutesParam.initiativeIdParameter)) {
      initiativeId = current.parameters[AppRoutesParam.initiativeIdParameter];
    }
    if (initiativeId != null) {
      stages = await _initiativeService.getStages(initiativeId);
    } else {
      throw Exception('Initiative Id not found.');
    }

    _states =  await _initiativeService.getStates();

    // List<State> states =  await _initiativeService.getStates();

    stateOptions = new StringSelectionOptions<State>(
        _states, toFilterableString: (State state) => state.name);

    if (stateOptions.optionsList.isNotEmpty) {
      stateSingleSelectModel.select(stateOptions.optionsList.first);
    }
  }

  @override
  void onDeactivate(RouterState current, RouterState next) {
    modalVisible = false;
  }

  // Label for the button for single selection.
  String get stateSingleSelectLabel {
    String nameLabel;
    if ((stateSingleSelectModel != null) &&
        (stateSingleSelectModel.selectedValues != null) &&
        (stateSingleSelectModel.selectedValues.length > 0)) {
      nameLabel = stateSingleSelectModel.selectedValues.first?.name;
    } else {
      nameLabel = selectLabel;
    }
    return nameLabel;
  }

  void selectionChangeState(Stream<State> stream) async {
    print ((await stream.first).name);
  }

  void cancelStage(Stage stage, AsyncAction event) async {

    try {
      if (stage.id == null) {
        stages.remove(stage);
      } else {
        stages[stages.indexOf(stage)] = await _initiativeService.getStage(stage.id);
      }
     // _sortMeasurePregressesOrderByDate(measureProgresses);
    } on Exception {
      event.cancel();
      rethrow;
    }
  }

  void saveStage(Stage stage, AsyncAction event) async {

    if (stage.state == null) {
      dialogError = stateNotInfomedMsg;
      event.cancel();
    } else {
      try {

        if (stage.index == null) {
          int lastIndexIntoStage = 0;
          for (int i = 0;i < stages.length;i++) {
            if (stage.state.index == stages[i].state.index && stages[i].index != null && lastIndexIntoStage < stages[i].index) {
              lastIndexIntoStage = stages[i].index;
            }
          }
          stage.index = lastIndexIntoStage + 1;
        }

        String stageId = await _initiativeService.saveStage(
            initiativeId, stage);
        // Returns a new instance to get the generated data on the server side as well as having the last update.
        selectedStage = await _initiativeService.getStage(stageId);
        //  }

        // stages = await _initiativeService.getStages(selectedInitiative.id);
        _sortStages();

      } catch (e) {
        dialogError = e.toString();
        event.cancel();
        rethrow;
      }
    }
  }

  void selectStage(Stage stage) async {
    if (stage == null) {
      stages.insert(0, Stage());
      selectedStage = stages.first;
  //    selectedStage.index = stages.length;
   //   selectedMeasureProgress.date = DateTime.now();
    } else {
      // Get a new instance to doesn't referenced the other.
      selectedStage = stage;
    }

  }

  /// Call a delete
  void delete(Stage stage) async {
    try {
      await _initiativeService.deleteStage(stage);

      stages = await _initiativeService.getStages(initiativeId);

      // stages.remove(stage);

    } catch (e) {
      rethrow;
    }
  }


  set dialogError(String errorMsg) {
    error = errorMsg;
  }

  String get dialogError {
    return error;
  }

  // Order by State.index and Stage.index
  void _sortStages() {
    // measureProgresses.sort((a, b) => a?.date == null || b?.date == null ? -1 : a.date.compareTo(b.date));
    stages.sort((a, b) => a.index.compareTo(b.index));
    stages.sort((a, b) => a.state.index.compareTo(b.state.index));
  }


  bool get validStageInput {
    return (selectedStage.name.isNotEmpty && stateSingleSelectModel != null && stateSingleSelectModel.selectedValues.isNotEmpty && stateSingleSelectModel.selectedValues.first.index != null);
  }

  void moveUpStage(Stage stage) async {
    int i = stages.indexOf(stage);

    if (i > 0 && stage.state.index == stages[i-1].state.index ) {
      // Receive state equals previous stage, because can be different that the actual
   //   stage.state = stages[i-1].state;

      ++stages[i-1].index;
      await _initiativeService.saveStage(initiativeId, stages[i-1]);

      --stages[i].index;
      await _initiativeService.saveStage(initiativeId, stages[i]);

      stages = await _initiativeService.getStages(initiativeId);
      //stages.removeAt(i);
      //stages.insert(i-1, stage);
      //_sortStages();

    }
  }

  void moveDownStage(Stage stage) async {
    int i = stages.indexOf(stage);
    if (i < stages.length-1 && stage.state.index == stages[i+1].state.index) {

      // Receive state equals previous stage, because can be different that the actual
      --stages[i+1].index;
      await _initiativeService.saveStage(initiativeId, stages[i+1]);

      ++stages[i].index;
      await _initiativeService.saveStage(initiativeId, stages[i]);

      stages = await _initiativeService.getStages(initiativeId);
      //stages.removeAt(i);
      //stages.insert(i+1, stage);
    }
  }

  bool disableUp(Stage stage) {
    int firstIndexIntoStage = -1;
    for (int i = 0;i < stages.length;i++) {
      if (stage.state.index == stages[i].state.index && stages[i].index != null && ( firstIndexIntoStage == -1 || firstIndexIntoStage > stages[i].index )) {
        firstIndexIntoStage = stages[i].index;
      }
    }
    return (firstIndexIntoStage == stage.index);
  }

  bool disableDown(Stage stage) {
    int lastIndexIntoStage = 0;
    for (int i = 0;i < stages.length;i++) {
      if (stage.state.index == stages[i].state.index && stages[i].index != null && ( lastIndexIntoStage < stages[i].index )) {
        lastIndexIntoStage = stages[i].index;
      }
    }
    return (lastIndexIntoStage == stage.index);
  }

  void close() {
    _location.back();
  }

  ItemRenderer get stateItemRenderer => (dynamic state) => state.name;

  FactoryRenderer get stateFactoryRenderer => (_) => initiative_stages_component.StateRendererComponentNgFactory;

}

@Component(
    selector: 'state-renderer',
    //  template: '<material-icon icon="language"></material-icon>{{disPlayName}}',
    template: '<div><span [style.background-color]="disPlayCor">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;{{disPlayName}}</div>',
    styles: const [
      ''
    ],
    directives: const [
      MaterialIconComponent
    ])
class StateRendererComponent implements RendersValue {
  String disPlayName = '';
  String disPlayCor;

  @override
  set value(newValue) {
    disPlayName = (newValue as State).name;
    disPlayCor = 'hsl(' + (newValue as State).colorHue + ', ' + (newValue as State).colorSaturation + '%, ' + (newValue as State).colorLightness + '%)';
  }
}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_auto_dismiss.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_input/material_number_accessor.dart';
import 'package:angular_components/model/menu/menu.dart';
import 'package:angular_components/material_menu/material_menu.dart';
import 'package:angular_components/material_datepicker/module.dart';
import 'package:angular_components/model/date/date.dart';
import 'package:angular_components/material_datepicker/material_datepicker.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/model/action/async_action.dart';

import 'package:auge_web/services/common_service.dart';
import 'package:auge_web/src/work_item/work_item_service.dart';

import 'package:auge_shared/domain/work/work_item.dart';
import 'package:auge_shared/message/messages.dart';
import 'package:auge_shared/message/domain_messages.dart';

import 'package:auge_web/route/app_routes.dart';

@Component(
    selector: 'auge-work-item-values',
    providers: [overlayBindings, datepickerBindings, WorkItemService],
    templateUrl: 'work_item_values_component.html',
    styleUrls: const ['work_item_values_component.css'],
    directives: const [
      coreDirectives,
      materialInputDirectives,
      materialNumberInputDirectives,
      MaterialExpansionPanel,
      MaterialExpansionPanelSet,
      MaterialExpansionPanelAutoDismiss,
      NgModel,
      AutoFocusDirective,
      ModalComponent,
      MaterialDialogComponent,
      MaterialButtonComponent,
      MaterialIconComponent,
      MaterialDatepickerComponent,
      MaterialMenuComponent,
    ],
    pipes: const [commonPipes])

class WorkItemValuesComponent implements OnInit, OnActivate, OnDeactivate  {

 // final ObjectiveService _objectiveService;
  final WorkItemService _workItemService;
  final Location _location;

  bool modalVisible = false;

  WorkItem workItem;

  List<WorkItemValue> workItemValues;

  bool editable;

  WorkItemValue selectedWorkItemValue;

  //String showStartValueErrorMsg;
  String showActualValueErrorMsg;
  //String showEndValueErrorMsg;

  MenuModel<MenuItem> menuModel;

  DateRange limitToDateRange =
  DateRange(Date.today().add(years: -1), Date.today().add(years: 10));

  WorkItemValuesComponent(/*this._objectiveService, */ this._workItemService, this._location) {
    // initializeDateFormatting(Intl.defaultLocale , null);
  }

  // Define messages and labels
  static final String wokItemValuesLabel = WorkItemValueMsg.label(WorkItemValueMsg.workItemValuesLabel);
  //static final String progressCurrentValuesLabel = MeasureProgressMsg.label(MeasureProgressMsg.progressCurrentValuesLabel);

  static final String plannedValueLabel = WorkItemDomainMsg.fieldLabel(WorkItem.plannedValueField);
  static final String actualValueLabel = WorkItemValueDomainMsg.fieldLabel(WorkItemValue.actualValueField);
  static final String remainingValueLabel = WorkItemMsg.label(WorkItemMsg.remainingValueLabel);
  static final String dateAndActualValueLabel = WorkItemMsg.label(WorkItemMsg.dateAndActualValueLabel);

  static final String dateLabel =  WorkItemValueDomainMsg.fieldLabel(WorkItemValue.dateField); //FieldMsg.label('${MeasureProgress.className}.${MeasureProgress.dateField}');
  static final String commentLabel =  WorkItemValueDomainMsg.fieldLabel(WorkItemValue.commentField);  //FieldMsg.label('${MeasureProgress.className}.${MeasureProgress.commentField}');

  static final String saveButtonLabel = CommonMsg.buttonLabel(CommonMsg.saveButtonLabel);
  static final String cancelButtonLabel = CommonMsg.buttonLabel(CommonMsg.cancelButtonLabel);
  static final String closeButtonLabel = CommonMsg.buttonLabel(CommonMsg.closeButtonLabel);

  static final String valueErrorMsg =  WorkItemValueMsg.valueErrorMsg();
  static final String actualValueExistsAtDateMsg =  WorkItemValueMsg.actualValueExistsAtDate();

  void ngOnInit() async {

    workItemValues = [];
   //oo objective = Objective();
   // measure = Measure();
  }

  @override
  void onActivate(RouterState previous, RouterState current) async {
    modalVisible = true;

    String workItemId;
    if (current.parameters.containsKey(AppRoutesParam.workItemIdParameter)) {
      workItemId = current.parameters[AppRoutesParam.workItemIdParameter];
    } else {
      throw Exception('Work Item Id not found.');
    }

    if (workItemId != null) {

      workItem =  await _workItemService.getWorkItem(workItemId);

      workItemValues = await _workItemService.getWorkItemValues(workItemId: workItemId);
    }

    if (current.queryParameters.containsKey(AppRoutesQueryParam.workItemActualValueQueryParameter) && current.queryParameters[AppRoutesQueryParam.workItemActualValueQueryParameter] != null) {
      workItemValues.insert(0, WorkItemValue()
        ..date = DateTime.now()
        ..actualValue = double.tryParse(current.queryParameters[AppRoutesQueryParam.workItemActualValueQueryParameter])
        ..workItem = (WorkItem()..id = workItem.id..name = workItem.name));
      selectedWorkItemValue = workItemValues.first;
    }
  }

  @override
  void onDeactivate(RouterState current, RouterState next) {
    modalVisible = false;
  }

  void closeWorkItemValue() {
    modalVisible = false;
    _location.back();
  }

  void cancelWorkItemValue(WorkItemValue workItemValue, AsyncAction event) async {

    try {
      if (workItemValue.id == null) {
        workItemValues.remove(workItemValue);
      } else {
        workItemValues[workItemValues.indexOf(workItemValue)] = await _workItemService.getWorkItemValue(workItemValue.id);
      }
    } catch (e) {
      dialogError = e.toString();
      event.cancel();
      rethrow;
    }
  }

  void saveWorkItemValue(WorkItemValue workItemValue, AsyncAction event) async {

   if (workItemValues.indexWhere((mp) => mp.date == workItemValue.date && mp.id != workItemValue.id) != -1) {
      dialogError = actualValueExistsAtDateMsg;
      event.cancel();
    } else {
      try {

          /*String workItemValueId = */ await _workItemService.saveWorkItemValue(
              workItemValue);
          // Returns a new instance to get the generated data on the server side as well as having the last update.
        //  workItemValue =
        //  (await _workItemService.getWorkItemValues(workItemValueId: workItemValueId)).first;

        workItemValues =
        await _workItemService.getWorkItemValues(workItemId: workItem.id);

       // workItem = await _workItemService.getWorkItem(workItem.id);

      } catch (e) {
        dialogError = e.toString();
        event.cancel();
        rethrow;
      }
    }
  }

  void selectWorkItemValue(WorkItemValue workItemValue) async {
    if (workItemValue == null) {
      workItemValues.insert(0, WorkItemValue()..workItem = (WorkItem()..id = workItem.id..name = workItem.name));
      selectedWorkItemValue = workItemValues.first;
      selectedWorkItemValue.date = DateTime.now();
    } else {
      // Get a new instance to doesn't referenced the other.
      selectedWorkItemValue = workItemValue;
    }
  }

  void delete(WorkItemValue workItemValue) async {

    try {
      await _workItemService.deleteWorkItemValue(workItemValue);
      workItemValues = await _workItemService.getWorkItemValues(workItemId: workItem.id);
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }
  }

  bool validValue(double plannedValue, double actualValue) {
    if (plannedValue != null && actualValue != null) {
      if (plannedValue <= actualValue) {
          return false;
      }
    }
    return true;
  }

  void changedActualValue(WorkItemValue workItemValue, var actualValue) {
    if (!validValue(workItem.plannedValue, double.tryParse(actualValue))) {
      // errorControl.add(validCurrentValue);
      showActualValueErrorMsg = valueErrorMsg;
    } else {
      //  errorControl.remove(validCurrentValue);
      workItemValue.actualValue = double.tryParse(actualValue);
      showActualValueErrorMsg = null;
    }
    //   validInput = errorControl.isEmpty;
  }

  // String get unitLeadingText => measure?.unitOfMeasurement == null ? null : measure.unitOfMeasurement.symbol;
  String get unitLeadingText => workItem.unitOfMeasurement?.symbol == null ? null : workItem.unitOfMeasurement.symbol.contains(r'$') ? workItem.unitOfMeasurement.symbol : null;

  //String get unitTrailingText => measure?.unitOfMeasurement == null ? null :  measure.unitOfMeasurement.symbol;
  String get unitTrailingText => workItem.unitOfMeasurement?.symbol == null ? null : workItem.unitOfMeasurement.symbol.contains(r'$') ? workItem.unitOfMeasurement.symbol : null;

  Date getDate(WorkItemValue workItemValue) {
    Date _date;
    if (workItemValue?.date != null) {
      _date = new Date.fromTime(workItemValue.date);
    }
    return _date;
  }

  setDate(WorkItemValue workItemValue, Date _date)  {
    if (_date == null) {
      workItemValue.date = null;
    } else {
      workItemValue.date = _date.asUtcTime();
    }
  }

  set dialogError(String errorMsg) {
    error = errorMsg;
  }

  String get dialogError {
    return error;
  }

  double remainingValue(double plannedValue, double actualValue) {
    return plannedValue == null || actualValue == null ? null : plannedValue-actualValue;

  }
}
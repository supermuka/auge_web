// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:html' as html;

import 'package:chartjs/chartjs.dart';

import 'package:intl/intl.dart';

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

import 'package:auge_shared/domain/objective/measure.dart';

import 'package:auge_web/services/common_service.dart';
import 'package:auge_web/src/measure/measure_service.dart';

import 'package:auge_shared/message/messages.dart';
import 'package:auge_shared/message/domain_messages.dart';

import 'package:auge_web/route/app_routes.dart';

@Component(
    selector: 'auge-measure-progress',
    providers: [overlayBindings, datepickerBindings, MeasureService],
    templateUrl: 'measure_progress_component.html',
    styleUrls: const ['measure_progress_component.css'],
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

class MeasureProgressComponent implements OnInit, OnActivate, OnDeactivate  {

 // final ObjectiveService _objectiveService;
  final MeasureService _measureService;
  final Location _location;

  bool modalVisible = false;

  @ViewChild('canvas')
  html.CanvasElement ce;

  /*
  @Input()
  bool addMeasureProgress;

  @Input()
  DateTime objectiveStartDate;

  @Input()
  DateTime objectiveEndDate;

  @Input()
  Measure selectedMeasure;
*/

  /*oo
  Objective objective;
   */

  Measure measure;
  DateTime objectiveStartDate;
  DateTime objectiveEndDate;

  List<MeasureProgress> measureProgresses;

  bool editable;

  MeasureProgress selectedMeasureProgress;

  //String showStartValueErrorMsg;
  String showCurrentValueErrorMsg;
  //String showEndValueErrorMsg;

  MenuModel<MenuItem> menuModel;

  DateRange limitToDateRange =
  DateRange(Date.today().add(years: -1), Date.today().add(years: 10));

  Chart chart;

  MeasureProgressComponent(/*this._objectiveService, */ this._measureService, this._location) {
    // initializeDateFormatting(Intl.defaultLocale , null);
  }

  // Define messages and labels
  static final String measureProgressLabel = MeasureProgressMsg.label(MeasureProgressMsg.measureProgressLabel);
  static final String progressCurrentValuesLabel = MeasureProgressMsg.label(MeasureProgressMsg.progressCurrentValuesLabel);

  static final String currentValueLabel = MeasureProgressDomainMsg.fieldLabel(MeasureProgress.currentValueField);
  static final String dateLabel =  MeasureProgressDomainMsg.fieldLabel(MeasureProgress.dateField); //FieldMsg.label('${MeasureProgress.className}.${MeasureProgress.dateField}');
  static final String commentLabel =  MeasureProgressDomainMsg.fieldLabel(MeasureProgress.commentField);  //FieldMsg.label('${MeasureProgress.className}.${MeasureProgress.commentField}');

  static final String saveButtonLabel = CommonMsg.buttonLabel(CommonMsg.saveButtonLabel);
  static final String cancelButtonLabel = CommonMsg.buttonLabel(CommonMsg.cancelButtonLabel);
  static final String closeButtonLabel = CommonMsg.buttonLabel(CommonMsg.closeButtonLabel);

  static final String valueErrorMsg =  MeasureProgressMsg.valueErrorMsg();
  static final String currentValueExistsAtDateMsg =  MeasureProgressMsg.currentValueExistsAtDate();

  void ngOnInit() async {

    measureProgresses = [];
   //oo objective = Objective();
   // measure = Measure();
  }

  @override
  void onActivate(RouterState previous, RouterState current) async {

    modalVisible = true;
/*oo
    String objectiveId;

    if (current.parameters.containsKey(AppRoutesParam.objectiveIdParameter)) {
      objectiveId = current.parameters[AppRoutesParam.objectiveIdParameter];
    } else {
      throw Exception('Objective Id not found.');
    }
*/

    String measureId;
    if (current.parameters.containsKey(AppRoutesParam.measureIdParameter)) {
      measureId = current.parameters[AppRoutesParam.measureIdParameter];
    } else {
      throw Exception('Measure Id not found.');
    }

    if (measureId != null) {
      measure =  await _measureService.getMeasure(measureId);

      measureProgresses = await _measureService.getMeasureProgresses(measureId);
      // _sortMeasurePregressesOrderByDate(measureProgresses);
    }

    if (current.queryParameters.containsKey(AppRoutesQueryParam.measureCurrentValueQueryParameter) && current.queryParameters[AppRoutesQueryParam.measureCurrentValueQueryParameter] != null) {
      measureProgresses.insert(0, MeasureProgress()..date = DateTime.now()..currentValue = double.tryParse(current.queryParameters[AppRoutesQueryParam.measureCurrentValueQueryParameter]));
      selectedMeasureProgress = measureProgresses.first;
    }

    if (current.queryParameters.containsKey(AppRoutesQueryParam.objectiveStartDateQueryParameter)) {
      objectiveStartDate = DateTime.tryParse(current.queryParameters[AppRoutesQueryParam.objectiveStartDateQueryParameter]);
    } else {
      objectiveStartDate = null;
    }
    if (current.queryParameters.containsKey(AppRoutesQueryParam.objectiveEndDateQueryParameter )) {
      objectiveEndDate = DateTime.tryParse(current.queryParameters[AppRoutesQueryParam.objectiveEndDateQueryParameter]);
    } else {
      objectiveEndDate = null;
    }

    buildChart();

  }

 Future<void> buildChart() async {
    List<String> months = [];
    List<num> values = [];

    defineMonthsValuesProgress(months, values);

    LinearChartData data = LinearChartData(labels: months, datasets: <ChartDataSets>[
      ChartDataSets(
          label: 'Start to End Value',
          backgroundColor: 'rgba(220,220,220,0.2)',
          fill: false,
          data: [ChartPoint(x: months.first, y: measure.startValue), ChartPoint(x: months.last, y: measure.endValue)]
      ),
      ChartDataSets(
          label: 'Current Value Reviews',
          backgroundColor: 'rgba(151,187,205,0.2)',
          data: values
        /* data: months.map((_) => rnd.nextInt(100)).toList()*/)
    ]);

    ChartConfiguration config = ChartConfiguration(
        type: 'line', data: data, options: new ChartOptions(responsive: true,
      title: ChartTitleOptions(display: true, text: 'Measure ' + measure.name),

    ));

    // Modal, needs to await the dom elements creation.
    // new Future.delayed(Duration.zero, () {

    // html.CanvasElement ce = html.querySelector('#canvas') as html.CanvasElement;

    if (ce != null) {
      chart = Chart(ce, config);
    }
  }

  @override
  void onDeactivate(RouterState current, RouterState next) {
    modalVisible = false;
  }

  defineMonthsValuesProgress(List<String> months, List<num>values) {
    int yearsCount = 1;
    if (objectiveStartDate != null && objectiveEndDate != null && objectiveStartDate.year != objectiveEndDate.year)
      yearsCount = yearsCount + objectiveEndDate.year - objectiveStartDate.year;

    int firstYear = objectiveStartDate?.year ?? objectiveEndDate?.year ?? DateTime.now().year;

    List<int> yearsInterval = [];
    for (int iYear = 0;iYear<yearsCount;iYear++) {
      yearsInterval.add((firstYear + iYear));
    }

    int iMesuareProgress;
    String monthFormated;
    for (int iYear = 0;iYear<yearsInterval.length;iYear++) {
      for (int iMonth = 0; iMonth < DateTime.monthsPerYear; iMonth++) {
        monthFormated =
            DateFormat.yMMM().format(DateTime(yearsInterval[iYear], iMonth + 1));
        iMesuareProgress =
            measureProgresses.indexWhere((mp) => DateFormat.yMMM().format(
                mp.date) == monthFormated);

        if (iMesuareProgress != -1) {
          for (int iiMeasureProgress = iMesuareProgress; iiMeasureProgress <
              measureProgresses.length; iiMeasureProgress++) {
            if (monthFormated != DateFormat.yMMM().format(
                measureProgresses[iiMeasureProgress].date)) break;

            months.add(DateFormat.yMMMd().format(
                measureProgresses[iiMeasureProgress].date));
            values.add(measureProgresses[iiMeasureProgress].currentValue);
          }
        } else {
          months.add(monthFormated);
          values.add(null);
        }
      }
    }
  }

  updateChart() {
    if (chart != null) {
      List<String> months = [];
      List<num> values = [];
      defineMonthsValuesProgress(months, values);
      chart.data.labels = months;
      chart.data.datasets[1].data = values;
      chart.update();
    }
  }

  void closeMeasureProgress() {
   // _closeController.add(null);
    modalVisible = false;
    _location.back();
  }

  void cancelMeasureProgress(MeasureProgress measureProgress, AsyncAction event) async {

    try {
      if (measureProgress.id == null) {
        measureProgresses.remove(measureProgress);        
      } else {
        measureProgresses[measureProgresses.indexOf(measureProgress)] = await _measureService.getMeasureProgressById(measureProgress.id);
      }
      // _sortMeasurePregressesOrderByDate(measureProgresses);
      updateChart();
    } on Exception {
      event.cancel();
      rethrow;
    }
  }

  void saveMeasureProgress(MeasureProgress measureProgress, AsyncAction event) async {

   if (measureProgresses.indexWhere((mp) => mp.date == measureProgress.date && mp.id != measureProgress.id) != -1) {
      dialogError = currentValueExistsAtDateMsg;
      event.cancel();
    }
    else if (objectiveStartDate != null && measureProgress.date.compareTo(objectiveStartDate) < 0 || objectiveEndDate != null && measureProgress.date.compareTo(objectiveEndDate) > 0) {
      dialogError = MeasureMsg.currentDateNotBetweenStartEndDate(DateFormat.yMMMd().format(objectiveStartDate), DateFormat.yMMMd().format(objectiveEndDate));
      event.cancel();
    } else {
      try {
        if (measure.startValue != null ||
            measure.endValue != null) {
          measure.startValue <= measure.endValue
              ? measure.currentValue = measureProgress.currentValue
              : measure.currentValue =
              measure.startValue + measure.endValue -
                  measureProgress.currentValue;

          String measureProgressId = await _measureService.saveMeasureProgress(
              measure.id, measureProgress);
          // Returns a new instance to get the generated data on the server side as well as having the last update.
          measureProgress =
          await _measureService.getMeasureProgressById(measureProgressId);
        }

        measureProgresses =
        await _measureService.getMeasureProgresses(measure.id);
        // _sortMeasurePregressesOrderByDate(measureProgresses);

      } catch (e) {
        dialogError = e.toString();
        event.cancel();
        rethrow;
      }
    }
  }

  void selectMeasureProgress(MeasureProgress measureProgress) async {
    if (measureProgress == null) {
      measureProgresses.insert(0, MeasureProgress());
      selectedMeasureProgress = measureProgresses.first;
      selectedMeasureProgress.date = DateTime.now();
    } else {
      // Get a new instance to doesn't referenced the other.
      selectedMeasureProgress = measureProgress;
    }
  }

  /// Call a soft (logic) delete
  void delete(MeasureProgress measureProgress) async {

    try {
      await _measureService.deleteMeasureProgress(measureProgress);
      measureProgresses = await _measureService.getMeasureProgresses(measure.id);
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }
  }

  bool validValue(double startValue, double currentValue, double endValue) {
    if (startValue != null && currentValue != null && endValue != null) {
      if (startValue <= endValue) {
        if (currentValue < startValue ||
            currentValue > endValue) {
          return false;
        }
      } else if (startValue > endValue) {
        if (currentValue > startValue ||
            currentValue < endValue) {
          return false;
        }
      }
    }
    return true;
  }
/*
  void changedStartValue(String startValue) {
    if (!validValue(double.tryParse(startValue), measure.currentValue, measure.endValue)) {
      //   errorControl.add(validStartValue);
      showStartValueErrorMsg = valueErrorMsg;
    } else {
      //    errorControl.remove(validStartValue);
      showStartValueErrorMsg = null;
    }
//    validInput = errorControl.isEmpty;
  }
*/
  void changedCurrentValue(MeasureProgress measureProgress, var currentValue) {
    if (!validValue(measure.startValue, double.tryParse(currentValue), measure.endValue)) {
      // errorControl.add(validCurrentValue);
      showCurrentValueErrorMsg = valueErrorMsg;
    } else {
      //  errorControl.remove(validCurrentValue);
      measureProgress.currentValue = double.tryParse(currentValue);
      updateChart();
      showCurrentValueErrorMsg = null;
    }
    //   validInput = errorControl.isEmpty;
  }

  // String get unitLeadingText => measure?.unitOfMeasurement == null ? null : measure.unitOfMeasurement.symbol;
  String get unitLeadingText => measure.unitOfMeasurement.symbol == null ? null : measure.unitOfMeasurement.symbol.contains(r'$') ? measure.unitOfMeasurement.symbol : null;

  //String get unitTrailingText => measure?.unitOfMeasurement == null ? null :  measure.unitOfMeasurement.symbol;
  String get unitTrailingText => measure.unitOfMeasurement.symbol == null ? null : measure.unitOfMeasurement.symbol.contains(r'$') ? measure.unitOfMeasurement.symbol : null;

  Date getDate(MeasureProgress measureProgress) {
    Date _date;
    if (measureProgress?.date != null) {
      _date = new Date.fromTime(measureProgress.date);
    }
    return _date;
  }

  setDate(MeasureProgress measureProgress, Date _date)  {
    if (_date == null) {
      measureProgress.date = null;
    } else {
      measureProgress.date = _date.asUtcTime();
      // _sortMeasurePregressesOrderByDate(measureProgresses);
      updateChart();
    }
  }

  set dialogError(String errorMsg) {
    error = errorMsg;
  }

  String get dialogError {
    return error;
  }

  // Order by to date
  /*
  void _sortMeasurePregressesOrderByDate(List<MeasureProgress> measureProgresses) {
    // measureProgresses.sort((a, b) => a?.date == null || b?.date == null ? -1 : a.date.compareTo(b.date));
    measureProgresses.sort((a, b) => a.date == null || b.date == null  ? -1 : a.date.compareTo(b.date)*-1);
  }
  */

}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:html';
import 'dart:async';

import 'package:chartjs/chartjs.dart';

import 'package:intl/intl.dart';
import 'package:intl/date_symbol_data_local.dart';

import 'package:angular/angular.dart';
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
import 'package:angular_components/utils/browser/window/module.dart';
import 'package:angular_components/material_datepicker/material_datepicker.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/model/action/async_action.dart';

import 'package:auge_server/model/objective/measure.dart';

import 'package:auge_web/services/common_service.dart';
import 'package:auge_web/src/measure/measure_service.dart';
import 'package:auge_web/message/messages.dart';

@Component(
    selector: 'auge-measure-progress',
    providers: [overlayBindings, windowBindings, datepickerBindings, MeasureService],
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
    pipes: const [commonPipes],
    templateUrl: 'measure_progress_component.html',
    styleUrls: const [
      'measure_progress_component.css'
    ])

class MeasureProgressComponent implements OnInit {

  final MeasureService _measureService;

  @Input()
  bool addMeasureProgress;

  @Input()
  DateTime objectiveStartDate;

  @Input()
  DateTime objectiveEndDate;

  @Input()
  Measure selectedMeasure;

  List<MeasureProgress> measureProgresses;

  final _closeController = new StreamController<void>.broadcast(sync: true);

  /// Publishes events when close.
  @Output()
  Stream<void> get closed => _closeController.stream;

  final _savedController = new StreamController<void>.broadcast(sync: true);

  /// Publishes events when save.
  @Output()
  Stream<void> get saved => _savedController.stream;

  bool editable;

  MeasureProgress selectedMeasureProgress;

  String showStartValueErrorMsg;
  String showCurrentValueErrorMsg;
  String showEndValueErrorMsg;

  MenuModel<MenuItem> menuModel;

  DateRange limitToDateRange =
  new DateRange(new Date.today().add(years: -1), new Date.today().add(years: 10));

  Chart chart;

  MeasureProgressComponent(this._measureService) {
    initializeDateFormatting(Intl.defaultLocale , null);
  }

  // Define messages and labels
  static final String progressLabel = MeasureMsg.label('Progress');
  static final String startValueLabel = MeasureMsg.label('Start Value');
  static final String currentValueLabel = MeasureMsg.label('Current Value');
  static final String endValueLabel = MeasureMsg.label('End Value');
  static final String dateLabel = MeasureMsg.label('Date');

  static final String saveButtonLabel = CommonMsg.buttonLabel('Save');
  static final String cancelButtonLabel = CommonMsg.buttonLabel('Cancel');

  static final String valueErrorMsg =  MeasureMsg.valueErrorMsg();
  static final String currentValueExistsAtDateMsg =  MeasureMsg.currentValueExistsAtDate();

  void ngOnInit() async {
    if (selectedMeasure != null) {
      measureProgresses = await _measureService.getMeasureProgress(selectedMeasure.id);
      _sortMeasurePregressesOrderByDate(measureProgresses);
    }

    if (addMeasureProgress) {
      measureProgresses.insert(0, MeasureProgress()..date = DateTime.now()..currentValue = selectedMeasure.currentValue);
      selectedMeasureProgress = measureProgresses.first;
    }

    List<String> months = [];
    List<num> values = [];
    defineMonthsValuesProgress(months, values);

    var data = new LinearChartData(labels: months, datasets: <ChartDataSets>[
      new ChartDataSets(
          label: 'Start to End Value',
          backgroundColor: 'rgba(220,220,220,0.2)',
          fill: false,
          data: [ChartPoint(x: months.first, y: selectedMeasure.startValue), ChartPoint(x: months.last, y: selectedMeasure.endValue)]
      ),
      new ChartDataSets(
          label: 'Current Value Reviews',
          backgroundColor: 'rgba(151,187,205,0.2)',
          data: values
        /* data: months.map((_) => rnd.nextInt(100)).toList()*/)
    ]);

    var config = new ChartConfiguration(
        type: 'line', data: data, options: new ChartOptions(responsive: true,
      title: ChartTitleOptions(display: true, text: 'Measure ' + selectedMeasure.name),

    ));

    // Modal, needs to await the dom elements creation.
    new Future.delayed(Duration.zero, () {

      CanvasElement ce = querySelector('#canvas') as CanvasElement;

      if (ce != null) {
        chart = new Chart(ce, config);

      }
    });
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

  void closeChart() {
    _closeController.add(null);
  }

  void cancelMeasureProgress(MeasureProgress measureProgress, AsyncAction event) async {

    try {
      if (measureProgress.id == null) {
        measureProgresses.remove(measureProgress);        
      } else {
        measureProgresses[measureProgresses.indexOf(measureProgress)] = await _measureService.getMeasureProgressById(measureProgress.id);
      }
      _sortMeasurePregressesOrderByDate(measureProgresses);
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
      dialogError = MeasureMsg.currentDateNotBetweenStartEndDate(objectiveStartDate, objectiveEndDate);
      event.cancel();
    } else {
      try {
        if (selectedMeasure.startValue != null ||
            selectedMeasure?.endValue != null) {
          selectedMeasure.startValue <= selectedMeasure.endValue
              ? selectedMeasure.currentValue = measureProgress.currentValue
              : selectedMeasure.currentValue =
              selectedMeasure.startValue + selectedMeasure.endValue -
                  measureProgress.currentValue;

          String measureProgressId = await _measureService.saveMeasureProgress(
              selectedMeasure.id, measureProgress);
          // Returns a new instance to get the generated data on the server side as well as having the last update.
          measureProgress =
          await _measureService.getMeasureProgressById(measureProgressId);
        }

        measureProgresses =
        await _measureService.getMeasureProgress(selectedMeasure.id);
        _sortMeasurePregressesOrderByDate(measureProgresses);

        _savedController.add(null);
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

      // Created just to pass instance from TimelineItem. No addition data is need, just [id, isDeleted and deletedBy].
      measureProgress.isDeleted = true;
      //--measureProgress.lastHistoryItem.setClientSideValues(user: _authService.authenticatedUser, description: null, /* changedValues: MeasureProgressFacilities.differenceToJson(measureProgress, selectedMeasureProgress) */ );
    } catch (e) {
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

  void changedStartValue(String startValue) {
    if (!validValue(double.tryParse(startValue), selectedMeasure?.currentValue, selectedMeasure?.endValue)) {
      //   errorControl.add(validStartValue);
      showStartValueErrorMsg = valueErrorMsg;
    } else {
      //    errorControl.remove(validStartValue);
      showStartValueErrorMsg = null;
    }
//    validInput = errorControl.isEmpty;
  }

  void changedCurrentValue(MeasureProgress measureProgress, var currentValue) {
    if (!validValue(selectedMeasure?.startValue, double.tryParse(currentValue), selectedMeasure?.endValue)) {
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

  // String get unitLeadingText => measure?.measureUnit == null ? null : measure.measureUnit.symbol;
  String get unitLeadingText => selectedMeasure?.measureUnit?.symbol == null ? null : selectedMeasure.measureUnit.symbol.contains(r'$') ? selectedMeasure.measureUnit.symbol : null;

  //String get unitTrailingText => measure?.measureUnit == null ? null :  measure.measureUnit.symbol;
  String get unitTrailingText => selectedMeasure?.measureUnit?.symbol == null ? null : !selectedMeasure.measureUnit.symbol.contains(r'$') ? selectedMeasure.measureUnit.symbol : null;



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
      _sortMeasurePregressesOrderByDate(measureProgresses);
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
  void _sortMeasurePregressesOrderByDate(List<MeasureProgress> measureProgresses) {
    // measureProgresses.sort((a, b) => a?.date == null || b?.date == null ? -1 : a.date.compareTo(b.date));
    measureProgresses.sort((a, b) => a.date == null || b.date == null  ? -1 : a.date.compareTo(b.date)*-1);
  }
}
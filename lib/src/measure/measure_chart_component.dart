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

import 'package:angular_components/material_dialog/material_dialog.dart';

import 'package:auge_web/src/measure/measure_service.dart';

import 'package:auge_server/model/objective/measure.dart';
import 'package:auge_server/model/objective/objective.dart';

@Component(
    selector: 'auge-measure-chart',
    providers: [MeasureService, overlayBindings],
    directives: const [
      coreDirectives,
      AutoFocusDirective,
      ModalComponent,
      MaterialDialogComponent,
      MaterialButtonComponent,
      MaterialIconComponent,
    ],
    pipes: const [commonPipes],
    templateUrl: 'measure_chart_component.html',
    styleUrls: const [
      'measure_chart_component.css'
    ])

class MeasureChartComponent implements OnInit {

  final MeasureService _measureService;
  bool visibleModal = false;

  @Input()
  Objective objective;

  @Input()
  Measure selectedMeasure;
  List<MeasureProgress> measureProgress;

  final _closeController = new StreamController<void>.broadcast(sync: true);

  /// Publishes events when close.
  @Output()
  Stream<void> get close => _closeController.stream;

  MeasureChartComponent(this._measureService) {
    initializeDateFormatting(Intl.defaultLocale , null);
  }

  void ngOnInit() async {
    if (selectedMeasure != null) {
      measureProgress = await _measureService.getMeasureProgress(selectedMeasure.id);
    }

    List<String> months = [];
    List<num> values = [];

    int yearsCount = 1;
    if (objective.startDate != null && objective.endDate != null && objective.startDate.year != objective.endDate.year)
      yearsCount = yearsCount + objective.endDate.year - objective.startDate.year;

    int firstYear = objective.startDate?.year ?? objective.endDate?.year ?? DateTime.now().year;

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
            measureProgress.indexWhere((mp) => DateFormat.yMMM().format(
                mp.dateTime) == monthFormated);

        if (iMesuareProgress != -1) {
          for (int iiMeasureProgress = iMesuareProgress; iiMeasureProgress <
              measureProgress.length; iiMeasureProgress++) {
            if (monthFormated != DateFormat.yMMM().format(
                measureProgress[iiMeasureProgress].dateTime)) break;
            /*
            if (iiMeasureProgress == iMesuareProgress) {
              months.add(monthFormated);
            } else {
              months.insert(months.length-1, '');

            }
            */
            months.add(DateFormat.yMMMd().format(
                measureProgress[iiMeasureProgress].dateTime));
            values.add(measureProgress[iiMeasureProgress].currentValue);
          }
        } else {
          months.add(monthFormated);
          values.add(null);
        }
      }
    }
    print('MONTHS');
    print(months.length);
    months.forEach((f) => print(f));
    print('VALUES');
    print(values.length);
    values.forEach((f) => print(f));

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
        new Chart(ce, config);
      }

      visibleModal = true;
    });
  }


  void closeChart() {
    _closeController.add(null);
  }
}
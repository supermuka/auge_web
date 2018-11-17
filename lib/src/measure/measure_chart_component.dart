// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:html';
import 'dart:math' as math;
import 'dart:async';

import 'package:chartjs/chartjs.dart';

import 'package:angular/angular.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';

import 'package:angular_components/material_dialog/material_dialog.dart';

import 'package:auge_web/src/measure/measure_service.dart';

import 'package:auge_server/model/objective/measure.dart';

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

class MeasureChartComponent implements OnInit, AfterViewInit {

  final MeasureService _measureService;
  bool visibleModal = false;

  Measure selectedMeasure;
  List<MeasureProgress> measureProgress;

  final _closeController = new StreamController<void>.broadcast(sync: true);

  /// Publishes events when close.
  @Output()
  Stream<void> get close => _closeController.stream;

  final _saveController = new StreamController<Measure>.broadcast(sync: true);

  MeasureChartComponent(this._measureService) {

  }

  void ngOnInit() async {
    if (selectedMeasure != null) {
      measureProgress = await _measureService.getMeasureProgress(selectedMeasure.id);
    }
  }

  void ngAfterViewInit() {
    var rnd = new math.Random();
    var months = <String>['January', 'February', 'March', 'April', 'May', 'June'];
    var data = new LinearChartData(labels: months, datasets: <ChartDataSets>[
      new ChartDataSets(
          label: 'My First dataset',
          backgroundColor: 'rgba(220,220,220,0.2)',
          fill: false,
          //data: months.map((_) => rnd.nextInt(100)).toList()
          /*data: [0, 20, 40, 60, 80, 100]*/
        /*  data: [{'x': months.first, 'y': 0}, {'x': months.last, 'y': 100}]  */
          data: [ChartPoint(x: months.first, y: 0), ChartPoint(x: months.last, y: 100)]
      ),
      new ChartDataSets(
          label: 'My Second dataset',
          backgroundColor: 'rgba(151,187,205,0.2)',
          data: months.map((_) => rnd.nextInt(100)).toList())
    ]);

    var config = new ChartConfiguration(
        type: 'line', data: data, options: new ChartOptions(responsive: true,
        title: ChartTitleOptions(display: true, text: 'TITLE'),
        /* scales: ChartScales(display: true, type: 'time') */));

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
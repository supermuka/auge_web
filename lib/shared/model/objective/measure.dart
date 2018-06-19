// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel

import 'package:intl/intl.dart';

/// Domain model class to represent an measure
class Measure {

  String id;

  String name;
  String description;
  String metric;
  MeasureUnit measureUnit;
  int decimalsNumber;
  double startValue;
  double endValue;
  double currentValue;

  NumberFormat _formatter;

  Measure() {
    decimalsNumber = 0; // default


  }

  int get startValueInt => startValue.toInt();
  set startValueInt(int value) => startValue = value.toDouble();

  int get endValueInt => endValue.toInt();
  set endValueInt(int value) => endValue = value.toDouble();

  int get currentValueInt => currentValue.toInt();
  set currentValueInt(int value) => currentValue = value.toDouble();

  double get startValueDecimal => startValue == null ? null : double.parse(startValue.toStringAsFixed(decimalsNumber));
  set startValueDecimal(double value) => startValue = value;

  double get endValueDecimal => endValue == null ? null : double.parse(endValue.toStringAsFixed(decimalsNumber));
  set endValueDecimal(double value) => endValue = value;

  double get currentValueDecimal => currentValue == null ? null : double.parse(currentValue.toStringAsFixed(decimalsNumber));
  set currentValueDecimal(double value) => currentValue = value;

  int get progress {
    int endMinusStartValue = (endValueInt - startValueInt);
    int progress;
    if (endMinusStartValue != null && endMinusStartValue != 0) {
      progress =
          (((currentValueInt ?? 0) - (startValueInt ?? 0)) / endMinusStartValue * 100)
              .toInt();
    }
    else {
      progress = 0;
    }
    return progress;
  }

}

class MeasureUnit {

  String id;

  String symbol;
  String name;

}


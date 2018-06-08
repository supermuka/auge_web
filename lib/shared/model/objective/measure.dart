// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel


/// Domain model class to represent an measure
class Measure {

  String id;

  String name;
  String description;
  String metric;
  MeasureUnit measureUnit;
  double startValue;
  double endValue;
  double currentValue;

  Measure() {

  }

  int get startValueInt => startValue.toInt();
  set startValueInt(int value) => startValue = value.toDouble();

  int get endValueInt => endValue.toInt();
  set endValueInt(int value) => endValue = value.toDouble();

  int get currentValueInt => currentValue.toInt();
  set currentValueInt(int value) => currentValue = value.toDouble();

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


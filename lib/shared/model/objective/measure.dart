import 'package:auge/shared/model/objective/measure_unit.dart';

class Measure {

  String id;

  String name;
  String description;
  String metric;
  MeasureUnit measureUnit;
  double startValue;
  double endValue;
  double currentValue;

  int get startValueInt => startValue.toInt();
  set startValueInt(int value) => startValue = value.toDouble();

  int get endValueInt => endValue.toInt();
  set endValueInt(int value) => endValue = value.toDouble();

  int get currentValueInt => currentValue.toInt();
  set currentValueInt(int value) => currentValue = value.toDouble();

  int get progress {
    int startPlusEndValue = (startValueInt + endValueInt);
    int progress;
    if (startPlusEndValue != null && startPlusEndValue > 0)
      progress = (currentValueInt ?? 0 / startPlusEndValue).toInt();
    else
      progress = 0;
    return progress;
  }
}
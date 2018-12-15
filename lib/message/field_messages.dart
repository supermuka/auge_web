import 'package:intl/intl.dart';

import 'package:auge_server/model/model_base.dart';
import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_server/model/objective/measure.dart';


/// Specific messages and label for [Objective] class field
class ObjectiveFieldMsg {

  /// Label for Insight
  static label(String fieldName) => Intl.message(
    "${Intl.select(fieldName, {
      Objective.idField: 'Id',
      Objective.nameField: 'Name',
      Objective.descriptionField: 'Description',
      Objective.leaderField: 'Leader',
      Objective.startDateField: 'Start Date',
      Objective.endDateField: 'End Date',
      'other': 'Not Defined'})}",
    name: "objectiveFieldLabel",
    args: [fieldName],
    // locale: "en",
    desc: "Objective class field labels",
  );
}

/// Specific messages and label for [Measure] class field
class MeasuereFieldMsg {

  /// Label for Measure
  static label(String fieldName) => Intl.message(
    "${Intl.select(fieldName, {
      Base.idField: 'Id',
      Measure.nameField: 'Name',
      Measure.descriptionField: 'Description',
      Measure.endValueField: 'End Value',
      Measure.startValueField: 'Start Value',
      Measure.currentValueField: 'Current Value',
      Measure.decimalsNumberField: 'Decimals Number',
      Measure.measureUnitField: 'Unit',
      Measure.metricField: 'Metric',
      'other': 'Not Defined'})}",
    name: "measureFieldLabel",
    args: [fieldName],
    // locale: "en",
    desc: "Measure class field labels",
  );

}
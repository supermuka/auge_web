import 'package:intl/intl.dart';

import 'package:auge_server/model/general/user.dart';
import 'package:auge_server/model/general/group.dart';
import 'package:auge_server/model/objective/objective.dart';
import 'package:auge_server/model/objective/measure.dart';


/// Specific messages and label for [User] class field
class CommonFieldAndValuesMsg {

  /// Label for Field User
  static labelAndValue(dynamic fieldName) => Intl.message(
    "${Intl.select(fieldName, {
      true: 'Yes',
      false: 'No',
      'other': 'Not Defined'})}",
    name: "commonFieldAndValuesLabel",
    args: [fieldName],
    // locale: "en",
    desc: "Common form field labels and values",
  );
}

/// Specific messages and label for [User] class field
class UserFieldMsg {

  /// Label for Field User
  static label(String fieldName) => Intl.message(
    "${Intl.select(fieldName, {
      User.nameField: 'Name',
      User.eMailField: 'e-Mail',
      User.passwordField: 'Password',
      'other': 'Not Defined'})}",
    name: "userFieldLabel",
    args: [fieldName],
    // locale: "en",
    desc: "User form field labels",
  );
}

/// Specific messages and label for [UserProfile] class field
class UserProfileFieldMsg {

  /// Label for Field User
  static label(String fieldName) => Intl.message(
    "${Intl.select(fieldName, {
      UserProfile.isSuperAdminField: 'Super Admin',
      UserProfile.imageField: 'Image',
      UserProfile.idiomLocaleField: 'Idioma',
      'other': 'Not Defined'})}",
    name: "userProfileFieldLabel",
    args: [fieldName],
    // locale: "en",
    desc: "User Profile form field labels",
  );

  /// Static value for User
  static valueLabel(String valueName) => Intl.message(
    "${Intl.select(valueName, {
      'pt_BR': 'Português - Brasil',
      'en_US': 'English - USA',
      'es_ES': 'Español - España',
      'other': 'Not Defined'})}",
    name: "userProfileFieldLabel",
    args: [valueName],
    // locale: "en",
    desc: "User Profile values labels",
  );


}

/// Specific messages and label for [Group] class field
class GroupFieldMsg {

  /// Label for Field User
  static label(String fieldName) => Intl.message(
    "${Intl.select(fieldName, {
      Group.nameField: 'Name',
      Group.activeField: 'Active',
      Group.leaderField: 'Leader',
      'other': 'Not Defined'})}",
    name: "groupFieldLabel",
    args: [fieldName],
    // locale: "en",
    desc: "Group form field labels",
  );
}

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
      Measure.idField: 'Id',
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
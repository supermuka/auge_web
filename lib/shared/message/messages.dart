import 'package:intl/intl.dart';

import 'package:auge/shared/i18n/messages_all.dart';

class CommonMessage {

  /// Commum Label
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'AUGE': 'AUGE',
        'Objectives and Initiatives': 'Objectives and Initiatives',
      })}",
      name: "label",
      args: [label],
      // locale: "en",
      desc: "Common labels",
      examples: const {"AUGE": "Auge"}
  );

  /// Label for edit button
  static buttonLabel(String label) => Intl.message(
      "${Intl.select(label, {
        'Edit': 'Edit',
        'Delete': 'Delete',
        'Save': 'Save',
        'Back': 'Back',
        'Upload': 'Upload',
        'Clear': 'Clear',
        'Login': 'Login',
        'Logout': 'Logout',
        'Select Photo': 'Select Photo',
        'other': 'Not Defined'})}",
      name: "buttonLabel",
      args: [label],
      // locale: "en",
      desc: "Label for buttons",
      examples: const {"label": "Edit"}
  );

  static requiredValueMsg() => Intl.message("Enter with a required value");
}


/// Specific messages and labels for [Authentication and Authorization]
class AuthMessage {

  /// Label for [Auth]
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'eMail': 'e-Mail',
        'Password': 'Password',
        'Login': 'Login',
        'Logout': 'Logout',
        'other': 'Not Defined'})}",
      name: "loginLabel",
      args: [label],
      // locale: "en",
      desc: "Authentication and authorizations labels",
      examples: const {"eMail": "e-mail"}
  );

  static informEMailPasswordCorrectlyMsg() => Intl.message("Inform an e-mail and password correctly.");
  static userNotFoundMsg() => Intl.message("User account with the informed email not found.");
  static organizationNotFoundMsg() => Intl.message("An organization to user account not found.");

}

/// Specific messages and labels for [AppLayout]
class AppLayoutMessage {

  /// Label for [AppLayout]
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Organization': 'Organization',
        'All Organizations': 'All Organizations',
        'Admin': 'Administration',
        'Super Admin': 'Super Administration',
        'User Detail': 'User Detail',
        'Logout': 'Logout',
        'Select': 'Select',
        'Insights': 'Insights',
        'Initiatives': 'Initiatives',
        'Objectives': 'Objectives',
        'Objectives Map': 'Objectives Map',
        'Users': 'Users',
        'All Users': 'All Users',
        'other': 'Not Defined'})}",
      name: "appLayoutLabel",
      args: [label],
      // locale: "en",
      desc: "Applayout labels",
      examples: const {"Select": "Select"}
  );
}


/// Specific messages and label for [Organization]
class OrganizationMessage {

  /// Label for organization
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Organizations': 'Organizations',
        'Edit Organization': 'Edit Organization',
        'Add Organization': 'Add Organization',
        'Name': 'Name',
        'Code': "EIN",
        'other': 'Not Defined'})}",
      name: "organizationLabel",
      args: [label],
      // locale: "en",
      desc: "Organization labels",
      examples: const {"Name": "Name"}
  );
}

/// Specific messages and label for [User]
class UserMessage {

  /// Label for user
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Users': 'Users',
        'Edit User': 'Edit User',
        'Add User': 'Add User',
        'Name': 'Name',
        'e-Mail': 'e-Mail',
        'Password': 'Password',
        'Authorization': 'Authorization',
        'UserAuthorization.superAdmin': 'Super Admin',
        'UserAuthorization.admin': 'Admin',
        'UserAuthorization.leader': 'Leader',
        'UserAuthorization.standard': 'Standard',
        'other': 'Not Defined'})}",
      name: "userLabel",
      args: [label],
      // locale: "en",
      desc: "Organization labels",
      examples: const {"Name": "Name"}
  );
}


/// Specific messages and label for [Initiative]
class InitiativeMessage {

  /// Label for initiative
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Initiatives': 'Initiatives',
        'Edit Initiative': 'Edit Initiative',
        'Add Initiative': 'Add Initiative',
        'Name': 'Name',
        'Description': 'Description',
        'Leader': 'Leader',
        'Stage': 'Stage',
        'Work Items Over Due': 'Work Items Over Due',
        'other': 'Not Defined'})}",
      name: "initiativeLabel",
      args: [label],
      // locale: "en",
      desc: "Initiative labels",
      examples: const {"Name": "Name"}
  );
}

/// Specific messages and label for [WorkItem]
class WorkItemMessage {

  /// Label for workitem
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Work Items': 'Work Items',
        'Edit Work Item': 'Edit Work Item',
        'Add Work Item': 'Add Work Item',
        'Name': 'Name',
        'Description': 'Description',
        'Due Date': 'Due Date',
        'Assigned To': 'Assigned To',
        'Stage': 'Stage',
        'Completed': 'Completed',
        'Select a value': 'Select a value',
        'Work Items Over Due': 'Work Items Over Due',
        'Check Item': 'Check Item',
        'Check Items': 'Check Items',
        'other': 'Not Defined'})}",
      name: "workItemLabel",
      args: [label],
      // locale: "en",
      desc: "Work Item labels",
      examples: const {"Name": "Name"}
  );
}

/// Specific messages and label for [Objective]
class ObjectiveMessage {

  /// Label for initiative
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Objectives': 'Objectives',
        'Edit Objective': 'Edit Objective',
        'Add Objective': 'Add Objective',
        'Name': 'Name',
        'Description': 'Description',
        'Start Date': 'Start Date',
        'End Date': 'End Date',
        'Aligned To': 'Aligned To',
        'Leader': 'Leader',
        'other': 'Not Defined'})}",
      name: "objectiveLabel",
      args: [label],
      // locale: "en",
      desc: "Objective labels",
      examples: const {"Name": "Name"}
  );
}

/// Specific messages and label for [Measure]
class MeasureMessage {

  /// Label for initiative
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Measures': 'Measures',
        'Edit Measure': 'Edit Measure',
        'Add Measure': 'Add Measure',
        'Name': 'Name',
        'Description': 'Description',
        'Metric': 'Metric',
        'Start Value': 'Start Value',
        'End Value': 'End Value',
        'Current Value': 'Current Value',
        'other': 'Not Defined'})}",
      name: "measuereLabel",
      args: [label],
      // locale: "en",
      desc: "Measure labels",
      examples: const {"Name": "Name"}
  );
}

/// Specific messages and label for [ObjectiveHierarchy]
class ObjectiveHierarchyMessage {

  /// Label for initiative
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Objectives Map': 'Objectives Map',
        'other': 'Not Defined'})}",
      name: "objectiveMapLabel",
      args: [label],
      // locale: "en",
      desc: "Objective Map labels"
  );
}
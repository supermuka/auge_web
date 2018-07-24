import 'package:intl/intl.dart';

import 'package:auge_web/message/i18n/messages_all.dart';

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
        'Close': 'Close',
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
  static serverApiErrorMsg() => Intl.message("Server not available.");

}

/// Specific messages and labels for [AppLayout]
class AppLayoutMessage {

  /// Label for [AppLayout]
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Organization': 'Organization',
        'Organizations': 'Organizations',
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
        'Groups': 'Groups',
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
        'Super Admin': 'Super Admin',
        'UserAuthorization.admin': 'Admin',
        'UserAuthorization.leader': 'Leader',
        'UserAuthorization.standard': 'Standard',
        'Photo': 'Photo',
        'Idiom': 'Idiom',
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
        'Objective': 'Objective',
        'Group': 'Group',
        'No Match': 'No Match',
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
        'Progress': 'Progress',
        'Group': 'Group',
        'No Match': 'No Match',
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

  /// Label for Measure
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
        'Progress': 'Progress',
        'Decimals': 'Decimals',
        'other': 'Not Defined'})}",
      name: "measureLabel",
      args: [label],
      // locale: "en",
      desc: "Measure labels"
  );

  /// Label for Measure Unit
  static measureUnitLabel(String label) => Intl.message(
      "${Intl.select(label, {
        'Percent': 'Percent',
        'Money': 'Money',
        'Index': 'Index',
        'Unitary': 'Unitary'})}",
      name: "measureUnitLabel",
      args: [label],
      // locale: "en",
      desc: "Measure Unit labels"
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

/// Specific messages and label for [Group]
class GroupMessage {

  /// Label for Group
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Groups': 'Groups',
        'Edit Group': 'Edit Group',
        'Add Group': 'Add Group',
        'Name': 'Name',
        'Description': 'Description',
        'Start Date': 'Start Date',
        'End Date': 'End Date',
        'Super Group': 'Super Group',
        'Leader': 'Leader',
        'Active': 'Active',
        'Group': 'Group',
        'No Match': 'No Match',
        'other': 'Not Defined'})}",
      name: "groupLabel",
      args: [label],
      // locale: "en",
      desc: "Group labels",
  );

  /// Label for Group Type
  static groupTypeLabel(String label) => Intl.message(
      "${Intl.select(label, {
        'Company': 'Company',
        'Business Unit': 'Business Unit',
        'Department': 'Department',
        'Team': 'Team'})}",
      name: "groupTypeLabel",
      args: [label],
      // locale: "en",
      desc: "Group type labels"
  );
}

/// Specific messages and label for [Insight]
class InsightMessage {

  /// Label for Insight
  static label(String label) => Intl.message(
    "${Intl.select(label, {
      'Objectives Overall': 'Objectives Overall',
      'Objectives': 'Objectives',
      'Objectives Achieved': 'Objectives Achieved',
      'Objectives Requiring Attention': 'Objectives Requiring Attention',
      'Measures': 'Measures',
      'Measures Achieved': 'Measures Achieved',
      'Measures Requiring Attention': 'Measures Requiring Attention',
      'Initiatives': 'Initiatives',
      'Initiatives Completed': 'Initiatives Completed',
      'Initiatives Requiring Attention': 'Initiatives Requiring Attention',
      'Work Items': 'Work Items',
      'Work Items Completed': 'Work Items Completed',
      'Work Items Requiring Attention': 'Work Items Requiring Attention',
      'other': 'Not Defined'})}",
    name: "insightLabel",
    args: [label],
    // locale: "en",
    desc: "Insight labels",
  );

}
import 'package:intl/intl.dart';

class CommonMsg {

  /// Commum Label
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'AUGE': 'AUGE',
        'Objectives and Initiatives': 'Objectives and Initiatives',
        'other': 'Not Defined'})}",
      name: "label",
      args: [label],
      // locale: "en",
      desc: "Common labels",
      examples: const {"AUGE": "Auge"}
  );

  /// Label for edit button
  static buttonLabel(String label) => Intl.message(
      "${Intl.select(label, {
        'Apply': 'Apply',
        'Edit': 'Edit',
        'Delete': 'Delete',
        'Save': 'Save',
        'Cancel': 'Cancel',
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
class AuthMsg {

  /// Label for [Auth]
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'eMail': 'e-Mail',
        'Password': 'Password',
        'Select': 'Select',
        'Super Admin': 'Super Admin',
        'Organization': 'Organization',
        'All Organizations': 'All Organizations',
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
  static browserCompatibleErrorMsg() => Intl.message("Browser Compatible: Chrome");

}

/// Specific messages and labels for [AppLayout]
class AppLayoutMsg {

  /// Label for [AppLayout]
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Organization': 'Organization',
        'Organizations': 'Organizations',
        'Admin': 'Administration',
        'User Detail': 'User Detail',
        'Logout': 'Logout',
        'Insights': 'Insights',
        'Initiatives': 'Initiatives',
        'Objectives': 'Objectives',
        'Objectives Map': 'Objectives Map',
        'Objectives Gantt': 'Objectives Gantt',
        'Users': 'Users',
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
class OrganizationMsg {

  /// Label for organization
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Organizations': 'Organizations',
        'Edit Organization': 'Edit Organization',
        'Add Organization': 'Add Organization',
        'other': 'Not Defined'})}",
      name: "organizationLabel",
      args: [label],
      // locale: "en",
      desc: "Organization labels",
      examples: const {"Name": "Name"}
  );
}

/// Specific messages and label for [User]
class UserMsg {

  /// Label for user
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Users': 'Users',
        'User': 'User',
        'Edit User': 'Edit User',
        'Add User': 'Add User',
        'SystemRole.superAdmin': 'Super Admin',
        'SystemRole.admin': 'Admin',
        'SystemRole.standard': 'Standard',
        'other': 'Not Defined'})}",
      name: "userLabel",
      args: [label],
      // locale: "en",
      desc: "Organization labels",
      examples: const {"Name": "Name"}
  );
}


/// Specific messages and label for [Initiative]
class InitiativeMsg {

  /// Label for initiative
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Initiatives': 'Initiatives',
        'Sorted By': 'Sorted By',
        'Edit Initiative': 'Edit Initiative',
        'Add Initiative': 'Add Initiative',
        'Objective': 'Objective',
        'Work Items Over Due': 'Work Items Over Due',
        'No Match': 'No Match',
        'Select': 'Select',
        'Filter Initiatives': 'Filter Initiatives',
        'other': 'Not Defined'})}",
      name: "initiativeLabel",
      args: [label],
      // locale: "en",
      desc: "Initiative labels",
      examples: const {"Name": "Name"}
  );
}


/// Specific messages and label for [Stage]
class StageMsg {

  /// Label
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Initiative Stages': 'Initiative Stages',
        'Stage': 'Stage',
        'Select': 'Select',
        'other': 'Not Defined'})}",
      name: "stageLabel",
      args: [label],
      // locale: "en",
      desc: "Stage labels"
  );

  static stateNotInfomedMsg() => Intl.message("State not informed.");

}

/// Specific messages and label for [WorkItem]
class WorkItemMsg {

  /// Label for workitem
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Work Items': 'Work Items',
        'Edit Work Item': 'Edit Work Item',
        'Add Work Item': 'Add Work Item',
        'Select a value': 'Select a value',
        'Work Items Over Due': 'Work Items Over Due',
        'Check Item': 'Check Item',
        'other': 'Not Defined'})}",
      name: "workItemLabel",
      args: [label],
      // locale: "en",
      desc: "Work Item labels",
      examples: const {"Name": "Name"}
  );
}


/// Specific messages and label for [Objective]
class ObjectiveMsg {

  /// Label for initiative
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Objectives': 'Objectives',
        'Edit Objective': 'Edit Objective',
        'Add Objective': 'Add Objective',
        'Progress': 'Progress',
        'No Match': 'No Match',
        'Sorted By': 'Sorted By',
        'other': 'Not Defined'})}",
      name: "objectiveLabel",
      args: [label],
      // locale: "en",
      desc: "Objective labels",
      examples: const {"Name": "Name"}
  );
}

/// Specific messages and label for [Map]
class MapMsg {

  /// Label for initiative
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Objectives Map': 'Objectives Map',
        'other': 'Not Defined'})}",
      name: "mapLabel",
      args: [label],
      // locale: "en",
      desc: "Map labels",
      examples: const {"Leader": "Leader"}
  );
}

/// Specific messages and label for [Gantt]
class GanttMsg {

  /// Label for initiative
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Objectives Gantt': 'Objectives Gantt',
        'other': 'Not Defined'})}",
      name: "ganttLabel",
      args: [label],
      // locale: "en",
      desc: "Gantt labels",
      examples: const {"Group": "Group"}
  );
}

/// Specific messages and label for [Measure]
class MeasureMsg {

  /// Label for Measure
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Measures': 'Measures',
        'Edit Measure': 'Edit Measure',
        'Add Measure': 'Add Measure',
        'Progress': 'Progress',
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

  static valueErrorMsg() => Intl.message("Current value should be between Start and End value.");
  static currentDateNotBetweenStartEndDate(DateTime startDate, DateTime endDate) => Intl.message("Measure progress date should be between objective start date ${DateFormat.yMMMd().format(startDate)} and objective end date ${DateFormat.yMMMd().format(endDate)}.");
  static decimalNumberErrorMsg() => Intl.message("Decimal number should be between 0 and 5.");
}


/// Specific messages and label for [MeasureProgress]
class MeasureProgressMsg {

  /// Label for Measure
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Measure Progress': 'Measure Progress',
        'Progress Current Values': 'Progress Current Values',
        'other': 'Not Defined'})}",
      name: "measureProgressLabel",
      args: [label],
      // locale: "en",
      desc: "Measure Progresslabels"
  );

  static valueErrorMsg() => Intl.message("Current value should be between Start and End value.");
  static currentValueExistsAtDate() => Intl.message("Current value already exists at date informed.");
}




/// Specific messages and label for [ObjectiveHierarchy]
/*
class ObjectiveViewsMsg {

  /// Label for initiative
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Objectives Map': 'Objectives Map',
        'Objectives Gantt': 'Objectives Gantt',
        'other': 'Not Defined'})}",
      name: "objectiveMapLabel",
      args: [label],
      // locale: "en",
      desc: "Objective Map labels"
  );
}
*/

/// Specific messages and label for [Group]
class GroupMsg {

  /// Label for Group
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'Groups': 'Groups',
        'Edit Group': 'Edit Group',
        'Add Group': 'Add Group',
        'No Match': 'No Match',
        'Active': 'Active',
        'Inactive': 'Inactive',
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
class InsightMsg {

  /// Label for Insight
  static label(String label) => Intl.message(
    "${Intl.select(label, {
      'Objectives Overall': 'Objectives Overall',
      'Objectives and Measures': 'Objectives and Measures',
      'Initiatives and Work Items': 'Initiatives and Work Items',
      'Objectives': 'Objectives',
      'Objectives Achieved': 'Objectives Achieved',
      'Objectives Requiring Attention': 'Objectives Requiring Attention',
      'Number total of objectives': 'Number total of objectives',
      'Objectives over 70% progress': 'Objectives over 70% progress',
      'Objectives below 30% progress': 'Objectives below 30% progress',

      'Measures': 'Measures',
      'Measures Achieved': 'Measures Achieved',
      'Measures Requiring Attention': 'Measures Requiring Attention',
      'Number total of measures': 'Number total of measures',
      'Measures over 70% progress': 'Measures over 70% progress',
      'Measures below 30% progress': 'Measures below 30% progress',

      'Initiatives': 'Initiatives',
      'Initiatives Completed': 'Initiatives Completed',
      'Initiatives Requiring Attention': 'Initiatives Requiring Attention',
      'Initiatives with 100% work items completed': 'Initiatives with 100% work items completed',
      'Initiatives with over due work items':'Initiatives with over due work items',

      'Work Items': 'Work Items',
      'Work Items Completed': 'Work Items Completed',
      'Work Items Requiring Attention': 'Work Items Requiring Attention',
      'Number total of work items': 'Number total of work items',
      'Work items with 100% progress': 'Work items with 100% progress',
      'Over due work items': 'Over due work items',

      'other': 'Not Defined'})}",
    name: "insightLabel",
    args: [label],
    // locale: "en",
    desc: "Insight labels",
  );
}

/// Specific messages and label for [SystemFunction]
class SystemFunctionMsg {

  /// Label for Insight
  static inPastLabel(String functionName) => Intl.message(
    "${Intl.select(functionName, {
      'SystemFunction.create': 'Created',
      'SystemFunction.update': 'Updated',
      'SystemFunction.delete': 'Deleted',
      'SystemFunction.read': 'Read',
      'other': 'Not Defined'})}",
    name: "systemFunctionLabel",
    args: [functionName],
    // locale: "en",
    desc: "System Function labels",
  );
}


/// Specific messages and label for [TimelineItem] class field
class TimelineItemdMsg {

  /// Label for Insight
  static label(String fieldName) => Intl.message(
    "${Intl.select(fieldName, {
      'Timeline': 'Timeline',
      'day ago': 'day ago',
      'days ago': 'days ago',
      'hour ago': 'hour ago',
      'hours ago': 'hours ago',
      'minute ago': 'minutes ago',
      'minutes ago': 'minutes ago',
      'second ago': 'second ago',
      'seconds ago': 'seconds ago',
      'value': 'value',
      'the': 'the',
      'changed from': 'changed from',
      'was': 'was',
      'other': 'Not Defined'})}",
    name: "labelLabel",
    args: [fieldName],
    // locale: "en",
    desc: "TimelineItem labels",
  );
}
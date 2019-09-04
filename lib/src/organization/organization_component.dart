// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:convert' show json;

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:auge_web/services/app_routes.dart';

import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';

import 'package:angular_components/material_toggle/material_toggle.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/material_tab/material_tab.dart';
import 'package:angular_components/material_tab/material_tab_panel.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_input/material_number_accessor.dart';
import 'package:angular_components/material_select/material_dropdown_select.dart';
import 'package:angular_components/material_select/material_dropdown_select_accessor.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/model/ui/has_renderer.dart';
import 'package:angular_components/material_spinner/material_spinner.dart';

import 'package:auge_server/model/general/organization.dart';
import 'package:auge_server/model/general/organization_configuration.dart';
import 'package:auge_server/model/general/organization_directory_service.dart';

import 'package:auge_web/message/messages.dart';
import 'package:auge_web/message/model_messages.dart';

import 'package:auge_web/src/organization/organization_service.dart';
import 'package:auge_web/services/common_service.dart' as common_service;

@Component(
  selector: 'auge-configuration',
  providers: const <dynamic>[overlayBindings, OrganizationService],
    templateUrl: 'organization_component.html',
    styleUrls: const [
      'organization_component.css'
    ],
  directives: const [
    coreDirectives,
    routerDirectives,
    materialInputDirectives,
    materialNumberInputDirectives,
    AutoFocusDirective,
    MaterialDialogComponent,
    ModalComponent,
    MaterialTabPanelComponent,
    MaterialTabComponent,
    MaterialIconComponent,
    MaterialButtonComponent,
    MaterialToggleComponent,
    ModalComponent,
    MaterialDropdownSelectComponent,
    DropdownSelectValueAccessor,
    MaterialSpinnerComponent,
  ])

class OrganizationComponent implements OnInit, OnActivate, OnDeactivate {

  final OrganizationService _organizationService;
  final Location _location;

  bool modalVisible = false;

  Organization organization = Organization();
  OrganizationConfiguration organizationConfiguration = OrganizationConfiguration();
  OrganizationDirectoryService organizationDirectoryService = OrganizationDirectoryService();

  /// When it exists, the error/exception message is presented into dialog view.
  String _dialogError;

  String get dialogError => _dialogError;

  set dialogError(String dialogError) {
    _dialogError = dialogError;

    // Start a timeout to after to clear the error.
    // The error is presented just some seconds.
    common_service.startTimeoutTimer(() { _dialogError = null; });
  }
  String testDirectoryServiceStatus;
  String syncDirectoryServiceStatus;

  List<int> _listSearchScope = [0, 1, 2, 3]; // 'BASE_LEVEL', 'ONE_LEVEL', 'SUB_LEVEL', 'SUBORDINATE_SUBTREE'

  SelectionOptions passwordFormatSelectionOptions;
  SelectionModel passwordFormatSelectionModel;

  SelectionOptions groupSearchScopeSelectionOptions;
  SelectionModel groupSearchScopeSelectionModel;

  SelectionOptions userSearchScopeSelectionOptions;
  SelectionModel userSearchScopeSelectionModel;

  bool testInProgress = false;
  bool syncInProgress = false;

  final List<String> tabLabels = <String>[UserMsg.label('Profile'), UserMsg.label('Identity'), UserMsg.label('Access')];

  String organizationId;

  OrganizationComponent(this._organizationService, this._location) {


    passwordFormatSelectionModel = SelectionModel.single();
    groupSearchScopeSelectionModel = SelectionModel.single();
    userSearchScopeSelectionModel = SelectionModel.single();
  }

  // Define messages and labels
  static final String requiredValueMsg = CommonMsg.requiredValueMsg();
  static final String saveButtonLabel = CommonMsg.buttonLabel('Save');
  static final String closeButtonLabel = CommonMsg.buttonLabel('Close');

  // Organization
  static final String organizationLabel =  OrganizationMsg.label('Organization');
  static final String addOrganizationLabel =  OrganizationMsg.label('Add Organization');
  static final String editOrganizationLabel =  OrganizationMsg.label('Edit Organization');

  static final String organizationDetailLabel =  OrganizationMsg.label('Organization Detail');

  static final String organizationNameLabel =  FieldMsg.label('${Organization.className}.${Organization.nameField}');
  static final String organizationCodeLabel =  FieldMsg.label('${Organization.className}.${Organization.codeField}');

  static final String configurationLabel =  ConfigurationMsg.label('Configuration');
  static final String directoryServiceLabel =  ConfigurationMsg.label('Directory Service');

  static final String serverAdminLabel =  ConfigurationMsg.label('Server and Admin');
  static final String groupLabel =  ConfigurationMsg.label('Group');
  static final String synchronizationLabel =  ConfigurationMsg.label('Synchronization');

  static final String testDirectoryServiceLabel =  ConfigurationMsg.label('Test Connection');
  static final String syncDirectoryServiceLabel =  ConfigurationMsg.label('Sync and Save');

  static final String domainLabel = FieldMsg.label('${OrganizationConfiguration.className}.${OrganizationConfiguration.domainField}');

  static final String directoryServiceEnabledLabel = FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.directoryServiceEnabledField}');
  static final String hostAddressLabel =  FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.hostAddressField}');
  static final String portLabel =  FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.portField}');
  static final String sslTlsLabel =  FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.sslTlsField}');
  static final String syncBindDnLabel =  FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.syncBindDnField}');
  static final String syncBindPasswordLabel =  FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.syncBindPasswordField}');

  static final String groupSearchDNLabel = FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.groupSearchDNField}');
  static final String groupSearchScopeLabel = FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.groupSearchScopeField}');
  static final String groupSearchFilterLabel = FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.groupSearchFilterField}');
  static final String groupMemberUserAttributeLabel = FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.groupMemberUserAttributeField}');


  static final String userSearchDNLabel = FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.userSearchDNField}');
  static final String userSearchScopeLabel = FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.userSearchScopeField}');
  static final String userSearchFilterLabel = FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.userSearchFilterField}');
  static final String userProviderObjectIdAttributeLabel = FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.userProviderObjectIdAttributeField}');
  static final String userIdentificationAttributeLabel = FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.userIdentificationAttributeField}');
  static final String userFirstNameAttributeLabel = FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.userFirstNameAttributeField}');
  static final String userLastNameAttributeLabel = FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.userLastNameAttributeField}');
  static final String userEmailAttributeLabel = FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.userEmailAttributeField}');
  static final String userAttributeForGroupRelationshipLabel = FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.userAttributeForGroupRelationshipField}');

  static final String syncIntervalLabel = FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.syncIntervalField}');
  static final String syncLastDateTimeLabel = FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.syncLastDateTimeField}');
  static final String syncLastResultLabel = FieldMsg.label('${OrganizationDirectoryService.className}.${OrganizationDirectoryService.syncLastResultField}');

  @override
  void ngOnInit() async {

    organization = Organization();
    organizationConfiguration = OrganizationConfiguration();
    organizationDirectoryService = OrganizationDirectoryService();

    organizationDirectoryService.directoryServiceEnabled = false;
    organizationDirectoryService.sslTls = false;

    groupSearchScopeSelectionOptions = SelectionOptions.fromList(_listSearchScope);
    userSearchScopeSelectionOptions = SelectionOptions.fromList(_listSearchScope);

    groupSearchScopeSelectionModel.selectionChanges.listen((s) {
      if (s.isNotEmpty && s.first.added != null && s.first.added.length != 0 && s.first.added?.first != null) {
        organizationDirectoryService.groupSearchScope = s.first.added.first;
      }
    });

    userSearchScopeSelectionModel.selectionChanges.listen((s) {
      if (s.isNotEmpty && s.first.added != null && s.first.added.length != 0 && s.first.added?.first != null) {
        organizationDirectoryService.userSearchScope = s.first.added.first;
      }
    });
  }

  @override
  void onActivate(RouterState previous, RouterState current) async {

    modalVisible = true;

    if (current.parameters.containsKey(AppRoutesParam.organizationIdParameter)) {
      organizationId = current.parameters[AppRoutesParam.organizationIdParameter];
    }

    if (organizationId != null) {
      organization =
      await _organizationService.getOrganization(
          organizationId) ?? organization;

      organizationConfiguration =
        (await _organizationService.getOrganizationConfiguration(organizationId:
          organizationId)) ?? organizationConfiguration..organization = organization;

       organizationDirectoryService =
        (await _organizationService.getOrganizationDirectoryService(organizationId:
          organizationId)) ?? organizationDirectoryService..organization = organization;
    }

    if (organizationDirectoryService.groupSearchScope != null) {
      groupSearchScopeSelectionModel.select(organizationDirectoryService.groupSearchScope);
    } else if (groupSearchScopeSelectionOptions.optionsList.isNotEmpty) {
      groupSearchScopeSelectionModel.select(groupSearchScopeSelectionOptions.optionsList.first);
    }

    if (organizationDirectoryService.userSearchScope != null) {
      userSearchScopeSelectionModel.select(organizationDirectoryService.userSearchScope);
    } else if (userSearchScopeSelectionOptions.optionsList.isNotEmpty) {
      userSearchScopeSelectionModel.select(userSearchScopeSelectionOptions.optionsList.first);
    }
  }

  @override
  void onDeactivate(RouterState current, RouterState next) {
    modalVisible = false;
  }

  // Label for the button for single selection.
  String get groupSearchScopeSelectLabel {
    String nameLabel;
    if ((groupSearchScopeSelectionModel != null) &&
        (groupSearchScopeSelectionModel.selectedValues != null) &&
        (groupSearchScopeSelectionModel.selectedValues.length > 0)) {

      nameLabel = ConfigurationMsg.searchScopeLabel(groupSearchScopeSelectionModel.selectedValues.first);
    }
    return nameLabel ;
  }

  // ORGANIZATION
  void saveOrganization() async {
    try {
      await _organizationService.saveOrganization(organization);

      organization = await _organizationService.getOrganization(organization.id);
     // closeDetail();
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }
  }

  bool get validInputOrganization {
    return organization.name?.trim()?.isNotEmpty ?? false;
  }

  // CONFIGURATION
  void saveOrganizationConfiguration() async {
    try {

      await _organizationService.saveOrganizationConfiguration(organizationConfiguration);

      organizationConfiguration = await _organizationService.getOrganizationConfiguration(organizationConfigurationId: organizationConfiguration.id);
     // closeDetail();
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }
  }

  bool get validInputConfiguration {
    return organizationConfiguration.domain?.trim()?.isNotEmpty ?? false;
  }

  // Label for the button for single selection.
  String get userSearchScopeSelectLabel {
    String nameLabel;
    if ((userSearchScopeSelectionModel != null) &&
        (userSearchScopeSelectionModel.selectedValues != null) &&
        (userSearchScopeSelectionModel.selectedValues.length > 0)) {

      nameLabel = ConfigurationMsg.searchScopeLabel(userSearchScopeSelectionModel.selectedValues.first);
    }
    return nameLabel ;
  }

  ItemRenderer get searchScopeItemRenderer => (dynamic item) => ConfigurationMsg.searchScopeLabel(item);

  void saveOrganizationDirectoryService() async {
    try {
      await _organizationService.saveOrganizationDirectoryService(organizationDirectoryService);
      //_configurationService.authService.authUserProfileOrganization.organization = await _configurationService.getConfiguration(configuration.id);
      // closeDetail();

      organizationDirectoryService =
      await _organizationService.getOrganizationDirectoryService(organizationDirectoryServiceId: organizationDirectoryService.id);

    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }
  }

  bool get validInputDirectoryService {
    return true;
    //return configuration.name?.trim()?.isNotEmpty ?? false;
  }

  testOrganizationDirectoryService() async {
    testDirectoryServiceStatus = null;
    testInProgress = true;
    try {

      int directoryServiceStatusIndex = await _organizationService.testOrganizationDirectoryService(organizationDirectoryService);
      testDirectoryServiceStatus = ConfigurationMsg.statusLabel(directoryServiceStatusIndex);
    } catch (e) {
      testDirectoryServiceStatus = ConfigurationMsg.statusLabel(DirectoryServiceStatus.errorException.index);
      dialogError = e.toString();
      rethrow;
    } finally {
      testInProgress = false;
    }
  }

  syncOrganizationDirectoryService() async {
    syncDirectoryServiceStatus = null;
    syncInProgress = true;
    try {
      int directoryServiceStatusIndex = await _organizationService.syncOrganizationDirectoryService(organizationDirectoryService);
      syncDirectoryServiceStatus = ConfigurationMsg.statusLabel(directoryServiceStatusIndex);

      //
      organizationConfiguration =
      await _organizationService.getOrganizationConfiguration(organizationId:
          organizationId);
    } catch (e) {
      syncDirectoryServiceStatus = ConfigurationMsg.statusLabel(DirectoryServiceStatus.errorException.index);
      dialogError = e.toString();
      rethrow;
    } finally {
      syncInProgress = false;
    }
    //
  }

  void closeDetail() {
    _location.back();
  }

  String formatSyncLastResult(String syncLastResult) {

    if (syncLastResult == null) return null;

    Map mapSyncLastResult = json.decode(syncLastResult);
    StringBuffer formatSyncLastResult = StringBuffer();
    for (String event in mapSyncLastResult.keys) {
      formatSyncLastResult.writeln('${ConfigurationMsg.eventSyncResultLabel(event)}\n');
      int i = 0;
      for (String detail in mapSyncLastResult[event]) {
        formatSyncLastResult.writeln('  ${++i} ${detail}\n');
      }
    }
    return formatSyncLastResult.toString();

  }

}
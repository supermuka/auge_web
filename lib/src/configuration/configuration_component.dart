// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

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

import 'package:auge_server/model/general/organization_configuration.dart';

import 'package:auge_web/message/messages.dart';
import 'package:auge_web/message/model_messages.dart';

import 'package:auge_web/src/configuration/configuration_service.dart';
import 'package:auge_web/services/common_service.dart' as common_service;

@Component(
  selector: 'auge-configuration',
  providers: const <dynamic>[overlayBindings, ConfigurationService],
    templateUrl: 'configuration_component.html',
    styleUrls: const [
      'configuration_component.css'
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

class ConfigurationComponent implements OnInit, OnActivate, OnDeactivate {

  final ConfigurationService _configurationService;
  final Location _location;

  bool modalVisible = false;



  OrganizationConfiguration organizationConfiguration;

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

  ConfigurationComponent(this._configurationService, this._location) {
    passwordFormatSelectionModel = SelectionModel.single();
    groupSearchScopeSelectionModel = SelectionModel.single();
    userSearchScopeSelectionModel = SelectionModel.single();
  }

  // Define messages and labels
  static final String requiredValueMsg = CommonMsg.requiredValueMsg();
  static final String saveButtonLabel = CommonMsg.buttonLabel('Save');
  static final String closeButtonLabel = CommonMsg.buttonLabel('Close');

  static final String generalLabel =  ConfigurationMsg.label('General');
  static final String directoryServiceLabel =  ConfigurationMsg.label('Directory Service');

  static final String addConfigurationLabel =  ConfigurationMsg.label('Add Configuration');
  static final String editConfigurationLabel =  ConfigurationMsg.label('Edit Configuration');
  static final String serverAdminLabel =  ConfigurationMsg.label('Server and Admin');
  static final String groupLabel =  ConfigurationMsg.label('Group');
  static final String synchronizationLabel =  ConfigurationMsg.label('Synchronization');

  static final String testDirectoryServiceLabel =  ConfigurationMsg.label('Test Connection');
  static final String syncDirectoryServiceLabel =  ConfigurationMsg.label('Sync and Save');

  static final String domainLabel = FieldMsg.label('${OrganizationConfiguration.className}.${OrganizationConfiguration.domainField}');
  static final String directoryServiceEnabledLabel = FieldMsg.label('${OrganizationConfiguration.className}.${OrganizationConfiguration.directoryServiceEnabledField}');

  static final String hostAddressLabel =  FieldMsg.label('${DirectoryService.className}.${DirectoryService.hostAddressField}');
  static final String portLabel =  FieldMsg.label('${DirectoryService.className}.${DirectoryService.portField}');
  static final String sslTlsLabel =  FieldMsg.label('${DirectoryService.className}.${DirectoryService.sslTlsField}');
  static final String syncBindDnLabel =  FieldMsg.label('${DirectoryService.className}.${DirectoryService.syncBindDnField}');
  static final String syncBindPasswordLabel =  FieldMsg.label('${DirectoryService.className}.${DirectoryService.syncBindPasswordField}');

  static final String groupSearchDNLabel = FieldMsg.label('${DirectoryService.className}.${DirectoryService.groupSearchDNField}');
  static final String groupSearchScopeLabel = FieldMsg.label('${DirectoryService.className}.${DirectoryService.groupSearchScopeField}');
  static final String groupSearchFilterLabel = FieldMsg.label('${DirectoryService.className}.${DirectoryService.groupSearchFilterField}');
  static final String groupMemberUserAttributeLabel = FieldMsg.label('${DirectoryService.className}.${DirectoryService.groupMemberUserAttributeField}');


  static final String userSearchDNLabel = FieldMsg.label('${DirectoryService.className}.${DirectoryService.userSearchDNField}');
  static final String userSearchScopeLabel = FieldMsg.label('${DirectoryService.className}.${DirectoryService.userSearchScopeField}');
  static final String userSearchFilterLabel = FieldMsg.label('${DirectoryService.className}.${DirectoryService.userSearchFilterField}');
  static final String userProviderObjectIdAttributeLabel = FieldMsg.label('${DirectoryService.className}.${DirectoryService.userProviderObjectIdAttributeField}');
  static final String userIdentificationAttributeLabel = FieldMsg.label('${DirectoryService.className}.${DirectoryService.userIdentificationAttributeField}');
  static final String userFirstNameAttributeLabel = FieldMsg.label('${DirectoryService.className}.${DirectoryService.userFirstNameAttributeField}');
  static final String userLastNameAttributeLabel = FieldMsg.label('${DirectoryService.className}.${DirectoryService.userLastNameAttributeField}');
  static final String userEmailAttributeLabel = FieldMsg.label('${DirectoryService.className}.${DirectoryService.userEmailAttributeField}');
  static final String userAttributeForGroupRelationshipLabel = FieldMsg.label('${DirectoryService.className}.${DirectoryService.userAttributeForGroupRelationshipField}');

  static final String syncIntervalLabel = FieldMsg.label('${DirectoryService.className}.${DirectoryService.syncIntervalField}');
  static final String syncLastDateTimeLabel = FieldMsg.label('${DirectoryService.className}.${DirectoryService.syncLastDateTimeField}');
  static final String syncLastResultLabel = FieldMsg.label('${DirectoryService.className}.${DirectoryService.syncLastResultField}');

  @override
  void ngOnInit() async {
    organizationConfiguration = OrganizationConfiguration();
    organizationConfiguration.directoryServiceEnabled = false;

    groupSearchScopeSelectionOptions = SelectionOptions.fromList(_listSearchScope);
    userSearchScopeSelectionOptions = SelectionOptions.fromList(_listSearchScope);

    groupSearchScopeSelectionModel.selectionChanges.listen((s) {
      if (s.isNotEmpty && s.first.added != null && s.first.added.length != 0 && s.first.added?.first != null) {
        organizationConfiguration.directoryService.groupSearchScope = s.first.added.first;
      }
    });

    userSearchScopeSelectionModel.selectionChanges.listen((s) {
      if (s.isNotEmpty && s.first.added != null && s.first.added.length != 0 && s.first.added?.first != null) {
        organizationConfiguration.directoryService.userSearchScope = s.first.added.first;
      }
    });
  }

  @override
  void onActivate(RouterState previous, RouterState current) async {

    modalVisible = true;


    if (current.parameters.containsKey(AppRoutesParam.organizationIdParameter)) {
      organizationId = current.parameters[AppRoutesParam.organizationIdParameter];
    }

    organizationConfiguration =
    await _configurationService.getOrganizationConfiguration(
        organizationId);

    if (organizationConfiguration == null) {
      organizationConfiguration = OrganizationConfiguration();
      organizationConfiguration.directoryServiceEnabled = false;
      organizationConfiguration.directoryService.sslTls = false;
    }

    if (organizationConfiguration.directoryService.groupSearchScope != null) {
      groupSearchScopeSelectionModel.select(organizationConfiguration.directoryService.groupSearchScope);
    } else if (groupSearchScopeSelectionOptions.optionsList.isNotEmpty) {
      groupSearchScopeSelectionModel.select(groupSearchScopeSelectionOptions.optionsList.first);
    }

    if (organizationConfiguration.directoryService.userSearchScope != null) {
      userSearchScopeSelectionModel.select(organizationConfiguration.directoryService.userSearchScope);
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

  void saveOrganizationConfiguration() async {
    try {
      await _configurationService.saveOrganizationConfiguration(organizationConfiguration);
      //_configurationService.authService.authUserProfileOrganization.organization = await _configurationService.getConfiguration(configuration.id);
     // closeDetail();

      organizationConfiguration =
      await _configurationService.getOrganizationConfiguration(_configurationService.authService.authorizedOrganization.id);

    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }
  }

  bool get validInput {
    return true;
    //return configuration.name?.trim()?.isNotEmpty ?? false;
  }

  testDirectoryService() async {
    testDirectoryServiceStatus = null;
    testInProgress = true;
    try {

      int directoryServiceStatusIndex = await _configurationService.testDirectoryService(organizationConfiguration);
      testDirectoryServiceStatus = ConfigurationMsg.statusLabel(directoryServiceStatusIndex);
    } catch (e) {
      testDirectoryServiceStatus = ConfigurationMsg.statusLabel(DirectoryServiceStatus.errorException.index);
      dialogError = e.toString();
      rethrow;
    } finally {
      testInProgress = false;
    }
  }

  syncDirectoryService() async {
    syncDirectoryServiceStatus = null;
    syncInProgress = true;
    try {
      int directoryServiceStatusIndex = await _configurationService.syncDirectoryService(organizationConfiguration);
      syncDirectoryServiceStatus = ConfigurationMsg.statusLabel(directoryServiceStatusIndex);

      //
      organizationConfiguration =
      await _configurationService.getOrganizationConfiguration(
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
/*
  set adminPasswordSecure(String password) {
   // _passwordOrigin = password;


    //TODO - future understand a way to cipher this password. LDAP normaly store in plan text, though isn't the wanted way.
    organizationConfiguration.directoryService.syncBindPassword = base64.encode(password.codeUnits);
    

    organizationConfiguration.directoryService.adminPassword = base64.encode(sha256
        .convert(password.codeUnits)
        .bytes);

  }
  */

}
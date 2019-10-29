// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:html' as html;
import 'dart:convert' show base64;
import 'dart:typed_data' show Uint8List;

import 'package:image/image.dart';
import 'package:intl/intl.dart';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:auge_web/services/app_routes.dart';

import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/material_tab/material_tab.dart';
import 'package:angular_components/material_tab/material_tab_panel.dart';
import 'package:angular_components/material_tab/tab_change_event.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_radio/material_radio_group.dart';
import 'package:angular_components/material_radio/material_radio.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_checkbox/material_checkbox.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_auto_dismiss.dart';
import 'package:angular_components/material_select/material_dropdown_select.dart';
import 'package:angular_components/material_select/material_dropdown_select_accessor.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/model/ui/has_renderer.dart';
import 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.dart';
import 'package:angular_components/material_toggle/material_toggle.dart';

import 'package:auge_server/model/general/organization_configuration.dart';
import 'package:auge_server/model/general/authorization.dart';
import 'package:auge_server/model/general/user.dart';
import 'package:auge_server/model/general/user_identity.dart';
import 'package:auge_server/model/general/user_access.dart';

import 'package:auge_server/shared/message/messages.dart';
import 'package:auge_server/shared/message/model_messages.dart';

//import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/src/organization/organization_service.dart';
import 'package:auge_web/services/common_service.dart' as common_service;

import 'package:angular_components/model/action/async_action.dart';

@Component(
    selector: 'auge-user-detail',
    templateUrl: 'user_detail_component.html',
    styleUrls: const [
      'user_detail_component.css'
    ],
    providers: const <dynamic>[overlayBindings, UserService, OrganizationService],
    directives: const [
      coreDirectives,
      routerDirectives,
      materialInputDirectives,
      AutoFocusDirective,
      NgModel,
      MaterialTabPanelComponent,
      MaterialTabComponent,
      MaterialDialogComponent,
      ModalComponent,
      MaterialCheckboxComponent,
      MaterialRadioGroupComponent,
      MaterialRadioComponent,
      MaterialButtonComponent,
      MaterialIconComponent,
      MaterialExpansionPanel,
      MaterialExpansionPanelSet,
      MaterialExpansionPanelAutoDismiss,
      MaterialDropdownSelectComponent,
      DropdownSelectValueAccessor,
      MaterialYesNoButtonsComponent,
      MaterialToggleComponent,
    ])

/// Component uses to add and edit an [User] and [UserProfile]
class UserDetailComponent implements OnInit, OnActivate, OnDeactivate {

  final UserService _userService;
  final OrganizationService _organizationService;
  final Location _location;

  bool modalVisible = false;

  // To control Tabs
  int tabIndex = 0;

  OrganizationConfiguration organizationConfiguration;

  final List<String> tabLabels = <String>[UserMsg.label('Profile'), UserMsg.label('Identity'), UserMsg.label('Access')];

  // Identity Provider
  List<int> _userIdentityProviders = [];
  SelectionOptions userIdentityProviderOptions;
  SelectionModel userIdentityProviderSingleSelectModel;

  // Model
  User user;
  List<UserIdentity> userIdentities;
  List<UserAccess> userAccesses;

  UserIdentity userIdentity;
  int userIdentityIndex;
  UserAccess userAccess;
  int userAccessIndex;

  List<Option> userAccessOptions;

  String get getUsFlag => '/packages/auge_web/assets/images/flag_us.png';
  String get getEsFlag => '/packages/auge_web/assets/images/flag_es.png';
  String get getBrFlag => '/packages/auge_web/assets/images/flag_br.png';

  /// When it exists, the error/exception message is presented into dialog view.
  String dialogError;

  html.InputElement _uploadImage;

  UserDetailComponent(this._userService, this._organizationService, this._location) {
    userIdentityProviderSingleSelectModel = SelectionModel<int>.single();
    userAccessOptions = List<Option>();

    _uploadImage = html.querySelector("#upload_image");
  }

  // Define messages and labels
  static final String requiredValueMsg = CommonMsg.requiredValueMsg();
  static final String uploadButtonLabel = CommonMsg.buttonLabel('Upload');
  static final String clearButtonLabel = CommonMsg.buttonLabel('Clear');
  static final String saveButtonLabel = CommonMsg.buttonLabel('Save');
  static final String closeButtonLabel = CommonMsg.buttonLabel('Close');

  static final String addUserLabel =  UserMsg.label('Add User');
  static final String editUserLabel =  UserMsg.label('Edit User');

  static final String nameLabel =  FieldMsg.label('${User.className}.${User.nameField}');
  static final String inactiveLabel = FieldMsg.label('${User.className}.${User.inactiveField}');
  static final String managedByUserLabel = FieldMsg.label('${User.className}.${User.managedByOrganizationField}');

  static final String profileEmailLabel =  FieldMsg.label('${UserProfile.className}.${UserProfile.eMailField}');
  static final String profileEmailNotificationLabel =  FieldMsg.label('${UserProfile.className}.${UserProfile.eMailNotificationField}');
  static final String profilePhotoLabel = FieldMsg.label('${UserProfile.className}.${UserProfile.imageField}');
  static final String profileIdiomLabel = FieldMsg.label('${UserProfile.className}.${UserProfile.idiomLocaleField}');

  static final String identityIdentificationLabel = FieldMsg.label('${UserIdentity.className}.${UserIdentity.identificationField}');
  static final String identityPasswordLabel = FieldMsg.label('${UserIdentity.className}.${UserIdentity.passwordField}');
  static final String identityProviderLabel = FieldMsg.label('${UserIdentity.className}.${UserIdentity.providerField}');
  static final String identityProviderObjectIdLabel = FieldMsg.label('${UserIdentity.className}.${UserIdentity.providerObjectIdField}');

  static final String domainOrganizationConfigurationRequiredMsg = UserMsg.domainOrganizationConfigurationRequiredMsg();
  static final String identificationRequiredMsg = UserMsg.identificationRequiredMsg();
  static final String invalidIdentificationMsg = UserMsg.invalidIdentificationMsg();

  static final String accessOrganizationLabel  = FieldMsg.label('${UserAccess.className}.${UserAccess.organizationField}');
  static final String accessRoleLabel = FieldMsg.label('${UserAccess.className}.${UserAccess.accessRoleField}');

  static final String pt_BRsymbol = 'pt_BR';
  static final String en_USsymbol = 'en_US';
  static final String es_ESsymbol = 'es_ES';

  static final String pt_BRvalueLabel = UserProfileValueMsg.label(pt_BRsymbol);
  static final String en_USvalueLabel = UserProfileValueMsg.label(en_USsymbol);
  static final String es_ESvalueLabel = UserProfileValueMsg.label(es_ESsymbol);



  @override
  void ngOnInit() async {
    //created as new here, even if it is later replaced by a query, because the query may take a while and the Angular will continue to process, causing an exception if the object does not exist
    user = User();
    userIdentities = <UserIdentity>[];
    userAccesses = <UserAccess>[];

    for (int i = 0;i<UserIdentityProvider.values.length;i++) {
      _userIdentityProviders.add(i);
    }
    userIdentityProviderOptions = SelectionOptions.fromList( _userIdentityProviders );

    userIdentityProviderSingleSelectModel.selectionChanges.listen((unit) {
      if (unit.isNotEmpty && unit.first.added != null && unit.first.added.length != 0 && unit.first.added?.first != null) {
        userIdentity.provider = unit.first.added.first;
      }
    });

    SystemRole.values.forEach((role) {
      //if (role != SystemRole.superAdmin) {
        userAccessOptions.add(Option(
            role.index,
            getUserAccessRoleLabel(role.index)
           )
        );
      //}
    });

    organizationConfiguration = await _organizationService.getOrganizationConfiguration(organizationId: _userService.authService.authorizedOrganization.id);



  }

  @override
  void onActivate(RouterState previous, RouterState current) async {
    modalVisible = true;

    String id;
    if (current.parameters.containsKey(AppRoutesParam.userIdParameter)) {
      id = current.parameters[AppRoutesParam.userIdParameter];
    }

    if (id != null) {

      try {
        user = await _userService.getUser(id, withUserProfile: true);

        userIdentities = await _userService.getUserIdentities(id);

        userAccesses = await _userService.getUserAccesses(id);
        
      } catch (e) {
        dialogError = e.toString();
        rethrow;
      }
    } else {

      user.inactive = false;
      user.managedByOrganization = _userService.authService.authorizedOrganization;
      user.userProfile.idiomLocale = Intl.defaultLocale;
      user.userProfile.eMailNotification = false;

      //userAccess.accessRole = SystemRole.standard.index;

      // Authorizated and selected organization
      //userAccess.organization = _userService.authService.authorizedOrganization;
    }

  }

  @override
  void onDeactivate(RouterState current, RouterState next) {
    modalVisible = false;
  }

  void selectUserIdentity(UserIdentity ui) async {
    if (ui == null) {
      userIdentities.insert(0, UserIdentity()..user = user..identification = '<id>@' + organizationConfiguration.domain ?? '<domain.com>' );
      userIdentity = userIdentities.first;
      userIdentity.provider = UserIdentityProvider.internal.index;
    } else {
      // Get a new instance to doesn't referenced the other.
      userIdentity = ui;
    }
  }

  void selectUserAccess(UserAccess uoa) async {
    if (uoa == null) {
      userAccesses.insert(0, UserAccess()..organization = _userService.authService.authorizedOrganization..accessRole = SystemRole.standard.index);
      userAccess = userAccesses.first;

      userAccess.organization = _userService.authService.authorizedOrganization;
      userAccess.user = user;

    } else {
      userAccess = uoa;
    }
  }

  void saveUser() async {
    try {

      await _userService.saveUser(user);

      closeDetail();
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }
  }

  void selectUploadImage() async {

    _uploadImage.click();
  }

  void uploadImage() async {
 //   html.InputElement _uploadImage = html.querySelector("#upload_image");

    html.FileList files = _uploadImage.files;
    if (files.length > 0) {
      html.File file = files.item(0);

      html.FileReader reader = new html.FileReader();

      reader.onLoad.listen((fileEvent) {
        Uint8List fileContent = reader.result;
        // Code doing stuff with fileContent goes here!

        Image image = decodeImage(fileContent);

        Image thumbnail = copyResize(image, width: 120, height: 120);

        user.userProfile.image = base64.encode(encodePng(thumbnail));

      });

      reader.onError.listen((itWentWrongEvent) {
        // Handle the error
      });

      reader.readAsArrayBuffer(file);
    }
  }

  void clearImage() {
    user.userProfile.image = null;
  }

  String userUrlImage(User user) {
    return common_service.userUrlImage(user?.userProfile?.image);
  }

  bool get validInput {
    return (user?.name?.trim()?.isNotEmpty ?? false) && (user?.userProfile?.eMail?.trim()?.isNotEmpty ?? false);
  }

  void closeDetail() {
    _location.back();
  }

  void cancelUserIdentity(UserIdentity userIdentity, AsyncAction event) async {

    try {
      if (userIdentity.id == null) {
        userIdentities.remove(userIdentity);
      } else {
        userIdentities[userIdentities.indexOf(userIdentity)] = await _userService.getUserIdentity(userIdentity.id);
      }
    } on Exception {
      event.cancel();
      rethrow;
    }
  }

  void saveUserIdentity(UserIdentity ui, AsyncAction event) async {

      // validate domain informed

      if (organizationConfiguration == null || organizationConfiguration.domain.trim().isEmpty) {
        dialogError = domainOrganizationConfigurationRequiredMsg;
        event.cancel();
      } else if (ui.identification.trim().isEmpty) {
        dialogError = identificationRequiredMsg;
        event.cancel();
      } else if (ui.identification.substring(ui.identification.indexOf('@') + 1) != organizationConfiguration.domain) {
        dialogError = invalidIdentificationMsg;
        event.cancel();
      } else if (ui.identification.substring(0, ui.identification.indexOf('@')).trim().isEmpty) {
        dialogError = invalidIdentificationMsg;
        event.cancel();
      } else {
        try {
          await _userService.saveUserIdentity(ui);

          // turn null (not selected)
          userIdentity = null;
        } catch (e) {
          dialogError = e.toString();
          event.cancel();
          rethrow;
        }
      }
  }

  void cancelUserAccess(UserAccess ua, AsyncAction event) async {

    try {
      if (ua.id == null) {
        userAccesses.remove(ua);
      } else {
        userAccesses[userAccesses.indexOf(ua)] = await _userService.getUserAccess(ua.id);
      }
    } on Exception {
      event.cancel();
      rethrow;
    }
  }


  void saveUserAccess(UserAccess uoa, AsyncAction event) async {
    try {

      await _userService.saveUserAccess(uoa);

      // turn null (not selected)
      userAccess = null;

    } catch (e) {
      dialogError = e.toString();
      event.cancel();
      rethrow;
    }
  }

  void deleteUserIdentity(UserIdentity userIdentity) async {
    try {
      await _userService.deleteUserIdentity(userIdentity);
      userIdentities = await _userService.getUserIdentities(user.id);
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }
  }

  void deleteUserAccess(UserAccess uoa) async {
    try {
      await _userService.deleteUserAccess(uoa);
      userAccesses = await _userService.getUserAccesses(user.id);
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }
  }

  void onTabChange(TabChangeEvent event) {
    tabIndex = event.newIndex;
  }

  String getUserIdentityProviderLabel(int uip) => UserIdentityMsg.label(UserIdentityProvider.values[uip].toString());

  // Label for the button for single selection.
  String get userIdentityProviderSingleSelectLabel {
    String nameLabel;
    if ((userIdentityProviderSingleSelectModel != null) &&
        (userIdentityProviderSingleSelectModel.selectedValues != null) &&
        (userIdentityProviderSingleSelectModel.selectedValues.length > 0)) {

      nameLabel = getUserIdentityProviderLabel(userIdentityProviderSingleSelectModel.selectedValues.first);
    }
    return nameLabel ;
  }

  ItemRenderer get userIdentityProviderItemRenderer => (dynamic uip) => getUserIdentityProviderLabel(uip);

  void expandedChangeUserIdentity(UserIdentity userIdentity, bool event) {
    if (event != true) return;
    if (userIdentity.provider != null) {
      userIdentityProviderSingleSelectModel.select(userIdentity.provider);
    } else if (userIdentityProviderOptions.optionsList.isNotEmpty) {
      userIdentityProviderSingleSelectModel.select(userIdentityProviderOptions.optionsList.first);
    }
  }

  String getUserAccessRoleLabel(int uoar) => UserAccessMsg.label(SystemRole.values[uoar].toString());

  void expandedChangeUserAccess(UserAccess uoa, bool event) {
    if (event != true) return;
    userAccessOptions.forEach((role) {
            role.checked = (role.index == userAccess.accessRole);
            role.enabled = _userService.authService.isAuthorizedForAccessRole(
                SystemModule.users, systemFunction: uoa.id == null ?  SystemFunction.create : SystemFunction.update,
                systemConstraint: SystemRole.values[role.index]);
    });
  }

  bool isManagedByOrganization() {
    return (user?.managedByOrganization == null || user.managedByOrganization.id == _userService.authService.authorizedOrganization.id);
  }

  bool isUserAccessByOrganization(String userAccessOrganizationId) {
    return (userAccessOrganizationId == _userService.authService.authorizedOrganization.id);
  }

  bool isUserAccessAdded() {
    return (userAccesses.indexWhere((t) => t.organization.id == _userService.authService.authorizedOrganization.id) != -1);
  }


}

class Option {
  final int index;
  final String label;
  bool checked = false;
  bool enabled = false;

  Option(this.index, this.label);
}
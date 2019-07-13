// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:html' as html;
import 'dart:convert' show base64;
import 'dart:typed_data' show Uint8List;

import 'package:image/image.dart';
import 'package:crypto/crypto.dart' show sha256;
import 'package:intl/intl.dart';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:auge_web/services/app_routes.dart';

import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_radio/material_radio_group.dart';
import 'package:angular_components/material_radio/material_radio.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';

import 'package:auge_server/model/general/user.dart';
import 'package:auge_server/model/general/user_profile_organization.dart';
import 'package:auge_server/model/general/authorization.dart';

import 'package:auge_web/message/messages.dart';
import 'package:auge_web/message/model_messages.dart';

//import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/services/common_service.dart' as common_service;

@Component(
    selector: 'auge-user-detail',
    templateUrl: 'user_detail_component.html',
    styleUrls: const [
      'user_detail_component.css'
    ],
    providers: const <dynamic>[overlayBindings, UserService],
    directives: const [
      coreDirectives,
      routerDirectives,
      materialInputDirectives,
      AutoFocusDirective,
      MaterialDialogComponent,
      ModalComponent,
      MaterialRadioGroupComponent,
      MaterialRadioComponent,
      MaterialButtonComponent,
      MaterialIconComponent,
    ])

/// Component uses to add and edit an [User] and [UserProfile]
class UserDetailComponent implements OnInit, OnActivate, OnDeactivate {

  final UserService _userService;
  final Location _location;

  bool modalVisible = false;

 //  final SelectionModel selectionModelUserAuthorization = new SelectionModel.multi();
  String _passwordOrigin;

  UserProfileOrganization userProfileOrganization;

  List<Option> userAuthorizationOptions;

  String get getUsFlag => '/packages/auge_web/assets/images/flag_us.png';
  String get getEsFlag => '/packages/auge_web/assets/images/flag_es.png';
  String get getBrFlag => '/packages/auge_web/assets/images/flag_br.png';

  /// When it exists, the error/exception message is presented into dialog view.
  String dialogError;

  UserDetailComponent(this._userService, this._location) {
    userAuthorizationOptions = List<Option>();
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
  static final String authorizationLabel = FieldMsg.label('${UserProfileOrganization.className}.${UserProfileOrganization.authorizationRoleField}');
  static final String emailLabel =  FieldMsg.label('${UserProfile.className}.${UserProfile.eMailField}');
  static final String passwordLabel =  FieldMsg.label('${UserProfile.className}.${UserProfile.passwordField}');
  static final String photoLabel = FieldMsg.label('${UserProfile.className}.${UserProfile.imageField}');
  static final String idiomLabel = FieldMsg.label('${UserProfile.className}.${UserProfile.idiomLocaleField}');

  static final String pt_BRsymbol = 'pt_BR';
  static final String en_USsymbol = 'en_US';
  static final String es_ESsymbol = 'es_ES';

  static final String pt_BRvalueLabel = UserProfileValueMsg.label(pt_BRsymbol);
  static final String en_USvalueLabel = UserProfileValueMsg.label(en_USsymbol);
  static final String es_ESvalueLabel = UserProfileValueMsg.label(es_ESsymbol);

  @override
  void ngOnInit() async {
    //created as new here, even if it is later replaced by a query, because the query may take a while and the Angular will continue to process, causing an exception if the object does not exist
    userProfileOrganization = UserProfileOrganization();
  }


  @override
  void onActivate(RouterState previous, RouterState current) async {
    modalVisible = true;

    String id;
    if (current.parameters.containsKey(AppRoutesParam.userProfileOrganizationIdParameter)) {
      id = current.parameters[AppRoutesParam.userProfileOrganizationIdParameter];
    }

    if (id != null) {

      try {
        userProfileOrganization = await _userService.getUserProfileOrganization(id, withProfile: true);


      } catch (e) {
        dialogError = e.toString();
        rethrow;
      }
    } else {
      userProfileOrganization.user.userProfile.idiomLocale = Intl.defaultLocale;
      userProfileOrganization.authorizationRole = SystemRole.standard.index;

      // Authorizated and selected organization
      userProfileOrganization.organization = _userService.authService.authorizedOrganization;
    }
    SystemRole.values.forEach((role) {
      if (role != SystemRole.superAdmin) {
        userAuthorizationOptions.add(new Option(
            role.index,
            UserMsg.label(role.toString()),
            role.index == userProfileOrganization.authorizationRole,
            _userService.authService.isAuthorizedForAtuhorizatedRole(
            SystemModule.users, systemFunction: userProfileOrganization.id == null ?  SystemFunction.create : SystemFunction.update,
            systemConstraint: role
        )));
      }
    });
  }

  @override
  void onDeactivate(RouterState current, RouterState next) {
    modalVisible = false;
  }

  void saveUserProfileOrganization() async {
    try {

      print(userProfileOrganization.authorizationRole);
      await _userService.saveUserProfileOrganization(userProfileOrganization);

      closeDetail();
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }
  }

  void uploadImage() async {
    html.InputElement _uploadImage = html.querySelector("#upload_image");

    html.FileList files = _uploadImage.files;
    if (files.length > 0) {
      html.File file = files.item(0);

      html.FileReader reader = new html.FileReader();

      reader.onLoad.listen((fileEvent) {
        Uint8List fileContent = reader.result;
        // Code doing stuff with fileContent goes here!

        Image image = decodeImage(fileContent);

        Image thumbnail = copyResize(image, width: 120, height: 120);

        userProfileOrganization.user.userProfile.image = base64.encode(encodePng(thumbnail));

      });

      reader.onError.listen((itWentWrongEvent) {
        // Handle the error
      });

      reader.readAsArrayBuffer(file);
    }
  }

  void clearImage() {
    userProfileOrganization.user.userProfile.image = null;
  }

  String userUrlImage(User user) {
    return common_service.userUrlImage(user?.userProfile?.image);
  }

  set passwordSecure(String password) {
    _passwordOrigin = password;

    userProfileOrganization.user.userProfile.password = base64.encode(sha256
        .convert(password.codeUnits)
        .bytes);
  }

  get passwordSecure {
    _passwordOrigin = '';

    return _passwordOrigin;
  }

  bool get validInput {
    return (userProfileOrganization.user?.name?.trim()?.isNotEmpty ?? false) && (userProfileOrganization.user?.userProfile?.eMail?.trim()?.isNotEmpty ?? false);
  }

  void closeDetail() {
    _location.back();
  }
}

class Option {
  final int index;
  final String label;
  final bool checked;
  final bool enabled;

  Option(this.index, this.label, this.checked, this.enabled);
}
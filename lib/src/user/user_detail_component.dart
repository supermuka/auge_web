// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:html' as html;
import 'dart:async';
import 'dart:convert' show base64;
import 'dart:typed_data' show Uint8List;

import 'package:image/image.dart';
import 'package:crypto/crypto.dart' show sha256;
import 'package:intl/intl.dart';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_radio/material_radio_group.dart';
import 'package:angular_components/material_radio/material_radio.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';

import 'package:auge_server/model/general/user.dart';
import 'package:auge_server/model/general/user_profile_organization.dart';

import 'package:auge_web/message/messages.dart';
import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'package:auge_web/services/common_service.dart' as common_service;

@Component(
    selector: 'auge-user-detail',
    providers: const [overlayBindings, UserService],
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
      MaterialTooltipDirective,
    ],
    templateUrl: 'user_detail_component.html',
    styleUrls: const [
      'user_detail_component.css'
    ])

/// Component uses to add and edit an [User] and [UserProfile]
class UserDetailComponent /*extends Object*/ implements OnInit {

  /// Entry user to edit. If new, this should be null
  @Input()
  User selectedUser;

  final _closeController = new StreamController<void>.broadcast(sync: true);

  /// Publishes events when close.
  @Output()
  Stream<void> get closed => _closeController.stream;

  final _saveController = new StreamController<String>.broadcast(sync: true);

  /// Publishes events when save.
  @Output()
  Stream<String> get saved => _saveController.stream;

  final AuthService _authService;
  final UserService _userService;

 //  final SelectionModel selectionModelUserAuthorization = new SelectionModel.multi();
  String _passwordOrigin;

  User user;
  UserProfileOrganization userProfileOrganization;

  List<Option> userAuthorizationOptions;

  String get getUsFlag => '/packages/auge_web/assets/images/flag_us.png';
  String get getEsFlag => '/packages/auge_web/assets/images/flag_es.png';
  String get getBrFlag => '/packages/auge_web/assets/images/flag_br.png';

  /// When it exists, the error/exception message is presented into dialog view.
  String dialogError;

  UserDetailComponent(this._authService, this._userService) {
    userAuthorizationOptions = List<Option>();

    //UserAuthorization.values.forEach((f) => userAuthorizationOptions.add(new Option(f.index, UserMessage.label(f.toString()) /* , false, false */) ));
  }

  // Define messages and labels
  static final String requiredValueMsg = CommonMsg.requiredValueMsg();

  static final String addUserLabel =  UserMsg.label('Add User');
  static final String editUserLabel =  UserMsg.label('Edit User');
  static final String nameLabel =  UserMsg.label('Name');
  static final String emailLabel =  UserMsg.label('e-Mail');
  static final String passwordLabel =  UserMsg.label('Password');
  static final String authorizationLabel = UserMsg.label('Authorization');
  static final String photoLabel = UserMsg.label('Photo');
  static final String idiomLabel = UserMsg.label('Idiom');

  static final String uploadButtonLabel = CommonMsg.buttonLabel('Upload');
  static final String clearButtonLabel = CommonMsg.buttonLabel('Clear');
  static final String saveButtonLabel = CommonMsg.buttonLabel('Save');
  static final String closeButtonLabel = CommonMsg.buttonLabel('Close');

  @override
  void ngOnInit() async {

    //created as new here, even if it is later replaced by a query, because the query may take a while and the Angular will continue to process, causing an exception if the object does not exist
    user = User();
    if (selectedUser != null) {
      // Clone objective
     // user = selectedUser.clone();

      try {

        user = await _userService.getUser(selectedUser.id);

        List<UserProfileOrganization> userProfileOrganizations = await _userService.getUsersProfileOrganizations(selectedUser.id, _authService.selectedOrganization.id);

        if (userProfileOrganizations.isNotEmpty) {
          userProfileOrganization = userProfileOrganizations.first;
        }
      } catch (e) {
        dialogError = e.toString();
        rethrow;
      }
    } else {
      user.userProfile.idiomLocale = Intl.defaultLocale;

      userProfileOrganization = UserProfileOrganization();

      // Authorizated and selected organization
      userProfileOrganization.organization = _authService.selectedOrganization;
    }

    SystemRole.values.forEach((role) {
      if (role != SystemRole.superAdmin) {
        userAuthorizationOptions.add(new Option(
            role.index,
            UserMsg.label(role.toString()), _authService.isAuthorizedForAtuhorizatedRole(
            SystemModule.users, systemFunction: user.id == null ?  SystemFunction.create : SystemFunction.update,
            systemConstraint: role
        )));
      }
    });
  }

  void saveUser() async {
    try {
      await _userService.saveUser(user);

      if (userProfileOrganization != null) {
        userProfileOrganization.user = user;

        await _userService.saveUserProfileOrganization(userProfileOrganization);
      }

      _saveController.add(user.id);
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

        Image thumbnail = copyResize(image, 120, 120);

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

  set passwordSecure(String password) {
    _passwordOrigin = password;

    user.password = base64.encode(sha256
        .convert(password.codeUnits)
        .bytes);
  }

  get passwordSecure {
    _passwordOrigin = '';

    return _passwordOrigin;
  }

  bool get validInput {
    return (user?.name?.trim()?.isNotEmpty ?? false) && (user?.eMail?.trim()?.isNotEmpty ?? false);
  }

  void closeDetail() {
    _closeController.add(null);
  }
}

class Option {
  final int index;
  final String label;
  final bool enabled;

  Option(this.index, this.label, this.enabled);
}
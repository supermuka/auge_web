// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:html' as html;
import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_forms/angular_forms.dart';

import 'package:intl/intl.dart';

import 'package:auge_server/model/user.dart';
import 'package:auge_web/message/messages.dart';

import 'package:angular_components/model/selection/selection_model.dart';

import 'package:auge_web/src/auth/auth_service.dart';
import 'package:auge_web/src/user/user_service.dart';
import 'dart:convert' show base64;
import 'dart:typed_data' show Uint8List, ByteBuffer;
import 'package:crypto/crypto.dart' show sha256;

import 'package:auge_web/services/common_service.dart' as common_service;


import 'package:image/image.dart';

@Component(
    selector: 'auge-user-detail',
    providers: const [UserService],
    directives: const [
      coreDirectives,
      routerDirectives,
      materialDirectives,
      formDirectives,
    ],
    templateUrl: 'user_detail_component.html',
    styleUrls: const [
      'user_detail_component.css'
    ])

/// Component uses to add and edit an [User] and [UserProfile]
class UserDetailComponent extends Object implements OnInit {

  /// Entry user to edit. If new, this should be null
  @Input()
  User selectedUser = new User();

  final _closeController = new StreamController<void>.broadcast(sync: true);

  /// Publishes events when close.
  @Output()
  Stream<void> get close => _closeController.stream;

  final _saveController = new StreamController<User>.broadcast(sync: true);

  /// Publishes events when save.
  @Output()
  Stream<User> get save => _saveController.stream;

  final AuthService _authService;
  final UserService _userService;
  final Router _router;
  final Location _location;

  final SelectionModel selectionModelUserAuthorization = new SelectionModel.multi();
  final SelectionModel selectionModelIdiom = new SelectionModel.multi();

  String _passwordOrigin;

  User user = new User();

  String errorPercentualConcluido;
  
  List<Option> userAuthorizationOptions = new List();


  String get getUsFlag => '/packages/auge_web/assets/images/flag_us.png';
  String get getEsFlag => '/packages/auge_web/assets/images/flag_es.png';
  String get getBrFlag => '/packages/auge_web/assets/images/flag_br.png';

  UserDetailComponent(this._authService, this._userService, this._router, this._location) {
    UserAuthorization.values.forEach((f) => userAuthorizationOptions.add(new Option(f.index, UserMessage.label(f.toString()) , false, false) ));
  }

  bool get authenticatedUserIsSuperAdmin => _authService.authenticatedUser.userProfile.isSuperAdmin;

  // Define messages and labels
  static final String requiredValueMsg = CommonMessage.requiredValueMsg();

  static final String addUserLabel =  UserMessage.label('Add User');
  static final String editUserLabel =  UserMessage.label('Edit User');
  static final String nameLabel =  UserMessage.label('Name');
  static final String emailLabel =  UserMessage.label('e-Mail');
  static final String passwordLabel =  UserMessage.label('Password');
  static final String authorizationLabel = UserMessage.label('Authorization');
  static final String photoLabel = UserMessage.label('Photo');
  static final String superAdminLabel = UserMessage.label('Super Admin');
  static final String idiomLabel = UserMessage.label('Idiom');


  static final String uploadButtonLabel = CommonMessage.buttonLabel('Upload');
  static final String clearButtonLabel = CommonMessage.buttonLabel('Clear');
  static final String saveButtonLabel = CommonMessage.buttonLabel('Save');
  static final String closeButtonLabel = CommonMessage.buttonLabel('Close');

  @override
  void ngOnInit() {

    if (selectedUser != null) {
      // Clone objective
      user = selectedUser.clone();
    } else {
      // objective.organization = _authService.selectedOrganization;

      user.userProfile.idiomLocale = Intl.defaultLocale;
    }

  }

  void saveUser() async {
    await _userService.saveUser(user);
    _saveController.add(user);
    closeDetail();
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

        Image thumbnail = copyResize(image, 120);

        user.userProfile.image = base64.encode(encodePng(thumbnail));

      });

      reader.onError.listen((itWentWrongEvent) {
        // Handle the error
      });

      reader.readAsArrayBuffer(file);

    }
  }

  String userUrlImage(User user) {
    return common_service.userUrlImage(user);
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
    return (user.name?.trim()?.isNotEmpty && user.eMail?.trim()?.isNotEmpty) ?? false;
  }

  void closeDetail() {
    _closeController.add(null);

  }
}

class Option {
  final int index;
  final String label;
  bool selected;
  bool disabled;

  Option(this.index, this.label, this.selected, this.disabled);
}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:html' as html;

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_forms/angular_forms.dart';

import 'package:auge/shared/model/user.dart';
import 'package:auge/shared/message/messages.dart';
import 'package:angular_components/material_radio/material_radio.dart';
import 'package:angular_components/material_radio/material_radio_group.dart';
import 'package:angular_components/model/selection/selection_model.dart';

import 'package:auge/web/src/user/user_service.dart';
import 'dart:convert' show base64;
import 'dart:typed_data' show Uint8List, ByteBuffer;
import 'package:crypto/crypto.dart' show sha256;

import 'package:auge/web/services/app_routes.dart';

@Component(
    selector: 'auge-user-detail',
    providers: const [UserService],
    directives: const [
      coreDirectives,
      routerDirectives,
      AutoFocusDirective,
      ModalComponent,
      materialDirectives,
      materialInputDirectives,
      materialNumberInputDirectives,
      formDirectives,
      MaterialNumberValidator,
      MaterialButtonComponent,
      MaterialIconComponent,
      MaterialDialogComponent,
      MaterialAutoSuggestInputComponent,
    ],
    templateUrl: 'user_detail_component.html',
    styleUrls: const [
      'user_detail_component.css'
    ])

/// Component uses to add and edit an [User] and [UserProfile]
class UserDetailComponent implements OnActivate {

  final UserService _userService;
  final Router _router;
  final Location _location;

  String _passwordOrigin;

  User user = new User();

  List<User> _users;

  String errorPercentualConcluido;
  
  List<Option> userAuthorizationOptions = new List();
  
  final SelectionModel selectionModelUserAuthorization = new SelectionModel.multi();

  UserDetailComponent(this._userService, this._router, this._location) {
    UserAuthorization.values.forEach((f) => userAuthorizationOptions.add(new Option(f.index, UserMessage.label(f.toString()) , false, false) ));
  }

  // Define messages and labels
  String requiredValueMsg() => CommonMessage.requiredValueMsg();
  String label(String label) =>  UserMessage.label(label);
  String buttonLabel(String label) =>  CommonMessage.buttonLabel(label);

  @override
  Future onActivate(b, a) async {

    String id = _router.current.parameters[AppRoutes.userIdParameter];
    if (id != null && id.isNotEmpty) {
      user = await _userService.getUserById(id, true);
    }
  }

  Future<Null> save() async {
    await _userService.saveUser(user);
    goBack();
  }

  Future<Null> delete() async {
    try {
      await _userService.deleteUser(user);
      goBack();
    } catch (e) {
      print(e);
    }
  }


  void goBack() {
    _location.back();
  }

  Future<Null> uploadImage() async {
    html.InputElement _uploadImage = html.querySelector("#upload_image");

    html.FileList files = _uploadImage.files;
    if (files.length > 0) {
      html.File file = files.item(0);

      html.FileReader reader = new html.FileReader();

      reader.onLoad.listen((fileEvent) {
        Uint8List fileContent = reader.result;
        // Code doing stuff with fileContent goes here!

        user.userProfile.image = base64.encode(fileContent);

      });

      reader.onError.listen((itWentWrongEvent) {
        // Handle the error
      });

      reader.readAsArrayBuffer(file);

    }
  }

  String userUrlImage(User user) {
    return _userService.userUrlImage(user);
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
}

class Option {
  final int index;
  final String label;
  bool selected;
  bool disabled;

  Option(this.index, this.label, this.selected, this.disabled);
}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

/// Return an image uri for user
String userUrlImage(String userProfileImage) {
  if (userProfileImage == null)
    return '/packages/auge_web/assets/images/no_avatar.png';
  else
    return 'data:image/*;base64,' + userProfileImage;
}

/// Handle Timeout
const int durationMilliseconds = 5000;

Timer startTimeoutTimer(Function handleTimeout, [int milliseconds] ) {
  Duration duration = Duration(milliseconds:  milliseconds == null ? durationMilliseconds : milliseconds);
  return new Timer(duration, handleTimeout);
}

Timer repeatingTimer(Function handleTimeout, [int milliseconds] ) {
  Duration duration = Duration(milliseconds: milliseconds == null ? durationMilliseconds : milliseconds);
  return new Timer.periodic(duration, handleTimeout);
}

String colorFromUuid(String id) {
  return id == null ? '#f2f2f2' : '#' + id.substring(0, 6);
}

String firstLetter(String name) {
  return name == null ? 'G' : name.substring(0, 1).toUpperCase();
}

/// When it exists, shows up.
String _error;

String get error => _error;

set error(String error) {
  _error = error;

  // Start a timeout to after to clear the error.
  // The error is presented just some seconds.
  startTimeoutTimer(() { _error = null; });
}
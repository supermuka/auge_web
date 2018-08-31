// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.


import 'dart:async';

/// Return an image uri for user
String userUrlImage(String userProfileImage) {
  if (userUrlImage == null)
    return '/packages/auge_web/assets/images/no_avatar.png';
  else
    return 'data:image/*;base64,' + userProfileImage;
}

/// Handle Timeout
const timeout = const Duration(seconds: 5);
const ms = const Duration(milliseconds: 1);

startTimeout(Function handleTimeout, [int milliseconds] ) {
  var duration = milliseconds == null ? timeout : ms * milliseconds;
  return new Timer(duration, handleTimeout);
}

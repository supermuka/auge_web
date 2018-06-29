// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'package:auge_shared/model/user.dart';

/// Return an image uri for user
String userUrlImage(User user) {
  if (user?.userProfile?.image == null)
    return '/packages/auge_web/assets/images/no_avatar.png';
  else
    return 'data:image/*;base64,' + user?.userProfile?.image;
}
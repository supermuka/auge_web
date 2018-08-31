import 'package:angular/core.dart';

import 'package:auge_web/services/common_service.dart';

@Injectable()
class AppLayoutService {

  /// Enabled search on app header
  bool enabledSearch = false;

  String headerTitle = 'AUGE';

  /// When it exists, shows up.
  String _error;

  get error => _error;

  set error(String error) {
    _error = error;

    // Start a timeout to after to clear the error.
    // The error is presented just some seconds.
    startTimeout(() { _error = null; });
  }

}
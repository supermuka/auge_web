import 'package:angular/core.dart';
import 'package:auge_web/services/common_service.dart';

@Injectable()
class AppLayoutService {

  String headerTitle = 'AUGE';
  /// Enabled search on app header
  //bool enabledSearch = false;
  /// Index for history timeline
  int systemModuleIndex;

  /// When it exists, shows up.
  String _error;

  String get error => _error;

  set error(String error) {
    _error = error;

    // Start a timeout to after to clear the error.
    // The error is presented just some seconds.
    startTimeoutTimer(() { _error = null; });
  }

}
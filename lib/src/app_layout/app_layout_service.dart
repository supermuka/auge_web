import 'package:angular/core.dart';

@Injectable()
class AppLayoutService {

  /// Enabled search on app header
  bool enabledSearch = false;

  String headerTitle = 'AUGE';

  /// When it exists, shows up.
  String error;
}
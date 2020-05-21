import 'package:angular/core.dart';

@Injectable()
class InsightService {
  InsightsFilterOrder insightsFilterOrder;

  InsightService() {
    insightsFilterOrder = InsightsFilterOrder();
  }
}

/// Used to change data between [Insights] and [Filter] Components
class InsightsFilterOrder {

  // Filter
  Set<String> groupIds = {};
  Set<String> leaderUserIds = {};

  // Filtered Items
  int filteredItems;

}
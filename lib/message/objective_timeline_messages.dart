/// Messages to objetive timeline actions

import 'package:intl/intl.dart';

class ObjectiveTimelineMessage {
  /// Commum Label
  static label(String label) => Intl.message(
      "${Intl.select(label, {
        'AUGE': 'AUGE',
        'Objectives and Initiatives': 'Objectives and Initiatives',
        'other': 'Not Defined'})}",
      name: "label",
      args: [label],
      // locale: "en",
      desc: "Common labels",
      examples: const {"AUGE": "Auge"}
  );
}

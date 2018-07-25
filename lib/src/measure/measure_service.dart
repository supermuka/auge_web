import 'dart:async';

import 'package:angular/core.dart';


import 'package:auge_web/services/augeapi_service.dart';

import 'package:auge_server/message_type/id_message.dart';
import 'package:auge_server/model/objective/measure.dart';

import 'package:auge_web/message/messages.dart';

@Injectable()
class MeasureService {

  final AugeApiService _augeApiService;

  MeasureService(this._augeApiService);

  /// Delete a [Measure]
  Future deleteMeasure(String id) async {
    await _augeApiService.objectiveAugeApi.deleteMeasure(id);
  }

  /// Return a [Measure] by Id
  Future<Measure> getMeasureById(id) async {
    return await _augeApiService.objectiveAugeApi.getMeasureById(id);
  }

  /// Return a [MeasureUnit] by Id
  Future<List<MeasureUnit>> getMeasureUnits() async {
    List<MeasureUnit> measureUnits = await _augeApiService.objectiveAugeApi.getMeasureUnits();

    // Translate name
    measureUnits.forEach((f) => f.name = MeasureMessage.measureUnitLabel(f.name));
  }

  /// Save (create or update) an [Measure]
  void saveMeasure(String objectiveId, Measure measure) async {
    if (measure.id == null) {

      IdMessage idMessage = await _augeApiService.objectiveAugeApi.createMeasure(measure, objectiveId);

      // ID - primary key generated on server-side.
      measure.id = idMessage?.id;
    } else {
      await _augeApiService.objectiveAugeApi.updateMeasure(measure, objectiveId);
    }
  }
}
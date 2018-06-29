import 'dart:async';

import 'package:angular/core.dart';
import 'package:auge_web/services/augeapi_service.dart';
import 'package:auge_shared/model/objective/measure.dart';

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
    return await _augeApiService.objectiveAugeApi.getMeasureUnits();
  }

  /// Save (create or update) an [Measure]
  void saveMeasure(String objectiveId, Measure measure) {
    if (measure.id == null) {
      _augeApiService.objectiveAugeApi.createMeasure(measure, objectiveId);
    } else {
      _augeApiService.objectiveAugeApi.updateMeasure(measure, objectiveId);
    }
  }
}
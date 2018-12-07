import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_web/services/augeapi_service.dart';

import 'package:auge_server/message/created_message.dart';
import 'package:auge_server/model/objective/measure.dart';

import 'package:auge_web/message/messages.dart';

@Injectable()
class MeasureService {


  final AugeApiService _augeApiService;

  MeasureService(this._augeApiService);

  /// Delete a [Measure]
  /*
  Future deleteMeasure(String objectiveId, Measure measure) async {
    try {
      await _augeApiService.objectiveAugeApi.deleteMeasure(id);
    } catch (e) {
      rethrow;
    }
  }
  */

  /// Return a list of [Measure] by [objectiveId]
  Future<List<Measure>> getMeasures(String objectiveId) async {
    return await _augeApiService.objectiveAugeApi.getMeasures(objectiveId);
    // return await _augeApiService.objectiveAugeApi.getObjectives(organizationId, id: id, withMeasures: withMeasures);
  }

  /// Return an [Measure] by Id
  Future<Measure> getMeasureById(String id) async {
    try {

      Measure measure = await _augeApiService.objectiveAugeApi.getMeasureById(id);

      return measure;

    } on DetailedApiRequestError catch (e) {
      if (e.status == 204 && e.errors.firstWhere((ed) => ed.reason == RpcErrorDetailMessage.measureUnitsDataNotFoundReason, orElse: null ) != null)
        return null;
      else {
        rethrow;
      }
    }

    // return await _augeApiService.objectiveAugeApi.getObjectives(organizationId, id: id, withMeasures: withMeasures);
  }

  /// Return an [MeasureProgress] by [Measure.id]
  Future<List<MeasureProgress>> getMeasureProgress(String measureId) async {

    return await _augeApiService.objectiveAugeApi.getMeasureProgress(measureId);


    // return await _augeApiService.objectiveAugeApi.getObjectives(organizationId, id: id, withMeasures: withMeasures);
  }




  /// Return an [MeasureProgress] by id [MeasureProgress.id]
  Future<MeasureProgress> getMeasureProgressById(String measureProgressId) async {

      try {

        MeasureProgress measureProgress = await _augeApiService.objectiveAugeApi.getMeasureProgressById(measureProgressId);

        return measureProgress;

      } on DetailedApiRequestError catch (e) {
        if (e.status == 204 && e.errors.firstWhere((ed) => ed.reason == RpcErrorDetailMessage.measureUnitsDataNotFoundReason, orElse: null ) != null)
          return null;
        else {
          rethrow;
        }
      }

    // return await _augeApiService.objectiveAugeApi.getObjectives(organizationId, id: id, withMeasures: withMeasures);
  }


  /// Return [MeasureUnit] list
  Future<List<MeasureUnit>> getMeasureUnits() async {

    // List<MeasureUnit> measureUnits = await _augeApiService.objectiveAugeApi.getMeasureUnits();

      List<MeasureUnit> measureUnits =  await _augeApiService.objectiveAugeApi.getMeasureUnits();

      // Translate name
      measureUnits.forEach((f) => f.name = MeasureMsg.measureUnitLabel(f.name));
      return measureUnits;

    // Translate name
    // measureUnits.forEach((f) => f.name = MeasureMessage.measureUnitLabel(f.name));
  }


  /// Save (create or update) an [Measure]
  void saveMeasure(String objectiveId, Measure measure) async {
    try {
      if (measure.id == null) {
        IdMessage idMessage = await _augeApiService.objectiveAugeApi
            .createMeasure(measure, objectiveId);

        // ID - primary key generated on server-side.
        measure.id = idMessage?.id;

      } else {
        await _augeApiService.objectiveAugeApi.updateMeasure(
            measure, objectiveId);

      }
    } catch (e) {
      rethrow;
    }
  }

  /// Save (create) a [MeasureProgress]
  Future<String> createMeasureProgress(String measureId, int measureVersion, MeasureProgress measureProgress) async {
    try {
        IdMessage idMessage = await _augeApiService.objectiveAugeApi
            .createMeasureProgress(measureProgress, measureId, measureVersion);

        // ID - primary key generated on server-side.
        print(' ID - primary key generated on server-side.');
        print(idMessage?.id);
        return idMessage?.id;

    } catch (e) {
      rethrow;
    }
  }

  /// Save (update) a [MeasureProgress]
  void updateMeasureProgress(String measureId, int measureVersion, MeasureProgress measureProgress) async {
    try {
       await _augeApiService.objectiveAugeApi
            .updateMeasureProgress(measureProgress, measureId, measureVersion);

    } catch (e) {
      rethrow;
    }
  }
}
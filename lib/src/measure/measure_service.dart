import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_web/src/auth/auth_service.dart';

import 'package:auge_server/model/objective/measure.dart';

import 'package:auge_web/services/auge_api_service.dart';
import 'package:auge_web/message/messages.dart';

import 'package:auge_server/src/protos/generated/google/protobuf/empty.pb.dart' as empty_pb;
import 'package:auge_server/src/protos/generated/general/common.pb.dart' as common_pb;
import 'package:auge_server/src/protos/generated/objective/measure.pbgrpc.dart' as measure_pbgrpc;

import 'package:grpc/grpc_web.dart';


@Injectable()
class MeasureService {
  final AuthService _authService;
  final AugeApiService _augeApiService;
  measure_pbgrpc.MeasureServiceClient _measureServiceClient;

  MeasureService(this._authService, this._augeApiService) {
     _measureServiceClient = measure_pbgrpc.MeasureServiceClient(_augeApiService.channel);
  }

  /// Delete a [Measure]

  /// Return a list of [Measure] by [objectiveId]
  Future<List<Measure>> getMeasures(String objectiveId) async {
    return (await _measureServiceClient.getMeasures(
        measure_pbgrpc.MeasureGetRequest()
          ..objectiveId = objectiveId)).measures.map((m) =>
    Measure()
    ..readFromProtoBuf(m)).toList();
  }

  /// Return an [Measure] by Id
  Future<Measure> getMeasure(String id) async {
    try {
      //--Measure measure = await _augeApiService.objectiveAugeApi.getMeasureById(id);

      measure_pbgrpc.Measure measure = await _measureServiceClient.getMeasure(
          measure_pbgrpc.MeasureGetRequest()
            ..id = id);

      return Measure()..readFromProtoBuf(measure);

    } on GrpcError catch (e) {
      /*--
      if (e.status == 204 && e.errors.firstWhere((ed) => ed.reason == RpcErrorDetailMessage.measureDataNotFoundReason, orElse: null ) != null)
        return null;
      else {
        rethrow;
      }
      */

        print(e);
        rethrow;
      }
  }

  /// Return an [MeasureProgress] by [Measure.id]
  Future<List<MeasureProgress>> getMeasureProgresses(String measureId) async {

    measure_pbgrpc
        .MeasureProgressesResponse measureProgressesResponsePb = await _measureServiceClient
        .getMeasureProgresses(measure_pbgrpc.MeasureProgressGetRequest()
      ..measureId = measureId);

    return measureProgressesResponsePb.measureProgresses.map((m) =>
    MeasureProgress()
    ..readFromProtoBuf(m)).toList();
  }

  /// Return an [MeasureProgress] by id [MeasureProgress.id]
  Future<MeasureProgress> getMeasureProgressById(String measureProgressId) async {
    measure_pbgrpc.MeasureProgress measureProgressPb;
      try {
        measureProgressPb = await _measureServiceClient
            .getMeasureProgress(measure_pbgrpc.MeasureProgressGetRequest()..id = measureProgressId);

      } on GrpcError {
        /*--
      } on DetailedApiRequestError catch (e) {
        if (e.status == 204 && e.errors.firstWhere((ed) => ed.reason == RpcErrorDetailMessage.measureUnitsDataNotFoundReason, orElse: null ) != null)
          return null;
        else {
          rethrow;
        }

         */
      }
      return MeasureProgress()..readFromProtoBuf(measureProgressPb);
  }

  /// Return [MeasureUnit] list
  Future<List<MeasureUnit>> getMeasureUnits() async {

    // List<MeasureUnit> measureUnits = await _augeApiService.objectiveAugeApi.getMeasureUnits();
    measure_pbgrpc.MeasureUnitsResponse measureUnitsResponsePb = await _measureServiceClient
        .getMeasureUnits(empty_pb.Empty());

    List<MeasureUnit> measureUnits =  measureUnitsResponsePb.measureUnits.map((m) =>
    MeasureUnit()
      ..readFromProtoBuf(m)).toList();

      //List<MeasureUnit> measureUnits =  await _augeApiService.objectiveAugeApi.getMeasureUnits();

      // Translate name
      measureUnits.forEach((f) => f.name = MeasureMsg.measureUnitLabel(f.name));
      return measureUnits;

    // Translate name
    // measureUnits.forEach((f) => f.name = MeasureMessage.measureUnitLabel(f.name));
  }

  /// Save (create or update) an [Measure]
  void saveMeasure(String objectiveId, Measure measure) async {
    try {

      measure_pbgrpc.MeasureRequest measureRequest = measure_pbgrpc.MeasureRequest()
        ..measure = measure.writeToProtoBuf()
        ..objectiveId = objectiveId
        ..authenticatedOrganizationId = _authService.authorizedOrganization.id
        ..authenticatedUserId = _authService.authenticatedUser.id;

      if (measure.id == null) {

        common_pb.IdResponse idResponse = await _measureServiceClient
        .createMeasure(measureRequest);

        // ID - primary key generated on server-side.
        measure.id = idResponse?.id;

      } else {
        await _measureServiceClient.updateMeasure(measureRequest);
      }
    } catch (e) {
      rethrow;
    }
  }

  /// Save (create) a [MeasureProgress]
  Future<String> saveMeasureProgress(String measureId, MeasureProgress measureProgress) async {

    measure_pbgrpc.MeasureProgressRequest measureProgressRequest = measure_pbgrpc.MeasureProgressRequest()
      ..measureProgress = measureProgress.writeToProtoBuf()
      ..measureId = measureId
      ..authenticatedOrganizationId = _authService.authorizedOrganization.id
      ..authenticatedUserId = _authService.authenticatedUser.id;

    try {

      if (measureProgress.id == null) {
        common_pb.IdResponse idResponse = await _measureServiceClient
            .createMeasureProgress(measureProgressRequest);

        // ID - primary key generated on server-side.
        return idResponse?.id;
      } else {

       await _measureServiceClient
            .updateMeasureProgress(measureProgressRequest);

       return measureProgressRequest.measureProgress.id;
      }

    } catch (e) {
      rethrow;
    }
  }

  /// Save (update) a [MeasureProgress]
  void updateMeasureProgress(String measureId, MeasureProgress measureProgress) async {

    measure_pbgrpc.MeasureProgressRequest measureProgressRequest = measure_pbgrpc.MeasureProgressRequest()
      ..measureProgress = measureProgress.writeToProtoBuf()
      ..measureId = measureId
      ..authenticatedOrganizationId = _authService.authorizedOrganization.id
      ..authenticatedUserId = _authService.authenticatedUser.id;

    try {
       await _measureServiceClient
            .updateMeasureProgress(measureProgressRequest);

    } catch (e) {
      rethrow;
    }
  }

  /// Delete a [Measure]
  void deleteMeasure(Measure measure) async {

    measure_pbgrpc.MeasureDeleteRequest measureDeleteRequest = measure_pbgrpc.MeasureDeleteRequest()
      ..measureId = measure.id
      ..measureVersion = measure.version
      ..authenticatedOrganizationId = _authService.authorizedOrganization.id
      ..authenticatedUserId = _authService.authenticatedUser.id;
    try {
      await _measureServiceClient.deleteMeasure(measureDeleteRequest);
    } catch (e) {
      rethrow;
    }
  }
}
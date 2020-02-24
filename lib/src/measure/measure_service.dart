import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_web/src/auth/auth_service.dart';

import 'package:auge_shared/domain/objective/measure.dart';

import 'package:auge_web/services/auge_api_service.dart';
import 'package:auge_shared/message/messages.dart';

import 'package:auge_shared/protos/generated/google/protobuf/empty.pb.dart' as empty_pb;
import 'package:auge_shared/protos/generated/google/protobuf/wrappers.pb.dart' as wrappers_pb;
import 'package:auge_shared/protos/generated/objective/objective_measure.pbgrpc.dart' as objective_measure_pbgrpc;

import 'package:grpc/grpc_web.dart';


@Injectable()
class MeasureService {
  final AuthService _authService;
  final AugeApiService _augeApiService;
  objective_measure_pbgrpc.MeasureServiceClient _measureServiceClient;

  MeasureService(this._authService, this._augeApiService) {
     _measureServiceClient = objective_measure_pbgrpc.MeasureServiceClient(_augeApiService.channel);
  }

  /// Delete a [Measure]

  /// Return a list of [Measure] by [objectiveId]
  Future<List<Measure>> getMeasures(String objectiveId) async {
    Map<String, dynamic> cache = {};
    return (await _measureServiceClient.getMeasures(
        objective_measure_pbgrpc.MeasureGetRequest()
          ..objectiveId = objectiveId)).measures.map((m) =>
    Measure()
    ..readFromProtoBuf(m, cache)).toList();
  }

  /// Return an [Measure] by Id
  Future<Measure> getMeasure(String id) async {
    try {
      //--Measure measure = await _augeApiService.objectiveAugeApi.getMeasureById(id);

      objective_measure_pbgrpc.Measure measure = await _measureServiceClient.getMeasure(
          objective_measure_pbgrpc.MeasureGetRequest()
            ..id = id);

      return Measure()..readFromProtoBuf(measure, {});

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
  Future<List<MeasureProgress>> getMeasureProgresses(String measureId, {bool withMeasure = false}) async {

    objective_measure_pbgrpc
        .MeasureProgressesResponse measureProgressesResponsePb = await _measureServiceClient
        .getMeasureProgresses(objective_measure_pbgrpc.MeasureProgressGetRequest()
      ..measureId = measureId..withMeasure = withMeasure);
    Map<String, dynamic> cache = {};
    return measureProgressesResponsePb.measureProgresses.map((m) =>
    MeasureProgress()
    ..readFromProtoBuf(m, cache)).toList();
  }

  /// Return an [MeasureProgress] by id [MeasureProgress.id]
  Future<MeasureProgress> getMeasureProgressById(String measureProgressId) async {
    objective_measure_pbgrpc.MeasureProgress measureProgressPb;
      try {
        measureProgressPb = await _measureServiceClient
            .getMeasureProgress(objective_measure_pbgrpc.MeasureProgressGetRequest()..id = measureProgressId);

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
      return MeasureProgress()..readFromProtoBuf(measureProgressPb, {});
  }

  /// Return [MeasureUnit] list
  Future<List<MeasureUnit>> getMeasureUnits() async {

    // List<MeasureUnit> measureUnits = await _augeApiService.objectiveAugeApi.getMeasureUnits();
    objective_measure_pbgrpc.MeasureUnitsResponse measureUnitsResponsePb = await _measureServiceClient
        .getMeasureUnits(empty_pb.Empty());

    List<MeasureUnit> measureUnits =  measureUnitsResponsePb.measureUnits.map((m) =>
    MeasureUnit()
      ..readFromProtoBuf(m)).toList();

      //List<MeasureUnit> measureUnits =  await _augeApiService.objectiveAugeApi.getMeasureUnits();

      // Translate name
      measureUnits.forEach((f) => f.name = MeasureMsg.measureUnitLabel('${f.name}Label'));
      return measureUnits;

    // Translate name
    // measureUnits.forEach((f) => f.name = MeasureMessage.measureUnitLabel(f.name));
  }

  /// Save (create or update) an [Measure]
  void saveMeasure(String objectiveId, Measure measure) async {
    try {

      objective_measure_pbgrpc.MeasureRequest measureRequest = objective_measure_pbgrpc.MeasureRequest()
        ..measure = measure.writeToProtoBuf()
        ..objectiveId = objectiveId
        ..authOrganizationId = _authService.authorizedOrganization.id
        ..authUserId = _authService.authenticatedUser.id;

      if (measure.id == null) {

        wrappers_pb.StringValue idResponse = await _measureServiceClient
        .createMeasure(measureRequest);

        // ID - primary key generated on server-side.
        measure.id = idResponse?.value;

      } else {
        await _measureServiceClient.updateMeasure(measureRequest);
      }
    } catch (e) {
      rethrow;
    }
  }

  /// Save (create) a [MeasureProgress]
  Future<String> saveMeasureProgress(String measureId, MeasureProgress measureProgress) async {

    objective_measure_pbgrpc.MeasureProgressRequest measureProgressRequest = objective_measure_pbgrpc.MeasureProgressRequest()
      ..measureProgress = measureProgress.writeToProtoBuf()
      ..measureId = measureId
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id;

    try {

      if (measureProgress.id == null) {
        wrappers_pb.StringValue idResponse = await _measureServiceClient
            .createMeasureProgress(measureProgressRequest);

        // ID - primary key generated on server-side.
        return idResponse?.value;
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

    objective_measure_pbgrpc.MeasureProgressRequest measureProgressRequest = objective_measure_pbgrpc.MeasureProgressRequest()
      ..measureProgress = measureProgress.writeToProtoBuf()
      ..measureId = measureId
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id;

    try {
       await _measureServiceClient
            .updateMeasureProgress(measureProgressRequest);

    } catch (e) {
      rethrow;
    }
  }

  /// Delete a [Measure]
  void deleteMeasure(Measure measure) async {

    objective_measure_pbgrpc.MeasureDeleteRequest measureDeleteRequest = objective_measure_pbgrpc.MeasureDeleteRequest()
      ..measureId = measure.id
      ..measureVersion = measure.version
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id;
    try {
      await _measureServiceClient.deleteMeasure(measureDeleteRequest);
    } catch (e) {
      rethrow;
    }
  }

  /// Delete a [MeasureProgress]
  void deleteMeasureProgress(MeasureProgress measureProgress) async {

    objective_measure_pbgrpc.MeasureProgressDeleteRequest measureProgressDeleteRequest = objective_measure_pbgrpc.MeasureProgressDeleteRequest()
      ..measureProgressId = measureProgress.id
      ..measureProgressVersion = measureProgress.version
      ..authOrganizationId = _authService.authorizedOrganization.id
      ..authUserId = _authService.authenticatedUser.id;
    try {
      await _measureServiceClient.deleteMeasureProgress(measureProgressDeleteRequest);
    } catch (e) {
      rethrow;
    }
  }
}
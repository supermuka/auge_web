define(['dart_sdk', 'packages/auge_shared/protos/generated/general/group.pb', 'packages/grpc/src/client/call', 'packages/auge_shared/protos/generated/google/protobuf/wrappers.pb', 'packages/auge_shared/protos/generated/google/protobuf/empty.pb', 'packages/grpc/src/client/client'], function(dart_sdk, packages__auge_shared__protos__generated__general__group$46pb, packages__grpc__src__client__call, packages__auge_shared__protos__generated__google__protobuf__wrappers$46pb, packages__auge_shared__protos__generated__google__protobuf__empty$46pb, packages__grpc__src__client__client) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const group$46pb = packages__auge_shared__protos__generated__general__group$46pb.protos__generated__general__group$46pb;
  const common = packages__grpc__src__client__call.src__client__common;
  const call = packages__grpc__src__client__call.src__client__call;
  const method = packages__grpc__src__client__call.src__client__method;
  const wrappers$46pb = packages__auge_shared__protos__generated__google__protobuf__wrappers$46pb.protos__generated__google__protobuf__wrappers$46pb;
  const empty$46pb = packages__auge_shared__protos__generated__google__protobuf__empty$46pb.protos__generated__google__protobuf__empty$46pb;
  const client = packages__grpc__src__client__client.src__client__client;
  const service = packages__grpc__src__client__client.src__server__service;
  const call$ = packages__grpc__src__client__client.src__server__call;
  const group$46pbgrpc = Object.create(dart.library);
  let StreamOfGroupGetRequest = () => (StreamOfGroupGetRequest = dart.constFn(async.Stream$(group$46pb.GroupGetRequest)))();
  let JSArrayOfGroupGetRequest = () => (JSArrayOfGroupGetRequest = dart.constFn(_interceptors.JSArray$(group$46pb.GroupGetRequest)))();
  let ResponseFutureOfGroupsResponse = () => (ResponseFutureOfGroupsResponse = dart.constFn(common.ResponseFuture$(group$46pb.GroupsResponse)))();
  let ResponseFutureOfGroup = () => (ResponseFutureOfGroup = dart.constFn(common.ResponseFuture$(group$46pb.Group)))();
  let StreamOfGroupRequest = () => (StreamOfGroupRequest = dart.constFn(async.Stream$(group$46pb.GroupRequest)))();
  let JSArrayOfGroupRequest = () => (JSArrayOfGroupRequest = dart.constFn(_interceptors.JSArray$(group$46pb.GroupRequest)))();
  let ResponseFutureOfStringValue = () => (ResponseFutureOfStringValue = dart.constFn(common.ResponseFuture$(wrappers$46pb.StringValue)))();
  let ResponseFutureOfEmpty = () => (ResponseFutureOfEmpty = dart.constFn(common.ResponseFuture$(empty$46pb.Empty)))();
  let StreamOfGroupDeleteRequest = () => (StreamOfGroupDeleteRequest = dart.constFn(async.Stream$(group$46pb.GroupDeleteRequest)))();
  let JSArrayOfGroupDeleteRequest = () => (JSArrayOfGroupDeleteRequest = dart.constFn(_interceptors.JSArray$(group$46pb.GroupDeleteRequest)))();
  let ClientMethodOfGroupGetRequest$GroupsResponse = () => (ClientMethodOfGroupGetRequest$GroupsResponse = dart.constFn(method.ClientMethod$(group$46pb.GroupGetRequest, group$46pb.GroupsResponse)))();
  let GroupGetRequestToUint8List = () => (GroupGetRequestToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [group$46pb.GroupGetRequest])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let ListOfintToGroupsResponse = () => (ListOfintToGroupsResponse = dart.constFn(dart.fnType(group$46pb.GroupsResponse, [ListOfint()])))();
  let ClientMethodOfGroupGetRequest$Group = () => (ClientMethodOfGroupGetRequest$Group = dart.constFn(method.ClientMethod$(group$46pb.GroupGetRequest, group$46pb.Group)))();
  let ListOfintToGroup = () => (ListOfintToGroup = dart.constFn(dart.fnType(group$46pb.Group, [ListOfint()])))();
  let ClientMethodOfGroupRequest$StringValue = () => (ClientMethodOfGroupRequest$StringValue = dart.constFn(method.ClientMethod$(group$46pb.GroupRequest, wrappers$46pb.StringValue)))();
  let GroupRequestToUint8List = () => (GroupRequestToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [group$46pb.GroupRequest])))();
  let ListOfintToStringValue = () => (ListOfintToStringValue = dart.constFn(dart.fnType(wrappers$46pb.StringValue, [ListOfint()])))();
  let ClientMethodOfGroupRequest$Empty = () => (ClientMethodOfGroupRequest$Empty = dart.constFn(method.ClientMethod$(group$46pb.GroupRequest, empty$46pb.Empty)))();
  let ListOfintToEmpty = () => (ListOfintToEmpty = dart.constFn(dart.fnType(empty$46pb.Empty, [ListOfint()])))();
  let ClientMethodOfGroupDeleteRequest$Empty = () => (ClientMethodOfGroupDeleteRequest$Empty = dart.constFn(method.ClientMethod$(group$46pb.GroupDeleteRequest, empty$46pb.Empty)))();
  let GroupDeleteRequestToUint8List = () => (GroupDeleteRequestToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [group$46pb.GroupDeleteRequest])))();
  let ServiceMethodOfGroupGetRequest$GroupsResponse = () => (ServiceMethodOfGroupGetRequest$GroupsResponse = dart.constFn(service.ServiceMethod$(group$46pb.GroupGetRequest, group$46pb.GroupsResponse)))();
  let ListOfintToGroupGetRequest = () => (ListOfintToGroupGetRequest = dart.constFn(dart.fnType(group$46pb.GroupGetRequest, [ListOfint()])))();
  let GroupsResponseToUint8List = () => (GroupsResponseToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [group$46pb.GroupsResponse])))();
  let ServiceMethodOfGroupGetRequest$Group = () => (ServiceMethodOfGroupGetRequest$Group = dart.constFn(service.ServiceMethod$(group$46pb.GroupGetRequest, group$46pb.Group)))();
  let GroupToUint8List = () => (GroupToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [group$46pb.Group])))();
  let ServiceMethodOfGroupRequest$StringValue = () => (ServiceMethodOfGroupRequest$StringValue = dart.constFn(service.ServiceMethod$(group$46pb.GroupRequest, wrappers$46pb.StringValue)))();
  let ListOfintToGroupRequest = () => (ListOfintToGroupRequest = dart.constFn(dart.fnType(group$46pb.GroupRequest, [ListOfint()])))();
  let StringValueToUint8List = () => (StringValueToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [wrappers$46pb.StringValue])))();
  let ServiceMethodOfGroupRequest$Empty = () => (ServiceMethodOfGroupRequest$Empty = dart.constFn(service.ServiceMethod$(group$46pb.GroupRequest, empty$46pb.Empty)))();
  let EmptyToUint8List = () => (EmptyToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [empty$46pb.Empty])))();
  let ServiceMethodOfGroupDeleteRequest$Empty = () => (ServiceMethodOfGroupDeleteRequest$Empty = dart.constFn(service.ServiceMethod$(group$46pb.GroupDeleteRequest, empty$46pb.Empty)))();
  let ListOfintToGroupDeleteRequest = () => (ListOfintToGroupDeleteRequest = dart.constFn(dart.fnType(group$46pb.GroupDeleteRequest, [ListOfint()])))();
  const CT = Object.create(null);
  group$46pbgrpc.GroupServiceClient = class GroupServiceClient extends client.Client {
    getGroups(request, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      let call = this.$createCall(group$46pb.GroupGetRequest, group$46pb.GroupsResponse, group$46pbgrpc.GroupServiceClient._$getGroups, StreamOfGroupGetRequest().fromIterable(JSArrayOfGroupGetRequest().of([request])), {options: options});
      return new (ResponseFutureOfGroupsResponse()).new(call);
    }
    getGroup(request, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      let call = this.$createCall(group$46pb.GroupGetRequest, group$46pb.Group, group$46pbgrpc.GroupServiceClient._$getGroup, StreamOfGroupGetRequest().fromIterable(JSArrayOfGroupGetRequest().of([request])), {options: options});
      return new (ResponseFutureOfGroup()).new(call);
    }
    createGroup(request, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      let call = this.$createCall(group$46pb.GroupRequest, wrappers$46pb.StringValue, group$46pbgrpc.GroupServiceClient._$createGroup, StreamOfGroupRequest().fromIterable(JSArrayOfGroupRequest().of([request])), {options: options});
      return new (ResponseFutureOfStringValue()).new(call);
    }
    updateGroup(request, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      let call = this.$createCall(group$46pb.GroupRequest, empty$46pb.Empty, group$46pbgrpc.GroupServiceClient._$updateGroup, StreamOfGroupRequest().fromIterable(JSArrayOfGroupRequest().of([request])), {options: options});
      return new (ResponseFutureOfEmpty()).new(call);
    }
    deleteGroup(request, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      let call = this.$createCall(group$46pb.GroupDeleteRequest, empty$46pb.Empty, group$46pbgrpc.GroupServiceClient._$deleteGroup, StreamOfGroupDeleteRequest().fromIterable(JSArrayOfGroupDeleteRequest().of([request])), {options: options});
      return new (ResponseFutureOfEmpty()).new(call);
    }
  };
  (group$46pbgrpc.GroupServiceClient.new = function(channel, opts) {
    let options = opts && 'options' in opts ? opts.options : null;
    group$46pbgrpc.GroupServiceClient.__proto__.new.call(this, channel, {options: options});
    ;
  }).prototype = group$46pbgrpc.GroupServiceClient.prototype;
  dart.addTypeTests(group$46pbgrpc.GroupServiceClient);
  dart.setMethodSignature(group$46pbgrpc.GroupServiceClient, () => ({
    __proto__: dart.getMethods(group$46pbgrpc.GroupServiceClient.__proto__),
    getGroups: dart.fnType(common.ResponseFuture$(group$46pb.GroupsResponse), [group$46pb.GroupGetRequest], {options: call.CallOptions}, {}),
    getGroup: dart.fnType(common.ResponseFuture$(group$46pb.Group), [group$46pb.GroupGetRequest], {options: call.CallOptions}, {}),
    createGroup: dart.fnType(common.ResponseFuture$(wrappers$46pb.StringValue), [group$46pb.GroupRequest], {options: call.CallOptions}, {}),
    updateGroup: dart.fnType(common.ResponseFuture$(empty$46pb.Empty), [group$46pb.GroupRequest], {options: call.CallOptions}, {}),
    deleteGroup: dart.fnType(common.ResponseFuture$(empty$46pb.Empty), [group$46pb.GroupDeleteRequest], {options: call.CallOptions}, {})
  }));
  dart.setLibraryUri(group$46pbgrpc.GroupServiceClient, "package:auge_shared/protos/generated/general/group.pbgrpc.dart");
  dart.defineLazy(group$46pbgrpc.GroupServiceClient, {
    /*group$46pbgrpc.GroupServiceClient._$getGroups*/get _$getGroups() {
      return new (ClientMethodOfGroupGetRequest$GroupsResponse()).new("/auge.protobuf.GroupService/GetGroups", dart.fn(value => value.writeToBuffer(), GroupGetRequestToUint8List()), dart.fn(value => group$46pb.GroupsResponse.fromBuffer(value), ListOfintToGroupsResponse()));
    },
    /*group$46pbgrpc.GroupServiceClient._$getGroup*/get _$getGroup() {
      return new (ClientMethodOfGroupGetRequest$Group()).new("/auge.protobuf.GroupService/GetGroup", dart.fn(value => value.writeToBuffer(), GroupGetRequestToUint8List()), dart.fn(value => group$46pb.Group.fromBuffer(value), ListOfintToGroup()));
    },
    /*group$46pbgrpc.GroupServiceClient._$createGroup*/get _$createGroup() {
      return new (ClientMethodOfGroupRequest$StringValue()).new("/auge.protobuf.GroupService/CreateGroup", dart.fn(value => value.writeToBuffer(), GroupRequestToUint8List()), dart.fn(value => wrappers$46pb.StringValue.fromBuffer(value), ListOfintToStringValue()));
    },
    /*group$46pbgrpc.GroupServiceClient._$updateGroup*/get _$updateGroup() {
      return new (ClientMethodOfGroupRequest$Empty()).new("/auge.protobuf.GroupService/UpdateGroup", dart.fn(value => value.writeToBuffer(), GroupRequestToUint8List()), dart.fn(value => empty$46pb.Empty.fromBuffer(value), ListOfintToEmpty()));
    },
    /*group$46pbgrpc.GroupServiceClient._$deleteGroup*/get _$deleteGroup() {
      return new (ClientMethodOfGroupDeleteRequest$Empty()).new("/auge.protobuf.GroupService/DeleteGroup", dart.fn(value => value.writeToBuffer(), GroupDeleteRequestToUint8List()), dart.fn(value => empty$46pb.Empty.fromBuffer(value), ListOfintToEmpty()));
    }
  });
  group$46pbgrpc.GroupServiceBase = class GroupServiceBase extends service.Service {
    get $name() {
      return "auge.protobuf.GroupService";
    }
    getGroups_Pre(call, request) {
      return async.async(group$46pb.GroupsResponse, (function* getGroups_Pre() {
        return this.getGroups(call, yield request);
      }).bind(this));
    }
    getGroup_Pre(call, request) {
      return async.async(group$46pb.Group, (function* getGroup_Pre() {
        return this.getGroup(call, yield request);
      }).bind(this));
    }
    createGroup_Pre(call, request) {
      return async.async(wrappers$46pb.StringValue, (function* createGroup_Pre() {
        return this.createGroup(call, yield request);
      }).bind(this));
    }
    updateGroup_Pre(call, request) {
      return async.async(empty$46pb.Empty, (function* updateGroup_Pre() {
        return this.updateGroup(call, yield request);
      }).bind(this));
    }
    deleteGroup_Pre(call, request) {
      return async.async(empty$46pb.Empty, (function* deleteGroup_Pre() {
        return this.deleteGroup(call, yield request);
      }).bind(this));
    }
  };
  (group$46pbgrpc.GroupServiceBase.new = function() {
    group$46pbgrpc.GroupServiceBase.__proto__.new.call(this);
    this.$addMethod(new (ServiceMethodOfGroupGetRequest$GroupsResponse()).new("GetGroups", dart.bind(this, 'getGroups_Pre'), false, false, dart.fn(value => group$46pb.GroupGetRequest.fromBuffer(value), ListOfintToGroupGetRequest()), dart.fn(value => value.writeToBuffer(), GroupsResponseToUint8List())));
    this.$addMethod(new (ServiceMethodOfGroupGetRequest$Group()).new("GetGroup", dart.bind(this, 'getGroup_Pre'), false, false, dart.fn(value => group$46pb.GroupGetRequest.fromBuffer(value), ListOfintToGroupGetRequest()), dart.fn(value => value.writeToBuffer(), GroupToUint8List())));
    this.$addMethod(new (ServiceMethodOfGroupRequest$StringValue()).new("CreateGroup", dart.bind(this, 'createGroup_Pre'), false, false, dart.fn(value => group$46pb.GroupRequest.fromBuffer(value), ListOfintToGroupRequest()), dart.fn(value => value.writeToBuffer(), StringValueToUint8List())));
    this.$addMethod(new (ServiceMethodOfGroupRequest$Empty()).new("UpdateGroup", dart.bind(this, 'updateGroup_Pre'), false, false, dart.fn(value => group$46pb.GroupRequest.fromBuffer(value), ListOfintToGroupRequest()), dart.fn(value => value.writeToBuffer(), EmptyToUint8List())));
    this.$addMethod(new (ServiceMethodOfGroupDeleteRequest$Empty()).new("DeleteGroup", dart.bind(this, 'deleteGroup_Pre'), false, false, dart.fn(value => group$46pb.GroupDeleteRequest.fromBuffer(value), ListOfintToGroupDeleteRequest()), dart.fn(value => value.writeToBuffer(), EmptyToUint8List())));
  }).prototype = group$46pbgrpc.GroupServiceBase.prototype;
  dart.addTypeTests(group$46pbgrpc.GroupServiceBase);
  dart.setMethodSignature(group$46pbgrpc.GroupServiceBase, () => ({
    __proto__: dart.getMethods(group$46pbgrpc.GroupServiceBase.__proto__),
    getGroups_Pre: dart.fnType(async.Future$(group$46pb.GroupsResponse), [call$.ServiceCall, async.Future$(group$46pb.GroupGetRequest)]),
    getGroup_Pre: dart.fnType(async.Future$(group$46pb.Group), [call$.ServiceCall, async.Future$(group$46pb.GroupGetRequest)]),
    createGroup_Pre: dart.fnType(async.Future$(wrappers$46pb.StringValue), [call$.ServiceCall, async.Future$(group$46pb.GroupRequest)]),
    updateGroup_Pre: dart.fnType(async.Future$(empty$46pb.Empty), [call$.ServiceCall, async.Future$(group$46pb.GroupRequest)]),
    deleteGroup_Pre: dart.fnType(async.Future$(empty$46pb.Empty), [call$.ServiceCall, async.Future$(group$46pb.GroupDeleteRequest)])
  }));
  dart.setGetterSignature(group$46pbgrpc.GroupServiceBase, () => ({
    __proto__: dart.getGetters(group$46pbgrpc.GroupServiceBase.__proto__),
    $name: core.String
  }));
  dart.setLibraryUri(group$46pbgrpc.GroupServiceBase, "package:auge_shared/protos/generated/general/group.pbgrpc.dart");
  dart.trackLibraries("packages/auge_shared/protos/generated/general/group.pbgrpc", {
    "package:auge_shared/protos/generated/general/group.pbgrpc.dart": group$46pbgrpc
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["group.pbgrpc.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cA6CuE;UAC9C;AACf,iBAAO,wEAAY,+CAA2B,uCAAa,+BAAC,OAAO,eAC5D,OAAO;AACpB,YAAa,4CAAe,IAAI;IAClC;aAE2D;UACpC;AACf,iBAAO,+DAAY,8CAA0B,uCAAa,+BAAC,OAAO,eAC3D,OAAO;AACpB,YAAa,mCAAe,IAAI;IAClC;gBAEiE;UAC1C;AACf,iBAAO,qEACT,iDAA6B,oCAAa,4BAAC,OAAO,eACzC,OAAO;AACpB,YAAa,yCAAe,IAAI;IAClC;gBAE2D;UACpC;AACf,iBAAO,4DACT,iDAA6B,oCAAa,4BAAC,OAAO,eACzC,OAAO;AACpB,YAAa,mCAAe,IAAI;IAClC;gBAEiE;UAC1C;AACf,iBAAO,kEACT,iDAA6B,0CAAa,kCAAC,OAAO,eACzC,OAAO;AACpB,YAAa,mCAAe,IAAI;IAClC;;oDAvCuC;QAA4B;AAC7D,+DAAM,OAAO,YAAW,OAAO;;EAAC;;;;;;;;;;;;MAzBzB,6CAAW;YACd,0DACF,yCACA,QAAoB,SAAU,AAAM,KAAD,iDACnC,QAAuB,SAA4B,qCAAW,KAAK;;MAC9D,4CAAU;YAAS,iDAC5B,wCACA,QAAoB,SAAU,AAAM,KAAD,iDACnC,QAAuB,SAAmB,4BAAW,KAAK;;MACjD,+CAAa;YAChB,oDACF,2CACA,QAAiB,SAAU,AAAM,KAAD,8CAChC,QAAuB,SAAyB,qCAAW,KAAK;;MAC3D,+CAAa;YAAS,8CAC/B,2CACA,QAAiB,SAAU,AAAM,KAAD,8CAChC,QAAuB,SAAmB,4BAAW,KAAK;;MACjD,+CAAa;YAChB,oDACF,2CACA,QAAuB,SAAU,AAAM,KAAD,oDACtC,QAAuB,SAAmB,4BAAW,KAAK;;;;;AA6CxC;IAA4B;kBA0ChC,MAAwC;AADhB;AAE5C,cAAO,gBAAU,IAAI,EAAE,MAAM,OAAO;MACtC;;iBAGsB,MAAwC;AAD1B;AAElC,cAAO,eAAS,IAAI,EAAE,MAAM,OAAO;MACrC;;oBAGsB,MAAqC;AADd;AAE3C,cAAO,kBAAY,IAAI,EAAE,MAAM,OAAO;MACxC;;oBAGsB,MAAqC;AADpB;AAErC,cAAO,kBAAY,IAAI,EAAE,MAAM,OAAO;MACxC;;oBAE0D,MACjB;AADF;AAErC,cAAO,kBAAY,IAAI,EAAE,MAAM,OAAO;MACxC;;;;AA9DA;AAO0D,IANxD,gBAAiB,0DACb,uBACA,wBACA,OACA,OACA,QAAuB,SAA6B,sCAAW,KAAK,kCACpE,QAAmB,SAAU,AAAM,KAAD;AAOS,IAN/C,gBAAiB,iDACb,sBACA,uBACA,OACA,OACA,QAAuB,SAA6B,sCAAW,KAAK,kCACpE,QAAU,SAAU,AAAM,KAAD;AAOwB,IANrD,gBAAiB,oDACb,yBACA,0BACA,OACA,OACA,QAAuB,SAA0B,mCAAW,KAAK,+BACjE,QAAgB,SAAU,AAAM,KAAD;AAOY,IAN/C,gBAAiB,8CACb,yBACA,0BACA,OACA,OACA,QAAuB,SAA0B,mCAAW,KAAK,+BACjE,QAAU,SAAU,AAAM,KAAD;AAQkB,IAP/C,gBAAiB,oDACb,yBACA,0BACA,OACA,OACA,QAAuB,SACG,yCAAW,KAAK,qCAC1C,QAAU,SAAU,AAAM,KAAD;EAC/B","file":"group.pbgrpc.ddc.js"}');
  // Exports:
  return {
    protos__generated__general__group$46pbgrpc: group$46pbgrpc
  };
});

//# sourceMappingURL=group.pbgrpc.ddc.js.map

define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/auge_web/services/auge_api_service', 'packages/grpc/grpc_web', 'packages/angular/core.template'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__auge_web__services__auge_api_service, packages__grpc__grpc_web, packages__angular__core$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const auge_api_service = packages__auge_web__services__auge_api_service.services__auge_api_service;
  const web_channel = packages__grpc__grpc_web.src__client__web_channel;
  const core$46template = packages__angular__core$46template.core$46template;
  const auge_api_service$46template = Object.create(dart.library);
  let GrpcWebClientChannelToAugeApiService = () => (GrpcWebClientChannelToAugeApiService = dart.constFn(dart.fnType(auge_api_service.AugeApiService, [web_channel.GrpcWebClientChannel])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.wrapType(web_channel.GrpcWebClientChannel);
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], core.Object);
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1], ListOfObject());
    }
  });
  let C2;
  let C1;
  let C0;
  auge_api_service$46template.initReflector = function initReflector() {
    if (dart.test(auge_api_service$46template._visited)) {
      return;
    }
    auge_api_service$46template._visited = true;
    reflector.registerFactory(dart.wrapType(auge_api_service.AugeApiService), dart.fn(p0 => new auge_api_service.AugeApiService.new(p0), GrpcWebClientChannelToAugeApiService()));
    reflector.registerDependencies(dart.wrapType(auge_api_service.AugeApiService), C0 || CT.C0);
    core$46template.initReflector();
  };
  dart.defineLazy(auge_api_service$46template, {
    /*auge_api_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/auge_web/services/auge_api_service.template", {
    "package:auge_web/services/auge_api_service.template.dart": auge_api_service$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auge_api_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,uCAAW;AAEgF,IAA3F,0BAAuB,gDAAgB,QAA0B,MAAO,wCAAe,EAAE;AAGvF,IAFF,+BAA4B;AAGP,IAArB;EACF;;MAZI,oCAAQ;YAAG","file":"auge_api_service.template.ddc.js"}');
  // Exports:
  return {
    services__auge_api_service$46template: auge_api_service$46template
  };
});

//# sourceMappingURL=auge_api_service.template.ddc.js.map

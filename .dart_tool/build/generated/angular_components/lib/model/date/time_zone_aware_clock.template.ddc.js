define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/model/date/time_zone_aware_clock', 'packages/quiver/time', 'packages/angular/di.template'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular_components__model__date__time_zone_aware_clock, packages__quiver__time, packages__angular__di$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const time_zone_aware_clock = packages__angular_components__model__date__time_zone_aware_clock.model__date__time_zone_aware_clock;
  const time = packages__quiver__time.time;
  const di$46template = packages__angular__di$46template.di$46template;
  const time_zone_aware_clock$46template = Object.create(dart.library);
  let SettableTimeZoneToTimeZoneAwareClock = () => (SettableTimeZoneToTimeZoneAwareClock = dart.constFn(dart.fnType(time_zone_aware_clock.TimeZoneAwareClock, [time_zone_aware_clock.SettableTimeZone])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let SettableTimeZoneToClock = () => (SettableTimeZoneToClock = dart.constFn(dart.fnType(time.Clock, [time_zone_aware_clock.SettableTimeZone])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.wrapType(time_zone_aware_clock.SettableTimeZone);
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], core.Object);
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1], ListOfObject());
    },
    get C3() {
      return C3 = dart.fn(time_zone_aware_clock.clockFactory, SettableTimeZoneToClock());
    }
  });
  let C2;
  let C1;
  let C0;
  let C3;
  time_zone_aware_clock$46template.initReflector = function initReflector() {
    if (dart.test(time_zone_aware_clock$46template._visited)) {
      return;
    }
    time_zone_aware_clock$46template._visited = true;
    reflector.registerFactory(dart.wrapType(time_zone_aware_clock.TimeZoneAwareClock), dart.fn(p0 => new time_zone_aware_clock.TimeZoneAwareClock.new(p0), SettableTimeZoneToTimeZoneAwareClock()));
    reflector.registerDependencies(dart.wrapType(time_zone_aware_clock.TimeZoneAwareClock), C0 || CT.C0);
    reflector.registerDependencies(C3 || CT.C3, C0 || CT.C0);
    di$46template.initReflector();
  };
  dart.defineLazy(time_zone_aware_clock$46template, {
    /*time_zone_aware_clock$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/model/date/time_zone_aware_clock.template", {
    "package:angular_components/model/date/time_zone_aware_clock.template.dart": time_zone_aware_clock$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["time_zone_aware_clock.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,4CAAW;AAEoF,IAA/F,0BAAuB,yDAAoB,QAAsB,MAAO,iDAAmB,EAAE;AAG3F,IAFF,+BAA4B;AAK1B,IAFF;AAGqB,IAArB;EACF;;MAfI,yCAAQ;YAAG","file":"time_zone_aware_clock.template.ddc.js"}');
  // Exports:
  return {
    model__date__time_zone_aware_clock$46template: time_zone_aware_clock$46template
  };
});

//# sourceMappingURL=time_zone_aware_clock.template.ddc.js.map

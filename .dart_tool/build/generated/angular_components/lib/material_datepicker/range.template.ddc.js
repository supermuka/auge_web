define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_datepicker/range', 'packages/quiver/time', 'packages/angular/di.template', 'packages/angular_components/material_datepicker/proto/date.pb.template', 'packages/angular_components/material_datepicker/proto/date_range.pb.template', 'packages/angular_components/model/date/date.template'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_datepicker__range, packages__quiver__time, packages__angular__di$46template, packages__angular_components__material_datepicker__proto__date$46pb$46template, packages__angular_components__material_datepicker__proto__date_range$46pb$46template, packages__angular_components__model__date__date$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const range = packages__angular_components__material_datepicker__range.material_datepicker__range;
  const time = packages__quiver__time.time;
  const di$46template = packages__angular__di$46template.di$46template;
  const date$46pb$46template = packages__angular_components__material_datepicker__proto__date$46pb$46template.material_datepicker__proto__date$46pb$46template;
  const date_range$46pb$46template = packages__angular_components__material_datepicker__proto__date_range$46pb$46template.material_datepicker__proto__date_range$46pb$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const range$46template = Object.create(dart.library);
  let ClockToDatepickerDateRange = () => (ClockToDatepickerDateRange = dart.constFn(dart.fnType(range.DatepickerDateRange, [time.Clock])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(range.today, ClockToDatepickerDateRange());
    },
    get C3() {
      return C3 = dart.wrapType(time.Clock);
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3], core.Object);
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], ListOfObject());
    },
    get C4() {
      return C4 = dart.fn(range.yesterday, ClockToDatepickerDateRange());
    },
    get C5() {
      return C5 = dart.fn(range.thisWeek, ClockToDatepickerDateRange());
    },
    get C6() {
      return C6 = dart.fn(range.lastWeek, ClockToDatepickerDateRange());
    },
    get C7() {
      return C7 = dart.fn(range.last7Days, ClockToDatepickerDateRange());
    },
    get C8() {
      return C8 = dart.fn(range.last14Days, ClockToDatepickerDateRange());
    },
    get C9() {
      return C9 = dart.fn(range.thisMonth, ClockToDatepickerDateRange());
    },
    get C10() {
      return C10 = dart.fn(range.lastMonth, ClockToDatepickerDateRange());
    },
    get C11() {
      return C11 = dart.fn(range.thisBroadcastMonth, ClockToDatepickerDateRange());
    },
    get C12() {
      return C12 = dart.fn(range.lastBroadcastMonth, ClockToDatepickerDateRange());
    },
    get C13() {
      return C13 = dart.fn(range.last30Days, ClockToDatepickerDateRange());
    },
    get C14() {
      return C14 = dart.fn(range.thisYear, ClockToDatepickerDateRange());
    },
    get C15() {
      return C15 = dart.fn(range.lastYear, ClockToDatepickerDateRange());
    },
    get C16() {
      return C16 = dart.fn(range.thisQuarter, ClockToDatepickerDateRange());
    },
    get C17() {
      return C17 = dart.fn(range.lastQuarter, ClockToDatepickerDateRange());
    }
  });
  let C0;
  let C3;
  let C2;
  let C1;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C15;
  let C16;
  let C17;
  range$46template.initReflector = function initReflector() {
    if (dart.test(range$46template._visited)) {
      return;
    }
    range$46template._visited = true;
    reflector.registerDependencies(C0 || CT.C0, C1 || CT.C1);
    reflector.registerDependencies(C4 || CT.C4, C1 || CT.C1);
    reflector.registerDependencies(C5 || CT.C5, C1 || CT.C1);
    reflector.registerDependencies(C6 || CT.C6, C1 || CT.C1);
    reflector.registerDependencies(C7 || CT.C7, C1 || CT.C1);
    reflector.registerDependencies(C8 || CT.C8, C1 || CT.C1);
    reflector.registerDependencies(C9 || CT.C9, C1 || CT.C1);
    reflector.registerDependencies(C10 || CT.C10, C1 || CT.C1);
    reflector.registerDependencies(C11 || CT.C11, C1 || CT.C1);
    reflector.registerDependencies(C12 || CT.C12, C1 || CT.C1);
    reflector.registerDependencies(C13 || CT.C13, C1 || CT.C1);
    reflector.registerDependencies(C14 || CT.C14, C1 || CT.C1);
    reflector.registerDependencies(C15 || CT.C15, C1 || CT.C1);
    reflector.registerDependencies(C16 || CT.C16, C1 || CT.C1);
    reflector.registerDependencies(C17 || CT.C17, C1 || CT.C1);
    di$46template.initReflector();
    date$46pb$46template.initReflector();
    date_range$46pb$46template.initReflector();
    date$46template.initReflector();
  };
  dart.defineLazy(range$46template, {
    /*range$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_datepicker/range.template", {
    "package:angular_components/material_datepicker/range.template.dart": range$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["range.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAeE,kBAAI;AACF;;AAEa,IAAf,4BAAW;AAIT,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAKE,IAFF;AAGqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAxDI,yBAAQ;YAAG","file":"range.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__range$46template: range$46template
  };
});

//# sourceMappingURL=range.template.ddc.js.map

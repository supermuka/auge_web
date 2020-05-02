define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const proxies = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], core.Null);
    },
    get C1() {
      return C1 = dart.constMap(core.Null, core.Null, []);
    }
  });
  proxies.pureProxy1 = function pureProxy1(T, S0, fn) {
    let result = null;
    let first = true;
    let v0 = null;
    return dart.fn(p0 => {
      if (first || !core.identical(v0, p0)) {
        first = false;
        v0 = p0;
        result = fn(p0);
      }
      return result;
    }, dart.fnType(T, [S0]));
  };
  proxies.pureProxy2 = function pureProxy2(T, S0, S1, fn) {
    let result = null;
    let first = true;
    let v0 = null;
    let v1 = null;
    return dart.fn((p0, p1) => {
      if (first || !core.identical(v0, p0) || !core.identical(v1, p1)) {
        first = false;
        v0 = p0;
        v1 = p1;
        result = fn(p0, p1);
      }
      return result;
    }, dart.fnType(T, [S0, S1]));
  };
  proxies.pureProxy3 = function pureProxy3(T, S0, S1, S2, fn) {
    let result = null;
    let first = true;
    let v0 = null;
    let v1 = null;
    let v2 = null;
    return dart.fn((p0, p1, p2) => {
      if (first || !core.identical(v0, p0) || !core.identical(v1, p1) || !core.identical(v2, p2)) {
        first = false;
        v0 = p0;
        v1 = p1;
        v2 = p2;
        result = fn(p0, p1, p2);
      }
      return result;
    }, dart.fnType(T, [S0, S1, S2]));
  };
  proxies.pureProxy4 = function pureProxy4(T, S0, S1, S2, S3, fn) {
    let result = null;
    let first = true;
    let v0 = null;
    let v1 = null;
    let v2 = null;
    let v3 = null;
    return dart.fn((p0, p1, p2, p3) => {
      if (first || !core.identical(v0, p0) || !core.identical(v1, p1) || !core.identical(v2, p2) || !core.identical(v3, p3)) {
        first = false;
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        result = fn(p0, p1, p2, p3);
      }
      return result;
    }, dart.fnType(T, [S0, S1, S2, S3]));
  };
  proxies.pureProxy5 = function pureProxy5(T, S0, S1, S2, S3, S4, fn) {
    let result = null;
    let first = true;
    let v0 = null;
    let v1 = null;
    let v2 = null;
    let v3 = null;
    let v4 = null;
    return dart.fn((p0, p1, p2, p3, p4) => {
      if (first || !core.identical(v0, p0) || !core.identical(v1, p1) || !core.identical(v2, p2) || !core.identical(v3, p3) || !core.identical(v4, p4)) {
        first = false;
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        result = fn(p0, p1, p2, p3, p4);
      }
      return result;
    }, dart.fnType(T, [S0, S1, S2, S3, S4]));
  };
  proxies.pureProxy6 = function pureProxy6(T, S0, S1, S2, S3, S4, S5, fn) {
    let result = null;
    let first = true;
    let v0 = null;
    let v1 = null;
    let v2 = null;
    let v3 = null;
    let v4 = null;
    let v5 = null;
    return dart.fn((p0, p1, p2, p3, p4, p5) => {
      if (first || !core.identical(v0, p0) || !core.identical(v1, p1) || !core.identical(v2, p2) || !core.identical(v3, p3) || !core.identical(v4, p4) || !core.identical(v5, p5)) {
        first = false;
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        v5 = p5;
        result = fn(p0, p1, p2, p3, p4, p5);
      }
      return result;
    }, dart.fnType(T, [S0, S1, S2, S3, S4, S5]));
  };
  proxies.pureProxy7 = function pureProxy7(T, S0, S1, S2, S3, S4, S5, S6, fn) {
    let result = null;
    let first = true;
    let v0 = null;
    let v1 = null;
    let v2 = null;
    let v3 = null;
    let v4 = null;
    let v5 = null;
    let v6 = null;
    return dart.fn((p0, p1, p2, p3, p4, p5, p6) => {
      if (first || !core.identical(v0, p0) || !core.identical(v1, p1) || !core.identical(v2, p2) || !core.identical(v3, p3) || !core.identical(v4, p4) || !core.identical(v5, p5) || !core.identical(v6, p6)) {
        first = false;
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        v5 = p5;
        v6 = p6;
        result = fn(p0, p1, p2, p3, p4, p5, p6);
      }
      return result;
    }, dart.fnType(T, [S0, S1, S2, S3, S4, S5, S6]));
  };
  proxies.pureProxy8 = function pureProxy8(T, S0, S1, S2, S3, S4, S5, S6, S7, fn) {
    let result = null;
    let first = true;
    let v0 = null;
    let v1 = null;
    let v2 = null;
    let v3 = null;
    let v4 = null;
    let v5 = null;
    let v6 = null;
    let v7 = null;
    return dart.fn((p0, p1, p2, p3, p4, p5, p6, p7) => {
      if (first || !core.identical(v0, p0) || !core.identical(v1, p1) || !core.identical(v2, p2) || !core.identical(v3, p3) || !core.identical(v4, p4) || !core.identical(v5, p5) || !core.identical(v6, p6) || !core.identical(v7, p7)) {
        first = false;
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        v5 = p5;
        v6 = p6;
        v7 = p7;
        result = fn(p0, p1, p2, p3, p4, p5, p6, p7);
      }
      return result;
    }, dart.fnType(T, [S0, S1, S2, S3, S4, S5, S6, S7]));
  };
  proxies.pureProxy9 = function pureProxy9(T, S0, S1, S2, S3, S4, S5, S6, S7, S8, fn) {
    let result = null;
    let first = true;
    let v0 = null;
    let v1 = null;
    let v2 = null;
    let v3 = null;
    let v4 = null;
    let v5 = null;
    let v6 = null;
    let v7 = null;
    let v8 = null;
    return dart.fn((p0, p1, p2, p3, p4, p5, p6, p7, p8) => {
      if (first || !core.identical(v0, p0) || !core.identical(v1, p1) || !core.identical(v2, p2) || !core.identical(v3, p3) || !core.identical(v4, p4) || !core.identical(v5, p5) || !core.identical(v6, p6) || !core.identical(v7, p7) || !core.identical(v8, p8)) {
        first = false;
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        v5 = p5;
        v6 = p6;
        v7 = p7;
        v8 = p8;
        result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8);
      }
      return result;
    }, dart.fnType(T, [S0, S1, S2, S3, S4, S5, S6, S7, S8]));
  };
  proxies.pureProxy10 = function pureProxy10(T, S0, S1, S2, S3, S4, S5, S6, S7, S8, S9, fn) {
    let result = null;
    let first = true;
    let v0 = null;
    let v1 = null;
    let v2 = null;
    let v3 = null;
    let v4 = null;
    let v5 = null;
    let v6 = null;
    let v7 = null;
    let v8 = null;
    let v9 = null;
    return dart.fn((p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) => {
      if (first || !core.identical(v0, p0) || !core.identical(v1, p1) || !core.identical(v2, p2) || !core.identical(v3, p3) || !core.identical(v4, p4) || !core.identical(v5, p5) || !core.identical(v6, p6) || !core.identical(v7, p7) || !core.identical(v8, p8) || !core.identical(v9, p9)) {
        first = false;
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        v5 = p5;
        v6 = p6;
        v7 = p7;
        v8 = p8;
        v9 = p9;
        result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
      }
      return result;
    }, dart.fnType(T, [S0, S1, S2, S3, S4, S5, S6, S7, S8, S9]));
  };
  let C0;
  let C1;
  dart.defineLazy(proxies, {
    /*proxies.emptyListLiteral*/get emptyListLiteral() {
      return C0 || CT.C0;
    },
    /*proxies.emptyMapLiteral*/get emptyMapLiteral() {
      return C1 || CT.C1;
    }
  });
  dart.trackLibraries("packages/angular/src/runtime/proxies", {
    "package:angular/src/runtime/proxies.dart": proxies
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["proxies.dart"],"names":[],"mappings":"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","file":"proxies.ddc.js"}');
  // Exports:
  return {
    src__runtime__proxies: proxies
  };
});

//# sourceMappingURL=proxies.ddc.js.map

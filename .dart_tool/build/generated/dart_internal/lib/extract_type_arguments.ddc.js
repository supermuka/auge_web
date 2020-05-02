define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const extract_type_arguments = Object.create(dart.library);
  const CT = Object.create(null);
  extract_type_arguments.extractIterableTypeArgument = function extractIterableTypeArgument(iterable, extract) {
    return _internal.extractTypeArguments(core.Iterable, iterable, extract);
  };
  extract_type_arguments.extractMapTypeArguments = function extractMapTypeArguments(map, extract) {
    return _internal.extractTypeArguments(core.Map, map, extract);
  };
  dart.trackLibraries("packages/dart_internal/extract_type_arguments", {
    "package:dart_internal/extract_type_arguments.dart": extract_type_arguments
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["extract_type_arguments.dart"],"names":[],"mappings":";;;;;;;;4FAyBiB,UAA+B;AAC5C,yDAAwC,QAAQ,EAAE,OAAO;EAAC;oFAgB3B,KAA6B;AAC5D,oDAAmC,GAAG,EAAE,OAAO;EAAC","file":"extract_type_arguments.ddc.js"}');
  // Exports:
  return {
    extract_type_arguments: extract_type_arguments
  };
});

//# sourceMappingURL=extract_type_arguments.ddc.js.map

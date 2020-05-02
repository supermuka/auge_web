define(['dart_sdk', 'packages/fixnum/fixnum'], function(dart_sdk, packages__fixnum__fixnum) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const _native_typed_data = dart_sdk._native_typed_data;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const fixnum = packages__fixnum__fixnum.fixnum;
  const protobuf = Object.create(dart.library);
  const type_registry = Object.create(dart.library);
  const json_parsing_context = Object.create(dart.library);
  const $length = dartx.length;
  const $getUint32 = dartx.getUint32;
  const $getInt32 = dartx.getInt32;
  const $buffer = dartx.buffer;
  const $offsetInBytes = dartx.offsetInBytes;
  const $getFloat32 = dartx.getFloat32;
  const $getFloat64 = dartx.getFloat64;
  const $rightShift = dartx['>>'];
  const $_get = dartx._get;
  const $leftShift = dartx['<<'];
  const $_set = dartx._set;
  const $add = dartx.add;
  const $lengthInBytes = dartx.lengthInBytes;
  const $isNaN = dartx.isNaN;
  const $setFloat64 = dartx.setFloat64;
  const $abs = dartx.abs;
  const $isNegative = dartx.isNegative;
  const $isInfinite = dartx.isInfinite;
  const $setFloat32 = dartx.setFloat32;
  const $setInt32 = dartx.setInt32;
  const $forEach = dartx.forEach;
  const $containsKey = dartx.containsKey;
  const $lastIndexOf = dartx.lastIndexOf;
  const $substring = dartx.substring;
  const $values = dartx.values;
  const $compareTo = dartx.compareTo;
  const $sort = dartx.sort;
  const $hashCode = dartx.hashCode;
  const $isEmpty = dartx.isEmpty;
  const $every = dartx.every;
  const $isNotEmpty = dartx.isNotEmpty;
  const $remove = dartx.remove;
  const $keys = dartx.keys;
  const $clear = dartx.clear;
  const $addAll = dartx.addAll;
  const $putIfAbsent = dartx.putIfAbsent;
  const $entries = dartx.entries;
  const $fold = dartx.fold;
  const $fillRange = dartx.fillRange;
  const $where = dartx.where;
  const $getUint64 = dartx.getUint64;
  const $toList = dartx.toList;
  const $setRange = dartx.setRange;
  const $join = dartx.join;
  const $iterator = dartx.iterator;
  const $map = dartx.map;
  const $expand = dartx.expand;
  const $contains = dartx.contains;
  const $reduce = dartx.reduce;
  const $any = dartx.any;
  const $toSet = dartx.toSet;
  const $take = dartx.take;
  const $takeWhile = dartx.takeWhile;
  const $skip = dartx.skip;
  const $skipWhile = dartx.skipWhile;
  const $first = dartx.first;
  const $last = dartx.last;
  const $single = dartx.single;
  const $firstWhere = dartx.firstWhere;
  const $lastWhere = dartx.lastWhere;
  const $elementAt = dartx.elementAt;
  const $toString = dartx.toString;
  const $indexOf = dartx.indexOf;
  const $sublist = dartx.sublist;
  const $getRange = dartx.getRange;
  const $asMap = dartx.asMap;
  const $_equals = dartx._equals;
  const $reversed = dartx.reversed;
  const $shuffle = dartx.shuffle;
  const $insert = dartx.insert;
  const $insertAll = dartx.insertAll;
  const $setAll = dartx.setAll;
  const $removeAt = dartx.removeAt;
  const $removeLast = dartx.removeLast;
  const $removeWhere = dartx.removeWhere;
  const $retainWhere = dartx.retainWhere;
  const $removeRange = dartx.removeRange;
  const $replaceRange = dartx.replaceRange;
  const $startsWith = dartx.startsWith;
  const $toLowerCase = dartx.toLowerCase;
  const $replaceAllMapped = dartx.replaceAllMapped;
  const $toDouble = dartx.toDouble;
  const $codeUnitAt = dartx.codeUnitAt;
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let JSArrayOfFieldInfo = () => (JSArrayOfFieldInfo = dart.constFn(_interceptors.JSArray$(protobuf.FieldInfo)))();
  let LinkedMapOfint$FieldInfo = () => (LinkedMapOfint$FieldInfo = dart.constFn(_js_helper.LinkedMap$(core.int, protobuf.FieldInfo)))();
  let IdentityMapOfString$FieldInfo = () => (IdentityMapOfString$FieldInfo = dart.constFn(_js_helper.IdentityMap$(core.String, protobuf.FieldInfo)))();
  let IdentityMapOfint$int = () => (IdentityMapOfint$int = dart.constFn(_js_helper.IdentityMap$(core.int, core.int)))();
  let ObjectTovoid = () => (ObjectTovoid = dart.constFn(dart.fnType(dart.void, [core.Object])))();
  let intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  let ListOfFieldInfo = () => (ListOfFieldInfo = dart.constFn(core.List$(protobuf.FieldInfo)))();
  let FieldInfoAndFieldInfoToint = () => (FieldInfoAndFieldInfoToint = dart.constFn(dart.fnType(core.int, [protobuf.FieldInfo, protobuf.FieldInfo])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let ListOfGeneratedMessage = () => (ListOfGeneratedMessage = dart.constFn(core.List$(protobuf.GeneratedMessage)))();
  let GeneratedMessageTobool = () => (GeneratedMessageTobool = dart.constFn(dart.fnType(core.bool, [protobuf.GeneratedMessage])))();
  let IdentityMapOfint$Extension = () => (IdentityMapOfint$Extension = dart.constFn(_js_helper.IdentityMap$(core.int, protobuf.Extension)))();
  let IdentityMapOfint$dynamic = () => (IdentityMapOfint$dynamic = dart.constFn(_js_helper.IdentityMap$(core.int, dart.dynamic)))();
  let MapOfint$Extension = () => (MapOfint$Extension = dart.constFn(core.Map$(core.int, protobuf.Extension)))();
  let IdentityMapOfString$MapOfint$Extension = () => (IdentityMapOfString$MapOfint$Extension = dart.constFn(_js_helper.IdentityMap$(core.String, MapOfint$Extension())))();
  let LinkedMapOfint$Extension = () => (LinkedMapOfint$Extension = dart.constFn(_js_helper.LinkedMap$(core.int, protobuf.Extension)))();
  let VoidToMapOfint$Extension = () => (VoidToMapOfint$Extension = dart.constFn(dart.fnType(MapOfint$Extension(), [])))();
  let IterableOfGeneratedMessage = () => (IterableOfGeneratedMessage = dart.constFn(core.Iterable$(protobuf.GeneratedMessage)))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let intAndFieldInfoAnddynamicToint = () => (intAndFieldInfoAnddynamicToint = dart.constFn(dart.fnType(core.int, [core.int, protobuf.FieldInfo, dart.dynamic])))();
  let FieldInfoTobool = () => (FieldInfoTobool = dart.constFn(dart.fnType(core.bool, [protobuf.FieldInfo])))();
  let intAndFieldInfoToint = () => (intAndFieldInfoToint = dart.constFn(dart.fnType(core.int, [core.int, protobuf.FieldInfo])))();
  let intAndintToint = () => (intAndintToint = dart.constFn(dart.fnType(core.int, [core.int, core.int])))();
  let dynamicAnddynamicTovoid = () => (dynamicAnddynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, dart.dynamic])))();
  let dynamicAndStringTovoid = () => (dynamicAndStringTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, core.String])))();
  let FieldInfoTovoid = () => (FieldInfoTovoid = dart.constFn(dart.fnType(dart.void, [protobuf.FieldInfo])))();
  let intTovoid = () => (intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))();
  let PbListBaseOfGeneratedMessage = () => (PbListBaseOfGeneratedMessage = dart.constFn(protobuf.PbListBase$(protobuf.GeneratedMessage)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let VoidToListOfint = () => (VoidToListOfint = dart.constFn(dart.fnType(ListOfint(), [])))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let VoidTodouble = () => (VoidTodouble = dart.constFn(dart.fnType(core.double, [])))();
  let VoidToint = () => (VoidToint = dart.constFn(dart.fnType(core.int, [])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let dynamicAnddynamicTodynamic = () => (dynamicAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let LinkedMapOfFunction$Function = () => (LinkedMapOfFunction$Function = dart.constFn(_js_helper.LinkedMap$(core.Function, core.Function)))();
  let LinkedMapOfint$UnknownFieldSetField = () => (LinkedMapOfint$UnknownFieldSetField = dart.constFn(_js_helper.LinkedMap$(core.int, protobuf.UnknownFieldSetField)))();
  let LinkedHashMapOfint$UnknownFieldSetField = () => (LinkedHashMapOfint$UnknownFieldSetField = dart.constFn(collection.LinkedHashMap$(core.int, protobuf.UnknownFieldSetField)))();
  let VoidToUnknownFieldSetField = () => (VoidToUnknownFieldSetField = dart.constFn(dart.fnType(protobuf.UnknownFieldSetField, [])))();
  let intAndObjectToNull = () => (intAndObjectToNull = dart.constFn(dart.fnType(core.Null, [core.int, core.Object])))();
  let UnknownFieldSetFieldTovoid = () => (UnknownFieldSetFieldTovoid = dart.constFn(dart.fnType(dart.void, [protobuf.UnknownFieldSetField])))();
  let JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  let JSArrayOfInt64 = () => (JSArrayOfInt64 = dart.constFn(_interceptors.JSArray$(fixnum.Int64)))();
  let JSArrayOfUnknownFieldSet = () => (JSArrayOfUnknownFieldSet = dart.constFn(_interceptors.JSArray$(protobuf.UnknownFieldSet)))();
  let ListOfListOfint = () => (ListOfListOfint = dart.constFn(core.List$(ListOfint())))();
  let ListOfInt64 = () => (ListOfInt64 = dart.constFn(core.List$(fixnum.Int64)))();
  let ListOfUnknownFieldSet = () => (ListOfUnknownFieldSet = dart.constFn(core.List$(protobuf.UnknownFieldSet)))();
  let intAnddynamicToint = () => (intAnddynamicToint = dart.constFn(dart.fnType(core.int, [core.int, dart.dynamic])))();
  let ListTovoid = () => (ListTovoid = dart.constFn(dart.fnType(dart.void, [core.List])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidToUnknownFieldSet = () => (VoidToUnknownFieldSet = dart.constFn(dart.fnType(protobuf.UnknownFieldSet, [])))();
  let intAndExtensionToNull = () => (intAndExtensionToNull = dart.constFn(dart.fnType(core.Null, [core.int, protobuf.Extension])))();
  let VoidToPbList = () => (VoidToPbList = dart.constFn(dart.fnType(protobuf.PbList, [])))();
  let VoidToPbMap = () => (VoidToPbMap = dart.constFn(dart.fnType(protobuf.PbMap, [])))();
  let FieldInfoToNull = () => (FieldInfoToNull = dart.constFn(dart.fnType(core.Null, [protobuf.FieldInfo])))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  let dynamicAndintTodynamic = () => (dynamicAndintTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, core.int])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let MapEntryToMapOfString$dynamic = () => (MapEntryToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [core.MapEntry])))();
  let dynamicAndMapFieldInfoToList = () => (dynamicAndMapFieldInfoToList = dart.constFn(dart.fnType(core.List, [dart.dynamic, protobuf.MapFieldInfo])))();
  let dynamicAndintToString = () => (dynamicAndintToString = dart.constFn(dart.fnType(core.String, [dart.dynamic, core.int])))();
  let dynamicAndintToObject = () => (dynamicAndintToObject = dart.constFn(dart.fnType(core.Object, [dart.dynamic, core.int])))();
  let MapEntryOfString$Object = () => (MapEntryOfString$Object = dart.constFn(core.MapEntry$(core.String, core.Object)))();
  let dynamicAnddynamicToMapEntryOfString$Object = () => (dynamicAnddynamicToMapEntryOfString$Object = dart.constFn(dart.fnType(MapEntryOfString$Object(), [dart.dynamic, dart.dynamic])))();
  let dynamicToObject = () => (dynamicToObject = dart.constFn(dart.fnType(core.Object, [dart.dynamic])))();
  let StringToint = () => (StringToint = dart.constFn(dart.fnType(core.int, [core.String])))();
  let StringToInt64 = () => (StringToInt64 = dart.constFn(dart.fnType(fixnum.Int64, [core.String])))();
  let ProtobufEnumTobool = () => (ProtobufEnumTobool = dart.constFn(dart.fnType(core.bool, [protobuf.ProtobufEnum])))();
  let ObjectAndFieldInfoToObject = () => (ObjectAndFieldInfoToObject = dart.constFn(dart.fnType(core.Object, [core.Object, protobuf.FieldInfo])))();
  let StringAndintToObject = () => (StringAndintToObject = dart.constFn(dart.fnType(core.Object, [core.String, core.int])))();
  let dynamicAnddynamicToObject = () => (dynamicAnddynamicToObject = dart.constFn(dart.fnType(core.Object, [dart.dynamic, dart.dynamic])))();
  let ObjectAnd_FieldSetTovoid = () => (ObjectAnd_FieldSetTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, protobuf._FieldSet])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let dynamicToUint8List = () => (dynamicToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [dart.dynamic])))();
  let StringAndStringTovoid = () => (StringAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.String], [core.String])))();
  let MapOfString$BuilderInfo = () => (MapOfString$BuilderInfo = dart.constFn(core.Map$(core.String, protobuf.BuilderInfo)))();
  let MapEntryOfString$BuilderInfo = () => (MapEntryOfString$BuilderInfo = dart.constFn(core.MapEntry$(core.String, protobuf.BuilderInfo)))();
  let GeneratedMessageToMapEntryOfString$BuilderInfo = () => (GeneratedMessageToMapEntryOfString$BuilderInfo = dart.constFn(dart.fnType(MapEntryOfString$BuilderInfo(), [protobuf.GeneratedMessage])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: protobuf.PackageName.prototype,
        [PackageName_name]: ""
      });
    },
    get C1() {
      return C1 = dart.fn(protobuf._checkNotNull, ObjectTovoid());
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: protobuf._EmptyExtensionRegistry.prototype
      });
    },
    get C4() {
      return C4 = dart.constMap(core.String, MapOfint$Extension(), []);
    },
    get C5() {
      return C5 = dart.fn(protobuf.PbFieldType._BOOL_FALSE, VoidTobool());
    },
    get C6() {
      return C6 = dart.fn(protobuf.PbFieldType._BYTES_EMPTY, VoidToListOfint());
    },
    get C7() {
      return C7 = dart.fn(protobuf.PbFieldType._STRING_EMPTY, VoidToString());
    },
    get C8() {
      return C8 = dart.fn(protobuf.PbFieldType._DOUBLE_ZERO, VoidTodouble());
    },
    get C9() {
      return C9 = dart.fn(protobuf.PbFieldType._INT_ZERO, VoidToint());
    },
    get C11() {
      return C11 = dart.constMap(core.String, protobuf.BuilderInfo, []);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: type_registry.TypeRegistry.prototype,
        [TypeRegistry__mapping]: C11 || CT.C11
      });
    },
    get C12() {
      return C12 = dart.fn(protobuf.GeneratedMessage._emptyReviver, dynamicAnddynamicTodynamic());
    },
    get C13() {
      return C13 = dart.fn(protobuf._checkFloat, ObjectTovoid());
    },
    get C14() {
      return C14 = dart.fn(protobuf._checkSigned32, ObjectTovoid());
    },
    get C15() {
      return C15 = dart.fn(protobuf._checkUnsigned32, ObjectTovoid());
    },
    get C16() {
      return C16 = dart.const({
        __proto__: convert.Utf8Codec.prototype,
        [Utf8Codec__allowMalformed]: true
      });
    },
    get C17() {
      return C17 = dart.fn(protobuf.defaultFrozenMessageModificationHandler, StringAndStringTovoid());
    }
  });
  const _bufferPos = dart.privateName(protobuf, "_bufferPos");
  const _currentLimit = dart.privateName(protobuf, "_currentLimit");
  const _lastTag = dart.privateName(protobuf, "_lastTag");
  const _recursionDepth = dart.privateName(protobuf, "_recursionDepth");
  const _buffer = dart.privateName(protobuf, "_buffer");
  const _recursionLimit = dart.privateName(protobuf, "_recursionLimit");
  const _sizeLimit = dart.privateName(protobuf, "_sizeLimit");
  const _withLimit = dart.privateName(protobuf, "_withLimit");
  const _checkLimit = dart.privateName(protobuf, "_checkLimit");
  const _readRawVarint32 = dart.privateName(protobuf, "_readRawVarint32");
  const _readRawVarint64 = dart.privateName(protobuf, "_readRawVarint64");
  const _readByteData = dart.privateName(protobuf, "_readByteData");
  const _readRawVarintByte = dart.privateName(protobuf, "_readRawVarintByte");
  protobuf.CodedBufferReader = class CodedBufferReader extends core.Object {
    checkLastTagWas(value) {
      if (this[_lastTag] != value) {
        dart.throw(new protobuf.InvalidProtocolBufferException.invalidEndTag());
      }
    }
    isAtEnd() {
      return dart.notNull(this[_bufferPos]) >= dart.notNull(this[_currentLimit]);
    }
    [_withLimit](byteLimit, callback) {
      if (dart.notNull(byteLimit) < 0) {
        dart.throw(new core.ArgumentError.new("CodedBufferReader encountered an embedded string or message" + " which claimed to have negative size."));
      }
      byteLimit = dart.notNull(byteLimit) + dart.notNull(this[_bufferPos]);
      let oldLimit = this[_currentLimit];
      if (oldLimit !== -1 && dart.notNull(byteLimit) > dart.notNull(oldLimit) || dart.notNull(byteLimit) > dart.notNull(this[_sizeLimit])) {
        dart.throw(new protobuf.InvalidProtocolBufferException.truncatedMessage());
      }
      this[_currentLimit] = byteLimit;
      dart.dcall(callback, []);
      this[_currentLimit] = oldLimit;
    }
    [_checkLimit](increment) {
      if (!(this[_currentLimit] !== -1)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/coded_buffer_reader.dart", 53, 12, "_currentLimit != -1");
      this[_bufferPos] = dart.notNull(this[_bufferPos]) + dart.notNull(increment);
      if (dart.notNull(this[_bufferPos]) > dart.notNull(this[_currentLimit])) {
        dart.throw(new protobuf.InvalidProtocolBufferException.truncatedMessage());
      }
    }
    readGroup(fieldNumber, message, extensionRegistry) {
      if (dart.notNull(this[_recursionDepth]) >= dart.notNull(this[_recursionLimit])) {
        dart.throw(new protobuf.InvalidProtocolBufferException.recursionLimitExceeded());
      }
      this[_recursionDepth] = dart.notNull(this[_recursionDepth]) + 1;
      message.mergeFromCodedBufferReader(this, extensionRegistry);
      this.checkLastTagWas(protobuf.makeTag(fieldNumber, 4));
      this[_recursionDepth] = dart.notNull(this[_recursionDepth]) - 1;
    }
    readUnknownFieldSetGroup(fieldNumber) {
      if (dart.notNull(this[_recursionDepth]) >= dart.notNull(this[_recursionLimit])) {
        dart.throw(new protobuf.InvalidProtocolBufferException.recursionLimitExceeded());
      }
      this[_recursionDepth] = dart.notNull(this[_recursionDepth]) + 1;
      let unknownFieldSet = new protobuf.UnknownFieldSet.new();
      unknownFieldSet.mergeFromCodedBufferReader(this);
      this.checkLastTagWas(protobuf.makeTag(fieldNumber, 4));
      this[_recursionDepth] = dart.notNull(this[_recursionDepth]) - 1;
      return unknownFieldSet;
    }
    readMessage(message, extensionRegistry) {
      let length = this.readInt32();
      if (dart.notNull(this[_recursionDepth]) >= dart.notNull(this[_recursionLimit])) {
        dart.throw(new protobuf.InvalidProtocolBufferException.recursionLimitExceeded());
      }
      if (dart.notNull(length) < 0) {
        dart.throw(new core.ArgumentError.new("CodedBufferReader encountered an embedded string or message" + " which claimed to have negative size."));
      }
      let oldLimit = this[_currentLimit];
      this[_currentLimit] = dart.notNull(this[_bufferPos]) + dart.notNull(length);
      if (dart.notNull(this[_currentLimit]) > dart.notNull(oldLimit)) {
        dart.throw(new protobuf.InvalidProtocolBufferException.truncatedMessage());
      }
      this[_recursionDepth] = dart.notNull(this[_recursionDepth]) + 1;
      message.mergeFromCodedBufferReader(this, extensionRegistry);
      this.checkLastTagWas(0);
      this[_recursionDepth] = dart.notNull(this[_recursionDepth]) - 1;
      this[_currentLimit] = oldLimit;
    }
    readEnum() {
      return this.readInt32();
    }
    readInt32() {
      return this[_readRawVarint32](true);
    }
    readInt64() {
      return this[_readRawVarint64]();
    }
    readUint32() {
      return this[_readRawVarint32](false);
    }
    readUint64() {
      return this[_readRawVarint64]();
    }
    readSint32() {
      return protobuf.CodedBufferReader._decodeZigZag32(this.readUint32());
    }
    readSint64() {
      return protobuf.CodedBufferReader._decodeZigZag64(this.readUint64());
    }
    readFixed32() {
      return this[_readByteData](4)[$getUint32](0, typed_data.Endian.little);
    }
    readFixed64() {
      return this.readSfixed64();
    }
    readSfixed32() {
      return this[_readByteData](4)[$getInt32](0, typed_data.Endian.little);
    }
    readSfixed64() {
      let data = this[_readByteData](8);
      let view = typed_data.Uint8List.view(data[$buffer], data[$offsetInBytes], 8);
      return fixnum.Int64.fromBytes(view);
    }
    readBool() {
      return this[_readRawVarint32](true) !== 0;
    }
    readBytes() {
      let length = this.readInt32();
      this[_checkLimit](length);
      return typed_data.Uint8List.view(this[_buffer][$buffer], dart.notNull(this[_buffer][$offsetInBytes]) + dart.notNull(this[_bufferPos]) - dart.notNull(length), length);
    }
    readString() {
      return protobuf._utf8.decode(this.readBytes());
    }
    readFloat() {
      return this[_readByteData](4)[$getFloat32](0, typed_data.Endian.little);
    }
    readDouble() {
      return this[_readByteData](8)[$getFloat64](0, typed_data.Endian.little);
    }
    readTag() {
      if (dart.test(this.isAtEnd())) {
        this[_lastTag] = 0;
        return 0;
      }
      this[_lastTag] = this.readUint32();
      if (protobuf.getTagFieldNumber(this[_lastTag]) === 0) {
        dart.throw(new protobuf.InvalidProtocolBufferException.invalidTag());
      }
      return this[_lastTag];
    }
    static _decodeZigZag32(value) {
      if ((dart.notNull(value) & 1) === 1) {
        return -value[$rightShift](1) - 1;
      } else {
        return value[$rightShift](1);
      }
    }
    static _decodeZigZag64(value) {
      if (dart.equals(value['&'](1), 1)) value = value._negate();
      return value['>>'](1);
    }
    [_readRawVarintByte]() {
      this[_checkLimit](1);
      return this[_buffer][$_get](dart.notNull(this[_bufferPos]) - 1);
    }
    [_readRawVarint32](signed) {
      let t0;
      let bufferPos = this[_bufferPos];
      let bytes = dart.notNull(this[_currentLimit]) - dart.notNull(bufferPos);
      if (bytes > 10) bytes = 10;
      let result = 0;
      for (let i = 0; i < bytes; i = i + 1) {
        let byte = this[_buffer][$_get]((t0 = bufferPos, bufferPos = dart.notNull(t0) + 1, t0));
        result = (result | (dart.notNull(byte) & 127)[$leftShift](i * 7)) >>> 0;
        if ((dart.notNull(byte) & 128) === 0) {
          result = (result & 4294967295) >>> 0;
          this[_bufferPos] = bufferPos;
          return dart.test(signed) ? result - 2 * ((2147483648 & result) >>> 0) : result;
        }
      }
      this[_bufferPos] = bufferPos;
      dart.throw(new protobuf.InvalidProtocolBufferException.malformedVarint());
    }
    [_readRawVarint64]() {
      let lo = 0;
      let hi = 0;
      for (let i = 0; i < 4; i = i + 1) {
        let byte = this[_readRawVarintByte]();
        lo = (lo | (dart.notNull(byte) & 127)[$leftShift](i * 7)) >>> 0;
        if ((dart.notNull(byte) & 128) === 0) return fixnum.Int64.fromInts(hi, lo);
      }
      let byte = this[_readRawVarintByte]();
      lo = (lo | (dart.notNull(byte) & 15) << 28 >>> 0) >>> 0;
      hi = dart.notNull(byte) >> 4 & 7;
      if ((dart.notNull(byte) & 128) === 0) {
        return fixnum.Int64.fromInts(hi, lo);
      }
      for (let i = 0; i < 5; i = i + 1) {
        let byte = this[_readRawVarintByte]();
        hi = (hi | (dart.notNull(byte) & 127)[$leftShift](i * 7 + 3)) >>> 0;
        if ((dart.notNull(byte) & 128) === 0) return fixnum.Int64.fromInts(hi, lo);
      }
      dart.throw(new protobuf.InvalidProtocolBufferException.malformedVarint());
    }
    [_readByteData](sizeInBytes) {
      this[_checkLimit](sizeInBytes);
      return typed_data.ByteData.view(this[_buffer][$buffer], dart.notNull(this[_buffer][$offsetInBytes]) + dart.notNull(this[_bufferPos]) - dart.notNull(sizeInBytes), sizeInBytes);
    }
  };
  (protobuf.CodedBufferReader.new = function(buffer, opts) {
    let recursionLimit = opts && 'recursionLimit' in opts ? opts.recursionLimit : 64;
    let sizeLimit = opts && 'sizeLimit' in opts ? opts.sizeLimit : 67108864;
    this[_bufferPos] = 0;
    this[_currentLimit] = -1;
    this[_lastTag] = 0;
    this[_recursionDepth] = 0;
    this[_buffer] = typed_data.Uint8List.is(buffer) ? buffer : _native_typed_data.NativeUint8List.fromList(buffer);
    this[_recursionLimit] = recursionLimit;
    this[_sizeLimit] = math.min(core.int, sizeLimit, buffer[$length]);
    this[_currentLimit] = this[_sizeLimit];
  }).prototype = protobuf.CodedBufferReader.prototype;
  dart.addTypeTests(protobuf.CodedBufferReader);
  dart.setMethodSignature(protobuf.CodedBufferReader, () => ({
    __proto__: dart.getMethods(protobuf.CodedBufferReader.__proto__),
    checkLastTagWas: dart.fnType(dart.void, [core.int]),
    isAtEnd: dart.fnType(core.bool, []),
    [_withLimit]: dart.fnType(dart.void, [core.int, dart.dynamic]),
    [_checkLimit]: dart.fnType(dart.void, [core.int]),
    readGroup: dart.fnType(dart.void, [core.int, protobuf.GeneratedMessage, protobuf.ExtensionRegistry]),
    readUnknownFieldSetGroup: dart.fnType(protobuf.UnknownFieldSet, [core.int]),
    readMessage: dart.fnType(dart.void, [protobuf.GeneratedMessage, protobuf.ExtensionRegistry]),
    readEnum: dart.fnType(core.int, []),
    readInt32: dart.fnType(core.int, []),
    readInt64: dart.fnType(fixnum.Int64, []),
    readUint32: dart.fnType(core.int, []),
    readUint64: dart.fnType(fixnum.Int64, []),
    readSint32: dart.fnType(core.int, []),
    readSint64: dart.fnType(fixnum.Int64, []),
    readFixed32: dart.fnType(core.int, []),
    readFixed64: dart.fnType(fixnum.Int64, []),
    readSfixed32: dart.fnType(core.int, []),
    readSfixed64: dart.fnType(fixnum.Int64, []),
    readBool: dart.fnType(core.bool, []),
    readBytes: dart.fnType(core.List$(core.int), []),
    readString: dart.fnType(core.String, []),
    readFloat: dart.fnType(core.double, []),
    readDouble: dart.fnType(core.double, []),
    readTag: dart.fnType(core.int, []),
    [_readRawVarintByte]: dart.fnType(core.int, []),
    [_readRawVarint32]: dart.fnType(core.int, [core.bool]),
    [_readRawVarint64]: dart.fnType(fixnum.Int64, []),
    [_readByteData]: dart.fnType(typed_data.ByteData, [core.int])
  }));
  dart.setLibraryUri(protobuf.CodedBufferReader, "package:protobuf/protobuf.dart");
  dart.setFieldSignature(protobuf.CodedBufferReader, () => ({
    __proto__: dart.getFields(protobuf.CodedBufferReader.__proto__),
    [_buffer]: dart.finalFieldType(typed_data.Uint8List),
    [_bufferPos]: dart.fieldType(core.int),
    [_currentLimit]: dart.fieldType(core.int),
    [_lastTag]: dart.fieldType(core.int),
    [_recursionDepth]: dart.fieldType(core.int),
    [_recursionLimit]: dart.finalFieldType(core.int),
    [_sizeLimit]: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(protobuf.CodedBufferReader, {
    /*protobuf.CodedBufferReader.DEFAULT_RECURSION_LIMIT*/get DEFAULT_RECURSION_LIMIT() {
      return 64;
    },
    /*protobuf.CodedBufferReader.DEFAULT_SIZE_LIMIT*/get DEFAULT_SIZE_LIMIT() {
      return 67108864;
    }
  });
  const _splices = dart.privateName(protobuf, "_splices");
  const _lastSplicePos = dart.privateName(protobuf, "_lastSplicePos");
  const _outputChunk = dart.privateName(protobuf, "_outputChunk");
  const _bytesInChunk = dart.privateName(protobuf, "_bytesInChunk");
  const _outputChunkAsByteData = dart.privateName(protobuf, "_outputChunkAsByteData");
  const _outputChunks = dart.privateName(protobuf, "_outputChunks");
  const _outputChunksBytes = dart.privateName(protobuf, "_outputChunksBytes");
  const _bytesTotal = dart.privateName(protobuf, "_bytesTotal");
  const _commitChunk = dart.privateName(protobuf, "_commitChunk");
  const _writeTag = dart.privateName(protobuf, "_writeTag");
  const _startLengthDelimited = dart.privateName(protobuf, "_startLengthDelimited");
  const _writeValueAs = dart.privateName(protobuf, "_writeValueAs");
  const _endLengthDelimited = dart.privateName(protobuf, "_endLengthDelimited");
  const _writeValue = dart.privateName(protobuf, "_writeValue");
  const _commitSplice = dart.privateName(protobuf, "_commitSplice");
  const _copyInto = dart.privateName(protobuf, "_copyInto");
  const _ensureBytes = dart.privateName(protobuf, "_ensureBytes");
  const _writeRawBytes = dart.privateName(protobuf, "_writeRawBytes");
  const _varint32LengthInBytes = dart.privateName(protobuf, "_varint32LengthInBytes");
  const _writeVarint32 = dart.privateName(protobuf, "_writeVarint32");
  const _writeVarint64 = dart.privateName(protobuf, "_writeVarint64");
  const _writeInt32 = dart.privateName(protobuf, "_writeInt32");
  const _writeDouble = dart.privateName(protobuf, "_writeDouble");
  const _writeFloat = dart.privateName(protobuf, "_writeFloat");
  const _writeInt64 = dart.privateName(protobuf, "_writeInt64");
  const _writeBytesNoTag = dart.privateName(protobuf, "_writeBytesNoTag");
  protobuf.CodedBufferWriter = class CodedBufferWriter extends core.Object {
    get lengthInBytes() {
      return this[_bytesTotal];
    }
    writeField(fieldNumber, fieldType, fieldValue) {
      let valueType = (dart.notNull(fieldType) & ~7 >>> 0) >>> 0;
      if ((dart.notNull(fieldType) & 4) !== 0) {
        if (!dart.dtest(dart.dload(fieldValue, 'isEmpty'))) {
          this[_writeTag](fieldNumber, 2);
          let mark = this[_startLengthDelimited]();
          for (let value of core.Iterable._check(fieldValue)) {
            this[_writeValueAs](valueType, value);
          }
          this[_endLengthDelimited](mark);
        }
        return;
      }
      let wireFormat = protobuf.CodedBufferWriter._wireTypes[$_get](protobuf.CodedBufferWriter._valueTypeIndex(valueType));
      if ((dart.notNull(fieldType) & 4194304) !== 0) {
        let keyWireFormat = protobuf.CodedBufferWriter._wireTypes[$_get](protobuf.CodedBufferWriter._valueTypeIndex(core.int._check(dart.dload(fieldValue, 'keyFieldType'))));
        let valueWireFormat = protobuf.CodedBufferWriter._wireTypes[$_get](protobuf.CodedBufferWriter._valueTypeIndex(core.int._check(dart.dload(fieldValue, 'valueFieldType'))));
        dart.dsend(fieldValue, 'forEach', [dart.fn((key, value) => {
            this[_writeTag](fieldNumber, 2);
            let mark = this[_startLengthDelimited]();
            this[_writeValue](1, core.int._check(dart.dload(fieldValue, 'keyFieldType')), key, keyWireFormat);
            this[_writeValue](2, core.int._check(dart.dload(fieldValue, 'valueFieldType')), value, valueWireFormat);
            this[_endLengthDelimited](mark);
          }, dynamicAnddynamicToNull())]);
        return;
      }
      if ((dart.notNull(fieldType) & 2) !== 0) {
        for (let i = 0; i < dart.notNull(core.num._check(dart.dload(fieldValue, 'length'))); i = i + 1) {
          this[_writeValue](fieldNumber, valueType, dart.dsend(fieldValue, '_get', [i]), wireFormat);
        }
        return;
      }
      this[_writeValue](fieldNumber, valueType, fieldValue, wireFormat);
    }
    toBuffer() {
      let result = _native_typed_data.NativeUint8List.new(this[_bytesTotal]);
      this.writeTo(result);
      return result;
    }
    writeTo(buffer, offset) {
      let t0, t0$, t0$0, t0$1;
      if (offset === void 0) offset = 0;
      if (dart.notNull(buffer[$length]) - dart.notNull(offset) < dart.notNull(this[_bytesTotal])) {
        return false;
      }
      this[_commitChunk](false);
      this[_commitSplice]();
      let outPos = offset;
      let chunkIndex = 0;
      let chunkPos = 0;
      for (let i = 0; i < dart.notNull(this[_splices][$length]); i = i + 1) {
        let action = this[_splices][$_get](i);
        if (core.int.is(action)) {
          if (dart.notNull(action) <= 0) {
            let v = 0 - dart.notNull(action);
            while (v >= 128) {
              buffer[$_set]((t0 = outPos, outPos = dart.notNull(t0) + 1, t0), 128 | v & 127);
              v = v[$rightShift](7);
            }
            buffer[$_set]((t0$ = outPos, outPos = dart.notNull(t0$) + 1, t0$), v);
          } else {
            let bytesToCopy = action;
            while (dart.notNull(bytesToCopy) > 0) {
              let chunk = typed_data.Uint8List._check(this[_outputChunks][$_get](chunkIndex));
              let bytesInChunk = core.int._check(this[_outputChunks][$_get](chunkIndex + 1));
              let leftInChunk = dart.notNull(bytesInChunk) - chunkPos;
              let bytesToCopyFromChunk = leftInChunk > dart.notNull(bytesToCopy) ? bytesToCopy : leftInChunk;
              let endPos = chunkPos + dart.notNull(bytesToCopyFromChunk);
              while (chunkPos < endPos) {
                buffer[$_set]((t0$0 = outPos, outPos = dart.notNull(t0$0) + 1, t0$0), chunk[$_get]((t0$1 = chunkPos, chunkPos = t0$1 + 1, t0$1)));
              }
              bytesToCopy = dart.notNull(bytesToCopy) - dart.notNull(bytesToCopyFromChunk);
              if (chunkPos === bytesInChunk) {
                chunkIndex = chunkIndex + 2;
                chunkPos = 0;
              }
            }
          }
        } else {
          outPos = this[_copyInto](buffer, outPos, typed_data.TypedData._check(action));
        }
      }
      return true;
    }
    [_commitChunk](allocateNew) {
      if (this[_bytesInChunk] !== 0) {
        this[_outputChunks][$add](this[_outputChunk]);
        this[_outputChunks][$add](this[_bytesInChunk]);
        this[_outputChunksBytes] = dart.notNull(this[_outputChunksBytes]) + dart.notNull(this[_bytesInChunk]);
      }
      if (dart.test(allocateNew)) {
        this[_outputChunk] = _native_typed_data.NativeUint8List.new(512);
        this[_bytesInChunk] = 0;
        this[_outputChunkAsByteData] = typed_data.ByteData.view(this[_outputChunk][$buffer]);
      } else {
        this[_outputChunk] = this[_outputChunkAsByteData] = null;
        this[_bytesInChunk] = 0;
      }
    }
    [_ensureBytes](count) {
      if (dart.notNull(this[_bytesInChunk]) + dart.notNull(count) > 512) {
        this[_commitChunk](true);
      }
    }
    [_commitSplice]() {
      let pos = dart.notNull(this[_bytesInChunk]) + dart.notNull(this[_outputChunksBytes]);
      let bytes = pos - dart.notNull(this[_lastSplicePos]);
      if (bytes > 0) {
        this[_splices][$add](bytes);
      }
      this[_lastSplicePos] = pos;
    }
    [_writeRawBytes](value) {
      this[_commitSplice]();
      this[_splices][$add](value);
      this[_bytesTotal] = dart.notNull(this[_bytesTotal]) + dart.notNull(value[$lengthInBytes]);
    }
    [_startLengthDelimited]() {
      this[_commitSplice]();
      let index = this[_splices][$length];
      this[_splices][$add](this[_bytesTotal]);
      return index;
    }
    [_endLengthDelimited](index) {
      let writtenSizeInBytes = dart.asInt(dart.notNull(this[_bytesTotal]) - dart.notNull(core.num._check(this[_splices][$_get](index))));
      this[_splices][$_set](index, 0 - writtenSizeInBytes);
      this[_bytesTotal] = dart.notNull(this[_bytesTotal]) + dart.notNull(this[_varint32LengthInBytes](writtenSizeInBytes));
    }
    [_varint32LengthInBytes](value) {
      value = (dart.notNull(value) & 4294967295) >>> 0;
      if (dart.notNull(value) < 128) return 1;
      if (dart.notNull(value) < 16384) return 2;
      if (dart.notNull(value) < 2097152) return 3;
      if (dart.notNull(value) < 268435456) return 4;
      return 5;
    }
    [_writeVarint32](value) {
      let t0, t0$;
      this[_ensureBytes](5);
      let i = this[_bytesInChunk];
      while (dart.notNull(value) >= 128) {
        this[_outputChunk][$_set]((t0 = i, i = dart.notNull(t0) + 1, t0), 128 | dart.notNull(value) & 127);
        value = value[$rightShift](7);
      }
      this[_outputChunk][$_set]((t0$ = i, i = dart.notNull(t0$) + 1, t0$), value);
      this[_bytesTotal] = dart.notNull(this[_bytesTotal]) + (dart.notNull(i) - dart.notNull(this[_bytesInChunk]));
      this[_bytesInChunk] = i;
    }
    [_writeVarint64](value) {
      let t0, t0$;
      this[_ensureBytes](10);
      let i = this[_bytesInChunk];
      let lo = value.toUnsigned(32).toInt();
      let hi = value['>>'](32).toUnsigned(32).toInt();
      while (dart.notNull(hi) > 0 || dart.notNull(lo) >= 128) {
        this[_outputChunk][$_set]((t0 = i, i = dart.notNull(t0) + 1, t0), 128 | dart.notNull(lo) & 127);
        lo = (lo[$rightShift](7) | (dart.notNull(hi) & 127) << 25 >>> 0) >>> 0;
        hi = hi[$rightShift](7);
      }
      this[_outputChunk][$_set]((t0$ = i, i = dart.notNull(t0$) + 1, t0$), lo);
      this[_bytesTotal] = dart.notNull(this[_bytesTotal]) + (dart.notNull(i) - dart.notNull(this[_bytesInChunk]));
      this[_bytesInChunk] = i;
    }
    [_writeDouble](value) {
      if (value[$isNaN]) {
        this[_writeInt32](0);
        this[_writeInt32](2146959360);
        return;
      }
      this[_ensureBytes](8);
      this[_outputChunkAsByteData][$setFloat64](this[_bytesInChunk], value, typed_data.Endian.little);
      this[_bytesInChunk] = dart.notNull(this[_bytesInChunk]) + 8;
      this[_bytesTotal] = dart.notNull(this[_bytesTotal]) + 8;
    }
    [_writeFloat](value) {
      if (value[$isNaN]) {
        this[_writeInt32](2143289344);
      } else if (value[$abs]() < 1.401298464324817e-45) {
        this[_writeInt32](value[$isNegative] ? 2147483648 : 0);
      } else if (value[$isInfinite] || value[$abs]() > 3.4028234663852886e+38) {
        this[_writeInt32](value[$isNegative] ? 4286578688 : 2139095040);
      } else {
        this[_ensureBytes](4);
        this[_outputChunkAsByteData][$setFloat32](this[_bytesInChunk], value, typed_data.Endian.little);
        this[_bytesInChunk] = dart.notNull(this[_bytesInChunk]) + 4;
        this[_bytesTotal] = dart.notNull(this[_bytesTotal]) + 4;
      }
    }
    [_writeInt32](value) {
      this[_ensureBytes](4);
      this[_outputChunkAsByteData][$setInt32](this[_bytesInChunk], (dart.notNull(value) & 4294967295) >>> 0, typed_data.Endian.little);
      this[_bytesInChunk] = dart.notNull(this[_bytesInChunk]) + 4;
      this[_bytesTotal] = dart.notNull(this[_bytesTotal]) + 4;
    }
    [_writeInt64](value) {
      this[_writeInt32](value.toUnsigned(32).toInt());
      this[_writeInt32](value['>>'](32).toUnsigned(32).toInt());
    }
    [_writeValueAs](valueType, value) {
      switch (valueType) {
        case 16:
        {
          this[_writeVarint32](dart.dtest(value) ? 1 : 0);
          break;
        }
        case 32:
        {
          this[_writeBytesNoTag](typed_data.TypedData.is(value) ? value : _native_typed_data.NativeUint8List.fromList(ListOfint()._check(value)));
          break;
        }
        case 64:
        {
          this[_writeBytesNoTag](protobuf._utf8.encode(core.String._check(value)));
          break;
        }
        case 128:
        {
          this[_writeDouble](core.double._check(value));
          break;
        }
        case 256:
        {
          this[_writeFloat](core.double._check(value));
          break;
        }
        case 512:
        {
          this[_writeVarint32](core.int._check(dart.dsend(dart.dload(value, 'value'), '&', [4294967295])));
          break;
        }
        case 1024:
        {
          dart.dsend(value, 'writeToCodedBufferWriter', [this]);
          break;
        }
        case 2048:
        {
          this[_writeVarint32](core.int._check(dart.dsend(value, '&', [4294967295])));
          break;
        }
        case 4096:
        {
          this[_writeVarint64](fixnum.Int64._check(value));
          break;
        }
        case 8192:
        {
          this[_writeVarint32](protobuf._encodeZigZag32(core.int._check(value)));
          break;
        }
        case 16384:
        {
          this[_writeVarint64](protobuf._encodeZigZag64(fixnum.Int64._check(value)));
          break;
        }
        case 32768:
        {
          this[_writeVarint32](core.int._check(value));
          break;
        }
        case 65536:
        {
          this[_writeVarint64](fixnum.Int64._check(value));
          break;
        }
        case 131072:
        {
          this[_writeInt32](core.int._check(value));
          break;
        }
        case 262144:
        {
          this[_writeInt64](fixnum.Int64._check(value));
          break;
        }
        case 524288:
        {
          this[_writeInt32](core.int._check(value));
          break;
        }
        case 1048576:
        {
          this[_writeInt64](fixnum.Int64._check(value));
          break;
        }
        case 2097152:
        {
          let mark = this[_startLengthDelimited]();
          dart.dsend(value, 'writeToCodedBufferWriter', [this]);
          this[_endLengthDelimited](mark);
          break;
        }
      }
    }
    [_writeBytesNoTag](value) {
      this.writeInt32NoTag(core.int._check(dart.dload(value, 'length')));
      this[_writeRawBytes](typed_data.TypedData._check(value));
    }
    [_writeTag](fieldNumber, wireFormat) {
      this.writeInt32NoTag(protobuf.makeTag(fieldNumber, wireFormat));
    }
    [_writeValue](fieldNumber, valueType, value, wireFormat) {
      this[_writeTag](fieldNumber, wireFormat);
      this[_writeValueAs](valueType, value);
      if (valueType === 1024) {
        this[_writeTag](fieldNumber, 4);
      }
    }
    writeInt32NoTag(value) {
      this[_writeVarint32]((dart.notNull(value) & 4294967295) >>> 0);
    }
    [_copyInto](buffer, pos, value) {
      let t0, t0$;
      if (typed_data.Uint8List.is(value)) {
        let len = value[$length];
        for (let j = 0; j < dart.notNull(len); j = j + 1) {
          buffer[$_set]((t0 = pos, pos = dart.notNull(t0) + 1, t0), value[$_get](j));
        }
        return pos;
      } else {
        let len = value[$lengthInBytes];
        let u8 = typed_data.Uint8List.view(value[$buffer], value[$offsetInBytes], value[$lengthInBytes]);
        for (let j = 0; j < dart.notNull(len); j = j + 1) {
          buffer[$_set]((t0$ = pos, pos = dart.notNull(t0$) + 1, t0$), u8[$_get](j));
        }
        return pos;
      }
    }
    static _valueTypeIndex(powerOf2) {
      return (125613361 * dart.notNull(powerOf2))[$rightShift](27) & 31;
    }
  };
  (protobuf.CodedBufferWriter.new = function() {
    this[_splices] = [];
    this[_lastSplicePos] = 0;
    this[_outputChunk] = null;
    this[_bytesInChunk] = 0;
    this[_outputChunkAsByteData] = null;
    this[_outputChunks] = [];
    this[_outputChunksBytes] = 0;
    this[_bytesTotal] = 0;
    this[_commitChunk](true);
  }).prototype = protobuf.CodedBufferWriter.prototype;
  dart.addTypeTests(protobuf.CodedBufferWriter);
  dart.setMethodSignature(protobuf.CodedBufferWriter, () => ({
    __proto__: dart.getMethods(protobuf.CodedBufferWriter.__proto__),
    writeField: dart.fnType(dart.void, [core.int, core.int, dart.dynamic]),
    toBuffer: dart.fnType(typed_data.Uint8List, []),
    writeTo: dart.fnType(core.bool, [typed_data.Uint8List], [core.int]),
    [_commitChunk]: dart.fnType(dart.void, [core.bool]),
    [_ensureBytes]: dart.fnType(dart.void, [core.int]),
    [_commitSplice]: dart.fnType(dart.void, []),
    [_writeRawBytes]: dart.fnType(dart.void, [typed_data.TypedData]),
    [_startLengthDelimited]: dart.fnType(core.int, []),
    [_endLengthDelimited]: dart.fnType(dart.void, [core.int]),
    [_varint32LengthInBytes]: dart.fnType(core.int, [core.int]),
    [_writeVarint32]: dart.fnType(dart.void, [core.int]),
    [_writeVarint64]: dart.fnType(dart.void, [fixnum.Int64]),
    [_writeDouble]: dart.fnType(dart.void, [core.double]),
    [_writeFloat]: dart.fnType(dart.void, [core.double]),
    [_writeInt32]: dart.fnType(dart.void, [core.int]),
    [_writeInt64]: dart.fnType(dart.void, [fixnum.Int64]),
    [_writeValueAs]: dart.fnType(dart.void, [core.int, dart.dynamic]),
    [_writeBytesNoTag]: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_writeTag]: dart.fnType(dart.dynamic, [core.int, core.int]),
    [_writeValue]: dart.fnType(dart.void, [core.int, core.int, dart.dynamic, core.int]),
    writeInt32NoTag: dart.fnType(dart.void, [core.int]),
    [_copyInto]: dart.fnType(core.int, [typed_data.Uint8List, core.int, typed_data.TypedData])
  }));
  dart.setGetterSignature(protobuf.CodedBufferWriter, () => ({
    __proto__: dart.getGetters(protobuf.CodedBufferWriter.__proto__),
    lengthInBytes: core.int
  }));
  dart.setLibraryUri(protobuf.CodedBufferWriter, "package:protobuf/protobuf.dart");
  dart.setFieldSignature(protobuf.CodedBufferWriter, () => ({
    __proto__: dart.getFields(protobuf.CodedBufferWriter.__proto__),
    [_splices]: dart.finalFieldType(core.List),
    [_lastSplicePos]: dart.fieldType(core.int),
    [_outputChunk]: dart.fieldType(typed_data.Uint8List),
    [_bytesInChunk]: dart.fieldType(core.int),
    [_outputChunkAsByteData]: dart.fieldType(typed_data.ByteData),
    [_outputChunks]: dart.finalFieldType(core.List),
    [_outputChunksBytes]: dart.fieldType(core.int),
    [_bytesTotal]: dart.fieldType(core.int)
  }));
  dart.defineLazy(protobuf.CodedBufferWriter, {
    /*protobuf.CodedBufferWriter._chunkLength*/get _chunkLength() {
      return 512;
    },
    /*protobuf.CodedBufferWriter._BOOL_BIT_INDEX*/get _BOOL_BIT_INDEX() {
      return 14;
    },
    /*protobuf.CodedBufferWriter._BYTES_BIT_INDEX*/get _BYTES_BIT_INDEX() {
      return 29;
    },
    /*protobuf.CodedBufferWriter._STRING_BIT_INDEX*/get _STRING_BIT_INDEX() {
      return 27;
    },
    /*protobuf.CodedBufferWriter._DOUBLE_BIT_INDEX*/get _DOUBLE_BIT_INDEX() {
      return 23;
    },
    /*protobuf.CodedBufferWriter._FLOAT_BIT_INDEX*/get _FLOAT_BIT_INDEX() {
      return 15;
    },
    /*protobuf.CodedBufferWriter._ENUM_BIT_INDEX*/get _ENUM_BIT_INDEX() {
      return 31;
    },
    /*protobuf.CodedBufferWriter._GROUP_BIT_INDEX*/get _GROUP_BIT_INDEX() {
      return 30;
    },
    /*protobuf.CodedBufferWriter._INT32_BIT_INDEX*/get _INT32_BIT_INDEX() {
      return 28;
    },
    /*protobuf.CodedBufferWriter._INT64_BIT_INDEX*/get _INT64_BIT_INDEX() {
      return 25;
    },
    /*protobuf.CodedBufferWriter._SINT32_BIT_INDEX*/get _SINT32_BIT_INDEX() {
      return 18;
    },
    /*protobuf.CodedBufferWriter._SINT64_BIT_INDEX*/get _SINT64_BIT_INDEX() {
      return 5;
    },
    /*protobuf.CodedBufferWriter._UINT32_BIT_INDEX*/get _UINT32_BIT_INDEX() {
      return 11;
    },
    /*protobuf.CodedBufferWriter._UINT64_BIT_INDEX*/get _UINT64_BIT_INDEX() {
      return 22;
    },
    /*protobuf.CodedBufferWriter._FIXED32_BIT_INDEX*/get _FIXED32_BIT_INDEX() {
      return 13;
    },
    /*protobuf.CodedBufferWriter._FIXED64_BIT_INDEX*/get _FIXED64_BIT_INDEX() {
      return 26;
    },
    /*protobuf.CodedBufferWriter._SFIXED32_BIT_INDEX*/get _SFIXED32_BIT_INDEX() {
      return 21;
    },
    /*protobuf.CodedBufferWriter._SFIXED64_BIT_INDEX*/get _SFIXED64_BIT_INDEX() {
      return 10;
    },
    /*protobuf.CodedBufferWriter._MESSAGE_BIT_INDEX*/get _MESSAGE_BIT_INDEX() {
      return 20;
    },
    /*protobuf.CodedBufferWriter._wireTypes*/get _wireTypes() {
      let t0;
      return t0 = _native_typed_data.NativeUint8List.new(32), t0[$_set](14, 0), t0[$_set](29, 2), t0[$_set](27, 2), t0[$_set](23, 1), t0[$_set](15, 5), t0[$_set](31, 0), t0[$_set](30, 3), t0[$_set](28, 0), t0[$_set](25, 0), t0[$_set](18, 0), t0[$_set](5, 0), t0[$_set](11, 0), t0[$_set](22, 0), t0[$_set](13, 5), t0[$_set](26, 1), t0[$_set](21, 5), t0[$_set](10, 1), t0[$_set](20, 2), t0;
    }
  });
  const PackageName_name = dart.privateName(protobuf, "PackageName.name");
  let C0;
  const _sortedByTag = dart.privateName(protobuf, "_sortedByTag");
  const _addField = dart.privateName(protobuf, "_addField");
  const _isDummy = dart.privateName(protobuf, "_isDummy");
  let C1;
  const _computeSortedByTag = dart.privateName(protobuf, "_computeSortedByTag");
  const _makeEmptyMessage = dart.privateName(protobuf, "_makeEmptyMessage");
  const _decodeEnum = dart.privateName(protobuf, "_decodeEnum");
  const qualifiedMessageName = dart.privateName(protobuf, "BuilderInfo.qualifiedMessageName");
  const byIndex = dart.privateName(protobuf, "BuilderInfo.byIndex");
  const fieldInfo = dart.privateName(protobuf, "BuilderInfo.fieldInfo");
  const byTagAsString = dart.privateName(protobuf, "BuilderInfo.byTagAsString");
  const byName = dart.privateName(protobuf, "BuilderInfo.byName");
  const oneofs = dart.privateName(protobuf, "BuilderInfo.oneofs");
  const hasExtensions = dart.privateName(protobuf, "BuilderInfo.hasExtensions");
  const hasRequiredFields = dart.privateName(protobuf, "BuilderInfo.hasRequiredFields");
  const toProto3Json$ = dart.privateName(protobuf, "BuilderInfo.toProto3Json");
  const fromProto3Json$ = dart.privateName(protobuf, "BuilderInfo.fromProto3Json");
  const createEmptyInstance$ = dart.privateName(protobuf, "BuilderInfo.createEmptyInstance");
  protobuf.BuilderInfo = class BuilderInfo extends core.Object {
    get qualifiedMessageName() {
      return this[qualifiedMessageName];
    }
    set qualifiedMessageName(value) {
      super.qualifiedMessageName = value;
    }
    get byIndex() {
      return this[byIndex];
    }
    set byIndex(value) {
      super.byIndex = value;
    }
    get fieldInfo() {
      return this[fieldInfo];
    }
    set fieldInfo(value) {
      super.fieldInfo = value;
    }
    get byTagAsString() {
      return this[byTagAsString];
    }
    set byTagAsString(value) {
      super.byTagAsString = value;
    }
    get byName() {
      return this[byName];
    }
    set byName(value) {
      super.byName = value;
    }
    get oneofs() {
      return this[oneofs];
    }
    set oneofs(value) {
      super.oneofs = value;
    }
    get hasExtensions() {
      return this[hasExtensions];
    }
    set hasExtensions(value) {
      this[hasExtensions] = value;
    }
    get hasRequiredFields() {
      return this[hasRequiredFields];
    }
    set hasRequiredFields(value) {
      this[hasRequiredFields] = value;
    }
    get toProto3Json() {
      return this[toProto3Json$];
    }
    set toProto3Json(value) {
      super.toProto3Json = value;
    }
    get fromProto3Json() {
      return this[fromProto3Json$];
    }
    set fromProto3Json(value) {
      super.fromProto3Json = value;
    }
    get createEmptyInstance() {
      return this[createEmptyInstance$];
    }
    set createEmptyInstance(value) {
      super.createEmptyInstance = value;
    }
    add(T, tagNumber, name, fieldType, defaultOrMaker, subBuilder, valueOf, enumValues, opts) {
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      let index = this.byIndex[$length];
      let fieldInfo = tagNumber === 0 ? new protobuf.FieldInfo.dummy(index) : new (protobuf.FieldInfo$(T)).new(name, tagNumber, index, fieldType, {defaultOrMaker: defaultOrMaker, subBuilder: subBuilder, valueOf: valueOf, enumValues: enumValues, protoName: protoName});
      this[_addField](fieldInfo);
    }
    addMapField(K, V, tagNumber, name, keyFieldType, valueFieldType, mapEntryBuilderInfo, valueCreator, opts) {
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      let index = this.byIndex[$length];
      this[_addField](new (protobuf.MapFieldInfo$(K, V)).new(name, tagNumber, index, 6291456, keyFieldType, valueFieldType, mapEntryBuilderInfo, valueCreator, {protoName: protoName}));
    }
    addRepeated(T, tagNumber, name, fieldType, check, subBuilder, valueOf, enumValues, opts) {
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      let index = this.byIndex[$length];
      this[_addField](new (protobuf.FieldInfo$(T)).repeated(name, tagNumber, index, fieldType, check, subBuilder, {valueOf: valueOf, enumValues: enumValues, protoName: protoName}));
    }
    [_addField](fi) {
      this.byIndex[$add](fi);
      if (!dart.equals(this.byIndex[$_get](fi.index), fi)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/builder_info.dart", 87, 12, "byIndex[fi.index] == fi");
      if (!dart.test(fi[_isDummy])) {
        this.fieldInfo[$_set](fi.tagNumber, fi);
        this.byTagAsString[$_set](dart.str(fi.tagNumber), fi);
        this.byName[$_set](fi.name, fi);
      }
    }
    a(T, tagNumber, name, fieldType, opts) {
      let defaultOrMaker = opts && 'defaultOrMaker' in opts ? opts.defaultOrMaker : null;
      let subBuilder = opts && 'subBuilder' in opts ? opts.subBuilder : null;
      let valueOf = opts && 'valueOf' in opts ? opts.valueOf : null;
      let enumValues = opts && 'enumValues' in opts ? opts.enumValues : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this.add(T, tagNumber, name, fieldType, defaultOrMaker, subBuilder, valueOf, enumValues, {protoName: protoName});
    }
    aOS(tagNumber, name, opts) {
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this.add(core.String, tagNumber, name, 64, null, null, null, null, {protoName: protoName});
    }
    pPS(tagNumber, name, opts) {
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this.addRepeated(core.String, tagNumber, name, 66, protobuf.getCheckFunction(66), null, null, null, {protoName: protoName});
    }
    aQS(tagNumber, name, opts) {
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this.add(core.String, tagNumber, name, 65, null, null, null, null, {protoName: protoName});
    }
    aInt64(tagNumber, name, opts) {
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this.add(fixnum.Int64, tagNumber, name, 4096, fixnum.Int64.ZERO, null, null, null, {protoName: protoName});
    }
    aOB(tagNumber, name, opts) {
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this.add(core.bool, tagNumber, name, 16, null, null, null, null, {protoName: protoName});
    }
    e(T, tagNumber, name, fieldType, opts) {
      let defaultOrMaker = opts && 'defaultOrMaker' in opts ? opts.defaultOrMaker : null;
      let valueOf = opts && 'valueOf' in opts ? opts.valueOf : null;
      let enumValues = opts && 'enumValues' in opts ? opts.enumValues : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this.add(T, tagNumber, name, fieldType, defaultOrMaker, null, valueOf, enumValues, {protoName: protoName});
    }
    p(T, tagNumber, name, fieldType, opts) {
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      if (!(!dart.test(protobuf._isGroupOrMessage(fieldType)) && !dart.test(protobuf._isEnum(fieldType)))) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/builder_info.dart", 154, 12, "!_isGroupOrMessage(fieldType) && !_isEnum(fieldType)");
      this.addRepeated(T, tagNumber, name, fieldType, protobuf.getCheckFunction(fieldType), null, null, null, {protoName: protoName});
    }
    pc(T, tagNumber, name, fieldType, opts) {
      let subBuilder = opts && 'subBuilder' in opts ? opts.subBuilder : null;
      let valueOf = opts && 'valueOf' in opts ? opts.valueOf : null;
      let enumValues = opts && 'enumValues' in opts ? opts.enumValues : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      if (!(dart.test(protobuf._isGroupOrMessage(fieldType)) || dart.test(protobuf._isEnum(fieldType)))) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/builder_info.dart", 166, 12, "_isGroupOrMessage(fieldType) || _isEnum(fieldType)");
      this.addRepeated(T, tagNumber, name, fieldType, C1 || CT.C1, subBuilder, valueOf, enumValues, {protoName: protoName});
    }
    aOM(T, tagNumber, name, opts) {
      let subBuilder = opts && 'subBuilder' in opts ? opts.subBuilder : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this.add(T, tagNumber, name, 2097152, protobuf.GeneratedMessage._defaultMakerFor(T, subBuilder), subBuilder, null, null, {protoName: protoName});
    }
    aQM(T, tagNumber, name, opts) {
      let subBuilder = opts && 'subBuilder' in opts ? opts.subBuilder : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this.add(T, tagNumber, name, 2097153, protobuf.GeneratedMessage._defaultMakerFor(T, subBuilder), subBuilder, null, null, {protoName: protoName});
    }
    oo(oneofIndex, tags) {
      tags[$forEach](dart.fn(tag => {
        let t2, t1, t0;
        t0 = this.oneofs;
        t1 = tag;
        t2 = oneofIndex;
        t0[$_set](t1, t2);
        return t2;
      }, intToint()));
    }
    m(K, V, tagNumber, name, opts) {
      let t0;
      let entryClassName = opts && 'entryClassName' in opts ? opts.entryClassName : null;
      let keyFieldType = opts && 'keyFieldType' in opts ? opts.keyFieldType : null;
      let valueFieldType = opts && 'valueFieldType' in opts ? opts.valueFieldType : null;
      let valueCreator = opts && 'valueCreator' in opts ? opts.valueCreator : null;
      let valueOf = opts && 'valueOf' in opts ? opts.valueOf : null;
      let enumValues = opts && 'enumValues' in opts ? opts.enumValues : null;
      let packageName = opts && 'packageName' in opts ? opts.packageName : C0 || CT.C0;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      let mapEntryBuilderInfo = (t0 = new protobuf.BuilderInfo.new(entryClassName, {package: packageName}), t0.add(dart.dynamic, 1, "key", keyFieldType, null, null, null, null), t0.add(dart.dynamic, 2, "value", valueFieldType, null, valueCreator, valueOf, enumValues), t0);
      this.addMapField(K, V, tagNumber, name, keyFieldType, valueFieldType, mapEntryBuilderInfo, valueCreator, {protoName: protoName});
    }
    containsTagNumber(tagNumber) {
      return this.fieldInfo[$containsKey](tagNumber);
    }
    defaultValue(tagNumber) {
      let func = this.makeDefault(tagNumber);
      return func == null ? null : func();
    }
    fieldName(tagNumber) {
      let i = this.fieldInfo[$_get](tagNumber);
      return i != null ? i.name : null;
    }
    fieldType(tagNumber) {
      let i = this.fieldInfo[$_get](tagNumber);
      return i != null ? i.type : null;
    }
    makeDefault(tagNumber) {
      let i = this.fieldInfo[$_get](tagNumber);
      return i != null ? i.makeDefault : null;
    }
    subBuilder(tagNumber) {
      let i = this.fieldInfo[$_get](tagNumber);
      return i != null ? i.subBuilder : null;
    }
    tagNumber(fieldName) {
      let i = this.byName[$_get](fieldName);
      return i != null ? i.tagNumber : null;
    }
    valueOfFunc(tagNumber) {
      let i = this.fieldInfo[$_get](tagNumber);
      return i != null ? i.valueOf : null;
    }
    get sortedByTag() {
      let t0;
      t0 = this[_sortedByTag];
      return t0 == null ? this[_sortedByTag] = this[_computeSortedByTag]() : t0;
    }
    get messageName() {
      let lastDot = this.qualifiedMessageName[$lastIndexOf](".");
      return lastDot === -1 ? this.qualifiedMessageName : this.qualifiedMessageName[$substring](lastDot + 1);
    }
    [_computeSortedByTag]() {
      let t0;
      t0 = ListOfFieldInfo().from(this.fieldInfo[$values], {growable: false});
      t0[$sort](dart.fn((a, b) => a.tagNumber[$compareTo](b.tagNumber), FieldInfoAndFieldInfoToint()));
      return t0;
    }
    [_makeEmptyMessage](tagNumber, extensionRegistry) {
      let subBuilderFunc = this.subBuilder(tagNumber);
      if (subBuilderFunc == null && extensionRegistry != null) {
        subBuilderFunc = extensionRegistry.getExtension(this.qualifiedMessageName, tagNumber).subBuilder;
      }
      return subBuilderFunc();
    }
    [_decodeEnum](tagNumber, registry, rawValue) {
      let f = this.valueOfFunc(tagNumber);
      if (f == null && registry != null) {
        f = registry.getExtension(this.qualifiedMessageName, tagNumber).valueOf;
      }
      return f(rawValue);
    }
  };
  (protobuf.BuilderInfo.new = function(messageName, opts) {
    let $package = opts && 'package' in opts ? opts.package : C0 || CT.C0;
    let createEmptyInstance = opts && 'createEmptyInstance' in opts ? opts.createEmptyInstance : null;
    let toProto3Json = opts && 'toProto3Json' in opts ? opts.toProto3Json : null;
    let fromProto3Json = opts && 'fromProto3Json' in opts ? opts.fromProto3Json : null;
    this[byIndex] = JSArrayOfFieldInfo().of([]);
    this[fieldInfo] = new (LinkedMapOfint$FieldInfo()).new();
    this[byTagAsString] = new (IdentityMapOfString$FieldInfo()).new();
    this[byName] = new (IdentityMapOfString$FieldInfo()).new();
    this[oneofs] = new (IdentityMapOfint$int()).new();
    this[hasExtensions] = false;
    this[hasRequiredFields] = true;
    this[_sortedByTag] = null;
    this[createEmptyInstance$] = createEmptyInstance;
    this[toProto3Json$] = toProto3Json;
    this[fromProto3Json$] = fromProto3Json;
    this[qualifiedMessageName] = dart.str($package.prefix) + dart.str(messageName);
    ;
  }).prototype = protobuf.BuilderInfo.prototype;
  dart.addTypeTests(protobuf.BuilderInfo);
  dart.setMethodSignature(protobuf.BuilderInfo, () => ({
    __proto__: dart.getMethods(protobuf.BuilderInfo.__proto__),
    add: dart.gFnType(T => [dart.void, [core.int, core.String, core.int, dart.dynamic, dart.fnType(protobuf.GeneratedMessage, []), dart.fnType(protobuf.ProtobufEnum, [core.int]), core.List$(protobuf.ProtobufEnum)], {protoName: core.String}, {}]),
    addMapField: dart.gFnType((K, V) => [dart.void, [core.int, core.String, core.int, core.int, protobuf.BuilderInfo, dart.fnType(protobuf.GeneratedMessage, [])], {protoName: core.String}, {}]),
    addRepeated: dart.gFnType(T => [dart.void, [core.int, core.String, core.int, dart.fnType(dart.void, [T]), dart.fnType(protobuf.GeneratedMessage, []), dart.fnType(protobuf.ProtobufEnum, [core.int]), core.List$(protobuf.ProtobufEnum)], {protoName: core.String}, {}]),
    [_addField]: dart.fnType(dart.void, [protobuf.FieldInfo]),
    a: dart.gFnType(T => [dart.void, [core.int, core.String, core.int], {defaultOrMaker: dart.dynamic, enumValues: core.List$(protobuf.ProtobufEnum), protoName: core.String, subBuilder: dart.fnType(protobuf.GeneratedMessage, []), valueOf: dart.fnType(protobuf.ProtobufEnum, [core.int])}, {}]),
    aOS: dart.fnType(dart.void, [core.int, core.String], {protoName: core.String}, {}),
    pPS: dart.fnType(dart.void, [core.int, core.String], {protoName: core.String}, {}),
    aQS: dart.fnType(dart.void, [core.int, core.String], {protoName: core.String}, {}),
    aInt64: dart.fnType(dart.void, [core.int, core.String], {protoName: core.String}, {}),
    aOB: dart.fnType(dart.void, [core.int, core.String], {protoName: core.String}, {}),
    e: dart.gFnType(T => [dart.void, [core.int, core.String, core.int], {defaultOrMaker: dart.dynamic, enumValues: core.List$(protobuf.ProtobufEnum), protoName: core.String, valueOf: dart.fnType(protobuf.ProtobufEnum, [core.int])}, {}]),
    p: dart.gFnType(T => [dart.void, [core.int, core.String, core.int], {protoName: core.String}, {}]),
    pc: dart.gFnType(T => [dart.void, [core.int, core.String, core.int], {enumValues: core.List$(protobuf.ProtobufEnum), protoName: core.String, subBuilder: dart.fnType(protobuf.GeneratedMessage, []), valueOf: dart.fnType(protobuf.ProtobufEnum, [core.int])}, {}]),
    aOM: dart.gFnType(T => [dart.void, [core.int, core.String], {protoName: core.String, subBuilder: dart.fnType(T, [])}, {}], T => [protobuf.GeneratedMessage]),
    aQM: dart.gFnType(T => [dart.void, [core.int, core.String], {protoName: core.String, subBuilder: dart.fnType(T, [])}, {}], T => [protobuf.GeneratedMessage]),
    oo: dart.fnType(dart.void, [core.int, core.List$(core.int)]),
    m: dart.gFnType((K, V) => [dart.void, [core.int, core.String], {entryClassName: core.String, enumValues: core.List$(protobuf.ProtobufEnum), keyFieldType: core.int, packageName: protobuf.PackageName, protoName: core.String, valueCreator: dart.fnType(protobuf.GeneratedMessage, []), valueFieldType: core.int, valueOf: dart.fnType(protobuf.ProtobufEnum, [core.int])}, {}]),
    containsTagNumber: dart.fnType(core.bool, [core.int]),
    defaultValue: dart.fnType(dart.dynamic, [core.int]),
    fieldName: dart.fnType(core.String, [core.int]),
    fieldType: dart.fnType(core.int, [core.int]),
    makeDefault: dart.fnType(dart.fnType(dart.dynamic, []), [core.int]),
    subBuilder: dart.fnType(dart.fnType(protobuf.GeneratedMessage, []), [core.int]),
    tagNumber: dart.fnType(core.int, [core.String]),
    valueOfFunc: dart.fnType(dart.fnType(protobuf.ProtobufEnum, [core.int]), [core.int]),
    [_computeSortedByTag]: dart.fnType(core.List$(protobuf.FieldInfo), []),
    [_makeEmptyMessage]: dart.fnType(protobuf.GeneratedMessage, [core.int, protobuf.ExtensionRegistry]),
    [_decodeEnum]: dart.fnType(dart.dynamic, [core.int, protobuf.ExtensionRegistry, core.int])
  }));
  dart.setGetterSignature(protobuf.BuilderInfo, () => ({
    __proto__: dart.getGetters(protobuf.BuilderInfo.__proto__),
    sortedByTag: core.List$(protobuf.FieldInfo),
    messageName: core.String
  }));
  dart.setLibraryUri(protobuf.BuilderInfo, "package:protobuf/protobuf.dart");
  dart.setFieldSignature(protobuf.BuilderInfo, () => ({
    __proto__: dart.getFields(protobuf.BuilderInfo.__proto__),
    qualifiedMessageName: dart.finalFieldType(core.String),
    byIndex: dart.finalFieldType(core.List$(protobuf.FieldInfo)),
    fieldInfo: dart.finalFieldType(core.Map$(core.int, protobuf.FieldInfo)),
    byTagAsString: dart.finalFieldType(core.Map$(core.String, protobuf.FieldInfo)),
    byName: dart.finalFieldType(core.Map$(core.String, protobuf.FieldInfo)),
    oneofs: dart.finalFieldType(core.Map$(core.int, core.int)),
    hasExtensions: dart.fieldType(core.bool),
    hasRequiredFields: dart.fieldType(core.bool),
    [_sortedByTag]: dart.fieldType(core.List$(protobuf.FieldInfo)),
    toProto3Json: dart.finalFieldType(dart.fnType(core.Object, [protobuf.GeneratedMessage, type_registry.TypeRegistry])),
    fromProto3Json: dart.finalFieldType(dart.fnType(dart.dynamic, [protobuf.GeneratedMessage, core.Object, type_registry.TypeRegistry, json_parsing_context.JsonParsingContext])),
    createEmptyInstance: dart.finalFieldType(dart.fnType(protobuf.GeneratedMessage, []))
  }));
  const tagNumber$ = dart.privateName(protobuf, "TagNumber.tagNumber");
  protobuf.TagNumber = class TagNumber extends core.Object {
    get tagNumber() {
      return this[tagNumber$];
    }
    set tagNumber(value) {
      super.tagNumber = value;
    }
  };
  (protobuf.TagNumber.new = function(tagNumber) {
    this[tagNumber$] = tagNumber;
    ;
  }).prototype = protobuf.TagNumber.prototype;
  dart.addTypeTests(protobuf.TagNumber);
  dart.setLibraryUri(protobuf.TagNumber, "package:protobuf/protobuf.dart");
  dart.setFieldSignature(protobuf.TagNumber, () => ({
    __proto__: dart.getFields(protobuf.TagNumber.__proto__),
    tagNumber: dart.finalFieldType(core.int)
  }));
  protobuf.EventPlugin = class EventPlugin extends core.Object {};
  (protobuf.EventPlugin.new = function() {
    ;
  }).prototype = protobuf.EventPlugin.prototype;
  dart.addTypeTests(protobuf.EventPlugin);
  dart.setLibraryUri(protobuf.EventPlugin, "package:protobuf/protobuf.dart");
  const message$ = dart.privateName(protobuf, "InvalidProtocolBufferException.message");
  protobuf.InvalidProtocolBufferException = class InvalidProtocolBufferException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return "InvalidProtocolBufferException: " + dart.str(this.message);
    }
  };
  (protobuf.InvalidProtocolBufferException.__ = function(message) {
    this[message$] = message;
    ;
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.invalidEndTag = function() {
    protobuf.InvalidProtocolBufferException.__.call(this, "Protocol message end-group tag did not match expected tag.");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.invalidTag = function() {
    protobuf.InvalidProtocolBufferException.__.call(this, "Protocol message contained an invalid tag (zero).");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.invalidWireType = function() {
    protobuf.InvalidProtocolBufferException.__.call(this, "Protocol message tag had invalid wire type.");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.malformedVarint = function() {
    protobuf.InvalidProtocolBufferException.__.call(this, "CodedBufferReader encountered a malformed varint.");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.recursionLimitExceeded = function() {
    protobuf.InvalidProtocolBufferException.__.call(this, "Protocol message had too many levels of nesting.  May be malicious.\nUse CodedBufferReader.setRecursionLimit() to increase the depth limit.\n");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.truncatedMessage = function() {
    protobuf.InvalidProtocolBufferException.__.call(this, "While parsing a protocol message, the input ended unexpectedly\nin the middle of a field.  This could mean either than the\ninput has been truncated or that an embedded message\nmisreported its own length.\n");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.wrongAnyMessage = function(anyTypeName, unpackerTypeName) {
    protobuf.InvalidProtocolBufferException.__.call(this, "The type of the Any message (" + dart.str(anyTypeName) + ") does not match the given\nunpacker (" + dart.str(unpackerTypeName) + ").\n");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  dart.addTypeTests(protobuf.InvalidProtocolBufferException);
  protobuf.InvalidProtocolBufferException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(protobuf.InvalidProtocolBufferException, "package:protobuf/protobuf.dart");
  dart.setFieldSignature(protobuf.InvalidProtocolBufferException, () => ({
    __proto__: dart.getFields(protobuf.InvalidProtocolBufferException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(protobuf.InvalidProtocolBufferException, ['toString']);
  const _emptyList = dart.privateName(protobuf, "_emptyList");
  const _fieldSet = dart.privateName(protobuf, "_fieldSet");
  const _hasRequiredValues = dart.privateName(protobuf, "_hasRequiredValues");
  const _hasRequiredFields = dart.privateName(protobuf, "_hasRequiredFields");
  const _appendInvalidFields = dart.privateName(protobuf, "_appendInvalidFields");
  const _createRepeatedField = dart.privateName(protobuf, "_createRepeatedField");
  const _createRepeatedFieldWithType = dart.privateName(protobuf, "_createRepeatedFieldWithType");
  const _ensureRepeatedField = dart.privateName(protobuf, "_ensureRepeatedField");
  const _is_FieldInfo_default = Symbol('_is_FieldInfo_default');
  const name$ = dart.privateName(protobuf, "FieldInfo.name");
  const protoName$ = dart.privateName(protobuf, "FieldInfo.protoName");
  const tagNumber$0 = dart.privateName(protobuf, "FieldInfo.tagNumber");
  const index$ = dart.privateName(protobuf, "FieldInfo.index");
  const type$ = dart.privateName(protobuf, "FieldInfo.type");
  const makeDefault = dart.privateName(protobuf, "FieldInfo.makeDefault");
  const subBuilder$ = dart.privateName(protobuf, "FieldInfo.subBuilder");
  const enumValues$ = dart.privateName(protobuf, "FieldInfo.enumValues");
  const valueOf$ = dart.privateName(protobuf, "FieldInfo.valueOf");
  const check$ = dart.privateName(protobuf, "FieldInfo.check");
  protobuf.FieldInfo$ = dart.generic(T => {
    let PbListOfT = () => (PbListOfT = dart.constFn(protobuf.PbList$(T)))();
    let VoidToPbListOfT = () => (VoidToPbListOfT = dart.constFn(dart.fnType(PbListOfT(), [])))();
    let FrozenPbListOfT = () => (FrozenPbListOfT = dart.constFn(protobuf.FrozenPbList$(T)))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    class FieldInfo extends core.Object {
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get protoName() {
        return this[protoName$];
      }
      set protoName(value) {
        super.protoName = value;
      }
      get tagNumber() {
        return this[tagNumber$0];
      }
      set tagNumber(value) {
        super.tagNumber = value;
      }
      get index() {
        return this[index$];
      }
      set index(value) {
        super.index = value;
      }
      get type() {
        return this[type$];
      }
      set type(value) {
        super.type = value;
      }
      get makeDefault() {
        return this[makeDefault];
      }
      set makeDefault(value) {
        super.makeDefault = value;
      }
      get subBuilder() {
        return this[subBuilder$];
      }
      set subBuilder(value) {
        super.subBuilder = value;
      }
      get enumValues() {
        return this[enumValues$];
      }
      set enumValues(value) {
        super.enumValues = value;
      }
      get valueOf() {
        return this[valueOf$];
      }
      set valueOf(value) {
        super.valueOf = value;
      }
      get check() {
        return this[check$];
      }
      set check(value) {
        super.check = value;
      }
      static findMakeDefault(type, defaultOrMaker) {
        if (defaultOrMaker == null) return protobuf.PbFieldType._defaultForType(type);
        if (VoidTodynamic().is(defaultOrMaker)) return defaultOrMaker;
        return dart.fn(() => defaultOrMaker, VoidTodynamic());
      }
      get [_isDummy]() {
        return this.tagNumber === 0;
      }
      get isRequired() {
        return protobuf._isRequired(this.type);
      }
      get isRepeated() {
        return protobuf._isRepeated(this.type);
      }
      get isGroupOrMessage() {
        return protobuf._isGroupOrMessage(this.type);
      }
      get isEnum() {
        return protobuf._isEnum(this.type);
      }
      get isMapField() {
        return protobuf._isMapField(this.type);
      }
      get readonlyDefault() {
        let t0;
        if (dart.test(this.isRepeated)) {
          t0 = this[_emptyList];
          return t0 == null ? this[_emptyList] = new (FrozenPbListOfT()).__(JSArrayOfT().of([])) : t0;
        }
        return this.makeDefault();
      }
      [_hasRequiredValues](value) {
        if (value == null) return !dart.test(this.isRequired);
        if (!dart.test(protobuf._isGroupOrMessage(this.type))) return true;
        if (!dart.test(this.isRepeated)) {
          let message = protobuf.GeneratedMessage._check(value);
          return message[_fieldSet][_hasRequiredValues]();
        }
        let list = ListOfGeneratedMessage()._check(value);
        if (dart.test(list[$isEmpty])) return true;
        if (!dart.test(list[$_get](0)[_fieldSet][_hasRequiredFields])) return true;
        return list[$every](dart.fn(m => m[_fieldSet][_hasRequiredValues](), GeneratedMessageTobool()));
      }
      [_appendInvalidFields](problems, value, prefix) {
        if (value == null) {
          if (dart.test(this.isRequired)) problems[$add](dart.str(prefix) + dart.str(this.name));
        } else if (!dart.test(protobuf._isGroupOrMessage(this.type))) {
        } else if (!dart.test(this.isRepeated)) {
          let message = protobuf.GeneratedMessage._check(value);
          message[_fieldSet][_appendInvalidFields](problems, dart.str(prefix) + dart.str(this.name) + ".");
        } else {
          let list = ListOfGeneratedMessage().as(value);
          if (dart.test(list[$isEmpty])) return;
          if (!dart.test(list[$_get](0)[_fieldSet][_hasRequiredFields])) return;
          let position = 0;
          for (let message of list) {
            message[_fieldSet][_appendInvalidFields](problems, dart.str(prefix) + dart.str(this.name) + "[" + dart.str(position) + "].");
            position = position + 1;
          }
        }
      }
      [_createRepeatedField](m) {
        if (!dart.test(this.isRepeated)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_info.dart", 167, 12, "isRepeated");
        return m.createRepeatedField(T, this.tagNumber, this);
      }
      [_createRepeatedFieldWithType](S, m) {
        dart.checkTypeBound(S, T, 'S');
        if (!dart.test(this.isRepeated)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_info.dart", 173, 12, "isRepeated");
        return m.createRepeatedField(S, this.tagNumber, protobuf.FieldInfo$(S)._check(this));
      }
      [_ensureRepeatedField](fs) {
        return fs[_ensureRepeatedField](T, this);
      }
      toString() {
        return this.name;
      }
    }
    (FieldInfo.new = function(name, tagNumber, index, type, opts) {
      let t0;
      let defaultOrMaker = opts && 'defaultOrMaker' in opts ? opts.defaultOrMaker : null;
      let subBuilder = opts && 'subBuilder' in opts ? opts.subBuilder : null;
      let valueOf = opts && 'valueOf' in opts ? opts.valueOf : null;
      let enumValues = opts && 'enumValues' in opts ? opts.enumValues : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this[_emptyList] = null;
      this[name$] = name;
      this[tagNumber$0] = tagNumber;
      this[index$] = index;
      this[type$] = type;
      this[subBuilder$] = subBuilder;
      this[valueOf$] = valueOf;
      this[enumValues$] = enumValues;
      this[makeDefault] = protobuf.FieldInfo.findMakeDefault(type, defaultOrMaker);
      this[check$] = null;
      this[protoName$] = (t0 = protoName, t0 == null ? protobuf._unCamelCase(name) : t0);
      if (!(type !== 0)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_info.dart", 56, 16, "type != 0");
      if (!(!dart.test(protobuf._isGroupOrMessage(type)) || subBuilder != null || dart.test(protobuf._isMapField(type)))) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_info.dart", 57, 16, "!_isGroupOrMessage(type) ||\n            subBuilder != null ||\n            _isMapField(type)");
      if (!(!dart.test(protobuf._isEnum(type)) || valueOf != null)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_info.dart", 60, 16, "!_isEnum(type) || valueOf != null");
      ;
    }).prototype = FieldInfo.prototype;
    (FieldInfo.dummy = function(index) {
      this[_emptyList] = null;
      this[index$] = index;
      this[name$] = "<removed field>";
      this[protoName$] = "<removed field>";
      this[tagNumber$0] = 0;
      this[type$] = 0;
      this[makeDefault] = null;
      this[valueOf$] = null;
      this[check$] = null;
      this[enumValues$] = null;
      this[subBuilder$] = null;
      ;
    }).prototype = FieldInfo.prototype;
    (FieldInfo.repeated = function(name, tagNumber, index, type, check, subBuilder, opts) {
      let t0;
      let valueOf = opts && 'valueOf' in opts ? opts.valueOf : null;
      let enumValues = opts && 'enumValues' in opts ? opts.enumValues : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this[_emptyList] = null;
      this[name$] = name;
      this[tagNumber$0] = tagNumber;
      this[index$] = index;
      this[type$] = type;
      this[check$] = check;
      this[subBuilder$] = subBuilder;
      this[valueOf$] = valueOf;
      this[enumValues$] = enumValues;
      this[makeDefault] = dart.fn(() => new (PbListOfT()).new({check: check}), VoidToPbListOfT());
      this[protoName$] = (t0 = protoName, t0 == null ? protobuf._unCamelCase(name) : t0);
      if (!(this.name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_info.dart", 79, 12, "name != null");
      if (!(this.tagNumber != null)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_info.dart", 80, 12, "tagNumber != null");
      if (!dart.test(protobuf._isRepeated(this.type))) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_info.dart", 81, 12, "_isRepeated(type)");
      if (!(this.check != null)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_info.dart", 82, 12, "check != null");
      if (!(!dart.test(protobuf._isEnum(this.type)) || this.valueOf != null)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_info.dart", 83, 12, "!_isEnum(type) || valueOf != null");
    }).prototype = FieldInfo.prototype;
    dart.addTypeTests(FieldInfo);
    FieldInfo.prototype[_is_FieldInfo_default] = true;
    dart.setMethodSignature(FieldInfo, () => ({
      __proto__: dart.getMethods(FieldInfo.__proto__),
      [_hasRequiredValues]: dart.fnType(core.bool, [dart.dynamic]),
      [_appendInvalidFields]: dart.fnType(dart.void, [core.List$(core.String), dart.dynamic, core.String]),
      [_createRepeatedField]: dart.fnType(core.List$(T), [protobuf.GeneratedMessage]),
      [_createRepeatedFieldWithType]: dart.gFnType(S => [core.List$(S), [protobuf.GeneratedMessage]], S => [T]),
      [_ensureRepeatedField]: dart.fnType(core.List$(T), [protobuf._FieldSet])
    }));
    dart.setGetterSignature(FieldInfo, () => ({
      __proto__: dart.getGetters(FieldInfo.__proto__),
      [_isDummy]: core.bool,
      isRequired: core.bool,
      isRepeated: core.bool,
      isGroupOrMessage: core.bool,
      isEnum: core.bool,
      isMapField: core.bool,
      readonlyDefault: dart.dynamic
    }));
    dart.setLibraryUri(FieldInfo, "package:protobuf/protobuf.dart");
    dart.setFieldSignature(FieldInfo, () => ({
      __proto__: dart.getFields(FieldInfo.__proto__),
      [_emptyList]: dart.fieldType(protobuf.FrozenPbList$(T)),
      name: dart.finalFieldType(core.String),
      protoName: dart.finalFieldType(core.String),
      tagNumber: dart.finalFieldType(core.int),
      index: dart.finalFieldType(core.int),
      type: dart.finalFieldType(core.int),
      makeDefault: dart.finalFieldType(dart.fnType(dart.dynamic, [])),
      subBuilder: dart.finalFieldType(dart.fnType(protobuf.GeneratedMessage, [])),
      enumValues: dart.finalFieldType(core.List$(protobuf.ProtobufEnum)),
      valueOf: dart.finalFieldType(dart.fnType(protobuf.ProtobufEnum, [core.int])),
      check: dart.finalFieldType(dart.fnType(dart.void, [T]))
    }));
    dart.defineExtensionMethods(FieldInfo, ['toString']);
    return FieldInfo;
  });
  protobuf.FieldInfo = protobuf.FieldInfo$();
  dart.addTypeTests(protobuf.FieldInfo, _is_FieldInfo_default);
  const _is_Extension_default = Symbol('_is_Extension_default');
  const extendee$ = dart.privateName(protobuf, "Extension.extendee");
  protobuf.Extension$ = dart.generic(T => {
    class Extension extends protobuf.FieldInfo$(T) {
      get extendee() {
        return this[extendee$];
      }
      set extendee(value) {
        super.extendee = value;
      }
      get hashCode() {
        return dart.hashCode(this.extendee) * 31 + dart.notNull(this.tagNumber);
      }
      _equals(other) {
        if (other == null) return false;
        if (!protobuf.Extension.is(other)) return false;
        let o = protobuf.Extension._check(other);
        return this.extendee == o.extendee && this.tagNumber == o.tagNumber;
      }
    }
    (Extension.new = function(extendee, name, tagNumber, fieldType, opts) {
      let defaultOrMaker = opts && 'defaultOrMaker' in opts ? opts.defaultOrMaker : null;
      let subBuilder = opts && 'subBuilder' in opts ? opts.subBuilder : null;
      let valueOf = opts && 'valueOf' in opts ? opts.valueOf : null;
      let enumValues = opts && 'enumValues' in opts ? opts.enumValues : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this[extendee$] = extendee;
      Extension.__proto__.new.call(this, name, tagNumber, null, fieldType, {defaultOrMaker: defaultOrMaker, subBuilder: subBuilder, valueOf: valueOf, enumValues: enumValues, protoName: protoName});
      ;
    }).prototype = Extension.prototype;
    (Extension.repeated = function(extendee, name, tagNumber, fieldType, opts) {
      let check = opts && 'check' in opts ? opts.check : null;
      let subBuilder = opts && 'subBuilder' in opts ? opts.subBuilder : null;
      let valueOf = opts && 'valueOf' in opts ? opts.valueOf : null;
      let enumValues = opts && 'enumValues' in opts ? opts.enumValues : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this[extendee$] = extendee;
      Extension.__proto__.repeated.call(this, name, tagNumber, null, fieldType, check, subBuilder, {valueOf: valueOf, enumValues: enumValues, protoName: protoName});
      ;
    }).prototype = Extension.prototype;
    dart.addTypeTests(Extension);
    Extension.prototype[_is_Extension_default] = true;
    dart.setLibraryUri(Extension, "package:protobuf/protobuf.dart");
    dart.setFieldSignature(Extension, () => ({
      __proto__: dart.getFields(Extension.__proto__),
      extendee: dart.finalFieldType(core.String)
    }));
    dart.defineExtensionMethods(Extension, ['_equals']);
    dart.defineExtensionAccessors(Extension, ['hashCode']);
    return Extension;
  });
  protobuf.Extension = protobuf.Extension$();
  dart.addTypeTests(protobuf.Extension, _is_Extension_default);
  const _info = dart.privateName(protobuf, "_info");
  const _values = dart.privateName(protobuf, "_values");
  const _isReadOnly = dart.privateName(protobuf, "_isReadOnly");
  const _parent$ = dart.privateName(protobuf, "_parent");
  const _getInfoOrNull = dart.privateName(protobuf, "_getInfoOrNull");
  const _getList = dart.privateName(protobuf, "_getList");
  const _validateInfo = dart.privateName(protobuf, "_validateInfo");
  const _addInfoUnchecked = dart.privateName(protobuf, "_addInfoUnchecked");
  const _getFieldOrNull = dart.privateName(protobuf, "_getFieldOrNull");
  const _getFieldOrDefault = dart.privateName(protobuf, "_getFieldOrDefault");
  const _hasField = dart.privateName(protobuf, "_hasField");
  const _messageName = dart.privateName(protobuf, "_messageName");
  const _addInfoAndCreateList = dart.privateName(protobuf, "_addInfoAndCreateList");
  let C2;
  const _message$ = dart.privateName(protobuf, "_message");
  const _setFieldUnchecked = dart.privateName(protobuf, "_setFieldUnchecked");
  const _clearField = dart.privateName(protobuf, "_clearField");
  const _clearFieldAndInfo = dart.privateName(protobuf, "_clearFieldAndInfo");
  const _ensureWritable = dart.privateName(protobuf, "_ensureWritable");
  const _hasObservers = dart.privateName(protobuf, "_hasObservers");
  const _eventPlugin$ = dart.privateName(protobuf, "_eventPlugin");
  const _setFieldFailedMessage = dart.privateName(protobuf, "_setFieldFailedMessage");
  const _validateField = dart.privateName(protobuf, "_validateField");
  const _setField = dart.privateName(protobuf, "_setField");
  const _setFieldAndInfo = dart.privateName(protobuf, "_setFieldAndInfo");
  const _tagNumbers = dart.privateName(protobuf, "_tagNumbers");
  const _infos = dart.privateName(protobuf, "_infos");
  const _hasValues = dart.privateName(protobuf, "_hasValues");
  const _equalValues = dart.privateName(protobuf, "_equalValues");
  const _clearValues = dart.privateName(protobuf, "_clearValues");
  const _shallowCopyValues = dart.privateName(protobuf, "_shallowCopyValues");
  const _markReadOnly = dart.privateName(protobuf, "_markReadOnly");
  protobuf._ExtensionFieldSet = class _ExtensionFieldSet extends core.Object {
    [_getInfoOrNull](tagNumber) {
      return this[_info][$_get](tagNumber);
    }
    [_getFieldOrDefault](fi) {
      if (dart.test(fi.isRepeated)) return this[_getList](dart.dynamic, fi);
      this[_validateInfo](fi);
      this[_addInfoUnchecked](fi);
      let value = this[_getFieldOrNull](fi);
      if (value == null) return fi.makeDefault();
      return value;
    }
    [_hasField](tagNumber) {
      let value = this[_values][$_get](tagNumber);
      if (value == null) return false;
      if (core.List.is(value)) return value[$isNotEmpty];
      return true;
    }
    [_ensureRepeatedField](T, fi) {
      if (!!dart.test(this[_isReadOnly])) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/extension_field_set.dart", 40, 12, "!_isReadOnly");
      if (!dart.test(fi.isRepeated)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/extension_field_set.dart", 41, 12, "fi.isRepeated");
      if (!(fi.extendee == this[_parent$][_messageName])) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/extension_field_set.dart", 42, 12, "fi.extendee == _parent._messageName");
      let list = this[_values][$_get](fi.tagNumber);
      if (list != null) return core.List$(T).as(list);
      return core.List$(T)._check(this[_addInfoAndCreateList](fi));
    }
    [_getList](T, fi) {
      let value = this[_values][$_get](fi.tagNumber);
      if (value != null) return core.List$(T).as(value);
      if (dart.test(this[_isReadOnly])) return core.List$(T).unmodifiable(C2 || CT.C2);
      return core.List$(T)._check(this[_addInfoAndCreateList](fi));
    }
    [_addInfoAndCreateList](fi) {
      this[_validateInfo](fi);
      let newList = fi[_createRepeatedField](this[_parent$][_message$]);
      this[_addInfoUnchecked](fi);
      this[_setFieldUnchecked](fi, newList);
      return newList;
    }
    [_getFieldOrNull](extension) {
      return this[_values][$_get](extension.tagNumber);
    }
    [_clearFieldAndInfo](fi) {
      this[_clearField](fi);
      this[_info][$remove](fi.tagNumber);
    }
    [_clearField](fi) {
      this[_ensureWritable]();
      this[_validateInfo](fi);
      if (dart.test(this[_parent$][_hasObservers])) this[_parent$][_eventPlugin$].beforeClearField(fi);
      this[_values][$remove](fi.tagNumber);
    }
    [_setField](tagNumber, value) {
      let fi = this[_getInfoOrNull](tagNumber);
      if (fi == null) {
        dart.throw(new core.ArgumentError.new("tag " + dart.str(tagNumber) + " not defined in " + dart.str(this[_parent$]) + "._messageName"));
      }
      if (dart.test(fi.isRepeated)) {
        dart.throw(new core.ArgumentError.new(this[_parent$][_setFieldFailedMessage](fi, value, "repeating field (use get + .add())")));
      }
      this[_ensureWritable]();
      this[_parent$][_validateField](fi, value);
      this[_setFieldUnchecked](fi, value);
    }
    [_setFieldAndInfo](fi, value) {
      this[_ensureWritable]();
      if (dart.test(fi.isRepeated)) {
        dart.throw(new core.ArgumentError.new(this[_parent$][_setFieldFailedMessage](fi, value, "repeating field (use get + .add())")));
      }
      this[_ensureWritable]();
      this[_validateInfo](fi);
      this[_parent$][_validateField](fi, value);
      this[_addInfoUnchecked](fi);
      this[_setFieldUnchecked](fi, value);
    }
    [_ensureWritable]() {
      if (dart.test(this[_isReadOnly])) protobuf.frozenMessageModificationHandler(this[_parent$][_messageName]);
    }
    [_validateInfo](fi) {
      if (fi.extendee != this[_parent$][_messageName]) {
        dart.throw(new core.ArgumentError.new("Extension " + dart.str(fi) + " not legal for message " + dart.str(this[_parent$][_messageName])));
      }
    }
    [_addInfoUnchecked](fi) {
      if (!(fi.extendee == this[_parent$][_messageName])) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/extension_field_set.dart", 123, 12, "fi.extendee == _parent._messageName");
      this[_info][$_set](fi.tagNumber, fi);
    }
    [_setFieldUnchecked](fi, value) {
      if (dart.test(this[_parent$][_hasObservers])) {
        this[_parent$][_eventPlugin$].beforeSetField(fi, value);
      }
      this[_values][$_set](fi.tagNumber, value);
    }
    get [_tagNumbers]() {
      return this[_values][$keys];
    }
    get [_infos]() {
      return this[_info][$values];
    }
    get [_hasValues]() {
      return this[_values][$isNotEmpty];
    }
    [_equalValues](other) {
      return other != null && dart.test(protobuf._areMapsEqual(this[_values], other[_values]));
    }
    [_clearValues]() {
      return this[_values][$clear]();
    }
    [_shallowCopyValues](original) {
      let t0;
      for (let tagNumber of original[_tagNumbers]) {
        let extension = original[_getInfoOrNull](tagNumber);
        this[_addInfoUnchecked](extension);
        let value = original[_getFieldOrNull](extension);
        if (value == null) continue;
        if (dart.test(extension.isRepeated)) {
          if (!protobuf.PbListBase.is(value)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/extension_field_set.dart", 158, 16, "value is PbListBase");
          t0 = this[_ensureRepeatedField](dart.dynamic, extension);
          t0[$addAll](core.Iterable._check(value));
          t0;
        } else {
          this[_setFieldUnchecked](extension, value);
        }
      }
    }
    [_markReadOnly]() {
      if (dart.test(this[_isReadOnly])) return;
      this[_isReadOnly] = true;
      for (let field of this[_info][$values]) {
        if (dart.test(field.isRepeated)) {
          let entries = this[_values][$_get](field.tagNumber);
          if (entries == null) continue;
          if (dart.test(field.isGroupOrMessage)) {
            for (let subMessage of ListOfGeneratedMessage().as(entries)) {
              subMessage.freeze();
            }
          }
          this[_values][$_set](field.tagNumber, dart.dsend(entries, 'toFrozenPbList', []));
        } else if (dart.test(field.isGroupOrMessage)) {
          let entry = this[_values][$_get](field.tagNumber);
          if (entry != null) {
            protobuf.GeneratedMessage.as(entry).freeze();
          }
        }
      }
    }
  };
  (protobuf._ExtensionFieldSet.new = function(_parent) {
    this[_info] = new (IdentityMapOfint$Extension()).new();
    this[_values] = new (IdentityMapOfint$dynamic()).new();
    this[_isReadOnly] = false;
    this[_parent$] = _parent;
    ;
  }).prototype = protobuf._ExtensionFieldSet.prototype;
  dart.addTypeTests(protobuf._ExtensionFieldSet);
  dart.setMethodSignature(protobuf._ExtensionFieldSet, () => ({
    __proto__: dart.getMethods(protobuf._ExtensionFieldSet.__proto__),
    [_getInfoOrNull]: dart.fnType(protobuf.Extension, [core.int]),
    [_getFieldOrDefault]: dart.fnType(dart.dynamic, [protobuf.Extension]),
    [_hasField]: dart.fnType(core.bool, [core.int]),
    [_ensureRepeatedField]: dart.gFnType(T => [core.List$(T), [protobuf.Extension$(T)]]),
    [_getList]: dart.gFnType(T => [core.List$(T), [protobuf.Extension$(T)]]),
    [_addInfoAndCreateList]: dart.fnType(core.List, [protobuf.Extension]),
    [_getFieldOrNull]: dart.fnType(dart.dynamic, [protobuf.Extension]),
    [_clearFieldAndInfo]: dart.fnType(dart.void, [protobuf.Extension]),
    [_clearField]: dart.fnType(dart.void, [protobuf.Extension]),
    [_setField]: dart.fnType(dart.void, [core.int, dart.dynamic]),
    [_setFieldAndInfo]: dart.fnType(dart.void, [protobuf.Extension, dart.dynamic]),
    [_ensureWritable]: dart.fnType(dart.void, []),
    [_validateInfo]: dart.fnType(dart.void, [protobuf.Extension]),
    [_addInfoUnchecked]: dart.fnType(dart.void, [protobuf.Extension]),
    [_setFieldUnchecked]: dart.fnType(dart.void, [protobuf.Extension, dart.dynamic]),
    [_equalValues]: dart.fnType(core.bool, [protobuf._ExtensionFieldSet]),
    [_clearValues]: dart.fnType(dart.void, []),
    [_shallowCopyValues]: dart.fnType(dart.void, [protobuf._ExtensionFieldSet]),
    [_markReadOnly]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(protobuf._ExtensionFieldSet, () => ({
    __proto__: dart.getGetters(protobuf._ExtensionFieldSet.__proto__),
    [_tagNumbers]: core.Iterable$(core.int),
    [_infos]: core.Iterable$(protobuf.Extension),
    [_hasValues]: dart.dynamic
  }));
  dart.setLibraryUri(protobuf._ExtensionFieldSet, "package:protobuf/protobuf.dart");
  dart.setFieldSignature(protobuf._ExtensionFieldSet, () => ({
    __proto__: dart.getFields(protobuf._ExtensionFieldSet.__proto__),
    [_parent$]: dart.finalFieldType(protobuf._FieldSet),
    [_info]: dart.finalFieldType(core.Map$(core.int, protobuf.Extension)),
    [_values]: dart.finalFieldType(core.Map$(core.int, dart.dynamic)),
    [_isReadOnly]: dart.fieldType(core.bool)
  }));
  const _extensions = dart.privateName(protobuf, "_extensions");
  let C3;
  protobuf.ExtensionRegistry = class ExtensionRegistry extends core.Object {
    add(extension) {
      let map = this[_extensions][$putIfAbsent](extension.extendee, dart.fn(() => new (LinkedMapOfint$Extension()).new(), VoidToMapOfint$Extension()));
      map[$_set](extension.tagNumber, extension);
    }
    addAll(extensions) {
      extensions[$forEach](dart.bind(this, 'add'));
    }
    getExtension(messageName, tagNumber) {
      let map = this[_extensions][$_get](messageName);
      if (map != null) {
        return map[$_get](tagNumber);
      }
      return null;
    }
    reparseMessage(T, message) {
      return protobuf._reparseMessage(T, message, this);
    }
  };
  (protobuf.ExtensionRegistry.new = function() {
    this[_extensions] = new (IdentityMapOfString$MapOfint$Extension()).new();
    ;
  }).prototype = protobuf.ExtensionRegistry.prototype;
  dart.addTypeTests(protobuf.ExtensionRegistry);
  dart.setMethodSignature(protobuf.ExtensionRegistry, () => ({
    __proto__: dart.getMethods(protobuf.ExtensionRegistry.__proto__),
    add: dart.fnType(dart.void, [protobuf.Extension]),
    addAll: dart.fnType(dart.void, [core.Iterable$(protobuf.Extension)]),
    getExtension: dart.fnType(protobuf.Extension, [core.String, core.int]),
    reparseMessage: dart.gFnType(T => [T, [T]], T => [protobuf.GeneratedMessage])
  }));
  dart.setLibraryUri(protobuf.ExtensionRegistry, "package:protobuf/protobuf.dart");
  dart.setFieldSignature(protobuf.ExtensionRegistry, () => ({
    __proto__: dart.getFields(protobuf.ExtensionRegistry.__proto__),
    [_extensions]: dart.finalFieldType(core.Map$(core.String, core.Map$(core.int, protobuf.Extension)))
  }));
  dart.defineLazy(protobuf.ExtensionRegistry, {
    /*protobuf.ExtensionRegistry.EMPTY*/get EMPTY() {
      return C3 || CT.C3;
    }
  });
  let C4;
  protobuf._EmptyExtensionRegistry = class _EmptyExtensionRegistry extends core.Object {
    get [_extensions]() {
      return C4 || CT.C4;
    }
    add(extension) {
      dart.throw(new core.UnsupportedError.new("Immutable ExtensionRegistry"));
    }
    addAll(extensions) {
      dart.throw(new core.UnsupportedError.new("Immutable ExtensionRegistry"));
    }
    getExtension(messageName, tagNumber) {
      return null;
    }
    reparseMessage(T, message) {
      return protobuf._reparseMessage(T, message, this);
    }
  };
  (protobuf._EmptyExtensionRegistry.new = function() {
    ;
  }).prototype = protobuf._EmptyExtensionRegistry.prototype;
  dart.addTypeTests(protobuf._EmptyExtensionRegistry);
  protobuf._EmptyExtensionRegistry[dart.implements] = () => [protobuf.ExtensionRegistry];
  dart.setMethodSignature(protobuf._EmptyExtensionRegistry, () => ({
    __proto__: dart.getMethods(protobuf._EmptyExtensionRegistry.__proto__),
    add: dart.fnType(dart.void, [protobuf.Extension]),
    addAll: dart.fnType(dart.void, [core.Iterable$(protobuf.Extension)]),
    getExtension: dart.fnType(protobuf.Extension, [core.String, core.int]),
    reparseMessage: dart.gFnType(T => [T, [T]], T => [protobuf.GeneratedMessage])
  }));
  dart.setGetterSignature(protobuf._EmptyExtensionRegistry, () => ({
    __proto__: dart.getGetters(protobuf._EmptyExtensionRegistry.__proto__),
    [_extensions]: core.Map$(core.String, core.Map$(core.int, protobuf.Extension))
  }));
  dart.setLibraryUri(protobuf._EmptyExtensionRegistry, "package:protobuf/protobuf.dart");
  const _ensureMapField = dart.privateName(protobuf, "_ensureMapField");
  const _createMapField = dart.privateName(protobuf, "_createMapField");
  const _isReadonly = dart.privateName(protobuf, "_isReadonly");
  const _entryBuilderInfo$ = dart.privateName(protobuf, "_entryBuilderInfo");
  const _wrappedMap = dart.privateName(protobuf, "_wrappedMap");
  const _entryFieldSet = dart.privateName(protobuf, "_entryFieldSet");
  const _checkNotNull = dart.privateName(protobuf, "_checkNotNull");
  const _mergeEntry = dart.privateName(protobuf, "_mergeEntry");
  const _$get = dart.privateName(protobuf, "_$get");
  const _is_PbMap_default = Symbol('_is_PbMap_default');
  const keyFieldType$ = dart.privateName(protobuf, "PbMap.keyFieldType");
  const valueFieldType$ = dart.privateName(protobuf, "PbMap.valueFieldType");
  protobuf.PbMap$ = dart.generic((K, V) => {
    let LinkedMapOfK$V = () => (LinkedMapOfK$V = dart.constFn(_js_helper.LinkedMap$(K, V)))();
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let MapEntryOfK$V = () => (MapEntryOfK$V = dart.constFn(core.MapEntry$(K, V)))();
    let intAndMapEntryOfK$VToint = () => (intAndMapEntryOfK$VToint = dart.constFn(dart.fnType(core.int, [core.int, MapEntryOfK$V()])))();
    class PbMap extends collection.MapBase$(K, V) {
      get keyFieldType() {
        return this[keyFieldType$];
      }
      set keyFieldType(value) {
        super.keyFieldType = value;
      }
      get valueFieldType() {
        return this[valueFieldType$];
      }
      set valueFieldType(value) {
        super.valueFieldType = value;
      }
      [_entryFieldSet]() {
        return new protobuf._FieldSet.new(null, this[_entryBuilderInfo$], null);
      }
      _get(key) {
        return this[_wrappedMap][$_get](key);
      }
      _set(key, value$) {
        let value = value$;
        K._check(key);
        V._check(value);
        if (dart.test(this[_isReadonly])) {
          dart.throw(new core.UnsupportedError.new("Attempted to change a read-only map field"));
        }
        this[_checkNotNull](key);
        this[_checkNotNull](value);
        this[_wrappedMap][$_set](key, value);
        return value$;
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) {
          return true;
        }
        if (!protobuf.PbMap.is(other)) {
          return false;
        }
        if (!dart.equals(dart.dload(other, 'length'), this.length)) {
          return false;
        }
        for (let key of this.keys) {
          if (!dart.dtest(dart.dsend(other, 'containsKey', [key]))) {
            return false;
          }
        }
        for (let key of this.keys) {
          if (!dart.equals(dart.dsend(other, '_get', [key]), this._get(key))) {
            return false;
          }
        }
        return true;
      }
      get hashCode() {
        return this[_wrappedMap][$entries][$fold](core.int, 0, dart.fn((h, entry) => (dart.notNull(h) ^ dart.notNull(protobuf._HashUtils._hash2(entry.key, entry.value))) >>> 0, intAndMapEntryOfK$VToint()));
      }
      clear() {
        if (dart.test(this[_isReadonly])) {
          dart.throw(new core.UnsupportedError.new("Attempted to change a read-only map field"));
        }
        this[_wrappedMap][$clear]();
      }
      get keys() {
        return this[_wrappedMap][$keys];
      }
      remove(key) {
        if (dart.test(this[_isReadonly])) {
          dart.throw(new core.UnsupportedError.new("Attempted to change a read-only map field"));
        }
        return this[_wrappedMap][$remove](key);
      }
      add(input, registry) {
        if (registry === void 0) registry = null;
        this[_mergeEntry](input, registry);
      }
      [_mergeEntry](input, registry) {
        if (registry === void 0) registry = null;
        let length = input.readInt32();
        let oldLimit = input[_currentLimit];
        input[_currentLimit] = dart.notNull(input[_bufferPos]) + dart.notNull(length);
        let entryFieldSet = this[_entryFieldSet]();
        protobuf._mergeFromCodedBufferReader(entryFieldSet, input, registry);
        input.checkLastTagWas(0);
        input[_currentLimit] = oldLimit;
        let key = entryFieldSet[_$get](K, 0, null);
        let value = entryFieldSet[_$get](V, 1, null);
        this[_wrappedMap][$_set](key, value);
      }
      [_checkNotNull](val) {
        if (val == null) {
          dart.throw(new core.ArgumentError.new("Can't add a null to a map field"));
        }
      }
      freeze() {
        this[_isReadonly] = true;
        if (dart.test(protobuf._isGroupOrMessage(this.valueFieldType))) {
          for (let subMessage of IterableOfGeneratedMessage().as(this.values)) {
            subMessage.freeze();
          }
        }
        return this;
      }
    }
    (PbMap.new = function(keyFieldType, valueFieldType, _entryBuilderInfo) {
      this[_isReadonly] = false;
      this[keyFieldType$] = keyFieldType;
      this[valueFieldType$] = valueFieldType;
      this[_entryBuilderInfo$] = _entryBuilderInfo;
      this[_wrappedMap] = new (LinkedMapOfK$V()).new();
      ;
    }).prototype = PbMap.prototype;
    (PbMap.unmodifiable = function(other) {
      this[_isReadonly] = false;
      this[keyFieldType$] = other.keyFieldType;
      this[valueFieldType$] = other.valueFieldType;
      this[_wrappedMap] = MapOfK$V().unmodifiable(other[_wrappedMap]);
      this[_entryBuilderInfo$] = other[_entryBuilderInfo$];
      this[_isReadonly] = other[_isReadonly];
      ;
    }).prototype = PbMap.prototype;
    dart.addTypeTests(PbMap);
    PbMap.prototype[_is_PbMap_default] = true;
    dart.setMethodSignature(PbMap, () => ({
      __proto__: dart.getMethods(PbMap.__proto__),
      [_entryFieldSet]: dart.fnType(protobuf._FieldSet, []),
      _get: dart.fnType(V, [core.Object]),
      [$_get]: dart.fnType(V, [core.Object]),
      _set: dart.fnType(dart.void, [core.Object, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.Object, core.Object]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      remove: dart.fnType(V, [core.Object]),
      [$remove]: dart.fnType(V, [core.Object]),
      add: dart.fnType(dart.void, [protobuf.CodedBufferReader], [protobuf.ExtensionRegistry]),
      [_mergeEntry]: dart.fnType(dart.void, [protobuf.CodedBufferReader], [protobuf.ExtensionRegistry]),
      [_checkNotNull]: dart.fnType(dart.void, [core.Object]),
      freeze: dart.fnType(protobuf.PbMap, [])
    }));
    dart.setGetterSignature(PbMap, () => ({
      __proto__: dart.getGetters(PbMap.__proto__),
      keys: core.Iterable$(K),
      [$keys]: core.Iterable$(K)
    }));
    dart.setLibraryUri(PbMap, "package:protobuf/protobuf.dart");
    dart.setFieldSignature(PbMap, () => ({
      __proto__: dart.getFields(PbMap.__proto__),
      keyFieldType: dart.finalFieldType(core.int),
      valueFieldType: dart.finalFieldType(core.int),
      [_wrappedMap]: dart.finalFieldType(core.Map$(K, V)),
      [_entryBuilderInfo$]: dart.finalFieldType(protobuf.BuilderInfo),
      [_isReadonly]: dart.fieldType(core.bool)
    }));
    dart.defineExtensionMethods(PbMap, [
      '_get',
      '_set',
      '_equals',
      'clear',
      'remove'
    ]);
    dart.defineExtensionAccessors(PbMap, ['hashCode', 'keys']);
    return PbMap;
  });
  protobuf.PbMap = protobuf.PbMap$();
  dart.defineLazy(protobuf.PbMap, {
    /*protobuf.PbMap._keyFieldNumber*/get _keyFieldNumber() {
      return 1;
    },
    /*protobuf.PbMap._valueFieldNumber*/get _valueFieldNumber() {
      return 2;
    }
  });
  dart.addTypeTests(protobuf.PbMap, _is_PbMap_default);
  const _is_MapFieldInfo_default = Symbol('_is_MapFieldInfo_default');
  const keyFieldType$0 = dart.privateName(protobuf, "MapFieldInfo.keyFieldType");
  const valueFieldType$0 = dart.privateName(protobuf, "MapFieldInfo.valueFieldType");
  const valueCreator$ = dart.privateName(protobuf, "MapFieldInfo.valueCreator");
  const mapEntryBuilderInfo$ = dart.privateName(protobuf, "MapFieldInfo.mapEntryBuilderInfo");
  protobuf.MapFieldInfo$ = dart.generic((K, V) => {
    let PbMapOfK$V = () => (PbMapOfK$V = dart.constFn(protobuf.PbMap$(K, V)))();
    let VoidToPbMapOfK$V = () => (VoidToPbMapOfK$V = dart.constFn(dart.fnType(PbMapOfK$V(), [])))();
    class MapFieldInfo extends protobuf.FieldInfo$(protobuf.PbMap$(K, V)) {
      get keyFieldType() {
        return this[keyFieldType$0];
      }
      set keyFieldType(value) {
        super.keyFieldType = value;
      }
      get valueFieldType() {
        return this[valueFieldType$0];
      }
      set valueFieldType(value) {
        super.valueFieldType = value;
      }
      get valueCreator() {
        return this[valueCreator$];
      }
      set valueCreator(value) {
        super.valueCreator = value;
      }
      get mapEntryBuilderInfo() {
        return this[mapEntryBuilderInfo$];
      }
      set mapEntryBuilderInfo(value) {
        super.mapEntryBuilderInfo = value;
      }
      get valueFieldInfo() {
        return this.mapEntryBuilderInfo.fieldInfo[$_get](2);
      }
      [_ensureMapField](fs) {
        return fs[_ensureMapField](K, V, this);
      }
      [_createMapField](m) {
        if (!dart.test(this.isMapField)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_info.dart", 232, 12, "isMapField");
        return m.createMapField(K, V, this.tagNumber, this);
      }
    }
    (MapFieldInfo.new = function(name, tagNumber, index, type, keyFieldType, valueFieldType, mapEntryBuilderInfo, valueCreator, opts) {
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this[keyFieldType$0] = keyFieldType;
      this[valueFieldType$0] = valueFieldType;
      this[mapEntryBuilderInfo$] = mapEntryBuilderInfo;
      this[valueCreator$] = valueCreator;
      MapFieldInfo.__proto__.new.call(this, name, tagNumber, index, type, {defaultOrMaker: dart.fn(() => new (PbMapOfK$V()).new(keyFieldType, valueFieldType, mapEntryBuilderInfo), VoidToPbMapOfK$V()), protoName: protoName});
      if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_info.dart", 218, 12, "name != null");
      if (!(tagNumber != null)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_info.dart", 219, 12, "tagNumber != null");
      if (!dart.test(protobuf._isMapField(type))) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_info.dart", 220, 12, "_isMapField(type)");
      if (!(!dart.test(protobuf._isEnum(type)) || this.valueOf != null)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_info.dart", 221, 12, "!_isEnum(type) || valueOf != null");
    }).prototype = MapFieldInfo.prototype;
    dart.addTypeTests(MapFieldInfo);
    MapFieldInfo.prototype[_is_MapFieldInfo_default] = true;
    dart.setMethodSignature(MapFieldInfo, () => ({
      __proto__: dart.getMethods(MapFieldInfo.__proto__),
      [_ensureMapField]: dart.fnType(core.Map$(K, V), [protobuf._FieldSet]),
      [_createMapField]: dart.fnType(core.Map$(K, V), [protobuf.GeneratedMessage])
    }));
    dart.setGetterSignature(MapFieldInfo, () => ({
      __proto__: dart.getGetters(MapFieldInfo.__proto__),
      valueFieldInfo: protobuf.FieldInfo
    }));
    dart.setLibraryUri(MapFieldInfo, "package:protobuf/protobuf.dart");
    dart.setFieldSignature(MapFieldInfo, () => ({
      __proto__: dart.getFields(MapFieldInfo.__proto__),
      keyFieldType: dart.finalFieldType(core.int),
      valueFieldType: dart.finalFieldType(core.int),
      valueCreator: dart.finalFieldType(dart.fnType(protobuf.GeneratedMessage, [])),
      mapEntryBuilderInfo: dart.finalFieldType(protobuf.BuilderInfo)
    }));
    return MapFieldInfo;
  });
  protobuf.MapFieldInfo = protobuf.MapFieldInfo$();
  dart.addTypeTests(protobuf.MapFieldInfo, _is_MapFieldInfo_default);
  const _unknownFields = dart.privateName(protobuf, "_unknownFields");
  const _meta = dart.privateName(protobuf, "_meta");
  const _oneofCases = dart.privateName(protobuf, "_oneofCases");
  const _infosSortedByTag = dart.privateName(protobuf, "_infosSortedByTag");
  const _hasExtensions = dart.privateName(protobuf, "_hasExtensions");
  const _hasUnknownFields = dart.privateName(protobuf, "_hasUnknownFields");
  const _ensureExtensions = dart.privateName(protobuf, "_ensureExtensions");
  const _ensureUnknownFields = dart.privateName(protobuf, "_ensureUnknownFields");
  const _nonExtensionInfo = dart.privateName(protobuf, "_nonExtensionInfo");
  const _nonExtensionInfoByIndex = dart.privateName(protobuf, "_nonExtensionInfoByIndex");
  const _getFieldInfoOrNull = dart.privateName(protobuf, "_getFieldInfoOrNull");
  const _ensureInfo = dart.privateName(protobuf, "_ensureInfo");
  const _getDefault = dart.privateName(protobuf, "_getDefault");
  const _getField = dart.privateName(protobuf, "_getField");
  const _setNonExtensionFieldUnchecked = dart.privateName(protobuf, "_setNonExtensionFieldUnchecked");
  const _getDefaultList = dart.privateName(protobuf, "_getDefaultList");
  const _getDefaultMap = dart.privateName(protobuf, "_getDefaultMap");
  const _getFieldOrNullByTag = dart.privateName(protobuf, "_getFieldOrNullByTag");
  const _$has = dart.privateName(protobuf, "_$has");
  const _$getND = dart.privateName(protobuf, "_$getND");
  const _$set = dart.privateName(protobuf, "_$set");
  const _$ensure = dart.privateName(protobuf, "_$ensure");
  const _$getList = dart.privateName(protobuf, "_$getList");
  const _$getMap = dart.privateName(protobuf, "_$getMap");
  const _$getB = dart.privateName(protobuf, "_$getB");
  const _$getBF = dart.privateName(protobuf, "_$getBF");
  const _$getI = dart.privateName(protobuf, "_$getI");
  const _$getIZ = dart.privateName(protobuf, "_$getIZ");
  const _$getS = dart.privateName(protobuf, "_$getS");
  const _$getSZ = dart.privateName(protobuf, "_$getSZ");
  const _$getI64 = dart.privateName(protobuf, "_$getI64");
  const _$check = dart.privateName(protobuf, "_$check");
  const _clear = dart.privateName(protobuf, "_clear");
  const _equalFieldValues = dart.privateName(protobuf, "_equalFieldValues");
  const _equals = dart.privateName(protobuf, "_equals");
  const _hashCode = dart.privateName(protobuf, "_hashCode");
  const _mergeField = dart.privateName(protobuf, "_mergeField");
  const _mergeFromMessage = dart.privateName(protobuf, "_mergeFromMessage");
  const _hasRequiredExtensionValues = dart.privateName(protobuf, "_hasRequiredExtensionValues");
  const _fields = dart.privateName(protobuf, "_fields");
  protobuf._FieldSet = class _FieldSet extends core.Object {
    static _makeValueList(length) {
      if (length === 0) return protobuf._FieldSet._zeroList;
      return core.List.new(length);
    }
    get [_messageName]() {
      return this[_meta].qualifiedMessageName;
    }
    get [_hasRequiredFields]() {
      return this[_meta].hasRequiredFields;
    }
    get [_infos]() {
      return this[_meta].fieldInfo[$values];
    }
    get [_infosSortedByTag]() {
      return this[_meta].sortedByTag;
    }
    get [_hasObservers]() {
      return this[_eventPlugin$] != null && dart.test(this[_eventPlugin$].hasObservers);
    }
    get [_hasExtensions]() {
      return this[_extensions] != null;
    }
    get [_hasUnknownFields]() {
      return this[_unknownFields] != null;
    }
    [_ensureExtensions]() {
      if (!dart.test(this[_hasExtensions])) this[_extensions] = new protobuf._ExtensionFieldSet.new(this);
      return this[_extensions];
    }
    [_ensureUnknownFields]() {
      if (this[_unknownFields] == null) {
        if (dart.test(this[_isReadOnly])) return protobuf.UnknownFieldSet.emptyUnknownFieldSet;
        this[_unknownFields] = new protobuf.UnknownFieldSet.new();
      }
      return this[_unknownFields];
    }
    [_nonExtensionInfo](tagNumber) {
      return this[_meta].fieldInfo[$_get](tagNumber);
    }
    [_nonExtensionInfoByIndex](index) {
      return this[_meta].byIndex[$_get](index);
    }
    [_ensureInfo](tagNumber) {
      let fi = this[_getFieldInfoOrNull](tagNumber);
      if (fi != null) return fi;
      dart.throw(new core.ArgumentError.new("tag " + dart.str(tagNumber) + " not defined in " + dart.str(this[_messageName])));
    }
    [_getFieldInfoOrNull](tagNumber) {
      let fi = this[_nonExtensionInfo](tagNumber);
      if (fi != null) return fi;
      if (!dart.test(this[_hasExtensions])) return null;
      return this[_extensions][_getInfoOrNull](tagNumber);
    }
    [_markReadOnly]() {
      if (dart.test(this[_isReadOnly])) return;
      this[_isReadOnly] = true;
      for (let field of this[_meta].sortedByTag) {
        if (dart.test(field.isRepeated)) {
          let entries = this[_values][$_get](field.index);
          if (entries == null) continue;
          if (dart.test(field.isGroupOrMessage)) {
            for (let subMessage of ListOfGeneratedMessage().as(entries)) {
              subMessage.freeze();
            }
          }
          this[_values][$_set](field.index, dart.dsend(entries, 'toFrozenPbList', []));
        } else if (dart.test(field.isMapField)) {
          let map = protobuf.PbMap._check(this[_values][$_get](field.index));
          if (map == null) continue;
          this[_values][$_set](field.index, map.freeze());
        } else if (dart.test(field.isGroupOrMessage)) {
          let entry = this[_values][$_get](field.index);
          if (entry != null) {
            protobuf.GeneratedMessage.as(entry).freeze();
          }
        }
      }
      if (dart.test(this[_hasExtensions])) {
        this[_ensureExtensions]()[_markReadOnly]();
      }
      if (dart.test(this[_hasUnknownFields])) {
        this[_ensureUnknownFields]()[_markReadOnly]();
      }
    }
    [_ensureWritable]() {
      if (dart.test(this[_isReadOnly])) protobuf.frozenMessageModificationHandler(this[_messageName]);
    }
    [_getField](tagNumber) {
      let fi = this[_nonExtensionInfo](tagNumber);
      if (fi != null) {
        let value = this[_values][$_get](fi.index);
        if (value != null) return value;
        return this[_getDefault](fi);
      }
      if (dart.test(this[_hasExtensions])) {
        let fi = this[_extensions][_getInfoOrNull](tagNumber);
        if (fi != null) {
          return this[_extensions][_getFieldOrDefault](fi);
        }
      }
      dart.throw(new core.ArgumentError.new("tag " + dart.str(tagNumber) + " not defined in " + dart.str(this[_messageName])));
    }
    [_getDefault](fi) {
      if (!dart.test(fi.isRepeated)) return fi.makeDefault();
      if (dart.test(this[_isReadOnly])) return fi.readonlyDefault;
      let value = fi[_createRepeatedField](this[_message$]);
      this[_setNonExtensionFieldUnchecked](fi, value);
      return value;
    }
    [_getDefaultList](T, fi) {
      if (!dart.test(fi.isRepeated)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_set.dart", 196, 12, "fi.isRepeated");
      if (dart.test(this[_isReadOnly])) return core.List$(T).unmodifiable(C2 || CT.C2);
      let value = fi[_createRepeatedFieldWithType](T, this[_message$]);
      this[_setNonExtensionFieldUnchecked](fi, value);
      return value;
    }
    [_getDefaultMap](K, V, fi) {
      if (!dart.test(fi.isMapField)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_set.dart", 208, 12, "fi.isMapField");
      if (dart.test(this[_isReadOnly])) {
        return new (protobuf.PbMap$(K, V)).unmodifiable(new (protobuf.PbMap$(K, V)).new(fi.keyFieldType, fi.valueFieldType, fi.mapEntryBuilderInfo));
      }
      let value = fi[_createMapField](this[_message$]);
      this[_setNonExtensionFieldUnchecked](fi, value);
      return value;
    }
    [_getFieldOrNullByTag](tagNumber) {
      let fi = this[_getFieldInfoOrNull](tagNumber);
      if (fi == null) return null;
      return this[_getFieldOrNull](fi);
    }
    [_getFieldOrNull](fi) {
      if (fi.index != null) return this[_values][$_get](fi.index);
      if (!dart.test(this[_hasExtensions])) return null;
      return this[_extensions][_getFieldOrNull](protobuf.Extension._check(fi));
    }
    [_hasField](tagNumber) {
      let fi = this[_nonExtensionInfo](tagNumber);
      if (fi != null) return this[_$has](fi.index);
      if (!dart.test(this[_hasExtensions])) return false;
      return this[_extensions][_hasField](tagNumber);
    }
    [_clearField](tagNumber) {
      this[_ensureWritable]();
      let fi = this[_nonExtensionInfo](tagNumber);
      if (fi != null) {
        if (dart.test(this[_hasObservers])) this[_eventPlugin$].beforeClearField(fi);
        this[_values][$_set](fi.index, null);
        if (dart.test(this[_meta].oneofs[$containsKey](fi.tagNumber))) {
          this[_oneofCases][$remove](this[_meta].oneofs[$_get](fi.tagNumber));
        }
        let oneofIndex = this[_meta].oneofs[$_get](fi.tagNumber);
        if (oneofIndex != null) this[_oneofCases][$_set](oneofIndex, 0);
        return;
      }
      if (dart.test(this[_hasExtensions])) {
        let fi = this[_extensions][_getInfoOrNull](tagNumber);
        if (fi != null) {
          this[_extensions][_clearField](fi);
          return;
        }
      }
    }
    [_setField](tagNumber, value) {
      if (value == null) dart.throw(new core.ArgumentError.new("value is null"));
      let fi = this[_nonExtensionInfo](tagNumber);
      if (fi == null) {
        if (!dart.test(this[_hasExtensions])) {
          dart.throw(new core.ArgumentError.new("tag " + dart.str(tagNumber) + " not defined in " + dart.str(this[_messageName])));
        }
        this[_extensions][_setField](tagNumber, value);
        return;
      }
      if (dart.test(fi.isRepeated)) {
        dart.throw(new core.ArgumentError.new(this[_setFieldFailedMessage](fi, value, "repeating field (use get + .add())")));
      }
      this[_validateField](fi, value);
      this[_setNonExtensionFieldUnchecked](fi, value);
    }
    [_setFieldUnchecked](fi, value) {
      let t0;
      if (!(fi != null)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_set.dart", 301, 12, "fi != null");
      if (!!dart.test(fi.isRepeated)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_set.dart", 302, 12, "!fi.isRepeated");
      if (fi.index == null) {
        t0 = this[_ensureExtensions]();
        t0[_addInfoUnchecked](protobuf.Extension._check(fi));
        t0[_setFieldUnchecked](protobuf.Extension._check(fi), value);
        t0;
      } else {
        this[_setNonExtensionFieldUnchecked](fi, value);
      }
    }
    [_ensureRepeatedField](T, fi) {
      if (!!dart.test(this[_isReadOnly])) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_set.dart", 319, 12, "!_isReadOnly");
      if (!dart.test(fi.isRepeated)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_set.dart", 320, 12, "fi.isRepeated");
      if (fi.index == null) {
        return this[_ensureExtensions]()[_ensureRepeatedField](T, protobuf.Extension$(T)._check(fi));
      }
      let value = this[_getFieldOrNull](fi);
      if (value != null) return core.List$(T).as(value);
      let newValue = fi[_createRepeatedField](this[_message$]);
      this[_setNonExtensionFieldUnchecked](fi, newValue);
      return newValue;
    }
    [_ensureMapField](K, V, fi) {
      if (!!dart.test(this[_isReadOnly])) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_set.dart", 333, 12, "!_isReadOnly");
      if (!dart.test(fi.isMapField)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_set.dart", 334, 12, "fi.isMapField");
      if (!(fi.index != null)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_set.dart", 335, 12, "fi.index != null");
      let value = this[_getFieldOrNull](fi);
      if (value != null) return protobuf.PbMap$(K, V)._check(core.Map$(K, V).as(value));
      let newValue = fi[_createMapField](this[_message$]);
      this[_setNonExtensionFieldUnchecked](fi, newValue);
      return protobuf.PbMap$(K, V)._check(newValue);
    }
    [_setNonExtensionFieldUnchecked](fi, value) {
      let tag = fi.tagNumber;
      let oneofIndex = this[_meta].oneofs[$_get](tag);
      if (oneofIndex != null) {
        this[_clearField](this[_oneofCases][$_get](oneofIndex));
        this[_oneofCases][$_set](oneofIndex, tag);
      }
      if (dart.test(this[_hasObservers])) {
        this[_eventPlugin$].beforeSetField(fi, value);
      }
      this[_values][$_set](fi.index, value);
    }
    [_$get](T, index, defaultValue) {
      let value = this[_values][$_get](index);
      if (value != null) return T.as(value);
      if (defaultValue != null) return defaultValue;
      return T.as(this[_getDefault](this[_nonExtensionInfoByIndex](index)));
    }
    [_$getND](index) {
      let value = this[_values][$_get](index);
      if (value != null) return value;
      return this[_getDefault](this[_nonExtensionInfoByIndex](index));
    }
    [_$ensure](T, index) {
      if (!dart.test(this[_$has](index))) {
        let value = this[_nonExtensionInfoByIndex](index).subBuilder();
        this[_$set](index, value);
        return T._check(value);
      }
      return T._check(this[_$getND](index));
    }
    [_$getList](T, index) {
      let value = this[_values][$_get](index);
      if (value != null) return core.List$(T).as(value);
      return this[_getDefaultList](T, protobuf.FieldInfo$(T)._check(this[_nonExtensionInfoByIndex](index)));
    }
    [_$getMap](K, V, index) {
      let value = this[_values][$_get](index);
      if (value != null) return core.Map$(K, V).as(value);
      return this[_getDefaultMap](K, V, protobuf.MapFieldInfo$(K, V)._check(this[_nonExtensionInfoByIndex](index)));
    }
    [_$getB](index, defaultValue) {
      let value = this[_values][$_get](index);
      if (value == null) {
        if (defaultValue != null) return defaultValue;
        value = this[_getDefault](this[_nonExtensionInfoByIndex](index));
      }
      let result = core.bool._check(value);
      return result;
    }
    [_$getBF](index) {
      let value = this[_values][$_get](index);
      if (value == null) return false;
      let result = core.bool._check(value);
      return result;
    }
    [_$getI](index, defaultValue) {
      let value = this[_values][$_get](index);
      if (value == null) {
        if (defaultValue != null) return defaultValue;
        value = this[_getDefault](this[_nonExtensionInfoByIndex](index));
      }
      let result = core.int._check(value);
      return result;
    }
    [_$getIZ](index) {
      let value = this[_values][$_get](index);
      if (value == null) return 0;
      let result = core.int._check(value);
      return result;
    }
    [_$getS](index, defaultValue) {
      let value = this[_values][$_get](index);
      if (value == null) {
        if (defaultValue != null) return defaultValue;
        value = this[_getDefault](this[_nonExtensionInfoByIndex](index));
      }
      let result = core.String._check(value);
      return result;
    }
    [_$getSZ](index) {
      let value = this[_values][$_get](index);
      if (value == null) return "";
      let result = core.String._check(value);
      return result;
    }
    [_$getI64](index) {
      let value = this[_values][$_get](index);
      if (value == null) {
        value = this[_getDefault](this[_nonExtensionInfoByIndex](index));
      }
      let result = fixnum.Int64._check(value);
      return result;
    }
    [_$has](index) {
      let value = this[_values][$_get](index);
      if (value == null) return false;
      if (core.List.is(value)) return value[$isNotEmpty];
      return true;
    }
    [_$set](index, value) {
      if (!!dart.test(this[_nonExtensionInfoByIndex](index).isRepeated)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_set.dart", 492, 12, "!_nonExtensionInfoByIndex(index).isRepeated");
      if (!dart.test(this[_$check](index, value))) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/field_set.dart", 493, 12, "_$check(index, value)");
      this[_ensureWritable]();
      if (value == null) {
        this[_$check](index, value);
      }
      if (dart.test(this[_hasObservers])) {
        this[_eventPlugin$].beforeSetField(this[_nonExtensionInfoByIndex](index), value);
      }
      let tag = this[_meta].byIndex[$_get](index).tagNumber;
      let oneofIndex = this[_meta].oneofs[$_get](tag);
      if (oneofIndex != null) {
        this[_clearField](this[_oneofCases][$_get](oneofIndex));
        this[_oneofCases][$_set](oneofIndex, tag);
      }
      this[_values][$_set](index, value);
    }
    [_$check](index, newValue) {
      this[_validateField](this[_nonExtensionInfoByIndex](index), newValue);
      return true;
    }
    [_clear]() {
      this[_ensureWritable]();
      if (this[_unknownFields] != null) {
        this[_unknownFields].clear();
      }
      if (dart.test(this[_hasObservers])) {
        for (let fi of this[_infos]) {
          if (this[_values][$_get](fi.index) != null) {
            this[_eventPlugin$].beforeClearField(fi);
          }
        }
        if (dart.test(this[_hasExtensions])) {
          for (let key of this[_extensions][_tagNumbers]) {
            let fi = this[_extensions][_getInfoOrNull](key);
            this[_eventPlugin$].beforeClearField(fi);
          }
        }
      }
      if (dart.test(this[_values][$isNotEmpty])) this[_values][$fillRange](0, this[_values][$length], null);
      if (dart.test(this[_hasExtensions])) this[_extensions][_clearValues]();
    }
    [_equals](o) {
      if (!dart.equals(this[_meta], o[_meta])) return false;
      for (let i = 0; i < dart.notNull(this[_values][$length]); i = i + 1) {
        if (!dart.test(this[_equalFieldValues](this[_values][$_get](i), o[_values][$_get](i)))) return false;
      }
      if (!dart.test(this[_hasExtensions]) || !dart.dtest(this[_extensions][_hasValues])) {
        if (dart.test(o[_hasExtensions]) && dart.dtest(o[_extensions][_hasValues])) {
          return false;
        }
      } else {
        if (!dart.test(this[_extensions][_equalValues](o[_extensions]))) return false;
      }
      if (this[_unknownFields] == null || dart.test(this[_unknownFields].isEmpty)) {
        if (o[_unknownFields] != null && dart.test(o[_unknownFields].isNotEmpty)) return false;
      } else {
        if (!dart.equals(this[_unknownFields], o[_unknownFields])) return false;
      }
      return true;
    }
    [_equalFieldValues](left, right) {
      let t0;
      if (left != null && right != null) return protobuf._deepEquals(left, right);
      let val = (t0 = left, t0 == null ? right : t0);
      if (val == null) return true;
      if (core.List.is(val) && dart.test(val[$isEmpty])) return true;
      return false;
    }
    get [_hashCode]() {
      function hashField(hash, fi, value) {
        if (core.List.is(value) && dart.test(value[$isEmpty])) {
          return hash;
        }
        hash = protobuf._HashUtils._combine(hash, fi.tagNumber);
        if (!dart.test(protobuf._isEnum(fi.type))) {
          hash = protobuf._HashUtils._combine(hash, dart.hashCode(value));
        } else if (dart.test(fi.isRepeated)) {
          hash = protobuf._HashUtils._hashObjects(core.Iterable._check(dart.dsend(value, 'map', [dart.fn(enm => dart.dload(enm, 'value'), dynamicTodynamic())])));
        } else {
          let enm = protobuf.ProtobufEnum._check(value);
          hash = protobuf._HashUtils._combine(hash, enm.value);
        }
        return hash;
      }
      dart.fn(hashField, intAndFieldInfoAnddynamicToint());
      const hashEachField = hash => {
        hash = this[_infosSortedByTag][$where](dart.fn(fi => this[_values][$_get](fi.index) != null, FieldInfoTobool()))[$fold](core.int, hash, dart.fn((h, fi) => hashField(h, fi, this[_values][$_get](fi.index)), intAndFieldInfoToint()));
        if (!dart.test(this[_hasExtensions])) return hash;
        hash = protobuf._sorted(core.int, this[_extensions][_tagNumbers])[$fold](core.int, hash, dart.fn((h, tagNumber) => {
          let fi = this[_extensions][_getInfoOrNull](tagNumber);
          return hashField(h, fi, this[_extensions][_getFieldOrNull](fi));
        }, intAndintToint()));
        return hash;
      };
      dart.fn(hashEachField, intToint());
      let hash = protobuf._HashUtils._combine(0, dart.hashCode(this[_meta]));
      hash = hashEachField(hash);
      if (dart.test(this[_hasUnknownFields])) {
        hash = protobuf._HashUtils._combine(hash, dart.hashCode(this[_unknownFields]));
      }
      return hash;
    }
    writeString(out, indent) {
      let t0;
      function renderValue(key, value) {
        if (protobuf.GeneratedMessage.is(value)) {
          out.write(dart.str(indent) + dart.str(key) + ": {\n");
          value[_fieldSet].writeString(out, dart.str(indent) + "  ");
          out.write(dart.str(indent) + "}\n");
        } else if (core.MapEntry.is(value)) {
          out.write(dart.str(indent) + dart.str(key) + ": {" + dart.str(value.key) + " : " + dart.str(value.value) + "} \n");
        } else {
          out.write(dart.str(indent) + dart.str(key) + ": " + dart.str(value) + "\n");
        }
      }
      dart.fn(renderValue, dynamicAnddynamicTovoid());
      function writeFieldValue(fieldValue, name) {
        if (fieldValue == null) return;
        if (typed_data.ByteData.is(fieldValue)) {
          let value = fieldValue[$getUint64](0, typed_data.Endian.little);
          renderValue(name, value);
        } else if (protobuf.PbListBase.is(fieldValue)) {
          for (let value of fieldValue) {
            renderValue(name, value);
          }
        } else if (protobuf.PbMap.is(fieldValue)) {
          for (let entry of fieldValue.entries) {
            renderValue(name, entry);
          }
        } else {
          renderValue(name, fieldValue);
        }
      }
      dart.fn(writeFieldValue, dynamicAndStringTovoid());
      this[_infosSortedByTag][$forEach](dart.fn(fi => writeFieldValue(this[_values][$_get](fi.index), fi.name), FieldInfoTovoid()));
      if (dart.test(this[_hasExtensions])) {
        t0 = this[_extensions][_info][$keys][$toList]();
        t0[$sort]();
        t0[$forEach](dart.fn(tagNumber => writeFieldValue(this[_extensions][_values][$_get](tagNumber), "[" + dart.str(this[_extensions][_info][$_get](tagNumber).name) + "]"), intTovoid()));
        t0;
      }
      if (dart.test(this[_hasUnknownFields])) {
        out.write(dart.toString(this[_unknownFields]));
      } else {
        out.write(new protobuf.UnknownFieldSet.new().toString());
      }
    }
    [_mergeFromMessage](other) {
      for (let fi of other[_infosSortedByTag]) {
        let value = other[_values][$_get](fi.index);
        if (value != null) this[_mergeField](fi, value, {isExtension: false});
      }
      if (dart.test(other[_hasExtensions])) {
        let others = other[_extensions];
        for (let tagNumber of others[_tagNumbers]) {
          let extension = others[_getInfoOrNull](tagNumber);
          let value = others[_getFieldOrNull](extension);
          this[_mergeField](extension, value, {isExtension: true});
        }
      }
      if (dart.test(other[_hasUnknownFields])) {
        this[_ensureUnknownFields]().mergeFromUnknownFieldSet(other[_unknownFields]);
      }
    }
    [_mergeField](otherFi, fieldValue, opts) {
      let t1;
      let isExtension = opts && 'isExtension' in opts ? opts.isExtension : null;
      let tagNumber = otherFi.tagNumber;
      let fi = this[_nonExtensionInfo](tagNumber);
      if (fi == null && dart.test(isExtension)) {
        fi = otherFi;
      }
      let mustClone = protobuf._isGroupOrMessage(otherFi.type);
      if (dart.test(fi.isMapField)) {
        let f = protobuf.MapFieldInfo._check(fi);
        mustClone = protobuf._isGroupOrMessage(f.valueFieldType);
        let map = protobuf.PbMap._check(f[_ensureMapField](this));
        if (dart.test(mustClone)) {
          for (let t0 of core.Iterable._check(dart.dload(fieldValue, 'entries'))) {
            let entry = core.MapEntry._check(t0);
            map._set(entry.key, protobuf._FieldSet._cloneMessage(protobuf.GeneratedMessage._check(entry.value)));
          }
        } else {
          map.addAll(core.Map._check(fieldValue));
        }
        return;
      }
      if (dart.test(fi.isRepeated)) {
        if (dart.test(mustClone)) {
          let pbList = PbListBaseOfGeneratedMessage()._check(fieldValue);
          let repeatedFields = fi[_ensureRepeatedField](this);
          for (let i = 0; i < dart.notNull(pbList.length); i = i + 1) {
            repeatedFields[$add](protobuf._FieldSet._cloneMessage(pbList._get(i)));
          }
        } else {
          let pbList = protobuf.PbListBase._check(fieldValue);
          fi[_ensureRepeatedField](this)[$addAll](pbList);
        }
        return;
      }
      if (dart.test(otherFi.isGroupOrMessage)) {
        let currentFi = dart.test(isExtension) ? this[_ensureExtensions]()[_getFieldOrNull](protobuf.Extension._check(fi)) : this[_values][$_get](fi.index);
        if (currentFi == null) {
          fieldValue = protobuf._FieldSet._cloneMessage(protobuf.GeneratedMessage._check(fieldValue));
        } else {
          fieldValue = (t1 = currentFi, dart.dsend(t1, 'mergeFromMessage', [fieldValue]), t1);
        }
      }
      if (dart.test(isExtension)) {
        this[_ensureExtensions]()[_setFieldAndInfo](protobuf.Extension._check(fi), fieldValue);
      } else {
        this[_validateField](fi, fieldValue);
        this[_setNonExtensionFieldUnchecked](fi, fieldValue);
      }
    }
    static _cloneMessage(message) {
      return message.clone();
    }
    [_validateField](fi, newValue) {
      this[_ensureWritable]();
      let message = protobuf._getFieldError(fi.type, newValue);
      if (message != null) {
        dart.throw(new core.ArgumentError.new(this[_setFieldFailedMessage](fi, newValue, message)));
      }
    }
    [_setFieldFailedMessage](fi, value, detail) {
      return "Illegal to set field " + dart.str(fi.name) + " (" + dart.str(fi.tagNumber) + ") of " + dart.str(this[_messageName]) + " to value (" + dart.str(value) + "): " + dart.str(detail);
    }
    [_hasRequiredValues]() {
      if (!dart.test(this[_hasRequiredFields])) return true;
      for (let fi of this[_infos]) {
        let value = this[_values][$_get](fi.index);
        if (!dart.test(fi[_hasRequiredValues](value))) return false;
      }
      return this[_hasRequiredExtensionValues]();
    }
    [_hasRequiredExtensionValues]() {
      if (!dart.test(this[_hasExtensions])) return true;
      for (let fi of this[_extensions][_infos]) {
        let value = this[_extensions][_getFieldOrNull](fi);
        if (!dart.test(fi[_hasRequiredValues](value))) return false;
      }
      return true;
    }
    [_appendInvalidFields](problems, prefix) {
      if (!dart.test(this[_hasRequiredFields])) return;
      for (let fi of this[_infos]) {
        let value = this[_values][$_get](fi.index);
        fi[_appendInvalidFields](problems, value, prefix);
      }
    }
    [_shallowCopyValues](original) {
      let t1, t1$, t1$0, t1$1;
      this[_values][$setRange](0, original[_values][$length], original[_values]);
      for (let index = 0; index < dart.notNull(this[_meta].byIndex[$length]); index = index + 1) {
        let fieldInfo = this[_meta].byIndex[$_get](index);
        if (dart.test(fieldInfo.isMapField)) {
          let map = protobuf.PbMap._check(this[_values][$_get](index));
          if (map != null) {
            this[_values][$_set](index, (t1 = protobuf.MapFieldInfo.as(fieldInfo)[_createMapField](this[_message$]), t1[$addAll](map), t1));
          }
        } else if (dart.test(fieldInfo.isRepeated)) {
          let list = protobuf.PbListBase._check(this[_values][$_get](index));
          if (list != null) {
            this[_values][$_set](index, (t1$ = fieldInfo[_createRepeatedField](this[_message$]), t1$[$addAll](list), t1$));
          }
        }
      }
      if (dart.test(original[_hasExtensions])) {
        this[_ensureExtensions]()[_shallowCopyValues](original[_extensions]);
      }
      if (dart.test(original[_hasUnknownFields])) {
        t1$0 = this[_ensureUnknownFields]()[_fields];
        t1$0 == null ? null : t1$0[$addAll](original[_unknownFields][_fields]);
      }
      t1$1 = this[_oneofCases];
      t1$1 == null ? null : t1$1[$addAll](original[_oneofCases]);
    }
  };
  (protobuf._FieldSet.new = function(_message, meta, _eventPlugin) {
    this[_isReadOnly] = false;
    this[_extensions] = null;
    this[_unknownFields] = null;
    this[_message$] = _message;
    this[_eventPlugin$] = _eventPlugin;
    this[_meta] = meta;
    this[_values] = core.List._check(protobuf._FieldSet._makeValueList(meta.byIndex[$length]));
    this[_oneofCases] = dart.test(meta.oneofs[$isEmpty]) ? null : new (IdentityMapOfint$int()).new();
    ;
  }).prototype = protobuf._FieldSet.prototype;
  dart.addTypeTests(protobuf._FieldSet);
  dart.setMethodSignature(protobuf._FieldSet, () => ({
    __proto__: dart.getMethods(protobuf._FieldSet.__proto__),
    [_ensureExtensions]: dart.fnType(protobuf._ExtensionFieldSet, []),
    [_ensureUnknownFields]: dart.fnType(protobuf.UnknownFieldSet, []),
    [_nonExtensionInfo]: dart.fnType(protobuf.FieldInfo, [core.int]),
    [_nonExtensionInfoByIndex]: dart.fnType(protobuf.FieldInfo, [core.int]),
    [_ensureInfo]: dart.fnType(protobuf.FieldInfo, [core.int]),
    [_getFieldInfoOrNull]: dart.fnType(protobuf.FieldInfo, [core.int]),
    [_markReadOnly]: dart.fnType(dart.void, []),
    [_ensureWritable]: dart.fnType(dart.void, []),
    [_getField]: dart.fnType(dart.dynamic, [core.int]),
    [_getDefault]: dart.fnType(dart.dynamic, [protobuf.FieldInfo]),
    [_getDefaultList]: dart.gFnType(T => [core.List$(T), [protobuf.FieldInfo$(T)]]),
    [_getDefaultMap]: dart.gFnType((K, V) => [core.Map$(K, V), [protobuf.MapFieldInfo$(K, V)]]),
    [_getFieldOrNullByTag]: dart.fnType(dart.dynamic, [core.int]),
    [_getFieldOrNull]: dart.fnType(dart.dynamic, [protobuf.FieldInfo]),
    [_hasField]: dart.fnType(core.bool, [core.int]),
    [_clearField]: dart.fnType(dart.void, [core.int]),
    [_setField]: dart.fnType(dart.void, [core.int, dart.dynamic]),
    [_setFieldUnchecked]: dart.fnType(dart.void, [protobuf.FieldInfo, dart.dynamic]),
    [_ensureRepeatedField]: dart.gFnType(T => [core.List$(T), [protobuf.FieldInfo$(T)]]),
    [_ensureMapField]: dart.gFnType((K, V) => [protobuf.PbMap$(K, V), [protobuf.MapFieldInfo$(K, V)]]),
    [_setNonExtensionFieldUnchecked]: dart.fnType(dart.void, [protobuf.FieldInfo, dart.dynamic]),
    [_$get]: dart.gFnType(T => [T, [core.int, T]]),
    [_$getND]: dart.fnType(dart.dynamic, [core.int]),
    [_$ensure]: dart.gFnType(T => [T, [core.int]]),
    [_$getList]: dart.gFnType(T => [core.List$(T), [core.int]]),
    [_$getMap]: dart.gFnType((K, V) => [core.Map$(K, V), [core.int]]),
    [_$getB]: dart.fnType(core.bool, [core.int, core.bool]),
    [_$getBF]: dart.fnType(core.bool, [core.int]),
    [_$getI]: dart.fnType(core.int, [core.int, core.int]),
    [_$getIZ]: dart.fnType(core.int, [core.int]),
    [_$getS]: dart.fnType(core.String, [core.int, core.String]),
    [_$getSZ]: dart.fnType(core.String, [core.int]),
    [_$getI64]: dart.fnType(fixnum.Int64, [core.int]),
    [_$has]: dart.fnType(core.bool, [core.int]),
    [_$set]: dart.fnType(dart.void, [core.int, dart.dynamic]),
    [_$check]: dart.fnType(core.bool, [core.int, dart.dynamic]),
    [_clear]: dart.fnType(dart.void, []),
    [_equals]: dart.fnType(core.bool, [protobuf._FieldSet]),
    [_equalFieldValues]: dart.fnType(core.bool, [dart.dynamic, dart.dynamic]),
    writeString: dart.fnType(dart.void, [core.StringBuffer, core.String]),
    [_mergeFromMessage]: dart.fnType(dart.void, [protobuf._FieldSet]),
    [_mergeField]: dart.fnType(dart.void, [protobuf.FieldInfo, dart.dynamic], {isExtension: core.bool}, {}),
    [_validateField]: dart.fnType(dart.void, [protobuf.FieldInfo, dart.dynamic]),
    [_setFieldFailedMessage]: dart.fnType(core.String, [protobuf.FieldInfo, dart.dynamic, core.String]),
    [_hasRequiredValues]: dart.fnType(core.bool, []),
    [_hasRequiredExtensionValues]: dart.fnType(core.bool, []),
    [_appendInvalidFields]: dart.fnType(dart.void, [core.List$(core.String), core.String]),
    [_shallowCopyValues]: dart.fnType(dart.void, [protobuf._FieldSet])
  }));
  dart.setGetterSignature(protobuf._FieldSet, () => ({
    __proto__: dart.getGetters(protobuf._FieldSet.__proto__),
    [_messageName]: core.String,
    [_hasRequiredFields]: core.bool,
    [_infos]: core.Iterable$(protobuf.FieldInfo),
    [_infosSortedByTag]: core.Iterable$(protobuf.FieldInfo),
    [_hasObservers]: core.bool,
    [_hasExtensions]: core.bool,
    [_hasUnknownFields]: core.bool,
    [_hashCode]: core.int
  }));
  dart.setLibraryUri(protobuf._FieldSet, "package:protobuf/protobuf.dart");
  dart.setFieldSignature(protobuf._FieldSet, () => ({
    __proto__: dart.getFields(protobuf._FieldSet.__proto__),
    [_message$]: dart.finalFieldType(protobuf.GeneratedMessage),
    [_meta]: dart.finalFieldType(protobuf.BuilderInfo),
    [_eventPlugin$]: dart.finalFieldType(protobuf.EventPlugin),
    [_isReadOnly]: dart.fieldType(core.bool),
    [_values]: dart.finalFieldType(core.List),
    [_extensions]: dart.fieldType(protobuf._ExtensionFieldSet),
    [_unknownFields]: dart.fieldType(protobuf.UnknownFieldSet),
    [_oneofCases]: dart.finalFieldType(core.Map$(core.int, core.int))
  }));
  dart.defineLazy(protobuf._FieldSet, {
    /*protobuf._FieldSet._zeroList*/get _zeroList() {
      return core.List.new(0);
    },
    set _zeroList(_) {}
  });
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  protobuf.PbFieldType = class PbFieldType extends core.Object {
    static _baseType(fieldType) {
      return (dart.notNull(fieldType) & ~(1 | 2 | 4 | 4194304) >>> 0) >>> 0;
    }
    static _defaultForType(type) {
      switch (type) {
        case 16:
        case 17:
        {
          return C5 || CT.C5;
        }
        case 32:
        case 33:
        {
          return C6 || CT.C6;
        }
        case 64:
        case 65:
        {
          return C7 || CT.C7;
        }
        case 256:
        case 257:
        case 128:
        case 129:
        {
          return C8 || CT.C8;
        }
        case 2048:
        case 2049:
        case 4096:
        case 4097:
        case 8192:
        case 8193:
        case 16384:
        case 16385:
        case 32768:
        case 32769:
        case 65536:
        case 65537:
        case 131072:
        case 131073:
        case 262144:
        case 262145:
        case 524288:
        case 524289:
        case 1048576:
        case 1048577:
        {
          return C9 || CT.C9;
        }
        default:
        {
          return null;
        }
      }
    }
    static _STRING_EMPTY() {
      return "";
    }
    static _BYTES_EMPTY() {
      return JSArrayOfint().of([]);
    }
    static _BOOL_FALSE() {
      return false;
    }
    static _INT_ZERO() {
      return 0;
    }
    static _DOUBLE_ZERO() {
      return 0.0;
    }
  };
  (protobuf.PbFieldType.new = function() {
    ;
  }).prototype = protobuf.PbFieldType.prototype;
  dart.addTypeTests(protobuf.PbFieldType);
  dart.setLibraryUri(protobuf.PbFieldType, "package:protobuf/protobuf.dart");
  dart.defineLazy(protobuf.PbFieldType, {
    /*protobuf.PbFieldType._REQUIRED_BIT*/get _REQUIRED_BIT() {
      return 1;
    },
    /*protobuf.PbFieldType._REPEATED_BIT*/get _REPEATED_BIT() {
      return 2;
    },
    /*protobuf.PbFieldType._PACKED_BIT*/get _PACKED_BIT() {
      return 4;
    },
    /*protobuf.PbFieldType._BOOL_BIT*/get _BOOL_BIT() {
      return 16;
    },
    /*protobuf.PbFieldType._BYTES_BIT*/get _BYTES_BIT() {
      return 32;
    },
    /*protobuf.PbFieldType._STRING_BIT*/get _STRING_BIT() {
      return 64;
    },
    /*protobuf.PbFieldType._DOUBLE_BIT*/get _DOUBLE_BIT() {
      return 128;
    },
    /*protobuf.PbFieldType._FLOAT_BIT*/get _FLOAT_BIT() {
      return 256;
    },
    /*protobuf.PbFieldType._ENUM_BIT*/get _ENUM_BIT() {
      return 512;
    },
    /*protobuf.PbFieldType._GROUP_BIT*/get _GROUP_BIT() {
      return 1024;
    },
    /*protobuf.PbFieldType._INT32_BIT*/get _INT32_BIT() {
      return 2048;
    },
    /*protobuf.PbFieldType._INT64_BIT*/get _INT64_BIT() {
      return 4096;
    },
    /*protobuf.PbFieldType._SINT32_BIT*/get _SINT32_BIT() {
      return 8192;
    },
    /*protobuf.PbFieldType._SINT64_BIT*/get _SINT64_BIT() {
      return 16384;
    },
    /*protobuf.PbFieldType._UINT32_BIT*/get _UINT32_BIT() {
      return 32768;
    },
    /*protobuf.PbFieldType._UINT64_BIT*/get _UINT64_BIT() {
      return 65536;
    },
    /*protobuf.PbFieldType._FIXED32_BIT*/get _FIXED32_BIT() {
      return 131072;
    },
    /*protobuf.PbFieldType._FIXED64_BIT*/get _FIXED64_BIT() {
      return 262144;
    },
    /*protobuf.PbFieldType._SFIXED32_BIT*/get _SFIXED32_BIT() {
      return 524288;
    },
    /*protobuf.PbFieldType._SFIXED64_BIT*/get _SFIXED64_BIT() {
      return 1048576;
    },
    /*protobuf.PbFieldType._MESSAGE_BIT*/get _MESSAGE_BIT() {
      return 2097152;
    },
    /*protobuf.PbFieldType._MAP_BIT*/get _MAP_BIT() {
      return 4194304;
    },
    /*protobuf.PbFieldType._OPTIONAL_BOOL*/get _OPTIONAL_BOOL() {
      return 16;
    },
    /*protobuf.PbFieldType._OPTIONAL_BYTES*/get _OPTIONAL_BYTES() {
      return 32;
    },
    /*protobuf.PbFieldType._OPTIONAL_STRING*/get _OPTIONAL_STRING() {
      return 64;
    },
    /*protobuf.PbFieldType._OPTIONAL_FLOAT*/get _OPTIONAL_FLOAT() {
      return 256;
    },
    /*protobuf.PbFieldType._OPTIONAL_DOUBLE*/get _OPTIONAL_DOUBLE() {
      return 128;
    },
    /*protobuf.PbFieldType._OPTIONAL_ENUM*/get _OPTIONAL_ENUM() {
      return 512;
    },
    /*protobuf.PbFieldType._OPTIONAL_GROUP*/get _OPTIONAL_GROUP() {
      return 1024;
    },
    /*protobuf.PbFieldType._OPTIONAL_INT32*/get _OPTIONAL_INT32() {
      return 2048;
    },
    /*protobuf.PbFieldType._OPTIONAL_INT64*/get _OPTIONAL_INT64() {
      return 4096;
    },
    /*protobuf.PbFieldType._OPTIONAL_SINT32*/get _OPTIONAL_SINT32() {
      return 8192;
    },
    /*protobuf.PbFieldType._OPTIONAL_SINT64*/get _OPTIONAL_SINT64() {
      return 16384;
    },
    /*protobuf.PbFieldType._OPTIONAL_UINT32*/get _OPTIONAL_UINT32() {
      return 32768;
    },
    /*protobuf.PbFieldType._OPTIONAL_UINT64*/get _OPTIONAL_UINT64() {
      return 65536;
    },
    /*protobuf.PbFieldType._OPTIONAL_FIXED32*/get _OPTIONAL_FIXED32() {
      return 131072;
    },
    /*protobuf.PbFieldType._OPTIONAL_FIXED64*/get _OPTIONAL_FIXED64() {
      return 262144;
    },
    /*protobuf.PbFieldType._OPTIONAL_SFIXED32*/get _OPTIONAL_SFIXED32() {
      return 524288;
    },
    /*protobuf.PbFieldType._OPTIONAL_SFIXED64*/get _OPTIONAL_SFIXED64() {
      return 1048576;
    },
    /*protobuf.PbFieldType._OPTIONAL_MESSAGE*/get _OPTIONAL_MESSAGE() {
      return 2097152;
    },
    /*protobuf.PbFieldType._REQUIRED_BOOL*/get _REQUIRED_BOOL() {
      return 17;
    },
    /*protobuf.PbFieldType._REQUIRED_BYTES*/get _REQUIRED_BYTES() {
      return 33;
    },
    /*protobuf.PbFieldType._REQUIRED_STRING*/get _REQUIRED_STRING() {
      return 65;
    },
    /*protobuf.PbFieldType._REQUIRED_FLOAT*/get _REQUIRED_FLOAT() {
      return 257;
    },
    /*protobuf.PbFieldType._REQUIRED_DOUBLE*/get _REQUIRED_DOUBLE() {
      return 129;
    },
    /*protobuf.PbFieldType._REQUIRED_ENUM*/get _REQUIRED_ENUM() {
      return 513;
    },
    /*protobuf.PbFieldType._REQUIRED_GROUP*/get _REQUIRED_GROUP() {
      return 1025;
    },
    /*protobuf.PbFieldType._REQUIRED_INT32*/get _REQUIRED_INT32() {
      return 2049;
    },
    /*protobuf.PbFieldType._REQUIRED_INT64*/get _REQUIRED_INT64() {
      return 4097;
    },
    /*protobuf.PbFieldType._REQUIRED_SINT32*/get _REQUIRED_SINT32() {
      return 8193;
    },
    /*protobuf.PbFieldType._REQUIRED_SINT64*/get _REQUIRED_SINT64() {
      return 16385;
    },
    /*protobuf.PbFieldType._REQUIRED_UINT32*/get _REQUIRED_UINT32() {
      return 32769;
    },
    /*protobuf.PbFieldType._REQUIRED_UINT64*/get _REQUIRED_UINT64() {
      return 65537;
    },
    /*protobuf.PbFieldType._REQUIRED_FIXED32*/get _REQUIRED_FIXED32() {
      return 131073;
    },
    /*protobuf.PbFieldType._REQUIRED_FIXED64*/get _REQUIRED_FIXED64() {
      return 262145;
    },
    /*protobuf.PbFieldType._REQUIRED_SFIXED32*/get _REQUIRED_SFIXED32() {
      return 524289;
    },
    /*protobuf.PbFieldType._REQUIRED_SFIXED64*/get _REQUIRED_SFIXED64() {
      return 1048577;
    },
    /*protobuf.PbFieldType._REQUIRED_MESSAGE*/get _REQUIRED_MESSAGE() {
      return 2097153;
    },
    /*protobuf.PbFieldType._REPEATED_BOOL*/get _REPEATED_BOOL() {
      return 18;
    },
    /*protobuf.PbFieldType._REPEATED_BYTES*/get _REPEATED_BYTES() {
      return 34;
    },
    /*protobuf.PbFieldType._REPEATED_STRING*/get _REPEATED_STRING() {
      return 66;
    },
    /*protobuf.PbFieldType._REPEATED_FLOAT*/get _REPEATED_FLOAT() {
      return 258;
    },
    /*protobuf.PbFieldType._REPEATED_DOUBLE*/get _REPEATED_DOUBLE() {
      return 130;
    },
    /*protobuf.PbFieldType._REPEATED_ENUM*/get _REPEATED_ENUM() {
      return 514;
    },
    /*protobuf.PbFieldType._REPEATED_GROUP*/get _REPEATED_GROUP() {
      return 1026;
    },
    /*protobuf.PbFieldType._REPEATED_INT32*/get _REPEATED_INT32() {
      return 2050;
    },
    /*protobuf.PbFieldType._REPEATED_INT64*/get _REPEATED_INT64() {
      return 4098;
    },
    /*protobuf.PbFieldType._REPEATED_SINT32*/get _REPEATED_SINT32() {
      return 8194;
    },
    /*protobuf.PbFieldType._REPEATED_SINT64*/get _REPEATED_SINT64() {
      return 16386;
    },
    /*protobuf.PbFieldType._REPEATED_UINT32*/get _REPEATED_UINT32() {
      return 32770;
    },
    /*protobuf.PbFieldType._REPEATED_UINT64*/get _REPEATED_UINT64() {
      return 65538;
    },
    /*protobuf.PbFieldType._REPEATED_FIXED32*/get _REPEATED_FIXED32() {
      return 131074;
    },
    /*protobuf.PbFieldType._REPEATED_FIXED64*/get _REPEATED_FIXED64() {
      return 262146;
    },
    /*protobuf.PbFieldType._REPEATED_SFIXED32*/get _REPEATED_SFIXED32() {
      return 524290;
    },
    /*protobuf.PbFieldType._REPEATED_SFIXED64*/get _REPEATED_SFIXED64() {
      return 1048578;
    },
    /*protobuf.PbFieldType._REPEATED_MESSAGE*/get _REPEATED_MESSAGE() {
      return 2097154;
    },
    /*protobuf.PbFieldType._PACKED_BOOL*/get _PACKED_BOOL() {
      return 22;
    },
    /*protobuf.PbFieldType._PACKED_FLOAT*/get _PACKED_FLOAT() {
      return 262;
    },
    /*protobuf.PbFieldType._PACKED_DOUBLE*/get _PACKED_DOUBLE() {
      return 134;
    },
    /*protobuf.PbFieldType._PACKED_ENUM*/get _PACKED_ENUM() {
      return 518;
    },
    /*protobuf.PbFieldType._PACKED_INT32*/get _PACKED_INT32() {
      return 2054;
    },
    /*protobuf.PbFieldType._PACKED_INT64*/get _PACKED_INT64() {
      return 4102;
    },
    /*protobuf.PbFieldType._PACKED_SINT32*/get _PACKED_SINT32() {
      return 8198;
    },
    /*protobuf.PbFieldType._PACKED_SINT64*/get _PACKED_SINT64() {
      return 16390;
    },
    /*protobuf.PbFieldType._PACKED_UINT32*/get _PACKED_UINT32() {
      return 32774;
    },
    /*protobuf.PbFieldType._PACKED_UINT64*/get _PACKED_UINT64() {
      return 65542;
    },
    /*protobuf.PbFieldType._PACKED_FIXED32*/get _PACKED_FIXED32() {
      return 131078;
    },
    /*protobuf.PbFieldType._PACKED_FIXED64*/get _PACKED_FIXED64() {
      return 262150;
    },
    /*protobuf.PbFieldType._PACKED_SFIXED32*/get _PACKED_SFIXED32() {
      return 524294;
    },
    /*protobuf.PbFieldType._PACKED_SFIXED64*/get _PACKED_SFIXED64() {
      return 1048582;
    },
    /*protobuf.PbFieldType._MAP*/get _MAP() {
      return 6291456;
    },
    /*protobuf.PbFieldType.OB*/get OB() {
      return 16;
    },
    /*protobuf.PbFieldType.OY*/get OY() {
      return 32;
    },
    /*protobuf.PbFieldType.OS*/get OS() {
      return 64;
    },
    /*protobuf.PbFieldType.OF*/get OF() {
      return 256;
    },
    /*protobuf.PbFieldType.OD*/get OD() {
      return 128;
    },
    /*protobuf.PbFieldType.OE*/get OE() {
      return 512;
    },
    /*protobuf.PbFieldType.OG*/get OG() {
      return 1024;
    },
    /*protobuf.PbFieldType.O3*/get O3() {
      return 2048;
    },
    /*protobuf.PbFieldType.O6*/get O6() {
      return 4096;
    },
    /*protobuf.PbFieldType.OS3*/get OS3() {
      return 8192;
    },
    /*protobuf.PbFieldType.OS6*/get OS6() {
      return 16384;
    },
    /*protobuf.PbFieldType.OU3*/get OU3() {
      return 32768;
    },
    /*protobuf.PbFieldType.OU6*/get OU6() {
      return 65536;
    },
    /*protobuf.PbFieldType.OF3*/get OF3() {
      return 131072;
    },
    /*protobuf.PbFieldType.OF6*/get OF6() {
      return 262144;
    },
    /*protobuf.PbFieldType.OSF3*/get OSF3() {
      return 524288;
    },
    /*protobuf.PbFieldType.OSF6*/get OSF6() {
      return 1048576;
    },
    /*protobuf.PbFieldType.OM*/get OM() {
      return 2097152;
    },
    /*protobuf.PbFieldType.QB*/get QB() {
      return 17;
    },
    /*protobuf.PbFieldType.QY*/get QY() {
      return 33;
    },
    /*protobuf.PbFieldType.QS*/get QS() {
      return 65;
    },
    /*protobuf.PbFieldType.QF*/get QF() {
      return 257;
    },
    /*protobuf.PbFieldType.QD*/get QD() {
      return 129;
    },
    /*protobuf.PbFieldType.QE*/get QE() {
      return 513;
    },
    /*protobuf.PbFieldType.QG*/get QG() {
      return 1025;
    },
    /*protobuf.PbFieldType.Q3*/get Q3() {
      return 2049;
    },
    /*protobuf.PbFieldType.Q6*/get Q6() {
      return 4097;
    },
    /*protobuf.PbFieldType.QS3*/get QS3() {
      return 8193;
    },
    /*protobuf.PbFieldType.QS6*/get QS6() {
      return 16385;
    },
    /*protobuf.PbFieldType.QU3*/get QU3() {
      return 32769;
    },
    /*protobuf.PbFieldType.QU6*/get QU6() {
      return 65537;
    },
    /*protobuf.PbFieldType.QF3*/get QF3() {
      return 131073;
    },
    /*protobuf.PbFieldType.QF6*/get QF6() {
      return 262145;
    },
    /*protobuf.PbFieldType.QSF3*/get QSF3() {
      return 524289;
    },
    /*protobuf.PbFieldType.QSF6*/get QSF6() {
      return 1048577;
    },
    /*protobuf.PbFieldType.QM*/get QM() {
      return 2097153;
    },
    /*protobuf.PbFieldType.PB*/get PB() {
      return 18;
    },
    /*protobuf.PbFieldType.PY*/get PY() {
      return 34;
    },
    /*protobuf.PbFieldType.PS*/get PS() {
      return 66;
    },
    /*protobuf.PbFieldType.PF*/get PF() {
      return 258;
    },
    /*protobuf.PbFieldType.PD*/get PD() {
      return 130;
    },
    /*protobuf.PbFieldType.PE*/get PE() {
      return 514;
    },
    /*protobuf.PbFieldType.PG*/get PG() {
      return 1026;
    },
    /*protobuf.PbFieldType.P3*/get P3() {
      return 2050;
    },
    /*protobuf.PbFieldType.P6*/get P6() {
      return 4098;
    },
    /*protobuf.PbFieldType.PS3*/get PS3() {
      return 8194;
    },
    /*protobuf.PbFieldType.PS6*/get PS6() {
      return 16386;
    },
    /*protobuf.PbFieldType.PU3*/get PU3() {
      return 32770;
    },
    /*protobuf.PbFieldType.PU6*/get PU6() {
      return 65538;
    },
    /*protobuf.PbFieldType.PF3*/get PF3() {
      return 131074;
    },
    /*protobuf.PbFieldType.PF6*/get PF6() {
      return 262146;
    },
    /*protobuf.PbFieldType.PSF3*/get PSF3() {
      return 524290;
    },
    /*protobuf.PbFieldType.PSF6*/get PSF6() {
      return 1048578;
    },
    /*protobuf.PbFieldType.PM*/get PM() {
      return 2097154;
    },
    /*protobuf.PbFieldType.KB*/get KB() {
      return 22;
    },
    /*protobuf.PbFieldType.KE*/get KE() {
      return 518;
    },
    /*protobuf.PbFieldType.KF*/get KF() {
      return 262;
    },
    /*protobuf.PbFieldType.KD*/get KD() {
      return 134;
    },
    /*protobuf.PbFieldType.K3*/get K3() {
      return 2054;
    },
    /*protobuf.PbFieldType.K6*/get K6() {
      return 4102;
    },
    /*protobuf.PbFieldType.KS3*/get KS3() {
      return 8198;
    },
    /*protobuf.PbFieldType.KS6*/get KS6() {
      return 16390;
    },
    /*protobuf.PbFieldType.KU3*/get KU3() {
      return 32774;
    },
    /*protobuf.PbFieldType.KU6*/get KU6() {
      return 65542;
    },
    /*protobuf.PbFieldType.KF3*/get KF3() {
      return 131078;
    },
    /*protobuf.PbFieldType.KF6*/get KF6() {
      return 262150;
    },
    /*protobuf.PbFieldType.KSF3*/get KSF3() {
      return 524294;
    },
    /*protobuf.PbFieldType.KSF6*/get KSF6() {
      return 1048582;
    },
    /*protobuf.PbFieldType.M*/get M() {
      return 6291456;
    }
  });
  let C11;
  const TypeRegistry__mapping = dart.privateName(type_registry, "TypeRegistry._mapping");
  let C10;
  let C12;
  protobuf.GeneratedMessage = class GeneratedMessage extends core.Object {
    get eventPlugin() {
      return null;
    }
    get unknownFields() {
      return this[_fieldSet][_ensureUnknownFields]();
    }
    freeze() {
      this[_fieldSet][_markReadOnly]();
      return this;
    }
    get isFrozen() {
      return this[_fieldSet][_isReadOnly];
    }
    toBuilder() {
      let result = this.createEmptyInstance();
      result[_fieldSet][_shallowCopyValues](this[_fieldSet]);
      return result;
    }
    copyWith(updates) {
      let builder = this.toBuilder();
      updates(builder);
      return builder.freeze();
    }
    hasRequiredFields() {
      return this.info_.hasRequiredFields;
    }
    isInitialized() {
      return this[_fieldSet][_hasRequiredValues]();
    }
    clear() {
      return this[_fieldSet][_clear]();
    }
    getTagNumber(fieldName) {
      return this.info_.tagNumber(fieldName);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      return protobuf.GeneratedMessage.is(other) ? this[_fieldSet][_equals](other[_fieldSet]) : false;
    }
    get hashCode() {
      return this[_fieldSet][_hashCode];
    }
    toString() {
      return this.toDebugString();
    }
    toDebugString() {
      let out = new core.StringBuffer.new();
      this[_fieldSet].writeString(out, "");
      return out.toString();
    }
    check() {
      let t1;
      if (!dart.test(this.isInitialized())) {
        let invalidFields = JSArrayOfString().of([]);
        this[_fieldSet][_appendInvalidFields](invalidFields, "");
        let missingFields = (t1 = invalidFields, t1[$sort](), t1)[$join](", ");
        dart.throw(new core.StateError.new("Message missing required fields: " + dart.str(missingFields)));
      }
    }
    writeToBuffer() {
      let out = new protobuf.CodedBufferWriter.new();
      this.writeToCodedBufferWriter(out);
      return out.toBuffer();
    }
    writeToCodedBufferWriter(output) {
      return protobuf._writeToCodedBufferWriter(this[_fieldSet], output);
    }
    mergeFromCodedBufferReader(input, extensionRegistry) {
      if (extensionRegistry === void 0) extensionRegistry = C3 || CT.C3;
      return protobuf._mergeFromCodedBufferReader(this[_fieldSet], input, extensionRegistry);
    }
    mergeFromBuffer(input, extensionRegistry) {
      if (extensionRegistry === void 0) extensionRegistry = C3 || CT.C3;
      let codedInput = new protobuf.CodedBufferReader.new(input);
      protobuf._mergeFromCodedBufferReader(this[_fieldSet], codedInput, extensionRegistry);
      codedInput.checkLastTagWas(0);
    }
    writeToJsonMap() {
      return protobuf._writeToJsonMap(this[_fieldSet]);
    }
    writeToJson() {
      return convert.jsonEncode(this.writeToJsonMap());
    }
    toProto3Json(opts) {
      let typeRegistry = opts && 'typeRegistry' in opts ? opts.typeRegistry : C10 || CT.C10;
      return protobuf._writeToProto3Json(this[_fieldSet], typeRegistry);
    }
    mergeFromProto3Json(json, opts) {
      let typeRegistry = opts && 'typeRegistry' in opts ? opts.typeRegistry : C10 || CT.C10;
      let ignoreUnknownFields = opts && 'ignoreUnknownFields' in opts ? opts.ignoreUnknownFields : false;
      let supportNamesWithUnderscores = opts && 'supportNamesWithUnderscores' in opts ? opts.supportNamesWithUnderscores : true;
      let permissiveEnums = opts && 'permissiveEnums' in opts ? opts.permissiveEnums : false;
      return protobuf._mergeFromProto3Json(json, this[_fieldSet], typeRegistry, ignoreUnknownFields, supportNamesWithUnderscores, permissiveEnums);
    }
    mergeFromJson(data, extensionRegistry) {
      if (extensionRegistry === void 0) extensionRegistry = C3 || CT.C3;
      let jsonMap = MapOfString$dynamic().as(convert.jsonDecode(data, {reviver: C12 || CT.C12}));
      protobuf._mergeFromJsonMap(this[_fieldSet], jsonMap, extensionRegistry);
    }
    static _emptyReviver(k, v) {
      return v;
    }
    mergeFromJsonMap(json, extensionRegistry) {
      if (extensionRegistry === void 0) extensionRegistry = C3 || CT.C3;
      protobuf._mergeFromJsonMap(this[_fieldSet], json, extensionRegistry);
    }
    addExtension(extension, value) {
      let t1;
      if (!dart.test(extension.isRepeated)) {
        dart.throw(new core.ArgumentError.new("Cannot add to a non-repeated field (use setExtension())"));
      }
      t1 = this[_fieldSet][_ensureExtensions]();
      t1[_ensureRepeatedField](dart.dynamic, extension)[$add](value);
      t1;
    }
    clearExtension(extension) {
      if (dart.test(this[_fieldSet][_hasExtensions])) {
        this[_fieldSet][_extensions][_clearFieldAndInfo](extension);
      }
    }
    clearField(tagNumber) {
      return this[_fieldSet][_clearField](tagNumber);
    }
    $_whichOneof(oneofIndex) {
      let t1;
      t1 = this[_fieldSet][_oneofCases][$_get](oneofIndex);
      return t1 == null ? 0 : t1;
    }
    extensionsAreInitialized() {
      return this[_fieldSet][_hasRequiredExtensionValues]();
    }
    getExtension(extension) {
      return this[_fieldSet][_ensureExtensions]()[_getFieldOrDefault](extension);
    }
    getField(tagNumber) {
      return this[_fieldSet][_getField](tagNumber);
    }
    createRepeatedField(T, tagNumber, fi) {
      return new (protobuf.PbList$(T)).new({check: dart.fnType(dart.void, [T])._check(fi.check)});
    }
    createMapField(K, V, tagNumber, fi) {
      return new (protobuf.PbMap$(K, V)).new(fi.keyFieldType, fi.valueFieldType, fi.mapEntryBuilderInfo);
    }
    getFieldOrNull(tagNumber) {
      return this[_fieldSet][_getFieldOrNullByTag](tagNumber);
    }
    getDefaultForField(tagNumber) {
      return this[_fieldSet][_ensureInfo](tagNumber).readonlyDefault;
    }
    hasExtension(extension) {
      return dart.test(this[_fieldSet][_hasExtensions]) && this[_fieldSet][_extensions][_getFieldOrNull](extension) != null;
    }
    hasField(tagNumber) {
      return this[_fieldSet][_hasField](tagNumber);
    }
    mergeFromMessage(other) {
      return this[_fieldSet][_mergeFromMessage](other[_fieldSet]);
    }
    mergeUnknownFields(unknownFieldSet) {
      return this[_fieldSet][_ensureUnknownFields]().mergeFromUnknownFieldSet(unknownFieldSet);
    }
    setExtension(extension, value) {
      if (value == null) dart.throw(new core.ArgumentError.new("value is null"));
      if (dart.test(protobuf._isRepeated(extension.type))) {
        dart.throw(new core.ArgumentError.new(this[_fieldSet][_setFieldFailedMessage](extension, value, "repeating field (use get + .add())")));
      }
      this[_fieldSet][_ensureExtensions]()[_setFieldAndInfo](extension, value);
    }
    setField(tagNumber, value) {
      this[_fieldSet][_setField](tagNumber, value);
      return;
      return;
    }
    $_get(T, index, defaultValue) {
      return this[_fieldSet][_$get](T, index, defaultValue);
    }
    $_getN(T, index) {
      return T._check(this[_fieldSet][_$getND](index));
    }
    $_ensure(T, index) {
      return this[_fieldSet][_$ensure](T, index);
    }
    $_getList(T, index) {
      return this[_fieldSet][_$getList](T, index);
    }
    $_getMap(K, V, index) {
      return this[_fieldSet][_$getMap](K, V, index);
    }
    $_getB(index, defaultValue) {
      return this[_fieldSet][_$getB](index, defaultValue);
    }
    $_getBF(index) {
      return this[_fieldSet][_$getBF](index);
    }
    $_getI(index, defaultValue) {
      return this[_fieldSet][_$getI](index, defaultValue);
    }
    $_getIZ(index) {
      return this[_fieldSet][_$getIZ](index);
    }
    $_getS(index, defaultValue) {
      return this[_fieldSet][_$getS](index, defaultValue);
    }
    $_getSZ(index) {
      return this[_fieldSet][_$getSZ](index);
    }
    $_getI64(index) {
      return this[_fieldSet][_$getI64](index);
    }
    $_has(index) {
      return this[_fieldSet][_$has](index);
    }
    $_setBool(index, value) {
      return this[_fieldSet][_$set](index, value);
    }
    $_setBytes(index, value) {
      return this[_fieldSet][_$set](index, value);
    }
    $_setString(index, value) {
      return this[_fieldSet][_$set](index, value);
    }
    $_setFloat(index, value) {
      if (value == null || !dart.test(protobuf._isFloat32(value))) {
        this[_fieldSet][_$check](index, value);
      }
      this[_fieldSet][_$set](index, value);
    }
    $_setDouble(index, value) {
      return this[_fieldSet][_$set](index, value);
    }
    $_setSignedInt32(index, value) {
      if (value == null || !dart.test(protobuf._isSigned32(value))) {
        this[_fieldSet][_$check](index, value);
      }
      this[_fieldSet][_$set](index, value);
    }
    $_setUnsignedInt32(index, value) {
      if (value == null || !dart.test(protobuf._isUnsigned32(value))) {
        this[_fieldSet][_$check](index, value);
      }
      this[_fieldSet][_$set](index, value);
    }
    $_setInt64(index, value) {
      return this[_fieldSet][_$set](index, value);
    }
    static _defaultMakerFor(T, createFn) {
      let t4, t3, t2, t1;
      return dart.fnType(T, [])._check((t1 = protobuf.GeneratedMessage._defaultMakers, t2 = createFn, t3 = t1[$_get](t2), t3 == null ? (t4 = protobuf.GeneratedMessage._createDefaultMakerFor(T, createFn), t1[$_set](t2, t4), t4) : t3));
    }
    static _createDefaultMakerFor(T, createFn) {
      let defaultValue = null;
      function defaultMaker() {
        let t2, t1;
        t1 = defaultValue;
        return t1 == null ? defaultValue = (t2 = createFn(), t2.freeze(), t2) : t1;
      }
      dart.fn(defaultMaker, dart.fnType(T, []));
      return defaultMaker;
    }
    static $_defaultFor(T, createFn) {
      return protobuf.GeneratedMessage._defaultMakerFor(T, createFn)();
    }
  };
  (protobuf.GeneratedMessage.new = function() {
    this[_fieldSet] = null;
    this[_fieldSet] = new protobuf._FieldSet.new(this, this.info_, this.eventPlugin);
    if (this.eventPlugin != null) this.eventPlugin.attach(this);
  }).prototype = protobuf.GeneratedMessage.prototype;
  (protobuf.GeneratedMessage.fromBuffer = function(input, extensionRegistry) {
    this[_fieldSet] = null;
    this[_fieldSet] = new protobuf._FieldSet.new(this, this.info_, this.eventPlugin);
    if (this.eventPlugin != null) this.eventPlugin.attach(this);
    this.mergeFromBuffer(input, extensionRegistry);
  }).prototype = protobuf.GeneratedMessage.prototype;
  (protobuf.GeneratedMessage.fromJson = function(input, extensionRegistry) {
    this[_fieldSet] = null;
    this[_fieldSet] = new protobuf._FieldSet.new(this, this.info_, this.eventPlugin);
    if (this.eventPlugin != null) this.eventPlugin.attach(this);
    this.mergeFromJson(input, extensionRegistry);
  }).prototype = protobuf.GeneratedMessage.prototype;
  dart.addTypeTests(protobuf.GeneratedMessage);
  dart.setMethodSignature(protobuf.GeneratedMessage, () => ({
    __proto__: dart.getMethods(protobuf.GeneratedMessage.__proto__),
    freeze: dart.fnType(protobuf.GeneratedMessage, []),
    toBuilder: dart.fnType(protobuf.GeneratedMessage, []),
    copyWith: dart.fnType(protobuf.GeneratedMessage, [dart.fnType(dart.void, [protobuf.GeneratedMessage])]),
    hasRequiredFields: dart.fnType(core.bool, []),
    isInitialized: dart.fnType(core.bool, []),
    clear: dart.fnType(dart.void, []),
    getTagNumber: dart.fnType(core.int, [core.String]),
    toDebugString: dart.fnType(core.String, []),
    check: dart.fnType(dart.void, []),
    writeToBuffer: dart.fnType(typed_data.Uint8List, []),
    writeToCodedBufferWriter: dart.fnType(dart.void, [protobuf.CodedBufferWriter]),
    mergeFromCodedBufferReader: dart.fnType(dart.void, [protobuf.CodedBufferReader], [protobuf.ExtensionRegistry]),
    mergeFromBuffer: dart.fnType(dart.void, [core.List$(core.int)], [protobuf.ExtensionRegistry]),
    writeToJsonMap: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    writeToJson: dart.fnType(core.String, []),
    toProto3Json: dart.fnType(core.Object, [], {typeRegistry: type_registry.TypeRegistry}, {}),
    mergeFromProto3Json: dart.fnType(dart.void, [core.Object], {ignoreUnknownFields: core.bool, permissiveEnums: core.bool, supportNamesWithUnderscores: core.bool, typeRegistry: type_registry.TypeRegistry}, {}),
    mergeFromJson: dart.fnType(dart.void, [core.String], [protobuf.ExtensionRegistry]),
    mergeFromJsonMap: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)], [protobuf.ExtensionRegistry]),
    addExtension: dart.fnType(dart.void, [protobuf.Extension, dart.dynamic]),
    clearExtension: dart.fnType(dart.void, [protobuf.Extension]),
    clearField: dart.fnType(dart.void, [core.int]),
    $_whichOneof: dart.fnType(core.int, [core.int]),
    extensionsAreInitialized: dart.fnType(core.bool, []),
    getExtension: dart.fnType(dart.dynamic, [protobuf.Extension]),
    getField: dart.fnType(dart.dynamic, [core.int]),
    createRepeatedField: dart.gFnType(T => [core.List$(T), [core.int, protobuf.FieldInfo$(T)]]),
    createMapField: dart.gFnType((K, V) => [core.Map$(K, V), [core.int, protobuf.MapFieldInfo$(K, V)]]),
    getFieldOrNull: dart.fnType(dart.dynamic, [core.int]),
    getDefaultForField: dart.fnType(dart.dynamic, [core.int]),
    hasExtension: dart.fnType(core.bool, [protobuf.Extension]),
    hasField: dart.fnType(core.bool, [core.int]),
    mergeFromMessage: dart.fnType(dart.void, [protobuf.GeneratedMessage]),
    mergeUnknownFields: dart.fnType(dart.void, [protobuf.UnknownFieldSet]),
    setExtension: dart.fnType(dart.void, [protobuf.Extension, dart.dynamic]),
    setField: dart.fnType(dart.void, [core.int, dart.dynamic]),
    $_get: dart.gFnType(T => [T, [core.int, T]]),
    $_getN: dart.gFnType(T => [T, [core.int]]),
    $_ensure: dart.gFnType(T => [T, [core.int]]),
    $_getList: dart.gFnType(T => [core.List$(T), [core.int]]),
    $_getMap: dart.gFnType((K, V) => [core.Map$(K, V), [core.int]]),
    $_getB: dart.fnType(core.bool, [core.int, core.bool]),
    $_getBF: dart.fnType(core.bool, [core.int]),
    $_getI: dart.fnType(core.int, [core.int, core.int]),
    $_getIZ: dart.fnType(core.int, [core.int]),
    $_getS: dart.fnType(core.String, [core.int, core.String]),
    $_getSZ: dart.fnType(core.String, [core.int]),
    $_getI64: dart.fnType(fixnum.Int64, [core.int]),
    $_has: dart.fnType(core.bool, [core.int]),
    $_setBool: dart.fnType(dart.void, [core.int, core.bool]),
    $_setBytes: dart.fnType(dart.void, [core.int, core.List$(core.int)]),
    $_setString: dart.fnType(dart.void, [core.int, core.String]),
    $_setFloat: dart.fnType(dart.void, [core.int, core.double]),
    $_setDouble: dart.fnType(dart.void, [core.int, core.double]),
    $_setSignedInt32: dart.fnType(dart.void, [core.int, core.int]),
    $_setUnsignedInt32: dart.fnType(dart.void, [core.int, core.int]),
    $_setInt64: dart.fnType(dart.void, [core.int, fixnum.Int64])
  }));
  dart.setGetterSignature(protobuf.GeneratedMessage, () => ({
    __proto__: dart.getGetters(protobuf.GeneratedMessage.__proto__),
    eventPlugin: protobuf.EventPlugin,
    unknownFields: protobuf.UnknownFieldSet,
    isFrozen: core.bool
  }));
  dart.setLibraryUri(protobuf.GeneratedMessage, "package:protobuf/protobuf.dart");
  dart.setFieldSignature(protobuf.GeneratedMessage, () => ({
    __proto__: dart.getFields(protobuf.GeneratedMessage.__proto__),
    [_fieldSet]: dart.fieldType(protobuf._FieldSet)
  }));
  dart.defineExtensionMethods(protobuf.GeneratedMessage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(protobuf.GeneratedMessage, ['hashCode']);
  dart.defineLazy(protobuf.GeneratedMessage, {
    /*protobuf.GeneratedMessage._defaultMakers*/get _defaultMakers() {
      return new (LinkedMapOfFunction$Function()).new();
    }
  });
  protobuf.PackageName = class PackageName extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get prefix() {
      return this.name === "" ? "" : dart.str(this.name) + ".";
    }
  };
  (protobuf.PackageName.new = function(name) {
    this[name$0] = name;
    ;
  }).prototype = protobuf.PackageName.prototype;
  dart.addTypeTests(protobuf.PackageName);
  const name$0 = PackageName_name;
  dart.setGetterSignature(protobuf.PackageName, () => ({
    __proto__: dart.getGetters(protobuf.PackageName.__proto__),
    prefix: core.String
  }));
  dart.setLibraryUri(protobuf.PackageName, "package:protobuf/protobuf.dart");
  dart.setFieldSignature(protobuf.PackageName, () => ({
    __proto__: dart.getFields(protobuf.PackageName.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  protobuf.ServerContext = class ServerContext extends core.Object {};
  (protobuf.ServerContext.new = function() {
    ;
  }).prototype = protobuf.ServerContext.prototype;
  dart.addTypeTests(protobuf.ServerContext);
  dart.setLibraryUri(protobuf.ServerContext, "package:protobuf/protobuf.dart");
  protobuf.GeneratedService = class GeneratedService extends core.Object {};
  (protobuf.GeneratedService.new = function() {
    ;
  }).prototype = protobuf.GeneratedService.prototype;
  dart.addTypeTests(protobuf.GeneratedService);
  dart.setLibraryUri(protobuf.GeneratedService, "package:protobuf/protobuf.dart");
  const _wrappedList$ = dart.privateName(protobuf, "_wrappedList");
  const _unsupported = dart.privateName(protobuf, "_unsupported");
  const _is_PbListBase_default = Symbol('_is_PbListBase_default');
  const check$0 = dart.privateName(protobuf, "PbListBase.check");
  protobuf.PbListBase$ = dart.generic(E => {
    let JSArrayOfE = () => (JSArrayOfE = dart.constFn(_interceptors.JSArray$(E)))();
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    let EAndEToE = () => (EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    let VoidToE = () => (VoidToE = dart.constFn(dart.fnType(E, [])))();
    class PbListBase extends collection.ListBase$(E) {
      get check() {
        return this[check$0];
      }
      set check(value) {
        super.check = value;
      }
      _equals(other) {
        if (other == null) return false;
        return protobuf.PbListBase.is(other) && dart.test(protobuf._areListsEqual(other, this));
      }
      get hashCode() {
        return protobuf._HashUtils._hashObjects(this[_wrappedList$]);
      }
      get iterator() {
        return this[_wrappedList$][$iterator];
      }
      map(T, f) {
        return this[_wrappedList$][$map](T, f);
      }
      where(test) {
        return this[_wrappedList$][$where](test);
      }
      expand(T, f) {
        return this[_wrappedList$][$expand](T, f);
      }
      contains(element) {
        return this[_wrappedList$][$contains](element);
      }
      forEach(f) {
        this[_wrappedList$][$forEach](f);
      }
      reduce(combine) {
        EAndEToE()._check(combine);
        return this[_wrappedList$][$reduce](combine);
      }
      fold(T, initialValue, combine) {
        return this[_wrappedList$][$fold](T, initialValue, combine);
      }
      every(test) {
        return this[_wrappedList$][$every](test);
      }
      join(separator) {
        if (separator === void 0) separator = "";
        return this[_wrappedList$][$join](separator);
      }
      any(test) {
        return this[_wrappedList$][$any](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_wrappedList$][$toList]({growable: growable});
      }
      toSet() {
        return this[_wrappedList$][$toSet]();
      }
      get isEmpty() {
        return this[_wrappedList$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_wrappedList$][$isNotEmpty];
      }
      take(count) {
        return this[_wrappedList$][$take](count);
      }
      takeWhile(test) {
        return this[_wrappedList$][$takeWhile](test);
      }
      skip(count) {
        return this[_wrappedList$][$skip](count);
      }
      skipWhile(test) {
        return this[_wrappedList$][$skipWhile](test);
      }
      get first() {
        return this[_wrappedList$][$first];
      }
      set first(value) {
        super.first = value;
      }
      get last() {
        return this[_wrappedList$][$last];
      }
      set last(value) {
        super.last = value;
      }
      get single() {
        return this[_wrappedList$][$single];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_wrappedList$][$firstWhere](test, {orElse: orElse});
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_wrappedList$][$lastWhere](test, {orElse: orElse});
      }
      elementAt(index) {
        return this[_wrappedList$][$elementAt](index);
      }
      toString() {
        return dart.toString(this[_wrappedList$]);
      }
      _get(index) {
        return this[_wrappedList$][$_get](index);
      }
      get length() {
        return this[_wrappedList$][$length];
      }
      indexOf(element, start) {
        if (start === void 0) start = 0;
        return this[_wrappedList$][$indexOf](E._check(element), start);
      }
      lastIndexOf(element, start) {
        if (start === void 0) start = null;
        return this[_wrappedList$][$lastIndexOf](E._check(element), start);
      }
      sublist(start, end) {
        if (end === void 0) end = null;
        return this[_wrappedList$][$sublist](start, end);
      }
      getRange(start, end) {
        return this[_wrappedList$][$getRange](start, end);
      }
      asMap() {
        return this[_wrappedList$][$asMap]();
      }
      _set(index, value$) {
        let value = value$;
        E._check(value);
        this.check(value);
        this[_wrappedList$][$_set](index, value);
        return value$;
      }
      set length(newLength) {
        if (dart.notNull(newLength) > dart.notNull(this.length)) {
          dart.throw(new core.UnsupportedError.new("Extending protobuf lists is not supported"));
        }
        this[_wrappedList$][$length] = newLength;
      }
    }
    (PbListBase.__ = function(_wrappedList, opts) {
      let check = opts && 'check' in opts ? opts.check : C1 || CT.C1;
      this[_wrappedList$] = _wrappedList;
      this[check$0] = check;
      ;
    }).prototype = PbListBase.prototype;
    (PbListBase._noList = function(opts) {
      let check = opts && 'check' in opts ? opts.check : C1 || CT.C1;
      this[check$0] = check;
      this[_wrappedList$] = JSArrayOfE().of([]);
      if (!(this.check != null)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/pb_list.dart", 162, 12, "check != null");
    }).prototype = PbListBase.prototype;
    (PbListBase._from = function(from) {
      this[_wrappedList$] = ListOfE().from(from);
      this[check$0] = C1 || CT.C1;
      ;
    }).prototype = PbListBase.prototype;
    dart.addTypeTests(PbListBase);
    PbListBase.prototype[_is_PbListBase_default] = true;
    dart.setMethodSignature(PbListBase, () => ({
      __proto__: dart.getMethods(PbListBase.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object]),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object])
    }));
    dart.setGetterSignature(PbListBase, () => ({
      __proto__: dart.getGetters(PbListBase.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setSetterSignature(PbListBase, () => ({
      __proto__: dart.getSetters(PbListBase.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(PbListBase, "package:protobuf/protobuf.dart");
    dart.setFieldSignature(PbListBase, () => ({
      __proto__: dart.getFields(PbListBase.__proto__),
      [_wrappedList$]: dart.finalFieldType(core.List$(E)),
      check: dart.finalFieldType(dart.fnType(dart.void, [E]))
    }));
    dart.defineExtensionMethods(PbListBase, [
      '_equals',
      'map',
      'where',
      'expand',
      'contains',
      'forEach',
      'reduce',
      'fold',
      'every',
      'join',
      'any',
      'toList',
      'toSet',
      'take',
      'takeWhile',
      'skip',
      'skipWhile',
      'firstWhere',
      'lastWhere',
      'elementAt',
      'toString',
      '_get',
      'indexOf',
      'lastIndexOf',
      'sublist',
      'getRange',
      'asMap',
      '_set'
    ]);
    dart.defineExtensionAccessors(PbListBase, [
      'hashCode',
      'iterator',
      'isEmpty',
      'isNotEmpty',
      'first',
      'last',
      'single',
      'length'
    ]);
    return PbListBase;
  });
  protobuf.PbListBase = protobuf.PbListBase$();
  dart.addTypeTests(protobuf.PbListBase, _is_PbListBase_default);
  const _is_FrozenPbList_default = Symbol('_is_FrozenPbList_default');
  protobuf.FrozenPbList$ = dart.generic(E => {
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    class FrozenPbList extends protobuf.PbListBase$(E) {
      static from(other) {
        return new (protobuf.FrozenPbList$(E)).__(other[_wrappedList$]);
      }
      [_unsupported](method) {
        return new core.UnsupportedError.new("Cannot call " + dart.str(method) + " on an unmodifiable list");
      }
      _set(index, value$) {
        let value = value$;
        E._check(value);
        dart.throw(this[_unsupported]("set"));
        return value$;
      }
      set length(newLength) {
        return dart.throw(this[_unsupported]("set length"));
      }
      get length() {
        return super.length;
      }
      setAll(at, iterable) {
        IterableOfE()._check(iterable);
        return dart.throw(this[_unsupported]("setAll"));
      }
      add(value) {
        E._check(value);
        return dart.throw(this[_unsupported]("add"));
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        return dart.throw(this[_unsupported]("addAll"));
      }
      insert(index, element) {
        E._check(element);
        return dart.throw(this[_unsupported]("insert"));
      }
      insertAll(at, iterable) {
        IterableOfE()._check(iterable);
        return dart.throw(this[_unsupported]("insertAll"));
      }
      remove(element) {
        return dart.throw(this[_unsupported]("remove"));
      }
      removeWhere(test) {
        return dart.throw(this[_unsupported]("removeWhere"));
      }
      retainWhere(test) {
        return dart.throw(this[_unsupported]("retainWhere"));
      }
      sort(compare) {
        if (compare === void 0) compare = null;
        return dart.throw(this[_unsupported]("sort"));
      }
      shuffle(random) {
        if (random === void 0) random = null;
        return dart.throw(this[_unsupported]("shuffle"));
      }
      clear() {
        return dart.throw(this[_unsupported]("clear"));
      }
      removeAt(index) {
        return dart.throw(this[_unsupported]("removeAt"));
      }
      removeLast() {
        return dart.throw(this[_unsupported]("removeLast"));
      }
      setRange(start, end, iterable, skipCount) {
        IterableOfE()._check(iterable);
        if (skipCount === void 0) skipCount = 0;
        return dart.throw(this[_unsupported]("setRange"));
      }
      removeRange(start, end) {
        return dart.throw(this[_unsupported]("removeRange"));
      }
      replaceRange(start, end, iterable) {
        IterableOfE()._check(iterable);
        return dart.throw(this[_unsupported]("replaceRange"));
      }
      fillRange(start, end, fillValue) {
        if (fillValue === void 0) fillValue = null;
        E._check(fillValue);
        return dart.throw(this[_unsupported]("fillRange"));
      }
    }
    (FrozenPbList.__ = function(wrappedList) {
      FrozenPbList.__proto__.__.call(this, wrappedList);
      ;
    }).prototype = FrozenPbList.prototype;
    dart.addTypeTests(FrozenPbList);
    FrozenPbList.prototype[_is_FrozenPbList_default] = true;
    dart.setMethodSignature(FrozenPbList, () => ({
      __proto__: dart.getMethods(FrozenPbList.__proto__),
      [_unsupported]: dart.fnType(core.UnsupportedError, [core.String])
    }));
    dart.setLibraryUri(FrozenPbList, "package:protobuf/protobuf.dart");
    dart.defineExtensionMethods(FrozenPbList, [
      '_set',
      'setAll',
      'add',
      'addAll',
      'insert',
      'insertAll',
      'remove',
      'removeWhere',
      'retainWhere',
      'sort',
      'shuffle',
      'clear',
      'removeAt',
      'removeLast',
      'setRange',
      'removeRange',
      'replaceRange',
      'fillRange'
    ]);
    dart.defineExtensionAccessors(FrozenPbList, ['length']);
    return FrozenPbList;
  });
  protobuf.FrozenPbList = protobuf.FrozenPbList$();
  dart.addTypeTests(protobuf.FrozenPbList, _is_FrozenPbList_default);
  const _is_PbList_default = Symbol('_is_PbList_default');
  protobuf.PbList$ = dart.generic(E => {
    let ETovoid = () => (ETovoid = dart.constFn(dart.fnType(dart.void, [E])))();
    let FrozenPbListOfE = () => (FrozenPbListOfE = dart.constFn(protobuf.FrozenPbList$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    class PbList extends protobuf.PbListBase$(E) {
      toFrozenPbList() {
        return FrozenPbListOfE().from(this);
      }
      add(value) {
        E._check(value);
        this.check(value);
        this[_wrappedList$][$add](value);
      }
      addAll(collection) {
        IterableOfE()._check(collection);
        collection[$forEach](this.check);
        this[_wrappedList$][$addAll](collection);
      }
      get reversed() {
        return this[_wrappedList$][$reversed];
      }
      sort(compare) {
        if (compare === void 0) compare = null;
        return this[_wrappedList$][$sort](compare);
      }
      shuffle(random) {
        if (random === void 0) random = null;
        return this[_wrappedList$][$shuffle](random);
      }
      clear() {
        return this[_wrappedList$][$clear]();
      }
      insert(index, element) {
        E._check(element);
        this.check(element);
        this[_wrappedList$][$insert](index, element);
      }
      insertAll(index, iterable) {
        IterableOfE()._check(iterable);
        iterable[$forEach](this.check);
        this[_wrappedList$][$insertAll](index, iterable);
      }
      setAll(index, iterable) {
        IterableOfE()._check(iterable);
        iterable[$forEach](this.check);
        this[_wrappedList$][$setAll](index, iterable);
      }
      remove(value) {
        return this[_wrappedList$][$remove](value);
      }
      removeAt(index) {
        return this[_wrappedList$][$removeAt](index);
      }
      removeLast() {
        return this[_wrappedList$][$removeLast]();
      }
      removeWhere(test) {
        return this[_wrappedList$][$removeWhere](test);
      }
      retainWhere(test) {
        return this[_wrappedList$][$retainWhere](test);
      }
      setRange(start, end, from, skipCount) {
        IterableOfE()._check(from);
        if (skipCount === void 0) skipCount = 0;
        from[$skip](skipCount)[$take](dart.notNull(end) - dart.notNull(start))[$forEach](this.check);
        this[_wrappedList$][$setRange](start, end, from, skipCount);
      }
      removeRange(start, end) {
        return this[_wrappedList$][$removeRange](start, end);
      }
      fillRange(start, end, fillValue) {
        if (fillValue === void 0) fillValue = null;
        E._check(fillValue);
        this.check(fillValue);
        this[_wrappedList$][$fillRange](start, end, fillValue);
      }
      replaceRange(start, end, replacement) {
        IterableOfE()._check(replacement);
        let values = replacement[$toList]();
        replacement[$forEach](this.check);
        this[_wrappedList$][$replaceRange](start, end, values);
      }
    }
    (PbList.new = function(opts) {
      let check = opts && 'check' in opts ? opts.check : C1 || CT.C1;
      PbList.__proto__._noList.call(this, {check: ETovoid()._check(check)});
      ;
    }).prototype = PbList.prototype;
    (PbList.__ = function(wrappedList) {
      PbList.__proto__.__.call(this, wrappedList);
      ;
    }).prototype = PbList.prototype;
    (PbList.from = function(from) {
      PbList.__proto__._from.call(this, from);
      ;
    }).prototype = PbList.prototype;
    (PbList.forFieldType = function(fieldType) {
      PbList.__proto__._noList.call(this, {check: protobuf.getCheckFunction(fieldType)});
      ;
    }).prototype = PbList.prototype;
    dart.addTypeTests(PbList);
    PbList.prototype[_is_PbList_default] = true;
    dart.setMethodSignature(PbList, () => ({
      __proto__: dart.getMethods(PbList.__proto__),
      toFrozenPbList: dart.fnType(protobuf.FrozenPbList$(E), [])
    }));
    dart.setLibraryUri(PbList, "package:protobuf/protobuf.dart");
    dart.defineExtensionMethods(PbList, [
      'add',
      'addAll',
      'sort',
      'shuffle',
      'clear',
      'insert',
      'insertAll',
      'setAll',
      'remove',
      'removeAt',
      'removeLast',
      'removeWhere',
      'retainWhere',
      'setRange',
      'removeRange',
      'fillRange',
      'replaceRange'
    ]);
    dart.defineExtensionAccessors(PbList, ['reversed']);
    return PbList;
  });
  protobuf.PbList = protobuf.PbList$();
  dart.addTypeTests(protobuf.PbList, _is_PbList_default);
  const value$ = dart.privateName(protobuf, "ProtobufEnum.value");
  const name$1 = dart.privateName(protobuf, "ProtobufEnum.name");
  protobuf.ProtobufEnum = class ProtobufEnum extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get name() {
      return this[name$1];
    }
    set name(value) {
      super.name = value;
    }
    static initByValue(T, byIndex) {
      let byValue = new (_js_helper.LinkedMap$(core.int, T)).new();
      for (let v of byIndex) {
        byValue[$_set](v.value, v);
      }
      return byValue;
    }
    get hashCode() {
      return this.value;
    }
    toString() {
      return this.name;
    }
  };
  (protobuf.ProtobufEnum.new = function(value, name) {
    this[value$] = value;
    this[name$1] = name;
    ;
  }).prototype = protobuf.ProtobufEnum.prototype;
  dart.addTypeTests(protobuf.ProtobufEnum);
  dart.setLibraryUri(protobuf.ProtobufEnum, "package:protobuf/protobuf.dart");
  dart.setFieldSignature(protobuf.ProtobufEnum, () => ({
    __proto__: dart.getFields(protobuf.ProtobufEnum.__proto__),
    value: dart.finalFieldType(core.int),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(protobuf.ProtobufEnum, ['toString']);
  dart.defineExtensionAccessors(protobuf.ProtobufEnum, ['hashCode']);
  const _readonly = dart.privateName(protobuf, "_readonly");
  protobuf.ReadonlyMessageMixin = class ReadonlyMessageMixin extends core.Object {
    get [_isReadOnly]() {
      return true;
    }
    addExtension(extension, value) {
      return this[_readonly]("addExtension");
    }
    clear() {
      return this[_readonly]("clear");
    }
    clearExtension(extension) {
      return this[_readonly]("clearExtension");
    }
    clearField(tagNumber) {
      return this[_readonly]("clearField");
    }
    createRepeatedField(T, tagNumber, fi) {
      this[_readonly]("createRepeatedField");
      return null;
    }
    mergeFromBuffer(input, extensionRegistry) {
      if (extensionRegistry === void 0) extensionRegistry = C3 || CT.C3;
      return this[_readonly]("mergeFromBuffer");
    }
    mergeFromCodedBufferReader(input, extensionRegistry) {
      if (extensionRegistry === void 0) extensionRegistry = C3 || CT.C3;
      return this[_readonly]("mergeFromCodedBufferReader");
    }
    mergeFromJson(data, extensionRegistry) {
      if (extensionRegistry === void 0) extensionRegistry = C3 || CT.C3;
      return this[_readonly]("mergeFromJson");
    }
    mergeFromJsonMap(json, extensionRegistry) {
      if (extensionRegistry === void 0) extensionRegistry = C3 || CT.C3;
      return this[_readonly]("mergeFromJsonMap");
    }
    mergeFromMessage(other) {
      return this[_readonly]("mergeFromMessage");
    }
    mergeUnknownFields(unknownFieldSet) {
      return this[_readonly]("mergeUnknownFields");
    }
    setExtension(extension, value) {
      return this[_readonly]("setExtension");
    }
    setField(tagNumber, value, fieldType) {
      if (fieldType === void 0) fieldType = null;
      return this[_readonly]("setField");
    }
    [_readonly](methodName) {
      let messageType = this.info_.qualifiedMessageName;
      protobuf.frozenMessageModificationHandler(messageType, methodName);
    }
  };
  (protobuf.ReadonlyMessageMixin.new = function() {
    ;
  }).prototype = protobuf.ReadonlyMessageMixin.prototype;
  dart.addTypeTests(protobuf.ReadonlyMessageMixin);
  dart.setMethodSignature(protobuf.ReadonlyMessageMixin, () => ({
    __proto__: dart.getMethods(protobuf.ReadonlyMessageMixin.__proto__),
    addExtension: dart.fnType(dart.void, [protobuf.Extension, dart.dynamic]),
    clear: dart.fnType(dart.void, []),
    clearExtension: dart.fnType(dart.void, [protobuf.Extension]),
    clearField: dart.fnType(dart.void, [core.int]),
    createRepeatedField: dart.gFnType(T => [core.List$(T), [core.int, protobuf.FieldInfo$(T)]]),
    mergeFromBuffer: dart.fnType(dart.void, [core.List$(core.int)], [protobuf.ExtensionRegistry]),
    mergeFromCodedBufferReader: dart.fnType(dart.void, [protobuf.CodedBufferReader], [protobuf.ExtensionRegistry]),
    mergeFromJson: dart.fnType(dart.void, [core.String], [protobuf.ExtensionRegistry]),
    mergeFromJsonMap: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)], [protobuf.ExtensionRegistry]),
    mergeFromMessage: dart.fnType(dart.void, [protobuf.GeneratedMessage]),
    mergeUnknownFields: dart.fnType(dart.void, [protobuf.UnknownFieldSet]),
    setExtension: dart.fnType(dart.void, [protobuf.Extension, dart.dynamic]),
    setField: dart.fnType(dart.void, [core.int, dart.dynamic], [core.int]),
    [_readonly]: dart.fnType(dart.void, [core.String])
  }));
  dart.setGetterSignature(protobuf.ReadonlyMessageMixin, () => ({
    __proto__: dart.getGetters(protobuf.ReadonlyMessageMixin.__proto__),
    [_isReadOnly]: core.bool
  }));
  dart.setLibraryUri(protobuf.ReadonlyMessageMixin, "package:protobuf/protobuf.dart");
  protobuf.ClientContext = class ClientContext extends core.Object {};
  (protobuf.ClientContext.new = function() {
    ;
  }).prototype = protobuf.ClientContext.prototype;
  dart.addTypeTests(protobuf.ClientContext);
  dart.setLibraryUri(protobuf.ClientContext, "package:protobuf/protobuf.dart");
  protobuf.RpcClient = class RpcClient extends core.Object {};
  (protobuf.RpcClient.new = function() {
    ;
  }).prototype = protobuf.RpcClient.prototype;
  dart.addTypeTests(protobuf.RpcClient);
  dart.setLibraryUri(protobuf.RpcClient, "package:protobuf/protobuf.dart");
  const _checkFieldNumber = dart.privateName(protobuf, "_checkFieldNumber");
  const _toString = dart.privateName(protobuf, "_toString");
  protobuf.UnknownFieldSet = class UnknownFieldSet extends core.Object {
    clone() {
      return new protobuf.UnknownFieldSet._clone(this);
    }
    get isEmpty() {
      return this[_fields][$isEmpty];
    }
    get isNotEmpty() {
      return this[_fields][$isNotEmpty];
    }
    asMap() {
      return LinkedHashMapOfint$UnknownFieldSetField().from(this[_fields]);
    }
    clear() {
      this[_ensureWritable]("clear");
      this[_fields][$clear]();
    }
    getField(tagNumber) {
      return this[_fields][$_get](tagNumber);
    }
    hasField(tagNumber) {
      return this[_fields][$containsKey](tagNumber);
    }
    addField(number, field) {
      this[_ensureWritable]("addField");
      this[_checkFieldNumber](number);
      this[_fields][$_set](number, field);
    }
    mergeField(number, field) {
      let t1;
      this[_ensureWritable]("mergeField");
      t1 = this[_getField](number);
      t1.varints[$addAll](field.varints);
      t1.fixed32s[$addAll](field.fixed32s);
      t1.fixed64s[$addAll](field.fixed64s);
      t1.lengthDelimited[$addAll](field.lengthDelimited);
      t1.groups[$addAll](field.groups);
      t1;
    }
    mergeFieldFromBuffer(tag, input) {
      this[_ensureWritable]("mergeFieldFromBuffer");
      let number = protobuf.getTagFieldNumber(tag);
      switch (protobuf.getTagWireType(tag)) {
        case 0:
        {
          this.mergeVarintField(number, input.readInt64());
          return true;
        }
        case 1:
        {
          this.mergeFixed64Field(number, input.readFixed64());
          return true;
        }
        case 2:
        {
          this.mergeLengthDelimitedField(number, input.readBytes());
          return true;
        }
        case 3:
        {
          let subGroup = input.readUnknownFieldSetGroup(number);
          this.mergeGroupField(number, subGroup);
          return true;
        }
        case 4:
        {
          return false;
        }
        case 5:
        {
          this.mergeFixed32Field(number, input.readFixed32());
          return true;
        }
        default:
        {
          dart.throw(new protobuf.InvalidProtocolBufferException.invalidWireType());
        }
      }
    }
    mergeFromCodedBufferReader(input) {
      this[_ensureWritable]("mergeFromCodedBufferReader");
      while (true) {
        let tag = input.readTag();
        if (tag === 0 || !dart.test(this.mergeFieldFromBuffer(tag, input))) {
          break;
        }
      }
    }
    mergeFromUnknownFieldSet(other) {
      this[_ensureWritable]("mergeFromUnknownFieldSet");
      for (let key of other[_fields][$keys]) {
        this.mergeField(key, other[_fields][$_get](key));
      }
    }
    [_checkFieldNumber](number) {
      if (number === 0) {
        dart.throw(new core.ArgumentError.new("Zero is not a valid field number."));
      }
    }
    mergeFixed32Field(number, value) {
      this[_ensureWritable]("mergeFixed32Field");
      this[_getField](number).addFixed32(value);
    }
    mergeFixed64Field(number, value) {
      this[_ensureWritable]("mergeFixed64Field");
      this[_getField](number).addFixed64(value);
    }
    mergeGroupField(number, value) {
      this[_ensureWritable]("mergeGroupField");
      this[_getField](number).addGroup(value);
    }
    mergeLengthDelimitedField(number, value) {
      this[_ensureWritable]("mergeLengthDelimitedField");
      this[_getField](number).addLengthDelimited(value);
    }
    mergeVarintField(number, value) {
      this[_ensureWritable]("mergeVarintField");
      this[_getField](number).addVarint(value);
    }
    [_getField](number) {
      this[_checkFieldNumber](number);
      if (dart.test(this[_isReadOnly])) if (!dart.test(this[_fields][$containsKey](number))) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/unknown_field_set.dart", 129, 29, "_fields.containsKey(number)");
      return this[_fields][$putIfAbsent](number, dart.fn(() => new protobuf.UnknownFieldSetField.new(), VoidToUnknownFieldSetField()));
    }
    _equals(other) {
      if (other == null) return false;
      if (!protobuf.UnknownFieldSet.is(other)) return false;
      let o = protobuf.UnknownFieldSet._check(other);
      return protobuf._areMapsEqual(o[_fields], this[_fields]);
    }
    get hashCode() {
      let hash = 0;
      this[_fields][$forEach](dart.fn((number, value) => {
        hash = 536870911 & 37 * hash + dart.notNull(number);
        hash = 536870911 & 53 * hash + dart.notNull(dart.hashCode(value));
      }, intAndObjectToNull()));
      return hash;
    }
    toString() {
      return this[_toString]("");
    }
    [_toString](indent) {
      let t1;
      let stringBuffer = new core.StringBuffer.new();
      for (let tag of protobuf._sorted(core.int, this[_fields][$keys])) {
        let field = this[_fields][$_get](tag);
        for (let value of field.values) {
          if (protobuf.UnknownFieldSet.is(value)) {
            t1 = stringBuffer;
            t1.write(dart.str(indent) + dart.str(tag) + ": {\n");
            t1.write(value[_toString](dart.str(indent) + "  "));
            t1.write(dart.str(indent) + "}\n");
            t1;
          } else {
            if (typed_data.ByteData.is(value)) {
              value = dart.dsend(value, 'getUint64', [0, typed_data.Endian.little]);
            }
            stringBuffer.write(dart.str(indent) + dart.str(tag) + ": " + dart.str(value) + "\n");
          }
        }
      }
      return stringBuffer.toString();
    }
    writeToCodedBufferWriter(output) {
      for (let key of this[_fields][$keys]) {
        this[_fields][$_get](key).writeTo(key, output);
      }
    }
    [_markReadOnly]() {
      if (dart.test(this[_isReadOnly])) return;
      this[_fields][$values][$forEach](dart.fn(f => f[_markReadOnly](), UnknownFieldSetFieldTovoid()));
      this[_isReadOnly] = true;
    }
    [_ensureWritable](methodName) {
      if (dart.test(this[_isReadOnly])) {
        protobuf.frozenMessageModificationHandler("UnknownFieldSet", methodName);
      }
    }
  };
  (protobuf.UnknownFieldSet.new = function() {
    this[_fields] = new (LinkedMapOfint$UnknownFieldSetField()).new();
    this[_isReadOnly] = false;
    ;
  }).prototype = protobuf.UnknownFieldSet.prototype;
  (protobuf.UnknownFieldSet._clone = function(unknownFieldSet) {
    this[_fields] = new (LinkedMapOfint$UnknownFieldSetField()).new();
    this[_isReadOnly] = false;
    this.mergeFromUnknownFieldSet(unknownFieldSet);
  }).prototype = protobuf.UnknownFieldSet.prototype;
  dart.addTypeTests(protobuf.UnknownFieldSet);
  dart.setMethodSignature(protobuf.UnknownFieldSet, () => ({
    __proto__: dart.getMethods(protobuf.UnknownFieldSet.__proto__),
    clone: dart.fnType(protobuf.UnknownFieldSet, []),
    asMap: dart.fnType(core.Map$(core.int, protobuf.UnknownFieldSetField), []),
    clear: dart.fnType(dart.void, []),
    getField: dart.fnType(protobuf.UnknownFieldSetField, [core.int]),
    hasField: dart.fnType(core.bool, [core.int]),
    addField: dart.fnType(dart.void, [core.int, protobuf.UnknownFieldSetField]),
    mergeField: dart.fnType(dart.void, [core.int, protobuf.UnknownFieldSetField]),
    mergeFieldFromBuffer: dart.fnType(core.bool, [core.int, protobuf.CodedBufferReader]),
    mergeFromCodedBufferReader: dart.fnType(dart.void, [protobuf.CodedBufferReader]),
    mergeFromUnknownFieldSet: dart.fnType(dart.void, [protobuf.UnknownFieldSet]),
    [_checkFieldNumber]: dart.fnType(dart.dynamic, [core.int]),
    mergeFixed32Field: dart.fnType(dart.void, [core.int, core.int]),
    mergeFixed64Field: dart.fnType(dart.void, [core.int, fixnum.Int64]),
    mergeGroupField: dart.fnType(dart.void, [core.int, protobuf.UnknownFieldSet]),
    mergeLengthDelimitedField: dart.fnType(dart.void, [core.int, core.List$(core.int)]),
    mergeVarintField: dart.fnType(dart.void, [core.int, fixnum.Int64]),
    [_getField]: dart.fnType(protobuf.UnknownFieldSetField, [core.int]),
    [_toString]: dart.fnType(core.String, [core.String]),
    writeToCodedBufferWriter: dart.fnType(dart.void, [protobuf.CodedBufferWriter]),
    [_markReadOnly]: dart.fnType(dart.void, []),
    [_ensureWritable]: dart.fnType(dart.void, [core.String])
  }));
  dart.setGetterSignature(protobuf.UnknownFieldSet, () => ({
    __proto__: dart.getGetters(protobuf.UnknownFieldSet.__proto__),
    isEmpty: core.bool,
    isNotEmpty: core.bool
  }));
  dart.setLibraryUri(protobuf.UnknownFieldSet, "package:protobuf/protobuf.dart");
  dart.setFieldSignature(protobuf.UnknownFieldSet, () => ({
    __proto__: dart.getFields(protobuf.UnknownFieldSet.__proto__),
    [_fields]: dart.finalFieldType(core.Map$(core.int, protobuf.UnknownFieldSetField)),
    [_isReadOnly]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(protobuf.UnknownFieldSet, ['_equals', 'toString']);
  dart.defineExtensionAccessors(protobuf.UnknownFieldSet, ['hashCode']);
  dart.defineLazy(protobuf.UnknownFieldSet, {
    /*protobuf.UnknownFieldSet.emptyUnknownFieldSet*/get emptyUnknownFieldSet() {
      let t1;
      return t1 = new protobuf.UnknownFieldSet.new(), t1[_markReadOnly](), t1;
    }
  });
  const _lengthDelimited = dart.privateName(protobuf, "_lengthDelimited");
  const _varints = dart.privateName(protobuf, "_varints");
  const _fixed32s = dart.privateName(protobuf, "_fixed32s");
  const _fixed64s = dart.privateName(protobuf, "_fixed64s");
  const _groups = dart.privateName(protobuf, "_groups");
  protobuf.UnknownFieldSetField = class UnknownFieldSetField extends core.Object {
    get lengthDelimited() {
      return this[_lengthDelimited];
    }
    get varints() {
      return this[_varints];
    }
    get fixed32s() {
      return this[_fixed32s];
    }
    get fixed64s() {
      return this[_fixed64s];
    }
    get groups() {
      return this[_groups];
    }
    [_markReadOnly]() {
      if (dart.test(this[_isReadOnly])) return;
      this[_isReadOnly] = true;
      this[_lengthDelimited] = ListOfListOfint().unmodifiable(this[_lengthDelimited]);
      this[_varints] = ListOfInt64().unmodifiable(this[_varints]);
      this[_fixed32s] = ListOfint().unmodifiable(this[_fixed32s]);
      this[_fixed64s] = ListOfInt64().unmodifiable(this[_fixed64s]);
      this[_groups] = ListOfUnknownFieldSet().unmodifiable(this[_groups]);
    }
    _equals(other) {
      if (other == null) return false;
      if (!protobuf.UnknownFieldSetField.is(other)) return false;
      let o = protobuf.UnknownFieldSetField._check(other);
      if (this.lengthDelimited[$length] != o.lengthDelimited[$length]) return false;
      for (let i = 0; i < dart.notNull(this.lengthDelimited[$length]); i = i + 1) {
        if (!dart.test(protobuf._areListsEqual(o.lengthDelimited[$_get](i), this.lengthDelimited[$_get](i)))) {
          return false;
        }
      }
      if (!dart.test(protobuf._areListsEqual(o.varints, this.varints))) return false;
      if (!dart.test(protobuf._areListsEqual(o.fixed32s, this.fixed32s))) return false;
      if (!dart.test(protobuf._areListsEqual(o.fixed64s, this.fixed64s))) return false;
      if (!dart.test(protobuf._areListsEqual(o.groups, this.groups))) return false;
      return true;
    }
    get hashCode() {
      let hash = 0;
      for (let value of this.lengthDelimited) {
        for (let i = 0; i < dart.notNull(value[$length]); i = i + 1) {
          hash = 536870911 & hash + dart.notNull(value[$_get](i));
          hash = 536870911 & hash + ((524287 & hash) << 10);
          hash = (hash ^ hash[$rightShift](6)) >>> 0;
        }
        hash = 536870911 & hash + ((67108863 & hash) << 3);
        hash = (hash ^ hash[$rightShift](11)) >>> 0;
        hash = 536870911 & hash + ((16383 & hash) << 15);
      }
      for (let value of this.varints) {
        hash = 536870911 & hash + 7 * dart.notNull(dart.hashCode(value));
      }
      for (let value of this.fixed32s) {
        hash = 536870911 & hash + 37 * dart.hashCode(value);
      }
      for (let value of this.fixed64s) {
        hash = 536870911 & hash + 53 * dart.notNull(dart.hashCode(value));
      }
      for (let value of this.groups) {
        hash = 536870911 & hash + dart.notNull(dart.hashCode(value));
      }
      return hash;
    }
    get values() {
      let t1;
      t1 = [];
      t1[$addAll](this.lengthDelimited);
      t1[$addAll](this.varints);
      t1[$addAll](this.fixed32s);
      t1[$addAll](this.fixed64s);
      t1[$addAll](this.groups);
      return t1;
    }
    writeTo(fieldNumber, output) {
      function write(type, value) {
        output.writeField(fieldNumber, core.int._check(type), value);
      }
      dart.fn(write, dynamicAnddynamicToNull());
      write(65538, this.varints);
      write(131074, this.fixed32s);
      write(262146, this.fixed64s);
      write(34, this.lengthDelimited);
      write(1026, this.groups);
    }
    addGroup(value) {
      this.groups[$add](value);
    }
    addLengthDelimited(value) {
      this.lengthDelimited[$add](value);
    }
    addFixed32(value) {
      this.fixed32s[$add](value);
    }
    addFixed64(value) {
      this.fixed64s[$add](value);
    }
    addVarint(value) {
      this.varints[$add](value);
    }
    hasRequiredFields() {
      return false;
    }
    isInitialized() {
      return true;
    }
    get length() {
      return this.values[$length];
    }
  };
  (protobuf.UnknownFieldSetField.new = function() {
    this[_lengthDelimited] = JSArrayOfListOfint().of([]);
    this[_varints] = JSArrayOfInt64().of([]);
    this[_fixed32s] = JSArrayOfint().of([]);
    this[_fixed64s] = JSArrayOfInt64().of([]);
    this[_groups] = JSArrayOfUnknownFieldSet().of([]);
    this[_isReadOnly] = false;
    ;
  }).prototype = protobuf.UnknownFieldSetField.prototype;
  dart.addTypeTests(protobuf.UnknownFieldSetField);
  dart.setMethodSignature(protobuf.UnknownFieldSetField, () => ({
    __proto__: dart.getMethods(protobuf.UnknownFieldSetField.__proto__),
    [_markReadOnly]: dart.fnType(dart.void, []),
    writeTo: dart.fnType(dart.void, [core.int, protobuf.CodedBufferWriter]),
    addGroup: dart.fnType(dart.void, [protobuf.UnknownFieldSet]),
    addLengthDelimited: dart.fnType(dart.void, [core.List$(core.int)]),
    addFixed32: dart.fnType(dart.void, [core.int]),
    addFixed64: dart.fnType(dart.void, [fixnum.Int64]),
    addVarint: dart.fnType(dart.void, [fixnum.Int64]),
    hasRequiredFields: dart.fnType(core.bool, []),
    isInitialized: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(protobuf.UnknownFieldSetField, () => ({
    __proto__: dart.getGetters(protobuf.UnknownFieldSetField.__proto__),
    lengthDelimited: core.List$(core.List$(core.int)),
    varints: core.List$(fixnum.Int64),
    fixed32s: core.List$(core.int),
    fixed64s: core.List$(fixnum.Int64),
    groups: core.List$(protobuf.UnknownFieldSet),
    values: core.List,
    length: core.int
  }));
  dart.setLibraryUri(protobuf.UnknownFieldSetField, "package:protobuf/protobuf.dart");
  dart.setFieldSignature(protobuf.UnknownFieldSetField, () => ({
    __proto__: dart.getFields(protobuf.UnknownFieldSetField.__proto__),
    [_lengthDelimited]: dart.fieldType(core.List$(core.List$(core.int))),
    [_varints]: dart.fieldType(core.List$(fixnum.Int64)),
    [_fixed32s]: dart.fieldType(core.List$(core.int)),
    [_fixed64s]: dart.fieldType(core.List$(fixnum.Int64)),
    [_groups]: dart.fieldType(core.List$(protobuf.UnknownFieldSet)),
    [_isReadOnly]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(protobuf.UnknownFieldSetField, ['_equals']);
  dart.defineExtensionAccessors(protobuf.UnknownFieldSetField, ['hashCode']);
  protobuf._HashUtils = class _HashUtils extends core.Object {
    static _combine(hash, value) {
      hash = 536870911 & dart.notNull(hash) + dart.notNull(value);
      hash = 536870911 & dart.notNull(hash) + ((524287 & dart.notNull(hash)) << 10);
      return (dart.notNull(hash) ^ hash[$rightShift](6)) >>> 0;
    }
    static _finish(hash) {
      hash = 536870911 & dart.notNull(hash) + ((67108863 & dart.notNull(hash)) << 3);
      hash = (dart.notNull(hash) ^ hash[$rightShift](11)) >>> 0;
      return 536870911 & dart.notNull(hash) + ((16383 & dart.notNull(hash)) << 15);
    }
    static _hashObjects(objects) {
      return protobuf._HashUtils._finish(objects[$fold](core.int, 0, dart.fn((h, i) => protobuf._HashUtils._combine(h, dart.hashCode(i)), intAnddynamicToint())));
    }
    static _hash2(a, b) {
      return protobuf._HashUtils._finish(protobuf._HashUtils._combine(protobuf._HashUtils._combine(0, dart.hashCode(a)), dart.hashCode(b)));
    }
  };
  (protobuf._HashUtils.new = function() {
    ;
  }).prototype = protobuf._HashUtils.prototype;
  dart.addTypeTests(protobuf._HashUtils);
  dart.setLibraryUri(protobuf._HashUtils, "package:protobuf/protobuf.dart");
  let C13;
  let C14;
  let C15;
  protobuf.makeLongInt = function makeLongInt(n) {
    return fixnum.Int64.new(n);
  };
  protobuf.parseLongInt = function parseLongInt(text) {
    if (text[$startsWith]("0x")) return fixnum.Int64.parseHex(text[$substring](2));
    if (text[$startsWith]("+0x")) return fixnum.Int64.parseHex(text[$substring](3));
    if (text[$startsWith]("-0x")) return fixnum.Int64.parseHex(text[$substring](3))._negate();
    return fixnum.Int64.parseInt(text);
  };
  protobuf._writeToCodedBufferWriter = function _writeToCodedBufferWriter(fs, out) {
    for (let fi of fs[_infosSortedByTag]) {
      let value = fs[_values][$_get](fi.index);
      if (value == null) continue;
      out.writeField(fi.tagNumber, fi.type, value);
    }
    if (dart.test(fs[_hasExtensions])) {
      for (let tagNumber of protobuf._sorted(core.int, fs[_extensions][_tagNumbers])) {
        let fi = fs[_extensions][_getInfoOrNull](tagNumber);
        out.writeField(tagNumber, fi.type, fs[_extensions][_getFieldOrNull](fi));
      }
    }
    if (dart.test(fs[_hasUnknownFields])) {
      fs[_unknownFields].writeToCodedBufferWriter(out);
    }
  };
  protobuf._mergeFromCodedBufferReader = function _mergeFromCodedBufferReader(fs, input, registry) {
    if (!(registry != null)) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/coded_buffer.dart", 31, 10, "registry != null");
    while (true) {
      let tag = input.readTag();
      if (tag === 0) return;
      let wireType = dart.notNull(tag) & 7;
      let tagNumber = tag[$rightShift](3);
      let fi = fs[_nonExtensionInfo](tagNumber);
      if (fi == null) {
        fi = registry.getExtension(fs[_messageName], tagNumber);
      }
      if (fi == null || !dart.test(protobuf._wireTypeMatches(fi.type, wireType))) {
        if (!dart.test(fs[_ensureUnknownFields]().mergeFieldFromBuffer(tag, input))) {
          return;
        }
        continue;
      }
      let fieldType = fi.type;
      fieldType = (dart.notNull(fieldType) & ~(4 | 1) >>> 0) >>> 0;
      switch (fieldType) {
        case 16:
        {
          fs[_setFieldUnchecked](fi, input.readBool());
          break;
        }
        case 32:
        {
          fs[_setFieldUnchecked](fi, input.readBytes());
          break;
        }
        case 64:
        {
          fs[_setFieldUnchecked](fi, input.readString());
          break;
        }
        case 256:
        {
          fs[_setFieldUnchecked](fi, input.readFloat());
          break;
        }
        case 128:
        {
          fs[_setFieldUnchecked](fi, input.readDouble());
          break;
        }
        case 512:
        {
          let rawValue = input.readEnum();
          let value = fs[_meta][_decodeEnum](tagNumber, registry, rawValue);
          if (value == null) {
            let unknown = fs[_ensureUnknownFields]();
            unknown.mergeVarintField(tagNumber, fixnum.Int64.new(rawValue));
          } else {
            fs[_setFieldUnchecked](fi, value);
          }
          break;
        }
        case 1024:
        {
          let subMessage = fs[_meta][_makeEmptyMessage](tagNumber, registry);
          let oldValue = fs[_getFieldOrNull](fi);
          if (oldValue != null) {
            subMessage.mergeFromMessage(protobuf.GeneratedMessage._check(oldValue));
          }
          input.readGroup(tagNumber, subMessage, registry);
          fs[_setFieldUnchecked](fi, subMessage);
          break;
        }
        case 2048:
        {
          fs[_setFieldUnchecked](fi, input.readInt32());
          break;
        }
        case 4096:
        {
          fs[_setFieldUnchecked](fi, input.readInt64());
          break;
        }
        case 8192:
        {
          fs[_setFieldUnchecked](fi, input.readSint32());
          break;
        }
        case 16384:
        {
          fs[_setFieldUnchecked](fi, input.readSint64());
          break;
        }
        case 32768:
        {
          fs[_setFieldUnchecked](fi, input.readUint32());
          break;
        }
        case 65536:
        {
          fs[_setFieldUnchecked](fi, input.readUint64());
          break;
        }
        case 131072:
        {
          fs[_setFieldUnchecked](fi, input.readFixed32());
          break;
        }
        case 262144:
        {
          fs[_setFieldUnchecked](fi, input.readFixed64());
          break;
        }
        case 524288:
        {
          fs[_setFieldUnchecked](fi, input.readSfixed32());
          break;
        }
        case 1048576:
        {
          fs[_setFieldUnchecked](fi, input.readSfixed64());
          break;
        }
        case 2097152:
        {
          let subMessage = fs[_meta][_makeEmptyMessage](tagNumber, registry);
          let oldValue = fs[_getFieldOrNull](fi);
          if (oldValue != null) {
            subMessage.mergeFromMessage(protobuf.GeneratedMessage._check(oldValue));
          }
          input.readMessage(subMessage, registry);
          fs[_setFieldUnchecked](fi, subMessage);
          break;
        }
        case 18:
        {
          protobuf._readPackable(fs, input, wireType, fi, dart.bind(input, 'readBool'));
          break;
        }
        case 34:
        {
          fs[_ensureRepeatedField](dart.dynamic, fi)[$add](input.readBytes());
          break;
        }
        case 66:
        {
          fs[_ensureRepeatedField](dart.dynamic, fi)[$add](input.readString());
          break;
        }
        case 258:
        {
          protobuf._readPackable(fs, input, wireType, fi, dart.bind(input, 'readFloat'));
          break;
        }
        case 130:
        {
          protobuf._readPackable(fs, input, wireType, fi, dart.bind(input, 'readDouble'));
          break;
        }
        case 514:
        {
          protobuf._readPackableToListEnum(fs, input, wireType, fi, tagNumber, registry);
          break;
        }
        case 1026:
        {
          let subMessage = fs[_meta][_makeEmptyMessage](tagNumber, registry);
          input.readGroup(tagNumber, subMessage, registry);
          fs[_ensureRepeatedField](dart.dynamic, fi)[$add](subMessage);
          break;
        }
        case 2050:
        {
          protobuf._readPackable(fs, input, wireType, fi, dart.bind(input, 'readInt32'));
          break;
        }
        case 4098:
        {
          protobuf._readPackable(fs, input, wireType, fi, dart.bind(input, 'readInt64'));
          break;
        }
        case 8194:
        {
          protobuf._readPackable(fs, input, wireType, fi, dart.bind(input, 'readSint32'));
          break;
        }
        case 16386:
        {
          protobuf._readPackable(fs, input, wireType, fi, dart.bind(input, 'readSint64'));
          break;
        }
        case 32770:
        {
          protobuf._readPackable(fs, input, wireType, fi, dart.bind(input, 'readUint32'));
          break;
        }
        case 65538:
        {
          protobuf._readPackable(fs, input, wireType, fi, dart.bind(input, 'readUint64'));
          break;
        }
        case 131074:
        {
          protobuf._readPackable(fs, input, wireType, fi, dart.bind(input, 'readFixed32'));
          break;
        }
        case 262146:
        {
          protobuf._readPackable(fs, input, wireType, fi, dart.bind(input, 'readFixed64'));
          break;
        }
        case 524290:
        {
          protobuf._readPackable(fs, input, wireType, fi, dart.bind(input, 'readSfixed32'));
          break;
        }
        case 1048578:
        {
          protobuf._readPackable(fs, input, wireType, fi, dart.bind(input, 'readSfixed64'));
          break;
        }
        case 2097154:
        {
          let subMessage = fs[_meta][_makeEmptyMessage](tagNumber, registry);
          input.readMessage(subMessage, registry);
          fs[_ensureRepeatedField](dart.dynamic, fi)[$add](subMessage);
          break;
        }
        case 6291456:
        {
          fs[_ensureMapField](dart.dynamic, dart.dynamic, protobuf.MapFieldInfo._check(fi))[_mergeEntry](input, registry);
          break;
        }
        default:
        {
          dart.throw("Unknown field type " + dart.str(fieldType));
        }
      }
    }
  };
  protobuf._readPackable = function _readPackable(fs, input, wireType, fi, readFunc) {
    function readToList(list) {
      return list[$add](dart.dcall(readFunc, []));
    }
    dart.fn(readToList, ListTovoid());
    protobuf._readPackableToList(fs, input, wireType, fi, readToList);
  };
  protobuf._readPackableToListEnum = function _readPackableToListEnum(fs, input, wireType, fi, tagNumber, registry) {
    function readToList(list) {
      let rawValue = input.readEnum();
      let value = fs[_meta][_decodeEnum](tagNumber, registry, rawValue);
      if (value == null) {
        let unknown = fs[_ensureUnknownFields]();
        unknown.mergeVarintField(tagNumber, fixnum.Int64.new(rawValue));
      } else {
        list[$add](value);
      }
    }
    dart.fn(readToList, ListTovoid());
    protobuf._readPackableToList(fs, input, wireType, fi, readToList);
  };
  protobuf._readPackableToList = function _readPackableToList(fs, input, wireType, fi, readToList) {
    let list = fs[_ensureRepeatedField](dart.dynamic, fi);
    if (wireType === 2) {
      input[_withLimit](input.readInt32(), dart.fn(() => {
        while (!dart.test(input.isAtEnd())) {
          dart.dcall(readToList, [list]);
        }
      }, VoidToNull()));
    } else {
      dart.dcall(readToList, [list]);
    }
  };
  protobuf._encodeZigZag32 = function _encodeZigZag32(value) {
    return (dart.notNull(value) << 1 ^ value[$rightShift](31)) >>> 0;
  };
  protobuf._encodeZigZag64 = function _encodeZigZag64(value) {
    return value['<<'](1)['^'](value['>>'](63));
  };
  protobuf._reparseMessage = function _reparseMessage(T, message, extensionRegistry) {
    let t1, t1$;
    let result = null;
    function ensureResult() {
      if (result == null) {
        result == null ? result = T._check(message.createEmptyInstance()) : null;
        result[_fieldSet][_shallowCopyValues](message[_fieldSet]);
      }
      return result;
    }
    dart.fn(ensureResult, dart.fnType(T, []));
    let resultUnknownFields = null;
    function ensureUnknownFields() {
      let t1;
      t1 = resultUnknownFields;
      return t1 == null ? resultUnknownFields = ensureResult()[_fieldSet][_unknownFields] : t1;
    }
    dart.fn(ensureUnknownFields, VoidToUnknownFieldSet());
    let messageUnknownFields = message[_fieldSet][_unknownFields];
    if (messageUnknownFields != null) {
      let codedBufferWriter = new protobuf.CodedBufferWriter.new();
      t1 = extensionRegistry[_extensions][$_get](message.info_.qualifiedMessageName);
      t1 == null ? null : t1[$forEach](dart.fn((tagNumber, extension) => {
        let unknownField = messageUnknownFields[_fields][$_get](tagNumber);
        if (unknownField != null) {
          unknownField.writeTo(tagNumber, codedBufferWriter);
          ensureUnknownFields()[_fields][$remove](tagNumber);
        }
      }, intAndExtensionToNull()));
      if (dart.test(codedBufferWriter.toBuffer()[$isNotEmpty])) {
        ensureResult().mergeFromBuffer(codedBufferWriter.toBuffer(), extensionRegistry);
      }
    }
    message[_fieldSet][_meta].byIndex[$forEach](dart.fn(field => {
      let resultEntries = null;
      function ensureEntries() {
        let t1;
        return protobuf.PbList._check((t1 = resultEntries, t1 == null ? resultEntries = protobuf.PbList._check(ensureResult()[_fieldSet][_values][$_get](field.index)) : t1));
      }
      dart.fn(ensureEntries, VoidToPbList());
      let resultMap = null;
      function ensureMap() {
        let t1;
        return protobuf.PbMap._check((t1 = resultMap, t1 == null ? resultMap = protobuf.PbMap._check(ensureResult()[_fieldSet][_values][$_get](field.index)) : t1));
      }
      dart.fn(ensureMap, VoidToPbMap());
      if (dart.test(field.isRepeated)) {
        let messageEntries = message[_fieldSet][_values][$_get](field.index);
        if (messageEntries == null) return;
        if (dart.test(field.isGroupOrMessage)) {
          for (let i = 0; i < dart.notNull(core.num._check(dart.dload(messageEntries, 'length'))); i = i + 1) {
            let entry = protobuf.GeneratedMessage._check(dart.dsend(messageEntries, '_get', [i]));
            let reparsedEntry = protobuf._reparseMessage(protobuf.GeneratedMessage, entry, extensionRegistry);
            if (entry != reparsedEntry) {
              ensureEntries()._set(i, reparsedEntry);
            }
          }
        }
      } else if (protobuf.MapFieldInfo.is(field)) {
        let messageMap = message[_fieldSet][_values][$_get](field.index);
        if (messageMap == null) return;
        if (dart.test(protobuf._isGroupOrMessage(field.valueFieldType))) {
          for (let key of core.Iterable._check(dart.dload(messageMap, 'keys'))) {
            let value = protobuf.GeneratedMessage._check(dart.dsend(messageMap, '_get', [key]));
            let reparsedValue = protobuf._reparseMessage(protobuf.GeneratedMessage, value, extensionRegistry);
            if (value != reparsedValue) {
              ensureMap()._set(key, reparsedValue);
            }
          }
        }
      } else if (dart.test(field.isGroupOrMessage)) {
        let messageSubField = message[_fieldSet][_values][$_get](field.index);
        if (messageSubField == null) return;
        let reparsedSubField = protobuf._reparseMessage(protobuf.GeneratedMessage, protobuf.GeneratedMessage._check(messageSubField), extensionRegistry);
        if (!core.identical(messageSubField, reparsedSubField)) {
          ensureResult()[_fieldSet][_values][$_set](field.index, reparsedSubField);
        }
      }
    }, FieldInfoToNull()));
    if (result != null && dart.test(message.isFrozen)) {
      result.freeze();
    }
    t1$ = result;
    return t1$ == null ? message : t1$;
  };
  protobuf._getFieldError = function _getFieldError(fieldType, value) {
    switch (protobuf.PbFieldType._baseType(fieldType)) {
      case 16:
      {
        if (!(typeof value == 'boolean')) return "not type bool";
        return null;
      }
      case 32:
      {
        if (!core.List.is(value)) return "not List";
        return null;
      }
      case 64:
      {
        if (!(typeof value == 'string')) return "not type String";
        return null;
      }
      case 256:
      {
        if (!(typeof value == 'number')) return "not type double";
        if (!dart.test(protobuf._isFloat32(core.double._check(value)))) return "out of range for float";
        return null;
      }
      case 128:
      {
        if (!(typeof value == 'number')) return "not type double";
        return null;
      }
      case 512:
      {
        if (!protobuf.ProtobufEnum.is(value)) return "not type ProtobufEnum";
        return null;
      }
      case 2048:
      case 8192:
      case 524288:
      {
        if (!core.int.is(value)) return "not type int";
        if (!dart.test(protobuf._isSigned32(core.int._check(value)))) return "out of range for signed 32-bit int";
        return null;
      }
      case 32768:
      case 131072:
      {
        if (!core.int.is(value)) return "not type int";
        if (!dart.test(protobuf._isUnsigned32(core.int._check(value)))) return "out of range for unsigned 32-bit int";
        return null;
      }
      case 4096:
      case 16384:
      case 65536:
      case 262144:
      case 1048576:
      {
        if (!fixnum.Int64.is(value)) return "not Int64";
        return null;
      }
      case 1024:
      case 2097152:
      {
        if (!protobuf.GeneratedMessage.is(value)) return "not a GeneratedMessage";
        return null;
      }
      default:
      {
        return "field has unknown type " + dart.str(fieldType);
      }
    }
  };
  protobuf.checkItemFailed = function checkItemFailed(val, className) {
    dart.throw(new core.ArgumentError.new("Value (" + dart.str(val) + ") is not an instance of " + dart.str(className)));
  };
  protobuf.getCheckFunction = function getCheckFunction(fieldType) {
    switch ((dart.notNull(fieldType) & ~7 >>> 0) >>> 0) {
      case 16:
      case 32:
      case 64:
      case 128:
      case 512:
      case 1024:
      case 2097152:
      case 4096:
      case 16384:
      case 1048576:
      case 65536:
      case 262144:
      {
        return C1 || CT.C1;
      }
      case 256:
      {
        return C13 || CT.C13;
      }
      case 2048:
      case 8192:
      case 524288:
      {
        return C14 || CT.C14;
      }
      case 32768:
      case 131072:
      {
        return C15 || CT.C15;
      }
    }
    dart.throw(new core.ArgumentError.new("check function not implemented: " + dart.str(fieldType)));
  };
  protobuf._checkNotNull = function _checkNotNull$(val) {
    if (val == null) {
      dart.throw(new core.ArgumentError.new("Can't add a null to a repeated field"));
    }
  };
  protobuf._checkFloat = function _checkFloat(val) {
    if (!dart.test(protobuf._isFloat32(core.double._check(val)))) dart.throw(protobuf._createFieldRangeError(val, "a float"));
  };
  protobuf._checkSigned32 = function _checkSigned32(val) {
    if (!dart.test(protobuf._isSigned32(core.int._check(val)))) dart.throw(protobuf._createFieldRangeError(val, "a signed int32"));
  };
  protobuf._checkUnsigned32 = function _checkUnsigned32(val) {
    if (!dart.test(protobuf._isUnsigned32(core.int._check(val)))) {
      dart.throw(protobuf._createFieldRangeError(val, "an unsigned int32"));
    }
  };
  protobuf._createFieldRangeError = function _createFieldRangeError(val, wantedType) {
    return new core.RangeError.new("Value (" + dart.str(val) + ") is not " + dart.str(wantedType));
  };
  protobuf._isSigned32 = function _isSigned32(value) {
    return -2147483648 <= dart.notNull(value) && dart.notNull(value) <= 2147483647;
  };
  protobuf._isUnsigned32 = function _isUnsigned32(value) {
    return 0 <= dart.notNull(value) && dart.notNull(value) <= 4294967295;
  };
  protobuf._isFloat32 = function _isFloat32(value) {
    return value[$isNaN] || value[$isInfinite] || -3.4028234663852886e+38 <= dart.notNull(value) && dart.notNull(value) <= 3.4028234663852886e+38;
  };
  protobuf._unCamelCase = function _unCamelCase(name) {
    return name[$replaceAllMapped](protobuf._upperCase, dart.fn(match => "_" + match.group(0)[$toLowerCase](), MatchToString()));
  };
  protobuf.defaultFrozenMessageModificationHandler = function defaultFrozenMessageModificationHandler(messageName, methodName) {
    if (methodName === void 0) methodName = null;
    if (methodName != null) {
      dart.throw(new core.UnsupportedError.new("Attempted to call " + dart.str(methodName) + " on a read-only message (" + dart.str(messageName) + ")"));
    }
    dart.throw(new core.UnsupportedError.new("Attempted to change a read-only message (" + dart.str(messageName) + ")"));
  };
  protobuf._isRepeated = function _isRepeated(fieldType) {
    return (dart.notNull(fieldType) & 2) !== 0;
  };
  protobuf._isRequired = function _isRequired(fieldType) {
    return (dart.notNull(fieldType) & 1) !== 0;
  };
  protobuf._isEnum = function _isEnum(fieldType) {
    return protobuf.PbFieldType._baseType(fieldType) === 512;
  };
  protobuf._isGroupOrMessage = function _isGroupOrMessage(fieldType) {
    return (dart.notNull(fieldType) & (1024 | 2097152) >>> 0) !== 0;
  };
  protobuf._isMapField = function _isMapField(fieldType) {
    return (dart.notNull(fieldType) & 4194304) !== 0;
  };
  protobuf._writeToJsonMap = function _writeToJsonMap(fs) {
    function convertToMap(fieldValue, fieldType) {
      let baseType = protobuf.PbFieldType._baseType(fieldType);
      if (dart.test(protobuf._isRepeated(fieldType))) {
        return core.List.from(core.Iterable._check(dart.dsend(fieldValue, 'map', [dart.fn(e => convertToMap(e, baseType), dynamicTodynamic())])));
      }
      switch (baseType) {
        case 16:
        case 64:
        case 256:
        case 128:
        case 2048:
        case 8192:
        case 32768:
        case 131072:
        case 524288:
        {
          return fieldValue;
        }
        case 32:
        {
          return convert.base64Encode(ListOfint().as(fieldValue));
        }
        case 512:
        {
          return dart.dload(fieldValue, 'value');
        }
        case 4096:
        case 16384:
        case 1048576:
        {
          return dart.toString(fieldValue);
        }
        case 65536:
        case 262144:
        {
          return dart.dsend(fieldValue, 'toStringUnsigned', []);
        }
        case 1024:
        case 2097152:
        {
          return dart.dsend(fieldValue, 'writeToJsonMap', []);
        }
        default:
        {
          dart.throw("Unknown type " + dart.str(fieldType));
        }
      }
    }
    dart.fn(convertToMap, dynamicAndintTodynamic());
    function _writeMap(fieldValue, fi) {
      return core.List.from(core.Iterable._check(dart.dsend(dart.dload(fieldValue, 'entries'), 'map', [dart.fn(e => new (IdentityMapOfString$dynamic()).from([dart.str(1), convertToMap(e.key, fi.keyFieldType), dart.str(2), convertToMap(e.value, fi.valueFieldType)]), MapEntryToMapOfString$dynamic())])));
    }
    dart.fn(_writeMap, dynamicAndMapFieldInfoToList());
    let result = new (IdentityMapOfString$dynamic()).new();
    for (let fi of fs[_infosSortedByTag]) {
      let value = fs[_values][$_get](fi.index);
      if (value == null || core.List.is(value) && dart.test(value[$isEmpty])) {
        continue;
      }
      if (dart.test(protobuf._isMapField(fi.type))) {
        result[$_set](dart.str(fi.tagNumber), _writeMap(value, protobuf.MapFieldInfo._check(fi)));
        continue;
      }
      result[$_set](dart.str(fi.tagNumber), convertToMap(value, fi.type));
    }
    if (dart.test(fs[_hasExtensions])) {
      for (let tagNumber of protobuf._sorted(core.int, fs[_extensions][_tagNumbers])) {
        let value = fs[_extensions][_values][$_get](tagNumber);
        if (core.List.is(value) && dart.test(value[$isEmpty])) {
          continue;
        }
        let fi = fs[_extensions][_getInfoOrNull](tagNumber);
        result[$_set](dart.str(tagNumber), convertToMap(value, fi.type));
      }
    }
    return result;
  };
  protobuf._mergeFromJsonMap = function _mergeFromJsonMap(fs, json, registry) {
    let keys = json[$keys];
    let meta = fs[_meta];
    for (let key of keys) {
      let fi = meta.byTagAsString[$_get](key);
      if (fi == null) {
        if (registry == null) continue;
        fi = registry.getExtension(fs[_messageName], core.int.parse(key));
        if (fi == null) continue;
      }
      if (dart.test(fi.isMapField)) {
        protobuf._appendJsonMap(fs, core.List._check(json[$_get](key)), protobuf.MapFieldInfo._check(fi), registry);
      } else if (dart.test(fi.isRepeated)) {
        protobuf._appendJsonList(fs, core.List._check(json[$_get](key)), fi, registry);
      } else {
        protobuf._setJsonField(fs, json[$_get](key), fi, registry);
      }
    }
  };
  protobuf._appendJsonList = function _appendJsonList(fs, jsonList, fi, registry) {
    let repeated = fi[_ensureRepeatedField](fs);
    for (let i = 0, len = jsonList[$length]; i < dart.notNull(len); i = i + 1) {
      let value = jsonList[$_get](i);
      let convertedValue = protobuf._convertJsonValue(fs, value, fi.tagNumber, fi.type, registry);
      if (convertedValue != null) {
        repeated[$add](convertedValue);
      }
    }
  };
  protobuf._appendJsonMap = function _appendJsonMap(fs, jsonList, fi, registry) {
    let map = protobuf.PbMap._check(fi[_ensureMapField](fs));
    for (let t1 of jsonList) {
      let jsonEntry = MapOfString$dynamic()._check(t1);
      let entryFieldSet = map[_entryFieldSet]();
      let convertedKey = protobuf._convertJsonValue(entryFieldSet, jsonEntry[$_get](dart.str(1)), 1, fi.keyFieldType, registry);
      let convertedValue = protobuf._convertJsonValue(entryFieldSet, jsonEntry[$_get](dart.str(2)), 2, fi.valueFieldType, registry);
      map._set(convertedKey, convertedValue);
    }
  };
  protobuf._setJsonField = function _setJsonField(fs, json, fi, registry) {
    let value = protobuf._convertJsonValue(fs, json, fi.tagNumber, fi.type, registry);
    if (value == null) return;
    if (!dart.test(dart.fn(() => {
      fs[_validateField](fi, value);
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/json.dart", 146, 10, "() {\n    fs._validateField(fi, value);\n    return true;\n  }()");
    fs[_setFieldUnchecked](fi, value);
  };
  protobuf._convertJsonValue = function _convertJsonValue(fs, value, tagNumber, fieldType, registry) {
    let expectedType = null;
    switch (protobuf.PbFieldType._baseType(fieldType)) {
      case 16:
      {
        if (typeof value == 'boolean') {
          return value;
        } else if (typeof value == 'string') {
          if (value === "true") {
            return true;
          } else if (value === "false") {
            return false;
          }
        } else if (typeof value == 'number') {
          if (value === 1) {
            return true;
          } else if (value === 0) {
            return false;
          }
        }
        expectedType = "bool (true, false, \"true\", \"false\", 1, 0)";
        break;
      }
      case 32:
      {
        if (typeof value == 'string') {
          return convert.base64Decode(value);
        }
        expectedType = "Base64 String";
        break;
      }
      case 64:
      {
        if (typeof value == 'string') {
          return value;
        }
        expectedType = "String";
        break;
      }
      case 256:
      case 128:
      {
        if (typeof value == 'number') {
          return value;
        } else if (typeof value == 'number') {
          return value[$toDouble]();
        } else if (typeof value == 'string') {
          return core.double.parse(value);
        }
        expectedType = "num or stringified num";
        break;
      }
      case 512:
      {
        if (typeof value == 'string') {
          value = core.int.parse(core.String._check(value));
        }
        if (core.int.is(value)) {
          return fs[_meta][_decodeEnum](tagNumber, registry, value);
        }
        expectedType = "int or stringified int";
        break;
      }
      case 2048:
      case 8192:
      case 32768:
      case 131072:
      case 524288:
      {
        if (core.int.is(value)) return value;
        if (typeof value == 'string') return core.int.parse(value);
        expectedType = "int or stringified int";
        break;
      }
      case 4096:
      case 16384:
      case 65536:
      case 262144:
      case 1048576:
      {
        if (core.int.is(value)) return fixnum.Int64.new(value);
        if (typeof value == 'string') return fixnum.Int64.parseInt(value);
        expectedType = "int or stringified int";
        break;
      }
      case 1024:
      case 2097152:
      {
        if (core.Map.is(value)) {
          let messageValue = MapOfString$dynamic()._check(value);
          let subMessage = fs[_meta][_makeEmptyMessage](tagNumber, registry);
          protobuf._mergeFromJsonMap(subMessage[_fieldSet], messageValue, registry);
          return subMessage;
        }
        expectedType = "nested message or group";
        break;
      }
      default:
      {
        dart.throw(new core.ArgumentError.new("Unknown type " + dart.str(fieldType)));
      }
    }
    dart.throw(new core.ArgumentError.new("Expected type " + dart.str(expectedType) + ", got " + dart.str(value)));
  };
  protobuf._writeToProto3Json = function _writeToProto3Json(fs, typeRegistry) {
    function convertToMapKey(key, keyType) {
      let baseType = protobuf.PbFieldType._baseType(keyType);
      if (!!dart.test(protobuf._isRepeated(keyType))) dart.assertFailed(null, "org-dartlang-app:///packages/protobuf/src/protobuf/proto3_json.dart", 11, 12, "!_isRepeated(keyType)");
      switch (baseType) {
        case 16:
        {
          return dart.dtest(key) ? "true" : "false";
        }
        case 64:
        {
          return core.String._check(key);
        }
        case 65536:
        {
          return fixnum.Int64.as(key).toStringUnsigned();
        }
        case 2048:
        case 8192:
        case 32768:
        case 131072:
        case 524288:
        case 4096:
        case 16384:
        case 1048576:
        case 262144:
        {
          return dart.toString(key);
        }
        default:
        {
          dart.throw(new core.StateError.new("Not a valid key type " + dart.str(keyType)));
        }
      }
    }
    dart.fn(convertToMapKey, dynamicAndintToString());
    function valueToProto3Json(fieldValue, fieldType) {
      if (fieldValue == null) return null;
      if (dart.test(protobuf._isGroupOrMessage(fieldType))) {
        return protobuf._writeToProto3Json(protobuf.GeneratedMessage.as(fieldValue)[_fieldSet], typeRegistry);
      } else if (dart.test(protobuf._isEnum(fieldType))) {
        return protobuf.ProtobufEnum.as(fieldValue).name;
      } else {
        let baseType = protobuf.PbFieldType._baseType(fieldType);
        switch (baseType) {
          case 16:
          {
            return dart.dtest(fieldValue) ? true : false;
          }
          case 64:
          {
            return fieldValue;
          }
          case 2048:
          case 8192:
          case 32768:
          case 131072:
          case 524288:
          {
            return fieldValue;
          }
          case 4096:
          case 16384:
          case 1048576:
          case 262144:
          {
            return dart.toString(fieldValue);
          }
          case 256:
          case 128:
          {
            let value = core.double._check(fieldValue);
            if (value[$isNaN]) return "NaN";
            if (value[$isInfinite]) {
              if (value[$isNegative]) {
                return "-Infinity";
              } else {
                return "Infinity";
              }
            }
            return value;
          }
          case 65536:
          {
            return fixnum.Int64.as(fieldValue).toStringUnsigned();
          }
          case 32:
          {
            return convert.base64Encode(ListOfint()._check(fieldValue));
          }
          default:
          {
            dart.throw(new core.StateError.new("Invariant violation: unexpected value type " + dart.str(fieldType)));
          }
        }
      }
    }
    dart.fn(valueToProto3Json, dynamicAndintToObject());
    if (fs[_meta].toProto3Json != null) {
      return fs[_meta].toProto3Json(fs[_message$], typeRegistry);
    }
    let result = new (IdentityMapOfString$dynamic()).new();
    for (let fieldInfo of fs[_infosSortedByTag]) {
      let value = fs[_values][$_get](fieldInfo.index);
      if (value == null || core.List.is(value) && dart.test(value[$isEmpty])) {
        continue;
      }
      let jsonValue = null;
      if (dart.test(fieldInfo.isMapField)) {
        jsonValue = protobuf.PbMap.as(value).map(core.String, core.Object, dart.fn((key, entryValue) => {
          let mapEntryInfo = protobuf.MapFieldInfo.as(fieldInfo);
          return new (MapEntryOfString$Object()).__(convertToMapKey(key, mapEntryInfo.keyFieldType), valueToProto3Json(entryValue, mapEntryInfo.valueFieldType));
        }, dynamicAnddynamicToMapEntryOfString$Object()));
      } else if (dart.test(fieldInfo.isRepeated)) {
        jsonValue = protobuf.PbList.as(value).map(core.Object, dart.fn(element => valueToProto3Json(element, fieldInfo.type), dynamicToObject()))[$toList]();
      } else {
        jsonValue = valueToProto3Json(value, fieldInfo.type);
      }
      result[$_set](fieldInfo.name, jsonValue);
    }
    return result;
  };
  protobuf._mergeFromProto3Json = function _mergeFromProto3Json(json, fieldSet, typeRegistry, ignoreUnknownFields, supportNamesWithUnderscores, permissiveEnums) {
    let context = new json_parsing_context.JsonParsingContext.new(ignoreUnknownFields, supportNamesWithUnderscores, permissiveEnums);
    function recursionHelper(json, fieldSet) {
      function tryParse32Bit(s) {
        let t2;
        t2 = core.int.tryParse(s);
        return t2 == null ? dart.throw(context.parseException("expected integer", s)) : t2;
      }
      dart.fn(tryParse32Bit, StringToint());
      function check32BitSigned(n) {
        if (dart.notNull(n) < -2147483648 || dart.notNull(n) > 2147483647) {
          dart.throw(context.parseException("expected 32 bit unsigned integer", n));
        }
        return n;
      }
      dart.fn(check32BitSigned, intToint());
      function check32BitUnsigned(n) {
        if (dart.notNull(n) < 0 || dart.notNull(n) > 4294967295) {
          dart.throw(context.parseException("expected 32 bit unsigned integer", n));
        }
        return n;
      }
      dart.fn(check32BitUnsigned, intToint());
      function tryParse64Bit(s) {
        let result = null;
        try {
          result = fixnum.Int64.parseInt(s);
        } catch (e) {
          let ex = dart.getThrown(e);
          if (core.FormatException.is(ex)) {
            dart.throw(context.parseException("expected integer", json));
          } else
            throw e;
        }
        return result;
      }
      dart.fn(tryParse64Bit, StringToInt64());
      function convertProto3JsonValue(value, fieldInfo) {
        let t6, t6$;
        if (value == null) {
          return fieldInfo.makeDefault();
        }
        let fieldType = fieldInfo.type;
        switch (protobuf.PbFieldType._baseType(fieldType)) {
          case 16:
          {
            if (typeof value == 'boolean') {
              return value;
            }
            dart.throw(context.parseException("Expected bool value", json));
          }
          case 32:
          {
            if (typeof value == 'string') {
              let result = null;
              try {
                result = convert.base64Decode(value);
              } catch (e) {
                let ex = dart.getThrown(e);
                if (core.FormatException.is(ex)) {
                  dart.throw(context.parseException("Expected bytes encoded as base64 String", json));
                } else
                  throw e;
              }
              return result;
            }
            dart.throw(context.parseException("Expected bytes encoded as base64 String", value));
          }
          case 64:
          {
            if (typeof value == 'string') {
              return value;
            }
            dart.throw(context.parseException("Expected String value", value));
          }
          case 256:
          case 128:
          {
            if (typeof value == 'number') {
              return value;
            } else if (typeof value == 'number') {
              return value[$toDouble]();
            } else if (typeof value == 'string') {
              t6 = core.double.tryParse(value);
              return t6 == null ? dart.throw(context.parseException("Expected String to encode a double", value)) : t6;
            }
            dart.throw(context.parseException("Expected a double represented as a String or number", value));
          }
          case 512:
          {
            if (typeof value == 'string') {
              let result = dart.test(permissiveEnums) ? fieldInfo.enumValues[$firstWhere](dart.fn(e => protobuf._permissiveCompare(e.name, value), ProtobufEnumTobool()), {orElse: dart.fn(() => null, VoidToNull())}) : fieldInfo.enumValues[$firstWhere](dart.fn(e => e.name == value, ProtobufEnumTobool()), {orElse: dart.fn(() => null, VoidToNull())});
              if (result != null) return result;
              dart.throw(context.parseException("Unknown enum value", value));
            } else if (core.int.is(value)) {
              t6$ = fieldInfo.valueOf(value);
              return t6$ == null ? dart.throw(context.parseException("Unknown enum value", value)) : t6$;
            }
            dart.throw(context.parseException("Expected enum as a string or integer", value));
          }
          case 32768:
          {
            let result = null;
            if (core.int.is(value)) {
              result = value;
            } else if (typeof value == 'string') {
              result = tryParse32Bit(value);
            } else {
              dart.throw(context.parseException("Expected int or stringified int", value));
            }
            return check32BitUnsigned(result);
          }
          case 2048:
          case 8192:
          case 131072:
          case 524288:
          {
            let result = null;
            if (core.int.is(value)) {
              result = value;
            } else if (typeof value == 'string') {
              result = tryParse32Bit(value);
            } else {
              dart.throw(context.parseException("Expected int or stringified int", value));
            }
            check32BitSigned(result);
            return result;
          }
          case 65536:
          {
            let result = null;
            if (core.int.is(value)) {
              result = fixnum.Int64.new(value);
            } else if (typeof value == 'string') {
              result = tryParse64Bit(value);
            } else {
              dart.throw(context.parseException("Expected int or stringified int", value));
            }
            return result;
          }
          case 4096:
          case 16384:
          case 262144:
          case 1048576:
          {
            if (core.int.is(value)) return fixnum.Int64.new(value);
            if (typeof value == 'string') {
              let result = null;
              try {
                result = fixnum.Int64.parseInt(value);
              } catch (e$) {
                let ex$ = dart.getThrown(e$);
                if (core.FormatException.is(ex$)) {
                  dart.throw(context.parseException("Expected int or stringified int", value));
                } else
                  throw e$;
              }
              return result;
            }
            dart.throw(context.parseException("Expected int or stringified int", value));
          }
          case 1024:
          case 2097152:
          {
            let subMessage = fieldInfo.subBuilder();
            recursionHelper(value, subMessage[_fieldSet]);
            return subMessage;
          }
          default:
          {
            dart.throw(new core.StateError.new("Unknown type " + dart.str(fieldType)));
          }
        }
      }
      dart.fn(convertProto3JsonValue, ObjectAndFieldInfoToObject());
      function decodeMapKey(key, fieldType) {
        switch (protobuf.PbFieldType._baseType(fieldType)) {
          case 16:
          {
            switch (key) {
              case "true":
              {
                return true;
              }
              case "false":
              {
                return false;
              }
              default:
              {
                dart.throw(context.parseException("Wrong boolean key, should be one of (\"true\", \"false\")", key));
              }
            }
            dart.throw(new core.StateError.new("(Should have been) unreachable statement"));
          }
          case 64:
          {
            return key;
          }
          case 65536:
          {
            return tryParse64Bit(key);
          }
          case 4096:
          case 16384:
          case 1048576:
          case 262144:
          {
            return tryParse64Bit(key);
          }
          case 2048:
          case 8192:
          case 131072:
          case 524288:
          {
            return check32BitSigned(tryParse32Bit(key));
          }
          case 32768:
          {
            return check32BitUnsigned(tryParse32Bit(key));
          }
          default:
          {
            dart.throw(new core.StateError.new("Not a valid key type " + dart.str(fieldType)));
          }
        }
      }
      dart.fn(decodeMapKey, StringAndintToObject());
      if (json == null) {
        return;
      }
      let info = fieldSet[_meta];
      let wellKnownConverter = info.fromProto3Json;
      if (wellKnownConverter != null) {
        wellKnownConverter(fieldSet[_message$], json, typeRegistry, context);
      } else {
        if (core.Map.is(json)) {
          let byName = info.byName;
          json[$forEach](dart.fn((key, value) => {
            if (!(typeof key == 'string')) {
              dart.throw(context.parseException("Key was not a String", key));
            }
            context.addMapIndex(core.String._check(key));
            let fieldInfo = byName[$_get](key);
            if (fieldInfo == null && dart.test(supportNamesWithUnderscores)) {
              fieldInfo = byName[$values][$firstWhere](dart.fn(info => core.identical(info.protoName, key), FieldInfoTobool()), {orElse: dart.fn(() => null, VoidToNull())});
            }
            if (fieldInfo == null) {
              if (dart.test(ignoreUnknownFields)) {
                return;
              } else {
                dart.throw(context.parseException("Unknown field name '" + dart.str(key) + "'", key));
              }
            }
            if (dart.test(protobuf._isMapField(fieldInfo.type))) {
              if (core.Map.is(value)) {
                let mapFieldInfo = protobuf.MapFieldInfo._check(fieldInfo);
                let fieldValues = fieldSet[_ensureMapField](dart.dynamic, dart.dynamic, protobuf.MapFieldInfo._check(fieldInfo));
                value[$forEach](dart.fn((subKey, subValue) => {
                  let t10, t9, t8;
                  if (!(typeof subKey == 'string')) {
                    dart.throw(context.parseException("Expected a String key", subKey));
                  }
                  context.addMapIndex(core.String._check(subKey));
                  let result = (t8 = fieldValues, t9 = decodeMapKey(core.String._check(subKey), mapFieldInfo.keyFieldType), t10 = convertProto3JsonValue(subValue, mapFieldInfo.valueFieldInfo), t8[$_set](t9, t10), t10);
                  context.popIndex();
                  return result;
                }, dynamicAnddynamicToObject()));
              } else {
                dart.throw(context.parseException("Expected a map", value));
              }
            } else if (dart.test(protobuf._isRepeated(fieldInfo.type))) {
              if (value == null) {
                fieldSet[_ensureRepeatedField](dart.dynamic, fieldInfo);
              } else if (core.List.is(value)) {
                let values = fieldSet[_ensureRepeatedField](dart.dynamic, fieldInfo);
                for (let i = 0; i < dart.notNull(value[$length]); i = i + 1) {
                  let entry = value[$_get](i);
                  context.addListIndex(i);
                  values[$add](convertProto3JsonValue(entry, fieldInfo));
                  context.popIndex();
                }
              } else {
                dart.throw(context.parseException("Expected a list", value));
              }
            } else if (dart.test(protobuf._isGroupOrMessage(fieldInfo.type))) {
              let parsedSubMessage = protobuf.GeneratedMessage._check(convertProto3JsonValue(value, fieldInfo));
              let original = protobuf.GeneratedMessage._check(fieldSet[_values][$_get](fieldInfo.index));
              if (original == null) {
                fieldSet[_values][$_set](fieldInfo.index, parsedSubMessage);
              } else {
                original.mergeFromMessage(parsedSubMessage);
              }
            } else {
              fieldSet[_setFieldUnchecked](fieldInfo, convertProto3JsonValue(value, fieldInfo));
            }
            context.popIndex();
          }, dynamicAnddynamicToNull()));
        } else {
          dart.throw(context.parseException("Expected JSON object", json));
        }
      }
    }
    dart.fn(recursionHelper, ObjectAnd_FieldSetTovoid());
    recursionHelper(json, fieldSet);
  };
  protobuf._isAsciiLetter = function _isAsciiLetter(char) {
    char = (dart.notNull(char) | (97 ^ 65) >>> 0) >>> 0;
    return 97 <= dart.notNull(char) && dart.notNull(char) <= 122;
  };
  protobuf._permissiveCompare = function _permissiveCompare(a, b) {
    let i = 0;
    let j = 0;
    L0:
      while (i < a.length && j < b.length) {
        let ca = a[$codeUnitAt](i);
        if (ca === 45 || ca === 95) {
          i = i + 1;
          continue;
        }
        let cb = b[$codeUnitAt](j);
        while (cb === 45 || cb === 95) {
          j = j + 1;
          if (j === b.length) break L0;
          cb = b[$codeUnitAt](j);
        }
        if (ca !== cb && ((ca ^ cb) !== 32 || !dart.test(protobuf._isAsciiLetter(ca)))) return false;
        i = i + 1;
        j = j + 1;
      }
    return true;
  };
  protobuf.unpackIntoHelper = function unpackIntoHelper(T, value, instance, typeUrl, opts) {
    let extensionRegistry = opts && 'extensionRegistry' in opts ? opts.extensionRegistry : C3 || CT.C3;
    if (!dart.test(protobuf.canUnpackIntoHelper(instance, typeUrl))) {
      let typeName = instance.info_.qualifiedMessageName;
      dart.throw(new protobuf.InvalidProtocolBufferException.wrongAnyMessage(protobuf._typeNameFromUrl(typeUrl), typeName));
    }
    instance.mergeFromBuffer(value, extensionRegistry);
  };
  protobuf.canUnpackIntoHelper = function canUnpackIntoHelper(instance, typeUrl) {
    return instance.info_.qualifiedMessageName == protobuf._typeNameFromUrl(typeUrl);
  };
  protobuf._typeNameFromUrl = function _typeNameFromUrl(typeUrl) {
    let index = typeUrl[$lastIndexOf]("/");
    return index === -1 ? "" : typeUrl[$substring](index + 1);
  };
  protobuf._deepEquals = function _deepEquals(lhs, rhs) {
    if (protobuf.GeneratedMessage.is(lhs)) return dart.equals(lhs, rhs);
    if (protobuf.GeneratedMessage.is(rhs)) return false;
    if (core.List.is(lhs) && core.List.is(rhs)) return protobuf._areListsEqual(lhs, rhs);
    if (core.Map.is(lhs) && core.Map.is(rhs)) return protobuf._areMapsEqual(lhs, rhs);
    if (typed_data.ByteData.is(lhs) && typed_data.ByteData.is(rhs)) {
      return protobuf._areByteDataEqual(lhs, rhs);
    }
    return dart.equals(lhs, rhs);
  };
  protobuf._areListsEqual = function _areListsEqual(lhs, rhs) {
    if (lhs[$length] != rhs[$length]) return false;
    for (let i = 0; i < dart.notNull(lhs[$length]); i = i + 1) {
      if (!dart.test(protobuf._deepEquals(lhs[$_get](i), rhs[$_get](i)))) return false;
    }
    return true;
  };
  protobuf._areMapsEqual = function _areMapsEqual(lhs, rhs) {
    if (lhs[$length] != rhs[$length]) return false;
    return lhs[$keys][$every](dart.fn(key => protobuf._deepEquals(lhs[$_get](key), rhs[$_get](key)), dynamicTobool()));
  };
  protobuf._areByteDataEqual = function _areByteDataEqual(lhs, rhs) {
    function asBytes(d) {
      return typed_data.Uint8List.view(typed_data.ByteBuffer._check(dart.dload(d, 'buffer')), core.int._check(dart.dload(d, 'offsetInBytes')), core.int._check(dart.dload(d, 'lengthInBytes')));
    }
    dart.fn(asBytes, dynamicToUint8List());
    return protobuf._areListsEqual(asBytes(lhs), asBytes(rhs));
  };
  protobuf.sorted = function sorted(T, list) {
    let t8;
    t8 = core.List$(T).from(list);
    t8[$sort]();
    return t8;
  };
  protobuf._sorted = function _sorted(T, list) {
    let t8;
    t8 = core.List$(T).from(list);
    t8[$sort]();
    return t8;
  };
  protobuf.getTagFieldNumber = function getTagFieldNumber(tag) {
    return tag[$rightShift](3);
  };
  protobuf.getTagWireType = function getTagWireType(tag) {
    return (dart.notNull(tag) & 7) >>> 0;
  };
  protobuf.makeTag = function makeTag(fieldNumber, tag) {
    return (fieldNumber[$leftShift](3) | dart.notNull(tag)) >>> 0;
  };
  protobuf._wireTypeMatches = function _wireTypeMatches(fieldType, wireType) {
    switch (protobuf.PbFieldType._baseType(fieldType)) {
      case 16:
      case 512:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      {
        return wireType === 0 || wireType === 2;
      }
      case 256:
      case 131072:
      case 524288:
      {
        return wireType === 5 || wireType === 2;
      }
      case 128:
      case 262144:
      case 1048576:
      {
        return wireType === 1 || wireType === 2;
      }
      case 32:
      case 64:
      case 2097152:
      {
        return wireType === 2;
      }
      case 1024:
      {
        return wireType === 3;
      }
      default:
      {
        return false;
      }
    }
  };
  const Utf8Codec__allowMalformed = dart.privateName(convert, "Utf8Codec._allowMalformed");
  let C16;
  let C17;
  dart.defineLazy(protobuf, {
    /*protobuf._utf8*/get _utf8() {
      return C16 || CT.C16;
    },
    /*protobuf._upperCase*/get _upperCase() {
      return core.RegExp.new("[A-Z]");
    },
    /*protobuf.frozenMessageModificationHandler*/get frozenMessageModificationHandler() {
      return C17 || CT.C17;
    },
    set frozenMessageModificationHandler(_) {},
    /*protobuf.TAG_TYPE_BITS*/get TAG_TYPE_BITS() {
      return 3;
    },
    /*protobuf.TAG_TYPE_MASK*/get TAG_TYPE_MASK() {
      return 7;
    },
    /*protobuf.WIRETYPE_VARINT*/get WIRETYPE_VARINT() {
      return 0;
    },
    /*protobuf.WIRETYPE_FIXED64*/get WIRETYPE_FIXED64() {
      return 1;
    },
    /*protobuf.WIRETYPE_LENGTH_DELIMITED*/get WIRETYPE_LENGTH_DELIMITED() {
      return 2;
    },
    /*protobuf.WIRETYPE_START_GROUP*/get WIRETYPE_START_GROUP() {
      return 3;
    },
    /*protobuf.WIRETYPE_END_GROUP*/get WIRETYPE_END_GROUP() {
      return 4;
    },
    /*protobuf.WIRETYPE_FIXED32*/get WIRETYPE_FIXED32() {
      return 5;
    }
  });
  const _mapping = dart.privateName(type_registry, "_mapping");
  type_registry.TypeRegistry = class TypeRegistry extends core.Object {
    get [_mapping]() {
      return this[_mapping$];
    }
    set [_mapping](value) {
      super[_mapping] = value;
    }
    lookup(qualifiedName) {
      return this[_mapping][$_get](qualifiedName);
    }
  };
  (type_registry.TypeRegistry.new = function(types) {
    this[_mapping$] = MapOfString$BuilderInfo().fromEntries(types[$map](MapEntryOfString$BuilderInfo(), dart.fn(message => new (MapEntryOfString$BuilderInfo()).__(message.info_.qualifiedMessageName, message.info_), GeneratedMessageToMapEntryOfString$BuilderInfo())));
    ;
  }).prototype = type_registry.TypeRegistry.prototype;
  (type_registry.TypeRegistry.empty = function() {
    this[_mapping$] = C11 || CT.C11;
    ;
  }).prototype = type_registry.TypeRegistry.prototype;
  dart.addTypeTests(type_registry.TypeRegistry);
  const _mapping$ = TypeRegistry__mapping;
  dart.setMethodSignature(type_registry.TypeRegistry, () => ({
    __proto__: dart.getMethods(type_registry.TypeRegistry.__proto__),
    lookup: dart.fnType(protobuf.BuilderInfo, [core.String])
  }));
  dart.setLibraryUri(type_registry.TypeRegistry, "package:protobuf/src/protobuf/type_registry.dart");
  dart.setFieldSignature(type_registry.TypeRegistry, () => ({
    __proto__: dart.getFields(type_registry.TypeRegistry.__proto__),
    [_mapping]: dart.finalFieldType(core.Map$(core.String, protobuf.BuilderInfo))
  }));
  const _path = dart.privateName(json_parsing_context, "_path");
  const ignoreUnknownFields$ = dart.privateName(json_parsing_context, "JsonParsingContext.ignoreUnknownFields");
  const supportNamesWithUnderscores$ = dart.privateName(json_parsing_context, "JsonParsingContext.supportNamesWithUnderscores");
  const permissiveEnums$ = dart.privateName(json_parsing_context, "JsonParsingContext.permissiveEnums");
  json_parsing_context.JsonParsingContext = class JsonParsingContext extends core.Object {
    get ignoreUnknownFields() {
      return this[ignoreUnknownFields$];
    }
    set ignoreUnknownFields(value) {
      super.ignoreUnknownFields = value;
    }
    get supportNamesWithUnderscores() {
      return this[supportNamesWithUnderscores$];
    }
    set supportNamesWithUnderscores(value) {
      super.supportNamesWithUnderscores = value;
    }
    get permissiveEnums() {
      return this[permissiveEnums$];
    }
    set permissiveEnums(value) {
      super.permissiveEnums = value;
    }
    addMapIndex(index) {
      this[_path][$add](index);
    }
    addListIndex(index) {
      this[_path][$add](dart.toString(index));
    }
    popIndex() {
      this[_path][$removeLast]();
    }
    parseException(message, source) {
      let formattedPath = this[_path][$map](core.String, dart.fn(s => "[\"" + dart.str(s) + "\"]", StringToString()))[$join]();
      return new core.FormatException.new("Protobuf JSON decoding failed at: root" + dart.str(formattedPath) + ". " + dart.str(message), source);
    }
  };
  (json_parsing_context.JsonParsingContext.new = function(ignoreUnknownFields, supportNamesWithUnderscores, permissiveEnums) {
    this[_path] = JSArrayOfString().of([]);
    this[ignoreUnknownFields$] = ignoreUnknownFields;
    this[supportNamesWithUnderscores$] = supportNamesWithUnderscores;
    this[permissiveEnums$] = permissiveEnums;
    ;
  }).prototype = json_parsing_context.JsonParsingContext.prototype;
  dart.addTypeTests(json_parsing_context.JsonParsingContext);
  dart.setMethodSignature(json_parsing_context.JsonParsingContext, () => ({
    __proto__: dart.getMethods(json_parsing_context.JsonParsingContext.__proto__),
    addMapIndex: dart.fnType(dart.void, [core.String]),
    addListIndex: dart.fnType(dart.void, [core.int]),
    popIndex: dart.fnType(dart.void, []),
    parseException: dart.fnType(core.Exception, [core.String, core.Object])
  }));
  dart.setLibraryUri(json_parsing_context.JsonParsingContext, "package:protobuf/src/protobuf/json_parsing_context.dart");
  dart.setFieldSignature(json_parsing_context.JsonParsingContext, () => ({
    __proto__: dart.getFields(json_parsing_context.JsonParsingContext.__proto__),
    [_path]: dart.finalFieldType(core.List$(core.String)),
    ignoreUnknownFields: dart.finalFieldType(core.bool),
    supportNamesWithUnderscores: dart.finalFieldType(core.bool),
    permissiveEnums: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/protobuf/protobuf", {
    "package:protobuf/protobuf.dart": protobuf,
    "package:protobuf/src/protobuf/type_registry.dart": type_registry,
    "package:protobuf/src/protobuf/json_parsing_context.dart": json_parsing_context
  }, {
    "package:protobuf/protobuf.dart": ["src/protobuf/coded_buffer.dart", "src/protobuf/coded_buffer_reader.dart", "src/protobuf/coded_buffer_writer.dart", "src/protobuf/builder_info.dart", "src/protobuf/event_plugin.dart", "src/protobuf/exceptions.dart", "src/protobuf/extension.dart", "src/protobuf/extension_field_set.dart", "src/protobuf/extension_registry.dart", "src/protobuf/field_error.dart", "src/protobuf/field_info.dart", "src/protobuf/field_set.dart", "src/protobuf/field_type.dart", "src/protobuf/generated_message.dart", "src/protobuf/generated_service.dart", "src/protobuf/json.dart", "src/protobuf/pb_list.dart", "src/protobuf/pb_map.dart", "src/protobuf/protobuf_enum.dart", "src/protobuf/proto3_json.dart", "src/protobuf/readonly_message.dart", "src/protobuf/rpc_client.dart", "src/protobuf/unknown_field_set.dart", "src/protobuf/utils.dart", "src/protobuf/unpack.dart", "src/protobuf/wire_format.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/protobuf/coded_buffer_reader.dart","src/protobuf/coded_buffer_writer.dart","src/protobuf/builder_info.dart","src/protobuf/event_plugin.dart","src/protobuf/exceptions.dart","src/protobuf/field_info.dart","src/protobuf/extension.dart","src/protobuf/extension_field_set.dart","src/protobuf/extension_registry.dart","src/protobuf/pb_map.dart","src/protobuf/field_set.dart","src/protobuf/field_type.dart","src/protobuf/generated_message.dart","src/protobuf/generated_service.dart","src/protobuf/pb_list.dart","src/protobuf/protobuf_enum.dart","src/protobuf/readonly_message.dart","src/protobuf/rpc_client.dart","src/protobuf/unknown_field_set.dart","src/protobuf/utils.dart","protobuf.dart","src/protobuf/coded_buffer.dart","src/protobuf/field_error.dart","src/protobuf/json.dart","src/protobuf/proto3_json.dart","src/protobuf/unpack.dart","src/protobuf/wire_format.dart","src/protobuf/type_registry.dart","src/protobuf/json_parsing_context.dart"],"names":[],"mappings":"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","file":"protobuf.ddc.js"}');
  // Exports:
  return {
    protobuf: protobuf,
    src__protobuf__type_registry: type_registry,
    src__protobuf__json_parsing_context: json_parsing_context
  };
});

//# sourceMappingURL=protobuf.ddc.js.map

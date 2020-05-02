define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const rpc_error_message = Object.create(dart.library);
  const CT = Object.create(null);
  rpc_error_message.RpcErrorMessage = class RpcErrorMessage extends core.Object {};
  (rpc_error_message.RpcErrorMessage.new = function() {
    ;
  }).prototype = rpc_error_message.RpcErrorMessage.prototype;
  dart.addTypeTests(rpc_error_message.RpcErrorMessage);
  dart.setLibraryUri(rpc_error_message.RpcErrorMessage, "package:auge_shared/message/rpc_error_message.dart");
  dart.defineLazy(rpc_error_message.RpcErrorMessage, {
    /*rpc_error_message.RpcErrorMessage.dataNotFoundName*/get dataNotFoundName() {
      return "DataNotFound";
    },
    /*rpc_error_message.RpcErrorMessage.dataNotFoundMessage*/get dataNotFoundMessage() {
      return "Data Not Found.";
    }
  });
  rpc_error_message.RpcErrorDetailMessage = class RpcErrorDetailMessage extends core.Object {};
  (rpc_error_message.RpcErrorDetailMessage.new = function() {
    ;
  }).prototype = rpc_error_message.RpcErrorDetailMessage.prototype;
  dart.addTypeTests(rpc_error_message.RpcErrorDetailMessage);
  dart.setLibraryUri(rpc_error_message.RpcErrorDetailMessage, "package:auge_shared/message/rpc_error_message.dart");
  dart.defineLazy(rpc_error_message.RpcErrorDetailMessage, {
    /*rpc_error_message.RpcErrorDetailMessage.groupUpdatePreconditionFailed*/get groupUpdatePreconditionFailed() {
      return "GroupUpdatePreconditionFailed";
    },
    /*rpc_error_message.RpcErrorDetailMessage.workDataNotFoundReason*/get workDataNotFoundReason() {
      return "Work data not found.";
    },
    /*rpc_error_message.RpcErrorDetailMessage.workInvalidArgument*/get workInvalidArgument() {
      return "Work invalid argument.";
    },
    /*rpc_error_message.RpcErrorDetailMessage.workPreconditionFailed*/get workPreconditionFailed() {
      return "Work precondition failed.";
    },
    /*rpc_error_message.RpcErrorDetailMessage.measurePreconditionFailed*/get measurePreconditionFailed() {
      return "Measure precondition failed.";
    },
    /*rpc_error_message.RpcErrorDetailMessage.measureProgressUpdatePreconditionFailed*/get measureProgressUpdatePreconditionFailed() {
      return "MeasureProgressUpdatePreconditionFailed";
    },
    /*rpc_error_message.RpcErrorDetailMessage.measureProgressDataNotFoundReason*/get measureProgressDataNotFoundReason() {
      return "Measure progress data not found.";
    },
    /*rpc_error_message.RpcErrorDetailMessage.workItemValueDataNotFoundReason*/get workItemValueDataNotFoundReason() {
      return "Work item value data not found.";
    },
    /*rpc_error_message.RpcErrorDetailMessage.measureUnitsDataNotFoundReason*/get measureUnitsDataNotFoundReason() {
      return "MeasureUnitsDataNotFound";
    },
    /*rpc_error_message.RpcErrorDetailMessage.measureDataNotFoundReason*/get measureDataNotFoundReason() {
      return "Measure data not found.";
    },
    /*rpc_error_message.RpcErrorDetailMessage.measureInvalidArgument*/get measureInvalidArgument() {
      return "Measure invalid argument.";
    },
    /*rpc_error_message.RpcErrorDetailMessage.objectivePreconditionFailed*/get objectivePreconditionFailed() {
      return "Objective precondition failed.";
    },
    /*rpc_error_message.RpcErrorDetailMessage.objectiveDataNotFoundReason*/get objectiveDataNotFoundReason() {
      return "ObjectiveDataNotFound";
    },
    /*rpc_error_message.RpcErrorDetailMessage.objectiveInvalidArgument*/get objectiveInvalidArgument() {
      return "Objective invalid argument.";
    },
    /*rpc_error_message.RpcErrorDetailMessage.organizationDataNotFoundReason*/get organizationDataNotFoundReason() {
      return "OrganizationDataNotFound";
    },
    /*rpc_error_message.RpcErrorDetailMessage.stageDataNotFoundReason*/get stageDataNotFoundReason() {
      return "Stage data not found.";
    },
    /*rpc_error_message.RpcErrorDetailMessage.stageInvalidArgument*/get stageInvalidArgument() {
      return "Stage invalid argument.";
    },
    /*rpc_error_message.RpcErrorDetailMessage.stateDataNotFoundReason*/get stateDataNotFoundReason() {
      return "State data not found.";
    },
    /*rpc_error_message.RpcErrorDetailMessage.userDataNotFoundReason*/get userDataNotFoundReason() {
      return "UserDataNotFound";
    },
    /*rpc_error_message.RpcErrorDetailMessage.workItemDataNotFoundReason*/get workItemDataNotFoundReason() {
      return "Workitem data not found.";
    },
    /*rpc_error_message.RpcErrorDetailMessage.workItemCheckItemDataNotFoundReason*/get workItemCheckItemDataNotFoundReason() {
      return "Check item data of Workitem not found.";
    },
    /*rpc_error_message.RpcErrorDetailMessage.workItemAttachmentDataNotFoundReason*/get workItemAttachmentDataNotFoundReason() {
      return "Workitem attachment data not found.";
    },
    /*rpc_error_message.RpcErrorDetailMessage.workItemInvalidArgument*/get workItemInvalidArgument() {
      return "Workitem invalid argument.";
    },
    /*rpc_error_message.RpcErrorDetailMessage.workItemAttachmentInvalidArgument*/get workItemAttachmentInvalidArgument() {
      return "Workitem attachment invalid argument.";
    },
    /*rpc_error_message.RpcErrorDetailMessage.workItemPreconditionFailed*/get workItemPreconditionFailed() {
      return "Workitem precondition failed.";
    },
    /*rpc_error_message.RpcErrorDetailMessage.objectiveNotificationUserInvalidArgument*/get objectiveNotificationUserInvalidArgument() {
      return "Objective Notification User invalid argument.";
    }
  });
  dart.defineLazy(rpc_error_message, {
    /*rpc_error_message.httpCodeNotFound*/get httpCodeNotFound() {
      return 404;
    }
  });
  dart.trackLibraries("packages/auge_shared/message/rpc_error_message", {
    "package:auge_shared/message/rpc_error_message.dart": rpc_error_message
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["rpc_error_message.dart"],"names":[],"mappings":";;;;;;;;;;EAKA;;;;MAFsB,kDAAgB;;;MAChB,qDAAmB;;;;;;;EA8BzC;;;;MA1BsB,qEAA6B;;;MAC7B,8DAAsB;;;MACtB,2DAAmB;;;MACnB,8DAAsB;;;MACtB,iEAAyB;;;MACzB,+EAAuC;;;MACvC,yEAAiC;;;MACjC,uEAA+B;;;MAC/B,sEAA8B;;;MAC9B,iEAAyB;;;MACzB,8DAAsB;;;MACtB,mEAA2B;;;MAC3B,mEAA2B;;;MAC3B,gEAAwB;;;MACxB,sEAA8B;;;MAC9B,+DAAuB;;;MACvB,4DAAoB;;;MACpB,+DAAuB;;;MACvB,8DAAsB;;;MACtB,kEAA0B;;;MAC1B,2EAAmC;;;MACnC,4EAAoC;;;MACpC,+DAAuB;;;MACvB,yEAAiC;;;MACjC,kEAA0B;;;MAC1B,gFAAwC;;;;;MAjCpD,kCAAgB","file":"rpc_error_message.ddc.js"}');
  // Exports:
  return {
    message__rpc_error_message: rpc_error_message
  };
});

//# sourceMappingURL=rpc_error_message.ddc.js.map

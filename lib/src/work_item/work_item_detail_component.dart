// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:html' as html;
import 'dart:convert' show base64;
import 'dart:typed_data' show Uint8List;
import 'package:intl/intl.dart';

import 'package:angular/angular.dart';
import 'package:angular/security.dart';
import 'package:angular_router/angular_router.dart';
import 'package:auge_web/route/app_routes.dart';

import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/popup/module.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_button/material_fab.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_select/material_dropdown_select.dart';
import 'package:angular_components/model/selection/selection_model.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular_components/model/selection/string_selection_options.dart';
import 'package:angular_components/model/ui/has_factory.dart';
import 'package:angular_components/material_select/dropdown_button.dart';
import 'package:angular_components/material_select/material_dropdown_select_accessor.dart';
import 'package:angular_components/material_datepicker/module.dart';
import 'package:angular_components/model/date/date.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_input/material_auto_suggest_input.dart';
import 'package:angular_components/material_input/material_number_accessor.dart';
import 'package:angular_components/focus/focus_item.dart';
import 'package:angular_components/focus/focus_list.dart';
import 'package:angular_components/material_list/material_list.dart';
import 'package:angular_components/material_list/material_list_item.dart';
import 'package:angular_components/material_select/material_select_item.dart';
import 'package:angular_components/material_checkbox/material_checkbox.dart';
import 'package:angular_components/material_chips/material_chip.dart';
import 'package:angular_components/material_chips/material_chips.dart';
import 'package:angular_components/material_datepicker/material_datepicker.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';

import 'package:auge_shared/domain/general/unit_of_measurement.dart';
import 'package:auge_shared/domain/work/work_stage.dart';
import 'package:auge_shared/domain/work/work.dart';
import 'package:auge_shared/domain/work/work_item.dart';
import 'package:auge_shared/domain/general/user.dart';

import 'package:auge_shared/message/messages.dart';
import 'package:auge_shared/message/domain_messages.dart';

import 'package:auge_web/services/common_service.dart' as common_service;
import 'package:auge_web/src/work/work_service.dart';
import 'package:auge_web/src/work_item/work_item_service.dart';
import 'package:auge_web/src/user/user_service.dart';

// ignore_for_file: uri_has_not_been_generated
import 'work_item_detail_component.template.dart' as work_item_detail_component;

@Component(
    selector: 'auge-work-item-detail',
    providers: const [popupBindings, overlayBindings, datepickerBindings, WorkItemService, UserService],
    templateUrl: 'work_item_detail_component.html',
    styleUrls: const [
      'work_item_detail_component.css'
    ],
    directives: const [
      coreDirectives,
      routerDirectives,
      materialInputDirectives,
      materialNumberInputDirectives,
      MaterialExpansionPanelSet,
      MaterialExpansionPanel,
      MaterialAutoSuggestInputComponent,
      AutoFocusDirective,
      MaterialDialogComponent,
      ModalComponent,
      MaterialButtonComponent,
      MaterialFabComponent,
      MaterialIconComponent,
      MaterialDropdownSelectComponent,
      DropdownSelectValueAccessor,
      DropdownButtonComponent,
      FocusItemDirective,
      FocusListDirective,
      MaterialListComponent,
      MaterialListItemComponent,
      MaterialSelectItemComponent,
      MaterialCheckboxComponent,
      MaterialChipsComponent,
      MaterialChipComponent,
      MaterialDatepickerComponent,
      MaterialTooltipDirective,
    ])

class WorkItemDetailComponent implements OnInit, OnActivate, OnDeactivate  {

  bool modalVisible = false;

  final UserService _userService;
  final WorkService _workService;
  final WorkItemService _workItemService;
  final Router _router;
  final DomSanitizationService _domSanitizationService;
  //final Location _location;

 // String workId;
  String stageIdOrigin;
 // Work work;
  WorkItem workItem;

  List<UnitOfMeasurement> _unitsOfMeasurement = [];
  SelectionOptions unitOfMeasurementOptions;
  SelectionModel unitOfMeasurementSingleSelectModel;

  String memberInputText = '';
  SelectionOptions memberOptions;
  SelectionOptions stageOptions;
  SelectionModel memberSingleSelectModel;
  SelectionModel stageSingleSelectModel;

  List<User> memberUsers = List();

  String errorCompleted;

  DateRange limitToDueDateRange =
  new DateRange(new Date.today().add(years: -1), new Date.today().add(years: 10));

  WorkItemCheckItem selectedCheckItem;
  String checkItemEntry;

  List<User> _users;

  /// When it exists, the error/exception message presented into dialog view.
  String dialogError;

  String previousPath;

  bool attachmentDragOver = false;

  final String urlBaseAttachment = 'data:application/octet-stream;base64,';

  bool valuePanelExpanded = false;
  bool checkItemPanelExpanded = false;

  final DateFormat dateFormat = DateFormat.yMd();

  WorkItemDetailComponent(this._userService, this._workService, this._workItemService, this._router, this._domSanitizationService /*, this._location*/)  {

    // initializeDateFormatting(Intl.defaultLocale , null);
    memberSingleSelectModel = SelectionModel.single();
    unitOfMeasurementSingleSelectModel = SelectionModel.single();

   // _uploadFile = html.querySelector("#upload_file");


  }

  @ViewChild('upload_image', read: html.HtmlElement)
  html.InputElement uploadFileInput;

  // Define messages and labels
  static final String requiredValueMsg =  CommonMsg.requiredValueMsg();
  static final String saveButtonLabel = CommonMsg.buttonLabel(CommonMsg.saveButtonLabel);
  static final String closeButtonLabel = CommonMsg.buttonLabel(CommonMsg.closeButtonLabel);
  static final String noMatchLabel = CommonMsg.label(CommonMsg.noMatchLabel);

  static final String addWorkItemLabel =  WorkItemMsg.label(WorkItemMsg.addWorkItemLabel);
  static final String editWorkItemLabel =  WorkItemMsg.label(WorkItemMsg.editWorkItemLabel);

  static final String selectValueLabel = WorkItemMsg.label(WorkItemMsg.selectAValueLabel);
  static final String dropFileHereLabel = WorkItemMsg.label(WorkItemMsg.dropFileHereLabel);
  static final String checkItemNameLabel = WorkItemMsg.label(WorkItemMsg.checkItemNameLabel);
  static final String plannedActualLabel = WorkItemMsg.label(WorkItemMsg.remainingValueLabel);
  static final String remainingValueLabel = WorkItemMsg.label(WorkItemMsg.remainingValueLabel);


  static final String nameLabel =  WorkItemDomainMsg.fieldLabel(WorkItem.nameField);
  static final String descriptionLabel =  WorkItemDomainMsg.fieldLabel(WorkItem.descriptionField);
  static final String dueDateLabel =  WorkItemDomainMsg.fieldLabel(WorkItem.dueDateField);
  //static final String completedLabel =  WorkItemDomainMsg.fieldLabel(WorkItem.completedField);
  static final String plannedValueLabel = WorkItemDomainMsg.fieldLabel(WorkItem.plannedValueField);
  static final String actualValueLabel = WorkItemDomainMsg.fieldLabel(WorkItem.actualValueField);
  static final String unitLabel = WorkItemDomainMsg.fieldLabel(WorkItem.unitOfMeasurementField); // FieldMsg.label('${Measure.className}.${Measure.unitOfMeasurementField}');
  static final String stageLabel =  WorkItemDomainMsg.fieldLabel(WorkItem.workStageField);
  static final String assignedToLabel =  WorkItemDomainMsg.fieldLabel(WorkItem.assignedToField);
  static final String attachmentsLabel = WorkItemDomainMsg.fieldLabel(WorkItem.attachmentsField);
  static final String checkItemsLabel =  WorkItemDomainMsg.fieldLabel(WorkItem.checkItemsField);

  static final String valuePercentIntervalMsg = WorkItemMsg.valuePercentIntervalMsg();
  static final String archivedLabel =  WorkItemDomainMsg.fieldLabel(WorkItem.archivedField);

  @override
  void ngOnInit() async {
    // Clone the object to have an intermediate
    workItem =
        WorkItem(); // need to create, because the angular throws a exception if the query delay.

   // _uploadFile = html.querySelector("#upload_file");
  }

  @override
  void onActivate(RouterState previous, RouterState current) async {

    modalVisible = true;

    previousPath = previous.path;

    String workId;
    if (current.parameters.containsKey(AppRoutesParam.workIdParameter)) {
      workId = current.parameters[AppRoutesParam.workIdParameter];
    } else {
      throw Exception('work id not informed.');
    }

    String workItemId;
    if (current.parameters.containsKey(AppRoutesParam.workItemIdParameter)) {
      workItemId = current.parameters[AppRoutesParam.workItemIdParameter];
    }

    //List<User> users = await _userService.getUsers(_authService.selectedOrganization?.id, withProfile: true);
    try {


      if (workItemId != null) {
        workItem = await _workItemService.getWorkItem(workItemId);
      } else {
        workItem.work = await _workService.getWorkOnlySpecification(workId);
      }

      _users = await _userService.getUsersOnlySpecificationAndImage(_userService.authService.authorizedOrganization.id);
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }

    valuePanelExpanded = workItem.plannedValue != null || workItem.actualValue != null;
    checkItemPanelExpanded = workItem.checkItems.isNotEmpty;

    // If Stage Id is passed
    if (current.queryParameters.containsKey(AppRoutesQueryParam.stageIdQueryParameter)) {
      stageIdOrigin = current.queryParameters[AppRoutesQueryParam.stageIdQueryParameter];
    }

    memberOptions = new StringSelectionOptions<User>(
        _users, toFilterableString: (User user) => user.name);

    memberSingleSelectModel.selectionChanges.listen((member) {

        if (member.isNotEmpty && member.first.added != null && member.first.added.length != 0 && member.first.added?.first != null) {
          if (!workItem.assignedTo.contains(member.first.added.first)) {
            workItem.assignedTo.add(member.first.added.first);
          }
        }
      });

    List<WorkStage> workStages;
    workStages = await _workService.getWorkStages(workId);

    if (workStages != null && workStages.isNotEmpty) {
      stageOptions = new SelectionOptions.fromList( workStages );

      stageSingleSelectModel =
      new SelectionModel.single()
        ..selectionChanges.listen((es) {
          if (es.isNotEmpty && es.first.added != null &&
              es.first.added.length != 0 && es.first.added.first != null) {
            workItem.workStage = es.first.added.first;
          }
        });

      if (workItem.workStage == null) {
        if (stageIdOrigin == null) {
          workItem.workStage = workStages.first;
        } else {
          workItem.workStage = workStages.firstWhere((t) => t.id == stageIdOrigin);
        }
      }
      stageSingleSelectModel.select(workItem.workStage);
    }

   // _uploadFile = html.querySelector("#upload_file");


    try {
      if (_unitsOfMeasurement.isEmpty) _unitsOfMeasurement = await _workItemService.getUnitsOfMeasurement();
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }

    unitOfMeasurementOptions = SelectionOptions.fromList(_unitsOfMeasurement);

    unitOfMeasurementSingleSelectModel.selectionChanges.listen((unit) {
      if (unit.isNotEmpty && unit.first.added != null && unit.first.added.length != 0 && unit.first.added?.first != null) {
        workItem.unitOfMeasurement = unit.first.added.first;
      }
    });

    if (workItem.unitOfMeasurement != null) {
      unitOfMeasurementSingleSelectModel.select(workItem.unitOfMeasurement);
  //  } else if (unitOfMeasurementOptions.optionsList.isNotEmpty) {
//      unitOfMeasurementSingleSelectModel.select(unitOfMeasurementOptions.optionsList.first);
    }

  }

  @override
  void onDeactivate(RouterState current, RouterState next) {
    modalVisible = false;
  }

  removeMember(User user) {
    workItem.assignedTo.remove(user);
  }

  removeAttachment(WorkItemAttachment workItemAttachment) {
    workItem.attachments.remove(workItemAttachment);
  }

  void saveWorkItem() async {
    try {
      workItem.id = await _workItemService.saveWorkItem(workItem);
      closeDetail(workItem.id);
    } catch (e) {
      dialogError = e.toString();
      rethrow;
    }
  }


  void closeDetail([String workItemId]) {
    //_location.back();
    _router.navigate(previousPath, (workItemId != null) ? NavigationParams(queryParameters: {AppRoutesQueryParam.workItemIdQueryParameter: workItemId}, replace: true) : NavigationParams(replace:  true));
  }

  String get memberLabelRenderer {
    String nameLabel;
    if ((memberSingleSelectModel != null &&
        memberSingleSelectModel.selectedValues != null &&
        memberSingleSelectModel.selectedValues.length != null)) {

      nameLabel = memberSingleSelectModel.selectedValues.first?.name;
    }

    return nameLabel;
  }

  ItemRenderer get memberItemRenderer => (dynamic user) => user.name;

  Date _dueDate;

  Date get dueDate {
    if (_dueDate == null && workItem.dueDate != null) {
      _dueDate = Date.fromTime(workItem.dueDate.toLocal());
    }

    return _dueDate;
  }

  set dueDate(Date dueDate) {
    if (dueDate == null) {
      workItem.dueDate = null;
    } else {
      workItem.dueDate = DateTime(dueDate.year, dueDate.month, dueDate.day).toUtc(); //_dueDate.asUtcTime();
      _dueDate = dueDate;
    }
  }

/*
  int get completed {
    return workItem.completed;
  }

  void set completed(int completed) {
    if (completed != null && !(completed >= 0 && completed <= 100)) {
      errorCompleted = valuePercentIntervalMsg;
    } else {
      errorCompleted = null;
      workItem.completed = completed;
    }
  }
 */

  FactoryRenderer get factoryRenderer => (_) => work_item_detail_component.MemberRendererComponentNgFactory;

  // Label for the button for single selection.
  String get stageSingleSelectLabel {
    String nameLabel;
    if ((stageSingleSelectModel != null) &&
        (stageSingleSelectModel.selectedValues != null) &&
        (stageSingleSelectModel.selectedValues.length > 0)) {

        nameLabel = stageSingleSelectModel.selectedValues.first?.name;
    } else {
      nameLabel = WorkItemMsg.label(selectValueLabel);
    }
    return nameLabel ;
  }

  ItemRenderer get stageItemRenderer => (dynamic stage) => stage.name;

  String userUrlImage(User userMember) {
    return common_service.userUrlImage(userMember?.userProfile?.image);
  }

  void selectCheckItem(WorkItemCheckItem checkItem) {
    selectedCheckItem = checkItem;
    checkItemEntry = checkItem.name;

  }

  void addCheckItem() {

    workItem.checkItems.add(new WorkItemCheckItem()
      ..name = checkItemEntry
      ..index = workItem.checkItems.length);
    workItem.checkItems.sort((a, b) =>
        a?.index?.compareTo(b?.index));

    checkItemEntry = '';
  }

  void removeCheckItem(WorkItemCheckItem checkItem) {
    workItem.checkItems.remove(checkItem);
  }

  void updateCheckItem(WorkItemCheckItem checkItem) {

    workItem.checkItems.elementAt(workItem.checkItems.indexOf(checkItem))
        ..name = checkItemEntry;
  }

  bool get validInput {
    return workItem.name?.trim()?.isNotEmpty ?? false;
  }

  bool get validCheckItemInput {
    return (checkItemEntry != null && checkItemEntry.isNotEmpty);
  }

  void addAttachmentFile(html.File file) {
    html.FileReader reader = html.FileReader();

    reader.onLoad.listen((fileEvent) {
      Uint8List fileContent = reader.result;
      // Code doing stuff with fileContent goes here!

      String content = base64.encode(fileContent);

      workItem.attachments..add(WorkItemAttachment()..name = file.name..type = file.type..content = content);

      //Image image = decodeImage(fileContent);

      //Image thumbnail = copyResize(image, width: 120, height: 120);

      //user.userProfile.image = base64.encode(encodePng(thumbnail));

    });

    reader.onError.listen((itWentWrongEvent) {
      // Handle the error
    });

    reader.readAsArrayBuffer(file);
  }

  void uploadFile() async {
    //   html.InputElement _uploadImage = html.querySelector("#upload_image");

    html.FileList files = uploadFileInput.files;
    if (files.length > 0) {
      html.File file = files.item(0);
      addAttachmentFile(file);
    }
  }

  void dropFile(html.MouseEvent ev) {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();


    if (ev.dataTransfer.items.length != 0) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind == 'file') {
          html.File file = ev.dataTransfer.items[i].getAsFile();
          addAttachmentFile(file);
        }
      }
    } else {
      throw Exception('Event dataTransfer.items.length is zero');
    }
  }

  void dragOver(html.MouseEvent  ev) {
    ev.preventDefault();
    attachmentDragOver = true;
  }

  void dragLeave(html.MouseEvent  ev) {
    attachmentDragOver = false;
  }

  void selectUploadFile() async {

    uploadFileInput.click();
  }


  /// https://angulardart.dev/guide/securityloadAttachmentContent
  SafeUrl href(WorkItemAttachment workItemAttachment)  {
    if (workItemAttachment?.content != null && workItemAttachment.content.isNotEmpty) {
      String url = '${urlBaseAttachment}${workItemAttachment.content}';
      return _domSanitizationService.bypassSecurityTrustUrl(url);
    } else {
      return _domSanitizationService.bypassSecurityTrustUrl(null);
    }
  }

  void loadAttachmentContent(html.Event event, WorkItemAttachment workItemAttachment) async {

    if (workItemAttachment != null && (workItemAttachment.content == null || workItemAttachment.content.isEmpty)) {
      event.preventDefault();

      WorkItemAttachment wIA = await _workItemService.getWorkItemAttachment(workItemAttachment.id);

      int i = workItem.attachments.indexWhere((t) => t.id == workItemAttachment.id);
      workItem.attachments[i] = wIA;

      html.Element element = html.querySelector('#download-file-${wIA.id}');

      element.click();

    }
  }

  double get remainingValue => workItem.plannedValue == null || workItem.actualValue == null ? null : workItem.plannedValue-workItem.actualValue;

  // Label for the button for single selection.
  String get unitOfMeasurementSingleSelectLabel {
    String nameLabel;
    if ((unitOfMeasurementSingleSelectModel != null) &&
        (unitOfMeasurementSingleSelectModel.selectedValues != null) &&
        (unitOfMeasurementSingleSelectModel.selectedValues.length > 0)) {

      nameLabel = unitOfMeasurementSingleSelectModel.selectedValues.first.name;
    } else {
      nameLabel = CommonMsg.label(CommonMsg.selectLabel);
    }
    return nameLabel ;
  }

  ItemRenderer get unitOfMeasurementItemRenderer => (dynamic unit) => unit.name + (unit.symbol == null || unit.symbol.trim().length == 0 ? '' : ' (' + unit.symbol + ')');


}

@Component(
    selector: 'member-renderer',
    template: '<div left-icon class="avatar-icon" [style.background-image]="disPlayurl"></div>{{disPlayName}}',
    styles: const [
      ''
    ],
    directives: const [
      MaterialIconComponent
    ])

class MemberRendererComponent implements RendersValue {
  String disPlayName = '';
  String disPlayurl;

  @override
  set value(newValue) {
    disPlayName = (newValue as User).name;
    disPlayurl = 'url(' + common_service.userUrlImage((newValue as User)?.userProfile?.image)  + ')';
  }
}
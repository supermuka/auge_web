// Copyright (c) 2017, Levius.

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_router/angular_router.dart';
import 'package:auge/shared/model/objective/objective.dart';
import 'package:auge/shared/model/user.dart';

import 'package:auge/shared/message/messages.dart';

import 'package:angular_components/model/ui/has_factory.dart';

import 'package:auge/web/services/common_service.dart' as common_service;
import 'package:auge/web/src/auth/auth_service.dart';
import 'package:auge/web/src/user/user_service.dart';
import 'package:auge/web/src/objective/objective_service.dart';

import 'package:auge/web/services/app_routes.dart';

// ignore_for_file: uri_has_not_been_generated
import 'objective_detail_component.template.dart' as objective_detail_component;

@Component(
    selector: 'auge-objective-detail',
    providers: const [UserService],
    directives: const [
      coreDirectives,
      routerDirectives,
      AutoFocusDirective,
      materialDirectives,
      MaterialInputComponent,
      MaterialButtonComponent,
      MaterialFabComponent,
      MaterialIconComponent,
      MaterialDialogComponent,
      MaterialListComponent,
      MaterialListItemComponent,
      MaterialExpansionPanel,
      ModalComponent,

    ],
    templateUrl: 'objective_detail_component.html',
    styleUrls: const [
      'objective_detail_component.css'
    ])

class ObjectiveDetailComponent implements OnActivate {

  final AuthService _authService;
  final UserService _userService;
  final ObjectiveService _objectiveService;

  final Location _location;
  final Router _router;

  Objective objective = new Objective();

  String alignedToInputText = '';
  String leaderInputText = '';

  SelectionOptions alignedToOptions;
  SelectionModel alignedToSingleSelectModel;
  SelectionOptions leaderOptions;
  SelectionModel leaderSingleSelectModel;

  String leadingGlyph = 'search';
  String alignedToLabel = 'Aligned To Objective';
  String leaderLabel = 'Leader';
  String emptyPlaceholder = 'No match';

  DateRange limitToDateRange =
  new DateRange(new Date.today().add(years: -1), new Date.today().add(years: 1));

  ObjectiveDetailComponent(this._authService, this._userService, this._objectiveService, this._location, this._router) {
  }

  // Define messages and labels
  String requiredValueMsg() => CommonMessage.requiredValueMsg();
  String label(String label) =>  ObjectiveMessage.label(label);
  String buttonLabel(String label) =>  CommonMessage.buttonLabel(label);

  @override
  Future onActivate(RouterState routerStatePrevious, RouterState routerStateCurrent) async {

    String id = routerStateCurrent.parameters[AppRoutes.objectiveIdParameter];

    if (id != null && id.isNotEmpty) {
      objective  = await _objectiveService.getObjectiveById(id);
    } else {
      objective.organization = _authService.selectedOrganization;
    }


    // Aligned to Objectives
    List<Objective> alignedToObjectives = await _objectiveService.getObjectives(_authService.selectedOrganization.id);

    // Remove the current object
    if (objective.id != null)
       alignedToObjectives.removeWhere((testObjective) => testObjective.id == objective.id);


    alignedToOptions = new StringSelectionOptions<Objective>(
        alignedToObjectives, toFilterableString: (Objective obj) => obj.name);

    alignedToSingleSelectModel =
    new SelectionModel.single()
      ..selectionChanges.listen((alignedTo) {

        if (alignedTo.isNotEmpty && alignedTo.first.added != null && alignedTo.first.added.length != 0 && alignedTo.first.added?.first != null) {
          objective.alignedTo = alignedTo.first.added.first;
        }
      });

    if (objective.alignedTo != null)
      alignedToSingleSelectModel.select(objective.alignedTo);


    // Leader
    List<User> users = await _userService.getUsersByOrganizationId(_authService.selectedOrganization.id, withProfile: true);

    leaderSingleSelectModel =
    new SelectionModel.single()
      ..selectionChanges.listen((leader) {

        if (leader.isNotEmpty && leader.first.added != null && leader.first.added.length != 0 && leader.first.added?.first != null) {
          objective.leader = leader.first.added.first;
        }
      });

    if (objective.leader != null)
      leaderSingleSelectModel.select(objective.leader);


    leaderOptions = new StringSelectionOptions<User>(
        users, toFilterableString: (User user) => user.name);
  }

  void saveObjective() {
    _objectiveService.saveObjective(objective);
    goBack();
  }

  goBack() {
    _location.back();;
  }

  String get alignedToLabelRenderer {
    String nameLabel;
    if ((alignedToSingleSelectModel != null &&
        alignedToSingleSelectModel.selectedValues != null &&
        alignedToSingleSelectModel.selectedValues.length != null)) {

      nameLabel = alignedToSingleSelectModel.selectedValues.first.name;
    }

    return nameLabel;
  }

  ItemRenderer get alignedToItemRenderer => (dynamic obj) => obj.name;

  String get leaderLabelRenderer {
    String nameLabel;
    if ((leaderSingleSelectModel != null &&
        leaderSingleSelectModel.selectedValues != null &&
        leaderSingleSelectModel.selectedValues.length != null)) {

      nameLabel = leaderSingleSelectModel.selectedValues.first.name;
    }

    return nameLabel;
  }

  ItemRenderer get leaderItemRenderer => (dynamic user) => user.name;

  Future<Null> goToList() async {
    _router.navigate(AppRoutes.initiativesRoute.toUrl());
  }

  FactoryRenderer get leaderFactoryRenderer => (_) => objective_detail_component.LeaderRendererComponentNgFactory;

  Date get startDate {
    Date _startDate;
    if (objective.startDate != null) {
      _startDate = new Date.fromTime(objective.startDate);
    }
    return _startDate;
  }

  set startDate(Date _startDate) {
    objective.startDate = _startDate.asUtcTime();
  }

  Date get endDate {
    Date _endDate;
    if (objective.endDate != null) {
      _endDate = new Date.fromTime(objective.endDate);
    }
    return _endDate;
  }

  set endDate(Date _endDate) {
    objective.endDate = _endDate.asUtcTime();
  }
}

@Component(
    selector: 'leader-renderer',
    //  template: '<material-icon icon="language"></material-icon>{{disPlayName}}',
    template: '<div left-icon class="avatar-icon" [style.background-image]="disPlayurl"></div>{{disPlayName}}',

    styles: const [
      ''
    ],
    directives: const [
      MaterialIconComponent
    ])
class LeaderRendererComponent implements RendersValue {
  String disPlayName = '';
  String disPlayurl;

  @override
  set value(newValue) {
    disPlayName = (newValue as User).name;
    disPlayurl = 'url(' + common_service.userUrlImage((newValue as User))  + ')';
  }
}
// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel

import 'package:auge/shared/model/organization.dart';
import 'package:auge/shared/model/user.dart';
import 'package:auge/shared/model/initiative/state.dart';
import 'package:auge/shared/model/initiative/stage.dart';
import 'package:auge/shared/model/initiative/work_item.dart';

/// Domain model class to represent an initiative (action plan, projects)
class Initiative extends Object {
  String id;

  String name;
  String description;

  Organization organization;
  User leader;
  List<Stage> stages;
  List<WorkItem> workItems;

  Initiative() {
    stages = new List<Stage>();
    workItems = new List<WorkItem>();
  }

  Map<State, int> get stateWorkItemsCount {
    Map<State, int> m = new Map();
    Map<String, State> mSameState = new Map();
    State state;
    workItems.forEach( (key) {
      // Get a same object for all State objects with identical id
      state =  mSameState.putIfAbsent(key.stage.state.id, () => key.stage.state);

      m.putIfAbsent(state , () => 0);
      m.update(state, (i) => i + 1);
    });
    return m;
  }


  Map<Stage, int> get stageWorkItemsCount  {
    Map<Stage, int> m = new Map();
    Map<String, Stage> mSameStage = new Map();
    Stage stage;
    workItems.forEach( (key) {
      // Get a same object for all State objects with identical id
      stage =  mSameStage.putIfAbsent(key.stage.id, () => key.stage);

      m.putIfAbsent(stage, () => 0);
      m.update(stage, (i) => i + 1);
    });
    return m;
  }

  int get workItemsCount   {
    return workItems.length;
  }

  int get workItemsOverDueCount  {
    int n = 0;
    workItems.forEach((i) => i.isOverdue ? ++n : null);
    return n;
  }

}

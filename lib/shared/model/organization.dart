// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel

/// Domain model class to represent an organiozation (corporate, team, etc.)

class Organization extends Object  {
  String id;
  String name;

  /// i.e. CNPJ (Brazil), EIN (USA)
  String code;

  Organization();

 }
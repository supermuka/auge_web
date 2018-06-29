// Copyright (c) 2018, Levius Tecnologia Ltda. All rights reserved.
// Author: Samuel C. Schwebel.

import 'dart:async';

import 'package:angular/core.dart';

import 'package:auge_shared/model/organization.dart';

import 'package:auge_web/services/augeapi_service.dart';

@Injectable()
class OrganizationService {

  final AugeApiService _augeApiService;

  OrganizationService(this._augeApiService);

  /// Return a list of [Organization]
  Future<List<Organization>> getOrganizations() async {

    return await _augeApiService.augeApi.getOrganizations();

  }

  /// Return an Organization by [id]
  Future<Organization> getOrganizationById(String id) async {

    return await _augeApiService.augeApi.getOrganizationById(id);

  }

  /// Save (create or update)an [Organization]
  void saveOrganization(Organization organization) {
    if (organization.id == null) {
      _augeApiService.augeApi.createOrganization(organization);
    } else {
      _augeApiService.augeApi.updateOrganization(organization);
    }
  }

  /// Delete an [Organization]
  void deleteOrganization(Organization organization) {
    _augeApiService.augeApi.deleteOrganization(organization.id);

  }



/*
  Future<List<Empresa>> recuperarEmpresas({String chave}) async {
    var event;
    if (chave != null && chave.isNotEmpty) {
      event = await fb.database().ref('empresas').orderByKey().equalTo(chave).once("value");

    } else {
      event = await fb.database().ref('empresas').once("value");
    }

    //var event = await fb.database().ref('empresa').once("value");
    if (event.snapshot.exists()) {

      event.snapshot.forEach((ss) {

        empresas.add(new Empresa()..chave = ss.key..nome = ss.val()["nome"]..cnpj = ss.val()["cnpj"]);

      }
      );
    }
    return empresas;
  }
  */


/*

  void salvarEmpresa(Empresa domain)  {

    fb.DatabaseReference dr =    fb.database().ref('empresas');

    if (domain.chave == null || domain.chave.trim().length == 0) {

      domain.chave =  dr.push().key;

      empresas.add(domain);

    } else {
   //   empresas[empresas.indexOf(empresas.firstWhere((e) => e.chave == domain.chave))] = domain;
    }

    dr.child('${domain.chave}/nome').set(domain.nome);
    dr.child('${domain.chave}/cnpj').set(domain.cnpj);

  }

  void excluirEmpresa(Empresa domain) {

    fb.DatabaseReference dr =    fb.database().ref('empresas');

    if (domain.chave != null && domain.chave.trim().length > 0) {

      dr.child('${domain.chave}').remove();
    }

    empresas.removeAt(empresas.indexOf(empresas.firstWhere((e) => e.chave == domain.chave)));
  }
  */
}
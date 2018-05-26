import 'dart:async';
import 'dart:io';

import 'package:logging/logging.dart';
import 'package:args/args.dart';
import 'package:rpc/rpc.dart';

import 'package:auge/server/augeapi.dart';
import 'package:auge/server/initiativeaugeapi.dart';
import 'package:auge/server/objectiveaugeapi.dart';

//String _host = InternetAddress.anyIPv4.host;
//String _host = InternetAddress.loopbackIPv4.host;
String _host = '0.0.0.0'; // GCloud
const String _API_PREFIX = '/';
final ApiServer _apiServer = new ApiServer(apiPrefix: _API_PREFIX, prettyPrint: true);

Future main(List<String> args) async {
  Logger.root.level = Level.ALL;
  Logger.root.onRecord.listen((LogRecord rec) {
    print('${rec.level.name}: ${rec.time}: ${rec.message}');
  });

  var parser = new ArgParser()
    ..addOption('port', abbr: 'p', defaultsTo: '8091');

  var result = parser.parse(args);

  var port = int.parse(result['port'], onError: (val) {
    stdout.writeln('Could not parse port value "$val" into a number.');
    exit(1);
  });

  var server = await HttpServer.bind(_host, port);

  print('Auge Serving at http://${server.address.host}:${server.port}');

  _apiServer.addApi(new AugeApi());
  _apiServer.addApi(new InitiativeAugeApi());
  _apiServer.addApi(new ObjectiveAugeApi());
  _apiServer.enableDiscoveryApi();

  // response.headers.add('Access-Control-Allow-Headers', '*');


  server.listen(_apiServer.httpRequestHandler);


  /*
   HttpServer.bind('127.0.0.1', 8080).then((server){
    server.listen((HttpRequest request){
      request.uri.queryParameters.forEach((param,val){
        print(param + '-' + val);
      });

      request.response.headers.add("Access-Control-Allow-Origin", "*");
      request.response.headers.add("Access-Control-Allow-Methods", "POST,GET,DELETE,PUT,OPTIONS");

      request.response.statusCode = HttpStatus.OK;
      request.response.write("Success!");
      request.response.close();
    });
  });
   */
}
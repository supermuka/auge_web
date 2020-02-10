
import 'package:test/test.dart';
//import 'package:auge_shared/route/app_routes_definition.dart';
import 'package:auge_web/route/app_routes.dart';

void main() {

  setUp(() {

  });

  // Role: superAdmin
  // Object: users
  group('Test Routes', () {

    test('objectivesRouteUrl.', () {
       expect(AppRoutes.objectivesRoute.toUrl(), equals('') /*equals(AppRoutesUrl.objectivesRouteUrl)*/ );
    });
  });
}
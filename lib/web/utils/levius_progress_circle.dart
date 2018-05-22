import 'package:angular/angular.dart';

@Component(
    selector: 'levius-progress-circle',
    providers: const <dynamic>[],
    directives: const [
      coreDirectives,
    ],
    templateUrl: 'levius_progress_circle.html',
    styleUrls: const [
      'levius_progress_circle.css',
    ])

class LeviusProgressCircleComponent {

  @Input()
  int percent = 0;

  @Input()
  String size = 'small';

  @Input()
  String align = '';

}
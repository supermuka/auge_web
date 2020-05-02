final List<dynamic> styles = ['@charset "UTF-8";\n.dialog-custom {\n  min-width: 360px;\n}\n\n.material-fab-add {\n  position: fixed !important;\n  z-index: 9999;\n  float: right;\n  bottom: 64px;\n  right: 64px;\n  background-color: #db4437;\n  color: #fff;\n}\n\n.input-container {\n  display: inline-block;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  width: 100%;\n}\n.input-container:focus-within label {\n  display: block;\n  font-size: 12px;\n  color: #4285f4;\n  margin-top: -4px;\n}\n.input-container:not(:focus-within) label {\n  display: block;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.54);\n  margin-top: -4px;\n}\n.input-container material-datepicker {\n  display: block;\n  margin-top: 4px;\n}\n.input-container material-dropdown-select {\n  display: block;\n  margin-top: 4px;\n  margin-bottom: 24px;\n}\n\n/*\n// based on AngularDart Gallery - MaterialInput\n// basead on  @include button-color(\$not-raised, \$color) MaterialButton Mixins - THIS DID NOT WORK FINE\n\n  \$color: \$mat-blue;\n  \$selector: \'material-button\';\n  \$raised: \$selector + \'[raised]\';\n  @include button-background-color(\$raised, \$color);\n  @include button-color(\$raised, \$mat-white);\n\n  \$not-raised: \$selector + \':not([raised])\';\n  @include button-color(\$not-raised, \$color);\n*/\n::ng-deep material-button:not([disabled]):not([icon])[raised] {\n  background-color: #4285f4;\n  color: #fff;\n}\n::ng-deep material-button:not([disabled]):not([icon]):not([raised]) {\n  color: #4285f4;\n}\n\n.footer-material-tab {\n  margin-left: -16px;\n  margin-right: -16px;\n  box-sizing: border-box;\n  flex-shrink: 0;\n  padding: 16px 8px 16px 8px;\n  border-top: 1px #e0e0e0 solid;\n}\n\n.text-group-letter {\n  color: white;\n  /* foi preciso colocar, senão não funcionava o mix-blend-mode */\n  mix-blend-mode: difference;\n  line-height: 32px;\n  /* same height to parent - class avatar*/\n}\n\n.custom-expansionpanel-panel-specific-name-width {\n  width: 600px;\n}\n'];
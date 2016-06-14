/// <reference path="./references.d.ts"/>

/// <amd-dependency path="./factories" />
/// <amd-dependency path="./components" />
/// <amd-dependency path="./directives" />

import angular = require("angular");
import app = require("./app.module");
import routeConfig =  require("./route-config");
import httpConfig =  require("../../common/ts/http-config");
import i18n =  require("../../common/ts/i18n");

app.config(httpConfig).config(routeConfig).config(i18n);

export function start(){
  angular.element(document).ready(() => {
      $('#templates').load('/app/templates.html', function(templates: string){
          angular.bootstrap(document, [app.name]);
      });
  });
}

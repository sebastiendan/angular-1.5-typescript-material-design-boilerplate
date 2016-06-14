/// <reference path="./references.d.ts"/>

/// <amd-dependency path="angular-ui-router" />
/// <amd-dependency path="angular-messages" />
/// <amd-dependency path="angular-animate" />
/// <amd-dependency path="angular-material" />
/// <amd-dependency path="angular-material-design-lite" />
/// <amd-dependency path="angular-translate" />

import angular = require("angular");

export = angular.module("angularTypescriptMaterialDesignApp", ['ui.router', 'ngMessages', 'ngAnimate', 'ngSanitize', 'ngMaterial', 'mdl', 'pascalprecht.translate']);
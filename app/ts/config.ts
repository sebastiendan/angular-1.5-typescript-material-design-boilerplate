/// <reference path="./references.d.ts"/>

require.config({
    paths: {
        "jquery": "../../bower_components/jquery/dist/jquery.min",
        "angular": "../../bower_components/angular/angular.min",
        "angular-ui-router": "../../bower_components/angular-ui-router/release/angular-ui-router.min",
        "angular-sanitize": "../../bower_components/angular-sanitize/angular-sanitize.min",
        "angular-messages": "../../bower_components/angular-messages/angular-messages.min",
        "angular-animate": "../../bower_components/angular-animate/angular-animate.min",
        "angular-translate": "../../bower_components/angular-translate/angular-translate.min",
        "angular-material": "../../bower_components/angular-material/angular-material.min",
        "angular-material-design-lite": "../../bower_components/angular-material-design-lite/src/angular-material-design-lite",
        "angular-aria": "../../../bower_components/angular-aria/angular-aria.min"
    },
    shim: {
        "jquery": {
            exports: "$"
        },
        "angular": {
            exports: "angular",
            deps: ["jquery"]
        },
        "angular-ui-router": {
            deps: ["angular"]
        },
        "angular-sanitize": {
            deps: ["angular"]
        },
        "angular-messages": {
            deps: ["angular"]
        },
        "angular-animate": {
            deps: ["angular"]
        },
        "angular-translate": {
            deps: ["angular", "angular-sanitize"]
        },
        "angular-aria": {
            deps: ["angular"]
        },
        "angular-material": {
            deps: ["angular", "angular-aria"]
        },
        "angular-material-design-lite": {
            deps: ["angular"]
        }
    }
});

/// <reference path="./references.d.ts"/>

export =[
    "$stateProvider", "$httpProvider", "$urlRouterProvider", "$locationProvider", ($stateProvider: angular.ui.IStateProvider,
        $httpProvider: angular.IHttpProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) => {

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'header': { template: '<header-block mdl-upgrade></header-block>' },
                    'main': { template: '<home mdl-upgrade></home>' }
                }
            })
            .state('data', {
                url: '/data/',
                views: {
                    'header': { template: '<header-block mdl-upgrade></header-block>' },
                    'main': { template: '<view-list mdl-upgrade></view-list>' }
                }
            })
            .state('new-data', {
                url: '/new-data/',
                views: {
                    'header': { template: '<header-block mdl-upgrade></header-block>' },
                    'main': { template: '<view-form mdl-upgrade></view-form>' }
                }
            });

        $urlRouterProvider.otherwise("/");

        $locationProvider.html5Mode(true);
    }
];

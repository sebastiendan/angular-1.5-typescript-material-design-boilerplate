/// <reference path="./references.d.ts"/>

export =[
    "$stateProvider", "$httpProvider", "$urlRouterProvider", "$locationProvider", ($stateProvider: angular.ui.IStateProvider,
        $httpProvider: angular.IHttpProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) => {

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'header': { template: '<header-block></header-block>' },
                    'main': { template: '<home></home>' }
                }
            })
            .state('data', {
                url: '/data/',
                views: {
                    'header': { template: '<header-block></header-block>' },
                    'main': { template: '<dataTable></dataTable>' }
                }
            })
            .state('new-data', {
                url: '/new-data/',
                views: {
                    'header': { template: '<header-block></header-block>' },
                    'main': { template: '<dataForm></dataForm>' }
                }
            });

        $urlRouterProvider.otherwise("/");

        $locationProvider.html5Mode(true);
    }
];

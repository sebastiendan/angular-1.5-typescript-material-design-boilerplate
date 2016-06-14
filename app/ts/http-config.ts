/// <reference path="./references.d.ts"/>

export = ["$httpProvider", ($httpProvider: angular.IHttpProvider) => {

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';

}];

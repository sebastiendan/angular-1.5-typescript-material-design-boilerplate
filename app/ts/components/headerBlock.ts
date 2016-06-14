/// <reference path="../references.d.ts"/>

import {IComponentOptions, IScope} from "angular";

export class HeaderBlock implements IComponentOptions {

    public controller: any = HeaderController;
    public controllerAs: string = 'hc';
    public templateUrl: string = "header.html";

}

class HeaderController {
    static $inject = ["$translate"];

    constructor(private $translate: any) {

    }

    changeLanguage = (langKey: string) => {
        this.$translate.use(langKey);
    };
}

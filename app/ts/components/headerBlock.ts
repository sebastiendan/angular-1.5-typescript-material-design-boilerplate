/// <reference path="../../../common/ts/references.d.ts"/>

import {IComponentOptions, IScope} from "angular";
import {HostUser} from "../models/HostUser";
import {IStateService} from "angular-ui-router";
import {ISignInFactory} from "../factories/SignInFactory";
import {IHostSignedInUserFactory} from "../factories/HostSignedInUserFactory";


export class HeaderBlock implements IComponentOptions {

    public bindings: { [key: string]: any; } = {};
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

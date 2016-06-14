/// <reference path="../references.d.ts"/>

import {IComponentOptions, IScope} from "angular";

export class Home implements IComponentOptions {

    public controller: any = HomeController;
    public controllerAs: string = 'hc';
    public templateUrl: string = "home.html";

}

class HomeController {

}

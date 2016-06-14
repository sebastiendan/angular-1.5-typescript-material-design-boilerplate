/// <reference path="../../references.d.ts"/>

import {IComponentOptions} from "angular";

export class SdSubmit implements IComponentOptions {

    public controller: any = SdSubmitController;
    public controllerAs: string = 'ssc';
    public templateUrl: string = 'sd-submit.html';
    public bindings: { [binding: string]: string; } = {
        value: '@'
    };
}

class SdSubmitController {

    value: string;

}

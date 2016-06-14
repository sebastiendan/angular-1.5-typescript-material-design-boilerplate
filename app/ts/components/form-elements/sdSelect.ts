/// <reference path="../../references.d.ts"/>

import {IComponentOptions} from "angular";

export class SdSelect implements IComponentOptions {

    public controller: any = SdSelectController;
    public controllerAs: string = 'ssc';
    public templateUrl: string = 'sd-select.html';
    public bindings: { [binding: string]: string; } = {
        data: '<',
        label: '@',
        model: '='
    };
}

class SdSelectController {

    data: {};
    label: string;
    model: any;

}
/// <reference path="../../references.d.ts"/>

import {IComponentOptions} from "angular";

export class SdRadio implements IComponentOptions {

    public controller: any = SdRadioController;
    public controllerAs: string = 'src';
    public templateUrl: string = 'sd-radio.html';
    public bindings: { [binding: string]: string; } = {
        data: '<',
        label: '@',
        model: '=',
        disabled: '<'
    };
}

class SdRadioController {

    data: {};
    label: string;
    model: any;
    disabled: boolean = false;

    $onChanges = (model: any) => {
        if (model.disabled && model.disabled.currentValue === undefined) {
            this.disabled = false;
        }
    };
}
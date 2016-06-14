/// <reference path="../references.d.ts"/>

import {IComponentOptions} from "angular";

export class DataForm implements IComponentOptions {

    public controller: any = DataFormController;
    public controllerAs: string = 'dfc';
    public templateUrl: string = 'data-form.html';

}

class DataFormController {

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
/// <reference path="../../references.d.ts"/>

import {IComponentOptions, IFormController} from "angular";

export class SdInput implements IComponentOptions {

    public controller: any = SdInputController;
    public controllerAs: string = 'sic';
    public templateUrl: string = 'sd-input.html';
    public require: string | string[] | { [controller: string]: string; } = {
        form: '^form'
    };
    public bindings: { [binding: string]: string; } = {
        model: '=',
        label: '@',
        name: '@',
        type: '@',
        block: '<',
        required: '<',
        customMessages: '<',
        pattern: '<',
        disabled: '<',
        emptyLabel: '@',
        showEmptyLabel: '<',
        showInput: '<'
    };
}

class SdInputController {

    form: IFormController;
    model: any;
    label: string;
    name: string;
    type: string;
    block: boolean = true;
    required: boolean = false;
    customMessages: {}[];
    pattern: any;
    disabled: boolean = false;
    emptyLabel: string;
    showEmptyLabel: boolean = false;
    showInput: boolean = true;

    $onChanges = (model: any) => {
        if (model.showInput && model.showInput.currentValue === undefined) {
            this.showInput = true;
        }

        if (model.showEmptyLabel && model.showEmptyLabel.currentValue === undefined) {
            this.showEmptyLabel = false;
        }

        if (model.block && model.block.currentValue === undefined) {
            this.block = true;
        }

        if (model.disabled && model.disabled.currentValue === undefined) {
            this.disabled = false;
        }

        if (model.required && model.required.currentValue === undefined) {
            this.required = false;
        }
    };

    customPattern = (() => {
        return {
            test: (value: any) => {
                return this.pattern ? value == this.pattern : true;
            }
        }
    })();
}

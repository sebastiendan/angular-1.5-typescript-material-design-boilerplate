/// <reference path="../references.d.ts"/>

import {IComponentOptions, IHttpPromiseCallbackArg, IFormController} from "angular";
import {IStateService} from "angular-ui-router";
import {IDataFactory} from "../factories/DataFactory";
import {Data} from "../models/Data";

export class ViewForm implements IComponentOptions {

    public controller: any = ViewFormController;
    public controllerAs: string = 'vfc';
    public templateUrl: string = 'view-form.html';

}

class ViewFormController {
    static $inject = ['DataFactory', '$state'];

    newData: Data;
    dataForm: IFormController;

    constructor(private _dataFactory: IDataFactory, private _$state: IStateService) {

    }

    $onInit = () => {
        this.newData = new Data();
    };

    saveData = () => {
        if (this.dataForm.$valid) {
            this._dataFactory.add(this.newData)
                .then((result: IHttpPromiseCallbackArg<{}>) => {
                    this._$state.go('data');
                })
                .catch((result: IHttpPromiseCallbackArg<{}>) => {
                    //todo: Manage error
                });
        }
    };
}
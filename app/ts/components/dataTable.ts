/// <reference path="../references.d.ts"/>

import {IComponentOptions} from "angular";
import {IDataFactory} from "../factories/DataFactory";
import {Data} from "../models/Data";

export class DataTable implements IComponentOptions {

    public controller: any = DataTableController;
    public controllerAs: string = 'dtc';
    public templateUrl: string = 'data-table.html';

}

class DataTableController {
    static $inject = ['DataFactory'];

    data: {};
    label: string;
    model: any;
    disabled: boolean = false;

    constructor(private _dataFactory: IDataFactory) {

    }

    $onInit = () => {
        this._dataFactory.all().then((data: Data[]) => {
            this.data = data;
        });
    };

}
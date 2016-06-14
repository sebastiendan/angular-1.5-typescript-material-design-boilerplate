/// <reference path="../references.d.ts"/>

import {IComponentOptions} from "angular";
import {IDataFactory} from "../factories/DataFactory";
import {Data} from "../models/Data";

export class ViewList implements IComponentOptions {

    public controller: any = ViewListController;
    public controllerAs: string = 'vlc';
    public templateUrl: string = 'view-list.html';

}

class ViewListController {
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
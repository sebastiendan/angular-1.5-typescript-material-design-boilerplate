/// <reference path="../references.d.ts"/>

import {IPromise, IQService, IHttpPromiseCallbackArg, IHttpService} from "angular";
import {Data} from "../models/Data";
import {HttpResponse} from "./models/HttpResponse";

export interface IDataFactory {
    all(): IPromise<Data[] | { [id: string]: Array<string> }>;
    add(data: Data): IPromise<Data>;
}

export class DataFactory implements IDataFactory {
    static $inject = ['$http'];

    data: Data[];

    constructor(private $http: IHttpService, private $q: IQService) {
        this.data = [
            {
                brand: 'Fender',
                model: 'Stratocaster',
                colour: 'Sonic Blue'
            },
            {
                brand: 'Fender',
                model: 'Telecaster',
                colour: 'Sunburst'
            },
            {
                brand: 'Gibson',
                model: 'Les Paul',
                colour: 'Sunburst'
            }
        ];
    }

    all(): IPromise<Data[] | { [id: string]: Array<string> }> {

        let deffered = this.$q.defer();

        if (this.data) {
            deffered.resolve(this.data);
        } else {
            //todo: call api to get data. See example below:
            //this.$http.get(url).then((c: IHttpPromiseCallbackArg<HttpResponse>) => {
            //    this.data = c.data.result;
            //    deffered.resolve(this.data);
            //}).catch((c: IHttpPromiseCallbackArg<HttpResponse>) => {
            //    deffered.reject();
            //});
        }

        return deffered.promise;
    }

    add(data: Data): IPromise<Data> {

        let deffered = this.$q.defer();

        if (this.data) {
            this.data.push(data);
            deffered.resolve(this.data);
        } else {
            //todo: call api to post data
        }

        return deffered.promise;
    }

    static getInstance($http: IHttpService, $q: IQService): IDataFactory {
        return new DataFactory($http, $q);
    }
}

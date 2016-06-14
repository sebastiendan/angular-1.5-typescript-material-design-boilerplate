/// <reference path="../references.d.ts"/>

export class HttpResponse {
    status: string;
    result: { [id: string]: any };
    errors: { [id: string]: Array<string> };
}

import { Http, Headers, RequestOptions } from '@angular/http';

export class BaseService {

    requestOptions = new RequestOptions();

    constructor(protected http: Http) {
        this.requestOptions.headers = new Headers();
        this.requestOptions.headers.append('Content-Type', 'application/json');
    }
}

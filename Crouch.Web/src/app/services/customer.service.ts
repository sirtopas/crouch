import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../model/customer';
import { Environment } from '../Environment';
import 'rxjs/Rx';

@Injectable()
export class CustomerService {

    public customer: Customer;

    constructor(private http: Http) { }

    public getCustomers(): Observable<Customer[]> {
        return this.http
            .get(Environment.baseUrl + 'Customer')
            .map(res => res.json());
    }
}

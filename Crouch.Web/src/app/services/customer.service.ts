import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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

    public getCustomer(customerId: number): Observable<Customer> {
        return this.http
            .get(Environment.baseUrl + 'Customer/' + customerId)
            .map(res => res.json());
    }

    public postCustomer(customer: Customer) {
        return this.http.post(
            Environment.baseUrl +
            'Customer', JSON.stringify(customer)).map(res => res.json());
    }

    public putCustomer(customer: Customer) {
        let InData = { customerId: 'customer.customerId', customer: JSON.stringify(customer) };
        return this.http.put(
            Environment.baseUrl +
            'Customer', InData).map(res => res.json());
    }

    public deleteCustomer(customerId: number) {
        return this.http
            .delete(Environment.baseUrl + 'Customer/Delete/' + customerId)
            .map(res => res.json());
    }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { PagedRequest } from '../model/paged-request';
import { BaseService } from './base/base.service';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class CustomerService extends BaseService {

    public customer: Customer;

    constructor(protected http: Http) {
        super(http);
    }

    public getCustomers(pagedRequest: PagedRequest): Observable<Customer[]> {
        return this.http
            .post(environment.baseUrl + 'Customer/GetCustomers/', JSON.stringify(pagedRequest), this.requestOptions)
            .pipe(map(res => res.json()));
    }

    public getAllCustomers(): Observable<Customer[]> {
        return this.http
            .get(environment.baseUrl + 'Customer/GetAllCustomers')
            .pipe(map(res => res.json()));
    }

    public getCustomer(customerId: number): Observable<Customer> {
        return this.http
            .get(environment.baseUrl + 'Customer/' + customerId)
            .pipe(map(res => res.json()));
    }

    public postCustomer(customer: Customer) {
        return this.http
            .post(environment.baseUrl + 'Customer/PostCustomer', JSON.stringify(customer), this.requestOptions)
            .pipe(map(res => res.json()));
    }

    public putCustomer(customer: Customer) {
        return this.http
            .put(environment.baseUrl + 'Customer/PutCustomer/' + customer.customerId, JSON.stringify(customer), this.requestOptions)
            .pipe(map(res => res.json()));
    }

    public deleteCustomer(customerId: number) {
        return this.http
            .delete(environment.baseUrl + 'Customer/Delete/' + customerId)
            .pipe(map(res => res.json()));
    }
}

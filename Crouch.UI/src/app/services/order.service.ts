import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { environment } from '../../environments/environment';
import { BaseService } from './base/base.service';
import { map } from 'rxjs/operators';

@Injectable()
export class OrderService extends BaseService {

    constructor(protected http: Http) {
        super(http);
    }

    public getOrders(): Observable<Order[]> {
        return this.http
            .get(environment.baseUrl + 'Order/GetAllOrders', this.requestOptions)
            .pipe(map(res => res.json()));
    }

    public getCustomerOrders(customerId: number): Observable<Order[]> {
        return this.http
            .get(environment.baseUrl + 'Order/GetCustomerOrders/' + customerId)
            .pipe(map(res => res.json()));
    }

    public getOrder(orderId: number): Observable<Order> {
        return this.http
            .get(environment.baseUrl + 'Order/GetOrder/' + orderId, this.requestOptions)
            .pipe(map(res => res.json()));
    }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Order } from '../model/order';
import { environment } from '../../environments/environment';
import { BaseService } from './base/base.service';

@Injectable()
export class OrderService extends BaseService {

    constructor(protected http: Http) {
        super(http);
    }

    public getOrders(): Observable<Order[]> {
        return this.http
            .get(environment.baseUrl + 'Order', this.requestOptions)
            .map(res => res.json());
    }

    public getCustomerOrders(customerId: number): Observable<Order[]> {
        return this.http
            .get(environment.baseUrl + 'Order/GetCustomerOrders/' + customerId)
            .map(res => res.json());
    }

    public getOrder(orderId: number): Observable<Order> {
        return this.http
            .get(environment.baseUrl + 'Order/GetOrder/' + orderId, this.requestOptions)
            .map(res => res.json());
    }
}

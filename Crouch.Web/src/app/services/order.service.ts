import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Order } from '../model/order';
import { Environment } from '../Environment';

@Injectable()
export class OrderService {

    constructor(private http: Http) { }

    public getOrders(): Observable<Order[]> {
        return this.http
            .get(Environment.baseUrl + 'Order')
            .map(res => res.json());
    }

    public getCustomerOrders(customerId: number): Observable<Order[]> {
        return this.http
            .get(Environment.baseUrl + 'Order/GetCustomerOrders/' + customerId)
            .map(res => res.json());
    }

    public getOrder(orderId: number): Observable<Order> {
        return this.http
            .get(Environment.baseUrl + 'Order/GetOrder/' + orderId)
            .map(res => res.json());
    }
}

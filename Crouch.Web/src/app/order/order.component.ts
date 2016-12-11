import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { Customer } from '../model/customer';
import { OrderService } from '../services/order.service';
import 'rxjs/Rx';

@Component({
    selector: 'app-crouch-order',
    templateUrl: 'order.component.html',
    styleUrls: []
})
export class OrderComponent implements OnInit {

    public orders: Order[];
    public order: Order;
    public customers: Customer[];

    ngOnInit() {
        this.orderService.getOrders()
            .subscribe(res => this.orders = res);
    }

    constructor(private orderService: OrderService) { }

    public getOrder(id: number) {
        this.orderService.getOrder(id)
            .subscribe(res => this.order = res);
    }
}

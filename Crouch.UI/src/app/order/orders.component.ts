import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { OrderService } from '../services/order.service';

@Component({
    selector: 'orders',
    templateUrl: 'orders.component.html'
})

export class OrdersComponent implements OnInit {
    orders: Order[];
    constructor(private orderService: OrderService) { }

    ngOnInit() {
        this.orderService.getOrders().subscribe(orders => {
            this.orders = orders;
        });
    }
}

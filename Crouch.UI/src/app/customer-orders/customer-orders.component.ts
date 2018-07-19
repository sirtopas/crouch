import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Order } from '../model/order';

import { switchMap } from 'rxjs/operators';
@Component({
    selector: 'customer-orders',
    templateUrl: 'customer-orders.component.html'
})

export class CustomerOrdersComponent implements OnInit {

    isLoading = false;
    orders: Order[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private orderService: OrderService) { }

    ngOnInit() {
        this.isLoading = true;
        this.route.params
            .switchMap((params: ParamMap) => this.orderService.getCustomerOrders(+params['id']))
            .subscribe((orders) => {
                this.orders = orders;
                this.isLoading = false;
            });
    }
}

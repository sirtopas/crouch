import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Order } from '../model/order';
import { OrderItem } from '../model/order-item';

import { BsModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'order-details',
    templateUrl: 'order-details.component.html'
})

export class OrderDetailsComponent implements OnInit {

    @ViewChild('newOrderItemModal') newOrderItemModal: BsModalComponent;
    newOrderItem: any;
    order: Order;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private orderService: OrderService) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: ParamMap) => this.orderService.getOrder(+params['id']))
            .subscribe((order) => this.order = order);
    }

    addOrderItem() {
        this.newOrderItem = new OrderItem();
        this.newOrderItemModal.open();
    }
}

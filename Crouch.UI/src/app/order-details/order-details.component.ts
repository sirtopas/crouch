import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Order } from '../model/order';
import { OrderItem } from '../model/order-item';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-order-details',
    templateUrl: 'order-details.component.html'
})

export class OrderDetailsComponent implements OnInit {

    @ViewChild('newOrderItemModal') newOrderItemModal: ModalDirective;
    newOrderItem: any;
    order: Order;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private orderService: OrderService) { }

    ngOnInit() {
        this.route.params.pipe(
            switchMap((params: ParamMap) => this.orderService.getOrder(+params['id'])))
            .subscribe((order) => this.order = order);
    }

    addOrderItem() {
        this.newOrderItem = new OrderItem();
        this.newOrderItemModal.show();
    }
}

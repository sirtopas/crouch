import { Component, OnInit, ViewChild } from '@angular/core';

import { Order } from '../model/order';
import { Customer } from '../model/customer';
import { OrderService } from '../services/order.service';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import 'rxjs/Rx';

@Component({
	selector: 'app-crouch-order',
	templateUrl: 'order.component.html',
	styleUrls: []
})
export class OrderComponent implements OnInit {

	@ViewChild('newOrderModal') newOrderModal: ModalComponent;

	public orders: Order[];
	public order: Order;
	public newOrder: Order;
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

	public addOrder() {
		this.newOrder = new Order;
		this.newOrderModal.instance.open();
	}
}

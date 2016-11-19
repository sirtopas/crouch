import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Order } from '../model/order';
import { Customer } from '../model/customer';
import 'rxjs/Rx';

@Component({
  selector: 'crouch-order',
  templateUrl: 'order.component.html',
  styleUrls: []
})
export class OrderComponent {

  url: string;
  public orders: Order[];
  public order: Order;
  public customers: Customer[];

  constructor(private http: Http) {
    this.http = http;
    this.getOrders();
  }

  public getOrders() {
    this.url = 'http://localhost:20476/Api/Order';
    this.http.get(this.url)
      .map(response => response.json())
      .subscribe((res) => {
        this.orders = res
      },
      (err) => console.log(err),
      () => console.log('Done')
      );
  }

  public getOrder(id: number) {
    this.http.get('http://localhost:20476/Api/Order/GetOrder?id=' + id)
      .map(response => response.json())
      .subscribe((res) => {
        this.order = res;
      },
      (err) => console.log(err)
      );
  }
}

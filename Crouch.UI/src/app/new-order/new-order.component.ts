import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Customer } from '../model/customer';
import { Order } from '../model/order';
import { Product } from '../model/product';
import { ProductCategory } from '../model/product-category';
import { CustomerService } from '../services/customer.service';
import { ProductService } from '../services/product.service';
import { OrderItem } from '../model/order-item';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-crouch-new-order',
    templateUrl: 'new-order.component.html'
})

export class NewOrderComponent implements OnInit {

    productCategories: ProductCategory[];
    products: Product[];
    newOrder: Order;
    customers: Customer[];
    isLoading = false;

    constructor(
        private customerService: CustomerService,
        private productService: ProductService,
        public toastr: ToastrService,
        private viewContainerRef: ViewContainerRef,
        private domSanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.isLoading = true;
        this.newOrder = new Order();
        this.newOrder.orderItems = [];
        this.newOrder.orderValue = 0;
        this.customerService.getAllCustomers().subscribe(customers => {
            this.customers = customers;
            this.isLoading = false;
        });
    }

    customerSelected(customer: Customer) {
        this.newOrder.customer = customer;
        this.productService.getProductCategories().subscribe(categories => {
            this.productCategories = categories;
        });
        this.productService.getProducts().subscribe(products => {
            this.products = products;
        });
    }

    addProductToOrder(product: Product, quantity: number) {
        const orderItem = new OrderItem();
        orderItem.product = product;
        orderItem.quantity = quantity;
        if (this.newOrder.orderItems.find(i => i.product.productId === product.productId)) {
            this.newOrder.orderItems.find(i => i.product.productId === product.productId).quantity++;
        } else {
            this.newOrder.orderItems.push(orderItem);
        }
        this.calculateOrderValue();
        this.toastr.success(product.productTitle + ' has been added to the order', 'Item Added!');
    }

    calculateOrderValue() {
        this.newOrder.orderItems.forEach(oi => {
            this.newOrder.orderValue += oi.product.pricePerKg * oi.quantity;
        });
    }

    autocompleListFormatter = (data: any): SafeHtml => {
        const html = `<span>${data.firstName}  ${data.lastName} - ${data.postCode}</span>`;
        return this.domSanitizer.bypassSecurityTrustHtml(html);
    }
}

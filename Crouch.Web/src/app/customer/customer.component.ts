import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../services/customer.service';
import 'rxjs/Rx';

@Component({
    selector: 'app-crouch-customer',
    templateUrl: 'customer.component.html'
})
export class CustomerComponent implements OnInit {

    public customers: Customer[];
    public customer: Customer;

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
        this.customerService.getCustomers()
            .subscribe(res => this.customers = res);
    }

    public getCustomer(customerId: number) {
        this.customerService.getCustomer(customerId)
            .subscribe(res => this.customer = res);
    }

    public newCustomer() {
        this.customer = new Customer();
    }

    public updateCustomer() {
        if (this.customer.customerId === undefined) {
            this.postCustomer();
        } else {
            this.putCustomer();
        }
    }

    public putCustomer() {
        this.customerService.putCustomer(this.customer)
            .subscribe(customer => this.customer);
    }

    public postCustomer() {
        this.customerService.postCustomer(this.customer)
            .subscribe(customer => this.customer);
    }

    onSubmit() {
        this.updateCustomer();
    }
}

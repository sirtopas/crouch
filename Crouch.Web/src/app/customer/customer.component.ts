import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
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

    constructor(private http: Http, private customerService: CustomerService) {
        this.http = http;
    }

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
            .subscribe(complete => console.log('done'));
    }

    public postCustomer() {
        this.http.post('http://localhost:20476/Api/Customer/PostCustomer',
            JSON.stringify(this.customer))
            .map(response => response.json())
            .subscribe((res) => {
                this.customer = new Customer();
            },
            (err) => console.log(err)
            );
    }

    onSubmit() {
        this.updateCustomer();
    }
}

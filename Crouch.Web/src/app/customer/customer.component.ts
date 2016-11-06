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
        this.customerService.getCustomers().subscribe(res => this.customers = res);
    }

    public getCustomer(customerId: number) {
        this.customerService.getCustomer(customerId).subscribe(res => this.customer = res);
    }

    public newCustomer() {
        this.customer = new Customer();
    }

    public updateCustomer() {
        if (this.customer.customerId === undefined) {
            this.postCustomer();
        }
        else {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');

            this.http.put('http://localhost:20476/Api/Customer/PutCustomer?id=' + this.customer.customerId, JSON.stringify(this.customer), { headers: headers })
                .map(response => response.json())
                .subscribe((res) => {
                    this.customer = res
                },
                (err) => console.log(err)
                );
        }
    }

    public postCustomer() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post('http://localhost:20476/Api/Customer/PostCustomer', JSON.stringify(this.customer), { headers: headers })
            .map(response => response.json())
            .subscribe((res) => {
                this.customer = new Customer();
            },
            (err) => console.log(err)
            );
    }

    submitted = false;

    onSubmit() {
        this.submitted = true;
        this.updateCustomer();
    }
}

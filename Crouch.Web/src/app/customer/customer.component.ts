import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../model/customer';
import 'rxjs/Rx';

@Component({
    selector: 'crouch-customer',
    templateUrl: 'customer.component.html',
    styles: []
})
export class CustomerComponent {

    url: string;
    public customers: Customer[];
    public customer: Customer;

    constructor(private http: Http) {
        this.http = http;
        this.getCustomers();
    }

    public getCustomers() {
        this.url = 'http://localhost:20476/Api/Customer';
        this.http.get(this.url)
            .map(response => response.json())
            .subscribe((res) => {
                this.customers = res,
                    console.log(this.customers)
            },
            (err) => console.log(err),
            () => console.log("Done")
            );
    }

    public getCustomer(id: number) {
        this.http.get('http://localhost:20476/Api/Customer/GetCustomer?id=' + id)
            .map(response => response.json())
            .subscribe((res) => {
                this.customer = res
            },
            (err) => console.log(err)
            );
    }

    public newCustomer() {
        this.customer = new Customer();
    }

    public updateCustomer() {
        if (this.customer.CustomerId === undefined) {
            this.postCustomer();
        }
        else {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');

            this.http.put('http://localhost:20476/Api/Customer/PutCustomer?id=' + this.customer.CustomerId, JSON.stringify(this.customer), { headers: headers })
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

import { Component, OnInit, ViewContainerRef, ViewChild, Input } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../services/customer.service';
import { PagedRequest } from '../model/paged-request';
import { ToastrService } from 'ngx-toastr';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    moduleId: module.id,
    selector: 'app-crouch-customers',
    templateUrl: 'customers.component.html'
})

export class CustomersComponent implements OnInit {

    @Input() newCustomerFlag: boolean;
    @ViewChild('newCustomerModal') newCustomerModal: ModalDirective;
    @ViewChild('editCustomerModal') editCustomerModal: ModalDirective;
    isLoading = false;
    hide = false;
    customers: Customer[];
    customer: Customer;
    newCustomer: Customer;
    customerToEdit: Customer;
    pagedRequest = new PagedRequest();
    currentPage = 0;
    total = 20;

    constructor(public toastr: ToastrService, private customerService: CustomerService, viewContainerRef: ViewContainerRef) {
    }

    ngOnInit() {
        this.isLoading = true;
        this.pagedRequest.pageNumber = 1;
        this.pagedRequest.pageSize = 10;
        if (!this.newCustomerFlag) {
            this.getAllCustomers();
        }
    }

    public getAllCustomers() {
        this.customerService.getCustomers(this.pagedRequest).subscribe(res => {
            this.customers = res;
            this.isLoading = false;
        });
    }

    public getCustomer(customerId: number) {
        this.customerService.getCustomer(customerId)
            .subscribe(res => this.customer = res);
    }

    public editCustomer(customerId: number) {
        this.customerToEdit = this.customers.filter(c => c.customerId === customerId)[0];
        this.editCustomerModal.show();
    }

    public createNewCustomer() {
        this.newCustomer = new Customer();
        this.newCustomerModal.show();
    }

    public saveNewCustomer() {
        this.isLoading = true;
        this.customerService.postCustomer(this.newCustomer).subscribe(response => {
            this.newCustomer = new Customer();
            this.toastr.success('New Customer has been created', 'Customer Created');
            this.newCustomerModal.hide();
            this.pagedRequest.pageNumber = 0;
            this.pagedRequest.pageSize = 10;
            if (!this.newCustomerFlag) {
                this.getAllCustomers();
            }
        });
    }

    public getPage(event: any) {
        this.isLoading = true;
        this.pagedRequest.pageNumber = +event;
        this.currentPage = +event;
        this.customerService.getCustomers(this.pagedRequest).subscribe(res => {
            this.customers = res;
            this.isLoading = false;
        });
    }

    public updateCustomer() {
        this.customerService.putCustomer(this.customerToEdit).subscribe(response => {
            this.customerToEdit = new Customer();
            this.getAllCustomers();
            this.toastr.success('Customer has been updated', 'Customer Updated');
            this.editCustomerModal.hide();
        });
    }
}

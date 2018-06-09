import { Component, OnInit, ViewContainerRef, ViewChild, Input } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../services/customer.service';
import { PagedRequest } from '../model/paged-request';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BsModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    moduleId: module.id,
    selector: 'crouch-customers',
    templateUrl: 'customers.component.html'
})

export class CustomersComponent implements OnInit {

    @Input() newCustomerFlag: boolean;
    @ViewChild('newCustomerModal') newCustomerModal: BsModalComponent;
    @ViewChild('editCustomerModal') editCustomerModal: BsModalComponent;
    isLoading = false;
    customers: Customer[];
    customer: Customer;
    newCustomer: Customer;
    customerToEdit: Customer;
    pagedRequest = new PagedRequest();
    currentPage = 0;
    total = 20;

    constructor(public toastr: ToastsManager, private customerService: CustomerService, viewContainerRef: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(viewContainerRef);
    }

    ngOnInit() {
        this.isLoading = true;
        this.pagedRequest.pageNumber = 0;
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
        this.editCustomerModal.open();
    }

    public createNewCustomer() {
        this.newCustomer = new Customer();
        this.newCustomerModal.open();
    }

    public saveNewCustomer() {
        this.isLoading = true;
        this.customerService.postCustomer(this.newCustomer).subscribe(response => {
            this.newCustomer = new Customer();
            this.toastr.success('New Customer has been created', 'Customer Created');
            this.newCustomerModal.close();
            this.pagedRequest.pageNumber = 0;
            this.pagedRequest.pageSize = 10;
            if (!this.newCustomerFlag) {
                this.getAllCustomers();
            }
        });
    }

    public getPage(event: any) {
        console.log(event);
    }

    public updateCustomer() {
        this.customerService.putCustomer(this.customerToEdit).subscribe(response => {
            this.customerToEdit = new Customer();
            this.getAllCustomers();
            this.toastr.success('Customer has been updated', 'Customer Updated');
            this.editCustomerModal.close();
        });
    }
}

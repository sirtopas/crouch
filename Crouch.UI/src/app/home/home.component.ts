import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'crouch-home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    @ViewChild('crouchcustomers') crouchcustomers;
    constructor() { }

    ngOnInit() { }

    public createCustomer() {
        this.crouchcustomers.createNewCustomer();
    }
}

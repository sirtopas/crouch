import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from '../app/customer/customers.component';
import { CustomerOrdersComponent } from '../app/customer-orders/customer-orders.component';
import { OrderDetailsComponent } from '../app/order-details/order-details.component';
import { OrdersComponent } from '../app/order/orders.component';
import { ProductComponent } from '../app/product/product.component';
import { NewOrderComponent } from '../app/new-order/new-order.component';

import { CustomerService } from '../app/services/customer.service';
import { OrderService } from '../app/services/order.service';
import { ProductService } from '../app/services/product.service';

import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BsModalModule } from 'ng2-bs3-modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CustomersComponent,
        CustomerOrdersComponent,
        NewOrderComponent,
        OrdersComponent,
        OrderDetailsComponent,
        ProductComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        BsModalModule,
        FormsModule,
        HttpModule,
        NgxPaginationModule,
        NguiAutoCompleteModule,
        routing,
        ToastModule.forRoot()
    ],
    providers: [
        CustomerService,
        OrderService,
        ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

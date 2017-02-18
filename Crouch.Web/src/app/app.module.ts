import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';

import { CustomerService } from './services/customer.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Ng2PaginationModule } from 'ng2-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrderComponent,
    ProductComponent
  ],
  imports: [
    Ng2Bs3ModalModule,
    Ng2PaginationModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    CustomerService,
    OrderService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

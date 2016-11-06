import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routes';

import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';

import { CustomerService } from './services/customer.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

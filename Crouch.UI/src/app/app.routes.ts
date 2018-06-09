import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { CustomersComponent } from '../app/customer/customers.component';
import { CustomerOrdersComponent } from '../app/customer-orders/customer-orders.component';
import { OrderDetailsComponent } from '../app/order-details/order-details.component';
import { OrdersComponent } from '../app/order/orders.component';
import { ProductComponent } from '../app/product/product.component';
import { NewOrderComponent } from '../app/new-order/new-order.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'orders/:id', component: CustomerOrdersComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'products', component: ProductComponent },
    { path: 'new-order', component: NewOrderComponent },
    { path: 'order-details/:id', component: OrderDetailsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

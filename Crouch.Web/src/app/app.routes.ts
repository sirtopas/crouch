import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/orders' },
    { path: 'customers', component: CustomerComponent },
    { path: 'orders', component: OrderComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
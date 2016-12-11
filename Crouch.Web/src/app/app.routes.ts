import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/orders' },
    { path: 'customers', component: CustomerComponent },
    { path: 'orders', component: OrderComponent },
    { path: 'products', component: ProductComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

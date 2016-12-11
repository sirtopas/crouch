import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import 'rxjs/Rx';

@Component({
    selector: 'app-crouch-product',
    templateUrl: 'product.component.html',
    styleUrls: []
})
export class ProductComponent implements OnInit {

    public products: Product[];
    public product: Product;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getProducts()
            .subscribe(res => {
                this.products = res;
            });
    }
}

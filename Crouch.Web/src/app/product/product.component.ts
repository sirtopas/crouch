import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { ProductCategory } from '../model/productCategory';
import 'rxjs/Rx';

@Component({
    selector: 'app-crouch-product',
    templateUrl: 'product.component.html',
    styleUrls: []
})
export class ProductComponent implements OnInit {

    public products: Product[];
    public categories: ProductCategory[];
    public product: Product;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getProductCategories()
            .subscribe(res => {
                this.categories = res;
                console.log(this.categories);
            });
    }

    public getProducts(categoryId: number) {
        this.productService.getProductsInCategory(categoryId)
            .subscribe(res => {
                this.products = res;
            });
    }
}

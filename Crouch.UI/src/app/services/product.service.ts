import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductCategory } from '../model/product-category';
import { environment } from '../../environments/environment';
import { BaseService } from './base/base.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService extends BaseService {

    constructor(protected http: Http) {
        super(http);
    }

    public getProducts(): Observable<Product[]> {
        return this.http
            .get(environment.baseUrl + 'Product')
            .pipe(map(res => res.json()));
    }

    public getProductCategories(): Observable<ProductCategory[]> {
        return this.http
            .get(environment.baseUrl + 'ProductCategory/GetAllProductCategories')
            .pipe(map(res => res.json()));
    }

    public getProductsInCategory(categoryId: number): Observable<Product[]> {
        return this.http
            .get(environment.baseUrl + 'Product/GetProductsInCategory/' + categoryId)
            .pipe(map(res => res.json()));
    }

    public postProductCategory(productCategory: ProductCategory) {
        return this.http
            .post(environment.baseUrl + 'ProductCategory/PostProductCategory', JSON.stringify(productCategory), this.requestOptions)
            .pipe(map(res => res.json()));
    }

    public putProductCategory(productCategory: ProductCategory) {
        return this.http
            .put(environment.baseUrl + 'ProductCategory/PutProductCategory/' + productCategory.productCategoryId,
                JSON.stringify(productCategory), this.requestOptions)
            .pipe(map(res => res.json()));
    }

    public postProduct(product: Product) {
        return this.http
            .post(environment.baseUrl + 'Product/PostProduct', JSON.stringify(product), this.requestOptions)
            .pipe(map(res => res.json()));
    }

    public putProduct(product: Product) {
        return this.http
            .put(environment.baseUrl + 'Product/PutProduct/' + product.productId, JSON.stringify(product), this.requestOptions)
            .pipe(map(res => res.json()));
    }
}

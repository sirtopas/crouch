import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../model/product';
import { Environment } from '../Environment';

@Injectable()
export class ProductService {

    public product: Product;

    constructor(private http: Http) { }

    public getProducts(): Observable<Product[]> {
        return this.http
            .get(Environment.baseUrl + 'Product')
            .map(res => res.json());
    }
}

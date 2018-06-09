import { ProductCategory } from '../model/product-category';

export class Product {
    public productId: number;
    public productCategoryId: number;
    public productTitle: string;
    public productDescription: string;
    public pricePerKg: number;
    public isActive: boolean;
    public sumByWeight: boolean;
    public productCategory: ProductCategory;
}

import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Product } from '../model/product';
import { ProductCategory } from '../model/product-category';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-crouch-product',
    templateUrl: 'product.component.html'
})

export class ProductComponent implements OnInit {

    @ViewChild('newProductCategoryModal') newProductCategoryModal: ModalDirective;
    @ViewChild('newProductModal') newProductModal: ModalDirective;
    @ViewChild('editProductCategoryModal') editProductCategoryModal: ModalDirective;
    @ViewChild('editProductModal') editProductModal: ModalDirective;
    isLoading = false;
    products: Product[];
    productCategories: ProductCategory[];
    newProduct: Product;
    newProductCategory: ProductCategory;
    productToEdit: Product;
    productCategoryToEdit: ProductCategory;

    constructor(
        private productService: ProductService,
        public toastr: ToastrService,
        private viewContainerRef: ViewContainerRef) {
    }

    ngOnInit() {
        this.productService.getProductCategories().subscribe(categories => {
            this.productCategories = categories;
            this.productService.getProducts().subscribe(products => {
                this.products = products;
            });
        });
    }

    private createNewProductCategory() {
        this.newProductCategory = new ProductCategory();
        this.newProductCategoryModal.show();
    }

    private createNewProduct() {
        this.newProduct = new Product();
        this.newProduct.productCategory = new ProductCategory();
        this.newProductModal.show();
    }

    private editProductCategory(productCategory: ProductCategory) {
        this.productCategoryToEdit = productCategory;
        this.editProductCategoryModal.show();
    }

    public updateProductCategory() {
        this.productService.putProductCategory(this.productCategoryToEdit).subscribe(res => {
            this.toastr.success(this.productCategoryToEdit.categoryName + ' has been updated', 'Category updated');
            this.productCategoryToEdit = new ProductCategory();
            this.editProductCategoryModal.hide();
        });
    }

    public saveNewProductCategory() {
        this.isLoading = true;
        this.productService.postProductCategory(this.newProductCategory).subscribe(res => {
            this.productService.getProductCategories().subscribe(categories => {
                this.productCategories = categories;
                this.newProductModal.hide();
                this.isLoading = false;
                this.toastr.success(this.newProductCategory.categoryName + ' has been created', 'New Category created');
                this.newProductCategory = new ProductCategory();
            });
        });
    }

    private editProduct(product: Product) {
        this.productToEdit = product;
        this.editProductModal.show();
    }

    public updateProduct() {
        this.productService.putProduct(this.productToEdit).subscribe(res => {
            this.toastr.success(this.productToEdit.productTitle + ' has been updated', 'Product updated');
            this.productToEdit = new Product();
            this.productToEdit.productCategory = new ProductCategory();
            this.editProductModal.hide();
        });
    }

    public saveNewProduct() {
        this.isLoading = true;
        this.newProduct.productCategory = this.productCategories.find(
            pc => pc.productCategoryId === this.newProduct.productCategory.productCategoryId);
        this.productService.postProduct(this.newProduct).subscribe(res => {
            this.productService.getProducts().subscribe(products => {
                this.products = products;
                this.newProductCategoryModal.hide();
                this.isLoading = false;
                this.toastr.success(this.newProduct.productTitle + ' has been created', 'New Product created');
                this.newProduct = new Product();
                this.newProduct.productCategory = new ProductCategory();
            });
        });
    }
}

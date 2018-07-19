import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Product } from '../model/product';
import { ProductCategory } from '../model/product-category';
import { ProductService } from '../services/product.service';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BsModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: 'crouch-product',
    templateUrl: 'product.component.html'
})

export class ProductComponent implements OnInit {

    @ViewChild('newProductCategoryModal') newProductCategoryModal: BsModalComponent;
    @ViewChild('newProductModal') newProductModal: BsModalComponent;
    @ViewChild('editProductCategoryModal') editProductCategoryModal: BsModalComponent;
    @ViewChild('editProductModal') editProductModal: BsModalComponent;
    isLoading = false;
    products: Product[];
    productCategories: ProductCategory[];
    newProduct: Product;
    newProductCategory: ProductCategory;
    productToEdit: Product;
    productCategoryToEdit: ProductCategory;

    constructor(
        private productService: ProductService,
        public toastr: ToastsManager,
        private viewContainerRef: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(viewContainerRef);
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
        this.newProductCategoryModal.open();
    }

    private createNewProduct() {
        this.newProduct = new Product();
        this.newProduct.productCategory = new ProductCategory();
        this.newProductModal.open();
    }

    private editProductCategory(productCategory: ProductCategory) {
        this.productCategoryToEdit = productCategory;
        this.editProductCategoryModal.open();
    }

    public updateProductCategory() {
        this.productService.putProductCategory(this.productCategoryToEdit).subscribe(res => {
            this.toastr.success(this.productCategoryToEdit.categoryName + ' has been updated', 'Category updated');
            this.productCategoryToEdit = new ProductCategory();
            this.editProductCategoryModal.close();
        });
    }

    public saveNewProductCategory() {
        this.isLoading = true;
        this.productService.postProductCategory(this.newProductCategory).subscribe(res => {
            this.productService.getProductCategories().subscribe(categories => {
                this.productCategories = categories;
                this.newProductModal.close();
                this.isLoading = false;
                this.toastr.success(this.newProductCategory.categoryName + ' has been created', 'New Category created');
                this.newProductCategory = new ProductCategory();
            });
        });
    }

    private editProduct(product: Product) {
        this.productToEdit = product;
        this.editProductModal.open();
    }

    public updateProduct() {
        this.productService.putProduct(this.productToEdit).subscribe(res => {
            this.toastr.success(this.productToEdit.productTitle + ' has been updated', 'Product updated');
            this.productToEdit = new Product();
            this.productToEdit.productCategory = new ProductCategory();
            this.editProductModal.close();
        });
    }

    public saveNewProduct() {
        this.isLoading = true;
        this.newProduct.productCategory = this.productCategories.find(
            pc => pc.productCategoryId === this.newProduct.productCategory.productCategoryId);
        this.productService.postProduct(this.newProduct).subscribe(res => {
            this.productService.getProducts().subscribe(products => {
                this.products = products;
                this.newProductCategoryModal.close();
                this.isLoading = false;
                this.toastr.success(this.newProduct.productTitle + ' has been created', 'New Product created');
                this.newProduct = new Product();
                this.newProduct.productCategory = new ProductCategory();
            });
        });
    }
}

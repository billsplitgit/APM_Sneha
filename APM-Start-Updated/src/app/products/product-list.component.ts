import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    styleUrls: ['./app/products/product-list.component.css'],
    templateUrl: './app/products/product-list.component.html'
})

export class ProductListComponent implements OnInit{
    errorMessage: string;
    pageTitle: string = 'Product List';
imageWidth: number = 50;
imageMargin: number = 2;
showImage: boolean = false;

_listFilter:string;
get listFilter():string{
    return this._listFilter;
}
set listFilter(value:string){
    this._listFilter = value;

    this.filteredProducts=this.listFilter ? this.performFilter(this.listFilter): this.products;
}
filteredProducts: IProduct[];
products: IProduct[] = [];

constructor(private _productService: ProductService){
    
    
}

performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLowerCase().indexOf(filterBy)!==-1);
    
}

toggleImage():void{
    this.showImage= !this.showImage;
}

// ngOnInit():void{
//     console.log('In OnInit')
//     this.products = this._productService.getProducts();
//     this.filteredProducts = this.products;
// }

ngOnInit(): void{
    this._productService.getProducts()
    // tslint:disable-next-line:whitespace
    .subscribe(products => {this.products = products; this.filteredProducts = this.products;},
               error => this.errorMessage = <any>error);
}

onRatingClicked(message: string): void{
    this.pageTitle = 'Product List:' +message;
    
}

}
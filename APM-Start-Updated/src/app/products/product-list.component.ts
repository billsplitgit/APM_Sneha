import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    styleUrls: ['./app/products/product-list.component.css'],
    templateUrl: './app/products/product-list.component.html'
})

// tslint:disable-next-line:one-line
export class ProductListComponent implements OnInit{
    errorMessage: string;
    pageTitle: string = 'Product List';
imageWidth: number = 50;
imageMargin: number = 2;
showImage: boolean = false;
toggleText: string = 'Show Image';
toggleText1: string = 'Show Image';

_listFilter: string;
get listFilter(): string{
    return this._listFilter;
}
set listFilter(value: string){
    this._listFilter = value;

    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
}
filteredProducts: IProduct[];
products: IProduct[] = [];

// tslint:disable-next-line:one-line
constructor(private _productService: ProductService){
    // tslint:disable-next-line:no-trailing-whitespace
    
    
}

// tslint:disable-next-line:one-line
performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLowerCase().indexOf(filterBy) !== -1);
    // tslint:disable-next-line:no-trailing-whitespace
    
}

// tslint:disable-next-line:one-line
toggleImage(): void{
    this.showImage = !this.showImage;
    this.toggleText = 'Hide Image';
}

// ngOnInit():void{
//     console.log('In OnInit')
//     this.products = this._productService.getProducts();
//     this.filteredProducts = this.products;
// }

// tslint:disable-next-line:one-line
ngOnInit(): void{
    this._productService.getProducts()
    // tslint:disable-next-line:whitespace
    .subscribe(products => {this.products = products; this.filteredProducts = this.products;},
               error => this.errorMessage = <any>error);
}

// tslint:disable-next-line:one-line
onRatingClicked(message: string): void{
    this.pageTitle = 'Product List:' + message;
    // tslint:disable-next-line:no-trailing-whitespace
    
}

// tslint:disable-next-line:eofline
}
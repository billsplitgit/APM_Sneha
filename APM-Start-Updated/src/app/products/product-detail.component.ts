




import { OnInit, Component } from '@angular/core';
import {IProduct} from './product';

@Component({
    moduleId: module.id, 
    templateUrl : 'product-detail.component.html',
    styleUrls: ['product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
pageTitle: string ='Product Detail';
product: IProduct;


    constructor() {}

    // tslint:disable-next-line:one-line
    ngOnInit() {}
// tslint:disable-next-line:eofline
}





import { OnInit, Component } from '@angular/core';
import {IProduct} from './product';
import { ActivatedRoute , Router } from '@angular/router';
import { ProductService } from "./product.service";

@Component({
    moduleId: module.id, 
    templateUrl : 'product-detail.component.html',
    styleUrls: ['product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
pageTitle: string ='Product Detail';
product: IProduct;


    constructor( private _route: ActivatedRoute, 
                private _router: Router,
                private _productService: ProductService ) {}

    // tslint:disable-next-line:one-line
    ngOnInit() {
        let id = +this._route.snapshot.paramMap.get('id');
        this.pageTitle += ' : '+  id;

        this._productService.getProduct(id).subscribe(products => this.product = products);
        // this.product={
            
        //     "productName" : "Lake",
        //     "productCode": "GDN-001",
        //     "releaseDate": "March 19, 2016",
        //     "description": "Leaf rake with 48-inch wooden handle.",
        //     "price": 19.95,
        //     "starRating":3.2,
        //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        // }
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

// tslint:disable-next-line:eofline
}
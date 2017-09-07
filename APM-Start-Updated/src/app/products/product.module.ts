import { NgModule } from '@angular/core';


import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductGaurdService } from './product-gaurd.service';

import { ProductService } from "./product.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[ConvertToSpacesPipe,
        ProductDetailComponent, 
                
        ProductListComponent],
    imports: [ 
        SharedModule,
        RouterModule.forChild([
            {path: 'products', component: ProductListComponent},
            {path: 'products/:id', canActivate: [ProductGaurdService], component: ProductDetailComponent}
           // tslint:disable-next-line:no-trailing-whitespace
           
          ])],
          providers:[ProductGaurdService, ProductService]
})

// tslint:disable-next-line:eofline
export class ProductModule{ }
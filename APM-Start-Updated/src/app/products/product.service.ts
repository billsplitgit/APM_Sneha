
import { Injectable } from '@angular/core';
// tslint:disable-next-line:no-trailing-whitespace
import { IProduct } from './product';   

import {Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()

export class ProductService{

    private _productUrl = 'api/products/products.json'

        constructor(private _http : Http){}
    // tslint:disable-next-line:no-trailing-whitespace
    
        getProducts()  : Observable<IProduct[]> {
            return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
        }
    // tslint:disable-next-line:no-trailing-whitespace
    
        getProduct(id: number)  : Observable<IProduct> {
            return this.getProducts().map((products: IProduct[]) => products.find(p => p.productId===id));
            // tslint:disable-next-line:no-trailing-whitespace
            
        }

        private handleError(error: Response){
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
        }
}



import { Injectable } from '@angular/core';
// tslint:disable-next-line:no-trailing-whitespace
import { IProduct } from './product';   

import {Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()

// tslint:disable-next-line:one-line
export class ProductService{

    private _productUrl = 'api/products/products.json';

        // tslint:disable-next-line:no-trailing-whitespace
        
        constructor(private _http: Http) { }
    // tslint:disable-next-line:no-trailing-whitespace
    
        // tslint:disable-next-line:typedef-whitespace
        getProducts()  : Observable<IProduct[]> {
            return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
        }
    // tslint:disable-next-line:no-trailing-whitespace
    
        // tslint:disable-next-line:typedef-whitespace
        getProduct(id: number)  : Observable<IProduct> {
            return this.getProducts().map((products: IProduct[]) => products.find(p => p.productId === id));
            // tslint:disable-next-line:no-trailing-whitespace
            
        }

        // tslint:disable-next-line:one-line
        private handleError(error: Response){
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
        }
}


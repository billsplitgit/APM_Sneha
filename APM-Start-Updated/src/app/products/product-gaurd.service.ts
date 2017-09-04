
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductGaurdService implements CanActivate {

    // tslint:disable-next-line:one-line
    constructor(private _router: Router){ }
    // tslint:disable-next-line:one-line
    canActivate(route: ActivatedRouteSnapshot): boolean{
        let id = +route.url[1].path;
        // tslint:disable-next-line:one-line
        if (isNaN(id) || id < 1){
alert('Invalid product id');
this._router.navigate(['/products']);
return false;
        };
        return true;
    }
// tslint:disable-next-line:eofline
}
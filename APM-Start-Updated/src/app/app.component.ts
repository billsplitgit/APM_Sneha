import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { ProductService } from "./products/product.service";
>>>>>>> be7c34fa6168c89f1ddf43fbc374b8f985d8c41c

@Component({
    selector: 'pm-app',
    template: `
<<<<<<< HEAD
        <h1>Product list</h1>
    `
})
export class AppComponent { }
=======
    <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
        </div>
    `,
    providers: [ProductService]
})
export class AppComponent { 
    pageTitle: string = 'Acme Product Management';
}
>>>>>>> be7c34fa6168c89f1ddf43fbc374b8f985d8c41c

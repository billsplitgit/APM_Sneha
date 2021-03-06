"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_route, _router, _productService) {
        this._route = _route;
        this._router = _router;
        this._productService = _productService;
        this.pageTitle = 'Product Detail';
    }
    // tslint:disable-next-line:one-line
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._route.snapshot.paramMap.get('id');
        this.pageTitle += ' : ' + id;
        this._productService.getProduct(id).subscribe(function (products) { return _this.product = products; });
        // this.product={
        //     "productName" : "Lake",
        //     "productCode": "GDN-001",
        //     "releaseDate": "March 19, 2016",
        //     "description": "Leaf rake with 48-inch wooden handle.",
        //     "price": 19.95,
        //     "starRating":3.2,
        //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        // }
    };
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'product-detail.component.html',
        styleUrls: ['product-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        product_service_1.ProductService])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map
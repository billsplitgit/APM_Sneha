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
var product_service_1 = require("./product.service");
var ProductListComponent = (function () {
    // tslint:disable-next-line:one-line
    function ProductListComponent(_productService) {
        // tslint:disable-next-line:no-trailing-whitespace
        this._productService = _productService;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.toggleText = 'Show Image';
        this.toggleText1 = 'Show Image';
        this.products = [];
    }
    Object.defineProperty(ProductListComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
        },
        enumerable: true,
        configurable: true
    });
    // tslint:disable-next-line:one-line
    ProductListComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLowerCase();
        return this.products.filter(function (product) { return product.productName.toLowerCase().indexOf(filterBy) !== -1; });
        // tslint:disable-next-line:no-trailing-whitespace
    };
    // tslint:disable-next-line:one-line
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
        this.toggleText = 'Hide Image';
    };
    // ngOnInit():void{
    //     console.log('In OnInit')
    //     this.products = this._productService.getProducts();
    //     this.filteredProducts = this.products;
    // }
    // tslint:disable-next-line:one-line
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (products) { _this.products = products; _this.filteredProducts = _this.products; }, function (error) { return _this.errorMessage = error; });
    };
    // tslint:disable-next-line:one-line
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product List:' + message;
        // tslint:disable-next-line:no-trailing-whitespace
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'pm-products',
        styleUrls: ['./app/products/product-list.component.css'],
        templateUrl: './app/products/product-list.component.html'
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map
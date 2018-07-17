(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _can_activate_route_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../can-activate-route.guard */ "./src/app/can-activate-route.guard.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'products',
        component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"]
    },
    {
        path: 'product/:id',
        component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailComponent"],
        canActivate: [_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_2__["CanActivateRouteGuard"]]
    },
    {
        path: 'welcome',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]
    },
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light product-list\">\r\n  <a class=\"navbar-brand\" href=\"#\">Zella's Inc Product Management</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n    <ul class=\"navbar-nav product-nav\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/products']\">Product List</a>\r\n      </li>\r\n     \r\n    </ul>\r\n  </div>\r\n</nav>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'product App';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _can_activate_route_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./can-activate-route.guard */ "./src/app/can-activate-route.guard.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _product_list_product_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product-list/product-filter.pipe */ "./src/app/product-list/product-filter.pipe.ts");
/* harmony import */ var _star_star_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./star/star.component */ "./src/app/star/star.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__["ProductListComponent"],
                _product_list_product_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["ProductFilterPipe"],
                _star_star_component__WEBPACK_IMPORTED_MODULE_15__["StarComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_16__["ProductDetailComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_17__["WelcomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["JsonpModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_12__["CalendarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                igniteui_angular__WEBPACK_IMPORTED_MODULE_10__["IgxCalendarModule"],
                igniteui_angular__WEBPACK_IMPORTED_MODULE_10__["IgxDatePickerModule"],
                igniteui_angular__WEBPACK_IMPORTED_MODULE_10__["IgxDialogModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__["FlashMessagesModule"].forRoot()
            ],
            providers: [_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_6__["CanActivateRouteGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/can-activate-route.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/can-activate-route.guard.ts ***!
  \*********************************************/
/*! exports provided: CanActivateRouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateRouteGuard", function() { return CanActivateRouteGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CanActivateRouteGuard = /** @class */ (function () {
    function CanActivateRouteGuard() {
    }
    CanActivateRouteGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    CanActivateRouteGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], CanActivateRouteGuard);
    return CanActivateRouteGuard;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card product-details'\r\n     *ngIf='product'>\r\n  <div class='card-header product-details_header'>\r\n    {{pageTitle + ': ' + product.productName}}\r\n  </div>\r\n\r\n  <div class='card-body product-details_body'>\r\n    <div class='row'>\r\n      <div class='col-md-8'>\r\n        <div class='row'>\r\n          <div class='col-md-4'>Name:</div>\r\n          <div class='col-md-8'>{{product.productName}}</div>\r\n        </div>\r\n        <div class='row'>\r\n          <div class='col-md-4'>Code:</div>\r\n          <div class='col-md-8'>{{product.productCode | lowercase}}</div>\r\n        </div>\r\n        <div class='row'>\r\n          <div class='col-md-4'>Description:</div>\r\n          <div class='col-md-8'>{{product.description}}</div>\r\n        </div>\r\n        <div class='row'>\r\n          <div class='col-md-4'>Availability:</div>\r\n          <div class='col-md-8'>{{product.releaseDate}}</div>\r\n        </div>\r\n        <div class='row'>\r\n          <div class='col-md-4'>Price:</div>\r\n          <div class='col-md-8'>{{product.price|currency:'USD':'symbol'}}</div>\r\n        </div>\r\n        <div class='row'>\r\n          <div class='col-md-4'>5 Star Rating:</div>\r\n          <div class='col-md-8'>\r\n            <app-star [rating]='product.starRating'>\r\n            </app-star>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class='col-md-4'>\r\n        <img class='center-block img-responsive'\r\n             [style.width.px]='200'\r\n             [style.margin.px]='2'\r\n             [src]='product.imageUrl'\r\n             [title]='product.productName'>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class='card-footer product-details_footer'>\r\n    <button class='btn btn-outline-secondary'\r\n            (click)='onBack()'\r\n            style='width:80px'>\r\n      <i class='fa fa-chevron-left'></i> Back\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-details {\n  margin-top: 50px; }\n  .product-details_header {\n    background-color: #007bff;\n    color: white; }\n  .product-details_btn {\n    color: white;\n    width: 80px; }\n  .product-details_footer {\n    color: white; }\n"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.pageTitle = 'Product Detail';
        this.errorMessage = '';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var param = this.route.snapshot.paramMap.get('id');
        if (param) {
            var id = +param;
            this.getProduct(id);
        }
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id).
            subscribe(function (product) {
            _this.product = product;
        });
    };
    ProductDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/products']);
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/product-detail/product-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-filter.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/product-list/product-filter.pipe.ts ***!
  \*****************************************************/
/*! exports provided: ProductFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterPipe", function() { return ProductFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductFilterPipe = /** @class */ (function () {
    function ProductFilterPipe() {
    }
    ProductFilterPipe.prototype.transform = function (value, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter(function (product) {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        }) : value;
    };
    ProductFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'productFilter'
        })
    ], ProductFilterPipe);
    return ProductFilterPipe;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card product-list\" id=\"product\">\r\n  <div class=\"card-header product-list_header\">\r\n    {{pageTitle}}\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">filter by</div>\r\n      <div class=\"col-md-4\">\r\n        <input type='text' [(ngModel)]='listFilter'>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <h3>Filtered by: {{listFilter}} </h3>\r\n      </div>\r\n    </div>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr class=\"product-list_tbheader\">\r\n          <th>\r\n            <button (click)='toggleImage()' class=\"btn btn-primary\">\r\n              {{showImage? 'Hide': 'show'}}Image\r\n            </button>\r\n\r\n          </th>\r\n          <th>Product</th>\r\n          <th>Code</th>\r\n          <th>Available</th>\r\n          <th>Price</th>\r\n          <th>5 Star Rating</th>\r\n        </tr>\r\n      </thead>\r\n      <tr *ngFor='let product of products | productFilter:listFilter'>\r\n        <td>\r\n          <img *ngIf=\"showImage\" [src]='product.imageUrl' [title]='product.productName' [style.width.px]='imageWidth' [style.margin.px]='imageMargin'>\r\n        </td>\r\n        <td>\r\n          <td>\r\n            <a [routerLink]=\"['/product', product.productId]\">\r\n              {{product.productName}}\r\n            </a>\r\n          </td>\r\n          <td>{{product.productCode}}</td>\r\n          <td>{{product.releaseDate}}</td>\r\n          <td>{{product.price | currency}}</td>\r\n          <td>\r\n            <app-star [rating]='product.starRating' (ratingClicked)='onRatingClicked($event)'>\r\n            </app-star>\r\n          </td>\r\n\r\n\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product-list/product-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-list {\n  margin-top: 50px; }\n  .product-list_header {\n    color: white;\n    background: #007bff; }\n  .product-list_tbheader {\n    color: #337AB7; }\n"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(_route, productsService) {
        this._route = _route;
        this.productsService = productsService;
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.listFilter = '';
        this.pageTitle = 'Product List';
        console.log(this._route.snapshot.params['id']);
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.getProducts()
            .subscribe(function (products) {
            _this.products = products;
        });
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product List: ' + message;
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.scss */ "./src/app/product-list/product-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/products.service.ts":
/*!*************************************!*\
  !*** ./src/app/products.service.ts ***!
  \*************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ProductsService = /** @class */ (function () {
    function ProductsService(_http) {
        this._http = _http;
        this._productUrl = './assets/api/products/products.json';
    }
    ProductsService.prototype.extractData = function (res) {
        // tslint:disable-next-line:prefer-const
        var body = res;
        return body || {};
    };
    ProductsService.prototype.getProduct = function (id) {
        return this.getProducts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (products) { return products.find(function (p) { return p.productId === id; }); }));
    };
    ProductsService.prototype.getProducts = function () {
        return this._http.get(this._productUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProductsService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/star/star.component.html":
/*!******************************************!*\
  !*** ./src/app/star/star.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\"\r\n     [style.width.px]=\"starWidth\"\r\n     [title]=\"rating\"\r\n     (click)=\"onClick()\">\r\n  <div style=\"width: 75px\">\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/star/star.component.scss":
/*!******************************************!*\
  !*** ./src/app/star/star.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/star/star.component.ts":
/*!****************************************!*\
  !*** ./src/app/star/star.component.ts ***!
  \****************************************/
/*! exports provided: StarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarComponent", function() { return StarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarComponent = /** @class */ (function () {
    function StarComponent() {
        this.rating = 0;
        this.starWidth = 0;
        this.ratingClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StarComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 75 / 5;
    };
    StarComponent.prototype.onClick = function () {
        this.ratingClicked.emit("The rating " + this.rating + " was clicked!");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StarComponent.prototype, "rating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StarComponent.prototype, "ratingClicked", void 0);
    StarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-star',
            template: __webpack_require__(/*! ./star.component.html */ "./src/app/star/star.component.html"),
            styles: [__webpack_require__(/*! ./star.component.scss */ "./src/app/star/star.component.scss")]
        })
    ], StarComponent);
    return StarComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card welcome\">\r\n    <div class=\"card-header welcome_header\">\r\n        {{pageTitle}}\r\n    </div>\r\n    <div class=\"card-body welcome_body\"  >\r\n        <div class=\"row welcome_details\" >\r\n            <img src=\"../../assets/logo.jpg\" \r\n                 class=\"img-responsive center-block\"\r\n                 style=\"max-height:300px;padding-bottom:50px\"/>\r\n        </div>\r\n        <div class=\"row welcome_footer\"   >\r\n            <div class=\"text-center\">Developed by:</div>\r\n            <h3 class=\"text-center\">Geofrey Zellah</h3>\r\n\r\n            <div class=\"text-center\">@Zellah's Inc</div>\r\n            <div class=\"text-center\">\r\n                <a href=\"http://www.geofrey.texpoldev.com\">www.geofrey.texpoldev.com</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.scss":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome {\n  margin-top: 50px; }\n  .welcome_header {\n    color: white;\n    background: #007bff; }\n  .welcome_details {\n    justify-content: center; }\n  .welcome_footer {\n    justify-content: center;\n    display: flex;\n    flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
        this.pageTitle = 'Welcome';
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bonge\Documents\Projects\product-management\product-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
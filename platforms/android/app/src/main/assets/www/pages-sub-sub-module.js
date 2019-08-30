(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sub-sub-module"],{

/***/ "./src/app/pages/sub/sub.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/sub/sub.module.ts ***!
  \*****************************************/
/*! exports provided: SubPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubPageModule", function() { return SubPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sub_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sub.page */ "./src/app/pages/sub/sub.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _sub_page__WEBPACK_IMPORTED_MODULE_5__["SubPage"]
    }
];
var SubPageModule = /** @class */ (function () {
    function SubPageModule() {
    }
    SubPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_sub_page__WEBPACK_IMPORTED_MODULE_5__["SubPage"]]
        })
    ], SubPageModule);
    return SubPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sub/sub.page.html":
/*!*****************************************!*\
  !*** ./src/app/pages/sub/sub.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n          </ion-buttons>\n      <ion-title>{{x.title}} </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"deals-details-content real-state-listing-content\">\n    <div class=\"listing-item\">\n      <ion-row class=\"image-row\">\n        <ion-col size=\"12\">\n          <a class=\"image-anchor\">\n            <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"item-picture\" [src]=\"x.icon\">\n              <app-aspect-ratio [ratio]=\"{w:365, h:125}\">\n              </app-aspect-ratio>\n            </app-image-shell>\n          </a>\n        </ion-col>\n      </ion-row>\n      <div class=\"related-deals-wrapper\" >\n          <!-- <h3 class=\"related-deals-title\">Browse by sub-category</h3> -->\n          <ion-row class=\"related-deal\" *ngFor=\"let item of x.items\">\n            <ion-col class=\"deal-logo-wrapper\" size=\"4\">\n              <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n                <app-image-shell [src]=\"item.icon\" [alt]=\"'deals logo'\" class=\"related-deal-logo\" animation=\"spinner\"></app-image-shell>\n              </app-aspect-ratio>\n            </ion-col>\n            <ion-col class=\"deal-info-wrapper\" size=\"8\">\n              <h4 class=\"related-deal-title\">\n                <app-text-shell [data]=\"item.title\"></app-text-shell>\n              </h4>\n              <!-- <p class=\"related-deal-description\">\n                <app-text-shell [data]=\"deal?.description\"></app-text-shell>\n              </p> -->\n            </ion-col>\n          </ion-row>\n        </div>\n    </div>\n\n\n\n  \n  </ion-content>\n  \n"

/***/ }),

/***/ "./src/app/pages/sub/sub.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/sub/sub.page.ts ***!
  \***************************************/
/*! exports provided: SubPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubPage", function() { return SubPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubPage = /** @class */ (function () {
    function SubPage(navCtrl, menuCtrl, popoverCtrl, alertCtrl, modalCtrl, toastCtrl, dataService, router, activatedRoute) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.queryParams.subscribe(function (res) {
            console.log(JSON.parse(res.value));
            console.log(res.value);
            _this.x = JSON.parse(res.value);
        });
    }
    SubPage.prototype.ngOnInit = function () {
    };
    SubPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub',
            template: __webpack_require__(/*! ./sub.page.html */ "./src/app/pages/sub/sub.page.html"),
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SubPage);
    return SubPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sub-sub-module.js.map
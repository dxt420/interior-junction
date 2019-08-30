(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/pages/tab1/tab1.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.module.ts ***!
  \*******************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/pages/tab1/tab1.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]
    }
];
var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/pages/tab1/tab1.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"secondary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button ></ion-menu-button>\n      </ion-buttons>\n      <ion-title text-center>\n          <ion-text >\n            <ion-text style=\"color:white\" class=\"fw700\">Interior<span style=\"font-weight:350;\">Junction</span></ion-text>\n          </ion-text>\n      </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"notifications()\">\n          <ion-icon name=\"notifications\"></ion-icon>\n         \n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"dark\">\n      <ion-searchbar [(ngModel)]=\"searchKey\"></ion-searchbar>\n     \n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <!-- <ion-card no-margin class=\"no-radius\">\n      <ion-item lines=\"none\" color=\"medium\">\n        <ion-label>\n          <h2 no-margin class=\"fw500 no-margin\">\n            <ion-text color=\"dark\">Filter: </ion-text>\n          </h2>\n  \n          <p class=\"text-11x no-margin\">\n            <ion-text  color=\"primary\">{{yourLocation}}</ion-text>\n          </p>\n        </ion-label>\n        <ion-button shape=\"round\" fill=\"outline\" size=\"small\" color=\"primary\" (click)=\"alertLocation()\">\n          Location\n          <ion-icon name=\"locate\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </ion-card> -->\n  <ion-list>\n     <ion-item lines=\"none\" style=\"color:black\">\n        <ion-card class=\"bg-white\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"4\">\n                    <ion-img [src]=\"chair1\"></ion-img>\n  \n                  </ion-col>\n              <ion-col size=\"8\">\n                  <ion-label>\n                      <ion-text text-wrap color=\"secondary\">\n                        <h5><strong>Grey Mid-Century Sofa</strong></h5>\n                      </ion-text>\n                      <ion-text text-wrap color=\"secondary\">\n                        <h6>\n                            Vintage 70’s couch with ashy finish\n                        </h6>\n                      </ion-text>\n                 \n                   \n                          <ion-text color=\"dark\">\n                          \n                              <h6>\n                                  <strong>Price:</strong> UGX. 950,000\n                              </h6>\n                           \n                          </ion-text>\n  \n                          <ion-text color=\"dark\">\n                          \n                              <h6>\n                                  <strong>Category:</strong> Chairs\n                              </h6>\n                           \n                          </ion-text>\n                      \n                       \n                     \n                 \n                    </ion-label>\n                \n      \n              </ion-col>\n             \n             \n           \n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      \n      </ion-item>\n  \n      <ion-item lines=\"none\" style=\"color:black\">\n        <ion-card class=\"bg-white\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"4\">\n                    <ion-img [src]=\"chair2\"></ion-img>\n  \n                  </ion-col>\n              <ion-col size=\"8\">\n                  <ion-label>\n                      <ion-text text-wrap color=\"secondary\">\n                        <h5><strong>Vintage Minimalist Sofa</strong></h5>\n                      </ion-text>\n                      <ion-text text-wrap color=\"secondary\">\n                        <h6>\n                            Classic Cougar Couch\n                        </h6>\n                      </ion-text>\n                 \n                   \n                          <ion-text color=\"dark\">\n                          \n                              <h6>\n                                  <strong>Price:</strong> UGX. 2,000,000\n                              </h6>\n                           \n                          </ion-text>\n  \n                          <ion-text color=\"dark\">\n                          \n                              <h6>\n                                  <strong>Category:</strong> Chairs\n                              </h6>\n                           \n                          </ion-text>\n                      \n                       \n                     \n                 \n                    </ion-label>\n                \n      \n              </ion-col>\n             \n             \n           \n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      \n      </ion-item>\n  \n      <ion-item lines=\"none\" style=\"color:black\">\n        <ion-card class=\"bg-white\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"4\">\n                    <ion-img [src]=\"chair1\"></ion-img>\n  \n                  </ion-col>\n              <ion-col size=\"8\">\n                  <ion-label>\n                      <ion-text text-wrap color=\"secondary\">\n                        <h5><strong>Grey Mid-Century Sofa</strong></h5>\n                      </ion-text>\n                      <ion-text text-wrap color=\"secondary\">\n                        <h6>\n                            Vintage 70’s couch with ashy finish\n                        </h6>\n                      </ion-text>\n                 \n                   \n                          <ion-text color=\"dark\">\n                          \n                              <h6>\n                                  <strong>Price:</strong> UGX. 950,000\n                              </h6>\n                           \n                          </ion-text>\n  \n                          <ion-text color=\"dark\">\n                          \n                              <h6>\n                                  <strong>Category:</strong> Chairs\n                              </h6>\n                           \n                          </ion-text>\n                      \n                       \n                     \n                 \n                    </ion-label>\n                \n      \n              </ion-col>\n             \n             \n           \n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      \n      </ion-item>\n  \n      <ion-item lines=\"none\" style=\"color:black\">\n        <ion-card class=\"bg-white\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"4\">\n                    <ion-img [src]=\"chair2\"></ion-img>\n  \n                  </ion-col>\n              <ion-col size=\"8\">\n                  <ion-label>\n                      <ion-text text-wrap color=\"secondary\">\n                        <h5><strong>Vintage Minimalist Sofa</strong></h5>\n                      </ion-text>\n                      <ion-text text-wrap color=\"secondary\">\n                        <h6>\n                            Classic Cougar Couch\n                        </h6>\n                      </ion-text>\n                 \n                   \n                          <ion-text color=\"dark\">\n                          \n                              <h6>\n                                  <strong>Price:</strong> UGX. 2,000,000\n                              </h6>\n                           \n                          </ion-text>\n  \n                          <ion-text color=\"dark\">\n                          \n                              <h6>\n                                  <strong>Category:</strong> Chairs\n                              </h6>\n                           \n                          </ion-text>\n                      \n                       \n                     \n                 \n                    </ion-label>\n                \n      \n              </ion-col>\n             \n             \n           \n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      \n      </ion-item>\n  \n  \n      \n      \n    \n    </ion-list>\n   \n    \n  \n  \n  </ion-content>\n    "

/***/ }),

/***/ "./src/app/pages/tab1/tab1.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYjEvdGFiMS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tab1/tab1.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.ts ***!
  \*****************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/search-filter/search-filter.page */ "./src/app/pages/modal/search-filter/search-filter.page.ts");
/* harmony import */ var _modal_image_image_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/image/image.page */ "./src/app/pages/modal/image/image.page.ts");
/* harmony import */ var src_app_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var Tab1Page = /** @class */ (function () {
    function Tab1Page(navCtrl, menuCtrl, popoverCtrl, alertCtrl, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.searchKey = '';
        this.yourLocation = '123 Test Street';
        this.chair1 = 'assets/img/chair1.png';
        this.chair2 = 'assets/img/chair2.png';
    }
    Tab1Page.prototype.ngOnInit = function () {
    };
    Tab1Page.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
    };
    Tab1Page.prototype.settings = function () {
        this.navCtrl.navigateForward('settings');
    };
    Tab1Page.prototype.alertLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var changeLocation;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Change Location',
                            message: 'Type your Address.',
                            inputs: [
                                {
                                    name: 'location',
                                    placeholder: 'Enter your new Location',
                                    type: 'text'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Change',
                                    handler: function (data) { return __awaiter(_this, void 0, void 0, function () {
                                        var toast;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    console.log('Change clicked', data);
                                                    this.yourLocation = data.location;
                                                    return [4 /*yield*/, this.toastCtrl.create({
                                                            message: 'Location was change successfully',
                                                            duration: 3000,
                                                            position: 'top',
                                                            closeButtonText: 'OK',
                                                            showCloseButton: true
                                                        })];
                                                case 1:
                                                    toast = _a.sent();
                                                    toast.present();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        changeLocation = _a.sent();
                        changeLocation.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.searchFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_2__["SearchFilterPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab1Page.prototype.presentImage = function (image) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _modal_image_image_page__WEBPACK_IMPORTED_MODULE_3__["ImagePage"],
                            componentProps: { value: image }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab1Page.prototype.notifications = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: src_app_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"],
                            event: ev,
                            animated: true,
                            showBackdrop: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab1Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/pages/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/pages/tab1/tab1.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map
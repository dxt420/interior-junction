(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"animated fadeIn login auth-page\">\n  <div class=\"theme-bg\"></div>\n  <div class=\"auth-content\">\n\n    <!-- Logo -->\n    <div style=\"margin-top: 5vh\" padding-horizontal text-center class=\"animated fadeInDown\">\n      <div class=\"logo\"></div>\n \n    </div>\n\n    <!-- Login form -->\n    <form style=\"margin-top: 5vh\"  [formGroup]=\"onLoginForm\" class=\"list-form\">\n        <ion-item lines=\"none\">\n   \n            <ion-input formControlName=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Email\"></ion-input>\n          \n      \n          </ion-item> \n          <p text-center ion-text class=\"text08\" *ngIf=\"onLoginForm.get('email').touched && onLoginForm.get('email').hasError('required')\">\n              <ion-text  color=\"danger\">\n               Email is a required field\n              </ion-text>\n            </p>\n\n<br>\n            <ion-item lines=\"none\">\n   \n            <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\" [(ngModel)]=\"user.password\"></ion-input>\n      \n          </ion-item> \n          <p text-center ion-text color=\"warning\" class=\"text08\" *ngIf=\"onLoginForm.get('password').touched && onLoginForm.get('password').hasError('required')\">\n              <ion-text   color=\"danger\">\n                A password is needed\n              </ion-text>\n              </p>\n\n\n       \n\n\n\n    \n      \n\n      \n    </form>\n\n    \n    <br>\n    <div>\n     \n\n         <ion-grid class=\"btn-group\">\n        <ion-row>\n          \n          <ion-col size=\"2\">\n          \n          </ion-col>\n          <ion-col size=\"8\">\n              <ion-button size=\"medium\" expand=\"full\" shape=\"round\" color=\"dark\" (click)=\"basicLogin()\" [disabled]=\"!onLoginForm.valid\" tappable>\n                  \n                  Login\n                </ion-button>\n            </ion-col>\n          <ion-col size=\"2\">\n           \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <p text-center>\n        <ion-text color=\"light\">\n         \n        </ion-text>\n      </p>\n\n      <ion-grid class=\"btn-group\">\n        <ion-row>\n          \n          <ion-col size=\"1\">\n          \n          </ion-col>\n          <ion-col size=\"10\">\n              <ion-button style=\"font-size: 8px;--background:rgb(60,92,150);\"   (click)=\"facebookLogin()\" shape=\"round\" expand=\"full\" >\n                <ion-icon slot=\"icon-only\" name=\"logo-facebook\"></ion-icon>\n                &nbsp;  Continue with Facebook\n              </ion-button>\n            </ion-col>\n          <ion-col size=\"1\">\n           \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid class=\"btn-group\">\n          <ion-row>\n            <ion-col size=\"1\">\n            \n            </ion-col>\n            <ion-col size=\"10\">\n                <ion-button  style=\"font-size: 8px;--background:white;color:black\" (click)=\"googleLogin()\"    shape=\"round\" expand=\"full\" >\n                  <ion-icon slot=\"icon-only\" name=\"logo-googleplus\"></ion-icon>\n                 &nbsp; Continue with Google\n                </ion-button>\n              </ion-col>\n            <ion-col size=\"1\">\n             \n            </ion-col>\n          \n          </ion-row>\n        </ion-grid>\n\n    </div>\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span (click)=\"goToRegister()\" class=\"paz\" tappable>\n        <ion-text color=\"dark\">\n          Are you are new here? <strong>Sign Up</strong>\n        </ion-text>\n      </span>\n    </div>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-primary); }\n\n:host ion-input {\n  padding: 5px !important;\n  border-radius: 20px;\n  border: solid 1px var(--ion-color-light);\n  text-align: center;\n  color: var(--ion-color-light);\n  background-color: white; }\n\n.paz {\n  position: relative;\n  z-index: 10; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYnByL0Rvd25sb2Fkcy9pai9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLHNDQUFhLEVBQUE7O0FBSHJCO0VBT1EsdUJBQXVCO0VBQ3ZCLG1CQUFrQjtFQUNsQix3Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qix1QkFBdUIsRUFBQTs7QUFJL0I7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICBcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgaW9uLWlucHV0e1xuICAgICAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4O1xuICAgICAgICBib3JkZXI6c29saWQgMXB4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cblxuLnBheiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: User, LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, menuCtrl, toastCtrl, alertCtrl, loadingCtrl, formBuilder, authenticationService) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.user = new User();
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ngOnInit = function () {
        this.onLoginForm = this.formBuilder.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])]
        });
    };
    LoginPage.prototype.googleLogin = function () {
        this.authenticationService.nativeGoogleLogin();
    };
    LoginPage.prototype.facebookLogin = function () {
        this.authenticationService.loginWithFacebook();
    };
    LoginPage.prototype.basicLogin = function () {
        this.authenticationService.login(this.user);
    };
    // // //
    LoginPage.prototype.goToRegister = function () {
        this.navCtrl.navigateRoot('/register');
    };
    LoginPage.prototype.goToHome = function () {
        this.navCtrl.navigateRoot('/home-results');
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map
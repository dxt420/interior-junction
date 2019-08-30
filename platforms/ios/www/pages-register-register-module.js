(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"login auth-page\">\n\n  <div class=\"auth-content\">\n  \n\n    <!-- Register form -->\n    <form [formGroup]=\"onRegisterForm\" class=\"list-form\">\n     \n\n     \n\n\n       <br>\n       <ion-item lines=\"none\">\n     \n        <ion-input formControlName=\"displayName\" [(ngModel)]=\"user.displayName\" placeholder=\"Name\"></ion-input>\n  \n      </ion-item> \n      <p text-center ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('displayName').touched && onRegisterForm.get('displayName').hasError('required')\">\n          <ion-text  color=\"danger\">\n            Please input a name\n          </ion-text>\n        </p>\n\n        <br>\n      <ion-item lines=\"none\">\n     \n          <ion-input formControlName=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Email\"></ion-input>\n    \n        </ion-item> \n        <p text-center ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('email').touched && onRegisterForm.get('email').hasError('required')\">\n            <ion-text color=\"danger\">\n              Please input an e-mail\n            </ion-text>\n          </p>\n\n\n\n\n          <br>\n       \n          <ion-item lines=\"none\">\n \n          <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\" [(ngModel)]=\"user.password\"></ion-input>\n    \n        </ion-item> \n        <p text-center ion-text color=\"danger\" class=\"text08\" *ngIf=\"onRegisterForm.get('password').touched && onRegisterForm.get('password').hasError('required')\">\n            <ion-text color=\"danger\">\n              A Password is needed\n            </ion-text>\n            </p>\n    </form>\n\n   \n\n\n    <div margin-top>\n     \n\n        <ion-grid class=\"btn-group\">\n       <ion-row>\n         \n         <ion-col size=\"2\">\n         \n         </ion-col>\n         <ion-col size=\"8\">\n             <ion-button size=\"medium\" expand=\"full\" shape=\"round\" color=\"dark\" (click)=\"register()\" [disabled]=\"!onRegisterForm.valid\" tappable>\n                 \n                Create Account\n               </ion-button>\n           </ion-col>\n         <ion-col size=\"2\">\n          \n         </ion-col>\n       </ion-row>\n     </ion-grid>\n\n     <p text-center>\n       <ion-text color=\"dark\">\n        Or\n       </ion-text>\n     </p>\n\n     <ion-grid class=\"btn-group\">\n       <ion-row>\n         \n         <ion-col size=\"1\">\n         \n         </ion-col>\n         <ion-col size=\"10\">\n             <ion-button style=\"font-size: 8px;--background:rgb(60,92,150);\" (click)=\"facebookLogin()\"   shape=\"round\" expand=\"full\" >\n               <ion-icon slot=\"icon-only\" name=\"logo-facebook\"></ion-icon>\n               &nbsp;  Continue with Facebook\n             </ion-button>\n           </ion-col>\n         <ion-col size=\"1\">\n          \n         </ion-col>\n       </ion-row>\n     </ion-grid>\n\n     <ion-grid class=\"btn-group\">\n         <ion-row>\n           <ion-col size=\"1\">\n           \n           </ion-col>\n           <ion-col size=\"10\">\n               <ion-button  style=\"font-size: 8px;--background:white;color:black\" (click)=\"googleLogin()\"  shape=\"round\" expand=\"full\" >\n                 <ion-icon slot=\"icon-only\" name=\"logo-googleplus\"></ion-icon>\n                &nbsp; Continue with Google\n               </ion-button>\n             </ion-col>\n           <ion-col size=\"1\">\n            \n           </ion-col>\n         \n         </ion-row>\n       </ion-grid>\n\n   </div>\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span (click)=\"goToLogin()\" tappable>\n        <ion-text color=\"dark\">\n          <strong>I have an account!</strong>\n        </ion-text>\n      </span>\n    </div>\n\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-primary); }\n\n:host ion-input {\n  padding: 5px !important;\n  border-radius: 20px;\n  border: solid 1px var(--ion-color-light);\n  text-align: center;\n  color: var(--ion-color-light);\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYnByL0Rvd25sb2Fkcy9pai9zcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHNDQUFhLEVBQUE7O0FBRmpCO0VBTUksdUJBQXVCO0VBQ3ZCLG1CQUFrQjtFQUNsQix3Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgaW9uLWlucHV0e1xuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcbiAgICBib3JkZXI6c29saWQgMXB4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: User, RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
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

var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, menuCtrl, loadingCtrl, formBuilder, authenticationService) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.user = new User();
    }
    RegisterPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    RegisterPage.prototype.ngOnInit = function () {
        this.onRegisterForm = this.formBuilder.group({
            'displayName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])]
        });
    };
    RegisterPage.prototype.googleLogin = function () {
        this.authenticationService.nativeGoogleLogin();
    };
    RegisterPage.prototype.facebookLogin = function () {
        this.authenticationService.loginWithFacebook();
    };
    RegisterPage.prototype.register = function () {
        this.authenticationService.register(this.user);
    };
    // async signUp() {
    //   const loader = await this.loadingCtrl.create({
    //     duration: 2000
    //   });
    //   loader.present();
    //   loader.onWillDismiss().then(() => {
    //     this.navCtrl.navigateRoot('/home-results');
    //   });
    // }
    // // //
    RegisterPage.prototype.goToLogin = function () {
        this.navCtrl.navigateRoot('/login');
    };
    RegisterPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module.js.map
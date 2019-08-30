(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~deals-deals-module~pages-sub-sub-module"],{

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pages_shell_shell_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/shell/shell.module */ "./src/app/pages/shell/shell.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _pages_shell_shell_module__WEBPACK_IMPORTED_MODULE_4__["ShellModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot()
            ],
            declarations: [],
            exports: [
                _pages_shell_shell_module__WEBPACK_IMPORTED_MODULE_4__["ShellModule"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/pages/shell/aspect-ratio/aspect-ratio.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/shell/aspect-ratio/aspect-ratio.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/shell/aspect-ratio/aspect-ratio.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/shell/aspect-ratio/aspect-ratio.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%; }\n  :host .content-wrapper {\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    right: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYnByL0Rvd25sb2Fkcy9pai9zcmMvYXBwL3BhZ2VzL3NoZWxsL2FzcGVjdC1yYXRpby9hc3BlY3QtcmF0aW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7RUFKYjtJQU9JLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaGVsbC9hc3BlY3QtcmF0aW8vYXNwZWN0LXJhdGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcblxuICAuY29udGVudC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/shell/aspect-ratio/aspect-ratio.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/shell/aspect-ratio/aspect-ratio.component.ts ***!
  \********************************************************************/
/*! exports provided: AspectRatioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspectRatioComponent", function() { return AspectRatioComponent; });
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

var AspectRatioComponent = /** @class */ (function () {
    function AspectRatioComponent() {
        this.ratioPadding = '0px';
    }
    Object.defineProperty(AspectRatioComponent.prototype, "ratio", {
        set: function (ratio) {
            ratio = (ratio !== undefined && ratio !== null) ? ratio : { w: 1, h: 1 };
            var heightRatio = (ratio.h / ratio.w * 100) + '%';
            // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)
            this.ratioPadding = '0px 0px ' + heightRatio + ' 0px';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.padding'),
        __metadata("design:type", Object)
    ], AspectRatioComponent.prototype, "ratioPadding", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AspectRatioComponent.prototype, "ratio", null);
    AspectRatioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aspect-ratio',
            template: __webpack_require__(/*! ./aspect-ratio.component.html */ "./src/app/pages/shell/aspect-ratio/aspect-ratio.component.html"),
            styles: [__webpack_require__(/*! ./aspect-ratio.component.scss */ "./src/app/pages/shell/aspect-ratio/aspect-ratio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AspectRatioComponent);
    return AspectRatioComponent;
}());



/***/ }),

/***/ "./src/app/pages/shell/config/app-shell.config.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/shell/config/app-shell.config.ts ***!
  \********************************************************/
/*! exports provided: AppShellConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellConfig", function() { return AppShellConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
// Inspired in: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppShellConfig = /** @class */ (function () {
    function AppShellConfig(http) {
        this.http = http;
    }
    AppShellConfig_1 = AppShellConfig;
    // Simplified version from: https://stackoverflow.com/a/49707898/1116959
    AppShellConfig.prototype.load = function () {
        var configFile = './assets/config/app-shell.config' + ((!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) ? '.prod' : '') + '.json';
        return this.http.get(configFile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (configSettings) {
            AppShellConfig_1.settings = configSettings;
        }))
            .toPromise()
            .catch(function (error) {
            console.log("Could not load file '" + configFile + "'", error);
        });
    };
    var AppShellConfig_1;
    AppShellConfig = AppShellConfig_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppShellConfig);
    return AppShellConfig;
}());



/***/ }),

/***/ "./src/app/pages/shell/image-shell/image-shell.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/shell/image-shell/image-shell.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-spinner class=\"spinner\"></ion-spinner>\n<img class=\"inner-img\" [src]=\"_src\" [alt]=\"_alt\" (load)=\"_imageLoaded()\"/>\n<ng-content *ngIf=\"_mode === 'cover'\"></ng-content>\n"

/***/ }),

/***/ "./src/app/pages/shell/image-shell/image-shell.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/shell/image-shell/image-shell.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --image-shell-loading-background: #EEE;\n  --image-shell-border-radius: 0px;\n  display: block;\n  position: relative;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n  transition: all ease-in-out .3s;\n  z-index: 2; }\n  :host > .spinner {\n    display: none; }\n  :host::before {\n    content: '';\n    background: var(--image-shell-loading-background);\n    border-radius: var(--image-shell-border-radius);\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0; }\n  :host:not([mode=\"cover\"]) {\n    width: 100%;\n    overflow: hidden; }\n  :host:not([mode=\"cover\"]) > .inner-img {\n      transition: visibility 0s linear, opacity .5s linear;\n      opacity: 0;\n      visibility: hidden;\n      width: 100%;\n      height: 100%;\n      border-radius: var(--image-shell-border-radius); }\n  :host:not([mode=\"cover\"]).img-loaded::before {\n      display: none; }\n  :host:not([mode=\"cover\"]).img-loaded > .inner-img {\n      opacity: 1;\n      visibility: visible; }\n  :host[mode=\"cover\"] {\n    background-size: cover;\n    background-repeat: no-repeat; }\n  :host[mode=\"cover\"]::before,\n    :host[mode=\"cover\"] > .spinner {\n      z-index: -1; }\n  :host[mode=\"cover\"] > .inner-img {\n      display: none;\n      visibility: hidden; }\n  :host[mode=\"cover\"].img-loaded::before {\n      display: none; }\n  :host([animation=\"gradient\"]) {\n  --image-shell-loading-background: #EEE;\n  --image-shell-animation-color: #DDD; }\n  :host([animation=\"gradient\"])::before {\n    background: linear-gradient(to right, var(--image-shell-loading-background) 8%, var(--image-shell-animation-color) 18%, var(--image-shell-loading-background) 33%);\n    background-size: 800px 104px;\n    -webkit-animation: animateBackground 2s ease-in-out infinite;\n            animation: animateBackground 2s ease-in-out infinite; }\n  :host([animation=\"gradient\"]).img-loaded::before {\n    background: none;\n    -webkit-animation: 0;\n            animation: 0; }\n  @-webkit-keyframes animateBackground {\n  0% {\n    background-position: -468px 0; }\n  100% {\n    background-position: 468px 0; } }\n  @keyframes animateBackground {\n  0% {\n    background-position: -468px 0; }\n  100% {\n    background-position: 468px 0; } }\n  :host([animation=\"spinner\"]) {\n  --image-shell-spinner-size: 28px;\n  --image-shell-spinner-color: #CCC; }\n  :host([animation=\"spinner\"]) > .spinner {\n    display: block;\n    position: absolute;\n    top: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n    left: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n    width: var(--image-shell-spinner-size);\n    height: var(--image-shell-spinner-size);\n    font-size: var(--image-shell-spinner-size);\n    line-height: var(--image-shell-spinner-size);\n    color: var(--image-shell-spinner-color); }\n  :host([animation=\"spinner\"]).img-loaded > .spinner {\n    display: none;\n    visibility: hidden; }\n  :host(.add-overlay) {\n  --image-shell-overlay-background: rgba(0, 0, 0, .4); }\n  :host(.add-overlay).img-loaded::before {\n    display: block;\n    background: var(--image-shell-overlay-background); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYnByL0Rvd25sb2Fkcy9pai9zcmMvYXBwL3BhZ2VzL3NoZWxsL2ltYWdlLXNoZWxsL2ltYWdlLXNoZWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQWlDO0VBQ2pDLGdDQUE0QjtFQUU1QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwrQ0FBK0M7RUFDL0MsK0JBQStCO0VBQy9CLFVBQVUsRUFBQTtFQVRaO0lBYUksYUFBYSxFQUFBO0VBYmpCO0lBa0JJLFdBQVc7SUFDWCxpREFBaUQ7SUFDakQsK0NBQStDO0lBQy9DLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRLEVBQUE7RUF6Qlo7SUE2QkksV0FBVztJQUNYLGdCQUFnQixFQUFBO0VBOUJwQjtNQWlDTSxvREFBb0Q7TUFDcEQsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsWUFBWTtNQUNaLCtDQUErQyxFQUFBO0VBdENyRDtNQTRDUSxhQUFhLEVBQUE7RUE1Q3JCO01BZ0RRLFVBQVU7TUFDVixtQkFBbUIsRUFBQTtFQWpEM0I7SUF3REksc0JBQXNCO0lBQ3RCLDRCQUE0QixFQUFBO0VBekRoQzs7TUE4RE0sV0FBVyxFQUFBO0VBOURqQjtNQWtFTSxhQUFhO01BQ2Isa0JBQWtCLEVBQUE7RUFuRXhCO01BeUVRLGFBQWEsRUFBQTtFQU1yQjtFQUNFLHNDQUFpQztFQUNqQyxtQ0FBOEIsRUFBQTtFQUZoQztJQU1JLGtLQUN3SjtJQUN4Siw0QkFBNEI7SUFDNUIsNERBQW9EO1lBQXBELG9EQUFvRCxFQUFBO0VBVHhEO0lBZU0sZ0JBQWdCO0lBQ2hCLG9CQUFZO1lBQVosWUFBWSxFQUFBO0VBSWhCO0VBQ0U7SUFDRSw2QkFDRixFQUFBO0VBRUE7SUFDRSw0QkFDRixFQUFBLEVBQUE7RUFQRjtFQUNFO0lBQ0UsNkJBQ0YsRUFBQTtFQUVBO0lBQ0UsNEJBQ0YsRUFBQSxFQUFBO0VBSUo7RUFDRSxnQ0FBMkI7RUFDM0IsaUNBQTRCLEVBQUE7RUFGOUI7SUFLSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDBEQUEwRDtJQUMxRCwyREFBMkQ7SUFDM0Qsc0NBQXNDO0lBQ3RDLHVDQUF1QztJQUN2QywwQ0FBMEM7SUFDMUMsNENBQTRDO0lBQzVDLHVDQUF1QyxFQUFBO0VBYjNDO0lBa0JNLGFBQWE7SUFDYixrQkFBa0IsRUFBQTtFQUt4QjtFQUNFLG1EQUFpQyxFQUFBO0VBRG5DO0lBTU0sY0FBYztJQUNkLGlEQUFpRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2hlbGwvaW1hZ2Utc2hlbGwvaW1hZ2Utc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiAjRUVFO1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDBweDtcblxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXMpO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjNzO1xuICB6LWluZGV4OiAyO1xuXG4gIC8vIEJ5IGRlZmF1bHQsIGhpZGUgdGhlIHNwaW5uZXJcbiAgJiA+IC5zcGlubmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLy8gTG9hZGluZyBiYWNrZ3JvdW5kXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgJjpub3QoW21vZGU9XCJjb3ZlclwiXSkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmID4gLmlubmVyLWltZyB7XG4gICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciwgb3BhY2l0eSAuNXMgbGluZWFyO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1cyk7XG4gICAgfVxuXG4gICAgJi5pbWctbG9hZGVkIHtcbiAgICAgIC8vIEhpZGUgbG9hZGluZyBiYWNrZ3JvdW5kIG9uY2UgdGhlIGltYWdlIGhhcyBsb2FkZWRcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICYgPiAuaW5uZXItaW1nIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBJZiBpdCBpcyBtb2RlOiBjb3ZlclxuICAmW21vZGU9XCJjb3ZlclwiXSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgLy8gSW4gY292ZXIgbW9kZSwgd2UgY2FuIGhhdmUgY29udGVudCBpbnNpZGUgdGhlIGVsZW1lbnQsIHRodXMgd2UgbmVlZCB0byBwdXQgdGhlc2UgZWxlbWVudHMgYmVuZWF0aFxuICAgICY6OmJlZm9yZSxcbiAgICAmID4gLnNwaW5uZXIge1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuXG4gICAgJiA+IC5pbm5lci1pbWcge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAmLmltZy1sb2FkZWQge1xuICAgICAgLy8gSGlkZSBsb2FkaW5nIGJhY2tncm91bmQgb25jZSB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOmhvc3QoW2FuaW1hdGlvbj1cImdyYWRpZW50XCJdKSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiAjRUVFO1xuICAtLWltYWdlLXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogI0RERDtcblxuICAvLyBUaGUgYW5pbWF0aW9uIHRoYXQgZ29lcyBiZW5lYXRoIHRoZSBtYXNrc1xuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6XG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZCkgOCUsIHZhcigtLWltYWdlLXNoZWxsLWFuaW1hdGlvbi1jb2xvcikgMTglLCB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpIDMzJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDRweDtcbiAgICBhbmltYXRpb246IGFuaW1hdGVCYWNrZ3JvdW5kIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG5cbiAgJi5pbWctbG9hZGVkIHtcbiAgICAvLyBSZXNldCBiYWNrZ3JvdW5kIGFuaW1hdGlvbiBvbmNlIHRoZSBpbWFnZSBoYXMgbG9hZGVkXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBhbmltYXRpb246IDA7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBhbmltYXRlQmFja2dyb3VuZCB7XG4gICAgMCV7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMFxuICAgIH1cblxuICAgIDEwMCV7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwXG4gICAgfVxuICB9XG59XG5cbjpob3N0KFthbmltYXRpb249XCJzcGlubmVyXCJdKSB7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplOiAyOHB4O1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6ICNDQ0M7XG5cbiAgJiA+IC5zcGlubmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiBjYWxjKDUwJSAtIGNhbGModmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKSAvIDIpKTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIGNhbGModmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKSAvIDIpKTtcbiAgICB3aWR0aDogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICAgIGNvbG9yOiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yKTtcbiAgfVxuXG4gICYuaW1nLWxvYWRlZCB7XG4gICAgJiA+IC5zcGlubmVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9XG59XG5cbjpob3N0KC5hZGQtb3ZlcmxheSkge1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XG5cbiAgJi5pbWctbG9hZGVkIHtcbiAgICAvLyBBZGQgYmFja2dyb3VuZCBvdmVybGF5IGFmdGVyIHRoZSBpbWFnZSBoYXMgbG9hZGVkXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/shell/image-shell/image-shell.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/shell/image-shell/image-shell.component.ts ***!
  \******************************************************************/
/*! exports provided: ImageShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageShellComponent", function() { return ImageShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/app-shell.config */ "./src/app/pages/shell/config/app-shell.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ImageShellComponent = /** @class */ (function () {
    function ImageShellComponent(platformId) {
        this.platformId = platformId;
        // To debug shell styles, change configuration in the assets/app-shell.config.json file
        this.debugMode = (_config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings.debug) ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings.debug : false;
        // tslint:disable-next-line:variable-name
        this._src = '';
        // tslint:disable-next-line:variable-name
        this._alt = '';
        // tslint:disable-next-line:variable-name
        this._mode = '';
        this.imageLoaded = false;
    }
    Object.defineProperty(ImageShellComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (val) {
            this._mode = (val !== undefined && val !== null) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageShellComponent.prototype, "src", {
        set: function (val) {
            if (!this.debugMode) {
                this._src = (val !== undefined && val !== null) ? val : '';
            }
            if (this._mode === 'cover') {
                // Unset the background-image
                this.backgroundImage = 'unset';
            }
            // Show loading indicator
            // When using SSR (Server Side Rendering), avoid the loading animation while the image resource is being loaded
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId)) {
                this.imageLoaded = true;
            }
            else {
                this.imageLoaded = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageShellComponent.prototype, "alt", {
        set: function (val) {
            this._alt = (val !== undefined && val !== null) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    ImageShellComponent.prototype._imageLoaded = function () {
        this.imageLoaded = true;
        // If it's a cover image then set the background-image property accordingly
        if (this._mode === 'cover') {
            this.backgroundImage = 'url(' + this._src + ')';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.img-loaded'),
        __metadata("design:type", Object)
    ], ImageShellComponent.prototype, "imageLoaded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.backgroundImage'),
        __metadata("design:type", String)
    ], ImageShellComponent.prototype, "backgroundImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.mode'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ImageShellComponent.prototype, "mode", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ImageShellComponent.prototype, "src", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ImageShellComponent.prototype, "alt", null);
    ImageShellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-shell',
            template: __webpack_require__(/*! ./image-shell.component.html */ "./src/app/pages/shell/image-shell/image-shell.component.html"),
            styles: [__webpack_require__(/*! ./image-shell.component.scss */ "./src/app/pages/shell/image-shell/image-shell.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [String])
    ], ImageShellComponent);
    return ImageShellComponent;
}());



/***/ }),

/***/ "./src/app/pages/shell/shell.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/shell/shell.module.ts ***!
  \*********************************************/
/*! exports provided: ShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellModule", function() { return ShellModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aspect-ratio/aspect-ratio.component */ "./src/app/pages/shell/aspect-ratio/aspect-ratio.component.ts");
/* harmony import */ var _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-shell/image-shell.component */ "./src/app/pages/shell/image-shell/image-shell.component.ts");
/* harmony import */ var _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./text-shell/text-shell.component */ "./src/app/pages/shell/text-shell/text-shell.component.ts");
/* harmony import */ var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/app-shell.config */ "./src/app/pages/shell/config/app-shell.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ShellModule = /** @class */ (function () {
    function ShellModule() {
    }
    ShellModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__["AspectRatioComponent"],
                _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_5__["ImageShellComponent"],
                _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"]
            ],
            providers: [
                // Inspired in: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                    useFactory: function (appShellConfig) {
                        return function () { return appShellConfig.load(); };
                    },
                    deps: [_config_app_shell_config__WEBPACK_IMPORTED_MODULE_7__["AppShellConfig"]],
                    multi: true
                }
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"].forRoot()
            ],
            exports: [
                _aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__["AspectRatioComponent"],
                _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_5__["ImageShellComponent"],
                _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"]
            ]
        })
    ], ShellModule);
    return ShellModule;
}());



/***/ }),

/***/ "./src/app/pages/shell/text-shell/text-shell.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/shell/text-shell/text-shell.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>{{ _data }}</ng-container>\n"

/***/ }),

/***/ "./src/app/pages/shell/text-shell/text-shell.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/shell/text-shell/text-shell.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --text-shell-background: transparent;\n  --text-shell-line-color: #EEE;\n  --text-shell-line-height: 16px;\n  --text-shell-line-gutter: 3px;\n  display: block;\n  position: relative;\n  color: transparent;\n  background-color: var(--text-shell-background);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  background-clip: content-box; }\n\n:host(:not([animation])) {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1))); }\n\n:host(:not([animation]))[lines=\"1\"] {\n    background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%);\n    background-position: 0 0px;\n    background-size: 100% var(--text-shell-line-height, 16px);\n    background-repeat: no-repeat;\n    min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1))); }\n\n:host(:not([animation]))[lines=\"2\"] {\n    background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 38% , var(--text-shell-background, #FFF) 38%);\n    background-position: 0 0px, 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n    background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px);\n    background-repeat: no-repeat;\n    min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1))); }\n\n:host(:not([animation]))[lines=\"3\"] {\n    background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 91% , var(--text-shell-background, #FFF) 91%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 75% , var(--text-shell-background, #FFF) 75%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 32% , var(--text-shell-background, #FFF) 32%);\n    background-position: 0 0px, 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n    background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px);\n    background-repeat: no-repeat;\n    min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1))); }\n\n:host(:not([animation]))[lines=\"4\"] {\n    background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 62% , var(--text-shell-background, #FFF) 62%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 43% , var(--text-shell-background, #FFF) 43%);\n    background-position: 0 0px, 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n    background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px);\n    background-repeat: no-repeat;\n    min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1))); }\n\n:host(:not([animation]))[lines=\"5\"] {\n    background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 91% , var(--text-shell-background, #FFF) 91%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 61% , var(--text-shell-background, #FFF) 61%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 64% , var(--text-shell-background, #FFF) 64%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 31% , var(--text-shell-background, #FFF) 31%);\n    background-position: 0 0px, 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n    background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px);\n    background-repeat: no-repeat;\n    min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1))); }\n\n:host(:not([animation]))[lines=\"6\"] {\n    background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 73% , var(--text-shell-background, #FFF) 73%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 72% , var(--text-shell-background, #FFF) 72%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 64% , var(--text-shell-background, #FFF) 64%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 45% , var(--text-shell-background, #FFF) 45%);\n    background-position: 0 0px, 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n    background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px);\n    background-repeat: no-repeat;\n    min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1))); }\n\n:host(:not([animation])).text-loaded {\n    background: none;\n    min-height: inherit;\n    color: inherit; }\n\n:host([animation=\"bouncing\"]) {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: animateLine;\n          animation-name: animateLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s; }\n\n@-webkit-keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px); }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px); } }\n\n@keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px); }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px); } }\n\n:host([animation=\"bouncing\"])[lines=\"1\"] {\n    background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 93% , var(--text-shell-background, #FFF) 93%);\n    background-position: 0 0px;\n    background-size: 100% var(--text-shell-line-height, 16px);\n    background-repeat: no-repeat;\n    -webkit-animation-direction: alternate;\n            animation-direction: alternate;\n    -webkit-animation-name: animateLine;\n            animation-name: animateLine;\n    min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s; }\n\n@keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px); }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px); } }\n\n:host([animation=\"bouncing\"])[lines=\"2\"] {\n    background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 40% , var(--text-shell-background, #FFF) 40%);\n    background-position: 0 0px, 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n    background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px);\n    background-repeat: no-repeat;\n    animation-direction: alternate-reverse;\n    -webkit-animation-name: animateMultiLine;\n            animation-name: animateMultiLine;\n    min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s; }\n\n@-webkit-keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 55% var(--text-shell-line-height, 16px); }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px); } }\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 55% var(--text-shell-line-height, 16px); }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px); } }\n\n:host([animation=\"bouncing\"])[lines=\"3\"] {\n    background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 67% , var(--text-shell-background, #FFF) 67%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 32% , var(--text-shell-background, #FFF) 32%);\n    background-position: 0 0px, 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n    background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px);\n    background-repeat: no-repeat;\n    animation-direction: alternate-reverse;\n    -webkit-animation-name: animateMultiLine;\n            animation-name: animateMultiLine;\n    min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s; }\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 75% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 55% var(--text-shell-line-height, 16px); }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px); } }\n\n:host([animation=\"bouncing\"])[lines=\"4\"] {\n    background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 91% , var(--text-shell-background, #FFF) 91%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 67% , var(--text-shell-background, #FFF) 67%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 50% , var(--text-shell-background, #FFF) 50%);\n    background-position: 0 0px, 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n    background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px);\n    background-repeat: no-repeat;\n    animation-direction: alternate-reverse;\n    -webkit-animation-name: animateMultiLine;\n            animation-name: animateMultiLine;\n    min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s; }\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 75% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 75% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 55% var(--text-shell-line-height, 16px); }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px); } }\n\n:host([animation=\"bouncing\"])[lines=\"5\"] {\n    background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 90% , var(--text-shell-background, #FFF) 90%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 66% , var(--text-shell-background, #FFF) 66%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 72% , var(--text-shell-background, #FFF) 72%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 43% , var(--text-shell-background, #FFF) 43%);\n    background-position: 0 0px, 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n    background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px);\n    background-repeat: no-repeat;\n    animation-direction: alternate-reverse;\n    -webkit-animation-name: animateMultiLine;\n            animation-name: animateMultiLine;\n    min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s; }\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 75% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 75% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 75% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 55% var(--text-shell-line-height, 16px); }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px); } }\n\n:host([animation=\"bouncing\"])[lines=\"6\"] {\n    background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 72% , var(--text-shell-background, #FFF) 72%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 62% , var(--text-shell-background, #FFF) 62%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 75% , var(--text-shell-background, #FFF) 75%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 41% , var(--text-shell-background, #FFF) 41%);\n    background-position: 0 0px, 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n    background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px);\n    background-repeat: no-repeat;\n    animation-direction: alternate-reverse;\n    -webkit-animation-name: animateMultiLine;\n            animation-name: animateMultiLine;\n    min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s; }\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 75% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 75% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 75% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 75% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 55% var(--text-shell-line-height, 16px); }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px); } }\n\n:host([animation=\"bouncing\"]).text-loaded {\n    background: none;\n    min-height: inherit;\n    color: inherit;\n    -webkit-animation: 0;\n            animation: 0; }\n\n:host([animation=\"gradient\"]) {\n  --text-shell-background: #FFF;\n  --text-shell-line-color: transparent !important;\n  --text-shell-animation-background: #EEE;\n  --text-shell-animation-color: #DDD;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1))); }\n\n:host([animation=\"gradient\"])::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background: linear-gradient(to right, var(--text-shell-animation-background) 8%, var(--text-shell-animation-color) 18%, var(--text-shell-animation-background) 33%);\n    background-size: 800px 104px;\n    -webkit-animation: animateBackground 2s ease-in-out infinite;\n            animation: animateBackground 2s ease-in-out infinite; }\n\n@-webkit-keyframes animateBackground {\n  0% {\n    background-position: -468px 0; }\n  100% {\n    background-position: 468px 0; } }\n\n@keyframes animateBackground {\n  0% {\n    background-position: -468px 0; }\n  100% {\n    background-position: 468px 0; } }\n\n:host([animation=\"gradient\"])::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%);\n    background-position: 0 0px;\n    background-size: 100% var(--text-shell-line-height, 16px);\n    background-repeat: no-repeat;\n    min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1))); }\n\n:host([animation=\"gradient\"])[lines=\"1\"] {\n    min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1))); }\n\n:host([animation=\"gradient\"])[lines=\"1\"]::after {\n      background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%);\n      background-position: 0 0px;\n      background-size: 100% var(--text-shell-line-height, 16px);\n      background-repeat: no-repeat;\n      min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1))); }\n\n:host([animation=\"gradient\"])[lines=\"2\"] {\n    min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1))); }\n\n:host([animation=\"gradient\"])[lines=\"2\"]::after {\n      background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 91% , var(--text-shell-background, #FFF) 91%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 36% , var(--text-shell-background, #FFF) 36%);\n      background-position: 0 0px, 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n      background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px);\n      background-repeat: no-repeat;\n      min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1))); }\n\n:host([animation=\"gradient\"])[lines=\"3\"] {\n    min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1))); }\n\n:host([animation=\"gradient\"])[lines=\"3\"]::after {\n      background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 44% , var(--text-shell-background, #FFF) 44%);\n      background-position: 0 0px, 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n      background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px);\n      background-repeat: no-repeat;\n      min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1))); }\n\n:host([animation=\"gradient\"])[lines=\"4\"] {\n    min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1))); }\n\n:host([animation=\"gradient\"])[lines=\"4\"]::after {\n      background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 93% , var(--text-shell-background, #FFF) 93%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 75% , var(--text-shell-background, #FFF) 75%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 36% , var(--text-shell-background, #FFF) 36%);\n      background-position: 0 0px, 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n      background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px);\n      background-repeat: no-repeat;\n      min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1))); }\n\n:host([animation=\"gradient\"])[lines=\"5\"] {\n    min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1))); }\n\n:host([animation=\"gradient\"])[lines=\"5\"]::after {\n      background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 30% , var(--text-shell-background, #FFF) 30%);\n      background-position: 0 0px, 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n      background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px);\n      background-repeat: no-repeat;\n      min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1))); }\n\n:host([animation=\"gradient\"])[lines=\"6\"] {\n    min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1))); }\n\n:host([animation=\"gradient\"])[lines=\"6\"]::after {\n      background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 63% , var(--text-shell-background, #FFF) 63%), linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%), linear-gradient(to right, var(--text-shell-line-color, #CCC) 40% , var(--text-shell-background, #FFF) 40%);\n      background-position: 0 0px, 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))), 0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))), 0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n      background-size: 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px), 100% var(--text-shell-line-gutter, 3px), 100% var(--text-shell-line-height, 16px);\n      background-repeat: no-repeat;\n      min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1))); }\n\n:host([animation=\"gradient\"]).text-loaded {\n    background: none;\n    min-height: inherit;\n    color: inherit; }\n\n:host([animation=\"gradient\"]).text-loaded::before, :host([animation=\"gradient\"]).text-loaded::after {\n      background: none;\n      -webkit-animation: 0;\n              animation: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYnByL0Rvd25sb2Fkcy9pai9zcmMvYXBwL3BhZ2VzL3NoZWxsL3RleHQtc2hlbGwvdGV4dC1zaGVsbC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tYnByL0Rvd25sb2Fkcy9pai9zcmMvYXBwL3BhZ2VzL3NoZWxsL3RleHQtc2hlbGwvbWl4aW5zL21hc2tlZC1saW5lcy1iYWNrZ3JvdW5kLnNjc3MiLCIvVXNlcnMvbWJwci9Eb3dubG9hZHMvaWovc3JjL2FwcC9wYWdlcy9zaGVsbC90ZXh0LXNoZWxsL21peGlucy9iYWNrZ3JvdW5kLWhlaWdodC5zY3NzIiwiL1VzZXJzL21icHIvRG93bmxvYWRzL2lqL3NyYy9hcHAvcGFnZXMvc2hlbGwvdGV4dC1zaGVsbC9taXhpbnMvYm91bmNpbmctbGluZXMtYmFja2dyb3VuZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0Usb0NBQXdCO0VBQ3hCLDZCQUF3QjtFQUN4Qiw4QkFBeUI7RUFDekIsNkJBQXlCO0VBRXpCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDhDQUE4QztFQUM5QyxvQ0FBNEI7VUFBNUIsNEJBQTRCO0VBRzVCLDRCQUE0QixFQUFBOztBQUk5QjtFQ1BJLDRIQUFrQjtFQUNsQiwwQkFBcUI7RUFDckIseURBQWlCO0VBQ2pCLDRCQUE0QjtFQ2Y5Qiw0R0FBd0YsRUFBQTs7QUZtQjFGO0lDUEksNEhBQWtCO0lBQ2xCLDBCQUFxQjtJQUNyQix5REFBaUI7SUFDakIsNEJBQTRCO0lDZjlCLDRHQUF3RixFQUFBOztBRm1CMUY7SUNzQkkscVZBQWtCO0lBQ2xCLDhPQUFxQjtJQUNyQiw0SUFBaUI7SUFDakIsNEJBQTRCO0lDNUM5Qiw0R0FBd0YsRUFBQTs7QUZtQjFGO0lDc0JJLDhpQkFBa0I7SUFDbEIsa2NBQXFCO0lBQ3JCLCtOQUFpQjtJQUNqQiw0QkFBNEI7SUM1QzlCLDRHQUF3RixFQUFBOztBRm1CMUY7SUNzQkksdXdCQUFrQjtJQUNsQixz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Z0I7TUFDaEIsb0JBQVk7Y0FBWixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaGVsbC90ZXh0LXNoZWxsL3RleHQtc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9taXhpbnMvYmFja2dyb3VuZC1oZWlnaHRcIjtcbkBpbXBvcnQgXCIuL21peGlucy9tYXNrZWQtbGluZXMtYmFja2dyb3VuZFwiO1xuQGltcG9ydCBcIi4vbWl4aW5zL2JvdW5jaW5nLWxpbmVzLWJhY2tncm91bmRcIjtcblxuJG1heC1saW5lcy1jb3VudDogNjtcblxuOmhvc3Qge1xuICAtLXRleHQtc2hlbGwtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiAjRUVFO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlcjogM3B4O1xuXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kKTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLy8gVG8gZml4IDFweCBsaW5lIG1pc2FsaWdubWVudCBpbiBjaHJvbWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZ3JvdW5kLWNsaXBcbiAgLy8gKEkgYWxzbyBub3RpY2VkIHRoYXQgaWYgSSBzZXQgdGhlIGNvbG9yIHRvIGEgc29saWQgY29sb3IgaW5zdGVhZCBvZiBoYXZpbmcgb3BhY2l0eSwgdGhlIGlzc3VlIGRvZXNuJ3QgaGFwcGVuKVxuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xufVxuXG4vLyBEZWZhdWx0IHN0eWxlcy4gV2hlbiBubyBhbmltYXRpb24gYXR0cmlidXRlIGlzIHByb3ZpZGVkXG46aG9zdCg6bm90KFthbmltYXRpb25dKSkge1xuICAvLyBEZWZhdWx0IG9uZSBsaW5lIHRleHQtc2hlbGxcbiAgQGluY2x1ZGUgbWFza2VkLWxpbmVzLWJhY2tncm91bmQoMSk7XG5cbiAgLy8gU3VwcG9ydCBmb3IgW2xpbmVzXSBhdHRyaWJ1dGVcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4LWxpbmVzLWNvdW50IHtcbiAgICAmW2xpbmVzPVwiI3sgJGkgfVwiXSB7XG4gICAgICBAaW5jbHVkZSBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgkaSk7XG4gICAgfVxuICB9XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG59XG5cbi8vIEJvdW5jaW5nIGxpbmUgbG9hZGluZyBhbmltYXRpb25cbjpob3N0KFthbmltYXRpb249XCJib3VuY2luZ1wiXSkge1xuICAvLyBEZWZhdWx0IG9uZSBsaW5lIHRleHQtc2hlbGxcbiAgQGluY2x1ZGUgYm91bmNpbmctbGluZXMtYmFja2dyb3VuZCgxKTtcblxuICAvLyBTdXBwb3J0IGZvciBbbGluZXNdIGF0dHJpYnV0ZVxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRtYXgtbGluZXMtY291bnQge1xuICAgICZbbGluZXM9XCIjeyAkaSB9XCJdIHtcbiAgICAgIEBpbmNsdWRlIGJvdW5jaW5nLWxpbmVzLWJhY2tncm91bmQoJGkpO1xuICAgIH1cbiAgfVxuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAvLyAwIGlzIHRoZSBkZWZhdWx0IHZhbHVlIChzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNTk2MzA0NC8xMTE2OTU5KVxuICAgIGFuaW1hdGlvbjogMDtcbiAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIGdyYWRpZW50IGJlbmVhdGggbWFza2VkIGxpbmVzXG46aG9zdChbYW5pbWF0aW9uPVwiZ3JhZGllbnRcIl0pIHtcbiAgLS10ZXh0LXNoZWxsLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6ICNFRUU7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6ICNEREQ7XG5cblxuICAvLyBDYWxjdWxhdGUgZGVmYXVsdCBoZWlnaHQgZm9yIDEgbGluZVxuICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWhlaWdodChtaW4taGVpZ2h0LCAxKTtcblxuICAvLyBUaGUgYW5pbWF0aW9uIHRoYXQgZ29lcyBiZW5lYXRoIHRoZSBtYXNrc1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOlxuICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kKSA4JSwgdmFyKC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3IpIDE4JSwgdmFyKC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZCkgMzMlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwMHB4IDEwNHB4O1xuICAgIGFuaW1hdGlvbjogYW5pbWF0ZUJhY2tncm91bmQgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cblxuICBAa2V5ZnJhbWVzIGFuaW1hdGVCYWNrZ3JvdW5kIHtcbiAgICAwJXtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwXG4gICAgfVxuXG4gICAgMTAwJXtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDBcbiAgICB9XG4gIH1cblxuICAvLyBUaGUgbWFza3NcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcblxuICAgIC8vIERlZmF1bHQgb25lIGxpbmUgdGV4dC1zaGVsbFxuICAgIEBpbmNsdWRlIG1hc2tlZC1saW5lcy1iYWNrZ3JvdW5kKDEpO1xuICB9XG5cbiAgLy8gU3VwcG9ydCBmb3IgW2xpbmVzXSBhdHRyaWJ1dGVcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4LWxpbmVzLWNvdW50IHtcbiAgICAmW2xpbmVzPVwiI3sgJGkgfVwiXSB7XG4gICAgICAvLyBDYWxjdWxhdGUgZGVmYXVsdCBoZWlnaHQgZm9yICRpIGxpbmVzXG4gICAgICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWhlaWdodChtaW4taGVpZ2h0LCAkaSk7XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgbWFza2VkLWxpbmVzLWJhY2tncm91bmQoJGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYW5pbWF0aW9uOiAwO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4vdXRpbHNcIjtcbkBpbXBvcnQgXCIuL2JhY2tncm91bmQtaGVpZ2h0XCI7XG5cbkBtaXhpbiBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgkbGluZXM6IDEpIHtcbiAgJGxpbmUtaGVpZ2h0OiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgJGxpbmUtc3BhY2luZzogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KTtcbiAgJGJnLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpO1xuICAkbWFzay1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcbiAgJGxpbmUtYmctY29sb3I6IHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRik7XG4gICRiZy15LXBvczogMHB4O1xuICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oODUsIDk1KX07XG4gICRiZy1pbWFnZTogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgJyArICRiZy1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUgLCAnICsgJG1hc2stY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclKSc7XG4gICRiZy1wb3NpdGlvbjogJzAgJyArICRiZy15LXBvcztcbiAgJGJnLXNpemU6ICcxMDAlICcgKyAkbGluZS1oZWlnaHQ7XG5cbiAgQGlmICgkbGluZXMgPT0gMSkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICN7JGJnLWltYWdlfTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAjeyRiZy1wb3NpdGlvbn07XG4gICAgYmFja2dyb3VuZC1zaXplOiAjeyRiZy1zaXplfTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9IEBlbHNlIHtcbiAgICBAZm9yICRpIGZyb20gMiB0aHJvdWdoICRsaW5lcyB7XG4gICAgICAvLyBBZGQgc2VwYXJhdG9yIGJldHdlZW4gbGluZXNcbiAgICAgICRiZy1pbWFnZTogYXBwZW5kKCRiZy1pbWFnZSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjeyRsaW5lLWJnLWNvbG9yfSAxMDAlLCAjeyRsaW5lLWJnLWNvbG9yfSAxMDAlKSk7XG4gICAgICAvLyBUaGlzIGxpbmVhci1ncmFkaWVudCBhcyBzZXBhcmF0b3Igc3RhcnRzIGJlbG93IHRoZSBsYXN0IGxpbmUsXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGFkZCAkbGluZS1oZWlnaHQgdG8gb3VyIHktcG9zIHBvaW50ZXJcbiAgICAgICRiZy15LXBvczogY2FsYygoI3skbGluZS1oZWlnaHR9ICogKCN7JGl9IC0gMSkpICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skaX0gLSAyKSkpO1xuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcbiAgICAgICRiZy1zaXplOiBhcHBlbmQoJGJnLXNpemUsICcxMDAlICcgKyAkbGluZS1zcGFjaW5nKTtcblxuICAgICAgLy8gQWRkIG5ldyBsaW5lXG4gICAgICAvLyBUaGUgbGFzdCBsaW5lIHNob3VsZCBiZSBuYXJyb3cgdGhhbiB0aGUgb3RoZXJzXG4gICAgICBAaWYgKCRpID09ICRsaW5lcykge1xuICAgICAgICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oMzAsIDUwKX07XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDYwLCA4MCl9O1xuICAgICAgfVxuICAgICAgJGJnLWltYWdlOiBhcHBlbmQoJGJnLWltYWdlLCAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAnICsgJGJnLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSAsICcgKyAkbWFzay1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUpJyk7XG4gICAgICAvLyBUaGlzIG5ldyBsaW5lIHN0YXJ0cyBiZWxvdyB0aGUgcHJ2aW91c2x5IGFkZGVkIHNlcGFyYXRvcixcbiAgICAgIC8vIHNvIHdlIGhhdmUgdG8gYWRkICRsaW5lLXNwYWNpbmcgdG8gb3VyIHktcG9zIHBvaW50ZXJcbiAgICAgICRiZy15LXBvczogY2FsYygoI3skbGluZS1oZWlnaHR9ICogKCN7JGl9IC0gMSkpICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skaX0gLSAxKSkpO1xuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcbiAgICAgICRiZy1zaXplOiBhcHBlbmQoJGJnLXNpemUsICcxMDAlICcgKyAkbGluZS1oZWlnaHQpO1xuICAgIH1cblxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICN7dG8tc3RyaW5nKCRiZy1pbWFnZSwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7dG8tc3RyaW5nKCRiZy1wb3NpdGlvbiwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtc2l6ZTogI3t0by1zdHJpbmcoJGJnLXNpemUsICcsICcpfTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9XG5cbiAgQGluY2x1ZGUgYmFja2dyb3VuZC1oZWlnaHQobWluLWhlaWdodCwgJGxpbmVzKTtcbn1cbiIsIkBtaXhpbiBiYWNrZ3JvdW5kLWhlaWdodCgkcHJvcGVydHksICRsaW5lczogMSkge1xuICAkbGluZS1oZWlnaHQ6IHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICAkbGluZS1zcGFjaW5nOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpO1xuXG4gICN7JHByb3BlcnR5fTogY2FsYygoI3skbGluZS1oZWlnaHR9ICogI3skbGluZXN9KSArICgjeyRsaW5lLXNwYWNpbmd9ICogKCN7JGxpbmVzfSAtIDEpKSk7XG59XG4iLCJAaW1wb3J0IFwiLi91dGlsc1wiO1xuXG5AbWl4aW4gYm91bmNpbmctbGluZXMtYmFja2dyb3VuZCgkbGluZXM6IDEpIHtcbiAgJGxpbmUtaGVpZ2h0OiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgJGxpbmUtc3BhY2luZzogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KTtcbiAgJGJnLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpO1xuICAkbWFzay1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcbiAgJGxpbmUtYmctY29sb3I6IHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRik7XG4gICRiZy15LXBvczogMHB4O1xuICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oODUsIDk1KX07XG4gICRiZy1pbWFnZTogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgJyArICRiZy1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUgLCAnICsgJG1hc2stY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclKSc7XG4gICRiZy1wb3NpdGlvbjogJzAgJyArICRiZy15LXBvcztcbiAgJGJnLXNpemU6ICcxMDAlICcgKyAkbGluZS1oZWlnaHQ7XG4gICRiZy1zaXplLWFuaW1hdGlvbi1mcm9tOiAnODUlICcgKyAkbGluZS1oZWlnaHQ7XG4gICRiZy1zaXplLWFuaW1hdGlvbi10bzogJzEwMCUgJyArICRsaW5lLWhlaWdodDtcblxuICBAaWYgKCRsaW5lcyA9PSAxKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogI3skYmctaW1hZ2V9O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7JGJnLXBvc2l0aW9ufTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICN7JGJnLXNpemV9O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVMaW5lO1xuXG4gICAgQGtleWZyYW1lcyBhbmltYXRlTGluZSB7XG4gICAgICAwJXtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAjeyRiZy1zaXplLWFuaW1hdGlvbi1mcm9tfTtcbiAgICAgIH1cblxuICAgICAgMTAwJXtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAjeyRiZy1zaXplLWFuaW1hdGlvbi10b307XG4gICAgICB9XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZm9yICRpIGZyb20gMiB0aHJvdWdoICRsaW5lcyB7XG4gICAgICAvLyBBZGQgc2VwYXJhdG9yIGJldHdlZW4gbGluZXNcbiAgICAgICRiZy1pbWFnZTogYXBwZW5kKCRiZy1pbWFnZSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjeyRsaW5lLWJnLWNvbG9yfSAxMDAlLCAjeyRsaW5lLWJnLWNvbG9yfSAxMDAlKSk7XG4gICAgICAvLyBUaGlzIGxpbmVhci1ncmFkaWVudCBhcyBzZXBhcmF0b3Igc3RhcnRzIGJlbG93IHRoZSBsYXN0IGxpbmUsXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGFkZCAkbGluZS1oZWlnaHQgdG8gb3VyIHktcG9zIHBvaW50ZXJcbiAgICAgICRiZy15LXBvczogY2FsYygoI3skbGluZS1oZWlnaHR9ICogKCN7JGl9IC0gMSkpICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skaX0gLSAyKSkpO1xuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcbiAgICAgICRiZy1zaXplOiBhcHBlbmQoJGJnLXNpemUsICcxMDAlICcgKyAkbGluZS1zcGFjaW5nKTtcbiAgICAgIC8vIHNlcGFyYXRvciBsaW5lcyBoYXZlIHRoZSBzYW1lIGluaXRpYWwgYW5kIGVuZCBzdGF0ZSwgdGh1cyBubyBhbmltYXRpb24gb2NjdXJzXG4gICAgICAkYmctc2l6ZS1hbmltYXRpb24tZnJvbTogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi1mcm9tLCAnMTAwJSAnICsgJGxpbmUtc3BhY2luZyk7XG4gICAgICAkYmctc2l6ZS1hbmltYXRpb24tdG86IGFwcGVuZCgkYmctc2l6ZS1hbmltYXRpb24tdG8sICcxMDAlICcgKyAkbGluZS1zcGFjaW5nKTtcblxuICAgICAgLy8gQWRkIG5ldyBsaW5lXG4gICAgICAvLyBUaGUgbGFzdCBsaW5lIHNob3VsZCBiZSBuYXJyb3cgdGhhbiB0aGUgb3RoZXJzXG4gICAgICBAaWYgKCRpID09ICRsaW5lcykge1xuICAgICAgICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oMzAsIDUwKX07XG4gICAgICAgICRiZy1zaXplLWFuaW1hdGlvbi1mcm9tOiBhcHBlbmQoJGJnLXNpemUtYW5pbWF0aW9uLWZyb20sICc1NSUgJyArICRsaW5lLWhlaWdodCk7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDYwLCA4MCl9O1xuICAgICAgICAkYmctc2l6ZS1hbmltYXRpb24tZnJvbTogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi1mcm9tLCAnNzUlICcgKyAkbGluZS1oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICAkYmctaW1hZ2U6IGFwcGVuZCgkYmctaW1hZ2UsICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICcgKyAkYmctY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclICwgJyArICRtYXNrLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSknKTtcbiAgICAgIC8vIFRoaXMgbmV3IGxpbmUgc3RhcnRzIGJlbG93IHRoZSBwcnZpb3VzbHkgYWRkZWQgc2VwYXJhdG9yLFxuICAgICAgLy8gc28gd2UgaGF2ZSB0byBhZGQgJGxpbmUtc3BhY2luZyB0byBvdXIgeS1wb3MgcG9pbnRlclxuICAgICAgJGJnLXktcG9zOiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAoI3skaX0gLSAxKSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRpfSAtIDEpKSk7XG4gICAgICAkYmctcG9zaXRpb246IGFwcGVuZCgkYmctcG9zaXRpb24sICcwICcgKyAkYmcteS1wb3MpO1xuICAgICAgJGJnLXNpemU6IGFwcGVuZCgkYmctc2l6ZSwgJzEwMCUgJyArICRsaW5lLWhlaWdodCk7XG4gICAgICAkYmctc2l6ZS1hbmltYXRpb24tdG86IGFwcGVuZCgkYmctc2l6ZS1hbmltYXRpb24tdG8sICcxMDAlICcgKyAkbGluZS1oZWlnaHQpO1xuICAgIH1cblxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICN7dG8tc3RyaW5nKCRiZy1pbWFnZSwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7dG8tc3RyaW5nKCRiZy1wb3NpdGlvbiwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtc2l6ZTogI3t0by1zdHJpbmcoJGJnLXNpemUsICcsICcpfTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlLXJldmVyc2U7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVNdWx0aUxpbmU7XG5cbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVNdWx0aUxpbmUge1xuICAgICAgMCV7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogI3t0by1zdHJpbmcoJGJnLXNpemUtYW5pbWF0aW9uLWZyb20sICcsICcpfTtcbiAgICAgIH1cblxuICAgICAgMTAwJXtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAje3RvLXN0cmluZygkYmctc2l6ZS1hbmltYXRpb24tdG8sICcsICcpfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWhlaWdodChtaW4taGVpZ2h0LCAkbGluZXMpO1xuXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/shell/text-shell/text-shell.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/shell/text-shell/text-shell.component.ts ***!
  \****************************************************************/
/*! exports provided: TextShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextShellComponent", function() { return TextShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/app-shell.config */ "./src/app/pages/shell/config/app-shell.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextShellComponent = /** @class */ (function () {
    function TextShellComponent() {
        // To debug shell styles, change configuration in the assets/app-shell.config.json file
        this.debugMode = (_config_app_shell_config__WEBPACK_IMPORTED_MODULE_1__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_1__["AppShellConfig"].settings.debug) ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_1__["AppShellConfig"].settings.debug : false;
        this.textLoaded = false;
    }
    Object.defineProperty(TextShellComponent.prototype, "data", {
        set: function (val) {
            if (!this.debugMode) {
                this._data = (val !== undefined && val !== null) ? val : '';
            }
            if (this._data && this._data !== '') {
                this.textLoaded = true;
            }
            else {
                this.textLoaded = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.text-loaded'),
        __metadata("design:type", Object)
    ], TextShellComponent.prototype, "textLoaded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TextShellComponent.prototype, "data", null);
    TextShellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text-shell',
            template: __webpack_require__(/*! ./text-shell.component.html */ "./src/app/pages/shell/text-shell/text-shell.component.html"),
            styles: [__webpack_require__(/*! ./text-shell.component.scss */ "./src/app/pages/shell/text-shell/text-shell.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TextShellComponent);
    return TextShellComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~deals-deals-module~pages-sub-sub-module.js.map
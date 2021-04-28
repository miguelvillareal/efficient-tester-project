(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "/UQe":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Home</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card color=\"success\">\n    <ion-card-header>\n      <ion-card-subtitle>Our Team</ion-card-subtitle>\n      <ion-card-title>Efficient Tester</ion-card-title>\n    </ion-card-header>\n    \n    <ion-card-content>\n      <button (click)=\"redirectThree()\">\n        <ion-icon name=\"arrow-forward\"></ion-icon>\n        <div>Team Website</div>\n      </button>\n      We made the application and if you want to find out more about our team and what we do please click on the link.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card color=\"success\">\n    <ion-card-header>\n      <ion-card-subtitle>Lab Groups</ion-card-subtitle>\n      <ion-card-title>Create or Select a Lab Group!</ion-card-title>\n    </ion-card-header>\n    \n    <ion-card-content>\n      <button (click)=\"redirect()\">\n        <ion-icon name=\"arrow-forward\"></ion-icon>\n        <div>Lab Group Page</div>\n      </button>\n      This is made for Lab Purposes only.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card color=\"success\">\n    <ion-card-header>\n      <ion-card-subtitle>Protocols</ion-card-subtitle>\n      <ion-card-title>Create or Select a Protocol!</ion-card-title>\n    </ion-card-header>\n    \n    <ion-card-content>\n      <button (click)=\"redirectTwo()\">\n        <ion-icon name=\"arrow-forward\"></ion-icon>\n        <div>Protocols Page</div>\n      </button>\n      This is made for Lab Purposes only.\n    </ion-card-content>\n  </ion-card>\n\n  <iframe width=\"500\" height=\"320\" [src]=\"sanitize(vid)\" frameborder=\"0\" allowfullscreen></iframe>\n</ion-content>");

/***/ }),

/***/ "3hl/":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.page */ "Rmbw");




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_3__["MainPage"],
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MainPageRoutingModule);



/***/ }),

/***/ "8QZa":
/*!*************************************!*\
  !*** ./src/app/main/main.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Rmbw":
/*!***********************************!*\
  !*** ./src/app/main/main.page.ts ***!
  \***********************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./main.page.html */ "/UQe");
/* harmony import */ var _main_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.page.scss */ "8QZa");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");








let MainPage = class MainPage {
    constructor(authService, router, dom, inAppBrowser) {
        this.authService = authService;
        this.router = router;
        this.dom = dom;
        this.inAppBrowser = inAppBrowser;
        this.vid = 'https://youtube.com/embed/1-VAhbOwsOY';
    }
    sanitize(vid) {
        return this.dom.bypassSecurityTrustResourceUrl(vid);
    }
    redirect() {
        this.router.navigateByUrl("/lab-group");
    }
    redirectTwo() {
        this.router.navigateByUrl("/protocols");
    }
    redirectThree() {
        this.inAppBrowser.create("https://ceias.nau.edu/capstone/projects/CS/2021/EfficientTest-F20/");
    }
    ngOnInit() {
    }
};
MainPage.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] }
];
MainPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-main',
        template: _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_main_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MainPage);



/***/ }),

/***/ "XpXM":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-routing.module */ "3hl/");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "Rmbw");







let MainPageModule = class MainPageModule {
};
MainPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainPageRoutingModule"]
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
    })
], MainPageModule);



/***/ })

}]);
//# sourceMappingURL=main-main-module-es2015.js.map
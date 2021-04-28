(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "7Dlj":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "Uncc");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "7wo0":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "7Dlj");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "Uncc");







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "ADm/":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Uncc":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.page.html */ "mzE/");
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page.scss */ "ADm/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var _services_api_django_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api-django.service */ "ZqIr");










let SettingsPage = class SettingsPage {
    constructor(apiService) {
        this.apiService = apiService;
        this.userCredentials = { email: '', };
        this.userName = null;
        this.userEmail = null;
        this.userFirstName = null;
        this.userLastName = null;
        this.userName = src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["myUserName"];
        this.userEmail = src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["myEmail"];
        this.userFirstName = src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["myFirstName"];
        this.userLastName = src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["myLastName"];
    }
    ngOnInit() {
        //console.log(myID);
    }
    updateEmail() {
        let queryPath = src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["myID"];
        let setUserInfo = {
            "email": this.userCredentials.email
        };
        this.apiService.infoUser(queryPath, setUserInfo).subscribe((myUser) => {
            if (myUser) {
                console.log(myUser);
            }
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _services_api_django_service__WEBPACK_IMPORTED_MODULE_5__["ApiDjangoService"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingsPage);



/***/ }),

/***/ "mzE/":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Profile</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <ion-content>\n    <div class=\"part\">\n        <ion-item lines=\"full\" class='item-small'>\n          <ion-label>Email: {{ userEmail }}</ion-label>\n        </ion-item>\n        <ion-item lines=\"full\" class='item-small'>\n          <ion-label>UserName: {{ userName }}</ion-label>\n        </ion-item>\n        <ion-item lines=\"full\" class='item-small'>\n          <ion-label>First Name: {{ userFirstName }}</ion-label>\n        </ion-item>\n        <ion-item lines=\"full\" class='item-small'>\n          <ion-label>Last Name: {{ userLastName }}</ion-label>\n        </ion-item>\n    \n        <div style=\"padding-top: 3%;\">\n        <ion-card>\n          <form (ngSubmit)= \"updateEmail()\" #registerForm=\"ngForm\">\n            <ion-item>\n              <ion-label position=\"floating\">Enter your new Email:</ion-label>\n              <ion-input type=\"email\" name=\"email\"  [(ngModel)]=\"userCredentials.email\" ></ion-input>\n            </ion-item>\n            <ion-button type=\"Cancel\" color=\"danger\" expand=\"block\" position=\"floating\">Cancel</ion-button>\n            <ion-button type=\"Save\" color=\"danger\" expand=\"block\" position=\"floating\" type=\"submit\">Save</ion-button>\n          </form>\n        </ion-card>\n      </div>\n    </div>\n  </ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map
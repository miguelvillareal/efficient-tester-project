(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/miguelvillareal/Desktop/CapstoneProject/ionic-form-ui/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "E0ys":
/*!********************************************************!*\
  !*** ./src/app/group-popup/group-popup.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncm91cC1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ETMM":
/*!**************************************************************!*\
  !*** ./src/app/addgroupmember/addgroupmember.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRncm91cG1lbWJlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "HvKD":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group-popup/group-popup.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-button (click)=\"close()\">\n\t\t\t<ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n<ion-content padding>\n\t<h1>{{ groupName }}</h1>\n\t<p>{{ groupName }} is now the current group!</p>\n\t<ion-button (click)=\"addMember()\">Add Members</ion-button> \n</ion-content>");

/***/ }),

/***/ "Of47":
/*!*********************************************!*\
  !*** ./src/app/lab-group/lab-group.page.ts ***!
  \*********************************************/
/*! exports provided: currentGroup, groupName, LabGroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentGroup", function() { return currentGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupName", function() { return groupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabGroupPage", function() { return LabGroupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lab_group_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lab-group.page.html */ "Orme");
/* harmony import */ var _lab_group_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lab-group.page.scss */ "x8TV");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/storage.service */ "n90K");
/* harmony import */ var _services_api_django_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api-django.service */ "ZqIr");
/* harmony import */ var src_app_group_popup_group_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/group-popup/group-popup.component */ "tqRT");
/* harmony import */ var src_app_addgroupmember_addgroupmember_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/addgroupmember/addgroupmember.component */ "v4go");













var currentGroup;
var groupName;
let LabGroupPage = class LabGroupPage {
    constructor(storageService, plt, ApiService, toastController, authService, router, modalCtrl) {
        this.storageService = storageService;
        this.plt = plt;
        this.ApiService = ApiService;
        this.toastController = toastController;
        this.authService = authService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.labGroupCredentials = { myName: '' };
        this.group_id = '';
        this.items = [];
        this.displayList = [];
        this.newItem = {};
        this.plt.ready().then(() => {
            this.loadItems();
        });
    }
    addLabGroup() {
        if (this.ApiService.networkConnected) {
            this.ApiService.showLoading();
            console.log(src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["myID"]);
            let labgroupToCreate = {
                "name": this.labGroupCredentials.myName,
                "group_id": src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["myID"],
            };
            this.ApiService.createLabGroups(labgroupToCreate).subscribe((res) => {
                if (res) {
                    console.log(res);
                    currentGroup = res.id;
                    let groupMembershipToCreate = {
                        "user": src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["myID"],
                        "group": currentGroup,
                        "role": 1,
                    };
                    this.ApiService.createLabGroupMembership(groupMembershipToCreate).subscribe((res) => {
                        if (res) {
                            console.log(res);
                        }
                        else {
                            this.ApiService.stopLoading();
                            this.ApiService.showError("An error occured while creating a Protocol");
                        }
                    });
                    this.loadItems();
                }
                else {
                    this.ApiService.stopLoading();
                    this.ApiService.showError("An error occured while creating a Protocol");
                }
            });
            //}
            //else{
            //  this.ApiService.showError("A Protocol already exists for this name and positive rate!");
            //}
            //}
            //else {
            //  this.ApiService.showError("An error occured while registering")
            //}
            //});
        }
    }
    addMember() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_addgroupmember_addgroupmember_component__WEBPACK_IMPORTED_MODULE_10__["AddgroupmemberComponent"],
                componentProps: {
                    groupID: currentGroup
                }
            });
            yield modal.present();
        });
    }
    groupPopup(groupName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_group_popup_group_popup_component__WEBPACK_IMPORTED_MODULE_9__["GroupPopupComponent"],
                componentProps: {
                    groupName: groupName
                }
            });
            yield modal.present();
        });
    }
    redirect() {
        this.router.navigateByUrl("/experiments");
    }
    onSelect(item) {
        this.selectedItem = item;
        currentGroup = item.id;
        groupName = item['name'];
        this.groupPopup(groupName);
        //this.redirect();
    }
    /**
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();
    this.storageService.addItem(this.newItem).then(item => {
      this.newItem = <Item>{};
      //this.showToast('Item added!')
      this.loadItems();
    });
  }
  **/
    loadItems() {
        this.ApiService.getLabGroups().subscribe(items => {
            for (let index in items["results"]) {
                for (let i in items["results"][index]["member_list"]) {
                    let someUser = items["results"][index]["member_list"][i];
                    console.log(someUser);
                    if (someUser == src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["myID"]) {
                        this.displayList.push(items["results"][index]);
                    }
                }
            }
        });
    }
    /**
    updateItem(item: Item){
      item.title = 'UPDATED: ${item.title}';
      item.modified = Date.now();
      this.storageService.updateItem(item).then(item => {
        this.showToast('Item updated!');
        this.mylist.closeSlidingItems();
        this.loadItems();
      });
    }
    deleteItem(item: Item){
      this.storageService.deleteItem(item.id).then(item => {
        this.showToast('Item removed!');
        this.mylist.closeSlidingItems();
        this.loadItems();
      });
    }
    async showToast(msg) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 2000
      });
      toast.present();
    }
    **/
    ngOnInit() {
    }
};
LabGroupPage.ctorParameters = () => [
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _services_api_django_service__WEBPACK_IMPORTED_MODULE_8__["ApiDjangoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
LabGroupPage.propDecorators = {
    mylist: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['mylist',] }]
};
LabGroupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-lab-group',
        template: _raw_loader_lab_group_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lab_group_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LabGroupPage);



/***/ }),

/***/ "Orme":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lab-group/lab-group.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Lab Group</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <ion-content>\n    <form (ngSubmit)=\"addLabGroup()\" #registerForm=\"ngForm\">\n      <ion-item>\n        <ion-label position=\"fixed\">Name</ion-label>\n        <ion-input type=\"text\" name=\"numSamples\" [(ngModel)]=\"labGroupCredentials.myName\"></ion-input>\n      </ion-item>\n\n      <ion-button expand=\"full\" type=\"submit\" >Add Lab Group!</ion-button>\n    </form>\n    \n    <ion-list #mylist>\n\n      <ion-list-header>\n        <ion-label>Lab Groups</ion-label>\n      </ion-list-header>\n\n      <ion-item-sliding *ngFor=\"let item of displayList\" (click)=\"onSelect(item)\">\n        <ion-item>\n          <ion-label text-wrap>\n            <h3>Name: {{ item.name }}</h3>\n            <h3>Group ID: {{ item.group_id }}</h3>\n\n            <p>{{ item.modified | date:'short'}}</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"secondary\">Delete</ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n\n    </ion-list>\n\n  </ion-content>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _app_services_api_django_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/services/api-django.service */ "ZqIr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");










let AppComponent = class AppComponent {
    constructor(platform, authService, splashScreen, statusBar, apiService, router) {
        this.platform = platform;
        this.authService = authService;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.apiService = apiService;
        this.router = router;
        this.initializeApp();
    }
    logout() {
        this.authService.logout();
        this.router.navigateByUrl('/home', { replaceUrl: true });
    }
    accessAuthorizedWithUrl() {
    }
    getToken() {
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
    { type: _app_services_api_django_service__WEBPACK_IMPORTED_MODULE_8__["ApiDjangoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-menu side=\"start\" menuId=\"main-menu\" content-id=\"main\">\n    <ion-header>\n      <ion-toolbar translucent>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/main\">\n            <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n            <ion-label>Home Page</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/protocols\">\n            <ion-icon name=\"create-outline\" slot=\"start\"></ion-icon>\n            <ion-label>Protocols</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/experiments\">\n            <ion-icon name=\"eyedrop-outline\" slot=\"start\"></ion-icon>\n            <ion-label>Experiments</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/lab-group\">\n            <ion-icon name=\"layers-outline\" slot=\"start\"></ion-icon>\n            <ion-label>LabGroup</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/settings\">\n            <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\n            <ion-label>Profile</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle>\n          <ion-item (click)=\"logout()\">\n              <ion-icon name=\"log-out-outline\" slot=\"start\"></ion-icon>\n              <ion-label>Logout</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_addgroupmember_addgroupmember_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/addgroupmember/addgroupmember.component */ "v4go");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _services_api_django_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/api-django.service */ "ZqIr");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");














let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], src_app_addgroupmember_addgroupmember_component__WEBPACK_IMPORTED_MODULE_4__["AddgroupmemberComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["IonicStorageModule"].forRoot()],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__["InAppBrowser"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] },
            _services_api_django_service__WEBPACK_IMPORTED_MODULE_12__["ApiDjangoService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ZqIr":
/*!************************************************!*\
  !*** ./src/app/services/api-django.service.ts ***!
  \************************************************/
/*! exports provided: ApiDjangoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDjangoService", function() { return ApiDjangoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "gcOT");







const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];
let ApiDjangoService = class ApiDjangoService {
    constructor(http, loadingController, alertCtrl) {
        this.http = http;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.tokenSSO = "";
        this.networkConnected = true;
        this.virtualHostName = 'http://54.90.175.110:8000';
        this.appName = '';
        this.apiPrefix = "/api";
        this.isOnline = false;
        //urlPwdOublie: string = '';
        this.checkUrl = '';
        this.cordovaiOS = false;
        this.isShowingLoader = false;
        this.getUserUrl = this.virtualHostName + this.apiPrefix + "/users/";
        this.placeUserInfoUrl = this.virtualHostName + this.apiPrefix + "/user/";
        this.getProtocolUrl = this.virtualHostName + this.apiPrefix + "/protocols/";
        this.getLabGroupUrl = this.virtualHostName + this.apiPrefix + "/labgroups/";
        this.getLabGroupMembershipUrl = this.virtualHostName + this.apiPrefix + "/groupmembership/";
        this.getExperimentUrl = this.virtualHostName + this.apiPrefix + "/experiments/";
        this.getAuthUserUrl = this.virtualHostName + "/auth/users/";
        //getMyUrl = this.virtualHostName + "/auth/users/me/";
        this.getLoginUrl = this.virtualHostName + "/auth/jwt/create/";
        this.refreshtokenUrl = this.virtualHostName + "/auth/jwt/refresh/";
        this.urlPwdOublie = this.virtualHostName + "/account/reset_password/";
        this.getCustomUserUrl = '';
    }
    /////////////////////////////
    //DONT KNOW WHERE I USE THIS METHOD BELOW
    /////////////////////////////
    getUserNow() {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        let url = this.getAuthUserUrl;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.http.get(url, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1))
                .subscribe(res => {
                observer.next(res);
                observer.complete();
            }, error => {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
            });
        });
    }
    /////////////////////////////////////////////////
    findUser(path) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        let url = this.getUserUrl + path;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            // At this point make a request to your backend  
            console.log("on appelle BACKEND encoded url " + url);
            this.http.get(url, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1))
                .subscribe(res => {
                observer.next(res);
                observer.complete();
            }, error => {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
            });
        });
    }
    infoUser(path, user) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        let url = this.placeUserInfoUrl + path + "/";
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            // At this point make a request to your backend  
            console.log("on appelle BACKEND encoded url " + url);
            this.http.put(url, user, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1))
                .subscribe(res => {
                observer.next(res);
                observer.complete();
            }, error => {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
            });
        });
    }
    getinfoUser(path) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        let url = this.placeUserInfoUrl + path + "/";
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            // At this point make a request to your backend  
            console.log("on appelle BACKEND encoded url " + url);
            this.http.get(url, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1))
                .subscribe(res => {
                observer.next(res);
                observer.complete();
            }, error => {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
            });
        });
    }
    setLocalData(key, jsonData) {
        return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Storage.set({ key: `${this.virtualHostName}-${key}`, value: JSON.stringify(jsonData) });
            resolve(true);
        }));
    }
    getLocalData(key) {
        return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let ret = yield Storage.get({ key: `${this.virtualHostName}-${key}` });
            if (ret.value) {
                resolve(JSON.parse(ret.value));
            }
            else {
                resolve(null);
            }
        }));
    }
    removeLocalData(key) {
        return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let ret = yield Storage.remove({ key: `${this.virtualHostName}-${key}` });
        }));
    }
    refreshToken(token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        let input = {
            "refresh": token
        };
        let url = this.refreshtokenUrl;
        console.log("=== On demand refresh token with ", input);
        return this.http.post(url, input, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(response => {
            console.log("=== Refresh Response", response);
            this.setLocalData("access", { "access": response["access"] });
            this.setLocalData("refresh", { "refresh": response["refresh"] });
        }));
    }
    login(user) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        let url = this.getLoginUrl;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            this.http.post(url, user, options).subscribe((res) => {
                observer.next(res);
                observer.complete();
            }, error => {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
            });
        });
    }
    //This is where the user will be registered
    createUser(user) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        let url = this.getAuthUserUrl;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            // At this point make a request to your backend  
            console.log("on appelle BACKEND encoded url " + url);
            this.http.post(url, user, options)
                .subscribe(res => {
                observer.next(res);
                observer.complete();
            }, error => {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
            });
        });
    }
    getUsers() {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        let url = this.getUserUrl;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            // At this point make a request to your backend  
            console.log("on appelle BACKEND encoded url " + url);
            this.http.get(url, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1))
                .subscribe(res => {
                observer.next(res);
                observer.complete();
            }, error => {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
            });
        });
    }
    sendResetPasswordLink(email) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-type': "application/x-www-form-urlencoded",
            })
        };
        let postParams = { 'email': email, };
        let url = this.urlPwdOublie;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            // At this point make a request to your backend to make a real check!
            this.http.post(url, postParams, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1))
                .subscribe(res => {
                observer.next(res);
                observer.complete();
            }, error => {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
            });
        });
    }
    getProtocols() {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        let url = this.getProtocolUrl;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            // At this point make a request to your backend  
            console.log("on appelle BACKEND encoded url " + url);
            this.http.get(url, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1))
                .subscribe(res => {
                observer.next(res);
                observer.complete();
            }, error => {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
            });
        });
    }
    getLabGroups() {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        let url = this.getLabGroupUrl;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            // At this point make a request to your backend  
            console.log("on appelle BACKEND encoded url " + url);
            this.http.get(url, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1))
                .subscribe(res => {
                observer.next(res);
                observer.complete();
            }, error => {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
            });
        });
    }
    createLabGroups(labgroup) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        let url = this.getLabGroupUrl;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            // At this point make a request to your backend  
            console.log("on appelle BACKEND encoded url " + url);
            this.http.post(url, labgroup, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1))
                .subscribe(res => {
                observer.next(res);
                observer.complete();
            }, error => {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
            });
        });
    }
    createLabGroupMembership(labgroupmembership) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        let url = this.getLabGroupMembershipUrl;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            // At this point make a request to your backend  
            console.log("on appelle BACKEND encoded url " + url);
            this.http.post(url, labgroupmembership, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1))
                .subscribe(res => {
                observer.next(res);
                observer.complete();
            }, error => {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
            });
        });
    }
    getLabGroupMembership() {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        let url = this.getLabGroupMembershipUrl;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            // At this point make a request to your backend  
            console.log("on appelle BACKEND encoded url " + url);
            this.http.get(url, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1))
                .subscribe(res => {
                observer.next(res);
                observer.complete();
            }, error => {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
            });
        });
    }
    findProtocol(path) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        let url = this.getProtocolUrl + path;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            // At this point make a request to your backend  
            console.log("on appelle BACKEND encoded url " + url);
            this.http.get(url, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1))
                .subscribe(res => {
                observer.next(res);
                observer.complete();
            }, error => {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
            });
        });
    }
    createProtocol(protocol) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        let url = this.getProtocolUrl;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            // At this point make a request to your backend  
            console.log("on appelle BACKEND encoded url " + url);
            this.http.post(url, protocol, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1))
                .subscribe(res => {
                observer.next(res);
                observer.complete();
            }, error => {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
            });
        });
    }
    getExperiments() {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        let url = this.getExperimentUrl;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            // At this point make a request to your backend  
            console.log("on appelle BACKEND encoded url " + url);
            this.http.get(url, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1))
                .subscribe(res => {
                observer.next(res);
                observer.complete();
            }, error => {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
            });
        });
    }
    createExperiment(experiment) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        let url = this.getExperimentUrl;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            // At this point make a request to your backend  
            console.log("on appelle BACKEND encoded url " + url);
            this.http.post(url, experiment, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1))
                .subscribe(res => {
                observer.next(res);
                observer.complete();
            }, error => {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
            });
        });
    }
    showLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loader = yield this.loadingController.create({
                message: 'Please wait',
                duration: 4000
            });
            return yield this.loader.present();
        });
    }
    stopLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("On stop loading");
            if (this.loader) {
                this.loader.dismiss();
            }
            else {
                console.log("Pas de loader");
            }
        });
    }
    showNoNetwork() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: 'Sorry',
                message: 'No network detected. Please check your internet connexion',
                buttons: ['OK']
            });
            return yield alert.present();
        });
    }
    showError(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: 'Error',
                message: text,
                buttons: ['OK']
            });
            return yield alert.present();
        });
    }
};
ApiDjangoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
ApiDjangoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiDjangoService);



/***/ }),

/***/ "ej43":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: myID, myEmail, myFirstName, myLastName, myUserName, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myID", function() { return myID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myEmail", function() { return myEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myFirstName", function() { return myFirstName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myLastName", function() { return myLastName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myUserName", function() { return myUserName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_api_django_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api-django.service */ "ZqIr");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "gcOT");





const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
var myID;
var myEmail;
var myFirstName;
var myLastName;
var myUserName;
const TOKEN_KEY = 'access';
const REFRESH_TOKEN_KEY = 'refresh';
let AuthenticationService = class AuthenticationService {
    constructor(apiService) {
        this.apiService = apiService;
        // Init with null to filter out the first value in a guard!
        this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.token = '';
        this.refresh = '';
        this.loadToken();
    }
    loadToken() {
        this.apiService.getLocalData(TOKEN_KEY).then((value) => {
            if (value) {
                console.log('set token: ', value);
                this.token = value["access"];
                this.apiService.getLocalData(REFRESH_TOKEN_KEY).then((value) => {
                    this.refresh = value["refresh"];
                    this.isAuthenticated.next(true);
                });
            }
            else {
                this.isAuthenticated.next(false);
            }
        });
    }
    login(user) {
        return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.apiService.login(user).subscribe((result) => {
                if (result) {
                    let accessToken = result["access"];
                    let refreshToken = result["refresh"];
                    this.apiService.setLocalData("access", { "access": accessToken });
                    this.apiService.setLocalData("refresh", { "refresh": refreshToken });
                    this.token = accessToken;
                    this.refresh = refreshToken;
                    this.isAuthenticated.next(true);
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            });
            this.apiService.getProtocols().subscribe((data) => {
                //console.log(data);
            });
            let queryPath = "?email=" + user.email;
            this.apiService.findUser(queryPath).subscribe((listUser) => {
                //console.log(JSON.stringify(listUser))
                if (listUser) {
                    myID = listUser["results"][0]["id"];
                    myUserName = listUser["results"][0]["username"];
                    myEmail = listUser["results"][0]["email"];
                    myFirstName = listUser["results"][0]["firstName"];
                    myLastName = listUser["results"][0]["lastName"];
                    this.apiService.setLocalData("id", { "id": myID });
                    //console.log("saved ID")
                    //console.log(myID)
                }
            });
        }));
    }
    logout() {
        this.isAuthenticated.next(false);
        return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.apiService.removeLocalData(TOKEN_KEY).then(() => {
                this.apiService.removeLocalData(REFRESH_TOKEN_KEY).then(() => {
                    resolve();
                });
            });
        }));
    }
    refreshToken() {
        return this.apiService.refreshToken(this.refresh);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _services_api_django_service__WEBPACK_IMPORTED_MODULE_3__["ApiDjangoService"] }
];
AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "ipSH":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addgroupmember/addgroupmember.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-button (click)=\"close()\">\n\t\t\t<ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n<ion-content padding>\n\t<h1>Add Members!</h1>\n\t\n\t<ion-list #mylist>\n\n      <ion-list-header>\n        <ion-label>List of Current Users</ion-label>\n      </ion-list-header>\n\n      <ion-item-sliding *ngFor=\"let item of items\" (click)=\"onSelect(item)\">\n        <ion-item>\n          <ion-label text-wrap>\n            <h3>Username: {{ item.username }}</h3>\n            <h3>First name: {{ item.firstName }}</h3>\n\t\t\t      <h3>Last name: {{ item.lastName }}</h3>\n\n          </ion-label>\n        </ion-item>\n\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"secondary\">Delete</ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n\n    </ion-list>\n\t\n\t<ion-button (click)=\"addMember()\">Add Member</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "n90K":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "e8h1");



const ITEMS_KEY = 'my-items';
let StorageService = class StorageService {
    constructor(storage) {
        this.storage = storage;
    }
    addItem(item) {
        return this.storage.get(ITEMS_KEY).then((items) => {
            if (items) {
                items.push(item);
                return this.storage.set(ITEMS_KEY, [item]);
            }
            else {
                return this.storage.set(ITEMS_KEY, [item]);
            }
        });
    }
    getItems() {
        return this.storage.get(ITEMS_KEY);
    }
    updateItem(item) {
        return this.storage.get(ITEMS_KEY).then((items) => {
            if (!items || items.length === 0) {
                return null;
            }
            let newItems = [];
            for (let i of items) {
                if (i.id === item.id) {
                    newItems.push(item);
                }
                else {
                    newItems.push(i);
                }
            }
            return this.storage.set(ITEMS_KEY, newItems);
        });
    }
    deleteItem(id) {
        return this.storage.get(ITEMS_KEY).then((items) => {
            if (!items || items.length === 0) {
                return null;
            }
            let toKeep = [];
            for (let i of items) {
                if (i.id === id) {
                    toKeep.push(i);
                }
            }
            return this.storage.set(ITEMS_KEY, toKeep);
        });
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ "tqRT":
/*!******************************************************!*\
  !*** ./src/app/group-popup/group-popup.component.ts ***!
  \******************************************************/
/*! exports provided: GroupPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupPopupComponent", function() { return GroupPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_group_popup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./group-popup.component.html */ "HvKD");
/* harmony import */ var _group_popup_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group-popup.component.scss */ "E0ys");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_addgroupmember_addgroupmember_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/addgroupmember/addgroupmember.component */ "v4go");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var src_app_lab_group_lab_group_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/lab-group/lab-group.page */ "Of47");
/* harmony import */ var _services_api_django_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api-django.service */ "ZqIr");









let GroupPopupComponent = class GroupPopupComponent {
    constructor(modalController, ApiService) {
        this.modalController = modalController;
        this.ApiService = ApiService;
    }
    close() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    checkAdmin() {
        this.ApiService.getLabGroupMembership().subscribe(items => {
            for (let index in items["results"]) {
                if (items["results"][index]["user"] == src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["myID"]) {
                    if (items["results"][index]["group"] == src_app_lab_group_lab_group_page__WEBPACK_IMPORTED_MODULE_7__["currentGroup"]) {
                        if (items["results"][index]["role"] == 1) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
            }
        });
        return false;
    }
    addMember() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (true) {
                const modal = yield this.modalController.create({
                    component: src_app_addgroupmember_addgroupmember_component__WEBPACK_IMPORTED_MODULE_5__["AddgroupmemberComponent"],
                    componentProps: {
                        groupID: src_app_lab_group_lab_group_page__WEBPACK_IMPORTED_MODULE_7__["currentGroup"]
                    }
                });
                yield modal.present();
            }
            else {}
        });
    }
    ngOnInit() { }
};
GroupPopupComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_api_django_service__WEBPACK_IMPORTED_MODULE_8__["ApiDjangoService"] }
];
GroupPopupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-group-popup',
        template: _raw_loader_group_popup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_group_popup_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GroupPopupComponent);



/***/ }),

/***/ "v4go":
/*!************************************************************!*\
  !*** ./src/app/addgroupmember/addgroupmember.component.ts ***!
  \************************************************************/
/*! exports provided: AddgroupmemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddgroupmemberComponent", function() { return AddgroupmemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_addgroupmember_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./addgroupmember.component.html */ "ipSH");
/* harmony import */ var _addgroupmember_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addgroupmember.component.scss */ "ETMM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_api_django_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api-django.service */ "ZqIr");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var src_app_lab_group_lab_group_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/lab-group/lab-group.page */ "Of47");









let AddgroupmemberComponent = class AddgroupmemberComponent {
    constructor(modalController, plt, ApiService) {
        this.modalController = modalController;
        this.plt = plt;
        this.ApiService = ApiService;
        this.items = [];
        this.plt.ready().then(() => {
            this.loadItems();
        });
    }
    close() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    addMember() {
        if (this.ApiService.networkConnected) {
            this.ApiService.showLoading();
            console.log(src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["myID"]);
            console.log(src_app_lab_group_lab_group_page__WEBPACK_IMPORTED_MODULE_7__["currentGroup"]);
            let labgroupMembershipToCreate = {
                "user": this.selectedUser,
                "group": this.groupID,
            };
            this.ApiService.createLabGroupMembership(labgroupMembershipToCreate).subscribe((res) => {
                if (res) {
                    console.log(res);
                }
                else {
                    this.ApiService.stopLoading();
                    this.ApiService.showError("An error occured while creating a membership");
                }
            });
        }
    }
    loadItems() {
        this.ApiService.getUsers().subscribe(items => {
            this.items = items["results"];
            console.log(items["results"]);
        });
    }
    onSelect(item) {
        this.selectedUser = item.id;
        //this.redirect();
    }
    ngOnInit() { }
};
AddgroupmemberComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _services_api_django_service__WEBPACK_IMPORTED_MODULE_5__["ApiDjangoService"] }
];
AddgroupmemberComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-addgroupmember',
        template: _raw_loader_addgroupmember_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addgroupmember_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddgroupmemberComponent);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule)
    },
    {
        path: 'registration',
        loadChildren: () => __webpack_require__.e(/*! import() | registration-registration-module */ "registration-registration-module").then(__webpack_require__.bind(null, /*! ./registration/registration.module */ "DNuw")).then(m => m.RegistrationPageModule)
    },
    {
        path: 'forgot-password',
        loadChildren: () => __webpack_require__.e(/*! import() | forgot-password-forgot-password-module */ "forgot-password-forgot-password-module").then(__webpack_require__.bind(null, /*! ./forgot-password/forgot-password.module */ "JgOp")).then(m => m.ForgotPasswordPageModule)
    },
    {
        path: 'main',
        loadChildren: () => __webpack_require__.e(/*! import() | main-main-module */ "main-main-module").then(__webpack_require__.bind(null, /*! ./main/main.module */ "XpXM")).then(m => m.MainPageModule)
    },
    {
        path: 'protocols',
        loadChildren: () => Promise.all(/*! import() | protocols-protocols-module */[__webpack_require__.e("common"), __webpack_require__.e("protocols-protocols-module")]).then(__webpack_require__.bind(null, /*! ./protocols/protocols.module */ "ae/h")).then(m => m.ProtocolsPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "7wo0")).then(m => m.SettingsPageModule)
    },
    {
        path: 'experiments',
        loadChildren: () => Promise.all(/*! import() | experiments-experiments-module */[__webpack_require__.e("common"), __webpack_require__.e("experiments-experiments-module")]).then(__webpack_require__.bind(null, /*! ./experiments/experiments.module */ "ReLR")).then(m => m.ExperimentsPageModule)
    },
    {
        path: 'lab-group',
        loadChildren: () => __webpack_require__.e(/*! import() | lab-group-lab-group-module */ "lab-group-lab-group-module").then(__webpack_require__.bind(null, /*! ./lab-group/lab-group.module */ "NKow")).then(m => m.LabGroupPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "x8TV":
/*!***********************************************!*\
  !*** ./src/app/lab-group/lab-group.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYWItZ3JvdXAucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
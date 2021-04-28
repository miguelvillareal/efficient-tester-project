(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/miguelvillareal/Desktop/CapstoneProject/ionic-form-ui/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "E0ys":
    /*!********************************************************!*\
      !*** ./src/app/group-popup/group-popup.component.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function E0ys(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncm91cC1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "ETMM":
    /*!**************************************************************!*\
      !*** ./src/app/addgroupmember/addgroupmember.component.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function ETMM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRncm91cG1lbWJlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "HvKD":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group-popup/group-popup.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function HvKD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-button (click)=\"close()\">\n\t\t\t<ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n<ion-content padding>\n\t<h1>{{ groupName }}</h1>\n\t<p>{{ groupName }} is now the current group!</p>\n\t<ion-button (click)=\"addMember()\">Add Members</ion-button> \n</ion-content>";
      /***/
    },

    /***/
    "Of47":
    /*!*********************************************!*\
      !*** ./src/app/lab-group/lab-group.page.ts ***!
      \*********************************************/

    /*! exports provided: currentGroup, groupName, LabGroupPage */

    /***/
    function Of47(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "currentGroup", function () {
        return currentGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "groupName", function () {
        return groupName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LabGroupPage", function () {
        return LabGroupPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lab_group_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lab-group.page.html */
      "Orme");
      /* harmony import */


      var _lab_group_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lab-group.page.scss */
      "x8TV");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/storage.service */
      "n90K");
      /* harmony import */


      var _services_api_django_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/api-django.service */
      "ZqIr");
      /* harmony import */


      var src_app_group_popup_group_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/group-popup/group-popup.component */
      "tqRT");
      /* harmony import */


      var src_app_addgroupmember_addgroupmember_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/addgroupmember/addgroupmember.component */
      "v4go");

      var currentGroup;
      var groupName;

      var LabGroupPage = /*#__PURE__*/function () {
        function LabGroupPage(storageService, plt, ApiService, toastController, authService, router, modalCtrl) {
          var _this = this;

          _classCallCheck(this, LabGroupPage);

          this.storageService = storageService;
          this.plt = plt;
          this.ApiService = ApiService;
          this.toastController = toastController;
          this.authService = authService;
          this.router = router;
          this.modalCtrl = modalCtrl;
          this.labGroupCredentials = {
            myName: ''
          };
          this.group_id = '';
          this.items = [];
          this.displayList = [];
          this.newItem = {};
          this.plt.ready().then(function () {
            _this.loadItems();
          });
        }

        _createClass(LabGroupPage, [{
          key: "addLabGroup",
          value: function addLabGroup() {
            var _this2 = this;

            if (this.ApiService.networkConnected) {
              this.ApiService.showLoading();
              console.log(src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["myID"]);
              var labgroupToCreate = {
                "name": this.labGroupCredentials.myName,
                "group_id": src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["myID"]
              };
              this.ApiService.createLabGroups(labgroupToCreate).subscribe(function (res) {
                if (res) {
                  console.log(res);
                  currentGroup = res.id;
                  var groupMembershipToCreate = {
                    "user": src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["myID"],
                    "group": currentGroup,
                    "role": 1
                  };

                  _this2.ApiService.createLabGroupMembership(groupMembershipToCreate).subscribe(function (res) {
                    if (res) {
                      console.log(res);
                    } else {
                      _this2.ApiService.stopLoading();

                      _this2.ApiService.showError("An error occured while creating a Protocol");
                    }
                  });

                  _this2.loadItems();
                } else {
                  _this2.ApiService.stopLoading();

                  _this2.ApiService.showError("An error occured while creating a Protocol");
                }
              }); //}
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
        }, {
          key: "addMember",
          value: function addMember() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: src_app_addgroupmember_addgroupmember_component__WEBPACK_IMPORTED_MODULE_10__["AddgroupmemberComponent"],
                        componentProps: {
                          groupID: currentGroup
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "groupPopup",
          value: function groupPopup(groupName) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalCtrl.create({
                        component: src_app_group_popup_group_popup_component__WEBPACK_IMPORTED_MODULE_9__["GroupPopupComponent"],
                        componentProps: {
                          groupName: groupName
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "redirect",
          value: function redirect() {
            this.router.navigateByUrl("/experiments");
          }
        }, {
          key: "onSelect",
          value: function onSelect(item) {
            this.selectedItem = item;
            currentGroup = item.id;
            groupName = item['name'];
            this.groupPopup(groupName); //this.redirect();
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

        }, {
          key: "loadItems",
          value: function loadItems() {
            var _this3 = this;

            this.ApiService.getLabGroups().subscribe(function (items) {
              for (var index in items["results"]) {
                for (var i in items["results"][index]["member_list"]) {
                  var someUser = items["results"][index]["member_list"][i];
                  console.log(someUser);

                  if (someUser == src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["myID"]) {
                    _this3.displayList.push(items["results"][index]);
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

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LabGroupPage;
      }();

      LabGroupPage.ctorParameters = function () {
        return [{
          type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: _services_api_django_service__WEBPACK_IMPORTED_MODULE_8__["ApiDjangoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }];
      };

      LabGroupPage.propDecorators = {
        mylist: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['mylist']
        }]
      };
      LabGroupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-lab-group',
        template: _raw_loader_lab_group_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lab_group_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LabGroupPage);
      /***/
    },

    /***/
    "Orme":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lab-group/lab-group.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function Orme(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Lab Group</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <ion-content>\n    <form (ngSubmit)=\"addLabGroup()\" #registerForm=\"ngForm\">\n      <ion-item>\n        <ion-label position=\"fixed\">Name</ion-label>\n        <ion-input type=\"text\" name=\"numSamples\" [(ngModel)]=\"labGroupCredentials.myName\"></ion-input>\n      </ion-item>\n\n      <ion-button expand=\"full\" type=\"submit\" >Add Lab Group!</ion-button>\n    </form>\n    \n    <ion-list #mylist>\n\n      <ion-list-header>\n        <ion-label>Lab Groups</ion-label>\n      </ion-list-header>\n\n      <ion-item-sliding *ngFor=\"let item of displayList\" (click)=\"onSelect(item)\">\n        <ion-item>\n          <ion-label text-wrap>\n            <h3>Name: {{ item.name }}</h3>\n            <h3>Group ID: {{ item.group_id }}</h3>\n\n            <p>{{ item.modified | date:'short'}}</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"secondary\">Delete</ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n\n    </ion-list>\n\n  </ion-content>\n";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_services_api_django_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../app/services/api-django.service */
      "ZqIr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, authService, splashScreen, statusBar, apiService, router) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.authService = authService;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.apiService = apiService;
          this.router = router;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "logout",
          value: function logout() {
            this.authService.logout();
            this.router.navigateByUrl('/home', {
              replaceUrl: true
            });
          }
        }, {
          key: "accessAuthorizedWithUrl",
          value: function accessAuthorizedWithUrl() {}
        }, {
          key: "getToken",
          value: function getToken() {}
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this4 = this;

            this.platform.ready().then(function () {
              _this4.statusBar.styleDefault();

              _this4.splashScreen.hide();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"]
        }, {
          type: _app_services_api_django_service__WEBPACK_IMPORTED_MODULE_8__["ApiDjangoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-menu side=\"start\" menuId=\"main-menu\" content-id=\"main\">\n    <ion-header>\n      <ion-toolbar translucent>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/main\">\n            <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n            <ion-label>Home Page</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/protocols\">\n            <ion-icon name=\"create-outline\" slot=\"start\"></ion-icon>\n            <ion-label>Protocols</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/experiments\">\n            <ion-icon name=\"eyedrop-outline\" slot=\"start\"></ion-icon>\n            <ion-label>Experiments</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/lab-group\">\n            <ion-icon name=\"layers-outline\" slot=\"start\"></ion-icon>\n            <ion-label>LabGroup</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/settings\">\n            <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\n            <ion-label>Profile</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle>\n          <ion-item (click)=\"logout()\">\n              <ion-icon name=\"log-out-outline\" slot=\"start\"></ion-icon>\n              <ion-label>Logout</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_addgroupmember_addgroupmember_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/addgroupmember/addgroupmember.component */
      "v4go");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _services_api_django_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/api-django.service */
      "ZqIr");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "m/P+");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], src_app_addgroupmember_addgroupmember_component__WEBPACK_IMPORTED_MODULE_4__["AddgroupmemberComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["IonicStorageModule"].forRoot()],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__["InAppBrowser"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }, _services_api_django_service__WEBPACK_IMPORTED_MODULE_12__["ApiDjangoService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZqIr":
    /*!************************************************!*\
      !*** ./src/app/services/api-django.service.ts ***!
      \************************************************/

    /*! exports provided: ApiDjangoService */

    /***/
    function ZqIr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiDjangoService", function () {
        return ApiDjangoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Storage;

      var ApiDjangoService = /*#__PURE__*/function () {
        function ApiDjangoService(http, loadingController, alertCtrl) {
          _classCallCheck(this, ApiDjangoService);

          this.http = http;
          this.loadingController = loadingController;
          this.alertCtrl = alertCtrl;
          this.tokenSSO = "";
          this.networkConnected = true;
          this.virtualHostName = 'http://54.90.175.110:8000';
          this.appName = '';
          this.apiPrefix = "/api";
          this.isOnline = false; //urlPwdOublie: string = '';

          this.checkUrl = '';
          this.cordovaiOS = false;
          this.isShowingLoader = false;
          this.getUserUrl = this.virtualHostName + this.apiPrefix + "/users/";
          this.placeUserInfoUrl = this.virtualHostName + this.apiPrefix + "/user/";
          this.getProtocolUrl = this.virtualHostName + this.apiPrefix + "/protocols/";
          this.getLabGroupUrl = this.virtualHostName + this.apiPrefix + "/labgroups/";
          this.getLabGroupMembershipUrl = this.virtualHostName + this.apiPrefix + "/groupmembership/";
          this.getExperimentUrl = this.virtualHostName + this.apiPrefix + "/experiments/";
          this.getAuthUserUrl = this.virtualHostName + "/auth/users/"; //getMyUrl = this.virtualHostName + "/auth/users/me/";

          this.getLoginUrl = this.virtualHostName + "/auth/jwt/create/";
          this.refreshtokenUrl = this.virtualHostName + "/auth/jwt/refresh/";
          this.urlPwdOublie = this.virtualHostName + "/account/reset_password/";
          this.getCustomUserUrl = '';
        } /////////////////////////////
        //DONT KNOW WHERE I USE THIS METHOD BELOW
        /////////////////////////////


        _createClass(ApiDjangoService, [{
          key: "getUserNow",
          value: function getUserNow() {
            var _this5 = this;

            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            };
            var url = this.getAuthUserUrl;
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
              _this5.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1)).subscribe(function (res) {
                observer.next(res);
                observer.complete();
              }, function (error) {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
              });
            });
          } /////////////////////////////////////////////////

        }, {
          key: "findUser",
          value: function findUser(path) {
            var _this6 = this;

            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            };
            var url = this.getUserUrl + path;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
              // At this point make a request to your backend  
              console.log("on appelle BACKEND encoded url " + url);

              _this6.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1)).subscribe(function (res) {
                observer.next(res);
                observer.complete();
              }, function (error) {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
              });
            });
          }
        }, {
          key: "infoUser",
          value: function infoUser(path, user) {
            var _this7 = this;

            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            };
            var url = this.placeUserInfoUrl + path + "/";
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
              // At this point make a request to your backend  
              console.log("on appelle BACKEND encoded url " + url);

              _this7.http.put(url, user, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1)).subscribe(function (res) {
                observer.next(res);
                observer.complete();
              }, function (error) {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
              });
            });
          }
        }, {
          key: "getinfoUser",
          value: function getinfoUser(path) {
            var _this8 = this;

            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            };
            var url = this.placeUserInfoUrl + path + "/";
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
              // At this point make a request to your backend  
              console.log("on appelle BACKEND encoded url " + url);

              _this8.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1)).subscribe(function (res) {
                observer.next(res);
                observer.complete();
              }, function (error) {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
              });
            });
          }
        }, {
          key: "setLocalData",
          value: function setLocalData(key, jsonData) {
            var _this9 = this;

            return new Promise(function (resolve) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return Storage.set({
                          key: "".concat(this.virtualHostName, "-").concat(key),
                          value: JSON.stringify(jsonData)
                        });

                      case 2:
                        resolve(true);

                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            });
          }
        }, {
          key: "getLocalData",
          value: function getLocalData(key) {
            var _this10 = this;

            return new Promise(function (resolve) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var ret;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return Storage.get({
                          key: "".concat(this.virtualHostName, "-").concat(key)
                        });

                      case 2:
                        ret = _context4.sent;

                        if (ret.value) {
                          resolve(JSON.parse(ret.value));
                        } else {
                          resolve(null);
                        }

                      case 4:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });
          }
        }, {
          key: "removeLocalData",
          value: function removeLocalData(key) {
            var _this11 = this;

            return new Promise(function (resolve) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var ret;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return Storage.remove({
                          key: "".concat(this.virtualHostName, "-").concat(key)
                        });

                      case 2:
                        ret = _context5.sent;

                      case 3:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));
            });
          }
        }, {
          key: "refreshToken",
          value: function refreshToken(token) {
            var _this12 = this;

            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            };
            var input = {
              "refresh": token
            };
            var url = this.refreshtokenUrl;
            console.log("=== On demand refresh token with ", input);
            return this.http.post(url, input, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
              console.log("=== Refresh Response", response);

              _this12.setLocalData("access", {
                "access": response["access"]
              });

              _this12.setLocalData("refresh", {
                "refresh": response["refresh"]
              });
            }));
          }
        }, {
          key: "login",
          value: function login(user) {
            var _this13 = this;

            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            };
            var url = this.getLoginUrl;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
              _this13.http.post(url, user, options).subscribe(function (res) {
                observer.next(res);
                observer.complete();
              }, function (error) {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
              });
            });
          } //This is where the user will be registered

        }, {
          key: "createUser",
          value: function createUser(user) {
            var _this14 = this;

            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            };
            var url = this.getAuthUserUrl;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
              // At this point make a request to your backend  
              console.log("on appelle BACKEND encoded url " + url);

              _this14.http.post(url, user, options).subscribe(function (res) {
                observer.next(res);
                observer.complete();
              }, function (error) {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
              });
            });
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var _this15 = this;

            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            };
            var url = this.getUserUrl;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
              // At this point make a request to your backend  
              console.log("on appelle BACKEND encoded url " + url);

              _this15.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1)).subscribe(function (res) {
                observer.next(res);
                observer.complete();
              }, function (error) {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
              });
            });
          }
        }, {
          key: "sendResetPasswordLink",
          value: function sendResetPasswordLink(email) {
            var _this16 = this;

            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-type': "application/x-www-form-urlencoded"
              })
            };
            var postParams = {
              'email': email
            };
            var url = this.urlPwdOublie;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
              // At this point make a request to your backend to make a real check!
              _this16.http.post(url, postParams, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1)).subscribe(function (res) {
                observer.next(res);
                observer.complete();
              }, function (error) {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
              });
            });
          }
        }, {
          key: "getProtocols",
          value: function getProtocols() {
            var _this17 = this;

            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            };
            var url = this.getProtocolUrl;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
              // At this point make a request to your backend  
              console.log("on appelle BACKEND encoded url " + url);

              _this17.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1)).subscribe(function (res) {
                observer.next(res);
                observer.complete();
              }, function (error) {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
              });
            });
          }
        }, {
          key: "getLabGroups",
          value: function getLabGroups() {
            var _this18 = this;

            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            };
            var url = this.getLabGroupUrl;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
              // At this point make a request to your backend  
              console.log("on appelle BACKEND encoded url " + url);

              _this18.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1)).subscribe(function (res) {
                observer.next(res);
                observer.complete();
              }, function (error) {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
              });
            });
          }
        }, {
          key: "createLabGroups",
          value: function createLabGroups(labgroup) {
            var _this19 = this;

            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            };
            var url = this.getLabGroupUrl;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
              // At this point make a request to your backend  
              console.log("on appelle BACKEND encoded url " + url);

              _this19.http.post(url, labgroup, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1)).subscribe(function (res) {
                observer.next(res);
                observer.complete();
              }, function (error) {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
              });
            });
          }
        }, {
          key: "createLabGroupMembership",
          value: function createLabGroupMembership(labgroupmembership) {
            var _this20 = this;

            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            };
            var url = this.getLabGroupMembershipUrl;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
              // At this point make a request to your backend  
              console.log("on appelle BACKEND encoded url " + url);

              _this20.http.post(url, labgroupmembership, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1)).subscribe(function (res) {
                observer.next(res);
                observer.complete();
              }, function (error) {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
              });
            });
          }
        }, {
          key: "getLabGroupMembership",
          value: function getLabGroupMembership() {
            var _this21 = this;

            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            };
            var url = this.getLabGroupMembershipUrl;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
              // At this point make a request to your backend  
              console.log("on appelle BACKEND encoded url " + url);

              _this21.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1)).subscribe(function (res) {
                observer.next(res);
                observer.complete();
              }, function (error) {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
              });
            });
          }
        }, {
          key: "findProtocol",
          value: function findProtocol(path) {
            var _this22 = this;

            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            };
            var url = this.getProtocolUrl + path;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
              // At this point make a request to your backend  
              console.log("on appelle BACKEND encoded url " + url);

              _this22.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1)).subscribe(function (res) {
                observer.next(res);
                observer.complete();
              }, function (error) {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
              });
            });
          }
        }, {
          key: "createProtocol",
          value: function createProtocol(protocol) {
            var _this23 = this;

            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            };
            var url = this.getProtocolUrl;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
              // At this point make a request to your backend  
              console.log("on appelle BACKEND encoded url " + url);

              _this23.http.post(url, protocol, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1)).subscribe(function (res) {
                observer.next(res);
                observer.complete();
              }, function (error) {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
              });
            });
          }
        }, {
          key: "getExperiments",
          value: function getExperiments() {
            var _this24 = this;

            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            };
            var url = this.getExperimentUrl;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
              // At this point make a request to your backend  
              console.log("on appelle BACKEND encoded url " + url);

              _this24.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1)).subscribe(function (res) {
                observer.next(res);
                observer.complete();
              }, function (error) {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
              });
            });
          }
        }, {
          key: "createExperiment",
          value: function createExperiment(experiment) {
            var _this25 = this;

            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            };
            var url = this.getExperimentUrl;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
              // At this point make a request to your backend  
              console.log("on appelle BACKEND encoded url " + url);

              _this25.http.post(url, experiment, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1)).subscribe(function (res) {
                observer.next(res);
                observer.complete();
              }, function (error) {
                observer.next();
                observer.complete();
                console.log(error); // Error getting the data
              });
            });
          }
        }, {
          key: "showLoading",
          value: function showLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait',
                        duration: 4000
                      });

                    case 2:
                      this.loader = _context6.sent;
                      _context6.next = 5;
                      return this.loader.present();

                    case 5:
                      return _context6.abrupt("return", _context6.sent);

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      console.log("On stop loading");

                      if (this.loader) {
                        this.loader.dismiss();
                      } else {
                        console.log("Pas de loader");
                      }

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "showNoNetwork",
          value: function showNoNetwork() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var alert;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.alertCtrl.create({
                        header: 'Sorry',
                        message: 'No network detected. Please check your internet connexion',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context8.sent;
                      _context8.next = 5;
                      return alert.present();

                    case 5:
                      return _context8.abrupt("return", _context8.sent);

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "showError",
          value: function showError(text) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var alert;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.alertCtrl.create({
                        header: 'Error',
                        message: text,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context9.sent;
                      _context9.next = 5;
                      return alert.present();

                    case 5:
                      return _context9.abrupt("return", _context9.sent);

                    case 6:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }]);

        return ApiDjangoService;
      }();

      ApiDjangoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }];
      };

      ApiDjangoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ApiDjangoService);
      /***/
    },

    /***/
    "ej43":
    /*!****************************************************!*\
      !*** ./src/app/services/authentication.service.ts ***!
      \****************************************************/

    /*! exports provided: myID, myEmail, myFirstName, myLastName, myUserName, AuthenticationService */

    /***/
    function ej43(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "myID", function () {
        return myID;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "myEmail", function () {
        return myEmail;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "myFirstName", function () {
        return myFirstName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "myLastName", function () {
        return myLastName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "myUserName", function () {
        return myUserName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _services_api_django_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/api-django.service */
      "ZqIr");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Storage;
      var myID;
      var myEmail;
      var myFirstName;
      var myLastName;
      var myUserName;
      var TOKEN_KEY = 'access';
      var REFRESH_TOKEN_KEY = 'refresh';

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(apiService) {
          _classCallCheck(this, AuthenticationService);

          this.apiService = apiService; // Init with null to filter out the first value in a guard!

          this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.token = '';
          this.refresh = '';
          this.loadToken();
        }

        _createClass(AuthenticationService, [{
          key: "loadToken",
          value: function loadToken() {
            var _this26 = this;

            this.apiService.getLocalData(TOKEN_KEY).then(function (value) {
              if (value) {
                console.log('set token: ', value);
                _this26.token = value["access"];

                _this26.apiService.getLocalData(REFRESH_TOKEN_KEY).then(function (value) {
                  _this26.refresh = value["refresh"];

                  _this26.isAuthenticated.next(true);
                });
              } else {
                _this26.isAuthenticated.next(false);
              }
            });
          }
        }, {
          key: "login",
          value: function login(user) {
            var _this27 = this;

            return new Promise(function (resolve) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this27, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                var _this28 = this;

                var queryPath;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        this.apiService.login(user).subscribe(function (result) {
                          if (result) {
                            var accessToken = result["access"];
                            var refreshToken = result["refresh"];

                            _this28.apiService.setLocalData("access", {
                              "access": accessToken
                            });

                            _this28.apiService.setLocalData("refresh", {
                              "refresh": refreshToken
                            });

                            _this28.token = accessToken;
                            _this28.refresh = refreshToken;

                            _this28.isAuthenticated.next(true);

                            resolve(true);
                          } else {
                            resolve(false);
                          }
                        });
                        this.apiService.getProtocols().subscribe(function (data) {//console.log(data);
                        });
                        queryPath = "?email=" + user.email;
                        this.apiService.findUser(queryPath).subscribe(function (listUser) {
                          //console.log(JSON.stringify(listUser))
                          if (listUser) {
                            myID = listUser["results"][0]["id"];
                            myUserName = listUser["results"][0]["username"];
                            myEmail = listUser["results"][0]["email"];
                            myFirstName = listUser["results"][0]["firstName"];
                            myLastName = listUser["results"][0]["lastName"];

                            _this28.apiService.setLocalData("id", {
                              "id": myID
                            }); //console.log("saved ID")
                            //console.log(myID)

                          }
                        });

                      case 4:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, this);
              }));
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this29 = this;

            this.isAuthenticated.next(false);
            return new Promise(function (resolve) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this29, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                var _this30 = this;

                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        this.apiService.removeLocalData(TOKEN_KEY).then(function () {
                          _this30.apiService.removeLocalData(REFRESH_TOKEN_KEY).then(function () {
                            resolve();
                          });
                        });

                      case 1:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, this);
              }));
            });
          }
        }, {
          key: "refreshToken",
          value: function refreshToken() {
            return this.apiService.refreshToken(this.refresh);
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ctorParameters = function () {
        return [{
          type: _services_api_django_service__WEBPACK_IMPORTED_MODULE_3__["ApiDjangoService"]
        }];
      };

      AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthenticationService);
      /***/
    },

    /***/
    "ipSH":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addgroupmember/addgroupmember.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ipSH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-button (click)=\"close()\">\n\t\t\t<ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n<ion-content padding>\n\t<h1>Add Members!</h1>\n\t\n\t<ion-list #mylist>\n\n      <ion-list-header>\n        <ion-label>List of Current Users</ion-label>\n      </ion-list-header>\n\n      <ion-item-sliding *ngFor=\"let item of items\" (click)=\"onSelect(item)\">\n        <ion-item>\n          <ion-label text-wrap>\n            <h3>Username: {{ item.username }}</h3>\n            <h3>First name: {{ item.firstName }}</h3>\n\t\t\t      <h3>Last name: {{ item.lastName }}</h3>\n\n          </ion-label>\n        </ion-item>\n\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"secondary\">Delete</ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n\n    </ion-list>\n\t\n\t<ion-button (click)=\"addMember()\">Add Member</ion-button>\n</ion-content>\n";
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "n90K":
    /*!*********************************************!*\
      !*** ./src/app/services/storage.service.ts ***!
      \*********************************************/

    /*! exports provided: StorageService */

    /***/
    function n90K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var ITEMS_KEY = 'my-items';

      var StorageService = /*#__PURE__*/function () {
        function StorageService(storage) {
          _classCallCheck(this, StorageService);

          this.storage = storage;
        }

        _createClass(StorageService, [{
          key: "addItem",
          value: function addItem(item) {
            var _this31 = this;

            return this.storage.get(ITEMS_KEY).then(function (items) {
              if (items) {
                items.push(item);
                return _this31.storage.set(ITEMS_KEY, [item]);
              } else {
                return _this31.storage.set(ITEMS_KEY, [item]);
              }
            });
          }
        }, {
          key: "getItems",
          value: function getItems() {
            return this.storage.get(ITEMS_KEY);
          }
        }, {
          key: "updateItem",
          value: function updateItem(item) {
            var _this32 = this;

            return this.storage.get(ITEMS_KEY).then(function (items) {
              if (!items || items.length === 0) {
                return null;
              }

              var newItems = [];

              var _iterator = _createForOfIteratorHelper(items),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var i = _step.value;

                  if (i.id === item.id) {
                    newItems.push(item);
                  } else {
                    newItems.push(i);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return _this32.storage.set(ITEMS_KEY, newItems);
            });
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(id) {
            var _this33 = this;

            return this.storage.get(ITEMS_KEY).then(function (items) {
              if (!items || items.length === 0) {
                return null;
              }

              var toKeep = [];

              var _iterator2 = _createForOfIteratorHelper(items),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var i = _step2.value;

                  if (i.id === id) {
                    toKeep.push(i);
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              return _this33.storage.set(ITEMS_KEY, toKeep);
            });
          }
        }]);

        return StorageService;
      }();

      StorageService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      };

      StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], StorageService);
      /***/
    },

    /***/
    "tqRT":
    /*!******************************************************!*\
      !*** ./src/app/group-popup/group-popup.component.ts ***!
      \******************************************************/

    /*! exports provided: GroupPopupComponent */

    /***/
    function tqRT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupPopupComponent", function () {
        return GroupPopupComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_group_popup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./group-popup.component.html */
      "HvKD");
      /* harmony import */


      var _group_popup_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./group-popup.component.scss */
      "E0ys");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_addgroupmember_addgroupmember_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/addgroupmember/addgroupmember.component */
      "v4go");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var src_app_lab_group_lab_group_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/lab-group/lab-group.page */
      "Of47");
      /* harmony import */


      var _services_api_django_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/api-django.service */
      "ZqIr");

      var GroupPopupComponent = /*#__PURE__*/function () {
        function GroupPopupComponent(modalController, ApiService) {
          _classCallCheck(this, GroupPopupComponent);

          this.modalController = modalController;
          this.ApiService = ApiService;
        }

        _createClass(GroupPopupComponent, [{
          key: "close",
          value: function close() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.modalController.dismiss();

                    case 2:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "checkAdmin",
          value: function checkAdmin() {
            this.ApiService.getLabGroupMembership().subscribe(function (items) {
              for (var index in items["results"]) {
                if (items["results"][index]["user"] == src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["myID"]) {
                  if (items["results"][index]["group"] == src_app_lab_group_lab_group_page__WEBPACK_IMPORTED_MODULE_7__["currentGroup"]) {
                    if (items["results"][index]["role"] == 1) {
                      return true;
                    } else {
                      return false;
                    }
                  }
                }
              }
            });
            return false;
          }
        }, {
          key: "addMember",
          value: function addMember() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var modal;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (!true) {
                        _context13.next = 8;
                        break;
                      }

                      _context13.next = 3;
                      return this.modalController.create({
                        component: src_app_addgroupmember_addgroupmember_component__WEBPACK_IMPORTED_MODULE_5__["AddgroupmemberComponent"],
                        componentProps: {
                          groupID: src_app_lab_group_lab_group_page__WEBPACK_IMPORTED_MODULE_7__["currentGroup"]
                        }
                      });

                    case 3:
                      modal = _context13.sent;
                      _context13.next = 6;
                      return modal.present();

                    case 6:
                      _context13.next = 8;
                      break;

                    case 8:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GroupPopupComponent;
      }();

      GroupPopupComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_api_django_service__WEBPACK_IMPORTED_MODULE_8__["ApiDjangoService"]
        }];
      };

      GroupPopupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-group-popup',
        template: _raw_loader_group_popup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_group_popup_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GroupPopupComponent);
      /***/
    },

    /***/
    "v4go":
    /*!************************************************************!*\
      !*** ./src/app/addgroupmember/addgroupmember.component.ts ***!
      \************************************************************/

    /*! exports provided: AddgroupmemberComponent */

    /***/
    function v4go(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddgroupmemberComponent", function () {
        return AddgroupmemberComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_addgroupmember_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./addgroupmember.component.html */
      "ipSH");
      /* harmony import */


      var _addgroupmember_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./addgroupmember.component.scss */
      "ETMM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_api_django_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/api-django.service */
      "ZqIr");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var src_app_lab_group_lab_group_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/lab-group/lab-group.page */
      "Of47");

      var AddgroupmemberComponent = /*#__PURE__*/function () {
        function AddgroupmemberComponent(modalController, plt, ApiService) {
          var _this34 = this;

          _classCallCheck(this, AddgroupmemberComponent);

          this.modalController = modalController;
          this.plt = plt;
          this.ApiService = ApiService;
          this.items = [];
          this.plt.ready().then(function () {
            _this34.loadItems();
          });
        }

        _createClass(AddgroupmemberComponent, [{
          key: "close",
          value: function close() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.modalController.dismiss();

                    case 2:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "addMember",
          value: function addMember() {
            var _this35 = this;

            if (this.ApiService.networkConnected) {
              this.ApiService.showLoading();
              console.log(src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["myID"]);
              console.log(src_app_lab_group_lab_group_page__WEBPACK_IMPORTED_MODULE_7__["currentGroup"]);
              var labgroupMembershipToCreate = {
                "user": this.selectedUser,
                "group": this.groupID
              };
              this.ApiService.createLabGroupMembership(labgroupMembershipToCreate).subscribe(function (res) {
                if (res) {
                  console.log(res);
                } else {
                  _this35.ApiService.stopLoading();

                  _this35.ApiService.showError("An error occured while creating a membership");
                }
              });
            }
          }
        }, {
          key: "loadItems",
          value: function loadItems() {
            var _this36 = this;

            this.ApiService.getUsers().subscribe(function (items) {
              _this36.items = items["results"];
              console.log(items["results"]);
            });
          }
        }, {
          key: "onSelect",
          value: function onSelect(item) {
            this.selectedUser = item.id; //this.redirect();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddgroupmemberComponent;
      }();

      AddgroupmemberComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _services_api_django_service__WEBPACK_IMPORTED_MODULE_5__["ApiDjangoService"]
        }];
      };

      AddgroupmemberComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-addgroupmember',
        template: _raw_loader_addgroupmember_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addgroupmember_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddgroupmemberComponent);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "ct+p")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | login-login-module */
          "login-login-module").then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'registration',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | registration-registration-module */
          "registration-registration-module").then(__webpack_require__.bind(null,
          /*! ./registration/registration.module */
          "DNuw")).then(function (m) {
            return m.RegistrationPageModule;
          });
        }
      }, {
        path: 'forgot-password',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | forgot-password-forgot-password-module */
          "forgot-password-forgot-password-module").then(__webpack_require__.bind(null,
          /*! ./forgot-password/forgot-password.module */
          "JgOp")).then(function (m) {
            return m.ForgotPasswordPageModule;
          });
        }
      }, {
        path: 'main',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | main-main-module */
          "main-main-module").then(__webpack_require__.bind(null,
          /*! ./main/main.module */
          "XpXM")).then(function (m) {
            return m.MainPageModule;
          });
        }
      }, {
        path: 'protocols',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | protocols-protocols-module */
          [__webpack_require__.e("common"), __webpack_require__.e("protocols-protocols-module")]).then(__webpack_require__.bind(null,
          /*! ./protocols/protocols.module */
          "ae/h")).then(function (m) {
            return m.ProtocolsPageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | settings-settings-module */
          "settings-settings-module").then(__webpack_require__.bind(null,
          /*! ./settings/settings.module */
          "7wo0")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'experiments',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | experiments-experiments-module */
          [__webpack_require__.e("common"), __webpack_require__.e("experiments-experiments-module")]).then(__webpack_require__.bind(null,
          /*! ./experiments/experiments.module */
          "ReLR")).then(function (m) {
            return m.ExperimentsPageModule;
          });
        }
      }, {
        path: 'lab-group',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | lab-group-lab-group-module */
          "lab-group-lab-group-module").then(__webpack_require__.bind(null,
          /*! ./lab-group/lab-group.module */
          "NKow")).then(function (m) {
            return m.LabGroupPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "x8TV":
    /*!***********************************************!*\
      !*** ./src/app/lab-group/lab-group.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function x8TV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYWItZ3JvdXAucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["experiments-experiments-module"], {
    /***/
    "E7Wm":
    /*!***************************************************!*\
      !*** ./src/app/experiments/experiments.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function E7Wm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlcmltZW50cy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "QICu":
    /*!*************************************************!*\
      !*** ./src/app/experiments/experiments.page.ts ***!
      \*************************************************/

    /*! exports provided: ExperimentsPage */

    /***/
    function QICu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExperimentsPage", function () {
        return ExperimentsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_experiments_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./experiments.page.html */
      "dTeD");
      /* harmony import */


      var _experiments_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./experiments.page.scss */
      "E7Wm");
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


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "m/P+");
      /* harmony import */


      var src_app_protocols_protocols_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/protocols/protocols.page */
      "331B");

      var ExperimentsPage = /*#__PURE__*/function () {
        function ExperimentsPage(storageService, plt, ApiService, toastController, authService, router, inAppBrowser) {
          var _this = this;

          _classCallCheck(this, ExperimentsPage);

          this.storageService = storageService;
          this.plt = plt;
          this.ApiService = ApiService;
          this.toastController = toastController;
          this.authService = authService;
          this.router = router;
          this.inAppBrowser = inAppBrowser;
          this.expCredentials = {
            name: ''
          };
          this.items = [];
          this.displayList = [];
          this.displayListTwo = [];
          this.newItem = {};
          this.plt.ready().then(function () {
            _this.loadItems("step_num");
          });
        }

        _createClass(ExperimentsPage, [{
          key: "sortByValue",
          value: function sortByValue(property) {
            return function (a, b) {
              if (a[property] > b[property]) return 1;else if (a[property] < b[property]) return -1;
              return 0;
            };
          }
        }, {
          key: "addExperiment",
          value: function addExperiment() {
            var _this2 = this;

            if (this.ApiService.networkConnected) {
              this.ApiService.showLoading();
              console.log(src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["myID"]);
              var experimentToCreate = {
                "name": this.expCredentials.name,
                "user_notes": '{}',
                "step_num": 1,
                "protocol_used": src_app_protocols_protocols_page__WEBPACK_IMPORTED_MODULE_10__["protocolID"],
                "current_interaction": '{}'
              };
              this.ApiService.createExperiment(experimentToCreate).subscribe(function (res) {
                if (res) {
                  console.log(res);

                  _this2.loadItems("step_num");
                } else {
                  _this2.ApiService.stopLoading();

                  _this2.ApiService.showError("An error occured while creating a Experiment");
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
          key: "refreshPage",
          value: function refreshPage() {
            this.loadItems("step_num");
          }
        }, {
          key: "redirect",
          value: function redirect(item) {
            this.inAppBrowser.create("http://54.90.175.110:8000/imageInteraction/?id=" + item.protocol_used + "&exp=" + item.id + "&userid=" + src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["myID"]);
          }
        }, {
          key: "onSelect",
          value: function onSelect(item) {
            this.selectedItem = item;
            console.log(item);
            this.redirect(item);
          }
        }, {
          key: "loadItems",
          value: function loadItems(value) {
            var _this3 = this;

            this.displayList = [];
            this.ApiService.getExperiments().subscribe(function (items) {
              for (var index in items["results"]) {
                var currentItem = items["results"][index]["protocol_used"];
                var loadedItem = items["results"][index]["completed_status"];

                if (currentItem == src_app_protocols_protocols_page__WEBPACK_IMPORTED_MODULE_10__["protocolID"]) {
                  console.log(currentItem);

                  if (loadedItem == "False") {
                    _this3.displayList.push(items["results"][index]);

                    _this3.displayList.sort(_this3.sortByValue(value));
                  } else {
                    _this3.displayListTwo.push(items["results"][index]);

                    _this3.displayListTwo.sort(_this3.sortByValue(value));
                  }
                }
              }

              console.log(_this3.displayList); //console.log(items["results"][3]["protocol_used"]);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExperimentsPage;
      }();

      ExperimentsPage.ctorParameters = function () {
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
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"]
        }];
      };

      ExperimentsPage.propDecorators = {
        mylist: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['mylist']
        }]
      };
      ExperimentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-experiments',
        template: _raw_loader_experiments_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_experiments_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ExperimentsPage);
      /***/
    },

    /***/
    "ReLR":
    /*!***************************************************!*\
      !*** ./src/app/experiments/experiments.module.ts ***!
      \***************************************************/

    /*! exports provided: ExperimentsPageModule */

    /***/
    function ReLR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExperimentsPageModule", function () {
        return ExperimentsPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _experiments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./experiments-routing.module */
      "q/8H");
      /* harmony import */


      var _experiments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./experiments.page */
      "QICu");

      var ExperimentsPageModule = function ExperimentsPageModule() {
        _classCallCheck(this, ExperimentsPageModule);
      };

      ExperimentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _experiments_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExperimentsPageRoutingModule"]],
        declarations: [_experiments_page__WEBPACK_IMPORTED_MODULE_6__["ExperimentsPage"]]
      })], ExperimentsPageModule);
      /***/
    },

    /***/
    "dTeD":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/experiments/experiments.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function dTeD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <ion-header>\n    <ion-toolbar>\n      <ion-title>Experiments</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <form (ngSubmit)=\"addExperiment()\" #registerForm=\"ngForm\">\n      <ion-item>\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"expCredentials.name\"></ion-input>\n      </ion-item>\n\n      <ion-button expand=\"full\" type=\"submit\" >Create experiment!</ion-button>\n    </form>\n    <button (click)=\"refreshPage()\">Refresh Page(Click after save or done with experiment)</button>\n    <ion-item>\n      <ion-label>Sort By</ion-label>\n      <ion-select  [(ngModel)]= \"sortBy\" (ionChange) = \"loadItems(sortBy)\" okText=\"Okay\" cancelText=\"Dismiss\">\n        <ion-select-option   value=\"name\">Name</ion-select-option>\n        <ion-select-option   value=\"step_num\">Step Number</ion-select-option>\n        <ion-select-option   value=\"date_last_accessed\">Date Last Used</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-list #mylist>\n\n      <ion-list-header>\n        <ion-label>My Experiments</ion-label>\n      </ion-list-header>\n\n      <ion-item-sliding *ngFor=\"let item of displayList\" (click)=\"onSelect(item)\">\n\n        <ion-item>\n          <ion-label text-wrap>\n            <h3>Name: {{ item.name }}</h3>\n            <h3>Step Number: {{ item.step_num }}</h3>\n            <h3>Protocol ID Used: {{ item.protocol_used }}</h3>\n            <ion-text color=\"secondary\">\n             <!-- <p>Notes: {{ item.user_notes}}</p>-->\n            </ion-text>\n            <p>{{ item.modified | date:'short'}}</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"secondary\" (click)=\"deleteItem(item)\">Delete</ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n\n      <h3>\n        Completed Experiments\n      </h3>\n\n      <ion-item-sliding *ngFor=\"let item of displayListTwo\" (click)=\"onSelect(item)\">\n\n        <ion-item>\n          <ion-label text-wrap>\n            <h3>Step Number: {{ item.step_num }}</h3>\n            <h3>Protocol ID Used: {{ item.protocol_used }}</h3>\n            <ion-text color=\"secondary\">\n              <!-- <p>Notes: {{ item.user_notes}}</p>-->\n            </ion-text>\n            <p>{{ item.modified | date:'short'}}</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"secondary\" (click)=\"deleteItem(item)\">Delete</ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n\n    </ion-list>\n\n  </ion-content>";
      /***/
    },

    /***/
    "q/8H":
    /*!***********************************************************!*\
      !*** ./src/app/experiments/experiments-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ExperimentsPageRoutingModule */

    /***/
    function q8H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExperimentsPageRoutingModule", function () {
        return ExperimentsPageRoutingModule;
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
      /* harmony import */


      var _experiments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./experiments.page */
      "QICu");

      var routes = [{
        path: '',
        component: _experiments_page__WEBPACK_IMPORTED_MODULE_3__["ExperimentsPage"]
      }];

      var ExperimentsPageRoutingModule = function ExperimentsPageRoutingModule() {
        _classCallCheck(this, ExperimentsPageRoutingModule);
      };

      ExperimentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ExperimentsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=experiments-experiments-module-es5.js.map
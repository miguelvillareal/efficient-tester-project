(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"], {
    /***/
    "DNuw":
    /*!*****************************************************!*\
      !*** ./src/app/registration/registration.module.ts ***!
      \*****************************************************/

    /*! exports provided: RegistrationPageModule */

    /***/
    function DNuw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function () {
        return RegistrationPageModule;
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


      var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./registration-routing.module */
      "zF/k");
      /* harmony import */


      var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./registration.page */
      "hHzj");

      var RegistrationPageModule = function RegistrationPageModule() {
        _classCallCheck(this, RegistrationPageModule);
      };

      RegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageRoutingModule"]],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
      })], RegistrationPageModule);
      /***/
    },

    /***/
    "XDXw":
    /*!*****************************************************!*\
      !*** ./src/app/registration/registration.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function XDXw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYXRpb24ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "hHzj":
    /*!***************************************************!*\
      !*** ./src/app/registration/registration.page.ts ***!
      \***************************************************/

    /*! exports provided: RegistrationPage */

    /***/
    function hHzj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPage", function () {
        return RegistrationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./registration.page.html */
      "mE0+");
      /* harmony import */


      var _registration_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./registration.page.scss */
      "XDXw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_api_django_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/api-django.service */
      "ZqIr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43"); //import { Platform } from '@ionic/angular';


      var RegistrationPage = /*#__PURE__*/function () {
        function RegistrationPage(apiService, router, authService) {
          _classCallCheck(this, RegistrationPage);

          this.apiService = apiService;
          this.router = router;
          this.authService = authService;
          this.registerCredentials = {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordbis: ''
          };
        }

        _createClass(RegistrationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "register",
          value: function register() {
            var _this = this;

            if (this.registerCredentials.password != this.registerCredentials.passwordbis) {
              this.apiService.showError("Sorry passwords doesn't match");
            } else if (this.registerCredentials.password.length < 8) {
              this.apiService.showError("Password has to be 8 or more characters");
            } else if (this.registerCredentials.username.length == 0 && this.registerCredentials.email.length == 0) {
              this.apiService.showError("Please enter your email and username");
            } else {
              if (this.apiService.networkConnected) {
                this.apiService.showLoading(); // Check email

                var queryPath = '?email=' + this.registerCredentials.email;
                this.apiService.findUser(queryPath).subscribe(function (listUser) {
                  _this.apiService.stopLoading();

                  console.log(JSON.stringify(listUser));

                  if (listUser) {
                    var nbUserFound = listUser["count"];

                    if (nbUserFound == 0) {
                      var userToCreate = {
                        "email": _this.registerCredentials.email,
                        "username": _this.registerCredentials.username,
                        "firstName": _this.registerCredentials.firstName,
                        "lastName": _this.registerCredentials.lastName,
                        "password": _this.registerCredentials.password,
                        "is_active": true,
                        "is_staff": false
                      };

                      _this.apiService.createUser(userToCreate).subscribe(function (resultat) {
                        if (resultat) {
                          var _queryPath = "?email=" + userToCreate.email;

                          _this.apiService.findUser(_queryPath).subscribe(function (listUser) {
                            if (listUser) {
                              //console.log(listUser.password)
                              //console.log(listUser.id)
                              var queryPathTwo = resultat.id;
                              var setUserInfo = {
                                "email": resultat.email,
                                "username": _this.registerCredentials.username,
                                "firstName": _this.registerCredentials.firstName,
                                "lastName": _this.registerCredentials.lastName
                              };

                              _this.apiService.infoUser(queryPathTwo, setUserInfo).subscribe(function (myUser) {
                                if (myUser) {
                                  console.log(myUser);
                                }
                              });

                              var labgroupToCreate = {
                                "name": _this.registerCredentials.username,
                                "group_id": resultat.id
                              };

                              _this.apiService.createLabGroups(labgroupToCreate).subscribe(function (res) {
                                if (res) {
                                  console.log(res);
                                  var currentGroup = res.id;
                                  var userID = resultat.id;
                                  var groupMembershipToCreate = {
                                    "user": userID,
                                    "group": currentGroup,
                                    "role": 1
                                  };

                                  _this.apiService.createLabGroupMembership(groupMembershipToCreate).subscribe(function (res) {
                                    if (res) {
                                      console.log(res);
                                    } else {
                                      _this.apiService.stopLoading();

                                      _this.apiService.showError("An error occured while creating a LabGroupMembership");
                                    }
                                  });
                                } else {
                                  _this.apiService.stopLoading();

                                  _this.apiService.showError("An error occured while creating a Lab Group");
                                }
                              });
                            }
                          }); //console.log(resultat)

                        } else {
                          _this.apiService.stopLoading();

                          _this.apiService.showError("An error occured while registering");
                        }
                      }); //Put info about user in their profile

                    } else {
                      _this.apiService.showError("An account already exists for this email, please login");
                    }
                  } else {
                    _this.apiService.showError("An error occured while registering");
                  }
                });
              }
            }
          }
        }]);

        return RegistrationPage;
      }();

      RegistrationPage.ctorParameters = function () {
        return [{
          type: _services_api_django_service__WEBPACK_IMPORTED_MODULE_4__["ApiDjangoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }];
      };

      RegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registration',
        template: _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registration_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegistrationPage);
      /***/
    },

    /***/
    "mE0+":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function mE0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Registration</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (ngSubmit)=\"register()\" #registerForm=\"ngForm\">\n    \n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Username</ion-label>\n      <ion-input type=\"text\" name=\"username\"  [(ngModel)]=\"registerCredentials.username\" required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">First Name</ion-label>\n      <ion-input type=\"text\" name=\"firstName\"  [(ngModel)]=\"registerCredentials.firstName\" required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Last Name</ion-label>\n      <ion-input type=\"text\" name=\"lastName\"  [(ngModel)]=\"registerCredentials.lastName\" required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\" name=\"email\"  [(ngModel)]=\"registerCredentials.email\" required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"registerCredentials.password\" required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Confirm Password</ion-label>\n      <ion-input type=\"password\" name=\"passwordbis\" [(ngModel)]=\"registerCredentials.passwordbis\" required></ion-input>\n    </ion-item>\n\n    <ion-row>\n      <ion-col>\n        <ion-button [routerLink]=\"['/home']\" type=\"submit\" color=\"danger\" expand=\"block\">Sign Up</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "zF/k":
    /*!*************************************************************!*\
      !*** ./src/app/registration/registration-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: RegistrationPageRoutingModule */

    /***/
    function zFK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function () {
        return RegistrationPageRoutingModule;
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


      var _registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./registration.page */
      "hHzj");

      var routes = [{
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPage"]
      }];

      var RegistrationPageRoutingModule = function RegistrationPageRoutingModule() {
        _classCallCheck(this, RegistrationPageRoutingModule);
      };

      RegistrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegistrationPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=registration-registration-module-es5.js.map
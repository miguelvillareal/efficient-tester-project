(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lab-group-lab-group-module"], {
    /***/
    "NKow":
    /*!***********************************************!*\
      !*** ./src/app/lab-group/lab-group.module.ts ***!
      \***********************************************/

    /*! exports provided: LabGroupPageModule */

    /***/
    function NKow(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LabGroupPageModule", function () {
        return LabGroupPageModule;
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


      var _lab_group_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lab-group-routing.module */
      "h5LO");
      /* harmony import */


      var _lab_group_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lab-group.page */
      "Of47");

      var LabGroupPageModule = function LabGroupPageModule() {
        _classCallCheck(this, LabGroupPageModule);
      };

      LabGroupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _lab_group_routing_module__WEBPACK_IMPORTED_MODULE_5__["LabGroupPageRoutingModule"]],
        declarations: [_lab_group_page__WEBPACK_IMPORTED_MODULE_6__["LabGroupPage"]]
      })], LabGroupPageModule);
      /***/
    },

    /***/
    "h5LO":
    /*!*******************************************************!*\
      !*** ./src/app/lab-group/lab-group-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: LabGroupPageRoutingModule */

    /***/
    function h5LO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LabGroupPageRoutingModule", function () {
        return LabGroupPageRoutingModule;
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


      var _lab_group_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lab-group.page */
      "Of47");

      var routes = [{
        path: '',
        component: _lab_group_page__WEBPACK_IMPORTED_MODULE_3__["LabGroupPage"]
      }];

      var LabGroupPageRoutingModule = function LabGroupPageRoutingModule() {
        _classCallCheck(this, LabGroupPageRoutingModule);
      };

      LabGroupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LabGroupPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=lab-group-lab-group-module-es5.js.map
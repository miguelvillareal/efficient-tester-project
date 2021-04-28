(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["protocols-protocols-module"], {
    /***/
    "Xz/r":
    /*!*******************************************************!*\
      !*** ./src/app/protocols/protocols-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: ProtocolsPageRoutingModule */

    /***/
    function XzR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProtocolsPageRoutingModule", function () {
        return ProtocolsPageRoutingModule;
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


      var _protocols_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./protocols.page */
      "331B");

      var routes = [{
        path: '',
        component: _protocols_page__WEBPACK_IMPORTED_MODULE_3__["ProtocolsPage"]
      }];

      var ProtocolsPageRoutingModule = function ProtocolsPageRoutingModule() {
        _classCallCheck(this, ProtocolsPageRoutingModule);
      };

      ProtocolsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProtocolsPageRoutingModule);
      /***/
    },

    /***/
    "ae/h":
    /*!***********************************************!*\
      !*** ./src/app/protocols/protocols.module.ts ***!
      \***********************************************/

    /*! exports provided: ProtocolsPageModule */

    /***/
    function aeH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProtocolsPageModule", function () {
        return ProtocolsPageModule;
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


      var _protocols_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./protocols-routing.module */
      "Xz/r");
      /* harmony import */


      var _protocols_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./protocols.page */
      "331B");

      var ProtocolsPageModule = function ProtocolsPageModule() {
        _classCallCheck(this, ProtocolsPageModule);
      };

      ProtocolsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _protocols_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProtocolsPageRoutingModule"]],
        declarations: [_protocols_page__WEBPACK_IMPORTED_MODULE_6__["ProtocolsPage"]]
      })], ProtocolsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=protocols-protocols-module-es5.js.map
(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "0/6H":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-e806d1f6.js */
      "A36C");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "iWo5");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "qULd");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "331B":
    /*!*********************************************!*\
      !*** ./src/app/protocols/protocols.page.ts ***!
      \*********************************************/

    /*! exports provided: protocolID, ProtocolsPage */

    /***/
    function B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "protocolID", function () {
        return protocolID;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProtocolsPage", function () {
        return ProtocolsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_protocols_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./protocols.page.html */
      "4+bG");
      /* harmony import */


      var _protocols_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./protocols.page.scss */
      "7081");
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


      var src_app_lab_group_lab_group_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/lab-group/lab-group.page */
      "Of47");

      var protocolID;

      var ProtocolsPage = /*#__PURE__*/function () {
        function ProtocolsPage(storageService, plt, ApiService, toastController, authService, router) {
          var _this = this;

          _classCallCheck(this, ProtocolsPage);

          this.storageService = storageService;
          this.plt = plt;
          this.ApiService = ApiService;
          this.toastController = toastController;
          this.authService = authService;
          this.router = router;
          this.userName = null;
          this.protocolCredentials = {
            name: '',
            plateType: '',
            numSamples: '',
            posRate: ''
          };
          this.creatorID = '';
          this.items = [];
          this.displayList = [];
          this.newItem = {};
          this.currentGroupName = null;
          this.currentGroupName = src_app_lab_group_lab_group_page__WEBPACK_IMPORTED_MODULE_9__["groupName"];
          this.plt.ready().then(function () {
            _this.loadItems("name");
          });
        }

        _createClass(ProtocolsPage, [{
          key: "addProtocol",
          value: function addProtocol() {
            var _this2 = this;

            if (this.ApiService.networkConnected) {
              this.ApiService.showLoading();
              console.log(src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["myID"]);
              var protocolToCreate = {
                "name": this.protocolCredentials.name,
                "creator_ID": src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["myID"],
                "plate_type": this.protocolCredentials.plateType,
                "num_samples": this.protocolCredentials.numSamples,
                "suspected_pos_rate": this.protocolCredentials.posRate,
                "active_status": true,
                "lab_group": src_app_lab_group_lab_group_page__WEBPACK_IMPORTED_MODULE_9__["currentGroup"]
              };
              this.ApiService.createProtocol(protocolToCreate).subscribe(function (res) {
                if (res) {
                  console.log(res);

                  _this2.loadItems("name");
                } else {
                  _this2.ApiService.stopLoading();

                  _this2.ApiService.showError("An error occured while creating a Protocol");
                }
              });
            }
          }
        }, {
          key: "sortByValue",
          value: function sortByValue(property) {
            return function (a, b) {
              if (a[property] > b[property]) return 1;else if (a[property] < b[property]) return -1;
              return 0;
            };
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
            protocolID = item.id;
            console.log(protocolID);
            this.redirect();
          }
        }, {
          key: "loadItems",
          value: function loadItems(value) {
            var _this3 = this;

            //console.log(currentGroup)
            this.displayList = [];
            this.ApiService.getProtocols().subscribe(function (items) {
              var _loop = function _loop(index) {
                var currentItem = items["results"][index]["lab_group"];

                if (currentItem == src_app_lab_group_lab_group_page__WEBPACK_IMPORTED_MODULE_9__["currentGroup"]) {
                  var userId = items["results"][index]["creator_ID"]; //console.log(userId)

                  _this3.ApiService.getinfoUser(userId).subscribe(function (listUser) {
                    if (listUser) {
                      //console.log(listUser.username)
                      //this.userName = listUser.username;
                      items["results"][index]["creator_ID"] = listUser.username;
                      console.log(items["results"][index]["creator_ID"]);
                    }
                  });

                  _this3.displayList.push(items["results"][index]);

                  _this3.displayList.sort(_this3.sortByValue(value));
                }
              };

              for (var index in items["results"]) {
                _loop(index);
              } //console.log(this.displayList)

            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProtocolsPage;
      }();

      ProtocolsPage.ctorParameters = function () {
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
        }];
      };

      ProtocolsPage.propDecorators = {
        mylist: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['mylist']
        }]
      };
      ProtocolsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-protocols',
        template: _raw_loader_protocols_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_protocols_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProtocolsPage);
      /***/
    },

    /***/
    "4+bG":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/protocols/protocols.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function bG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Protocols</ion-title>\n    </ion-toolbar>\n        <h1> Current Group: {{ currentGroupName }}</h1>\n  </ion-header>\n\n  <ion-content>\n    <form (ngSubmit)=\"addProtocol()\" #registerForm=\"ngForm\">\n      <ion-item>\n        <ion-label position=\"floating\">Samples</ion-label>\n        <ion-input type=\"number\" name=\"numSamples\" [(ngModel)]=\"protocolCredentials.numSamples\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Well Size(1=96, 2=384)</ion-label>\n        <ion-input type=\"number\" name=\"posRate\" [(ngModel)]=\"protocolCredentials.plateType\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"protocolCredentials.name\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Positivity %</ion-label>\n        <ion-input type=\"number\" name=\"posRate\" [(ngModel)]=\"protocolCredentials.posRate\"></ion-input>\n      </ion-item>\n\n      <ion-button expand=\"full\" type=\"submit\" >Add Protocol!</ion-button>\n    </form>\n\n    <ion-item>\n      <ion-label>Sort By</ion-label>\n      <ion-select  [(ngModel)]= \"sortBy\" (ionChange) = \"loadItems(sortBy)\" okText=\"Okay\" cancelText=\"Dismiss\">\n        <ion-select-option   value=\"name\">Name</ion-select-option>\n        <ion-select-option   value=\"num_samples\">Sample Number</ion-select-option>\n        <ion-select-option   value=\"date_used\">Date Used</ion-select-option>\n        <ion-select-option  value=\"plate_type\">Plate Type</ion-select-option>\n      </ion-select>\n    </ion-item>\n    \n    <ion-list #mylist>\n\n      <ion-list-header>\n        <ion-label>My Protocols</ion-label>\n      </ion-list-header>\n\n      <ion-item-sliding *ngFor=\"let item of displayList\" (click)=\"onSelect(item)\">\n        <ion-item>\n          <ion-label text-wrap>\n            <h3>Name: {{ item.name }}</h3>\n            <h3>Plate Type: {{ item.plate_type }}</h3>\n            <h3>Number of Samples: {{ item.num_samples }}</h3>\n            <h3>Creator Username: {{ item.creator_ID }}</h3>\n            <ion-text color=\"secondary\">\n              <p> Positive Rate: {{ item.suspected_pos_rate}}</p>\n            </ion-text>\n            <p>{{ item.modified | date:'short'}}</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"secondary\">Delete</ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n\n    </ion-list>\n\n\n  </ion-content>\n";
      /***/
    },

    /***/
    "7081":
    /*!***********************************************!*\
      !*** ./src/app/protocols/protocols.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm90b2NvbHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "74mu":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function mu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context.abrupt("return", false);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "ZaV5":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function ZaV5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!delegate) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context2.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context2.next = 11;
                    break;
                  }

                  _context2.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context2.abrupt("return", el);

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function attachComponent(_x5, _x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "h3R7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function h3R7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "qULd":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function qULd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map
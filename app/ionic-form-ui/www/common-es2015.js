(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0/6H":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "A36C");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
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
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "331B":
/*!*********************************************!*\
  !*** ./src/app/protocols/protocols.page.ts ***!
  \*********************************************/
/*! exports provided: protocolID, ProtocolsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protocolID", function() { return protocolID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtocolsPage", function() { return ProtocolsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_protocols_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./protocols.page.html */ "4+bG");
/* harmony import */ var _protocols_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./protocols.page.scss */ "7081");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/storage.service */ "n90K");
/* harmony import */ var _services_api_django_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api-django.service */ "ZqIr");
/* harmony import */ var src_app_lab_group_lab_group_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/lab-group/lab-group.page */ "Of47");












var protocolID;
let ProtocolsPage = class ProtocolsPage {
    constructor(storageService, plt, ApiService, toastController, authService, router) {
        this.storageService = storageService;
        this.plt = plt;
        this.ApiService = ApiService;
        this.toastController = toastController;
        this.authService = authService;
        this.router = router;
        this.userName = null;
        this.protocolCredentials = { name: '', plateType: '', numSamples: '', posRate: '' };
        this.creatorID = '';
        this.items = [];
        this.displayList = [];
        this.newItem = {};
        this.currentGroupName = null;
        this.currentGroupName = src_app_lab_group_lab_group_page__WEBPACK_IMPORTED_MODULE_9__["groupName"];
        this.plt.ready().then(() => {
            this.loadItems("name");
        });
    }
    addProtocol() {
        if (this.ApiService.networkConnected) {
            this.ApiService.showLoading();
            console.log(src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["myID"]);
            let protocolToCreate = {
                "name": this.protocolCredentials.name,
                "creator_ID": src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["myID"],
                "plate_type": this.protocolCredentials.plateType,
                "num_samples": this.protocolCredentials.numSamples,
                "suspected_pos_rate": this.protocolCredentials.posRate,
                "active_status": true,
                "lab_group": src_app_lab_group_lab_group_page__WEBPACK_IMPORTED_MODULE_9__["currentGroup"]
            };
            this.ApiService.createProtocol(protocolToCreate).subscribe((res) => {
                if (res) {
                    console.log(res);
                    this.loadItems("name");
                }
                else {
                    this.ApiService.stopLoading();
                    this.ApiService.showError("An error occured while creating a Protocol");
                }
            });
        }
    }
    sortByValue(property) {
        return function (a, b) {
            if (a[property] > b[property])
                return 1;
            else if (a[property] < b[property])
                return -1;
            return 0;
        };
    }
    redirect() {
        this.router.navigateByUrl("/experiments");
    }
    onSelect(item) {
        this.selectedItem = item;
        protocolID = item.id;
        console.log(protocolID);
        this.redirect();
    }
    loadItems(value) {
        //console.log(currentGroup)
        this.displayList = [];
        this.ApiService.getProtocols().subscribe(items => {
            for (let index in items["results"]) {
                let currentItem = items["results"][index]["lab_group"];
                if (currentItem == src_app_lab_group_lab_group_page__WEBPACK_IMPORTED_MODULE_9__["currentGroup"]) {
                    let userId = items["results"][index]["creator_ID"];
                    //console.log(userId)
                    this.ApiService.getinfoUser(userId).subscribe((listUser) => {
                        if (listUser) {
                            //console.log(listUser.username)
                            //this.userName = listUser.username;
                            items["results"][index]["creator_ID"] = listUser.username;
                            console.log(items["results"][index]["creator_ID"]);
                        }
                    });
                    this.displayList.push(items["results"][index]);
                    this.displayList.sort(this.sortByValue(value));
                }
            }
            //console.log(this.displayList)
        });
    }
    ngOnInit() {
    }
};
ProtocolsPage.ctorParameters = () => [
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _services_api_django_service__WEBPACK_IMPORTED_MODULE_8__["ApiDjangoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ProtocolsPage.propDecorators = {
    mylist: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['mylist',] }]
};
ProtocolsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-protocols',
        template: _raw_loader_protocols_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_protocols_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProtocolsPage);



/***/ }),

/***/ "4+bG":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/protocols/protocols.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Protocols</ion-title>\n    </ion-toolbar>\n        <h1> Current Group: {{ currentGroupName }}</h1>\n  </ion-header>\n\n  <ion-content>\n    <form (ngSubmit)=\"addProtocol()\" #registerForm=\"ngForm\">\n      <ion-item>\n        <ion-label position=\"floating\">Samples</ion-label>\n        <ion-input type=\"number\" name=\"numSamples\" [(ngModel)]=\"protocolCredentials.numSamples\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Well Size(1=96, 2=384)</ion-label>\n        <ion-input type=\"number\" name=\"posRate\" [(ngModel)]=\"protocolCredentials.plateType\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"protocolCredentials.name\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Positivity %</ion-label>\n        <ion-input type=\"number\" name=\"posRate\" [(ngModel)]=\"protocolCredentials.posRate\"></ion-input>\n      </ion-item>\n\n      <ion-button expand=\"full\" type=\"submit\" >Add Protocol!</ion-button>\n    </form>\n\n    <ion-item>\n      <ion-label>Sort By</ion-label>\n      <ion-select  [(ngModel)]= \"sortBy\" (ionChange) = \"loadItems(sortBy)\" okText=\"Okay\" cancelText=\"Dismiss\">\n        <ion-select-option   value=\"name\">Name</ion-select-option>\n        <ion-select-option   value=\"num_samples\">Sample Number</ion-select-option>\n        <ion-select-option   value=\"date_used\">Date Used</ion-select-option>\n        <ion-select-option  value=\"plate_type\">Plate Type</ion-select-option>\n      </ion-select>\n    </ion-item>\n    \n    <ion-list #mylist>\n\n      <ion-list-header>\n        <ion-label>My Protocols</ion-label>\n      </ion-list-header>\n\n      <ion-item-sliding *ngFor=\"let item of displayList\" (click)=\"onSelect(item)\">\n        <ion-item>\n          <ion-label text-wrap>\n            <h3>Name: {{ item.name }}</h3>\n            <h3>Plate Type: {{ item.plate_type }}</h3>\n            <h3>Number of Samples: {{ item.num_samples }}</h3>\n            <h3>Creator Username: {{ item.creator_ID }}</h3>\n            <ion-text color=\"secondary\">\n              <p> Positive Rate: {{ item.suspected_pos_rate}}</p>\n            </ion-text>\n            <p>{{ item.modified | date:'short'}}</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"secondary\">Delete</ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n\n    </ion-list>\n\n\n  </ion-content>\n");

/***/ }),

/***/ "7081":
/*!***********************************************!*\
  !*** ./src/app/protocols/protocols.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm90b2NvbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "ZaV5":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
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
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map
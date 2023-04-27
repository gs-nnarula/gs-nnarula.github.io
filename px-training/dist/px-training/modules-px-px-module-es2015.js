(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-px-px-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/px/px.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/px/px.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/modules/px/px.component.scss":
/*!**********************************************!*\
  !*** ./src/app/modules/px/px.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHgvcHguY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/px/px.component.ts":
/*!********************************************!*\
  !*** ./src/app/modules/px/px.component.ts ***!
  \********************************************/
/*! exports provided: PxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PxComponent", function() { return PxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PxComponent = class PxComponent {
};
PxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'px-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./px.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/px/px.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./px.component.scss */ "./src/app/modules/px/px.component.scss")).default]
    })
], PxComponent);



/***/ }),

/***/ "./src/app/modules/px/px.module.ts":
/*!*****************************************!*\
  !*** ./src/app/modules/px/px.module.ts ***!
  \*****************************************/
/*! exports provided: PxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PxModule", function() { return PxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _px_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./px.component */ "./src/app/modules/px/px.component.ts");




let PxModule = class PxModule {
};
PxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _px_component__WEBPACK_IMPORTED_MODULE_3__["PxComponent"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: "", redirectTo: 'home', component: _px_component__WEBPACK_IMPORTED_MODULE_3__["PxComponent"] },
                { path: "home", loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("vendors~home-home-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/modules/home/home.module.ts")).then(m => m.HomeModule) },
                { path: "contact", loadChildren: () => __webpack_require__.e(/*! import() | contact-contact-module */ "contact-contact-module").then(__webpack_require__.bind(null, /*! ../contact/contact.module */ "./src/app/modules/contact/contact.module.ts")).then(m => m.ContactModule) }
            ]),
        ],
        exports: [
            _px_component__WEBPACK_IMPORTED_MODULE_3__["PxComponent"]
        ]
    })
], PxModule);



/***/ })

}]);
//# sourceMappingURL=modules-px-px-module-es2015.js.map
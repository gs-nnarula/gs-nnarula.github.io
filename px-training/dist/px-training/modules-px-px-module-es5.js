function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-px-px-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/px/px.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/px/px.component.html ***!
    \************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPxPxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "";

    /***/
  },

  /***/"./src/app/modules/px/px.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/modules/px/px.component.scss ***!
    \**********************************************/
  /*! exports provided: default */
  /***/
  function srcAppModulesPxPxComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHgvcHguY29tcG9uZW50LnNjc3MifQ== */";

    /***/
  },

  /***/"./src/app/modules/px/px.component.ts":
  /*!********************************************!*\
    !*** ./src/app/modules/px/px.component.ts ***!
    \********************************************/
  /*! exports provided: PxComponent */
  /***/
  function srcAppModulesPxPxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PxComponent", function () {
      return PxComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var PxComponent = /*#__PURE__*/_createClass(function PxComponent() {
      _classCallCheck(this, PxComponent);
    });
    PxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'px-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./px.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/px/px.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./px.component.scss */"./src/app/modules/px/px.component.scss"))["default"]]
    })], PxComponent);

    /***/
  },

  /***/"./src/app/modules/px/px.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/modules/px/px.module.ts ***!
    \*****************************************/
  /*! exports provided: PxModule */
  /***/
  function srcAppModulesPxPxModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PxModule", function () {
      return PxModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _px_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./px.component */"./src/app/modules/px/px.component.ts");
    var PxModule = /*#__PURE__*/_createClass(function PxModule() {
      _classCallCheck(this, PxModule);
    });
    PxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_px_component__WEBPACK_IMPORTED_MODULE_3__["PxComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: "",
        redirectTo: 'home',
        component: _px_component__WEBPACK_IMPORTED_MODULE_3__["PxComponent"]
      }, {
        path: "home",
        loadChildren: function loadChildren() {
          return Promise.all( /*! import() | home-home-module */[__webpack_require__.e("vendors~home-home-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */"./src/app/modules/home/home.module.ts")).then(function (m) {
            return m.HomeModule;
          });
        }
      }, {
        path: "contact",
        loadChildren: function loadChildren() {
          return __webpack_require__.e( /*! import() | contact-contact-module */"contact-contact-module").then(__webpack_require__.bind(null, /*! ../contact/contact.module */"./src/app/modules/contact/contact.module.ts")).then(function (m) {
            return m.ContactModule;
          });
        }
      }])],
      exports: [_px_component__WEBPACK_IMPORTED_MODULE_3__["PxComponent"]]
    })], PxModule);

    /***/
  }
}]);
//# sourceMappingURL=modules-px-px-module-es5.js.map
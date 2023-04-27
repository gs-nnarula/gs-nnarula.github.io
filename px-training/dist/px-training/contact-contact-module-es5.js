function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/contact.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/contact.component.html ***!
    \**********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"px-contact-container\">\n    <div class=\"px-contact-radio form-check form-check-inline\">\n        <input (change)=\"selectionChange('CONTACTS')\" class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\"\n            id=\"inlineRadio1\" value=\"CONTACTS\" checked>\n        <label class=\"form-check-label\" for=\"inlineRadio1\">CONTACTS</label>\n    </div>\n    <div class=\"form-check form-check-inline\">\n        <input (change)=\"selectionChange('HELP')\" class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\"\n            id=\"inlineRadio2\" value=\"HELP\">\n        <label class=\"form-check-label\" for=\"inlineRadio2\">HELP</label>\n    </div>\n\n    <ul *ngIf=\"selectedOption === 'CONTACTS'\" class=\"list-group\">\n        <li class=\"list-group-item\">Contact 1 - ABC</li>\n        <li class=\"list-group-item\">Contact 2 - DEF</li>\n        <li class=\"list-group-item\">Instagram</li>\n        <li class=\"list-group-item\">Facebook</li>\n        <li class=\"list-group-item\">Twitter</li>\n    </ul>\n\n    <ul *ngIf=\"selectedOption === 'HELP'\" class=\"list-group\">\n        <li class=\"list-group-item\">FAQ - 1</li>\n        <li class=\"list-group-item\">FAQ - 2</li>\n    </ul>\n</div>";

    /***/
  },

  /***/"./src/app/modules/contact/contact.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/modules/contact/contact.component.scss ***!
    \********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppModulesContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".px-contact-container {\n  margin: 20px;\n}\n\n.px-contact-radio {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ubmFydWxhL0Rlc2t0b3AvUmVwb3NpdG9yaWVzL2dzLW5uYXJ1bGEuZ2l0aHViLmlvL3B4LXRyYWluaW5nL3NyYy9hcHAvbW9kdWxlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB4LWNvbnRhY3QtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5weC1jb250YWN0LXJhZGlvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSIsIi5weC1jb250YWN0LWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLnB4LWNvbnRhY3QtcmFkaW8ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/modules/contact/contact.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/modules/contact/contact.component.ts ***!
    \******************************************************/
  /*! exports provided: ContactComponent */
  /***/
  function srcAppModulesContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
        this.selectedOption = 'CONTACTS';
      }
      _createClass(ContactComponent, [{
        key: "selectionChange",
        value: function selectionChange(option) {
          this.selectedOption = option;
        }
      }]);
      return ContactComponent;
    }();
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'px-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./contact.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./contact.component.scss */"./src/app/modules/contact/contact.component.scss"))["default"]]
    })], ContactComponent);

    /***/
  },

  /***/"./src/app/modules/contact/contact.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/contact/contact.module.ts ***!
    \***************************************************/
  /*! exports provided: ContactModule */
  /***/
  function srcAppModulesContactContactModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactModule", function () {
      return ContactModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./contact.component */"./src/app/modules/contact/contact.component.ts");
    var ContactModule = /*#__PURE__*/_createClass(function ContactModule() {
      _classCallCheck(this, ContactModule);
    });
    ContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: "",
        component: _contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]
      }])],
      exports: [_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]]
    })], ContactModule);

    /***/
  }
}]);
//# sourceMappingURL=contact-contact-module-es5.js.map
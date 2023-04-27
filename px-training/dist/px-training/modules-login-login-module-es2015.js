(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card px-login-container\">\n    <h4 class=\"card-header\">Login</h4>\n    <div class=\"card-body\">\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"mb-3\">\n                <label class=\"form-label\">Username</label>\n                <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                </div>\n            </div>\n            <div class=\"mb-3\">\n                <label class=\"form-label\">Password</label>\n                <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                </div>\n            </div>\n            <div>\n                <button [disabled]=\"loading\" class=\"btn btn-primary login_button\">\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm me-1\"></span>\n                    Login\n                </button>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/modules/login/login.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/login/login.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".px-login-container {\n  width: 30%;\n  margin: auto;\n  margin-top: 50px;\n}\n.px-login-container .login_button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ubmFydWxhL0Rlc2t0b3AvUmVwb3NpdG9yaWVzL2dzLW5uYXJ1bGEuZ2l0aHViLmlvL3B4LXRyYWluaW5nL3NyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENJO0VBQ0ksV0FBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5weC1sb2dpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG5cbiAgICAubG9naW5fYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSIsIi5weC1sb2dpbi1jb250YWluZXIge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4ucHgtbG9naW4tY29udGFpbmVyIC5sb2dpbl9idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/login.service */ "./src/app/modules/services/login.service.ts");





let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, loginService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        const loginResult = this.loginService.login(this.f.username.value, this.f.password.value);
        if (loginResult) {
            // get return url from query parameters or default to home page
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            this.router.navigateByUrl(returnUrl);
        }
        else {
            this.loading = false;
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'px-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/modules/login/login.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/modules/login/login.component.ts");






let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                { path: "", component: _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] }
            ]),
        ],
        exports: [
            _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
        ]
    })
], LoginModule);



/***/ })

}]);
//# sourceMappingURL=modules-login-login-module-es2015.js.map
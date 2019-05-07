(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/login/login.component */ "./src/app/core/login/login.component.ts");
/* harmony import */ var _core_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/signup/signup.component */ "./src/app/core/signup/signup.component.ts");
/* harmony import */ var _services_before_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/before-login.service */ "./src/app/services/before-login.service.ts");
/* harmony import */ var _services_after_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/after-login.service */ "./src/app/services/after-login.service.ts");
/* harmony import */ var _orphans_new_non_saudi_orphan_new_non_saudi_orphan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orphans/new-non-saudi-orphan/new-non-saudi-orphan.component */ "./src/app/orphans/new-non-saudi-orphan/new-non-saudi-orphan.component.ts");
/* harmony import */ var _orphans_orphans_table_orphans_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orphans/orphans-table/orphans-table.component */ "./src/app/orphans/orphans-table/orphans-table.component.ts");
/* harmony import */ var _sites_marwa_marwa_ekfalni_marwa_ekfalni_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sites/marwa/marwa-ekfalni/marwa-ekfalni.component */ "./src/app/sites/marwa/marwa-ekfalni/marwa-ekfalni.component.ts");
/* harmony import */ var _orgs_new_org_new_org_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./orgs/new-org/new-org.component */ "./src/app/orgs/new-org/new-org.component.ts");
/* harmony import */ var _kafeels_kefeels_list_kefeels_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./kafeels/kefeels-list/kefeels-list.component */ "./src/app/kafeels/kefeels-list/kefeels-list.component.ts");
/* harmony import */ var _orphans_orphans_public_table_orphans_public_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./orphans/orphans-public-table/orphans-public-table.component */ "./src/app/orphans/orphans-public-table/orphans-public-table.component.ts");
/* harmony import */ var _orphans_new_saudi_orphan_new_saudi_orphan_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./orphans/new-saudi-orphan/new-saudi-orphan.component */ "./src/app/orphans/new-saudi-orphan/new-saudi-orphan.component.ts");
/* harmony import */ var _orphans_makfouled_orphans_makfouled_orphans_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./orphans/makfouled-orphans/makfouled-orphans.component */ "./src/app/orphans/makfouled-orphans/makfouled-orphans.component.ts");
/* harmony import */ var _sites_marwa_mr_waqf_mr_waqf_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sites/marwa/mr-waqf/mr-waqf.component */ "./src/app/sites/marwa/mr-waqf/mr-waqf.component.ts");
/* harmony import */ var _sites_raith_raith_waqf_raith_waqf_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sites/raith/raith-waqf/raith-waqf.component */ "./src/app/sites/raith/raith-waqf/raith-waqf.component.ts");
/* harmony import */ var _sites_raith_projects_raith_projects_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sites/raith-projects/raith-projects.component */ "./src/app/sites/raith-projects/raith-projects.component.ts");
/* harmony import */ var _sites_dm_steps_dm_steps_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sites/dm-steps/dm-steps.component */ "./src/app/sites/dm-steps/dm-steps.component.ts");
/* harmony import */ var _sites_aidab_aidab_waqf_aidab_waqf_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sites/aidab/aidab-waqf/aidab-waqf.component */ "./src/app/sites/aidab/aidab-waqf/aidab-waqf.component.ts");
/* harmony import */ var _sites_aidab_aidab_ekfalni_aidab_ekfalni_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sites/aidab/aidab-ekfalni/aidab-ekfalni.component */ "./src/app/sites/aidab/aidab-ekfalni/aidab-ekfalni.component.ts");
/* harmony import */ var _sites_aidab_steps_aidab_steps_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sites/aidab-steps/aidab-steps.component */ "./src/app/sites/aidab-steps/aidab-steps.component.ts");
/* harmony import */ var _sites_arish_arish_waqf_arish_waqf_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sites/arish/arish-waqf/arish-waqf.component */ "./src/app/sites/arish/arish-waqf/arish-waqf.component.ts");
/* harmony import */ var _sites_arish_arish_projects_arish_projects_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sites/arish/arish-projects/arish-projects.component */ "./src/app/sites/arish/arish-projects/arish-projects.component.ts");
/* harmony import */ var _sites_arish_arish_steps_arish_steps_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sites/arish/arish-steps/arish-steps.component */ "./src/app/sites/arish/arish-steps/arish-steps.component.ts");
/* harmony import */ var _sites_gits_new_gift_new_gift_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sites/gits/new-gift/new-gift.component */ "./src/app/sites/gits/new-gift/new-gift.component.ts");
/* harmony import */ var _sites_cards_choose_category_choose_category_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./sites/cards/choose-category/choose-category.component */ "./src/app/sites/cards/choose-category/choose-category.component.ts");
/* harmony import */ var _sites_cards_choose_card_choose_card_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sites/cards/choose-card/choose-card.component */ "./src/app/sites/cards/choose-card/choose-card.component.ts");
/* harmony import */ var _sites_cards_save_card_save_card_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./sites/cards/save-card/save-card.component */ "./src/app/sites/cards/save-card/save-card.component.ts");
/* harmony import */ var _cards_cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./cards/cards-list/cards-list.component */ "./src/app/cards/cards-list/cards-list.component.ts");
/* harmony import */ var _cards_fill_card_fill_card_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./cards/fill-card/fill-card.component */ "./src/app/cards/fill-card/fill-card.component.ts");
/* harmony import */ var _sites_cards_new_card_new_card_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./sites/cards/new-card/new-card.component */ "./src/app/sites/cards/new-card/new-card.component.ts");
































var routes = [
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    // sites
    // { path: 'khamis-harb-ekfalni', component:KhamisHarbEkfalniComponent },
    // { path: 'khamis-harb-ekfalni-steps', component:KhamisHarbEkfalniStepsComponent },
    // { path: 'khamis-harb-waqf', component:KhamisHarbWaqfComponent },
    // { path: 'kh-waqf', component:KhWaqfComponent },
    { path: 'orphans-public/:org_id/:gender', component: _orphans_orphans_public_table_orphans_public_table_component__WEBPACK_IMPORTED_MODULE_12__["OrphansPublicTableComponent"] },
    { path: 'makfouled-orphans/:org_id', component: _orphans_makfouled_orphans_makfouled_orphans_component__WEBPACK_IMPORTED_MODULE_14__["MakfouledOrphansComponent"] },
    { path: 'marwa-ekfalni', component: _sites_marwa_marwa_ekfalni_marwa_ekfalni_component__WEBPACK_IMPORTED_MODULE_9__["MarwaEkfalniComponent"] },
    { path: 'mr-waqf', component: _sites_marwa_mr_waqf_mr_waqf_component__WEBPACK_IMPORTED_MODULE_15__["MrWaqfComponent"] },
    { path: 'raith-waqf', component: _sites_raith_raith_waqf_raith_waqf_component__WEBPACK_IMPORTED_MODULE_16__["RaithWaqfComponent"] },
    { path: 'raith-projects', component: _sites_raith_projects_raith_projects_component__WEBPACK_IMPORTED_MODULE_17__["RaithProjectsComponent"] },
    { path: 'dm-steps', component: _sites_dm_steps_dm_steps_component__WEBPACK_IMPORTED_MODULE_18__["DmStepsComponent"] },
    // { path: 'raith-steps', component:RaithStepsComponent },
    { path: 'aidab-waqf', component: _sites_aidab_aidab_waqf_aidab_waqf_component__WEBPACK_IMPORTED_MODULE_19__["AidabWaqfComponent"] },
    { path: 'aidab-ekfalni', component: _sites_aidab_aidab_ekfalni_aidab_ekfalni_component__WEBPACK_IMPORTED_MODULE_20__["AidabEkfalniComponent"] },
    { path: 'aidab-steps', component: _sites_aidab_steps_aidab_steps_component__WEBPACK_IMPORTED_MODULE_21__["AidabStepsComponent"] },
    { path: 'arish-waqf', component: _sites_arish_arish_waqf_arish_waqf_component__WEBPACK_IMPORTED_MODULE_22__["ArishWaqfComponent"] },
    { path: 'arish-projects', component: _sites_arish_arish_projects_arish_projects_component__WEBPACK_IMPORTED_MODULE_23__["ArishProjectsComponent"] },
    { path: 'arish-steps', component: _sites_arish_arish_steps_arish_steps_component__WEBPACK_IMPORTED_MODULE_24__["ArishStepsComponent"] },
    { path: 'new-gift', component: _sites_gits_new_gift_new_gift_component__WEBPACK_IMPORTED_MODULE_25__["NewGiftComponent"] },
    { path: 'choose-category', component: _sites_cards_choose_category_choose_category_component__WEBPACK_IMPORTED_MODULE_26__["ChooseCategoryComponent"] },
    { path: 'choose-card/:category', component: _sites_cards_choose_card_choose_card_component__WEBPACK_IMPORTED_MODULE_27__["ChooseCardComponent"] },
    { path: 'save-card/:category/:card', component: _sites_cards_save_card_save_card_component__WEBPACK_IMPORTED_MODULE_28__["SaveCardComponent"] },
    { path: 'new-card/:category/:card', component: _sites_cards_new_card_new_card_component__WEBPACK_IMPORTED_MODULE_31__["NewCardComponent"] },
    { path: 'cards-list', component: _cards_cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_29__["CardsListComponent"] },
    { path: 'fill-card/:card', component: _cards_fill_card_fill_card_component__WEBPACK_IMPORTED_MODULE_30__["FillCardComponent"] },
    { path: 'fill-card/:card', component: _cards_fill_card_fill_card_component__WEBPACK_IMPORTED_MODULE_30__["FillCardComponent"] },
    // { path: 'kaf-approve', component:KafalaApproveComponent }, // صفحة اعتماد الكفالة
    {
        path: 'login',
        component: _core_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        canActivate: [_services_before_login_service__WEBPACK_IMPORTED_MODULE_5__["BeforeLoginService"]]
    },
    {
        path: 'signup',
        component: _core_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
        canActivate: [_services_before_login_service__WEBPACK_IMPORTED_MODULE_5__["BeforeLoginService"]]
    },
    { path: '', canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_6__["AfterLoginService"]], children: [
            { path: 'orphans/:gender', component: _orphans_orphans_table_orphans_table_component__WEBPACK_IMPORTED_MODULE_8__["OrphansTableComponent"] },
            { path: 'new-saudi-orphan/:gender', component: _orphans_new_saudi_orphan_new_saudi_orphan_component__WEBPACK_IMPORTED_MODULE_13__["NewSaudiOrphanComponent"] },
            { path: 'new-non-saudi-orphan', component: _orphans_new_non_saudi_orphan_new_non_saudi_orphan_component__WEBPACK_IMPORTED_MODULE_7__["NewNonSaudiOrphanComponent"] },
            { path: 'new-org', component: _orgs_new_org_new_org_component__WEBPACK_IMPORTED_MODULE_10__["NewOrgComponent"] },
            { path: 'kafeels-list', component: _kafeels_kefeels_list_kefeels_list_component__WEBPACK_IMPORTED_MODULE_11__["KefeelsListComponent"] }
        ] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar [style.display]=\"navBar\"></app-navbar>\r\n<router-outlet></router-outlet>\r\n<!-- <app-footer></app-footer> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_orphan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/orphan.service */ "./src/app/shared/orphan.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(orphanService) {
        this.orphanService = orphanService;
        this.title = 'orphan-web';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orphanService.navBarStatus.subscribe(function (navBar) { return _this.navBar = navBar; });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_orphan_service__WEBPACK_IMPORTED_MODULE_2__["OrphanService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/material */ "./src/app/shared/material.ts");
/* harmony import */ var _shared_orphan_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/orphan.service */ "./src/app/shared/orphan.service.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _orphans_new_non_saudi_orphan_new_non_saudi_orphan_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./orphans/new-non-saudi-orphan/new-non-saudi-orphan.component */ "./src/app/orphans/new-non-saudi-orphan/new-non-saudi-orphan.component.ts");
/* harmony import */ var _orphans_orphans_table_orphans_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./orphans/orphans-table/orphans-table.component */ "./src/app/orphans/orphans-table/orphans-table.component.ts");
/* harmony import */ var _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/navbar/navbar.component */ "./src/app/core/navbar/navbar.component.ts");
/* harmony import */ var _core_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/login/login.component */ "./src/app/core/login/login.component.ts");
/* harmony import */ var _core_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/signup/signup.component */ "./src/app/core/signup/signup.component.ts");
/* harmony import */ var _core_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/profile/profile.component */ "./src/app/core/profile/profile.component.ts");
/* harmony import */ var _core_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/password/request-reset/request-reset.component */ "./src/app/core/password/request-reset/request-reset.component.ts");
/* harmony import */ var _core_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/password/response-reset/response-reset.component */ "./src/app/core/password/response-reset/response-reset.component.ts");
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/jarwis.service */ "./src/app/services/jarwis.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_after_login_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/after-login.service */ "./src/app/services/after-login.service.ts");
/* harmony import */ var _services_before_login_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/before-login.service */ "./src/app/services/before-login.service.ts");
/* harmony import */ var _shared_token_interceptor_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/token-interceptor.service */ "./src/app/shared/token-interceptor.service.ts");
/* harmony import */ var _orphans_edit_orphan_edit_orphan_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./orphans/edit-orphan/edit-orphan.component */ "./src/app/orphans/edit-orphan/edit-orphan.component.ts");
/* harmony import */ var _sites_sites_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sites/sites.module */ "./src/app/sites/sites.module.ts");
/* harmony import */ var _orgs_new_org_new_org_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./orgs/new-org/new-org.component */ "./src/app/orgs/new-org/new-org.component.ts");
/* harmony import */ var _kafeels_new_kafeel_new_kafeel_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./kafeels/new-kafeel/new-kafeel.component */ "./src/app/kafeels/new-kafeel/new-kafeel.component.ts");
/* harmony import */ var _kafeels_kefeels_list_kefeels_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./kafeels/kefeels-list/kefeels-list.component */ "./src/app/kafeels/kefeels-list/kefeels-list.component.ts");
/* harmony import */ var _kafeels_add_kafeel_to_orphan_add_kafeel_to_orphan_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./kafeels/add-kafeel-to-orphan/add-kafeel-to-orphan.component */ "./src/app/kafeels/add-kafeel-to-orphan/add-kafeel-to-orphan.component.ts");
/* harmony import */ var _orphans_orphans_public_table_orphans_public_table_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./orphans/orphans-public-table/orphans-public-table.component */ "./src/app/orphans/orphans-public-table/orphans-public-table.component.ts");
/* harmony import */ var _orphans_new_saudi_orphan_new_saudi_orphan_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./orphans/new-saudi-orphan/new-saudi-orphan.component */ "./src/app/orphans/new-saudi-orphan/new-saudi-orphan.component.ts");
/* harmony import */ var _orphans_makfouled_orphans_makfouled_orphans_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./orphans/makfouled-orphans/makfouled-orphans.component */ "./src/app/orphans/makfouled-orphans/makfouled-orphans.component.ts");
/* harmony import */ var _orphans_kafala_approve_kafala_approve_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./orphans/kafala-approve/kafala-approve.component */ "./src/app/orphans/kafala-approve/kafala-approve.component.ts");
/* harmony import */ var _cards_cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./cards/cards-list/cards-list.component */ "./src/app/cards/cards-list/cards-list.component.ts");
/* harmony import */ var _cards_fill_card_fill_card_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./cards/fill-card/fill-card.component */ "./src/app/cards/fill-card/fill-card.component.ts");
/* harmony import */ var _cards_preview_card_preview_card_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./cards/preview-card/preview-card.component */ "./src/app/cards/preview-card/preview-card.component.ts");








// toastr notification












// jwt services





// import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';


// import sites module

// new org component











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _orphans_new_non_saudi_orphan_new_non_saudi_orphan_component__WEBPACK_IMPORTED_MODULE_12__["NewNonSaudiOrphanComponent"],
                _orphans_orphans_table_orphans_table_component__WEBPACK_IMPORTED_MODULE_13__["OrphansTableComponent"],
                _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
                _core_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _core_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"],
                _core_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"],
                _core_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_18__["RequestResetComponent"],
                _core_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_19__["ResponseResetComponent"],
                _orphans_edit_orphan_edit_orphan_component__WEBPACK_IMPORTED_MODULE_26__["EditOrphanComponent"],
                _orgs_new_org_new_org_component__WEBPACK_IMPORTED_MODULE_28__["NewOrgComponent"],
                _kafeels_new_kafeel_new_kafeel_component__WEBPACK_IMPORTED_MODULE_29__["NewKafeelComponent"],
                _kafeels_kefeels_list_kefeels_list_component__WEBPACK_IMPORTED_MODULE_30__["KefeelsListComponent"],
                _kafeels_add_kafeel_to_orphan_add_kafeel_to_orphan_component__WEBPACK_IMPORTED_MODULE_31__["AddKafeelToOrphanComponent"],
                _orphans_orphans_public_table_orphans_public_table_component__WEBPACK_IMPORTED_MODULE_32__["OrphansPublicTableComponent"],
                _orphans_new_saudi_orphan_new_saudi_orphan_component__WEBPACK_IMPORTED_MODULE_33__["NewSaudiOrphanComponent"],
                _orphans_makfouled_orphans_makfouled_orphans_component__WEBPACK_IMPORTED_MODULE_34__["MakfouledOrphansComponent"],
                _orphans_kafala_approve_kafala_approve_component__WEBPACK_IMPORTED_MODULE_35__["KafalaApproveComponent"],
                _cards_cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_36__["CardsListComponent"],
                _cards_fill_card_fill_card_component__WEBPACK_IMPORTED_MODULE_37__["FillCardComponent"],
                _cards_preview_card_preview_card_component__WEBPACK_IMPORTED_MODULE_38__["PreviewCardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
                    timeOut: 2000,
                    positionClass: "toast-bottom-full-width"
                }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _shared_material__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _sites_sites_module__WEBPACK_IMPORTED_MODULE_27__["SitesModule"],
            ],
            providers: [_shared_orphan_service__WEBPACK_IMPORTED_MODULE_10__["OrphanService"], _services_jarwis_service__WEBPACK_IMPORTED_MODULE_20__["JarwisService"], _services_token_service__WEBPACK_IMPORTED_MODULE_21__["TokenService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"], _services_after_login_service__WEBPACK_IMPORTED_MODULE_23__["AfterLoginService"], _services_before_login_service__WEBPACK_IMPORTED_MODULE_24__["BeforeLoginService"],
                // { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
                // SnotifyService
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _shared_token_interceptor_service__WEBPACK_IMPORTED_MODULE_25__["TokenInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [_orphans_edit_orphan_edit_orphan_component__WEBPACK_IMPORTED_MODULE_26__["EditOrphanComponent"], _kafeels_add_kafeel_to_orphan_add_kafeel_to_orphan_component__WEBPACK_IMPORTED_MODULE_31__["AddKafeelToOrphanComponent"], _kafeels_new_kafeel_new_kafeel_component__WEBPACK_IMPORTED_MODULE_29__["NewKafeelComponent"], _cards_preview_card_preview_card_component__WEBPACK_IMPORTED_MODULE_38__["PreviewCardComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cards/cards-list/cards-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/cards/cards-list/cards-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\nwidth:100%;\r\nmax-width:950px;\r\nmargin:0 auto;\r\nfont-family: Cairo;\r\nfont-weight: 700;\r\ntext-align: center\r\n}\r\n\r\n#cards-list ul{\r\nmargin:0;\r\ntext-align:center;\r\nmargin:40px 0;\r\n}\r\n\r\n#cards-list li{\r\nlist-style: none;\r\nmargin:0 20px;\r\ndisplay:inline-block;\r\n}\r\n\r\n#categories ul{\r\nmax-width: 820px;\r\nmargin: 1em auto;\r\npadding:0;\r\ntext-align: center;\r\ndisplay: flex;\r\nflex-direction: row;\r\n}\r\n\r\n#categories ul li{\r\nlist-style: none;\r\nalign-self: flex-end;\r\nwidth:100%;\r\n}\r\n\r\n#categories ul li a{\r\ntext-decoration: none;\r\n}\r\n\r\nsvg{\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZHMvY2FyZHMtbGlzdC9jYXJkcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxVQUFVO0FBQ1YsZUFBZTtBQUNmLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1IsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2Isb0JBQW9CO0FBQ3BCOztBQUdBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixTQUFTO0FBQ1Qsa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCLFVBQVU7QUFDVjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBIiwiZmlsZSI6InNyYy9hcHAvY2FyZHMvY2FyZHMtbGlzdC9jYXJkcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxud2lkdGg6MTAwJTtcclxubWF4LXdpZHRoOjk1MHB4O1xyXG5tYXJnaW46MCBhdXRvO1xyXG5mb250LWZhbWlseTogQ2Fpcm87XHJcbmZvbnQtd2VpZ2h0OiA3MDA7XHJcbnRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4jY2FyZHMtbGlzdCB1bHtcclxubWFyZ2luOjA7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5tYXJnaW46NDBweCAwO1xyXG59XHJcblxyXG4jY2FyZHMtbGlzdCBsaXtcclxubGlzdC1zdHlsZTogbm9uZTtcclxubWFyZ2luOjAgMjBweDtcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcblxyXG4jY2F0ZWdvcmllcyB1bHtcclxubWF4LXdpZHRoOiA4MjBweDtcclxubWFyZ2luOiAxZW0gYXV0bztcclxucGFkZGluZzowO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbiNjYXRlZ29yaWVzIHVsIGxpe1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG5hbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxud2lkdGg6MTAwJTtcclxufVxyXG5cclxuI2NhdGVnb3JpZXMgdWwgbGkgYXtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5zdmd7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/cards/cards-list/cards-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/cards/cards-list/cards-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <header>\n    <img src=\"assets/sites/cards/header.png\" alt=\"\">\n    <img src=\"assets/sites/cards/fifa.png\" alt=\"\">\n  </header>\n\n  <h1 style=\"width:60%;background:#00BCBC;border-radius:30px; margin: 30px auto;color:white;padding:10px;font-family: 'Droid Arabic Kufi'\">\n    اختر نوع الاهداء\n  </h1>  \n\n</div>\n\n<div id=\"categories\">\n\n  <ul>\n    \n    <li>\n      <a routerLink=\"/choose-card/graduate\">\n        <img src=\"assets/sites/cards/icons/graduate.svg\" alt=\"\">\n      </a>\n    </li>\n    \n    <li>\n      <a routerLink=\"/choose-card/zawaj\">\n        <img src=\"assets/sites/cards/icons/zawaj.svg\" alt=\"\">\n      </a>\n    </li>\n    \n    <li>\n      <a routerLink=\"/choose-card/engagment\">\n        <img src=\"assets/sites/cards/icons/engagment.svg\" alt=\"\">\n      </a>\n    </li>\n    \n  </ul>\n\n  <ul>\n    \n    <li>\n      <a routerLink=\"/choose-card/general\">\n        <img src=\"assets/sites/cards/icons/general.svg\" alt=\"\">\n      </a>\n    </li>\n    \n    <li>\n      <a routerLink=\"/choose-card/ramadan\">\n        <img src=\"assets/sites/cards/icons/ramadan.svg\" alt=\"\">\n      </a>\n    </li>\n    \n    <li>\n      <a routerLink=\"/choose-card/eid\">\n        <img src=\"assets/sites/cards/icons/eid.svg\" alt=\"\">\n      </a>\n    </li>\n    \n  </ul>\n\n  <ul>\n    \n    <li>\n      <a routerLink=\"/choose-card/baby\">\n        <img src=\"assets/sites/cards/icons/baby.svg\" alt=\"\">\n      </a>\n    </li>\n    \n    <li>\n    </li>\n    \n    <li>\n    </li>\n    \n  </ul>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/cards/cards-list/cards-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/cards/cards-list/cards-list.component.ts ***!
  \**********************************************************/
/*! exports provided: CardsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsListComponent", function() { return CardsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardsListComponent = /** @class */ (function () {
    function CardsListComponent() {
    }
    CardsListComponent.prototype.ngOnInit = function () {
    };
    CardsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cards-list',
            template: __webpack_require__(/*! ./cards-list.component.html */ "./src/app/cards/cards-list/cards-list.component.html"),
            styles: [__webpack_require__(/*! ./cards-list.component.css */ "./src/app/cards/cards-list/cards-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardsListComponent);
    return CardsListComponent;
}());



/***/ }),

/***/ "./src/app/cards/fill-card/fill-card.component.css":
/*!*********************************************************!*\
  !*** ./src/app/cards/fill-card/fill-card.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\nwidth:100%;\r\nmax-width:950px;\r\nmargin:0 auto;\r\nfont-family: Cairo;\r\nfont-weight: 700;\r\ntext-align: center\r\n}\r\n\r\n#fill-card{\r\npadding-top:30px;\r\nfloat: right;\r\nwidth: 600px;\r\ntext-align: center;\r\n}\r\n\r\n#design{\r\nfloat: right;\r\nwidth: 250px;\r\n}\r\n\r\n#design h5{\r\npadding: 5px 0;\r\nborder-radius: 10px;\r\nwidth: 250px;\r\nmargin:0 auto 10px auto;\r\nbackground: black;\r\ncolor:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZHMvZmlsbC1jYXJkL2ZpbGwtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsVUFBVTtBQUNWLGVBQWU7QUFDZixhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsWUFBWTtBQUNaLFlBQVk7QUFDWjs7QUFFQTtBQUNBLGNBQWM7QUFDZCxtQkFBbUI7QUFDbkIsWUFBWTtBQUNaLHVCQUF1QjtBQUN2QixpQkFBaUI7QUFDakIsV0FBVztBQUNYIiwiZmlsZSI6InNyYy9hcHAvY2FyZHMvZmlsbC1jYXJkL2ZpbGwtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbndpZHRoOjEwMCU7XHJcbm1heC13aWR0aDo5NTBweDtcclxubWFyZ2luOjAgYXV0bztcclxuZm9udC1mYW1pbHk6IENhaXJvO1xyXG5mb250LXdlaWdodDogNzAwO1xyXG50ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuI2ZpbGwtY2FyZHtcclxucGFkZGluZy10b3A6MzBweDtcclxuZmxvYXQ6IHJpZ2h0O1xyXG53aWR0aDogNjAwcHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2Rlc2lnbntcclxuZmxvYXQ6IHJpZ2h0O1xyXG53aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbiNkZXNpZ24gaDV7XHJcbnBhZGRpbmc6IDVweCAwO1xyXG5ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG53aWR0aDogMjUwcHg7XHJcbm1hcmdpbjowIGF1dG8gMTBweCBhdXRvO1xyXG5iYWNrZ3JvdW5kOiBibGFjaztcclxuY29sb3I6d2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cards/fill-card/fill-card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/cards/fill-card/fill-card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <header>\n    <img src=\"assets/sites/cards/header.png\" alt=\"\">\n    <img src=\"assets/sites/cards/fifa.png\" alt=\"\">\n  </header>\n\n  <div id=\"fill-card\">\n\n    <h5 style=\"font-family:cairo\">عدد الإهداء الكلي: 20</h5>\n    <h5>عدد الإهداء المتبقية: 5</h5>\n\n    <form [formGroup]=\"form\" dir=\"rtl\" style=\"margin:30px;\" autocomplete=\"off\">\n      <div class=\"form-row\">\n\n        <div class=\"col-1\"></div>\n\n        <div class=\"form-group col-10\">\n          <label for=\"\">إلى</label>\n          <input type=\"text\" formControlName=\"to\" class=\"form-control\">\n        </div>\n\n      </div>\n\n      <div class=\"form-row\">\n        \n        <div class=\"col-1\"></div>\n\n        <div class=\"form-group col-10\">\n          <label for=\"\">من</label>\n          <input type=\"text\" formControlName=\"from\" class=\"form-control\">\n        </div>\n\n      </div>\n\n    </form>\n\n  </div>\n\n  <div id=\"design\">\n\n      <!-- <h5>الخطوبة</h5> -->\n\n      <div id=\"carouselExampleControls\" class=\"carousel slide\">\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item\" *ngFor=\"let image of images; let i = index\" [class.active]=\"i == card\">\n            <img id =\"{{i}}\" class=\"d-block w-100\" src=\"assets/sites/cards/slides/{{i}}.png\">\n          </div>\n        </div>\n        <a class=\"carousel-control-prev control\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\" (click)=\"getPrevIndex()\">\n          <span class=\"carousel-control-prev-icon\" style=\"position: relative;right:-40px;background:blue\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next control\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\" (click)=\"getNextIndex()\">\n          <span class=\"carousel-control-next-icon\" style=\"position: relative;left:-40px;background:blue\">السابق</span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n\n      <!-- <div>\n        <img src=\"assets/sites/cards/slides/1.png\" alt=\"\" width=\"240\">\n      </div> -->\n\n      <button class=\"btn btn-success\" [disabled]='form.invalid' (click)=\"previewCard(activeCard)\" type=\"submit\" style=\"margin-top:15px\">معاينة</button>\n\n  </div>\n\n  <!-- <button mat-icon-button style='color:rgb(71, 138, 160)' (click)=\"previewCard('engage')\"><mat-icon>edit</mat-icon></button> -->\n\n</div>"

/***/ }),

/***/ "./src/app/cards/fill-card/fill-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cards/fill-card/fill-card.component.ts ***!
  \********************************************************/
/*! exports provided: FillCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillCardComponent", function() { return FillCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _preview_card_preview_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../preview-card/preview-card.component */ "./src/app/cards/preview-card/preview-card.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FillCardComponent = /** @class */ (function () {
    function FillCardComponent(dialog, fb, route) {
        var _this = this;
        this.dialog = dialog;
        this.fb = fb;
        this.route = route;
        this.images = new Array(12);
        this.to = "";
        this.from = "";
        this.route.params.subscribe(function (params) { _this.card = params.card; _this.ngOnInit(); });
        this.activeCard = this.card;
        this.form = fb.group({
            from: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            to: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    FillCardComponent.prototype.getPrevIndex = function () {
        this.activeCard = $('div.active').index() == 0 ? 11 : $('div.active').index() - 1;
    };
    FillCardComponent.prototype.getNextIndex = function () {
        this.activeCard = $('div.active').index() == 11 ? 0 : $('div.active').index() + 1;
    };
    FillCardComponent.prototype.ngOnInit = function () {
        $('.carousel').carousel({
            interval: false,
        });
        // $('span').on('click', function(){
        //   alert("asdfdsf");
        // });
        // $('.btn-customized').on('click', function(){
        //   if( ! $(this).hasClass('disabled') ) {
        //     if( $(this).hasClass('btn-pause') ) {
        //         $('.carousel').carousel('pause');
        //     }
        //     else {
        //         $('.carousel').carousel('cycle');
        //     }
        //     $('.btn-pause, .btn-cycle').toggleClass('disabled');
        //     $(this).blur();
        //   }
        // });  
    };
    FillCardComponent.prototype.previewCard = function (activeCard) {
        this.to = this.form.controls['to'].value;
        this.from = this.form.controls['from'].value;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.data = {
            card: activeCard,
            to: this.to,
            from: this.from
        };
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = false;
        dialogConfig.width = '98%';
        dialogConfig.height = '950px';
        var dialogCallBack = this.dialog.open(_preview_card_preview_card_component__WEBPACK_IMPORTED_MODULE_3__["PreviewCardComponent"], dialogConfig);
        // dialogCallBack.afterClosed().subscribe(() => {
        //   this.getOrhans();
        // });
    };
    FillCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fill-card',
            template: __webpack_require__(/*! ./fill-card.component.html */ "./src/app/cards/fill-card/fill-card.component.html"),
            styles: [__webpack_require__(/*! ./fill-card.component.css */ "./src/app/cards/fill-card/fill-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], FillCardComponent);
    return FillCardComponent;
}());



/***/ }),

/***/ "./src/app/cards/preview-card/preview-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/cards/preview-card/preview-card.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n  font-family: Droid Arabic Kufi;\r\n  src: url('Droid.Arabic.Kufi_DownloadSoftware.iR_.ttf') format(\"opentype\");\r\n}\r\n\r\n\r\n#template{\r\n/* visibility: hidden; */\r\n}\r\n\r\n\r\n#white-div{\r\nheight: 850px;\r\nwidth: 850px;\r\nposition: relative;\r\ntop:-1700px;\r\noverflow: hidden;\r\nz-index: 1;\r\nmargin: 0 auto;\r\nbackground: white;\r\n}\r\n\r\n\r\n#myCard{\r\nheight: 850px;\r\nwidth: 850px;\r\nposition: relative;\r\ntop:-850px;\r\noverflow: hidden;\r\nz-index: 2;\r\nmargin: 0 auto;\r\n}\r\n\r\n\r\nh3{\r\nfont-family: 'Droid Arabic Kufi';\r\n}\r\n\r\n\r\n#controls{\r\nposition: relative;\r\ntop:-1650px;\r\n}\r\n\r\n\r\n#controls ul{\r\nmargin:0;\r\ntext-align:center;\r\n}\r\n\r\n\r\n#controls li{\r\ncolor:white;\r\nlist-style: none;\r\nmargin:0 20px;\r\ndisplay:inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZHMvcHJldmlldy1jYXJkL3ByZXZpZXctY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLHlFQUE2RjtBQUMvRjs7O0FBR0E7QUFDQSx3QkFBd0I7QUFDeEI7OztBQUVBO0FBQ0EsYUFBYTtBQUNiLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixVQUFVO0FBQ1YsY0FBYztBQUNkLGlCQUFpQjtBQUNqQjs7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1YsZ0JBQWdCO0FBQ2hCLFVBQVU7QUFDVixjQUFjO0FBQ2Q7OztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDOzs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1g7OztBQUVBO0FBQ0EsUUFBUTtBQUNSLGlCQUFpQjtBQUNqQjs7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jYXJkcy9wcmV2aWV3LWNhcmQvcHJldmlldy1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogRHJvaWQgQXJhYmljIEt1Zmk7XHJcbiAgc3JjOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL0Ryb2lkLkFyYWJpYy5LdWZpX0Rvd25sb2FkU29mdHdhcmUuaVJfLnR0ZikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbn1cclxuXHJcblxyXG4jdGVtcGxhdGV7XHJcbi8qIHZpc2liaWxpdHk6IGhpZGRlbjsgKi9cclxufVxyXG5cclxuI3doaXRlLWRpdntcclxuaGVpZ2h0OiA4NTBweDtcclxud2lkdGg6IDg1MHB4O1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnRvcDotMTcwMHB4O1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG56LWluZGV4OiAxO1xyXG5tYXJnaW46IDAgYXV0bztcclxuYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbiNteUNhcmR7XHJcbmhlaWdodDogODUwcHg7XHJcbndpZHRoOiA4NTBweDtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG50b3A6LTg1MHB4O1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG56LWluZGV4OiAyO1xyXG5tYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuaDN7XHJcbmZvbnQtZmFtaWx5OiAnRHJvaWQgQXJhYmljIEt1ZmknO1xyXG59XHJcblxyXG4jY29udHJvbHN7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudG9wOi0xNjUwcHg7XHJcbn1cclxuXHJcbiNjb250cm9scyB1bHtcclxubWFyZ2luOjA7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4jY29udHJvbHMgbGl7XHJcbmNvbG9yOndoaXRlO1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG5tYXJnaW46MCAyMHB4O1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cards/preview-card/preview-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/cards/preview-card/preview-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <div id='template' style=\"width:850px;height:850px;margin:0 auto;\" [ngSwitch]=\"card\">\n\n    <!-- الخطوبة -->\n    <div *ngSwitchCase=\"0\">\n      <div \n      style=\"border-radius: 20px;\n            padding:1px;\n            margin:0 auto;\n            text-align: center;\n            height:34px\">\n\n        <h3 style=\"margin-top:255px\">{{to}}</h3>\n      </div>\n      <div\n        style=\"border-radius: 20px;\n              padding:1px; width:450px;\n              margin:0 auto;text-align:\n              center;height:34px\">\n\n        <h3 style=\"margin-top:425px\">{{from}}</h3>\n      </div>\n    </div>\n\n    <!-- الزواج -->\n    <div *ngSwitchCase=\"1\">\n      <div \n      style=\"border-radius: 20px;\n            padding:1px;\n            margin-right:80px;\n            height:34px\">\n\n        <h3 style=\"margin-top:255px\">{{to}}</h3>\n      </div>\n      <div\n        style=\"border-radius: 20px;\n              padding:1px;\n              margin-right:80px;\n              height:34px\">\n\n        <h3 style=\"margin-top:430px\">{{from}}</h3>\n      </div>\n    </div>\n\n    <!-- التخرج -->\n    <div *ngSwitchCase=\"2\">\n      <div \n      style=\"border-radius: 20px;\n            padding:1px;\n            margin:0 auto;\n            text-align: center;\n            height:34px\">\n\n        <h3 style=\"margin-top:265px\">{{to}}</h3>\n      </div>\n      <div\n        style=\"border-radius: 20px;\n              padding:1px; width:450px;\n              margin:0 auto;text-align:\n              center;height:34px\">\n\n        <h3 style=\"margin-top:435px\">{{from}}</h3>\n      </div>\n    </div>\n\n    <!-- العيد1 -->\n    <div *ngSwitchCase=\"3\">\n      <div \n      style=\"border-radius: 20px;\n            padding:1px;\n            margin:0 auto;\n            text-align: center;\n            height:34px\">\n\n        <h3 style=\"margin-top:265px\">{{to}}</h3>\n      </div>\n      <div\n        style=\"border-radius: 20px;\n              padding:1px; width:450px;\n              margin:0 auto;text-align:\n              center;height:34px\">\n\n        <h3 style=\"margin-top:435px\">{{from}}</h3>\n      </div>\n    </div>\n\n    <!-- العيد2 -->\n    <div *ngSwitchCase=\"4\">\n      <div \n      style=\"border-radius: 20px;\n            padding:1px;\n            margin:0 auto;\n            text-align: center;\n            height:34px\">\n\n        <h3 style=\"margin-top:265px\">{{to}}</h3>\n      </div>\n      <div\n        style=\"border-radius: 20px;\n              padding:1px; width:450px;\n              margin:0 auto;text-align:\n              center;height:34px\">\n\n        <h3 style=\"margin-top:435px\">{{from}}</h3>\n      </div>\n    </div>\n\n    <!-- اهداء عام1 -->\n    <div *ngSwitchCase=\"5\">\n      <div \n      style=\"border-radius: 20px;\n            padding:1px;\n            margin:0 auto;\n            text-align: center;\n            height:34px\">\n\n        <h3 style=\"margin-top:265px\">{{to}}</h3>\n      </div>\n      <div\n        style=\"border-radius: 20px;\n              padding:1px; width:450px;\n              margin:0 auto;text-align:\n              center;height:34px\">\n\n        <h3 style=\"margin-top:435px\">{{from}}</h3>\n      </div>\n    </div>\n\n    <!-- اهداء عام2 -->\n    <div *ngSwitchCase=\"6\">\n      <div \n      style=\"border-radius: 20px;\n            padding:1px;\n            margin:0 auto;\n            text-align: center;\n            height:34px\">\n\n        <h3 style=\"margin-top:265px\">{{to}}</h3>\n      </div>\n      <div\n        style=\"border-radius: 20px;\n              padding:1px; width:450px;\n              margin:0 auto;text-align:\n              center;height:34px\">\n\n        <h3 style=\"margin-top:435px\">{{from}}</h3>\n      </div>\n    </div>\n\n    <!-- اهداء عام3 -->\n    <div *ngSwitchCase=\"7\">\n      <div \n      style=\"border-radius: 20px;\n            padding:1px;\n            margin:0 auto;\n            text-align: center;\n            height:34px\">\n\n        <h3 style=\"margin-top:265px\">{{to}}</h3>\n      </div>\n      <div\n        style=\"border-radius: 20px;\n              padding:1px; width:450px;\n              margin:0 auto;text-align:\n              center;height:34px\">\n\n        <h3 style=\"margin-top:435px\">{{from}}</h3>\n      </div>\n    </div>\n\n    <!-- رمضان1 -->\n    <div *ngSwitchCase=\"8\">\n      <div \n      style=\"border-radius: 20px;\n            padding:1px;\n            margin:0 auto;\n            text-align: center;\n            height:34px\">\n\n        <h3 style=\"margin-top:265px\">{{to}}</h3>\n      </div>\n      <div\n        style=\"border-radius: 20px;\n              padding:1px; width:450px;\n              margin:0 auto;text-align:\n              center;height:34px\">\n\n        <h3 style=\"margin-top:435px\">{{from}}</h3>\n      </div>\n    </div>\n\n    <!-- رمضان2 -->\n    <div *ngSwitchCase=\"9\">\n      <div \n      style=\"border-radius: 20px;\n            padding:1px;\n            margin:0 auto;\n            text-align: center;\n            height:34px\">\n\n        <h3 style=\"margin-top:265px\">{{to}}</h3>\n      </div>\n      <div\n        style=\"border-radius: 20px;\n              padding:1px; width:450px;\n              margin:0 auto;text-align:\n              center;height:34px\">\n\n        <h3 style=\"margin-top:435px\">{{from}}</h3>\n      </div>\n    </div>\n\n    <!-- المواليد1 -->\n    <div *ngSwitchCase=\"10\">\n      <div \n      style=\"border-radius: 20px;\n            padding:1px;\n            margin:0 auto;\n            text-align: center;\n            height:34px\">\n\n        <h3 style=\"margin-top:265px\">{{to}}</h3>\n      </div>\n      <div\n        style=\"border-radius: 20px;\n              padding:1px; width:450px;\n              margin:0 auto;text-align:\n              center;height:34px\">\n\n        <h3 style=\"margin-top:435px\">{{from}}</h3>\n      </div>\n    </div>\n\n    <!-- المواليد2 -->\n    <div *ngSwitchCase=\"11\">\n      <div \n      style=\"border-radius: 20px;\n            padding:1px;\n            margin:0 auto;\n            text-align: center;\n            height:34px\">\n\n        <h3 style=\"margin-top:265px\">{{to}}</h3>\n      </div>\n      <div\n        style=\"border-radius: 20px;\n              padding:1px; width:450px;\n              margin:0 auto;text-align:\n              center;height:34px\">\n\n        <h3 style=\"margin-top:435px\">{{from}}</h3>\n      </div>\n    </div>\n\n\n  </div>\n\n\n  <div id=\"myCard\">\n    \n  </div>\n\n  <div id=\"white-div\">\n    \n  </div>\n\n\n  <div id=\"controls\">\n  <h2 style=\"text-align:center;margin-bottom:20px\">\n    اضغط على الصورة ضغطة مطولة لمشاركة الصورة\n  </h2>\n    <ul>\n\n      <!-- <li>\n        <a type=\"button\" class=\"btn btn-success btn-lg\" id=\"downloadLink\" (click)=\"saveCard()\" style=\"width:200px;height:80px;font-size:38px;line-height: 60px\">حفظ</a>\n      </li>\n\n      <li>\n        <a type=\"button\" class=\"btn btn-primary btn-lg\" style=\"width:200px;height:80px;font-size:38px;line-height: 60px\">مشاركة</a>\n      </li> -->\n\n      <li>\n        <a type=\"button\" class=\"btn btn-primary btn-lg\" (click)='onClose()' style=\"width:200px;height:80px;font-size:40px;line-height: 50px\">رجوع</a>\n      </li>\n\n    </ul>\n  </div>\n\n\n\n\n\n\n\n\n<!-- <div style=\"border-radius: 20px; background:#ecd9b5;padding:1px; width:450px;margin:0 auto;text-align: center;height:34px\">\n  <h3>{{to}}</h3>\n</div>\n<div style=\"border-radius: 20px; background:#ecd9b5;padding:1px; width:450px;margin:0 auto;text-align: center;margin-top:168px;height:34px\">\n  <h3>{{from}}</h3>\n</div> -->\n\n\n\n"

/***/ }),

/***/ "./src/app/cards/preview-card/preview-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cards/preview-card/preview-card.component.ts ***!
  \**************************************************************/
/*! exports provided: PreviewCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewCardComponent", function() { return PreviewCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);




var PreviewCardComponent = /** @class */ (function () {
    function PreviewCardComponent(dialogRef, dialog, data) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        $('#cdk-overlay-0').css("max-width", "100vw");
        this.card = data.card;
        this.to = data.to;
        this.from = data.from;
    }
    PreviewCardComponent.prototype.ngOnInit = function () {
        $('.cdk-overlay-pane').css("max-width", "100vw");
        $('.mat-dialog-container').css("overflow", "hidden");
        this.createCard(this.to, this.from);
        console.log(this.card);
    };
    PreviewCardComponent.prototype.createCard = function (to, from) {
        document.getElementById("template").style.backgroundImage = "url('../../assets/sites/cards/cards/" + this.card + ".jpg')";
        html2canvas__WEBPACK_IMPORTED_MODULE_3___default()(document.getElementById("template")).then(function (canvas) {
            document.getElementById("myCard").appendChild(canvas);
            canvas = document.getElementById("myCard").children[0];
            var ctx = canvas.getContext('2d');
            // ctx.font = '32px cairo';
            // ctx.textAlign = "center";
            // ctx.fillText(to, 375, 375);
            // ctx.fillText(from, 375, 623);
            ctx.textBaseline = "top";
            ctx.fillStyle = 'black';
            ctx.direction = 'rtl';
            canvas.setAttribute("id", "canvas");
            canvas.setAttribute("data-caman-hidpi-disabled", true);
            // const link = document.getElementById("downloadLink");
            // link.setAttribute("href", canvas.toDataURL());
            var img = canvas.toDataURL("image/png");
            // write('<img src="'+img+'"/>');
            document.getElementById('myCard').innerHTML = "<a href='" + img + "'download> <img src='" + img + "' width='850'> </a>";
            // document.getElementById("downloadLink").setAttribute("download", "card.png");
            // document.getElementById("downloadLink").innerHTML = "<img src='" + img +  "' width='850' style='visibility:hidden'>"
        });
    };
    // saveCard(){
    //   this.createCard(this.to,this.from);
    // }
    PreviewCardComponent.prototype.onClose = function () {
        // this.newBreadwinnerForm.reset();
        this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PreviewCardComponent.prototype, "card", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PreviewCardComponent.prototype, "to", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PreviewCardComponent.prototype, "from", void 0);
    PreviewCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preview-card',
            template: __webpack_require__(/*! ./preview-card.component.html */ "./src/app/cards/preview-card/preview-card.component.html"),
            styles: [__webpack_require__(/*! ./preview-card.component.css */ "./src/app/cards/preview-card/preview-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], Object])
    ], PreviewCardComponent);
    return PreviewCardComponent;
}());



/***/ }),

/***/ "./src/app/core/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/core/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/core/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/core/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-4 col-8 offset-2\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Login Here</div>\r\n    <div class=\"card-body\">\r\n      <form #loginForm=ngForm (ngSubmit)=\"onSubmit()\">\r\n\r\n        <div class=\"alert alert-danger\" [hidden]=\"!error\">\r\n          {{error}}\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">البريد الإلكتروني</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"email\" name=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"\" [(ngModel)]=\"form.email\" required>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">كلمة المرور</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"password\" name=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"\" [(ngModel)]=\"form.password\"\r\n              required>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-10 offset-2\">\r\n\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\">دخول</button>\r\n\r\n            <!-- <a routerLink=\"/signup\" class=\"btn btn-info float-right\">Sign Up</a> -->\r\n\r\n          </div>\r\n        </div>\r\n        <!-- <small class=float-right>\r\n          <a routerLink=\"/request-password-reset\">Reset Password</a>\r\n        </small> -->\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/jarwis.service */ "./src/app/services/jarwis.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(Jarwis, Token, router, Auth) {
        this.Jarwis = Jarwis;
        this.Token = Token;
        this.router = router;
        this.Auth = Auth;
        this.form = {
            email: null,
            password: null
        };
        this.error = null;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.login(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleError(error); });
    };
    LoginComponent.prototype.handleResponse = function (data) {
        this.Token.handle(data.access_token);
        this.Auth.changeAuthStatus(true);
        this.router.navigateByUrl('/new-saudi-orphan/male');
    };
    LoginComponent.prototype.handleError = function (error) {
        this.error = error.error.error;
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/core/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/core/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/navbar/navbar.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light justify-content-between\">\r\n  <div>\r\n    <a class=\"navbar-brand\" routerLink=\"login\" *ngIf=\"!loggedIn\">تسجيل الدخول</a>\r\n    <a class=\"navbar-brand\" href=\"#\" (click)=\"logout($event)\" *ngIf=\"loggedIn\">خروج</a>\r\n  </div>\r\n\r\n</nav>"

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(Auth, router, Token) {
        this.Auth = Auth;
        this.router = router;
        this.Token = Token;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Auth.authStatus.subscribe(function (value) { return _this.loggedIn = value; });
    };
    NavbarComponent.prototype.logout = function (event) {
        event.preventDefault();
        this.Token.remove();
        this.Auth.changeAuthStatus(false);
        this.router.navigateByUrl('/login');
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/core/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/core/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/core/password/request-reset/request-reset.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/core/password/request-reset/request-reset.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFzc3dvcmQvcmVxdWVzdC1yZXNldC9yZXF1ZXN0LXJlc2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/password/request-reset/request-reset.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/core/password/request-reset/request-reset.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  request-reset works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/core/password/request-reset/request-reset.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/password/request-reset/request-reset.component.ts ***!
  \************************************************************************/
/*! exports provided: RequestResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestResetComponent", function() { return RequestResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RequestResetComponent = /** @class */ (function () {
    function RequestResetComponent() {
    }
    RequestResetComponent.prototype.ngOnInit = function () {
    };
    RequestResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-reset',
            template: __webpack_require__(/*! ./request-reset.component.html */ "./src/app/core/password/request-reset/request-reset.component.html"),
            styles: [__webpack_require__(/*! ./request-reset.component.css */ "./src/app/core/password/request-reset/request-reset.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RequestResetComponent);
    return RequestResetComponent;
}());



/***/ }),

/***/ "./src/app/core/password/response-reset/response-reset.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/core/password/response-reset/response-reset.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFzc3dvcmQvcmVzcG9uc2UtcmVzZXQvcmVzcG9uc2UtcmVzZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/core/password/response-reset/response-reset.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/core/password/response-reset/response-reset.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  response-reset works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/core/password/response-reset/response-reset.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/password/response-reset/response-reset.component.ts ***!
  \**************************************************************************/
/*! exports provided: ResponseResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseResetComponent", function() { return ResponseResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResponseResetComponent = /** @class */ (function () {
    function ResponseResetComponent() {
    }
    ResponseResetComponent.prototype.ngOnInit = function () {
    };
    ResponseResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-response-reset',
            template: __webpack_require__(/*! ./response-reset.component.html */ "./src/app/core/password/response-reset/response-reset.component.html"),
            styles: [__webpack_require__(/*! ./response-reset.component.css */ "./src/app/core/password/response-reset/response-reset.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResponseResetComponent);
    return ResponseResetComponent;
}());



/***/ }),

/***/ "./src/app/core/profile/profile.component.css":
/*!****************************************************!*\
  !*** ./src/app/core/profile/profile.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/profile/profile.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/profile/profile.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  profile works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/core/profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_orphan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/orphan.service */ "./src/app/shared/orphan.service.ts");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/token.service */ "./src/app/services/token.service.ts");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(orphanService, tokenService) {
        this.orphanService = orphanService;
        this.tokenService = tokenService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/core/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/core/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_orphan_service__WEBPACK_IMPORTED_MODULE_2__["OrphanService"], src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/core/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>nice</h1>\r\n\r\n<div class=\"mt-4 col-8 offset-2\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Register Here</div>\r\n    <div class=\"card-body\">\r\n      <form #signupForm=ngForm (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\r\n\r\n\r\n        <div class=\"form-group row\">\r\n          <label for=\"inputorgid3\" class=\"col-sm-2 col-form-label\">اسم الجمعية</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" name=\"org_id\" class=\"form-control\" placeholder=\"Orgnization Name\" [(ngModel)]=\"form.org_id\" required>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label for=\"inputName3\" class=\"col-sm-2 col-form-label\">Name</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" name=\"name\" class=\"form-control\" id=\"inputname3\" placeholder=\"Name\" [(ngModel)]=\"form.name\" required>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Email</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"email\" name=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\" [(ngModel)]=\"form.email\" required>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label for=\"inputPasswordConfirmation3\" class=\"col-sm-2 col-form-label\">Password</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"password\" name=\"password\" class=\"form-control\" id=\"inputPasswordConfirmation3\" placeholder=\"Confirm Password\"\r\n              [(ngModel)]=\"form.password\" required>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Confirm Password</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"password\" name=\"password_confirmation\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\" [(ngModel)]=\"form.password_confirmation\"\r\n              required>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-10 offset-2\">\r\n\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!signupForm.valid\">Sign Up</button>\r\n\r\n            <a routerLink=\"/login\" class=\"btn btn-info float-right\">Sign in</a>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/core/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/jarwis.service */ "./src/app/services/jarwis.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(Jarwis, Token, router) {
        this.Jarwis = Jarwis;
        this.Token = Token;
        this.router = router;
        this.form = {
            org_id: null,
            email: null,
            name: null,
            password: null,
            password_confirmation: null
        };
        this.error = [];
    }
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.signup(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleError(error); });
    };
    SignupComponent.prototype.handleResponse = function (data) {
        this.Token.handle(data.access_token);
        this.router.navigateByUrl('/new-saudi-orphan/male');
    };
    SignupComponent.prototype.handleError = function (error) {
        this.error = error.error.errors;
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/core/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/core/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\nposition: fixed;\r\nbottom: 0;\r\nwidth: 100%;\r\nheight: 130px;\r\nbackground-color: #f5f5f5;\r\npadding:15px;\r\n}\r\n\r\na{\r\ncolor:#828282; \r\n}\r\n\r\n.row{\r\nmargin-bottom:5px;\r\n}\r\n\r\nh6{\r\nfont-weight: normal;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsZUFBZTtBQUNmLFNBQVM7QUFDVCxXQUFXO0FBQ1gsYUFBYTtBQUNiLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1o7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG5wb3NpdGlvbjogZml4ZWQ7XHJcbmJvdHRvbTogMDtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTMwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbnBhZGRpbmc6MTVweDtcclxufVxyXG5cclxuYXtcclxuY29sb3I6IzgyODI4MjsgXHJcbn1cclxuXHJcbi5yb3d7XHJcbm1hcmdpbi1ib3R0b206NXB4O1xyXG59XHJcblxyXG5oNntcclxuZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n    \r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-3\"></div>\r\n\r\n      <div class=\"col-3\">\r\n\r\n        <h6>\r\n          <a routerLink=\"/new-saudi-orphan/male\" >\r\n            إضافة سعودي (ذكر)\r\n          </a>\r\n        </h6>\r\n\r\n      </div>  \r\n\r\n      <div class=\"col-1\"></div>\r\n              \r\n      <div class=\"col-3\">\r\n\r\n        <h6>\r\n          <a routerLink=\"/orphans/male\" >\r\n            بيان السعوديين (ذكور)\r\n          </a>\r\n        </h6>\r\n\r\n      </div>  \r\n              \r\n    </div>\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-3\"></div>\r\n\r\n      <div class=\"col-3\">\r\n\r\n        <h6>\r\n          <a routerLink=\"/new-saudi-orphan/female\" >\r\n            إضافة سعودي (أنثى)\r\n          </a>\r\n        </h6>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-1\"></div>\r\n\r\n      <div class=\"col-3\">\r\n\r\n        <h6>\r\n          <a routerLink=\"/orphans/female\" >\r\n            بيان السعوديين (إناث)\r\n          </a>\r\n        </h6>\r\n\r\n      </div>  \r\n                  \r\n    </div>\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-3\"></div>\r\n\r\n      <div class=\"col-3\">\r\n\r\n        <h6>\r\n          <a routerLink=\"/kafeels-list\" >\r\n            بيان الكفلاء\r\n          </a>\r\n        </h6>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-1\"></div>\r\n\r\n      <div class=\"col-3\">\r\n\r\n      </div>  \r\n                  \r\n    </div>\r\n\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_orphan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/orphan.service */ "./src/app/shared/orphan.service.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(orphanService) {
        this.orphanService = orphanService;
        this.user = {
            name: '',
            email: '',
            org_id: ''
        };
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    FooterComponent.prototype.getUser = function () {
        var _this = this;
        this.orphanService.getUser().subscribe(function (user) {
            _this.user = user;
        });
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_orphan_service__WEBPACK_IMPORTED_MODULE_2__["OrphanService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/kafeels/add-kafeel-to-orphan/add-kafeel-to-orphan.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/kafeels/add-kafeel-to-orphan/add-kafeel-to-orphan.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\nmargin-bottom:30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2FmZWVscy9hZGQta2FmZWVsLXRvLW9ycGhhbi9hZGQta2FmZWVsLXRvLW9ycGhhbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0JBQWtCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAva2FmZWVscy9hZGQta2FmZWVsLXRvLW9ycGhhbi9hZGQta2FmZWVsLXRvLW9ycGhhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxubWFyZ2luLWJvdHRvbTozMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/kafeels/add-kafeel-to-orphan/add-kafeel-to-orphan.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/kafeels/add-kafeel-to-orphan/add-kafeel-to-orphan.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"background:#0063b0;color:white;margin-bottom: 40px\">\r\n\r\n  <div class=\"col-4\"></div>\r\n\r\n  <div class=\"col-4\">\r\n    <h1 style=\"text-align: center\" > تسجيل كفالة إلى: <span style=\"color:yellow\"></span>  </h1>\r\n  </div>\r\n\r\n  <div class=\"col-3\"></div>\r\n\r\n  <div class=\"col-1\" style=\"text-align:left\">\r\n    <button class=\"btn-dialog-close\" mat-mini-fab style=\"background:white;color:rgb(113, 110, 255)\" (click)='onClose()' tabindex=\"-1\"><mat-icon>clear</mat-icon></button>\r\n  </div>\r\n  \r\n</mat-toolbar>\r\n\r\n<div class=\"container\">\r\n\r\n<form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\r\n  \r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-6\">\r\n      <input type=\"text\" class=\"form-control\" disabled value=\"{{ makfoolName }}\">\r\n    </div>\r\n\r\n    <div class=\"col-6 form-group\">\r\n      <select class=\"form-control\" \r\n              required\r\n              name=\"kafeel\"\r\n              #kafeel=\"ngModel\"\r\n              [(ngModel)]=\"orphan.kafeel\"\r\n              [class.is-invalid]=\"kafeel.invalid && kafeel.touched\">\r\n\r\n        <option value=\"\">اختار كفيل</option>\r\n        <option *ngFor=\"let kafeel of kafeels\" value=\"{{ kafeel.id }}\">{{ kafeel.name  + \" \" + kafeel.mobile}}</option>\r\n\r\n      </select>\r\n      <small [class.d-none]=\"kafeel.valid || kafeel.untouched\" class=\"text-danger\">يجب اختيار كفيل</small>\r\n\r\n    </div>    \r\n\r\n  </div>\r\n    \r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-6 form-group\">\r\n      <select class=\"form-control\" \r\n              required\r\n              name=\"kafalaType\"\r\n              #kafalaType=\"ngModel\"\r\n              [(ngModel)]=\"orphan.kafalaType\"\r\n              [class.is-invalid]=\"kafalaType.invalid && kafalaType.touched\">\r\n\r\n        <option value=\"\">نوع الكفالة</option>\r\n        <option value=\" شهرية\">كفالة شهرية</option>\r\n        <option value=\" نصف سنوية\">كفالة نصف سنوية</option>\r\n        <option value=\" سنوية\">كفالة سنوية</option>\r\n\r\n      </select>\r\n      <small [class.d-none]=\"kafalaType.valid || kafalaType.untouched\" class=\"text-danger\">يجب اختيار نوع الكفالة</small>\r\n    \r\n    </div>\r\n  \r\n    <div class=\"col-6 form-group\">\r\n      <select class=\"form-control\" \r\n              required\r\n              name=\"amount\"\r\n              #amount=\"ngModel\"\r\n              [(ngModel)]=\"orphan.amount\"\r\n              [class.is-invalid]=\"amount.invalid && amount.touched\">\r\n\r\n        <option value=\"\">المبلغ</option>\r\n        <option value=\"200\">200 ريال</option>\r\n        <option value=\"1200\">1200 ريال</option>\r\n        <option value=\"2400\">2400 ريال</option>\r\n\r\n      </select>\r\n      <small [class.d-none]=\"amount.valid || amount.untouched\" class=\"text-danger\">يجب اختيار قيمة الكفالة</small>\r\n    \r\n    </div>\r\n  \r\n\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-12\" style=\"text-align:left\">\r\n      <button mat-raised-button color=\"primary\" type=\"submit\" style=\"font-size:20px;background:#0063b0;width:10%\">حفظ</button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/kafeels/add-kafeel-to-orphan/add-kafeel-to-orphan.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/kafeels/add-kafeel-to-orphan/add-kafeel-to-orphan.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddKafeelToOrphanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddKafeelToOrphanComponent", function() { return AddKafeelToOrphanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_orphan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/orphan.service */ "./src/app/shared/orphan.service.ts");





var AddKafeelToOrphanComponent = /** @class */ (function () {
    function AddKafeelToOrphanComponent(orphanService, tostr, dialogRef, data) {
        this.orphanService = orphanService;
        this.tostr = tostr;
        this.dialogRef = dialogRef;
        this.today = new Date();
        this.dd = this.today.getDate();
        this.mm = this.today.getMonth() + 1; //January is 0!
        this.yyyy = this.today.getFullYear();
        this.user = {
            name: '',
            email: '',
            org_id: ''
        };
        this.orphan = {
            kafeel: "",
            kafalaType: "",
            amount: ""
            // kafalaDate: new Date()
        };
        this.orphan_id = data.orphan_id;
    }
    AddKafeelToOrphanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orphanService.getOrphan(this.orphan_id).subscribe(function (data) {
            _this.makfoolName = data.firstName + " " + data.secondName + " " + data.thirdName + " " + data.title;
        });
        this.orphanService.getUser().subscribe(function (user) {
            _this.user = user;
            _this.org_id = user.org_id;
            _this.getKafeels();
        });
    };
    AddKafeelToOrphanComponent.prototype.getKafeels = function () {
        var _this = this;
        this.orphanService.getKafeels(this.org_id).subscribe(function (res) {
            _this.kafeels = res;
        });
    };
    AddKafeelToOrphanComponent.prototype.onSubmit = function () {
        var _this = this;
        this.orphanService.getOrphan(this.orphan_id).subscribe(function (data) {
            _this.orphan.id = data.id;
            _this.orphan.makfoul = 1;
            _this.orphanService.addKafeelToOrphan(_this.orphan)
                .subscribe(function (res) {
                _this.tostr.success('تم تسجيل كفالة بنجاح');
                _this.dialogRef.close();
            }, function (err) { return _this.tostr.error('خطأ ' + err); }
            // err => console.error(err)
            );
        });
        console.log(this.orphan);
    };
    AddKafeelToOrphanComponent.prototype.onClose = function () {
        // this.newBreadwinnerForm.reset();
        this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AddKafeelToOrphanComponent.prototype, "orphan_id", void 0);
    AddKafeelToOrphanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-kafeel-to-orphan',
            template: __webpack_require__(/*! ./add-kafeel-to-orphan.component.html */ "./src/app/kafeels/add-kafeel-to-orphan/add-kafeel-to-orphan.component.html"),
            styles: [__webpack_require__(/*! ./add-kafeel-to-orphan.component.css */ "./src/app/kafeels/add-kafeel-to-orphan/add-kafeel-to-orphan.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_orphan_service__WEBPACK_IMPORTED_MODULE_4__["OrphanService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], AddKafeelToOrphanComponent);
    return AddKafeelToOrphanComponent;
}());



/***/ }),

/***/ "./src/app/kafeels/kefeels-list/kefeels-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/kafeels/kefeels-list/kefeels-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2thZmVlbHMva2VmZWVscy1saXN0L2tlZmVlbHMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/kafeels/kefeels-list/kefeels-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/kafeels/kefeels-list/kefeels-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <mat-toolbar style='background:#CDEBFE;margin-bottom: 10px'>\r\n\r\n    <span style=\"margin:0 auto;font-weight: bold\">\r\n\r\n      <h2>بيان كفلاء {{user.name}}</h2>\r\n\r\n    </span>\r\n    <button mat-flat-button (click)='onCreateNew()' style=\"font-size:18px;background:#0C457E;color:white;border-radius: 10px;\">\r\n      <mat-icon style=\"margin-right:10px;color:white\">add</mat-icon>إضافة كفيل\r\n    </button>\r\n    \r\n  </mat-toolbar>\r\n\r\n  <div class=\"data-table\" style=\"padding-bottom:100px\">\r\n    \r\n    <mat-form-field style=\"width:30%\">\r\n        <mat-icon>بحث</mat-icon><input matInput (keyup)=\"applyFilter($event.target.value)\">\r\n    </mat-form-field>\r\n    \r\n\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n      <ng-container matColumnDef=\"index\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"40px\" style=\"flex: 0 0 10%;\">  <button mat-button>#</button> </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let kafeel let i= index;\" fxFlex=\"40px\" style=\"flex: 0 0 10%;\"> <button mat-button style=\"font-weight: bold\">{{ i+1 }}</button></mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"name\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> الاسم </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let kafeel\"> {{kafeel.name}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"city\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> المدينة </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let kafeel\"> {{kafeel.city}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"mobile\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> جوال </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let kafeel\"> {{kafeel.mobile}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"loading\">\r\n        <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n            <mat-spinner></mat-spinner>\r\n        </mat-footer-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"noData\">\r\n        <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n          No data.\r\n        </mat-footer-cell>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n      <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':listData!=null}\"></mat-footer-row>\r\n      <mat-footer-row *matFooterRowDef=\"['noData']\" [ngClass]=\"{'hide':!(listData!=null && listData.length==0)}\"></mat-footer-row>\r\n\r\n    </mat-table>\r\n\r\n    <mat-paginator #paginator\r\n      [length]=\"dataSource.filteredData.length\"\r\n      [pageIndex]=\"0\"\r\n      [pageSize]=\"10\"\r\n      [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n    </mat-paginator>\r\n\r\n  </div>\r\n  \r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/kafeels/kefeels-list/kefeels-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/kafeels/kefeels-list/kefeels-list.component.ts ***!
  \****************************************************************/
/*! exports provided: KefeelsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KefeelsListComponent", function() { return KefeelsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_orphan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/orphan.service */ "./src/app/shared/orphan.service.ts");
/* harmony import */ var _new_kafeel_new_kafeel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../new-kafeel/new-kafeel.component */ "./src/app/kafeels/new-kafeel/new-kafeel.component.ts");








var KefeelsListComponent = /** @class */ (function () {
    function KefeelsListComponent(orphanService, route, dialog, http) {
        this.orphanService = orphanService;
        this.route = route;
        this.dialog = dialog;
        this.http = http;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.serial = 1;
        this.user = {
            name: '',
            email: '',
            org_id: ''
        };
        this.displayedColumns = ['index', 'name', 'mobile', 'city'];
    }
    KefeelsListComponent.prototype.ngOnInit = function () {
        this.orphanService.changeNavBarStatus("block");
        this.getUser();
    };
    KefeelsListComponent.prototype.getUser = function () {
        var _this = this;
        this.orphanService.getUser().subscribe(function (user) {
            _this.user = user;
            _this.org_id = _this.user.org_id;
            _this.getKafeels();
        });
    };
    KefeelsListComponent.prototype.getKafeels = function () {
        var _this = this;
        return this.orphanService.getKafeels(this.org_id).subscribe(function (res) {
            if (res) {
                _this.dataSource.data = res;
                _this.listData = _this.dataSource;
                _this.kafeels = res;
            }
        });
    };
    KefeelsListComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    KefeelsListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLocaleLowerCase();
        this.dataSource.filter = filterValue;
    };
    KefeelsListComponent.prototype.onCreateNew = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '55%';
        var dialogCallBack = this.dialog.open(_new_kafeel_new_kafeel_component__WEBPACK_IMPORTED_MODULE_6__["NewKafeelComponent"], dialogConfig);
        dialogCallBack.afterClosed().subscribe(function () {
            _this.getKafeels();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], KefeelsListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], KefeelsListComponent.prototype, "sort", void 0);
    KefeelsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kefeels-list',
            template: __webpack_require__(/*! ./kefeels-list.component.html */ "./src/app/kafeels/kefeels-list/kefeels-list.component.html"),
            styles: [__webpack_require__(/*! ./kefeels-list.component.css */ "./src/app/kafeels/kefeels-list/kefeels-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_orphan_service__WEBPACK_IMPORTED_MODULE_5__["OrphanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], KefeelsListComponent);
    return KefeelsListComponent;
}());



/***/ }),

/***/ "./src/app/kafeels/new-kafeel/new-kafeel.component.css":
/*!*************************************************************!*\
  !*** ./src/app/kafeels/new-kafeel/new-kafeel.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\nmargin-top:10px;\r\n}\r\n.submitted .ng-invalid{\r\nborder: 1px solid red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2FmZWVscy9uZXcta2FmZWVsL25ldy1rYWZlZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAva2FmZWVscy9uZXcta2FmZWVsL25ldy1rYWZlZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbm1hcmdpbi10b3A6MTBweDtcclxufVxyXG4uc3VibWl0dGVkIC5uZy1pbnZhbGlke1xyXG5ib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/kafeels/new-kafeel/new-kafeel.component.html":
/*!**************************************************************!*\
  !*** ./src/app/kafeels/new-kafeel/new-kafeel.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"background:#0063b0;color:white;margin-bottom: 40px\">\r\n\r\n    <div class=\"col-4\"></div>\r\n\r\n    <div class=\"col-4\">\r\n      <h1 style=\"text-align: center\" >إضافة كفيل جديد </h1>\r\n    </div>\r\n\r\n    <div class=\"col-3\"></div>\r\n    \r\n    <div class=\"col-1\" style=\"text-align:left\">\r\n      <button class=\"btn-dialog-close\" mat-mini-fab style=\"background:white;color:rgb(113, 110, 255)\" (click)='onClose()' tabindex=\"-1\"><mat-icon>clear</mat-icon></button>\r\n    </div>\r\n  \r\n</mat-toolbar>\r\n\r\n<div class=\"container\">\r\n  \r\n  <form class=\"normal-form\" [formGroup]=\"newForm\" (ngSubmit)=\"newKafeel()\" autocomplete=\"off\">\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-6 form-group\">\r\n        <label for=\"name\">الاسم</label>\r\n        <input #name type=\"text\" class=\"form-control\" formControlName='name' name=\"name\" required>\r\n      </div>\r\n      \r\n      <div class=\"col-6 form-group\">\r\n        <label for=\"city\">المدينة</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName='city' required>\r\n      </div>\r\n    \r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-6 form-group\">\r\n        <label for=\"mobile\">جوال</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName='mobile'>\r\n      </div>\r\n      \r\n    </div>\r\n    \r\n    \r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-12\" style=\"text-align:left\">\r\n        <button mat-raised-button color=\"primary\" type=\"submit\" style=\"font-size:20px;background:#0063b0;width:10%\">حفظ</button>\r\n      </div>\r\n\r\n    </div>\r\n  \r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/kafeels/new-kafeel/new-kafeel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/kafeels/new-kafeel/new-kafeel.component.ts ***!
  \************************************************************/
/*! exports provided: NewKafeelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewKafeelComponent", function() { return NewKafeelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_orphan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/orphan.service */ "./src/app/shared/orphan.service.ts");








var NewKafeelComponent = /** @class */ (function () {
    function NewKafeelComponent(tostr, router, orphanService, fb, http, dialogRef) {
        this.tostr = tostr;
        this.router = router;
        this.orphanService = orphanService;
        this.fb = fb;
        this.http = http;
        this.dialogRef = dialogRef;
        this.user = {
            name: '',
            email: '',
            org_id: ''
        };
    }
    NewKafeelComponent.prototype.ngOnInit = function () {
        this.kafeelForm();
        this.getUser();
    };
    NewKafeelComponent.prototype.getUser = function () {
        var _this = this;
        this.orphanService.getUser().subscribe(function (user) {
            _this.user = user;
            _this.org_id = _this.user.org_id;
        });
    };
    NewKafeelComponent.prototype.kafeelForm = function () {
        this.newForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    };
    Object.defineProperty(NewKafeelComponent.prototype, "name", {
        // Using getters will make your code look pretty
        get: function () { return this.newForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewKafeelComponent.prototype, "mobile", {
        get: function () { return this.newForm.get('mobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewKafeelComponent.prototype, "city", {
        get: function () { return this.newForm.get('city'); },
        enumerable: true,
        configurable: true
    });
    NewKafeelComponent.prototype.newKafeel = function () {
        var _this = this;
        if (!this.newForm.valid)
            return null;
        var vals = this.newForm.value;
        var kafeel = {
            name: this.name.value,
            mobile: this.mobile.value,
            city: this.city.value,
            org: this.org_id
        };
        this.orphanService.newKafeel(kafeel)
            .subscribe(function (res) {
            console.log(res);
            _this.dialogRef.close();
            _this.tostr.success('تم اضافة كفيل جديد بنجاح');
        }, function (err) { return console.error(err); });
    };
    NewKafeelComponent.prototype.onClose = function () {
        // this.newBreadwinnerForm.reset();
        this.dialogRef.close();
    };
    NewKafeelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-kafeel',
            template: __webpack_require__(/*! ./new-kafeel.component.html */ "./src/app/kafeels/new-kafeel/new-kafeel.component.html"),
            styles: [__webpack_require__(/*! ./new-kafeel.component.css */ "./src/app/kafeels/new-kafeel/new-kafeel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_orphan_service__WEBPACK_IMPORTED_MODULE_7__["OrphanService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]])
    ], NewKafeelComponent);
    return NewKafeelComponent;
}());



/***/ }),

/***/ "./src/app/orgs/new-org/new-org.component.css":
/*!****************************************************!*\
  !*** ./src/app/orgs/new-org/new-org.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZ3MvbmV3LW9yZy9uZXctb3JnLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/orgs/new-org/new-org.component.html":
/*!*****************************************************!*\
  !*** ./src/app/orgs/new-org/new-org.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"background:#0063b0;color:white;margin-bottom: 40px\">\r\n\r\n  <div class=\"col-4\"></div>\r\n\r\n  <div class=\"col-4\">\r\n    <h1 style=\"text-align: center\" >إضافة جمعية </h1>\r\n  </div>\r\n\r\n</mat-toolbar>\r\n\r\n<div class=\"container\">\r\n\r\n<form class=\"normal-form\" [formGroup]=\"newForm\" (ngSubmit)=\"newOrg()\" autocomplete=\"off\">\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-6 form-group\">\r\n      <label for=\"firstName\">اسم الجمعية</label>\r\n      <input #name type=\"text\" class=\"form-control\" formControlName='orgName' required>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-12\" style=\"text-align:left\">\r\n      <button mat-raised-button color=\"primary\" type=\"submit\" style=\"font-size:20px;background:#0063b0;width:10%\">حفظ</button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</form>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/orgs/new-org/new-org.component.ts":
/*!***************************************************!*\
  !*** ./src/app/orgs/new-org/new-org.component.ts ***!
  \***************************************************/
/*! exports provided: NewOrgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOrgComponent", function() { return NewOrgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_orphan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/orphan.service */ "./src/app/shared/orphan.service.ts");






var NewOrgComponent = /** @class */ (function () {
    function NewOrgComponent(tostr, orphanService, router, fb) {
        this.tostr = tostr;
        this.orphanService = orphanService;
        this.router = router;
        this.fb = fb;
    }
    NewOrgComponent.prototype.ngOnInit = function () {
        this.orphanService.changeNavBarStatus("block");
        this.orphanForm();
    };
    NewOrgComponent.prototype.orphanForm = function () {
        this.newForm = this.fb.group({
            orgName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    };
    Object.defineProperty(NewOrgComponent.prototype, "orgName", {
        // Using getters will make your code look pretty
        get: function () { return this.newForm.get('orgName'); },
        enumerable: true,
        configurable: true
    });
    NewOrgComponent.prototype.newOrg = function () {
        var _this = this;
        if (!this.newForm.valid)
            return null;
        var vals = this.newForm.value;
        var org = {
            name: this.orgName.value,
        };
        this.orphanService.newOrg(org)
            .subscribe(function (res) {
            _this.newForm.reset();
            _this.tostr.success('تم التسجيل بنجاح');
        }, function (err) { return _this.tostr.error('خطأ ' + err); }
        // err => console.error(err)
        );
    };
    NewOrgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-org',
            template: __webpack_require__(/*! ./new-org.component.html */ "./src/app/orgs/new-org/new-org.component.html"),
            styles: [__webpack_require__(/*! ./new-org.component.css */ "./src/app/orgs/new-org/new-org.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _shared_orphan_service__WEBPACK_IMPORTED_MODULE_5__["OrphanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], NewOrgComponent);
    return NewOrgComponent;
}());



/***/ }),

/***/ "./src/app/orphans/edit-orphan/edit-orphan.component.css":
/*!***************************************************************!*\
  !*** ./src/app/orphans/edit-orphan/edit-orphan.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ycGhhbnMvZWRpdC1vcnBoYW4vZWRpdC1vcnBoYW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/orphans/edit-orphan/edit-orphan.component.html":
/*!****************************************************************!*\
  !*** ./src/app/orphans/edit-orphan/edit-orphan.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"background:#31CA9E;color:white\">\r\n  <span style=\"margin:0 auto\" >تعديل </span>\r\n  <button class=\"btn-dialog-close\" mat-mini-fab style=\"background:white;color:#31CA9E\" (click)='onClose()' tabindex=\"-1\"><mat-icon>clear</mat-icon></button>\r\n</mat-toolbar>\r\n\r\n<div class=\"container\">\r\n  \r\n  <form class=\"normal-form\" [formGroup]=\"editForm\" (ngSubmit)=\"editOrphan()\" autocomplete=\"off\">\r\n    \r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-6 form-group\">\r\n        <label for=\"firstName\">الاسم الأول</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName='firstName' name=\"firstName\" [ngModel]=\"orphan?.firstName\" >\r\n      </div>\r\n      \r\n      <div class=\"col-6 form-group\">\r\n        <label for=\"secondName\">الاسم الثاني</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName='secondName' [ngModel]=\"orphan?.secondName\" >\r\n      </div>\r\n    \r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-6 form-group\">\r\n        <label for=\"thirdName\">الاسم الثالث</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName='thirdName' [ngModel]=\"orphan?.thirdName\" >\r\n      </div>\r\n      \r\n      <div class=\"col-6 form-group\">\r\n        <label for=\"title\">اللقب</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName='title' [ngModel]=\"orphan?.title\" >\r\n      </div>\r\n    \r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-6 form-group\">\r\n        <label for=\"idNo\">رقم الهوية</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName='idNo' [ngModel]=\"orphan?.idNo\" >\r\n      </div>\r\n\r\n      <div class=\"form-group col-6\" align='right'>\r\n\r\n        <label for=\"\" >الحالة</label>\r\n        <select class=\"form-control\" id=\"exampleFormControlSelect1\" formControlName=\"status\">\r\n            <option value=\"\">اختيار الحالة</option>\r\n            <option value=\"family\">فقير أ</option>\r\n            <option value=\"orphan\">فقير ي</option>\r\n        </select>\r\n\r\n    </div>\r\n      \r\n      <!-- <div class=\"col-6 form-group\">\r\n        <label for=\"address\">السكن</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName='address' required>\r\n      </div> -->\r\n    \r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-12\" style=\"text-align:left\">\r\n        <button mat-raised-button color=\"primary\" type=\"submit\" style=\"font-size:20px;background:#0063b0;width:10%\">حفظ</button>\r\n      </div>\r\n\r\n    </div>\r\n  \r\n  </form>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/orphans/edit-orphan/edit-orphan.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/orphans/edit-orphan/edit-orphan.component.ts ***!
  \**************************************************************/
/*! exports provided: EditOrphanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOrphanComponent", function() { return EditOrphanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_orphan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/orphan.service */ "./src/app/shared/orphan.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var EditOrphanComponent = /** @class */ (function () {
    function EditOrphanComponent(tostr, dialogRef, orphanService, fb, data) {
        this.tostr = tostr;
        this.dialogRef = dialogRef;
        this.orphanService = orphanService;
        this.fb = fb;
        this.orphan_id = data.orphan_id;
    }
    EditOrphanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orphanForm();
        this.orphanService.getOrphan(this.orphan_id).subscribe(function (data) {
            _this.orphan = data;
        });
    };
    EditOrphanComponent.prototype.orphanForm = function () {
        this.editForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            secondName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            thirdName: [''],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            status: [''],
            idNo: ['']
            // address: ['', [Validators.required]],
        });
    };
    Object.defineProperty(EditOrphanComponent.prototype, "firstName", {
        // Using getters will make your code look pretty
        get: function () { return this.editForm.get('firstName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditOrphanComponent.prototype, "secondName", {
        get: function () { return this.editForm.get('secondName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditOrphanComponent.prototype, "thirdName", {
        get: function () { return this.editForm.get('thirdName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditOrphanComponent.prototype, "title", {
        get: function () { return this.editForm.get('title'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditOrphanComponent.prototype, "status", {
        get: function () { return this.editForm.get('status'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditOrphanComponent.prototype, "idNo", {
        get: function () { return this.editForm.get('idNo'); },
        enumerable: true,
        configurable: true
    });
    // get address() { return this.editForm.get('address') }
    EditOrphanComponent.prototype.editOrphan = function () {
        var _this = this;
        if (!this.editForm.valid)
            return null;
        var vals = this.editForm.value;
        var orphan = {
            id: this.orphan_id,
            firstName: this.firstName.value,
            secondName: this.secondName.value,
            thirdName: this.thirdName.value,
            title: this.title.value,
            status: this.status.value,
            idNo: this.idNo.value,
        };
        this.orphanService.updateOrphan(orphan)
            .subscribe(function (res) {
            _this.tostr.success('تم التحديث بنجاح');
            _this.dialogRef.close();
        }, function (err) { return _this.tostr.error('خطأ ' + err); }
        // err => console.error(err)
        );
    };
    EditOrphanComponent.prototype.onClose = function () {
        // this.newBreadwinnerForm.reset();
        this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], EditOrphanComponent.prototype, "orphan_id", void 0);
    EditOrphanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-orphan',
            template: __webpack_require__(/*! ./edit-orphan.component.html */ "./src/app/orphans/edit-orphan/edit-orphan.component.html"),
            styles: [__webpack_require__(/*! ./edit-orphan.component.css */ "./src/app/orphans/edit-orphan/edit-orphan.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_app_shared_orphan_service__WEBPACK_IMPORTED_MODULE_4__["OrphanService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], Object])
    ], EditOrphanComponent);
    return EditOrphanComponent;
}());



/***/ }),

/***/ "./src/app/orphans/kafala-approve/kafala-approve.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/orphans/kafala-approve/kafala-approve.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ycGhhbnMva2FmYWxhLWFwcHJvdmUva2FmYWxhLWFwcHJvdmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/orphans/kafala-approve/kafala-approve.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/orphans/kafala-approve/kafala-approve.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{ form.value | json }}\r\n\r\n<form [formGroup]=\"form\" (ngSubmit)=\"submit()\" autocomplete=\"off\">\r\n\r\n  <div class=\"form-row\">\r\n\r\n    <!-- اختيار كفيل -->\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input type=\"text\" placeholder=\"اختيار كفيل\" aria-label=\"Number\" matInput formControlName=\"kafeel\" [matAutocomplete]=\"kafeel\">\r\n      <mat-autocomplete autoActiveFirstOption #kafeel=\"matAutocomplete\">\r\n        <mat-option *ngFor=\"let kafeel of kafeels\" [value]=\"kafeel\">\r\n          {{kafeel}}\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n    \r\n    \r\n    <!-- اختيار يتيم -->\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input type=\"text\" placeholder=\"اختيار يتيم\" aria-label=\"Number\" matInput formControlName=\"orphan\" [matAutocomplete]=\"orphan\">\r\n      <mat-autocomplete autoActiveFirstOption #orphan=\"matAutocomplete\">\r\n        <mat-option *ngFor=\"let orphan of filteredOrphans | async\" [value]=\"orphan\">\r\n          {{orphan}}\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n    \r\n    \r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"\">اختيار</label>\r\n        <select class=\"form-control\" formControlName=\"kafalaType\">\r\n        <option value=\"\">نوع الكفالة</option>\r\n        <option value=\" شهرية\">كفالة شهرية</option>\r\n        <option value=\" نصف سنوية\">كفالة نصف سنوية</option>\r\n        <option value=\" سنوية\">كفالة سنوية</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"\">اختيار</label>\r\n      <select class=\"form-control\" formControlName=\"amount\">\r\n        <option value=\"\">المبلغ</option>\r\n        <option value=\"200\">200 ريال</option>\r\n        <option value=\"1200\">1200 ريال</option>\r\n        <option value=\"2400\">2400 ريال</option>\r\n      </select>\r\n    </div>\r\n\r\n    <button class=\"btn btn-success btn-lg\" [disabled]='form.invalid' type=\"submit\">حفظ</button>\r\n\r\n  </div>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/orphans/kafala-approve/kafala-approve.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/orphans/kafala-approve/kafala-approve.component.ts ***!
  \********************************************************************/
/*! exports provided: KafalaApproveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KafalaApproveComponent", function() { return KafalaApproveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_orphan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/orphan.service */ "./src/app/shared/orphan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var KafalaApproveComponent = /** @class */ (function () {
    function KafalaApproveComponent(orphanService, route, fb) {
        this.orphanService = orphanService;
        this.route = route;
        this.fb = fb;
        this.orphans = ['واحد', 'اثنين', 'ثلاثة'];
        this.form = fb.group({
            kafeel: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            orphan: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            kafalaType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            amount: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    // kafeel
    KafalaApproveComponent.prototype._filterKafeel = function (kafeel) {
        var filterKafeelValue = kafeel.toLowerCase();
        return this.kafeels.filter(function (kafeel) { return kafeel.toLowerCase().indexOf(filterKafeelValue) === 0; });
    };
    // orphan
    KafalaApproveComponent.prototype._filterOrphan = function (orphan) {
        var filterOrphanValue = orphan.toLowerCase();
        return this.orphans.filter(function (orphan) { return orphan.toLowerCase().indexOf(filterOrphanValue) === 0; });
    };
    KafalaApproveComponent.prototype.submit = function () {
        console.log(this.form.controls['kafeel'].value);
    };
    KafalaApproveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orphanService.getKafeels("1").subscribe(function (kafeels) {
            for (var key in kafeels) {
                _this.kafeels = kafeels[key].name;
                console.log();
            }
        });
        // kafeel
        this.filteredKafeels = this.form.controls['kafeel'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (kafeel) { return _this._filterKafeel(kafeel); }));
        // orphan
        this.filteredOrphans = this.form.controls['orphan'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (orphan) { return _this._filterOrphan(orphan); }));
    };
    KafalaApproveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kafala-approve',
            template: __webpack_require__(/*! ./kafala-approve.component.html */ "./src/app/orphans/kafala-approve/kafala-approve.component.html"),
            styles: [__webpack_require__(/*! ./kafala-approve.component.css */ "./src/app/orphans/kafala-approve/kafala-approve.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_orphan_service__WEBPACK_IMPORTED_MODULE_4__["OrphanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], KafalaApproveComponent);
    return KafalaApproveComponent;
}());



/***/ }),

/***/ "./src/app/orphans/makfouled-orphans/makfouled-orphans.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/orphans/makfouled-orphans/makfouled-orphans.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th,td{\r\ntext-align: center;\r\n}\r\n\r\n#data-table{\r\nmargin-bottom:170px;\r\n}\r\n\r\n/* tr:hover{\r\nbackground: rgb(234, 245, 248);\r\n} */\r\n\r\n.makfoul1{\r\nbackground: rgb(231, 252, 231);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JwaGFucy9tYWtmb3VsZWQtb3JwaGFucy9tYWtmb3VsZWQtb3JwaGFucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBOztHQUVHOztBQUVIO0FBQ0EsOEJBQThCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvb3JwaGFucy9tYWtmb3VsZWQtb3JwaGFucy9tYWtmb3VsZWQtb3JwaGFucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgsdGR7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2RhdGEtdGFibGV7XHJcbm1hcmdpbi1ib3R0b206MTcwcHg7XHJcbn1cclxuXHJcbi8qIHRyOmhvdmVye1xyXG5iYWNrZ3JvdW5kOiByZ2IoMjM0LCAyNDUsIDI0OCk7XHJcbn0gKi9cclxuXHJcbi5tYWtmb3VsMXtcclxuYmFja2dyb3VuZDogcmdiKDIzMSwgMjUyLCAyMzEpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/orphans/makfouled-orphans/makfouled-orphans.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/orphans/makfouled-orphans/makfouled-orphans.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"display:block;color:white;margin-bottom: 40px;background:rgb(14, 146, 96)\">\r\n  <h4 style=\"margin:0 auto; text-align: center;line-height: 60px\">بيان تفصيلي بالكفلاء والمكفولين</h4>\r\n</mat-toolbar>\r\n\r\n<div class=\"container\" id='data-table'>\r\n\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table table-bordered\">\r\n\r\n      <tr style=\"background:#f2f0f0\">\r\n        <th>اسم المكفول</th>\r\n        <th>رقم الهوية</th>\r\n        <th>نوع الكفالة</th>\r\n        <th>تاريخ الكفالة</th>\r\n        <th>اسم الكافل</th>\r\n        <th>المدينة</th>\r\n      </tr>\r\n    \r\n      <tr *ngFor=\"let orphan of orphans; let i = index\" class=\"{{ 'makfoul' +  orphan.makfoul }}\">\r\n\r\n        <td> {{ orphan.firstName + ' ' + orphan.secondName + ' ' + orphan.thirdName + ' ' + '****' }} </td>\r\n        <td> {{ orphan.idNo + '***'}} </td>\r\n        <td>{{ orphan.kafalaType }} / {{ orphan.kafalaAmount }} ريال</td>\r\n        <td>{{ orphan.kafalaDate }}</td>\r\n        <td>{{ orphan.kafeelName }}</td>\r\n        <td>{{ orphan.kafeelCity }}</td>\r\n        \r\n      </tr>\r\n  \r\n    </table>\r\n  </div>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/orphans/makfouled-orphans/makfouled-orphans.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/orphans/makfouled-orphans/makfouled-orphans.component.ts ***!
  \**************************************************************************/
/*! exports provided: MakfouledOrphansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakfouledOrphansComponent", function() { return MakfouledOrphansComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_orphan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/orphan.service */ "./src/app/shared/orphan.service.ts");




var MakfouledOrphansComponent = /** @class */ (function () {
    function MakfouledOrphansComponent(orphanService, route) {
        var _this = this;
        this.orphanService = orphanService;
        this.route = route;
        this.serial = 1;
        this.route.params.subscribe(function (params) { _this.org_id = params.org_id; });
    }
    MakfouledOrphansComponent.prototype.ngOnInit = function () {
        this.getOrhans();
    };
    MakfouledOrphansComponent.prototype.getOrhans = function () {
        var _this = this;
        return this.orphanService.getMakfouledOrphans(this.org_id).subscribe(function (data) {
            _this.orphans = data;
        });
    };
    MakfouledOrphansComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-makfouled-orphans',
            template: __webpack_require__(/*! ./makfouled-orphans.component.html */ "./src/app/orphans/makfouled-orphans/makfouled-orphans.component.html"),
            styles: [__webpack_require__(/*! ./makfouled-orphans.component.css */ "./src/app/orphans/makfouled-orphans/makfouled-orphans.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_orphan_service__WEBPACK_IMPORTED_MODULE_3__["OrphanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MakfouledOrphansComponent);
    return MakfouledOrphansComponent;
}());



/***/ }),

/***/ "./src/app/orphans/new-non-saudi-orphan/new-non-saudi-orphan.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/orphans/new-non-saudi-orphan/new-non-saudi-orphan.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\nmargin-top:10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JwaGFucy9uZXctbm9uLXNhdWRpLW9ycGhhbi9uZXctbm9uLXNhdWRpLW9ycGhhbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsZUFBZTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvb3JwaGFucy9uZXctbm9uLXNhdWRpLW9ycGhhbi9uZXctbm9uLXNhdWRpLW9ycGhhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxubWFyZ2luLXRvcDoxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/orphans/new-non-saudi-orphan/new-non-saudi-orphan.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/orphans/new-non-saudi-orphan/new-non-saudi-orphan.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"background:#67593b;color:white;margin-bottom: 40px\">\r\n\r\n    <div class=\"col-4\"></div>\r\n\r\n    <div class=\"col-4\">\r\n      <h1 style=\"text-align: center\" >إضافة غير سعودي</h1>\r\n    </div>\r\n\r\n    <div class=\"col-2\"></div>\r\n    <div class=\"col-2\">\r\n      <h1>الإجمالي = {{ nonSaudiTotalRecords }}</h1>\r\n    </div>\r\n\r\n</mat-toolbar>\r\n\r\n<div class=\"container\">\r\n  \r\n  <form class=\"normal-form\" [formGroup]=\"newForm\" (ngSubmit)=\"newOrphan()\" autocomplete=\"off\">\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-6 form-group\">\r\n        <label for=\"firstName\">الاسم الأول</label>\r\n        <input #name type=\"text\" class=\"form-control\" formControlName='firstName' name=\"firstName\" required>\r\n      </div>\r\n      \r\n      <div class=\"col-6 form-group\">\r\n        <label for=\"secondName\">الاسم الثاني</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName='secondName' required>\r\n      </div>\r\n    \r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-6 form-group\">\r\n        <label for=\"thirdName\">الاسم الثالث</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName='thirdName' required>\r\n      </div>\r\n      \r\n      <div class=\"col-6 form-group\">\r\n        <label for=\"title\">اللقب</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName='title' required>\r\n      </div>\r\n    \r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-6 form-group\">\r\n        <label for=\"idNo\">رقم الإقامة</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName='idNo' required>\r\n      </div>\r\n      \r\n      <div class=\"col-6 form-group\">\r\n        <label for=\"idNo\">الجنسية</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName='nationality' required>\r\n      </div>\r\n      \r\n      <!-- <div class=\"col-6 form-group\">\r\n        <label for=\"address\">السكن</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName='address' required>\r\n      </div> -->\r\n    \r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-12\" style=\"text-align:left\">\r\n        <button mat-raised-button color=\"primary\" type=\"submit\" style=\"font-size:20px;background:#67593b;width:10%\">حفظ</button>\r\n      </div>\r\n\r\n    </div>\r\n  \r\n  </form>\r\n\r\n</div>\r\n\r\n\r\n\r\n<footer class=\"footer\">\r\n  <div class=\"container\">\r\n    \r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-3\"></div>\r\n\r\n      <div class=\"col-3\">\r\n\r\n        <h6>\r\n          <a href=\"https://alnobanidevelop.github.io/orphan-web-frontend/new-saudi-male-orphan\">\r\n            إضافة سعودي (ذكر)\r\n          </a>\r\n        </h6>\r\n\r\n      </div>  \r\n\r\n      <div class=\"col-1\"></div>\r\n              \r\n      <div class=\"col-3\">\r\n\r\n        <h6>\r\n          <a href=\"https://alnobanidevelop.github.io/orphan-web-frontend/orphans/saudiMale\">\r\n            بيان السعوديين (ذكور)\r\n          </a>\r\n        </h6>\r\n\r\n      </div>  \r\n              \r\n    </div>\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-3\"></div>\r\n\r\n      <div class=\"col-3\">\r\n\r\n        <h6>\r\n          <a href=\"https://alnobanidevelop.github.io/orphan-web-frontend/new-saudi-female-orphan\">\r\n            إضافة سعودي (أنثى)\r\n          </a>\r\n        </h6>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-1\"></div>\r\n\r\n      <div class=\"col-3\">\r\n\r\n        <h6>\r\n          <a href=\"https://alnobanidevelop.github.io/orphan-web-frontend/orphans/saudiFemale\">\r\n            بيان السعوديين (إناث)\r\n          </a>\r\n        </h6>\r\n\r\n      </div>  \r\n                  \r\n    </div>\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-3\"></div>\r\n\r\n      <div class=\"col-3\">\r\n\r\n        <h6>\r\n          <a href=\"https://alnobanidevelop.github.io/orphan-web-frontend/new-non-saudi-orphan\">\r\n            إضافة غير سعودي\r\n          </a>\r\n        </h6>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-1\"></div>\r\n      \r\n      <div class=\"col-3\">\r\n\r\n        <h6>\r\n          <a href=\"https://alnobanidevelop.github.io/orphan-web-frontend/orphans/nonSaudi\">\r\n            بيان غير السعوديين\r\n          </a>\r\n        </h6>\r\n\r\n      </div>  \r\n                  \r\n    </div>\r\n\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/orphans/new-non-saudi-orphan/new-non-saudi-orphan.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/orphans/new-non-saudi-orphan/new-non-saudi-orphan.component.ts ***!
  \********************************************************************************/
/*! exports provided: NewNonSaudiOrphanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewNonSaudiOrphanComponent", function() { return NewNonSaudiOrphanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_orphan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/orphan.service */ "./src/app/shared/orphan.service.ts");






var NewNonSaudiOrphanComponent = /** @class */ (function () {
    function NewNonSaudiOrphanComponent(tostr, orphanService, router, fb) {
        this.tostr = tostr;
        this.orphanService = orphanService;
        this.router = router;
        this.fb = fb;
    }
    NewNonSaudiOrphanComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.getTotalRecords();
        this.orphanForm();
    };
    NewNonSaudiOrphanComponent.prototype.getUser = function () {
        var _this = this;
        this.orphanService.getUser().subscribe(function (user) {
            _this.user = user;
        });
    };
    NewNonSaudiOrphanComponent.prototype.getTotalRecords = function () {
        var _this = this;
        this.orphanService.nonSaudiTotalRecords().subscribe(function (res) {
            _this.nonSaudiTotalRecords = res;
        });
    };
    NewNonSaudiOrphanComponent.prototype.orphanForm = function () {
        this.newForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            secondName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            thirdName: [''],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            idNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]],
            nationality: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
            // address: ['', [Validators.required]],
        });
    };
    Object.defineProperty(NewNonSaudiOrphanComponent.prototype, "firstName", {
        // Using getters will make your code look pretty
        get: function () { return this.newForm.get('firstName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewNonSaudiOrphanComponent.prototype, "secondName", {
        get: function () { return this.newForm.get('secondName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewNonSaudiOrphanComponent.prototype, "thirdName", {
        get: function () { return this.newForm.get('thirdName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewNonSaudiOrphanComponent.prototype, "title", {
        get: function () { return this.newForm.get('title'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewNonSaudiOrphanComponent.prototype, "idNo", {
        get: function () { return this.newForm.get('idNo'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewNonSaudiOrphanComponent.prototype, "nationality", {
        get: function () { return this.newForm.get('nationality'); },
        enumerable: true,
        configurable: true
    });
    // get address() { return this.newForm.get('address') }
    NewNonSaudiOrphanComponent.prototype.newOrphan = function () {
        var _this = this;
        if (!this.newForm.valid)
            return null;
        var vals = this.newForm.value;
        var orphan = {
            gender: 'male',
            firstName: this.firstName.value,
            secondName: this.secondName.value,
            thirdName: this.thirdName.value,
            title: this.title.value,
            idNo: this.idNo.value,
            nationality: this.nationality.value,
            // address: this.address.value,
            makfoul: 0,
            createdBy: this.user.id
        };
        this.orphanService.newOrphan(orphan)
            .subscribe(function (res) {
            console.log(res);
            _this.newForm.reset();
            _this.tostr.success('تم التسجيل بنجاح');
            _this.getTotalRecords();
            _this.nameField.nativeElement.focus();
        }, function (err) { return _this.tostr.error('خطأ ' + err); }
        // err => console.error(err)
        );
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("name"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NewNonSaudiOrphanComponent.prototype, "nameField", void 0);
    NewNonSaudiOrphanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-non-saudi-orphan',
            template: __webpack_require__(/*! ./new-non-saudi-orphan.component.html */ "./src/app/orphans/new-non-saudi-orphan/new-non-saudi-orphan.component.html"),
            styles: [__webpack_require__(/*! ./new-non-saudi-orphan.component.css */ "./src/app/orphans/new-non-saudi-orphan/new-non-saudi-orphan.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _shared_orphan_service__WEBPACK_IMPORTED_MODULE_5__["OrphanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], NewNonSaudiOrphanComponent);
    return NewNonSaudiOrphanComponent;
}());



/***/ }),

/***/ "./src/app/orphans/new-saudi-orphan/new-saudi-orphan.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/orphans/new-saudi-orphan/new-saudi-orphan.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\nmargin-top:10px;\r\n}\r\n.submitted .ng-invalid{\r\nborder: 1px solid red;\r\n}\r\n.male{\r\nbackground: #0063b0;\r\npadding:1%;\r\n}\r\n.female{\r\nbackground: #9a5e9e;\r\npadding:1%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JwaGFucy9uZXctc2F1ZGktb3JwaGFuL25ldy1zYXVkaS1vcnBoYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBRUE7QUFDQSxtQkFBbUI7QUFDbkIsVUFBVTtBQUNWO0FBRUE7QUFDQSxtQkFBbUI7QUFDbkIsVUFBVTtBQUNWIiwiZmlsZSI6InNyYy9hcHAvb3JwaGFucy9uZXctc2F1ZGktb3JwaGFuL25ldy1zYXVkaS1vcnBoYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbm1hcmdpbi10b3A6MTBweDtcclxufVxyXG4uc3VibWl0dGVkIC5uZy1pbnZhbGlke1xyXG5ib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5tYWxle1xyXG5iYWNrZ3JvdW5kOiAjMDA2M2IwO1xyXG5wYWRkaW5nOjElO1xyXG59XHJcblxyXG4uZmVtYWxle1xyXG5iYWNrZ3JvdW5kOiAjOWE1ZTllO1xyXG5wYWRkaW5nOjElO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/orphans/new-saudi-orphan/new-saudi-orphan.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/orphans/new-saudi-orphan/new-saudi-orphan.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 align='center'>{{ user.name }}</h2>\r\n<mat-toolbar style=\"color:white;margin-bottom: 40px\">\r\n\r\n    <div class=\"col-4\"></div>\r\n\r\n    <div class=\"col-4\">\r\n      <h3 class='{{ gender }}' style=\"text-align: center\" > {{ headerTitle }}</h3>\r\n    </div>\r\n\r\n    <div class=\"col-2\"></div>\r\n    <div class=\"col-2\">\r\n      <h3 class='{{ gender }}' style=\"text-align: center\">الإجمالي = {{ saudiTotalRecords }}</h3>\r\n    </div>\r\n\r\n</mat-toolbar>\r\n\r\n<div class=\"container\">\r\n  \r\n  <form class=\"normal-form\" [formGroup]=\"newForm\" (ngSubmit)=\"newOrphan()\" autocomplete=\"off\">\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-6 form-group\">\r\n        <label for=\"firstName\">الاسم الأول</label>\r\n        <input #name type=\"text\" class=\"form-control\" formControlName='firstName' name=\"firstName\" required>\r\n      </div>\r\n      \r\n      <div class=\"col-6 form-group\">\r\n        <label for=\"secondName\">الاسم الثاني</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName='secondName' required>\r\n      </div>\r\n    \r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-6 form-group\">\r\n        <label for=\"thirdName\">الاسم الثالث</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName='thirdName'>\r\n      </div>\r\n      \r\n      <div class=\"col-6 form-group\">\r\n        <label for=\"title\">اللقب</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName='title' required>\r\n      </div>\r\n    \r\n    </div>    \r\n    \r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-6 form-group\">\r\n        <label for=\"idNo\">رقم الهوية</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName='idNo'>\r\n      </div>\r\n\r\n      <div class=\"form-group col-6\" align='right'>\r\n\r\n        <label for=\"\" >الحالة</label>\r\n        <select class=\"form-control\" id=\"exampleFormControlSelect1\" formControlName=\"status\">\r\n            <option value=\"\">اختيار الحالة</option>\r\n            <option value=\"family\">فقير أ</option>\r\n            <option value=\"orphan\">فقير ي</option>\r\n        </select>\r\n\r\n    </div>\r\n      \r\n      \r\n      <!-- <div class=\"col-6 form-group\">\r\n        <label for=\"address\">السكن</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName='address' required>\r\n      </div> -->\r\n    \r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-12\" style=\"text-align:left\">\r\n        <button mat-raised-button color=\"primary\" type=\"submit\" style=\"font-size:20px;background:#0063b0;width:10%\">حفظ</button>\r\n      </div>\r\n\r\n    </div>\r\n  \r\n  </form>\r\n\r\n</div>\r\n\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/orphans/new-saudi-orphan/new-saudi-orphan.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/orphans/new-saudi-orphan/new-saudi-orphan.component.ts ***!
  \************************************************************************/
/*! exports provided: NewSaudiOrphanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSaudiOrphanComponent", function() { return NewSaudiOrphanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_orphan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/orphan.service */ "./src/app/shared/orphan.service.ts");







var NewSaudiOrphanComponent = /** @class */ (function () {
    function NewSaudiOrphanComponent(tostr, orphanService, router, fb, route) {
        var _this = this;
        this.tostr = tostr;
        this.orphanService = orphanService;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.user = {
            name: '',
            email: '',
            org_id: ''
        };
        this.route.params.subscribe(function (params) { _this.gender = params.gender; _this.ngOnInit(); });
    }
    NewSaudiOrphanComponent.prototype.ngOnInit = function () {
        this.orphanService.changeNavBarStatus("block");
        this.getHeaderTitle();
        this.getUser();
        this.orphanForm();
    };
    NewSaudiOrphanComponent.prototype.getHeaderTitle = function () {
        if (this.gender == 'male')
            this.headerTitle = "إضافة سعودي (ذكر)";
        if (this.gender == 'female')
            this.headerTitle = "إضافة سعودي (أنثى)";
    };
    NewSaudiOrphanComponent.prototype.getUser = function () {
        var _this = this;
        this.orphanService.getUser().subscribe(function (user) {
            _this.user = user;
            _this.org_id = _this.user.org_id;
            _this.getTotalRecords();
        });
    };
    NewSaudiOrphanComponent.prototype.getTotalRecords = function () {
        var _this = this;
        this.orphanService.getSaudiTotalRecords(this.org_id, this.gender).subscribe(function (res) {
            _this.saudiTotalRecords = res;
        });
    };
    NewSaudiOrphanComponent.prototype.orphanForm = function () {
        this.newForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            secondName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            thirdName: [''],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            status: [''],
            idNo: ['']
            // address: ['', [Validators.required]],
        });
    };
    Object.defineProperty(NewSaudiOrphanComponent.prototype, "firstName", {
        // Using getters will make your code look pretty
        get: function () { return this.newForm.get('firstName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewSaudiOrphanComponent.prototype, "secondName", {
        get: function () { return this.newForm.get('secondName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewSaudiOrphanComponent.prototype, "thirdName", {
        get: function () { return this.newForm.get('thirdName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewSaudiOrphanComponent.prototype, "title", {
        get: function () { return this.newForm.get('title'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewSaudiOrphanComponent.prototype, "status", {
        get: function () { return this.newForm.get('status'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewSaudiOrphanComponent.prototype, "nationality", {
        get: function () { return this.newForm.get('nationality'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewSaudiOrphanComponent.prototype, "idNo", {
        get: function () { return this.newForm.get('idNo'); },
        enumerable: true,
        configurable: true
    });
    // get address() { return this.newForm.get('address') }
    NewSaudiOrphanComponent.prototype.newOrphan = function () {
        var _this = this;
        if (!this.newForm.valid)
            return null;
        var vals = this.newForm.value;
        var orphan = {
            gender: this.gender,
            firstName: this.firstName.value,
            secondName: this.secondName.value,
            thirdName: this.thirdName.value,
            title: this.title.value,
            status: this.status.value,
            nationality: 'Saudi',
            idNo: this.idNo.value,
            // address: this.address.value,
            makfoul: 0,
            createdBy: this.user.id,
            org: this.org_id
        };
        this.orphanService.newOrphan(orphan)
            .subscribe(function (res) {
            console.log(orphan.createdBy);
            _this.newForm.reset();
            _this.tostr.success('تم التسجيل بنجاح');
            _this.getTotalRecords();
            _this.nameField.nativeElement.focus();
        }, function (err) { return _this.tostr.error('خطأ ' + err); }
        // err => console.error(err)
        );
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("name"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NewSaudiOrphanComponent.prototype, "nameField", void 0);
    NewSaudiOrphanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-saudi-orphan',
            template: __webpack_require__(/*! ./new-saudi-orphan.component.html */ "./src/app/orphans/new-saudi-orphan/new-saudi-orphan.component.html"),
            styles: [__webpack_require__(/*! ./new-saudi-orphan.component.css */ "./src/app/orphans/new-saudi-orphan/new-saudi-orphan.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _shared_orphan_service__WEBPACK_IMPORTED_MODULE_5__["OrphanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NewSaudiOrphanComponent);
    return NewSaudiOrphanComponent;
}());



/***/ }),

/***/ "./src/app/orphans/orphans-public-table/orphans-public-table.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/orphans/orphans-public-table/orphans-public-table.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th,td{\r\ntext-align: center;\r\n}\r\n\r\n#data-table{\r\nmargin-bottom:170px;\r\n}\r\n\r\n/* tr:hover{\r\nbackground: rgb(234, 245, 248);\r\n} */\r\n\r\n.male{\r\ndisplay: none;\r\nbackground:#0063b0;\r\n}\r\n\r\n.female{\r\ndisplay: none;\r\nbackground:#9a5e9e;\r\n}\r\n\r\n.nonSaudi{\r\nbackground:#67593b;\r\n}\r\n\r\n.makfoul0{\r\nbackground:rgb(240, 249, 255);\r\n}\r\n\r\n.makfoul1{\r\nbackground: rgb(231, 252, 231);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JwaGFucy9vcnBoYW5zLXB1YmxpYy10YWJsZS9vcnBoYW5zLXB1YmxpYy10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBOztHQUVHOztBQUVIO0FBQ0EsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLGFBQWE7QUFDYixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9vcnBoYW5zL29ycGhhbnMtcHVibGljLXRhYmxlL29ycGhhbnMtcHVibGljLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCx0ZHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jZGF0YS10YWJsZXtcclxubWFyZ2luLWJvdHRvbToxNzBweDtcclxufVxyXG5cclxuLyogdHI6aG92ZXJ7XHJcbmJhY2tncm91bmQ6IHJnYigyMzQsIDI0NSwgMjQ4KTtcclxufSAqL1xyXG5cclxuLm1hbGV7XHJcbmRpc3BsYXk6IG5vbmU7XHJcbmJhY2tncm91bmQ6IzAwNjNiMDtcclxufVxyXG5cclxuLmZlbWFsZXtcclxuZGlzcGxheTogbm9uZTtcclxuYmFja2dyb3VuZDojOWE1ZTllO1xyXG59XHJcblxyXG4ubm9uU2F1ZGl7XHJcbmJhY2tncm91bmQ6IzY3NTkzYjtcclxufVxyXG5cclxuLm1ha2ZvdWwwe1xyXG5iYWNrZ3JvdW5kOnJnYigyNDAsIDI0OSwgMjU1KTtcclxufVxyXG5cclxuLm1ha2ZvdWwxe1xyXG5iYWNrZ3JvdW5kOiByZ2IoMjMxLCAyNTIsIDIzMSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/orphans/orphans-public-table/orphans-public-table.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/orphans/orphans-public-table/orphans-public-table.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar [class]=\"gender\" style=\"display:block;color:white;margin-bottom: 40px\">\r\n  <h4 style=\"margin:0 auto; text-align: center;line-height: 60px\">{{headerTitle}}</h4>\r\n</mat-toolbar>\r\n\r\n<div class=\"container\" id='data-table'>\r\n\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table table-bordered\">\r\n\r\n      <tr style=\"background:#f2f0f0\">\r\n        <th>اسم المكفول</th>\r\n        <th>رقم الهوية</th>\r\n        <th>نوع الكفالة</th>\r\n        <th>تاريخ الكفالة</th>\r\n        <th>اسم الكافل</th>\r\n        <th>المدينة</th>\r\n      </tr>\r\n    \r\n      <tr *ngFor=\"let orphan of orphans; let i = index\" class=\"{{ 'makfoul' +  orphan.makfoul }}\">\r\n\r\n        <td> {{ orphan.firstName + ' ' + orphan.secondName + ' ' + orphan.thirdName + ' ' + '****' }} </td>\r\n        <td> {{ orphan.idNo + '***'}} </td>\r\n        <td>{{ orphan.kafalaType }} / {{ orphan.kafalaAmount }} ريال</td>\r\n        <td>{{ orphan.kafalaDate }}</td>\r\n        <td>{{ orphan.kafeelName }}</td>\r\n        <td>{{ orphan.kafeelCity }}</td>\r\n        \r\n      </tr>\r\n  \r\n    </table>\r\n  </div>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/orphans/orphans-public-table/orphans-public-table.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/orphans/orphans-public-table/orphans-public-table.component.ts ***!
  \********************************************************************************/
/*! exports provided: OrphansPublicTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrphansPublicTableComponent", function() { return OrphansPublicTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_orphan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/orphan.service */ "./src/app/shared/orphan.service.ts");




var OrphansPublicTableComponent = /** @class */ (function () {
    function OrphansPublicTableComponent(orphanService, route) {
        var _this = this;
        this.orphanService = orphanService;
        this.route = route;
        this.serial = 1;
        this.route.params.subscribe(function (params) { _this.org_id = params.org_id, _this.gender = params.gender; });
    }
    OrphansPublicTableComponent.prototype.ngOnInit = function () {
        this.getHeaderTitle();
        this.getOrhans();
    };
    OrphansPublicTableComponent.prototype.getHeaderTitle = function () {
        if (this.gender == 'male')
            this.headerTitle = "بيان تفصيلي بالمكفولين (ذكور)";
        if (this.gender == 'female')
            this.headerTitle = "بيان تفصيلي بالمكفلولين (إناث)";
    };
    OrphansPublicTableComponent.prototype.getOrhans = function () {
        var _this = this;
        return this.orphanService.getOrphans(this.org_id, this.gender).subscribe(function (data) {
            _this.orphans = data;
        });
    };
    OrphansPublicTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orphans-public-table',
            template: __webpack_require__(/*! ./orphans-public-table.component.html */ "./src/app/orphans/orphans-public-table/orphans-public-table.component.html"),
            styles: [__webpack_require__(/*! ./orphans-public-table.component.css */ "./src/app/orphans/orphans-public-table/orphans-public-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_orphan_service__WEBPACK_IMPORTED_MODULE_3__["OrphanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OrphansPublicTableComponent);
    return OrphansPublicTableComponent;
}());



/***/ }),

/***/ "./src/app/orphans/orphans-table/orphans-table.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/orphans/orphans-table/orphans-table.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th,td{\r\ntext-align: center;\r\n}\r\n\r\n#data-table{\r\nmargin-bottom:170px;\r\n}\r\n\r\ntr:hover{\r\nbackground: rgb(234, 245, 248);\r\n}\r\n\r\n.male{\r\nbackground:#0063b0;\r\n}\r\n\r\n.female{\r\nbackground:#9a5e9e;\r\n}\r\n\r\n.nonSaudi{\r\nbackground:#67593b;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JwaGFucy9vcnBoYW5zLXRhYmxlL29ycGhhbnMtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL29ycGhhbnMvb3JwaGFucy10YWJsZS9vcnBoYW5zLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCx0ZHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jZGF0YS10YWJsZXtcclxubWFyZ2luLWJvdHRvbToxNzBweDtcclxufVxyXG5cclxudHI6aG92ZXJ7XHJcbmJhY2tncm91bmQ6IHJnYigyMzQsIDI0NSwgMjQ4KTtcclxufVxyXG5cclxuLm1hbGV7XHJcbmJhY2tncm91bmQ6IzAwNjNiMDtcclxufVxyXG5cclxuLmZlbWFsZXtcclxuYmFja2dyb3VuZDojOWE1ZTllO1xyXG59XHJcblxyXG4ubm9uU2F1ZGl7XHJcbmJhY2tncm91bmQ6IzY3NTkzYjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/orphans/orphans-table/orphans-table.component.html":
/*!********************************************************************!*\
  !*** ./src/app/orphans/orphans-table/orphans-table.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 align='center'>{{ user.name }}</h2>\r\n<mat-toolbar [class]=\"gender\" style=\"display:block;color:white;margin-bottom: 40px\">\r\n  <h4 style=\"margin:0 auto; text-align: center;line-height: 60px\" class=\"{{gender}}\">{{headerTitle}}</h4>\r\n</mat-toolbar>\r\n\r\n\r\n<div class=\"container\" id='data-table'>\r\n\r\n  <input type=\"text\" #myInput [(ngModel)]= \"firstName\" (input)=\"search()\" class=\"form-control col-4\" placeholder=\"بحث\" style='margin-bottom:10px'>\r\n\r\n\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table table-bordered\">\r\n\r\n      <tr style=\"background:#f2f0f0\">\r\n        <th>اسم المكفول</th>\r\n        <th>الحالة</th>\r\n        <th>رقم الهوية</th>\r\n        <th>نوع الكفالة</th>\r\n        <th>المبلغ</th>\r\n        <th>تاريخ الكفالة</th>\r\n        <th>اسم الكافل</th>\r\n        <th>المدينة</th>\r\n        <th>تعديل</th>\r\n        <th>إضافة كفيل</th>\r\n      </tr>\r\n    \r\n      <tr *ngFor=\"let orphan of orphans; let i = index\">\r\n\r\n        <td> {{ orphan.firstName + ' ' + orphan.secondName + ' ' + orphan.thirdName + ' ' + \"****\" }} </td>\r\n        <td> {{ orphan.status}} </td>\r\n        <td> {{ \"****\" + orphan.idNo}} </td>\r\n\r\n        <td>{{ orphan.kafalaType }}</td>\r\n        <td>{{ orphan.kafalaAmount  + \" ريال\"}}</td>\r\n        <td>{{ orphan.kafalaDate }}</td>\r\n        <td>{{ orphan.kafeelName }}</td>\r\n        <td>{{ orphan.kafeelCity }}</td>\r\n        <td><button mat-icon-button style='color:rgb(71, 138, 160)' (click)=\"onEdit(orphan.id)\"><mat-icon>edit</mat-icon></button></td>\r\n        <td><button mat-icon-button style='color:rgb(71, 138, 160)' (click)=\"onAddKafeelToOrphan(orphan.id)\"><mat-icon>add</mat-icon></button></td>\r\n        \r\n      </tr>\r\n  \r\n    </table>\r\n  </div>\r\n    \r\n</div>\r\n\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/orphans/orphans-table/orphans-table.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/orphans/orphans-table/orphans-table.component.ts ***!
  \******************************************************************/
/*! exports provided: OrphansTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrphansTableComponent", function() { return OrphansTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_orphan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/orphan.service */ "./src/app/shared/orphan.service.ts");
/* harmony import */ var _edit_orphan_edit_orphan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit-orphan/edit-orphan.component */ "./src/app/orphans/edit-orphan/edit-orphan.component.ts");
/* harmony import */ var src_app_kafeels_add_kafeel_to_orphan_add_kafeel_to_orphan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/kafeels/add-kafeel-to-orphan/add-kafeel-to-orphan.component */ "./src/app/kafeels/add-kafeel-to-orphan/add-kafeel-to-orphan.component.ts");







var OrphansTableComponent = /** @class */ (function () {
    function OrphansTableComponent(orphanService, route, dialog) {
        var _this = this;
        this.orphanService = orphanService;
        this.route = route;
        this.dialog = dialog;
        this.user = {
            name: '',
            email: '',
            org_id: ''
        };
        this.serial = 1;
        this.route.params.subscribe(function (params) { _this.gender = params.gender; _this.ngOnInit(); });
    }
    OrphansTableComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    OrphansTableComponent.prototype.getUser = function () {
        var _this = this;
        this.orphanService.getUser().subscribe(function (user) {
            _this.user = user;
            _this.org_id = user.org_id;
            _this.getOrhans();
        });
    };
    OrphansTableComponent.prototype.getHeaderTitle = function () {
        if (this.gender == 'male')
            this.headerTitle = "بيان السعوديين (ذكور)";
        if (this.gender == 'female')
            this.headerTitle = "بيان السعوديين (إناث)";
        if (this.gender == 'nonSaudi')
            this.headerTitle = "بيان غير السعوديين";
    };
    OrphansTableComponent.prototype.getOrhans = function () {
        var _this = this;
        return this.orphanService.getOrphans(this.org_id, this.gender).subscribe(function (data) {
            _this.orphans = data;
            _this.getHeaderTitle();
        });
    };
    OrphansTableComponent.prototype.onEdit = function (id) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.data = {
            orphan_id: id,
        };
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '55%';
        var dialogCallBack = this.dialog.open(_edit_orphan_edit_orphan_component__WEBPACK_IMPORTED_MODULE_5__["EditOrphanComponent"], dialogConfig);
        dialogCallBack.afterClosed().subscribe(function () {
            _this.getOrhans();
        });
    };
    OrphansTableComponent.prototype.onAddKafeelToOrphan = function (id) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.data = {
            orphan_id: id,
        };
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = false;
        dialogConfig.width = '70%';
        var dialogCallBack = this.dialog.open(src_app_kafeels_add_kafeel_to_orphan_add_kafeel_to_orphan_component__WEBPACK_IMPORTED_MODULE_6__["AddKafeelToOrphanComponent"], dialogConfig);
        dialogCallBack.afterClosed().subscribe(function () {
            _this.getOrhans();
        });
    };
    OrphansTableComponent.prototype.search = function () {
        var _this = this;
        if (this.firstName != "") {
            this.orphans = this.orphans.filter(function (res) {
                return res.firstName.match(_this.firstName);
            });
        }
        else {
            this.ngOnInit();
        }
    };
    OrphansTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orphans-table',
            template: __webpack_require__(/*! ./orphans-table.component.html */ "./src/app/orphans/orphans-table/orphans-table.component.html"),
            styles: [__webpack_require__(/*! ./orphans-table.component.css */ "./src/app/orphans/orphans-table/orphans-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_orphan_service__WEBPACK_IMPORTED_MODULE_4__["OrphanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], OrphansTableComponent);
    return OrphansTableComponent;
}());



/***/ }),

/***/ "./src/app/services/after-login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/after-login.service.ts ***!
  \*************************************************/
/*! exports provided: AfterLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterLoginService", function() { return AfterLoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");



var AfterLoginService = /** @class */ (function () {
    function AfterLoginService(Token) {
        this.Token = Token;
    }
    AfterLoginService.prototype.canActivate = function (route, state) {
        return this.Token.loggedIn();
    };
    AfterLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], AfterLoginService);
    return AfterLoginService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");




var AuthService = /** @class */ (function () {
    function AuthService(Token) {
        this.Token = Token;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.Token.loggedIn());
        this.authStatus = this.loggedIn.asObservable();
    }
    AuthService.prototype.changeAuthStatus = function (value) {
        this.loggedIn.next(value);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/before-login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/before-login.service.ts ***!
  \**************************************************/
/*! exports provided: BeforeLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeLoginService", function() { return BeforeLoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");



var BeforeLoginService = /** @class */ (function () {
    function BeforeLoginService(Token) {
        this.Token = Token;
    }
    BeforeLoginService.prototype.canActivate = function (route, state) {
        return !this.Token.loggedIn();
    };
    BeforeLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], BeforeLoginService);
    return BeforeLoginService;
}());



/***/ }),

/***/ "./src/app/services/jarwis.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/jarwis.service.ts ***!
  \********************************************/
/*! exports provided: JarwisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JarwisService", function() { return JarwisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/configuration */ "./src/app/shared/configuration.ts");




var JarwisService = /** @class */ (function () {
    function JarwisService(http) {
        this.http = http;
        this.config = new _shared_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        this.baseUrl = this.config.apiUrl;
    }
    JarwisService.prototype.signup = function (data) {
        return this.http.post(this.baseUrl + 'signup', data);
    };
    JarwisService.prototype.login = function (data) {
        return this.http.post(this.baseUrl + 'login', data);
    };
    JarwisService.prototype.sendPasswordResetLink = function (data) {
        return this.http.post(this.baseUrl + "/sendPasswordResetLink", data);
    };
    JarwisService.prototype.changePassword = function (data) {
        return this.http.post(this.baseUrl + "/resetPassword", data);
    };
    JarwisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JarwisService);
    return JarwisService;
}());



/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/configuration */ "./src/app/shared/configuration.ts");



var TokenService = /** @class */ (function () {
    function TokenService() {
        this.config = new _shared_configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"]();
        this.iss = {
            login: this.config.apiUrl + 'login',
            signup: this.config.apiUrl + 'signup'
        };
    }
    TokenService.prototype.handle = function (token) {
        this.set(token);
    };
    TokenService.prototype.set = function (token) {
        localStorage.setItem('token', token);
    };
    TokenService.prototype.get = function () {
        return localStorage.getItem('token');
    };
    TokenService.prototype.remove = function () {
        localStorage.removeItem('token');
    };
    TokenService.prototype.isValid = function () {
        var token = this.get();
        if (token) {
            var payload = this.payload(token);
            if (payload) {
                return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
            }
        }
        return false;
    };
    TokenService.prototype.payload = function (token) {
        var payload = token.split('.')[1];
        return this.decode(payload);
    };
    TokenService.prototype.decode = function (payload) {
        return JSON.parse(atob(payload));
    };
    TokenService.prototype.loggedIn = function () {
        return this.isValid();
    };
    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/shared/configuration.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/configuration.ts ***!
  \*****************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
var Configuration = /** @class */ (function () {
    function Configuration() {
        this.localApiUrl = 'http://orphan.test/api/';
        this.productionApiUrl = 'https://smart-solutions-sa.com/api/';
        this.newProductionApiUrl = 'https://alber-sa-backend.com/api/';
        this.apiUrl = this.newProductionApiUrl;
    }
    return Configuration;
}());



/***/ }),

/***/ "./src/app/shared/material.ts":
/*!************************************!*\
  !*** ./src/app/shared/material.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/orphan.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/orphan.service.ts ***!
  \******************************************/
/*! exports provided: OrphanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrphanService", function() { return OrphanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configuration */ "./src/app/shared/configuration.ts");






var OrphanService = /** @class */ (function () {
    function OrphanService(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.config = new _configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"]();
        this.navBar = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("none");
        this.navBarStatus = this.navBar.asObservable();
    }
    OrphanService.prototype.changeNavBarStatus = function (navBar) {
        this.navBar.next(navBar);
    };
    // add new org
    OrphanService.prototype.newOrg = function (org) {
        return this.http.post(this.config.apiUrl + 'new-org', org);
    };
    // get orphans
    OrphanService.prototype.getOrphans = function (org_id, gender) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('org_id', org_id).set('gender', gender);
        return this.http.get(this.config.apiUrl + 'orphans', { params: params });
    };
    // get only makfouled orphans
    OrphanService.prototype.getMakfouledOrphans = function (org_id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('org_id', org_id);
        return this.http.get(this.config.apiUrl + 'makfouled-orphans', { params: params });
    };
    // add new orphan
    OrphanService.prototype.newOrphan = function (orphan) {
        return this.http.post(this.config.apiUrl + 'new-orphan', orphan);
    };
    // get total of saudi male orphans
    OrphanService.prototype.getSaudiTotalRecords = function (org_id, gender) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('org_id', org_id).set('gender', gender);
        return this.http.get(this.config.apiUrl + 'saudi-total-records', { params: params });
    };
    // get total of saudi male orphans
    OrphanService.prototype.nonSaudiTotalRecords = function () {
        return this.http.get(this.config.apiUrl + 'non-saudi-total-records');
    };
    // get single orphan
    OrphanService.prototype.getOrphan = function (id) {
        return this.http.get(this.config.apiUrl + 'orphan/' + id);
    };
    // update orphan
    OrphanService.prototype.updateOrphan = function (orphan) {
        return this.http.post(this.config.apiUrl + 'update-orphan', orphan);
    };
    // add kafeel to orphan
    OrphanService.prototype.addKafeelToOrphan = function (orphan) {
        return this.http.post(this.config.apiUrl + 'add-kafeel-to-orphan', orphan);
    };
    // get logged in user details
    OrphanService.prototype.getUser = function () {
        // let headers = new HttpHeaders().set('Authorization', 'bearer ' + token)
        return this.http.post(this.config.apiUrl + 'me', '');
    };
    // get kafeels for an org
    // getKafeels():Observable<Kafeel[]>{
    //   return this.http.get<Kafeel[]>(this.config.apiUrl + 'kafeels-list')
    // }
    // get kafeels for an org
    OrphanService.prototype.getKafeels = function (org_id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('org_id', org_id);
        return this.http.get(this.config.apiUrl + 'kafeels-list', { params: params });
    };
    // add new kafeel
    OrphanService.prototype.newKafeel = function (kafeel) {
        return this.http.post(this.config.apiUrl + 'new-kafeel', kafeel);
    };
    OrphanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], OrphanService);
    return OrphanService;
}());



/***/ }),

/***/ "./src/app/shared/token-interceptor.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/token-interceptor.service.ts ***!
  \*****************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token.service */ "./src/app/services/token.service.ts");



var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var tokenService = this.injector.get(_services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]);
        var tokenizedReq = req.clone({
            setHeaders: {
                'Authorization': "Bearer " + tokenService.get()
            }
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/sites/aidab-steps/aidab-steps.component.css":
/*!*************************************************************!*\
  !*** ./src/app/sites/aidab-steps/aidab-steps.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper{\r\nwidth:100%;\r\nmax-width:950px;\r\nmargin:0 auto;\r\ntext-align:center;\r\nbackground:#a87a7d;\r\n}\r\n\r\n#wrapper img{\r\nmargin:15px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvYWlkYWItc3RlcHMvYWlkYWItc3RlcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFVBQVU7QUFDVixlQUFlO0FBQ2YsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxXQUFXO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9zaXRlcy9haWRhYi1zdGVwcy9haWRhYi1zdGVwcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dyYXBwZXJ7XHJcbndpZHRoOjEwMCU7XHJcbm1heC13aWR0aDo5NTBweDtcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbmJhY2tncm91bmQ6I2E4N2E3ZDtcclxufVxyXG5cclxuI3dyYXBwZXIgaW1ne1xyXG5tYXJnaW46MTVweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/sites/aidab-steps/aidab-steps.component.html":
/*!**************************************************************!*\
  !*** ./src/app/sites/aidab-steps/aidab-steps.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <img src=\"assets/sites/aidab-steps/steps.png\" alt=\"\" style=\"position: relative;right:-12px\">\r\n\r\n  <a href=\"https://alber-sa.com/orphans-public/6/male\">\r\n    <img src=\"assets/sites/raith-steps/male.png\" alt=\"\">\r\n  </a>\r\n\r\n  <a href=\"https://alber-sa.com/orphans-public/6/female\">\r\n    <img src=\"assets/sites/raith-steps/female.png\" alt=\"\">\r\n  </a>\r\n\r\n  <a href=\"https://alber-sa.com/makfouled-orphans/6\">\r\n    <img src=\"assets/sites/raith-steps/makfouled.png\" alt=\"\">\r\n  </a>\r\n\r\n  <img src=\"assets/sites/raith-steps/final.png\" alt=\"\">\r\n  \r\n\r\n</div>"

/***/ }),

/***/ "./src/app/sites/aidab-steps/aidab-steps.component.ts":
/*!************************************************************!*\
  !*** ./src/app/sites/aidab-steps/aidab-steps.component.ts ***!
  \************************************************************/
/*! exports provided: AidabStepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AidabStepsComponent", function() { return AidabStepsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AidabStepsComponent = /** @class */ (function () {
    function AidabStepsComponent() {
    }
    AidabStepsComponent.prototype.ngOnInit = function () {
    };
    AidabStepsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aidab-steps',
            template: __webpack_require__(/*! ./aidab-steps.component.html */ "./src/app/sites/aidab-steps/aidab-steps.component.html"),
            styles: [__webpack_require__(/*! ./aidab-steps.component.css */ "./src/app/sites/aidab-steps/aidab-steps.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AidabStepsComponent);
    return AidabStepsComponent;
}());



/***/ }),

/***/ "./src/app/sites/aidab/aidab-ekfalni/aidab-ekfalni.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/sites/aidab/aidab-ekfalni/aidab-ekfalni.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\nwidth:100%;\r\nmax-width:950px;\r\nmargin:0 auto;\r\nfont-family: Cairo;\r\nfont-weight: 700;\r\ntext-align: center;\r\nbackground-color: rgba(240, 236, 228, 0.5);\r\n}\r\n\r\n#social{\r\nbackground: #083452;\r\nheight: 60px;\r\npadding: 5px 0;\r\nmargin:5px 0;\r\n}\r\n\r\nheader ul{\r\npadding-right:103px;\r\nmargin:0;\r\n}\r\n\r\nheader li{\r\nlist-style: none;\r\nfloat:right;\r\nmargin:0 3px;\r\n}\r\n\r\n.hand{\r\ncursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvYWlkYWIvYWlkYWItZWtmYWxuaS9haWRhYi1la2ZhbG5pLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxVQUFVO0FBQ1YsZUFBZTtBQUNmLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQiwwQ0FBMEM7QUFDMUM7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkIsWUFBWTtBQUNaLGNBQWM7QUFDZCxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkIsUUFBUTtBQUNSOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFdBQVc7QUFDWCxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxlQUFlO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zaXRlcy9haWRhYi9haWRhYi1la2ZhbG5pL2FpZGFiLWVrZmFsbmkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG53aWR0aDoxMDAlO1xyXG5tYXgtd2lkdGg6OTUwcHg7XHJcbm1hcmdpbjowIGF1dG87XHJcbmZvbnQtZmFtaWx5OiBDYWlybztcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjM2LCAyMjgsIDAuNSk7XHJcbn1cclxuXHJcbiNzb2NpYWx7XHJcbmJhY2tncm91bmQ6ICMwODM0NTI7XHJcbmhlaWdodDogNjBweDtcclxucGFkZGluZzogNXB4IDA7XHJcbm1hcmdpbjo1cHggMDtcclxufVxyXG5cclxuaGVhZGVyIHVse1xyXG5wYWRkaW5nLXJpZ2h0OjEwM3B4O1xyXG5tYXJnaW46MDtcclxufVxyXG5cclxuaGVhZGVyIGxpe1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG5mbG9hdDpyaWdodDtcclxubWFyZ2luOjAgM3B4O1xyXG59XHJcblxyXG4uaGFuZHtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/sites/aidab/aidab-ekfalni/aidab-ekfalni.component.html":
/*!************************************************************************!*\
  !*** ./src/app/sites/aidab/aidab-ekfalni/aidab-ekfalni.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n\r\n  <!-- header --> \r\n  <header>\r\n    <img src=\"assets/sites/aidab-ekfalni/header.jpg\">\r\n    <div style='height:7px;background:#083452;margin-top:5px'></div>\r\n\r\n    <!-- social -->\r\n    <div id=\"social\">\r\n\r\n        <ul>\r\n\r\n            <li>\r\n                <img src=\"assets/sites/aidab-ekfalni/social/whatsapp.png\">\r\n            </li>\r\n\r\n            <li>\r\n                <a href=\"https://www.youtube.com/channel/UCwrJniDod_Ma82VDpoUxFjg\">\r\n                    <img src=\"assets/sites/aidab-ekfalni/social/youtube.png\">\r\n                </a>\r\n            </li>\r\n\r\n            <li>\r\n                <img src=\"assets/sites/aidab-ekfalni/social/snapchat.png\" class=\"hand\" (click)=\"onCreateNew('assets/sites/aidab-ekfalni/modals/snapchat.png')\" class=\"hand\">\r\n            </li>\r\n\r\n            <li>\r\n                <a href=\"https://www.instagram.com/beredabi/\">\r\n                    <img src=\"assets/sites/aidab-ekfalni/social/instgram.png\">\r\n                </a>\r\n            </li>\r\n\r\n            <li>\r\n                <a href=\"https://twitter.com/BerEdabi\">\r\n                    <img src=\"assets/sites/aidab-ekfalni/social/twitter.png\">\r\n                </a>\r\n            </li>\r\n\r\n            <li>\r\n                <img src=\"assets/sites/aidab-ekfalni/social/facebook.png\">\r\n            </li>\r\n\r\n\r\n        </ul>\r\n        \r\n    </div>\r\n\r\n    <div style='height:7px;background:#083452;margin-top:5px'></div>\r\n\r\n  </header>\r\n\r\n  <img src=\"assets/sites/aidab-ekfalni/license.png\" class=\"hand\" (click)=\"onCreateNew('assets/sites/aidab-ekfalni/modals/license.png')\" class=\"hand\">\r\n  <img src=\"assets/sites/aidab-ekfalni/mobile.png\" style=\"margin-right:7px;\">\r\n\r\n\r\n\r\n  <img src=\"assets/sites/aidab-ekfalni/big-img.png\">\r\n\r\n  <a href=\"https://www.almubasher.com.sa/portal/auth/login.do?locale=ar_SA\">\r\n    <img src=\"assets/sites/aidab-ekfalni/rajhi.png\">\r\n  </a>\r\n\r\n  <a href=\"https://www.almubasher.com.sa/portal/auth/login.do?locale=ar_SA\">\r\n    <img src=\"assets/sites/aidab-ekfalni/rajhi2.png\">\r\n  </a>\r\n\r\n  <a href=\"https://www.bankalbilad.com/Pages/default.aspx\">\r\n    <img src=\"assets/sites/aidab-ekfalni/bilad.png\">\r\n  </a>\r\n\r\n  <img src=\"assets/sites/aidab-ekfalni/final.png\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/sites/aidab/aidab-ekfalni/aidab-ekfalni.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/sites/aidab/aidab-ekfalni/aidab-ekfalni.component.ts ***!
  \**********************************************************************/
/*! exports provided: AidabEkfalniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AidabEkfalniComponent", function() { return AidabEkfalniComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal/modal.component */ "./src/app/sites/modal/modal.component.ts");





var AidabEkfalniComponent = /** @class */ (function () {
    function AidabEkfalniComponent(embedService, dialog, elementRef) {
        this.embedService = embedService;
        this.dialog = dialog;
        this.elementRef = elementRef;
    }
    AidabEkfalniComponent.prototype.ngOnInit = function () {
    };
    AidabEkfalniComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f0ece4';
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('assets/sites/aidab-waqf/new-pattern.png')";
    };
    AidabEkfalniComponent.prototype.onCreateNew = function (imgName) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = imgName;
        dialogConfig.autoFocus = true;
        var dialogCallBack = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], dialogConfig);
    };
    AidabEkfalniComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aidab-ekfalni',
            template: __webpack_require__(/*! ./aidab-ekfalni.component.html */ "./src/app/sites/aidab/aidab-ekfalni/aidab-ekfalni.component.html"),
            styles: [__webpack_require__(/*! ./aidab-ekfalni.component.css */ "./src/app/sites/aidab/aidab-ekfalni/aidab-ekfalni.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__["EmbedVideoService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AidabEkfalniComponent);
    return AidabEkfalniComponent;
}());



/***/ }),

/***/ "./src/app/sites/aidab/aidab-waqf/aidab-waqf.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/sites/aidab/aidab-waqf/aidab-waqf.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\r\npadding:0;\r\nmargin:0;\r\n}\r\n\r\n.hand{\r\ncursor: pointer;\r\n}\r\n\r\n.wrapper{\r\nwidth:100%;\r\nmax-width:950px;\r\nmargin:0 auto;\r\nfont-family: Cairo;\r\nfont-weight: 700;\r\n}\r\n\r\nheader{\r\nbackground:#5e0a0c;\r\nheight:488px;\r\nborder-radius:15px;\r\nmargin-bottom:9px;\r\n}\r\n\r\nheader ul{\r\nmargin-top:12px;\r\npadding-right:15px;\r\n}\r\n\r\nheader li{\r\nlist-style: none;\r\nfloat:right;\r\nmargin:0 18px;\r\n}\r\n\r\n.wq-elyateem-right{\r\nwidth:388px;\r\nheight:377px;\r\nfloat:right;\r\ntext-align: center;\r\nbackground:#EFEAD5;\r\nborder-radius:15px; \r\nborder:3px solid #5e0a0c;\r\nmargin:9px 0 12px 0;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 16px;\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n  background:none;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: #d9cd97;\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #555; \r\n}\r\n\r\n.wq-elyateem-right h3{\r\nbackground:#5e0a0c;\r\npadding:15px 0;\r\ncolor:#EFEAD5;\r\nfont-weight: bold;\r\n}\r\n\r\n.wq-elyateem-right p{\r\npadding:10px 20px;\r\nfont-size:20px;\r\nline-height: 35px;\r\noverflow: scroll;\r\nheight:300px;\r\n}\r\n\r\n.wq-projects-left{\r\nwidth:548px;\r\nfloat:left;\r\nbackground:#FCDF68;\r\ntext-align: center;\r\nborder-radius:15px; \r\noverflow: hidden;\r\nborder:3px solid #5e0a0c;\r\nmargin:9px 0 12px 0;\r\n}\r\n\r\n.wq-projects-left h3{\r\nbackground:#5e0a0c;\r\npadding:15px 0;\r\ncolor:#EFEAD5;\r\nfont-weight: bold;\r\n}\r\n\r\n.wq-projects-left img{\r\npadding:20px 0;\r\n}\r\n\r\n.youtube-left{\r\nwidth:548px;\r\nfloat:left;\r\nbackground:#EFEAD5;\r\ntext-align: center;\r\nborder-radius:15px; \r\noverflow: hidden;\r\nborder:3px solid #5e0a0c;\r\nmargin:9px 0 12px 0;\r\n}\r\n\r\n.youtube-left h3{\r\nbackground:#5e0a0c;\r\npadding:15px 0;\r\ncolor:#EFEAD5;\r\nfont-weight: bold;\r\n}\r\n\r\n.yt-container{\r\nposition: relative;\r\nwidth: 100%;\r\nheight: 0;\r\npadding-bottom: 56.25%;\r\n}\r\n\r\n.youtube-left ul{\r\ntext-align: center;\r\nlist-style: inside;\r\nmargin:0;\r\npadding:0;\r\nmargin-top:5px;\r\n}\r\n\r\n.youtube-left li{\r\nwidth:23%;\r\nmargin:2px 2px;\r\nlist-style: none;\r\nfloat:right;\r\n}\r\n\r\n.youtube-image{\r\nwidth:100%;\r\n}\r\n\r\n.tazkyat-slides-right{\r\nwidth:388px;\r\nheight:452px;\r\nfloat:right;\r\ntext-align: center;\r\nbackground:#EFEAD5;\r\nborder-radius:15px; \r\nborder:3px solid #5e0a0c;\r\nmargin:9px 0 12px 0;\r\noverflow: hidden;\r\n}\r\n\r\n.tazkyat-slides-right h3{\r\nbackground:#5e0a0c;\r\npadding:15px 0;\r\ncolor:#EFEAD5;\r\nfont-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvYWlkYWIvYWlkYWItd2FxZi9haWRhYi13YXFmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSOztBQUVBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0EsVUFBVTtBQUNWLGVBQWU7QUFDZixhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLGVBQWU7QUFDZixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIsV0FBVztBQUNYLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1osV0FBVztBQUNYLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsVUFBVTs7QUFDVjtFQUNFLGVBQWU7QUFDakI7O0FBRUEsV0FBVzs7QUFDWDtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxvQkFBb0I7O0FBQ3BCO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUdBO0FBQ0Esa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsY0FBYztBQUNkLGFBQWE7QUFDYixpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQix3QkFBd0I7QUFDeEIsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxTQUFTO0FBQ1Qsc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixRQUFRO0FBQ1IsU0FBUztBQUNULGNBQWM7QUFDZDs7QUFFQTtBQUNBLFNBQVM7QUFDVCxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLFdBQVc7QUFDWDs7QUFFQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1osV0FBVztBQUNYLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2l0ZXMvYWlkYWIvYWlkYWItd2FxZi9haWRhYi13YXFmLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoM3tcclxucGFkZGluZzowO1xyXG5tYXJnaW46MDtcclxufVxyXG5cclxuLmhhbmR7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLndyYXBwZXJ7XHJcbndpZHRoOjEwMCU7XHJcbm1heC13aWR0aDo5NTBweDtcclxubWFyZ2luOjAgYXV0bztcclxuZm9udC1mYW1pbHk6IENhaXJvO1xyXG5mb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5oZWFkZXJ7XHJcbmJhY2tncm91bmQ6IzVlMGEwYztcclxuaGVpZ2h0OjQ4OHB4O1xyXG5ib3JkZXItcmFkaXVzOjE1cHg7XHJcbm1hcmdpbi1ib3R0b206OXB4O1xyXG59XHJcblxyXG5oZWFkZXIgdWx7XHJcbm1hcmdpbi10b3A6MTJweDtcclxucGFkZGluZy1yaWdodDoxNXB4O1xyXG59XHJcblxyXG5oZWFkZXIgbGl7XHJcbmxpc3Qtc3R5bGU6IG5vbmU7XHJcbmZsb2F0OnJpZ2h0O1xyXG5tYXJnaW46MCAxOHB4O1xyXG59XHJcblxyXG4ud3EtZWx5YXRlZW0tcmlnaHR7XHJcbndpZHRoOjM4OHB4O1xyXG5oZWlnaHQ6Mzc3cHg7XHJcbmZsb2F0OnJpZ2h0O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmJhY2tncm91bmQ6I0VGRUFENTtcclxuYm9yZGVyLXJhZGl1czoxNXB4OyBcclxuYm9yZGVyOjNweCBzb2xpZCAjNWUwYTBjO1xyXG5tYXJnaW46OXB4IDAgMTJweCAwO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTZweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDpub25lO1xyXG59XHJcbiBcclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNkOWNkOTc7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1OyBcclxufVxyXG5cclxuXHJcbi53cS1lbHlhdGVlbS1yaWdodCBoM3tcclxuYmFja2dyb3VuZDojNWUwYTBjO1xyXG5wYWRkaW5nOjE1cHggMDtcclxuY29sb3I6I0VGRUFENTtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi53cS1lbHlhdGVlbS1yaWdodCBwe1xyXG5wYWRkaW5nOjEwcHggMjBweDtcclxuZm9udC1zaXplOjIwcHg7XHJcbmxpbmUtaGVpZ2h0OiAzNXB4O1xyXG5vdmVyZmxvdzogc2Nyb2xsO1xyXG5oZWlnaHQ6MzAwcHg7XHJcbn1cclxuXHJcbi53cS1wcm9qZWN0cy1sZWZ0e1xyXG53aWR0aDo1NDhweDtcclxuZmxvYXQ6bGVmdDtcclxuYmFja2dyb3VuZDojRkNERjY4O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmJvcmRlci1yYWRpdXM6MTVweDsgXHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbmJvcmRlcjozcHggc29saWQgIzVlMGEwYztcclxubWFyZ2luOjlweCAwIDEycHggMDtcclxufVxyXG5cclxuLndxLXByb2plY3RzLWxlZnQgaDN7XHJcbmJhY2tncm91bmQ6IzVlMGEwYztcclxucGFkZGluZzoxNXB4IDA7XHJcbmNvbG9yOiNFRkVBRDU7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ud3EtcHJvamVjdHMtbGVmdCBpbWd7XHJcbnBhZGRpbmc6MjBweCAwO1xyXG59XHJcblxyXG4ueW91dHViZS1sZWZ0e1xyXG53aWR0aDo1NDhweDtcclxuZmxvYXQ6bGVmdDtcclxuYmFja2dyb3VuZDojRUZFQUQ1O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmJvcmRlci1yYWRpdXM6MTVweDsgXHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbmJvcmRlcjozcHggc29saWQgIzVlMGEwYztcclxubWFyZ2luOjlweCAwIDEycHggMDtcclxufVxyXG5cclxuLnlvdXR1YmUtbGVmdCBoM3tcclxuYmFja2dyb3VuZDojNWUwYTBjO1xyXG5wYWRkaW5nOjE1cHggMDtcclxuY29sb3I6I0VGRUFENTtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi55dC1jb250YWluZXJ7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMDtcclxucGFkZGluZy1ib3R0b206IDU2LjI1JTtcclxufVxyXG5cclxuLnlvdXR1YmUtbGVmdCB1bHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5saXN0LXN0eWxlOiBpbnNpZGU7XHJcbm1hcmdpbjowO1xyXG5wYWRkaW5nOjA7XHJcbm1hcmdpbi10b3A6NXB4O1xyXG59XHJcblxyXG4ueW91dHViZS1sZWZ0IGxpe1xyXG53aWR0aDoyMyU7XHJcbm1hcmdpbjoycHggMnB4O1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG5mbG9hdDpyaWdodDtcclxufVxyXG5cclxuLnlvdXR1YmUtaW1hZ2V7XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi50YXpreWF0LXNsaWRlcy1yaWdodHtcclxud2lkdGg6Mzg4cHg7XHJcbmhlaWdodDo0NTJweDtcclxuZmxvYXQ6cmlnaHQ7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuYmFja2dyb3VuZDojRUZFQUQ1O1xyXG5ib3JkZXItcmFkaXVzOjE1cHg7IFxyXG5ib3JkZXI6M3B4IHNvbGlkICM1ZTBhMGM7XHJcbm1hcmdpbjo5cHggMCAxMnB4IDA7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50YXpreWF0LXNsaWRlcy1yaWdodCBoM3tcclxuYmFja2dyb3VuZDojNWUwYTBjO1xyXG5wYWRkaW5nOjE1cHggMDtcclxuY29sb3I6I0VGRUFENTtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sites/aidab/aidab-waqf/aidab-waqf.component.html":
/*!******************************************************************!*\
  !*** ./src/app/sites/aidab/aidab-waqf/aidab-waqf.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n\r\n    <!-- header -->\r\n    <header>\r\n\r\n        <img src=\"assets/sites/aidab-waqf/header.png\">\r\n\r\n        <!-- social media links -->\r\n        <div id=\"social\">\r\n\r\n            <ul>\r\n\r\n                <li>\r\n                    <img src=\"assets/sites/aidab-waqf/social/whatsapp.png\">\r\n                </li>\r\n\r\n                <li>\r\n                    <a href=\"https://www.youtube.com/channel/UCLftAaxqn5pLVeAFdX_C0fQ\">\r\n                        <img src=\"assets/sites/aidab-waqf/social/youtube.png\">\r\n                    </a>\r\n                </li>\r\n\r\n                <li>\r\n                    <img src=\"assets/sites/aidab-waqf/social/snapchat.png\" (click)=\"onCreateNew('assets/sites/aidab-waqf/modals/snapchat.png')\" class=\"hand\">\r\n                </li>\r\n\r\n                <li>\r\n                    <a href=\"https://www.instagram.com/wkedabi01/\">\r\n                        <img src=\"assets/sites/aidab-waqf/social/instgram.png\">\r\n                    </a>\r\n                </li>\r\n\r\n                <li>\r\n                    <a href=\"https://twitter.com/wkEdabi01\">\r\n                        <img src=\"assets/sites/aidab-waqf/social/twitter.png\">\r\n                    </a>\r\n                </li>\r\n\r\n                <!-- <li>\r\n                    <img src=\"assets/sites/aidab-waqf/social/facebook.png\">\r\n                </li> -->\r\n\r\n            </ul>\r\n            \r\n        </div>\r\n\r\n    </header>\r\n\r\n    <img src=\"assets/sites/aidab-waqf/license.png\" (click)=\"onCreateNew('assets/sites/aidab-waqf/modals/license.png')\" class=\"hand\">\r\n    <img src=\"assets/sites/aidab-waqf/mobile.png\" style=\"margin-right:7px;\">\r\n\r\n    <!-- وقف اليتيم بمكة المكرمة -->\r\n    <div class=\"wq-elyateem-right\">\r\n\r\n        <h3>وقف اليتيم بمكة المكرمة</h3>\r\n        <P dir=\"rtl\" style=\"text-align: justify\" class='wq-elyateem-makkah-content'>\r\n            تأسس وقف اليتيم الخيري بتاريخ 1/7/1440هـ بتصريح من وزارة العمل والتنمية والشؤون الاجتماعية رقم (228) ، ويشرف على إدارة الوقف مجلس إدارة جمعية البر بالعيدابي المكون من عشرة أعضاء من الثقات الأكفاء ذوي الخبرة الاستثمارية والإدارية \r\n            ما هو وقف اليتيم؟\r\n            الوقف عبارة عن مبنى استثماري مكون من شقق وغرف سكنية يقع بمكة المكرمة – داخل حدود الحرم مما يحقق مورد مالياً لكفالة ايتام الجمعية مدى الحياة. والذي يحقق مستلزماتهم الغذائية والتعليمية والصحية والاجتماعية\r\n        </P>\r\n\r\n    </div>\r\n\r\n    <!-- مشروعات الوقف -->\r\n    <div class=\"wq-projects-left\">\r\n\r\n        <h3>مشروعات الوقف</h3>\r\n        <img src=\"assets/sites/aidab-waqf/projects.png\" width='500'>\r\n\r\n    </div>\r\n\r\n    <!-- big banner -->\r\n    <img src=\"assets/sites/aidab-waqf/big-banner.png\">\r\n\r\n    <!-- youtube -->\r\n    <!-- <div class=\"youtube-left\">\r\n\r\n        <h3>تزكيات الوقف</h3>\r\n\r\n        <div class=\"yt-container\">\r\n            <div [innerHtml]=\"yt_iframe_html\"></div>\r\n        </div>\r\n\r\n        <ul>\r\n\r\n            <li class=\"hand\">\r\n                <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=Czi0edqwErY')\">\r\n                <img src=\"https://i.ytimg.com/vi/Czi0edqwErY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCuwdFLIWQhZsEh6A1Fk9bdY-92rw\" class=\"youtube-image\">\r\n                </a>\r\n            </li>   \r\n            \r\n            <li class=\"hand\">\r\n            <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=wjUsNYX1T1g')\">\r\n                <img src=\"https://i.ytimg.com/vi/wjUsNYX1T1g/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDm-ltykswB7o6FNNojUry5VbyLEg\" class=\"youtube-image\">\r\n            </a>\r\n            </li>\r\n\r\n            <li class=\"hand\">\r\n            <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=KI8a49lq6jI')\">\r\n                <img  src=\"https://i.ytimg.com/vi/KI8a49lq6jI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCgU62OM5ClXdGHAk1VWnbIqQP-5w\" class=\"youtube-image\">\r\n            </a>\r\n            </li>\r\n\r\n            <li class=\"hand\">\r\n                <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=zKeLfBLhGSo')\">\r\n                <img src=\"https://i.ytimg.com/vi/zKeLfBLhGSo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAdKx9MvlBDyDt4pLHunqSQOly3OQ\" class=\"youtube-image\">\r\n                </a>\r\n            </li>  \r\n\r\n        </ul>\r\n\r\n    </div> -->\r\n    \r\n    <!-- تزكيات أهل العلم -->\r\n    <!-- <div class=\"tazkyat-slides-right\">\r\n\r\n        <h3>تزكيات أهل العلم</h3>\r\n\r\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\" class=\"hand\">\r\n\r\n            <div class=\"carousel-inner\">\r\n\r\n                <div class=\"carousel-item active\">\r\n                    <img class=\"d-block w-100\" src=\"assets/sites/aidab-waqf/tazkyat/1.jpg\" (click)=\"onCreateNew('assets/sites/aidab-waqf/tazkyat/1.jpg')\">\r\n                </div>\r\n\r\n                <div class=\"carousel-item\" *ngFor=\"let image of images; let i = index\">\r\n                    <img class=\"d-block w-100\" src=\"assets/sites/aidab-waqf/tazkyat/{{i}}.jpg\" (click)=\"onCreateNew('assets/sites/aidab-waqf/tazkyat/' + i + '.jpg')\">\r\n                </div>\r\n\r\n            </div>\r\n            \r\n        </div>\r\n\r\n    </div> -->\r\n\r\n    <!-- بنر زكاتك -->\r\n    <img src=\"assets/sites/aidab-waqf/zakatak.png\">\r\n\r\n    <!-- حسابات البنك -->\r\n    <a href=\"https://www.almubasher.com.sa/portal/auth/login.do?locale=ar_SA\">\r\n      <img src=\"assets/sites/aidab-waqf/rajhi.png\">\r\n    </a>\r\n\r\n    <a href=\"https://www.bankalbilad.com/Pages/default.aspx\">\r\n      <img src=\"assets/sites/aidab-waqf/bilad.png\">\r\n    </a>\r\n\r\n    <!-- خاتمة -->\r\n    <img src=\"assets/sites/aidab-waqf/final.png\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/sites/aidab/aidab-waqf/aidab-waqf.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/sites/aidab/aidab-waqf/aidab-waqf.component.ts ***!
  \****************************************************************/
/*! exports provided: AidabWaqfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AidabWaqfComponent", function() { return AidabWaqfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal/modal.component */ "./src/app/sites/modal/modal.component.ts");





var AidabWaqfComponent = /** @class */ (function () {
    function AidabWaqfComponent(embedService, dialog, elementRef) {
        this.embedService = embedService;
        this.dialog = dialog;
        this.elementRef = elementRef;
        this.images = new Array(3);
        this.youtubeUrl = "https://www.youtube.com/watch?v=Czi0edqwErY";
    }
    AidabWaqfComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#DDEEF2';
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('assets/sites/aidab-waqf/new-pattern.png')";
    };
    AidabWaqfComponent.prototype.ngOnInit = function () {
        this.getYtUrl(this.youtubeUrl);
    };
    AidabWaqfComponent.prototype.getYtUrl = function (ytUrl) {
        this.yt_iframe_html = this.embedService.embed(ytUrl, {
            query: { portrait: 0, color: '333' },
            attr: { style: 'position:absolute;top:0;left:0;width:100%;height:100%' }
        });
    };
    AidabWaqfComponent.prototype.onCreateNew = function (imgName) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = imgName;
        dialogConfig.autoFocus = true;
        var dialogCallBack = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], dialogConfig);
    };
    AidabWaqfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aidab-waqf',
            template: __webpack_require__(/*! ./aidab-waqf.component.html */ "./src/app/sites/aidab/aidab-waqf/aidab-waqf.component.html"),
            styles: [__webpack_require__(/*! ./aidab-waqf.component.css */ "./src/app/sites/aidab/aidab-waqf/aidab-waqf.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__["EmbedVideoService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AidabWaqfComponent);
    return AidabWaqfComponent;
}());



/***/ }),

/***/ "./src/app/sites/arish/arish-projects/arish-projects.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/sites/arish/arish-projects/arish-projects.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hand{\r\ncursor: pointer;\r\n}\r\n\r\n.wrapper{   \r\nwidth:100%;\r\nmax-width:1024px;\r\nmargin:0 auto;\r\nfont-family: Cairo;\r\nfont-weight: 700;\r\n}\r\n\r\nheader{\r\nborder-radius:15px;\r\nmargin-bottom:9px;\r\nmargin-top:10px;\r\n}\r\n\r\n#social{\r\nbackground:#012f39;\r\nwidth:950px;\r\npadding:10px 0;\r\nheight:100px;\r\nmargin:25px auto;\r\n}\r\n\r\n#social ul{\r\nmargin:0;\r\ntext-align:center;\r\nposition: relative;\r\nright:-15px;\r\n}\r\n\r\n#social li{\r\nlist-style: none;\r\nmargin:0 5px;\r\ndisplay:inline-block;\r\nposition: relative;\r\ntop:-15px;\r\n}\r\n\r\nh4 span{\r\npadding:1px 50px;\r\n}\r\n\r\n#body-wrapper{\r\nwidth:950px;\r\nposition: relative;\r\ntext-align: center;\r\nmargin:0 auto;\r\nbackground-image: url('pattern.png');\r\nbackground-color:#b2c1c4;\r\n}\r\n\r\n.wq-elyateem-right{\r\nwidth:680px;\r\nheight:400px;\r\ntext-align: center;\r\nbackground:#01323d;\r\nborder-radius:40px; \r\nfloat:right;\r\n}\r\n\r\n::-webkit-scrollbar {\r\nwidth: 16px;\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\nbackground:none;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\nbackground: #cfffeb;\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\nbackground: #9bd6be; \r\n}\r\n\r\n.wq-elyateem-right h4{\r\n\r\nborder-radius:15px;\r\ncolor:white;\r\nmargin:20px 0;\r\n}\r\n\r\n.wq-elyateem-right p{\r\npadding:10px 50px;\r\nfont-size:18px;\r\nline-height: 33px;\r\n/* overflow: scroll; */\r\nheight:300px;\r\ncolor:white;\r\nfont-weight: normal;\r\n}\r\n\r\n.wq-elyateem-left{\r\nwidth:260px;\r\nheight:400px;\r\ntext-align: center;\r\nbackground:#01323d;\r\nborder-radius:40px; \r\nfloat:left;\r\noverflow: hidden;\r\n}\r\n\r\n.wq-elyateem-left h4{\r\nborder-radius:15px;\r\ncolor:white;\r\nmargin:20px 0;\r\n}\r\n\r\n.wq-projects-left{\r\nheight: 378px;\r\nwidth:265px;\r\nfloat:left;\r\nbackground:white;\r\ntext-align: center;\r\noverflow: hidden;\r\nborder-radius:40px; \r\nborder:3px solid #8fc6a9;\r\nmargin:9px 0 12px 0;\r\n}\r\n\r\n.wq-projects-left h4{\r\n\r\nborder-radius:15px;\r\ncolor:white;\r\nmargin:20px 0;\r\n}\r\n\r\n.wq-projects-left img{\r\npadding:20px 0;\r\n}\r\n\r\n.image-border{\r\npadding:10px;\r\nbackground:#2c5307;\r\nborder-radius:15px;\r\n}\r\n\r\n#waqf-projects{\r\nbackground:#e2fcea;\r\npadding:20px;\r\nborder:6px solid #2c5307;\r\nmargin: 30px 0;\r\n}\r\n\r\n#waqf-projects img{\r\nmargin-top:30px;\r\n}\r\n\r\n#waqf-projects h4{\r\ntext-align: center;\r\n\r\nborder-radius:15px;\r\ncolor:white;\r\nmargin:20px 0;\r\n}\r\n\r\n#fatwa{\r\nbackground:#2c5307;\r\npadding:20px 50px;\r\nmargin:30px 0;\r\n}\r\n\r\n#yt-wrapper h4{\r\ntext-align: center;\r\n\r\nborder-radius:15px;\r\ncolor:#2c5307;\r\nmargin-bottom: 20px;\r\n}\r\n\r\n.youtube-left{\r\nwidth:548px;\r\nfloat:left;\r\nbackground:white;\r\ntext-align: center;\r\noverflow: hidden;\r\nmargin:9px 0 9px 18px;\r\n}\r\n\r\n.yt-container{\r\nposition: relative;\r\nwidth: 100%;\r\nheight: 0;\r\npadding-bottom: 56.25%;\r\n}\r\n\r\n.youtube-left ul{\r\ntext-align: center;\r\nlist-style: inside;\r\nmargin:0;\r\npadding:0;\r\nmargin-top:5px;\r\n}\r\n\r\n.youtube-left li{\r\nwidth:19%;\r\nmargin:2px 2px;\r\nlist-style: none;\r\nfloat:right;\r\n}\r\n\r\n.youtube-image{\r\nwidth:100%;\r\n}\r\n\r\n.tazkyat-slides-right{\r\nwidth:350px;\r\nheight:426px;\r\nfloat:right;\r\ntext-align: center;\r\nbackground:white;\r\nmargin:9px 18px 12px 0;\r\noverflow: hidden;\r\n}\r\n\r\n.tazkyat-slides-right h4{\r\n\r\ncolor:white;\r\n}\r\n\r\nfooter{\r\nwidth:950px;\r\nmargin:0 auto;\r\npadding-top:20px;\r\ntext-align: center;\r\nbackground-color:#012f39;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvYXJpc2gvYXJpc2gtcHJvamVjdHMvYXJpc2gtcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsY0FBYztBQUNkLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSxRQUFRO0FBQ1IsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1g7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsU0FBUztBQUNUOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0EsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLG9DQUE0RTtBQUM1RSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWDs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQSxVQUFVOztBQUNWO0FBQ0EsZUFBZTtBQUNmOztBQUVBLFdBQVc7O0FBQ1g7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUEsb0JBQW9COztBQUNwQjtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTs7QUFFQSxrQkFBa0I7QUFDbEIsV0FBVztBQUNYLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCLHNCQUFzQjtBQUN0QixZQUFZO0FBQ1osV0FBVztBQUNYLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsVUFBVTtBQUNWLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWCxVQUFVO0FBQ1YsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkI7O0FBRUE7O0FBRUEsa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixZQUFZO0FBQ1osd0JBQXdCO0FBQ3hCLGNBQWM7QUFDZDs7QUFFQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBLGtCQUFrQjs7QUFFbEIsa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGtCQUFrQjs7QUFFbEIsa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsU0FBUztBQUNULHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsUUFBUTtBQUNSLFNBQVM7QUFDVCxjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsY0FBYztBQUNkLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1g7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBSUE7QUFDQSxXQUFXO0FBQ1gsWUFBWTtBQUNaLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLHNCQUFzQjtBQUN0QixnQkFBZ0I7QUFDaEI7O0FBRUE7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0EsV0FBVztBQUNYLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLHdCQUF3QjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3NpdGVzL2FyaXNoL2FyaXNoLXByb2plY3RzL2FyaXNoLXByb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFuZHtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ud3JhcHBlcnsgICBcclxud2lkdGg6MTAwJTtcclxubWF4LXdpZHRoOjEwMjRweDtcclxubWFyZ2luOjAgYXV0bztcclxuZm9udC1mYW1pbHk6IENhaXJvO1xyXG5mb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5oZWFkZXJ7XHJcbmJvcmRlci1yYWRpdXM6MTVweDtcclxubWFyZ2luLWJvdHRvbTo5cHg7XHJcbm1hcmdpbi10b3A6MTBweDtcclxufVxyXG5cclxuI3NvY2lhbHtcclxuYmFja2dyb3VuZDojMDEyZjM5O1xyXG53aWR0aDo5NTBweDtcclxucGFkZGluZzoxMHB4IDA7XHJcbmhlaWdodDoxMDBweDtcclxubWFyZ2luOjI1cHggYXV0bztcclxufVxyXG5cclxuI3NvY2lhbCB1bHtcclxubWFyZ2luOjA7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnJpZ2h0Oi0xNXB4O1xyXG59XHJcblxyXG4jc29jaWFsIGxpe1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG5tYXJnaW46MCA1cHg7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnRvcDotMTVweDtcclxufVxyXG5cclxuaDQgc3BhbntcclxucGFkZGluZzoxcHggNTBweDtcclxufVxyXG5cclxuI2JvZHktd3JhcHBlcntcclxud2lkdGg6OTUwcHg7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5tYXJnaW46MCBhdXRvO1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc2l0ZXMvYXJpc2gtcHJvamVjdHMvcGF0dGVybi5wbmdcIik7XHJcbmJhY2tncm91bmQtY29sb3I6I2IyYzFjNDtcclxufVxyXG5cclxuLndxLWVseWF0ZWVtLXJpZ2h0e1xyXG53aWR0aDo2ODBweDtcclxuaGVpZ2h0OjQwMHB4O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmJhY2tncm91bmQ6IzAxMzIzZDtcclxuYm9yZGVyLXJhZGl1czo0MHB4OyBcclxuZmxvYXQ6cmlnaHQ7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG53aWR0aDogMTZweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbmJhY2tncm91bmQ6bm9uZTtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG5iYWNrZ3JvdW5kOiAjY2ZmZmViO1xyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbmJhY2tncm91bmQ6ICM5YmQ2YmU7IFxyXG59XHJcblxyXG4ud3EtZWx5YXRlZW0tcmlnaHQgaDR7XHJcblxyXG5ib3JkZXItcmFkaXVzOjE1cHg7XHJcbmNvbG9yOndoaXRlO1xyXG5tYXJnaW46MjBweCAwO1xyXG59XHJcblxyXG4ud3EtZWx5YXRlZW0tcmlnaHQgcHtcclxucGFkZGluZzoxMHB4IDUwcHg7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG5saW5lLWhlaWdodDogMzNweDtcclxuLyogb3ZlcmZsb3c6IHNjcm9sbDsgKi9cclxuaGVpZ2h0OjMwMHB4O1xyXG5jb2xvcjp3aGl0ZTtcclxuZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLndxLWVseWF0ZWVtLWxlZnR7XHJcbndpZHRoOjI2MHB4O1xyXG5oZWlnaHQ6NDAwcHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuYmFja2dyb3VuZDojMDEzMjNkO1xyXG5ib3JkZXItcmFkaXVzOjQwcHg7IFxyXG5mbG9hdDpsZWZ0O1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ud3EtZWx5YXRlZW0tbGVmdCBoNHtcclxuYm9yZGVyLXJhZGl1czoxNXB4O1xyXG5jb2xvcjp3aGl0ZTtcclxubWFyZ2luOjIwcHggMDtcclxufVxyXG5cclxuLndxLXByb2plY3RzLWxlZnR7XHJcbmhlaWdodDogMzc4cHg7XHJcbndpZHRoOjI2NXB4O1xyXG5mbG9hdDpsZWZ0O1xyXG5iYWNrZ3JvdW5kOndoaXRlO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbmJvcmRlci1yYWRpdXM6NDBweDsgXHJcbmJvcmRlcjozcHggc29saWQgIzhmYzZhOTtcclxubWFyZ2luOjlweCAwIDEycHggMDtcclxufVxyXG5cclxuLndxLXByb2plY3RzLWxlZnQgaDR7XHJcblxyXG5ib3JkZXItcmFkaXVzOjE1cHg7XHJcbmNvbG9yOndoaXRlO1xyXG5tYXJnaW46MjBweCAwO1xyXG59XHJcblxyXG4ud3EtcHJvamVjdHMtbGVmdCBpbWd7XHJcbnBhZGRpbmc6MjBweCAwO1xyXG59XHJcblxyXG4uaW1hZ2UtYm9yZGVye1xyXG5wYWRkaW5nOjEwcHg7XHJcbmJhY2tncm91bmQ6IzJjNTMwNztcclxuYm9yZGVyLXJhZGl1czoxNXB4O1xyXG59XHJcblxyXG4jd2FxZi1wcm9qZWN0c3tcclxuYmFja2dyb3VuZDojZTJmY2VhO1xyXG5wYWRkaW5nOjIwcHg7XHJcbmJvcmRlcjo2cHggc29saWQgIzJjNTMwNztcclxubWFyZ2luOiAzMHB4IDA7XHJcbn1cclxuXHJcbiN3YXFmLXByb2plY3RzIGltZ3tcclxubWFyZ2luLXRvcDozMHB4O1xyXG59XHJcblxyXG4jd2FxZi1wcm9qZWN0cyBoNHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuYm9yZGVyLXJhZGl1czoxNXB4O1xyXG5jb2xvcjp3aGl0ZTtcclxubWFyZ2luOjIwcHggMDtcclxufVxyXG5cclxuI2ZhdHdhe1xyXG5iYWNrZ3JvdW5kOiMyYzUzMDc7XHJcbnBhZGRpbmc6MjBweCA1MHB4O1xyXG5tYXJnaW46MzBweCAwO1xyXG59XHJcblxyXG4jeXQtd3JhcHBlciBoNHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuYm9yZGVyLXJhZGl1czoxNXB4O1xyXG5jb2xvcjojMmM1MzA3O1xyXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ueW91dHViZS1sZWZ0e1xyXG53aWR0aDo1NDhweDtcclxuZmxvYXQ6bGVmdDtcclxuYmFja2dyb3VuZDp3aGl0ZTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG5tYXJnaW46OXB4IDAgOXB4IDE4cHg7XHJcbn1cclxuXHJcbi55dC1jb250YWluZXJ7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMDtcclxucGFkZGluZy1ib3R0b206IDU2LjI1JTtcclxufVxyXG5cclxuLnlvdXR1YmUtbGVmdCB1bHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5saXN0LXN0eWxlOiBpbnNpZGU7XHJcbm1hcmdpbjowO1xyXG5wYWRkaW5nOjA7XHJcbm1hcmdpbi10b3A6NXB4O1xyXG59XHJcblxyXG4ueW91dHViZS1sZWZ0IGxpe1xyXG53aWR0aDoxOSU7XHJcbm1hcmdpbjoycHggMnB4O1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG5mbG9hdDpyaWdodDtcclxufVxyXG5cclxuLnlvdXR1YmUtaW1hZ2V7XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLnRhemt5YXQtc2xpZGVzLXJpZ2h0e1xyXG53aWR0aDozNTBweDtcclxuaGVpZ2h0OjQyNnB4O1xyXG5mbG9hdDpyaWdodDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5iYWNrZ3JvdW5kOndoaXRlO1xyXG5tYXJnaW46OXB4IDE4cHggMTJweCAwO1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGF6a3lhdC1zbGlkZXMtcmlnaHQgaDR7XHJcblxyXG5jb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuZm9vdGVye1xyXG53aWR0aDo5NTBweDtcclxubWFyZ2luOjAgYXV0bztcclxucGFkZGluZy10b3A6MjBweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiMwMTJmMzk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sites/arish/arish-projects/arish-projects.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/sites/arish/arish-projects/arish-projects.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <!-- header -->\n  <header>\n\n      <img src=\"assets/sites/arish-projects/header.png\">\n\n  </header>\n\n  <div id=\"body-wrapper\">\n  \n\n    <!-- social media links -->\n    <div id=\"social\">\n\n        <ul>\n\n            <li>\n                <img src=\"assets/sites/arish-projects/social/call-us.png\">\n            </li>\n\n            <li>\n                <img src=\"assets/sites/arish-projects/social/whatsapp.png\">\n            </li>\n\n            <li>\n                    <a href=\"https://twitter.com/alberabuarish0\">\n                        <img src=\"assets/sites/arish-projects/social/twitter.png\">\n                    </a>\n            </li>\n\n            <li>\n                <a href=\"https://www.instagram.com/alberabuarish0/\">\n                    <img src=\"assets/sites/arish-projects/social/instagram.png\">\n                </a>\n            </li>\n\n            <li>\n                <img src=\"assets/sites/arish-projects/social/youtube.png\">\n            </li>\n\n            <li>\n                <img src=\"assets/sites/arish-projects/social/snapchat.png\" (click)=\"onCreateNew('assets/sites/arish-projects/modals/snapchat.png')\" class=\"hand\">\n            </li>\n\n\n        </ul>\n        \n    </div>\n\n    <!-- license -->\n    <img src=\"assets/sites/arish-projects/license.png\"\n    style=\"background:#5fd1ea;padding:10px 62px;margin-bottom:15px\"\n    (click)=\"onCreateNew('assets/sites/arish-waqf/modals/license.png')\" class=\"hand\">\n\n      \n      <!-- وقف اليتيم بمكة المكرمة -->\n      <div class=\"wq-elyateem-right\">\n  \n          <h4><span>جمعية البر الخيرية بمحافظة ابو عريش</span></h4>\n\n          <div style=\"height:3px; width:93%;margin:0 auto;background:#97e3f3;\"></div>\n\n          <P dir=\"rtl\" style=\"text-align: justify\" class='wq-elyateem-makkah-content'>\n\n                جمعية رائدة ومتميزة في انظمتها الادارية والخيرية، تأسست بتاريخ  1416-7-12هـ بتصريح من وزارة العمل والتنمية الاجتماعية برقم(134) يشرف عليها مجلس ادارة مكون من احد عشر عضوا من الثقات والاكفاء ذوي الخبرة في العمل الخيري والاداري.\n        \n        \n        <br><br>\n        <span>\n            <h5 style=\"text-align: center;font-size:22px\">نطاق أعمال ومناشط الجمعية</h5>\n\n            <P dir=\"rtl\" style=\"text-align: justify\" class='wq-elyateem-makkah-content'>\n\n                    تشرف الجمعية على اكثر من 56 قرية وهجرة تابعة لمنطقة جازان وتخدم الأيتام والفقراء والمساكين والأرامل والمطلقات وذوي الأحتياجات الخاصه .\n            </P>    \n                    \n        </span>\n        \n        \n            </P>\n         \n  \n      </div>\n    \n      <!-- وقف اليتيم بمكة المكرمة -->\n      <div class=\"wq-elyateem-left\">\n  \n          <h4><span>تزكيات الوقف</span></h4>\n\n          <div style=\"height:3px; width:93%;margin:0 auto;background:#97e3f3;\"></div>\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\" class=\"hand\">\n\n            <div class=\"carousel-inner\">\n\n                <div class=\"carousel-item active\">\n                    <img class=\"d-block w-100\" src=\"assets/sites/arish-waqf/tazkyat/1.jpg\" (click)=\"onCreateNew('assets/sites/arish-waqf/tazkyat/1.jpg')\">\n                </div>\n\n                <div class=\"carousel-item\" *ngFor=\"let image of images; let i = index\">\n                    <img class=\"d-block w-100\" src=\"assets/sites/arish-waqf/tazkyat/{{i}}.jpg\" (click)=\"onCreateNew('assets/sites/arish-waqf/tazkyat/' + i + '.jpg')\">\n                </div>\n\n            </div>\n            \n        </div>\n\n         \n  \n      </div>\n    \n      <!-- banner -->\n      <img src=\"assets/sites/arish-projects/big-banner.png\">\n        \n      \n  </div>\n\n\n\n  <footer>\n\n      <!-- rajhi -->\n        <a href=\"https://www.almubasher.com.sa/portal/auth/login.do?locale=ar_SA\">\n            <img src=\"assets/sites/arish-projects/rajhi.png\">\n        </a>\n\n        <a href=\"https://www.almubasher.com.sa/portal/auth/login.do?locale=ar_SA\">\n            <img src=\"assets/sites/arish-projects/rajhi2.png\">\n        </a>\n\n        <a href=\"https://www.alahlionline.com/online/login\">\n            <img src=\"assets/sites/arish-projects/ahli.png\">\n        </a>\n\n        <a href=\"https://www.bankalbilad.com/Pages/default.aspx\">\n            <img src=\"assets/sites/arish-projects/bilad.png\">\n        </a>\n\n\n      <div style=\"width:100%;background:#5fd1ea;padding:20px 0;margin-top: 20px\">\n      \n           <!-- final -->\n          <img src=\"assets/sites/arish-projects/final.png\">\n      \n      </div>\n\n  </footer>\n\n\n</div>"

/***/ }),

/***/ "./src/app/sites/arish/arish-projects/arish-projects.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/sites/arish/arish-projects/arish-projects.component.ts ***!
  \************************************************************************/
/*! exports provided: ArishProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArishProjectsComponent", function() { return ArishProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal/modal.component */ "./src/app/sites/modal/modal.component.ts");





var ArishProjectsComponent = /** @class */ (function () {
    function ArishProjectsComponent(embedService, dialog, elementRef) {
        this.embedService = embedService;
        this.dialog = dialog;
        this.elementRef = elementRef;
        this.images = new Array(2);
    }
    ArishProjectsComponent.prototype.ngOnInit = function () {
    };
    ArishProjectsComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('assets/sites/arish-projects/pattern.png')";
    };
    ArishProjectsComponent.prototype.onCreateNew = function (imgName) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = imgName;
        dialogConfig.autoFocus = true;
        var dialogCallBack = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], dialogConfig);
    };
    ArishProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-arish-projects',
            template: __webpack_require__(/*! ./arish-projects.component.html */ "./src/app/sites/arish/arish-projects/arish-projects.component.html"),
            styles: [__webpack_require__(/*! ./arish-projects.component.css */ "./src/app/sites/arish/arish-projects/arish-projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__["EmbedVideoService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ArishProjectsComponent);
    return ArishProjectsComponent;
}());



/***/ }),

/***/ "./src/app/sites/arish/arish-steps/arish-steps.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/sites/arish/arish-steps/arish-steps.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper{\r\nwidth:100%;\r\nmax-width:950px;\r\nmargin:0 auto;\r\ntext-align:center;\r\nbackground:rgb(12, 72, 122, 0.2);\r\npadding-top:150px;\r\nposition: relative;\r\ntop:-200px;\r\nz-index: -1;\r\n}\r\n\r\n#wrapper img{\r\nmargin:15px;\r\n}\r\n\r\nfooter{\r\nposition: relative;\r\ntop: -200px;\r\nwidth:950px;\r\nbackground:rgb(12, 72, 122, 0.2);\r\ntext-align: center;\r\nmargin: 0 auto;\r\npadding:15px 15px;\r\n}\r\n\r\nh2{\r\nbackground:#073843;\r\ntext-align: center;\r\ncolor: white;\r\npadding:15px 0;\r\nborder-radius: 30px;\r\nmargin:15px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvYXJpc2gvYXJpc2gtc3RlcHMvYXJpc2gtc3RlcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFVBQVU7QUFDVixlQUFlO0FBQ2YsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixnQ0FBZ0M7QUFDaEMsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1YsV0FBVztBQUNYOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxXQUFXO0FBQ1gsZ0NBQWdDO0FBQ2hDLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixZQUFZO0FBQ1osY0FBYztBQUNkLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9zaXRlcy9hcmlzaC9hcmlzaC1zdGVwcy9hcmlzaC1zdGVwcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dyYXBwZXJ7XHJcbndpZHRoOjEwMCU7XHJcbm1heC13aWR0aDo5NTBweDtcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbmJhY2tncm91bmQ6cmdiKDEyLCA3MiwgMTIyLCAwLjIpO1xyXG5wYWRkaW5nLXRvcDoxNTBweDtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG50b3A6LTIwMHB4O1xyXG56LWluZGV4OiAtMTtcclxufVxyXG5cclxuI3dyYXBwZXIgaW1ne1xyXG5tYXJnaW46MTVweDtcclxufVxyXG5cclxuZm9vdGVye1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnRvcDogLTIwMHB4O1xyXG53aWR0aDo5NTBweDtcclxuYmFja2dyb3VuZDpyZ2IoMTIsIDcyLCAxMjIsIDAuMik7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxubWFyZ2luOiAwIGF1dG87XHJcbnBhZGRpbmc6MTVweCAxNXB4O1xyXG59XHJcblxyXG5oMntcclxuYmFja2dyb3VuZDojMDczODQzO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmNvbG9yOiB3aGl0ZTtcclxucGFkZGluZzoxNXB4IDA7XHJcbmJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbm1hcmdpbjoxNXB4IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sites/arish/arish-steps/arish-steps.component.html":
/*!********************************************************************!*\
  !*** ./src/app/sites/arish/arish-steps/arish-steps.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <img src=\"assets/sites/arish-steps/header.png\" alt=\"\" style=\"position: relative;right:-12px\" width=\"973\">\n</div>\n\n\n<div id=\"wrapper\">\n\n  <img src=\"assets/sites/arish-steps/steps.png\" alt=\"\" style=\"position: relative;right:-20px\" width=\"950\">  \n\n</div>\n\n\n<footer>\n\n    <a href=\"https://alber-sa.com/orphans-public/7/male\">\n      <h2>للكفالة اضغط هنا للدخول الى بيانات الذكور</h2>\n    </a>\n\n    <a href=\"https://alber-sa.com/orphans-public/7/female\">\n      <h2>للكفالة اضغط هنا للدخول الى بيانات الإناث</h2>\n    </a>\n    \n    <a href=\"https://alber-sa.com/makfouled-orphans/7\">\n      <h2>بلغ عدد المكفولين () مكفول</h2>\n    </a>\n    \n    <img src=\"assets/sites/arish-steps/final.png\" alt=\"\" style=\"background:#073843; padding:20px 70px;margin-top:20px\">    \n</footer>"

/***/ }),

/***/ "./src/app/sites/arish/arish-steps/arish-steps.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/sites/arish/arish-steps/arish-steps.component.ts ***!
  \******************************************************************/
/*! exports provided: ArishStepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArishStepsComponent", function() { return ArishStepsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArishStepsComponent = /** @class */ (function () {
    function ArishStepsComponent(elementRef) {
        this.elementRef = elementRef;
    }
    ArishStepsComponent.prototype.ngOnInit = function () {
    };
    ArishStepsComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('assets/sites/arish-waqf/pattern.png')";
    };
    ArishStepsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-arish-steps',
            template: __webpack_require__(/*! ./arish-steps.component.html */ "./src/app/sites/arish/arish-steps/arish-steps.component.html"),
            styles: [__webpack_require__(/*! ./arish-steps.component.css */ "./src/app/sites/arish/arish-steps/arish-steps.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ArishStepsComponent);
    return ArishStepsComponent;
}());



/***/ }),

/***/ "./src/app/sites/arish/arish-waqf/arish-waqf.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/sites/arish/arish-waqf/arish-waqf.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\r\npadding:0;\r\nmargin:0;\r\n}\r\n\r\n.hand{\r\ncursor: pointer;\r\n}\r\n\r\n.wrapper{\r\nwidth:100%;\r\nmax-width:950px;\r\nmargin:0 auto;\r\nfont-family: Cairo;\r\nfont-weight: 700;\r\n}\r\n\r\n#social{\r\nwidth:890px;\r\nmargin:0 auto;\r\nbackground:#1c3800;\r\nheight: 93px;\r\npadding-top:5px;\r\n}\r\n\r\n#social ul{\r\nmargin-top:12px;\r\npadding-right:100px;\r\n}\r\n\r\n#social li{\r\nlist-style: none;\r\nfloat:right;\r\nmargin:0 18px;\r\n}\r\n\r\n.small-wrapper{\r\nwidth:890px;\r\nmargin:10px auto 0 auto;\r\npadding-top:15px;\r\nbackground:rgba(21, 90, 10, 0.4);;\r\ntext-align: center;\r\n}\r\n\r\n.wq-elyateem-right{\r\nwidth:600px;\r\nheight:400px;\r\nfloat:right;\r\ntext-align: center;\r\nbackground:white;\r\nborder-radius:30px; \r\nmargin:9px 15px 0 0;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 16px;\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n  background:none;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: #d9cd97;\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #555; \r\n}\r\n\r\n.wq-elyateem-right h3{\r\npadding:15px 0;\r\ncolor:#EFEAD5;\r\n}\r\n\r\n.wq-elyateem-right span{\r\npadding:0 40px;\r\nbackground:#2c5307;\r\nborder-radius: 30px;\r\n}\r\n\r\n.wq-elyateem-right p{\r\npadding:0 20px;\r\nfont-size:20px;\r\nline-height: 35px;\r\n}\r\n\r\n.wq-projects-left{\r\nheight:400px;\r\nwidth:250px;\r\nfloat:left;\r\nbackground:white;\r\ntext-align: center;\r\nborder-radius:30px; \r\noverflow: hidden;\r\nmargin:9px 0 0 15px;\r\n}\r\n\r\n.wq-projects-left h3{\r\npadding:15px 0;\r\ncolor:#EFEAD5;\r\n}\r\n\r\n.wq-projects-left span{\r\npadding:0 10px;\r\nbackground:#2c5307;\r\nborder-radius: 30px;\r\n}\r\n\r\n.wq-projects-left img{\r\npadding:0 20px;\r\n}\r\n\r\n.youtube-left{\r\nwidth:548px;\r\nfloat:left;\r\nbackground:#EFEAD5;\r\ntext-align: center;\r\nborder-radius:15px; \r\noverflow: hidden;\r\nborder:3px solid #5e0a0c;\r\nmargin:9px 0 12px 0;\r\n}\r\n\r\n.youtube-left h3{\r\nbackground:#5e0a0c;\r\npadding:15px 0;\r\ncolor:#EFEAD5;\r\nfont-weight: bold;\r\n}\r\n\r\n.yt-container{\r\nposition: relative;\r\nwidth: 100%;\r\nheight: 0;\r\npadding-bottom: 56.25%;\r\n}\r\n\r\n.youtube-left ul{\r\ntext-align: center;\r\nlist-style: inside;\r\nmargin:0;\r\npadding:0;\r\nmargin-top:5px;\r\n}\r\n\r\n.youtube-left li{\r\nwidth:23%;\r\nmargin:2px 2px;\r\nlist-style: none;\r\nfloat:right;\r\n}\r\n\r\n.youtube-image{\r\nwidth:100%;\r\n}\r\n\r\n.tazkyat-slides-right{\r\nwidth:388px;\r\nheight:452px;\r\nfloat:right;\r\ntext-align: center;\r\nbackground:#EFEAD5;\r\nborder-radius:15px; \r\nborder:3px solid #5e0a0c;\r\nmargin:9px 0 12px 0;\r\noverflow: hidden;\r\n}\r\n\r\n.tazkyat-slides-right h3{\r\nbackground:#5e0a0c;\r\npadding:15px 0;\r\ncolor:#EFEAD5;\r\nfont-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvYXJpc2gvYXJpc2gtd2FxZi9hcmlzaC13YXFmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSOztBQUVBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0EsVUFBVTtBQUNWLGVBQWU7QUFDZixhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBLFdBQVc7QUFDWCxhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLFlBQVk7QUFDWixlQUFlO0FBQ2Y7O0FBRUE7QUFDQSxlQUFlO0FBQ2YsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFdBQVc7QUFDWCxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsdUJBQXVCO0FBQ3ZCLGdCQUFnQjtBQUNoQixnQ0FBZ0M7QUFDaEMsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBLFVBQVU7O0FBQ1Y7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLFdBQVc7O0FBQ1g7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEsb0JBQW9COztBQUNwQjtFQUNFLGdCQUFnQjtBQUNsQjs7QUFHQTtBQUNBLGNBQWM7QUFDZCxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLGNBQWM7QUFDZCxjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWTtBQUNaLFdBQVc7QUFDWCxVQUFVO0FBQ1YsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLGNBQWM7QUFDZCxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsY0FBYztBQUNkLGFBQWE7QUFDYixpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsV0FBVztBQUNYLFNBQVM7QUFDVCxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLFFBQVE7QUFDUixTQUFTO0FBQ1QsY0FBYztBQUNkOztBQUVBO0FBQ0EsU0FBUztBQUNULGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsV0FBVztBQUNYOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsd0JBQXdCO0FBQ3hCLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsY0FBYztBQUNkLGFBQWE7QUFDYixpQkFBaUI7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zaXRlcy9hcmlzaC9hcmlzaC13YXFmL2FyaXNoLXdhcWYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgze1xyXG5wYWRkaW5nOjA7XHJcbm1hcmdpbjowO1xyXG59XHJcblxyXG4uaGFuZHtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ud3JhcHBlcntcclxud2lkdGg6MTAwJTtcclxubWF4LXdpZHRoOjk1MHB4O1xyXG5tYXJnaW46MCBhdXRvO1xyXG5mb250LWZhbWlseTogQ2Fpcm87XHJcbmZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiNzb2NpYWx7XHJcbndpZHRoOjg5MHB4O1xyXG5tYXJnaW46MCBhdXRvO1xyXG5iYWNrZ3JvdW5kOiMxYzM4MDA7XHJcbmhlaWdodDogOTNweDtcclxucGFkZGluZy10b3A6NXB4O1xyXG59XHJcblxyXG4jc29jaWFsIHVse1xyXG5tYXJnaW4tdG9wOjEycHg7XHJcbnBhZGRpbmctcmlnaHQ6MTAwcHg7XHJcbn1cclxuXHJcbiNzb2NpYWwgbGl7XHJcbmxpc3Qtc3R5bGU6IG5vbmU7XHJcbmZsb2F0OnJpZ2h0O1xyXG5tYXJnaW46MCAxOHB4O1xyXG59XHJcblxyXG4uc21hbGwtd3JhcHBlcntcclxud2lkdGg6ODkwcHg7XHJcbm1hcmdpbjoxMHB4IGF1dG8gMCBhdXRvO1xyXG5wYWRkaW5nLXRvcDoxNXB4O1xyXG5iYWNrZ3JvdW5kOnJnYmEoMjEsIDkwLCAxMCwgMC40KTs7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLndxLWVseWF0ZWVtLXJpZ2h0e1xyXG53aWR0aDo2MDBweDtcclxuaGVpZ2h0OjQwMHB4O1xyXG5mbG9hdDpyaWdodDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5iYWNrZ3JvdW5kOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOjMwcHg7IFxyXG5tYXJnaW46OXB4IDE1cHggMCAwO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTZweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDpub25lO1xyXG59XHJcbiBcclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNkOWNkOTc7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1OyBcclxufVxyXG5cclxuXHJcbi53cS1lbHlhdGVlbS1yaWdodCBoM3tcclxucGFkZGluZzoxNXB4IDA7XHJcbmNvbG9yOiNFRkVBRDU7XHJcbn1cclxuXHJcbi53cS1lbHlhdGVlbS1yaWdodCBzcGFue1xyXG5wYWRkaW5nOjAgNDBweDtcclxuYmFja2dyb3VuZDojMmM1MzA3O1xyXG5ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG4ud3EtZWx5YXRlZW0tcmlnaHQgcHtcclxucGFkZGluZzowIDIwcHg7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG5saW5lLWhlaWdodDogMzVweDtcclxufVxyXG5cclxuLndxLXByb2plY3RzLWxlZnR7XHJcbmhlaWdodDo0MDBweDtcclxud2lkdGg6MjUwcHg7XHJcbmZsb2F0OmxlZnQ7XHJcbmJhY2tncm91bmQ6d2hpdGU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuYm9yZGVyLXJhZGl1czozMHB4OyBcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxubWFyZ2luOjlweCAwIDAgMTVweDtcclxufVxyXG5cclxuLndxLXByb2plY3RzLWxlZnQgaDN7XHJcbnBhZGRpbmc6MTVweCAwO1xyXG5jb2xvcjojRUZFQUQ1O1xyXG59XHJcblxyXG4ud3EtcHJvamVjdHMtbGVmdCBzcGFue1xyXG5wYWRkaW5nOjAgMTBweDtcclxuYmFja2dyb3VuZDojMmM1MzA3O1xyXG5ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG4ud3EtcHJvamVjdHMtbGVmdCBpbWd7XHJcbnBhZGRpbmc6MCAyMHB4O1xyXG59XHJcblxyXG4ueW91dHViZS1sZWZ0e1xyXG53aWR0aDo1NDhweDtcclxuZmxvYXQ6bGVmdDtcclxuYmFja2dyb3VuZDojRUZFQUQ1O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmJvcmRlci1yYWRpdXM6MTVweDsgXHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbmJvcmRlcjozcHggc29saWQgIzVlMGEwYztcclxubWFyZ2luOjlweCAwIDEycHggMDtcclxufVxyXG5cclxuLnlvdXR1YmUtbGVmdCBoM3tcclxuYmFja2dyb3VuZDojNWUwYTBjO1xyXG5wYWRkaW5nOjE1cHggMDtcclxuY29sb3I6I0VGRUFENTtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi55dC1jb250YWluZXJ7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMDtcclxucGFkZGluZy1ib3R0b206IDU2LjI1JTtcclxufVxyXG5cclxuLnlvdXR1YmUtbGVmdCB1bHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5saXN0LXN0eWxlOiBpbnNpZGU7XHJcbm1hcmdpbjowO1xyXG5wYWRkaW5nOjA7XHJcbm1hcmdpbi10b3A6NXB4O1xyXG59XHJcblxyXG4ueW91dHViZS1sZWZ0IGxpe1xyXG53aWR0aDoyMyU7XHJcbm1hcmdpbjoycHggMnB4O1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG5mbG9hdDpyaWdodDtcclxufVxyXG5cclxuLnlvdXR1YmUtaW1hZ2V7XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi50YXpreWF0LXNsaWRlcy1yaWdodHtcclxud2lkdGg6Mzg4cHg7XHJcbmhlaWdodDo0NTJweDtcclxuZmxvYXQ6cmlnaHQ7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuYmFja2dyb3VuZDojRUZFQUQ1O1xyXG5ib3JkZXItcmFkaXVzOjE1cHg7IFxyXG5ib3JkZXI6M3B4IHNvbGlkICM1ZTBhMGM7XHJcbm1hcmdpbjo5cHggMCAxMnB4IDA7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50YXpreWF0LXNsaWRlcy1yaWdodCBoM3tcclxuYmFja2dyb3VuZDojNWUwYTBjO1xyXG5wYWRkaW5nOjE1cHggMDtcclxuY29sb3I6I0VGRUFENTtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sites/arish/arish-waqf/arish-waqf.component.html":
/*!******************************************************************!*\
  !*** ./src/app/sites/arish/arish-waqf/arish-waqf.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n\n    <img src=\"assets/sites/arish-waqf/header.png\">\n\n    <!-- social media links -->\n    <div id=\"social\">\n\n        <ul>\n\n            <li>\n                <img src=\"assets/sites/arish-waqf/social/whatsapp.png\">\n            </li>\n\n            <li>\n                <img src=\"assets/sites/arish-waqf/social/youtube.png\">\n            </li>\n\n            <li>\n                <img src=\"assets/sites/arish-waqf/social/snapchat.png\" (click)=\"onCreateNew('assets/sites/arish-waqf/modals/snapchat.png')\" class=\"hand\">\n            </li>\n\n            <li>\n                <a href=\"https://www.instagram.com/wkfalwaldeen/\">\n                    <img src=\"assets/sites/arish-waqf/social/instagram.png\">\n                </a>\n            </li>\n\n            <li>\n                <a href=\"https://twitter.com/wkfalwaldeen\">\n                    <img src=\"assets/sites/arish-waqf/social/twitter.png\">\n                </a>\n            </li>\n\n            <!-- <li>\n                <img src=\"assets/sites/arish-waqf/social/facebook.png\">\n            </li> -->\n\n        </ul>\n        \n    </div>\n\n    <div class=\"small-wrapper\">\n\n\n        <div style=\"margin-bottom:10px\">\n            <img src=\"assets/sites/arish-waqf/license.png\" (click)=\"onCreateNew('assets/sites/arish-waqf/modals/license.png')\" class=\"hand\">\n            <img src=\"assets/sites/arish-waqf/mobile.png\" style=\"margin-right:10px;\">\n        </div>\n        \n\n\n        <!-- وقف اليتيم بمكة المكرمة -->\n        <div class=\"wq-elyateem-right\">\n    \n            <h3><span>وقف الوالدين بمكة المكرمة</span></h3>\n            <P dir=\"rtl\" style=\"text-align: justify\" class='wq-elyateem-makkah-content'>\n\n                تأسس وقف الوالدين بمكة الخيري  بتاريخ 1/ 7 / 1440هـ وبتصريح من وزارة العمل والتنمية الاجتماعية برقم(134) يشرف عليه مجلس ادارة جمعية البر الخيرية بابي عريش والمكون من احد عشر عضو من الثقات والاكفاء ذوي الخبرة  الاستثمارية والادارية.        \n            </P>\n\n            <h5 style=\"text-align: center;font-size:22px\">ماهو وقف  الوالدين بمكة ؟</h5>\n\n            <P dir=\"rtl\" style=\"text-align: justify\" class='wq-elyateem-makkah-content'>\n\n                الوقف عبارة عن برج فتدقي مكون من اجنحه وغرف فندقية يقع بمكة المكرمة – داخل حدود الحرم مما يحقق مورد مالياً لكفالة ايتام وفقراء  الجمعية مدى الحياة والذي يكفل مستلزماتهم الغذائية والتعليمية والصحية والاجتماعية .\n            </P>    \n                    \n        \n        \n    \n        </div>\n    \n        <!-- مشروعات الوقف -->\n        <div class=\"wq-projects-left\">\n    \n            <h3><span>التزكيات</span></h3>\n            <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\" class=\"hand\">\n\n                <div class=\"carousel-inner\">\n\n                    <div class=\"carousel-item active\">\n                        <img class=\"d-block w-100\" src=\"assets/sites/arish-waqf/tazkyat/1.jpg\" (click)=\"onCreateNew('assets/sites/arish-waqf/tazkyat/1.jpg')\">\n                    </div>\n\n                    <div class=\"carousel-item\" *ngFor=\"let image of images; let i = index\">\n                        <img class=\"d-block w-100\" src=\"assets/sites/arish-waqf/tazkyat/{{i}}.jpg\" (click)=\"onCreateNew('assets/sites/arish-waqf/tazkyat/' + i + '.jpg')\">\n                    </div>\n\n                </div>\n                \n            </div>\n    \n        </div>\n    \n        <!-- big banner -->\n        <img src=\"assets/sites/arish-waqf/big-banner.png\">    \n    \n        <!-- حسابات البنك -->\n        <a href=\"https://www.almubasher.com.sa/portal/auth/login.do?locale=ar_SA\">\n            <img src=\"assets/sites/arish-waqf/rajhi.png\">\n        </a>\n    \n        <a href=\"https://www.alahlionline.com/online/login\">\n            <img src=\"assets/sites/arish-waqf/ahli.png\">\n        </a>\n    \n        <a href=\"https://www.bankalbilad.com/Pages/default.aspx\">\n            <img src=\"assets/sites/arish-waqf/bilad.png\">\n        </a>\n    \n        <!-- خاتمة -->\n        <div style=\"background:#155b0a;margin-top:15px\">\n            <img src=\"assets/sites/arish-waqf/final.png\">\n        </div>\n        \n    </div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/sites/arish/arish-waqf/arish-waqf.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/sites/arish/arish-waqf/arish-waqf.component.ts ***!
  \****************************************************************/
/*! exports provided: ArishWaqfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArishWaqfComponent", function() { return ArishWaqfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal/modal.component */ "./src/app/sites/modal/modal.component.ts");





var ArishWaqfComponent = /** @class */ (function () {
    function ArishWaqfComponent(embedService, dialog, elementRef) {
        this.embedService = embedService;
        this.dialog = dialog;
        this.elementRef = elementRef;
        this.images = new Array(2);
    }
    ArishWaqfComponent.prototype.ngOnInit = function () {
    };
    ArishWaqfComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('assets/sites/arish-steps/pattern.png')";
    };
    ArishWaqfComponent.prototype.onCreateNew = function (imgName) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = imgName;
        dialogConfig.autoFocus = true;
        var dialogCallBack = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], dialogConfig);
    };
    ArishWaqfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-arish-waqf',
            template: __webpack_require__(/*! ./arish-waqf.component.html */ "./src/app/sites/arish/arish-waqf/arish-waqf.component.html"),
            styles: [__webpack_require__(/*! ./arish-waqf.component.css */ "./src/app/sites/arish/arish-waqf/arish-waqf.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__["EmbedVideoService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ArishWaqfComponent);
    return ArishWaqfComponent;
}());



/***/ }),

/***/ "./src/app/sites/cards/choose-card/choose-card.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/sites/cards/choose-card/choose-card.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\nwidth:800px;\r\nmargin: 15px 0;\r\nborder: 1px solid black;\r\n}\r\n\r\na{\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvY2FyZHMvY2hvb3NlLWNhcmQvY2hvb3NlLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFdBQVc7QUFDWCxjQUFjO0FBQ2QsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9zaXRlcy9jYXJkcy9jaG9vc2UtY2FyZC9jaG9vc2UtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG53aWR0aDo4MDBweDtcclxubWFyZ2luOiAxNXB4IDA7XHJcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5he1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/sites/cards/choose-card/choose-card.component.html":
/*!********************************************************************!*\
  !*** ./src/app/sites/cards/choose-card/choose-card.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"max-width: 820px;margin: 0 auto;text-align: center\">\n\n  <h1 style=\"width:60%;background:#00BCBC;border-radius:30px; margin: 30px auto;color:white;padding:10px;font-family: 'Droid Arabic Kufi'\">\n    اختر البطاقة\n  </h1>  \n\n  <a routerLink=\"/new-card/{{category}}/0\">\n    <img src=\"assets/sites/cards/categories/{{category}}/0.jpg\" alt=\"\">\n  </a>\n\n  <a routerLink=\"/new-card/{{category}}/1\">\n    <img src=\"assets/sites/cards/categories/{{category}}/1.jpg\" alt=\"\">\n  </a>\n\n  <a routerLink=\"/new-card/{{category}}/2\">\n    <img src=\"assets/sites/cards/categories/{{category}}/2.jpg\" alt=\"\">\n  </a>\n\n  <a routerLink=\"/new-card/{{category}}/3\">\n    <img src=\"assets/sites/cards/categories/{{category}}/3.jpg\" alt=\"\">\n  </a>\n\n  <a routerLink=\"/new-card/{{category}}/4\">\n    <img src=\"assets/sites/cards/categories/{{category}}/4.jpg\" alt=\"\">\n  </a>\n\n  <a routerLink=\"/new-card/{{category}}/5\">\n    <img src=\"assets/sites/cards/categories/{{category}}/5.jpg\" alt=\"\">\n  </a>\n\n  <a routerLink=\"/new-card/{{category}}/6\">\n    <img src=\"assets/sites/cards/categories/{{category}}/6.jpg\" alt=\"\">\n  </a>\n\n  <a routerLink=\"/new-card/{{category}}/7\">\n    <img src=\"assets/sites/cards/categories/{{category}}/7.jpg\" alt=\"\">\n  </a>\n\n  <a routerLink=\"/new-card/{{category}}/8\">\n    <img src=\"assets/sites/cards/categories/{{category}}/8.jpg\" alt=\"\">\n  </a>\n\n  <a routerLink=\"/new-card/{{category}}/9\">\n    <img src=\"assets/sites/cards/categories/{{category}}/9.jpg\" alt=\"\">\n  </a>\n\n  <a routerLink=\"/new-card/{{category}}/10\">\n    <img src=\"assets/sites/cards/categories/{{category}}/10.jpg\" alt=\"\">\n  </a>\n\n  <a routerLink=\"/new-card/{{category}}/11\">\n    <img src=\"assets/sites/cards/categories/{{category}}/11.jpg\" alt=\"\">\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/sites/cards/choose-card/choose-card.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/sites/cards/choose-card/choose-card.component.ts ***!
  \******************************************************************/
/*! exports provided: ChooseCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseCardComponent", function() { return ChooseCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ChooseCardComponent = /** @class */ (function () {
    function ChooseCardComponent(route) {
        var _this = this;
        this.route = route;
        this.route.params.subscribe(function (params) { _this.category = params.category; _this.ngOnInit(); });
    }
    ChooseCardComponent.prototype.ngOnInit = function () {
    };
    ChooseCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choose-card',
            template: __webpack_require__(/*! ./choose-card.component.html */ "./src/app/sites/cards/choose-card/choose-card.component.html"),
            styles: [__webpack_require__(/*! ./choose-card.component.css */ "./src/app/sites/cards/choose-card/choose-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ChooseCardComponent);
    return ChooseCardComponent;
}());



/***/ }),

/***/ "./src/app/sites/cards/choose-category/choose-category.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/sites/cards/choose-category/choose-category.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\nwidth: 50%;\r\nfloat:right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvY2FyZHMvY2hvb3NlLWNhdGVnb3J5L2Nob29zZS1jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsVUFBVTtBQUNWLFdBQVc7QUFDWCIsImZpbGUiOiJzcmMvYXBwL3NpdGVzL2NhcmRzL2Nob29zZS1jYXRlZ29yeS9jaG9vc2UtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG53aWR0aDogNTAlO1xyXG5mbG9hdDpyaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sites/cards/choose-category/choose-category.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/sites/cards/choose-category/choose-category.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 style=\"text-align:center\">لديك 20 بطاقة</h1>\n  <h3 style=\"text-align:center\">اختار نوع الإهداء</h3>\n\n  <a routerLink=\"/choose-card/ramadan\">\n    <div class=\"card\">\n      <img src=\"assets/sites/cards/wedding.png\" class=\"card-img-top\" alt=\"...\">\n      <div class=\"card-body\">\n        <h1 class=\"card-text\" style=\"text-align: center\">اهداء رمضان</h1>\n      </div>\n    </div>\n  </a>\n\n  <a routerLink=\"/choose-card/wedding\">\n    <div class=\"card\">\n      <img src=\"assets/sites/cards/wedding.png\" class=\"card-img-top\" alt=\"...\">\n      <div class=\"card-body\">\n        <h1 class=\"card-text\" style=\"text-align: center\">اهداء زواج</h1>\n      </div>\n    </div>\n  </a>\n\n  <div class=\"card\">\n    <img src=\"assets/sites/cards/wedding.png\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <h1 class=\"card-text\" style=\"text-align: center\">اهداء زواج</h1>\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <img src=\"assets/sites/cards/wedding.png\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <h1 class=\"card-text\" style=\"text-align: center\">اهداء زواج</h1>\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <img src=\"assets/sites/cards/wedding.png\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <h1 class=\"card-text\" style=\"text-align: center\">اهداء زواج</h1>\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <img src=\"assets/sites/cards/wedding.png\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <h1 class=\"card-text\" style=\"text-align: center\">اهداء زواج</h1>\n    </div>\n  </div>\n\n  <!-- <div id='template' style=\"width:750px;height:750px;padding-top:334px;background:url('assets/sites/cards/wedding.jpg')\">\n    <div style=\"border-radius: 20px; background:#ecd9b5;padding:1px; width:500px;margin:0 auto;text-align: center;height:45px\">\n    </div>\n    <div style=\"border-radius: 20px; background:#ecd9b5;padding:1px; width:500px;margin:0 auto;text-align: center;margin-top:205px;height:45px\">\n    </div>\n  </div>\n\n  <div id=\"myCard\">\n    \n  </div>\n\n  <a type=\"button\" class=\"btn btn-success btn-lg\" id=\"downloadLink\" (click)=\"downloadCanvas()\">حفظ</a> -->\n\n\n</div>"

/***/ }),

/***/ "./src/app/sites/cards/choose-category/choose-category.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/sites/cards/choose-category/choose-category.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChooseCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseCategoryComponent", function() { return ChooseCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChooseCategoryComponent = /** @class */ (function () {
    function ChooseCategoryComponent() {
    }
    ChooseCategoryComponent.prototype.ngOnInit = function () {
    };
    ChooseCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choose-category',
            template: __webpack_require__(/*! ./choose-category.component.html */ "./src/app/sites/cards/choose-category/choose-category.component.html"),
            styles: [__webpack_require__(/*! ./choose-category.component.css */ "./src/app/sites/cards/choose-category/choose-category.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChooseCategoryComponent);
    return ChooseCategoryComponent;
}());



/***/ }),

/***/ "./src/app/sites/cards/new-card/new-card.component.css":
/*!*************************************************************!*\
  !*** ./src/app/sites/cards/new-card/new-card.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdGVzL2NhcmRzL25ldy1jYXJkL25ldy1jYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sites/cards/new-card/new-card.component.html":
/*!**************************************************************!*\
  !*** ./src/app/sites/cards/new-card/new-card.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form [formGroup]=\"form\" dir=\"rtl\" style=\"margin:30px;\" autocomplete=\"off\">\n  <div class=\"form-row\">\n\n\n    <div class=\"form-group col\" style=\"margin:60px 0\">\n      <h1 style=\"text-align: center\">اهداء إلى</h1>\n      <input type=\"text\" formControlName=\"to\" class=\"form-control\" style=\"height:120px;font-size:56px;border: 1px solid darkgray\">\n    </div>\n\n  </div>\n\n  <div class=\"form-row\">\n    \n\n    <div class=\"form-group col\">\n      <h1 style=\"text-align: center\">اهداء من</h1>\n      <input type=\"text\" formControlName=\"from\" class=\"form-control\" style=\"height:120px;font-size:56px;border: 1px solid darkgray\">\n    </div>\n\n  </div>\n\n</form>\n\n\n<div style=\"max-width: 850px;margin: 0 auto;text-align: center\">\n\n  <div id=\"fill-card\">\n\n  </div>\n\n  <div id=\"design\">\n\n      <button class=\"btn btn-success btn-lg\" [disabled]='form.invalid' (click)=\"previewCard(activeCard)\" type=\"submit\" style=\"margin-top:15px;width:200px;height:80px;font-size:50px;line-height: 40px\">معاينة</button>\n\n  </div>\n\n\n  <img src=\"assets/sites/cards/categories/{{category}}/{{card}}.jpg\" alt=\"\" style=\"width:850px\" style=\"margin: 40px 0\" width=\"850\">\n\n\n  <h3 style=\"font-family:cairo\">عدد الإهداء الكلي: 20</h3>\n  <h3>عدد الإهداء المتبقية: 5</h3>\n\n\n</div>"

/***/ }),

/***/ "./src/app/sites/cards/new-card/new-card.component.ts":
/*!************************************************************!*\
  !*** ./src/app/sites/cards/new-card/new-card.component.ts ***!
  \************************************************************/
/*! exports provided: NewCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCardComponent", function() { return NewCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _cards_preview_card_preview_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../cards/preview-card/preview-card.component */ "./src/app/cards/preview-card/preview-card.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var NewCardComponent = /** @class */ (function () {
    function NewCardComponent(dialog, fb, route) {
        var _this = this;
        this.dialog = dialog;
        this.fb = fb;
        this.route = route;
        this.to = "";
        this.from = "";
        this.route.params.subscribe(function (params) { _this.category = params.category; _this.card = params.card; });
        this.activeCard = this.card;
        this.form = fb.group({
            from: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            to: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    NewCardComponent.prototype.ngOnInit = function () {
        $('#cdk-overlay-0').css("max-width", "100vw");
    };
    NewCardComponent.prototype.previewCard = function (activeCard) {
        this.to = this.form.controls['to'].value;
        this.from = this.form.controls['from'].value;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.data = {
            card: activeCard,
            to: this.to,
            from: this.from
        };
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = false;
        dialogConfig.height = '1100px';
        var dialogCallBack = this.dialog.open(_cards_preview_card_preview_card_component__WEBPACK_IMPORTED_MODULE_3__["PreviewCardComponent"], dialogConfig);
        // dialogCallBack.afterClosed().subscribe(() => {
        //   this.getOrhans();
        // });
    };
    NewCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-card',
            template: __webpack_require__(/*! ./new-card.component.html */ "./src/app/sites/cards/new-card/new-card.component.html"),
            styles: [__webpack_require__(/*! ./new-card.component.css */ "./src/app/sites/cards/new-card/new-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], NewCardComponent);
    return NewCardComponent;
}());



/***/ }),

/***/ "./src/app/sites/cards/save-card/save-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/sites/cards/save-card/save-card.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myCard{\r\nheight: 750px;\r\nwidth: 750px;\r\nposition: relative;\r\ntop:-750px;\r\noverflow: hidden;\r\nz-index: -1;\r\n}\r\n\r\n#myCard{\r\nheight: 750px;\r\nwidth: 750px;\r\nposition: relative;\r\ntop:-750px;\r\noverflow: hidden;\r\n}\r\n\r\n#downloadLink{\r\nposition: relative;\r\ntop:-750px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvY2FyZHMvc2F2ZS1jYXJkL3NhdmUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsYUFBYTtBQUNiLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsVUFBVTtBQUNWLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1g7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1YsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLFVBQVU7QUFDViIsImZpbGUiOiJzcmMvYXBwL3NpdGVzL2NhcmRzL3NhdmUtY2FyZC9zYXZlLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteUNhcmR7XHJcbmhlaWdodDogNzUwcHg7XHJcbndpZHRoOiA3NTBweDtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG50b3A6LTc1MHB4O1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG56LWluZGV4OiAtMTtcclxufVxyXG5cclxuI215Q2FyZHtcclxuaGVpZ2h0OiA3NTBweDtcclxud2lkdGg6IDc1MHB4O1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnRvcDotNzUwcHg7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNkb3dubG9hZExpbmt7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudG9wOi03NTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sites/cards/save-card/save-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/sites/cards/save-card/save-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <!-- <input type=\"text\"  name=\"\" id=\"to\" (input)=\"update($event.target.value)\">\n    <input type=\"text\"  name=\"\" id=\"from\" (input)=\"update($event.target.value)\"> -->\n\n    <input type=\"text\" class=\"form-control\" [(value)]=\"to\" (input)=\"updateTo($event.target.value)\">\n    <input type=\"text\" class=\"form-control\" [(value)]=\"from\" (input)=\"updateFrom($event.target.value)\">\n\n  <div id='template' style=\"width:750px;height:750px;padding-top:334px;\">\n    <div style=\"border-radius: 20px; background:#ecd9b5;padding:1px; width:500px;margin:0 auto;text-align: center;height:45px\">\n      <h1>{{to}}</h1>\n    </div>\n    <div style=\"border-radius: 20px; background:#ecd9b5;padding:1px; width:500px;margin:0 auto;text-align: center;margin-top:205px;height:45px\">\n      <h1>{{from}}</h1>\n    </div>\n  </div>\n\n  <div id=\"myCard\">\n    \n  </div>\n\n  <!-- <img src=\"assets/sites/cards/{{category}}/{{card}}.jpg\" alt=\"\">\n  -->\n  <a type=\"button\" class=\"btn btn-success btn-lg\" id=\"downloadLink\" (click)=\"saveCard()\">حفظ</a>\n\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/sites/cards/save-card/save-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/sites/cards/save-card/save-card.component.ts ***!
  \**************************************************************/
/*! exports provided: SaveCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveCardComponent", function() { return SaveCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SaveCardComponent = /** @class */ (function () {
    function SaveCardComponent(route) {
        var _this = this;
        this.route = route;
        this.to = "";
        this.from = "";
        this.route.params.subscribe(function (params) { _this.category = params.category; _this.card = params.card; });
    }
    SaveCardComponent.prototype.ngOnInit = function () {
        document.getElementById("template").style.backgroundImage = "url('../../assets/sites/cards/" + this.category + "/" + this.card + ".jpg')";
        this.createCard("", "");
        // this.createCard();
    };
    // update(value:string){
    //   var to = document.getElementById("to").value;
    //   var from = document.getElementById("from").value;
    //   var canvas = <HTMLCanvasElement> document.getElementById("canvas");
    //   var ctx = canvas.getContext('2d');
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   ctx.fillText(to, 375, 375);
    //   ctx.fillText(from, 375, 623);
    // }
    SaveCardComponent.prototype.updateTo = function (value) {
        this.to = value;
    };
    SaveCardComponent.prototype.updateFrom = function (value) {
        this.from = value;
        console.log(this.from);
    };
    SaveCardComponent.prototype.createCard = function (to, from) {
        document.getElementById("template").style.backgroundImage = "url('../../assets/sites/cards/" + this.category + "/" + this.card + ".jpg')";
        html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(document.getElementById("template")).then(function (canvas) {
            document.getElementById("myCard").appendChild(canvas);
            canvas = document.getElementById("myCard").children[0];
            var ctx = canvas.getContext('2d');
            ctx.font = '32px cairo';
            ctx.textAlign = "center";
            ctx.fillText(to, 375, 375);
            ctx.fillText(from, 375, 623);
            ctx.fillStyle = 'black';
            ctx.direction = 'rtl';
            canvas.setAttribute("id", "canvas");
            var link = document.getElementById("downloadLink");
            link.setAttribute("href", canvas.toDataURL());
            document.getElementById("downloadLink").setAttribute("download", "card.png");
        });
    };
    SaveCardComponent.prototype.saveCard = function () {
        this.createCard(this.to, this.from);
    };
    SaveCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-save-card',
            template: __webpack_require__(/*! ./save-card.component.html */ "./src/app/sites/cards/save-card/save-card.component.html"),
            styles: [__webpack_require__(/*! ./save-card.component.css */ "./src/app/sites/cards/save-card/save-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SaveCardComponent);
    return SaveCardComponent;
}());



/***/ }),

/***/ "./src/app/sites/dm-steps/dm-steps.component.css":
/*!*******************************************************!*\
  !*** ./src/app/sites/dm-steps/dm-steps.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper{\r\nwidth:100%;\r\nmax-width:950px;\r\nmargin:0 auto;\r\ntext-align:center;\r\n}\r\n\r\n#wrapper img{\r\nmargin:15px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvZG0tc3RlcHMvZG0tc3RlcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFVBQVU7QUFDVixlQUFlO0FBQ2YsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLFdBQVc7QUFDWCIsImZpbGUiOiJzcmMvYXBwL3NpdGVzL2RtLXN0ZXBzL2RtLXN0ZXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd3JhcHBlcntcclxud2lkdGg6MTAwJTtcclxubWF4LXdpZHRoOjk1MHB4O1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuI3dyYXBwZXIgaW1ne1xyXG5tYXJnaW46MTVweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/sites/dm-steps/dm-steps.component.html":
/*!********************************************************!*\
  !*** ./src/app/sites/dm-steps/dm-steps.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <img src=\"assets/sites/dm-steps/header.png\" alt=\"\">\r\n  <img src=\"assets/sites/dm-steps/steps.png\" alt=\"\" style=\"position: relative;right:-8px\">\r\n\r\n  <a href=\"https://alber-sa.com/orphans-public/3/male\">\r\n    <img src=\"assets/sites/dm-steps/male.png\" alt=\"\">\r\n  </a>\r\n\r\n  <a href=\"https://alber-sa.com/orphans-public/3/female\">\r\n    <img src=\"assets/sites/dm-steps/female.png\" alt=\"\">\r\n  </a>\r\n\r\n  <a href=\"https://alber-sa.com/makfouled-orphans/3\">\r\n    <img src=\"assets/sites/dm-steps/makfouled.png\" alt=\"\">\r\n  </a>\r\n\r\n  <img src=\"assets/sites/dm-steps/final.png\" alt=\"\">\r\n  \r\n\r\n</div>"

/***/ }),

/***/ "./src/app/sites/dm-steps/dm-steps.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sites/dm-steps/dm-steps.component.ts ***!
  \******************************************************/
/*! exports provided: DmStepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmStepsComponent", function() { return DmStepsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DmStepsComponent = /** @class */ (function () {
    function DmStepsComponent() {
    }
    DmStepsComponent.prototype.ngOnInit = function () {
    };
    DmStepsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dm-steps',
            template: __webpack_require__(/*! ./dm-steps.component.html */ "./src/app/sites/dm-steps/dm-steps.component.html"),
            styles: [__webpack_require__(/*! ./dm-steps.component.css */ "./src/app/sites/dm-steps/dm-steps.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DmStepsComponent);
    return DmStepsComponent;
}());



/***/ }),

/***/ "./src/app/sites/gits/new-gift/new-gift.component.css":
/*!************************************************************!*\
  !*** ./src/app/sites/gits/new-gift/new-gift.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\nwidth: 50%;\r\nfloat:right;\r\n}\r\n\r\n#myCard{\r\nheight: 750px;\r\nwidth: 750px;\r\nposition: relative;\r\ntop:-750px;\r\n}\r\n\r\n#downloadLink{\r\nposition: relative;\r\ntop:-750px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvZ2l0cy9uZXctZ2lmdC9uZXctZ2lmdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsVUFBVTtBQUNWLFdBQVc7QUFDWDs7QUFFQTtBQUNBLGFBQWE7QUFDYixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLFVBQVU7QUFDVjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9zaXRlcy9naXRzL25ldy1naWZ0L25ldy1naWZ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxud2lkdGg6IDUwJTtcclxuZmxvYXQ6cmlnaHQ7XHJcbn1cclxuXHJcbiNteUNhcmR7XHJcbmhlaWdodDogNzUwcHg7XHJcbndpZHRoOiA3NTBweDtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG50b3A6LTc1MHB4O1xyXG59XHJcblxyXG4jZG93bmxvYWRMaW5re1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnRvcDotNzUwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/sites/gits/new-gift/new-gift.component.html":
/*!*************************************************************!*\
  !*** ./src/app/sites/gits/new-gift/new-gift.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  <h1 style=\"text-align:center\">لديك 20 بطاقة</h1>\n  <h3 style=\"text-align:center\">اختار نوع الإهداء</h3>\n\n  <div class=\"card\">\n    <img src=\"assets/sites/cards/wedding.png\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <h1 class=\"card-text\" style=\"text-align: center\">اهداء زواج</h1>\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <img src=\"assets/sites/cards/wedding.png\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <h1 class=\"card-text\" style=\"text-align: center\">اهداء زواج</h1>\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <img src=\"assets/sites/cards/wedding.png\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <h1 class=\"card-text\" style=\"text-align: center\">اهداء زواج</h1>\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <img src=\"assets/sites/cards/wedding.png\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <h1 class=\"card-text\" style=\"text-align: center\">اهداء زواج</h1>\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <img src=\"assets/sites/cards/wedding.png\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <h1 class=\"card-text\" style=\"text-align: center\">اهداء زواج</h1>\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <img src=\"assets/sites/cards/wedding.png\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <h1 class=\"card-text\" style=\"text-align: center\">اهداء زواج</h1>\n    </div>\n  </div>\n\n</div> -->"

/***/ }),

/***/ "./src/app/sites/gits/new-gift/new-gift.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/sites/gits/new-gift/new-gift.component.ts ***!
  \***********************************************************/
/*! exports provided: NewGiftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewGiftComponent", function() { return NewGiftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewGiftComponent = /** @class */ (function () {
    function NewGiftComponent() {
    }
    NewGiftComponent.prototype.ngOnInit = function () {
        // this.createCard();
    };
    NewGiftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-gift',
            template: __webpack_require__(/*! ./new-gift.component.html */ "./src/app/sites/gits/new-gift/new-gift.component.html"),
            styles: [__webpack_require__(/*! ./new-gift.component.css */ "./src/app/sites/gits/new-gift/new-gift.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewGiftComponent);
    return NewGiftComponent;
}());



/***/ }),

/***/ "./src/app/sites/khamis-harb/kh-waqf/kh-waqf.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/sites/khamis-harb/kh-waqf/kh-waqf.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\nbackground:red;\r\n}\r\n\r\nh3{\r\npadding:0;\r\nmargin:0;\r\n}\r\n\r\n.hand{\r\ncursor: pointer;\r\n}\r\n\r\n.wrapper{\r\nwidth:100%;\r\nmax-width:950px;\r\nmargin:0 auto;\r\nfont-family: Cairo;\r\nfont-weight: 700;\r\n}\r\n\r\nheader{\r\nbackground:#5e0a0c;\r\nheight:488px;\r\nborder-radius:15px;\r\nmargin-bottom:9px;\r\n}\r\n\r\nheader ul{\r\nmargin-top:12px;\r\npadding-right:15px;\r\n}\r\n\r\nheader li{\r\nlist-style: none;\r\nfloat:right;\r\nmargin:0 5px;\r\n}\r\n\r\n.wq-elyateem-right{\r\nwidth:388px;\r\nheight:377px;\r\nfloat:right;\r\ntext-align: center;\r\nbackground:#EFEAD5;\r\nborder-radius:15px; \r\nborder:3px solid #5e0a0c;\r\nmargin:9px 0 12px 0;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 16px;\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n  background:none;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: #d9cd97;\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #555; \r\n}\r\n\r\n.wq-elyateem-right h3{\r\nbackground:#5e0a0c;\r\npadding:15px 0;\r\ncolor:#EFEAD5;\r\nfont-weight: bold;\r\n}\r\n\r\n.wq-elyateem-right p{\r\npadding:10px 20px;\r\nfont-size:20px;\r\nline-height: 35px;\r\noverflow: scroll;\r\nheight:300px;\r\n}\r\n\r\n.wq-projects-left{\r\nwidth:548px;\r\nfloat:left;\r\nbackground:#FCDF68;\r\ntext-align: center;\r\nborder-radius:15px; \r\noverflow: hidden;\r\nborder:3px solid #5e0a0c;\r\nmargin:9px 0 12px 0;\r\n}\r\n\r\n.wq-projects-left h3{\r\nbackground:#5e0a0c;\r\npadding:15px 0;\r\ncolor:#EFEAD5;\r\nfont-weight: bold;\r\n}\r\n\r\n.wq-projects-left img{\r\npadding:20px 0;\r\n}\r\n\r\n.youtube-left{\r\nwidth:548px;\r\nfloat:left;\r\nbackground:#EFEAD5;\r\ntext-align: center;\r\nborder-radius:15px; \r\noverflow: hidden;\r\nborder:3px solid #5e0a0c;\r\nmargin:9px 0 12px 0;\r\n}\r\n\r\n.youtube-left h3{\r\nbackground:#5e0a0c;\r\npadding:15px 0;\r\ncolor:#EFEAD5;\r\nfont-weight: bold;\r\n}\r\n\r\n.yt-container{\r\nposition: relative;\r\nwidth: 100%;\r\nheight: 0;\r\npadding-bottom: 56.25%;\r\n}\r\n\r\n.youtube-left ul{\r\ntext-align: center;\r\nlist-style: inside;\r\nmargin:0;\r\npadding:0;\r\nmargin-top:5px;\r\n}\r\n\r\n.youtube-left li{\r\nwidth:23%;\r\nmargin:2px 2px;\r\nlist-style: none;\r\nfloat:right;\r\n}\r\n\r\n.youtube-image{\r\nwidth:100%;\r\n}\r\n\r\n.tazkyat-slides-right{\r\nwidth:388px;\r\nheight:452px;\r\nfloat:right;\r\ntext-align: center;\r\nbackground:#EFEAD5;\r\nborder-radius:15px; \r\nborder:3px solid #5e0a0c;\r\nmargin:9px 0 12px 0;\r\noverflow: hidden;\r\n}\r\n\r\n.tazkyat-slides-right h3{\r\nbackground:#5e0a0c;\r\npadding:15px 0;\r\ncolor:#EFEAD5;\r\nfont-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMva2hhbWlzLWhhcmIva2gtd2FxZi9raC13YXFmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSOztBQUVBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0EsVUFBVTtBQUNWLGVBQWU7QUFDZixhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLGVBQWU7QUFDZixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIsV0FBVztBQUNYLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1osV0FBVztBQUNYLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsVUFBVTs7QUFDVjtFQUNFLGVBQWU7QUFDakI7O0FBRUEsV0FBVzs7QUFDWDtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxvQkFBb0I7O0FBQ3BCO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUdBO0FBQ0Esa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsY0FBYztBQUNkLGFBQWE7QUFDYixpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQix3QkFBd0I7QUFDeEIsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxTQUFTO0FBQ1Qsc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixRQUFRO0FBQ1IsU0FBUztBQUNULGNBQWM7QUFDZDs7QUFFQTtBQUNBLFNBQVM7QUFDVCxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLFdBQVc7QUFDWDs7QUFFQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1osV0FBVztBQUNYLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2l0ZXMva2hhbWlzLWhhcmIva2gtd2FxZi9raC13YXFmLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG5iYWNrZ3JvdW5kOnJlZDtcclxufVxyXG5cclxuaDN7XHJcbnBhZGRpbmc6MDtcclxubWFyZ2luOjA7XHJcbn1cclxuXHJcbi5oYW5ke1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi53cmFwcGVye1xyXG53aWR0aDoxMDAlO1xyXG5tYXgtd2lkdGg6OTUwcHg7XHJcbm1hcmdpbjowIGF1dG87XHJcbmZvbnQtZmFtaWx5OiBDYWlybztcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuaGVhZGVye1xyXG5iYWNrZ3JvdW5kOiM1ZTBhMGM7XHJcbmhlaWdodDo0ODhweDtcclxuYm9yZGVyLXJhZGl1czoxNXB4O1xyXG5tYXJnaW4tYm90dG9tOjlweDtcclxufVxyXG5cclxuaGVhZGVyIHVse1xyXG5tYXJnaW4tdG9wOjEycHg7XHJcbnBhZGRpbmctcmlnaHQ6MTVweDtcclxufVxyXG5cclxuaGVhZGVyIGxpe1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG5mbG9hdDpyaWdodDtcclxubWFyZ2luOjAgNXB4O1xyXG59XHJcblxyXG4ud3EtZWx5YXRlZW0tcmlnaHR7XHJcbndpZHRoOjM4OHB4O1xyXG5oZWlnaHQ6Mzc3cHg7XHJcbmZsb2F0OnJpZ2h0O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmJhY2tncm91bmQ6I0VGRUFENTtcclxuYm9yZGVyLXJhZGl1czoxNXB4OyBcclxuYm9yZGVyOjNweCBzb2xpZCAjNWUwYTBjO1xyXG5tYXJnaW46OXB4IDAgMTJweCAwO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTZweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDpub25lO1xyXG59XHJcbiBcclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNkOWNkOTc7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1OyBcclxufVxyXG5cclxuXHJcbi53cS1lbHlhdGVlbS1yaWdodCBoM3tcclxuYmFja2dyb3VuZDojNWUwYTBjO1xyXG5wYWRkaW5nOjE1cHggMDtcclxuY29sb3I6I0VGRUFENTtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi53cS1lbHlhdGVlbS1yaWdodCBwe1xyXG5wYWRkaW5nOjEwcHggMjBweDtcclxuZm9udC1zaXplOjIwcHg7XHJcbmxpbmUtaGVpZ2h0OiAzNXB4O1xyXG5vdmVyZmxvdzogc2Nyb2xsO1xyXG5oZWlnaHQ6MzAwcHg7XHJcbn1cclxuXHJcbi53cS1wcm9qZWN0cy1sZWZ0e1xyXG53aWR0aDo1NDhweDtcclxuZmxvYXQ6bGVmdDtcclxuYmFja2dyb3VuZDojRkNERjY4O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmJvcmRlci1yYWRpdXM6MTVweDsgXHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbmJvcmRlcjozcHggc29saWQgIzVlMGEwYztcclxubWFyZ2luOjlweCAwIDEycHggMDtcclxufVxyXG5cclxuLndxLXByb2plY3RzLWxlZnQgaDN7XHJcbmJhY2tncm91bmQ6IzVlMGEwYztcclxucGFkZGluZzoxNXB4IDA7XHJcbmNvbG9yOiNFRkVBRDU7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ud3EtcHJvamVjdHMtbGVmdCBpbWd7XHJcbnBhZGRpbmc6MjBweCAwO1xyXG59XHJcblxyXG4ueW91dHViZS1sZWZ0e1xyXG53aWR0aDo1NDhweDtcclxuZmxvYXQ6bGVmdDtcclxuYmFja2dyb3VuZDojRUZFQUQ1O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmJvcmRlci1yYWRpdXM6MTVweDsgXHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbmJvcmRlcjozcHggc29saWQgIzVlMGEwYztcclxubWFyZ2luOjlweCAwIDEycHggMDtcclxufVxyXG5cclxuLnlvdXR1YmUtbGVmdCBoM3tcclxuYmFja2dyb3VuZDojNWUwYTBjO1xyXG5wYWRkaW5nOjE1cHggMDtcclxuY29sb3I6I0VGRUFENTtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi55dC1jb250YWluZXJ7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMDtcclxucGFkZGluZy1ib3R0b206IDU2LjI1JTtcclxufVxyXG5cclxuLnlvdXR1YmUtbGVmdCB1bHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5saXN0LXN0eWxlOiBpbnNpZGU7XHJcbm1hcmdpbjowO1xyXG5wYWRkaW5nOjA7XHJcbm1hcmdpbi10b3A6NXB4O1xyXG59XHJcblxyXG4ueW91dHViZS1sZWZ0IGxpe1xyXG53aWR0aDoyMyU7XHJcbm1hcmdpbjoycHggMnB4O1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG5mbG9hdDpyaWdodDtcclxufVxyXG5cclxuLnlvdXR1YmUtaW1hZ2V7XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi50YXpreWF0LXNsaWRlcy1yaWdodHtcclxud2lkdGg6Mzg4cHg7XHJcbmhlaWdodDo0NTJweDtcclxuZmxvYXQ6cmlnaHQ7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuYmFja2dyb3VuZDojRUZFQUQ1O1xyXG5ib3JkZXItcmFkaXVzOjE1cHg7IFxyXG5ib3JkZXI6M3B4IHNvbGlkICM1ZTBhMGM7XHJcbm1hcmdpbjo5cHggMCAxMnB4IDA7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50YXpreWF0LXNsaWRlcy1yaWdodCBoM3tcclxuYmFja2dyb3VuZDojNWUwYTBjO1xyXG5wYWRkaW5nOjE1cHggMDtcclxuY29sb3I6I0VGRUFENTtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sites/khamis-harb/kh-waqf/kh-waqf.component.html":
/*!******************************************************************!*\
  !*** ./src/app/sites/khamis-harb/kh-waqf/kh-waqf.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n\r\n    <!-- header -->\r\n    <header>\r\n\r\n        <img src=\"assets/sites/khamis-harb-waqf/header.png\">\r\n\r\n        <!-- social media links -->\r\n        <div id=\"social\">\r\n\r\n            <ul>\r\n\r\n                <li>\r\n                    <img src=\"assets/sites/khamis-harb-waqf/social/whatsapp.png\">\r\n                </li>\r\n\r\n                <li>\r\n                    <a href=\"https://www.youtube.com/channel/UCKDE6HXdVfPPTgDQiVmQIKA\">\r\n                        <img src=\"assets/sites/khamis-harb-waqf/social/youtube.png\">\r\n                    </a>\r\n                </li>\r\n\r\n                <li>\r\n                    <img src=\"assets/sites/khamis-harb-waqf/social/snapchat.png\">\r\n                </li>\r\n\r\n                <li>\r\n                    <a href=\"https://www.instagram.com/wkamece02/\">\r\n                        <img src=\"assets/sites/khamis-harb-waqf/social/instgram.png\">\r\n                    </a>\r\n                </li>\r\n\r\n                <li>\r\n                    <a href=\"https://twitter.com/wkamece02\">\r\n                        <img src=\"assets/sites/khamis-harb-waqf/social/twitter.png\">\r\n                    </a>\r\n                </li>\r\n\r\n                <li>\r\n                    <img src=\"assets/sites/khamis-harb-waqf/social/facebook.png\">\r\n                </li>\r\n\r\n            </ul>\r\n            \r\n        </div>\r\n\r\n    </header>\r\n\r\n    <img src=\"assets/sites/khamis-harb-waqf/license.png\" (click)=\"onCreateNew('assets/sites/khamis-harb-waqf/modals/license.jpg')\" class=\"hand\">\r\n    <img src=\"assets/sites/khamis-harb-waqf/mobile.png\" style=\"margin-right:7px;\">\r\n\r\n    <!-- وقف اليتيم بمكة المكرمة -->\r\n    <div class=\"wq-elyateem-right\">\r\n\r\n        <h3>وقف اليتيم بمكة المكرمة</h3>\r\n        <P dir=\"rtl\" style=\"text-align: justify\" class='wq-elyateem-makkah-content'>\r\n            تأسس وقف اليتيم الخيري بتاريخ 1440/5/1هـ بتصريح من وزارة العمل والتنمية والشؤون الاجتماعية رقم (481) ، ويشرف على إدارة الوقف مجلس إدارة جمعية البر بخميس حرب المكون من عشرة أعضاء من الثقات الأكفاء ذوي الخبرة الاستثمارية والإدارية \r\n            ما هو وقف اليتيم؟\r\n            الوقف عبارة عن برج فندقي مكون من اجنحه وغرف فندقية يقع بمكة المكرمة – داخل حدود الحرم مما يحقق مورد مالياً لكفالة ايتام الجمعية مدى الحياة. والذي يحقق مستلزماتهم الغذائية والتعليمية والصحية والاجتماعية \r\n        </P>\r\n\r\n    </div>\r\n\r\n    <!-- مشروعات الوقف -->\r\n    <div class=\"wq-projects-left\">\r\n\r\n        <h3>مشروعات الوقف</h3>\r\n        <img src=\"assets/sites/khamis-harb-waqf/projects.png\" width='500'>\r\n\r\n    </div>\r\n\r\n    <!-- big banner -->\r\n    <img src=\"assets/sites/khamis-harb-waqf/big-banner.png\">\r\n\r\n    <!-- youtube -->\r\n    <div class=\"youtube-left\">\r\n\r\n        <h3>تزكيات الوقف</h3>\r\n\r\n        <div class=\"yt-container\">\r\n            <!-- <iframe src=\"//www.youtube.com/embed/yCOY82UdFrw\" \r\n            frameborder=\"0\" allowfullscreen class=\"video\"></iframe> -->\r\n            <div [innerHtml]=\"yt_iframe_html\"></div>\r\n        </div>\r\n\r\n        <ul>\r\n\r\n            <li class=\"hand\">\r\n                <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=tnivQHZ0NUE')\">\r\n                <img src=\"https://i.ytimg.com/vi/tnivQHZ0NUE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDBctGCK436AjiH0uM1aOjXu7lymw\" class=\"youtube-image\">\r\n                </a>\r\n            </li>   \r\n            \r\n            <li class=\"hand\">\r\n            <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=C43IheccoZ0')\">\r\n                <img src=\"https://i.ytimg.com/vi/C43IheccoZ0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBQAdFgV_pIDGL0SX5TWXCDuGQGUg\" class=\"youtube-image\">\r\n            </a>\r\n            </li>\r\n\r\n            <li class=\"hand\">\r\n            <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=9lCgkq7xfmQ')\">\r\n                <img  src=\"https://i.ytimg.com/vi/9lCgkq7xfmQ/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAI8vC5CSHsxnOLW3yd-gX5qkGv9A\" class=\"youtube-image\">\r\n            </a>\r\n            </li>\r\n\r\n            <li class=\"hand\">\r\n                <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=dQo6WwFPLk0')\">\r\n                <img src=\"https://i.ytimg.com/vi/dQo6WwFPLk0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD09__8m9zPV2RstOOC5Iv6n5IJ3Q\" class=\"youtube-image\">\r\n                </a>\r\n            </li>  \r\n\r\n        </ul>\r\n\r\n    </div>\r\n    \r\n    <!-- تزكيات أهل العلم -->\r\n    <div class=\"tazkyat-slides-right\">\r\n\r\n        <h3>تزكيات أهل العلم</h3>\r\n\r\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\" class=\"hand\">\r\n\r\n            <div class=\"carousel-inner\">\r\n\r\n                <div class=\"carousel-item active\">\r\n                    <img class=\"d-block w-100\" src=\"assets/sites/khamis-harb-waqf/modals/8.jpg\" (click)=\"onCreateNew('assets/sites/khamis-harb-waqf/modals/8.jpg')\">\r\n                </div>\r\n\r\n                <div class=\"carousel-item\" *ngFor=\"let image of images; let i = index\">\r\n                    <img class=\"d-block w-100\" src=\"assets/sites/khamis-harb-waqf/modals/{{i}}.jpg\" (click)=\"onCreateNew('assets/sites/khamis-harb-waqf/modals/' + i + '.jpg')\">\r\n                </div>\r\n\r\n            </div>\r\n            \r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!-- بنر زكاتك -->\r\n    <img src=\"assets/sites/khamis-harb-waqf/zakatak.png\">\r\n\r\n    <!-- حسابات البنك -->\r\n    <a href=\"https://www.almubasher.com.sa/portal/auth/login.do?locale=ar_SA\">\r\n      <img src=\"assets/sites/khamis-harb-waqf/rajhi.png\">\r\n    </a>\r\n\r\n    <a href=\"https://www.alahlionline.com/online/login?lang=ar\">\r\n      <img src=\"assets/sites/khamis-harb-waqf/ahli.png\">\r\n    </a>\r\n\r\n    <a href=\"https://onlinebanking.anb.com.sa/RetailBank/app/logon.jsp?englang=en_AR\">\r\n      <img src=\"assets/sites/khamis-harb-waqf/arabi.png\">\r\n    </a>\r\n\r\n    <!-- خاتمة -->\r\n    <img src=\"assets/sites/khamis-harb-waqf/final.png\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/sites/khamis-harb/kh-waqf/kh-waqf.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/sites/khamis-harb/kh-waqf/kh-waqf.component.ts ***!
  \****************************************************************/
/*! exports provided: KhWaqfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhWaqfComponent", function() { return KhWaqfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal/modal.component */ "./src/app/sites/modal/modal.component.ts");





var KhWaqfComponent = /** @class */ (function () {
    function KhWaqfComponent(embedService, dialog, elementRef) {
        this.embedService = embedService;
        this.dialog = dialog;
        this.elementRef = elementRef;
        this.images = new Array(8);
        this.youtubeUrl = "https://www.youtube.com/watch?v=Vki9uK1o1WA";
    }
    KhWaqfComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#DDEEF2';
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('assets/sites/khamis-harb-waqf/new-pattern.png')";
    };
    KhWaqfComponent.prototype.ngOnInit = function () {
        this.getYtUrl(this.youtubeUrl);
    };
    KhWaqfComponent.prototype.getYtUrl = function (ytUrl) {
        this.yt_iframe_html = this.embedService.embed(ytUrl, {
            query: { portrait: 0, color: '333' },
            attr: { style: 'position:absolute;top:0;left:0;width:100%;height:100%' }
        });
    };
    KhWaqfComponent.prototype.onCreateNew = function (imgName) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = imgName;
        dialogConfig.autoFocus = true;
        var dialogCallBack = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], dialogConfig);
    };
    KhWaqfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kh-waqf',
            template: __webpack_require__(/*! ./kh-waqf.component.html */ "./src/app/sites/khamis-harb/kh-waqf/kh-waqf.component.html"),
            styles: [__webpack_require__(/*! ./kh-waqf.component.css */ "./src/app/sites/khamis-harb/kh-waqf/kh-waqf.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__["EmbedVideoService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], KhWaqfComponent);
    return KhWaqfComponent;
}());



/***/ }),

/***/ "./src/app/sites/khamis-harb/khamis-harb-ekfalni-steps/khamis-harb-ekfalni-steps.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/sites/khamis-harb/khamis-harb-ekfalni-steps/khamis-harb-ekfalni-steps.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\npadding:0;\r\n}\r\n\r\n#body{\r\nheight: 100%;\r\npadding-top:20px;\r\nbackground-image: url('pattern.png');\r\nbackground-color: #f1f1f1;\r\nbackground-repeat: repeat-y repeat-x;\r\n}\r\n\r\n.responsive {\r\nwidth: 100%;\r\nheight: auto;\r\n}\r\n\r\n#header{\r\nborder-radius: 25px 25px; \r\nborder: 2px solid rgb(156, 121, 121);\r\noverflow: hidden;\r\nbackground:rgb(156, 121, 121);\r\n}\r\n\r\n@media(min-width:1000px){\r\n    .social{\r\n        max-width: 65px;\r\n        margin:12px 10px;\r\n    }\r\n}\r\n\r\n@media(max-width:1000px){\r\n    .social{\r\n        max-width: 40px;\r\n        margin:10px 5px;\r\n    }\r\n}\r\n\r\n@media(max-width:750px){\r\n    .social{\r\n        max-width: 30px;\r\n        margin:10px 5px;\r\n    }\r\n}\r\n\r\n@media(max-width:550px){\r\n    .social{\r\n        max-width: 25px;\r\n        margin:5px 5px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMva2hhbWlzLWhhcmIva2hhbWlzLWhhcmItZWtmYWxuaS1zdGVwcy9raGFtaXMtaGFyYi1la2ZhbG5pLXN0ZXBzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLG9DQUFtRTtBQUNuRSx5QkFBeUI7QUFDekIsb0NBQW9DO0FBQ3BDOztBQUVBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWjs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QixvQ0FBb0M7QUFDcEMsZ0JBQWdCO0FBQ2hCLDZCQUE2QjtBQUM3Qjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2l0ZXMva2hhbWlzLWhhcmIva2hhbWlzLWhhcmItZWtmYWxuaS1zdGVwcy9raGFtaXMtaGFyYi1la2ZhbG5pLXN0ZXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG5wYWRkaW5nOjA7XHJcbn1cclxuXHJcbiNib2R5e1xyXG5oZWlnaHQ6IDEwMCU7XHJcbnBhZGRpbmctdG9wOjIwcHg7XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvc2l0ZXMvbWFyd2EtZWtmYWxuaS9wYXR0ZXJuLnBuZ1wiKTtcclxuYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15IHJlcGVhdC14O1xyXG59XHJcblxyXG4ucmVzcG9uc2l2ZSB7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbiNoZWFkZXJ7XHJcbmJvcmRlci1yYWRpdXM6IDI1cHggMjVweDsgXHJcbmJvcmRlcjogMnB4IHNvbGlkIHJnYigxNTYsIDEyMSwgMTIxKTtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxuYmFja2dyb3VuZDpyZ2IoMTU2LCAxMjEsIDEyMSk7XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6MTAwMHB4KXtcclxuICAgIC5zb2NpYWx7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2NXB4O1xyXG4gICAgICAgIG1hcmdpbjoxMnB4IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MTAwMHB4KXtcclxuICAgIC5zb2NpYWx7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbjoxMHB4IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3NTBweCl7XHJcbiAgICAuc29jaWFse1xyXG4gICAgICAgIG1heC13aWR0aDogMzBweDtcclxuICAgICAgICBtYXJnaW46MTBweCA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NTUwcHgpe1xyXG4gICAgLnNvY2lhbHtcclxuICAgICAgICBtYXgtd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luOjVweCA1cHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sites/khamis-harb/khamis-harb-ekfalni-steps/khamis-harb-ekfalni-steps.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/sites/khamis-harb/khamis-harb-ekfalni-steps/khamis-harb-ekfalni-steps.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='body'>\r\n  \r\n  <div class=\"container\" style=\"text-align:center;background:rgba(255, 252, 246, 0.5);\">\r\n    \r\n    <div id=\"header\">\r\n\r\n        <img src=\"assets/sites/khamis-harb-ikfalni-steps/header.png\" class=\"responsive\">\r\n\r\n        <!-- <img src=\"assets/sites/marwa-ekfalni/header.png\" class=\"responsive\">\r\n        \r\n        <img class=\"col-4\" src=\"assets/sites/marwa-ekfalni/whatsapp.png\" alt=\"\">\r\n        \r\n\r\n        <a href=\"https://www.youtube.com/channel/UCv6QxTAC09osAzzRObuCrIg\">\r\n            <img class=\"col-1 responsive social\" src=\"assets/sites/marwa-ekfalni/snapchat.png\" alt=\"\">\r\n        </a>\r\n        \r\n        <a href=\"https://www.youtube.com/channel/UCv6QxTAC09osAzzRObuCrIg\">\r\n            <img class=\"col-1 responsive social\" src=\"assets/sites/marwa-ekfalni/youtube.png\" alt=\"\">\r\n        </a>\r\n        \r\n        <a href=\"https://www.instagram.com/ahsankom21/\">\r\n            <img class=\"col-1 responsive social\" src=\"assets/sites/marwa-ekfalni/instagram.png\" alt=\"\">\r\n        </a>\r\n        \r\n        <a href=\"https://twitter.com/ahsankom21\">\r\n            <img class=\"col-1 responsive social\"  src=\"assets/sites/marwa-ekfalni/twitter.png\" alt=\"\">\r\n        </a>\r\n        \r\n        <img class=\"col-1 responsive social\"  src=\"assets/sites/marwa-ekfalni/facebook.png\" alt=\"\"> -->\r\n        \r\n      \r\n    </div>\r\n\r\n      <div style=\"text-align:center\" style=\"margin-top:15px\">\r\n        <img src=\"assets/sites/khamis-harb-ikfalni-steps/steps.png\" class=\"responsive\" style=\"padding:0 10px\">\r\n      </div>\r\n    \r\n      <div style=\"text-align:center\" style=\"margin-top:15px\">\r\n        <img src=\"assets/sites/khamis-harb-ikfalni-steps/orphan-banner.png\" class=\"responsive\" style=\"padding:0 10px\">\r\n      </div>\r\n    \r\n      <div style=\"text-align:center\" style=\"margin-top:15px\">\r\n        <a href=\"https://alber-sa.com/orphans-public/2/male\">\r\n          <img src=\"assets/sites/khamis-harb-ikfalni-steps/first-group.png\" class=\"responsive\" style=\"padding:0 10px\">\r\n        </a>\r\n      </div>\r\n    \r\n      <div style=\"text-align:center\" style=\"margin-top:15px\">\r\n        <a href=\"https://alber-sa.com/orphans-public/2/female\">\r\n          <img src=\"assets/sites/khamis-harb-ikfalni-steps/second-group.png\" class=\"responsive\" style=\"padding:0 10px\">\r\n        </a>\r\n      </div>\r\n    \r\n      <div style=\"text-align:center\" style=\"margin-top:15px;margin-bottom: 20px\">\r\n        <a href=\"https://alber-sa.com/makfouled-orphans/2\">\r\n          <img src=\"assets/sites/khamis-harb-ikfalni-steps/third-group.png\" class=\"responsive\" style=\"padding:0 10px\">\r\n        </a>\r\n      </div>\r\n    \r\n      <div style=\"text-align:center\" style=\"margin-top:15px\">\r\n        <img src=\"assets/sites/khamis-harb-ikfalni-steps/last.png\" class=\"responsive\" style=\"padding:0 10px\">\r\n      </div>\r\n    \r\n  </div>\r\n    \r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sites/khamis-harb/khamis-harb-ekfalni-steps/khamis-harb-ekfalni-steps.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/sites/khamis-harb/khamis-harb-ekfalni-steps/khamis-harb-ekfalni-steps.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: KhamisHarbEkfalniStepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamisHarbEkfalniStepsComponent", function() { return KhamisHarbEkfalniStepsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KhamisHarbEkfalniStepsComponent = /** @class */ (function () {
    function KhamisHarbEkfalniStepsComponent() {
    }
    KhamisHarbEkfalniStepsComponent.prototype.ngOnInit = function () {
    };
    KhamisHarbEkfalniStepsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-khamis-harb-ekfalni-steps',
            template: __webpack_require__(/*! ./khamis-harb-ekfalni-steps.component.html */ "./src/app/sites/khamis-harb/khamis-harb-ekfalni-steps/khamis-harb-ekfalni-steps.component.html"),
            styles: [__webpack_require__(/*! ./khamis-harb-ekfalni-steps.component.css */ "./src/app/sites/khamis-harb/khamis-harb-ekfalni-steps/khamis-harb-ekfalni-steps.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KhamisHarbEkfalniStepsComponent);
    return KhamisHarbEkfalniStepsComponent;
}());



/***/ }),

/***/ "./src/app/sites/khamis-harb/khamis-harb-ekfalni/khamis-harb-ekfalni.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/sites/khamis-harb/khamis-harb-ekfalni/khamis-harb-ekfalni.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\npadding:0;\r\n}\r\n\r\n#body{\r\nheight: 100%;\r\nbackground-image: url('pattern.png');\r\nbackground-color: #e1daca;\r\nbackground-repeat: repeat-y repeat-x;\r\n}\r\n\r\n.responsive {\r\nwidth: 100%;\r\nheight: auto;\r\n}\r\n\r\n#youtube-box{\r\nborder: 2px solid #291B10;\r\nborder-radius: 25px; \r\nmargin-top:10px;\r\n}\r\n\r\n@media(max-width:600px){\r\n#altazkyat{\r\n    display:block;\r\n    width:75%;\r\n    margin:0 auto;\r\n    }\r\n    .content-box{\r\n        height: 100px;\r\n    }\r\n#tazkiat{\r\n    display:block;\r\n    width:35%;\r\n    margin:0 auto 1% auto;\r\n    }\r\n    .content-box{\r\n        height: 150px;\r\n        width:70%;\r\n    }\r\n}\r\n\r\n@media(max-width:575px){\r\n#altazkyat{\r\n    display:block;\r\n    width:100%;\r\n    margin:0 auto;\r\n    }\r\n#tazkiat{\r\n    max-width:100%;\r\n    margin:0 auto 1% auto;\r\n    }\r\n#altazkyatd{\r\n    display:block;\r\n    width:75%;\r\n    margin:0 auto;\r\n    }\r\n#tazkiatd{\r\n    max-width:35%;\r\n    margin:0 auto 1% auto;\r\n    }\r\n    .content-box{\r\n        height: 150px;\r\n        width:70%;\r\n    }\r\n}\r\n\r\n@media(max-width:980px){\r\n#altazkyat{\r\n    width:100%;\r\n    margin:0 auto;\r\n    }\r\n#tazkiat{\r\n    width:100%;\r\n    margin:0 auto 1% auto;\r\n    }\r\n#altazkyatd{\r\n    width:78%;\r\n    margin:0 auto;\r\n    }\r\n#tazkiatd{\r\n    width:100%;\r\n    margin:0 auto 1% auto;\r\n    }\r\n}\r\n\r\n@media(min-width:1000px){\r\n    .content-box{\r\n        height: 250px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMva2hhbWlzLWhhcmIva2hhbWlzLWhhcmItZWtmYWxuaS9raGFtaXMtaGFyYi1la2ZhbG5pLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxZQUFZO0FBQ1osb0NBQXlFO0FBQ3pFLHlCQUF5QjtBQUN6QixvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsWUFBWTtBQUNaOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2Y7O0FBRUE7QUFDQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsYUFBYTtJQUNiO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULHFCQUFxQjtJQUNyQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLFNBQVM7SUFDYjtBQUNKOztBQUVBO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGFBQWE7SUFDYjtBQUNKO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQjtBQUNKO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxhQUFhO0lBQ2I7QUFDSjtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckI7SUFDQTtRQUNJLGFBQWE7UUFDYixTQUFTO0lBQ2I7QUFDSjs7QUFFQTtBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYjtBQUNKO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQjtBQUNKO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYjtBQUNKO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaXRlcy9raGFtaXMtaGFyYi9raGFtaXMtaGFyYi1la2ZhbG5pL2toYW1pcy1oYXJiLWVrZmFsbmkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbnBhZGRpbmc6MDtcclxufVxyXG5cclxuI2JvZHl7XHJcbmhlaWdodDogMTAwJTtcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9zaXRlcy9raGFtaXMtaGFyYi1pa2ZhbG5pL3BhdHRlcm4ucG5nXCIpO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZTFkYWNhO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXkgcmVwZWF0LXg7XHJcbn1cclxuXHJcbi5yZXNwb25zaXZlIHtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogYXV0bztcclxufVxyXG5cclxuI3lvdXR1YmUtYm94e1xyXG5ib3JkZXI6IDJweCBzb2xpZCAjMjkxQjEwO1xyXG5ib3JkZXItcmFkaXVzOiAyNXB4OyBcclxubWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjYwMHB4KXtcclxuI2FsdGF6a3lhdHtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB3aWR0aDo3NSU7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtYm94e1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiN0YXpraWF0e1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHdpZHRoOjM1JTtcclxuICAgIG1hcmdpbjowIGF1dG8gMSUgYXV0bztcclxuICAgIH1cclxuICAgIC5jb250ZW50LWJveHtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIHdpZHRoOjcwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo1NzVweCl7XHJcbiNhbHRhemt5YXR7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICB9XHJcbiN0YXpraWF0e1xyXG4gICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW46MCBhdXRvIDElIGF1dG87XHJcbiAgICB9XHJcbiNhbHRhemt5YXRke1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHdpZHRoOjc1JTtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICB9XHJcbiN0YXpraWF0ZHtcclxuICAgIG1heC13aWR0aDozNSU7XHJcbiAgICBtYXJnaW46MCBhdXRvIDElIGF1dG87XHJcbiAgICB9XHJcbiAgICAuY29udGVudC1ib3h7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICB3aWR0aDo3MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6OTgwcHgpe1xyXG4jYWx0YXpreWF0e1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICB9XHJcbiN0YXpraWF0e1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbjowIGF1dG8gMSUgYXV0bztcclxuICAgIH1cclxuI2FsdGF6a3lhdGR7XHJcbiAgICB3aWR0aDo3OCU7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgfVxyXG4jdGF6a2lhdGR7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luOjAgYXV0byAxJSBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjEwMDBweCl7XHJcbiAgICAuY29udGVudC1ib3h7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sites/khamis-harb/khamis-harb-ekfalni/khamis-harb-ekfalni.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/sites/khamis-harb/khamis-harb-ekfalni/khamis-harb-ekfalni.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='body'>\r\n  \r\n  <div class=\"container\" style=\"text-align:center;background:rgba(239, 236, 229, 0.5);\">\r\n    \r\n      <img src=\"assets/sites/khamis-harb-ikfalni/header-02.png\" class=\"responsive\">\r\n\r\n      <div style='height:7px;background:#291B10;margin-top:5px'></div>\r\n\r\n      <div style='background:#291B10;margin-top:5px'>\r\n      \r\n        <img class=\"col-sm-3half col-2\" style='padding:1% 3px;max-width: 14%;' src=\"assets/sites/khamis-harb-ikfalni/whatsapp_1.png\" alt=\"\">\r\n        \r\n        <a href=\"\">\r\n            <img class=\"col-sm-1 col-2\" style='padding:1% 3px' src=\"assets/sites/khamis-harb-ikfalni/snapchat.png\" alt=\"\">\r\n        </a>\r\n\r\n        <a href=\"https://www.youtube.com/channel/UCv6QxTAC09osAzzRObuCrIg\">\r\n            <img class=\"col-sm-1 col-2\" style='padding:1% 3px' src=\"assets/sites/khamis-harb-ikfalni/youtube.png\" alt=\"\">\r\n        </a>\r\n        \r\n        <a href=\"https://www.instagram.com/ahsankom21/\">\r\n            <img class=\"col-sm-1 col-2\" style='padding:1% 3px' src=\"assets/sites/khamis-harb-ikfalni/instagram.png\" alt=\"\">\r\n        </a>\r\n        \r\n        <a href=\"https://twitter.com/ahsankom21\">\r\n            <img class=\"col-sm-1 col-2\" style='padding:1% 3px' src=\"assets/sites/khamis-harb-ikfalni/twitter.png\" alt=\"\">\r\n        </a>\r\n        \r\n        <img class=\"col-sm-1 col-2\" style='padding:1% 3px' src=\"assets/sites/khamis-harb-ikfalni/facebook.png\" alt=\"\">\r\n      \r\n      </div>\r\n\r\n      <div style='height:7px;background:#291B10;margin-top:5px'></div>\r\n\r\n\r\n      <div style=\"margin:10px 0\">\r\n\r\n          <a href=\"\"><img class=\"col-sm-7 col-9 responsive\" src=\"assets/sites/khamis-harb-ikfalni/tarakhis-button.png\"></a>\r\n      \r\n          <img class=\"col-sm-2 col-3 responsive\" src=\"assets/sites/khamis-harb-ikfalni/contact-us.png\">\r\n            \r\n      </div>\r\n      \r\n      <div style=\"text-align:center\">\r\n        <img src=\"assets/sites/khamis-harb-ikfalni/big-img.png\" class=\"responsive\">\r\n      </div>\r\n\r\n      <!-- youtube box -->\r\n      <div id='youtube-box'>\r\n\r\n\r\n        <div class=\"row\" style=\"padding-top:10px\">\r\n          \r\n          <div class=\"col-sm-1\"></div>\r\n          \r\n          <div class=\"col-sm-3 col-12 \" style=\"text-align:center\">\r\n            <div id='tazkiat'>\r\n              <img id='tazkiatd'src=\"assets/sites/khamis-harb-ikfalni/tazkiat.png\" alt=\"\">\r\n              <div class='content-box' style=\"background:#291B10;margin:5px auto 5px auto\"></div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-sm-8 col-12\" style=\"text-align:center\">\r\n            <div id='altazkyat'>\r\n              <img  id='altazkyatd' src=\"assets/sites/khamis-harb-ikfalni/altazkyat.png\" alt=\"\">\r\n              <div class='content-box' style=\"background:#291B10;width:70%;margin:5px auto 5px auto\"></div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        \r\n      </div>\r\n\r\n      <div style=\"text-align:center\">\r\n        <img src=\"assets/sites/khamis-harb-ikfalni/bank-accounts.png\" class=\"responsive\">\r\n      </div>\r\n    \r\n    </div>\r\n    \r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sites/khamis-harb/khamis-harb-ekfalni/khamis-harb-ekfalni.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/sites/khamis-harb/khamis-harb-ekfalni/khamis-harb-ekfalni.component.ts ***!
  \****************************************************************************************/
/*! exports provided: KhamisHarbEkfalniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamisHarbEkfalniComponent", function() { return KhamisHarbEkfalniComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KhamisHarbEkfalniComponent = /** @class */ (function () {
    function KhamisHarbEkfalniComponent() {
        this.title = 'اكلفني - جمعية خميس حرب';
    }
    KhamisHarbEkfalniComponent.prototype.ngOnInit = function () {
    };
    KhamisHarbEkfalniComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-khamis-harb-ekfalni',
            template: __webpack_require__(/*! ./khamis-harb-ekfalni.component.html */ "./src/app/sites/khamis-harb/khamis-harb-ekfalni/khamis-harb-ekfalni.component.html"),
            styles: [__webpack_require__(/*! ./khamis-harb-ekfalni.component.css */ "./src/app/sites/khamis-harb/khamis-harb-ekfalni/khamis-harb-ekfalni.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KhamisHarbEkfalniComponent);
    return KhamisHarbEkfalniComponent;
}());



/***/ }),

/***/ "./src/app/sites/khamis-harb/khamis-harb-waqf/khamis-harb-waqf.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/sites/khamis-harb/khamis-harb-waqf/khamis-harb-waqf.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{list-style: none; display: inline-block}\r\n\r\n.space{\r\nmargin:10px 0;\r\n}\r\n\r\n#body{\r\nheight: 100%;\r\npadding-top:20px;\r\nbackground-image: url('new-pattern.png');\r\nbackground-color: #F4F1E6;\r\nbackground-repeat: repeat-y repeat-x;\r\n}\r\n\r\n.container{\r\nwidth:100%;\r\nmargin:0;\r\npadding:0;\r\nfont-family: cairo;\r\nmargin:0 auto;\r\n}\r\n\r\n.full-image{\r\nwidth:100%;\r\n}\r\n\r\nul {\r\ntext-align: center;\r\nlist-style: inside;\r\nmargin:0;\r\npadding:0;\r\nmargin-top:5px;\r\n}\r\n\r\n.social{\r\nfont-size:30px;\r\ncolor:#821F1E;\r\nmargin:0 7px;\r\n}\r\n\r\n.mobile{\r\nline-height: 50px;\r\nposition: relative;\r\ntop:-4px;\r\nfont-family: tahoma;\r\nfont-weight: bold;\r\ncolor:#5e0a0c;\r\n}\r\n\r\nh2{\r\nfont-size:18px;\r\nfont-weight: 700;\r\n}\r\n\r\nh6{\r\nfont-size:12px;\r\nfont-weight: 700;\r\n}\r\n\r\np{\r\nfont-size:12px;\r\nline-height: 20px;\r\npadding:10px;\r\nborder-radius:15px; \r\n}\r\n\r\nth{\r\nfont-size: 13px;\r\ncolor:#5e0a0c;\r\n}\r\n\r\n.waqf-elyateem-makkah{\r\nbackground: #D8C5AB;\r\nbackground-color: rgba(216, 197, 170, 0.3);\r\n}\r\n\r\n.waqf-elyateem-makkah-title{\r\nwidth:80%;\r\ntext-align: center;\r\npadding:5px 10px;\r\ncolor:#821F1E;\r\nmargin:0 auto;\r\n}\r\n\r\n.waqf-elyateem-makkah-content{\r\ncolor:black;\r\nmargin:0 7px;\r\nfont-weight: normal;\r\n}\r\n\r\n.waqf-elyateem-message-content{\r\npadding:10px;\r\nmargin:0 7px;\r\nfont-size:14px;\r\nline-height:20px;\r\ntext-align: center;\r\n}\r\n\r\n.yt-container {\r\nposition: relative;\r\nwidth: 100%;\r\nheight: 0;\r\npadding-bottom: 56.25%;\r\n}\r\n\r\n.video {\r\nposition: absolute;\r\ntop: 0;\r\nleft: 0;\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n\r\n.yt-ul li{\r\nwidth:23%;\r\nmargin:2px 2px;\r\n}\r\n\r\n.youtube-image{\r\nwidth:100%;\r\n}\r\n\r\n@media only screen and (min-width: 1000px) {\r\n\r\n.container{\r\nwidth:950px;\r\nmargin:0 auto;\r\n}\r\n\r\n.social{\r\nfont-size: 60px;\r\nmargin:0 15px;\r\n}\r\n\r\n.mobile{\r\nfont-size:30px;\r\nline-height: 50px;\r\nposition: relative;\r\ntop:-10px;\r\n}\r\n\r\n\r\nh2{\r\nfont-size:32px;\r\n}\r\n\r\nh6{\r\nfont-size:24px;\r\nfont-weight: 700;\r\n}\r\n\r\n\r\np{\r\nfont-size: 22px;\r\nline-height: 33px;\r\npadding:15px 20px;\r\n}\r\n\r\nth{\r\nfont-size: 24px;\r\n}\r\n\r\n\r\n.waqf-elyateem-message-content{\r\npadding:10px;\r\nmargin:0 7px;\r\nfont-size:24px;\r\nline-height:20px;\r\ntext-align: center;\r\nwidth:70%;\r\nline-height: 35px;\r\nmargin: 0 auto;\r\n}\r\n\r\n.space{\r\nmargin:20px 0;\r\n}\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMva2hhbWlzLWhhcmIva2hhbWlzLWhhcmItd2FxZi9raGFtaXMtaGFyYi13YXFmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRyxnQkFBZ0IsRUFBRSxxQkFBcUI7O0FBRTFDO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQix3Q0FBMEU7QUFDMUUseUJBQXlCO0FBQ3pCLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1IsU0FBUztBQUNULGtCQUFrQjtBQUNsQixhQUFhO0FBQ2I7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLFFBQVE7QUFDUixTQUFTO0FBQ1QsY0FBYztBQUNkOztBQUVBO0FBQ0EsY0FBYztBQUNkLGFBQWE7QUFDYixZQUFZO0FBQ1o7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLFFBQVE7QUFDUixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0EsY0FBYztBQUNkLGlCQUFpQjtBQUNqQixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYjs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQiwwQ0FBMEM7QUFDMUM7O0FBRUE7QUFDQSxTQUFTO0FBQ1Qsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2IsYUFBYTtBQUNiOztBQUVBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxTQUFTO0FBQ1Qsc0JBQXNCO0FBQ3RCOztBQUdBO0FBQ0Esa0JBQWtCO0FBQ2xCLE1BQU07QUFDTixPQUFPO0FBQ1AsV0FBVztBQUNYLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFNBQVM7QUFDVCxjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBR0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsYUFBYTtBQUNiOztBQUVBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDs7O0FBR0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsZUFBZTtBQUNmOzs7QUFHQTtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1osY0FBYztBQUNkLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsU0FBUztBQUNULGlCQUFpQjtBQUNqQixjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9zaXRlcy9raGFtaXMtaGFyYi9raGFtaXMtaGFyYi13YXFmL2toYW1pcy1oYXJiLXdhcWYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpe2xpc3Qtc3R5bGU6IG5vbmU7IGRpc3BsYXk6IGlubGluZS1ibG9ja31cclxuXHJcbi5zcGFjZXtcclxubWFyZ2luOjEwcHggMDtcclxufVxyXG5cclxuI2JvZHl7XHJcbmhlaWdodDogMTAwJTtcclxucGFkZGluZy10b3A6MjBweDtcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9zaXRlcy9raGFtaXMtaGFyYi13YXFmL25ldy1wYXR0ZXJuLnBuZ1wiKTtcclxuYmFja2dyb3VuZC1jb2xvcjogI0Y0RjFFNjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15IHJlcGVhdC14O1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG53aWR0aDoxMDAlO1xyXG5tYXJnaW46MDtcclxucGFkZGluZzowO1xyXG5mb250LWZhbWlseTogY2Fpcm87XHJcbm1hcmdpbjowIGF1dG87XHJcbn1cclxuXHJcbi5mdWxsLWltYWdle1xyXG53aWR0aDoxMDAlO1xyXG59XHJcblxyXG51bCB7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxubGlzdC1zdHlsZTogaW5zaWRlO1xyXG5tYXJnaW46MDtcclxucGFkZGluZzowO1xyXG5tYXJnaW4tdG9wOjVweDtcclxufVxyXG5cclxuLnNvY2lhbHtcclxuZm9udC1zaXplOjMwcHg7XHJcbmNvbG9yOiM4MjFGMUU7XHJcbm1hcmdpbjowIDdweDtcclxufVxyXG5cclxuLm1vYmlsZXtcclxubGluZS1oZWlnaHQ6IDUwcHg7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudG9wOi00cHg7XHJcbmZvbnQtZmFtaWx5OiB0YWhvbWE7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5jb2xvcjojNWUwYTBjO1xyXG59XHJcblxyXG5oMntcclxuZm9udC1zaXplOjE4cHg7XHJcbmZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmg2e1xyXG5mb250LXNpemU6MTJweDtcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxucHtcclxuZm9udC1zaXplOjEycHg7XHJcbmxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5wYWRkaW5nOjEwcHg7XHJcbmJvcmRlci1yYWRpdXM6MTVweDsgXHJcbn1cclxuXHJcbnRoe1xyXG5mb250LXNpemU6IDEzcHg7XHJcbmNvbG9yOiM1ZTBhMGM7XHJcbn1cclxuXHJcbi53YXFmLWVseWF0ZWVtLW1ha2thaHtcclxuYmFja2dyb3VuZDogI0Q4QzVBQjtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTYsIDE5NywgMTcwLCAwLjMpO1xyXG59XHJcblxyXG4ud2FxZi1lbHlhdGVlbS1tYWtrYWgtdGl0bGV7XHJcbndpZHRoOjgwJTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5wYWRkaW5nOjVweCAxMHB4O1xyXG5jb2xvcjojODIxRjFFO1xyXG5tYXJnaW46MCBhdXRvO1xyXG59XHJcblxyXG4ud2FxZi1lbHlhdGVlbS1tYWtrYWgtY29udGVudHtcclxuY29sb3I6YmxhY2s7XHJcbm1hcmdpbjowIDdweDtcclxuZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLndhcWYtZWx5YXRlZW0tbWVzc2FnZS1jb250ZW50e1xyXG5wYWRkaW5nOjEwcHg7XHJcbm1hcmdpbjowIDdweDtcclxuZm9udC1zaXplOjE0cHg7XHJcbmxpbmUtaGVpZ2h0OjIwcHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnl0LWNvbnRhaW5lciB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMDtcclxucGFkZGluZy1ib3R0b206IDU2LjI1JTtcclxufVxyXG5cclxuXHJcbi52aWRlbyB7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiAwO1xyXG5sZWZ0OiAwO1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ueXQtdWwgbGl7XHJcbndpZHRoOjIzJTtcclxubWFyZ2luOjJweCAycHg7XHJcbn1cclxuXHJcbi55b3V0dWJlLWltYWdle1xyXG53aWR0aDoxMDAlO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuXHJcbi5jb250YWluZXJ7XHJcbndpZHRoOjk1MHB4O1xyXG5tYXJnaW46MCBhdXRvO1xyXG59XHJcblxyXG4uc29jaWFse1xyXG5mb250LXNpemU6IDYwcHg7XHJcbm1hcmdpbjowIDE1cHg7XHJcbn1cclxuXHJcbi5tb2JpbGV7XHJcbmZvbnQtc2l6ZTozMHB4O1xyXG5saW5lLWhlaWdodDogNTBweDtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG50b3A6LTEwcHg7XHJcbn1cclxuXHJcblxyXG5oMntcclxuZm9udC1zaXplOjMycHg7XHJcbn1cclxuXHJcbmg2e1xyXG5mb250LXNpemU6MjRweDtcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuXHJcbnB7XHJcbmZvbnQtc2l6ZTogMjJweDtcclxubGluZS1oZWlnaHQ6IDMzcHg7XHJcbnBhZGRpbmc6MTVweCAyMHB4O1xyXG59XHJcblxyXG50aHtcclxuZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG5cclxuLndhcWYtZWx5YXRlZW0tbWVzc2FnZS1jb250ZW50e1xyXG5wYWRkaW5nOjEwcHg7XHJcbm1hcmdpbjowIDdweDtcclxuZm9udC1zaXplOjI0cHg7XHJcbmxpbmUtaGVpZ2h0OjIwcHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxud2lkdGg6NzAlO1xyXG5saW5lLWhlaWdodDogMzVweDtcclxubWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5zcGFjZXtcclxubWFyZ2luOjIwcHggMDtcclxufVxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sites/khamis-harb/khamis-harb-waqf/khamis-harb-waqf.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/sites/khamis-harb/khamis-harb-waqf/khamis-harb-waqf.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"body\">\r\n\r\n  <div class=\"container\">\r\n\r\n    <!-- header -->\r\n    <img src=\"assets/sites/khamis-harb-waqf/header.png\" class='full-image'>\r\n\r\n    <div class=\"space\"></div>\r\n   \r\n    <!-- social media links -->\r\n    <ul>\r\n        <i class=\"mobile\">054341618</i>\r\n        <i class=\"fab fa-whatsapp social\"></i>\r\n        <!-- <i class=\"fab fa-snapchat social\"></i> -->\r\n        <!-- <i class=\"fab fa-facebook social\"></i> -->\r\n        <a href=\"https://www.youtube.com/channel/UCKDE6HXdVfPPTgDQiVmQIKA\">\r\n          <i class=\"fab fa-youtube social\"></i>\r\n        </a>\r\n        <a href=\"https://twitter.com/wkamece02\">\r\n          <i class=\"fab fa-twitter social\"></i>\r\n        </a>\r\n        <a href=\"https://www.instagram.com/wkamece02/\">\r\n          <i class=\"fab fa-instagram social\"></i>\r\n        </a>\r\n    </ul>\r\n\r\n   \r\n    <!-- الجمعية مرخصة -->\r\n    <img src=\"assets/sites/khamis-harb-waqf/license.png\" class='full-image'>\r\n\r\n    <div class=\"space\"></div>\r\n  \r\n    <!-- وقف اليتيم بمكة المكرمة -->\r\n    <div class=\"waqf-elyateem-makkah\">\r\n      <h2 class='waqf-elyateem-makkah-title'>وقف اليتيم بمكة المكرمة</h2>\r\n      <P dir=\"rtl\" style=\"text-align: justify\" class='waqf-elyateem-makkah-content'>\r\n          تأسس وقف اليتيم الخيري بتاريخ 1440/5/1هـ بتصريح من وزارة العمل والتنمية والشؤون الاجتماعية رقم (481) ، ويشرف على إدارة الوقف مجلس إدارة جمعية البر بخميس حرب المكون من عشرة أعضاء من الثقات الأكفاء ذوي الخبرة الاستثمارية والإدارية \r\n          ما هو وقف اليتيم؟\r\n          الوقف عبارة عن برج فندقي مكون من اجنحه وغرف فندقية يقع بمكة المكرمة – داخل حدود الحرم مما يحقق مورد مالياً لكفالة ايتام الجمعية مدى الحياة. والذي يحقق مستلزماتهم الغذائية والتعليمية والصحية والاجتماعية \r\n      </P>\r\n    </div>    \r\n\r\n    <div class=\"space\"></div>\r\n  \r\n    <!-- مشروعات الوقف -->\r\n    <h2 class='waqf-elyateem-makkah-title'>مشروعات الوقف</h2>\r\n    <div class=\"space\"></div>\r\n    <img src=\"assets/sites/khamis-harb-waqf/projects.png\" class='full-image'>\r\n\r\n    <div class=\"space\"></div>\r\n  \r\n    <!-- رسالة وقف اليتيم -->\r\n    <h2 class='waqf-elyateem-makkah-title'>رسالة وقف اليتيم</h2>\r\n    <p class='waqf-elyateem-message-content'>\r\n        وقف خيري رائد ومتميز في أنظمته الإدارية والاستثمارية, يرضي الواقفين ويحقق اكتفاءً مالياً لأيتام الجمعية\r\n    </p>\r\n\r\n   \r\n    <!-- بنر مكة وأسهم الوقف -->\r\n    <img src=\"assets/sites/khamis-harb-waqf/makkah-banner.png\" class='full-image'>\r\n\r\n    <div class=\"space\"></div>\r\n  \r\n    <!-- تواصل معنا -->\r\n    <h6 class='waqf-elyateem-makkah-title'>تواصل معنا لنرسل عنك بطاقة اهداء (سهم وقف اليتيم) لمن تحب</h6>\r\n    \r\n    <div class=\"space\"></div>\r\n  \r\n    <!-- تواصل معنا -->\r\n    <h6 class='waqf-elyateem-makkah-title'>تواصل معنا لنرسل لك درع اهداء (سهم وقف اليتيم) لمن تحب إذا كان سهمك ماسياً أو ذهبياً</h6>\r\n\r\n   \r\n    <div class=\"space\"></div>\r\n\r\n    <!-- تزكيات أهل العلم - تزكيات الوقف -->\r\n    <table width=\"100%\">\r\n      <tr align='center'>\r\n        <th>تزكيات أهل العلم</th>\r\n        <th>تزكيات الوقف</th>\r\n      </tr>\r\n\r\n      <tr>\r\n        <!-- صور التزكيات -->\r\n        <td>\r\n          <!-- <img src=\"assets/sites/khamis-harb-waqf/tazkyat/1.jpg\" class='full-image'> -->\r\n        </td>\r\n\r\n        <!-- youtube -->\r\n        <td width=\"65%\">\r\n\r\n          <div>\r\n\r\n            <div class=\"yt-container\" style=\"margin-bottom:5px\">\r\n              <!-- <iframe src=\"//www.youtube.com/embed/yCOY82UdFrw\" \r\n              frameborder=\"0\" allowfullscreen class=\"video\"></iframe> -->\r\n\r\n            <div [innerHtml]=\"yt_iframe_html\"></div>\r\n\r\n                \r\n            </div>\r\n\r\n\r\n            <ul class=\"yt-ul\">\r\n\r\n              <li>\r\n                  <a class='yt-videos' (click)=\"getYtUrl('https://www.youtube.com/watch?v=tnivQHZ0NUE')\">\r\n                    <img src=\"https://i.ytimg.com/vi/tnivQHZ0NUE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDBctGCK436AjiH0uM1aOjXu7lymw\" class=\"youtube-image\">\r\n                  </a>\r\n              </li>   \r\n              \r\n              <li>\r\n                <a class='yt-videos' (click)=\"getYtUrl('https://www.youtube.com/watch?v=C43IheccoZ0')\">\r\n                  <img src=\"https://i.ytimg.com/vi/C43IheccoZ0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBQAdFgV_pIDGL0SX5TWXCDuGQGUg\" class=\"youtube-image\">\r\n                </a>\r\n              </li>\r\n\r\n              <li>\r\n                <a class='yt-videos' (click)=\"getYtUrl('https://www.youtube.com/watch?v=9lCgkq7xfmQ')\">\r\n                  <img  src=\"https://i.ytimg.com/vi/9lCgkq7xfmQ/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAI8vC5CSHsxnOLW3yd-gX5qkGv9A\" class=\"youtube-image\">\r\n                </a>\r\n              </li>\r\n\r\n              <li>\r\n                  <a class='yt-videos' (click)=\"getYtUrl('https://www.youtube.com/watch?v=dQo6WwFPLk0')\">\r\n                    <img src=\"https://i.ytimg.com/vi/dQo6WwFPLk0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD09__8m9zPV2RstOOC5Iv6n5IJ3Q\" class=\"youtube-image\">\r\n                  </a>\r\n              </li>  \r\n    \r\n            </ul>\r\n\r\n          </div>\r\n\r\n        </td>\r\n      </tr>\r\n    </table>\r\n\r\n    <div class=\"space\"></div>\r\n\r\n    <!-- بنر زكاتك -->\r\n    <img src=\"assets/sites/khamis-harb-waqf/zakatak.png\" class='full-image'>\r\n\r\n    <div class=\"space\"></div>\r\n\r\n    <!-- حسابات البنك -->\r\n    <a href=\"https://www.almubasher.com.sa/portal/auth/login.do?locale=ar_SA\">\r\n      <img src=\"assets/sites/khamis-harb-waqf/rajhi.png\" class=\"full-image\">\r\n    </a>\r\n\r\n    <a href=\"https://www.alahlionline.com/online/login?lang=ar\">\r\n      <img src=\"assets/sites/khamis-harb-waqf/ahli.png\" class=\"full-image\">\r\n    </a>\r\n\r\n    <a href=\"https://onlinebanking.anb.com.sa/RetailBank/app/logon.jsp?englang=en_AR\">\r\n      <img src=\"assets/sites/khamis-harb-waqf/arabi.png\" class=\"full-image\">\r\n    </a>\r\n\r\n    <div class=\"space\"></div>\r\n\r\n    <!-- خاتمة -->\r\n    <div class=\"waqf-elyateem-makkah\">\r\n      <h2 class='waqf-elyateem-makkah-title'>خاتمة</h2>\r\n      <P dir=\"rtl\" style=\"text-align: center\" class='waqf-elyateem-makkah-content'>\r\n          قد لا يكون لديك مال تتصدق به عن نفسك ولكن باستطاعتك أن تشارك المنفق في الأجر بالدلالة على وقف اليتيم قا صلى الله عليه وسلم: “من دلّ على خير فله أجر فاعله” فكم لك من الأجر في دلالتك على هذا الوقف !؟      </P>\r\n    </div>    \r\n\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/sites/khamis-harb/khamis-harb-waqf/khamis-harb-waqf.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/sites/khamis-harb/khamis-harb-waqf/khamis-harb-waqf.component.ts ***!
  \**********************************************************************************/
/*! exports provided: KhamisHarbWaqfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamisHarbWaqfComponent", function() { return KhamisHarbWaqfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__);



var KhamisHarbWaqfComponent = /** @class */ (function () {
    function KhamisHarbWaqfComponent(embedService) {
        this.embedService = embedService;
        this.youtubeUrl = "https://www.youtube.com/watch?v=tnivQHZ0NUE";
    }
    KhamisHarbWaqfComponent.prototype.ngOnInit = function () {
        this.getYtUrl(this.youtubeUrl);
    };
    KhamisHarbWaqfComponent.prototype.getYtUrl = function (ytUrl) {
        this.yt_iframe_html = this.embedService.embed(ytUrl, {
            query: { portrait: 0, color: '333' },
            attr: { style: 'position:absolute;top:0;left:0;width:100%;height:100%' }
        });
    };
    KhamisHarbWaqfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-khamis-harb-waqf',
            template: __webpack_require__(/*! ./khamis-harb-waqf.component.html */ "./src/app/sites/khamis-harb/khamis-harb-waqf/khamis-harb-waqf.component.html"),
            styles: [__webpack_require__(/*! ./khamis-harb-waqf.component.css */ "./src/app/sites/khamis-harb/khamis-harb-waqf/khamis-harb-waqf.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__["EmbedVideoService"]])
    ], KhamisHarbWaqfComponent);
    return KhamisHarbWaqfComponent;
}());



/***/ }),

/***/ "./src/app/sites/marwa/marwa-ekfalni/marwa-ekfalni.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/sites/marwa/marwa-ekfalni/marwa-ekfalni.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\npadding:0;\r\n}\r\n\r\n#body{\r\nheight: 100%;\r\npadding-top:20px;\r\nbackground-image: url('pattern.png');\r\nbackground-color: #f1f1f1;\r\nbackground-repeat: repeat-y repeat-x;\r\n}\r\n\r\n.responsive {\r\nwidth: 100%;\r\nheight: auto;\r\n}\r\n\r\n#header{\r\nborder-radius: 25px 25px; \r\nborder: 2px solid darkgreen;\r\noverflow: hidden;\r\nbackground:#023E4C;\r\n}\r\n\r\n@media(min-width:1000px){\r\n    .social{\r\n        max-width: 65px;\r\n        margin:12px 10px;\r\n    }\r\n}\r\n\r\n@media(max-width:1000px){\r\n    .social{\r\n        max-width: 40px;\r\n        margin:10px 5px;\r\n    }\r\n}\r\n\r\n@media(max-width:750px){\r\n    .social{\r\n        max-width: 30px;\r\n        margin:10px 5px;\r\n    }\r\n}\r\n\r\n@media(max-width:550px){\r\n    .social{\r\n        max-width: 25px;\r\n        margin:5px 5px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvbWFyd2EvbWFyd2EtZWtmYWxuaS9tYXJ3YS1la2ZhbG5pLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLG9DQUFtRTtBQUNuRSx5QkFBeUI7QUFDekIsb0NBQW9DO0FBQ3BDOztBQUVBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWjs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QiwyQkFBMkI7QUFDM0IsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2l0ZXMvbWFyd2EvbWFyd2EtZWtmYWxuaS9tYXJ3YS1la2ZhbG5pLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG5wYWRkaW5nOjA7XHJcbn1cclxuXHJcbiNib2R5e1xyXG5oZWlnaHQ6IDEwMCU7XHJcbnBhZGRpbmctdG9wOjIwcHg7XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvc2l0ZXMvbWFyd2EtZWtmYWxuaS9wYXR0ZXJuLnBuZ1wiKTtcclxuYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15IHJlcGVhdC14O1xyXG59XHJcblxyXG4ucmVzcG9uc2l2ZSB7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbiNoZWFkZXJ7XHJcbmJvcmRlci1yYWRpdXM6IDI1cHggMjVweDsgXHJcbmJvcmRlcjogMnB4IHNvbGlkIGRhcmtncmVlbjtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxuYmFja2dyb3VuZDojMDIzRTRDO1xyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjEwMDBweCl7XHJcbiAgICAuc29jaWFse1xyXG4gICAgICAgIG1heC13aWR0aDogNjVweDtcclxuICAgICAgICBtYXJnaW46MTJweCAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjEwMDBweCl7XHJcbiAgICAuc29jaWFse1xyXG4gICAgICAgIG1heC13aWR0aDogNDBweDtcclxuICAgICAgICBtYXJnaW46MTBweCA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzUwcHgpe1xyXG4gICAgLnNvY2lhbHtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luOjEwcHggNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjU1MHB4KXtcclxuICAgIC5zb2NpYWx7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbjo1cHggNXB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/sites/marwa/marwa-ekfalni/marwa-ekfalni.component.html":
/*!************************************************************************!*\
  !*** ./src/app/sites/marwa/marwa-ekfalni/marwa-ekfalni.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='body'>\r\n  \r\n  <div class=\"container\" style=\"text-align:center;background:rgba(255, 252, 246, 0.5);\">\r\n    \r\n    <div id=\"header\">\r\n\r\n        <img src=\"assets/sites/marwa-ekfalni/header.png\" class=\"responsive\">\r\n\r\n        <!-- <img src=\"assets/sites/marwa-ekfalni/header.png\" class=\"responsive\">\r\n        \r\n        <img class=\"col-4\" src=\"assets/sites/marwa-ekfalni/whatsapp.png\" alt=\"\">\r\n        \r\n\r\n        <a href=\"https://www.youtube.com/channel/UCv6QxTAC09osAzzRObuCrIg\">\r\n            <img class=\"col-1 responsive social\" src=\"assets/sites/marwa-ekfalni/snapchat.png\" alt=\"\">\r\n        </a>\r\n        \r\n        <a href=\"https://www.youtube.com/channel/UCv6QxTAC09osAzzRObuCrIg\">\r\n            <img class=\"col-1 responsive social\" src=\"assets/sites/marwa-ekfalni/youtube.png\" alt=\"\">\r\n        </a>\r\n        \r\n        <a href=\"https://www.instagram.com/ahsankom21/\">\r\n            <img class=\"col-1 responsive social\" src=\"assets/sites/marwa-ekfalni/instagram.png\" alt=\"\">\r\n        </a>\r\n        \r\n        <a href=\"https://twitter.com/ahsankom21\">\r\n            <img class=\"col-1 responsive social\"  src=\"assets/sites/marwa-ekfalni/twitter.png\" alt=\"\">\r\n        </a>\r\n        \r\n        <img class=\"col-1 responsive social\"  src=\"assets/sites/marwa-ekfalni/facebook.png\" alt=\"\"> -->\r\n        \r\n      \r\n    </div>\r\n\r\n      <div style=\"text-align:center\" style=\"margin-top:15px\">\r\n        <img src=\"assets/sites/marwa-ekfalni/steps.png\" class=\"responsive\" style=\"padding:0 10px\">\r\n      </div>\r\n    \r\n      <div style=\"text-align:center\" style=\"margin-top:15px\">\r\n        <img src=\"assets/sites/marwa-ekfalni/orphan-banner.png\" class=\"responsive\" style=\"padding:0 10px\">\r\n      </div>\r\n    \r\n      <div style=\"text-align:center\" style=\"margin-top:15px\">\r\n        <a href=\"https://alber-sa.com/orphans-public/1/male\">\r\n          <img src=\"assets/sites/marwa-ekfalni/first-group.png\" class=\"responsive\" style=\"padding:0 10px\">\r\n        </a>\r\n      </div>\r\n    \r\n      <div style=\"text-align:center\" style=\"margin-top:15px\">\r\n        <a href=\"https://alber-sa.com/orphans-public/1/female\">\r\n          <img src=\"assets/sites/marwa-ekfalni/second-group.png\" class=\"responsive\" style=\"padding:0 10px\">\r\n        </a>\r\n      </div>\r\n    \r\n      <div style=\"text-align:center\" style=\"margin-top:15px;margin-bottom: 20px\">\r\n        <a href=\"https://alber-sa.com/makfouled-orphans/1\">\r\n          <img src=\"assets/sites/marwa-ekfalni/third-group.png\" class=\"responsive\" style=\"padding:0 10px\">\r\n        </a>\r\n      </div>\r\n    \r\n      <div style=\"text-align:center\" style=\"margin-top:15px\">\r\n        <img src=\"assets/sites/marwa-ekfalni/last.png\" class=\"responsive\" style=\"padding:0 10px\">\r\n      </div>\r\n    \r\n  </div>\r\n    \r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sites/marwa/marwa-ekfalni/marwa-ekfalni.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/sites/marwa/marwa-ekfalni/marwa-ekfalni.component.ts ***!
  \**********************************************************************/
/*! exports provided: MarwaEkfalniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarwaEkfalniComponent", function() { return MarwaEkfalniComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MarwaEkfalniComponent = /** @class */ (function () {
    function MarwaEkfalniComponent() {
    }
    MarwaEkfalniComponent.prototype.ngOnInit = function () {
    };
    MarwaEkfalniComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marwa-ekfalni',
            template: __webpack_require__(/*! ./marwa-ekfalni.component.html */ "./src/app/sites/marwa/marwa-ekfalni/marwa-ekfalni.component.html"),
            styles: [__webpack_require__(/*! ./marwa-ekfalni.component.css */ "./src/app/sites/marwa/marwa-ekfalni/marwa-ekfalni.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MarwaEkfalniComponent);
    return MarwaEkfalniComponent;
}());



/***/ }),

/***/ "./src/app/sites/marwa/mr-waqf/mr-waqf.component.css":
/*!***********************************************************!*\
  !*** ./src/app/sites/marwa/mr-waqf/mr-waqf.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\nbackground:red;\r\n}\r\n\r\nh3{\r\npadding:0;\r\nmargin:0;\r\n}\r\n\r\n.hand{\r\ncursor: pointer;\r\n}\r\n\r\n.wrapper{\r\nwidth:100%;\r\nmax-width:950px;\r\nmargin:0 auto;\r\nfont-family: Cairo;\r\nfont-weight: 700;\r\n}\r\n\r\nheader{\r\nbackground:#023E4C;\r\nheight:440px;\r\nborder-radius:15px;\r\nmargin-bottom:9px;\r\n}\r\n\r\nheader ul{\r\nmargin-top:7px;\r\npadding-right:15px;\r\n}\r\n\r\nheader li{\r\nlist-style: none;\r\nfloat:right;\r\nmargin:0 20px;\r\n}\r\n\r\n.wq-elyateem-right{\r\nwidth:388px;\r\nheight:377px;\r\nfloat:right;\r\ntext-align: center;\r\nbackground:#EFEAD5;\r\nborder-radius:15px; \r\nborder:3px solid #023E4C;\r\nmargin:9px 0 12px 0;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 16px;\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n  background:none;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: #d9cd97;\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #555; \r\n}\r\n\r\n.wq-elyateem-right h3{\r\nbackground:#023E4C;\r\npadding:15px 0;\r\ncolor:#EFEAD5;\r\nfont-weight: bold;\r\n}\r\n\r\n.wq-elyateem-right p{\r\npadding:10px 20px;\r\nfont-size:20px;\r\nline-height: 35px;\r\noverflow: scroll;\r\nheight:300px;\r\n}\r\n\r\n.wq-projects-left{\r\nwidth:548px;\r\nfloat:left;\r\nbackground:#FFF7CA;\r\ntext-align: center;\r\nborder-radius:15px; \r\noverflow: hidden;\r\nborder:3px solid #023E4C;\r\nmargin:9px 0 12px 0;\r\n}\r\n\r\n.wq-projects-left h3{\r\nbackground:#023E4C;\r\npadding:15px 0;\r\ncolor:#EFEAD5;\r\nfont-weight: bold;\r\n}\r\n\r\n.wq-projects-left img{\r\npadding:20px 0;\r\n}\r\n\r\n.youtube-left{\r\nwidth:548px;\r\nfloat:left;\r\nbackground:#EFEAD5;\r\ntext-align: center;\r\nborder-radius:15px; \r\noverflow: hidden;\r\nborder:3px solid #023E4C;\r\nmargin:9px 0 12px 0;\r\n}\r\n\r\n.youtube-left h3{\r\nbackground:#023E4C;\r\npadding:15px 0;\r\ncolor:#EFEAD5;\r\nfont-weight: bold;\r\n}\r\n\r\n.yt-container{\r\nposition: relative;\r\nwidth: 100%;\r\nheight: 0;\r\npadding-bottom: 56.25%;\r\n}\r\n\r\n.youtube-left ul{\r\ntext-align: center;\r\nlist-style: inside;\r\nmargin:0;\r\npadding:0;\r\nmargin-top:5px;\r\n}\r\n\r\n.youtube-left li{\r\nwidth:19%;\r\nmargin:2px 2px;\r\nlist-style: none;\r\nfloat:right;\r\n}\r\n\r\n.youtube-image{\r\nwidth:100%;\r\n}\r\n\r\n.tazkyat-slides-right{\r\nwidth:388px;\r\nheight:437px;\r\nfloat:right;\r\ntext-align: center;\r\nbackground:#EFEAD5;\r\nborder-radius:15px; \r\nborder:3px solid #023E4C;\r\nmargin:9px 0 12px 0;\r\noverflow: hidden;\r\n}\r\n\r\n.tazkyat-slides-right h3{\r\nbackground:#023E4C;\r\npadding:15px 0;\r\ncolor:#EFEAD5;\r\nfont-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvbWFyd2EvbXItd2FxZi9tci13YXFmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSOztBQUVBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0EsVUFBVTtBQUNWLGVBQWU7QUFDZixhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIsV0FBVztBQUNYLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1osV0FBVztBQUNYLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsVUFBVTs7QUFDVjtFQUNFLGVBQWU7QUFDakI7O0FBRUEsV0FBVzs7QUFDWDtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxvQkFBb0I7O0FBQ3BCO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsY0FBYztBQUNkLGFBQWE7QUFDYixpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQix3QkFBd0I7QUFDeEIsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxTQUFTO0FBQ1Qsc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixRQUFRO0FBQ1IsU0FBUztBQUNULGNBQWM7QUFDZDs7QUFFQTtBQUNBLFNBQVM7QUFDVCxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLFdBQVc7QUFDWDs7QUFFQTtBQUNBLFVBQVU7QUFDVjs7QUFJQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1osV0FBVztBQUNYLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2l0ZXMvbWFyd2EvbXItd2FxZi9tci13YXFmLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG5iYWNrZ3JvdW5kOnJlZDtcclxufVxyXG5cclxuaDN7XHJcbnBhZGRpbmc6MDtcclxubWFyZ2luOjA7XHJcbn1cclxuXHJcbi5oYW5ke1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi53cmFwcGVye1xyXG53aWR0aDoxMDAlO1xyXG5tYXgtd2lkdGg6OTUwcHg7XHJcbm1hcmdpbjowIGF1dG87XHJcbmZvbnQtZmFtaWx5OiBDYWlybztcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuaGVhZGVye1xyXG5iYWNrZ3JvdW5kOiMwMjNFNEM7XHJcbmhlaWdodDo0NDBweDtcclxuYm9yZGVyLXJhZGl1czoxNXB4O1xyXG5tYXJnaW4tYm90dG9tOjlweDtcclxufVxyXG5cclxuaGVhZGVyIHVse1xyXG5tYXJnaW4tdG9wOjdweDtcclxucGFkZGluZy1yaWdodDoxNXB4O1xyXG59XHJcblxyXG5oZWFkZXIgbGl7XHJcbmxpc3Qtc3R5bGU6IG5vbmU7XHJcbmZsb2F0OnJpZ2h0O1xyXG5tYXJnaW46MCAyMHB4O1xyXG59XHJcblxyXG4ud3EtZWx5YXRlZW0tcmlnaHR7XHJcbndpZHRoOjM4OHB4O1xyXG5oZWlnaHQ6Mzc3cHg7XHJcbmZsb2F0OnJpZ2h0O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmJhY2tncm91bmQ6I0VGRUFENTtcclxuYm9yZGVyLXJhZGl1czoxNXB4OyBcclxuYm9yZGVyOjNweCBzb2xpZCAjMDIzRTRDO1xyXG5tYXJnaW46OXB4IDAgMTJweCAwO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTZweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDpub25lO1xyXG59XHJcbiBcclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNkOWNkOTc7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1OyBcclxufVxyXG5cclxuLndxLWVseWF0ZWVtLXJpZ2h0IGgze1xyXG5iYWNrZ3JvdW5kOiMwMjNFNEM7XHJcbnBhZGRpbmc6MTVweCAwO1xyXG5jb2xvcjojRUZFQUQ1O1xyXG5mb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLndxLWVseWF0ZWVtLXJpZ2h0IHB7XHJcbnBhZGRpbmc6MTBweCAyMHB4O1xyXG5mb250LXNpemU6MjBweDtcclxubGluZS1oZWlnaHQ6IDM1cHg7XHJcbm92ZXJmbG93OiBzY3JvbGw7XHJcbmhlaWdodDozMDBweDtcclxufVxyXG5cclxuLndxLXByb2plY3RzLWxlZnR7XHJcbndpZHRoOjU0OHB4O1xyXG5mbG9hdDpsZWZ0O1xyXG5iYWNrZ3JvdW5kOiNGRkY3Q0E7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuYm9yZGVyLXJhZGl1czoxNXB4OyBcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxuYm9yZGVyOjNweCBzb2xpZCAjMDIzRTRDO1xyXG5tYXJnaW46OXB4IDAgMTJweCAwO1xyXG59XHJcblxyXG4ud3EtcHJvamVjdHMtbGVmdCBoM3tcclxuYmFja2dyb3VuZDojMDIzRTRDO1xyXG5wYWRkaW5nOjE1cHggMDtcclxuY29sb3I6I0VGRUFENTtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi53cS1wcm9qZWN0cy1sZWZ0IGltZ3tcclxucGFkZGluZzoyMHB4IDA7XHJcbn1cclxuXHJcbi55b3V0dWJlLWxlZnR7XHJcbndpZHRoOjU0OHB4O1xyXG5mbG9hdDpsZWZ0O1xyXG5iYWNrZ3JvdW5kOiNFRkVBRDU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuYm9yZGVyLXJhZGl1czoxNXB4OyBcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxuYm9yZGVyOjNweCBzb2xpZCAjMDIzRTRDO1xyXG5tYXJnaW46OXB4IDAgMTJweCAwO1xyXG59XHJcblxyXG4ueW91dHViZS1sZWZ0IGgze1xyXG5iYWNrZ3JvdW5kOiMwMjNFNEM7XHJcbnBhZGRpbmc6MTVweCAwO1xyXG5jb2xvcjojRUZFQUQ1O1xyXG5mb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnl0LWNvbnRhaW5lcntcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAwO1xyXG5wYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xyXG59XHJcblxyXG4ueW91dHViZS1sZWZ0IHVse1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmxpc3Qtc3R5bGU6IGluc2lkZTtcclxubWFyZ2luOjA7XHJcbnBhZGRpbmc6MDtcclxubWFyZ2luLXRvcDo1cHg7XHJcbn1cclxuXHJcbi55b3V0dWJlLWxlZnQgbGl7XHJcbndpZHRoOjE5JTtcclxubWFyZ2luOjJweCAycHg7XHJcbmxpc3Qtc3R5bGU6IG5vbmU7XHJcbmZsb2F0OnJpZ2h0O1xyXG59XHJcblxyXG4ueW91dHViZS1pbWFnZXtcclxud2lkdGg6MTAwJTtcclxufVxyXG5cclxuXHJcblxyXG4udGF6a3lhdC1zbGlkZXMtcmlnaHR7XHJcbndpZHRoOjM4OHB4O1xyXG5oZWlnaHQ6NDM3cHg7XHJcbmZsb2F0OnJpZ2h0O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmJhY2tncm91bmQ6I0VGRUFENTtcclxuYm9yZGVyLXJhZGl1czoxNXB4OyBcclxuYm9yZGVyOjNweCBzb2xpZCAjMDIzRTRDO1xyXG5tYXJnaW46OXB4IDAgMTJweCAwO1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGF6a3lhdC1zbGlkZXMtcmlnaHQgaDN7XHJcbmJhY2tncm91bmQ6IzAyM0U0QztcclxucGFkZGluZzoxNXB4IDA7XHJcbmNvbG9yOiNFRkVBRDU7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/sites/marwa/mr-waqf/mr-waqf.component.html":
/*!************************************************************!*\
  !*** ./src/app/sites/marwa/mr-waqf/mr-waqf.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n\r\n    <!-- header -->\r\n    <header>\r\n\r\n        <img src=\"assets/sites/mr-waqf/header.jpg\">\r\n\r\n        <!-- social media links -->\r\n        <div id=\"social\">\r\n\r\n            <ul>\r\n\r\n                <li>\r\n                    <img src=\"assets/sites/mr-waqf/social/whatsapp.png\">\r\n                </li>\r\n\r\n                <li>\r\n                    <a href=\"https://twitter.com/wqfmrwa\">\r\n                        <img src=\"assets/sites/mr-waqf/social/twitter.png\">\r\n                    </a>\r\n                </li>\r\n\r\n                <li>\r\n                    <img src=\"assets/sites/mr-waqf/social/snapchat.png\" (click)=\"onCreateNew('assets/sites/mr-waqf/modals/snapchat.jpg')\" class=\"hand\">\r\n                </li>\r\n\r\n                <li>\r\n                    <img src=\"assets/sites/mr-waqf/social/facebook.png\">\r\n                </li>\r\n\r\n                <li>\r\n                    <a href=\"https://www.youtube.com/channel/UCgGhbN6RRpRDoCocY5GjRLg\">\r\n                        <img src=\"assets/sites/mr-waqf/social/youtube.png\">\r\n                    </a>\r\n                </li>\r\n\r\n\r\n                <li>\r\n                    <a href=\"https://www.instagram.com/wqfmrwa/\">\r\n                        <img src=\"assets/sites/mr-waqf/social/instgram.png\">\r\n                    </a>\r\n                </li>\r\n\r\n\r\n\r\n            </ul>\r\n            \r\n        </div>\r\n\r\n    </header>\r\n\r\n    <img src=\"assets/sites/mr-waqf/license.jpg\" (click)=\"onCreateNew('assets/sites/mr-waqf/modals/license.jpg')\" class=\"hand\">\r\n\r\n    <!-- وقف اليتيم بمكة المكرمة -->\r\n    <div class=\"wq-elyateem-right\">\r\n\r\n        <h3>وقف اليتيم بمكة المكرمة</h3>\r\n        <P dir=\"rtl\" style=\"text-align: justify\" class='wq-elyateem-makkah-content'>\r\n            تأسس وقف الأيتام الخيري بتاريخ 1-5-1440 هـ بتصريح من وزارة العمل والتنمية والشؤون الاجتماعية رقم (443) ، ويشرف على ادارة الوقف مجلس ادارة جمعية البر الخيرية بالمروة المكون من عشرة أعضاء من الثقات الاكفاء وذوي الخبرة الاستثمارية والإدارية .\r\n\r\n                <br>\r\n            <span style=\"text-align:right\">ماهو وقف الأيتام ؟</span>\r\n            <br>\r\n            الوقف عبارة عن برج فندقي مكون من اجنحة وغرف فندقية يقع بمكة المكرمة - داخل حدود الحرم مما يحقق مورد مالياً لكفالة ايتام الجمعية مدى الحياة . والذي يحقق مستلزماتهم الغذائية والتعلمنية والصحية والاجتماعية\r\n        </P>\r\n\r\n    </div>\r\n\r\n    <!-- مشروعات الوقف -->\r\n    <div class=\"wq-projects-left\">\r\n\r\n        <h3>مشروعات الوقف</h3>\r\n        <img src=\"assets/sites/mr-waqf/projects.png\" width='500'>\r\n\r\n    </div>\r\n\r\n    <!-- big banner -->\r\n    <img src=\"assets/sites/mr-waqf/big-banner.jpg\">\r\n\r\n    <!-- youtube -->\r\n    <div class=\"youtube-left\">\r\n\r\n        <h3>تزكيات الوقف</h3>\r\n\r\n        <div class=\"yt-container\">\r\n            <!-- <iframe src=\"//www.youtube.com/embed/yCOY82UdFrw\" \r\n            frameborder=\"0\" allowfullscreen class=\"video\"></iframe> -->\r\n            <div [innerHtml]=\"yt_iframe_html\"></div>\r\n        </div>\r\n\r\n        <ul>\r\n\r\n            <li class=\"hand\">\r\n                <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=5d-6-mmkGzU')\">\r\n                    <img src=\"https://i.ytimg.com/vi/5d-6-mmkGzU/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAy6mN5PKeY7haVhncPgL59ynVaDQ\" class=\"youtube-image\">\r\n                </a>\r\n            </li>   \r\n            \r\n            <li class=\"hand\">\r\n            <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=e0sVrjWN6qE')\">\r\n                <img src=\"https://i.ytimg.com/vi/e0sVrjWN6qE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDK2i2snvgqnPWO9O1R1Yz00gv04A\" class=\"youtube-image\">\r\n            </a>\r\n            </li>\r\n\r\n            <li class=\"hand\">\r\n            <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=oCPgDqSGczE')\">\r\n                <img  src=\"https://i.ytimg.com/vi/oCPgDqSGczE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD9XVy3A4dKM_93VohRf5zZuT1rjg\" class=\"youtube-image\">\r\n            </a>\r\n            </li>\r\n\r\n            <li class=\"hand\">\r\n                <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=re6xy8TDiTw')\">\r\n                    <img class=\"hand\" src=\"https://i.ytimg.com/vi/re6xy8TDiTw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDBevaKQtb7E_vlKn0OcaGtGR-ljQ\" class=\"youtube-image\">\r\n                </a>\r\n            </li>  \r\n\r\n            <li class=\"hand\">\r\n                <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=FFd1-BTnf_0')\">\r\n                    <img src=\"https://i.ytimg.com/vi/FFd1-BTnf_0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLChGHFaa6xdoDvb8BEU-sjF9e0G_Q\" class=\"youtube-image\">\r\n                </a>\r\n            </li>  \r\n\r\n        </ul>\r\n\r\n    </div>\r\n    \r\n    <!-- تزكيات أهل العلم -->\r\n    <div class=\"tazkyat-slides-right\">\r\n\r\n        <h3>تزكيات أهل العلم</h3>\r\n\r\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\" class=\"hand\">\r\n\r\n            <div class=\"carousel-inner\">\r\n\r\n                <div class=\"carousel-item active\">\r\n                    <img class=\"d-block w-100\" src=\"assets/sites/mr-waqf/modals/7.jpg\" (click)=\"onCreateNew('assets/sites/mr-waqf/modals/7.jpg')\">\r\n                </div>\r\n\r\n                <div class=\"carousel-item\" *ngFor=\"let image of images; let i = index\">\r\n                    <img class=\"d-block w-100\" src=\"assets/sites/mr-waqf/modals/{{i}}.jpg\" (click)=\"onCreateNew('assets/sites/mr-waqf/modals/' + i + '.jpg')\">\r\n                </div>\r\n\r\n            </div>\r\n            \r\n        </div>\r\n\r\n    </div>\r\n    \r\n\r\n    <!-- بنر زكاتك -->\r\n    <img src=\"assets/sites/mr-waqf/zakatak.jpg\">\r\n\r\n    <!-- حسابات البنك -->\r\n    <a href=\"https://www.almubasher.com.sa/portal/auth/login.do?locale=ar_SA\">\r\n      <img src=\"assets/sites/mr-waqf/rajhi.jpg\">\r\n    </a>\r\n\r\n    <a href=\"https://www.alahlionline.com/online/login?lang=ar\">\r\n      <img src=\"assets/sites/mr-waqf/ahli.jpg\">\r\n    </a>\r\n\r\n    <a href=\"https://online.alinma.com/ibweb/public/login.jsf?login_section=true&mobile=1&session_locale=ar\">\r\n      <img src=\"assets/sites/mr-waqf/enmaa.jpg\">\r\n    </a>\r\n\r\n    <!-- خاتمة -->\r\n    <img src=\"assets/sites/mr-waqf/final.jpg\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/sites/marwa/mr-waqf/mr-waqf.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/sites/marwa/mr-waqf/mr-waqf.component.ts ***!
  \**********************************************************/
/*! exports provided: MrWaqfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MrWaqfComponent", function() { return MrWaqfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal/modal.component */ "./src/app/sites/modal/modal.component.ts");





var MrWaqfComponent = /** @class */ (function () {
    function MrWaqfComponent(embedService, dialog, elementRef) {
        this.embedService = embedService;
        this.dialog = dialog;
        this.elementRef = elementRef;
        this.images = new Array(7);
        this.youtubeUrl = "https://www.youtube.com/watch?v=FFd1-BTnf_0";
    }
    MrWaqfComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#DBD7CA';
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('assets/sites/khamis-harb-waqf/new-pattern.png')";
    };
    MrWaqfComponent.prototype.ngOnInit = function () {
        this.getYtUrl(this.youtubeUrl);
    };
    MrWaqfComponent.prototype.getYtUrl = function (ytUrl) {
        this.yt_iframe_html = this.embedService.embed(ytUrl, {
            query: { portrait: 0, color: '333' },
            attr: { style: 'position:absolute;top:0;left:0;width:100%;height:100%' }
        });
    };
    MrWaqfComponent.prototype.onCreateNew = function (imgName) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = imgName;
        dialogConfig.autoFocus = true;
        var dialogCallBack = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], dialogConfig);
    };
    MrWaqfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mr-waqf',
            template: __webpack_require__(/*! ./mr-waqf.component.html */ "./src/app/sites/marwa/mr-waqf/mr-waqf.component.html"),
            styles: [__webpack_require__(/*! ./mr-waqf.component.css */ "./src/app/sites/marwa/mr-waqf/mr-waqf.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__["EmbedVideoService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], MrWaqfComponent);
    return MrWaqfComponent;
}());



/***/ }),

/***/ "./src/app/sites/modal/modal.component.css":
/*!*************************************************!*\
  !*** ./src/app/sites/modal/modal.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdGVzL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sites/modal/modal.component.html":
/*!**************************************************!*\
  !*** ./src/app/sites/modal/modal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n    * {\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .imgbox {\r\n        display: grid;\r\n        height: 100%;\r\n    }\r\n    .center-fit {\r\n        max-width: 100%;\r\n        max-height: 100vh;\r\n        margin: auto;\r\n    }\r\n    .close{\r\n        font-size: 32px;\r\n    }\r\n</style>\r\n\r\n<button (click)='onClose()' class=\"close\">X</button>\r\n<br>\r\n\r\n<div class=\"imgbox\">\r\n    <img class=\"center-fit\" src=\"{{data}}\">\r\n</div>\r\n\r\n\r\n<!-- <div align='center' style=\"width:950px;margin:0 auto\">\r\n\r\n    <img src=\"{{data}}\" width='950'>\r\n\r\n</div> -->\r\n\r\n<!-- <div align='center'>\r\n\r\n    <img src=\"{{data}}\">\r\n\r\n</div> -->\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/sites/modal/modal.component.ts":
/*!************************************************!*\
  !*** ./src/app/sites/modal/modal.component.ts ***!
  \************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ModalComponent = /** @class */ (function () {
    function ModalComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.onClose = function () {
        // this.newBreadwinnerForm.reset();
        this.dialogRef.close();
    };
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/sites/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/sites/modal/modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/sites/raith-projects/raith-projects.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/sites/raith-projects/raith-projects.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hand{\r\ncursor: pointer;\r\n}\r\n\r\n.wrapper{   \r\nwidth:100%;\r\nmax-width:1024px;\r\nmargin:0 auto;\r\nfont-family: Cairo;\r\nfont-weight: 700;\r\n}\r\n\r\nheader{\r\nborder-radius:15px;\r\nmargin-bottom:9px;\r\nmargin-top:10px;\r\n}\r\n\r\n#social{\r\nbackground:#012f39;\r\nwidth:950px;\r\npadding:10px 0;\r\nheight:100px;\r\nmargin:10px auto;\r\n}\r\n\r\n#social ul{\r\nmargin:0;\r\ntext-align:center;\r\nposition: relative;\r\nright:-15px;\r\n}\r\n\r\n#social li{\r\nlist-style: none;\r\nmargin:0 5px;\r\ndisplay:inline-block;\r\nposition: relative;\r\ntop:-15px;\r\n}\r\n\r\nh4 span{\r\npadding:1px 50px;\r\n}\r\n\r\n#body-wrapper{\r\nwidth:950px;\r\nposition: relative;\r\ntext-align: center;\r\nmargin:0 auto;\r\nbackground-image: url('pattern.png');\r\nbackground-color:#b2c1c4;\r\n}\r\n\r\n.wq-elyateem-right{\r\nwidth:950px;\r\nheight:377px;\r\ntext-align: center;\r\nbackground:#01323d;\r\nborder-radius:40px; \r\nborder:3px solid #8fc6a9;\r\nmargin:9px auto 12px auto;\r\n}\r\n\r\n::-webkit-scrollbar {\r\nwidth: 16px;\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\nbackground:none;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\nbackground: #cfffeb;\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\nbackground: #9bd6be; \r\n}\r\n\r\n.wq-elyateem-right h4{\r\nfont-weight: bold;\r\nborder-radius:15px;\r\ncolor:white;\r\nmargin:20px 0;\r\n}\r\n\r\n.wq-elyateem-right p{\r\npadding:10px 50px;\r\nfont-size:20px;\r\nline-height: 35px;\r\n/* overflow: scroll; */\r\nheight:300px;\r\ncolor:white;\r\n}\r\n\r\n.wq-projects-left{\r\nheight: 378px;\r\nwidth:265px;\r\nfloat:left;\r\nbackground:white;\r\ntext-align: center;\r\noverflow: hidden;\r\nborder-radius:40px; \r\nborder:3px solid #8fc6a9;\r\nmargin:9px 0 12px 0;\r\n}\r\n\r\n.wq-projects-left h4{\r\nfont-weight: bold;\r\nborder-radius:15px;\r\ncolor:white;\r\nmargin:20px 0;\r\n}\r\n\r\n.wq-projects-left img{\r\npadding:20px 0;\r\n}\r\n\r\n.image-border{\r\npadding:10px;\r\nbackground:#2c5307;\r\nborder-radius:15px;\r\n}\r\n\r\n#waqf-projects{\r\nbackground:#e2fcea;\r\npadding:20px;\r\nborder:6px solid #2c5307;\r\nmargin: 30px 0;\r\n}\r\n\r\n#waqf-projects img{\r\nmargin-top:30px;\r\n}\r\n\r\n#waqf-projects h4{\r\ntext-align: center;\r\nfont-weight: bold;\r\nborder-radius:15px;\r\ncolor:white;\r\nmargin:20px 0;\r\n}\r\n\r\n#fatwa{\r\nbackground:#2c5307;\r\npadding:20px 50px;\r\nmargin:30px 0;\r\n}\r\n\r\n#yt-wrapper h4{\r\ntext-align: center;\r\nfont-weight: bold;\r\nborder-radius:15px;\r\ncolor:#2c5307;\r\nmargin-bottom: 20px;\r\n}\r\n\r\n.youtube-left{\r\nwidth:548px;\r\nfloat:left;\r\nbackground:white;\r\ntext-align: center;\r\noverflow: hidden;\r\nmargin:9px 0 9px 18px;\r\n}\r\n\r\n.yt-container{\r\nposition: relative;\r\nwidth: 100%;\r\nheight: 0;\r\npadding-bottom: 56.25%;\r\n}\r\n\r\n.youtube-left ul{\r\ntext-align: center;\r\nlist-style: inside;\r\nmargin:0;\r\npadding:0;\r\nmargin-top:5px;\r\n}\r\n\r\n.youtube-left li{\r\nwidth:19%;\r\nmargin:2px 2px;\r\nlist-style: none;\r\nfloat:right;\r\n}\r\n\r\n.youtube-image{\r\nwidth:100%;\r\n}\r\n\r\n.tazkyat-slides-right{\r\nwidth:350px;\r\nheight:426px;\r\nfloat:right;\r\ntext-align: center;\r\nbackground:white;\r\nmargin:9px 18px 12px 0;\r\noverflow: hidden;\r\n}\r\n\r\n.tazkyat-slides-right h4{\r\nfont-weight: bold;\r\ncolor:white;\r\n}\r\n\r\nfooter{\r\nwidth:950px;\r\nmargin:0 auto;\r\npadding-top:20px;\r\ntext-align: center;\r\nbackground-color:#012f39;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvcmFpdGgtcHJvamVjdHMvcmFpdGgtcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsY0FBYztBQUNkLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSxRQUFRO0FBQ1IsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1g7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsU0FBUztBQUNUOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0EsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLG9DQUF5RTtBQUN6RSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekI7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7O0FBRUEsVUFBVTs7QUFDVjtBQUNBLGVBQWU7QUFDZjs7QUFFQSxXQUFXOztBQUNYO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBLG9CQUFvQjs7QUFDcEI7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakIsY0FBYztBQUNkLGlCQUFpQjtBQUNqQixzQkFBc0I7QUFDdEIsWUFBWTtBQUNaLFdBQVc7QUFDWDs7QUFFQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsVUFBVTtBQUNWLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQix3QkFBd0I7QUFDeEIsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsYUFBYTtBQUNiOztBQUVBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0EsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsWUFBWTtBQUNaLHdCQUF3QjtBQUN4QixjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsYUFBYTtBQUNiOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixhQUFhO0FBQ2IsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0EsV0FBVztBQUNYLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsV0FBVztBQUNYLFNBQVM7QUFDVCxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLFFBQVE7QUFDUixTQUFTO0FBQ1QsY0FBYztBQUNkOztBQUVBO0FBQ0EsU0FBUztBQUNULGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsV0FBVztBQUNYOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUlBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixzQkFBc0I7QUFDdEIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDs7QUFFQTtBQUNBLFdBQVc7QUFDWCxhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQix3QkFBd0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9zaXRlcy9yYWl0aC1wcm9qZWN0cy9yYWl0aC1wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhbmR7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLndyYXBwZXJ7ICAgXHJcbndpZHRoOjEwMCU7XHJcbm1heC13aWR0aDoxMDI0cHg7XHJcbm1hcmdpbjowIGF1dG87XHJcbmZvbnQtZmFtaWx5OiBDYWlybztcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuaGVhZGVye1xyXG5ib3JkZXItcmFkaXVzOjE1cHg7XHJcbm1hcmdpbi1ib3R0b206OXB4O1xyXG5tYXJnaW4tdG9wOjEwcHg7XHJcbn1cclxuXHJcbiNzb2NpYWx7XHJcbmJhY2tncm91bmQ6IzAxMmYzOTtcclxud2lkdGg6OTUwcHg7XHJcbnBhZGRpbmc6MTBweCAwO1xyXG5oZWlnaHQ6MTAwcHg7XHJcbm1hcmdpbjoxMHB4IGF1dG87XHJcbn1cclxuXHJcbiNzb2NpYWwgdWx7XHJcbm1hcmdpbjowO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5yaWdodDotMTVweDtcclxufVxyXG5cclxuI3NvY2lhbCBsaXtcclxubGlzdC1zdHlsZTogbm9uZTtcclxubWFyZ2luOjAgNXB4O1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG50b3A6LTE1cHg7XHJcbn1cclxuXHJcbmg0IHNwYW57XHJcbnBhZGRpbmc6MXB4IDUwcHg7XHJcbn1cclxuXHJcbiNib2R5LXdyYXBwZXJ7XHJcbndpZHRoOjk1MHB4O1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxubWFyZ2luOjAgYXV0bztcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3NpdGVzL3JhaXRoLXByb2plY3RzL3BhdHRlcm4ucG5nXCIpO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNiMmMxYzQ7XHJcbn1cclxuXHJcbi53cS1lbHlhdGVlbS1yaWdodHtcclxud2lkdGg6OTUwcHg7XHJcbmhlaWdodDozNzdweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5iYWNrZ3JvdW5kOiMwMTMyM2Q7XHJcbmJvcmRlci1yYWRpdXM6NDBweDsgXHJcbmJvcmRlcjozcHggc29saWQgIzhmYzZhOTtcclxubWFyZ2luOjlweCBhdXRvIDEycHggYXV0bztcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbndpZHRoOiAxNnB4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuYmFja2dyb3VuZDpub25lO1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbmJhY2tncm91bmQ6ICNjZmZmZWI7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuYmFja2dyb3VuZDogIzliZDZiZTsgXHJcbn1cclxuXHJcbi53cS1lbHlhdGVlbS1yaWdodCBoNHtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmJvcmRlci1yYWRpdXM6MTVweDtcclxuY29sb3I6d2hpdGU7XHJcbm1hcmdpbjoyMHB4IDA7XHJcbn1cclxuXHJcbi53cS1lbHlhdGVlbS1yaWdodCBwe1xyXG5wYWRkaW5nOjEwcHggNTBweDtcclxuZm9udC1zaXplOjIwcHg7XHJcbmxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4vKiBvdmVyZmxvdzogc2Nyb2xsOyAqL1xyXG5oZWlnaHQ6MzAwcHg7XHJcbmNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4ud3EtcHJvamVjdHMtbGVmdHtcclxuaGVpZ2h0OiAzNzhweDtcclxud2lkdGg6MjY1cHg7XHJcbmZsb2F0OmxlZnQ7XHJcbmJhY2tncm91bmQ6d2hpdGU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxuYm9yZGVyLXJhZGl1czo0MHB4OyBcclxuYm9yZGVyOjNweCBzb2xpZCAjOGZjNmE5O1xyXG5tYXJnaW46OXB4IDAgMTJweCAwO1xyXG59XHJcblxyXG4ud3EtcHJvamVjdHMtbGVmdCBoNHtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmJvcmRlci1yYWRpdXM6MTVweDtcclxuY29sb3I6d2hpdGU7XHJcbm1hcmdpbjoyMHB4IDA7XHJcbn1cclxuXHJcbi53cS1wcm9qZWN0cy1sZWZ0IGltZ3tcclxucGFkZGluZzoyMHB4IDA7XHJcbn1cclxuXHJcbi5pbWFnZS1ib3JkZXJ7XHJcbnBhZGRpbmc6MTBweDtcclxuYmFja2dyb3VuZDojMmM1MzA3O1xyXG5ib3JkZXItcmFkaXVzOjE1cHg7XHJcbn1cclxuXHJcbiN3YXFmLXByb2plY3Rze1xyXG5iYWNrZ3JvdW5kOiNlMmZjZWE7XHJcbnBhZGRpbmc6MjBweDtcclxuYm9yZGVyOjZweCBzb2xpZCAjMmM1MzA3O1xyXG5tYXJnaW46IDMwcHggMDtcclxufVxyXG5cclxuI3dhcWYtcHJvamVjdHMgaW1ne1xyXG5tYXJnaW4tdG9wOjMwcHg7XHJcbn1cclxuXHJcbiN3YXFmLXByb2plY3RzIGg0e1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5ib3JkZXItcmFkaXVzOjE1cHg7XHJcbmNvbG9yOndoaXRlO1xyXG5tYXJnaW46MjBweCAwO1xyXG59XHJcblxyXG4jZmF0d2F7XHJcbmJhY2tncm91bmQ6IzJjNTMwNztcclxucGFkZGluZzoyMHB4IDUwcHg7XHJcbm1hcmdpbjozMHB4IDA7XHJcbn1cclxuXHJcbiN5dC13cmFwcGVyIGg0e1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5ib3JkZXItcmFkaXVzOjE1cHg7XHJcbmNvbG9yOiMyYzUzMDc7XHJcbm1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi55b3V0dWJlLWxlZnR7XHJcbndpZHRoOjU0OHB4O1xyXG5mbG9hdDpsZWZ0O1xyXG5iYWNrZ3JvdW5kOndoaXRlO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbm1hcmdpbjo5cHggMCA5cHggMThweDtcclxufVxyXG5cclxuLnl0LWNvbnRhaW5lcntcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAwO1xyXG5wYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xyXG59XHJcblxyXG4ueW91dHViZS1sZWZ0IHVse1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmxpc3Qtc3R5bGU6IGluc2lkZTtcclxubWFyZ2luOjA7XHJcbnBhZGRpbmc6MDtcclxubWFyZ2luLXRvcDo1cHg7XHJcbn1cclxuXHJcbi55b3V0dWJlLWxlZnQgbGl7XHJcbndpZHRoOjE5JTtcclxubWFyZ2luOjJweCAycHg7XHJcbmxpc3Qtc3R5bGU6IG5vbmU7XHJcbmZsb2F0OnJpZ2h0O1xyXG59XHJcblxyXG4ueW91dHViZS1pbWFnZXtcclxud2lkdGg6MTAwJTtcclxufVxyXG5cclxuXHJcblxyXG4udGF6a3lhdC1zbGlkZXMtcmlnaHR7XHJcbndpZHRoOjM1MHB4O1xyXG5oZWlnaHQ6NDI2cHg7XHJcbmZsb2F0OnJpZ2h0O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmJhY2tncm91bmQ6d2hpdGU7XHJcbm1hcmdpbjo5cHggMThweCAxMnB4IDA7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50YXpreWF0LXNsaWRlcy1yaWdodCBoNHtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmNvbG9yOndoaXRlO1xyXG59XHJcblxyXG5mb290ZXJ7XHJcbndpZHRoOjk1MHB4O1xyXG5tYXJnaW46MCBhdXRvO1xyXG5wYWRkaW5nLXRvcDoyMHB4O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6IzAxMmYzOTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sites/raith-projects/raith-projects.component.html":
/*!********************************************************************!*\
  !*** ./src/app/sites/raith-projects/raith-projects.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n\r\n  <!-- header -->\r\n  <header>\r\n\r\n      <img src=\"assets/sites/raith-projects/header.png\">\r\n\r\n  </header>\r\n\r\n  <div id=\"body-wrapper\">\r\n  \r\n\r\n    <!-- social media links -->\r\n    <div id=\"social\">\r\n\r\n        <ul>\r\n\r\n            <li>\r\n                <img src=\"assets/sites/raith-projects/social/call-us.png\">\r\n            </li>\r\n\r\n            <li>\r\n                <img src=\"assets/sites/raith-projects/social/whatsapp.png\">\r\n            </li>\r\n\r\n            <li>\r\n                    <a href=\"https://twitter.com/beralrith\">\r\n                        <img src=\"assets/sites/raith-projects/social/twitter.png\">\r\n                    </a>\r\n            </li>\r\n\r\n            <li>\r\n                <a href=\"https://www.instagram.com/beralrith/\">\r\n                    <img src=\"assets/sites/raith-projects/social/instagram.png\">\r\n                </a>\r\n            </li>\r\n\r\n            <li>\r\n                <a href=\"https://www.youtube.com/channel/UCBrOXmIOZpfw9zOgQrruTSw\">\r\n                    <img src=\"assets/sites/raith-projects/social/youtube.png\">\r\n                </a>\r\n            </li>\r\n\r\n            <li>\r\n                <img src=\"assets/sites/raith-projects/social/snapchat.png\" (click)=\"onCreateNew('assets/sites/raith-waqf/modals/snapchat.png')\" class=\"hand\">\r\n            </li>\r\n\r\n\r\n        </ul>\r\n        \r\n    </div>\r\n\r\n    <!-- license -->\r\n    <img src=\"assets/sites/raith-projects/license.png\"\r\n    style=\"background:#5fd1ea;padding:10px 62px\"\r\n    (click)=\"onCreateNew('assets/sites/raith-waqf/modals/license.jpg')\" class=\"hand\">\r\n\r\n      \r\n      <!-- وقف اليتيم بمكة المكرمة -->\r\n      <div class=\"wq-elyateem-right\">\r\n  \r\n          <h4><span>جمعية البر الخيرية بمحافظة الريث</span></h4>\r\n\r\n          <div style=\"height:3px; width:93%;margin:0 auto;background:#97e3f3;\"></div>\r\n\r\n          <P dir=\"rtl\" style=\"text-align: justify\" class='wq-elyateem-makkah-content'>\r\n\r\n                جمعية رائدة ومتميزة في انظمتها الادارية والخيرية، تأسست بتاريخ  1425-7-26هـ بتصريح من وزارة العمل والتنمية الاجتماعية برقم(299) يشرف عليها مجلس ادارة مكون من احد عشر عضوا من الثقات والاكفاء ذوي الخبرة في العمل الخيري والاداري.\r\n        \r\n        \r\n        <br><br>\r\n        <span>\r\n            <h5 style=\"text-align: center;font-weight: bold;font-size:22px\">نطاق أعمال ومناشط الجمعية</h5>\r\n\r\n            <P dir=\"rtl\" style=\"text-align: justify\" class='wq-elyateem-makkah-content'>\r\n\r\n                    تشرف الجمعية على اكثر من 56 قرية وهجرة تابعة لمنطقة جازان وتخدم الأيتام والفقراء والمساكين والأرامل والمطلقات وذوي الأحتياجات الخاصه .            </P>    \r\n                    \r\n        </span>\r\n        \r\n        \r\n            </P>\r\n         \r\n  \r\n      </div>\r\n    \r\n      <!-- banner -->\r\n      <img src=\"assets/sites/raith-projects/big-banner.png\">\r\n        \r\n      <!-- youtube -->\r\n      <div id=\"yt-wrapper\" style=\"background:#012f39;margin-top:20px;width:950px;padding:20px 0;text-align: center\">\r\n\r\n         \r\n          <div class=\"youtube-left\">\r\n\r\n              <h4 style=\"background:#5fd1ea;border-radius:0;margin:0;padding:10px 0;font-weight: bold\">\r\n                    تزكيات الوقف\r\n             </h4>\r\n              \r\n              <div class=\"yt-container\">\r\n                  <!-- <iframe src=\"//www.youtube.com/embed/yCOY82UdFrw\" \r\n                  frameborder=\"0\" allowfullscreen class=\"video\"></iframe> -->\r\n                  <div [innerHtml]=\"yt_iframe_html\"></div>\r\n              </div>\r\n      \r\n              <ul>\r\n      \r\n                  <li class=\"hand\">\r\n                      <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=EwXStPPokrw')\">\r\n                          <img src=\"https://i.ytimg.com/vi/EwXStPPokrw/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDwFxzYnu_wJHMcB3_mZ221SxctZA\" class=\"youtube-image\">\r\n                      </a>\r\n                  </li>   \r\n                  \r\n                  <li class=\"hand\">\r\n                  <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=Oev0_kVkCCM')\">\r\n                      <img src=\"https://i.ytimg.com/vi/Oev0_kVkCCM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBrvUeJAMHxJpVpbubv6A7OryJ3_A\" class=\"youtube-image\">\r\n                  </a>\r\n                  </li>\r\n      \r\n                  <li class=\"hand\">\r\n                  <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=wBvkTQdXRHY')\">\r\n                      <img  src=\"https://i.ytimg.com/vi/wBvkTQdXRHY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDYHssO9Ir52hTznyYiu66josKYnw\" class=\"youtube-image\">\r\n                  </a>\r\n                  </li>\r\n      \r\n                  <li class=\"hand\">\r\n                      <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=JFCfnTmKeWw')\">\r\n                          <img class=\"hand\" src=\"https://i.ytimg.com/vi/JFCfnTmKeWw/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA7paleUXiKE5ED0kBCQS5wXmU_YA\" class=\"youtube-image\">\r\n                      </a>\r\n                  </li>  \r\n      \r\n                  <li class=\"hand\">\r\n                      <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=E5v_P56KoSY')\">\r\n                          <img src=\"https://i.ytimg.com/vi/E5v_P56KoSY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDlNrH3byi3ziOxE4xLPpQ7FoxCMw\" class=\"youtube-image\">\r\n                      </a>\r\n                  </li>  \r\n      \r\n              </ul>\r\n      \r\n          </div>\r\n\r\n    <!-- تزكيات أهل العلم -->\r\n    <div class=\"tazkyat-slides-right\">\r\n\r\n        <h4 style=\"background:#5fd1ea;border-radius:0;margin:0;padding:10px 0;font-weight: bold\">\r\n            تزكيات القضاة وأهل العلم\r\n        </h4>\r\n\r\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\" class=\"hand\" style=\"padding:20px\">\r\n\r\n            <div class=\"carousel-inner\">\r\n\r\n                <div class=\"carousel-item active\">\r\n                    <img class=\"d-block w-100\" src=\"assets/sites/raith-waqf/modals/8.jpg\" (click)=\"onCreateNew('assets/sites/raith-waqf/modals/8.jpg')\" style=\"padding:0 20px\">\r\n                </div>\r\n\r\n                <div class=\"carousel-item\" *ngFor=\"let image of images; let i = index\">\r\n                    <img class=\"d-block w-100\" src=\"assets/sites/raith-waqf/modals/{{i}}.jpg\" (click)=\"onCreateNew('assets/sites/raith-waqf/modals/' + i + '.jpg')\" style=\"padding:0 20px\">\r\n                </div>\r\n\r\n            </div>\r\n            \r\n        </div>\r\n\r\n    </div>\r\n          \r\n\r\n      </div>\r\n      \r\n  </div>\r\n\r\n\r\n\r\n  <footer>\r\n\r\n      <!-- rajhi -->\r\n        <a href=\"https://www.almubasher.com.sa/portal/auth/login.do?locale=ar_SA\">\r\n            <img src=\"assets/sites/raith-projects/rajhi1.png\" style=\"margin-bottom:20px\">\r\n        </a>\r\n\r\n        <a href=\"https://www.almubasher.com.sa/portal/auth/login.do?locale=ar_SA\">\r\n            <img src=\"assets/sites/raith-projects/rajhi2.png\">\r\n        </a>\r\n\r\n\r\n      <div style=\"width:100%;background:#5fd1ea;padding:20px 0;margin-top: 20px\">\r\n      \r\n           <!-- final -->\r\n          <img src=\"assets/sites/raith-projects/final.png\">\r\n      \r\n      </div>\r\n\r\n  </footer>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/sites/raith-projects/raith-projects.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/sites/raith-projects/raith-projects.component.ts ***!
  \******************************************************************/
/*! exports provided: RaithProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaithProjectsComponent", function() { return RaithProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/sites/modal/modal.component.ts");





var RaithProjectsComponent = /** @class */ (function () {
    function RaithProjectsComponent(embedService, dialog, elementRef) {
        this.embedService = embedService;
        this.dialog = dialog;
        this.elementRef = elementRef;
        this.images = new Array(8);
        this.youtubeUrl = "https://www.youtube.com/watch?v=EwXStPPokrw";
    }
    RaithProjectsComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('assets/sites/raith-projects/pattern.png')";
    };
    RaithProjectsComponent.prototype.ngOnInit = function () {
        this.getYtUrl(this.youtubeUrl);
    };
    RaithProjectsComponent.prototype.getYtUrl = function (ytUrl) {
        this.yt_iframe_html = this.embedService.embed(ytUrl, {
            query: { portrait: 0, color: '333' },
            attr: { style: 'position:absolute;top:0;left:0;width:100%;height:100%' }
        });
    };
    RaithProjectsComponent.prototype.onCreateNew = function (imgName) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = imgName;
        dialogConfig.autoFocus = true;
        var dialogCallBack = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], dialogConfig);
    };
    RaithProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-raith-projects',
            template: __webpack_require__(/*! ./raith-projects.component.html */ "./src/app/sites/raith-projects/raith-projects.component.html"),
            styles: [__webpack_require__(/*! ./raith-projects.component.css */ "./src/app/sites/raith-projects/raith-projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__["EmbedVideoService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], RaithProjectsComponent);
    return RaithProjectsComponent;
}());



/***/ }),

/***/ "./src/app/sites/raith-steps/raith-steps.component.css":
/*!*************************************************************!*\
  !*** ./src/app/sites/raith-steps/raith-steps.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper{\r\nwidth:100%;\r\nmax-width:950px;\r\nmargin:0 auto;\r\ntext-align:center;\r\n}\r\n\r\n#wrapper img{\r\nmargin:15px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvcmFpdGgtc3RlcHMvcmFpdGgtc3RlcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFVBQVU7QUFDVixlQUFlO0FBQ2YsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLFdBQVc7QUFDWCIsImZpbGUiOiJzcmMvYXBwL3NpdGVzL3JhaXRoLXN0ZXBzL3JhaXRoLXN0ZXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd3JhcHBlcntcclxud2lkdGg6MTAwJTtcclxubWF4LXdpZHRoOjk1MHB4O1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuI3dyYXBwZXIgaW1ne1xyXG5tYXJnaW46MTVweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/sites/raith-steps/raith-steps.component.html":
/*!**************************************************************!*\
  !*** ./src/app/sites/raith-steps/raith-steps.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <img src=\"assets/sites/raith-steps/header.png\" alt=\"\" style=\"position: relative;right:-12px\">\r\n  <img src=\"assets/sites/raith-steps/steps.png\" alt=\"\" style=\"position: relative;right:-8px\">\r\n\r\n  <a href=\"https://alber-sa.com/orphans-public/5/male\">\r\n    <img src=\"assets/sites/raith-steps/male.png\" alt=\"\">\r\n  </a>\r\n\r\n  <a href=\"https://alber-sa.com/orphans-public/5/female\">\r\n    <img src=\"assets/sites/raith-steps/female.png\" alt=\"\">\r\n  </a>\r\n\r\n  <a href=\"https://alber-sa.com/makfouled-orphans/5\">\r\n    <img src=\"assets/sites/raith-steps/makfouled.png\" alt=\"\">\r\n  </a>\r\n\r\n  <img src=\"assets/sites/raith-steps/final.png\" alt=\"\">\r\n  \r\n\r\n</div>"

/***/ }),

/***/ "./src/app/sites/raith-steps/raith-steps.component.ts":
/*!************************************************************!*\
  !*** ./src/app/sites/raith-steps/raith-steps.component.ts ***!
  \************************************************************/
/*! exports provided: RaithStepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaithStepsComponent", function() { return RaithStepsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RaithStepsComponent = /** @class */ (function () {
    function RaithStepsComponent() {
    }
    RaithStepsComponent.prototype.ngOnInit = function () {
    };
    RaithStepsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-raith-steps',
            template: __webpack_require__(/*! ./raith-steps.component.html */ "./src/app/sites/raith-steps/raith-steps.component.html"),
            styles: [__webpack_require__(/*! ./raith-steps.component.css */ "./src/app/sites/raith-steps/raith-steps.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RaithStepsComponent);
    return RaithStepsComponent;
}());



/***/ }),

/***/ "./src/app/sites/raith/raith-waqf/raith-waqf.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/sites/raith/raith-waqf/raith-waqf.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hand{\r\ncursor: pointer;\r\n}\r\n\r\n.wrapper{   \r\nwidth:100%;\r\nmax-width:1024px;\r\nmargin:0 auto;\r\nfont-family: Cairo;\r\nfont-weight: 700;\r\n}\r\n\r\nheader{\r\nborder-radius:15px;\r\nmargin-bottom:9px;\r\nmargin-top:10px;\r\n}\r\n\r\n#social{\r\nbackground:#532507;\r\nwidth:950px;\r\npadding:10px 0;\r\nheight:89px;\r\nmargin:10px auto;\r\n}\r\n\r\nheader ul{\r\nmargin:0;\r\ntext-align:center;\r\n}\r\n\r\nheader li{\r\nlist-style: none;\r\nmargin:0 20px;\r\ndisplay:inline-block;\r\n}\r\n\r\nh4 span{\r\npadding:1px 50px;\r\nborder-radius: 30px;\r\nbackground:#532507;\r\n}\r\n\r\n#body-wrapper{\r\nwidth:950px;\r\ntext-align: center;\r\nmargin:0 auto;\r\npadding:20px 0;\r\nbackground-color:rgba(83, 37, 7, 0.5);\r\n}\r\n\r\n.wq-elyateem-right{\r\nwidth:660px;\r\nheight:377px;\r\nfloat:right;\r\ntext-align: center;\r\nbackground:white;\r\nborder-radius:40px; \r\nborder:3px solid #8fc6a9;\r\nmargin:9px 10px 12px 0;\r\n}\r\n\r\n::-webkit-scrollbar {\r\nwidth: 16px;\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\nbackground:none;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\nbackground: #b6a398; \r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\nbackground: #b6a398; \r\n}\r\n\r\n.wq-elyateem-right h4{\r\nfont-weight: bold;\r\nborder-radius:15px;\r\ncolor:white;\r\nmargin:20px 0;\r\n}\r\n\r\n.wq-elyateem-right p{\r\npadding:10px 20px;\r\nfont-size:20px;\r\nline-height: 35px;\r\noverflow: scroll;\r\nheight:300px;\r\n}\r\n\r\n.wq-projects-left{\r\nheight: 378px;\r\nwidth:265px;\r\nfloat:left;\r\nbackground:white;\r\ntext-align: center;\r\noverflow: hidden;\r\nborder-radius:40px; \r\nborder:3px solid #8fc6a9;\r\nmargin:9px 0 12px 10px;\r\n}\r\n\r\n.wq-projects-left h4{\r\nfont-weight: bold;\r\nborder-radius:15px;\r\ncolor:white;\r\nmargin:20px 0;\r\n}\r\n\r\n.wq-projects-left img{\r\npadding:20px 0;\r\n}\r\n\r\n.image-border{\r\npadding:10px;\r\nbackground:#532507;\r\nborder-radius:15px;\r\n}\r\n\r\n#waqf-projects{\r\nbackground:#e2fcea;\r\npadding:20px;\r\nborder:6px solid #532507;\r\nmargin: 30px 0;\r\n}\r\n\r\n#waqf-projects img{\r\nmargin-top:30px;\r\n}\r\n\r\n#waqf-projects h4{\r\ntext-align: center;\r\nfont-weight: bold;\r\nborder-radius:15px;\r\ncolor:white;\r\nmargin:20px 0;\r\n}\r\n\r\n#fatwa{\r\nbackground:#532507;\r\npadding:20px 50px;\r\nmargin:30px 0;\r\n}\r\n\r\n#yt-wrapper h4{\r\ntext-align: center;\r\nfont-weight: bold;\r\nborder-radius:15px;\r\ncolor:#532507;\r\nmargin-bottom: 20px;\r\n}\r\n\r\n.youtube-left{\r\nwidth:950px;\r\nbackground:#EFEAD5;\r\ntext-align: center;\r\noverflow: hidden;\r\nmargin:9px auto;\r\n}\r\n\r\n.yt-container{\r\nposition: relative;\r\nwidth: 100%;\r\nheight: 0;\r\npadding-bottom: 56.25%;\r\n}\r\n\r\n.youtube-left ul{\r\ntext-align: center;\r\nlist-style: inside;\r\nmargin:0;\r\npadding:0;\r\npadding-top:5px;\r\nbackground:lightgreen;\r\n}\r\n\r\n.youtube-left li{\r\nwidth:31%;\r\nmargin:2px 11px;\r\nlist-style: none;\r\nfloat:right;\r\n}\r\n\r\n.youtube-image{\r\nwidth:100%;\r\n}\r\n\r\n.tazkyat-slides-right{\r\nwidth:388px;\r\nheight:437px;\r\nfloat:right;\r\ntext-align: center;\r\nbackground:#EFEAD5;\r\nborder-radius:15px; \r\nborder:3px solid #023E4C;\r\nmargin:9px 0 12px 0;\r\noverflow: hidden;\r\n}\r\n\r\n.tazkyat-slides-right h4{\r\nfont-weight: bold;\r\nborder-radius:15px;\r\ncolor:white;\r\n}\r\n\r\nfooter{\r\nwidth:950px;\r\nmargin:0 auto;\r\npadding-top:20px;\r\ntext-align: center;\r\nbackground-color:#d3c3a7;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZXMvcmFpdGgvcmFpdGgtd2FxZi9yYWl0aC13YXFmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Y7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsV0FBVztBQUNYLGNBQWM7QUFDZCxXQUFXO0FBQ1gsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0EsUUFBUTtBQUNSLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2Isb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYixjQUFjO0FBQ2QscUNBQXFDO0FBQ3JDOztBQUVBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQSxVQUFVOztBQUNWO0FBQ0EsZUFBZTtBQUNmOztBQUVBLFdBQVc7O0FBQ1g7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUEsb0JBQW9COztBQUNwQjtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsV0FBVztBQUNYLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixZQUFZO0FBQ1o7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsV0FBVztBQUNYLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLFlBQVk7QUFDWix3QkFBd0I7QUFDeEIsY0FBYztBQUNkOztBQUVBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsV0FBVztBQUNYLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2Y7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsV0FBVztBQUNYLFNBQVM7QUFDVCxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLFFBQVE7QUFDUixTQUFTO0FBQ1QsZUFBZTtBQUNmLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLFNBQVM7QUFDVCxlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLFdBQVc7QUFDWDs7QUFFQTtBQUNBLFVBQVU7QUFDVjs7QUFJQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1osV0FBVztBQUNYLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1g7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsd0JBQXdCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvc2l0ZXMvcmFpdGgvcmFpdGgtd2FxZi9yYWl0aC13YXFmLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFuZHtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ud3JhcHBlcnsgICBcclxud2lkdGg6MTAwJTtcclxubWF4LXdpZHRoOjEwMjRweDtcclxubWFyZ2luOjAgYXV0bztcclxuZm9udC1mYW1pbHk6IENhaXJvO1xyXG5mb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5oZWFkZXJ7XHJcbmJvcmRlci1yYWRpdXM6MTVweDtcclxubWFyZ2luLWJvdHRvbTo5cHg7XHJcbm1hcmdpbi10b3A6MTBweDtcclxufVxyXG5cclxuI3NvY2lhbHtcclxuYmFja2dyb3VuZDojNTMyNTA3O1xyXG53aWR0aDo5NTBweDtcclxucGFkZGluZzoxMHB4IDA7XHJcbmhlaWdodDo4OXB4O1xyXG5tYXJnaW46MTBweCBhdXRvO1xyXG59XHJcblxyXG5oZWFkZXIgdWx7XHJcbm1hcmdpbjowO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuaGVhZGVyIGxpe1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG5tYXJnaW46MCAyMHB4O1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG5cclxuaDQgc3BhbntcclxucGFkZGluZzoxcHggNTBweDtcclxuYm9yZGVyLXJhZGl1czogMzBweDtcclxuYmFja2dyb3VuZDojNTMyNTA3O1xyXG59XHJcblxyXG4jYm9keS13cmFwcGVye1xyXG53aWR0aDo5NTBweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5tYXJnaW46MCBhdXRvO1xyXG5wYWRkaW5nOjIwcHggMDtcclxuYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDgzLCAzNywgNywgMC41KTtcclxufVxyXG5cclxuLndxLWVseWF0ZWVtLXJpZ2h0e1xyXG53aWR0aDo2NjBweDtcclxuaGVpZ2h0OjM3N3B4O1xyXG5mbG9hdDpyaWdodDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5iYWNrZ3JvdW5kOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOjQwcHg7IFxyXG5ib3JkZXI6M3B4IHNvbGlkICM4ZmM2YTk7XHJcbm1hcmdpbjo5cHggMTBweCAxMnB4IDA7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG53aWR0aDogMTZweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbmJhY2tncm91bmQ6bm9uZTtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG5iYWNrZ3JvdW5kOiAjYjZhMzk4OyBcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG5iYWNrZ3JvdW5kOiAjYjZhMzk4OyBcclxufVxyXG5cclxuLndxLWVseWF0ZWVtLXJpZ2h0IGg0e1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuYm9yZGVyLXJhZGl1czoxNXB4O1xyXG5jb2xvcjp3aGl0ZTtcclxubWFyZ2luOjIwcHggMDtcclxufVxyXG5cclxuLndxLWVseWF0ZWVtLXJpZ2h0IHB7XHJcbnBhZGRpbmc6MTBweCAyMHB4O1xyXG5mb250LXNpemU6MjBweDtcclxubGluZS1oZWlnaHQ6IDM1cHg7XHJcbm92ZXJmbG93OiBzY3JvbGw7XHJcbmhlaWdodDozMDBweDtcclxufVxyXG5cclxuLndxLXByb2plY3RzLWxlZnR7XHJcbmhlaWdodDogMzc4cHg7XHJcbndpZHRoOjI2NXB4O1xyXG5mbG9hdDpsZWZ0O1xyXG5iYWNrZ3JvdW5kOndoaXRlO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbmJvcmRlci1yYWRpdXM6NDBweDsgXHJcbmJvcmRlcjozcHggc29saWQgIzhmYzZhOTtcclxubWFyZ2luOjlweCAwIDEycHggMTBweDtcclxufVxyXG5cclxuLndxLXByb2plY3RzLWxlZnQgaDR7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5ib3JkZXItcmFkaXVzOjE1cHg7XHJcbmNvbG9yOndoaXRlO1xyXG5tYXJnaW46MjBweCAwO1xyXG59XHJcblxyXG4ud3EtcHJvamVjdHMtbGVmdCBpbWd7XHJcbnBhZGRpbmc6MjBweCAwO1xyXG59XHJcblxyXG4uaW1hZ2UtYm9yZGVye1xyXG5wYWRkaW5nOjEwcHg7XHJcbmJhY2tncm91bmQ6IzUzMjUwNztcclxuYm9yZGVyLXJhZGl1czoxNXB4O1xyXG59XHJcblxyXG4jd2FxZi1wcm9qZWN0c3tcclxuYmFja2dyb3VuZDojZTJmY2VhO1xyXG5wYWRkaW5nOjIwcHg7XHJcbmJvcmRlcjo2cHggc29saWQgIzUzMjUwNztcclxubWFyZ2luOiAzMHB4IDA7XHJcbn1cclxuXHJcbiN3YXFmLXByb2plY3RzIGltZ3tcclxubWFyZ2luLXRvcDozMHB4O1xyXG59XHJcblxyXG4jd2FxZi1wcm9qZWN0cyBoNHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuYm9yZGVyLXJhZGl1czoxNXB4O1xyXG5jb2xvcjp3aGl0ZTtcclxubWFyZ2luOjIwcHggMDtcclxufVxyXG5cclxuI2ZhdHdhe1xyXG5iYWNrZ3JvdW5kOiM1MzI1MDc7XHJcbnBhZGRpbmc6MjBweCA1MHB4O1xyXG5tYXJnaW46MzBweCAwO1xyXG59XHJcblxyXG4jeXQtd3JhcHBlciBoNHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuYm9yZGVyLXJhZGl1czoxNXB4O1xyXG5jb2xvcjojNTMyNTA3O1xyXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ueW91dHViZS1sZWZ0e1xyXG53aWR0aDo5NTBweDtcclxuYmFja2dyb3VuZDojRUZFQUQ1O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbm1hcmdpbjo5cHggYXV0bztcclxufVxyXG5cclxuLnl0LWNvbnRhaW5lcntcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAwO1xyXG5wYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xyXG59XHJcblxyXG4ueW91dHViZS1sZWZ0IHVse1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmxpc3Qtc3R5bGU6IGluc2lkZTtcclxubWFyZ2luOjA7XHJcbnBhZGRpbmc6MDtcclxucGFkZGluZy10b3A6NXB4O1xyXG5iYWNrZ3JvdW5kOmxpZ2h0Z3JlZW47XHJcbn1cclxuXHJcbi55b3V0dWJlLWxlZnQgbGl7XHJcbndpZHRoOjMxJTtcclxubWFyZ2luOjJweCAxMXB4O1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG5mbG9hdDpyaWdodDtcclxufVxyXG5cclxuLnlvdXR1YmUtaW1hZ2V7XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLnRhemt5YXQtc2xpZGVzLXJpZ2h0e1xyXG53aWR0aDozODhweDtcclxuaGVpZ2h0OjQzN3B4O1xyXG5mbG9hdDpyaWdodDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5iYWNrZ3JvdW5kOiNFRkVBRDU7XHJcbmJvcmRlci1yYWRpdXM6MTVweDsgXHJcbmJvcmRlcjozcHggc29saWQgIzAyM0U0QztcclxubWFyZ2luOjlweCAwIDEycHggMDtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRhemt5YXQtc2xpZGVzLXJpZ2h0IGg0e1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuYm9yZGVyLXJhZGl1czoxNXB4O1xyXG5jb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuZm9vdGVye1xyXG53aWR0aDo5NTBweDtcclxubWFyZ2luOjAgYXV0bztcclxucGFkZGluZy10b3A6MjBweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNkM2MzYTc7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sites/raith/raith-waqf/raith-waqf.component.html":
/*!******************************************************************!*\
  !*** ./src/app/sites/raith/raith-waqf/raith-waqf.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n\r\n    <!-- header -->\r\n    <header>\r\n\r\n        <img src=\"assets/sites/raith-waqf/header.png\">\r\n\r\n        <!-- social media links -->\r\n        <div id=\"social\">\r\n\r\n            <ul>\r\n\r\n                <li>\r\n                    <img src=\"assets/sites/raith-waqf/social/whatsapp.png\">\r\n                </li>\r\n\r\n                <li>\r\n                    <a href=\"https://twitter.com/alreethj\">\r\n                        <img src=\"assets/sites/raith-waqf/social/twitter.png\">\r\n                    </a>\r\n                </li>\r\n\r\n                <li>\r\n                    <a href=\"https://www.instagram.com/alreethj/\">\r\n                        <img src=\"assets/sites/raith-waqf/social/instagram.png\">\r\n                    </a>\r\n                </li>\r\n\r\n                <li>\r\n                    <a href=\"https://www.youtube.com/channel/UCh6WJ6iB_pKfQsDoFLQfQMw\">\r\n                        <img src=\"assets/sites/raith-waqf/social/youtube.png\">\r\n                    </a>\r\n                </li>\r\n\r\n                <li>\r\n                    <img src=\"assets/sites/raith-waqf/social/snapchat.png\" (click)=\"onCreateNew('assets/sites/raith-waqf/modals/snapchat.png')\" class=\"hand\">\r\n                </li>\r\n\r\n\r\n            </ul>\r\n            \r\n        </div>\r\n\r\n    </header>\r\n\r\n    <div style=\"width:950px;margin:0 auto\">\r\n\r\n        <img src=\"assets/sites/raith-waqf/license.png\" (click)=\"onCreateNew('assets/sites/raith-waqf/modals/license.jpg')\" class=\"hand\">\r\n        <img src=\"assets/sites/raith-waqf/mobile.png\" style=\"float:left;\">\r\n\r\n    </div>\r\n\r\n    <div id=\"body-wrapper\">\r\n\r\n        <!-- <img src=\"assets/sites/raith-waqf/license.png\" (click)=\"onCreateNew('assets/sites/khamis-harb-waqf/modals/license.jpg')\" class=\"hand\"> -->\r\n    \r\n        <!-- وقف اليتيم بمكة المكرمة -->\r\n        <div class=\"wq-elyateem-right\">\r\n    \r\n            <h4><span>تعريف الوقف</span></h4>\r\n            <P dir=\"rtl\" style=\"text-align: justify\" class='wq-elyateem-makkah-content'>\r\n                تأسس وقف اليتيم بمكة الخيري  بتاريخ 1/ 5 / 1440هـ وبتصريح من وزارة العمل والتنمية الاجتماعية برقم(229) يشرف عليه مجلس ادارة جمعية البر الخيرية بالريث والمكون من احد عشر عضو من الثقات والاكفاء ذوي الخبرة  الاستثمارية والادارية.\r\n\r\n                    <br>\r\n                <span style=\"text-align:right\">ماهو وقف اليتيم بمكة ؟</span>\r\n                <br>\r\n                الوقف عبارة عن مبنى استثماري فندقي  يقع بمكة المكرمة – داخل حدود الحرم مما يحقق مورد مالياً لكفالة ايتام الجمعية مدى الحياة والذي يكفل مستلزماتهم الغذائية والتعليمية والصحية والاجتماعية .\r\n            </P>\r\n    \r\n        </div>\r\n    \r\n        <!-- مشروعات الوقف -->\r\n        <div class=\"wq-projects-left\">\r\n    \r\n            <h4><span>تزكيات الوقف</span></h4>\r\n            <!-- <img src=\"assets/sites/mr-waqf/projects.png\" width='500'> -->\r\n\r\n            <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\" class=\"hand\">\r\n\r\n                <div class=\"carousel-inner\">\r\n    \r\n                    <div class=\"carousel-item active\">\r\n                        <img class=\"d-block w-100\" src=\"assets/sites/raith-waqf/modals/8.jpg\" (click)=\"onCreateNew('assets/sites/raith-waqf/modals/8.jpg')\" style=\"padding:0 20px\">\r\n                    </div>\r\n    \r\n                    <div class=\"carousel-item\" *ngFor=\"let image of images; let i = index\">\r\n                        <img class=\"d-block w-100\" src=\"assets/sites/raith-waqf/modals/{{i}}.jpg\" (click)=\"onCreateNew('assets/sites/raith-waqf/modals/' + i + '.jpg')\" style=\"padding:0 20px\">\r\n                    </div>\r\n    \r\n                </div>\r\n                \r\n            </div>\r\n        \r\n        </div>\r\n    \r\n        <!-- big-banner -->\r\n        <img src=\"assets/sites/raith-waqf/big-banner.png\">\r\n    \r\n        <!-- fatwa -->\r\n        <!-- <img id='fatwa' src=\"assets/sites/raith-waqf/fatwa.png\" width=\"950\"> -->\r\n    \r\n        <!-- zakatak -->\r\n        <!-- <img src=\"assets/sites/raith-waqf/zakatak.png\" class=\"image-border\" width=\"950\"> -->\r\n        \r\n        <!-- youtube -->\r\n        <!-- <div id=\"yt-wrapper\" style=\"background:#2c5307;margin-top:20px;width:950px;padding:20px 0;text-align: center\">\r\n\r\n            <h4><span style=\"background:#d5ffce\">تزكيات الوقف</span></h4>\r\n\r\n\r\n            <div class=\"youtube-left\">\r\n                \r\n                <div class=\"yt-container\">\r\n                    <div [innerHtml]=\"yt_iframe_html\"></div>\r\n                </div>\r\n        \r\n                <ul>\r\n        \r\n                    <li class=\"hand\">\r\n                        <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=r6wrNzogWno')\">\r\n                            <img src=\"https://i.ytimg.com/vi/r6wrNzogWno/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCU9RKLRNGnrcFXBdo1r87nj4o53A\" class=\"youtube-image\">\r\n                        </a>\r\n                    </li>   \r\n                    \r\n                    <li class=\"hand\">\r\n                    <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=ItNOjGe7EDs')\">\r\n                        <img src=\"https://i.ytimg.com/vi/ItNOjGe7EDs/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCfbFBsQ_Kts_Ze_Y9KhfvimhuqaQ\" class=\"youtube-image\">\r\n                    </a>\r\n                    </li>\r\n        \r\n                    <li class=\"hand\">\r\n                    <a (click)=\"getYtUrl('https://www.youtube.com/watch?v=pXysAp7bV48')\">\r\n                        <img  src=\"https://i.ytimg.com/vi/pXysAp7bV48/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAZD6DshycKSUXErQsT3xsWIpQ9MA\" class=\"youtube-image\">\r\n                    </a>\r\n                    </li>\r\n        \r\n                </ul>\r\n        \r\n            </div>\r\n\r\n        </div> -->\r\n        \r\n    </div>\r\n\r\n\r\n\r\n    <footer>\r\n\r\n        <!-- rajhi -->\r\n        <a href=\"https://www.almubasher.com.sa/portal/auth/login.do?locale=ar_SA\">\r\n            <img src=\"assets/sites/raith-waqf/rajhi.png\">\r\n        </a>\r\n\r\n        <div style=\"width:100%;background:#532507;padding:20px 0;margin-top: 20px\">\r\n        \r\n             <!-- final -->\r\n            <img src=\"assets/sites/raith-waqf/final.png\">\r\n        \r\n        </div>\r\n\r\n    </footer>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/sites/raith/raith-waqf/raith-waqf.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/sites/raith/raith-waqf/raith-waqf.component.ts ***!
  \****************************************************************/
/*! exports provided: RaithWaqfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaithWaqfComponent", function() { return RaithWaqfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal/modal.component */ "./src/app/sites/modal/modal.component.ts");





var RaithWaqfComponent = /** @class */ (function () {
    function RaithWaqfComponent(embedService, dialog, elementRef) {
        this.embedService = embedService;
        this.dialog = dialog;
        this.elementRef = elementRef;
        this.images = new Array(8);
        this.youtubeUrl = "https://www.youtube.com/watch?v=r6wrNzogWno";
    }
    RaithWaqfComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('assets/sites/raith-waqf/pattern-brown.png')";
    };
    RaithWaqfComponent.prototype.ngOnInit = function () {
        this.getYtUrl(this.youtubeUrl);
    };
    RaithWaqfComponent.prototype.getYtUrl = function (ytUrl) {
        this.yt_iframe_html = this.embedService.embed(ytUrl, {
            query: { portrait: 0, color: '333' },
            attr: { style: 'position:absolute;top:0;left:0;width:100%;height:100%' }
        });
    };
    RaithWaqfComponent.prototype.onCreateNew = function (imgName) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = imgName;
        dialogConfig.autoFocus = true;
        var dialogCallBack = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], dialogConfig);
    };
    RaithWaqfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-raith-waqf',
            template: __webpack_require__(/*! ./raith-waqf.component.html */ "./src/app/sites/raith/raith-waqf/raith-waqf.component.html"),
            styles: [__webpack_require__(/*! ./raith-waqf.component.css */ "./src/app/sites/raith/raith-waqf/raith-waqf.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__["EmbedVideoService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], RaithWaqfComponent);
    return RaithWaqfComponent;
}());



/***/ }),

/***/ "./src/app/sites/sites.module.ts":
/*!***************************************!*\
  !*** ./src/app/sites/sites.module.ts ***!
  \***************************************/
/*! exports provided: SitesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitesModule", function() { return SitesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _khamis_harb_khamis_harb_ekfalni_khamis_harb_ekfalni_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./khamis-harb/khamis-harb-ekfalni/khamis-harb-ekfalni.component */ "./src/app/sites/khamis-harb/khamis-harb-ekfalni/khamis-harb-ekfalni.component.ts");
/* harmony import */ var _marwa_marwa_ekfalni_marwa_ekfalni_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./marwa/marwa-ekfalni/marwa-ekfalni.component */ "./src/app/sites/marwa/marwa-ekfalni/marwa-ekfalni.component.ts");
/* harmony import */ var _khamis_harb_khamis_harb_ekfalni_steps_khamis_harb_ekfalni_steps_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./khamis-harb/khamis-harb-ekfalni-steps/khamis-harb-ekfalni-steps.component */ "./src/app/sites/khamis-harb/khamis-harb-ekfalni-steps/khamis-harb-ekfalni-steps.component.ts");
/* harmony import */ var _khamis_harb_khamis_harb_waqf_khamis_harb_waqf_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./khamis-harb/khamis-harb-waqf/khamis-harb-waqf.component */ "./src/app/sites/khamis-harb/khamis-harb-waqf/khamis-harb-waqf.component.ts");
/* harmony import */ var _khamis_harb_kh_waqf_kh_waqf_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./khamis-harb/kh-waqf/kh-waqf.component */ "./src/app/sites/khamis-harb/kh-waqf/kh-waqf.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/sites/modal/modal.component.ts");
/* harmony import */ var _marwa_mr_waqf_mr_waqf_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./marwa/mr-waqf/mr-waqf.component */ "./src/app/sites/marwa/mr-waqf/mr-waqf.component.ts");
/* harmony import */ var _raith_raith_waqf_raith_waqf_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./raith/raith-waqf/raith-waqf.component */ "./src/app/sites/raith/raith-waqf/raith-waqf.component.ts");
/* harmony import */ var _raith_projects_raith_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./raith-projects/raith-projects.component */ "./src/app/sites/raith-projects/raith-projects.component.ts");
/* harmony import */ var _dm_steps_dm_steps_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dm-steps/dm-steps.component */ "./src/app/sites/dm-steps/dm-steps.component.ts");
/* harmony import */ var _raith_steps_raith_steps_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./raith-steps/raith-steps.component */ "./src/app/sites/raith-steps/raith-steps.component.ts");
/* harmony import */ var _aidab_aidab_waqf_aidab_waqf_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./aidab/aidab-waqf/aidab-waqf.component */ "./src/app/sites/aidab/aidab-waqf/aidab-waqf.component.ts");
/* harmony import */ var _aidab_aidab_ekfalni_aidab_ekfalni_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./aidab/aidab-ekfalni/aidab-ekfalni.component */ "./src/app/sites/aidab/aidab-ekfalni/aidab-ekfalni.component.ts");
/* harmony import */ var _aidab_steps_aidab_steps_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./aidab-steps/aidab-steps.component */ "./src/app/sites/aidab-steps/aidab-steps.component.ts");
/* harmony import */ var _arish_arish_waqf_arish_waqf_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./arish/arish-waqf/arish-waqf.component */ "./src/app/sites/arish/arish-waqf/arish-waqf.component.ts");
/* harmony import */ var _arish_arish_projects_arish_projects_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./arish/arish-projects/arish-projects.component */ "./src/app/sites/arish/arish-projects/arish-projects.component.ts");
/* harmony import */ var _arish_arish_steps_arish_steps_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./arish/arish-steps/arish-steps.component */ "./src/app/sites/arish/arish-steps/arish-steps.component.ts");
/* harmony import */ var _gits_new_gift_new_gift_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./gits/new-gift/new-gift.component */ "./src/app/sites/gits/new-gift/new-gift.component.ts");
/* harmony import */ var _cards_choose_category_choose_category_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./cards/choose-category/choose-category.component */ "./src/app/sites/cards/choose-category/choose-category.component.ts");
/* harmony import */ var _cards_choose_card_choose_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./cards/choose-card/choose-card.component */ "./src/app/sites/cards/choose-card/choose-card.component.ts");
/* harmony import */ var _cards_save_card_save_card_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./cards/save-card/save-card.component */ "./src/app/sites/cards/save-card/save-card.component.ts");
/* harmony import */ var _cards_new_card_new_card_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./cards/new-card/new-card.component */ "./src/app/sites/cards/new-card/new-card.component.ts");





























var SitesModule = /** @class */ (function () {
    function SitesModule() {
    }
    SitesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_khamis_harb_khamis_harb_ekfalni_khamis_harb_ekfalni_component__WEBPACK_IMPORTED_MODULE_7__["KhamisHarbEkfalniComponent"], _marwa_marwa_ekfalni_marwa_ekfalni_component__WEBPACK_IMPORTED_MODULE_8__["MarwaEkfalniComponent"], _khamis_harb_khamis_harb_ekfalni_steps_khamis_harb_ekfalni_steps_component__WEBPACK_IMPORTED_MODULE_9__["KhamisHarbEkfalniStepsComponent"], _khamis_harb_khamis_harb_waqf_khamis_harb_waqf_component__WEBPACK_IMPORTED_MODULE_10__["KhamisHarbWaqfComponent"], _khamis_harb_kh_waqf_kh_waqf_component__WEBPACK_IMPORTED_MODULE_11__["KhWaqfComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["ModalComponent"], _marwa_mr_waqf_mr_waqf_component__WEBPACK_IMPORTED_MODULE_13__["MrWaqfComponent"], _raith_raith_waqf_raith_waqf_component__WEBPACK_IMPORTED_MODULE_14__["RaithWaqfComponent"], _raith_projects_raith_projects_component__WEBPACK_IMPORTED_MODULE_15__["RaithProjectsComponent"], _dm_steps_dm_steps_component__WEBPACK_IMPORTED_MODULE_16__["DmStepsComponent"], _raith_steps_raith_steps_component__WEBPACK_IMPORTED_MODULE_17__["RaithStepsComponent"], _aidab_aidab_waqf_aidab_waqf_component__WEBPACK_IMPORTED_MODULE_18__["AidabWaqfComponent"], _aidab_aidab_ekfalni_aidab_ekfalni_component__WEBPACK_IMPORTED_MODULE_19__["AidabEkfalniComponent"], _aidab_steps_aidab_steps_component__WEBPACK_IMPORTED_MODULE_20__["AidabStepsComponent"], _arish_arish_waqf_arish_waqf_component__WEBPACK_IMPORTED_MODULE_21__["ArishWaqfComponent"], _arish_arish_projects_arish_projects_component__WEBPACK_IMPORTED_MODULE_22__["ArishProjectsComponent"], _arish_arish_steps_arish_steps_component__WEBPACK_IMPORTED_MODULE_23__["ArishStepsComponent"], _gits_new_gift_new_gift_component__WEBPACK_IMPORTED_MODULE_24__["NewGiftComponent"], _cards_choose_category_choose_category_component__WEBPACK_IMPORTED_MODULE_25__["ChooseCategoryComponent"], _cards_choose_card_choose_card_component__WEBPACK_IMPORTED_MODULE_26__["ChooseCardComponent"], _cards_save_card_save_card_component__WEBPACK_IMPORTED_MODULE_27__["SaveCardComponent"], _cards_new_card_new_card_component__WEBPACK_IMPORTED_MODULE_28__["NewCardComponent"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_embed_video__WEBPACK_IMPORTED_MODULE_3__["EmbedVideo"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["ModalComponent"]]
        })
    ], SitesModule);
    return SitesModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mmkk2\OneDrive\سطح المكتب\alber-FRONTEND\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
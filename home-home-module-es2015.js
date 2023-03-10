(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--========== HEADER ==========-->\n<div class=\"l-header\" id=\"header\">\n  <!--========== NAV ==========-->\n  <nav class=\"nav bd-container\">\n    <a href=\"#\" class=\"nav__logo\">Sheky</a>\n\n    <div class=\"nav__menu\" id=\"nav-menu\">\n      <ul class=\"nav__list\">\n        <li class=\"nav__item\"><a (click)=\"scrollToLabel('home')\" class=\"nav__link active-link\">Sheky</a></li>\n        <li class=\"nav__item\"><a (click)=\"scrollToLabel('share')\" class=\"nav__link\">Saludo</a></li>\n        <li class=\"nav__item\"><a (click)=\"scrollToLabel('decoration')\" class=\"nav__link\">Regalos</a></li>\n        <li class=\"nav__item\"><a (click)=\"scrollToLabel('accessory')\" class=\"nav__link\">Reservados</a></li>\n\n        <li><i class='bx bx-toggle-left change-theme' id=\"theme-button\"></i></li>\n      </ul>\n    </div>\n\n    <div class=\"nav__toggle\" id=\"nav-toggle\">\n      <i class='bx bx-grid-alt'></i>\n    </div>\n  </nav>\n</div>\n\n\n<ion-content class=\"l-main\" [scrollEvents]=\"true\" #contentScroll appListAnimate>\n\n  <!--========== HOME ==========-->\n  <ion-card lines=\"none\" class=\"home animated flip infinite\" id=\"home\" name=\"home\">\n    <div class=\"home__container bd-container bd-grid\">\n      <div style=\"    text-align: center;margin-top: 15px;\">\n        <img src=\"assets/img/home.jpeg\" alt=\"\" style=\"border-radius: 8px;\">\n      </div>\n\n      <!--   <div class=\"home__data\">\n        <h1 class=\"home__title\">Hola me llamo Sheky</h1>\n        <p class=\"home__description\">In these end of the year holidays send a gift to your loved one and share the\n          happiness at Christmas.</p>\n        <a href=\"#\" class=\"button\">Get Started</a>\n      </div> -->\n    </div>\n  </ion-card>\n\n  <!--========== SHARE ==========-->\n  <ion-card class=\"share animated section bd-container \" id=\"share\">\n    <div class=\"share__container bd-grid\">\n      <div class=\"share__data\">\n        <h2 class=\"section-title-center\">Bienvenido a mi <br> Baby Shower</h2>\n\n        <p class=\"share__description\">\n          Hola mi nombre es Shekinah y quería invitarte a compartir conmigo este día especial.</p>\n\n        <p class=\"share__description\">\n          Lo más importante es tu presencia pero si quieres darme un presente puedes revisar mi lista de regalos que armamos junto a mis papis 🎁</p>\n\n        <a href=\"javascript:void(0)\" class=\"button\" (click)=\"scrollToLabel('decoration')\">Ver Lista</a>\n      </div>\n\n      <div class=\"share__img\">\n        <img src=\"../../assets/img/fotomain.jpeg\" alt=\"\" style=\"border-radius: 8px;\">\n      </div>\n    </div>\n  </ion-card>\n\n\n  <!--========== DECORATION ==========-->\n  <ion-card class=\"decoration  animated section bd-container\" id=\"decoration\"\n    style=\"opacity: 1 !important;transform: translate3d(0, 0, 0) !important\">\n    <h2 class=\"section-title\">Regalos de Sheky</h2>\n    <p class=\"share__description\" style=\"max-width: 600px;\n    text-align: center;\n    margin: auto;font-size: 14px\">Para escoger tu regalo solo dale CLIC, luego reservalo (para que nadie más lo compre)\n      y finalmete ve a comprarlo. Puede ser solo de tu parte o juntarte con alguien para hacer la compra.</p>\n\n    <div style=\"border-radius: 20px;\n    max-width: 600px;\n    border: 2px solid #7c7c7c;\n    padding: 5px 10px;\n    font-size: 15px;\n    margin: auto;\n    text-align: center;\n    margin-top: 25px;margin-bottom: 20px;position: relative;\">\n      <ion-icon name=\"documents-outline\" style=\"right: 0;\n    position: absolute;\n    font-size: 25px;\n    padding: 5px;\n    color: #a1a1a1;cursor: pointer;\" (click)=\"copyText('Río volga 260 la Molina')\">\n      </ion-icon>\n\n      <p class=\"section-title\" style=\"font-size: 16px;margin-bottom: 10px;\"><b>DATOS DE ENVÍO🏠</b></p>\n      <p style=\"color: rgb(27, 27, 27);\"><b style=\"color: rgb(27, 27, 27);\">Dirección:</b> Río volga 260 la Molina </p>\n      <p style=\"color: rgb(27, 27, 27);\"><b style=\"color: rgb(27, 27, 27);\">Nombre:</b> Luciana Quiroz</p>\n      <p  style=\"color: rgb(27, 27, 27);\"><b style=\"color: rgb(27, 27, 27);\">Telefono:</b> 960899652</p>\n    </div>\n\n\n    <div class=\"decoration__container bd-grid regalos\" *ngFor=\"let p of listA;index as i\" (click)=\"reservar(p)\"\n      style=\"margin-bottom: 20px;cursor: pointer;\">\n\n      <div class=\"decoration__data ct\">\n\n        <img [src]=\"p.image.secure_url\" *ngIf=\"((i+2)%2==0)\" style=\"object-fit: cover;\">\n        <div class=\"detail\" [ngClass]=\"((i+2)%2!=0)?'textLeft':null\">\n          <p class=\"pd1\">{{p.tienda}}</p>\n          <p class=\"pd2\">{{p.nombre}}</p>\n          <p>{{p.desc}}</p>\n          <hr style=\"border-top: 2px solid #b7b7b7;\n          border-radius: 5px;\">\n          <p class=\"price\">PEN <span class=\"pnum\">{{p.pen}}~</span></p>\n          <p class=\"price\">USD <span class=\"pnum\">{{p.pen/3.85 | number: '1.0-0' }}~</span></p>\n        </div>\n        <img [src]=\"p.image.secure_url\" *ngIf=\"((i+2)%2!=0)\" style=\"object-fit: cover;\">\n        \n      </div>\n\n      <!--   <div class=\"decoration__data ct\">\n       \n        <div class=\"detail\" style=\"text-align: left;\">\n          <p class=\"pd1\">[Caraz]</p>\n          <p class=\"pd2\">Cama kids Play Mat</p>\n          <p>Multi - funcional</p>\n          <hr style=\"border-top: 2px solid #b7b7b7;\n          border-radius: 5px;\">\n          <p class=\"price\">PEN <span class=\"pnum\">96,000~</span></p>\n          <p class=\"price\">USD <span class=\"pnum\">89~</span></p>\n        </div>\n\n        <img src=\"https://www.dhresource.com/0x0/f2/albu/g10/M01/F7/89/rBVaVlwSQCuAR3sOAAJMZSzRdIM145.jpg/portable-baby-bassinet-for-bed-baby-lounger.jpg\" >\n      </div> -->\n\n      <!--  <div class=\"decoration__data\">\n        <img src=\"assets/img/decoration1.png\" alt=\"\" class=\"decoration__img\">\n        <h3 class=\"decoration__title\">Christmas Bells</h3>\n        <a href=\"#\" class=\"button button-link\">Go Shopping</a>\n      </div>\n\n      <div class=\"decoration__data\">\n        <img src=\"assets/img/decoration2.png\" alt=\"\" class=\"decoration__img\">\n        <h3 class=\"decoration__title\">Christmas Candies</h3>\n        <a href=\"#\" class=\"button button-link\">Go Shopping</a>\n      </div>\n\n      <div class=\"decoration__data\">\n        <img src=\"assets/img/decoration3.png\" alt=\"\" class=\"decoration__img\">\n        <h3 class=\"decoration__title\">Christmas Trees</h3>\n        <a href=\"#\" class=\"button button-link\">Go Shopping</a>\n      </div> -->\n    </div>\n  </ion-card>\n\n  <!--========== ACCESSORIES ==========-->\n  <ion-card class=\"accessory animated section bd-container\" id=\"accessory\">\n    <h2 class=\"section-title\">Regalos <br> Reservados</h2>\n\n    <div class=\"accessory__container bd-grid\">\n\n      <div class=\"accessory__content\" *ngFor=\"let p of listB\"  (click)=\"reservar(p)\">\n        <img [src]=\"p.image.secure_url\" alt=\"\" class=\"accessory__img\">\n        <h3 class=\"accessory__title\">{{p.nombre}}</h3>\n        <span class=\"accessory__category\">{{p.tienda}}</span>\n        <span class=\"accessory__preci\">{{p.usuario}}<!-- (Reservado) --></span>\n        <a href=\"javascript:void(0)\" class=\"button accessory__button\"><i class='bx bx-heart'></i></a>\n      </div>\n      <!--    <div class=\"accessory__content\">\n        <img src=\"assets/img/accessory1.png\" alt=\"\" class=\"accessory__img\">\n        <h3 class=\"accessory__title\">Snow Globe</h3>\n        <span class=\"accessory__category\">Accessory</span>\n        <span class=\"accessory__preci\">$9.45</span>\n        <a href=\"#\" class=\"button accessory__button\"><i class='bx bx-heart'></i></a>\n      </div>\n\n      <div class=\"accessory__content\">\n        <img src=\"assets/img/accessory2.png\" alt=\"\" class=\"accessory__img\">\n        <h3 class=\"accessory__title\">Candy</h3>\n        <span class=\"accessory__category\">Accessory</span>\n        <span class=\"accessory__preci\">$2.52</span>\n        <a href=\"#\" class=\"button accessory__button\"><i class='bx bx-heart'></i></a>\n      </div>\n\n      <div class=\"accessory__content\">\n        <img src=\"assets/img/accessory3.png\" alt=\"\" class=\"accessory__img\">\n        <h3 class=\"accessory__title\">Angel</h3>\n        <span class=\"accessory__category\">Accessory</span>\n        <span class=\"accessory__preci\">$13.15</span>\n        <a href=\"#\" class=\"button accessory__button\"><i class='bx bx-heart'></i></a>\n      </div>\n\n      <div class=\"accessory__content\">\n        <img src=\"assets/img/accessory4.png\" alt=\"\" class=\"accessory__img\">\n        <h3 class=\"accessory__title\">Sphere</h3>\n        <span class=\"accessory__category\">Accessory</span>\n        <span class=\"accessory__preci\">$4.25</span>\n        <a href=\"#\" class=\"button accessory__button\"><i class='bx bx-heart'></i></a>\n      </div>\n\n      <div class=\"accessory__content\">\n        <img src=\"assets/img/accessory5.png\" alt=\"\" class=\"accessory__img\">\n        <h3 class=\"accessory__title\">Surprise gift</h3>\n        <span class=\"accessory__category\">Accessory</span>\n        <span class=\"accessory__preci\">$7.99</span>\n        <a href=\"#\" class=\"button accessory__button\"><i class='bx bx-heart'></i></a>\n      </div> -->\n    </div>\n  </ion-card>\n\n  <!--========== SEND GIFT ==========-->\n  <ion-card class=\"send  animated section\">\n    <div class=\"send__container bd-container bd-grid\">\n      <div class=\"send__content\">\n        <h2 class=\"section-title-center send__title\">Gracias por tu regalo</h2>\n        <p class=\"send__description\">Te espero el 20 de marzo en mi cumpleaños para compartir este día conmigo , te dejo la invitación</p>\n        <!--   <form action=\"\">\n          <div class=\"send__direction\">\n            <input type=\"text\" placeholder=\"House address\" class=\"send__input\">\n            <a href=\"#\" class=\"button\">Send</a>\n          </div>\n        </form> -->\n      </div>\n\n      <div class=\"send__img\">\n        <img src=\"assets/img/send.png\" alt=\"\">\n      </div>\n    </div>\n  </ion-card>\n\n  <footer class=\"footer section\">\n    <div class=\"footer__container bd-container bd-grid\">\n      <!--  <div class=\"footer__content\">\n        <h3 class=\"footer__title\">\n          <a href=\"#\" class=\"footer__logo\">Christmas Gift</a>\n        </h3>\n        <p class=\"footer__description\">I sent a gift and it gives <br> happiness</p>\n      </div>\n\n      <div class=\"footer__content\">\n        <h3 class=\"footer__title\">Our Services</h3>\n        <ul>\n          <li><a href=\"#\" class=\"footer__link\">Pricing </a></li>\n          <li><a href=\"#\" class=\"footer__link\">Discounts</a></li>\n          <li><a href=\"#\" class=\"footer__link\">Shipping mode</a></li>\n        </ul>\n      </div> -->\n\n      <div class=\"footer__content\">\n        <h3 class=\"footer__title\">Con amor🖤</h3>\n        <ul>\n          <li><a href=\"#\" class=\"footer__link\">Hecho por mis papis Luciana y Tadeo</a></li>\n        </ul>\n      </div>\n\n      <!--   <div class=\"footer__content\">\n        <h3 class=\"footer__title\">Social</h3>\n        <a href=\"#\" class=\"footer__social\"><i class='bx bxl-facebook-circle '></i></a>\n        <a href=\"#\" class=\"footer__social\"><i class='bx bxl-twitter'></i></a>\n        <a href=\"#\" class=\"footer__social\"><i class='bx bxl-instagram-alt'></i></a>\n      </div> -->\n    </div>\n\n    <p class=\"footer__copy\">&#169; 2023 Basti. All right reserved</p>\n  </footer>\n</ion-content>");

/***/ }),

/***/ "./src/app/directives/list-animate.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/directives/list-animate.directive.ts ***!
  \******************************************************/
/*! exports provided: ListAnimateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAnimateDirective", function() { return ListAnimateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ListAnimateDirective = class ListAnimateDirective {
    constructor(renderer) {
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        this.observerTop = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    this.renderer.addClass(entry.target, 'class_animateTop');
                }
                else {
                    this.renderer.removeClass(entry.target, 'class_animateTop');
                }
            });
        }, { threshold: 0.2 });
        this.items.forEach(item => {
            this.observerTop.observe(item.nativeElement);
        });
        /*  this.observerTop1= new IntersectionObserver((entries: any) => {
           console.log('entries', entries);
           console.log('entries.target', entries[0].target.classList[2]);
           let direct = entries[0].target.classList[2]
           entries.forEach((entry: any) => {
     
             if (!entry.isIntersecting) {
               this.renderer.addClass(entry.target, 'class_' + direct);
             } else {
               this.renderer.removeClass(entry.target, 'class_' + direct);
             }
           })
         }, { threshold: 0.5 });
     
     
         this.sectionAnimate1.forEach(item => {
           this.observerTop1.observe(item.nativeElement);
         });
        */
    }
};
ListAnimateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
ListAnimateDirective.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] }]
};
ListAnimateDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appListAnimate]'
    })
], ListAnimateDirective);



/***/ }),

/***/ "./src/app/directives/shared-directives.module.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/shared-directives.module.ts ***!
  \********************************************************/
/*! exports provided: SharedDirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDirectivesModule", function() { return SharedDirectivesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _list_animate_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-animate.directive */ "./src/app/directives/list-animate.directive.ts");




let SharedDirectivesModule = class SharedDirectivesModule {
};
SharedDirectivesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _list_animate_directive__WEBPACK_IMPORTED_MODULE_3__["ListAnimateDirective"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _list_animate_directive__WEBPACK_IMPORTED_MODULE_3__["ListAnimateDirective"]
        ]
    })
], SharedDirectivesModule);



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/shared-directives.module */ "./src/app/directives/shared-directives.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_7__["SharedDirectivesModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*========== CLASS CSS ==========*/\n.section {\n  padding: 2rem 0 1rem;\n}\nion-card {\n  --background: transparent;\n  box-shadow: none;\n}\n.section-title, .section-title-center {\n  font-size: var(--h2-font-size);\n  color: var(--title-color);\n  text-align: center;\n  margin-bottom: var(--mb-3);\n}\n/*========== LAYOUT ==========*/\n.l-main {\n  --margin-top: var(--header-height);\n  overflow: hidden;\n  --background: var(--body-color);\n  --color:var(--text-color);\n  font-family: var(--body-font);\n  font-size: var(--normal-font-size);\n}\n.bd-container {\n  max-width: 968px;\n  width: calc(100% - 3rem);\n  margin-left: var(--mb-3);\n  margin-right: var(--mb-3);\n}\n.bd-grid {\n  display: grid;\n  gap: 1.5rem;\n}\n.l-header {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: var(--z-fixed);\n  background-color: var(--body-color);\n}\n/*========== NAV ==========*/\n.nav {\n  height: var(--header-height);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media screen and (max-width: 768px) {\n  .nav__menu {\n    position: fixed;\n    top: -100%;\n    /* top: var(--header-height); */\n    left: 0;\n    right: 0;\n    width: 90%;\n    margin: 0 auto;\n    padding: 2.5rem 0 0;\n    text-align: center;\n    background-color: var(--body-color);\n    transition: 0.4s;\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);\n    border-radius: 2rem;\n    z-index: var(--z-fixed);\n  }\n}\n.nav__item {\n  margin-bottom: var(--mb-3);\n}\n.nav__link, .nav__logo, .nav__toggle {\n  color: var(--title-color);\n  font-weight: var(--font-semi-bold);\n}\n.nav__logo:hover {\n  color: var(--first-color);\n}\n.nav__link {\n  transition: 0.3s;\n}\n.nav__link:hover {\n  color: var(--first-color);\n}\n.nav__toggle {\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n/* Show menu */\n.show-menu {\n  top: calc(var(--header-height) + 1rem);\n}\n/* Active menu link */\n.active-link {\n  position: relative;\n}\n.active-link::before {\n  content: \"\";\n  position: absolute;\n  bottom: -0.75rem;\n  left: 45%;\n  width: 5px;\n  height: 5px;\n  background-color: var(--title-color);\n  border-radius: 50%;\n}\n/* Scroll top */\n.scrolltop {\n  position: fixed;\n  right: 1rem;\n  /*  bottom: -20%; */\n  bottom: 1.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.3rem;\n  background: rgba(218, 37, 53, 0.5);\n  border-radius: 0.4rem;\n  z-index: var(--z-tooltip);\n  transition: 0.4s;\n  visibility: hidden;\n}\n.scrolltop:hover {\n  background-color: var(--first-color);\n}\n.scrolltop__icon {\n  font-size: 1.5rem;\n  color: var(--body-color);\n}\n.show-scroll {\n  visibility: visible;\n  bottom: 1.5rem;\n}\n/*========== HOME ==========*/\n.home {\n  margin-top: var(--header-height);\n}\n.home__container {\n  row-gap: 0.5rem;\n}\n.home__img {\n  width: 280px;\n  justify-self: center;\n}\n.home__title {\n  font-size: var(--biggest-font-size);\n  font-weight: var(--font-bold);\n  margin-bottom: var(--mb-2);\n}\n.home__description {\n  margin-bottom: var(--mb-3);\n}\n/*========== BUTTONS ==========*/\n.button {\n  display: inline-block;\n  background-color: var(--first-color);\n  color: #fff;\n  padding: 1rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: var(--font-semi-bold);\n  transition: 0.3s;\n}\n.button:hover {\n  background-color: var(--first-color-alt);\n}\n.button-link {\n  background: none;\n  padding: 0;\n  color: var(--first-color);\n}\n.button-link:hover {\n  background-color: transparent;\n  color: var(--first-color-alt);\n}\n/*========== SHARE ==========*/\n.share__data {\n  text-align: center;\n}\n.share__description {\n  margin-bottom: var(--mb-2);\n}\n.share__img {\n  width: 280px;\n  justify-self: center;\n}\n/*========== DECORATION ==========*/\n.decoration__container {\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n}\n/* .decoration__data{\n  text-align: center;\n  padding: 1rem 1rem 2rem;\n  background-color: var(--container-color);\n  box-shadow: 0 2px 6px rgba(65,11,16,.15);\n  border-radius: 1rem;\n} */\n.decoration__data {\n  padding: 0rem 0rem 2rem;\n  border-radius: 1rem;\n}\n.regalos .ct {\n  display: flex;\n  align-items: stretch;\n  flex-wrap: nowrap;\n  justify-content: center;\n  padding: 20px 0;\n}\n.regalos .ct img {\n  border-radius: 100%;\n  height: 160px;\n  width: 160px;\n}\n.regalos .ct .detail {\n  text-align: right;\n  width: 50%;\n  place-self: center;\n}\n.regalos .ct .detail .pd1 {\n  font-weight: 700;\n  font-size: 15px;\n}\n.regalos .ct .detail .pd2 {\n  color: var(--title-color);\n  font-weight: 700;\n  font-size: 17px;\n}\n.regalos .ct .detail .price {\n  font-weight: 600;\n}\n.regalos .ct .detail .price .pnum {\n  font-size: 18px;\n  color: #877363;\n  font-weight: 700;\n}\n.textLeft {\n  text-align: left !important;\n}\n.decoration__data:hover {\n  /* box-shadow: 0 3px 12px rgba(65,11,16,.15); */\n}\n.decoration__img {\n  width: 180px;\n}\n.decoration__title {\n  font-size: var(--h3-font-size);\n  margin-bottom: var(--mb-1);\n}\n/*========== ACCESSORIES ==========*/\n.accessory__container {\n  grid-template-columns: repeat(2, 1fr);\n  padding-bottom: 2rem;\n}\n.accessory__content {\n  position: relative;\n  display: grid;\n  padding: 0.25rem 0.75rem 0.75rem;\n  background-color: var(--container-color);\n  box-shadow: 0 2px 6px rgba(65, 11, 16, 0.15);\n  border-radius: 1rem;\n}\n.accessory__content:hover {\n  box-shadow: 0 3px 12px rgba(65, 11, 16, 0.15);\n}\n.accessory__img {\n  width: 110px;\n  max-height: 140px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n  justify-self: center;\n  margin-bottom: 0.25rem;\n}\n.accessory__title, .accessory__category {\n  text-align: center;\n}\n.accessory__title {\n  font-size: var(--normal-font-size);\n}\n.accessory__category {\n  font-size: var(--small-font-size);\n  margin-bottom: var(--mb-1);\n  color: var(--text-color-light);\n}\n.accessory__preci {\n  font-weight: var(--font-semi-bold);\n  color: var(--title-color);\n}\n.accessory__button {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  font-size: 1.25rem;\n  padding: 0.5rem 0.625rem;\n  border-radius: 1rem 0 1rem 0;\n}\n/*========== SEND GIFT ==========*/\n.send {\n  background-color: var(--first-color-send);\n}\n.send__title, .send__description {\n  color: #fff;\n}\n.send__description {\n  text-align: center;\n  margin-bottom: var(--mb-4);\n}\n.send__direction {\n  display: flex;\n  justify-content: space-between;\n  background-color: #fff;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n}\n.send__input {\n  width: 70%;\n  outline: none;\n  border: none;\n  font-size: var(--normal-font-size);\n  font-family: var(--body-font);\n}\n.send__input::-moz-placeholder {\n  font-family: var(--body-font);\n}\n.send__input::placeholder {\n  font-family: var(--body-font);\n}\n.send__img {\n  width: 280px;\n  justify-self: center;\n}\n/*========== FOOTER ==========*/\n.footer__container {\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n}\n.footer__logo {\n  color: var(--title-color);\n}\n.footer__title {\n  margin-bottom: var(--mb-2);\n}\n.footer__logo, .footer__title {\n  font-size: var(--h3-font-size);\n}\n.footer__link {\n  display: inline-block;\n  margin-bottom: 0.75rem;\n  color: var(--text-color);\n}\n.footer__link:hover {\n  color: var(--first-color);\n}\n.footer__social {\n  font-size: 1.5rem;\n  color: var(--title-color);\n  margin-right: var(--mb-3);\n}\n.footer__social:hover {\n  color: var(--first-color);\n}\n.footer__copy {\n  text-align: center;\n  font-size: var(--small-font-size);\n  color: var(--text-color-light);\n  margin-top: 4rem;\n}\n/*========== MEDIA QUERIES ==========*/\n/* For full-screen images on small screens */\n@media screen and (max-width: 359px) {\n  .home__img,\n.share__img,\n.send__img {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 576px) {\n  /*  .home__container, */\n  .share__container,\n.send__container {\n    grid-template-columns: repeat(2, 1fr);\n    align-items: center;\n  }\n\n  .home__container {\n    padding: 5rem 0 0;\n  }\n\n  .home__img {\n    order: 1;\n  }\n\n  .section-title-center,\n.share__data,\n.send__description {\n    text-align: initial;\n  }\n\n  .home__img,\n.share__img,\n.send__img {\n    width: 100%;\n  }\n\n  .share__img {\n    order: -1;\n  }\n}\n@media screen and (min-width: 768px) {\n  body {\n    margin: 0;\n  }\n\n  .section {\n    padding-top: 7rem;\n  }\n\n  .nav {\n    height: calc(var(--header-height) + 1.5rem);\n  }\n\n  .nav__list {\n    display: flex;\n    align-items: center;\n  }\n\n  .nav__item {\n    margin-left: var(--mb-5);\n    margin-bottom: 0;\n  }\n\n  .nav__toggle {\n    display: none;\n  }\n\n  .change-theme {\n    position: initial;\n    margin-left: var(--mb-4);\n  }\n\n  .home__container {\n    padding: 7rem 2rem 0;\n  }\n\n  .share__container {\n    padding: 0 2rem;\n  }\n\n  .accessory__container {\n    grid-template-columns: repeat(3, 224px);\n    justify-content: center;\n  }\n\n  .accessory__content {\n    padding: 0.5rem 1.5rem 1.5rem;\n  }\n\n  .accessory__img {\n    width: 120px;\n    margin-bottom: var(--mb-1);\n  }\n\n  .accessory__title, .accessory__category {\n    text-align: initial;\n  }\n\n  .accessory__button {\n    padding: 0.75rem;\n  }\n\n  .send {\n    background: none;\n  }\n\n  .send__container {\n    background-color: var(--first-color-send);\n    padding: 2rem;\n    border-radius: 1.5rem;\n  }\n}\n@media screen and (min-width: 968px) {\n  .bd-container {\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .home__img,\n.share__img,\n.send__img {\n    width: 469px;\n  }\n\n  .home__container,\n.share__container,\n.send__container {\n    -moz-column-gap: 5rem;\n         column-gap: 5rem;\n  }\n}\n.animated {\n  transition: 0.5s ease-in-out;\n}\n.class_animateTop {\n  opacity: 0;\n  transform: translate3d(-20px, 0, 0);\n}\n.class_animateLeft {\n  transform: translate3d(0, -10px, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxrQ0FBQTtBQUNBO0VBQ0Usb0JBQUE7QUFBRjtBQUdBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQUFGO0FBR0EsK0JBQUE7QUFDQTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtBQUFGO0FBR0E7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUFGO0FBR0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQ0FBQTtBQUFGO0FBR0EsNEJBQUE7QUFDQTtFQUNFLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUdBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsVUFBQTtJQUNBLCtCQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQ0FBQTtJQUNBLGdCQUFBO0lBQ0Esc0NBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0UsMEJBQUE7QUFERjtBQUlBO0VBQ0UseUJBQUE7RUFDQSxrQ0FBQTtBQURGO0FBSUE7RUFDRSx5QkFBQTtBQURGO0FBSUE7RUFDRSxnQkFBQTtBQURGO0FBSUE7RUFDRSx5QkFBQTtBQURGO0FBSUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFERjtBQUlBLGNBQUE7QUFDQTtFQUNFLHNDQUFBO0FBREY7QUFJQSxxQkFBQTtBQUNBO0VBQ0Usa0JBQUE7QUFERjtBQUlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBREY7QUFLQSxlQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNELG1CQUFBO0VBQ0MsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFGRjtBQUtBO0VBQ0Usb0NBQUE7QUFGRjtBQUtBO0VBQ0UsaUJBQUE7RUFDQSx3QkFBQTtBQUZGO0FBS0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFGRjtBQUtBLDZCQUFBO0FBRUE7RUFDRSxnQ0FBQTtBQUhGO0FBTUE7RUFDRSxlQUFBO0FBSEY7QUFNQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQUhGO0FBTUE7RUFDRSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7QUFIRjtBQU1BO0VBQ0UsMEJBQUE7QUFIRjtBQU9BLGdDQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FBSkY7QUFPQTtFQUNFLHdDQUFBO0FBSkY7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBSkY7QUFPQTtFQUNFLDZCQUFBO0VBQ0EsNkJBQUE7QUFKRjtBQU9BLDhCQUFBO0FBQ0E7RUFDRSxrQkFBQTtBQUpGO0FBT0E7RUFDRSwwQkFBQTtBQUpGO0FBT0E7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUFKRjtBQU9BLG1DQUFBO0FBQ0E7RUFDRSwyREFBQTtBQUpGO0FBT0E7Ozs7OztHQUFBO0FBUUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0FBTEY7QUFTRTtFQUNFLGFBQUE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBTk47QUFRTTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFOUjtBQVNNO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFQUjtBQVNRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBUFY7QUFVUTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUlY7QUFXUTtFQUVFLGdCQUFBO0FBVlY7QUFXVTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFUWjtBQWlCQTtFQUNFLDJCQUFBO0FBZEY7QUFpQkE7RUFDRSwrQ0FBQTtBQWRGO0FBaUJBO0VBQ0UsWUFBQTtBQWRGO0FBaUJBO0VBQ0UsOEJBQUE7RUFDQSwwQkFBQTtBQWRGO0FBaUJBLG9DQUFBO0FBQ0E7RUFDRSxxQ0FBQTtFQUNBLG9CQUFBO0FBZEY7QUFpQkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQWRGO0FBaUJBO0VBQ0UsNkNBQUE7QUFkRjtBQWlCQTtFQUNFLFlBQUE7RUFFQSxpQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLG9CQUFBO0VBQ0Esc0JBQUE7QUFoQkY7QUFtQkE7RUFDRSxrQkFBQTtBQWhCRjtBQW1CQTtFQUNFLGtDQUFBO0FBaEJGO0FBbUJBO0VBQ0UsaUNBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0FBaEJGO0FBbUJBO0VBQ0Usa0NBQUE7RUFDQSx5QkFBQTtBQWhCRjtBQW1CQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FBaEJGO0FBb0JBLGtDQUFBO0FBQ0E7RUFDRSx5Q0FBQTtBQWpCRjtBQW9CQTtFQUNFLFdBQUE7QUFqQkY7QUFvQkE7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0FBakJGO0FBb0JBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFqQkY7QUFvQkE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0FBakJGO0FBb0JBO0VBQ0UsNkJBQUE7QUFqQkY7QUFnQkE7RUFDRSw2QkFBQTtBQWpCRjtBQW9CQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQWpCRjtBQXFCQSwrQkFBQTtBQUNBO0VBQ0UsMkRBQUE7QUFsQkY7QUFxQkE7RUFDRSx5QkFBQTtBQWxCRjtBQXFCQTtFQUNFLDBCQUFBO0FBbEJGO0FBcUJBO0VBQ0UsOEJBQUE7QUFsQkY7QUFxQkE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUFsQkY7QUFxQkE7RUFDRSx5QkFBQTtBQWxCRjtBQXFCQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQWxCRjtBQXFCQTtFQUNFLHlCQUFBO0FBbEJGO0FBcUJBO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFsQkY7QUFzQkEsc0NBQUE7QUFFQSw0Q0FBQTtBQUNBO0VBQ0U7OztJQUdFLFdBQUE7RUFwQkY7QUFDRjtBQXVCQTtFQUNDLHVCQUFBO0VBQ0M7O0lBRUUscUNBQUE7SUFDQSxtQkFBQTtFQXJCRjs7RUF3QkE7SUFDRSxpQkFBQTtFQXJCRjs7RUF3QkE7SUFDRSxRQUFBO0VBckJGOztFQXdCQTs7O0lBR0UsbUJBQUE7RUFyQkY7O0VBd0JBOzs7SUFHRSxXQUFBO0VBckJGOztFQXdCQTtJQUNFLFNBQUE7RUFyQkY7QUFDRjtBQXdCQTtFQUNFO0lBQ0UsU0FBQTtFQXRCRjs7RUF5QkE7SUFDRSxpQkFBQTtFQXRCRjs7RUF5QkE7SUFDRSwyQ0FBQTtFQXRCRjs7RUF5QkE7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7RUF0QkY7O0VBeUJBO0lBQ0Usd0JBQUE7SUFDQSxnQkFBQTtFQXRCRjs7RUF5QkE7SUFDRSxhQUFBO0VBdEJGOztFQXlCQTtJQUNFLGlCQUFBO0lBQ0Esd0JBQUE7RUF0QkY7O0VBeUJBO0lBQ0Usb0JBQUE7RUF0QkY7O0VBeUJBO0lBQ0UsZUFBQTtFQXRCRjs7RUF5QkE7SUFDRSx1Q0FBQTtJQUNBLHVCQUFBO0VBdEJGOztFQXlCQTtJQUNFLDZCQUFBO0VBdEJGOztFQXlCQTtJQUNFLFlBQUE7SUFDQSwwQkFBQTtFQXRCRjs7RUF5QkE7SUFDRSxtQkFBQTtFQXRCRjs7RUF5QkE7SUFDRSxnQkFBQTtFQXRCRjs7RUF5QkE7SUFDRSxnQkFBQTtFQXRCRjs7RUF5QkE7SUFDRSx5Q0FBQTtJQUNBLGFBQUE7SUFDQSxxQkFBQTtFQXRCRjtBQUNGO0FBeUJBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0VBdkJGOztFQTBCQTs7O0lBR0UsWUFBQTtFQXZCRjs7RUEwQkE7OztJQUdFLHFCQUFBO1NBQUEsZ0JBQUE7RUF2QkY7QUFDRjtBQTJCQTtFQUNFLDRCQUFBO0FBekJGO0FBNEJBO0VBQ0UsVUFBQTtFQUNBLG1DQUFBO0FBekJGO0FBNEJBO0VBQ0UsbUNBQUE7QUF6QkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT0gQ0xBU1MgQ1NTID09PT09PT09PT0qL1xuLnNlY3Rpb257XG4gIHBhZGRpbmc6IDJyZW0gMCAxcmVtO1xufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5zZWN0aW9uLXRpdGxlLCAuc2VjdGlvbi10aXRsZS1jZW50ZXJ7XG4gIGZvbnQtc2l6ZTogdmFyKC0taDItZm9udC1zaXplKTtcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYi0zKTtcbn1cblxuLyo9PT09PT09PT09IExBWU9VVCA9PT09PT09PT09Ki9cbi5sLW1haW57XG4gIC0tbWFyZ2luLXRvcDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYm9keS1jb2xvcik7XG4gIC0tY29sb3I6dmFyKC0tdGV4dC1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnQpO1xuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xufVxuXG4uYmQtY29udGFpbmVye1xuICBtYXgtd2lkdGg6IDk2OHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gM3JlbSk7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYi0zKTtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYi0zKTtcbn1cblxuLmJkLWdyaWR7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMS41cmVtO1xufVxuXG4ubC1oZWFkZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogdmFyKC0tei1maXhlZCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xufVxuXG4vKj09PT09PT09PT0gTkFWID09PT09PT09PT0qL1xuLm5hdntcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XG4gIC5uYXZfX21lbnV7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogLTEwMCU7XG4gICAgLyogdG9wOiB2YXIoLS1oZWFkZXItaGVpZ2h0KTsgKi9cbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMi41cmVtIDAgMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLDAsMCwuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICB6LWluZGV4OiB2YXIoLS16LWZpeGVkKTtcbiAgfVxufVxuXG4ubmF2X19pdGVte1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYi0zKTtcbn1cblxuLm5hdl9fbGluaywgLm5hdl9fbG9nbywgLm5hdl9fdG9nZ2xle1xuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC1zZW1pLWJvbGQpO1xufVxuXG4ubmF2X19sb2dvOmhvdmVye1xuICBjb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xufVxuXG4ubmF2X19saW5re1xuICB0cmFuc2l0aW9uOiAuM3M7XG59XG5cbi5uYXZfX2xpbms6aG92ZXJ7XG4gIGNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XG59XG5cbi5uYXZfX3RvZ2dsZXtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogU2hvdyBtZW51ICovXG4uc2hvdy1tZW51e1xuICB0b3A6IGNhbGModmFyKC0taGVhZGVyLWhlaWdodCkgKyAxcmVtKTtcbn1cblxuLyogQWN0aXZlIG1lbnUgbGluayAqL1xuLmFjdGl2ZS1saW5re1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hY3RpdmUtbGluazo6YmVmb3Jle1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0uNzVyZW07XG4gIGxlZnQ6IDQ1JTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5cbi8qIFNjcm9sbCB0b3AgKi9cbi5zY3JvbGx0b3B7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDFyZW07XG4gLyogIGJvdHRvbTogLTIwJTsgKi9cbiAgYm90dG9tOiAxLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAuM3JlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTgsMzcsNTMsLjUpO1xuICBib3JkZXItcmFkaXVzOiAuNHJlbTtcbiAgei1pbmRleDogdmFyKC0tei10b29sdGlwKTtcbiAgdHJhbnNpdGlvbjogLjRzO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5zY3JvbGx0b3A6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcbn1cblxuLnNjcm9sbHRvcF9faWNvbntcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcbn1cblxuLnNob3ctc2Nyb2xse1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBib3R0b206IDEuNXJlbTtcbn1cblxuLyo9PT09PT09PT09IEhPTUUgPT09PT09PT09PSovXG5cbi5ob21le1xuICBtYXJnaW4tdG9wOiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbn1cblxuLmhvbWVfX2NvbnRhaW5lcntcbiAgcm93LWdhcDogLjVyZW07XG59XG5cbi5ob21lX19pbWd7XG4gIHdpZHRoOiAyODBweDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5ob21lX190aXRsZXtcbiAgZm9udC1zaXplOiB2YXIoLS1iaWdnZXN0LWZvbnQtc2l6ZSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LWJvbGQpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYi0yKTtcbn1cblxuLmhvbWVfX2Rlc2NyaXB0aW9ue1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYi0zKTtcbn1cblxuXG4vKj09PT09PT09PT0gQlVUVE9OUyA9PT09PT09PT09Ki9cbi5idXR0b257XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC1zZW1pLWJvbGQpO1xuICB0cmFuc2l0aW9uOiAuM3M7XG59XG5cbi5idXR0b246aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yLWFsdCk7XG59XG5cbi5idXR0b24tbGlua3tcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcbn1cblxuLmJ1dHRvbi1saW5rOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yLWFsdCk7XG59XG5cbi8qPT09PT09PT09PSBTSEFSRSA9PT09PT09PT09Ki9cbi5zaGFyZV9fZGF0YXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2hhcmVfX2Rlc2NyaXB0aW9ue1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYi0yKTtcbn1cblxuLnNoYXJlX19pbWd7XG4gIHdpZHRoOiAyODBweDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi8qPT09PT09PT09PSBERUNPUkFUSU9OID09PT09PT09PT0qL1xuLmRlY29yYXRpb25fX2NvbnRhaW5lcntcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjBweCwgMWZyKSk7XG59XG5cbi8qIC5kZWNvcmF0aW9uX19kYXRhe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250YWluZXItY29sb3IpO1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSg2NSwxMSwxNiwuMTUpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufSAqL1xuXG4uZGVjb3JhdGlvbl9fZGF0YXtcbiAgcGFkZGluZzogMHJlbSAwcmVtIDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbi5yZWdhbG9ze1xuICAuY3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDIwcHggMDtcblxuICAgICAgaW1ne1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICB9XG5cbiAgICAgIC5kZXRhaWx7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XG5cbiAgICAgICAgLnBkMXtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wZDJ7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnByaWNle1xuICAgICAgICAgXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAucG51bXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGNvbG9yOiAvKiAjY2YyOTI5ICovICM4NzczNjM7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbn1cblxuLnRleHRMZWZ0e1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5kZWNvcmF0aW9uX19kYXRhOmhvdmVye1xuICAvKiBib3gtc2hhZG93OiAwIDNweCAxMnB4IHJnYmEoNjUsMTEsMTYsLjE1KTsgKi9cbn1cblxuLmRlY29yYXRpb25fX2ltZ3tcbiAgd2lkdGg6IDE4MHB4O1xufVxuXG4uZGVjb3JhdGlvbl9fdGl0bGV7XG4gIGZvbnQtc2l6ZTogdmFyKC0taDMtZm9udC1zaXplKTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWItMSk7XG59XG5cbi8qPT09PT09PT09PSBBQ0NFU1NPUklFUyA9PT09PT09PT09Ki9cbi5hY2Nlc3NvcnlfX2NvbnRhaW5lcntcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cblxuLmFjY2Vzc29yeV9fY29udGVudHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAuMjVyZW0gLjc1cmVtIC43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGFpbmVyLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoNjUsMTEsMTYsLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLmFjY2Vzc29yeV9fY29udGVudDpob3ZlcntcbiAgYm94LXNoYWRvdzogMCAzcHggMTJweCByZ2JhKDY1LDExLDE2LC4xNSk7XG59XG5cbi5hY2Nlc3NvcnlfX2ltZ3tcbiAgd2lkdGg6IDExMHB4O1xuICBcbiAgbWF4LWhlaWdodDogMTQwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG5cbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IC4yNXJlbTtcbn1cblxuLmFjY2Vzc29yeV9fdGl0bGUsIC5hY2Nlc3NvcnlfX2NhdGVnb3J5e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY2Nlc3NvcnlfX3RpdGxle1xuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xufVxuXG4uYWNjZXNzb3J5X19jYXRlZ29yeXtcbiAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250LXNpemUpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYi0xKTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xufVxuXG4uYWNjZXNzb3J5X19wcmVjaXtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtc2VtaS1ib2xkKTtcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcbn1cblxuLmFjY2Vzc29yeV9fYnV0dG9ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgcGFkZGluZzogLjVyZW0gLjYyNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbSAwIDFyZW0gMDtcbn1cblxuXG4vKj09PT09PT09PT0gU0VORCBHSUZUID09PT09PT09PT0qL1xuLnNlbmR7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yLXNlbmQpO1xufVxuXG4uc2VuZF9fdGl0bGUsIC5zZW5kX19kZXNjcmlwdGlvbntcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZW5kX19kZXNjcmlwdGlvbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYi00KTtcbn1cblxuLnNlbmRfX2RpcmVjdGlvbntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XG59XG5cbi5zZW5kX19pbnB1dHtcbiAgd2lkdGg6IDcwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xuICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250KTtcbn1cblxuLnNlbmRfX2lucHV0OjpwbGFjZWhvbGRlcntcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udCk7XG59XG5cbi5zZW5kX19pbWd7XG4gIHdpZHRoOiAyODBweDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cblxuLyo9PT09PT09PT09IEZPT1RFUiA9PT09PT09PT09Ki9cbi5mb290ZXJfX2NvbnRhaW5lcntcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjBweCwgMWZyKSk7XG59XG5cbi5mb290ZXJfX2xvZ297XG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XG59XG5cbi5mb290ZXJfX3RpdGxle1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYi0yKTtcbn1cblxuLmZvb3Rlcl9fbG9nbywgLmZvb3Rlcl9fdGl0bGV7XG4gIGZvbnQtc2l6ZTogdmFyKC0taDMtZm9udC1zaXplKTtcbn1cblxuLmZvb3Rlcl9fbGlua3tcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cblxuLmZvb3Rlcl9fbGluazpob3ZlcntcbiAgY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcbn1cblxuLmZvb3Rlcl9fc29jaWFse1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYi0zKTtcbn1cblxuLmZvb3Rlcl9fc29jaWFsOmhvdmVye1xuICBjb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xufVxuXG4uZm9vdGVyX19jb3B5e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udC1zaXplKTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xuICBtYXJnaW4tdG9wOiA0cmVtO1xufVxuXG5cbi8qPT09PT09PT09PSBNRURJQSBRVUVSSUVTID09PT09PT09PT0qL1xuXG4vKiBGb3IgZnVsbC1zY3JlZW4gaW1hZ2VzIG9uIHNtYWxsIHNjcmVlbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1OXB4KXtcbiAgLmhvbWVfX2ltZyxcbiAgLnNoYXJlX19pbWcsXG4gIC5zZW5kX19pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpe1xuIC8qICAuaG9tZV9fY29udGFpbmVyLCAqL1xuICAuc2hhcmVfX2NvbnRhaW5lcixcbiAgLnNlbmRfX2NvbnRhaW5lcntcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5ob21lX19jb250YWluZXJ7XG4gICAgcGFkZGluZzogNXJlbSAwIDA7XG4gIH1cblxuICAuaG9tZV9faW1ne1xuICAgIG9yZGVyOiAxO1xuICB9XG5cbiAgLnNlY3Rpb24tdGl0bGUtY2VudGVyLFxuICAuc2hhcmVfX2RhdGEsXG4gIC5zZW5kX19kZXNjcmlwdGlvbntcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICB9XG5cbiAgLmhvbWVfX2ltZyxcbiAgLnNoYXJlX19pbWcsXG4gIC5zZW5kX19pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5zaGFyZV9faW1ne1xuICAgIG9yZGVyOiAtMTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XG4gIGJvZHl7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLnNlY3Rpb257XG4gICAgcGFkZGluZy10b3A6IDdyZW07XG4gIH1cblxuICAubmF2e1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSArIDEuNXJlbSk7XG4gIH1cblxuICAubmF2X19saXN0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5uYXZfX2l0ZW17XG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1iLTUpO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAubmF2X190b2dnbGV7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jaGFuZ2UtdGhlbWV7XG4gICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1iLTQpO1xuICB9XG5cbiAgLmhvbWVfX2NvbnRhaW5lcntcbiAgICBwYWRkaW5nOiA3cmVtIDJyZW0gMDtcbiAgfVxuXG4gIC5zaGFyZV9fY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgfVxuXG4gIC5hY2Nlc3NvcnlfX2NvbnRhaW5lcntcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDIyNHB4KTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5hY2Nlc3NvcnlfX2NvbnRlbnR7XG4gICAgcGFkZGluZzogLjVyZW0gMS41cmVtIDEuNXJlbTtcbiAgfVxuXG4gIC5hY2Nlc3NvcnlfX2ltZ3tcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWItMSk7XG4gIH1cblxuICAuYWNjZXNzb3J5X190aXRsZSwgLmFjY2Vzc29yeV9fY2F0ZWdvcnl7XG4gICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbiAgfVxuXG4gIC5hY2Nlc3NvcnlfX2J1dHRvbntcbiAgICBwYWRkaW5nOiAuNzVyZW07XG4gIH1cblxuICAuc2VuZHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG5cbiAgLnNlbmRfX2NvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvci1zZW5kKTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjhweCl7XG4gIC5iZC1jb250YWluZXJ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLmhvbWVfX2ltZyxcbiAgLnNoYXJlX19pbWcsXG4gIC5zZW5kX19pbWd7XG4gICAgd2lkdGg6IDQ2OXB4O1xuICB9XG5cbiAgLmhvbWVfX2NvbnRhaW5lcixcbiAgLnNoYXJlX19jb250YWluZXIsXG4gIC5zZW5kX19jb250YWluZXJ7XG4gICAgY29sdW1uLWdhcDogNXJlbTtcbiAgfVxufVxuXG5cbi5hbmltYXRlZHtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmNsYXNzX2FuaW1hdGVUb3B7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwcHgsIDAgLCAwKTtcbn1cblxuLmNsYXNzX2FuaW1hdGVMZWZ0e1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcbn1cblxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_reservar_reservar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/reservar/reservar.component */ "./src/app/components/reservar/reservar.component.ts");
/* harmony import */ var src_app_services_ionic_components_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ionic-components.service */ "./src/app/services/ionic-components.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");






let HomePage = class HomePage {
    constructor(_comp, _product, _modal) {
        this._comp = _comp;
        this._product = _product;
        this._modal = _modal;
        this.listA = [];
        this.listB = [];
    }
    ngOnInit() {
        this.funcionesJs();
        this.getList();
    }
    isVarInvalid(data) {
        if (typeof data === 'string' || data instanceof String)
            data = data.trim();
        if (data == undefined || data == null || data == 'undefined' || data == 'null' || data == '')
            return true;
        return false;
    }
    getList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const res_list = yield this._product.getList();
                console.log('res_list', res_list);
                /*  if (this.isVarInvalid(res_list.valid)) {
                   return;
                 } */
                /* res_list.res= res_list.res.filter(a => a.img !=''); */
                /*    this.listA = res_list.res.filter(a => a.status == 1);
             
                   this.listB = res_list.res.filter(a => a.status == 2);
                   let listOrder = this.sortJSON(this.listB, 'tmp_reserva', false);
                   this.listB = listOrder.filter(item => true);//REFRESCAR TABLA  */
                this.listA = res_list.filter(a => a.status == 1);
                this.listB = res_list.filter(a => a.status == 2);
                let listOrder = this.sortJSON(this.listB, 'tmp_reserva', false);
                this.listB = listOrder.filter(item => true); //REFRESCAR TABLA 
                console.log('this.listA', this.listA);
            }
            catch (error) {
                console.log('ERROR');
            }
        });
    }
    sortJSON(arr, key, way) {
        return arr.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            if (typeof x === 'string' || x instanceof String)
                x = x.toLowerCase();
            if (typeof y === 'string' || y instanceof String)
                y = y.toLowerCase();
            if (way) {
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            }
            if (!way) {
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
            }
        });
    }
    scrollToLabel(label) {
        var titleELe = document.getElementById(label);
        this.content.scrollToPoint(0, titleELe.offsetTop, 1000);
    }
    reservar(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('product', product);
            const modal = yield this._modal.create({
                backdropDismiss: false,
                cssClass: 'style-info',
                component: _components_reservar_reservar_component__WEBPACK_IMPORTED_MODULE_3__["ReservarComponent"],
                componentProps: {
                    product
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(res.data);
                if (this.isVarInvalid(res.data))
                    return;
                if (!this.isVarInvalid(res.data.updateList))
                    this.getList();
            }));
            return yield modal.present();
        });
    }
    copyText(item) {
        /*     this.clipboard.copy(this.dataQR); */
        document.addEventListener('copy', (e) => {
            e.clipboardData.setData('text/plain', (item));
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
        this._comp.presentToast('Dirección copiada', 'primary', 500);
    }
    funcionesJs() {
        /*==================== SHOW MENU ====================*/
        const showMenu = (toggleId, navId) => {
            const toggle = document.getElementById(toggleId), nav = document.getElementById(navId);
            // Validate that variables exist
            if (toggle && nav) {
                toggle.addEventListener('click', () => {
                    // We add the show-menu class to the div tag with the nav__menu class
                    nav.classList.toggle('show-menu');
                });
            }
        };
        showMenu('nav-toggle', 'nav-menu');
        /*==================== REMOVE MENU MOBILE ====================*/
        const navLink = document.querySelectorAll('.nav__link');
        function linkAction() {
            const navMenu = document.getElementById('nav-menu');
            // When we click on each nav__link, we remove the show-menu class
            navMenu.classList.remove('show-menu');
        }
        navLink.forEach(n => n.addEventListener('click', linkAction));
        /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
        const sections = document.querySelectorAll('section[id]');
        function scrollActive() {
            const scrollY = window.pageYOffset;
            sections.forEach((current) => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute('id');
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
                }
                else {
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
                }
            });
        }
        window.addEventListener('scroll', scrollActive);
        /*==================== CHANGE BACKGROUND HEADER ====================*/
        function scrollHeader() {
            const nav = document.getElementById('header');
            // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
            if (this.scrollY >= 200)
                nav.classList.add('scroll-header');
            else
                nav.classList.remove('scroll-header');
        }
        window.addEventListener('scroll', scrollHeader);
        /*==================== SHOW SCROLL TOP ====================*/
        function scrollTop() {
            const scrollTop = document.getElementById('scroll-top');
            // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
            if (this.scrollY >= 560)
                scrollTop.classList.add('show-scroll');
            else
                scrollTop.classList.remove('show-scroll');
        }
        window.addEventListener('scroll', scrollTop);
        /*==================== DARK LIGHT THEME ====================*/
        const themeButton = document.getElementById('theme-button');
        const darkTheme = 'dark-theme';
        const iconTheme = 'bx-toggle-right';
        // Previously selected topic (if user selected)
        const selectedTheme = localStorage.getItem('selected-theme');
        const selectedIcon = localStorage.getItem('selected-icon');
        // We obtain the current theme that the interface has by validating the dark-theme class
        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
        const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right';
        // We validate if the user previously chose a topic
        if (selectedTheme) {
            // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
            themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme);
        }
        // Activate / deactivate the theme manually with the button
        themeButton.addEventListener('click', () => {
            // Add or remove the dark / icon theme
            document.body.classList.toggle(darkTheme);
            themeButton.classList.toggle(iconTheme);
            // We save the theme and the current icon that the user chose
            localStorage.setItem('selected-theme', getCurrentTheme());
            localStorage.setItem('selected-icon', getCurrentIcon());
        });
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_ionic_components_service__WEBPACK_IMPORTED_MODULE_4__["IonicComponentsService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }
];
HomePage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], { static: false },] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ }),

/***/ "./src/app/services/ionic-components.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/ionic-components.service.ts ***!
  \******************************************************/
/*! exports provided: IonicComponentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicComponentsService", function() { return IonicComponentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let IonicComponentsService = class IonicComponentsService {
    constructor(loadingController, actionSheetController, toastController) {
        this.loadingController = loadingController;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
    }
    presentLoading(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const loading = yield this.loadingController.create({
                    message: text ? text : 'Por favor espere...',
                    backdropDismiss: false,
                    showBackdrop: true,
                    spinner: "bubbles"
                });
                yield loading.present();
                resolve(loading);
            }));
        });
    }
    /*   async presentLoading( message:string, duration:number ) {
        const loading = await this.loadingController.create({
          message: 'Por favor espere...',
          backdropDismiss: false,
          showBackdrop: true,
          spinner: "bubbles"
        });
        await loading.present();
    
        const { role, data } = await loading.onDidDismiss();
        console.log('Loading dismissed!');
      }
     */
    presentToast(texto, color, duracion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: texto,
                duration: duracion,
                color: color
            });
            toast.present();
        });
    }
    resizeImage(base64Str, maxWidth = 180, maxHeight = 150) {
        return new Promise((resolve) => {
            let img = new Image();
            img.src = base64Str;
            img.onload = () => {
                let canvas = document.createElement('canvas');
                const MAX_WIDTH = maxWidth;
                const MAX_HEIGHT = maxHeight;
                let width = img.width;
                let height = img.height;
                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                }
                else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                let ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL());
            };
        });
    }
};
IonicComponentsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
IonicComponentsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IonicComponentsService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map
webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("./src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_canvas_whiteboard__ = __webpack_require__("./node_modules/ng2-canvas-whiteboard/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_canvas_whiteboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_canvas_whiteboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__drawing_drawing_component__ = __webpack_require__("./src/app/drawing/drawing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__canvas_canvas_component__ = __webpack_require__("./src/app/canvas/canvas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__websocket_service__ = __webpack_require__("./src/app/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__broadcast_service__ = __webpack_require__("./src/app/broadcast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: '',
        redirectTo: 'drawing',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
    },
    {
        path: 'drawing',
        component: __WEBPACK_IMPORTED_MODULE_8__drawing_drawing_component__["a" /* DrawingComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__auth_guard__["a" /* AuthGuard */]],
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_8__drawing_drawing_component__["a" /* DrawingComponent */], __WEBPACK_IMPORTED_MODULE_11__canvas_canvas_component__["a" /* CanvasComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(routes), __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3_ng2_canvas_whiteboard__["CanvasWhiteboardModule"]],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */].useFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]],
                },
                __WEBPACK_IMPORTED_MODULE_10__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_12__websocket_service__["a" /* WebsocketService */],
                __WEBPACK_IMPORTED_MODULE_13__broadcast_service__["a" /* BroadcastService */],
                __WEBPACK_IMPORTED_MODULE_14__auth_guard__["a" /* AuthGuard */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.auth.isTokenExpired()) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_service__ = __webpack_require__("./src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__("./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TOKEN_NAME = 'id_token';
// Rxjs





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.isLoginSubject = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.hasToken());
    }
    AuthService.prototype.getToken = function () {
        return localStorage.getItem(TOKEN_NAME);
    };
    AuthService.prototype.setToken = function (token) {
        localStorage.setItem(TOKEN_NAME, token);
    };
    AuthService.prototype.getTokenExpirationDate = function (token) {
        var decoded = __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(token);
        if (decoded.exp === undefined)
            return null;
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    AuthService.prototype.getUsername = function (token) {
        if (!token)
            token = this.getToken();
        if (!token)
            return true;
        var decoded = __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(token);
        if (decoded.exp === undefined)
            return null;
        return decoded.user.username;
    };
    AuthService.prototype.isTokenExpired = function (token) {
        if (!token)
            token = this.getToken();
        if (!token)
            return true;
        var date = this.getTokenExpirationDate(token);
        if (date === undefined)
            return false;
        return !(date.valueOf() > new Date().valueOf());
    };
    AuthService.prototype.login = function (data) {
        return this.http
            .post('/api/login', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    /**
     * Log out the user then tell all the subscribers about the new status
     */
    AuthService.prototype.logOut = function () {
        localStorage.removeItem('id_token');
        this.isLoginSubject.next(false);
    };
    /**
     *
     * @returns {Observable<T>}
     */
    AuthService.prototype.isLoggedIn = function () {
        return this.isLoginSubject.asObservable();
    };
    /**
     *  decodeToken
     *
     *  decodes the id_token in the localStorage and stores the user information
     *  in the userInfo attribute
     */
    AuthService.prototype.decodeToken = function () {
        var token = localStorage.getItem('id_token');
        // this.userInfo = this.jwtHelper.decodeToken(token).UserInfo;
    };
    /**
     * if we have token the user is loggedIn
     * @returns {boolean}
     */
    AuthService.prototype.hasToken = function () {
        return !!localStorage.getItem(TOKEN_NAME);
    };
    AuthService.prototype.handleError = function (error) {
        var errMsg = error.message
            ? error.message
            : error.status ? error.status + " - " + error.statusText : 'Server Error';
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__http_service__["a" /* HttpService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/broadcast.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BroadcastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__websocket_service__ = __webpack_require__("./src/app/websocket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BroadcastService = /** @class */ (function () {
    // Our constructor calls our wsService connect method
    function BroadcastService(wsService) {
        this.wsService = wsService;
        this.broadcast = wsService.connect().map(function (response) {
            return response;
        });
    }
    // Our simplified interface for sending
    // broadcast back to our socket.io server
    BroadcastService.prototype.sendBroadcast = function (data) {
        this.broadcast.next(data);
    };
    BroadcastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__websocket_service__["a" /* WebsocketService */]])
    ], BroadcastService);
    return BroadcastService;
}());



/***/ }),

/***/ "./src/app/canvas/canvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pairwise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__broadcast_service__ = __webpack_require__("./src/app/broadcast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__websocket_service__ = __webpack_require__("./src/app/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CanvasComponent = /** @class */ (function () {
    function CanvasComponent(broadcastService, wsService, auth) {
        this.broadcastService = broadcastService;
        this.wsService = wsService;
        this.auth = auth;
        this.width = 800;
        this.height = 600;
    }
    CanvasComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var id_token = localStorage.getItem('id_token');
        var send = {
            data: this.auth.getUsername(id_token),
            type: 'user-joined',
        };
        this.broadcastService.sendBroadcast(send);
        var canvasEl = this.canvas.nativeElement;
        this.cx = canvasEl.getContext('2d');
        canvasEl.width = this.width;
        canvasEl.height = this.height;
        this.cx.lineWidth = 3;
        this.cx.lineCap = 'round';
        this.cx.strokeStyle = '#000';
        this.captureEvents(canvasEl);
        var saveToken = localStorage.getItem('canvas');
        this.wsService.connect().subscribe(function (message) {
            if (message.type === 'user-joined') {
                _this.displayMessage = message.data + " just joined Yay!";
                setTimeout(function () {
                    _this.displayMessage = '';
                }, 3000);
            }
            if (message.type === 'typing' && message.data) {
                _this.displayMessage = message.data + " is typing";
                setTimeout(function () {
                    _this.displayMessage = '';
                }, 3000);
            }
            if (message.data && message.type === 'drawing') {
                var self_1 = _this;
                var img_1 = new Image();
                img_1.onload = function () {
                    self_1.cx.drawImage(img_1, 0, 0);
                };
                img_1['src'] = message.data;
            }
        });
        if (saveToken) {
            var self_2 = this;
            var img_2 = new Image();
            img_2.onload = function () {
                self_2.cx.drawImage(img_2, 0, 0);
            };
            img_2['src'] = saveToken;
        }
    };
    CanvasComponent.prototype.captureEvents = function (canvasEl) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].fromEvent(canvasEl, 'mousedown')
            .switchMap(function (e) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].fromEvent(canvasEl, 'mousemove')
                .takeUntil(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].fromEvent(canvasEl, 'mouseup'))
                .pairwise();
        })
            .subscribe(function (res) {
            var rect = canvasEl.getBoundingClientRect();
            var prevPos = {
                x: res[0].clientX - rect.left,
                y: res[0].clientY - rect.top,
            };
            var currentPos = {
                x: res[1].clientX - rect.left,
                y: res[1].clientY - rect.top,
            };
            var positions = {
                prevPos: prevPos,
                currentPos: currentPos,
            };
            localStorage.setItem('canvas', canvasEl.toDataURL('image/png'));
            var data = {
                type: 'drawing',
                data: canvasEl.toDataURL('image/png'),
            };
            var typingData = {
                type: 'typing',
                data: _this.auth.getUsername(localStorage.getItem('id_token')),
            };
            _this.broadcastService.sendBroadcast(data);
            _this.broadcastService.sendBroadcast(typingData);
            _this.drawOnCanvas(prevPos, currentPos);
        });
    };
    CanvasComponent.prototype.drawOnCanvas = function (prevPos, currentPos) {
        if (!this.cx) {
            return;
        }
        this.cx.beginPath();
        if (prevPos) {
            this.cx.moveTo(prevPos.x, prevPos.y); // from
            this.cx.lineTo(currentPos.x, currentPos.y);
            this.cx.stroke();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('canvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CanvasComponent.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CanvasComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CanvasComponent.prototype, "height", void 0);
    CanvasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-canvas',
            template: '<p style="color: green; font-size: 17px; text-align: center;">{{ displayMessage }}</p><canvas #canvas></canvas>',
            styles: ['canvas { border: 1px solid #000; width: 100%; height: 100% }'],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__broadcast_service__["a" /* BroadcastService */],
            __WEBPACK_IMPORTED_MODULE_7__websocket_service__["a" /* WebsocketService */],
            __WEBPACK_IMPORTED_MODULE_8__auth_service__["a" /* AuthService */]])
    ], CanvasComponent);
    return CanvasComponent;
}());



/***/ }),

/***/ "./src/app/drawing/drawing.component.css":
/***/ (function(module, exports) {

module.exports = ".canvas_wrapper_div canvas {\n  height: 500px !important;\n  width: 100% !important;\n}\n.panel-default {\n  margin-top: 200px;\n}\n"

/***/ }),

/***/ "./src/app/drawing/drawing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8\">\n    <div class=\"panel panel-default\">\n      <button (click)=\"logout()\" clasName=\"btn btn-primary\"> Logout </button>\n      <app-canvas></app-canvas>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/drawing/drawing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrawingComponent = /** @class */ (function () {
    function DrawingComponent(auth, route) {
        this.auth = auth;
        this.route = route;
    }
    DrawingComponent.prototype.ngOnInit = function () { };
    DrawingComponent.prototype.logout = function () {
        this.auth.logOut();
        this.route.navigate(['/login']);
    };
    DrawingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-drawing',
            template: __webpack_require__("./src/app/drawing/drawing.component.html"),
            styles: [__webpack_require__("./src/app/drawing/drawing.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], DrawingComponent);
    return DrawingComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var localStorage = window.localStorage;
var HttpService = /** @class */ (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, options) {
        var _this = _super.call(this, backend, options) || this;
        _this.token = localStorage.getItem('id_token');
        options.headers.set('Authorization', "Bearer " + _this.token);
        return _this;
    }
    HttpService_1 = HttpService;
    HttpService.useFactory = function (backend, options) {
        return new HttpService_1(backend, options);
    };
    HttpService.prototype.request = function (url, options) {
        if (typeof url === 'string') {
            if (!options) {
                options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]() };
            }
            options.headers.set('Authorization', "Bearer " + this.token);
        }
        else {
            url.headers.set('Authorization', "Bearer " + this.token);
        }
        return _super.prototype.request.call(this, url, options).catch(this.catchAuthenticationError(this));
    };
    HttpService.prototype.catchAuthenticationError = function (self) {
        return function (response) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(response); };
    };
    HttpService = HttpService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]])
    ], HttpService);
    return HttpService;
    var HttpService_1;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]));



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"wrapper\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginSubmit()\">\n      <h3 class=\"form-signin-heading\"> Hey there ðŸ˜Ž!!\n        <br />Please Login In</h3>\n      <hr class=\"colorgraph\" />\n      <br />\n      <input type=\"text\" formControlName=\"username\" class=\"form-control\" name=\"username\" placeholder=\"username\" required=\"\" autofocus=\"\" />\n      <input type=\"password\" formControlName=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\" required=\"\" />\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Login</button>\n      <h4 class=\"form-signin-cred\"> Test username: besho\n        <br />Test password: 123</h4>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__broadcast_service__ = __webpack_require__("./src/app/broadcast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, broadcastService, router, auth) {
        this.fb = fb;
        this.broadcastService = broadcastService;
        this.router = router;
        this.auth = auth;
        this.errorMessage = '';
        this.loginForm = fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(2)],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(2)],
        });
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        if (this.loginForm.valid) {
            var data_1 = {
                username: this.username.value,
                password: this.password.value,
            };
            this.auth
                .login(data_1)
                .toPromise()
                .then(function (response) {
                // console.log(response);
                localStorage.setItem('id_token', JSON.stringify(response.token));
                _this.auth.isLoginSubject.next(true);
                var send = {
                    data: data_1.username,
                    type: 'user-joined',
                };
                _this.broadcastService.sendBroadcast(send);
                _this.router.navigate(['/drawing']);
            })
                .catch(function (err) {
                var error = JSON.parse(err['_body']);
                _this.errorMessage = error.message;
            });
        }
    };
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () {
            return this.loginForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__broadcast_service__["a" /* BroadcastService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/websocket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connect = function () {
        var _this = this;
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__();
        // We define our observable which will observe any incoming messages
        // from our socket.io server.
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('message', function (data) {
                console.log('Received message from Websocket Server', data);
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        // We define our Observer which will listen to messages
        // from our other components and send messages back to our
        // socket server whenever the `next()` method is called.
        var observer = {
            next: function (data) {
                _this.socket.emit('message', JSON.stringify(data));
            },
        };
        // we return our Rx.Subject which is a combination
        // of both an observer and observable.
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Subject */].create(observer, observable);
    };
    WebsocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map

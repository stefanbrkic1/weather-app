/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSearchButton: () => (/* binding */ addSearchButton),
/* harmony export */   removeSearchButton: () => (/* binding */ removeSearchButton),
/* harmony export */   transitionForecast: () => (/* binding */ transitionForecast)
/* harmony export */ });
function addSearchButton(searchBtn) {
  searchBtn.classList.remove('opacity-active');
}
function removeSearchButton(searchBtn) {
  searchBtn.classList.add('opacity-active');
}
function transitionForecast() {
  var forecast = document.querySelector('.forecast');
  setTimeout(function () {
    forecast.classList.add('opacity-forecast');
  }, 1000);
}

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleSearch)
/* harmony export */ });
/* harmony import */ var _weather_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-api */ "./src/modules/weather-api.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/modules/dom.js");


var searchFormIndex = document.getElementById('searchFormIndex');
var searchBarIndex = document.getElementById('searchBarIndex');
var searchBtnIndex = document.getElementById('searchBtnIndex');
function handleSearchInput() {
  searchBarIndex.addEventListener('input', function () {
    if (searchBarIndex.value !== '') {
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addSearchButton)(searchBtnIndex);
    } else {
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeSearchButton)(searchBtnIndex);
    }
  });
}
function getLocationValue() {
  var inputValue = searchBarIndex.value;
  return inputValue.trim().toLowerCase();
}
function handleSearchSubmit() {
  searchFormIndex.addEventListener('submit', function (e) {
    e.preventDefault();
    (0,_weather_api__WEBPACK_IMPORTED_MODULE_0__["default"])(getLocationValue(), 'metric').then(function (weatherData) {
      localStorage.setItem('weatherData', JSON.stringify(weatherData));
      window.location.href = './weather.html';
    })["catch"](function (error) {
      throw new Error('WeatherDataError', error);
    });
  });
}
function handleSearch() {
  handleSearchInput();
  handleSearchSubmit();
}

/***/ }),

/***/ "./src/modules/weather-api.js":
/*!************************************!*\
  !*** ./src/modules/weather-api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeatherData)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function makeCoordinatesURL(city) {
  return "http://api.openweathermap.org/geo/1.0/direct?q=".concat(city, "&appid=1f88f358bd549e4bfc5d35ed04656723");
}
function fetchCoordinates(_x) {
  return _fetchCoordinates.apply(this, arguments);
}
function _fetchCoordinates() {
  _fetchCoordinates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch(url, {
            mode: 'cors'
          });
        case 3:
          response = _context.sent;
          if (response.ok) {
            _context.next = 6;
            break;
          }
          throw new Error('Network response was not ok');
        case 6:
          _context.next = 8;
          return response.json();
        case 8:
          data = _context.sent;
          return _context.abrupt("return", {
            lat: data[0].lat,
            lon: data[0].lon,
            name: data[0].name,
            state: data[0].state
          });
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          throw new Error("Failed to fetch data: ".concat(_context.t0.message));
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return _fetchCoordinates.apply(this, arguments);
}
function makeWeatherURL(coordinates, units) {
  return "https://api.openweathermap.org/data/2.5/onecall?lat=".concat(coordinates.lat, "&lon=").concat(coordinates.lon, "&exclude=minutely,alerts&units=").concat(units, "&appid=20f7632ffc2c022654e4093c6947b4f4");
}
function fetchWeatherData(_x2) {
  return _fetchWeatherData.apply(this, arguments);
}
function _fetchWeatherData() {
  _fetchWeatherData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch(url, {
            mode: 'cors'
          });
        case 3:
          response = _context2.sent;
          if (response.ok) {
            _context2.next = 6;
            break;
          }
          throw new Error('Network response was not ok');
        case 6:
          _context2.next = 8;
          return response.json();
        case 8:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          throw new Error("Failed to fetch data: ".concat(_context2.t0.message));
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return _fetchWeatherData.apply(this, arguments);
}
function getWeatherData(_x3, _x4) {
  return _getWeatherData.apply(this, arguments);
}
function _getWeatherData() {
  _getWeatherData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(city, units) {
    var coordinates, fetchedWeatherData;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return fetchCoordinates(makeCoordinatesURL(city));
        case 2:
          coordinates = _context3.sent;
          _context3.next = 5;
          return fetchWeatherData(makeWeatherURL(coordinates, units));
        case 5:
          fetchedWeatherData = _context3.sent;
          fetchedWeatherData.name = coordinates.name;
          fetchedWeatherData.state = coordinates.state;
          return _context3.abrupt("return", fetchedWeatherData);
        case 9:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _getWeatherData.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Gilroy-Regular.ttf */ "./src/fonts/Gilroy-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Gilroy-SemiBold.ttf */ "./src/fonts/Gilroy-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Gilroy-Bold.ttf */ "./src/fonts/Gilroy-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/background.jpg */ "./src/img/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/search-bold.svg */ "./src/img/search-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/github.png */ "./src/img/github.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'Gilroy';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: 'GilroySemiBold';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
  font-family: 'GilroyBold';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

:root {
  --primary-color: #3671f1;
  --text-color: #fbfbfb;
  --text-secondary-color: #3d3e4d;
  --background-color: #191a22;
  --background-secondary-color: #1c1d27;
  --background-tertiary-color: #222431;

  --primary-font-regular: 'Gilroy', sans-serif;
  --primary-font-semi: 'GilroySemiBold', sans-serif;
  --primary-font-bold: 'GilroyBold', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 6.25%;
}

body {
  font-size: 16rem;
  font-family: var(--primary-font-regular);
}

.container {
  width: 100vw;
  height: 100vh;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.search-bar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 13%;
  position: relative;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  margin-top: 15px;
}

.welcome-para {
  font-family: var(--primary-font-bold) !important;
  font-size: 38rem;
}

.welcome-text {
  color: var(--text-color);
}

.welcome-logo {
  color: var(--primary-color);
}

.paragraph {
  font-size: 22rem;
  color: var(--text-secondary-color);
  text-align: center;
  margin: 10px 0px;
}

.form-index {
  display: flex;
  margin-top: 15px;
  position: relative;
}

.search-bar-index {
  padding: 16px 18px;
  appearance: none;
  border: none;
  outline: none;
  background: var(--background-secondary-color);
  color: var(--text-secondary-color);
  width: 600px;
  border-radius: 10px;
  font-family: 'GilroySemiBold' !important;
  font-size: 16rem;
  border: 1px solid var(--text-color);
  transition: width 300ms ease-in-out;
}

.search-bar-index:focus {
  border: 1px solid var(--primary-color);
  color: var(--text-color);
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
  width: 630px;
}

.search-container {
  width: 20px;
  height: 20px;
  background: transparent;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  transition: all 200ms ease-in-out;
}

.opacity-active {
  opacity: 0;
  pointer-events: none;
}

.search-btn-index {
  position: absolute;
  appearance: none;
  outline: none;
  border: none;
  background: var(--primary-color);
  width: 34px;
  height: 34px;
  border-radius: 8px;
  cursor: pointer;
  right: 9px;
  top: 9px;
  bottom: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 200ms ease-in-out;
}

.github-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.github-user {
  color: var(--text-color);
  text-decoration: none;
  font-size: 18rem;
}

.github {
  width: 25px;
  height: 25px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
  background-repeat: no-repeat;
  background-size: contain;
}

/*Forecast CSS*/

.forecast-container {
  width: 100vw;
  height: 100vh;
  background: var(--background-color);
  position: relative;
  display: flex;
  overflow: auto;
  justify-content: center;
  align-items: center;
  padding: 40px 10px;
}

.forecast {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 25px;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  opacity: 0;
}

.opacity-forecast {
  transition: opacity 300ms ease-in-out;
  opacity: 1;
}

.box1,
.box2,
.box3 {
  background: var(--background-secondary-color);
  border-radius: 12px;
  padding: 20px;
}

.box1 {
  grid-area: 1 / 1 / 3 / 2;
  display: grid;
  grid-template-rows: 1fr 14fr;
  gap: 13px;
}

.box2 {
  grid-area: 1 / 2 / 2 / 3;
}

.box3 {
  grid-area: 2 / 2 / -2 / -1;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 13px;
  position: relative;
}

.logo-container-forecast {
  background: var(--background-tertiary-color);
  padding: 15px;
  border-radius: 8px;
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-bar-forecast-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-bar-forecast {
  width: 100%;
  appearance: none;
  outline: none;
  border: none;
  padding: 14px;
  background: var(--background-tertiary-color);
  border-radius: 8px;
  font-family: 'GilroySemiBold', sans-serif;
  font-size: 16rem;
  position: relative;
}

.search-bar-forecast:focus {
  color: var(--text-color);
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
}

.search-btn-forecast {
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  outline: none;
  border: none;
  position: absolute;
  background: var(--primary-color);
  width: 34px;
  height: 34px;
  border-radius: 6px;
  right: 8px;
  top: 8px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
}

.search-icon {
  width: 17px;
  height: 17px;
  background: transparent;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  transition: all 200ms ease-in-out;
}

.current-weather-box {
  background-color: var(--background-tertiary-color);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  color: var(--text-color);
}

.current-top {
  display: flex;
  gap: 10px;
  flex: 1;
}

.current-top-left {
  flex: 2;
}

.current-bottom {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.location {
  font-size: 20rem;
  font-family: var(--primary-font-bold);
  margin-bottom: 10px;
}

.clock {
  font-family: var(--primary-font-bold);
  font-size: 20rem;
}

.temp {
  font-size: 100rem;
  font-family: var(--primary-font-bold);
}

.min-max-temp {
  font-size: 20rem;
  font-family: var(--primary-font-bold);
}

/*Media Queries*/

/*PHONES*/
@media (max-width: 767px) {
  .container {
    padding: 10px;
  }
  .search-bar-container {
    margin-bottom: 100%;
  }
  .form-index {
    width: 100%;
  }
  .search-bar-index {
    width: 100%;
    padding: 12px 14px;
  }
  .search-container {
    width: 32px;
    height: 32px;
    right: 6px;
    top: 6px;
    bottom: 6px;
  }
  .search-bar-index:focus {
    width: 100%;
  }

  .welcome-para {
    font-size: 26rem;
  }
  .paragraph {
    font-size: 16rem;
  }
  .forecast-container {
    padding: 14px;
  }
  .forecast {
    display: flex;
    flex-direction: column;
  }
  .box1,
  .box2,
  .box3 {
    padding: 14px;
  }
  .box1 {
    grid-template-rows: 1fr 8fr;
  }
}

/*TABLETS*/
@media (min-width: 768px) and (max-width: 991px) {
  /* Styles for tablets in portrait orientation go here */
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Gilroy';\n  src: url(../fonts/Gilroy-Regular.ttf);\n}\n\n@font-face {\n  font-family: 'GilroySemiBold';\n  src: url(../fonts/Gilroy-SemiBold.ttf);\n}\n\n@font-face {\n  font-family: 'GilroyBold';\n  src: url(../fonts/Gilroy-Bold.ttf);\n}\n\n:root {\n  --primary-color: #3671f1;\n  --text-color: #fbfbfb;\n  --text-secondary-color: #3d3e4d;\n  --background-color: #191a22;\n  --background-secondary-color: #1c1d27;\n  --background-tertiary-color: #222431;\n\n  --primary-font-regular: 'Gilroy', sans-serif;\n  --primary-font-semi: 'GilroySemiBold', sans-serif;\n  --primary-font-bold: 'GilroyBold', sans-serif;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 6.25%;\n}\n\nbody {\n  font-size: 16rem;\n  font-family: var(--primary-font-regular);\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  background: url(../img/background.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.search-bar-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 13%;\n  position: relative;\n}\n\n.logo-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-color);\n  margin-top: 15px;\n}\n\n.welcome-para {\n  font-family: var(--primary-font-bold) !important;\n  font-size: 38rem;\n}\n\n.welcome-text {\n  color: var(--text-color);\n}\n\n.welcome-logo {\n  color: var(--primary-color);\n}\n\n.paragraph {\n  font-size: 22rem;\n  color: var(--text-secondary-color);\n  text-align: center;\n  margin: 10px 0px;\n}\n\n.form-index {\n  display: flex;\n  margin-top: 15px;\n  position: relative;\n}\n\n.search-bar-index {\n  padding: 16px 18px;\n  appearance: none;\n  border: none;\n  outline: none;\n  background: var(--background-secondary-color);\n  color: var(--text-secondary-color);\n  width: 600px;\n  border-radius: 10px;\n  font-family: 'GilroySemiBold' !important;\n  font-size: 16rem;\n  border: 1px solid var(--text-color);\n  transition: width 300ms ease-in-out;\n}\n\n.search-bar-index:focus {\n  border: 1px solid var(--primary-color);\n  color: var(--text-color);\n  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);\n  width: 630px;\n}\n\n.search-container {\n  width: 20px;\n  height: 20px;\n  background: transparent;\n  background-image: url(../img/search-bold.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n  cursor: pointer;\n  transition: all 200ms ease-in-out;\n}\n\n.opacity-active {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.search-btn-index {\n  position: absolute;\n  appearance: none;\n  outline: none;\n  border: none;\n  background: var(--primary-color);\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  cursor: pointer;\n  right: 9px;\n  top: 9px;\n  bottom: 9px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: opacity 200ms ease-in-out;\n}\n\n.github-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 15px;\n}\n\n.github-user {\n  color: var(--text-color);\n  text-decoration: none;\n  font-size: 18rem;\n}\n\n.github {\n  width: 25px;\n  height: 25px;\n  background-image: url(../img/github.png);\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n/*Forecast CSS*/\n\n.forecast-container {\n  width: 100vw;\n  height: 100vh;\n  background: var(--background-color);\n  position: relative;\n  display: flex;\n  overflow: auto;\n  justify-content: center;\n  align-items: center;\n  padding: 40px 10px;\n}\n\n.forecast {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 25px;\n  width: 100%;\n  height: 100%;\n  max-width: 1200px;\n  opacity: 0;\n}\n\n.opacity-forecast {\n  transition: opacity 300ms ease-in-out;\n  opacity: 1;\n}\n\n.box1,\n.box2,\n.box3 {\n  background: var(--background-secondary-color);\n  border-radius: 12px;\n  padding: 20px;\n}\n\n.box1 {\n  grid-area: 1 / 1 / 3 / 2;\n  display: grid;\n  grid-template-rows: 1fr 14fr;\n  gap: 13px;\n}\n\n.box2 {\n  grid-area: 1 / 2 / 2 / 3;\n}\n\n.box3 {\n  grid-area: 2 / 2 / -2 / -1;\n}\n\n.flex {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 13px;\n  position: relative;\n}\n\n.logo-container-forecast {\n  background: var(--background-tertiary-color);\n  padding: 15px;\n  border-radius: 8px;\n  color: var(--text-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search-bar-forecast-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search-bar-forecast {\n  width: 100%;\n  appearance: none;\n  outline: none;\n  border: none;\n  padding: 14px;\n  background: var(--background-tertiary-color);\n  border-radius: 8px;\n  font-family: 'GilroySemiBold', sans-serif;\n  font-size: 16rem;\n  position: relative;\n}\n\n.search-bar-forecast:focus {\n  color: var(--text-color);\n  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);\n}\n\n.search-btn-forecast {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  appearance: none;\n  outline: none;\n  border: none;\n  position: absolute;\n  background: var(--primary-color);\n  width: 34px;\n  height: 34px;\n  border-radius: 6px;\n  right: 8px;\n  top: 8px;\n  cursor: pointer;\n  transition: all 200ms ease-in-out;\n}\n\n.search-icon {\n  width: 17px;\n  height: 17px;\n  background: transparent;\n  background-image: url(../img/search-bold.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n  cursor: pointer;\n  transition: all 200ms ease-in-out;\n  cursor: pointer;\n  transition: all 200ms ease-in-out;\n}\n\n.current-weather-box {\n  background-color: var(--background-tertiary-color);\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  color: var(--text-color);\n}\n\n.current-top {\n  display: flex;\n  gap: 10px;\n  flex: 1;\n}\n\n.current-top-left {\n  flex: 2;\n}\n\n.current-bottom {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n}\n\n.location {\n  font-size: 20rem;\n  font-family: var(--primary-font-bold);\n  margin-bottom: 10px;\n}\n\n.clock {\n  font-family: var(--primary-font-bold);\n  font-size: 20rem;\n}\n\n.temp {\n  font-size: 100rem;\n  font-family: var(--primary-font-bold);\n}\n\n.min-max-temp {\n  font-size: 20rem;\n  font-family: var(--primary-font-bold);\n}\n\n/*Media Queries*/\n\n/*PHONES*/\n@media (max-width: 767px) {\n  .container {\n    padding: 10px;\n  }\n  .search-bar-container {\n    margin-bottom: 100%;\n  }\n  .form-index {\n    width: 100%;\n  }\n  .search-bar-index {\n    width: 100%;\n    padding: 12px 14px;\n  }\n  .search-container {\n    width: 32px;\n    height: 32px;\n    right: 6px;\n    top: 6px;\n    bottom: 6px;\n  }\n  .search-bar-index:focus {\n    width: 100%;\n  }\n\n  .welcome-para {\n    font-size: 26rem;\n  }\n  .paragraph {\n    font-size: 16rem;\n  }\n  .forecast-container {\n    padding: 14px;\n  }\n  .forecast {\n    display: flex;\n    flex-direction: column;\n  }\n  .box1,\n  .box2,\n  .box3 {\n    padding: 14px;\n  }\n  .box1 {\n    grid-template-rows: 1fr 8fr;\n  }\n}\n\n/*TABLETS*/\n@media (min-width: 768px) and (max-width: 991px) {\n  /* Styles for tablets in portrait orientation go here */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/Gilroy-Bold.ttf":
/*!***********************************!*\
  !*** ./src/fonts/Gilroy-Bold.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Gilroy-Bold-ca49f7658c4eaac78b6d.ttf";

/***/ }),

/***/ "./src/fonts/Gilroy-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Gilroy-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Gilroy-Regular-5b89a8df3b17dccdb73f.ttf";

/***/ }),

/***/ "./src/fonts/Gilroy-SemiBold.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Gilroy-SemiBold.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Gilroy-SemiBold-07b9100a72fe7d46d20a.ttf";

/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/background-f66d27fc0dac493b4b2f.jpg";

/***/ }),

/***/ "./src/img/github.png":
/*!****************************!*\
  !*** ./src/img/github.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/github-987334e9f782cc505f25.png";

/***/ }),

/***/ "./src/img/search-bold.svg":
/*!*********************************!*\
  !*** ./src/img/search-bold.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/search-bold-a154c4d515ecc1041fb5.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/search */ "./src/modules/search.js");


(0,_modules_search__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sT0FBTyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVks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V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDZ0I7QUFFNUMvRywyREFBWSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvc2VhcmNoLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlci1hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYWRkU2VhcmNoQnV0dG9uKHNlYXJjaEJ0bikge1xuICBzZWFyY2hCdG4uY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eS1hY3RpdmUnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVNlYXJjaEJ1dHRvbihzZWFyY2hCdG4pIHtcbiAgc2VhcmNoQnRuLmNsYXNzTGlzdC5hZGQoJ29wYWNpdHktYWN0aXZlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2l0aW9uRm9yZWNhc3QoKSB7XG4gIGNvbnN0IGZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0Jyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoJ29wYWNpdHktZm9yZWNhc3QnKTtcbiAgfSwgMTAwMCk7XG59XG4iLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSAnLi93ZWF0aGVyLWFwaSc7XG5pbXBvcnQgeyBhZGRTZWFyY2hCdXR0b24sIHJlbW92ZVNlYXJjaEJ1dHRvbiB9IGZyb20gJy4vZG9tJztcblxuY29uc3Qgc2VhcmNoRm9ybUluZGV4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEZvcm1JbmRleCcpO1xuY29uc3Qgc2VhcmNoQmFySW5kZXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoQmFySW5kZXgnKTtcbmNvbnN0IHNlYXJjaEJ0bkluZGV4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEJ0bkluZGV4Jyk7XG5cbmZ1bmN0aW9uIGhhbmRsZVNlYXJjaElucHV0KCkge1xuICBzZWFyY2hCYXJJbmRleC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBpZiAoc2VhcmNoQmFySW5kZXgudmFsdWUgIT09ICcnKSB7XG4gICAgICBhZGRTZWFyY2hCdXR0b24oc2VhcmNoQnRuSW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVTZWFyY2hCdXR0b24oc2VhcmNoQnRuSW5kZXgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldExvY2F0aW9uVmFsdWUoKSB7XG4gIGNvbnN0IGlucHV0VmFsdWUgPSBzZWFyY2hCYXJJbmRleC52YWx1ZTtcbiAgcmV0dXJuIGlucHV0VmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNlYXJjaFN1Ym1pdCgpIHtcbiAgc2VhcmNoRm9ybUluZGV4LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGdldFdlYXRoZXJEYXRhKGdldExvY2F0aW9uVmFsdWUoKSwgJ21ldHJpYycpXG4gICAgICAudGhlbigod2VhdGhlckRhdGEpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dlYXRoZXJEYXRhJywgSlNPTi5zdHJpbmdpZnkod2VhdGhlckRhdGEpKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi93ZWF0aGVyLmh0bWwnO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXZWF0aGVyRGF0YUVycm9yJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVTZWFyY2goKSB7XG4gIGhhbmRsZVNlYXJjaElucHV0KCk7XG4gIGhhbmRsZVNlYXJjaFN1Ym1pdCgpO1xufVxuIiwiZnVuY3Rpb24gbWFrZUNvb3JkaW5hdGVzVVJMKGNpdHkpIHtcbiAgcmV0dXJuIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mYXBwaWQ9MWY4OGYzNThiZDU0OWU0YmZjNWQzNWVkMDQ2NTY3MjNgO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaENvb3JkaW5hdGVzKHVybCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhdDogZGF0YVswXS5sYXQsXG4gICAgICBsb246IGRhdGFbMF0ubG9uLFxuICAgICAgbmFtZTogZGF0YVswXS5uYW1lLFxuICAgICAgc3RhdGU6IGRhdGFbMF0uc3RhdGUsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCBkYXRhOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZVdlYXRoZXJVUkwoY29vcmRpbmF0ZXMsIHVuaXRzKSB7XG4gIHJldHVybiBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7Y29vcmRpbmF0ZXMubGF0fSZsb249JHtjb29yZGluYXRlcy5sb259JmV4Y2x1ZGU9bWludXRlbHksYWxlcnRzJnVuaXRzPSR7dW5pdHN9JmFwcGlkPTIwZjc2MzJmZmMyYzAyMjY1NGU0MDkzYzY5NDdiNGY0YDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YSh1cmwpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoIGRhdGE6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShjaXR5LCB1bml0cykge1xuICBjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IGZldGNoQ29vcmRpbmF0ZXMobWFrZUNvb3JkaW5hdGVzVVJMKGNpdHkpKTtcbiAgY29uc3QgZmV0Y2hlZFdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGF0YShcbiAgICBtYWtlV2VhdGhlclVSTChjb29yZGluYXRlcywgdW5pdHMpLFxuICApO1xuICBmZXRjaGVkV2VhdGhlckRhdGEubmFtZSA9IGNvb3JkaW5hdGVzLm5hbWU7XG4gIGZldGNoZWRXZWF0aGVyRGF0YS5zdGF0ZSA9IGNvb3JkaW5hdGVzLnN0YXRlO1xuXG4gIHJldHVybiBmZXRjaGVkV2VhdGhlckRhdGE7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvR2lscm95LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvR2lscm95LVNlbWlCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0dpbHJveS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ltZy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltZy9zZWFyY2gtYm9sZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvZ2l0aHViLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95U2VtaUJvbGQnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95Qm9sZCc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG46cm9vdCB7XG4gIC0tcHJpbWFyeS1jb2xvcjogIzM2NzFmMTtcbiAgLS10ZXh0LWNvbG9yOiAjZmJmYmZiO1xuICAtLXRleHQtc2Vjb25kYXJ5LWNvbG9yOiAjM2QzZTRkO1xuICAtLWJhY2tncm91bmQtY29sb3I6ICMxOTFhMjI7XG4gIC0tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6ICMxYzFkMjc7XG4gIC0tYmFja2dyb3VuZC10ZXJ0aWFyeS1jb2xvcjogIzIyMjQzMTtcblxuICAtLXByaW1hcnktZm9udC1yZWd1bGFyOiAnR2lscm95Jywgc2Fucy1zZXJpZjtcbiAgLS1wcmltYXJ5LWZvbnQtc2VtaTogJ0dpbHJveVNlbWlCb2xkJywgc2Fucy1zZXJpZjtcbiAgLS1wcmltYXJ5LWZvbnQtYm9sZDogJ0dpbHJveUJvbGQnLCBzYW5zLXNlcmlmO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiA2LjI1JTtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMTZyZW07XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtcmVndWxhcik7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zZWFyY2gtYmFyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMyU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLndlbGNvbWUtcGFyYSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtYm9sZCkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAzOHJlbTtcbn1cblxuLndlbGNvbWUtdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cblxuLndlbGNvbWUtbG9nbyB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLnBhcmFncmFwaCB7XG4gIGZvbnQtc2l6ZTogMjJyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cblxuLmZvcm0taW5kZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZWFyY2gtYmFyLWluZGV4IHtcbiAgcGFkZGluZzogMTZweCAxOHB4O1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LWZhbWlseTogJ0dpbHJveVNlbWlCb2xkJyAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zZWFyY2gtYmFyLWluZGV4OmZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB3aWR0aDogNjMwcHg7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLm9wYWNpdHktYWN0aXZlIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zZWFyY2gtYnRuLWluZGV4IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcmlnaHQ6IDlweDtcbiAgdG9wOiA5cHg7XG4gIGJvdHRvbTogOXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmdpdGh1Yi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZ2l0aHViLXVzZXIge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxOHJlbTtcbn1cblxuLmdpdGh1YiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4vKkZvcmVjYXN0IENTUyovXG5cbi5mb3JlY2FzdC1jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweCAxMHB4O1xufVxuXG4uZm9yZWNhc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICBnYXA6IDI1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBvcGFjaXR5OiAwO1xufVxuXG4ub3BhY2l0eS1mb3JlY2FzdCB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQ7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5ib3gxLFxuLmJveDIsXG4uYm94MyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmJveDEge1xuICBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDE0ZnI7XG4gIGdhcDogMTNweDtcbn1cblxuLmJveDIge1xuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XG59XG5cbi5ib3gzIHtcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0yIC8gLTE7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ28tY29udGFpbmVyLWZvcmVjYXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeS1jb2xvcik7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlYXJjaC1iYXItZm9yZWNhc3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWFyY2gtYmFyLWZvcmVjYXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3lTZW1pQm9sZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNlYXJjaC1iYXItZm9yZWNhc3Q6Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnNlYXJjaC1idG4tZm9yZWNhc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHJpZ2h0OiA4cHg7XG4gIHRvcDogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgd2lkdGg6IDE3cHg7XG4gIGhlaWdodDogMTdweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jdXJyZW50LXdlYXRoZXItYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMzBweDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuXG4uY3VycmVudC10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIGZsZXg6IDE7XG59XG5cbi5jdXJyZW50LXRvcC1sZWZ0IHtcbiAgZmxleDogMjtcbn1cblxuLmN1cnJlbnQtYm90dG9tIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5cbi5sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMjByZW07XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtYm9sZCk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jbG9jayB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtYm9sZCk7XG4gIGZvbnQtc2l6ZTogMjByZW07XG59XG5cbi50ZW1wIHtcbiAgZm9udC1zaXplOiAxMDByZW07XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtYm9sZCk7XG59XG5cbi5taW4tbWF4LXRlbXAge1xuICBmb250LXNpemU6IDIwcmVtO1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250LWJvbGQpO1xufVxuXG4vKk1lZGlhIFF1ZXJpZXMqL1xuXG4vKlBIT05FUyovXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAuc2VhcmNoLWJhci1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDEwMCU7XG4gIH1cbiAgLmZvcm0taW5kZXgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zZWFyY2gtYmFyLWluZGV4IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIH1cbiAgLnNlYXJjaC1jb250YWluZXIge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICByaWdodDogNnB4O1xuICAgIHRvcDogNnB4O1xuICAgIGJvdHRvbTogNnB4O1xuICB9XG4gIC5zZWFyY2gtYmFyLWluZGV4OmZvY3VzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC53ZWxjb21lLXBhcmEge1xuICAgIGZvbnQtc2l6ZTogMjZyZW07XG4gIH1cbiAgLnBhcmFncmFwaCB7XG4gICAgZm9udC1zaXplOiAxNnJlbTtcbiAgfVxuICAuZm9yZWNhc3QtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNHB4O1xuICB9XG4gIC5mb3JlY2FzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5ib3gxLFxuICAuYm94MixcbiAgLmJveDMge1xuICAgIHBhZGRpbmc6IDE0cHg7XG4gIH1cbiAgLmJveDEge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcbiAgfVxufVxuXG4vKlRBQkxFVFMqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLyogU3R5bGVzIGZvciB0YWJsZXRzIGluIHBvcnRyYWl0IG9yaWVudGF0aW9uIGdvIGhlcmUgKi9cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFD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REFBa0Q7RUFDbEQsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsT0FBTztBQUNUOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFDQUFxQztFQUNyQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQ0FBcUM7QUFDdkM7O0FBRUEsZ0JBQWdCOztBQUVoQixTQUFTO0FBQ1Q7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLFFBQVE7SUFDUixXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7RUFDQTs7O0lBR0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSx1REFBdUQ7QUFDekRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICBzcmM6IHVybCguLi9mb250cy9HaWxyb3ktUmVndWxhci50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnR2lscm95U2VtaUJvbGQnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvR2lscm95LVNlbWlCb2xkLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3lCb2xkJztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL0dpbHJveS1Cb2xkLnR0Zik7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzM2NzFmMTtcXG4gIC0tdGV4dC1jb2xvcjogI2ZiZmJmYjtcXG4gIC0tdGV4dC1zZWNvbmRhcnktY29sb3I6ICMzZDNlNGQ7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICMxOTFhMjI7XFxuICAtLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiAjMWMxZDI3O1xcbiAgLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5LWNvbG9yOiAjMjIyNDMxO1xcblxcbiAgLS1wcmltYXJ5LWZvbnQtcmVndWxhcjogJ0dpbHJveScsIHNhbnMtc2VyaWY7XFxuICAtLXByaW1hcnktZm9udC1zZW1pOiAnR2lscm95U2VtaUJvbGQnLCBzYW5zLXNlcmlmO1xcbiAgLS1wcmltYXJ5LWZvbnQtYm9sZDogJ0dpbHJveUJvbGQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNi4yNSU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxNnJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtcmVndWxhcik7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHVybCguLi9pbWcvYmFja2dyb3VuZC5qcGcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc2VhcmNoLWJhci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMyU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuLndlbGNvbWUtcGFyYSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250LWJvbGQpICFpbXBvcnRhbnQ7XFxuICBmb250LXNpemU6IDM4cmVtO1xcbn1cXG5cXG4ud2VsY29tZS10ZXh0IHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLndlbGNvbWUtbG9nbyB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wYXJhZ3JhcGgge1xcbiAgZm9udC1zaXplOiAyMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMHB4O1xcbn1cXG5cXG4uZm9ybS1pbmRleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlYXJjaC1iYXItaW5kZXgge1xcbiAgcGFkZGluZzogMTZweCAxOHB4O1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiAnR2lscm95U2VtaUJvbGQnICFpbXBvcnRhbnQ7XFxuICBmb250LXNpemU6IDE2cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnNlYXJjaC1iYXItaW5kZXg6Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB3aWR0aDogNjMwcHg7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL3NlYXJjaC1ib2xkLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ub3BhY2l0eS1hY3RpdmUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWJ0bi1pbmRleCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgd2lkdGg6IDM0cHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICByaWdodDogOXB4O1xcbiAgdG9wOiA5cHg7XFxuICBib3R0b206IDlweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZ2l0aHViLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmdpdGh1Yi11c2VyIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMThyZW07XFxufVxcblxcbi5naXRodWIge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2dpdGh1Yi5wbmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuXFxuLypGb3JlY2FzdCBDU1MqL1xcblxcbi5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNDBweCAxMHB4O1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ2FwOiAyNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5vcGFjaXR5LWZvcmVjYXN0IHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uYm94MSxcXG4uYm94MixcXG4uYm94MyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmJveDEge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDE0ZnI7XFxuICBnYXA6IDEzcHg7XFxufVxcblxcbi5ib3gyIHtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG59XFxuXFxuLmJveDMge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0yIC8gLTE7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxM3B4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXItZm9yZWNhc3Qge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeS1jb2xvcik7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1iYXItZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1iYXItZm9yZWNhc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDE0cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtZmFtaWx5OiAnR2lscm95U2VtaUJvbGQnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlYXJjaC1iYXItZm9yZWNhc3Q6Zm9jdXMge1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uc2VhcmNoLWJ0bi1mb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcmlnaHQ6IDhweDtcXG4gIHRvcDogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2VhcmNoLWljb24ge1xcbiAgd2lkdGg6IDE3cHg7XFxuICBoZWlnaHQ6IDE3cHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvc2VhcmNoLWJvbGQuc3ZnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItYm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnktY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uY3VycmVudC10b3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5jdXJyZW50LXRvcC1sZWZ0IHtcXG4gIGZsZXg6IDI7XFxufVxcblxcbi5jdXJyZW50LWJvdHRvbSB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMjByZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250LWJvbGQpO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNsb2NrIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtYm9sZCk7XFxuICBmb250LXNpemU6IDIwcmVtO1xcbn1cXG5cXG4udGVtcCB7XFxuICBmb250LXNpemU6IDEwMHJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtYm9sZCk7XFxufVxcblxcbi5taW4tbWF4LXRlbXAge1xcbiAgZm9udC1zaXplOiAyMHJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtYm9sZCk7XFxufVxcblxcbi8qTWVkaWEgUXVlcmllcyovXFxuXFxuLypQSE9ORVMqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICAuc2VhcmNoLWJhci1jb250YWluZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDAlO1xcbiAgfVxcbiAgLmZvcm0taW5kZXgge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5zZWFyY2gtYmFyLWluZGV4IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEycHggMTRweDtcXG4gIH1cXG4gIC5zZWFyY2gtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDMycHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgcmlnaHQ6IDZweDtcXG4gICAgdG9wOiA2cHg7XFxuICAgIGJvdHRvbTogNnB4O1xcbiAgfVxcbiAgLnNlYXJjaC1iYXItaW5kZXg6Zm9jdXMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC53ZWxjb21lLXBhcmEge1xcbiAgICBmb250LXNpemU6IDI2cmVtO1xcbiAgfVxcbiAgLnBhcmFncmFwaCB7XFxuICAgIGZvbnQtc2l6ZTogMTZyZW07XFxuICB9XFxuICAuZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMTRweDtcXG4gIH1cXG4gIC5mb3JlY2FzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuYm94MSxcXG4gIC5ib3gyLFxcbiAgLmJveDMge1xcbiAgICBwYWRkaW5nOiAxNHB4O1xcbiAgfVxcbiAgLmJveDEge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XFxuICB9XFxufVxcblxcbi8qVEFCTEVUUyovXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gIC8qIFN0eWxlcyBmb3IgdGFibGV0cyBpbiBwb3J0cmFpdCBvcmllbnRhdGlvbiBnbyBoZXJlICovXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0IGhhbmRsZVNlYXJjaCBmcm9tICcuL21vZHVsZXMvc2VhcmNoJztcblxuaGFuZGxlU2VhcmNoKCk7XG4iXSwibmFtZXMiOlsiYWRkU2VhcmNoQnV0dG9uIiwic2VhcmNoQnRuIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwicmVtb3ZlU2VhcmNoQnV0dG9uIiwiYWRkIiwidHJhbnNpdGlvbkZvcmVjYXN0IiwiZm9yZWNhc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRUaW1lb3V0IiwiZ2V0V2VhdGhlckRhdGEiLCJzZWFyY2hGb3JtSW5kZXgiLCJnZXRFbGVtZW50QnlJZCIsInNlYXJjaEJhckluZGV4Iiwic2VhcmNoQnRuSW5kZXgiLCJoYW5kbGVTZWFyY2hJbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsImdldExvY2F0aW9uVmFsdWUiLCJpbnB1dFZhbHVlIiwidHJpbSIsInRvTG93ZXJDYXNlIiwiaGFuZGxlU2VhcmNoU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGhlbiIsIndlYXRoZXJEYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsIkVycm9yIiwiaGFuZGxlU2VhcmNoIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiaW5mbyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwibWFrZUNvb3JkaW5hdGVzVVJMIiwiY2l0eSIsImNvbmNhdCIsImZldGNoQ29vcmRpbmF0ZXMiLCJfeCIsIl9mZXRjaENvb3JkaW5hdGVzIiwiX2NhbGxlZSIsInVybCIsInJlc3BvbnNlIiwiZGF0YSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJmZXRjaCIsIm1vZGUiLCJvayIsImpzb24iLCJsYXQiLCJsb24iLCJzdGF0ZSIsInQwIiwibWVzc2FnZSIsIm1ha2VXZWF0aGVyVVJMIiwiY29vcmRpbmF0ZXMiLCJ1bml0cyIsImZldGNoV2VhdGhlckRhdGEiLCJfeDIiLCJfZmV0Y2hXZWF0aGVyRGF0YSIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiX3gzIiwiX3g0IiwiX2dldFdlYXRoZXJEYXRhIiwiX2NhbGxlZTMiLCJmZXRjaGVkV2VhdGhlckRhdGEiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiXSwic291cmNlUm9vdCI6IiJ9
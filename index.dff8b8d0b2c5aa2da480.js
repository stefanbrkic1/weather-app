/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

var searchFormIndex = document.getElementById('searchFormIndex');
var searchBarIndex = document.getElementById('searchBarIndex');
function getLocationValue() {
  var inputValue = searchBarIndex.value;
  return inputValue.trim().toLowerCase();
}
function handleSearch() {
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

/***/ }),

/***/ "./src/modules/weather-api.js":
/*!************************************!*\
  !*** ./src/modules/weather-api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeatherData),
/* harmony export */   fetchCoordinates: () => (/* binding */ fetchCoordinates)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function makeCoordinatesURL(city) {
  return "https://api.openweathermap.org/geo/1.0/direct?q=".concat(city, "&appid=1f88f358bd549e4bfc5d35ed04656723");
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
function fetchCountryData(_x3) {
  return _fetchCountryData.apply(this, arguments);
}
function _fetchCountryData() {
  _fetchCountryData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(coordinates) {
    var url, response, data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          url = "https://nominatim.openstreetmap.org/reverse?format=json&lat=".concat(coordinates.lat, "&lon=").concat(coordinates.lon);
          _context3.prev = 1;
          _context3.next = 4;
          return fetch(url, {
            mode: 'cors'
          });
        case 4:
          response = _context3.sent;
          if (response.ok) {
            _context3.next = 7;
            break;
          }
          throw new Error('Network response was not ok');
        case 7:
          _context3.next = 9;
          return response.json();
        case 9:
          data = _context3.sent;
          return _context3.abrupt("return", data);
        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](1);
          throw new Error("Failed to fetch data: ".concat(_context3.t0.message));
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 13]]);
  }));
  return _fetchCountryData.apply(this, arguments);
}
function getLocalTime(weatherData) {
  var timezone = weatherData.timezone;
  var currentUtcTime = new Date();
  var localTime = new Date(currentUtcTime.toLocaleString('en-US', {
    timeZone: timezone,
    hour12: false
  }));
  var hours = localTime.getHours().toString().padStart(2, '0');
  var minutes = localTime.getMinutes().toString().padStart(2, '0');
  var formattedTime = "".concat(hours, ":").concat(minutes);
  return formattedTime;
}
function getWeatherDescriptions(fetchedWeatherData) {
  var weatherDescriptions = [];
  for (var i = 0; i < 6; i += 1) {
    weatherDescriptions.push(fetchedWeatherData.daily[i].weather[0].description);
  }
  return weatherDescriptions;
}
function getWeatherData(_x4, _x5) {
  return _getWeatherData.apply(this, arguments);
}
function _getWeatherData() {
  _getWeatherData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(city, units) {
    var coordinates, countryData, fetchedWeatherData;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return fetchCoordinates(makeCoordinatesURL(city));
        case 2:
          coordinates = _context4.sent;
          _context4.next = 5;
          return fetchCountryData(coordinates);
        case 5:
          countryData = _context4.sent;
          _context4.next = 8;
          return fetchWeatherData(makeWeatherURL(coordinates, units));
        case 8:
          fetchedWeatherData = _context4.sent;
          fetchedWeatherData.name = coordinates.name;
          fetchedWeatherData.state = coordinates.state;
          fetchedWeatherData.localTime = getLocalTime(fetchedWeatherData);
          fetchedWeatherData.country = countryData.address.country;
          fetchedWeatherData.weatherDescriptions = getWeatherDescriptions(fetchedWeatherData);
          return _context4.abrupt("return", fetchedWeatherData);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
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
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/search-bold.svg */ "./src/img/icons/search-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/github.png */ "./src/img/icons/github.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/thermal.svg */ "./src/img/icons/thermal.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/rain.svg */ "./src/img/icons/rain.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/wind.svg */ "./src/img/icons/wind.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/humidity.svg */ "./src/img/icons/humidity.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/sun.svg */ "./src/img/icons/sun.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
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
  --text-secondary-color: #bfbfd4;
  --text-tertiary-color: #7f7f98;

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
  display: flex;
  background: var(--background-color);
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
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  transition: all 200ms ease-in-out;
}

.opacity-active {
  opacity: 0 !important;
  pointer-events: none !important;
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
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 200ms ease-in-out;
  top: 50%;
  right: 0px;
  transform: translate(-30%, -50%);
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
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
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
  overflow-y: auto;
  justify-content: center;
  align-items: center;
  padding: 60px 10px;
}

.forecast {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 22px;
  width: 100%;
  height: 100%;
  max-width: 1300px;
  max-height: 700px;
  min-height: 700px;
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
}

.box1 {
  grid-area: 1 / 1 / 3 / 2;
  display: grid;
  grid-template-rows: 1fr 14fr;
  gap: 13px;
  padding: 20rem;
}

.box2 {
  grid-area: 1 / 2 / 2 / 3;
  padding: 25rem 25rem 15rem 25rem;
}

.box3 {
  grid-area: 2 / 2 / -2 / -1;
  padding: 25rem;
  position: relative;
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
  padding: 18px;
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
  padding: 15px;
  background: var(--background-tertiary-color);
  border-radius: 8px;
  font-family: 'GilroySemiBold', sans-serif;
  font-size: 18rem;
  position: relative;
  color: var(--text-tertiary-color);
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
  width: 37px;
  height: 37px;
  border-radius: 8px;
  cursor: pointer;
  right: 8px;
  transition: all 200ms ease-in-out;
}

.search-btn-forecast:hover {
  background: #3474ff;
  transform: scale(1.1);
}

.search-icon {
  width: 17px;
  height: 17px;
  background: transparent;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  transition: all 200ms ease-in-out;
}

.current-weather-box {
  position: relative;
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
  font-size: 22rem;
  font-family: var(--primary-font-bold);
  margin-bottom: 10px;
}

.clock {
  font-family: var(--primary-font-bold);
  font-size: 25rem;
}

.temp {
  font-size: 100rem;
  font-family: var(--primary-font-bold);
}

.min-max-temp {
  font-size: 20rem;
  font-family: var(--primary-font-bold);
}

.temp-flex {
  display: flex;
  gap: 5px;
}

.box-header {
  font-family: var(--primary-font-semi);
  color: var(--text-tertiary-color);
  font-size: 16rem;
}

.weather-details {
  list-style-type: none;
  color: var(--text-secondary-color);
  font-family: var(--primary-font-semi);
  font-size: 14rem;
  margin-top: 15px;
}

.weather-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
}

.border-bottom {
  border-bottom: 1px solid #232431;
}

.detail-icon {
  width: 36rem;
  height: 36rem;
  opacity: 0.25;
}

#thermalSensationIcon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
  background-repeat: no-repeat;
  background-size: contain;
}

#rainProbabilityIcon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
  background-repeat: no-repeat;
  background-size: contain;
}

#windSpeedIcon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
  background-repeat: no-repeat;
  background-size: contain;
}

#airHumidityIcon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
  background-repeat: no-repeat;
  background-size: contain;
}

#uvIndexIcon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
  background-repeat: no-repeat;
  background-size: contain;
}

.detail-left {
  display: flex;
  align-items: center;
  gap: 22px;
}

.detail-data {
  font-family: var(--primary-font-bold);
  font-size: 16rem;
}

.forecast-daily {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  padding: 25rem 0rem;
  font-family: var(--primary-font-semi);
  color: var(--text-secondary-color);
  font-size: 14rem;
}

.day-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18rem;
}

.day-forecast {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  position: relative;
}

.day-flex {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.day {
  font-family: var(--primary-font-bold) !important;
}

.min-max-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: var(--primary-font-bold);
}

.day-absolute {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
}

.weather-image {
  width: 80rem;
  height: 80rem;
  background-repeat: no-repeat !important;
  background-size: contain !important;
  background-position: center !important;
}

.day-min {
  color: var(--text-tertiary-color);
}

.current-weather-icon {
  position: absolute;
  width: 220rem;
  height: 220rem;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: contain !important;
  bottom: 30px;
  right: 30px;
}

.date {
  font-family: var(--primary-font-semi);
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
    width: 32rem;
    height: 32rem;
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
    display: block;
    padding: 15px;
  }
  .forecast {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .forecast-daily {
    font-size: 16rem;
    padding: 0rem;
    height: 87%;
  }

  .box1 {
    grid-template-rows: 1fr 6fr;
    padding: 14rem;
  }

  .box2 {
    padding: 25rem 20rem;
  }

  .box3 {
    padding: 0rem 20rem;
    min-height: 250rem;
  }
  .location {
    font-size: 18rem;
  }
  .date {
    font-size: 14rem;
  }
  .clock {
    font-size: 18rem;
  }
  .temp {
    font-size: 60rem;
  }
  .min-max-temp {
    font-size: 18rem;
  }
  .min-max-container {
    flex-direction: column;
  }
  .day-absolute {
    top: 40%;
    left: 50%;
    transform: translate(-50%, -45%);
  }
  .current-weather-box {
    padding: 15px;
  }
  .current-weather-icon {
    bottom: 0px;
    right: 0px;
    width: 150rem;
    height: 150rem;
  }
  .search-container {
    width: 20rem;
    height: 20rem;
  }
  .search-btn-index {
    border-radius: 0px;
    width: 53px;
    height: 47px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    transform: translate(-0%, -50%);
  }
  .weather-image {
    width: 68rem;
    height: 68rem;
  }
  .day-bottom {
    gap: 25rem;
  }
  .weather-description {
    display: none;
  }
  .logo-container-forecast {
    display: none;
  }
  .day-forecast {
    height: 70%;
    margin-bottom: 17px;
  }
  .padding-top {
    padding-top: 25rem;
  }
  .detail-icon {
    width: 32rem;
    height: 32rem;
  }
}

/*TABLETS*/
@media (min-width: 768px) and (max-width: 991px) {
  /* Styles for tablets in portrait orientation go here */
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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,aAAa;EACf;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;EACX;;EAEA;IACE,gBAAgB;IAChB,aAAa;IACb,WAAW;EACb;;EAEA;IACE,2BAA2B;IAC3B,cAAc;EAChB;;EAEA;IACE,oBAAoB;EACtB;;EAEA;IACE,mBAAmB;IACnB,kBAAkB;EACpB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,QAAQ;IACR,SAAS;IACT,gCAAgC;EAClC;EACA;IACE,aAAa;EACf;EACA;IACE,WAAW;IACX,UAAU;IACV,aAAa;IACb,cAAc;EAChB;EACA;IACE,YAAY;IACZ,aAAa;EACf;EACA;IACE,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,+BAA+B;IAC/B,+BAA+B;EACjC;EACA;IACE,YAAY;IACZ,aAAa;EACf;EACA;IACE,UAAU;EACZ;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,WAAW;IACX,mBAAmB;EACrB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,YAAY;IACZ,aAAa;EACf;AACF;;AAEA,UAAU;AACV;EACE,uDAAuD;AACzD","sourcesContent":["@font-face {\n  font-family: 'Gilroy';\n  src: url(../fonts/Gilroy-Regular.ttf);\n}\n\n@font-face {\n  font-family: 'GilroySemiBold';\n  src: url(../fonts/Gilroy-SemiBold.ttf);\n}\n\n@font-face {\n  font-family: 'GilroyBold';\n  src: url(../fonts/Gilroy-Bold.ttf);\n}\n\n:root {\n  --primary-color: #3671f1;\n\n  --text-color: #fbfbfb;\n  --text-secondary-color: #bfbfd4;\n  --text-tertiary-color: #7f7f98;\n\n  --background-color: #191a22;\n  --background-secondary-color: #1c1d27;\n  --background-tertiary-color: #222431;\n\n  --primary-font-regular: 'Gilroy', sans-serif;\n  --primary-font-semi: 'GilroySemiBold', sans-serif;\n  --primary-font-bold: 'GilroyBold', sans-serif;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 6.25%;\n}\n\nbody {\n  font-size: 16rem;\n  font-family: var(--primary-font-regular);\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  background: var(--background-color);\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.search-bar-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 13%;\n  position: relative;\n}\n\n.logo-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-color);\n  margin-top: 15px;\n}\n\n.welcome-para {\n  font-family: var(--primary-font-bold) !important;\n  font-size: 38rem;\n}\n\n.welcome-text {\n  color: var(--text-color);\n}\n\n.welcome-logo {\n  color: var(--primary-color);\n}\n\n.paragraph {\n  font-size: 22rem;\n  color: var(--text-secondary-color);\n  text-align: center;\n  margin: 10px 0px;\n}\n\n.form-index {\n  display: flex;\n  margin-top: 15px;\n  position: relative;\n}\n\n.search-bar-index {\n  padding: 16px 18px;\n  appearance: none;\n  border: none;\n  outline: none;\n  background: var(--background-secondary-color);\n  color: var(--text-secondary-color);\n  width: 600px;\n  border-radius: 10px;\n  font-family: 'GilroySemiBold' !important;\n  font-size: 16rem;\n  border: 1px solid var(--text-color);\n  transition: width 300ms ease-in-out;\n}\n\n.search-bar-index:focus {\n  border: 1px solid var(--primary-color);\n  color: var(--text-color);\n  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);\n  width: 630px;\n}\n\n.search-container {\n  width: 20px;\n  height: 20px;\n  background: transparent;\n  background-image: url(../img/icons/search-bold.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n  cursor: pointer;\n  transition: all 200ms ease-in-out;\n}\n\n.opacity-active {\n  opacity: 0 !important;\n  pointer-events: none !important;\n}\n\n.search-btn-index {\n  position: absolute;\n  appearance: none;\n  outline: none;\n  border: none;\n  background: var(--primary-color);\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: opacity 200ms ease-in-out;\n  top: 50%;\n  right: 0px;\n  transform: translate(-30%, -50%);\n}\n\n.github-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 15px;\n}\n\n.github-user {\n  color: var(--text-color);\n  text-decoration: none;\n  font-size: 18rem;\n}\n\n.github {\n  width: 25px;\n  height: 25px;\n  background-image: url(../img/icons/github.png);\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n/*Forecast CSS*/\n\n.forecast-container {\n  width: 100vw;\n  height: 100vh;\n  background: var(--background-color);\n  position: relative;\n  display: flex;\n  overflow-y: auto;\n  justify-content: center;\n  align-items: center;\n  padding: 60px 10px;\n}\n\n.forecast {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 22px;\n  width: 100%;\n  height: 100%;\n  max-width: 1300px;\n  max-height: 700px;\n  min-height: 700px;\n  opacity: 0;\n}\n\n.opacity-forecast {\n  transition: opacity 300ms ease-in-out;\n  opacity: 1;\n}\n\n.box1,\n.box2,\n.box3 {\n  background: var(--background-secondary-color);\n  border-radius: 12px;\n}\n\n.box1 {\n  grid-area: 1 / 1 / 3 / 2;\n  display: grid;\n  grid-template-rows: 1fr 14fr;\n  gap: 13px;\n  padding: 20rem;\n}\n\n.box2 {\n  grid-area: 1 / 2 / 2 / 3;\n  padding: 25rem 25rem 15rem 25rem;\n}\n\n.box3 {\n  grid-area: 2 / 2 / -2 / -1;\n  padding: 25rem;\n  position: relative;\n}\n\n.flex {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 13px;\n  position: relative;\n}\n\n.logo-container-forecast {\n  background: var(--background-tertiary-color);\n  padding: 18px;\n  border-radius: 8px;\n  color: var(--text-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search-bar-forecast-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search-bar-forecast {\n  width: 100%;\n  appearance: none;\n  outline: none;\n  border: none;\n  padding: 15px;\n  background: var(--background-tertiary-color);\n  border-radius: 8px;\n  font-family: 'GilroySemiBold', sans-serif;\n  font-size: 18rem;\n  position: relative;\n  color: var(--text-tertiary-color);\n}\n\n.search-bar-forecast:focus {\n  color: var(--text-color);\n  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);\n}\n\n.search-btn-forecast {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  appearance: none;\n  outline: none;\n  border: none;\n  position: absolute;\n  background: var(--primary-color);\n  width: 37px;\n  height: 37px;\n  border-radius: 8px;\n  cursor: pointer;\n  right: 8px;\n  transition: all 200ms ease-in-out;\n}\n\n.search-btn-forecast:hover {\n  background: #3474ff;\n  transform: scale(1.1);\n}\n\n.search-icon {\n  width: 17px;\n  height: 17px;\n  background: transparent;\n  background-image: url(../img/icons/search-bold.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n  cursor: pointer;\n  transition: all 200ms ease-in-out;\n  cursor: pointer;\n  transition: all 200ms ease-in-out;\n}\n\n.current-weather-box {\n  position: relative;\n  background-color: var(--background-tertiary-color);\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  color: var(--text-color);\n}\n\n.current-top {\n  display: flex;\n  gap: 10px;\n  flex: 1;\n}\n\n.current-top-left {\n  flex: 2;\n}\n\n.current-bottom {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n}\n\n.location {\n  font-size: 22rem;\n  font-family: var(--primary-font-bold);\n  margin-bottom: 10px;\n}\n\n.clock {\n  font-family: var(--primary-font-bold);\n  font-size: 25rem;\n}\n\n.temp {\n  font-size: 100rem;\n  font-family: var(--primary-font-bold);\n}\n\n.min-max-temp {\n  font-size: 20rem;\n  font-family: var(--primary-font-bold);\n}\n\n.temp-flex {\n  display: flex;\n  gap: 5px;\n}\n\n.box-header {\n  font-family: var(--primary-font-semi);\n  color: var(--text-tertiary-color);\n  font-size: 16rem;\n}\n\n.weather-details {\n  list-style-type: none;\n  color: var(--text-secondary-color);\n  font-family: var(--primary-font-semi);\n  font-size: 14rem;\n  margin-top: 15px;\n}\n\n.weather-detail {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 0px;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #232431;\n}\n\n.detail-icon {\n  width: 36rem;\n  height: 36rem;\n  opacity: 0.25;\n}\n\n#thermalSensationIcon {\n  background: url(../img/icons/thermal.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n#rainProbabilityIcon {\n  background: url(../img/icons/rain.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n#windSpeedIcon {\n  background: url(../img/icons/wind.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n#airHumidityIcon {\n  background: url(../img/icons/humidity.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n#uvIndexIcon {\n  background: url(../img/icons/sun.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.detail-left {\n  display: flex;\n  align-items: center;\n  gap: 22px;\n}\n\n.detail-data {\n  font-family: var(--primary-font-bold);\n  font-size: 16rem;\n}\n\n.forecast-daily {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  position: relative;\n  padding: 25rem 0rem;\n  font-family: var(--primary-font-semi);\n  color: var(--text-secondary-color);\n  font-size: 14rem;\n}\n\n.day-bottom {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 18rem;\n}\n\n.day-forecast {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  flex: 1;\n  position: relative;\n}\n\n.day-flex {\n  flex: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.day {\n  font-family: var(--primary-font-bold) !important;\n}\n\n.min-max-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-family: var(--primary-font-bold);\n}\n\n.day-absolute {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -60%);\n}\n\n.weather-image {\n  width: 80rem;\n  height: 80rem;\n  background-repeat: no-repeat !important;\n  background-size: contain !important;\n  background-position: center !important;\n}\n\n.day-min {\n  color: var(--text-tertiary-color);\n}\n\n.current-weather-icon {\n  position: absolute;\n  width: 220rem;\n  height: 220rem;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n  background-size: contain !important;\n  bottom: 30px;\n  right: 30px;\n}\n\n.date {\n  font-family: var(--primary-font-semi);\n}\n\n/*Media Queries*/\n\n/*PHONES*/\n@media (max-width: 767px) {\n  .container {\n    padding: 10px;\n  }\n  .search-bar-container {\n    margin-bottom: 100%;\n  }\n  .form-index {\n    width: 100%;\n  }\n  .search-bar-index {\n    width: 100%;\n    padding: 12px 14px;\n  }\n  .search-container {\n    width: 32rem;\n    height: 32rem;\n  }\n  .search-bar-index:focus {\n    width: 100%;\n  }\n\n  .welcome-para {\n    font-size: 26rem;\n  }\n  .paragraph {\n    font-size: 16rem;\n  }\n  .forecast-container {\n    display: block;\n    padding: 15px;\n  }\n  .forecast {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n  }\n\n  .forecast-daily {\n    font-size: 16rem;\n    padding: 0rem;\n    height: 87%;\n  }\n\n  .box1 {\n    grid-template-rows: 1fr 6fr;\n    padding: 14rem;\n  }\n\n  .box2 {\n    padding: 25rem 20rem;\n  }\n\n  .box3 {\n    padding: 0rem 20rem;\n    min-height: 250rem;\n  }\n  .location {\n    font-size: 18rem;\n  }\n  .date {\n    font-size: 14rem;\n  }\n  .clock {\n    font-size: 18rem;\n  }\n  .temp {\n    font-size: 60rem;\n  }\n  .min-max-temp {\n    font-size: 18rem;\n  }\n  .min-max-container {\n    flex-direction: column;\n  }\n  .day-absolute {\n    top: 40%;\n    left: 50%;\n    transform: translate(-50%, -45%);\n  }\n  .current-weather-box {\n    padding: 15px;\n  }\n  .current-weather-icon {\n    bottom: 0px;\n    right: 0px;\n    width: 150rem;\n    height: 150rem;\n  }\n  .search-container {\n    width: 20rem;\n    height: 20rem;\n  }\n  .search-btn-index {\n    border-radius: 0px;\n    width: 53px;\n    height: 47px;\n    border-top-right-radius: 8px;\n    border-bottom-right-radius: 8px;\n    transform: translate(-0%, -50%);\n  }\n  .weather-image {\n    width: 68rem;\n    height: 68rem;\n  }\n  .day-bottom {\n    gap: 25rem;\n  }\n  .weather-description {\n    display: none;\n  }\n  .logo-container-forecast {\n    display: none;\n  }\n  .day-forecast {\n    height: 70%;\n    margin-bottom: 17px;\n  }\n  .padding-top {\n    padding-top: 25rem;\n  }\n  .detail-icon {\n    width: 32rem;\n    height: 32rem;\n  }\n}\n\n/*TABLETS*/\n@media (min-width: 768px) and (max-width: 991px) {\n  /* Styles for tablets in portrait orientation go here */\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/img/icons/github.png":
/*!**********************************!*\
  !*** ./src/img/icons/github.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/github-987334e9f782cc505f25.png";

/***/ }),

/***/ "./src/img/icons/humidity.svg":
/*!************************************!*\
  !*** ./src/img/icons/humidity.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/humidity-d796fb76215ede43da1b.svg";

/***/ }),

/***/ "./src/img/icons/rain.svg":
/*!********************************!*\
  !*** ./src/img/icons/rain.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/rain-3f61fa08d39a50fe2eed.svg";

/***/ }),

/***/ "./src/img/icons/search-bold.svg":
/*!***************************************!*\
  !*** ./src/img/icons/search-bold.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/search-bold-a154c4d515ecc1041fb5.svg";

/***/ }),

/***/ "./src/img/icons/sun.svg":
/*!*******************************!*\
  !*** ./src/img/icons/sun.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/sun-83fef6001234ff44e1fb.svg";

/***/ }),

/***/ "./src/img/icons/thermal.svg":
/*!***********************************!*\
  !*** ./src/img/icons/thermal.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/thermal-b73d57d8fd1ef85d10d4.svg";

/***/ }),

/***/ "./src/img/icons/wind.svg":
/*!********************************!*\
  !*** ./src/img/icons/wind.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/wind-6b21b7b927c648060147.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVGQUF1RixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLFdBQVcsS0FB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QUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ2dCO0FBRTVDN0gsMkRBQVksQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXItYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gJy4vd2VhdGhlci1hcGknO1xuXG5jb25zdCBzZWFyY2hGb3JtSW5kZXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoRm9ybUluZGV4Jyk7XG5jb25zdCBzZWFyY2hCYXJJbmRleCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCYXJJbmRleCcpO1xuXG5mdW5jdGlvbiBnZXRMb2NhdGlvblZhbHVlKCkge1xuICBjb25zdCBpbnB1dFZhbHVlID0gc2VhcmNoQmFySW5kZXgudmFsdWU7XG4gIHJldHVybiBpbnB1dFZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVTZWFyY2goKSB7XG4gIHNlYXJjaEZvcm1JbmRleC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBnZXRXZWF0aGVyRGF0YShnZXRMb2NhdGlvblZhbHVlKCksICdtZXRyaWMnKVxuICAgICAgLnRoZW4oKHdlYXRoZXJEYXRhKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3ZWF0aGVyRGF0YScsIEpTT04uc3RyaW5naWZ5KHdlYXRoZXJEYXRhKSk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vd2VhdGhlci5odG1sJztcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignV2VhdGhlckRhdGFFcnJvcicsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9KTtcbn1cbiIsImZ1bmN0aW9uIG1ha2VDb29yZGluYXRlc1VSTChjaXR5KSB7XG4gIHJldHVybiBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5fSZhcHBpZD0xZjg4ZjM1OGJkNTQ5ZTRiZmM1ZDM1ZWQwNDY1NjcyM2A7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaENvb3JkaW5hdGVzKHVybCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhdDogZGF0YVswXS5sYXQsXG4gICAgICBsb246IGRhdGFbMF0ubG9uLFxuICAgICAgbmFtZTogZGF0YVswXS5uYW1lLFxuICAgICAgc3RhdGU6IGRhdGFbMF0uc3RhdGUsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCBkYXRhOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZVdlYXRoZXJVUkwoY29vcmRpbmF0ZXMsIHVuaXRzKSB7XG4gIHJldHVybiBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7Y29vcmRpbmF0ZXMubGF0fSZsb249JHtjb29yZGluYXRlcy5sb259JmV4Y2x1ZGU9bWludXRlbHksYWxlcnRzJnVuaXRzPSR7dW5pdHN9JmFwcGlkPTIwZjc2MzJmZmMyYzAyMjY1NGU0MDkzYzY5NDdiNGY0YDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YSh1cmwpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoIGRhdGE6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaENvdW50cnlEYXRhKGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL25vbWluYXRpbS5vcGVuc3RyZWV0bWFwLm9yZy9yZXZlcnNlP2Zvcm1hdD1qc29uJmxhdD0ke2Nvb3JkaW5hdGVzLmxhdH0mbG9uPSR7Y29vcmRpbmF0ZXMubG9ufWA7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCBkYXRhOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TG9jYWxUaW1lKHdlYXRoZXJEYXRhKSB7XG4gIGNvbnN0IHsgdGltZXpvbmUgfSA9IHdlYXRoZXJEYXRhO1xuICBjb25zdCBjdXJyZW50VXRjVGltZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGxvY2FsVGltZSA9IG5ldyBEYXRlKFxuICAgIGN1cnJlbnRVdGNUaW1lLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcbiAgICAgIHRpbWVab25lOiB0aW1lem9uZSxcbiAgICAgIGhvdXIxMjogZmFsc2UsXG4gICAgfSksXG4gICk7XG5cbiAgY29uc3QgaG91cnMgPSBsb2NhbFRpbWUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBsb2NhbFRpbWUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcblxuICByZXR1cm4gZm9ybWF0dGVkVGltZTtcbn1cblxuZnVuY3Rpb24gZ2V0V2VhdGhlckRlc2NyaXB0aW9ucyhmZXRjaGVkV2VhdGhlckRhdGEpIHtcbiAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9ucyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkgKz0gMSkge1xuICAgIHdlYXRoZXJEZXNjcmlwdGlvbnMucHVzaChcbiAgICAgIGZldGNoZWRXZWF0aGVyRGF0YS5kYWlseVtpXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHdlYXRoZXJEZXNjcmlwdGlvbnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGNpdHksIHVuaXRzKSB7XG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gYXdhaXQgZmV0Y2hDb29yZGluYXRlcyhtYWtlQ29vcmRpbmF0ZXNVUkwoY2l0eSkpO1xuICBjb25zdCBjb3VudHJ5RGF0YSA9IGF3YWl0IGZldGNoQ291bnRyeURhdGEoY29vcmRpbmF0ZXMpO1xuICBjb25zdCBmZXRjaGVkV2VhdGhlckRhdGEgPSBhd2FpdCBmZXRjaFdlYXRoZXJEYXRhKFxuICAgIG1ha2VXZWF0aGVyVVJMKGNvb3JkaW5hdGVzLCB1bml0cyksXG4gICk7XG4gIGZldGNoZWRXZWF0aGVyRGF0YS5uYW1lID0gY29vcmRpbmF0ZXMubmFtZTtcbiAgZmV0Y2hlZFdlYXRoZXJEYXRhLnN0YXRlID0gY29vcmRpbmF0ZXMuc3RhdGU7XG4gIGZldGNoZWRXZWF0aGVyRGF0YS5sb2NhbFRpbWUgPSBnZXRMb2NhbFRpbWUoZmV0Y2hlZFdlYXRoZXJEYXRhKTtcbiAgZmV0Y2hlZFdlYXRoZXJEYXRhLmNvdW50cnkgPSBjb3VudHJ5RGF0YS5hZGRyZXNzLmNvdW50cnk7XG4gIGZldGNoZWRXZWF0aGVyRGF0YS53ZWF0aGVyRGVzY3JpcHRpb25zID1cbiAgICBnZXRXZWF0aGVyRGVzY3JpcHRpb25zKGZldGNoZWRXZWF0aGVyRGF0YSk7XG5cbiAgcmV0dXJuIGZldGNoZWRXZWF0aGVyRGF0YTtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9HaWxyb3ktUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9HaWxyb3ktU2VtaUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvR2lscm95LUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2ljb25zL3NlYXJjaC1ib2xkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltZy9pY29ucy9naXRodWIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2ljb25zL3RoZXJtYWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2ljb25zL3JhaW4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2ljb25zL3dpbmQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2ljb25zL2h1bWlkaXR5LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fID0gbmV3IFVSTChcIi4uL2ltZy9pY29ucy9zdW4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95U2VtaUJvbGQnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95Qm9sZCc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG46cm9vdCB7XG4gIC0tcHJpbWFyeS1jb2xvcjogIzM2NzFmMTtcblxuICAtLXRleHQtY29sb3I6ICNmYmZiZmI7XG4gIC0tdGV4dC1zZWNvbmRhcnktY29sb3I6ICNiZmJmZDQ7XG4gIC0tdGV4dC10ZXJ0aWFyeS1jb2xvcjogIzdmN2Y5ODtcblxuICAtLWJhY2tncm91bmQtY29sb3I6ICMxOTFhMjI7XG4gIC0tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6ICMxYzFkMjc7XG4gIC0tYmFja2dyb3VuZC10ZXJ0aWFyeS1jb2xvcjogIzIyMjQzMTtcblxuICAtLXByaW1hcnktZm9udC1yZWd1bGFyOiAnR2lscm95Jywgc2Fucy1zZXJpZjtcbiAgLS1wcmltYXJ5LWZvbnQtc2VtaTogJ0dpbHJveVNlbWlCb2xkJywgc2Fucy1zZXJpZjtcbiAgLS1wcmltYXJ5LWZvbnQtYm9sZDogJ0dpbHJveUJvbGQnLCBzYW5zLXNlcmlmO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiA2LjI1JTtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMTZyZW07XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtcmVndWxhcik7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNlYXJjaC1iYXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEzJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ud2VsY29tZS1wYXJhIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1ib2xkKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDM4cmVtO1xufVxuXG4ud2VsY29tZS10ZXh0IHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuXG4ud2VsY29tZS1sb2dvIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4ucGFyYWdyYXBoIHtcbiAgZm9udC1zaXplOiAyMnJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4uZm9ybS1pbmRleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNlYXJjaC1iYXItaW5kZXgge1xuICBwYWRkaW5nOiAxNnB4IDE4cHg7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3IpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICB3aWR0aDogNjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95U2VtaUJvbGQnICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLnNlYXJjaC1iYXItaW5kZXg6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBib3gtc2hhZG93OiAwIDAgNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHdpZHRoOiA2MzBweDtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4ub3BhY2l0eS1hY3RpdmUge1xuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gtYnRuLWluZGV4IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gIHRvcDogNTAlO1xuICByaWdodDogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAlLCAtNTAlKTtcbn1cblxuLmdpdGh1Yi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZ2l0aHViLXVzZXIge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxOHJlbTtcbn1cblxuLmdpdGh1YiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4vKkZvcmVjYXN0IENTUyovXG5cbi5mb3JlY2FzdC1jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA2MHB4IDEwcHg7XG59XG5cbi5mb3JlY2FzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XG4gIGdhcDogMjJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xuICBtaW4taGVpZ2h0OiA3MDBweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm9wYWNpdHktZm9yZWNhc3Qge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAxO1xufVxuXG4uYm94MSxcbi5ib3gyLFxuLmJveDMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5ib3gxIHtcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNGZyO1xuICBnYXA6IDEzcHg7XG4gIHBhZGRpbmc6IDIwcmVtO1xufVxuXG4uYm94MiB7XG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcbiAgcGFkZGluZzogMjVyZW0gMjVyZW0gMTVyZW0gMjVyZW07XG59XG5cbi5ib3gzIHtcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0yIC8gLTE7XG4gIHBhZGRpbmc6IDI1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ28tY29udGFpbmVyLWZvcmVjYXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeS1jb2xvcik7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlYXJjaC1iYXItZm9yZWNhc3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWFyY2gtYmFyLWZvcmVjYXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3lTZW1pQm9sZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnktY29sb3IpO1xufVxuXG4uc2VhcmNoLWJhci1mb3JlY2FzdDpmb2N1cyB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uc2VhcmNoLWJ0bi1mb3JlY2FzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIHdpZHRoOiAzN3B4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICByaWdodDogOHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zZWFyY2gtYnRuLWZvcmVjYXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzM0NzRmZjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uc2VhcmNoLWljb24ge1xuICB3aWR0aDogMTdweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmN1cnJlbnQtd2VhdGhlci1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cblxuLmN1cnJlbnQtdG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBmbGV4OiAxO1xufVxuXG4uY3VycmVudC10b3AtbGVmdCB7XG4gIGZsZXg6IDI7XG59XG5cbi5jdXJyZW50LWJvdHRvbSB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4ubG9jYXRpb24ge1xuICBmb250LXNpemU6IDIycmVtO1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250LWJvbGQpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2xvY2sge1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250LWJvbGQpO1xuICBmb250LXNpemU6IDI1cmVtO1xufVxuXG4udGVtcCB7XG4gIGZvbnQtc2l6ZTogMTAwcmVtO1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250LWJvbGQpO1xufVxuXG4ubWluLW1heC10ZW1wIHtcbiAgZm9udC1zaXplOiAyMHJlbTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1ib2xkKTtcbn1cblxuLnRlbXAtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXB4O1xufVxuXG4uYm94LWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtc2VtaSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnJlbTtcbn1cblxuLndlYXRoZXItZGV0YWlscyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1zZW1pKTtcbiAgZm9udC1zaXplOiAxNHJlbTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLndlYXRoZXItZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4IDBweDtcbn1cblxuLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIzMjQzMTtcbn1cblxuLmRldGFpbC1pY29uIHtcbiAgd2lkdGg6IDM2cmVtO1xuICBoZWlnaHQ6IDM2cmVtO1xuICBvcGFjaXR5OiAwLjI1O1xufVxuXG4jdGhlcm1hbFNlbnNhdGlvbkljb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuI3JhaW5Qcm9iYWJpbGl0eUljb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuI3dpbmRTcGVlZEljb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuI2Fpckh1bWlkaXR5SWNvbiB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4jdXZJbmRleEljb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLmRldGFpbC1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMnB4O1xufVxuXG4uZGV0YWlsLWRhdGEge1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250LWJvbGQpO1xuICBmb250LXNpemU6IDE2cmVtO1xufVxuXG4uZm9yZWNhc3QtZGFpbHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMjVyZW0gMHJlbTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1zZW1pKTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNHJlbTtcbn1cblxuLmRheS1ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE4cmVtO1xufVxuXG4uZGF5LWZvcmVjYXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRheS1mbGV4IHtcbiAgZmxleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLmRheSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtYm9sZCkgIWltcG9ydGFudDtcbn1cblxuLm1pbi1tYXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250LWJvbGQpO1xufVxuXG4uZGF5LWFic29sdXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTYwJSk7XG59XG5cbi53ZWF0aGVyLWltYWdlIHtcbiAgd2lkdGg6IDgwcmVtO1xuICBoZWlnaHQ6IDgwcmVtO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmRheS1taW4ge1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeS1jb2xvcik7XG59XG5cbi5jdXJyZW50LXdlYXRoZXItaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIyMHJlbTtcbiAgaGVpZ2h0OiAyMjByZW07XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xuICBib3R0b206IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xufVxuXG4uZGF0ZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtc2VtaSk7XG59XG5cbi8qTWVkaWEgUXVlcmllcyovXG5cbi8qUEhPTkVTKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5zZWFyY2gtYmFyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwJTtcbiAgfVxuICAuZm9ybS1pbmRleCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNlYXJjaC1iYXItaW5kZXgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHggMTRweDtcbiAgfVxuICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDMycmVtO1xuICAgIGhlaWdodDogMzJyZW07XG4gIH1cbiAgLnNlYXJjaC1iYXItaW5kZXg6Zm9jdXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLndlbGNvbWUtcGFyYSB7XG4gICAgZm9udC1zaXplOiAyNnJlbTtcbiAgfVxuICAucGFyYWdyYXBoIHtcbiAgICBmb250LXNpemU6IDE2cmVtO1xuICB9XG4gIC5mb3JlY2FzdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLmZvcmVjYXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNXB4O1xuICB9XG5cbiAgLmZvcmVjYXN0LWRhaWx5IHtcbiAgICBmb250LXNpemU6IDE2cmVtO1xuICAgIHBhZGRpbmc6IDByZW07XG4gICAgaGVpZ2h0OiA4NyU7XG4gIH1cblxuICAuYm94MSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNmZyO1xuICAgIHBhZGRpbmc6IDE0cmVtO1xuICB9XG5cbiAgLmJveDIge1xuICAgIHBhZGRpbmc6IDI1cmVtIDIwcmVtO1xuICB9XG5cbiAgLmJveDMge1xuICAgIHBhZGRpbmc6IDByZW0gMjByZW07XG4gICAgbWluLWhlaWdodDogMjUwcmVtO1xuICB9XG4gIC5sb2NhdGlvbiB7XG4gICAgZm9udC1zaXplOiAxOHJlbTtcbiAgfVxuICAuZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxNHJlbTtcbiAgfVxuICAuY2xvY2sge1xuICAgIGZvbnQtc2l6ZTogMThyZW07XG4gIH1cbiAgLnRlbXAge1xuICAgIGZvbnQtc2l6ZTogNjByZW07XG4gIH1cbiAgLm1pbi1tYXgtdGVtcCB7XG4gICAgZm9udC1zaXplOiAxOHJlbTtcbiAgfVxuICAubWluLW1heC1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmRheS1hYnNvbHV0ZSB7XG4gICAgdG9wOiA0MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00NSUpO1xuICB9XG4gIC5jdXJyZW50LXdlYXRoZXItYm94IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5jdXJyZW50LXdlYXRoZXItaWNvbiB7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB3aWR0aDogMTUwcmVtO1xuICAgIGhlaWdodDogMTUwcmVtO1xuICB9XG4gIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMjByZW07XG4gICAgaGVpZ2h0OiAyMHJlbTtcbiAgfVxuICAuc2VhcmNoLWJ0bi1pbmRleCB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIHdpZHRoOiA1M3B4O1xuICAgIGhlaWdodDogNDdweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAlLCAtNTAlKTtcbiAgfVxuICAud2VhdGhlci1pbWFnZSB7XG4gICAgd2lkdGg6IDY4cmVtO1xuICAgIGhlaWdodDogNjhyZW07XG4gIH1cbiAgLmRheS1ib3R0b20ge1xuICAgIGdhcDogMjVyZW07XG4gIH1cbiAgLndlYXRoZXItZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmxvZ28tY29udGFpbmVyLWZvcmVjYXN0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5kYXktZm9yZWNhc3Qge1xuICAgIGhlaWdodDogNzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XG4gIH1cbiAgLnBhZGRpbmctdG9wIHtcbiAgICBwYWRkaW5nLXRvcDogMjVyZW07XG4gIH1cbiAgLmRldGFpbC1pY29uIHtcbiAgICB3aWR0aDogMzJyZW07XG4gICAgaGVpZ2h0OiAzMnJlbTtcbiAgfVxufVxuXG4vKlRBQkxFVFMqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLyogU3R5bGVzIGZvciB0YWJsZXRzIGluIHBvcnRyYWl0IG9yaWVudGF0aW9uIGdvIGhlcmUgKi9cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDRDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw0Q0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx3QkFBd0I7O0VBRXhCLHFCQUFxQjtFQUNyQiwrQkFBK0I7RUFDL0Is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REFBdUQ7QUFDekRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICBzcmM6IHVybCguLi9mb250cy9HaWxyb3ktUmVndWxhci50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnR2lscm95U2VtaUJvbGQnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvR2lscm95LVNlbWlCb2xkLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3lCb2xkJztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL0dpbHJveS1Cb2xkLnR0Zik7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzM2NzFmMTtcXG5cXG4gIC0tdGV4dC1jb2xvcjogI2ZiZmJmYjtcXG4gIC0tdGV4dC1zZWNvbmRhcnktY29sb3I6ICNiZmJmZDQ7XFxuICAtLXRleHQtdGVydGlhcnktY29sb3I6ICM3ZjdmOTg7XFxuXFxuICAtLWJhY2tncm91bmQtY29sb3I6ICMxOTFhMjI7XFxuICAtLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiAjMWMxZDI3O1xcbiAgLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5LWNvbG9yOiAjMjIyNDMxO1xcblxcbiAgLS1wcmltYXJ5LWZvbnQtcmVndWxhcjogJ0dpbHJveScsIHNhbnMtc2VyaWY7XFxuICAtLXByaW1hcnktZm9udC1zZW1pOiAnR2lscm95U2VtaUJvbGQnLCBzYW5zLXNlcmlmO1xcbiAgLS1wcmltYXJ5LWZvbnQtYm9sZDogJ0dpbHJveUJvbGQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNi4yNSU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxNnJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtcmVndWxhcik7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnNlYXJjaC1iYXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTMlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbi53ZWxjb21lLXBhcmEge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1ib2xkKSAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiAzOHJlbTtcXG59XFxuXFxuLndlbGNvbWUtdGV4dCB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi53ZWxjb21lLWxvZ28ge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4ucGFyYWdyYXBoIHtcXG4gIGZvbnQtc2l6ZTogMjJyZW07XFxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxMHB4IDBweDtcXG59XFxuXFxuLmZvcm0taW5kZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWFyY2gtYmFyLWluZGV4IHtcXG4gIHBhZGRpbmc6IDE2cHggMThweDtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LWZhbWlseTogJ0dpbHJveVNlbWlCb2xkJyAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiAxNnJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zZWFyY2gtYmFyLWluZGV4OmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgd2lkdGg6IDYzMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9pY29ucy9zZWFyY2gtYm9sZC5zdmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm9wYWNpdHktYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZWFyY2gtYnRuLWluZGV4IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICB3aWR0aDogMzRweDtcXG4gIGhlaWdodDogMzRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwJSwgLTUwJSk7XFxufVxcblxcbi5naXRodWItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4uZ2l0aHViLXVzZXIge1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxOHJlbTtcXG59XFxuXFxuLmdpdGh1YiB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvaWNvbnMvZ2l0aHViLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4vKkZvcmVjYXN0IENTUyovXFxuXFxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDYwcHggMTBweDtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdhcDogMjJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XFxuICBtYXgtaGVpZ2h0OiA3MDBweDtcXG4gIG1pbi1oZWlnaHQ6IDcwMHB4O1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm9wYWNpdHktZm9yZWNhc3Qge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5ib3gxLFxcbi5ib3gyLFxcbi5ib3gzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi5ib3gxIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNGZyO1xcbiAgZ2FwOiAxM3B4O1xcbiAgcGFkZGluZzogMjByZW07XFxufVxcblxcbi5ib3gyIHtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG4gIHBhZGRpbmc6IDI1cmVtIDI1cmVtIDE1cmVtIDI1cmVtO1xcbn1cXG5cXG4uYm94MyB7XFxuICBncmlkLWFyZWE6IDIgLyAyIC8gLTIgLyAtMTtcXG4gIHBhZGRpbmc6IDI1cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMTNweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyLWZvcmVjYXN0IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnktY29sb3IpO1xcbiAgcGFkZGluZzogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYmFyLWZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYmFyLWZvcmVjYXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LWZhbWlseTogJ0dpbHJveVNlbWlCb2xkJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeS1jb2xvcik7XFxufVxcblxcbi5zZWFyY2gtYmFyLWZvcmVjYXN0OmZvY3VzIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnNlYXJjaC1idG4tZm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICB3aWR0aDogMzdweDtcXG4gIGhlaWdodDogMzdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHJpZ2h0OiA4cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zZWFyY2gtYnRuLWZvcmVjYXN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMzNDc0ZmY7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5zZWFyY2gtaWNvbiB7XFxuICB3aWR0aDogMTdweDtcXG4gIGhlaWdodDogMTdweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9pY29ucy9zZWFyY2gtYm9sZC5zdmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1ib3gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5jdXJyZW50LXRvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmN1cnJlbnQtdG9wLWxlZnQge1xcbiAgZmxleDogMjtcXG59XFxuXFxuLmN1cnJlbnQtYm90dG9tIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgZm9udC1zaXplOiAyMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtYm9sZCk7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY2xvY2sge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1ib2xkKTtcXG4gIGZvbnQtc2l6ZTogMjVyZW07XFxufVxcblxcbi50ZW1wIHtcXG4gIGZvbnQtc2l6ZTogMTAwcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1ib2xkKTtcXG59XFxuXFxuLm1pbi1tYXgtdGVtcCB7XFxuICBmb250LXNpemU6IDIwcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1ib2xkKTtcXG59XFxuXFxuLnRlbXAtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5ib3gtaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtc2VtaSk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeS1jb2xvcik7XFxuICBmb250LXNpemU6IDE2cmVtO1xcbn1cXG5cXG4ud2VhdGhlci1kZXRhaWxzIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250LXNlbWkpO1xcbiAgZm9udC1zaXplOiAxNHJlbTtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbi53ZWF0aGVyLWRldGFpbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE2cHggMHB4O1xcbn1cXG5cXG4uYm9yZGVyLWJvdHRvbSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIzMjQzMTtcXG59XFxuXFxuLmRldGFpbC1pY29uIHtcXG4gIHdpZHRoOiAzNnJlbTtcXG4gIGhlaWdodDogMzZyZW07XFxuICBvcGFjaXR5OiAwLjI1O1xcbn1cXG5cXG4jdGhlcm1hbFNlbnNhdGlvbkljb24ge1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2ltZy9pY29ucy90aGVybWFsLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4jcmFpblByb2JhYmlsaXR5SWNvbiB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1nL2ljb25zL3JhaW4uc3ZnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbiN3aW5kU3BlZWRJY29uIHtcXG4gIGJhY2tncm91bmQ6IHVybCguLi9pbWcvaWNvbnMvd2luZC5zdmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuXFxuI2Fpckh1bWlkaXR5SWNvbiB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1nL2ljb25zL2h1bWlkaXR5LnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4jdXZJbmRleEljb24ge1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2ltZy9pY29ucy9zdW4uc3ZnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbi5kZXRhaWwtbGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjJweDtcXG59XFxuXFxuLmRldGFpbC1kYXRhIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtYm9sZCk7XFxuICBmb250LXNpemU6IDE2cmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGFpbHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAyNXJlbSAwcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1zZW1pKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XFxuICBmb250LXNpemU6IDE0cmVtO1xcbn1cXG5cXG4uZGF5LWJvdHRvbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE4cmVtO1xcbn1cXG5cXG4uZGF5LWZvcmVjYXN0IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXg6IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kYXktZmxleCB7XFxuICBmbGV4OiAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5kYXkge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1ib2xkKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWluLW1heC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNnB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1ib2xkKTtcXG59XFxuXFxuLmRheS1hYnNvbHV0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTYwJSk7XFxufVxcblxcbi53ZWF0aGVyLWltYWdlIHtcXG4gIHdpZHRoOiA4MHJlbTtcXG4gIGhlaWdodDogODByZW07XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZGF5LW1pbiB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeS1jb2xvcik7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjIwcmVtO1xcbiAgaGVpZ2h0OiAyMjByZW07XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xcbiAgYm90dG9tOiAzMHB4O1xcbiAgcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5kYXRlIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtc2VtaSk7XFxufVxcblxcbi8qTWVkaWEgUXVlcmllcyovXFxuXFxuLypQSE9ORVMqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICAuc2VhcmNoLWJhci1jb250YWluZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDAlO1xcbiAgfVxcbiAgLmZvcm0taW5kZXgge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5zZWFyY2gtYmFyLWluZGV4IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEycHggMTRweDtcXG4gIH1cXG4gIC5zZWFyY2gtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDMycmVtO1xcbiAgICBoZWlnaHQ6IDMycmVtO1xcbiAgfVxcbiAgLnNlYXJjaC1iYXItaW5kZXg6Zm9jdXMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC53ZWxjb21lLXBhcmEge1xcbiAgICBmb250LXNpemU6IDI2cmVtO1xcbiAgfVxcbiAgLnBhcmFncmFwaCB7XFxuICAgIGZvbnQtc2l6ZTogMTZyZW07XFxuICB9XFxuICAuZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICB9XFxuICAuZm9yZWNhc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICB9XFxuXFxuICAuZm9yZWNhc3QtZGFpbHkge1xcbiAgICBmb250LXNpemU6IDE2cmVtO1xcbiAgICBwYWRkaW5nOiAwcmVtO1xcbiAgICBoZWlnaHQ6IDg3JTtcXG4gIH1cXG5cXG4gIC5ib3gxIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNmZyO1xcbiAgICBwYWRkaW5nOiAxNHJlbTtcXG4gIH1cXG5cXG4gIC5ib3gyIHtcXG4gICAgcGFkZGluZzogMjVyZW0gMjByZW07XFxuICB9XFxuXFxuICAuYm94MyB7XFxuICAgIHBhZGRpbmc6IDByZW0gMjByZW07XFxuICAgIG1pbi1oZWlnaHQ6IDI1MHJlbTtcXG4gIH1cXG4gIC5sb2NhdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMThyZW07XFxuICB9XFxuICAuZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTRyZW07XFxuICB9XFxuICAuY2xvY2sge1xcbiAgICBmb250LXNpemU6IDE4cmVtO1xcbiAgfVxcbiAgLnRlbXAge1xcbiAgICBmb250LXNpemU6IDYwcmVtO1xcbiAgfVxcbiAgLm1pbi1tYXgtdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMThyZW07XFxuICB9XFxuICAubWluLW1heC1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmRheS1hYnNvbHV0ZSB7XFxuICAgIHRvcDogNDAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00NSUpO1xcbiAgfVxcbiAgLmN1cnJlbnQtd2VhdGhlci1ib3gge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgfVxcbiAgLmN1cnJlbnQtd2VhdGhlci1pY29uIHtcXG4gICAgYm90dG9tOiAwcHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIHdpZHRoOiAxNTByZW07XFxuICAgIGhlaWdodDogMTUwcmVtO1xcbiAgfVxcbiAgLnNlYXJjaC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGhlaWdodDogMjByZW07XFxuICB9XFxuICAuc2VhcmNoLWJ0bi1pbmRleCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgd2lkdGg6IDUzcHg7XFxuICAgIGhlaWdodDogNDdweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAlLCAtNTAlKTtcXG4gIH1cXG4gIC53ZWF0aGVyLWltYWdlIHtcXG4gICAgd2lkdGg6IDY4cmVtO1xcbiAgICBoZWlnaHQ6IDY4cmVtO1xcbiAgfVxcbiAgLmRheS1ib3R0b20ge1xcbiAgICBnYXA6IDI1cmVtO1xcbiAgfVxcbiAgLndlYXRoZXItZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmxvZ28tY29udGFpbmVyLWZvcmVjYXN0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5kYXktZm9yZWNhc3Qge1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTdweDtcXG4gIH1cXG4gIC5wYWRkaW5nLXRvcCB7XFxuICAgIHBhZGRpbmctdG9wOiAyNXJlbTtcXG4gIH1cXG4gIC5kZXRhaWwtaWNvbiB7XFxuICAgIHdpZHRoOiAzMnJlbTtcXG4gICAgaGVpZ2h0OiAzMnJlbTtcXG4gIH1cXG59XFxuXFxuLypUQUJMRVRTKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgLyogU3R5bGVzIGZvciB0YWJsZXRzIGluIHBvcnRyYWl0IG9yaWVudGF0aW9uIGdvIGhlcmUgKi9cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgaGFuZGxlU2VhcmNoIGZyb20gJy4vbW9kdWxlcy9zZWFyY2gnO1xuXG5oYW5kbGVTZWFyY2goKTtcbiJdLCJuYW1lcyI6WyJnZXRXZWF0aGVyRGF0YSIsInNlYXJjaEZvcm1JbmRleCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWFyY2hCYXJJbmRleCIsImdldExvY2F0aW9uVmFsdWUiLCJpbnB1dFZhbHVlIiwidmFsdWUiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJoYW5kbGVTZWFyY2giLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGhlbiIsIndlYXRoZXJEYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsIkVycm9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiaW5mbyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwibWFrZUNvb3JkaW5hdGVzVVJMIiwiY2l0eSIsImNvbmNhdCIsImZldGNoQ29vcmRpbmF0ZXMiLCJfeCIsIl9mZXRjaENvb3JkaW5hdGVzIiwiX2NhbGxlZSIsInVybCIsInJlc3BvbnNlIiwiZGF0YSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJmZXRjaCIsIm1vZGUiLCJvayIsImpzb24iLCJsYXQiLCJsb24iLCJzdGF0ZSIsInQwIiwibWVzc2FnZSIsIm1ha2VXZWF0aGVyVVJMIiwiY29vcmRpbmF0ZXMiLCJ1bml0cyIsImZldGNoV2VhdGhlckRhdGEiLCJfeDIiLCJfZmV0Y2hXZWF0aGVyRGF0YSIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZmV0Y2hDb3VudHJ5RGF0YSIsIl94MyIsIl9mZXRjaENvdW50cnlEYXRhIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJnZXRMb2NhbFRpbWUiLCJ0aW1lem9uZSIsImN1cnJlbnRVdGNUaW1lIiwiRGF0ZSIsImxvY2FsVGltZSIsInRvTG9jYWxlU3RyaW5nIiwidGltZVpvbmUiLCJob3VyMTIiLCJob3VycyIsImdldEhvdXJzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZm9ybWF0dGVkVGltZSIsImdldFdlYXRoZXJEZXNjcmlwdGlvbnMiLCJmZXRjaGVkV2VhdGhlckRhdGEiLCJ3ZWF0aGVyRGVzY3JpcHRpb25zIiwiZGFpbHkiLCJ3ZWF0aGVyIiwiZGVzY3JpcHRpb24iLCJfeDQiLCJfeDUiLCJfZ2V0V2VhdGhlckRhdGEiLCJfY2FsbGVlNCIsImNvdW50cnlEYXRhIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiY291bnRyeSIsImFkZHJlc3MiXSwic291cmNlUm9vdCI6IiJ9
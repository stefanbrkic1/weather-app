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
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/background.jpg */ "./src/img/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/search-bold.svg */ "./src/img/search-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/github.png */ "./src/img/github.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/thermal.svg */ "./src/img/icons/thermal.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/rain.svg */ "./src/img/icons/rain.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/wind.svg */ "./src/img/icons/wind.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/humidity.svg */ "./src/img/icons/humidity.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/sun.svg */ "./src/img/icons/sun.svg"), __webpack_require__.b);
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
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
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
  overflow-y: auto;
  justify-content: center;
  align-items: center;
  padding: 60px 10px;
}

.forecast {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 25px;
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
  padding: 25rem;
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
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
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
  font-size: 20rem;
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
  width: 33px;
  height: 33px;
  opacity: 0.25;
}

#thermalSensationIcon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
  background-repeat: no-repeat;
  background-size: contain;
}

#rainProbabilityIcon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
  background-repeat: no-repeat;
  background-size: contain;
}

#windSpeedIcon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
  background-repeat: no-repeat;
  background-size: contain;
}

#airHumidityIcon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
  background-repeat: no-repeat;
  background-size: contain;
}

#uvIndexIcon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_10___});
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
  width: 84rem;
  height: 84rem;
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
    gap: 20px;
  }

  .forecast-daily {
    font-size: 16rem;
  }

  .box1 {
    grid-template-rows: 1fr 6fr;
    padding: 14rem;
  }

  .box2 {
    padding: 25rem 20rem;
  }

  .box3 {
    padding: 25rem 20rem;
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
}

/*TABLETS*/
@media (min-width: 768px) and (max-width: 991px) {
  /* Styles for tablets in portrait orientation go here */
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,4CAAqC;AACvC;;AAEA;EACE,6BAA6B;EAC7B,4CAAsC;AACxC;;AAEA;EACE,yBAAyB;EACzB,4CAAkC;AACpC;;AAEA;EACE,wBAAwB;;EAExB,qBAAqB;EACrB,+BAA+B;EAC/B,8BAA8B;;EAE9B,2BAA2B;EAC3B,qCAAqC;EACrC,oCAAoC;;EAEpC,4CAA4C;EAC5C,iDAAiD;EACjD,6CAA6C;AAC/C;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,wCAAwC;AAC1C;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mDAAsC;EACtC,4BAA4B;EAC5B,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,gDAAgD;EAChD,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,kCAAkC;EAClC,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,6CAA6C;EAC7C,kCAAkC;EAClC,YAAY;EACZ,mBAAmB;EACnB,wCAAwC;EACxC,gBAAgB;EAChB,mCAAmC;EACnC,mCAAmC;AACrC;;AAEA;EACE,sCAAsC;EACtC,wBAAwB;EACxB,0CAA0C;EAC1C,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,yDAA6C;EAC7C,4BAA4B;EAC5B,wBAAwB;EACxB,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,qBAAqB;EACrB,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,gCAAgC;EAChC,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,qCAAqC;EACrC,QAAQ;EACR,UAAU;EACV,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yDAAwC;EACxC,4BAA4B;EAC5B,wBAAwB;AAC1B;;AAEA,eAAe;;AAEf;EACE,YAAY;EACZ,aAAa;EACb,mCAAmC;EACnC,kBAAkB;EAClB,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,SAAS;EACT,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,qCAAqC;EACrC,UAAU;AACZ;;AAEA;;;EAGE,6CAA6C;EAC7C,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,4BAA4B;EAC5B,SAAS;EACT,cAAc;AAChB;;AAEA;EACE,wBAAwB;EACxB,cAAc;AAChB;;AAEA;EACE,0BAA0B;EAC1B,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,4CAA4C;EAC5C,aAAa;EACb,kBAAkB;EAClB,wBAAwB;EACxB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,4CAA4C;EAC5C,kBAAkB;EAClB,yCAAyC;EACzC,gBAAgB;EAChB,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,wBAAwB;EACxB,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,gCAAgC;EAChC,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,yDAA6C;EAC7C,4BAA4B;EAC5B,wBAAwB;EACxB,eAAe;EACf,iCAAiC;EACjC,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,kDAAkD;EAClD,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,OAAO;AACT;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,qCAAqC;EACrC,mBAAmB;AACrB;;AAEA;EACE,qCAAqC;EACrC,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,qCAAqC;AACvC;;AAEA;EACE,gBAAgB;EAChB,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,qCAAqC;EACrC,iCAAiC;EACjC,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,kCAAkC;EAClC,qCAAqC;EACrC,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,mDAAyC;EACzC,4BAA4B;EAC5B,wBAAwB;AAC1B;;AAEA;EACE,mDAAsC;EACtC,4BAA4B;EAC5B,wBAAwB;AAC1B;;AAEA;EACE,mDAAsC;EACtC,4BAA4B;EAC5B,wBAAwB;AAC1B;;AAEA;EACE,mDAA0C;EAC1C,4BAA4B;EAC5B,wBAAwB;AAC1B;;AAEA;EACE,oDAAqC;EACrC,4BAA4B;EAC5B,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,qCAAqC;EACrC,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,qCAAqC;EACrC,kCAAkC;EAClC,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;EAC9B,OAAO;EACP,kBAAkB;AACpB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,gDAAgD;AAClD;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uCAAuC;EACvC,mCAAmC;EACnC,sCAAsC;AACxC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,cAAc;EACd,sCAAsC;EACtC,uCAAuC;EACvC,mCAAmC;EACnC,YAAY;EACZ,WAAW;AACb;;AAEA,gBAAgB;;AAEhB,SAAS;AACT;EACE;IACE,aAAa;EACf;EACA;IACE,mBAAmB;EACrB;EACA;IACE,WAAW;EACb;EACA;IACE,WAAW;IACX,kBAAkB;EACpB;EACA;IACE,YAAY;IACZ,aAAa;EACf;EACA;IACE,WAAW;EACb;;EAEA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,cAAc;IACd,aAAa;EACf;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;EACX;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,2BAA2B;IAC3B,cAAc;EAChB;;EAEA;IACE,oBAAoB;EACtB;;EAEA;IACE,oBAAoB;IACpB,kBAAkB;EACpB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,QAAQ;IACR,SAAS;IACT,gCAAgC;EAClC;EACA;IACE,aAAa;EACf;EACA;IACE,WAAW;IACX,UAAU;IACV,aAAa;IACb,cAAc;EAChB;EACA;IACE,YAAY;IACZ,aAAa;EACf;EACA;IACE,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,+BAA+B;IAC/B,+BAA+B;EACjC;EACA;IACE,YAAY;IACZ,aAAa;EACf;EACA;IACE,UAAU;EACZ;;EAEA;IACE,aAAa;EACf;AACF;;AAEA,UAAU;AACV;EACE,uDAAuD;AACzD","sourcesContent":["@font-face {\n  font-family: 'Gilroy';\n  src: url(../fonts/Gilroy-Regular.ttf);\n}\n\n@font-face {\n  font-family: 'GilroySemiBold';\n  src: url(../fonts/Gilroy-SemiBold.ttf);\n}\n\n@font-face {\n  font-family: 'GilroyBold';\n  src: url(../fonts/Gilroy-Bold.ttf);\n}\n\n:root {\n  --primary-color: #3671f1;\n\n  --text-color: #fbfbfb;\n  --text-secondary-color: #bfbfd4;\n  --text-tertiary-color: #7f7f98;\n\n  --background-color: #191a22;\n  --background-secondary-color: #1c1d27;\n  --background-tertiary-color: #222431;\n\n  --primary-font-regular: 'Gilroy', sans-serif;\n  --primary-font-semi: 'GilroySemiBold', sans-serif;\n  --primary-font-bold: 'GilroyBold', sans-serif;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 6.25%;\n}\n\nbody {\n  font-size: 16rem;\n  font-family: var(--primary-font-regular);\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  background: url(../img/background.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.search-bar-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 13%;\n  position: relative;\n}\n\n.logo-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-color);\n  margin-top: 15px;\n}\n\n.welcome-para {\n  font-family: var(--primary-font-bold) !important;\n  font-size: 38rem;\n}\n\n.welcome-text {\n  color: var(--text-color);\n}\n\n.welcome-logo {\n  color: var(--primary-color);\n}\n\n.paragraph {\n  font-size: 22rem;\n  color: var(--text-secondary-color);\n  text-align: center;\n  margin: 10px 0px;\n}\n\n.form-index {\n  display: flex;\n  margin-top: 15px;\n  position: relative;\n}\n\n.search-bar-index {\n  padding: 16px 18px;\n  appearance: none;\n  border: none;\n  outline: none;\n  background: var(--background-secondary-color);\n  color: var(--text-secondary-color);\n  width: 600px;\n  border-radius: 10px;\n  font-family: 'GilroySemiBold' !important;\n  font-size: 16rem;\n  border: 1px solid var(--text-color);\n  transition: width 300ms ease-in-out;\n}\n\n.search-bar-index:focus {\n  border: 1px solid var(--primary-color);\n  color: var(--text-color);\n  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);\n  width: 630px;\n}\n\n.search-container {\n  width: 20px;\n  height: 20px;\n  background: transparent;\n  background-image: url(../img/search-bold.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n  cursor: pointer;\n  transition: all 200ms ease-in-out;\n}\n\n.opacity-active {\n  opacity: 0 !important;\n  pointer-events: none !important;\n}\n\n.search-btn-index {\n  position: absolute;\n  appearance: none;\n  outline: none;\n  border: none;\n  background: var(--primary-color);\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: opacity 200ms ease-in-out;\n  top: 50%;\n  right: 0px;\n  transform: translate(-30%, -50%);\n}\n\n.github-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 15px;\n}\n\n.github-user {\n  color: var(--text-color);\n  text-decoration: none;\n  font-size: 18rem;\n}\n\n.github {\n  width: 25px;\n  height: 25px;\n  background-image: url(../img/github.png);\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n/*Forecast CSS*/\n\n.forecast-container {\n  width: 100vw;\n  height: 100vh;\n  background: var(--background-color);\n  position: relative;\n  display: flex;\n  overflow-y: auto;\n  justify-content: center;\n  align-items: center;\n  padding: 60px 10px;\n}\n\n.forecast {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 25px;\n  width: 100%;\n  height: 100%;\n  max-width: 1300px;\n  max-height: 700px;\n  min-height: 700px;\n  opacity: 0;\n}\n\n.opacity-forecast {\n  transition: opacity 300ms ease-in-out;\n  opacity: 1;\n}\n\n.box1,\n.box2,\n.box3 {\n  background: var(--background-secondary-color);\n  border-radius: 12px;\n}\n\n.box1 {\n  grid-area: 1 / 1 / 3 / 2;\n  display: grid;\n  grid-template-rows: 1fr 14fr;\n  gap: 13px;\n  padding: 20rem;\n}\n\n.box2 {\n  grid-area: 1 / 2 / 2 / 3;\n  padding: 25rem;\n}\n\n.box3 {\n  grid-area: 2 / 2 / -2 / -1;\n  padding: 25rem;\n  position: relative;\n}\n\n.flex {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 13px;\n  position: relative;\n}\n\n.logo-container-forecast {\n  background: var(--background-tertiary-color);\n  padding: 18px;\n  border-radius: 8px;\n  color: var(--text-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search-bar-forecast-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search-bar-forecast {\n  width: 100%;\n  appearance: none;\n  outline: none;\n  border: none;\n  padding: 15px;\n  background: var(--background-tertiary-color);\n  border-radius: 8px;\n  font-family: 'GilroySemiBold', sans-serif;\n  font-size: 18rem;\n  position: relative;\n  color: var(--text-tertiary-color);\n}\n\n.search-bar-forecast:focus {\n  color: var(--text-color);\n  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);\n}\n\n.search-btn-forecast {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  appearance: none;\n  outline: none;\n  border: none;\n  position: absolute;\n  background: var(--primary-color);\n  width: 37px;\n  height: 37px;\n  border-radius: 8px;\n  cursor: pointer;\n  right: 8px;\n  transition: all 200ms ease-in-out;\n}\n\n.search-btn-forecast:hover {\n  background: #3474ff;\n  transform: scale(1.1);\n}\n\n.search-icon {\n  width: 17px;\n  height: 17px;\n  background: transparent;\n  background-image: url(../img/search-bold.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n  cursor: pointer;\n  transition: all 200ms ease-in-out;\n  cursor: pointer;\n  transition: all 200ms ease-in-out;\n}\n\n.current-weather-box {\n  position: relative;\n  background-color: var(--background-tertiary-color);\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  color: var(--text-color);\n}\n\n.current-top {\n  display: flex;\n  gap: 10px;\n  flex: 1;\n}\n\n.current-top-left {\n  flex: 2;\n}\n\n.current-bottom {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n}\n\n.location {\n  font-size: 20rem;\n  font-family: var(--primary-font-bold);\n  margin-bottom: 10px;\n}\n\n.clock {\n  font-family: var(--primary-font-bold);\n  font-size: 25rem;\n}\n\n.temp {\n  font-size: 100rem;\n  font-family: var(--primary-font-bold);\n}\n\n.min-max-temp {\n  font-size: 20rem;\n  font-family: var(--primary-font-bold);\n}\n\n.temp-flex {\n  display: flex;\n  gap: 5px;\n}\n\n.box-header {\n  font-family: var(--primary-font-semi);\n  color: var(--text-tertiary-color);\n  font-size: 16rem;\n}\n\n.weather-details {\n  list-style-type: none;\n  color: var(--text-secondary-color);\n  font-family: var(--primary-font-semi);\n  font-size: 14rem;\n  margin-top: 15px;\n}\n\n.weather-detail {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 0px;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #232431;\n}\n\n.detail-icon {\n  width: 33px;\n  height: 33px;\n  opacity: 0.25;\n}\n\n#thermalSensationIcon {\n  background: url(../img/icons/thermal.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n#rainProbabilityIcon {\n  background: url(../img/icons/rain.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n#windSpeedIcon {\n  background: url(../img/icons/wind.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n#airHumidityIcon {\n  background: url(../img/icons/humidity.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n#uvIndexIcon {\n  background: url(../img/icons/sun.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.detail-left {\n  display: flex;\n  align-items: center;\n  gap: 22px;\n}\n\n.detail-data {\n  font-family: var(--primary-font-bold);\n  font-size: 16rem;\n}\n\n.forecast-daily {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  position: relative;\n  padding: 25rem 0rem;\n  font-family: var(--primary-font-semi);\n  color: var(--text-secondary-color);\n  font-size: 14rem;\n}\n\n.day-bottom {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 18rem;\n}\n\n.day-forecast {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  flex: 1;\n  position: relative;\n}\n\n.day-flex {\n  flex: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.day {\n  font-family: var(--primary-font-bold) !important;\n}\n\n.min-max-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-family: var(--primary-font-bold);\n}\n\n.day-absolute {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -60%);\n}\n\n.weather-image {\n  width: 84rem;\n  height: 84rem;\n  background-repeat: no-repeat !important;\n  background-size: contain !important;\n  background-position: center !important;\n}\n\n.day-min {\n  color: var(--text-tertiary-color);\n}\n\n.current-weather-icon {\n  position: absolute;\n  width: 220rem;\n  height: 220rem;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n  background-size: contain !important;\n  bottom: 30px;\n  right: 30px;\n}\n\n/*Media Queries*/\n\n/*PHONES*/\n@media (max-width: 767px) {\n  .container {\n    padding: 10px;\n  }\n  .search-bar-container {\n    margin-bottom: 100%;\n  }\n  .form-index {\n    width: 100%;\n  }\n  .search-bar-index {\n    width: 100%;\n    padding: 12px 14px;\n  }\n  .search-container {\n    width: 32rem;\n    height: 32rem;\n  }\n  .search-bar-index:focus {\n    width: 100%;\n  }\n\n  .welcome-para {\n    font-size: 26rem;\n  }\n  .paragraph {\n    font-size: 16rem;\n  }\n  .forecast-container {\n    display: block;\n    padding: 15px;\n  }\n  .forecast {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n  }\n\n  .forecast-daily {\n    font-size: 16rem;\n  }\n\n  .box1 {\n    grid-template-rows: 1fr 6fr;\n    padding: 14rem;\n  }\n\n  .box2 {\n    padding: 25rem 20rem;\n  }\n\n  .box3 {\n    padding: 25rem 20rem;\n    min-height: 250rem;\n  }\n  .location {\n    font-size: 18rem;\n  }\n  .date {\n    font-size: 14rem;\n  }\n  .clock {\n    font-size: 18rem;\n  }\n  .temp {\n    font-size: 60rem;\n  }\n  .min-max-temp {\n    font-size: 18rem;\n  }\n  .min-max-container {\n    flex-direction: column;\n  }\n  .day-absolute {\n    top: 40%;\n    left: 50%;\n    transform: translate(-50%, -45%);\n  }\n  .current-weather-box {\n    padding: 15px;\n  }\n  .current-weather-icon {\n    bottom: 0px;\n    right: 0px;\n    width: 150rem;\n    height: 150rem;\n  }\n  .search-container {\n    width: 20rem;\n    height: 20rem;\n  }\n  .search-btn-index {\n    border-radius: 0px;\n    width: 53px;\n    height: 47px;\n    border-top-right-radius: 8px;\n    border-bottom-right-radius: 8px;\n    transform: translate(-0%, -50%);\n  }\n  .weather-image {\n    width: 68rem;\n    height: 68rem;\n  }\n  .day-bottom {\n    gap: 25rem;\n  }\n\n  .weather-description {\n    display: none;\n  }\n}\n\n/*TABLETS*/\n@media (min-width: 768px) and (max-width: 991px) {\n  /* Styles for tablets in portrait orientation go here */\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixvQ0FBb0M7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVGQUF1RixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FB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OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNnQjtBQUU1QzdILDJEQUFZLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyLWFwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tICcuL3dlYXRoZXItYXBpJztcblxuY29uc3Qgc2VhcmNoRm9ybUluZGV4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEZvcm1JbmRleCcpO1xuY29uc3Qgc2VhcmNoQmFySW5kZXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoQmFySW5kZXgnKTtcblxuZnVuY3Rpb24gZ2V0TG9jYXRpb25WYWx1ZSgpIHtcbiAgY29uc3QgaW5wdXRWYWx1ZSA9IHNlYXJjaEJhckluZGV4LnZhbHVlO1xuICByZXR1cm4gaW5wdXRWYWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlU2VhcmNoKCkge1xuICBzZWFyY2hGb3JtSW5kZXguYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZ2V0V2VhdGhlckRhdGEoZ2V0TG9jYXRpb25WYWx1ZSgpLCAnbWV0cmljJylcbiAgICAgIC50aGVuKCh3ZWF0aGVyRGF0YSkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2VhdGhlckRhdGEnLCBKU09OLnN0cmluZ2lmeSh3ZWF0aGVyRGF0YSkpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuL3dlYXRoZXIuaHRtbCc7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYXRoZXJEYXRhRXJyb3InLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSk7XG59XG4iLCJmdW5jdGlvbiBtYWtlQ29vcmRpbmF0ZXNVUkwoY2l0eSkge1xuICByZXR1cm4gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mYXBwaWQ9MWY4OGYzNThiZDU0OWU0YmZjNWQzNWVkMDQ2NTY3MjNgO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb29yZGluYXRlcyh1cmwpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB7XG4gICAgICBsYXQ6IGRhdGFbMF0ubGF0LFxuICAgICAgbG9uOiBkYXRhWzBdLmxvbixcbiAgICAgIG5hbWU6IGRhdGFbMF0ubmFtZSxcbiAgICAgIHN0YXRlOiBkYXRhWzBdLnN0YXRlLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggZGF0YTogJHtlcnJvci5tZXNzYWdlfWApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VXZWF0aGVyVVJMKGNvb3JkaW5hdGVzLCB1bml0cykge1xuICByZXR1cm4gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2Nvb3JkaW5hdGVzLmxhdH0mbG9uPSR7Y29vcmRpbmF0ZXMubG9ufSZleGNsdWRlPW1pbnV0ZWx5LGFsZXJ0cyZ1bml0cz0ke3VuaXRzfSZhcHBpZD0yMGY3NjMyZmZjMmMwMjI2NTRlNDA5M2M2OTQ3YjRmNGA7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRhdGEodXJsKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCBkYXRhOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb3VudHJ5RGF0YShjb29yZGluYXRlcykge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9ub21pbmF0aW0ub3BlbnN0cmVldG1hcC5vcmcvcmV2ZXJzZT9mb3JtYXQ9anNvbiZsYXQ9JHtjb29yZGluYXRlcy5sYXR9Jmxvbj0ke2Nvb3JkaW5hdGVzLmxvbn1gO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggZGF0YTogJHtlcnJvci5tZXNzYWdlfWApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldExvY2FsVGltZSh3ZWF0aGVyRGF0YSkge1xuICBjb25zdCB7IHRpbWV6b25lIH0gPSB3ZWF0aGVyRGF0YTtcbiAgY29uc3QgY3VycmVudFV0Y1RpbWUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBsb2NhbFRpbWUgPSBuZXcgRGF0ZShcbiAgICBjdXJyZW50VXRjVGltZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICB0aW1lWm9uZTogdGltZXpvbmUsXG4gICAgICBob3VyMTI6IGZhbHNlLFxuICAgIH0pLFxuICApO1xuXG4gIGNvbnN0IGhvdXJzID0gbG9jYWxUaW1lLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBtaW51dGVzID0gbG9jYWxUaW1lLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBgJHtob3Vyc306JHttaW51dGVzfWA7XG5cbiAgcmV0dXJuIGZvcm1hdHRlZFRpbWU7XG59XG5cbmZ1bmN0aW9uIGdldFdlYXRoZXJEZXNjcmlwdGlvbnMoZmV0Y2hlZFdlYXRoZXJEYXRhKSB7XG4gIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbnMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpICs9IDEpIHtcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb25zLnB1c2goXG4gICAgICBmZXRjaGVkV2VhdGhlckRhdGEuZGFpbHlbaV0ud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICApO1xuICB9XG4gIHJldHVybiB3ZWF0aGVyRGVzY3JpcHRpb25zO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShjaXR5LCB1bml0cykge1xuICBjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IGZldGNoQ29vcmRpbmF0ZXMobWFrZUNvb3JkaW5hdGVzVVJMKGNpdHkpKTtcbiAgY29uc3QgY291bnRyeURhdGEgPSBhd2FpdCBmZXRjaENvdW50cnlEYXRhKGNvb3JkaW5hdGVzKTtcbiAgY29uc3QgZmV0Y2hlZFdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGF0YShcbiAgICBtYWtlV2VhdGhlclVSTChjb29yZGluYXRlcywgdW5pdHMpLFxuICApO1xuICBmZXRjaGVkV2VhdGhlckRhdGEubmFtZSA9IGNvb3JkaW5hdGVzLm5hbWU7XG4gIGZldGNoZWRXZWF0aGVyRGF0YS5zdGF0ZSA9IGNvb3JkaW5hdGVzLnN0YXRlO1xuICBmZXRjaGVkV2VhdGhlckRhdGEubG9jYWxUaW1lID0gZ2V0TG9jYWxUaW1lKGZldGNoZWRXZWF0aGVyRGF0YSk7XG4gIGZldGNoZWRXZWF0aGVyRGF0YS5jb3VudHJ5ID0gY291bnRyeURhdGEuYWRkcmVzcy5jb3VudHJ5O1xuICBmZXRjaGVkV2VhdGhlckRhdGEud2VhdGhlckRlc2NyaXB0aW9ucyA9XG4gICAgZ2V0V2VhdGhlckRlc2NyaXB0aW9ucyhmZXRjaGVkV2VhdGhlckRhdGEpO1xuXG4gIHJldHVybiBmZXRjaGVkV2VhdGhlckRhdGE7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvR2lscm95LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvR2lscm95LVNlbWlCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0dpbHJveS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ltZy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltZy9zZWFyY2gtYm9sZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvZ2l0aHViLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4uL2ltZy9pY29ucy90aGVybWFsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4uL2ltZy9pY29ucy9yYWluLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4uL2ltZy9pY29ucy93aW5kLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fID0gbmV3IFVSTChcIi4uL2ltZy9pY29ucy9odW1pZGl0eS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2ljb25zL3N1bi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dpbHJveSc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3lTZW1pQm9sZCc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3lCb2xkJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbjpyb290IHtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMzY3MWYxO1xuXG4gIC0tdGV4dC1jb2xvcjogI2ZiZmJmYjtcbiAgLS10ZXh0LXNlY29uZGFyeS1jb2xvcjogI2JmYmZkNDtcbiAgLS10ZXh0LXRlcnRpYXJ5LWNvbG9yOiAjN2Y3Zjk4O1xuXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzE5MWEyMjtcbiAgLS1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogIzFjMWQyNztcbiAgLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5LWNvbG9yOiAjMjIyNDMxO1xuXG4gIC0tcHJpbWFyeS1mb250LXJlZ3VsYXI6ICdHaWxyb3knLCBzYW5zLXNlcmlmO1xuICAtLXByaW1hcnktZm9udC1zZW1pOiAnR2lscm95U2VtaUJvbGQnLCBzYW5zLXNlcmlmO1xuICAtLXByaW1hcnktZm9udC1ib2xkOiAnR2lscm95Qm9sZCcsIHNhbnMtc2VyaWY7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYuMjUlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1zaXplOiAxNnJlbTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1yZWd1bGFyKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNlYXJjaC1iYXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEzJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ud2VsY29tZS1wYXJhIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1ib2xkKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDM4cmVtO1xufVxuXG4ud2VsY29tZS10ZXh0IHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuXG4ud2VsY29tZS1sb2dvIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4ucGFyYWdyYXBoIHtcbiAgZm9udC1zaXplOiAyMnJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4uZm9ybS1pbmRleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNlYXJjaC1iYXItaW5kZXgge1xuICBwYWRkaW5nOiAxNnB4IDE4cHg7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3IpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICB3aWR0aDogNjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95U2VtaUJvbGQnICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLnNlYXJjaC1iYXItaW5kZXg6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBib3gtc2hhZG93OiAwIDAgNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHdpZHRoOiA2MzBweDtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4ub3BhY2l0eS1hY3RpdmUge1xuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gtYnRuLWluZGV4IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gIHRvcDogNTAlO1xuICByaWdodDogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAlLCAtNTAlKTtcbn1cblxuLmdpdGh1Yi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZ2l0aHViLXVzZXIge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxOHJlbTtcbn1cblxuLmdpdGh1YiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4vKkZvcmVjYXN0IENTUyovXG5cbi5mb3JlY2FzdC1jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA2MHB4IDEwcHg7XG59XG5cbi5mb3JlY2FzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XG4gIGdhcDogMjVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xuICBtaW4taGVpZ2h0OiA3MDBweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm9wYWNpdHktZm9yZWNhc3Qge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAxO1xufVxuXG4uYm94MSxcbi5ib3gyLFxuLmJveDMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5ib3gxIHtcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNGZyO1xuICBnYXA6IDEzcHg7XG4gIHBhZGRpbmc6IDIwcmVtO1xufVxuXG4uYm94MiB7XG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcbiAgcGFkZGluZzogMjVyZW07XG59XG5cbi5ib3gzIHtcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0yIC8gLTE7XG4gIHBhZGRpbmc6IDI1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ28tY29udGFpbmVyLWZvcmVjYXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeS1jb2xvcik7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlYXJjaC1iYXItZm9yZWNhc3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWFyY2gtYmFyLWZvcmVjYXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3lTZW1pQm9sZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnktY29sb3IpO1xufVxuXG4uc2VhcmNoLWJhci1mb3JlY2FzdDpmb2N1cyB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uc2VhcmNoLWJ0bi1mb3JlY2FzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIHdpZHRoOiAzN3B4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICByaWdodDogOHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zZWFyY2gtYnRuLWZvcmVjYXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzM0NzRmZjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uc2VhcmNoLWljb24ge1xuICB3aWR0aDogMTdweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmN1cnJlbnQtd2VhdGhlci1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cblxuLmN1cnJlbnQtdG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBmbGV4OiAxO1xufVxuXG4uY3VycmVudC10b3AtbGVmdCB7XG4gIGZsZXg6IDI7XG59XG5cbi5jdXJyZW50LWJvdHRvbSB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4ubG9jYXRpb24ge1xuICBmb250LXNpemU6IDIwcmVtO1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250LWJvbGQpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2xvY2sge1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250LWJvbGQpO1xuICBmb250LXNpemU6IDI1cmVtO1xufVxuXG4udGVtcCB7XG4gIGZvbnQtc2l6ZTogMTAwcmVtO1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250LWJvbGQpO1xufVxuXG4ubWluLW1heC10ZW1wIHtcbiAgZm9udC1zaXplOiAyMHJlbTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1ib2xkKTtcbn1cblxuLnRlbXAtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXB4O1xufVxuXG4uYm94LWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtc2VtaSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnJlbTtcbn1cblxuLndlYXRoZXItZGV0YWlscyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1zZW1pKTtcbiAgZm9udC1zaXplOiAxNHJlbTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLndlYXRoZXItZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4IDBweDtcbn1cblxuLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIzMjQzMTtcbn1cblxuLmRldGFpbC1pY29uIHtcbiAgd2lkdGg6IDMzcHg7XG4gIGhlaWdodDogMzNweDtcbiAgb3BhY2l0eTogMC4yNTtcbn1cblxuI3RoZXJtYWxTZW5zYXRpb25JY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbiNyYWluUHJvYmFiaWxpdHlJY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbiN3aW5kU3BlZWRJY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbiNhaXJIdW1pZGl0eUljb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuI3V2SW5kZXhJY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uZGV0YWlsLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIycHg7XG59XG5cbi5kZXRhaWwtZGF0YSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtYm9sZCk7XG4gIGZvbnQtc2l6ZTogMTZyZW07XG59XG5cbi5mb3JlY2FzdC1kYWlseSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyNXJlbSAwcmVtO1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250LXNlbWkpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xuICBmb250LXNpemU6IDE0cmVtO1xufVxuXG4uZGF5LWJvdHRvbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMThyZW07XG59XG5cbi5kYXktZm9yZWNhc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGF5LWZsZXgge1xuICBmbGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uZGF5IHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1ib2xkKSAhaW1wb3J0YW50O1xufVxuXG4ubWluLW1heC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtYm9sZCk7XG59XG5cbi5kYXktYWJzb2x1dGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNjAlKTtcbn1cblxuLndlYXRoZXItaW1hZ2Uge1xuICB3aWR0aDogODRyZW07XG4gIGhlaWdodDogODRyZW07XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uZGF5LW1pbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5LWNvbG9yKTtcbn1cblxuLmN1cnJlbnQtd2VhdGhlci1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjIwcmVtO1xuICBoZWlnaHQ6IDIyMHJlbTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG59XG5cbi8qTWVkaWEgUXVlcmllcyovXG5cbi8qUEhPTkVTKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5zZWFyY2gtYmFyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwJTtcbiAgfVxuICAuZm9ybS1pbmRleCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNlYXJjaC1iYXItaW5kZXgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHggMTRweDtcbiAgfVxuICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDMycmVtO1xuICAgIGhlaWdodDogMzJyZW07XG4gIH1cbiAgLnNlYXJjaC1iYXItaW5kZXg6Zm9jdXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLndlbGNvbWUtcGFyYSB7XG4gICAgZm9udC1zaXplOiAyNnJlbTtcbiAgfVxuICAucGFyYWdyYXBoIHtcbiAgICBmb250LXNpemU6IDE2cmVtO1xuICB9XG4gIC5mb3JlY2FzdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLmZvcmVjYXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xuICB9XG5cbiAgLmZvcmVjYXN0LWRhaWx5IHtcbiAgICBmb250LXNpemU6IDE2cmVtO1xuICB9XG5cbiAgLmJveDEge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmcjtcbiAgICBwYWRkaW5nOiAxNHJlbTtcbiAgfVxuXG4gIC5ib3gyIHtcbiAgICBwYWRkaW5nOiAyNXJlbSAyMHJlbTtcbiAgfVxuXG4gIC5ib3gzIHtcbiAgICBwYWRkaW5nOiAyNXJlbSAyMHJlbTtcbiAgICBtaW4taGVpZ2h0OiAyNTByZW07XG4gIH1cbiAgLmxvY2F0aW9uIHtcbiAgICBmb250LXNpemU6IDE4cmVtO1xuICB9XG4gIC5kYXRlIHtcbiAgICBmb250LXNpemU6IDE0cmVtO1xuICB9XG4gIC5jbG9jayB7XG4gICAgZm9udC1zaXplOiAxOHJlbTtcbiAgfVxuICAudGVtcCB7XG4gICAgZm9udC1zaXplOiA2MHJlbTtcbiAgfVxuICAubWluLW1heC10ZW1wIHtcbiAgICBmb250LXNpemU6IDE4cmVtO1xuICB9XG4gIC5taW4tbWF4LWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuZGF5LWFic29sdXRlIHtcbiAgICB0b3A6IDQwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQ1JSk7XG4gIH1cbiAgLmN1cnJlbnQtd2VhdGhlci1ib3gge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLmN1cnJlbnQtd2VhdGhlci1pY29uIHtcbiAgICBib3R0b206IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIHdpZHRoOiAxNTByZW07XG4gICAgaGVpZ2h0OiAxNTByZW07XG4gIH1cbiAgLnNlYXJjaC1jb250YWluZXIge1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgICBoZWlnaHQ6IDIwcmVtO1xuICB9XG4gIC5zZWFyY2gtYnRuLWluZGV4IHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgd2lkdGg6IDUzcHg7XG4gICAgaGVpZ2h0OiA0N3B4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMCUsIC01MCUpO1xuICB9XG4gIC53ZWF0aGVyLWltYWdlIHtcbiAgICB3aWR0aDogNjhyZW07XG4gICAgaGVpZ2h0OiA2OHJlbTtcbiAgfVxuICAuZGF5LWJvdHRvbSB7XG4gICAgZ2FwOiAyNXJlbTtcbiAgfVxuXG4gIC53ZWF0aGVyLWRlc2NyaXB0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi8qVEFCTEVUUyovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAvKiBTdHlsZXMgZm9yIHRhYmxldHMgaW4gcG9ydHJhaXQgb3JpZW50YXRpb24gZ28gaGVyZSAqL1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBcUM7QUFDdkM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsNENBQXNDO0FBQ3hDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQiw4QkFBOEI7O0VBRTlCLDJCQUEyQjtFQUMzQixxQ0FBcUM7RUFDckMsb0NBQW9DOztFQUVwQyw0Q0FBNEM7RUFDNUMsaURBQWlEO0VBQ2pELDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbURBQXNDO0VBQ3RDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0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QUFvQjtJQUNwQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSx1REFBdUQ7QUFDekRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICBzcmM6IHVybCguLi9mb250cy9HaWxyb3ktUmVndWxhci50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnR2lscm95U2VtaUJvbGQnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvR2lscm95LVNlbWlCb2xkLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3lCb2xkJztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL0dpbHJveS1Cb2xkLnR0Zik7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzM2NzFmMTtcXG5cXG4gIC0tdGV4dC1jb2xvcjogI2ZiZmJmYjtcXG4gIC0tdGV4dC1zZWNvbmRhcnktY29sb3I6ICNiZmJmZDQ7XFxuICAtLXRleHQtdGVydGlhcnktY29sb3I6ICM3ZjdmOTg7XFxuXFxuICAtLWJhY2tncm91bmQtY29sb3I6ICMxOTFhMjI7XFxuICAtLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiAjMWMxZDI3O1xcbiAgLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5LWNvbG9yOiAjMjIyNDMxO1xcblxcbiAgLS1wcmltYXJ5LWZvbnQtcmVndWxhcjogJ0dpbHJveScsIHNhbnMtc2VyaWY7XFxuICAtLXByaW1hcnktZm9udC1zZW1pOiAnR2lscm95U2VtaUJvbGQnLCBzYW5zLXNlcmlmO1xcbiAgLS1wcmltYXJ5LWZvbnQtYm9sZDogJ0dpbHJveUJvbGQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNi4yNSU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxNnJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtcmVndWxhcik7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHVybCguLi9pbWcvYmFja2dyb3VuZC5qcGcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc2VhcmNoLWJhci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMyU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuLndlbGNvbWUtcGFyYSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250LWJvbGQpICFpbXBvcnRhbnQ7XFxuICBmb250LXNpemU6IDM4cmVtO1xcbn1cXG5cXG4ud2VsY29tZS10ZXh0IHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLndlbGNvbWUtbG9nbyB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wYXJhZ3JhcGgge1xcbiAgZm9udC1zaXplOiAyMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMHB4O1xcbn1cXG5cXG4uZm9ybS1pbmRleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlYXJjaC1iYXItaW5kZXgge1xcbiAgcGFkZGluZzogMTZweCAxOHB4O1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiAnR2lscm95U2VtaUJvbGQnICFpbXBvcnRhbnQ7XFxuICBmb250LXNpemU6IDE2cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnNlYXJjaC1iYXItaW5kZXg6Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB3aWR0aDogNjMwcHg7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL3NlYXJjaC1ib2xkLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ub3BhY2l0eS1hY3RpdmUge1xcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnNlYXJjaC1idG4taW5kZXgge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAwcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAlLCAtNTAlKTtcXG59XFxuXFxuLmdpdGh1Yi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5naXRodWItdXNlciB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDE4cmVtO1xcbn1cXG5cXG4uZ2l0aHViIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9naXRodWIucG5nKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbi8qRm9yZWNhc3QgQ1NTKi9cXG5cXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNjBweCAxMHB4O1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ2FwOiAyNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEzMDBweDtcXG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xcbiAgbWluLWhlaWdodDogNzAwcHg7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ub3BhY2l0eS1mb3JlY2FzdCB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmJveDEsXFxuLmJveDIsXFxuLmJveDMge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLmJveDEge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDE0ZnI7XFxuICBnYXA6IDEzcHg7XFxuICBwYWRkaW5nOiAyMHJlbTtcXG59XFxuXFxuLmJveDIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbiAgcGFkZGluZzogMjVyZW07XFxufVxcblxcbi5ib3gzIHtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAtMiAvIC0xO1xcbiAgcGFkZGluZzogMjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxM3B4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXItZm9yZWNhc3Qge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeS1jb2xvcik7XFxuICBwYWRkaW5nOiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1iYXItZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1iYXItZm9yZWNhc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtZmFtaWx5OiAnR2lscm95U2VtaUJvbGQnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnNlYXJjaC1iYXItZm9yZWNhc3Q6Zm9jdXMge1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uc2VhcmNoLWJ0bi1mb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIHdpZHRoOiAzN3B4O1xcbiAgaGVpZ2h0OiAzN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcmlnaHQ6IDhweDtcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnNlYXJjaC1idG4tZm9yZWNhc3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzM0NzRmZjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnNlYXJjaC1pY29uIHtcXG4gIHdpZHRoOiAxN3B4O1xcbiAgaGVpZ2h0OiAxN3B4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL3NlYXJjaC1ib2xkLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyLWJveCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmN1cnJlbnQtdG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uY3VycmVudC10b3AtbGVmdCB7XFxuICBmbGV4OiAyO1xcbn1cXG5cXG4uY3VycmVudC1ib3R0b20ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBmb250LXNpemU6IDIwcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1ib2xkKTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jbG9jayB7XFxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250LWJvbGQpO1xcbiAgZm9udC1zaXplOiAyNXJlbTtcXG59XFxuXFxuLnRlbXAge1xcbiAgZm9udC1zaXplOiAxMDByZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250LWJvbGQpO1xcbn1cXG5cXG4ubWluLW1heC10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogMjByZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250LWJvbGQpO1xcbn1cXG5cXG4udGVtcC1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmJveC1oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1zZW1pKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMTZyZW07XFxufVxcblxcbi53ZWF0aGVyLWRldGFpbHMge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtc2VtaSk7XFxuICBmb250LXNpemU6IDE0cmVtO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuLndlYXRoZXItZGV0YWlsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTZweCAwcHg7XFxufVxcblxcbi5ib3JkZXItYm90dG9tIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjMyNDMxO1xcbn1cXG5cXG4uZGV0YWlsLWljb24ge1xcbiAgd2lkdGg6IDMzcHg7XFxuICBoZWlnaHQ6IDMzcHg7XFxuICBvcGFjaXR5OiAwLjI1O1xcbn1cXG5cXG4jdGhlcm1hbFNlbnNhdGlvbkljb24ge1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2ltZy9pY29ucy90aGVybWFsLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4jcmFpblByb2JhYmlsaXR5SWNvbiB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1nL2ljb25zL3JhaW4uc3ZnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbiN3aW5kU3BlZWRJY29uIHtcXG4gIGJhY2tncm91bmQ6IHVybCguLi9pbWcvaWNvbnMvd2luZC5zdmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuXFxuI2Fpckh1bWlkaXR5SWNvbiB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1nL2ljb25zL2h1bWlkaXR5LnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4jdXZJbmRleEljb24ge1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2ltZy9pY29ucy9zdW4uc3ZnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbi5kZXRhaWwtbGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjJweDtcXG59XFxuXFxuLmRldGFpbC1kYXRhIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQtYm9sZCk7XFxuICBmb250LXNpemU6IDE2cmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGFpbHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAyNXJlbSAwcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1zZW1pKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XFxuICBmb250LXNpemU6IDE0cmVtO1xcbn1cXG5cXG4uZGF5LWJvdHRvbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE4cmVtO1xcbn1cXG5cXG4uZGF5LWZvcmVjYXN0IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXg6IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kYXktZmxleCB7XFxuICBmbGV4OiAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5kYXkge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1ib2xkKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWluLW1heC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNnB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udC1ib2xkKTtcXG59XFxuXFxuLmRheS1hYnNvbHV0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTYwJSk7XFxufVxcblxcbi53ZWF0aGVyLWltYWdlIHtcXG4gIHdpZHRoOiA4NHJlbTtcXG4gIGhlaWdodDogODRyZW07XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZGF5LW1pbiB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeS1jb2xvcik7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjIwcmVtO1xcbiAgaGVpZ2h0OiAyMjByZW07XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xcbiAgYm90dG9tOiAzMHB4O1xcbiAgcmlnaHQ6IDMwcHg7XFxufVxcblxcbi8qTWVkaWEgUXVlcmllcyovXFxuXFxuLypQSE9ORVMqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICAuc2VhcmNoLWJhci1jb250YWluZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDAlO1xcbiAgfVxcbiAgLmZvcm0taW5kZXgge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5zZWFyY2gtYmFyLWluZGV4IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEycHggMTRweDtcXG4gIH1cXG4gIC5zZWFyY2gtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDMycmVtO1xcbiAgICBoZWlnaHQ6IDMycmVtO1xcbiAgfVxcbiAgLnNlYXJjaC1iYXItaW5kZXg6Zm9jdXMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC53ZWxjb21lLXBhcmEge1xcbiAgICBmb250LXNpemU6IDI2cmVtO1xcbiAgfVxcbiAgLnBhcmFncmFwaCB7XFxuICAgIGZvbnQtc2l6ZTogMTZyZW07XFxuICB9XFxuICAuZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICB9XFxuICAuZm9yZWNhc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuXFxuICAuZm9yZWNhc3QtZGFpbHkge1xcbiAgICBmb250LXNpemU6IDE2cmVtO1xcbiAgfVxcblxcbiAgLmJveDEge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnI7XFxuICAgIHBhZGRpbmc6IDE0cmVtO1xcbiAgfVxcblxcbiAgLmJveDIge1xcbiAgICBwYWRkaW5nOiAyNXJlbSAyMHJlbTtcXG4gIH1cXG5cXG4gIC5ib3gzIHtcXG4gICAgcGFkZGluZzogMjVyZW0gMjByZW07XFxuICAgIG1pbi1oZWlnaHQ6IDI1MHJlbTtcXG4gIH1cXG4gIC5sb2NhdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMThyZW07XFxuICB9XFxuICAuZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTRyZW07XFxuICB9XFxuICAuY2xvY2sge1xcbiAgICBmb250LXNpemU6IDE4cmVtO1xcbiAgfVxcbiAgLnRlbXAge1xcbiAgICBmb250LXNpemU6IDYwcmVtO1xcbiAgfVxcbiAgLm1pbi1tYXgtdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMThyZW07XFxuICB9XFxuICAubWluLW1heC1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmRheS1hYnNvbHV0ZSB7XFxuICAgIHRvcDogNDAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00NSUpO1xcbiAgfVxcbiAgLmN1cnJlbnQtd2VhdGhlci1ib3gge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgfVxcbiAgLmN1cnJlbnQtd2VhdGhlci1pY29uIHtcXG4gICAgYm90dG9tOiAwcHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIHdpZHRoOiAxNTByZW07XFxuICAgIGhlaWdodDogMTUwcmVtO1xcbiAgfVxcbiAgLnNlYXJjaC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGhlaWdodDogMjByZW07XFxuICB9XFxuICAuc2VhcmNoLWJ0bi1pbmRleCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgd2lkdGg6IDUzcHg7XFxuICAgIGhlaWdodDogNDdweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAlLCAtNTAlKTtcXG4gIH1cXG4gIC53ZWF0aGVyLWltYWdlIHtcXG4gICAgd2lkdGg6IDY4cmVtO1xcbiAgICBoZWlnaHQ6IDY4cmVtO1xcbiAgfVxcbiAgLmRheS1ib3R0b20ge1xcbiAgICBnYXA6IDI1cmVtO1xcbiAgfVxcblxcbiAgLndlYXRoZXItZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4vKlRBQkxFVFMqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAvKiBTdHlsZXMgZm9yIHRhYmxldHMgaW4gcG9ydHJhaXQgb3JpZW50YXRpb24gZ28gaGVyZSAqL1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCBoYW5kbGVTZWFyY2ggZnJvbSAnLi9tb2R1bGVzL3NlYXJjaCc7XG5cbmhhbmRsZVNlYXJjaCgpO1xuIl0sIm5hbWVzIjpbImdldFdlYXRoZXJEYXRhIiwic2VhcmNoRm9ybUluZGV4IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNlYXJjaEJhckluZGV4IiwiZ2V0TG9jYXRpb25WYWx1ZSIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsImhhbmRsZVNlYXJjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwid2VhdGhlckRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwiRXJyb3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJpbmZvIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJtYWtlQ29vcmRpbmF0ZXNVUkwiLCJjaXR5IiwiY29uY2F0IiwiZmV0Y2hDb29yZGluYXRlcyIsIl94IiwiX2ZldGNoQ29vcmRpbmF0ZXMiLCJfY2FsbGVlIiwidXJsIiwicmVzcG9uc2UiLCJkYXRhIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImZldGNoIiwibW9kZSIsIm9rIiwianNvbiIsImxhdCIsImxvbiIsInN0YXRlIiwidDAiLCJtZXNzYWdlIiwibWFrZVdlYXRoZXJVUkwiLCJjb29yZGluYXRlcyIsInVuaXRzIiwiZmV0Y2hXZWF0aGVyRGF0YSIsIl94MiIsIl9mZXRjaFdlYXRoZXJEYXRhIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJmZXRjaENvdW50cnlEYXRhIiwiX3gzIiwiX2ZldGNoQ291bnRyeURhdGEiLCJfY2FsbGVlMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImdldExvY2FsVGltZSIsInRpbWV6b25lIiwiY3VycmVudFV0Y1RpbWUiLCJEYXRlIiwibG9jYWxUaW1lIiwidG9Mb2NhbGVTdHJpbmciLCJ0aW1lWm9uZSIsImhvdXIxMiIsImhvdXJzIiwiZ2V0SG91cnMiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJmb3JtYXR0ZWRUaW1lIiwiZ2V0V2VhdGhlckRlc2NyaXB0aW9ucyIsImZldGNoZWRXZWF0aGVyRGF0YSIsIndlYXRoZXJEZXNjcmlwdGlvbnMiLCJkYWlseSIsIndlYXRoZXIiLCJkZXNjcmlwdGlvbiIsIl94NCIsIl94NSIsIl9nZXRXZWF0aGVyRGF0YSIsIl9jYWxsZWU0IiwiY291bnRyeURhdGEiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJjb3VudHJ5IiwiYWRkcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=
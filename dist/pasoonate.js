/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Pasoonate.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Constants.js":
/*!**************************!*\
  !*** ./src/Constants.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Constants {\n\t \n\tconstructor () {\n\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Constants);\n\n//# sourceURL=webpack:///./src/Constants.js?");

/***/ }),

/***/ "./src/Localization.js":
/*!*****************************!*\
  !*** ./src/Localization.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Localization {\n\n    constructor () {\n        this._langs = {};\n        this._locale = 'fa';\n    }\n\n    setLang (name, trans) {\n        this._langs[name] = trans;\n    }\n\n    setLocale(locale) {\n        this._locale = locale || this._locale;\n    }\n\n    getLocale () {\n        return this._locale;\n    }\n\n    isLocale (locale) {\n        return this._locale === locale;\n    }\n\n    hasTransKey (key, locale) {\n        let subKeys = key.split('.');\n        if (this._langs[locale] == undefined) return false;\n        let result = this._langs[locale];\n        for (let i = 0; i < subKeys.length; i++) {\n            if (subKeys[i] in result) {\n                result = result[subKeys[i]];\n                continue;\n            }\n\n            return false;\n        }\n\n        return result;\n    }\n\n    getTrans (key, locale) {\n        let result = this.hasTransKey(key, locale);\n        return result ? result : key;\n    }\n\n    trans (key, locale) {\n        locale = locale || this._locale;\n        key = key || '';\n        return this.getTrans(key, locale);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Localization);\n\n//# sourceURL=webpack:///./src/Localization.js?");

/***/ }),

/***/ "./src/Pasoonate.js":
/*!**************************!*\
  !*** ./src/Pasoonate.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ \"./src/Constants.js\");\n/* harmony import */ var _calendar_CalendarManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar/CalendarManager */ \"./src/calendar/CalendarManager.js\");\n/* harmony import */ var _Localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Localization */ \"./src/Localization.js\");\n/* harmony import */ var _formatter_SimpleDateFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatter/SimpleDateFormat */ \"./src/formatter/SimpleDateFormat.js\");\n\n\n\n\n\nclass Pasoonate extends _Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n\tconstructor () {\n\t\t\n\t}\n\n\tstatic make (timestamp, timezoneOffset) {\n\t\treturn new _calendar_CalendarManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"](timestamp, timezoneOffset);\n\t}\n\n\tstatic trans (key, locale) {\n\t\treturn Pasoonate.localization.trans(key, locale);\n\t}\n\n\tstatic setLocale (locale) {\n\t\tPasoonate.localization.setLocale(locale);\n\t}\n\n\tstatic getLocal () {\n\t\treturn Pasoonate.localization.getLocal();\n\t}\n\n\tstatic isLocal (locale) {\n\t\treturn Pasoonate.localization.isLocal(locale);\n\t}\n\n\tstatic setFormatter (formatter) {\n\t\tPasoonate.formatter = formatter instanceof DateFormat ? formatter : new _formatter_SimpleDateFormat__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\t}\n}\n\nPasoonate.localization = new _Localization__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nObject.defineProperty(Pasoonate, 'localization', {\n    writable: false,\n    configurable: false\n});\n\nPasoonate.formatter = new _formatter_SimpleDateFormat__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nObject.defineProperty(Pasoonate, 'formatter', {\n    writable: true,\n    configurable: false\n});\n\n//# sourceURL=webpack:///./src/Pasoonate.js?");

/***/ }),

/***/ "./src/calendar/Calendar.js":
/*!**********************************!*\
  !*** ./src/calendar/Calendar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Calendar {\n\t\n\tconstructor () {\n\t\tthis.J1970 = 2440587.5;\t\t\t// Julian date at Unix epoch: 1970-01-01\n\t\tthis.DayInSecond = 86400;\n\t}\t\n\n\ttimestampToJulianDay (timestamp) {\n\t\tlet julianDay = this.J1970 + timestamp / this.DayInSecond;\n\n\t\treturn julianDay;\n\t}\n\n\tjulianDayToTimestamp (julianDay) {\n\t\tlet timestamp = Math.round((julianDay - this.J1970) * this.DayInSecond);\n\t\t\n\t\treturn timestamp;\n    }\n\n\tjulianDayWithoutTime (julianDay) {\n\t\t\n\t\treturn Math.floor(julianDay) + 0.5;\n\t}\n\n\textractJulianDayTime (julianDay) {\n        julianDay += 0.5;\n\n        // Astronomical to civil\n        let time = ((julianDay - Math.floor(julianDay)) * this.DayInSecond) + 0.5;\n\n        return {\n        \t\"hour\": Math.floor(time / 3600),\n        \t\"minute\": Math.floor((time / 60) % 60),\n        \t\"second\": Math.floor(time % 60)\n        };\n    }\n\n    addTimeToJulianDay (julianDay, hour, minute, second) {\n    \tlet timestamp = this.julianDayToTimestamp(julianDay);\n    \ttimestamp += (hour * 3600) + (minute * 60) + second;\n\n    \treturn this.timestampToJulianDay(timestamp);\n    }\n\n    dateToJulianDay (year, month, day, hour, minute, second) {\n        //\n    }\n\n    dateToTimestamp (year, month, day, hour, minute, second) {\n        let julianDay = this.dateToJulianDay (year, month, day, hour, minute, second);\n\n        return this.julianDayToTimestamp(julianDay);\n    }\n\n    julianDayToDate (julianDay) {\n        //\n    }\n\n    timestampToDate (timestamp) {\n        let julianDay = this.timestampToJulianDay(timestamp);\n\n        return this.julianDayToDate(julianDay);\n    }\n\n    daysInMonth (year, month) {\n        return 0;\n    }\n\n    dayOfWeek (timestamp) {\n        let julianDay = this.timestampToJulianDay(timestamp);\n        return this.mod(Math.floor((julianDay + 2.5)), 7);\n    }\n\n    dayOfYear (timestamp) {\n        let currentDate = this.timestampToDate(timestamp);\n        let firstOfYearjulianDay = this.dateToJulianDay(currentDate.year, 1, 1, 0, 0, 0);\n        let currentjulianDay = this.dateToJulianDay(currentDate.year, currentDate.month, currentDate.day, currentDate.hour, currentDate.minute, currentDate.second);\n\n        return Math.floor(currentjulianDay - firstOfYearjulianDay + 1);\n    }\n\n    weekOfMonth (timestamp) {\n        let currentDate = this.timestampToDate(timestamp);\n        let firstDayOfMonthTimestamp = this.dateToTimestamp(currentDate.year, currentDate.month, 1, currentDate.hour, currentDate.minute, currentDate.second);\n        let dayOfWeekInCurrentDayOfMonth = this.dayOfWeek(timestamp);\n        let dayOfWeekInFirstDayOfMonth = this.dayOfWeek(firstDayOfMonthTimestamp);\n\n        let week = 1;\n\n        if(currentDate.day <= 7 - dayOfWeekInFirstDayOfMonth) {\n            return week;\n        }\n\n        week += ((currentDate.day - ((7 - dayOfWeekInFirstDayOfMonth) + (dayOfWeekInCurrentDayOfMonth + 1))) / 7) + 1;\n\n        return week;\n    }\n\n    weekOfYear (timestamp) {\n        let currentDate = this.timestampToDate(timestamp);\n        let dayOfYear = this.dayOfYear(timestamp);\n        let firstDayOfYearTimestamp = this.dateToTimestamp(currentDate.year, 1, 1, currentDate.hour, currentDate.minute, currentDate.second);\n        let dayOfWeekInCurrentDayOfYear = this.dayOfWeek(timestamp);\n        let dayOfWeekInFirstDayOfYear = this.dayOfWeek(firstDayOfYearTimestamp);\n\n        let week = 1;\n\n        if(dayOfYear <= 7 - dayOfWeekInFirstDayOfYear) {\n            return week;\n        }\n\n        week += ((dayOfYear - ((7 - dayOfWeekInFirstDayOfYear) + (dayOfWeekInCurrentDayOfYear + 1))) / 7) + 1;\n\n        return week;   \n    }\n\n    mod (a, b) {\n        return a - (b * Math.floor(a / b));\n    }\n\n    isLeap (year) {\n        //\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);\n\n//# sourceURL=webpack:///./src/calendar/Calendar.js?");

/***/ }),

/***/ "./src/calendar/CalendarManager.js":
/*!*****************************************!*\
  !*** ./src/calendar/CalendarManager.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GregorianCalendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GregorianCalendar */ \"./src/calendar/GregorianCalendar.js\");\n/* harmony import */ var _JalaliCalendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JalaliCalendar */ \"./src/calendar/JalaliCalendar.js\");\n/* harmony import */ var _IslamicCalendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IslamicCalendar */ \"./src/calendar/IslamicCalendar.js\");\n/* harmony import */ var _ShiaCalendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShiaCalendar */ \"./src/calendar/ShiaCalendar.js\");\n/* harmony import */ var _mixin_BaseMethodsMixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixin/BaseMethodsMixin */ \"./src/mixin/BaseMethodsMixin.js\");\n/* harmony import */ var _mixin_AdditionAndSubstractionMixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixin/AdditionAndSubstractionMixin */ \"./src/mixin/AdditionAndSubstractionMixin.js\");\n\n\n\n\n\n\n\nclass CalendarManager {\n\t\n\tconstructor (timestamp, timezoneOffset) {\n\t\tthis._gregorian = new _GregorianCalendar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\t\n\t\tthis._jalali = new _JalaliCalendar__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\t\n\t\tthis._islamic = new _IslamicCalendar__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\t\n\t\tthis._shia = new _ShiaCalendar__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\t\tthis._currentCalendar = null;\n\t\tthis._formatter = Pasoonate.formatter;\n\n\t\tthis._formatter.setCalendar(this);\n\n\t\tlet date = new Date();\n\t\tthis._timestamp = timestamp || Math.floor(date.getTime() / 1000); // milisecond to seconds\n\t\tthis._timezoneOffset = timezoneOffset || -date.getTimezoneOffset() * 60; // minute * 60 = offset in seconds\n\t}\n\n\tgregorian (year, month, day, hour, minute, second) {\n\t\tlet date = this._gregorian.timestampToDate(this._timestamp);\t\t\n\t\tyear = year || date.year;\n\t\tmonth = month || date.month;\n\t\tday = day || date.day;\n\t\thour = hour || date.hour;\n\t\tminute = minute || date.minute;\n\t\tsecond = second || date.second;\n\n\t\tthis._timestamp = this._gregorian.dateToTimestamp(year, month, day, hour, minute, second);\n\t\tthis._currentCalendar = this._gregorian;\n\t\treturn this;\n\t}\n\n\tjalali (year, month, day, hour, minute, second) {\n\t\tlet date = this._jalali.timestampToDate(this._timestamp);\t\t\n\t\tyear = year || date.year;\n\t\tmonth = month || date.month;\n\t\tday = day || date.day;\n\t\thour = hour || date.hour;\n\t\tminute = minute || date.minute;\n\t\tsecond = second || date.second;\n\n\t\tthis._timestamp = this._jalali.dateToTimestamp(year, month, day, hour, minute, second);\n\t\tthis._currentCalendar = this._jalali;\n\t\treturn this;\n\t}\n\n\tislamic (year, month, day, hour, minute, second) {\n\t\tlet date = this._islamic.timestampToDate(this._timestamp);\t\t\n\t\tyear = year || date.year;\n\t\tmonth = month || date.month;\n\t\tday = day || date.day;\n\t\thour = hour || date.hour;\n\t\tminute = minute || date.minute;\n\t\tsecond = second || date.second;\n\n\t\tthis._timestamp = this._islamic.dateToTimestamp(year, month, day, hour, minute, second);\n\t\tthis._currentCalendar = this._islamic;\n\t\treturn this;\n\t}\n\n\tshia (year, month, day, hour, minute, second) {\n\t\tlet date = this._shia.timestampToDate(this._timestamp);\t\t\n\t\tyear = year || date.year;\n\t\tmonth = month || date.month;\n\t\tday = day || date.day;\n\t\thour = hour || date.hour;\n\t\tminute = minute || date.minute;\n\t\tsecond = second || date.second;\n\n\t\tthis._timestamp = this._shia.dateToTimestamp(year, month, day, hour, minute, second);\n\t\tthis._currentCalendar = this._shia;\n\t\treturn this;\n\t}\n\n\tformat (pattern, locale) {\n\t\treturn this._formatter.format(pattern, locale);\n\t}\t\n}\n\nObject.assign(CalendarManager.prototype, _mixin_BaseMethodsMixin__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nObject.assign(CalendarManager.prototype, _mixin_AdditionAndSubstractionMixin__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CalendarManager);\n\n\n//# sourceURL=webpack:///./src/calendar/CalendarManager.js?");

/***/ }),

/***/ "./src/calendar/GregorianCalendar.js":
/*!*******************************************!*\
  !*** ./src/calendar/GregorianCalendar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar */ \"./src/calendar/Calendar.js\");\n\n\nclass GregorianCalendar extends _Calendar__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\tconstructor () {\n\t\tsuper();\n        \n        this.GregorianEpoch = 1721425.5;\n        Object.defineProperty(this, 'GregorianEpoch', {\n            writable: false,\n            configurable: false\n        });\n\t}\n\n\tdateToJulianDay (year, month, day, hour, minute, second) {\n\t\tlet julianDay = this.GregorianEpoch - 1;\n\n\t\tjulianDay += 365 * (year - 1);\n\t\tjulianDay += Math.floor((year - 1) / 4);\n\t\tjulianDay += Math.floor((year - 1) / 100) * -1;\n\t\tjulianDay += Math.floor((year - 1) / 400);\n\t\tjulianDay += Math.floor((((367 * month) - 362) / 12) + ((month <= 2) ? 0 : (this.isLeap(year) ? -1 : -2)) + day);\n\n\t\treturn this.addTimeToJulianDay(julianDay, hour, minute, second);\n\t}\n\n    julianDayToDate (julianDay) {\n    \tlet time = this.extractJulianDayTime(julianDay);\n    \t\n    \tjulianDay = this.julianDayWithoutTime(julianDay);\n\n    \tlet wjd = Math.floor(julianDay - 0.5) + 0.5;\n        let depoch = wjd - this.GregorianEpoch;\n        let quadricent = Math.floor(depoch / 146097);\n        let dqc = this.mod(depoch, 146097);\n        let cent = Math.floor(dqc / 36524);\n        let dcent = this.mod(dqc, 36524);\n        let quad = Math.floor(dcent / 1461);\n        let dquad = this.mod(dcent, 1461);\n        let yindex = Math.floor(dquad / 365);\n        let year = (quadricent * 400) + (cent * 100) + (quad * 4) + yindex;\n        if (!((cent == 4) || (yindex == 4))) {\n            year++;\n        }\n        let yearday = wjd - this.julianDayWithoutTime(this.dateToJulianDay(year, 1, 1, time.hour, time.minute, time.second));\n        let leapadj = (wjd < this.julianDayWithoutTime(this.dateToJulianDay(year, 3, 1, time.hour, time.minute, time.second)) ? 0 : (this.isLeap(year) ? 1 : 2));\n        let month = Math.floor((((yearday + leapadj) * 12) + 373) / 367);\n        let day = (wjd - this.julianDayWithoutTime(this.dateToJulianDay(year, month, 1, time.hour, time.minute, time.second))) + 1;\n\n        return {\n        \t\"year\": year,\n        \t\"month\": month,\n        \t\"day\": day,\n        \t\"hour\": time.hour,\n        \t\"minute\": time.minute,\n        \t\"second\": time.second,\n        }\n\n    }\n\n    daysInMonth (year, month) {\n        let gregorianDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];\n        \n        if (month < 1 || month > 12) {\n            throw new RangeException(\"$month Out Of Range Exception\");\n        }\n        \n        if (year && this.isLeap(year) && month == 2) {\n            return 29;\n        }\n        \n        return gregorianDaysInMonth[month - 1];\n    }\n\n    isLeap (year) {\n        return ((year % 4) == 0) && (!(((year % 100) == 0) && ((year % 400) != 0)));\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GregorianCalendar);\n\n//# sourceURL=webpack:///./src/calendar/GregorianCalendar.js?");

/***/ }),

/***/ "./src/calendar/IslamicCalendar.js":
/*!*****************************************!*\
  !*** ./src/calendar/IslamicCalendar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar */ \"./src/calendar/Calendar.js\");\n\n\nclass IslamicCalendar extends _Calendar__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\t\n\tconstructor () {\n        super();\n        \n\t\tthis.IslamicEpoch = 1948439.5;\n\t\tObject.defineProperty(this, 'IslamicEpoch', {\n            writable: false,\n            configurable: false\n        });\n\t}\n\n\tdateToJulianDay (year, month, day, hour, minute, second) {\n        let julianDay = day;\n\n        julianDay += Math.ceil((month - 1) * 29.5);\n        julianDay += (year - 1) * 354;\n        julianDay += Math.floor(((11 * year) + 3) / 30);\n        julianDay += this.IslamicEpoch - 1;\n\n\t\treturn this.addTimeToJulianDay(julianDay, hour, minute, second);\n\t}\n\n    julianDayToDate (julianDay) {\n        let time = this.extractJulianDayTime(julianDay);\n        \n        julianDay = this.julianDayWithoutTime(julianDay);\n        julianDay = Math.floor(julianDay) + 0.5;\n        \n        let year = Math.floor((((julianDay - this.IslamicEpoch) * 30) + 10646) / 10631);\n        let month = Math.min(12, Math.ceil((julianDay - (29 + this.julianDayWithoutTime(this.dateToJulianDay(year, 1, 1, time.hour, time.minute, time.second)))) / 29.5) + 1);\n        let day = (julianDay - this.julianDayWithoutTime(this.dateToJulianDay(year, month, 1, time.hour, time.minute, time.second))) + 1;\n\n        return {\n        \t\"year\": year,\n        \t\"month\": month,\n        \t\"day\": day,\n        \t\"hour\": time.hour,\n        \t\"minute\": time.minute,\n        \t\"second\": time.second,\n        }\n    }\n\n    daysInMonth (year, month) {\n        let islamicDaysInMonth = [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29]; //30\n\n        if (month < 1 || month > 12) {\n            throw new RangeException(\"$month Out Of Range Exception\");\n        }\n        \n        if (year && this.isLeap(year) && month == 12) {\n            return 30;\n        }\n        \n        return islamicDaysInMonth[month - 1];\n    }\n\n    isLeap (year) {\n        let isLeap = (((year * 11) + 14) % 30) < 11;\n        return isLeap;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IslamicCalendar);\n\n//# sourceURL=webpack:///./src/calendar/IslamicCalendar.js?");

/***/ }),

/***/ "./src/calendar/JalaliCalendar.js":
/*!****************************************!*\
  !*** ./src/calendar/JalaliCalendar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar */ \"./src/calendar/Calendar.js\");\n\n\nclass JalaliCalendar extends _Calendar__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\t\n\tconstructor () {\n        super();\n\n\t\tthis.JalaliEpoch = 1948320.5;\n\t\tObject.defineProperty(this, 'JalaliEpoch', {\n            writable: false,\n            configurable: false\n        });\n\t}\n\n\tdateToJulianDay (year, month, day, hour, minute, second) {\n\t\tlet epochBase = year - (year >= 0 ? 474 : 473);\n        let epochYear = 474 + this.mod(epochBase, 2820);\n        let julianDay = day;\n\n        julianDay += month <= 7 ? (month - 1) * 31 : ((month - 1) * 30) + 6;\n        julianDay += Math.floor(((epochYear * 682) - 110) / 2816);\n        julianDay += (epochYear - 1) * 365;\n        julianDay += Math.floor(epochBase / 2820) * 1029983;\n        julianDay += this.JalaliEpoch - 1;\n\n\t\treturn this.addTimeToJulianDay(julianDay, hour, minute, second);\n\t}\n\n    julianDayToDate (julianDay) {\n    \tlet time = this.extractJulianDayTime(julianDay);\n    \t\n    \tjulianDay = this.julianDayWithoutTime(julianDay);\n\n    \tjulianDay = Math.floor(julianDay) + 0.5;\n\n        let depoch = julianDay - this.julianDayWithoutTime(this.dateToJulianDay(475, 1, 1, time.hour, time.minute, time.second));\n        let cycle = Math.floor(depoch / 1029983);\n        let cyear = this.mod(depoch, 1029983);        \n    \tlet ycycle, aux1, aux2;\n\n        if (cyear == 1029982) {\n            ycycle = 2820;\n        } else {\n            aux1 = Math.floor(cyear / 366);\n            aux2 = this.mod(cyear, 366);\n            ycycle = Math.floor(((2134 * aux1) + (2816 * aux2) + 2815) / 1028522) + aux1 + 1;\n        }\n        \n        let year = ycycle + (2820 * cycle) + 474;\n        \n        if (year <= 0) {\n            year--;\n        }\n        \n        let yday = (julianDay - this.julianDayWithoutTime(this.dateToJulianDay(year, 1, 1, time.hour, time.minute, time.second))) + 1;\n        let month = (yday <= 186) ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);\n        let day = (julianDay - this.julianDayWithoutTime(this.dateToJulianDay(year, month, 1, time.hour, time.minute, time.second))) + 1;\n            \n        return {\n        \t\"year\": year,\n        \t\"month\": month,\n        \t\"day\": day,\n        \t\"hour\": time.hour,\n        \t\"minute\": time.minute,\n        \t\"second\": time.second,\n        }\n    }\n\n    daysInMonth (year, month) {\n        let gregorianDaysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]; //30\n        \n        if (month < 1 || month > 12) {\n            throw new RangeException(\"$month Out Of Range Exception\");\n        }\n        \n        if (year && this.isLeap(year) && month == 12) {\n            return 30;\n        }\n        \n        return gregorianDaysInMonth[month - 1];\n    }\n\n    isLeap (year) {\n        return ((((((year - ((year > 0) ? 474 : 473)) % 2820) + 474) + 38) * 682) % 2816) < 682;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (JalaliCalendar);\n\n//# sourceURL=webpack:///./src/calendar/JalaliCalendar.js?");

/***/ }),

/***/ "./src/calendar/ShiaCalendar.js":
/*!**************************************!*\
  !*** ./src/calendar/ShiaCalendar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar */ \"./src/calendar/Calendar.js\");\n\n\nclass ShiaCalendar extends _Calendar__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\t\n\tconstructor () {\n        super();\n        \n\t\tthis.ShiaEpoch = 1948439.5;\n\t\tObject.defineProperty(this, 'ShiaEpoch', {\n            writable: false,\n            configurable: false\n        });\n\t}\n\n\tdateToJulianDay (year, month, day, hour, minute, second) {\n        let dayOfYear = day;\n        let julianDay = 0;\n\n        for (let i = 1; i < month; i++) {\n            dayOfYear += this.daysInMonth(year, i);\n        }\n\n        julianDay += dayOfYear;\n        julianDay += (year - 1) * 354;\n        julianDay += Math.floor(((11 * year) + 3) / 30);\n        julianDay += this.ShiaEpoch - 1;\n\n\t\treturn this.addTimeToJulianDay(julianDay, hour, minute, second);\n\t}\n\n    julianDayToDate (julianDay) {\n        let time = this.extractJulianDayTime(julianDay);\n        \n        julianDay = this.julianDayWithoutTime(julianDay);\n        julianDay = Math.floor(julianDay) + 0.5;\n        \n        let year = Math.floor((((julianDay - this.ShiaEpoch) * 30) + 10646) / 10631);\n        let month = Math.min(12, Math.ceil((julianDay - (29 + this.julianDayWithoutTime(this.dateToJulianDay(year, 1, 1, time.hour, time.minute, time.second)))) / 29.5) + 1);\n        let dayOfYear = julianDay - this.julianDayWithoutTime(this.dateToJulianDay(year, 1, 1, time.hour, time.minute, time.second));\n        let days = 0;\n        for (let i = 1; i <= 12; i++) {\n            days += this.daysInMonth(year, i);\n            if (dayOfYear < days) {\n                month = i;\n                break;\n            }\n        }\n        let day = (julianDay - ((days - this.daysInMonth(year, month)) + ((year - 1) * 354) + Math.floor((3 + (11 * year)) / 30) + this.ShiaEpoch) + 1);\n\n        return {\n        \t\"year\": year,\n        \t\"month\": month,\n        \t\"day\": day,\n        \t\"hour\": time.hour,\n        \t\"minute\": time.minute,\n        \t\"second\": time.second,\n        }\n    }\n\n    daysInMonth (year, month) {\n \t\tlet islamicDaysInMonth = [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29]; //30\n        let shiaDaysInMonthInYears = {\n            1435: [29, 30, 29, 30, 29, 30, 29, 30, 30, 30, 29, 30],\n            1436: [29, 30, 29, 29, 30, 29, 30, 29, 30, 29, 30, 30],\n            1437: [29, 30, 30, 29, 30, 29, 29, 30, 29, 29, 30, 30],\n            1438: [29, 30, 30, 30, 29, 30, 29, 29, 30, 29, 29, 30],\n            1439: [29, 30, 30, 30, 30, 29, 30, 29, 29, 30, 29, 29],\n            1440: [30, 29, 30, 30, 30, 29, 29, 30, 29, 30, 29, 29],\n        };\n\n        if (month < 1 || month > 12) {\n            throw new RangeException(\"$month Out Of Range Exception\");\n        }\n\n        if (shiaDaysInMonthInYears[year] === undefined) {\n            return islamicDaysInMonth[month - 1];\n        }\n\n        return shiaDaysInMonthInYears[year][month - 1];   \t\n    }\n\n    isLeap (year) {\n        let isLeap = (((year * 11) + 14) % 30) < 11;\n\t\treturn isLeap;\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShiaCalendar);\n\n//# sourceURL=webpack:///./src/calendar/ShiaCalendar.js?");

/***/ }),

/***/ "./src/formatter/DateFormat.js":
/*!*************************************!*\
  !*** ./src/formatter/DateFormat.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass DateFormat {\n\t\n\tconstructor () {\n\t\tthis._calendar = null;\n\t}\n\n\tsetCalendar (calendar) {\n\t\tthis._calendar = calendar instanceof CalendarManager ? calendar : null;\n\t}\n\n\tgetCalendar () {\n\t\treturn this._calendar;\n\t}\n\n\tformat () {\n\t\tif(this.getCalendar() === null) {\n\t\t\treturn \"\";\n\t\t}\n\n\t\treturn `${this._calendar.getYear()}-${this._calendar.getMonth()}-${this._calendar.getDay()} ${this._calendar.getHour()}:${this._calendar.getMinute()}:${this._calendar.getSecond()}`;\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DateFormat);\n\n//# sourceURL=webpack:///./src/formatter/DateFormat.js?");

/***/ }),

/***/ "./src/formatter/SimpleDateFormat.js":
/*!*******************************************!*\
  !*** ./src/formatter/SimpleDateFormat.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DateFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateFormat */ \"./src/formatter/DateFormat.js\");\n\n\nclass SimpleDateFormat extends _DateFormat__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\t\n\tconstructor () {\n\t\tsuper();\n\t}\n\n\tformat (pattern, locale) {\n\t\treturn this.compile(pattern, locale);\n\t}\n\n\tcompile (pattern, locale) {\n\t\tpattern = String(pattern).toLowerCase();\n\n\t\tlet result = pattern;\n\n\t\tconst Signs = ['y', 'm', 'd'];\n\t\tconst FullYear = 'yyyy';\n\t\tconst ShortYear = 'yy';\n\t\tconst Month = 'mm';\n\t\tconst SingleMonth = 'm';\n\t\tconst Day = 'dd';\n\t\tconst SingleDay = 'd';\n\n\t\tlet chars = [];\n\t\tlet prevChar = '';\n\t\tlet currChar = '';\n\t\tlet index = 0;\n\n\t\tfor (let i = 0; i < pattern.length; i++) {\n\t\t\tcurrChar = Signs.includes(pattern[i]) ? pattern[i] : '';\n\n\t\t\tif(currChar === '') {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\tif(currChar === prevChar) {\n\t\t\t\tchars[index].text += currChar;\n\t\t\t} else {\n\t\t\t\tchars[++index] = { text: currChar, position: i};\n\t\t\t}\n\t\t\tprevChar = currChar;\n\t\t}\n\n\t\tfor (let i in chars) {\n\t\t\tswitch (chars[i].text) {\n\t\t\t\tcase FullYear:\n\t\t\t\t\tresult = result.replace(FullYear, this.getCalendar().getYear());\n\t\t\t\tbreak;\n\t\t\t\tcase ShortYear:\n\t\t\t\t\tresult = result.replace(ShortYear, String(this.getCalendar().getYear()).substr(-2, 2));\n\t\t\t\tbreak;\n\t\t\t\tcase SingleMonth:\n\t\t\t\t\tresult = result.replace(SingleMonth, this.getCalendar().getMonth());\n\t\t\t\tbreak;\n\t\t\t\tcase Month:\n\t\t\t\t\tresult = result.replace(Month, this.getCalendar().getMonth() > 9 ? this.getCalendar().getMonth() : '0' + this.getCalendar().getMonth());\n\t\t\t\tbreak;\n\t\t\t\tcase SingleDay:\n\t\t\t\t\tresult = result.replace(SingleDay, this.getCalendar().getDay());\n\t\t\t\tbreak;\n\t\t\t\tcase Day:\n\t\t\t\t\tresult = result.replace(Day, this.getCalendar().getDay() > 9 ? this.getCalendar().getDay() : '0' + this.getCalendar().getDay());\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t\treturn result;\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleDateFormat);\n\n//# sourceURL=webpack:///./src/formatter/SimpleDateFormat.js?");

/***/ }),

/***/ "./src/mixin/AdditionAndSubstractionMixin.js":
/*!***************************************************!*\
  !*** ./src/mixin/AdditionAndSubstractionMixin.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nlet AdditionAndSubstractionMixin = {\n\taddYear(count) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);\n\t\tlet timestamp = this._currentCalendar.dateToTimestamp(date.year + count, date.month, date.day, date.hour, date.minute, date.second);\n\t\tthis._timestamp = timestamp - this._timezoneOffset;\n\t\treturn this;\n\t},\n\n\taddMonth(count) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);\n\t\tlet totalMonth = date.month + count;\n\t\tlet year = date.year + Math.floor(totalMonth / 12);\n\t\tlet month = totalMonth % 12;\n\t\tlet timestamp = this._currentCalendar.dateToTimestamp(year, month, date.day, date.hour, date.minute, date.second);\n\t\tthis._timestamp = timestamp - this._timezoneOffset;\n\t\treturn this;\n\t},\n\n\taddDay(count) {\n\t\tthis._timestamp += (count * 86400);\n\t\treturn this;\n\t},\n\n\taddHour(count) {\n\t\tthis._timestamp += (count * 3600);\n\t\treturn this;\n\t},\n\n\taddMinute(count) {\n\t\tthis._timestamp += (count * 60);\n\t\treturn this;\n\t},\n\n\taddSecond(count) {\n\t\tthis._timestamp += count;\n\t\treturn this;\n\t},\n\n\tsubYear(count) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);\n\t\tlet timestamp = this._currentCalendar.dateToTimestamp(date.year - count, date.month, date.day, date.hour, date.minute, date.second);\n\t\tthis._timestamp = timestamp - this._timezoneOffset;\n\t\treturn this;\n\t},\n\n\tsubMonth(count) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);\n\t\tlet totalMonth = date.month - count;\n\t\tlet year = date.year;\n\t\tlet month = totalMonth;\n\n\t\tif(totalMonth <= 0) {\n\t\t\ttotalMonth = -totalMonth;\n\t\t\tyear -= Math.floor(totalMonth / 12) + 1;\n\t\t\tmonth = 12 - (totalMonth % 12);\n\t\t}\n\n\t\tlet timestamp = this._currentCalendar.dateToTimestamp(year, month, date.day, date.hour, date.minute, date.second);\n\t\tthis._timestamp = timestamp - this._timezoneOffset;\n\t\treturn this;\n\t},\n\n\tsubDay(count) {\n\t\tthis._timestamp -= (count * 86400);\n\t\treturn this;\n\t},\n\n\tsubHour(count) {\n\t\tthis._timestamp -= (count * 3600);\n\t\treturn this;\n\t},\n\n\tsubMinute(count) {\n\t\tthis._timestamp -= (count * 60);\n\t\treturn this;\n\t},\n\n\tsubSecond(count) {\n\t\tthis._timestamp -= count;\n\t\treturn this;\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdditionAndSubstractionMixin);\n\n//# sourceURL=webpack:///./src/mixin/AdditionAndSubstractionMixin.js?");

/***/ }),

/***/ "./src/mixin/BaseMethodsMixin.js":
/*!***************************************!*\
  !*** ./src/mixin/BaseMethodsMixin.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet BaseMethodsMixin = {\n\tsetTimestamp (timestamp) {\n\t\tthis._timestamp = timestamp;\n\n\t\treturn this;\n\t},\n\n\tgetTimestamp () {\n\t\treturn this._timestamp;\n\t},\n\n\tsetTimezoneOffset (timezoneOffset) {\n\t\tthis._timezoneOffset = timezoneOffset;\n\n\t\treturn this;\n\t},\n\n\tgetTimezoneOffset () {\n\t\treturn this._timezoneOffset;\n\t},\n\n\tsetYear (year) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);\n\t\tlet timestamp = this._currentCalendar.dateToTimestamp(year, date.month, date.day, date.hour, date.minute, date.second);\n\t\tthis._timestamp = timestamp - this._timezoneOffset;\n\t\treturn this;\n\t},\n\n\tgetYear () {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);\n\t\treturn date.year;\n\t},\t\n\n\tsetMonth (month) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);\n\t\tlet timestamp = this._currentCalendar.dateToTimestamp(date.year, month, date.day, date.hour, date.minute, date.second);\n\t\tthis._timestamp = timestamp - this._timezoneOffset;\n\t\treturn this;\n\t},\n\n\tgetMonth () {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);\n\t\treturn date.month;\n\t},\n\n\tsetDay (day) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);\n\t\tlet timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, day, date.hour, date.minute, date.second);\n\t\tthis._timestamp = timestamp - this._timezoneOffset;\n\t\treturn this;\n\t},\n\n\tgetDay () {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);\n\t\treturn date.day;\t\n\t},\n\n\tsetHour (hour) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);\n\t\tlet timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, hour, date.minute, date.second);\n\t\tthis._timestamp = timestamp - this._timezoneOffset;\n\t\treturn this;\n\t},\n\n\tgetHour () {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);\n\t\treturn date.hour;\n\t},\n\n\tsetMinute (minute) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);\n\t\tlet timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, date.hour, minute, date.second);\n\t\tthis._timestamp = timestamp - this._timezoneOffset;\n\t\treturn this;\n\t},\n\n\tgetMinute () {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);\n\t\treturn date.minute;\n\t},\n\n\tsetSecond (second) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);\n\t\tlet timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, date.hour, date.minute, second);\n\t\tthis._timestamp = timestamp - this._timezoneOffset;\n\t\treturn this;\n\t},\n\n\tgetSecond () {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);\n\t\treturn date.second;\n\t},\n\n\tsetUTCYear (year) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp);\n\t\tthis._timestamp = this._currentCalendar.dateToTimestamp(year, date.month, date.day, date.hour, date.minute, date.second);\n\t\treturn this;\n\t},\n\t\n\tgetUTCYear () {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp);\n\t\treturn date.year;\n\t},\n\n\tsetUTCMonth (month) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp);\n\t\tthis._timestamp = this._currentCalendar.dateToTimestamp(date.year, month, date.day, date.hour, date.minute, date.second);\n\t\treturn this;\n\t},\n\t\n\tgetUTCMonth () {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp);\n\t\treturn date.month;\n\t},\n\n\tsetUTCDay (day) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp);\n\t\tthis._timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, day, date.hour, date.minute, date.second);\n\t\treturn this;\n\t},\n\t\n\tgetUTCDay () {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp);\n\t\treturn date.day;\t\n\t},\n\n\tsetUTCHour (hour) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp);\n\t\tthis._timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, hour, date.minute, date.second);\n\t\treturn this;\n\t},\n\t\n\tgetUTCHour () {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp);\n\t\treturn date.hour;\n\t},\n\n\tsetUTCMinute (minute) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp);\n\t\tthis._timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, date.hour, minute, date.second);\n\t\treturn this;\n\t},\n\t\n\tgetUTCMinute () {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp);\n\t\treturn date.minute;\n\t},\n\n\tsetUTCSecond (second) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp);\n\t\tthis._timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, date.hour, date.minute, second);\n\t\treturn this;\n\t},\n\n\tgetUTCSecond () {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp);\n\t\treturn date.second;\n\t},\n\n\tsetDate (year, month, day) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);\n\t\tlet timestamp = this._currentCalendar.dateToTimestamp(year, month, day, date.hour, date.minute, date.second);\n\t\tthis._timestamp = timestamp - this._timezoneOffset;\n\t\treturn this;\n\t},\n\t\n\tsetTime (hour, minute, second) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);\n\t\tlet timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, hour, minute, second);\n\t\tthis._timestamp = timestamp - this._timezoneOffset;\n\t\treturn this;\n\t},\n\t\n\tsetDateTime (year, month, day, hour, minute, second) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);\n\t\tlet timestamp = this._currentCalendar.dateToTimestamp(year, month, day, hour, minute, second);\n\t\tthis._timestamp = timestamp - this._timezoneOffset;\n\t\treturn this;\n\t},\n\n\tsetUTCDate (year, month, day) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp);\n\t\tthis._timestamp = this._currentCalendar.dateToTimestamp(year, month, day, date.hour, date.minute, date.second);\n\t\treturn this;\n\t},\n\t\n\tsetUTCTime (hour, minute, second) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp);\n\t\tthis._timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, hour, minute, second);\n\t\treturn this;\n\t},\n\t\n\tsetUTCDateTime (year, month, day, hour, minute, second) {\n\t\tlet date = this._currentCalendar.timestampToDate(this._timestamp);\n\t\tthis._timestamp = this._currentCalendar.dateToTimestamp(year, month, day, hour, minute, second);\n\t\treturn this;\n\t},\n\n\tdayOfWeek () {\n\t\treturn this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset);\n    },\n\n    dayOfYear () {\n        return this._currentCalendar.dayOfYear(this._timestamp + this._timezoneOffset);\n    },\n\n    weekOfMonth () {\n    \treturn this._currentCalendar.weekOfMonth(this._timestamp + this._timezoneOffset);\n    },\n\n    weekOfYear () {\n    \treturn this._currentCalendar.weekOfYear(this._timestamp + this._timezoneOffset);\n    },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseMethodsMixin);\n\n//# sourceURL=webpack:///./src/mixin/BaseMethodsMixin.js?");

/***/ })

/******/ });
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Constants = _interopRequireDefault(require("./Constants"));
var _Localization = _interopRequireDefault(require("./Localization"));
var _DateFormat = _interopRequireDefault(require("./formatter/DateFormat"));
var _SimpleDateFormat = _interopRequireDefault(require("./formatter/SimpleDateFormat"));
var _CalendarManager = _interopRequireDefault(require("./calendar/CalendarManager"));
var _SimpleParser = _interopRequireDefault(require("./parser/SimpleParser"));
var _Parser = _interopRequireDefault(require("./parser/Parser"));
var _fa = _interopRequireDefault(require("./lang/fa"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Pasoonate = /*#__PURE__*/function () {
  function Pasoonate() {
    _classCallCheck(this, Pasoonate);
  }
  return _createClass(Pasoonate, null, [{
    key: "make",
    value: function make(timestamp, timezoneOffset) {
      return new _CalendarManager["default"](timestamp, timezoneOffset);
    }
  }, {
    key: "trans",
    value: function trans(key, locale) {
      return Pasoonate.localization.trans(key, locale);
    }
  }, {
    key: "setLocale",
    value: function setLocale(locale) {
      Pasoonate.localization.setLocale(locale);
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return Pasoonate.localization.getLocale();
    }
  }, {
    key: "isLocale",
    value: function isLocale(locale) {
      return Pasoonate.localization.isLocale(locale);
    }
  }, {
    key: "setFormatter",
    value: function setFormatter(formatter) {
      Pasoonate.formatter = formatter instanceof _DateFormat["default"] ? formatter : new _SimpleDateFormat["default"]();
    }

    /**
     * 
     * @param {Parser} parser 
     */
  }, {
    key: "setParser",
    value: function setParser(parser) {
      Pasoonate.parser = parser instanceof _Parser["default"] ? parser : new _SimpleParser["default"]();
    }

    /**
     *
     * @param {CalendarManager} instance 
     * @return {CalendarManager}
     */
  }, {
    key: "clone",
    value: function clone(instance) {
      return Pasoonate.make(instance.getTimestamp(), instance.getTimezoneOffset());
    }
  }]);
}();
Object.assign(Pasoonate, _Constants["default"]);
Pasoonate.localization = new _Localization["default"]();
Object.defineProperty(Pasoonate, 'localization', {
  writable: false,
  configurable: false
});
Pasoonate.formatter = new _SimpleDateFormat["default"]();
Object.defineProperty(Pasoonate, 'formatter', {
  writable: false,
  configurable: false
});
Pasoonate.parser = new _SimpleParser["default"]();
Object.defineProperty(Pasoonate, 'parser', {
  writable: false,
  configurable: false
});
Pasoonate.localization.setLang('fa', _fa["default"]);
var _default = exports["default"] = Pasoonate;
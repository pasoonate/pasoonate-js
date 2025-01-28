'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Pasoonate = _interopRequireDefault(require("../Pasoonate"));
var _GregorianCalendar = _interopRequireDefault(require("./GregorianCalendar"));
var _JalaliCalendar = _interopRequireDefault(require("./JalaliCalendar"));
var _IslamicCalendar = _interopRequireDefault(require("./IslamicCalendar"));
var _ShiaCalendar = _interopRequireDefault(require("./ShiaCalendar"));
var _Base = _interopRequireDefault(require("../mixin/Base"));
var _AdditionAndSubstraction = _interopRequireDefault(require("../mixin/AdditionAndSubstraction"));
var _Difference = _interopRequireDefault(require("../mixin/Difference"));
var _Comparison = _interopRequireDefault(require("../mixin/Comparison"));
var _Modifiers = _interopRequireDefault(require("../mixin/Modifiers"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CalendarManager = /*#__PURE__*/function () {
  function CalendarManager(timestamp, timezoneOffset) {
    _classCallCheck(this, CalendarManager);
    this._gregorian = new _GregorianCalendar["default"]();
    this._jalali = new _JalaliCalendar["default"]();
    this._islamic = new _IslamicCalendar["default"]();
    this._shia = new _ShiaCalendar["default"]();
    this._currentCalendar = null;
    this._formatter = _Pasoonate["default"].formatter;
    this._parser = _Pasoonate["default"].parser;
    var date = new Date();
    this._timestamp = timestamp || Math.floor(date.getTime() / 1000); // millisecond to seconds
    this._timezoneOffset = timezoneOffset || -date.getTimezoneOffset() * 60; // minute * 60 = offset in seconds
  }
  return _createClass(CalendarManager, [{
    key: "gregorian",
    value: function gregorian(dateTime) {
      this._currentCalendar = this._gregorian;
      if (dateTime) {
        this.parse("yyyy-MM-dd HH:mm:ss", dateTime);
      }
      return this;
    }
  }, {
    key: "jalali",
    value: function jalali(dateTime) {
      this._currentCalendar = this._jalali;
      if (dateTime) {
        this.parse("yyyy-MM-dd HH:mm:ss", dateTime);
      }
      return this;
    }
  }, {
    key: "islamic",
    value: function islamic(dateTime) {
      this._currentCalendar = this._islamic;
      if (dateTime) {
        this.parse("yyyy-MM-dd HH:mm:ss", dateTime);
      }
      return this;
    }
  }, {
    key: "shia",
    value: function shia(dateTime) {
      this._currentCalendar = this._shia;
      if (dateTime) {
        this.parse("yyyy-MM-dd HH:mm:ss", dateTime);
      }
      return this;
    }
  }, {
    key: "name",
    value: function name(calendar) {
      if (calendar) {
        calendar = String(calendar).toLowerCase();
        var instance = this["_".concat(calendar)];
        if (instance) {
          this._currentCalendar = instance;
        }
        return;
      }
      return this._currentCalendar ? this._currentCalendar.getName() : '';
    }

    /**
     * 
     * @param {String} pattern 
     * @param {String} text 
     * 
     * @return {CalendarManager}
     */
  }, {
    key: "parse",
    value: function parse(pattern, text) {
      this._parser.calendar = this;
      this._parser.parse(pattern, text);
      return this;
    }
  }, {
    key: "format",
    value: function format(pattern, locale) {
      this._formatter.setCalendar(this);
      return this._formatter.format(pattern, locale);
    }
  }, {
    key: "clone",
    value: function clone() {
      return _Pasoonate["default"].make(this.getTimestamp(), this.getTimezoneOffset());
    }
  }]);
}();
Object.assign(CalendarManager.prototype, _Base["default"]);
Object.assign(CalendarManager.prototype, _AdditionAndSubstraction["default"]);
Object.assign(CalendarManager.prototype, _Difference["default"]);
Object.assign(CalendarManager.prototype, _Comparison["default"]);
Object.assign(CalendarManager.prototype, _Modifiers["default"]);
var _default = exports["default"] = CalendarManager;
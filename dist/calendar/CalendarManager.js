"use strict";

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

  _createClass(CalendarManager, [{
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

  return CalendarManager;
}();

Object.assign(CalendarManager.prototype, _Base["default"]);
Object.assign(CalendarManager.prototype, _AdditionAndSubstraction["default"]);
Object.assign(CalendarManager.prototype, _Difference["default"]);
Object.assign(CalendarManager.prototype, _Comparison["default"]);
Object.assign(CalendarManager.prototype, _Modifiers["default"]);
var _default = CalendarManager;
exports["default"] = _default;
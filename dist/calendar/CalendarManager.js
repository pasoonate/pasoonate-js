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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
    var date = new Date();
    this._timestamp = timestamp || Math.floor(date.getTime() / 1000); // millisecond to seconds

    this._timezoneOffset = timezoneOffset !== undefined || -date.getTimezoneOffset() * 60; // minute * 60 = offset in seconds
  }

  _createClass(CalendarManager, [{
    key: "gregorian",
    value: function gregorian(strDateTime) {
      this._currentCalendar = this._gregorian;
      this.parse(strDateTime);
      return this;
    }
  }, {
    key: "jalali",
    value: function jalali(strDateTime) {
      this._currentCalendar = this._jalali;
      this.parse(strDateTime);
      return this;
    }
  }, {
    key: "islamic",
    value: function islamic(strDateTime) {
      this._currentCalendar = this._islamic;
      this.parse(strDateTime);
      return this;
    }
  }, {
    key: "shia",
    value: function shia(strDateTime) {
      this._currentCalendar = this._shia;
      this.parse(strDateTime);
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
  }, {
    key: "parse",
    value: function parse(expression) {
      if (this._currentCalendar && expression) {
        var _String$trim$split = String(expression).trim().split(' '),
            _String$trim$split2 = _slicedToArray(_String$trim$split, 2),
            date = _String$trim$split2[0],
            time = _String$trim$split2[1];

        if (date) {
          var _date$trim$split = date.trim().split(/[/-]/g),
              _date$trim$split2 = _slicedToArray(_date$trim$split, 3),
              year = _date$trim$split2[0],
              month = _date$trim$split2[1],
              day = _date$trim$split2[2];

          this.setDate(Number(year), Number(month) || 1, Number(day) || 1);
        }

        if (time) {
          var _time$trim$split = time.trim().split(':'),
              _time$trim$split2 = _slicedToArray(_time$trim$split, 3),
              hour = _time$trim$split2[0],
              minute = _time$trim$split2[1],
              second = _time$trim$split2[2];

          this.setTime(Number(hour) || 0, Number(minute) || 0, Number(second) || 0);
        }
      }

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
'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Calendar2 = _interopRequireDefault(require("./Calendar"));
var _Constants = _interopRequireDefault(require("../Constants"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var JalaliCalendar = /*#__PURE__*/function (_Calendar) {
  function JalaliCalendar() {
    var _this;
    _classCallCheck(this, JalaliCalendar);
    _this = _callSuper(this, JalaliCalendar);
    _this.name = _Constants["default"].Jalali;
    _this.JalaliEpoch = 1948320.5;
    Object.defineProperty(_this, 'JalaliEpoch', {
      writable: false,
      configurable: false
    });
    return _this;
  }
  _inherits(JalaliCalendar, _Calendar);
  return _createClass(JalaliCalendar, [{
    key: "dateToJulianDay",
    value: function dateToJulianDay(year, month, day, hour, minute, second) {
      var timestamp = 0;
      var days = 0;
      days += Math.floor((year - 1) * _Constants["default"].DaysOfTropicalJalaliYear);
      days += month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6;
      days += day - 1;
      if (this.isLeap(year - 1)) {
        days++;
      }
      timestamp += days * _Constants["default"].DayInSeconds;
      timestamp += hour * _Constants["default"].HourInSeconds + minute * _Constants["default"].SecondsPerMinute + second;
      timestamp -= 42531868800;
      return this.timestampToJulianDay(timestamp);
    }
  }, {
    key: "julianDayToDate",
    value: function julianDayToDate(julianDay) {
      var timestamp = this.julianDayToTimestamp(julianDay);
      var base = timestamp + 42531868800;
      var second = this.mod(base, _Constants["default"].SecondsPerMinute);
      var minute = Math.floor(this.mod(base, _Constants["default"].HourInSeconds) / _Constants["default"].SecondsPerMinute);
      var hour = Math.floor(this.mod(base, _Constants["default"].DayInSeconds) / _Constants["default"].HourInSeconds);
      var days = Math.floor(base / _Constants["default"].DayInSeconds);
      var fyear = Math.floor(days / _Constants["default"].DaysOfTropicalJalaliYear);
      var year = Math.floor(days / _Constants["default"].DaysOfJalaliYear);
      var dayOfYear = days - Math.floor(fyear * _Constants["default"].DaysOfTropicalJalaliYear);
      if (this.isLeap(fyear)) {
        dayOfYear--;
      }
      if (dayOfYear >= _Constants["default"].DaysOfJalaliYear && !this.isLeap(year)) {
        dayOfYear = 0;
        year++;
      }
      if (year === fyear) {
        year++;
      }
      var month = Math.floor(dayOfYear <= 186 ? dayOfYear / 31 : (dayOfYear - 6) / 30) + 1;
      var day = dayOfYear - (month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6) + 1;
      return {
        "year": year,
        "month": month,
        "day": day,
        "hour": hour,
        "minute": minute,
        "second": second
      };
    }
  }, {
    key: "daysInMonth",
    value: function daysInMonth(year, month) {
      var gregorianDaysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]; //30

      if (month < 1 || month > 12) {
        throw new RangeException("$month Out Of Range Exception");
      }
      if (year && this.isLeap(year) && month === _Constants["default"].MonthsPerYear) {
        return 30;
      }
      return gregorianDaysInMonth[month - 1];
    }
  }, {
    key: "isLeap",
    value: function isLeap(year) {
      var validRemainValueAfter1343 = [1, 5, 9, 13, 17, 22, 26, 30];
      var validRemainValueBefore1343 = [1, 5, 9, 13, 17, 21, 26, 30];
      var remain = year % 33;
      return year < 1343 ? validRemainValueBefore1343.includes(remain) : validRemainValueAfter1343.includes(remain);
    }
  }]);
}(_Calendar2["default"]);
var _default = exports["default"] = JalaliCalendar;
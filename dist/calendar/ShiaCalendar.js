"use strict";

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
var ShiaCalendar = /*#__PURE__*/function (_Calendar) {
  function ShiaCalendar() {
    var _this;
    _classCallCheck(this, ShiaCalendar);
    _this = _callSuper(this, ShiaCalendar);
    _this.name = "shia";
    _this.ShiaEpoch = 1948439.5;
    Object.defineProperty(_this, 'ShiaEpoch', {
      writable: false,
      configurable: false
    });
    return _this;
  }
  _inherits(ShiaCalendar, _Calendar);
  return _createClass(ShiaCalendar, [{
    key: "dateToJulianDay",
    value: function dateToJulianDay(year, month, day, hour, minute, second) {
      var daysInMonth = this.daysInMonth(year, month);
      var dayOfYear = day;
      var firstOfYear = this.julianDayFirstOfYear(year);
      var julianDay = 0;
      if (day > daysInMonth) {
        dayOfYear = day - daysInMonth;
        year = month === 12 ? year + 1 : year;
        month = month === 12 ? 1 : month + 1;
      }
      for (var m = 1; m < month; m++) {
        dayOfYear += this.daysInMonth(year, m);
      }
      julianDay += dayOfYear;
      if (firstOfYear) {
        julianDay += firstOfYear - 1;
      } else {
        julianDay += (year - 1) * _Constants["default"].DaysOfShiaYear;
        julianDay += Math.floor((11 * year + 14) / 30);
        julianDay += this.ShiaEpoch - (year === 1440 ? 2 : 1);
      }
      return this.addTimeToJulianDay(julianDay, hour, minute, second);
    }
  }, {
    key: "julianDayToDate",
    value: function julianDayToDate(julianDay) {
      var time = this.extractJulianDayTime(julianDay);
      julianDay = this.julianDayWithoutTime(julianDay);
      var year = Math.floor(((julianDay - this.ShiaEpoch) * 30 + 10646) / 10631);
      var month = Math.min(12, Math.ceil((julianDay - (29 + this.julianDayWithoutTime(this.dateToJulianDay(year, 1, 1, time.hour, time.minute, time.second)))) / 29.5) + 1);
      var dayOfYear = julianDay - this.dateToJulianDay(year, 1, 1, 0, 0, 0) + 1;
      var days = 0;
      for (var i = 1; i <= 12; i++) {
        days += this.daysInMonth(year, i);
        if (dayOfYear <= days) {
          month = i;
          break;
        }
      }

      // let day = (julianDay - ((days - this.daysInMonth(year, month)) + ((year - 1) * 354) + Math.floor((3 + (11 * year)) / 30) + this.ShiaEpoch) + 1);
      var day = dayOfYear - (days - this.daysInMonth(year, month));
      return {
        "year": year,
        "month": month,
        "day": day,
        "hour": time.hour,
        "minute": time.minute,
        "second": time.second
      };
    }
  }, {
    key: "daysInMonth",
    value: function daysInMonth(year, month) {
      var islamicDaysInMonth = [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29]; //30
      var shiaDaysInMonthInYears = {
        1435: [29, 30, 29, 30, 29, 30, 29, 30, 30, 30, 29, 30],
        1436: [29, 30, 29, 29, 30, 29, 30, 29, 30, 29, 30, 30],
        1437: [29, 30, 30, 29, 30, 29, 29, 30, 29, 29, 30, 30],
        1438: [29, 30, 30, 30, 29, 30, 29, 29, 30, 29, 29, 30],
        1439: [29, 30, 30, 30, 30, 29, 30, 29, 29, 30, 29, 29],
        1440: [30, 29, 30, 30, 30, 29, 30, 29, 30, 29, 30, 29],
        1441: [29, 30, 29, 30, 30, 29, 30, 30, 29, 30, 29, 30],
        1442: [29, 29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29],
        1443: [29, 30, 30, 29, 29, 30, 29, 29, 30, 29, 30, 30],
        1444: [30, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 29],
        1445: [30, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29, 29],
        1446: [30, 30, 30, 29, 30, 30, 29, 30, 29, 30, 29, 29]
      };
      if (month < 1 || month > 12) {
        throw new RangeException("$month Out Of Range Exception");
      }
      if (shiaDaysInMonthInYears[year] === undefined) {
        return islamicDaysInMonth[month - 1];
      }
      return shiaDaysInMonthInYears[year][month - 1];
    }
  }, {
    key: "julianDayFirstOfYear",
    value: function julianDayFirstOfYear(year) {
      var julianDays = {
        1435: 2456601.5,
        1436: 2456956.5,
        1437: 2457310.5,
        1438: 2457664.5,
        1439: 2458018.5,
        1440: 2458372.5,
        1441: 2458727.5,
        1442: 2459082.5,
        1443: 2459436.5,
        1444: 2459790.5,
        1445: 2460144.5,
        1446: 2460498.5
      };
      if (julianDays[year] !== undefined) {
        return julianDays[year];
      }
      var availYears = Object.keys(julianDays);
      var minYear = Math.min.apply(Math, availYears);
      var maxYear = Math.max.apply(Math, availYears);
      var julianDay = 0;
      if (year > maxYear) {
        julianDay = julianDays[maxYear] + (year - maxYear) * _Constants["default"].DaysOfShiaYear;
      } else {
        julianDay = julianDays[minYear] - (minYear - year) * _Constants["default"].DaysOfShiaYear;
      }
      return julianDay;
    }
  }, {
    key: "isLeap",
    value: function isLeap(year) {
      return (year * 11 + 14) % 30 < 11;
    }
  }]);
}(_Calendar2["default"]);
var _default = exports["default"] = ShiaCalendar;
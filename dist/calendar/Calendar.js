"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Constants = _interopRequireDefault(require("../Constants"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Calendar = /*#__PURE__*/function () {
  function Calendar() {
    _classCallCheck(this, Calendar);
    this.J1970 = 2440587.5; // Julian date at Unix epoch: 1970-01-01
    this.name = '';
  }
  return _createClass(Calendar, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "timestampToJulianDay",
    value: function timestampToJulianDay(timestamp) {
      var julianDay = timestamp / _Constants["default"].DayInSeconds + this.J1970;
      var julianDayFloatRounded = Math.round((julianDay - Math.floor(julianDay)) * 10000000) / 10000000;
      return Math.floor(julianDay) + julianDayFloatRounded;
    }
  }, {
    key: "julianDayToTimestamp",
    value: function julianDayToTimestamp(julianDay) {
      var timestamp = Math.round((julianDay - this.J1970) * _Constants["default"].DayInSeconds);
      return timestamp;
    }
  }, {
    key: "julianDayWithoutTime",
    value: function julianDayWithoutTime(julianDay) {
      return Math.floor(julianDay) + (julianDay - Math.floor(julianDay) >= 0.5 ? 0.5 : -0.5);
    }
  }, {
    key: "extractJulianDayTime",
    value: function extractJulianDayTime(julianDay) {
      julianDay += 0.5;

      // Astronomical to civil
      var time = Math.round((julianDay - Math.trunc(julianDay)) * _Constants["default"].DayInSeconds);
      return {
        "hour": Math.trunc(time / 3600),
        "minute": Math.trunc(time / 60 % 60),
        "second": Math.trunc(time % 60)
      };
    }
  }, {
    key: "addTimeToJulianDay",
    value: function addTimeToJulianDay(julianDay, hour, minute, second) {
      var timestamp = this.julianDayToTimestamp(julianDay);
      timestamp += hour * 3600 + minute * 60 + second;
      julianDay = this.timestampToJulianDay(timestamp);
      var julianDayFloatRounded = Math.round((julianDay - Math.floor(julianDay)) * 10000000) / 10000000;
      return Math.floor(julianDay) + julianDayFloatRounded;
    }
  }, {
    key: "dateToJulianDay",
    value: function dateToJulianDay(year, month, day, hour, minute, second) {
      //
    }
  }, {
    key: "dateToTimestamp",
    value: function dateToTimestamp(year, month, day, hour, minute, second) {
      var julianDay = this.dateToJulianDay(year, month, day, hour, minute, second);
      return this.julianDayToTimestamp(julianDay);
    }
  }, {
    key: "julianDayToDate",
    value: function julianDayToDate(julianDay) {
      //
    }
  }, {
    key: "timestampToDate",
    value: function timestampToDate(timestamp) {
      var julianDay = this.timestampToJulianDay(timestamp);
      return this.julianDayToDate(julianDay);
    }
  }, {
    key: "daysInMonth",
    value: function daysInMonth(year, month) {
      return 0;
    }
  }, {
    key: "dayOfWeek",
    value: function dayOfWeek(timestamp) {
      var julianDay = this.timestampToJulianDay(timestamp);
      return this.mod(Math.floor(julianDay + 2.5), 7);
    }
  }, {
    key: "dayOfYear",
    value: function dayOfYear(timestamp) {
      var currentDate = this.timestampToDate(timestamp);
      var firstOfYearJulianDay = this.dateToJulianDay(currentDate.year, 1, 1, 0, 0, 0);
      var currentJulianDay = this.dateToJulianDay(currentDate.year, currentDate.month, currentDate.day, currentDate.hour, currentDate.minute, currentDate.second);
      return Math.floor(currentJulianDay - firstOfYearJulianDay + 1);
    }
  }, {
    key: "weekOfMonth",
    value: function weekOfMonth(timestamp) {
      var currentDate = this.timestampToDate(timestamp);
      var firstDayOfMonthTimestamp = this.dateToTimestamp(currentDate.year, currentDate.month, 1, currentDate.hour, currentDate.minute, currentDate.second);
      var dayOfWeekInCurrentDayOfMonth = this.dayOfWeek(timestamp);
      var dayOfWeekInFirstDayOfMonth = this.dayOfWeek(firstDayOfMonthTimestamp);
      var week = 1;
      if (currentDate.day <= 7 - dayOfWeekInFirstDayOfMonth) {
        return week;
      }
      week += (currentDate.day - (7 - dayOfWeekInFirstDayOfMonth + (dayOfWeekInCurrentDayOfMonth + 1))) / 7 + 1;
      return week;
    }
  }, {
    key: "weekOfYear",
    value: function weekOfYear(timestamp) {
      var currentDate = this.timestampToDate(timestamp);
      var dayOfYear = this.dayOfYear(timestamp);
      var firstDayOfYearTimestamp = this.dateToTimestamp(currentDate.year, 1, 1, currentDate.hour, currentDate.minute, currentDate.second);
      var dayOfWeekInCurrentDayOfYear = this.dayOfWeek(timestamp);
      var dayOfWeekInFirstDayOfYear = this.dayOfWeek(firstDayOfYearTimestamp);
      var week = 1;
      if (dayOfYear <= 7 - dayOfWeekInFirstDayOfYear) {
        return week;
      }
      week += (dayOfYear - (7 - dayOfWeekInFirstDayOfYear + (dayOfWeekInCurrentDayOfYear + 1))) / 7 + 1;
      return week;
    }
  }, {
    key: "mod",
    value: function mod(a, b) {
      return a - b * Math.floor(a / b);
    }
  }, {
    key: "isLeap",
    value: function isLeap(year) {
      //
    }
  }]);
}();
var _default = exports["default"] = Calendar;
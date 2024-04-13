"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constants = _interopRequireDefault(require("../Constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Comparison = {
  equal: function equal(other) {
    return this._timestamp === other._timestamp;
  },
  afterThan: function afterThan(other) {
    return this._timestamp > other._timestamp;
  },
  afterThanOrEqual: function afterThanOrEqual(other) {
    return this._timestamp >= other._timestamp;
  },
  beforeThan: function beforeThan(other) {
    return this._timestamp < other._timestamp;
  },
  beforeThanOrEqual: function beforeThanOrEqual(other) {
    return this._timestamp <= other._timestamp;
  },
  between: function between(value1, value2) {
    return value1._timestamp <= this._timestamp && value2._timestamp >= this._timestamp;
  },
  min: function min(other) {
    return this._timestamp <= other._timestamp ? this : other;
  },
  max: function max(other) {
    return this._timestamp >= other._timestamp ? this : other;
  },
  isWeekday: function isWeekday() {
    return this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset) !== _Constants["default"].Friday;
  },
  isWeekend: function isWeekend() {
    return this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset) === _Constants["default"].Friday;
  },
  isSaturday: function isSaturday() {
    return this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset) === _Constants["default"].Saturday;
  },
  isSunday: function isSunday() {
    return this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset) === _Constants["default"].Sunday;
  },
  isMonday: function isMonday() {
    return this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset) === _Constants["default"].Monday;
  },
  isTuesday: function isTuesday() {
    return this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset) === _Constants["default"].Tuesday;
  },
  isWednesday: function isWednesday() {
    return this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset) === _Constants["default"].Wednesday;
  },
  isThursday: function isThursday() {
    return this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset) === _Constants["default"].Thursday;
  },
  isFriday: function isFriday() {
    return this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset) === _Constants["default"].Friday;
  },
  isYesterday: function isYesterday() {
    var yesterday = Pasoonate.make().gregorian().subDay(1);
    return this.gregorian().diffInDays(yesterday) === 0;
  },
  isToday: function isToday() {
    var today = Pasoonate.make().gregorian();
    return this.gregorian().diffInDays(today) === 0;
  },
  isTomorrow: function isTomorrow() {
    var tomorrow = Pasoonate.make().gregorian().addDay(1);
    return this.gregorian().diffInDays(tomorrow) === 0;
  },
  isFuture: function isFuture() {
    var today = Pasoonate.make().gregorian();
    return this.gregorian().diffInDays(today) > 1;
  },
  isPast: function isPast() {
    var today = Pasoonate.make().gregorian();
    return today.gregorian().diffInDays(this) > 1;
  },
  isLeapYear: function isLeapYear() {
    return this._currentCalendar.isLeap(this.getYear());
  },
  isSameDay: function isSameDay(other) {
    return this.gregorian().diffInDays(other) === 0;
  }
};
var _default = Comparison;
exports["default"] = _default;
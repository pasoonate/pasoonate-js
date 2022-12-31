"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constants = _interopRequireDefault(require("../Constants"));

var _CalendarManager = _interopRequireDefault(require("../calendar/CalendarManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Difference = {
  /**
   * 
   * @param {CalendarManager} instance
   * @return {Object}
   */
  age: function age(instance) {
    var diffInSeconds = this.diffInSeconds(instance);
    var diffInDays = diffInSeconds / _Constants["default"].DayInSeconds;
    var years = parseInt(diffInSeconds / _Constants["default"].YearInSeconds);
    var months = parseInt((diffInSeconds - years * _Constants["default"].YearInSeconds) / _Constants["default"].MonthInSeconds);
    var days = parseInt(diffInDays);
    var hours = diffInSeconds / _Constants["default"].HourInSeconds;
    var minutes = diffInSeconds / _Constants["default"].SecondsPerMinute;
    var seconds = diffInSeconds;
    var diff = {
      years: parseInt(years),
      months: parseInt(months),
      days: parseInt(days),
      hours: parseInt(hours),
      minutes: parseInt(minutes),
      seconds: parseInt(seconds)
    };
    return diff;
  },
  diff: function diff(instance) {
    var diffInSeconds = this.diffInSeconds(instance);
    var diffInDays = diffInSeconds / _Constants["default"].DayInSeconds;

    var years = parseInt(diffInDays) / _Constants["default"].YearInDays;

    var months = parseInt(diffInDays) / _Constants["default"].MonthInDays;

    var days = parseInt(diffInDays);
    var hours = diffInSeconds / _Constants["default"].HourInSeconds;
    var minutes = diffInSeconds / _Constants["default"].SecondsPerMinute;
    var seconds = diffInSeconds;
    var diff = {
      years: parseInt(years),
      months: parseInt(months),
      days: parseInt(days),
      hours: parseInt(hours),
      minutes: parseInt(minutes),
      seconds: parseInt(seconds)
    };
    return diff;
  },

  /**
   * 
   * @param {CalendarManager} instance
   * @return {Number}
   */
  diffInSeconds: function diffInSeconds(instance) {
    var diffInSeconds = Math.abs(this.getTimestamp() - instance.getTimestamp());
    return diffInSeconds;
  },

  /**
   * 
   * @param {CalendarManager} instance
   * @return {Number}
   */
  diffInMinutes: function diffInMinutes(instance) {
    var diffInSeconds = Math.abs(this.getTimestamp() - instance.getTimestamp());
    var diffInMinutes = diffInSeconds >= _Constants["default"].SecondsPerMinute ? parseInt(diffInSeconds / _Constants["default"].SecondsPerMinute) : 0;
    return diffInMinutes;
  },

  /**
   * 
   * @param {CalendarManager} instance
   * @return {Number}
   */
  diffInHours: function diffInHours(instance) {
    var diffInSeconds = Math.abs(this.getTimestamp() - instance.getTimestamp());
    var diffInHours = diffInSeconds >= _Constants["default"].HourInSeconds ? parseInt(diffInSeconds / _Constants["default"].HourInSeconds) : 0;
    return diffInHours;
  },

  /**
   * 
   * @param {CalendarManager} instance
   * @return {Number}
   */
  diffInDays: function diffInDays(instance) {
    var diffInSeconds = Math.abs(this.getTimestamp() - instance.getTimestamp());
    var diffInDays = diffInSeconds >= _Constants["default"].DayInSeconds ? parseInt(diffInSeconds / _Constants["default"].DayInSeconds) : 0;
    return diffInDays;
  },

  /**
   * 
   * @param {CalendarManager} instance
   * @return {Number}
   */
  diffInMonths: function diffInMonths(instance) {
    var diffInSeconds = Math.abs(this.getTimestamp() - instance.getTimestamp());
    var diffInMonths = diffInSeconds >= _Constants["default"].MonthInSeconds ? parseInt(diffInSeconds / _Constants["default"].MonthInSeconds) : 0;
    return diffInMonths;
  },

  /**
   * 
   * @param {CalendarManager} instance
   * @return {Number}
   */
  diffInYears: function diffInYears(instance) {
    var diffInSeconds = Math.abs(this.getTimestamp() - instance.getTimestamp());
    var diffInYears = diffInSeconds >= _Constants["default"].YearInSeconds ? parseInt(diffInSeconds / _Constants["default"].YearInSeconds) : 0;
    return diffInYears;
  }
};
var _default = Difference;
exports["default"] = _default;
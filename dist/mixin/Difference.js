"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constants = _interopRequireDefault(require("../Constants"));

var _CalendarManager = _interopRequireDefault(require("../calendar/CalendarManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Difference = {
  diff: function diff(instance) {
    var diffInSeconds = this.diffInSeconds(instance);
    var diffInDays = diffInSeconds / _Constants["default"].DayInSeconds;

    var years = parseInt(diffInDays) / _Constants["default"].YearInDays;

    var months = parseInt(diffInDays) / _Constants["default"].MonthInDays;

    var days = this.diffInDays(instance) % _Constants["default"].MonthInDays;

    var hours = this.diffInHours(instance) % _Constants["default"].HoursPerDay;

    var minutes = this.diffInMinutes(instance) % _Constants["default"].MinutesPerHour;

    var seconds = diffInSeconds % _Constants["default"].SecondsPerMinute;
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
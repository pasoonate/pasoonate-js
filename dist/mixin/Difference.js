"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Constants = _interopRequireDefault(require("../Constants"));
var _CalendarManager = _interopRequireDefault(require("../calendar/CalendarManager"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Difference = {
  /**
   * 
   * @param {CalendarManager} instance
   * @return {Object}
   */
  age: function age(instance) {
    var birthday = instance.clone();
    birthday.name(this.name());
    var todayDateTime = this.getDateTime();
    var birthdayDateTime = birthday.getDateTime();
    var seconds = todayDateTime.second - birthdayDateTime.second;
    var minutes = todayDateTime.minute - birthdayDateTime.minute;
    var hours = todayDateTime.hour - birthdayDateTime.hour;
    var days = todayDateTime.day - birthdayDateTime.day;
    var months = todayDateTime.month - birthdayDateTime.month;
    var years = todayDateTime.year - birthdayDateTime.year;
    if (seconds < 0) {
      seconds += _Constants["default"].SecondsPerMinute;
      minutes -= 1;
    }
    if (minutes < 0) {
      minutes += _Constants["default"].MinutesPerHour;
      hours -= 1;
    }
    if (hours < 0) {
      hours += _Constants["default"].HoursPerDay;
      days -= 1;
    }
    if (days < 0) {
      months -= 1;
      days += birthday._currentCalendar.daysInMonth(todayDateTime.year, todayDateTime.month - 1);
    }
    if (months < 0) {
      months += 12;
      years -= 1;
    }
    var age = {
      years: years,
      months: months,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
    return age;
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
var _default = exports["default"] = Difference;
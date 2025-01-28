'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Constants = _interopRequireDefault(require("../Constants"));
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
    return {
      years: years,
      months: months,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  },
  /**
   *
   * @param {CalendarManager} instance
   * @return {Object}
   */
  diff: function diff(instance) {
    var seconds = this.diffInSeconds(instance);
    var minutes = Math.floor(seconds / _Constants["default"].SecondsPerMinute);
    var hours = Math.floor(seconds / _Constants["default"].HourInSeconds);
    var days = Math.floor(seconds / _Constants["default"].DayInSeconds);
    var months = Math.floor(days / _Constants["default"].MonthInDays);
    var years = Math.floor(days / _Constants["default"].YearInDays);
    return {
      years: years,
      months: months,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  },
  /**
   * 
   * @param {CalendarManager} instance
   * @return {Number}
   */
  diffInSeconds: function diffInSeconds(instance) {
    return Math.abs(this.getTimestamp() - instance.getTimestamp());
  },
  /**
   * 
   * @param {CalendarManager} instance
   * @return {Number}
   */
  diffInMinutes: function diffInMinutes(instance) {
    var diffInSeconds = this.diffInSeconds(instance);
    return diffInSeconds >= _Constants["default"].SecondsPerMinute ? Math.floor(diffInSeconds / _Constants["default"].SecondsPerMinute) : 0;
  },
  /**
   * 
   * @param {CalendarManager} instance
   * @return {Number}
   */
  diffInHours: function diffInHours(instance) {
    var diffInSeconds = this.diffInSeconds(instance);
    return diffInSeconds >= _Constants["default"].HourInSeconds ? Math.floor(diffInSeconds / _Constants["default"].HourInSeconds) : 0;
  },
  /**
   * 
   * @param {CalendarManager} instance
   * @return {Number}
   */
  diffInDays: function diffInDays(instance) {
    var diffInSeconds = this.diffInSeconds(instance);
    return diffInSeconds >= _Constants["default"].DayInSeconds ? Math.floor(diffInSeconds / _Constants["default"].DayInSeconds) : 0;
  },
  /**
   * 
   * @param {CalendarManager} instance
   * @return {Number}
   */
  diffInMonths: function diffInMonths(instance) {
    var diffInSeconds = this.diffInSeconds(instance);
    return diffInSeconds >= _Constants["default"].MonthInSeconds ? Math.floor(diffInSeconds / _Constants["default"].MonthInSeconds) : 0;
  },
  /**
   * 
   * @param {CalendarManager} instance
   * @return {Number}
   */
  diffInYears: function diffInYears(instance) {
    var diffInSeconds = this.diffInSeconds(instance);
    return diffInSeconds >= _Constants["default"].YearInSeconds ? Math.floor(diffInSeconds / _Constants["default"].YearInSeconds) : 0;
  },
  /**
   *
   * @param {CalendarManager} instance
   * @return {Object}
   */
  diffForHumans: function diffForHumans(instance) {
    var before, base, other;
    var result = [];
    var space = " ";
    var defaultCalendar = this.name();
    var now = Pasoonate.make();
    if (this.beforeThan(instance)) {
      before = false;
      base = instance.clone();
      other = this.clone();
    } else {
      before = true;
      base = this.clone();
      other = instance.clone();
    }
    base.name(defaultCalendar);
    other.name(defaultCalendar);
    now.name(defaultCalendar);
    var age = base.age(other);
    if (age.years > 0) {
      result.push(age.years + space + Pasoonate.trans('diff.year'));
    }
    if (age.months > 0) {
      result.push(age.months + space + Pasoonate.trans('diff.month'));
    }
    if (age.days > 0) {
      result.push(age.days + space + Pasoonate.trans('diff.day'));
    }
    if (age.hours > 0) {
      result.push(age.hours + space + Pasoonate.trans('diff.hour'));
    }
    if (age.minutes > 0) {
      result.push(age.minutes + space + Pasoonate.trans('diff.minute'));
    }
    if (age.seconds > 0) {
      result.push(age.seconds + space + Pasoonate.trans('diff.second'));
    }
    if (result.length === 0) {
      result.push(Pasoonate.trans('diff.now'));
    } else if (now.diff(base).minutes === 0 || now.diff(other).minutes === 0) {
      result.push(before ? Pasoonate.trans('diff.ago') : Pasoonate.trans('diff.from_now'));
    } else {
      result.push(before ? Pasoonate.trans('diff.before') : Pasoonate.trans('diff.after'));
    }
    return result.join(space);
  }
};
var _default = exports["default"] = Difference;
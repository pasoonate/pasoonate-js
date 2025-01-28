'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Base = {
  setTimestamp: function setTimestamp(timestamp) {
    this._timestamp = timestamp;
    return this;
  },
  getTimestamp: function getTimestamp() {
    return this._timestamp;
  },
  setTimezoneOffset: function setTimezoneOffset(timezoneOffset) {
    this._timezoneOffset = timezoneOffset;
    return this;
  },
  getTimezoneOffset: function getTimezoneOffset() {
    return this._timezoneOffset;
  },
  setYear: function setYear(year) {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    var timestamp = this._currentCalendar.dateToTimestamp(year, date.month, date.day, date.hour, date.minute, date.second);
    this._timestamp = timestamp - this._timezoneOffset;
    return this;
  },
  getYear: function getYear() {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    return date.year;
  },
  setMonth: function setMonth(month) {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    var timestamp = this._currentCalendar.dateToTimestamp(date.year, month, date.day, date.hour, date.minute, date.second);
    this._timestamp = timestamp - this._timezoneOffset;
    return this;
  },
  getMonth: function getMonth() {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    return date.month;
  },
  setDay: function setDay(day) {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    var timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, day, date.hour, date.minute, date.second);
    this._timestamp = timestamp - this._timezoneOffset;
    return this;
  },
  getDay: function getDay() {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    return date.day;
  },
  setHour: function setHour(hour) {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    var timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, hour, date.minute, date.second);
    this._timestamp = timestamp - this._timezoneOffset;
    return this;
  },
  getHour: function getHour() {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    return date.hour;
  },
  setMinute: function setMinute(minute) {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    var timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, date.hour, minute, date.second);
    this._timestamp = timestamp - this._timezoneOffset;
    return this;
  },
  getMinute: function getMinute() {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    return date.minute;
  },
  setSecond: function setSecond(second) {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    var timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, date.hour, date.minute, second);
    this._timestamp = timestamp - this._timezoneOffset;
    return this;
  },
  getSecond: function getSecond() {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    return date.second;
  },
  setUTCYear: function setUTCYear(year) {
    var date = this._currentCalendar.timestampToDate(this._timestamp);
    this._timestamp = this._currentCalendar.dateToTimestamp(year, date.month, date.day, date.hour, date.minute, date.second);
    return this;
  },
  getUTCYear: function getUTCYear() {
    var date = this._currentCalendar.timestampToDate(this._timestamp);
    return date.year;
  },
  setUTCMonth: function setUTCMonth(month) {
    var date = this._currentCalendar.timestampToDate(this._timestamp);
    this._timestamp = this._currentCalendar.dateToTimestamp(date.year, month, date.day, date.hour, date.minute, date.second);
    return this;
  },
  getUTCMonth: function getUTCMonth() {
    var date = this._currentCalendar.timestampToDate(this._timestamp);
    return date.month;
  },
  setUTCDay: function setUTCDay(day) {
    var date = this._currentCalendar.timestampToDate(this._timestamp);
    this._timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, day, date.hour, date.minute, date.second);
    return this;
  },
  getUTCDay: function getUTCDay() {
    var date = this._currentCalendar.timestampToDate(this._timestamp);
    return date.day;
  },
  setUTCHour: function setUTCHour(hour) {
    var date = this._currentCalendar.timestampToDate(this._timestamp);
    this._timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, hour, date.minute, date.second);
    return this;
  },
  getUTCHour: function getUTCHour() {
    var date = this._currentCalendar.timestampToDate(this._timestamp);
    return date.hour;
  },
  setUTCMinute: function setUTCMinute(minute) {
    var date = this._currentCalendar.timestampToDate(this._timestamp);
    this._timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, date.hour, minute, date.second);
    return this;
  },
  getUTCMinute: function getUTCMinute() {
    var date = this._currentCalendar.timestampToDate(this._timestamp);
    return date.minute;
  },
  setUTCSecond: function setUTCSecond(second) {
    var date = this._currentCalendar.timestampToDate(this._timestamp);
    this._timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, date.hour, date.minute, second);
    return this;
  },
  getUTCSecond: function getUTCSecond() {
    var date = this._currentCalendar.timestampToDate(this._timestamp);
    return date.second;
  },
  setDate: function setDate(year, month, day) {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    var timestamp = this._currentCalendar.dateToTimestamp(year, month, day, date.hour, date.minute, date.second);
    this._timestamp = timestamp - this._timezoneOffset;
    return this;
  },
  getDate: function getDate() {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    return {
      year: date.year,
      month: date.month,
      day: date.day
    };
  },
  setTime: function setTime(hour, minute, second) {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    var timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, hour, minute, second);
    this._timestamp = timestamp - this._timezoneOffset;
    return this;
  },
  getTime: function getTime() {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    return {
      hour: date.hour,
      minute: date.minute,
      second: date.second
    };
  },
  setDateTime: function setDateTime(year, month, day, hour, minute, second) {
    var timestamp = this._currentCalendar.dateToTimestamp(year, month, day, hour, minute, second);
    this._timestamp = timestamp - this._timezoneOffset;
    return this;
  },
  getDateTime: function getDateTime() {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    return {
      year: date.year,
      month: date.month,
      day: date.day,
      hour: date.hour,
      minute: date.minute,
      second: date.second
    };
  },
  setUTCDate: function setUTCDate(year, month, day) {
    var date = this._currentCalendar.timestampToDate(this._timestamp);
    this._timestamp = this._currentCalendar.dateToTimestamp(year, month, day, date.hour, date.minute, date.second);
    return this;
  },
  getUTCDate: function getUTCDate() {
    var date = this._currentCalendar.timestampToDate(this._timestamp);
    return {
      year: date.year,
      month: date.month,
      day: date.day
    };
  },
  setUTCTime: function setUTCTime(hour, minute, second) {
    var date = this._currentCalendar.timestampToDate(this._timestamp);
    this._timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, hour, minute, second);
    return this;
  },
  getUTCTime: function getUTCTime() {
    var date = this._currentCalendar.timestampToDate(this._timestamp);
    return {
      hour: date.hour,
      minute: date.minute,
      second: date.second
    };
  },
  setUTCDateTime: function setUTCDateTime(year, month, day, hour, minute, second) {
    this._timestamp = this._currentCalendar.dateToTimestamp(year, month, day, hour, minute, second);
    return this;
  },
  getUTCDateTime: function getUTCDateTime() {
    var date = this._currentCalendar.timestampToDate(this._timestamp);
    return {
      year: date.year,
      month: date.month,
      day: date.day,
      hour: date.hour,
      minute: date.minute,
      second: date.second
    };
  },
  dayOfWeek: function dayOfWeek() {
    return this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset);
  },
  dayOfYear: function dayOfYear() {
    return this._currentCalendar.dayOfYear(this._timestamp + this._timezoneOffset);
  },
  weekOfMonth: function weekOfMonth() {
    return this._currentCalendar.weekOfMonth(this._timestamp + this._timezoneOffset);
  },
  weekOfYear: function weekOfYear() {
    return this._currentCalendar.weekOfYear(this._timestamp + this._timezoneOffset);
  }
};
var _default = exports["default"] = Base;
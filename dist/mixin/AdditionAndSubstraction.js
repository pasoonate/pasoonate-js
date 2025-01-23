"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var AdditionAndSubtraction = {
  addYear: function addYear(count) {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    var year = date.year + count;
    var daysInMonth = this._currentCalendar.daysInMonth(year, date.month);
    var day = date.day <= daysInMonth ? date.day : daysInMonth;
    var timestamp = this._currentCalendar.dateToTimestamp(year, date.month, day, date.hour, date.minute, date.second);
    this._timestamp = timestamp - this._timezoneOffset;
    return this;
  },
  addMonth: function addMonth(count) {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    var totalMonth = date.month + count;
    var year = date.year + Math.ceil(totalMonth / 12 - 1);
    var month = totalMonth % 12 === 0 ? 12 : totalMonth % 12;
    var daysInMonth = this._currentCalendar.daysInMonth(year, month);
    var day = date.day <= daysInMonth ? date.day : daysInMonth;
    var timestamp = this._currentCalendar.dateToTimestamp(year, month, day, date.hour, date.minute, date.second);
    this._timestamp = timestamp - this._timezoneOffset;
    return this;
  },
  addDay: function addDay(count) {
    this._timestamp += count * 86400;
    return this;
  },
  addHour: function addHour(count) {
    this._timestamp += count * 3600;
    return this;
  },
  addMinute: function addMinute(count) {
    this._timestamp += count * 60;
    return this;
  },
  addSecond: function addSecond(count) {
    this._timestamp += count;
    return this;
  },
  subYear: function subYear(count) {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    var year = date.year - count;
    var daysInMonth = this._currentCalendar.daysInMonth(year, date.month);
    var day = date.day <= daysInMonth ? date.day : daysInMonth;
    var timestamp = this._currentCalendar.dateToTimestamp(year, date.month, day, date.hour, date.minute, date.second);
    this._timestamp = timestamp - this._timezoneOffset;
    return this;
  },
  subMonth: function subMonth(count) {
    var date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
    var totalMonth = date.month - count;
    var year = date.year;
    var month = totalMonth;
    if (totalMonth <= 0) {
      totalMonth = -totalMonth;
      year -= Math.floor(totalMonth / 12) + 1;
      month = 12 - totalMonth % 12;
    }
    var daysInMonth = this._currentCalendar.daysInMonth(year, month);
    var day = date.day <= daysInMonth ? date.day : daysInMonth;
    var timestamp = this._currentCalendar.dateToTimestamp(year, month, day, date.hour, date.minute, date.second);
    this._timestamp = timestamp - this._timezoneOffset;
    return this;
  },
  subDay: function subDay(count) {
    this._timestamp -= count * 86400;
    return this;
  },
  subHour: function subHour(count) {
    this._timestamp -= count * 3600;
    return this;
  },
  subMinute: function subMinute(count) {
    this._timestamp -= count * 60;
    return this;
  },
  subSecond: function subSecond(count) {
    this._timestamp -= count;
    return this;
  }
};
var _default = exports["default"] = AdditionAndSubtraction;
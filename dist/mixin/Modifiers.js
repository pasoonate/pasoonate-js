'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Modifiers = {
  startOfDay: function startOfDay() {
    return this.setTime(0, 0, 0);
  },
  endOfDay: function endOfDay() {
    return this.setTime(23, 59, 59);
  },
  startOfMonth: function startOfMonth() {
    return this.setDay(1).startOfDay();
  },
  endOfMonth: function endOfMonth() {
    return this.setDay(this._currentCalendar.daysInMonth(this.getYear(), this.getMonth())).endOfDay();
  },
  startOfYear: function startOfYear() {
    return this.setMonth(1).startOfMonth();
  },
  endOfYear: function endOfYear() {
    return this.setMonth(12).endOfMonth();
  },
  startOfWeek: function startOfWeek() {
    var daysToSaturday = this.dayOfWeek();
    return this.subDay(daysToSaturday).startOfDay();
  },
  endOfWeek: function endOfWeek() {
    var daysToFriday = 6 - this.dayOfWeek();
    return this.addDay(daysToFriday).endOfDay();
  }
};
var _default = exports["default"] = Modifiers;
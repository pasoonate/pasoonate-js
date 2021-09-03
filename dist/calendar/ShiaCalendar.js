"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Calendar2 = _interopRequireDefault(require("./Calendar"));

var _Constants = _interopRequireDefault(require("../Constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ShiaCalendar = /*#__PURE__*/function (_Calendar) {
  _inherits(ShiaCalendar, _Calendar);

  var _super = _createSuper(ShiaCalendar);

  function ShiaCalendar() {
    var _this;

    _classCallCheck(this, ShiaCalendar);

    _this = _super.call(this);
    _this.name = "shia";
    _this.ShiaEpoch = 1948439.5;
    Object.defineProperty(_assertThisInitialized(_this), 'ShiaEpoch', {
      writable: false,
      configurable: false
    });
    return _this;
  }

  _createClass(ShiaCalendar, [{
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
      } // let day = (julianDay - ((days - this.daysInMonth(year, month)) + ((year - 1) * 354) + Math.floor((3 + (11 * year)) / 30) + this.ShiaEpoch) + 1);


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
        1443: [29, 30, 30, 29, 29, 30, 29, 29, 30, 29, 30, 30]
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
        1443: 2459436.5
      };
      return julianDays[year];
    }
  }, {
    key: "isLeap",
    value: function isLeap(year) {
      var isLeap = (year * 11 + 14) % 30 < 11;
      return isLeap;
    }
  }]);

  return ShiaCalendar;
}(_Calendar2["default"]);

var _default = ShiaCalendar;
exports["default"] = _default;
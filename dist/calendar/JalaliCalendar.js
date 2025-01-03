"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Calendar2 = _interopRequireDefault(require("./Calendar"));

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

var JalaliCalendar = /*#__PURE__*/function (_Calendar) {
  _inherits(JalaliCalendar, _Calendar);

  var _super = _createSuper(JalaliCalendar);

  function JalaliCalendar() {
    var _this;

    _classCallCheck(this, JalaliCalendar);

    _this = _super.call(this);
    _this.name = "jalali";
    _this.JalaliEpoch = 1948320.5;
    Object.defineProperty(_assertThisInitialized(_this), 'JalaliEpoch', {
      writable: false,
      configurable: false
    });
    return _this;
  }

  _createClass(JalaliCalendar, [{
    key: "dateToJulianDay",
    value: function dateToJulianDay(year, month, day, hour, minute, second) {
      var timestamp = 0;
      var days = 0;
      days += Math.floor((year - 1) * 365.24219878);
      days += month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6;
      days += day - 1;

      if (this.isLeap(year - 1)) {
        days++;
      }

      timestamp += days * 86400;
      timestamp += hour * 3600 + minute * 60 + second;
      timestamp -= 42531868800;
      var julianDay = this.timestampToJulianDay(timestamp);
      return julianDay;
    }
  }, {
    key: "julianDayToDate",
    value: function julianDayToDate(julianDay) {
      var timestamp = this.julianDayToTimestamp(julianDay);
      var base = timestamp + 42531868800;
      var second = this.mod(base, 60);
      var minute = Math.floor(this.mod(base, 3600) / 60);
      var hour = Math.floor(this.mod(base, 86400) / 3600);
      var days = Math.floor(base / 86400);
      var fyear = Math.floor(days / 365.24219878);
      var year = Math.floor(days / 365);
      var dayOfYear = days - Math.floor(fyear * 365.24219878);

      if (this.isLeap(fyear)) {
        dayOfYear--;
      }

      if (dayOfYear >= 365 && !this.isLeap(year)) {
        dayOfYear = 0;
        year++;
      }

      if (year === fyear) {
        year++;
      }

      var month = Math.floor(dayOfYear <= 186 ? dayOfYear / 31 : (dayOfYear - 6) / 30) + 1;
      var day = dayOfYear - (month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6) + 1;
      return {
        "year": year,
        "month": month,
        "day": day,
        "hour": hour,
        "minute": minute,
        "second": second
      };
    }
  }, {
    key: "daysInMonth",
    value: function daysInMonth(year, month) {
      var gregorianDaysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]; //30

      if (month < 1 || month > 12) {
        throw new RangeException("$month Out Of Range Exception");
      }

      if (year && this.isLeap(year) && month == 12) {
        return 30;
      }

      return gregorianDaysInMonth[month - 1];
    }
  }, {
    key: "isLeap",
    value: function isLeap(year) {
      var validRemainValueAfter1343 = [1, 5, 9, 13, 17, 22, 26, 30];
      var validRemainValueBefore1343 = [1, 5, 9, 13, 17, 21, 26, 30];
      var remain = year % 33;
      return year < 1343 ? validRemainValueBefore1343.includes(remain) : validRemainValueAfter1343.includes(remain);
    }
  }]);

  return JalaliCalendar;
}(_Calendar2["default"]);

var _default = JalaliCalendar;
exports["default"] = _default;
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

var GregorianCalendar = /*#__PURE__*/function (_Calendar) {
  _inherits(GregorianCalendar, _Calendar);

  var _super = _createSuper(GregorianCalendar);

  function GregorianCalendar() {
    var _this;

    _classCallCheck(this, GregorianCalendar);

    _this = _super.call(this);
    _this.name = "gregorian";
    _this.GregorianEpoch = 1721425.5;
    Object.defineProperty(_assertThisInitialized(_this), 'GregorianEpoch', {
      writable: false,
      configurable: false
    });
    return _this;
  }

  _createClass(GregorianCalendar, [{
    key: "dateToJulianDay",
    value: function dateToJulianDay(year, month, day, hour, minute, second) {
      var julianDay = this.GregorianEpoch - 1;
      julianDay += 365 * (year - 1);
      julianDay += Math.floor((year - 1) / 4);
      julianDay += Math.floor((year - 1) / 100) * -1;
      julianDay += Math.floor((year - 1) / 400);
      julianDay += Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : this.isLeap(year) ? -1 : -2) + day);
      return this.addTimeToJulianDay(julianDay, hour, minute, second);
    }
  }, {
    key: "julianDayToDate",
    value: function julianDayToDate(julianDay) {
      var time = this.extractJulianDayTime(julianDay);
      julianDay = this.julianDayWithoutTime(julianDay);
      var wjd = Math.floor(julianDay - 0.5) + 0.5;
      var depoch = wjd - this.GregorianEpoch;
      var quadricent = Math.floor(depoch / 146097);
      var dqc = this.mod(depoch, 146097);
      var cent = Math.floor(dqc / 36524);
      var dcent = this.mod(dqc, 36524);
      var quad = Math.floor(dcent / 1461);
      var dquad = this.mod(dcent, 1461);
      var yindex = Math.floor(dquad / 365);
      var year = quadricent * 400 + cent * 100 + quad * 4 + yindex;

      if (!(cent == 4 || yindex == 4)) {
        year++;
      }

      var yearday = wjd - this.julianDayWithoutTime(this.dateToJulianDay(year, 1, 1, time.hour, time.minute, time.second));
      var leapadj = wjd < this.julianDayWithoutTime(this.dateToJulianDay(year, 3, 1, time.hour, time.minute, time.second)) ? 0 : this.isLeap(year) ? 1 : 2;
      var month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
      var day = wjd - this.julianDayWithoutTime(this.dateToJulianDay(year, month, 1, time.hour, time.minute, time.second)) + 1;
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
      var gregorianDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      if (month < 1 || month > 12) {
        throw new RangeException("$month Out Of Range Exception");
      }

      if (year && this.isLeap(year) && month == 2) {
        return 29;
      }

      return gregorianDaysInMonth[month - 1];
    }
  }, {
    key: "isLeap",
    value: function isLeap(year) {
      return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    }
  }]);

  return GregorianCalendar;
}(_Calendar2["default"]);

var _default = GregorianCalendar;
exports["default"] = _default;
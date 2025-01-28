'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Calendar2 = _interopRequireDefault(require("./Calendar"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var GregorianCalendar = /*#__PURE__*/function (_Calendar) {
  function GregorianCalendar() {
    var _this;
    _classCallCheck(this, GregorianCalendar);
    _this = _callSuper(this, GregorianCalendar);
    _this.name = "gregorian";
    _this.GregorianEpoch = 1721425.5;
    Object.defineProperty(_this, 'GregorianEpoch', {
      writable: false,
      configurable: false
    });
    return _this;
  }
  _inherits(GregorianCalendar, _Calendar);
  return _createClass(GregorianCalendar, [{
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
      if (!(cent === 4 || yindex === 4)) {
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
      if (year && this.isLeap(year) && month === 2) {
        return 29;
      }
      return gregorianDaysInMonth[month - 1];
    }
  }, {
    key: "isLeap",
    value: function isLeap(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
  }]);
}(_Calendar2["default"]);
var _default = exports["default"] = GregorianCalendar;
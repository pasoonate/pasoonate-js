'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _DateFormat2 = _interopRequireDefault(require("./DateFormat"));
var _Pasoonate = _interopRequireDefault(require("../Pasoonate"));
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
var SimpleDateFormat = /*#__PURE__*/function (_DateFormat) {
  function SimpleDateFormat() {
    _classCallCheck(this, SimpleDateFormat);
    return _callSuper(this, SimpleDateFormat);
  }
  _inherits(SimpleDateFormat, _DateFormat);
  return _createClass(SimpleDateFormat, [{
    key: "format",
    value: function format(pattern, locale) {
      return this.compile(pattern, locale);
    }
  }, {
    key: "compile",
    value: function compile(pattern, locale) {
      pattern = String(pattern);
      var FullYear = 'yyyy';
      var ShortYear = 'yy';
      var FullMonthName = 'MMMM';
      var ShortMonthName = 'MMM';
      var FullMonth = 'MM';
      var ShortMonth = 'M';
      var ShortDayName = 'ddd';
      var FullDayName = 'dddd';
      var FullDay = 'dd';
      var ShortDay = 'd';
      var FullHour = 'HH';
      var ShortHour = 'H';
      var FullMinute = 'mm';
      var ShortMinute = 'm';
      var FullSecond = 'ss';
      var ShortSecond = 's';
      var categories = [];
      var prevChar = '';
      var currChar = '';
      var index = 0;
      for (var i = 0; i < pattern.length; i++) {
        currChar = pattern[i];
        if (currChar === '') {
          continue;
        }
        if (currChar === prevChar) {
          categories[index] += currChar;
        } else {
          categories[++index] = currChar;
        }
        prevChar = currChar;
      }
      for (var _i in categories) {
        switch (categories[_i]) {
          case FullYear:
            categories[_i] = this.getCalendar().getYear();
            break;
          case ShortYear:
            categories[_i] = String(this.getCalendar().getYear()).substr(-2, 2);
            break;
          case FullMonthName:
            categories[_i] = _Pasoonate["default"].trans("".concat(this.getCalendar().name(), ".month_name.").concat(this.getCalendar().getMonth()));
            break;
          case ShortMonthName:
            categories[_i] = _Pasoonate["default"].trans("".concat(this.getCalendar().name(), ".short_month_name.").concat(this.getCalendar().getMonth()));
            break;
          case FullMonth:
            categories[_i] = this.getCalendar().getMonth() > 9 ? this.getCalendar().getMonth() : "0".concat(this.getCalendar().getMonth());
            break;
          case ShortMonth:
            categories[_i] = this.getCalendar().getMonth();
            break;
          case FullDayName:
            categories[_i] = _Pasoonate["default"].trans("".concat(this.getCalendar().name(), ".day_name.").concat(this.getCalendar().dayOfWeek()));
            break;
          case ShortDayName:
            categories[_i] = _Pasoonate["default"].trans("".concat(this.getCalendar().name(), ".short_day_name.").concat(this.getCalendar().dayOfWeek()));
            break;
          case FullDay:
            categories[_i] = this.getCalendar().getDay() > 9 ? this.getCalendar().getDay() : "0".concat(this.getCalendar().getDay());
            break;
          case ShortDay:
            categories[_i] = this.getCalendar().getDay();
            break;
          case FullHour:
            categories[_i] = this.getCalendar().getHour() > 9 ? this.getCalendar().getHour() : "0".concat(this.getCalendar().getHour());
            break;
          case ShortHour:
            categories[_i] = this.getCalendar().getHour();
            break;
          case FullMinute:
            categories[_i] = this.getCalendar().getMinute() > 9 ? this.getCalendar().getMinute() : "0".concat(this.getCalendar().getMinute());
            break;
          case ShortMinute:
            categories[_i] = this.getCalendar().getMinute();
            break;
          case FullSecond:
            categories[_i] = this.getCalendar().getSecond() > 9 ? this.getCalendar().getSecond() : "0".concat(this.getCalendar().getSecond());
            break;
          case ShortSecond:
            categories[_i] = this.getCalendar().getSecond();
            break;
        }
      }
      return categories.join('');
    }
  }]);
}(_DateFormat2["default"]);
var _default = exports["default"] = SimpleDateFormat;
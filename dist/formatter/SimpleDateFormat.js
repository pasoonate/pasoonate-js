"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _DateFormat2 = _interopRequireDefault(require("./DateFormat"));

var _Pasoonate = _interopRequireDefault(require("../Pasoonate"));

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

var SimpleDateFormat = /*#__PURE__*/function (_DateFormat) {
  _inherits(SimpleDateFormat, _DateFormat);

  var _super = _createSuper(SimpleDateFormat);

  function SimpleDateFormat() {
    _classCallCheck(this, SimpleDateFormat);

    return _super.call(this);
  }

  _createClass(SimpleDateFormat, [{
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

  return SimpleDateFormat;
}(_DateFormat2["default"]);

var _default = SimpleDateFormat;
exports["default"] = _default;
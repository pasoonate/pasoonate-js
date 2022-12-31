"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Parser2 = _interopRequireDefault(require("./Parser"));

var _CalendarManager = _interopRequireDefault(require("../calendar/CalendarManager"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SimpleParser = /*#__PURE__*/function (_Parser) {
  _inherits(SimpleParser, _Parser);

  var _super = _createSuper(SimpleParser);

  function SimpleParser() {
    _classCallCheck(this, SimpleParser);

    return _super.call(this);
  }
  /**
   * Translate the format to the pattern
   * 
   * @param {String} format
   * 
   * @return {Object} pattern as string and sequence as string[]
   */


  _createClass(SimpleParser, [{
    key: "translate",
    value: function translate(format) {
      var categories = {};
      var sequence = [];
      var prevChar = "";
      var currChar = "";
      var pattern = "";
      var index = 0;
      var patterns = new Map([[SimpleParser.FULL_YEAR, "(\\d{4})"], [SimpleParser.SHORT_YEAR, "(\\d{2})"], [SimpleParser.FULL_MONTH_NAME, "(\\D+)"], [SimpleParser.SHORT_MONTH_NAME, "(\\D+)"], [SimpleParser.FULL_MONTH, "(\\d{2})"], [SimpleParser.SHORT_MONTH, "(\\d{1,2})"], [SimpleParser.FULL_DAY_NAME, "(\\D+)"], [SimpleParser.SHORT_DAY_NAME, "(\\D+)"], [SimpleParser.FULL_DAY, "(\\d{2})"], [SimpleParser.SHORT_DAY, "(\\d{1,2})"], [SimpleParser.FULL_HOUR, "(\\d{2})"], [SimpleParser.SHORT_HOUR, "(\\d{1,2})"], [SimpleParser.FULL_MINUTE, "(\\d{2})"], [SimpleParser.SHORT_MINUTE, "(\\d{1,2})"], [SimpleParser.FULL_SECOND, "(\\d{2})"], [SimpleParser.SHORT_SECOND, "(\\d{1,2})"]]);

      for (var i = 0; i < format.length; i++) {
        currChar = format[i];

        if (currChar === "") {
          continue;
        }

        if (currChar === prevChar) {
          var _categories$index;

          var category = (_categories$index = categories[index]) !== null && _categories$index !== void 0 ? _categories$index : "";
          categories[index] = category + currChar;
        } else {
          categories[++index] = currChar;
        }

        prevChar = currChar;
      }

      for (var key in categories) {
        var value = categories[key];

        if (patterns.has(value)) {
          categories[key] = patterns.get(value);
          sequence.push(value);
        }
      }

      pattern = Object.values(categories).join("");
      pattern = pattern.replace("/", "\/").replace(".", "\.");
      return {
        pattern: pattern,
        sequence: sequence
      };
    }
    /**
     * @param {String} pattern
     * @param {String} text
     * @param {Array} sequence
     * 
     * @return {Array}
     */

  }, {
    key: "match",
    value: function match(pattern, text, sequence) {
      var regexp = new RegExp(pattern);

      if (!regexp.test(text)) {
        return [];
      }

      var matches = regexp.exec(text);
      var components = {};

      for (var i = 1; i < matches.length; i++) {
        components[sequence[i - 1]] = matches[i];
      }

      return components;
    }
    /**
     * 
     * @param {String} format 
     * @param {String} text 
     */

  }, {
    key: "parse",
    value: function parse(format, text) {
      var result = this.translate(format);
      var components = this.match(result.pattern, text, result.sequence);
      var calendar = this.calendar;
      var dateTime = calendar.getDateTime();

      for (var key in components) {
        var value = components[key];

        switch (key) {
          case SimpleParser.FULL_YEAR:
            dateTime.year = +value;
            break;

          case SimpleParser.SHORT_YEAR:
            var now = new _CalendarManager["default"]();
            now.name(calendar.name());
            dateTime.year = parseInt(now.getYear() / 100) * 100 + +value;
            break;

          case SimpleParser.FULL_MONTH:
          case SimpleParser.SHORT_MONTH:
            dateTime.month = +value;
            break;

          case SimpleParser.FULL_DAY:
          case SimpleParser.SHORT_DAY:
            dateTime.day = +value;
            break;

          case SimpleParser.FULL_HOUR:
          case SimpleParser.SHORT_HOUR:
            dateTime.hour = +value;
            break;

          case SimpleParser.FULL_MINUTE:
          case SimpleParser.SHORT_MINUTE:
            dateTime.minute = +value;
            break;

          case SimpleParser.FULL_SECOND:
          case SimpleParser.SHORT_SECOND:
            dateTime.second = +value;
            break;

          case SimpleParser.FULL_MONTH_NAME:
            names = _Pasoonate["default"].trans(calendar.name() + ".month_name");
            month = names.indexOf(value);

            if (month > 0) {
              dateTime.month = month;
            }

            break;

          case SimpleParser.SHORT_MONTH_NAME:
            names = _Pasoonate["default"].trans(calendar.name() + ".short_month_name");
            month = names.indexOf(value);

            if (month > 0) {
              dateTime.month = month;
            }

            break;

          case SimpleParser.FULL_DAY_NAME:
            // names = Pasoonate.trans(calendar.name() . ".day_name");
            break;

          case SimpleParser.SHORT_DAY_NAME:
            // names = Pasoonate.trans(calendar.name() . ".short_day_name");
            break;
        }
      }

      calendar.setDateTime(dateTime.year, dateTime.month, dateTime.day, dateTime.hour, dateTime.minute, dateTime.second);
    }
  }]);

  return SimpleParser;
}(_Parser2["default"]);

_defineProperty(SimpleParser, "FULL_YEAR", 'yyyy');

_defineProperty(SimpleParser, "SHORT_YEAR", 'yy');

_defineProperty(SimpleParser, "FULL_MONTH_NAME", 'MMMM');

_defineProperty(SimpleParser, "SHORT_MONTH_NAME", 'MMM');

_defineProperty(SimpleParser, "FULL_MONTH", 'MM');

_defineProperty(SimpleParser, "SHORT_MONTH", 'M');

_defineProperty(SimpleParser, "SHORT_DAY_NAME", 'ddd');

_defineProperty(SimpleParser, "FULL_DAY_NAME", 'dddd');

_defineProperty(SimpleParser, "FULL_DAY", 'dd');

_defineProperty(SimpleParser, "SHORT_DAY", 'd');

_defineProperty(SimpleParser, "FULL_HOUR", 'HH');

_defineProperty(SimpleParser, "SHORT_HOUR", 'H');

_defineProperty(SimpleParser, "FULL_MINUTE", 'mm');

_defineProperty(SimpleParser, "SHORT_MINUTE", 'm');

_defineProperty(SimpleParser, "FULL_SECOND", 'ss');

_defineProperty(SimpleParser, "SHORT_SECOND", 's');

var _default = SimpleParser;
exports["default"] = _default;
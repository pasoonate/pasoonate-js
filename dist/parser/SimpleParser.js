"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Parser2 = _interopRequireDefault(require("./Parser"));
var _CalendarManager = _interopRequireDefault(require("../calendar/CalendarManager"));
var _Pasoonate = _interopRequireDefault(require("../Pasoonate"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SimpleParser = /*#__PURE__*/function (_Parser) {
  function SimpleParser() {
    _classCallCheck(this, SimpleParser);
    return _callSuper(this, SimpleParser);
  }

  /**
   * Translate the format to the pattern
   * 
   * @param {String} format
   * 
   * @return {Object} pattern as string and sequence as string[]
   */
  _inherits(SimpleParser, _Parser);
  return _createClass(SimpleParser, [{
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
var _default = exports["default"] = SimpleParser;
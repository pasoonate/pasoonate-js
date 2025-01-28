'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _CalendarManager = _interopRequireDefault(require("../calendar/CalendarManager"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Parser = /*#__PURE__*/function () {
  function Parser() {
    _classCallCheck(this, Parser);
    _defineProperty(this, "_calendar", null);
  }

  /**
   * @return {CalendarManager} calendar
   */
  return _createClass(Parser, [{
    key: "calendar",
    get: function get() {
      return this._calendar;
    }

    /**
     * @param {CalendarManager} calendar 
     */,
    set: function set(calendar) {
      this._calendar = calendar instanceof _CalendarManager["default"] ? calendar : null;
    }

    /**
     * 
     * @param {String} format 
     * @param {String} text 
     */
  }, {
    key: "parse",
    value: function parse(format, text) {
      //
    }
  }]);
}();
var _default = exports["default"] = Parser;
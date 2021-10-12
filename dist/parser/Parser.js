"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CalendarManager = _interopRequireDefault(require("../calendar/CalendarManager"));

var _Pasoonate = _interopRequireDefault(require("../Pasoonate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Parser = /*#__PURE__*/function () {
  function Parser() {
    _classCallCheck(this, Parser);

    _defineProperty(this, "_calendar", null);
  }
  /**
   * @return {CalendarManager} calendar
   */


  _createClass(Parser, [{
    key: "calendar",
    get: function get() {
      return this._calendar;
    }
    /**
     * @param {CalendarManager} calendar 
     */
    ,
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
    value: function parse(format, text) {//
    }
  }]);

  return Parser;
}();

var _default = Parser;
exports["default"] = _default;
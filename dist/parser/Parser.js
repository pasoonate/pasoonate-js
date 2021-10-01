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

var Parser = /*#__PURE__*/function () {
  /**
   * 
   * @param {CalendarManager} calendarManager 
   */
  function Parser(calendarManager) {
    _classCallCheck(this, Parser);

    this._calendarManager = calendarManager instanceof _CalendarManager["default"] ? calendarManager : null;
    this._locale = _Pasoonate["default"].getLocale();
    this._format = '';
  }
  /**
   * @returns {RegExp}
   */


  _createClass(Parser, [{
    key: "parse",
    value:
    /**
     * 
     * @param {String} datetime 
     */
    function parse(datetime) {}
  }], [{
    key: "pattern",
    value: function pattern() {
      return '';
    }
  }]);

  return Parser;
}();

var _default = Parser;
exports["default"] = _default;
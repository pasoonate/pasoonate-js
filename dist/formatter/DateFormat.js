"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CalendarManager = _interopRequireDefault(require("../calendar/CalendarManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DateFormat = /*#__PURE__*/function () {
  function DateFormat() {
    _classCallCheck(this, DateFormat);

    this._calendar = null;
  }

  _createClass(DateFormat, [{
    key: "setCalendar",
    value: function setCalendar(calendar) {
      this._calendar = calendar instanceof _CalendarManager["default"] ? calendar : null;
    }
  }, {
    key: "getCalendar",
    value: function getCalendar() {
      return this._calendar;
    }
  }, {
    key: "format",
    value: function format() {
      if (this.getCalendar() === null) {
        return "";
      }

      return "".concat(this._calendar.getYear(), "-").concat(this._calendar.getMonth(), "-").concat(this._calendar.getDay(), " ").concat(this._calendar.getHour(), ":").concat(this._calendar.getMinute(), ":").concat(this._calendar.getSecond());
    }
  }]);

  return DateFormat;
}();

var _default = DateFormat;
exports["default"] = _default;
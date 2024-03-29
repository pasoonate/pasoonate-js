"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constants = _interopRequireDefault(require("./Constants"));

var _Localization = _interopRequireDefault(require("./Localization"));

var _DateFormat = _interopRequireDefault(require("./formatter/DateFormat"));

var _SimpleDateFormat = _interopRequireDefault(require("./formatter/SimpleDateFormat"));

var _CalendarManager = _interopRequireDefault(require("./calendar/CalendarManager"));

var _SimpleParser = _interopRequireDefault(require("./parser/SimpleParser"));

var _Parser = _interopRequireDefault(require("./parser/Parser"));

var _fa = _interopRequireDefault(require("./lang/fa"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pasoonate = /*#__PURE__*/function () {
  function Pasoonate() {
    _classCallCheck(this, Pasoonate);
  }

  _createClass(Pasoonate, null, [{
    key: "make",
    value: function make(timestamp, timezoneOffset) {
      return new _CalendarManager["default"](timestamp, timezoneOffset);
    }
  }, {
    key: "trans",
    value: function trans(key, locale) {
      return Pasoonate.localization.trans(key, locale);
    }
  }, {
    key: "setLocale",
    value: function setLocale(locale) {
      Pasoonate.localization.setLocale(locale);
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return Pasoonate.localization.getLocale();
    }
  }, {
    key: "isLocale",
    value: function isLocale(locale) {
      return Pasoonate.localization.isLocale(locale);
    }
  }, {
    key: "setFormatter",
    value: function setFormatter(formatter) {
      Pasoonate.formatter = formatter instanceof _DateFormat["default"] ? formatter : new _SimpleDateFormat["default"]();
    }
    /**
     * 
     * @param {Parser} parser 
     */

  }, {
    key: "setParser",
    value: function setParser(parser) {
      Pasoonate.parser = parser instanceof _Parser["default"] ? parser : new _SimpleParser["default"]();
    }
    /**
     *
     * @param {CalendarManager} instance 
     * @param {CalendarManager}
     */

  }, {
    key: "clone",
    value: function clone(instance) {
      return Pasoonate.make(instance.getTimestamp(), instance.getTimezoneOffset());
    }
  }]);

  return Pasoonate;
}();

Object.assign(Pasoonate, _Constants["default"]);
Pasoonate.localization = new _Localization["default"]();
Object.defineProperty(Pasoonate, 'localization', {
  writable: false,
  configurable: false
});
Pasoonate.formatter = new _SimpleDateFormat["default"]();
Object.defineProperty(Pasoonate, 'formatter', {
  writable: false,
  configurable: false
});
Pasoonate.parser = new _SimpleParser["default"]();
Object.defineProperty(Pasoonate, 'parser', {
  writable: false,
  configurable: false
});
Pasoonate.localization.setLang('fa', _fa["default"]);
var _default = Pasoonate;
exports["default"] = _default;
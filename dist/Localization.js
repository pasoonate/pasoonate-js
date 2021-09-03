"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Localization = /*#__PURE__*/function () {
  function Localization() {
    _classCallCheck(this, Localization);

    this._langs = {};
    this._locale = 'fa';
  }

  _createClass(Localization, [{
    key: "setLang",
    value: function setLang(name, trans) {
      this._langs[name] = trans;
    }
  }, {
    key: "setLocale",
    value: function setLocale(locale) {
      this._locale = locale || this._locale;
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this._locale;
    }
  }, {
    key: "isLocale",
    value: function isLocale(locale) {
      return this._locale === locale;
    }
  }, {
    key: "hasTransKey",
    value: function hasTransKey(key, locale) {
      var subKeys = key.split('.');
      if (this._langs[locale] == undefined) return false;
      var result = this._langs[locale];

      for (var i = 0; i < subKeys.length; i++) {
        if (subKeys[i] in result) {
          result = result[subKeys[i]];
          continue;
        }

        return false;
      }

      return result;
    }
  }, {
    key: "getTrans",
    value: function getTrans(key, locale) {
      var result = this.hasTransKey(key, locale);
      return result ? result : key;
    }
  }, {
    key: "trans",
    value: function trans(key, locale) {
      locale = locale || this._locale;
      key = key || '';
      return this.getTrans(key, locale);
    }
  }]);

  return Localization;
}();

var _default = Localization;
exports["default"] = _default;
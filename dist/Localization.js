"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Localization = /*#__PURE__*/function () {
  function Localization() {
    _classCallCheck(this, Localization);
    this._langs = {};
    this._locale = 'fa';
  }
  return _createClass(Localization, [{
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
}();
var _default = exports["default"] = Localization;
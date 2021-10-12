import Constants from './Constants';
import Localization from './Localization';
import DateFormat from './formatter/DateFormat';
import SimpleDateFormat from './formatter/SimpleDateFormat';
import CalendarManager from './calendar/CalendarManager';
import SimpleParser from './parser/SimpleParser';
import Parser from './parser/Parser';
import fa from './lang/fa';
class Pasoonate {

	constructor () {

	}

	static make (timestamp, timezoneOffset) {
		return new CalendarManager(timestamp, timezoneOffset);
	}

	static trans (key, locale) {
		return Pasoonate.localization.trans(key, locale);
	}

	static setLocale (locale) {
		Pasoonate.localization.setLocale(locale);
	}

	static getLocale () {
		return Pasoonate.localization.getLocale();
	}

	static isLocale (locale) {
		return Pasoonate.localization.isLocale(locale);
	}

	static setFormatter (formatter) {
		Pasoonate.formatter = formatter instanceof DateFormat ? formatter : new SimpleDateFormat();
	}

	/**
	 * 
	 * @param {Parser} parser 
	 */
	static setParser (parser) {
		Pasoonate.parser = parser instanceof Parser ? parser : new SimpleParser();
	}

	/**
	 *
	 * @param {CalendarManager} instance 
	 * @param {CalendarManager}
	 */
	static clone (instance) {
		return Pasoonate.make(instance.getTimestamp(), instance.getTimezoneOffset());
	}
}

Object.assign(Pasoonate, Constants);

Pasoonate.localization = new Localization();
Object.defineProperty(Pasoonate, 'localization', {
    writable: false,
    configurable: false
});

Pasoonate.formatter = new SimpleDateFormat();
Object.defineProperty(Pasoonate, 'formatter', {
    writable: false,
    configurable: false
});

Pasoonate.parser = new SimpleParser();
Object.defineProperty(Pasoonate, 'parser', {
	writable: false,
	configurable: false
});

Pasoonate.localization.setLang('fa', fa)

export default Pasoonate;
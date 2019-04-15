import Constants from './Constants';
import Localization from './Localization';
import DateFormat from './formatter/DateFormat';
import SimpleDateFormat from './formatter/SimpleDateFormat';
import CalendarManager from './calendar/CalendarManager';

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

	static getLocal () {
		return Pasoonate.localization.getLocal();
	}

	static isLocal (locale) {
		return Pasoonate.localization.isLocal(locale);
	}

	static setFormatter (formatter) {
		Pasoonate.formatter = formatter instanceof DateFormat ? formatter : new SimpleDateFormat();
	}

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
    writable: true,
    configurable: false
});

export default Pasoonate;
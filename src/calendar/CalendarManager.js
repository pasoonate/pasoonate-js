import Pasoonate from '../Pasoonate';
import GregorianCalendar from './GregorianCalendar';
import JalaliCalendar from './JalaliCalendar';
import IslamicCalendar from './IslamicCalendar';
import ShiaCalendar from './ShiaCalendar';
import Base from '../mixin/Base';
import AdditionAndSubtraction from '../mixin/AdditionAndSubstraction';
import Difference from '../mixin/Difference';
import Comparison from '../mixin/Comparison';
import Modifiers from '../mixin/Modifiers';
class CalendarManager {
	
	constructor (timestamp, timezoneOffset) {
		this._gregorian = new GregorianCalendar();	
		this._jalali = new JalaliCalendar();	
		this._islamic = new IslamicCalendar();	
		this._shia = new ShiaCalendar();
		this._currentCalendar = null;
		this._formatter = Pasoonate.formatter;

		let date = new Date();
		this._timestamp = timestamp || (Math.floor(date.getTime() / 1000)); // millisecond to seconds
		this._timezoneOffset = timezoneOffset !== undefined || -date.getTimezoneOffset() * 60; // minute * 60 = offset in seconds
	}

	gregorian (strDateTime) {
		this._currentCalendar = this._gregorian;
		this.parse(strDateTime);
		
		return this;
	}

	jalali (strDateTime) {
		this._currentCalendar = this._jalali;
		this.parse(strDateTime);

		return this;
	}

	islamic (strDateTime) {
		this._currentCalendar = this._islamic;
		this.parse(strDateTime);

		return this;
	}

	shia (strDateTime) {
		this._currentCalendar = this._shia;
		this.parse(strDateTime);

		return this;
	}

	name (calendar) {
		if(calendar) {
			calendar = String(calendar).toLowerCase();
			const instance = this[`_${calendar}`];

			if(instance) {
				this._currentCalendar = instance;	
			}

			return;
		}

		return this._currentCalendar ? this._currentCalendar.getName() : '';
	}

	/**
	 * 
	 * @param {String} expression 
	 */
	parse (expression) {
		const parsers = Pasoonate.parsers;

		for(let i in parsers) {
			const pattern = parsers[i].pattern();
			
			if(pattern.test(expression)) {
				(new parsers[i](this)).parse(expression);
				break;
			}
		}

		return this;
	}

	format (pattern, locale) {
		this._formatter.setCalendar(this);
		return this._formatter.format(pattern, locale);
	}

	clone () {
		return Pasoonate.make(this.getTimestamp(), this.getTimezoneOffset());
	}
}

Object.assign(CalendarManager.prototype, Base);
Object.assign(CalendarManager.prototype, AdditionAndSubtraction);
Object.assign(CalendarManager.prototype, Difference);
Object.assign(CalendarManager.prototype, Comparison);
Object.assign(CalendarManager.prototype, Modifiers);

export default CalendarManager;

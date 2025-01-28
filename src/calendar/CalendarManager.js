'use strict';

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
		this._parser = Pasoonate.parser;

		let date = new Date();
		this._timestamp = timestamp || (Math.floor(date.getTime() / 1000)); // millisecond to seconds
		this._timezoneOffset = timezoneOffset || -date.getTimezoneOffset() * 60; // minute * 60 = offset in seconds
	}

	gregorian (dateTime) {
		this._currentCalendar = this._gregorian;
		
		if(dateTime) {
			this.parse("yyyy-MM-dd HH:mm:ss", dateTime);
		}
		
		return this;
	}

	jalali (dateTime) {
		this._currentCalendar = this._jalali;
		
		if(dateTime) {
			this.parse("yyyy-MM-dd HH:mm:ss", dateTime);
		}

		return this;
	}

	islamic (dateTime) {
		this._currentCalendar = this._islamic;
		
		if(dateTime) {
			this.parse("yyyy-MM-dd HH:mm:ss", dateTime);
		}

		return this;
	}

	shia (dateTime) {
		this._currentCalendar = this._shia;
		
		if(dateTime) {
			this.parse("yyyy-MM-dd HH:mm:ss", dateTime);
		}

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
	 * @param {String} pattern 
	 * @param {String} text 
	 * 
	 * @return {CalendarManager}
	 */
	parse (pattern, text) {
		this._parser.calendar = this;

		this._parser.parse(pattern, text);

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

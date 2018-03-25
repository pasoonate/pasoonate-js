class CalendarManager {
	
	constructor (timestamp, timezoneOffset) {
		this.Gregorian = new GregorianCalendar();	
		this.Jalali = new JalaliCalendar();	
		this.Islamic = new IslamicCalendar();	
		this.Shia = new ShiaCalendar();

		let date = new Date();
		this._timestamp = timestamp || Math.floor(date.getTime() / 1000); // milisecond to seconds
		this._timezoneOffset = timezoneOffset || date.getTimezoneOffset() * 60; // minute * 60 = offset in seconds
	}

	gregorian (year, month, day, hour, minute, second) {
		this._timestamp = this.Gregorian.dateToTimestamp(year, month, day, hour, minute, second);

		return this;
	}

	jalali (year, month, day, hour, minute, second) {
		this._timestamp = this.Jalali.dateToTimestamp(year, month, day, hour, minute, second);

		return this;
	}

	islamic (year, month, day, hour, minute, second) {
		this._timestamp = this.Islamic.dateToTimestamp(year, month, day, hour, minute, second);

		return this;
	}

	shia (year, month, day, hour, minute, second) {
		this._timestamp = this.Shia.dateToTimestamp(year, month, day, hour, minute, second);

		return this;
	}

	setTimestamp (timestamp) {
		this._timestamp = timestamp;

		return this;
	}

	getTimestamp () {
		return this._timestamp;
	}

	setTimezoneOffset (timezoneOffset) {
		this._timezoneOffset = timezoneOffset;

		return this;
	}

	getTimezoneOffset () {
		return this._timezoneOffset;
	}
}
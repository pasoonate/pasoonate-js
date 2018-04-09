
let AdditionAndSubstractionMixin = {
	addYear(count) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let timestamp = this._currentCalendar.dateToTimestamp(date.year + count, date.month, date.day, date.hour, date.minute, date.second);
		this._timestamp = timestamp - this._timezoneOffset;
		return this;
	}

	addMount(count) {
		// let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		// let timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month + count, date.day, date.hour, date.minute, date.second);
		// this._timestamp = timestamp - this._timezoneOffset;
		return this;
	}

	addDay(count) {
		this._timestamp = timestamp + (count * 86400);
		return this;
	}

	addHour(count) {
		this._timestamp = timestamp + (count * 3600);
		return this;
	}

	addMinute(count) {
		this._timestamp = timestamp + (count * 60);
		return this;
	}

	addSecond(count) {
		this._timestamp = timestamp + count;
		return this;
	}

	subYear(count) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let timestamp = this._currentCalendar.dateToTimestamp(date.year - count, date.month, date.day, date.hour, date.minute, date.second);
		this._timestamp = timestamp - this._timezoneOffset;
		return this;
	}

	subMount(count) {
		// let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		// let timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month + count, date.day, date.hour, date.minute, date.second);
		// this._timestamp = timestamp - this._timezoneOffset;
		return this;
	}

	subDay(count) {
		this._timestamp = timestamp - (count * 86400);
		return this;
	}

	subHour(count) {
		this._timestamp = timestamp - (count * 3600);
		return this;
	}

	subMinute(count) {
		this._timestamp = timestamp - (count * 60);
		return this;
	}

	subSecond(count) {
		this._timestamp = timestamp - count;
		return this;
	}
};
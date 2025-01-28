'use strict';

const AdditionAndSubtraction = {
	addYear(count) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let year = date.year + count;
		let daysInMonth = this._currentCalendar.daysInMonth(year, date.month);
		let day = date.day <= daysInMonth ? date.day : daysInMonth;
		let timestamp = this._currentCalendar.dateToTimestamp(year, date.month, day, date.hour, date.minute, date.second);
		this._timestamp = timestamp - this._timezoneOffset;

		return this;
	},

	addMonth(count) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let totalMonth = date.month + count;
		let year = date.year + Math.ceil((totalMonth / 12) - 1);
		let month = (totalMonth % 12) === 0 ? 12 : (totalMonth % 12);
		let daysInMonth = this._currentCalendar.daysInMonth(year, month);
		let day = date.day <= daysInMonth ? date.day : daysInMonth;
		let timestamp = this._currentCalendar.dateToTimestamp(year, month, day, date.hour, date.minute, date.second);

		this._timestamp = timestamp - this._timezoneOffset;

		return this;
	},

	addDay(count) {
		this._timestamp += (count * 86400);

		return this;
	},

	addHour(count) {
		this._timestamp += (count * 3600);

		return this;
	},

	addMinute(count) {
		this._timestamp += (count * 60);

		return this;
	},

	addSecond(count) {
		this._timestamp += count;

		return this;
	},

	subYear(count) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let year = date.year - count;
		let daysInMonth = this._currentCalendar.daysInMonth(year, date.month);
		let day = date.day <= daysInMonth ? date.day : daysInMonth;
		let timestamp = this._currentCalendar.dateToTimestamp(year, date.month, day, date.hour, date.minute, date.second);
		this._timestamp = timestamp - this._timezoneOffset;

		return this;
	},

	subMonth(count) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let totalMonth = date.month - count;
		let year = date.year;
		let month = totalMonth;

		if(totalMonth <= 0) {
			totalMonth = -totalMonth;
			year -= Math.floor(totalMonth / 12) + 1;
			month = 12 - (totalMonth % 12);
		}

		let daysInMonth = this._currentCalendar.daysInMonth(year, month);
		let day = date.day <= daysInMonth ? date.day : daysInMonth;
		let timestamp = this._currentCalendar.dateToTimestamp(year, month, day, date.hour, date.minute, date.second);
		this._timestamp = timestamp - this._timezoneOffset;

		return this;
	},

	subDay(count) {
		this._timestamp -= (count * 86400);

		return this;
	},

	subHour(count) {
		this._timestamp -= (count * 3600);

		return this;
	},

	subMinute(count) {
		this._timestamp -= (count * 60);

		return this;
	},

	subSecond(count) {
		this._timestamp -= count;

		return this;
	}
};

export default AdditionAndSubtraction;
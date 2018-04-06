class Pasoonate extends Constants {

	constructor () {
		
	}

	static make (timestamp, timezoneOffset) {
		return new CalendarManager(timestamp, timezoneOffset);
	}
}
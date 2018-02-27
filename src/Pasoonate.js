class Pasoonate extends Constants {

	constructor () {
		console.log("Hello World!");

		this._J1970 = 2440587.5;

		let jalaliCalendar = new JalaliCalendar();

		console.log(jalaliCalendar.toJulianNumber());
	}
}
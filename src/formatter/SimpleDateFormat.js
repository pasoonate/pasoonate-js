import DateFormat from "./DateFormat";
import Pasoonate from "../Pasoonate";

class SimpleDateFormat extends DateFormat {
	
	constructor () {
		super();
	}

	format (pattern, locale) {
		return this.compile(pattern, locale);
	}

	compile (pattern, locale) {
		pattern = String(pattern);

		const FullYear = 'yyyy';
		const ShortYear = 'yy';
		const FullMonthName = 'MMMM';
		const ShortMonthName = 'MMM';
		const FullMonth = 'MM';
		const ShortMonth = 'M';
		const ShortDayName = 'ddd';
		const FullDayName = 'dddd';
		const FullDay = 'dd';
		const ShortDay = 'd';
		const FullHour = 'HH';
		const ShortHour = 'H';
		const FullMinute = 'mm';
		const ShortMinute = 'm';
		const FullSecond = 'ss';
		const ShortSecond = 's';

		let categories = [];
		let prevChar = '';
		let currChar = '';
		let index = 0;

		for (let i = 0; i < pattern.length; i++) {
			currChar = pattern[i];

			if(currChar === '') {
				continue;
			}

			if(currChar === prevChar) {
				categories[index] += currChar;
			} else {
				categories[++index] = currChar;
			}

			prevChar = currChar;
		}

		for (let i in categories) {
			switch (categories[i]) {
				case FullYear:
					categories[i] = this.getCalendar().getYear();
				break;
				case ShortYear:
					categories[i] = String(this.getCalendar().getYear()).substr(-2, 2);
				break;
				case FullMonthName:
					categories[i] = Pasoonate.trans(`${this.getCalendar().name()}.month_name.${this.getCalendar().getMonth()}`);
				break;
				case ShortMonthName:
					categories[i] = Pasoonate.trans(`${this.getCalendar().name()}.short_month_name.${this.getCalendar().getMonth()}`);
				break;
				case FullMonth:
					categories[i] = this.getCalendar().getMonth() > 9 ? this.getCalendar().getMonth() : `0${this.getCalendar().getMonth()}`;
				break;
				case ShortMonth:
					categories[i] = this.getCalendar().getMonth();
				break;
				case FullDayName:
					categories[i] = Pasoonate.trans(`${this.getCalendar().name()}.day_name.${this.getCalendar().dayOfWeek()}`);
				break;
				case ShortDayName:
					categories[i] = Pasoonate.trans(`${this.getCalendar().name()}.short_day_name.${this.getCalendar().dayOfWeek()}`);
				break;
				case FullDay:
					categories[i] = this.getCalendar().getDay() > 9 ? this.getCalendar().getDay() : `0${this.getCalendar().getDay()}`;
				break;
				case ShortDay:
					categories[i] = this.getCalendar().getDay();
				break;
				case FullHour:
					categories[i] = this.getCalendar().getHour() > 9 ? this.getCalendar().getHour() : `0${this.getCalendar().getHour()}`;
				break;
				case ShortHour:
					categories[i] = this.getCalendar().getHour();
				break;
				case FullMinute:
					categories[i] = this.getCalendar().getMinute() > 9 ? this.getCalendar().getMinute() : `0${this.getCalendar().getMinute()}`;
				break;
				case ShortMinute:
					categories[i] = this.getCalendar().getMinute();
				break;
				case FullSecond:
					categories[i] = this.getCalendar().getSecond() > 9 ? this.getCalendar().getSecond() : `0${this.getCalendar().getSecond()}`;
				break;
				case ShortSecond:
					categories[i] = this.getCalendar().getSecond();
				break;
			}
		}

		return categories.join('');
	}
}

export default SimpleDateFormat;
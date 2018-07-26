
let AdditionAndSubstractionMixin = {
	addYear(count) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let timestamp = this._currentCalendar.dateToTimestamp(date.year + count, date.month, date.day, date.hour, date.minute, date.second);
		this._timestamp = timestamp - this._timezoneOffset;
		return this;
	},

	addMonth(count) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let totalMonth = date.month + count;
		let year = date.year + Math.floor(totalMonth / 12);
		let month = totalMonth % 12;
		let timestamp = this._currentCalendar.dateToTimestamp(year, month, date.day, date.hour, date.minute, date.second);
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
		let timestamp = this._currentCalendar.dateToTimestamp(date.year - count, date.month, date.day, date.hour, date.minute, date.second);
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

		let timestamp = this._currentCalendar.dateToTimestamp(year, month, date.day, date.hour, date.minute, date.second);
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

export default AdditionAndSubstractionMixin;
let BaseMethodsMixin = {
	setTimestamp (timestamp) {
		this._timestamp = timestamp;

		return this;
	},

	getTimestamp () {
		return this._timestamp;
	},

	setTimezoneOffset (timezoneOffset) {
		this._timezoneOffset = timezoneOffset;

		return this;
	},

	getTimezoneOffset () {
		return this._timezoneOffset;
	},

	setYear (year) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let timestamp = this._currentCalendar.dateToTimestamp(year, date.month, date.day, date.hour, date.minute, date.second);
		this._timestamp = timestamp - this._timezoneOffset;
		return this;
	},

	getYear () {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		return date.year;
	},	

	setMonth (month) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let timestamp = this._currentCalendar.dateToTimestamp(date.year, month, date.day, date.hour, date.minute, date.second);
		this._timestamp = timestamp - this._timezoneOffset;
		return this;
	},

	getMonth () {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		return date.month;
	},

	setDay (day) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, day, date.hour, date.minute, date.second);
		this._timestamp = timestamp - this._timezoneOffset;
		return this;
	},

	getDay () {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		return date.day;	
	},

	setHour (hour) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, hour, date.minute, date.second);
		this._timestamp = timestamp - this._timezoneOffset;
		return this;
	},

	getHour () {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		return date.hour;
	},

	setMinute (minute) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, date.hour, minute, date.second);
		this._timestamp = timestamp - this._timezoneOffset;
		return this;
	},

	getMinute () {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		return date.minute;
	},

	setSecond (second) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, date.hour, date.minute, second);
		this._timestamp = timestamp - this._timezoneOffset;
		return this;
	},

	getSecond () {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		return date.second;
	},

	setUTCYear (year) {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		this._timestamp = this._currentCalendar.dateToTimestamp(year, date.month, date.day, date.hour, date.minute, date.second);
		return this;
	},
	
	getUTCYear () {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		return date.year;
	},

	setUTCMonth (month) {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		this._timestamp = this._currentCalendar.dateToTimestamp(date.year, month, date.day, date.hour, date.minute, date.second);
		return this;
	},
	
	getUTCMonth () {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		return date.month;
	},

	setUTCDay (day) {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		this._timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, day, date.hour, date.minute, date.second);
		return this;
	},
	
	getUTCDay () {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		return date.day;	
	},

	setUTCHour (hour) {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		this._timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, hour, date.minute, date.second);
		return this;
	},
	
	getUTCHour () {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		return date.hour;
	},

	setUTCMinute (minute) {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		this._timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, date.hour, minute, date.second);
		return this;
	},
	
	getUTCMinute () {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		return date.minute;
	},

	setUTCSecond (second) {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		this._timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, date.hour, date.minute, second);
		return this;
	},

	getUTCSecond () {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		return date.second;
	},

	setDate (year, month, day) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let timestamp = this._currentCalendar.dateToTimestamp(year, month, day, date.hour, date.minute, date.second);
		this._timestamp = timestamp - this._timezoneOffset;
		return this;
	},
	
	setTime (hour, minute, second) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, hour, minute, second);
		this._timestamp = timestamp - this._timezoneOffset;
		return this;
	},
	
	setDateTime (year, month, day, hour, minute, second) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let timestamp = this._currentCalendar.dateToTimestamp(year, month, day, hour, minute, second);
		this._timestamp = timestamp - this._timezoneOffset;
		return this;
	},

	setUTCDate (year, month, day) {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		this._timestamp = this._currentCalendar.dateToTimestamp(year, month, day, date.hour, date.minute, date.second);
		return this;
	},
	
	setUTCTime (hour, minute, second) {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		this._timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, hour, minute, second);
		return this;
	},
	
	setUTCDateTime (year, month, day, hour, minute, second) {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		this._timestamp = this._currentCalendar.dateToTimestamp(year, month, day, hour, minute, second);
		return this;
	},

	dayOfWeek () {
		return this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset);
    },

    dayOfYear () {
        return this._currentCalendar.dayOfYear(this._timestamp + this._timezoneOffset);
    },

    weekOfMonth () {
    	return this._currentCalendar.weekOfMonth(this._timestamp + this._timezoneOffset);
    },

    weekOfYear () {
    	return this._currentCalendar.weekOfYear(this._timestamp + this._timezoneOffset);
    },
};

export default BaseMethodsMixin;
class Calendar {
	
	constructor () {
		this.J1970 = 2440587.5;			// Julian date at Unix epoch: 1970-01-01
		this.DayInSecond = 86400;
	}	

	timestampToJulianDay (timestamp) {
		let julianDay = this.J1970 + timestamp / this.DayInSecond;

		return julianDay;
	}

	julianDayToTimestamp (julianDay) {
		let timestamp = Math.round((julianDay - this.J1970) * this.DayInSecond);
		
		return timestamp;
    }

	julianDayWithoutTime (julianDay) {
		
		return Math.floor(julianDay) + 0.5;
	}

	extractJulianDayTime (julianDay) {
        julianDay += 0.5;

        // Astronomical to civil
        let time = ((julianDay - Math.floor(julianDay)) * this.DayInSecond) + 0.5;

        return {
        	"hour": Math.floor(time / 3600),
        	"minute": Math.floor((time / 60) % 60),
        	"second": Math.floor(time % 60)
        };
    }

    addTimeToJulianDay (julianDay, hour, minute, second) {
    	let timestamp = this.julianDayToTimestamp(julianDay);
    	timestamp += (hour * 3600) + (minute * 60) + second;

    	return this.timestampToJulianDay(timestamp);
    }

    dateToJulianDay (year, month, day, hour, minute, second) {
        //
    }

    dateToTimestamp (year, month, day, hour, minute, second) {
        let julianDay = this.dateToJulianDay (year, month, day, hour, minute, second);

        return this.julianDayToTimestamp(julianDay);
    }

    julianDayToDate (julianDay) {
        //
    }

    timestampToDate (timestamp) {
        let julianDay = this.timestampToJulianDay(timestamp);

        return this.julianDayToDate(julianDay);
    }

    daysInMonth (year, month) {
        return 0;
    }

    dayOfWeek (timestamp) {
        let julianDay = this.timestampToJulianDay(timestamp);
        return this.mod(Math.floor((julianDay + 2.5)), 7);
    }

    dayOfYear (timestamp) {
        let currentDate = this.timestampToDate(timestamp);
        let firstOfYearjulianDay = this.dateToJulianDay(currentDate.year, 1, 1, 0, 0, 0);
        let currentjulianDay = this.dateToJulianDay(currentDate.year, currentDate.month, currentDate.day, currentDate.hour, currentDate.minute, currentDate.second);

        return Math.floor(currentjulianDay - firstOfYearjulianDay + 1);
    }

    weekOfMonth (timestamp) {
        let currentDate = this.timestampToDate(timestamp);
        let firstDayOfMonthTimestamp = this.dateToTimestamp(currentDate.year, currentDate.month, 1, currentDate.hour, currentDate.minute, currentDate.second);
        let dayOfWeekInCurrentDayOfMonth = this.dayOfWeek(timestamp);
        let dayOfWeekInFirstDayOfMonth = this.dayOfWeek(firstDayOfMonthTimestamp);

        let week = 1;

        if(currentDate.day <= 7 - dayOfWeekInFirstDayOfMonth) {
            return week;
        }

        week += ((currentDate.day - ((7 - dayOfWeekInFirstDayOfMonth) + (dayOfWeekInCurrentDayOfMonth + 1))) / 7) + 1;

        return week;
    }

    weekOfYear (timestamp) {
        let currentDate = this.timestampToDate(timestamp);
        let dayOfYear = this.dayOfYear(timestamp);
        let firstDayOfYearTimestamp = this.dateToTimestamp(currentDate.year, 1, 1, currentDate.hour, currentDate.minute, currentDate.second);
        let dayOfWeekInCurrentDayOfYear = this.dayOfWeek(timestamp);
        let dayOfWeekInFirstDayOfYear = this.dayOfWeek(firstDayOfYearTimestamp);

        let week = 1;

        if(dayOfYear <= 7 - dayOfWeekInFirstDayOfYear) {
            return week;
        }

        week += ((dayOfYear - ((7 - dayOfWeekInFirstDayOfYear) + (dayOfWeekInCurrentDayOfYear + 1))) / 7) + 1;

        return week;   
    }

    mod (a, b) {
        return a - (b * Math.floor(a / b));
    }

    isLeap (year) {
        //
    }

}

export default Calendar;
import GregorianCalendar from "./GregorianCalendar";
import JalaliCalendar from "./JalaliCalendar";
import IslamicCalendar from "./IslamicCalendar";
import ShiaCalendar from "./ShiaCalendar";
import BaseMethodsMixin from "../mixin/BaseMethodsMixin";
import AdditionAndSubstractionMixin from "../mixin/AdditionAndSubstractionMixin";

class CalendarManager {
	
	constructor (timestamp, timezoneOffset) {
		this._gregorian = new GregorianCalendar();	
		this._jalali = new JalaliCalendar();	
		this._islamic = new IslamicCalendar();	
		this._shia = new ShiaCalendar();
		this._currentCalendar = null;
		this._formatter = Pasoonate.formatter;

		this._formatter.setCalendar(this);

		let date = new Date();
		this._timestamp = timestamp || Math.floor(date.getTime() / 1000); // milisecond to seconds
		this._timezoneOffset = timezoneOffset || -date.getTimezoneOffset() * 60; // minute * 60 = offset in seconds
	}

	gregorian (year, month, day, hour, minute, second) {
		let date = this._gregorian.timestampToDate(this._timestamp);		
		year = year || date.year;
		month = month || date.month;
		day = day || date.day;
		hour = hour || date.hour;
		minute = minute || date.minute;
		second = second || date.second;

		this._timestamp = this._gregorian.dateToTimestamp(year, month, day, hour, minute, second);
		this._currentCalendar = this._gregorian;
		return this;
	}

	jalali (year, month, day, hour, minute, second) {
		let date = this._jalali.timestampToDate(this._timestamp);		
		year = year || date.year;
		month = month || date.month;
		day = day || date.day;
		hour = hour || date.hour;
		minute = minute || date.minute;
		second = second || date.second;

		this._timestamp = this._jalali.dateToTimestamp(year, month, day, hour, minute, second);
		this._currentCalendar = this._jalali;
		return this;
	}

	islamic (year, month, day, hour, minute, second) {
		let date = this._islamic.timestampToDate(this._timestamp);		
		year = year || date.year;
		month = month || date.month;
		day = day || date.day;
		hour = hour || date.hour;
		minute = minute || date.minute;
		second = second || date.second;

		this._timestamp = this._islamic.dateToTimestamp(year, month, day, hour, minute, second);
		this._currentCalendar = this._islamic;
		return this;
	}

	shia (year, month, day, hour, minute, second) {
		let date = this._shia.timestampToDate(this._timestamp);		
		year = year || date.year;
		month = month || date.month;
		day = day || date.day;
		hour = hour || date.hour;
		minute = minute || date.minute;
		second = second || date.second;

		this._timestamp = this._shia.dateToTimestamp(year, month, day, hour, minute, second);
		this._currentCalendar = this._shia;
		return this;
	}

	format (pattern, locale) {
		return this._formatter.format(pattern, locale);
	}	
}

Object.assign(CalendarManager.prototype, BaseMethodsMixin);
Object.assign(CalendarManager.prototype, AdditionAndSubstractionMixin);

export default CalendarManager;

import Calendar from './Calendar';

class GregorianCalendar extends Calendar {
	constructor () {
		super();
        
        this.GregorianEpoch = 1721425.5;
        Object.defineProperty(this, 'GregorianEpoch', {
            writable: false,
            configurable: false
        });
	}

	dateToJulianDay (year, month, day, hour, minute, second) {
		let julianDay = this.GregorianEpoch - 1;

		julianDay += 365 * (year - 1);
		julianDay += Math.floor((year - 1) / 4);
		julianDay += Math.floor((year - 1) / 100) * -1;
		julianDay += Math.floor((year - 1) / 400);
		julianDay += Math.floor((((367 * month) - 362) / 12) + ((month <= 2) ? 0 : (this.isLeap(year) ? -1 : -2)) + day);

		return this.addTimeToJulianDay(julianDay, hour, minute, second);
	}

    julianDayToDate (julianDay) {
    	let time = this.extractJulianDayTime(julianDay);
    	
    	julianDay = this.julianDayWithoutTime(julianDay);

    	let wjd = Math.floor(julianDay - 0.5) + 0.5;
        let depoch = wjd - this.GregorianEpoch;
        let quadricent = Math.floor(depoch / 146097);
        let dqc = this.mod(depoch, 146097);
        let cent = Math.floor(dqc / 36524);
        let dcent = this.mod(dqc, 36524);
        let quad = Math.floor(dcent / 1461);
        let dquad = this.mod(dcent, 1461);
        let yindex = Math.floor(dquad / 365);
        let year = (quadricent * 400) + (cent * 100) + (quad * 4) + yindex;
        if (!((cent == 4) || (yindex == 4))) {
            year++;
        }
        let yearday = wjd - this.julianDayWithoutTime(this.dateToJulianDay(year, 1, 1, time.hour, time.minute, time.second));
        let leapadj = (wjd < this.julianDayWithoutTime(this.dateToJulianDay(year, 3, 1, time.hour, time.minute, time.second)) ? 0 : (this.isLeap(year) ? 1 : 2));
        let month = Math.floor((((yearday + leapadj) * 12) + 373) / 367);
        let day = (wjd - this.julianDayWithoutTime(this.dateToJulianDay(year, month, 1, time.hour, time.minute, time.second))) + 1;

        return {
        	"year": year,
        	"month": month,
        	"day": day,
        	"hour": time.hour,
        	"minute": time.minute,
        	"second": time.second,
        }

    }

    daysInMonth (year, month) {
        let gregorianDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
        if (month < 1 || month > 12) {
            throw new RangeException("$month Out Of Range Exception");
        }
        
        if (year && this.isLeap(year) && month == 2) {
            return 29;
        }
        
        return gregorianDaysInMonth[month - 1];
    }

    isLeap (year) {
        return ((year % 4) == 0) && (!(((year % 100) == 0) && ((year % 400) != 0)));
    }
}

export default GregorianCalendar;
import Calendar from "./Calendar";

class IslamicCalendar extends Calendar {
	
	constructor () {
        super();
        
		this.IslamicEpoch = 1948439.5;
		Object.defineProperty(this, 'IslamicEpoch', {
            writable: false,
            configurable: false
        });
	}

	dateToJulianDay (year, month, day, hour, minute, second) {
        let julianDay = day;

        julianDay += Math.ceil((month - 1) * 29.5);
        julianDay += (year - 1) * 354;
        julianDay += Math.floor(((11 * year) + 3) / 30);
        julianDay += this.IslamicEpoch - 1;

		return this.addTimeToJulianDay(julianDay, hour, minute, second);
	}

    julianDayToDate (julianDay) {
        let time = this.extractJulianDayTime(julianDay);
        
        julianDay = this.julianDayWithoutTime(julianDay);
        julianDay = Math.floor(julianDay) + 0.5;
        
        let year = Math.floor((((julianDay - this.IslamicEpoch) * 30) + 10646) / 10631);
        let month = Math.min(12, Math.ceil((julianDay - (29 + this.julianDayWithoutTime(this.dateToJulianDay(year, 1, 1, time.hour, time.minute, time.second)))) / 29.5) + 1);
        let day = (julianDay - this.julianDayWithoutTime(this.dateToJulianDay(year, month, 1, time.hour, time.minute, time.second))) + 1;

        return {
        	"year": year,
        	"month": month,
        	"day": day,
        	"hour": time.hour,
        	"minute": time.minute,
        	"second": time.second,
        }
    }

    daysInMonth (year, month) {
        let islamicDaysInMonth = [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29]; //30

        if (month < 1 || month > 12) {
            throw new RangeException("$month Out Of Range Exception");
        }
        
        if (year && this.isLeap(year) && month == 12) {
            return 30;
        }
        
        return islamicDaysInMonth[month - 1];
    }

    isLeap (year) {
        let isLeap = (((year * 11) + 14) % 30) < 11;
        return isLeap;
    }
}

export default IslamicCalendar;
import Calendar from "./Calendar";

class JalaliCalendar extends Calendar {
	
	constructor () {
        super();

		this.JalaliEpoch = 1948320.5;
		Object.defineProperty(this, 'JalaliEpoch', {
            writable: false,
            configurable: false
        });
	}

	dateToJulianDay (year, month, day, hour, minute, second) {
		let epochBase = year - (year >= 0 ? 474 : 473);
        let epochYear = 474 + this.mod(epochBase, 2820);
        let julianDay = day;

        julianDay += month <= 7 ? (month - 1) * 31 : ((month - 1) * 30) + 6;
        julianDay += Math.floor(((epochYear * 682) - 110) / 2816);
        julianDay += (epochYear - 1) * 365;
        julianDay += Math.floor(epochBase / 2820) * 1029983;
        julianDay += this.JalaliEpoch - 1;

		return this.addTimeToJulianDay(julianDay, hour, minute, second);
	}

    julianDayToDate (julianDay) {
    	let time = this.extractJulianDayTime(julianDay);
    	
    	julianDay = this.julianDayWithoutTime(julianDay);

    	julianDay = Math.floor(julianDay) + 0.5;

        let depoch = julianDay - this.julianDayWithoutTime(this.dateToJulianDay(475, 1, 1, time.hour, time.minute, time.second));
        let cycle = Math.floor(depoch / 1029983);
        let cyear = this.mod(depoch, 1029983);        
    	let ycycle, aux1, aux2;

        if (cyear == 1029982) {
            ycycle = 2820;
        } else {
            aux1 = Math.floor(cyear / 366);
            aux2 = this.mod(cyear, 366);
            ycycle = Math.floor(((2134 * aux1) + (2816 * aux2) + 2815) / 1028522) + aux1 + 1;
        }
        
        let year = ycycle + (2820 * cycle) + 474;
        
        if (year <= 0) {
            year--;
        }
        
        let yday = (julianDay - this.julianDayWithoutTime(this.dateToJulianDay(year, 1, 1, time.hour, time.minute, time.second))) + 1;
        let month = (yday <= 186) ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
        let day = (julianDay - this.julianDayWithoutTime(this.dateToJulianDay(year, month, 1, time.hour, time.minute, time.second))) + 1;
            
        return {
        	"year": year,
        	"month": month,
        	"day": day,
        	"hour": time.hour,
        	"minute": time.minute,
        	"second": time.second,
        }
    }

    daysInMonth (year, month) {
        let gregorianDaysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]; //30
        
        if (month < 1 || month > 12) {
            throw new RangeException("$month Out Of Range Exception");
        }
        
        if (year && this.isLeap(year) && month == 12) {
            return 30;
        }
        
        return gregorianDaysInMonth[month - 1];
    }

    isLeap (year) {
        return ((((((year - ((year > 0) ? 474 : 473)) % 2820) + 474) + 38) * 682) % 2816) < 682;
    }
}

export default JalaliCalendar;
import Calendar from "./Calendar";

class ShiaCalendar extends Calendar {
	
	constructor () {
        super();
        
		this.ShiaEpoch = 1948439.5;
		Object.defineProperty(this, 'ShiaEpoch', {
            writable: false,
            configurable: false
        });
	}

	dateToJulianDay (year, month, day, hour, minute, second) {
        let dayOfYear = day;
        let julianDay = 0;

        for (let i = 1; i < month; i++) {
            dayOfYear += this.daysInMonth(year, i);
        }

        julianDay += dayOfYear;
        julianDay += (year - 1) * 354;
        julianDay += Math.floor(((11 * year) + 3) / 30);
        julianDay += this.ShiaEpoch - 1;

		return this.addTimeToJulianDay(julianDay, hour, minute, second);
	}

    julianDayToDate (julianDay) {
        let time = this.extractJulianDayTime(julianDay);
        
        julianDay = this.julianDayWithoutTime(julianDay);
        julianDay = Math.floor(julianDay) + 0.5;
        
        let year = Math.floor((((julianDay - this.ShiaEpoch) * 30) + 10646) / 10631);
        let month = Math.min(12, Math.ceil((julianDay - (29 + this.julianDayWithoutTime(this.dateToJulianDay(year, 1, 1, time.hour, time.minute, time.second)))) / 29.5) + 1);
        let dayOfYear = julianDay - this.julianDayWithoutTime(this.dateToJulianDay(year, 1, 1, time.hour, time.minute, time.second));
        let days = 0;
        for (let i = 1; i <= 12; i++) {
            days += this.daysInMonth(year, i);
            if (dayOfYear < days) {
                month = i;
                break;
            }
        }
        let day = (julianDay - ((days - this.daysInMonth(year, month)) + ((year - 1) * 354) + Math.floor((3 + (11 * year)) / 30) + this.ShiaEpoch) + 1);

        return {
        	"year": year,
        	"month": month,
        	"day": day,
        	"hour": time.hour,
        	"minute": time.minute,
        	"second": time.second,
        }
    }

    daysInMonth (year, month) {
 		let islamicDaysInMonth = [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29]; //30
        let shiaDaysInMonthInYears = {
            1435: [29, 30, 29, 30, 29, 30, 29, 30, 30, 30, 29, 30],
            1436: [29, 30, 29, 29, 30, 29, 30, 29, 30, 29, 30, 30],
            1437: [29, 30, 30, 29, 30, 29, 29, 30, 29, 29, 30, 30],
            1438: [29, 30, 30, 30, 29, 30, 29, 29, 30, 29, 29, 30],
            1439: [29, 30, 30, 30, 30, 29, 30, 29, 29, 30, 29, 29],
            1440: [30, 29, 30, 30, 30, 29, 29, 30, 29, 30, 29, 29],
        };

        if (month < 1 || month > 12) {
            throw new RangeException("$month Out Of Range Exception");
        }

        if (shiaDaysInMonthInYears[year] === undefined) {
            return islamicDaysInMonth[month - 1];
        }

        return shiaDaysInMonthInYears[year][month - 1];   	
    }

    isLeap (year) {
        let isLeap = (((year * 11) + 14) % 30) < 11;
		return isLeap;
	}
}

export default ShiaCalendar;

class DateFormat {
	
	constructor () {
		this._calendar = null;
	}

	setCalendar (calendar) {
		this._calendar = calendar instanceof CalendarManager ? calendar : null;
	}

	getCalendar () {
		return this._calendar;
	}

	format () {
		if(this.getCalendar() === null) {
			return "";
		}

		return `${this._calendar.getYear()}-${this._calendar.getMonth()}-${this._calendar.getDay()} ${this._calendar.getHour()}:${this._calendar.getMinute()}:${this._calendar.getSecond()}`;
	}
}

export default DateFormat;
import DateFormat from "./DateFormat";

class SimpleDateFormat extends DateFormat {
	
	constructor () {
		super();
	}

	format (pattern, locale) {
		return this.compile(pattern, locale);
	}

	compile (pattern, locale) {
		pattern = String(pattern).toLowerCase();

		let result = pattern;

		const Signs = ['y', 'm', 'd'];
		const FullYear = 'yyyy';
		const ShortYear = 'yy';
		const Month = 'mm';
		const SingleMonth = 'm';
		const Day = 'dd';
		const SingleDay = 'd';

		let chars = [];
		let prevChar = '';
		let currChar = '';
		let index = 0;

		for (let i = 0; i < pattern.length; i++) {
			currChar = Signs.includes(pattern[i]) ? pattern[i] : '';

			if(currChar === '') {
				continue;
			}

			if(currChar === prevChar) {
				chars[index].text += currChar;
			} else {
				chars[++index] = { text: currChar, position: i};
			}
			prevChar = currChar;
		}

		for (let i in chars) {
			switch (chars[i].text) {
				case FullYear:
					result = result.replace(FullYear, this.getCalendar().getYear());
				break;
				case ShortYear:
					result = result.replace(ShortYear, String(this.getCalendar().getYear()).substr(-2, 2));
				break;
				case SingleMonth:
					result = result.replace(SingleMonth, this.getCalendar().getMonth());
				break;
				case Month:
					result = result.replace(Month, this.getCalendar().getMonth() > 9 ? this.getCalendar().getMonth() : '0' + this.getCalendar().getMonth());
				break;
				case SingleDay:
					result = result.replace(SingleDay, this.getCalendar().getDay());
				break;
				case Day:
					result = result.replace(Day, this.getCalendar().getDay() > 9 ? this.getCalendar().getDay() : '0' + this.getCalendar().getDay());
				break;
			}
		}
		return result;
	}
}

export default SimpleDateFormat;
class Constants {
	 
	constructor () {

	}
}

export default Constants;

class Localization {

    constructor () {
        this._langs = {};
        this._locale = 'fa';
    }

    setLang (name, trans) {
        this._langs[name] = trans;
    }

    setLocale(locale) {
        this._locale = locale || this._locale;
    }

    getLocale () {
        return this._locale;
    }

    isLocale (locale) {
        return this._locale === locale;
    }

    hasTransKey (key, locale) {
        let subKeys = key.split('.');
        if (this._langs[locale] == undefined) return false;
        let result = this._langs[locale];
        for (let i = 0; i < subKeys.length; i++) {
            if (subKeys[i] in result) {
                result = result[subKeys[i]];
                continue;
            }

            return false;
        }

        return result;
    }

    getTrans (key, locale) {
        let result = this.hasTransKey(key, locale);
        return result ? result : key;
    }

    trans (key, locale) {
        locale = locale || this._locale;
        key = key || '';
        return this.getTrans(key, locale);
    }
}

export default Localization;
import Constants from "./Constants";
import CalendarManager from "./calendar/CalendarManager";
import Localization from "./Localization";
import SimpleDateFormat from "./formatter/SimpleDateFormat";

class Pasoonate extends Constants {

	constructor () {
		super();
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
}

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

let fa = {
	gregorian: {
		day_name: {
			sunday: "Sunday"
		}
	},
	jalali: {},
	islamic: {},
	shia: {}
};

Pasoonate.localization.setLang('fa', fa);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9taXhpbi9BZGRpdGlvbkFuZFN1YnN0cmFjdGlvbk1peGluLmpzIiwic3JjL21peGluL0Jhc2VNZXRob2RzTWl4aW4uanMiLCJzcmMvY2FsZW5kYXIvQ2FsZW5kYXIuanMiLCJzcmMvY2FsZW5kYXIvQ2FsZW5kYXJNYW5hZ2VyLmpzIiwic3JjL2NhbGVuZGFyL0dyZWdvcmlhbkNhbGVuZGFyLmpzIiwic3JjL2NhbGVuZGFyL0lzbGFtaWNDYWxlbmRhci5qcyIsInNyYy9jYWxlbmRhci9KYWxhbGlDYWxlbmRhci5qcyIsInNyYy9jYWxlbmRhci9TaGlhQ2FsZW5kYXIuanMiLCJzcmMvZm9ybWF0dGVyL0RhdGVGb3JtYXQuanMiLCJzcmMvZm9ybWF0dGVyL1NpbXBsZURhdGVGb3JtYXQuanMiLCJzcmMvQ29uc3RhbnRzLmpzIiwic3JjL0xvY2FsaXphdGlvbi5qcyIsInNyYy9QYXNvb25hdGUuanMiLCJzcmMvbGFuZy9mYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicGFzb29uYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5sZXQgQWRkaXRpb25BbmRTdWJzdHJhY3Rpb25NaXhpbiA9IHtcblx0YWRkWWVhcihjb3VudCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyICsgY291bnQsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0YWRkTW9udGgoY291bnQpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xuXHRcdGxldCB0b3RhbE1vbnRoID0gZGF0ZS5tb250aCArIGNvdW50O1xuXHRcdGxldCB5ZWFyID0gZGF0ZS55ZWFyICsgTWF0aC5mbG9vcih0b3RhbE1vbnRoIC8gMTIpO1xuXHRcdGxldCBtb250aCA9IHRvdGFsTW9udGggJSAxMjtcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBtb250aCwgZGF0ZS5kYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRhZGREYXkoY291bnQpIHtcblx0XHR0aGlzLl90aW1lc3RhbXAgKz0gKGNvdW50ICogODY0MDApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGFkZEhvdXIoY291bnQpIHtcblx0XHR0aGlzLl90aW1lc3RhbXAgKz0gKGNvdW50ICogMzYwMCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0YWRkTWludXRlKGNvdW50KSB7XG5cdFx0dGhpcy5fdGltZXN0YW1wICs9IChjb3VudCAqIDYwKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRhZGRTZWNvbmQoY291bnQpIHtcblx0XHR0aGlzLl90aW1lc3RhbXAgKz0gY291bnQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0c3ViWWVhcihjb3VudCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyIC0gY291bnQsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0c3ViTW9udGgoY291bnQpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xuXHRcdGxldCB0b3RhbE1vbnRoID0gZGF0ZS5tb250aCAtIGNvdW50O1xuXHRcdGxldCB5ZWFyID0gZGF0ZS55ZWFyO1xuXHRcdGxldCBtb250aCA9IHRvdGFsTW9udGg7XG5cblx0XHRpZih0b3RhbE1vbnRoIDw9IDApIHtcblx0XHRcdHRvdGFsTW9udGggPSAtdG90YWxNb250aDtcblx0XHRcdHllYXIgLT0gTWF0aC5mbG9vcih0b3RhbE1vbnRoIC8gMTIpICsgMTtcblx0XHRcdG1vbnRoID0gMTIgLSAodG90YWxNb250aCAlIDEyKTtcblx0XHR9XG5cblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBtb250aCwgZGF0ZS5kYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRzdWJEYXkoY291bnQpIHtcblx0XHR0aGlzLl90aW1lc3RhbXAgLT0gKGNvdW50ICogODY0MDApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHN1YkhvdXIoY291bnQpIHtcblx0XHR0aGlzLl90aW1lc3RhbXAgLT0gKGNvdW50ICogMzYwMCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0c3ViTWludXRlKGNvdW50KSB7XG5cdFx0dGhpcy5fdGltZXN0YW1wIC09IChjb3VudCAqIDYwKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRzdWJTZWNvbmQoY291bnQpIHtcblx0XHR0aGlzLl90aW1lc3RhbXAgLT0gY291bnQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZGl0aW9uQW5kU3Vic3RyYWN0aW9uTWl4aW47IiwibGV0IEJhc2VNZXRob2RzTWl4aW4gPSB7XG5cdHNldFRpbWVzdGFtcCAodGltZXN0YW1wKSB7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Z2V0VGltZXN0YW1wICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fdGltZXN0YW1wO1xuXHR9LFxuXG5cdHNldFRpbWV6b25lT2Zmc2V0ICh0aW1lem9uZU9mZnNldCkge1xuXHRcdHRoaXMuX3RpbWV6b25lT2Zmc2V0ID0gdGltZXpvbmVPZmZzZXQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRnZXRUaW1lem9uZU9mZnNldCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xuXHR9LFxuXG5cdHNldFllYXIgKHllYXIpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKHllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Z2V0WWVhciAoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRyZXR1cm4gZGF0ZS55ZWFyO1xuXHR9LFx0XG5cblx0c2V0TW9udGggKG1vbnRoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIG1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdldE1vbnRoICgpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xuXHRcdHJldHVybiBkYXRlLm1vbnRoO1xuXHR9LFxuXG5cdHNldERheSAoZGF5KSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdldERheSAoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRyZXR1cm4gZGF0ZS5kYXk7XHRcblx0fSxcblxuXHRzZXRIb3VyIChob3VyKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdldEhvdXIgKCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XG5cdFx0cmV0dXJuIGRhdGUuaG91cjtcblx0fSxcblxuXHRzZXRNaW51dGUgKG1pbnV0ZSkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBtaW51dGUsIGRhdGUuc2Vjb25kKTtcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRnZXRNaW51dGUgKCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XG5cdFx0cmV0dXJuIGRhdGUubWludXRlO1xuXHR9LFxuXG5cdHNldFNlY29uZCAoc2Vjb25kKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBzZWNvbmQpO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdldFNlY29uZCAoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRyZXR1cm4gZGF0ZS5zZWNvbmQ7XG5cdH0sXG5cblx0c2V0VVRDWWVhciAoeWVhcikge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoeWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0XG5cdGdldFVUQ1llYXIgKCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xuXHRcdHJldHVybiBkYXRlLnllYXI7XG5cdH0sXG5cblx0c2V0VVRDTW9udGggKG1vbnRoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIG1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRcblx0Z2V0VVRDTW9udGggKCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xuXHRcdHJldHVybiBkYXRlLm1vbnRoO1xuXHR9LFxuXG5cdHNldFVUQ0RheSAoZGF5KSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRcblx0Z2V0VVRDRGF5ICgpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcblx0XHRyZXR1cm4gZGF0ZS5kYXk7XHRcblx0fSxcblxuXHRzZXRVVENIb3VyIChob3VyKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRcblx0Z2V0VVRDSG91ciAoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0cmV0dXJuIGRhdGUuaG91cjtcblx0fSxcblxuXHRzZXRVVENNaW51dGUgKG1pbnV0ZSkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBtaW51dGUsIGRhdGUuc2Vjb25kKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0XG5cdGdldFVUQ01pbnV0ZSAoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0cmV0dXJuIGRhdGUubWludXRlO1xuXHR9LFxuXG5cdHNldFVUQ1NlY29uZCAoc2Vjb25kKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBzZWNvbmQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdldFVUQ1NlY29uZCAoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0cmV0dXJuIGRhdGUuc2Vjb25kO1xuXHR9LFxuXG5cdHNldERhdGUgKHllYXIsIG1vbnRoLCBkYXkpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKHllYXIsIG1vbnRoLCBkYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0XG5cdHNldFRpbWUgKGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdFxuXHRzZXREYXRlVGltZSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRzZXRVVENEYXRlICh5ZWFyLCBtb250aCwgZGF5KSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBtb250aCwgZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdFxuXHRzZXRVVENUaW1lIChob3VyLCBtaW51dGUsIHNlY29uZCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRcblx0c2V0VVRDRGF0ZVRpbWUgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0ZGF5T2ZXZWVrICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fY3VycmVudENhbGVuZGFyLmRheU9mV2Vlayh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XG4gICAgfSxcblxuICAgIGRheU9mWWVhciAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF5T2ZZZWFyKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcbiAgICB9LFxuXG4gICAgd2Vla09mTW9udGggKCkge1xuICAgIFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRDYWxlbmRhci53ZWVrT2ZNb250aCh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XG4gICAgfSxcblxuICAgIHdlZWtPZlllYXIgKCkge1xuICAgIFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRDYWxlbmRhci53ZWVrT2ZZZWFyKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZU1ldGhvZHNNaXhpbjsiLCJjbGFzcyBDYWxlbmRhciB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0dGhpcy5KMTk3MCA9IDI0NDA1ODcuNTtcdFx0XHQvLyBKdWxpYW4gZGF0ZSBhdCBVbml4IGVwb2NoOiAxOTcwLTAxLTAxXG5cdFx0dGhpcy5EYXlJblNlY29uZCA9IDg2NDAwO1xuXHR9XHRcblxuXHR0aW1lc3RhbXBUb0p1bGlhbkRheSAodGltZXN0YW1wKSB7XG5cdFx0bGV0IGp1bGlhbkRheSA9IHRoaXMuSjE5NzAgKyB0aW1lc3RhbXAgLyB0aGlzLkRheUluU2Vjb25kO1xuXG5cdFx0cmV0dXJuIGp1bGlhbkRheTtcblx0fVxuXG5cdGp1bGlhbkRheVRvVGltZXN0YW1wIChqdWxpYW5EYXkpIHtcblx0XHRsZXQgdGltZXN0YW1wID0gTWF0aC5yb3VuZCgoanVsaWFuRGF5IC0gdGhpcy5KMTk3MCkgKiB0aGlzLkRheUluU2Vjb25kKTtcblx0XHRcblx0XHRyZXR1cm4gdGltZXN0YW1wO1xuICAgIH1cblxuXHRqdWxpYW5EYXlXaXRob3V0VGltZSAoanVsaWFuRGF5KSB7XG5cdFx0XG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoanVsaWFuRGF5KSArIDAuNTtcblx0fVxuXG5cdGV4dHJhY3RKdWxpYW5EYXlUaW1lIChqdWxpYW5EYXkpIHtcbiAgICAgICAganVsaWFuRGF5ICs9IDAuNTtcblxuICAgICAgICAvLyBBc3Ryb25vbWljYWwgdG8gY2l2aWxcbiAgICAgICAgbGV0IHRpbWUgPSAoKGp1bGlhbkRheSAtIE1hdGguZmxvb3IoanVsaWFuRGF5KSkgKiB0aGlzLkRheUluU2Vjb25kKSArIDAuNTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICBcdFwiaG91clwiOiBNYXRoLmZsb29yKHRpbWUgLyAzNjAwKSxcbiAgICAgICAgXHRcIm1pbnV0ZVwiOiBNYXRoLmZsb29yKCh0aW1lIC8gNjApICUgNjApLFxuICAgICAgICBcdFwic2Vjb25kXCI6IE1hdGguZmxvb3IodGltZSAlIDYwKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFkZFRpbWVUb0p1bGlhbkRheSAoanVsaWFuRGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xuICAgIFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuanVsaWFuRGF5VG9UaW1lc3RhbXAoanVsaWFuRGF5KTtcbiAgICBcdHRpbWVzdGFtcCArPSAoaG91ciAqIDM2MDApICsgKG1pbnV0ZSAqIDYwKSArIHNlY29uZDtcblxuICAgIFx0cmV0dXJuIHRoaXMudGltZXN0YW1wVG9KdWxpYW5EYXkodGltZXN0YW1wKTtcbiAgICB9XG5cbiAgICBkYXRlVG9KdWxpYW5EYXkgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgZGF0ZVRvVGltZXN0YW1wICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xuICAgICAgICBsZXQganVsaWFuRGF5ID0gdGhpcy5kYXRlVG9KdWxpYW5EYXkgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5qdWxpYW5EYXlUb1RpbWVzdGFtcChqdWxpYW5EYXkpO1xuICAgIH1cblxuICAgIGp1bGlhbkRheVRvRGF0ZSAoanVsaWFuRGF5KSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgdGltZXN0YW1wVG9EYXRlICh0aW1lc3RhbXApIHtcbiAgICAgICAgbGV0IGp1bGlhbkRheSA9IHRoaXMudGltZXN0YW1wVG9KdWxpYW5EYXkodGltZXN0YW1wKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5qdWxpYW5EYXlUb0RhdGUoanVsaWFuRGF5KTtcbiAgICB9XG5cbiAgICBkYXlzSW5Nb250aCAoeWVhciwgbW9udGgpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgZGF5T2ZXZWVrICh0aW1lc3RhbXApIHtcbiAgICAgICAgbGV0IGp1bGlhbkRheSA9IHRoaXMudGltZXN0YW1wVG9KdWxpYW5EYXkodGltZXN0YW1wKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kKE1hdGguZmxvb3IoKGp1bGlhbkRheSArIDIuNSkpLCA3KTtcbiAgICB9XG5cbiAgICBkYXlPZlllYXIgKHRpbWVzdGFtcCkge1xuICAgICAgICBsZXQgY3VycmVudERhdGUgPSB0aGlzLnRpbWVzdGFtcFRvRGF0ZSh0aW1lc3RhbXApO1xuICAgICAgICBsZXQgZmlyc3RPZlllYXJqdWxpYW5EYXkgPSB0aGlzLmRhdGVUb0p1bGlhbkRheShjdXJyZW50RGF0ZS55ZWFyLCAxLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgbGV0IGN1cnJlbnRqdWxpYW5EYXkgPSB0aGlzLmRhdGVUb0p1bGlhbkRheShjdXJyZW50RGF0ZS55ZWFyLCBjdXJyZW50RGF0ZS5tb250aCwgY3VycmVudERhdGUuZGF5LCBjdXJyZW50RGF0ZS5ob3VyLCBjdXJyZW50RGF0ZS5taW51dGUsIGN1cnJlbnREYXRlLnNlY29uZCk7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoY3VycmVudGp1bGlhbkRheSAtIGZpcnN0T2ZZZWFyanVsaWFuRGF5ICsgMSk7XG4gICAgfVxuXG4gICAgd2Vla09mTW9udGggKHRpbWVzdGFtcCkge1xuICAgICAgICBsZXQgY3VycmVudERhdGUgPSB0aGlzLnRpbWVzdGFtcFRvRGF0ZSh0aW1lc3RhbXApO1xuICAgICAgICBsZXQgZmlyc3REYXlPZk1vbnRoVGltZXN0YW1wID0gdGhpcy5kYXRlVG9UaW1lc3RhbXAoY3VycmVudERhdGUueWVhciwgY3VycmVudERhdGUubW9udGgsIDEsIGN1cnJlbnREYXRlLmhvdXIsIGN1cnJlbnREYXRlLm1pbnV0ZSwgY3VycmVudERhdGUuc2Vjb25kKTtcbiAgICAgICAgbGV0IGRheU9mV2Vla0luQ3VycmVudERheU9mTW9udGggPSB0aGlzLmRheU9mV2Vlayh0aW1lc3RhbXApO1xuICAgICAgICBsZXQgZGF5T2ZXZWVrSW5GaXJzdERheU9mTW9udGggPSB0aGlzLmRheU9mV2VlayhmaXJzdERheU9mTW9udGhUaW1lc3RhbXApO1xuXG4gICAgICAgIGxldCB3ZWVrID0gMTtcblxuICAgICAgICBpZihjdXJyZW50RGF0ZS5kYXkgPD0gNyAtIGRheU9mV2Vla0luRmlyc3REYXlPZk1vbnRoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2VlaztcbiAgICAgICAgfVxuXG4gICAgICAgIHdlZWsgKz0gKChjdXJyZW50RGF0ZS5kYXkgLSAoKDcgLSBkYXlPZldlZWtJbkZpcnN0RGF5T2ZNb250aCkgKyAoZGF5T2ZXZWVrSW5DdXJyZW50RGF5T2ZNb250aCArIDEpKSkgLyA3KSArIDE7XG5cbiAgICAgICAgcmV0dXJuIHdlZWs7XG4gICAgfVxuXG4gICAgd2Vla09mWWVhciAodGltZXN0YW1wKSB7XG4gICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IHRoaXMudGltZXN0YW1wVG9EYXRlKHRpbWVzdGFtcCk7XG4gICAgICAgIGxldCBkYXlPZlllYXIgPSB0aGlzLmRheU9mWWVhcih0aW1lc3RhbXApO1xuICAgICAgICBsZXQgZmlyc3REYXlPZlllYXJUaW1lc3RhbXAgPSB0aGlzLmRhdGVUb1RpbWVzdGFtcChjdXJyZW50RGF0ZS55ZWFyLCAxLCAxLCBjdXJyZW50RGF0ZS5ob3VyLCBjdXJyZW50RGF0ZS5taW51dGUsIGN1cnJlbnREYXRlLnNlY29uZCk7XG4gICAgICAgIGxldCBkYXlPZldlZWtJbkN1cnJlbnREYXlPZlllYXIgPSB0aGlzLmRheU9mV2Vlayh0aW1lc3RhbXApO1xuICAgICAgICBsZXQgZGF5T2ZXZWVrSW5GaXJzdERheU9mWWVhciA9IHRoaXMuZGF5T2ZXZWVrKGZpcnN0RGF5T2ZZZWFyVGltZXN0YW1wKTtcblxuICAgICAgICBsZXQgd2VlayA9IDE7XG5cbiAgICAgICAgaWYoZGF5T2ZZZWFyIDw9IDcgLSBkYXlPZldlZWtJbkZpcnN0RGF5T2ZZZWFyKSB7XG4gICAgICAgICAgICByZXR1cm4gd2VlaztcbiAgICAgICAgfVxuXG4gICAgICAgIHdlZWsgKz0gKChkYXlPZlllYXIgLSAoKDcgLSBkYXlPZldlZWtJbkZpcnN0RGF5T2ZZZWFyKSArIChkYXlPZldlZWtJbkN1cnJlbnREYXlPZlllYXIgKyAxKSkpIC8gNykgKyAxO1xuXG4gICAgICAgIHJldHVybiB3ZWVrOyAgIFxuICAgIH1cblxuICAgIG1vZCAoYSwgYikge1xuICAgICAgICByZXR1cm4gYSAtIChiICogTWF0aC5mbG9vcihhIC8gYikpO1xuICAgIH1cblxuICAgIGlzTGVhcCAoeWVhcikge1xuICAgICAgICAvL1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhcjsiLCJpbXBvcnQgR3JlZ29yaWFuQ2FsZW5kYXIgZnJvbSBcIi4vR3JlZ29yaWFuQ2FsZW5kYXJcIjtcbmltcG9ydCBKYWxhbGlDYWxlbmRhciBmcm9tIFwiLi9KYWxhbGlDYWxlbmRhclwiO1xuaW1wb3J0IElzbGFtaWNDYWxlbmRhciBmcm9tIFwiLi9Jc2xhbWljQ2FsZW5kYXJcIjtcbmltcG9ydCBTaGlhQ2FsZW5kYXIgZnJvbSBcIi4vU2hpYUNhbGVuZGFyXCI7XG5pbXBvcnQgQmFzZU1ldGhvZHNNaXhpbiBmcm9tIFwiLi4vbWl4aW4vQmFzZU1ldGhvZHNNaXhpblwiO1xuaW1wb3J0IEFkZGl0aW9uQW5kU3Vic3RyYWN0aW9uTWl4aW4gZnJvbSBcIi4uL21peGluL0FkZGl0aW9uQW5kU3Vic3RyYWN0aW9uTWl4aW5cIjtcblxuY2xhc3MgQ2FsZW5kYXJNYW5hZ2VyIHtcblx0XG5cdGNvbnN0cnVjdG9yICh0aW1lc3RhbXAsIHRpbWV6b25lT2Zmc2V0KSB7XG5cdFx0dGhpcy5fZ3JlZ29yaWFuID0gbmV3IEdyZWdvcmlhbkNhbGVuZGFyKCk7XHRcblx0XHR0aGlzLl9qYWxhbGkgPSBuZXcgSmFsYWxpQ2FsZW5kYXIoKTtcdFxuXHRcdHRoaXMuX2lzbGFtaWMgPSBuZXcgSXNsYW1pY0NhbGVuZGFyKCk7XHRcblx0XHR0aGlzLl9zaGlhID0gbmV3IFNoaWFDYWxlbmRhcigpO1xuXHRcdHRoaXMuX2N1cnJlbnRDYWxlbmRhciA9IG51bGw7XG5cdFx0dGhpcy5fZm9ybWF0dGVyID0gUGFzb29uYXRlLmZvcm1hdHRlcjtcblxuXHRcdHRoaXMuX2Zvcm1hdHRlci5zZXRDYWxlbmRhcih0aGlzKTtcblxuXHRcdGxldCBkYXRlID0gbmV3IERhdGUoKTtcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgfHwgTWF0aC5mbG9vcihkYXRlLmdldFRpbWUoKSAvIDEwMDApOyAvLyBtaWxpc2Vjb25kIHRvIHNlY29uZHNcblx0XHR0aGlzLl90aW1lem9uZU9mZnNldCA9IHRpbWV6b25lT2Zmc2V0IHx8IC1kYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDsgLy8gbWludXRlICogNjAgPSBvZmZzZXQgaW4gc2Vjb25kc1xuXHR9XG5cblx0Z3JlZ29yaWFuICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fZ3JlZ29yaWFuLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1x0XHRcblx0XHR5ZWFyID0geWVhciB8fCBkYXRlLnllYXI7XG5cdFx0bW9udGggPSBtb250aCB8fCBkYXRlLm1vbnRoO1xuXHRcdGRheSA9IGRheSB8fCBkYXRlLmRheTtcblx0XHRob3VyID0gaG91ciB8fCBkYXRlLmhvdXI7XG5cdFx0bWludXRlID0gbWludXRlIHx8IGRhdGUubWludXRlO1xuXHRcdHNlY29uZCA9IHNlY29uZCB8fCBkYXRlLnNlY29uZDtcblxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2dyZWdvcmlhbi5kYXRlVG9UaW1lc3RhbXAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xuXHRcdHRoaXMuX2N1cnJlbnRDYWxlbmRhciA9IHRoaXMuX2dyZWdvcmlhbjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGphbGFsaSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2phbGFsaS50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcdFx0XG5cdFx0eWVhciA9IHllYXIgfHwgZGF0ZS55ZWFyO1xuXHRcdG1vbnRoID0gbW9udGggfHwgZGF0ZS5tb250aDtcblx0XHRkYXkgPSBkYXkgfHwgZGF0ZS5kYXk7XG5cdFx0aG91ciA9IGhvdXIgfHwgZGF0ZS5ob3VyO1xuXHRcdG1pbnV0ZSA9IG1pbnV0ZSB8fCBkYXRlLm1pbnV0ZTtcblx0XHRzZWNvbmQgPSBzZWNvbmQgfHwgZGF0ZS5zZWNvbmQ7XG5cblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aGlzLl9qYWxhbGkuZGF0ZVRvVGltZXN0YW1wKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcblx0XHR0aGlzLl9jdXJyZW50Q2FsZW5kYXIgPSB0aGlzLl9qYWxhbGk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpc2xhbWljICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5faXNsYW1pYy50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcdFx0XG5cdFx0eWVhciA9IHllYXIgfHwgZGF0ZS55ZWFyO1xuXHRcdG1vbnRoID0gbW9udGggfHwgZGF0ZS5tb250aDtcblx0XHRkYXkgPSBkYXkgfHwgZGF0ZS5kYXk7XG5cdFx0aG91ciA9IGhvdXIgfHwgZGF0ZS5ob3VyO1xuXHRcdG1pbnV0ZSA9IG1pbnV0ZSB8fCBkYXRlLm1pbnV0ZTtcblx0XHRzZWNvbmQgPSBzZWNvbmQgfHwgZGF0ZS5zZWNvbmQ7XG5cblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aGlzLl9pc2xhbWljLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XG5cdFx0dGhpcy5fY3VycmVudENhbGVuZGFyID0gdGhpcy5faXNsYW1pYztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNoaWEgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9zaGlhLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1x0XHRcblx0XHR5ZWFyID0geWVhciB8fCBkYXRlLnllYXI7XG5cdFx0bW9udGggPSBtb250aCB8fCBkYXRlLm1vbnRoO1xuXHRcdGRheSA9IGRheSB8fCBkYXRlLmRheTtcblx0XHRob3VyID0gaG91ciB8fCBkYXRlLmhvdXI7XG5cdFx0bWludXRlID0gbWludXRlIHx8IGRhdGUubWludXRlO1xuXHRcdHNlY29uZCA9IHNlY29uZCB8fCBkYXRlLnNlY29uZDtcblxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX3NoaWEuZGF0ZVRvVGltZXN0YW1wKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcblx0XHR0aGlzLl9jdXJyZW50Q2FsZW5kYXIgPSB0aGlzLl9zaGlhO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Zm9ybWF0IChwYXR0ZXJuLCBsb2NhbGUpIHtcblx0XHRyZXR1cm4gdGhpcy5fZm9ybWF0dGVyLmZvcm1hdChwYXR0ZXJuLCBsb2NhbGUpO1xuXHR9XHRcbn1cblxuT2JqZWN0LmFzc2lnbihDYWxlbmRhck1hbmFnZXIucHJvdG90eXBlLCBCYXNlTWV0aG9kc01peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FsZW5kYXJNYW5hZ2VyLnByb3RvdHlwZSwgQWRkaXRpb25BbmRTdWJzdHJhY3Rpb25NaXhpbik7XG5cbmV4cG9ydCBkZWZhdWx0IENhbGVuZGFyTWFuYWdlcjtcbiIsImltcG9ydCBDYWxlbmRhciBmcm9tICcuL0NhbGVuZGFyJztcblxuY2xhc3MgR3JlZ29yaWFuQ2FsZW5kYXIgZXh0ZW5kcyBDYWxlbmRhciB7XG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5HcmVnb3JpYW5FcG9jaCA9IDE3MjE0MjUuNTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdHcmVnb3JpYW5FcG9jaCcsIHtcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG5cdH1cblxuXHRkYXRlVG9KdWxpYW5EYXkgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XG5cdFx0bGV0IGp1bGlhbkRheSA9IHRoaXMuR3JlZ29yaWFuRXBvY2ggLSAxO1xuXG5cdFx0anVsaWFuRGF5ICs9IDM2NSAqICh5ZWFyIC0gMSk7XG5cdFx0anVsaWFuRGF5ICs9IE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQpO1xuXHRcdGp1bGlhbkRheSArPSBNYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyAxMDApICogLTE7XG5cdFx0anVsaWFuRGF5ICs9IE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQwMCk7XG5cdFx0anVsaWFuRGF5ICs9IE1hdGguZmxvb3IoKCgoMzY3ICogbW9udGgpIC0gMzYyKSAvIDEyKSArICgobW9udGggPD0gMikgPyAwIDogKHRoaXMuaXNMZWFwKHllYXIpID8gLTEgOiAtMikpICsgZGF5KTtcblxuXHRcdHJldHVybiB0aGlzLmFkZFRpbWVUb0p1bGlhbkRheShqdWxpYW5EYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcblx0fVxuXG4gICAganVsaWFuRGF5VG9EYXRlIChqdWxpYW5EYXkpIHtcbiAgICBcdGxldCB0aW1lID0gdGhpcy5leHRyYWN0SnVsaWFuRGF5VGltZShqdWxpYW5EYXkpO1xuICAgIFx0XG4gICAgXHRqdWxpYW5EYXkgPSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKGp1bGlhbkRheSk7XG5cbiAgICBcdGxldCB3amQgPSBNYXRoLmZsb29yKGp1bGlhbkRheSAtIDAuNSkgKyAwLjU7XG4gICAgICAgIGxldCBkZXBvY2ggPSB3amQgLSB0aGlzLkdyZWdvcmlhbkVwb2NoO1xuICAgICAgICBsZXQgcXVhZHJpY2VudCA9IE1hdGguZmxvb3IoZGVwb2NoIC8gMTQ2MDk3KTtcbiAgICAgICAgbGV0IGRxYyA9IHRoaXMubW9kKGRlcG9jaCwgMTQ2MDk3KTtcbiAgICAgICAgbGV0IGNlbnQgPSBNYXRoLmZsb29yKGRxYyAvIDM2NTI0KTtcbiAgICAgICAgbGV0IGRjZW50ID0gdGhpcy5tb2QoZHFjLCAzNjUyNCk7XG4gICAgICAgIGxldCBxdWFkID0gTWF0aC5mbG9vcihkY2VudCAvIDE0NjEpO1xuICAgICAgICBsZXQgZHF1YWQgPSB0aGlzLm1vZChkY2VudCwgMTQ2MSk7XG4gICAgICAgIGxldCB5aW5kZXggPSBNYXRoLmZsb29yKGRxdWFkIC8gMzY1KTtcbiAgICAgICAgbGV0IHllYXIgPSAocXVhZHJpY2VudCAqIDQwMCkgKyAoY2VudCAqIDEwMCkgKyAocXVhZCAqIDQpICsgeWluZGV4O1xuICAgICAgICBpZiAoISgoY2VudCA9PSA0KSB8fCAoeWluZGV4ID09IDQpKSkge1xuICAgICAgICAgICAgeWVhcisrO1xuICAgICAgICB9XG4gICAgICAgIGxldCB5ZWFyZGF5ID0gd2pkIC0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZSh0aGlzLmRhdGVUb0p1bGlhbkRheSh5ZWFyLCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpO1xuICAgICAgICBsZXQgbGVhcGFkaiA9ICh3amQgPCB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIDMsIDEsIHRpbWUuaG91ciwgdGltZS5taW51dGUsIHRpbWUuc2Vjb25kKSkgPyAwIDogKHRoaXMuaXNMZWFwKHllYXIpID8gMSA6IDIpKTtcbiAgICAgICAgbGV0IG1vbnRoID0gTWF0aC5mbG9vcigoKCh5ZWFyZGF5ICsgbGVhcGFkaikgKiAxMikgKyAzNzMpIC8gMzY3KTtcbiAgICAgICAgbGV0IGRheSA9ICh3amQgLSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIG1vbnRoLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSArIDE7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgXHRcInllYXJcIjogeWVhcixcbiAgICAgICAgXHRcIm1vbnRoXCI6IG1vbnRoLFxuICAgICAgICBcdFwiZGF5XCI6IGRheSxcbiAgICAgICAgXHRcImhvdXJcIjogdGltZS5ob3VyLFxuICAgICAgICBcdFwibWludXRlXCI6IHRpbWUubWludXRlLFxuICAgICAgICBcdFwic2Vjb25kXCI6IHRpbWUuc2Vjb25kLFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBkYXlzSW5Nb250aCAoeWVhciwgbW9udGgpIHtcbiAgICAgICAgbGV0IGdyZWdvcmlhbkRheXNJbk1vbnRoID0gWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuICAgICAgICBcbiAgICAgICAgaWYgKG1vbnRoIDwgMSB8fCBtb250aCA+IDEyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFeGNlcHRpb24oXCIkbW9udGggT3V0IE9mIFJhbmdlIEV4Y2VwdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHllYXIgJiYgdGhpcy5pc0xlYXAoeWVhcikgJiYgbW9udGggPT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIDI5O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZ3JlZ29yaWFuRGF5c0luTW9udGhbbW9udGggLSAxXTtcbiAgICB9XG5cbiAgICBpc0xlYXAgKHllYXIpIHtcbiAgICAgICAgcmV0dXJuICgoeWVhciAlIDQpID09IDApICYmICghKCgoeWVhciAlIDEwMCkgPT0gMCkgJiYgKCh5ZWFyICUgNDAwKSAhPSAwKSkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JlZ29yaWFuQ2FsZW5kYXI7IiwiaW1wb3J0IENhbGVuZGFyIGZyb20gXCIuL0NhbGVuZGFyXCI7XG5cbmNsYXNzIElzbGFtaWNDYWxlbmRhciBleHRlbmRzIENhbGVuZGFyIHtcblx0XG5cdGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG5cdFx0dGhpcy5Jc2xhbWljRXBvY2ggPSAxOTQ4NDM5LjU7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdJc2xhbWljRXBvY2gnLCB7XG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgICAgIH0pO1xuXHR9XG5cblx0ZGF0ZVRvSnVsaWFuRGF5ICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xuICAgICAgICBsZXQganVsaWFuRGF5ID0gZGF5O1xuXG4gICAgICAgIGp1bGlhbkRheSArPSBNYXRoLmNlaWwoKG1vbnRoIC0gMSkgKiAyOS41KTtcbiAgICAgICAganVsaWFuRGF5ICs9ICh5ZWFyIC0gMSkgKiAzNTQ7XG4gICAgICAgIGp1bGlhbkRheSArPSBNYXRoLmZsb29yKCgoMTEgKiB5ZWFyKSArIDMpIC8gMzApO1xuICAgICAgICBqdWxpYW5EYXkgKz0gdGhpcy5Jc2xhbWljRXBvY2ggLSAxO1xuXG5cdFx0cmV0dXJuIHRoaXMuYWRkVGltZVRvSnVsaWFuRGF5KGp1bGlhbkRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xuXHR9XG5cbiAgICBqdWxpYW5EYXlUb0RhdGUgKGp1bGlhbkRheSkge1xuICAgICAgICBsZXQgdGltZSA9IHRoaXMuZXh0cmFjdEp1bGlhbkRheVRpbWUoanVsaWFuRGF5KTtcbiAgICAgICAgXG4gICAgICAgIGp1bGlhbkRheSA9IHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUoanVsaWFuRGF5KTtcbiAgICAgICAganVsaWFuRGF5ID0gTWF0aC5mbG9vcihqdWxpYW5EYXkpICsgMC41O1xuICAgICAgICBcbiAgICAgICAgbGV0IHllYXIgPSBNYXRoLmZsb29yKCgoKGp1bGlhbkRheSAtIHRoaXMuSXNsYW1pY0Vwb2NoKSAqIDMwKSArIDEwNjQ2KSAvIDEwNjMxKTtcbiAgICAgICAgbGV0IG1vbnRoID0gTWF0aC5taW4oMTIsIE1hdGguY2VpbCgoanVsaWFuRGF5IC0gKDI5ICsgdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZSh0aGlzLmRhdGVUb0p1bGlhbkRheSh5ZWFyLCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSkgLyAyOS41KSArIDEpO1xuICAgICAgICBsZXQgZGF5ID0gKGp1bGlhbkRheSAtIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoeWVhciwgbW9udGgsIDEsIHRpbWUuaG91ciwgdGltZS5taW51dGUsIHRpbWUuc2Vjb25kKSkpICsgMTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICBcdFwieWVhclwiOiB5ZWFyLFxuICAgICAgICBcdFwibW9udGhcIjogbW9udGgsXG4gICAgICAgIFx0XCJkYXlcIjogZGF5LFxuICAgICAgICBcdFwiaG91clwiOiB0aW1lLmhvdXIsXG4gICAgICAgIFx0XCJtaW51dGVcIjogdGltZS5taW51dGUsXG4gICAgICAgIFx0XCJzZWNvbmRcIjogdGltZS5zZWNvbmQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYXlzSW5Nb250aCAoeWVhciwgbW9udGgpIHtcbiAgICAgICAgbGV0IGlzbGFtaWNEYXlzSW5Nb250aCA9IFszMCwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDI5XTsgLy8zMFxuXG4gICAgICAgIGlmIChtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXhjZXB0aW9uKFwiJG1vbnRoIE91dCBPZiBSYW5nZSBFeGNlcHRpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh5ZWFyICYmIHRoaXMuaXNMZWFwKHllYXIpICYmIG1vbnRoID09IDEyKSB7XG4gICAgICAgICAgICByZXR1cm4gMzA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBpc2xhbWljRGF5c0luTW9udGhbbW9udGggLSAxXTtcbiAgICB9XG5cbiAgICBpc0xlYXAgKHllYXIpIHtcbiAgICAgICAgbGV0IGlzTGVhcCA9ICgoKHllYXIgKiAxMSkgKyAxNCkgJSAzMCkgPCAxMTtcbiAgICAgICAgcmV0dXJuIGlzTGVhcDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElzbGFtaWNDYWxlbmRhcjsiLCJpbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4vQ2FsZW5kYXJcIjtcblxuY2xhc3MgSmFsYWxpQ2FsZW5kYXIgZXh0ZW5kcyBDYWxlbmRhciB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cblx0XHR0aGlzLkphbGFsaUVwb2NoID0gMTk0ODMyMC41O1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnSmFsYWxpRXBvY2gnLCB7XG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgICAgIH0pO1xuXHR9XG5cblx0ZGF0ZVRvSnVsaWFuRGF5ICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xuXHRcdGxldCBlcG9jaEJhc2UgPSB5ZWFyIC0gKHllYXIgPj0gMCA/IDQ3NCA6IDQ3Myk7XG4gICAgICAgIGxldCBlcG9jaFllYXIgPSA0NzQgKyB0aGlzLm1vZChlcG9jaEJhc2UsIDI4MjApO1xuICAgICAgICBsZXQganVsaWFuRGF5ID0gZGF5O1xuXG4gICAgICAgIGp1bGlhbkRheSArPSBtb250aCA8PSA3ID8gKG1vbnRoIC0gMSkgKiAzMSA6ICgobW9udGggLSAxKSAqIDMwKSArIDY7XG4gICAgICAgIGp1bGlhbkRheSArPSBNYXRoLmZsb29yKCgoZXBvY2hZZWFyICogNjgyKSAtIDExMCkgLyAyODE2KTtcbiAgICAgICAganVsaWFuRGF5ICs9IChlcG9jaFllYXIgLSAxKSAqIDM2NTtcbiAgICAgICAganVsaWFuRGF5ICs9IE1hdGguZmxvb3IoZXBvY2hCYXNlIC8gMjgyMCkgKiAxMDI5OTgzO1xuICAgICAgICBqdWxpYW5EYXkgKz0gdGhpcy5KYWxhbGlFcG9jaCAtIDE7XG5cblx0XHRyZXR1cm4gdGhpcy5hZGRUaW1lVG9KdWxpYW5EYXkoanVsaWFuRGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XG5cdH1cblxuICAgIGp1bGlhbkRheVRvRGF0ZSAoanVsaWFuRGF5KSB7XG4gICAgXHRsZXQgdGltZSA9IHRoaXMuZXh0cmFjdEp1bGlhbkRheVRpbWUoanVsaWFuRGF5KTtcbiAgICBcdFxuICAgIFx0anVsaWFuRGF5ID0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZShqdWxpYW5EYXkpO1xuXG4gICAgXHRqdWxpYW5EYXkgPSBNYXRoLmZsb29yKGp1bGlhbkRheSkgKyAwLjU7XG5cbiAgICAgICAgbGV0IGRlcG9jaCA9IGp1bGlhbkRheSAtIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoNDc1LCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpO1xuICAgICAgICBsZXQgY3ljbGUgPSBNYXRoLmZsb29yKGRlcG9jaCAvIDEwMjk5ODMpO1xuICAgICAgICBsZXQgY3llYXIgPSB0aGlzLm1vZChkZXBvY2gsIDEwMjk5ODMpOyAgICAgICAgXG4gICAgXHRsZXQgeWN5Y2xlLCBhdXgxLCBhdXgyO1xuXG4gICAgICAgIGlmIChjeWVhciA9PSAxMDI5OTgyKSB7XG4gICAgICAgICAgICB5Y3ljbGUgPSAyODIwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXV4MSA9IE1hdGguZmxvb3IoY3llYXIgLyAzNjYpO1xuICAgICAgICAgICAgYXV4MiA9IHRoaXMubW9kKGN5ZWFyLCAzNjYpO1xuICAgICAgICAgICAgeWN5Y2xlID0gTWF0aC5mbG9vcigoKDIxMzQgKiBhdXgxKSArICgyODE2ICogYXV4MikgKyAyODE1KSAvIDEwMjg1MjIpICsgYXV4MSArIDE7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCB5ZWFyID0geWN5Y2xlICsgKDI4MjAgKiBjeWNsZSkgKyA0NzQ7XG4gICAgICAgIFxuICAgICAgICBpZiAoeWVhciA8PSAwKSB7XG4gICAgICAgICAgICB5ZWFyLS07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCB5ZGF5ID0gKGp1bGlhbkRheSAtIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoeWVhciwgMSwgMSwgdGltZS5ob3VyLCB0aW1lLm1pbnV0ZSwgdGltZS5zZWNvbmQpKSkgKyAxO1xuICAgICAgICBsZXQgbW9udGggPSAoeWRheSA8PSAxODYpID8gTWF0aC5jZWlsKHlkYXkgLyAzMSkgOiBNYXRoLmNlaWwoKHlkYXkgLSA2KSAvIDMwKTtcbiAgICAgICAgbGV0IGRheSA9IChqdWxpYW5EYXkgLSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIG1vbnRoLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSArIDE7XG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgXHRcInllYXJcIjogeWVhcixcbiAgICAgICAgXHRcIm1vbnRoXCI6IG1vbnRoLFxuICAgICAgICBcdFwiZGF5XCI6IGRheSxcbiAgICAgICAgXHRcImhvdXJcIjogdGltZS5ob3VyLFxuICAgICAgICBcdFwibWludXRlXCI6IHRpbWUubWludXRlLFxuICAgICAgICBcdFwic2Vjb25kXCI6IHRpbWUuc2Vjb25kLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGF5c0luTW9udGggKHllYXIsIG1vbnRoKSB7XG4gICAgICAgIGxldCBncmVnb3JpYW5EYXlzSW5Nb250aCA9IFszMSwgMzEsIDMxLCAzMSwgMzEsIDMxLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDI5XTsgLy8zMFxuICAgICAgICBcbiAgICAgICAgaWYgKG1vbnRoIDwgMSB8fCBtb250aCA+IDEyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFeGNlcHRpb24oXCIkbW9udGggT3V0IE9mIFJhbmdlIEV4Y2VwdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHllYXIgJiYgdGhpcy5pc0xlYXAoeWVhcikgJiYgbW9udGggPT0gMTIpIHtcbiAgICAgICAgICAgIHJldHVybiAzMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGdyZWdvcmlhbkRheXNJbk1vbnRoW21vbnRoIC0gMV07XG4gICAgfVxuXG4gICAgaXNMZWFwICh5ZWFyKSB7XG4gICAgICAgIHJldHVybiAoKCgoKCh5ZWFyIC0gKCh5ZWFyID4gMCkgPyA0NzQgOiA0NzMpKSAlIDI4MjApICsgNDc0KSArIDM4KSAqIDY4MikgJSAyODE2KSA8IDY4MjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEphbGFsaUNhbGVuZGFyOyIsImltcG9ydCBDYWxlbmRhciBmcm9tIFwiLi9DYWxlbmRhclwiO1xuXG5jbGFzcyBTaGlhQ2FsZW5kYXIgZXh0ZW5kcyBDYWxlbmRhciB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuXHRcdHRoaXMuU2hpYUVwb2NoID0gMTk0ODQzOS41O1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnU2hpYUVwb2NoJywge1xuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgICAgICB9KTtcblx0fVxuXG5cdGRhdGVUb0p1bGlhbkRheSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcbiAgICAgICAgbGV0IGRheU9mWWVhciA9IGRheTtcbiAgICAgICAgbGV0IGp1bGlhbkRheSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBtb250aDsgaSsrKSB7XG4gICAgICAgICAgICBkYXlPZlllYXIgKz0gdGhpcy5kYXlzSW5Nb250aCh5ZWFyLCBpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGp1bGlhbkRheSArPSBkYXlPZlllYXI7XG4gICAgICAgIGp1bGlhbkRheSArPSAoeWVhciAtIDEpICogMzU0O1xuICAgICAgICBqdWxpYW5EYXkgKz0gTWF0aC5mbG9vcigoKDExICogeWVhcikgKyAzKSAvIDMwKTtcbiAgICAgICAganVsaWFuRGF5ICs9IHRoaXMuU2hpYUVwb2NoIC0gMTtcblxuXHRcdHJldHVybiB0aGlzLmFkZFRpbWVUb0p1bGlhbkRheShqdWxpYW5EYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcblx0fVxuXG4gICAganVsaWFuRGF5VG9EYXRlIChqdWxpYW5EYXkpIHtcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLmV4dHJhY3RKdWxpYW5EYXlUaW1lKGp1bGlhbkRheSk7XG4gICAgICAgIFxuICAgICAgICBqdWxpYW5EYXkgPSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKGp1bGlhbkRheSk7XG4gICAgICAgIGp1bGlhbkRheSA9IE1hdGguZmxvb3IoanVsaWFuRGF5KSArIDAuNTtcbiAgICAgICAgXG4gICAgICAgIGxldCB5ZWFyID0gTWF0aC5mbG9vcigoKChqdWxpYW5EYXkgLSB0aGlzLlNoaWFFcG9jaCkgKiAzMCkgKyAxMDY0NikgLyAxMDYzMSk7XG4gICAgICAgIGxldCBtb250aCA9IE1hdGgubWluKDEyLCBNYXRoLmNlaWwoKGp1bGlhbkRheSAtICgyOSArIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoeWVhciwgMSwgMSwgdGltZS5ob3VyLCB0aW1lLm1pbnV0ZSwgdGltZS5zZWNvbmQpKSkpIC8gMjkuNSkgKyAxKTtcbiAgICAgICAgbGV0IGRheU9mWWVhciA9IGp1bGlhbkRheSAtIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoeWVhciwgMSwgMSwgdGltZS5ob3VyLCB0aW1lLm1pbnV0ZSwgdGltZS5zZWNvbmQpKTtcbiAgICAgICAgbGV0IGRheXMgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMjsgaSsrKSB7XG4gICAgICAgICAgICBkYXlzICs9IHRoaXMuZGF5c0luTW9udGgoeWVhciwgaSk7XG4gICAgICAgICAgICBpZiAoZGF5T2ZZZWFyIDwgZGF5cykge1xuICAgICAgICAgICAgICAgIG1vbnRoID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgZGF5ID0gKGp1bGlhbkRheSAtICgoZGF5cyAtIHRoaXMuZGF5c0luTW9udGgoeWVhciwgbW9udGgpKSArICgoeWVhciAtIDEpICogMzU0KSArIE1hdGguZmxvb3IoKDMgKyAoMTEgKiB5ZWFyKSkgLyAzMCkgKyB0aGlzLlNoaWFFcG9jaCkgKyAxKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICBcdFwieWVhclwiOiB5ZWFyLFxuICAgICAgICBcdFwibW9udGhcIjogbW9udGgsXG4gICAgICAgIFx0XCJkYXlcIjogZGF5LFxuICAgICAgICBcdFwiaG91clwiOiB0aW1lLmhvdXIsXG4gICAgICAgIFx0XCJtaW51dGVcIjogdGltZS5taW51dGUsXG4gICAgICAgIFx0XCJzZWNvbmRcIjogdGltZS5zZWNvbmQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYXlzSW5Nb250aCAoeWVhciwgbW9udGgpIHtcbiBcdFx0bGV0IGlzbGFtaWNEYXlzSW5Nb250aCA9IFszMCwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDI5XTsgLy8zMFxuICAgICAgICBsZXQgc2hpYURheXNJbk1vbnRoSW5ZZWFycyA9IHtcbiAgICAgICAgICAgIDE0MzU6IFsyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDMwLCAzMCwgMjksIDMwXSxcbiAgICAgICAgICAgIDE0MzY6IFsyOSwgMzAsIDI5LCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDMwXSxcbiAgICAgICAgICAgIDE0Mzc6IFsyOSwgMzAsIDMwLCAyOSwgMzAsIDI5LCAyOSwgMzAsIDI5LCAyOSwgMzAsIDMwXSxcbiAgICAgICAgICAgIDE0Mzg6IFsyOSwgMzAsIDMwLCAzMCwgMjksIDMwLCAyOSwgMjksIDMwLCAyOSwgMjksIDMwXSxcbiAgICAgICAgICAgIDE0Mzk6IFsyOSwgMzAsIDMwLCAzMCwgMzAsIDI5LCAzMCwgMjksIDI5LCAzMCwgMjksIDI5XSxcbiAgICAgICAgICAgIDE0NDA6IFszMCwgMjksIDMwLCAzMCwgMzAsIDI5LCAyOSwgMzAsIDI5LCAzMCwgMjksIDI5XSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUV4Y2VwdGlvbihcIiRtb250aCBPdXQgT2YgUmFuZ2UgRXhjZXB0aW9uXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoaWFEYXlzSW5Nb250aEluWWVhcnNbeWVhcl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzbGFtaWNEYXlzSW5Nb250aFttb250aCAtIDFdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNoaWFEYXlzSW5Nb250aEluWWVhcnNbeWVhcl1bbW9udGggLSAxXTsgICBcdFxuICAgIH1cblxuICAgIGlzTGVhcCAoeWVhcikge1xuICAgICAgICBsZXQgaXNMZWFwID0gKCgoeWVhciAqIDExKSArIDE0KSAlIDMwKSA8IDExO1xuXHRcdHJldHVybiBpc0xlYXA7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpYUNhbGVuZGFyOyIsIlxuY2xhc3MgRGF0ZUZvcm1hdCB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0dGhpcy5fY2FsZW5kYXIgPSBudWxsO1xuXHR9XG5cblx0c2V0Q2FsZW5kYXIgKGNhbGVuZGFyKSB7XG5cdFx0dGhpcy5fY2FsZW5kYXIgPSBjYWxlbmRhciBpbnN0YW5jZW9mIENhbGVuZGFyTWFuYWdlciA/IGNhbGVuZGFyIDogbnVsbDtcblx0fVxuXG5cdGdldENhbGVuZGFyICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fY2FsZW5kYXI7XG5cdH1cblxuXHRmb3JtYXQgKCkge1xuXHRcdGlmKHRoaXMuZ2V0Q2FsZW5kYXIoKSA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIFwiXCI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGAke3RoaXMuX2NhbGVuZGFyLmdldFllYXIoKX0tJHt0aGlzLl9jYWxlbmRhci5nZXRNb250aCgpfS0ke3RoaXMuX2NhbGVuZGFyLmdldERheSgpfSAke3RoaXMuX2NhbGVuZGFyLmdldEhvdXIoKX06JHt0aGlzLl9jYWxlbmRhci5nZXRNaW51dGUoKX06JHt0aGlzLl9jYWxlbmRhci5nZXRTZWNvbmQoKX1gO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVGb3JtYXQ7IiwiaW1wb3J0IERhdGVGb3JtYXQgZnJvbSBcIi4vRGF0ZUZvcm1hdFwiO1xuXG5jbGFzcyBTaW1wbGVEYXRlRm9ybWF0IGV4dGVuZHMgRGF0ZUZvcm1hdCB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZvcm1hdCAocGF0dGVybiwgbG9jYWxlKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcGlsZShwYXR0ZXJuLCBsb2NhbGUpO1xuXHR9XG5cblx0Y29tcGlsZSAocGF0dGVybiwgbG9jYWxlKSB7XG5cdFx0cGF0dGVybiA9IFN0cmluZyhwYXR0ZXJuKS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0bGV0IHJlc3VsdCA9IHBhdHRlcm47XG5cblx0XHRjb25zdCBTaWducyA9IFsneScsICdtJywgJ2QnXTtcblx0XHRjb25zdCBGdWxsWWVhciA9ICd5eXl5Jztcblx0XHRjb25zdCBTaG9ydFllYXIgPSAneXknO1xuXHRcdGNvbnN0IE1vbnRoID0gJ21tJztcblx0XHRjb25zdCBTaW5nbGVNb250aCA9ICdtJztcblx0XHRjb25zdCBEYXkgPSAnZGQnO1xuXHRcdGNvbnN0IFNpbmdsZURheSA9ICdkJztcblxuXHRcdGxldCBjaGFycyA9IFtdO1xuXHRcdGxldCBwcmV2Q2hhciA9ICcnO1xuXHRcdGxldCBjdXJyQ2hhciA9ICcnO1xuXHRcdGxldCBpbmRleCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBhdHRlcm4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGN1cnJDaGFyID0gU2lnbnMuaW5jbHVkZXMocGF0dGVybltpXSkgPyBwYXR0ZXJuW2ldIDogJyc7XG5cblx0XHRcdGlmKGN1cnJDaGFyID09PSAnJykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoY3VyckNoYXIgPT09IHByZXZDaGFyKSB7XG5cdFx0XHRcdGNoYXJzW2luZGV4XS50ZXh0ICs9IGN1cnJDaGFyO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2hhcnNbKytpbmRleF0gPSB7IHRleHQ6IGN1cnJDaGFyLCBwb3NpdGlvbjogaX07XG5cdFx0XHR9XG5cdFx0XHRwcmV2Q2hhciA9IGN1cnJDaGFyO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgaW4gY2hhcnMpIHtcblx0XHRcdHN3aXRjaCAoY2hhcnNbaV0udGV4dCkge1xuXHRcdFx0XHRjYXNlIEZ1bGxZZWFyOlxuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKEZ1bGxZZWFyLCB0aGlzLmdldENhbGVuZGFyKCkuZ2V0WWVhcigpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgU2hvcnRZZWFyOlxuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKFNob3J0WWVhciwgU3RyaW5nKHRoaXMuZ2V0Q2FsZW5kYXIoKS5nZXRZZWFyKCkpLnN1YnN0cigtMiwgMikpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBTaW5nbGVNb250aDpcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShTaW5nbGVNb250aCwgdGhpcy5nZXRDYWxlbmRhcigpLmdldE1vbnRoKCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBNb250aDpcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShNb250aCwgdGhpcy5nZXRDYWxlbmRhcigpLmdldE1vbnRoKCkgPiA5ID8gdGhpcy5nZXRDYWxlbmRhcigpLmdldE1vbnRoKCkgOiAnMCcgKyB0aGlzLmdldENhbGVuZGFyKCkuZ2V0TW9udGgoKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFNpbmdsZURheTpcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShTaW5nbGVEYXksIHRoaXMuZ2V0Q2FsZW5kYXIoKS5nZXREYXkoKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIERheTpcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShEYXksIHRoaXMuZ2V0Q2FsZW5kYXIoKS5nZXREYXkoKSA+IDkgPyB0aGlzLmdldENhbGVuZGFyKCkuZ2V0RGF5KCkgOiAnMCcgKyB0aGlzLmdldENhbGVuZGFyKCkuZ2V0RGF5KCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVEYXRlRm9ybWF0OyIsImNsYXNzIENvbnN0YW50cyB7XG5cdCBcblx0Y29uc3RydWN0b3IgKCkge1xuXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uc3RhbnRzOyIsIlxuY2xhc3MgTG9jYWxpemF0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5fbGFuZ3MgPSB7fTtcbiAgICAgICAgdGhpcy5fbG9jYWxlID0gJ2ZhJztcbiAgICB9XG5cbiAgICBzZXRMYW5nIChuYW1lLCB0cmFucykge1xuICAgICAgICB0aGlzLl9sYW5nc1tuYW1lXSA9IHRyYW5zO1xuICAgIH1cblxuICAgIHNldExvY2FsZShsb2NhbGUpIHtcbiAgICAgICAgdGhpcy5fbG9jYWxlID0gbG9jYWxlIHx8IHRoaXMuX2xvY2FsZTtcbiAgICB9XG5cbiAgICBnZXRMb2NhbGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xuICAgIH1cblxuICAgIGlzTG9jYWxlIChsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZSA9PT0gbG9jYWxlO1xuICAgIH1cblxuICAgIGhhc1RyYW5zS2V5IChrZXksIGxvY2FsZSkge1xuICAgICAgICBsZXQgc3ViS2V5cyA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICBpZiAodGhpcy5fbGFuZ3NbbG9jYWxlXSA9PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuX2xhbmdzW2xvY2FsZV07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHN1YktleXNbaV0gaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0W3N1YktleXNbaV1dO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGdldFRyYW5zIChrZXksIGxvY2FsZSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5oYXNUcmFuc0tleShrZXksIGxvY2FsZSk7XG4gICAgICAgIHJldHVybiByZXN1bHQgPyByZXN1bHQgOiBrZXk7XG4gICAgfVxuXG4gICAgdHJhbnMgKGtleSwgbG9jYWxlKSB7XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCB0aGlzLl9sb2NhbGU7XG4gICAgICAgIGtleSA9IGtleSB8fCAnJztcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VHJhbnMoa2V5LCBsb2NhbGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxpemF0aW9uOyIsImltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgQ2FsZW5kYXJNYW5hZ2VyIGZyb20gXCIuL2NhbGVuZGFyL0NhbGVuZGFyTWFuYWdlclwiO1xuaW1wb3J0IExvY2FsaXphdGlvbiBmcm9tIFwiLi9Mb2NhbGl6YXRpb25cIjtcbmltcG9ydCBTaW1wbGVEYXRlRm9ybWF0IGZyb20gXCIuL2Zvcm1hdHRlci9TaW1wbGVEYXRlRm9ybWF0XCI7XG5cbmNsYXNzIFBhc29vbmF0ZSBleHRlbmRzIENvbnN0YW50cyB7XG5cblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdGF0aWMgbWFrZSAodGltZXN0YW1wLCB0aW1lem9uZU9mZnNldCkge1xuXHRcdHJldHVybiBuZXcgQ2FsZW5kYXJNYW5hZ2VyKHRpbWVzdGFtcCwgdGltZXpvbmVPZmZzZXQpO1xuXHR9XG5cblx0c3RhdGljIHRyYW5zIChrZXksIGxvY2FsZSkge1xuXHRcdHJldHVybiBQYXNvb25hdGUubG9jYWxpemF0aW9uLnRyYW5zKGtleSwgbG9jYWxlKTtcblx0fVxuXG5cdHN0YXRpYyBzZXRMb2NhbGUgKGxvY2FsZSkge1xuXHRcdFBhc29vbmF0ZS5sb2NhbGl6YXRpb24uc2V0TG9jYWxlKGxvY2FsZSk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0TG9jYWwgKCkge1xuXHRcdHJldHVybiBQYXNvb25hdGUubG9jYWxpemF0aW9uLmdldExvY2FsKCk7XG5cdH1cblxuXHRzdGF0aWMgaXNMb2NhbCAobG9jYWxlKSB7XG5cdFx0cmV0dXJuIFBhc29vbmF0ZS5sb2NhbGl6YXRpb24uaXNMb2NhbChsb2NhbGUpO1xuXHR9XG5cblx0c3RhdGljIHNldEZvcm1hdHRlciAoZm9ybWF0dGVyKSB7XG5cdFx0UGFzb29uYXRlLmZvcm1hdHRlciA9IGZvcm1hdHRlciBpbnN0YW5jZW9mIERhdGVGb3JtYXQgPyBmb3JtYXR0ZXIgOiBuZXcgU2ltcGxlRGF0ZUZvcm1hdCgpO1xuXHR9XG59XG5cblBhc29vbmF0ZS5sb2NhbGl6YXRpb24gPSBuZXcgTG9jYWxpemF0aW9uKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUGFzb29uYXRlLCAnbG9jYWxpemF0aW9uJywge1xuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlXG59KTtcblxuUGFzb29uYXRlLmZvcm1hdHRlciA9IG5ldyBTaW1wbGVEYXRlRm9ybWF0KCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUGFzb29uYXRlLCAnZm9ybWF0dGVyJywge1xuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2Vcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQYXNvb25hdGU7IiwiXG5sZXQgZmEgPSB7XG5cdGdyZWdvcmlhbjoge1xuXHRcdGRheV9uYW1lOiB7XG5cdFx0XHRzdW5kYXk6IFwiU3VuZGF5XCJcblx0XHR9XG5cdH0sXG5cdGphbGFsaToge30sXG5cdGlzbGFtaWM6IHt9LFxuXHRzaGlhOiB7fVxufTtcblxuUGFzb29uYXRlLmxvY2FsaXphdGlvbi5zZXRMYW5nKCdmYScsIGZhKTsiXX0=

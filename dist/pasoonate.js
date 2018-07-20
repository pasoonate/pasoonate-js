
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
				chars[index] += currChar;
			} else {
				chars[++index] = currChar;
			}
			prevChar = currChar;
		}
console.log(chars);
		for (let i in chars) {
			switch (chars[i]) {
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

class Constants {
	 
	constructor () {

	}
}

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

class Pasoonate extends Constants {

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9taXhpbi9BZGRpdGlvbkFuZFN1YnN0cmFjdGlvbk1peGluLmpzIiwic3JjL21peGluL0Jhc2VNZXRob2RzTWl4aW4uanMiLCJzcmMvY2FsZW5kYXIvQ2FsZW5kYXIuanMiLCJzcmMvY2FsZW5kYXIvQ2FsZW5kYXJNYW5hZ2VyLmpzIiwic3JjL2NhbGVuZGFyL0dyZWdvcmlhbkNhbGVuZGFyLmpzIiwic3JjL2NhbGVuZGFyL0lzbGFtaWNDYWxlbmRhci5qcyIsInNyYy9jYWxlbmRhci9KYWxhbGlDYWxlbmRhci5qcyIsInNyYy9jYWxlbmRhci9TaGlhQ2FsZW5kYXIuanMiLCJzcmMvZm9ybWF0dGVyL0RhdGVGb3JtYXQuanMiLCJzcmMvZm9ybWF0dGVyL1NpbXBsZURhdGVGb3JtYXQuanMiLCJzcmMvQ29uc3RhbnRzLmpzIiwic3JjL0xvY2FsaXphdGlvbi5qcyIsInNyYy9QYXNvb25hdGUuanMiLCJzcmMvbGFuZy9mYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDck5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InBhc29vbmF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5sZXQgQWRkaXRpb25BbmRTdWJzdHJhY3Rpb25NaXhpbiA9IHtcclxuXHRhZGRZZWFyKGNvdW50KSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyICsgY291bnQsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdGFkZE1vbnRoKGNvdW50KSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0bGV0IHRvdGFsTW9udGggPSBkYXRlLm1vbnRoICsgY291bnQ7XHJcblx0XHRsZXQgeWVhciA9IGRhdGUueWVhciArIE1hdGguZmxvb3IodG90YWxNb250aCAvIDEyKTtcclxuXHRcdGxldCBtb250aCA9IHRvdGFsTW9udGggJSAxMjtcclxuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKHllYXIsIG1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRhZGREYXkoY291bnQpIHtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCArPSAoY291bnQgKiA4NjQwMCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRhZGRIb3VyKGNvdW50KSB7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgKz0gKGNvdW50ICogMzYwMCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRhZGRNaW51dGUoY291bnQpIHtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCArPSAoY291bnQgKiA2MCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRhZGRTZWNvbmQoY291bnQpIHtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCArPSBjb3VudDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdHN1YlllYXIoY291bnQpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIgLSBjb3VudCwgZGF0ZS5tb250aCwgZGF0ZS5kYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0c3ViTW9udGgoY291bnQpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRsZXQgdG90YWxNb250aCA9IGRhdGUubW9udGggLSBjb3VudDtcclxuXHRcdGxldCB5ZWFyID0gZGF0ZS55ZWFyO1xyXG5cdFx0bGV0IG1vbnRoID0gdG90YWxNb250aDtcclxuXHJcblx0XHRpZih0b3RhbE1vbnRoIDw9IDApIHtcclxuXHRcdFx0dG90YWxNb250aCA9IC10b3RhbE1vbnRoO1xyXG5cdFx0XHR5ZWFyIC09IE1hdGguZmxvb3IodG90YWxNb250aCAvIDEyKSArIDE7XHJcblx0XHRcdG1vbnRoID0gMTIgLSAodG90YWxNb250aCAlIDEyKTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBtb250aCwgZGF0ZS5kYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0c3ViRGF5KGNvdW50KSB7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgLT0gKGNvdW50ICogODY0MDApO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0c3ViSG91cihjb3VudCkge1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wIC09IChjb3VudCAqIDM2MDApO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0c3ViTWludXRlKGNvdW50KSB7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgLT0gKGNvdW50ICogNjApO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0c3ViU2Vjb25kKGNvdW50KSB7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgLT0gY291bnQ7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcbn07IiwibGV0IEJhc2VNZXRob2RzTWl4aW4gPSB7XHJcblx0c2V0VGltZXN0YW1wICh0aW1lc3RhbXApIHtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcDtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRnZXRUaW1lc3RhbXAgKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RpbWVzdGFtcDtcclxuXHR9LFxyXG5cclxuXHRzZXRUaW1lem9uZU9mZnNldCAodGltZXpvbmVPZmZzZXQpIHtcclxuXHRcdHRoaXMuX3RpbWV6b25lT2Zmc2V0ID0gdGltZXpvbmVPZmZzZXQ7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0Z2V0VGltZXpvbmVPZmZzZXQgKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xyXG5cdH0sXHJcblxyXG5cdHNldFllYXIgKHllYXIpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRnZXRZZWFyICgpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRyZXR1cm4gZGF0ZS55ZWFyO1xyXG5cdH0sXHRcclxuXHJcblx0c2V0TW9udGggKG1vbnRoKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBtb250aCwgZGF0ZS5kYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0Z2V0TW9udGggKCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdHJldHVybiBkYXRlLm1vbnRoO1xyXG5cdH0sXHJcblxyXG5cdHNldERheSAoZGF5KSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0Z2V0RGF5ICgpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRyZXR1cm4gZGF0ZS5kYXk7XHRcclxuXHR9LFxyXG5cclxuXHRzZXRIb3VyIChob3VyKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0Z2V0SG91ciAoKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0cmV0dXJuIGRhdGUuaG91cjtcclxuXHR9LFxyXG5cclxuXHRzZXRNaW51dGUgKG1pbnV0ZSkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXksIGRhdGUuaG91ciwgbWludXRlLCBkYXRlLnNlY29uZCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdGdldE1pbnV0ZSAoKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0cmV0dXJuIGRhdGUubWludXRlO1xyXG5cdH0sXHJcblxyXG5cdHNldFNlY29uZCAoc2Vjb25kKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgc2Vjb25kKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0Z2V0U2Vjb25kICgpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRyZXR1cm4gZGF0ZS5zZWNvbmQ7XHJcblx0fSxcclxuXHJcblx0c2V0VVRDWWVhciAoeWVhcikge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKHllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cdFxyXG5cdGdldFVUQ1llYXIgKCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHRyZXR1cm4gZGF0ZS55ZWFyO1xyXG5cdH0sXHJcblxyXG5cdHNldFVUQ01vbnRoIChtb250aCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciwgbW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cdFxyXG5cdGdldFVUQ01vbnRoICgpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0cmV0dXJuIGRhdGUubW9udGg7XHJcblx0fSxcclxuXHJcblx0c2V0VVRDRGF5IChkYXkpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRcclxuXHRnZXRVVENEYXkgKCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHRyZXR1cm4gZGF0ZS5kYXk7XHRcclxuXHR9LFxyXG5cclxuXHRzZXRVVENIb3VyIChob3VyKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblx0XHJcblx0Z2V0VVRDSG91ciAoKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcclxuXHRcdHJldHVybiBkYXRlLmhvdXI7XHJcblx0fSxcclxuXHJcblx0c2V0VVRDTWludXRlIChtaW51dGUpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIG1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRcclxuXHRnZXRVVENNaW51dGUgKCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHRyZXR1cm4gZGF0ZS5taW51dGU7XHJcblx0fSxcclxuXHJcblx0c2V0VVRDU2Vjb25kIChzZWNvbmQpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBzZWNvbmQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0Z2V0VVRDU2Vjb25kICgpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0cmV0dXJuIGRhdGUuc2Vjb25kO1xyXG5cdH0sXHJcblxyXG5cdHNldERhdGUgKHllYXIsIG1vbnRoLCBkYXkpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBtb250aCwgZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblx0XHJcblx0c2V0VGltZSAoaG91ciwgbWludXRlLCBzZWNvbmQpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblx0XHJcblx0c2V0RGF0ZVRpbWUgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRzZXRVVENEYXRlICh5ZWFyLCBtb250aCwgZGF5KSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoeWVhciwgbW9udGgsIGRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRcclxuXHRzZXRVVENUaW1lIChob3VyLCBtaW51dGUsIHNlY29uZCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblx0XHJcblx0c2V0VVRDRGF0ZVRpbWUgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0ZGF5T2ZXZWVrICgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF5T2ZXZWVrKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuICAgIH0sXHJcblxyXG4gICAgZGF5T2ZZZWFyICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudENhbGVuZGFyLmRheU9mWWVhcih0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHdlZWtPZk1vbnRoICgpIHtcclxuICAgIFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRDYWxlbmRhci53ZWVrT2ZNb250aCh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHdlZWtPZlllYXIgKCkge1xyXG4gICAgXHRyZXR1cm4gdGhpcy5fY3VycmVudENhbGVuZGFyLndlZWtPZlllYXIodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG4gICAgfSxcclxufTsiLCJjbGFzcyBDYWxlbmRhciB7XHJcblx0XHJcblx0Y29uc3RydWN0b3IgKCkge1xyXG5cdFx0dGhpcy5KMTk3MCA9IDI0NDA1ODcuNTtcdFx0XHQvLyBKdWxpYW4gZGF0ZSBhdCBVbml4IGVwb2NoOiAxOTcwLTAxLTAxXHJcblx0XHR0aGlzLkRheUluU2Vjb25kID0gODY0MDA7XHJcblx0fVx0XHJcblxyXG5cdHRpbWVzdGFtcFRvSnVsaWFuRGF5ICh0aW1lc3RhbXApIHtcclxuXHRcdGxldCBqdWxpYW5EYXkgPSB0aGlzLkoxOTcwICsgdGltZXN0YW1wIC8gdGhpcy5EYXlJblNlY29uZDtcclxuXHJcblx0XHRyZXR1cm4ganVsaWFuRGF5O1xyXG5cdH1cclxuXHJcblx0anVsaWFuRGF5VG9UaW1lc3RhbXAgKGp1bGlhbkRheSkge1xyXG5cdFx0bGV0IHRpbWVzdGFtcCA9IE1hdGgucm91bmQoKGp1bGlhbkRheSAtIHRoaXMuSjE5NzApICogdGhpcy5EYXlJblNlY29uZCk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aW1lc3RhbXA7XHJcbiAgICB9XHJcblxyXG5cdGp1bGlhbkRheVdpdGhvdXRUaW1lIChqdWxpYW5EYXkpIHtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoanVsaWFuRGF5KSArIDAuNTtcclxuXHR9XHJcblxyXG5cdGV4dHJhY3RKdWxpYW5EYXlUaW1lIChqdWxpYW5EYXkpIHtcclxuICAgICAgICBqdWxpYW5EYXkgKz0gMC41O1xyXG5cclxuICAgICAgICAvLyBBc3Ryb25vbWljYWwgdG8gY2l2aWxcclxuICAgICAgICBsZXQgdGltZSA9ICgoanVsaWFuRGF5IC0gTWF0aC5mbG9vcihqdWxpYW5EYXkpKSAqIHRoaXMuRGF5SW5TZWNvbmQpICsgMC41O1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgIFx0XCJob3VyXCI6IE1hdGguZmxvb3IodGltZSAvIDM2MDApLFxyXG4gICAgICAgIFx0XCJtaW51dGVcIjogTWF0aC5mbG9vcigodGltZSAvIDYwKSAlIDYwKSxcclxuICAgICAgICBcdFwic2Vjb25kXCI6IE1hdGguZmxvb3IodGltZSAlIDYwKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGltZVRvSnVsaWFuRGF5IChqdWxpYW5EYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XHJcbiAgICBcdGxldCB0aW1lc3RhbXAgPSB0aGlzLmp1bGlhbkRheVRvVGltZXN0YW1wKGp1bGlhbkRheSk7XHJcbiAgICBcdHRpbWVzdGFtcCArPSAoaG91ciAqIDM2MDApICsgKG1pbnV0ZSAqIDYwKSArIHNlY29uZDtcclxuXHJcbiAgICBcdHJldHVybiB0aGlzLnRpbWVzdGFtcFRvSnVsaWFuRGF5KHRpbWVzdGFtcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0ZVRvSnVsaWFuRGF5ICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcblxyXG4gICAgZGF0ZVRvVGltZXN0YW1wICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xyXG4gICAgICAgIGxldCBqdWxpYW5EYXkgPSB0aGlzLmRhdGVUb0p1bGlhbkRheSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5qdWxpYW5EYXlUb1RpbWVzdGFtcChqdWxpYW5EYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGp1bGlhbkRheVRvRGF0ZSAoanVsaWFuRGF5KSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICB0aW1lc3RhbXBUb0RhdGUgKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIGxldCBqdWxpYW5EYXkgPSB0aGlzLnRpbWVzdGFtcFRvSnVsaWFuRGF5KHRpbWVzdGFtcCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmp1bGlhbkRheVRvRGF0ZShqdWxpYW5EYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRheXNJbk1vbnRoICh5ZWFyLCBtb250aCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGRheU9mV2VlayAodGltZXN0YW1wKSB7XHJcbiAgICAgICAgbGV0IGp1bGlhbkRheSA9IHRoaXMudGltZXN0YW1wVG9KdWxpYW5EYXkodGltZXN0YW1wKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2QoTWF0aC5mbG9vcigoanVsaWFuRGF5ICsgMi41KSksIDcpO1xyXG4gICAgfVxyXG5cclxuICAgIGRheU9mWWVhciAodGltZXN0YW1wKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gdGhpcy50aW1lc3RhbXBUb0RhdGUodGltZXN0YW1wKTtcclxuICAgICAgICBsZXQgZmlyc3RPZlllYXJqdWxpYW5EYXkgPSB0aGlzLmRhdGVUb0p1bGlhbkRheShjdXJyZW50RGF0ZS55ZWFyLCAxLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICBsZXQgY3VycmVudGp1bGlhbkRheSA9IHRoaXMuZGF0ZVRvSnVsaWFuRGF5KGN1cnJlbnREYXRlLnllYXIsIGN1cnJlbnREYXRlLm1vbnRoLCBjdXJyZW50RGF0ZS5kYXksIGN1cnJlbnREYXRlLmhvdXIsIGN1cnJlbnREYXRlLm1pbnV0ZSwgY3VycmVudERhdGUuc2Vjb25kKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoY3VycmVudGp1bGlhbkRheSAtIGZpcnN0T2ZZZWFyanVsaWFuRGF5ICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2Vla09mTW9udGggKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IHRoaXMudGltZXN0YW1wVG9EYXRlKHRpbWVzdGFtcCk7XHJcbiAgICAgICAgbGV0IGZpcnN0RGF5T2ZNb250aFRpbWVzdGFtcCA9IHRoaXMuZGF0ZVRvVGltZXN0YW1wKGN1cnJlbnREYXRlLnllYXIsIGN1cnJlbnREYXRlLm1vbnRoLCAxLCBjdXJyZW50RGF0ZS5ob3VyLCBjdXJyZW50RGF0ZS5taW51dGUsIGN1cnJlbnREYXRlLnNlY29uZCk7XHJcbiAgICAgICAgbGV0IGRheU9mV2Vla0luQ3VycmVudERheU9mTW9udGggPSB0aGlzLmRheU9mV2Vlayh0aW1lc3RhbXApO1xyXG4gICAgICAgIGxldCBkYXlPZldlZWtJbkZpcnN0RGF5T2ZNb250aCA9IHRoaXMuZGF5T2ZXZWVrKGZpcnN0RGF5T2ZNb250aFRpbWVzdGFtcCk7XHJcblxyXG4gICAgICAgIGxldCB3ZWVrID0gMTtcclxuXHJcbiAgICAgICAgaWYoY3VycmVudERhdGUuZGF5IDw9IDcgLSBkYXlPZldlZWtJbkZpcnN0RGF5T2ZNb250aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2VlaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdlZWsgKz0gKChjdXJyZW50RGF0ZS5kYXkgLSAoKDcgLSBkYXlPZldlZWtJbkZpcnN0RGF5T2ZNb250aCkgKyAoZGF5T2ZXZWVrSW5DdXJyZW50RGF5T2ZNb250aCArIDEpKSkgLyA3KSArIDE7XHJcblxyXG4gICAgICAgIHJldHVybiB3ZWVrO1xyXG4gICAgfVxyXG5cclxuICAgIHdlZWtPZlllYXIgKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IHRoaXMudGltZXN0YW1wVG9EYXRlKHRpbWVzdGFtcCk7XHJcbiAgICAgICAgbGV0IGRheU9mWWVhciA9IHRoaXMuZGF5T2ZZZWFyKHRpbWVzdGFtcCk7XHJcbiAgICAgICAgbGV0IGZpcnN0RGF5T2ZZZWFyVGltZXN0YW1wID0gdGhpcy5kYXRlVG9UaW1lc3RhbXAoY3VycmVudERhdGUueWVhciwgMSwgMSwgY3VycmVudERhdGUuaG91ciwgY3VycmVudERhdGUubWludXRlLCBjdXJyZW50RGF0ZS5zZWNvbmQpO1xyXG4gICAgICAgIGxldCBkYXlPZldlZWtJbkN1cnJlbnREYXlPZlllYXIgPSB0aGlzLmRheU9mV2Vlayh0aW1lc3RhbXApO1xyXG4gICAgICAgIGxldCBkYXlPZldlZWtJbkZpcnN0RGF5T2ZZZWFyID0gdGhpcy5kYXlPZldlZWsoZmlyc3REYXlPZlllYXJUaW1lc3RhbXApO1xyXG5cclxuICAgICAgICBsZXQgd2VlayA9IDE7XHJcblxyXG4gICAgICAgIGlmKGRheU9mWWVhciA8PSA3IC0gZGF5T2ZXZWVrSW5GaXJzdERheU9mWWVhcikge1xyXG4gICAgICAgICAgICByZXR1cm4gd2VlaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdlZWsgKz0gKChkYXlPZlllYXIgLSAoKDcgLSBkYXlPZldlZWtJbkZpcnN0RGF5T2ZZZWFyKSArIChkYXlPZldlZWtJbkN1cnJlbnREYXlPZlllYXIgKyAxKSkpIC8gNykgKyAxO1xyXG5cclxuICAgICAgICByZXR1cm4gd2VlazsgICBcclxuICAgIH1cclxuXHJcbiAgICBtb2QgKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYSAtIChiICogTWF0aC5mbG9vcihhIC8gYikpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTGVhcCAoeWVhcikge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcblxyXG59IiwiXHJcbmNsYXNzIENhbGVuZGFyTWFuYWdlciB7XHJcblx0XHJcblx0Y29uc3RydWN0b3IgKHRpbWVzdGFtcCwgdGltZXpvbmVPZmZzZXQpIHtcclxuXHRcdHRoaXMuX2dyZWdvcmlhbiA9IG5ldyBHcmVnb3JpYW5DYWxlbmRhcigpO1x0XHJcblx0XHR0aGlzLl9qYWxhbGkgPSBuZXcgSmFsYWxpQ2FsZW5kYXIoKTtcdFxyXG5cdFx0dGhpcy5faXNsYW1pYyA9IG5ldyBJc2xhbWljQ2FsZW5kYXIoKTtcdFxyXG5cdFx0dGhpcy5fc2hpYSA9IG5ldyBTaGlhQ2FsZW5kYXIoKTtcclxuXHRcdHRoaXMuX2N1cnJlbnRDYWxlbmRhciA9IG51bGw7XHJcblx0XHR0aGlzLl9mb3JtYXR0ZXIgPSBQYXNvb25hdGUuZm9ybWF0dGVyO1xyXG5cclxuXHRcdHRoaXMuX2Zvcm1hdHRlci5zZXRDYWxlbmRhcih0aGlzKTtcclxuXHJcblx0XHRsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgfHwgTWF0aC5mbG9vcihkYXRlLmdldFRpbWUoKSAvIDEwMDApOyAvLyBtaWxpc2Vjb25kIHRvIHNlY29uZHNcclxuXHRcdHRoaXMuX3RpbWV6b25lT2Zmc2V0ID0gdGltZXpvbmVPZmZzZXQgfHwgLWRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwOyAvLyBtaW51dGUgKiA2MCA9IG9mZnNldCBpbiBzZWNvbmRzXHJcblx0fVxyXG5cclxuXHRncmVnb3JpYW4gKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2dyZWdvcmlhbi50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcdFx0XHJcblx0XHR5ZWFyID0geWVhciB8fCBkYXRlLnllYXI7XHJcblx0XHRtb250aCA9IG1vbnRoIHx8IGRhdGUubW9udGg7XHJcblx0XHRkYXkgPSBkYXkgfHwgZGF0ZS5kYXk7XHJcblx0XHRob3VyID0gaG91ciB8fCBkYXRlLmhvdXI7XHJcblx0XHRtaW51dGUgPSBtaW51dGUgfHwgZGF0ZS5taW51dGU7XHJcblx0XHRzZWNvbmQgPSBzZWNvbmQgfHwgZGF0ZS5zZWNvbmQ7XHJcblxyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fZ3JlZ29yaWFuLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XHJcblx0XHR0aGlzLl9jdXJyZW50Q2FsZW5kYXIgPSB0aGlzLl9ncmVnb3JpYW47XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGphbGFsaSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5famFsYWxpLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1x0XHRcclxuXHRcdHllYXIgPSB5ZWFyIHx8IGRhdGUueWVhcjtcclxuXHRcdG1vbnRoID0gbW9udGggfHwgZGF0ZS5tb250aDtcclxuXHRcdGRheSA9IGRheSB8fCBkYXRlLmRheTtcclxuXHRcdGhvdXIgPSBob3VyIHx8IGRhdGUuaG91cjtcclxuXHRcdG1pbnV0ZSA9IG1pbnV0ZSB8fCBkYXRlLm1pbnV0ZTtcclxuXHRcdHNlY29uZCA9IHNlY29uZCB8fCBkYXRlLnNlY29uZDtcclxuXHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aGlzLl9qYWxhbGkuZGF0ZVRvVGltZXN0YW1wKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcclxuXHRcdHRoaXMuX2N1cnJlbnRDYWxlbmRhciA9IHRoaXMuX2phbGFsaTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0aXNsYW1pYyAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5faXNsYW1pYy50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcdFx0XHJcblx0XHR5ZWFyID0geWVhciB8fCBkYXRlLnllYXI7XHJcblx0XHRtb250aCA9IG1vbnRoIHx8IGRhdGUubW9udGg7XHJcblx0XHRkYXkgPSBkYXkgfHwgZGF0ZS5kYXk7XHJcblx0XHRob3VyID0gaG91ciB8fCBkYXRlLmhvdXI7XHJcblx0XHRtaW51dGUgPSBtaW51dGUgfHwgZGF0ZS5taW51dGU7XHJcblx0XHRzZWNvbmQgPSBzZWNvbmQgfHwgZGF0ZS5zZWNvbmQ7XHJcblxyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5faXNsYW1pYy5kYXRlVG9UaW1lc3RhbXAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cdFx0dGhpcy5fY3VycmVudENhbGVuZGFyID0gdGhpcy5faXNsYW1pYztcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0c2hpYSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fc2hpYS50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcdFx0XHJcblx0XHR5ZWFyID0geWVhciB8fCBkYXRlLnllYXI7XHJcblx0XHRtb250aCA9IG1vbnRoIHx8IGRhdGUubW9udGg7XHJcblx0XHRkYXkgPSBkYXkgfHwgZGF0ZS5kYXk7XHJcblx0XHRob3VyID0gaG91ciB8fCBkYXRlLmhvdXI7XHJcblx0XHRtaW51dGUgPSBtaW51dGUgfHwgZGF0ZS5taW51dGU7XHJcblx0XHRzZWNvbmQgPSBzZWNvbmQgfHwgZGF0ZS5zZWNvbmQ7XHJcblxyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fc2hpYS5kYXRlVG9UaW1lc3RhbXAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cdFx0dGhpcy5fY3VycmVudENhbGVuZGFyID0gdGhpcy5fc2hpYTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0Zm9ybWF0IChwYXR0ZXJuLCBsb2NhbGUpIHtcclxuXHRcdHJldHVybiB0aGlzLl9mb3JtYXR0ZXIuZm9ybWF0KHBhdHRlcm4sIGxvY2FsZSk7XHJcblx0fVx0XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oQ2FsZW5kYXJNYW5hZ2VyLnByb3RvdHlwZSwgQmFzZU1ldGhvZHNNaXhpbik7XHJcbk9iamVjdC5hc3NpZ24oQ2FsZW5kYXJNYW5hZ2VyLnByb3RvdHlwZSwgQWRkaXRpb25BbmRTdWJzdHJhY3Rpb25NaXhpbik7XHJcbiIsImNsYXNzIEdyZWdvcmlhbkNhbGVuZGFyIGV4dGVuZHMgQ2FsZW5kYXIge1xyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuR3JlZ29yaWFuRXBvY2ggPSAxNzIxNDI1LjU7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdHcmVnb3JpYW5FcG9jaCcsIHtcclxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG5cclxuXHRkYXRlVG9KdWxpYW5EYXkgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XHJcblx0XHRsZXQganVsaWFuRGF5ID0gdGhpcy5HcmVnb3JpYW5FcG9jaCAtIDE7XHJcblxyXG5cdFx0anVsaWFuRGF5ICs9IDM2NSAqICh5ZWFyIC0gMSk7XHJcblx0XHRqdWxpYW5EYXkgKz0gTWF0aC5mbG9vcigoeWVhciAtIDEpIC8gNCk7XHJcblx0XHRqdWxpYW5EYXkgKz0gTWF0aC5mbG9vcigoeWVhciAtIDEpIC8gMTAwKSAqIC0xO1xyXG5cdFx0anVsaWFuRGF5ICs9IE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQwMCk7XHJcblx0XHRqdWxpYW5EYXkgKz0gTWF0aC5mbG9vcigoKCgzNjcgKiBtb250aCkgLSAzNjIpIC8gMTIpICsgKChtb250aCA8PSAyKSA/IDAgOiAodGhpcy5pc0xlYXAoeWVhcikgPyAtMSA6IC0yKSkgKyBkYXkpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmFkZFRpbWVUb0p1bGlhbkRheShqdWxpYW5EYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcclxuXHR9XHJcblxyXG4gICAganVsaWFuRGF5VG9EYXRlIChqdWxpYW5EYXkpIHtcclxuICAgIFx0bGV0IHRpbWUgPSB0aGlzLmV4dHJhY3RKdWxpYW5EYXlUaW1lKGp1bGlhbkRheSk7XHJcbiAgICBcdFxyXG4gICAgXHRqdWxpYW5EYXkgPSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKGp1bGlhbkRheSk7XHJcblxyXG4gICAgXHRsZXQgd2pkID0gTWF0aC5mbG9vcihqdWxpYW5EYXkgLSAwLjUpICsgMC41O1xyXG4gICAgICAgIGxldCBkZXBvY2ggPSB3amQgLSB0aGlzLkdyZWdvcmlhbkVwb2NoO1xyXG4gICAgICAgIGxldCBxdWFkcmljZW50ID0gTWF0aC5mbG9vcihkZXBvY2ggLyAxNDYwOTcpO1xyXG4gICAgICAgIGxldCBkcWMgPSB0aGlzLm1vZChkZXBvY2gsIDE0NjA5Nyk7XHJcbiAgICAgICAgbGV0IGNlbnQgPSBNYXRoLmZsb29yKGRxYyAvIDM2NTI0KTtcclxuICAgICAgICBsZXQgZGNlbnQgPSB0aGlzLm1vZChkcWMsIDM2NTI0KTtcclxuICAgICAgICBsZXQgcXVhZCA9IE1hdGguZmxvb3IoZGNlbnQgLyAxNDYxKTtcclxuICAgICAgICBsZXQgZHF1YWQgPSB0aGlzLm1vZChkY2VudCwgMTQ2MSk7XHJcbiAgICAgICAgbGV0IHlpbmRleCA9IE1hdGguZmxvb3IoZHF1YWQgLyAzNjUpO1xyXG4gICAgICAgIGxldCB5ZWFyID0gKHF1YWRyaWNlbnQgKiA0MDApICsgKGNlbnQgKiAxMDApICsgKHF1YWQgKiA0KSArIHlpbmRleDtcclxuICAgICAgICBpZiAoISgoY2VudCA9PSA0KSB8fCAoeWluZGV4ID09IDQpKSkge1xyXG4gICAgICAgICAgICB5ZWFyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB5ZWFyZGF5ID0gd2pkIC0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZSh0aGlzLmRhdGVUb0p1bGlhbkRheSh5ZWFyLCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpO1xyXG4gICAgICAgIGxldCBsZWFwYWRqID0gKHdqZCA8IHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoeWVhciwgMywgMSwgdGltZS5ob3VyLCB0aW1lLm1pbnV0ZSwgdGltZS5zZWNvbmQpKSA/IDAgOiAodGhpcy5pc0xlYXAoeWVhcikgPyAxIDogMikpO1xyXG4gICAgICAgIGxldCBtb250aCA9IE1hdGguZmxvb3IoKCgoeWVhcmRheSArIGxlYXBhZGopICogMTIpICsgMzczKSAvIDM2Nyk7XHJcbiAgICAgICAgbGV0IGRheSA9ICh3amQgLSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIG1vbnRoLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSArIDE7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgXHRcInllYXJcIjogeWVhcixcclxuICAgICAgICBcdFwibW9udGhcIjogbW9udGgsXHJcbiAgICAgICAgXHRcImRheVwiOiBkYXksXHJcbiAgICAgICAgXHRcImhvdXJcIjogdGltZS5ob3VyLFxyXG4gICAgICAgIFx0XCJtaW51dGVcIjogdGltZS5taW51dGUsXHJcbiAgICAgICAgXHRcInNlY29uZFwiOiB0aW1lLnNlY29uZCxcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRheXNJbk1vbnRoICh5ZWFyLCBtb250aCkge1xyXG4gICAgICAgIGxldCBncmVnb3JpYW5EYXlzSW5Nb250aCA9IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAobW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXhjZXB0aW9uKFwiJG1vbnRoIE91dCBPZiBSYW5nZSBFeGNlcHRpb25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh5ZWFyICYmIHRoaXMuaXNMZWFwKHllYXIpICYmIG1vbnRoID09IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDI5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZ3JlZ29yaWFuRGF5c0luTW9udGhbbW9udGggLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBpc0xlYXAgKHllYXIpIHtcclxuICAgICAgICByZXR1cm4gKCh5ZWFyICUgNCkgPT0gMCkgJiYgKCEoKCh5ZWFyICUgMTAwKSA9PSAwKSAmJiAoKHllYXIgJSA0MDApICE9IDApKSk7XHJcbiAgICB9XHJcbn0iLCJjbGFzcyBJc2xhbWljQ2FsZW5kYXIgZXh0ZW5kcyBDYWxlbmRhciB7XHJcblx0XHJcblx0Y29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgXHJcblx0XHR0aGlzLklzbGFtaWNFcG9jaCA9IDE5NDg0MzkuNTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnSXNsYW1pY0Vwb2NoJywge1xyXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHR9XHJcblxyXG5cdGRhdGVUb0p1bGlhbkRheSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcclxuICAgICAgICBsZXQganVsaWFuRGF5ID0gZGF5O1xyXG5cclxuICAgICAgICBqdWxpYW5EYXkgKz0gTWF0aC5jZWlsKChtb250aCAtIDEpICogMjkuNSk7XHJcbiAgICAgICAganVsaWFuRGF5ICs9ICh5ZWFyIC0gMSkgKiAzNTQ7XHJcbiAgICAgICAganVsaWFuRGF5ICs9IE1hdGguZmxvb3IoKCgxMSAqIHllYXIpICsgMykgLyAzMCk7XHJcbiAgICAgICAganVsaWFuRGF5ICs9IHRoaXMuSXNsYW1pY0Vwb2NoIC0gMTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5hZGRUaW1lVG9KdWxpYW5EYXkoanVsaWFuRGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XHJcblx0fVxyXG5cclxuICAgIGp1bGlhbkRheVRvRGF0ZSAoanVsaWFuRGF5KSB7XHJcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLmV4dHJhY3RKdWxpYW5EYXlUaW1lKGp1bGlhbkRheSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAganVsaWFuRGF5ID0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZShqdWxpYW5EYXkpO1xyXG4gICAgICAgIGp1bGlhbkRheSA9IE1hdGguZmxvb3IoanVsaWFuRGF5KSArIDAuNTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgeWVhciA9IE1hdGguZmxvb3IoKCgoanVsaWFuRGF5IC0gdGhpcy5Jc2xhbWljRXBvY2gpICogMzApICsgMTA2NDYpIC8gMTA2MzEpO1xyXG4gICAgICAgIGxldCBtb250aCA9IE1hdGgubWluKDEyLCBNYXRoLmNlaWwoKGp1bGlhbkRheSAtICgyOSArIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoeWVhciwgMSwgMSwgdGltZS5ob3VyLCB0aW1lLm1pbnV0ZSwgdGltZS5zZWNvbmQpKSkpIC8gMjkuNSkgKyAxKTtcclxuICAgICAgICBsZXQgZGF5ID0gKGp1bGlhbkRheSAtIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoeWVhciwgbW9udGgsIDEsIHRpbWUuaG91ciwgdGltZS5taW51dGUsIHRpbWUuc2Vjb25kKSkpICsgMTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICBcdFwieWVhclwiOiB5ZWFyLFxyXG4gICAgICAgIFx0XCJtb250aFwiOiBtb250aCxcclxuICAgICAgICBcdFwiZGF5XCI6IGRheSxcclxuICAgICAgICBcdFwiaG91clwiOiB0aW1lLmhvdXIsXHJcbiAgICAgICAgXHRcIm1pbnV0ZVwiOiB0aW1lLm1pbnV0ZSxcclxuICAgICAgICBcdFwic2Vjb25kXCI6IHRpbWUuc2Vjb25kLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYXlzSW5Nb250aCAoeWVhciwgbW9udGgpIHtcclxuICAgICAgICBsZXQgaXNsYW1pY0RheXNJbk1vbnRoID0gWzMwLCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMjldOyAvLzMwXHJcblxyXG4gICAgICAgIGlmIChtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFeGNlcHRpb24oXCIkbW9udGggT3V0IE9mIFJhbmdlIEV4Y2VwdGlvblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHllYXIgJiYgdGhpcy5pc0xlYXAoeWVhcikgJiYgbW9udGggPT0gMTIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDMwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gaXNsYW1pY0RheXNJbk1vbnRoW21vbnRoIC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgaXNMZWFwICh5ZWFyKSB7XHJcbiAgICAgICAgbGV0IGlzTGVhcCA9ICgoKHllYXIgKiAxMSkgKyAxNCkgJSAzMCkgPCAxMTtcclxuICAgICAgICByZXR1cm4gaXNMZWFwO1xyXG4gICAgfVxyXG59IiwiY2xhc3MgSmFsYWxpQ2FsZW5kYXIgZXh0ZW5kcyBDYWxlbmRhciB7XHJcblx0XHJcblx0Y29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5KYWxhbGlFcG9jaCA9IDE5NDgzMjAuNTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnSmFsYWxpRXBvY2gnLCB7XHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cdH1cclxuXHJcblx0ZGF0ZVRvSnVsaWFuRGF5ICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xyXG5cdFx0bGV0IGVwb2NoQmFzZSA9IHllYXIgLSAoeWVhciA+PSAwID8gNDc0IDogNDczKTtcclxuICAgICAgICBsZXQgZXBvY2hZZWFyID0gNDc0ICsgdGhpcy5tb2QoZXBvY2hCYXNlLCAyODIwKTtcclxuICAgICAgICBsZXQganVsaWFuRGF5ID0gZGF5O1xyXG5cclxuICAgICAgICBqdWxpYW5EYXkgKz0gbW9udGggPD0gNyA/IChtb250aCAtIDEpICogMzEgOiAoKG1vbnRoIC0gMSkgKiAzMCkgKyA2O1xyXG4gICAgICAgIGp1bGlhbkRheSArPSBNYXRoLmZsb29yKCgoZXBvY2hZZWFyICogNjgyKSAtIDExMCkgLyAyODE2KTtcclxuICAgICAgICBqdWxpYW5EYXkgKz0gKGVwb2NoWWVhciAtIDEpICogMzY1O1xyXG4gICAgICAgIGp1bGlhbkRheSArPSBNYXRoLmZsb29yKGVwb2NoQmFzZSAvIDI4MjApICogMTAyOTk4MztcclxuICAgICAgICBqdWxpYW5EYXkgKz0gdGhpcy5KYWxhbGlFcG9jaCAtIDE7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuYWRkVGltZVRvSnVsaWFuRGF5KGp1bGlhbkRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cdH1cclxuXHJcbiAgICBqdWxpYW5EYXlUb0RhdGUgKGp1bGlhbkRheSkge1xyXG4gICAgXHRsZXQgdGltZSA9IHRoaXMuZXh0cmFjdEp1bGlhbkRheVRpbWUoanVsaWFuRGF5KTtcclxuICAgIFx0XHJcbiAgICBcdGp1bGlhbkRheSA9IHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUoanVsaWFuRGF5KTtcclxuXHJcbiAgICBcdGp1bGlhbkRheSA9IE1hdGguZmxvb3IoanVsaWFuRGF5KSArIDAuNTtcclxuXHJcbiAgICAgICAgbGV0IGRlcG9jaCA9IGp1bGlhbkRheSAtIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoNDc1LCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpO1xyXG4gICAgICAgIGxldCBjeWNsZSA9IE1hdGguZmxvb3IoZGVwb2NoIC8gMTAyOTk4Myk7XHJcbiAgICAgICAgbGV0IGN5ZWFyID0gdGhpcy5tb2QoZGVwb2NoLCAxMDI5OTgzKTsgICAgICAgIFxyXG4gICAgXHRsZXQgeWN5Y2xlLCBhdXgxLCBhdXgyO1xyXG5cclxuICAgICAgICBpZiAoY3llYXIgPT0gMTAyOTk4Mikge1xyXG4gICAgICAgICAgICB5Y3ljbGUgPSAyODIwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF1eDEgPSBNYXRoLmZsb29yKGN5ZWFyIC8gMzY2KTtcclxuICAgICAgICAgICAgYXV4MiA9IHRoaXMubW9kKGN5ZWFyLCAzNjYpO1xyXG4gICAgICAgICAgICB5Y3ljbGUgPSBNYXRoLmZsb29yKCgoMjEzNCAqIGF1eDEpICsgKDI4MTYgKiBhdXgyKSArIDI4MTUpIC8gMTAyODUyMikgKyBhdXgxICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHllYXIgPSB5Y3ljbGUgKyAoMjgyMCAqIGN5Y2xlKSArIDQ3NDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoeWVhciA8PSAwKSB7XHJcbiAgICAgICAgICAgIHllYXItLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHlkYXkgPSAoanVsaWFuRGF5IC0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZSh0aGlzLmRhdGVUb0p1bGlhbkRheSh5ZWFyLCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSArIDE7XHJcbiAgICAgICAgbGV0IG1vbnRoID0gKHlkYXkgPD0gMTg2KSA/IE1hdGguY2VpbCh5ZGF5IC8gMzEpIDogTWF0aC5jZWlsKCh5ZGF5IC0gNikgLyAzMCk7XHJcbiAgICAgICAgbGV0IGRheSA9IChqdWxpYW5EYXkgLSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIG1vbnRoLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSArIDE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgXHRcInllYXJcIjogeWVhcixcclxuICAgICAgICBcdFwibW9udGhcIjogbW9udGgsXHJcbiAgICAgICAgXHRcImRheVwiOiBkYXksXHJcbiAgICAgICAgXHRcImhvdXJcIjogdGltZS5ob3VyLFxyXG4gICAgICAgIFx0XCJtaW51dGVcIjogdGltZS5taW51dGUsXHJcbiAgICAgICAgXHRcInNlY29uZFwiOiB0aW1lLnNlY29uZCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF5c0luTW9udGggKHllYXIsIG1vbnRoKSB7XHJcbiAgICAgICAgbGV0IGdyZWdvcmlhbkRheXNJbk1vbnRoID0gWzMxLCAzMSwgMzEsIDMxLCAzMSwgMzEsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMjldOyAvLzMwXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG1vbnRoIDwgMSB8fCBtb250aCA+IDEyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUV4Y2VwdGlvbihcIiRtb250aCBPdXQgT2YgUmFuZ2UgRXhjZXB0aW9uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoeWVhciAmJiB0aGlzLmlzTGVhcCh5ZWFyKSAmJiBtb250aCA9PSAxMikge1xyXG4gICAgICAgICAgICByZXR1cm4gMzA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBncmVnb3JpYW5EYXlzSW5Nb250aFttb250aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTGVhcCAoeWVhcikge1xyXG4gICAgICAgIHJldHVybiAoKCgoKCh5ZWFyIC0gKCh5ZWFyID4gMCkgPyA0NzQgOiA0NzMpKSAlIDI4MjApICsgNDc0KSArIDM4KSAqIDY4MikgJSAyODE2KSA8IDY4MjtcclxuICAgIH1cclxufSIsImNsYXNzIFNoaWFDYWxlbmRhciBleHRlbmRzIENhbGVuZGFyIHtcclxuXHRcclxuXHRjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBcclxuXHRcdHRoaXMuU2hpYUVwb2NoID0gMTk0ODQzOS41O1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdTaGlhRXBvY2gnLCB7XHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cdH1cclxuXHJcblx0ZGF0ZVRvSnVsaWFuRGF5ICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xyXG4gICAgICAgIGxldCBkYXlPZlllYXIgPSBkYXk7XHJcbiAgICAgICAgbGV0IGp1bGlhbkRheSA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbW9udGg7IGkrKykge1xyXG4gICAgICAgICAgICBkYXlPZlllYXIgKz0gdGhpcy5kYXlzSW5Nb250aCh5ZWFyLCBpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGp1bGlhbkRheSArPSBkYXlPZlllYXI7XHJcbiAgICAgICAganVsaWFuRGF5ICs9ICh5ZWFyIC0gMSkgKiAzNTQ7XHJcbiAgICAgICAganVsaWFuRGF5ICs9IE1hdGguZmxvb3IoKCgxMSAqIHllYXIpICsgMykgLyAzMCk7XHJcbiAgICAgICAganVsaWFuRGF5ICs9IHRoaXMuU2hpYUVwb2NoIC0gMTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5hZGRUaW1lVG9KdWxpYW5EYXkoanVsaWFuRGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XHJcblx0fVxyXG5cclxuICAgIGp1bGlhbkRheVRvRGF0ZSAoanVsaWFuRGF5KSB7XHJcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLmV4dHJhY3RKdWxpYW5EYXlUaW1lKGp1bGlhbkRheSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAganVsaWFuRGF5ID0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZShqdWxpYW5EYXkpO1xyXG4gICAgICAgIGp1bGlhbkRheSA9IE1hdGguZmxvb3IoanVsaWFuRGF5KSArIDAuNTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgeWVhciA9IE1hdGguZmxvb3IoKCgoanVsaWFuRGF5IC0gdGhpcy5TaGlhRXBvY2gpICogMzApICsgMTA2NDYpIC8gMTA2MzEpO1xyXG4gICAgICAgIGxldCBtb250aCA9IE1hdGgubWluKDEyLCBNYXRoLmNlaWwoKGp1bGlhbkRheSAtICgyOSArIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoeWVhciwgMSwgMSwgdGltZS5ob3VyLCB0aW1lLm1pbnV0ZSwgdGltZS5zZWNvbmQpKSkpIC8gMjkuNSkgKyAxKTtcclxuICAgICAgICBsZXQgZGF5T2ZZZWFyID0ganVsaWFuRGF5IC0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZSh0aGlzLmRhdGVUb0p1bGlhbkRheSh5ZWFyLCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpO1xyXG4gICAgICAgIGxldCBkYXlzID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRheXMgKz0gdGhpcy5kYXlzSW5Nb250aCh5ZWFyLCBpKTtcclxuICAgICAgICAgICAgaWYgKGRheU9mWWVhciA8IGRheXMpIHtcclxuICAgICAgICAgICAgICAgIG1vbnRoID0gaTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkYXkgPSAoanVsaWFuRGF5IC0gKChkYXlzIC0gdGhpcy5kYXlzSW5Nb250aCh5ZWFyLCBtb250aCkpICsgKCh5ZWFyIC0gMSkgKiAzNTQpICsgTWF0aC5mbG9vcigoMyArICgxMSAqIHllYXIpKSAvIDMwKSArIHRoaXMuU2hpYUVwb2NoKSArIDEpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgIFx0XCJ5ZWFyXCI6IHllYXIsXHJcbiAgICAgICAgXHRcIm1vbnRoXCI6IG1vbnRoLFxyXG4gICAgICAgIFx0XCJkYXlcIjogZGF5LFxyXG4gICAgICAgIFx0XCJob3VyXCI6IHRpbWUuaG91cixcclxuICAgICAgICBcdFwibWludXRlXCI6IHRpbWUubWludXRlLFxyXG4gICAgICAgIFx0XCJzZWNvbmRcIjogdGltZS5zZWNvbmQsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRheXNJbk1vbnRoICh5ZWFyLCBtb250aCkge1xyXG4gXHRcdGxldCBpc2xhbWljRGF5c0luTW9udGggPSBbMzAsIDI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAyOV07IC8vMzBcclxuICAgICAgICBsZXQgc2hpYURheXNJbk1vbnRoSW5ZZWFycyA9IHtcclxuICAgICAgICAgICAgMTQzNTogWzI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMzAsIDMwLCAyOSwgMzBdLFxyXG4gICAgICAgICAgICAxNDM2OiBbMjksIDMwLCAyOSwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAzMF0sXHJcbiAgICAgICAgICAgIDE0Mzc6IFsyOSwgMzAsIDMwLCAyOSwgMzAsIDI5LCAyOSwgMzAsIDI5LCAyOSwgMzAsIDMwXSxcclxuICAgICAgICAgICAgMTQzODogWzI5LCAzMCwgMzAsIDMwLCAyOSwgMzAsIDI5LCAyOSwgMzAsIDI5LCAyOSwgMzBdLFxyXG4gICAgICAgICAgICAxNDM5OiBbMjksIDMwLCAzMCwgMzAsIDMwLCAyOSwgMzAsIDI5LCAyOSwgMzAsIDI5LCAyOV0sXHJcbiAgICAgICAgICAgIDE0NDA6IFszMCwgMjksIDMwLCAzMCwgMzAsIDI5LCAyOSwgMzAsIDI5LCAzMCwgMjksIDI5XSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAobW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXhjZXB0aW9uKFwiJG1vbnRoIE91dCBPZiBSYW5nZSBFeGNlcHRpb25cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2hpYURheXNJbk1vbnRoSW5ZZWFyc1t5ZWFyXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc2xhbWljRGF5c0luTW9udGhbbW9udGggLSAxXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzaGlhRGF5c0luTW9udGhJblllYXJzW3llYXJdW21vbnRoIC0gMV07ICAgXHRcclxuICAgIH1cclxuXHJcbiAgICBpc0xlYXAgKHllYXIpIHtcclxuICAgICAgICBsZXQgaXNMZWFwID0gKCgoeWVhciAqIDExKSArIDE0KSAlIDMwKSA8IDExO1xyXG5cdFx0cmV0dXJuIGlzTGVhcDtcclxuXHR9XHJcbn0iLCJcclxuY2xhc3MgRGF0ZUZvcm1hdCB7XHJcblx0XHJcblx0Y29uc3RydWN0b3IgKCkge1xyXG5cdFx0dGhpcy5fY2FsZW5kYXIgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0c2V0Q2FsZW5kYXIgKGNhbGVuZGFyKSB7XHJcblx0XHR0aGlzLl9jYWxlbmRhciA9IGNhbGVuZGFyIGluc3RhbmNlb2YgQ2FsZW5kYXJNYW5hZ2VyID8gY2FsZW5kYXIgOiBudWxsO1xyXG5cdH1cclxuXHJcblx0Z2V0Q2FsZW5kYXIgKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NhbGVuZGFyO1xyXG5cdH1cclxuXHJcblx0Zm9ybWF0ICgpIHtcclxuXHRcdGlmKHRoaXMuZ2V0Q2FsZW5kYXIoKSA9PT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gYCR7dGhpcy5fY2FsZW5kYXIuZ2V0WWVhcigpfS0ke3RoaXMuX2NhbGVuZGFyLmdldE1vbnRoKCl9LSR7dGhpcy5fY2FsZW5kYXIuZ2V0RGF5KCl9ICR7dGhpcy5fY2FsZW5kYXIuZ2V0SG91cigpfToke3RoaXMuX2NhbGVuZGFyLmdldE1pbnV0ZSgpfToke3RoaXMuX2NhbGVuZGFyLmdldFNlY29uZCgpfWA7XHJcblx0fVxyXG59XHJcbiIsIlxyXG5jbGFzcyBTaW1wbGVEYXRlRm9ybWF0IGV4dGVuZHMgRGF0ZUZvcm1hdCB7XHJcblx0XHJcblx0Y29uc3RydWN0b3IgKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdGZvcm1hdCAocGF0dGVybiwgbG9jYWxlKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21waWxlKHBhdHRlcm4sIGxvY2FsZSk7XHJcblx0fVxyXG5cclxuXHRjb21waWxlIChwYXR0ZXJuLCBsb2NhbGUpIHtcclxuXHRcdHBhdHRlcm4gPSBTdHJpbmcocGF0dGVybikudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRsZXQgcmVzdWx0ID0gcGF0dGVybjtcclxuXHJcblx0XHRjb25zdCBTaWducyA9IFsneScsICdtJywgJ2QnXTtcclxuXHRcdGNvbnN0IEZ1bGxZZWFyID0gJ3l5eXknO1xyXG5cdFx0Y29uc3QgU2hvcnRZZWFyID0gJ3l5JztcclxuXHRcdGNvbnN0IE1vbnRoID0gJ21tJztcclxuXHRcdGNvbnN0IFNpbmdsZU1vbnRoID0gJ20nO1xyXG5cdFx0Y29uc3QgRGF5ID0gJ2RkJztcclxuXHRcdGNvbnN0IFNpbmdsZURheSA9ICdkJztcclxuXHJcblx0XHRsZXQgY2hhcnMgPSBbXTtcclxuXHRcdGxldCBwcmV2Q2hhciA9ICcnO1xyXG5cdFx0bGV0IGN1cnJDaGFyID0gJyc7XHJcblx0XHRsZXQgaW5kZXggPSAwO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGF0dGVybi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjdXJyQ2hhciA9IFNpZ25zLmluY2x1ZGVzKHBhdHRlcm5baV0pID8gcGF0dGVybltpXSA6ICcnO1xyXG5cclxuXHRcdFx0aWYoY3VyckNoYXIgPT09ICcnKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKGN1cnJDaGFyID09PSBwcmV2Q2hhcikge1xyXG5cdFx0XHRcdGNoYXJzW2luZGV4XSArPSBjdXJyQ2hhcjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjaGFyc1srK2luZGV4XSA9IGN1cnJDaGFyO1xyXG5cdFx0XHR9XHJcblx0XHRcdHByZXZDaGFyID0gY3VyckNoYXI7XHJcblx0XHR9XHJcbmNvbnNvbGUubG9nKGNoYXJzKTtcclxuXHRcdGZvciAobGV0IGkgaW4gY2hhcnMpIHtcclxuXHRcdFx0c3dpdGNoIChjaGFyc1tpXSkge1xyXG5cdFx0XHRcdGNhc2UgRnVsbFllYXI6XHJcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShGdWxsWWVhciwgdGhpcy5nZXRDYWxlbmRhcigpLmdldFllYXIoKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBTaG9ydFllYXI6XHJcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShTaG9ydFllYXIsIFN0cmluZyh0aGlzLmdldENhbGVuZGFyKCkuZ2V0WWVhcigpKS5zdWJzdHIoLTIsIDIpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFNpbmdsZU1vbnRoOlxyXG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoU2luZ2xlTW9udGgsIHRoaXMuZ2V0Q2FsZW5kYXIoKS5nZXRNb250aCgpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIE1vbnRoOlxyXG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoTW9udGgsIHRoaXMuZ2V0Q2FsZW5kYXIoKS5nZXRNb250aCgpID4gOSA/IHRoaXMuZ2V0Q2FsZW5kYXIoKS5nZXRNb250aCgpIDogJzAnICsgdGhpcy5nZXRDYWxlbmRhcigpLmdldE1vbnRoKCkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgU2luZ2xlRGF5OlxyXG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoU2luZ2xlRGF5LCB0aGlzLmdldENhbGVuZGFyKCkuZ2V0RGF5KCkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgRGF5OlxyXG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoRGF5LCB0aGlzLmdldENhbGVuZGFyKCkuZ2V0RGF5KCkgPiA5ID8gdGhpcy5nZXRDYWxlbmRhcigpLmdldERheSgpIDogJzAnICsgdGhpcy5nZXRDYWxlbmRhcigpLmdldERheSgpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcbn1cclxuIiwiY2xhc3MgQ29uc3RhbnRzIHtcclxuXHQgXHJcblx0Y29uc3RydWN0b3IgKCkge1xyXG5cclxuXHR9XHJcbn0iLCJcclxuY2xhc3MgTG9jYWxpemF0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5fbGFuZ3MgPSB7fTtcclxuICAgICAgICB0aGlzLl9sb2NhbGUgPSAnZmEnO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExhbmcgKG5hbWUsIHRyYW5zKSB7XHJcbiAgICAgICAgdGhpcy5fbGFuZ3NbbmFtZV0gPSB0cmFucztcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2NhbGUobG9jYWxlKSB7XHJcbiAgICAgICAgdGhpcy5fbG9jYWxlID0gbG9jYWxlIHx8IHRoaXMuX2xvY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb2NhbGUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNMb2NhbGUgKGxvY2FsZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGUgPT09IGxvY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNUcmFuc0tleSAoa2V5LCBsb2NhbGUpIHtcclxuICAgICAgICBsZXQgc3ViS2V5cyA9IGtleS5zcGxpdCgnLicpO1xyXG4gICAgICAgIGlmICh0aGlzLl9sYW5nc1tsb2NhbGVdID09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9sYW5nc1tsb2NhbGVdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc3ViS2V5c1tpXSBpbiByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFtzdWJLZXlzW2ldXTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyYW5zIChrZXksIGxvY2FsZSkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmhhc1RyYW5zS2V5KGtleSwgbG9jYWxlKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0IDoga2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zIChrZXksIGxvY2FsZSkge1xyXG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCB0aGlzLl9sb2NhbGU7XHJcbiAgICAgICAga2V5ID0ga2V5IHx8ICcnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRyYW5zKGtleSwgbG9jYWxlKTtcclxuICAgIH1cclxufVxyXG4iLCJjbGFzcyBQYXNvb25hdGUgZXh0ZW5kcyBDb25zdGFudHMge1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoKSB7XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBtYWtlICh0aW1lc3RhbXAsIHRpbWV6b25lT2Zmc2V0KSB7XHJcblx0XHRyZXR1cm4gbmV3IENhbGVuZGFyTWFuYWdlcih0aW1lc3RhbXAsIHRpbWV6b25lT2Zmc2V0KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyB0cmFucyAoa2V5LCBsb2NhbGUpIHtcclxuXHRcdHJldHVybiBQYXNvb25hdGUubG9jYWxpemF0aW9uLnRyYW5zKGtleSwgbG9jYWxlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBzZXRMb2NhbGUgKGxvY2FsZSkge1xyXG5cdFx0UGFzb29uYXRlLmxvY2FsaXphdGlvbi5zZXRMb2NhbGUobG9jYWxlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRMb2NhbCAoKSB7XHJcblx0XHRyZXR1cm4gUGFzb29uYXRlLmxvY2FsaXphdGlvbi5nZXRMb2NhbCgpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGlzTG9jYWwgKGxvY2FsZSkge1xyXG5cdFx0cmV0dXJuIFBhc29vbmF0ZS5sb2NhbGl6YXRpb24uaXNMb2NhbChsb2NhbGUpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHNldEZvcm1hdHRlciAoZm9ybWF0dGVyKSB7XHJcblx0XHRQYXNvb25hdGUuZm9ybWF0dGVyID0gZm9ybWF0dGVyIGluc3RhbmNlb2YgRGF0ZUZvcm1hdCA/IGZvcm1hdHRlciA6IG5ldyBTaW1wbGVEYXRlRm9ybWF0KCk7XHJcblx0fVxyXG59XHJcblxyXG5QYXNvb25hdGUubG9jYWxpemF0aW9uID0gbmV3IExvY2FsaXphdGlvbigpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUGFzb29uYXRlLCAnbG9jYWxpemF0aW9uJywge1xyXG4gICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgY29uZmlndXJhYmxlOiBmYWxzZVxyXG59KTtcclxuXHJcblBhc29vbmF0ZS5mb3JtYXR0ZXIgPSBuZXcgU2ltcGxlRGF0ZUZvcm1hdCgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUGFzb29uYXRlLCAnZm9ybWF0dGVyJywge1xyXG4gICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICBjb25maWd1cmFibGU6IGZhbHNlXHJcbn0pOyIsIlxyXG5sZXQgZmEgPSB7XHJcblx0Z3JlZ29yaWFuOiB7XHJcblx0XHRkYXlfbmFtZToge1xyXG5cdFx0XHRzdW5kYXk6IFwiU3VuZGF5XCJcclxuXHRcdH1cclxuXHR9LFxyXG5cdGphbGFsaToge30sXHJcblx0aXNsYW1pYzoge30sXHJcblx0c2hpYToge31cclxufTtcclxuXHJcblBhc29vbmF0ZS5sb2NhbGl6YXRpb24uc2V0TGFuZygnZmEnLCBmYSk7Il19


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
		this._formatter.setCalendar(this);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9taXhpbi9BZGRpdGlvbkFuZFN1YnN0cmFjdGlvbk1peGluLmpzIiwic3JjL21peGluL0Jhc2VNZXRob2RzTWl4aW4uanMiLCJzcmMvY2FsZW5kYXIvQ2FsZW5kYXIuanMiLCJzcmMvY2FsZW5kYXIvQ2FsZW5kYXJNYW5hZ2VyLmpzIiwic3JjL2NhbGVuZGFyL0dyZWdvcmlhbkNhbGVuZGFyLmpzIiwic3JjL2NhbGVuZGFyL0lzbGFtaWNDYWxlbmRhci5qcyIsInNyYy9jYWxlbmRhci9KYWxhbGlDYWxlbmRhci5qcyIsInNyYy9jYWxlbmRhci9TaGlhQ2FsZW5kYXIuanMiLCJzcmMvZm9ybWF0dGVyL0RhdGVGb3JtYXQuanMiLCJzcmMvZm9ybWF0dGVyL1NpbXBsZURhdGVGb3JtYXQuanMiLCJzcmMvQ29uc3RhbnRzLmpzIiwic3JjL0xvY2FsaXphdGlvbi5qcyIsInNyYy9QYXNvb25hdGUuanMiLCJzcmMvbGFuZy9mYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ROQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InBhc29vbmF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxubGV0IEFkZGl0aW9uQW5kU3Vic3RyYWN0aW9uTWl4aW4gPSB7XG5cdGFkZFllYXIoY291bnQpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciArIGNvdW50LCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGFkZE1vbnRoKGNvdW50KSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRsZXQgdG90YWxNb250aCA9IGRhdGUubW9udGggKyBjb3VudDtcblx0XHRsZXQgeWVhciA9IGRhdGUueWVhciArIE1hdGguZmxvb3IodG90YWxNb250aCAvIDEyKTtcblx0XHRsZXQgbW9udGggPSB0b3RhbE1vbnRoICUgMTI7XG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoeWVhciwgbW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0YWRkRGF5KGNvdW50KSB7XG5cdFx0dGhpcy5fdGltZXN0YW1wICs9IChjb3VudCAqIDg2NDAwKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRhZGRIb3VyKGNvdW50KSB7XG5cdFx0dGhpcy5fdGltZXN0YW1wICs9IChjb3VudCAqIDM2MDApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGFkZE1pbnV0ZShjb3VudCkge1xuXHRcdHRoaXMuX3RpbWVzdGFtcCArPSAoY291bnQgKiA2MCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0YWRkU2Vjb25kKGNvdW50KSB7XG5cdFx0dGhpcy5fdGltZXN0YW1wICs9IGNvdW50O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHN1YlllYXIoY291bnQpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciAtIGNvdW50LCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHN1Yk1vbnRoKGNvdW50KSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRsZXQgdG90YWxNb250aCA9IGRhdGUubW9udGggLSBjb3VudDtcblx0XHRsZXQgeWVhciA9IGRhdGUueWVhcjtcblx0XHRsZXQgbW9udGggPSB0b3RhbE1vbnRoO1xuXG5cdFx0aWYodG90YWxNb250aCA8PSAwKSB7XG5cdFx0XHR0b3RhbE1vbnRoID0gLXRvdGFsTW9udGg7XG5cdFx0XHR5ZWFyIC09IE1hdGguZmxvb3IodG90YWxNb250aCAvIDEyKSArIDE7XG5cdFx0XHRtb250aCA9IDEyIC0gKHRvdGFsTW9udGggJSAxMik7XG5cdFx0fVxuXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoeWVhciwgbW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0c3ViRGF5KGNvdW50KSB7XG5cdFx0dGhpcy5fdGltZXN0YW1wIC09IChjb3VudCAqIDg2NDAwKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRzdWJIb3VyKGNvdW50KSB7XG5cdFx0dGhpcy5fdGltZXN0YW1wIC09IChjb3VudCAqIDM2MDApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHN1Yk1pbnV0ZShjb3VudCkge1xuXHRcdHRoaXMuX3RpbWVzdGFtcCAtPSAoY291bnQgKiA2MCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0c3ViU2Vjb25kKGNvdW50KSB7XG5cdFx0dGhpcy5fdGltZXN0YW1wIC09IGNvdW50O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xuIiwibGV0IEJhc2VNZXRob2RzTWl4aW4gPSB7XG5cdHNldFRpbWVzdGFtcCAodGltZXN0YW1wKSB7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Z2V0VGltZXN0YW1wICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fdGltZXN0YW1wO1xuXHR9LFxuXG5cdHNldFRpbWV6b25lT2Zmc2V0ICh0aW1lem9uZU9mZnNldCkge1xuXHRcdHRoaXMuX3RpbWV6b25lT2Zmc2V0ID0gdGltZXpvbmVPZmZzZXQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRnZXRUaW1lem9uZU9mZnNldCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xuXHR9LFxuXG5cdHNldFllYXIgKHllYXIpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKHllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Z2V0WWVhciAoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRyZXR1cm4gZGF0ZS55ZWFyO1xuXHR9LFx0XG5cblx0c2V0TW9udGggKG1vbnRoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIG1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdldE1vbnRoICgpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xuXHRcdHJldHVybiBkYXRlLm1vbnRoO1xuXHR9LFxuXG5cdHNldERheSAoZGF5KSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdldERheSAoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRyZXR1cm4gZGF0ZS5kYXk7XHRcblx0fSxcblxuXHRzZXRIb3VyIChob3VyKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdldEhvdXIgKCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XG5cdFx0cmV0dXJuIGRhdGUuaG91cjtcblx0fSxcblxuXHRzZXRNaW51dGUgKG1pbnV0ZSkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBtaW51dGUsIGRhdGUuc2Vjb25kKTtcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRnZXRNaW51dGUgKCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XG5cdFx0cmV0dXJuIGRhdGUubWludXRlO1xuXHR9LFxuXG5cdHNldFNlY29uZCAoc2Vjb25kKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBzZWNvbmQpO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdldFNlY29uZCAoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRyZXR1cm4gZGF0ZS5zZWNvbmQ7XG5cdH0sXG5cblx0c2V0VVRDWWVhciAoeWVhcikge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoeWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0XG5cdGdldFVUQ1llYXIgKCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xuXHRcdHJldHVybiBkYXRlLnllYXI7XG5cdH0sXG5cblx0c2V0VVRDTW9udGggKG1vbnRoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIG1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRcblx0Z2V0VVRDTW9udGggKCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xuXHRcdHJldHVybiBkYXRlLm1vbnRoO1xuXHR9LFxuXG5cdHNldFVUQ0RheSAoZGF5KSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRcblx0Z2V0VVRDRGF5ICgpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcblx0XHRyZXR1cm4gZGF0ZS5kYXk7XHRcblx0fSxcblxuXHRzZXRVVENIb3VyIChob3VyKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRcblx0Z2V0VVRDSG91ciAoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0cmV0dXJuIGRhdGUuaG91cjtcblx0fSxcblxuXHRzZXRVVENNaW51dGUgKG1pbnV0ZSkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBtaW51dGUsIGRhdGUuc2Vjb25kKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0XG5cdGdldFVUQ01pbnV0ZSAoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0cmV0dXJuIGRhdGUubWludXRlO1xuXHR9LFxuXG5cdHNldFVUQ1NlY29uZCAoc2Vjb25kKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBzZWNvbmQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdldFVUQ1NlY29uZCAoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0cmV0dXJuIGRhdGUuc2Vjb25kO1xuXHR9LFxuXG5cdHNldERhdGUgKHllYXIsIG1vbnRoLCBkYXkpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKHllYXIsIG1vbnRoLCBkYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0XG5cdHNldFRpbWUgKGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdFxuXHRzZXREYXRlVGltZSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRzZXRVVENEYXRlICh5ZWFyLCBtb250aCwgZGF5KSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBtb250aCwgZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdFxuXHRzZXRVVENUaW1lIChob3VyLCBtaW51dGUsIHNlY29uZCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRcblx0c2V0VVRDRGF0ZVRpbWUgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0ZGF5T2ZXZWVrICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fY3VycmVudENhbGVuZGFyLmRheU9mV2Vlayh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XG4gICAgfSxcblxuICAgIGRheU9mWWVhciAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF5T2ZZZWFyKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcbiAgICB9LFxuXG4gICAgd2Vla09mTW9udGggKCkge1xuICAgIFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRDYWxlbmRhci53ZWVrT2ZNb250aCh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XG4gICAgfSxcblxuICAgIHdlZWtPZlllYXIgKCkge1xuICAgIFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRDYWxlbmRhci53ZWVrT2ZZZWFyKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcbiAgICB9LFxufTtcbiIsIlxuY2xhc3MgQ2FsZW5kYXIge1xuXHRcblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHRoaXMuSjE5NzAgPSAyNDQwNTg3LjU7XHRcdFx0Ly8gSnVsaWFuIGRhdGUgYXQgVW5peCBlcG9jaDogMTk3MC0wMS0wMVxuXHRcdHRoaXMuRGF5SW5TZWNvbmQgPSA4NjQwMDtcblx0fVx0XG5cblx0dGltZXN0YW1wVG9KdWxpYW5EYXkgKHRpbWVzdGFtcCkge1xuXHRcdGxldCBqdWxpYW5EYXkgPSB0aGlzLkoxOTcwICsgdGltZXN0YW1wIC8gdGhpcy5EYXlJblNlY29uZDtcblxuXHRcdHJldHVybiBqdWxpYW5EYXk7XG5cdH1cblxuXHRqdWxpYW5EYXlUb1RpbWVzdGFtcCAoanVsaWFuRGF5KSB7XG5cdFx0bGV0IHRpbWVzdGFtcCA9IE1hdGgucm91bmQoKGp1bGlhbkRheSAtIHRoaXMuSjE5NzApICogdGhpcy5EYXlJblNlY29uZCk7XG5cdFx0XG5cdFx0cmV0dXJuIHRpbWVzdGFtcDtcbiAgICB9XG5cblx0anVsaWFuRGF5V2l0aG91dFRpbWUgKGp1bGlhbkRheSkge1xuXHRcdFxuXHRcdHJldHVybiBNYXRoLmZsb29yKGp1bGlhbkRheSkgKyAwLjU7XG5cdH1cblxuXHRleHRyYWN0SnVsaWFuRGF5VGltZSAoanVsaWFuRGF5KSB7XG4gICAgICAgIGp1bGlhbkRheSArPSAwLjU7XG5cbiAgICAgICAgLy8gQXN0cm9ub21pY2FsIHRvIGNpdmlsXG4gICAgICAgIGxldCB0aW1lID0gKChqdWxpYW5EYXkgLSBNYXRoLmZsb29yKGp1bGlhbkRheSkpICogdGhpcy5EYXlJblNlY29uZCkgKyAwLjU7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgXHRcImhvdXJcIjogTWF0aC5mbG9vcih0aW1lIC8gMzYwMCksXG4gICAgICAgIFx0XCJtaW51dGVcIjogTWF0aC5mbG9vcigodGltZSAvIDYwKSAlIDYwKSxcbiAgICAgICAgXHRcInNlY29uZFwiOiBNYXRoLmZsb29yKHRpbWUgJSA2MClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhZGRUaW1lVG9KdWxpYW5EYXkgKGp1bGlhbkRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcbiAgICBcdGxldCB0aW1lc3RhbXAgPSB0aGlzLmp1bGlhbkRheVRvVGltZXN0YW1wKGp1bGlhbkRheSk7XG4gICAgXHR0aW1lc3RhbXAgKz0gKGhvdXIgKiAzNjAwKSArIChtaW51dGUgKiA2MCkgKyBzZWNvbmQ7XG5cbiAgICBcdHJldHVybiB0aGlzLnRpbWVzdGFtcFRvSnVsaWFuRGF5KHRpbWVzdGFtcCk7XG4gICAgfVxuXG4gICAgZGF0ZVRvSnVsaWFuRGF5ICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGRhdGVUb1RpbWVzdGFtcCAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcbiAgICAgICAgbGV0IGp1bGlhbkRheSA9IHRoaXMuZGF0ZVRvSnVsaWFuRGF5ICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuanVsaWFuRGF5VG9UaW1lc3RhbXAoanVsaWFuRGF5KTtcbiAgICB9XG5cbiAgICBqdWxpYW5EYXlUb0RhdGUgKGp1bGlhbkRheSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIHRpbWVzdGFtcFRvRGF0ZSAodGltZXN0YW1wKSB7XG4gICAgICAgIGxldCBqdWxpYW5EYXkgPSB0aGlzLnRpbWVzdGFtcFRvSnVsaWFuRGF5KHRpbWVzdGFtcCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuanVsaWFuRGF5VG9EYXRlKGp1bGlhbkRheSk7XG4gICAgfVxuXG4gICAgZGF5c0luTW9udGggKHllYXIsIG1vbnRoKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGRheU9mV2VlayAodGltZXN0YW1wKSB7XG4gICAgICAgIGxldCBqdWxpYW5EYXkgPSB0aGlzLnRpbWVzdGFtcFRvSnVsaWFuRGF5KHRpbWVzdGFtcCk7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZChNYXRoLmZsb29yKChqdWxpYW5EYXkgKyAyLjUpKSwgNyk7XG4gICAgfVxuXG4gICAgZGF5T2ZZZWFyICh0aW1lc3RhbXApIHtcbiAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gdGhpcy50aW1lc3RhbXBUb0RhdGUodGltZXN0YW1wKTtcbiAgICAgICAgbGV0IGZpcnN0T2ZZZWFyanVsaWFuRGF5ID0gdGhpcy5kYXRlVG9KdWxpYW5EYXkoY3VycmVudERhdGUueWVhciwgMSwgMSwgMCwgMCwgMCk7XG4gICAgICAgIGxldCBjdXJyZW50anVsaWFuRGF5ID0gdGhpcy5kYXRlVG9KdWxpYW5EYXkoY3VycmVudERhdGUueWVhciwgY3VycmVudERhdGUubW9udGgsIGN1cnJlbnREYXRlLmRheSwgY3VycmVudERhdGUuaG91ciwgY3VycmVudERhdGUubWludXRlLCBjdXJyZW50RGF0ZS5zZWNvbmQpO1xuXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGN1cnJlbnRqdWxpYW5EYXkgLSBmaXJzdE9mWWVhcmp1bGlhbkRheSArIDEpO1xuICAgIH1cblxuICAgIHdlZWtPZk1vbnRoICh0aW1lc3RhbXApIHtcbiAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gdGhpcy50aW1lc3RhbXBUb0RhdGUodGltZXN0YW1wKTtcbiAgICAgICAgbGV0IGZpcnN0RGF5T2ZNb250aFRpbWVzdGFtcCA9IHRoaXMuZGF0ZVRvVGltZXN0YW1wKGN1cnJlbnREYXRlLnllYXIsIGN1cnJlbnREYXRlLm1vbnRoLCAxLCBjdXJyZW50RGF0ZS5ob3VyLCBjdXJyZW50RGF0ZS5taW51dGUsIGN1cnJlbnREYXRlLnNlY29uZCk7XG4gICAgICAgIGxldCBkYXlPZldlZWtJbkN1cnJlbnREYXlPZk1vbnRoID0gdGhpcy5kYXlPZldlZWsodGltZXN0YW1wKTtcbiAgICAgICAgbGV0IGRheU9mV2Vla0luRmlyc3REYXlPZk1vbnRoID0gdGhpcy5kYXlPZldlZWsoZmlyc3REYXlPZk1vbnRoVGltZXN0YW1wKTtcblxuICAgICAgICBsZXQgd2VlayA9IDE7XG5cbiAgICAgICAgaWYoY3VycmVudERhdGUuZGF5IDw9IDcgLSBkYXlPZldlZWtJbkZpcnN0RGF5T2ZNb250aCkge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWs7XG4gICAgICAgIH1cblxuICAgICAgICB3ZWVrICs9ICgoY3VycmVudERhdGUuZGF5IC0gKCg3IC0gZGF5T2ZXZWVrSW5GaXJzdERheU9mTW9udGgpICsgKGRheU9mV2Vla0luQ3VycmVudERheU9mTW9udGggKyAxKSkpIC8gNykgKyAxO1xuXG4gICAgICAgIHJldHVybiB3ZWVrO1xuICAgIH1cblxuICAgIHdlZWtPZlllYXIgKHRpbWVzdGFtcCkge1xuICAgICAgICBsZXQgY3VycmVudERhdGUgPSB0aGlzLnRpbWVzdGFtcFRvRGF0ZSh0aW1lc3RhbXApO1xuICAgICAgICBsZXQgZGF5T2ZZZWFyID0gdGhpcy5kYXlPZlllYXIodGltZXN0YW1wKTtcbiAgICAgICAgbGV0IGZpcnN0RGF5T2ZZZWFyVGltZXN0YW1wID0gdGhpcy5kYXRlVG9UaW1lc3RhbXAoY3VycmVudERhdGUueWVhciwgMSwgMSwgY3VycmVudERhdGUuaG91ciwgY3VycmVudERhdGUubWludXRlLCBjdXJyZW50RGF0ZS5zZWNvbmQpO1xuICAgICAgICBsZXQgZGF5T2ZXZWVrSW5DdXJyZW50RGF5T2ZZZWFyID0gdGhpcy5kYXlPZldlZWsodGltZXN0YW1wKTtcbiAgICAgICAgbGV0IGRheU9mV2Vla0luRmlyc3REYXlPZlllYXIgPSB0aGlzLmRheU9mV2VlayhmaXJzdERheU9mWWVhclRpbWVzdGFtcCk7XG5cbiAgICAgICAgbGV0IHdlZWsgPSAxO1xuXG4gICAgICAgIGlmKGRheU9mWWVhciA8PSA3IC0gZGF5T2ZXZWVrSW5GaXJzdERheU9mWWVhcikge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWs7XG4gICAgICAgIH1cblxuICAgICAgICB3ZWVrICs9ICgoZGF5T2ZZZWFyIC0gKCg3IC0gZGF5T2ZXZWVrSW5GaXJzdERheU9mWWVhcikgKyAoZGF5T2ZXZWVrSW5DdXJyZW50RGF5T2ZZZWFyICsgMSkpKSAvIDcpICsgMTtcblxuICAgICAgICByZXR1cm4gd2VlazsgICBcbiAgICB9XG5cbiAgICBtb2QgKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgLSAoYiAqIE1hdGguZmxvb3IoYSAvIGIpKTtcbiAgICB9XG5cbiAgICBpc0xlYXAgKHllYXIpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbn1cbiIsIlxuY2xhc3MgQ2FsZW5kYXJNYW5hZ2VyIHtcblx0XG5cdGNvbnN0cnVjdG9yICh0aW1lc3RhbXAsIHRpbWV6b25lT2Zmc2V0KSB7XG5cdFx0dGhpcy5fZ3JlZ29yaWFuID0gbmV3IEdyZWdvcmlhbkNhbGVuZGFyKCk7XHRcblx0XHR0aGlzLl9qYWxhbGkgPSBuZXcgSmFsYWxpQ2FsZW5kYXIoKTtcdFxuXHRcdHRoaXMuX2lzbGFtaWMgPSBuZXcgSXNsYW1pY0NhbGVuZGFyKCk7XHRcblx0XHR0aGlzLl9zaGlhID0gbmV3IFNoaWFDYWxlbmRhcigpO1xuXHRcdHRoaXMuX2N1cnJlbnRDYWxlbmRhciA9IG51bGw7XG5cdFx0dGhpcy5fZm9ybWF0dGVyID0gUGFzb29uYXRlLmZvcm1hdHRlcjtcblxuXHRcdGxldCBkYXRlID0gbmV3IERhdGUoKTtcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgfHwgTWF0aC5mbG9vcihkYXRlLmdldFRpbWUoKSAvIDEwMDApOyAvLyBtaWxpc2Vjb25kIHRvIHNlY29uZHNcblx0XHR0aGlzLl90aW1lem9uZU9mZnNldCA9IHRpbWV6b25lT2Zmc2V0IHx8IC1kYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDsgLy8gbWludXRlICogNjAgPSBvZmZzZXQgaW4gc2Vjb25kc1xuXHR9XG5cblx0Z3JlZ29yaWFuICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fZ3JlZ29yaWFuLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1x0XHRcblx0XHR5ZWFyID0geWVhciB8fCBkYXRlLnllYXI7XG5cdFx0bW9udGggPSBtb250aCB8fCBkYXRlLm1vbnRoO1xuXHRcdGRheSA9IGRheSB8fCBkYXRlLmRheTtcblx0XHRob3VyID0gaG91ciB8fCBkYXRlLmhvdXI7XG5cdFx0bWludXRlID0gbWludXRlIHx8IGRhdGUubWludXRlO1xuXHRcdHNlY29uZCA9IHNlY29uZCB8fCBkYXRlLnNlY29uZDtcblxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2dyZWdvcmlhbi5kYXRlVG9UaW1lc3RhbXAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xuXHRcdHRoaXMuX2N1cnJlbnRDYWxlbmRhciA9IHRoaXMuX2dyZWdvcmlhbjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGphbGFsaSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2phbGFsaS50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcdFx0XG5cdFx0eWVhciA9IHllYXIgfHwgZGF0ZS55ZWFyO1xuXHRcdG1vbnRoID0gbW9udGggfHwgZGF0ZS5tb250aDtcblx0XHRkYXkgPSBkYXkgfHwgZGF0ZS5kYXk7XG5cdFx0aG91ciA9IGhvdXIgfHwgZGF0ZS5ob3VyO1xuXHRcdG1pbnV0ZSA9IG1pbnV0ZSB8fCBkYXRlLm1pbnV0ZTtcblx0XHRzZWNvbmQgPSBzZWNvbmQgfHwgZGF0ZS5zZWNvbmQ7XG5cblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aGlzLl9qYWxhbGkuZGF0ZVRvVGltZXN0YW1wKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcblx0XHR0aGlzLl9jdXJyZW50Q2FsZW5kYXIgPSB0aGlzLl9qYWxhbGk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpc2xhbWljICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5faXNsYW1pYy50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcdFx0XG5cdFx0eWVhciA9IHllYXIgfHwgZGF0ZS55ZWFyO1xuXHRcdG1vbnRoID0gbW9udGggfHwgZGF0ZS5tb250aDtcblx0XHRkYXkgPSBkYXkgfHwgZGF0ZS5kYXk7XG5cdFx0aG91ciA9IGhvdXIgfHwgZGF0ZS5ob3VyO1xuXHRcdG1pbnV0ZSA9IG1pbnV0ZSB8fCBkYXRlLm1pbnV0ZTtcblx0XHRzZWNvbmQgPSBzZWNvbmQgfHwgZGF0ZS5zZWNvbmQ7XG5cblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aGlzLl9pc2xhbWljLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XG5cdFx0dGhpcy5fY3VycmVudENhbGVuZGFyID0gdGhpcy5faXNsYW1pYztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNoaWEgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9zaGlhLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1x0XHRcblx0XHR5ZWFyID0geWVhciB8fCBkYXRlLnllYXI7XG5cdFx0bW9udGggPSBtb250aCB8fCBkYXRlLm1vbnRoO1xuXHRcdGRheSA9IGRheSB8fCBkYXRlLmRheTtcblx0XHRob3VyID0gaG91ciB8fCBkYXRlLmhvdXI7XG5cdFx0bWludXRlID0gbWludXRlIHx8IGRhdGUubWludXRlO1xuXHRcdHNlY29uZCA9IHNlY29uZCB8fCBkYXRlLnNlY29uZDtcblxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX3NoaWEuZGF0ZVRvVGltZXN0YW1wKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcblx0XHR0aGlzLl9jdXJyZW50Q2FsZW5kYXIgPSB0aGlzLl9zaGlhO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Zm9ybWF0IChwYXR0ZXJuLCBsb2NhbGUpIHtcblx0XHR0aGlzLl9mb3JtYXR0ZXIuc2V0Q2FsZW5kYXIodGhpcyk7XG5cdFx0cmV0dXJuIHRoaXMuX2Zvcm1hdHRlci5mb3JtYXQocGF0dGVybiwgbG9jYWxlKTtcblx0fVx0XG59XG5cbk9iamVjdC5hc3NpZ24oQ2FsZW5kYXJNYW5hZ2VyLnByb3RvdHlwZSwgQmFzZU1ldGhvZHNNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbGVuZGFyTWFuYWdlci5wcm90b3R5cGUsIEFkZGl0aW9uQW5kU3Vic3RyYWN0aW9uTWl4aW4pO1xuIiwiXG5jbGFzcyBHcmVnb3JpYW5DYWxlbmRhciBleHRlbmRzIENhbGVuZGFyIHtcblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLkdyZWdvcmlhbkVwb2NoID0gMTcyMTQyNS41O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ0dyZWdvcmlhbkVwb2NoJywge1xuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgICAgICB9KTtcblx0fVxuXG5cdGRhdGVUb0p1bGlhbkRheSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcblx0XHRsZXQganVsaWFuRGF5ID0gdGhpcy5HcmVnb3JpYW5FcG9jaCAtIDE7XG5cblx0XHRqdWxpYW5EYXkgKz0gMzY1ICogKHllYXIgLSAxKTtcblx0XHRqdWxpYW5EYXkgKz0gTWF0aC5mbG9vcigoeWVhciAtIDEpIC8gNCk7XG5cdFx0anVsaWFuRGF5ICs9IE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDEwMCkgKiAtMTtcblx0XHRqdWxpYW5EYXkgKz0gTWF0aC5mbG9vcigoeWVhciAtIDEpIC8gNDAwKTtcblx0XHRqdWxpYW5EYXkgKz0gTWF0aC5mbG9vcigoKCgzNjcgKiBtb250aCkgLSAzNjIpIC8gMTIpICsgKChtb250aCA8PSAyKSA/IDAgOiAodGhpcy5pc0xlYXAoeWVhcikgPyAtMSA6IC0yKSkgKyBkYXkpO1xuXG5cdFx0cmV0dXJuIHRoaXMuYWRkVGltZVRvSnVsaWFuRGF5KGp1bGlhbkRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xuXHR9XG5cbiAgICBqdWxpYW5EYXlUb0RhdGUgKGp1bGlhbkRheSkge1xuICAgIFx0bGV0IHRpbWUgPSB0aGlzLmV4dHJhY3RKdWxpYW5EYXlUaW1lKGp1bGlhbkRheSk7XG4gICAgXHRcbiAgICBcdGp1bGlhbkRheSA9IHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUoanVsaWFuRGF5KTtcblxuICAgIFx0bGV0IHdqZCA9IE1hdGguZmxvb3IoanVsaWFuRGF5IC0gMC41KSArIDAuNTtcbiAgICAgICAgbGV0IGRlcG9jaCA9IHdqZCAtIHRoaXMuR3JlZ29yaWFuRXBvY2g7XG4gICAgICAgIGxldCBxdWFkcmljZW50ID0gTWF0aC5mbG9vcihkZXBvY2ggLyAxNDYwOTcpO1xuICAgICAgICBsZXQgZHFjID0gdGhpcy5tb2QoZGVwb2NoLCAxNDYwOTcpO1xuICAgICAgICBsZXQgY2VudCA9IE1hdGguZmxvb3IoZHFjIC8gMzY1MjQpO1xuICAgICAgICBsZXQgZGNlbnQgPSB0aGlzLm1vZChkcWMsIDM2NTI0KTtcbiAgICAgICAgbGV0IHF1YWQgPSBNYXRoLmZsb29yKGRjZW50IC8gMTQ2MSk7XG4gICAgICAgIGxldCBkcXVhZCA9IHRoaXMubW9kKGRjZW50LCAxNDYxKTtcbiAgICAgICAgbGV0IHlpbmRleCA9IE1hdGguZmxvb3IoZHF1YWQgLyAzNjUpO1xuICAgICAgICBsZXQgeWVhciA9IChxdWFkcmljZW50ICogNDAwKSArIChjZW50ICogMTAwKSArIChxdWFkICogNCkgKyB5aW5kZXg7XG4gICAgICAgIGlmICghKChjZW50ID09IDQpIHx8ICh5aW5kZXggPT0gNCkpKSB7XG4gICAgICAgICAgICB5ZWFyKys7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHllYXJkYXkgPSB3amQgLSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIDEsIDEsIHRpbWUuaG91ciwgdGltZS5taW51dGUsIHRpbWUuc2Vjb25kKSk7XG4gICAgICAgIGxldCBsZWFwYWRqID0gKHdqZCA8IHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoeWVhciwgMywgMSwgdGltZS5ob3VyLCB0aW1lLm1pbnV0ZSwgdGltZS5zZWNvbmQpKSA/IDAgOiAodGhpcy5pc0xlYXAoeWVhcikgPyAxIDogMikpO1xuICAgICAgICBsZXQgbW9udGggPSBNYXRoLmZsb29yKCgoKHllYXJkYXkgKyBsZWFwYWRqKSAqIDEyKSArIDM3MykgLyAzNjcpO1xuICAgICAgICBsZXQgZGF5ID0gKHdqZCAtIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoeWVhciwgbW9udGgsIDEsIHRpbWUuaG91ciwgdGltZS5taW51dGUsIHRpbWUuc2Vjb25kKSkpICsgMTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICBcdFwieWVhclwiOiB5ZWFyLFxuICAgICAgICBcdFwibW9udGhcIjogbW9udGgsXG4gICAgICAgIFx0XCJkYXlcIjogZGF5LFxuICAgICAgICBcdFwiaG91clwiOiB0aW1lLmhvdXIsXG4gICAgICAgIFx0XCJtaW51dGVcIjogdGltZS5taW51dGUsXG4gICAgICAgIFx0XCJzZWNvbmRcIjogdGltZS5zZWNvbmQsXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGRheXNJbk1vbnRoICh5ZWFyLCBtb250aCkge1xuICAgICAgICBsZXQgZ3JlZ29yaWFuRGF5c0luTW9udGggPSBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG4gICAgICAgIFxuICAgICAgICBpZiAobW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUV4Y2VwdGlvbihcIiRtb250aCBPdXQgT2YgUmFuZ2UgRXhjZXB0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoeWVhciAmJiB0aGlzLmlzTGVhcCh5ZWFyKSAmJiBtb250aCA9PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gMjk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBncmVnb3JpYW5EYXlzSW5Nb250aFttb250aCAtIDFdO1xuICAgIH1cblxuICAgIGlzTGVhcCAoeWVhcikge1xuICAgICAgICByZXR1cm4gKCh5ZWFyICUgNCkgPT0gMCkgJiYgKCEoKCh5ZWFyICUgMTAwKSA9PSAwKSAmJiAoKHllYXIgJSA0MDApICE9IDApKSk7XG4gICAgfVxufVxuIiwiXG5jbGFzcyBJc2xhbWljQ2FsZW5kYXIgZXh0ZW5kcyBDYWxlbmRhciB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuXHRcdHRoaXMuSXNsYW1pY0Vwb2NoID0gMTk0ODQzOS41O1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnSXNsYW1pY0Vwb2NoJywge1xuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgICAgICB9KTtcblx0fVxuXG5cdGRhdGVUb0p1bGlhbkRheSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcbiAgICAgICAgbGV0IGp1bGlhbkRheSA9IGRheTtcblxuICAgICAgICBqdWxpYW5EYXkgKz0gTWF0aC5jZWlsKChtb250aCAtIDEpICogMjkuNSk7XG4gICAgICAgIGp1bGlhbkRheSArPSAoeWVhciAtIDEpICogMzU0O1xuICAgICAgICBqdWxpYW5EYXkgKz0gTWF0aC5mbG9vcigoKDExICogeWVhcikgKyAzKSAvIDMwKTtcbiAgICAgICAganVsaWFuRGF5ICs9IHRoaXMuSXNsYW1pY0Vwb2NoIC0gMTtcblxuXHRcdHJldHVybiB0aGlzLmFkZFRpbWVUb0p1bGlhbkRheShqdWxpYW5EYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcblx0fVxuXG4gICAganVsaWFuRGF5VG9EYXRlIChqdWxpYW5EYXkpIHtcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLmV4dHJhY3RKdWxpYW5EYXlUaW1lKGp1bGlhbkRheSk7XG4gICAgICAgIFxuICAgICAgICBqdWxpYW5EYXkgPSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKGp1bGlhbkRheSk7XG4gICAgICAgIGp1bGlhbkRheSA9IE1hdGguZmxvb3IoanVsaWFuRGF5KSArIDAuNTtcbiAgICAgICAgXG4gICAgICAgIGxldCB5ZWFyID0gTWF0aC5mbG9vcigoKChqdWxpYW5EYXkgLSB0aGlzLklzbGFtaWNFcG9jaCkgKiAzMCkgKyAxMDY0NikgLyAxMDYzMSk7XG4gICAgICAgIGxldCBtb250aCA9IE1hdGgubWluKDEyLCBNYXRoLmNlaWwoKGp1bGlhbkRheSAtICgyOSArIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoeWVhciwgMSwgMSwgdGltZS5ob3VyLCB0aW1lLm1pbnV0ZSwgdGltZS5zZWNvbmQpKSkpIC8gMjkuNSkgKyAxKTtcbiAgICAgICAgbGV0IGRheSA9IChqdWxpYW5EYXkgLSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIG1vbnRoLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSArIDE7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgXHRcInllYXJcIjogeWVhcixcbiAgICAgICAgXHRcIm1vbnRoXCI6IG1vbnRoLFxuICAgICAgICBcdFwiZGF5XCI6IGRheSxcbiAgICAgICAgXHRcImhvdXJcIjogdGltZS5ob3VyLFxuICAgICAgICBcdFwibWludXRlXCI6IHRpbWUubWludXRlLFxuICAgICAgICBcdFwic2Vjb25kXCI6IHRpbWUuc2Vjb25kLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGF5c0luTW9udGggKHllYXIsIG1vbnRoKSB7XG4gICAgICAgIGxldCBpc2xhbWljRGF5c0luTW9udGggPSBbMzAsIDI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAyOV07IC8vMzBcblxuICAgICAgICBpZiAobW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUV4Y2VwdGlvbihcIiRtb250aCBPdXQgT2YgUmFuZ2UgRXhjZXB0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoeWVhciAmJiB0aGlzLmlzTGVhcCh5ZWFyKSAmJiBtb250aCA9PSAxMikge1xuICAgICAgICAgICAgcmV0dXJuIDMwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaXNsYW1pY0RheXNJbk1vbnRoW21vbnRoIC0gMV07XG4gICAgfVxuXG4gICAgaXNMZWFwICh5ZWFyKSB7XG4gICAgICAgIGxldCBpc0xlYXAgPSAoKCh5ZWFyICogMTEpICsgMTQpICUgMzApIDwgMTE7XG4gICAgICAgIHJldHVybiBpc0xlYXA7XG4gICAgfVxufVxuIiwiXG5jbGFzcyBKYWxhbGlDYWxlbmRhciBleHRlbmRzIENhbGVuZGFyIHtcblx0XG5cdGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuXHRcdHRoaXMuSmFsYWxpRXBvY2ggPSAxOTQ4MzIwLjU7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdKYWxhbGlFcG9jaCcsIHtcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG5cdH1cblxuXHRkYXRlVG9KdWxpYW5EYXkgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XG5cdFx0bGV0IGVwb2NoQmFzZSA9IHllYXIgLSAoeWVhciA+PSAwID8gNDc0IDogNDczKTtcbiAgICAgICAgbGV0IGVwb2NoWWVhciA9IDQ3NCArIHRoaXMubW9kKGVwb2NoQmFzZSwgMjgyMCk7XG4gICAgICAgIGxldCBqdWxpYW5EYXkgPSBkYXk7XG5cbiAgICAgICAganVsaWFuRGF5ICs9IG1vbnRoIDw9IDcgPyAobW9udGggLSAxKSAqIDMxIDogKChtb250aCAtIDEpICogMzApICsgNjtcbiAgICAgICAganVsaWFuRGF5ICs9IE1hdGguZmxvb3IoKChlcG9jaFllYXIgKiA2ODIpIC0gMTEwKSAvIDI4MTYpO1xuICAgICAgICBqdWxpYW5EYXkgKz0gKGVwb2NoWWVhciAtIDEpICogMzY1O1xuICAgICAgICBqdWxpYW5EYXkgKz0gTWF0aC5mbG9vcihlcG9jaEJhc2UgLyAyODIwKSAqIDEwMjk5ODM7XG4gICAgICAgIGp1bGlhbkRheSArPSB0aGlzLkphbGFsaUVwb2NoIC0gMTtcblxuXHRcdHJldHVybiB0aGlzLmFkZFRpbWVUb0p1bGlhbkRheShqdWxpYW5EYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcblx0fVxuXG4gICAganVsaWFuRGF5VG9EYXRlIChqdWxpYW5EYXkpIHtcbiAgICBcdGxldCB0aW1lID0gdGhpcy5leHRyYWN0SnVsaWFuRGF5VGltZShqdWxpYW5EYXkpO1xuICAgIFx0XG4gICAgXHRqdWxpYW5EYXkgPSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKGp1bGlhbkRheSk7XG5cbiAgICBcdGp1bGlhbkRheSA9IE1hdGguZmxvb3IoanVsaWFuRGF5KSArIDAuNTtcblxuICAgICAgICBsZXQgZGVwb2NoID0ganVsaWFuRGF5IC0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZSh0aGlzLmRhdGVUb0p1bGlhbkRheSg0NzUsIDEsIDEsIHRpbWUuaG91ciwgdGltZS5taW51dGUsIHRpbWUuc2Vjb25kKSk7XG4gICAgICAgIGxldCBjeWNsZSA9IE1hdGguZmxvb3IoZGVwb2NoIC8gMTAyOTk4Myk7XG4gICAgICAgIGxldCBjeWVhciA9IHRoaXMubW9kKGRlcG9jaCwgMTAyOTk4Myk7ICAgICAgICBcbiAgICBcdGxldCB5Y3ljbGUsIGF1eDEsIGF1eDI7XG5cbiAgICAgICAgaWYgKGN5ZWFyID09IDEwMjk5ODIpIHtcbiAgICAgICAgICAgIHljeWNsZSA9IDI4MjA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdXgxID0gTWF0aC5mbG9vcihjeWVhciAvIDM2Nik7XG4gICAgICAgICAgICBhdXgyID0gdGhpcy5tb2QoY3llYXIsIDM2Nik7XG4gICAgICAgICAgICB5Y3ljbGUgPSBNYXRoLmZsb29yKCgoMjEzNCAqIGF1eDEpICsgKDI4MTYgKiBhdXgyKSArIDI4MTUpIC8gMTAyODUyMikgKyBhdXgxICsgMTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IHllYXIgPSB5Y3ljbGUgKyAoMjgyMCAqIGN5Y2xlKSArIDQ3NDtcbiAgICAgICAgXG4gICAgICAgIGlmICh5ZWFyIDw9IDApIHtcbiAgICAgICAgICAgIHllYXItLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IHlkYXkgPSAoanVsaWFuRGF5IC0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZSh0aGlzLmRhdGVUb0p1bGlhbkRheSh5ZWFyLCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSArIDE7XG4gICAgICAgIGxldCBtb250aCA9ICh5ZGF5IDw9IDE4NikgPyBNYXRoLmNlaWwoeWRheSAvIDMxKSA6IE1hdGguY2VpbCgoeWRheSAtIDYpIC8gMzApO1xuICAgICAgICBsZXQgZGF5ID0gKGp1bGlhbkRheSAtIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoeWVhciwgbW9udGgsIDEsIHRpbWUuaG91ciwgdGltZS5taW51dGUsIHRpbWUuc2Vjb25kKSkpICsgMTtcbiAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICBcdFwieWVhclwiOiB5ZWFyLFxuICAgICAgICBcdFwibW9udGhcIjogbW9udGgsXG4gICAgICAgIFx0XCJkYXlcIjogZGF5LFxuICAgICAgICBcdFwiaG91clwiOiB0aW1lLmhvdXIsXG4gICAgICAgIFx0XCJtaW51dGVcIjogdGltZS5taW51dGUsXG4gICAgICAgIFx0XCJzZWNvbmRcIjogdGltZS5zZWNvbmQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYXlzSW5Nb250aCAoeWVhciwgbW9udGgpIHtcbiAgICAgICAgbGV0IGdyZWdvcmlhbkRheXNJbk1vbnRoID0gWzMxLCAzMSwgMzEsIDMxLCAzMSwgMzEsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMjldOyAvLzMwXG4gICAgICAgIFxuICAgICAgICBpZiAobW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUV4Y2VwdGlvbihcIiRtb250aCBPdXQgT2YgUmFuZ2UgRXhjZXB0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoeWVhciAmJiB0aGlzLmlzTGVhcCh5ZWFyKSAmJiBtb250aCA9PSAxMikge1xuICAgICAgICAgICAgcmV0dXJuIDMwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZ3JlZ29yaWFuRGF5c0luTW9udGhbbW9udGggLSAxXTtcbiAgICB9XG5cbiAgICBpc0xlYXAgKHllYXIpIHtcbiAgICAgICAgcmV0dXJuICgoKCgoKHllYXIgLSAoKHllYXIgPiAwKSA/IDQ3NCA6IDQ3MykpICUgMjgyMCkgKyA0NzQpICsgMzgpICogNjgyKSAlIDI4MTYpIDwgNjgyO1xuICAgIH1cbn1cbiIsIlxuY2xhc3MgU2hpYUNhbGVuZGFyIGV4dGVuZHMgQ2FsZW5kYXIge1xuXHRcblx0Y29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcblx0XHR0aGlzLlNoaWFFcG9jaCA9IDE5NDg0MzkuNTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ1NoaWFFcG9jaCcsIHtcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG5cdH1cblxuXHRkYXRlVG9KdWxpYW5EYXkgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XG4gICAgICAgIGxldCBkYXlPZlllYXIgPSBkYXk7XG4gICAgICAgIGxldCBqdWxpYW5EYXkgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbW9udGg7IGkrKykge1xuICAgICAgICAgICAgZGF5T2ZZZWFyICs9IHRoaXMuZGF5c0luTW9udGgoeWVhciwgaSk7XG4gICAgICAgIH1cblxuICAgICAgICBqdWxpYW5EYXkgKz0gZGF5T2ZZZWFyO1xuICAgICAgICBqdWxpYW5EYXkgKz0gKHllYXIgLSAxKSAqIDM1NDtcbiAgICAgICAganVsaWFuRGF5ICs9IE1hdGguZmxvb3IoKCgxMSAqIHllYXIpICsgMykgLyAzMCk7XG4gICAgICAgIGp1bGlhbkRheSArPSB0aGlzLlNoaWFFcG9jaCAtIDE7XG5cblx0XHRyZXR1cm4gdGhpcy5hZGRUaW1lVG9KdWxpYW5EYXkoanVsaWFuRGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XG5cdH1cblxuICAgIGp1bGlhbkRheVRvRGF0ZSAoanVsaWFuRGF5KSB7XG4gICAgICAgIGxldCB0aW1lID0gdGhpcy5leHRyYWN0SnVsaWFuRGF5VGltZShqdWxpYW5EYXkpO1xuICAgICAgICBcbiAgICAgICAganVsaWFuRGF5ID0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZShqdWxpYW5EYXkpO1xuICAgICAgICBqdWxpYW5EYXkgPSBNYXRoLmZsb29yKGp1bGlhbkRheSkgKyAwLjU7XG4gICAgICAgIFxuICAgICAgICBsZXQgeWVhciA9IE1hdGguZmxvb3IoKCgoanVsaWFuRGF5IC0gdGhpcy5TaGlhRXBvY2gpICogMzApICsgMTA2NDYpIC8gMTA2MzEpO1xuICAgICAgICBsZXQgbW9udGggPSBNYXRoLm1pbigxMiwgTWF0aC5jZWlsKChqdWxpYW5EYXkgLSAoMjkgKyB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIDEsIDEsIHRpbWUuaG91ciwgdGltZS5taW51dGUsIHRpbWUuc2Vjb25kKSkpKSAvIDI5LjUpICsgMSk7XG4gICAgICAgIGxldCBkYXlPZlllYXIgPSBqdWxpYW5EYXkgLSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIDEsIDEsIHRpbWUuaG91ciwgdGltZS5taW51dGUsIHRpbWUuc2Vjb25kKSk7XG4gICAgICAgIGxldCBkYXlzID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTI7IGkrKykge1xuICAgICAgICAgICAgZGF5cyArPSB0aGlzLmRheXNJbk1vbnRoKHllYXIsIGkpO1xuICAgICAgICAgICAgaWYgKGRheU9mWWVhciA8IGRheXMpIHtcbiAgICAgICAgICAgICAgICBtb250aCA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRheSA9IChqdWxpYW5EYXkgLSAoKGRheXMgLSB0aGlzLmRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSkgKyAoKHllYXIgLSAxKSAqIDM1NCkgKyBNYXRoLmZsb29yKCgzICsgKDExICogeWVhcikpIC8gMzApICsgdGhpcy5TaGlhRXBvY2gpICsgMSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgXHRcInllYXJcIjogeWVhcixcbiAgICAgICAgXHRcIm1vbnRoXCI6IG1vbnRoLFxuICAgICAgICBcdFwiZGF5XCI6IGRheSxcbiAgICAgICAgXHRcImhvdXJcIjogdGltZS5ob3VyLFxuICAgICAgICBcdFwibWludXRlXCI6IHRpbWUubWludXRlLFxuICAgICAgICBcdFwic2Vjb25kXCI6IHRpbWUuc2Vjb25kLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGF5c0luTW9udGggKHllYXIsIG1vbnRoKSB7XG4gXHRcdGxldCBpc2xhbWljRGF5c0luTW9udGggPSBbMzAsIDI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAyOV07IC8vMzBcbiAgICAgICAgbGV0IHNoaWFEYXlzSW5Nb250aEluWWVhcnMgPSB7XG4gICAgICAgICAgICAxNDM1OiBbMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAzMCwgMzAsIDI5LCAzMF0sXG4gICAgICAgICAgICAxNDM2OiBbMjksIDMwLCAyOSwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAzMF0sXG4gICAgICAgICAgICAxNDM3OiBbMjksIDMwLCAzMCwgMjksIDMwLCAyOSwgMjksIDMwLCAyOSwgMjksIDMwLCAzMF0sXG4gICAgICAgICAgICAxNDM4OiBbMjksIDMwLCAzMCwgMzAsIDI5LCAzMCwgMjksIDI5LCAzMCwgMjksIDI5LCAzMF0sXG4gICAgICAgICAgICAxNDM5OiBbMjksIDMwLCAzMCwgMzAsIDMwLCAyOSwgMzAsIDI5LCAyOSwgMzAsIDI5LCAyOV0sXG4gICAgICAgICAgICAxNDQwOiBbMzAsIDI5LCAzMCwgMzAsIDMwLCAyOSwgMjksIDMwLCAyOSwgMzAsIDI5LCAyOV0sXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG1vbnRoIDwgMSB8fCBtb250aCA+IDEyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFeGNlcHRpb24oXCIkbW9udGggT3V0IE9mIFJhbmdlIEV4Y2VwdGlvblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlhRGF5c0luTW9udGhJblllYXJzW3llYXJdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBpc2xhbWljRGF5c0luTW9udGhbbW9udGggLSAxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzaGlhRGF5c0luTW9udGhJblllYXJzW3llYXJdW21vbnRoIC0gMV07ICAgXHRcbiAgICB9XG5cbiAgICBpc0xlYXAgKHllYXIpIHtcbiAgICAgICAgbGV0IGlzTGVhcCA9ICgoKHllYXIgKiAxMSkgKyAxNCkgJSAzMCkgPCAxMTtcblx0XHRyZXR1cm4gaXNMZWFwO1xuXHR9XG59XG4iLCJcbmNsYXNzIERhdGVGb3JtYXQge1xuXHRcblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHRoaXMuX2NhbGVuZGFyID0gbnVsbDtcblx0fVxuXG5cdHNldENhbGVuZGFyIChjYWxlbmRhcikge1xuXHRcdHRoaXMuX2NhbGVuZGFyID0gY2FsZW5kYXIgaW5zdGFuY2VvZiBDYWxlbmRhck1hbmFnZXIgPyBjYWxlbmRhciA6IG51bGw7XG5cdH1cblxuXHRnZXRDYWxlbmRhciAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2NhbGVuZGFyO1xuXHR9XG5cblx0Zm9ybWF0ICgpIHtcblx0XHRpZih0aGlzLmdldENhbGVuZGFyKCkgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBcIlwiO1xuXHRcdH1cblxuXHRcdHJldHVybiBgJHt0aGlzLl9jYWxlbmRhci5nZXRZZWFyKCl9LSR7dGhpcy5fY2FsZW5kYXIuZ2V0TW9udGgoKX0tJHt0aGlzLl9jYWxlbmRhci5nZXREYXkoKX0gJHt0aGlzLl9jYWxlbmRhci5nZXRIb3VyKCl9OiR7dGhpcy5fY2FsZW5kYXIuZ2V0TWludXRlKCl9OiR7dGhpcy5fY2FsZW5kYXIuZ2V0U2Vjb25kKCl9YDtcblx0fVxufVxuIiwiXG5jbGFzcyBTaW1wbGVEYXRlRm9ybWF0IGV4dGVuZHMgRGF0ZUZvcm1hdCB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZvcm1hdCAocGF0dGVybiwgbG9jYWxlKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcGlsZShwYXR0ZXJuLCBsb2NhbGUpO1xuXHR9XG5cblx0Y29tcGlsZSAocGF0dGVybiwgbG9jYWxlKSB7XG5cdFx0cGF0dGVybiA9IFN0cmluZyhwYXR0ZXJuKS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0bGV0IHJlc3VsdCA9IHBhdHRlcm47XG5cblx0XHRjb25zdCBTaWducyA9IFsneScsICdtJywgJ2QnXTtcblx0XHRjb25zdCBGdWxsWWVhciA9ICd5eXl5Jztcblx0XHRjb25zdCBTaG9ydFllYXIgPSAneXknO1xuXHRcdGNvbnN0IE1vbnRoID0gJ21tJztcblx0XHRjb25zdCBTaW5nbGVNb250aCA9ICdtJztcblx0XHRjb25zdCBEYXkgPSAnZGQnO1xuXHRcdGNvbnN0IFNpbmdsZURheSA9ICdkJztcblxuXHRcdGxldCBjaGFycyA9IFtdO1xuXHRcdGxldCBwcmV2Q2hhciA9ICcnO1xuXHRcdGxldCBjdXJyQ2hhciA9ICcnO1xuXHRcdGxldCBpbmRleCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBhdHRlcm4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGN1cnJDaGFyID0gU2lnbnMuaW5jbHVkZXMocGF0dGVybltpXSkgPyBwYXR0ZXJuW2ldIDogJyc7XG5cblx0XHRcdGlmKGN1cnJDaGFyID09PSAnJykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoY3VyckNoYXIgPT09IHByZXZDaGFyKSB7XG5cdFx0XHRcdGNoYXJzW2luZGV4XS50ZXh0ICs9IGN1cnJDaGFyO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2hhcnNbKytpbmRleF0gPSB7IHRleHQ6IGN1cnJDaGFyLCBwb3NpdGlvbjogaX07XG5cdFx0XHR9XG5cdFx0XHRwcmV2Q2hhciA9IGN1cnJDaGFyO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgaW4gY2hhcnMpIHtcblx0XHRcdHN3aXRjaCAoY2hhcnNbaV0udGV4dCkge1xuXHRcdFx0XHRjYXNlIEZ1bGxZZWFyOlxuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKEZ1bGxZZWFyLCB0aGlzLmdldENhbGVuZGFyKCkuZ2V0WWVhcigpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgU2hvcnRZZWFyOlxuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKFNob3J0WWVhciwgU3RyaW5nKHRoaXMuZ2V0Q2FsZW5kYXIoKS5nZXRZZWFyKCkpLnN1YnN0cigtMiwgMikpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBTaW5nbGVNb250aDpcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShTaW5nbGVNb250aCwgdGhpcy5nZXRDYWxlbmRhcigpLmdldE1vbnRoKCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBNb250aDpcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShNb250aCwgdGhpcy5nZXRDYWxlbmRhcigpLmdldE1vbnRoKCkgPiA5ID8gdGhpcy5nZXRDYWxlbmRhcigpLmdldE1vbnRoKCkgOiAnMCcgKyB0aGlzLmdldENhbGVuZGFyKCkuZ2V0TW9udGgoKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFNpbmdsZURheTpcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShTaW5nbGVEYXksIHRoaXMuZ2V0Q2FsZW5kYXIoKS5nZXREYXkoKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIERheTpcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShEYXksIHRoaXMuZ2V0Q2FsZW5kYXIoKS5nZXREYXkoKSA+IDkgPyB0aGlzLmdldENhbGVuZGFyKCkuZ2V0RGF5KCkgOiAnMCcgKyB0aGlzLmdldENhbGVuZGFyKCkuZ2V0RGF5KCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuIiwiXG5jbGFzcyBDb25zdGFudHMge1xuXHQgXG5cdGNvbnN0cnVjdG9yICgpIHtcblxuXHR9XG59XG4iLCJcbmNsYXNzIExvY2FsaXphdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuX2xhbmdzID0ge307XG4gICAgICAgIHRoaXMuX2xvY2FsZSA9ICdmYSc7XG4gICAgfVxuXG4gICAgc2V0TGFuZyAobmFtZSwgdHJhbnMpIHtcbiAgICAgICAgdGhpcy5fbGFuZ3NbbmFtZV0gPSB0cmFucztcbiAgICB9XG5cbiAgICBzZXRMb2NhbGUobG9jYWxlKSB7XG4gICAgICAgIHRoaXMuX2xvY2FsZSA9IGxvY2FsZSB8fCB0aGlzLl9sb2NhbGU7XG4gICAgfVxuXG4gICAgZ2V0TG9jYWxlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgICB9XG5cbiAgICBpc0xvY2FsZSAobG9jYWxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGUgPT09IGxvY2FsZTtcbiAgICB9XG5cbiAgICBoYXNUcmFuc0tleSAoa2V5LCBsb2NhbGUpIHtcbiAgICAgICAgbGV0IHN1YktleXMgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgICAgaWYgKHRoaXMuX2xhbmdzW2xvY2FsZV0gPT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9sYW5nc1tsb2NhbGVdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YktleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzdWJLZXlzW2ldIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFtzdWJLZXlzW2ldXTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBnZXRUcmFucyAoa2V5LCBsb2NhbGUpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuaGFzVHJhbnNLZXkoa2V5LCBsb2NhbGUpO1xuICAgICAgICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0IDoga2V5O1xuICAgIH1cblxuICAgIHRyYW5zIChrZXksIGxvY2FsZSkge1xuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgdGhpcy5fbG9jYWxlO1xuICAgICAgICBrZXkgPSBrZXkgfHwgJyc7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRyYW5zKGtleSwgbG9jYWxlKTtcbiAgICB9XG59XG4iLCJcbmNsYXNzIFBhc29vbmF0ZSBleHRlbmRzIENvbnN0YW50cyB7XG5cblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdGF0aWMgbWFrZSAodGltZXN0YW1wLCB0aW1lem9uZU9mZnNldCkge1xuXHRcdHJldHVybiBuZXcgQ2FsZW5kYXJNYW5hZ2VyKHRpbWVzdGFtcCwgdGltZXpvbmVPZmZzZXQpO1xuXHR9XG5cblx0c3RhdGljIHRyYW5zIChrZXksIGxvY2FsZSkge1xuXHRcdHJldHVybiBQYXNvb25hdGUubG9jYWxpemF0aW9uLnRyYW5zKGtleSwgbG9jYWxlKTtcblx0fVxuXG5cdHN0YXRpYyBzZXRMb2NhbGUgKGxvY2FsZSkge1xuXHRcdFBhc29vbmF0ZS5sb2NhbGl6YXRpb24uc2V0TG9jYWxlKGxvY2FsZSk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0TG9jYWwgKCkge1xuXHRcdHJldHVybiBQYXNvb25hdGUubG9jYWxpemF0aW9uLmdldExvY2FsKCk7XG5cdH1cblxuXHRzdGF0aWMgaXNMb2NhbCAobG9jYWxlKSB7XG5cdFx0cmV0dXJuIFBhc29vbmF0ZS5sb2NhbGl6YXRpb24uaXNMb2NhbChsb2NhbGUpO1xuXHR9XG5cblx0c3RhdGljIHNldEZvcm1hdHRlciAoZm9ybWF0dGVyKSB7XG5cdFx0UGFzb29uYXRlLmZvcm1hdHRlciA9IGZvcm1hdHRlciBpbnN0YW5jZW9mIERhdGVGb3JtYXQgPyBmb3JtYXR0ZXIgOiBuZXcgU2ltcGxlRGF0ZUZvcm1hdCgpO1xuXHR9XG59XG5cblBhc29vbmF0ZS5sb2NhbGl6YXRpb24gPSBuZXcgTG9jYWxpemF0aW9uKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUGFzb29uYXRlLCAnbG9jYWxpemF0aW9uJywge1xuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlXG59KTtcblxuUGFzb29uYXRlLmZvcm1hdHRlciA9IG5ldyBTaW1wbGVEYXRlRm9ybWF0KCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUGFzb29uYXRlLCAnZm9ybWF0dGVyJywge1xuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2Vcbn0pO1xuIiwiXG5sZXQgZmEgPSB7XG5cdGdyZWdvcmlhbjoge1xuXHRcdGRheV9uYW1lOiB7XG5cdFx0XHRzdW5kYXk6IFwiU3VuZGF5XCJcblx0XHR9XG5cdH0sXG5cdGphbGFsaToge30sXG5cdGlzbGFtaWM6IHt9LFxuXHRzaGlhOiB7fVxufTtcblxuUGFzb29uYXRlLmxvY2FsaXphdGlvbi5zZXRMYW5nKCdmYScsIGZhKTsiXX0=

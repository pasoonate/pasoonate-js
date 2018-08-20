
let AdditionAndSubtractionMixin = {
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
		let julianDay =  timestamp / this.DayInSecond + this.J1970;

		return julianDay;
	}

	julianDayToTimestamp (julianDay) {
		let timestamp = Math.round((julianDay - this.J1970) * this.DayInSecond);
		
		return timestamp;
    }

	julianDayWithoutTime (julianDay) {
		
		return Math.floor(julianDay) + ((julianDay - Math.floor(julianDay)) > 0.5 ?  1.5 : 0.5);
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
		let date = this._gregorian.timestampToDate(this._timestamp + this._timezoneOffset);		
		year = year || date.year;
		month = month || date.month;
		day = day || date.day;
		hour = hour || date.hour;
		minute = minute || date.minute;
		second = second || date.second;

		let timestamp = this._gregorian.dateToTimestamp(year, month, day, hour, minute, second);
		this._timestamp = timestamp - this._timezoneOffset;
		this._currentCalendar = this._gregorian;
		return this;
	}

	jalali (year, month, day, hour, minute, second) {
		let date = this._jalali.timestampToDate(this._timestamp + this._timezoneOffset);		
		year = year || date.year;
		month = month || date.month;
		day = day || date.day;
		hour = hour || date.hour;
		minute = minute || date.minute;
		second = second || date.second;

		let timestamp = this._jalali.dateToTimestamp(year, month, day, hour, minute, second);
		this._timestamp = timestamp - this._timezoneOffset;
		this._currentCalendar = this._jalali;
		return this;
	}

	islamic (year, month, day, hour, minute, second) {
		let date = this._islamic.timestampToDate(this._timestamp + this._timezoneOffset);		
		year = year || date.year;
		month = month || date.month;
		day = day || date.day;
		hour = hour || date.hour;
		minute = minute || date.minute;
		second = second || date.second;

		let timestamp = this._islamic.dateToTimestamp(year, month, day, hour, minute, second);
		this._timestamp = timestamp - this._timezoneOffset;
		this._currentCalendar = this._islamic;
		return this;
	}

	shia (year, month, day, hour, minute, second) {
		console.log(this._timestamp);
		let date = this._shia.timestampToDate(this._timestamp + this._timezoneOffset);
		console.log(date);
		year = year || date.year;
		month = month || date.month;
		day = day || date.day;
		hour = hour || date.hour;
		minute = minute || date.minute;
		second = second || date.second;

		let timestamp = this._shia.dateToTimestamp(year, month, day, hour, minute, second);
		this._timestamp = timestamp - this._timezoneOffset;
		console.log(this._timestamp);
		this._currentCalendar = this._shia;
		return this;
	}

	format (pattern, locale) {
		this._formatter.setCalendar(this);
		return this._formatter.format(pattern, locale);
	}	
}

Object.assign(CalendarManager.prototype, BaseMethodsMixin);
Object.assign(CalendarManager.prototype, AdditionAndSubtractionMixin);


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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9taXhpbi9BZGRpdGlvbkFuZFN1YnN0cmFjdGlvbk1peGluLmpzIiwic3JjL21peGluL0Jhc2VNZXRob2RzTWl4aW4uanMiLCJzcmMvY2FsZW5kYXIvQ2FsZW5kYXIuanMiLCJzcmMvY2FsZW5kYXIvQ2FsZW5kYXJNYW5hZ2VyLmpzIiwic3JjL2NhbGVuZGFyL0dyZWdvcmlhbkNhbGVuZGFyLmpzIiwic3JjL2NhbGVuZGFyL0lzbGFtaWNDYWxlbmRhci5qcyIsInNyYy9jYWxlbmRhci9KYWxhbGlDYWxlbmRhci5qcyIsInNyYy9jYWxlbmRhci9TaGlhQ2FsZW5kYXIuanMiLCJzcmMvZm9ybWF0dGVyL0RhdGVGb3JtYXQuanMiLCJzcmMvZm9ybWF0dGVyL1NpbXBsZURhdGVGb3JtYXQuanMiLCJzcmMvQ29uc3RhbnRzLmpzIiwic3JjL0xvY2FsaXphdGlvbi5qcyIsInNyYy9QYXNvb25hdGUuanMiLCJzcmMvbGFuZy9mYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ROQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicGFzb29uYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmxldCBBZGRpdGlvbkFuZFN1YnRyYWN0aW9uTWl4aW4gPSB7XHJcblx0YWRkWWVhcihjb3VudCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciArIGNvdW50LCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRhZGRNb250aChjb3VudCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdGxldCB0b3RhbE1vbnRoID0gZGF0ZS5tb250aCArIGNvdW50O1xyXG5cdFx0bGV0IHllYXIgPSBkYXRlLnllYXIgKyBNYXRoLmZsb29yKHRvdGFsTW9udGggLyAxMik7XHJcblx0XHRsZXQgbW9udGggPSB0b3RhbE1vbnRoICUgMTI7XHJcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBtb250aCwgZGF0ZS5kYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0YWRkRGF5KGNvdW50KSB7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgKz0gKGNvdW50ICogODY0MDApO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0YWRkSG91cihjb3VudCkge1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wICs9IChjb3VudCAqIDM2MDApO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0YWRkTWludXRlKGNvdW50KSB7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgKz0gKGNvdW50ICogNjApO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0YWRkU2Vjb25kKGNvdW50KSB7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgKz0gY291bnQ7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRzdWJZZWFyKGNvdW50KSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyIC0gY291bnQsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdHN1Yk1vbnRoKGNvdW50KSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0bGV0IHRvdGFsTW9udGggPSBkYXRlLm1vbnRoIC0gY291bnQ7XHJcblx0XHRsZXQgeWVhciA9IGRhdGUueWVhcjtcclxuXHRcdGxldCBtb250aCA9IHRvdGFsTW9udGg7XHJcblxyXG5cdFx0aWYodG90YWxNb250aCA8PSAwKSB7XHJcblx0XHRcdHRvdGFsTW9udGggPSAtdG90YWxNb250aDtcclxuXHRcdFx0eWVhciAtPSBNYXRoLmZsb29yKHRvdGFsTW9udGggLyAxMikgKyAxO1xyXG5cdFx0XHRtb250aCA9IDEyIC0gKHRvdGFsTW9udGggJSAxMik7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoeWVhciwgbW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdHN1YkRheShjb3VudCkge1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wIC09IChjb3VudCAqIDg2NDAwKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdHN1YkhvdXIoY291bnQpIHtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCAtPSAoY291bnQgKiAzNjAwKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdHN1Yk1pbnV0ZShjb3VudCkge1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wIC09IChjb3VudCAqIDYwKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdHN1YlNlY29uZChjb3VudCkge1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wIC09IGNvdW50O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG59O1xyXG4iLCJsZXQgQmFzZU1ldGhvZHNNaXhpbiA9IHtcclxuXHRzZXRUaW1lc3RhbXAgKHRpbWVzdGFtcCkge1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdGdldFRpbWVzdGFtcCAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdGltZXN0YW1wO1xyXG5cdH0sXHJcblxyXG5cdHNldFRpbWV6b25lT2Zmc2V0ICh0aW1lem9uZU9mZnNldCkge1xyXG5cdFx0dGhpcy5fdGltZXpvbmVPZmZzZXQgPSB0aW1lem9uZU9mZnNldDtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRnZXRUaW1lem9uZU9mZnNldCAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XHJcblx0fSxcclxuXHJcblx0c2V0WWVhciAoeWVhcikge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKHllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdGdldFllYXIgKCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdHJldHVybiBkYXRlLnllYXI7XHJcblx0fSxcdFxyXG5cclxuXHRzZXRNb250aCAobW9udGgpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIG1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRnZXRNb250aCAoKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0cmV0dXJuIGRhdGUubW9udGg7XHJcblx0fSxcclxuXHJcblx0c2V0RGF5IChkYXkpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRnZXREYXkgKCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdHJldHVybiBkYXRlLmRheTtcdFxyXG5cdH0sXHJcblxyXG5cdHNldEhvdXIgKGhvdXIpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRnZXRIb3VyICgpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRyZXR1cm4gZGF0ZS5ob3VyO1xyXG5cdH0sXHJcblxyXG5cdHNldE1pbnV0ZSAobWludXRlKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBtaW51dGUsIGRhdGUuc2Vjb25kKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0Z2V0TWludXRlICgpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRyZXR1cm4gZGF0ZS5taW51dGU7XHJcblx0fSxcclxuXHJcblx0c2V0U2Vjb25kIChzZWNvbmQpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBzZWNvbmQpO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRnZXRTZWNvbmQgKCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdHJldHVybiBkYXRlLnNlY29uZDtcclxuXHR9LFxyXG5cclxuXHRzZXRVVENZZWFyICh5ZWFyKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoeWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblx0XHJcblx0Z2V0VVRDWWVhciAoKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcclxuXHRcdHJldHVybiBkYXRlLnllYXI7XHJcblx0fSxcclxuXHJcblx0c2V0VVRDTW9udGggKG1vbnRoKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBtb250aCwgZGF0ZS5kYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblx0XHJcblx0Z2V0VVRDTW9udGggKCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHRyZXR1cm4gZGF0ZS5tb250aDtcclxuXHR9LFxyXG5cclxuXHRzZXRVVENEYXkgKGRheSkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cdFxyXG5cdGdldFVUQ0RheSAoKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcclxuXHRcdHJldHVybiBkYXRlLmRheTtcdFxyXG5cdH0sXHJcblxyXG5cdHNldFVUQ0hvdXIgKGhvdXIpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRcclxuXHRnZXRVVENIb3VyICgpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0cmV0dXJuIGRhdGUuaG91cjtcclxuXHR9LFxyXG5cclxuXHRzZXRVVENNaW51dGUgKG1pbnV0ZSkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXksIGRhdGUuaG91ciwgbWludXRlLCBkYXRlLnNlY29uZCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cdFxyXG5cdGdldFVUQ01pbnV0ZSAoKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcclxuXHRcdHJldHVybiBkYXRlLm1pbnV0ZTtcclxuXHR9LFxyXG5cclxuXHRzZXRVVENTZWNvbmQgKHNlY29uZCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIHNlY29uZCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRnZXRVVENTZWNvbmQgKCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHRyZXR1cm4gZGF0ZS5zZWNvbmQ7XHJcblx0fSxcclxuXHJcblx0c2V0RGF0ZSAoeWVhciwgbW9udGgsIGRheSkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKHllYXIsIG1vbnRoLCBkYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRcclxuXHRzZXRUaW1lIChob3VyLCBtaW51dGUsIHNlY29uZCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRcclxuXHRzZXREYXRlVGltZSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdHNldFVUQ0RhdGUgKHllYXIsIG1vbnRoLCBkYXkpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBtb250aCwgZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cdFxyXG5cdHNldFVUQ1RpbWUgKGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRcclxuXHRzZXRVVENEYXRlVGltZSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRkYXlPZldlZWsgKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXlPZldlZWsodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBkYXlPZlllYXIgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF5T2ZZZWFyKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuICAgIH0sXHJcblxyXG4gICAgd2Vla09mTW9udGggKCkge1xyXG4gICAgXHRyZXR1cm4gdGhpcy5fY3VycmVudENhbGVuZGFyLndlZWtPZk1vbnRoKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuICAgIH0sXHJcblxyXG4gICAgd2Vla09mWWVhciAoKSB7XHJcbiAgICBcdHJldHVybiB0aGlzLl9jdXJyZW50Q2FsZW5kYXIud2Vla09mWWVhcih0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcbiAgICB9LFxyXG59O1xyXG4iLCJcclxuY2xhc3MgQ2FsZW5kYXIge1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuXHRcdHRoaXMuSjE5NzAgPSAyNDQwNTg3LjU7XHRcdFx0Ly8gSnVsaWFuIGRhdGUgYXQgVW5peCBlcG9jaDogMTk3MC0wMS0wMVxyXG5cdFx0dGhpcy5EYXlJblNlY29uZCA9IDg2NDAwO1xyXG5cdH1cdFxyXG5cclxuXHR0aW1lc3RhbXBUb0p1bGlhbkRheSAodGltZXN0YW1wKSB7XHJcblx0XHRsZXQganVsaWFuRGF5ID0gIHRpbWVzdGFtcCAvIHRoaXMuRGF5SW5TZWNvbmQgKyB0aGlzLkoxOTcwO1xyXG5cclxuXHRcdHJldHVybiBqdWxpYW5EYXk7XHJcblx0fVxyXG5cclxuXHRqdWxpYW5EYXlUb1RpbWVzdGFtcCAoanVsaWFuRGF5KSB7XHJcblx0XHRsZXQgdGltZXN0YW1wID0gTWF0aC5yb3VuZCgoanVsaWFuRGF5IC0gdGhpcy5KMTk3MCkgKiB0aGlzLkRheUluU2Vjb25kKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRpbWVzdGFtcDtcclxuICAgIH1cclxuXHJcblx0anVsaWFuRGF5V2l0aG91dFRpbWUgKGp1bGlhbkRheSkge1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gTWF0aC5mbG9vcihqdWxpYW5EYXkpICsgKChqdWxpYW5EYXkgLSBNYXRoLmZsb29yKGp1bGlhbkRheSkpID4gMC41ID8gIDEuNSA6IDAuNSk7XHJcblx0fVxyXG5cclxuXHRleHRyYWN0SnVsaWFuRGF5VGltZSAoanVsaWFuRGF5KSB7XHJcbiAgICAgICAganVsaWFuRGF5ICs9IDAuNTtcclxuXHJcbiAgICAgICAgLy8gQXN0cm9ub21pY2FsIHRvIGNpdmlsXHJcbiAgICAgICAgbGV0IHRpbWUgPSAoKGp1bGlhbkRheSAtIE1hdGguZmxvb3IoanVsaWFuRGF5KSkgKiB0aGlzLkRheUluU2Vjb25kKSArIDAuNTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICBcdFwiaG91clwiOiBNYXRoLmZsb29yKHRpbWUgLyAzNjAwKSxcclxuICAgICAgICBcdFwibWludXRlXCI6IE1hdGguZmxvb3IoKHRpbWUgLyA2MCkgJSA2MCksXHJcbiAgICAgICAgXHRcInNlY29uZFwiOiBNYXRoLmZsb29yKHRpbWUgJSA2MClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRpbWVUb0p1bGlhbkRheSAoanVsaWFuRGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xyXG4gICAgXHRsZXQgdGltZXN0YW1wID0gdGhpcy5qdWxpYW5EYXlUb1RpbWVzdGFtcChqdWxpYW5EYXkpO1xyXG4gICAgXHR0aW1lc3RhbXAgKz0gKGhvdXIgKiAzNjAwKSArIChtaW51dGUgKiA2MCkgKyBzZWNvbmQ7XHJcblxyXG4gICAgXHRyZXR1cm4gdGhpcy50aW1lc3RhbXBUb0p1bGlhbkRheSh0aW1lc3RhbXApO1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGVUb0p1bGlhbkRheSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGVUb1RpbWVzdGFtcCAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcclxuICAgICAgICBsZXQganVsaWFuRGF5ID0gdGhpcy5kYXRlVG9KdWxpYW5EYXkgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuanVsaWFuRGF5VG9UaW1lc3RhbXAoanVsaWFuRGF5KTtcclxuICAgIH1cclxuXHJcbiAgICBqdWxpYW5EYXlUb0RhdGUgKGp1bGlhbkRheSkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcblxyXG4gICAgdGltZXN0YW1wVG9EYXRlICh0aW1lc3RhbXApIHtcclxuICAgICAgICBsZXQganVsaWFuRGF5ID0gdGhpcy50aW1lc3RhbXBUb0p1bGlhbkRheSh0aW1lc3RhbXApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5qdWxpYW5EYXlUb0RhdGUoanVsaWFuRGF5KTtcclxuICAgIH1cclxuXHJcbiAgICBkYXlzSW5Nb250aCAoeWVhciwgbW9udGgpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBkYXlPZldlZWsgKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIGxldCBqdWxpYW5EYXkgPSB0aGlzLnRpbWVzdGFtcFRvSnVsaWFuRGF5KHRpbWVzdGFtcCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kKE1hdGguZmxvb3IoKGp1bGlhbkRheSArIDIuNSkpLCA3KTtcclxuICAgIH1cclxuXHJcbiAgICBkYXlPZlllYXIgKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IHRoaXMudGltZXN0YW1wVG9EYXRlKHRpbWVzdGFtcCk7XHJcbiAgICAgICAgbGV0IGZpcnN0T2ZZZWFyanVsaWFuRGF5ID0gdGhpcy5kYXRlVG9KdWxpYW5EYXkoY3VycmVudERhdGUueWVhciwgMSwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRqdWxpYW5EYXkgPSB0aGlzLmRhdGVUb0p1bGlhbkRheShjdXJyZW50RGF0ZS55ZWFyLCBjdXJyZW50RGF0ZS5tb250aCwgY3VycmVudERhdGUuZGF5LCBjdXJyZW50RGF0ZS5ob3VyLCBjdXJyZW50RGF0ZS5taW51dGUsIGN1cnJlbnREYXRlLnNlY29uZCk7XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGN1cnJlbnRqdWxpYW5EYXkgLSBmaXJzdE9mWWVhcmp1bGlhbkRheSArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHdlZWtPZk1vbnRoICh0aW1lc3RhbXApIHtcclxuICAgICAgICBsZXQgY3VycmVudERhdGUgPSB0aGlzLnRpbWVzdGFtcFRvRGF0ZSh0aW1lc3RhbXApO1xyXG4gICAgICAgIGxldCBmaXJzdERheU9mTW9udGhUaW1lc3RhbXAgPSB0aGlzLmRhdGVUb1RpbWVzdGFtcChjdXJyZW50RGF0ZS55ZWFyLCBjdXJyZW50RGF0ZS5tb250aCwgMSwgY3VycmVudERhdGUuaG91ciwgY3VycmVudERhdGUubWludXRlLCBjdXJyZW50RGF0ZS5zZWNvbmQpO1xyXG4gICAgICAgIGxldCBkYXlPZldlZWtJbkN1cnJlbnREYXlPZk1vbnRoID0gdGhpcy5kYXlPZldlZWsodGltZXN0YW1wKTtcclxuICAgICAgICBsZXQgZGF5T2ZXZWVrSW5GaXJzdERheU9mTW9udGggPSB0aGlzLmRheU9mV2VlayhmaXJzdERheU9mTW9udGhUaW1lc3RhbXApO1xyXG5cclxuICAgICAgICBsZXQgd2VlayA9IDE7XHJcblxyXG4gICAgICAgIGlmKGN1cnJlbnREYXRlLmRheSA8PSA3IC0gZGF5T2ZXZWVrSW5GaXJzdERheU9mTW9udGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdlZWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3ZWVrICs9ICgoY3VycmVudERhdGUuZGF5IC0gKCg3IC0gZGF5T2ZXZWVrSW5GaXJzdERheU9mTW9udGgpICsgKGRheU9mV2Vla0luQ3VycmVudERheU9mTW9udGggKyAxKSkpIC8gNykgKyAxO1xyXG5cclxuICAgICAgICByZXR1cm4gd2VlaztcclxuICAgIH1cclxuXHJcbiAgICB3ZWVrT2ZZZWFyICh0aW1lc3RhbXApIHtcclxuICAgICAgICBsZXQgY3VycmVudERhdGUgPSB0aGlzLnRpbWVzdGFtcFRvRGF0ZSh0aW1lc3RhbXApO1xyXG4gICAgICAgIGxldCBkYXlPZlllYXIgPSB0aGlzLmRheU9mWWVhcih0aW1lc3RhbXApO1xyXG4gICAgICAgIGxldCBmaXJzdERheU9mWWVhclRpbWVzdGFtcCA9IHRoaXMuZGF0ZVRvVGltZXN0YW1wKGN1cnJlbnREYXRlLnllYXIsIDEsIDEsIGN1cnJlbnREYXRlLmhvdXIsIGN1cnJlbnREYXRlLm1pbnV0ZSwgY3VycmVudERhdGUuc2Vjb25kKTtcclxuICAgICAgICBsZXQgZGF5T2ZXZWVrSW5DdXJyZW50RGF5T2ZZZWFyID0gdGhpcy5kYXlPZldlZWsodGltZXN0YW1wKTtcclxuICAgICAgICBsZXQgZGF5T2ZXZWVrSW5GaXJzdERheU9mWWVhciA9IHRoaXMuZGF5T2ZXZWVrKGZpcnN0RGF5T2ZZZWFyVGltZXN0YW1wKTtcclxuXHJcbiAgICAgICAgbGV0IHdlZWsgPSAxO1xyXG5cclxuICAgICAgICBpZihkYXlPZlllYXIgPD0gNyAtIGRheU9mV2Vla0luRmlyc3REYXlPZlllYXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdlZWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3ZWVrICs9ICgoZGF5T2ZZZWFyIC0gKCg3IC0gZGF5T2ZXZWVrSW5GaXJzdERheU9mWWVhcikgKyAoZGF5T2ZXZWVrSW5DdXJyZW50RGF5T2ZZZWFyICsgMSkpKSAvIDcpICsgMTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHdlZWs7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgbW9kIChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGEgLSAoYiAqIE1hdGguZmxvb3IoYSAvIGIpKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0xlYXAgKHllYXIpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJcclxuY2xhc3MgQ2FsZW5kYXJNYW5hZ2VyIHtcclxuXHRcclxuXHRjb25zdHJ1Y3RvciAodGltZXN0YW1wLCB0aW1lem9uZU9mZnNldCkge1xyXG5cdFx0dGhpcy5fZ3JlZ29yaWFuID0gbmV3IEdyZWdvcmlhbkNhbGVuZGFyKCk7XHRcclxuXHRcdHRoaXMuX2phbGFsaSA9IG5ldyBKYWxhbGlDYWxlbmRhcigpO1x0XHJcblx0XHR0aGlzLl9pc2xhbWljID0gbmV3IElzbGFtaWNDYWxlbmRhcigpO1x0XHJcblx0XHR0aGlzLl9zaGlhID0gbmV3IFNoaWFDYWxlbmRhcigpO1xyXG5cdFx0dGhpcy5fY3VycmVudENhbGVuZGFyID0gbnVsbDtcclxuXHRcdHRoaXMuX2Zvcm1hdHRlciA9IFBhc29vbmF0ZS5mb3JtYXR0ZXI7XHJcblxyXG5cdFx0bGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIHx8IE1hdGguZmxvb3IoZGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTsgLy8gbWlsaXNlY29uZCB0byBzZWNvbmRzXHJcblx0XHR0aGlzLl90aW1lem9uZU9mZnNldCA9IHRpbWV6b25lT2Zmc2V0IHx8IC1kYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDsgLy8gbWludXRlICogNjAgPSBvZmZzZXQgaW4gc2Vjb25kc1xyXG5cdH1cclxuXHJcblx0Z3JlZ29yaWFuICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9ncmVnb3JpYW4udGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcdFx0XHJcblx0XHR5ZWFyID0geWVhciB8fCBkYXRlLnllYXI7XHJcblx0XHRtb250aCA9IG1vbnRoIHx8IGRhdGUubW9udGg7XHJcblx0XHRkYXkgPSBkYXkgfHwgZGF0ZS5kYXk7XHJcblx0XHRob3VyID0gaG91ciB8fCBkYXRlLmhvdXI7XHJcblx0XHRtaW51dGUgPSBtaW51dGUgfHwgZGF0ZS5taW51dGU7XHJcblx0XHRzZWNvbmQgPSBzZWNvbmQgfHwgZGF0ZS5zZWNvbmQ7XHJcblxyXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2dyZWdvcmlhbi5kYXRlVG9UaW1lc3RhbXAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XHJcblx0XHR0aGlzLl9jdXJyZW50Q2FsZW5kYXIgPSB0aGlzLl9ncmVnb3JpYW47XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGphbGFsaSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5famFsYWxpLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHRcdFxyXG5cdFx0eWVhciA9IHllYXIgfHwgZGF0ZS55ZWFyO1xyXG5cdFx0bW9udGggPSBtb250aCB8fCBkYXRlLm1vbnRoO1xyXG5cdFx0ZGF5ID0gZGF5IHx8IGRhdGUuZGF5O1xyXG5cdFx0aG91ciA9IGhvdXIgfHwgZGF0ZS5ob3VyO1xyXG5cdFx0bWludXRlID0gbWludXRlIHx8IGRhdGUubWludXRlO1xyXG5cdFx0c2Vjb25kID0gc2Vjb25kIHx8IGRhdGUuc2Vjb25kO1xyXG5cclxuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9qYWxhbGkuZGF0ZVRvVGltZXN0YW1wKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xyXG5cdFx0dGhpcy5fY3VycmVudENhbGVuZGFyID0gdGhpcy5famFsYWxpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRpc2xhbWljICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9pc2xhbWljLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHRcdFxyXG5cdFx0eWVhciA9IHllYXIgfHwgZGF0ZS55ZWFyO1xyXG5cdFx0bW9udGggPSBtb250aCB8fCBkYXRlLm1vbnRoO1xyXG5cdFx0ZGF5ID0gZGF5IHx8IGRhdGUuZGF5O1xyXG5cdFx0aG91ciA9IGhvdXIgfHwgZGF0ZS5ob3VyO1xyXG5cdFx0bWludXRlID0gbWludXRlIHx8IGRhdGUubWludXRlO1xyXG5cdFx0c2Vjb25kID0gc2Vjb25kIHx8IGRhdGUuc2Vjb25kO1xyXG5cclxuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9pc2xhbWljLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcclxuXHRcdHRoaXMuX2N1cnJlbnRDYWxlbmRhciA9IHRoaXMuX2lzbGFtaWM7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHNoaWEgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9zaGlhLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRlKTtcclxuXHRcdHllYXIgPSB5ZWFyIHx8IGRhdGUueWVhcjtcclxuXHRcdG1vbnRoID0gbW9udGggfHwgZGF0ZS5tb250aDtcclxuXHRcdGRheSA9IGRheSB8fCBkYXRlLmRheTtcclxuXHRcdGhvdXIgPSBob3VyIHx8IGRhdGUuaG91cjtcclxuXHRcdG1pbnV0ZSA9IG1pbnV0ZSB8fCBkYXRlLm1pbnV0ZTtcclxuXHRcdHNlY29uZCA9IHNlY29uZCB8fCBkYXRlLnNlY29uZDtcclxuXHJcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fc2hpYS5kYXRlVG9UaW1lc3RhbXAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0dGhpcy5fY3VycmVudENhbGVuZGFyID0gdGhpcy5fc2hpYTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0Zm9ybWF0IChwYXR0ZXJuLCBsb2NhbGUpIHtcclxuXHRcdHRoaXMuX2Zvcm1hdHRlci5zZXRDYWxlbmRhcih0aGlzKTtcclxuXHRcdHJldHVybiB0aGlzLl9mb3JtYXR0ZXIuZm9ybWF0KHBhdHRlcm4sIGxvY2FsZSk7XHJcblx0fVx0XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oQ2FsZW5kYXJNYW5hZ2VyLnByb3RvdHlwZSwgQmFzZU1ldGhvZHNNaXhpbik7XHJcbk9iamVjdC5hc3NpZ24oQ2FsZW5kYXJNYW5hZ2VyLnByb3RvdHlwZSwgQWRkaXRpb25BbmRTdWJ0cmFjdGlvbk1peGluKTtcclxuIiwiXHJcbmNsYXNzIEdyZWdvcmlhbkNhbGVuZGFyIGV4dGVuZHMgQ2FsZW5kYXIge1xyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuXHRcdHN1cGVyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5HcmVnb3JpYW5FcG9jaCA9IDE3MjE0MjUuNTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ0dyZWdvcmlhbkVwb2NoJywge1xyXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHR9XHJcblxyXG5cdGRhdGVUb0p1bGlhbkRheSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcclxuXHRcdGxldCBqdWxpYW5EYXkgPSB0aGlzLkdyZWdvcmlhbkVwb2NoIC0gMTtcclxuXHJcblx0XHRqdWxpYW5EYXkgKz0gMzY1ICogKHllYXIgLSAxKTtcclxuXHRcdGp1bGlhbkRheSArPSBNYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyA0KTtcclxuXHRcdGp1bGlhbkRheSArPSBNYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyAxMDApICogLTE7XHJcblx0XHRqdWxpYW5EYXkgKz0gTWF0aC5mbG9vcigoeWVhciAtIDEpIC8gNDAwKTtcclxuXHRcdGp1bGlhbkRheSArPSBNYXRoLmZsb29yKCgoKDM2NyAqIG1vbnRoKSAtIDM2MikgLyAxMikgKyAoKG1vbnRoIDw9IDIpID8gMCA6ICh0aGlzLmlzTGVhcCh5ZWFyKSA/IC0xIDogLTIpKSArIGRheSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuYWRkVGltZVRvSnVsaWFuRGF5KGp1bGlhbkRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cdH1cclxuXHJcbiAgICBqdWxpYW5EYXlUb0RhdGUgKGp1bGlhbkRheSkge1xyXG4gICAgXHRsZXQgdGltZSA9IHRoaXMuZXh0cmFjdEp1bGlhbkRheVRpbWUoanVsaWFuRGF5KTtcclxuICAgIFx0XHJcbiAgICBcdGp1bGlhbkRheSA9IHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUoanVsaWFuRGF5KTtcclxuXHJcbiAgICBcdGxldCB3amQgPSBNYXRoLmZsb29yKGp1bGlhbkRheSAtIDAuNSkgKyAwLjU7XHJcbiAgICAgICAgbGV0IGRlcG9jaCA9IHdqZCAtIHRoaXMuR3JlZ29yaWFuRXBvY2g7XHJcbiAgICAgICAgbGV0IHF1YWRyaWNlbnQgPSBNYXRoLmZsb29yKGRlcG9jaCAvIDE0NjA5Nyk7XHJcbiAgICAgICAgbGV0IGRxYyA9IHRoaXMubW9kKGRlcG9jaCwgMTQ2MDk3KTtcclxuICAgICAgICBsZXQgY2VudCA9IE1hdGguZmxvb3IoZHFjIC8gMzY1MjQpO1xyXG4gICAgICAgIGxldCBkY2VudCA9IHRoaXMubW9kKGRxYywgMzY1MjQpO1xyXG4gICAgICAgIGxldCBxdWFkID0gTWF0aC5mbG9vcihkY2VudCAvIDE0NjEpO1xyXG4gICAgICAgIGxldCBkcXVhZCA9IHRoaXMubW9kKGRjZW50LCAxNDYxKTtcclxuICAgICAgICBsZXQgeWluZGV4ID0gTWF0aC5mbG9vcihkcXVhZCAvIDM2NSk7XHJcbiAgICAgICAgbGV0IHllYXIgPSAocXVhZHJpY2VudCAqIDQwMCkgKyAoY2VudCAqIDEwMCkgKyAocXVhZCAqIDQpICsgeWluZGV4O1xyXG4gICAgICAgIGlmICghKChjZW50ID09IDQpIHx8ICh5aW5kZXggPT0gNCkpKSB7XHJcbiAgICAgICAgICAgIHllYXIrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHllYXJkYXkgPSB3amQgLSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIDEsIDEsIHRpbWUuaG91ciwgdGltZS5taW51dGUsIHRpbWUuc2Vjb25kKSk7XHJcbiAgICAgICAgbGV0IGxlYXBhZGogPSAod2pkIDwgdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZSh0aGlzLmRhdGVUb0p1bGlhbkRheSh5ZWFyLCAzLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpID8gMCA6ICh0aGlzLmlzTGVhcCh5ZWFyKSA/IDEgOiAyKSk7XHJcbiAgICAgICAgbGV0IG1vbnRoID0gTWF0aC5mbG9vcigoKCh5ZWFyZGF5ICsgbGVhcGFkaikgKiAxMikgKyAzNzMpIC8gMzY3KTtcclxuICAgICAgICBsZXQgZGF5ID0gKHdqZCAtIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoeWVhciwgbW9udGgsIDEsIHRpbWUuaG91ciwgdGltZS5taW51dGUsIHRpbWUuc2Vjb25kKSkpICsgMTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICBcdFwieWVhclwiOiB5ZWFyLFxyXG4gICAgICAgIFx0XCJtb250aFwiOiBtb250aCxcclxuICAgICAgICBcdFwiZGF5XCI6IGRheSxcclxuICAgICAgICBcdFwiaG91clwiOiB0aW1lLmhvdXIsXHJcbiAgICAgICAgXHRcIm1pbnV0ZVwiOiB0aW1lLm1pbnV0ZSxcclxuICAgICAgICBcdFwic2Vjb25kXCI6IHRpbWUuc2Vjb25kLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGF5c0luTW9udGggKHllYXIsIG1vbnRoKSB7XHJcbiAgICAgICAgbGV0IGdyZWdvcmlhbkRheXNJbk1vbnRoID0gWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFeGNlcHRpb24oXCIkbW9udGggT3V0IE9mIFJhbmdlIEV4Y2VwdGlvblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHllYXIgJiYgdGhpcy5pc0xlYXAoeWVhcikgJiYgbW9udGggPT0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gMjk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBncmVnb3JpYW5EYXlzSW5Nb250aFttb250aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTGVhcCAoeWVhcikge1xyXG4gICAgICAgIHJldHVybiAoKHllYXIgJSA0KSA9PSAwKSAmJiAoISgoKHllYXIgJSAxMDApID09IDApICYmICgoeWVhciAlIDQwMCkgIT0gMCkpKTtcclxuICAgIH1cclxufVxyXG4iLCJcclxuY2xhc3MgSXNsYW1pY0NhbGVuZGFyIGV4dGVuZHMgQ2FsZW5kYXIge1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIFxyXG5cdFx0dGhpcy5Jc2xhbWljRXBvY2ggPSAxOTQ4NDM5LjU7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ0lzbGFtaWNFcG9jaCcsIHtcclxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG5cclxuXHRkYXRlVG9KdWxpYW5EYXkgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XHJcbiAgICAgICAgbGV0IGp1bGlhbkRheSA9IGRheTtcclxuXHJcbiAgICAgICAganVsaWFuRGF5ICs9IE1hdGguY2VpbCgobW9udGggLSAxKSAqIDI5LjUpO1xyXG4gICAgICAgIGp1bGlhbkRheSArPSAoeWVhciAtIDEpICogMzU0O1xyXG4gICAgICAgIGp1bGlhbkRheSArPSBNYXRoLmZsb29yKCgoMTEgKiB5ZWFyKSArIDMpIC8gMzApO1xyXG4gICAgICAgIGp1bGlhbkRheSArPSB0aGlzLklzbGFtaWNFcG9jaCAtIDE7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuYWRkVGltZVRvSnVsaWFuRGF5KGp1bGlhbkRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cdH1cclxuXHJcbiAgICBqdWxpYW5EYXlUb0RhdGUgKGp1bGlhbkRheSkge1xyXG4gICAgICAgIGxldCB0aW1lID0gdGhpcy5leHRyYWN0SnVsaWFuRGF5VGltZShqdWxpYW5EYXkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGp1bGlhbkRheSA9IHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUoanVsaWFuRGF5KTtcclxuICAgICAgICBqdWxpYW5EYXkgPSBNYXRoLmZsb29yKGp1bGlhbkRheSkgKyAwLjU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHllYXIgPSBNYXRoLmZsb29yKCgoKGp1bGlhbkRheSAtIHRoaXMuSXNsYW1pY0Vwb2NoKSAqIDMwKSArIDEwNjQ2KSAvIDEwNjMxKTtcclxuICAgICAgICBsZXQgbW9udGggPSBNYXRoLm1pbigxMiwgTWF0aC5jZWlsKChqdWxpYW5EYXkgLSAoMjkgKyB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIDEsIDEsIHRpbWUuaG91ciwgdGltZS5taW51dGUsIHRpbWUuc2Vjb25kKSkpKSAvIDI5LjUpICsgMSk7XHJcbiAgICAgICAgbGV0IGRheSA9IChqdWxpYW5EYXkgLSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIG1vbnRoLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSArIDE7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgXHRcInllYXJcIjogeWVhcixcclxuICAgICAgICBcdFwibW9udGhcIjogbW9udGgsXHJcbiAgICAgICAgXHRcImRheVwiOiBkYXksXHJcbiAgICAgICAgXHRcImhvdXJcIjogdGltZS5ob3VyLFxyXG4gICAgICAgIFx0XCJtaW51dGVcIjogdGltZS5taW51dGUsXHJcbiAgICAgICAgXHRcInNlY29uZFwiOiB0aW1lLnNlY29uZCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF5c0luTW9udGggKHllYXIsIG1vbnRoKSB7XHJcbiAgICAgICAgbGV0IGlzbGFtaWNEYXlzSW5Nb250aCA9IFszMCwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDI5XTsgLy8zMFxyXG5cclxuICAgICAgICBpZiAobW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXhjZXB0aW9uKFwiJG1vbnRoIE91dCBPZiBSYW5nZSBFeGNlcHRpb25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh5ZWFyICYmIHRoaXMuaXNMZWFwKHllYXIpICYmIG1vbnRoID09IDEyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAzMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGlzbGFtaWNEYXlzSW5Nb250aFttb250aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTGVhcCAoeWVhcikge1xyXG4gICAgICAgIGxldCBpc0xlYXAgPSAoKCh5ZWFyICogMTEpICsgMTQpICUgMzApIDwgMTE7XHJcbiAgICAgICAgcmV0dXJuIGlzTGVhcDtcclxuICAgIH1cclxufVxyXG4iLCJcclxuY2xhc3MgSmFsYWxpQ2FsZW5kYXIgZXh0ZW5kcyBDYWxlbmRhciB7XHJcblx0XHJcblx0Y29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5KYWxhbGlFcG9jaCA9IDE5NDgzMjAuNTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnSmFsYWxpRXBvY2gnLCB7XHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cdH1cclxuXHJcblx0ZGF0ZVRvSnVsaWFuRGF5ICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xyXG5cdFx0bGV0IGVwb2NoQmFzZSA9IHllYXIgLSAoeWVhciA+PSAwID8gNDc0IDogNDczKTtcclxuICAgICAgICBsZXQgZXBvY2hZZWFyID0gNDc0ICsgdGhpcy5tb2QoZXBvY2hCYXNlLCAyODIwKTtcclxuICAgICAgICBsZXQganVsaWFuRGF5ID0gZGF5O1xyXG5cclxuICAgICAgICBqdWxpYW5EYXkgKz0gbW9udGggPD0gNyA/IChtb250aCAtIDEpICogMzEgOiAoKG1vbnRoIC0gMSkgKiAzMCkgKyA2O1xyXG4gICAgICAgIGp1bGlhbkRheSArPSBNYXRoLmZsb29yKCgoZXBvY2hZZWFyICogNjgyKSAtIDExMCkgLyAyODE2KTtcclxuICAgICAgICBqdWxpYW5EYXkgKz0gKGVwb2NoWWVhciAtIDEpICogMzY1O1xyXG4gICAgICAgIGp1bGlhbkRheSArPSBNYXRoLmZsb29yKGVwb2NoQmFzZSAvIDI4MjApICogMTAyOTk4MztcclxuICAgICAgICBqdWxpYW5EYXkgKz0gdGhpcy5KYWxhbGlFcG9jaCAtIDE7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuYWRkVGltZVRvSnVsaWFuRGF5KGp1bGlhbkRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cdH1cclxuXHJcbiAgICBqdWxpYW5EYXlUb0RhdGUgKGp1bGlhbkRheSkge1xyXG4gICAgXHRsZXQgdGltZSA9IHRoaXMuZXh0cmFjdEp1bGlhbkRheVRpbWUoanVsaWFuRGF5KTtcclxuICAgIFx0XHJcbiAgICBcdGp1bGlhbkRheSA9IHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUoanVsaWFuRGF5KTtcclxuXHJcbiAgICBcdGp1bGlhbkRheSA9IE1hdGguZmxvb3IoanVsaWFuRGF5KSArIDAuNTtcclxuXHJcbiAgICAgICAgbGV0IGRlcG9jaCA9IGp1bGlhbkRheSAtIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoNDc1LCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpO1xyXG4gICAgICAgIGxldCBjeWNsZSA9IE1hdGguZmxvb3IoZGVwb2NoIC8gMTAyOTk4Myk7XHJcbiAgICAgICAgbGV0IGN5ZWFyID0gdGhpcy5tb2QoZGVwb2NoLCAxMDI5OTgzKTsgICAgICAgIFxyXG4gICAgXHRsZXQgeWN5Y2xlLCBhdXgxLCBhdXgyO1xyXG5cclxuICAgICAgICBpZiAoY3llYXIgPT0gMTAyOTk4Mikge1xyXG4gICAgICAgICAgICB5Y3ljbGUgPSAyODIwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF1eDEgPSBNYXRoLmZsb29yKGN5ZWFyIC8gMzY2KTtcclxuICAgICAgICAgICAgYXV4MiA9IHRoaXMubW9kKGN5ZWFyLCAzNjYpO1xyXG4gICAgICAgICAgICB5Y3ljbGUgPSBNYXRoLmZsb29yKCgoMjEzNCAqIGF1eDEpICsgKDI4MTYgKiBhdXgyKSArIDI4MTUpIC8gMTAyODUyMikgKyBhdXgxICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHllYXIgPSB5Y3ljbGUgKyAoMjgyMCAqIGN5Y2xlKSArIDQ3NDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoeWVhciA8PSAwKSB7XHJcbiAgICAgICAgICAgIHllYXItLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHlkYXkgPSAoanVsaWFuRGF5IC0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZSh0aGlzLmRhdGVUb0p1bGlhbkRheSh5ZWFyLCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSArIDE7XHJcbiAgICAgICAgbGV0IG1vbnRoID0gKHlkYXkgPD0gMTg2KSA/IE1hdGguY2VpbCh5ZGF5IC8gMzEpIDogTWF0aC5jZWlsKCh5ZGF5IC0gNikgLyAzMCk7XHJcbiAgICAgICAgbGV0IGRheSA9IChqdWxpYW5EYXkgLSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIG1vbnRoLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSArIDE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgXHRcInllYXJcIjogeWVhcixcclxuICAgICAgICBcdFwibW9udGhcIjogbW9udGgsXHJcbiAgICAgICAgXHRcImRheVwiOiBkYXksXHJcbiAgICAgICAgXHRcImhvdXJcIjogdGltZS5ob3VyLFxyXG4gICAgICAgIFx0XCJtaW51dGVcIjogdGltZS5taW51dGUsXHJcbiAgICAgICAgXHRcInNlY29uZFwiOiB0aW1lLnNlY29uZCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF5c0luTW9udGggKHllYXIsIG1vbnRoKSB7XHJcbiAgICAgICAgbGV0IGdyZWdvcmlhbkRheXNJbk1vbnRoID0gWzMxLCAzMSwgMzEsIDMxLCAzMSwgMzEsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMjldOyAvLzMwXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG1vbnRoIDwgMSB8fCBtb250aCA+IDEyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUV4Y2VwdGlvbihcIiRtb250aCBPdXQgT2YgUmFuZ2UgRXhjZXB0aW9uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoeWVhciAmJiB0aGlzLmlzTGVhcCh5ZWFyKSAmJiBtb250aCA9PSAxMikge1xyXG4gICAgICAgICAgICByZXR1cm4gMzA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBncmVnb3JpYW5EYXlzSW5Nb250aFttb250aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTGVhcCAoeWVhcikge1xyXG4gICAgICAgIHJldHVybiAoKCgoKCh5ZWFyIC0gKCh5ZWFyID4gMCkgPyA0NzQgOiA0NzMpKSAlIDI4MjApICsgNDc0KSArIDM4KSAqIDY4MikgJSAyODE2KSA8IDY4MjtcclxuICAgIH1cclxufVxyXG4iLCJcclxuY2xhc3MgU2hpYUNhbGVuZGFyIGV4dGVuZHMgQ2FsZW5kYXIge1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIFxyXG5cdFx0dGhpcy5TaGlhRXBvY2ggPSAxOTQ4NDM5LjU7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ1NoaWFFcG9jaCcsIHtcclxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG5cclxuXHRkYXRlVG9KdWxpYW5EYXkgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XHJcbiAgICAgICAgbGV0IGRheU9mWWVhciA9IGRheTtcclxuICAgICAgICBsZXQganVsaWFuRGF5ID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBtb250aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRheU9mWWVhciArPSB0aGlzLmRheXNJbk1vbnRoKHllYXIsIGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAganVsaWFuRGF5ICs9IGRheU9mWWVhcjtcclxuICAgICAgICBqdWxpYW5EYXkgKz0gKHllYXIgLSAxKSAqIDM1NDtcclxuICAgICAgICBqdWxpYW5EYXkgKz0gTWF0aC5mbG9vcigoKDExICogeWVhcikgKyAzKSAvIDMwKTtcclxuICAgICAgICBqdWxpYW5EYXkgKz0gdGhpcy5TaGlhRXBvY2ggLSAxO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmFkZFRpbWVUb0p1bGlhbkRheShqdWxpYW5EYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcclxuXHR9XHJcblxyXG4gICAganVsaWFuRGF5VG9EYXRlIChqdWxpYW5EYXkpIHtcclxuICAgICAgICBsZXQgdGltZSA9IHRoaXMuZXh0cmFjdEp1bGlhbkRheVRpbWUoanVsaWFuRGF5KTtcclxuICAgICAgICBcclxuICAgICAgICBqdWxpYW5EYXkgPSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKGp1bGlhbkRheSk7XHJcbiAgICAgICAganVsaWFuRGF5ID0gTWF0aC5mbG9vcihqdWxpYW5EYXkpICsgMC41O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB5ZWFyID0gTWF0aC5mbG9vcigoKChqdWxpYW5EYXkgLSB0aGlzLlNoaWFFcG9jaCkgKiAzMCkgKyAxMDY0NikgLyAxMDYzMSk7XHJcbiAgICAgICAgbGV0IG1vbnRoID0gTWF0aC5taW4oMTIsIE1hdGguY2VpbCgoanVsaWFuRGF5IC0gKDI5ICsgdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZSh0aGlzLmRhdGVUb0p1bGlhbkRheSh5ZWFyLCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSkgLyAyOS41KSArIDEpO1xyXG4gICAgICAgIGxldCBkYXlPZlllYXIgPSBqdWxpYW5EYXkgLSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIDEsIDEsIHRpbWUuaG91ciwgdGltZS5taW51dGUsIHRpbWUuc2Vjb25kKSk7XHJcbiAgICAgICAgbGV0IGRheXMgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcclxuICAgICAgICAgICAgZGF5cyArPSB0aGlzLmRheXNJbk1vbnRoKHllYXIsIGkpO1xyXG4gICAgICAgICAgICBpZiAoZGF5T2ZZZWFyIDwgZGF5cykge1xyXG4gICAgICAgICAgICAgICAgbW9udGggPSBpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRheSA9IChqdWxpYW5EYXkgLSAoKGRheXMgLSB0aGlzLmRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSkgKyAoKHllYXIgLSAxKSAqIDM1NCkgKyBNYXRoLmZsb29yKCgzICsgKDExICogeWVhcikpIC8gMzApICsgdGhpcy5TaGlhRXBvY2gpICsgMSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgXHRcInllYXJcIjogeWVhcixcclxuICAgICAgICBcdFwibW9udGhcIjogbW9udGgsXHJcbiAgICAgICAgXHRcImRheVwiOiBkYXksXHJcbiAgICAgICAgXHRcImhvdXJcIjogdGltZS5ob3VyLFxyXG4gICAgICAgIFx0XCJtaW51dGVcIjogdGltZS5taW51dGUsXHJcbiAgICAgICAgXHRcInNlY29uZFwiOiB0aW1lLnNlY29uZCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF5c0luTW9udGggKHllYXIsIG1vbnRoKSB7XHJcbiBcdFx0bGV0IGlzbGFtaWNEYXlzSW5Nb250aCA9IFszMCwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDI5XTsgLy8zMFxyXG4gICAgICAgIGxldCBzaGlhRGF5c0luTW9udGhJblllYXJzID0ge1xyXG4gICAgICAgICAgICAxNDM1OiBbMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAzMCwgMzAsIDI5LCAzMF0sXHJcbiAgICAgICAgICAgIDE0MzY6IFsyOSwgMzAsIDI5LCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDMwXSxcclxuICAgICAgICAgICAgMTQzNzogWzI5LCAzMCwgMzAsIDI5LCAzMCwgMjksIDI5LCAzMCwgMjksIDI5LCAzMCwgMzBdLFxyXG4gICAgICAgICAgICAxNDM4OiBbMjksIDMwLCAzMCwgMzAsIDI5LCAzMCwgMjksIDI5LCAzMCwgMjksIDI5LCAzMF0sXHJcbiAgICAgICAgICAgIDE0Mzk6IFsyOSwgMzAsIDMwLCAzMCwgMzAsIDI5LCAzMCwgMjksIDI5LCAzMCwgMjksIDI5XSxcclxuICAgICAgICAgICAgMTQ0MDogWzMwLCAyOSwgMzAsIDMwLCAzMCwgMjksIDI5LCAzMCwgMjksIDMwLCAyOSwgMjldLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFeGNlcHRpb24oXCIkbW9udGggT3V0IE9mIFJhbmdlIEV4Y2VwdGlvblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzaGlhRGF5c0luTW9udGhJblllYXJzW3llYXJdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzbGFtaWNEYXlzSW5Nb250aFttb250aCAtIDFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNoaWFEYXlzSW5Nb250aEluWWVhcnNbeWVhcl1bbW9udGggLSAxXTsgICBcdFxyXG4gICAgfVxyXG5cclxuICAgIGlzTGVhcCAoeWVhcikge1xyXG4gICAgICAgIGxldCBpc0xlYXAgPSAoKCh5ZWFyICogMTEpICsgMTQpICUgMzApIDwgMTE7XHJcblx0XHRyZXR1cm4gaXNMZWFwO1xyXG5cdH1cclxufVxyXG4iLCJcclxuY2xhc3MgRGF0ZUZvcm1hdCB7XHJcblx0XHJcblx0Y29uc3RydWN0b3IgKCkge1xyXG5cdFx0dGhpcy5fY2FsZW5kYXIgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0c2V0Q2FsZW5kYXIgKGNhbGVuZGFyKSB7XHJcblx0XHR0aGlzLl9jYWxlbmRhciA9IGNhbGVuZGFyIGluc3RhbmNlb2YgQ2FsZW5kYXJNYW5hZ2VyID8gY2FsZW5kYXIgOiBudWxsO1xyXG5cdH1cclxuXHJcblx0Z2V0Q2FsZW5kYXIgKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NhbGVuZGFyO1xyXG5cdH1cclxuXHJcblx0Zm9ybWF0ICgpIHtcclxuXHRcdGlmKHRoaXMuZ2V0Q2FsZW5kYXIoKSA9PT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gYCR7dGhpcy5fY2FsZW5kYXIuZ2V0WWVhcigpfS0ke3RoaXMuX2NhbGVuZGFyLmdldE1vbnRoKCl9LSR7dGhpcy5fY2FsZW5kYXIuZ2V0RGF5KCl9ICR7dGhpcy5fY2FsZW5kYXIuZ2V0SG91cigpfToke3RoaXMuX2NhbGVuZGFyLmdldE1pbnV0ZSgpfToke3RoaXMuX2NhbGVuZGFyLmdldFNlY29uZCgpfWA7XHJcblx0fVxyXG59XHJcbiIsIlxyXG5jbGFzcyBTaW1wbGVEYXRlRm9ybWF0IGV4dGVuZHMgRGF0ZUZvcm1hdCB7XHJcblx0XHJcblx0Y29uc3RydWN0b3IgKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdGZvcm1hdCAocGF0dGVybiwgbG9jYWxlKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21waWxlKHBhdHRlcm4sIGxvY2FsZSk7XHJcblx0fVxyXG5cclxuXHRjb21waWxlIChwYXR0ZXJuLCBsb2NhbGUpIHtcclxuXHRcdHBhdHRlcm4gPSBTdHJpbmcocGF0dGVybikudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRsZXQgcmVzdWx0ID0gcGF0dGVybjtcclxuXHJcblx0XHRjb25zdCBTaWducyA9IFsneScsICdtJywgJ2QnXTtcclxuXHRcdGNvbnN0IEZ1bGxZZWFyID0gJ3l5eXknO1xyXG5cdFx0Y29uc3QgU2hvcnRZZWFyID0gJ3l5JztcclxuXHRcdGNvbnN0IE1vbnRoID0gJ21tJztcclxuXHRcdGNvbnN0IFNpbmdsZU1vbnRoID0gJ20nO1xyXG5cdFx0Y29uc3QgRGF5ID0gJ2RkJztcclxuXHRcdGNvbnN0IFNpbmdsZURheSA9ICdkJztcclxuXHJcblx0XHRsZXQgY2hhcnMgPSBbXTtcclxuXHRcdGxldCBwcmV2Q2hhciA9ICcnO1xyXG5cdFx0bGV0IGN1cnJDaGFyID0gJyc7XHJcblx0XHRsZXQgaW5kZXggPSAwO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGF0dGVybi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjdXJyQ2hhciA9IFNpZ25zLmluY2x1ZGVzKHBhdHRlcm5baV0pID8gcGF0dGVybltpXSA6ICcnO1xyXG5cclxuXHRcdFx0aWYoY3VyckNoYXIgPT09ICcnKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKGN1cnJDaGFyID09PSBwcmV2Q2hhcikge1xyXG5cdFx0XHRcdGNoYXJzW2luZGV4XS50ZXh0ICs9IGN1cnJDaGFyO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNoYXJzWysraW5kZXhdID0geyB0ZXh0OiBjdXJyQ2hhciwgcG9zaXRpb246IGl9O1xyXG5cdFx0XHR9XHJcblx0XHRcdHByZXZDaGFyID0gY3VyckNoYXI7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yIChsZXQgaSBpbiBjaGFycykge1xyXG5cdFx0XHRzd2l0Y2ggKGNoYXJzW2ldLnRleHQpIHtcclxuXHRcdFx0XHRjYXNlIEZ1bGxZZWFyOlxyXG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoRnVsbFllYXIsIHRoaXMuZ2V0Q2FsZW5kYXIoKS5nZXRZZWFyKCkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgU2hvcnRZZWFyOlxyXG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoU2hvcnRZZWFyLCBTdHJpbmcodGhpcy5nZXRDYWxlbmRhcigpLmdldFllYXIoKSkuc3Vic3RyKC0yLCAyKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBTaW5nbGVNb250aDpcclxuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKFNpbmdsZU1vbnRoLCB0aGlzLmdldENhbGVuZGFyKCkuZ2V0TW9udGgoKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBNb250aDpcclxuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKE1vbnRoLCB0aGlzLmdldENhbGVuZGFyKCkuZ2V0TW9udGgoKSA+IDkgPyB0aGlzLmdldENhbGVuZGFyKCkuZ2V0TW9udGgoKSA6ICcwJyArIHRoaXMuZ2V0Q2FsZW5kYXIoKS5nZXRNb250aCgpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFNpbmdsZURheTpcclxuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKFNpbmdsZURheSwgdGhpcy5nZXRDYWxlbmRhcigpLmdldERheSgpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIERheTpcclxuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKERheSwgdGhpcy5nZXRDYWxlbmRhcigpLmdldERheSgpID4gOSA/IHRoaXMuZ2V0Q2FsZW5kYXIoKS5nZXREYXkoKSA6ICcwJyArIHRoaXMuZ2V0Q2FsZW5kYXIoKS5nZXREYXkoKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fVxyXG59XHJcbiIsIlxyXG5jbGFzcyBDb25zdGFudHMge1xyXG5cdCBcclxuXHRjb25zdHJ1Y3RvciAoKSB7XHJcblxyXG5cdH1cclxufVxyXG4iLCJcclxuY2xhc3MgTG9jYWxpemF0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5fbGFuZ3MgPSB7fTtcclxuICAgICAgICB0aGlzLl9sb2NhbGUgPSAnZmEnO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExhbmcgKG5hbWUsIHRyYW5zKSB7XHJcbiAgICAgICAgdGhpcy5fbGFuZ3NbbmFtZV0gPSB0cmFucztcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2NhbGUobG9jYWxlKSB7XHJcbiAgICAgICAgdGhpcy5fbG9jYWxlID0gbG9jYWxlIHx8IHRoaXMuX2xvY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb2NhbGUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNMb2NhbGUgKGxvY2FsZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGUgPT09IGxvY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNUcmFuc0tleSAoa2V5LCBsb2NhbGUpIHtcclxuICAgICAgICBsZXQgc3ViS2V5cyA9IGtleS5zcGxpdCgnLicpO1xyXG4gICAgICAgIGlmICh0aGlzLl9sYW5nc1tsb2NhbGVdID09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9sYW5nc1tsb2NhbGVdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc3ViS2V5c1tpXSBpbiByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFtzdWJLZXlzW2ldXTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyYW5zIChrZXksIGxvY2FsZSkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmhhc1RyYW5zS2V5KGtleSwgbG9jYWxlKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0IDoga2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zIChrZXksIGxvY2FsZSkge1xyXG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCB0aGlzLl9sb2NhbGU7XHJcbiAgICAgICAga2V5ID0ga2V5IHx8ICcnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRyYW5zKGtleSwgbG9jYWxlKTtcclxuICAgIH1cclxufVxyXG4iLCJcclxuY2xhc3MgUGFzb29uYXRlIGV4dGVuZHMgQ29uc3RhbnRzIHtcclxuXHJcblx0Y29uc3RydWN0b3IgKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBtYWtlICh0aW1lc3RhbXAsIHRpbWV6b25lT2Zmc2V0KSB7XHJcblx0XHRyZXR1cm4gbmV3IENhbGVuZGFyTWFuYWdlcih0aW1lc3RhbXAsIHRpbWV6b25lT2Zmc2V0KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyB0cmFucyAoa2V5LCBsb2NhbGUpIHtcclxuXHRcdHJldHVybiBQYXNvb25hdGUubG9jYWxpemF0aW9uLnRyYW5zKGtleSwgbG9jYWxlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBzZXRMb2NhbGUgKGxvY2FsZSkge1xyXG5cdFx0UGFzb29uYXRlLmxvY2FsaXphdGlvbi5zZXRMb2NhbGUobG9jYWxlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRMb2NhbCAoKSB7XHJcblx0XHRyZXR1cm4gUGFzb29uYXRlLmxvY2FsaXphdGlvbi5nZXRMb2NhbCgpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGlzTG9jYWwgKGxvY2FsZSkge1xyXG5cdFx0cmV0dXJuIFBhc29vbmF0ZS5sb2NhbGl6YXRpb24uaXNMb2NhbChsb2NhbGUpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHNldEZvcm1hdHRlciAoZm9ybWF0dGVyKSB7XHJcblx0XHRQYXNvb25hdGUuZm9ybWF0dGVyID0gZm9ybWF0dGVyIGluc3RhbmNlb2YgRGF0ZUZvcm1hdCA/IGZvcm1hdHRlciA6IG5ldyBTaW1wbGVEYXRlRm9ybWF0KCk7XHJcblx0fVxyXG59XHJcblxyXG5QYXNvb25hdGUubG9jYWxpemF0aW9uID0gbmV3IExvY2FsaXphdGlvbigpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUGFzb29uYXRlLCAnbG9jYWxpemF0aW9uJywge1xyXG4gICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgY29uZmlndXJhYmxlOiBmYWxzZVxyXG59KTtcclxuXHJcblBhc29vbmF0ZS5mb3JtYXR0ZXIgPSBuZXcgU2ltcGxlRGF0ZUZvcm1hdCgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUGFzb29uYXRlLCAnZm9ybWF0dGVyJywge1xyXG4gICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICBjb25maWd1cmFibGU6IGZhbHNlXHJcbn0pO1xyXG4iLCJcclxubGV0IGZhID0ge1xyXG5cdGdyZWdvcmlhbjoge1xyXG5cdFx0ZGF5X25hbWU6IHtcclxuXHRcdFx0c3VuZGF5OiBcIlN1bmRheVwiXHJcblx0XHR9XHJcblx0fSxcclxuXHRqYWxhbGk6IHt9LFxyXG5cdGlzbGFtaWM6IHt9LFxyXG5cdHNoaWE6IHt9XHJcbn07XHJcblxyXG5QYXNvb25hdGUubG9jYWxpemF0aW9uLnNldExhbmcoJ2ZhJywgZmEpOyJdfQ==

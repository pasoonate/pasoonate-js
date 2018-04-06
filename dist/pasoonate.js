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
        let firstOfYearJulianday = this.dateToJulianDay(currentDate.year, 1, 1, 0, 0, 0);
        let currentJulianday = this.dateToJulianDay(currentDate.year, currentDate.month, currentDate.day, currentDate.hour, currentDate.minute, currentDate.second);

        return Math.floor(currentJulianday - firstOfYearJulianday + 1);
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
}

Object.assign(CalendarManager.prototype, BaseMethodsMixin);
class Constants {
	 
	constructor () {

	}
}
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
class Pasoonate extends Constants {

	constructor () {
		
	}

	static make (timestamp, timezoneOffset) {
		return new CalendarManager(timestamp, timezoneOffset);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9taXhpbi9CYXNlTWV0aG9kc01peGluLmpzIiwic3JjL0NhbGVuZGFyLmpzIiwic3JjL0NhbGVuZGFyTWFuYWdlci5qcyIsInNyYy9Db25zdGFudHMuanMiLCJzcmMvR3JlZ29yaWFuQ2FsZW5kYXIuanMiLCJzcmMvSXNsYW1pY0NhbGVuZGFyLmpzIiwic3JjL0phbGFsaUNhbGVuZGFyLmpzIiwic3JjL1Bhc29vbmF0ZS5qcyIsInNyYy9TaGlhQ2FsZW5kYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InBhc29vbmF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBCYXNlTWV0aG9kc01peGluID0ge1xyXG5cdHNldFRpbWVzdGFtcCAodGltZXN0YW1wKSB7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXA7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0Z2V0VGltZXN0YW1wICgpIHtcclxuXHRcdHJldHVybiB0aGlzLl90aW1lc3RhbXA7XHJcblx0fSxcclxuXHJcblx0c2V0VGltZXpvbmVPZmZzZXQgKHRpbWV6b25lT2Zmc2V0KSB7XHJcblx0XHR0aGlzLl90aW1lem9uZU9mZnNldCA9IHRpbWV6b25lT2Zmc2V0O1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdGdldFRpbWV6b25lT2Zmc2V0ICgpIHtcclxuXHRcdHJldHVybiB0aGlzLl90aW1lem9uZU9mZnNldDtcclxuXHR9LFxyXG5cclxuXHRzZXRZZWFyICh5ZWFyKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoeWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0Z2V0WWVhciAoKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0cmV0dXJuIGRhdGUueWVhcjtcclxuXHR9LFx0XHJcblxyXG5cdHNldE1vbnRoIChtb250aCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciwgbW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdGdldE1vbnRoICgpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRyZXR1cm4gZGF0ZS5tb250aDtcclxuXHR9LFxyXG5cclxuXHRzZXREYXkgKGRheSkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdGdldERheSAoKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0cmV0dXJuIGRhdGUuZGF5O1x0XHJcblx0fSxcclxuXHJcblx0c2V0SG91ciAoaG91cikge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXksIGhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdGdldEhvdXIgKCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdHJldHVybiBkYXRlLmhvdXI7XHJcblx0fSxcclxuXHJcblx0c2V0TWludXRlIChtaW51dGUpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIG1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRnZXRNaW51dGUgKCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdHJldHVybiBkYXRlLm1pbnV0ZTtcclxuXHR9LFxyXG5cclxuXHRzZXRTZWNvbmQgKHNlY29uZCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIHNlY29uZCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdGdldFNlY29uZCAoKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0cmV0dXJuIGRhdGUuc2Vjb25kO1xyXG5cdH0sXHJcblxyXG5cdHNldFVUQ1llYXIgKHllYXIpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRcclxuXHRnZXRVVENZZWFyICgpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0cmV0dXJuIGRhdGUueWVhcjtcclxuXHR9LFxyXG5cclxuXHRzZXRVVENNb250aCAobW9udGgpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIG1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRcclxuXHRnZXRVVENNb250aCAoKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcclxuXHRcdHJldHVybiBkYXRlLm1vbnRoO1xyXG5cdH0sXHJcblxyXG5cdHNldFVUQ0RheSAoZGF5KSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblx0XHJcblx0Z2V0VVRDRGF5ICgpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0cmV0dXJuIGRhdGUuZGF5O1x0XHJcblx0fSxcclxuXHJcblx0c2V0VVRDSG91ciAoaG91cikge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXksIGhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cdFxyXG5cdGdldFVUQ0hvdXIgKCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHRyZXR1cm4gZGF0ZS5ob3VyO1xyXG5cdH0sXHJcblxyXG5cdHNldFVUQ01pbnV0ZSAobWludXRlKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBtaW51dGUsIGRhdGUuc2Vjb25kKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblx0XHJcblx0Z2V0VVRDTWludXRlICgpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0cmV0dXJuIGRhdGUubWludXRlO1xyXG5cdH0sXHJcblxyXG5cdHNldFVUQ1NlY29uZCAoc2Vjb25kKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgc2Vjb25kKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdGdldFVUQ1NlY29uZCAoKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcclxuXHRcdHJldHVybiBkYXRlLnNlY29uZDtcclxuXHR9LFxyXG5cclxuXHRzZXREYXRlICh5ZWFyLCBtb250aCwgZGF5KSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoeWVhciwgbW9udGgsIGRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cdFxyXG5cdHNldFRpbWUgKGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cdFxyXG5cdHNldERhdGVUaW1lICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0c2V0VVRDRGF0ZSAoeWVhciwgbW9udGgsIGRheSkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKHllYXIsIG1vbnRoLCBkYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblx0XHJcblx0c2V0VVRDVGltZSAoaG91ciwgbWludXRlLCBzZWNvbmQpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cdFxyXG5cdHNldFVUQ0RhdGVUaW1lICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdGRheU9mV2VlayAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY3VycmVudENhbGVuZGFyLmRheU9mV2Vlayh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRheU9mWWVhciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXlPZlllYXIodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG4gICAgfSxcclxuXHJcbiAgICB3ZWVrT2ZNb250aCAoKSB7XHJcbiAgICBcdHJldHVybiB0aGlzLl9jdXJyZW50Q2FsZW5kYXIud2Vla09mTW9udGgodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG4gICAgfSxcclxuXHJcbiAgICB3ZWVrT2ZZZWFyICgpIHtcclxuICAgIFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRDYWxlbmRhci53ZWVrT2ZZZWFyKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuICAgIH0sXHJcbn07IiwiY2xhc3MgQ2FsZW5kYXIge1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuXHRcdHRoaXMuSjE5NzAgPSAyNDQwNTg3LjU7XHRcdFx0Ly8gSnVsaWFuIGRhdGUgYXQgVW5peCBlcG9jaDogMTk3MC0wMS0wMVxyXG5cdFx0dGhpcy5EYXlJblNlY29uZCA9IDg2NDAwO1xyXG5cdH1cdFxyXG5cclxuXHR0aW1lc3RhbXBUb0p1bGlhbkRheSAodGltZXN0YW1wKSB7XHJcblx0XHRsZXQganVsaWFuRGF5ID0gdGhpcy5KMTk3MCArIHRpbWVzdGFtcCAvIHRoaXMuRGF5SW5TZWNvbmQ7XHJcblxyXG5cdFx0cmV0dXJuIGp1bGlhbkRheTtcclxuXHR9XHJcblxyXG5cdGp1bGlhbkRheVRvVGltZXN0YW1wIChqdWxpYW5EYXkpIHtcclxuXHRcdGxldCB0aW1lc3RhbXAgPSBNYXRoLnJvdW5kKChqdWxpYW5EYXkgLSB0aGlzLkoxOTcwKSAqIHRoaXMuRGF5SW5TZWNvbmQpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGltZXN0YW1wO1xyXG4gICAgfVxyXG5cclxuXHRqdWxpYW5EYXlXaXRob3V0VGltZSAoanVsaWFuRGF5KSB7XHJcblx0XHRcclxuXHRcdHJldHVybiBNYXRoLmZsb29yKGp1bGlhbkRheSkgKyAwLjU7XHJcblx0fVxyXG5cclxuXHRleHRyYWN0SnVsaWFuRGF5VGltZSAoanVsaWFuRGF5KSB7XHJcbiAgICAgICAganVsaWFuRGF5ICs9IDAuNTtcclxuXHJcbiAgICAgICAgLy8gQXN0cm9ub21pY2FsIHRvIGNpdmlsXHJcbiAgICAgICAgbGV0IHRpbWUgPSAoKGp1bGlhbkRheSAtIE1hdGguZmxvb3IoanVsaWFuRGF5KSkgKiB0aGlzLkRheUluU2Vjb25kKSArIDAuNTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICBcdFwiaG91clwiOiBNYXRoLmZsb29yKHRpbWUgLyAzNjAwKSxcclxuICAgICAgICBcdFwibWludXRlXCI6IE1hdGguZmxvb3IoKHRpbWUgLyA2MCkgJSA2MCksXHJcbiAgICAgICAgXHRcInNlY29uZFwiOiBNYXRoLmZsb29yKHRpbWUgJSA2MClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRpbWVUb0p1bGlhbkRheSAoanVsaWFuRGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xyXG4gICAgXHRsZXQgdGltZXN0YW1wID0gdGhpcy5qdWxpYW5EYXlUb1RpbWVzdGFtcChqdWxpYW5EYXkpO1xyXG4gICAgXHR0aW1lc3RhbXAgKz0gKGhvdXIgKiAzNjAwKSArIChtaW51dGUgKiA2MCkgKyBzZWNvbmQ7XHJcblxyXG4gICAgXHRyZXR1cm4gdGhpcy50aW1lc3RhbXBUb0p1bGlhbkRheSh0aW1lc3RhbXApO1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGVUb0p1bGlhbkRheSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGVUb1RpbWVzdGFtcCAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcclxuICAgICAgICBsZXQganVsaWFuRGF5ID0gdGhpcy5kYXRlVG9KdWxpYW5EYXkgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuanVsaWFuRGF5VG9UaW1lc3RhbXAoanVsaWFuRGF5KTtcclxuICAgIH1cclxuXHJcbiAgICBqdWxpYW5EYXlUb0RhdGUgKGp1bGlhbkRheSkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcblxyXG4gICAgdGltZXN0YW1wVG9EYXRlICh0aW1lc3RhbXApIHtcclxuICAgICAgICBsZXQganVsaWFuRGF5ID0gdGhpcy50aW1lc3RhbXBUb0p1bGlhbkRheSh0aW1lc3RhbXApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5qdWxpYW5EYXlUb0RhdGUoanVsaWFuRGF5KTtcclxuICAgIH1cclxuXHJcbiAgICBkYXlzSW5Nb250aCAoeWVhciwgbW9udGgpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBkYXlPZldlZWsgKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIGxldCBqdWxpYW5EYXkgPSB0aGlzLnRpbWVzdGFtcFRvSnVsaWFuRGF5KHRpbWVzdGFtcCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kKE1hdGguZmxvb3IoKGp1bGlhbkRheSArIDIuNSkpLCA3KTtcclxuICAgIH1cclxuXHJcbiAgICBkYXlPZlllYXIgKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IHRoaXMudGltZXN0YW1wVG9EYXRlKHRpbWVzdGFtcCk7XHJcbiAgICAgICAgbGV0IGZpcnN0T2ZZZWFySnVsaWFuZGF5ID0gdGhpcy5kYXRlVG9KdWxpYW5EYXkoY3VycmVudERhdGUueWVhciwgMSwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRKdWxpYW5kYXkgPSB0aGlzLmRhdGVUb0p1bGlhbkRheShjdXJyZW50RGF0ZS55ZWFyLCBjdXJyZW50RGF0ZS5tb250aCwgY3VycmVudERhdGUuZGF5LCBjdXJyZW50RGF0ZS5ob3VyLCBjdXJyZW50RGF0ZS5taW51dGUsIGN1cnJlbnREYXRlLnNlY29uZCk7XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGN1cnJlbnRKdWxpYW5kYXkgLSBmaXJzdE9mWWVhckp1bGlhbmRheSArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHdlZWtPZk1vbnRoICh0aW1lc3RhbXApIHtcclxuICAgICAgICBsZXQgY3VycmVudERhdGUgPSB0aGlzLnRpbWVzdGFtcFRvRGF0ZSh0aW1lc3RhbXApO1xyXG4gICAgICAgIGxldCBmaXJzdERheU9mTW9udGhUaW1lc3RhbXAgPSB0aGlzLmRhdGVUb1RpbWVzdGFtcChjdXJyZW50RGF0ZS55ZWFyLCBjdXJyZW50RGF0ZS5tb250aCwgMSwgY3VycmVudERhdGUuaG91ciwgY3VycmVudERhdGUubWludXRlLCBjdXJyZW50RGF0ZS5zZWNvbmQpO1xyXG4gICAgICAgIGxldCBkYXlPZldlZWtJbkN1cnJlbnREYXlPZk1vbnRoID0gdGhpcy5kYXlPZldlZWsodGltZXN0YW1wKTtcclxuICAgICAgICBsZXQgZGF5T2ZXZWVrSW5GaXJzdERheU9mTW9udGggPSB0aGlzLmRheU9mV2VlayhmaXJzdERheU9mTW9udGhUaW1lc3RhbXApO1xyXG5cclxuICAgICAgICBsZXQgd2VlayA9IDE7XHJcblxyXG4gICAgICAgIGlmKGN1cnJlbnREYXRlLmRheSA8PSA3IC0gZGF5T2ZXZWVrSW5GaXJzdERheU9mTW9udGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdlZWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3ZWVrICs9ICgoY3VycmVudERhdGUuZGF5IC0gKCg3IC0gZGF5T2ZXZWVrSW5GaXJzdERheU9mTW9udGgpICsgKGRheU9mV2Vla0luQ3VycmVudERheU9mTW9udGggKyAxKSkpIC8gNykgKyAxO1xyXG5cclxuICAgICAgICByZXR1cm4gd2VlaztcclxuICAgIH1cclxuXHJcbiAgICB3ZWVrT2ZZZWFyICh0aW1lc3RhbXApIHtcclxuICAgICAgICBsZXQgY3VycmVudERhdGUgPSB0aGlzLnRpbWVzdGFtcFRvRGF0ZSh0aW1lc3RhbXApO1xyXG4gICAgICAgIGxldCBkYXlPZlllYXIgPSB0aGlzLmRheU9mWWVhcih0aW1lc3RhbXApO1xyXG4gICAgICAgIGxldCBmaXJzdERheU9mWWVhclRpbWVzdGFtcCA9IHRoaXMuZGF0ZVRvVGltZXN0YW1wKGN1cnJlbnREYXRlLnllYXIsIDEsIDEsIGN1cnJlbnREYXRlLmhvdXIsIGN1cnJlbnREYXRlLm1pbnV0ZSwgY3VycmVudERhdGUuc2Vjb25kKTtcclxuICAgICAgICBsZXQgZGF5T2ZXZWVrSW5DdXJyZW50RGF5T2ZZZWFyID0gdGhpcy5kYXlPZldlZWsodGltZXN0YW1wKTtcclxuICAgICAgICBsZXQgZGF5T2ZXZWVrSW5GaXJzdERheU9mWWVhciA9IHRoaXMuZGF5T2ZXZWVrKGZpcnN0RGF5T2ZZZWFyVGltZXN0YW1wKTtcclxuXHJcbiAgICAgICAgbGV0IHdlZWsgPSAxO1xyXG5cclxuICAgICAgICBpZihkYXlPZlllYXIgPD0gNyAtIGRheU9mV2Vla0luRmlyc3REYXlPZlllYXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdlZWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3ZWVrICs9ICgoZGF5T2ZZZWFyIC0gKCg3IC0gZGF5T2ZXZWVrSW5GaXJzdERheU9mWWVhcikgKyAoZGF5T2ZXZWVrSW5DdXJyZW50RGF5T2ZZZWFyICsgMSkpKSAvIDcpICsgMTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHdlZWs7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgbW9kIChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGEgLSAoYiAqIE1hdGguZmxvb3IoYSAvIGIpKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0xlYXAgKHllYXIpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxufSIsImNsYXNzIENhbGVuZGFyTWFuYWdlciB7XHJcblx0XHJcblx0Y29uc3RydWN0b3IgKHRpbWVzdGFtcCwgdGltZXpvbmVPZmZzZXQpIHtcclxuXHRcdHRoaXMuX2dyZWdvcmlhbiA9IG5ldyBHcmVnb3JpYW5DYWxlbmRhcigpO1x0XHJcblx0XHR0aGlzLl9qYWxhbGkgPSBuZXcgSmFsYWxpQ2FsZW5kYXIoKTtcdFxyXG5cdFx0dGhpcy5faXNsYW1pYyA9IG5ldyBJc2xhbWljQ2FsZW5kYXIoKTtcdFxyXG5cdFx0dGhpcy5fc2hpYSA9IG5ldyBTaGlhQ2FsZW5kYXIoKTtcclxuXHRcdHRoaXMuX2N1cnJlbnRDYWxlbmRhciA9IG51bGw7XHJcblxyXG5cdFx0bGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIHx8IE1hdGguZmxvb3IoZGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTsgLy8gbWlsaXNlY29uZCB0byBzZWNvbmRzXHJcblx0XHR0aGlzLl90aW1lem9uZU9mZnNldCA9IHRpbWV6b25lT2Zmc2V0IHx8IC1kYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDsgLy8gbWludXRlICogNjAgPSBvZmZzZXQgaW4gc2Vjb25kc1xyXG5cdH1cclxuXHJcblx0Z3JlZ29yaWFuICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9ncmVnb3JpYW4udGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHRcdFxyXG5cdFx0eWVhciA9IHllYXIgfHwgZGF0ZS55ZWFyO1xyXG5cdFx0bW9udGggPSBtb250aCB8fCBkYXRlLm1vbnRoO1xyXG5cdFx0ZGF5ID0gZGF5IHx8IGRhdGUuZGF5O1xyXG5cdFx0aG91ciA9IGhvdXIgfHwgZGF0ZS5ob3VyO1xyXG5cdFx0bWludXRlID0gbWludXRlIHx8IGRhdGUubWludXRlO1xyXG5cdFx0c2Vjb25kID0gc2Vjb25kIHx8IGRhdGUuc2Vjb25kO1xyXG5cclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2dyZWdvcmlhbi5kYXRlVG9UaW1lc3RhbXAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cdFx0dGhpcy5fY3VycmVudENhbGVuZGFyID0gdGhpcy5fZ3JlZ29yaWFuO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRqYWxhbGkgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2phbGFsaS50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcdFx0XHJcblx0XHR5ZWFyID0geWVhciB8fCBkYXRlLnllYXI7XHJcblx0XHRtb250aCA9IG1vbnRoIHx8IGRhdGUubW9udGg7XHJcblx0XHRkYXkgPSBkYXkgfHwgZGF0ZS5kYXk7XHJcblx0XHRob3VyID0gaG91ciB8fCBkYXRlLmhvdXI7XHJcblx0XHRtaW51dGUgPSBtaW51dGUgfHwgZGF0ZS5taW51dGU7XHJcblx0XHRzZWNvbmQgPSBzZWNvbmQgfHwgZGF0ZS5zZWNvbmQ7XHJcblxyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5famFsYWxpLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XHJcblx0XHR0aGlzLl9jdXJyZW50Q2FsZW5kYXIgPSB0aGlzLl9qYWxhbGk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGlzbGFtaWMgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2lzbGFtaWMudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHRcdFxyXG5cdFx0eWVhciA9IHllYXIgfHwgZGF0ZS55ZWFyO1xyXG5cdFx0bW9udGggPSBtb250aCB8fCBkYXRlLm1vbnRoO1xyXG5cdFx0ZGF5ID0gZGF5IHx8IGRhdGUuZGF5O1xyXG5cdFx0aG91ciA9IGhvdXIgfHwgZGF0ZS5ob3VyO1xyXG5cdFx0bWludXRlID0gbWludXRlIHx8IGRhdGUubWludXRlO1xyXG5cdFx0c2Vjb25kID0gc2Vjb25kIHx8IGRhdGUuc2Vjb25kO1xyXG5cclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2lzbGFtaWMuZGF0ZVRvVGltZXN0YW1wKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcclxuXHRcdHRoaXMuX2N1cnJlbnRDYWxlbmRhciA9IHRoaXMuX2lzbGFtaWM7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHNoaWEgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX3NoaWEudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHRcdFxyXG5cdFx0eWVhciA9IHllYXIgfHwgZGF0ZS55ZWFyO1xyXG5cdFx0bW9udGggPSBtb250aCB8fCBkYXRlLm1vbnRoO1xyXG5cdFx0ZGF5ID0gZGF5IHx8IGRhdGUuZGF5O1xyXG5cdFx0aG91ciA9IGhvdXIgfHwgZGF0ZS5ob3VyO1xyXG5cdFx0bWludXRlID0gbWludXRlIHx8IGRhdGUubWludXRlO1xyXG5cdFx0c2Vjb25kID0gc2Vjb25kIHx8IGRhdGUuc2Vjb25kO1xyXG5cclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX3NoaWEuZGF0ZVRvVGltZXN0YW1wKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcclxuXHRcdHRoaXMuX2N1cnJlbnRDYWxlbmRhciA9IHRoaXMuX3NoaWE7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHRcclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihDYWxlbmRhck1hbmFnZXIucHJvdG90eXBlLCBCYXNlTWV0aG9kc01peGluKTsiLCJjbGFzcyBDb25zdGFudHMge1xyXG5cdCBcclxuXHRjb25zdHJ1Y3RvciAoKSB7XHJcblxyXG5cdH1cclxufSIsImNsYXNzIEdyZWdvcmlhbkNhbGVuZGFyIGV4dGVuZHMgQ2FsZW5kYXIge1xyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuR3JlZ29yaWFuRXBvY2ggPSAxNzIxNDI1LjU7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdHcmVnb3JpYW5FcG9jaCcsIHtcclxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG5cclxuXHRkYXRlVG9KdWxpYW5EYXkgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XHJcblx0XHRsZXQganVsaWFuRGF5ID0gdGhpcy5HcmVnb3JpYW5FcG9jaCAtIDE7XHJcblxyXG5cdFx0anVsaWFuRGF5ICs9IDM2NSAqICh5ZWFyIC0gMSk7XHJcblx0XHRqdWxpYW5EYXkgKz0gTWF0aC5mbG9vcigoeWVhciAtIDEpIC8gNCk7XHJcblx0XHRqdWxpYW5EYXkgKz0gTWF0aC5mbG9vcigoeWVhciAtIDEpIC8gMTAwKSAqIC0xO1xyXG5cdFx0anVsaWFuRGF5ICs9IE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQwMCk7XHJcblx0XHRqdWxpYW5EYXkgKz0gTWF0aC5mbG9vcigoKCgzNjcgKiBtb250aCkgLSAzNjIpIC8gMTIpICsgKChtb250aCA8PSAyKSA/IDAgOiAodGhpcy5pc0xlYXAoeWVhcikgPyAtMSA6IC0yKSkgKyBkYXkpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmFkZFRpbWVUb0p1bGlhbkRheShqdWxpYW5EYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcclxuXHR9XHJcblxyXG4gICAganVsaWFuRGF5VG9EYXRlIChqdWxpYW5EYXkpIHtcclxuICAgIFx0bGV0IHRpbWUgPSB0aGlzLmV4dHJhY3RKdWxpYW5EYXlUaW1lKGp1bGlhbkRheSk7XHJcbiAgICBcdFxyXG4gICAgXHRqdWxpYW5EYXkgPSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKGp1bGlhbkRheSk7XHJcblxyXG4gICAgXHRsZXQgd2pkID0gTWF0aC5mbG9vcihqdWxpYW5EYXkgLSAwLjUpICsgMC41O1xyXG4gICAgICAgIGxldCBkZXBvY2ggPSB3amQgLSB0aGlzLkdyZWdvcmlhbkVwb2NoO1xyXG4gICAgICAgIGxldCBxdWFkcmljZW50ID0gTWF0aC5mbG9vcihkZXBvY2ggLyAxNDYwOTcpO1xyXG4gICAgICAgIGxldCBkcWMgPSB0aGlzLm1vZChkZXBvY2gsIDE0NjA5Nyk7XHJcbiAgICAgICAgbGV0IGNlbnQgPSBNYXRoLmZsb29yKGRxYyAvIDM2NTI0KTtcclxuICAgICAgICBsZXQgZGNlbnQgPSB0aGlzLm1vZChkcWMsIDM2NTI0KTtcclxuICAgICAgICBsZXQgcXVhZCA9IE1hdGguZmxvb3IoZGNlbnQgLyAxNDYxKTtcclxuICAgICAgICBsZXQgZHF1YWQgPSB0aGlzLm1vZChkY2VudCwgMTQ2MSk7XHJcbiAgICAgICAgbGV0IHlpbmRleCA9IE1hdGguZmxvb3IoZHF1YWQgLyAzNjUpO1xyXG4gICAgICAgIGxldCB5ZWFyID0gKHF1YWRyaWNlbnQgKiA0MDApICsgKGNlbnQgKiAxMDApICsgKHF1YWQgKiA0KSArIHlpbmRleDtcclxuICAgICAgICBpZiAoISgoY2VudCA9PSA0KSB8fCAoeWluZGV4ID09IDQpKSkge1xyXG4gICAgICAgICAgICB5ZWFyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB5ZWFyZGF5ID0gd2pkIC0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZSh0aGlzLmRhdGVUb0p1bGlhbkRheSh5ZWFyLCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpO1xyXG4gICAgICAgIGxldCBsZWFwYWRqID0gKHdqZCA8IHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoeWVhciwgMywgMSwgdGltZS5ob3VyLCB0aW1lLm1pbnV0ZSwgdGltZS5zZWNvbmQpKSA/IDAgOiAodGhpcy5pc0xlYXAoeWVhcikgPyAxIDogMikpO1xyXG4gICAgICAgIGxldCBtb250aCA9IE1hdGguZmxvb3IoKCgoeWVhcmRheSArIGxlYXBhZGopICogMTIpICsgMzczKSAvIDM2Nyk7XHJcbiAgICAgICAgbGV0IGRheSA9ICh3amQgLSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIG1vbnRoLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSArIDE7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgXHRcInllYXJcIjogeWVhcixcclxuICAgICAgICBcdFwibW9udGhcIjogbW9udGgsXHJcbiAgICAgICAgXHRcImRheVwiOiBkYXksXHJcbiAgICAgICAgXHRcImhvdXJcIjogdGltZS5ob3VyLFxyXG4gICAgICAgIFx0XCJtaW51dGVcIjogdGltZS5taW51dGUsXHJcbiAgICAgICAgXHRcInNlY29uZFwiOiB0aW1lLnNlY29uZCxcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRheXNJbk1vbnRoICh5ZWFyLCBtb250aCkge1xyXG4gICAgICAgIGxldCBncmVnb3JpYW5EYXlzSW5Nb250aCA9IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAobW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXhjZXB0aW9uKFwiJG1vbnRoIE91dCBPZiBSYW5nZSBFeGNlcHRpb25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh5ZWFyICYmIHRoaXMuaXNMZWFwKHllYXIpICYmIG1vbnRoID09IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDI5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZ3JlZ29yaWFuRGF5c0luTW9udGhbbW9udGggLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBpc0xlYXAgKHllYXIpIHtcclxuICAgICAgICByZXR1cm4gKCh5ZWFyICUgNCkgPT0gMCkgJiYgKCEoKCh5ZWFyICUgMTAwKSA9PSAwKSAmJiAoKHllYXIgJSA0MDApICE9IDApKSk7XHJcbiAgICB9XHJcbn0iLCJjbGFzcyBJc2xhbWljQ2FsZW5kYXIgZXh0ZW5kcyBDYWxlbmRhciB7XHJcblx0XHJcblx0Y29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgXHJcblx0XHR0aGlzLklzbGFtaWNFcG9jaCA9IDE5NDg0MzkuNTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnSXNsYW1pY0Vwb2NoJywge1xyXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHR9XHJcblxyXG5cdGRhdGVUb0p1bGlhbkRheSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcclxuICAgICAgICBsZXQganVsaWFuRGF5ID0gZGF5O1xyXG5cclxuICAgICAgICBqdWxpYW5EYXkgKz0gTWF0aC5jZWlsKChtb250aCAtIDEpICogMjkuNSk7XHJcbiAgICAgICAganVsaWFuRGF5ICs9ICh5ZWFyIC0gMSkgKiAzNTQ7XHJcbiAgICAgICAganVsaWFuRGF5ICs9IE1hdGguZmxvb3IoKCgxMSAqIHllYXIpICsgMykgLyAzMCk7XHJcbiAgICAgICAganVsaWFuRGF5ICs9IHRoaXMuSXNsYW1pY0Vwb2NoIC0gMTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5hZGRUaW1lVG9KdWxpYW5EYXkoanVsaWFuRGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XHJcblx0fVxyXG5cclxuICAgIGp1bGlhbkRheVRvRGF0ZSAoanVsaWFuRGF5KSB7XHJcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLmV4dHJhY3RKdWxpYW5EYXlUaW1lKGp1bGlhbkRheSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAganVsaWFuRGF5ID0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZShqdWxpYW5EYXkpO1xyXG4gICAgICAgIGp1bGlhbkRheSA9IE1hdGguZmxvb3IoanVsaWFuRGF5KSArIDAuNTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgeWVhciA9IE1hdGguZmxvb3IoKCgoanVsaWFuRGF5IC0gdGhpcy5Jc2xhbWljRXBvY2gpICogMzApICsgMTA2NDYpIC8gMTA2MzEpO1xyXG4gICAgICAgIGxldCBtb250aCA9IE1hdGgubWluKDEyLCBNYXRoLmNlaWwoKGp1bGlhbkRheSAtICgyOSArIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoeWVhciwgMSwgMSwgdGltZS5ob3VyLCB0aW1lLm1pbnV0ZSwgdGltZS5zZWNvbmQpKSkpIC8gMjkuNSkgKyAxKTtcclxuICAgICAgICBsZXQgZGF5ID0gKGp1bGlhbkRheSAtIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoeWVhciwgbW9udGgsIDEsIHRpbWUuaG91ciwgdGltZS5taW51dGUsIHRpbWUuc2Vjb25kKSkpICsgMTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICBcdFwieWVhclwiOiB5ZWFyLFxyXG4gICAgICAgIFx0XCJtb250aFwiOiBtb250aCxcclxuICAgICAgICBcdFwiZGF5XCI6IGRheSxcclxuICAgICAgICBcdFwiaG91clwiOiB0aW1lLmhvdXIsXHJcbiAgICAgICAgXHRcIm1pbnV0ZVwiOiB0aW1lLm1pbnV0ZSxcclxuICAgICAgICBcdFwic2Vjb25kXCI6IHRpbWUuc2Vjb25kLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYXlzSW5Nb250aCAoeWVhciwgbW9udGgpIHtcclxuICAgICAgICBsZXQgaXNsYW1pY0RheXNJbk1vbnRoID0gWzMwLCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMjldOyAvLzMwXHJcblxyXG4gICAgICAgIGlmIChtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFeGNlcHRpb24oXCIkbW9udGggT3V0IE9mIFJhbmdlIEV4Y2VwdGlvblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHllYXIgJiYgdGhpcy5pc0xlYXAoeWVhcikgJiYgbW9udGggPT0gMTIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDMwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gaXNsYW1pY0RheXNJbk1vbnRoW21vbnRoIC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgaXNMZWFwICh5ZWFyKSB7XHJcbiAgICAgICAgbGV0IGlzTGVhcCA9ICgoKHllYXIgKiAxMSkgKyAxNCkgJSAzMCkgPCAxMTtcclxuICAgICAgICByZXR1cm4gaXNMZWFwO1xyXG4gICAgfVxyXG59IiwiY2xhc3MgSmFsYWxpQ2FsZW5kYXIgZXh0ZW5kcyBDYWxlbmRhciB7XHJcblx0XHJcblx0Y29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5KYWxhbGlFcG9jaCA9IDE5NDgzMjAuNTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnSmFsYWxpRXBvY2gnLCB7XHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cdH1cclxuXHJcblx0ZGF0ZVRvSnVsaWFuRGF5ICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xyXG5cdFx0bGV0IGVwb2NoQmFzZSA9IHllYXIgLSAoeWVhciA+PSAwID8gNDc0IDogNDczKTtcclxuICAgICAgICBsZXQgZXBvY2hZZWFyID0gNDc0ICsgdGhpcy5tb2QoZXBvY2hCYXNlLCAyODIwKTtcclxuICAgICAgICBsZXQganVsaWFuRGF5ID0gZGF5O1xyXG5cclxuICAgICAgICBqdWxpYW5EYXkgKz0gbW9udGggPD0gNyA/IChtb250aCAtIDEpICogMzEgOiAoKG1vbnRoIC0gMSkgKiAzMCkgKyA2O1xyXG4gICAgICAgIGp1bGlhbkRheSArPSBNYXRoLmZsb29yKCgoZXBvY2hZZWFyICogNjgyKSAtIDExMCkgLyAyODE2KTtcclxuICAgICAgICBqdWxpYW5EYXkgKz0gKGVwb2NoWWVhciAtIDEpICogMzY1O1xyXG4gICAgICAgIGp1bGlhbkRheSArPSBNYXRoLmZsb29yKGVwb2NoQmFzZSAvIDI4MjApICogMTAyOTk4MztcclxuICAgICAgICBqdWxpYW5EYXkgKz0gdGhpcy5KYWxhbGlFcG9jaCAtIDE7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuYWRkVGltZVRvSnVsaWFuRGF5KGp1bGlhbkRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cdH1cclxuXHJcbiAgICBqdWxpYW5EYXlUb0RhdGUgKGp1bGlhbkRheSkge1xyXG4gICAgXHRsZXQgdGltZSA9IHRoaXMuZXh0cmFjdEp1bGlhbkRheVRpbWUoanVsaWFuRGF5KTtcclxuICAgIFx0XHJcbiAgICBcdGp1bGlhbkRheSA9IHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUoanVsaWFuRGF5KTtcclxuXHJcbiAgICBcdGp1bGlhbkRheSA9IE1hdGguZmxvb3IoanVsaWFuRGF5KSArIDAuNTtcclxuXHJcbiAgICAgICAgbGV0IGRlcG9jaCA9IGp1bGlhbkRheSAtIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoNDc1LCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpO1xyXG4gICAgICAgIGxldCBjeWNsZSA9IE1hdGguZmxvb3IoZGVwb2NoIC8gMTAyOTk4Myk7XHJcbiAgICAgICAgbGV0IGN5ZWFyID0gdGhpcy5tb2QoZGVwb2NoLCAxMDI5OTgzKTsgICAgICAgIFxyXG4gICAgXHRsZXQgeWN5Y2xlLCBhdXgxLCBhdXgyO1xyXG5cclxuICAgICAgICBpZiAoY3llYXIgPT0gMTAyOTk4Mikge1xyXG4gICAgICAgICAgICB5Y3ljbGUgPSAyODIwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF1eDEgPSBNYXRoLmZsb29yKGN5ZWFyIC8gMzY2KTtcclxuICAgICAgICAgICAgYXV4MiA9IHRoaXMubW9kKGN5ZWFyLCAzNjYpO1xyXG4gICAgICAgICAgICB5Y3ljbGUgPSBNYXRoLmZsb29yKCgoMjEzNCAqIGF1eDEpICsgKDI4MTYgKiBhdXgyKSArIDI4MTUpIC8gMTAyODUyMikgKyBhdXgxICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHllYXIgPSB5Y3ljbGUgKyAoMjgyMCAqIGN5Y2xlKSArIDQ3NDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoeWVhciA8PSAwKSB7XHJcbiAgICAgICAgICAgIHllYXItLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHlkYXkgPSAoanVsaWFuRGF5IC0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZSh0aGlzLmRhdGVUb0p1bGlhbkRheSh5ZWFyLCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSArIDE7XHJcbiAgICAgICAgbGV0IG1vbnRoID0gKHlkYXkgPD0gMTg2KSA/IE1hdGguY2VpbCh5ZGF5IC8gMzEpIDogTWF0aC5jZWlsKCh5ZGF5IC0gNikgLyAzMCk7XHJcbiAgICAgICAgbGV0IGRheSA9IChqdWxpYW5EYXkgLSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIG1vbnRoLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSArIDE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgXHRcInllYXJcIjogeWVhcixcclxuICAgICAgICBcdFwibW9udGhcIjogbW9udGgsXHJcbiAgICAgICAgXHRcImRheVwiOiBkYXksXHJcbiAgICAgICAgXHRcImhvdXJcIjogdGltZS5ob3VyLFxyXG4gICAgICAgIFx0XCJtaW51dGVcIjogdGltZS5taW51dGUsXHJcbiAgICAgICAgXHRcInNlY29uZFwiOiB0aW1lLnNlY29uZCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF5c0luTW9udGggKHllYXIsIG1vbnRoKSB7XHJcbiAgICAgICAgbGV0IGdyZWdvcmlhbkRheXNJbk1vbnRoID0gWzMxLCAzMSwgMzEsIDMxLCAzMSwgMzEsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMjldOyAvLzMwXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG1vbnRoIDwgMSB8fCBtb250aCA+IDEyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUV4Y2VwdGlvbihcIiRtb250aCBPdXQgT2YgUmFuZ2UgRXhjZXB0aW9uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoeWVhciAmJiB0aGlzLmlzTGVhcCh5ZWFyKSAmJiBtb250aCA9PSAxMikge1xyXG4gICAgICAgICAgICByZXR1cm4gMzA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBncmVnb3JpYW5EYXlzSW5Nb250aFttb250aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTGVhcCAoeWVhcikge1xyXG4gICAgICAgIHJldHVybiAoKCgoKCh5ZWFyIC0gKCh5ZWFyID4gMCkgPyA0NzQgOiA0NzMpKSAlIDI4MjApICsgNDc0KSArIDM4KSAqIDY4MikgJSAyODE2KSA8IDY4MjtcclxuICAgIH1cclxufSIsImNsYXNzIFBhc29vbmF0ZSBleHRlbmRzIENvbnN0YW50cyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0c3RhdGljIG1ha2UgKHRpbWVzdGFtcCwgdGltZXpvbmVPZmZzZXQpIHtcclxuXHRcdHJldHVybiBuZXcgQ2FsZW5kYXJNYW5hZ2VyKHRpbWVzdGFtcCwgdGltZXpvbmVPZmZzZXQpO1xyXG5cdH1cclxufSIsImNsYXNzIFNoaWFDYWxlbmRhciBleHRlbmRzIENhbGVuZGFyIHtcclxuXHRcclxuXHRjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBcclxuXHRcdHRoaXMuU2hpYUVwb2NoID0gMTk0ODQzOS41O1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdTaGlhRXBvY2gnLCB7XHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cdH1cclxuXHJcblx0ZGF0ZVRvSnVsaWFuRGF5ICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xyXG4gICAgICAgIGxldCBkYXlPZlllYXIgPSBkYXk7XHJcbiAgICAgICAgbGV0IGp1bGlhbkRheSA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbW9udGg7IGkrKykge1xyXG4gICAgICAgICAgICBkYXlPZlllYXIgKz0gdGhpcy5kYXlzSW5Nb250aCh5ZWFyLCBpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGp1bGlhbkRheSArPSBkYXlPZlllYXI7XHJcbiAgICAgICAganVsaWFuRGF5ICs9ICh5ZWFyIC0gMSkgKiAzNTQ7XHJcbiAgICAgICAganVsaWFuRGF5ICs9IE1hdGguZmxvb3IoKCgxMSAqIHllYXIpICsgMykgLyAzMCk7XHJcbiAgICAgICAganVsaWFuRGF5ICs9IHRoaXMuU2hpYUVwb2NoIC0gMTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5hZGRUaW1lVG9KdWxpYW5EYXkoanVsaWFuRGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XHJcblx0fVxyXG5cclxuICAgIGp1bGlhbkRheVRvRGF0ZSAoanVsaWFuRGF5KSB7XHJcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLmV4dHJhY3RKdWxpYW5EYXlUaW1lKGp1bGlhbkRheSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAganVsaWFuRGF5ID0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZShqdWxpYW5EYXkpO1xyXG4gICAgICAgIGp1bGlhbkRheSA9IE1hdGguZmxvb3IoanVsaWFuRGF5KSArIDAuNTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgeWVhciA9IE1hdGguZmxvb3IoKCgoanVsaWFuRGF5IC0gdGhpcy5TaGlhRXBvY2gpICogMzApICsgMTA2NDYpIC8gMTA2MzEpO1xyXG4gICAgICAgIGxldCBtb250aCA9IE1hdGgubWluKDEyLCBNYXRoLmNlaWwoKGp1bGlhbkRheSAtICgyOSArIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoeWVhciwgMSwgMSwgdGltZS5ob3VyLCB0aW1lLm1pbnV0ZSwgdGltZS5zZWNvbmQpKSkpIC8gMjkuNSkgKyAxKTtcclxuICAgICAgICBsZXQgZGF5T2ZZZWFyID0ganVsaWFuRGF5IC0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZSh0aGlzLmRhdGVUb0p1bGlhbkRheSh5ZWFyLCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpO1xyXG4gICAgICAgIGxldCBkYXlzID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRheXMgKz0gdGhpcy5kYXlzSW5Nb250aCh5ZWFyLCBpKTtcclxuICAgICAgICAgICAgaWYgKGRheU9mWWVhciA8IGRheXMpIHtcclxuICAgICAgICAgICAgICAgIG1vbnRoID0gaTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkYXkgPSAoanVsaWFuRGF5IC0gKChkYXlzIC0gdGhpcy5kYXlzSW5Nb250aCh5ZWFyLCBtb250aCkpICsgKCh5ZWFyIC0gMSkgKiAzNTQpICsgTWF0aC5mbG9vcigoMyArICgxMSAqIHllYXIpKSAvIDMwKSArIHRoaXMuU2hpYUVwb2NoKSArIDEpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgIFx0XCJ5ZWFyXCI6IHllYXIsXHJcbiAgICAgICAgXHRcIm1vbnRoXCI6IG1vbnRoLFxyXG4gICAgICAgIFx0XCJkYXlcIjogZGF5LFxyXG4gICAgICAgIFx0XCJob3VyXCI6IHRpbWUuaG91cixcclxuICAgICAgICBcdFwibWludXRlXCI6IHRpbWUubWludXRlLFxyXG4gICAgICAgIFx0XCJzZWNvbmRcIjogdGltZS5zZWNvbmQsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRheXNJbk1vbnRoICh5ZWFyLCBtb250aCkge1xyXG4gXHRcdGxldCBpc2xhbWljRGF5c0luTW9udGggPSBbMzAsIDI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAyOV07IC8vMzBcclxuICAgICAgICBsZXQgc2hpYURheXNJbk1vbnRoSW5ZZWFycyA9IHtcclxuICAgICAgICAgICAgMTQzNTogWzI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMzAsIDMwLCAyOSwgMzBdLFxyXG4gICAgICAgICAgICAxNDM2OiBbMjksIDMwLCAyOSwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAzMF0sXHJcbiAgICAgICAgICAgIDE0Mzc6IFsyOSwgMzAsIDMwLCAyOSwgMzAsIDI5LCAyOSwgMzAsIDI5LCAyOSwgMzAsIDMwXSxcclxuICAgICAgICAgICAgMTQzODogWzI5LCAzMCwgMzAsIDMwLCAyOSwgMzAsIDI5LCAyOSwgMzAsIDI5LCAyOSwgMzBdLFxyXG4gICAgICAgICAgICAxNDM5OiBbMjksIDMwLCAzMCwgMzAsIDMwLCAyOSwgMzAsIDI5LCAyOSwgMzAsIDI5LCAyOV0sXHJcbiAgICAgICAgICAgIDE0NDA6IFszMCwgMjksIDMwLCAzMCwgMzAsIDI5LCAyOSwgMzAsIDI5LCAzMCwgMjksIDI5XSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAobW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXhjZXB0aW9uKFwiJG1vbnRoIE91dCBPZiBSYW5nZSBFeGNlcHRpb25cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2hpYURheXNJbk1vbnRoSW5ZZWFyc1t5ZWFyXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc2xhbWljRGF5c0luTW9udGhbbW9udGggLSAxXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzaGlhRGF5c0luTW9udGhJblllYXJzW3llYXJdW21vbnRoIC0gMV07ICAgXHRcclxuICAgIH1cclxuXHJcbiAgICBpc0xlYXAgKHllYXIpIHtcclxuICAgICAgICBsZXQgaXNMZWFwID0gKCgoeWVhciAqIDExKSArIDE0KSAlIDMwKSA8IDExO1xyXG5cdFx0cmV0dXJuIGlzTGVhcDtcclxuXHR9XHJcbn0iXX0=

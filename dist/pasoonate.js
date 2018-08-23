
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
        
        let julianDayFloatRounded = Math.round((julianDay - Math.floor(julianDay)) * 10000000) / 10000000;

        return Math.floor(julianDay) + julianDayFloatRounded;
	}

	julianDayToTimestamp (julianDay) {
		let timestamp = Math.round((julianDay - this.J1970) * this.DayInSecond);
		
		return timestamp;
    }

	julianDayWithoutTime (julianDay) {
		
		return Math.floor(julianDay) + ((julianDay - Math.floor(julianDay)) >= 0.5 ?  0.5 : -0.5);
	}

	extractJulianDayTime (julianDay) {
        julianDay += 0.5;

        // Astronomical to civil
        let time = Math.floor((julianDay - Math.floor(julianDay)) * this.DayInSecond);

        return {
        	"hour": Math.floor(time / 3600),
        	"minute": Math.floor((time / 60) % 60),
        	"second": Math.floor(time % 60)
        };
    }

    addTimeToJulianDay (julianDay, hour, minute, second) {
    	let timestamp = this.julianDayToTimestamp(julianDay);
    	timestamp += (hour * 3600) + (minute * 60) + second;

        julianDay = this.timestampToJulianDay(timestamp);
        let julianDayFloatRounded = Math.round((julianDay - Math.floor(julianDay)) * 10000000) / 10000000;

        return Math.floor(julianDay) + julianDayFloatRounded;
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
        let firstOfYearJulianDay = this.dateToJulianDay(currentDate.year, 1, 1, 0, 0, 0);
        let currentJulianDay = this.dateToJulianDay(currentDate.year, currentDate.month, currentDate.day, currentDate.hour, currentDate.minute, currentDate.second);

        return Math.floor(currentJulianDay - firstOfYearJulianDay + 1);
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
		this._timezoneOffset = timezoneOffset !== undefined || -date.getTimezoneOffset() * 60; // minute * 60 = offset in seconds
	}

	gregorian () {
		this._currentCalendar = this._gregorian;
		return this;
	}

	jalali () {
		this._currentCalendar = this._jalali;
		return this;
	}

	islamic () {
		this._currentCalendar = this._islamic;
		return this;
	}

	shia () {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9taXhpbi9BZGRpdGlvbkFuZFN1YnN0cmFjdGlvbk1peGluLmpzIiwic3JjL21peGluL0Jhc2VNZXRob2RzTWl4aW4uanMiLCJzcmMvY2FsZW5kYXIvQ2FsZW5kYXIuanMiLCJzcmMvY2FsZW5kYXIvQ2FsZW5kYXJNYW5hZ2VyLmpzIiwic3JjL2NhbGVuZGFyL0dyZWdvcmlhbkNhbGVuZGFyLmpzIiwic3JjL2NhbGVuZGFyL0lzbGFtaWNDYWxlbmRhci5qcyIsInNyYy9jYWxlbmRhci9KYWxhbGlDYWxlbmRhci5qcyIsInNyYy9jYWxlbmRhci9TaGlhQ2FsZW5kYXIuanMiLCJzcmMvZm9ybWF0dGVyL0RhdGVGb3JtYXQuanMiLCJzcmMvZm9ybWF0dGVyL1NpbXBsZURhdGVGb3JtYXQuanMiLCJzcmMvQ29uc3RhbnRzLmpzIiwic3JjL0xvY2FsaXphdGlvbi5qcyIsInNyYy9QYXNvb25hdGUuanMiLCJzcmMvbGFuZy9mYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ROQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwYXNvb25hdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmxldCBBZGRpdGlvbkFuZFN1YnRyYWN0aW9uTWl4aW4gPSB7XG5cdGFkZFllYXIoY291bnQpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciArIGNvdW50LCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGFkZE1vbnRoKGNvdW50KSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRsZXQgdG90YWxNb250aCA9IGRhdGUubW9udGggKyBjb3VudDtcblx0XHRsZXQgeWVhciA9IGRhdGUueWVhciArIE1hdGguZmxvb3IodG90YWxNb250aCAvIDEyKTtcblx0XHRsZXQgbW9udGggPSB0b3RhbE1vbnRoICUgMTI7XG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoeWVhciwgbW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0YWRkRGF5KGNvdW50KSB7XG5cdFx0dGhpcy5fdGltZXN0YW1wICs9IChjb3VudCAqIDg2NDAwKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRhZGRIb3VyKGNvdW50KSB7XG5cdFx0dGhpcy5fdGltZXN0YW1wICs9IChjb3VudCAqIDM2MDApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGFkZE1pbnV0ZShjb3VudCkge1xuXHRcdHRoaXMuX3RpbWVzdGFtcCArPSAoY291bnQgKiA2MCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0YWRkU2Vjb25kKGNvdW50KSB7XG5cdFx0dGhpcy5fdGltZXN0YW1wICs9IGNvdW50O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHN1YlllYXIoY291bnQpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciAtIGNvdW50LCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHN1Yk1vbnRoKGNvdW50KSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRsZXQgdG90YWxNb250aCA9IGRhdGUubW9udGggLSBjb3VudDtcblx0XHRsZXQgeWVhciA9IGRhdGUueWVhcjtcblx0XHRsZXQgbW9udGggPSB0b3RhbE1vbnRoO1xuXG5cdFx0aWYodG90YWxNb250aCA8PSAwKSB7XG5cdFx0XHR0b3RhbE1vbnRoID0gLXRvdGFsTW9udGg7XG5cdFx0XHR5ZWFyIC09IE1hdGguZmxvb3IodG90YWxNb250aCAvIDEyKSArIDE7XG5cdFx0XHRtb250aCA9IDEyIC0gKHRvdGFsTW9udGggJSAxMik7XG5cdFx0fVxuXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoeWVhciwgbW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0c3ViRGF5KGNvdW50KSB7XG5cdFx0dGhpcy5fdGltZXN0YW1wIC09IChjb3VudCAqIDg2NDAwKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRzdWJIb3VyKGNvdW50KSB7XG5cdFx0dGhpcy5fdGltZXN0YW1wIC09IChjb3VudCAqIDM2MDApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHN1Yk1pbnV0ZShjb3VudCkge1xuXHRcdHRoaXMuX3RpbWVzdGFtcCAtPSAoY291bnQgKiA2MCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0c3ViU2Vjb25kKGNvdW50KSB7XG5cdFx0dGhpcy5fdGltZXN0YW1wIC09IGNvdW50O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xuIiwibGV0IEJhc2VNZXRob2RzTWl4aW4gPSB7XG5cdHNldFRpbWVzdGFtcCAodGltZXN0YW1wKSB7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Z2V0VGltZXN0YW1wICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fdGltZXN0YW1wO1xuXHR9LFxuXG5cdHNldFRpbWV6b25lT2Zmc2V0ICh0aW1lem9uZU9mZnNldCkge1xuXHRcdHRoaXMuX3RpbWV6b25lT2Zmc2V0ID0gdGltZXpvbmVPZmZzZXQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRnZXRUaW1lem9uZU9mZnNldCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xuXHR9LFxuXG5cdHNldFllYXIgKHllYXIpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKHllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Z2V0WWVhciAoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRyZXR1cm4gZGF0ZS55ZWFyO1xuXHR9LFx0XG5cblx0c2V0TW9udGggKG1vbnRoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIG1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdldE1vbnRoICgpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xuXHRcdHJldHVybiBkYXRlLm1vbnRoO1xuXHR9LFxuXG5cdHNldERheSAoZGF5KSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdldERheSAoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRyZXR1cm4gZGF0ZS5kYXk7XHRcblx0fSxcblxuXHRzZXRIb3VyIChob3VyKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdldEhvdXIgKCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XG5cdFx0cmV0dXJuIGRhdGUuaG91cjtcblx0fSxcblxuXHRzZXRNaW51dGUgKG1pbnV0ZSkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBtaW51dGUsIGRhdGUuc2Vjb25kKTtcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRnZXRNaW51dGUgKCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XG5cdFx0cmV0dXJuIGRhdGUubWludXRlO1xuXHR9LFxuXG5cdHNldFNlY29uZCAoc2Vjb25kKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBzZWNvbmQpO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdldFNlY29uZCAoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRyZXR1cm4gZGF0ZS5zZWNvbmQ7XG5cdH0sXG5cblx0c2V0VVRDWWVhciAoeWVhcikge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoeWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0XG5cdGdldFVUQ1llYXIgKCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xuXHRcdHJldHVybiBkYXRlLnllYXI7XG5cdH0sXG5cblx0c2V0VVRDTW9udGggKG1vbnRoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIG1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRcblx0Z2V0VVRDTW9udGggKCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xuXHRcdHJldHVybiBkYXRlLm1vbnRoO1xuXHR9LFxuXG5cdHNldFVUQ0RheSAoZGF5KSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRcblx0Z2V0VVRDRGF5ICgpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcblx0XHRyZXR1cm4gZGF0ZS5kYXk7XHRcblx0fSxcblxuXHRzZXRVVENIb3VyIChob3VyKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRcblx0Z2V0VVRDSG91ciAoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0cmV0dXJuIGRhdGUuaG91cjtcblx0fSxcblxuXHRzZXRVVENNaW51dGUgKG1pbnV0ZSkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBtaW51dGUsIGRhdGUuc2Vjb25kKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0XG5cdGdldFVUQ01pbnV0ZSAoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0cmV0dXJuIGRhdGUubWludXRlO1xuXHR9LFxuXG5cdHNldFVUQ1NlY29uZCAoc2Vjb25kKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBzZWNvbmQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdldFVUQ1NlY29uZCAoKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0cmV0dXJuIGRhdGUuc2Vjb25kO1xuXHR9LFxuXG5cdHNldERhdGUgKHllYXIsIG1vbnRoLCBkYXkpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKHllYXIsIG1vbnRoLCBkYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0XG5cdHNldFRpbWUgKGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdFxuXHRzZXREYXRlVGltZSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRzZXRVVENEYXRlICh5ZWFyLCBtb250aCwgZGF5KSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBtb250aCwgZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdFxuXHRzZXRVVENUaW1lIChob3VyLCBtaW51dGUsIHNlY29uZCkge1xuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRcblx0c2V0VVRDRGF0ZVRpbWUgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0ZGF5T2ZXZWVrICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fY3VycmVudENhbGVuZGFyLmRheU9mV2Vlayh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XG4gICAgfSxcblxuICAgIGRheU9mWWVhciAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF5T2ZZZWFyKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcbiAgICB9LFxuXG4gICAgd2Vla09mTW9udGggKCkge1xuICAgIFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRDYWxlbmRhci53ZWVrT2ZNb250aCh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XG4gICAgfSxcblxuICAgIHdlZWtPZlllYXIgKCkge1xuICAgIFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRDYWxlbmRhci53ZWVrT2ZZZWFyKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcbiAgICB9LFxufTtcbiIsIlxuY2xhc3MgQ2FsZW5kYXIge1xuXHRcblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHRoaXMuSjE5NzAgPSAyNDQwNTg3LjU7XHRcdFx0Ly8gSnVsaWFuIGRhdGUgYXQgVW5peCBlcG9jaDogMTk3MC0wMS0wMVxuXHRcdHRoaXMuRGF5SW5TZWNvbmQgPSA4NjQwMDtcblx0fVx0XG5cblx0dGltZXN0YW1wVG9KdWxpYW5EYXkgKHRpbWVzdGFtcCkge1xuICAgICAgICBsZXQganVsaWFuRGF5ID0gIHRpbWVzdGFtcCAvIHRoaXMuRGF5SW5TZWNvbmQgKyB0aGlzLkoxOTcwO1xuICAgICAgICBcbiAgICAgICAgbGV0IGp1bGlhbkRheUZsb2F0Um91bmRlZCA9IE1hdGgucm91bmQoKGp1bGlhbkRheSAtIE1hdGguZmxvb3IoanVsaWFuRGF5KSkgKiAxMDAwMDAwMCkgLyAxMDAwMDAwMDtcblxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihqdWxpYW5EYXkpICsganVsaWFuRGF5RmxvYXRSb3VuZGVkO1xuXHR9XG5cblx0anVsaWFuRGF5VG9UaW1lc3RhbXAgKGp1bGlhbkRheSkge1xuXHRcdGxldCB0aW1lc3RhbXAgPSBNYXRoLnJvdW5kKChqdWxpYW5EYXkgLSB0aGlzLkoxOTcwKSAqIHRoaXMuRGF5SW5TZWNvbmQpO1xuXHRcdFxuXHRcdHJldHVybiB0aW1lc3RhbXA7XG4gICAgfVxuXG5cdGp1bGlhbkRheVdpdGhvdXRUaW1lIChqdWxpYW5EYXkpIHtcblx0XHRcblx0XHRyZXR1cm4gTWF0aC5mbG9vcihqdWxpYW5EYXkpICsgKChqdWxpYW5EYXkgLSBNYXRoLmZsb29yKGp1bGlhbkRheSkpID49IDAuNSA/ICAwLjUgOiAtMC41KTtcblx0fVxuXG5cdGV4dHJhY3RKdWxpYW5EYXlUaW1lIChqdWxpYW5EYXkpIHtcbiAgICAgICAganVsaWFuRGF5ICs9IDAuNTtcblxuICAgICAgICAvLyBBc3Ryb25vbWljYWwgdG8gY2l2aWxcbiAgICAgICAgbGV0IHRpbWUgPSBNYXRoLmZsb29yKChqdWxpYW5EYXkgLSBNYXRoLmZsb29yKGp1bGlhbkRheSkpICogdGhpcy5EYXlJblNlY29uZCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgXHRcImhvdXJcIjogTWF0aC5mbG9vcih0aW1lIC8gMzYwMCksXG4gICAgICAgIFx0XCJtaW51dGVcIjogTWF0aC5mbG9vcigodGltZSAvIDYwKSAlIDYwKSxcbiAgICAgICAgXHRcInNlY29uZFwiOiBNYXRoLmZsb29yKHRpbWUgJSA2MClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhZGRUaW1lVG9KdWxpYW5EYXkgKGp1bGlhbkRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcbiAgICBcdGxldCB0aW1lc3RhbXAgPSB0aGlzLmp1bGlhbkRheVRvVGltZXN0YW1wKGp1bGlhbkRheSk7XG4gICAgXHR0aW1lc3RhbXAgKz0gKGhvdXIgKiAzNjAwKSArIChtaW51dGUgKiA2MCkgKyBzZWNvbmQ7XG5cbiAgICAgICAganVsaWFuRGF5ID0gdGhpcy50aW1lc3RhbXBUb0p1bGlhbkRheSh0aW1lc3RhbXApO1xuICAgICAgICBsZXQganVsaWFuRGF5RmxvYXRSb3VuZGVkID0gTWF0aC5yb3VuZCgoanVsaWFuRGF5IC0gTWF0aC5mbG9vcihqdWxpYW5EYXkpKSAqIDEwMDAwMDAwKSAvIDEwMDAwMDAwO1xuXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGp1bGlhbkRheSkgKyBqdWxpYW5EYXlGbG9hdFJvdW5kZWQ7XG4gICAgfVxuXG4gICAgZGF0ZVRvSnVsaWFuRGF5ICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGRhdGVUb1RpbWVzdGFtcCAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcbiAgICAgICAgbGV0IGp1bGlhbkRheSA9IHRoaXMuZGF0ZVRvSnVsaWFuRGF5ICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuanVsaWFuRGF5VG9UaW1lc3RhbXAoanVsaWFuRGF5KTtcbiAgICB9XG5cbiAgICBqdWxpYW5EYXlUb0RhdGUgKGp1bGlhbkRheSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIHRpbWVzdGFtcFRvRGF0ZSAodGltZXN0YW1wKSB7XG4gICAgICAgIGxldCBqdWxpYW5EYXkgPSB0aGlzLnRpbWVzdGFtcFRvSnVsaWFuRGF5KHRpbWVzdGFtcCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuanVsaWFuRGF5VG9EYXRlKGp1bGlhbkRheSk7XG4gICAgfVxuXG4gICAgZGF5c0luTW9udGggKHllYXIsIG1vbnRoKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGRheU9mV2VlayAodGltZXN0YW1wKSB7XG4gICAgICAgIGxldCBqdWxpYW5EYXkgPSB0aGlzLnRpbWVzdGFtcFRvSnVsaWFuRGF5KHRpbWVzdGFtcCk7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZChNYXRoLmZsb29yKChqdWxpYW5EYXkgKyAyLjUpKSwgNyk7XG4gICAgfVxuXG4gICAgZGF5T2ZZZWFyICh0aW1lc3RhbXApIHtcbiAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gdGhpcy50aW1lc3RhbXBUb0RhdGUodGltZXN0YW1wKTtcbiAgICAgICAgbGV0IGZpcnN0T2ZZZWFySnVsaWFuRGF5ID0gdGhpcy5kYXRlVG9KdWxpYW5EYXkoY3VycmVudERhdGUueWVhciwgMSwgMSwgMCwgMCwgMCk7XG4gICAgICAgIGxldCBjdXJyZW50SnVsaWFuRGF5ID0gdGhpcy5kYXRlVG9KdWxpYW5EYXkoY3VycmVudERhdGUueWVhciwgY3VycmVudERhdGUubW9udGgsIGN1cnJlbnREYXRlLmRheSwgY3VycmVudERhdGUuaG91ciwgY3VycmVudERhdGUubWludXRlLCBjdXJyZW50RGF0ZS5zZWNvbmQpO1xuXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGN1cnJlbnRKdWxpYW5EYXkgLSBmaXJzdE9mWWVhckp1bGlhbkRheSArIDEpO1xuICAgIH1cblxuICAgIHdlZWtPZk1vbnRoICh0aW1lc3RhbXApIHtcbiAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gdGhpcy50aW1lc3RhbXBUb0RhdGUodGltZXN0YW1wKTtcbiAgICAgICAgbGV0IGZpcnN0RGF5T2ZNb250aFRpbWVzdGFtcCA9IHRoaXMuZGF0ZVRvVGltZXN0YW1wKGN1cnJlbnREYXRlLnllYXIsIGN1cnJlbnREYXRlLm1vbnRoLCAxLCBjdXJyZW50RGF0ZS5ob3VyLCBjdXJyZW50RGF0ZS5taW51dGUsIGN1cnJlbnREYXRlLnNlY29uZCk7XG4gICAgICAgIGxldCBkYXlPZldlZWtJbkN1cnJlbnREYXlPZk1vbnRoID0gdGhpcy5kYXlPZldlZWsodGltZXN0YW1wKTtcbiAgICAgICAgbGV0IGRheU9mV2Vla0luRmlyc3REYXlPZk1vbnRoID0gdGhpcy5kYXlPZldlZWsoZmlyc3REYXlPZk1vbnRoVGltZXN0YW1wKTtcblxuICAgICAgICBsZXQgd2VlayA9IDE7XG5cbiAgICAgICAgaWYoY3VycmVudERhdGUuZGF5IDw9IDcgLSBkYXlPZldlZWtJbkZpcnN0RGF5T2ZNb250aCkge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWs7XG4gICAgICAgIH1cblxuICAgICAgICB3ZWVrICs9ICgoY3VycmVudERhdGUuZGF5IC0gKCg3IC0gZGF5T2ZXZWVrSW5GaXJzdERheU9mTW9udGgpICsgKGRheU9mV2Vla0luQ3VycmVudERheU9mTW9udGggKyAxKSkpIC8gNykgKyAxO1xuXG4gICAgICAgIHJldHVybiB3ZWVrO1xuICAgIH1cblxuICAgIHdlZWtPZlllYXIgKHRpbWVzdGFtcCkge1xuICAgICAgICBsZXQgY3VycmVudERhdGUgPSB0aGlzLnRpbWVzdGFtcFRvRGF0ZSh0aW1lc3RhbXApO1xuICAgICAgICBsZXQgZGF5T2ZZZWFyID0gdGhpcy5kYXlPZlllYXIodGltZXN0YW1wKTtcbiAgICAgICAgbGV0IGZpcnN0RGF5T2ZZZWFyVGltZXN0YW1wID0gdGhpcy5kYXRlVG9UaW1lc3RhbXAoY3VycmVudERhdGUueWVhciwgMSwgMSwgY3VycmVudERhdGUuaG91ciwgY3VycmVudERhdGUubWludXRlLCBjdXJyZW50RGF0ZS5zZWNvbmQpO1xuICAgICAgICBsZXQgZGF5T2ZXZWVrSW5DdXJyZW50RGF5T2ZZZWFyID0gdGhpcy5kYXlPZldlZWsodGltZXN0YW1wKTtcbiAgICAgICAgbGV0IGRheU9mV2Vla0luRmlyc3REYXlPZlllYXIgPSB0aGlzLmRheU9mV2VlayhmaXJzdERheU9mWWVhclRpbWVzdGFtcCk7XG5cbiAgICAgICAgbGV0IHdlZWsgPSAxO1xuXG4gICAgICAgIGlmKGRheU9mWWVhciA8PSA3IC0gZGF5T2ZXZWVrSW5GaXJzdERheU9mWWVhcikge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWs7XG4gICAgICAgIH1cblxuICAgICAgICB3ZWVrICs9ICgoZGF5T2ZZZWFyIC0gKCg3IC0gZGF5T2ZXZWVrSW5GaXJzdERheU9mWWVhcikgKyAoZGF5T2ZXZWVrSW5DdXJyZW50RGF5T2ZZZWFyICsgMSkpKSAvIDcpICsgMTtcblxuICAgICAgICByZXR1cm4gd2VlazsgICBcbiAgICB9XG5cbiAgICBtb2QgKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgLSAoYiAqIE1hdGguZmxvb3IoYSAvIGIpKTtcbiAgICB9XG5cbiAgICBpc0xlYXAgKHllYXIpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbn1cbiIsIlxuY2xhc3MgQ2FsZW5kYXJNYW5hZ2VyIHtcblx0XG5cdGNvbnN0cnVjdG9yICh0aW1lc3RhbXAsIHRpbWV6b25lT2Zmc2V0KSB7XG5cdFx0dGhpcy5fZ3JlZ29yaWFuID0gbmV3IEdyZWdvcmlhbkNhbGVuZGFyKCk7XHRcblx0XHR0aGlzLl9qYWxhbGkgPSBuZXcgSmFsYWxpQ2FsZW5kYXIoKTtcdFxuXHRcdHRoaXMuX2lzbGFtaWMgPSBuZXcgSXNsYW1pY0NhbGVuZGFyKCk7XHRcblx0XHR0aGlzLl9zaGlhID0gbmV3IFNoaWFDYWxlbmRhcigpO1xuXHRcdHRoaXMuX2N1cnJlbnRDYWxlbmRhciA9IG51bGw7XG5cdFx0dGhpcy5fZm9ybWF0dGVyID0gUGFzb29uYXRlLmZvcm1hdHRlcjtcblxuXHRcdGxldCBkYXRlID0gbmV3IERhdGUoKTtcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgfHwgTWF0aC5mbG9vcihkYXRlLmdldFRpbWUoKSAvIDEwMDApOyAvLyBtaWxpc2Vjb25kIHRvIHNlY29uZHNcblx0XHR0aGlzLl90aW1lem9uZU9mZnNldCA9IHRpbWV6b25lT2Zmc2V0ICE9PSB1bmRlZmluZWQgfHwgLWRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwOyAvLyBtaW51dGUgKiA2MCA9IG9mZnNldCBpbiBzZWNvbmRzXG5cdH1cblxuXHRncmVnb3JpYW4gKCkge1xuXHRcdHRoaXMuX2N1cnJlbnRDYWxlbmRhciA9IHRoaXMuX2dyZWdvcmlhbjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGphbGFsaSAoKSB7XG5cdFx0dGhpcy5fY3VycmVudENhbGVuZGFyID0gdGhpcy5famFsYWxpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aXNsYW1pYyAoKSB7XG5cdFx0dGhpcy5fY3VycmVudENhbGVuZGFyID0gdGhpcy5faXNsYW1pYztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNoaWEgKCkge1xuXHRcdHRoaXMuX2N1cnJlbnRDYWxlbmRhciA9IHRoaXMuX3NoaWE7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRmb3JtYXQgKHBhdHRlcm4sIGxvY2FsZSkge1xuXHRcdHRoaXMuX2Zvcm1hdHRlci5zZXRDYWxlbmRhcih0aGlzKTtcblx0XHRyZXR1cm4gdGhpcy5fZm9ybWF0dGVyLmZvcm1hdChwYXR0ZXJuLCBsb2NhbGUpO1xuXHR9XHRcbn1cblxuT2JqZWN0LmFzc2lnbihDYWxlbmRhck1hbmFnZXIucHJvdG90eXBlLCBCYXNlTWV0aG9kc01peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FsZW5kYXJNYW5hZ2VyLnByb3RvdHlwZSwgQWRkaXRpb25BbmRTdWJ0cmFjdGlvbk1peGluKTtcbiIsIlxuY2xhc3MgR3JlZ29yaWFuQ2FsZW5kYXIgZXh0ZW5kcyBDYWxlbmRhciB7XG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5HcmVnb3JpYW5FcG9jaCA9IDE3MjE0MjUuNTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdHcmVnb3JpYW5FcG9jaCcsIHtcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG5cdH1cblxuXHRkYXRlVG9KdWxpYW5EYXkgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XG5cdFx0bGV0IGp1bGlhbkRheSA9IHRoaXMuR3JlZ29yaWFuRXBvY2ggLSAxO1xuXG5cdFx0anVsaWFuRGF5ICs9IDM2NSAqICh5ZWFyIC0gMSk7XG5cdFx0anVsaWFuRGF5ICs9IE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQpO1xuXHRcdGp1bGlhbkRheSArPSBNYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyAxMDApICogLTE7XG5cdFx0anVsaWFuRGF5ICs9IE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQwMCk7XG5cdFx0anVsaWFuRGF5ICs9IE1hdGguZmxvb3IoKCgoMzY3ICogbW9udGgpIC0gMzYyKSAvIDEyKSArICgobW9udGggPD0gMikgPyAwIDogKHRoaXMuaXNMZWFwKHllYXIpID8gLTEgOiAtMikpICsgZGF5KTtcblxuXHRcdHJldHVybiB0aGlzLmFkZFRpbWVUb0p1bGlhbkRheShqdWxpYW5EYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcblx0fVxuXG4gICAganVsaWFuRGF5VG9EYXRlIChqdWxpYW5EYXkpIHtcbiAgICBcdGxldCB0aW1lID0gdGhpcy5leHRyYWN0SnVsaWFuRGF5VGltZShqdWxpYW5EYXkpO1xuICAgIFx0XG4gICAgXHRqdWxpYW5EYXkgPSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKGp1bGlhbkRheSk7XG5cbiAgICBcdGxldCB3amQgPSBNYXRoLmZsb29yKGp1bGlhbkRheSAtIDAuNSkgKyAwLjU7XG4gICAgICAgIGxldCBkZXBvY2ggPSB3amQgLSB0aGlzLkdyZWdvcmlhbkVwb2NoO1xuICAgICAgICBsZXQgcXVhZHJpY2VudCA9IE1hdGguZmxvb3IoZGVwb2NoIC8gMTQ2MDk3KTtcbiAgICAgICAgbGV0IGRxYyA9IHRoaXMubW9kKGRlcG9jaCwgMTQ2MDk3KTtcbiAgICAgICAgbGV0IGNlbnQgPSBNYXRoLmZsb29yKGRxYyAvIDM2NTI0KTtcbiAgICAgICAgbGV0IGRjZW50ID0gdGhpcy5tb2QoZHFjLCAzNjUyNCk7XG4gICAgICAgIGxldCBxdWFkID0gTWF0aC5mbG9vcihkY2VudCAvIDE0NjEpO1xuICAgICAgICBsZXQgZHF1YWQgPSB0aGlzLm1vZChkY2VudCwgMTQ2MSk7XG4gICAgICAgIGxldCB5aW5kZXggPSBNYXRoLmZsb29yKGRxdWFkIC8gMzY1KTtcbiAgICAgICAgbGV0IHllYXIgPSAocXVhZHJpY2VudCAqIDQwMCkgKyAoY2VudCAqIDEwMCkgKyAocXVhZCAqIDQpICsgeWluZGV4O1xuICAgICAgICBpZiAoISgoY2VudCA9PSA0KSB8fCAoeWluZGV4ID09IDQpKSkge1xuICAgICAgICAgICAgeWVhcisrO1xuICAgICAgICB9XG4gICAgICAgIGxldCB5ZWFyZGF5ID0gd2pkIC0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZSh0aGlzLmRhdGVUb0p1bGlhbkRheSh5ZWFyLCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpO1xuICAgICAgICBsZXQgbGVhcGFkaiA9ICh3amQgPCB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIDMsIDEsIHRpbWUuaG91ciwgdGltZS5taW51dGUsIHRpbWUuc2Vjb25kKSkgPyAwIDogKHRoaXMuaXNMZWFwKHllYXIpID8gMSA6IDIpKTtcbiAgICAgICAgbGV0IG1vbnRoID0gTWF0aC5mbG9vcigoKCh5ZWFyZGF5ICsgbGVhcGFkaikgKiAxMikgKyAzNzMpIC8gMzY3KTtcbiAgICAgICAgbGV0IGRheSA9ICh3amQgLSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIG1vbnRoLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSArIDE7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgXHRcInllYXJcIjogeWVhcixcbiAgICAgICAgXHRcIm1vbnRoXCI6IG1vbnRoLFxuICAgICAgICBcdFwiZGF5XCI6IGRheSxcbiAgICAgICAgXHRcImhvdXJcIjogdGltZS5ob3VyLFxuICAgICAgICBcdFwibWludXRlXCI6IHRpbWUubWludXRlLFxuICAgICAgICBcdFwic2Vjb25kXCI6IHRpbWUuc2Vjb25kLFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBkYXlzSW5Nb250aCAoeWVhciwgbW9udGgpIHtcbiAgICAgICAgbGV0IGdyZWdvcmlhbkRheXNJbk1vbnRoID0gWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuICAgICAgICBcbiAgICAgICAgaWYgKG1vbnRoIDwgMSB8fCBtb250aCA+IDEyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFeGNlcHRpb24oXCIkbW9udGggT3V0IE9mIFJhbmdlIEV4Y2VwdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHllYXIgJiYgdGhpcy5pc0xlYXAoeWVhcikgJiYgbW9udGggPT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIDI5O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZ3JlZ29yaWFuRGF5c0luTW9udGhbbW9udGggLSAxXTtcbiAgICB9XG5cbiAgICBpc0xlYXAgKHllYXIpIHtcbiAgICAgICAgcmV0dXJuICgoeWVhciAlIDQpID09IDApICYmICghKCgoeWVhciAlIDEwMCkgPT0gMCkgJiYgKCh5ZWFyICUgNDAwKSAhPSAwKSkpO1xuICAgIH1cbn1cbiIsIlxuY2xhc3MgSXNsYW1pY0NhbGVuZGFyIGV4dGVuZHMgQ2FsZW5kYXIge1xuXHRcblx0Y29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcblx0XHR0aGlzLklzbGFtaWNFcG9jaCA9IDE5NDg0MzkuNTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ0lzbGFtaWNFcG9jaCcsIHtcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG5cdH1cblxuXHRkYXRlVG9KdWxpYW5EYXkgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XG4gICAgICAgIGxldCBqdWxpYW5EYXkgPSBkYXk7XG5cbiAgICAgICAganVsaWFuRGF5ICs9IE1hdGguY2VpbCgobW9udGggLSAxKSAqIDI5LjUpO1xuICAgICAgICBqdWxpYW5EYXkgKz0gKHllYXIgLSAxKSAqIDM1NDtcbiAgICAgICAganVsaWFuRGF5ICs9IE1hdGguZmxvb3IoKCgxMSAqIHllYXIpICsgMykgLyAzMCk7XG4gICAgICAgIGp1bGlhbkRheSArPSB0aGlzLklzbGFtaWNFcG9jaCAtIDE7XG5cblx0XHRyZXR1cm4gdGhpcy5hZGRUaW1lVG9KdWxpYW5EYXkoanVsaWFuRGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XG5cdH1cblxuICAgIGp1bGlhbkRheVRvRGF0ZSAoanVsaWFuRGF5KSB7XG4gICAgICAgIGxldCB0aW1lID0gdGhpcy5leHRyYWN0SnVsaWFuRGF5VGltZShqdWxpYW5EYXkpO1xuICAgICAgICBcbiAgICAgICAganVsaWFuRGF5ID0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZShqdWxpYW5EYXkpO1xuICAgICAgICBqdWxpYW5EYXkgPSBNYXRoLmZsb29yKGp1bGlhbkRheSkgKyAwLjU7XG4gICAgICAgIFxuICAgICAgICBsZXQgeWVhciA9IE1hdGguZmxvb3IoKCgoanVsaWFuRGF5IC0gdGhpcy5Jc2xhbWljRXBvY2gpICogMzApICsgMTA2NDYpIC8gMTA2MzEpO1xuICAgICAgICBsZXQgbW9udGggPSBNYXRoLm1pbigxMiwgTWF0aC5jZWlsKChqdWxpYW5EYXkgLSAoMjkgKyB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIDEsIDEsIHRpbWUuaG91ciwgdGltZS5taW51dGUsIHRpbWUuc2Vjb25kKSkpKSAvIDI5LjUpICsgMSk7XG4gICAgICAgIGxldCBkYXkgPSAoanVsaWFuRGF5IC0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZSh0aGlzLmRhdGVUb0p1bGlhbkRheSh5ZWFyLCBtb250aCwgMSwgdGltZS5ob3VyLCB0aW1lLm1pbnV0ZSwgdGltZS5zZWNvbmQpKSkgKyAxO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgIFx0XCJ5ZWFyXCI6IHllYXIsXG4gICAgICAgIFx0XCJtb250aFwiOiBtb250aCxcbiAgICAgICAgXHRcImRheVwiOiBkYXksXG4gICAgICAgIFx0XCJob3VyXCI6IHRpbWUuaG91cixcbiAgICAgICAgXHRcIm1pbnV0ZVwiOiB0aW1lLm1pbnV0ZSxcbiAgICAgICAgXHRcInNlY29uZFwiOiB0aW1lLnNlY29uZCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRheXNJbk1vbnRoICh5ZWFyLCBtb250aCkge1xuICAgICAgICBsZXQgaXNsYW1pY0RheXNJbk1vbnRoID0gWzMwLCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMjldOyAvLzMwXG5cbiAgICAgICAgaWYgKG1vbnRoIDwgMSB8fCBtb250aCA+IDEyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFeGNlcHRpb24oXCIkbW9udGggT3V0IE9mIFJhbmdlIEV4Y2VwdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHllYXIgJiYgdGhpcy5pc0xlYXAoeWVhcikgJiYgbW9udGggPT0gMTIpIHtcbiAgICAgICAgICAgIHJldHVybiAzMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGlzbGFtaWNEYXlzSW5Nb250aFttb250aCAtIDFdO1xuICAgIH1cblxuICAgIGlzTGVhcCAoeWVhcikge1xuICAgICAgICBsZXQgaXNMZWFwID0gKCgoeWVhciAqIDExKSArIDE0KSAlIDMwKSA8IDExO1xuICAgICAgICByZXR1cm4gaXNMZWFwO1xuICAgIH1cbn1cbiIsIlxuY2xhc3MgSmFsYWxpQ2FsZW5kYXIgZXh0ZW5kcyBDYWxlbmRhciB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cblx0XHR0aGlzLkphbGFsaUVwb2NoID0gMTk0ODMyMC41O1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnSmFsYWxpRXBvY2gnLCB7XG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgICAgIH0pO1xuXHR9XG5cblx0ZGF0ZVRvSnVsaWFuRGF5ICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xuXHRcdGxldCBlcG9jaEJhc2UgPSB5ZWFyIC0gKHllYXIgPj0gMCA/IDQ3NCA6IDQ3Myk7XG4gICAgICAgIGxldCBlcG9jaFllYXIgPSA0NzQgKyB0aGlzLm1vZChlcG9jaEJhc2UsIDI4MjApO1xuICAgICAgICBsZXQganVsaWFuRGF5ID0gZGF5O1xuXG4gICAgICAgIGp1bGlhbkRheSArPSBtb250aCA8PSA3ID8gKG1vbnRoIC0gMSkgKiAzMSA6ICgobW9udGggLSAxKSAqIDMwKSArIDY7XG4gICAgICAgIGp1bGlhbkRheSArPSBNYXRoLmZsb29yKCgoZXBvY2hZZWFyICogNjgyKSAtIDExMCkgLyAyODE2KTtcbiAgICAgICAganVsaWFuRGF5ICs9IChlcG9jaFllYXIgLSAxKSAqIDM2NTtcbiAgICAgICAganVsaWFuRGF5ICs9IE1hdGguZmxvb3IoZXBvY2hCYXNlIC8gMjgyMCkgKiAxMDI5OTgzO1xuICAgICAgICBqdWxpYW5EYXkgKz0gdGhpcy5KYWxhbGlFcG9jaCAtIDE7XG5cblx0XHRyZXR1cm4gdGhpcy5hZGRUaW1lVG9KdWxpYW5EYXkoanVsaWFuRGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XG5cdH1cblxuICAgIGp1bGlhbkRheVRvRGF0ZSAoanVsaWFuRGF5KSB7XG4gICAgXHRsZXQgdGltZSA9IHRoaXMuZXh0cmFjdEp1bGlhbkRheVRpbWUoanVsaWFuRGF5KTtcbiAgICBcdFxuICAgIFx0anVsaWFuRGF5ID0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZShqdWxpYW5EYXkpO1xuXG4gICAgXHRqdWxpYW5EYXkgPSBNYXRoLmZsb29yKGp1bGlhbkRheSkgKyAwLjU7XG5cbiAgICAgICAgbGV0IGRlcG9jaCA9IGp1bGlhbkRheSAtIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoNDc1LCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpO1xuICAgICAgICBsZXQgY3ljbGUgPSBNYXRoLmZsb29yKGRlcG9jaCAvIDEwMjk5ODMpO1xuICAgICAgICBsZXQgY3llYXIgPSB0aGlzLm1vZChkZXBvY2gsIDEwMjk5ODMpOyAgICAgICAgXG4gICAgXHRsZXQgeWN5Y2xlLCBhdXgxLCBhdXgyO1xuXG4gICAgICAgIGlmIChjeWVhciA9PSAxMDI5OTgyKSB7XG4gICAgICAgICAgICB5Y3ljbGUgPSAyODIwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXV4MSA9IE1hdGguZmxvb3IoY3llYXIgLyAzNjYpO1xuICAgICAgICAgICAgYXV4MiA9IHRoaXMubW9kKGN5ZWFyLCAzNjYpO1xuICAgICAgICAgICAgeWN5Y2xlID0gTWF0aC5mbG9vcigoKDIxMzQgKiBhdXgxKSArICgyODE2ICogYXV4MikgKyAyODE1KSAvIDEwMjg1MjIpICsgYXV4MSArIDE7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCB5ZWFyID0geWN5Y2xlICsgKDI4MjAgKiBjeWNsZSkgKyA0NzQ7XG4gICAgICAgIFxuICAgICAgICBpZiAoeWVhciA8PSAwKSB7XG4gICAgICAgICAgICB5ZWFyLS07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCB5ZGF5ID0gKGp1bGlhbkRheSAtIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoeWVhciwgMSwgMSwgdGltZS5ob3VyLCB0aW1lLm1pbnV0ZSwgdGltZS5zZWNvbmQpKSkgKyAxO1xuICAgICAgICBsZXQgbW9udGggPSAoeWRheSA8PSAxODYpID8gTWF0aC5jZWlsKHlkYXkgLyAzMSkgOiBNYXRoLmNlaWwoKHlkYXkgLSA2KSAvIDMwKTtcbiAgICAgICAgbGV0IGRheSA9IChqdWxpYW5EYXkgLSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIG1vbnRoLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSArIDE7XG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgXHRcInllYXJcIjogeWVhcixcbiAgICAgICAgXHRcIm1vbnRoXCI6IG1vbnRoLFxuICAgICAgICBcdFwiZGF5XCI6IGRheSxcbiAgICAgICAgXHRcImhvdXJcIjogdGltZS5ob3VyLFxuICAgICAgICBcdFwibWludXRlXCI6IHRpbWUubWludXRlLFxuICAgICAgICBcdFwic2Vjb25kXCI6IHRpbWUuc2Vjb25kLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGF5c0luTW9udGggKHllYXIsIG1vbnRoKSB7XG4gICAgICAgIGxldCBncmVnb3JpYW5EYXlzSW5Nb250aCA9IFszMSwgMzEsIDMxLCAzMSwgMzEsIDMxLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDI5XTsgLy8zMFxuICAgICAgICBcbiAgICAgICAgaWYgKG1vbnRoIDwgMSB8fCBtb250aCA+IDEyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFeGNlcHRpb24oXCIkbW9udGggT3V0IE9mIFJhbmdlIEV4Y2VwdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHllYXIgJiYgdGhpcy5pc0xlYXAoeWVhcikgJiYgbW9udGggPT0gMTIpIHtcbiAgICAgICAgICAgIHJldHVybiAzMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGdyZWdvcmlhbkRheXNJbk1vbnRoW21vbnRoIC0gMV07XG4gICAgfVxuXG4gICAgaXNMZWFwICh5ZWFyKSB7XG4gICAgICAgIHJldHVybiAoKCgoKCh5ZWFyIC0gKCh5ZWFyID4gMCkgPyA0NzQgOiA0NzMpKSAlIDI4MjApICsgNDc0KSArIDM4KSAqIDY4MikgJSAyODE2KSA8IDY4MjtcbiAgICB9XG59XG4iLCJcbmNsYXNzIFNoaWFDYWxlbmRhciBleHRlbmRzIENhbGVuZGFyIHtcblx0XG5cdGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG5cdFx0dGhpcy5TaGlhRXBvY2ggPSAxOTQ4NDM5LjU7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdTaGlhRXBvY2gnLCB7XG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgICAgIH0pO1xuXHR9XG5cblx0ZGF0ZVRvSnVsaWFuRGF5ICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xuICAgICAgICBsZXQgZGF5T2ZZZWFyID0gZGF5O1xuICAgICAgICBsZXQganVsaWFuRGF5ID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG1vbnRoOyBpKyspIHtcbiAgICAgICAgICAgIGRheU9mWWVhciArPSB0aGlzLmRheXNJbk1vbnRoKHllYXIsIGkpO1xuICAgICAgICB9XG5cbiAgICAgICAganVsaWFuRGF5ICs9IGRheU9mWWVhcjtcbiAgICAgICAganVsaWFuRGF5ICs9ICh5ZWFyIC0gMSkgKiAzNTQ7XG4gICAgICAgIGp1bGlhbkRheSArPSBNYXRoLmZsb29yKCgoMTEgKiB5ZWFyKSArIDMpIC8gMzApO1xuICAgICAgICBqdWxpYW5EYXkgKz0gdGhpcy5TaGlhRXBvY2ggLSAxO1xuXG5cdFx0cmV0dXJuIHRoaXMuYWRkVGltZVRvSnVsaWFuRGF5KGp1bGlhbkRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xuXHR9XG5cbiAgICBqdWxpYW5EYXlUb0RhdGUgKGp1bGlhbkRheSkge1xuICAgICAgICBsZXQgdGltZSA9IHRoaXMuZXh0cmFjdEp1bGlhbkRheVRpbWUoanVsaWFuRGF5KTtcbiAgICAgICAgXG4gICAgICAgIGp1bGlhbkRheSA9IHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUoanVsaWFuRGF5KTtcbiAgICAgICAganVsaWFuRGF5ID0gTWF0aC5mbG9vcihqdWxpYW5EYXkpICsgMC41O1xuICAgICAgICBcbiAgICAgICAgbGV0IHllYXIgPSBNYXRoLmZsb29yKCgoKGp1bGlhbkRheSAtIHRoaXMuU2hpYUVwb2NoKSAqIDMwKSArIDEwNjQ2KSAvIDEwNjMxKTtcbiAgICAgICAgbGV0IG1vbnRoID0gTWF0aC5taW4oMTIsIE1hdGguY2VpbCgoanVsaWFuRGF5IC0gKDI5ICsgdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZSh0aGlzLmRhdGVUb0p1bGlhbkRheSh5ZWFyLCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSkgLyAyOS41KSArIDEpO1xuICAgICAgICBsZXQgZGF5T2ZZZWFyID0ganVsaWFuRGF5IC0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZSh0aGlzLmRhdGVUb0p1bGlhbkRheSh5ZWFyLCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpO1xuICAgICAgICBsZXQgZGF5cyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgICAgICAgICAgIGRheXMgKz0gdGhpcy5kYXlzSW5Nb250aCh5ZWFyLCBpKTtcbiAgICAgICAgICAgIGlmIChkYXlPZlllYXIgPCBkYXlzKSB7XG4gICAgICAgICAgICAgICAgbW9udGggPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBkYXkgPSAoanVsaWFuRGF5IC0gKChkYXlzIC0gdGhpcy5kYXlzSW5Nb250aCh5ZWFyLCBtb250aCkpICsgKCh5ZWFyIC0gMSkgKiAzNTQpICsgTWF0aC5mbG9vcigoMyArICgxMSAqIHllYXIpKSAvIDMwKSArIHRoaXMuU2hpYUVwb2NoKSArIDEpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgIFx0XCJ5ZWFyXCI6IHllYXIsXG4gICAgICAgIFx0XCJtb250aFwiOiBtb250aCxcbiAgICAgICAgXHRcImRheVwiOiBkYXksXG4gICAgICAgIFx0XCJob3VyXCI6IHRpbWUuaG91cixcbiAgICAgICAgXHRcIm1pbnV0ZVwiOiB0aW1lLm1pbnV0ZSxcbiAgICAgICAgXHRcInNlY29uZFwiOiB0aW1lLnNlY29uZCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRheXNJbk1vbnRoICh5ZWFyLCBtb250aCkge1xuIFx0XHRsZXQgaXNsYW1pY0RheXNJbk1vbnRoID0gWzMwLCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMjldOyAvLzMwXG4gICAgICAgIGxldCBzaGlhRGF5c0luTW9udGhJblllYXJzID0ge1xuICAgICAgICAgICAgMTQzNTogWzI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMzAsIDMwLCAyOSwgMzBdLFxuICAgICAgICAgICAgMTQzNjogWzI5LCAzMCwgMjksIDI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMzBdLFxuICAgICAgICAgICAgMTQzNzogWzI5LCAzMCwgMzAsIDI5LCAzMCwgMjksIDI5LCAzMCwgMjksIDI5LCAzMCwgMzBdLFxuICAgICAgICAgICAgMTQzODogWzI5LCAzMCwgMzAsIDMwLCAyOSwgMzAsIDI5LCAyOSwgMzAsIDI5LCAyOSwgMzBdLFxuICAgICAgICAgICAgMTQzOTogWzI5LCAzMCwgMzAsIDMwLCAzMCwgMjksIDMwLCAyOSwgMjksIDMwLCAyOSwgMjldLFxuICAgICAgICAgICAgMTQ0MDogWzMwLCAyOSwgMzAsIDMwLCAzMCwgMjksIDI5LCAzMCwgMjksIDMwLCAyOSwgMjldLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXhjZXB0aW9uKFwiJG1vbnRoIE91dCBPZiBSYW5nZSBFeGNlcHRpb25cIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hpYURheXNJbk1vbnRoSW5ZZWFyc1t5ZWFyXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNsYW1pY0RheXNJbk1vbnRoW21vbnRoIC0gMV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2hpYURheXNJbk1vbnRoSW5ZZWFyc1t5ZWFyXVttb250aCAtIDFdOyAgIFx0XG4gICAgfVxuXG4gICAgaXNMZWFwICh5ZWFyKSB7XG4gICAgICAgIGxldCBpc0xlYXAgPSAoKCh5ZWFyICogMTEpICsgMTQpICUgMzApIDwgMTE7XG5cdFx0cmV0dXJuIGlzTGVhcDtcblx0fVxufVxuIiwiXG5jbGFzcyBEYXRlRm9ybWF0IHtcblx0XG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHR0aGlzLl9jYWxlbmRhciA9IG51bGw7XG5cdH1cblxuXHRzZXRDYWxlbmRhciAoY2FsZW5kYXIpIHtcblx0XHR0aGlzLl9jYWxlbmRhciA9IGNhbGVuZGFyIGluc3RhbmNlb2YgQ2FsZW5kYXJNYW5hZ2VyID8gY2FsZW5kYXIgOiBudWxsO1xuXHR9XG5cblx0Z2V0Q2FsZW5kYXIgKCkge1xuXHRcdHJldHVybiB0aGlzLl9jYWxlbmRhcjtcblx0fVxuXG5cdGZvcm1hdCAoKSB7XG5cdFx0aWYodGhpcy5nZXRDYWxlbmRhcigpID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gXCJcIjtcblx0XHR9XG5cblx0XHRyZXR1cm4gYCR7dGhpcy5fY2FsZW5kYXIuZ2V0WWVhcigpfS0ke3RoaXMuX2NhbGVuZGFyLmdldE1vbnRoKCl9LSR7dGhpcy5fY2FsZW5kYXIuZ2V0RGF5KCl9ICR7dGhpcy5fY2FsZW5kYXIuZ2V0SG91cigpfToke3RoaXMuX2NhbGVuZGFyLmdldE1pbnV0ZSgpfToke3RoaXMuX2NhbGVuZGFyLmdldFNlY29uZCgpfWA7XG5cdH1cbn1cbiIsIlxuY2xhc3MgU2ltcGxlRGF0ZUZvcm1hdCBleHRlbmRzIERhdGVGb3JtYXQge1xuXHRcblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRmb3JtYXQgKHBhdHRlcm4sIGxvY2FsZSkge1xuXHRcdHJldHVybiB0aGlzLmNvbXBpbGUocGF0dGVybiwgbG9jYWxlKTtcblx0fVxuXG5cdGNvbXBpbGUgKHBhdHRlcm4sIGxvY2FsZSkge1xuXHRcdHBhdHRlcm4gPSBTdHJpbmcocGF0dGVybikudG9Mb3dlckNhc2UoKTtcblxuXHRcdGxldCByZXN1bHQgPSBwYXR0ZXJuO1xuXG5cdFx0Y29uc3QgU2lnbnMgPSBbJ3knLCAnbScsICdkJ107XG5cdFx0Y29uc3QgRnVsbFllYXIgPSAneXl5eSc7XG5cdFx0Y29uc3QgU2hvcnRZZWFyID0gJ3l5Jztcblx0XHRjb25zdCBNb250aCA9ICdtbSc7XG5cdFx0Y29uc3QgU2luZ2xlTW9udGggPSAnbSc7XG5cdFx0Y29uc3QgRGF5ID0gJ2RkJztcblx0XHRjb25zdCBTaW5nbGVEYXkgPSAnZCc7XG5cblx0XHRsZXQgY2hhcnMgPSBbXTtcblx0XHRsZXQgcHJldkNoYXIgPSAnJztcblx0XHRsZXQgY3VyckNoYXIgPSAnJztcblx0XHRsZXQgaW5kZXggPSAwO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYXR0ZXJuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjdXJyQ2hhciA9IFNpZ25zLmluY2x1ZGVzKHBhdHRlcm5baV0pID8gcGF0dGVybltpXSA6ICcnO1xuXG5cdFx0XHRpZihjdXJyQ2hhciA9PT0gJycpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKGN1cnJDaGFyID09PSBwcmV2Q2hhcikge1xuXHRcdFx0XHRjaGFyc1tpbmRleF0udGV4dCArPSBjdXJyQ2hhcjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNoYXJzWysraW5kZXhdID0geyB0ZXh0OiBjdXJyQ2hhciwgcG9zaXRpb246IGl9O1xuXHRcdFx0fVxuXHRcdFx0cHJldkNoYXIgPSBjdXJyQ2hhcjtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpIGluIGNoYXJzKSB7XG5cdFx0XHRzd2l0Y2ggKGNoYXJzW2ldLnRleHQpIHtcblx0XHRcdFx0Y2FzZSBGdWxsWWVhcjpcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShGdWxsWWVhciwgdGhpcy5nZXRDYWxlbmRhcigpLmdldFllYXIoKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFNob3J0WWVhcjpcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShTaG9ydFllYXIsIFN0cmluZyh0aGlzLmdldENhbGVuZGFyKCkuZ2V0WWVhcigpKS5zdWJzdHIoLTIsIDIpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgU2luZ2xlTW9udGg6XG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoU2luZ2xlTW9udGgsIHRoaXMuZ2V0Q2FsZW5kYXIoKS5nZXRNb250aCgpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgTW9udGg6XG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoTW9udGgsIHRoaXMuZ2V0Q2FsZW5kYXIoKS5nZXRNb250aCgpID4gOSA/IHRoaXMuZ2V0Q2FsZW5kYXIoKS5nZXRNb250aCgpIDogJzAnICsgdGhpcy5nZXRDYWxlbmRhcigpLmdldE1vbnRoKCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBTaW5nbGVEYXk6XG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoU2luZ2xlRGF5LCB0aGlzLmdldENhbGVuZGFyKCkuZ2V0RGF5KCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBEYXk6XG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoRGF5LCB0aGlzLmdldENhbGVuZGFyKCkuZ2V0RGF5KCkgPiA5ID8gdGhpcy5nZXRDYWxlbmRhcigpLmdldERheSgpIDogJzAnICsgdGhpcy5nZXRDYWxlbmRhcigpLmdldERheSgpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cbiIsIlxuY2xhc3MgQ29uc3RhbnRzIHtcblx0IFxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cblx0fVxufVxuIiwiXG5jbGFzcyBMb2NhbGl6YXRpb24ge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLl9sYW5ncyA9IHt9O1xuICAgICAgICB0aGlzLl9sb2NhbGUgPSAnZmEnO1xuICAgIH1cblxuICAgIHNldExhbmcgKG5hbWUsIHRyYW5zKSB7XG4gICAgICAgIHRoaXMuX2xhbmdzW25hbWVdID0gdHJhbnM7XG4gICAgfVxuXG4gICAgc2V0TG9jYWxlKGxvY2FsZSkge1xuICAgICAgICB0aGlzLl9sb2NhbGUgPSBsb2NhbGUgfHwgdGhpcy5fbG9jYWxlO1xuICAgIH1cblxuICAgIGdldExvY2FsZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gICAgfVxuXG4gICAgaXNMb2NhbGUgKGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxlID09PSBsb2NhbGU7XG4gICAgfVxuXG4gICAgaGFzVHJhbnNLZXkgKGtleSwgbG9jYWxlKSB7XG4gICAgICAgIGxldCBzdWJLZXlzID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgICAgIGlmICh0aGlzLl9sYW5nc1tsb2NhbGVdID09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5fbGFuZ3NbbG9jYWxlXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3ViS2V5c1tpXSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHRbc3ViS2V5c1tpXV07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0VHJhbnMgKGtleSwgbG9jYWxlKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmhhc1RyYW5zS2V5KGtleSwgbG9jYWxlKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCA/IHJlc3VsdCA6IGtleTtcbiAgICB9XG5cbiAgICB0cmFucyAoa2V5LCBsb2NhbGUpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8IHRoaXMuX2xvY2FsZTtcbiAgICAgICAga2V5ID0ga2V5IHx8ICcnO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRUcmFucyhrZXksIGxvY2FsZSk7XG4gICAgfVxufVxuIiwiXG5jbGFzcyBQYXNvb25hdGUgZXh0ZW5kcyBDb25zdGFudHMge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3RhdGljIG1ha2UgKHRpbWVzdGFtcCwgdGltZXpvbmVPZmZzZXQpIHtcblx0XHRyZXR1cm4gbmV3IENhbGVuZGFyTWFuYWdlcih0aW1lc3RhbXAsIHRpbWV6b25lT2Zmc2V0KTtcblx0fVxuXG5cdHN0YXRpYyB0cmFucyAoa2V5LCBsb2NhbGUpIHtcblx0XHRyZXR1cm4gUGFzb29uYXRlLmxvY2FsaXphdGlvbi50cmFucyhrZXksIGxvY2FsZSk7XG5cdH1cblxuXHRzdGF0aWMgc2V0TG9jYWxlIChsb2NhbGUpIHtcblx0XHRQYXNvb25hdGUubG9jYWxpemF0aW9uLnNldExvY2FsZShsb2NhbGUpO1xuXHR9XG5cblx0c3RhdGljIGdldExvY2FsICgpIHtcblx0XHRyZXR1cm4gUGFzb29uYXRlLmxvY2FsaXphdGlvbi5nZXRMb2NhbCgpO1xuXHR9XG5cblx0c3RhdGljIGlzTG9jYWwgKGxvY2FsZSkge1xuXHRcdHJldHVybiBQYXNvb25hdGUubG9jYWxpemF0aW9uLmlzTG9jYWwobG9jYWxlKTtcblx0fVxuXG5cdHN0YXRpYyBzZXRGb3JtYXR0ZXIgKGZvcm1hdHRlcikge1xuXHRcdFBhc29vbmF0ZS5mb3JtYXR0ZXIgPSBmb3JtYXR0ZXIgaW5zdGFuY2VvZiBEYXRlRm9ybWF0ID8gZm9ybWF0dGVyIDogbmV3IFNpbXBsZURhdGVGb3JtYXQoKTtcblx0fVxufVxuXG5QYXNvb25hdGUubG9jYWxpemF0aW9uID0gbmV3IExvY2FsaXphdGlvbigpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFBhc29vbmF0ZSwgJ2xvY2FsaXphdGlvbicsIHtcbiAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiBmYWxzZVxufSk7XG5cblBhc29vbmF0ZS5mb3JtYXR0ZXIgPSBuZXcgU2ltcGxlRGF0ZUZvcm1hdCgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFBhc29vbmF0ZSwgJ2Zvcm1hdHRlcicsIHtcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlXG59KTtcbiIsIlxubGV0IGZhID0ge1xuXHRncmVnb3JpYW46IHtcblx0XHRkYXlfbmFtZToge1xuXHRcdFx0c3VuZGF5OiBcIlN1bmRheVwiXG5cdFx0fVxuXHR9LFxuXHRqYWxhbGk6IHt9LFxuXHRpc2xhbWljOiB7fSxcblx0c2hpYToge31cbn07XG5cblBhc29vbmF0ZS5sb2NhbGl6YXRpb24uc2V0TGFuZygnZmEnLCBmYSk7Il19
